import type { ChoiceId, Difficulty, DisciplineId, Question } from '../../models/types'

export function mcq(input: {
  id: string
  disciplineId: DisciplineId
  topicId: string
  lessonId: string
  stem: string
  choices: [string, string, string, string, string]
  answer: ChoiceId
  comment: string
  wrong?: Partial<Record<ChoiceId, string>>
  concept: string
  difficulty?: Difficulty
  traps?: string[]
  seconds?: number
  strategyKind?: Question['strategyKind']
  supportText?: string
}): Question {
  const letters: ChoiceId[] = ['A', 'B', 'C', 'D', 'E']
  return {
    id: input.id,
    disciplineId: input.disciplineId,
    areaId: input.disciplineId,
    chapterId: input.topicId,
    topicId: input.topicId,
    lessonId: input.lessonId,
    reviewLessonId: input.lessonId,
    stem: input.stem,
    supportText: input.supportText,
    choices: letters.map((id, index) => ({ id, text: input.choices[index] })),
    answerKey: input.answer,
    commentCorrect: input.comment,
    commentWrong: input.wrong ?? {},
    concept: input.concept,
    mainDifficulty: input.traps?.[0] ?? 'Aplicação direta do conteúdo do edital',
    howToRecognize: 'Leia o comando (correta/incorreta/exceto), isole a regra e elimine o que contradiz o enunciado.',
    difficulty: input.difficulty ?? 'media',
    skills: ['conteudo', 'eliminacao'],
    origin: 'inedita',
    sourceId: 'src-plataforma',
    validationStatus: 'inedita_revisada',
    traps: input.traps ?? [],
    expectedSeconds: input.seconds ?? 75,
    strategyKind: input.strategyKind,
  }
}
