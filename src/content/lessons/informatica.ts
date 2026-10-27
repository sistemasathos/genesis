import type { Lesson } from '../../models/types'
import { lesson, blocks, named } from '../buildLesson'

const corte =
  'Na prova de Agente Administrativo de Itarema a Informática tem 6 questões (12 pontos) e o corte é 50% em cada disciplina: errar o bloco inteiro elimina, mesmo com Português alto. O edital nomeia versões (Windows 11, Ubuntu, Word e Writer, Excel e Calc, PowerPoint e Impress, Chrome, Edge, Firefox, Outlook, Thunderbird, Gmail, OneDrive, Drive, Teams, Meet e Zoom) — não trate programas diferentes como se fossem o mesmo.'

type InfDraft = Omit<Lesson, 'disciplineId' | 'areaId' | 'sourceIds' | 'complementary'> & {
  sourceIds?: string[]
}

function inf(partial: InfDraft): Lesson {
  const { sourceIds, ...rest } = partial
  return lesson({
    ...rest,
    disciplineId: 'informatica',
    areaId: 'informatica',
    complementary: false,
    sourceIds: sourceIds ?? ['src-edital', 'src-didatico'],
  })
}

export const informaticaLessons: Lesson[] = [
  inf({
    id: 'inf-hardware-software',
    chapterId: 'inf-fundamentos',
    topicId: 'inf-hardware-software',
    title: 'Hardware, software livre e software proprietário',
    objective:
      'Distinguir hardware de software e explicar, com exemplos do expediente municipal, a diferença entre software livre e software proprietário.',
    importance: corte,
    estimatedMinutes: 26,
    prerequisites: [],
    essencial: [
      named(
        'O computador como sistema',
        'Computador é o conjunto de partes físicas (hardware) mais os programas que as fazem trabalhar (software). Sem o hardware o programa não executa; sem o software a máquina não produz ofício, planilha nem e-mail. Firmware é um programa gravado em chip para inicializar o equipamento (BIOS/UEFI na placa-mãe). Não confunda firmware com aplicativo de escritório.',
      ),
      named(
        'Hardware',
        'Hardware é tudo o que se pode tocar: gabinete, placa-mãe, processador, memória, disco, monitor, teclado, mouse, impressora, scanner e cabo de rede. No protocolo da prefeitura, o scanner que digitaliza o requerimento do cidadão é hardware; o PDF gerado já é um arquivo, ou seja, dado tratado por software.',
      ),
      named(
        'Software',
        'Software é o conjunto de instruções: sistema operacional, antivírus, navegador, Word, Writer, Excel, Calc, Outlook, Thunderbird. O ofício em .docx ou .odt é um arquivo produzido por software, não é hardware. Programas de sistema gerenciam a máquina; programas aplicativos resolvem a tarefa do usuário (redigir, calcular, apresentar, navegar).',
      ),
      named(
        'Software livre e software proprietário',
        'Software livre garante, em essência, liberdade de usar, estudar, modificar e redistribuir o programa (com o código-fonte acessível). Exemplos típicos de concurso: Linux Ubuntu, LibreOffice, Mozilla Firefox, Mozilla Thunderbird. Software proprietário restringe cópia, alteração e redistribuição; o usuário recebe licença de uso, não a propriedade do código. Exemplos: Microsoft Windows, Microsoft 365 (Word, Excel, PowerPoint, Outlook), Google Chrome (proprietário sobre o projeto Chromium). “Grátis” não é sinônimo de “livre”: um aplicativo pode ser gratuito e mesmo assim proprietário.',
      ),
    ],
    completo: [
      named(
        'Camadas que a banca mistura',
        'Pense em quatro camadas. 1) Hardware: o equipamento. 2) Firmware: programa de inicialização. 3) Sistema operacional: Windows 11 ou Linux Ubuntu, que oferece pasta, janela, impressora e conta de usuário. 4) Aplicativo: o LibreOffice Writer ou o Microsoft Word em que o agente redige o ofício. Licença é regra jurídica de uso do software; não altera o fato de o programa ser software. Driver é software que faz o sistema conversar com um periférico (impressora, scanner); o periférico em si continua hardware.',
      ),
      named(
        'O que o edital de nível médio realmente cobra',
        'O Anexo IV do Agente Administrativo (ensino médio/técnico) pede fundamentos de informática: hardware e software; software livre e software proprietário. Cobra classificar um exemplo do expediente e não chamar LibreOffice de hardware nem Windows 11 de “software livre porque veio instalado”. Não cobra engenharia de compiladores nem a história completa do movimento GNU.',
      ),
      named(
        'Software de sistema, aplicativo e utilitário',
        'Sistema operacional controla recursos (Windows 11, Linux Ubuntu). Aplicativo atende o usuário final: Microsoft Word, LibreOffice Writer, Microsoft Excel, LibreOffice Calc, Microsoft PowerPoint, LibreOffice Impress, Google Chrome, Microsoft Edge, Mozilla Firefox, Microsoft Outlook, Mozilla Thunderbird, Gmail no navegador. Utilitário faz manutenção (compactação .zip, antivírus). Compactador e antivírus são software; o pendrive no qual se copia o backup é hardware de armazenamento.',
      ),
      named(
        'Os programas nomeados no edital, um a um',
        'Software livre típico desta prova: Linux Ubuntu, LibreOffice Writer, LibreOffice Calc, LibreOffice Impress, Mozilla Firefox, Mozilla Thunderbird. Software proprietário típico: Microsoft Windows 11, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Outlook, Google Chrome, Microsoft Edge. Gmail, OneDrive, Google Drive, Microsoft Teams, Google Meet e Zoom são serviços/aplicativos em nuvem ou de reunião — também software, não hardware. Google Chrome é proprietário sobre o projeto Chromium; Mozilla Firefox é livre. Não trate Word como Writer, Excel como Calc, PowerPoint como Impress, Windows 11 como Ubuntu, nem Chrome como Edge ou Firefox.',
      ),
      named(
        'Grátis, livre e “já estava na máquina”',
        'Preço e liberdade não coincidem. Freeware é gratuito e pode ser proprietário (não se estuda nem se modifica o código). Software livre pode ser cobrado pelo suporte e ainda assim livre. A prefeitura pagar a licença do Microsoft 365 não transforma Microsoft Word em software livre: comprou o direito de uso, não o código. O fato de o Windows 11 “já vir” no notebook da secretaria também não o torna livre.',
      ),
      named(
        'Arquivo, dado e programa no guichê',
        'O ofício em .docx ou .odt é um arquivo (dado organizado). O editor que o produz (Microsoft Word ou LibreOffice Writer) é software aplicativo. A impressora que o coloca no papel é hardware de saída. O papel impresso não é hardware do computador: é documento. Confundir as três camadas (programa, arquivo, objeto físico) é o distrator clássico da estação de protocolo.',
      ),
      named(
        'Firmware e driver no arranque da estação',
        'Firmware (BIOS/UEFI) está no chip da placa-mãe e roda antes do Windows 11 ou do Ubuntu. Sem ele a máquina não chega à tela de login. Driver instala-se depois, já no sistema, para a impressora da secretaria ou o scanner do protocolo. Nem firmware nem driver são o LibreOffice. Se o enunciado falar em “rotina gravada no chip que inicia o hardware”, a resposta é firmware, não aplicativo de escritório.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do programa de Informática superior',
        'O Anexo IV de ensino superior deste mesmo edital aprofunda formatos abertos e proprietários como linha autônoma, banco de dados, qualidade dos dados, governo digital, gov.br, dados abertos, ISO e a LGPD como programa completo (Lei nº 13.709/2018 artigo a artigo). Nada disso é a ementa do Agente Administrativo. Aqui basta classificar hardware × software e livre × proprietário com os nomes do próprio edital de nível médio.',
      ),
      named(
        'Licenças só na dose da prova média',
        'GPL e afins marcam software livre/código aberto. EULA é o contrato típico do software proprietário. Código aberto e software livre não são idênticos em filosofia, mas nas provas de nível médio caminham juntos frente ao proprietário. Não compare tabelas jurídicas de licença nem afirme que todo programa da Google ou da Microsoft é livre só porque há versão web gratuita.',
      ),
    ],
    revisaoRapida: blocks(
      'Hardware = parte física. Software = programa. Firmware = programa no chip de inicialização.',
      'Livre: usar, estudar, modificar, redistribuir (Ubuntu, LibreOffice, Firefox, Thunderbird). Proprietário: licença restrita (Windows, Word, Excel, Outlook).',
      'Grátis não é livre. Arquivo de ofício é dado; o editor é software; a impressora é hardware.',
    ),
    definitions: [
      { term: 'Hardware', definition: 'Componentes físicos do computador e periféricos.' },
      { term: 'Software', definition: 'Programas e instruções que o hardware executa.' },
      { term: 'Firmware', definition: 'Software gravado em hardware para inicializar e controlar o equipamento (ex.: UEFI).' },
      { term: 'Software livre', definition: 'Programa que assegura liberdades de uso, estudo, modificação e redistribuição, em regra com código-fonte disponível.' },
      { term: 'Software proprietário', definition: 'Programa distribuído sob licença que restringe cópia, alteração ou redistribuição do código.' },
    ],
    comparisons: [
      {
        title: 'Livre versus proprietário (exemplos de edital)',
        leftLabel: 'Software livre (exemplos)',
        rightLabel: 'Software proprietário (exemplos)',
        rows: [
          { label: 'Sistema', left: 'Linux Ubuntu', right: 'Microsoft Windows 11' },
          { label: 'Texto', left: 'LibreOffice Writer', right: 'Microsoft Word' },
          { label: 'Planilha', left: 'LibreOffice Calc', right: 'Microsoft Excel' },
          { label: 'Apresentação', left: 'LibreOffice Impress', right: 'Microsoft PowerPoint' },
          { label: 'Navegador', left: 'Mozilla Firefox', right: 'Google Chrome e Microsoft Edge' },
          { label: 'Correio', left: 'Mozilla Thunderbird', right: 'Microsoft Outlook' },
        ],
      },
    ],
    examples: [
      'O teclado da estação de protocolo é hardware; o Windows 11 que o reconhece é software de sistema.',
      'Redigir um ofício no Writer é uso de software aplicativo livre; redigir o mesmo ofício no Word é uso de software aplicativo proprietário.',
      'A licença do pacote Microsoft 365 da prefeitura não transforma o Word em software livre.',
    ],
    publicAdminExamples: [
      'No setor de protocolo, o scanner (hardware) digitaliza o requerimento; o PDF é gravado pelo software e juntado ao processo.',
      'O modelo de ofício da secretaria pode ser .odt (Writer) ou .docx (Word): a escolha é de software, não de hardware.',
      'Instalar Ubuntu em um laboratório municipal é adotar sistema operacional de software livre; isso não elimina a necessidade de licença se a mesma rede também usa Windows 11.',
    ],
    procedures: [
      'Classifique o objeto da questão: dá para tocar? hardware. É programa ou arquivo de programa? software.',
      'Se for software, pergunte se o código pode ser estudado e redistribuído livremente. Se a banca citar Windows 11, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Outlook, Google Chrome ou Microsoft Edge, pense em proprietário.',
      'Se citar Linux Ubuntu, LibreOffice Writer, LibreOffice Calc, LibreOffice Impress, Mozilla Firefox ou Mozilla Thunderbird, pense em livre.',
      'Não use “veio de graça no computador da prefeitura” nem “já pagamos a licença” como critério de software livre.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — scanner, editor e comprovante no guichê',
        setup: 'No protocolo, o munícipe entrega um requerimento em papel. O agente digitaliza no scanner, redige o despacho no LibreOffice Writer e imprime o comprovante de protocolo.',
        steps: [
          'Tarefa: classificar cada elemento em hardware ou software.',
          'Scanner e impressora são periféricos físicos: hardware.',
          'Writer é programa: software aplicativo livre. O PDF ou .odt gerado é arquivo, não hardware.',
          'O comprovante em papel é documento; não entra na classificação de componente do computador.',
        ],
        result: 'Hardware: scanner e impressora. Software: Writer. O papel não é hardware da estação.',
      },
      {
        title: 'Exemplo resolvido 2 — Ubuntu e Word na mesma prefeitura',
        setup: 'A Secretaria de Administração usa Linux Ubuntu e LibreOffice Writer no laboratório e Microsoft Windows 11 com Microsoft Word nas mesas do protocolo. Uma alternativa afirma que “todos são software livre, porque o município não cobra do servidor para usar”.',
        steps: [
          'Software livre depende de liberdades sobre o código, não de preço interno.',
          'Ubuntu e Writer: livres. Windows 11 e Word: proprietários, mesmo com licença institucional paga.',
          'O fato de o servidor não pagar na hora de ligar a máquina é irrelevante para a classificação.',
        ],
        result: 'Livre: Ubuntu e Writer. Proprietário: Windows 11 e Word. Grátis no guichê não é livre.',
      },
      {
        title: 'Exercício guiado — firmware ou Writer?',
        setup: 'O técnico diz que a rotina gravada no chip da placa-mãe inicia o hardware antes do Windows 11 ou do Ubuntu, e que isso “não é o LibreOffice”.',
        steps: [
          'Writer/Word só rodam depois que o sistema operacional já subiu.',
          'A rotina no chip é firmware (BIOS/UEFI).',
          'RAM se apaga ao desligar; firmware permanece. Periférico de entrada é teclado/scanner, não a rotina de arranque.',
        ],
        result: 'A classificação correta é firmware, não aplicativo de escritório nem arquivo .odt.',
      },
    ],
    recallPrompts: [
      'Hardware, software e firmware: defina cada um com um exemplo da mesa de protocolo.',
      'Cite dois programas livres e dois proprietários que o próprio edital nomeia.',
      'Por que pagar a licença do Microsoft Word não o torna software livre?',
      'O ofício impresso é hardware? E o arquivo .docx?',
    ],
    recallAnswers: [
      'Hardware é a parte física (scanner, impressora). Software é o programa (Windows 11, Writer). Firmware é o programa no chip de inicialização (UEFI).',
      'Livres: Linux Ubuntu, LibreOffice Writer (também Calc, Impress, Firefox, Thunderbird). Proprietários: Microsoft Windows 11, Microsoft Word (também Excel, PowerPoint, Outlook, Chrome, Edge).',
      'A licença paga autoriza o uso; não entrega as liberdades de estudar, modificar e redistribuir o código.',
      'O papel impresso é documento, não componente. O .docx é arquivo (dado) produzido por software, também não é hardware.',
    ],
    commonErrors: [
      'Chamar o arquivo do ofício de hardware.',
      'Dizer que LibreOffice é hardware porque “é o programa do computador”.',
      'Tratar software gratuito (freeware) como necessariamente livre.',
      'Afirmar que Windows 11 é livre porque o município “já pagou a licença”.',
      'Igualar Microsoft Word a LibreOffice Writer só porque os dois redigem ofício.',
    ],
    traps: [
      'A banca lista Firefox, Writer e Ubuntu no meio de itens de hardware para induzir classificação errada.',
      '“Programa gravado na placa-mãe” é firmware, não aplicativo de escritório.',
      'Google Chrome continua proprietário mesmo quando o município usa Google Drive de graça.',
      'Tratar Microsoft Edge e Mozilla Firefox como “o mesmo navegador” porque os dois abrem HTTPS.',
    ],
    relatedLessonIds: ['inf-componentes', 'inf-arquivos-unidades', 'inf-windows-linux'],
    relatedEditalItems: ['Fundamentos de informática: Hardware e software; software livre e software proprietário'],
    synthesis:
      'Hardware é a máquina; software é o programa. Livre e proprietário distinguem-se pelas liberdades sobre o código, não pelo preço. No expediente, impressora e scanner são hardware; Microsoft Word, LibreOffice Writer, Windows 11 e Ubuntu são software — e não são o mesmo programa.',
    glossary: [
      { term: 'Sistema operacional', definition: 'Software de sistema que gerencia hardware, arquivos, contas e a execução dos aplicativos (Windows 11 ou Linux Ubuntu).' },
      { term: 'Aplicativo', definition: 'Software voltado à tarefa do usuário, como Microsoft Word, LibreOffice Writer, Microsoft Excel ou LibreOffice Calc.' },
      { term: 'Licença de uso', definition: 'Condições legais sob as quais se pode instalar e usar um programa, sem necessariamente torná-lo livre.' },
    ],
    masteryCriteria: [
      'Classificar, em lista mista, o que é hardware, software e firmware.',
      'Dar dois exemplos de software livre e dois de proprietário previstos no próprio edital.',
      'Explicar por que “gratuito” não prova que o programa é livre.',
      'Nomear Word, Writer, Excel, Calc, PowerPoint, Impress, Windows 11 e Ubuntu sem trocar um pelo outro.',
    ],
    questionIds: ['inf-q01', 'inf-q02', 'inf-q03'],
  }),

  inf({
    id: 'inf-componentes',
    chapterId: 'inf-fundamentos',
    topicId: 'inf-componentes',
    title: 'Componentes e dispositivos de entrada, saída e armazenamento',
    objective:
      'Identificar CPU, memórias e periféricos de entrada, saída e armazenamento no cotidiano da repartição.',
    importance: corte,
    estimatedMinutes: 28,
    prerequisites: ['inf-hardware-software'],
    essencial: [
      named(
        'Unidade central e placa-mãe',
        'A placa-mãe interliga os componentes. O processador (CPU) executa instruções. O cooler dissipa calor. Fonte de alimentação converte energia. Sem esses elementos o computador da estação de atendimento não liga. A questão de concurso costuma pedir a função, não a marca do chip.',
      ),
      named(
        'Memória e armazenamento não são a mesma coisa',
        'Memória RAM é volátil: guarda o que está em uso (o ofício aberto no Microsoft Word ou no LibreOffice Writer) e se apaga ao desligar. ROM/UEFI guarda a rotina de arranque e não se apaga ao desligar. Armazenamento permanente fica em HD (disco magnético), SSD (memória flash, em geral mais rápido e silencioso), pendrive, cartão SD, CD/DVD ou na nuvem (OneDrive, Google Drive). HD e SSD são dispositivos de armazenamento, não de entrada como o teclado.',
      ),
      named(
        'Entrada, saída e mistos',
        'Entrada (input): teclado, mouse, scanner, microfone, webcam, leitor de código de barras. Saída (output): monitor, impressora, caixas de som, projetor, fone. Entrada e saída: tela sensível ao toque, impressora multifuncional com scanner, headset com microfone, modem/placa de rede (comunicação). O HD/SSD armazena; não chame disco de “dispositivo de entrada” só porque “entra dado nele”.',
      ),
      named(
        'O verbo da questão denuncia o componente',
        'Executar instruções → CPU. Guardar o ofício aberto enquanto se edita → RAM. Guardar o arquivo depois de Salvar → HD/SSD. Capturar o requerimento em papel → scanner (entrada). Colocar o comprovante no papel → impressora (saída). Essa leitura do verbo evita classificar “tudo que participa do atendimento” como a mesma coisa.',
      ),
    ],
    completo: [
      named(
        'CPU, clock e o que a prova média pede',
        'A CPU busca, decodifica e executa instruções do Windows 11, do Ubuntu e dos aplicativos. Clock em GHz descreve a frequência; núcleos descrevem quantas tarefas o processador pode conduzir em paralelo no nível didático. Não é preciso desenhar pipeline nem cache L1/L2/L3 como em prova de TI. Basta não chamar a CPU de “memória” nem de “disco”.',
      ),
      named(
        'RAM, ROM e memória cache',
        'RAM: volátil, trabalho da vez (planilha de frequência aberta no Microsoft Excel ou no LibreOffice Calc). ROM/firmware: permanente no chip, arranque. Cache da CPU é memória pequena e rápida junto ao processador — não é o HD e não é a pasta OneDrive. Desligar a estação apaga a RAM; o arquivo só permanece se tiver sido gravado no armazenamento.',
      ),
      named(
        'HD, SSD, mídia removível e nuvem',
        'HD: prato magnético, em geral mais barato e mais lento. SSD: flash, silencioso, arranque mais rápido do Windows 11 ou do Ubuntu. Pendrive e cartão SD: portáteis; úteis para levar a planilha de frequência a outra mesa, com risco de perda e malware. CD/DVD ainda aparecem em textos de prova como armazenamento óptico. Nuvem (OneDrive, Google Drive) é armazenamento remoto; precisa de rede. Nenhum desses é teclado.',
      ),
      named(
        'Impressora no serviço público',
        'Matricial ainda aparece em alguns textos antigos (formulário contínuo). Jato de tinta e laser são as comuns no protocolo. Multifuncional imprime, digitaliza e às vezes envia fax: é dispositivo misto. Plotter é saída de grande formato (plantas da secretaria de obras). A impressão do ofício é saída; a digitalização do protocolo é entrada via scanner. A fila de impressão é software; a impressora é hardware.',
      ),
      named(
        'Monitor, GPU e projetor da reunião',
        'A placa de vídeo (integrada à CPU ou dedicada) gera a imagem. O monitor e o projetor da reunião de gabinete são saída. Resolução (pixels) e polegadas descrevem o monitor, não a capacidade do SSD. Webcam da videoconferência no Microsoft Teams, Google Meet ou Zoom é entrada; o alto-falante é saída.',
      ),
      named(
        'Rede: comunicação, não armazenamento',
        'Placa de rede, roteador e switch transportam dados; não “guardam o ofício”. O servidor de arquivos da prefeitura é um computador com HD/SSD; o cabo que chega à mesa do agente é comunicação. Modem e placa de rede classificam-se, em prova de nível médio, como dispositivos de comunicação (entrada e saída de dados pela rede).',
      ),
      named(
        'Mapa rápido do guichê',
        'Atendimento: teclado e mouse (entrada), monitor (saída), scanner (entrada), impressora (saída), SSD (armazenamento do PDF), CPU (processa), RAM (documento aberto). Headset com microfone no Microsoft Teams é misto. O cidadão no balcão não é periférico — mas o leitor de senha de fila, se houver, é entrada.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia da Informática superior',
        'Arquitetura interna de microprocessador, RAID, SAN/NAS como projeto, virtualização de storage e comparação de barramentos (PCIe geração a geração) pertencem a ementas de TI ou ao recorte superior deste edital. Se a questão de Agente Administrativo pedir “entrada ou saída”, responda pela direção do dado, não pelo diagrama de chipset.',
      ),
      named(
        'Unidades que a banca mistura com este tópico',
        'Capacidade do disco vem em GB ou TB; velocidade da RAM em MHz ou GT/s; clock da CPU em GHz. Um ofício de 3 MB cabe milhares de vezes em um SSD de 256 GB. “Mais rápido” não transforma SSD em RAM. Pipeline e superscalar ficam de fora.',
      ),
    ],
    revisaoRapida: blocks(
      'CPU executa. RAM é volátil. HD/SSD armazenam de forma persistente.',
      'Entrada: teclado, mouse, scanner, mic, webcam. Saída: monitor, impressora, som, projetor.',
      'Multifuncional e touchscreen são entrada e saída. Disco não é teclado. Nuvem é armazenamento remoto.',
    ),
    definitions: [
      { term: 'CPU', definition: 'Processador; executa as instruções dos programas.' },
      { term: 'RAM', definition: 'Memória de acesso aleatório, volátil, para dados em uso.' },
      { term: 'HD', definition: 'Disco rígido magnético de armazenamento persistente.' },
      { term: 'SSD', definition: 'Unidade de estado sólido, armazenamento persistente em geral mais rápido que o HD.' },
      { term: 'Periférico', definition: 'Dispositivo externo ou interno que amplia entrada, saída, armazenamento ou comunicação.' },
    ],
    comparisons: [
      {
        title: 'RAM versus armazenamento',
        leftLabel: 'RAM',
        rightLabel: 'HD / SSD / pendrive / nuvem',
        rows: [
          { label: 'Persistência', left: 'Perde o conteúdo ao desligar', right: 'Mantém arquivos depois de desligar' },
          { label: 'Uso típico', left: 'Ofício aberto no Word ou no Writer', right: 'Arquivo salvo na pasta do protocolo' },
          { label: 'Classificação', left: 'Memória principal', right: 'Armazenamento secundário (local ou remoto)' },
        ],
      },
      {
        title: 'Direção do dado no protocolo',
        leftLabel: 'Entrada',
        rightLabel: 'Saída',
        rows: [
          { label: 'Papel → máquina', left: 'Scanner, teclado, webcam', right: '—' },
          { label: 'Máquina → papel/tela', left: '—', right: 'Impressora, monitor, projetor' },
          { label: 'Os dois', left: 'Multifuncional, touch, headset', right: 'Multifuncional, touch, headset' },
        ],
      },
    ],
    examples: [
      'Digitando a ata: teclado (entrada), texto na RAM, arquivo no SSD, folha na impressora (saída).',
      'Webcam em videoconferência da secretaria no Teams, Meet ou Zoom: entrada de imagem; alto-falante: saída de áudio.',
      'Pendrive levando a planilha de frequência para outra estação: armazenamento portátil.',
      'Projetor na reunião de gabinete: saída; o slide em si é arquivo no SSD ou no OneDrive.',
    ],
    publicAdminExamples: [
      'No guichê de protocolo, o cidadão entrega documento em papel; o servidor digitaliza no scanner (entrada) e imprime o comprovante (saída).',
      'A listagem de frequência do mês fica no SSD da estação, na pasta de rede ou no OneDrive/Google Drive, não “na RAM da impressora”.',
      'Ofício n. 014/2026: teclado entra o texto, CPU processa, SSD guarda o .odt/.docx, impressora sai a via assinada.',
    ],
    procedures: [
      'Leia o verbo da questão: executar (CPU), guardar temporariamente (RAM), guardar arquivo (HD/SSD/nuvem), capturar (entrada), exibir/imprimir (saída).',
      'Se o aparelho faz as duas pontas (multifuncional, touch), classifique como entrada e saída.',
      'Não use velocidade (“é mais rápido”) como único critério para dizer o que é RAM.',
      'Separe o servidor de arquivos (armazenamento) do cabo/roteador (comunicação).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — o caminho do requerimento',
        setup: 'Munícipe protocola requerimento. O agente digitaliza, salva o PDF na pasta do ano e imprime o comprovante.',
        steps: [
          'Scanner captura a imagem: entrada.',
          'CPU processa; RAM segura o PDF aberto no visualizador.',
          'Salvar na pasta do protocolo: HD/SSD (armazenamento).',
          'Impressora do comprovante: saída. O papel não é periférico de armazenamento.',
        ],
        result: 'Entrada (scanner) → processamento (CPU/RAM) → armazenamento (SSD) → saída (impressora).',
      },
      {
        title: 'Exemplo resolvido 2 — “memória” ambígua',
        setup: 'Alternativa diz: “A memória do computador guarda a planilha de frequência mesmo com a máquina desligada, por isso a RAM é o local correto do arquivo mensal.”',
        steps: [
          'RAM é volátil: desligar apaga o que não foi salvo.',
          'Planilha mensal precisa persistir: HD, SSD, servidor ou nuvem.',
          '“Memória” no enunciado exige ler se fala em volátil ou em arquivo salvo.',
        ],
        result: 'A alternativa confunde RAM com armazenamento. A frequência mensal não “mora” na RAM.',
      },
      {
        title: 'Exercício guiado — multifuncional',
        setup: 'Questão classifica a impressora multifuncional do protocolo apenas como “dispositivo de saída”.',
        steps: [
          'Imprimir o ofício é saída.',
          'Digitalizar o documento do cidadão é entrada (scanner).',
          'Classificar só como saída omite metade da função. Em prova de única resposta, o “apenas” invalida.',
        ],
        result: 'Multifuncional é misto (entrada e saída).',
      },
    ],
    recallPrompts: [
      'O que acontece com a RAM e com o SSD ao desligar a estação do protocolo?',
      'Cite quatro periféricos de entrada e quatro de saída típicos da repartição.',
      'Por que a multifuncional não é só impressora?',
      'Pendrive, OneDrive e teclado: qual é armazenamento e qual é entrada?',
    ],
    recallAnswers: [
      'A RAM se apaga. O SSD mantém os arquivos salvos (ofício, planilha de frequência, PDF do protocolo).',
      'Entrada: teclado, mouse, scanner, webcam. Saída: monitor, impressora, projetor, caixas de som.',
      'Porque também digitaliza (entrada). É dispositivo misto.',
      'Pendrive e OneDrive armazenam. Teclado é entrada. Nenhum dos três é CPU.',
    ],
    commonErrors: [
      'Classificar HD como memória RAM.',
      'Chamar monitor de dispositivo de entrada.',
      'Chamar teclado de armazenamento.',
      'Dizer que pendrive é software.',
      'Tratar nuvem como periférico de entrada.',
    ],
    traps: [
      'Impressora multifuncional cobrada só como “saída”: está incompleto.',
      '“Memória do computador” no enunciado pode ser RAM ou disco; leia o restante da frase (volátil? arquivo salvo?).',
      'Nuvem é armazenamento remoto, não periférico de entrada.',
      'Webcam da reunião no Meet cobrada como saída porque “aparece no projetor”. A webcam é entrada; o projetor é saída.',
    ],
    relatedLessonIds: ['inf-hardware-software', 'inf-arquivos-unidades', 'inf-nuvem'],
    relatedEditalItems: ['Componentes do computador e dispositivos de entrada, saída e armazenamento'],
    synthesis:
      'CPU processa, RAM segura o trabalho aberto, disco ou nuvem guarda o arquivo. Periféricos se classificam pela direção do dado: entra, sai ou os dois. No protocolo, scanner entra, impressora sai, SSD guarda o PDF.',
    glossary: [
      { term: 'UEFI', definition: 'Interface de firmware que inicia o hardware antes do sistema operacional (sucessora prática da BIOS clássica).' },
      { term: 'Periférico misto', definition: 'Dispositivo que tanto envia dados ao computador quanto recebe dados dele (multifuncional, tela de toque, headset).' },
      { term: 'Armazenamento remoto', definition: 'Guarda de arquivos fora da estação, em servidor de rede ou nuvem (OneDrive, Google Drive).' },
    ],
    masteryCriteria: [
      'Separar CPU, RAM e HD/SSD por função.',
      'Montar uma lista de pelo menos quatro entradas e quatro saídas.',
      'Classificar multifuncional e tela de toque como mistos.',
      'Explicar, com o fluxo do protocolo, por que desligar a máquina não apaga o PDF já salvo.',
    ],
    questionIds: ['inf-q04', 'inf-q05', 'inf-q06'],
  }),

  inf({
    id: 'inf-arquivos-unidades',
    chapterId: 'inf-fundamentos',
    topicId: 'inf-arquivos-unidades',
    title: 'Sistemas, tipos de arquivo e unidades da informação',
    objective:
      'Relacionar sistema operacional e aplicativos com extensões de arquivo e converter bit, byte, KB, MB, GB e TB no nível de prova.',
    importance: corte,
    estimatedMinutes: 28,
    prerequisites: ['inf-hardware-software', 'inf-componentes'],
    essencial: [
      named(
        'Sistema operacional e aplicativo',
        'O sistema operacional (Windows 11 ou Linux Ubuntu) oferece contas, pastas, permissões, impressão e a base para abrir programas. O aplicativo abre o tipo de arquivo que entende: Microsoft Word e LibreOffice Writer para texto, Microsoft Excel e LibreOffice Calc para planilha, Microsoft PowerPoint e LibreOffice Impress para slide, Google Chrome / Microsoft Edge / Mozilla Firefox para páginas e, em muitos casos, PDF. Compactadores tratam .zip e .rar. Não é o Ubuntu “virar Excel”: é o LibreOffice Calc ou o Microsoft Excel rodando sobre o sistema.',
      ),
      named(
        'Arquivo, pasta e extensão',
        'Arquivo é o conjunto de dados com nome e extensão. Pasta (diretório) organiza arquivos. A extensão sugere o tipo: .docx (Microsoft Word), .odt (LibreOffice Writer), .xlsx (Microsoft Excel), .ods (LibreOffice Calc), .pptx (Microsoft PowerPoint), .odp (LibreOffice Impress), .pdf (leitura ampla), .txt, .jpg/.png, .mp3/.mp4, .zip, .exe (executável Windows 11), .deb (pacote Ubuntu). Mudar só a extensão no nome não converte o formato; Salvar como / Exportar convertem.',
      ),
      named(
        'Unidades da informação',
        'Bit é a menor unidade (0 ou 1). Byte agrupa 8 bits e equivale, na prática de concurso, a um caractere simples. Escala usual em prova: 1 KB = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Fabricantes de disco às vezes usam 1000 decimal; a banca de nível médio quase sempre trabalha com 1024. Um ofício de 400 KB não “pesa 400 bits”.',
      ),
      named(
        'Associação arquivo → programa',
        'Duplo clique abre o programa associado. .docx tende ao Microsoft Word; .odt ao LibreOffice Writer; .xlsx ao Microsoft Excel; .ods ao LibreOffice Calc; .pptx ao Microsoft PowerPoint; .odp ao LibreOffice Impress. PDF abre no leitor ou no navegador (Chrome, Edge ou Firefox). .exe não é ofício. A associação é configuração do sistema, não lei da natureza: o mesmo .docx pode abrir no Writer com ressalvas de compatibilidade.',
      ),
    ],
    completo: [
      named(
        'Caminho no Windows 11 e no Ubuntu',
        'No Windows 11 o caminho usa letra de unidade e barra invertida: C:\\Protocolo\\2026\\oficio-014.docx. No Linux Ubuntu não há C:; o caminho é /home/servidor/protocolo/2026/oficio-014.odt. A hierarquia de pastas existe nos dois; a sintaxe não é a mesma. Tratar Windows 11 e Ubuntu como idênticos neste ponto é erro alinhado ao edital, que nomeia os dois sistemas.',
      ),
      named(
        'Extensões nativas dos seis programas de escritório',
        'Texto: Microsoft Word = .docx (legado .doc); LibreOffice Writer = .odt. Planilha: Microsoft Excel = .xlsx (legado .xls); LibreOffice Calc = .ods. Apresentação: Microsoft PowerPoint = .pptx (legado .ppt); LibreOffice Impress = .odp. Writer abre .docx e Word abre .odt com compatibilidade boa, não perfeita. Isso não unifica as extensões nativas.',
      ),
      named(
        'PDF no expediente',
        'PDF preserva a aparência do ofício para protocolo, publicação e e-mail (Outlook, Thunderbird ou Gmail). Gera-se por Exportar ou Salvar como PDF no Word, no Writer, no Excel, no Calc, no PowerPoint ou no Impress — não por renomear .docx para .pdf. PDF/A aparece como opção de preservação. O PDF é arquivo; a impressora que o coloca no papel é hardware.',
      ),
      named(
        'Compactação e anexos',
        '.zip reduz o tamanho para enviar vários ofícios ou a planilha de frequência por correio. .rar é outro formato compactado, nem sempre nativo. Compactar não criptografa sozinho de forma segura para dado pessoal. Nunca envie .exe como “planilha”. Descompactar no Windows 11 usa o Explorador; no Ubuntu, o aplicativo Arquivos ou o arquivo .zip no menu de contexto.',
      ),
      named(
        'Renomear não é converter',
        'Clique lento no nome e trocar .odt por .docx não transforma o conteúdo interno. O aplicativo adequado (Salvar como, Exportar) regrava o formato. O mesmo vale para .xlsx ↔ .ods e .pptx ↔ .odp. Questão que afirma que “basta mudar a extensão” está falsa no nível desta prova.',
      ),
      named(
        'Conta clássica de unidades',
        '8 bits = 1 byte. 1024 bytes = 1 KB. 1024 KB = 1 MB. 1024 MB = 1 GB. 1024 GB = 1 TB. Ofício de 2 MB = 2 × 1024 KB = 2048 KB. Pendrive de 8 GB comporta milhares de ofícios de 400 KB. Não some bits com bytes. Não diga que 1 byte tem 1024 bits.',
      ),
      named(
        'Tipos de dados no cotidiano da secretaria',
        'Texto (.docx/.odt), planilha de frequência (.xlsx/.ods), pauta em slides (.pptx/.odp), comprovante (.pdf), foto da visita (.jpg), áudio da reunião (.mp3) e pacote de instalação (.exe no Windows 11, .deb no Ubuntu) não se misturam. Abrir .exe “porque veio no e-mail do protocolo” é risco de segurança, não trâmite.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do programa superior',
        'O ensino superior deste edital trata formatos abertos e proprietários como linha autônoma, MIME types, metadados profundos e integração Office × LibreOffice em ambiente corporativo. No Agente Administrativo basta casar extensão com o programa nomeado (Word, Writer, Excel, Calc, PowerPoint, Impress) e fazer a conta de 8 bits = 1 byte.',
      ),
      named(
        '1024 e 1000 na dose da prova',
        'Na notação internacional, KiB = 1024 bytes e kB pode ser 1000. Concursos brasileiros de nível médio raramente usam KiB. Se a conta for 2 × 1024 = 2048, a banca está no padrão binário. Não traga a disputa IEC para uma questão que só pede “8 bits formam 1 byte”.',
      ),
    ],
    revisaoRapida: blocks(
      '8 bits = 1 byte. KB → MB → GB → TB de 1024 em 1024 na conta clássica de prova.',
      '.docx Microsoft Word, .odt LibreOffice Writer, .xlsx Microsoft Excel, .ods LibreOffice Calc, .pptx Microsoft PowerPoint, .odp LibreOffice Impress, .pdf leitura ampla.',
      'Windows 11: C:\\pasta\\arquivo. Ubuntu: /home/usuario/pasta/arquivo. Renomear extensão não converte.',
    ),
    definitions: [
      { term: 'Bit', definition: 'Menor unidade de informação, valor 0 ou 1.' },
      { term: 'Byte', definition: 'Conjunto de 8 bits.' },
      { term: 'Extensão', definition: 'Sufixo do nome do arquivo que indica o formato (.pdf, .odt, .xlsx).' },
      { term: 'Pasta', definition: 'Contêiner lógico que organiza arquivos e outras pastas.' },
      { term: 'Sistema operacional', definition: 'Programa de sistema (Windows 11 ou Linux Ubuntu) que gerencia arquivos, contas e a execução dos aplicativos.' },
    ],
    comparisons: [
      {
        title: 'Extensões dos pacotes do edital',
        leftLabel: 'Microsoft',
        rightLabel: 'LibreOffice',
        rows: [
          { label: 'Texto', left: '.docx (legado .doc) — Word', right: '.odt — Writer' },
          { label: 'Planilha', left: '.xlsx (legado .xls) — Excel', right: '.ods — Calc' },
          { label: 'Apresentação', left: '.pptx (legado .ppt) — PowerPoint', right: '.odp — Impress' },
        ],
      },
      {
        title: 'Caminho de pasta',
        leftLabel: 'Windows 11',
        rightLabel: 'Linux Ubuntu',
        rows: [
          { label: 'Raiz típica', left: 'C:\\Usuários\\servidor\\...', right: '/home/servidor/...' },
          { label: 'Separador', left: 'Barra invertida \\', right: 'Barra /' },
          { label: 'Letra de unidade', left: 'C:, D:, F: (pendrive)', right: 'Não há C:; mídias montam-se em pastas' },
        ],
      },
    ],
    examples: [
      'Planilha de frequência mensal: frequencia-outubro.xlsx (Excel) ou frequencia-outubro.ods (Calc).',
      'Ofício n. 014/2026: oficio-014.docx ou oficio-014.odt, depois oficio-014.pdf para o protocolo.',
      'Foto da visita técnica: visita.jpg (alguns megabytes); não se mede em bits na conversa da banca.',
      'Pauta da reunião: pauta.pptx no PowerPoint ou pauta.odp no Impress.',
    ],
    publicAdminExamples: [
      'A pasta 2026/Protocolo no servidor guarda PDFs dos processos; a extensão .pdf sinaliza o formato de tramitação.',
      'Enviar a planilha de frequência em .exe seria absurdo e perigoso: executável não é planilha.',
      'No guichê, compactar dezenas de ofícios em .zip reduz o anexo do e-mail institucional (Outlook, Thunderbird ou Gmail).',
    ],
    procedures: [
      'Identifique a extensão antes de escolher o programa (Word ≠ Writer, Excel ≠ Calc, PowerPoint ≠ Impress).',
      'Para trocar formato, use Salvar como ou Exportar, não o clique lento no nome só para escrever outra extensão.',
      'Na conta de unidades, grave 8 bits = 1 byte e a escada 1024.',
      'Leia se o caminho é C:\\ (Windows 11) ou /home (Ubuntu) antes de marcar a alternativa.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — extensão do ofício',
        setup: 'O modelo de ofício da Secretaria de Administração foi gravado no formato nativo do LibreOffice Writer. Pede-se a extensão padrão.',
        steps: [
          'Writer nativo é .odt, não .docx (esse é o Microsoft Word).',
          '.ods é Calc, .odp é Impress, .pdf é exportação, não o nativo da edição.',
          'Compatibilidade (Writer abrir .docx) não muda o nativo.',
        ],
        result: 'Extensão esperada: .odt.',
      },
      {
        title: 'Exemplo resolvido 2 — 8 bits e o ofício de 2 MB',
        setup: 'O enunciado pede quantos KB tem um arquivo de 2 MB, no padrão clássico de prova, e tenta distrair com “2 mil bits”.',
        steps: [
          '1 MB = 1024 KB, portanto 2 MB = 2048 KB.',
          'Bit ≠ byte: 8 bits = 1 byte. 2 MB não são 2 mil bits.',
          'Se pedir a menor unidade, a resposta é bit, não byte.',
        ],
        result: '2 MB = 2048 KB. Bits não substituem bytes nessa conta.',
      },
      {
        title: 'Exercício guiado — renomear .docx para .pdf',
        setup: 'O agente, no Windows 11, altera no Explorador o nome oficio.docx para oficio.pdf e envia ao protocolo. O arquivo não abre como PDF.',
        steps: [
          'Só o sufixo mudou; o conteúdo interno continua no formato do Word.',
          'Conversão verdadeira: Arquivo > Salvar como / Exportar > PDF no Word ou no Writer.',
          'O mesmo erro existe no Ubuntu com .odt → .pdf só no nome.',
        ],
        result: 'Renomear não converte. PDF de tramitação sai por exportação.',
      },
    ],
    recallPrompts: [
      'Recite 8 bits = 1 byte e a escada KB, MB, GB, TB.',
      'Qual a extensão nativa de Word, Writer, Excel, Calc, PowerPoint e Impress?',
      'Como diferem C:\\Protocolo e /home/servidor/protocolo?',
      'Por que trocar .xlsx por .ods só no nome não converte a planilha de frequência?',
    ],
    recallAnswers: [
      '8 bits = 1 byte; 1024 bytes = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB; 1024 GB = 1 TB.',
      '.docx Word, .odt Writer, .xlsx Excel, .ods Calc, .pptx PowerPoint, .odp Impress.',
      'O primeiro é Windows 11 (letra de unidade e \\). O segundo é Ubuntu (sem C:, barra /).',
      'A extensão no nome não regrava o formato interno. É preciso Salvar como ou Exportar no Excel ou no Calc.',
    ],
    commonErrors: [
      'Achar que .odt abre só no Word.',
      'Dizer que 1 byte tem 1024 bits.',
      'Tratar .pdf como exclusivo do PowerPoint.',
      'Igualar caminho C:\\ ao caminho /home sem ressalva.',
      'Chamar .xlsx de extensão do Writer.',
    ],
    traps: [
      'Listar .xls como “extensão do Word”.',
      'Perguntar a menor unidade e colocar byte nas alternativas para pegar quem esquece o bit.',
      'Afirmar que mudar a extensão converte o arquivo.',
      'Tratar Windows 11 e Ubuntu como se usassem o mesmo C:.',
    ],
    relatedLessonIds: ['inf-windows-linux', 'inf-texto', 'inf-planilha', 'inf-apresentacao'],
    relatedEditalItems: ['Sistemas operacionais e programas aplicativos. Tipos e extensões de arquivos. Unidades de medida da informação'],
    synthesis:
      'O sistema operacional hospeda os aplicativos; a extensão aponta o tipo de arquivo; bit e byte medem informação. Windows 11 e Ubuntu organizam pastas de modos diferentes. PDF é o formato de tramitação mais comum do ofício já concluído.',
    glossary: [
      { term: 'Executável', definition: 'Arquivo de programa (.exe no Windows 11; pacotes .deb são instalação no Ubuntu, não documento de ofício).' },
      { term: 'Compactação', definition: 'Redução de tamanho para transporte ou arquivo morto (.zip).' },
      { term: 'Exportar', definition: 'Gravar o documento em outro formato (em regra PDF) sem ser apenas um novo nome de arquivo.' },
    ],
    masteryCriteria: [
      'Recitar 8 bits = 1 byte e a ordem KB, MB, GB, TB.',
      'Casar cada programa do edital com sua extensão padrão.',
      'Diferenciar caminho de pasta no Windows 11 e no Ubuntu.',
      'Explicar por que renomear não converte ofício nem planilha de frequência.',
    ],
    questionIds: ['inf-q07', 'inf-q08', 'inf-q09'],
  }),

  inf({
    id: 'inf-windows-linux',
    chapterId: 'inf-so',
    topicId: 'inf-windows-linux',
    title: 'Windows 11 e Linux Ubuntu',
    objective:
      'Operar área de trabalho, janelas, arquivos, atalhos, contas, impressão e acessibilidade no Windows 11 e no Ubuntu, sem tratar os dois sistemas como iguais.',
    importance: corte,
    estimatedMinutes: 32,
    prerequisites: ['inf-arquivos-unidades'],
    essencial: [
      named(
        'O edital nomeia versões',
        'O programa pede sistemas operacionais Windows 11 e Linux Ubuntu. Atalhos e nomes de Windows 10 (Painel de Controle como tela principal, Live Tiles) não devem ser copiados às cegas. Ubuntu usa, nas estações típicas, o ambiente GNOME: Super (tecla Windows física) abre a Visão de Atividades, não o menu Iniciar do Windows 11. Windows 11 não é Ubuntu; Ubuntu não tem Explorador da Microsoft nem unidade C:.',
      ),
      named(
        'Windows 11 — área de trabalho, janelas, menus e barra',
        'Menu Iniciar e ícones da barra de tarefas vêm centralizados por padrão (podem ir à esquerda). Não há Live Tiles. Configurações: Win+I. Explorador de Arquivos: Win+E (com abas). Área de trabalho: Win+D. Bloquear a estação ao sair do guichê: Win+L. Executar: Win+R. Menu de usuário avançado: Win+X. Área de transferência com histórico: Win+V. Recorte: Win+Shift+S. Snap Layouts: Win+Z. Widgets: Win+W. Notificações: Win+N. Configurações rápidas (rede, som): Win+A. Desktops virtuais: Win+Ctrl+D cria, Win+Ctrl+F4 fecha, Win+Ctrl+setas troca. Gerenciador de Tarefas: Ctrl+Shift+Esc. Alt+Tab troca janelas; Alt+F4 fecha a janela.',
      ),
      named(
        'Ubuntu — a mesma tarefa, outra lógica',
        'Super abre Atividades (pesquisa de aplicativos e workspaces). Ctrl+Alt+T abre o Terminal. O gerenciador chama-se Arquivos (Nautilus), sem letra C:. A pasta do usuário é /home/nome. Instalação: App Center, pacotes .deb ou apt. Privilégio administrativo: sudo, não “Executar como administrador”. Lixeira existe, sem o nome Reciclagem. Alt+F2 executa comando. Impressão: Configurações > Impressoras (CUPS), não o painel do Windows 11. Super+L ou o menu do sistema bloqueia a sessão — não copie Win+L como se fosse atalho nativo idêntico.',
      ),
      named(
        'Atalhos que coincidem e os que não coincidem',
        'Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+A, Alt+Tab e Alt+F4 funcionam nos dois desktops típicos. Isso não unifica o mapa. Win+E, Win+I, Win+Z, Win+V e Win+L são do Windows 11. Super, Ctrl+Alt+T e sudo são do Ubuntu. A questão que nomeia um sistema invalida o atalho exclusivo do outro.',
      ),
    ],
    completo: [
      named(
        'Gerenciamento de arquivos e pastas',
        'Nos dois sistemas o agente cria, copia, move, renomeia, exclui e pesquisa. Windows 11: Explorador (Win+E); Nova pasta pelo menu ou Ctrl+Shift+N; copiar Ctrl+C e colar Ctrl+V; recortar Ctrl+X para mover; F2 renomeia; Delete vai à Lixeira; caixa de pesquisa da barra ou Win+S localiza o ofício. Ubuntu: aplicativo Arquivos; Ctrl+Shift+N também cria pasta no Nautilus; F2 renomeia; Delete vai à Lixeira; Super pesquisa aplicativos e, no próprio Arquivos, a lupa pesquisa na pasta. Mover no Ubuntu pode ser arrastar ou recortar/colar; não existe “C:\\Protocolo”.',
      ),
      named(
        'Lixeira e recuperação',
        'Arquivo excluído com Delete vai à Lixeira e pode ser restaurado (botão Restaurar / Restaurar para a pasta original). Shift+Delete no Windows 11 exclui em definitivo, sem Lixeira. No Ubuntu, Shift+Delete também pode apagar em definitivo, conforme o gerenciador. Esvaziar a Lixeira torna a recuperação trivial impossível. Isso não substitui backup da planilha de frequência.',
      ),
      named(
        'Área de transferência',
        'Ctrl+C copia, Ctrl+X recorta, Ctrl+V cola nos dois. Windows 11 oferece histórico com Win+V (é preciso ativar nas Configurações na primeira vez). Ubuntu/GNOME não replica o Win+V; a área de transferência clássica guarda o último item, salvo extensões que o edital não nomeia. Recortar um ofício e colar em outra pasta é movimentação, não duplicata.',
      ),
      named(
        'Contas de usuário e configurações básicas',
        'Windows 11: conta local ou conta Microsoft; Configurações > Contas. PIN, senha e Windows Hello são autenticação, não “liberar a máquina sem senha no guichê”. Ubuntu: usuários e grupos nas Configurações; senha da conta e senha do sudo podem coincidir na instalação típica. Trocar papel de parede, resolução e Wi-Fi: Configurações (Win+I no 11; Configurações no Ubuntu). Não use o Painel de Controle clássico como resposta de capa do Windows 11.',
      ),
      named(
        'Instalação e remoção de aplicativos',
        'Windows 11: Microsoft Store, instalador .exe/.msi ou Configurações > Aplicativos para remover. “Executar como administrador” e UAC pedem confirmação. Ubuntu: App Center / Central de Aplicativos, pacote .deb ou apt (sudo apt install / remove). Instalar Microsoft Word no Ubuntu não é o cenário padrão desta prova; o escritório livre ali é LibreOffice Writer, Calc e Impress. Instalar o que a TI não autorizou viola o expediente, nos dois sistemas.',
      ),
      named(
        'Impressão do ofício',
        'Windows 11: Configurações > Bluetooth e dispositivos > Impressoras e scanners, ou Ctrl+P no aplicativo (Word, Writer, Excel, Calc). Ubuntu: Configurações > Impressoras e Ctrl+P nos mesmos aplicativos quando instalados. A fila, o tamanho A4 e a paisagem da planilha de frequência configuram-se no diálogo de impressão do programa, não “no cabo”. Os dois imprimem; o painel não é o mesmo aplicativo.',
      ),
      named(
        'Acessibilidade no atendimento',
        'Windows 11: Configurações > Acessibilidade — lupa (Win++), Narrador, alto contraste, teclado virtual. Ubuntu: Configurações > Acessibilidade — lupa, leitor de tela Orca, alto contraste, teclado na tela. Percursos distintos, mesmo objetivo: o servidor com deficiência visual ou motora atende no guichê. Não afirme que o Narrador do Windows 11 se chama Orca, nem o contrário.',
      ),
      named(
        'Pesquisa de arquivo do protocolo',
        'Windows 11: caixa ao lado do Iniciar, Win+S, ou busca no Explorador (a lupa da janela). Ubuntu: Super e o nome do aplicativo; no Nautilus, a busca da pasta corrente. Nomeie o sistema antes de marcar o atalho. Pesquisa do Windows 11 não abre o Terminal do Ubuntu.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do cargo de TI nem do Windows 10',
        'Administração de domínio, PowerShell avançado, política de grupo, kernel, systemd e permissões chmod 777 como rotina não são o programa de Agente Administrativo. Cortana como centro, Live Tiles e a Central de ações no formato do Windows 10 não descrevem o Windows 11. Win+A no 11 abre Configurações rápidas. Responda Windows 11 com o 11; Ubuntu com o Ubuntu.',
      ),
      named(
        'Terminal no Ubuntu só na dose média',
        'ls lista, cd muda pasta, mkdir cria diretório, cp copia, mv move, rm apaga. Isso basta. Não transforme a prova em curso de redes ou de shell script. sudo não é o UAC do Windows 11 com outro nome: é outro mecanismo, outro sistema.',
      ),
    ],
    revisaoRapida: blocks(
      'Windows 11: Win+E explorador, Win+I configurações, Win+D área de trabalho, Win+L bloquear, Win+Z snap, Win+V área de transferência, F2 renomeia, Delete lixeira.',
      'Ubuntu: Super = Atividades; Ctrl+Alt+T = terminal; /home/usuario; sudo; Arquivos (Nautilus); sem C:.',
      'Ctrl+C/V e Alt+Tab se parecem; menu, caminho, instalação, impressão e acessibilidade não são iguais.',
    ),
    definitions: [
      { term: 'Área de trabalho', definition: 'Tela base com ícones, painel/barra e fundo, a partir da qual se abrem janelas.' },
      { term: 'Explorador de Arquivos', definition: 'Aplicativo do Windows 11 para pastas e arquivos (Win+E).' },
      { term: 'Arquivos (Nautilus)', definition: 'Gerenciador de arquivos padrão do Ubuntu GNOME.' },
      { term: 'Desktop virtual / workspace', definition: 'Área de trabalho extra para organizar janelas; existe nos dois sistemas com atalhos diferentes.' },
      { term: 'Lixeira', definition: 'Pasta de exclusão reversível, nos dois sistemas, até ser esvaziada ou até Shift+Delete.' },
    ],
    comparisons: [
      {
        title: 'Windows 11 versus Ubuntu (não são o mesmo sistema)',
        leftLabel: 'Windows 11',
        rightLabel: 'Linux Ubuntu (GNOME)',
        rows: [
          { label: 'Menu / visão geral', left: 'Iniciar (tecla Win)', right: 'Atividades (Super)' },
          { label: 'Configurações', left: 'Win+I', right: 'Configurações do sistema' },
          { label: 'Arquivos', left: 'Explorador, C:\\Usuários\\...', right: 'Arquivos, /home/usuario/...' },
          { label: 'Terminal', left: 'Win+X ou wt / cmd / PowerShell', right: 'Ctrl+Alt+T' },
          { label: 'Instalação', left: 'Microsoft Store ou .exe/.msi', right: 'App Center, apt, .deb' },
          { label: 'Admin', left: 'Executar como administrador / UAC', right: 'sudo' },
          { label: 'Histórico da área de transferência', left: 'Win+V', right: 'Não há o mesmo Win+V nativo' },
          { label: 'Bloquear', left: 'Win+L', right: 'Super+L / menu do sistema' },
        ],
      },
    ],
    examples: [
      'Windows 11: Win+E e criar a pasta Protocolo\\2026 na unidade C: ou no OneDrive (Ctrl+Shift+N).',
      'Ubuntu: Super, digitar “Arquivos”, ir a /home/servidor/protocolo/2026 e criar a pasta do ano.',
      'Os dois imprimem o ofício (Ctrl+P), mas o diálogo de impressora não é o mesmo aplicativo.',
      'F2 renomeia o PDF do protocolo nos dois gerenciadores típicos; Shift+Delete apaga sem Lixeira no Windows 11.',
    ],
    publicAdminExamples: [
      'Estação do protocolo em Windows 11: o agente bloqueia com Win+L ao sair para o atendimento no balcão.',
      'Laboratório com Ubuntu: o cotidiano é o aplicativo Arquivos e o LibreOffice Writer; o terminal (Ctrl+Alt+T) não é obrigatório para redigir o ofício.',
      'Planilha de frequência em \\\\arquivo\\frequencia mapeada como F: no Windows 11; no Ubuntu o mesmo SMB monta-se em pasta, sem F:.',
    ],
    procedures: [
      'Leia se a questão diz Windows 11 ou Ubuntu. Se disser um, não responda com o atalho exclusivo do outro.',
      'No Windows 11, prefira Configurações (Win+I) a “Painel de Controle” como resposta de capa.',
      'No Ubuntu, recorde Super, Ctrl+Alt+T, /home e a ausência de letra de unidade.',
      'Para recuperar arquivo do protocolo, olhe a Lixeira antes de dizer que “apagou para sempre”; Shift+Delete é o caminho sem Lixeira.',
      'Ao sair do guichê, bloqueie a sessão (Win+L no Windows 11).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — abrir a pasta do protocolo no Windows 11',
        setup: 'O agente precisa criar a pasta 2026 no Explorador da estação Windows 11 e depois bloquear a tela para atender no balcão.',
        steps: [
          'Win+E abre o Explorador. Ctrl+Shift+N cria a pasta. F2 renomeia se o nome vier genérico.',
          'Win+L bloqueia. Win+D só mostra a área de trabalho; Win+I abre Configurações — não substituem o bloqueio.',
          'Win+Z são layouts de janela, não “desfazer”.',
        ],
        result: 'Explorador = Win+E. Bloqueio ao sair do guichê = Win+L.',
      },
      {
        title: 'Exemplo resolvido 2 — a mesma pasta no Ubuntu',
        setup: 'A questão descreve a estação Linux Ubuntu e oferece, como gabarito, “abrir C:\\Protocolo no Explorador de Arquivos com Win+E”.',
        steps: [
          'Ubuntu não tem C: nem o Explorador da Microsoft.',
          'Super abre Atividades; o gerenciador é Arquivos; o caminho é /home/servidor/protocolo.',
          'Win+E é atalho exclusivo do Windows 11 neste mapa. O enunciado nomeou Ubuntu: a alternativa cai.',
        ],
        result: 'No Ubuntu, pasta do usuário em /home e aplicativo Arquivos. Windows 11 ≠ Ubuntu.',
      },
      {
        title: 'Exercício guiado — Lixeira da planilha de frequência',
        setup: 'O servidor apertou Delete sobre frequencia-outubro.xlsx no Windows 11 e acha que o mês se perdeu.',
        steps: [
          'Delete envia à Lixeira. Restaurar devolve o arquivo à pasta original.',
          'Só Shift+Delete (ou Lixeira esvaziada) impede essa volta trivial.',
          'Mesmo restaurado, isso não dispensa cópia de segurança em servidor ou OneDrive.',
        ],
        result: 'Delete ≠ apagamento definitivo. Backup continua necessário.',
      },
    ],
    recallPrompts: [
      'Cite cinco atalhos Win+ do Windows 11 e o efeito de cada um.',
      'O que fazem Super e Ctrl+Alt+T no Ubuntu? Onde fica a pasta do usuário?',
      'Como criar, renomear e excluir (com Lixeira) um ofício nos dois sistemas?',
      'Por que sudo não é o mesmo que UAC?',
    ],
    recallAnswers: [
      'Win+E Explorador, Win+I Configurações, Win+D área de trabalho, Win+L bloquear, Win+Z Snap Layouts (também Win+V histórico da área de transferência).',
      'Super abre Atividades; Ctrl+Alt+T abre o Terminal; a pasta do usuário é /home/nome, sem C:.',
      'Criar: Ctrl+Shift+N. Renomear: F2. Excluir para a Lixeira: Delete. Restaurar pela Lixeira. Shift+Delete no Windows 11 apaga sem Lixeira.',
      'UAC é o controle de conta do Windows 11. sudo é o comando de privilégio do Ubuntu. Sistemas diferentes, mecanismos diferentes.',
    ],
    commonErrors: [
      'Usar atalho de Windows 10 como se fosse garantia no 11 (ex.: descrever Live Tiles).',
      'Dizer que Ubuntu tem C: e Explorador de Arquivos da Microsoft.',
      'Afirmar que sudo e UAC são o mesmo comando.',
      'Tratar GNOME Atividades como menu Iniciar idêntico.',
      'Achar que Delete apaga em definitivo, sem Lixeira.',
    ],
    traps: [
      'Win+D (mostrar área de trabalho) versus Win+E (explorador) versus Win+L (bloquear).',
      'Win+Z no Windows 11 (layouts) cobrado como se fosse “desfazer”.',
      'Questão de Ubuntu com alternativas em .exe ou C:.',
      'Win+V apresentado como atalho nativo do Ubuntu.',
    ],
    relatedLessonIds: ['inf-arquivos-unidades', 'inf-texto', 'inf-nuvem'],
    relatedEditalItems: ['Sistemas operacionais (Windows 11 e Linux Ubuntu)'],
    synthesis:
      'Windows 11 e Ubuntu cumprem o mesmo papel de sistema operacional e não compartilham o mesmo mapa de atalhos, pastas, instalação, impressão e acessibilidade. A prova que nomeia um deles espera o vocabulário daquele sistema.',
    glossary: [
      { term: 'UAC', definition: 'Controle de conta de usuário do Windows 11, que pede confirmação para tarefas administrativas.' },
      { term: 'sudo', definition: 'Comando do Ubuntu/Linux que executa uma ação com privilégio de administrador, após senha.' },
      { term: 'Snap Layouts', definition: 'Recurso do Windows 11 (Win+Z) para encaixar janelas em posições predefinidas.' },
    ],
    masteryCriteria: [
      'Citar cinco atalhos com Win+ no Windows 11 e o efeito de cada um.',
      'Citar Super, Ctrl+Alt+T, /home e sudo no Ubuntu.',
      'Explicar uma diferença de caminho de arquivo e uma de instalação de programa.',
      'Descrever criação, cópia, exclusão com Lixeira e bloqueio de tela no expediente.',
    ],
    questionIds: ['inf-q10', 'inf-q11', 'inf-q12', 'inf-q13', 'inf-q14'],
  }),

  inf({
    id: 'inf-texto',
    chapterId: 'inf-escritorio',
    topicId: 'inf-texto',
    title: 'Editores de texto: Microsoft Word e LibreOffice Writer',
    objective:
      'Redigir e formatar documentos oficiais nos dois editores, reconhecendo atalhos iguais e comandos diferentes.',
    importance: corte,
    estimatedMinutes: 30,
    prerequisites: ['inf-windows-linux'],
    essencial: [
      named(
        'Mesma tarefa, programas distintos',
        'Microsoft Word (formato padrão .docx) e LibreOffice Writer (formato padrão .odt) redigem ofício, memorando, ata e requerimento. Ambos têm estilos, tabelas, cabeçalho, rodapé, notas, mala direta, revisão e exportação em PDF. Não são o mesmo software: menus, alguns atalhos de estilo e o arquivo nativo diferem. Writer abre e grava .docx com compatibilidade boa, não perfeita (SmartArt, certos campos). Word abre .odt com a mesma ressalva.',
      ),
      named(
        'O que é igual ou quase igual',
        'Ctrl+N novo, Ctrl+O abrir, Ctrl+S salvar, Ctrl+P imprimir, Ctrl+Z desfazer, Ctrl+Y refazer, Ctrl+C/X/V, Ctrl+A selecionar tudo, Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado, Ctrl+L esquerda, Ctrl+E centro, Ctrl+R direita, Ctrl+J justificar, Ctrl+K hiperlink, Ctrl+Enter quebra de página, Shift+Enter quebra de linha, Ctrl+F localizar, Ctrl+H substituir, F7 ortografia. Esses atalhos coincidem no cotidiano em português do Brasil e caem como “comando comum”. Coincidir atalho não unifica o programa.',
      ),
      named(
        'O que é diferente (não tratar como idênticos)',
        'Título 1: Word Ctrl+Alt+1; Writer Ctrl+1. Título 2: Word Ctrl+Alt+2; Writer Ctrl+2. Título 3: Word Ctrl+Alt+3; Writer Ctrl+3. Parágrafo padrão: Writer Ctrl+0; Word estilo Normal (Ctrl+Shift+N). Painel de estilos: Writer F11; Word Ctrl+Alt+Shift+S. Navegador: Writer F5; Word tem Painel de Navegação. PDF: Writer Arquivo > Exportar como PDF (PDF/A); Word Arquivo > Salvar como / Exportar > PDF. Mala direta: Word guia Correspondências; Writer Ferramentas > Assistente de mala direta. Alterações: Word Revisão > Controlar Alterações; Writer Editar > Controlar alterações. SmartArt é do Word; Writer usa Galeria, Fontwork e desenho.',
      ),
      named(
        'O ofício oficial não nasce em branco sem estilo',
        'Abra o modelo da secretaria (.docx no Word ou .odt no Writer). Aplique Título e Corpo. Cabeçalho com brasão, rodapé com número de página, texto justificado. Exporte PDF para o protocolo. Formatar letra a letra quebra o padrão institucional e cai em prova como má prática.',
      ),
    ],
    completo: [
      named(
        'Formatação de fontes e parágrafos',
        'Fonte, tamanho, negrito/itálico/sublinhado (Ctrl+B/I/U nos dois), cor e versalete. Parágrafo: alinhamento (Ctrl+L/E/R/J), recuo, espaçamento entre linhas, espaço antes/depois, recuo da primeira linha do ofício. Marcadores e numeração para itens do despacho. No Word, guia Página Inicial; no Writer, barras Formatar / painel Propriedades. Copiar só o formato: pincel de formatação (Word: Ctrl+Shift+C / pincel; Writer: clone de formatação). Não pinte 20 páginas à mão se o estilo resolve.',
      ),
      named(
        'Página, cabeçalho, rodapé, bordas e tabelas',
        'Configurar página: A4, margens do modelo, orientação retrato no ofício (paisagem é exceção). Word: Layout > Margens / Tamanho. Writer: Formatar > Página. Cabeçalho e rodapé: brasão e numeração; Word Inserir > Cabeçalho/Rodapé; Writer Inserir > Cabeçalho e rodapé. Bordas de página ou de parágrafo no papel timbrado digital. Tabela: lista de presença, quadro de assinaturas — Inserir > Tabela nos dois. Quebra de seção (Word: Layout > Quebras; Writer: Inserir > Mais quebras) permite cabeçalho diferente na primeira folha.',
      ),
      named(
        'Imagens, formas, símbolos, estilos e temas',
        'Inserir brasão como imagem no cabeçalho (âncora no mestre/cabeçalho, não 15 vezes no corpo). Formas e linhas para destaques simples. Símbolos (ª, nº, travessão). Estilos (Normal/Corpo, Título 1) vencem formatação manual: no Writer F11; no Word a galeria da Página Inicial. Tema troca o conjunto de fontes e cores da secretaria. Writer com interface em abas continua Writer: o atalho de Título 1 segue Ctrl+1, não Ctrl+Alt+1.',
      ),
      named(
        'Localizar, substituir e ortografia',
        'Ctrl+F localiza; Ctrl+H substitui nos dois (“Secretaria da Educação” → nome atualizado em toda a circular). F7 dispara a verificação ortográfica nos dois. Idioma do texto deve ser português do Brasil, senão o corretor acusa o ofício inteiro. Não confunda revisão ortográfica com controlar alterações (minuta) nem com o histórico de versões do OneDrive/Google Drive.',
      ),
      named(
        'Impressão, PDF e compartilhamento básico',
        'Ctrl+P imprime. Área de impressão no texto é o documento todo, salvo seleção. Exportar PDF: caminho nativo no Writer; Salvar como/Exportar no Word. Compartilhar o arquivo: pasta de rede, OneDrive, Google Drive ou anexo de Outlook/Thunderbird/Gmail — sempre o PDF de tramitação para o protocolo, não o .exe. Compartilhar o .docx/.odt só com quem vai editar a minuta.',
      ),
      named(
        'Mala direta e revisão da minuta',
        'Circular a conselhos: modelo + planilha de destinatários (Excel ou Calc). Word: guia Correspondências. Writer: Assistente de mala direta. Controlar alterações: o chefe sugere, o agente aceita ou rejeita. Comentários não são o texto do ofício. F5 no Writer é o Navegador de documentos, não o modo apresentação do Impress.',
      ),
      named(
        'Quebras que a prova troca de nome',
        'Shift+Enter: quebra de linha (mesmo parágrafo). Ctrl+Enter: quebra de página. Quebra de seção: cabeçalho/margem diferentes. Confundi-las gera ofício com “página nova” no meio do vocativo ou cabeçalho repetido onde não deveria. Isso vale nos dois programas; os menus de seção diferem.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia da ementa superior',
        'Integração corporativa profunda Microsoft Office × LibreOffice, campos de formulário avançados, VBA/macros como matéria central e gestão documental eletrônica completa (e-ARQ, assinatura ICP-Brasil passo a passo) estão no recorte superior ou em outros cargos. Aqui basta redigir, formatar, estilizar e exportar PDF no Word e no Writer, sem tratá-los como o mesmo software.',
      ),
      named(
        'Interface em abas do Writer não o transforma em Word',
        'O LibreOffice pode usar menus clássicos ou interface em abas (visual próximo da faixa do Word). Título 1 continua Ctrl+1 e o nativo continua .odt. SmartArt continua recurso do Word. Não marque “são idênticos porque as abas se parecem”.',
      ),
    ],
    revisaoRapida: blocks(
      'Iguais: Ctrl+N/O/S/P/B/I/U/E/L/R/J/K, Ctrl+Enter, Ctrl+F, Ctrl+H, F7.',
      'Diferentes: Título 1 Word Ctrl+Alt+1 × Writer Ctrl+1; estilos Writer F11; PDF nativo no Writer; mala direta em menus distintos; .docx × .odt.',
      'Ofício: estilo + cabeçalho/rodapé + tabela de presença + PDF para o protocolo. Shift+Enter ≠ Ctrl+Enter.',
    ),
    definitions: [
      { term: 'Estilo', definition: 'Conjunto nomeado de fonte, tamanho, recuo e espaçamento aplicado a parágrafos ou caracteres.' },
      { term: 'Mala direta', definition: 'Mesclagem de um modelo de ofício ou circular com uma lista de destinatários.' },
      { term: 'Controlar alterações', definition: 'Registro de inserções, exclusões e formatações para aceitar ou rejeitar na revisão.' },
      { term: 'Quebra de seção', definition: 'Divisão que permite cabeçalho, rodapé ou margem diferentes em partes do mesmo ofício.' },
      { term: 'Pincel de formatação', definition: 'Ferramenta que copia o formato (não o texto) de um trecho para outro.' },
    ],
    comparisons: [
      {
        title: 'Microsoft Word versus LibreOffice Writer',
        leftLabel: 'Microsoft Word',
        rightLabel: 'LibreOffice Writer',
        rows: [
          { label: 'Arquivo nativo', left: '.docx', right: '.odt' },
          { label: 'Negrito / itálico', left: 'Ctrl+B / Ctrl+I', right: 'Ctrl+B / Ctrl+I (igual)' },
          { label: 'Título 1', left: 'Ctrl+Alt+1', right: 'Ctrl+1' },
          { label: 'Estilos (painel)', left: 'Ctrl+Alt+Shift+S', right: 'F11' },
          { label: 'Navegador', left: 'Painel de Navegação', right: 'F5' },
          { label: 'PDF', left: 'Salvar como / Exportar PDF', right: 'Exportar como PDF' },
          { label: 'Mala direta', left: 'Guia Correspondências', right: 'Ferramentas > Assistente de mala direta' },
          { label: 'Alterações', left: 'Revisão > Controlar Alterações', right: 'Editar > Controlar alterações' },
        ],
      },
    ],
    examples: [
      'Ofício com vocativo e fecho: corpo no estilo padrão, negrito só no número (Ctrl+B nos dois).',
      'Ata de reunião: Título 1 no Writer com Ctrl+1; no Word com Ctrl+Alt+1.',
      'Circular a conselhos: mala direta a partir da planilha de endereços no Excel ou no Calc.',
      'Localizar “2025” e substituir por “2026” em todo o modelo (Ctrl+H nos dois).',
    ],
    publicAdminExamples: [
      'Modelo de ofício da Secretaria de Administração em .odt no laboratório Ubuntu (Writer) e em .docx nas estações Windows 11 (Word).',
      'Lista de presença da sessão extraordinária: tabela no fim da ata, exportada em PDF para o protocolo.',
      'No guichê, o comprovante que o cidadão leva é o PDF impresso, não o .docx da minuta.',
    ],
    procedures: [
      'Abra o modelo institucional, não um documento em branco sem estilos.',
      'Aplique Título e Corpo; evite mudar fonte letra a letra.',
      'Insira cabeçalho com brasão e rodapé com numeração. Exporte PDF para tramitar.',
      'Se a questão citar Microsoft Word ou LibreOffice Writer, use o atalho daquele programa.',
      'Confira F7 (ortografia) e o idioma pt-BR antes de protocolar.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — Título 1 no ofício',
        setup: 'O enunciado pede o atalho de Título 1 no Microsoft Word. Uma alternativa traz Ctrl+1.',
        steps: [
          'Ctrl+1 é Título 1 no LibreOffice Writer, não no Word.',
          'No Word clássico, Título 1 é Ctrl+Alt+1 (Título 2 Ctrl+Alt+2, Título 3 Ctrl+Alt+3).',
          'O edital nomeia os dois programas: a questão que diz Word invalida o atalho exclusivo do Writer.',
        ],
        result: 'Word: Ctrl+Alt+1. Writer: Ctrl+1. Não são o mesmo comando.',
      },
      {
        title: 'Exemplo resolvido 2 — PDF para o protocolo',
        setup: 'O agente termina o ofício no Writer e envia ao protocolo um arquivo chamado oficio.pdf, obtido só renomeando o .odt.',
        steps: [
          'Renomear não converte. O conteúdo interno segue .odt.',
          'Caminho certo: Arquivo > Exportar como PDF (Writer) ou Salvar como/Exportar PDF (Word).',
          'O papel impresso no guichê também pode sair de Ctrl+P; o arquivo de tramitação eletrônica é o PDF exportado.',
        ],
        result: 'PDF de protocolo nasce de exportação, não de clique lento no nome.',
      },
      {
        title: 'Exercício guiado — F11',
        setup: 'Alternativa afirma: “F11 abre o painel de estilos no Microsoft Word e no LibreOffice Writer.”',
        steps: [
          'No Writer, F11 é o painel de estilos.',
          'No Word, F11 não é esse painel (atalho clássico de estilos: Ctrl+Alt+Shift+S).',
          'O “e no Word” torna a frase falsa como gabarito de única resposta.',
        ],
        result: 'F11 = estilos no Writer, não a descrição correta do Word.',
      },
    ],
    recallPrompts: [
      'Liste oito atalhos iguais no Word e no Writer.',
      'Qual o atalho de Título 1 em cada programa? E o painel de estilos?',
      'Como o ofício vira PDF de protocolo em cada editor?',
      'Shift+Enter e Ctrl+Enter fazem a mesma coisa?',
    ],
    recallAnswers: [
      'Ctrl+N, O, S, P, B, I, U, E, L, R, J, F, H, Z e F7, entre outros do cotidiano.',
      'Word: Ctrl+Alt+1 e painel Ctrl+Alt+Shift+S. Writer: Ctrl+1 e F11.',
      'Writer: Exportar como PDF. Word: Salvar como ou Exportar PDF. Não basta renomear.',
      'Não. Shift+Enter quebra linha; Ctrl+Enter quebra página.',
    ],
    commonErrors: [
      'Dizer que Ctrl+1 no Word é Título 1 (no Word clássico Título 1 é Ctrl+Alt+1).',
      'Afirmar que Writer não gera PDF.',
      'Tratar .odt e .docx como a mesma extensão.',
      'Confundir quebra de linha (Shift+Enter) com quebra de página (Ctrl+Enter).',
      'Achar que F11 é estilos no Word.',
    ],
    traps: [
      'Perguntar “atalho de Título 1” sem dizer o programa — no edital os dois existem; a questão bem feita nomeia Word ou Writer.',
      'SmartArt como se existisse no Writer.',
      'F11 no Word cobrado como “estilos” (no Word F11 é outro comando; estilos do Writer é que usam F11).',
      'F5 no Writer cobrado como “iniciar apresentação” (isso é Impress/PowerPoint; no Writer F5 é o Navegador).',
    ],
    relatedLessonIds: ['inf-planilha', 'inf-apresentacao', 'inf-arquivos-unidades'],
    relatedEditalItems: ['Editores de texto (Microsoft Word e LibreOffice Writer)'],
    synthesis:
      'Microsoft Word e LibreOffice Writer resolvem o ofício com muitos atalhos iguais (negrito, salvar, localizar, PDF via exportação), mas diferem em arquivo nativo, Título 1, painel de estilos, mala direta e revisão. A prova que nomeia um deles não aceita o atalho exclusivo do outro.',
    glossary: [
      { term: 'PDF/A', definition: 'Perfil de PDF voltado a preservação de longo prazo, opção frequente na exportação do Writer e aceita em arquivos públicos.' },
      { term: 'Seção', definition: 'Parte do documento com formatação de página própria (margem, cabeçalho, colunas).' },
      { term: 'Tema', definition: 'Conjunto de fontes e cores aplicado ao documento; não substitui o estilo de cada parágrafo.' },
    ],
    masteryCriteria: [
      'Listar oito atalhos iguais nos dois programas.',
      'Contrastar Título 1, F11, .odt/.docx e o caminho de PDF.',
      'Descrever o fluxo ofício → PDF → protocolo.',
      'Configurar cabeçalho, rodapé, tabela de presença e substituição (Ctrl+H) no modelo institucional.',
    ],
    questionIds: ['inf-q15', 'inf-q16', 'inf-q17', 'inf-q18'],
  }),

  inf({
    id: 'inf-planilha',
    chapterId: 'inf-escritorio',
    topicId: 'inf-planilha',
    title: 'Planilhas: Microsoft Excel e LibreOffice Calc',
    objective:
      'Montar planilha de frequência e cálculos oficiais com células, referências, funções básicas e gráficos no Excel e no Calc.',
    importance: corte,
    estimatedMinutes: 30,
    prerequisites: ['inf-texto'],
    essencial: [
      named(
        'Célula, fórmula e arquivo nativo',
        'Microsoft Excel (.xlsx) e LibreOffice Calc (.ods) organizam dados em linhas e colunas. Célula A1 é a interseção da coluna A com a linha 1. Fórmula começa com =. Em português do Brasil os argumentos separam-se por ponto e vírgula: =SOMA(B2:B31) e =SE(C2="F";"falta";"ok"). Os dois entendem SOMA, MÉDIA, MÁXIMO, MÍNIMO, CONT.NÚM, CONT.VALORES, SE, CONT.SE e HOJE. Não são o mesmo software: atalho de referência absoluta e arquivo nativo diferem.',
      ),
      named(
        'Referências relativa, absoluta e mista',
        'A1 relativa: ao copiar para baixo vira A2. $A$1 absoluta: não se move. $A1 trava a coluna; A$1 trava a linha. No Excel, com o cursor sobre a referência, F4 cicla A1 → $A$1 → A$1 → $A1. No Calc o ciclo equivalente é Shift+F4. F4 sozinho no Calc não faz o mesmo papel (historicamente abre fontes de dados). Questão que citar Excel ou Calc deve levar essa diferença.',
      ),
      named(
        'Funções básicas que o edital nomeia',
        'Soma: =SOMA(B2:B31). Média: =MÉDIA(E2:E20). Mínimo e máximo: =MÍNIMO(B2:B31) e =MÁXIMO(B2:B31). Contagem: =CONT.NÚM(B2:B31) conta números; =CONT.VALORES(A2:A31) conta células não vazias. Condicional simples: =SE(C2="F";"falta";"ok") e =CONT.SE(C2:C31;"F") para faltas. Operadores: + − * / ^ e comparação = <> > < >= <=. Texto entre aspas; datas como data de verdade, não como “01/10” digitado à toa se a coluna estiver texto.',
      ),
      named(
        'Planilha de frequência como caso-modelo',
        'Uma linha por dia ou por servidor, colunas Data, Servidor, Turno, Presença (P/F), Observação. Congelar o cabeçalho. CONT.SE das faltas. Imprimir em paisagem. Arquivo .xlsx no Excel ou .ods no Calc — nunca .exe. Dado pessoal (CPF) nessa planilha pede cuidado de compartilhamento (aula de nuvem e de segurança).',
      ),
    ],
    completo: [
      named(
        'Pasta de trabalho, planilhas e tipos de dados',
        'O arquivo é a pasta de trabalho (workbook). Dentro dela há abas (planilhas): “Outubro”, “Novembro”, “Resumo”. Células aceitam número, texto, data/hora, percentual, moeda e lógico (VERDADEIRO/FALSO). Número alinhado à direita e texto à esquerda é pista visual, não regra absoluta. Apóstrofo inicial força texto (“00123” de processo). Excel e Calc tratam isso de modo semelhante; o arquivo nativo continua .xlsx × .ods.',
      ),
      named(
        'Fórmulas, operadores e cópia',
        'Tudo que calcula começa com =. Ordem: parênteses, potência, multiplicação/divisão, soma/subtração. Alça de preenchimento copia a fórmula dos 31 dias. Referência de outra aba: =Resumo!B2 (Excel e Calc). Erro #DIV/0! é divisão por zero; #N/D busca sem achado; ###### coluna estreita. Não some o que está texto (“13” com espaço).',
      ),
      named(
        'Classificação, filtro e formatação condicional',
        'Classificar A→Z a lista de servidores: Dados > Classificar nos dois. Filtro: Excel Ctrl+Shift+L ou Dados > Filtro; Calc Dados > Filtro automático — setas no cabeçalho para ver só “F”. Formatação condicional pinta de vermelho quem passou de X faltas (Excel Início > Formatação condicional; Calc Formatar > Condicional). Pintar não é SOMA: o total continua na função.',
      ),
      named(
        'Gráficos básicos',
        'Gráfico de colunas: faltas por setor. Gráfico de pizza: proporção de presentes. Inserir > Gráfico nos dois, com seleções diferentes de assistente. O gráfico é objeto da planilha; não substitui a tabela. Atualizar o dado deve atualizar o gráfico se a série estiver ligada ao intervalo.',
      ),
      named(
        'Congelar, página e impressão',
        'Congelar painéis: Excel Exibir > Congelar painéis; Calc Exibir > Congelar linhas e colunas. Área de impressão evita 20 colunas vazias. Paisagem, cabeçalho “Frequência — outubro/2026”, repetir linha de título em cada folha (Excel: Layout da página > Imprimir títulos; Calc: Formatar > Intervalo de impressão / Linhas a repetir). Ctrl+P. Exportar PDF se a frequência for juntar ao processo.',
      ),
      named(
        'PROCV na dose média e o que cada um não é',
        'PROCV(valor;intervalo;índice;FALSO) busca exata na primeira coluna. Útil para matrícula → nome na folha. Excel não é Access (.accdb). Calc não é Writer. Tabela dinâmica existe nos dois (Inserir > Tabela dinâmica) e está no limite da prova média: saiba que resume listas, não a construa do zero na prova. Macros/VBA não são o núcleo deste cargo.',
      ),
      named(
        'Ponto e vírgula do pt-BR',
        'No Excel e no Calc em português, =SE(A1>10;"sim";"não") usa ; entre argumentos. Vírgula é separador decimal em muitos teclados BR (10,5). Copiar fórmula de tutorial em inglês com vírgula de argumentos quebra a fórmula. Essa regra vale nos dois programas quando o idioma da interface é pt-BR.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do Excel “profissional” nem do cargo superior',
        'PROCX/XLOOKUP, Power Query, Power Pivot, VBA, dashboards e modelo de dados não são a ementa do Agente Administrativo. O ensino superior deste edital também aprofunda integração Office × LibreOffice e qualidade de dados em banco. Aqui bastam SOMA, MÉDIA, MÍNIMO, MÁXIMO, contagem, SE, referências $ e o gráfico simples, distinguindo Excel de Calc.',
      ),
      named(
        'PROCV e seus limites',
        'A busca precisa estar na primeira coluna do intervalo. Último argumento FALSO ou 0 = exata; VERDADEIRO = aproximada e exige lista ordenada — pegadinha clássica. PROCX pode não existir no Calc da estação. Se a questão de nível médio der SOMA e SE, não fuja para função que o enunciado não citou.',
      ),
    ],
    revisaoRapida: blocks(
      '=SOMA =MÉDIA =MÍNIMO =MÁXIMO =CONT.NÚM =SE =CONT.SE. Argumentos no pt-BR com ponto e vírgula.',
      'Excel: F4 cicla $. Calc: Shift+F4 cicla $. Arquivos .xlsx × .ods.',
      'Frequência: um dia por linha, CONT.SE de faltas, congelar cabeçalho, filtrar “F”, gráfico de colunas, imprimir em paisagem.',
    ),
    definitions: [
      { term: 'Célula', definition: 'Interseção de coluna e linha, identificada por endereço (B12).' },
      { term: 'Fórmula', definition: 'Expressão iniciada por = que calcula a partir de valores e referências.' },
      { term: 'Referência absoluta', definition: 'Endereço com $ que não se ajusta ao copiar a fórmula ($A$1).' },
      { term: 'Pasta de trabalho', definition: 'Arquivo de planilha (.xlsx no Excel, .ods no Calc) que contém uma ou mais abas.' },
      { term: 'Formatação condicional', definition: 'Regra que muda a cor ou o destaque da célula conforme o valor (ex.: faltas acima da meta).' },
    ],
    comparisons: [
      {
        title: 'Microsoft Excel versus LibreOffice Calc',
        leftLabel: 'Microsoft Excel',
        rightLabel: 'LibreOffice Calc',
        rows: [
          { label: 'Arquivo nativo', left: '.xlsx', right: '.ods' },
          { label: 'Travar referência', left: 'F4 na fórmula', right: 'Shift+F4 na fórmula' },
          { label: 'Filtro', left: 'Ctrl+Shift+L / Dados > Filtro', right: 'Dados > Filtro automático' },
          { label: 'Congelar', left: 'Exibir > Congelar painéis', right: 'Exibir > Congelar linhas e colunas' },
          { label: 'Condicional', left: 'Início > Formatação condicional', right: 'Formatar > Condicional' },
          { label: 'Funções básicas', left: 'SOMA, MÉDIA, SE, CONT.SE…', right: 'As mesmas no pt-BR, outro arquivo' },
        ],
      },
    ],
    examples: [
      '=SOMA(B2:B6) soma diárias de uma viagem a serviço.',
      '=SE(B2>=15;"plantão extra";"normal") em escala fictícia de horas.',
      '=CONT.SE(C2:C31;"F") total de faltas da lotação no mês.',
      '=MÉDIA(E2:E20) e =MÁXIMO(E2:E20) nas horas-extra do setor.',
    ],
    publicAdminExamples: [
      'Planilha de frequência mensal da Secretaria de Administração: colunas Data, Servidor, Turno, Presença (P/F), Observação, com CONT.SE das faltas.',
      'No guichê de pessoal, filtrar só quem está “F” antes de encaminhar o atestado ao RH.',
      'Ofício que pede o resumo do mês: imprimir em paisagem a aba Resumo e anexar PDF ao processo.',
    ],
    procedures: [
      'Trave o cabeçalho (congelar) antes de descer os 31 dias.',
      'Escreva a fórmula na primeira linha de dados e copie a alça.',
      'Use $ na célula da meta de faltas para não “escorregar” ao copiar. No Excel, F4; no Calc, Shift+F4.',
      'Filtre, classifique e, se a prova pedir, aplique formatação condicional — isso não substitui SOMA.',
      'Defina área de impressão e exporte PDF se a frequência for juntar ao processo.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — faltas do mês',
        setup: 'Coluna C de C2 a C31 tem P ou F. Pede-se o total de faltas na célula C32.',
        steps: [
          'Função de contagem condicional: =CONT.SE(C2:C31;"F").',
          'Argumentos em pt-BR com ponto e vírgula, critério entre aspas.',
          '=SOMA(C2:C31) falharia porque P e F são texto. =CONT.NÚM ignora texto.',
        ],
        result: 'C32 =CONT.SE(C2:C31;"F") conta as faltas. Excel e Calc aceitam essa fórmula; o arquivo nativo é que muda.',
      },
      {
        title: 'Exemplo resolvido 2 — travar a meta no Excel e no Calc',
        setup: 'A meta de faltas está em $G$1. A fórmula em D2 compara C2 com a meta e deve ser copiada até D31.',
        steps: [
          'Referência da meta precisa ser absoluta: $G$1.',
          'No Microsoft Excel, F4 cicla o $. No LibreOffice Calc, Shift+F4.',
          'Se copiar com G1 relativo, a linha 3 olharia G2 e a conta quebra.',
        ],
        result: 'Excel: F4. Calc: Shift+F4. Copiar sem $ é o erro clássico da frequência.',
      },
      {
        title: 'Exercício guiado — ponto e vírgula',
        setup: 'O agente cola =SE(A1>10,"sim","não") e a célula mostra erro no Excel pt-BR da prefeitura.',
        steps: [
          'No pt-BR, argumentos separam-se por ; e a vírgula costuma ser decimal.',
          'Forma correta: =SE(A1>10;"sim";"não").',
          'O mesmo vale no Calc em português. A fórmula em inglês não é “mais oficial”.',
        ],
        result: 'Ponto e vírgula nos argumentos; aspas no texto. Excel ≠ tutorial americano colado cru.',
      },
    ],
    recallPrompts: [
      'Escreva SOMA, MÉDIA, MÍNIMO, MÁXIMO, CONT.NÚM e SE com ponto e vírgula.',
      'Como travar $ no Excel e no Calc?',
      'O que distinguem .xlsx e .ods?',
      'Na planilha de frequência, como contar faltas, congelar o cabeçalho e imprimir?',
    ],
    recallAnswers: [
      '=SOMA(B2:B31); =MÉDIA(B2:B31); =MÍNIMO(B2:B31); =MÁXIMO(B2:B31); =CONT.NÚM(B2:B31); =SE(C2="F";"falta";"ok").',
      'Excel: F4 na referência. Calc: Shift+F4. Relativa A1; absoluta $A$1.',
      '.xlsx é o nativo do Microsoft Excel; .ods é o nativo do LibreOffice Calc.',
      'CONT.SE das células "F"; Exibir > congelar; paisagem, títulos repetidos, área de impressão, PDF se for ao processo.',
    ],
    commonErrors: [
      'Usar vírgula no lugar de ponto e vírgula nos argumentos em Excel/Calc pt-BR.',
      'Achar que F4 no Calc trava a referência.',
      'Copiar valor colado como texto (“13”) e estranhar a SOMA vazia.',
      'Chamar .ods de extensão do Excel.',
      'Somar a coluna P/F em vez de usar CONT.SE.',
    ],
    traps: [
      'SOMA de intervalo com texto misturado: textos são ignorados, o que mascara erro de digitação.',
      'PROCV com último argumento verdadeiro (aproximado) em lista desordenada.',
      'Perguntar atalho de $ sem nomear Excel ou Calc.',
      'Tratar Microsoft Excel e LibreOffice Calc como “o mesmo Excel livre”.',
    ],
    relatedLessonIds: ['inf-texto', 'inf-apresentacao', 'inf-arquivos-unidades'],
    relatedEditalItems: ['Planilhas eletrônicas (Microsoft Excel e LibreOffice Calc)'],
    synthesis:
      'Microsoft Excel e LibreOffice Calc calculam com =, SOMA, MÉDIA, MÍNIMO, MÁXIMO, contagem e SE, e diferem em .xlsx/.ods e no atalho da referência absoluta (F4 × Shift+F4). A planilha de frequência é o caso do cargo: contar faltas, filtrar, congelar cabeçalho e imprimir.',
    glossary: [
      { term: 'Alça de preenchimento', definition: 'Ponto no canto da célula que copia fórmulas ou séries.' },
      { term: 'Filtro automático', definition: 'Setas no cabeçalho para exibir só as linhas que atendem a um critério (faltas, lotação).' },
      { term: 'Referência relativa', definition: 'Endereço que se ajusta ao copiar a fórmula (A1 vira A2 na linha de baixo).' },
    ],
    masteryCriteria: [
      'Escrever SOMA, MÉDIA, SE e CONT.SE com ponto e vírgula.',
      'Dizer como travar $ no Excel e no Calc.',
      'Descrever uma planilha de frequência com total de faltas.',
      'Usar filtro, formatação condicional, gráfico simples e área de impressão sem misturar Excel com Calc.',
    ],
    questionIds: ['inf-q19', 'inf-q20', 'inf-q21', 'inf-q22'],
  }),

  inf({
    id: 'inf-apresentacao',
    chapterId: 'inf-escritorio',
    topicId: 'inf-apresentacao',
    title: 'Apresentações: Microsoft PowerPoint e LibreOffice Impress',
    objective:
      'Montar slides institucionais com layout, slide mestre, transição, modo apresentador e exportação, distinguindo PowerPoint e Impress.',
    importance: corte,
    estimatedMinutes: 28,
    prerequisites: ['inf-texto'],
    essencial: [
      named(
        'Dois programas, um gênero',
        'Microsoft PowerPoint (.pptx) e LibreOffice Impress (.odp) criam slides. Ambos têm layouts (título, título+conteúdo), espaços reservados, imagens, tabela, gráfico, notas do orador, slide mestre, transições, animações, modo de apresentação e exportação PDF. Não são idênticos: Ideias de Design/Designer é do PowerPoint; o Impress trabalha com Páginas mestre de forma mais explícita no painel. F5 inicia do começo nos dois; Shift+F5 inicia do slide atual no PowerPoint e no Impress recente.',
      ),
      named(
        'Slide mestre, transição e animação',
        'O padrão da prefeitura (brasão, fonte, cores) vai no slide mestre (PowerPoint: Exibir > Slide mestre; Impress: Exibir > Mestre de slides). Transição é o efeito entre um slide e o seguinte. Animação é o efeito de um objeto dentro do slide. Trocar os dois nomes é pegadinha clássica. Excesso de cubo 3D não torna a pauta “mais oficial”.',
      ),
      named(
        'Modo apresentador e teclas do show',
        'O modo apresentador mostra o slide atual, o próximo e as notas no notebook do servidor; o projetor mostra só o slide. Durante a apresentação: Esc sai; B escurece a tela (quando o debate começa no gabinete); W pode clarear; espaço ou seta avança; número + Enter vai a um slide. Não confunda modo apresentador com folheto impresso.',
      ),
      named(
        'Arquivo nativo e reserva em PDF',
        '.pptx é PowerPoint; .odp é Impress. Levar os dois formatos não é obrigatório, mas levar PDF de reserva evita surpresa no projetor da câmara ou do laboratório Ubuntu. PowerPoint não “é” Impress porque ambos têm F5.',
      ),
    ],
    completo: [
      named(
        'Criação, layouts e temas',
        'Arquivo > Novo, escolha o layout do primeiro slide (título) e do segundo (título + conteúdo). Layout = disposição das caixas. Tema/design = cores e fontes. PowerPoint: guia Design. Impress: Propriedades / Mestre / Slide > Propriedades. Copiar slide de outro órgão pode trazer mestre alheio — padronize com o brasão de Itarema no mestre, não em 20 colagens soltas.',
      ),
      named(
        'Inserção de texto, imagens, tabelas e gráficos',
        'Clique no espaço reservado para o título da pauta. Lista com marcadores para os itens da reunião. Imagem: brasão no mestre; foto da visita no slide de conteúdo. Tabela da ordem do dia. Gráfico da planilha de frequência colado do Excel ou do Calc (colar especial / vínculo). Vídeo pesa; na reunião de gabinete, teste o arquivo local ou o link. Não desenhe todas as caixas à mão se o layout já as oferece.',
      ),
      named(
        'Transições entre slides',
        'Transição aplica-se ao slide inteiro na passagem para o próximo (aparecer, empurrar — evite giro 3D em material institucional). Duração em segundos. “Aplicar a todos” no PowerPoint (transições) e o equivalente no Impress evitam um efeito diferente em cada página. Transição não anima o título dentro do slide.',
      ),
      named(
        'Animações de objeto',
        'Animação entra, enfatiza ou sai um objeto (o tópico da pauta aparece ao clique). Ordem da animação deve seguir a fala, não o contrário. PowerPoint: guia Animações. Impress: painel Animação. Um objeto pode ter animação e o slide, transição — são camadas diferentes. Questão que troca os nomes está cobrando exatamente isso.',
      ),
      named(
        'Modos de exibição',
        'PowerPoint: Normal (edição), Classificação de slides (visão de miniatura para reordenar a pauta), Anotações, Modo de exibição de leitura, Apresentação de slides (F5). Impress: Normal, Estrutura de tópicos, Observações, Classificador de slides, Mestre, Apresentação. Reordenar a capacitação de protocolo é mais fácil no classificador do que arrastando um por um no modo Normal.',
      ),
      named(
        'Impressão e exportação',
        'Imprimir: slides inteiros, folhetos (2, 3, 6 por página — o folheto de 3 costuma deixar linha para anotação) ou páginas de anotações. PowerPoint: Arquivo > Imprimir e a lista “Configurações”. Impress: Arquivo > Imprimir com opções de folheto. Exportar PDF nos dois. Encaminhar a pauta por Outlook, Thunderbird ou Gmail em PDF; o .pptx/.odp fica com quem vai editar.',
      ),
      named(
        'Notas do orador e ensaio',
        'Notas não aparecem no projetor se o modo apresentador estiver correto. Ensaio de intervalos (PowerPoint) grava o tempo; no Impress há ensaio/apresentação cronometrada conforme a versão. Na capacitação, o servidor lê as notas, o público vê o slide limpo. Imprimir anotações é outro produto: papel para o orador, não o modo ao vivo.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do PowerPoint 365 nem da ementa superior',
        'Ideias de Design, Morph, Cameo, legendas ao vivo, integração avançada com Microsoft Teams e recursos exclusivos do Microsoft 365 não têm equivalente direto no Impress e não são o centro do Anexo IV de nível médio. Integração corporativa profunda Office × LibreOffice é linha do ensino superior deste edital. Basta não atribuir Designer, Morph ou .pptx nativo ao Impress.',
      ),
      named(
        'O que o Impress não copia do PowerPoint',
        'Mesmo com interface em abas, Impress continua .odp, Páginas mestre e F5. Fonte corporativa embutida depende de arquivo e licença. Se o enunciado disser LibreOffice Impress, responda com o vocabulário do Impress.',
      ),
    ],
    revisaoRapida: blocks(
      'F5 começa; Shift+F5 começa neste slide; Esc sai; B tela preta.',
      'Mestre = identidade visual. Transição = entre slides. Animação = no objeto. Layout = caixas; tema = cores.',
      '.pptx Microsoft PowerPoint; .odp LibreOffice Impress; PDF para o processo. Folheto ≠ modo apresentador.',
    ),
    definitions: [
      { term: 'Slide mestre', definition: 'Modelo que impõe fundo, fonte, brasão e caixas padrão a vários slides.' },
      { term: 'Transição', definition: 'Efeito visual na passagem de um slide para o seguinte.' },
      { term: 'Animação', definition: 'Efeito visual de um objeto dentro do slide (entrar, enfatizar, sair).' },
      { term: 'Modo apresentador', definition: 'Visão do orador com notas e próximo slide, sem projetar isso ao público.' },
      { term: 'Layout', definition: 'Disposição dos espaços reservados (título, conteúdo, duas colunas).' },
    ],
    comparisons: [
      {
        title: 'Microsoft PowerPoint versus LibreOffice Impress',
        leftLabel: 'Microsoft PowerPoint',
        rightLabel: 'LibreOffice Impress',
        rows: [
          { label: 'Arquivo nativo', left: '.pptx', right: '.odp' },
          { label: 'Iniciar apresentação', left: 'F5 / Shift+F5', right: 'F5 / Shift+F5 (versões recentes)' },
          { label: 'Mestre', left: 'Exibir > Slide mestre', right: 'Exibir > Mestre de slides' },
          { label: 'Design automático', left: 'Ideias de Design (365)', right: 'Não há equivalente direto' },
          { label: 'Classificador', left: 'Classificação de slides', right: 'Classificador de slides' },
        ],
      },
    ],
    examples: [
      'Pauta da reunião de gabinete: 6 slides, um tema, sem transição em cubo 3D.',
      'Capacitação de protocolo: folhetos de 3 slides por página para os servidores.',
      'Gráfico de frequência colado do Calc ou do Excel no slide 4.',
      'B no teclado quando o secretário interrompe para debater o item 3.',
    ],
    publicAdminExamples: [
      'Prestação de contas simples da secretaria: brasão no mestre, PDF anexo ao processo.',
      'Treinamento de atendimento no guichê: notas no modo apresentador, projetor só com o slide limpo.',
      'Sessão itinerante: .odp no Ubuntu do laboratório (Impress) ou .pptx no notebook Windows 11 (PowerPoint).',
    ],
    procedures: [
      'Defina o mestre (brasão, fonte) antes de criar 20 slides.',
      'Escolha layouts prontos; não desenhe caixas soltas em cada página.',
      'Separe transição (entre slides) de animação (no objeto).',
      'Teste F5 no projetor. Leve PDF de reserva. Não compartilhe a área de trabalho com o e-mail aberto.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — F5 ou Shift+F5 na reunião',
        setup: 'O servidor está no slide 7 da pauta, o projetor já está ligado, e precisa começar dali, não do título.',
        steps: [
          'F5 inicia do primeiro slide nos dois programas.',
          'Shift+F5 inicia do slide atual no PowerPoint e no Impress recente.',
          'Esc sai. B escurece se o debate começar. O modo apresentador mostra as notas só para o orador.',
        ],
        result: 'Do slide corrente: Shift+F5. Do começo: F5. PowerPoint e Impress compartilham F5, não o arquivo nativo.',
      },
      {
        title: 'Exemplo resolvido 2 — brasão em 15 slides',
        setup: 'O agente colou o brasão em cada slide da capacitação e, ao mudar a cor, precisou refazer tudo.',
        steps: [
          'Identidade visual institucional pertence ao mestre.',
          'PowerPoint: Exibir > Slide mestre. Impress: Exibir > Mestre de slides.',
          'Um brasão no mestre propaga. Colagem manual em 15 slides é o anti-padrão da prova e do expediente.',
        ],
        result: 'Brasão no mestre. Layout nas caixas. Tema nas cores. Três camadas, três nomes.',
      },
      {
        title: 'Exercício guiado — transição ou animação?',
        setup: 'A alternativa diz: “A animação ‘empurrar’ aplica-se na passagem de um slide para o outro no PowerPoint e no Impress.”',
        steps: [
          'Passagem entre slides é transição, não animação.',
          'Animação atua no objeto (título que entra ao clique).',
          'O nome trocado torna a alternativa falsa, mesmo que “empurrar” exista como efeito.',
        ],
        result: 'Entre slides = transição. No objeto = animação. Vale para PowerPoint e para Impress.',
      },
    ],
    recallPrompts: [
      'O que distinguem F5, Shift+F5, transição, animação e mestre?',
      'Qual a extensão nativa do PowerPoint e a do Impress?',
      'Por que o brasão vai no mestre e não em cada slide?',
      'Folheto impresso é o mesmo que modo apresentador?',
    ],
    recallAnswers: [
      'F5 começa do início; Shift+F5 do slide atual; transição é entre slides; animação é no objeto; mestre impõe brasão e fonte.',
      '.pptx Microsoft PowerPoint; .odp LibreOffice Impress.',
      'Porque uma alteração no mestre se propaga a todos os slides que o usam, padrão da apresentação institucional.',
      'Não. Folheto é papel com vários slides. Modo apresentador é a tela ao vivo do orador, com notas, sem projetá-las.',
    ],
    commonErrors: [
      'Chamar transição de animação.',
      'Colocar o brasão manualmente em 15 slides em vez do mestre.',
      'Dizer que Impress não inicia com F5.',
      'Salvar apresentação oficial só em .exe.',
      'Atribuir Ideias de Design ao Impress.',
    ],
    traps: [
      'Shift+F5 versus F5.',
      'Extensão .odp atribuída ao PowerPoint.',
      'Modo apresentador confundido com “anotações impressas”.',
      'Layout cobrado como se fosse tema (caixas versus cores).',
    ],
    relatedLessonIds: ['inf-texto', 'inf-planilha', 'inf-nuvem'],
    relatedEditalItems: ['Programas de apresentação (Microsoft PowerPoint e LibreOffice Impress)'],
    synthesis:
      'Microsoft PowerPoint e LibreOffice Impress apresentam pauta e capacitação com F5, mestre e PDF, mas usam .pptx e .odp e não compartilham o Designer. Transição não é animação. No serviço público, o mestre carrega o brasão.',
    glossary: [
      { term: 'Espaço reservado', definition: 'Caixa do layout onde se clica para inserir título, texto ou objeto.' },
      { term: 'Folheto', definition: 'Impressão de vários slides por folha para distribuição na capacitação.' },
      { term: 'Classificador de slides', definition: 'Modo de miniatura para reordenar a sequência da apresentação.' },
    ],
    masteryCriteria: [
      'Distinguir F5, Shift+F5, mestre, transição e animação.',
      'Casar .pptx e .odp com o programa certo.',
      'Explicar por que o brasão vai no mestre da apresentação institucional.',
      'Descrever layouts, temas, modo apresentador, folheto e exportação PDF nos dois programas.',
    ],
    questionIds: ['inf-q23', 'inf-q24', 'inf-q25'],
  }),

  inf({
    id: 'inf-internet',
    chapterId: 'inf-rede',
    topicId: 'inf-internet',
    title: 'Internet e navegadores: Chrome, Edge e Firefox',
    objective:
      'Distinguir internet, intranet e WWW, usar Chrome, Edge e Firefox com segurança e reconhecer HTTPS.',
    importance: corte,
    estimatedMinutes: 28,
    prerequisites: ['inf-windows-linux'],
    essencial: [
      named(
        'Internet, intranet e WWW',
        'Internet é a rede mundial de redes. Intranet é a rede interna da prefeitura (sistema de protocolo, pasta de frequência) acessível aos servidores autorizados, não ao público em geral. WWW (World Wide Web) é o serviço de páginas e hiperlinks sobre a internet, usando HTTP/HTTPS. E-mail e videoconferência (Teams, Meet, Zoom) trafegam na internet e não são “a WWW”. URL: https://www.itarema.ce.gov.br/protocolo.',
      ),
      named(
        'Os três navegadores do edital não são o mesmo programa',
        'Google Chrome: proprietário, motor Chromium. Microsoft Edge: proprietário, também Chromium na versão atual — atalhos próximos do Chrome, nome e recursos próprios (InPrivate, Coleções). Mozilla Firefox: software livre, motor Gecko, janela privativa com Ctrl+Shift+P, não Ctrl+Shift+N. Chrome não é Edge; Edge não é Firefox. Abrir a mesma URL nos três não unifica o navegador.',
      ),
      named(
        'Atalhos comuns e os que divergem',
        'Nos três, em Windows 11: Ctrl+T nova aba (guia), Ctrl+W fecha, Ctrl+Shift+T reabre a última, Ctrl+L ou F6 endereço, Ctrl+R ou F5 atualiza, Ctrl+F localizar, Ctrl+D favorito, Ctrl+H histórico, Ctrl+Shift+Del limpar dados, Ctrl+N nova janela, Ctrl+clique abre em segundo plano. Downloads: Chrome e Edge Ctrl+J; Firefox no Windows também aceita Ctrl+J e tem Ctrl+Shift+Y para a biblioteca. Privativo: Chrome Incógnito e Edge InPrivate = Ctrl+Shift+N; Firefox = Ctrl+Shift+P.',
      ),
      named(
        'HTTPS não autentica o caráter do sítio',
        'HTTP transfere a página. HTTPS é HTTP com TLS. O S cifra o caminho; não prova que o dono é a Prefeitura de Itarema. Golpista também obtém certificado. Login institucional só em HTTPS do domínio conhecido. Porta clássica: HTTP 80, HTTPS 443. O cadeado não substitui ler a URL.',
      ),
    ],
    completo: [
      named(
        'Guias (abas), favoritos e histórico',
        'Guia/aba é a página aberta na janela. Ctrl+Tab percorre abas. Favoritos (Chrome/Edge) ou marcadores (Firefox, Ctrl+Shift+O para a biblioteca) guardam o Diário Oficial, o webmail e o sistema de ponto. Histórico (Ctrl+H) lista o que foi visitado — no expediente, isso também é rastreadível pela conta da máquina. Não favorite sítio de banco “parecido” com o oficial.',
      ),
      named(
        'Downloads',
        'Ctrl+J no Chrome e no Edge abre a lista de downloads; no Firefox, Ctrl+J ou Ctrl+Shift+Y. PDF de ofício e planilha de frequência baixam para a pasta Downloads (Windows 11) ou ~/Downloads (Ubuntu). Desconfie de .exe, .js e .zip com nome “boleto-prefeitura”. O navegador baixa o arquivo; o antivírus e o bom senso decidem se abre.',
      ),
      named(
        'Cache, cookies e navegação privativa',
        'Cookie: pequeno dado do sítio (sessão do protocolo). Cache: cópia de imagens e scripts para a página abrir mais rápido. Limpar cache (Ctrl+Shift+Del) não desliga a intranet. Privativo: não grava histórico local e isola cookies da sessão; a rede da prefeitura e o servidor ainda veem o acesso. Não é anonimato nem “modo invisível para a chefia”.',
      ),
      named(
        'Mecanismos e estratégias de busca',
        'A barra de endereço pesquisa se o texto não for URL. Aspas prendem a frase (“plano diretor Itarema”). site:itarema.ce.gov.br restringe ao domínio. filetype:pdf acha o edital em PDF. Menos é mais: duas palavras certas superam um parágrafo. A busca não substitui o Diário Oficial como fonte da norma.',
      ),
      named(
        'Avaliação de fontes no expediente',
        'Antes de citar ou de clicar: (1) domínio — é .gov.br conhecido ou imitação com hífen extra? (2) HTTPS na barra, sem ignorar o nome do sítio; (3) data e órgão emissor; (4) a mesma informação no portal da transparência ou no Diário. Título chamativo na aba do Chrome, do Edge ou do Firefox não prova autoria. Página de “atualização de ponto” fora do domínio da prefeitura é fraude até prova em contrário.',
      ),
      named(
        'Extensões e perfil da estação',
        'Extensão demais aumenta risco. No guichê, instale só o que a TI autorizar, nos três navegadores. Perfil de trabalho ≠ perfil pessoal. Sincronizar favoritos da conta Google no Chrome da prefeitura pode misturar dado institucional com conta pessoal — evite.',
      ),
      named(
        'Intranet no navegador',
        'Muitos sistemas de protocolo abrem no Chrome, no Edge ou no Firefox, mas continuam intranet: o endereço pode ser interno e inacessível de casa. Estar “na web” (HTTP) não transforma a rede interna em internet pública. O munícipe no guichê não acessa a intranet só porque viu o agente usar o navegador.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia da Informática superior',
        'O ensino superior deste edital inclui extranet, protocolos básicos em profundidade, certificados digitais, operadores de pesquisa avançados como matéria extensa, desinformação/conteúdos manipulados e avaliação de autoria como bloco próprio. No Agente Administrativo bastam internet × intranet × WWW, os três navegadores nomeados, HTTPS, cookie × cache, guias, favoritos, histórico, downloads e uma avaliação sóbria de fonte.',
      ),
      named(
        'Handshake TLS e firewall de borda ficam de fora',
        'Não se exige desenhar o handshake nem montar firewall. Se a questão citar “conexão segura”, responda HTTPS/TLS e o limite (não prova honestidade). Porta 443 é cultura geral de prova, não curso de redes.',
      ),
    ],
    revisaoRapida: blocks(
      'Internet ≠ intranet ≠ WWW. HTTPS cifra o tráfego; não autentica a honestidade do dono do sítio.',
      'Ctrl+T aba, Ctrl+Shift+T reabre, Ctrl+L endereço, Ctrl+H histórico, Ctrl+D favorito. Downloads: Ctrl+J (Chrome/Edge; Firefox também).',
      'Privativo: Chrome/Edge Ctrl+Shift+N; Firefox Ctrl+Shift+P. Cookie = sessão; cache = cópia. Cadeado ≠ órgão verdadeiro.',
    ),
    definitions: [
      { term: 'URL', definition: 'Endereço do recurso na web (protocolo + servidor + caminho).' },
      { term: 'HTTPS', definition: 'HTTP com criptografia TLS entre o navegador e o servidor.' },
      { term: 'Cookie', definition: 'Pequeno dado guardado pelo navegador a pedido do sítio, em regra para sessão ou preferência.' },
      { term: 'Cache', definition: 'Cópia local de conteúdos da página para reabrir mais rápido.' },
      { term: 'Intranet', definition: 'Rede interna da organização, de acesso restrito aos autorizados.' },
    ],
    comparisons: [
      {
        title: 'Google Chrome, Microsoft Edge e Mozilla Firefox',
        leftLabel: 'Chrome e Edge (Chromium)',
        rightLabel: 'Mozilla Firefox (Gecko)',
        rows: [
          { label: 'Licença típica', left: 'Proprietários', right: 'Software livre' },
          { label: 'Privativo (Windows 11)', left: 'Ctrl+Shift+N (Incógnito / InPrivate)', right: 'Ctrl+Shift+P (janela privativa)' },
          { label: 'Downloads', left: 'Ctrl+J', right: 'Ctrl+J ou Ctrl+Shift+Y' },
          { label: 'Favoritos', left: 'Favoritos (Ctrl+D; Ctrl+Shift+O no Chrome gerencia)', right: 'Marcadores (Ctrl+D; biblioteca Ctrl+Shift+O)' },
        ],
      },
    ],
    examples: [
      'Abrir o portal da transparência em HTTPS e favoritar com Ctrl+D no Chrome, no Edge ou no Firefox.',
      'Reabrir a aba do sistema de protocolo fechada por engano: Ctrl+Shift+T.',
      'Consultar o Diário Oficial no Firefox do Ubuntu e no Edge do Windows 11: a URL é a mesma; o navegador não.',
      'Busca site:itarema.ce.gov.br filetype:pdf para achar o edital no domínio oficial.',
    ],
    publicAdminExamples: [
      'Intranet: sistema de protocolo só na rede interna, mesmo aberto no Google Chrome.',
      'Site institucional em HTTPS: WWW sobre a internet, visível ao cidadão.',
      'No guichê, nunca pedir senha por página só com HTTP ou por link encurtado duvidoso.',
    ],
    procedures: [
      'Leia a URL e o HTTPS antes de digitar senha institucional, em qualquer um dos três navegadores.',
      'Use o navegador homologado pela TI quando houver norma interna.',
      'Limpe cache só se a página institucional estiver “quebrada” após atualização, não por hábito diário.',
      'Antes de crer na notícia do município, confronte o domínio .gov.br e a data no portal oficial.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — privativo no Firefox',
        setup: 'A questão pede o atalho de janela privativa no Mozilla Firefox em Windows 11. As alternativas incluem Ctrl+Shift+N.',
        steps: [
          'Ctrl+Shift+N é Incógnito do Google Chrome e InPrivate do Microsoft Edge.',
          'Firefox usa Ctrl+Shift+P.',
          'O edital nomeia os três: o atalho do Chromium não vale como gabarito de Firefox.',
        ],
        result: 'Firefox: Ctrl+Shift+P. Chrome e Edge: Ctrl+Shift+N. Não são o mesmo navegador.',
      },
      {
        title: 'Exemplo resolvido 2 — HTTPS no login do protocolo',
        setup: 'Página de login sem cadeado, URL http:// (sem S), visual idêntico ao sistema da prefeitura. O agente está no Microsoft Edge.',
        steps: [
          'HTTP não cifra a senha no trânsito.',
          'O visual copiado não prova o domínio. Conferir a barra de endereço.',
          'HTTPS em sítio falso ainda seria phishing: o S não autentica o órgão.',
        ],
        result: 'Não digitar senha. Conferir domínio oficial. HTTPS é necessário e não suficiente.',
      },
      {
        title: 'Exercício guiado — intranet ou internet?',
        setup: 'Alternativa: “O sistema de protocolo aberto no Google Chrome é a World Wide Web mundial, portanto qualquer munícipe acessa de casa.”',
        steps: [
          'Chrome é só o programa cliente. A rede pode ser intranet.',
          'WWW são páginas; intranet pode usar páginas sem ser pública.',
          'Acesso de casa depende de VPN/publicação; não se presume.',
        ],
        result: 'Navegador ≠ internet pública. Intranet continua interna.',
      },
    ],
    recallPrompts: [
      'Defina internet, intranet e WWW sem trocar os três.',
      'Qual o atalho de privativo no Chrome, no Edge e no Firefox?',
      'O que HTTPS garante e o que não garante?',
      'Cookie, cache e histórico: o que cada um guarda?',
    ],
    recallAnswers: [
      'Internet: rede mundial. Intranet: rede interna da prefeitura. WWW: serviço de páginas e hiperlinks sobre a internet.',
      'Chrome e Edge: Ctrl+Shift+N. Firefox: Ctrl+Shift+P.',
      'Garante cifra do tráfego entre navegador e servidor. Não garante que o sítio seja honesto ou da prefeitura.',
      'Cookie: dado de sessão/preferência. Cache: cópia de arquivos da página. Histórico: lista de URLs visitadas (Ctrl+H).',
    ],
    commonErrors: [
      'Dizer que intranet é a WWW mundial.',
      'Achar que HTTPS impede phishing.',
      'Usar Ctrl+Shift+N no Firefox como privativo.',
      'Confundir cookie com vírus.',
      'Tratar Google Chrome, Microsoft Edge e Mozilla Firefox como um único navegador.',
    ],
    traps: [
      'WWW como sinônimo absoluto de internet.',
      'Cadeado = sítio da prefeitura verdadeiro.',
      'Navegação privativa = IP invisível.',
      'Ctrl+J cobrado como “histórico” (histórico é Ctrl+H; downloads são Ctrl+J).',
    ],
    relatedLessonIds: ['inf-email', 'inf-nuvem', 'inf-seguranca'],
    relatedEditalItems: ['Internet e navegadores (Google Chrome, Microsoft Edge e Mozilla Firefox)'],
    synthesis:
      'Internet é a rede; intranet é a rede interna; WWW são as páginas. Google Chrome, Microsoft Edge e Mozilla Firefox compartilham boa parte dos atalhos e diferem no privativo (N versus P), no motor e na licença. HTTPS protege o caminho, não o caráter do sítio.',
    glossary: [
      { term: 'HTTP', definition: 'Protocolo de transferência de páginas da web, sem cifra nativa.' },
      { term: 'Favorito / marcador', definition: 'Atalho gravado no navegador para reabrir uma URL.' },
      { term: 'Guia / aba', definition: 'Página aberta dentro da janela do Chrome, do Edge ou do Firefox (Ctrl+T cria).' },
    ],
    masteryCriteria: [
      'Definir internet, intranet e WWW sem trocar os três.',
      'Citar os atalhos de aba, histórico e privativo nos três navegadores.',
      'Explicar o que HTTPS garante e o que não garante.',
      'Distinguir cookie, cache, histórico e download, e avaliar domínio/fonte antes de clicar.',
    ],
    questionIds: ['inf-q26', 'inf-q27', 'inf-q28', 'inf-q29'],
  }),

  inf({
    id: 'inf-email',
    chapterId: 'inf-rede',
    topicId: 'inf-email',
    title: 'Correio eletrônico: Outlook, Thunderbird e Gmail',
    objective:
      'Enviar, organizar e reconhecer riscos no correio institucional, com ênfase em Para, CC, CCO e anexos.',
    importance: corte,
    estimatedMinutes: 28,
    prerequisites: ['inf-internet'],
    essencial: [
      named(
        'Três jeitos de usar o correio — não são o mesmo programa',
        'Microsoft Outlook é cliente de desktop (Windows 11 / Microsoft 365) e também webmail (Outlook na web). Mozilla Thunderbird é cliente livre, frequente no Linux Ubuntu. Gmail é webmail no navegador (Chrome, Edge ou Firefox) e pode ser lido via IMAP no Thunderbird ou no Outlook. Os três enviam Para, CC, CCO, assunto, corpo e anexo. Nenhum torna seguro um .exe. Outlook não é Gmail; Thunderbird não é “o Outlook livre com o mesmo nome”.',
      ),
      named(
        'Estrutura da mensagem',
        'De (remetente), Para (To), CC, CCO (BCC), Assunto, Corpo, Anexo. Sem assunto claro o ofício some na caixa alheia. Assinatura institucional (nome, cargo, ramal) no rodapé. Data e hora o servidor coloca. Prioridade alta não substitui o ramal. Os três programas exibem esses campos; os menus de CCO podem vir ocultos até se pedir “mostrar CCO”.',
      ),
      named(
        'Para, CC e CCO',
        'Para: destinatário que deve agir (secretário que despacha). CC: ciente e visível para todos da mensagem (chefia imediata). CCO: ciente e oculto; os demais não veem esses endereços. Lista de munícipes ou de servidores em CCO evita expor e-mail pessoal (dado pessoal) e o “responder a todos”. CC não esconde ninguém. CCO não impede o oculto de ler o conteúdo — só oculta os endereços.',
      ),
      named(
        'Enviar, responder e encaminhar',
        'Enviar dispara via SMTP. Responder (Reply) volta ao remetente. Responder a todos inclui Para e CC visíveis — perigoso em circular e em dado de saúde. Encaminhar (Forward) manda cópia a novo destino, em regra com anexos. Encaminhar não é CCO. Nos três: atalhos clássicos Ctrl+R responder e Ctrl+Shift+R responder a todos no Outlook; Thunderbird e Gmail têm equivalentes na interface (Gmail: “Responder a todos” no menu).',
      ),
    ],
    completo: [
      named(
        'SMTP, POP3 e IMAP na dose média',
        'SMTP envia. POP3 baixa para o computador e, conforme a conta, pode retirar a mensagem do servidor — ruim se o mesmo ofício precisa aparecer no Outlook da mesa e no Gmail do notebook. IMAP sincroniza pastas no servidor: a caixa do Thunderbird no Ubuntu e a do Outlook no Windows 11 mostram o mesmo protocolo. Gmail oferece IMAP a clientes. Não se cobra tabela completa de portas do cargo de TI.',
      ),
      named(
        'Anexos e contatos',
        'Ofício ao protocolo: PDF. Planilha de frequência: .xlsx (Excel) ou .ods (Calc). Imagem da visita: .jpg. Contatos/agenda de endereços: o secretário, o setor de pessoal, o ramal da procuradoria — no Outlook, Pessoas; no Thunderbird, Catálogo de endereços; no Gmail, Contatos. Confira o anexo antes de escrever “segue em anexo”. Nunca .exe, .js, .vbs, macro estranha nem ZIP “boleto-prefeitura”.',
      ),
      named(
        'Pastas, caixa de entrada e spam',
        'Outlook e Thunderbird usam pastas clássicas (Entrada, Enviados, Rascunhos, Lixeira, pasta Protocolo). Gmail usa marcadores/rótulos e a Caixa de entrada; “Arquivar” tira da entrada sem apagar. Spam/Lixo eletrônico: o filtro erra — olhe se o ofício esperado caiu lá, mas não “libere” phishing. Regras/filtros: mensagens de protocolo@ vão à pasta. Estrela/sinalização para o que vence hoje. Pesquisa por remetente, assunto e tem:anexo.',
      ),
      named(
        'Boas práticas de comunicação oficial',
        'Assunto: “Ofício 014/2026 — solicitação da planilha de frequência de outubro”. Uma pauta por mensagem. Tom impessoal. Não use conta Gmail pessoal para dado de servidor. Confirme destinatário (homônimo). Anexe primeiro, escreva depois. Cópia da chefia em CC quando a norma pedir rastreabilidade visível; CCO se a chefia não deve aparecer para os demais.',
      ),
      named(
        'Mensagens fraudulentas, links e anexos',
        'Phishing por e-mail: visual da prefeitura, urgência (“ponto será cortado hoje”), link que não é o domínio oficial, anexo .html/.exe. Passe o mouse no remetente e no link (Edge, Chrome, Firefox mostram o destino). Remetente pode ser falsificado. Thunderbird, Outlook e Gmail têm botões de “é phishing / spam”; isso não substitui o ramal da TI. Não informe senha por e-mail.',
      ),
      named(
        'Onde cada um mora na estação',
        'Outlook: aplicativo da Microsoft na estação Windows 11, integrado a calendário e, se houver, ao Teams. Thunderbird: aplicativo livre, típico do Ubuntu, conta IMAP/SMTP configurada. Gmail: https no navegador; também IMAP. Os três podem ler a mesma conta IMAP. Webmail não elimina a necessidade de senha forte e de HTTPS.',
      ),
      named(
        'Responder a todos no expediente',
        'Circular com 40 servidores em Para ou em CC: um “responder a todos” replica dado inútil ou dado pessoal para a lista. Convocação em CCO reduz o risco. Se a mensagem original já expôs os endereços em CC, o dano está feito — daí a escolha no envio. Isso vale igual no Outlook, no Thunderbird e no Gmail.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do correio corporativo superior',
        'O ensino superior deste edital aprofunda listas de distribuição, calendários/convites como bloco de correio, arquivamento, retenção, rastreabilidade institucional e falsificação de remetente em detalhe forense. Calendários eletrônicos, neste cargo, entram na aula de nuvem (OneDrive, Drive, Teams, Meet, Zoom). Portas 25/465/587/993 ficam para TI. Aqui bastam estrutura da mensagem, Para/CC/CCO, os três programas nomeados, IMAP × POP3 na ideia, spam e o cuidado com link/anexo.',
      ),
      named(
        'Netiqueta não é item separado do Anexo IV, mas cai no expediente',
        'Assunto numerado, anexo conferido, CCO para lista de cidadãos, nada de dado de saúde em CC amplo. A banca de nível médio cobra o efeito (quem vê o endereço), não o manual de etiqueta da Presidência.',
      ),
    ],
    revisaoRapida: blocks(
      'Para = ação. CC = ciente e visível. CCO = ciente e oculto.',
      'Outlook = cliente Microsoft; Thunderbird = cliente livre; Gmail = webmail. IMAP sincroniza; POP3 tende a baixar.',
      'Responder a todos e anexo executável são as duas formas mais rápidas de errar no expediente.',
    ),
    definitions: [
      { term: 'CC', definition: 'Com cópia: destinatários visíveis a todos os demais da mensagem.' },
      { term: 'CCO', definition: 'Com cópia oculta: destinatários que recebem sem aparecer para os outros.' },
      { term: 'IMAP', definition: 'Protocolo que mantém a caixa sincronizada no servidor.' },
      { term: 'SMTP', definition: 'Protocolo de envio de mensagens.' },
      { term: 'POP3', definition: 'Protocolo que baixa mensagens para o aparelho e, conforme a conta, pode removê-las do servidor.' },
    ],
    comparisons: [
      {
        title: 'Para versus CC versus CCO',
        leftLabel: 'Visível na mensagem',
        rightLabel: 'Uso no expediente',
        rows: [
          { label: 'Para', left: 'Sim, para todos', right: 'Quem deve despachar o ofício' },
          { label: 'CC', left: 'Sim, para todos', right: 'Chefias que precisam ser vistas como cientes' },
          { label: 'CCO', left: 'Não (endereços ocultos)', right: 'Lista de munícipes ou convocação ampla sem expor e-mails' },
        ],
      },
      {
        title: 'Microsoft Outlook, Mozilla Thunderbird e Gmail',
        leftLabel: 'Uso típico',
        rightLabel: 'Observação de prova',
        rows: [
          { label: 'Outlook', left: 'Cliente Microsoft 365 / Windows 11 (há webmail)', right: 'Não é o Gmail nem o Thunderbird' },
          { label: 'Thunderbird', left: 'Cliente livre, frequente no Ubuntu', right: 'Software livre; não é webmail' },
          { label: 'Gmail', left: 'Webmail no Chrome, Edge ou Firefox', right: 'Pode ser lido via IMAP no Thunderbird/Outlook' },
        ],
      },
    ],
    examples: [
      'Enviar o PDF do ofício ao secretário em Para e à assessoria em CC.',
      'Convocação de 40 servidores para capacitação: CCO para não vazar a lista de e-mails.',
      'Abrir no Thunderbird do Ubuntu a mesma conta IMAP que o colega abre no Outlook.',
      'Marcar como spam o “boleto da prefeitura” com anexo .exe, nos três programas.',
    ],
    publicAdminExamples: [
      'No guichê, o protocolo devolve ao cidadão o comprovante em PDF por e-mail, com assunto numerado.',
      'Planilha de frequência mensal vai em anexo só a destinatários da folha; demais, se necessário, em CCO.',
      'Não colocar CPF de munícipes no corpo visível em CC amplo.',
    ],
    procedures: [
      'Preencha o assunto e anexe o PDF antes de escrever o “segue em anexo” no corpo.',
      'Decida Para / CC / CCO: quem age, quem vê, quem não pode ser exposto.',
      'Passe o mouse no link e no remetente antes de clicar. Confira o domínio.',
      'Não use “responder a todos” em cadeia com dado de servidor ou de munícipe.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — circular sem expor endereços',
        setup: 'A Secretaria convoca 40 servidores para capacitação e o enunciado pede que os endereços não apareçam uns para os outros.',
        steps: [
          'Para um, ou Para a si mesmo, e os 40 em CCO.',
          'CC tornaria todos visíveis — exatamente o que o enunciado veda.',
          'Vale no Outlook, no Thunderbird e no Gmail: o campo é o mesmo conceito (BCC).',
        ],
        result: 'Não revelar endereços = CCO, não CC. CCO não esconde o texto, esconde a lista.',
      },
      {
        title: 'Exemplo resolvido 2 — IMAP na mesa e no laboratório',
        setup: 'O agente lê o ofício no Microsoft Outlook do Windows 11 de manhã e à tarde no Mozilla Thunderbird do Ubuntu. A mensagem precisa estar nos dois.',
        steps: [
          'IMAP mantém a caixa no servidor: os dois clientes veem o mesmo.',
          'POP3 poderia ter baixado e apagado do servidor na primeira estação.',
          'Gmail como webmail também fala IMAP com esses clientes.',
        ],
        result: 'Estação compartilhada / dois sistemas: IMAP, não POP3.',
      },
      {
        title: 'Exercício guiado — “segue o ponto eletrônico”',
        setup: 'E-mail no Gmail com visual da prefeitura, anexo boleto.exe e link http://prefeitura-itarema-ponto.com.',
        steps: [
          'Anexo .exe não é comprovante de ponto. Domínio não é o oficial.',
          'HTTP e urgência artificial (“hoje seu ponto será cortado”) são marcas de phishing.',
          'Não clicar. Marcar spam. Avisar a TI pelo ramal interno, não pelo telefone do corpo da mensagem.',
        ],
        result: 'Fraude. Outlook, Thunderbird e Gmail entregam o mesmo golpe se o agente clicar.',
      },
    ],
    recallPrompts: [
      'Distinga Para, CC e CCO com um ofício circular.',
      'Onde se enquadram Outlook, Thunderbird e Gmail?',
      'Por que IMAP é preferível a POP3 na secretaria?',
      'O que fazer diante de anexo .exe e link urgente de “ponto eletrônico”?',
    ],
    recallAnswers: [
      'Para age; CC vê e é visto; CCO recebe sem aparecer. Circular a munícipes vai em CCO.',
      'Outlook: cliente Microsoft (há web). Thunderbird: cliente livre. Gmail: webmail, também via IMAP.',
      'IMAP sincroniza no servidor; a mesma caixa aparece no Outlook e no Thunderbird. POP3 tende a baixar (e pode remover).',
      'Não clicar, não abrir o .exe, conferir o domínio, marcar spam e avisar a TI pelo ramal verdadeiro.',
    ],
    commonErrors: [
      'Usar CC quando o objetivo era ocultar a lista (o correto é CCO).',
      'Achar que CCO impede o destinatário oculto de ver o conteúdo — ele vê a mensagem, só não vê os outros ocultos.',
      'Tratar Thunderbird como serviço Google.',
      'Responder a todos em cadeia com dado de saúde de servidor.',
      'Chamar Gmail de “não é correio eletrônico”.',
    ],
    traps: [
      'CC versus CCO com enunciado de “não revelar os endereços”.',
      'POP3 descrito como se sincronizasse pastas em todos os aparelhos.',
      'Gmail “não é correio eletrônico” — é, na forma de webmail.',
      'Outlook cobrado como se fosse o único cliente capaz de CCO.',
    ],
    relatedLessonIds: ['inf-internet', 'inf-nuvem', 'inf-seguranca'],
    relatedEditalItems: ['Correio eletrônico (Microsoft Outlook, Mozilla Thunderbird e webmails como Gmail)'],
    synthesis:
      'Microsoft Outlook, Mozilla Thunderbird e Gmail enviam a mesma mensagem com Para, CC e CCO. CC revela os endereços; CCO oculta. IMAP sincroniza; anexo executável e “responder a todos” são riscos do expediente.',
    glossary: [
      { term: 'Webmail', definition: 'Correio usado pelo navegador, como Gmail ou Outlook na web.' },
      { term: 'Anexo', definition: 'Arquivo enviado junto da mensagem (PDF de ofício, planilha de frequência).' },
      { term: 'Spam', definition: 'Mensagem em massa indesejada; pode coincidir com phishing, mas nem todo spam é fraude de senha.' },
    ],
    masteryCriteria: [
      'Distinguir Para, CC e CCO com exemplo de ofício circular.',
      'Situar Outlook, Thunderbird e Gmail (cliente versus webmail).',
      'Dizer por que IMAP é preferível a POP3 em estação compartilhada da secretaria.',
      'Reconhecer mensagem fraudulenta pelo domínio, pelo anexo e pela urgência artificial.',
    ],
    questionIds: ['inf-q30', 'inf-q31', 'inf-q32'],
  }),

  inf({
    id: 'inf-nuvem',
    chapterId: 'inf-rede',
    topicId: 'inf-nuvem',
    title: 'Nuvem e colaboração: OneDrive, Google Drive, Teams, Meet e Zoom',
    objective:
      'Guardar, compartilhar e reunir-se em videoconferência com permissões corretas, sem expor dado de administrado.',
    importance: corte,
    estimatedMinutes: 30,
    prerequisites: ['inf-email', 'inf-windows-linux'],
    essencial: [
      named(
        'O que é nuvem neste edital',
        'Computação em nuvem, no nível médio, é usar armazenamento e aplicativos hospedados em provedor, com conta, sincronização e permissões. Microsoft OneDrive integra-se ao Windows 11 e ao Microsoft Word/Excel/PowerPoint. Google Drive integra-se ao Gmail e aos editores Google. Não são o mesmo disco: pastas, links e o app de reunião associado mudam (Microsoft Teams no mundo Microsoft; Google Meet no mundo Google). Zoom é plataforma própria. Arquivo só na nuvem continua arquivo; sem rede, o que estiver “somente online” não abre.',
      ),
      named(
        'OneDrive e Google Drive não são o mesmo serviço',
        'OneDrive: pasta no Explorador do Windows 11, lixeira, versões, compartilhar com conta Microsoft. Google Drive: drive.google.com ou app; Docs/Planilhas/Apresentações são editores, não o disco. Os dois copiam ofício, planilha de frequência e PDF. Trocar o nome (dizer que o OneDrive é produto Google) é erro de prova. Ubuntu acessa os dois pelo navegador (Firefox, Chrome); o ícone de pasta do OneDrive é típico do Windows 11.',
      ),
      named(
        'Permissões básicas',
        'Leitor/visualizador: vê e em geral baixa, não edita. Comentador: sugere. Editor: altera. “Qualquer pessoa com o link” abre a quem tiver a URL — inaceitável para frequência com CPF. “Pessoas específicas” / restrito é o padrão do expediente. Prazo de validade no link, quando houver. Revogar quando o estagiário sair. Editor em link público é o pior dos mundos.',
      ),
      named(
        'Teams, Meet e Zoom — três nomes, três produtos',
        'Microsoft Teams: chat, canais, arquivos (OneDrive/SharePoint) e reunião a partir do Outlook. Google Meet: reunião da conta Google, pelo Gmail ou Calendar; não é o Drive. Zoom: ID, senha, sala de espera, compartilhamento de tela. Os três fazem videoconferência; não troque os nomes. Mudo ao entrar; não projetar a área de trabalho com o protocolo aberto.',
      ),
    ],
    completo: [
      named(
        'Armazenamento, sincronização e conflito',
        'OneDrive no Windows 11 marca arquivos na nuvem, locais ou somente online. Sincronizar a pasta Protocolo\\2026 faz o ofício aparecer em outra estação da mesma conta. Editar o mesmo .docx/.xlsx sem rede gera cópia de conflito. Google Docs/Planilhas evitam isso com coautoria ao vivo. Calc/Excel clássico sincronizado no Drive/OneDrive é mais sujeito a conflito. Desligar o PC não apaga a nuvem.',
      ),
      named(
        'Compartilhamento e edição colaborativa',
        'Link ou convite nominado. Coautoria: dois agentes no mesmo ofício (Docs) ou na mesma Planilha Google da frequência. Comentários não são o texto final. Histórico de versões devolve minuta antiga — útil, não é backup institucional sozinho. Não compartilhe a pasta inteira do protocolo “porque o colega pediu um PDF”.',
      ),
      named(
        'Calendários eletrônicos',
        'Outlook (com o Microsoft Teams) e Google Calendar (com o Meet) marcam a reunião; o Zoom gera o próprio convite com ID. O convite no calendário não autoriza gravar dado de saúde nem jogar o link da sala em grupo aberto. Recorrência da reunião de pauta semanal. Aceitar convite de desconhecido é risco (o link pode ser golpe). Cuidados institucionais: título discreto, lista de participantes certa, não encaminhar o link do gabinete a lista pública.',
      ),
      named(
        'Videoconferência na prática do gabinete',
        'Sala de espera (Zoom e equivalentes no Teams/Meet). Anfitrião admite. Compartilhar só a janela do PowerPoint ou do Impress, não a área de trabalho com o Outlook aberto. Gravacão: só se a norma e o tema permitirem — reunião sobre atestado médico não vira MP4 em link público. Fundo estável. Teste o microfone antes da sessão com o conselho.',
      ),
      named(
        'Cuidados no compartilhamento institucional',
        'Antes do botão Compartilhar: há CPF, atestado, senha, lista de frequência, dados de menor? Se sim, pessoas específicas, sem download se possível, sem “qualquer pessoa”. Teste o link em janela privativa (Ctrl+Shift+N no Edge/Chrome; Ctrl+Shift+P no Firefox): se abrir sem login, está aberto demais. Pasta “Protocolo 2026” não vai no grupo aberto do Teams.',
      ),
      named(
        'O que a nuvem não resolve sozinha',
        'Backup em OneDrive/Drive não substitui controle de acesso. Arquivo público na internet continua precisando de HTTPS e de critério. Pendrive na gaveta não é “nuvem”. Zoom não armazena automaticamente todos os ofícios da prefeitura. Google Docs não é o Google Drive: um é editor, o outro é o disco.',
      ),
      named(
        'Mapa Microsoft × Google × Zoom',
        'Conta Microsoft: OneDrive (arquivos) + Teams (reunião/chat) + Outlook (correio/calendário) + Word/Excel/PowerPoint. Conta Google: Drive (arquivos) + Meet (reunião) + Gmail (correio) + Calendar. Zoom: reunião; arquivos longos continuam no Drive ou no OneDrive. Cruzar os mundos (anexar link do Drive no convite Zoom) é comum; cruzar os nomes na prova é erro.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia da nuvem corporativa superior',
        'O ensino superior deste edital trata Microsoft 365/OneDrive e Google Workspace/Drive com coautoria, histórico, propriedade, transferência, revogação, continuidade de acesso e riscos de permissão excessiva como bloco extenso, além de IaaS/PaaS/SaaS. No Agente Administrativo o edital lista os produtos — Microsoft OneDrive, Google Drive, Microsoft Teams, Google Meet e Zoom — e pede conceito, sincronização, permissão básica, videoconferência, calendário e o cuidado institucional. Não desenhe camadas IaaS.',
      ),
      named(
        'SaaS só se a banca trouxer o nome',
        'Se aparecer SaaS, pense “software pelo navegador” (Gmail, Meet, Word na web). Não transforme a questão de permissão da planilha de frequência em arquitetura de nuvem. SharePoint pode aparecer no rastro do Teams; não é produto nomeado neste recorte médio — não invente gabarito sobre farm de sites.',
      ),
    ],
    revisaoRapida: blocks(
      'OneDrive = Microsoft. Google Drive = Google. Permissão de editor ≠ link público.',
      'Teams (Microsoft), Meet (Google), Zoom (próprio): os três são reunião; arquivos longos ficam no Drive/OneDrive.',
      'Planilha de frequência com dado pessoal: pessoas específicas, nunca “qualquer pessoa com o link”. Calendário: convite certo, título discreto.',
    ),
    definitions: [
      { term: 'Computação em nuvem (uso deste edital)', definition: 'Uso de armazenamento e aplicativos hospedados em provedor, acessados pela rede com conta e permissões.' },
      { term: 'Sincronização', definition: 'Cópia recíproca entre a pasta local e o servidor para o arquivo aparecer nas estações da conta.' },
      { term: 'Sala de espera', definition: 'Recurso do Zoom (e equivalentes no Teams/Meet) que segura o participante até o anfitrião aceitar.' },
      { term: 'Coautoria', definition: 'Edição simultânea do mesmo arquivo por mais de uma pessoa autorizada.' },
      { term: 'Link público', definition: 'URL que abre o arquivo para qualquer um que a receba, em regra sem login institucional.' },
    ],
    comparisons: [
      {
        title: 'Microsoft Teams, Google Meet e Zoom',
        leftLabel: 'Onde nasce',
        rightLabel: 'Arquivos típicos',
        rows: [
          { label: 'Microsoft Teams', left: 'Conta Microsoft / Outlook', right: 'OneDrive / SharePoint' },
          { label: 'Google Meet', left: 'Conta Google / Gmail / Calendar', right: 'Google Drive / Docs' },
          { label: 'Zoom', left: 'Conta Zoom (pode ser só o convite)', right: 'Não substitui Drive/OneDrive' },
        ],
      },
      {
        title: 'OneDrive versus Google Drive',
        leftLabel: 'Microsoft OneDrive',
        rightLabel: 'Google Drive',
        rows: [
          { label: 'Ecossistema', left: 'Windows 11, Word, Excel, PowerPoint, Teams', right: 'Gmail, Meet, Docs/Planilhas' },
          { label: 'Pasta no Windows 11', left: 'Ícone OneDrive no Explorador', right: 'App Drive ou só o navegador' },
          { label: 'Reunião associada', left: 'Microsoft Teams', right: 'Google Meet' },
        ],
      },
    ],
    examples: [
      'Modelo de ofício na pasta OneDrive da secretaria, edição só para a equipe de gabinete.',
      'Alinhamento da frequência no Google Meet, planilha no Drive em modo comentário para os chefes de setor.',
      'Capacitação com inscritos externos no Zoom, sala de espera ligada.',
      'Convite no calendário do Outlook para a pauta semanal no Teams, com PDF da ata depois no OneDrive.',
    ],
    publicAdminExamples: [
      'Pasta “Protocolo 2026” no Google Drive restrita aos agentes do setor; o cidadão no guichê não recebe o link interno.',
      'Microsoft Teams da Administração para a reunião de pauta; ata em PDF no OneDrive, não em link “qualquer pessoa”.',
      'Planilha de frequência com CPF: pessoas específicas, sem editor público. Atestado médico não entra nessa pasta.',
    ],
    procedures: [
      'Antes de compartilhar, olhe se há CPF, atestado, senha ou lista de frequência.',
      'Escolha pessoas específicas. Teste o link em janela privativa: se abrir sem login, está aberto demais.',
      'Na reunião, mudo, compartilhe só a janela do slide (PowerPoint ou Impress), não a área de trabalho com o e-mail aberto.',
      'Revogue acesso do estagiário. Não encaminhe o convite do gabinete a grupo público.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — frequência no link público',
        setup: 'O agente coloca frequencia-outubro.xlsx no Google Drive e marca “qualquer pessoa com o link pode editar”, para “facilitar os chefes de setor”.',
        steps: [
          'A planilha tem dado pessoal (nome, às vezes CPF, faltas).',
          'Link público + editor = qualquer um que receba a URL altera e copia.',
          'Caminho certo: pessoas específicas, leitor ou comentador; Teams/Meet só para a reunião, não como desculpa para abrir o arquivo.',
        ],
        result: 'Nunca “qualquer pessoa” em frequência. OneDrive tem o mesmo risco com o mesmo tipo de link.',
      },
      {
        title: 'Exemplo resolvido 2 — Meet não é Teams',
        setup: 'A questão afirma que o Google Meet armazena os ofícios da secretaria no OneDrive, porque “os dois são nuvem Microsoft”.',
        steps: [
          'Meet é Google; OneDrive e Teams são Microsoft.',
          'Arquivos Google ficam no Google Drive. Arquivos Microsoft, no OneDrive.',
          'Zoom não é disco de ofícios. Nuvem não autoriza trocar os nomes do edital.',
        ],
        result: 'Meet ≠ Teams ≠ Zoom. Drive ≠ OneDrive.',
      },
      {
        title: 'Exercício guiado — compartilhar a área de trabalho',
        setup: 'Na reunião de gabinete no Microsoft Teams, o servidor compartilha a tela inteira. No canto, o Outlook mostra um e-mail com atestado médico.',
        steps: [
          'Compartilhar a área de trabalho projeta tudo, inclusive dado sensível.',
          'Compartilhe só a janela do PowerPoint/Impress.',
          'Atestado é dado pessoal sensível: não entra em reunião gravada nem em link público.',
        ],
        result: 'Janela do slide, não a mesa inteira. Nuvem e câmera não suspendem o dever de cuidado.',
      },
    ],
    recallPrompts: [
      'Associe OneDrive e Teams à Microsoft; Drive e Meet ao Google. Onde entra o Zoom?',
      'Quais permissões usar na planilha de frequência com CPF?',
      'Cite dois cuidados de videoconferência no gabinete.',
      'Google Docs é o mesmo que Google Drive?',
    ],
    recallAnswers: [
      'OneDrive e Teams: Microsoft. Drive e Meet: Google. Zoom: plataforma própria de reunião, não substitui o disco.',
      'Pessoas específicas, em regra só leitura ou comentário; jamais “qualquer pessoa com o link” com editor.',
      'Sala de espera; mudo ao entrar; compartilhar só a janela do slide; não gravar tema de saúde em link público.',
      'Não. Docs é o editor; Drive é o armazenamento. Assim como Word não é OneDrive.',
    ],
    commonErrors: [
      'Tratar Meet como produto Microsoft.',
      'Achar que OneDrive só existe no celular.',
      'Link “qualquer pessoa” em planilha de pessoal.',
      'Dizer que Zoom armazena automaticamente todos os ofícios da prefeitura.',
      'Confundir Google Docs com Google Drive.',
    ],
    traps: [
      'Google Docs citado como se fosse o Google Drive. Docs é editor; Drive é o disco.',
      'Teams confundido com Zoom só porque ambos têm câmera.',
      'Arquivo “na nuvem” tratado como se não pudesse vazar.',
      'Calendário aberto com título “atestado de fulano” no convite público.',
    ],
    relatedLessonIds: ['inf-email', 'inf-seguranca', 'inf-windows-linux'],
    relatedEditalItems: ['Comunicação, colaboração e armazenamento em nuvem'],
    synthesis:
      'Microsoft OneDrive e Google Drive guardam e compartilham; a permissão certa impede o vazamento da frequência. Microsoft Teams, Google Meet e Zoom fazem a reunião e não são intercambiáveis pelo nome. Dado de administrado não vai em link público.',
    glossary: [
      { term: 'Link de compartilhamento', definition: 'URL que abre o arquivo conforme a permissão (restrito ou público).' },
      { term: 'Somente online', definition: 'Arquivo visível na pasta local mas baixado só ao abrir, economizando disco.' },
      { term: 'Anfitrião', definition: 'Quem controla a sala da videoconferência (admitir da espera, encerrar, gravar).' },
    ],
    masteryCriteria: [
      'Associar OneDrive/Teams à Microsoft e Drive/Meet ao Google.',
      'Escolher permissão adequada para planilha com dado pessoal.',
      'Citar um cuidado de videoconferência (sala de espera, não compartilhar a área de trabalho inteira).',
      'Usar calendário eletrônico sem expor dado institucional em convite público.',
    ],
    questionIds: ['inf-q33', 'inf-q34', 'inf-q35'],
  }),

  inf({
    id: 'inf-seguranca',
    chapterId: 'inf-seguranca',
    topicId: 'inf-seguranca',
    title: 'Segurança da informação e proteção de dados pessoais',
    objective:
      'Aplicar CID, reconhecer malwares e variantes de phishing e distinguir dado pessoal de dado sensível no expediente de nível médio, sem copiar o programa de Informática de nível superior.',
    importance: corte,
    estimatedMinutes: 32,
    prerequisites: ['inf-internet', 'inf-email', 'inf-nuvem'],
    sourceIds: ['src-edital', 'src-didatico', 'src-lgpd'],
    essencial: [
      named(
        'CID — confidencialidade, integridade, disponibilidade',
        'Confidencialidade: só quem pode ver vê (ofício sigiloso não vai em CC amplo nem em link público do OneDrive/Drive). Integridade: o conteúdo não foi alterado na surdina (PDF do protocolo não pode ser trocado por versão falsificada). Disponibilidade: o sistema de ponto e a pasta da frequência estão acessíveis quando o expediente precisa (ataque, disco quebrado ou senha perdida derrubam a disponibilidade). Autenticação sustenta as três. Backup protege sobretudo integridade e disponibilidade. Anotar a senha no monitor “para ninguém ficar sem acesso” ataca a confidencialidade, não salva a disponibilidade.',
      ),
      named(
        'Malware (programas maliciosos nomeados no edital)',
        'Vírus: infecta arquivo e precisa de um hospedeiro para se espalhar. Worm (verme): propaga-se pela rede com menos dependência de um arquivo aberto. Cavalo de Troia (trojan): parece útil (instalador de “driver da impressora”) e abre porta ao atacante. Ransomware: cifra os arquivos e pede resgate — a pasta do protocolo fica ilegível. Spyware: espiona. O edital de nível médio lista vírus, worms, trojans, spyware e ransomware. Adware, keylogger, rootkit e botnet aparecem em textos didáticos; não chame todo malware de vírus. Antivírus e atualização reduzem risco; não substituem senha boa nem o bom senso no anexo. Firewall filtra tráfego; não é antivírus completo.',
      ),
      named(
        'Phishing, variações e engenharia social',
        'Phishing: mensagem ou página falsa que se passa por banco, Receita, prefeitura ou TI para furtar senha, token ou dado. Spear phishing: mira uma pessoa ou um cargo (“setor de protocolo de Itarema”). Smishing: SMS. Vishing: voz/telefone. Engenharia social é o guarda-chuva: manipula gente, não só código. Clone phishing e whaling (autoridade) aparecem em material didático; o edital médio nomeia spear, vishing e smishing. Defesa: conferir remetente e URL, desconfiar de urgência artificial (“ponto cortado hoje”) e nunca informar senha por telefone, SMS ou e-mail.',
      ),
      named(
        'Dado pessoal e dado pessoal sensível (nível médio)',
        'A Lei nº 13.709/2018 (LGPD) entra só nas noções que o edital de informática de nível médio pede: proteção de dados pessoais e a distinção pessoal × sensível. Dado pessoal: informação relacionada a pessoa natural identificada ou identificável — nome, CPF, RG, e-mail, endereço, matrícula funcional quando identifica o servidor. Dado pessoal sensível: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico. Atestado médico é sensível. Telefone do cidadão no protocolo é pessoal, em regra não sensível. CPF sozinho não está no inciso do sensível.',
      ),
    ],
    completo: [
      named(
        'Autenticação, autorização, auditoria e MFA',
        'Autenticação: provar quem é (senha, PIN, Windows Hello, segundo fator). Autorização: o que essa pessoa pode fazer (abrir a pasta de pessoal, não a de outro setor). Auditoria: registro de quem acessou ou alterou — trilhas que a TI lê; o agente não desliga log para “ir mais rápido”. MFA/2FA: senha + aplicativo/token. Conta do Outlook institucional ≠ Gmail pessoal reutilizado. sudo no Ubuntu e “Executar como administrador” no Windows 11 só para o que a TI autorizar (menor privilégio na prática do guichê).',
      ),
      named(
        'Senhas seguras, bloqueio de tela e cópias de segurança',
        'Senha longa, exclusiva, sem “itarema123”. Não anotar no monitor. Bloquear ao sair do balcão: Win+L no Windows 11. Backup da planilha de frequência em local distinto (servidor + nuvem institucional, não só o HD da mesa nem um único pendrive). Testar a restauração. Ransomware torna o backup a diferença entre parar o protocolo ou reabrir os PDFs. Atualizar Windows 11 e Ubuntu: o patch fecha buraco que o worm explora.',
      ),
      named(
        'Coleta, armazenamento e compartilhamento de dados',
        'Coletar no protocolo só o necessário ao atendimento (princípio didático de minimização). Guardar na pasta certa, com acesso do setor. Compartilhar: CCO em lista de e-mails, pessoas específicas no Drive/OneDrive, nunca grupo aberto do Teams para atestado. Dado em papel no guichê não se deixa virado para a fila. Dado digital não se manda ao WhatsApp pessoal.',
      ),
      named(
        'Proteção de documentos físicos e digitais',
        'Físico: gaveta, malote, não abandonar ofício na impressora da copa, não colar lista de frequência no mural com CPF. Digital: pasta com permissão, PDF de tramitação, tela bloqueada, HTTPS no webmail (Outlook na web, Gmail), nuvem restrita. O mesmo conteúdo (requerimento do munícipe) existe nas duas formas; o dever de cuidado vale nas duas.',
      ),
      named(
        'Descarte seguro',
        'Papel com dado pessoal ou ofício: fragmentadora, não lixeira da calçada. Rascunho da ata com nome de servidor: o mesmo. Digital: esvaziar Lixeira não é destruição forense, mas é o mínimo do expediente; mídia a descartar (HD velho, pendrive) segue a TI — não doar HD da prefeitura com a frequência de 2024. “Delete” no e-mail não apaga a cópia do destinatário.',
      ),
      named(
        'Responsabilidade do usuário no tratamento institucional',
        'O agente administrativo não é o DPO nem a ANPD. É responsável pelo que clica, pelo que encaminha, pelo que deixa na tela e pelo que joga no lixo. “A chefia mandou mandar no grupo” não apaga o dever de não expor atestado. Usar a estação para jogo ou para baixar crack de programa é falha de segurança, não “intervalo”. Reportar incidente ao ramal da TI, não ao telefone que veio no e-mail do golpe.',
      ),
      named(
        'Engenharia social no balcão e no ramal',
        'Alguém se passa por técnico, por parente do secretário ou por munícipe “com urgência da Promotoria” para obter senha, copiar processo ou liberar pasta. Conferir identidade. Não entregar cópia de processo com dado de terceiros sem o rito. Vishing no ramal pede “código do token do Outlook”. A resposta é desligar e ligar para o número interno conhecido.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o nível médio não copia do programa de Informática superior',
        'O Anexo IV de ensino superior traz a LGPD (Lei nº 13.709/2018) como linha expressa e completa, além de banco de dados, qualidade dos dados, autenticação/autorização/auditoria (accounting) em profundidade, segregação de funções, trilhas, governo digital, gov.br, dados abertos, ISO, RIPD e sistemas aplicados à Administração Pública. Nada disso se cola aqui. Neste cargo a LGPD entra só para iluminar dado pessoal × dado sensível e o dever de cuidado na coleta, no armazenamento, no compartilhamento e no descarte.',
      ),
      named(
        'Fronteira com o cargo de TI',
        'Hash, certificados digitais em profundidade, DMZ, SIEM, criptografia de disco e classificação ISO não são o centro desta ementa. Se a questão de nível médio citar “confidencialidade”, responda CID e exemplo de ofício ou de frequência; não invente norma que o Anexo IV do Agente Administrativo não pediu.',
      ),
    ],
    revisaoRapida: blocks(
      'CID: confidencialidade (quem vê), integridade (não alterado), disponibilidade (acessível). MFA, senha longa, Win+L, backup.',
      'Ransomware sequestra arquivo; phishing engana gente; worm anda na rede; trojan finge ser útil; spyware espiona.',
      'Pessoal = identifica (CPF, e-mail). Sensível = saúde, biometria, religião, opinião política, vida sexual, origem racial, filiação sindical. Descarte: fragmentar papel; mídia velha com a TI. LGPD só introdutória.',
    ),
    definitions: [
      { term: 'Confidencialidade', definition: 'Garantia de que a informação é acessível apenas a quem está autorizado.' },
      { term: 'Integridade', definition: 'Garantia de que a informação não foi alterada de forma indevida.' },
      { term: 'Disponibilidade', definition: 'Garantia de que a informação e o sistema estão acessíveis quando necessários.' },
      { term: 'Dado pessoal', definition: 'Dado relativo a pessoa natural identificada ou identificável (LGPD, art. 5º, I).' },
      { term: 'Dado pessoal sensível', definition: 'Categoria especial do art. 5º, II, da LGPD (saúde, biometria, religião, opinião política, entre outros).' },
      { term: 'Autenticação', definition: 'Verificação da identidade de quem acessa (senha, PIN, segundo fator).' },
    ],
    comparisons: [
      {
        title: 'Pessoal versus sensível no expediente',
        leftLabel: 'Dado pessoal (exemplos)',
        rightLabel: 'Dado pessoal sensível (exemplos)',
        rows: [
          { label: 'Identificação', left: 'Nome e CPF do munícipe no protocolo', right: 'Dado biométrico do ponto eletrônico facial' },
          { label: 'Contato', left: 'E-mail e telefone para responder o ofício', right: 'Convicção religiosa anotada em ficha' },
          { label: 'Trabalho', left: 'Matrícula funcional que identifica o servidor', right: 'Atestado médico e CID de doença na pasta de pessoal' },
          { label: 'Política/sindicato', left: 'Lotação na Secretaria de Administração', right: 'Filiação sindical ou opinião política' },
        ],
      },
      {
        title: 'Malware versus engenharia social',
        leftLabel: 'Malware',
        rightLabel: 'Engenharia social / phishing',
        rows: [
          { label: 'Alvo', left: 'Programa, arquivo, rede', right: 'A pessoa (agente no guichê, ramal, SMS)' },
          { label: 'Exemplos do edital', left: 'Vírus, worm, trojan, spyware, ransomware', right: 'Phishing, spear phishing, vishing, smishing' },
          { label: 'Defesa imediata', left: 'Não abrir .exe; antivírus; backup; atualizar', right: 'Conferir domínio; ramal verdadeiro; não informar senha' },
        ],
      },
    ],
    examples: [
      'Phishing: e-mail “Atualize o ponto eletrônico” com link que não é da prefeitura.',
      'Ransomware: PDFs do protocolo viram extensão estranha e aparece pedido de pagamento.',
      'Integridade: alguém troca o valor na planilha de diárias sem controle de versão.',
      'Smishing: SMS “seu benefício foi bloqueado, clique”; vishing: ramal pedindo o token do Outlook.',
    ],
    publicAdminExamples: [
      'Não enviar lista de frequência com CPF em CC para caixa genérica da secretaria.',
      'Atestado médico: dado sensível; tramitar na pasta de pessoal com acesso restrito, não no grupo aberto do Teams.',
      'No guichê, confirmar identidade antes de entregar cópia de processo com dado de terceiros; fragmentar rascunhos com nome de munícipe.',
    ],
    procedures: [
      'Perante e-mail urgente de “TI da prefeitura”, conferir o domínio e ligar pelo ramal interno, não pelo telefone do corpo da mensagem.',
      'Classifique o arquivo: público, pessoal ou sensível, e só então escolha pasta, CC/CCO e link da nuvem.',
      'Bloqueie a tela (Win+L no Windows 11) ao sair do balcão. Mantenha backup da frequência fora da própria estação.',
      'Descarte papel na fragmentadora; mídia e HD velhos, com a TI. Não doe equipamento com arquivo institucional.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — CPF é sensível?',
        setup: 'Alternativa afirma que o CPF na ficha de protocolo é dado pessoal sensível, porque identifica o munícipe, e por isso se aplica o programa completo da LGPD de cargo superior.',
        steps: [
          'CPF identifica: é dado pessoal (art. 5º, I). Não está no rol de sensível (art. 5º, II).',
          'Sensível: saúde, biometria, religião, política, sexualidade, raça, sindicato, dado genético.',
          'O programa de nível médio pede essa distinção, não ANPD, RIPD nem bases legais completas.',
        ],
        result: 'CPF = pessoal, não sensível. Atestado = sensível. LGPD só introdutória neste cargo.',
      },
      {
        title: 'Exemplo resolvido 2 — ransomware na pasta do protocolo',
        setup: 'De manhã os PDFs estão ilegíveis, com extensão estranha, e há um recado pedindo pagamento. O agente tem a frequência só no HD da mesa.',
        steps: [
          'Quadro típico de ransomware (malware que cifra e pede resgate).',
          'Não pagar por conta própria; acionar a TI. Não espalhar o pendrive “para ver se abre na outra mesa”.',
          'Disponibilidade e integridade caíram. Backup em outro local seria a volta. Pendrive único na gaveta não é backup.',
        ],
        result: 'Ransomware ≠ phishing. Backup fora da estação é o que reconstitui o protocolo.',
      },
      {
        title: 'Exercício guiado — senha no monitor por “disponibilidade”',
        setup: 'A chefia manda anotar a senha do Windows 11 no monitor “para o plantão não parar”. A alternativa chama isso de garantir disponibilidade.',
        steps: [
          'Disponibilidade é o sistema acessível a quem pode, não a senha pública.',
          'Senha visível quebra confidencialidade e facilita malware/uso indevido.',
          'Caminho: conta individual, Win+L ao sair, MFA se houver, backup — não o papelzinho.',
        ],
        result: 'Anotar senha no monitor não é CID de disponibilidade. É falha de confidencialidade.',
      },
    ],
    recallPrompts: [
      'Defina cada letra do CID com exemplo de ofício ou de frequência.',
      'Diferencie vírus, worm, trojan, ransomware e spyware.',
      'Diferencie phishing, spear phishing, smishing e vishing.',
      'Classifique CPF, e-mail, atestado médico e biometria. O que o descarte seguro exige no guichê?',
    ],
    recallAnswers: [
      'C: só quem pode vê (ofício sigiloso). I: conteúdo íntegro (PDF não trocado). D: sistema no ar (ponto, pasta da frequência).',
      'Vírus infecta arquivo; worm anda na rede; trojan finge utilidade; ransomware cifra e pede resgate; spyware espiona.',
      'Phishing é a fraude genérica; spear mira cargo/pessoa; smishing é SMS; vishing é voz/telefone. Engenharia social é o guarda-chuva.',
      'CPF e e-mail: pessoais. Atestado e biometria: sensíveis. Papel na fragmentadora; HD/pendrive velho com a TI; tela bloqueada no balcão.',
    ],
    commonErrors: [
      'Dizer que firewall substitui antivírus.',
      'Chamar todo malware de vírus.',
      'Tratar CPF como dado sensível (é pessoal; o CPF em si não está no inciso II da LGPD).',
      'Achar que HTTPS impede engenharia social.',
      'Justificar senha no monitor como “disponibilidade”.',
    ],
    traps: [
      'Disponibilidade cobrada como se fosse “deixar a senha anotada no monitor para ninguém ficar sem acesso”.',
      'Smishing descrito como vírus de disco.',
      'Copiar para a prova de nível médio itens de criptografia de redes, ANPD, RIPD ou governo digital do cargo superior.',
      'Whaling ou ISO 27001 cobrados como se estivessem nominados neste Anexo IV médio.',
    ],
    relatedLessonIds: ['inf-email', 'inf-nuvem', 'inf-internet'],
    relatedEditalItems: ['Segurança da informação e proteção de dados pessoais'],
    synthesis:
      'CID organiza o raciocínio: quem vê, se o arquivo foi alterado, se o sistema está no ar. Malware ataca o programa; phishing ataca a pessoa. Dado pessoal identifica; dado sensível toca saúde, biometria, religião, política, sexualidade, raça e sindicato. No nível médio basta essa proteção de dados, com a LGPD como referência introdutória, sem a ementa de Informática superior.',
    glossary: [
      { term: 'Engenharia social', definition: 'Técnica de obter informação ou acesso manipulando pessoas, não necessariamente invadindo o servidor.' },
      { term: 'Segundo fator (2FA)', definition: 'Prova extra além da senha, como código no celular, para autenticar o usuário.' },
      { term: 'Titular', definition: 'Pessoa natural a quem se referem os dados pessoais (LGPD).' },
    ],
    masteryCriteria: [
      'Definir cada letra do CID com exemplo de ofício ou frequência.',
      'Diferenciar vírus, worm, trojan, ransomware e spyware.',
      'Diferenciar phishing, spear phishing, smishing e vishing.',
      'Classificar CPF, e-mail, atestado médico e biometria em pessoal ou sensível.',
      'Descrever senha, MFA, Win+L, backup, proteção física/digital e descarte seguro no expediente.',
    ],
    questionIds: ['inf-q36', 'inf-q37', 'inf-q38', 'inf-q39', 'inf-q40'],
  }),
]
