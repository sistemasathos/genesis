import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LESSONS, QUESTIONS } from '../content/catalog'
import { SOURCES } from '../data/sources'
import { SYLLABUS } from '../data/syllabus'
import { searchAll } from '../lib/search'
import { PageHeader } from '../components/PageHeader'

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const hits = useMemo(() => searchAll(q, LESSONS, QUESTIONS, SYLLABUS, SOURCES), [q])

  return (
    <section>
      <PageHeader title="Pesquisa" lede="Busca simultânea em lições, questões, itens do edital e fontes." />
      <div className="field">
        <label htmlFor="busca-geral">Palavra, disciplina ou conceito</label>
        <input
          id="busca-geral"
          type="search"
          value={q}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
          placeholder="Ex.: anulação, crase, Windows 11"
        />
      </div>
      {q.trim().length < 2 ? (
        <p className="notice info">Digite ao menos duas letras. A mesma busca está na barra superior, em qualquer página.</p>
      ) : hits.length === 0 ? (
        <p className="notice">Nenhum resultado para “{q}”. Tente o termo do edital (ex.: atos, protocolo, percentual) ou o título da aula.</p>
      ) : (
        <div className="search-hits">
          {hits.map((hit) => (
            <article key={`${hit.type}-${hit.id}`} className="panel">
              <span className="meta">{hit.type}</span>
              <div>
                {hit.type === 'licao' || hit.type === 'edital' ? <Link to={`/licoes/${hit.id}`}>{hit.title}</Link> : hit.title}
              </div>
              <p className="muted">{hit.snippet}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
