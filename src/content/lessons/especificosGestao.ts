import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'

const peso =
  'Conhecimentos específicos têm 24 questões (48 pontos) — quase metade da prova — e corte de 50% na disciplina. Sem essa área não há classificação, mesmo com bom Português.'

function esp(partial: Omit<Parameters<typeof lesson>[0], 'disciplineId' | 'complementary'>): Lesson {
  return lesson({ ...partial, disciplineId: 'especificos', complementary: false, sourceIds: partial.sourceIds ?? ['src-edital', 'src-didatico'] })
}

export const especificosGestaoLessons: Lesson[] = [
  esp({
    id: 'esp-arquivo', topicId: 'esp-arquivo', chapterId: 'esp-arquivo',
    title: 'Documentação e arquivo',
    objective:
      'Distinguir documento de depósito morto, aplicar o ciclo vital, escolher o método pela chave de busca, explicar protocolo, proveniência e temporalidade, e recusar eliminação informal — no recorte de noções arquivísticas do Anexo IV, não como curso de arquivista.',
    importance: peso,
    estimatedMinutes: 36,
    prerequisites: ['esp-redacao'],
    essencial: [
      named(
        'Documento arquivístico não é papel velho',
        'Documento arquivístico registra ato administrativo ou prova de atividade do órgão. Nasce no exercício da função: o requerimento protocolado, a ata assinada, o ofício expedido, a folha de frequência. Arquivo não é depósito morto nem “o armário que sobrou”. É serviço de classificar, guardar e recuperar a informação no prazo certo. Pesquisa, no programa, é achar o documento pela chave certa — nome, número, data, lugar ou assunto — não dissertação acadêmica.',
      ),
      named(
        'O que o edital lista neste capítulo',
        'Documentação e arquivo: pesquisa, documentação, arquivo, sistema e métodos de arquivamento e normas para arquivo; noções arquivísticas. Cobre ciclo vital, métodos, protocolo, temporalidade e princípios em nível médio. Não cobra a Lei 8.159/1991 pelo número como ementa, embora ela seja o contexto nacional da política de arquivos.',
      ),
      named(
        'Protocolo é tramitação, não o mérito',
        'Protocolo registra entrada, saída e número de acompanhamento. Prova que o pedido entrou; não defere alvará, não anula multa, não substitui o despacho. O contínuo que “guarda na gaveta porque conhece o munícipe” quebra o rastreio. O número de protocolo é a chave do método numérico; o nome do interessado é a chave do alfabético. São índices diferentes.',
      ),
    ],
    completo: [
      named(
        'Ciclo vital — teoria das três idades',
        'Corrente (primeira idade): uso frequente, junto do produtor — processos de 2026 ainda em tramitação na Secretaria de Administração. Intermediário (segunda idade): espera destinação, consulta eventual, muitas vezes no arquivo central. Permanente (terceira idade): guarda histórica, probatória ou informativa de longo prazo — atas da Câmara dos anos 1950 não se jogam fora porque “o armário acabou”. Destinação é guarda permanente ou eliminação, sempre com instrumento e autoridade. Eliminação informal é infração, não “organização”.',
      ),
      named(
        'Princípio da proveniência (respeito aos fundos)',
        'Os documentos de um mesmo produtor (fundo) não se misturam com os de outro. Processos da Saúde não se fundem aos da Administração só porque “é o mesmo cidadão” ou “cabe na mesma caixa”. Organicidade: o arquivo reflete as funções do órgão. Indivisibilidade/integridade: não se rasga o processo para “ficar só o que interessa”. Na prova de nível médio, proveniência cai como: não misturar fundos; não classificar pelo assunto genérico contra a origem.',
      ),
      named(
        'Métodos de arquivamento — a chave de busca manda',
        'Alfabético: nome do interessado (requerimentos de particulares quase sempre pedidos pelo sobrenome). Geográfico: lugar (obras por bairro). Numérico simples: número de protocolo em ordem crescente. Numérico cronológico: data + número. Dígito-terminal: o número se lê da direita para a esquerda, em grupos — processo 18.32.45 localiza-se a partir de 45, depois 32, depois 18; não se começa pelo 18 como se fosse numérico simples. Ideológico/por assunto: tema (licenças, férias, diárias). Duplex e variadex: variações alfabéticas/cromáticas de concurso. Unitermo: palavras-chave. O método segue a pergunta de recuperação. Índice alfabético auxiliar não transforma o processo numérico em pasta da letra S.',
      ),
      named(
        'Classificação, temporalidade e conservação',
        'Classificar é atribuir o código ou a série segundo o plano do órgão. Tabela de temporalidade define prazos de guarda na idade corrente e intermediária e a destinação (guarda permanente ou eliminação). Não se elimina documento sem previsão e autoridade competente. Conservação: umidade, inseto, dobra, clipe enferrujado, sol direto e comida na caixa destroem suporte. Digitalizar não autoriza jogar o original fora se a norma exigir guarda do suporte. Cópia digital é ferramenta; não é, sozinha, o ato de destinação.',
      ),
      named(
        'Pesquisa e empréstimo',
        'Pesquisa no arquivo municipal: identifica a chave (nome, número, data, lugar, assunto), localiza a unidade, registra o empréstimo e cobra a volta. Processo que “saiu e não voltou” é falha de controle, não de método. O cidadão pesquisa pelo comprovante; o servidor, pelo sistema de protocolo. Recusar pesquisa porque “o armário está bagunçado” denuncia ausência de método, não a inexistência do documento.',
      ),
      named(
        'Normas para arquivo em nível médio',
        'Noções: produção, tramitação, uso, avaliação e destinação. Sigilo e acesso seguem a norma do órgão e a legislação geral; o programa deste cargo não transforma o agente em operador da LAI. CONARQ e legislação federal de arquivos são contexto. O edital pede o funcionamento do arquivo no expediente, não o organograma do Arquivo Nacional.',
      ),
    ],
    aprofundamento: [
      named(
        'Lei 8.159/1991 e digitalização',
        'A Lei 8.159/1991 institui a política nacional de arquivos. O edital pede noções, não a lei pelo número. Digitalização de processo em tramitação não extingue, sozinha, o original que ainda tem prazo de guarda. Microfilme e repositório digital são suportes; a destinação continua na tabela.',
      ),
      named(
        'O que não copiar de outros cargos',
        'Arquivologia de nível superior (diagnóstico, tipologias profundas, gestão de documentos como disciplina autônoma longa) aparece em outros recortes deste edital. Aqui: três idades, métodos, protocolo, proveniência, temporalidade.',
      ),
    ],
    revisaoRapida: blocks(
      'Corrente → intermediário → permanente ou eliminação formal.',
      'Método = chave de busca. Dígito-terminal lê da direita para a esquerda.',
      'Protocolo rastreia; não decide o mérito. Proveniência: não misturar fundos.',
      'Eliminação é ato formal. Digitalizar ≠ autorizar jogar o original fora.',
    ),
    definitions: [
      { term: 'Protocolo', definition: 'Setor ou procedimento que registra tramitação e dá número de acompanhamento.' },
      { term: 'Fundo', definition: 'Conjunto de documentos de um mesmo produtor, reunidos por proveniência.' },
      { term: 'Tabela de temporalidade', definition: 'Instrumento que define prazos de guarda e destinação dos documentos.' },
      { term: 'Arquivo corrente', definition: 'Primeira idade: documentos em uso frequente junto da unidade produtora.' },
      { term: 'Dígito-terminal', definition: 'Método numérico que localiza pelo grupo da direita para a esquerda.' },
    ],
    comparisons: [
      {
        title: 'Idades do arquivo',
        leftLabel: 'Corrente',
        rightLabel: 'Permanente',
        rows: [
          { label: 'Uso', left: 'Frequente, tramitação', right: 'Histórico, probatório, informativo de longo prazo' },
          { label: 'Onde costuma ficar', left: 'Na unidade produtora', right: 'Arquivo permanente / institucional' },
          { label: 'Exemplo', left: 'Processo de 2026 em andamento', right: 'Atas da Câmara dos anos 1950' },
        ],
      },
      {
        title: 'Alfabético × numérico',
        leftLabel: 'Alfabético',
        rightLabel: 'Numérico',
        rows: [
          { label: 'Chave', left: 'Nome do interessado', right: 'Número de protocolo' },
          { label: 'Quando cabe', left: 'Requerimento pedido pelo sobrenome', right: 'Cidadão traz só o comprovante numerado' },
          { label: 'Pegadinha', left: 'Guardar processo 2024.1187 na pasta S de Silva como método principal', right: 'Ignorar o índice de nomes quando a unidade atende pelo nome' },
        ],
      },
    ],
    examples: [
      'Processos de 2026 em tramitação = arquivo corrente, não permanente “porque são importantes”.',
      'Dígito-terminal 18.32.45 começa pelo 45, não pelo 18.',
      '“O processo 2024.1187 foi guardado na pasta da letra S, de Silva”: o número pede ordem numérica; o nome pode ter índice à parte.',
      'Atas da Câmara dos anos 1950 não se eliminam porque o armário acabou: destinação permanente exige avaliação formal.',
    ],
    publicAdminExamples: [
      'Caixa-arquivo do ano corrente na Secretaria de Administração; transferência ao arquivo central depois da tabela.',
      'Fila da tributação e fila do RH: não misturar processos na mesma gaveta só porque é o mesmo cidadão (proveniência).',
    ],
    procedures: [
      'Receber e protocolar (número, data, interessado).',
      'Classificar segundo o plano da unidade.',
      'Arquivar pelo método da chave de busca real.',
      'Controlar empréstimo e volta.',
      'Aplicar temporalidade: reter, recolher ou eliminar só com autoridade.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — escolher o método',
        setup: 'A unidade atende pelo número de protocolo; o cidadão quase nunca sabe o nome do processo, só o comprovante.',
        steps: [
          'A chave de busca é o número, não o sobrenome.',
          'Método numérico (simples ou cronológico, conforme a norma da unidade).',
          'Alfabético seria certo se a pergunta de recuperação fosse o nome do requerente.',
          'Eliminação do papel antigo continua dependendo da tabela, qualquer que seja o método.',
        ],
        result: 'Método segue a pergunta de recuperação. Protocolo rastreia; não autoriza jogar o original fora.',
      },
      {
        title: 'Exemplo resolvido 2 — dígito-terminal',
        setup: 'Processo nº 18.32.45 no método dígito-terminal.',
        steps: [
          'Grupos da direita para a esquerda: 45 (primário), 32 (secundário), 18 (terciário).',
          'A gaveta/caixa primária é a 45.',
          'Quem localiza pelo 18 aplicou numérico simples, não dígito-terminal.',
        ],
        result: 'Leitura da direita para a esquerda. O distrator é começar pelo primeiro grupo escrito.',
      },
      {
        title: 'Exercício guiado — três idades',
        setup: 'Processos de 2026 ainda em tramitação na Secretaria de Administração.',
        steps: [
          'Estão em uso frequente junto do produtor.',
          'Idade corrente.',
          'Intermediário seria espera de destinação. Permanente seria guarda histórica já avaliada.',
        ],
        result: 'Corrente. “Importante” não promove o processo a permanente.',
      },
    ],
    recallPrompts: [
      'Quais são as três idades do arquivo?',
      'Por que digitalizar não autoriza, sozinho, eliminar o original?',
      'Como se localiza o processo 18.32.45 no dígito-terminal?',
      'O que o princípio da proveniência impede?',
      'O protocolo defere o pedido?',
    ],
    recallAnswers: [
      'Corrente, intermediário e permanente.',
      'A eliminação depende da tabela de temporalidade. A cópia digital não substitui, sozinha, o original que ainda tem prazo de guarda.',
      'A partir dos grupos da direita para a esquerda: 45, depois 32, depois 18.',
      'Misturar documentos de produtores/fundos diferentes.',
      'Não. Protocolo registra a tramitação e dá número. O mérito é outro ato, da autoridade competente.',
    ],
    commonErrors: [
      'Arquivar “onde couber” sem método.',
      'Eliminar cópia e original sem tabela.',
      'Ler dígito-terminal da esquerda para a direita.',
      'Tratar arquivo permanente como papel velho inútil.',
      'Misturar fundos porque o munícipe é o mesmo.',
    ],
    traps: [
      'Arquivo permanente = papel velho inútil.',
      'Digitalizou, então pode rasgar o original.',
      'Protocolo = deferimento.',
    ],
    relatedLessonIds: ['esp-secretaria', 'inf-seguranca'],
    relatedEditalItems: ['ed-esp-04'],
    synthesis:
      'Arquivo existe para achar o documento certo no tempo certo, com método, proveniência e destinação legal. Protocolo rastreia; não decide.',
    glossary: [
      { term: 'Ciclo vital', definition: 'Percurso do documento nas idades corrente, intermediária e permanente.' },
      { term: 'Destinação', definition: 'Guarda permanente ou eliminação, após avaliação.' },
      { term: 'Plano de classificação', definition: 'Esquema que organiza as séries documentais do órgão.' },
    ],
    masteryCriteria: [
      'Escolher o método de arquivamento para um caso.',
      'Explicar as três idades do arquivo.',
      'Aplicar proveniência: não misturar fundos.',
      'Ler um número em dígito-terminal da direita para a esquerda.',
      'Recusar eliminação sem tabela e autoridade.',
    ],
    questionIds: ['esp-arq-01', 'esp-arq-02', 'esp-arq-03', 'esp-arq-04', 'esp-arq-05', 'esp-arq-06'],
  }),

  esp({
    id: 'esp-secretaria', topicId: 'esp-secretaria', chapterId: 'esp-secretaria',
    title: 'Técnicas secretariais e reuniões',
    objective:
      'Organizar agenda, convocação, pauta, expediente, quorum, lista de presença e ata — distinguindo o que se anuncia antes do que se registra depois, sem transformar a ata em diário íntimo do secretário.',
    importance: peso,
    estimatedMinutes: 32,
    prerequisites: ['esp-redacao'],
    essencial: [
      named(
        'O que o edital pede',
        'Técnicas secretariais: organizar e secretariar reuniões. O agente monta a condição de a reunião acontecer e deixa prova escrita do que ocorreu. Não é “fazer café e ligar o projetor” só: é convocar com antecedência, enviar pauta e documentos, reservar sala ou link, controlar presença, apoiar o presidente da mesa, redigir ata, coletar assinaturas e arquivar.',
      ),
      named(
        'Pauta não é ata',
        'Pauta (ordem do dia) lista, antes, os assuntos e, quando couber, os tempos. Ata registra, depois, o que de fato ocorreu. Trocar os dois documentos é o distrator mais comum. A pauta não decide o mérito; anuncia o que será tratado. A ata não inventa a pauta depois: registra debates em síntese e deliberações.',
      ),
      named(
        'A reunião é ato coletivo com rastro',
        'Há convocação, pauta, presença, quorum se o colegiado exigir, deliberação e registro. Reunião extraordinária com três itens específicos não vira sessão livre de “o que ocorrer” no começo: o secretário da mesa cinge-se aos itens convocados, salvo regra expressa. Lista de presença é documento; “eu vi quem estava” não substitui a folha.',
      ),
    ],
    completo: [
      named(
        'Sequência das técnicas — o roteiro que a prova cobra',
        '1) Checar data na agenda da autoridade e conflitos. 2) Definir tipo (ordinária, extraordinária, virtual). 3) Montar pauta com expediente, itens numerados e “o que ocorrer” só quando couber. 4) Convocar com antecedência, enviando peças. 5) Reservar sala, equipamentos, acessibilidade ou testar o link. 6) Lista de presença e verificação de quorum. 7) Apoiar a mesa (inscrições, tempo, documentos). 8) Redigir ata em linguagem impessoal. 9) Coletar assinaturas. 10) Protocolar e arquivar. Pular a convocação e “avisar no corredor” quebra o rastro.',
      ),
      named(
        'Convocação e extraordinária',
        'A convocação traz data, hora, local ou link, tipo de reunião e, na extraordinária, os itens específicos. Extraordinária não é ordinária com outro nome: o secretário não inclui, por conta própria, a reforma administrativa inteira se a convocação listou três processos. Antecedência razoável e envio das peças evitam deliberação às cegas. Confirmação de presença é controle, não gentileza inútil.',
      ),
      named(
        'Expediente, ordem do dia e quorum',
        'Expediente, na reunião, é o bloco inicial de comunicações, leitura da ata anterior e correspondências — distinto da deliberação de mérito da ordem do dia. Quorum é o número mínimo de presentes para instalar ou deliberar, quando o colegiado tiver regra. Sem quorum, não se “aprova assim mesmo porque todo mundo concorda no grupo”. Lista de presença alimenta o quorum; lista falsa vicia o ato.',
      ),
      named(
        'Ata: o que entra, o tempo verbal e o que não entra',
        'Ata registra, em linguagem impessoal e em regra no pretérito perfeito da 3ª pessoa, data, local, hora de abertura, presentes, ausências justificadas, quorum se houver, síntese dos debates e deliberações, hora de encerramento. “Aos vinte e oito dias do mês de outubro de dois mil e vinte e seis, na sala da Secretaria de Administração, reuniu-se…” é o tom. Não é transcrição taquigráfica de tudo o que se falou, salvo determinação específica. Não é espaço para opinião do secretário (“achei ridícula a proposta”). Não se usa “eu” nem adjetivo pejorativo ao conselheiro.',
      ),
      named(
        'Agenda da autoridade e documentos de apoio',
        'Secretariar inclui proteger a agenda: dois compromissos no mesmo horário, deslocamento, leitura prévia das peças. Processos da pauta devem chegar numerados e completos. Falta de anexo na convocação se corrige antes, não “na hora com um recado”. Depois da reunião, a ata circula para assinatura no prazo razoável (24–48h úteis quando possível) e segue ao arquivo.',
      ),
      named(
        'Reunião virtual',
        'Teste o link, peça confirmação, oriente o uso do microfone, registre presença digital e grave só se houver autorização e regra do órgão. Chat não substitui a ata. Lista de presença digital também é documento. Queda de conexão de um membro se anota; não se inventa voto.',
      ),
    ],
    aprofundamento: [
      named(
        'O que este item não é',
        'Não é cerimonial de Chefe de Estado, nem regimento interno da Câmara transcrito, nem “técnicas de oratória”. O edital pede organizar e secretariar reuniões no expediente administrativo.',
      ),
      named(
        'Ata e ato administrativo',
        'A ata prova o que o colegiado fez. A deliberação pode gerar ato posterior (portaria, ofício). Confundir a ata com o alvará é o mesmo erro de confundir protocolo com deferimento.',
      ),
    ],
    revisaoRapida: blocks(
      'Convoca com pauta → apoia a mesa → registra ata → arquiva.',
      'Pauta é antes; ata é depois. Expediente ≠ deliberação de mérito.',
      'Ata: 3ª pessoa, pretérito perfeito, impessoal, sem opinião do secretário.',
      'Extraordinária cinge-se aos itens convocados. Lista de presença é documento.',
    ),
    definitions: [
      { term: 'Ata', definition: 'Registro formal do ocorrido em reunião ou sessão.' },
      { term: 'Pauta', definition: 'Roteiro prévio dos assuntos da reunião (ordem do dia).' },
      { term: 'Expediente', definition: 'Bloco inicial de comunicações e correspondências, distinto da deliberação de mérito.' },
      { term: 'Quorum', definition: 'Número mínimo de presentes para instalar ou deliberar, quando a norma do colegiado exigir.' },
      { term: 'Convocação', definition: 'Chamado formal com data, local ou link, tipo e, na extraordinária, os itens.' },
    ],
    comparisons: [
      {
        title: 'Pauta × ata',
        leftLabel: 'Pauta',
        rightLabel: 'Ata',
        rows: [
          { label: 'Quando', left: 'Antes da reunião', right: 'Depois da reunião' },
          { label: 'Função', left: 'Anuncia o que será tratado', right: 'Prova o que ocorreu e o que se deliberou' },
          { label: 'Tempo verbal típico', left: 'Infinitivo / futuro de planejamento', right: 'Pretérito perfeito da 3ª pessoa' },
        ],
      },
    ],
    examples: [
      'Uma pauta típica lista expediente (ata anterior, correspondências), processos numerados e, no fim, o que ocorrer — este último some na extraordinária restrita.',
      '“O secretário achou ridícula a proposta” é vício de ata: opinião, 1ª pessoa, adjetivo.',
      '“Aos 28 dias de outubro de 2026, reuniu-se o conselho… deliberou-se aprovar o calendário…” é o tom adequado.',
      'Convocar extraordinária com três itens e abrir a pauta para a reforma inteira foge à convocação.',
    ],
    publicAdminExamples: [
      'Reunião de diretoria da Secretaria de Administração para calendário de pagamento: pauta com processos numerados, lista, ata no dia seguinte.',
      'Conselho municipal em sessão híbrida: presença na sala e no link, ambas na lista.',
    ],
    procedures: [
      'Checar data na agenda da autoridade.',
      'Montar pauta (expediente, itens, o que ocorrer se couber).',
      'Convocar e enviar peças.',
      'Confirmar sala, equipamentos ou link.',
      'Lista de presença e quorum.',
      'Redigir ata impessoal e protocolar.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — vício de ata',
        setup: 'Trecho: “Eu, secretário, achei ridícula a proposta do conselheiro Silva, que falou demais.”',
        steps: [
          'Ata não admite 1ª pessoa do secretário como narrador opinativo.',
          'Adjetivo pejorativo e juízo de valor não são deliberação.',
          'Registre: o conselheiro Silva manifestou-se contrário; deliberou-se X.',
        ],
        result: 'O trecho adequado é impessoal, no pretérito, sem opinião da mesa.',
      },
      {
        title: 'Exemplo resolvido 2 — extraordinária',
        setup: 'Convocada reunião extraordinária com três itens específicos.',
        steps: [
          'A convocação delimita a pauta.',
          'O secretário da mesa não inclui, por conta própria, temas estranhos.',
          '“O que ocorrer” irrestrito é típico de ordinária, não desta extraordinária.',
        ],
        result: 'Cinge-se aos três itens, salvo regra expressa do colegiado.',
      },
      {
        title: 'Exercício guiado — sequência',
        setup: 'O item pede a ordem das técnicas de uma reunião ordinária.',
        steps: [
          'Agenda e pauta antes da porta abrir.',
          'Convocação e peças.',
          'Presença e quorum.',
          'Apoio à mesa.',
          'Ata e arquivo depois.',
        ],
        result: 'Quem começa pela ata inverte o tempo do documento.',
      },
    ],
    recallPrompts: [
      'Qual a diferença entre pauta e ata?',
      'Que tempo verbal e pessoa predominam na ata?',
      'Para que serve o expediente na reunião?',
      'O que o secretário deve fazer numa extraordinária com três itens?',
      'A lista de presença pode ser só oral?',
    ],
    recallAnswers: [
      'Pauta anuncia antes os assuntos; ata registra depois o que ocorreu e o que se deliberou.',
      'Pretérito perfeito da 3ª pessoa, linguagem impessoal.',
      'Bloco inicial de comunicações, ata anterior e correspondências — não é a deliberação de mérito.',
      'Cingir-se aos itens convocados, sem abrir pauta livre por conta própria.',
      'Não. Lista de presença é documento; “eu vi quem estava” não substitui a folha ou o registro digital.',
    ],
    commonErrors: [
      'Ata opinativa.',
      'Trocar pauta e ata.',
      'Esquecer quorum e presenças.',
      'Incluir tema estranho na extraordinária.',
      'Avisar a reunião só no corredor, sem convocação.',
    ],
    traps: [
      'Ata em 1ª pessoa com adjetivo.',
      'Pauta descrita como o registro do que ocorreu.',
      'Extraordinária tratada como ordinária irrestrita.',
    ],
    relatedLessonIds: ['esp-eventos', 'esp-redacao'],
    relatedEditalItems: ['ed-esp-05'],
    synthesis: 'Reunião bem secretariada tem pauta antes, apoio durante e ata depois. A ata é documento, não diário íntimo.',
    glossary: [
      { term: 'Ordem do dia', definition: 'Conjunto de assuntos pautados para deliberação.' },
      { term: 'Mesa', definition: 'Quem conduz a reunião (presidente, secretário da sessão).' },
    ],
    masteryCriteria: [
      'Montar pauta e identificar vícios de uma ata.',
      'Ordenar as técnicas de uma reunião ordinária.',
      'Explicar expediente versus deliberação de mérito.',
      'Respeitar os itens da convocação extraordinária.',
    ],
    questionIds: ['esp-sec-01', 'esp-sec-02', 'esp-sec-03', 'esp-sec-04', 'esp-sec-05'],
  }),

  esp({
    id: 'esp-eventos', topicId: 'esp-eventos', chapterId: 'esp-secretaria',
    title: 'Organização de eventos, viagens e ressarcimentos',
    objective:
      'Planejar logística de evento oficial e deslocamento (passagem, hospedagem, autorização, diária, ressarcimento e prestação de contas), distinguindo diária de reembolso e recusando despesa sem comprovante ou sem autorização prévia.',
    importance: peso,
    estimatedMinutes: 32,
    prerequisites: ['esp-secretaria'],
    essencial: [
      named(
        'O que o edital lista',
        'Organização e controle de eventos: reserva de passagens, hospedagem, ressarcimentos, logística e infraestrutura. O agente planeja e comprova. Não é “combinar no WhatsApp e depois pedir nota”. Evento oficial exige objetivo, público, data, local, infraestrutura, convites, credenciamento e checklist. Viagem exige autorização, passagem, hospedagem, agenda e prestação de contas segundo a norma do órgão.',
      ),
      named(
        'Autorização precede a reserva',
        'Antes de clicar em passar a passagem ou no hotel, existe processo: objetivo da capacitação ou do evento, período, estimativa de gasto, autoridade competente. Reservar do bolso e depois “ver se cola” é o caminho da glosa. A Lei 8.666/1993 está revogada pela 14.133/2021 e, de qualquer modo, licitação não é linha deste cargo no Anexo IV: o agente auxiliar não inventa fornecedor nem “fecha o buffet no amigo”.',
      ),
      named(
        'Diária não é a mesma coisa que ressarcimento',
        'Diária, quando a norma local prevê, é valor fixo indenizatório para alimentação e pouso. Ressarcimento é reembolso de despesa comprovada e autorizada (nota, boarding pass, pedágio). Não se cobram os dois pelo mesmo item: quem recebeu diária de alimentação não pede de novo o jantar com nota. Glosa é a recusa da despesa que não atende à norma ou à comprovação.',
      ),
    ],
    completo: [
      named(
        'Checklist de evento interno',
        'Objetivo e público. Data e duração. Local (sala, acessibilidade, som, projetor, internet, água, banheiro). Convite ou convocação. Credenciamento e lista de presença. Material (crachá, pasta, certificado se houver). Coffee somente com autorização no processo — não recado de corredor. Apoio de limpeza e segurança se o porte exigir. Plano B se o projetor falhar. Depois: atas ou relatório, fotos só se a norma de imagem permitir, arquivo da lista. A questão que pergunta “o que a logística inclui” não pede o discurso de abertura: pede sala, som, acessibilidade, credenciamento.',
      ),
      named(
        'Passagens e hospedagem',
        'Reserva em nome do órgão ou do servidor, conforme a norma interna. Trecho, data e horário alinhados à agenda do evento. Hospedagem no período autorizado — véspera e dia extra só se a norma e a autoridade cobrirem. Bilhete, voucher e comprovante de embarque guardam-se para a prestação. Alteração de voo por conta própria, sem autorização, vira despesa pessoal. Classe e categoria seguem o que o órgão admite, não o “melhor quarto porque é capacitação”.',
      ),
      named(
        'Prestação de contas e o que se glosa',
        'Guarde bilhetes, notas fiscais, boarding pass, relatório de viagem, certificados de presença. Despesa sem comprovante vira glosa. Gorjeta sem previsão, minibar, filme do hotel, multa de trânsito do carro oficial por imprudência, upgrade não autorizado — glosa típica. Relatório narra o que se fez no evento, não o cardápio. Prazo de prestação é o da norma local: atraso também gera glosa ou responsabilização.',
      ),
      named(
        'Infraestrutura e acessibilidade',
        'Evento público ou interno com público externo exige rampa ou alternativa, banheiro acessível, sinalização, assento reservado quando couber. Acessibilidade não é “favor se alguém pedir”. Som em volume que o fundo da sala ouça. Internet testada se houver transmissão. Água e tempo de intervalo. Falta de lista de presença quebra a prova de quem participou — e a diária de quem deveria estar.',
      ),
      named(
        'Contratação de apoio (buffet, som, transporte)',
        'O agente instrui o processo com três orçamentos quando a norma pedir, especificação do objeto e autorização. Não escolhe o cunhado. Não trata 8.666 como vigente. A 14.133/2021 é o marco atual de licitações, mas este cargo não tem linha autônoma de licitação no Anexo IV: o recorte é auxiliar, documentar, não inventar modalidade. Coffee de oficina interna continua precisando de autorização no processo.',
      ),
      named(
        'Viagem a serviço — o fluxo completo',
        'Pedido → autorização da autoridade → empenho/reserva conforme a regra do órgão → emissão de passagem e hotel → deslocamento com documentos → participação com lista/certificado → volta → prestação de contas no prazo → glosa do que não se comprovar. Pular a autorização é o erro mais caro. Relatório sem boarding pass é prestação oca.',
      ),
    ],
    aprofundamento: [
      named(
        'Licitação não é a ementa deste cargo',
        'Atribuição de auxiliar em compras pode aparecer na lei do cargo; o Anexo IV de conhecimentos específicos não detalha 14.133. Estude o suficiente para não inventar fornecedor e para reconhecer 8.666 como distrator histórico. Não transforme esta aula em curso de pregoeiro.',
      ),
      named(
        'Norma local de diária',
        'Valores e hipóteses de diária são da norma do município. A aula ensina a lógica (indenização fixa versus reembolso de nota), não o decreto de Itarema que o edital não transcreveu. Se a questão der a norma, aplique a norma do enunciado.',
      ),
    ],
    revisaoRapida: blocks(
      'Autorização → reserva → execução → comprovação.',
      'Diária (fixa) ≠ ressarcimento (nota). Não os dois no mesmo jantar.',
      'Sem comprovante, glosa. Sem autorização prévia, despesa pessoal.',
      'Logística = sala, som, acessibilidade, lista — não o discurso.',
    ),
    definitions: [
      { term: 'Ressarcimento', definition: 'Devolução de despesa autorizada, mediante comprovação.' },
      { term: 'Diária', definition: 'Valor fixo indenizatório, quando a norma local prevê, para alimentação e pouso em viagem a serviço.' },
      { term: 'Glosa', definition: 'Recusa de despesa que não atende à norma ou à comprovação.' },
      { term: 'Prestação de contas', definition: 'Conjunto de comprovantes e relatório que fecha a viagem ou o evento.' },
    ],
    comparisons: [
      {
        title: 'Diária × ressarcimento',
        leftLabel: 'Diária',
        rightLabel: 'Ressarcimento',
        rows: [
          { label: 'Natureza', left: 'Indenização em valor fixo', right: 'Reembolso de despesa comprovada' },
          { label: 'Comprovante típico', left: 'Norma + autorização + prova da viagem', right: 'Nota fiscal, bilhete, boarding pass' },
          { label: 'Mesmo jantar', left: 'Já cobre alimentação', right: 'Não se soma à diária de alimentação' },
        ],
      },
    ],
    examples: [
      'Servidor recebeu diária de alimentação e pede o mesmo jantar com nota: glosa o reembolso duplicado.',
      'Reservar passagem antes da autorização da autoridade: ordem invertida.',
      'Oficina de protocolo: falta o projetor na lista de infraestrutura — isso é logística, não “o discurso de abertura”.',
      'Minibar e filme do hotel na prestação: glosa típica.',
    ],
    publicAdminExamples: [
      'Viagem a Fortaleza para capacitação: processo, autorização, passagens, hotel, certificado, relatório, notas.',
      'Oficina interna de protocolo na sede: sala, projetor, lista, água, autorização se houver coffee.',
    ],
    procedures: [
      'Definir objetivo e público.',
      'Orçar e autorizar em processo.',
      'Reservar passagem, hotel ou sala.',
      'Executar com checklist e lista.',
      'Prestar contas no prazo, sem duplicar diária e nota.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — diária e nota',
        setup: 'Servidor recebeu diária prevista na norma local para alimentação e pouso e, no retorno, pede também o ressarcimento do mesmo jantar, com nota fiscal.',
        steps: [
          'Diária de alimentação já indeniza o jantar.',
          'Ressarcimento do mesmo item seria pagamento em duplicidade.',
          'A nota não “melhora” a diária: ela compete com ela.',
        ],
        result: 'Conduta regular: não reembolsar o jantar já coberto pela diária. Glosa o pedido duplicado.',
      },
      {
        title: 'Exemplo resolvido 2 — ordem da reserva',
        setup: 'Capacitação em Fortaleza. O agente quer emitir as passagens hoje.',
        steps: [
          'Primeiro: autorização da autoridade no processo.',
          'Depois: reserva conforme a regra do órgão.',
          'Emitir antes é inverter o fluxo e arriscar despesa pessoal.',
        ],
        result: 'Autorizar, então reservar. O clique na passagem não abre o processo.',
      },
      {
        title: 'Exercício guiado — logística da oficina',
        setup: 'Oficina presencial de protocolo na sede da prefeitura.',
        steps: [
          'Sala, som, projetor, internet, acessibilidade, água, lista, credenciamento.',
          'Discurso de abertura não é item de logística do apoio administrativo.',
          'Coffee só com autorização no processo.',
        ],
        result: 'Infraestrutura e lista. Oratória fica com quem vai falar.',
      },
    ],
    recallPrompts: [
      'Qual a diferença entre diária e ressarcimento?',
      'O que se faz antes de reservar passagens?',
      'Dê três exemplos de despesa que se glosa.',
      'O que integra a logística de uma oficina presencial?',
      'Por que 8.666 não é a linha deste cargo?',
    ],
    recallAnswers: [
      'Diária é valor fixo indenizatório; ressarcimento é reembolso de despesa comprovada. Não se cobram os dois pelo mesmo item.',
      'Autorização da autoridade em processo, com objetivo, período e estimativa.',
      'Nota sem autorização, minibar, filme do hotel, upgrade não autorizado, jantar já coberto por diária, comprovante perdido.',
      'Sala, som, projetor, acessibilidade, água, credenciamento e lista de presença — não o discurso.',
      'Está revogada pela 14.133/2021 e licitação não é linha do Anexo IV deste cargo. Serve só como distrator histórico.',
    ],
    commonErrors: [
      'Pagar do bolso sem autorização prévia e depois pedir reembolso inexistente.',
      'Cobrar diária e a mesma nota de alimentação.',
      'Perder boarding pass e achar que o relatório basta.',
      'Inventar fornecedor de buffet.',
    ],
    traps: [
      'Confundir diária com ressarcimento de nota.',
      'Tratar 8.666 como vigente.',
      'Achar que logística é o discurso de abertura.',
    ],
    relatedLessonIds: ['esp-contabilidade', 'inf-apresentacao'],
    relatedEditalItems: ['ed-esp-06'],
    synthesis: 'Evento e viagem são processo administrativo: autorização, execução, comprovação. Diária não se soma à mesma nota.',
    glossary: [
      { term: 'Boarding pass', definition: 'Comprovante de embarque; peça típica da prestação de passagem aérea.' },
      { term: 'Voucher', definition: 'Comprovante de reserva de hospedagem ou serviço.' },
    ],
    masteryCriteria: [
      'Listar documentos de uma prestação de viagem.',
      'Montar checklist de evento interno.',
      'Distinguir diária de ressarcimento em caso concreto.',
      'Recusar reserva antes da autorização.',
    ],
    questionIds: ['esp-evt-01', 'esp-evt-02', 'esp-evt-03', 'esp-evt-04', 'esp-evt-05'],
  }),

  esp({
    id: 'esp-qualidade', topicId: 'esp-qualidade', chapterId: 'esp-atendimento',
    title: 'Qualidade e postura no atendimento',
    objective:
      'Atender presencialmente, por telefone e por canal virtual com informação correta, cortesia, sigilo e registro — sem ironia, sem expor dado de terceiro e sem furar fila preferencial.',
    importance: peso,
    estimatedMinutes: 32,
    prerequisites: [],
    essencial: [
      named(
        'Qualidade no serviço público não é sorriso vazio',
        'O edital pede qualidade na prestação de serviços e no atendimento presencial, virtual e telefônico; postura de atendimento. Mede-se por informação correta, tempo razoável, acessibilidade, respeito e registro. Postura: escuta, linguagem adequada, sem ironia, sem exposição de dados de terceiros no guichê. Cortesia que mente o prazo é má qualidade. Grosseria que acerta o setor também é má qualidade. Os dois eixos andam juntos.',
      ),
      named(
        'Sigilo é dever de ofício',
        'Processo disciplinar de servidor, CPF em foto, número de protocolo de vizinho, diagnóstico, endereço de vítima: o agente não comenta no corredor nem confirma a quem perguntar o nome. Repetir o número de protocolo ao telefone confirma que os dois lados falam do mesmo registro — isso não autoriza narrar o mérito a terceiro. A alternativa “dar a informação de qualquer processo a quem perguntar o nome” fere o recorte.',
      ),
      named(
        'Fila preferencial não é apadrinhamento',
        'Idoso, pessoa com deficiência, gestante, lactante, pessoa com criança de colo e demais hipóteses da legislação de regência (Lei 10.048/2000 e estatutos correlatos — o edital não numera essas leis, mas o atendimento municipal não se descreve sem elas) têm prioridade. Conhecido da chefia não fura essa fila. Impessoalidade do art. 37 da CF/88 explica o porquê: o serviço não é favor pessoal.',
      ),
    ],
    completo: [
      named(
        'Canal presencial',
        'Acolher, identificar-se, ouvir a demanda, conferir se o setor é competente, orientar documentos, protocolar se houver papel, devolver o comprovante. Não exponha a tela para a fila. Não comente o processo anterior em voz alta. Não recuse o protocolo porque o cidadão está nervoso: postura não é negar o serviço. Se o munícipe se altera, chama-se a chefia e registra-se o fato — não se devolve agressão “educada”.',
      ),
      named(
        'Canal telefônico',
        'Identificar o órgão e o servidor. Ouvir. Anotar recado com nome de quem ligou, número, data, hora, recado e quem anotou. Prometer “eu mando recado” sem escrever é perda do pedido. Não se detalha processo disciplinar de terceiro ao telefone. Confirmar o número de protocolo antes de informar o andamento que a norma permitir. Não se usa alto-falante no open space com dado pessoal.',
      ),
      named(
        'Canal virtual',
        'Resposta objetiva, sem Caps Lock, sem emoji de deboche, confirmar recebimento de anexo. Foto de documento com CPF não se encaminha ao grupo de WhatsApp da seção nem se responde no e-mail pessoal. Usa-se o canal institucional. Prazo de resposta é o da norma ou o que se pode afirmar; “sai hoje” inventado é má qualidade. Arquivar o chamado com número.',
      ),
      named(
        'Postura: o que a prova marca como INCORRETA',
        'Ironia (“o senhor não leu o site?”). Expor dado de terceiro. Furar fila preferencial para conhecido. Prometer prazo que a norma não garante. Atender de fone de ouvido pessoal ignorando o guichê. Recusar acessibilidade. Tratar o cidadão irritado com sarcasmo. Qualidade inclui não fazer isso mesmo quando “o outro começou”. A alternativa correta de item negativo é a conduta que fere sigilo, impessoalidade ou verdade da informação.',
      ),
      named(
        'Acessibilidade e tempo razoável',
        'Fila preferencial, rampa, intérprete quando o órgão dispuser, texto legível no aviso do guichê. Tempo razoável não é “na hora” se o prazo da certidão é de dias — é informar o prazo verdadeiro. Deixar o cidadão sem número de protocolo depois de entregar o papel é má qualidade mensurável.',
      ),
      named(
        'Quando chamar a chefia',
        'Ameaça, assédio, recusa de documento essencial sem alternativa, pedido de furar fila por pressão, dúvida jurídica de mérito que o guichê não decide. Registrar o fato. Não improvisar anulação de multa nem “jeitinho” para conhecido. Postura profissional não é heroísmo: é limite de competência com respeito.',
      ),
    ],
    aprofundamento: [
      named(
        'Leis de prioridade como contexto',
        'Lei 10.048/2000 e estatutos da pessoa idosa e da pessoa com deficiência não estão numerados no Anexo IV deste cargo. Entram porque “atendimento” e “postura” no serviço municipal não se descrevem sem prioridade legal. Não transforme a aula em curso de legislação especial.',
      ),
      named(
        'Qualidade não é ISO decorada',
        'O edital não pede certificação ISO 9001. Pede conduta no guichê, no telefone e no canal virtual. Modelos de carta de serviços são aprofundamento facultativo.',
      ),
    ],
    revisaoRapida: blocks(
      'Ouça. Informe o que pode. Protocolize. Não exponha dados.',
      'Telefone tem recado escrito. Canal virtual também é oficial.',
      'Prioridade legal ≠ conhecido da chefia.',
      'Cidadão alterado: chefia e registro, não ironia.',
    ),
    definitions: [
      { term: 'Postura profissional', definition: 'Conjunto de condutas de respeito, discrição e objetividade no serviço.' },
      { term: 'Sigilo', definition: 'Dever de não divulgar informação protegida obtida em razão do cargo.' },
      { term: 'Fila preferencial', definition: 'Atendimento prioritário nas hipóteses legais, não apadrinhamento.' },
    ],
    comparisons: [
      {
        title: 'Cortesia × qualidade da informação',
        leftLabel: 'Só cortesia',
        rightLabel: 'Qualidade',
        rows: [
          { label: 'Prazo', left: '“Sai hoje” para acalmar', right: 'O prazo que a norma ou o sistema permite afirmar' },
          { label: 'Setor errado', left: 'Encaminha com sorriso para o lugar errado', right: 'Confere competência e encaminha certo' },
          { label: 'Dado de terceiro', left: 'Comenta “para ajudar”', right: 'Recusa e explica o sigilo' },
        ],
      },
    ],
    examples: [
      'Dois munícipes pedem detalhes do processo disciplinar de um servidor ausente: a postura é recusar e não comentar.',
      'Conhecido da chefia quer furar a fila do idoso: impessoalidade manda manter a prioridade legal.',
      'Foto de CPF no canal virtual: trata-se no canal institucional, sem grupo de WhatsApp.',
      'Item INCORRETA: a conduta que usa ironia, expõe dado ou mente o prazo.',
    ],
    publicAdminExamples: [
      'Guichê de protocolo com tela visível à fila: vire o monitor ou use filtro de privacidade.',
      'Recado telefônico completo na mesa da chefia, com hora e telefone de retorno.',
    ],
    procedures: [
      'Identificar-se e identificar o órgão.',
      'Ouvir a demanda sem interromper para ironizar.',
      'Conferir competência e sigilo.',
      'Informar o que pode e registrar (protocolo ou recado).',
      'Se houver prioridade legal, aplicá-la. Se houver conflito, chamar a chefia.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — sigilo no telefone',
        setup: 'Alguém pede, ao telefone, detalhes do processo disciplinar de um servidor que não está na linha.',
        steps: [
          'Dado funcional protegido não se narra a terceiro.',
          'Identificar o órgão não autoriza o mérito.',
          'Orientar o caminho legal (interessado, advogado com procuração, LAI se couber) sem contar o caso.',
        ],
        result: 'Recusa educada. Confirmar o número de protocolo de quem é parte é outra hipótese.',
      },
      {
        title: 'Exemplo resolvido 2 — fila',
        setup: 'Conhecido da chefia pede para ser atendido na frente de um idoso já na fila preferencial.',
        steps: [
          'Prioridade legal do idoso.',
          'Art. 37: impessoalidade.',
          'Conhecido da chefia não é hipótese de preferência.',
        ],
        result: 'Mantém-se a fila preferencial. Chama-se a chefia se houver pressão.',
      },
      {
        title: 'Exercício guiado — virtual com CPF',
        setup: 'Cidadão envia, no canal virtual institucional, foto de documento com CPF.',
        steps: [
          'Tratar no canal institucional.',
          'Não reenviar ao grupo de WhatsApp da seção.',
          'Confirmar recebimento e o próximo passo que a norma permitir.',
        ],
        result: 'Sigilo + registro. Qualidade é o canal certo com a informação certa.',
      },
    ],
    recallPrompts: [
      'O que um recado telefônico institucional precisa conter?',
      'Por que não se detalha processo disciplinar de terceiro no guichê?',
      'Fila preferencial cede a conhecido da chefia?',
      'Como se atende cidadão alterado sem devolver agressão?',
      'Caps Lock e ironia no canal virtual são postura adequada?',
    ],
    recallAnswers: [
      'Órgão, quem ligou, telefone, data, hora, recado e quem anotou.',
      'Sigilo: informação protegida obtida em razão do cargo não se comenta com quem não é parte.',
      'Não. Prioridade legal não é apadrinhamento. Impessoalidade impede furar a fila do idoso.',
      'Não devolve ironia; chama a chefia e registra o fato; o serviço devido continua.',
      'Não. Canal virtual é oficial: resposta objetiva, sem deboche e sem expor anexo com CPF em grupo informal.',
    ],
    commonErrors: [
      'Prometer prazo que a norma não garante.',
      'Tratar cidadão irritado com ironia “educada”.',
      'Expor a tela ou o processo do vizinho.',
      'Furar fila preferencial para conhecido.',
    ],
    traps: [
      'Qualidade = só sorriso.',
      '“Dar a informação de qualquer processo a quem perguntar o nome”.',
      'Recusar protocolo porque o cidadão está nervoso.',
    ],
    relatedLessonIds: ['esp-publico', 'inf-email'],
    relatedEditalItems: ['ed-esp-07'],
    synthesis: 'Atendimento de qualidade é informação certa + respeito + registro + sigilo. Postura não fura fila nem comenta processo alheio.',
    glossary: [
      { term: 'Canal institucional', definition: 'Telefone, e-mail, sistema ou guichê oficiais do órgão, não o WhatsApp pessoal.' },
      { term: 'Impessoalidade', definition: 'Princípio do art. 37 da CF/88: o serviço não se curva a apadrinhamento.' },
    ],
    masteryCriteria: [
      'Simular atendimento telefônico com recado completo.',
      'Identificar quebra de sigilo em cena de guichê.',
      'Aplicar fila preferencial contra pedido de conhecido.',
      'Corrigir uma resposta virtual com Caps Lock e anexo de CPF no grupo errado.',
    ],
    questionIds: ['esp-qual-01', 'esp-qual-02', 'esp-qual-03', 'esp-qual-04', 'esp-qual-05'],
  }),

  esp({
    id: 'esp-publico', topicId: 'esp-publico', chapterId: 'esp-atendimento',
    title: 'Atendimento ao público no serviço municipal',
    objective:
      'Orientar o cidadão sobre serviços, protocolos e limites da competência do setor: informar o que pode, protocolar o que entra, encaminhar o que não é da unidade e nunca decidir mérito de alvará, tributo ou anulação alheia no guichê.',
    importance: peso,
    estimatedMinutes: 32,
    prerequisites: ['esp-qualidade', 'esp-arquivo'],
    essencial: [
      named(
        'Atribuição expressa do cargo',
        'Atender o público é atribuição do Agente Administrativo: presencial e telefônico, informações sobre serviços municipais. O agente não decide o mérito jurídico se não tiver competência; protocola e encaminha. O cidadão entra com um pedido; deve sair com informação verdadeira ou com número de protocolo. Segurar documento sem protocolar é má-fé operacional, mesmo com sorriso.',
      ),
      named(
        'Competência do setor antes da simpatia',
        'O primeiro filtro é: este guichê é o competente? Tributo, RH, protocolo geral, obras — gavetas diferentes. Encaminhar ao setor errado com cortesia continua sendo mau atendimento. Misturar processos na mesma gaveta porque “é o mesmo cidadão” fere proveniência e confunde o prazo. Cortesia não substitui competência.',
      ),
      named(
        'Protocolo é direito elementar',
        'Requerimento escrito que entra na prefeitura gera registro e comprovante. O carimbo e o número não são o alvará: provam a entrada. Inventar “sai hoje” quando o prazo é de dias é o erro. Recusar protocolo porque “o sistema caiu” exige alternativa de registro, não o desaparecimento do papel.',
      ),
    ],
    completo: [
      named(
        'Roteiro do atendimento completo',
        '1) Identificar-se. 2) Entender o pedido (escuta). 3) Verificar se o setor é competente. 4) Se sim, orientar documentos, taxas conhecidas e prazos que se pode afirmar. 5) Se não, indicar o setor e, se possível, o caminho. 6) Registrar protocolo quando houver documento e entregar comprovante. 7) Aplicar prioridade legal. 8) Não decidir mérito de alvará, tributo ou anulação de ato alheio à competência. 9) Encerrar com o próximo passo explícito (“o número é este; o prazo de resposta que posso afirmar é este”).',
      ),
      named(
        'O que o guichê não resolve',
        'Anular multa de outro setor. Deferir alvará. Calcular alíquota de tributo sem tela nem tabela. Alterar gabarito de concurso. “Já resolver na hora” sem o livro de registro. O agente informa o caminho e protocola o pedido; a autoridade competente pratica o ato. Relacionar atendimento e atos: o carimbo do protocolo no requerimento de alvará não é o alvará.',
      ),
      named(
        'Prioridade legal no público',
        'Idoso, PCD, gestante, lactante, pessoa com criança de colo, entre outros da Lei 10.048/2000 e estatutos correlatos (não numerados no Anexo IV, inerentes ao tema). A prioridade organiza a fila, não dispensa documento nem transforma o pedido em deferimento. Conhecido da chefia não entra nessa lista.',
      ),
      named(
        'Informação que o agente não tem tela para confirmar',
        'Cidadão pergunta o valor exato e a alíquota de um tributo. Sem tela nem tabela, o atendimento correto é: não inventar número; indicar o setor de tributação, o canal oficial ou protocolar consulta. Informação falsa é pior que “não sei e encaminho”. O mesmo vale para prazo de certidão que o sistema não mostra.',
      ),
      named(
        'Encaminhamento com rastro',
        'Encaminhar é enviar o expediente ao setor competente, com registro. “Vai lá naquela porta” sem número não é encaminhamento. Quando o papel fica na prefeitura, protocola-se. Quando o cidadão deve ir a outro prédio, entrega-se orientação escrita ou o endereço do setor, se a unidade trabalhar assim. O rastro protege o munícipe e o servidor.',
      ),
      named(
        'Atendimento, atos e arquivo no mesmo caso',
        'Pedido de alvará: protocolo (arquivo/tramitação) → análise da autoridade (ato) → ofício ou alvará (redação oficial). O agente no guichê opera o primeiro elo e explica os outros sem os praticar. Quem “já anula a multa” no protocolo usurpa competência. Quem se recusa a protocolar o pedido de anulação impede o cidadão de provocar a Administração.',
      ),
    ],
    aprofundamento: [
      named(
        'LAI e ouvidoria — facultativo',
        'Lei de Acesso à Informação e ouvidoria podem aparecer como contexto de cidadania. Não estão nomeadas no programa específico deste cargo. Se usadas, marque como aprofundamento: o caminho do pedido de informação existe; não se afirma o rito federal como se fosse o de Itarema.',
      ),
      named(
        'Carta de serviços',
        'Alguns municípios publicam carta de serviços com prazos. Se o enunciado der a carta, aplique a carta. Se não der, não invente o prazo de outro órgão como se fosse Itarema.',
      ),
    ],
    revisaoRapida: blocks(
      'Competência do setor. Protocolo. Informação verdadeira. Sem promessa impossível.',
      'Encaminhar com rastro, em vez de inventar.',
      'Prioridade legal na fila. Mérito de alvará e multa não se decide no guichê.',
      'Carimbo do protocolo ≠ alvará.',
    ),
    definitions: [
      { term: 'Protocolo de atendimento', definition: 'Registro que comprova que o pedido entrou na Administração.' },
      { term: 'Encaminhamento', definition: 'Envio do expediente ao setor competente, com registro.' },
      { term: 'Competência do setor', definition: 'Atribuição da unidade para aquela matéria; sem ela, informa-se e encaminha-se.' },
    ],
    comparisons: [
      {
        title: 'Informar × decidir',
        leftLabel: 'O agente no guichê',
        rightLabel: 'A autoridade competente',
        rows: [
          { label: 'Alvará', left: 'Protocola o pedido e explica o caminho', right: 'Defere ou indefere o ato negocial' },
          { label: 'Multa de outro setor', left: 'Não anula; protocola o requerimento se houver', right: 'Quem tem competência para anular ou manter' },
          { label: 'Tributo sem tabela', left: 'Não inventa alíquota; encaminha', right: 'Setor de tributação com tela e norma' },
        ],
      },
    ],
    examples: [
      'Pedido de segunda via de certidão: conferir setor, documentos, taxa e prazo afirmável. “Sai hoje” inventado é o erro.',
      'Munícipe pede que o agente “já anule” multa de outro setor: protocolar o pedido e encaminhar; não anular no balcão.',
      'Sem tela de alíquota: não inventar o valor; indicar tributação.',
      'Carimbo e número no requerimento de alvará: comprovante de entrada, não o alvará.',
    ],
    publicAdminExamples: [
      'Fila da tributação × fila do RH: não misturar processos na mesma gaveta só porque é o mesmo cidadão.',
      'Protocolo geral recebe requerimento de alvará e entrega comprovante; o deferimento corre no setor competente.',
    ],
    procedures: [
      'Saudação e identificação.',
      'Escuta do pedido.',
      'Conferência de competência e de documentos.',
      'Registro e devolutiva do número.',
      'Encaminhamento se a matéria for de outro setor.',
      'Prioridade legal na fila, sem decidir mérito alheio.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — anular multa no guichê',
        setup: 'Munícipe pede ao Agente Administrativo, no guichê de protocolo, que “já anule” uma multa aplicada por outro setor.',
        steps: [
          'O guichê de protocolo não tem competência para anular o ato punitivo.',
          'Recusar o pedido de protocolo seria impedir o cidadão de provocar a Administração.',
          'Conduta: orientar, receber o requerimento, protocolar, encaminhar ao setor competente.',
        ],
        result: 'Informa e protocola. Não anula. Não manda o cidadão embora sem número.',
      },
      {
        title: 'Exemplo resolvido 2 — alíquota sem tela',
        setup: 'Cidadão pergunta, no protocolo geral, o valor exato e a alíquota de um tributo que o agente não tem tela nem tabela para confirmar.',
        steps: [
          'Inventar número é informação falsa.',
          'Encaminhar ao setor de tributação ou protocolar consulta.',
          'Cortesia não substitui a tabela.',
        ],
        result: 'Não afirma alíquota de memória. Encaminha com rastro.',
      },
      {
        title: 'Exercício guiado — protocolo e alvará',
        setup: 'Carimbo e número no requerimento de alvará.',
        steps: [
          'Tarefa: natureza jurídica do carimbo.',
          'Protocolo = tramitação.',
          'Alvará = ato negocial posterior da autoridade.',
        ],
        result: 'O comprovante prova a entrada. Não vale como autorização de funcionamento.',
      },
    ],
    recallPrompts: [
      'O cidadão protocola requerimento escrito. Qual é o direito elementar?',
      'O agente pode anular multa de outro setor no guichê?',
      'O que fazer quando não se tem a alíquota na tela?',
      'Qual a relação entre o carimbo de protocolo e o alvará?',
      'Encaminhar ao setor errado com sorriso é bom atendimento?',
    ],
    recallAnswers: [
      'Registro e comprovante (número de protocolo). O papel não pode desaparecer sem rastro.',
      'Não. Informa o caminho, protocola o requerimento e encaminha a quem tem competência.',
      'Não inventar o valor. Indicar o setor de tributação ou protocolar a consulta.',
      'O carimbo prova a entrada do pedido. O alvará é outro ato, da autoridade competente, depois do deferimento.',
      'Não. Cortesia não substitui competência. Encaminhamento certo faz parte do atendimento ao público.',
    ],
    commonErrors: [
      'Segurar documento sem protocolar.',
      'Dar informação de outro setor “de cabeça”.',
      'Inventar prazo ou alíquota.',
      'Usurpar mérito (anular, deferir) no guichê.',
    ],
    traps: [
      'Tratar protocolo como favor.',
      'Tratar protocolo como o próprio alvará.',
      'Prioridade legal como apadrinhamento.',
    ],
    relatedLessonIds: ['esp-qualidade', 'esp-arquivo', 'esp-atos'],
    relatedEditalItems: ['ed-esp-08'],
    synthesis:
      'O cidadão entra com um pedido; sai com informação correta ou com número de protocolo. O guichê informa e registra; não pratica o ato de mérito alheio.',
    glossary: [
      { term: 'Guichê', definition: 'Ponto de atendimento presencial em que o agente informa, recebe e protocola.' },
      { term: 'Mérito do pedido', definition: 'A decisão de deferir, indeferir ou anular — da autoridade competente, não do carimbo.' },
    ],
    masteryCriteria: [
      'Descrever o fluxo de um atendimento completo com protocolo.',
      'Saber o que não pode ser resolvido no guichê.',
      'Distinguir carimbo de protocolo e alvará.',
      'Encaminhar com rastro quando o setor não for competente.',
    ],
    questionIds: ['esp-pub-01', 'esp-pub-02', 'esp-pub-03', 'esp-pub-04', 'esp-pub-05'],
  }),
]
