import { expectedValueNoPenalty, officialPoints, randomHitProbability, scoreSimulado, wouldPassOfficial } from './scoring'
import type { Question } from '../models/types'

function q(id: string, disciplineId: Question['disciplineId'], answer: 'A' | 'B'): Question {
  return {
    id,
    disciplineId,
    areaId: disciplineId,
    chapterId: id,
    topicId: id,
    stem: 'x',
    choices: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'b' },
      { id: 'C', text: 'c' },
      { id: 'D', text: 'd' },
      { id: 'E', text: 'e' },
    ],
    answerKey: answer,
    commentCorrect: 'ok',
    commentWrong: {},
    concept: 'c',
    mainDifficulty: 'd',
    howToRecognize: 'r',
    difficulty: 'media',
    skills: [],
    origin: 'inedita',
    sourceId: 'src-plataforma',
    validationStatus: 'inedita_revisada',
    traps: [],
    expectedSeconds: 60,
  }
}

test('pontuação oficial usa peso 2 e não confunde com percentual', () => {
  expect(officialPoints(10)).toBe(20)
  const questions = [
    q('1', 'portugues', 'A'),
    q('2', 'rlm', 'A'),
    q('3', 'informatica', 'A'),
    q('4', 'especificos', 'A'),
  ]
  const result = scoreSimulado(questions, { '1': 'A', '2': 'B', '3': null, '4': 'A' }, 120)
  expect(result.correct).toBe(2)
  expect(result.blank).toBe(1)
  expect(result.officialPoints).toBe(4)
  expect(result.rawPercent).toBe(50)
})

test('sem penalização, chute após eliminar 2 alternativas vale 2/3 do peso', () => {
  expect(randomHitProbability(5)).toBe(0.2)
  expect(expectedValueNoPenalty(randomHitProbability(3))).toBeCloseTo(2 / 3)
})

test('corte por disciplina exige 50% dos pontos da disciplina', () => {
  const questions = Array.from({ length: 4 }, (_, i) => q(String(i), 'portugues', 'A'))
  const result = scoreSimulado(
    questions,
    { '0': 'A', '1': 'B', '2': 'B', '3': 'B' },
    10,
  )
  expect(wouldPassOfficial(result)).toBe(false)
})
