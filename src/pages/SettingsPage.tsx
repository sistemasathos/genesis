import { useState } from 'react'
import { db } from '../lib/db'
import { defaultSettings } from '../lib/defaults'
import { useStore } from '../state/store'
import type { Difficulty } from '../models/types'
import { PageHeader } from '../components/PageHeader'

export function SettingsPage() {
  const { profile, settings, reload, backend } = useStore()
  const [draft, setDraft] = useState(settings)
  const [displayName, setDisplayName] = useState(profile?.displayName ?? '')
  const [message, setMessage] = useState('')
  if (!profile) return null
  const profileId = profile.id

  function toggleDay(day: number) {
    setDraft((prev) => ({
      ...prev,
      weekdays: prev.weekdays.includes(day) ? prev.weekdays.filter((d) => d !== day) : [...prev.weekdays, day].sort(),
    }))
  }

  async function save() {
    await db.saveSettings(draft)
    await db.renameProfile(profileId, displayName)
    await reload()
    setMessage('Configurações aplicadas ao comportamento da plataforma.')
  }

  return (
    <section>
      <PageHeader title="Configurações" lede={`Persistência: ${backend}. Perfis são locais neste navegador, sem senha. Cada controle abaixo altera o comportamento do estudo.`} />
      <div className="grid cols-2">
        <div className="field">
          <label>Nome do perfil</label>
          <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>
        <div className="field">
          <label>Data da prova</label>
          <input type="date" value={draft.examDate} onChange={(e) => setDraft({ ...draft, examDate: e.target.value })} />
        </div>
        <div className="field">
          <label>Minutos por dia</label>
          <input type="number" value={draft.minutesPerDay} onChange={(e) => setDraft({ ...draft, minutesPerDay: Number(e.target.value), studyGoalMinutes: Number(e.target.value) })} />
        </div>
        <div className="field">
          <label>Meta de questões</label>
          <input type="number" value={draft.questionGoal} onChange={(e) => setDraft({ ...draft, questionGoal: Number(e.target.value) })} />
        </div>
        <div className="field">
          <label>Questões por sessão</label>
          <input type="number" value={draft.questionsPerSession} onChange={(e) => setDraft({ ...draft, questionsPerSession: Number(e.target.value) })} />
        </div>
        <div className="field">
          <label>Duração padrão do simulado (min)</label>
          <input type="number" value={draft.defaultSimuladoMinutes} onChange={(e) => setDraft({ ...draft, defaultSimuladoMinutes: Number(e.target.value) })} />
        </div>
        <div className="field">
          <label>Dificuldade preferida</label>
          <select value={draft.preferredDifficulty} onChange={(e) => setDraft({ ...draft, preferredDifficulty: e.target.value as Difficulty | 'mista' })}>
            <option value="mista">Mista</option>
            <option value="facil">Fácil</option>
            <option value="media">Média</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>
        <div className="field">
          <label>Horário preferido</label>
          <input value={draft.preferredHours} onChange={(e) => setDraft({ ...draft, preferredHours: e.target.value })} />
        </div>
      </div>
      <p>Dias disponíveis</p>
      <div className="row">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((label, day) => (
          <button key={label} className={draft.weekdays.includes(day) ? 'btn' : 'btn secondary'} type="button" onClick={() => toggleDay(day)}>{label}</button>
        ))}
      </div>
      <h2>Revisão espaçada</h2>
      <div className="grid cols-2">
        <label>Reset após erro (dias)<input type="number" value={draft.srs.errorResetDays} onChange={(e) => setDraft({ ...draft, srs: { ...draft.srs, errorResetDays: Number(e.target.value) } })} /></label>
        <label>Baixa confiança (dias)<input type="number" value={draft.srs.lowConfidenceDays} onChange={(e) => setDraft({ ...draft, srs: { ...draft.srs, lowConfidenceDays: Number(e.target.value) } })} /></label>
      </div>
      <h2>Interface</h2>
      <label><input type="checkbox" checked={draft.showExplanationsDuringPractice} onChange={(e) => setDraft({ ...draft, showExplanationsDuringPractice: e.target.checked })} /> Mostrar comentário no treino</label>
      <label><input type="checkbox" checked={draft.showTimer} onChange={(e) => setDraft({ ...draft, showTimer: e.target.checked })} /> Cronômetro</label>
      <label><input type="checkbox" checked={draft.highContrast} onChange={(e) => setDraft({ ...draft, highContrast: e.target.checked })} /> Contraste alto</label>
      <label>Tamanho da fonte <input type="number" step="0.05" min="0.9" max="1.4" value={draft.fontScale} onChange={(e) => setDraft({ ...draft, fontScale: Number(e.target.value) })} /></label>
      <label>Tema
        <select value={draft.theme === 'sepia' ? 'claro' : draft.theme} onChange={(e) => setDraft({ ...draft, theme: e.target.value as 'claro' | 'escuro' })}>
          <option value="claro">Claro</option>
          <option value="escuro">Escuro</option>
        </select>
      </label>
      <div className="row" style={{ marginTop: '1rem' }}>
        <button className="btn" type="button" onClick={() => void save()}>Salvar</button>
        <button className="btn secondary" type="button" onClick={async () => { const next = defaultSettings(profileId); setDraft(next); await db.saveSettings(next); await reload() }}>Restaurar padrões</button>
        <button className="btn secondary" type="button" onClick={() => download(db.exportJson(), 'genesis-backup.json')}>Exportar JSON</button>
        <label className="btn secondary">
          Importar backup
          <input hidden type="file" accept="application/json" onChange={(e) => void importBackup(e.target.files?.[0], reload, setMessage)} />
        </label>
        <button className="btn danger" type="button" onClick={async () => {
          if (!window.confirm('Apagar progresso, tentativas, revisões e simulados deste perfil?')) return
          await db.clearProfileData(profileId)
          await reload()
        }}>Limpar dados do perfil</button>
      </div>
      {message ? <p className="notice">{message}</p> : null}
    </section>
  )
}

function download(text: string, name: string) {
  const blob = new Blob([text], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

async function importBackup(file: File | undefined, reload: () => Promise<void>, setMessage: (v: string) => void) {
  if (!file) return
  try {
    await db.importJson(await file.text())
    await reload()
    setMessage('Backup importado.')
  } catch (err) {
    setMessage(err instanceof Error ? err.message : 'Falha na importação.')
  }
}
