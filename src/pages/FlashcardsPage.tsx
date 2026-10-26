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
      <div className="grid cols-3" style={{ marginBottom: '1.2rem' }}>
        {decks.slice(0, 12).map((item, i) => (
          <button
            key={item.lesson.id}
            type="button"
            className={`deck-card c${i % 6}`}
            onClick={() => { setLessonId(item.lesson.id); setIndex(0); setFlipped(false) }}
          >
            <span className="pill">{item.cards.length} cartões</span>
            <strong>{item.lesson.title}</strong>
            <span>{item.cards.length} cartões</span>
            <span className="meta" style={{ color: 'inherit' }}>{DISCIPLINE_LABEL[item.lesson.disciplineId]}</span>
          </button>
        ))}
      </div>
      <div className="field">
        <label htmlFor="deck">Aula</label>
        <select
          id="deck"
          value={lessonId}
          onChange={(e) => {
            setLessonId(e.target.value)
            setIndex(0)
            setFlipped(false)
          }}
        >
          {decks.map((item) => (
            <option key={item.lesson.id} value={item.lesson.id}>
              {DISCIPLINE_LABEL[item.lesson.disciplineId]} · {item.lesson.title} ({item.cards.length})
            </option>
          ))}
        </select>
      </div>
      <p className="meta">{index + 1} / {deck.cards.length}{lesson ? <> · <Link to={`/licoes/${lesson.id}`}>{lesson.title}</Link></> : null}</p>
      <button className="card flash-card" type="button" onClick={() => setFlipped((v) => !v)}>
        <div>
          <p className="kicker">{flipped ? 'Verso' : 'Frente'}</p>
          <p style={{ margin: 0 }}>{flipped ? card.back : card.front}</p>
          <p className="meta">Toque para virar</p>
        </div>
      </button>
      <div className="row" style={{ marginTop: '0.9rem' }}>
        <button className="btn danger" type="button" onClick={() => void mark('nao_lembrei')}>Não lembrei</button>
        <button className="btn secondary" type="button" onClick={() => void mark('parcial')}>Parcial</button>
        <button className="btn" type="button" onClick={() => void mark('compreendi')}>Compreendi</button>
      </div>
      {note ? <p className="notice ok">{note}</p> : null}
    </section>
  )
}
