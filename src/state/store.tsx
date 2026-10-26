import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { db } from '../lib/db'
import { defaultSettings } from '../lib/defaults'
import type {
  LessonProgress,
  Profile,
  Question,
  QuestionAttempt,
  ReviewItem,
  SimuladoSession,
  StudyLog,
  UserSettings,
} from '../models/types'

interface StoreValue {
  ready: boolean
  backend: string
  profiles: Profile[]
  profile: Profile | null
  settings: UserSettings
  progress: LessonProgress[]
  attempts: QuestionAttempt[]
  reviews: ReviewItem[]
  simulados: SimuladoSession[]
  studyLogs: StudyLog[]
  importedQuestions: Question[]
  enter: (username: string) => Promise<void>
  leave: () => void
  reload: () => Promise<void>
}

const StoreContext = createContext<StoreValue | null>(null)
const PROFILE_KEY = 'genesis-active-profile'

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [profile, setProfile] = useState<Profile | null>(null)
  const [settings, setSettings] = useState<UserSettings>(defaultSettings('none'))
  const [progress, setProgress] = useState<LessonProgress[]>([])
  const [attempts, setAttempts] = useState<QuestionAttempt[]>([])
  const [reviews, setReviews] = useState<ReviewItem[]>([])
  const [simulados, setSimulados] = useState<SimuladoSession[]>([])
  const [studyLogs, setStudyLogs] = useState<StudyLog[]>([])
  const [importedQuestions, setImportedQuestions] = useState<Question[]>([])

  async function loadFor(next: Profile | null) {
    const list = await db.listProfiles()
    setProfiles(list)
    if (!next) {
      setProfile(null)
      setReady(true)
      return
    }
    const [s, p, a, r, sim, logs, imported] = await Promise.all([
      db.getSettings(next.id),
      db.getProgress(next.id),
      db.getAttempts(next.id),
      db.getReviews(next.id),
      db.getSimulados(next.id),
      db.getStudyLogs(next.id),
      db.importedQuestions(),
    ])
    setProfile(next)
    setSettings(s)
    setProgress(p)
    setAttempts(a)
    setReviews(r)
    setSimulados(sim)
    setStudyLogs(logs)
    setImportedQuestions(imported)
    setReady(true)
  }

  useEffect(() => {
    void (async () => {
      await db.whenReady()
      const list = await db.listProfiles()
      const saved = localStorage.getItem(PROFILE_KEY)
      const found = list.find((item) => item.id === saved) ?? null
      await loadFor(found)
    })()
  }, [])

  const value = useMemo<StoreValue>(
    () => ({
      ready,
      backend: db.backend,
      profiles,
      profile,
      settings,
      progress,
      attempts,
      reviews,
      simulados,
      studyLogs,
      importedQuestions,
      enter: async (username: string) => {
        const next = await db.upsertProfile(username)
        localStorage.setItem(PROFILE_KEY, next.id)
        await loadFor(next)
      },
      leave: () => {
        localStorage.removeItem(PROFILE_KEY)
        setProfile(null)
      },
      reload: async () => {
        if (profile) await loadFor(profile)
        else await loadFor(null)
      },
    }),
    [ready, profiles, profile, settings, progress, attempts, reviews, simulados, studyLogs, importedQuestions],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): StoreValue {
  const value = useContext(StoreContext)
  if (!value) throw new Error('Store indisponível')
  return value
}
