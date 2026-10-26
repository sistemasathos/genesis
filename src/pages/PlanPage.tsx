import { Link } from 'react-router-dom'
import { CONTEST } from '../data/contest'
import { daysUntil, formatDateBR } from '../lib/id'
import { buildPlan } from '../lib/planner'
import { rankPriorities } from '../lib/priority'
import { studyMinutes } from '../lib/stats'
import { useStore } from '../state/store'
import { DISCIPLINE_ICON, Icon } from '../ui/icons'

export function PlanPage() {
  const { settings, progress, reviews, attempts, studyLogs } = useStore()
  const days = daysUntil(settings.examDate)
  const phase = days > 28 ? 0 : days > 10 ? 1 : 2
  const labels = ['Base', 'Prática', 'Reta final']
  const logged = studyMinutes(studyLogs)
  const goal = Math.max(settings.minutesPerDay, 1)
  const pace = logged
  const next = rankPriorities({ progress, attempts, reviews, examDate: settings.examDate }).slice(0, 3)
  const plan = buildPlan({ settings, progress, reviews, attempts }).slice(0, 6)

  return (
    <section>
      <h1>Plano até a prova</h1>
      <p className="lede">{days} dias · ritmo, horas e o que pesa mais no edital de Itarema.</p>

      <article className="card" style={{ marginTop: '1rem' }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="row">
            <div className="ring" style={{ ['--p' as string]: Math.max(4, Math.min(100, 100 - days)) }}><span>{days}<br />dias</span></div>
            <div>
              <strong>Prova em {formatDateBR(settings.examDate)}</strong>
              <p className="muted" style={{ margin: 0 }}>{CONTEST.role} · {CONTEST.board.split('—')[0]}</p>
            </div>
          </div>
          <span className="pill">{days < 14 ? 'Acelere o passo' : 'Há tempo para a base'}</span>
        </div>
        <div className="phase" style={{ margin: '0.9rem 0 0.4rem' }}>
          <span className="a" style={{ width: '34%' }} />
          <span className="b" style={{ width: '33%' }} />
          <span className="c" style={{ width: '33%' }} />
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          {labels.map((label, i) => <span key={label} className={i === phase ? '' : 'muted'}>{label}{i === phase ? ' · fase atual' : ''}</span>)}
        </div>
        <p className="muted">{logged} min registrados neste perfil · meta de {goal} min/dia. {pace === 0 ? 'Estude hoje e o ritmo aparece aqui.' : `Ritmo acumulado: ${logged} min.`}</p>
      </article>

      <h2>Seu próximo passo</h2>
      <div className="plan-next">
        {next.map((item) => (
          <Link key={item.lessonId} className="card" to={`/licoes/${item.lessonId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="ico-bubble" style={{ ['--disc' as string]: `var(--disc-${item.disciplineId === 'portugues' ? 'pt' : item.disciplineId === 'informatica' ? 'inf' : item.disciplineId === 'especificos' ? 'esp' : item.disciplineId === 'rlm' ? 'rlm' : 'est'})` }}>
              <Icon name={DISCIPLINE_ICON[item.disciplineId]} />
            </span>
            <h3>{item.title}</h3>
            <p className="muted">{item.reasons[0]}</p>
          </Link>
        ))}
      </div>

      <h2>Próximos blocos do calendário</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Data</th><th>Atividade</th><th>Min</th><th>Por quê</th></tr></thead>
          <tbody>
            {plan.map((item) => (
              <tr key={`${item.date}-${item.title}`}>
                <td>{formatDateBR(item.date)}</td><td>{item.title}</td><td>{item.minutes}</td><td>{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
