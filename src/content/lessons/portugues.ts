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
    ],
    publicAdminExamples: [
      'Ofício que “solicita providências com a máxima urgência” não autoriza inferir que houve crime ou má-fé; só há pedido com marcação de prioridade.',
      'Relatório de fila no setor de cadastro: o número de atendidos é dado explícito; dizer que “a gestão fracassou” é juízo que o relatório pode não ter feito.',
    ],
    commonErrors: [
      'Marcar a alternativa mais “bonita” ou mais moralizante, e não a mais fiel.',
      'Ignorar “exceto” / “não” e escolher a primeira frase verdadeira em relação ao texto.',
      'Responder com base no título ou no primeiro parágrafo, sem checar o fecho.',
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
    ],
    examples: [
      '§1: tese (“o rastro digital só vale se for lido”). §2: exemplo de protocolo perdido. Função do §2: particularizar a tese, não substituí-la.',
      'Quebra: parágrafo que passa de prazo de certidão para biografia do prefeito sem conector nem retomada.',
    ],
    publicAdminExamples: [
      'Memorando com três parágrafos: (1) referência ao processo; (2) fato e fundamento; (3) encaminhamento. Cada bloco tem função distinta; misturá-los gera item “prejuízo à clareza”.',
    ],
    commonErrors: [
      'Chamar qualquer primeira frase de tópico frasal, mesmo quando o núcleo vem depois da concessão.',
      'Achar que parágrafo curto é necessariamente conclusão.',
    ],
    traps: [
      'Alternativa que descreve o tema do parágrafo, não a função (“fala de fila” em vez de “exemplifica o congestionamento”).',
      'Confundir enumeração de apoio com mudança de tese.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-articulacao', 'pt-periodo'],
    relatedEditalItems: ['ed-pt-02'],
    synthesis:
      'Estrutura é o mapa do texto: núcleo de cada parágrafo, progressão dado/novo e função (apresentar, apoiar, contrapôr, fechar). Quem só “entende a ideia” sem ver o mapa perde itens fáceis.',
    glossary: [
      { term: 'Coerência', definition: 'Compatibilidade de sentidos no interior do texto.' },
      { term: 'Unidade parágrafica', definition: 'Concentração em torno de um núcleo com apoios pertinentes.' },
    ],
    masteryCriteria: [
      'Rotular a função de cada parágrafo de um texto de 4–5 blocos.',
      'Distinguir tópico frasal de frase de apoio.',
      'Explicar uma progressão por retomada + informação nova.',
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
    ],
    publicAdminExamples: [
      '“Encaminhe-se o expediente ao setor competente, a fim de que se manifeste.” A fim de que marca finalidade, não causa do encaminhamento.',
      '“O munícipe protocolou o pedido. Este, contudo, veio sem documento de identidade.” Este retoma pedido, não munícipe.',
    ],
    commonErrors: [
      'Atribuir “isso/esse” automaticamente a “todo o texto”.',
      'Traduzir todo “pois” como causa.',
      'Trocar embora por mas sem reescrever a oração.',
    ],
    traps: [
      'Antecedente mais próximo que não concorda (“fila” para um “eles”).',
      'Conector de concessão lido como oposição absoluta, apagando a parte concedida.',
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
    ],
    examples: [
      '“O rastro só tem valor se alguém o lê.” Valor = utilidade/relevância, não cotação financeira.',
      '“Folha” em “folha de pagamento” não é hipônimo de árvore; o contexto bloqueia a acepção botânica.',
    ],
    publicAdminExamples: [
      '“O setor de cadastro deitou o processo.” Sentido coloquial de abandonar/atrasar, não de recostar um objeto. Em prova, o registro informal pode ser o ponto do item.',
      'Despacho: “indefiro o pedido por falta de pressuposto.” Pressuposto = requisito jurídico, não “achismo”.',
    ],
    commonErrors: [
      'Escolher sinônimo “mais bonito” que altera o grau (quis = desejou, não anelou, se o texto é neutro).',
      'Tratar toda figuratividade como erro.',
    ],
    traps: [
      'Opção com sinônimo correto em outro contexto, errado neste.',
      'Antônimo de dicionário que não é oposição no texto (quente × frio quando o texto opõe quente × morno).',
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
    ],
    examples: [
      '“O setor indeferiu o recurso.” → “O recurso foi indeferido pelo setor.” Agente preservado.',
      '“Indeferiu-se os recursos” está incorreto; o certo é “indeferiram-se os recursos”.',
    ],
    publicAdminExamples: [
      '“Autorizo o pagamento” ≠ “O pagamento poderá ser autorizado”: some a assertividade do despacho.',
      '“Recebi o ofício e encaminhei-o” → “O ofício foi recebido e encaminhado por mim”: equivalente se o agente importa no texto.',
    ],
    commonErrors: [
      'Concordar a passiva sintética no singular com sujeito no plural.',
      'Reduzir oração com sujeito diferente sem marca (“Protocolando o pedido, o número saiu” — quem protocola?).',
    ],
    traps: [
      'Passiva que omite o agente justamente quando o texto o enfatiza.',
      'Troca de embora por porque em nome de “causar o mesmo efeito”.',
    ],
    relatedLessonIds: ['pt-verbos', 'pt-concordancia', 'pt-coordenacao-subordinacao', 'pt-construcao-frasal', 'pt-pontuacao'],
    relatedEditalItems: ['ed-pt-05'],
    synthesis:
      'Reescritura de prova é contabilidade: o que entra e o que sai da frase. Sentido e norma pesam juntos; beleza estilística não pontua.',
    glossary: [
      { term: 'Agente da passiva', definition: 'Quem pratica a ação na voz passiva, em geral com por.' },
      { term: 'Redução oracional', definition: 'Oração subordinada enxugada em infinitivo, gerúndio ou particípio.' },
    ],
    masteryCriteria: [
      'Passar frase para passiva analítica e sintética sem erro de concordância.',
      'Detectar quebra de paralelismo em enumeração.',
      'Recusar reescritura que altere modalizador ou negação.',
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
    importance: pesoProva(
      'O edital traz expressamente ícone, índice e símbolo. Não é enfeite: em nível médio a IDIB já usou charge e anúncio. Trate a imagem como texto, com tese e recursos.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-significacao'],
    essencial: [
      named(
        'Verbal, não verbal, multimodal',
        'Verbal: palavras. Não verbal: imagem, gesto, cor, layout, som. Multimodal: combinação (charge com legenda, infográfico, post). A leitura correta articula os dois planos: a legenda pode ironizar o desenho; o desenho pode desmentir o slogan.',
      ),
      named(
        'Ícone, índice, símbolo (Peirce na dose de concurso)',
        'Ícone: relação de semelhança (foto da praia, planta baixa, boneco de fila). Índice: relação de contiguidade/causa (fumaça → fogo; carimbo → tramitação; seta → direção). Símbolo: relação convencional (bandeira, brasão, R$, a palavra “protocolo”). Um mesmo signo pode ter camadas: a cruz é símbolo; uma foto da cruz é também icônica.',
      ),
      named(
        'A imagem também argumenta',
        'Charge constrói tese por exagero e contraste. Infográfico seleciona dados (e omite outros). Logotipo da Prefeitura é símbolo institucional. Pergunte: o que a imagem afirma que o verbal não diz — e vice-versa?',
      ),
    ],
    completo: [
      named(
        'Como o item aparece',
        '“O elemento X funciona como índice porque…” “A charge critica Y.” “Há contradição entre o slogan e a imagem.” Cuidado com alternativa que descreve o desenho (“há um homem e uma fila”) sem interpretar a tese.',
      ),
      named(
        'Não force a tríade em qualquer quadrado',
        'Se o comando não pede ícone/índice/símbolo, não perca tempo rotulando. Se pede, use o critério da relação (semelhança, contiguidade, convenção), não a beleza da palavra. Relógio desenhado na parede é ícone de relógio e pode ser índice de espera.',
      ),
      named(
        'Texto administrativo multimodal',
        'Requerimento com campos, carimbos e QR code: o carimbo é índice de ato; o brasão é símbolo; a foto 3×4 é ícone. Essa leitura ajuda itens de linguagem e, de quebra, o olhar de arquivo — sem transformar o tópico em Arquivologia (disciplina específica).',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: semiótica além do edital',
        'A linha do Anexo IV pára em ícone, índice e símbolo. Não invente “signo motivado versus arbitrário” como se fosse item autônomo. Use Peirce só na dose cobrada. Se a questão for só de tese da charge, responda interpretação, não teoria do signo.',
      ),
    ],
    revisaoRapida: blocks(
      'Ícone = parece. Índice = aponta/causa. Símbolo = convenção.',
      'Charge: descreva, depois extraia a tese. Descrição pura raramente é gabarito.',
      'Legenda e imagem podem se completar ou se contradizer de propósito.',
    ),
    definitions: [
      { term: 'Ícone', definition: 'Signo que se relaciona ao objeto por semelhança.' },
      { term: 'Índice', definition: 'Signo que se relaciona ao objeto por contiguidade ou causalidade.' },
      { term: 'Símbolo', definition: 'Signo que se relaciona ao objeto por convenção social.' },
    ],
    examples: [
      'Foto da orla de Itarema: ícone da paisagem. Setas no mapa de evacuação: índices de percurso. Brasão municipal: símbolo.',
      'Charge em que o “atendimento digital” é um computador com teia de aranha: tese — digitalizar sem uso é arquivo morto.',
    ],
    publicAdminExamples: [
      'Crachá com foto (ícone), código de barras (índice do cadastro) e brasão (símbolo da instituição).',
    ],
    commonErrors: [
      'Chamar qualquer imagem de símbolo.',
      'Ler a charge só pelo recorte visual, ignorando o título.',
    ],
    traps: [
      'Alternativa que moraliza a charge (“devemos ser honestos”) em vez de apontar a crítica específica.',
      'Classificar bandeira como ícone só porque “é um desenho”.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-significacao', 'pt-modalizadores'],
    relatedEditalItems: ['ed-pt-06'],
    synthesis:
      'Linguagem de prova inclui o que não é palavra. Ícone, índice e símbolo são o vocabulário mínimo que o edital exigiu; a tese da imagem continua sendo interpretação.',
    glossary: [
      { term: 'Multimodal', definition: 'Texto que articula mais de um modo (verbal, visual, espacial).' },
      { term: 'Charge', definition: 'Gênero gráfico de humor e crítica, em geral de circunstância.' },
    ],
    masteryCriteria: [
      'Classificar um signo da questão como ícone, índice ou símbolo com o critério da relação.',
      'Extrair tese de charge articulando desenho e legenda.',
      'Não reduzir item de imagem a mera descrição.',
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
    importance: pesoProva(
      'Modalização é linha expressa do Anexo IV. Trocar “talvez” por “certamente” anula equivalência e distorce tese. É gramática a serviço da leitura.',
    ),
    prerequisites: ['pt-interpretacao', 'pt-articulacao'],
    essencial: [
      named(
        'Modalizar é mostrar a aposta do falante',
        'O conteúdo proposicional pode ser o mesmo (“o prazo vence sexta”); a atitude muda com talvez, certamente, infelizmente, é preciso, parece. Modalizadores são advérbios, locuções, adjetivos avaliativos, verbos de opinião (creio, duvido) e até pontuação (reticências, aspas).',
      ),
      named(
        'Famílias úteis para prova',
        'Epistêmicos: certeza/dúvida (evidentemente, quiçá, provavelmente). Deônticos: obrigação/permissão (é obrigatório, pode-se). Afetivos/avaliativos: infelizmente, felizmente, lamentável. Intensificadores e atenuadores: muito, um tanto, em certa medida. Enfáticos: de fato, sim, realmente.',
      ),
      named(
        'Por que a banca ama isso',
        'Porque o candidato desatento lê só o “miolo” e ignora o grau. O texto diz “em tese, o sistema reduz fila”; a alternativa diz “o sistema reduz fila”. Sumiu o em tese. Gabarito errado.',
      ),
    ],
    completo: [
      named(
        'Como o item aparece',
        '“O termo infelizmente expressa avaliação negativa do enunciador.” “A substituição de pode por deve mantém o sentido.” (não mantém). “O emprego de aspas em ‘modernização’ indica distanciamento.”',
      ),
      named(
        'Modalização no texto oficial',
        'O despacho “autorizo” é deôntico-performativo: não descreve, realiza. “Sugiro que se avalie” atenua. No atendimento, “o senhor poderia assinar” é cortesia, não dúvida real sobre a capacidade de assinar. Leia o gênero.',
      ),
      named(
        'Negação e modalizador',
        '“Não é certo que o prazo venceu” ≠ “É certo que o prazo não venceu”. O alcance da negação (escopo) muda o gabarito. Itens de “palavra negativa” no comando se misturam com isso: circule o não do enunciado e o não do texto.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: evidencialidade',
        'Marcas de fonte (“segundo o relatório”, “diz-se”) mostram de onde vem a informação. Não estão nomeadas à parte no edital; caem como modalização ou articulação. Alternativa que transforma “segundo o relatório” em fato endossado pelo autor pode estar errada.',
      ),
    ],
    revisaoRapida: blocks(
      'Pergunte: o autor afirma, sugere, ordena ou avalia?',
      'Talvez/pode ≠ certamente/deve.',
      'Aspas e infelizmente são pistas de atitude, não enfeite.',
      'Negação + modalizador: cuide do escopo.',
    ),
    definitions: [
      { term: 'Modalizador', definition: 'Marca linguística da atitude do enunciador em relação ao que diz.' },
      { term: 'Modalização epistêmica', definition: 'Grau de certeza ou dúvida.' },
      { term: 'Modalização deôntica', definition: 'Grau de obrigação, permissão ou proibição.' },
    ],
    examples: [
      '“O protocolo talvez resolva a fila.” Alternativa “o protocolo resolve a fila” exagera.',
      '“De fato, o carimbo não substitui a leitura.” De fato confirma e enfatiza.',
    ],
    publicAdminExamples: [
      '“Recomenda-se o arquivamento” ≠ “Determino o arquivamento”: muda a força do ato.',
      'Placa “É proibido estacionar”: deôntico; não é palpite do zelador.',
    ],
    commonErrors: [
      'Apagar atenuadores na paráfrase.',
      'Ler cortesia (“poderia”) como dúvida epistêmica.',
    ],
    traps: [
      'Reescritura que troca pode por deve.',
      'Interpretar “em tese” como “na prática comprovada”.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'pt-articulacao', 'pt-significacao', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-07'],
    synthesis:
      'Modalizador é o volume e o selo de garantia da frase. Quem lê só o conteúdo e ignora a atitude erra item “fácil” de Português.',
    glossary: [
      { term: 'Atenuação', definition: 'Redução da força da afirmação (um pouco, talvez, em certa medida).' },
      { term: 'Ênfase', definition: 'Reforço da afirmação (de fato, realmente, sim).' },
    ],
    masteryCriteria: [
      'Classificar um modalizador como epistêmico, deôntico ou avaliativo.',
      'Recusar equivalência que altere o grau de certeza ou de obrigação.',
      'Ler aspas de distanciamento como atitude, não como citação obrigatória.',
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
    importance: pesoProva(
      'O edital separa construção frasal de período e de coordenação. Aqui o foco é clareza da frase: quem pratica a ação, o que se liga a quê, se a enumeração está paralela.',
    ),
    prerequisites: ['pt-periodo', 'pt-classes'],
    essencial: [
      named(
        'Frase clara tem dono da ação visível',
        'Sujeito explícito ou recuperável, verbo bem regido, complementos no lugar. A ordem direta é o porto seguro. Inversões são possíveis, mas a banca pune quando o adjunto “gruda” no termo errado: “O servidor atendeu o munícipe constrangido” — quem está constrangido?',
      ),
      named(
        'Ambiguidade estrutural',
        'Adjunto longe do núcleo, relativo mal colocado, coordenação com terceiro termo oscilante. Correção: aproximar o modificador, repetir a preposição, recortar a frase. Em prova, a alternativa “melhor” é a que desfaz a dupla leitura sem mudar o fato.',
      ),
      named(
        'Paralelismo e correlação',
        'Não só… mas também; tanto… quanto; ou… ou. Quebrar a correlação (“não só protocolou como o encaminhamento”) é erro de construção. Vale o mesmo para itens de equivalência.',
      ),
    ],
    completo: [
      named(
        'Vícios que caem em nível médio',
        'Pleonasmo vicioso (“subir para cima”, “há anos atrás”). Eco e cacofonia raramente decidem item isolado, mas ambiguidade e falta de paralelismo decidem. Não confunda pleonasmo vicioso com ênfase literária (“vi com meus próprios olhos” pode ser expressivo). O comando dirá se pede correção ou efeito.',
      ),
      named(
        'Frase fragmentada e período emaranhado',
        'Fragmento: “Motivo: falta de documento.” Em registro formal contínuo, prefere-se oração. O contrário também pune: período de sete linhas sem fôlego, com três relativas empilhadas. A construção boa é a que o leitor administrativo aguenta numa leitura só.',
      ),
      named(
        'Como o item aparece',
        '“Há ambiguidade em.” “A frase está clara apenas em.” “O paralelismo está preservado em.” Técnica: sublinhe sujeito e verbo; setas para os adjuntos; teste se cada enumerado tem a mesma forma.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: tópico e foco',
        '“Quanto ao prazo, este se encerrou ontem.” Há topicalização. Não é erro; é organização informacional. Só vira problema se gerar anacoluto sem marca (“O prazo, ontem se encerrou o processo”). Anacoluto expressivo pode aparecer em crônica; em ofício, é defeito. Ajuste ao gênero — aprofundamento, não linha nova do edital.',
      ),
    ],
    revisaoRapida: blocks(
      'Adjunto perto do termo que modifica.',
      'Enumeração com a mesma estrutura.',
      'Sujeito visível; evite “grudou o adjunto no substantivo errado”.',
      'Pleonasmo vicioso ≠ ênfase proposital.',
    ),
    definitions: [
      { term: 'Ambiguidade estrutural', definition: 'Duas árvores sintáticas possíveis para a mesma sequência.' },
      { term: 'Paralelismo', definition: 'Simetria formal entre termos coordenados ou correlatos.' },
      { term: 'Pleonasmo vicioso', definition: 'Repetição inútil de um conteúdo já expresso.' },
    ],
    examples: [
      'Ambíguo: “Encaminhou o ofício ao setor de pessoal interno.” Interno modifica setor ou ofício? Melhor: “Encaminhou ao Setor de Pessoal o ofício interno.”',
      'Paralelo: “Cabe receber, registrar e devolver.” Quebrado: “Cabe o recebimento, registrar e a devolução.”',
    ],
    publicAdminExamples: [
      '“Fica determinado aos servidores o uso do crachá, a pontualidade e que não se ausentem.” Quebra de paralelo: misturou SN e oração. Unifique: “uso do crachá, pontualidade e permanência no posto.”',
    ],
    commonErrors: [
      'Corrigir ambiguidade mudando o fato (trocar o agente).',
      'Aceitar gerúndio de gerundismo (“vamos estar protocolando”) como se fosse só estilo.',
    ],
    traps: [
      'Opção que “resolve” a ambiguidade mas introduz erro de regência.',
      'Pleonasmo literário cobrado como se fosse sempre erro.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-equivalencia', 'pt-pontuacao', 'pt-coordenacao-subordinacao'],
    relatedEditalItems: ['ed-pt-08'],
    synthesis:
      'Construção frasal é engenharia de clareza: sujeito, verbo, complementos alinhados, modificadores no lugar, enumerações paralelas. Em prova, a frase “inteligente” e opaca perde para a frase reta.',
    glossary: [
      { term: 'Anacoluto', definition: 'Quebra da estrutura iniciada, com mudança de percurso sintático.' },
      { term: 'Gerundismo', definition: 'Uso vicioso do gerúndio para marcar futuro ou cortesia esvaziada.' },
    ],
    masteryCriteria: [
      'Desfazer ambiguidade de adjunto sem alterar o conteúdo.',
      'Reescrever enumeração quebrada em forma paralela.',
      'Distinguir pleonasmo vicioso de ênfase.',
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
    importance: pesoProva(
      'É um dos eixos mais “mecanizáveis” do programa: treino rende ponto. Cuidado para não só rotular: a banca mistura classificação e equivalência de sentido.',
    ),
    prerequisites: ['pt-periodo', 'pt-articulacao'],
    essencial: [
      named(
        'Coordenação: orações de mesmo nível',
        'Sindéticas (com conectivo) e assindéticas (justapostas). Aditivas (e, nem), adversativas (mas, porém), alternativas (ou, ora… ora), conclusivas (portanto, logo), explicativas (pois, que, porque). Coordenar não é “somar ideias iguais”: adversativa contrapõe; conclusiva fecha raciocínio.',
      ),
      named(
        'Subordinação: uma oração depende da outra',
        'Substantivas (sujeito, objeto, predicativo, complemento, aposto). Adjetivas (restritiva sem vírgula; explicativa com vírgula). Adverbiais (causa, tempo, concessão, condição, finalidade, comparação, conformidade, proporcionalidade, consequência). A restrição × explicação muda o universo: “Os servidores que faltaram foram advertidos” (só os que faltaram) ≠ “Os servidores, que faltaram, foram advertidos” (todos faltaram).',
      ),
      named(
        'Valor semântico acima da etiqueta pronta',
        'Se e caso marcam condição, mas se também introduz integrante. Como pode ser causa ou comparação. Desde que pode ser tempo ou condição. Leia a relação, não só a lista decorada.',
      ),
    ],
    completo: [
      named(
        'Restritiva × explicativa na prática',
        'Sem vírgula, a adjetiva seleciona. Com vírgula, a adjetiva informa extra, pressupondo que o conjunto já está definido. Em prova, a vírgula não é detalhe: muda o gabarito de interpretação e de pontuação ao mesmo tempo.',
      ),
      named(
        'Concessão não é oposição rasa',
        'Embora / apesar de / ainda que: admite o fato e mesmo assim afirma o contrário. “Embora o sistema tenha caído, o atendimento seguiu.” Há queda E continuidade. Alternativa que diga “o sistema não caiu” errou a concessão.',
      ),
      named(
        'Como o item aparece',
        'Classificação pura; valor do conectivo; equivalência embora/mas; pontuação da adjetiva. Técnica: cubra o conectivo e pergunte a relação; depois confirme a lista.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: orações reduzidas',
        'Reduzidas de infinitivo, gerúndio e particípio desempenham os mesmos papéis. “Mesmo caindo o sistema, o atendimento seguiu” (concessão reduzida). O edital cobre isso também em equivalência e em tempos verbais; aqui, o ponto é o valor adverbial.',
      ),
    ],
    revisaoRapida: blocks(
      'Coordenadas: mesmo nível. Subordinadas: uma depende.',
      'Adjetiva sem vírgula restringe; com vírgula explica.',
      'Concessão admite o fato e mesmo assim contrapõe.',
      'Como/se/desde que: o sentido está no período, não só na palavra.',
    ),
    definitions: [
      { term: 'Oração coordenada', definition: 'Oração que se liga a outra sem função de termo interno.' },
      { term: 'Oração subordinada', definition: 'Oração que exerce função sintática (ou adverbial) em relação à principal.' },
      { term: 'Restritiva', definition: 'Adjetiva que seleciona um subconjunto do termo antecedente.' },
    ],
    comparisons: [
      {
        title: 'Conectivos vizinhos',
        leftLabel: 'Usa-se para',
        rightLabel: 'Não confundir com',
        rows: [
          { label: 'embora', left: 'Concessão', right: 'porque (causa)' },
          { label: 'a fim de que', left: 'Finalidade', right: 'à medida que (proporção)' },
          { label: 'portanto', left: 'Conclusão coordenada', right: 'pois explicativo posposto' },
        ],
      },
    ],
    examples: [
      '“Os processos que estavam incompletos voltaram.” Só os incompletos. Com vírgula após processos, todos estavam incompletos.',
      '“Protocolou o pedido e aguardou.” Aditiva. “Protocolou o pedido, portanto aguardou” força conclusão que o texto pode não ter.',
    ],
    publicAdminExamples: [
      '“Caso o documento não seja juntado, o pedido será indeferido.” Condição, típica de despacho-padrão.',
      '“Ainda que haja fila, o atendimento segue por senha.” Concessão: a fila existe e mesmo assim há método.',
    ],
    commonErrors: [
      'Chamar toda oração com que de adjetiva (pode ser substantiva).',
      'Pontuar restritiva como se fosse explicativa, mudando o sentido.',
    ],
    traps: [
      'Embora lido como negação do fato concedido.',
      'Pois conclusivo tratado como explicativo sem olhar a posição.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-articulacao', 'pt-pontuacao', 'pt-equivalencia', 'pt-verbos'],
    relatedEditalItems: ['ed-pt-09'],
    synthesis:
      'Coordenação e subordinação são o esqueleto do período composto. Classifique pela função e pelo valor; a vírgula da adjetiva é conteúdo, não ornamentação.',
    glossary: [
      { term: 'Sindética', definition: 'Oração coordenada introduzida por conectivo.' },
      { term: 'Integrante', definition: 'Que subordinada substantiva, sem função adjetiva.' },
    ],
    masteryCriteria: [
      'Separar adjetiva restritiva de explicativa pelo sentido e pela vírgula.',
      'Nomear o valor de orações adverbiais frequentes.',
      'Equivaler embora a mas com o ajuste estrutural correto.',
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
    importance: pesoProva(
      'O edital pede emprego de tempos e modos, não conjugação vazia. O item típico testa se o modo combina com a oração (dúvida, hipótese, ordem) e se a correlação se/então está certa.',
    ),
    prerequisites: ['pt-flexao', 'pt-coordenacao-subordinacao'],
    essencial: [
      named(
        'Modos: o que o falante faz com o fato',
        'Indicativo: fato dado como certo (O prazo venceu). Subjuntivo: hipótese, desejo, dúvida, finalidade (Se o prazo vencer; Espero que venha; A fim de que se manifeste). Imperativo: ordem, pedido, convite (Protocolize; Não se ausente). O modo errado muda o estatuto do fato — e o gabarito.',
      ),
      named(
        'Pretéritos que a banca cobra',
        'Pretérito perfeito: fato encerrado (indeferiu). Imperfeito: duração, hábito, pano de fundo (indeferia / era praxe). Mais-que-perfeito: anterior a outro passado (já indeferira quando o recurso chegou). Trocar perfeito por imperfeito não é “estilo”: muda aspecto.',
      ),
      named(
        'Correlação clássica',
        'Se + futuro do subjuntivo, futuro do presente: Se o documento chegar, o pedido seguirá. Se + pretérito imperfeito do subjuntivo, futuro do pretérito: Se o documento chegasse, o pedido seguiria. Misturar “Se o documento chegar, o pedido seguiria” é o erro mais treinado de prova.',
      ),
    ],
    completo: [
      named(
        'Futuros e locuções',
        'Futuro do presente: farei. Futuro do pretérito: faria (hipótese ou cortesia). Locução ir + infinitivo marca futuro próximo ou intenção. Haver de + infinitivo marca propósito. Gerundismo (“vamos estar encaminhando”) é vício, não futuro culto.',
      ),
      named(
        'Imperativo e tratamento',
        'Tu × você mudam a forma: fala (tu) / fale (você). No texto oficial predomina o você/senhor: “Solicite-se”; “Não o encaminhe sem número.” Pronome oblíquo e colocação atravessam este tópico e o de pronomes.',
      ),
      named(
        'Como o item aparece',
        'Preencher lacuna; apontar correlação correta; valor do pretérito; transposição de discurso (disse que protocolaria). Técnica: identifique a oração condicional ou final antes de conjugar.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: pretérito perfeito composto',
        'Tenho protocolado sugere processo que vem ocorrendo até agora, distinto de protocolo (fato único). É nuança de aspecto; caia se o texto contrastar hábito recente e evento pontual. Não é linha autônoma do edital.',
      ),
    ],
    revisaoRapida: blocks(
      'Indicativo = dado. Subjuntivo = hipótese/desejo/fim. Imperativo = ordem.',
      'Se chegar → seguirá. Se chegasse → seguiria.',
      'Perfeito = fato. Imperfeito = fundo/hábito. Mais-que-perfeito = anterior.',
      'Não misture chegar (fut. subj.) com seguiria.',
    ),
    definitions: [
      { term: 'Correlação verbal', definition: 'Ajuste de tempos/modos entre orações ligadas semanticamente.' },
      { term: 'Aspecto', definition: 'Modo como a ação é vista (pontual, durativa, concluída, anterior).' },
    ],
    examples: [
      '“Se o munícipe juntar a certidão, o cadastro será atualizado.” Correlação padrão.',
      '“Esperava-se que o sistema caísse” (subjuntivo em substantiva após verbo de expectativa no passado).',
    ],
    publicAdminExamples: [
      'Despacho: “Junte-se a procuração e, após, conclusos.” Imperativo/subjuntivo de fórmula, não relato no indicativo.',
      'Ata: “Às 9h, o presidente abriu a sessão.” Perfeito pontual; não “abria”, salvo se se quiser o pano de fundo.',
    ],
    commonErrors: [
      'Usar indicativo depois de “embora” (“embora o prazo venceu”). O culto pede subjuntivo: embora o prazo tenha vencido / vencesse.',
      'Tratar futuro do pretérito só como “educação”, ignorando a hipótese.',
    ],
    traps: [
      'Se + infinitivo em lugar de futuro do subjuntivo quando o sujeito é o mesmo (“Se chegar o documento” × “Se o documento chegar”).',
      'Opção que conjuga certo o verbo principal e erra o auxiliar da locução.',
    ],
    relatedLessonIds: ['pt-flexao', 'pt-coordenacao-subordinacao', 'pt-pronomes', 'pt-equivalencia'],
    relatedEditalItems: ['ed-pt-10'],
    synthesis:
      'Tempo e modo não são tabela para recitar: são escolha de estatuto do fato. Correlação se/então e o trio perfeito–imperfeito–mais-que-perfeito pagam a maior parte dos itens.',
    glossary: [
      { term: 'Subjuntivo', definition: 'Modo da hipótese, do desejo, da finalidade e de certas concessões.' },
      { term: 'Futuro do pretérito', definition: 'Tempo de hipótese no passado ou de cortesia (faria).' },
    ],
    masteryCriteria: [
      'Completar período condicional com a correlação culta.',
      'Explicar a diferença de aspecto entre indeferiu e indeferia.',
      'Empregar subjuntivo após embora e a fim de que.',
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
    importance: pesoProva(
      'Pontuação é item de alto rendimento: poucas regras decidem muitas questões. A mais cobrada é a vírgula entre sujeito e verbo — que não se usa.',
    ),
    prerequisites: ['pt-periodo', 'pt-coordenacao-subordinacao'],
    essencial: [
      named(
        'Vírgula não é pausa de leitura em voz alta',
        'A vírgula marca estrutura. Proibida entre sujeito e verbo, entre verbo e objeto direto, entre nome e complemento nominal direto. Obrigatória em vocativo, apostos explicativos, adjuntos deslocados em muitos casos, enumeração, intercalações. Facultativa em alguns deslocamentos curtos de adjunto adverbial — e a banca adora essa zona cinzenta: se o comando pede a única pontuação correta, fuja da facultativa controversa.',
      ),
      named(
        'As proibições que valem ponto',
        '“O setor de cadastro, arquivou o pedido.” Errado: vírgula sujeito/verbo. “O munícipe, que juntou a certidão foi atendido.” Errado: explicativa mal fechada. “Os servidores que faltaram, foram advertidos.” Vírgula indevida se a adjetiva é restritiva.',
      ),
      named(
        'Dois-pontos, ponto e vírgula, travessão',
        'Dois-pontos: anúncio de enumeração, esclarecimento, citação. Ponto e vírgula: separa itens já internamente vírgulados ou orações coordenadas longas. Travessão: diálogo, aposto enfático, intercalação. Parênteses: informação acessória. Aspas: citação, destaque, distanciamento.',
      ),
    ],
    completo: [
      named(
        'Adjunto adverbial deslocado',
        'Curto no início: vírgula facultativa (“Ontem o prazo venceu” / “Ontem, o prazo venceu”). Longo: tende a obrigatória (“No prazo de cinco dias úteis contados da publicação, o interessado deverá…”). No meio do período, intercalado, a vírgula vem em par. Não abra sem fechar.',
      ),
      named(
        'Conjunções e vírgula',
        'Mas, porém, contudo em coordenação adversativa: vírgula antes. E aditivo em regra sem vírgula, salvo sujeitos diferentes ou valor adversativo. Pois explicativo: vírgula antes. Portanto intercalado: entre vírgulas.',
      ),
      named(
        'Como o item aparece',
        '“Assinale a frase com pontuação correta.” “O emprego das vírgulas se justifica porque.” Técnica: ache sujeito e verbo; se houver vírgula entre eles, quase sempre está errado. Depois cheque pares de intercalação.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: vírgula e ênfase',
        'Isolar um termo pode ser recurso de ênfase (“Isso, ninguém nega”). Em crônica, passa; em enunciado de correção, a banca pode aceitar se a intercalação estiver bem delimitada. Não use isso para justificar vírgula sujeito/verbo.',
      ),
    ],
    revisaoRapida: blocks(
      'Nunca: vírgula entre sujeito e verbo, ou entre verbo e OD.',
      'Explícativa: vírgulas em par. Restritiva: sem vírgula.',
      'Intercalação: abre e fecha.',
      'Dois-pontos anunciam; ponto e vírgula separam blocos pesados.',
    ),
    definitions: [
      { term: 'Vocativo', definition: 'Chamamento isolado por vírgula: “Senhor prefeito, o expediente segue anexo.”' },
      { term: 'Aposto explicativo', definition: 'Esclarecimento do termo anterior, isolado por vírgulas, travessões ou parênteses.' },
    ],
    examples: [
      'Certo: “O setor, após a conferência, arquivou o pedido.” Intercalação em par.',
      'Errado: “O setor após a conferência, arquivou o pedido.” Abriu a intercalação no lugar errado e separou sujeito/verbo.',
    ],
    publicAdminExamples: [
      '“Encaminho, para análise, o processo nº 12/2026.” Adjunto intercalado.',
      'Ofício: “Senhora Secretária,” — vírgula de vocativo, não de sujeito.',
    ],
    commonErrors: [
      'Pontuar como se respira.',
      'Fechar só um lado do aposto.',
    ],
    traps: [
      'Vírgula “elegante” após sujeito longo (“A decisão do setor de cadastro da Secretaria X, foi publicada”).',
      'Ponto e vírgula no lugar de dois-pontos de anúncio.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-coordenacao-subordinacao', 'pt-construcao-frasal', 'pt-modalizadores'],
    relatedEditalItems: ['ed-pt-11'],
    synthesis:
      'Pontuação de concurso é mapa sintático. Decore as proibições (sujeito/verbo, verbo/OD) e os pares (aposto, intercalação, explicativa). Pausa de fala não é regra.',
    glossary: [
      { term: 'Intercalação', definition: 'Trecho inserido no período, delimitado dos dois lados.' },
      { term: 'Enumeração', definition: 'Lista de termos de mesma função, em geral separados por vírgula.' },
    ],
    masteryCriteria: [
      'Rejeitar de imediato vírgula entre sujeito e verbo.',
      'Pontuar adjetiva conforme restrinja ou explique.',
      'Fechar intercalações e apostos dos dois lados.',
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
    importance: pesoProva(
      'Concordância é ponto quase certo para quem treina os casos. A banca esconde o sujeito, interpola adjunto e testa o se apassivador.',
    ),
    prerequisites: ['pt-periodo', 'pt-flexao', 'pt-classes'],
    essencial: [
      named(
        'Regra-mãe da verbal',
        'O verbo concorda em número e pessoa com o núcleo do sujeito. Ache o sujeito primeiro — não o termo mais próximo do verbo. “Faltam dois documentos no processo” (sujeito: dois documentos). “Existe, no arquivo, cópias” está errado: existem cópias.',
      ),
      named(
        'Regra-mãe da nominal',
        'O adjetivo concorda com o substantivo a que se refere. Com dois substantivos, pode ir ao plural ou ficar com o mais próximo, conforme a posição: “processo e certidão anexos” / “certidão e processo anexo”. É / são de: “É proibida entrada” (sem artigo) × “É proibida a entrada” (com artigo, o adjetivo concorda).',
      ),
      named(
        'Sujeito após o verbo e sujeito oculto',
        'Inversão não muda a concordância. “Deve constar no processo as guias” — errado; devem constar as guias. Sujeito oracional: verbo na 3ª pessoa do singular (“Convém que se junte a certidão”).',
      ),
    ],
    completo: [
      named(
        'Haver, fazer, ser',
        'Haver de existir/ocorrer: impessoal, singular (“Houve falhas”). Fazer de tempo: impessoal (“Faz dois anos”). Ser com predicativo: pode concordar com o predicativo (“Aos servidores são necessárias orientações”). Ser de horas: “É uma hora” / “São duas horas”.',
      ),
      named(
        'Se apassivador e se de indeterminação',
        'Apassivador: verbo concorda com o sujeito paciente (“Vendem-se certidões”). Indeterminação (VTI/VI): singular (“Precisa-se de servidores”; “Vive-se bem”). Esse par é o ouro da prova média.',
      ),
      named(
        'Porcentagem, coletivo, relativo',
        'Porcentagem: concorda com o numeral ou com o substantivo seguinte (“1% dos servidores faltou/faltaram”; “1% faltou”). Coletivo: singular, salvo coletivo especificado (“A maioria concordou”; “A maioria dos servidores concordou/concordaram”). Que/quem: verbos podem seguir o antecedente ou a 3ª singular, conforme a construção — leia o período inteiro.',
      ),
      named(
        'Como o item aparece',
        '“Há erro de concordância em.” “O verbo destacado concorda com.” Técnica: ignore o adjunto interpolado; sublinhe o núcleo; teste se há se apassivador.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: silepse',
        'Concordância com a ideia, não com a forma (“Vossa Excelência está cansado”). Em prova média, só marque silepse se o comando a autorizar ou se for construção cristalizada. Fora isso, siga a forma. Não é item separado do edital; é caso especial de concordância.',
      ),
    ],
    revisaoRapida: blocks(
      'Sujeito primeiro, verbo depois. Adjunto no meio não manda.',
      'Houve problemas. Faz anos. Existem cópias.',
      'Vendem-se certidões. Precisa-se de servidores.',
      'É proibida entrada / É proibida a entrada.',
    ),
    definitions: [
      { term: 'Núcleo do sujeito', definition: 'Substantivo (ou equivalente) com o qual o verbo concorda.' },
      { term: 'Partícula apassivadora', definition: 'Se que torna o objeto da ativa sujeito da passiva sintética.' },
    ],
    comparisons: [
      {
        title: 'Haver × existir',
        leftLabel: 'Haver (existência)',
        rightLabel: 'Existir',
        rows: [
          { label: 'Pessoa', left: 'Impessoal: houve, havia', right: 'Pessoal: existiram, existem' },
          { label: 'Exemplo', left: 'Houve falhas no cadastro', right: 'Existiram falhas no cadastro' },
        ],
      },
    ],
    examples: [
      '“Faltam, na pasta, as guias.” Núcleo: guias.',
      '“Um e outro assinaram” / “Nem um nem outro assinaram/assinou” — formas aceitas conforme a gramática de referência; em prova, prefira a alternativa inequívoca e fuja da polêmica se houver opção clara.',
    ],
    publicAdminExamples: [
      '“Encaminha-se as cópias” — errado. Encaminham-se as cópias.',
      '“Fazem dois meses que o ofício chegou” — errado. Faz dois meses.',
    ],
    commonErrors: [
      'Concordar com o adjunto interpolado (“O resultado das análises foram”).',
      'Pluralizar haver de existência.',
    ],
    traps: [
      'Sujeito oracional disfarçado (“É necessário, para o andamento, que se juntem as peças” — é necessário permanece singular).',
      'Porcentagem com substantivo no plural: duas concordâncias possíveis; a alternativa que mistura “1% faltaram” sem o substantivo pode ser frágil.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-regencia', 'pt-equivalencia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-12'],
    synthesis:
      'Concordância é caça ao núcleo. Interpolação, inversão e se são as três armadilhas; haver/fazer impessoais são o quarto presente da banca.',
    glossary: [
      { term: 'Impessoalidade verbal', definition: 'Verbo sem sujeito, na 3ª pessoa do singular (haver existência, fazer tempo).' },
      { term: 'Silepse', definition: 'Concordância com o sentido, não com a forma gramatical.' },
    ],
    masteryCriteria: [
      'Localizar o núcleo do sujeito em frase invertida com adjunto interpolado.',
      'Distinguir se apassivador de índice de indeterminação.',
      'Empregar haver e fazer impessoais no singular.',
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
    ],
    publicAdminExamples: [
      '“Compareça à sessão da Câmara.” Sessão feminina determinada.',
      '“O recurso não procede.” Proceder intransitivo (ter fundamento). “Proceder à apuração.” VTI = iniciar.',
    ],
    commonErrors: [
      'Marcar crase diante de masculino (“à prazo”).',
      'Esquecer a preposição de obedecer/pagar/assistir.',
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
    ],
    masteryCriteria: [
      'Aplicar o teste da troca pelo masculino.',
      'Listar pelo menos seis verbos de regência instável (assistir, visar, aspirar, obedecer, pagar, informar).',
      'Recusar crase em a partir de, a prazo, a Itarema (uso sem artigo).',
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
    ],
    aprofundamento: [
      named(
        'Aprofundamento: se, o e a lo/no',
        'O/a após verbo terminado em r, s, z vira-lo/-la (encaminhá-lo). Após som nasal, -no/-na (põem-no). É detalhe de prova mais tradicional; se aparecer, aplique. Não transforme em capítulo extra do edital.',
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
    ],
    examples: [
      '“Não se arquive o original.” Próclise pela negação.',
      '“O prazo cujo vencimento se aproxima.” Cujo + possuído.',
    ],
    publicAdminExamples: [
      '“Encaminho a Vossa Senhoria cópia do despacho.” Verbo em 1ª (eu encaminho); o tratamento do destinatário não “contagia” o verbo do remetente.',
      '“Solicito que Vossa Excelência determine o cumprimento.” 3ª pessoa no verbo do destinatário.',
    ],
    commonErrors: [
      'Cujo o / cuja a.',
      'Vossa Senhoria recebestes / vosso documento (no destinatário).',
      'Início com “Me encaminhe”.',
    ],
    traps: [
      'Atrator distante: o candidato põe ênclise apesar de não, que, nunca.',
      'Lhe como objeto direto (“o chefe lhe convocou”).',
    ],
    relatedLessonIds: ['pt-articulacao', 'pt-regencia', 'pt-verbos', 'pt-classes'],
    relatedEditalItems: ['ed-pt-14'],
    synthesis:
      'Pronome de prova tem três frentes: forma (lhe/o, cujo), colocação (atrator ou ênclise) e tratamento (3ª pessoa). Erro em qualquer uma delas anula o item.',
    glossary: [
      { term: 'Atrator', definition: 'Palavra que exige próclise (negação, relativo, indefinido etc.).' },
      { term: 'Mesóclise', definition: 'Inserção do pronome no futuro do presente ou do pretérito (far-se-á).' },
    ],
    masteryCriteria: [
      'Trocar lhe/o conforme a transitividade.',
      'Colocar o pronome na próclise na presença de atrator.',
      'Empregar cujo sem artigo e com concordância no possuído.',
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
    importance: pesoProva(
      'É o mapa. Sem achar sujeito, predicado, adjunto e as orações, os outros tópicos de sintaxe viram chute. O edital o lista à parte justamente por isso.',
    ),
    prerequisites: ['pt-classes'],
    essencial: [
      named(
        'Período simples: uma oração, um verbo principal (ou locução)',
        'Sujeito (quem/o que está em relação com o verbo), predicado, complementos (OD, OI, complemento nominal), adjuntos (adnominal, adverbial), agente da passiva, predicativo, vocativo, aposto. Vocativo não é sujeito. Aposto explica. Adjunto adnominal integra o SN; adjunto adverbial modifica o verbo/adjetivo/advérbio ou a oração.',
      ),
      named(
        'Como achar o sujeito',
        'Pergunte ao verbo “quem?” / “o quê?”, recorte o que concorda, ignore o vocativo e o adjunto adverbial. Sujeito simples, composto, oculto, indeterminado, oracional, inexistente (verbos impessoais). “Houve atrasos”: não tem sujeito. “Chegaram atrasados os ofícios”: sujeito posposto os ofícios.',
      ),
      named(
        'Período composto',
        'Mais de uma oração. Por coordenação, por subordinação ou misto. Conte os verbos (locução vale um). Classificar cada oração é o trabalho deste tópico; o valor semântico fino se aprofunda em coordenação e subordinação.',
      ),
    ],
    completo: [
      named(
        'OD × OI × CN',
        'OD: complemento sem preposição obrigatória (arquivou o pedido). OI: com preposição (obedecer ao despacho). CN: completa nome (necessidade de prazo; útil ao setor). “Útil ao setor”: ao setor é CN, não OI, porque útil é adjetivo. Essa distinção reaparece em regência e crase.',
      ),
      named(
        'Predicativo e adjunto',
        '“O servidor está atento” — predicativo do sujeito. “O servidor trabalha atento” — pode ser predicativo ou adjunto, conforme a leitura; em prova, o verbo de ligação puxa predicativo. “Cansado, o servidor saiu” — adjunto/predicativo deslocado, isolado por vírgula.',
      ),
      named(
        'Como o item aparece',
        '“O termo destacado exerce a função de.” “O período é composto por.” Técnica: primeiro os verbos; depois a função de cada bloco; por último o rótulo fino.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: adjunto adnominal × complemento nominal',
        'CN costuma ser alvo de preposição de com nome de sentido transitivo (construção da escola pelo município = agente/paciente). Adjunto adnominal caracteriza (construção de alvenaria). Critério do agente/paciente × matéria/posse. Zona clássica de prova mais gramatical; treine, mas não invente item extra no edital.',
      ),
    ],
    revisaoRapida: blocks(
      'Conte os verbos: um = simples; mais de um = composto (locução = um).',
      'Sujeito concorda. Vocativo não é sujeito. Haver existência não tem sujeito.',
      'OD sem preposição; OI com preposição; CN completa nome.',
      'Sujeito posposto continua sujeito.',
    ),
    definitions: [
      { term: 'Período simples', definition: 'Período com uma só oração (um núcleo verbal).' },
      { term: 'Período composto', definition: 'Período com duas ou mais orações.' },
      { term: 'Sujeito inexistente', definition: 'Ausência de sujeito com verbo impessoal.' },
    ],
    examples: [
      '“Senhora diretora, o expediente segue anexo.” Vocativo + sujeito o expediente.',
      '“É necessário juntar a certidão.” Sujeito oracional (juntar a certidão).',
    ],
    publicAdminExamples: [
      '“Foi arquivado pelo protocolo o requerimento.” Sujeito: o requerimento; agente da passiva: pelo protocolo.',
    ],
    commonErrors: [
      'Chamar o vocativo de sujeito.',
      'Contar auxiliar + principal como duas orações.',
    ],
    traps: [
      'Adjunto longo entre verbo e sujeito posposto, a induzir núcleo errado.',
      'Predicativo lido como OD (“nomearam-no chefe”: chefe = predicativo do objeto).',
    ],
    relatedLessonIds: ['pt-classes', 'pt-coordenacao-subordinacao', 'pt-concordancia', 'pt-construcao-frasal'],
    relatedEditalItems: ['ed-pt-15'],
    synthesis:
      'Período é anatomia: termos da oração no simples, conta de verbos no composto. Quem mapeia isso acerta concordância, pontuação e função do termo destacado.',
    glossary: [
      { term: 'Locução verbal', definition: 'Auxiliar + forma nominal que vale por um só núcleo (foi arquivado).' },
      { term: 'Agente da passiva', definition: 'Termo com por/pelo que pratica a ação na voz passiva.' },
    ],
    masteryCriteria: [
      'Identificar sujeito em oração invertida e em oração com vocativo.',
      'Dizer se um período é simples ou composto contando núcleos verbais.',
      'Distinguir OD, OI e CN em frases administrativas.',
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
    importance: pesoProva(
      'Item objetivo, de pouco texto. Paga bem se você não confundir prefixo com radical nem derivação com composição. Relaciona-se a ortografia (hífen) sem substituí-la.',
    ),
    prerequisites: ['pt-classes', 'pt-ortografia'],
    essencial: [
      named(
        'Peças da palavra',
        'Radical: núcleo de sentido (cert- em certidão). Afixos: prefixos (in-, des-, re-) e sufixos (-ção, -mente). Vogal temática e desinências (número, gênero, pessoa-tempo). A banca pede “o elemento destacado é um prefixo de negação” ou “há derivação sufixal”.',
      ),
      named(
        'Derivação',
        'Prefixal (re+ver), sufixal (protocol+ar), parassintética (prefixo e sufixo simultâneos, sem que o meio exista: en+trist+ecer; não há *tristecer nem *entriste). Imprópria/conversão: o saber (verbo vira substantivo). Regressiva: o abalo (de abalar). Não chame de parassíntese o que é prefixo + sufixo em cadeia (infelizmente: infeliz + mente).',
      ),
      named(
        'Composição',
        'Justaposição: guarda-chuva, segundo-tenente (elementos com autonomia, em geral com hífen ou justapostos). Aglutinação: planalto (pleno+alto, com perda de elemento). Hibridismo: radicais de línguas diferentes (automóvel, sociologia).',
      ),
    ],
    completo: [
      named(
        'Outros processos',
        'Sigla (IDIB), abreviatura (Sr.), onomatopeia, estrangeirismo. Em prova média, o núcleo é derivação × composição. Hífen de compostos é ortografia (Decreto 6.583/2008); aqui, o foco é o processo morfológico.',
      ),
      named(
        'Como o item aparece',
        '“A palavra destacada formou-se por.” “O prefixo exprime.” Técnica: tente isolar os elementos e ver se cada um vive sozinho (composição) ou se um é afixo (derivação).',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: tema e vogal temática',
        'Tema = radical + vogal temática (fala-). Desinência número-pessoal e modo-temporal se agregam. Só caia se o enunciado segmentar. Não invente cobrança de “tema zero” como linha do edital.',
      ),
    ],
    revisaoRapida: blocks(
      'Afixo + radical = derivação. Radical + radical = composição.',
      'Parassíntese: os dois afixos ao mesmo tempo; o meio não existe sozinho.',
      'Justaposição preserva elementos; aglutinação funde.',
      'Hibridismo: línguas diferentes.',
    ),
    definitions: [
      { term: 'Radical', definition: 'Elemento que concentra o sentido lexical da palavra.' },
      { term: 'Parassíntese', definition: 'Derivação em que prefixo e sufixo se agregam simultaneamente.' },
      { term: 'Hibridismo', definition: 'Composição com radicais de origens linguísticas distintas.' },
    ],
    examples: [
      'Infeliz: derivação prefixal. Felizmente: sufixal. Enraizar: parassíntese (não há *raizar nem *enraiz como verbo correspondente na mesma formação).',
      ' couve-flor: justaposição. Planalto: aglutinação.',
    ],
    publicAdminExamples: [
      'Protocolizar: derivação sufixal sobre protocolo. Contrarrecibo: prefixo contra- + recibo (derivação prefixal / composto, conforme a análise do hífen e da autonomia).',
      'e-mail no ofício: estrangeirismo; o processo não anula a necessidade de contexto claro.',
    ],
    commonErrors: [
      'Chamar infelizmente de parassíntese.',
      'Confundir desinência -s de plural com sufixo derivacional.',
    ],
    traps: [
      'Palavra com hífen que é derivação prefixal (ex-diretor, conforme o acordo), não composição de dois radicais livres.',
      'Aglutinação lida como “erro de ortografia”.',
    ],
    relatedLessonIds: ['pt-classes', 'pt-ortografia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-16'],
    synthesis:
      'Estrutura de palavra é Lego: radical, afixos, desinências. O processo (derivar ou compor) se decide pela natureza das peças, não pelo “tamanho” do vocábulo.',
    glossary: [
      { term: 'Prefixo', definition: 'Afixo à esquerda do radical.' },
      { term: 'Sufixo', definition: 'Afixo à direita do radical, muitas vezes com mudança de classe.' },
    ],
    masteryCriteria: [
      'Segmentar radical e afixos em palavra derivada.',
      'Distinguir parassíntese de derivação prefixal + sufixal em cadeia.',
      'Classificar composto por justaposição, aglutinação ou hibridismo.',
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
    importance: pesoProva(
      'O edital pede funções das classes, não só a lista escolar. “Que” pode ser pronome, conjunção ou partícula de realce; o item testa o papel no período.',
    ),
    prerequisites: [],
    essencial: [
      named(
        'Classes variáveis e invariáveis',
        'Variáveis: substantivo, adjetivo, artigo, pronome, verbo, numeral. Invariáveis: advérbio, preposição, conjunção, interjeição. Alguns manuais separam a partícula se; para prova média, analise a função do se (apassivador, integrante, reflexivo, índice de indeterminação, realce).',
      ),
      named(
        'A classe depende do contexto',
        'O bem (substantivo) / bem resolvido (advérbio) / homem bem (adjetivo, registro coloquial). Sobre a mesa (preposição) / sobre o tema, falaremos (ainda preposição) × o sobre do envelope, em usos nominais. Não classifique na lista mental; classifique no período.',
      ),
      named(
        'Função × classe',
        'Substantivo tipicamente nomeia e ocupa sujeito/OD. Adjetivo caracteriza (adjunto adnominal, predicativo). Advérbio modifica verbo/adjetivo/advérbio. Conjunção liga orações. Preposição liga termos, exigindo regime. A banca pergunta a função: “o termo destacado é adjunto adverbial” — aí classe e sintaxe se encontram.',
      ),
    ],
    completo: [
      named(
        'Que, se, como, segundo',
        'Que: pronome relativo, conjunção integrante, conjunção comparativa, partícula expletiva (“quase que”). Se: várias funções já vistas. Como: advérbio, conjunção comparativa, conjunção causal, preposição em “como diretor”. Segundo: numeral ordinal, preposição (“segundo o relatório”). Esses curingas são o coração do tópico.',
      ),
      named(
        'Artigo e numeral',
        'Artigo definido/indefinido determina o substantivo e, na crase, é metade do encontro. Numeral: cardinal, ordinal, multiplicativo, fracionário. “Meio” adjetivo concorda (“porta meia aberta” — na verdade “meia aberta”? Cuidado: “porta meio aberta”, meio advérbio, invariável; “meia hora”, numeral/adjetivo). Esse par cai muito.',
      ),
      named(
        'Como o item aparece',
        '“A palavra destacada classifica-se como.” “Exerce a função de.” Técnica: substitua por um prototípico da classe (ele, bonito, ontem, e, de) e veja se o período aguenta.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: palavras denotativas',
        'Até, só, também, inclusive, aliás — alguns manuais não as chamam de advérbio, e sim de palavras denotativas (inclusão, exclusão, retificação). Se a alternativa disser “advérbio”, pode passar em banca que não faz a distinção. Em item fino, “palavra denotativa de inclusão” é o rótulo. O edital não nomeia essa subclasse; use-a só se a alternativa a trouxer.',
      ),
    ],
    revisaoRapida: blocks(
      'Classe se decide no uso, não na palavra isolada.',
      'Que/se/como/segundo: cure a função no período.',
      'Meio advérbio não flexiona; meia hora flexiona.',
      'Função sintática (adjunto, sujeito) ≠ etiqueta morfológica, mas as duas se falam.',
    ),
    definitions: [
      { term: 'Classe de palavra', definition: 'Categoria morfológica (substantivo, verbo, preposição etc.).' },
      { term: 'Função', definition: 'Papel sintático ou discursivo que a palavra exerce naquele enunciado.' },
    ],
    examples: [
      '“Que o prazo venceu é fato.” Que = conjunção integrante.',
      '“O prazo que venceu era fatal.” Que = pronome relativo.',
    ],
    publicAdminExamples: [
      '“Segundo a Instrução Normativa, o prazo é de cinco dias.” Segundo = preposição (conformidade), não ordinal.',
      '“Até o prefeito protocolou.” Até = inclusão, não limite espacial.',
    ],
    commonErrors: [
      'Classificar todo que como relativo.',
      'Flexionar meio advérbio (“meia aberta” quando meio modifica o adjetivo).',
    ],
    traps: [
      'Se apassivador chamado de conjunção integrante.',
      'Como causal lido como comparativo.',
    ],
    relatedLessonIds: ['pt-periodo', 'pt-pronomes', 'pt-flexao', 'pt-articulacao'],
    relatedEditalItems: ['ed-pt-17'],
    synthesis:
      'Classes de prova são funções em contexto. Decore a lista de dez, mas treine os curingas que/se/como/segundo/meio — é aí que o item mora.',
    glossary: [
      { term: 'Palavra denotativa', definition: 'Item invariável de inclusão, exclusão, retificação etc., às vezes separado do advérbio.' },
      { term: 'Partícula expletiva', definition: 'Elemento de realce sem função sintática essencial (é que, que em “quase que”).' },
    ],
    masteryCriteria: [
      'Classificar que em pelo menos três usos distintos.',
      'Distinguir meio advérbio de meia como numeral/adjetivo.',
      'Separar classe morfológica de função sintática e ainda assim relacioná-las.',
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
    importance: pesoProva(
      'Flexão é o “como a forma muda”. Concordância usa esse conhecimento; aqui a cobrança é a forma em si: o plural de cidadão, o feminino de anexos, o particípio irregular.',
    ),
    prerequisites: ['pt-classes', 'pt-estrutura-palavras'],
    essencial: [
      named(
        'Flexão nominal',
        'Gênero: biforme (servidor/servidora) e uniforme (o/a agente, o/a colega). Número: plurais em -ão (cidadãos, capitães, mãos), -l (cônsules, caracteres), compostos (guarda-chuvas, os abaixo-assinados — ver ortografia). Grau: aumentativo/diminutivo sintético e analítico; superlativo (muitíssimo, paupérrimo).',
      ),
      named(
        'Flexão verbal',
        'Pessoa e número; tempo e modo; voz (ativa, passiva, reflexiva). Particípios irregulares: aceito/aceitado, entregue/entregado, pago/pagado — com auxiliar ter/haver tende o regular; com ser/estar, o irregular (“o ofício foi entregue”; “tínhamos entregado”). Nem toda banca segue o par com o mesmo rigor; se houver alternativa inequívoca, prefira-a.',
      ),
      named(
        'O que não é “só detalhe”',
        'Anexo, incluso, quite, obrigado concordam: documentos anexos, guias inclusas, servidores quites, obrigada (quem agradece). Isso é flexão a serviço da concordância nominal — o edital lista os dois tópicos; treine-os juntos.',
      ),
    ],
    completo: [
      named(
        'Compostos e números',
        'Plural de compostos depende da classe das peças: guarda-noturno → guarda-noturnos; primeira-dama → primeiras-damas; o abaixo-assinado → os abaixo-assinados. Hífen é ortografia; a decisão de flexionar um ou dois elementos é flexão. Em caso de dúvida na prova, elimine os plurais absurdo (guarda-noturnoes).',
      ),
      named(
        'Como o item aparece',
        '“A forma correta do plural é.” “O feminino de X.” “O particípio adequado.” Técnica: identifique se o enunciado pede flexão ou concordância; às vezes as duas estão no mesmo item.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: heterônimos e gênero de cargos',
        'Homem/mulher são heterônimos, não flexão do mesmo radical. Cargos: a presidente / a presidenta (as duas circulam; o texto oficial e a prova dirão). Não transforme debate político de nomenclatura em “regra única do edital”.',
      ),
    ],
    revisaoRapida: blocks(
      'Anexos, inclusas, quites, obrigada/obrigado.',
      'Foi entregue / tinha entregado — tendência clássica.',
      'Cidadãos, capitães, mãos: três destinos do -ão.',
      'Composto: veja quais elementos flexionam.',
    ),
    definitions: [
      { term: 'Flexão', definition: 'Variação da forma da palavra para marcar categorias gramaticais.' },
      { term: 'Particípio irregular', definition: 'Forma curta (pago, dito, feito) ao lado ou no lugar da regular.' },
    ],
    examples: [
      '“Seguem anexas as certidões.” Anexas concorda com certidões.',
      '“Os cidadãos foram convocados.” Não “cidadões”.',
    ],
    publicAdminExamples: [
      '“Declaro-me quite com a tesouraria.” Quite no singular, combinando com o sujeito eu; “estamos quites”.',
      '“A agente administrativa protocolou o pedido.” Agente uniforme; o artigo marca o gênero.',
    ],
    commonErrors: [
      'Deixar anexo invariável por influência do jargão (“documento em anexo” é locução; “documentos anexo” é erro).',
      'Plural cidadões.',
    ],
    traps: [
      'Mãos × capitães × cidadãos no mesmo item, para induzir um só padrão.',
      'Meio-dia e meio × meia: flexão de meio como numeral (“meio-dia e meia” = meia hora).',
    ],
    relatedLessonIds: ['pt-classes', 'pt-concordancia', 'pt-verbos', 'pt-ortografia'],
    relatedEditalItems: ['ed-pt-18'],
    synthesis:
      'Flexão é a forma que muda para marcar gênero, número, grau, pessoa, tempo, modo e voz. Anexos/inclusas e os plurais de -ão são o rendimento imediato.',
    glossary: [
      { term: 'Uniforme', definition: 'Palavra com a mesma forma para os dois gêneros, marcada pelo determinante.' },
      { term: 'Grau', definition: 'Variação de intensidade (aumentativo, diminutivo, comparativo, superlativo).' },
    ],
    masteryCriteria: [
      'Flexionar anexo/incluso/quite em frases reais.',
      'Escolher o plural correto de substantivos em -ão.',
      'Empregar particípio irregular com ser e regular com ter, quando a alternativa seguir essa tendência.',
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
    ],
    examples: [
      'Anti-inflamatório (hífen: i+i). Infraestrutura (sem hífen: a+e). Antirrugas (rr, sem hífen).',
      '“Não sei o porquê do indeferimento.” Substantivo.',
    ],
    publicAdminExamples: [
      '“A seção de cadastro realiza sessão de treinamento sobre cessão de servidores.” Três grafias, três sentidos.',
      '“O ex-diretor da autoescola.” Ex- com hífen; autoescola sem hífen.',
    ],
    commonErrors: [
      'Lingüiça, agüentar (trema morto no português).',
      'À partir de; porquê no início de pergunta indireta sem artigo.',
    ],
    traps: [
      'Micro-ondas (hífen: o+o) ao lado de microempresa (sem hífen), para induzir um só padrão.',
      'Item que mistura grafia pré-acordo com pós-acordo e pede “a correta segundo o decreto”.',
    ],
    relatedLessonIds: ['pt-acentuacao', 'pt-significacao', 'pt-estrutura-palavras'],
    relatedEditalItems: ['ed-pt-19'],
    sourceIds: ['src-edital', 'src-didatico', 'src-decreto6583'],
    synthesis:
      'Ortografia de Itarema tem âncora normativa: Decreto 6.583/2008, item 16.3. Hífen, trema e o quarteto por que são o rendimento; sessão/cessão/seção e há/a completam o pacote da norma-padrão.',
    glossary: [
      { term: 'Trema', definition: 'Sinal diacrítico abolido nas palavras portuguesas pelo acordo vigente.' },
      { term: 'Hífen', definition: 'Traço de união em certos prefixos, compostos e encadeamentos, com regras refeitas pelo acordo.' },
    ],
    masteryCriteria: [
      'Citar o Decreto 6.583/2008 como fundamento do item 16.3, sem fingir que ele regula toda a gramática.',
      'Aplicar hífen em prefixo + h, vogais iguais e ex-.',
      'Grafar por que/porque/por quê/porquê em quatro frases distintas.',
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
    importance: pesoProva(
      'Acentuação é item rápido e traiçoeiro depois do acordo. Quem ainda acentua ideia, jiboia e assembleia erra no que o Decreto 6.583/2008 mudou — e o edital mandou seguir essa norma.',
    ),
    prerequisites: ['pt-ortografia'],
    essencial: [
      named(
        'A tonicidade manda',
        'Oxítona: última sílaba tônica — acento se terminar em a(s), e(s), o(s), em, ens (sofá, café, vovô, também, parabéns). Paroxítona: penúltima — acento se NÃO terminar nesse grupo, isto é, se terminar em l, n, r, x, i(s), u(s), um, ãos, ditongo (fácil, hífen, caráter, tórax, táxi, vírus, álbum, órgão, história). Proparoxítona: antepenúltima — todas acentuadas (próximo, pública).',
      ),
      named(
        'O que o acordo tirou — e a prova cobra',
        'Não se acentuam mais os ditongos abertos ei, oi em paroxítonas: ideia, assembleia, jiboia, heroico. Oxítonas continuam: papéis, herói, fiéis. Não se acentua i/u tônicos que formam hiato se antes houver ditongo: feiura, bocaiuva (não feiúra). Paroxítonas com oo/ee perderam o acento: voo, enjoo, creem, leem, deem. Memorizar a lista negativa rende mais do que reler a regra dez vezes.',
      ),
      named(
        'Acento diferencial que restou',
        'Pôde (pretérito) × pode (presente). Pôde/pôr (verbo) × por (preposição). Tem/têm, vem/vêm, contém/contêm (3ª plural). Fôrma (molde) pode levar acento para distinguir de forma, facultativo. Não volte o acento de pára, péla, pólo, côa — caíram no acordo.',
      ),
    ],
    completo: [
      named(
        'Hiato i/u',
        'Acentuam-se i e u tônicos que formam hiato, sozinhos ou com s, não seguidos de nh: saída, saúde, baú, Luís, país. Não: juiz, ruim, raiz (ditongo ou i seguido de z). Não: feiura (ditongo + u). Item clássico pós-acordo.',
      ),
      named(
        'Monossílabos',
        'Acentuam-se os tônicos terminados em a(s), e(s), o(s): pá, pé, pôs, mês. Monossílabos átonos (de, em, se, lhe) não. Isso se cruza com crase: à é acento grave de fusão, não agudo de tonicidade. Não misture os dois tópicos no comentário mental — mas na prova eles podem aparecer na mesma questão.',
      ),
      named(
        'Como o item aparece',
        '“Apenas uma está acentuada corretamente.” “O acento em X justifica-se porque.” Técnica: classifique a oxítona/paroxítona/proparoxítona antes de lembrar exceção do acordo.',
      ),
    ],
    aprofundamento: [
      named(
        'Aprofundamento: não misture acento com crase',
        'O acento agudo e o circunflexo marcam tonicidade (café, pôde). O grave marca crase (à, às). São tópicos vizinhos no edital (acentuação e regência), mas sinais diferentes. Se o item mostrar á em à Prefeitura, o erro não é de oxítona: é crase grafada com o sinal errado.',
      ),
    ],
    revisaoRapida: blocks(
      'Proparoxítona: todas. Oxítona: a, e, o, em, ens. Paroxítona: o resto “estranho”.',
      'ideia, assembleia, jiboia, voo, leem: sem acento (acordo).',
      'papéis, herói, pôde, pôr, têm: com acento.',
      'saída, saúde, baú: hiato. feiura: sem acento.',
    ),
    definitions: [
      { term: 'Oxítona', definition: 'Palavra com tônica na última sílaba.' },
      { term: 'Paroxítona', definition: 'Palavra com tônica na penúltima sílaba.' },
      { term: 'Proparoxítona', definition: 'Palavra com tônica na antepenúltima sílaba; todas recebem acento.' },
    ],
    comparisons: [
      {
        title: 'Antes e depois do acordo (o que a prova testa)',
        leftLabel: 'Grafia vigente',
        rightLabel: 'Grafia antiga (errada hoje)',
        rows: [
          { label: 'Ditongo ei/oi paroxítono', left: 'ideia, jiboia, assembleia', right: 'idéia, jibóia, assembléia' },
          { label: 'oo / ee', left: 'voo, leem, deem', right: 'vôo, lêem, dêem' },
          { label: 'Oxítona ei/oi', left: 'papéis, herói', right: 'continua acentuada' },
        ],
      },
    ],
    examples: [
      'Pública (proparoxítona). Caráter (paroxítona em r). Também (oxítona em em).',
      'Ele pôde ontem; ele pode hoje.',
    ],
    publicAdminExamples: [
      '“A assembleia municipal lê o expediente.” Assembleia (sem acento no ei paroxítono) e lê (monossílabo tônico em e).',
      '“Os servidores têm prazo; o servidor tem prazo.”',
    ],
    commonErrors: [
      'Acentuar ideia/heroico como no ensino antigo.',
      'Esquecer têm/vêm no plural.',
    ],
    traps: [
      'Misturar acento agudo de tonicidade com grave da crase.',
      'Acentuar paroxítona em a (casa) por analogia com oxítona.',
    ],
    relatedLessonIds: ['pt-ortografia', 'pt-regencia', 'pt-flexao'],
    relatedEditalItems: ['ed-pt-20'],
    synthesis:
      'Acentuação vigente é a do acordo (Decreto 6.583/2008): classifique a tônica, aplique a regra geral e subtraia o que o acordo aboliu (ideia, voo, feiura). Pôde/pôr e têm/vêm restaram.',
    glossary: [
      { term: 'Hiato', definition: 'Encontro de vogais em sílabas distintas (sa-í-da).' },
      { term: 'Ditongo', definition: 'Vogal + semivogal na mesma sílaba (pai, ideia).' },
      { term: 'Acento diferencial', definition: 'Acento que distingue homógrafos (pôde/pode, pôr/por).' },
    ],
    masteryCriteria: [
      'Classificar palavra como oxítona, paroxítona ou proparoxítona e justificar o acento.',
      'Grafar corretamente ideia, assembleia, jiboia, voo, leem, feiura.',
      'Empregar pôde, pôr, têm e vêm.',
    ],
  }),
]
