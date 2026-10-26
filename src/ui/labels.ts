import type { DepthLevel, DisciplineId, LessonStatus, MasteryLevel } from '../models/types'

export const DEPTH_LABEL: Record<DepthLevel, { title: string; step: string; hint: string }> = {
  essencial: {
    title: 'Entender',
    step: '1 · Conceito',
    hint: 'O que é o assunto e por que ele aparece no edital.',
  },
  completo: {
    title: 'Completar',
    step: '2 · Aplicar',
    hint: 'Regras, distinções e exemplos suficientes para resolver questões.',
  },
  aprofundamento: {
    title: 'Aprofundar',
    step: '3 · Distinguir',
    hint: 'Exceções, limites e o que a banca costuma misturar.',
  },
  revisaoRapida: {
    title: 'Revisar',
    step: '4 · Recuperar',
    hint: 'Síntese para lembrar depois, sem reler a aula inteira.',
  },
}

export const STATUS_LABEL: Record<LessonStatus, string> = {
  nao_iniciada: 'Não iniciado',
  em_estudo: 'Em estudo',
  estudada: 'Prática pendente',
  revisada: 'Em consolidação',
}

export const MASTERY_LABEL: Record<MasteryLevel, string> = {
  insuficiente: 'Ainda sem evidência',
  em_construcao: 'Em construção',
  parcial: 'Parcial',
  consistente: 'Consistente',
  dominado: 'Domínio demonstrado',
}

export const DISCIPLINE_TONE: Record<DisciplineId, string> = {
  portugues: 'pt',
  rlm: 'rlm',
  informatica: 'inf',
  especificos: 'esp',
  estrategias: 'est',
}

export const ORIGIN_LABEL: Record<string, string> = {
  inedita: 'Inédita da plataforma — não é item oficial do IDIB',
  prova_anterior: 'Extraída de prova anterior',
  adaptada: 'Adaptada (não é o item oficial)',
}

export const ERROR_KIND_LABEL: Record<string, string> = {
  interpretacao: 'Interpretação do enunciado',
  desconhecimento: 'Conceito desconhecido',
  distracao: 'Distração / pressa',
  calculo: 'Erro de cálculo',
  nao_classificado: 'Causa ainda não determinada',
}

export const EVIDENCE_LABEL: Record<string, string> = {
  observado: 'Observado na amostra',
  tendencia: 'Tendência provisória',
  hipotese: 'Hipótese',
  nao_demonstrado: 'Não demonstrado',
}

export const TARGET_TYPE_LABEL: Record<string, string> = {
  lesson: 'Lição',
  question: 'Questão',
  topic: 'Tópico',
}

export const SOURCE_KIND_LABEL: Record<string, string> = {
  edital: 'Edital',
  prova_anterior: 'Prova anterior',
  norma_oficial: 'Norma oficial',
  questao_inedita: 'Questão inédita',
  explicacao_didatica: 'Explicação didática',
  hipotese_banca: 'Hipótese sobre a banca',
  documento_local: 'Documento local',
}
