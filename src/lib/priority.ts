import { CONTEST } from '../data/contest'
import { obligatorySyllabus } from '../data/syllabus'
import type { DisciplineId, LessonProgress, QuestionAttempt, ReviewItem } from '../models/types'
import { daysUntil, todayISO } from './id'
import { masteryFromAttempts } from './mastery'

export interface PriorityItem {
  syllabusId: string
  lessonId: string
  disciplineId: DisciplineId
  title: string
  score: number
  reasons: string[]
}

export function rankPriorities(params: {
  progress: LessonProgress[]
  attempts: QuestionAttempt[]
  reviews: ReviewItem[]
  examDate: string
  today?: string
}): PriorityItem[] {
  const today = params.today ?? todayISO()
  const days = Math.max(1, daysUntil(params.examDate, today))
  return obligatorySyllabus()
    .map((item) => {
      const reasons: string[] = []
      const lesson = params.progress.find((row) => row.lessonId === item.lessonId)
      const relatedAttempts = params.attempts.filter((attempt) =>
        attempt.questionId.includes(item.topicId) || attempt.questionId.startsWith(item.lessonId),
      )
      const mastery = masteryFromAttempts(relatedAttempts)
      const weight = CONTEST.blueprint.distribution[item.disciplineId].points
      let score = weight
      reasons.push(`Disciplina vale ${weight} pontos na prova.`)
      if (!lesson || lesson.status === 'nao_iniciada') {
        score += 40
        reasons.push('Assunto obrigatório ainda não estudado.')
      } else if (lesson.status === 'em_estudo') {
        score += 20
        reasons.push('Estudo iniciado, sem fechamento.')
      }
      if (mastery === 'insuficiente' || mastery === 'em_construcao') {
        score += 25
        reasons.push('Amostra de questões insuficiente ou desempenho baixo.')
      } else if (mastery === 'parcial') {
        score += 12
        reasons.push('Domínio parcial: precisa de mais consistência.')
      } else if (mastery === 'dominado') {
        score -= 15
        reasons.push('Já há consistência; manter com revisão, sem monopolizar o tempo.')
      }
      const overdue = params.reviews.filter((row) => row.targetId === item.lessonId && row.dueAt <= today)
      if (overdue.length) {
        score += 18
        reasons.push(`${overdue.length} revisão(ões) atrasada(s).`)
      }
      if (days <= 14) {
        score += 8
        reasons.push('Proximidade da prova aumenta a urgência da cobertura obrigatória.')
      }
      if (relatedAttempts.length === 0) {
        score += 10
        reasons.push('Ainda não há estatística confiável neste tópico.')
      }
      return {
        syllabusId: item.id,
        lessonId: item.lessonId,
        disciplineId: item.disciplineId,
        title: item.title,
        score,
        reasons,
      }
    })
    .sort((a, b) => b.score - a.score)
}
