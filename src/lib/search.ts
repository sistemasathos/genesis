import type { Lesson, Question, Source, SyllabusItem } from '../models/types'

export interface SearchHit {
  type: 'licao' | 'questao' | 'edital' | 'fonte'
  id: string
  title: string
  snippet: string
}

function norm(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function searchAll(
  query: string,
  lessons: Lesson[],
  questions: Question[],
  syllabus: SyllabusItem[],
  sources: Source[],
): SearchHit[] {
  const q = norm(query.trim())
  if (q.length < 2) return []
  const hits: SearchHit[] = []
  for (const lesson of lessons) {
    const blob = norm([lesson.title, lesson.objective, lesson.synthesis, ...lesson.glossary.map((g) => g.term)].join(' '))
    if (blob.includes(q)) hits.push({ type: 'licao', id: lesson.id, title: lesson.title, snippet: lesson.objective })
  }
  for (const question of questions) {
    if (norm(question.stem).includes(q) || norm(question.concept).includes(q)) {
      hits.push({ type: 'questao', id: question.id, title: question.concept, snippet: question.stem.slice(0, 160) })
    }
  }
  for (const item of syllabus) {
    if (norm(item.title + item.editalItem).includes(q)) {
      hits.push({ type: 'edital', id: item.lessonId, title: item.title, snippet: item.editalItem })
    }
  }
  for (const source of sources) {
    if (norm(source.name + (source.organ ?? '')).includes(q)) {
      hits.push({ type: 'fonte', id: source.id, title: source.name, snippet: source.reliability })
    }
  }
  return hits.slice(0, 40)
}
