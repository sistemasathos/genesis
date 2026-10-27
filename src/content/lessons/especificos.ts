import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'
import { especificosGestaoLessons } from './especificosGestao'
import { especificosOutrosLessons } from './especificosOutros'

const peso = 'Conhecimentos específicos têm 24 questões (48 pontos) — quase metade da prova — e corte de 50% na disciplina. Sem essa área não há classificação, mesmo com bom Português.'

function esp(partial: Omit<Parameters<typeof lesson>[0], 'disciplineId' | 'complementary'>): Lesson {
  return lesson({ ...partial, disciplineId: 'especificos', complementary: false, sourceIds: partial.sourceIds ?? ['src-edital', 'src-didatico'] })
}

export const especificosLessons: Lesson[] = [
  esp({
    id: 'esp-atos', topicId: 'esp-atos', chapterId: 'esp-atos',
    title: 'Atos administrativos',
    objective: 'Explicar o conceito de ato administrativo, aplicar COIFI e PATI, distinguir vinculação e discricionariedade, separar motivo de motivação e escolher, em caso concreto, anulação, revogação, convalidação ou outra forma de extinção.',
    importance: peso,
    estimatedMinutes: 35,
    prerequisites: [],
    sourceIds: ['src-edital', 'src-cf88', 'src-lei9784', 'src-didatico'],
    essencial: blocks(
      'Ato administrativo é a declaração de vontade da Administração Pública, no exercício de função administrativa, que produz efeitos jurídicos imediatos. Serve para criar, modificar, extinguir ou declarar direitos e deveres. O carimbo do protocolo, a lista de presença e o recado telefônico registram fatos; não substituem o despacho que deferiu, indeferiu ou encaminhou o pedido.',
      'No expediente municipal, o agente raramente assina o ato final de alvará ou de nomeação. Ainda assim precisa reconhecer o que está à sua frente: se o papel é o próprio ato, um ato de expediente, um documento enunciativo (certidão, atestado) ou só o comprovante de tramitação.',
      'Os princípios do art. 37 da CF/88 — legalidade, impessoalidade, moralidade, publicidade e eficiência — não são “enfeite”. Legalidade explica por que o discricionário não é livre. Impessoalidade explica por que o ofício fala em nome do órgão. Publicidade explica por que, em regra, o ato precisa ser conhecido para produzir efeitos externos. O edital de Agente Administrativo de Itarema lista atos no programa específico; os princípios entram como contexto necessário, não como disciplina autônoma nominada.',
    ),
    completo: [
      named('Conceito e o que o ato não é', 'Doutrina clássica de prova trata o ato administrativo como espécie do gênero ato jurídico, praticado pela Administração ou por quem lhe faça as vezes, sob regime de direito público. Não se confunde com: (1) fato administrativo, que é acontecimento da natureza ou da atividade material (a chuva que destrói o arquivo; a execução da obra); (2) contrato administrativo, que exige acordo de vontades; (3) ato político, de natureza governamental típica dos chefes de Poder, fora do cotidiano do guichê. Também não é “qualquer papel timbrado”. Um rascunho interno sem emissão e sem efeito jurídico não é ato administrativo, ainda que alguém o chame de ato no corredor.'),
      named('Elementos ou requisitos (COIFI)', 'Mnemônico didático, não dispositivo legal: Competência, Objeto, Forma, Motivo e Finalidade. Competência é o poder legalmente atribuído ao órgão ou agente (território, matéria, grau, tempo). Delegação e avocação existem nos limites da lei; competência em regra é irrenunciável e intransferível por acordo informal. Objeto é o conteúdo do ato — o que ele decide — e precisa ser lícito, possível, determinado ou determinável. Forma é o modo de exteriorização (escrito, em regra; oral só quando a norma admite). Motivo é o pressuposto de fato e de direito que autoriza o ato. Finalidade é o resultado de interesse público previsto na lei, não o capricho do agente. Vício em requisito essencial tende à invalidade; a gravidade do vício (nulidade ou anulabilidade) depende da doutrina adotada e da possibilidade de convalidação.'),
      named('Motivo × motivação', 'Motivo existe mesmo que ninguém o escreva: é o fato e a regra que justificam o ato (o servidor faltou 30 dias; a lei prevê demissão nessas condições). Motivação é a exposição desses pressupostos no próprio ato ou em processo apenso. Discricionário também se motiva, porque o controle de legalidade precisa saber qual fato foi considerado. Motivação genérica (“no interesse do serviço”) costuma ser insuficiente quando a lei exige fundamentação. Silêncio do ato sobre o motivo não apaga o motivo: se o fato não existiu, o ato padece de vício (teoria dos motivos determinantes, em formulação didática de prova).'),
      named('Atributos (PATI)', 'Presunção de legitimidade/veracidade: o ato se presume conforme o direito e verdadeiro nos fatos que afirma, até prova em contrário; por isso produz efeitos desde logo, sem esperar o cidadão “autorizar”. Autoexecutoriedade: a Administração pode executar o ato pelos próprios meios quando o ordenamento autoriza — multa de trânsito com remoção, interdição sanitária, demolição em risco iminente, quando houver base normativa. Não é atributo de todo ato: cobrar dívida em dinheiro, em regra, exige processo de execução; o agente não “retira o salário na boca do caixa” por conta própria. Tipicidade: o ato deve corresponder a uma figura prevista no ordenamento (não se inventa sanção sem previsão). Imperatividade: o ato impõe, faculta ou veda condutas, independentemente da concordância do administrado. Nem todo ato é imperativo no mesmo grau: a certidão declara; a licença reconhece um direito; a multa manda pagar.'),
      named('Vinculação, discricionariedade e mérito', 'Ato vinculado: a lei predetermina o conteúdo quando os requisitos estão preenchidos — a licença para atividade que a norma descreve como direito, a certidão de fato constante do arquivo. Ato discricionário: há margem de conveniência e oportunidade (o mérito) dentro da lei — escolher o horário de um evento interno, autorizar uso precário de bem público, decidir entre duas soluções igualmente lícitas. Discricionário não é arbitrário: competência, forma, finalidade pública e motivo real continuam vinculados. O Judiciário, na formulação clássica de prova, não substitui o mérito; controla legalidade, incompetência, desvio de finalidade, inexistência do motivo e, em alguns desenhos, proporcionalidade. “A chefia mandou” não convalida ato ilegal.'),
      named('Classificações úteis em prova', 'Quanto aos destinatários: gerais (regulamento interno de horário) ou individuais (portaria de nomeação). Quanto ao regramento: vinculados ou discricionários. Quanto à formação da vontade: simples (um órgão), complexo (duas manifestações se fundem num só ato) ou composto (um ato depende de outro, acessório). Quanto aos efeitos: constitutivos (criam situação nova) ou declaratórios (reconhecem o que já existia). Espécies didáticas de Hely Lopes Meirelles, ainda cobradas em nível médio: normativos, ordinatórios (circulares, portarias internas, despachos de expediente), negociais (licença, autorização, permissão, admissão), enunciativos (certidão, atestado, parecer, apostila) e punitivos. Licença, em regra, é vinculada; autorização é discricionária e precária. Parecer opinativo não decide; o despacho que o acolhe é que pratica o ato.'),
      named('Anulação, revogação e convalidação', 'Anulação ataca ato ilegal ou ilegítimo. Pode ser feita pela própria Administração (autotutela) ou pelo Judiciário. Efeitos, em regra, ex tunc: desfaz desde a origem, porque o vício nasceu com o ato. Direitos de terceiros de boa-fé e situações consolidadas exigem cuidado; a regra “volta tudo” não é absoluta em todos os casos. Revogação ataca ato legal e eficaz que se tornou inconveniente ou inoportuno. Só a Administração revoga (o Judiciário não revoga por mérito). Efeitos ex nunc: daí para frente. Respeita direitos adquiridos — lógica da Súmula 473 do STF, referência clássica de prova. Não se revoga ato ilegal: ilegal se anula. Não se revoga ato que já exauriu efeitos nem o vinculado cujo direito já se incorporou, na formulação usual. Convalidação (correção) cabe em vícios sanáveis — incompetência relativa, forma não essencial — quando não haja lesão ao interesse público nem a terceiros. Vício de finalidade ou de motivo inexistente em regra não se convalida com “jeitinho”.'),
      named('Outras formas de extinção e controle', 'Além de anular e revogar: cumprimento (o ato atinge o fim), caducidade (norma nova impede a situação), cassação (o beneficiário descumpre condição), contraprestação/contraposição (ato inverso), renúncia do beneficiário quando admitida. Controle interno: a chefia, a Controladoria, o protocolo que devolve peça incompleta. Controle judicial: legalidade, não conveniência. Controle legislativo existe no desenho constitucional, mas o programa deste cargo não pede processo legislativo. Lei 9.784/1999 (processo administrativo federal) NÃO é citada pelo número no Anexo IV deste cargo; serve só de referência didática — motivação (art. 50), anulação e revogação (art. 53), decadência de cinco anos para anular ato favorável de boa-fé (art. 54). Município pode ter lei própria; não se afirma que Itarema copie o rito federal. Estatuto municipal dos servidores (Lei 210/2001) aparece em outros cargos deste edital, não neste Anexo IV.'),
    ],
    aprofundamento: blocks(
      'A Lei 9.784/1999 regula o processo administrativo federal. O edital de Agente Administrativo de Itarema NÃO a cita pelo número neste cargo. Use-a só como referência didática (motivação no art. 50; anulação e revogação no art. 53; decadência de cinco anos para anular ato favorável de boa-fé no art. 54). Municípios podem ter lei própria de processo administrativo; não se afirma que o rito de Itarema seja idêntico ao federal. A Lei Municipal nº 210/2001 (Estatuto dos Servidores) aparece no programa de outros cargos deste edital (ex.: Guarda Municipal), não no Anexo IV do Agente Administrativo.',
      'Não estude Lei 8.666/1993 como vigente: foi revogada pela Lei 14.133/2021. Licitações não são linha autônoma deste cargo no Anexo IV, ainda que a atribuição do cargo mencione auxiliar em compras. Nos cadernos locais da IDIB, 13/280 itens ainda citam 8.666 — distrator histórico, não ementa de Itarema.',
      'Quando o enunciado misturar protocolo e alvará, pergunte: o papel cria o direito ou apenas prova que o pedido entrou? Quando misturar licença e autorização, pergunte: a lei deixa margem? Quando misturar anulação e revogação, pergunte: o vício é de legalidade ou de mérito? Se o fato narrado for ilegalidade, revogar é o distrator clássico.',
    ),
    revisaoRapida: blocks('COIFI = requisitos (competência, objeto, forma, motivo, finalidade). PATI = atributos (presunção, autoexecutoriedade condicional, tipicidade, imperatividade). Motivo é o fato+direito; motivação é a exposição. Vinculado: a lei já escolheu. Discricionário: há mérito, dentro da lei. Anulação = ilegalidade, em regra ex tunc, Administração ou Judiciário. Revogação = mérito, ex nunc, só a Administração, respeita direito adquirido. Convalidação: vício sanável. Protocolo não é o ato de deferir.'),
    definitions: [
      { term: 'Mérito administrativo', definition: 'Juízo de conveniência e oportunidade no ato discricionário, sempre dentro da lei.' },
      { term: 'Desvio de finalidade', definition: 'Uso do ato para fim diverso do interesse público previsto na norma.' },
      { term: 'Autotutela', definition: 'Poder-dever da Administração de anular o ilegal e revogar o inconveniente, na lógica da Súmula 473/STF.' },
      { term: 'Teoria dos motivos determinantes', definition: 'Formulação didática: os motivos declarados se integram ao ato; se inexistentes ou falsos, o ato padece.' },
    ],
    comparisons: [
      {
        title: 'Anulação × revogação',
        leftLabel: 'Anulação',
        rightLabel: 'Revogação',
        rows: [
          { label: 'Fundamento', left: 'Ilegalidade / ilegitimidade', right: 'Mérito (conveniência e oportunidade)' },
          { label: 'Quem pratica', left: 'Administração ou Judiciário', right: 'Só a Administração' },
          { label: 'Efeitos', left: 'Em regra, ex tunc', right: 'Ex nunc' },
          { label: 'Direitos', left: 'Ato inválido; boa-fé de terceiros pede cuidado', right: 'Respeita direitos adquiridos' },
          { label: 'Ato ilegal', left: 'Caminho próprio', right: 'Não se revoga o ilegal: anula-se' },
        ],
      },
      {
        title: 'Licença × autorização (negociais)',
        leftLabel: 'Licença',
        rightLabel: 'Autorização',
        rows: [
          { label: 'Regramento', left: 'Em regra, vinculada', right: 'Discricionária' },
          { label: 'Estabilidade', left: 'Direito subjetivo se os requisitos legais estão presentes', right: 'Precária, em regra' },
          { label: 'Exemplo didático', left: 'Licença para atividade cujo preenchimento a lei descreve como direito', right: 'Uso especial de bem público, quando a lei deixa margem' },
        ],
      },
      {
        title: 'Requisitos × atributos',
        leftLabel: 'COIFI (requisitos)',
        rightLabel: 'PATI (atributos)',
        rows: [
          { label: 'Pergunta', left: 'O ato nasceu válido?', right: 'Que poderes o ato irradia?' },
          { label: 'Peças', left: 'Competência, objeto, forma, motivo, finalidade', right: 'Presunção, autoexecutoriedade, tipicidade, imperatividade' },
          { label: 'Vício', left: 'Tende à invalidade', right: 'Atributo ausente (ex.: sem autoexecutoriedade) não transforma o ato em “não ato”' },
        ],
      },
    ],
    examples: [
      'Portaria de nomeação: ato individual, constitutivo, em regra vinculado aos requisitos do concurso.',
      'Despacho que indefere férias: ordinatório/decisório de expediente; precisa de competência e motivo.',
      'Multa de trânsito municipal, quando houver competência: punitivo; autoexecutoriedade na medida da lei (notificação, pontuação), não “apreensão inventada”.',
      'Certidão de tempo de protocolo: enunciativa; declara o que consta, não cria o direito pedido.',
    ],
    publicAdminExamples: [
      'Protocolar requerimento de alvará não é o alvará. O número e o carimbo provam a entrada. O deferimento é outro ato, da autoridade competente.',
      'Circular da Secretaria de Administração alterando o horário do protocolo é ato geral ordinatório. Não precisa da assinatura de cada munícipe.',
      'Parecer jurídico desfavorável não indefere sozinho. Quem indefere é o despacho da autoridade que acolhe o parecer.',
    ],
    procedures: [
      'Identifique o autor e a competência (órgão, matéria, território).',
      'Nomeie o que o papel faz: decide, informa, certifica ou só tramita.',
      'Separe requisitos (COIFI) de atributos (PATI).',
      'Pergunte se a lei deixa margem: vinculado ou discricionário.',
      'Confira se há motivo real e se a motivação o expõe.',
      'Se o problema for ilegalidade, pense em anulação (e eventual convalidação). Se for conveniência de ato legal, revogação.',
      'Não trate protocolo como decisão nem 8.666 como vigente.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — protocolo não é alvará',
        setup: 'Munícipe protocola, na sexta-feira, pedido de alvará de funcionamento. Recebe carimbo e número. Na segunda, cobra o alvará no guichê, alegando que o protocolo já “vale como autorização”.',
        steps: [
          'Tarefa: qual é a natureza jurídica do carimbo?',
          'Conhecimento: protocolo registra tramitação; autorização/licença é ato negocial da autoridade competente.',
          'Dados: há pedido, não há despacho de deferimento.',
          'O dia da semana é enredo. Não altera COIFI nem PATI.',
          'Conclusão: o servidor informa que o comprovante prova a entrada e encaminha ao setor competente. Não declara o alvará como concedido.',
        ],
        result: 'Protocolo = ato de expediente/registro. Alvará = ato negocial posterior. Confundi-los é o distrator clássico de balcão.',
      },
      {
        title: 'Exemplo resolvido 2 — anular ou revogar?',
        setup: 'Portaria concedeu uso de sala a associação sem a competência do signatário (chefe de seção assinou no lugar do secretário, contra o regimento). Semanas depois, a nova gestão considera o uso inconveniente e “revoga”.',
        steps: [
          'Há vício de competência: requisito COIFI. O ato nasceu ilegal.',
          'Revogação pressupõe ato legal. Ilegal se anula (autotutela).',
          'Efeitos da anulação: em regra ex tunc, com atenção a terceiros de boa-fé.',
          'Se o ato tivesse competência e só tivesse se tornado inconveniente, aí sim revogação, ex nunc.',
        ],
        result: 'Neste caso, o caminho técnico é anulação por incompetência, não revogação por mérito.',
      },
      {
        title: 'Exercício guiado — autoexecutoriedade',
        setup: 'Alternativa afirma: “Todo ato administrativo é autoexecutório, pois PATI se aplica por inteiro a qualquer espécie.”',
        steps: [
          'PATI existe como mnemônico de atributos.',
          'Autoexecutoriedade depende de autorização normativa.',
              'Cobrança de dívida pecuniária, em regra, exige execução. Certidão não se “executa”.',
          'O “todo” e o “qualquer” estouram o limite. Risque o excesso.',
        ],
        result: 'A alternativa é parcialmente verdadeira e, por isso, falsa como gabarito de item de única resposta.',
      },
    ],
    examInsights: [
      {
        claim: 'Nos 7 cadernos locais de Agente Administrativo, os blocos 21–40 concentram específicos com situações de expediente (protocolo, documento, reunião). Isso é tendência da amostra, não garantia de que Itarema repetirá o recorte 21–40, porque Itarema tem 24 itens de específicos em prova de 50.',
        evidence: 'docs/extracoes/relatorio-provas.md; distribuição dos cadernos de 40 itens.',
        level: 'tendencia',
      },
      {
        claim: 'Lei 8.666/93 aparece em 13/280 itens extraídos e não deve ser estudada como vigente nem como linha do Anexo IV deste cargo.',
        evidence: 'Contagem no JSON extraído; Lei 14.133/2021; Anexo IV do edital de Itarema.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'Liste COIFI e PATI de memória e dê um exemplo municipal de cada peça.',
      'Em uma frase, diferencie motivo e motivação.',
      'Por que não se revoga ato ilegal?',
      'Quando a autoexecutoriedade não existe?',
      'O protocolo do alvará já é o alvará? Por quê?',
    ],
    recallAnswers: [
      'COIFI: competência, objeto, forma, motivo e finalidade (o ato nasceu válido?). PATI: presunção, autoexecutoriedade, tipicidade e imperatividade (que poderes irradia?). Ex.: portaria de nomeação (COIFI) e multa com execução prevista em lei (PATI).',
      'Motivo é o fato e a regra que justificam o ato; motivação é a exposição escrita desses pressupostos.',
      'Ato ilegal não se revoga: anula-se, porque o vício nasceu com o ato. Revogação é só para ato legal que se tornou inconveniente.',
      'Quando a lei não autoriza a Administração a executar pelos próprios meios — por exemplo, cobrar dívida em dinheiro, em regra, exige execução.',
      'Não. O protocolo prova a entrada do pedido. O alvará é outro ato, da autoridade competente, depois do deferimento.',
    ],
    commonErrors: [
      'Dizer que ato discricionário não precisa motivar.',
      'Confundir motivo (pressuposto) com motivação (exposição).',
      'Achar que todo ato é autoexecutório.',
      'Revogar o que deveria ser anulado, e vice-versa.',
      'Tratar parecer como decisão e protocolo como deferimento.',
      'Misturar requisito (COIFI) com atributo (PATI) na mesma lista.',
    ],
    traps: [
      'Anulação com efeito ex nunc apresentada como regra.',
      'Revogação de ato ilegal.',
      '“Sempre” colado a PATI.',
      'Licença descrita como precária e autorização como direito subjetivo.',
      'Lei 8.666 como se vigente.',
    ],
    relatedLessonIds: ['esp-redacao', 'esp-publico', 'est-literal-aplicada'],
    relatedEditalItems: ['ed-esp-01'],
    synthesis: 'Ato válido nasce de COIFI, irradia PATI na medida da lei, distingue-se do mero expediente, e se extingue por anulação (ilegal), revogação (mérito de ato legal) ou outras formas. Protocolo registra; despacho decide.',
    glossary: [
      { term: 'Autoexecutoriedade', definition: 'Possibilidade de a Administração executar o ato pelos próprios meios, quando o ordenamento autoriza.' },
      { term: 'Imperatividade', definition: 'Atributo pelo qual o ato impõe, faculta ou veda condutas independentemente da concordância do administrado.' },
      { term: 'Convalidação', definition: 'Aproveitamento do ato com correção de vício sanável, quando a lei e o interesse público admitem.' },
    ],
    masteryCriteria: [
      'Listar COIFI e PATI sem consultar e explicar a diferença entre as duas listas.',
      'Distinguir anulação e revogação em caso concreto, com efeitos e competência.',
      'Explicar vinculação × discricionariedade com exemplo municipal, sem chamar o discricionário de “livre”.',
      'Reconhecer que protocolo, parecer e certidão não substituem o ato de deferir.',
    ],
    questionIds: ['esp-atos-01', 'esp-atos-02', 'esp-atos-03', 'esp-atos-04', 'esp-atos-05', 'esp-atos-06', 'esp-atos-07', 'esp-atos-08'],
  }),
  ...especificosOutrosLessons,
  ...especificosGestaoLessons,
]
