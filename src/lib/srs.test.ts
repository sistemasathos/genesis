import { classifyQueue, nextIntervalDays, scheduleReview } from './srs'
import { defaultSettings } from './defaults'

const srs = defaultSettings('p').srs

test('erro volta o intervalo para o reset configurado', () => {
  expect(nextIntervalDays(undefined, 'compreendi', srs, true)).toBe(srs.errorResetDays)
})

test('acerto inicial agenda para o dia seguinte', () => {
  const item = scheduleReview({
    profileId: 'p',
    targetType: 'lesson',
    targetId: 'x',
    quality: 'compreendi',
    settings: srs,
    fromDate: '2026-10-26',
  })
  expect(item.dueAt).toBe('2026-10-27')
  expect(item.repetitions).toBe(1)
})

test('filas separam hoje, atraso e erro', () => {
  const queues = classifyQueue(
    [
      { id: '1', profileId: 'p', targetType: 'lesson', targetId: 'a', dueAt: '2026-10-26', intervalDays: 1, ease: 2, repetitions: 1, createdAt: '', updatedAt: '' },
      { id: '2', profileId: 'p', targetType: 'lesson', targetId: 'b', dueAt: '2026-10-20', intervalDays: 1, ease: 2, repetitions: 1, lastResult: 'erro', createdAt: '', updatedAt: '' },
    ],
    '2026-10-26',
  )
  expect(queues.dueToday).toHaveLength(1)
  expect(queues.overdue).toHaveLength(1)
  expect(queues.highError).toHaveLength(1)
})
