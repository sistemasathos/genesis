import type {
  BackupPayload,
  IssueReport,
  LessonProgress,
  Profile,
  Question,
  QuestionAttempt,
  ReviewItem,
  SimuladoSession,
  StudyLog,
  UserSettings,
} from '../models/types'
import { parseBackup, serializeBackup } from './backup'
import { defaultSettings } from './defaults'
import { todayISO, uid } from './id'

const DB_NAME = 'genesis-itarema'
const DB_VERSION = 1
const LS_KEY = 'genesis-itarema-snapshot'

export interface DbState {
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

function emptyState(): DbState {
  return {
    profiles: [],
    settings: [],
    lessonProgress: [],
    attempts: [],
    reviews: [],
    simulados: [],
    studyLogs: [],
    reports: [],
    importedQuestions: [],
  }
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

export class AppDatabase {
  private state: DbState = emptyState()
  private ready: Promise<void>
  backend: 'indexeddb' | 'localStorage' | 'memory' = 'memory'

  constructor() {
    this.ready = this.hydrate()
  }

  async whenReady(): Promise<void> {
    await this.ready
  }

  private async hydrate(): Promise<void> {
    if (typeof indexedDB !== 'undefined') {
      try {
        this.state = await loadIndexedDb()
        this.backend = 'indexeddb'
        return
      } catch {
        // fallback
      }
    }
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        const parsed = parseBackup(raw)
        if (parsed.ok) {
          this.state = backupToState(parsed.data)
          this.backend = 'localStorage'
          return
        }
      }
      this.backend = 'localStorage'
      return
    }
    this.backend = 'memory'
  }

  private async persist(): Promise<void> {
    const snapshot = serializeBackup(this.state)
    if (this.backend === 'indexeddb') {
      await saveIndexedDb(this.state)
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LS_KEY, snapshot)
    }
  }

  snapshot(): DbState {
    return clone(this.state)
  }

  async listProfiles(): Promise<Profile[]> {
    await this.whenReady()
    return clone(this.state.profiles)
  }

  async upsertProfile(username: string): Promise<Profile> {
    await this.whenReady()
    const key = username.trim()
    if (!key) throw new Error('Informe um nome de usuário.')
    const existing = this.state.profiles.find((item) => item.username.toLowerCase() === key.toLowerCase())
    if (existing) {
      existing.lastAccessAt = new Date().toISOString()
      await this.persist()
      return clone(existing)
    }
    const profile: Profile = {
      id: uid('prf'),
      username: key,
      displayName: key,
      createdAt: new Date().toISOString(),
      lastAccessAt: new Date().toISOString(),
    }
    this.state.profiles.push(profile)
    this.state.settings.push(defaultSettings(profile.id))
    await this.persist()
    return clone(profile)
  }

  async renameProfile(profileId: string, displayName: string): Promise<void> {
    await this.whenReady()
    const profile = this.state.profiles.find((item) => item.id === profileId)
    if (!profile) throw new Error('Perfil não encontrado.')
    profile.displayName = displayName.trim() || profile.displayName
    profile.username = displayName.trim() || profile.username
    await this.persist()
  }

  async getSettings(profileId: string): Promise<UserSettings> {
    await this.whenReady()
    const found = this.state.settings.find((item) => item.profileId === profileId)
    if (found) return clone(found)
    const created = defaultSettings(profileId)
    this.state.settings.push(created)
    await this.persist()
    return clone(created)
  }

  async saveSettings(settings: UserSettings): Promise<void> {
    await this.whenReady()
    const index = this.state.settings.findIndex((item) => item.profileId === settings.profileId)
    if (index >= 0) this.state.settings[index] = clone(settings)
    else this.state.settings.push(clone(settings))
    await this.persist()
  }

  async getProgress(profileId: string): Promise<LessonProgress[]> {
    await this.whenReady()
    return clone(this.state.lessonProgress.filter((item) => item.profileId === profileId))
  }

  async saveProgress(progress: LessonProgress): Promise<void> {
    await this.whenReady()
    const index = this.state.lessonProgress.findIndex(
      (item) => item.profileId === progress.profileId && item.lessonId === progress.lessonId,
    )
    if (index >= 0) this.state.lessonProgress[index] = clone(progress)
    else this.state.lessonProgress.push(clone(progress))
    await this.persist()
  }

  async getAttempts(profileId: string): Promise<QuestionAttempt[]> {
    await this.whenReady()
    return clone(this.state.attempts.filter((item) => item.profileId === profileId))
  }

  async addAttempt(attempt: QuestionAttempt): Promise<void> {
    await this.whenReady()
    this.state.attempts.push(clone(attempt))
    await this.persist()
  }

  async getReviews(profileId: string): Promise<ReviewItem[]> {
    await this.whenReady()
    return clone(this.state.reviews.filter((item) => item.profileId === profileId))
  }

  async saveReview(review: ReviewItem): Promise<void> {
    await this.whenReady()
    const index = this.state.reviews.findIndex((item) => item.id === review.id)
    if (index >= 0) this.state.reviews[index] = clone(review)
    else this.state.reviews.push(clone(review))
    await this.persist()
  }

  async getSimulados(profileId: string): Promise<SimuladoSession[]> {
    await this.whenReady()
    return clone(this.state.simulados.filter((item) => item.profileId === profileId))
  }

  async saveSimulado(session: SimuladoSession): Promise<void> {
    await this.whenReady()
    const index = this.state.simulados.findIndex((item) => item.id === session.id)
    if (index >= 0) this.state.simulados[index] = clone(session)
    else this.state.simulados.push(clone(session))
    await this.persist()
  }

  async addStudyLog(log: StudyLog): Promise<void> {
    await this.whenReady()
    const existing = this.state.studyLogs.find((item) => item.profileId === log.profileId && item.date === log.date)
    if (existing) {
      existing.minutes += log.minutes
      existing.questions += log.questions
      existing.lessonIds = [...new Set([...existing.lessonIds, ...log.lessonIds])]
    } else {
      this.state.studyLogs.push(clone(log))
    }
    await this.persist()
  }

  async getStudyLogs(profileId: string): Promise<StudyLog[]> {
    await this.whenReady()
    return clone(this.state.studyLogs.filter((item) => item.profileId === profileId))
  }

  async addReport(report: IssueReport): Promise<void> {
    await this.whenReady()
    this.state.reports.push(clone(report))
    await this.persist()
  }

  async getReports(profileId: string): Promise<IssueReport[]> {
    await this.whenReady()
    return clone(this.state.reports.filter((item) => item.profileId === profileId))
  }

  async addImportedQuestions(questions: Question[]): Promise<void> {
    await this.whenReady()
    const ids = new Set(this.state.importedQuestions.map((item) => item.id))
    for (const question of questions) {
      if (!ids.has(question.id)) this.state.importedQuestions.push(clone(question))
    }
    await this.persist()
  }

  async importedQuestions(): Promise<Question[]> {
    await this.whenReady()
    return clone(this.state.importedQuestions)
  }

  exportJson(): string {
    return serializeBackup(this.state)
  }

  async importJson(raw: string): Promise<void> {
    const parsed = parseBackup(raw)
    if (!parsed.ok) throw new Error(parsed.error)
    this.state = backupToState(parsed.data)
    await this.persist()
  }

  async resetSettings(profileId: string): Promise<UserSettings> {
    const next = defaultSettings(profileId)
    await this.saveSettings(next)
    return next
  }

  async clearProfileData(profileId: string): Promise<void> {
    await this.whenReady()
    this.state.lessonProgress = this.state.lessonProgress.filter((item) => item.profileId !== profileId)
    this.state.attempts = this.state.attempts.filter((item) => item.profileId !== profileId)
    this.state.reviews = this.state.reviews.filter((item) => item.profileId !== profileId)
    this.state.simulados = this.state.simulados.filter((item) => item.profileId !== profileId)
    this.state.studyLogs = this.state.studyLogs.filter((item) => item.profileId !== profileId)
    this.state.reports = this.state.reports.filter((item) => item.profileId !== profileId)
    await this.persist()
  }
}

function backupToState(data: BackupPayload): DbState {
  return {
    profiles: data.profiles ?? [],
    settings: data.settings ?? [],
    lessonProgress: data.lessonProgress ?? [],
    attempts: data.attempts ?? [],
    reviews: data.reviews ?? [],
    simulados: data.simulados ?? [],
    studyLogs: data.studyLogs ?? [],
    reports: data.reports ?? [],
    importedQuestions: data.importedQuestions ?? [],
  }
}

function openIdb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv')
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function loadIndexedDb(): Promise<DbState> {
  const db = await openIdb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction('kv', 'readonly')
    const request = tx.objectStore('kv').get('state')
    request.onsuccess = () => resolve((request.result as DbState) ?? emptyState())
    request.onerror = () => reject(request.error)
  })
}

async function saveIndexedDb(state: DbState): Promise<void> {
  const db = await openIdb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction('kv', 'readwrite')
    tx.objectStore('kv').put(clone(state), 'state')
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export const db = new AppDatabase()

export function emptyProgress(profileId: string, lessonId: string): LessonProgress {
  return {
    profileId,
    lessonId,
    status: 'nao_iniciada',
    lastDepth: 'essencial',
    lastPosition: 0,
    secondsStudied: 0,
  }
}

export function stampStudy(profileId: string, minutes: number, questions = 0, lessonIds: string[] = []): StudyLog {
  return {
    id: uid('log'),
    profileId,
    date: todayISO(),
    minutes,
    questions,
    lessonIds,
  }
}
