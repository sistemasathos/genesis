import { AppDatabase } from './db'
import { parseBackup } from './backup'

beforeEach(() => {
  localStorage.clear()
})

test('cria perfil pelo nome e recupera o mesmo identificador', async () => {
  const db = new AppDatabase()
  await db.whenReady()
  const a = await db.upsertProfile('Sistemas')
  const b = await db.upsertProfile('sistemas')
  expect(a.id).toBe(b.id)
})

test('persiste tentativa e reaparece no snapshot', async () => {
  const db = new AppDatabase()
  const profile = await db.upsertProfile('Ana')
  await db.addAttempt({
    id: 'att1',
    profileId: profile.id,
    questionId: 'q1',
    choiceId: 'A',
    correct: true,
    elapsedMs: 10,
    createdAt: new Date().toISOString(),
    markedForReview: false,
  })
  const attempts = await db.getAttempts(profile.id)
  expect(attempts).toHaveLength(1)
  const parsed = parseBackup(db.exportJson())
  expect(parsed.ok).toBe(true)
})
