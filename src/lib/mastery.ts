import type { LessonProgress, MasteryLevel, Question, QuestionAttempt } from '../models/types'

export function masteryFromAttempts(attempts: QuestionAttempt[]): MasteryLevel {
  if (attempts.length < 3) return 'insuficiente'
  const recent = attempts.slice(-8)
  const scored = recent.filter((item) => item.correct != null)
  if (scored.length < 3) return 'insuficiente'
  const rate = scored.filter((item) => item.correct).length / scored.length
  const highConfidenceWrong = scored.filter((item) => item.correct === false && (item.confidence ?? 3) >= 4).length
  if (rate >= 0.85 && scored.length >= 5 && highConfidenceWrong === 0) return 'dominado'
  if (rate >= 0.75 && scored.length >= 4) return 'consistente'
  if (rate >= 0.55) return 'parcial'
  return 'em_construcao'
}

export function lessonMastery(
  progress: LessonProgress | undefined,
  questions: Question[],
  attempts: QuestionAttempt[],
): MasteryLevel {
  const related = attempts.filter((item) => questions.some((question) => question.id === item.questionId))
  const fromQuestions = masteryFromAttempts(related)
  if (!progress || progress.status === 'nao_iniciada') {
    return related.length ? fromQuestions : 'insuficiente'
  }
  if (progress.status === 'em_estudo' && fromQuestions === 'insuficiente') return 'em_construcao'
  if (progress.status === 'estudada' && fromQuestions === 'insuficiente') return 'em_construcao'
  return fromQuestions
}

export function studiedIsNotMastered(): string {
  return 'Lição lida não é domínio. O nível considera quantidade de questões, desempenho recente, consistência e confiança.'
}
