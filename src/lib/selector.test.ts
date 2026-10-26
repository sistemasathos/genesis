import { selectQuestions } from './selector'
import { defaultSettings } from './defaults'
import type { Question } from '../models/types'

function make(id: string): Question {
  return {
    id,
    disciplineId: 'portugues',
    areaId: 'portugues',
    chapterId: 'c',
    topicId: `t-${id}`,
    stem: id,
    choices: ['A', 'B', 'C', 'D', 'E'].map((letter) => ({ id: letter as 'A', text: letter })),
    answerKey: 'A',
    commentCorrect: 'a',
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

test('não repete questão na mesma sessão', () => {
  const questions = [make('1'), make('2'), make('3')]
  const used = new Set(['1'])
  const result = selectQuestions(
    {
      questions,
      attempts: [],
      reviews: [],
      lessonProgress: [],
      settings: defaultSettings('p'),
      sessionUsed: used,
    },
    2,
  )
  expect(result.items.find((item) => item.id === '1')).toBeUndefined()
})

test('avisa quando precisa repetir', () => {
  const questions = [make('1')]
  const result = selectQuestions(
    {
      questions,
      attempts: [
        {
          id: 'a',
          profileId: 'p',
          questionId: '1',
          choiceId: 'A',
          correct: true,
          elapsedMs: 1,
          createdAt: '2026-10-01T00:00:00.000Z',
          markedForReview: false,
        },
      ],
      reviews: [],
      lessonProgress: [],
      settings: defaultSettings('p'),
      sessionUsed: new Set(),
    },
    3,
  )
  expect(result.warning).toBeTruthy()
})
