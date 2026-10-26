import { useEffect, useRef, useState, type RefObject } from 'react'
import { db } from '../lib/db'
import { uid } from '../lib/id'
import type { Lesson, LessonProgress, TextMark } from '../models/types'

export interface CheckItem {
  id: string
  group: string
  label: string
}

export function lessonChecks(
  lesson: Lesson,
  sections: { id: string; heading: string }[],
): CheckItem[] {
  const items: CheckItem[] = []
  for (const section of sections) items.push({ id: `sec:${section.id}`, group: 'Trechos da aula', label: section.heading })
  for (const item of lesson.definitions) items.push({ id: `def:${item.term}`, group: 'Definições', label: item.term })
  for (const table of lesson.comparisons ?? []) items.push({ id: `cmp:${table.title}`, group: 'Comparações', label: table.title })
  for (const example of lesson.workedExamples ?? []) items.push({ id: `work:${example.title}`, group: 'Exemplos resolvidos', label: example.title })
  if (lesson.examples.length) items.push({ id: 'hide:examples', group: 'Leitura de prova', label: 'Como o enunciado esconde o conceito' })
  for (const [index, item] of (lesson.procedures ?? []).entries()) items.push({ id: `proc:${index}`, group: 'Passo a passo', label: item })
  for (const [index, item] of lesson.commonErrors.entries()) items.push({ id: `err:${index}`, group: 'Erros para reconhecer', label: item })
  for (const [index, item] of lesson.traps.entries()) items.push({ id: `trap:${index}`, group: 'Erros para reconhecer', label: item })
  const defined = new Set(lesson.definitions.map((item) => item.term))
  for (const item of lesson.glossary) {
    if (!defined.has(item.term)) items.push({ id: `gloss:${item.term}`, group: 'Glossário', label: item.term })
  }
  for (const [index, item] of (lesson.recallPrompts ?? []).entries()) items.push({ id: `recall:${index}`, group: 'Feche o texto e responda', label: item })
  items.push({ id: 'syn', group: 'Síntese', label: lesson.synthesis })
  for (const [index, item] of lesson.masteryCriteria.entries()) items.push({ id: `master:${index}`, group: 'O que esta aula pede', label: item })
  return items
}

export function useLessonDraft(saved: LessonProgress, reload: () => Promise<void>) {
  const [notes, setNotes] = useState(saved.notes ?? '')
  const [highlights, setHighlights] = useState<TextMark[]>(saved.highlights ?? [])
  const [checks, setChecks] = useState<string[]>(saved.checks ?? [])
  const draft = useRef({ notes, highlights, checks })
  const record = useRef(saved)
  const queue = useRef(Promise.resolve())
  const skipNoteSave = useRef(true)
  draft.current = { notes, highlights, checks }

  useEffect(() => {
    record.current = saved
    setNotes(saved.notes ?? '')
    setHighlights(saved.highlights ?? [])
    setChecks(saved.checks ?? [])
    skipNoteSave.current = true
    // Só troca o rascunho ao mudar de aula. Um reload depois de gravar não pode apagar o que está sendo digitado.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saved.lessonId, saved.profileId])

  useEffect(() => {
    const lessonId = saved.lessonId
    if (skipNoteSave.current) {
      skipNoteSave.current = false
      return
    }
    const handle = window.setTimeout(() => {
      if (record.current.lessonId !== lessonId) return
      void commit()
    }, 450)
    return () => window.clearTimeout(handle)
  }, [notes, saved.lessonId])

  function commit(extra?: Partial<LessonProgress>) {
    const task = queue.current.then(async () => {
      const current = record.current
      if (!current.profileId || !current.lessonId) return
      const next: LessonProgress = {
        ...current,
        ...draft.current,
        ...extra,
        profileId: current.profileId,
        lessonId: current.lessonId,
      }
      record.current = next
      await db.saveProgress(next)
      await reload()
    })
    queue.current = task.then(() => undefined, () => undefined)
    return task
  }

  function addHighlight(quote: string) {
    const clean = quote.replace(/\s+/g, ' ').trim().slice(0, 500)
    if (clean.length < 2) return
    if (draft.current.highlights.some((item) => item.quote === clean)) return
    const next = [...draft.current.highlights, { id: uid('mark'), quote: clean }]
    draft.current = { ...draft.current, highlights: next }
    setHighlights(next)
    void commit()
  }

  function removeHighlight(id: string) {
    const next = draft.current.highlights.filter((item) => item.id !== id)
    draft.current = { ...draft.current, highlights: next }
    setHighlights(next)
    void commit()
  }

  function toggleCheck(id: string) {
    const next = draft.current.checks.includes(id)
      ? draft.current.checks.filter((item) => item !== id)
      : [...draft.current.checks, id]
    draft.current = { ...draft.current, checks: next }
    setChecks(next)
    void commit()
  }

  return { notes, setNotes, highlights, checks, addHighlight, removeHighlight, toggleCheck, commit }
}

export function rangesForQuote(root: HTMLElement, quote: string): Range[] {
  const needle = quote.replace(/\s+/g, ' ').trim().toLowerCase()
  if (!needle) return []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  let raw = ''
  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    nodes.push(node)
    raw += node.data
  }
  const map: number[] = []
  let flat = ''
  let spaced = false
  for (let index = 0; index < raw.length; index += 1) {
    if (/\s/.test(raw[index] ?? '')) {
      spaced = flat.length > 0
      continue
    }
    if (spaced) {
      map.push(index)
      flat += ' '
      spaced = false
    }
    map.push(index)
    flat += (raw[index] ?? '').toLowerCase()
  }
  const ranges: Range[] = []
  let from = 0
  while (from < flat.length && ranges.length < 12) {
    const at = flat.indexOf(needle, from)
    if (at < 0) break
    const startRaw = map[at]
    const endRaw = (map[at + needle.length - 1] ?? startRaw) + 1
    const range = locate(nodes, startRaw, endRaw)
    if (range) ranges.push(range)
    from = at + needle.length
  }
  return ranges
}

function locate(nodes: Text[], start: number, end: number): Range | null {
  let cursor = 0
  let startNode: Text | null = null
  let startOffset = 0
  let endNode: Text | null = null
  let endOffset = 0
  for (const node of nodes) {
    const next = cursor + node.data.length
    if (!startNode && start < next) {
      startNode = node
      startOffset = start - cursor
    }
    if (startNode && end <= next) {
      endNode = node
      endOffset = end - cursor
      break
    }
    cursor = next
  }
  if (!startNode || !endNode) return null
  const range = document.createRange()
  range.setStart(startNode, startOffset)
  range.setEnd(endNode, endOffset)
  return range
}

export function useStudyMarks(root: RefObject<HTMLElement | null>, highlights: TextMark[], revision: string) {
  useEffect(() => {
    const node = root.current
    const css = CSS as unknown as { highlights?: { set: (name: string, value: unknown) => void; delete: (name: string) => void } }
    if (!node || !css.highlights) return
    const HighlightCtor = (globalThis as unknown as { Highlight?: new (...ranges: Range[]) => unknown }).Highlight
    if (!HighlightCtor) return
    const ranges = highlights.flatMap((item) => rangesForQuote(node, item.quote))
    css.highlights.set('study-mark', new HighlightCtor(...ranges))
    return () => css.highlights?.delete('study-mark')
  }, [root, highlights, revision])
}

export function markAtPoint(
  root: HTMLElement,
  highlights: TextMark[],
  x: number,
  y: number,
): { id: string; x: number; y: number } | null {
  const pos = caretFromPoint(x, y)
  if (!pos || !root.contains(pos.node)) return null
  for (const item of highlights) {
    for (const range of rangesForQuote(root, item.quote)) {
      if (!rangeContains(range, pos.node, pos.offset)) continue
      const rect = [...range.getClientRects()].at(-1)
      if (!rect) continue
      return { id: item.id, x: rect.right, y: rect.top }
    }
  }
  return null
}

function caretFromPoint(x: number, y: number): { node: Node; offset: number } | null {
  const doc = document as Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null
    caretRangeFromPoint?: (x: number, y: number) => Range | null
  }
  const position = doc.caretPositionFromPoint?.(x, y)
  if (position) return { node: position.offsetNode, offset: position.offset }
  const range = doc.caretRangeFromPoint?.(x, y)
  if (!range) return null
  return { node: range.startContainer, offset: range.startOffset }
}

function rangeContains(range: Range, node: Node, offset: number): boolean {
  try {
    const probe = document.createRange()
    const limit = node.nodeType === Node.TEXT_NODE ? (node as Text).length : node.childNodes.length
    probe.setStart(node, Math.min(offset, limit))
    probe.collapse(true)
    return range.compareBoundaryPoints(Range.START_TO_START, probe) <= 0
      && range.compareBoundaryPoints(Range.END_TO_END, probe) >= 0
  } catch {
    return false
  }
}

export function LessonNotes({ notes, onNotes }: { notes: string; onNotes: (value: string) => void }) {
  return (
    <section className="section-card study-desk">
      <h3><span className="sec-n">✎</span>Anotações desta aula</h3>
      <div className="sec-body">
        <textarea aria-label="Anotações desta aula" value={notes} onChange={(event) => onNotes(event.target.value)} placeholder="Escreva o que quiser lembrar, com as suas palavras." rows={5} />
      </div>
    </section>
  )
}

export function LessonChecklist({
  items,
  checks,
  onToggle,
}: {
  items: CheckItem[]
  checks: string[]
  onToggle: (id: string) => void
}) {
  const done = items.filter((item) => checks.includes(item.id)).length
  const groups = [...new Set(items.map((item) => item.group))]
  return (
    <section className="section-card study-check" id="checklist-aula">
      <h3><span className="sec-n">✓</span>O que você entendeu</h3>
      <div className="sec-body">
        <p className="muted">{done} de {items.length} itens desta aula marcados como entendidos.</p>
        <div className="progress" aria-hidden="true"><span style={{ width: `${items.length ? (done / items.length) * 100 : 0}%` }} /></div>
        {groups.map((group) => (
          <fieldset key={group} className="check-group">
            <legend>{group}</legend>
            {items.filter((item) => item.group === group).map((item) => (
              <label key={item.id} className="check">
                <input type="checkbox" checked={checks.includes(item.id)} onChange={() => onToggle(item.id)} />
                <span>{item.label}</span>
              </label>
            ))}
          </fieldset>
        ))}
      </div>
    </section>
  )
}
