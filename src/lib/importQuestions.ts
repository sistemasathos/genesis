import type { Choice, ChoiceId, DisciplineId, Question } from '../models/types'
import { uid } from './id'

const CHOICES: ChoiceId[] = ['A', 'B', 'C', 'D', 'E']

function mapDiscipline(value: string | undefined): DisciplineId {
  if (value === 'portugues' || value === 'rlm' || value === 'informatica' || value === 'especificos' || value === 'estrategias') {
    return value
  }
  return 'especificos'
}

export interface ImportPreview {
  questions: Question[]
  warnings: string[]
}

function detectKind(name: string, text: string): 'json' | 'gabarito' | 'texto' {
  if (name.endsWith('.json') || text.trim().startsWith('{') || text.trim().startsWith('[')) return 'json'
  if (/gabarito/i.test(name) || /^(\d+\s*[-–]\s*[A-E]\b)/m.test(text)) return 'gabarito'
  return 'texto'
}

export function parseImportedText(filename: string, text: string): ImportPreview {
  const kind = detectKind(filename, text)
  if (kind === 'json') return parseJsonQuestions(text)
  if (kind === 'gabarito') return parseAnswerKey(text)
  return parsePlainQuestions(text, filename)
}

function parseJsonQuestions(text: string): ImportPreview {
  const warnings: string[] = []
  try {
    const parsed = JSON.parse(text) as unknown
    const asExams = parsed as { exams?: { id?: string; organ?: string; questions?: unknown[] }[] }
    if (Array.isArray(asExams.exams)) {
      const questions: Question[] = []
      for (const exam of asExams.exams) {
        for (const raw of exam.questions ?? []) {
          const item = raw as Partial<Question> & { examQuestionNumber?: number; discipline?: string }
          if (!item.stem || !item.choices) continue
          questions.push({
            id: item.id ?? `${exam.id ?? 'exam'}-q${item.examQuestionNumber ?? questions.length + 1}`,
            disciplineId: mapDiscipline(item.discipline ?? item.disciplineId),
            areaId: 'importado',
            chapterId: 'importado',
            topicId: 'importado',
            stem: item.stem,
            choices: item.choices as Choice[],
            answerKey: item.answerKey ?? null,
            commentCorrect: 'Extraída de caderno anterior. Sem gabarito local — não usar como questão validada.',
            commentWrong: {},
            concept: `Prova anterior (${exam.organ ?? exam.id ?? 'órgão não identificado'})`,
            mainDifficulty: 'Gabarito pendente',
            howToRecognize: 'Estilo da banca, não pontuação oficial desta plataforma.',
            difficulty: 'media',
            skills: ['prova_anterior'],
            origin: 'prova_anterior',
            sourceId: `src-${exam.id ?? 'import'}`,
            originRole: 'Agente Administrativo',
            validationStatus: 'extracted_pending_key',
            traps: [],
            expectedSeconds: 90,
          })
        }
      }
      warnings.push(
        `${questions.length} questões extraídas. Nenhuma entra como validada: os PDFs locais não têm gabarito. Itarema usa 5 alternativas (A–E); estes cadernos usam A–D.`,
      )
      return { questions, warnings }
    }
    const list = Array.isArray(parsed) ? parsed : (parsed as { questions?: unknown[] }).questions
    if (!Array.isArray(list)) return { questions: [], warnings: ['JSON sem lista de questões.'] }
    const questions: Question[] = []
    for (const raw of list) {
      const item = raw as Partial<Question>
      if (!item.stem || !item.choices) {
        warnings.push('Item ignorado: falta enunciado ou alternativas.')
        continue
      }
      const pending = !item.answerKey
      questions.push({
        id: item.id ?? uid('imp'),
        disciplineId: (item.disciplineId as DisciplineId) ?? 'especificos',
        areaId: item.areaId ?? 'importado',
        chapterId: item.chapterId ?? 'importado',
        topicId: item.topicId ?? 'importado',
        stem: item.stem,
        choices: item.choices as Choice[],
        answerKey: item.answerKey ?? null,
        commentCorrect: item.commentCorrect ?? 'Comentário pendente de revisão manual.',
        commentWrong: item.commentWrong ?? {},
        concept: item.concept ?? 'Importado',
        mainDifficulty: item.mainDifficulty ?? 'Revisão manual necessária',
        howToRecognize: item.howToRecognize ?? '',
        difficulty: item.difficulty ?? 'media',
        skills: item.skills ?? ['importacao'],
        origin: item.origin ?? 'prova_anterior',
        sourceId: item.sourceId ?? 'src-import',
        validationStatus: pending ? 'extracted_pending_key' : 'validada',
        traps: item.traps ?? [],
        expectedSeconds: item.expectedSeconds ?? 90,
      })
    }
    return { questions, warnings }
  } catch {
    return { questions: [], warnings: ['JSON inválido.'] }
  }
}

function parseAnswerKey(text: string): ImportPreview {
  const warnings = ['Arquivo interpretado como gabarito. Associe-o às questões na revisão manual antes de validar.']
  const questions: Question[] = []
  const regex = /(\d+)\s*[-–:.)]\s*([A-Ea-e])/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(text))) {
    const letter = match[2].toUpperCase() as ChoiceId
    questions.push(skeleton(`gabarito ${match[1]}`, letter, `Gabarito importado para a questão ${match[1]}.`))
  }
  if (!questions.length) warnings.push('Nenhum par número/letra encontrado.')
  return { questions, warnings }
}

function parsePlainQuestions(text: string, filename: string): ImportPreview {
  const warnings: string[] = [
    `Arquivo ${filename} tratado como texto. PDF digitalizado exige OCR externo; este navegador não envia o arquivo a nenhum serviço.`,
  ]
  const chunks = text.split(/\n(?=\s*\d+\s*[-–.)])/).filter((chunk) => chunk.trim())
  const questions: Question[] = []
  for (const chunk of chunks) {
    const choiceMap: Partial<Record<ChoiceId, string>> = {}
    for (const letter of CHOICES) {
      const found = chunk.match(new RegExp(`\\(${letter}\\)\\s*([\\s\\S]*?)(?=\\(${nextLetter(letter)}\\)|$)`))
      if (found) choiceMap[letter] = found[1].trim()
    }
    const stem = chunk.replace(/\([A-E]\)[\s\S]*/g, '').replace(/^\s*\d+\s*[-–.)]\s*/, '').trim()
    if (!stem || Object.keys(choiceMap).length < 2) continue
    questions.push({
      ...skeleton(stem, null, 'Extraída sem gabarito confiável.'),
      choices: CHOICES.filter((id) => choiceMap[id]).map((id) => ({ id, text: choiceMap[id] ?? '' })),
    })
  }
  if (!questions.length) warnings.push('Não foi possível identificar questões. Revise manualmente ou importe JSON.')
  return { questions, warnings }
}

function nextLetter(letter: ChoiceId): ChoiceId | 'Z' {
  const index = CHOICES.indexOf(letter)
  return CHOICES[index + 1] ?? 'Z'
}

function skeleton(stem: string, answer: ChoiceId | null, comment: string): Question {
  return {
    id: uid('imp'),
    disciplineId: 'especificos',
    areaId: 'importado',
    chapterId: 'importado',
    topicId: 'importado',
    stem,
    choices: CHOICES.map((id) => ({ id, text: `Alternativa ${id} (preencher)` })),
    answerKey: answer,
    commentCorrect: comment,
    commentWrong: {},
    concept: 'Importação',
    mainDifficulty: 'Validação manual',
    howToRecognize: '',
    difficulty: 'media',
    skills: ['importacao'],
    origin: 'prova_anterior',
    sourceId: 'src-import',
    validationStatus: answer ? 'extracted_pending_key' : 'extracted_pending_key',
    traps: [],
    expectedSeconds: 90,
  }
}

export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result ?? ''))
    reader.onerror = () => reject(new Error('Não foi possível ler o arquivo.'))
    reader.readAsText(file)
  })
}
