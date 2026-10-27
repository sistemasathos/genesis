import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'

const peso =
  'Conhecimentos específicos têm 24 questões (48 pontos) — quase metade da prova — e corte de 50% na disciplina. Sem essa área não há classificação, mesmo com bom Português.'

function esp(partial: Omit<Parameters<typeof lesson>[0], 'disciplineId' | 'complementary'>): Lesson {
  return lesson({ ...partial, disciplineId: 'especificos', complementary: false, sourceIds: partial.sourceIds ?? ['src-edital', 'src-didatico'] })
}

export const especificosOutrosLessons: Lesson[] = [
  esp({
    id: 'esp-redacao', topicId: 'esp-redacao', chapterId: 'esp-redacao',
    title: 'Redação oficial',
    objective:
      'Reconhecer o documento certo, redigir com clareza, concisão, formalidade, impessoalidade e padrão culto, aplicar tratamento em 3ª pessoa, latinismos usuais, abreviações, envelope e digitação qualitativa — sem copiar o Manual da Presidência como se o edital o tivesse nomeado.',
    importance: peso,
    estimatedMinutes: 36,
    prerequisites: ['pt-pronomes'],
    sourceIds: ['src-edital', 'src-mrpr', 'src-didatico'],
    essencial: [
      named(
        'O que o edital pede neste capítulo',
        'O Anexo IV do Agente Administrativo lista, em um só bloco: correspondência oficial; digitação qualitativa; abreviações e formas de tratamento; expressões e vocábulos latinos de uso frequente nas comunicações administrativas; documentos e modelos; comunicação escrita e oral; envelope e endereçamentos postais. Não é “escrever bonito”. É produzir ou reconhecer o papel que o órgão expede em nome da Administração, com destinatário identificável e texto que não depende da pessoa do servidor.',
      ),
      named(
        'Princípios didáticos da redação oficial',
        'Clareza: uma ideia por frase, sem metáfora que o destinatário precise decifrar. Concisão: corte o que não altera o pedido. Formalidade e uso do padrão culto: o ofício não admite gíria de corredor nem “vc”. Impessoalidade: o texto fala em nome do órgão (“solicita-se”, “informa-se”), não “eu acho”. Padronização: número, data, assunto, fecho e assinatura no lugar esperado. Uniformidade não é copiar o modelo de outro município como se fosse lei de Itarema.',
      ),
      named(
        'O Manual da Presidência é referência, não ementa',
        'O Manual de Redação da Presidência da República (MRPR) organiza ofício, aviso, exposição de motivos, fechos e tratamentos. O edital de Itarema NÃO o cita pelo nome. Use-o como mapa didático. Se a questão pedir o fecho ou o vocativo, aplique a convenção clássica de manual e, internamente, saiba que é convenção — não um decreto municipal que o Anexo IV tenha transcrito.',
      ),
    ],
    completo: [
      named(
        'Documentos e o que cada um faz',
        'Ofício: comunicação externa entre órgãos ou entre órgão e particular, em papel timbrado, com número, local, data, destinatário, assunto, texto, fecho e assinatura. Memorando: em muitos manuais, comunicação interna e ágil; não é o instrumento clássico para falar com outro ente federativo. Aviso: comunicação entre autoridades de mesmo nível, no uso federal didático. Exposição de motivos: proposta de ato a autoridade superior, com justificativa. Mensagem: comunicação de Chefe de Poder a órgão legislativo. Circular: mesmo teor a vários destinatários. Despacho: decisão ou encaminhamento no processo. Ata: registro de reunião (aula de técnicas secretariais). Certidão: declara o que consta do arquivo. Declaração: afirma fato sob responsabilidade do emitente. Apostila: averbação em ato já publicado. O distrator clássico troca ofício por memorando quando o destinatário é a Câmara ou outro órgão externo.',
      ),
      named(
        'Partes do documento — o modelo que a prova cobra',
        'Cabeçalho/timbre do órgão. Número e, quando houver, referência ao processo. Local e data por extenso (“Itarema, 28 de outubro de 2026”). Destinatário: vocativo + cargo + órgão. Assunto em uma linha (“Encaminhamento de cópias de atos”). Texto: introdução (por que se escreve), desenvolvimento (o pedido ou a informação), fecho. Assinatura com nome e cargo. Anexos, se houver, enumerados. Falta de número, data ou destinatário não é “detalhe de formatação”: impede a recuperação e o protocolo. O modelo varia de órgão para órgão; a banca cobra a função de cada parte, não o milímetro da margem.',
      ),
      named(
        'Formas de tratamento e a 3ª pessoa',
        'Vossa Excelência: chefes de Poder, ministros, governadores, prefeitos, parlamentares, membros do Judiciário, no uso protocolar usual. Vossa Senhoria: demais autoridades e particulares em ofício. Vossa ao falar COM a pessoa; Sua ao falar DELA (“Sua Excelência o Prefeito determinou”). O verbo e o possessivo vão para a 3ª pessoa: “Vossa Excelência nomeará o servidor e encaminhará o processo ao seu gabinete” — nunca “nomeareis”, “vós” ou “vosso”. Vocativo: Senhor Prefeito, Senhor Secretário, Senhora Diretora — sem “Prezado amigo”. Pronome de tratamento não se mistura com “você” no mesmo parágrafo.',
      ),
      named(
        'Fechos, vocativos e o que não é regra municipal',
        'Convenção didática clássica de manual: Respeitosamente, quando se escreve a autoridade superior; Atenciosamente, quando se escreve a autoridade de mesmo nível ou inferior. Não transforme isso em “lei de Itarema”. Se o item pedir o fecho ao Prefeito, a resposta de manual é Respeitosamente. Se pedir o vocativo, não use “Caro João”. Não invente “Cordialmente” como fecho de ofício externo. O ponto final do fecho e a vírgula depois do vocativo seguem o padrão culto; o conteúdo político do ofício não autoriza tratamento íntimo.',
      ),
      named(
        'Latinismos de uso administrativo — só o corrente',
        'A priori (de antemão), a posteriori (depois do fato), ad hoc (para este fim), in verbis (nos termos, literalmente), mutatis mutandis (mudando o que deve ser mudado), sine qua non (condição indispensável), stricto sensu / lato sensu (sentido estrito / amplo), data venia (com a devida vênia), ex officio (de ofício, sem provocação), in totum (por inteiro), caput (cabeça do artigo), sic (assim mesmo, no original), vice versa, ipso facto, modus operandi, inter alia, vis-à-vis. A prova cobra o sentido, não a pronúncia de restaurante. “Mutatis mutandis” não é “imediatamente”. “Ex officio” não é “fora do expediente”. Não invente latinismo de paletó para parecer culto: o edital pede os de uso frequente.',
      ),
      named(
        'Abreviações, envelope e endereçamento postal',
        'Abreviações usuais: Ilmo., Exmo., S.Exa., V.Sa., V.Exa., pág., Av., n., CEP, proc. Não invente grafia (“Vossa Sra.”). Envelope: tratamento, nome, cargo, órgão, logradouro, número, bairro, cidade/UF, CEP. Sigilo quando a norma exigir (correspondência particular do servidor, dado protegido). O destinatário no envelope é a pessoa/órgão que vai abrir; o tratamento acompanha o cargo, não o apelido. Endereçamento incompleto (só “Prefeitura”) atrasa a carga e é falha de digitação qualitativa tanto quanto o erro de teclado.',
      ),
      named(
        'Digitação qualitativa e comunicação oral',
        'Digitação qualitativa: revisão ortográfica, numeração de páginas, espaçamento legível, destaque de assunto, PDF quando o trâmite for digital, nome de arquivo recuperável (“oficio-camara-2026-1187.pdf”, não “documento final FINAL2”). Comunicação oral no balcão continua oficial no conteúdo: clareza, respeito, sem gíria que humilhe o cidadão, sem expor dado de terceiro. O recado telefônico vira registro escrito (quem ligou, data, hora, recado, quem anotou). Falar “depois eu vejo” sem anotar não é comunicação oficial: é perda do pedido.',
      ),
    ],
    aprofundamento: [
      named(
        'O que este programa não pede',
        'O Anexo IV não cobra o Manual da Presidência pelo número da edição, nem a Lei de Acesso à Informação como disciplina autônoma, nem cerimonial de Chefe de Estado. Não estude “padrões de outro município” como se fossem Itarema. Comunicação social, release e redes da prefeitura não substituem o ofício.',
      ),
      named(
        'Quando o enunciado mistura documentos',
        'Se o destinatário é outro ente ou a Câmara, pense ofício. Se é a seção ao lado, memorando pode caber no uso didático. Se o papel declara o que está no arquivo, certidão. Se registra reunião, ata. Se decide no processo, despacho. A alternativa que chama o carimbo de ofício erra o gênero.',
      ),
    ],
    revisaoRapida: blocks(
      'Impessoalidade + padrão culto. Vossa = 3ª pessoa (seu, não vosso).',
      'Ofício externo; memo interno (uso didático). Fecho ao superior: Respeitosamente (convenção de manual).',
      'Latinismo só o corrente. Envelope com cargo, órgão, endereço e CEP.',
      'Digitação qualitativa = revisão, número, arquivo recuperável. Recado oral vira escrito.',
    ),
    definitions: [
      { term: 'Impessoalidade', definition: 'O texto fala em nome do órgão, não da pessoa do servidor.' },
      { term: 'Ofício', definition: 'Comunicação oficial externa, com identificação completa do destinatário.' },
      { term: 'Memorando', definition: 'No uso didático de muitos manuais, comunicação interna e breve entre unidades do mesmo órgão.' },
      { term: 'Vocativo', definition: 'Chamamento do destinatário no texto (“Senhor Prefeito”).' },
      { term: 'Digitação qualitativa', definition: 'Produção do texto oficial com revisão, padronização e legibilidade, não só velocidade.' },
    ],
    comparisons: [
      {
        title: 'Ofício × memorando (uso didático)',
        leftLabel: 'Ofício',
        rightLabel: 'Memorando',
        rows: [
          { label: 'Destino clássico', left: 'Outro órgão, outro ente ou particular', right: 'Unidade do mesmo órgão' },
          { label: 'Tom', left: 'Formalidade plena, timbre, número', right: 'Ágil, ainda oficial' },
          { label: 'Pegadinha', left: 'Usar memo para a Câmara', right: 'Usar ofício para recado de corredor à seção ao lado — possível, mas o item costuma querer o memo' },
        ],
      },
      {
        title: 'Vossa Excelência × Vossa Senhoria',
        leftLabel: 'Vossa Excelência',
        rightLabel: 'Vossa Senhoria',
        rows: [
          { label: 'Uso protocolar usual', left: 'Chefes de Poder, prefeito, ministros, parlamentares, magistrados', right: 'Demais autoridades e particulares em ofício' },
          { label: 'Verbo', left: '3ª pessoa: “nomeará”', right: '3ª pessoa: “encaminhará”' },
          { label: 'Possessivo', left: 'seu / sua', right: 'seu / sua — nunca vosso' },
        ],
      },
    ],
    examples: [
      'Rascunho “Vossa Senhoria deve anexar no vosso processo até amanhã” mistura 2ª pessoa, possessivo antigo e prazo vago. A correção oficial usa 3ª pessoa, “seu processo”, número do processo e data certa.',
      'A questão que descreve envio de cópias à Câmara e oferece “memorando” está testando o destinatário externo: o instrumento clássico é o ofício.',
      '“Aplica-se, mutatis mutandis, o rito da ordinária” não significa “aplica-se imediatamente”: significa “mudando o que deve ser mudado”.',
      'Envelope só com “Prefeitura, Itarema” falha no endereçamento: faltam cargo, logradouro e CEP.',
    ],
    publicAdminExamples: [
      'Ofício da Secretaria de Administração à Câmara pedindo cópia de lei municipal: tratamento ao Presidente da Câmara, assunto explícito, anexos numerados.',
      'Circular interna alterando o horário do protocolo: mesmo teor a várias seções; não precisa da assinatura de cada munícipe.',
    ],
    procedures: [
      'Identifique o destinatário: interno ou externo.',
      'Escolha o gênero (ofício, memo, circular, despacho, certidão, ata).',
      'Monte as partes: número, data, vocativo, assunto, texto, fecho, assinatura.',
      'Aplique tratamento em 3ª pessoa e fecho de manual se o item pedir.',
      'Revise latinismo, abreviação, envelope e nome do arquivo.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — tratamento e pessoa verbal',
        setup: 'Rascunho: “Vossa Senhoria deve anexar o comprovante no vosso processo até amanhã.”',
        steps: [
          'Vossa Senhoria exige 3ª pessoa: “anexará”, não “deveis anexar”.',
          'O possessivo acompanha a 3ª pessoa: “seu processo”, não “vosso”.',
          'Amanhã, em ofício, vira data certa: “até 28/10/2026”.',
          'O texto fala em nome do órgão, não “eu preciso que você…”.',
        ],
        result: '“Solicita-se a Vossa Senhoria que anexe o comprovante ao processo n. … até 28/10/2026.”',
      },
      {
        title: 'Exemplo resolvido 2 — ofício ou memorando',
        setup: 'A seção de protocolo precisa comunicar formalmente à Câmara Municipal o envio de cópias de atos.',
        steps: [
          'Destinatário: outro Poder, órgão externo.',
          'No uso clássico, comunicação externa = ofício.',
          'Memorando, em muitos manuais, é interno.',
          'O conteúdo (cópias de atos) não muda o gênero: muda o anexo.',
        ],
        result: 'Instrumento adequado: ofício, com assunto, anexos e tratamento ao Presidente da Câmara.',
      },
      {
        title: 'Exercício guiado — latinismo',
        setup: '“Aplica-se à reunião extraordinária, mutatis mutandis, o rito da ordinária.”',
        steps: [
          'Mutatis mutandis = mudando o que deve ser mudado.',
          'Não é “em caráter urgente” nem “por analogia perfeita sem ajuste”.',
          'A extraordinária aproveita o rito, com as adaptações necessárias.',
        ],
        result: 'A alternativa que traduz “imediatamente” ou “sem nenhuma alteração” é o distrator.',
      },
    ],
    recallPrompts: [
      'Vossa Excelência fala com quem, em uso protocolar usual?',
      'Por que o verbo de Vossa Senhoria vai para a 3ª pessoa?',
      'Quando o instrumento clássico é o ofício, e não o memorando?',
      'O que significa mutatis mutandis?',
      'Qual é a convenção didática de fecho ao Prefeito?',
    ],
    recallAnswers: [
      'Autoridades de alto escalão (presidente, governador, prefeito, ministros, desembargadores, no uso protocolar usual).',
      'O tratamento é de 3ª pessoa: “Vossa Senhoria encaminhará”, nunca “encaminheis” nem “você”.',
      'Quando o destinatário é outro órgão, outro ente ou particular — comunicação externa.',
      'Mudando o que deve ser mudado: aproveita-se a regra com as adaptações necessárias.',
      'Respeitosamente — convenção de manual de redação, não um decreto que o edital de Itarema tenha copiado.',
    ],
    commonErrors: [
      'Misturar eu/me em ofício.',
      'Tratamento em 2ª pessoa (“vós”, “vosso”).',
      'Usar memorando para outro ente federativo.',
      'Traduzir latinismo pelo “clima” da frase.',
      'Envelope sem cargo, órgão ou CEP.',
      'Chamar o Manual da Presidência de norma municipal de Itarema.',
    ],
    traps: [
      'Memorando para outro ente federativo (em muitos manuais, o instrumento externo é o ofício).',
      '“Vossa Excelência nomeareis”.',
      'Fecho “Cordialmente” em ofício ao Prefeito.',
      'Mutatis mutandis = imediatamente.',
    ],
    relatedLessonIds: ['pt-pronomes', 'esp-secretaria'],
    relatedEditalItems: ['ed-esp-02'],
    synthesis:
      'Documento certo, tratamento em 3ª pessoa, texto claro e impessoal, latinismo corrente, envelope identificável. O Manual da Presidência ensina; o edital de Itarema não o nomeia.',
    glossary: [
      { term: 'Ex officio', definition: 'Por dever do ofício, sem provocação da parte.' },
      { term: 'In verbis', definition: 'Nos termos literais do texto citado.' },
      { term: 'Data venia', definition: 'Com a devida vênia; fórmula de discordância respeitosa.' },
      { term: 'Caput', definition: 'Cabeça do artigo, distinta dos parágrafos e incisos.' },
    ],
    masteryCriteria: [
      'Identificar o documento adequado à situação.',
      'Corrigir tratamento e fecho.',
      'Reconhecer latinismos listados em prova.',
      'Montar as partes de um ofício (número, data, vocativo, assunto, texto, fecho).',
      'Explicar por que o MRPR é referência didática e não ementa deste cargo.',
    ],
    questionIds: ['esp-redacao-01', 'esp-redacao-02', 'esp-redacao-03', 'esp-redacao-04', 'esp-redacao-05', 'esp-redacao-06', 'esp-redacao-07'],
  }),

  esp({
    id: 'esp-contabilidade', topicId: 'esp-contabilidade', chapterId: 'esp-contabilidade',
    title: 'Contabilidade básica',
    objective:
      'Explicar patrimônio e a equação A = P + PL, aplicar débito e crédito pelo método das partidas dobradas, classificar fatos permutativos, modificativos e mistos, distinguir regime de caixa e de competência e ler, em nível médio, o Balanço Patrimonial e a DRE — sem transformar o Anexo IV em PCASP ou em Lei 4.320.',
    importance: peso,
    estimatedMinutes: 38,
    prerequisites: [],
    essencial: [
      named(
        'O que a contabilidade registra',
        'Contabilidade é o sistema de informação que registra, agrupa e evidencia o patrimônio e as suas variações. Objeto: o patrimônio. Finalidade didática: controlar bens, direitos e obrigações e apurar resultado. No expediente municipal, o agente não substitui o contador, mas precisa ler um saldo, um empenho auxiliar e um comprovante sem inverter débito e crédito. O edital diz apenas “contabilidade básica”: nível médio, não o programa de contador de nível superior.',
      ),
      named(
        'Patrimônio e a equação fundamental',
        'Bens e direitos formam o Ativo (caixa, bancos, estoques, móveis, créditos a receber). Obrigações com terceiros formam o Passivo (fornecedores, empréstimos, impostos a recolher). A diferença é o Patrimônio Líquido (capital, reservas, lucros ou prejuízos acumulados). Equação: Ativo = Passivo + Patrimônio Líquido, ou PL = A − P. Se o passivo for maior que o ativo, o PL é negativo: passivo a descoberto. Entidade pública também tem situação líquida; não existe “PL nulo porque é prefeitura”.',
      ),
      named(
        'Conta, débito e crédito — lados, não “bom” e “ruim”',
        'Conta é o registro de um item patrimonial ou de resultado. Débito é o lado esquerdo; crédito, o direito. No jargão bancário, “crédito na conta é dinheiro entrando” — isso NÃO se copia para a contabilidade. Conta de ativo tem natureza devedora: débito aumenta, crédito diminui. Passivo e PL: crédito aumenta, débito diminui. Receita credita; despesa debita (regra didática geral). Debitar Caixa aumenta o ativo (entra dinheiro). Creditar Caixa reduz o ativo (sai dinheiro).',
      ),
    ],
    completo: [
      named(
        'Método das partidas dobradas',
        'Todo lançamento tem pelo menos um débito e um crédito de igual valor. A soma dos débitos do dia iguala a soma dos créditos. Não existe débito isolado “porque a despesa é ruim”. Compra à vista de móvel: Debita Móveis (entra bem) e credita Caixa (sai dinheiro) — os dois lados fecham. Compra a prazo: Debita Móveis e credita Fornecedores (nasce obrigação). Quem debita Caixa na compra à vista inverte quem recebe e quem entrega.',
      ),
      named(
        'Fatos contábeis: permutativo, modificativo e misto',
        'Permutativo: troca elementos sem alterar o PL. Compra à vista de móvel pelo custo: sai caixa, entra móvel, mesmo valor. Pagamento de fornecedor: sai caixa, cai passivo. Modificativo: altera o PL. Receita de serviço à vista aumenta ativo e PL. Despesa de energia a pagar aumenta passivo e reduz PL. Misto: permuta e modificação no mesmo fato — venda de bem com lucro (sai o bem pelo custo, entra caixa maior, a diferença é resultado). A compra à vista de móvel pelo custo NÃO é modificativo: o PL não mexe.',
      ),
      named(
        'Passivo a descoberto e classificações úteis',
        'PL = A − P. Se P > A, situação líquida negativa = passivo a descoberto. Não se chama isso de “ativo negativo” nem de “lucro”. Ativo circulante são bens e direitos de curto prazo (caixa, estoque); não é o nome da situação líquida. Receita antecipada é obrigação (passivo), não o nome do desequilíbrio. Superávit é resultado positivo, o oposto da ideia.',
      ),
      named(
        'Regime de caixa × regime de competência',
        'Caixa: reconhece receita quando entra dinheiro e despesa quando sai. Competência: reconhece no fato gerador, independentemente do caixa. Energia consumida em novembro e paga em janeiro: no regime de competência a despesa é de novembro; o pagamento em janeiro é evento de caixa. Não existe “mês intermediário” como critério. Tesoureiro não escolhe o exercício por conveniência. O edital de Itarema NÃO detalhou o PCASP: a alternativa que afirma isso é excesso.',
      ),
      named(
        'Demonstrações didáticas: BP e DRE',
        'Balanço Patrimonial é fotografia em determinada data: ativo, passivo e PL. Demonstração do Resultado do Exercício (DRE) é o filme do período: receitas, custos e despesas até o lucro ou prejuízo. Imóveis estão no ativo (BP), não na DRE. O lucro do período nasce na DRE e pode integrar o PL no BP; o BP não “lista apenas o lucro”. Nenhuma das duas é protocolo de arquivo. A Lei 8.666/1993 está revogada e nunca foi a lei das demonstrações básicas.',
      ),
      named(
        'Lançamentos do expediente que a prova inventa',
        'Entrada de arrecadação em caixa: débito Caixa, crédito Receita (ou Bancos, conforme o enunciado). Pagamento de material de consumo à vista, se o item tratar como despesa do período: débito Despesa, crédito Caixa. Se capitalizar estoque: débito Estoque, crédito Caixa. Folha a pagar: débito Despesa com pessoal, crédito Salários a pagar; no pagamento, débito Salários a pagar, crédito Caixa/Bancos. Conferência obrigatória: a equação continua fechada depois de cada fato.',
      ),
      named(
        'O que “básico” autoriza e o que não autoriza',
        'Autoriza: equação patrimonial, natureza das contas, partidas dobradas, fatos simples, caixa versus competência, leitura do BP e da DRE. Não autoriza: fingir que o Anexo IV detalhou a Lei 4.320/1964, o MCASP, o PCASP ou a contabilidade aplicada ao setor público de nível superior. Empenho, liquidação e pagamento (ciclo da despesa) podem aparecer como aprofundamento: o agente auxilia documentos; não vira tesoureiro da questão. Lei 8.666/1993 está revogada pela 14.133/2021 e nunca foi a lei das demonstrações.',
      ),
    ],
    aprofundamento: [
      named(
        'Ciclo da despesa pública — facultativo',
        'No orçamento público, a despesa percorre empenho (reserva), liquidação (verificação do direito do credor) e pagamento. O edital deste cargo não nomeia a Lei 4.320. Se a banca trouxer “empenhar, liquidar, pagar”, trate como vocabulário de expediente, não como ementa. Controlar caixa da tesouraria em planilha não substitui o empenho.',
      ),
      named(
        'O que não copiar de outros cargos deste edital',
        'Contabilidade geral avançada, NBC TSP e MCASP aparecem em cargos de nível superior deste mesmo edital. Agente Administrativo pede o básico. Não estude consolidação, cisão ou CVM como se fossem este programa.',
      ),
    ],
    revisaoRapida: blocks(
      'A = P + PL. Se P > A: passivo a descoberto.',
      'Partidas dobradas: todo débito tem crédito de igual valor.',
      'Ativo: débito aumenta. Passivo e PL: crédito aumenta. Receita credita; despesa debita.',
      'Caixa = dinheiro. Competência = fato gerador. BP = fotografia. DRE = filme do período.',
    ),
    definitions: [
      { term: 'Ativo', definition: 'Bens e direitos.' },
      { term: 'Passivo', definition: 'Obrigações com terceiros.' },
      { term: 'Patrimônio líquido', definition: 'Situação líquida: A − P. Pode ser negativo (passivo a descoberto).' },
      { term: 'Partidas dobradas', definition: 'Sistema em que a soma dos débitos iguala a soma dos créditos.' },
      { term: 'Fato permutativo', definition: 'Troca elementos patrimoniais sem alterar o PL.' },
      { term: 'Fato modificativo', definition: 'Altera o PL (receita ou despesa).' },
    ],
    comparisons: [
      {
        title: 'Débito × crédito conforme a natureza',
        leftLabel: 'Débito',
        rightLabel: 'Crédito',
        rows: [
          { label: 'Ativo (Caixa)', left: 'Aumenta (entra dinheiro)', right: 'Diminui (sai dinheiro)' },
          { label: 'Passivo (Fornecedores)', left: 'Diminui (paga-se a dívida)', right: 'Aumenta (nasce a obrigação)' },
          { label: 'Resultado', left: 'Despesa', right: 'Receita' },
        ],
      },
      {
        title: 'Regime de caixa × competência',
        leftLabel: 'Caixa',
        rightLabel: 'Competência',
        rows: [
          { label: 'Quando reconhece', left: 'Entrada ou saída de dinheiro', right: 'Fato gerador, mesmo sem caixa' },
          { label: 'Energia de novembro paga em janeiro', left: 'Despesa de janeiro', right: 'Despesa de novembro' },
          { label: 'Pegadinha', left: 'Chamar competência de “quando convém”', right: 'Dizer que município só usa caixa e ignora o consumo' },
        ],
      },
    ],
    examples: [
      'Ativo R$ 80.000 e passivo R$ 50.000: PL = 30.000. Somar 80.000 + 50.000 inverte a equação.',
      'Debitar Caixa aumenta o ativo. Creditar Caixa na compra à vista é a saída de dinheiro — não “prejuízo”.',
      'Compra à vista de móvel pelo custo é fato permutativo: entra móvel, sai caixa, PL intacto.',
      'A alternativa que amarra o BP à Lei 8.666 “ainda vigente” erra a lei e a demonstração.',
    ],
    publicAdminExamples: [
      'Controlar em planilha a caixa da tesouraria não substitui o empenho, mas o agente pode conferir documentos e saldos.',
      'Fatura de energia do prédio da Administração: competência no mês do consumo; o pagamento posterior é caixa.',
    ],
    procedures: [
      'Escreva a equação A = P + PL com os números do enunciado.',
      'Classifique cada conta: ativo, passivo, PL, receita ou despesa.',
      'Aplique a natureza: o que o débito faz nesta conta?',
      'Feche o lançamento com contrapartida de igual valor.',
      'Pergunte se o PL mudou (modificativo/misto) ou só permutou.',
      'Se houver dois tempos (consumo × pagamento), decida o regime pedido.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — equação e lançamento',
        setup: 'Caixa R$ 2.000. Fornecedor a pagar R$ 500. Compra à vista de material de consumo R$ 200 (baixa no caixa; material vira despesa do período, neste exemplo didático).',
        steps: [
          'Antes: Ativo 2.000 = Passivo 500 + PL 1.500.',
          'Débito em despesa 200; crédito em caixa 200.',
          'Caixa fica 1.800. O PL cai 200 pela despesa. Passivo inalterado.',
          'Conferência: 1.800 = 500 + 1.300.',
          'Não chame o débito de “prejuízo”: débito no ativo aumenta; aqui o crédito no caixa é que reduz o ativo.',
        ],
        result: 'A equação continua fechada. Se a compra fosse a prazo, o caixa não mexeria agora (crédito em Fornecedores).',
      },
      {
        title: 'Exemplo resolvido 2 — competência',
        setup: 'Prefeitura consome energia em novembro e paga a fatura em janeiro.',
        steps: [
          'Fato gerador: consumo em novembro.',
          'Regime de competência: despesa de novembro.',
          'Saída de dinheiro em janeiro: evento de caixa.',
          'Não existe “mês intermediário”. Tesoureiro não escolhe o exercício.',
        ],
        result: 'A despesa pertence a novembro. Quem marca janeiro descreveu o regime de caixa.',
      },
      {
        title: 'Exercício guiado — fato permutativo',
        setup: 'Compra à vista de um móvel por R$ 2.000, pelo valor de custo, sem outros gastos.',
        steps: [
          'Sai caixa 2.000 (crédito em Caixa).',
          'Entra móvel 2.000 (débito em Móveis).',
          'PL não muda: permuta de ativo por ativo.',
          'Não é modificativo diminutivo: não houve despesa, houve troca de bens.',
        ],
        result: 'Fato permutativo. Partidas dobradas fechadas. O “gasto” do bolso não é, neste caso, redução de PL.',
      },
    ],
    recallPrompts: [
      'O que acontece com o ativo quando se debita a conta Caixa?',
      'Dê a diferença entre regime de caixa e de competência em uma frase.',
      'Como se chama a situação em que o passivo é maior que o ativo?',
      'Por que a compra à vista de móvel pelo custo não reduz o PL?',
      'O que o Balanço Patrimonial mostra que a DRE não mostra?',
    ],
    recallAnswers: [
      'Debitar Caixa aumenta o ativo: entra dinheiro. Creditar Caixa reduz o ativo: sai dinheiro.',
      'Caixa registra quando o dinheiro entra ou sai; competência registra o fato gerador, mesmo sem movimento de caixa.',
      'Passivo a descoberto (PL negativo).',
      'Porque é fato permutativo: sai caixa e entra o móvel no mesmo valor. O PL só mudaria se houvesse despesa ou receita.',
      'O BP mostra ativo, passivo e PL em uma data (fotografia). A DRE mostra receitas e despesas do período (filme).',
    ],
    commonErrors: [
      'Achar que debitar sempre piora a conta.',
      'Somar ativo e passivo para achar o PL.',
      'Chamar compra à vista de bem pelo custo de fato modificativo.',
      'Tratar competência como “quando convém”.',
      'Colocar imóvel na DRE e lucro como único conteúdo do BP.',
    ],
    traps: [
      'Confundir saldo devedor de caixa (normal) com “prejuízo”.',
      'PL nulo “porque é prefeitura”.',
      'Lei 8.666 como lei das demonstrações, ainda vigente.',
      'PCASP como se o Anexo IV deste cargo o tivesse detalhado.',
    ],
    relatedLessonIds: ['inf-planilha'],
    relatedEditalItems: ['ed-esp-03'],
    synthesis:
      'Patrimônio se equilibra em A = P + PL; lançamento tem dois lados; o regime define quando reconhecer; BP fotografa e DRE narra o período. Básico não é MCASP.',
    glossary: [
      { term: 'Passivo a descoberto', definition: 'Situação em que o passivo supera o ativo; PL negativo.' },
      { term: 'Regime de competência', definition: 'Reconhecimento no fato gerador, independentemente do caixa.' },
      { term: 'Balanço Patrimonial', definition: 'Demonstração da posição patrimonial em determinada data.' },
      { term: 'DRE', definition: 'Demonstração do Resultado do Exercício: receitas, custos e despesas do período.' },
    ],
    masteryCriteria: [
      'Montar a equação patrimonial.',
      'Classificar um lançamento simples de débito/crédito.',
      'Distinguir fato permutativo de modificativo em caso concreto.',
      'Aplicar competência quando o enunciado separar consumo e pagamento.',
      'Dizer o que o BP mostra e o que a DRE mostra, sem misturar as peças.',
    ],
    questionIds: ['esp-cont-01', 'esp-cont-02', 'esp-cont-03', 'esp-cont-04', 'esp-cont-05', 'esp-cont-06'],
  }),
]
