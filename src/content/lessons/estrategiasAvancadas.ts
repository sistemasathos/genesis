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

export const estrategiasAvancadasLessons: Lesson[] = [
  est({
    id: 'est-anatomia',
    topicId: 'est-anatomia',
    title: 'Anatomia do enunciado: sete etapas',
    objective: 'Decompor qualquer questão objetiva em tarefa, conhecimento, dados, estratégia, execução, conferência e armadilha.',
    importance: 'Módulo complementar. Treina o raciocínio de resolução; não vale pontos próprios.',
    estimatedMinutes: 26,
    prerequisites: ['est-comando'],
    essencial: [
      named(
        'Responder à pergunta que foi feita',
        'Uma questão objetiva é um problema com um comando, um conjunto de dados e quatro ou cinco caminhos. O erro mais caro não é “não saber a matéria”: é responder a uma pergunta que o examinador não fez. A anatomia força a ordem: tarefa primeiro, conceito depois, dados em seguida. Pular para a letra que “parece de protocolo” sem nomear a tarefa é o reflexo que o distrator espera.',
      ),
      named(
        'As sete etapas em ordem',
        'As sete etapas: (1) tarefa, (2) conhecimento, (3) dados relevantes, (4) estratégia, (5) execução, (6) verificação, (7) armadilhas. Pule uma e o distrator ganha. Tarefa é o polarizador (lição de comando). Conhecimento é o nome do instituto ou da operação. Dados são o que altera a resposta, não o enredo. Estratégia é o método (literal, aplicada, cálculo, combinação de romanos). Execução faz o trabalho. Verificação pergunta se a letra responde exatamente ao comando. Armadilha nomeia o erro que você recusou.',
      ),
      named(
        'Cinco caminhos em Itarema, quatro no corpus',
        'Itarema terá 5 alternativas (A–E, item 13.7). Os 7 cadernos locais têm 4 (A–D) em 280/280. Treinar só no formato antigo deixa de exercitar a quinta opção. A anatomia não muda: a quinta letra é mais um caminho, não uma letra mágica. Sem gabarito nos 280, a decomposição se treina em itens inéditos da plataforma, não em “qual era o gabarito da prova1”.',
      ),
    ],
    completo: [
      named(
        'Etapa 1 — tarefa',
        'Sublinhe o verbo: assinale, identifique, calcule, classifique, julgue, complete. Transforme o comando numa pergunta de uma linha. Se o comando for EXCETO, a pergunta é “qual é a falsa?”. Se for “está incorreto, EXCETO”, a pergunta é “qual é a verdadeira?”. Se for “é correto o que se afirma em”, a pergunta é “quais romanos são V e qual letra combina?”. Sem essa linha, as etapas 2 a 7 resolvem o tema e erram a tarefa. Volte à lição de comando sempre que o polarizador não estiver claro.',
      ),
      named(
        'Etapa 2 — conhecimento',
        'Qual regra resolve? Concordância? PATI? RAM volátil? Win+L no Windows 11? Anulação versus revogação? Se você não sabe nomear o conceito em cinco segundos, a questão é de conteúdo — volte à lição da disciplina, não chute letra. Nomear o conceito não é recitar o resumo inteiro: é dizer a peça que o comando pediu. “Isso é atributo, não requisito” já é conhecimento suficiente para não marcar COIFI no lugar de PATI.',
      ),
      named(
        'Etapa 3 — dados',
        'Separe o que altera a resposta do enredo. “No protocolo da sexta-feira…” quase nunca muda a regra do comprovante versus o alvará. Já “no Writer, não no Word” muda o atalho. “Windows 11” invalida o terminal do Ubuntu. “De acordo com o texto” transforma o trecho em dado e o seu saber de atos em enredo. Números e unidades em RLM são dados; o nome do munícipe, em regra, não. Se o detalhe não altera a norma nem a operação, ignore-o na execução.',
      ),
      named(
        'Etapa 4 — estratégia',
        'Escolha o método antes de calcular ou de “sentir” a letra. Literal: recuperar definição ou lista (COIFI, CCO, byte = 8 bits). Aplicada: fato + regra (protocolo ainda não despachado). Cálculo: copiar números, conferir unidade. Romanos: julgar I, II e III sozinhos e combinar — 39/280 no corpus local, método independente de prever Itarema. Negativa: 24/280 na amostra; a estratégia é achar o intruso. A estratégia errada mais comum é levar ordem de grandeza de RLM para um item de interpretação.',
      ),
      named(
        'Etapas 5 e 6 — execução e verificação',
        'Execute só o que a estratégia escolheu: traduzir o latinismo, fazer a conta, julgar o romano, aplicar o instituto ao fato. Depois confira se a alternativa escolhida responde exatamente à pergunta da etapa 1. A letra pode estar certa para outra pergunta — e aí a verificação falha, mesmo com execução impecável. Confira também k se for chute residual: se ainda há motivo de descarte, você não terminou a eliminação. Na folha real, a verificação inclui “uma marca só, sem rasura” (13.9).',
      ),
      named(
        'Etapa 7 — armadilhas',
        'Liste o erro que o distrator quer: conceito vizinho, parcial verdade, outra pergunta, lei revogada (8.666 em 13/280 locais, não ementa de Itarema), atalho de outro sistema, órgão alheio (CRF-RJ, Jaguaribe). Nomear a armadilha depois de marcar não é teatro: é o mesmo gesto da eliminação fundamentada. Se você não consegue nomear a isca, talvez tenha marcado a isca. Hipótese, não fato: o elaborador costuma gastar mais tempo no distrator do que na certa. Isso não autoriza escolher a “mais elaborada”. Só autoriza ler a diferença pontual entre duas alternativas parecidas.',
      ),
    ],
    aprofundamento: [
      named(
        'Anatomia em romanos e em texto-base',
        'Em item romano (39/280 na amostra), a etapa 1 é a combinação; a etapa 2 se aplica a cada afirmativa; a etapa 5 julga V/F uma a uma; a etapa 6 monta a letra. Pular a 5 e “aceitar o conjunto porque a I está certa” é a armadilha da 7. Em texto-base (18/280 stems com rótulo TEXTO; prova1 concentra 9; prova3 tem texto longo sem o rótulo), a etapa 3 é o trecho, não o mundo. A tipologia predominante não é o único gênero que aparece no texto.',
      ),
      named(
        'O que a anatomia não mede',
        'Não há cronometragem oficial nem gabarito nos 280. A decomposição não gera “tempo cognitivo médio da IDIB”. Gera hábito. Itarema: 50 itens, 4 horas, A–E, peso 2,0. Use as sete etapas no treino da plataforma; na prova, a etapa 6 inclui a folha e o tipo de caderno (lição de tempo). Complementary: esta lição não vale pontos próprios. Vale reduzir o erro de responder à pergunta errada nas quatro disciplinas que valem.',
      ),
    ],
    revisaoRapida: blocks(
      'Comando → conceito → dados → método → conta/leitura → a alternativa responde à pergunta? → qual pegadinha eu evitei?',
      'Enredo (sexta-feira, nome do munícipe) ≠ dado (Writer, Windows 11, “segundo o texto”).',
      'A–E em Itarema; A–D nos 280. Sem gabarito local. Sem letra mágica.',
    ),
    definitions: [
      { term: 'Anatomia da questão', definition: 'Decomposição do item em tarefa, conhecimento, dados e caminho de resolução.' },
      { term: 'Enredo', definition: 'Detalhe do stem que não altera a regra nem a operação (dia da semana no protocolo, nome do cidadão).' },
    ],
    comparisons: [
      {
        title: 'Dado relevante × enredo',
        leftLabel: 'Dado (altera a resposta)',
        rightLabel: 'Enredo (ignore na execução)',
        rows: [
          { label: 'Informática', left: '“No Writer”; “Windows 11”', right: '“Na sexta-feira a estação travou”' },
          { label: 'Específicos', left: '“Requerimento ainda não despachado”', right: '“Munícipe impaciente na fila”' },
          { label: 'Português', left: 'Trecho que o comando aponta', right: 'O que você acha que o autor pensaria' },
          { label: 'RLM', left: 'Números e unidades (km vs km²)', right: 'O nome do servidor no problema' },
        ],
      },
    ],
    examples: [
      'Leia “Assinale a incorreta sobre autoexecutoriedade” em três camadas. A tarefa é negativa: a letra certa é a frase falsa. O conceito é um atributo do PATI, não um requisito do COIFI. O dado que decide é que nem todo ato é autoexecutório: cobrar dívida em dinheiro, em regra, exige execução, e o agente não retira o valor no caixa. A alternativa que diz “todo ato administrativo se executa pelos próprios meios da Administração” é a incorreta — e, nesse comando, é a que se marca. Se o comando fosse “está incorreto, EXCETO”, a mesma frase falsa deixaria de ser o gabarito.',
      'Stem com I, II e III sobre anulação. Tarefa: combinação. Conhecimento: ilegalidade × mérito. Dado: a II cola “o juiz revoga”. Estratégia: julgar cada romano. Execução: II falsa. Verificação: letra de I e III. Armadilha: salvar a II porque a primeira oração estava certa.',
      '“No Ubuntu, assinale a correta sobre o atalho do terminal.” Dado: Ubuntu. Win+L (Windows) é enredo de outro sistema se você o carrega de memória. A etapa 3 corta o atalho errado antes da etapa 5.',
    ],
    publicAdminExamples: [
      'Protocolo de alvará na sexta-feira: o dia da semana é enredo; a ausência de despacho é dado. A anatomia impede tratar o carimbo como autorização só porque a fila estava cheia.',
    ],
    procedures: [
      'Escreva as sete etapas em sete palavras no canto: tarefa, conceito, dados, método, faço, confiro, isca.',
      'Não olhe as letras antes da etapa 1.',
      'Se a etapa 2 não nomeia o conceito em cinco segundos, marque dúvida e siga — conteúdo, não letra.',
      'Na etapa 7, diga em voz alta o distrator recusado.',
    ],
    workedExamples: [
      {
        title: 'Decomposição de um item de específicos',
        setup: 'Stem hipotético da plataforma (não é item oficial): “No protocolo, o carimbo e o número no requerimento de alvará”. Alternativas misturam protocolo com deferimento.',
        steps: [
          'Tarefa: o que o carimbo é, juridicamente.',
          'Conhecimento: protocolo ≠ ato de deferir.',
          'Dados: alvará ainda será decidido pela autoridade.',
          'Estratégia: distinguir registro de tramitação e ato negocial.',
          'Execução: a certa descreve comprovante de entrada.',
          'Verificação: a alternativa não transforma o contínuo em autoridade de polícia.',
          'Armadilha: “carimbo = alvará”.',
        ],
        result: 'A resolução começa pelo conceito, não pela simpatia do munícipe na fila.',
      },
      {
        title: 'Exemplo resolvido 2 — comando negativo em PATI',
        setup: 'Stem hipotético: “Assinale a incorreta sobre autoexecutoriedade.” Uma letra afirma que todo ato se executa pelos próprios meios da Administração.',
        steps: [
          'Tarefa: uma negação. Marcar a falsa.',
          'Conhecimento: autoexecutoriedade é atributo do PATI, condicionado à norma.',
          'Dados: nenhum caso concreto; a própria universalidade é o dado (“todo”).',
          'Estratégia: literal com limite da regra.',
          'Execução: a frase do “todo” cai. Cobrança de dívida em dinheiro, em regra, exige execução.',
          'Verificação: o comando pedia a incorreta; essa é a letra.',
          'Armadilha: marcar a definição correta de PATI, que neste comando é distrator.',
        ],
        result: 'Anatomia + polarizador. A lista certa de PATI não pontua quando a tarefa é achar o excesso.',
      },
      {
        title: 'Exercício guiado — RLM com unidade',
        setup: 'Problema hipotético pede área em km². Uma alternativa repete um comprimento em km que aparece no stem.',
        steps: [
          'Tarefa: valor da área, não do lado.',
          'Conhecimento: área é produto de dimensões; unidade km².',
          'Dados: as medidas lineares; o pedido é área.',
          'Estratégia: cálculo + conferência de dimensão.',
          'Execução: opere e olhe a unidade da letra.',
          'Verificação: a letra em km responde a outra pergunta.',
          'Armadilha: “o número que aparece mais no texto”.',
        ],
        result: 'Etapa 3 e etapa 6 juntas eliminam a unidade vizinha. Ordem de grandeza sem unidade ainda erra.',
      },
    ],
    examInsights: [{
      claim: 'Itarema terá 5 alternativas (A–E). Os 7 cadernos locais têm 4 (A–D). Treinar só no formato antigo deixa de exercitar a quinta opção.',
      evidence: 'Edital item 13.7; 280/280 extraídas são A–D.',
      level: 'observado',
    }],
    recallPrompts: [
      'Quais são as sete etapas, em ordem?',
      'O que muda se o comando for EXCETO?',
      'Como separar dado de enredo no protocolo de alvará?',
    ],
    recallAnswers: [
      'Tarefa, conhecimento, dados, estratégia, execução, verificação e armadilhas.',
      'A pergunta vira “qual é a falsa?”. A frase verdadeira deixa de ser o gabarito e vira distrator.',
      'Dado: não há despacho de deferimento. Enredo: dia da semana, impaciência na fila. O carimbo continua sendo registro de entrada.',
    ],
    commonErrors: [
      'Ler alternativas antes do comando.',
      'Tratar o enredo como se fosse a regra.',
      'Nomear o tema (“é de atos”) sem nomear o conceito (“é protocolo, não alvará”).',
      'Levar o método de RLM para item de interpretação.',
    ],
    traps: [
      'Alternativa certa para outra pergunta.',
      'Escolher a “mais elaborada” porque o elaborador “gastaria mais tempo nela” — hipótese, não método.',
      'Afirmativa romana mista salva pela primeira oração.',
    ],
    relatedLessonIds: ['est-comando', 'est-estruturas'],
    relatedEditalItems: ['ed-est-05'],
    synthesis: 'Resolver é obedecer ao comando com o conceito certo e os dados certos — nesta ordem. A sétima etapa nomeia a isca que você recusou.',
    glossary: [
      { term: 'Distrator', definition: 'Alternativa desenhada para um erro previsível, não um palpite aleatório.' },
      { term: 'Verificação', definition: 'Checagem de que a letra escolhida responde à pergunta da etapa 1, não ao tema.' },
    ],
    masteryCriteria: [
      'Decompor 5 itens inéditos nas sete etapas sem olhar o gabarito primeiro.',
      'Separar, em um stem de protocolo, o dado (ausência de despacho) do enredo (dia da semana).',
      'Ajustar a etapa 1 quando o comando for EXCETO e quando for dupla negação.',
    ],
    questionIds: ['est-anat-01', 'est-anat-02', 'est-rec-01'],
  }),
  est({
    id: 'est-estruturas',
    topicId: 'est-estruturas',
    title: 'Estruturas observadas no corpus IDIB local',
    objective: 'Reconhecer as formas de enunciado que aparecem de fato nos 7 cadernos extraídos, com numerador e denominador.',
    importance: 'Treinamento baseado em 280 itens sem gabarito. Não é previsão da prova de Itarema.',
    estimatedMinutes: 28,
    prerequisites: ['est-anatomia'],
    essencial: [
      named(
        'O que é o corpus local',
        'Corpus: prova1, 3, 4, 5, 6, 7 e 8. prova2 omitida (duplicata de prova1: mesmo órgão, cargo, Tipo A e mesmos enunciados; muda o carimbo PCI Concursos). 40 itens por caderno, A–D em 280/280. Gabarito ausente: não se treina “letra que mais cai”. Órgãos: Salgueiro/PE, Palmácia/CE, Mamanguape/PB, Ouricuri/PE, Jaguaribe/CE, CRF-RJ, Limoeiro do Norte. Itarema é outro certame: 50 questões, A–E, 4 horas, distribuição 14/6/6/24.',
      ),
      named(
        'Estruturas com evidência numérica',
        'Estruturas com evidência numérica neste acervo: texto-base (18 stems com TEXTO I/II/III), romanos (39/280), EXCETO/incorreta/NÃO (24/280), latinismos como objeto (8/280), Lei 8.666 no stem (13/280 — e essa lei está revogada). V/F ou associação de colunas: 5/280. Sem denominador, a frase sobre a banca é hipótese. Sem gabarito, nenhuma dessas frações vira “o que mais cai como letra”.',
      ),
      named(
        'Estilo treina; silabo alheio não',
        'Você treina o método (julgar romanos, achar o intruso, voltar ao texto). Não treina farmácia do CRF-RJ nem a legislação de Jaguaribe como se fossem o Anexo IV de Agente Administrativo de Itarema. 8.666 nos 13 stems antigos reconhece o distrator histórico; não autoriza estudá-la como vigente nem como linha deste cargo (revogada pela 14.133/2021).',
      ),
    ],
    completo: [
      named(
        'Romanos e combinação — 39/280',
        '39/280. Julgue I, II e III isoladamente. A alternativa é a combinação, não o conteúdo. 15 itens usam “Assinale se apenas a afirmativa…”; 12 usam “É correto o que se afirma”. prova1 sozinha tem 10; prova3 tem 1; prova4 tem 8; prova5 tem 6; prova6 tem 7; prova7 tem 4; prova8 tem 3. Frase com duas ideias, uma falsa, é falsa. Não aceite o conjunto porque “a I está certa”. Hipótese ainda não confirmada: Itarema repetirá essa densidade em caderno de 50. O método independe da densidade.',
      ),
      named(
        'Comando negativo — 24/280',
        '24/280. prova1: 3; prova3: 2; prova4: 2; prova5: 3; prova6: 2; prova7: 4; prova8 concentra 8. A certa é o intruso. As quatro ou três restantes são verdadeiras e por isso atraentes. Outra varredura, automática e sobreposta, acha comando negativo literal (incorreta, incorreto ou exceto) em 17/280 — esta lição registra 24 quando entra o NÃO. Não misture as duas frações como se fossem a mesma contagem. Em Itarema, com A–E, a lógica do intruso permanece; o número de iscas sobe.',
      ),
      named(
        'Texto-base — 18 stems com rótulo',
        '18/280 stems citam TEXTO I/II/III (prova1 concentra 9; prova4: 1; prova5: 4; prova6: 3; prova8: 1). prova3 tem texto-base longo, mas os stems em geral não usam o rótulo. Português, numa varredura sobreposta, tem texto ou trecho em 30/79 — categoria sobreposta, não substitui 18/280. Tipologia predominante não é o único gênero que aparece no texto. “De acordo com o texto” ancora no trecho; “infere-se” exige pista, não opinião. Não está demonstrado que Itarema repetirá 14 itens de português com o mesmo peso de texto da prova1.',
      ),
      named(
        'Latinismos como objeto — 8/280',
        '8/280 itens têm o latinismo como objeto, não mera citação incidental: prova3 (stricto sensu, sine qua non, ipsis litteris, data venia), prova4 (caput), prova6 (bis in idem; um item com ad causam, vacatio legis, ad hoc, in totum; interna corporis). Caem em específicos, não só em Português. Traduza a expressão antes de olhar o contexto do órgão. Chutar pelo “som jurídico” é o erro previsível. Isso treina vocabulário de expediente; não autoriza estudar latinismo de processo penal que o Anexo IV não pede.',
      ),
      named(
        'Lei 8.666 em 13/280 — distrator histórico',
        '13/280 stems citam Lei 8.666/93 ou 8666/93 (prova3: 1; prova4: 2; prova5: 0 no stem; prova6: 3; prova7: 3; prova8: 4). A lei foi revogada pela 14.133/2021. Não está no Anexo IV deste cargo. Use a fração só para reconhecer o distrator: alternativa que a trata como vigente e como programa de Itarema cai por vigência e por silabo. Não invente gabarito desses 13 itens: não há chave no PDF. Licitações podem aparecer na atribuição do cargo como auxiliar em compras; ainda assim não viram linha autônoma deste programa.',
      ),
      named(
        'Limites do corpus: órgão, formato e categorias sobrepostas',
        'prova7 é CRF-RJ (farmácia: fora). prova5 e prova6 têm bloco “outras” (conhecimentos gerais / município): fora do Anexo IV de Itarema. Cadernos de 40 × prova de 50. A–D × A–E. V/F ou colunas: 5/280. Varredura sobreposta, que não substitui as frações acima: I/II/III em 40/280 (a lição usa 39 para romanos com combinação); “Assinale” em 87/280. Método visível no stem, sem apontar gabarito: julgar item a item; comparar sujeito, alcance, condição, exceção e efeito; separar fato de conceito. CREMERJ, Barreiras, Jaguaribe, Limoeiro e Petrolina só mostram que o peso muda de órgão. Itarema permanece 14/6/6/24.',
      ),
    ],
    aprofundamento: [
      named(
        'O que a amostra não demonstra',
        'Não demonstra que o IDIB de Itarema “sempre” usa romanos em específicos. Não demonstra letra mais frequente. Não demonstra fração de itens literais versus aplicados (isso exigiria classificação com chave — e não há chave). Não demonstra que figuras perdidas no OCR (charges, mapas, ícone Windows) serão o formato de 06/12/2026. Machado/MG tem gabarito no site da banca e não está neste corpus: não some letras de lá com os 280. Viés de repositório: cadernos que chegaram a docs/fontes, não amostra aleatória da IDIB.',
      ),
      named(
        'Como usar as frações no treino',
        'Treine em cinco alternativas, mesmo a amostra sendo A–D. Use romanos e EXCETO como forma, com conteúdo de Itarema (atos, protocolo, Windows 11, Writer). Reconheça 8.666 para riscar, não para estudar. Atualize numerador e denominador só com nova extração identificada. Sem denominador novo, não invente contagem. Sem PDF de gabarito da banca, mantenha extracted_pending_key: esta plataforma não inventa chave oficial da IDIB.',
      ),
    ],
    revisaoRapida: blocks(
      'Romanos 39/280. Negativa 24/280. Texto 18/280. Latinismo 8/280. 8.666 em 13/280 (revogada). V/F 5/280.',
      'prova2 omitida. 280 A–D, sem gabarito. Itarema = 50 × A–E, 14/6/6/24.',
      'Estilo sim; farmácia do CRF, Jaguaribe e 8.666 vigente não. Sem letra mágica.',
    ),
    definitions: [
      { term: 'Corpus local', definition: '280 questões extraídas dos PDFs em docs/fontes, 7 cadernos distintos, sem gabarito oficial.' },
      { term: 'Categoria sobreposta', definition: 'Outra varredura automática sobre os mesmos 280, que não substitui a fração já fechada (ex.: 17 versus 24 de negativos).' },
    ],
    comparisons: [
      {
        title: 'Amostra local × prova de Itarema',
        leftLabel: '7 cadernos extraídos',
        rightLabel: 'Itarema (Edital 01/2026)',
        rows: [
          { label: 'Itens', left: '40 por caderno; 280 no total', right: '50' },
          { label: 'Alternativas', left: 'A–D (280/280)', right: 'A–E (item 13.7)' },
          { label: 'Gabarito neste acervo', left: 'Ausente', right: 'Ainda não existe neste banco; não se inventa' },
          { label: 'Distribuição', left: 'Varia (prova7 sem RLM; prova3 sem Informática)', right: '14 PT / 6 RLM / 6 Inf / 24 Esp' },
          { label: 'Uso legítimo', left: 'Forma do enunciado (romanos, EXCETO, texto)', right: 'Programa do Anexo IV e regras 13.4–13.16' },
        ],
      },
    ],
    examples: [
      'Na amostra local, prova1 organiza o caderno em bloco de interpretação, depois RLM, depois específicos por volta das questões 21 a 40. Isso descreve aqueles PDFs de 40 itens, não a prova de Itarema, que terá 50. prova7 é o caderno do CRF-RJ e cobra farmácia: esse conteúdo não entra no Anexo IV de Agente Administrativo de Itarema. Usar um item de conselho de farmácia como se fosse ementa municipal é o erro de corpus. O método (texto-base, romanos, EXCETO) pode ser treinado; o assunto do órgão alheio, não.',
      'prova8 concentra 8 dos 24 comandos negativos. Isso descreve Limoeiro do Norte na amostra, não uma lei da banca para Itarema. Treine achar o intruso; não aposte que virão oito EXCETO.',
      'Um stem com data venia ou caput (latinismo-objeto, 8/280) pede o sentido da expressão. Traduza primeiro. O órgão da capa não altera a tradução.',
    ],
    publicAdminExamples: [
      'No expediente de Itarema, um item romano sobre protocolo (I. o carimbo prova a entrada; II. o carimbo já é o alvará; III. o deferimento é da autoridade competente) treina a forma 39/280 com o silabo certo. A II é falsa; a combinação é I e III. Isso não é gabarito de caderno antigo: é item didático da plataforma.',
    ],
    procedures: [
      'Ao ver I, II e III, julgue cada um; só então combine. Não use a fração 39/280 para chutar a letra.',
      'Ao ver EXCETO/incorreta/NÃO, reescreva “qual é a falsa?”.',
      'Ao ver TEXTO I, volte ao trecho. Tipologia predominante ≠ trecho isolado.',
      'Ao ver 8.666, recorde: revogada, fora do Anexo IV, 13/280 de ruído.',
      'Ao ver órgão alheio no material de treino, extraia a forma, descarte o silabo.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — ler 39/280 sem virar regra',
        setup: 'Colega de treino afirma: “A IDIB sempre cobra romanos em específicos; são 39 questões, então em Itarema virão muitas.”',
        steps: [
          '39 é numerador; 280 é denominador. Amostra de cadernos de 40, órgãos diversos, sem gabarito.',
          'prova1 sozinha tem 10; prova3 tem 1. A densidade já varia dentro da amostra.',
          'Itarema: 50 itens, 24 de específicos, A–E. Promover 39/280 a “sempre” é o nível não demonstrado.',
          'Uso correto: treinar julgar I, II e III. Uso errado: apostar quantos romanos virão.',
        ],
        result: 'Conte com numerador e denominador. Sem denominador, a frase sobre a banca é hipótese.',
      },
      {
        title: 'Exemplo resolvido 2 — 8.666 no stem antigo',
        setup: 'Item extraído (sem gabarito) cita Lei 8.666/93. O candidato pergunta se deve incluir a lei no ciclo de Itarema.',
        steps: [
          'Contagem: 13/280 stems. Observado.',
          'Vigência: revogada pela 14.133/2021.',
          'Programa: não está no Anexo IV do Agente Administrativo de Itarema.',
          'Não há chave: não se diz qual letra era a certa naquele caderno.',
          'Treino: reconhecer a letra que a trata como vigente e eliminá-la em item inédito da plataforma.',
        ],
        result: '13/280 ensina o distrator. Não ensina a lei como matéria nem inventa gabarito.',
      },
      {
        title: 'Exercício guiado — prova7 e o silabo',
        setup: 'Caderno do CRF-RJ (prova7) tem 40 itens A–D de Agente Administrativo, banca visível no carimbo IDIB.',
        steps: [
          'Forma: pode haver romanos, informática, português — úteis como estilo.',
          'Conteúdo de farmácia: fora do Anexo IV de Itarema.',
          'Não some esses temas ao programa municipal.',
          'Não calcule letra: não há gabarito neste PDF.',
        ],
        result: 'Mesma banca, outro órgão. Estilo sim; ementa não.',
      },
    ],
    examInsights: [
      {
        claim: 'Afirmativas em romano com combinação de respostas aparecem em 39 das 280 questões.',
        evidence: 'docs/extracoes/relatorio-provas.md, contagem sobre o JSON extraído.',
        level: 'observado',
      },
      {
        claim: 'O IDIB de Itarema “sempre” usa romanos em específicos.',
        evidence: 'Amostra de outros órgãos, cadernos de 40 itens, sem gabarito. Não dá para promover a 39/280 a regra da prova de 50.',
        level: 'nao_demonstrado',
      },
    ],
    recallPrompts: [
      'Quantos itens do corpus local usam romanos?',
      'Por que 8.666 no caderno antigo não vira matéria de Itarema?',
      'Cite as frações de negativa, texto-base e latinismo-objeto.',
    ],
    recallAnswers: [
      '39 das 280 questões extraídas.',
      'A lei foi revogada pela 14.133/2021 e não está no Anexo IV deste cargo. O caderno antigo descreve outro órgão e outro programa.',
      'Negativa 24/280; texto com rótulo TEXTO 18/280; latinismo como objeto 8/280.',
    ],
    commonErrors: [
      'Transformar 39/280 em “a banca sempre cobra assim”.',
      'Estudar 8.666 como se vigente.',
      'Tratar o caderno do CRF-RJ como programa municipal de Itarema.',
      'Misturar a varredura 17/280 de negativos com a contagem 24/280 como se fossem o mesmo número.',
    ],
    traps: [
      'Tratar o caderno do CRF-RJ como programa municipal de Itarema.',
      'Somar prova2 aos 280 (é duplicata de prova1).',
      'Inventar gabarito dos 280 ou ranking de letras.',
    ],
    relatedLessonIds: ['est-anatomia', 'est-literal-aplicada'],
    relatedEditalItems: ['ed-est-06'],
    synthesis: 'Conte com numerador e denominador. Sem denominador, a frase sobre a banca é hipótese. Estilo do corpus treina; silabo alheio e lei revogada não entram no Anexo IV.',
    glossary: [
      { term: 'Tendência provisória', definition: 'Recorrência em amostra ainda pequena, heterogênea ou sem gabarito.' },
      { term: 'extracted_pending_key', definition: 'Status das 280 extraídas: sem chave oficial; não entram em treino pontuado como gabarito da banca.' },
    ],
    masteryCriteria: [
      'Citar as quatro estruturas com as frações do relatório.',
      'Recusar qualquer dica de letra com base neste acervo.',
      'Explicar por que prova7 (CRF-RJ) e 13/280 de 8.666 não atualizam o programa de Itarema.',
    ],
    questionIds: ['est-rec-01', 'est-rec-02', 'est-rec-03', 'est-rec-04'],
  }),
  est({
    id: 'est-literal-aplicada',
    topicId: 'est-literal-aplicada',
    title: 'Cobrança literal versus aplicação',
    objective: 'Distinguir o item que pede a definição daquele que pede a regra no caso concreto, sem chamar todo item difícil de pegadinha.',
    importance: 'Nos específicos e em informática, o mesmo conceito muda de cara quando ganha um munícipe na fila.',
    estimatedMinutes: 24,
    prerequisites: ['est-estruturas'],
    essencial: [
      named(
        'Literal: recuperar a lista ou o dispositivo',
        'Literal: a alternativa parafraseia o conceito (COIFI, CCO, byte = 8 bits, PATI, fecho “Respeitosamente”). A operação é lembrar com precisão. O distrator troca uma peça da lista (atributo no lugar de requisito) ou cola um absoluto indevido (“sempre”). Dificuldade aqui é memória fina, não “pegadinha”.',
      ),
      named(
        'Aplicada: fato + regra',
        'Aplicada: há um fato (protocolo, planilha, ofício, multa com execução prevista) e você escolhe a conduta ou o instituto que cabe. A operação é reconhecer o conceito no caso. O mesmo PATI, agora dentro de uma história. Quem decorou a sigla e não sabe aplicá-la marca “competência”. Quem só lê a história e esquece o nome marca o vizinho.',
      ),
      named(
        'Difícil não é o mesmo que pegadinha',
        'A complexidade pode vir do assunto, do texto, da combinação de dois conceitos ou de uma condição (“somente”, “em regra”). Nem toda dificuldade é pegadinha. Pegadinha, neste módulo, é armadilha de leitura ou de conceito vizinho. Não há fração “X% literais” nos 280: isso exigiria classificação manual com chave — e não há chave. A distinção se treina nos inéditos da plataforma e nos mecanismos visíveis no stem.',
      ),
    ],
    completo: [
      named(
        'Quando o contexto altera a regra',
        '“No Writer” muda o atalho de Título 1. “Requerimento ainda não despachado” impede tratar o protocolo como alvará. “Windows 11” invalida o gadget do Vista e o terminal do Ubuntu. Se o detalhe não altera a norma, é cenário, não dado: a sexta-feira no protocolo, o nome do munícipe, a fila cheia. A cobrança aplicada vive ou morre nessa separação. A cobrança literal quase não usa o cenário: pede a lista.',
      ),
      named(
        'Parcialmente verdadeira nos dois formatos',
        'Começa certa e termina com um excesso (“sempre autoexecutório”, “gratuito = livre”). Risque o trecho que não sobrevive à exceção. No literal, o excesso costuma ser o absoluto colado à lista certa. No aplicado, o excesso costuma ser a conduta errada no fim da história (“e, portanto, o servidor já declara o alvará concedido”). Nos dois, a letra cai inteira. Não chame isso de pegadinha se o limite da regra estava na lição de atos.',
      ),
      named(
        'O mesmo conceito em duas cobranças',
        'Autoexecutoriedade ilustra o par. Literal: “PATI reúne quais atributos?”. A resposta é a lista (presunção, autoexecutoriedade, tipicidade, imperatividade); requisito do COIFI no lugar de atributo está errado. Aplicada: “A multa de trânsito, quando a lei autoriza a Administração a executá-la pelos próprios meios, ilustra qual atributo?”. O mesmo PATI, agora no fato. Quem só memorizou a lista marca “todo ato é autoexecutório” e erra a aplicação. Quem só leu a história marca “competência”. O atributo pedido é a autoexecutoriedade, e só quando a norma autoriza a execução direta.',
      ),
      named(
        'Enredo versus dado na aplicação',
        'Situações de expediente nos blocos de específicos dos cadernos locais são tendência qualitativa (blocos 21–40 dos cadernos de 40), não contagem fechada de “situação prática”. Isso não prediz o recorte de Itarema (24 específicos em 50). Prediz o hábito: isolar o fato jurídico. Protocolo sem despacho = registro. Parecer sem acolhimento = opinião. Certidão = declaração do que consta, não criação do direito. O enredo (sexta-feira, voz alta na fila) não muda COIFI nem PATI.',
      ),
      named(
        '“Em regra”, “somente” e o limite do conceito',
        'A cobrança literal que inclui “em regra” pede que você não estoure o limite: anulação, em regra, ex tunc; autoexecutoriedade, em regra, não é de todo ato. A cobrança aplicada testa o mesmo limite no caso: cobrar dívida em dinheiro. Hipótese pedagógica, não medida: o elaborador testa se o candidato leu “em regra”. Isso não autoriza riscar todo absoluto, nem chamar o item de pegadinha. Autoriza perguntar: estou recuperando a lista ou aplicando o limite da lista a um fato?',
      ),
      named(
        'Lei revogada no stem aplicado',
        'Quando o caso concreto de compras cita 8.666 como se vigente, a aplicação correta em Itarema é reconhecer o anacronismo: 14.133/2021 revogou; 13/280 itens locais ainda citam a lei antiga; o Anexo IV deste cargo não a toma como linha. Não resolva o “caso” aplicando artigo de lei revogada. Não invente que aqueles 13 itens tinham gabarito X. O mecanismo visível no stem basta: norma morta + fora do silabo = letra que cai na eliminação, seja o item literal (“a lei vigente de licitações é a 8.666”) ou aplicado (“no pregão da prefeitura, nos termos da 8.666…”).',
      ),
    ],
    aprofundamento: [
      named(
        'O que o corpus mostra e o que não mede',
        'Observado qualitativamente nos inéditos da plataforma e nos stems extraídos de específicos: o distrator troca um requisito por um atributo (COIFI × PATI) ou uma lei revogada. Tendência: situações de expediente nos blocos de específicos. Não há X% de literais nos 280. Latinismo-objeto (8/280) costuma ser literal (traduza). Texto-base (18/280 com rótulo) costuma ser aplicado ao trecho, não ao mundo. Romanos (39/280) misturam os dois: cada afirmativa pode ser lista ou caso.',
      ),
      named(
        'Pegadinha não é o nome da dificuldade',
        'Item difícil de concordância no fio do texto continua sendo Português, não “pegadinha da banca”. Item de romanos com afirmativa mista continua sendo julgamento + combinação, não crueldade. Reserve “pegadinha” para a isca desenhada: vizinho, excesso, outra pergunta, 8.666, atalho de outro sistema. Chamar tudo de pegadinha desculpa não ter feito a etapa 2 da anatomia (nomear o conceito).',
      ),
    ],
    revisaoRapida: blocks(
      'Literal = definição. Aplicada = fato + regra. Contexto só importa se muda a operação.',
      'Parcial verdade = corte no excesso. Pegadinha ≠ item difícil.',
      '8.666 no caso concreto: revogada, fora do Anexo IV, 13/280 de ruído. Protocolo não é alvará.',
    ),
    definitions: [
      { term: 'Cobrança literal', definition: 'Item resolvido pela definição ou pelo dispositivo próximo da formulação original.' },
      { term: 'Cobrança aplicada', definition: 'Item resolvido pela regra no caso, não pela memorização da lista.' },
    ],
    comparisons: [
      {
        title: 'Literal × aplicada (mesmo conceito)',
        leftLabel: 'Literal',
        rightLabel: 'Aplicada',
        rows: [
          { label: 'PATI', left: 'Listar presunção, autoexecutoriedade, tipicidade, imperatividade', right: 'Multa com execução prevista em lei ilustra autoexecutoriedade — e nem todo ato a tem' },
          { label: 'Protocolo', left: 'Definir como registro de tramitação', right: 'Carimbo do alvará ainda não despachado não autoriza funcionamento' },
          { label: 'Informática', left: 'Byte = 8 bits; RAM volátil', right: 'Atalho de Título 1 no Writer, não no Word' },
          { label: 'Erro típico', left: 'Trocar peça da lista (COIFI × PATI)', right: 'Responder à história e não ao instituto' },
        ],
      },
    ],
    examples: [
      'Cobrança literal: “PATI reúne quais atributos?”. A resposta é a lista (presunção, autoexecutoriedade, tipicidade, imperatividade), e qualquer atributo trocado por um requisito do COIFI está errada. Cobrança aplicada: “A multa de trânsito, quando a lei autoriza a Administração a executá-la pelos próprios meios, ilustra qual atributo?”. O mesmo PATI, agora dentro de uma história. Quem decorou a sigla e não sabe aplicá-la marca “competência”. Quem só lê a história e esquece o nome marca “imperatividade” porque a multa “manda”. O atributo pedido é a autoexecutoriedade, e só quando a norma autoriza a execução direta.',
      'Literal: “Licença, em regra, é vinculada; autorização é discricionária e precária.” Aplicada: o stem descreve uso precário de bem público com margem legal — autorização, não licença. O vocabulário conhecido na lista não escolhe a letra sozinho.',
      'Literal em informática: “software livre assegura uso, estudo, modificação e redistribuição.” Aplicada: o Word da prefeitura veio instalado e “de graça no orçamento” — continua proprietário. Grátis não é livre.',
    ],
    publicAdminExamples: [
      'Munícipe na sexta-feira cobra o alvará com o comprovante na mão. Cobrança aplicada de protocolo: informar que o número prova a entrada e encaminhar. Não declarar o direito. O dia da semana não altera a regra.',
      'Circular da Secretaria alterando o horário do protocolo é ato geral ordinatório — aplicação de classificação de atos, não recitação da lista COIFI, embora a lista continue verdadeira.',
    ],
    procedures: [
      'Pergunte: estou recuperando a lista ou aplicando a lista a um fato?',
      'Se houver munícipe, documento ou sistema no stem, isole o fato jurídico/administrativo.',
      'Risque o excesso (“sempre”, “todo”, “já vale como alvará”).',
      'Não rotule de pegadinha o item que só exigia o limite da regra.',
    ],
    workedExamples: [
      {
        title: 'Mesmo conceito, duas cobranças',
        setup: 'Autoexecutoriedade.',
        steps: [
          'Item literal: listar PATI.',
          'Item aplicado: cobrança de dívida em dinheiro em regra exige processo — nem todo ato é autoexecutório.',
          'O segundo não é “pegadinha”: é o limite do conceito.',
        ],
        result: 'Quem só memorizou a lista marca “todo ato é autoexecutório” e erra a aplicação.',
      },
      {
        title: 'Exemplo resolvido 2 — protocolo no caso concreto',
        setup: 'Stem hipotético da plataforma (não é item oficial): munícipe protocola pedido de alvará, recebe carimbo e número, volta na segunda e exige o funcionamento autorizado.',
        steps: [
          'Tipo de cobrança: aplicada (há fato).',
          'Instituto: protocolo = registro de tramitação; alvará = ato negocial posterior.',
          'Enredo: dia da semana. Dado: ausência de despacho.',
          'Conduta: informar a entrada e encaminhar. Não declarar o alvará.',
          'A letra que diz “o comprovante já vale como autorização” é aplicação errada, não “pegadinha de fila”.',
        ],
        result: 'A história não muda a regra. Quem só decorou “protocolo é importante” ainda pode marcar o distrator.',
      },
      {
        title: 'Exercício guiado — 8.666 no caso de compras',
        setup: 'Alternativa aplicada: “No auxílio a compras da prefeitura, o agente aplica a Lei 8.666/1993 vigente.”',
        steps: [
          'Não é literal de lista COIFI. É caso de expediente.',
          'A regra vigente de licitações federais é a 14.133/2021. 8.666 foi revogada.',
          'Além disso, licitação não é linha do Anexo IV deste cargo.',
          '13/280 locais citam 8.666: distrator histórico, não chave oficial.',
        ],
        result: 'Aplicação correta começa pela vigência e pelo silabo, não pelo enredo do almoxarifado.',
      },
    ],
    examInsights: [
      {
        claim: 'Situações de expediente predominam nos blocos 21–40 dos cadernos locais de Agente Administrativo — observação qualitativa, não contagem fechada de “situação prática”, e não garantia de que Itarema repetirá o recorte 21–40 (aqui são 24 específicos em 50).',
        evidence: 'docs/analise-idib/construcao-das-questoes.md; distribuição dos cadernos de 40 itens.',
        level: 'tendencia',
      },
    ],
    recallPrompts: [
      'Dê um exemplo literal e um aplicado do mesmo conceito de atos.',
      'Quando o contexto do stem deve ser ignorado?',
      'Por que não há percentual de itens literais nos 280?',
    ],
    recallAnswers: [
      'Literal: listar PATI. Aplicado: “todo ato é autoexecutório” é falso, porque cobrar dívida em dinheiro, em regra, exige execução.',
      'Quando o detalhe não altera a norma nem a operação — dia da semana no protocolo, nome do munícipe, fila cheia. “No Writer” e “ainda não despachado” não se ignoram.',
      'Classificar 280 itens em literal ou aplicada exigiria chave. Os PDFs locais não têm gabarito. A distinção se treina nos inéditos e nos mecanismos visíveis no stem.',
    ],
    commonErrors: [
      'Chamar de pegadinha o item que só exigia o limite da regra.',
      'Marcar “competência” (COIFI) quando o caso pede autoexecutoriedade (PATI).',
      'Tratar o comprovante de protocolo como o ato de deferir, porque a história emociona.',
    ],
    traps: [
      'Alternativa com a lista certa e um “sempre” indevido.',
      '8.666 vigente no caso de compras municipais.',
      'Atalho certo do Word em stem do Writer.',
    ],
    relatedLessonIds: ['esp-atos', 'est-por-disciplina'],
    relatedEditalItems: ['ed-est-07'],
    synthesis: 'Pergunte: estou recuperando a lista ou aplicando a lista a um fato? Pegadinha não é sinônimo de item difícil. Protocolo registra; despacho decide.',
    glossary: [
      { term: 'Pegadinha', definition: 'Armadilha de leitura ou de conceito vizinho — não sinônimo de item difícil.' },
      { term: 'Limite da regra', definition: 'Exceção ou condição (“em regra”, “quando a norma autoriza”) que a lista sozinha não mostra.' },
    ],
    masteryCriteria: [
      'Classificar 6 itens inéditos em literal ou aplicada e justificar.',
      'Dar o par literal/aplicado de PATI e o de protocolo/alvará.',
      'Recusar o rótulo de pegadinha para o item que só cobrava o limite da regra.',
    ],
    questionIds: ['est-rec-05', 'est-rec-06'],
  }),
  est({
    id: 'est-por-disciplina',
    topicId: 'est-por-disciplina',
    title: 'Como cada disciplina formula o problema',
    objective: 'Ajustar o método de leitura a Português, RLM, Informática e Específicos, com base no que o corpus local realmente mostra.',
    importance: 'As quatro disciplinas oficiais não compartilham o mesmo tipo de comando. Forçar um método único gera erro.',
    estimatedMinutes: 26,
    prerequisites: ['est-literal-aplicada'],
    essencial: [
      named(
        'Quatro disciplinas, quatro operações',
        'Português: texto longo, vocabulário, inferência, gramática no fio do texto. RLM: dados e operação; conferir unidade. Informática: nomear o sistema (Windows 11 ≠ Ubuntu; Word ≠ Writer). Específicos: instituto + expediente; cuidado com norma local e lei revogada. Em todas, o comando se lê primeiro (lição est-comando). O que muda é a etapa 2 e a etapa 4 da anatomia: o conceito e o método.',
      ),
      named(
        'Itarema não copia o bloco dos cadernos de 40',
        'Edital: 14 Português (28 pontos), 6 RLM (12), 6 Informática (12), 24 Específicos (48). Corte de 50% em cada uma: 7, 3, 3 e 12 acertos. Cadernos locais: prova1 tem PT 1–10, Inf 11–15, RLM 16–20, Esp 21–40; prova3 não tem Informática; prova7 e prova8 não têm RLM; prova5 e prova6 têm “outras” (município / gerais) — fora do Anexo IV. Treine o peso 14/6/6/24, não o mapa 10+5+5+20. Estratégias são complementares: zero pontos próprios, efeito nas quatro oficiais.',
      ),
      named(
        'Comando primeiro, método depois',
        'EXCETO em Português pede o que o texto não autoriza. EXCETO em específicos pede o instituto falso. A reescrita é a mesma; a evidência muda (trecho versus norma). Romanos aparecem em mais de uma disciplina (39/280 no total da amostra). Não leve ordem de grandeza de RLM para interpretação, nem “feeling” de texto para a conta de km².',
      ),
    ],
    completo: [
      named(
        'Português: volte ao trecho',
        '18/280 stems citam TEXTO I/II/III (prova1 concentra 9). prova3 abre com texto longo mesmo sem o rótulo. Leia o comando, volte ao trecho. Tipologia predominante ≠ trecho narrativo isolado. Crase e regência costumam ser literais; interpretação é aplicada ao texto, não ao mundo. “De acordo com o texto” proíbe doutrina de atos. “Infere-se” exige pista. Não demonstrado: que Itarema repetirá 14 itens de português com o mesmo peso de texto da prova1. O edital só confirma 14/6/6/24 e A–E. Figuras (charges, tirinhas) se perderam em parte no OCR local: não invente o que a imagem “diria”.',
      ),
      named(
        'RLM: copie os números e a unidade',
        'Blocos curtos de 5 itens em vários cadernos de 40 (prova1 Q16–20; prova3 Q16–20; prova4 Q17–20). prova7 e prova8 sem RLM. Em Itarema são 6 itens, corte 3. Copie os números. Dimensão (km vs km²). Ordem de grandeza. Conferência: substitua o resultado no texto. Romanos também aparecem em lógica. O número que “aparece mais” no stem é isca clássica. Método de RLM não se exporta para item de vocabulário: não se “chuta ordem de grandeza” de um adjetivo.',
      ),
      named(
        'Informática: nomeie o programa e o sistema',
        'Presente em prova1, 4, 7 e 8; ausente em prova3, 5 e 6. Itarema cobra 6 itens e nomeia versões (Windows 11, Ubuntu, Word e Writer, Excel e Calc, PowerPoint e Impress, navegadores e correio). O stem que cita Windows 11 invalida o atalho de Ubuntu. Extensão ≠ conversão. CCO ≠ CC. Writer ≠ Word. Livre ≠ gratuito. Win+L bloqueia a sessão no Windows; Ctrl+Alt+T abre o terminal no Ubuntu. A alternativa errada junta os dois porque “os dois fazem alguma coisa no computador”. Leia o sistema operacional antes do teclado.',
      ),
      named(
        'Específicos: instituto + expediente + vigência',
        'Em todos os 7 cadernos, tipicamente Q21–40 — recorte dos cadernos de 40, não o de Itarema (24 em 50). Romanos e situações de balcão. 8.666 em 13/280 itens antigos é ruído para Itarema. Latinismos (8/280) como objeto. Protocolo não é deferimento. Anulação não é revogação. COIFI não é PATI. Licitação não é linha autônoma deste Anexo IV, ainda que a atribuição mencione auxiliar em compras. Lei Municipal 210/2001 e CTB são programa de outros cargos do mesmo edital. Farmácia do CRF-RJ não entra.',
      ),
      named(
        'O que não treinar como se fosse Itarema',
        'Conhecimentos de Jaguaribe (prova6) e gerais (prova5): fora. CRF-RJ: estilo sim, farmácia não. Capas de 40 itens e 3 horas: não são o cronômetro (4h, 50 itens, 08h–12h). A–D: não são o formato (A–E). Gabaritos de Limoeiro 10/10/10/9 e Moraújo 15/11/12/12 e 12/15/11/12: evidência contra frequência, não receita de letra para as quatro disciplinas. 280 locais: sem chave. Não invente “em Português cai mais B”.',
      ),
      named(
        'Cruzar disciplina com anatomia, eliminação e chute',
        'Etapa 1 (comando) é comum. Etapa 2 nomeia o conceito da disciplina. Etapa 4 escolhe o método desta lição. Eliminação: vizinho daquela matéria (Writer/Word; anulação/revogação; km/km²; trecho/mundo). Chute: EV com 5 letras (0,40 … 1,00); corte cruel no bloco de 6 (RLM/Info). Tempo: texto de Português e 24 específicos disputam o relógio; a folha e o tipo de caderno (13.16) valem as quatro disciplinas de uma vez — omissão zera a prova inteira, não um bloco.',
      ),
    ],
    aprofundamento: [
      named(
        'Hipóteses que a amostra não confirma',
        'Não demonstrado: que Itarema repetirá 14 itens de português com o mesmo peso de texto da prova1. Não demonstrado: densidade de romanos dos cadernos de 40 nos 24 específicos. Não demonstrado: padrão de letras por disciplina. O edital só confirma 14/6/6/24, A–E, 4 horas, peso 2,0, corte 50% por disciplina, sem penalidade por erro (13.9). Treine o que está no Anexo IV com o método de cada bloco.',
      ),
      named(
        'Blocos locais como mapa negativo',
        'Saber que prova3 não tinha Informática e que prova7 não tinha RLM evita copiar o “esqueleto” de um PDF antigo como se fosse a prova de 06/12/2026. O mapa positivo é o edital: quatro disciplinas, 50 itens. O mapa complementar é esta sequência de lições: comando, eliminação, chute, tempo, anatomia, estruturas do corpus, literal versus aplicada, método por disciplina. Nenhuma delas pontua sozinha. Todas reduzem o erro nas que pontuam.',
      ),
    ],
    revisaoRapida: blocks(
      'PT: volte ao texto. RLM: copie e confira unidade. Inf: qual programa/SO. Esp: instituto + vigência.',
      'Itarema 14/6/6/24, corte 7/3/3/12. Cadernos de 40 não são o mapa.',
      'Sempre: o comando primeiro. Sem letra mágica. 8.666 e órgão alheio fora.',
    ),
    definitions: [
      { term: 'Método por disciplina', definition: 'Ajuste da leitura ao tipo de operação que a matéria pede neste corpus e neste edital.' },
      { term: 'Bloco curto', definition: 'RLM ou Informática em Itarema: 6 itens, corte 3 — poucos erros eliminam na disciplina.' },
    ],
    comparisons: [
      {
        title: 'Operação cognitiva por disciplina',
        leftLabel: 'O que fazer',
        rightLabel: 'O que não exportar',
        rows: [
          { label: 'Português', left: 'Comando → trecho; inferência com pista', right: 'Doutrina de atos ou “o que eu acho”' },
          { label: 'RLM', left: 'Copiar dados, operar, conferir unidade', right: 'Feeling de texto; número mais repetido' },
          { label: 'Informática', left: 'Nomear SO e programa antes do atalho', right: 'Tratar Writer como Word; Ubuntu como Windows 11' },
          { label: 'Específicos', left: 'Instituto + fato de expediente + vigência', right: '8.666 vigente; CTB; farmácia do CRF; Lei 210/2001 deste cargo' },
        ],
      },
    ],
    examples: [
      'Win+L no Windows 11 bloqueia a sessão. Ctrl+Alt+T no Ubuntu abre o terminal. Os dois são atalhos, e a alternativa errada junta os dois porque “os dois fazem alguma coisa no computador”. O enunciado que diz “no Ubuntu” invalida o atalho do Windows, mesmo que a descrição do efeito pareça próxima. Leia o sistema operacional antes do teclado. O mesmo cuidado vale para Writer e Word: Título 1 não tem o mesmo caminho de menu nos dois.',
      'Item de Português “de acordo com o texto” sobre fila no protocolo: a letra que explica autotutela com perfeição sai se o texto não a diz. Específicos aceitariam a doutrina; este comando, não.',
      'RLM pede área. A letra que repete o comprimento em km do stem é a isca da unidade. Método de específicos (nomear instituto) não detecta isso; conferência de dimensão detecta.',
    ],
    publicAdminExamples: [
      'No mesmo turno de 4 horas, o agente-candidato lê um texto de Português sobre atendimento, um problema de RLM com ofícios protocolados, um atalho de Writer e um caso de alvará. Quatro métodos. Um cartão. Um tipo de caderno. Omissão do tipo zera os quatro blocos (13.16).',
    ],
    procedures: [
      'Antes de marcar, diga em voz alta a disciplina e o método: “PT, volto ao trecho”; “RLM, copio e vejo unidade”; “Inf, qual SO”; “Esp, qual instituto e se a lei está vigente”.',
      'Aplique eliminação com o vizinho daquela matéria.',
      'No bloco de 6, não deixe branco: corte 3/6 (lição de chute + 13.9).',
      'Não estude silabo de outro cargo nem 8.666 como vigente.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — o mesmo polarizador em duas disciplinas',
        setup: 'Dois stems hipotéticos da plataforma (não são itens oficiais). A: “Assinale a incorreta, de acordo com o texto.” B: “Assinale a incorreta sobre anulação.”',
        steps: [
          'Comando idêntico na superfície: uma negação, marcar a falsa.',
          'Em A, a evidência é o trecho. Doutrina verdadeira de atos, se o texto cala, pode ser a incorreta pedida — ou uma certa que o texto sustenta. Só o trecho decide.',
          'Em B, a evidência é a norma/doutrina de atos. O texto de Português não entra.',
          'Exportar o método de B para A é o erro “eu sei a matéria”. Exportar o de A para B é o erro “não está no texto, então anulação não existe”.',
        ],
        result: 'O polarizador é comum. A etapa 2 (conhecimento) e a etapa 3 (dados) mudam com a disciplina.',
      },
      {
        title: 'Exemplo resolvido 2 — bloco curto de Informática e o corte',
        setup: 'Itarema: 6 itens de Informática, corte 3. O candidato arrasa em Português e deixa Informática em branco “para não errar”.',
        steps: [
          '50% por disciplina (13.1, 13.6). Português cheio não salva zero em Informática.',
          'Item 13.9: branco = 0, igual ao erro daquela questão.',
          'Método da disciplina: nomear Windows 11 / Ubuntu / Word / Writer antes de chutar atalho.',
          'Eliminar a letra do sistema errado já sobe EV de 0,40 para 0,50 ou mais.',
        ],
        result: 'Método por disciplina + política de chute. O bloco de 6 elimina quem o trata como opcional.',
      },
      {
        title: 'Exercício guiado — específicos e o caderno do CRF',
        setup: 'O candidato inclui itens de farmácia da prova7 no ciclo de Itarema porque “é Agente Administrativo da IDIB”.',
        steps: [
          'Cargo igual, órgão diferente. prova7: CRF-RJ.',
          'Forma (romanos, informática) pode treinar método.',
          'Conteúdo de farmácia não está no Anexo IV de Itarema.',
          'O método de específicos daqui é instituto de expediente municipal + vigência, não conselho de farmácia.',
        ],
        result: 'Mesma banca não unifica silabo. 14/6/6/24 e o Anexo IV mandam; a capa de outro órgão, não.',
      },
    ],
    examInsights: [
      {
        claim: 'Não demonstrado: que Itarema repetirá 14 itens de português com o mesmo peso de texto da prova1. O edital só confirma 14/6/6/24 e A–E.',
        evidence: 'Edital Anexo IV e itens 13.4–13.7; 18/280 stems com rótulo TEXTO na amostra de 40 itens.',
        level: 'nao_demonstrado',
      },
      {
        claim: 'Os 7 cadernos extraídos usam quatro alternativas (A–D) em 280/280. Itarema, pelo item 13.7, terá cinco (A–E).',
        evidence: 'docs/extracoes/relatorio-provas.md; Edital Itarema 13.7.',
        level: 'observado',
      },
    ],
    recallPrompts: [
      'Qual o método de leitura de cada disciplina oficial, em uma frase?',
      'Qual o corte mínimo em RLM e em Informática, e por que o branco é caro nesses blocos?',
      'O que se aproveita e o que se descarta do caderno do CRF-RJ?',
    ],
    recallAnswers: [
      'PT: comando e volta ao trecho. RLM: copiar dados e conferir unidade. Inf: nomear SO e programa. Esp: instituto + fato de expediente + vigência. Em todas, polarizador primeiro.',
      '3/6 em cada uma. Sem penalidade extra (13.9), o branco vale 0 e não conta para o corte de 50% por disciplina. Dois acertos não salvam.',
      'Aproveita-se a forma (estilo IDIB, romanos, informática). Descarta-se o silabo de farmácia. Não se inventa gabarito: o PDF local não tem chave.',
    ],
    commonErrors: [
      'Levar o método de RLM (chutar ordem de grandeza) para um item de interpretação.',
      'Levar doutrina de atos para item “de acordo com o texto”.',
      'Tratar Writer e Word como o mesmo atalho.',
      'Copiar o mapa de um caderno de 40 itens (sem RLM ou sem Informática) como se fosse Itarema.',
    ],
    traps: [
      'Tratar Writer e Word como o mesmo atalho.',
      'Estudar 8.666 ou farmácia do CRF como ementa municipal.',
      'Achar que gabarito cheio em Português compensa zero no bloco de 6.',
    ],
    relatedLessonIds: ['pt-interpretacao', 'rlm-numerico', 'inf-windows-linux', 'esp-atos'],
    relatedEditalItems: ['ed-est-08'],
    synthesis: 'A banca muda o tipo de trabalho mental quando muda a disciplina. O comando continua sendo o primeiro sublinhado. Itarema é 14/6/6/24, A–E, corte por disciplina — não o caderno de 40 de outro órgão.',
    glossary: [
      { term: 'Operação cognitiva', definition: 'O que a questão pede que você faça: lembrar, aplicar, calcular, julgar, combinar.' },
      { term: 'Mapa negativo', definition: 'O que o caderno antigo tem e Itarema não copia: 40 itens, A–D, bloco “outras”, farmácia, ausência de RLM ou de Informática.' },
    ],
    masteryCriteria: [
      'Escolher o método certo para um item de cada disciplina oficial, em voz alta, antes de marcar.',
      'Citar a distribuição 14/6/6/24 e os cortes 7/3/3/12.',
      'Separar estilo aproveitável e silabo descartável em um caderno de outro órgão (CRF-RJ, Jaguaribe).',
    ],
    questionIds: ['est-rec-07', 'est-rec-08'],
  }),
]
