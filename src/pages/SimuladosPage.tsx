import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CONTEST, DISCIPLINE_LABEL } from '../data/contest'
import { allQuestions } from '../content/catalog'
import { db } from '../lib/db'
import { selectQuestions, shuffleInPlace } from '../lib/selector'
import { uid } from '../lib/id'
import { usableQuestions } from '../lib/validation'
import { useStore } from '../state/store'
import type { DisciplineId, SimuladoMode } from '../models/types'
import { PageHeader } from '../components/PageHeader'

const MODES: { id: SimuladoMode; label: string }[] = [
  { id: 'completo', label: 'Completo (edital)' },
  { id: 'disciplina', label: 'Por disciplina' },
  { id: 'erros', label: 'Só erros' },
  { id: 'revisao', label: 'Revisão' },
  { id: 'ineditas', label: 'Inéditas' },
  { id: 'provas_anteriores', label: 'Provas anteriores (se validadas)' },
  { id: 'dificuldade_crescente', label: 'Dificuldade crescente' },
  { id: 'adaptativo', label: 'Adaptativo' },
  { id: 'reta_final', label: 'Reta final' },
  { id: 'livre', label: 'Livre' },
]

export function SimuladosPage() {
  const navigate = useNavigate()
  const { profile, settings, attempts, reviews, progress, simulados, importedQuestions, reload } = useStore()
  const [mode, setMode] = useState<SimuladoMode>('completo')
  const [discipline, setDiscipline] = useState<DisciplineId>('portugues')
  const [livre, setLivre] = useState(20)
  const bank = usableQuestions(allQuestions(importedQuestions))
  const interrupted = simulados.find((item) => !item.finishedAt)

  async function start() {
    if (!profile) return
    const ctx = { questions: bank, attempts, reviews, lessonProgress: progress, settings, sessionUsed: new Set<string>() }
    let items = bank
    if (mode === 'completo') {
      const picked: typeof bank = []
      for (const id of ['portugues', 'rlm', 'informatica', 'especificos'] as DisciplineId[]) {
        const need = CONTEST.blueprint.distribution[id].questions
        const sel = selectQuestions(ctx, need, (q) => q.disciplineId === id)
        picked.push(...sel.items)
      }
      items = picked
    } else if (mode === 'disciplina') {
      items = selectQuestions(ctx, CONTEST.blueprint.distribution[discipline].questions || 10, (q) => q.disciplineId === discipline).items
    } else if (mode === 'erros') {
      const wrong = new Set(attempts.filter((a) => a.correct === false).map((a) => a.questionId))
      items = selectQuestions(ctx, 15, (q) => wrong.has(q.id)).items
    } else if (mode === 'ineditas') {
      items = selectQuestions(ctx, settings.questionsPerSession, (q) => q.origin === 'inedita').items
    } else if (mode === 'provas_anteriores') {
      items = selectQuestions(ctx, 20, (q) => q.origin === 'prova_anterior').items
    } else if (mode === 'dificuldade_crescente') {
      items = [...selectQuestions(ctx, 4, (q) => q.difficulty === 'facil').items, ...selectQuestions(ctx, 4, (q) => q.difficulty === 'media').items, ...selectQuestions(ctx, 4, (q) => q.difficulty === 'dificil').items]
    } else if (mode === 'livre') {
      items = selectQuestions(ctx, livre).items
    } else if (mode === 'reta_final') {
      items = selectQuestions(ctx, 30).items
    } else {
      items = selectQuestions(ctx, 15).items
    }
    shuffleInPlace(items)
    const session = {
      id: uid('sim'),
      profileId: profile.id,
      mode,
      title: MODES.find((m) => m.id === mode)?.label ?? mode,
      questionIds: items.map((item) => item.id),
      answers: {},
      marked: [],
      currentIndex: 0,
      startedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      durationSeconds: 0,
      remainingSeconds: settings.defaultSimuladoMinutes * 60,
      timerEnabled: settings.showTimer,
      showFeedback: false,
      disciplineFilter: mode === 'disciplina' ? discipline : undefined,
    }
    await db.saveSimulado(session)
    await reload()
    navigate(`/simulados/${session.id}`)
  }

  return (
    <section>
      <PageHeader title="Simulados" lede="O simulado completo replica 14-6-6-24, 50 questões, peso 2,0, 4 horas e corte de 50% por disciplina. Sem gabarito durante a prova." />
      {interrupted ? (
        <p className="notice warn">
          Há um simulado interrompido ({interrupted.title}). <button className="btn" type="button" onClick={() => navigate(`/simulados/${interrupted.id}`)}>Retomar</button>
        </p>
      ) : null}
      <div className="grid cols-2">
        <label>
          Modalidade
          <select value={mode} onChange={(e) => setMode(e.target.value as SimuladoMode)}>
            {MODES.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
          </select>
        </label>
        {mode === 'disciplina' ? (
          <label>
            Disciplina
            <select value={discipline} onChange={(e) => setDiscipline(e.target.value as DisciplineId)}>
              {Object.entries(DISCIPLINE_LABEL).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </select>
          </label>
        ) : null}
        {mode === 'livre' ? (
          <label>
            Quantidade
            <input type="number" min={5} max={50} value={livre} onChange={(e) => setLivre(Number(e.target.value))} />
          </label>
        ) : null}
      </div>
      <button className="btn" type="button" onClick={() => void start()}>Iniciar</button>
      <h2>Histórico</h2>
      <div className="table-wrap">
      <table>
        <thead><tr><th>Quando</th><th>Modo</th><th>Pontos</th><th>%</th></tr></thead>
        <tbody>
          {simulados.filter((s) => s.result).map((item) => (
            <tr key={item.id}>
              <td>{item.finishedAt}</td>
              <td><Link to={`/simulados/${item.id}`}>{item.title}</Link></td>
              <td>{item.result?.officialPoints}/{item.result?.officialMax}</td>
              <td>{item.result?.rawPercent.toFixed(0)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  )
}
