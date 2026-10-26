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
        'Pense em quatro camadas. 1) Hardware: o equipamento. 2) Firmware: programa de inicialização. 3) Sistema operacional: Windows 11 ou Ubuntu, que oferece pasta, janela, impressora e conta de usuário. 4) Aplicativo: o Writer em que o agente redige o ofício. Licença é regra jurídica de uso do software; não altera o fato de o programa ser software.',
      ),
      named(
        'O que o edital realmente cobra',
        'O Anexo IV (pp. 66-67) pede fundamentos de informática: hardware e software; software livre e software proprietário. Não cobra engenharia de compiladores nem história completa do movimento GNU. Cobra saber classificar um exemplo e não chamar LibreOffice de hardware nem Windows de “software livre porque veio instalado”.',
      ),
      named(
        'Software de sistema, aplicativo e utilitário',
        'Sistema operacional controla recursos. Aplicativo atende o usuário final (editor de texto, planilha, correio). Utilitário faz manutenção (compactação .zip, antivírus). Compactador e antivírus são software; o pendrive no qual se copia o backup é hardware de armazenamento.',
      ),
    ],
    aprofundamento: [
      named(
        'Licenças que aparecem em texto de prova',
        'GPL e licenças semelhantes marcam software livre/código aberto. EULA (contrato de licença) é típica de software proprietário. Código aberto (open source) e software livre não são conceitos idênticos em filosofia, mas nas provas de nível médio costumam caminhar juntos frente ao proprietário. Não afirme que todo programa da Google ou da Microsoft é livre só porque há versões web gratuitas.',
      ),
      named(
        'O que este programa de nível médio não exige',
        'Não é o programa de Informática de nível superior: não se cobra arquitetura de microprocessador em profundidade, nem comparação jurídica completa de licenças. Se a questão pedir “parte física versus programa” ou “livre versus proprietário”, responda nesse nível.',
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
      'Se for software, pergunte se o código pode ser estudado e redistribuído livremente. Se a banca citar Windows, Office Microsoft ou Chrome, pense em proprietário.',
      'Não use “veio de graça no computador da prefeitura” como critério de software livre.',
    ],
    commonErrors: [
      'Chamar o arquivo do ofício de hardware.',
      'Dizer que LibreOffice é hardware porque “é o programa do computador”.',
      'Tratar software gratuito (freeware) como necessariamente livre.',
      'Afirmar que Windows é livre porque o município “já pagou a licença”.',
    ],
    traps: [
      'A banca lista Firefox, Writer e Ubuntu no meio de itens de hardware para induzir classificação errada.',
      '“Programa gravado na placa-mãe” é firmware, não aplicativo de escritório.',
      'Google Docs/Drive são serviços; o Chrome continua sendo navegador proprietário.',
    ],
    relatedLessonIds: ['inf-componentes', 'inf-arquivos-unidades', 'inf-windows-linux'],
    relatedEditalItems: ['Fundamentos de informática: Hardware e software; software livre e software proprietário'],
    synthesis:
      'Hardware é a máquina; software é o programa. Livre e proprietário distinguem-se pelas liberdades sobre o código, não pelo preço. No expediente, impressora e scanner são hardware; Word, Writer, Windows e Ubuntu são software.',
    glossary: [
      { term: 'Sistema operacional', definition: 'Software de sistema que gerencia hardware, arquivos, contas e a execução dos aplicativos.' },
      { term: 'Aplicativo', definition: 'Software voltado à tarefa do usuário, como editor de texto ou planilha.' },
      { term: 'Licença de uso', definition: 'Condições legais sob as quais se pode instalar e usar um programa.' },
    ],
    masteryCriteria: [
      'Classificar, em lista mista, o que é hardware, software e firmware.',
      'Dar dois exemplos de software livre e dois de proprietário previstos no próprio edital.',
      'Explicar por que “gratuito” não prova que o programa é livre.',
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
    prerequisites: ['inf-hardware-software'],
    essencial: [
      named(
        'Unidade central e placa-mãe',
        'A placa-mãe interliga os componentes. O processador (CPU) executa instruções. O cooler dissipa calor. Fonte de alimentação converte energia. Sem esses elementos o computador da estação de atendimento não liga. A questão de concurso costuma pedir a função, não a marca.',
      ),
      named(
        'Memória e armazenamento não são a mesma coisa',
        'Memória RAM é volátil: guarda o que está em uso (o ofício aberto) e se apaga ao desligar. ROM/UEFI guarda a rotina de arranque e não se apaga ao desligar. Armazenamento permanente fica em HD (disco magnético), SSD (memória flash, em geral mais rápido e silencioso), pendrive, cartão SD, CD/DVD ou na nuvem. HD e SSD são dispositivos de armazenamento, não de entrada como o teclado.',
      ),
      named(
        'Entrada, saída e mistos',
        'Entrada (input): teclado, mouse, scanner, microfone, webcam, leitor de código de barras. Saída (output): monitor, impressora, caixas de som, projetor, fone. Entrada e saída: tela sensível ao toque, impressora multifuncional com scanner, headset com microfone, modem/placa de rede (comunicação). O HD/SSD armazena; não chame disco de “dispositivo de entrada” só porque “entra dado nele”.',
      ),
    ],
    completo: [
      named(
        'Impressora no serviço público',
        'Matricial ainda aparece em alguns textos antigos (formulário contínuo). Jato de tinta e laser são as comuns. Multifuncional imprime, digitaliza e às vezes envia fax: é dispositivo misto. Plotter é saída de grande formato (plantas). A impressão de um ofício é saída; a digitalização do protocolo é entrada via scanner.',
      ),
      named(
        'GPU, monitor e qualidade de imagem',
        'A placa de vídeo (integrada ou dedicada) gera a imagem enviada ao monitor. Resolução e polegadas descrevem o monitor (saída). Não confunda pixel do monitor com byte do disco.',
      ),
      named(
        'Rede como periférico de comunicação',
        'Placa de rede, roteador e switch não são “armazenamento”. Eles transportam dados. O servidor de arquivos da prefeitura é computador com armazenamento; o cabo que chega à mesa do agente é comunicação.',
      ),
    ],
    aprofundamento: [
      named(
        'Unidades que a banca mistura com este tópico',
        'Capacidade do disco vem em GB ou TB; velocidade da RAM em MHz ou GT/s; clock da CPU em GHz. Um arquivo de 3 MB de ofício cabe milhares de vezes em um SSD de 256 GB. Detalhes de pipeline da CPU estão fora do programa de nível médio.',
      ),
    ],
    revisaoRapida: blocks(
      'CPU executa. RAM é volátil. HD/SSD armazenam de forma persistente.',
      'Entrada: teclado, mouse, scanner, mic, webcam. Saída: monitor, impressora, som, projetor.',
      'Multifuncional e touchscreen são entrada e saída. Disco não é teclado.',
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
        rightLabel: 'HD / SSD / pendrive',
        rows: [
          { label: 'Persistência', left: 'Perde o conteúdo ao desligar', right: 'Mantém arquivos depois de desligar' },
          { label: 'Uso típico', left: 'Ofício aberto no Word/Writer', right: 'Arquivo salvo na pasta do protocolo' },
          { label: 'Classificação', left: 'Memória principal', right: 'Armazenamento secundário' },
        ],
      },
    ],
    examples: [
      'Digitando a ata: teclado (entrada), texto na RAM, arquivo no SSD, folha na impressora (saída).',
      'Webcam em videoconferência da secretaria: entrada de imagem; alto-falante: saída de áudio.',
      'Pendrive levando a planilha de frequência para outra estação: armazenamento portátil.',
    ],
    publicAdminExamples: [
      'No protocolo, o cidadão entrega documento em papel; o servidor digitaliza no scanner (entrada) e imprime o comprovante (saída).',
      'A listagem de frequência do mês fica no SSD da estação ou em pasta de rede, não “na RAM da impressora”.',
      'Projetor na reunião do gabinete é saída; o notebook que envia o slide é o computador com CPU, RAM e disco.',
    ],
    procedures: [
      'Leia o verbo da questão: executar (CPU), guardar temporariamente (RAM), guardar arquivo (HD/SSD), capturar (entrada), exibir/imprimir (saída).',
      'Se o aparelho faz as duas pontas (multifuncional, touch), classifique como entrada e saída.',
      'Não use velocidade (“é mais rápido”) como único critério para dizer o que é RAM.',
    ],
    commonErrors: [
      'Classificar HD como memória RAM.',
      'Chamar monitor de dispositivo de entrada.',
      'Chamar teclado de armazenamento.',
      'Dizer que pendrive é software.',
    ],
    traps: [
      'Impressora multifuncional cobrada só como “saída”: está incompleto.',
      '“Memória do computador” no enunciado pode ser RAM ou disco; leia o restante da frase (volátil? arquivo salvo?).',
      'Nuvem é armazenamento remoto, não periférico de entrada.',
    ],
    relatedLessonIds: ['inf-hardware-software', 'inf-arquivos-unidades', 'inf-nuvem'],
    relatedEditalItems: ['Componentes do computador e dispositivos de entrada, saída e armazenamento'],
    synthesis:
      'CPU processa, RAM segura o trabalho aberto, disco guarda o arquivo. Periféricos se classificam pela direção do dado: entra, sai ou os dois. No protocolo, scanner entra, impressora sai, SSD guarda o PDF.',
    glossary: [
      { term: 'UEFI', definition: 'Interface de firmware que inicia o hardware antes do sistema operacional (sucessora prática da BIOS clássica).' },
      { term: 'Periférico misto', definition: 'Dispositivo que tanto envia dados ao computador quanto recebe dados dele.' },
    ],
    masteryCriteria: [
      'Separar CPU, RAM e HD/SSD por função.',
      'Montar uma lista de pelo menos quatro entradas e quatro saídas.',
      'Classificar multifuncional e tela de toque como mistos.',
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
    prerequisites: ['inf-hardware-software', 'inf-componentes'],
    essencial: [
      named(
        'Sistema operacional e aplicativo',
        'O sistema operacional (Windows 11 ou Ubuntu) oferece contas, pastas, permissões, impressão e a base para abrir programas. O aplicativo abre o tipo de arquivo que entende: Word/Writer para texto, Excel/Calc para planilha, PowerPoint/Impress para slide, navegador para PDF em muitos casos. Compactadores tratam .zip e .rar. Não é o Ubuntu “virar Excel”: é o Calc ou o Excel rodando sobre o sistema.',
      ),
      named(
        'Arquivo, pasta e extensão',
        'Arquivo é o conjunto de dados com nome e extensão. Pasta (diretório) organiza arquivos. A extensão sugere o tipo: .docx (Word), .odt (Writer), .xlsx (Excel), .ods (Calc), .pptx (PowerPoint), .odp (Impress), .pdf (portable, leitura ampla), .txt (texto simples), .jpg/.png (imagem), .mp3/.mp4 (mídia), .zip (compactado), .exe (executável Windows), .deb (pacote Ubuntu). Mudar só a extensão no nome não converte de verdade o formato; o aplicativo adequado e o comando Salvar como/Exportar convertem.',
      ),
      named(
        'Unidades da informação',
        'Bit é a menor unidade (0 ou 1). Byte agrupa 8 bits e equivale, na prática de concurso, a um caractere simples. Escala usual em prova: 1 KB = 1024 bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB. Fabricantes de disco às vezes usam 1000 decimal; a banca de nível médio quase sempre trabalha com 1024. Um ofício de 400 KB não “pesa 400 bits”.',
      ),
    ],
    completo: [
      named(
        'Caminho do arquivo',
        'No Windows 11 o caminho usa letra de unidade e barra invertida, por exemplo C:\\Protocolo\\2026\\oficio-014.docx. No Ubuntu não há C:; o caminho é /home/servidor/protocolo/2026/oficio-014.odt. A mesma ideia (hierarquia de pastas) aparece nos dois sistemas, com sintaxe diferente. Tratar os dois como idênticos é erro cobrado nesta plataforma e alinhado ao edital, que nomeia Windows 11 e Linux Ubuntu.',
      ),
      named(
        'PDF no expediente',
        'PDF preserva a aparência do ofício para protocolo, publicação e e-mail. Gera-se por Exportar/Salvar como PDF, não por renomear .docx para .pdf. PDF pode ser assinado digitalmente em fluxos oficiais; isso é o arquivo, não o hardware da impressora.',
      ),
    ],
    aprofundamento: [
      named(
        '1024 e 1000',
        'Na notação internacional, KiB (kibibyte) = 1024 bytes e kB pode ser 1000. Concursos brasileiros de nível médio raramente usam KiB. Se a conta for 2 × 1024 = 2048, a banca está no padrão binário. Não traga essa disputa para uma questão que só pede “8 bits formam 1 byte”.',
      ),
    ],
    revisaoRapida: blocks(
      '8 bits = 1 byte. KB → MB → GB → TB de 1024 em 1024 na conta clássica de prova.',
      '.docx Word, .odt Writer, .xlsx Excel, .ods Calc, .pptx PowerPoint, .odp Impress, .pdf leitura ampla.',
      'Windows 11: C:\\pasta\\arquivo. Ubuntu: /home/usuario/pasta/arquivo. Não são o mesmo caminho.',
    ),
    definitions: [
      { term: 'Bit', definition: 'Menor unidade de informação, valor 0 ou 1.' },
      { term: 'Byte', definition: 'Conjunto de 8 bits.' },
      { term: 'Extensão', definition: 'Sufixo do nome do arquivo que indica o formato (.pdf, .odt, .xlsx).' },
      { term: 'Pasta', definition: 'Contêiner lógico que organiza arquivos e outras pastas.' },
    ],
    comparisons: [
      {
        title: 'Extensões dos pacotes do edital',
        leftLabel: 'Microsoft',
        rightLabel: 'LibreOffice',
        rows: [
          { label: 'Texto', left: '.docx (legado .doc)', right: '.odt' },
          { label: 'Planilha', left: '.xlsx (legado .xls)', right: '.ods' },
          { label: 'Apresentação', left: '.pptx (legado .ppt)', right: '.odp' },
        ],
      },
    ],
    examples: [
      'Planilha de frequência mensal: frequencia-outubro.xlsx ou frequencia-outubro.ods.',
      'Ofício n. 014/2026: oficio-014.docx ou oficio-014.odt, depois oficio-014.pdf para o protocolo.',
      'Foto da visita técnica: visita.jpg (alguns megabytes); não se mede em bits na conversa da banca.',
    ],
    publicAdminExamples: [
      'A pasta 2026/Protocolo no servidor de arquivos guarda PDFs dos processos; a extensão .pdf sinaliza o formato de tramitação.',
      'Enviar a planilha de frequência em .exe seria absurdo e perigoso: executável não é planilha.',
      'Compactar dezenas de ofícios em .zip reduz o tamanho do anexo de e-mail institucional.',
    ],
    procedures: [
      'Identifique a extensão antes de escolher o programa.',
      'Para trocar formato, use Salvar como ou Exportar, não o clique lento no nome só para escrever outra extensão.',
      'Na conta de unidades, grave 8 bits = 1 byte e a escada 1024.',
    ],
    commonErrors: [
      'Achar que .odt abre só no Word.',
      'Dizer que 1 byte tem 1024 bits.',
      'Tratar .pdf como exclusivo do PowerPoint.',
      'Igualar caminho C:\\ ao caminho /home sem ressalva.',
    ],
    traps: [
      'Listar .xls como “extensão do Word”.',
      'Perguntar a menor unidade e colocar byte nas alternativas para pegar quem esquece o bit.',
      'Afirmar que mudar a extensão converte o arquivo.',
    ],
    relatedLessonIds: ['inf-windows-linux', 'inf-texto', 'inf-planilha', 'inf-apresentacao'],
    relatedEditalItems: ['Sistemas operacionais e programas aplicativos. Tipos e extensões de arquivos. Unidades de medida da informação'],
    synthesis:
      'O sistema operacional hospeda os aplicativos; a extensão aponta o tipo de arquivo; bit e byte medem informação. Windows 11 e Ubuntu organizam pastas de modos diferentes. PDF é o formato de tramitação mais comum do ofício já concluído.',
    glossary: [
      { term: 'Executável', definition: 'Arquivo de programa (.exe no Windows; pacotes .deb são instalação no Ubuntu, não documento de ofício).' },
      { term: 'Compactação', definition: 'Redução de tamanho para transporte ou arquivo morto (.zip).' },
    ],
    masteryCriteria: [
      'Recitar 8 bits = 1 byte e a ordem KB, MB, GB, TB.',
      'Casar cada programa do edital com sua extensão padrão.',
      'Diferenciar caminho de pasta no Windows 11 e no Ubuntu.',
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
    prerequisites: ['inf-arquivos-unidades'],
    essencial: [
      named(
        'O edital nomeia versões',
        'O programa pede sistemas operacionais Windows 11 e Linux Ubuntu. Atalhos e nomes de Windows 10 (como “Painel de Controle como tela principal” ou “Live Tiles”) não devem ser copiados às cegas. Ubuntu usa, nas estações típicas, o ambiente GNOME: Super (tecla Windows física) abre a Visão de Atividades, não o menu Iniciar do Windows 11.',
      ),
      named(
        'Windows 11 — o que muda na prática da mesa',
        'Menu Iniciar e ícones da barra de tarefas vêm centralizados por padrão (podem ser alinhados à esquerda). Não há Live Tiles. As Configurações (Win+I) são o caminho principal; o Painel de Controle clássico ainda existe, mas não é a interface de capa. Explorador de Arquivos (Win+E) passou a ter abas (22H2). Área de trabalho: Win+D. Bloquear: Win+L. Executar: Win+R. Menu de usuário avançado: Win+X. Área de transferência com histórico: Win+V. Recorte: Win+Shift+S. Ajustar janelas em layouts: Win+Z (Snap Layouts). Widgets: Win+W. Notificações: Win+N. Configurações rápidas (rede, som): Win+A. Desktops virtuais: Win+Ctrl+D cria, Win+Ctrl+F4 fecha, Win+Ctrl+setas troca. Gerenciador de Tarefas: Ctrl+Shift+Esc.',
      ),
      named(
        'Ubuntu — a mesma tarefa, outra lógica',
        'Super abre Atividades (pesquisa de aplicativos e workspaces). Ctrl+Alt+T abre o Terminal. O gerenciador de arquivos chama-se Arquivos (Nautilus), sem letra C:. A pasta do usuário é /home/nome. Aplicativos instalam-se pela Central de Aplicativos / App Center ou por pacotes .deb e apt no terminal. Privilégio administrativo usa sudo, não “Executar como administrador” do Windows. A Lixeira existe, mas não se chama Lixeira de Reciclagem. Alt+F2 executa um comando. Workspaces (áreas de trabalho) são nativos do GNOME. Impressão passa por Configurações > Impressoras (CUPS por baixo), não pelo mesmo painel do Windows 11.',
      ),
    ],
    completo: [
      named(
        'Arquivos e atalhos que coincidem em parte',
        'Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Alt+Tab e Alt+F4 (fechar janela) funcionam nos dois ambientes em situações típicas de desktop. Isso não unifica o restante. Pesquisar arquivo no Windows 11: caixa de pesquisa da barra ou Win+S. No Ubuntu: Super e digitar, ou busca no aplicativo Arquivos. Excluir para a lixeira: Delete; permanente: Shift+Delete (Windows 11) — no Ubuntu Delete vai à lixeira e Shift+Delete também pode excluir em definitivo, conforme o gerenciador.',
      ),
      named(
        'Contas, rede e impressão',
        'Windows 11: conta local ou conta Microsoft; Configurações > Contas e > Bluetooth e dispositivos > Impressoras. Ubuntu: usuários e grupos nas Configurações; impressora nas Configurações de sistema. Mapear pasta de rede no Windows 11 usa UNC (\\\\servidor\\protocolo) e letra de unidade. No Ubuntu monta-se o compartilhamento em um ponto de montagem sob /run ou /mnt, sem letra.',
      ),
      named(
        'Acessibilidade',
        'Windows 11: Configurações > Acessibilidade (lupa Win++, narrador, alto contraste, teclado virtual). Ubuntu: Configurações > Acessibilidade com lupa, leitor de tela Orca, alto contraste e teclado na tela. São percursos distintos; o objetivo (incluir o servidor com deficiência visual ou motora no atendimento) é o mesmo.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não copiar do Windows 10',
        'Cortana como centro do sistema, Live Tiles e “central de ações” no formato antigo não descrevem o Windows 11. Win+A no 11 abre Configurações rápidas, não o mesmo painel do 10. Questão que disser expressamente Windows 11 deve ser respondida com o 11.',
      ),
      named(
        'Terminal no Ubuntu sem transformar a prova em curso de redes',
        'ls lista, cd muda pasta, mkdir cria diretório, cp copia, mv move, rm apaga. Isso basta para o nível médio. Não é programa de administração GNU/Linux de cargo de TI.',
      ),
    ],
    revisaoRapida: blocks(
      'Windows 11: Win+E explorador, Win+I configurações, Win+D área de trabalho, Win+L bloquear, Win+Z snap, Win+V área de transferência.',
      'Ubuntu: Super = Atividades; Ctrl+Alt+T = terminal; /home/usuario; sudo; sem C:.',
      'Ctrl+C/V e Alt+Tab se parecem; menu, caminho de pasta, instalação de programa e impressão não são iguais.',
    ),
    definitions: [
      { term: 'Área de trabalho', definition: 'Tela base com ícones, painel/barra e fundo, a partir da qual se abrem janelas.' },
      { term: 'Explorador de Arquivos', definition: 'Aplicativo do Windows 11 para pastas e arquivos (Win+E).' },
      { term: 'Arquivos (Nautilus)', definition: 'Gerenciador de arquivos padrão do Ubuntu GNOME.' },
      { term: 'Desktop virtual / workspace', definition: 'Área de trabalho extra para organizar janelas; existe nos dois sistemas com atalhos diferentes.' },
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
          { label: 'Lixeira', left: 'Lixeira', right: 'Lixeira (Trash)' },
          { label: 'Executável típico', left: '.exe', right: 'binários e pacotes .deb' },
        ],
      },
    ],
    examples: [
      'Windows 11: Win+E e criar a pasta Protocolo\\2026 na unidade C: ou no OneDrive.',
      'Ubuntu: Super, digitar “Arquivos”, ir a /home/servidor/protocolo/2026.',
      'Os dois imprimem o ofício, mas o diálogo de impressora não é o mesmo aplicativo.',
    ],
    publicAdminExamples: [
      'Estação do protocolo em Windows 11: o agente bloqueia com Win+L ao sair para o atendimento no balcão.',
      'Laboratório ou setor com Ubuntu: o agente abre o terminal só se precisar; o cotidiano é o aplicativo Arquivos e o LibreOffice.',
      'Mapear \\\\arquivo\\frequencia no Windows 11 como unidade F:; no Ubuntu o mesmo compartilhamento SMB aparece montado em pasta, sem F:.',
    ],
    procedures: [
      'Leia se a questão diz Windows 11 ou Ubuntu. Se disser um, não responda com o atalho exclusivo do outro.',
      'No Windows 11, prefira Configurações (Win+I) a “Painel de Controle” como resposta de capa.',
      'No Ubuntu, recorde Super e Ctrl+Alt+T e a ausência de letra de unidade.',
    ],
    commonErrors: [
      'Usar atalho de Windows 10 como se fosse garantia no 11 (ex.: descrever Live Tiles).',
      'Dizer que Ubuntu tem C: e Explorador de Arquivos da Microsoft.',
      'Afirmar que sudo e UAC são o mesmo comando.',
      'Tratar GNOME Atividades como menu Iniciar idêntico.',
    ],
    traps: [
      'Win+D (mostrar área de trabalho) versus Win+E (explorador) versus Win+L (bloquear).',
      'Win+Z no Windows 11 (layouts) cobrado como se fosse “desfazer”.',
      'Questão de Ubuntu com alternativas em .exe.',
    ],
    relatedLessonIds: ['inf-arquivos-unidades', 'inf-texto', 'inf-nuvem'],
    relatedEditalItems: ['Sistemas operacionais (Windows 11 e Linux Ubuntu)'],
    synthesis:
      'Windows 11 e Ubuntu cumprem o mesmo papel de sistema operacional e não compartilham o mesmo mapa de atalhos, pastas e instalação. A prova que nomeia um deles espera o vocabulário daquele sistema.',
    glossary: [
      { term: 'UAC', definition: 'Controle de conta de usuário do Windows, que pede confirmação para tarefas administrativas.' },
      { term: 'sudo', definition: 'Comando do Ubuntu/Linux que executa uma ação com privilégio de administrador, após senha.' },
      { term: 'Snap Layouts', definition: 'Recurso do Windows 11 (Win+Z) para encaixar janelas em posições predefinidas.' },
    ],
    masteryCriteria: [
      'Citar cinco atalhos com Win+ no Windows 11 e o efeito de cada um.',
      'Citar Super, Ctrl+Alt+T, /home e sudo no Ubuntu.',
      'Explicar uma diferença de caminho de arquivo e uma de instalação de programa.',
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
    prerequisites: ['inf-windows-linux'],
    essencial: [
      named(
        'Mesma tarefa, programas distintos',
        'Word (Microsoft, formato padrão .docx) e Writer (LibreOffice, formato padrão .odt) redigem ofício, memorando, ata e requerimento. Ambos têm estilos, tabelas, cabeçalho, rodapé, notas, mala direta, revisão e exportação em PDF. Não são o mesmo software: menus, alguns atalhos de estilo e o arquivo nativo diferem. Writer abre e grava .docx com compatibilidade boa, não perfeita (SmartArt, certos campos). Word abre .odt com a mesma ressalva.',
      ),
      named(
        'O que é igual ou quase igual',
        'Ctrl+N novo, Ctrl+O abrir, Ctrl+S salvar, Ctrl+P imprimir, Ctrl+Z desfazer, Ctrl+Y refazer, Ctrl+C/X/V, Ctrl+A selecionar tudo, Ctrl+B negrito, Ctrl+I itálico, Ctrl+U sublinhado, Ctrl+L esquerda, Ctrl+E centro, Ctrl+R direita, Ctrl+J justificar, Ctrl+K hiperlink, Ctrl+Enter quebra de página, Shift+Enter quebra de linha, Ctrl+F localizar. Esses atalhos coincidem no uso cotidiano em português do Brasil e caem em prova como “comando comum”.',
      ),
      named(
        'O que é diferente (cobrado para não tratar como idênticos)',
        'Estilo Título 1: Word usa Ctrl+Alt+1; Writer usa Ctrl+1. Título 2: Word Ctrl+Alt+2; Writer Ctrl+2. Título 3: Word Ctrl+Alt+3; Writer Ctrl+3. Parágrafo padrão: Writer Ctrl+0; Word aplica o estilo Normal (atalho clássico Ctrl+Shift+N). Painel de estilos: Writer F11; Word painel Estilos (Ctrl+Alt+Shift+S). Navegador de documentos: Writer F5; Word tem Painel de Navegação. Localizar e substituir: ambos Ctrl+H. Exportar PDF: Writer tem Arquivo > Exportar como PDF nativo, com opções de PDF/A; Word usa Arquivo > Salvar como / Exportar > PDF. Mala direta: Word aba Correspondências; Writer Ferramentas > Assistente de mala direta e campos em Inserir. Controle de alterações: Word Revisão > Controlar Alterações; Writer Editar > Controlar alterações. Word tem SmartArt; Writer não — usa Galeria, Fontwork e desenho.',
      ),
    ],
    completo: [
      named(
        'Estilos vencem formatação manual no ofício',
        'Título, corpo e recuo devem vir de estilo (Normal/Corpo de texto, Título 1). Assim o sumário, a numeração e a troca de fonte da secretaria se propagam. Pintar fonte ponto a ponto quebra o modelo institucional. No Writer, F11 mostra a lista; no Word, a galeria de estilos na guia Página Inicial.',
      ),
      named(
        'Tabela, seção e PDF para o protocolo',
        'Tabela organiza assinaturas na lista de presença da reunião. Quebra de seção (Word: Layout > Quebras; Writer: Inserir > Mais quebras > Quebra manual) permite cabeçalho diferente na primeira página do ofício. O PDF enviado ao protocolo deve ser exportado, não fotografado da tela.',
      ),
      named(
        'Revisão',
        'Comentários e controlar alterações servem à minuta do despacho: o chefe sugere, o agente aceita ou rejeita. Ortografia: F7 nos dois. Não confunda “revisão do Word” com o histórico de versões da nuvem (isso é OneDrive/Drive).',
      ),
    ],
    aprofundamento: [
      named(
        'Interface do Writer',
        'O LibreOffice pode usar menus clássicos ou interface em abas (semelhante à faixa do Word). A existência de interface em abas não transforma Writer em Word: atalhos de Título 1 e o .odt continuam os do Writer.',
      ),
    ],
    revisaoRapida: blocks(
      'Iguais: Ctrl+N/O/S/P/B/I/U/E/L/R/J/K, Ctrl+Enter, Ctrl+F, Ctrl+H, F7.',
      'Diferentes: Título 1 Word Ctrl+Alt+1 × Writer Ctrl+1; estilos Writer F11; PDF nativo no Writer; mala direta em menus distintos; .docx × .odt.',
      'Ofício oficial: estilo + cabeçalho + PDF para protocolo.',
    ),
    definitions: [
      { term: 'Estilo', definition: 'Conjunto nomeado de fonte, tamanho, recuo e espaçamento aplicado a parágrafos ou caracteres.' },
      { term: 'Mala direta', definition: 'Mesclagem de um modelo de ofício/ofício-circular com uma lista de destinatários.' },
      { term: 'Controlar alterações', definition: 'Registro de inserções, exclusões e formatações para aceitar ou rejeitar na revisão.' },
    ],
    comparisons: [
      {
        title: 'Comandos semelhantes versus diferentes',
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
      'Circular a conselhos e lideranças: mala direta a partir da planilha de endereços.',
    ],
    publicAdminExamples: [
      'Modelo de ofício da Secretaria de Administração em .odt no laboratório Ubuntu e em .docx nas estações Windows 11.',
      'Lista de presença da sessão extraordinária: tabela no fim da ata, exportada em PDF para o protocolo.',
      'Minuta de despacho com controlar alterações antes da assinatura da autoridade.',
    ],
    procedures: [
      'Abra o modelo institucional, não um documento em branco sem estilos.',
      'Aplique Título e Corpo; evite mudar fonte letra a letra.',
      'Insira cabeçalho com brasão e numeração. Exporte PDF para tramitar.',
      'Se a questão citar Word ou Writer, use o atalho daquele programa.',
    ],
    commonErrors: [
      'Dizer que Ctrl+1 no Word é Título 1 (no Word clássico Título 1 é Ctrl+Alt+1).',
      'Afirmar que Writer não gera PDF.',
      'Tratar .odt e .docx como a mesma extensão.',
      'Confundir quebra de linha (Shift+Enter) com quebra de página (Ctrl+Enter).',
    ],
    traps: [
      'Perguntar “atalho de Título 1” sem dizer o programa — no edital os dois existem; a questão bem feita nomeia Word ou Writer.',
      'SmartArt como se existisse no Writer.',
      'F11 no Word cobrado como “estilos” (no Word F11 é outro comando; estilos do Writer é que usam F11).',
    ],
    relatedLessonIds: ['inf-planilha', 'inf-apresentacao', 'inf-arquivos-unidades'],
    relatedEditalItems: ['Editores de texto (Microsoft Word e LibreOffice Writer)'],
    synthesis:
      'Word e Writer resolvem o ofício com muitos atalhos iguais (negrito, salvar, PDF via exportação), mas diferem em arquivo nativo, Título 1, painel de estilos, mala direta e revisão. A prova que nomeia um deles não aceita o atalho exclusivo do outro.',
    glossary: [
      { term: 'PDF/A', definition: 'Perfil de PDF voltado a preservação de longo prazo, opção frequente na exportação do Writer e aceita em arquivos públicos.' },
      { term: 'Seção', definition: 'Parte do documento com formatação de página própria (margem, cabeçalho, colunas).' },
    ],
    masteryCriteria: [
      'Listar oito atalhos iguais nos dois programas.',
      'Contrastar Título 1, F11, .odt/.docx e o caminho de PDF.',
      'Descrever o fluxo ofício → PDF → protocolo.',
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
    prerequisites: ['inf-texto'],
    essencial: [
      named(
        'Célula, fórmula e arquivo',
        'Excel (Microsoft, .xlsx) e Calc (LibreOffice, .ods) organizam dados em linhas e colunas. Célula A1 é a interseção da coluna A com a linha 1. Fórmula começa com =. No Excel e no Calc em português do Brasil, os argumentos separam-se por ponto e vírgula: =SOMA(B2:B31) e =SE(C2="F";"falta";"ok"). Os dois programas entendem SOMA, MÉDIA, MÁXIMO, MÍNIMO, SE, CONT.SE, HOJE. PROCV procura valor na primeira coluna de um intervalo e devolve coluna à direita. Não são o mesmo software: atalho de referência absoluta e arquivo nativo diferem.',
      ),
      named(
        'Referências relativa, absoluta e mista',
        'A1 relativa: ao copiar para baixo vira A2. $A$1 absoluta: não se move. $A1 trava a coluna; A$1 trava a linha. No Excel, com o cursor sobre a referência, F4 cicla A1 → $A$1 → A$1 → $A1. No Calc o ciclo equivalente é Shift+F4. F4 sozinho no Calc não faz o mesmo papel (historicamente abre fontes de dados). Questão que citar Excel ou Calc deve levar essa diferença.',
      ),
      named(
        'Funções da planilha de frequência',
        '=CONT.SE(C2:C31;"F") conta faltas. =SE(C2="";"";SE(C2="F";1;0)) marca falta. =SOMA(D2:D31) totaliza. =MÉDIA(E2:E20) média de horas-extra. Gráfico de colunas ilustra faltas por setor. Congelar painéis: Excel guia Exibir > Congelar painéis; Calc Exibir > Congelar linhas e colunas — nomes parecidos, menus diferentes. Filtro: Excel Ctrl+Shift+L (ou Dados > Filtro); Calc Dados > Filtro automático.',
      ),
    ],
    completo: [
      named(
        'Copiar fórmula e formatos',
        'Alça de preenchimento copia a fórmula da frequência para os 31 dias. Formatação condicional pinta de vermelho quem teve mais de X faltas (Excel Início > Formatação condicional; Calc Formatar > Condicional). Isso é formato, não é função SOMA.',
      ),
      named(
        'Impressão e área de impressão',
        'Definir área de impressão evita mandar 20 colunas vazias ao setor de pessoal. Paisagem, cabeçalho com “Frequência — outubro/2026” e repetir linha de título em cada folha. Prefira o menu Arquivo > Imprimir se a versão do atalho variar.',
      ),
      named(
        'O que cada um não é',
        'Excel não é banco Access (.accdb). Calc não é Writer. Macros existem nos dois e estão no limite do programa de nível médio: saiba que automatizam tarefas, não crie VBA na prova.',
      ),
    ],
    aprofundamento: [
      named(
        'PROCV e seus limites',
        'PROCV(valor;intervalo;índice;falso) busca exata quando o último argumento é FALSO ou 0. A busca deve estar na primeira coluna do intervalo. PROCX/XLOOKUP é mais novo no Excel e pode não estar no Calc da estação; para o concurso de nível médio, PROCV e SE bastam.',
      ),
    ],
    revisaoRapida: blocks(
      '=SOMA =MÉDIA =SE =CONT.SE =PROCV. Argumentos no pt-BR com ponto e vírgula.',
      'Excel: F4 cicla $. Calc: Shift+F4 cicla $. Arquivos .xlsx × .ods.',
      'Planilha de frequência: um dia por linha, CONT.SE de faltas, congelar cabeçalho, imprimir em paisagem.',
    ),
    definitions: [
      { term: 'Célula', definition: 'Interseção de coluna e linha, identificada por endereço (B12).' },
      { term: 'Fórmula', definition: 'Expressão iniciada por = que calcula a partir de valores e referências.' },
      { term: 'Referência absoluta', definition: 'Endereço com $ que não se ajusta ao copiar a fórmula ($A$1).' },
    ],
    comparisons: [
      {
        title: 'Excel versus Calc',
        leftLabel: 'Microsoft Excel',
        rightLabel: 'LibreOffice Calc',
        rows: [
          { label: 'Arquivo nativo', left: '.xlsx', right: '.ods' },
          { label: 'Travar referência', left: 'F4 na fórmula', right: 'Shift+F4 na fórmula' },
          { label: 'Filtro', left: 'Ctrl+Shift+L / Dados > Filtro', right: 'Dados > Filtro automático' },
          { label: 'Congelar', left: 'Exibir > Congelar painéis', right: 'Exibir > Congelar linhas e colunas' },
          { label: 'Tabela dinâmica', left: 'Inserir > Tabela dinâmica', right: 'Inserir > Tabela dinâmica' },
        ],
      },
    ],
    examples: [
      '=SOMA(B2:B6) soma diárias de uma viagem a serviço.',
      '=SE(B2>=15;"plantão extra";"normal") em escala fictícia de horas.',
      '=CONT.SE(C:C;"F") total de faltas da lotação.',
    ],
    publicAdminExamples: [
      'Planilha de frequência mensal da Secretaria de Administração: colunas Data, Servidor, Turno, Presença (P/F), Observação.',
      'Mapa de diárias: SOMA do valor por servidor e MÉDIA por mês.',
      'Lista de processos protocolados: CONT.SE da coluna Situação igual a “em tramitação”.',
    ],
    procedures: [
      'Trave o cabeçalho (congelar) antes de descer os 31 dias.',
      'Escreva a fórmula na primeira linha de dados e copie a alça.',
      'Use $ na célula da meta de faltas para não “escorregar” ao copiar.',
      'Defina área de impressão e exporte PDF se a frequência for juntar ao processo.',
    ],
    commonErrors: [
      'Usar vírgula no lugar de ponto e vírgula nos argumentos em Excel pt-BR.',
      'Achar que F4 no Calc trava a referência.',
      'Copiar valor colado como texto (“13”) e estranhar a SOMA vazia.',
      'Chamar .ods de extensão do Excel.',
    ],
    traps: [
      'SOMA de intervalo com texto misturado: textos são ignorados, o que mascara erro de digitação.',
      'PROCV com último argumento verdadeiro (aproximado) em lista desordenada.',
      'Perguntar atalho de $ sem nomear Excel ou Calc.',
    ],
    relatedLessonIds: ['inf-texto', 'inf-apresentacao', 'inf-arquivos-unidades'],
    relatedEditalItems: ['Planilhas eletrônicas (Microsoft Excel e LibreOffice Calc)'],
    synthesis:
      'Excel e Calc calculam com =, SOMA, SE e CONT.SE e diferem em .xlsx/.ods e no atalho da referência absoluta (F4 × Shift+F4). A planilha de frequência é o exemplo mais útil do cargo: contar faltas, congelar cabeçalho e imprimir.',
    glossary: [
      { term: 'Alça de preenchimento', definition: 'Ponto no canto da célula que copia fórmulas ou séries.' },
      { term: 'Filtro automático', definition: 'Setas no cabeçalho para exibir só as linhas que atendem a um critério (faltas, lotação).' },
    ],
    masteryCriteria: [
      'Escrever SOMA, MÉDIA, SE e CONT.SE com ponto e vírgula.',
      'Dizer como travar $ no Excel e no Calc.',
      'Descrever uma planilha de frequência com total de faltas.',
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
    prerequisites: ['inf-texto'],
    essencial: [
      named(
        'Dois programas, um gênero',
        'PowerPoint (Microsoft, .pptx) e Impress (LibreOffice, .odp) criam slides. Ambos têm layouts (título, título+conteúdo), espaços reservados, imagens, tabela, gráfico, notas do orador, slide mestre, transições entre slides, animações de objeto, modo de apresentação e exportação PDF. Não são idênticos: o Designer/Ideias de Design é do PowerPoint; o Impress trabalha com Páginas mestre de forma mais explícita no painel. Atalho F5 inicia a apresentação do começo nos dois; Shift+F5 inicia do slide atual no PowerPoint e também no Impress recente.',
      ),
      named(
        'Slide mestre, transição e animação',
        'O que deve ser padrão da prefeitura (brasão, fonte, cores) vai no slide mestre (PowerPoint: Exibir > Slide mestre; Impress: Exibir > Mestre de slides). Transição é o efeito entre um slide e o seguinte. Animação é o efeito de um objeto dentro do slide. Trocar os dois nomes é pegadinha clássica. Excesso de efeito não é “mais oficial”.',
      ),
      named(
        'Modo apresentador, impressão e PDF',
        'O modo apresentador mostra o slide atual, o próximo e as notas no notebook do servidor, enquanto o projetor mostra só o slide. Impressão: slides, folhetos (vários por página) ou anotações. PDF ou .pptx/.odp para encaminhar a pauta da reunião. Durante o show: Esc sai; B escurece a tela (útil quando o debate começa); espaço ou seta avança.',
      ),
    ],
    completo: [
      named(
        'Layout versus tema',
        'Layout define a disposição das caixas (título em cima, lista à esquerda). Tema/design define cores e fontes. No PowerPoint a guia Design aplica o tema; no Impress Propriedades / Mestre. Copiar slide de outro arquivo pode trazer mestre alheio — no material da prefeitura, padronize.',
      ),
      named(
        'Inserir objetos',
        'Gráfico da frequência mensal pode vir colado da planilha (vínculo ou colagem). Tabela de pauta. Imagem do brasão no mestre, não em cada slide um a um. Vídeo pesa o arquivo; na reunião de gabinete prefira link se a rede aguentar, ou arquivo local testado.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o Impress não copia do PowerPoint',
        'Ideias de Design, Morph e alguns complementos 365 não têm equivalente direto. Fonte corporativa embutida depende do arquivo e da licença. Para o edital, basta não atribuir recurso exclusivo do PowerPoint ao Impress.',
      ),
    ],
    revisaoRapida: blocks(
      'F5 começa; Shift+F5 começa neste slide; Esc sai; B tela preta.',
      'Mestre = identidade visual. Transição = entre slides. Animação = no objeto.',
      '.pptx PowerPoint; .odp Impress; PDF para o processo.',
    ),
    definitions: [
      { term: 'Slide mestre', definition: 'Modelo que impõe fundo, fonte, brasão e caixas padrão a vários slides.' },
      { term: 'Transição', definition: 'Efeito visual na passagem de um slide para o seguinte.' },
      { term: 'Modo apresentador', definition: 'Visão do orador com notas e próximo slide, sem projetar isso ao público.' },
    ],
    comparisons: [
      {
        title: 'PowerPoint versus Impress',
        leftLabel: 'Microsoft PowerPoint',
        rightLabel: 'LibreOffice Impress',
        rows: [
          { label: 'Arquivo nativo', left: '.pptx', right: '.odp' },
          { label: 'Iniciar apresentação', left: 'F5 / Slide Show', right: 'F5 / Apresentação de slides' },
          { label: 'Mestre', left: 'Exibir > Slide mestre', right: 'Exibir > Mestre de slides' },
          { label: 'Design automático', left: 'Ideias de Design (365)', right: 'Não há equivalente direto' },
        ],
      },
    ],
    examples: [
      'Pauta da reunião de gabinete: 6 slides, um tema, sem transição em cubo 3D.',
      'Capacitação de protocolo: folhetos de 3 slides por página para os servidores.',
      'Gráfico de frequência colado do Calc/Excel no slide 4.',
    ],
    publicAdminExamples: [
      'Apresentação da prestação de contas simples da secretaria, com brasão no mestre e PDF anexo ao processo.',
      'Treinamento de atendimento ao público: notas do orador no modo apresentador, projetor só com o slide limpo.',
      'Sessão itinerante: arquivo .odp no Ubuntu do laboratório ou .pptx no notebook Windows 11 da equipe.',
    ],
    procedures: [
      'Defina o mestre (brasão, fonte) antes de criar 20 slides.',
      'Escolha layouts prontos; não desenhe caixas soltas em cada página.',
      'Teste F5 no projetor. Leve PDF de reserva.',
    ],
    commonErrors: [
      'Chamar transição de animação.',
      'Colocar o brasão manualmente em 15 slides em vez do mestre.',
      'Dizer que Impress não inicia com F5.',
      'Salvar apresentação oficial só em .exe.',
    ],
    traps: [
      'Shift+F5 versus F5.',
      'Extensão .odp atribuída ao PowerPoint.',
      'Modo apresentador confundido com “anotações impressas”.',
    ],
    relatedLessonIds: ['inf-texto', 'inf-planilha', 'inf-nuvem'],
    relatedEditalItems: ['Programas de apresentação (Microsoft PowerPoint e LibreOffice Impress)'],
    synthesis:
      'PowerPoint e Impress apresentam pauta e capacitação com F5, mestre e PDF, mas usam .pptx e .odp e não compartilham o Designer. Transição não é animação. No serviço público, o mestre carrega o brasão.',
    glossary: [
      { term: 'Espaço reservado', definition: 'Caixa do layout onde se clica para inserir título, texto ou objeto.' },
      { term: 'Folheto', definition: 'Impressão de vários slides por folha para distribuição.' },
    ],
    masteryCriteria: [
      'Distinguir F5, Shift+F5, mestre, transição e animação.',
      'Casar .pptx e .odp com o programa certo.',
      'Explicar por que o brasão vai no mestre da apresentação institucional.',
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
    prerequisites: ['inf-windows-linux'],
    essencial: [
      named(
        'Internet, intranet e WWW',
        'Internet é a rede mundial de redes. Intranet é a rede interna da prefeitura (sistemas de protocolo, pasta de frequência, wiki interna) acessível aos servidores autorizados, não ao público em geral. WWW (World Wide Web) é o serviço de páginas e hiperlinks sobre a internet, usando HTTP/HTTPS. E-mail e VPN não são “a WWW”, embora trafeguem na internet. URL reúne protocolo, servidor e caminho: https://www.itarema.ce.gov.br/protocolo.',
      ),
      named(
        'Os três navegadores do edital',
        'Google Chrome (proprietário, motor Chromium), Microsoft Edge (proprietário, também Chromium desde a versão atual) e Mozilla Firefox (software livre, motor Gecko). Por Chrome e Edge compartilharem motor, muitos atalhos coincidem. Firefox replica a maior parte, com diferenças na navegação privativa e nos downloads.',
      ),
      named(
        'Atalhos que a prova cobra',
        'Nos três, em Windows 11: Ctrl+T nova aba, Ctrl+W fecha aba, Ctrl+Shift+T reabre a última aba, Ctrl+L ou F6 barra de endereço, Ctrl+R ou F5 atualiza, Ctrl+F localizar, Ctrl+D favorito, Ctrl+H histórico. Downloads: Chrome e Edge usam Ctrl+J; Firefox no Windows também aceita Ctrl+J e tem Ctrl+Shift+Y para a biblioteca de downloads. Privativo: Chrome e Edge Ctrl+Shift+N (Incógnito / InPrivate); Firefox Ctrl+Shift+P. Limpar dados: Ctrl+Shift+Del nos três. Nova janela: Ctrl+N. Aba em segundo plano: Ctrl+clique no link.',
      ),
      named(
        'HTTPS',
        'HTTP transfere a página. HTTPS é HTTP sobre conexão criptografada (TLS). O S indica que o tráfego entre o navegador e o sítio tende a não ser lido em claro na rede. Cadeado ou indicador de “seguro” não prova que o sítio é honesto: um golpista também pode ter certificado. Ausência de HTTPS em página de login da prefeitura é sinal de alerta. Porta clássica: HTTP 80, HTTPS 443.',
      ),
    ],
    completo: [
      named(
        'Cookies, cache e privativo',
        'Cookie guarda pequeno dado do sítio (sessão do sistema de protocolo). Cache guarda cópias de arquivos para a página abrir mais rápido. Limpar cache não é o mesmo que desligar a intranet. Navegação privativa não grava histórico local e isola cookies da sessão; o servidor e a rede da prefeitura ainda veem o acesso. Não é anonimato.',
      ),
      named(
        'Busca e favoritos',
        'A barra de endereço dos três também pesquisa se o texto não for URL. Favoritos/marcadores organizam o Diário Oficial, o sistema de ponto e o webmail. Não marque sítio de banco “parecido” com o oficial. Extensões demais aumentam risco; no expediente, instale só o que a TI autorizar.',
      ),
    ],
    aprofundamento: [
      named(
        'O que o programa de nível médio não pede',
        'Não é ementa de redes do cargo superior: não se exige montar firewall de borda nem explicar handshake TLS em detalhes. Basta HTTPS versus HTTP, cookie versus cache e os três navegadores nomeados.',
      ),
    ],
    revisaoRapida: blocks(
      'Internet ≠ intranet ≠ WWW. HTTPS cifra o tráfego; não autentica a honestidade do dono do sítio.',
      'Ctrl+T aba, Ctrl+Shift+T reabre, Ctrl+L endereço, Ctrl+H histórico. Privativo: Chrome/Edge Ctrl+Shift+N; Firefox Ctrl+Shift+P.',
      'Ctrl+J downloads no Chrome e no Edge. Cookie = sessão; cache = cópia de arquivo.',
    ),
    definitions: [
      { term: 'URL', definition: 'Endereço do recurso na web (protocolo + servidor + caminho).' },
      { term: 'HTTPS', definition: 'HTTP com criptografia TLS entre o navegador e o servidor.' },
      { term: 'Cookie', definition: 'Pequeno dado guardado pelo navegador a pedido do sítio, em regra para sessão ou preferência.' },
      { term: 'Cache', definition: 'Cópia local de conteúdos da página para reabrir mais rápido.' },
    ],
    comparisons: [
      {
        title: 'Navegação privativa',
        leftLabel: 'Chrome e Edge',
        rightLabel: 'Firefox',
        rows: [
          { label: 'Atalho (Windows 11)', left: 'Ctrl+Shift+N', right: 'Ctrl+Shift+P' },
          { label: 'Nome', left: 'Incógnito / InPrivate', right: 'Janela privativa' },
          { label: 'Motor', left: 'Chromium', right: 'Gecko' },
        ],
      },
    ],
    examples: [
      'Abrir o portal da transparência em HTTPS e favoritar com Ctrl+D.',
      'Reabrir a aba do sistema de protocolo fechada por engano: Ctrl+Shift+T.',
      'Consultar o Diário Oficial em Firefox no Ubuntu e em Edge no Windows 11: a URL é a mesma.',
    ],
    publicAdminExamples: [
      'Intranet da prefeitura: sistema de protocolo acessível só na rede interna, mesmo que use página web.',
      'Site institucional https:// com informações ao cidadão: WWW sobre a internet.',
      'Atendimento: nunca pedir senha do Gov.br por página só com HTTP ou por link encurtado duvidoso.',
    ],
    procedures: [
      'Verifique HTTPS antes de digitar senha institucional.',
      'Use o navegador homologado pela TI da prefeitura quando houver norma interna.',
      'Limpe cache só se a página institucional estiver “quebrada” após atualização, não por hábito diário.',
    ],
    commonErrors: [
      'Dizer que intranet é a WWW mundial.',
      'Achar que HTTPS impede phishing.',
      'Usar Ctrl+Shift+N no Firefox como privativo.',
      'Confundir cookie com vírus.',
    ],
    traps: [
      'WWW como sinônimo absoluto de internet.',
      'Cadeado = sítio da prefeitura verdadeiro.',
      'Navegação privativa = IP invisível.',
    ],
    relatedLessonIds: ['inf-email', 'inf-nuvem', 'inf-seguranca'],
    relatedEditalItems: ['Internet e navegadores (Google Chrome, Microsoft Edge e Mozilla Firefox)'],
    synthesis:
      'Internet é a rede; intranet é a rede interna; WWW são as páginas. Chrome, Edge e Firefox compartilham boa parte dos atalhos e diferem no privativo (N versus P) e no motor. HTTPS protege o caminho, não o caráter do sítio.',
    glossary: [
      { term: 'HTTP', definition: 'Protocolo de transferência de páginas da web, sem cifra nativa.' },
      { term: 'Favorito / marcador', definition: 'Atalho gravado no navegador para reabrir uma URL.' },
    ],
    masteryCriteria: [
      'Definir internet, intranet e WWW sem trocar os três.',
      'Citar os atalhos de aba, histórico e privativo nos três navegadores.',
      'Explicar o que HTTPS garante e o que não garante.',
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
    prerequisites: ['inf-internet'],
    essencial: [
      named(
        'Três jeitos de usar o mesmo correio',
        'Microsoft Outlook é cliente (aplicativo Windows/Microsoft 365) e também serviço web (Outlook na web). Mozilla Thunderbird é cliente livre, comum no Ubuntu. Gmail é webmail (navegador) e também oferece IMAP/SMTP a clientes. Os três enviam Para, CC, CCO, assunto, corpo e anexo. Nenhum deles torna seguro um anexo .exe.',
      ),
      named(
        'Para, CC e CCO',
        'Para (To): destinatário principal, de quem se espera ação (o secretário que deve despachar). CC — com cópia: outros veem a mensagem e veem uns aos outros (útil para a chefia imediata ficar ciente). CCO — com cópia oculta (BCC): destinatários ocultos; cada um não vê o endereço dos demais. No expediente, lista de cidadãos ou de servidores em CCO evita expor e-mails pessoais (dado pessoal) e evita “responder a todos” em cadeia. CC não esconde ninguém. Encaminhar (Forward) envia cópia a novo destino; Responder (Reply) volta ao remetente; Responder a todos inclui Para e CC visíveis — perigoso em ofício circular.',
      ),
      named(
        'Protocolos na medida do nível médio',
        'SMTP envia. POP3 baixa a mensagem para o computador e, conforme a conta, pode tirá-la do servidor. IMAP mantém as pastas sincronizadas no servidor (o agente vê a mesma caixa no Outlook da estação e no webmail). Gmail na prática usa IMAP para clientes. Não se cobre aqui a tabela completa de portas do cargo de TI.',
      ),
    ],
    completo: [
      named(
        'Organização',
        'Pastas ou rótulos (Gmail usa marcadores em vez de pastas clássicas): Protocolo, Pessoal, Lixo eletrônico. Filtros/regras: mensagens da conta protocolo@ vão para a pasta. Estrela/sinalização para o ofício que vence hoje. Pesquisa por remetente e por anexo. Outlook: arquivo morto e caixa de entrada focada — não desligue a indexação se precisar achar e-mail antigo do superior.',
      ),
      named(
        'Anexo, spam e phishing por e-mail',
        'Anexo de ofício: PDF. Planilha de frequência: .xlsx/.ods. Desconfie de .exe, .js, .vbs, macro estranha em .doc/.xls e ZIP com nome “boleto-prefeitura”. Spam é mensagem em massa indesejada. Phishing é fraude que se passa por órgão público para roubar senha ou dado. O endereço visível pode ser falso; passe o mouse no remetente e no link antes de clicar.',
      ),
    ],
    aprofundamento: [
      named(
        'Netiqueta do serviço público',
        'Assunto claro (“Ofício 014/2026 — solicitação de frequência”). Não use conta pessoal para dado de servidor. Confirme o anexo antes de enviar ao protocolo. Cópia para a chefia em CC quando a norma interna pedir rastreabilidade, não em CCO, se a chefia precisa ser vista pelos demais.',
      ),
    ],
    revisaoRapida: blocks(
      'Para = ação. CC = ciente e visível. CCO = ciente e oculto.',
      'Outlook cliente Microsoft; Thunderbird cliente livre; Gmail webmail. IMAP sincroniza; POP3 tende a baixar.',
      'Responder a todos e anexo executável são as duas formas mais rápidas de errar no expediente.',
    ),
    definitions: [
      { term: 'CC', definition: 'Com cópia: destinatários visíveis a todos os demais da mensagem.' },
      { term: 'CCO', definition: 'Com cópia oculta: destinatários que recebem sem aparecer para os outros.' },
      { term: 'IMAP', definition: 'Protocolo que mantém a caixa sincronizada no servidor.' },
      { term: 'SMTP', definition: 'Protocolo de envio de mensagens.' },
    ],
    comparisons: [
      {
        title: 'Os três correios do edital',
        leftLabel: 'Uso típico',
        rightLabel: 'Observação de prova',
        rows: [
          { label: 'Outlook', left: 'Cliente Microsoft 365 / Windows 11', right: 'Não é o Gmail' },
          { label: 'Thunderbird', left: 'Cliente livre, frequente no Ubuntu', right: 'Software livre, não webmail' },
          { label: 'Gmail', left: 'Webmail no navegador', right: 'Pode ser lido também via IMAP no Thunderbird/Outlook' },
        ],
      },
    ],
    examples: [
      'Enviar o PDF do ofício ao secretário em Para e à assessoria em CC.',
      'Convocação de 40 servidores para capacitação: CCO para não vazar a lista de e-mails.',
      'Abrir no Thunderbird do Ubuntu a mesma conta IMAP que o colega abre no Outlook.',
    ],
    publicAdminExamples: [
      'Protocolo devolve ao cidadão o comprovante em PDF por e-mail, com assunto numerado.',
      'Planilha de frequência mensal vai em anexo só a destinatários da folha; demais, se necessário, em CCO.',
      'Não colocar o CPF de munícipes no corpo visível em CC amplo.',
    ],
    procedures: [
      'Preencha o assunto e anexe o PDF antes de escrever o “segue em anexo” no corpo.',
      'Decida Para / CC / CCO com a pergunta: quem age, quem vê, quem não pode ser exposto.',
      'Não clique em link de “desbloqueio de ponto eletrônico” sem conferir o domínio.',
    ],
    commonErrors: [
      'Usar CC quando o objetivo era ocultar a lista (o correto é CCO).',
      'Achar que CCO impede o destinatário oculto de ver o conteúdo — ele vê a mensagem, só não vê os outros ocultos.',
      'Tratar Thunderbird como serviço Google.',
      'Responder a todos em cadeia com dado de saúde de servidor.',
    ],
    traps: [
      'CC versus CCO com enunciado de “não revelar os endereços”.',
      'POP3 descrito como se sincronizasse pastas em todos os aparelhos.',
      'Gmail “não é correio eletrônico” — é, na forma de webmail.',
    ],
    relatedLessonIds: ['inf-internet', 'inf-nuvem', 'inf-seguranca'],
    relatedEditalItems: ['Correio eletrônico (Microsoft Outlook, Mozilla Thunderbird e webmails como Gmail)'],
    synthesis:
      'Outlook, Thunderbird e Gmail enviam a mesma mensagem com Para, CC e CCO. CC revela os endereços; CCO oculta. IMAP sincroniza; anexo executável e “responder a todos” são riscos do expediente.',
    glossary: [
      { term: 'Webmail', definition: 'Correio usado pelo navegador, como Gmail ou Outlook na web.' },
      { term: 'Anexo', definition: 'Arquivo enviado junto da mensagem (PDF de ofício, planilha de frequência).' },
    ],
    masteryCriteria: [
      'Distinguir Para, CC e CCO com exemplo de ofício circular.',
      'Situar Outlook, Thunderbird e Gmail (cliente versus webmail).',
      'Dizer por que IMAP é preferível a POP3 em estação compartilhada da secretaria.',
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
    prerequisites: ['inf-email', 'inf-windows-linux'],
    essencial: [
      named(
        'Armazenamento em nuvem',
        'Nuvem, neste programa, é guardar arquivo em servidor na internet com login, sincronização e compartilhamento. OneDrive (Microsoft) integra-se ao Windows 11 e ao Office. Google Drive integra-se ao Google Docs/Planilhas/Apresentações e ao Gmail. Os dois permitem pastas, versões, lixeira e links. Não são o mesmo serviço: permissões e o aplicativo de reunião associado mudam (Teams no mundo Microsoft; Meet no mundo Google). Arquivo só na nuvem continua sendo arquivo; a estação precisa de rede para abrir o que não estiver sincronizado offline.',
      ),
      named(
        'Permissões',
        'Leitor / visualizador: vê e em geral baixa, não edita. Comentador: sugere. Editor: altera. “Qualquer pessoa com o link” é aberto a quem receber a URL — inaceitável para planilha de frequência com CPF. “Restrito” / “pessoas específicas” é o padrão do expediente. Vincular prazo de validade ao link quando o serviço oferecer. Revogar acesso quando o estagiário sair.',
      ),
      named(
        'Teams, Meet e Zoom',
        'Microsoft Teams: chat, canais, arquivos (em geral no SharePoint/OneDrive) e reunião com agenda do Outlook. Google Meet: reunião a partir da conta Google, frequentemente pelo Gmail ou Calendar; não é o Drive, embora conviva com ele. Zoom: plataforma própria, reunião com ID e senha, sala de espera, compartilhamento de tela. Os três fazem videoconferência; não troque os nomes. Microfone mudo ao entrar, fundo estável e não projetar a tela que mostre processo sigiloso.',
      ),
    ],
    completo: [
      named(
        'Sincronização e conflito',
        'A pasta OneDrive no Windows 11 mostra arquivos na nuvem, locais ou “somente online”. Editar o mesmo ofício em duas estações sem rede gera cópia de conflito. No Drive, o Docs evita isso por edição simultânea. Calc/Excel clássico em arquivo .xlsx sincronizado é mais sujeito a conflito do que Planilhas Google.',
      ),
      named(
        'O que a nuvem não apaga',
        'Compartilhar o PDF do ofício público é diferente de subir atestado médico de servidor. Backup em nuvem não substitui controle de acesso. Desligar o computador não “apaga a nuvem”.',
      ),
    ],
    aprofundamento: [
      named(
        'Limite do programa',
        'Não se exige desenhar IaaS/PaaS/SaaS como em prova de TI superior. Se aparecer SaaS, pense “software pelo navegador” (o webmail, o Meet). O edital de nível médio lista os produtos: OneDrive, Google Drive, Teams, Meet e Zoom.',
      ),
    ],
    revisaoRapida: blocks(
      'OneDrive = Microsoft. Drive = Google. Permissão de editor ≠ link público.',
      'Teams (Microsoft), Meet (Google), Zoom (próprio): os três são reunião; arquivos longos ficam no Drive/OneDrive.',
      'Planilha de frequência com dado pessoal: compartilhe nominado, nunca “qualquer pessoa com o link”.',
    ),
    definitions: [
      { term: 'Computação em nuvem (uso deste edital)', definition: 'Uso de armazenamento e aplicativos hospedados em provedor, acessados pela rede com conta e permissões.' },
      { term: 'Sincronização', definition: 'Cópia recíproca entre a pasta local e o servidor para o arquivo aparecer nas estações da conta.' },
      { term: 'Sala de espera', definition: 'Recurso do Zoom (e equivalentes) que segura o participante até o anfitrião aceitar.' },
    ],
    comparisons: [
      {
        title: 'Reunião on-line do edital',
        leftLabel: 'Onde nasce',
        rightLabel: 'Arquivos típicos',
        rows: [
          { label: 'Microsoft Teams', left: 'Conta Microsoft / 365 / Outlook', right: 'OneDrive / SharePoint' },
          { label: 'Google Meet', left: 'Conta Google / Gmail', right: 'Google Drive / Docs' },
          { label: 'Zoom', left: 'Conta Zoom (pode ser só o convite)', right: 'Não substitui Drive/OneDrive' },
        ],
      },
    ],
    examples: [
      'Colocar o modelo de ofício na pasta OneDrive da secretaria, com edição só para a equipe de gabinete.',
      'Reunião de alinhamento da frequência no Meet, com a planilha aberta no Drive em modo comentário para os chefes de setor.',
      'Capacitação com inscritos externos no Zoom, sala de espera ligada.',
    ],
    publicAdminExamples: [
      'Pasta “Protocolo 2026” no Drive restrita aos agentes do setor; o cidadão não recebe o link interno.',
      'Teams da Administração para a reunião semanal de pauta, com ata depois salva em PDF no OneDrive.',
      'Não gravar a reunião que discute dado de saúde de servidor e jogar o MP4 em link público.',
    ],
    procedures: [
      'Antes de compartilhar, olhe o nome da pasta e se há CPF, atestado ou senha dentro.',
      'Escolha pessoas específicas. Teste o link em janela privativa: se abrir sem login, está aberto demais.',
      'Na reunião, mute, compartilhe só a janela do slide, não a área de trabalho com o e-mail aberto.',
    ],
    commonErrors: [
      'Tratar Meet como produto Microsoft.',
      'Achar que OneDrive só existe no celular.',
      'Link “qualquer pessoa” em planilha de pessoal.',
      'Dizer que Zoom armazena automaticamente todos os ofícios da prefeitura.',
    ],
    traps: [
      'Google Docs citado como se fosse o único “Google Drive”. Docs é editor; Drive é o disco.',
      'Teams confundido com Zoom só porque ambos têm câmera.',
      'Arquivo “na nuvem” tratado como se não pudesse vazar.',
    ],
    relatedLessonIds: ['inf-email', 'inf-seguranca', 'inf-windows-linux'],
    relatedEditalItems: ['Comunicação, colaboração e armazenamento em nuvem'],
    synthesis:
      'OneDrive e Google Drive guardam e compartilham; a permissão certa é o que impede o vazamento da frequência. Teams, Meet e Zoom fazem a reunião e não são intercambiáveis pelo nome. Dado de administrado não vai em link público.',
    glossary: [
      { term: 'Link de compartilhamento', definition: 'URL que abre o arquivo conforme a permissão (restrito ou público).' },
      { term: 'Somente online', definition: 'Arquivo visível na pasta local mas baixado só ao abrir, economizando disco.' },
    ],
    masteryCriteria: [
      'Associar OneDrive/Teams à Microsoft e Drive/Meet ao Google.',
      'Escolher permissão adequada para planilha com dado pessoal.',
      'Citar um cuidado de videoconferência (sala de espera, não compartilhar a área de trabalho inteira).',
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
    prerequisites: ['inf-internet', 'inf-email', 'inf-nuvem'],
    sourceIds: ['src-edital', 'src-didatico', 'src-lgpd'],
    essencial: [
      named(
        'CID — confidencialidade, integridade, disponibilidade',
        'Confidencialidade: só quem pode ver vê (ofício sigiloso não vai em CC amplo nem em link público). Integridade: o conteúdo não foi alterado na surdina (PDF do protocolo não pode ser trocado por versão falsificada). Disponibilidade: o sistema de ponto e a pasta da frequência estão acessíveis quando o expediente precisa (ataque, disco quebrado ou senha perdida derrubam a disponibilidade). Autenticação (senha, segundo fator) sustenta as três. Backup protege sobretudo integridade e disponibilidade.',
      ),
      named(
        'Malware (programas maliciosos)',
        'Vírus: infecta arquivo e precisa de um hospedeiro para se espalhar. Worm (verme): propaga-se pela rede com menos dependência de um arquivo aberto. Cavalo de Troia (trojan): parece útil (instalador de “driver da impressora”) e abre porta ao atacante. Ransomware: cifra os arquivos e pede resgate — a pasta do protocolo fica ilegível. Spyware: espiona. Adware: propaganda abusiva. Keylogger: captura teclas (senha do webmail). Rootkit: esconde-se no sistema. Botnet: máquina zumbida. Antivírus e atualização reduzem risco; não substituem senha boa nem o bom senso no anexo. Firewall filtra tráfego; não é antivírus completo.',
      ),
      named(
        'Phishing e a família da engenharia social',
        'Phishing: mensagem ou página falsa que se passa por banco, Receita, prefeitura ou TI para furtar senha, token ou dado. Spear phishing: mira uma pessoa ou um cargo (“setor de protocolo de Itarema”). Clone phishing: copia um e-mail verdadeiro já enviado e troca o anexo/link. Smishing: SMS. Vishing: voz/telefone. Whaling: mira autoridade (secretário). Engenharia social é o guarda-chuva: manipula gente, não só código. A defesa do agente administrativo é conferir remetente, URL, urgência artificial (“seu ponto será cortado hoje”) e nunca informar senha por telefone.',
      ),
      named(
        'Dado pessoal e dado sensível (nível médio)',
        'A Lei nº 13.709/2018 (LGPD) entra neste programa só nas noções que o edital de informática de nível médio pede: proteção de dados pessoais e a distinção entre dado pessoal e dado sensível. Dado pessoal: informação relacionada a pessoa natural identificada ou identificável — nome, CPF, RG, e-mail, endereço, matrícula funcional quando identifica o servidor. Dado pessoal sensível: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico. Atestado médico na pasta de pessoal é sensível. Telefone do cidadão no protocolo é pessoal, em regra não sensível. Este curso não reproduz o programa de Informática de nível superior (bases legais completas, ANPD, RIPD, criptografia de disco, ISO 27001).',
      ),
    ],
    completo: [
      named(
        'Senha, segundo fator e atualização',
        'Senha longa e exclusiva para o webmail institucional. Segundo fator (aplicativo ou token) quando a prefeitura oferecer. Não reutilizar a senha do Gmail pessoal no Outlook da casa. Atualizar Windows 11 e Ubuntu: patch fecha buraco que malware explora. Conta com menor privilégio para o expediente diário; sudo ou administrador só para instalar o que a TI autorizar.',
      ),
      named(
        'Backup e o expediente',
        'Cópia da planilha de frequência em local distinto (servidor + nuvem institucional, não só o HD da mesa). Testar a restauração. Pendrive único na gaveta não é política de backup. Ransomware torna o backup a diferença entre parar o protocolo ou reabrir os PDFs.',
      ),
    ],
    aprofundamento: [
      named(
        'Fronteira com o cargo de TI',
        'Hash, certificados digitais em profundidade, DMZ, SIEM e classificação ISO não são o centro desta ementa. Se a questão de nível médio citar “confidencialidade”, responda CID e exemplo de ofício; não invente norma que o Anexo IV não pediu.',
      ),
    ],
    revisaoRapida: blocks(
      'CID: confidencialidade (quem vê), integridade (não alterado), disponibilidade (acessível).',
      'Ransomware sequestra arquivo; phishing engana gente; worm anda na rede; trojan finge ser programa útil.',
      'Pessoal = identifica alguém (CPF, e-mail). Sensível = saúde, biometria, religião, opinião política, vida sexual, origem racial, filiação sindical. LGPD no nível médio, não a ementa superior.',
    ),
    definitions: [
      { term: 'Confidencialidade', definition: 'Garantia de que a informação é acessível apenas a quem está autorizado.' },
      { term: 'Integridade', definition: 'Garantia de que a informação não foi alterada de forma indevida.' },
      { term: 'Disponibilidade', definition: 'Garantia de que a informação e o sistema estão acessíveis quando necessários.' },
      { term: 'Dado pessoal', definition: 'Dado relativo a pessoa natural identificada ou identificável (LGPD, art. 5º, I).' },
      { term: 'Dado pessoal sensível', definition: 'Categoria especial do art. 5º, II, da LGPD (saúde, biometria, religião, opinião política, entre outros).' },
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
    ],
    examples: [
      'Phishing: e-mail “Atualize o ponto eletrônico” com link que não é da prefeitura.',
      'Ransomware: PDFs do protocolo viram extensão estranha e aparece pedido de pagamento.',
      'Integridade: alguém troca o valor na planilha de diárias sem controle de versão.',
    ],
    publicAdminExamples: [
      'Não enviar lista de frequência com CPF em CC para caixa genérica da secretaria.',
      'Atestado médico: dado sensível; tramitar na pasta de pessoal com acesso restrito, não no grupo aberto do Teams.',
      'Cidadão no balcão: confirmar identidade antes de entregar cópia de processo com dado de terceiros.',
    ],
    procedures: [
      'Perante e-mail urgente de “TI da prefeitura”, conferir o domínio e ligar pelo ramal interno, não pelo telefone do corpo da mensagem.',
      'Classifique o arquivo: público, pessoal ou sensível, e só então escolha pasta, CC/CCO e link da nuvem.',
      'Mantenha backup da frequência fora da própria estação.',
    ],
    commonErrors: [
      'Dizer que firewall substitui antivírus.',
      'Chamar todo malware de vírus.',
      'Tratar CPF como dado sensível (é pessoal; o CPF em si não está no inciso II da LGPD).',
      'Achar que HTTPS impede engenharia social.',
    ],
    traps: [
      'Disponibilidade cobrada como se fosse “deixar a senha anotada no monitor para ninguém ficar sem acesso”.',
      'Smishing descrito como vírus de disco.',
      'Copiar para a prova de nível médio itens de criptografia de redes do cargo superior.',
    ],
    relatedLessonIds: ['inf-email', 'inf-nuvem', 'inf-internet'],
    relatedEditalItems: ['Segurança da informação e proteção de dados pessoais'],
    synthesis:
      'CID organiza o raciocínio: quem vê, se o arquivo foi alterado, se o sistema está no ar. Malware ataca o programa; phishing ataca a pessoa. Dado pessoal identifica; dado sensível toca saúde, biometria, religião, política, sexualidade, raça e sindicato. No nível médio basta essa proteção de dados, com a LGPD como referência, sem a ementa de Informática superior.',
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
    ],
    questionIds: ['inf-q36', 'inf-q37', 'inf-q38', 'inf-q39', 'inf-q40'],
  }),
]
