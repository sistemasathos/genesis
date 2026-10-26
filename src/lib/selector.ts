import type {
  LessonProgress,
  Question,
  QuestionAttempt,
  ReviewItem,
  SelectorWeights,
  UserSettings,
} from '../models/types'
import { daysUntil, todayISO } from './id'
import { masteryFromAttempts } from './mastery'

export interface SelectorContext {
  questions: Question[]
  attempts: QuestionAttempt[]
  reviews: ReviewItem[]
  lessonProgress: LessonProgress[]
  settings: UserSettings
  sessionUsed: Set<string>
  now?: string
}

function lastAttempt(attempts: QuestionAttempt[], questionId: string): QuestionAttempt | undefined {
  return [...attempts].reverse().find((item) => item.questionId === questionId)
}

function errorRate(attempts: QuestionAttempt[], questionId: string): number {
  const rows = attempts.filter((item) => item.questionId === questionId && item.correct != null)
  if (!rows.length) return 0
  return rows.filter((item) => item.correct === false).length / rows.length
}

function scoreQuestion(question: Question, ctx: SelectorContext, weights: SelectorWeights): number {
  const today = ctx.now ?? todayISO()
  const history = ctx.attempts.filter((item) => item.questionId === question.id)
  const last = lastAttempt(ctx.attempts, question.id)
  const unseen = history.length === 0 ? weights.unseen : 0
  const lesson = ctx.lessonProgress.find((item) => item.lessonId === question.lessonId)
  const unstudied = !lesson || lesson.status === 'nao_iniciada' ? weights.unstudied : 0
  const err = errorRate(ctx.attempts, question.id) * weights.errorRate
  const marked = last?.markedForReview ? weights.markedReview : 0
  const mastery = masteryFromAttempts(history)
  const lowMastery =
    mastery === 'insuficiente' || mastery === 'em_construcao' ? weights.lowMastery : mastery === 'parcial' ? weights.lowMastery / 2 : 0
  const review = ctx.reviews.find((item) => item.targetId === question.id || item.targetId === question.topicId)
  const overdue = review && review.dueAt <= today ? weights.overdueReview : 0
  const previousError = last?.correct === false ? weights.previousError : 0
  const daysSince = last ? Math.max(0, daysUntil(today, last.createdAt.slice(0, 10))) : 30
  const recency = last?.correct && daysSince < 2 ? -weights.timeSinceReview : (daysSince / 10) * weights.timeSinceReview
  const pref = ctx.settings.preferredDifficulty
  const difficultyFit =
    pref === 'mista' || pref === question.difficulty ? weights.difficultyFit : weights.difficultyFit / 3
  const daysToExam = daysUntil(ctx.settings.examDate, today)
  const examProximity = daysToExam <= 14 ? weights.examProximity : daysToExam <= 30 ? weights.examProximity / 2 : 0
  const frequency = question.recurrenceNote ? weights.documentedFrequency : 0
  return unseen + unstudied + err + marked + lowMastery + overdue + previousError + recency + difficultyFit + examProximity + frequency
}

export function selectQuestions(
  ctx: SelectorContext,
  count: number,
  filter?: (question: Question) => boolean,
): { items: Question[]; reused: boolean; warning?: string } {
  const weights = ctx.settings.selectorWeights
  const pool = ctx.questions.filter((question) => {
    if (question.answerKey == null) return false
    if (question.validationStatus === 'extracted_pending_key') return false
    if (ctx.sessionUsed.has(question.id)) return false
    return filter ? filter(question) : true
  })
  if (pool.length === 0) {
    return { items: [], reused: false, warning: 'Não há questões disponíveis para este filtro.' }
  }

  const unseen = pool.filter((question) => !ctx.attempts.some((item) => item.questionId === question.id))
  const ranked = [...pool].sort((a, b) => scoreQuestion(b, ctx, weights) - scoreQuestion(a, ctx, weights))
  const coverageBoost = new Map<string, number>()
  for (const question of ranked) {
    coverageBoost.set(question.topicId, (coverageBoost.get(question.topicId) ?? 0) + 1)
  }

  const picked: Question[] = []
  const topicCount = new Map<string, number>()
  const preferUnseen = unseen.length > 0
  const source = preferUnseen ? ranked.filter((q) => unseen.includes(q)).concat(ranked) : ranked

  for (const question of source) {
    if (picked.find((item) => item.id === question.id)) continue
    const usedTopic = topicCount.get(question.topicId) ?? 0
    const coveragePenalty = usedTopic * weights.coverageBalance
    if (coveragePenalty > 30 && picked.length + 1 < count) continue
    picked.push(question)
    topicCount.set(question.topicId, usedTopic + 1)
    if (picked.length >= count) break
  }

  let reused = picked.some((item) => ctx.attempts.some((attempt) => attempt.questionId === item.id))
  let warning: string | undefined
  if (picked.length < count) {
    const extras = pool.filter((question) => !picked.some((item) => item.id === question.id))
    picked.push(...extras.slice(0, count - picked.length))
    reused = true
    warning = 'O banco ficou insuficiente sem repetição. Alternando as melhores questões disponíveis.'
  }
  if (preferUnseen && unseen.length < count) {
    warning = (warning ? `${warning} ` : '') + 'Não há questões inéditas suficientes para este filtro.'
    reused = true
  }
  return { items: picked.slice(0, count), reused, warning }
}

export function shuffleInPlace<T>(items: T[], random = Math.random): T[] {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}
