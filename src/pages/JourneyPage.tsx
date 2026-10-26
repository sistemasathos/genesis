import { Link } from 'react-router-dom'
import { DISCIPLINE_LABEL } from '../data/contest'
import { AREAS, obligatorySyllabus } from '../data/syllabus'
import { useStore } from '../state/store'
import type { DisciplineId } from '../models/types'

const TRACK: { id: DisciplineId; mono: string; color: string }[] = [
  { id: 'especificos', mono: 'ES', color: '#2563eb' },
  { id: 'portugues', mono: 'PO', color: '#059669' },
  { id: 'rlm', mono: 'RL', color: '#d97706' },
  { id: 'informatica', mono: 'IN', color: '#7c3aed' },
]

export function JourneyPage() {
  const { progress } = useStore()
  const obligatory = obligatorySyllabus()
  const started = obligatory.filter((item) => {
    const row = progress.find((p) => p.lessonId === item.lessonId)
    return row && row.status !== 'nao_iniciada'
  }).length
  const totalPct = obligatory.length ? Math.round((started / obligatory.length) * 100) : 0

  return (
    <section>
      <h1>Jornada</h1>
      <p className="lede">Progresso por matéria e por módulo do Anexo IV.</p>
      <p style={{ textAlign: 'center' }}><strong>Sua jornada</strong><br /><span className="muted">Progresso geral: {totalPct}%</span></p>
      <div className="progress" style={{ maxWidth: 28 + 'rem', margin: '0.4rem auto 1.2rem' }}><span style={{ width: `${totalPct}%` }} /></div>
      <div className="grid cols-2">
        {TRACK.map((disc) => {
          const areas = AREAS.filter((area) => area.disciplineId === disc.id)
          const rows = obligatory.filter((item) => item.disciplineId === disc.id)
          const done = rows.filter((item) => {
            const p = progress.find((x) => x.lessonId === item.lessonId)
            return p && p.status !== 'nao_iniciada'
          }).length
          const pct = rows.length ? Math.round((done / rows.length) * 100) : 0
          return (
            <article key={disc.id} className="card">
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="row">
                  <span className="mono" style={{ background: disc.color }}>{disc.mono}</span>
                  <div>
                    <strong>{DISCIPLINE_LABEL[disc.id].replace('Língua Portuguesa', 'Português').replace('Conhecimentos Específicos', 'Específicos').replace('Raciocínio Lógico-Matemático', 'Raciocínio lógico')}</strong>
                    <div className="meta">{done}/{rows.length} tópicos iniciados</div>
                  </div>
                </div>
                <strong style={{ color: disc.color }}>{pct}%</strong>
              </div>
              <div className="progress" style={{ margin: '0.6rem 0' }}><span style={{ width: `${pct}%`, background: disc.color }} /></div>
              {areas.map((area) => {
                const items = rows.filter((item) => item.chapterId === area.id)
                const n = items.filter((item) => {
                  const p = progress.find((x) => x.lessonId === item.lessonId)
                  return p && p.status !== 'nao_iniciada'
                }).length
                const ap = items.length ? Math.round((n / items.length) * 100) : 0
                return (
                  <Link key={area.id} className="module-line" to={`/trilha?disc=${disc.id}`}>
                    <span>{ap === 100 ? '●' : '○'}</span>
                    <span>{area.title}</span>
                    <span className="muted">{ap}%</span>
                  </Link>
                )
              })}
            </article>
          )
        })}
      </div>
    </section>
  )
}
