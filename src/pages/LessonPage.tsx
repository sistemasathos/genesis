import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lessonById, neighboringLessons, questionsForLesson } from '../content/catalog'
import { db, emptyProgress } from '../lib/db'
import { scheduleReview } from '../lib/srs'
import { useStore } from '../state/store'
import type { RecallQuality } from '../models/types'
import { uid } from '../lib/id'
import { DISCIPLINE_LABEL } from '../data/contest'
import { AREAS } from '../data/syllabus'
import { EVIDENCE_LABEL, STATUS_LABEL } from '../ui/labels'
import { StudyText } from '../components/StudyText'
import { LessonChecklist, LessonNotes, lessonChecks, markAtPoint, useLessonDraft, useStudyMarks } from '../components/LessonStudy'

export function LessonPage() {
  const { id } = useParams()
  const { profile, progress, settings, reload } = useStore()
  const lesson = lessonById(id ?? '')
  const saved = progress.find((item) => item.lessonId === lesson?.id) ?? emptyProgress(profile?.id ?? '', lesson?.id ?? '')
  const [quality, setQuality] = useState<RecallQuality>('compreendi')
  const related = questionsForLesson(lesson?.id ?? '')
  const neighbors = neighboringLessons(lesson?.id ?? '')
  const [savedNote, setSavedNote] = useState('')
  const [openQ, setOpenQ] = useState<string | null>(related[0]?.id ?? null)
  const [pending, setPending] = useState<{ quote: string; x: number; y: number } | null>(null)
  const [hoverMark, setHoverMark] = useState<{ id: string; x: number; y: number } | null>(null)
  const readRef = useRef<HTMLDivElement>(null)
  const draft = useLessonDraft(saved, reload)
  useStudyMarks(readRef, draft.highlights, `${lesson?.id ?? ''}:${openQ ?? ''}`)
  useEffect(() => { setOpenQ(related[0]?.id ?? null); setPending(null) }, [lesson?.id])

  const sections = useMemo(() => {
    if (!lesson) return []
    const raw = [...lesson.essencial, ...lesson.completo, ...lesson.aprofundamento]
    const out: { id: string; heading: string; paragraphs: string[] }[] = []
    for (const block of raw) {
      const paragraphs = block.body.split('\n').map((p) => p.trim()).filter(Boolean)
      if (block.heading) out.push({ id: `sec-${out.length}`, heading: block.heading, paragraphs })
      else if (out.length) out[out.length - 1].paragraphs.push(...paragraphs)
      else out.push({ id: 'sec-0', heading: lesson.title, paragraphs })
    }
    return out
  }, [lesson])

  const toc = useMemo(
    () => [...sections.map((section) => ({ id: section.id, heading: section.heading })), { id: 'checklist-aula', heading: 'O que você entendeu' }],
    [sections],
  )
  const [activeId, setActiveId] = useState(toc[0]?.id ?? '')

  useEffect(() => {
    const root = document.querySelector('.main')
    if (!root || toc.length === 0) return
    const onScroll = () => {
      const line = root.getBoundingClientRect().top + 110
      let current = toc[0].id
      for (const item of toc) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= line) current = item.id
      }
      setActiveId(current)
    }
    onScroll()
    root.addEventListener('scroll', onScroll, { passive: true })
    return () => root.removeEventListener('scroll', onScroll)
  }, [toc])

  if (!lesson || !profile) return <p>Lição não encontrada.</p>
  const terms = [...lesson.glossary.map((item) => item.term), ...lesson.definitions.map((item) => item.term)]
  const currentLesson = lesson
  const currentProfile = profile
  const area = AREAS.find((item) => item.id === lesson.chapterId || item.id === lesson.areaId)

  async function persist(status = saved.status === 'nao_iniciada' ? 'em_estudo' : saved.status) {
    await draft.commit({
      profileId: currentProfile.id,
      lessonId: currentLesson.id,
      status,
      lastDepth: 'completo',
      lastPosition: sections.length,
      startedAt: saved.startedAt ?? new Date().toISOString(),
      studiedAt: status === 'estudada' || status === 'revisada' ? new Date().toISOString() : saved.studiedAt,
      secondsStudied: saved.secondsStudied + 60,
      selfRating: quality,
    })
    await db.addStudyLog({
      id: uid('log'),
      profileId: currentProfile.id,
      date: new Date().toISOString().slice(0, 10),
      minutes: Math.max(8, currentLesson.estimatedMinutes ?? 12),
      questions: 0,
      lessonIds: [currentLesson.id],
    })
    await reload()
    setSavedNote(status === 'estudada' ? 'Aula marcada como estudada. O domínio só aparece quando você acerta a questão comentada abaixo.' : 'Progresso gravado neste perfil.')
  }

  return (
    <article>
      <div className="chips">
        <Link className="chip" to={`/trilha?disc=${lesson.disciplineId}`}>{DISCIPLINE_LABEL[lesson.disciplineId]}</Link>
        {area && area.title !== DISCIPLINE_LABEL[lesson.disciplineId] && area.title !== lesson.title ? <span className="chip">{area.title}</span> : null}
      </div>
      <header className="lesson-hero">
        {area && area.title !== lesson.title ? <p className="meta">{area.title}</p> : null}
        <h1>{lesson.title}</h1>
        <p>{lesson.objective}</p>
        <p>{lesson.importance}</p>
        <div className="row">
          <span className="pill">Aula completa{lesson.estimatedMinutes ? ` · ~${lesson.estimatedMinutes} min` : ''}</span>
          <span className="pill">{STATUS_LABEL[saved.status]}</span>
          {lesson.complementary ? <span className="pill">Facultativo</span> : null}
        </div>
      </header>

      <div className="lesson-shell">
        <div className="lesson-body">
          <div
            className="study-read"
            ref={readRef}
            onMouseMove={(event) => {
              if (!readRef.current) return
              const hit = markAtPoint(readRef.current, draft.highlights, event.clientX, event.clientY)
              if (hit) {
                setHoverMark(hit)
                return
              }
              if (!hoverMark) return
              const dx = event.clientX - hoverMark.x
              const dy = event.clientY - hoverMark.y
              if (dx * dx + dy * dy > 48 * 48) setHoverMark(null)
            }}
            onMouseLeave={(event) => {
              if ((event.relatedTarget as HTMLElement | null)?.closest?.('.mark-x')) return
              setHoverMark(null)
            }}
            onMouseUp={() => {
              const selection = window.getSelection()
              const node = selection?.anchorNode
              if (!selection || selection.isCollapsed || !node || !readRef.current?.contains(node)) {
                setPending(null)
                return
              }
              const quote = selection.toString().replace(/\s+/g, ' ').trim()
              if (quote.length < 2) {
                setPending(null)
                return
              }
              const rect = selection.getRangeAt(0).getBoundingClientRect()
              setPending({
                quote,
                x: Math.max(8, Math.min(rect.left, window.innerWidth - 168)),
                y: rect.bottom + 8,
              })
            }}
          >
          {lesson.prerequisites.length ? <p className="muted">Antes desta aula: {lesson.prerequisites.join('; ')}.</p> : null}
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="section-card">
              <h3><span className="sec-n">{index + 1}</span>{section.heading}</h3>
              <div className="sec-body">
                {section.paragraphs.map((p) => <p key={p.slice(0, 48)}><StudyText text={p} terms={terms} /></p>)}
              </div>
            </section>
          ))}

          {lesson.definitions.length ? (
            <section className="section-card" id="sec-defs">
              <h3><span className="sec-n">{sections.length + 1}</span>Definições que a prova cobra ao pé da letra</h3>
              <div className="sec-body table-wrap">
                <table>
                  <thead><tr><th>Termo</th><th>O que significa nesta aula</th><th>O que muda o gabarito</th></tr></thead>
                  <tbody>
                    {lesson.definitions.map((item) => (
                      <tr key={item.term}><td>{item.term}</td><td>{item.definition}</td><td>Se o enunciado troca este termo por um vizinho, a alternativa cai.</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {lesson.comparisons?.map((table) => (
            <section key={table.title} className="section-card">
              <h3><span className="sec-n">↔</span>{table.title}</h3>
              <div className="sec-body">
                <div className="compare-grid">
                  <article className="compare-card">
                    <h3>{table.leftLabel}</h3>
                    <ul>{table.rows.map((row) => <li key={row.label}><strong>{row.label}.</strong> <StudyText text={row.left} terms={terms} /></li>)}</ul>
                  </article>
                  <article className="compare-card">
                    <h3>{table.rightLabel}</h3>
                    <ul>{table.rows.map((row) => <li key={row.label}><strong>{row.label}.</strong> <StudyText text={row.right} terms={terms} /></li>)}</ul>
                  </article>
                </div>
                <div className="table-wrap" style={{ marginTop: '0.8rem' }}>
                  <table>
                    <thead><tr><th>Aspecto</th><th>{table.leftLabel}</th><th>{table.rightLabel}</th></tr></thead>
                    <tbody>{table.rows.map((row) => <tr key={row.label}><td>{row.label}</td><td>{row.left}</td><td>{row.right}</td></tr>)}</tbody>
                  </table>
                </div>
              </div>
            </section>
          ))}

          {lesson.workedExamples?.map((example) => (
            <section key={example.title} className="section-card">
              <h3><span className="sec-n">▸</span>{example.title}</h3>
              <div className="sec-body">
                <p><StudyText text={example.setup} terms={terms} /></p>
                <ol>{example.steps.map((step) => <li key={step}><StudyText text={step} terms={terms} /></li>)}</ol>
                <p><strong>Resultado.</strong> <StudyText text={example.result} terms={terms} /></p>
              </div>
            </section>
          ))}

          {lesson.examples.length ? (
            <section className="section-card">
              <h3><span className="sec-n">!</span>Como o enunciado esconde o conceito</h3>
              <div className="sec-body">
                {lesson.examples.map((item) => <p key={item}><StudyText text={item} terms={terms} /></p>)}
                {lesson.publicAdminExamples?.map((item) => <p key={item}><StudyText text={item} terms={terms} /></p>)}
              </div>
            </section>
          ) : null}

          {lesson.procedures?.length ? (
            <section className="section-card">
              <h3><span className="sec-n">→</span>Passo a passo na hora da prova</h3>
              <div className="sec-body"><ol>{lesson.procedures.map((item) => <li key={item}><StudyText text={item} terms={terms} /></li>)}</ol></div>
            </section>
          ) : null}

          {lesson.commonErrors.length || lesson.traps.length ? (
            <section className="section-card">
              <h3><span className="sec-n">×</span>Erros que a alternativa errada provoca</h3>
              <div className="sec-body">
                <ul>
                  {lesson.commonErrors.map((item) => <li key={item}><StudyText text={item} terms={terms} /></li>)}
                  {lesson.traps.map((item) => <li key={item}><StudyText text={item} terms={terms} /></li>)}
                </ul>
              </div>
            </section>
          ) : null}

          {lesson.examInsights?.map((insight) => (
            <section key={insight.claim} className="section-card">
              <h3><span className="sec-n">i</span>{EVIDENCE_LABEL[insight.level] ?? insight.level}</h3>
              <div className="sec-body"><p>{insight.claim}</p><p className="muted">{insight.evidence}</p></div>
            </section>
          ))}

          {lesson.glossary.length ? (
            <section className="section-card">
              <h3><span className="sec-n">G</span>Glossário</h3>
              <div className="sec-body">
                {lesson.glossary.map((item) => <p key={item.term}><strong>{item.term}.</strong> {item.definition}</p>)}
              </div>
            </section>
          ) : null}

          {lesson.recallPrompts?.length ? (
            <section className="section-card">
              <h3><span className="sec-n">?</span>Feche o texto e responda</h3>
              <div className="sec-body"><ol>{lesson.recallPrompts.map((item) => <li key={item}>{item}</li>)}</ol></div>
            </section>
          ) : null}

          <section className="section-card">
            <h3><span className="sec-n">=</span>Síntese</h3>
            <div className="sec-body">
              <p><StudyText text={lesson.synthesis} terms={terms} /></p>
              <ul>{lesson.masteryCriteria.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <h2>Onde isso aparece — questões inéditas comentadas</h2>
          <p className="muted">Itens escritos para esta plataforma, no formato A–E de Itarema. Não são questões oficiais do IDIB e não revelam gabarito de PDF.</p>
          {related.length === 0 ? <p>Esta aula ainda não tem questão inédita vinculada.</p> : null}
          {related.map((question, index) => {
            const opened = openQ === question.id
            return (
              <article key={question.id} className="acc-item">
                <button type="button" className="module-line" style={{ width: '100%', background: 'none', border: 0, cursor: 'pointer', color: 'inherit' }} onClick={() => setOpenQ(opened ? null : question.id)}>
                  <span className="mod-n on">Q{index + 1}</span>
                  <span style={{ textAlign: 'left' }}>{question.stem.slice(0, 110)}{question.stem.length > 110 ? '…' : ''}</span>
                  <span className="pill">{opened ? 'Fechar' : 'Ver explicação'}</span>
                </button>
                {opened ? (
                  <div className="sec-body">
                    {question.supportText ? <div className="support-text">{question.supportText}</div> : null}
                    <p className="q-stem"><StudyText text={question.stem} terms={terms} /></p>
                    <div className="choices">
                      {question.choices.map((choice) => (
                        <div key={choice.id} className={choice.id === question.answerKey ? 'choice correct' : 'choice'} style={{ cursor: 'default' }}>
                          <span className="letter">{choice.id}</span>
                          <span><StudyText text={choice.text} terms={terms} /></span>
                        </div>
                      ))}
                    </div>
                    <div className="ped-block feedback">
                      <p className="ped-kicker">Alternativa {question.answerKey} está correta porque</p>
                      <p><StudyText text={question.commentCorrect} terms={terms} /></p>
                      <p className="ped-kicker">Por que as outras erram</p>
                      <ul className="why-list">
                        {question.choices.filter((c) => c.id !== question.answerKey).map((choice) => (
                          <li key={choice.id}><strong>{choice.id}.</strong> <StudyText text={question.commentWrong[choice.id] ?? 'Não sustenta o comando.'} terms={terms} /></li>
                        ))}
                      </ul>
                      <p><strong>Como reconhecer uma parecida.</strong> {question.howToRecognize}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })}

          </div>
          <LessonChecklist items={lessonChecks(lesson, sections)} checks={draft.checks} onToggle={draft.toggleCheck} />
          <LessonNotes notes={draft.notes} onNotes={draft.setNotes} />
          {hoverMark ? (
            <button
              className="mark-x"
              type="button"
              style={{ left: hoverMark.x, top: hoverMark.y }}
              aria-label="Remover marcação"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => { draft.removeHighlight(hoverMark.id); setHoverMark(null) }}
            >
              ×
            </button>
          ) : null}
          {pending ? (
            <button
              className="mark-pop"
              type="button"
              style={{ left: pending.x, top: pending.y }}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => { draft.addHighlight(pending.quote); setPending(null) }}
            >
              Marcar
            </button>
          ) : null}
          {savedNote ? <p className="notice ok">{savedNote}</p> : null}
          <div className="lesson-bar">
            {neighbors.prev ? <Link className="btn secondary" to={`/licoes/${neighbors.prev.id}`}>Anterior</Link> : null}
            <label style={{ margin: 0 }}>Lembrança
              <select value={quality} onChange={(e) => setQuality(e.target.value as RecallQuality)}>
                <option value="compreendi">Compreendi</option>
                <option value="parcial">Parcialmente</option>
                <option value="nao_lembrei">Não lembrei</option>
              </select>
            </label>
            <button className="btn" type="button" onClick={() => void persist('estudada')}>Marcar estudada</button>
            <button className="btn secondary" type="button" onClick={async () => {
              await persist('revisada')
              await db.saveReview(scheduleReview({ profileId: profile.id, targetType: 'lesson', targetId: lesson.id, quality, settings: settings.srs }))
              await reload()
              setSavedNote('Revisão registrada no calendário espaçado.')
            }}>Registrar revisão</button>
            {neighbors.next ? <Link className="btn secondary" to={`/licoes/${neighbors.next.id}`}>Próxima</Link> : null}
          </div>
        </div>
        <aside className="lesson-toc">
          <p className="kicker">Nesta aula</p>
          <p className="toc-where">{Math.max(1, toc.findIndex((item) => item.id === activeId) + 1)} de {toc.length}</p>
          <nav>
            {toc.map((item, index) => {
              const state = item.id === activeId ? 'current' : index < toc.findIndex((entry) => entry.id === activeId) ? 'passed' : 'next'
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`toc-item ${state}`}
                  aria-current={state === 'current' ? 'true' : undefined}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  <span className="toc-n">{state === 'passed' ? '✓' : index + 1}</span>
                  <span className="toc-label">{item.heading}</span>
                </button>
              )
            })}
          </nav>
        </aside>
      </div>
    </article>
  )
}
