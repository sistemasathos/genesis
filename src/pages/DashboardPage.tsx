import { Link } from 'react-router-dom'
import { LESSONS } from '../content/catalog'
import { AREAS, obligatorySyllabus } from '../data/syllabus'
import { classifyQueue } from '../lib/srs'
import { rankPriorities } from '../lib/priority'
import { daysUntil } from '../lib/id'
import { useStore } from '../state/store'
import { Icon, DISCIPLINE_ICON } from '../ui/icons'
import type { DisciplineId } from '../models/types'

const TRACK: { id: DisciplineId; blurb: string }[] = [
  { id: 'especificos', blurb: 'Atos, redação oficial, arquivo, secretaria e atendimento.' },
  { id: 'portugues', blurb: 'Leitura, gramática, sintaxe e ortografia do edital.' },
  { id: 'rlm', blurb: 'Lógica, porcentagem, sequências e medidas.' },
  { id: 'informatica', blurb: 'Windows 11, Linux, escritório, internet e segurança.' },
]

export function DashboardPage() {
  const { profile, settings, progress, attempts, reviews } = useStore()
  const obligatory = obligatorySyllabus()
  const studied = obligatory.filter((item) => {
    const row = progress.find((p) => p.lessonId === item.lessonId)
    return row && row.status !== 'nao_iniciada'
  }).length
  const pct = obligatory.length ? Math.round((studied / obligatory.length) * 100) : 0
  const first = (profile?.displayName ?? 'estudante').split(' ')[0]
  const days = daysUntil(settings.examDate)
  const queues = classifyQueue(reviews)
  const next = rankPriorities({ progress, attempts, reviews, examDate: settings.examDate })[0]
  const overdue = queues.overdue.length

  return (
    <section>
      <div className="row" style={{ justifyContent: 'space-between', marginBottom: '0.8rem' }}>
        <div>
          <h1 className="hello">Olá, {first}!</h1>
          <p className="lede">Faltam {days} dias para a prova de Agente Administrativo. Comece pelo que ainda não foi estudado.</p>
        </div>
        <Link className="btn" to="/jornada"><Icon name="chart" size={16} /> Jornada</Link>
      </div>

      <article className="banner">
        <div className="ring" style={{ ['--p' as string]: pct }}><span>{pct}%<br />total</span></div>
        <div>
          <strong>Progresso geral</strong>
          <p className="muted" style={{ margin: '0.2rem 0' }}>Você iniciou {studied} de {obligatory.length} tópicos obrigatórios do edital. Iniciar não é dominar.</p>
          <span className="pill">{studied}/{obligatory.length} tópicos · 4 matérias</span>
        </div>
      </article>

      <h2>Matérias</h2>
      <div className="grid cols-2">
        {TRACK.map((item) => {
          const rows = obligatory.filter((row) => row.disciplineId === item.id)
          const modules = AREAS.filter((area) => area.disciplineId === item.id).length
          const started = rows.filter((row) => {
            const p = progress.find((x) => x.lessonId === row.lessonId)
            return p && p.status !== 'nao_iniciada'
          }).length
          const p = rows.length ? Math.round((started / rows.length) * 100) : 0
          return (
            <Link key={item.id} className="subject-card" data-disc={item.id} to={`/trilha?disc=${item.id}`}>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <span className="ico-bubble"><Icon name={DISCIPLINE_ICON[item.id]} /></span>
                <strong>{p}%</strong>
              </div>
              <strong>{{ portugues: 'Português', rlm: 'Raciocínio lógico', informatica: 'Informática', especificos: 'Específicos', estrategias: 'Estratégias' }[item.id]}</strong>
              <p className="muted" style={{ margin: 0 }}>{item.blurb}</p>
              <span className="pill">{modules} módulos</span>
            </Link>
          )
        })}
      </div>

      <h2>Seu próximo passo</h2>
      <div className="grid cols-3">
        <article className="card">
          <span className="ico-bubble" style={{ ['--disc' as string]: 'var(--disc-esp)' }}><Icon name="book" /></span>
          <h3>{next?.title ?? 'Trilha do edital'}</h3>
          <p className="muted">{next ? 'Maior peso ainda em aberto neste perfil.' : 'A trilha obrigatória está iniciada.'}</p>
          <Link className="btn" to={next ? `/licoes/${next.lessonId}` : '/trilha'}>Abrir aula</Link>
        </article>
        <article className="card">
          <span className="ico-bubble" style={{ ['--disc' as string]: 'var(--disc-pt)' }}><Icon name="questions" /></span>
          <h3>Quiz deste tópico</h3>
          <p className="muted">Questões inéditas com o gabarito comentado, letra por letra.</p>
          <Link className="btn" to={next ? `/questoes?lesson=${next.lessonId}` : '/questoes'}>Praticar</Link>
        </article>
        <article className="card">
          <span className="ico-bubble" style={{ ['--disc' as string]: 'var(--disc-est)' }}><Icon name={overdue ? 'review' : 'simulado'} /></span>
          <h3>{overdue ? `${overdue} revisão(ões) atrasada(s)` : 'Simulado cronometrado'}</h3>
          <p className="muted">{overdue ? 'Recupere o que já venceu no calendário.' : 'Ainda cabe um simulado curto antes da reta final.'}</p>
          <Link className="btn" to={overdue ? '/questoes?tab=revisoes' : '/simulados'}>{overdue ? 'Revisar' : 'Simular'}</Link>
        </article>
      </div>
      <p className="meta" style={{ marginTop: '1.2rem' }}>{LESSONS.length} aulas no curso · <Link to="/plano">Abrir o plano até a prova</Link></p>
    </section>
  )
}
