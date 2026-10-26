import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { QuestionPlayer } from '../components/QuestionPlayer'
import { allQuestions, lessonById, questionsForLesson } from '../content/catalog'
import { DISCIPLINE_LABEL } from '../data/contest'
import { selectQuestions } from '../lib/selector'
import { classifyQueue } from '../lib/srs'
import { usableQuestions } from '../lib/validation'
import { useStore } from '../state/store'
import { PageHeader } from '../components/PageHeader'
import { TARGET_TYPE_LABEL } from '../ui/labels'
import type { DisciplineId, Question, QuestionAttempt, LessonProgress, ReviewItem, UserSettings } from '../models/types'

function pickSession(
  bank: Question[],
  attempts: QuestionAttempt[],
  reviews: ReviewItem[],
  progress: LessonProgress[],
  settings: UserSettings,
  discipline: DisciplineId | 'todas',
  lessonId: string | null,
): { items: Question[]; warning?: string } {
  const result = selectQuestions(
    {
      questions: bank,
      attempts,
      reviews,
      lessonProgress: progress,
      settings,
      sessionUsed: new Set(),
    },
    settings.questionsPerSession,
    (question) => {
      if (lessonId && question.lessonId !== lessonId) return false
      if (discipline !== 'todas' && question.disciplineId !== discipline) return false
      return true
    },
  )
  if (result.items.length === 0 && lessonId) {
    const fallback = usableQuestions(questionsForLesson(lessonId))
    return {
      items: fallback.slice(0, settings.questionsPerSession),
      warning: fallback.length ? undefined : 'Não há questões disponíveis para este filtro.',
    }
  }
  return result
}

export function QuestionsPage() {
  const [params, setParams] = useSearchParams()
  const location = useLocation()
  const { settings, attempts, reviews, progress, importedQuestions } = useStore()
  const tab = params.get('tab') === 'revisoes' || location.pathname.startsWith('/revisoes') ? 'revisoes' : 'treino'
  const [discipline, setDiscipline] = useState<DisciplineId | 'todas'>((params.get('disc') as DisciplineId) || 'todas')
  const lessonId = params.get('lesson')
  const bank = usableQuestions(allQuestions(importedQuestions))
  const filterKey = `${discipline}|${lessonId ?? ''}|${settings.questionsPerSession}`
  const [frozenKey, setFrozenKey] = useState(filterKey)
  const [picked, setPicked] = useState(() => pickSession(bank, attempts, reviews, progress, settings, discipline, lessonId))
  const queues = classifyQueue(reviews)
  const overdue = queues.overdue.length
  const dueIds = [...queues.overdue, ...queues.dueToday, ...queues.highError].map((item) => item.targetId)
  const dueQuestions = bank.filter((item) => dueIds.includes(item.id) || dueIds.includes(item.lessonId ?? '') || dueIds.includes(item.topicId))

  if (frozenKey !== filterKey) {
    setFrozenKey(filterKey)
    setPicked(pickSession(bank, attempts, reviews, progress, settings, discipline, lessonId))
  }

  function setTab(next: 'treino' | 'revisoes') {
    const copy = new URLSearchParams(params)
    if (next === 'revisoes') copy.set('tab', 'revisoes')
    else copy.delete('tab')
    setParams(copy)
  }

  return (
    <section>
      <PageHeader
        title="Questões"
        lede="Treino com gabarito validado. Questões extraídas sem chave não entram nesta fila. Feedback explica o raciocínio quando a configuração permitir."
      />
      {(overdue || queues.dueToday.length) ? (
        <article className="notice warn" style={{ marginBottom: '0.9rem' }}>
          Fila de revisões: {queues.dueToday.length} para hoje · {overdue} atrasada{overdue === 1 ? '' : 's'}.
          {' '}
          <button className="btn secondary" type="button" onClick={() => setTab('revisoes')}>Abrir revisões</button>
        </article>
      ) : null}

      <div className="filter-pills" role="tablist">
        <button type="button" className={tab === 'treino' ? 'on' : ''} onClick={() => setTab('treino')}>Treino</button>
        <button type="button" className={tab === 'revisoes' ? 'on' : ''} onClick={() => setTab('revisoes')}>
          Revisões ({queues.dueToday.length + overdue})
        </button>
      </div>

      {tab === 'revisoes' ? (
        <>
          <div className="kpi-row">
            <article className="card kpi"><span className="muted">Hoje</span><strong>{queues.dueToday.length}</strong></article>
            <article className="card kpi"><span className="muted">Atrasadas</span><strong>{overdue}</strong></article>
            <article className="card kpi"><span className="muted">Alto erro</span><strong>{queues.highError.length}</strong></article>
          </div>
          <h2>Fila</h2>
          <ul>
            {[...queues.overdue, ...queues.dueToday].map((item) => {
              const lesson = lessonById(item.targetId)
              return (
                <li key={item.id}>
                  {TARGET_TYPE_LABEL[item.targetType] ?? item.targetType} · {lesson ? <Link to={`/licoes/${lesson.id}`}>{lesson.title}</Link> : item.targetId} · vence {item.dueAt}
                </li>
              )
            })}
          </ul>
          {dueQuestions.length ? (
            <QuestionPlayer questions={dueQuestions.slice(0, 12)} title="Revisão de questões" showFeedback timerEnabled={false} />
          ) : (
            <p>Nada na fila de questões agora. Estude uma lição e registre a revisão para gerar o calendário.</p>
          )}
        </>
      ) : (
        <>
          <div className="toolbar">
            <label>
              Disciplina
              <select value={discipline} onChange={(e) => setDiscipline(e.target.value as DisciplineId | 'todas')}>
                <option value="todas">Todas</option>
                {Object.entries(DISCIPLINE_LABEL).map(([id, label]) => (
                  <option key={id} value={id}>{label}</option>
                ))}
              </select>
            </label>
          </div>
          {picked.warning ? <p className="notice warn">{picked.warning}</p> : null}
          <QuestionPlayer questions={picked.items} title="Treino adaptativo" showFeedback={settings.showExplanationsDuringPractice} timerEnabled={settings.showTimer} />
        </>
      )}
    </section>
  )
}
