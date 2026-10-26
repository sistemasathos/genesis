import { LESSONS, QUESTIONS } from './catalog'
import { obligatorySyllabus } from '../data/syllabus'
import { validateCoverage, validateLessons, validateQuestions } from '../lib/validation'

test('questões têm id único, 5 alternativas e gabarito válido', () => {
  const issues = validateQuestions(QUESTIONS).filter((item) => item.level === 'erro')
  expect(issues).toEqual([])
  expect(QUESTIONS.length).toBeGreaterThan(80)
})

test('lições têm desenvolvimento e cobrem o edital obrigatório', () => {
  expect(validateLessons(LESSONS).filter((item) => item.level === 'erro')).toEqual([])
  expect(validateCoverage(LESSONS)).toEqual([])
})

test('toda questão aponta para lição existente', () => {
  const ids = new Set(LESSONS.map((item) => item.id))
  for (const question of QUESTIONS) {
    if (question.lessonId) expect(ids.has(question.lessonId)).toBe(true)
    expect(question.origin).toBe('inedita')
    expect(question.sourceId).toBe('src-plataforma')
  }
})

test('itens obrigatórios do edital não desapareceram', () => {
  expect(obligatorySyllabus().length).toBeGreaterThanOrEqual(39)
})

test('catálogo efetivo tem 58 lições e 217 questões inéditas', () => {
  expect(LESSONS).toHaveLength(58)
  expect(QUESTIONS).toHaveLength(217)
  expect(QUESTIONS.every((item) => item.origin === 'inedita')).toBe(true)
  expect(LESSONS.filter((item) => item.disciplineId === 'estrategias')).toHaveLength(8)
  expect(QUESTIONS.filter((item) => item.disciplineId === 'estrategias')).toHaveLength(26)
})
