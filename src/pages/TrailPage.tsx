import { Link, useSearchParams } from 'react-router-dom'
import { LESSONS, QUESTIONS } from '../content/catalog'
import { CONTEST, DISCIPLINE_LABEL } from '../data/contest'
import { AREAS, SYLLABUS } from '../data/syllabus'
import { useStore } from '../state/store'
import { DISCIPLINE_ICON, Icon } from '../ui/icons'
import { practiceLabel } from '../ui/labels'
import type { DisciplineId, LessonStatus } from '../models/types'

const ORDER: DisciplineId[] = ['portugues', 'rlm', 'informatica', 'especificos', 'estrategias']

function statusOf(progress: { lessonId: string; status: LessonStatus }[], lessonId: string): LessonStatus {
  return progress.find((row) => row.lessonId === lessonId)?.status ?? 'nao_iniciada'
}

export function TrailPage() {
  const { progress, attempts } = useStore()
  const [params] = useSearchParams()
  const disc = (params.get('disc') as DisciplineId) || ''
  const current = ORDER.includes(disc) ? disc : ''

  if (!current) {
    return (
      <section>
        <h1>Trilha do edital</h1>
        <p className="lede">{CONTEST.role} · 50 questões A–E · corte de 50% em cada matéria. Escolha por onde entrar.</p>
        <div className="grid cols-2" style={{ marginTop: '1rem' }}>
          {ORDER.map((id) => {
            const items = SYLLABUS.filter((row) => row.disciplineId === id && LESSONS.some((l) => l.id === row.lessonId))
            const started = items.filter((row) => statusOf(progress, row.lessonId) !== 'nao_iniciada').length
            const pct = items.length ? Math.round((started / items.length) * 100) : 0
            const bp = CONTEST.blueprint.distribution[id]
            return (
              <Link key={id} className="subject-card" data-disc={id} to={`/trilha?disc=${id}`}>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span className="ico-bubble"><Icon name={DISCIPLINE_ICON[id]} /></span>
                  <strong>{pct}%</strong>
                </div>
                <strong>{DISCIPLINE_LABEL[id]}</strong>
                <p className="muted" style={{ margin: 0 }}>{id === 'estrategias' ? 'Facultativo · não pontua' : `${bp.questions} questões · ${bp.points} pts`}</p>
                <span className="pill">{AREAS.filter((a) => a.disciplineId === id).length} módulos</span>
              </Link>
            )
          })}
        </div>
      </section>
    )
  }

  const areas = AREAS.filter((area) => area.disciplineId === current)
  const items = SYLLABUS.filter((row) => row.disciplineId === current)
  const withLesson = items.filter((row) => LESSONS.some((l) => l.id === row.lessonId))
  const started = withLesson.filter((row) => statusOf(progress, row.lessonId) !== 'nao_iniciada').length
  const pct = withLesson.length ? Math.round((started / withLesson.length) * 100) : 0
  const bp = CONTEST.blueprint.distribution[current]
  const practicedLessons = new Set(
    attempts.flatMap((attempt) => {
      const question = QUESTIONS.find((item) => item.id === attempt.questionId)
      return question?.lessonId ? [question.lessonId] : []
    }),
  )

  return (
    <section>
      <p className="meta"><Link to="/trilha">Trilha</Link> / {DISCIPLINE_LABEL[current]}</p>
      <article className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="row">
          <span className="ico-bubble"><Icon name={DISCIPLINE_ICON[current]} /></span>
          <div>
            <h1 style={{ margin: 0 }}>{DISCIPLINE_LABEL[current]}</h1>
            <p className="muted" style={{ margin: 0 }}>{current === 'estrategias' ? 'Módulo facultativo. Não entra na nota.' : `${bp.questions} questões na prova · ${bp.points} pontos`}</p>
          </div>
        </div>
        <div className="ring" style={{ ['--p' as string]: pct }}><span>{pct}%<br />iniciado</span></div>
      </article>
      <div className="progress" style={{ margin: '0.8rem 0 0.2rem' }}><span style={{ width: `${pct}%` }} /></div>
      <p className="muted">{started}/{withLesson.length} tópicos com estudo iniciado</p>

      <h2>Trilha de aprendizado <span className="pill">{areas.length} módulos</span></h2>
      {areas.map((area, index) => {
        const rows = items.filter((item) => item.chapterId === area.id)
        const first = rows.map((row) => LESSONS.find((l) => l.id === row.lessonId)).find(Boolean)
        const done = rows.filter((row) => statusOf(progress, row.lessonId) !== 'nao_iniciada').length
        const ap = rows.length ? Math.round((done / rows.length) * 100) : 0
        const open = done > 0 || index === 0
        return (
          <article key={area.id} className="card" style={{ marginBottom: '0.7rem', opacity: open ? 1 : 0.72 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="row">
                <span className={open ? 'mod-n on' : 'mod-n'}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="pill">{done ? 'Em andamento' : 'Ainda não iniciado'}</span>
                  <h3 style={{ margin: '0.25rem 0 0' }}>{area.title}</h3>
                  <p className="muted" style={{ margin: 0 }}>{rows.length} tópicos · {QUESTIONS.filter((q) => rows.some((r) => r.lessonId === q.lessonId)).length} questões</p>
                </div>
              </div>
              {first ? <Link className="btn" to={`/licoes/${first.id}`}>Começar</Link> : <span className="pill">Sem aula</span>}
            </div>
            <div className="progress" style={{ margin: '0.7rem 0' }}><span style={{ width: `${ap}%` }} /></div>
            {rows.map((item) => {
              const lesson = LESSONS.find((row) => row.id === item.lessonId)
              const st = statusOf(progress, item.lessonId)
              const count = QUESTIONS.filter((question) => question.lessonId === item.lessonId).length
              const practiced = practicedLessons.has(item.lessonId)
              const pending = st === 'estudada' && count > 0 && !practiced
              return (
                <div key={item.id} className="module-line">
                  <span className={st === 'nao_iniciada' ? 'mod-n' : 'mod-n on'}>{st === 'nao_iniciada' ? '○' : '●'}</span>
                  <Link to={lesson ? `/licoes/${lesson.id}` : '/trilha'} style={{ pointerEvents: lesson ? 'auto' : 'none', color: 'inherit', textDecoration: 'none' }}>
                    {item.title}
                    {item.complementary ? <span className="pill" style={{ marginLeft: 8 }}>Facultativo</span> : null}
                    <div className="meta">{lesson ? practiceLabel(st, practiced) : 'Sem aula — não conta como concluído'}</div>
                  </Link>
                  {pending && lesson ? (
                    <Link className="btn secondary" to={`/licoes/${lesson.id}#questoes-da-aula`}>Praticar {count} questões</Link>
                  ) : (
                    <Link className="muted" to={lesson ? `/licoes/${lesson.id}` : '/trilha'} style={{ pointerEvents: lesson ? 'auto' : 'none', textDecoration: 'none' }}>{lesson ? 'Abrir' : ''}</Link>
                  )}
                </div>
              )
            })}
          </article>
        )
      })}
    </section>
  )
}
