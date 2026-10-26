import type { DisciplineId, EvidenceLevel } from '../models/types'

export interface QuestionStructure {
  id: string
  name: string
  description: string
  disciplines: DisciplineId[]
  evidence: string
  level: EvidenceLevel
  n: string
  howToSpot: string
  howToSolve: string
  likelyErrors: string[]
  lessonId: string
}

/** Padrões observados nos 280 itens extraídos (7 cadernos, A–D, sem gabarito). */
export const QUESTION_STRUCTURES: QuestionStructure[] = [
  {
    id: 'qs-texto-base',
    name: 'Texto-base + itens de interpretação',
    description: 'Abre com texto (às vezes rotulado TEXTO I/II/III) e cobra vocabulário, inferência, tipologia ou reescritura.',
    disciplines: ['portugues'],
    evidence: '18/280 stems citam TEXTO I/II/III; prova1 tem 9; prova3 abre com texto longo mesmo sem o rótulo.',
    level: 'observado',
    n: '18/280 com rótulo + cadernos com texto sem rótulo',
    howToSpot: 'Há um texto antes do item, ou o stem remete a “TEXTO I”.',
    howToSolve: 'Leia o comando, volte ao trecho que sustenta a resposta, ignore o que o texto não diz.',
    likelyErrors: ['Marcar opinião própria no lugar da tese do texto', 'Confundir tipologia predominante com um trecho isolado'],
    lessonId: 'est-estruturas',
  },
  {
    id: 'qs-romanos',
    name: 'Afirmativas I/II/III e combinação',
    description: 'O enunciado traz romanos; as alternativas escolhem “apenas I”, “I e II”, “nenhuma”, etc.',
    disciplines: ['especificos', 'portugues', 'rlm', 'informatica'],
    evidence: '39/280 itens usam I/II/III. 15 usam “Assinale se apenas a afirmativa…”. 12 usam “É correto o que se afirma”.',
    level: 'observado',
    n: '39/280',
    howToSpot: 'Numeração romana no stem e alternativas de combinação.',
    howToSolve: 'Julgue cada romano sozinho. Uma frase com duas ideias, uma falsa, é falsa. Só então monte a combinação.',
    likelyErrors: ['Aceitar o conjunto porque “a I está certa”', 'Não reler um romano depois de eliminar outro'],
    lessonId: 'est-estruturas',
  },
  {
    id: 'qs-exceto',
    name: 'Comando negativo (EXCETO / incorreta / NÃO)',
    description: 'A tarefa é achar o intruso, a falsa ou o que o texto não autoriza.',
    disciplines: ['portugues', 'rlm', 'informatica', 'especificos'],
    evidence: '24/280 itens. Mais frequente em prova8 (8).',
    level: 'observado',
    n: '24/280',
    howToSpot: 'EXCETO, incorreta, NÃO, “está errado”.',
    howToSolve: 'Transforme em “qual é a falsa?”. As verdadeiras são distratores.',
    likelyErrors: ['Marcar a alternativa verdadeira por hábito'],
    lessonId: 'est-comando',
  },
  {
    id: 'qs-definicao-aplicada',
    name: 'Situação de expediente + conceito',
    description: 'Descreve o balcão, o protocolo ou a reunião e pede o instituto, o documento ou a conduta adequada.',
    disciplines: ['especificos', 'informatica'],
    evidence: 'Predomina nos blocos 21–40 dos cadernos de Agente Administrativo (observação qualitativa sobre os 7 cadernos, não uma contagem fechada de “situação prática”).',
    level: 'tendencia',
    n: 'blocos de específicos dos 7 cadernos',
    howToSpot: 'Há um servidor, um cidadão, um documento ou um sistema no stem.',
    howToSolve: 'Isole o fato jurídico/administrativo. Ignore o enredo que não altera a regra.',
    likelyErrors: ['Responder à história e não ao conceito', 'Aplicar norma revogada (ex.: 8.666)'],
    lessonId: 'est-literal-aplicada',
  },
  {
    id: 'qs-latinismo',
    name: 'Vocábulo latino como objeto',
    description: 'O item cobra o sentido de stricto sensu, sine qua non, data venia, caput, etc.',
    disciplines: ['especificos', 'portugues'],
    evidence: '8/280 itens têm o latinismo como objeto (prova3, prova4, prova6).',
    level: 'observado',
    n: '8/280',
    howToSpot: 'Itálico ou expressão latina no stem ou nas alternativas.',
    howToSolve: 'Traduza a expressão antes de olhar o contexto do órgão.',
    likelyErrors: ['Chutar pelo “som jurídico” sem o sentido'],
    lessonId: 'est-estruturas',
  },
  {
    id: 'qs-calculo',
    name: 'Problema numérico com dados no stem',
    description: 'Percentual, regra de três, conjuntos, probabilidade ou unidades; a dificuldade está nos dados e na operação.',
    disciplines: ['rlm'],
    evidence: 'Blocos de RLM dos cadernos (prova1 Q16–20; prova3 Q16–20; prova4 Q17–20). Contagem de estilo, sem gabarito.',
    level: 'tendencia',
    n: 'blocos RLM de 3 cadernos com a disciplina',
    howToSpot: 'Números, unidades ou “qual o valor”.',
    howToSolve: 'Copie os dados, escolha a operação, confira dimensão (km vs km²) e ordem de grandeza.',
    likelyErrors: ['Trocar unidade', 'Usar o número que “aparece mais” no texto'],
    lessonId: 'est-por-disciplina',
  },
]

export const CORPUS_NOTE =
  'Amostra: 7 cadernos distintos extraídos dos PDFs locais (prova2 omitida por duplicar prova1). 280 questões, alternativas A–D, sem gabarito no PDF. Itarema usa 50 questões A–E. Conclusões abaixo não predizem a prova de 06/12/2026.'
