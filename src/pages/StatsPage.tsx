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
      <p>Recente: {(recent.recent * 100).toFixed(0)}% (n={recent.recentCount}). Anterior: {(recent.previous * 100).toFixed(0)}% (n={recent.previousCount}). {recent.recentCount < 8 ? 'Amostra recente pequena.' : ''}</p>
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
      <p>Amostra de erros: {errors.amostra}. Interpretação {(errors.interpretacao * 100).toFixed(0)}% · desconhecimento {(errors.desconhecimento * 100).toFixed(0)}% · distração {(errors.distracao * 100).toFixed(0)}% · cálculo {(errors.calculo * 100).toFixed(0)}%.</p>
      <h2>Confiança</h2>
      <p>Erros altos em confiança: {cal.highConfidenceWrong}. Acertos baixos em confiança: {cal.lowConfidenceCorrect}. {cal.sample < 8 ? 'Ainda sem amostra suficiente para concluir calibração.' : cal.overconfident ? 'Excesso de confiança identificado.' : 'Sem sinal forte de descalibração.'}</p>
      <h2>Simulados</h2>
      {trend.length ? (
        <div className="bar" aria-label="Evolução dos simulados">
          {trend.map((item) => <span key={item.id} style={{ width: `${100 / trend.length}%`, background: '#1e3f33', opacity: Math.max(0.25, item.percent / 100) }} title={`${item.percent.toFixed(0)}%`} />)}
        </div>
      ) : <p>Nenhum simulado concluído.</p>}
    </section>
  )
}
