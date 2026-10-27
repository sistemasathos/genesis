import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'

const DISCIPLINE = 'portugues' as const
const FONTES = ['src-edital', 'src-didatico'] as const

function pesoProva(foco: string): string {
  return `Na prova objetiva de Itarema-CE 2026 (Edital nº 01/2026, nível médio/técnico), Língua Portuguesa tem 14 questões (peso 2), ou seja, 28 pontos. A classificação exige no mínimo 50% dos pontos em cada disciplina: sete acertos em Português são o piso, não a meta. ${foco}`
}

function pt(input: Omit<Parameters<typeof lesson>[0], 'disciplineId' | 'complementary' | 'sourceIds'> & {
  sourceIds?: string[]
}): Lesson {
  return lesson({
    disciplineId: DISCIPLINE,
    complementary: false,
    ...input,
    sourceIds: input.sourceIds ?? [...FONTES],
  })
}

export const portuguesLessons: Lesson[] = [
  pt({
    id: 'pt-interpretacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-leitura',
    topicId: 'pt-interpretacao',
    title: 'Leitura e interpretação textual',
    objective:
      'Ler o texto pelo que ele diz, distinguir informação explícita de inferência válida e reconhecer o comando da questão (de acordo com o texto, infere-se, é correto afirmar, exceto) sem projetar opinião pessoal.',
    estimatedMinutes: 32,
    importance: pesoProva(
      'Em cadernos anteriores de nível médio da IDIB há blocos longos de interpretação com várias questões sobre o mesmo texto; isso é hipótese de estilo, não garantia de que Itarema repetirá o formato.',
    ),
    prerequisites: [],
    essencial: [
      named(
        'O texto manda; o candidato não “completa” o autor',
        'Interpretar em concurso não é dizer o que você acha do tema. É recuperar o que o texto afirma, o que ele pressupõe com pistas suficientes e o que ele não diz. A alternativa correta precisa caber no recorte dado. Se o texto fala de protocolo no atendimento e a alternativa generaliza “toda a Administração é ineficiente”, houve extrapolação — erro clássico.',
      ),
      named(
        'Compreensão × interpretação',
        'Compreensão cobra o dito: localizar fato, causa, comparação, tese. Interpretação cobra o não dito com apoio: ironia, conclusão implícita, ponto de vista. A banca não pede telepatia; pede encadeamento. Se a inferência exige um dado que o texto não oferece, a alternativa é nula, por mais “inteligente” que pareça.',
      ),
      named(
        'Leia o comando antes de se apaixonar pelo texto',
        'Palavras decisivas mudam o gabarito: “de acordo com o texto”, “infere-se”, “predomina”, “exceto”, “incorreta”, “não se pode afirmar”. Circule a negativa. Muitos erros em Português não são de leitura do texto; são de leitura do enunciado. Em item “exceto”, quatro alternativas estão no texto — a certa é a que foge a ele.',
      ),
    ],
    completo: [
      named(
        'Tema, tese e argumento',
        'Tema é o assunto (atendimento, fila, certidão). Tese é o posicionamento (“digitalizar não elimina a fila; reorganiza o ponto em que ela aparece”). Argumento é o apoio (exemplo, comparação, causa, dado). Questão de “ideia principal” aponta a tese, não um exemplo periférico nem o tema genérico. Se a alternativa só nomeia o assunto, é rasa demais.',
      ),
      named(
        'Tipologia e gênero sem decorar rótulo vazio',
        'Narrar conta fato no tempo; descrever caracteriza; dissertar defende ou explica; injungir instrui. Gênero é o contrato social (ofício, notícia, charge, relatório). A IDIB, em provas médias já aplicadas, costuma pedir tipologia predominante e função do trecho. Predominante não significa exclusiva: um artigo pode narrar um caso para argumentar. Marque o propósito global.',
      ),
      named(
        'Explícito, implícito e pressuposto',
        'Explícito: está escrito. Implícito: conclui-se com as peças do texto. Pressuposto: informação apresentada como já aceita (“o rastro só tem valor se alguém o lê” pressupõe que existe rastro). Não confunda pressuposto com opinião sua. Em item de vocabulário, o sentido é o do contexto, não o primeiro do dicionário.',
      ),
      named(
        'Como o item de interpretação costuma aparecer',
        'Quatro famílias: (1) ideia central; (2) inferência; (3) detalhe localizado (“no segundo parágrafo”); (4) o que NÃO se depreende. Estratégia: para (1), releia início e fecho; para (2), peça duas pistas; para (3), volte à linha; para (4), elimine o que o texto realmente diz. Não marque pelo “clima” da alternativa.',
      ),
      named(
        'Palavra decisiva do comando e o “exceto”',
        'De acordo com o texto pede o dito. Infere-se / depreende-se pede o não dito com pista. É correto afirmar pode ser os dois — volte ao recorte. Exceto / incorreta / não se pode afirmar inverte a busca: quatro alternativas estão no texto; a certa é a que foge. Circule a negativa antes de se apaixonar pelo parágrafo. Muitos erros de Português neste cargo não são de leitura do texto; são de leitura do enunciado.',
      ),
      named(
        'Vocabulário, modalizador e o que o texto não autoriza',
        'Sentido de vocábulo é o do parágrafo (lição de significação). Modalizador (pode, em tese, infelizmente) faz parte da tese: apagá-lo na paráfrase é infidelidade. Generalização (“sempre”, “todos os municípios”) e juízo moral (“a gestão fracassou”) só valem se o autor os formulou. O ofício que “solicita providências com urgência” não autoriza inferir crime. O Anexo IV pede leitura e interpretação; não pede que você complete o autor com a vida da Prefeitura.',
      ),
    ],
    aprofundamento: [
      named(
        'Hipótese de banca (não é regra do edital)',
        'Nos cadernos locais de Agente Administrativo da IDIB há abertura com texto extenso e várias questões sobre ele (vocabulário, inferência, reescritura). A amostra é pequena (poucos PDFs, órgãos e anos distintos). Trate isso como treino de fôlego, não como promessa de que Itarema virá “igual Palmácia ou Limoeiro”. O edital só garante leitura e interpretação de gêneros diversos.',
      ),
      named(
        'Texto administrativo e texto de opinião',
        'No serviço público, o texto tende ao referencial e ao injuntivo (informar, determinar, protocolar). Em prova, porém, o texto-base pode ser crônica, reportagem ou artigo. Não leve o “tom da Prefeitura” para um texto literário, nem leia um ofício como se fosse charge. O gênero autoriza certas inferências e bloqueia outras.',
      ),
      named(
        'Aprofundamento: polifonia e ironia',
        'Aspas, travessão e conectores de contraste (“no entanto”, “ao contrário do que se pensa”) podem marcar voz alheia ou ironia. A alternativa que toma o trecho irônico ao pé da letra é distrator. Isso não é item autônomo do Anexo IV; entra como ferramenta de leitura dentro de “interpretação textual”.',
      ),
    ],
    revisaoRapida: blocks(
      'Comando primeiro: se houver “não”, “exceto” ou “incorreta”, a lógica se inverte.',
      'Tese ≠ exemplo. Ideia principal não é o caso ilustrativo do terceiro parágrafo.',
      'Inferência precisa de pista no texto. O que “poderia ser verdade no mundo” mas não está apoiado é extrapolação.',
      'Relocalize o trecho indicado. Não responda de memória depois de uma leitura só.',
    ),
    definitions: [
      { term: 'Compreensão', definition: 'Recuperação do que está dito: fatos, relações explícitas, tese formulada.' },
      { term: 'Interpretação', definition: 'Conclusão apoiada em pistas do texto, sem inventar dado externo.' },
      { term: 'Extrapolação', definition: 'Levar o texto além do que ele autoriza, generalizando ou moralizando.' },
      { term: 'Tipologia predominante', definition: 'Modo de organização que comanda o texto, ainda que haja trechos de outro tipo.' },
    ],
    comparisons: [
      {
        title: 'O que o texto autoriza',
        leftLabel: 'Válido na prova',
        rightLabel: 'Inválido na prova',
        rows: [
          { label: 'Base', left: 'Trecho, conector, repetição, contraste', right: 'Notícia que você viu, opinião de servidor, “conhecimento de mundo” solto' },
          { label: 'Inferência', left: 'Conclusão com duas pistas internas', right: 'Hipótese interessante sem apoio' },
          { label: 'Vocabulário', left: 'Sentido no parágrafo', right: 'Primeira acepção do dicionário' },
        ],
      },
    ],
    examples: [
      'Texto: “Digitalizar o atendimento não elimina a fila; reorganiza o ponto em que a fila aparece.” Ideia central: a tecnologia desloca, não extingue, o congestionamento. Distrator: “a fila deixa de existir com o sistema eletrônico.”',
      'Comando “é INCORRETO afirmar”: a alternativa que copia a tese do autor está errada como gabarito; a que distorce um detalhe é a correta.',
      'Inferência válida: o texto diz que o rastro “só tem valor se alguém o lê” → sem leitura, o arquivo digital não humaniza. Extrapolação: “a Prefeitura de Itarema fracassou”.',
      'Paráfrase que troca pode por deve: o grau mudou; a “ideia parecida” não basta.',
    ],
    publicAdminExamples: [
      'Ofício que “solicita providências com a máxima urgência” não autoriza inferir que houve crime ou má-fé; só há pedido com marcação de prioridade.',
      'Relatório de fila no setor de cadastro: o número de atendidos é dado explícito; dizer que “a gestão fracassou” é juízo que o relatório pode não ter feito.',
    ],
    procedures: [
      'Leia o comando e circule negativa, exceto, infere-se, de acordo com o texto.',
      'Localize tese (início/fecho) e o trecho indicado pelo enunciado.',
      'Para inferência, exija pelo menos duas pistas internas.',
      'Recuse generalização, moral e troca de modalizador.',
      'Não complete o autor com notícia, corredor ou “o que a Prefeitura faria”.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — tese × exemplo',
        setup: '§1: “Digitalizar o atendimento não elimina a fila; reorganiza o ponto em que ela aparece.” §2: caso de protocolo eletrônico com senha no corredor. A questão pede a ideia principal.',
        steps: [
          'O §1 formula o posicionamento: a tecnologia desloca, não extingue, o congestionamento.',
          'O §2 particulariza; não substitui a tese.',
          'Alternativa que só diz “fala de fila” é tema, rasa demais.',
          'Alternativa “a fila acaba com o sistema” contradiz o não elimina.',
        ],
        result: 'Ideia principal = tese do §1. Exemplo do §2 é apoio, não gabarito de “ideia central”.',
      },
      {
        title: 'Exemplo resolvido 2 — comando “exceto”',
        setup: 'Quatro alternativas parafraseiam o ofício; o comando pede “é INCORRETO afirmar, de acordo com o texto”. Uma copia a tese; outra diz que houve má-fé.',
        steps: [
          'Exceto/incorreto inverte: a certa é a que NÃO está no texto.',
          'A que copia a tese está no texto — logo é gabarito errado neste comando.',
          'Má-fé não foi dita: só “solicita providências com urgência”.',
          'Marcar a tese “porque está certa” ignora o comando.',
        ],
        result: 'A correta é a extrapolação (má-fé). Fidelidade ao texto + fidelidade ao comando.',
      },
      {
        title: 'Exercício guiado — inferência sem pista',
        setup: 'Texto: “O rastro só tem valor se alguém o lê.” Alternativa: “A Prefeitura de Itarema fracassou na digitalização.”',
        steps: [
          'Há pista para: sem leitura, arquivo digital não basta.',
          'Não há pista para fracasso de um município nomeado.',
          'Conhecimento de mundo ou de edital local não autoriza a inferência.',
          'É extrapolação, ainda que “possa ser verdade no mundo”.',
        ],
        result: 'Inferência de prova exige apoio interno. Itarema no exemplo didático não vira dado do texto-base.',
      },
    ],
    recallPrompts: [
      'Em uma frase, diferencie compreensão e interpretação de concurso.',
      'O que fazer quando o comando traz “exceto” ou “incorreta”?',
      'Por que a alternativa moralizante costuma ser distrator?',
      'O edital garante que a prova de Itarema virá com texto longo no estilo de outros cadernos da IDIB?',
    ],
    recallAnswers: [
      'Compreensão recupera o dito. Interpretação conclui o não dito com pista interna, sem dado externo.',
      'Inverter a busca: quatro alternativas estão no texto; a certa é a que foge a ele.',
      'Porque avalia o tema com juízo do candidato, não com a tese do autor. Prova pede fidelidade, não virtude.',
      'Não. Cadernos anteriores com texto extenso são hipótese de estilo e treino de fôlego. O Anexo IV só garante leitura e interpretação de gêneros diversos.',
    ],
    commonErrors: [
      'Marcar a alternativa mais “bonita” ou mais moralizante, e não a mais fiel.',
      'Ignorar “exceto” / “não” e escolher a primeira frase verdadeira em relação ao texto.',
      'Responder com base no título ou no primeiro parágrafo, sem checar o fecho.',
      'Completar o autor com notícia, experiência de balcão ou opinião sobre a Prefeitura.',
    ],
    traps: [
      'Alternativa que generaliza (“sempre”, “nunca”, “todos os municípios”).',
      'Paráfrase que troca um modalizador: o texto diz “pode” e a opção diz “deve”.',
      'Detalhe verdadeiro do texto usado para sustentar uma tese que o autor não defendeu.',
    ],
    relatedLessonIds: ['pt-estrutura-texto', 'pt-articulacao', 'pt-significacao', 'pt-modalizadores', 'pt-linguagem'],
    relatedEditalItems: ['ed-pt-01'],
    synthesis:
      'Interpretação de concurso é fidelidade controlada: o gabarito está no texto e no comando. Treine textos longos porque a IDIB já os usou em nível médio, mas não transforme essa hipótese em “certeza de prova”.',
    glossary: [
      { term: 'Tese', definition: 'Posicionamento que o texto sustenta sobre o tema.' },
      { term: 'Gênero', definition: 'Formato socialmente reconhecido (notícia, ofício, charge, artigo).' },
      { term: 'Comando', definition: 'Parte do enunciado que define a operação: localizar, inferir, apontar o erro.' },
    ],
    masteryCriteria: [
      'Separar o que o texto diz do que você pensa sobre o assunto.',
      'Identificar tese e pelo menos um argumento de apoio em texto dissertativo.',
      'Detectar palavra negativa no comando e inverter a busca.',
      'Rejeitar alternativa por extrapolação mesmo quando ela parece “culta”.',
      'Preservar modalizador na paráfrase (pode ≠ deve).',
      'Não transformar hipótese de estilo da IDIB em “certeza de prova” de Itarema.',
    ],
  }),

  pt({
    id: 'pt-estrutura-texto',
    areaId: DISCIPLINE,
    chapterId: 'pt-leitura',
    topicId: 'pt-estrutura-texto',
    title: 'Estruturação do texto e dos parágrafos',
    objective:
      'Reconhecer introdução, desenvolvimento e fecho; perceber progressão temática; e identificar a função de um parágrafo (apresentar tese, exemplificar, contrapôr, concluir).',
    estimatedMinutes: 29,
    importance: pesoProva(
      'Itens de estrutura cobram “o segundo parágrafo serve para” ou “a progressão se dá por”. Errar aqui é errar leitura global, o que derruba várias questões do mesmo texto.',
    ),
    prerequisites: ['pt-interpretacao'],
    essencial: [
      named(
        'Texto é máquina de progressão, não saco de frases',
        'Um texto bem formado introduz um tema, desenvolve com informação nova e fecha com síntese, proposta ou retomada. Parágrafo é unidade de sentido: em regra, uma ideia-núcleo + apoio (exemplo, causa, contraste, enumeração). Se o núcleo muda no meio sem marca, há quebra — e a banca gosta de perguntar onde a progressão falha ou se realiza.',
      ),
      named(
        'Tópico frasal',
        'A frase que ancora o parágrafo (muitas vezes a primeira, nem sempre) chama-se tópico frasal. As demais especificam. Em prova: “o tópico frasal do 3º parágrafo anuncia X”. Distrator típico: apontar um exemplo como se fosse o núcleo.',
      ),
      named(
        'Progressão temática',
        'Dado (informação já conhecida) + novo (informação acrescentada). Retomadas (pronomes, sinônimos, repetição) amarram o dado; o novo empurra o texto. Sem novo, há circularidade; sem dado, há salto. Questões de estrutura testam se você percebe essa costura.',
      ),
    ],
    completo: [
      named(
        'Funções do parágrafo',
        'Apresentar tese; delimitar recorte; trazer dado; exemplificar; conceder (“é verdade que…”) e contrapor (“contudo…”); concluir; propor. O mesmo parágrafo pode exemplificar E argumentar. A questão pede a função predominante no trecho indicado, não um rótulo absoluto para o gênero inteiro.',
      ),
      named(
        'Parágrafo na redação oficial (uso didático)',
        'Ofício e memorando tendem a um assunto por parágrafo, ordem direta e fecho padrão. Isso ajuda a ler documentos, mas o edital de Português pede estruturação de textos de gêneros diversos — não transforme todo texto da prova em “modelo de ofício”.',
      ),
      named(
        'Coerência e continuidade',
        'Coerência é o mundo do texto não se contradizer. Continuidade é o leitor não perder o fio. Uma quebra proposital (parágrafo curto, pergunta retórica) pode ser estratégia, não erro. Só chame de falha se o enunciado pedir avaliação normativa ou se a alternativa falar em “prejuízo à progressão”.',
      ),
      named(
        'Como o item aparece',
        '“O último parágrafo retoma a tese e acrescenta ressalva.” “A enumeração do 2º parágrafo particulariza a crítica do 1º.” “Há quebra quando o autor muda de destinatário sem marca.” Treine rotular cada parágrafo em uma linha na margem do rascunho mental.',
      ),
      named(
        'Introdução, desenvolvimento e fecho — sem copiar o ofício para a crônica',
        'Introdução apresenta tema/tese ou situação. Desenvolvimento acrescenta dado, exemplo, concessão e contraste. Fecho sintetiza, propõe, ironiza ou retoma — não é obrigatoriamente “portanto”. O memorando municipal (referência / fato / encaminhamento) ilustra funções distintas, mas o edital pede estruturação de gêneros diversos: não leia a crônica como se fosse modelo de ofício, nem o ofício como se cada parágrafo tivesse de “concluir”.',
      ),
      named(
        'Quebra de progressão versus estratégia',
        'Salto sem retomada (do prazo da certidão para a biografia do prefeito) é quebra. Parágrafo curto, pergunta retórica ou “isso, porém, não basta” pode ser dobradiça proposital. Só marque falha se o comando pedir avaliação normativa ou se a alternativa falar em prejuízo à progressão. A alternativa que descreve o tema (“fala de fila”) no lugar da função (“exemplifica o congestionamento”) é distrator.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: períodos-ponte',
        'Frases como “isso, porém, não basta” são dobradiças: fecham o bloco anterior e abrem o seguinte. Em item de estrutura, a alternativa que trata a dobradiça como “ideia nova independente” costuma ser falsa. Recurso de análise, não linha autônoma do edital.',
      ),
      named(
        'Texto multimodal',
        'Infográfico e charge organizam “parágrafos” visuais (blocos, legendas, eixos). A estruturação continua: há núcleo e apoio. O detalhe visual entra no tópico de linguagem verbal e não verbal; aqui, o foco é a ordem da informação.',
      ),
    ],
    revisaoRapida: blocks(
      'Um parágrafo, em regra, uma ideia-núcleo. Exemplo não é núcleo.',
      'Progressão = dado retomado + informação nova.',
      'Pergunte: este parágrafo apresenta, exemplifica, contrapõe ou conclui?',
      'Fecho pode sintetizar, propor ou ironizar; não é obrigatoriamente “portanto”.',
    ),
    definitions: [
      { term: 'Tópico frasal', definition: 'Frase que contém a ideia nuclear do parágrafo.' },
      { term: 'Progressão temática', definition: 'Encadeamento de informação conhecida com informação nova.' },
      { term: 'Parágrafo', definition: 'Bloco de sentido com unidade, não apenas recuo visual.' },
      { term: 'Quebra de progressão', definition: 'Salto temático sem retomada nem marca de contraste, com prejuízo ao fio do texto.' },
    ],
    comparisons: [
      {
        title: 'Núcleo × apoio no parágrafo',
        leftLabel: 'Tópico / função',
        rightLabel: 'Não confundir com',
        rows: [
          { label: 'Tópico frasal', left: 'ideia-núcleo (nem sempre a 1ª frase)', right: 'exemplo ou concessão inicial' },
          { label: '§ de exemplo', left: 'particulariza a tese', right: 'substitui a tese / “ideia principal”' },
          { label: 'Fecho', left: 'síntese, proposta, ironia, retomada', right: 'obrigatoriamente “portanto”' },
        ],
      },
    ],
    examples: [
      '§1: tese (“o rastro digital só vale se for lido”). §2: exemplo de protocolo perdido. Função do §2: particularizar a tese, não substituí-la.',
      'Quebra: parágrafo que passa de prazo de certidão para biografia do prefeito sem conector nem retomada.',
      'Dobradiça: “isso, porém, não basta” fecha o bloco anterior e abre o seguinte — não é ideia nova independente.',
      'Enumeração no §2 que lista tipos de fila particulariza a crítica do §1; não muda a tese.',
    ],
    publicAdminExamples: [
      'Memorando com três parágrafos: (1) referência ao processo; (2) fato e fundamento; (3) encaminhamento. Cada bloco tem função distinta; misturá-los gera item “prejuízo à clareza”.',
      'Ofício cujo último parágrafo só repete o primeiro sem informação nova: circularidade, não fecho.',
    ],
    procedures: [
      'Rotule cada parágrafo em uma linha: apresenta, exemplifica, contrapõe, conclui.',
      'Marque o tópico frasal (núcleo) e o que é só apoio.',
      'Siga o par dado/novo: o que se retoma e o que se acrescenta.',
      'No fecho, pergunte se sintetiza, propõe ou ironiza — não exija “portanto”.',
      'Não aplique o modelo de ofício a crônica nem o inverso.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — função do segundo parágrafo',
        setup: '§1 formula que digitalizar desloca a fila. §2 narra um protocolo eletrônico com senha no corredor. O item pergunta para que serve o §2.',
        steps: [
          'O núcleo do texto já está no §1 (tese).',
          'O §2 traz caso concreto — particulariza, não substitui.',
          'Alternativa “apresenta a tese” descreve o §1, não o §2.',
          'Alternativa “muda de assunto” ignora a retomada (fila, atendimento).',
        ],
        result: 'Função predominante do §2: exemplificar/particularizar a tese. Tema (“fala de fila”) não é função.',
      },
      {
        title: 'Exemplo resolvido 2 — memorando misturado',
        setup: 'Um só parágrafo de memorando junta número do processo, fato, fundamento e o encaminhamento ao setor. O item fala em prejuízo à progressão/clareza.',
        steps: [
          'Três funções distintas (referência, fundamentação, despacho) no mesmo bloco.',
          'A unidade parágrafica pede um núcleo por parágrafo, em regra.',
          'A correção didática separa: (1) processo; (2) fato e fundamento; (3) encaminhamento.',
          'O edital de Português não transforma isso em Manual de outro órgão: cobra a função de cada bloco.',
        ],
        result: 'Misturar funções no mesmo parágrafo prejudica a progressão. Um núcleo, apoios pertinentes.',
      },
    ],
    recallPrompts: [
      'O que é tópico frasal e por que nem sempre é a primeira frase?',
      'Explique progressão temática com o par dado/novo.',
      'Cite quatro funções possíveis de um parágrafo.',
      'O edital pede que todo texto da prova siga o modelo de ofício?',
    ],
    recallAnswers: [
      'É a frase-núcleo do parágrafo. Pode vir depois de uma concessão (“é verdade que…; contudo…”); o exemplo inicial não é tópico.',
      'O texto retoma informação conhecida (dado) e acrescenta informação nova. Sem novo há circularidade; sem dado, salto.',
      'Apresentar tese, exemplificar, contrapôr, concluir (também: delimitar, trazer dado, propor).',
      'Não. Pede estruturação de textos de gêneros diversos. O memorando ilustra funções; não é o molde da crônica.',
    ],
    commonErrors: [
      'Chamar qualquer primeira frase de tópico frasal, mesmo quando o núcleo vem depois da concessão.',
      'Achar que parágrafo curto é necessariamente conclusão.',
      'Tratar exemplo como ideia principal.',
      'Ler toda quebra curta como erro, ignorando a dobradiça proposital.',
    ],
    traps: [
      'Alternativa que descreve o tema do parágrafo, não a função (“fala de fila” em vez de “exemplifica o congestionamento”).',
      'Confundir enumeração de apoio com mudança de tese.',
      'Aplicar o recorte de ofício a um texto literário da prova (ou o inverso).',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-articulacao', 'pt-periodo'],
    relatedEditalItems: ['ed-pt-02'],
    synthesis:
      'Estrutura é o mapa do texto: núcleo de cada parágrafo, progressão dado/novo e função (apresentar, apoiar, contrapôr, fechar). Quem só “entende a ideia” sem ver o mapa perde itens fáceis.',
    glossary: [
      { term: 'Coerência', definition: 'Compatibilidade de sentidos no interior do texto.' },
      { term: 'Unidade parágrafica', definition: 'Concentração em torno de um núcleo com apoios pertinentes.' },
      { term: 'Dobradiça', definition: 'Frase-ponte que fecha um bloco e abre o seguinte (“isso, porém, não basta”).' },
      { term: 'Circularidade', definition: 'Parágrafo ou fecho que só repete o dado, sem informação nova.' },
    ],
    masteryCriteria: [
      'Rotular a função de cada parágrafo de um texto de 4–5 blocos.',
      'Distinguir tópico frasal de frase de apoio.',
      'Explicar uma progressão por retomada + informação nova.',
      'Separar quebra prejudicial de dobradiça proposital.',
      'Não impor o modelo de ofício a todo gênero da prova.',
    ],
  }),

  pt({
    id: 'pt-articulacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-leitura',
    topicId: 'pt-articulacao',
    title: 'Articulação, referenciação e operadores',
    objective:
      'Identificar o referente de pronomes e expressões referenciais e classificar o valor de nexos e operadores sequenciais (adição, oposição, conclusão, explicação, tempo, finalidade).',
    estimatedMinutes: 30,
    importance: pesoProva(
      'Coesão é o atalho da banca para testar leitura fina: “o termo isso retoma X” e “o conector contudo expressa oposição”. Cai junto com interpretação e com reescritura.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-estrutura-texto'],
    essencial: [
      named(
        'Referenciação: o fio que impede o texto de se soltar',
        'Pronomes (ele, isso, cujo), advérbios (aí, então), sinônimos, hiperônimos, repetição e elipse retomam ou antecipam um referente. A pergunta padrão: “o pronome destacado refere-se a”. A resposta é gramatical e semântica: o referente precisa concordar e fazer sentido no mundo do texto.',
      ),
      named(
        'Anáfora e catáfora',
        'Anáfora retoma o que já veio (“esse rastro”). Catáfora antecipa o que virá (“foi isto: o protocolo sumiu”). “Isto/esse” não são sinônimos automáticos de “o parágrafo inteiro”: muitas vezes retomam o último SN, não a tese global. Meça o alcance.',
      ),
      named(
        'Operadores sequenciais',
        'Nexos organizam a relação: mas/porém/contudo (oposição); portanto/logo (conclusão); pois (explicação ou conclusão, conforme a posição); além disso (adição); se/caso (condição); para que (finalidade); quando/enquanto (tempo). Trocar o operador sem preservar a relação é reescritura inválida.',
      ),
    ],
    completo: [
      named(
        'Como achar o referente',
        '1) Isole o termo. 2) Liste candidatos à esquerda (e, se preciso, à direita). 3) Teste concordância e sentido. 4) Prefira o antecedente mais próximo que funcione, mas não de forma mecânica: às vezes o núcleo é um termo mais distante, e o próximo é só adjunto. “Cujo” retoma o possuidor e introduz o possuído: “processo cujo prazo venceu”.',
      ),
      named(
        'Elipse e referência zero',
        '“O servidor registrou o pedido e Ø encaminhou cópia.” O sujeito de encaminhou é o mesmo. A banca pergunta o que está oculto. Não invente sujeito genérico (“alguém”) se a elipse aponta para termo expresso.',
      ),
      named(
        'Pois, porque, porquanto',
        'Pois anteposto ao verbo, entre vírgulas, tende a conclusão (“estudou, pois será cobrado”). Pois posposto explica (“estudou, pois a prova é eliminatória”). Porque explica. Essa distinção cai em articulação e em pontuação. Memorize pela posição, não só pelo “significado vago de causa”.',
      ),
      named(
        'Como o item aparece',
        'Três formatos: (1) referente de pronome; (2) valor do conector; (3) substituição de conector com preservação de sentido. Em (3), “mas” não equivale a “embora” sem ajuste na estrutura (coordenação × subordinação).',
      ),
      named(
        'Nexos de oposição, conclusão, finalidade e o teste da reescritura',
        'Mas/porém/contudo: oposição coordenada. Embora: concessão subordinada — equivalente só com ajuste (“caiu, mas segurou” ≃ “embora tenha caído, segurou”). Portanto/logo: conclusão; porque: explicação — trocar inverte a lógica. A fim de que / para que: finalidade, não causa. À medida que: proporção; na medida em que: causa. A reescritura só vale se a relação semântica sobreviver. O Anexo IV isolou articulação (pronomes referenciais, nexos); o valor fino das orações se aprofunda em coordenação e subordinação.',
      ),
      named(
        'Alcance do demonstrativo: último SN ou trecho inteiro?',
        '“Isso/esse/tal prática” pode retomar o último substantivo ou encapsular a sentença/parágrafo. Meça o alcance pelo sentido: “Tecnologia sem leitura é arquivo morto. Isso não humaniza o balcão” — isso condensa a sentença, não só tecnologia. A alternativa que aponta automaticamente “todo o texto” ou só o substantivo mais próximo erra o teste. Concordância continua obrigatória: eles não retoma fila.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: encapsulamento',
        'Um demonstrativo pode encapsular um trecho inteiro (“esse quadro”, “tal prática”). É referência a conteúdo, não a um substantivo isolado. Se a alternativa apontar só o último substantivo, pode estreitar demais. Ferramenta de leitura, ainda dentro do item de articulação do edital.',
      ),
      named(
        'Operadores e modalização',
        '“De fato”, “em tese”, “infelizmente” articulam e ao mesmo tempo avaliam. O edital separa modalizadores em linha própria; aqui, foque na costura referencial e sequencial. Quando o item misturar os dois, pergunte: a questão quer o valor lógico (oposição) ou a atitude do falante (lamento)?',
      ),
    ],
    revisaoRapida: blocks(
      'Referente: concorda + faz sentido. Próximo nem sempre é o certo, mas é o primeiro teste.',
      'Anáfora retoma; catáfora antecipa.',
      'Conector: oposição não é conclusão; finalidade não é causa.',
      'Reescritura de nexo só vale se a relação semântica sobreviver.',
    ),
    definitions: [
      { term: 'Coesão referencial', definition: 'Mecanismos que retomam ou antecipam elementos do texto.' },
      { term: 'Coesão sequencial', definition: 'Encadeamento por conectores e operadores discursivos.' },
      { term: 'Referente', definition: 'Elemento do texto (ou situação) ao qual o termo remete.' },
      { term: 'Encapsulamento', definition: 'Demonstrativo ou nome geral que condensa um trecho inteiro, não só o último substantivo.' },
    ],
    comparisons: [
      {
        title: 'Nexos que a banca troca de propósito',
        leftLabel: 'Relação',
        rightLabel: 'Não equivale a',
        rows: [
          { label: 'mas / porém', left: 'Oposição coordenada', right: 'embora (subordina e exige ajuste)' },
          { label: 'portanto', left: 'Conclusão', right: 'porque (explica, não conclui)' },
          { label: 'para que', left: 'Finalidade', right: 'já que (causa)' },
        ],
      },
    ],
    examples: [
      '“Tecnologia sem leitura de processo é arquivo morto. Isso não humaniza o balcão.” Isso encapsula a sentença anterior, não só a palavra “tecnologia”.',
      '“O prazo venceu, portanto o processo foi arquivado.” Trocar portanto por porque inverte a lógica: o arquivamento passaria a explicar o vencimento.',
      '“O servidor registrou o pedido e encaminhou cópia.” Sujeito elíptico de encaminhou = o servidor.',
      'Pois conclusivo: “estudou, pois será cobrado.” Pois explicativo: “estudou, pois a prova é eliminatória.”',
    ],
    publicAdminExamples: [
      '“Encaminhe-se o expediente ao setor competente, a fim de que se manifeste.” A fim de que marca finalidade, não causa do encaminhamento.',
      '“O munícipe protocolou o pedido. Este, contudo, veio sem documento de identidade.” Este retoma pedido, não munícipe.',
    ],
    procedures: [
      'Isole o pronome/demonstrativo e liste candidatos à esquerda (e à direita, se catáfora).',
      'Teste concordância e sentido; não fique só no mais próximo.',
      'Cubra o conector e nomeie a relação antes de escolher a etiqueta.',
      'Na reescritura, preserve a relação; ajuste a estrutura se embora virar mas.',
      'Meça o alcance de isso/esse: último SN ou trecho encapsulado?',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — este no protocolo',
        setup: '“O munícipe protocolou o pedido. Este, contudo, veio sem documento de identidade.” O item pergunta o referente de este.',
        steps: [
          'Candidatos: munícipe e pedido.',
          'Este concorda em masculino singular com os dois — a concordância não desempata.',
          'Sentido: quem “veio sem documento” no mundo do expediente é o pedido (peça incompleta), não o munícipe como pessoa sem RG no bolso... espera: o munícipe também poderia. O contudo contrapõe o protocolar e a incompletude da peça.',
          'Leitura estável de prova: este retoma pedido, o objeto protocolado. Munícipe seria este só se o contraste fosse sobre a pessoa.',
        ],
        result: 'Este = pedido. Concordância empata; o sentido do expediente (peça protocolada incompleta) desempata.',
      },
      {
        title: 'Exemplo resolvido 2 — portanto ≠ porque',
        setup: 'Reescritura: “O prazo venceu, portanto o processo foi arquivado” → “O prazo venceu porque o processo foi arquivado.”',
        steps: [
          'Portanto marca conclusão: do vencimento segue-se o arquivamento.',
          'Porque marca explicação/causa: o arquivamento passaria a explicar o vencimento — relação invertida.',
          'A equivalência exige preservação da relação, não só “ligar as duas orações”.',
          'Forma equivalente: “O processo foi arquivado, pois o prazo venceu” (pois explicativo, ordem invertida com causa real).',
        ],
        result: 'Trocar portanto por porque sem reordenar destrói a articulação. Nexo não é peça intercambiável.',
      },
    ],
    recallPrompts: [
      'Como se testa o referente de um pronome em prova?',
      'Em uma frase, diferencie anáfora e catáfora.',
      'Por que mas não equivale automaticamente a embora?',
      'O que o Anexo IV isolou nesta linha, em contraste com modalizadores?',
    ],
    recallAnswers: [
      'Isolar o termo, listar candidatos, testar concordância e sentido. O mais próximo é o primeiro teste, não a regra mecânica.',
      'Anáfora retoma o que já veio. Catáfora antecipa o que virá (“foi isto: o protocolo sumiu”).',
      'Mas coordena; embora subordina. Há equivalência de oposição só com ajuste estrutural.',
      'Pede pronomes referenciais e nexos/operadores sequenciais (a costura). Modalizadores são a atitude do falante, linha própria.',
    ],
    commonErrors: [
      'Atribuir “isso/esse” automaticamente a “todo o texto”.',
      'Traduzir todo “pois” como causa.',
      'Trocar embora por mas sem reescrever a oração.',
      'Ficar só no antecedente mais próximo, mesmo quando não concorda ou não faz sentido.',
    ],
    traps: [
      'Antecedente mais próximo que não concorda (“fila” para um “eles”).',
      'Conector de concessão lido como oposição absoluta, apagando a parte concedida.',
      'A fim de que lido como causa do encaminhamento.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-pronomes', 'pt-coordenacao-subordinacao', 'pt-modalizadores', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-03'],
    synthesis:
      'Articulação é costura: cada pronome tem referente testável e cada nexo tem valor. Sem isso, interpretação vira achismo e reescritura vira loteria.',
    glossary: [
      { term: 'Anáfora', definition: 'Retomada de termo já apresentado.' },
      { term: 'Catáfora', definition: 'Antecipação de termo que virá a seguir.' },
      { term: 'Encapsulamento', definition: 'Demonstrativo ou nome geral que condensa um trecho.' },
    ],
    masteryCriteria: [
      'Justificar o referente com concordância e sentido, não só com proximidade.',
      'Classificar o valor de pelo menos oito conectores frequentes.',
      'Dizer quando a troca de nexo preserva e quando destrói a relação.',
      'Medir o alcance de isso/esse: último SN versus encapsulamento.',
      'Não traduzir todo pois como causa.',
    ],
  }),

  pt({
    id: 'pt-significacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-semantica',
    topicId: 'pt-significacao',
    title: 'Significação contextual de palavras e expressões',
    objective:
      'Determinar o sentido de vocábulos e locuções no contexto, reconhecendo sinonímia contextual, antonímia, polissemia, ambiguidade e mudança de sentido por ironia ou registro.',
    estimatedMinutes: 28,
    importance: pesoProva(
      'Item de vocabulário parece “fácil” e costuma decidir desempate. O erro clássico é levar o dicionário para a prova e ignorar o parágrafo.',
    ),
    prerequisites: ['pt-interpretacao'],
    essencial: [
      named(
        'Sentido é uso, não lista de sinônimos',
        'A banca pede o sentido no texto. “Protocolo” pode ser conjunto de regras, número de registro ou formalidade excessiva. Só o entorno decide. Sinônimo cobrado é o que pode substituir o termo naquele período sem dano — sinonímia contextual, não absoluta.',
      ),
      named(
        'Polissemia × homonímia × ambiguidade',
        'Polissemia: uma palavra, vários sentidos relacionados (folha de papel / folha da árvore / folha de pagamento). Homonímia: formas iguais, origens/sentidos distintos (são = verbo / são = sadio / São = santo). Ambiguidade: duas leituras possíveis no enunciado (“o servidor viu o munícipe com o binóculo”). A prova de nível médio pede sobretudo o sentido contextual e a desambiguação.',
      ),
      named(
        'Denotação e conotação',
        'Denotação: sentido literal, estável. Conotação: sentido figurado, afetivo, irônico. “Arquivo morto em formato novo” é conotativo: não há cadáver no servidor de arquivos. Alternativa que literaliza a metáfora é distrator.',
      ),
    ],
    completo: [
      named(
        'Campos: sinonímia, antonímia, hiponímia',
        'Sinônimo contextual: substituível. Antônimo: oposição pertinente no texto (não qualquer contrário de dicionário). Hipônimo/hiperônimo: certidão é um tipo de documento. A banca pode pedir “o termo documentos retoma, por generalização, certidões e atestados”.',
      ),
      named(
        'Expressões e locuções',
        'Não separe as peças de uma locução. “À medida que” (proporção) ≠ “na medida em que” (causa). “Ao encontro de” (a favor) ≠ “de encontro a” (choque). Essas trocas são itens clássicos de significação e de ortografia/regência ao mesmo tempo.',
      ),
      named(
        'Como o item aparece',
        '“No trecho, a palavra X está empregada em sentido figurado.” “Assinale o sinônimo que preserva o sentido.” “Há ambiguidade em.” Técnica: substitua a opção no período e leia em voz alta (mentalmente). Se o período muda de rumo, o sinônimo é falso.',
      ),
      named(
        'Grau, registro e o sinônimo “mais bonito”',
        'Quis, no texto neutro, não vira anelou. Pode não vira deve (isso é modalização, mas explode a significação). Registro informal (“deitou o processo”) pode ser o ponto do item: o sentido é abandonar/atrasar, não recostar. Preservar grau e registro é parte da sinonímia contextual. A alternativa erudita que eleva o tom distorce o enunciado tanto quanto a coloquial demais no ofício.',
      ),
      named(
        'Polissemia no expediente: protocolo, folha, pressuposto, valor',
        'Protocolo: regras, número de registro ou formalidade. Folha: papel, pagamento, vegetal. Pressuposto no despacho: requisito jurídico, não “achismo”. Valor do rastro: utilidade, não cotação. O entorno escolhe a acepção; o dicionário só lista candidatos. Hipônimo/hiperônimo também é significação: documentos pode retomar certidões e atestados por generalização — cruza com articulação.',
      ),
      named(
        'Locuções que a grafia e o sentido derrubam juntas',
        'À medida que (proporção) × na medida em que (causa). Ao encontro de (a favor) × de encontro a (choque). Senão (a não ser que / caso contrário) × se não (se + negação). A cerca de (aproximadamente) × acerca de (sobre) × há cerca de (tempo decorrido). O Anexo IV pede significação contextual; essas locuções caem aqui e em ortografia/regência. Não separe as peças da locução.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: ironia e aspas',
        'Aspas de distanciamento (“nada funciona”) marcam sentido não endossado pelo autor. O vocábulo continua o mesmo; a atitude muda. Cruza com modalizadores, mas o edital de significação contextual cobre esse uso. Não crie linha nova no programa: é ferramenta.',
      ),
      named(
        'Ambiguidade proposital e vício',
        'Na charge, a ambiguidade pode ser o graça. No ofício, é vício. A questão dirá se pede valor expressivo ou correção. Sem essa leitura do comando, você “corrige” a piada ou “literariza” o documento.',
      ),
    ],
    revisaoRapida: blocks(
      'Substitua o termo no período. Se a tese mudar, o sinônimo é ruim.',
      'Metáfora literalizada é gabarito errado.',
      'À medida que (proporção) ≠ na medida em que (causa).',
      'Ao encontro de ≠ de encontro a.',
    ),
    definitions: [
      { term: 'Sinonímia contextual', definition: 'Equivalência de sentido naquele enunciado, não em todos os usos.' },
      { term: 'Polissemia', definition: 'Multiplicidade de sentidos relacionados de um mesmo vocábulo.' },
      { term: 'Ambiguidade', definition: 'Possibilidade de mais de uma leitura para o mesmo enunciado.' },
      { term: 'Hiperônimo', definition: 'Termo mais geral que engloba outros (documento ⊃ certidão, atestado).' },
    ],
    comparisons: [
      {
        title: 'Locuções que a prova troca',
        leftLabel: 'Forma e sentido',
        rightLabel: 'Não confundir com',
        rows: [
          { label: 'à medida que', left: 'proporção', right: 'na medida em que (causa)' },
          { label: 'ao encontro de', left: 'a favor, em consonância', right: 'de encontro a (choque)' },
          { label: 'acerca de', left: 'sobre o tema', right: 'há cerca de (tempo) / a cerca de (cerca física ou aproximação, conforme o uso)' },
        ],
      },
    ],
    examples: [
      '“O rastro só tem valor se alguém o lê.” Valor = utilidade/relevância, não cotação financeira.',
      '“Folha” em “folha de pagamento” não é hipônimo de árvore; o contexto bloqueia a acepção botânica.',
      '“Arquivo morto em formato novo”: conotação. Literalizar (cadáver no servidor) é distrator.',
      'Documentos retomando certidões e atestados: hiperônimo, generalização coesiva.',
    ],
    publicAdminExamples: [
      '“O setor de cadastro deitou o processo.” Sentido coloquial de abandonar/atrasar, não de recostar um objeto. Em prova, o registro informal pode ser o ponto do item.',
      'Despacho: “indefiro o pedido por falta de pressuposto.” Pressuposto = requisito jurídico, não “achismo”.',
    ],
    procedures: [
      'Substitua o sinônimo candidato no período; se a tese ou o grau mudar, recuse.',
      'Liste acepções possíveis e risgue as que o entorno bloqueia.',
      'Marque se o emprego é denotativo ou conotativo; não literalize metáfora.',
      'Não separe as peças de à medida que / ao encontro de / acerca de.',
      'Leia o comando: valor expressivo (charge) ou correção (ofício)?',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — valor no rastro',
        setup: '“O rastro só tem valor se alguém o lê.” Alternativas de sinônimo: cotação, utilidade, preço, valentia.',
        steps: [
          'O entorno fala de leitura de processo, não de mercado nem de coragem.',
          'Valor = relevância/utilidade do registro se for lido.',
          'Cotação/preço são acepções reais da palavra, erradas neste parágrafo.',
          'A primeira acepção do dicionário não vence.',
        ],
        result: 'Sinonímia contextual: utilidade/relevância. Dicionário lista; o texto escolhe.',
      },
      {
        title: 'Exemplo resolvido 2 — ao encontro de no ofício',
        setup: '“A decisão veio ao encontro do pedido do munícipe.” Alternativa troca por “de encontro ao pedido” e afirma equivalência.',
        steps: [
          'Ao encontro de = a favor, em consonância.',
          'De encontro a = choque, oposição.',
          'A troca inverte o sentido: de deferimento para conflito.',
          'Não há equivalência. Grafia parecida, significação oposta.',
        ],
        result: 'Ao encontro de ≠ de encontro a. Locução inteira, não peça a peça.',
      },
    ],
    recallPrompts: [
      'O que é sinonímia contextual, em oposição à absoluta?',
      'Diferença prática entre polissemia e ambiguidade.',
      'Cite duas locuções de sentido oposto que a prova troca.',
      'O Anexo IV pede o primeiro sentido do dicionário?',
    ],
    recallAnswers: [
      'É a equivalência que substitui o termo naquele período sem dano. Absoluta pretenderia valer em todos os usos — a prova não pede isso.',
      'Polissemia: uma palavra, vários sentidos relacionados; o contexto escolhe um. Ambiguidade: o enunciado inteiro admite duas leituras.',
      'À medida que × na medida em que; ao encontro de × de encontro a.',
      'Não. Pede significação contextual de palavras e expressões. O dicionário lista candidatos; o parágrafo escolhe o vencedor.',
    ],
    commonErrors: [
      'Escolher sinônimo “mais bonito” que altera o grau (quis = desejou, não anelou, se o texto é neutro).',
      'Tratar toda figuratividade como erro.',
      'Separar as peças de uma locução (à medida / que).',
      'Levar a primeira acepção do dicionário para o parágrafo.',
    ],
    traps: [
      'Opção com sinônimo correto em outro contexto, errado neste.',
      'Antônimo de dicionário que não é oposição no texto (quente × frio quando o texto opõe quente × morno).',
      'Literalizar metáfora administrativa (“arquivo morto” como cadáver).',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-linguagem', 'pt-modalizadores', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-04'],
    synthesis:
      'Significação de prova é substituição controlada: o termo vale pelo parágrafo. Dicionário ajuda a listar candidatos; o texto escolhe o vencedor.',
    glossary: [
      { term: 'Denotação', definition: 'Sentido literal.' },
      { term: 'Conotação', definition: 'Sentido figurado ou afetivo.' },
      { term: 'Hipônimo', definition: 'Termo mais específico em relação a um geral (certidão ⊂ documento).' },
    ],
    masteryCriteria: [
      'Justificar um sentido com pistas do entorno, não com a primeira acepção.',
      'Distinguir polissemia de ambiguidade no enunciado.',
      'Preservar grau e registro ao escolher sinônimo.',
      'Não literalizar metáfora administrativa.',
      'Distinguir à medida que (proporção) de na medida em que (causa).',
    ],
  }),

  pt({
    id: 'pt-equivalencia',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-equivalencia',
    title: 'Equivalência e transformação de estruturas',
    objective:
      'Reconhecer reescrituras que preservam sentido e correção: voz verbal, ordem dos termos, redução de orações, substituição de conectores e paralelismo.',
    estimatedMinutes: 33,
    importance: pesoProva(
      'Itens de reescritura acumulam gramática e leitura. Uma vírgula ou uma preposição a mais anula a equivalência mesmo quando “a ideia parece a mesma”.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-articulacao', 'pt-periodo'],
    essencial: [
      named(
        'Equivalência tem dois filtros',
        'Para a alternativa valer: (1) o sentido relevante se mantém; (2) a forma permanece correta na norma-padrão. Se a voz passiva muda o agente ou some um adjunto essencial, falhou (1). Se a redução gera gerúndio solto ou crase indevida, falhou (2). A banca cobra os dois, ainda que o comando só diga “preserva o sentido”.',
      ),
      named(
        'Voz verbal',
        'Ativa: O protocolo arquivou o pedido. Passiva analítica: O pedido foi arquivado pelo protocolo. Passiva sintética: Arquivou-se o pedido. Na sintética, o se é apassivador e o verbo concorda com o paciente (“arquivaram-se os pedidos”). Transformar sem perder o agente (quando o texto o destaca) é o ponto fino.',
      ),
      named(
        'Redução e desenvolvimento de orações',
        '“Ao protocolar o pedido, o munícipe recebeu número.” ≃ “Quando protocolou o pedido, …”. Redução infinitiva, gerundial ou participial só equivale se a relação (tempo, causa, concessão) continuar identificável e se o sujeito for o mesmo, salvo construção absoluta bem marcada.',
      ),
    ],
    completo: [
      named(
        'Ordem direta e indireta',
        'Ordem direta (sujeito–verbo–complemento) é a mais clara. Inversão (“Ao setor competente encaminhe-se o expediente”) é comum no jargão administrativo e pode ser equivalente. Equivalência cai quando a inversão gera ambiguidade de sujeito ou quando a vírgula isola o que não pode ser isolado.',
      ),
      named(
        'Paralelismo',
        'Estruturas coordenadas pedem forma paralela: “receber, protocolar e encaminhar”, não “receber, protocolar e o encaminhamento”. Transformar uma enumeração quebrando o paralelo invalida a reescritura.',
      ),
      named(
        'Conector e estrutura',
        '“Embora o prazo tenha vencido, o processo tramitou” ≃ “O prazo venceu, mas o processo tramitou”. Há equivalência de oposição, com mudança de subordinação para coordenação. Não há equivalência se “embora” vira “porque”.',
      ),
      named(
        'Como o item aparece',
        '“Transpondo-se a oração para a voz passiva, a forma correta é.” “A reescritura que mantém o sentido está em.” Técnica: compare agente, tempo, modalizador e negação. Qualquer um desses a menos é fatal.',
      ),
      named(
        'O checklist que mata a alternativa “bonita”',
        'Compare, um a um: agente, paciente, tempo/modo, negação, modalizador (pode/deve, talvez/certamente), destinatário, adjunto essencial. Qualquer peça a menos ou a mais anula. “Autorizo o pagamento” não equivale a “o pagamento poderá ser autorizado”: some a força do despacho. Resumir, suavizar ou “melhorar o estilo” não é equivalência. O comando pode dizer só “preserva o sentido”; a correção da forma continua valendo.',
      ),
      named(
        'Passiva sintética e a concordância que a reescritura esconde',
        'Arquivou-se o pedido / arquivaram-se os pedidos. O se é apassivador; o verbo concorda com o paciente. “Indeferiu-se os recursos” é transformação inválida. Precisa-se de servidores permanece no singular (indeterminação, VTI) — não é passiva. Errar essa fronteira inventa equivalência. Cruza com concordância; nesta linha, o ponto é: a forma transposta tem de nascer correta.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: se apassivador × índice de indeterminação',
        '“Abriu-se a sessão” (passiva; sessão = sujeito). “Precisa-se de servidores” (indeterminação; verbo intransitivo ou transitivo indireto, 3ª pessoa do singular). Errar essa fronteira gera transformações inventadas. O edital não lista o “se” à parte; a transformação de voz está em equivalência e em concordância.',
      ),
      named(
        'O que não é equivalência',
        'Resumir, suavizar (“talvez”), intensificar (“certamente”) ou trocar o destinatário. Essas operações interpretam, não reescrevem. Se o comando pede equivalência, a alternativa “mais elegante” que muda o grau está errada.',
      ),
    ],
    revisaoRapida: blocks(
      'Cheque agente, tempo, negação e modalizador. Qualquer alteração mata a equivalência.',
      'Passiva sintética: verbo concorda com o paciente. Precisa-se de: singular.',
      'Redução exige sujeito comum, salvo absoluta clara.',
      'Paralelismo: mesma forma na enumeração.',
    ),
    definitions: [
      { term: 'Equivalência', definition: 'Reescritura que preserva o sentido relevante e a correção.' },
      { term: 'Voz passiva sintética', definition: 'Construção com se apassivador e paciente no papel de sujeito.' },
      { term: 'Paralelismo', definition: 'Igualdade de estrutura em termos coordenados.' },
      { term: 'Transposição de voz', definition: 'Passagem da ativa à passiva (analítica ou sintética) sem perda de agente, tempo nem correção.' },
    ],
    comparisons: [
      {
        title: 'O que a reescritura pode e não pode fazer',
        leftLabel: 'Pode (se o sentido e a norma sobrarem)',
        rightLabel: 'Não pode',
        rows: [
          { label: 'Voz', left: 'ativa ↔ passiva analítica/sintética, com agente se o texto o destaca', right: 'omitir o agente enfatizado; indeferiu-se os pedidos' },
          { label: 'Conector', left: 'embora ≃ mas (com ajuste)', right: 'embora → porque' },
          { label: 'Redução', left: 'quando protocolou ≃ ao protocolar (sujeito comum)', right: 'gerúndio solto (o número protocola)' },
          { label: 'Grau', left: 'manter pode, talvez, não', right: 'pode → deve; autorizo → poderá ser autorizado' },
        ],
      },
    ],
    examples: [
      '“O setor indeferiu o recurso.” → “O recurso foi indeferido pelo setor.” Agente preservado.',
      '“Indeferiu-se os recursos” está incorreto; o certo é “indeferiram-se os recursos”.',
      '“Embora o prazo tenha vencido, o processo tramitou” ≃ “O prazo venceu, mas o processo tramitou.”',
      '“Receber, protocolar e o encaminhamento” quebra o paralelo e invalida a reescritura.',
    ],
    publicAdminExamples: [
      '“Autorizo o pagamento” ≠ “O pagamento poderá ser autorizado”: some a assertividade do despacho.',
      '“Recebi o ofício e encaminhei-o” → “O ofício foi recebido e encaminhado por mim”: equivalente se o agente importa no texto.',
    ],
    procedures: [
      'Sublinhe agente, paciente, tempo, negação e modalizador no original.',
      'Confira se a alternativa os preserva todos.',
      'Na passiva sintética, concorde o verbo com o paciente.',
      'Na reduzida, confira sujeito comum e a relação (tempo, causa, concessão).',
      'Recuse a opção “mais elegante” que muda o grau.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — passiva que perde o agente',
        setup: 'Original: “O setor de cadastro indeferiu o recurso.” Alternativa: “Indeferiu-se o recurso.” O item pede equivalência.',
        steps: [
          'O original destaca o agente (setor de cadastro).',
          'A sintética sem agente omite exatamente o que o texto enfatiza.',
          'A forma “Indeferiu-se o recurso” está correta (singular), mas não é equivalente neste recorte.',
          'Equivalente: “O recurso foi indeferido pelo setor de cadastro” ou “Indeferiu-se o recurso pelo setor…” se a norma do item aceitar o agente.',
        ],
        result: 'Correção da forma ≠ equivalência. Sem o agente enfatizado, a reescritura falha o filtro (1).',
      },
      {
        title: 'Exemplo resolvido 2 — autorizo ≠ poderá ser autorizado',
        setup: 'Despacho: “Autorizo o pagamento.” Reescritura: “O pagamento poderá ser autorizado.”',
        steps: [
          'Autorizo é performativo: realiza o ato.',
          'Poderá ser autorizado é deôntico de possibilidade futura: o ato ainda não ocorreu.',
          'Mudou o tempo, o modalizador e a força.',
          'Beleza da passiva não pontua.',
        ],
        result: 'Não há equivalência. Checklist: tempo + modalizador + força do despacho.',
      },
      {
        title: 'Exercício guiado — paralelismo na transposição',
        setup: '“Cabe receber, protocolar e encaminhar o expediente.” Alternativa: “Cabe o recebimento, protocolar e o encaminhamento.”',
        steps: [
          'Original paralelo: três infinitivos.',
          'A alternativa mistura substantivo, infinitivo e substantivo.',
          'O conteúdo lexical é parecido; a estrutura não.',
          'Equivalência exige os dois filtros: sentido E forma.',
        ],
        result: 'Quebra de paralelismo invalida a reescritura, ainda que “a ideia pareça a mesma”.',
      },
    ],
    recallPrompts: [
      'Quais os dois filtros da equivalência de prova?',
      'Como transpor “O setor arquivou os pedidos” para a passiva sintética?',
      'Por que embora pode equivaler a mas, mas não a porque?',
      'O que o Anexo IV pede neste item, além de “dizer a mesma coisa”?',
    ],
    recallAnswers: [
      'Preservar o sentido relevante (agente, tempo, negação, modalizador) e manter a correção na norma-padrão.',
      'Arquivaram-se os pedidos (pelo setor, se o agente importar). Verbo no plural, concordando com o paciente.',
      'Embora e mas marcam oposição (com ajuste estrutural). Porque marca causa — relação diferente.',
      'Equivalência e transformação de estruturas: voz, ordem, redução, conectores, paralelismo — sentido e forma juntos. Beleza estilística não pontua.',
    ],
    commonErrors: [
      'Concordar a passiva sintética no singular com sujeito no plural.',
      'Reduzir oração com sujeito diferente sem marca (“Protocolando o pedido, o número saiu” — quem protocola?).',
      'Apagar o agente quando o texto o destaca.',
      'Trocar modalizador ou negação em nome de “a ideia é a mesma”.',
    ],
    traps: [
      'Passiva que omite o agente justamente quando o texto o enfatiza.',
      'Troca de embora por porque em nome de “causar o mesmo efeito”.',
      'Alternativa “mais elegante” que suaviza autorizo em poderá.',
    ],
    relatedLessonIds: ['pt-verbos', 'pt-concordancia', 'pt-coordenacao-subordinacao', 'pt-construcao-frasal', 'pt-pontuacao'],
    relatedEditalItems: ['ed-pt-05'],
    synthesis:
      'Reescritura de prova é contabilidade: o que entra e o que sai da frase. Sentido e norma pesam juntos; beleza estilística não pontua.',
    glossary: [
      { term: 'Agente da passiva', definition: 'Quem pratica a ação na voz passiva, em geral com por.' },
      { term: 'Redução oracional', definition: 'Oração subordinada enxugada em infinitivo, gerúndio ou particípio.' },
      { term: 'Passiva analítica', definition: 'Construção ser/estar + particípio (o pedido foi arquivado).' },
      { term: 'Filtro de equivalência', definition: 'Par sentido relevante + correção formal; falha em qualquer um anula a reescritura.' },
    ],
    masteryCriteria: [
      'Passar frase para passiva analítica e sintética sem erro de concordância.',
      'Detectar quebra de paralelismo em enumeração.',
      'Recusar reescritura que altere modalizador ou negação.',
      'Preservar o agente na passiva quando o texto o destaca.',
      'Rejeitar redução com sujeito diferente da principal.',
    ],
  }),

  pt({
    id: 'pt-linguagem',
    areaId: DISCIPLINE,
    chapterId: 'pt-semantica',
    topicId: 'pt-linguagem',
    title: 'Linguagem verbal e não verbal',
    objective:
      'Distinguir signo verbal e não verbal e aplicar a tríade ícone, índice e símbolo na leitura de imagens, charges, infográficos e textos multimodais.',
    estimatedMinutes: 28,
    importance: pesoProva(
      'O edital traz expressamente ícone, índice e símbolo. Não é enfeite: em nível médio a IDIB já usou charge e anúncio. Trate a imagem como texto, com tese e recursos.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-significacao'],
    essencial: [
      named(
        'Verbal, não verbal, multimodal',
        'Verbal: palavras (faladas ou escritas). Não verbal: imagem, gesto, cor, layout, tipografia, som, espaço. Multimodal: combinação — charge com legenda, infográfico, post, requerimento com carimbo e QR code. A leitura de prova articula os dois planos: a legenda pode ironizar o desenho; o desenho pode desmentir o slogan; o vermelho do “indeferido” não é só tinta. Quem descreve só o que “se vê” (“há um homem e uma fila”) e ignora o que a imagem afirma perde o item. O Anexo IV isolou esta linha: linguagem verbal e não verbal, com ícone, índice e símbolo.',
      ),
      named(
        'Ícone, índice, símbolo (Peirce na dose de concurso)',
        'O critério não é “se é desenho”, é o tipo de relação com o objeto. Ícone: semelhança (foto da orla de Itarema, planta baixa, boneco de fila, pictograma de banheiro). Índice: contiguidade ou causalidade (fumaça → fogo; carimbo → tramitação; seta → direção; pegada; termômetro). Símbolo: convenção social (bandeira, brasão, R$, a palavra “protocolo”, semáforo vermelho como “pare”). Um mesmo signo pode ter camadas: a cruz é símbolo; a foto da cruz também é icônica. Relógio desenhado na parede é ícone de relógio e pode ser índice de espera.',
      ),
      named(
        'A imagem também argumenta',
        'Charge constrói tese por exagero, contraste e montagem. Infográfico seleciona dados — e omite outros. Logotipo da Prefeitura é símbolo institucional. Anúncio junta slogan (verbal) e foto (icônica) para um apelo. Pergunte sempre: o que a imagem afirma que o verbal não diz, e vice-versa? Há complementação, reforço ou contradição proposital? A tese da charge continua sendo interpretação; a tríade ícone/índice/símbolo é o vocabulário que o edital exigiu para nomear o recurso.',
      ),
    ],
    completo: [
      named(
        'Como aplicar a tríade sem forçar o rótulo',
        'Pergunte: este signo parece com o objeto (ícone), aponta para ele por contato/causa (índice) ou vale por acordo social (símbolo)? Se o comando não pede a tríade, não perca tempo rotulando — extraia a tese. Se pede, não use a beleza da palavra “símbolo” para qualquer figura. Bandeira é símbolo, ainda que seja um desenho. Foto da bandeira é ícone da bandeira e símbolo da instituição. A alternativa que diz “é ícone porque é imagem” erra o critério da relação.',
      ),
      named(
        'Charge, cartum e o distrator moralizante',
        'Charge costuma ter circunstância (fato, gestão, campanha). Cartum tende ao genérico. Em ambos: (1) descreva os elementos; (2) articule com título/legenda; (3) formule a crítica em uma frase. O distrator descreve (“homem na fila”) ou moraliza (“devemos ser honestos”) sem apontar a crítica específica (digitalizar sem uso; fila que só muda de lugar). Ironia: o desenho desmente o slogan “atendimento humanizado”. Aspas e travessão no verbal da charge são modalizadores a serviço da tese.',
      ),
      named(
        'Infográfico, anúncio e seleção de dados',
        'Infográfico não é “neutro”: escolhe o recorte, a escala, a cor. A barra maior parece “mais verdade” se o eixo não parte do zero — leitura crítica, ainda dentro de interpretação multimodal. Anúncio: o ícone do produto + o slogan + o preço (símbolo de valor) + o selo (símbolo de certificação). Contradição slogan/imagem é item clássico. Não transforme isso em aula de estatística: o edital pede leitura do verbal e do não verbal.',
      ),
      named(
        'Texto administrativo multimodal',
        'Requerimento com campos, carimbos, foto 3×4 e QR code: a foto é ícone do rosto; o carimbo é índice de tramitação (há contato com o ato de protocolar); o brasão é símbolo do Município; o QR aponta indexicalmente para um registro. Crachá: foto (ícone), código de barras (índice do cadastro), brasão (símbolo). Essa leitura ajuda o item de linguagem e, de quebra, o olhar de arquivo — sem transformar o tópico em Arquivologia, que é disciplina específica, não linha de Português do Anexo IV.',
      ),
      named(
        'Cor, layout, tipografia e gesto',
        'Vermelho de indeferido, verde de deferido, caixa alta de urgência, seta de percurso, carimbo torto sobre a assinatura: recursos não verbais que modalizam (proibição, alarme, direção). Gesto na charge (servidor de costas, munícipe com o relógio) é índice de descaso ou de espera, conforme a montagem. Não é preciso nomear “proxêmica”; é preciso dizer o que aquele recurso faz no texto. Se a alternativa só lista a cor sem o valor, é descrição rasa.',
      ),
      named(
        'Como o item aparece',
        '“O elemento X funciona como índice porque…” “A charge critica Y.” “Há contradição entre o slogan e a imagem.” “A foto desempenha papel icônico.” Técnica: (1) o comando pede tríade ou tese? (2) se tríade, aplique semelhança / contiguidade / convenção; (3) se tese, articule desenho + verbal e recuse a descrição pura e a moral genérica. Hipótese de estilo: cadernos de nível médio da IDIB já trouxeram charge e anúncio — treino útil, não garantia de que Itarema repetirá o suporte.',
      ),
    ],
    aprofundamento: [
      named(
        'Semiótica além do edital — não invente linha nova',
        'O Anexo IV pára em ícone, índice e símbolo. Não invente “signo motivado versus arbitrário”, “sintagma visual” ou “funções de Jakobson da imagem” como se fossem itens autônomos. Use Peirce só na dose cobrada. Se a questão for só de tese da charge, responda interpretação, não teoria do signo. Se pedir a tríade, não fuja para a tese para parecer “inteligente”: o comando manda.',
      ),
      named(
        'O que esta linha não é',
        'Não é Arquivologia (classificar documento), não é Manual de identidade visual de outro órgão e não substitui significação contextual (o sentido da palavra no parágrafo). Cruza com interpretação e com modalizadores (ironia da legenda). Município de Itarema não vira “prova de turismo” porque a foto é da orla: a foto é ícone da paisagem; o brasão, símbolo institucional. Não afirme frequência de charge na IDIB como se fosse regra do edital.',
      ),
    ],
    revisaoRapida: blocks(
      'Ícone = parece. Índice = aponta/causa. Símbolo = convenção. O critério é a relação, não “ser desenho”.',
      'Charge: descreva, articule com a legenda, extraia a tese. Descrição pura raramente é gabarito.',
      'Legenda e imagem podem se completar, reforçar ou se contradizer de propósito.',
      'Carimbo é índice de tramitação; brasão é símbolo; foto 3×4 é ícone. Não transforme isso em Arquivologia.',
    ),
    definitions: [
      { term: 'Ícone', definition: 'Signo que se relaciona ao objeto por semelhança (foto, planta, pictograma).' },
      { term: 'Índice', definition: 'Signo que se relaciona ao objeto por contiguidade ou causalidade (carimbo, fumaça, seta, pegada).' },
      { term: 'Símbolo', definition: 'Signo que se relaciona ao objeto por convenção social (brasão, bandeira, R$, palavra).' },
      { term: 'Texto multimodal', definition: 'Enunciado que articula mais de um modo (verbal, visual, espacial, gestual).' },
    ],
    comparisons: [
      {
        title: 'Tríade na dose de concurso',
        leftLabel: 'Relação com o objeto',
        rightLabel: 'Exemplo municipal',
        rows: [
          { label: 'Ícone', left: 'semelhança', right: 'foto 3×4 no requerimento; planta da sede' },
          { label: 'Índice', left: 'contiguidade / causa', right: 'carimbo do protocolo; seta da fila; QR do cadastro' },
          { label: 'Símbolo', left: 'convenção', right: 'brasão de Itarema; R$; semáforo; a palavra “certidão”' },
        ],
      },
    ],
    examples: [
      'Foto da orla de Itarema: ícone da paisagem. Setas no mapa de evacuação: índices de percurso. Brasão municipal: símbolo.',
      'Charge em que o “atendimento digital” é um computador com teia de aranha: tese — digitalizar sem uso é arquivo morto.',
      'Relógio na parede da charge: ícone de relógio e índice de espera.',
      'Bandeira no mastro: símbolo da instituição, ainda que “seja um desenho”.',
    ],
    publicAdminExamples: [
      'Crachá do agente: foto (ícone), código de barras (índice do cadastro) e brasão (símbolo da Prefeitura).',
      'Requerimento de certidão: foto 3×4 icônica, carimbo índice de protocolo, brasão símbolo do Município — leitura de linguagem, não de arquivologia.',
    ],
    procedures: [
      'Leia o comando: tríade ou tese da imagem?',
      'Se tríade, aplique semelhança / contiguidade / convenção, não “é desenho”.',
      'Se tese, descreva, articule com o verbal, formule a crítica em uma frase.',
      'Recuse alternativa só descritiva e alternativa só moralizante.',
      'No documento administrativo, nomeie o recurso (carimbo, brasão, foto) sem migrar para Arquivologia.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — carimbo não é símbolo “porque é oficial”',
        setup: 'O enunciado mostra um requerimento carimbado e pergunta: o carimbo funciona como ícone, índice ou símbolo? Uma alternativa diz “símbolo da Prefeitura, pois é marca oficial”.',
        steps: [
          'Símbolo exigiria relação convencional pura (brasão, bandeira).',
          'O carimbo está em contiguidade com o ato de protocolar: é vestígio da tramitação.',
          'Critério de índice: causa/contato com o fato que representa.',
          'O brasão impresso no mesmo papel, este sim, é símbolo institucional.',
        ],
        result: 'Carimbo = índice de tramitação. Chamá-lo de símbolo porque “é oficial” erra o critério da relação.',
      },
      {
        title: 'Exemplo resolvido 2 — charge com slogan desmentido',
        setup: 'Charge: faixa “Atendimento humanizado 100% digital” sobre um guichê vazio e um computador com teia. Alternativas: (A) descreve os objetos; (B) “devemos humanizar o serviço”; (C) critica a digitalização de fachada, sem uso e sem gente.',
        steps: [
          'O verbal promete humanização e digitalização total.',
          'O visual mostra abandono (teia, vazio) — contradição proposital.',
          'A tese é a crítica específica, não a moral genérica.',
          '(A) para na descrição; (B) moraliza sem o recorte da charge.',
        ],
        result: 'Gabarito de tese: digitalizar sem uso não humaniza. Descrição e moral genérica são distratores.',
      },
      {
        title: 'Exercício guiado — foto da bandeira',
        setup: 'Alternativa única: “A fotografia da bandeira municipal é ícone, não símbolo, porque fotografia sempre é ícone.”',
        steps: [
          'A foto se relaciona por semelhança com o pano/objeto — camada icônica, verdadeira.',
          'A bandeira, como objeto convencional, continua sendo símbolo da instituição.',
          'O “sempre” e o “não símbolo” estouram: um signo pode ter camadas.',
          'O comando que pede “predomina” pode aceitar ícone; o que pede o valor institucional aponta o símbolo.',
        ],
        result: 'Foto da bandeira: ícone da bandeira e, na função, símbolo da cidade. Recuse o “sempre”.',
      },
    ],
    recallPrompts: [
      'Diga o critério de ícone, índice e símbolo e dê um exemplo municipal de cada.',
      'Por que “é desenho, logo é ícone” falha?',
      'Qual a ordem de leitura de uma charge em prova?',
      'O Anexo IV pede semiótica avançada neste item? Onde ele pára?',
    ],
    recallAnswers: [
      'Ícone = semelhança (foto 3×4). Índice = contiguidade/causa (carimbo, seta). Símbolo = convenção (brasão, R$).',
      'Porque o critério é a relação com o objeto, não o suporte visual. Bandeira é símbolo; carimbo é índice; ambos podem ser “desenhos”.',
      'Descrever elementos, articular com título/legenda, formular a tese/crítica específica. Recusar descrição pura e moral genérica.',
      'Não. Pára em linguagem verbal e não verbal e na tríade ícone, índice e símbolo. Não pede tratado de Peirce nem Arquivologia.',
    ],
    commonErrors: [
      'Chamar qualquer imagem de símbolo (ou qualquer desenho de ícone).',
      'Ler a charge só pelo recorte visual, ignorando o título ou a legenda.',
      'Parar na descrição (“há um homem e uma fila”) sem extrair a tese.',
      'Moralizar a crítica (“devemos ser honestos”) no lugar do recorte específico.',
      'Transformar o item em Arquivologia porque o suporte é um requerimento.',
    ],
    traps: [
      'Alternativa que moraliza a charge em vez de apontar a crítica específica.',
      'Classificar bandeira como ícone só porque “é um desenho”.',
      'Carimbo classificado como símbolo “por ser oficial”, ignorando a contiguidade com o ato.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-significacao', 'pt-modalizadores'],
    relatedEditalItems: ['ed-pt-06'],
    synthesis:
      'Linguagem de prova inclui o que não é palavra. Ícone, índice e símbolo são o vocabulário mínimo que o edital exigiu; a tese da imagem continua sendo interpretação. O critério é a relação (semelhança, contiguidade, convenção), não “ser desenho”.',
    glossary: [
      { term: 'Multimodal', definition: 'Texto que articula mais de um modo (verbal, visual, espacial).' },
      { term: 'Charge', definition: 'Gênero gráfico de humor e crítica, em geral de circunstância.' },
      { term: 'Pictograma', definition: 'Signo icônico estilizado (boneco de fila, banheiro) que pode lexicalizar-se em símbolo.' },
      { term: 'Legenda', definition: 'Verbal que ancora, ironiza ou contradiz a imagem no texto multimodal.' },
    ],
    masteryCriteria: [
      'Classificar um signo da questão como ícone, índice ou símbolo com o critério da relação.',
      'Extrair tese de charge articulando desenho e legenda.',
      'Não reduzir item de imagem a mera descrição.',
      'Reconhecer camadas (foto da bandeira = ícone e símbolo) sem o “sempre”.',
      'Ler carimbo, brasão e foto 3×4 no requerimento sem migrar para Arquivologia.',
    ],
  }),

  pt({
    id: 'pt-modalizadores',
    areaId: DISCIPLINE,
    chapterId: 'pt-leitura',
    topicId: 'pt-modalizadores',
    title: 'Modalizadores discursivos',
    objective:
      'Reconhecer marcas de atitude do enunciador — certeza, dúvida, ênfase, atenuação, avaliação — e perceber como elas alteram o sentido em itens de interpretação e reescritura.',
    estimatedMinutes: 30,
    importance: pesoProva(
      'Modalização é linha expressa do Anexo IV. Trocar “talvez” por “certamente” anula equivalência e distorce tese. É gramática a serviço da leitura.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-articulacao'],
    essencial: [
      named(
        'Modalizar é mostrar a aposta do falante',
        'O conteúdo proposicional pode ser o mesmo (“o prazo vence sexta”); a atitude muda com talvez, certamente, infelizmente, é preciso, parece. Modalizadores são advérbios, locuções, adjetivos avaliativos, verbos de opinião (creio, duvido), perífrases (é possível que) e até pontuação (reticências, aspas, exclamações). Em prova, o gabarito quase nunca está no “miolo” da frase: está no grau. Quem lê só o fato e apaga a atitude erra item de interpretação, de equivalência e desta linha específica do Anexo IV.',
      ),
      named(
        'Famílias úteis para prova',
        'Epistêmicos: certeza ou dúvida (evidentemente, quiçá, provavelmente, em tese, talvez). Deônticos: obrigação, permissão ou proibição (é obrigatório, deve, pode-se, é vedado). Afetivos/avaliativos: infelizmente, felizmente, lamentável, é bom que. Intensificadores e atenuadores: muito, um tanto, em certa medida, praticamente. Enfáticos: de fato, sim, realmente. O rótulo importa menos do que a operação: o autor afirma, sugere, ordena ou avalia? Essa pergunta resolve o item mesmo quando a alternativa usa outro nome para a família.',
      ),
      named(
        'Por que a banca ama isso',
        'Porque o candidato desatento lê só o conteúdo e ignora o grau. O texto diz “em tese, o sistema reduz fila”; a alternativa diz “o sistema reduz fila”. Sumiu o em tese. A reescritura “pode → deve” parece sinônimo e destrói a força deôntica. O comando “infere-se que o autor considera lamentável” aponta para o avaliativo, não para o fato nu. Modalização é linha expressa do programa; não a trate como enfeite de interpretação.',
      ),
    ],
    completo: [
      named(
        'Epistêmico: certeza, hipótese e “em tese”',
        'Evidentemente, certamente, sem dúvida aumentam o compromisso com a verdade do dito. Talvez, quiçá, provavelmente, parece que, em tese diminuem. “Em tese o protocolo reduz a fila” não autoriza “o protocolo reduz a fila”: a reserva epistêmica é o dado. Alternativa que transforma hipótese em fato comprovado é o distrator mais rentável desta família. Não confunda epistêmico com deôntico: “pode” de possibilidade (“o sistema pode cair”) não é o “pode” de permissão (“pode-se protocolar até as 17h”).',
      ),
      named(
        'Deôntico: obrigação, permissão, vedação — e o despacho',
        'Deve, é preciso, é obrigatório, determina-se, autorizo, é vedado, pode-se (permissão). No expediente, a força do ato está nessa família: “autorizo o pagamento” não equivale a “o pagamento poderá ser autorizado”; “recomenda-se o arquivamento” não é “determino o arquivamento”. Placa “É proibido estacionar” não é palpite. Em reescritura, trocar pode por deve (ou vice-versa) anula equivalência mesmo quando o resto da frase se copia.',
      ),
      named(
        'Avaliativos, ênfase, atenuação e aspas',
        'Infelizmente, lamentável, felizmente, é bom que avaliam o fato, não o descrevem. De fato, realmente, sim enfatizam e muitas vezes confirmam o bloco anterior. Um tanto, em certa medida, praticamente atenuam. Aspas de distanciamento (“modernização”, “nada funciona”) marcam que o enunciador não endossa o termo: há ironia ou citação da voz alheia. Reticências podem sugerir reserva. O comando “o emprego de aspas indica” pede essa atitude, não a definição de citação bibliográfica.',
      ),
      named(
        'Negação e escopo do modalizador',
        '“Não é certo que o prazo venceu” ≠ “É certo que o prazo não venceu”. No primeiro, nega-se a certeza; no segundo, afirma-se a negação do fato. O alcance (escopo) da negação muda o gabarito. Itens de palavra negativa no comando (“não se infere”, “exceto”) se misturam com isso: circule o não do enunciado e o não do texto. “Quase não” e “não quase” também não são equivalentes. Técnica: reescreva a frase sem o modalizador e veja o que sobra; depois recoloque o modalizador no lugar certo.',
      ),
      named(
        'Cortesia, gênero textual e falso epistêmico',
        '“O senhor poderia assinar aqui” no guichê é cortesia, não dúvida sobre a capacidade de assinar. “Gostaria que Vossa Senhoria enviasse” no ofício é fórmula de pedido, não desejo íntimo. Leia o gênero: o mesmo poderia é hipótese numa crônica (“poderia o sistema cair de novo?”) e atenuação deôntica num atendimento. A alternativa que transforma cortesia em incerteza epistêmica erra o registro. O edital não pede pragmática como disciplina; pede reconhecer a atitude no texto dado.',
      ),
      named(
        'Como o item aparece',
        'Quatro formatos: (1) “O termo infelizmente expressa avaliação negativa”; (2) “A substituição de pode por deve mantém o sentido” (não mantém); (3) “O emprego de aspas em ‘modernização’ indica distanciamento”; (4) inferência que apaga em tese, talvez, segundo. Técnica: sublinhe todo modalizador antes de ler as alternativas. Em equivalência, compare grau de certeza, de obrigação e de avaliação; qualquer alteração mata a reescritura. Não invente que a banca “sempre cobra aspas”: o que o Anexo IV garante é a linha de modalizadores.',
      ),
    ],
    aprofundamento: [
      named(
        'Evidencialidade: a fonte não é endosso automático',
        'Marcas de fonte (“segundo o relatório”, “diz-se”, “conforme a certidão”) mostram de onde vem a informação. Não estão nomeadas à parte no Anexo IV; caem como modalização ou articulação. Alternativa que transforma “segundo o relatório” em fato endossado pelo autor pode estar errada: o enunciador pode estar apenas reportando. Use isso como ferramenta de leitura, não como tópico extra do programa.',
      ),
      named(
        'O que o edital não pede sob este nome',
        'O Anexo IV lista modalizadores; não pede teoria dos atos de fala, não pede classificação acadêmica completa (epistêmico, deôntico, volitivo, evidencial…) como nomenclatura obrigatória e não pede o Manual de Redação de outro órgão como se fosse norma de Itarema. Se a alternativa trouxer o rótulo acadêmico, use-o; se pedir só o valor (certeza, ordem, lamento), responda o valor. Não transforme esta linha em capítulo de linguística.',
      ),
    ],
    revisaoRapida: blocks(
      'Pergunte: o autor afirma, sugere, ordena ou avalia?',
      'Talvez/pode ≠ certamente/deve. Em tese não é “na prática comprovada”.',
      'Aspas, infelizmente e de fato são pistas de atitude, não enfeite.',
      'Negação + modalizador: cuide do escopo. Cortesia no guichê não é dúvida.',
    ),
    definitions: [
      { term: 'Modalizador', definition: 'Marca linguística da atitude do enunciador em relação ao que diz.' },
      { term: 'Modalização epistêmica', definition: 'Grau de certeza ou dúvida sobre o conteúdo (talvez, certamente, em tese).' },
      { term: 'Modalização deôntica', definition: 'Grau de obrigação, permissão ou proibição (deve, pode-se, é vedado).' },
      { term: 'Escopo da negação', definition: 'Trecho da frase efetivamente atingido pelo não; muda se se nega o fato ou só o grau.' },
    ],
    comparisons: [
      {
        title: 'Atitude que a reescritura apaga',
        leftLabel: 'Texto',
        rightLabel: 'Distrator',
        rows: [
          { label: 'Epistêmico', left: 'em tese / talvez / parece', right: 'fato afirmado sem reserva' },
          { label: 'Deôntico', left: 'pode / recomenda-se', right: 'deve / determina-se' },
          { label: 'Avaliativo', left: 'infelizmente / lamentável', right: 'descrição neutra do mesmo fato' },
          { label: 'Fonte', left: 'segundo o relatório', right: 'o autor endossa o relatório como verdade sua' },
        ],
      },
    ],
    examples: [
      '“O protocolo talvez resolva a fila.” Alternativa “o protocolo resolve a fila” exagera o compromisso.',
      '“De fato, o carimbo não substitui a leitura.” De fato confirma e enfatiza o bloco anterior.',
      '“Não é certo que o prazo venceu” não equivale a “é certo que não venceu”.',
      'Aspas em “modernização” no texto irônico marcam distanciamento, não citação bibliográfica.',
    ],
    publicAdminExamples: [
      '“Recomenda-se o arquivamento” ≠ “Determino o arquivamento”: muda a força do despacho.',
      'Placa na Prefeitura “É proibido estacionar”: deôntico; não é palpite do zelador nem hipótese epistêmica.',
    ],
    procedures: [
      'Sublinhe advérbios, aspas, verbos de opinião e perífrases (é possível, é preciso).',
      'Classifique a atitude: afirma, sugere, ordena, avalia ou reporta fonte.',
      'Na reescritura, compare grau de certeza, obrigação e avaliação.',
      'Na negação, pergunte o que o não atinge: o fato ou o modalizador.',
      'Ajuste a leitura ao gênero: ofício, placa, crônica e atendimento não modalizam igual.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — “em tese” some na alternativa',
        setup: 'Texto: “Em tese, digitalizar o protocolo reduz a fila.” Alternativa de interpretação: “O autor afirma que digitalizar o protocolo reduz a fila.”',
        steps: [
          'O conteúdo proposicional (digitalizar / fila) é o mesmo.',
          'Em tese é reserva epistêmica: o autor não endossa o fato como comprovado.',
          'A alternativa apaga o modalizador e transforma hipótese em tese nua.',
          'Se o comando pede “de acordo com o texto” ou “infere-se”, a alternativa extrapola.',
        ],
        result: 'Sem o em tese, a paráfrase é infiel. Modalizador não é adorno; é parte do sentido cobrado.',
      },
      {
        title: 'Exemplo resolvido 2 — pode × deve no despacho',
        setup: 'Reescritura: “O interessado pode juntar a certidão em cinco dias” → “O interessado deve juntar a certidão em cinco dias.” O item pergunta se a equivalência se mantém.',
        steps: [
          'Pode, no expediente, marca permissão (deôntico de faculdade) ou, conforme o contexto, possibilidade.',
          'Deve marca obrigação.',
          'O prazo de cinco dias permanece; a força do ato muda.',
          'Equivalência exige sentido relevante + correção: aqui o sentido relevante (força) não se preserva.',
        ],
        result: 'Não há equivalência. Trocar pode por deve é o distrator clássico desta linha e da de reescritura.',
      },
      {
        title: 'Exercício guiado — aspas de distanciamento',
        setup: 'Crônica sobre atendimento: o autor escreve a “modernização” do guichê, com aspas. A alternativa diz que as aspas marcam termo técnico citado de um manual.',
        steps: [
          'Não há referência a manual nem a citação bibliográfica no trecho.',
          'O entorno irônico (teia de aranha no computador, fila) pede leitura de distanciamento.',
          'Aspas aqui modalizam: o enunciador não endossa a palavra.',
          'A alternativa que literaliza “citação de norma” ignora a atitude.',
        ],
        result: 'Aspas = distanciamento/ironia neste texto. Não é item de Manual da Presidência.',
      },
    ],
    recallPrompts: [
      'Em uma frase, diferencie modalização epistêmica e deôntica com exemplo de expediente.',
      'Por que “em tese, o sistema reduz a fila” não equivale a “o sistema reduz a fila”?',
      'Como aspas podem funcionar como modalizador?',
      'O Anexo IV pede teoria dos atos de fala sob este item? O que ele pede de fato?',
    ],
    recallAnswers: [
      'Epistêmica marca certeza/dúvida (“talvez o prazo vença”); deôntica marca obrigação/permissão (“determino o arquivamento” / “pode-se protocolar até as 17h”).',
      'Porque em tese é reserva epistêmica: apagá-la transforma hipótese em fato afirmado.',
      'Marcando distanciamento, ironia ou voz alheia não endossada — a palavra permanece, a atitude muda.',
      'Não. Pede reconhecer marcas de atitude (certeza, dúvida, ênfase, atenuação, avaliação) no texto, especialmente quando a reescritura ou a inferência as apaga.',
    ],
    commonErrors: [
      'Apagar atenuadores e reservas na paráfrase.',
      'Ler cortesia (“poderia”) como dúvida epistêmica.',
      'Trocar pode por deve e achar que “a ideia é a mesma”.',
      'Tomar “segundo o relatório” como endosso automático do autor.',
      'Ignorar aspas de distanciamento ou tratá-las sempre como citação formal.',
    ],
    traps: [
      'Reescritura que troca pode por deve (ou talvez por certamente).',
      'Interpretar “em tese” como “na prática comprovada”.',
      'Negação de escopo invertido: “não é certo que P” apresentado como “é certo que não P”.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-articulacao', 'pt-significacao', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-07'],
    synthesis:
      'Modalizador é o volume e o selo de garantia da frase. Quem lê só o conteúdo e ignora a atitude erra item “fácil” de Português — em interpretação, em equivalência e nesta linha expressa do Anexo IV.',
    glossary: [
      { term: 'Atenuação', definition: 'Redução da força da afirmação (um pouco, talvez, em certa medida).' },
      { term: 'Ênfase', definition: 'Reforço da afirmação (de fato, realmente, sim).' },
      { term: 'Distanciamento', definition: 'Atitude de não endosso, frequentemente marcada por aspas ou ironia.' },
      { term: 'Performativo', definition: 'Enunciado que realiza o ato ao ser dito na condição adequada (autorizo, determino).' },
    ],
    masteryCriteria: [
      'Classificar um modalizador como epistêmico, deôntico ou avaliativo.',
      'Recusar equivalência que altere o grau de certeza ou de obrigação.',
      'Ler aspas de distanciamento como atitude, não como citação obrigatória.',
      'Explicar a diferença de escopo entre “não é certo que P” e “é certo que não P”.',
      'Distinguir cortesia de expediente de dúvida epistêmica.',
    ],
  }),

  pt({
    id: 'pt-construcao-frasal',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-construcao-frasal',
    title: 'Sintaxe e construção frasal',
    objective:
      'Montar frases claras na ordem adequada, evitar ambiguidade, quebra de paralelismo, silepse indevida e vícios (pleonasmo vicioso, eco, ambiguidade de adjunto).',
    estimatedMinutes: 30,
    importance: pesoProva(
      'O edital separa construção frasal de período e de coordenação. Aqui o foco é clareza da frase: quem pratica a ação, o que se liga a quê, se a enumeração está paralela.',
    ),
    prerequisites: ['pt-periodo', 'pt-classes'],
    essencial: [
      named(
        'Frase clara tem dono da ação visível',
        'Construção frasal, no Anexo IV, não é “fazer período composto”: é deixar a frase com dono da ação, verbo bem regido e complementos no lugar. A ordem direta (sujeito–verbo–complemento) é o porto seguro. Inversões do jargão administrativo são possíveis (“Ao setor competente encaminhe-se o expediente”), mas a banca pune quando o adjunto gruda no termo errado: “O servidor atendeu o munícipe constrangido” — quem está constrangido? A alternativa correta desfaz a dupla leitura sem trocar o fato.',
      ),
      named(
        'Ambiguidade estrutural',
        'Nasce quando a mesma sequência admite duas árvores: adjunto longe do núcleo, relativo mal colocado, coordenação com terceiro termo oscilante, gerúndio solto. Correção: aproximar o modificador, repetir a preposição, recortar a frase, explicitar o sujeito. “Encaminhou o ofício ao setor de pessoal interno” — interno modifica setor ou ofício? Melhor: “Encaminhou ao Setor de Pessoal o ofício interno.” Em prova, a opção “mais elegante” que muda o agente está errada; a que só desfaz a dupla leitura está certa.',
      ),
      named(
        'Paralelismo e correlação',
        'Termos coordenados pedem a mesma forma: receber, protocolar e encaminhar — não receber, protocolar e o encaminhamento. Correlações: não só… mas também; tanto… quanto; ou… ou; quer… quer. Quebrar a correlação (“não só protocolou como o encaminhamento”) é erro de construção e de equivalência. No despacho, misturar substantivo e oração na mesma lista (“uso do crachá, a pontualidade e que não se ausentem”) é o item clássico. Unifique a classe dos enumerados.',
      ),
    ],
    completo: [
      named(
        'Adjunto, relativo e gerúndio no lugar errado',
        'O modificador tende a se ligar ao substantivo mais próximo. “Viu o munícipe de binóculo” é piada possível e vício no ofício. Relativo longe do antecedente (“O ofício do setor que estava rasgado”) deixa dúbio o que estava rasgado. Gerúndio solto (“Protocolando o pedido, o número foi gerado”) sugere que o número protocola. Correção: “Ao protocolar o pedido, o munícipe recebeu número” ou voz passiva com agente explícito. Sujeito da reduzida = sujeito da principal, salvo absoluta bem marcada.',
      ),
      named(
        'Vícios de nível médio: pleonasmo, gerundismo, eco',
        'Pleonasmo vicioso: subir para cima, descer para baixo, há anos atrás, elo de ligação. Pleonasmo de ênfase pode ser expressivo (“vi com meus próprios olhos”) — o comando dirá se pede correção ou efeito. Gerundismo: vamos estar protocolando, como futuro esvaziado; não é o gerúndio de simultaneidade (“saiu protocolando”, ainda assim duvidoso no ofício). Eco e cacofonia raramente decidem item isolado; ambiguidade e paralelismo decidem. Não trate todo gerúndio como gerundismo.',
      ),
      named(
        'Fragmento, período emaranhado e ordem indireta',
        'Fragmento: “Motivo: falta de documento.” Em registro formal contínuo, prefere-se oração (“O motivo é a falta de documento”). O contrário também pune: período de sete linhas com três relativas empilhadas, que o leitor administrativo não aguenta numa leitura só. Ordem indireta do jargão (“Ao protocolo restitua-se”) pode ser equivalente e correta; deixa de ser quando a inversão gera ambiguidade de sujeito ou vírgula entre sujeito e verbo. Clareza > solenidade.',
      ),
      named(
        'Silepse, anacoluto e o gênero do texto',
        'Silepse concorda com a ideia (“Vossa Excelência está cansado”). Em construção frasal de correção, só a aceite se o comando autorizar ou se for construção cristalizada; fora isso, siga a forma. Anacoluto quebra o percurso (“O prazo, ontem se encerrou o processo”): em crônica pode ser expressivo; em ofício é defeito. O edital separa esta linha de período e de coordenação: aqui o foco é a frase que não deixa dúvida sobre quem faz o quê.',
      ),
      named(
        'Paralelismo no expediente: listas, alíneas, “não só”',
        'Portaria, circular e despacho amam enumerar. Cada alínea deve começar na mesma forma verbal ou nominal. “Fica determinado: a) usar o crachá; b) a pontualidade; c) que não se ausentem” quebra o paralelo. Unifique: “usar o crachá, observar a pontualidade e permanecer no posto” ou três orações. “Não só… mas também” exige a mesma estrutura depois de cada peça. Isso reaparece em equivalência: transformar a lista quebrando o paralelo invalida a reescritura.',
      ),
      named(
        'Como o item aparece',
        '“Há ambiguidade em.” “A frase está clara apenas em.” “O paralelismo está preservado em.” “Evita-se o vício em.” Técnica: sublinhe sujeito e verbo; desenhe setas dos adjuntos ao núcleo; teste se cada enumerado tem a mesma forma; releia a reduzida perguntando quem pratica a ação. Se duas alternativas desfazem a ambiguidade, fique com a que não introduz erro de regência, concordância ou pontuação. Não invente que “a IDIB prefere sempre a ordem direta”: o que se cobra é clareza.',
      ),
    ],
    aprofundamento: [
      named(
        'Tópico, foco e anacoluto — ajuste ao gênero',
        '“Quanto ao prazo, este se encerrou ontem” é topicalização: não é erro, é organização informacional. Só vira problema se gerar anacoluto sem marca. Em crônica, o anacoluto pode ser efeito; em certidão e ofício, é defeito. Isso é aprofundamento de leitura, não linha nova do Anexo IV. Se o comando pedir correção, prefira a estrutura reta; se pedir efeito, descreva o efeito.',
      ),
      named(
        'O que o edital isolou — e o que não misturar',
        'Sintaxe e construção frasal não são período simples/composto (mapa dos termos e das orações) nem coordenação/subordinação (valor das orações). Também não são pontuação, embora a vírgula mal colocada gere ambiguidade. Não importe o Manual de Redação de outro órgão como se fosse a norma de Itarema: o programa pede clareza da frase na norma-padrão. Gerundismo e pleonasmo vicioso entram aqui como vícios, não como capítulos autônomos.',
      ),
    ],
    revisaoRapida: blocks(
      'Adjunto perto do termo que modifica. Relativo perto do antecedente.',
      'Enumeração com a mesma estrutura. Não só… mas também, simétrico.',
      'Sujeito da reduzida = sujeito da principal, salvo absoluta clara.',
      'Pleonasmo vicioso ≠ ênfase proposital. Gerundismo ≠ gerúndio de simultaneidade.',
    ),
    definitions: [
      { term: 'Ambiguidade estrutural', definition: 'Duas árvores sintáticas possíveis para a mesma sequência de palavras.' },
      { term: 'Paralelismo', definition: 'Simetria formal entre termos coordenados ou correlatos.' },
      { term: 'Pleonasmo vicioso', definition: 'Repetição inútil de um conteúdo já expresso (há anos atrás).' },
      { term: 'Gerúndio solto', definition: 'Reduzida de gerúndio cujo sujeito não coincide com o da principal, gerando leitura dupla ou absurda.' },
    ],
    comparisons: [
      {
        title: 'Clareza × vício',
        leftLabel: 'Construção adequada',
        rightLabel: 'Problema',
        rows: [
          { label: 'Adjunto', left: 'perto do núcleo que modifica', right: 'grudado no substantivo errado' },
          { label: 'Enumeração', left: 'receber, registrar e devolver', right: 'o recebimento, registrar e a devolução' },
          { label: 'Reduzida', left: 'Ao protocolar, o munícipe recebeu número', right: 'Protocolando, o número foi gerado' },
          { label: 'Pleonasmo', left: 'vi com meus próprios olhos (ênfase, se o comando aceitar)', right: 'subir para cima (vicioso)' },
        ],
      },
    ],
    examples: [
      'Ambíguo: “Encaminhou o ofício ao setor de pessoal interno.” Melhor: “Encaminhou ao Setor de Pessoal o ofício interno.”',
      'Paralelo: “Cabe receber, registrar e devolver.” Quebrado: “Cabe o recebimento, registrar e a devolução.”',
      'Gerúndio solto: “Protocolando o pedido, o número saiu.” Quem protocola?',
      'Pleonasmo vicioso: “O atraso ocorreu há dois anos atrás.” Corte atrás ou troque há por faz.',
    ],
    publicAdminExamples: [
      '“Fica determinado aos servidores o uso do crachá, a pontualidade e que não se ausentem.” Quebra de paralelo: misturou SN e oração. Unifique as formas.',
      'Ofício: “Ao protocolar o requerimento, o munícipe recebeu a certidão de tramitação.” Reduzida com sujeito comum — construção clara de expediente.',
    ],
    procedures: [
      'Sublinhe sujeito e verbo da oração principal.',
      'Ligue cada adjunto/relativo ao núcleo com uma seta mental; se couber em dois, há ambiguidade.',
      'Na enumeração, confira se todos os itens têm a mesma forma.',
      'Na reduzida, pergunte quem pratica a ação do gerúndio/infinitivo/particípio.',
      'Corrija sem trocar o fato nem introduzir erro de regência.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — adjunto grudado',
        setup: '“O servidor atendeu o munícipe constrangido no setor de cadastro.” O item pede a reescritura que elimina a ambiguidade sem mudar o conteúdo: quem está constrangido é o servidor.',
        steps: [
          'Leitura A: munícipe constrangido. Leitura B: servidor constrangido.',
          'Aproximar o adjetivo do núcleo pretendido: “Constrangido, o servidor atendeu o munícipe no setor de cadastro.”',
          '“O servidor constrangido atendeu o munícipe” também resolve, com o adjetivo anteposto ao verbo.',
          'Recusar opção que troca o fato (“o munícipe constrangeu o servidor”).',
        ],
        result: 'A correção boa desfaz a dupla leitura e preserva o agente constrangido que o comando indicou.',
      },
      {
        title: 'Exemplo resolvido 2 — lista da portaria',
        setup: 'Portaria: “É dever do agente: receber o público, o protocolo das peças e que se encaminhe o expediente no mesmo dia.”',
        steps: [
          'Três formas misturadas: infinitivo, substantivo, oração com que.',
          'Paralelismo exige uma só moldura.',
          'Versão nominal: “recebimento do público, protocolo das peças e encaminhamento do expediente no mesmo dia.”',
          'Versão verbal: “receber o público, protocolar as peças e encaminhar o expediente no mesmo dia.”',
        ],
        result: 'Qualquer das duas unificações vale; a original é o gabarito do erro. Conteúdo igual, forma paralela.',
      },
      {
        title: 'Exercício guiado — gerúndio solto no protocolo',
        setup: '“Protocolando o pedido na sexta, o número foi gerado na segunda.” Alternativa afirma que a reduzida é equivalente a “quando o número protocolou o pedido”.',
        steps: [
          'Sujeito da principal: o número. A reduzida parece atribuir a ação de protocolar ao número.',
          'O munícipe (ou o setor) é o agente real, não expresso na principal.',
          'Equivalência falha: sujeito diferente, leitura absurda.',
          'Correção: “Ao ser protocolado o pedido na sexta, o número foi gerado na segunda” ou “Protocolado o pedido…”.',
        ],
        result: 'Gerúndio solto. Reduzida só equivale se o sujeito for o mesmo ou se a absoluta estiver bem marcada.',
      },
    ],
    recallPrompts: [
      'Como se desfaz ambiguidade de adjunto sem mudar o fato?',
      'Dê um exemplo de quebra de paralelismo em despacho e uma correção.',
      'Quando o gerúndio é vício de construção (solto ou gerundismo) e quando não é?',
      'O que o Anexo IV isolou nesta linha, em contraste com período e com coordenação?',
    ],
    recallAnswers: [
      'Aproximando o modificador do núcleo pretendido, repetindo a preposição ou recortando a frase — sem trocar o agente nem o conteúdo.',
      'Quebra: “uso do crachá, a pontualidade e que não se ausentem.” Correção: “usar o crachá, observar a pontualidade e permanecer no posto.”',
      'Solto: sujeito da reduzida ≠ sujeito da principal. Gerundismo: “vamos estar protocolando” como futuro. Gerúndio legítimo: simultaneidade com sujeito comum (“saiu falando”).',
      'Pede clareza da frase (ambiguidade, paralelismo, vícios). Período mapeia termos e orações; coordenação/subordinação classifica o valor das orações.',
    ],
    commonErrors: [
      'Corrigir ambiguidade mudando o fato (trocar o agente).',
      'Aceitar gerundismo (“vamos estar protocolando”) como se fosse só estilo.',
      'Misturar substantivo e oração na mesma enumeração do despacho.',
      'Tratar pleonasmo de ênfase como sempre vicioso, contra o comando.',
      'Deixar relativo longe do antecedente e chamar a frase de “clara”.',
    ],
    traps: [
      'Opção que “resolve” a ambiguidade mas introduz erro de regência ou de concordância.',
      'Pleonasmo literário cobrado como se fosse sempre erro.',
      'Gerúndio de simultaneidade apresentado como gerundismo, ou o inverso.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-equivalencia', 'pt-pontuacao', 'pt-coordenacao-subordinacao'],
    relatedEditalItems: ['ed-pt-08'],
    synthesis:
      'Construção frasal é engenharia de clareza: sujeito, verbo, complementos alinhados, modificadores no lugar, enumerações paralelas. Em prova, a frase “inteligente” e opaca perde para a frase reta que o leitor de ofício aguenta numa leitura só.',
    glossary: [
      { term: 'Anacoluto', definition: 'Quebra da estrutura iniciada, com mudança de percurso sintático.' },
      { term: 'Gerundismo', definition: 'Uso vicioso do gerúndio para marcar futuro ou cortesia esvaziada.' },
      { term: 'Ordem direta', definition: 'Sequência sujeito–verbo–complemento, porto seguro de clareza.' },
      { term: 'Correlação', definition: 'Par de conectivos que exige estruturas simétricas (não só… mas também).' },
    ],
    masteryCriteria: [
      'Desfazer ambiguidade de adjunto sem alterar o conteúdo.',
      'Reescrever enumeração quebrada em forma paralela.',
      'Distinguir pleonasmo vicioso de ênfase.',
      'Identificar gerúndio solto pelo sujeito da reduzida.',
      'Escolher, entre duas correções, a que não introduz erro de regência.',
    ],
  }),

  pt({
    id: 'pt-coordenacao-subordinacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-coordenacao-subordinacao',
    title: 'Coordenação e subordinação',
    objective:
      'Classificar orações coordenadas e subordinadas e ler o valor semântico (adição, oposição, causa, concessão, condição, finalidade, proporcionalidade, conformidade).',
    estimatedMinutes: 33,
    importance: pesoProva(
      'É um dos eixos mais “mecanizáveis” do programa: treino rende ponto. Cuidado para não só rotular: a banca mistura classificação e equivalência de sentido.',
    ),
    prerequisites: ['pt-periodo', 'pt-articulacao'],
    essencial: [
      named(
        'Coordenação: orações de mesmo nível',
        'Coordenadas não exercem função de termo interno uma da outra: ligam-se em mesmo nível. Sindéticas trazem conectivo; assindéticas justapõem (“Entrou, protocolou, saiu”). Valores: aditivas (e, nem), adversativas (mas, porém, contudo), alternativas (ou, ora… ora), conclusivas (portanto, logo, pois anteposto), explicativas (pois posposto, que, porque). Coordenar não é “somar ideias iguais”: a adversativa contrapõe; a conclusiva fecha raciocínio. Trocar e por portanto inventa conclusão que o texto pode não ter.',
      ),
      named(
        'Subordinação: uma oração depende da outra',
        'A subordinada exerce função na principal. Substantivas: sujeito, objeto direto/indireto, predicativo, complemento nominal, aposto (integrantes com que/se). Adjetivas: restritiva sem vírgula; explicativa com vírgula. Adverbiais: causa, tempo, concessão, condição, finalidade, comparação, conformidade, proporcionalidade, consequência. A restrição × explicação muda o universo: “Os servidores que faltaram foram advertidos” (só os que faltaram) ≠ “Os servidores, que faltaram, foram advertidos” (todos faltaram). A vírgula aqui é conteúdo, não ornamentação.',
      ),
      named(
        'Valor semântico acima da etiqueta pronta',
        'A lista decorada falha quando a palavra tem mais de um valor. Se e caso marcam condição, mas se também introduz integrante (“Não sei se o prazo venceu”). Como pode ser causa (“Como chovia, o atendimento atrasou”) ou comparação (“agiu como mandava o regimento”). Desde que pode ser tempo ou condição. Porque explica; portanto conclui. Leia a relação no período, depois confirme a etiqueta. O item de equivalência (embora ≃ mas, com ajuste) testa exatamente isso.',
      ),
    ],
    completo: [
      named(
        'Restritiva × explicativa na prática',
        'Sem vírgula, a adjetiva seleciona um subconjunto: “Os processos que estavam incompletos voltaram” — só os incompletos. Com vírgula, informa extra sobre um conjunto já definido: “Os processos, que estavam incompletos, voltaram” — todos estavam incompletos. Em prova, a vírgula muda interpretação, pontuação e, às vezes, o universo dos fatos. Não pontue restritiva “para respirar”. Não retire a vírgula da explicativa achando que “fica mais moderno”.',
      ),
      named(
        'Substantivas: o que e se não são relativos',
        '“Que o prazo venceu é fato” — que = integrante, oração subjetiva. “O prazo que venceu era fatal” — que = relativo, adjetiva. Teste: substitua por isso/tal fato (substantiva) ou por o qual (adjetiva). “Não sei se o documento chegou” é substantiva objetiva direta, não condição. Essa fronteira é o distrator de quem chama todo que/se de adjetiva ou de adverbial. Completivas nominais (“a necessidade de que se junte a certidão”) reaparecem em regência.',
      ),
      named(
        'Adverbiais frequentes e pares que a banca troca',
        'Causa: porque, já que, como (anteposto). Finalidade: para que, a fim de que. Condição: se, caso, desde que. Concessão: embora, ainda que, apesar de. Consequência: de modo que, tanto que. Proporção: à medida que (≠ na medida em que, causa). Conformidade: conforme, segundo. Comparação: como, assim como. O distrator troca finalidade por causa (“a fim de que” lido como “já que”) ou proporção por causa. Cubra o conectivo e pergunte a relação; depois volte à lista.',
      ),
      named(
        'Concessão não é oposição rasa nem negação do fato',
        'Embora / apesar de / ainda que: admite o fato e mesmo assim afirma o contrário. “Embora o sistema tenha caído, o atendimento seguiu.” Há queda E continuidade. A alternativa que diz “o sistema não caiu” errou a concessão: o fato concedido é verdadeiro no mundo do texto. Equivalência com mas exige ajuste de estrutura: “O sistema caiu, mas o atendimento seguiu.” Não há equivalência se embora vira porque (a queda passaria a explicar a continuidade).',
      ),
      named(
        'Pois, e, mas: posição e valor na coordenação',
        'Pois anteposto ao verbo, entre vírgulas, tende a conclusão (“estudou, pois será cobrado”). Pois posposto explica (“estudou, pois a prova é eliminatória”). E em regra é aditivo e sem vírgula; com sujeitos diferentes ou valor adversativo, a vírgula pode aparecer. Mas, porém, contudo: vírgula antes na adversativa coordenada. Esses detalhes cruzam pontuação; aqui o ponto é o valor da oração. Não traduza todo pois como causa.',
      ),
      named(
        'Reduzidas: o mesmo valor, outra forma',
        'Reduzidas de infinitivo, gerúndio e particípio desempenham os papéis das desenvolvidas. “Ao protocolar o pedido, recebeu número” (tempo). “Mesmo caindo o sistema, o atendimento seguiu” (concessão). “Juntada a certidão, o cadastro segue” (tempo/condição, conforme o texto). Equivalência só vale se a relação continuar identificável e se o sujeito for o mesmo, salvo absoluta marcada. O edital cobre reduzidas também em equivalência e em tempos verbais; nesta linha, o ponto é classificar o valor.',
      ),
      named(
        'Como o item aparece',
        'Classificação pura; valor do conectivo; equivalência embora/mas ou para que/a fim de; pontuação da adjetiva. Técnica: (1) conte os verbos; (2) cubra o conectivo e nomeie a relação; (3) veja vírgula da adjetiva; (4) só então escolha a etiqueta. Não use “o que a IDIB mais cobra” como atalho: o Anexo IV lista coordenação e subordinação; a prova aplica isso no período dado, não numa estatística de outro órgão.',
      ),
    ],
    aprofundamento: [
      named(
        'Oração reduzida e sujeito — o limite da equivalência',
        'A reduzida herda o valor da desenvolvida, mas não herda automaticamente o sujeito de qualquer termo próximo. “Protocolando o pedido, o número saiu” sugere que o número protocola. Isso é construção frasal; o valor (tempo) pode estar certo e a equivalência mesmo assim falhar. Trate a classificação nesta lição e a clareza na de construção frasal. Não invente “reduzida” como item extra do edital: é a mesma coordenação/subordinação em forma enxuta.',
      ),
      named(
        'O que o Anexo IV não pede sob este nome',
        'Não pede nomenclatura latina completa (completiva direta, adverbial proporcional da proporcionalidade…) como disciplina autônoma, nem tratado de hipotaxe literária. Pede reconhecer coordenação e subordinação e o valor semântico. Manual de outro órgão não define os conectivos de Itarema. Se a alternativa trouxer rótulo escolar estável (subjetiva, restritiva, concessiva), use-o; se pedir só o valor (causa, oposição), responda o valor.',
      ),
    ],
    revisaoRapida: blocks(
      'Coordenadas: mesmo nível. Subordinadas: uma depende (sujeito, adjunto, adjetivo…).',
      'Adjetiva sem vírgula restringe; com vírgula explica — e muda o universo.',
      'Concessão admite o fato e mesmo assim contrapõe. Embora ≠ porque.',
      'Como/se/desde que/pois: o sentido está no período, não só na palavra.',
    ),
    definitions: [
      { term: 'Oração coordenada', definition: 'Oração que se liga a outra sem função de termo interno dela.' },
      { term: 'Oração subordinada', definition: 'Oração que exerce função sintática (substantiva, adjetiva) ou adverbial em relação à principal.' },
      { term: 'Restritiva', definition: 'Adjetiva que seleciona um subconjunto do termo antecedente, em regra sem vírgula.' },
      { term: 'Oração integrante', definition: 'Subordinada substantiva introduzida por que ou se, sem função adjetiva.' },
    ],
    comparisons: [
      {
        title: 'Conectivos vizinhos',
        leftLabel: 'Usa-se para',
        rightLabel: 'Não confundir com',
        rows: [
          { label: 'embora', left: 'Concessão (admite o fato)', right: 'porque (causa) ou negação do fato concedido' },
          { label: 'a fim de que', left: 'Finalidade', right: 'já que (causa) ou à medida que (proporção)' },
          { label: 'portanto', left: 'Conclusão coordenada', right: 'pois explicativo posposto' },
          { label: 'se', left: 'Condição ou integrante', right: 'sempre “condição” por decorar a lista' },
        ],
      },
    ],
    examples: [
      '“Os processos que estavam incompletos voltaram.” Só os incompletos. Com vírgula após processos, todos estavam incompletos.',
      '“Protocolou o pedido e aguardou.” Aditiva. “Protocolou o pedido, portanto aguardou” força conclusão que o texto pode não ter.',
      '“Que o prazo venceu é fato.” Substantiva subjetiva (integrante), não adjetiva.',
      '“Embora o sistema tenha caído, o atendimento seguiu” ≃ “O sistema caiu, mas o atendimento seguiu.”',
    ],
    publicAdminExamples: [
      '“Caso o documento não seja juntado, o pedido será indeferido.” Condição, típica de despacho-padrão.',
      '“Ainda que haja fila, o atendimento segue por senha.” Concessão: a fila existe e mesmo assim há método.',
    ],
    procedures: [
      'Conte os núcleos verbais (locução vale um).',
      'Pergunte se uma oração é termo da outra (subordinação) ou se estão no mesmo nível (coordenação).',
      'Cubra o conectivo e nomeie a relação: causa, oposição, fim, condição, restrição…',
      'Na adjetiva, teste o universo com e sem vírgula.',
      'Na equivalência, preserve a relação; ajuste a estrutura (embora → mas).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — vírgula que muda o universo',
        setup: 'Texto A: “Os servidores que faltaram foram advertidos.” Texto B: “Os servidores, que faltaram, foram advertidos.” O item pergunta a diferença de sentido.',
        steps: [
          'A: adjetiva restritiva, sem vírgula — seleciona o subconjunto dos que faltaram. Os demais não foram advertidos.',
          'B: explicativa, vírgulas em par — o conjunto “os servidores” já está definido; a informação extra é que (todos) faltaram.',
          'A pontuação não é pausa de leitura: altera o fato no mundo do texto.',
          'Em interpretação, a alternativa que iguala A e B está errada.',
        ],
        result: 'Restritiva seleciona; explicativa pressupõe o todo. A vírgula é conteúdo cobrado neste item e no de pontuação.',
      },
      {
        title: 'Exemplo resolvido 2 — embora não vira porque',
        setup: 'Reescritura: “Embora o sistema tenha caído, o atendimento seguiu” → “O sistema caiu porque o atendimento seguiu.”',
        steps: [
          'Embora marca concessão: a queda é admitida e mesmo assim há continuidade.',
          'Porque marca causa: a continuidade passaria a explicar a queda — relação invertida e absurda.',
          'Equivalência possível: “O sistema caiu, mas o atendimento seguiu” (coordenação adversativa).',
          'Há mudança de subordinação para coordenação, com preservação da oposição concessiva.',
        ],
        result: 'Embora ≃ mas (com ajuste). Embora ≄ porque. O valor semântico manda na equivalência.',
      },
      {
        title: 'Exercício guiado — que integrante ou relativo?',
        setup: '“O chefe determinou que se juntasse a certidão.” Classifique a oração iniciada por que.',
        steps: [
          'Determinou o quê? → conteúdo da ordem. Função de objeto direto.',
          'Substitua por isso: “O chefe determinou isso.” Funciona.',
          'O qual não cabe: não há antecedente substantivo sendo caracterizado.',
          'Que é integrante; a oração é subordinada substantiva objetiva direta. O se é apassivador/ênclise de fórmula, não conjunção.',
        ],
        result: 'Substantiva (integrante), não adjetiva. Todo que não é relativo.',
      },
    ],
    recallPrompts: [
      'Em uma frase, diferencie adjetiva restritiva e explicativa com o exemplo dos servidores.',
      'Por que embora não equivale a porque, mas pode equivaler a mas?',
      'Como distinguir que integrante de que relativo?',
      'O que o Anexo IV pede nesta linha — e o que fica para período e para pontuação?',
    ],
    recallAnswers: [
      'Sem vírgula, seleciona subconjunto (“os que faltaram”). Com vírgula, informa extra sobre o conjunto já definido (todos faltaram).',
      'Embora admite o fato e contrapõe (concessão); porque explica (causa). Mas preserva a oposição, mudando só a estrutura (subordinação → coordenação).',
      'Integrante: a oração é termo (sujeito, OD…); substitui-se por isso. Relativo: caracteriza um antecedente; substitui-se por o qual.',
      'Pede classificar coordenadas/subordinadas e o valor semântico. Período mapeia termos; pontuação marca a vírgula da adjetiva, que aqui já é sentido.',
    ],
    commonErrors: [
      'Chamar toda oração com que de adjetiva (pode ser substantiva integrante).',
      'Pontuar restritiva como se fosse explicativa, mudando o universo dos fatos.',
      'Ler embora como se o fato concedido fosse falso.',
      'Trocar finalidade (a fim de que) por causa (já que) na equivalência.',
      'Traduzir todo pois como causa, sem olhar a posição.',
    ],
    traps: [
      'Embora lido como negação do fato concedido.',
      'Pois conclusivo tratado como explicativo sem olhar a posição.',
      'Se integrante (“não sei se”) classificado automaticamente como condição.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-articulacao', 'pt-pontuacao', 'pt-equivalencia', 'pt-verbos'],
    relatedEditalItems: ['ed-pt-09'],
    synthesis:
      'Coordenação e subordinação são o esqueleto do período composto. Classifique pela função e pelo valor; a vírgula da adjetiva é conteúdo, não ornamentação. A lista de conectivos só vale depois da leitura da relação.',
    glossary: [
      { term: 'Sindética', definition: 'Oração coordenada introduzida por conectivo.' },
      { term: 'Integrante', definition: 'Que ou se de subordinada substantiva, sem função adjetiva.' },
      { term: 'Explicativa', definition: 'Adjetiva que acrescenta informação a um antecedente já definido, isolada por vírgulas.' },
      { term: 'Reduzida', definition: 'Oração subordinada enxugada em infinitivo, gerúndio ou particípio, com o mesmo valor da desenvolvida.' },
    ],
    masteryCriteria: [
      'Separar adjetiva restritiva de explicativa pelo sentido e pela vírgula.',
      'Nomear o valor de orações adverbiais frequentes.',
      'Equivaler embora a mas com o ajuste estrutural correto.',
      'Distinguir que integrante de que relativo pelo teste isso × o qual.',
      'Não tratar todo se como condição.',
    ],
  }),

  pt({
    id: 'pt-verbos',
    areaId: DISCIPLINE,
    chapterId: 'pt-morfologia',
    topicId: 'pt-verbos',
    title: 'Emprego de tempos e modos verbais',
    objective:
      'Empregar indicativo, subjuntivo e imperativo com correlação temporal adequada, reconhecendo o valor de pretéritos, futuros e locuções no texto.',
    estimatedMinutes: 32,
    importance: pesoProva(
      'O edital pede emprego de tempos e modos, não conjugação vazia. O item típico testa se o modo combina com a oração (dúvida, hipótese, ordem) e se a correlação se/então está certa.',
    ),
    prerequisites: ['pt-flexao', 'pt-coordenacao-subordinacao'],
    essencial: [
      named(
        'Modos: o que o falante faz com o fato',
        'Modo não é “tempo mais difícil”: é o estatuto do fato. Indicativo apresenta o conteúdo como dado (O prazo venceu; O setor arquiva). Subjuntivo marca hipótese, desejo, dúvida, finalidade, concessão culta (Se o prazo vencer; Espero que venha; A fim de que se manifeste; Embora tenha vencido). Imperativo ordena, pede ou convida (Protocolize; Não se ausente). Trocar o modo muda o que a frase faz no mundo — e o gabarito. O edital pede emprego, não recitação da tabela de irregulares.',
      ),
      named(
        'Pretéritos que a banca cobra',
        'Pretérito perfeito: fato encerrado, pontual (indeferiu o recurso). Imperfeito: duração, hábito, pano de fundo (indeferia / era praxe protocolar sem senha). Mais-que-perfeito: anterior a outro passado (já indeferira quando o recurso chegou). Trocar perfeito por imperfeito não é “estilo”: muda o aspecto. Na ata, “às 9h o presidente abriu” é perfeito; “abria a sessão quando faltou luz” é fundo. A alternativa que narra hábito com perfeito (ou evento único com imperfeito) distorce o texto.',
      ),
      named(
        'Correlação clássica',
        'Duas correlações pagam a maior parte dos itens: (1) Se + futuro do subjuntivo, futuro do presente — Se o documento chegar, o pedido seguirá. (2) Se + pretérito imperfeito do subjuntivo, futuro do pretérito — Se o documento chegasse, o pedido seguiria. Misturar “Se o documento chegar, o pedido seguiria” é o erro mais treinado de prova. Há outras correlações (se + pretérito mais-que-perfeito do subjuntivo, futuro do pretérito composto: se tivesse chegado, teria seguido). Identifique a oração condicional antes de conjugar o principal.',
      ),
    ],
    completo: [
      named(
        'Onde o subjuntivo é exigido — e o indicativo é distrator',
        'Depois de embora, ainda que, a fim de que, para que, caso, talvez (anteposto), verbs de vontade/dúvida (quero que, duvido que, espero que): o culto pede subjuntivo. “Embora o prazo venceu” é o erro que a banca cola no ofício. Formas: embora tenha vencido / vencesse, conforme a correlação temporal. Integrante depois de fato tomado como certo pode ficar no indicativo (“Sei que o prazo venceu”); depois de dúvida, subjuntivo (“Não creio que tenha vencido”). O modo segue a atitude, não a palavra isolada.',
      ),
      named(
        'Futuros, locuções e o que não é futuro culto',
        'Futuro do presente: farei, protocolará (fato posterior ou, em alguns usos, incerteza atenuada). Futuro do pretérito: faria — hipótese no passado ou cortesia (“gostaria que Vossa Senhoria…”). Locução ir + infinitivo marca futuro próximo ou intenção (“o setor vai arquivar”). Haver de + infinitivo marca propósito. Gerundismo (“vamos estar encaminhando”) é vício de construção, não futuro da norma-padrão. Em equivalência, “autorizo” ≠ “estarei autorizando”: muda aspecto e, muitas vezes, a força do despacho.',
      ),
      named(
        'Imperativo, tratamento e fórmulas do expediente',
        'Tu e você mudam a forma: fala (tu) / fale (você); não fales / não fale. No texto oficial predomina você/senhor: “Solicite-se a certidão”; “Não o encaminhe sem número.” O se de “junte-se a procuração” é fórmula de despacho (voz passiva sintética ou ênclise de rotina), não relato no indicativo. Pronome oblíquo e colocação atravessam este tópico e o de pronomes: “Não se ausente” (próclise pela negação). Não inicie o ofício com “Se encaminhe” no lugar de “Encaminhe-se”.',
      ),
      named(
        'Discurso direto, indireto e transposição de tempos',
        '“O chefe disse: ‘O prazo vencerá sexta’” → “O chefe disse que o prazo venceria sexta.” O futuro do presente recua para futuro do pretérito no indireto. “Protocolarei” dito no passado vira “disse que protocolaria”. Itens de transposição testam essa engrenagem, não a “ideia geral”. Se o comando pedir equivalência, preserve também a pessoa e o modalizador: “talvez vença” não vira “vencerá” no indireto.',
      ),
      named(
        'Aspecto: perfeito composto e locuções até agora',
        'Pretérito perfeito composto (tenho protocolado) sugere processo que vem ocorrendo até o presente, distinto de protocolou (fato único). “Tenho determinado o arquivamento” não equivale a “determinei uma vez”. É nuança de aspecto: caia se o texto contrastar hábito recente e evento pontual. Não é linha autônoma do edital; entra no emprego de tempos. Gerúndio de simultaneidade (“saiu protocolando”) também é aspecto, não modo.',
      ),
      named(
        'Como o item aparece',
        'Quatro formatos: (1) lacuna de correlação se/então; (2) valor do pretérito no texto; (3) subjuntivo após embora / a fim de que; (4) transposição de discurso. Técnica: identifique a oração condicional, concessiva ou final antes de conjugar; circule o auxiliar da locução. Não recorra a “o que soaria bem no corredor”: o expediente e a crônica não autorizam o mesmo modo. O Anexo IV pede emprego de tempos e modos; não pede lista de irregulares como disciplina separada (isso é flexão).',
      ),
    ],
    aprofundamento: [
      named(
        'Pretérito perfeito composto e outras nuanças de aspecto',
        'Tenho protocolado / tenho determinado contrastam com o perfeito simples. Só explore essa nuança se o enunciado contrastar processo contínuo e evento pontual. Não invente item autônomo de “aspectologia” no Anexo IV. Do mesmo modo, o mais-que-perfeito composto (tinha indeferido) é o uso vivo do mais-que-perfeito; a forma simples (indeferira) aparece mais em texto formal e em prova tradicional.',
      ),
      named(
        'O que esta linha não exige',
        'O programa não pede conjugação vazia de verbos defectivos como capítulo, não pede o nome latino dos tempos e não confunde emprego (esta lição) com flexão da forma (particípios duplos, pessoa e número). Também não pede que o despacho municipal copie o Manual de outro órgão. Quando o item misturar modo e colocação pronominal, resolva o modo aqui e a próclise na lição de pronomes.',
      ),
    ],
    revisaoRapida: blocks(
      'Indicativo = dado. Subjuntivo = hipótese/desejo/fim/concessão culta. Imperativo = ordem.',
      'Se chegar → seguirá. Se chegasse → seguiria. Não misture os pares.',
      'Perfeito = fato. Imperfeito = fundo/hábito. Mais-que-perfeito = anterior.',
      'Embora + subjuntivo. Autorizo ≠ vamos estar autorizando.',
    ),
    definitions: [
      { term: 'Correlação verbal', definition: 'Ajuste de tempos e modos entre orações ligadas semanticamente (condição, finalidade, concessão).' },
      { term: 'Aspecto', definition: 'Modo como a ação é vista: pontual, durativa, concluída, anterior, em processo.' },
      { term: 'Modo verbal', definition: 'Categoria que marca o estatuto do fato: dado (indicativo), hipótese/desejo (subjuntivo) ou ordem (imperativo).' },
      { term: 'Futuro do pretérito', definition: 'Tempo de hipótese no passado ou de cortesia (faria, protocolaria).' },
    ],
    comparisons: [
      {
        title: 'Correlação se / então',
        leftLabel: 'Prótase (se…)',
        rightLabel: 'Apódose (então…)',
        rows: [
          { label: 'Fato possível (padrão)', left: 'futuro do subjuntivo (se chegar)', right: 'futuro do presente (seguirá)' },
          { label: 'Hipótese irreal/improvável', left: 'imperfeito do subjuntivo (se chegasse)', right: 'futuro do pretérito (seguiria)' },
          { label: 'Contrafactual passado', left: 'mais-que-perfeito do subjuntivo (se tivesse chegado)', right: 'futuro do pretérito composto (teria seguido)' },
          { label: 'Distrator', left: 'se chegar', right: 'seguiria (par misturado)' },
        ],
      },
    ],
    examples: [
      '“Se o munícipe juntar a certidão, o cadastro será atualizado.” Correlação padrão (fut. subj. + fut. presente).',
      '“Esperava-se que o sistema caísse”: subjuntivo em substantiva após expectativa no passado.',
      '“Embora o prazo tenha vencido, o processo tramitou.” Concessão culta; “embora venceu” é erro.',
      '“O chefe disse que protocolaria”: transposição de “protocolarei” no indireto.',
    ],
    publicAdminExamples: [
      'Despacho: “Junte-se a procuração e, após, conclusos.” Fórmula de imperativo/passiva, não relato no indicativo (“juntou-se” como fato narrado).',
      'Ata: “Às 9h, o presidente abriu a sessão.” Perfeito pontual. “Abria a sessão quando faltou energia” seria pano de fundo.',
    ],
    procedures: [
      'Identifique se a oração é condicional, concessiva, final ou substantiva de vontade/dúvida.',
      'Escolha o modo pelo estatuto do fato, não pelo “som bonito”.',
      'Na condição, trave o par: chegar/seguirá ou chegasse/seguiria.',
      'No pretérito, pergunte: fato único, hábito ou anterioridade?',
      'No discurso indireto, recue o futuro do presente para o futuro do pretérito.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — correlação quebrada',
        setup: 'Lacuna: “Se o documento _____ (chegar) amanhã, o pedido _____ (seguir) no mesmo dia.” Alternativas misturam chegar/chegasse e seguirá/seguiria.',
        steps: [
          'Há condição possível, não contrafactual: o documento ainda pode chegar.',
          'Prótase: futuro do subjuntivo — se o documento chegar.',
          'Apódose: futuro do presente — o pedido seguirá.',
          'Seguiria combinaria com se chegasse (hipótese irreal). Chegar + seguiria é o par misturado.',
        ],
        result: 'Se o documento chegar, o pedido seguirá. O distrator clássico é o cruzamento dos pares.',
      },
      {
        title: 'Exemplo resolvido 2 — embora no ofício',
        setup: 'Ofício: “Embora o prazo _____, o setor recebeu o recurso.” Opções: venceu / tenha vencido / vencerá.',
        steps: [
          'Embora introduz concessão e, na norma-padrão, pede subjuntivo.',
          'Venceu (indicativo perfeito) é o erro coloquial que a banca cola.',
          'Vencerá desloca o fato para o futuro e quebra a concessão sobre fato já ocorrido.',
          'Tenha vencido (pretérito perfeito composto do subjuntivo) combina com o recebimento no passado.',
        ],
        result: 'Embora o prazo tenha vencido. O modo, não só o tempo, decide o item.',
      },
      {
        title: 'Exercício guiado — perfeito × imperfeito na ata',
        setup: '“Enquanto a secretária _____ (ler) a pauta, o presidente _____ (abrir) a sessão às 9h em ponto.”',
        steps: [
          'Enquanto marca duração/fundo: lia (imperfeito).',
          'Às 9h em ponto marca evento pontual: abriu (perfeito).',
          'Dois perfeitos apagariam o pano de fundo; dois imperfeitos apagariam o horário exato.',
          'O valor de cada pretérito está no adjunto (enquanto × às 9h).',
        ],
        result: 'lia / abriu. Aspecto, não “estilo de ata”.',
      },
    ],
    recallPrompts: [
      'Recite os dois pares clássicos da correlação se/então.',
      'Em uma frase, diferencie indeferiu, indeferia e indeferira.',
      'Por que “embora o prazo venceu” falha na norma-padrão?',
      'O edital pede conjugação vazia de irregulares neste item? O que pede?',
    ],
    recallAnswers: [
      'Se chegar, seguirá (fut. subj. + fut. presente). Se chegasse, seguiria (imp. subj. + fut. pretérito).',
      'Indeferiu: fato encerrado. Indeferia: hábito ou pano de fundo. Indeferira: anterior a outro passado.',
      'Embora pede subjuntivo (tenha vencido / vencesse). O indicativo venceu é o distrator coloquial.',
      'Não. Pede emprego de tempos e modos — estatuto do fato, correlação e valor dos pretéritos. A forma flexional (particípio duplo etc.) é a lição de flexão.',
    ],
    commonErrors: [
      'Usar indicativo depois de embora (“embora o prazo venceu”).',
      'Misturar se chegar com seguiria.',
      'Tratar futuro do pretérito só como “educação”, ignorando a hipótese.',
      'Narrar evento pontual com imperfeito (ou hábito com perfeito) contra as pistas do texto.',
      'Aceitar gerundismo (“vamos estar encaminhando”) como futuro culto.',
    ],
    traps: [
      'Se + infinitivo no lugar de futuro do subjuntivo quando o sujeito é expresso (“Se chegar o documento” × “Se o documento chegar”).',
      'Opção que conjuga certo o principal e erra o auxiliar da locução.',
      'Transposição de discurso que preserva o futuro do presente no indireto (“disse que protocolará” no lugar de protocolaria).',
    ],
    relatedLessonIds: ['pt-flexao', 'pt-coordenacao-subordinacao', 'pt-pronomes', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-10'],
    synthesis:
      'Tempo e modo não são tabela para recitar: são escolha de estatuto do fato. Correlação se/então, o trio perfeito–imperfeito–mais-que-perfeito e o subjuntivo de embora/a fim de que pagam a maior parte dos itens.',
    glossary: [
      { term: 'Subjuntivo', definition: 'Modo da hipótese, do desejo, da finalidade e de certas concessões.' },
      { term: 'Prótase', definition: 'Oração condicional introduzida por se/caso (se o documento chegar).' },
      { term: 'Apódose', definition: 'Oração que enuncia a consequência da condição (o pedido seguirá).' },
      { term: 'Gerundismo', definition: 'Uso vicioso do gerúndio para marcar futuro ou cortesia esvaziada (vamos estar encaminhando).' },
    ],
    masteryCriteria: [
      'Completar período condicional com a correlação culta.',
      'Explicar a diferença de aspecto entre indeferiu e indeferia.',
      'Empregar subjuntivo após embora e a fim de que.',
      'Transpor futuro do presente em discurso indireto para futuro do pretérito.',
      'Rejeitar gerundismo como futuro da norma-padrão.',
    ],
  }),

  pt({
    id: 'pt-pontuacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-norma',
    topicId: 'pt-pontuacao',
    title: 'Pontuação',
    objective:
      'Empregar vírgula, ponto, ponto e vírgula, dois-pontos, aspas, travessão e parênteses conforme a sintaxe, reconhecendo o que é obrigatório, facultativo e proibido.',
    estimatedMinutes: 31,
    importance: pesoProva(
      'Pontuação é item de alto rendimento: poucas regras decidem muitas questões. A mais cobrada é a vírgula entre sujeito e verbo — que não se usa.',
    ),
    prerequisites: ['pt-periodo', 'pt-coordenacao-subordinacao'],
    essencial: [
      named(
        'Vírgula não é pausa de leitura em voz alta',
        'A vírgula marca estrutura, não fôlego. Proibida entre sujeito e verbo, entre verbo e objeto direto, entre nome e complemento nominal direto. Obrigatória em vocativo, apostos explicativos, intercalações (em par), enumeração de termos de mesma função, orações adverbiais deslocadas longas. Facultativa em alguns deslocamentos curtos de adjunto adverbial — e a banca adora essa zona cinzenta: se o comando pede a única pontuação correta, fuja da facultativa controversa e fique com a proibição nítida. Quem pontua “como respira” acerta por acaso e erra o item clássico do sujeito longo.',
      ),
      named(
        'As proibições que valem ponto',
        '“O setor de cadastro, arquivou o pedido.” Errado: vírgula sujeito/verbo, mesmo com sujeito longo. “O munícipe, que juntou a certidão foi atendido.” Errado: explicativa mal fechada (abriu e não fechou). “Os servidores que faltaram, foram advertidos.” Vírgula indevida se a adjetiva é restritiva — e ainda separa sujeito e verbo. “Arquivou, o pedido.” Errado: vírgula entre verbo e OD. Essas quatro imagens cobrem a maior parte do rendimento. Ache o sujeito e o verbo antes de olhar o resto.',
      ),
      named(
        'Dois-pontos, ponto e vírgula, travessão, aspas',
        'Dois-pontos anunciam enumeração, esclarecimento ou citação. Ponto e vírgula separa itens já internamente vírgulados ou orações coordenadas longas de mesmo nível — não substitui dois-pontos de anúncio. Travessão: diálogo, aposto enfático, intercalação (pode substituir vírgulas ou parênteses). Parênteses: informação acessória. Aspas: citação, destaque, distanciamento (cruzam modalizadores). Ponto final encerra período; interrogação e exclamação seguem o tipo de frase, não o “tom do ofício” inventado.',
      ),
    ],
    completo: [
      named(
        'Adjunto adverbial deslocado: curto, longo, intercalado',
        'Curto no início: vírgula facultativa (“Ontem o prazo venceu” / “Ontem, o prazo venceu”). Longo: tende a obrigatória (“No prazo de cinco dias úteis contados da publicação, o interessado deverá…”). No meio do período, intercalado, a vírgula vem em par: “O setor, após a conferência, arquivou o pedido.” Não abra sem fechar: “O setor após a conferência, arquivou” erra o par e ainda encosta no sujeito/verbo. Se o item só se decide no facultativo do adjunto curto, procure outra alternativa com erro nítido.',
      ),
      named(
        'Adjetiva, aposto e vocativo — pares que se fecham',
        'Explicativa: vírgulas (ou travessões, parênteses) em par. Restritiva: sem vírgula, e sem vírgula entre o bloco e o verbo. Aposto explicativo isola-se do mesmo modo: “Itarema, município do litoral cearense, publicou o edital.” Vocativo: “Senhora Secretária, o expediente segue.” Um lado só aberto é erro tão cobrado quanto a vírgula sujeito/verbo. A vírgula da adjetiva muda o universo dos fatos — conteúdo da lição de coordenação, marca desta.',
      ),
      named(
        'Conjunções e vírgula',
        'Mas, porém, contudo, todavia em coordenação adversativa: vírgula antes. E aditivo em regra sem vírgula, salvo sujeitos diferentes, valor adversativo ou enumeração já vírgulada. Pois explicativo (posposto): vírgula antes. Pois conclusivo intercalado: entre vírgulas. Portanto, contudo, entretanto intercalados: entre vírgulas. “O prazo venceu portanto o processo foi arquivado” sem marca é o distrator; “venceu; portanto, foi arquivado” ou “venceu, portanto foi arquivado” são as formas estáveis. Não pontue o e aditivo de enumeração simples (“receber, protocolar, e encaminhar” é controversa; em correção, prefira sem a vírgula antes do e final ou siga a alternativa inequívoca).',
      ),
      named(
        'Enumeração, dois-pontos e ponto e vírgula no expediente',
        'Dois-pontos anunciam a lista: “Fica determinado: a) …; b) …; c) ….” Ponto e vírgula separa alíneas que já têm vírgula interna. Vírgula separa termos simples de mesma função. Não use ponto e vírgula entre sujeito e verbo “para dar gravidade”. Não use dois-pontos depois de verbo que já pede o complemento sem anúncio (“Arquivou: o pedido” é falso anúncio). No ofício, o fecho “Atenciosamente,” leva vírgula de fórmula; não a copie para o meio do período.',
      ),
      named(
        'Aspas, travessão e o cruzamento com modalização',
        'Aspas de citação reproduzem trecho alheio. Aspas de distanciamento modalizam (ironia, não endosso). Travessão de aposto enfático (“O prazo — fatal — venceu”) precisa fechar se a intercalação continua. Não misture: acento grave da crase (à) não é sinal de pontuação; interrogação não “suaviza” o despacho. Se o comando pedir o valor das aspas, responda atitude; se pedir correção, cheque pares e proibições.',
      ),
      named(
        'Como o item aparece',
        '“Assinale a frase com pontuação correta.” “O emprego das vírgulas se justifica porque.” “Há erro em.” Técnica: (1) ache sujeito e verbo — vírgula entre eles, quase sempre errado; (2) cheque pares de intercalação, aposto e explicativa; (3) veja se a adjetiva restringe ou explica; (4) só então entre na zona facultativa. Não justifique vírgula sujeito/verbo com “o sujeito estava longo” nem com “eu respiraria ali”.',
      ),
    ],
    aprofundamento: [
      named(
        'Vírgula de ênfase e a zona facultativa — não as use para salvar erro nítido',
        'Isolar um termo pode ser recurso de ênfase (“Isso, ninguém nega”). Em crônica, passa; em enunciado de correção, a banca pode aceitar se a intercalação estiver bem delimitada. Não use isso para justificar vírgula entre sujeito e verbo. Adjunto curto inicial facultativo também não “salva” alternativa se outra opção tiver erro estrutural claro. Em desempate, prefira a regra nítida à zona cinzenta.',
      ),
      named(
        'O que o Anexo IV não transforma em manual de estilo',
        'Pontuação é norma-padrão da frase, não o Manual de Redação de outro órgão nem o “tom da Prefeitura”. Não há, neste programa, capítulo de pontuação de dialogação teatral. Aspas de distanciamento cruzam modalizadores; a vírgula da adjetiva cruza coordenação. Resolva o sinal aqui e o valor na lição correspondente. Não invente que a IDIB “nunca cobra ponto e vírgula”.',
      ),
    ],
    revisaoRapida: blocks(
      'Nunca: vírgula entre sujeito e verbo, ou entre verbo e OD. Sujeito longo não autoriza.',
      'Explicativa e aposto: vírgulas em par. Restritiva: sem vírgula.',
      'Intercalação: abre e fecha. Adjunto curto inicial: facultativo; longo: tende a obrigatória.',
      'Dois-pontos anunciam; ponto e vírgula separam blocos pesados; não troque um pelo outro.',
    ),
    definitions: [
      { term: 'Vocativo', definition: 'Chamamento isolado por vírgula: “Senhor prefeito, o expediente segue anexo.”' },
      { term: 'Aposto explicativo', definition: 'Esclarecimento do termo anterior, isolado por vírgulas, travessões ou parênteses.' },
      { term: 'Intercalação', definition: 'Trecho inserido no período, delimitado dos dois lados por vírgulas, travessões ou parênteses.' },
      { term: 'Vírgula proibida', definition: 'A que separa sujeito e verbo, verbo e objeto direto, ou nome e complemento nominal direto.' },
    ],
    comparisons: [
      {
        title: 'Obrigatória × proibida × facultativa',
        leftLabel: 'Faça',
        rightLabel: 'Não faça / não decida o item só nisso',
        rows: [
          { label: 'Sujeito / verbo', left: 'sem vírgula, mesmo sujeito longo', right: '“A decisão do setor, foi publicada”' },
          { label: 'Explicativa / aposto', left: 'vírgulas em par', right: 'abrir e não fechar' },
          { label: 'Restritiva', left: 'sem vírgula', right: 'vírgula “para respirar” que ainda separa sujeito e verbo' },
          { label: 'Adjunto curto inicial', left: 'facultativo', right: 'usar a facultativa como único critério de gabarito' },
        ],
      },
    ],
    examples: [
      'Certo: “O setor, após a conferência, arquivou o pedido.” Intercalação em par.',
      'Errado: “O setor após a conferência, arquivou o pedido.” Abriu a intercalação no lugar errado e separou sujeito/verbo.',
      'Certo: “Os servidores que faltaram foram advertidos.” Restritiva sem vírgula.',
      'Certo: “Fica determinado: a) receber; b) protocolar; c) encaminhar.” Dois-pontos de anúncio.',
    ],
    publicAdminExamples: [
      '“Encaminho, para análise, o processo nº 12/2026.” Adjunto intercalado em par.',
      'Ofício: “Senhora Secretária,” — vírgula de vocativo, não de sujeito. “Atenciosamente,” no fecho é fórmula, não modelo para o miolo do período.',
    ],
    procedures: [
      'Ache sujeito e verbo. Se houver vírgula entre eles, trate como erro até prova em contrário (intercalação em par).',
      'Confira se apostos, explicativas e intercalações fecham os dois lados.',
      'Pergunte se a adjetiva restringe (sem vírgula) ou explica (com par).',
      'Só então entre na zona facultativa do adjunto curto.',
      'Não troque dois-pontos de anúncio por ponto e vírgula “mais solene”.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — sujeito longo não autoriza vírgula',
        setup: '“A decisão do setor de cadastro da Secretaria de Administração, foi publicada no mural.” O item pergunta se a pontuação está correta.',
        steps: [
          'Sujeito: A decisão do setor de cadastro da Secretaria de Administração (núcleo: decisão).',
          'Verbo: foi publicada.',
          'A vírgula está entre sujeito e verbo. Sujeito longo não é intercalação.',
          'Correção: retirar a vírgula. Intercalação só valeria se houvesse termo inserido dos dois lados (“A decisão, após o recurso, foi publicada”).',
        ],
        result: 'Errado. “Respirar” depois do sujeito longo é o distrator mais rentável de pontuação.',
      },
      {
        title: 'Exemplo resolvido 2 — explicativa pela metade',
        setup: '“O munícipe, que juntou a certidão foi atendido no protocolo.”',
        steps: [
          'Há uma vírgula após munícipe, sugerindo explicativa.',
          'Explicativa exige par: deveria haver vírgula também após certidão.',
          'Se a adjetiva for restritiva (só o que juntou a certidão), as duas vírgulas saem.',
          'A forma dada mistura os dois regimes e ainda encosta no verbo.',
        ],
        result: 'Erro. Ou restrição sem vírgula, ou explicação com par completo. Um lado só é gabarito do erro.',
      },
      {
        title: 'Exercício guiado — dois-pontos no despacho',
        setup: 'Alternativa troca “Determino o seguinte: junte-se a procuração.” por “Determino o seguinte; junte-se a procuração.” e afirma equivalência de pontuação.',
        steps: [
          'Dois-pontos anunciam o conteúdo determinado.',
          'Ponto e vírgula separa orações de mesmo nível já pesadas, não anuncia.',
          'A troca muda a função do sinal.',
          'Não há equivalência só porque “os dois separam”.',
        ],
        result: 'Dois-pontos de anúncio ≠ ponto e vírgula. A solenidade do expediente não autoriza a troca.',
      },
    ],
    recallPrompts: [
      'Cite as duas proibições de vírgula que mais pagam item e um exemplo de cada.',
      'Quando a vírgula da adjetiva é obrigatória e quando é proibida?',
      'Adjunto adverbial inicial curto: obrigatório, proibido ou facultativo?',
      'O Anexo IV pede pontuação “como no Manual da Presidência”? O que pede?',
    ],
    recallAnswers: [
      'Entre sujeito e verbo (“O setor de cadastro, arquivou”) e entre verbo e OD (“Arquivou, o pedido”). Sujeito longo não autoriza a primeira.',
      'Obrigatória (em par) na explicativa; proibida na restritiva. Abrir e não fechar é erro.',
      'Facultativo. Não decida o gabarito só nessa zona se houver erro nítido em outra alternativa.',
      'Não. Pede emprego da pontuação na norma-padrão da frase (vírgula, ponto, ponto e vírgula, dois-pontos, aspas, travessão). Manual de outro órgão não é o programa de Itarema.',
    ],
    commonErrors: [
      'Pontuar como se respira, sobretudo após sujeito longo.',
      'Fechar só um lado do aposto, da explicativa ou da intercalação.',
      'Pôr vírgula na restritiva e mudar o universo dos fatos.',
      'Trocar dois-pontos de anúncio por ponto e vírgula “mais solene”.',
      'Separar verbo e objeto direto com vírgula de ênfase inventada.',
    ],
    traps: [
      'Vírgula “elegante” após sujeito longo (“A decisão do setor de cadastro da Secretaria X, foi publicada”).',
      'Ponto e vírgula no lugar de dois-pontos de anúncio.',
      'Item que só se decide no facultativo do adjunto curto, ao lado de alternativa com erro nítido — a nítida é o caminho.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-coordenacao-subordinacao', 'pt-construcao-frasal', 'pt-modalizadores'],
    relatedEditalItems: ['ed-pt-11'],
    synthesis:
      'Pontuação de concurso é mapa sintático. Decore as proibições (sujeito/verbo, verbo/OD) e os pares (aposto, intercalação, explicativa). Pausa de fala não é regra; sujeito longo não autoriza vírgula.',
    glossary: [
      { term: 'Intercalação', definition: 'Trecho inserido no período, delimitado dos dois lados.' },
      { term: 'Enumeração', definition: 'Lista de termos de mesma função, em geral separados por vírgula ou, se já vírgulados, por ponto e vírgula.' },
      { term: 'Dois-pontos', definition: 'Sinal de anúncio: enumeração, esclarecimento ou citação.' },
      { term: 'Ponto e vírgula', definition: 'Sinal que separa blocos de mesmo nível já internamente vírgulados ou orações coordenadas longas.' },
    ],
    masteryCriteria: [
      'Rejeitar de imediato vírgula entre sujeito e verbo.',
      'Pontuar adjetiva conforme restrinja ou explique.',
      'Fechar intercalações e apostos dos dois lados.',
      'Distinguir dois-pontos de anúncio e ponto e vírgula de separação.',
      'Não decidir o gabarito só pela vírgula facultativa do adjunto curto.',
    ],
  }),

  pt({
    id: 'pt-concordancia',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-concordancia',
    title: 'Concordância nominal e verbal',
    objective:
      'Fazer o verbo concordar com o sujeito e o nome com o termo determinado, incluindo os casos especiais mais cobrados em prova de nível médio.',
    estimatedMinutes: 34,
    importance: pesoProva(
      'Concordância é ponto quase certo para quem treina os casos. A banca esconde o sujeito, interpola adjunto e testa o se apassivador.',
    ),
    prerequisites: ['pt-periodo', 'pt-flexao', 'pt-classes'],
    essencial: [
      named(
        'Regra-mãe da verbal',
        'O verbo concorda em número e pessoa com o núcleo do sujeito — não com o termo mais próximo, não com o adjunto interpolado, não com o vocativo. Ache o sujeito primeiro (lição de período). “Faltam dois documentos no processo” (sujeito: dois documentos). “Existe, no arquivo, cópias” está errado: existem cópias. “O resultado das análises foram publicado” concorda com análises por distração: o núcleo é resultado → foi publicado. Interpolação é a armadilha número um.',
      ),
      named(
        'Regra-mãe da nominal',
        'O adjetivo concorda com o substantivo a que se refere. Com dois substantivos, pode ir ao plural ou ficar com o mais próximo, conforme a posição: “processo e certidão anexos” / “certidão e processo anexo”. É / são de: “É proibida entrada” (sem artigo, o adjetivo pode ficar invariável em algumas descrições escolares — na prática de prova média, “É proibido entrada” / “É proibida a entrada”: com artigo, o adjetivo concorda). Anexo, incluso, quite, obrigado: flexão a serviço desta regra. “Seguem anexas as certidões.”',
      ),
      named(
        'Sujeito após o verbo, oculto e oracional',
        'Inversão não muda a concordância. “Deve constar no processo as guias” — errado; devem constar as guias. Sujeito oculto recupera o antecedente (“O setor protocolou e Ø encaminhou” — encaminhou no singular). Sujeito oracional: verbo da principal na 3ª pessoa do singular (“Convém que se junte a certidão”; “É necessário juntar as peças” — é necessário permanece singular). Quem pluraliza o principal porque viu peças no infinitivo errou o mapa.',
      ),
    ],
    completo: [
      named(
        'Haver, fazer, existir, ser',
        'Haver de existir/ocorrer: impessoal, singular (“Houve falhas”; “Havia documentos”). Fazer de tempo/clima: impessoal (“Faz dois anos”; “Fez tardes quentes” no sentido de tempo decorrido fica no singular). Existir é pessoal: existiram falhas, existem cópias. Ser com predicativo: pode concordar com o predicativo (“Aos servidores são necessárias orientações”). Ser de horas: “É uma hora” / “São duas horas”. O par haver × existir no mesmo item é o presente da banca.',
      ),
      named(
        'Se apassivador e se de indeterminação',
        'Apassivador: há objeto direto na ativa correspondente; o paciente vira sujeito; o verbo concorda com ele (“Vendem-se certidões”; “Encaminharam-se as cópias”). Indeterminação (verbo intransitivo ou transitivo indireto): 3ª pessoa do singular (“Precisa-se de servidores”; “Vive-se bem”; “Trata-se de prazo fatal”). “Encaminha-se as cópias” erra o apassivador. “Precisam-se de servidores” erra a indeterminação. Esse par é o ouro da prova média e reaparece em equivalência de voz.',
      ),
      named(
        'Porcentagem, coletivo, relativo, um e outro',
        'Porcentagem: concorda com o numeral ou com o substantivo seguinte (“1% dos servidores faltou/faltaram”; “1% faltou” — sem o substantivo, o numeral manda). Coletivo: singular, salvo coletivo especificado (“A maioria concordou”; “A maioria dos servidores concordou/concordaram”). Que/quem: o verbo pode seguir o antecedente ou a 3ª singular, conforme a construção — leia o período inteiro. Um e outro / nem um nem outro: há variação nas gramáticas; em prova, prefira a alternativa inequívoca e fuja da polêmica se houver opção clara.',
      ),
      named(
        'Nominal: anexo, incluso, quite, é proibido, mesmo, próprio',
        'Anexos/anexas, inclusos/inclusas concordam com o substantivo. Quite: quites no plural. Mesmo/próprio concordam (“os próprios servidores”; “elas mesmas”). “É proibido estacionar” (infinitivo, invariável) × “É proibida a entrada” (com artigo, concorda). Meio advérbio não flexiona (“porta meio aberta”); meio numeral sim (“meia hora”). Isso cruza flexão e classes; aqui o ponto é a combinação com o termo determinado.',
      ),
      named(
        'Verbos compostos, locuções e o auxiliar que manda',
        'Na locução, o auxiliar concorda com o sujeito; o principal fica na forma nominal (“Os ofícios foram arquivados”; “Os munícipes haviam protocolado”). “Deve constar as guias” erra o auxiliar. Com um e outro auxiliar (deve, precisa, pode) + infinitivo, o infinito não “puxa” o plural se o sujeito está depois do infinitivo de forma enganosa — volte ao núcleo. Sujeito composto anteposto: plural (“O ofício e a certidão seguiram”). Sujeito composto posposto: plural ou concordância com o mais próximo, em algumas descrições; a alternativa sem polêmica é o plural.',
      ),
      named(
        'Como o item aparece',
        '“Há erro de concordância em.” “O verbo destacado concorda com.” Técnica: (1) ignore o adjunto interpolado; (2) sublinhe o núcleo do sujeito; (3) teste se há se apassivador (concorda com o paciente) ou se de indeterminação (singular); (4) haver/fazer impessoais no singular; existir no plural se o ente estiver no plural. Não cite “o gabarito típico da IDIB”: aplique a regra no período dado.',
      ),
    ],
    aprofundamento: [
      named(
        'Silepse — só quando o comando autoriza',
        'Silepse concorda com a ideia, não com a forma (“Vossa Excelência está cansado”; “A gente fomos”, neste último caso, coloquial demais para o ofício). Em prova média, só marque silepse se o comando a autorizar ou se for construção cristalizada de tratamento. Fora isso, siga a forma. Não é item separado do Anexo IV; é caso especial de concordância. Não use silepse para “salvar” O resultado das análises foram.',
      ),
      named(
        'O que esta linha não pede',
        'Concordância nominal e verbal não é flexão (a forma isolada) nem período (o mapa), embora os use. Não pede tratado de todas as polêmicas (um e outro, porcentagem) como se houvesse gabarito oficial único da IDIB. Quando houver duas formas aceitas, a alternativa inequívoca vence. Manual de outro órgão não define a concordância de Itarema. Haver de existência no singular é norma-padrão, não “estilo da Prefeitura”.',
      ),
    ],
    revisaoRapida: blocks(
      'Sujeito primeiro, verbo depois. Adjunto no meio não manda. Núcleo, não o mais próximo.',
      'Houve problemas. Faz anos. Existem cópias. É uma hora / São duas horas.',
      'Vendem-se certidões (apassivador, concorda). Precisa-se de servidores (indeterminação, singular).',
      'É proibido estacionar / É proibida a entrada. Seguem anexas as certidões.',
    ),
    definitions: [
      { term: 'Núcleo do sujeito', definition: 'Substantivo (ou equivalente) com o qual o verbo concorda.' },
      { term: 'Partícula apassivadora', definition: 'Se que torna o objeto da ativa sujeito da passiva sintética; o verbo concorda com esse sujeito.' },
      { term: 'Índice de indeterminação', definition: 'Se com verbo intransitivo ou transitivo indireto, 3ª pessoa do singular (precisa-se de).' },
      { term: 'Verbo impessoal', definition: 'Verbo sem sujeito, na 3ª singular: haver existência, fazer tempo.' },
    ],
    comparisons: [
      {
        title: 'Haver × existir e se apassivador × se indeterminador',
        leftLabel: 'Singular / invariável',
        rightLabel: 'Concorda com o ente / paciente',
        rows: [
          { label: 'Existência', left: 'Houve falhas (haver impessoal)', right: 'Existiram falhas (existir pessoal)' },
          { label: 'Se + VTD', left: '—', right: 'Vendem-se certidões / Encaminharam-se as cópias' },
          { label: 'Se + VTI/VI', left: 'Precisa-se de servidores; Vive-se bem', right: '— (plural é erro)' },
          { label: 'Tempo', left: 'Faz dois anos', right: '— (fazem é erro neste valor)' },
        ],
      },
    ],
    examples: [
      '“Faltam, na pasta, as guias.” Núcleo: guias. A interpolação na pasta não manda.',
      '“Um e outro assinaram” / “Nem um nem outro assinaram/assinou” — variação; em prova, prefira a alternativa inequívoca.',
      '“É necessário, para o andamento, juntar as peças.” É necessário singular; peças não é sujeito de é.',
      '“1% dos servidores faltou/faltaram” — duas concordâncias possíveis; “1% faltaram” sem o substantivo é frágil.',
    ],
    publicAdminExamples: [
      '“Encaminha-se as cópias” — errado. Encaminham-se as cópias (apassivador + paciente no plural).',
      '“Fazem dois meses que o ofício chegou” — errado. Faz dois meses (fazer de tempo, impessoal).',
    ],
    procedures: [
      'Ignore vocativo e adjunto interpolado. Sublinhe o núcleo do sujeito.',
      'Confira inversão: o sujeito posposto continua mandando.',
      'Se houver se, teste transitividade: VTD → apassivador (concorda); VTI/VI → indeterminação (singular).',
      'Haver existência e fazer tempo: singular. Existir: pessoal.',
      'Na nominal, ache o substantivo determinado (anexas/certidões; proibida/a entrada).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — interpolação',
        setup: '“O resultado das análises do setor de cadastro foram publicados no mural.” Onde está o erro?',
        steps: [
          'Núcleo do sujeito: resultado (singular), não análises nem cadastro.',
          'O verbo e o particípio concordam com o núcleo: foi publicado.',
          'Das análises do setor de cadastro é adjunto que interpola e induz o plural.',
          'Correção: “O resultado das análises do setor de cadastro foi publicado no mural.”',
        ],
        result: 'Adjunto no meio não manda. Caça ao núcleo, não ao substantivo mais próximo do verbo.',
      },
      {
        title: 'Exemplo resolvido 2 — se no expediente',
        setup: 'Duas frases: (A) “Encaminha-se as certidões.” (B) “Precisam-se de servidores no protocolo.”',
        steps: [
          'A: encaminhar é VTD; as certidões são paciente → se apassivador → Encaminham-se as certidões.',
          'B: precisar de é VTI → se de indeterminação → Precisa-se de servidores.',
          'Os dois erros são simétricos: A não concordou com o paciente; B pluralizou a indeterminação.',
          'O par no mesmo item é o ouro da prova média.',
        ],
        result: 'Apassivador concorda; indeterminador fica no singular. Transitividade decide.',
      },
      {
        title: 'Exercício guiado — houve × existiram',
        setup: 'Lacuna: “_____ falhas no cadastro, embora já _____ cópias no arquivo.” Opções misturam houve/houveram e existiu/existiram.',
        steps: [
          'Primeira: haver existência → impessoal: Houve falhas (nunca houveram neste valor).',
          'Segunda: existir é pessoal e o ente cópias está no plural → existiam/existiram cópias.',
          'Houveram e existiu (com cópias) são os distratores cruzados.',
          'O embora é enredo concessivo; não muda a impessoalidade.',
        ],
        result: 'Houve falhas / existiam (ou existiram) cópias. O verbo de existência não é um só.',
      },
    ],
    recallPrompts: [
      'Como achar o termo que manda na concordância verbal quando há adjunto interpolado?',
      'Diferença prática entre “vendem-se certidões” e “precisa-se de servidores”.',
      'Haver × existir: quem é impessoal?',
      'O que o Anexo IV pede nesta linha — e o que fica para flexão e para período?',
    ],
    recallAnswers: [
      'Sublinhar o núcleo do sujeito e ignorar o adjunto interpolado. O verbo concorda com o núcleo, não com o mais próximo.',
      'Vendem-se: se apassivador, VTD, verbo concorda com o paciente (certidões). Precisa-se de: se de indeterminação, VTI, singular.',
      'Haver de existência/ocorrência é impessoal (houve). Existir é pessoal (existiram falhas).',
      'Pede combinar verbo com sujeito e nome com o termo determinado. Flexão é a forma isolada; período é o mapa para achar o núcleo.',
    ],
    commonErrors: [
      'Concordar com o adjunto interpolado (“O resultado das análises foram”).',
      'Pluralizar haver de existência (“houveram falhas”).',
      'Deixar o apassivador no singular com paciente no plural (“encaminha-se as cópias”).',
      'Pluralizar o se de indeterminação (“precisam-se de”).',
      'Pluralizar é necessário porque o infinitivo traz um substantivo no plural.',
    ],
    traps: [
      'Sujeito oracional disfarçado (“É necessário, para o andamento, que se juntem as peças” — é necessário permanece singular).',
      'Porcentagem com substantivo no plural: duas concordâncias possíveis; a alternativa que mistura “1% faltaram” sem o substantivo pode ser frágil.',
      'Deve constar as guias: o auxiliar não concordou com o sujeito posposto.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-regencia', 'pt-equivalencia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-12'],
    synthesis:
      'Concordância é caça ao núcleo. Interpolação, inversão e se são as três armadilhas; haver/fazer impessoais e o par apassivador × indeterminador são o rendimento imediato.',
    glossary: [
      { term: 'Impessoalidade verbal', definition: 'Verbo sem sujeito, na 3ª pessoa do singular (haver existência, fazer tempo).' },
      { term: 'Silepse', definition: 'Concordância com o sentido, não com a forma gramatical.' },
      { term: 'Núcleo', definition: 'Palavra do sujeito ou do SN com a qual se faz a concordância, desprezados os adjuntos.' },
      { term: 'Coletivo especificado', definition: 'Coletivo seguido de de + plural, que admite concordância com o coletivo ou com o especificado.' },
    ],
    masteryCriteria: [
      'Localizar o núcleo do sujeito em frase invertida com adjunto interpolado.',
      'Distinguir se apassivador de índice de indeterminação.',
      'Empregar haver e fazer impessoais no singular.',
      'Concordar anexo/incluso/é proibida com o substantivo determinado.',
      'Manter o verbo da principal no singular com sujeito oracional.',
    ],
  }),

  pt({
    id: 'pt-regencia',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-regencia',
    title: 'Regência nominal e verbal (e crase)',
    objective:
      'Empregar a preposição exigida pelo nome ou pelo verbo, perceber mudança de sentido conforme a regência e aplicar a crase como encontro a + a, ainda que a crase não seja linha autônoma do edital.',
    estimatedMinutes: 34,
    importance: pesoProva(
      'O Anexo IV lista “regência nominal e verbal”, não “crase” à parte. Mesmo assim, itens de nível médio resolvem-se com crase, porque crase é, na prática, regência visível. Estude-a como ferramenta deste tópico, não como capítulo inventado no programa.',
    ),
    prerequisites: ['pt-periodo', 'pt-classes', 'pt-pronomes'],
    essencial: [
      named(
        'Regência é exigência de complemento',
        'O termo regente pede certo regime: assistir o doente (cuidar, VTD) × assistir ao jogo (ver, VTI); visar o alvo × visar ao cargo; custar (impessoal) + a + alguém: “Custou ao servidor aceitar.” Errar a preposição erra o sentido ou a norma. Nomes também regem: respeito a, aversão a, apto a, paralelamente a.',
      ),
      named(
        'Crase não é linha do edital — e mesmo assim cai',
        'Crase é a fusão da preposição a (pedida pelo regente) com o artigo a/as ou com o a inicial de pronomes (àquela, àquelas). Por isso pertence a este tópico. Teste prático: troque o termo feminino por um masculino. Se aparecer ao, há crase: “Foi à secretaria” (foi ao setor). Se aparecer só a, não há: “Foi a Itarema” (cidade sem artigo, em regra).',
      ),
      named(
        'Casos de crase que pagam item',
        'Obrigatória: preposição a + artigo a diante de feminino determinado (“às 8h”, “à Prefeitura”, “à medida que”). Proibida: diante de masculino, verbo, pronome indefinido no geral, nomes de cidade usados sem artigo, pronomes pessoais. Facultativa: nomes próprios femininos, pronomes possessivos femininos, até (à) + feminino. A banca de nível médio prefere o obrigatório e o proibido; desconfie de item que só se decide no facultativo se houver opção mais limpa.',
      ),
    ],
    completo: [
      named(
        'Verbos que mudam com a preposição',
        'Querer o filho (amar) × querer ao filho (querer bem, construção clássica). Aspirar o ar × aspirar ao cargo. Proceder o inquérito (realizar, em alguns registros) × proceder a (dar início). Prefira o par estável de prova: assistir a (espetáculo), visar a (objetivo), obedecer a, implicitamente a. “Informar alguém de algo” / “informar algo a alguém”.',
      ),
      named(
        'Regência nominal frequente',
        'Preferência por, idoneidade para, incompatível com, favorável a, contrário a, relativo a, equivalente a. A crase reaparece: “equivalente à certidão anterior”. Sem a preposição, não há crase: “a certidão equivalente”.',
      ),
      named(
        'Como o item aparece',
        'Lacuna com a/à/as/às; “o a em destaque indica”; substituição de verbo com preposição. Técnica da troca pelo masculino. Segunda técnica: se não há preposição a, não há crase, ponto.',
      ),
      named(
        'O teste da troca pelo masculino — e quando ele não basta',
        'Foi à secretaria porque foi ao setor. Destina-se à Secretaria porque destina-se ao órgão. Se a troca der só a (não ao), não há crase: foi a Itarema (foi a Fortaleza, em regra, sem artigo). O teste falha se você “inventar” o artigo no masculino. Segunda âncora: sem preposição a pedida pelo regente, não há crase — a certidão (sujeito) não leva grave. Terceira: a partir de, a prazo, a pé — sem crase. A banca de nível médio prefere o obrigatório e o proibido; o facultativo (até à / até a; possessivo) não deve decidir o item se houver opção limpa.',
      ),
      named(
        'Pagar, obedecer, assistir, visar, informar, implicar',
        'Pagar/perdoar: VTD da coisa, VTI da pessoa (pagar o débito; pagar ao munícipe; perdoar a dívida; perdoar ao servidor). Obedecer a (sempre VTI na norma tradicional): obedecer à ordem. Assistir o (cuidar) × assistir a (presenciar): assistiu ao ato; assistiu à solenidade. Visar o alvo × visar ao cargo. Informar alguém de algo / informar algo a alguém. Implicar, no sentido de acarretar, é VTD (implicou atraso) — implicar com é outro sentido. Esses pares mudam crase e sentido ao mesmo tempo.',
      ),
      named(
        'Proibições que pagam item: a partir de, a prazo, a Itarema',
        'A partir de nunca tem crase (partir é verbo; não há artigo a). À prazo / à toa? A prazo (masculino) sem crase; à toa (locução feminina) com crase. Fui a Itarema, em regra, sem artigo — sem crase. Fui à Bahia, no uso com artigo. Às 8h (hora determinada, feminino). À Prefeitura, à Secretaria, à sessão. “À Prefeitura” passa no teste (ao órgão). Não use o acento agudo no lugar do grave (á Prefeitura): isso é acentuação, sinal errado.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: crase em locuções',
        'Locuções adverbiais, prepositivas e conjuntivas femininas: às pressas, à noite, à frente de, à procura de, à medida que. Exceção frequente em listas didáticas: locuções com palavras masculinas (a pé, a esmo). “À frente” tem crase porque frente é feminino. Isso continua sendo regência/crase, não tópico extra do Anexo IV.',
      ),
      named(
        'O que não inventar',
        'Não afirme que o edital “cobra crase como item 21”. Não cobra. Afirme: para resolver regência, você precisa da crase. É honestidade com o programa e eficiência com a prova.',
      ),
    ],
    revisaoRapida: blocks(
      'Troque o feminino por masculino: se der ao, use à.',
      'Sem preposição a, não há crase.',
      'Assistir ao ato; visar ao cargo; obedecer à ordem; custou-lhe aceitar.',
      'Às 8h; à Prefeitura; a Itarema (em regra); a partir de (sem crase).',
    ),
    definitions: [
      { term: 'Regência', definition: 'Relação de exigência entre o termo regente e seu complemento, com ou sem preposição.' },
      { term: 'Crase', definition: 'Fusão da preposição a com o artigo a/as (ou com a de àquele etc.), marcada por acento grave.' },
      { term: 'Termo regente', definition: 'Nome ou verbo que exige determinado complemento.' },
      { term: 'Teste do masculino', definition: 'Troca do feminino por um masculino: se aparecer ao, há crase; se aparecer só a, não há.' },
    ],
    comparisons: [
      {
        title: 'Assistir',
        leftLabel: 'VTD (cuidar)',
        rightLabel: 'VTI (ver/presenciar)',
        rows: [
          { label: 'Exemplo', left: 'O médico assistiu o paciente', right: 'O servidor assistiu ao ato de posse' },
          { label: 'Crase', left: 'Não cabe (não há a preposição)', right: 'Assistiu à solenidade' },
        ],
      },
    ],
    examples: [
      '“O ofício destina-se à Secretaria de Administração.” Destinar-se a + a Secretaria.',
      '“Refiro-me a atas antigas.” Sem artigo, sem crase. “Refiro-me às atas antigas.” Com artigo, crase.',
      'Assistir ao ato / à solenidade. Visar ao cargo. Obedecer à ordem. Custou ao servidor aceitar.',
      'A partir de (sem crase). A prazo (sem crase). Às 8h (com crase). Fui a Itarema (em regra, sem crase).',
    ],
    publicAdminExamples: [
      '“Compareça à sessão da Câmara.” Sessão feminina determinada.',
      '“O recurso não procede.” Proceder intransitivo (ter fundamento). “Proceder à apuração.” VTI = iniciar.',
    ],
    procedures: [
      'Identifique o regente (verbo ou nome) e a preposição que ele pede.',
      'Se a preposição não for a, não há crase.',
      'Se for a, troque o feminino por um masculino: ao → à; só a → sem crase.',
      'Risque à partir de, à prazo, à Itarema (uso sem artigo).',
      'Não use agudo (á) no lugar do grave (à).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — teste do masculino no ofício',
        setup: 'Lacuna: “O ofício destina-se ___ Secretaria de Administração.” Opções: a / à / as / às.',
        steps: [
          'Destinar-se pede a (VTI). Há preposição a.',
          'Secretaria é feminino determinado (artigo implícito na troca).',
          'Troca: destina-se ao órgão → há ao → crase: à Secretaria.',
          'Às exigiria plural (às Secretarias). A sozinho omitiria o artigo que o teste revelou.',
        ],
        result: 'à Secretaria. Crase = preposição a + artigo a, visível pelo ao do masculino.',
      },
      {
        title: 'Exemplo resolvido 2 — a partir de',
        setup: 'Despacho: “À partir de segunda-feira, o protocolo abre às 8h.” O item pede o erro de crase.',
        steps: [
          'A partir de: a + infinitivo partir. Não há artigo a. Crase proibida.',
          'Às 8h: locução feminina de hora determinada — crase obrigatória.',
          'O erro está só na primeira: À partir. A segunda está correta.',
          'Não “salve” a partir de por analogia com às 8h.',
        ],
        result: 'Corrigir para A partir de segunda-feira, o protocolo abre às 8h. Duas crases no mesmo período, só uma é certa.',
      },
      {
        title: 'Exercício guiado — assistir no ato de posse',
        setup: '“O servidor assistiu ___ solenidade de posse.” Cuidar ou presenciar?',
        steps: [
          'No expediente, assistir à solenidade = presenciar (VTI).',
          'VTI pede a; solenidade feminina determinada → à.',
          'Assistir o (sem preposição) seria cuidar do paciente — sentido outro.',
          'Sem crase aqui mudaria o regime e o sentido, ou cairia a norma.',
        ],
        result: 'assistiu à solenidade. Regime e crase nascem juntos.',
      },
    ],
    recallPrompts: [
      'Enuncie o teste da troca pelo masculino.',
      'Por que não há crase em a partir de nem em a Itarema (uso sem artigo)?',
      'Dê o par assistir e o par visar com preposição.',
      'O Anexo IV lista crase como item autônomo? Onde ela entra?',
    ],
    recallAnswers: [
      'Troque o feminino por um masculino. Se aparecer ao, use à; se aparecer só a, não há crase.',
      'A partir de: a + verbo, sem artigo. A Itarema: cidade em regra sem artigo, logo sem fusão a+a.',
      'Assistir o doente (cuidar) × assistir ao ato / à solenidade (ver). Visar o alvo × visar ao cargo.',
      'Não lista crase à parte. Lista regência nominal e verbal; crase é a fusão visível da preposição a com o artigo a — ferramenta deste tópico.',
    ],
    commonErrors: [
      'Marcar crase diante de masculino (“à prazo”).',
      'Esquecer a preposição de obedecer/pagar/assistir.',
      'Grafar à partir de.',
      'Usar acento agudo no lugar do grave (á Prefeitura).',
    ],
    traps: [
      'A partir de com crase inventada (“à partir de”).',
      'Cidade: fui a Itarema × fui à Bahia (com artigo no uso corrente).',
      'Parônimo de regência: implicar (VTD, no sentido de acarretar) × implicar com (provocar).',
    ],
    relatedLessonIds: ['pt-concordancia', 'pt-pronomes', 'pt-acentuacao', 'pt-periodo'],
    relatedEditalItems: ['ed-pt-13'],
    synthesis:
      'Regência escolhe a preposição; a crase só aparece se essa preposição for a e se houver artigo a. Estude crase aqui, porque o edital não a isolou — e a prova não vai avisá-lo disso.',
    glossary: [
      { term: 'Termo regente', definition: 'Nome ou verbo que exige determinado complemento.' },
      { term: 'Acento grave', definition: 'Sinal da crase (à), distinto do agudo (á) da acentuação tônica.' },
      { term: 'Locução feminina', definition: 'Expressão com núcleo feminino que, com preposição a, leva crase (às pressas, à noite, à medida que).' },
      { term: 'Artigo definido', definition: 'O/a/os/as; na crase, o a/as é metade do encontro com a preposição a.' },
    ],
    masteryCriteria: [
      'Aplicar o teste da troca pelo masculino.',
      'Listar pelo menos seis verbos de regência instável (assistir, visar, aspirar, obedecer, pagar, informar).',
      'Recusar crase em a partir de, a prazo, a Itarema (uso sem artigo).',
      'Distinguir proceder (ter fundamento) de proceder a (iniciar).',
      'Não grafar á no lugar de à.',
    ],
  }),

  pt({
    id: 'pt-pronomes',
    areaId: DISCIPLINE,
    chapterId: 'pt-morfologia',
    topicId: 'pt-pronomes',
    title: 'Pronomes: emprego, tratamento e colocação',
    objective:
      'Empregar pronomes pessoais, possessivos, relativos e de tratamento na norma-padrão, com colocação (próclise, ênclise, mesóclise) e com o registro da correspondência oficial.',
    estimatedMinutes: 33,
    importance: pesoProva(
      'O edital une emprego, formas de tratamento e colocação. No cargo de Agente Administrativo isso se cruza com redação oficial — mas, em Português, a cobrança é gramatical: lhe/o, cujo, Vossa Senhoria concorda em 3ª pessoa.',
    ),
    prerequisites: ['pt-classes', 'pt-articulacao'],
    essencial: [
      named(
        'Retos, oblíquos, de tratamento',
        'Retos em sujeito (eu, tu, ele, nós, vós, eles). Oblíquos átonos (me, te, se, lhe, o, a, nos, vos, os, as) e tônicos (mim, ti, si, ele, comigo…). Lhe = objeto indireto (a ele). O/a = objeto direto. “Informei-lhe o prazo” (OI) × “Informei-o do prazo” (OD de pessoa). Trocar lhe por o é um dos erros mais cobrados.',
      ),
      named(
        'Colocação: próclise, ênclise, mesóclise',
        'Próclise (pronome antes) com atração: negação, relativos, indefinidos, interrogativos, alguns advérbios, conjunções subordinativas (“não se admite”; “o ofício que se extraviou”). Ênclise (depois) é a posição da norma quando não há atração, especialmente no início absoluto (“Encaminhe-se”). Mesóclise (no meio do futuro/futuro do pretérito) é formal e rara: “encaminhar-se-á”. Nunca inicie período por pronome átono na norma-padrão escrita (“Se encaminhou” no início está errado).',
      ),
      named(
        'Tratamento oficial',
        'Vossa Excelência / Vossa Senhoria: o verbo vai para a 3ª pessoa (“Vossa Senhoria recebeu”). O possessivo é sua, não vossa, quando se refere ao destinatário (“solicito a Vossa Senhoria que envie o seu documento”). O Manual de Redação da Presidência é referência didática; o edital de Português não o nomeia, mas pede as formas de tratamento.',
      ),
    ],
    completo: [
      named(
        'Relativos: que, qual, quem, cujo, onde',
        'Cujo concorda com o possuído, não com o possuidor, e não admite artigo depois (“processo cujo prazo”, nunca “cujo o prazo”). Onde = lugar físico; em que / no qual para lugar figurado (“processo em que se discute”). Quem preposicionado: “o servidor a quem se destinou”.',
      ),
      named(
        'Pronome e regência',
        'Verbo com preposição pede lhe ou pronome tônico preposicionado: “obedeci-lhe”; “obedeci a ele”. Verbo transitivo direto pede o/a: “o setor o convocou”. “Assisti-o” (cuidar) × “assisti a ele / assisti-lhe” em construções de VTI — prefira “assisti ao ato” para não entrar em zona polêmica.',
      ),
      named(
        'Como o item aparece',
        'Colocação em lacuna; cujo; lhe/o; Vossa Senhoria + verbo. Técnica: circule o atrator de próclise; se o período começa com verbo no infinitivo flexionado de fórmula (“Solicite-se”), ênclise.',
      ),
      named(
        'Atratores de próclise que a prova esconde no meio do ofício',
        'Negação (não, nunca, jamais, nem), relativos (que, quem, cujo, o qual), indefinidos (alguém, ninguém, tudo, nada), interrogativos, certos advérbios (já, sempre, talvez), conjunções subordinativas. “Não se admite recurso intempestivo.” “O ofício que se extraviou.” O atrator pode estar “longe” do verbo na leitura apressada; mesmo assim puxa o pronome. Sem atrator, a norma-padrão escrita prefere ênclise, sobretudo no início absoluto: Encaminhe-se. Nunca: Me encaminhe / Se encaminhou (início).',
      ),
      named(
        'Tratamento: 3ª pessoa, possessivo seu, verbo do remetente',
        'Vossa Senhoria / Vossa Excelência combinam com verbo em 3ª pessoa: Vossa Senhoria recebeu, não recebestes. Possessivo do destinatário: seu/sua, não vosso. O verbo do remetente não “contagia”: “Encaminho a Vossa Senhoria cópia” — encaminho é 1ª pessoa do eu. O Manual de Redação da Presidência é só referência didática; o Anexo IV de Português não o nomeia. O que pede são as formas de tratamento na norma-padrão, não o modelo de ofício de outro órgão como se fosse Itarema.',
      ),
      named(
        'Cujo, onde e o que não se mistura',
        'Cujo = posse; concorda com o possuído; sem artigo depois (cujo prazo, nunca cujo o prazo). Onde = lugar físico; processo em que / no qual para figurado. Que relativo não leva artigo grudado (o que, em alguns usos, é outra construção). Quem preposicionado: o servidor a quem se destinou o ofício. Esses relativos cruzam articulação (referente) e esta lição (forma). Responda a pergunta do comando: referente ou colocação/emprego?',
      ),
    ],
    aprofundamento: [
      named(
        'Se, o e a lo/no — detalhe tradicional, não capítulo extra',
        'O/a após verbo terminado em r, s, z vira-lo/-la (encaminhá-lo, fizemo-lo). Após som nasal, -no/-na (põem-no, têm-na). É detalhe de prova mais tradicional; se aparecer, aplique. Não transforme em linha autônoma do Anexo IV. Mesóclise (encaminhar-se-á) é formal e rara; só a use se o item a cobrir. No expediente cotidiano da prova média, próclise com atrator e ênclise de início resolvem quase tudo.',
      ),
      named(
        'O que o edital une — e o que não copiar de outro órgão',
        'O programa une emprego, formas de tratamento e colocação. Não pede o Manual da Presidência pelo número, não pede vocativo de embaixada e não substitui a lição de articulação (referente). Quando o ofício de Itarema aparecer no texto-base, aplique a gramática: 3ª pessoa, seu/sua, próclise com não. Não afirme que “a IDIB cobra mesóclise em todo caderno”.',
      ),
    ],
    revisaoRapida: blocks(
      'Lhe = indireto. O/a = direto.',
      'Atrator → próclise. Início de período → ênclise (norma-padrão).',
      'Cujo: sem artigo depois; concorda com o possuído.',
      'Vossa Senhoria + 3ª pessoa; possessivo seu/sua.',
    ),
    definitions: [
      { term: 'Próclise', definition: 'Pronome átono antes do verbo, puxado por atrator.' },
      { term: 'Ênclise', definition: 'Pronome átono depois do verbo.' },
      { term: 'Cujo', definition: 'Relativo de posse; concorda com o termo seguinte (o possuído).' },
      { term: 'Forma de tratamento', definition: 'Pronome de respeito (Vossa Senhoria, Vossa Excelência) que pede verbo em 3ª pessoa e possessivo seu/sua.' },
    ],
    comparisons: [
      {
        title: 'Lhe × o/a e próclise × ênclise',
        leftLabel: 'Use',
        rightLabel: 'Não use',
        rows: [
          { label: 'Objeto', left: 'lhe = indireto (obedeci-lhe); o/a = direto (o convocou)', right: 'o chefe lhe convocou (lhe como OD)' },
          { label: 'Colocação', left: 'não se admite; Encaminhe-se (início)', right: 'Me encaminhe / Se encaminhou no início' },
          { label: 'Cujo', left: 'processo cujo prazo', right: 'cujo o prazo' },
          { label: 'Tratamento', left: 'Vossa Senhoria recebeu; o seu documento', right: 'recebestes; vosso documento (do destinatário)' },
        ],
      },
    ],
    examples: [
      '“Não se arquive o original.” Próclise pela negação.',
      '“O prazo cujo vencimento se aproxima.” Cujo + possuído, sem artigo.',
      '“Encaminhá-lo ao setor.” -lo após r. “Põem-no no arquivo.” -no após nasal.',
      '“O ofício que se extraviou.” Próclise pelo relativo.',
    ],
    publicAdminExamples: [
      '“Encaminho a Vossa Senhoria cópia do despacho.” Verbo em 1ª (eu encaminho); o tratamento do destinatário não “contagia” o verbo do remetente.',
      '“Solicito que Vossa Excelência determine o cumprimento.” 3ª pessoa no verbo do destinatário.',
    ],
    procedures: [
      'Decida lhe (OI) ou o/a (OD) pela transitividade.',
      'Circule atrator (não, que, nunca, já, cujo…). Se houver, próclise.',
      'Se o período começa por verbo e não há atrator, ênclise na norma-padrão escrita.',
      'Cujo: concorda com o possuído; risque o artigo seguinte.',
      'Vossa Senhoria + 3ª pessoa; possessivo seu; verbo do remetente na pessoa do eu.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — lhe no lugar de o',
        setup: '“O chefe lhe convocou para a sessão.” O item pergunta o erro de emprego.',
        steps: [
          'Convocar é VTD: convocar alguém.',
          'Objeto direto de pessoa pede o/a: o convocou / convocou-o.',
          'Lhe seria OI (a ele), típico de obedecer, informar (algo) a alguém.',
          'Correção: “O chefe o convocou para a sessão.”',
        ],
        result: 'Lhe ≠ o. Transitividade manda. Este é um dos erros mais cobrados da linha.',
      },
      {
        title: 'Exemplo resolvido 2 — Vossa Senhoria e o verbo do remetente',
        setup: 'Duas frases: (A) “Vossa Senhoria recebestes o ofício.” (B) “Encaminho a Vossa Senhoria o seu documento.” Qual está correta?',
        steps: [
          'A: Vossa Senhoria pede 3ª pessoa — recebeu, não recebestes. Errada.',
          'B: Encaminho é o remetente (eu); seu documento é o possessivo do destinatário. Correta.',
          'O tratamento não flexiona o verbo de quem escreve o ofício.',
          'Vosso documento, neste uso, seria o erro simétrico de B.',
        ],
        result: 'B está correta. 3ª pessoa no destinatário; 1ª no remetente; possessivo seu.',
      },
      {
        title: 'Exercício guiado — cujo o prazo',
        setup: '“O processo cujo o prazo venceu voltou ao protocolo.”',
        steps: [
          'Cujo já contém o artigo da posse; não se junta o.',
          'Concorda com prazo (masculino singular): cujo prazo.',
          'Não concorda com processo (o possuidor).',
          'Correção: “O processo cujo prazo venceu voltou ao protocolo.”',
        ],
        result: 'cujo prazo, sem artigo. Possuído manda na concordância.',
      },
    ],
    recallPrompts: [
      'Quando usar lhe e quando usar o/a?',
      'Cite quatro atratores de próclise e a regra do início de período.',
      'Como concorda cujo e o que não se põe depois dele?',
      'O Anexo IV pede o Manual da Presidência? O que pede de tratamento?',
    ],
    recallAnswers: [
      'Lhe = objeto indireto (a ele). O/a = objeto direto. Convocar alguém → o; obedecer a alguém → lhe.',
      'Não, que, nunca, cujo (também já, ninguém, indefinidos). Início absoluto sem atrator: ênclise (Encaminhe-se), nunca Me encaminhe.',
      'Concorda com o possuído (cujo prazo, cuja certidão). Não se põe artigo depois (cujo o é erro).',
      'Não nomeia o Manual. Pede emprego, formas de tratamento e colocação: Vossa Senhoria + 3ª pessoa + seu/sua.',
    ],
    commonErrors: [
      'Cujo o / cuja a.',
      'Vossa Senhoria recebestes / vosso documento (no destinatário).',
      'Início com “Me encaminhe”.',
      'Lhe como objeto direto (“o chefe lhe convocou”).',
    ],
    traps: [
      'Atrator distante: o candidato põe ênclise apesar de não, que, nunca.',
      'Lhe como objeto direto (“o chefe lhe convocou”).',
      'Tratamento do destinatário “contagiando” o verbo do remetente (Encaminha a Vossa Senhoria, no lugar de Encaminho).',
    ],
    relatedLessonIds: ['pt-articulacao', 'pt-regencia', 'pt-verbos', 'pt-classes'],
    relatedEditalItems: ['ed-pt-14'],
    synthesis:
      'Pronome de prova tem três frentes: forma (lhe/o, cujo), colocação (atrator ou ênclise) e tratamento (3ª pessoa). Erro em qualquer uma delas anula o item.',
    glossary: [
      { term: 'Atrator', definition: 'Palavra que exige próclise (negação, relativo, indefinido etc.).' },
      { term: 'Mesóclise', definition: 'Inserção do pronome no futuro do presente ou do pretérito (far-se-á).' },
      { term: 'Ênclise de início', definition: 'Posição da norma-padrão escrita quando o período começa por verbo e não há atrator (Encaminhe-se).' },
      { term: 'Pronome oblíquo átono', definition: 'me, te, se, lhe, o, a, nos, vos, os, as — não inicia período na norma-padrão escrita.' },
    ],
    masteryCriteria: [
      'Trocar lhe/o conforme a transitividade.',
      'Colocar o pronome na próclise na presença de atrator.',
      'Empregar cujo sem artigo e com concordância no possuído.',
      'Flexionar Vossa Senhoria em 3ª pessoa com possessivo seu, sem contagiar o verbo do remetente.',
      'Aplicar -lo/-la após r/s/z e -no/-na após nasal, se o item trouxer a forma.',
    ],
  }),

  pt({
    id: 'pt-periodo',
    areaId: DISCIPLINE,
    chapterId: 'pt-sintaxe',
    topicId: 'pt-periodo',
    title: 'Sintaxe do período simples e composto',
    objective:
      'Identificar os termos da oração no período simples e reconhecer as orações do período composto, como base para concordância, pontuação, regência e reescritura.',
    estimatedMinutes: 32,
    importance: pesoProva(
      'É o mapa. Sem achar sujeito, predicado, adjunto e as orações, os outros tópicos de sintaxe viram chute. O edital o lista à parte justamente por isso.',
    ),
    prerequisites: ['pt-classes'],
    essencial: [
      named(
        'Período simples: uma oração, um verbo principal (ou locução)',
        'Período simples tem um núcleo verbal — um verbo ou uma locução (foi arquivado vale um). Em torno dele orbitam os termos: sujeito, predicado, OD, OI, complemento nominal, adjunto adnominal, adjunto adverbial, agente da passiva, predicativo, vocativo, aposto. Vocativo não é sujeito: “Senhora diretora, o expediente segue anexo” — o expediente concorda com segue. Aposto explica. Adjunto adnominal integra o SN; adjunto adverbial modifica o verbo, o adjetivo, o advérbio ou a oração. Este mapa é o que o Anexo IV isolou como “sintaxe do período simples e composto”.',
      ),
      named(
        'Como achar o sujeito',
        'Pergunte ao verbo “quem?” / “o quê?”, recorte o que concorda, ignore o vocativo e o adjunto adverbial interpolado. Tipos: simples, composto, oculto, indeterminado, oracional, inexistente (verbos impessoais). “Houve atrasos”: não tem sujeito (haver de existência). “Chegaram atrasados os ofícios”: sujeito posposto os ofícios — a inversão não muda a função. “Convém que se junte a certidão”: sujeito oracional; convém fica no singular. Errar o sujeito aqui é errar concordância na lição vizinha.',
      ),
      named(
        'Período composto',
        'Mais de um núcleo verbal: duas ou mais orações, por coordenação, por subordinação ou misto. Conte os verbos; locução vale um (“ia ser arquivado” = uma oração). Classificar cada oração (coordenada adversativa, subordinada adjetiva…) é o trabalho fino da lição de coordenação e subordinação. Aqui o ponto é o mapa: quantas orações, quais os termos da principal, o que é termo de quê. Sem esse mapa, pontuação, regência e reescritura viram chute.',
      ),
    ],
    completo: [
      named(
        'OD × OI × complemento nominal',
        'OD: complemento verbal sem preposição obrigatória (arquivou o pedido; convocou o servidor). OI: complemento verbal com preposição (obedecer ao despacho; informou ao munícipe). CN: completa nome — substantivo, adjetivo ou advérbio (necessidade de prazo; útil ao setor; relativamente ao pedido). “Útil ao setor”: ao setor é CN, não OI, porque útil é adjetivo. Essa distinção reaparece em regência e crase: a preposição é a mesma; a função muda conforme o regente é verbo ou nome.',
      ),
      named(
        'Adjunto adnominal × complemento nominal',
        'Adjunto adnominal caracteriza (certidão antiga; construção de alvenaria; o protocolo do munícipe = posse). Complemento nominal completa sentido transitivo de nome, muitas vezes como alvo/paciente/agente (necessidade de prazo; construção da escola pelo Município). Critério prático: se o de introduz matéria, posse, qualidade, tende a adjunto; se introduz o alvo de um nome transitivo, tende a CN. Zona clássica e às vezes polêmica; em prova, prefira a alternativa inequívoca e não invente que “a IDIB sempre cobra CN”.',
      ),
      named(
        'Predicativo, adjunto e verbo de ligação',
        '“O servidor está atento” — predicativo do sujeito, verbo de ligação. “Nomearam-no chefe” — chefe é predicativo do objeto, não OD. “O servidor trabalha atento” pode oscilar entre predicativo e adjunto; em item de correção, o verbo de ligação puxa predicativo com mais segurança. “Cansado, o servidor saiu” — termo deslocado, isolado por vírgula, com valor de predicativo/adjunto. Não chame de OD o que caracteriza o sujeito ou o objeto.',
      ),
      named(
        'Vocativo, aposto e agente da passiva',
        'Vocativo chama e se isola por vírgula: não concorda com o verbo. Aposto explica ou enumera (“Itarema, município cearense,”). Agente da passiva: termo com por/pelo que pratica a ação na voz passiva (“Foi arquivado pelo protocolo o requerimento” — sujeito: o requerimento; agente: pelo protocolo). Confundir agente da passiva com adjunto adverbial de companhia ou com sujeito é o distrator de quem não fez o mapa. Na passiva sintética (arquivou-se o pedido), o paciente é sujeito.',
      ),
      named(
        'Sujeito inexistente, indeterminado e oracional',
        'Inexistente: haver existência/ocorrência, fazer de tempo, ser de tempo em algumas construções (“Houve falhas”; “Faz dois anos”; “É tarde”). Indeterminado: 3ª pessoa do plural sem referente (“bateram à porta”) ou se com VI/VTI (“precisa-se de servidores”). Oracional: a oração inteira é o sujeito (“É necessário juntar a certidão”; “Convém que se manifeste o setor”). O verbo da principal, nestes casos, não vai ao plural para “concordar com certidão”. Isso é o mapa; a flexão se cobra em concordância.',
      ),
      named(
        'Como o item aparece',
        '“O termo destacado exerce a função de.” “O período é simples ou composto?” “Há sujeito em.” Técnica: (1) circule os núcleos verbais — locução = um; (2) ache o sujeito pelo que concorda, ignorando vocativo e adjunto; (3) nomeie OD/OI/CN/predicativo; (4) só então escolha o rótulo fino. O edital lista esta linha à parte justamente porque é pré-requisito das outras sintaxes, não porque peça nomenclatura latina completa.',
      ),
    ],
    aprofundamento: [
      named(
        'Adjunto adnominal × CN — treine, sem inflar o programa',
        'A zona agente/paciente × matéria/posse é clássica em prova mais gramatical. “A certidão do munícipe” (posse, adjunto) × “a entrega da certidão” (paciente de entrega, CN). Nem todo de é CN. Treine com frases de expediente, mas não invente item extra no Anexo IV nem trate a distinção polêmica como se houvesse gabarito oficial da IDIB para todos os de. Se duas análises forem defensáveis, procure a alternativa sem polêmica.',
      ),
      named(
        'O que esta linha não substitui',
        'Período simples e composto é o mapa dos termos e da conta de orações. Não é coordenação/subordinação (valor semântico), não é construção frasal (clareza, paralelismo), não é concordância (embora a alimente). Não pede análise gerativa nem árvore de constituintes. Manual de outro órgão não define sujeito de Itarema. Quando o item misturar mapa e valor, faça o mapa aqui e classifique o valor na lição de coordenação.',
      ),
    ],
    revisaoRapida: blocks(
      'Conte os verbos: um = simples; mais de um = composto (locução = um).',
      'Sujeito concorda. Vocativo não é sujeito. Haver existência não tem sujeito.',
      'OD sem preposição; OI com preposição; CN completa nome. Predicativo caracteriza via ligação ou objeto.',
      'Sujeito posposto continua sujeito. Agente da passiva pratica; o paciente é o sujeito da passiva.',
    ),
    definitions: [
      { term: 'Período simples', definition: 'Período com uma só oração (um núcleo verbal ou uma locução).' },
      { term: 'Período composto', definition: 'Período com duas ou mais orações.' },
      { term: 'Sujeito inexistente', definition: 'Ausência de sujeito com verbo impessoal (haver existência, fazer tempo).' },
      { term: 'Complemento nominal', definition: 'Termo preposicionado que completa o sentido de um nome (substantivo, adjetivo ou advérbio).' },
    ],
    comparisons: [
      {
        title: 'Funções que a prova mistura',
        leftLabel: 'É',
        rightLabel: 'Não é',
        rows: [
          { label: 'Vocativo', left: 'chamamento isolado por vírgula', right: 'sujeito (não concorda com o verbo)' },
          { label: 'OD', left: 'complemento verbal sem preposição obrigatória', right: 'predicativo do objeto (nomearam-no chefe)' },
          { label: 'CN', left: 'completa nome (útil ao setor)', right: 'OI, que completa verbo' },
          { label: 'Agente da passiva', left: 'pelo protocolo, na passiva', right: 'sujeito da ativa ou adjunto de companhia' },
        ],
      },
    ],
    examples: [
      '“Senhora diretora, o expediente segue anexo.” Vocativo + sujeito o expediente.',
      '“É necessário juntar a certidão.” Sujeito oracional (juntar a certidão); é necessário no singular.',
      '“Nomearam-no chefe.” Chefe = predicativo do objeto, não segundo OD.',
      '“Houve atrasos no cadastro.” Sujeito inexistente; houve no singular.',
    ],
    publicAdminExamples: [
      '“Foi arquivado pelo protocolo o requerimento.” Sujeito: o requerimento; agente da passiva: pelo protocolo.',
      '“Convém que o setor se manifeste.” Sujeito oracional; convém não vai ao plural.',
    ],
    procedures: [
      'Circule cada núcleo verbal; locução conta um.',
      'Ache o sujeito pelo que concorda; risque vocativo e adjunto interpolado.',
      'Classifique complementos: OD, OI, CN, predicativo, agente da passiva.',
      'Decida simples × composto pela conta de orações.',
      'Só então vá à lição de valor (coordenação) ou de combinação (concordância).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — vocativo não manda no verbo',
        setup: '“Senhora Secretária, seguem anexas as certidões.” Alternativa afirma que Senhora Secretária é sujeito e que o verbo deveria ir ao singular.',
        steps: [
          'Senhora Secretária está isolada por vírgula: vocativo, chamamento.',
          'O que concorda com seguem é as certidões — sujeito posposto.',
          'Anexas é predicativo/adjetivo ligado a certidões.',
          'Corrigir o verbo para segue destruiria a concordância certa.',
        ],
        result: 'Vocativo ≠ sujeito. O mapa do período impede o erro de concordância.',
      },
      {
        title: 'Exemplo resolvido 2 — simples ou composto?',
        setup: '“O requerimento ia ser arquivado pelo protocolo.” O item pergunta se o período é simples ou composto e qual a função de pelo protocolo.',
        steps: [
          'Ia ser arquivado é locução verbal (auxiliar + auxiliar + principal) = um núcleo.',
          'Uma oração → período simples.',
          'Sujeito: o requerimento. Agente da passiva: pelo protocolo.',
          'Contar três verbos como três orações é o distrator.',
        ],
        result: 'Simples, com locução na passiva. Pelo protocolo = agente da passiva, não adjunto de companhia.',
      },
      {
        title: 'Exercício guiado — CN ou OI?',
        setup: '“O despacho foi útil ao setor de cadastro.” Função de ao setor de cadastro.',
        steps: [
          'Útil é adjetivo, não verbo. Complemento de adjetivo não é OI.',
          'Ao setor completa o sentido de útil → complemento nominal.',
          'OI exigiria verbo (obedecer ao setor; informar ao setor).',
          'A preposição a é a mesma; a função segue a classe do regente.',
        ],
        result: 'Complemento nominal. A preposição sozinha não decide OD/OI/CN.',
      },
    ],
    recallPrompts: [
      'Como se decide se o período é simples ou composto?',
      'Por que vocativo não é sujeito? Dê o exemplo do ofício.',
      'Diferença prática entre OD, OI e CN.',
      'O que o Anexo IV isolou nesta linha, em contraste com coordenação e com concordância?',
    ],
    recallAnswers: [
      'Pela conta de núcleos verbais: um (ou uma locução) = simples; dois ou mais = composto.',
      'Porque é chamamento isolado e não concorda com o verbo. “Senhora diretora, o expediente segue” — sujeito é o expediente.',
      'OD completa verbo sem preposição obrigatória; OI completa verbo com preposição; CN completa nome (útil ao setor).',
      'Pede o mapa dos termos e da conta de orações. Coordenação classifica o valor; concordância combina as formas. Esta lição é o pré-requisito, não o substituto.',
    ],
    commonErrors: [
      'Chamar o vocativo de sujeito.',
      'Contar auxiliar + principal como duas orações.',
      'Tratar CN de adjetivo como OI só porque há preposição.',
      'Ler predicativo do objeto como segundo OD (“nomearam-no chefe”).',
      'Achar que sujeito posposto “não é sujeito”.',
    ],
    traps: [
      'Adjunto longo entre verbo e sujeito posposto, a induzir núcleo errado.',
      'Predicativo lido como OD.',
      'Haver existência tratado como se atrasos fosse sujeito (“houveram atrasos”).',
    ],
    relatedLessonIds: ['pt-classes', 'pt-coordenacao-subordinacao', 'pt-concordancia', 'pt-construcao-frasal'],
    relatedEditalItems: ['ed-pt-15'],
    synthesis:
      'Período é anatomia: termos da oração no simples, conta de verbos no composto. Quem mapeia isso acerta concordância, pontuação e a função do termo destacado. Locução vale um núcleo; vocativo não manda no verbo.',
    glossary: [
      { term: 'Locução verbal', definition: 'Auxiliar + forma nominal que vale por um só núcleo (foi arquivado, ia ser arquivado).' },
      { term: 'Agente da passiva', definition: 'Termo com por/pelo que pratica a ação na voz passiva.' },
      { term: 'Predicativo', definition: 'Termo que caracteriza o sujeito ou o objeto, em geral via verbo de ligação ou predicação secundária.' },
      { term: 'Sujeito oracional', definition: 'Oração inteira no papel de sujeito (É necessário juntar a certidão).' },
    ],
    masteryCriteria: [
      'Identificar sujeito em oração invertida e em oração com vocativo.',
      'Dizer se um período é simples ou composto contando núcleos verbais.',
      'Distinguir OD, OI e CN em frases administrativas.',
      'Nomear agente da passiva e predicativo do objeto em despacho na passiva.',
      'Não contar locução verbal como duas orações.',
    ],
  }),

  pt({
    id: 'pt-estrutura-palavras',
    areaId: DISCIPLINE,
    chapterId: 'pt-morfologia',
    topicId: 'pt-estrutura-palavras',
    title: 'Estrutura e formação de palavras',
    objective:
      'Segmentar radical, tema, afixos e desinências e reconhecer derivação, composição, hibridismo e outros processos cobrados em nível médio.',
    estimatedMinutes: 28,
    importance: pesoProva(
      'Item objetivo, de pouco texto. Paga bem se você não confundir prefixo com radical nem derivação com composição. Relaciona-se a ortografia (hífen) sem substituí-la.',
    ),
    prerequisites: ['pt-classes', 'pt-ortografia'],
    essencial: [
      named(
        'Peças da palavra',
        'A palavra se descreve por peças, não por “tamanho”. Radical é o núcleo de sentido (cert- em certidão, certinho, incerto). Afixos derivacionais entram à esquerda (prefixos: in-, des-, re-) ou à direita (sufixos: -ção, -mente, -izar) e formam vocábulo novo. Vogal temática e desinências não criam palavra nova: marcam flexão de gênero, número, pessoa e tempo (certidões, protocolamos). Em prova, o comando costuma ser “o elemento destacado é prefixo de negação” ou “há derivação sufixal”: a resposta depende de reconhecer a peça, não de traduzir a palavra inteira.',
      ),
      named(
        'Derivação',
        'Derivação parte de uma base e acrescenta afixo — ou muda a classe sem afixo. Prefixal: re+ver, des+fazer. Sufixal: protocolo+ar, feliz+mente. Parassintética: prefixo e sufixo entram juntos, e o “meio” não existe com o mesmo valor (entristecer: não há *tristecer nem *entriste como verbo correspondente). Imprópria/conversão: o saber, o jantar (verbo usado como substantivo). Regressiva: o abalo (de abalar). Não chame de parassíntese o que é prefixo + sufixo em cadeia: infelizmente existe infeliz; o -mente entra depois. Esse teste do meio é o que decide o gabarito.',
      ),
      named(
        'Composição',
        'Composição une dois (ou mais) radicais ou palavras com autonomia de sentido. Justaposição conserva as peças, com hífen ou sem: guarda-chuva, segunda-feira, passatempo, abaixo-assinado. Aglutinação funde e deforma: planalto (pleno+alto), embora (em+boa+hora). Hibridismo junta radicais de línguas diferentes: automóvel, sociologia, televisão. O hífen do composto é regra de ortografia (Decreto 6.583/2008); nesta lição o que se classifica é o processo. Um vocábulo hifenizado pode ser derivado (ex-diretor), não composto.',
      ),
    ],
    completo: [
      named(
        'Derivação prefixal, sufixal e em cadeia',
        'Prefixal acrescenta prefixo a uma base que já vive sozinha: infeliz, reescrever, desarquivar. Sufixal muitas vezes muda a classe: protocolo → protocolar (nome → verbo), público → publicidade, feliz → felizmente. Em cadeia, os afixos entram em etapas reconhecíveis: infelizmente = in+feliz e depois +mente. O item “formou-se por derivação prefixal e sufixal” descreve exatamente essa cadeia. Erro clássico: rotular de composta toda palavra “grande” ou toda palavra com hífen. Tamanho e traço não são critério; a natureza das peças é.',
      ),
      named(
        'Parassíntese: o teste do meio inexistente',
        'Na parassíntese, prefixo e sufixo se agregam simultaneamente. O teste escolar — e o de prova — é brutalmente prático: se tirar um dos afixos a forma restante não existe (ou não existe com aquele valor). Enraizar, envelhecer, anoitecer, amanhecer, esvaziar, entardecer, enrijecer. Se o meio existe (infeliz, desleal, infelizmente), não é parassíntese. A banca mistura as duas etiquetas na mesma questão justamente para quem decora “dois afixos = parassíntese”. Dois afixos em cadeia continuam sendo derivação prefixal + sufixal.',
      ),
      named(
        'Imprópria, regressiva e mudança de classe',
        'Derivação imprópria (conversão) muda a classe sem acrescentar afixo visível: o saber, o dever, o protocolo no sentido de “o ato de protocolar”. Não há sufixo novo; há recategorização. Regressiva reduz a palavra, em geral de verbo para substantivo: o combate, a troca, o abalo, o resgate. Não confundir com abreviação (foto < fotografia), que corta material fônico sem ser “sufixo às avessas”, nem com sigla. Em nível médio, o que se pede é o rótulo do processo no vocábulo destacado, não a etimologia erudita nem a história da palavra no latim.',
      ),
      named(
        'Composição em detalhe: justaposição, aglutinação, hibridismo',
        'Na justaposição, cada elemento continua pronunciável e reconhecível: couve-flor, guarda-noturno, segunda-feira, passatempo. Na aglutinação há perda ou alteração de fonema: vinagre (vinho+acre), pontiagudo, planalto. Hibridismo é composição (ou formação) com radicais de origens diferentes: automóvel (grego + latim), burocracia, sociologia. Um mesmo item pode cruzar morfologia e ortografia: “micro-ondas formou-se por composição e o hífen se justifica porque as vogais se encontram”. Responda as duas perguntas em separado: processo nesta lição; hífen na lição de ortografia.',
      ),
      named(
        'Radical, tema, desinências — o que a prova pede',
        'Radical concentra o sentido lexical. Tema = radical + vogal temática (fala-, part-e-). Desinências nominais marcam gênero e número (certidões); desinências verbais marcam modo-tempo e número-pessoa (protocolá-va-mos). Afixo derivacional não é desinência: -ção em certidão cria substantivo; -s em certidões só flexiona. Item típico: “o elemento destacado é desinência de plural, não sufixo”. Se o enunciado não segmentar, não invente análise de “tema zero”: o Anexo IV pede estrutura e formação, não tratado de morfologia histórica.',
      ),
      named(
        'Prefixos de sentido que a banca nomeia',
        'Negação ou privação: in-/im-/i-, des-, a- (infeliz, impossível, desfazer, ateu). Oposição: contra-, anti- (contrarrecibo, anti-higiênico). Intensidade ou repetição: re-, super-, hiper-. Posição e tempo: pré-, pós-, sub-, entre-. O comando “o prefixo exprime ideia de” pede esse valor no vocábulo dado. Cuidado: in- também é “para dentro” (injetar, imigrar); só a palavra decide. Isso cruza com significação contextual, mas o edital isolou estrutura e formação de palavras como linha própria: aqui o objeto é a peça e o processo, não o sinônimo do radical.',
      ),
      named(
        'Outros processos: sigla, abreviatura, onomatopeia, estrangeirismo',
        'Sigla: IDIB, CPF, CEP — lê-se letra a letra ou como palavra. Abreviatura: Sr., V.Sa., fls., n.º — corta a palavra e em regra leva ponto. Onomatopeia imita som. Estrangeirismo (e-mail, login, checklist) entra no ofício contemporâneo; o processo não o torna “erro” automático, mas o registro precisa ser inteligível no expediente. Em prova de nível médio, o núcleo continua sendo derivação × composição; estes outros processos aparecem como alternativa ou, mais raramente, como item isolado. Não os transforme em capítulo extra do Anexo IV.',
      ),
      named(
        'Como o item aparece na prova',
        'Três formatos recorrentes: (1) “A palavra destacada formou-se por…”; (2) “O elemento destacado é prefixo de…”; (3) “Há parassíntese em”. Técnica: isole as peças; pergunte se cada uma vive sozinha (composição) ou se uma é afixo (derivação); se houver dois afixos, teste se o meio existe. Hífen não prova composição: ex-diretor, conforme o acordo, é prefixo + base. Não use gabarito de outro órgão nem “frequência de letra” como se fossem regra de Itarema: o programa é o Anexo IV, e a classificação se faz na palavra do enunciado.',
      ),
    ],
    aprofundamento: [
      named(
        'Tema e vogal temática — só se o enunciado segmentar',
        'Tema = radical + vogal temática (fala-). As desinências modo-temporais e número-pessoais se agregam a esse tema. É análise útil quando o item pede para nomear o elemento destacado numa forma verbal. Não invente cobrança de “tema zero”, de alomorfia histórica ou de listas de radicais gregos como se fossem linha do edital. Se a questão só pergunta o processo (derivação ou composição), responda o processo e não desvie para segmentação erudita.',
      ),
      named(
        'O que o Anexo IV não transforma em disciplina',
        'O programa pede estrutura e formação de palavras. Não pede história da língua, não pede tratado de etimologia latina/grega e não substitui a ortografia oficial (hífen, trema, alfabeto), que tem item próprio e âncora no Decreto 6.583/2008. Manual de redação de outro órgão não define o que é composto em Itarema. Quando o vocábulo for administrativo (protocolizar, contrarrecibo, vice-prefeito), classifique o processo; não aproveite para dissertar sobre arquivologia ou sobre o organograma da Prefeitura.',
      ),
    ],
    revisaoRapida: blocks(
      'Afixo + radical = derivação. Radical + radical = composição.',
      'Parassíntese: os dois afixos ao mesmo tempo; o meio não existe sozinho.',
      'Justaposição preserva elementos; aglutinação funde. Hífen não prova composição.',
      'Desinência flexiona; sufixo deriva. Infelizmente não é parassíntese.',
    ),
    definitions: [
      { term: 'Radical', definition: 'Elemento que concentra o sentido lexical da palavra.' },
      { term: 'Parassíntese', definition: 'Derivação em que prefixo e sufixo se agregam simultaneamente, sem que o “meio” exista com o mesmo valor.' },
      { term: 'Hibridismo', definition: 'Formação com radicais de origens linguísticas distintas.' },
      { term: 'Derivação imprópria', definition: 'Mudança de classe sem acréscimo de afixo (o saber, o jantar).' },
      { term: 'Aglutinação', definition: 'Composição em que os elementos se fundem com alteração fônica (planalto).' },
    ],
    comparisons: [
      {
        title: 'Derivação × composição',
        leftLabel: 'Derivação',
        rightLabel: 'Composição',
        rows: [
          { label: 'Peças', left: 'Base + afixo (ou só mudança de classe)', right: 'Radical/palavra + radical/palavra' },
          { label: 'Teste', left: 'Um dos pedaços é prefixo ou sufixo', right: 'Os dois pedaços têm autonomia lexical' },
          { label: 'Exemplo', left: 'protocolizar, infeliz, o saber', right: 'guarda-chuva, planalto, automóvel' },
          { label: 'Pegadinha', left: 'ex-diretor (prefixo + base, hífen ortográfico)', right: 'passatempo (dois radicais, às vezes sem hífen)' },
        ],
      },
    ],
    examples: [
      'Infeliz: derivação prefixal. Felizmente: sufixal. Enraizar: parassíntese (não há *raizar nem *enraiz como verbo correspondente).',
      'Couve-flor: justaposição. Planalto: aglutinação. Automóvel: hibridismo.',
      'O saber (substantivo) é derivação imprópria; o abalo (de abalar) é regressiva.',
      'Ex-diretor tem hífen e mesmo assim é derivação prefixal, não composição de dois radicais livres.',
    ],
    publicAdminExamples: [
      'Protocolizar, no ofício do setor de cadastro: derivação sufixal sobre protocolo. Não é composto.',
      'Contrarrecibo e vice-prefeito: o primeiro é prefixo contra- + recibo; o segundo é vice- + cargo, com hífen típico de prefixo. Classifique o processo; o traço se explica na ortografia.',
    ],
    procedures: [
      'Isole as peças da palavra destacada.',
      'Pergunte se alguma peça é afixo (derivação) ou se as duas têm autonomia (composição).',
      'Se houver prefixo e sufixo, teste se o meio existe: se existe, cadeia; se não, parassíntese.',
      'Não use o hífen como prova de composição.',
      'Nomeie o valor do prefixo só se o comando pedir (“exprime ideia de”).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — infelizmente não é parassíntese',
        setup: 'O enunciado destaca infelizmente num ofício e pergunta o processo de formação. Uma alternativa diz “parassíntese”; outra, “derivação prefixal e sufixal”.',
        steps: [
          'Tarefa: classificar o processo, não o sentido da palavra.',
          'A base feliz existe. Com in- forma-se infeliz, adjetivo atestado.',
          'Sobre infeliz entra o sufixo adverbial -mente. O meio existe.',
          'Parassíntese exigiria que *felizmente com o mesmo valor de cadeia ou *infeliz sem o meio não vivesse — aqui vive.',
        ],
        result: 'Infelizmente = derivação prefixal + sufixal em cadeia. Parassíntese é o distrator de quem só conta “dois afixos”.',
      },
      {
        title: 'Exemplo resolvido 2 — hífen não prova composição',
        setup: 'Alternativa afirma: “Em ex-diretor da Secretaria, há composição por justaposição, comprovada pelo hífen.”',
        steps: [
          'Ex- é prefixo (com valor de “que deixou de ser”), não radical autônomo no mesmo sentido de diretor.',
          'O hífen, no acordo vigente (Decreto 6.583/2008), é regra ortográfica de certos prefixos, não atestado de composição.',
          'Justaposição uniria dois elementos com autonomia lexical (guarda-chuva, abaixo-assinado).',
          'Conclusão: o processo é derivação prefixal. O traço se explica na lição de ortografia.',
        ],
        result: 'Hífen ≠ composição. Ex-diretor é derivado; abaixo-assinado, no expediente, é composto.',
      },
      {
        title: 'Exercício guiado — protocolizar no despacho',
        setup: '“Determino que se protocolize o requerimento.” A questão pede o processo de formação de protocolize/protocolizar.',
        steps: [
          'A base protocolo é substantivo reconhecível.',
          'O sufixo -izar forma verbo. Não há segundo radical.',
          'Não há prefixo simultâneo obrigatório: não é parassíntese.',
          'Não é sigla nem abreviatura.',
        ],
        result: 'Derivação sufixal (substantivo → verbo). O contexto de despacho ilustra o uso; não muda o processo.',
      },
    ],
    recallPrompts: [
      'Qual o teste prático para distinguir parassíntese de derivação prefixal + sufixal?',
      'Por que ex-diretor tem hífen e mesmo assim não é composição?',
      'Dê um exemplo municipal de derivação sufixal e um de justaposição.',
      'O que o Anexo IV pede neste item — e o que ele não transforma em disciplina?',
    ],
    recallAnswers: [
      'Se o “meio” (base + só um dos afixos) existe com o mesmo valor, é cadeia prefixal+sufixal; se não existe, é parassíntese.',
      'Ex- é prefixo; o hífen é regra ortográfica do acordo, não prova de dois radicais livres.',
      'Sufixal: protocolizar o requerimento. Justaposição: abaixo-assinado, segunda-feira, guarda-noturno.',
      'Pede estrutura (radical, afixos, desinências) e formação (derivação, composição e processos correlatos). Não pede etimologia histórica nem substitui a ortografia oficial.',
    ],
    commonErrors: [
      'Chamar infelizmente de parassíntese só porque há dois afixos.',
      'Confundir desinência -s de plural com sufixo derivacional.',
      'Tratar todo vocábulo hifenizado como composto.',
      'Usar o “tamanho” da palavra como critério de composição.',
      'Misturar classificação do processo com regra de hífen e responder a pergunta errada.',
    ],
    traps: [
      'Palavra com hífen que é derivação prefixal (ex-diretor, vice-prefeito), não justaposição de dois radicais livres.',
      'Aglutinação lida como “erro de ortografia” ou como derivação.',
      'Alternativa que traduz o prefixo (in- = “não”) quando o comando pede o processo, não o sentido.',
    ],
    relatedLessonIds: ['pt-classes', 'pt-ortografia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-16'],
    synthesis:
      'Estrutura de palavra é Lego: radical, afixos, desinências. O processo (derivar ou compor) se decide pela natureza das peças, não pelo tamanho nem pelo hífen. Parassíntese só existe quando o meio não vive sozinho.',
    glossary: [
      { term: 'Prefixo', definition: 'Afixo à esquerda do radical.' },
      { term: 'Sufixo', definition: 'Afixo à direita do radical, muitas vezes com mudança de classe.' },
      { term: 'Desinência', definition: 'Peça flexional de gênero, número, modo-tempo ou pessoa, que não cria vocábulo novo.' },
      { term: 'Justaposição', definition: 'Composição que conserva a autonomia dos elementos, com hífen ou sem.' },
    ],
    masteryCriteria: [
      'Segmentar radical e afixos em palavra derivada.',
      'Distinguir parassíntese de derivação prefixal + sufixal em cadeia.',
      'Classificar composto por justaposição, aglutinação ou hibridismo.',
      'Recusar hífen como prova automática de composição.',
      'Nomear o valor de prefixos de negação, oposição e intensidade quando o comando pedir.',
    ],
  }),

  pt({
    id: 'pt-classes',
    areaId: DISCIPLINE,
    chapterId: 'pt-morfologia',
    topicId: 'pt-classes',
    title: 'Funções das classes de palavras',
    objective:
      'Reconhecer as dez classes e, sobretudo, a função que a palavra exerce no enunciado — porque a mesma forma muda de classe conforme o uso.',
    estimatedMinutes: 31,
    importance: pesoProva(
      'O edital pede funções das classes, não só a lista escolar. “Que” pode ser pronome, conjunção ou partícula de realce; o item testa o papel no período.',
    ),
    prerequisites: [],
    essencial: [
      named(
        'Classes variáveis e invariáveis',
        'A lista escolar das dez classes continua válida: variáveis — substantivo, adjetivo, artigo, pronome, verbo, numeral; invariáveis — advérbio, preposição, conjunção, interjeição. O edital, porém, pede funções das classes: o que a palavra faz naquele enunciado. Alguns manuais separam a partícula se; para prova média, analise a função do se (apassivador, integrante, reflexivo, índice de indeterminação, realce). Decorar a lista sem o período é meio caminho. O item mora no curinga que muda de classe conforme o uso.',
      ),
      named(
        'A classe depende do contexto',
        'A mesma forma não tem classe eterna. O bem (substantivo) / bem resolvido (advérbio) / homem bem (adjetivo, registro coloquial). Sobre a mesa (preposição) × o sobre do envelope (nominalização ocasional). Só (advérbio de exclusão / palavra denotativa) × só (adjetivo = sozinho). Não classifique na lista mental; classifique no período. Substituição ajuda: se cabe ele, tende a substantivo/pronome; se cabe bonito, adjetivo; se cabe ontem, advérbio; se cabe e, conjunção; se cabe de, preposição.',
      ),
      named(
        'Função × classe',
        'Classe é a etiqueta morfológica; função é o papel sintático. Substantivo tipicamente nomeia e ocupa sujeito/OD/predicativo. Adjetivo caracteriza (adjunto adnominal, predicativo). Advérbio modifica verbo, adjetivo ou advérbio — ou a oração. Conjunção liga orações. Preposição liga termos e pede regime. A banca pergunta “o termo destacado é adjunto adverbial”: aí classe (advérbio ou locução) e sintaxe se encontram. Errar a classe costuma errar a função, e vice-versa. O Anexo IV isolou as duas perguntas na mesma linha.',
      ),
    ],
    completo: [
      named(
        'Que: relativo, integrante, comparativo, expletivo',
        '“O prazo que venceu era fatal” — que = pronome relativo (o qual). “Que o prazo venceu é fato” / “O chefe determinou que se juntasse a certidão” — que = conjunção integrante. “Mais claro que o anterior” — que comparativo. “Quase que o prazo vence” — que expletivo, realce, sem função essencial. Teste: o qual (relativo), isso (integrante), do que (comparativo), apagável (expletivo). Chamar todo que de relativo é o erro mais treinado desta lição.',
      ),
      named(
        'Se: cinco funções que a prova mistura',
        'Apassivador: vendem-se certidões (VTD, concorda com o paciente). Índice de indeterminação: precisa-se de servidores (VTI/VI, singular). Integrante: não sei se o prazo venceu (substantiva). Reflexivo/recíproco: o servidor se feriu; cumprimentaram-se. Partícula de realce: chegou-se a concluir (em alguns contextos, expletivo). Conjunção condicional se é a mesma forma da integrante: o período decide. Não rotule o se antes de testar a transitividade e a função da oração.',
      ),
      named(
        'Como e segundo',
        'Como: advérbio (“como protocolou?”); conjunção comparativa (“agiu como o regimento manda”); conjunção causal anteposta (“Como chovia, o atendimento atrasou”); preposição em “como diretor, assinou” (na qualidade de). Segundo: numeral ordinal (“o segundo parágrafo”); preposição de conformidade (“segundo o relatório”); também substantivo (“os segundos”). “Segundo a Instrução Normativa” no ofício não é ordinal. O distrator troca causa e comparação no como, e ordinal e preposição no segundo.',
      ),
      named(
        'Artigo, numeral e o par meio / meia',
        'Artigo definido/indefinido determina o substantivo e, na crase, é metade do encontro a+a. Numeral: cardinal, ordinal, multiplicativo, fracionário. Meio como advérbio é invariável e modifica adjetivo: “porta meio aberta”. Meio como numeral/adjetivo flexiona: “meia hora”, “meio-dia e meia” (meia hora). “Porta meia aberta” é o erro clássico. “Os meios” (substantivo) é outra classe. Esse par cai muito porque cruza classes, flexão e concordância.',
      ),
      named(
        'Advérbio, preposição, conjunção — invariáveis que se disfarçam',
        'Advérbio: ontem, não, talvez, melhor (quando modifica verbo: “o setor trabalhou melhor”). Preposição: de, a, para, segundo, durante. Conjunção: e, mas, porque, que integrante. A mesma forma atua em mais de uma: até preposição de limite (“até o protocolo”) × até de inclusão (“até o prefeito protocolou”). Mas conjunção × mais numeral/advérbio de intensidade (ortografia). A classificação no ofício segue o papel, não a “palavra que você decorou na 5ª série”.',
      ),
      named(
        'Como o item aparece',
        '“A palavra destacada classifica-se como.” “Exerce a função de.” Técnica: substitua por um prototípico da classe (ele, bonito, ontem, e, de) e veja se o período aguenta; para que/se/como, rode os testes o qual / isso / apagável / transitividade. O edital pede funções das classes, não a lista recitada. Não invente que “a IDIB só cobra o que”.',
      ),
    ],
    aprofundamento: [
      named(
        'Palavras denotativas — use o rótulo se a alternativa o trouxer',
        'Até, só, também, inclusive, aliás, sobretudo — alguns manuais não as chamam de advérbio, e sim de palavras denotativas (inclusão, exclusão, retificação, designação). Se a alternativa disser “advérbio”, pode passar em banca que não faz a distinção. Em item fino, “palavra denotativa de inclusão” é o rótulo (“Até o prefeito protocolou”). O Anexo IV não nomeia essa subclasse; não a transforme em capítulo extra. Use-a só se a alternativa a trouxer.',
      ),
      named(
        'O que o edital não pede sob este nome',
        'Funções das classes não é tratado de gramática histórica, não é lista de 10 para recitar sem período e não substitui período (mapa) nem pronomes (colocação, tratamento). Se o item pedir a função de cujo, a classe é pronome relativo e a função é adjunto adnominal de posse — as duas respostas se falam. Manual de outro órgão não define as classes de Itarema.',
      ),
    ],
    revisaoRapida: blocks(
      'Classe se decide no uso, não na palavra isolada. Substitua por um prototípico.',
      'Que: o qual (relativo) / isso (integrante) / apagável (expletivo). Se: teste a transitividade.',
      'Meio advérbio não flexiona; meia hora flexiona. Segundo no ofício costuma ser preposição.',
      'Função sintática (adjunto, sujeito) ≠ etiqueta morfológica, mas as duas se falam.',
    ),
    definitions: [
      { term: 'Classe de palavra', definition: 'Categoria morfológica (substantivo, verbo, preposição etc.).' },
      { term: 'Função', definition: 'Papel sintático ou discursivo que a palavra exerce naquele enunciado.' },
      { term: 'Curinga', definition: 'Forma que muda de classe conforme o uso (que, se, como, segundo, meio, até).' },
      { term: 'Partícula expletiva', definition: 'Elemento de realce sem função sintática essencial (que em “quase que”).' },
    ],
    comparisons: [
      {
        title: 'Que e se no expediente',
        leftLabel: 'Teste que confirma',
        rightLabel: 'Classe / função',
        rows: [
          { label: 'o prazo que venceu', left: 'cabe o qual', right: 'pronome relativo (adjetiva)' },
          { label: 'determinou que se juntasse', left: 'cabe isso', right: 'conjunção integrante (substantiva)' },
          { label: 'vendem-se certidões', left: 'VTD + paciente sujeito', right: 'se apassivador' },
          { label: 'precisa-se de servidores', left: 'VTI, singular', right: 'se índice de indeterminação' },
        ],
      },
    ],
    examples: [
      '“Que o prazo venceu é fato.” Que = conjunção integrante.',
      '“O prazo que venceu era fatal.” Que = pronome relativo.',
      '“Porta meio aberta” (advérbio invariável) × “meia hora” (numeral).',
      '“Como chovia, o protocolo atrasou.” Como causal, não comparativo.',
    ],
    publicAdminExamples: [
      '“Segundo a Instrução Normativa, o prazo é de cinco dias.” Segundo = preposição (conformidade), não ordinal.',
      '“Até o prefeito protocolou.” Até = inclusão (palavra denotativa / advérbio, conforme o manual), não limite espacial.',
    ],
    procedures: [
      'Não classifique a palavra isolada; leia o período.',
      'Substitua por prototípico: ele, bonito, ontem, e, de.',
      'Para que: teste o qual / isso / apagável.',
      'Para se: teste transitividade e se a oração é substantiva ou condicional.',
      'Para meio: pergunte se modifica substantivo (flexiona) ou adjetivo (invariável).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — dois que no mesmo ofício',
        setup: '“O chefe determinou que o prazo que constava da certidão fosse observado.” Classifique os dois que.',
        steps: [
          'Primeiro que: determinou o quê? → conteúdo. Cabe isso. Integrante, substantiva objetiva direta.',
          'Segundo que: o prazo qual? O que constava da certidão. Cabe o qual. Relativo, adjetiva restritiva.',
          'A mesma grafia, duas classes. A lista escolar sozinha não resolve.',
          'Fosse observado é subjuntivo da integrante, não classifica o segundo que.',
        ],
        result: 'Integrante + relativo. Todo que não é uma coisa só.',
      },
      {
        title: 'Exemplo resolvido 2 — meio no mural',
        setup: 'Mural: “Porta meia aberta. Retire a senha.” O item pede a correção de classe/flexão.',
        steps: [
          'Meia está modificando o adjetivo aberta, não o substantivo porta como numeral de hora.',
          'Função de advérbio de intensidade → forma invariável: meio.',
          '“Meia hora” flexionaria porque meio, aí, é numeral/adjetivo ligado a hora.',
          'Correção: “Porta meio aberta.”',
        ],
        result: 'Classe manda na flexão: advérbio não concorda. O par meio/meia é item de classes, não só de concordância.',
      },
      {
        title: 'Exercício guiado — segundo no despacho',
        setup: '“Segundo o relatório, o segundo pedido foi indeferido.” Função de cada segundo.',
        steps: [
          'Primeiro: segundo o relatório = conformidade. Cabe conforme. Preposição (ou locução prepositiva, conforme a análise).',
          'Segundo: o segundo pedido = ordinal, adjetivo numeral, adjunto adnominal de pedido.',
          'Trocar os rótulos é o distrator.',
          'O relatório não é “o 2º relatório” neste uso.',
        ],
        result: 'Preposição de conformidade + numeral ordinal. A forma repetida não unifica a classe.',
      },
    ],
    recallPrompts: [
      'Cite três usos de que e o teste de cada um.',
      'Quando meio flexiona e quando não flexiona?',
      'Como distinguir se apassivador de se integrante?',
      'O Anexo IV pede a lista das dez classes ou a função no enunciado?',
    ],
    recallAnswers: [
      'Relativo (cabe o qual), integrante (cabe isso), expletivo (apagável). Há ainda o comparativo (do que).',
      'Não flexiona como advérbio (“porta meio aberta”). Flexiona como numeral/adjetivo (“meia hora”).',
      'Apassivador: VTD, paciente vira sujeito, verbo concorda. Integrante: introduz substantiva (“não sei se”).',
      'Pede funções das classes no enunciado. A lista escolar é o ponto de partida, não o gabarito.',
    ],
    commonErrors: [
      'Classificar todo que como relativo.',
      'Flexionar meio advérbio (“porta meia aberta”).',
      'Ler segundo do ofício como ordinal.',
      'Chamar se apassivador de conjunção integrante (ou o inverso).',
      'Classificar a palavra isolada, sem o período.',
    ],
    traps: [
      'Se apassivador chamado de conjunção integrante.',
      'Como causal lido como comparativo.',
      'Até de inclusão lido como preposição de limite (“até o prefeito” = “somente até o cargo”).',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-pronomes', 'pt-flexao', 'pt-articulacao'],
    relatedEditalItems: ['ed-pt-17'],
    synthesis:
      'Classes de prova são funções em contexto. Decore a lista de dez, mas treine os curingas que/se/como/segundo/meio/até — é aí que o item mora. Classe e função se falam; nenhuma das duas se resolve na palavra isolada.',
    glossary: [
      { term: 'Palavra denotativa', definition: 'Item invariável de inclusão, exclusão, retificação etc., às vezes separado do advérbio.' },
      { term: 'Partícula expletiva', definition: 'Elemento de realce sem função sintática essencial (é que, que em “quase que”).' },
      { term: 'Artigo', definition: 'Determinante definido ou indefinido do substantivo; na crase, é metade do encontro a+a.' },
      { term: 'Numeral', definition: 'Classe que indica quantidade ou ordem (cardinal, ordinal, multiplicativo, fracionário).' },
    ],
    masteryCriteria: [
      'Classificar que em pelo menos três usos distintos.',
      'Distinguir meio advérbio de meia como numeral/adjetivo.',
      'Separar classe morfológica de função sintática e ainda assim relacioná-las.',
      'Identificar segundo como preposição de conformidade no ofício.',
      'Testar se apassivador pela transitividade, não pela forma isolada.',
    ],
  }),

  pt({
    id: 'pt-flexao',
    areaId: DISCIPLINE,
    chapterId: 'pt-morfologia',
    topicId: 'pt-flexao',
    title: 'Flexão nominal e verbal',
    objective:
      'Flexionar substantivos e adjetivos em gênero, número e grau e verbos em pessoa, número, tempo, modo e voz, reconhecendo irregularidades cobradas em prova.',
    estimatedMinutes: 29,
    importance: pesoProva(
      'Flexão é o “como a forma muda”. Concordância usa esse conhecimento; aqui a cobrança é a forma em si: o plural de cidadão, o feminino de anexos, o particípio irregular.',
    ),
    prerequisites: ['pt-classes', 'pt-estrutura-palavras'],
    essencial: [
      named(
        'Flexão nominal',
        'Flexão é variação de forma para marcar categoria gramatical, não “enfeite”. No nome: gênero (servidor/servidora; o/a agente, uniforme), número (cidadãos, capitães, mãos — três destinos do -ão; cônsules, caracteres) e grau (aumentativo/diminutivo sintético ou analítico; superlativo analítico ou sintético: paupérrimo, muitíssimo). Compostos flexionam segundo a classe das peças (guarda-noturnos, primeiras-damas). A prova pergunta a forma; a lição de concordância pergunta se essa forma combinou com o termo certo. São itens vizinhos no Anexo IV; não os funda num só.',
      ),
      named(
        'Flexão verbal',
        'O verbo flexiona em pessoa e número, tempo e modo, e em voz (ativa, passiva, reflexiva). O rendimento imediato em nível médio está nos particípios duplos: aceito/aceitado, entregue/entregado, pago/pagado, ganho/ganhado. Tendência clássica de prova: com ter/haver, forma regular (“tínhamos entregado”); com ser/estar, irregular (“o ofício foi entregue”). Nem toda banca aplica o par com o mesmo rigor; se houver alternativa inequívoca (foi pago, tinha pagado), prefira-a e fuja da polêmica. Tempos e modos têm lição própria; aqui o objeto é a forma que muda.',
      ),
      named(
        'O que não é “só detalhe”',
        'Anexo, incluso, quite, obrigado e leso são adjetivos e concordam: documentos anexos, guias inclusas, servidores quites, obrigada (quem agradece), lesa-pátria. “Em anexo” é locução invariável; “documentos anexo” é erro. Isso é flexão a serviço da concordância nominal — o edital lista os dois tópicos; treine-os juntos, mas responda o que o comando pediu. No expediente, “segue anexo a certidão” falha duas vezes se a certidão é o sujeito: seguem anexas as certidões.',
      ),
    ],
    completo: [
      named(
        'Plurais de -ão, -l e casos que a banca mistura',
        'Três destinos do -ão: cidadãos, escrivães, alemães (ão→ães); capitães, tabeliães (ão→ães de -ão átono? atenção: capitão → capitães); mãos, irmãos, bênçãos (ão→ãos). A lista não é um único padrão — e o item mistura os três para induzir cidadões ou capités. Em -l: cônsul → cônsules, caráter → caracteres (não “caratérs”), mal → males. Monossílabos e oxítonas pedem conferência: gol → gols (empréstimo), mas em prova tradicional o que decide é a forma culta da alternativa inequívoca.',
      ),
      named(
        'Gênero: biformes, uniformes e o artigo que marca',
        'Biforme muda a palavra: secretário/secretária, servidor/servidora. Uniforme permanece: o/a agente, o/a colega, o/a chefe, o/a parlamentar. O artigo (ou outro determinante) marca o gênero. “A agente administrativa protocolou” está correto; “a agenta” não é flexão culta desse substantivo. Cargos e títulos no ofício seguem a norma-padrão do texto: o que o enunciado grafar como feminino de presidente (a presidente / a presidenta) deve ser lido no contexto; não transforme debate de nomenclatura em regra única do edital.',
      ),
      named(
        'Grau do nome e o que não é flexão de grau',
        'Diminutivo e aumentativo podem ser sintéticos (processinho, oficiaço) ou analíticos (processo pequeno). Comparativo e superlativo do adjetivo: mais claro que, o mais claro, claríssimo, paupérrimo. Superlativo analítico (muito claro) não se confunde com advérbio de intensidade. Não chame de flexão de grau a derivação com sufixo que muda o sentido (certidãozinha pode ser afetivo, não só tamanho). Se o item pedir “grau”, responda aumentativo/diminutivo/comparativo/superlativo; se pedir “processo de formação”, volte à lição de estrutura.',
      ),
      named(
        'Compostos: quais peças flexionam',
        'A decisão é morfológica, não estética. Adjetivo flexiona: guarda-noturno → guarda-noturnos; acordo-prévio → acordos-prévios. Dois substantivos: em regra só o primeiro (couve-flor → couves-flor) ou os dois quando há ideia de soma (segunda-feira → segundas-feiras é o uso corrente). Abaixo-assinado → abaixo-assinados (o núcleo é o conjunto lexicalizado). Hífen é ortografia (Decreto 6.583/2008); flexionar um ou dois elementos é esta lição. Na dúvida, elimine o plural absurdo (guarda-noturnoes, cidadões) e fique com a forma atestada.',
      ),
      named(
        'Particípios duplos e a tendência de prova',
        'Aceitar, entregar, pagar, ganhar, gastar, acender têm duas formas. Com auxiliar ter/haver (tempos compostos da ativa): tendência ao regular (tinha entregado, havia pagado). Com ser/estar (passiva ou estado): tendência ao irregular (foi entregue, está pago, fica aceito o pedido). “O ofício foi entregado” e “tínhamos entregue o ofício” são as inversões que a banca coloca como distrator. Se as duas formas aparecerem em alternativas igualmente defensáveis, procure a opção sem polêmica; não invente que “a IDIB sempre cobra X”.',
      ),
      named(
        'Anexo, incluso, quite, obrigado, meio',
        'Anexos/anexas, inclusos/inclusas concordam com o substantivo a que se referem: “seguem anexas as certidões”; “os documentos inclusos”. Quite: “declaro-me quite”; “estamos quites”. Obrigado concorda com quem agradece. Meio como advérbio é invariável (“porta meio aberta”); meio como numeral/adjetivo flexiona (“meia hora”, “meio-dia e meia”). Esse último cruza com classes de palavras; aqui o ponto é a forma que muda ou não muda. “Documento em anexo” (locução) não autoriza “certidões anexo”.',
      ),
      named(
        'Como o item aparece',
        '“A forma correta do plural é.” “O feminino de X.” “O particípio adequado.” “Há erro de flexão em.” Técnica: identifique se o enunciado pede a forma isolada (flexão) ou a combinação com outro termo (concordância). Muitas vezes as duas estão no mesmo item — “seguem anexas as certidões” erra quem só pluraliza o verbo ou só o adjetivo. Não cite “o gabarito oficial da IDIB neste tipo” porque esta lição não reproduz prova de outro órgão como se fosse Itarema.',
      ),
    ],
    aprofundamento: [
      named(
        'Heterônimos e gênero de cargos — o edital não decide política de nomenclatura',
        'Homem/mulher, bode/cabra são heterônimos: radicais diferentes, não flexão do mesmo radical. Cargos: a presidente e a presidenta circulam; o texto da questão e o uso do documento é que mandam. Não transforme debate político de nomenclatura em “regra única do Anexo IV”. O programa pede flexão nominal e verbal; não pede tratado de gênero sociolinguístico nem manual de outro ente federativo sobre tratamento de cargos.',
      ),
      named(
        'O que esta linha não substitui',
        'Flexão não é concordância (embora a alimente) e não é emprego de tempos e modos (lição própria). Não estude aqui a tabela inteira de irregulares como se o edital pedisse conjugação vazia. Também não é ortografia: o hífen do composto se resolve pelo Decreto 6.583/2008; a decisão de pluralizar um ou dois elementos é flexão. Se o item misturar as três coisas, responda cada pergunta com a lição certa.',
      ),
    ],
    revisaoRapida: blocks(
      'Anexos, inclusas, quites, obrigada/obrigado. Em anexo (locução) ≠ anexo invariável no adjetivo.',
      'Foi entregue / tinha entregado — tendência clássica; fuja da polêmica se houver opção limpa.',
      'Cidadãos, capitães, mãos: três destinos do -ão. Não force um só padrão.',
      'Composto: veja quais elementos flexionam. Agente é uniforme: o artigo marca o gênero.',
    ),
    definitions: [
      { term: 'Flexão', definition: 'Variação da forma da palavra para marcar categorias gramaticais (gênero, número, grau, pessoa, tempo, modo, voz).' },
      { term: 'Particípio irregular', definition: 'Forma curta (pago, dito, feito, entregue) ao lado ou no lugar da regular.' },
      { term: 'Substantivo uniforme', definition: 'Mesma forma para os dois gêneros, marcada pelo determinante (o/a agente).' },
      { term: 'Heterônimo', definition: 'Par de palavras de radicais diferentes para o masculino e o feminino (homem/mulher), não flexão do mesmo radical.' },
    ],
    comparisons: [
      {
        title: 'Flexão × concordância',
        leftLabel: 'Flexão (esta lição)',
        rightLabel: 'Concordância (lição vizinha)',
        rows: [
          { label: 'Pergunta', left: 'Qual é a forma da palavra?', right: 'A forma combinou com o termo certo?' },
          { label: 'Exemplo', left: 'cidadãos, anexas, entregue', right: 'seguem anexas as certidões' },
          { label: 'Erro típico', left: 'cidadões; anexo invariável', right: 'o resultado das análises foram' },
        ],
      },
    ],
    examples: [
      '“Seguem anexas as certidões.” Anexas concorda com certidões; o plural do verbo também.',
      '“Os cidadãos foram convocados.” Não “cidadões”. Capitães e mãos não seguem o mesmo molde.',
      '“O ofício foi entregue; tínhamos entregado a cópia.” Tendência clássica dos particípios duplos.',
      '“Porta meio aberta” (advérbio invariável) × “meia hora” (numeral/adjetivo).',
    ],
    publicAdminExamples: [
      '“Declaro-me quite com a tesouraria.” Quite no singular, combinando com o sujeito eu; “os servidores estão quites”.',
      '“A agente administrativa protocolou o pedido e juntou as guias inclusas.” Agente uniforme; inclusas flexiona com guias.',
    ],
    procedures: [
      'Identifique se o comando pede forma (flexão) ou combinação (concordância).',
      'No -ão, não aplique um único padrão: teste cidadãos × capitães × mãos.',
      'No composto, veja a classe de cada peça antes de pluralizar.',
      'No particípio duplo, olhe o auxiliar: ter/haver × ser/estar.',
      'Anexo/incluso/quite/obrigado: encontre o substantivo (ou o falante) com o qual concordam.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — anexas no expediente',
        setup: 'Despacho: “Segue anexo as certidões de tempo de serviço.” O item pergunta onde há erro de flexão/concordância.',
        steps: [
          'Sujeito: as certidões (plural feminino). O verbo segue deve ir ao plural: seguem.',
          'Anexo é adjetivo referindo-se a certidões → anexas.',
          '“Em anexo” seria locução, mas aqui o termo caracteriza o sujeito, não é locução.',
          'Correção: “Seguem anexas as certidões de tempo de serviço.”',
        ],
        result: 'Erro duplo: verbo no singular e adjetivo no masculino. Flexão de anexo é o núcleo; a concordância verbal vem junto.',
      },
      {
        title: 'Exemplo resolvido 2 — três destinos do -ão',
        setup: 'Alternativa única pede o plural correto de cidadão, capitão e mão na mesma frase de convocação.',
        steps: [
          'Cidadão → cidadãos (ão → ãos neste item? Atenção: cidadão → cidadãos).',
          'Capitão → capitães. Mão → mãos.',
          'O distrator aplica cidadãos a todos ou cidadões/capités.',
          'Não há um único sufixo de plural para -ão; cada lexema tem sua forma.',
        ],
        result: 'cidadãos, capitães, mãos. O item testa a recusa do padrão único, não a “lógica” da terminação.',
      },
      {
        title: 'Exercício guiado — particípio do ofício',
        setup: '“O requerimento já tinha sido _____ e o setor já _____ a cópia ao arquivo.” Opções: entregue/entregado nas duas lacunas.',
        steps: [
          'Primeira lacuna: passiva com ser (tinha sido) → tendência ao irregular: entregue.',
          'Segunda: auxiliar ter + particípio da ativa → tendência ao regular: entregado (tinha entregado).',
          'Inverter os dois é o distrator clássico.',
          'Se a alternativa misturar polêmica, prefira a que segue essa tendência de prova média.',
        ],
        result: 'tinha sido entregue / tinha entregado. Auxiliar manda na forma.',
      },
    ],
    recallPrompts: [
      'Cite os três destinos de plural de substantivos em -ão com um exemplo de cada.',
      'Quando a tendência de prova pede entregue e quando pede entregado?',
      'Qual a diferença entre “documento em anexo” e “documentos anexos”?',
      'O que o Anexo IV pede em flexão — e o que fica para concordância e para tempos verbais?',
    ],
    recallAnswers: [
      'cidadãos (ãos), capitães (ães), mãos (ãos). Não se aplica um molde único.',
      'Entregue com ser/estar (passiva/estado); entregado com ter/haver (tempo composto da ativa), na tendência clássica.',
      'Em anexo é locução invariável; anexos/anexas é adjetivo e concorda com o substantivo.',
      'Pede a forma que marca gênero, número, grau, pessoa, tempo, modo e voz. Concordância é a combinação; emprego de tempos e modos é lição própria.',
    ],
    commonErrors: [
      'Deixar anexo invariável por influência do jargão (“documentos anexo”).',
      'Plural cidadões ou um só padrão para todo -ão.',
      'Inverter particípio regular/irregular em relação ao auxiliar.',
      'Flexionar meio advérbio (“porta meia aberta” quando meio modifica o adjetivo).',
      'Tratar agente como se o feminino fosse “agenta”.',
    ],
    traps: [
      'Mãos × capitães × cidadãos no mesmo item, para induzir um só padrão.',
      'Meio-dia e meia: flexão de meio como numeral (“meia hora”), não como advérbio.',
      '“Segue anexo” com sujeito feminino plural, misturando flexão e concordância.',
    ],
    relatedLessonIds: ['pt-classes', 'pt-concordancia', 'pt-verbos', 'pt-ortografia'],
    relatedEditalItems: ['ed-pt-18'],
    synthesis:
      'Flexão é a forma que muda para marcar gênero, número, grau, pessoa, tempo, modo e voz. Anexos/inclusas, os plurais de -ão e os particípios duplos são o rendimento imediato; o resto alimenta concordância e tempos verbais, sem substituí-los.',
    glossary: [
      { term: 'Uniforme', definition: 'Palavra com a mesma forma para os dois gêneros, marcada pelo determinante.' },
      { term: 'Grau', definition: 'Variação de intensidade (aumentativo, diminutivo, comparativo, superlativo).' },
      { term: 'Particípio duplo', definition: 'Par regular/irregular do mesmo verbo (entregado/entregue, pagado/pago).' },
      { term: 'Locução em anexo', definition: 'Expressão invariável; não autoriza deixar o adjetivo anexo sem concordar quando ele caracteriza o substantivo.' },
    ],
    masteryCriteria: [
      'Flexionar anexo/incluso/quite em frases reais.',
      'Escolher o plural correto de substantivos em -ão.',
      'Empregar particípio irregular com ser e regular com ter, quando a alternativa seguir essa tendência.',
      'Pluralizar composto olhando a classe de cada peça, não o “ouvido”.',
      'Distinguir substantivo uniforme de biforme pelo artigo.',
    ],
  }),

  pt({
    id: 'pt-ortografia',
    areaId: DISCIPLINE,
    chapterId: 'pt-norma',
    topicId: 'pt-ortografia',
    title: 'Norma-padrão e ortografia oficial',
    objective:
      'Grafar conforme a norma-padrão e o Acordo Ortográfico da Língua Portuguesa, promulgado no Brasil pelo Decreto nº 6.583/2008, exigido pelo item 16.3 do edital.',
    estimatedMinutes: 32,
    importance: pesoProva(
      'O item 16.3 do Edital 01/2026 determina a observância do Acordo Ortográfico (Decreto 6.583/2008). Ortografia não é “achismo de letra”: é norma citada. Vale 14 questões no conjunto de Português; um item de hífen ou de por que pode ser o sétimo acerto do corte.',
    ),
    prerequisites: ['pt-acentuacao', 'pt-estrutura-palavras'],
    essencial: [
      named(
        'O que o edital mandou usar',
        'O programa pede norma-padrão e ortografia oficial. O item 16.3 remete ao Acordo Ortográfico, internalizado pelo Decreto nº 6.583/2008. Na prática de prova: hífen, alfabeto com k/w/y, trema abolido em palavras portuguesas, e as regras de acentuação (estas têm lição própria). Não estude pelo formulário antigo do trema (linguiça, não lingüiça).',
      ),
      named(
        'Hífen: o núcleo do acordo na prova média',
        'Usa-se hífen com prefixos diante de palavra com h (anti-higiênico) e quando o prefixo termina com a mesma vogal que inicia o segundo elemento (anti-inflamatório, micro-ondas). Sem hífen quando as vogais são diferentes (autoescola, infraestrutura), salvo exceções de uso (além do, bem-estar). Com r ou s depois de prefixo vogal, duplica-se a consoante (antirrugas, minissaia), não se usa hífen. Ex- e vice- tendem a hífen (ex-diretor, vice-prefeito).',
      ),
      named(
        'Por que / porque / porquê / por quê',
        'Por que: pergunta ou “pelo qual” (Por que atrasou? / o motivo por que atrasou). Porque: resposta/causa. Por quê: fim de período (Atrasou por quê?). Porquê: substantivo (o porquê do atraso). Esse quarteto é item quase certo em banca tradicional e continua válido no acordo.',
      ),
    ],
    completo: [
      named(
        'Mal × mau, há × a, mas × mais, onde × aonde',
        'Mal (oposto de bem; substantivo; conjunção temporal). Mau (oposto de bom). Há = existir/tempo decorrido; a = preposição/futuro (“daqui a dois dias”). Mas = oposição; mais = quantidade. Onde = estar em; aonde = ir a. São ortografia e significação ao mesmo tempo.',
      ),
      named(
        'Sufixos e letras difíceis',
        '-ês/-esa (português, portuguesa), -ez/-eza (altivez, pobreza), -ção/-são/-ssão conforme o radical. Isso não está “no decreto” peça a peça; está na norma-padrão que o edital também pede. Decore famílias: pretensão, compreensão; cessão (ceder), sessão (reunião), seção (setor).',
      ),
      named(
        'Como o item aparece',
        '“Estão grafadas corretamente.” “O hífen está empregado como prevê o acordo em.” Técnica: isole prefixo + segundo elemento e aplique a regra da letra/vogal igual. Para porquê, veja se há artigo e se há pergunta.',
      ),
      named(
        'Hífen em detalhe: h, vogal igual, r/s, ex-, vice-',
        'Com h: anti-higiênico, super-homem. Vogais iguais: anti-inflamatório, micro-ondas. Vogais diferentes: autoescola, infraestrutura, aeroespacial — em regra sem hífen. R ou s após prefixo vogal: duplica, sem hífen (antirrugas, minissaia, contrarregra). Ex- e vice-: hífen (ex-diretor, vice-prefeito). Micro-ondas (o+o) ao lado de microempresa (o+e) é o par que a prova cola para induzir um só padrão. O hífen do composto (guarda-chuva) é o mesmo acordo; o processo morfológico se classifica na lição de estrutura.',
      ),
      named(
        'Sessão, cessão, seção; mal/mau; há/a',
        'Sessão = reunião; cessão = ceder; seção = setor (a seção de cadastro realiza sessão sobre cessão de servidores). Mal × mau: troque por bem/bom. Há = existir ou tempo decorrido; a = preposição ou futuro (“daqui a dois dias”; “há dois dias o ofício chegou”). Mas × mais. Onde (estar em) × aonde (ir a). Isso é norma-padrão do mesmo item de programa; o Decreto 6.583/2008 não inventou essas diferenças — não atribua ao acordo o que é vocabulário tradicional.',
      ),
      named(
        'O quarteto por que na prática do expediente',
        'Por que atrasou o protocolo? (pergunta). O motivo por que atrasou / pelo qual (relativo). Atrasou porque faltou documento (causa). Atrasou por quê? (fim de período). Não sei o porquê do indeferimento (substantivo, com artigo). Porquê no início de pergunta indireta sem artigo é erro (“Quero saber porquê atrasou” → por que). O quarteto continua válido no acordo; não é “regra antiga”.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: o que o acordo não resolveu sozinho',
        'O Decreto 6.583/2008 não inventa a diferença mas/mais nem a de sessão/cessão. Ele organiza hífen, trema, alfabeto e parte da acentuação. Em aprofundamento, não atribua ao decreto o que é vocabulário tradicional. Seja preciso: “exigido pelo 16.3” vale para o acordo; o resto é norma-padrão do mesmo item de programa.',
      ),
      named(
        'Trema e notações',
        'Trema abolido em palavras portuguesas (tranquilo, linguística). Permanece em nomes próprios estrangeiros e derivados quando a grafia de origem o exige. Não escreva agüentar.',
      ),
    ],
    revisaoRapida: blocks(
      'Decreto 6.583/2008 = Acordo Ortográfico, item 16.3 do edital.',
      'Hífen: h; vogais iguais; ex-/vice-. Vogais diferentes: em regra sem hífen. r/s: duplica.',
      'Por que (pergunta/pelo qual) / porque (causa) / por quê (fim) / porquê (substantivo).',
      'Há tempo; daqui a dois dias. Mal × mau. Sessão, cessão, seção.',
    ),
    definitions: [
      { term: 'Acordo Ortográfico', definition: 'Norma de unificação gráfica da língua portuguesa, promulgada no Brasil pelo Decreto nº 6.583/2008.' },
      { term: 'Norma-padrão', definition: 'Variedade de referência da escrita formal cobrada em concurso, além da ortografia stricto sensu.' },
      { term: 'Item 16.3', definition: 'Dispositivo do Edital 01/2026 de Itarema que manda observar o Acordo Ortográfico (Decreto 6.583/2008).' },
      { term: 'Trema', definition: 'Sinal diacrítico abolido nas palavras portuguesas pelo acordo vigente (tranquilo, não tränqüilo).' },
    ],
    comparisons: [
      {
        title: 'O que o Decreto 6.583/2008 organiza × o que é vocabulário tradicional',
        leftLabel: 'Âncora do 16.3 (acordo)',
        rightLabel: 'Norma-padrão do mesmo item, não “inventada” pelo decreto',
        rows: [
          { label: 'Hífen de prefixo', left: 'h; vogais iguais; r/s duplica; ex-/vice-', right: '—' },
          { label: 'Trema e alfabeto', left: 'trema abolido; k, w, y no alfabeto', right: '—' },
          { label: 'Por que / mal / há', left: 'grafia vigente, mas a distinção é anterior', right: 'quarteto por que; mal×mau; há×a; sessão/cessão/seção' },
        ],
      },
    ],
    examples: [
      'Anti-inflamatório (hífen: i+i). Infraestrutura (sem hífen: a+e). Antirrugas (rr, sem hífen).',
      '“Não sei o porquê do indeferimento.” Substantivo.',
      'Micro-ondas (hífen o+o) × microempresa (sem hífen o+e). Ex-diretor (hífen) × autoescola (sem).',
      'Há dois dias o ofício chegou × o ofício chega daqui a dois dias.',
    ],
    publicAdminExamples: [
      '“A seção de cadastro realiza sessão de treinamento sobre cessão de servidores.” Três grafias, três sentidos.',
      '“O ex-diretor da autoescola.” Ex- com hífen; autoescola sem hífen.',
    ],
    procedures: [
      'Isole prefixo + segundo elemento: h? vogal igual? r/s? ex-/vice-?',
      'No quarteto por que, pergunte: é pergunta, causa, fim de período ou substantivo?',
      'Mal/mau: troque por bem/bom. Há/a: existir-tempo × preposição-futuro.',
      'Não atribua ao decreto o que é sessão/cessão/seção.',
      'Risque trema em palavra portuguesa e à partir de.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — hífen que não é um só padrão',
        setup: 'O item pede a grafia correta segundo o acordo: microondas, micro-ondas, microempresa, micro-empresa.',
        steps: [
          'Micro + ondas: o + o, vogais iguais → hífen: micro-ondas.',
          'Micro + empresa: o + e, vogais diferentes → sem hífen: microempresa.',
          'Aplicar hífen nos dois (ou em nenhum) é o distrator do padrão único.',
          'Fundamento: Decreto 6.583/2008, item 16.3 — não “o ouvido do corredor”.',
        ],
        result: 'micro-ondas e microempresa. A regra é da letra/vogal, não do prefixo isolado.',
      },
      {
        title: 'Exemplo resolvido 2 — o porquê do indeferimento',
        setup: '“Quero saber porquê o pedido foi indeferido.” / “Não sei o porquê do indeferimento.” Qual está correta?',
        steps: [
          'Primeira: pergunta indireta, sem artigo — grafia por que (separado, sem acento). Porquê está errado.',
          'Segunda: o porquê = substantivo (o motivo). Correta.',
          'Por quê seria fim de período interrogativo (“Indeferiu por quê?”).',
          'Porque seria causa (“indeferiu porque faltou documento”).',
        ],
        result: 'Só a segunda frase está correta. O artigo (o porquê) é a pista do substantivo.',
      },
      {
        title: 'Exercício guiado — seção, sessão, cessão no ofício',
        setup: '“A sessão de cadastro realiza seção de treinamento sobre seção de servidores.” Tudo errado. Corrija.',
        steps: [
          'Setor: seção de cadastro.',
          'Reunião/evento: sessão de treinamento.',
          'Ato de ceder: cessão de servidores.',
          'Três grafias, três sentidos; o decreto não as criou, a norma-padrão as exige.',
        ],
        result: 'A seção de cadastro realiza sessão de treinamento sobre cessão de servidores.',
      },
    ],
    recallPrompts: [
      'Qual a âncora normativa da ortografia neste edital?',
      'Quando o prefixo leva hífen, quando duplica r/s e quando se cola?',
      'Recite o quarteto por que com um exemplo de cada.',
      'O Decreto 6.583/2008 resolve mal/mau e sessão/cessão/seção?',
    ],
    recallAnswers: [
      'Item 16.3 do Edital 01/2026: Acordo Ortográfico promulgado pelo Decreto nº 6.583/2008.',
      'Hífen: diante de h, vogais iguais, ex-/vice-. R/s após prefixo vogal: duplica, sem hífen. Vogais diferentes: em regra cola (autoescola).',
      'Por que atrasou? / o motivo por que atrasou; atrasou porque faltou peça; atrasou por quê?; o porquê do indeferimento.',
      'Não. Organiza hífen, trema, alfabeto e parte da acentuação. Mal/mau e sessão/cessão/seção são norma-padrão do mesmo item de programa, vocabulário tradicional.',
    ],
    commonErrors: [
      'Lingüiça, agüentar (trema morto no português).',
      'À partir de; porquê no início de pergunta indireta sem artigo.',
      'Um só padrão de hífen para micro-ondas e microempresa.',
      'Há dois dias no lugar de daqui a dois dias (ou o inverso).',
    ],
    traps: [
      'Micro-ondas (hífen: o+o) ao lado de microempresa (sem hífen), para induzir um só padrão.',
      'Item que mistura grafia pré-acordo com pós-acordo e pede “a correta segundo o decreto”.',
      'Porquê substantivo sem artigo no lugar de por que interrogativo.',
    ],
    relatedLessonIds: ['pt-acentuacao', 'pt-significacao', 'pt-estrutura-palavras'],
    relatedEditalItems: ['ed-pt-19'],
    sourceIds: ['src-edital', 'src-didatico', 'src-decreto6583'],
    synthesis:
      'Ortografia de Itarema tem âncora normativa: Decreto 6.583/2008, item 16.3. Hífen, trema e o quarteto por que são o rendimento; sessão/cessão/seção e há/a completam o pacote da norma-padrão.',
    glossary: [
      { term: 'Trema', definition: 'Sinal diacrítico abolido nas palavras portuguesas pelo acordo vigente.' },
      { term: 'Hífen', definition: 'Traço de união em certos prefixos, compostos e encadeamentos, com regras refeitas pelo acordo.' },
      { term: 'Quarteto por que', definition: 'Por que (pergunta/pelo qual), porque (causa), por quê (fim de período), porquê (substantivo).' },
      { term: 'Item 16.3', definition: 'Mandamento do Edital 01/2026 que remete ao Decreto 6.583/2008.' },
    ],
    masteryCriteria: [
      'Citar o Decreto 6.583/2008 como fundamento do item 16.3, sem fingir que ele regula toda a gramática.',
      'Aplicar hífen em prefixo + h, vogais iguais e ex-.',
      'Grafar por que/porque/por quê/porquê em quatro frases distintas.',
      'Distinguir sessão, cessão e seção em frase de expediente.',
      'Grafar mal/mau e há/a sem trocar o par.',
    ],
  }),

  pt({
    id: 'pt-acentuacao',
    areaId: DISCIPLINE,
    chapterId: 'pt-norma',
    topicId: 'pt-acentuacao',
    title: 'Acentuação gráfica',
    objective:
      'Aplicar as regras de oxítonas, paroxítonas e proparoxítonas, inclusive as alterações do Acordo Ortográfico (ditongos abertos em paroxítonas, i/u em hiatos depois de ditongo, acento diferencial residual).',
    estimatedMinutes: 30,
    importance: pesoProva(
      'Acentuação é item rápido e traiçoeiro depois do acordo. Quem ainda acentua ideia, jiboia e assembleia erra no que o Decreto 6.583/2008 mudou — e o edital mandou seguir essa norma.',
    ),
    prerequisites: ['pt-ortografia'],
    essencial: [
      named(
        'A tonicidade manda',
        'Antes de lembrar exceção, classifique a sílaba tônica. Oxítona: última — acento se terminar em a(s), e(s), o(s), em, ens (sofá, café, vovô, também, parabéns). Paroxítona: penúltima — acento se NÃO terminar nesse grupo, isto é, se terminar em l, n, r, x, i(s), u(s), um, uns, ão(s), ditongo (fácil, hífen, caráter, tórax, táxi, vírus, álbum, órgão, história). Proparoxítona: antepenúltima — todas acentuadas (próximo, pública, hidrelétrica). A regra geral ainda vale; o Acordo (Decreto 6.583/2008, item 16.3 do edital) mexeu nas exceções, não no esqueleto.',
      ),
      named(
        'O que o acordo tirou — e a prova cobra',
        'Não se acentuam mais os ditongos abertos ei, oi em paroxítonas: ideia, assembleia, jiboia, heroico, assembleia. Oxítonas continuam: papéis, herói, fiéis. Não se acentua i/u tônicos de hiato se antes houver ditongo: feiura, bocaiuva (não feiúra). Paroxítonas com oo/ee perderam o acento: voo, enjoo, creem, leem, deem. Memorizar a lista negativa rende mais do que reler a regra dez vezes. Quem ainda escreve idéia/assembléia erra o que o edital mandou seguir.',
      ),
      named(
        'Acento diferencial que restou',
        'Pôde (pretérito perfeito) × pode (presente). Pôr (verbo) × por (preposição). Tem/têm, vem/vêm, contém/contêm (3ª pessoa do plural com circunflexo). Fôrma (molde) pode levar acento para distinguir de forma, facultativo. Não volte o acento de pára, péla, pólo, côa — caíram no acordo. Lê (verbo, monossílabo tônico) × le (pronome, átono, raro neste registro). O diferencial residual é pouco; a prova cobra justamente esse pouco.',
      ),
    ],
    completo: [
      named(
        'Hiato i/u: a regra e o corte do acordo',
        'Acentuam-se i e u tônicos que formam hiato, sozinhos ou com s, não seguidos de nh: saída, saúde, baú, Luís, país, aí. Não: juiz, ruim, raiz (i seguido de z ou ditongo, conforme a análise escolar estável). Não: feiura, bocaiuva (ditongo anterior + u — corte do acordo). Não: rainha (nh). Item clássico pós-acordo: a alternativa com feiúra ou idéia é a grafia antiga, hoje errada. Saída continua acentuada: não há ditongo antes do i.',
      ),
      named(
        'Monossílabos tônicos e átonos',
        'Acentuam-se os tônicos terminados em a(s), e(s), o(s): pá, pé, pôs, mês, lê, vê, dá. Monossílabos átonos (de, em, se, lhe, o) não. Isso se cruza com crase: à é acento grave de fusão, não agudo de tonicidade. Pôde tem circunflexo diferencial, não é monossílabo. No ofício, “o setor lê o expediente” leva acento; “os servidores leem” não leva (acordo: ee). Não misture os dois tópicos no comentário mental — mas na prova eles podem aparecer na mesma questão.',
      ),
      named(
        'Paroxítonas “estranhas” que a banca lista',
        'Fácil, hífen, caráter, revólver, tórax, táxi, bônus, vírus, álbum, fórum, órgão, bênção, história, série, água. O critério é a terminação fora de a/e/o/em/ens. Hífen (paroxítona em n) leva acento; hifens no plural perde o acento em muitas descrições porque a tônica se desloca — confira a alternativa. Não acentue casa, mesa, prazo (paroxítonas em a). Analogia com oxítona (“sofá, logo prázo”) é o distrator de quem inverte a regra.',
      ),
      named(
        'Oxítonas em em/ens e os pares tem/têm',
        'Também, porém, parabéns, armazéns: oxítonas em em/ens. Verbos ter/vir na 3ª singular não levam circunflexo (tem, vem, contém no singular? contém é oxítona em em, tem acento pela regra da oxítona, não pelo diferencial de plural). Atenção: contém (ele) já é oxítona acentuada; contêm (eles) marca o plural com circunflexo. Tem (ele) × têm (eles); vem × vêm. Esse par no mural da Prefeitura (“os servidores têm prazo”) é item rápido.',
      ),
      named(
        'Trema, grave e agudo — sinais que não se misturam',
        'Trema foi abolido em palavras portuguesas (tranquilo, linguística, aguentar) — isso é ortografia, mas aparece no mesmo item de acentuação. Acento agudo/circunflexo = tonicidade. Grave = crase (à, às, àquela). Se o item mostrar á Prefeitura no lugar de à Prefeitura, o erro não é de oxítona: é crase com o sinal errado. Não “corrija” crase com regra de paroxítona.',
      ),
      named(
        'Como o item aparece',
        '“Apenas uma está acentuada corretamente.” “O acento em X justifica-se porque.” “Segundo o Acordo Ortográfico, está correta a grafia.” Técnica: (1) classifique oxítona/paroxítona/proparoxítona; (2) aplique a regra geral; (3) subtraia o que o acordo aboliu (ideia, voo, feiura, pára); (4) confira diferenciais residual (pôde, pôr, têm). O fundamento normativo é o Decreto 6.583/2008, item 16.3 — o mesmo da lição de ortografia, recorte de acento.',
      ),
    ],
    aprofundamento: [
      named(
        'Não misture acento com crase',
        'O acento agudo e o circunflexo marcam tonicidade (café, pôde). O grave marca crase (à, às). São tópicos vizinhos no edital (acentuação e regência), mas sinais diferentes. Se o item mostrar á em à Prefeitura, o erro não é de oxítona: é crase grafada com o sinal errado. Resolva a tonicidade aqui e a fusão a+a na lição de regência.',
      ),
      named(
        'O que o acordo não transformou em capítulo extra',
        'O Decreto 6.583/2008 organiza hífen, trema, alfabeto e parte da acentuação. Não inventa a diferença casa/café e não pede história da reforma. O Anexo IV lista acentuação gráfica; a âncora normativa do certame é o item 16.3. Não afirme que “a IDIB sempre cobra ideia”: o que se garante é a grafia vigente. Grafia pré-acordo é distrator, não “variante aceita em Itarema”.',
      ),
    ],
    revisaoRapida: blocks(
      'Proparoxítona: todas. Oxítona: a, e, o, em, ens. Paroxítona: o resto “estranho” (l, n, r, x, i, u, ão, ditongo).',
      'ideia, assembleia, jiboia, voo, leem, feiura: sem acento (acordo). papéis, herói: com.',
      'pôde × pode; pôr × por; tem × têm; vem × vêm.',
      'saída, saúde, baú: hiato. Grave (à) é crase, não tonicidade. Item 16.3 = Decreto 6.583/2008.',
    ),
    definitions: [
      { term: 'Oxítona', definition: 'Palavra com tônica na última sílaba.' },
      { term: 'Paroxítona', definition: 'Palavra com tônica na penúltima sílaba.' },
      { term: 'Proparoxítona', definition: 'Palavra com tônica na antepenúltima sílaba; todas recebem acento.' },
      { term: 'Acento diferencial residual', definition: 'Acento que ainda distingue homógrafos depois do acordo (pôde/pode, pôr/por, têm/tem).' },
    ],
    comparisons: [
      {
        title: 'Antes e depois do acordo (o que a prova testa)',
        leftLabel: 'Grafia vigente (Decreto 6.583/2008)',
        rightLabel: 'Grafia antiga (errada hoje)',
        rows: [
          { label: 'Ditongo ei/oi paroxítono', left: 'ideia, jiboia, assembleia', right: 'idéia, jibóia, assembléia' },
          { label: 'oo / ee', left: 'voo, leem, deem', right: 'vôo, lêem, dêem' },
          { label: 'Oxítona ei/oi', left: 'papéis, herói', right: 'continua acentuada' },
          { label: 'Hiato após ditongo', left: 'feiura, bocaiuva', right: 'feiúra' },
        ],
      },
    ],
    examples: [
      'Pública (proparoxítona). Caráter (paroxítona em r). Também (oxítona em em).',
      'Ele pôde ontem; ele pode hoje. Pôr o carimbo × por prazo.',
      'ideia, assembleia, jiboia, voo, leem, feiura: sem acento.',
      'saída e saúde: hiato i/u acentuado; feiura: sem acento (ditongo + u).',
    ],
    publicAdminExamples: [
      '“A assembleia municipal lê o expediente.” Assembleia (sem acento no ei paroxítono) e lê (monossílabo tônico em e).',
      '“Os servidores têm prazo; o servidor tem prazo.” Circunflexo só no plural de ter.',
    ],
    procedures: [
      'Separe sílabas e marque a tônica: oxítona, paroxítona ou proparoxítona.',
      'Aplique a regra geral da terminação.',
      'Subtraia o que o acordo aboliu (ei/oi paroxítonos, oo/ee, hiato após ditongo, pára/péla/pólo).',
      'Confira diferenciais residual: pôde, pôr, têm, vêm.',
      'Não use agudo no lugar do grave da crase.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — assembleia no ofício',
        setup: 'Ofício cita “a assembléia municipal”. O item, ancorado no acordo vigente, pergunta se a grafia está correta.',
        steps: [
          'Classifique: as-sem-blei-a — tônica em blei, paroxítona, ditongo ei aberto.',
          'O acordo aboliu o acento de ei/oi em paroxítonas.',
          'Grafia vigente: assembleia. Assembléia é forma pré-acordo, hoje errada.',
          'Oxítona papéis continuaria acentuada — não generalize o corte às oxítonas.',
        ],
        result: 'assembleia, sem acento. O item 16.3 manda seguir o Decreto 6.583/2008.',
      },
      {
        title: 'Exemplo resolvido 2 — têm no mural',
        setup: 'Mural: “O servidor tem prazo. Os servidores tem prazo.” Há erro em uma das frases?',
        steps: [
          'Tem (3ª singular de ter) não leva circunflexo.',
          'Têm (3ª plural) leva circunflexo diferencial de número.',
          'A segunda frase deveria ser “Os servidores têm prazo.”',
          'Não é oxítona em em (como também): é o par tem/têm.',
        ],
        result: 'Singular tem, plural têm. O mural no plural sem circunflexo está errado.',
      },
      {
        title: 'Exercício guiado — feiura × saída',
        setup: 'Alternativas: feiúra, feiura, saída, saida. Quais estão corretas segundo o acordo?',
        steps: [
          'Saída: hiato i tônico, sem ditongo anterior → acento. Saidá/saida sem acento é erro.',
          'Feiura: ditongo ei + u tônico de hiato → o acordo tira o acento. Feiúra é grafia antiga.',
          'O “mesmo” hiato i/u não recebe o mesmo tratamento depois de ditongo.',
          'Gabarito vigente: feiura e saída.',
        ],
        result: 'A regra do hiato permanece; o corte é só após ditongo. Analogia cega (saída → feiúra) é o distrator.',
      },
    ],
    recallPrompts: [
      'Recite a regra geral de oxítona, paroxítona e proparoxítona.',
      'Liste quatro grafias que o acordo tirou e duas oxítonas que ele manteve.',
      'Quais acentos diferenciais restaram? Dê pôde/pode e tem/têm.',
      'Qual a âncora normativa deste item no edital de Itarema?',
    ],
    recallAnswers: [
      'Oxítona: acento em a(s), e(s), o(s), em, ens. Paroxítona: acento se NÃO terminar nesse grupo. Proparoxítona: todas.',
      'Tirou: ideia, assembleia, jiboia, voo/leem/feiura (entre outras). Manteve: papéis, herói.',
      'Pôde (pretérito) × pode (presente); pôr × por; têm/vêm/contêm no plural. Pára/péla/pólo caíram.',
      'Item 16.3: Acordo Ortográfico promulgado pelo Decreto nº 6.583/2008. Acentuação vigente é essa, não a grafia de ensino antigo.',
    ],
    commonErrors: [
      'Acentuar ideia/heroico/assembleia como no ensino antigo.',
      'Esquecer têm/vêm no plural.',
      'Acentuar feiura por analogia com saída.',
      'Acentuar paroxítona em a (prazo, casa) por analogia com oxítona.',
      'Usar agudo no lugar do grave da crase (á Prefeitura).',
    ],
    traps: [
      'Misturar acento agudo de tonicidade com grave da crase.',
      'Acentuar paroxítona em a (casa) por analogia com oxítona.',
      'Cortar o acento de papéis/herói porque “o acordo tirou o ei/oi”.',
    ],
    relatedLessonIds: ['pt-ortografia', 'pt-regencia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-20'],
    synthesis:
      'Acentuação vigente é a do acordo (Decreto 6.583/2008, item 16.3): classifique a tônica, aplique a regra geral e subtraia o que o acordo aboliu (ideia, voo, feiura). Pôde/pôr e têm/vêm restaram. Grave é crase, não tonicidade.',
    glossary: [
      { term: 'Hiato', definition: 'Encontro de vogais em sílabas distintas (sa-í-da).' },
      { term: 'Ditongo', definition: 'Vogal + semivogal na mesma sílaba (pai, ideia).' },
      { term: 'Acento diferencial', definition: 'Acento que distingue homógrafos (pôde/pode, pôr/por).' },
      { term: 'Decreto 6.583/2008', definition: 'Promulga no Brasil o Acordo Ortográfico; âncora do item 16.3 do edital de Itarema.' },
    ],
    masteryCriteria: [
      'Classificar palavra como oxítona, paroxítona ou proparoxítona e justificar o acento.',
      'Grafar corretamente ideia, assembleia, jiboia, voo, leem, feiura.',
      'Empregar pôde, pôr, têm e vêm.',
      'Distinguir acento agudo/circunflexo (tonicidade) de grave (crase).',
      'Citar o Decreto 6.583/2008 como fundamento da grafia vigente, sem atribuir a ele o que é só vocabulário tradicional.',
    ],
  }),
]
