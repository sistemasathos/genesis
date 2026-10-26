import { useState } from 'react'
import { db } from '../lib/db'
import { parseImportedText, readFileAsText } from '../lib/importQuestions'
import { useStore } from '../state/store'
import type { Question } from '../models/types'
import { PageHeader } from '../components/PageHeader'

export function ImportPage() {
  const { reload } = useStore()
  const [preview, setPreview] = useState<Question[]>([])
  const [warnings, setWarnings] = useState<string[]>([])
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [fileName, setFileName] = useState('')

  async function onFile(file?: File) {
    if (!file) return
    setFileName(file.name)
    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      setWarnings([
        'PDF não é interpretado automaticamente neste navegador. Exporte o texto (ou JSON) e importe de novo. OCR de PDF digitalizado exigiria serviço externo; nada é enviado daqui.',
      ])
      setPreview([])
      return
    }
    const text = await readFileAsText(file)
    const parsed = parseImportedText(file.name, text)
    setPreview(parsed.questions)
    setWarnings(parsed.warnings)
    setSelected(Object.fromEntries(parsed.questions.map((item) => [item.id, item.validationStatus !== 'extracted_pending_key'])))
  }

  return (
    <section>
      <PageHeader title="Importar provas e JSON" lede="Arquivo → identificação → pré-visualização → revisão de gabaritos duvidosos → confirmação. Questão sem gabarito confiável não entra como validada." />
      <div className="row">
        <input type="file" accept=".json,.txt,.csv,.pdf,application/json,text/plain" onChange={(e) => void onFile(e.target.files?.[0])} />
        <button
          className="btn secondary"
          type="button"
          onClick={async () => {
            try {
              const res = await fetch(`${import.meta.env.BASE_URL}questoes-extraidas.json`)
              if (!res.ok) throw new Error('Arquivo de extração não encontrado em /public.')
              const parsed = parseImportedText('questoes-extraidas.json', await res.text())
              setFileName('questoes-extraidas.json')
              setPreview(parsed.questions)
              setWarnings(parsed.warnings)
              setSelected({})
            } catch (err) {
              setWarnings([err instanceof Error ? err.message : 'Falha ao carregar extração local.'])
            }
          }}
        >
          Carregar extração dos PDFs locais (sem gabarito)
        </button>
      </div>
      {fileName ? <p className="muted">Arquivo: {fileName}</p> : null}
      {warnings.map((item) => <p key={item} className="notice warn">{item}</p>)}
      {preview.map((question) => (
        <article key={question.id} className="panel">
          <label>
            <input type="checkbox" checked={!!selected[question.id]} onChange={(e) => setSelected((prev) => ({ ...prev, [question.id]: e.target.checked }))} />
            Incorporar
          </label>
          <p>{question.stem}</p>
          <p className="muted">Gabarito: {question.answerKey ?? 'ausente'} · status: {question.validationStatus}</p>
        </article>
      ))}
      <button
        className="btn"
        type="button"
        disabled={!preview.length}
        onClick={async () => {
          const chosen = preview.filter((item) => selected[item.id]).map((item) =>
            item.answerKey ? item : { ...item, validationStatus: 'extracted_pending_key' as const },
          )
          await db.addImportedQuestions(chosen)
          await reload()
          setWarnings(['Questões selecionadas foram gravadas no banco local deste navegador.'])
        }}
      >
        Confirmar incorporação
      </button>
    </section>
  )
}
