import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'

function est(partial: Omit<Parameters<typeof lesson>[0], 'disciplineId' | 'chapterId' | 'complementary'>): Lesson {
  return lesson({
    ...partial,
    disciplineId: 'estrategias',
    chapterId: 'est-prova',
    complementary: true,
    sourceIds: partial.sourceIds ?? ['src-edital', 'src-didatico', 'src-hipotese-banca'],
  })
}

export const estrategiasLessons: Lesson[] = [
  est({
    id: 'est-comando', topicId: 'est-comando',
    title: 'Comando da questão e palavras decisivas',
    objective: 'Isolar o que a banca pede antes de ler as alternativas e reescrever o comando em uma linha, inclusive quando houver uma ou duas inversões.',
    importance: 'Módulo complementar. Não vale pontos próprios na prova, mas reduz erro de interpretação nas quatro disciplinas oficiais.',
    estimatedMinutes: 26,
    prerequisites: [],
    essencial: [
      named(
        'O comando é a tarefa, não o tema',
        'O comando é a frase que diz qual tarefa a letra precisa cumprir. Ele costuma estar na última linha do enunciado, ou logo antes das alternativas: “assinale a correta”, “assinale a incorreta”, “é correto o que se afirma”, “todas estão corretas, exceto”. O tema (atos, atalho, texto, porcentagem) vem antes; a tarefa vem no polarizador. Antes de julgar se uma alternativa é boa doutrina, você precisa saber se a banca pediu a verdadeira ou a falsa. Quem acerta o conteúdo e erra o comando marca a letra errada com convicção.',
      ),
      named(
        'Ler o comando antes das letras',
        'Alternativas bem escritas atraem o olho. O reflexo de estudo é reconhecer uma frase do resumo e marcar. Esse reflexo só é seguro depois que o comando já foi reescrito. Circule a palavra decisiva no caderno, transforme a ordem numa pergunta de uma linha (“qual destas frases não se sustenta?”) e só então desça para A, B, C, D e E. Na prova de Itarema há cinco alternativas e uma única correta (item 13.7). A quinta letra não muda a lógica do polarizador: só aumenta o número de iscas.',
      ),
      named(
        'Polarizador e prova A–E',
        'Polarizador é a palavra que inverte ou recorta a tarefa: incorreta, falsa, NÃO, EXCETO, somente, sempre, nunca, “de acordo com o texto”. Nos cadernos locais da IDIB, a amostra de 280 itens A–D sem gabarito usou comando negativo (EXCETO, incorreta, NÃO) em 24/280. Isso descreve cadernos antigos de 40 questões. Não está demonstrado que Itarema, com 50 itens A–E, repetirá a mesma densidade. O método — reescrever o comando — vale com ou sem essa repetição. Não há, nestes PDFs, distribuição de letras: não se escolhe C porque “é a que mais cai”.',
      ),
    ],
    completo: [
      named(
        'Uma negação: INCORRETA, FALSA, NÃO ou EXCETO sozinho',
        'Quando o comando traz uma única palavra de inversão, a tarefa vira do avesso. “Assinale a incorreta” significa: quatro alternativas podem estar certas e a que você deve marcar é a que não se sustenta. “EXCETO”, sozinho, faz o mesmo trabalho com outro nome: você procura o intruso, a opção que foge do conjunto das verdadeiras. O erro previsível é o reflexo de estudo: o olho encontra uma frase que você reconhece do resumo e a mão marca, sem reler o comando. Em Itarema, com A–E, quatro verdadeiras e uma falsa continuam possíveis; a quinta alternativa não muda a lógica, só aumenta o número de iscas. Marcar a verdadeira nesse comando é acertar o conteúdo na letra errada.',
      ),
      named(
        'Duas negações: “está incorreto, EXCETO”',
        'Aqui há duas inversões na mesma ordem, e elas se cancelam. Primeiro, “incorreto” pede a afirmação falsa. Depois, “EXCETO” pede aquela que escapa desse pedido — a que não é a falsa. Reescreva o comando, com suas palavras, antes de olhar as letras: “qual afirmação está correta?”. A alternativa certa volta a ser a proposição verdadeira. Não é um truque de letra e não anula a questão. É aritmética de sinais: menos com menos dá mais. Se você tratar só o EXCETO e marcar a falsa, erra mesmo sabendo a matéria. Se você achar que “duas negações invalidam o item” e deixar em branco, também perde o ponto: no item 13.9 do edital de Itarema, branco, rasura e dupla marcação valem zero, o mesmo que o erro. A dupla negação aparece em Português (“é incorreto afirmar, exceto”), em específicos (“é incorreto sobre anulação, exceto”) e em informática (“é falso sobre o atalho, exceto”). O conteúdo muda; a reescrita do comando não.',
      ),
      named(
        'Somente, sempre, nunca: o recorte que estraga a frase certa',
        '“Somente”, “apenas”, “sempre” e “nunca” não se riscam por superstição. Elas caem quando o resto da frase não admite a restrição. “A anulação cabe somente ao Judiciário” é falsa porque a Administração também anula, por autotutela: o núcleo está certo e o “somente” estraga a proposição. “Todo ato administrativo é autoexecutório” é falsa pelo mesmo mecanismo: PATI existe, mas autoexecutoriedade depende de autorização normativa. Circule o absoluto, pergunte se a doutrina admite exceção, e só então julgue a letra. Riscar “sempre” automaticamente, sem ler o restante, também erra: há frases em que o absoluto sobrevive (“nunca se revoga ato ilegal: anula-se”).',
      ),
      named(
        '“De acordo com o texto” versus “infere-se”',
        '“De acordo com o texto” e “segundo o texto” proíbem trazer regra de fora. Se o texto não diz, a alternativa que completa com o seu conhecimento de atos, de Linux ou de porcentagem está fora — mesmo que a frase seja verdadeira no mundo. “Infere-se”, “depreende-se” e “é possível concluir” autorizam conclusão com pista no trecho, não opinião. A pista precisa estar no texto; o salto para o que “todo autor pensaria” é extrapolação. Nos cadernos locais, 18/280 stems citam TEXTO I/II/III (prova1 concentra 9). prova3 abre com texto longo mesmo sem o rótulo. Isso treina o fôlego de leitura; não promete que Itarema virá “igual Palmácia”. O edital só garante 14 itens de Português em prova de 50, A–E.',
      ),
      named(
        'Romanos: o comando é a combinação',
        'Quando o stem traz I, II e III, o comando raramente pede “qual romano está certo”. Pede a combinação: “é correto o que se afirma em”, “assinale se apenas a afirmativa I”, “apenas I e III”. Julgue cada romano sozinho. Frase com duas ideias, uma falsa, é falsa por inteiro. Só então monte a letra. Nos 280 itens extraídos, romanos com combinação aparecem em 39/280; 15 usam “Assinale se apenas a afirmativa…”; 12 usam “É correto o que se afirma”. prova1 sozinha tem 10. Isso é observado na amostra de 40 itens, sem gabarito. Não se promove 39/280 a regra da prova de 50. O método — julgar item a item — independe de prever a densidade.',
      ),
      named(
        'Reescrever o comando em uma linha no caderno',
        'Antes de descer às letras, escreva no canto do item uma pergunta curta. “Assinale a incorreta” vira “qual frase cai?”. “Está incorreto, EXCETO” vira “qual frase se sustenta?”. “É correto o que se afirma em” vira “quais romanos são V, depois qual letra combina?”. “De acordo com o texto” vira “o trecho autoriza isso?”. Essa linha custa dez segundos e evita o reflexo de marcar a doutrina conhecida. Se no fim da leitura a letra escolhida não responder à pergunta reescrita, você respondeu a outra questão. Volte ao polarizador, não à “letra que ainda não caiu”.',
      ),
    ],
    aprofundamento: [
      named(
        'Densidade de negativos no corpus e o que ela não prova',
        'Cadernos locais da IDIB, na amostra de 280 itens A–D sem gabarito, usaram comando negativo (EXCETO, incorreta, NÃO) em 24/280. prova8 concentra 8 das 24. Outra varredura, automática e sobreposta, acha comando negativo literal (incorreta, incorreto ou exceto) em 17/280 — a lição registra 24 quando entra o NÃO. “Assinale” aparece em 87/280, mas o verbo nem sempre coincide com a operação real: “assinale” pode esconder o julgamento de três proposições. Nada disso autoriza prever quantos EXCETO virão em Itarema. O método vale com um ou com oito negativos. Não há, nestes PDFs, distribuição de letras.',
      ),
      named(
        'O verbo do comando não é a operação inteira',
        '“Assinale” é o envelope. A operação pode ser lembrar uma lista, aplicar um instituto a um protocolo, calcular com unidade, julgar romanos ou achar o intruso. Hipótese pedagógica, não medida: o elaborador testa se o candidato leu o polarizador até o fim. Isso não autoriza chamar todo item difícil de pegadinha. Autoriza só reler a última linha antes de preencher o alvéolo. Item 13.9: branco e erro valem zero nesta prova; errar o comando é perder 2,0 pontos com a matéria certa na cabeça.',
      ),
    ],
    revisaoRapida: blocks(
      'Comando primeiro. Uma negação: marque a falsa. Duas negações (incorreto + exceto): marque a verdadeira.',
      'Somente/sempre/nunca: circule; caem se a restrição não cabe. Não risque o absoluto por superstição.',
      'Romanos: julgue I, II e III sozinhos; a letra é a combinação. Sem letra mágica.',
    ),
    definitions: [
      { term: 'Comando', definition: 'Trecho que define a tarefa: marcar a correta, a incorreta ou a exceção.' },
      { term: 'Polarizador', definition: 'Palavra que inverte ou recorta a tarefa: incorreta, falsa, não, exceto, somente, sempre.' },
      { term: 'Dupla negação do comando', definition: 'Duas inversões na mesma ordem. A tarefa volta a pedir a afirmação verdadeira.' },
    ],
    comparisons: [
      {
        title: 'Uma negação × duas negações',
        leftLabel: 'Uma negação',
        rightLabel: 'Incorreto + EXCETO',
        rows: [
          { label: 'Exemplo de comando', left: 'Assinale a incorreta / todas, EXCETO', right: 'Está incorreto, EXCETO' },
          { label: 'Pergunta reescrita', left: 'Qual frase não se sustenta?', right: 'Qual frase está certa?' },
          { label: 'O que marcar', left: 'A proposição falsa', right: 'A proposição verdadeira' },
          { label: 'Erro clássico', left: 'Marcar a doutrina que você reconhece', right: 'Tratar só o EXCETO e marcar a falsa' },
        ],
      },
      {
        title: 'Âncora no texto × inferência',
        leftLabel: 'De acordo com o texto',
        rightLabel: 'Infere-se / depreende-se',
        rows: [
          { label: 'O que autoriza', left: 'Só o que o trecho diz', right: 'Conclusão com pista no trecho' },
          { label: 'O que proíbe', left: 'Doutrina de fora, mesmo verdadeira', right: 'Opinião sem pista' },
          { label: 'Uso típico', left: 'Vocabulário, reescritura, detalhe explícito', right: 'Conclusão que o texto sustenta sem repetir a frase' },
        ],
      },
    ],
    examples: [
      'Reescrita de “assinale a incorreta”: “qual destas frases não se sustenta?”. As frases que você estudou e estão certas são distratores.',
      'Reescrita de “está incorreto, EXCETO”: “qual destas frases está certa?”. A primeira negação pede a falsa; a segunda devolve a verdadeira. Marcar a falsa, nesse comando, é errar o comando com o conteúdo certo.',
      'Uma questão de atos pode dizer: “sobre anulação e revogação, está incorreto, EXCETO”. Você procura a frase em que anulação continua sendo o desfazimento do ato ilegal (em regra ex tunc) e revogação o desfazimento do ato legal inconveniente (ex nunc). A alternativa que troca os dois institutos é a falsa — e, por causa do EXCETO, não é a que se marca.',
      '“A anulação cabe somente ao Judiciário”: o núcleo é verdadeiro; o “somente” exclui a autotutela e torna a proposição falsa.',
    ],
    publicAdminExamples: [
      'No protocolo, o stem “assinale a incorreta sobre o carimbo do requerimento” pede a frase que trata o número de protocolo como se já fosse o alvará. As frases que descrevem o comprovante de entrada estão certas — e, nesse comando, são iscas.',
      'Em informática, “é falso sobre o atalho, EXCETO” no Windows 11 devolve a descrição verdadeira do atalho daquele sistema. A descrição certa do Ubuntu, se o stem falou Windows, continua sendo a falsa — e, com o EXCETO, não se marca.',
    ],
    procedures: [
      'Sublinhe a última linha do enunciado antes de olhar A–E.',
      'Circule polarizadores: incorreta, falsa, NÃO, EXCETO, somente, sempre, nunca, “segundo o texto”.',
      'Reescreva a tarefa em uma pergunta de uma linha no canto do item.',
      'Se houver romanos, julgue cada um sozinho e só então combine.',
      'Confira se a letra escolhida responde à pergunta reescrita, não ao tema.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — uma negação no protocolo',
        setup: 'Stem hipotético da plataforma (não é item oficial da IDIB): “A respeito do comprovante de protocolo de pedido de alvará, assinale a incorreta.” Alternativas descrevem o carimbo como registro de entrada; uma afirma que o número já vale como autorização de funcionamento.',
        steps: [
          'Tarefa: uma só inversão. A letra a marcar é a frase que não se sustenta.',
          'Conhecimento: protocolo registra tramitação; alvará é ato posterior da autoridade competente.',
          'Dados: há pedido e comprovante; não há despacho de deferimento.',
          'As frases que repetem “comprovante de entrada” são verdadeiras — e, neste comando, distratores.',
          'A frase que transforma o carimbo em alvará é a incorreta. É a que se marca.',
        ],
        result: 'Comando “incorreta” + conteúdo certo nas outras letras = marcar o intruso. Acertar o conceito nas verdadeiras não pontua.',
      },
      {
        title: 'Exemplo resolvido 2 — incorreto + EXCETO em atos',
        setup: 'Stem hipotético: “Sobre anulação e revogação, está incorreto, EXCETO.” Uma letra diz que anulação ataca ilegalidade (em regra ex tunc) e revogação ataca mérito de ato legal (ex nunc). Outra troca os institutos. Outra atribui a revogação ao juiz.',
        steps: [
          'Há duas inversões. Reescreva: “qual afirmação está correta?”.',
          'A letra que troca anulação e revogação é falsa — e, por causa do EXCETO, não é gabarito.',
          'A letra que manda o juiz revogar no lugar da Administração também é falsa.',
          'A letra que mantém ilegalidade × mérito, ex tunc × ex nunc, é a verdadeira. É a que se marca.',
          'Tratar só o EXCETO e marcar a troca de institutos é o erro clássico deste comando.',
        ],
        result: 'Menos com menos dá mais. Dupla negação não anula o item e não autoriza branco (13.9).',
      },
      {
        title: 'Exercício guiado — “somente” em autotutela',
        setup: 'Frase isolada: “A anulação do ato administrativo cabe somente ao Poder Judiciário.” O comando da questão é “assinale a correta”.',
        steps: [
          'O núcleo “o Judiciário pode anular” é verdadeiro.',
          'O “somente” exclui a Administração. Autotutela: a própria Administração anula o ilegal.',
          'A proposição inteira é falsa. No comando “assinale a correta”, essa frase não se marca.',
          'Se o comando fosse “assinale a incorreta”, a mesma frase passaria a ser a letra procurada.',
          'O conteúdo não mudou. Mudou a tarefa. Por isso o polarizador se lê antes das letras.',
        ],
        result: 'Palavra absoluta é campo de batalha, não enfeite. O comando decide se a falsa é gabarito ou distrator.',
      },
    ],
    examInsights: [
      {
        claim: 'Comando negativo (EXCETO, incorreta, NÃO) aparece em 24/280 itens extraídos. prova8 concentra 8. Isso é observado em cadernos de 40 questões A–D, sem gabarito, e não demonstra a densidade da prova de Itarema (50 itens A–E).',
        evidence: 'docs/extracoes/relatorio-provas.md; 280 itens extraídos.',
        level: 'observado',
      },
      {
        claim: 'Romanos com combinação de respostas aparecem em 39/280. O verbo “assinale” (87/280 numa varredura sobreposta) pode esconder essa operação.',
        evidence: 'docs/extracoes/relatorio-provas.md; docs/analise-idib/construcao-das-questoes.md.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'O que muda entre “assinale a incorreta” e “está incorreto, EXCETO”?',
      'Por que “somente” pode tornar falsa uma frase cujo núcleo está certo?',
      'O que fazer com I, II e III antes de olhar as letras de combinação?',
    ],
    recallAnswers: [
      'Uma negação pede a falsa. Duas negações se cancelam e pedem a verdadeira. Reescreva o comando em uma linha antes das letras.',
      'O absoluto recorta o sujeito ou o alcance. “Anulação somente pelo Judiciário” exclui a autotutela da Administração, que também anula o ilegal.',
      'Julgar cada romano sozinho. Frase mista vale como falsa. Só então escolher a combinação. A letra não é o conteúdo de um único I.',
    ],
    commonErrors: [
      'Marcar a afirmação verdadeira quando o comando tem uma só negação (incorreta, exceto, não). O conteúdo está certo e a tarefa pedia a falsa.',
      'Tratar só o EXCETO na dupla negação e marcar a falsa.',
      'Riscar “sempre” automaticamente, sem verificar se a restrição cabe.',
      'Levar doutrina de fora para item “de acordo com o texto”.',
    ],
    traps: [
      '“Incorreto, EXCETO” junto: quem só vê o EXCETO marca a falsa e erra. A reescrita correta é “qual afirmação está certa?”.',
      'Afirmativa romana com duas orações, a segunda falsa, tratada como verdadeira porque a primeira “salvou”.',
      'Branco porque “duas negações invalidam o item”. Item 13.9: branco vale zero.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'est-eliminacao', 'est-anatomia'],
    relatedEditalItems: ['ed-est-01'],
    synthesis: 'Quem erra o comando acerta o conteúdo na alternativa errada. Polarizador primeiro, letras depois. Sem letra mágica.',
    glossary: [
      { term: 'Distrator', definition: 'Alternativa plausível construída para atrair quem lê depressa.' },
      { term: 'Pergunta reescrita', definition: 'Versão de uma linha do comando, no canto do item, que a letra escolhida precisa responder.' },
    ],
    masteryCriteria: [
      'Identificar a palavra decisiva em 10 enunciados seguidos.',
      'Reescrever, em uma linha, comando com uma negação e comando com duas negações.',
      'Julgar uma afirmativa romana mista como falsa antes de montar a combinação.',
    ],
    questionIds: ['est-comando-01', 'est-comando-02', 'est-comando-03', 'est-comando-04'],
  }),
  est({
    id: 'est-eliminacao', topicId: 'est-eliminacao',
    title: 'Eliminação fundamentada de alternativas',
    objective: 'Descartar opções incompatíveis com o enunciado, a norma ou a lógica interna, pronunciando o motivo em uma frase.',
    importance: 'Com 5 alternativas, cada descarte correto sobe a chance de acerto se o chute residual for necessário.',
    estimatedMinutes: 24,
    prerequisites: ['est-comando'],
    essencial: [
      named(
        'Eliminar é dizer por que a letra cai',
        'Eliminar é dizer, em uma frase, por que uma letra não pode ser a resposta. Não é impressão. Os motivos que sobrevivem na prova são poucos: a alternativa contradiz o texto ou a norma; usa o termo técnico do conceito vizinho; começa certa e termina com um excesso; responde a uma pergunta que o comando não fez; ou traz lei revogada / programa de outro órgão como se fosse o Anexo IV de Itarema.',
      ),
      named(
        'Cinco letras e o valor de cada descarte',
        'Itarema usa A–E, uma correta, peso 2,0, sem penalidade por erro (itens 13.7 e 13.9). Cada descarte fundamentado reduz o conjunto. Cinco restantes: valor esperado 0,40; quatro 0,50; três 0,67; duas 1,00; branco 0. O descarte só entra nessa conta se o motivo for pronunciável. “Não gostei”, “está longa” e “ainda não caiu A” não são motivos. Os 280 itens locais não têm gabarito e não geram ranking de letras.',
      ),
      named(
        'O que não é fundamento',
        'Tamanho da alternativa, posição da letra, sequência no cartão e “a banca esconde a certa no meio” são superstição. Amostra de gabaritos publicados de quatro opções (Limoeiro do Norte 2016, 10/10/10/9 após uma anulação; Moraújo 2025 tipo A 15/11/12/12 e tipo B 12/15/11/12; total 37/36/33/33 em 139) mostra as quatro letras vivas e a mais frequente trocando de prova. Não há base para A–E de Itarema. Eliminação aqui é conteúdo, comando, vigência e programa — não estética.',
      ),
    ],
    completo: [
      named(
        'Comparação entre duas letras quase iguais',
        'Quando A e C diferem por uma palavra — “somente”, um prazo, o sujeito da oração — essa palavra é o campo de batalha. Leia as duas em voz alta e sublinhe o que muda. O resto da frase foi copiado para cansar. Em RLM, a diferença pode ser a unidade: quilômetro contra quilômetro quadrado. Em específicos, “revogação” no lugar de “anulação”. Em informática, um menu do Word atribuído ao Writer como se fossem o mesmo programa. Cada descarte precisa de um motivo pronunciável. “Não gostei” não é motivo. “Está longa” não é motivo.',
      ),
      named(
        'Contradiz o texto, o stem ou a norma',
        'Se o enunciado cita Windows 11, a alternativa que descreve o gadget da barra lateral do Windows Vista responde a outro sistema. Ela sai, mesmo que o resto da frase fale corretamente de “área de trabalho”. Se o texto de Português não diz, a letra que completa com o mundo do candidato sai no item “de acordo com o texto”. Se a norma vigente é a Lei 14.133/2021, a letra que trata a Lei 8.666/1993 como lei de compras em vigor sai por vigência — e também por programa: licitação não é linha autônoma do Anexo IV deste cargo. Nos cadernos locais, 13/280 itens ainda citam 8.666: distrator histórico, não ementa de Itarema.',
      ),
      named(
        'Conceito vizinho no lugar do pedido',
        'A banca troca peças que o candidato estudou juntas. COIFI (requisitos: competência, objeto, forma, motivo, finalidade) no lugar de PATI (atributos). Licença no lugar de autorização. Protocolo no lugar de deferimento. Writer no lugar de Word. Anulação no lugar de revogação. O distrator não é absurdo: é o vizinho. A frase de descarte é “isso nomeia o instituto do lado, não o que o comando pediu”. Se você não consegue nomear os dois conceitos, a questão ainda é de conteúdo — volte à lição, não risque por feeling.',
      ),
      named(
        'Parcialmente verdadeira: começa certa e termina demais',
        'A alternativa que mistura instituto certo com efeito errado cai inteira. “A anulação desfaz o ato ilegal e, por isso, opera somente ex nunc, como a revogação”: o fundamento (ilegalidade) está certo; o efeito (somente ex nunc) é o da revogação. Não se salva a letra porque o começo “soou conhecido”. O mesmo vale para “autoexecutoriedade é atributo do PATI e, portanto, todo ato se executa pelos próprios meios”: a lista está certa; o “todo” estoura o limite. Risque o trecho que não sobrevive e pronuncie: “excesso no final”.',
      ),
      named(
        'Responde a outra pergunta',
        'Depois de reescrever o comando, a letra que acerta outra tarefa sai. Comando “assinale a incorreta”: a doutrina perfeita é distrator. Comando “de acordo com o texto”: a regra verdadeira de atos, se o texto não a diz, sai. Comando de RLM que pede a capacidade do tanque: o volume que restou, se não era o pedido, sai. A frase de descarte é “certa para outra pergunta”. Isso só funciona se o comando já foi isolado (lição est-comando). Eliminar sem saber a tarefa é chute disfarçado.',
      ),
      named(
        'Fora do silabo e órgão alheio',
        'O mesmo Edital 01/2026 tem programas diferentes por cargo. Código de Trânsito e Lei Municipal 210/2001 (Estatuto dos Servidores) não são linha do Anexo IV do Agente Administrativo. prova7 do corpus local é caderno do CRF-RJ: farmácia não entra no programa de Itarema. prova6 cobra conhecimentos de Jaguaribe: legislação daquele município não é ementa daqui. Elimine a alternativa que exige, como se fosse este cargo, o silabo do concurso vizinho. Estilo da banca (romanos, EXCETO, texto-base) pode ser treinado nesses cadernos; o assunto do órgão alheio, não.',
      ),
    ],
    aprofundamento: [
      named(
        'Quando o absoluto não se elimina sozinho',
        '“Sempre”, “nunca”, “todo” e “somente” são suspeitos, não condenados. Elimine o absoluto quando a doutrina admite exceção (“todo ato é autoexecutório”). Mantenha quando a restrição é a própria regra (“não se revoga ato ilegal: anula-se”). O motivo pronunciável cita a exceção ou a ausência dela. Riscar todo “sempre” por política de gabarito é o inverso da eliminação fundamentada: vira superstição com cara de método.',
      ),
      named(
        'Letra, tamanho e sequência não descartam',
        'Gabaritos publicados de quatro opções: Limoeiro 10/10/10/9; Moraújo A 15/11/12/12; B 12/15/11/12; total 37/36/33/33 de 139. As quatro letras aparecem. A mais frequente troca de prova. Os 280 locais não têm chave e não entram nessa conta. Itarema é A–E. Trocar uma certa porque “não pode ser C de novo” destrói o valor esperado. Tamanho da frase também não é critério: o excesso (“sempre”, “somente”) pode estar na letra curta.',
      ),
    ],
    revisaoRapida: blocks(
      'Contradiz texto ou norma? Fora. Conceito vizinho? Fora. Começa certa e termina demais? Fora.',
      'Outra pergunta? Fora. 8.666 vigente ou silabo de outro cargo? Fora.',
      'Absoluto sem base? Suspeito, mas verifique. Sobrou um par: compare a palavra que difere. Sem letra mágica.',
    ),
    definitions: [
      { term: 'Eliminação', definition: 'Descarte racional de alternativas incompatíveis, não palpite de letra.' },
      { term: 'Motivo pronunciável', definition: 'Frase de uma linha que explica por que a letra não pode ser gabarito.' },
    ],
    comparisons: [
      {
        title: 'Descarte fundamentado × superstição',
        leftLabel: 'Fundamentado',
        rightLabel: 'Não é motivo',
        rows: [
          { label: 'Norma', left: '8.666 como vigente; fora do Anexo IV', right: '“A letra C ainda não caiu”' },
          { label: 'Conceito', left: 'PATI no lugar de COIFI; Writer no lugar de Word', right: '“Está longa demais”' },
          { label: 'Comando', left: 'Doutrina certa quando se pedia a falsa', right: '“Não gostei da redação”' },
          { label: 'Programa', left: 'CTB ou Lei 210/2001 como se fossem deste cargo', right: '“Três iguais no cartão não pode”' },
        ],
      },
    ],
    examples: [
      'O enunciado cita Windows 11. A alternativa que descreve o gadget da barra lateral do Windows Vista responde a outro sistema operacional. Ela sai, mesmo que o resto da frase fale corretamente de “área de trabalho”. O dado que elimina é o nome do sistema, não o tema genérico “Windows”.',
      'Duas alternativas de atos dizem que a anulação desfaz ilegalidade. Uma acrescenta “e só pode ser feita pelo juiz”. A segunda oração é o excesso: a Administração também anula. A letra com o excesso sai, ainda que a primeira metade esteja no seu resumo.',
      'A letra que afirma que a Lei 8.666/1993 rege as compras vigentes da Prefeitura de Itarema sai duas vezes: a lei foi revogada pela 14.133/2021 e não é linha do Anexo IV deste cargo. 13/280 itens locais ainda a citam — ruído de outro programa, não ementa.',
    ],
    publicAdminExamples: [
      'No guichê, a alternativa que trata o carimbo do protocolo como alvará cai porque responde a outra figura jurídica: registro de tramitação, não ato negocial.',
      'Na planilha da secretaria, a letra que atribui ao Calc um caminho exclusivo do Excel, como se fossem o mesmo programa, cai pelo nome do aplicativo — o edital lista os dois.',
    ],
    procedures: [
      'Reescreva o comando (uma linha) antes de riscar qualquer letra.',
      'Para cada alternativa, tente uma frase de descarte: contradiz, vizinho, excesso, outra pergunta, fora do silabo.',
      'Se não houver frase, a letra permanece. Não risque por tamanho ou posição.',
      'No par que sobrou, sublinhe a palavra que difere e decida por ela.',
      'Se restarem duas ou três com fundamento, o chute residual é o tema da próxima lição — ainda com motivo, não com letra mágica.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — excesso no final',
        setup: 'Stem hipotético da plataforma (não é item oficial): “Assinale a correta sobre anulação.” Uma letra: “A anulação desfaz o ato ilegal e, por isso, opera somente ex nunc, como a revogação.”',
        steps: [
          'Comando: uma correta. Não é EXCETO.',
          'Primeira oração: anulação ataca ilegalidade. Sustenta-se.',
          'Segunda oração: “somente ex nunc”. Esse efeito é o da revogação. Anulação, em regra, é ex tunc.',
          'Frase de descarte: “começa certa e cola o efeito do instituto vizinho”.',
          'A letra sai inteira. Não se salva pelo vocabulário conhecido.',
        ],
        result: 'Parcialmente verdadeira = falsa como gabarito de item de única resposta.',
      },
      {
        title: 'Exemplo resolvido 2 — sistema operacional errado',
        setup: 'Stem hipotético: “No Windows 11, assinale a correta sobre o atalho de bloquear a sessão.” Uma letra descreve Ctrl+Alt+T (terminal do Ubuntu). Outra descreve Win+L.',
        steps: [
          'Dado que elimina: o stem nomeou Windows 11.',
          'Ctrl+Alt+T é operação de outro sistema. Frase de descarte: “responde ao Ubuntu”.',
          'Win+L, no Windows, bloqueia a sessão. Permanece.',
          'O tema genérico “atalho de computador” não salva a letra do Ubuntu.',
        ],
        result: 'O nome do sistema é dado, não enredo. Writer e Word seguem a mesma lógica.',
      },
      {
        title: 'Exercício guiado — 8.666 no específico de Itarema',
        setup: 'Alternativa: “A Lei 8.666/1993 continua em vigor e rege, como conteúdo deste Anexo IV, as compras da Prefeitura de Itarema.”',
        steps: [
          'Vigência: 8.666 foi revogada pela 14.133/2021.',
          'Programa: licitação não é linha autônoma do Anexo IV do Agente Administrativo.',
          'Corpus: 13/280 itens locais ainda citam 8.666 — distrator histórico de outros órgãos, não ementa daqui.',
          'Frase de descarte: “lei revogada e fora do silabo”.',
        ],
        result: 'Elimine por fundamento duplo (vigência + programa). Não estude 8.666 como vigente para esta prova.',
      },
    ],
    examInsights: [
      {
        claim: 'Lei 8.666/93 aparece em 13/280 itens extraídos e não deve ser estudada como vigente nem como linha do Anexo IV deste cargo.',
        evidence: 'Contagem no JSON extraído; Lei 14.133/2021; Anexo IV do edital de Itarema.',
        level: 'observado',
      },
      {
        claim: 'Não há, no acervo local de 280 itens, gabarito utilizável. Portanto não se elimina alternativa por “letra que mais cai”.',
        evidence: 'docs/extracoes/relatorio-provas.md; extração com chaves null.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'Cite quatro motivos pronunciáveis de descarte.',
      'Por que a Lei 8.666 no caderno antigo não segura uma letra em Itarema?',
      'Quando “sempre” não se elimina automaticamente?',
    ],
    recallAnswers: [
      'Contradiz texto ou norma; usa conceito vizinho; começa certa e termina com excesso; responde a outra pergunta; ou traz silabo/órgão alheio (8.666 vigente, CTB, farmácia do CRF).',
      'Foi revogada pela 14.133/2021 e não está no Anexo IV deste cargo. 13/280 citações locais são ruído histórico, não ementa.',
      'Quando a restrição é a própria regra (“não se revoga ato ilegal”). Suspeito não é condenado: cite a exceção ou a ausência dela.',
    ],
    commonErrors: [
      'Eliminar “sempre” automaticamente.',
      'Salvar letra parcialmente verdadeira porque o começo soou conhecido.',
      'Riscar por tamanho, posição ou sequência no cartão.',
      'Manter 8.666 “porque caiu no caderno antigo”.',
    ],
    traps: [
      'Alternativa parcialmente verdadeira.',
      'Doutrina certa no comando que pedia a falsa.',
      'Atalho certo de outro sistema operacional.',
      'Programa de outro cargo do mesmo edital tratado como se fosse o Anexo IV.',
    ],
    relatedLessonIds: ['est-chute', 'esp-atos', 'est-comando'],
    relatedEditalItems: ['ed-est-02'],
    synthesis: 'Cada descarte precisa de um motivo pronunciável em uma frase. Letra, tamanho e sequência não são motivo.',
    glossary: [
      { term: 'Alternativa parcialmente verdadeira', definition: 'Começa certa e termina com um detalhe falso.' },
      { term: 'Conceito vizinho', definition: 'Instituto estudado ao lado do pedido (COIFI × PATI, anulação × revogação, Word × Writer).' },
    ],
    masteryCriteria: [
      'Justificar por escrito a eliminação de 3 distratores em uma questão.',
      'Recusar descarte por letra, tamanho ou sequência, citando a ausência de gabarito nos 280 itens locais.',
      'Eliminar 8.666 como vigente e como linha deste Anexo IV, com as duas razões.',
    ],
    questionIds: ['est-elim-01', 'est-elim-02', 'est-elim-03', 'est-elim-04'],
  }),
  est({
    id: 'est-chute', topicId: 'est-chute',
    title: 'Chute consciente e probabilidade nesta prova',
    objective: 'Decidir entre responder, marcar para revisão ou — só se o edital penalizasse — deixar em branco, calculando o valor esperado após n eliminações.',
    importance: 'No Edital de Itarema, item 13.9, não há penalização por erro: branco, rasura ou dupla marca valem zero. Errar também vale zero. Portanto deixar em branco não protege contra o erro; só perde a chance do acerto.',
    estimatedMinutes: 24,
    prerequisites: ['rlm-probabilidade', 'est-eliminacao'],
    essencial: [
      named(
        'Branco e erro valem o mesmo nesta prova',
        'Cinco alternativas, uma correta, peso 2,0. Item 13.9: questões em branco, com dupla marcação, emenda ou rasura não são computadas. Não há desconto extra por errar. Errar aquela questão também vale zero. Deixar em branco “para não errar” importa hábito de prova com penalidade. Aqui o branco não protege: só abre mão da esperança positiva do chute. Rasura e duas marcas zeram como o branco.',
      ),
      named(
        'Valor esperado com peso 2,0',
        'Chute aleatório entre cinco letras: P = 1/5, valor esperado = 0,40 ponto. Eliminou 1: quatro restantes, 0,50. Eliminou 2: três restantes, ≈ 0,67. Eliminou 3: duas restantes, 1,00. A certa vale 2,00. Branco vale 0. A conta só é honesta se as letras que restaram forem realmente indistinguíveis para você — não se uma delas ainda tem motivo de descarte não pronunciado. Eliminação vem da lição anterior; o chute começa depois do último motivo.',
      ),
      named(
        'Não existe letra que mais cai neste acervo',
        'Não existe “letra que mais cai” calculada nos 8 PDFs locais: eles não trazem gabarito. Amostra externa de quatro opções (Limoeiro 10/10/10/9; Moraújo A 15/11/12/12; B 12/15/11/12; total 37/36/33/33 em 139) é evidência contra frequência: as quatro letras aparecem e a líder troca de prova. Não há base para A–E de Itarema. Os 280 itens locais não entram nessa conta. Trocar uma certa porque “não pode ser C de novo” destrói o valor esperado que você acabou de calcular.',
      ),
    ],
    completo: [
      named(
        'Política: se eliminou ao menos uma com fundamento, responda',
        'Se você consegue eliminar ao menos uma com fundamento, responda. Se está entre duas, marque, siga, volte nos últimos 20 minutos. Não gaste 8 minutos numa questão de 2 pontos se ainda há 15 em branco. O item 13.9 incentiva marcar; o relógio incentiva marcar na ordem certa. Chutar a questão 1 de interpretação sem ler o texto desperdiça um bloco que você talvez acerte com calma. Deixar todos os específicos em branco até o pânico final desperdiça 48 pontos. Nos minutos finais, todo branco do cartão recebe uma letra só, sem rasura.',
      ),
      named(
        'Amostra de letras, contra o chute por frequência',
        'Gabaritos publicados de quatro opções: Limoeiro do Norte 2016, 10/10/10/9 após uma anulação; Moraújo 2025 tipo A, 15/11/12/12; tipo B, 12/15/11/12. Total 37/36/33/33 em 139 respostas válidas. A letra mais frequente troca de prova. Não há base para A–E de Itarema. Os 280 itens locais não têm gabarito e não entram nessa conta. Branco vale 0. Cinco letras restantes valem, em média, 0,40; quatro, 0,50; três, 0,67; duas, 1,00; a certa, 2,00. Superstição de gabarito (não marcar três iguais, seguir sequência) não tem base nesta amostra e pode induzir troca da certa pela errada.',
      ),
      named(
        'Tabela mental do valor esperado',
        'EV = (1/k) × 2,0, em que k é o número de letras ainda plausíveis. k = 5 → 0,40; k = 4 → 0,50; k = 3 → ≈ 0,67; k = 2 → 1,00; k = 1 → 2,00; k ausente (branco) → 0. Cadernos locais são A–D (280/280); Itarema é A–E (item 13.7). Usar 1/4 × 2 = 0,50 como se o edital fosse de quatro opções superestima o chute puro. Treine a conta com cinco letras. Eliminar “fundamentadamente” duas e ainda achar que restam cinco é não ter eliminado.',
      ),
      named(
        'Corte de 50% por disciplina e o bloco curto',
        'Classificação no nível médio exige 50% dos pontos em cada disciplina (itens 13.1 e 13.6), não só 50% dos 100 pontos. Português: 7/14. RLM: 3/6. Informática: 3/6. Específicos: 12/24 (24 pontos de 48). Gabarito cheio em uma disciplina não compensa zero em outra. No bloco de 6 itens (RLM ou Informática), dois erros já encostam no corte; o chute informado depois de eliminar uma letra pode decidir classificação. Específicos ainda decidem a nota (48 pontos): não se deixam para o pânico. O chute não substitui estudo; emenda a lacuna residual.',
      ),
      named(
        'Quando marcar: agora versus os minutos finais',
        'Há duas políticas que não se misturam. 13.9 diz: não deixe branco por medo. O relógio diz: não destrua, no minuto 5, um item que você saberia no minuto 40. Marque dúvida no caderno e no mapa. Volte. Se no retorno ainda restam duas ou três com o mesmo grau de ignorância, escolha uma letra, uma marca, sem rasura. Três minutos para oito brancos: preencha todos. Não calcule “letra da sorte”. Não marque duas. Não rasure o alvéolo “até ficar ilegível” — a óptica não interpreta rasura como acerto (13.9, 13.18).',
      ),
      named(
        'Rasura, dupla marca e o que o chute não autoriza',
        'Dupla marcação zera a questão. Emenda e rasura não se computam, ainda que legíveis. Por isso o chute residual é uma letra só, preenchida com calma no círculo. Chute consciente não é marcar no primeiro minuto da questão que você ainda daria conta; não é letra C por estatística inexistente; não é aplicativo de sorte; não é estudar 8.666 como vigente “porque algum caderno antigo cobrou”. É o resto da eliminação fundamentada, ciente de que EV ≥ 0,40 e branco = 0 neste edital.',
      ),
    ],
    aprofundamento: [
      named(
        'Calibrar confiança em vez de contar letra',
        'Se você marca cinco itens “com certeza” e erra sempre, o problema não é o chute: é a leitura do comando ou a calibração. Confiança alta demais em letra parcialmente verdadeira é o erro da lição de eliminação. Confiança baixa demais neste edital gera branco inútil. Treine dizer em voz alta: “eliminei duas por motivo; restam três; EV ≈ 0,67; marco e sigo”. Não treine “a última vez foi B, agora vai C”.',
      ),
      named(
        'Amostra externa não vira gabarito de Itarema',
        'Limoeiro 10/10/10/9 e Moraújo 15/11/12/12 e 12/15/11/12 mostram equilíbrio, não receita. Total 37/36/33/33 em 139. Quatro opções, não cinco. Provas de outros órgãos e anos. Usar essa amostra para “apostar em E” em Itarema inverte o recado: a evidência é contra frequência. Os 280 locais, sem chave, não se somam a esses 139. Hipótese de padrão de letras: não demonstrada.',
      ),
    ],
    revisaoRapida: blocks(
      'Sem penalidade → não deixe branco por medo. EV: 5→0,40; 4→0,50; 3→0,67; 2→1,00; branco→0.',
      'Elimine com motivo. Volte no fim. Uma marca só, sem rasura.',
      'Corte é 50% por disciplina (7/14, 3/6, 3/6, 12/24). Nada de letra mágica.',
    ),
    definitions: [
      { term: 'Valor esperado', definition: 'Média ponderada do ganho: probabilidade × pontos. Aqui, (1/k) × 2,0.' },
      { term: 'Chute consciente', definition: 'Escolha após eliminação fundamentada, ciente da probabilidade residual, sem letra mágica.' },
    ],
    comparisons: [
      {
        title: 'Marcar × deixar em branco neste edital',
        leftLabel: 'Uma letra após eliminação',
        rightLabel: 'Branco / rasura / duas marcas',
        rows: [
          { label: 'Pontos se acertar', left: '2,0', right: '0' },
          { label: 'Pontos se errar', left: '0 (não desconta outra questão)', right: '0' },
          { label: 'EV com 5 letras', left: '0,40', right: '0' },
          { label: 'EV com 2 letras', left: '1,00', right: '0' },
          { label: 'Item do edital', left: '13.7 (uma correta) + 13.9 (sem penalidade extra)', right: '13.9 e 13.18 (não computam)' },
        ],
      },
    ],
    examples: [
      'Cada questão vale 2 pontos. Se você eliminou três alternativas com motivo e sobraram duas, a chance honesta é 1/2 e o valor esperado é 1 ponto — desde que a escolha entre as duas seja mesmo uniforme, e não um “acho que é a mais longa”. Se você não eliminou nenhuma, o chute cego em cinco letras vale, em média, 0,40 ponto. Deixar em branco vale 0. Neste edital o erro também vale 0, então o branco não protege.',
      'RLM tem 6 itens e corte de 3 acertos. Depois de eliminar uma letra impossível por unidade (km² no lugar de km), o EV sobe de 0,40 para 0,50. Não é garantia de corte; é melhor que o branco.',
      'Três Cs seguidos no cartão, todos com fundamento de conteúdo, permanecem três Cs. Trocar o terceiro por superstição de sequência troca um EV de 2,0 por um EV menor.',
    ],
    publicAdminExamples: [
      'No bloco de específicos (24 itens, 48 pontos), o chute residual depois de eliminar a letra que trata protocolo como alvará ainda precisa de uma marca no cartão. O medo de “errar o específico” não autoriza branco: 12 acertos são o mínimo do corte, e o branco não conta como acerto.',
    ],
    procedures: [
      'Elimine com frase de motivo (lição anterior).',
      'Conte k = letras restantes. Calcule EV = 2/k.',
      'Se k ≥ 1 e o relógio ainda permite retorno, marque dúvida e siga; se não permite, marque agora uma letra.',
      'Nos minutos finais, preencha todo branco com uma marca só.',
      'Nunca escolha letra por frequência, tamanho ou sequência. Os 280 locais não têm gabarito.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — EV depois de duas eliminações',
        setup: 'Questão de Itarema, peso 2,0, A–E. Você descartou duas letras: uma trata 8.666 como vigente; outra responde ao Ubuntu num stem de Windows 11. Restam três.',
        steps: [
          'k = 3. P(acerto) honesta = 1/3 se as três forem indistinguíveis.',
          'Ganho se acertar = 2; se errar = 0. EV = 2/3 ≈ 0,67.',
          'Branco = 0. Dupla marca = 0.',
          'Política: marcar uma das três, seguir, voltar se houver tempo.',
        ],
        result: '0,67 > 0. O fundamento das duas eliminações é que torna o chute consciente; a terceira letra não se escolhe por “ser C”.',
      },
      {
        title: 'Exemplo resolvido 2 — branco no bloco de Informática',
        setup: 'Faltam 4 minutos. Informática: 2 acertos já marcados na folha, 4 itens ainda em branco no caderno. Corte da disciplina: 3/6.',
        steps: [
          'Dois acertos não atingem 50% de 6. Precisa de pelo menos mais um.',
          'Branco nos quatro restantes mantém 2/6 e elimina na disciplina, ainda que Português esteja cheio.',
          'Chute puro em cada uma: EV 0,40 por item. Quatro chutes não são quatro acertos — são esperança positiva contra o zero do branco.',
          'Uma marca por item, sem rasura. Não calcule letra da sorte.',
        ],
        result: 'O corte por disciplina torna o branco no bloco curto especialmente caro. 13.9 e 13.6 puxam na mesma direção: marque.',
      },
      {
        title: 'Exercício guiado — sequência no cartão',
        setup: 'Você acabou de marcar C, C e, com fundamento de autotutela, a terceira também seria C. Um colega de treino diz que “três iguais não cai”.',
        steps: [
          'Amostra Limoeiro/Moraújo: quatro letras vivas; líder troca de prova. Não há receita de sequência.',
          '280 locais: sem gabarito. Itarema: A–E, sem estatística de letra.',
          'EV da terceira C, se o conteúdo está certo: 2,0. EV de trocar por superstição: menor.',
          'A frase “três iguais não cai” não é motivo pronunciável de eliminação.',
        ],
        result: 'Conteúdo manda. Frequência de letra não manda. Manter os três Cs.',
      },
    ],
    examInsights: [
      {
        claim: 'Não há, neste acervo, gabarito oficial junto aos PDFs. Portanto não se calcula distribuição de letras do gabarito nem se afirma letra mais frequente.',
        evidence: 'Extração textual dos 8 PDFs sem seção de gabarito utilizável.',
        level: 'observado',
      },
      {
        claim: 'Gabaritos publicados de quatro opções (Limoeiro 10/10/10/9; Moraújo 15/11/12/12 e 12/15/11/12; total 37/36/33/33 em 139) mostram as quatro letras ativas. Não autorizam frequência em A–E de Itarema.',
        evidence: 'Amostra externa citada nesta lição; 280 locais sem chave.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'Qual o valor esperado com 5, 4, 3 e 2 letras restantes, peso 2,0 e erro = 0?',
      'Por que o item 13.9 desincentiva o branco?',
      'Qual o corte mínimo em cada disciplina de Itarema?',
    ],
    recallAnswers: [
      '0,40; 0,50; ≈ 0,67; 1,00. Branco vale 0. A certa vale 2,00.',
      'Branco, rasura e dupla marca não são computados; o erro daquela questão também vale zero e não desconta outra. O branco não protege; só perde a esperança positiva.',
      '50% em cada uma: 7/14 em Português, 3/6 em RLM, 3/6 em Informática, 12/24 em Específicos. Média geral de 50% não basta.',
    ],
    commonErrors: [
      'Deixar em branco “para não errar” neste edital.',
      'Usar 1/4 como se Itarema fosse A–D.',
      'Trocar resposta certa no último segundo por “não pode ser C de novo”.',
      'Achar que 50% no total de 100 pontos dispensa o corte por disciplina.',
    ],
    traps: [
      'Trocar resposta certa no último segundo por “não pode ser C de novo”.',
      'Marcar duas letras “para aumentar a chance”.',
      'Rasurar até ilegível na esperança de a óptica “entender”.',
      'Chutar a questão 1 sem ler o texto, só para “garantir o alvéolo”.',
    ],
    relatedLessonIds: ['est-tempo', 'rlm-probabilidade', 'est-eliminacao'],
    relatedEditalItems: ['ed-est-03'],
    synthesis: 'Neste concurso, o branco não é mais seguro que o chute informado. A letra não tem poder mágico. EV = 2/k; k vem da eliminação, não da superstição.',
    glossary: [
      { term: 'k restantes', definition: 'Número de alternativas ainda plausíveis depois dos descartes com motivo.' },
      { term: 'Corte por disciplina', definition: 'Mínimo de 50% dos pontos em cada uma das quatro disciplinas oficiais, não só no total.' },
    ],
    masteryCriteria: [
      'Calcular o valor esperado após n eliminações.',
      'Explicar por que o item 13.9 desincentiva o branco.',
      'Recusar chute por frequência, citando Limoeiro/Moraújo como evidência contra e os 280 locais sem chave.',
    ],
    questionIds: ['est-chute-01', 'est-chute-02', 'est-chute-03', 'est-chute-04'],
  }),
  est({
    id: 'est-tempo', topicId: 'est-tempo',
    title: 'Gestão de tempo e folha de respostas',
    objective: 'Usar as 4 horas (08h–12h, horário de Brasília, nível médio) sem perder a identificação do caderno nem deslocar a numeração na folha.',
    importance: 'Itens 13.4, 13.8 a 13.16: 4 horas, 50 questões, transcrição para a folha, tipo de caderno obrigatório — não identificar o tipo zera a prova.',
    estimatedMinutes: 26,
    prerequisites: ['est-chute'],
    essencial: [
      named(
        'Quatro horas não são 4,8 minutos iguais',
        '50 questões em 240 minutos ≈ 4,8 min/questão se tudo fosse igual. Não será: Português com texto longo come mais tempo; RLM também, quando a conta emperra. A distribuição de Itarema é 14 de Português, 6 de RLM, 6 de Informática e 24 de Específicos (peso 2,0; 100 pontos). Específicos são 48 pontos — quase metade — e não cabem no canto do relógio. Reserve 25–30 min para transcrever e conferir a folha, incluindo o tipo de caderno. A média bruta já inclui a folha; por isso o bloco final existe.',
      ),
      named(
        'A folha é o único documento válido',
        'Item 13.8: a folha de respostas é o único documento válido para correção óptica da prova objetiva. O rascunho no caderno de questões não corrige. Uma interrupção na plataforma de estudo não apaga respostas salvas; na prova real, o que não está no alvéolo não existe. Preencher um círculo por vez desde o primeiro minuto, sem mapa, é o caminho clássico de pular uma linha e deslocar todas as respostas seguintes.',
      ),
      named(
        'Tipo de caderno: omissão zera a prova',
        'Item 13.16: a não identificação do tipo de caderno no campo específico da folha acarreta nota 0,00. A capa do caderno não é lida pela óptica no lugar desse campo. O fiscal não anota o tipo de memória. Chutar o tipo errado também destrói a correção. Essa conferência entra no checklist dos minutos finais, não na esperança de que “alguém lembre”. Junto: assinar e devolver a folha nas condições do item 13.10; a não devolução nessas condições acarreta eliminação sumária (13.19). O caderno não se leva (14.34).',
      ),
    ],
    completo: [
      named(
        'Três passagens, não uma discussão eterna',
        '1) Fácil e média. 2) Marcadas. 3) Folha. Não discuta com item de específicos no minuto 20 se ainda não leu Português. Marque no caderno e no mapa de questões. A primeira passagem colhe os 2,0 pontos que você já sabe. A segunda gasta o tempo difícil onde ainda há EV alto depois de eliminar. A terceira não descobre matéria nova: transcreve, confere de dez em dez, marca o tipo, assina. Às 11h15, com 20 questões ainda em branco, não cabe discutir um item de específicos por oito minutos.',
      ),
      named(
        'Mapa no caderno e transcrição em bloco',
        'Marque no caderno a letra escolhida e um símbolo de dúvida. Transcrever questão a questão desde o começo, sem mapa, desloca a numeração quando se pula um item. Conferir de dez em dez (1–10, 11–20, 21–30, 31–40, 41–50) detecta o deslocamento antes de contaminar 20 respostas. Rasura na folha não computa (13.9, 13.18): a transcrição precisa nascer limpa. Treine preencher círculos com caneta transparente, no material que o edital permitir.',
      ),
      named(
        'Peso real das disciplinas no relógio',
        'Português: 14 itens, 28 pontos, corte 7. Texto longo pede tempo de leitura; o comando “de acordo com o texto” pede voltar ao trecho, não opinar. RLM: 6 itens, 12 pontos, corte 3 — bloco curto, unidade e ordem de grandeza. Informática: 6 itens, 12 pontos, corte 3 — nomear o sistema antes do atalho. Específicos: 24 itens, 48 pontos, corte 12. Cadernos locais de 40 itens organizam específicos em 21–40; Itarema não replica esse recorte, porque o caderno é de 50. Não ignore o bloco de 48 pontos para “terminar o texto”. Não deixe RLM/Info para o fim só porque são seis: o corte de 50% por disciplina elimina quem zera o bloco curto.',
      ),
      named(
        'O que as capas antigas não são',
        'Cadernos locais anunciam 40 questões e, em várias capas, 3 horas (prova3: 4 horas). Itarema, pelos itens 13.4, 13.5 e 14.1, é 4 horas, 08h–12h de 06/12/2026, horário de Brasília, 50 questões, nível médio/técnico. Superior é outro turno. Títulos não integram a pontuação deste cargo (itens 1.9 e 17.1). Treinar com 40 itens e 3 horas como se fosse o cronômetro da sua prova é o erro de corpus. O método de três passagens transfere; o número de minutos por item, não.',
      ),
      named(
        'Devolução, assinatura e o que não se leva',
        'A folha deve ser devolvida identificada quanto ao tipo de caderno e assinada (13.10). Não devolver nessas condições: eliminação sumária (13.19). Zero por omissão do tipo (13.16) convive com eliminação pela não devolução. Outra pessoa só preenche a folha em atendimento especial autorizado, com fiscal (13.20). Levar o caderno ao término não está autorizado (14.34). Planeje os últimos minutos para: transcrição conferida, tipo, assinatura, caderno na mesa. Não há transcrição no corredor depois do horário.',
      ),
      named(
        'Checklist dos 25–30 minutos finais',
        'Parar de descobrir matéria. Transcrever o mapa. Conferir de dez em dez a numeração. Preencher brancos com uma letra só (política da lição de chute + 13.9). Marcar o tipo de caderno no campo da folha. Assinar. Olhar se não há rasura ou dupla marca. Devolver folha e caderno. Se o tipo ficou só na capa, a óptica não leu: volte ao campo da folha. Este bloco vale mais do que discutir o último específico: um deslocamento de linha ou a omissão do tipo zera o trabalho das quatro horas.',
      ),
    ],
    aprofundamento: [
      named(
        'Material, círculos e o que a plataforma não substitui',
        'Leve só o permitido no edital (caneta de tubo transparente e o demais que o texto autorizar). Treine preencher círculos até o gesto ser automático. A plataforma de estudo salva respostas se a sessão cair; a prova real não. Simule 50 questões com cronômetro de 4h pelo menos uma vez, incluindo a transcrição para uma folha-ensaio. Sem essa simulação, os 4,8 min/item continuam abstratos.',
      ),
      named(
        'Locais, turno e o que não se improvisa na sala',
        'Locais saem em www.idib.org.br (item 13.2). O horário do nível médio está no edital: manhã, 08h–12h. Não há duas etapas de objetiva. Não há transcrição depois do encerramento. O plano de três passagens se treina em casa; o campo do tipo de caderno só existe na folha oficial. Quem deixa “o fiscal lembrar” terceiriza o item 13.16.',
      ),
    ],
    revisaoRapida: blocks(
      'Primeiro o que rende. Marque dúvida. 25–30 min finais = folha + tipo de caderno + assinatura.',
      'Sem tipo = zero (13.16). Folha é o único documento (13.8). Caderno não se leva (14.34).',
      'Corte por disciplina: não zere o bloco de 6. Específicos = 48 pontos: não cabem no canto.',
    ),
    definitions: [
      { term: 'Folha de respostas', definition: 'Único documento válido para correção óptica da prova objetiva (item 13.8).' },
      { term: 'Tipo de caderno', definition: 'Identificação obrigatória na folha; a omissão zera a prova (item 13.16).' },
    ],
    comparisons: [
      {
        title: 'Caderno de questões × folha de respostas',
        leftLabel: 'Caderno',
        rightLabel: 'Folha',
        rows: [
          { label: 'Função', left: 'Enunciados, rascunho, mapa de letras e dúvidas', right: 'Único documento de correção (13.8)' },
          { label: 'Tipo A/B', left: 'Está na capa; a óptica não lê a capa no lugar do campo', right: 'Campo obrigatório; omissão = nota 0,00 (13.16)' },
          { label: 'Rasura', left: 'Pode anotar e mudar no mapa', right: 'Rasura/emenda não computam (13.9, 13.18)' },
          { label: 'Ao término', left: 'Não se leva (14.34)', right: 'Devolver assinada e identificada (13.10); senão, eliminação (13.19)' },
        ],
      },
    ],
    examples: [
      'Às 11h15, com 20 questões ainda em branco, não cabe discutir um item de específicos por oito minutos. Chute informado nas que você já eliminou ao menos uma letra e reserve os minutos finais para transcrever a folha e marcar o tipo de caderno. O item 13.16 trata a omissão do tipo como zeramento da prova. O rascunho no caderno de questões não é o documento de correção: a folha é.',
      'Conferir itens 21–30 na folha e achar que a 24 do caderno está na bolha 25 detecta o deslocamento a tempo. Sem o bloco de dez em dez, as 26 seguintes saem erradas mesmo com o conteúdo certo.',
      'Terminar as 50, assinar, devolver o caderno e esquecer o tipo na folha: nota 0,00. A capa correta não salva. O fiscal não “sabe o seu tipo”.',
    ],
    publicAdminExamples: [
      'Trate a folha como o despacho que decide: o rascunho do caderno é o protocolo — prova que você pensou, não o ato que vale. Sem o campo do tipo, o “processo” da sua prova não tramita para correção.',
    ],
    procedures: [
      'Abra o caderno, identifique o tipo e anote-o no mapa; o preenchimento do campo da folha fica no bloco final, com conferência.',
      'Primeira passagem: itens que saem em menos de 3 minutos. Marque dúvida nos outros.',
      'Segunda passagem: voltar às marcadas; eliminar; se restar k ≥ 2, aplicar a política de chute e seguir.',
      'Últimos 25–30 min: transcrever de dez em dez, preencher brancos, tipo, assinatura, conferir rasura/dupla.',
      'Devolver folha e caderno. Não improvisar transcrição no corredor.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — 11h15 e vinte brancos',
        setup: 'Prova de Itarema, 08h–12h. São 11h15. Há 20 itens sem letra no caderno, a folha ainda está em branco, o tipo de caderno não foi marcado.',
        steps: [
          'Restam 45 minutos, não 4,8 min × 20. A folha precisa de um bloco próprio.',
          'Não discutir um específico por oito minutos. Aplicar eliminação + chute nas que já têm motivo.',
          'Reservar ≈ 25 min para transcrição, brancos, tipo (13.16) e assinatura (13.10).',
          'Específicos valem 48 pontos, mas um deslocamento na folha ou a omissão do tipo zera tudo.',
        ],
        result: 'O relógio manda encerrar matéria e abrir o rito da folha. 13.9 manda não deixar branco; 13.16 manda não esquecer o tipo.',
      },
      {
        title: 'Exemplo resolvido 2 — deslocamento de uma linha',
        setup: 'Candidato preenche a folha questão a questão desde o item 1. Pula o item 17 no caderno (marcado para voltar) e preenche a bolha 17 com a resposta do 18.',
        steps: [
          'Sem mapa, o pulo vira deslocamento. Da 17 em diante, conteúdo certo na bolha errada.',
          'Rasurar 34 bolhas no fim não computa (13.9, 13.18).',
          'Prevenção: mapa no caderno + transcrição em bloco + conferência de dez em dez.',
          'O item 17 voltaria na segunda passagem; a bolha 17 não deveria existir antes disso.',
        ],
        result: 'Transcrever em bloco depois das passagens é mais seguro do que “ir preenchendo para não esquecer”.',
      },
      {
        title: 'Exercício guiado — tipo só na capa',
        setup: 'A pessoa conclui as 50, assina, devolve caderno e folha. O tipo está escrito na capa do caderno e no rascunho. O campo da folha ficou em branco.',
        steps: [
          'Item 13.8: a óptica lê a folha, não a capa.',
          'Item 13.16: omissão do tipo na folha → nota 0,00.',
          'Memória do fiscal e carimbo do caderno não substituem o campo.',
          'Checklist final teria pegado isso em 15 segundos.',
        ],
        result: 'Tipo na folha. Sempre. A omissão zera as quatro horas.',
      },
    ],
    examInsights: [
      {
        claim: 'Os cadernos locais de Agente Administrativo da IDIB examinados anunciam, na capa, 40 questões e tempo de 3h ou 4h. Itarema terá 50 questões e 4 horas (itens 13.4 e 13.5) — formato diferente, ainda que a banca seja a mesma.',
        evidence: 'Capas de prova1/2, prova3, prova6 e prova8; Edital Itarema itens 13.4 e 13.5.',
        level: 'observado',
      },
      {
        claim: 'As capas instruem que dupla marcação, rasura ou questão em branco não são computadas — regra semelhante à de Itarema (item 13.9).',
        evidence: 'Instruções de capa em prova3, prova6 e prova8; Edital Itarema 13.9.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'O que acontece se a folha não identificar o tipo de caderno?',
      'Por que transcrever questão a questão desde o minuto zero é arriscado?',
      'Qual o plano de três passagens nas 4 horas?',
    ],
    recallAnswers: [
      'Nota 0,00 (item 13.16). A capa e o fiscal não substituem o campo da folha (13.8).',
      'Pular um item desloca todas as bolhas seguintes. Rasura ulterior não computa. Mapa no caderno + transcrição em bloco + conferência de dez em dez.',
      '1) Fácil e média. 2) Marcadas, com eliminação e chute residual. 3) Folha: transcrição, brancos, tipo, assinatura. Sem descobrir matéria no bloco 3.',
    ],
    commonErrors: [
      'Deixar a identificação do caderno para o fiscal “lembrar”.',
      'Treinar com 40 itens e 3 horas como se fosse Itarema.',
      'Ignorar específicos até restarem 5 minutos, por achar que Português “pesa mais”.',
      'Preencher a folha no primeiro minuto com letras aleatórias.',
    ],
    traps: [
      'Preencher a folha questão a questão no começo e se perder na numeração.',
      'Achar que a capa do caderno vale como identificação do tipo.',
      'Transcrever no corredor depois do encerramento.',
      'Levar o caderno (14.34) ou não devolver a folha nas condições do 13.10 (13.19).',
    ],
    relatedLessonIds: ['est-chute', 'est-eliminacao'],
    relatedEditalItems: ['ed-est-04'],
    synthesis: 'Tempo é recurso. A folha e o tipo de caderno são a prova; o rascunho não vale. Três passagens, bloco final de 25–30 min, tipo no campo (13.16).',
    glossary: [
      { term: 'Mapa de questões', definition: 'Anotação no caderno da letra escolhida e da dúvida, para transcrever em bloco sem deslocar numeração.' },
      { term: 'Passagem', definition: 'Volta completa no caderno com um objetivo: colher fáceis, resolver marcadas, ou transcrever a folha.' },
    ],
    masteryCriteria: [
      'Simular 50 questões com cronômetro de 4h pelo menos uma vez.',
      'Incluir conferência de tipo de caderno no checklist.',
      'Explicar a diferença entre zero por omissão do tipo (13.16) e eliminação por não devolver a folha (13.19).',
    ],
    questionIds: ['est-tempo-01', 'est-tempo-02', 'est-tempo-03', 'est-tempo-04'],
  }),
]
