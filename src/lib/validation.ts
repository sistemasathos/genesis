import { obligatorySyllabus } from '../data/syllabus'
import type { Lesson, Question } from '../models/types'

export interface IntegrityIssue {
  level: 'erro' | 'aviso'
  code: string
  message: string
  targetId?: string
}

export function validateQuestions(questions: Question[]): IntegrityIssue[] {
  const issues: IntegrityIssue[] = []
  const ids = new Set<string>()
  for (const question of questions) {
    if (ids.has(question.id)) issues.push({ level: 'erro', code: 'id_duplicado', message: `ID duplicado: ${question.id}`, targetId: question.id })
    ids.add(question.id)
    if (!question.stem.trim()) issues.push({ level: 'erro', code: 'enunciado_vazio', message: 'Enunciado vazio', targetId: question.id })
    if (question.choices.length < 5) {
      issues.push({ level: 'erro', code: 'alternativas', message: 'Questão sem as cinco alternativas A-E', targetId: question.id })
    }
    const choiceIds = new Set(question.choices.map((item) => item.id))
    for (const choice of question.choices) {
      if (!choice.text.trim()) issues.push({ level: 'erro', code: 'alternativa_vazia', message: `Alternativa ${choice.id} vazia`, targetId: question.id })
    }
    if (question.answerKey && !choiceIds.has(question.answerKey)) {
      issues.push({ level: 'erro', code: 'gabarito_invalido', message: 'Gabarito não aponta para alternativa existente', targetId: question.id })
    }
    if (question.validationStatus !== 'extracted_pending_key' && question.answerKey == null) {
      issues.push({ level: 'erro', code: 'sem_gabarito', message: 'Questão utilizável sem gabarito', targetId: question.id })
    }
    if (!question.disciplineId || !question.topicId) {
      issues.push({ level: 'erro', code: 'sem_topico', message: 'Questão sem disciplina ou tópico', targetId: question.id })
    }
    if (question.origin === 'prova_anterior' && !question.sourceId) {
      issues.push({ level: 'aviso', code: 'fonte', message: 'Questão oficial sem fonte', targetId: question.id })
    }
    if (question.answerKey && question.commentCorrect && /alternativa [abcde]/i.test(question.commentCorrect)) {
      const mentioned = question.commentCorrect.match(/alternativa ([A-E])/i)?.[1]?.toUpperCase()
      if (mentioned && mentioned !== question.answerKey) {
        issues.push({ level: 'aviso', code: 'gabarito_explicacao', message: 'Explicação menciona outra alternativa', targetId: question.id })
      }
    }
  }
  return issues
}

export function validateLessons(lessons: Lesson[]): IntegrityIssue[] {
  const issues: IntegrityIssue[] = []
  for (const lesson of lessons) {
    const text = [...lesson.essencial, ...lesson.completo].map((block) => block.body).join(' ')
    if (text.trim().length < 120) {
      issues.push({ level: 'erro', code: 'licao_vazia', message: `Lição sem desenvolvimento: ${lesson.id}`, targetId: lesson.id })
    }
    if (!lesson.title.trim() || !lesson.objective.trim()) {
      issues.push({ level: 'erro', code: 'titulo', message: `Lição sem título ou objetivo: ${lesson.id}`, targetId: lesson.id })
    }
  }
  return issues
}

export function validateCoverage(lessons: Lesson[]): IntegrityIssue[] {
  const lessonIds = new Set(lessons.map((item) => item.id))
  return obligatorySyllabus()
    .filter((item) => !lessonIds.has(item.lessonId))
    .map((item) => ({
      level: 'erro' as const,
      code: 'edital_sem_licao',
      message: `Item do edital sem lição: ${item.editalItem}`,
      targetId: item.id,
    }))
}

export function usableQuestions(questions: Question[]): Question[] {
  return questions.filter(
    (item) => item.answerKey != null && item.choices.length >= 2 && item.validationStatus !== 'extracted_pending_key',
  )
}
