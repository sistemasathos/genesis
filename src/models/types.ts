export type DisciplineId =
  | 'portugues'
  | 'rlm'
  | 'informatica'
  | 'especificos'
  | 'estrategias'

export type SourceKind =
  | 'edital'
  | 'prova_anterior'
  | 'norma_oficial'
  | 'questao_inedita'
  | 'explicacao_didatica'
  | 'hipotese_banca'
  | 'documento_local'

export type QuestionOrigin = 'inedita' | 'prova_anterior' | 'adaptada'

export type ValidationStatus =
  | 'validada'
  | 'inedita_revisada'
  | 'extracted_pending_key'
  | 'controversa'
  | 'anulada'
  | 'gabarito_alterado'

export type Difficulty = 'facil' | 'media' | 'dificil'

export type Confidence = 1 | 2 | 3 | 4 | 5

export type RecallQuality = 'nao_lembrei' | 'parcial' | 'compreendi'

export type ChoiceId = 'A' | 'B' | 'C' | 'D' | 'E'

export type ErrorKind =
  | 'comando'
  | 'conceito_proximo'
  | 'desconhecimento'
  | 'calculo'
  | 'eliminacao'
  | 'interpretacao'
  | 'distracao'
  | 'nao_classificado'

export type LessonStatus = 'nao_iniciada' | 'em_estudo' | 'estudada' | 'revisada'

export type MasteryLevel = 'insuficiente' | 'em_construcao' | 'parcial' | 'consistente' | 'dominado'

export type DepthLevel = 'essencial' | 'completo' | 'aprofundamento' | 'revisaoRapida'

export type SimuladoMode =
  | 'completo'
  | 'disciplina'
  | 'capitulo'
  | 'topico'
  | 'erros'
  | 'revisao'
  | 'ineditas'
  | 'provas_anteriores'
  | 'dificuldade_crescente'
  | 'adaptativo'
  | 'reta_final'
  | 'livre'

export interface Choice {
  id: ChoiceId
  text: string
}

export interface Source {
  id: string
  name: string
  board?: string
  organ?: string
  role?: string
  year?: number
  educationLevel?: string
  disciplineId?: DisciplineId
  topics?: string[]
  url?: string
  consultedAt: string
  kind: SourceKind
  reliability: string
  notes?: string
}

export interface SyllabusItem {
  id: string
  disciplineId: DisciplineId
  areaId: string
  chapterId: string
  topicId: string
  subtopicId?: string
  editalItem: string
  title: string
  content: string
  sourcePage?: string
  lessonId: string
  complementary?: boolean
}

export interface LessonBlock {
  heading?: string
  body: string
}

export interface ComparisonRow {
  label: string
  left: string
  right: string
}

export interface GlossaryEntry {
  term: string
  definition: string
}

export interface WorkedExample {
  title: string
  setup: string
  steps: string[]
  result: string
}

export type EvidenceLevel = 'observado' | 'tendencia' | 'hipotese' | 'nao_demonstrado'

export interface ExamInsight {
  claim: string
  evidence: string
  level: EvidenceLevel
}

export interface Lesson {
  id: string
  disciplineId: DisciplineId
  areaId: string
  chapterId: string
  topicId: string
  title: string
  objective: string
  importance: string
  prerequisites: string[]
  essencial: LessonBlock[]
  completo: LessonBlock[]
  aprofundamento: LessonBlock[]
  revisaoRapida: LessonBlock[]
  definitions: GlossaryEntry[]
  comparisons?: { title: string; leftLabel: string; rightLabel: string; rows: ComparisonRow[] }[]
  examples: string[]
  publicAdminExamples?: string[]
  procedures?: string[]
  commonErrors: string[]
  traps: string[]
  workedExamples?: WorkedExample[]
  examInsights?: ExamInsight[]
  recallPrompts?: string[]
  estimatedMinutes?: number
  relatedLessonIds: string[]
  relatedEditalItems: string[]
  synthesis: string
  glossary: GlossaryEntry[]
  masteryCriteria: string[]
  questionIds: string[]
  sourceIds: string[]
  complementary?: boolean
}

export interface Question {
  id: string
  disciplineId: DisciplineId
  areaId: string
  chapterId: string
  topicId: string
  subtopicId?: string
  lessonId?: string
  stem: string
  supportText?: string
  choices: Choice[]
  answerKey: ChoiceId | null
  commentCorrect: string
  commentWrong: Partial<Record<ChoiceId, string>>
  concept: string
  mainDifficulty: string
  howToRecognize: string
  reviewLessonId?: string
  difficulty: Difficulty
  skills: string[]
  origin: QuestionOrigin
  sourceId: string
  board?: string
  year?: number
  originRole?: string
  validationStatus: ValidationStatus
  traps: string[]
  expectedSeconds: number
  recurrenceNote?: string
  officialAnswerKey?: ChoiceId | null
  controversy?: string
  strategyKind?: 'pegadinha' | 'palavra_decisiva' | 'eliminacao' | 'confianca'
}

export interface ExamBlueprint {
  totalQuestions: number
  durationMinutes: number
  alternatives: ChoiceId[]
  weightPerQuestion: number
  maxScore: number
  passingPerDisciplineRatio: number
  penaltyWrong: boolean
  examDate: string
  examStart: string
  examEnd: string
  timezone: string
  distribution: Record<DisciplineId, { questions: number; points: number }>
}

export interface ContestInfo {
  title: string
  organ: string
  board: string
  edict: string
  edictDate: string
  role: string
  education: string
  salary: string
  workload: string
  vacanciesImmediate: { total: number; ampla: number; pcd: number; pp: number }
  vacanciesReserve: number
  examDate: string
  examShift: string
  durationHours: number
  validityYears: number
  titlesApply: boolean
  sourceDocument: string
  notes: string[]
  blueprint: ExamBlueprint
}

export interface Profile {
  id: string
  username: string
  displayName: string
  createdAt: string
  lastAccessAt: string
}

export interface UserSettings {
  profileId: string
  examDate: string
  minutesPerDay: number
  weekdays: number[]
  preferredHours: string
  studyGoalMinutes: number
  questionGoal: number
  defaultSimuladoMinutes: number
  questionsPerSession: number
  preferredDifficulty: Difficulty | 'mista'
  srs: {
    firstReviewHours: number
    dayAfterHours: number
    growingDays: number[]
    errorResetDays: number
    lowConfidenceDays: number
  }
  showExplanationsDuringPractice: boolean
  showTimer: boolean
  fontScale: number
  highContrast: boolean
  reducedMotion: boolean
  theme: 'claro' | 'sepia' | 'escuro'
  selectorWeights: SelectorWeights
}

export interface SelectorWeights {
  unseen: number
  unstudied: number
  errorRate: number
  markedReview: number
  lowMastery: number
  overdueReview: number
  previousError: number
  timeSinceReview: number
  difficultyFit: number
  examProximity: number
  documentedFrequency: number
  coverageBalance: number
}

export interface TextMark {
  id: string
  quote: string
}

export interface LessonProgress {
  profileId: string
  lessonId: string
  status: LessonStatus
  lastDepth: DepthLevel
  lastPosition: number
  startedAt?: string
  studiedAt?: string
  reviewedAt?: string
  secondsStudied: number
  selfRating?: RecallQuality
  notes?: string
  highlights?: TextMark[]
  checks?: string[]
}

export interface QuestionAttempt {
  id: string
  profileId: string
  questionId: string
  sessionId?: string
  choiceId: ChoiceId | null
  correct: boolean | null
  confidence?: Confidence
  errorKind?: ErrorKind
  elapsedMs: number
  createdAt: string
  markedForReview: boolean
}

export interface ReviewItem {
  id: string
  profileId: string
  targetType: 'lesson' | 'question' | 'topic'
  targetId: string
  dueAt: string
  intervalDays: number
  ease: number
  repetitions: number
  lastQuality?: RecallQuality
  lastResult?: 'acerto' | 'erro' | 'parcial'
  createdAt: string
  updatedAt: string
}

export interface SimuladoSession {
  id: string
  profileId: string
  mode: SimuladoMode
  title: string
  questionIds: string[]
  answers: Record<string, ChoiceId | null>
  marked: string[]
  currentIndex: number
  startedAt: string
  updatedAt: string
  finishedAt?: string
  durationSeconds: number
  remainingSeconds?: number
  timerEnabled: boolean
  showFeedback: boolean
  disciplineFilter?: DisciplineId
  chapterId?: string
  topicId?: string
  result?: SimuladoResult
}

export interface SimuladoResult {
  answered: number
  blank: number
  correct: number
  wrong: number
  rawPercent: number
  officialPoints: number
  officialMax: number
  byDiscipline: Record<string, { correct: number; total: number; points: number; max: number; passed: boolean | null }>
  byTopic: Record<string, { correct: number; total: number }>
  elapsedSeconds: number
  avgSeconds: number
  highConfidenceWrong: number
  lowConfidenceCorrect: number
  priorityReview: string[]
}

export interface StudyLog {
  id: string
  profileId: string
  date: string
  minutes: number
  questions: number
  lessonIds: string[]
}

export interface IssueReport {
  id: string
  profileId: string
  targetType: 'question' | 'lesson'
  targetId: string
  message: string
  createdAt: string
}

export interface BackupPayload {
  version: 1
  exportedAt: string
  profiles: Profile[]
  settings: UserSettings[]
  lessonProgress: LessonProgress[]
  attempts: QuestionAttempt[]
  reviews: ReviewItem[]
  simulados: SimuladoSession[]
  studyLogs: StudyLog[]
  reports: IssueReport[]
  importedQuestions: Question[]
}

export const BACKUP_VERSION = 1 as const
