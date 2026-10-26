import type { Question, QuestionAttempt, SimuladoSession, StudyLog } from '../models/types'
import { todayISO } from './id'

export function median(values: number[]): number {
  if (!values.length) return 0
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid]
}

export function rate(attempts: QuestionAttempt[]): number {
  const scored = attempts.filter((item) => item.correct != null)
  if (!scored.length) return 0
  return scored.filter((item) => item.correct).length / scored.length
}

export function byDiscipline(attempts: QuestionAttempt[], questions: Question[]) {
  const map = new Map<string, QuestionAttempt[]>()
  for (const attempt of attempts) {
    const question = questions.find((item) => item.id === attempt.questionId)
    if (!question) continue
    const list = map.get(question.disciplineId) ?? []
    list.push(attempt)
    map.set(question.disciplineId, list)
  }
  return [...map.entries()].map(([disciplineId, rows]) => ({
    disciplineId,
    attempts: rows.length,
    accuracy: rate(rows),
  }))
}

export function recentVsPrevious(attempts: QuestionAttempt[], days = 7, today = todayISO()) {
  const cutoff = new Date(`${today}T00:00:00`)
  cutoff.setDate(cutoff.getDate() - days)
  const iso = cutoff.toISOString()
  const recent = attempts.filter((item) => item.createdAt >= iso)
  const previous = attempts.filter((item) => item.createdAt < iso)
  return { recent: rate(recent), previous: rate(previous), recentCount: recent.length, previousCount: previous.length }
}

export function originSplit(attempts: QuestionAttempt[], questions: Question[]) {
  const ineditas = attempts.filter((item) => questions.find((q) => q.id === item.questionId)?.origin === 'inedita')
  const oficiais = attempts.filter((item) => questions.find((q) => q.id === item.questionId)?.origin === 'prova_anterior')
  const ids = new Set<string>()
  const first = attempts.filter((item) => {
    if (ids.has(item.questionId)) return false
    ids.add(item.questionId)
    return true
  })
  const repeats = attempts.filter((item, index) => attempts.findIndex((row) => row.questionId === item.questionId) !== index)
  return {
    ineditas: { count: ineditas.length, accuracy: rate(ineditas) },
    oficiais: { count: oficiais.length, accuracy: rate(oficiais) },
    first: { count: first.length, accuracy: rate(first) },
    repeats: { count: repeats.length, accuracy: rate(repeats) },
  }
}

export function errorKinds(attempts: QuestionAttempt[]) {
  const wrong = attempts.filter((item) => item.correct === false)
  const total = wrong.length || 1
  const count = (kind: string) => wrong.filter((item) => (item.errorKind ?? 'nao_classificado') === kind).length
  return {
    interpretacao: count('interpretacao') / total,
    desconhecimento: count('desconhecimento') / total,
    distracao: count('distracao') / total,
    calculo: count('calculo') / total,
    amostra: wrong.length,
  }
}

export function calibration(attempts: QuestionAttempt[]) {
  const highWrong = attempts.filter((item) => item.correct === false && (item.confidence ?? 0) >= 4)
  const lowCorrect = attempts.filter((item) => item.correct === true && (item.confidence ?? 6) <= 2)
  const declared = attempts.filter((item) => item.confidence != null && item.correct != null)
  return {
    highConfidenceWrong: highWrong.length,
    lowConfidenceCorrect: lowCorrect.length,
    sample: declared.length,
    overconfident: declared.length >= 8 && highWrong.length / declared.length >= 0.2,
  }
}

export function studyMinutes(logs: StudyLog[]): number {
  return logs.reduce((sum, item) => sum + item.minutes, 0)
}

export function simuladoTrend(sessions: SimuladoSession[]) {
  return sessions
    .filter((item) => item.finishedAt && item.result)
    .map((item) => ({
      id: item.id,
      date: item.finishedAt!,
      percent: item.result!.rawPercent,
      points: item.result!.officialPoints,
    }))
}
