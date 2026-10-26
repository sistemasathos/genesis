import type { ReactNode } from 'react'

const CUES = [
  'em qualquer hipótese',
  'exclusivamente',
  'incorreta',
  'incorreto',
  'exceto',
  'somente',
  'apenas',
  'sempre',
  'nunca',
  'falsa',
  'falso',
]

function escapeReg(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function studyNodes(text: string, terms: string[] = []): ReactNode[] {
  const usable = [...new Set(terms.map((term) => term.trim()).filter((term) => term.length >= 4))]
  const pieces = [...CUES, ...usable].sort((a, b) => b.length - a.length)
  if (!pieces.length) return [text]
  const re = new RegExp(`(?<![\\p{L}\\p{N}])(${pieces.map(escapeReg).join('|')})(?![\\p{L}\\p{N}])`, 'giu')
  const cues = new Set(CUES.map((item) => item.toLowerCase()))
  const seen = new Set<string>()
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  for (const match of text.matchAll(re)) {
    const start = match.index ?? 0
    const raw = match[1] ?? match[0]
    if (start > last) nodes.push(text.slice(last, start))
    const id = raw.toLowerCase()
    if (cues.has(id)) nodes.push(<mark key={key++} className="cue">{raw}</mark>)
    else if (!seen.has(id)) {
      seen.add(id)
      nodes.push(<strong key={key++}>{raw}</strong>)
    } else nodes.push(raw)
    last = start + raw.length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes.length ? nodes : [text]
}

export function StudyText({ text, terms = [] }: { text: string; terms?: string[] }) {
  return <>{studyNodes(text, terms)}</>
}
