import { Link } from 'react-router-dom'
import { DISCIPLINE_LABEL } from '../data/contest'
import { AREAS, SYLLABUS } from '../data/syllabus'
import { LESSONS } from '../content/catalog'
import { useStore } from '../state/store'
import { PageHeader } from '../components/PageHeader'
import { SubjectBadge } from '../components/SubjectBadge'
import { STATUS_LABEL } from '../ui/labels'
import type { DisciplineId } from '../models/types'

export function DisciplinesPage() {
  const { progress } = useStore()
  const ids: DisciplineId[] = ['portugues', 'rlm', 'informatica', 'especificos', 'estrategias']
  return (
    <section>
      <PageHeader
        title="Disciplinas"
        lede="Capítulos e lições alinhados ao Anexo IV. Estratégias é módulo complementar. Status descreve estudo, não domínio."
      />
      {ids.map((id) => (
        <article key={id} className="disc-card" data-disc={id} style={{ marginBottom: '0.9rem' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0 }}>{DISCIPLINE_LABEL[id]}</h2>
            <SubjectBadge id={id} />
          </div>
          {id === 'estrategias' ? <p className="muted">Complementar · não pontua na prova.</p> : null}
          {AREAS.filter((area) => area.disciplineId === id).map((area) => (
            <div key={area.id}>
              <h3>{area.title}</h3>
              <ul>
                {SYLLABUS.filter((item) => item.disciplineId === id && item.chapterId === area.id).map((item) => {
                  const lesson = LESSONS.find((row) => row.id === item.lessonId)
                  const status = progress.find((row) => row.lessonId === item.lessonId)?.status ?? 'nao_iniciada'
                  return (
                    <li key={item.id}>
                      {lesson ? <Link to={`/licoes/${lesson.id}`}>{item.title}</Link> : item.title}
                      {item.complementary ? ' · facultativo' : ''}
                      <span className="meta"> · {STATUS_LABEL[status]}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </article>
      ))}
    </section>
  )
}
