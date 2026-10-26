import { Link } from 'react-router-dom'
import { QuestionPlayer } from '../components/QuestionPlayer'
import { allQuestions, lessonById } from '../content/catalog'
import { classifyQueue } from '../lib/srs'
import { usableQuestions } from '../lib/validation'
import { useStore } from '../state/store'
import { PageHeader } from '../components/PageHeader'
import { TARGET_TYPE_LABEL } from '../ui/labels'

export function ReviewsPage() {
  const { reviews, importedQuestions } = useStore()
  const queues = classifyQueue(reviews)
  const bank = usableQuestions(allQuestions(importedQuestions))
  const dueIds = [...queues.overdue, ...queues.dueToday, ...queues.highError].map((item) => item.targetId)
  const dueQuestions = bank.filter((item) => dueIds.includes(item.id) || dueIds.includes(item.lessonId ?? '') || dueIds.includes(item.topicId))

  return (
    <section>
      <PageHeader title="Revisões espaçadas" lede="A fila usa o desempenho registrado neste perfil. Ler a lição não gera revisão sozinha: é preciso registrar." />
      <div className="grid cols-3">
        <article className="panel stat"><span className="muted">Hoje</span><strong>{queues.dueToday.length}</strong></article>
        <article className="panel stat"><span className="muted">Atrasadas</span><strong>{queues.overdue.length}</strong></article>
        <article className="panel stat"><span className="muted">Alto erro</span><strong>{queues.highError.length}</strong></article>
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
    </section>
  )
}
