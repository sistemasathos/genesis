import { CONTEST } from '../data/contest'
import type {
  ChoiceId,
  DisciplineId,
  Question,
  QuestionAttempt,
  SimuladoResult,
} from '../models/types'

export function isCorrect(question: Question, choice: ChoiceId | null): boolean | null {
  if (question.answerKey == null || choice == null) return null
  return question.answerKey === choice
}

export function officialPoints(correctCount: number): number {
  return correctCount * CONTEST.blueprint.weightPerQuestion
}

export function passingPoints(discipline: DisciplineId): number {
  return CONTEST.blueprint.distribution[discipline].points * CONTEST.blueprint.passingPerDisciplineRatio
}

export function scoreSimulado(
  questions: Question[],
  answers: Record<string, ChoiceId | null>,
  elapsedSeconds: number,
  attempts: Pick<QuestionAttempt, 'questionId' | 'confidence'>[] = [],
): SimuladoResult {
  const confidenceByQuestion = new Map(attempts.map((item) => [item.questionId, item.confidence]))
  let answered = 0
  let blank = 0
  let correct = 0
  let wrong = 0
  let highConfidenceWrong = 0
  let lowConfidenceCorrect = 0
  const byDiscipline: SimuladoResult['byDiscipline'] = {}
  const byTopic: SimuladoResult['byTopic'] = {}

  for (const question of questions) {
    const disc = byDiscipline[question.disciplineId] ?? {
      correct: 0,
      total: 0,
      points: 0,
      max: 0,
      passed: null,
    }
    disc.total += 1
    disc.max += CONTEST.blueprint.weightPerQuestion
    const topic = byTopic[question.topicId] ?? { correct: 0, total: 0 }
    topic.total += 1

    const choice = answers[question.id] ?? null
    const result = isCorrect(question, choice)
    if (choice == null) blank += 1
    else answered += 1

    if (result === true) {
      correct += 1
      disc.correct += 1
      disc.points += CONTEST.blueprint.weightPerQuestion
      topic.correct += 1
      if ((confidenceByQuestion.get(question.id) ?? 3) <= 2) lowConfidenceCorrect += 1
    } else if (result === false) {
      wrong += 1
      if ((confidenceByQuestion.get(question.id) ?? 3) >= 4) highConfidenceWrong += 1
    }

    byDiscipline[question.disciplineId] = disc
    byTopic[question.topicId] = topic
  }

  for (const [id, row] of Object.entries(byDiscipline)) {
    const required = passingPoints(id as DisciplineId)
    if (CONTEST.blueprint.distribution[id as DisciplineId]?.questions) {
      row.passed = row.points >= required
    }
  }

  const scored = questions.filter((q) => q.answerKey != null).length
  const officialMax = questions.length * CONTEST.blueprint.weightPerQuestion
  const priorityReview = Object.entries(byTopic)
    .filter(([, row]) => row.total > 0 && row.correct / row.total < 0.6)
    .sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
    .map(([topicId]) => topicId)

  return {
    answered,
    blank,
    correct,
    wrong,
    rawPercent: scored === 0 ? 0 : (correct / scored) * 100,
    officialPoints: officialPoints(correct),
    officialMax,
    byDiscipline,
    byTopic,
    elapsedSeconds,
    avgSeconds: questions.length === 0 ? 0 : elapsedSeconds / questions.length,
    highConfidenceWrong,
    lowConfidenceCorrect,
    priorityReview,
  }
}

export function wouldPassOfficial(result: SimuladoResult): boolean {
  const required = ['portugues', 'rlm', 'informatica', 'especificos'] as DisciplineId[]
  return required.every((id) => result.byDiscipline[id]?.passed === true)
}

export function randomHitProbability(remainingChoices: number): number {
  if (remainingChoices <= 0) return 0
  return 1 / remainingChoices
}

export function expectedValueNoPenalty(probability: number, weight = CONTEST.blueprint.weightPerQuestion): number {
  return probability * weight
}
