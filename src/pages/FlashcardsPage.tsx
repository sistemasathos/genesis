import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LESSONS, lessonById } from '../content/catalog'
import { DISCIPLINE_LABEL } from '../data/contest'
import { db } from '../lib/db'
import { scheduleReview } from '../lib/srs'
import { useStore } from '../state/store'
import type { Lesson, RecallQuality } from '../models/types'

interface Card {
  id: string
  lessonId: string
  front: string
  back: string
}

function cardsFrom(lesson: Lesson): Card[] {
  const seen = new Set<string>()
  const out: Card[] = []
  function push(front: string, back: string, kind: string) {
    const key = front.trim().toLowerCase()
    if (!key || seen.has(key) || !back.trim()) return
    seen.add(key)
    out.push({ id: `${lesson.id}-${kind}-${out.length}`, lessonId: lesson.id, front, back })
  }
  for (const item of lesson.definitions) push(item.term, item.definition, 'def')
  for (const item of lesson.glossary) push(item.term, item.definition, 'glo')
  for (const prompt of lesson.recallPrompts ?? []) push(prompt, lesson.synthesis, 'rec')
  return out
}

export function FlashcardsPage() {
  const { profile, settings, reviews, reload } = useStore()
  const [params] = useSearchParams()
  const startLesson = params.get('lesson')
  const decks = useMemo(
    () => LESSONS.map((lesson) => ({ lesson, cards: cardsFrom(lesson) })).filter((d) => d.cards.length),
    [],
  )
  const initial = decks.find((d) => d.lesson.id === startLesson) ?? decks[0]
  const [lessonId, setLessonId] = useState(initial?.lesson.id ?? '')
  const deck = decks.find((d) => d.lesson.id === lessonId) ?? initial
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [note, setNote] = useState('')
  const card = deck?.cards[index]
  const lesson = lessonById(lessonId)

  async function mark(quality: RecallQuality) {
    if (!profile || !card) return
    const existing = reviews.find((item) => item.targetId === card.lessonId && item.targetType === 'lesson')
    await db.saveReview(scheduleReview({
      existing,
      profileId: profile.id,
      targetType: 'lesson',
      targetId: card.lessonId,
      quality,
      settings: settings.srs,
    }))
    await reload()
    setNote(quality === 'compreendi' ? 'Intervalo alongado.' : 'Volta mais cedo na fila de revisão.')
    setFlipped(false)
    setIndex((i) => (deck && i < deck.cards.length - 1 ? i + 1 : 0))
  }

  if (!deck || !card) {
    return (
      <section>
        <h1>Flashcards</h1>
        <p>Não há cartões neste perfil. Eles nascem do glossário, das definições e dos prompts de recuperação já escritos nas aulas — não há baralho artificial.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Flashcards</h1>
      <p className="lede">{decks.reduce((n, d) => n + d.cards.length, 0)} cartões reais, um baralho por aula. Nada além do glossário, das definições e dos prompts já escritos.</p>
      <div className="flash-layout">
      <div className="deck-grid">
        {decks.map((item, i) => (
          <button
            key={item.lesson.id}
            type="button"
            className={`deck-card c${i % 6}${item.lesson.id === lessonId ? ' on' : ''}`}
            onClick={() => { setLessonId(item.lesson.id); setIndex(0); setFlipped(false) }}
          >
            <span className="pill">{item.cards.length} {item.cards.length === 1 ? 'cartão' : 'cartões'}</span>
            <strong>{item.lesson.title}</strong>
            <span className="disc">{DISCIPLINE_LABEL[item.lesson.disciplineId]}</span>
          </button>
        ))}
      </div>
      <article className="card flash-stage">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <strong>{lesson?.title}</strong>
          <span className="pill">{index + 1} de {deck.cards.length}</span>
        </div>
        <button className="flash-card" type="button" onClick={() => setFlipped((v) => !v)}>
          <div>
            <p className="kicker">{flipped ? 'Verso' : 'Frente'}</p>
            <p className="flash-face">{flipped ? card.back : card.front}</p>
            <p className="muted">Toque para virar</p>
          </div>
        </button>
        {lesson ? <p className="muted" style={{ margin: 0 }}><Link to={`/licoes/${lesson.id}`}>Abrir a aula</Link></p> : null}
        <div className="flash-actions">
          <button className="btn danger" type="button" onClick={() => void mark('nao_lembrei')}>Não lembrei</button>
          <button className="btn secondary" type="button" onClick={() => void mark('parcial')}>Parcial</button>
          <button className="btn" type="button" onClick={() => void mark('compreendi')}>Compreendi</button>
        </div>
        {note ? <p className="notice ok">{note}</p> : null}
      </article>
      </div>
    </section>
  )
}
