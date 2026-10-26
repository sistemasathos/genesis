export const BANCA_REPORT = {
  updatedAt: '2026-10-26',
  sample: {
    localPdfs: 8,
    cadernosDistintos: 7,
    questoesExtraidas: 280,
    identifiedAgentExams: ['Salgueiro/PE', 'Palmácia/CE', 'Jaguaribe/CE', 'Limoeiro do Norte', 'CRF-RJ', 'Mamanguape/PB', 'Ouricuri/PE'],
    advertisedQuestionsPerExam: 40,
    itaremaQuestions: 50,
    gabaritosNoPdfLocal: true,
    alternativasNosCadernosLocais: 'A–D (280/280)',
    alternativasItarema: 'A–E (edital item 13.7)',
  },
  observations: [
    {
      claim:
        'Os cadernos locais de Agente Administrativo da IDIB examinados anunciam, na capa, 40 questões de múltipla escolha e tempo de 3h ou 4h, conforme o certame. O concurso de Itarema, pelo edital, terá 50 questões e 4 horas — formato diferente, ainda que a banca seja a mesma.',
      evidence: 'Capas de prova1/2, prova3, prova6 e prova8; Edital Itarema itens 13.4 e 13.5.',
      n: '8 PDFs locais + 1 edital',
    },
    {
      claim:
        'Há blocos longos de interpretação de texto em Língua Portuguesa, com várias questões sobre o mesmo texto, incluindo vocabulário, inferência e reescritura.',
      evidence: 'Caderno de Palmácia (prova3) abre com texto extenso seguido de item 1 de interpretação; Limoeiro do Norte (prova8) também inicia por TEXTO I.',
      n: 'Ao menos 2 cadernos de Agente Administrativo com essa abertura',
    },
    {
      claim:
        'Os 7 cadernos extraídos usam quatro alternativas (A–D) em 280/280 questões. Itarema, pelo item 13.7, terá cinco alternativas (A–E). Treinar só no formato antigo deixa de exercitar a quinta opção.',
      evidence: 'docs/extracoes/questoes-extraidas.json; Edital Itarema 13.7.',
      n: '280 questões extraídas + edital',
    },
    {
      claim:
        'Itens com afirmativas I/II/III e combinação de respostas apareceram em 39 das 280 questões. Comandos do tipo EXCETO/incorreta/NÃO, em 24. Lei 8.666/93 ainda aparece em 13 itens antigos — não está no programa de Itarema e a lei foi revogada pela 14.133/2021.',
      evidence: 'Contagem sobre as 280 questões extraídas (relatório em docs/extracoes/relatorio-provas.md).',
      n: '280 questões',
    },
    {
      claim:
        'As capas instruem que dupla marcação, rasura ou questão em branco não são computadas — regra semelhante à de Itarema (item 13.9).',
      evidence: 'Instruções de capa em prova3, prova6 e prova8; Edital Itarema 13.9.',
      n: '3+ cadernos + edital',
    },
    {
      claim:
        'Não há, neste acervo, gabarito oficial junto aos PDFs. Portanto não se calcula distribuição de letras do gabarito nem se afirma letra mais frequente.',
      evidence: 'Extração textual dos 8 PDFs sem seção de gabarito utilizável.',
      n: '8 PDFs',
    },
    {
      claim:
        'Parte do conteúdo de provas anteriores é específica do órgão (farmácia no CRF-RJ, legislação local). Esses itens não devem ser tratados como programa de Itarema.',
      evidence: 'prova7 (CRF-RJ) identificada na capa como Conselho Regional de Farmácia.',
      n: '1 caderno claramente específico',
    },
  ],
  limitations: [
    'Amostra pequena e heterogênea (órgãos e anos distintos).',
    'Sem gabaritos locais, não há estatística de acerto por tema nem de letras.',
    'O programa de Itarema (50 questões; 14/6/6/24) não coincide com os cadernos de 40 questões.',
    'Hipóteses de “padrão da banca” nesta plataforma estão marcadas como hipótese, não como regra.',
  ],
}
