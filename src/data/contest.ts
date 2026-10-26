import type { ContestInfo } from '../models/types'

/**
 * Dados confirmados no Edital nº 01/2026 da Prefeitura Municipal de Itarema/CE,
 * extraído de docs/fontes/edital.pdf (consulta local em 2026-10-26).
 */
export const CONTEST: ContestInfo = {
  title: 'Concurso Público — Prefeitura Municipal de Itarema/CE',
  organ: 'Prefeitura Municipal de Itarema/CE',
  board: 'Instituto de Desenvolvimento Institucional Brasileiro — IDIB',
  edict: 'Edital nº 01/2026, de 28 de setembro de 2026',
  edictDate: '2026-09-28',
  role: 'Agente Administrativo',
  education: 'Ensino Médio Completo',
  salary: 'R$ 1.621,00 (vencimento base)',
  workload: '40 horas semanais',
  vacanciesImmediate: { total: 2, ampla: 1, pcd: 0, pp: 1 },
  vacanciesReserve: 1,
  examDate: '2026-12-06',
  examShift: 'Nível médio/técnico: 08h00 às 12h00 (horário de Brasília)',
  durationHours: 4,
  validityYears: 2,
  titlesApply: false,
  sourceDocument: 'docs/fontes/edital.pdf',
  notes: [
    'Há 2 vagas imediatas (1 ampla concorrência + 1 PP) e 1 vaga de cadastro de reserva, conforme Anexo I. A observação de “uma vaga imediata” corresponde à vaga de ampla concorrência, não ao total de vagas do cargo.',
    'A prova objetiva é eliminatória e classificatória. Para cargos de nível médio, a Prova de Títulos do item 15 não integra a pontuação (item 1.9 e item 17.1: títulos apenas para nível superior).',
    'Classificação no nível médio exige, no mínimo, 50% dos pontos em cada disciplina da prova objetiva (itens 13.1 e 13.6).',
    'Questões de múltipla escolha com cinco alternativas (A a E) e uma única correta (item 13.7). Peso 2,0 por questão; total 100 pontos (item 13.5).',
    'Não há penalização por erro: questões em branco, com dupla marcação, emenda ou rasura não são computadas (item 13.9).',
    'Duração de 4 horas em 06/12/2026, das 08h às 12h (horário de Brasília) para nível médio/técnico (itens 13.4 e 14.1).',
    'Locais de prova serão divulgados em www.idib.org.br (item 13.2). Esta plataforma não substitui o edital nem o acompanhamento oficial.',
  ],
  blueprint: {
    totalQuestions: 50,
    durationMinutes: 240,
    alternatives: ['A', 'B', 'C', 'D', 'E'],
    weightPerQuestion: 2,
    maxScore: 100,
    passingPerDisciplineRatio: 0.5,
    penaltyWrong: false,
    examDate: '2026-12-06',
    examStart: '08:00',
    examEnd: '12:00',
    timezone: 'America/Sao_Paulo',
    distribution: {
      portugues: { questions: 14, points: 28 },
      rlm: { questions: 6, points: 12 },
      informatica: { questions: 6, points: 12 },
      especificos: { questions: 24, points: 48 },
      estrategias: { questions: 0, points: 0 },
    },
  },
}

export const DISCIPLINE_LABEL: Record<string, string> = {
  portugues: 'Língua Portuguesa',
  rlm: 'Raciocínio Lógico-Matemático',
  informatica: 'Informática',
  especificos: 'Conhecimentos Específicos',
  estrategias: 'Estratégias de prova',
}

export const DEFAULT_EXAM_DATE = CONTEST.examDate
