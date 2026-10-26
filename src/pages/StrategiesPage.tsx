import { Link } from 'react-router-dom'
import { LESSONS, QUESTIONS } from '../content/catalog'
import { BANCA_REPORT } from '../data/banca'
import { CORPUS_NOTE, QUESTION_STRUCTURES } from '../data/questionStructures'
import { CONTEST } from '../data/contest'
import { randomHitProbability, expectedValueNoPenalty } from '../lib/scoring'
import { QuestionPlayer } from '../components/QuestionPlayer'
import { PedBlock } from '../components/Pedagogy'
import { calibration } from '../lib/stats'
import { useStore } from '../state/store'
import { EVIDENCE_LABEL } from '../ui/labels'

const MECHANISMS = [
  {
    mecanismo: 'Texto-base + vários itens',
    faz: 'Cobra vocabulário, inferência ou reescritura no mesmo trecho. O candidato responde à opinião própria.',
    antidoto: 'Leia o comando, volte só ao trecho que sustenta a resposta, ignore o que o texto não diz.',
    n: '18/280 com rótulo TEXTO I/II/III',
    level: 'observado' as const,
  },
  {
    mecanismo: 'Afirmativas I/II/III',
    faz: 'Uma romana falsa derruba a combinação. Aceitar o conjunto porque “a I está certa” é o erro típico.',
    antidoto: 'Julgue cada romana sozinha. Frase com duas ideias, uma falsa, é falsa. Só então monte a combinação.',
    n: '39/280',
    level: 'observado' as const,
  },
  {
    mecanismo: 'Comando EXCETO / incorreta / NÃO',
    faz: 'Inverte a tarefa: a verdadeira vira distrator. O hábito marca o que “está certo”.',
    antidoto: 'Reescreva o comando como “qual é a falsa?”. Circule a negativa antes de ler as letras.',
    n: '24/280',
    level: 'observado' as const,
  },
  {
    mecanismo: 'Latinismo como objeto',
    faz: 'Cobra o sentido de stricto sensu, sine qua non, data venia, caput — o “som jurídico” não basta.',
    antidoto: 'Traduza a expressão antes de olhar o contexto do órgão.',
    n: '8/280',
    level: 'observado' as const,
  },
  {
    mecanismo: 'Expediente + conceito (específicos)',
    faz: 'O enredo do balcão esconde o instituto (CCO, PATI, anulação). Responder à história, não à regra.',
    antidoto: 'Isole o fato administrativo. Ignore dia da semana, nome do servidor e detalhe que não altera a norma.',
    n: 'blocos 21–40 dos 7 cadernos',
    level: 'tendencia' as const,
  },
  {
    mecanismo: 'Problema numérico no stem',
    faz: 'Percentual, regra de três, unidade. O número que “aparece mais” não é o pedido.',
    antidoto: 'Copie os dados, escolha a operação, confira dimensão e ordem de grandeza.',
    n: 'blocos RLM de 3 cadernos',
    level: 'tendencia' as const,
  },
]

export function StrategiesPage() {
  const { attempts } = useStore()
  const lessons = LESSONS.filter((item) => item.disciplineId === 'estrategias')
  const model = QUESTIONS.find((item) => item.id === 'est-anat-01')
  const recognition = QUESTIONS.filter((item) => item.skills.includes('reconhecimento_estrutura') && item.id !== model?.id)
  const cal = calibration(attempts)
  const p5 = randomHitProbability(5)
  const sample = BANCA_REPORT.sample

  return (
    <article className="dossier">
      <p className="kicker">Dossiê da banca · evidência da amostra local</p>
      <h1>O Padrão IDIB</h1>
      <p className="lead">
        Módulo complementar, fora do Anexo IV. Serve para ler o enunciado do IDIB com o formato de Itarema na cabeça —
        e para não treinar no formato errado. Cada afirmação abaixo traz n e nível de evidência.
        Não há letra mágica. Não há gabarito nos PDFs locais.
      </p>

      <h2>1. Quem é o IDIB neste concurso</h2>
      <p>
        A banca do Edital nº 01/2026 da Prefeitura de Itarema/CE é o Instituto de Desenvolvimento Institucional Brasileiro.
        Para Agente Administrativo a prova objetiva tem <strong>50 questões, alternativas A–E, uma correta, peso 2,0, 4 horas</strong>
        ({CONTEST.examShift}). Corte: 50% dos pontos em cada disciplina. Erro não desconta ponto extra (item 13.9): branco, rasura ou dupla marcação valem zero.
      </p>
      <p>
        Os cadernos locais de Agente Administrativo que esta plataforma extraiu são outra peça: <strong>40 questões, A–D, 3h ou 4h conforme o certame</strong>.
        Mesma banca, formato diferente. Treinar só nesses PDFs deixa de exercitar a quinta alternativa e a carga de 50 itens.
      </p>
      <p>
        Entre chutar ao acaso em 5 opções e deixar em branco, o valor esperado do chute uniforme é {expectedValueNoPenalty(p5).toFixed(2)} ponto
        (probabilidade {(p5 * 100).toFixed(0)}%). Eliminar sem fundamento não reproduz esse número.
      </p>

      <h2>2. A amostra — o que existe e o que não existe</h2>
      <p>{CORPUS_NOTE}</p>
      <div className="kpi-row">
        <article className="card kpi"><span className="muted">Cadernos distintos</span><strong>{sample.cadernosDistintos}</strong><small>prova2 omitida: duplicata de prova1</small></article>
        <article className="card kpi"><span className="muted">Itens extraídos</span><strong>{sample.questoesExtraidas}</strong><small>{sample.alternativasNosCadernosLocais}</small></article>
        <article className="card kpi"><span className="muted">Gabarito no PDF</span><strong>Não</strong><small>Sem distribuição de letras</small></article>
        <article className="card kpi"><span className="muted">Itarema (edital)</span><strong>50×A–E</strong><small>{sample.alternativasItarema}</small></article>
      </div>
      {BANCA_REPORT.observations.map((item) => (
        <article key={item.claim} className="panel" style={{ marginTop: '0.7rem' }}>
          <span className="evidence observado">Observado</span>
          <p>{item.claim}</p>
          <p className="meta">n = {item.n} · {item.evidence}</p>
        </article>
      ))}
      <PedBlock kind="warn" title="Limites — não demonstrado">
        <ul>
          {BANCA_REPORT.limitations.map((item) => <li key={item}>{item}</li>)}
          <li>Não está demonstrado que Itarema repetirá a densidade de romanos (39/280) dos cadernos de 40 itens.</li>
          <li>Lei 8.666/93 aparece em 13 itens antigos: não está no programa de Itarema e foi revogada pela 14.133/2021. Não tratar como ementa deste cargo.</li>
        </ul>
      </PedBlock>

      <h2>3. Por disciplina — como o enunciado entra</h2>
      <p className="muted">Contagens sobre 280 itens A–D. Hipótese de transposição para 50×A–E de Itarema: não demonstrada.</p>
      {QUESTION_STRUCTURES.map((item) => (
        <article key={item.id} className="structure-card" style={{ marginBottom: '0.65rem' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <strong>{item.name}</strong>
            <span className={`evidence ${item.level}`}>{EVIDENCE_LABEL[item.level]}</span>
          </div>
          <p>{item.description}</p>
          <p className="meta">{item.n} · {item.evidence}</p>
          <p><strong>Como reconhecer:</strong> {item.howToSpot}</p>
          <p><strong>Como resolver:</strong> {item.howToSolve}</p>
        </article>
      ))}

      <h2>4. Mecanismo → o que faz → antídoto</h2>
      <p>Só o que a amostra sustenta. Equivale à tabela de troca de verbos/prazos de outras bancas — aqui, estruturas de item, não gabarito.</p>
      <div className="table-wrap">
        <table className="rules-table">
          <thead>
            <tr><th>Mecanismo</th><th>O que faz no item</th><th>Antídoto</th><th>n / nível</th></tr>
          </thead>
          <tbody>
            {MECHANISMS.map((row) => (
              <tr key={row.mecanismo}>
                <td>{row.mecanismo}</td>
                <td>{row.faz}</td>
                <td>{row.antidoto}</td>
                <td><span className={`evidence ${row.level}`}>{EVIDENCE_LABEL[row.level]}</span><div className="meta">{row.n}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>5. Modelo inédito — não é item oficial</h2>
      <p>
        Questão escrita para esta plataforma, no formato de Itarema (A–E). Não copia caderno local. Use “Ver explicação” depois de responder.
      </p>
      {model ? (
        <QuestionPlayer questions={[model]} title="Item inédito de reconhecimento" showFeedback timerEnabled={false} />
      ) : null}

      <h2>6. Onde treinar isso</h2>
      <p className="muted">Aulas 1–8 do módulo complementar, com tempo estimado de leitura. Não pontuam na prova objetiva.</p>
      <ol>
        {lessons.map((lesson, index) => (
          <li key={lesson.id} style={{ marginBottom: '0.55rem' }}>
            <Link to={`/licoes/${lesson.id}`}>{index + 1}. {lesson.title}</Link>
            <div className="muted">{lesson.objective}{lesson.estimatedMinutes ? ` · ~${lesson.estimatedMinutes} min` : ''}</div>
          </li>
        ))}
      </ol>

      <h2>Calibração neste perfil</h2>
      <p>
        Amostra com confiança declarada: {cal.sample}. Erros com alta confiança: {cal.highConfidenceWrong}.{' '}
        {cal.overconfident
          ? 'Há sinal de excesso de confiança — releia o comando antes de marcar 4 ou 5.'
          : 'Ainda não há evidência estatística suficiente de descalibração.'}
      </p>
      {recognition.length ? (
        <QuestionPlayer questions={recognition} title="Treino extra de reconhecimento de estrutura" showFeedback timerEnabled={false} />
      ) : null}
    </article>
  )
}
