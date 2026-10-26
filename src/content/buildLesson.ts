import type { DisciplineId, Lesson, LessonBlock } from '../models/types'

export function blocks(...paragraphs: string[]): LessonBlock[] {
  return paragraphs.map((body) => ({ body }))
}

export function named(heading: string, body: string): LessonBlock {
  return { heading, body }
}

type LessonInput = Omit<Lesson, 'areaId' | 'chapterId' | 'questionIds' | 'sourceIds'> & {
  areaId?: string
  chapterId?: string
  questionIds?: string[]
  sourceIds?: string[]
}

export function lesson(input: LessonInput): Lesson {
  return {
    ...input,
    areaId: input.areaId ?? input.disciplineId,
    chapterId: input.chapterId ?? input.topicId,
    questionIds: input.questionIds ?? [],
    sourceIds: input.sourceIds ?? ['src-edital', 'src-didatico'],
  }
}

export function disciplineMeta(id: DisciplineId): { areaId: string } {
  return { areaId: id }
}
