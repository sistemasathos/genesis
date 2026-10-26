import { especificosLessons } from './lessons/especificos'
import { estrategiasAvancadasLessons } from './lessons/estrategiasAvancadas'
import { estrategiasLessons } from './lessons/estrategias'
import { informaticaLessons } from './lessons/informatica'
import { portuguesLessons } from './lessons/portugues'
import { rlmLessons } from './lessons/rlm'
import { especificosQuestions } from './questions/especificos'
import { estrategiasQuestions } from './questions/estrategias'
import { estruturasQuestions } from './questions/estruturas'
import { informaticaQuestions } from './questions/informatica'
import { portuguesQuestions } from './questions/portugues'
import { rlmQuestions } from './questions/rlm'
import type { Lesson, Question } from '../models/types'

export const LESSONS: Lesson[] = [
  ...portuguesLessons,
  ...rlmLessons,
  ...informaticaLessons,
  ...especificosLessons,
  ...estrategiasLessons,
  ...estrategiasAvancadasLessons,
]

export const QUESTIONS: Question[] = [
  ...portuguesQuestions,
  ...rlmQuestions,
  ...informaticaQuestions,
  ...especificosQuestions,
  ...estrategiasQuestions,
  ...estruturasQuestions,
]

export function lessonById(id: string): Lesson | undefined {
  return LESSONS.find((item) => item.id === id)
}

export function questionsForLesson(id: string): Question[] {
  return QUESTIONS.filter((item) => item.lessonId === id)
}

export function allQuestions(imported: Question[] = []): Question[] {
  const map = new Map<string, Question>()
  for (const item of [...QUESTIONS, ...imported]) map.set(item.id, item)
  return [...map.values()]
}

export function neighboringLessons(id: string): { prev?: Lesson; next?: Lesson } {
  const current = lessonById(id)
  if (!current) return {}
  const group = LESSONS.filter((item) => item.disciplineId === current.disciplineId)
  const index = group.findIndex((item) => item.id === id)
  return { prev: group[index - 1], next: group[index + 1] }
}
