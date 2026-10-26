import { Link } from 'react-router-dom'
import { CONTEST, DISCIPLINE_LABEL } from '../data/contest'
import { SYLLABUS } from '../data/syllabus'
import { LESSONS, QUESTIONS } from '../content/catalog'
import { useStore } from '../state/store'
import { lessonMastery } from '../lib/mastery'
import { buildPlan } from '../lib/planner'
import { PageHeader } from '../components/PageHeader'
import { MASTERY_LABEL } from '../ui/labels'

export function EditalPage() {
  const { settings, progress, reviews, attempts } = useStore()
  const plan = buildPlan({ settings, progress, reviews, attempts }).slice(0, 12)
  return (
    <section>
      <PageHeader
        title="Edital e plano de estudos"
        lede={`Fonte: ${CONTEST.edict}, extraído de docs/fontes/edital.pdf. Banca ${CONTEST.board}. Item facultativo não conta como cobertura obrigatória.`}
      />
      <div className="grid cols-2">
        <article className="panel">
          <h2>Cargo</h2>
          <p>{CONTEST.role} · {CONTEST.education} · {CONTEST.salary} · {CONTEST.workload}</p>
          <p>
            Vagas imediatas: {CONTEST.vacanciesImmediate.total} (ampla {CONTEST.vacanciesImmediate.ampla}, PP {CONTEST.vacanciesImmediate.pp}, PcD {CONTEST.vacanciesImmediate.pcd}). Cadastro de reserva: {CONTEST.vacanciesReserve}.
          </p>
          <p>Prova objetiva: {CONTEST.examDate} · {CONTEST.examShift} · {CONTEST.durationHours}h · 50 questões · peso 2,0 · total 100.</p>
          <p>Corte: 50% dos pontos em cada disciplina. Sem penalização por erro. Títulos: não se aplicam ao nível médio.</p>
        </article>
        <article className="panel">
          <h2>Distribuição</h2>
          <table>
            <tbody>
              {(['portugues', 'rlm', 'informatica', 'especificos'] as const).map((id) => (
                <tr key={id}>
                  <td>{DISCIPLINE_LABEL[id]}</td>
                  <td>{CONTEST.blueprint.distribution[id].questions} questões</td>
                  <td>{CONTEST.blueprint.distribution[id].points} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
      {CONTEST.notes.map((note) => (
        <p key={note} className="notice">{note}</p>
      ))}
      <h2>Matriz de cobertura</h2>
      <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Disciplina</th><th>Item do edital</th><th>Lição</th><th>Questões</th><th>Produção</th><th>Domínio</th>
          </tr>
        </thead>
        <tbody>
          {SYLLABUS.map((item) => {
            const lesson = LESSONS.find((row) => row.id === item.lessonId)
            const qs = QUESTIONS.filter((q) => q.lessonId === item.lessonId)
            return (
              <tr key={item.id}>
                <td>{DISCIPLINE_LABEL[item.disciplineId]}</td>
                <td>{item.editalItem}{item.complementary ? ' (facultativo)' : ''}</td>
                <td>{lesson ? <Link to={`/licoes/${lesson.id}`}>{lesson.title}</Link> : 'sem lição'}</td>
                <td>{qs.length}</td>
                <td>{lesson ? 'produzida' : 'pendente'}</td>
                <td>{MASTERY_LABEL[lessonMastery(progress.find((p) => p.lessonId === item.lessonId), qs, attempts)]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <h2>Agenda gerada</h2>
      <p className="muted">Distribui estudo, revisão e prática até a data configurada. Itens atrasados são recolocados sem apagar histórico.</p>
      <div className="table-wrap">
      <table>
        <thead><tr><th>Data</th><th>Atividade</th><th>Min</th><th>Por quê</th></tr></thead>
        <tbody>
          {plan.map((item) => (
            <tr key={`${item.date}-${item.title}`}>
              <td>{item.date}</td>
              <td>{item.title}</td>
              <td>{item.minutes}</td>
              <td>{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  )
}
