import { allQuestions } from '../content/catalog'
import { DISCIPLINE_LABEL } from '../data/contest'
import { byDiscipline, calibration, errorKinds, median, originSplit, recentVsPrevious, simuladoTrend, studyMinutes } from '../lib/stats'
import { useStore } from '../state/store'
import { PageHeader } from '../components/PageHeader'

export function StatsPage() {
  const { attempts, importedQuestions, simulados, studyLogs } = useStore()
  const questions = allQuestions(importedQuestions)
  const times = attempts.map((item) => item.elapsedMs)
  const disc = byDiscipline(attempts, questions)
  const split = originSplit(attempts, questions)
  const errors = errorKinds(attempts)
  const cal = calibration(attempts)
  const trend = simuladoTrend(simulados)
  const recent = recentVsPrevious(attempts)

  return (
    <section>
      <PageHeader title="Estatísticas" lede="Indicadores só com dados reais deste perfil. Amostras pequenas aparecem com aviso; não há previsão de aprovação. Extraídas sem gabarito não entram no percentual de acertos." />
      <div className="grid cols-3">
        <article className="panel stat"><span className="muted">Tentativas</span><strong>{attempts.length}</strong></article>
        <article className="panel stat"><span className="muted">Tempo mediano/questão</span><strong>{(median(times) / 1000).toFixed(0)} s</strong></article>
        <article className="panel stat"><span className="muted">Estudo acumulado</span><strong>{(studyMinutes(studyLogs) / 60).toFixed(1)} h</strong></article>
      </div>
      <h2>Recente vs. anterior (7 dias)</h2>
      <div className="grid cols-2">
        <article className="panel stat"><span className="muted">Últimos 7 dias</span><strong>{(recent.recent * 100).toFixed(0)}%</strong><span className="muted">{recent.recentCount} tentativas{recent.recentCount < 8 ? ' · amostra pequena' : ''}</span></article>
        <article className="panel stat"><span className="muted">7 dias anteriores</span><strong>{(recent.previous * 100).toFixed(0)}%</strong><span className="muted">{recent.previousCount} tentativas</span></article>
      </div>
      <h2>Por disciplina</h2>
      {disc.map((row) => (
        <div key={row.disciplineId}>
          <div className="row"><span>{DISCIPLINE_LABEL[row.disciplineId]}</span><span>{(row.accuracy * 100).toFixed(0)}% · {row.attempts}</span></div>
          <div className="progress"><span style={{ width: `${row.accuracy * 100}%` }} /></div>
        </div>
      ))}
      <h2>Origem das questões</h2>
      <div className="table-wrap">
      <table>
        <tbody>
          <tr><td>Inéditas</td><td>{split.ineditas.count}</td><td>{(split.ineditas.accuracy * 100).toFixed(0)}%</td></tr>
          <tr><td>Provas anteriores</td><td>{split.oficiais.count}</td><td>{(split.oficiais.accuracy * 100).toFixed(0)}%</td></tr>
          <tr><td>Primeira vez</td><td>{split.first.count}</td><td>{(split.first.accuracy * 100).toFixed(0)}%</td></tr>
          <tr><td>Repetidas</td><td>{split.repeats.count}</td><td>{(split.repeats.accuracy * 100).toFixed(0)}%</td></tr>
        </tbody>
      </table>
      </div>
      <h2>Tipos de erro (quando classificados)</h2>
      <p className="muted">Amostra de {errors.amostra} erros classificados.</p>
      <div className="grid cols-4">
        <article className="panel stat"><span className="muted">Comando</span><strong>{(errors.comando * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Conceito próximo</span><strong>{(errors.conceito_proximo * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Eliminação</span><strong>{(errors.eliminacao * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Desconhecimento</span><strong>{(errors.desconhecimento * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Cálculo</span><strong>{(errors.calculo * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Texto além do trecho</span><strong>{(errors.interpretacao * 100).toFixed(0)}%</strong></article>
        <article className="panel stat"><span className="muted">Distração</span><strong>{(errors.distracao * 100).toFixed(0)}%</strong></article>
      </div>
      <h2>Confiança</h2>
      <div className="grid cols-2">
        <article className="panel stat"><span className="muted">Erros com confiança alta</span><strong>{cal.highConfidenceWrong}</strong></article>
        <article className="panel stat"><span className="muted">Acertos com confiança baixa</span><strong>{cal.lowConfidenceCorrect}</strong></article>
      </div>
      <p className="muted">{cal.sample < 8 ? 'Ainda sem amostra suficiente para concluir calibração.' : cal.overconfident ? 'Excesso de confiança identificado.' : 'Sem sinal forte de descalibração.'}</p>
      <h2>Simulados</h2>
      {trend.length ? (
        <div className="bar" aria-label="Evolução dos simulados">
          {trend.map((item) => <span key={item.id} style={{ width: `${100 / trend.length}%`, background: '#1e3f33', opacity: Math.max(0.25, item.percent / 100) }} title={`${item.percent.toFixed(0)}%`} />)}
        </div>
      ) : <p>Nenhum simulado concluído.</p>}
    </section>
  )
}
