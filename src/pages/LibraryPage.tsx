import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LESSONS } from '../content/catalog'
import { DISCIPLINE_LABEL } from '../data/contest'
import { useStore } from '../state/store'
import { PageHeader } from '../components/PageHeader'
import { STATUS_LABEL } from '../ui/labels'

export function LibraryPage() {
  const { progress } = useStore()
  const [q, setQ] = useState('')
  const items = useMemo(
    () => LESSONS.filter((lesson) => lesson.title.toLowerCase().includes(q.toLowerCase()) || lesson.objective.toLowerCase().includes(q.toLowerCase())),
    [q],
  )
  return (
    <section>
      <PageHeader title="Biblioteca" lede="Todas as lições do curso. Continue de onde parou. Lição lida não é domínio." />
      <div className="field">
        <label htmlFor="filtro-licoes">Filtrar lições</label>
        <input id="filtro-licoes" type="search" placeholder="Título ou objetivo" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Lição</th><th>Disciplina</th><th>Estado de estudo</th></tr></thead>
          <tbody>
            {items.map((lesson) => {
              const status = progress.find((p) => p.lessonId === lesson.id)?.status ?? 'nao_iniciada'
              return (
                <tr key={lesson.id}>
                  <td>
                    <Link to={`/licoes/${lesson.id}`}>{lesson.title}</Link>
                    {lesson.complementary ? ' (facultativo)' : ''}
                  </td>
                  <td>{DISCIPLINE_LABEL[lesson.disciplineId]}</td>
                  <td>{STATUS_LABEL[status]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {!items.length ? <p>Nenhuma lição corresponde ao filtro. Se a lista inteira estiver vazia, o conteúdo ainda não foi carregado neste build.</p> : null}
    </section>
  )
}
