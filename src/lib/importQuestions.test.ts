import { parseImportedText } from './importQuestions'

test('importa JSON de questões', () => {
  const result = parseImportedText(
    'q.json',
    JSON.stringify([
      {
        stem: 'Qual o peso da questão?',
        choices: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
          { id: 'E', text: '5' },
        ],
        answerKey: 'B',
        disciplineId: 'especificos',
      },
    ]),
  )
  expect(result.questions).toHaveLength(1)
  expect(result.questions[0].answerKey).toBe('B')
})

test('arquivo inválido não quebra', () => {
  const result = parseImportedText('x.json', '{')
  expect(result.questions).toHaveLength(0)
  expect(result.warnings.length).toBeGreaterThan(0)
})

test('JSON de extração local entra sem gabarito e sem validação', () => {
  const result = parseImportedText(
    'questoes-extraidas.json',
    JSON.stringify({
      exams: [
        {
          id: 'prova1',
          organ: 'Salgueiro/PE',
          questions: [
            {
              examQuestionNumber: 1,
              discipline: 'portugues',
              stem: 'Enunciado extraído.',
              choices: [
                { id: 'A', text: 'uma' },
                { id: 'B', text: 'duas' },
                { id: 'C', text: 'três' },
                { id: 'D', text: 'quatro' },
              ],
              answerKey: null,
            },
          ],
        },
      ],
    }),
  )
  expect(result.questions).toHaveLength(1)
  expect(result.questions[0].answerKey).toBeNull()
  expect(result.questions[0].validationStatus).toBe('extracted_pending_key')
  expect(result.questions[0].origin).toBe('prova_anterior')
  expect(result.warnings.some((item) => /gabarito/i.test(item))).toBe(true)
})
