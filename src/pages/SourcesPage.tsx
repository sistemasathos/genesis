import { SOURCES } from '../data/sources'
import { BANCA_REPORT } from '../data/banca'
import { PageHeader } from '../components/PageHeader'
import { SOURCE_KIND_LABEL } from '../ui/labels'

export function SourcesPage() {
  return (
    <section>
      <PageHeader title="Fontes e provas anteriores" lede="Tudo o que a plataforma afirma de regra de prova vem do edital local. Cadernos anexos servem para estilo, não para gabarito, enquanto o PDF não trouxer a chave." />
      <div className="table-wrap">
      <table>
        <thead><tr><th>Documento</th><th>Tipo</th><th>Confiabilidade</th></tr></thead>
        <tbody>
          {SOURCES.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.name}</strong>
                <div className="muted">{[item.board, item.organ, item.role, item.year].filter(Boolean).join(' · ')}</div>
                {item.url ? <div className="muted">{item.url}</div> : null}
              </td>
              <td>{SOURCE_KIND_LABEL[item.kind] ?? item.kind}</td>
              <td>{item.reliability} {item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <h2>Análise da banca (amostra local)</h2>
      <p>Atualizado em {BANCA_REPORT.updatedAt}. PDFs locais: {BANCA_REPORT.sample.localPdfs}. Gabaritos no PDF: {BANCA_REPORT.sample.gabaritosNoPdfLocal ? 'não' : 'sim'}.</p>
      {BANCA_REPORT.observations.map((item) => (
        <article key={item.claim} className="panel">
          <p>{item.claim}</p>
          <p className="muted">Evidência: {item.evidence} · n = {item.n}</p>
        </article>
      ))}
      <h3>Limitações</h3>
      <ul>{BANCA_REPORT.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  )
}
