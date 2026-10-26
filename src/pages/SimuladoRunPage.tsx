import { useCallback, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { QuestionPlayer } from '../components/QuestionPlayer'
import { allQuestions } from '../content/catalog'
import { DISCIPLINE_LABEL } from '../data/contest'
import { db } from '../lib/db'
import { scoreSimulado, wouldPassOfficial } from '../lib/scoring'
import { useStore } from '../state/store'
import type { ChoiceId } from '../models/types'

export function SimuladoRunPage() {
  const { id } = useParams()
  const { simulados, importedQuestions, attempts, reload } = useStore()
  const session = simulados.find((item) => item.id === id)
  const sessionRef = useRef(session)
  sessionRef.current = session
  const confirmRef = useRef(false)
  const bank = allQuestions(importedQuestions)
  const questions = useMemo(
    () => session?.questionIds.map((qid) => bank.find((q) => q.id === qid)).filter((q): q is NonNullable<typeof q> => !!q) ?? [],
    [session, bank],
  )
  const [confirm, setConfirm] = useState(false)

  const save = useCallback(async (answers: Record<string, ChoiceId | null>, index: number, marked: string[]) => {
    const current = sessionRef.current
    if (!current || current.finishedAt || current.result) return
    await db.saveSimulado({ ...current, answers, currentIndex: index, marked, updatedAt: new Date().toISOString() })
  }, [])

  const finish = useCallback(async (answers: Record<string, ChoiceId | null>) => {
    const current = sessionRef.current
    if (!current || current.result) return
    const blank = questions.filter((q) => !answers[q.id]).length
    if (blank && !confirmRef.current) {
      confirmRef.current = true
      setConfirm(true)
      return
    }
    const elapsed = Math.round((Date.now() - new Date(current.startedAt).getTime()) / 1000)
    const result = scoreSimulado(questions, answers, elapsed, attempts)
    const finished = {
      ...current,
      answers,
      finishedAt: new Date().toISOString(),
      durationSeconds: elapsed,
      result,
      updatedAt: new Date().toISOString(),
    }
    sessionRef.current = finished
    await db.saveSimulado(finished)
    await reload()
  }, [questions, attempts, reload])

  if (!session) return <p>Simulado não encontrado. Ele pode ter sido limpo neste perfil.</p>

  if (session.result) {
    const result = session.result
    const passed = wouldPassOfficial(result)
    return (
      <section>
        <p className="kicker">{session.title}</p>
        <div className="result-hero">
          <p className="kicker">Pontos oficiais (peso 2,0)</p>
          <p className="score">{result.officialPoints}<span className="muted" style={{ fontSize: '1.1rem' }}> / {result.officialMax}</span></p>
          <p className="muted" style={{ margin: 0 }}>Acerto bruto {result.rawPercent.toFixed(1)}% — número separado, não é a nota oficial.</p>
          <p>{passed ? 'Atingiria o corte de 50% em todas as disciplinas desta amostra.' : 'Não atingiria o corte de 50% em ao menos uma disciplina desta amostra.'}</p>
          <p className="meta">Tempo {Math.floor(result.elapsedSeconds / 60)} min · média {result.avgSeconds.toFixed(0)} s · em branco {result.blank} · erros com alta confiança {result.highConfidenceWrong}</p>
        </div>

        <h2>Por disciplina</h2>
        <div className="grid cols-2">
          {Object.entries(result.byDiscipline).map(([discId, row]) => {
            const pct = row.max ? Math.round((row.points / row.max) * 100) : 0
            return (
              <article key={discId} className="card" data-disc={discId}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <strong>{DISCIPLINE_LABEL[discId] ?? discId}</strong>
                  <span>{row.points}/{row.max} pts</span>
                </div>
                <div className="progress" style={{ margin: '0.55rem 0' }}><span style={{ width: `${pct}%` }} /></div>
                <p className="muted" style={{ margin: 0 }}>
                  {row.correct}/{row.total} acertos · {pct}% · corte 50%: {row.passed == null ? '—' : row.passed ? 'atingido' : 'não atingido'}
                </p>
              </article>
            )
          })}
        </div>

        {result.priorityReview.length ? (
          <>
            <h2>Tópicos para revisar</h2>
            <ul>{result.priorityReview.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          </>
        ) : null}

        <h2>Gabarito comentado</h2>
        {questions.map((question, index) => {
          const picked = session.answers[question.id]
          const ok = question.answerKey != null && picked === question.answerKey
          const miss = question.answerKey != null && picked && picked !== question.answerKey
          return (
            <details key={question.id} className="acc-item">
              <summary>
                <span>Q{index + 1} · {question.concept}</span>
                <span className={ok ? 'tag-ok' : miss || !picked ? 'tag-bad' : 'meta'}>
                  {ok ? 'Correto' : miss || !picked ? 'Errado' : 'Sem chave'}
                </span>
              </summary>
              <div style={{ padding: '0 0.9rem 0.9rem' }}>
                {question.supportText ? <div className="support-text">{question.supportText}</div> : null}
                <p>{question.stem}</p>
                <ul>
                  {question.choices.map((choice) => (
                    <li key={choice.id}><strong>{choice.id}.</strong> {choice.text}</li>
                  ))}
                </ul>
                {question.answerKey ? (
                  <>
                    <p><strong>Alternativa {question.answerKey} está correta porque</strong> {question.commentCorrect}</p>
                    <p><strong>Por que as outras erram</strong></p>
                    <ul className="why-list">
                      {question.choices.filter((choice) => choice.id !== question.answerKey).map((choice) => (
                        <li key={choice.id}><strong>{choice.id}.</strong> {question.commentWrong[choice.id] ?? 'Não atende ao comando.'}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="muted">Item sem gabarito validado neste banco.</p>
                )}
              </div>
            </details>
          )
        })}
        <p style={{ marginTop: '1rem' }}><Link className="btn secondary" to="/simulados">Voltar aos simulados</Link></p>
      </section>
    )
  }

  return (
    <section>
      {confirm ? <p className="notice warn">Há questões em branco. Clique novamente em Finalizar para entregar mesmo assim, ou revise a navegação.</p> : null}
      <QuestionPlayer
        questions={questions}
        title={session.title}
        sessionId={session.id}
        showFeedback={false}
        timerEnabled={session.timerEnabled}
        remainingSeconds={session.remainingSeconds}
        persistAnswers={session.answers}
        initialIndex={session.currentIndex}
        initialMarked={session.marked}
        onSaveAnswers={(answers, index, marked) => void save(answers, index, marked)}
        onFinish={(answers) => void finish(answers)}
      />
    </section>
  )
}
