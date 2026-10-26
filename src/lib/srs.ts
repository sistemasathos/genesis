import type { RecallQuality, ReviewItem, UserSettings } from '../models/types'
import { addDays, todayISO, uid } from './id'

export function nextIntervalDays(
  current: ReviewItem | undefined,
  quality: RecallQuality,
  settings: UserSettings['srs'],
  erred = false,
): number {
  if (erred) return settings.errorResetDays
  if (quality === 'nao_lembrei') return settings.errorResetDays
  if (quality === 'parcial') return Math.max(1, Math.round((current?.intervalDays ?? 1) * 0.7))
  if (!current || current.repetitions === 0) return 1
  const growing = settings.growingDays
  const index = Math.min(current.repetitions, growing.length) - 1
  const planned = growing[Math.max(0, index)] ?? growing[growing.length - 1] ?? 7
  return Math.max(1, Math.round(planned * (current.ease || 2.3) / 2.3))
}

export function scheduleReview(params: {
  existing?: ReviewItem
  profileId: string
  targetType: ReviewItem['targetType']
  targetId: string
  quality: RecallQuality
  erred?: boolean
  settings: UserSettings['srs']
  fromDate?: string
}): ReviewItem {
  const from = params.fromDate ?? todayISO()
  const interval = nextIntervalDays(params.existing, params.quality, params.settings, params.erred)
  const easeBase = params.existing?.ease ?? 2.3
  const ease =
    params.quality === 'compreendi'
      ? Math.min(3, easeBase + 0.1)
      : params.quality === 'parcial'
        ? Math.max(1.3, easeBase - 0.15)
        : Math.max(1.3, easeBase - 0.3)
  return {
    id: params.existing?.id ?? uid('rev'),
    profileId: params.profileId,
    targetType: params.targetType,
    targetId: params.targetId,
    dueAt: addDays(from, interval),
    intervalDays: interval,
    ease,
    repetitions: params.erred || params.quality === 'nao_lembrei' ? 0 : (params.existing?.repetitions ?? 0) + 1,
    lastQuality: params.quality,
    lastResult: params.erred ? 'erro' : params.quality === 'compreendi' ? 'acerto' : 'parcial',
    createdAt: params.existing?.createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

export function classifyQueue(items: ReviewItem[], today = todayISO()) {
  const dueToday = items.filter((item) => item.dueAt === today)
  const overdue = items.filter((item) => item.dueAt < today)
  const upcoming = items.filter((item) => item.dueAt > today)
  const highError = items.filter((item) => item.lastResult === 'erro' || item.lastQuality === 'nao_lembrei')
  const fading = items.filter((item) => item.dueAt <= addDays(today, 2) && item.dueAt >= today)
  return { dueToday, overdue, upcoming, highError, fading }
}
