import { parseBackup, serializeBackup } from './backup'

test('exporta e reimporta JSON versionado', () => {
  const json = serializeBackup({
    profiles: [],
    settings: [],
    lessonProgress: [],
    attempts: [],
    reviews: [],
    simulados: [],
    studyLogs: [],
    reports: [],
    importedQuestions: [],
  })
  const parsed = parseBackup(json)
  expect(parsed.ok).toBe(true)
})

test('rejeita arquivo inválido', () => {
  expect(parseBackup('não é json').ok).toBe(false)
  expect(parseBackup('{"version":2}').ok).toBe(false)
})
