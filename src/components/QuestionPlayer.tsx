import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { ChoiceId, Confidence, ErrorKind, Question } from '../models/types'
import { db } from '../lib/db'
import { scheduleReview } from '../lib/srs'
import { uid } from '../lib/id'
import { useStore } from '../state/store'
import { lessonById } from '../content/catalog'

interface Props {
  questions: Question[]
  title: string
  sessionId?: string
  showFeedback: boolean
  timerEnabled: boolean
  remainingSeconds?: number
  persistAnswers?: Record<string, ChoiceId | null>
  initialIndex?: number
  initialMarked?: string[]
  onSaveAnswers?: (answers: Record<string, ChoiceId | null>, index: number, marked: string[]) => void
  onFinish?: (answers: Record<string, ChoiceId | null>) => void
}

export function QuestionPlayer({
  questions,
  title,
  sessionId,
  showFeedback,
  timerEnabled,
  remainingSeconds,
  persistAnswers,
  initialIndex = 0,
  initialMarked,
  onSaveAnswers,
  onFinish,
}: Props) {
  const { profile, settings, reload } = useStore()
  const [index, setIndex] = useState(initialIndex)
  const [answers, setAnswers] = useState<Record<string, ChoiceId | null>>(persistAnswers ?? {})
  const [marked, setMarked] = useState<string[]>(initialMarked ?? [])
  const [confidence, setConfidence] = useState<Confidence>(3)
  const [errorKind, setErrorKind] = useState<ErrorKind>('nao_classificado')
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [left, setLeft] = useState(remainingSeconds ?? settings.defaultSimuladoMinutes * 60)
  const [started] = useState(Date.now())
  const question = questions[index]

  useEffect(() => {
    if (!timerEnabled) return
    const id = window.setInterval(() => setLeft((value) => Math.max(0, value - 1)), 1000)
    return () => window.clearInterval(id)
  }, [timerEnabled])

  useEffect(() => {
    onSaveAnswers?.(answers, index, marked)
  }, [answers, index, marked, onSaveAnswers])

  const done = useMemo(() => questions.filter((item) => answers[item.id]).length, [answers, questions])

  if (!question) {
    return <p>Não há questões neste filtro.</p>
  }

  async function submit(choice: ChoiceId) {
    if (!profile) return
    const elapsed = Date.now() - started
    const correct = question.answerKey == null ? null : question.answerKey === choice
    setAnswers((prev) => ({ ...prev, [question.id]: choice }))
    if (showFeedback) setRevealed((prev) => ({ ...prev, [question.id]: true }))
    if (!showFeedback) return
    await db.addAttempt({
      id: uid('att'),
      profileId: profile.id,
      questionId: question.id,
      sessionId,
      choiceId: choice,
      correct,
      confidence,
      errorKind: correct === false ? errorKind : undefined,
      elapsedMs: elapsed,
      createdAt: new Date().toISOString(),
      markedForReview: marked.includes(question.id),
    })
    if (correct === false || confidence <= 2) {
      await db.saveReview(
        scheduleReview({
          profileId: profile.id,
          targetType: 'question',
          targetId: question.id,
          quality: correct ? 'parcial' : 'nao_lembrei',
          erred: correct === false,
          settings: settings.srs,
        }),
      )
    }
    await db.addStudyLog({
      id: uid('log'),
      profileId: profile.id,
      date: new Date().toISOString().slice(0, 10),
      minutes: 1,
      questions: 1,
      lessonIds: question.lessonId ? [question.lessonId] : [],
    })
    await reload()
  }

  const shown = showFeedback && revealed[question.id]
  const selected = answers[question.id]

  return (
    <section>
      <div className="toolbar">
        <div>
          <h1>{title}</h1>
          <p className="muted">
            Questão {index + 1} de {questions.length} · respondidas {done}
            {timerEnabled ? ` · ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}` : ''}
          </p>
        </div>
        <div className="row">
          <button className="btn secondary" type="button" onClick={() => setMarked((m) => (m.includes(question.id) ? m.filter((id) => id !== question.id) : [...m, question.id]))}>
            {marked.includes(question.id) ? 'Desmarcar revisão' : 'Marcar para revisão'}
          </button>
          {onFinish ? (
            <button className="btn" type="button" onClick={() => onFinish(answers)}>
              Finalizar
            </button>
          ) : null}
        </div>
      </div>
      <div className="sim-nav" aria-label="Navegação das questões">
        {questions.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`${i === index ? 'current' : ''} ${answers[item.id] ? 'done' : ''} ${marked.includes(item.id) ? 'mark' : ''}`}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <article className="q-card">
        {question.supportText ? <div className="support-text">{question.supportText}</div> : null}
        <p className="q-stem">{question.stem}</p>
        <p className="meta">{question.origin === 'inedita' ? 'Questão inédita da plataforma, não é item oficial do IDIB.' : `Origem: ${question.origin}`}</p>
        <div className="choices">
          {question.choices.map((choice) => {
            let cls = selected === choice.id ? 'choice selected' : 'choice'
            if (shown && question.answerKey === choice.id) cls += ' correct'
            if (shown && selected === choice.id && question.answerKey !== choice.id) cls += ' wrong'
            return (
              <button key={choice.id} className={cls} type="button" onClick={() => void submit(choice.id)} disabled={shown}>
                <span className="letter" aria-hidden="true">{choice.id}</span>
                <span>{choice.text}</span>
              </button>
            )
          })}
        </div>
        <div className="row" style={{ marginTop: '0.8rem' }}>
          <label>
            Confiança
            <select value={confidence} onChange={(e) => setConfidence(Number(e.target.value) as Confidence)}>
              <option value={1}>1 muito baixa</option>
              <option value={2}>2 baixa</option>
              <option value={3}>3 média</option>
              <option value={4}>4 alta</option>
              <option value={5}>5 muito alta</option>
            </select>
          </label>
          <label>
            Se errar, o tipo
            <select value={errorKind} onChange={(e) => setErrorKind(e.target.value as ErrorKind)}>
              <option value="nao_classificado">Não classificar</option>
              <option value="interpretacao">Interpretação</option>
              <option value="desconhecimento">Desconhecimento</option>
              <option value="distracao">Distração</option>
              <option value="calculo">Cálculo</option>
            </select>
          </label>
        </div>
        {shown ? (
          <div className={`answer-feedback ped-block ${selected === question.answerKey ? 'feedback' : 'mistake'}`}>
            <p className="ped-kicker">
              {question.answerKey
                ? `Alternativa ${question.answerKey} está correta porque`
                : 'Comentário (sem gabarito validado)'}
            </p>
            <p>{question.commentCorrect}</p>
            {question.answerKey ? (
              <>
                <p className="ped-kicker" style={{ marginTop: '0.8rem' }}>Por que as outras erram</p>
                <ul className="why-list">
                  {question.choices.filter((choice) => choice.id !== question.answerKey).map((choice) => (
                    <li key={choice.id}>
                      <strong>{choice.id}.</strong>{' '}
                      {question.commentWrong[choice.id] ?? 'Não sustenta o comando ou mistura outro conceito.'}
                    </li>
                  ))}
                </ul>
              </>
            ) : selected && question.commentWrong[selected] ? (
              <p><strong>Por que a sua alternativa cai:</strong> {question.commentWrong[selected]}</p>
            ) : null}
            <p><strong>Conceito cobrado:</strong> {question.concept}</p>
            <p><strong>Dificuldade principal:</strong> {question.mainDifficulty}</p>
            <p><strong>Como reconhecer uma semelhante:</strong> {question.howToRecognize}</p>
            {question.reviewLessonId && lessonById(question.reviewLessonId) ? (
              <p>
                Revisar lição: <Link to={`/licoes/${question.reviewLessonId}`}>{lessonById(question.reviewLessonId)?.title}</Link>
              </p>
            ) : null}
            <ReportButton questionId={question.id} />
          </div>
        ) : null}
      </article>
      <div className="row" style={{ marginTop: '0.8rem' }}>
        <button className="btn secondary" type="button" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Anterior
        </button>
        <button className="btn secondary" type="button" disabled={index >= questions.length - 1} onClick={() => setIndex((i) => i + 1)}>
          Próxima
        </button>
      </div>
    </section>
  )
}

function ReportButton({ questionId }: { questionId: string }) {
  const { profile, reload } = useStore()
  return (
    <button
      className="btn secondary"
      type="button"
      onClick={async () => {
        const message = window.prompt('Descreva o problema encontrado nesta questão:')
        if (!message || !profile) return
        await db.addReport({
          id: uid('rep'),
          profileId: profile.id,
          targetType: 'question',
          targetId: questionId,
          message,
          createdAt: new Date().toISOString(),
        })
        await reload()
      }}
    >
      Reportar problema
    </button>
  )
}
