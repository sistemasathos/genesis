import { CONTEST, DEFAULT_EXAM_DATE } from '../data/contest'
import type { SelectorWeights, UserSettings } from '../models/types'

export const DEFAULT_SELECTOR_WEIGHTS: SelectorWeights = {
  unseen: 12,
  unstudied: 10,
  errorRate: 14,
  markedReview: 8,
  lowMastery: 12,
  overdueReview: 14,
  previousError: 10,
  timeSinceReview: 6,
  difficultyFit: 5,
  examProximity: 6,
  documentedFrequency: 4,
  coverageBalance: 8,
}

export function defaultSettings(profileId: string): UserSettings {
  return {
    profileId,
    examDate: DEFAULT_EXAM_DATE,
    minutesPerDay: 90,
    weekdays: [1, 2, 3, 4, 5, 6],
    preferredHours: '19:00-21:00',
    studyGoalMinutes: 90,
    questionGoal: 25,
    defaultSimuladoMinutes: CONTEST.blueprint.durationMinutes,
    questionsPerSession: 10,
    preferredDifficulty: 'mista',
    srs: {
      firstReviewHours: 4,
      dayAfterHours: 24,
      growingDays: [3, 7, 15, 30],
      errorResetDays: 1,
      lowConfidenceDays: 2,
    },
    showExplanationsDuringPractice: true,
    showTimer: true,
    fontScale: 1,
    highContrast: false,
    reducedMotion: true,
    theme: 'claro',
    selectorWeights: DEFAULT_SELECTOR_WEIGHTS,
  }
}
