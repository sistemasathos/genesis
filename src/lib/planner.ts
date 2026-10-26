import { obligatorySyllabus } from '../data/syllabus'
import type { DisciplineId, LessonProgress, QuestionAttempt, ReviewItem, UserSettings } from '../models/types'
import { addDays, daysUntil, todayISO } from './id'
import { CONTEST } from '../data/contest'

export interface PlannedActivity {
  date: string
  kind: 'estudo' | 'revisao' | 'simulado' | 'questoes'
  disciplineId?: DisciplineId
  syllabusId?: string
  title: string
  minutes: number
  reason: string
  priority: number
}

export function buildPlan(params: {
  settings: UserSettings
  progress: LessonProgress[]
  reviews: ReviewItem[]
  attempts: QuestionAttempt[]
  fromDate?: string
}): PlannedActivity[] {
  const today = params.fromDate ?? todayISO()
  const days = Math.max(1, daysUntil(params.settings.examDate, today))
  const availableWeekdays = new Set(params.settings.weekdays)
  const remaining = obligatorySyllabus().filter((item) => {
    const lesson = params.progress.find((row) => row.lessonId === item.lessonId)
    return !lesson || lesson.status === 'nao_iniciada' || lesson.status === 'em_estudo'
  })
  const weight: Record<DisciplineId, number> = {
    portugues: CONTEST.blueprint.distribution.portugues.points,
    rlm: CONTEST.blueprint.distribution.rlm.points,
    informatica: CONTEST.blueprint.distribution.informatica.points,
    especificos: CONTEST.blueprint.distribution.especificos.points,
    estrategias: 8,
  }

  const dates: string[] = []
  let cursor = today
  while (dates.length < Math.min(days, 60)) {
    const date = new Date(`${cursor}T00:00:00`)
    if (availableWeekdays.has(date.getDay())) dates.push(cursor)
    cursor = addDays(cursor, 1)
    if (cursor > params.settings.examDate) break
  }

  const activities: PlannedActivity[] = []
  let remainingIndex = 0
  for (const [index, date] of dates.entries()) {
    const minutes = params.settings.minutesPerDay
    const reviewMinutes = Math.round(minutes * 0.25)
    const practiceMinutes = Math.round(minutes * 0.35)
    const studyMinutes = minutes - reviewMinutes - practiceMinutes
    const overdue = params.reviews.filter((item) => item.dueAt <= date).length

    activities.push({
      date,
      kind: 'revisao',
      title: overdue ? `Revisões (${overdue} itens na fila)` : 'Revisão espaçada do dia',
      minutes: reviewMinutes,
      reason: overdue ? 'Há revisões atrasadas; elas entram antes de conteúdo novo.' : 'Manutenção da retenção.',
      priority: overdue ? 3 : 2,
    })

    const item = remaining[remainingIndex]
    if (item) {
      activities.push({
        date,
        kind: 'estudo',
        disciplineId: item.disciplineId,
        syllabusId: item.id,
        title: `Estudar: ${item.title}`,
        minutes: studyMinutes,
        reason: `Item obrigatório do edital ainda sem domínio, disciplina com peso ${weight[item.disciplineId]} pontos.`,
        priority: 3,
      })
      remainingIndex += 1
    } else {
      activities.push({
        date,
        kind: 'questoes',
        title: 'Prática de cobertura e erros',
        minutes: studyMinutes,
        reason: 'Conteúdo obrigatório já distribuído; reforço de prática.',
        priority: 2,
      })
    }

    const simuladoDay = (index + 1) % 7 === 0 || daysUntil(params.settings.examDate, date) <= 7
    activities.push({
      date,
      kind: simuladoDay ? 'simulado' : 'questoes',
      title: simuladoDay ? 'Simulado ou bloco longo de questões' : `Meta de ${params.settings.questionGoal} questões`,
      minutes: practiceMinutes,
      reason: simuladoDay
        ? 'Reservar blocos para prova completa, especialmente na reta final.'
        : 'Treino objetivo com correção comentada.',
      priority: 2,
    })
  }

  if (days <= 21) {
    for (const activity of activities) {
      if (activity.kind === 'estudo') {
        activity.reason += ' Prazo curto: priorize o essencial, revisão e questões, sem garantir domínio total.'
      }
    }
  }
  return activities
}
