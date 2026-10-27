import type { Lesson } from '../../models/types'
import { blocks, lesson, named } from '../buildLesson'

const FONTES = ['src-edital', 'src-didatico']

export const rlmLessons: Lesson[] = [
  lesson({
    id: 'rlm-numerico',
    disciplineId: 'rlm',
    chapterId: 'rlm-logica',
    topicId: 'rlm-numerico',
    title: 'Raciocínio numérico e números reais',
    objective:
      'Resolver problemas com números reais (inteiros, fracionários e decimais), traduzindo o enunciado em operações, conferindo unidades e o sentido do resultado.',
    importance:
      'No certame de nível médio há 6 questões de RLM (12 pontos) e corte de 50% na disciplina: três acertos já atingem o mínimo. Problemas numéricos aparecem misturados a porcentagem, média e interpretação de texto.',
    estimatedMinutes: 30,
    prerequisites: [],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-01',
      'Raciocínio lógico numérico: resolução de problemas envolvendo números reais',
    ],
    relatedLessonIds: ['rlm-proporcao', 'rlm-equacoes', 'rlm-medidas'],
    questionIds: ['rlm-numerico-01', 'rlm-numerico-02', 'rlm-numerico-03', 'rlm-numerico-04'],
    essencial: [
      named(
        'O que a banca cobra neste item',
        'Raciocínio lógico numérico, no Anexo IV, não é uma prova de “conta solta”. O item dá um texto (protocolo, estoque, saldo, média) e pede um número que responde à pergunta escrita — não ao primeiro número que aparece. Números reais, no recorte de nível médio, são os que você já opera: naturais, inteiros, frações, decimais e, às vezes, uma raiz ou um π já informado. A habilidade cobrada é três atos em sequência: traduzir a frase em operação, calcular sem trocar a unidade, e conferir se o resultado cabe no enunciado. Quem acerta a conta e marca o volume restante quando se pedia a capacidade total erra o item.',
      ),
      named(
        'Ordem das operações e o “de”',
        'A ordem não é costume: é regra. Primeiro o que está entre parênteses; depois potências e raízes; depois multiplicações e divisões na ordem em que aparecem da esquerda para a direita; por último somas e subtrações. Fração é divisão disfarçada: 3/4 de 80 significa (3 × 80) / 4 = 60. A preposição “de” quase sempre indica produto (fração de um total, porcentagem de um saldo). O erro clássico é aplicar a fração cedo demais, a uma parcela, quando o texto pede a fração da soma. O outro erro clássico é somar depois de ter aplicado a fração a cada parcela sem o enunciado autorizar.',
      ),
      named(
        'Traduzir o enunciado em uma linha',
        'Antes de calcular, escreva uma igualdade. “A mais que B” → A = B + k. “A a menos que B” → A = B − k. “O dobro de” → × 2. “A terça parte” → ÷ 3. “Ficou com 2/5 depois de retirar 120” não é conta de cabeça: é a equação (fração inicial) × C − 120 = (fração final) × C. Se o texto mistura “restaram”, “ficou com” e “retirou”, circule o que se pede: total, restante ou retirado. A letra (C, x, S) representa o desconhecido pedido, não um dado intermediário.',
      ),
      named(
        'Conferência obrigatória em dez segundos',
        'Todo resultado de RLM se testa no texto. Se a quarta-feira é 1/4 da soma 84, o 21 precisa cumprir 21 × 4 = 84. Se um aumento de 20% seguido de desconto de 20% termina em 192, o original 200 precisa gerar 240 e depois 192. Se a média dos quatro restantes é 20, quatro vezes 20 mais o termo 10 precisa devolver a soma 90. Conferir não é “refazer a mesma conta”: é substituir o número na frase original e ver se as unidades e o sentido fecham. Alternativa que copia um dado cru do enunciado (36, 48, 120, 240) quase sempre é isca.',
      ),
    ],
    completo: [
      named(
        'Método de prova: quatro perguntas antes da conta',
        'No caderno, não comece pelos números. Pergunte: (1) o que exatamente se pede (total, restante, original, média dos outros)? (2) os dados estão na mesma unidade? (3) a operação é direta (fração de uma soma já feita) ou inversa (conheço o final e quero o original)? (4) há duas etapas (percentuais sucessivos, retirar depois de uma fração)? Só então atribua uma letra e escreva uma linha. Esse método evita o erro de marcar 3x quando o item pedia x, ou de marcar o 240 intermediário quando se pedia o 200 original.',
      ),
      named(
        'Inteiros, frações e decimais sem arredondar à toa',
        'Prefira fração exata a decimal periódico. 1/3 vale 0,333…, mas 1/3 de 84 é 28, sem arredondar. Para somar frações, reduza ao mesmo denominador (MMC): 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Número misto vira imprópria: 2 1/4 = 9/4. Decimal exato pode ir para fração: 0,25 = 1/4; 0,2 = 1/5. Só arredonde se o enunciado pedir ou se a alternativa estiver em decimal com casas definidas. Em nível médio, a prova raramente cobra dízima como objeto; cobra não perder precisão no meio do caminho.',
      ),
      named(
        'Exceção: o 80 é fração de quê? (problema inverso)',
        '“Depois de gastar 1/3 restaram 80” não diz que o total é 80, nem que 1/3 vale 80. Restaram 2/3; logo o total é 80 × 3/2 = 120. A conferência é imediata: 1/3 de 120 = 40 gastos; 80 restantes. Sempre pergunte se o número visível é o total, a parte retirada ou a parte que ficou. A mesma lógica vale para “ficou com 40% depois do desconto”: 40% é o final, o original é final / 0,40, e não final × 1,40.',
      ),
      named(
        'Exemplo resolvido — fração de uma soma (ofícios)',
        'Enunciado-tipo: 48 ofícios na segunda e 36 na terça; a quarta é 1/4 do total das duas. Método: some primeiro o conjunto citado (“segunda e terça juntas”), depois aplique a fração. 48 + 36 = 84; 84 / 4 = 21. Conferência: 21 × 4 = 84. Armadilhas: 36/4 = 9 (fração só da terça); 48/4 = 12 (só da segunda); 84/2 = 42 (metade em vez de quarto). O “e” do enunciado une as parcelas antes da fração; não é “1/4 da segunda e 1/4 da terça” somados à parte, a menos que o texto diga isso.',
      ),
      named(
        'Exemplo resolvido — percentuais sucessivos não se anulam',
        'Aumentar 20% é multiplicar por 1,20; reduzir 20% é multiplicar por 0,80. Em sequência, os fatores se multiplicam: 1,20 × 0,80 = 0,96. Se o final é 192, o original é 192 / 0,96 = 200. Conferência: 200 × 1,20 = 240 (intermediário) e 240 × 0,80 = 192. +20% e −20% não se cancelam: resta uma perda de 4% (o 0,04 vem de 0,20 × 0,20). Quem divide 192 por 1,20 obtém 160 e ignora o desconto; quem marca 240 pegou o meio do caminho; quem marca 192 achou que as taxas se anulam.',
      ),
      named(
        'Exemplo resolvido — média reversa',
        'Média de cinco números = 18 → a soma é 5 × 18 = 90. Um deles é 10 → restam 80 para os outros quatro. Média dos quatro = 80 / 4 = 20. Conferência: 20 + 20 + 20 + 20 + 10 = 90, e 90 / 5 = 18. A média não se “subtrai termo a termo”: 18 − 10 = 8 é absurdo como média dos restantes. Também não se divide 90 por 5 de novo para “achar os outros”. A regra única é média × quantidade = soma; tire o conhecido da soma e divida pelo novo n.',
      ),
      named(
        'Exemplo resolvido — tanque em frações da capacidade',
        'Reservatório com 3/5 da capacidade; retiram-se 120 L; fica com 2/5. Seja C a capacidade. Equação: (3/5)C − 120 = (2/5)C. Passe os termos com C para um lado: (3/5)C − (2/5)C = 120 → (1/5)C = 120 → C = 600. Conferência: 3/5 de 600 = 360; 360 − 120 = 240; 2/5 de 600 = 240. Iscas: 120 (parar na diferença); 240 (o que restou, quando se pede o total); 480 (tratar a diferença como 1/4). A diferença das frações é a chave: o volume retirado é exatamente (1/5)C.',
      ),
      named(
        'Sinais, unidades e o sentido da quantidade',
        'Dívida, falta e “abaixo de” podem gerar negativos na conta, mas o pedido costuma ser a quantidade positiva (“quantos litros faltam”). Módulo |x| é a distância à origem: |−7| = 7. Se o resultado vier negativo e o contexto for estoque, capacidade ou número de ofícios, você provavelmente isolou a incógnita do lado errado ou trocou “ficou com” por “retirou”. Unidades: não some 48 ofícios com 0,20 (taxa) nem litros com fração sem o C. Em concurso de nível médio o foco é o sentido da quantidade, não a construção axiomática de ℝ.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não cabe neste item do Anexo IV',
        'Não transforme “números reais” em curso de Análise. Intervalos em notação [a,b], densidade dos racionais, demonstração de que √2 é irracional, números complexos, logaritmo e notação científica como tópico autônomo ficam fora do recorte de Agente Administrativo. Se π ou uma raiz aparecerem, virão com valor dado (3,14 ou 22/7) ou a resposta ficará em múltiplo de π — isso é da aula de medidas, não de teoria de irracionais. Também não estude juros compostos aqui: porcentagem sucessiva de duas etapas já cobre o que este item pede.',
      ),
      named(
        'O que deixar para as aulas vizinhas',
        'Regra de três, rateio e “quantos por cento a mais” com bases diferentes pertencem a Proporcionalidade e porcentagem. Média ponderada com pesos, perímetro e conversão m³ ↔ L pertencem a Médias, geometria e medidas. Equação do 2º grau e sistema 2×2 pertencem a Equações. Use esta aula para traduzir, operar e conferir; se o problema virar “pessoas × dias” ou “lados do retângulo”, mude de ferramenta. Estudar três capítulos no mesmo item dilui o que a banca realmente cobra em raciocínio numérico.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Some/subtraia só o que o texto autoriza; “de” é produto; fração de soma exige somar primeiro.',
        '+p% depois −p% = × (1 − p²/10000); para 20%, fator 0,96.',
        'Média × n = soma. Capacidade: diferença de frações × C = volume retirado.',
        'Conferência: plugue o número no enunciado em 10 segundos.',
      ),
    ],
    definitions: [
      { term: 'Número real', definition: 'Qualquer número da reta: inteiros, frações, decimais, raízes, π.' },
      { term: 'Fração de um total', definition: '(numerador / denominador) × total.' },
      { term: 'Média aritmética simples', definition: 'Soma dos termos dividida pela quantidade de termos.' },
      { term: 'Problema inverso', definition: 'Situação em que se conhece o resultado de uma operação e se reconstitui o valor original.' },
    ],
    comparisons: [
      {
        title: 'Operação pedida versus armadilha',
        leftLabel: 'Leitura correta',
        rightLabel: 'Erro frequente',
        rows: [
          { label: '1/4 da soma', left: 'Some e depois divida', right: 'Divida só uma parcela' },
          { label: '+20% e −20%', left: 'Fator 1,2 × 0,8 = 0,96', right: 'Achar que volta ao original' },
          { label: 'Média com um termo dado', left: 'Reconstruir a soma', right: 'Subtrair o termo da média' },
        ],
      },
    ],
    examples: [
      '48 + 36 = 84; 84/4 = 21 ofícios na quarta.',
      '192 / 0,96 = 200 (saldo original após +20% e −20%).',
      'Soma 5×18 = 90; (90 − 10)/4 = 20.',
      '(3/5 − 2/5)C = 120 → C/5 = 120 → C = 600 L.',
    ],
    publicAdminExamples: [
      'Protocolo: 48 ofícios na segunda e 36 na terça; a quarta é fração do conjunto, não de um dia isolado.',
      'Almoxarifado: estoque em fração da capacidade máxima após uma baixa em litros.',
    ],
    procedures: [
      'Sublinhe o que se pede (não o primeiro número que aparece).',
      'Atribua uma letra ao desconhecido e escreva a equação em uma linha.',
      'Calcule com fração exata sempre que couber.',
      'Teste o resultado nas condições do enunciado.',
      'Descarte alternativa que copia um dado cru (parcela, intermediário, restante).',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — 1/4 da soma de ofícios',
        setup: 'Seção de protocolo: 48 ofícios na segunda, 36 na terça. A quarta expede 1/4 do total da segunda e da terça juntas. Quantos ofícios na quarta?',
        steps: [
          'O que se pede: a quantidade da quarta, não o total dos três dias.',
          'O conjunto da fração é a soma das duas primeiras: 48 + 36 = 84.',
          'Aplique a fração depois da soma: 84 / 4 = 21.',
          'Conferência: 21 × 4 = 84. Não use 36/4 = 9 nem 48/4 = 12.',
        ],
        result: '21 ofícios. Iscas 12, 24 e 42 repetem parcelas ou trocam 1/4 por 1/2.',
      },
      {
        title: 'Exemplo resolvido 2 — original após +20% e −20%',
        setup: 'Um saldo foi aumentado em 20% e, em seguida, reduzido em 20%. O valor final ficou em R$ 192,00. Qual era o saldo original?',
        steps: [
          'Aumento de 20% → fator 1,20. Redução de 20% → fator 0,80.',
          'Fatores sucessivos se multiplicam: 1,20 × 0,80 = 0,96.',
          'Se 0,96x = 192, então x = 192 / 0,96 = 200.',
          'Conferência: 200 × 1,20 = 240 e 240 × 0,80 = 192. As taxas iguais não se anulam.',
        ],
        result: 'R$ 200,00. O 240 é intermediário; o 192 é o final, não o original.',
      },
      {
        title: 'Exemplo resolvido 3 — média dos quatro restantes',
        setup: 'A média aritmética de cinco números é 18. Um deles é 10. Qual é a média dos outros quatro?',
        steps: [
          'Reconstrua a soma: 5 × 18 = 90.',
          'Retire o termo conhecido: 90 − 10 = 80.',
          'Nova média: 80 / 4 = 20.',
          'Conferência: 20 + 20 + 20 + 20 + 10 = 90. Não faça 18 − 10 = 8.',
        ],
        result: '20. A média não se subtrai termo a termo.',
      },
      {
        title: 'Exemplo resolvido 4 — capacidade do reservatório',
        setup: 'Reservatório com 3/5 da capacidade. Depois de retirar 120 litros, ficou com 2/5. Qual é a capacidade total?',
        steps: [
          'Letra: C = capacidade. Equação: (3/5)C − 120 = (2/5)C.',
          'Diferença das frações: (1/5)C = 120 → C = 600.',
          'Conferência: 3/5 de 600 = 360; 360 − 120 = 240 = 2/5 de 600.',
          '240 é o que restou; 120 é o retirado. O pedido é o total.',
        ],
        result: '600 litros. Marcar 240 é responder o restante em vez da capacidade.',
      },
    ],
    recallPrompts: [
      'Por que 1/4 de 48 e 36 não é 48/4 nem 36/4?',
      'Por que +20% e −20% em sequência não devolvem o original?',
      'Como se reconstrói a soma quando a média e a quantidade são dadas?',
      'No tanque, o 120 litros corresponde a que fração da capacidade?',
    ],
    recallAnswers: [
      'O enunciado pede a fração da soma das duas parcelas. Some 48 + 36 = 84 e só então divida por 4.',
      'Os fatores 1,20 e 0,80 se multiplicam e dão 0,96: resta uma perda de 4%. O original é o final dividido por 0,96.',
      'Soma = média × n. Tire o termo conhecido e divida pelo novo n. Nunca subtraia o termo da média.',
      'À diferença 3/5 − 2/5 = 1/5. Por isso C/5 = 120 e C = 600, não 120.',
    ],
    commonErrors: [
      'Tratar “1/4 do total de A e B” como 1/4 de A ou 1/4 de B.',
      'Acreditar que aumento e desconto iguais se cancelam.',
      'Confundir média com mediana ou com um dos termos.',
      'Errar a ordem das operações (somar antes de aplicar a fração quando o texto pede fração da soma — isso, neste caso, é o certo; o erro é o inverso: aplicar a fração cedo demais a uma parcela).',
    ],
    traps: [
      'Alternativa igual a uma parcela do enunciado (36, 48, 120).',
      'Alternativa igual ao valor intermediário (240 no problema dos 20%).',
      'Alternativa igual ao que restou, quando se pede o total (240 L versus 600 L).',
    ],
    synthesis:
      'Raciocínio numérico é tradução + conta + conferência. Fração, porcentagem sucessiva e média reversa são os três mecanismos mais rentáveis em prova de 6 itens.',
    glossary: [
      { term: 'Racional', definition: 'Número que se escreve como fração de inteiros, com denominador ≠ 0.' },
      { term: 'Fator percentual', definition: 'Multiplicador 1 ± i, com i na forma decimal (20% → 0,20).' },
      { term: 'Inverso', definition: 'De a ≠ 0, o número 1/a tal que a × (1/a) = 1.' },
      { term: 'Conferência', definition: 'Substituição do resultado no texto para validar unidades e sentido.' },
    ],
    masteryCriteria: [
      'Montar a equação de um problema de frações da capacidade sem chute.',
      'Calcular o original após dois percentuais sucessivos.',
      'Reconstruir soma a partir da média e obter a média do subconjunto.',
      'Rejeitar alternativas que repetem um dado cru do enunciado.',
    ],
  }),

  lesson({
    id: 'rlm-proposicoes',
    disciplineId: 'rlm',
    chapterId: 'rlm-logica',
    topicId: 'rlm-proposicoes',
    title: 'Proposições, conectivos e equivalências',
    objective:
      'Reconhecer proposição, montar tabela-verdade, negar com De Morgan e usar as equivalências da condicional, em especial p → q ≡ ~p ∨ q e ~(p → q) ≡ p ∧ ~q.',
    importance:
      'Item explícito do Anexo IV (p. 67): proposições, conectivos, negação, tabela-verdade, equivalência e implicação. É o núcleo da “lógica de concursos” e cai em identificação de frase, equivalência e negação.',
    estimatedMinutes: 32,
    prerequisites: ['rlm-numerico'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-02',
      'Raciocínio lógico: proposições, conectivos, negação, tabela-verdade, equivalência e implicação lógica',
    ],
    relatedLessonIds: ['rlm-diagramas', 'rlm-numerico'],
    questionIds: [
      'rlm-proposicoes-01',
      'rlm-proposicoes-02',
      'rlm-proposicoes-03',
      'rlm-proposicoes-04',
    ],
    essencial: [
      named(
        'O que é proposição — e o que a banca coloca como distrator',
        'Proposição é oração declarativa com um único valor, verdadeiro (V) ou falso (F), nunca os dois ao mesmo tempo. “Itarema fica no litoral do Ceará” é proposição: dá para concordar ou discordar com um fato. Não são proposições: perguntas (“Será que o protocolo saiu?”), ordens (“Feche a janela”), exclamações (“Que belo expediente!”), frases abertas sem domínio (“x > 3”) e paradoxos. Simples: um único juízo, sem conectivo. Composta: usa ~, ∧, ∨, →, ↔. O item “assinale a proposição simples” quase sempre mistura uma declarativa limpa com pergunta, ordem, exclamação e uma frase com “e”.',
      ),
      named(
        'Os cinco conectivos pelo que fazem na tabela',
        'Negação ~p: inverte o valor. Conjunção p ∧ q (“e”): só é V na linha VV — os dois fatos precisam ocorrer. Disjunção inclusiva p ∨ q (“ou”): só é F na linha FF — basta um dos dois. Condicional p → q (“se p, então q”): só é F na linha VF (antecedente V e consequente F). Bicondicional p ↔ q (“se e somente se”): V quando p e q têm o mesmo valor (VV e FF). Decore a linha que quebra cada conectivo, não as quatro linhas de cor. Na prova, “ou” isolado é inclusivo; “ou… ou…, mas não ambos” é que acende o exclusivo.',
      ),
      named(
        'A condicional não é causa; é proibição de uma linha',
        'Para (p, q), a tabela de p → q é VV → V, VF → F, FV → V, FF → V. Não se exige que p tenha “causado” q. A fórmula só proíbe prometer q quando p ocorreu e q falhou. Por isso as linhas com p falso (FV e FF) são verdadeiras: quem não prometeu nada não descumpriu. Em português de prova, “se o empenho é regular, então o pagamento é autorizado” fica falsa somente se o empenho for regular e o pagamento for recusado. Essa única linha F é o motor da equivalência e da negação.',
      ),
      named(
        'Equivalência canônica — o par que resolve o item',
        'Duas fórmulas são equivalentes quando têm a mesma coluna na tabela. O par obrigatório: p → q ≡ ~p ∨ q ≡ ~q → ~p (contrapositiva). A recíproca q → p e a inversa ~p → ~q NÃO são equivalentes a p → q — são as iscas mais cobradas. Tradução: “se p então q” diz o mesmo que “não p ou q” e o mesmo que “se não q, então não p”. Não diz “se q então p”. Quando o item pedir equivalente, procure ~p ∨ q ou a contrapositiva; quando pedir negação, procure p ∧ ~q.',
      ),
    ],
    completo: [
      named(
        'Método: simbolizar antes de traduzir de volta',
        'Em item de lógica, não discuta o conteúdo administrativo. Marque p e q, identifique o conectivo principal e só então volte à língua. Passos: (1) é proposição? (2) simples ou composta? (3) qual o conectivo-chefe? (4) o comando pede equivalente, negação ou valor na tabela? (5) aplique a regra curta (~p ∨ q, De Morgan, p ∧ ~q) e confira uma linha crítica (em geral VF). Quem pensa “faz sentido no protocolo” em vez de olhar a tabela cai na recíproca.',
      ),
      named(
        'Como montar a tabela-verdade de duas proposições',
        'n proposições simples geram 2ⁿ linhas. Para duas, quatro linhas na ordem canônica VV, VF, FV, FF. Preencha colunas auxiliares (~p, ~q, p ∧ q) antes da coluna final. Tautologia: coluna toda V. Contradição: toda F. Contingência: mistura. Não invente uma quinta linha. Com três proposições seriam 8 linhas — só faça se o item exigir; o padrão de nível médio cabe em duas letras. A ordem das linhas precisa ser a mesma nas duas fórmulas que você compara, senão “deu equivalente” por coincidência de bagunça.',
      ),
      named(
        'De Morgan — trocar o conectivo e negar as duas partes',
        '~(p ∧ q) ≡ ~p ∨ ~q. ~(p ∨ q) ≡ ~p ∧ ~q. Em língua: a negação de “protocola e arquiva” é “não protocola ou não arquiva” (basta falhar uma das duas tarefas). A negação de “protocola ou arquiva” é “não protocola e não arquiva” (as duas falham). O erro clássico é negar as partes e conservar o mesmo conectivo. Outro erro é negar só o primeiro verbo. Confira na linha VV: a conjunção era V, a negação precisa ser F; ~p ∨ ~q de fato é F nessa linha.',
      ),
      named(
        'Negação da condicional — nunca “se p então não q”',
        'Como p → q ≡ ~p ∨ q, a negação é ~(~p ∨ q) ≡ p ∧ ~q (De Morgan de novo). “Não é verdade que: se o empenho é regular, então o pagamento é autorizado” equivale a “o empenho é regular e o pagamento não é autorizado”. Isso é exatamente a linha VF, a única que tornava a condicional falsa. Nunca negue “se p então q” por “se p então não q” (isso ainda é uma condicional, verdadeira quando p é F). Também não use a contrapositiva: ela é equivalente à original, portanto não a nega.',
      ),
      named(
        'Exemplo resolvido — identificar a proposição simples',
        'Cinco frases: pergunta sobre o protocolo; ordem “feche a janela”; “Itarema fica no litoral do Ceará”; “o ofício saiu e o processo foi arquivado”; exclamação. Só a terceira é declarativa, tem V/F e não usa conectivo. A quarta é proposição, mas composta (conjunção). Método: risque interrogativa, imperativa e exclamativa; depois risque a que tem “e/ou/se”; sobra a simples. Não discuta geografia: o valor real da frase é irrelevante para classificá-la como proposição.',
      ),
      named(
        'Exemplo resolvido — equivalente de p → q',
        'A condicional é F só em VF. Teste ~p ∨ q: ela é F somente quando ~p é F e q é F, isto é, p V e q F. Mesma coluna: equivalentes. Teste as iscas: p ∧ q é V só em VV; p ∨ q é F só em FF; ~p ∧ q vive em FV; p ∨ ~q equivale à recíproca q → p. Se o item listar também ~q → ~p, essa é a contrapositiva e também equivale — mas, se pedirem uma equivalente entre disjunções, a resposta canônica é ~p ∨ q.',
      ),
      named(
        'Exemplo resolvido — negar “protocola ou arquiva”',
        'p = protocola, q = arquiva. Pedido: ~(p ∨ q). De Morgan: ~p ∧ ~q → “não protocola e não arquiva”. Conferência: a disjunção original é F só quando os dois verbos falham; a negação precisa ser V exatamente nessa situação, e a conjunção das negações faz isso. Isca “não protocola ou não arquiva” é a negação da conjunção, não da disjunção. Isca “protocola e não arquiva” é p ∧ ~q, negação da condicional.',
      ),
      named(
        'Implicação lógica versus a fórmula p → q',
        'A fórmula p → q é uma proposição: pode ser V ou F conforme a linha. Dizer que p implica q (p ⇒ q) é uma meta-afirmação: p → q seria tautologia, ou q se seguiria de p em todos os casos. O edital junta “equivalência e implicação lógica”; em prova de nível médio, trate “implicação” como a condicional e suas equivalências, salvo se o item falar em argumento válido ou em “segue-se necessariamente”. Não monte curso de dedução natural.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Quantificadores simbólicos (∀, ∃), predicados, regras de inferência nomeadas (modus ponens como disciplina), álgebra de Boole com circuitos, tabela de três ou mais variáveis como rotina e o “ou” exclusivo como conectivo padrão estão fora do núcleo deste cargo. O “ou” exclusivo só entra se o texto disser “ou… ou…, mas não ambos”. Dupla negação (~~p ≡ p) e p ↔ q ≡ (p → q) ∧ (q → p) bastam como atalho; não vire a aula um formulário de 20 equivalências.',
      ),
      named(
        'O que deixa para Diagramas e para o texto do item',
        '“Todo”, “algum” e “nenhum” com círculos são a aula de diagramas lógicos, não desta. Aqui o recorte é frase, conectivo, tabela, equivalência e negação. Também não discuta se a condicional “faz sentido” no protocolo: FV e FF serem V é regra da tabela, não opinião sobre a Prefeitura. Se o item misturar empenho e pagamento, simbolize; não interprete a norma municipal.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Proposição = declarativa com V/F. Sem pergunta, ordem ou “e/ou/se” na simples.',
        '∧ V só em VV. ∨ F só em FF. → F só em VF. ↔ V em VV e FF.',
        'p → q ≡ ~p ∨ q ≡ ~q → ~p. ~(p → q) ≡ p ∧ ~q.',
        'De Morgan: negue as partes e troque e↔ou.',
      ),
    ],
    definitions: [
      { term: 'Proposição', definition: 'Sentença declarativa com um único valor V ou F.' },
      { term: 'Conectivo', definition: 'Operador que forma proposição composta: ~, ∧, ∨, →, ↔.' },
      { term: 'Equivalência', definition: 'Duas fórmulas com a mesma tabela-verdade (mesmo valor em cada linha).' },
      { term: 'Condicional', definition: 'p → q; falsa somente se p é V e q é F.' },
    ],
    comparisons: [
      {
        title: 'Condicional e vizinhas',
        leftLabel: 'Fórmula',
        rightLabel: 'Relação com p → q',
        rows: [
          { label: '~p ∨ q', left: 'Disjunção', right: 'Equivalente' },
          { label: '~q → ~p', left: 'Contrapositiva', right: 'Equivalente' },
          { label: 'q → p', left: 'Recíproca', right: 'Não equivalente' },
          { label: '~p → ~q', left: 'Inversa', right: 'Não equivalente' },
          { label: 'p ∧ ~q', left: 'Negação', right: 'Contrária (nega a condicional)' },
        ],
      },
    ],
    examples: [
      'Tabela de p → q: V, F, V, V nas linhas VV, VF, FV, FF.',
      '“Protocola ou arquiva” negada: “não protocola e não arquiva”.',
      '“Se o empenho é regular, o pagamento é autorizado” negada: “o empenho é regular e o pagamento não é autorizado”.',
    ],
    publicAdminExamples: [
      'Norma interna: “Se o empenho é regular, então o pagamento é autorizado.” A recíproca não está dita. A negação exigiria empenho regular com pagamento recusado.',
    ],
    procedures: [
      'Classifique: é proposição? Simples ou composta?',
      'Simbolize p, q e o conectivo principal.',
      'Para equivalência, lembre p → q ≡ ~p ∨ q; para negação de →, use p ∧ ~q.',
      'Para “e/ou”, aplique De Morgan e confira uma linha da tabela.',
      'Risque recíproca, inversa e a própria equivalente quando o comando pedir negação.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — proposição simples',
        setup: 'Assinale a única proposição simples entre: pergunta sobre o protocolo; ordem para fechar a janela; “Itarema fica no litoral do Ceará”; “o ofício saiu e o processo foi arquivado”; exclamação.',
        steps: [
          'Pergunta, ordem e exclamação não têm valor V/F: risco.',
          'A frase com “e” é proposição composta (conjunção).',
          'Resta a declarativa sem conectivo.',
          'O conteúdo geográfico não precisa ser “provado”: basta ser declarativa.',
        ],
        result: '“Itarema fica no litoral do Ceará” é a proposição simples.',
      },
      {
        title: 'Exemplo resolvido 2 — equivalente de p → q',
        setup: 'A condicional p → q é falsa somente quando p é V e q é F. Pedem a equivalente entre p ∧ q, ~p ∨ q, p ∨ q, ~p ∧ q e p ∨ ~q.',
        steps: [
          'Marque a linha crítica VF: p → q é F só ali.',
          '~p ∨ q é F só quando ~p é F e q é F, isto é, p V e q F.',
          'Mesma coluna: ~p ∨ q ≡ p → q.',
          'p ∨ ~q replica a recíproca (q → p): isca.',
        ],
        result: '~p ∨ q. A contrapositiva também equivaleria, mas não estava nas opções.',
      },
      {
        title: 'Exemplo resolvido 3 — negação de “protocola ou arquiva”',
        setup: 'Negar “O servidor protocola o documento ou o arquiva”.',
        steps: [
          'Simbolize: p ∨ q. Pedido: ~(p ∨ q).',
          'De Morgan: ~p ∧ ~q. Troque “ou” por “e” e negue as duas partes.',
          'Em língua: não protocola e não arquiva.',
          '“Não protocola ou não arquiva” seria a negação da conjunção, não da disjunção.',
        ],
        result: '“O servidor não protocola o documento e não o arquiva.”',
      },
      {
        title: 'Exemplo resolvido 4 — negação da condicional do empenho',
        setup: 'Negar “Se o empenho é regular, então o pagamento é autorizado”.',
        steps: [
          'p → q. Negação canônica: p ∧ ~q.',
          'Traduza: empenho regular e pagamento não autorizado.',
          'Risque “se p então não q” (ainda é condicional) e a contrapositiva (equivalente, não negação).',
          'Risque também ~p ∨ q: isso é a própria equivalente da original.',
        ],
        result: '“O empenho é regular e o pagamento não é autorizado.”',
      },
    ],
    recallPrompts: [
      'O que diferencia proposição de pergunta, ordem ou exclamação?',
      'Qual é a única linha falsa de p → q, e qual disjunção replica essa coluna?',
      'Como se nega “protocola ou arquiva”, em uma frase?',
      'Por que “se p então não q” não é a negação de “se p então q”?',
    ],
    recallAnswers: [
      'Proposição é declarativa com valor V ou F. Pergunta, ordem e exclamação não admitem esse valor.',
      'A linha VF. A disjunção ~p ∨ q é F exatamente nessa linha, logo equivale a p → q.',
      'Não protocola e não arquiva: ~(p ∨ q) ≡ ~p ∧ ~q (De Morgan).',
      'Porque p → ~q ainda é uma condicional (verdadeira quando p é F). A negação é a conjunção p ∧ ~q, que força a linha VF.',
    ],
    commonErrors: [
      'Tratar pergunta ou ordem como proposição.',
      'Negar “ou” conservando o “ou”.',
      'Negar “se p então q” por “se p então não q”.',
      'Confundir contrapositiva (válida) com recíproca (inválida como equivalência).',
    ],
    traps: [
      'Opção que é a própria equivalente (~p ∨ q) quando se pede a negação.',
      'Opção que é a contrapositiva quando se pede a negação.',
      '“Ou” exclusivo escondido em alternativa de disjunção inclusiva.',
    ],
    synthesis:
      'Domine quatro peças: o que é proposição, as cinco tabelas, De Morgan e o par p → q ≡ ~p ∨ q / ~(p → q) ≡ p ∧ ~q. Com isso resolve-se a maioria dos itens de lógica simbólica de nível médio.',
    glossary: [
      { term: 'Tautologia', definition: 'Fórmula verdadeira em todas as linhas da tabela.' },
      { term: 'Contrapositiva', definition: '~q → ~p, equivalente a p → q.' },
      { term: 'De Morgan', definition: 'Regras de negação da conjunção e da disjunção.' },
      { term: 'Antecedente', definition: 'A proposição p em p → q.' },
      { term: 'Consequente', definition: 'A proposição q em p → q.' },
    ],
    masteryCriteria: [
      'Separar proposição de não proposição e simples de composta.',
      'Reproduzir de memória as tabelas de ∧, ∨, → e ↔.',
      'Negar conjunção, disjunção e condicional sem vacilo.',
      'Reconhecer ~p ∨ q e a contrapositiva como equivalentes de p → q.',
    ],
  }),

  lesson({
    id: 'rlm-diagramas',
    disciplineId: 'rlm',
    chapterId: 'rlm-logica',
    topicId: 'rlm-diagramas',
    title: 'Diagramas lógicos',
    objective:
      'Representar premissas com diagramas de Euler/Venn e calcular cardinalidades com inclusão-exclusão de dois e três conjuntos.',
    importance:
      'O edital isola “diagramas lógicos” como item. Na prova, isso vira silogismo (todo/algum/nenhum) ou problema numérico de interseção — os dois cabem em um único desenho.',
    estimatedMinutes: 30,
    prerequisites: ['rlm-proposicoes'],
    sourceIds: FONTES,
    relatedEditalItems: ['ed-rlm-03', 'Diagramas lógicos'],
    relatedLessonIds: ['rlm-proposicoes', 'rlm-conjuntos', 'rlm-probabilidade'],
    questionIds: ['rlm-diagramas-01', 'rlm-diagramas-02', 'rlm-diagramas-03', 'rlm-diagramas-04'],
    essencial: [
      named(
        'Quantificadores no desenho — o que cada frase força',
        'Diagramas lógicos traduzem “todo”, “algum” e “nenhum” em inclusão ou exclusão de regiões. “Todo A é B”: o círculo A inteiro dentro de B; não pode sobrar ponto de A fora. “Nenhum A é B”: círculos disjuntos; a interseção é vazia. “Algum A é B”: a sobreposição tem pelo menos um elemento marcado. “Algum A não é B”: pelo menos um ponto de A fora de B. O desenho não é enfeite: ele impede que você “empure” uma conclusão que o círculo não obriga. Se a premissa não pintou uma região, você não pode afirmá-la nem negá-la.',
      ),
      named(
        'O que não se pode concluir — a honestidade do diagrama',
        'De “todo A é B” e “algum B é C” NÃO segue “algum A é C”. O pedaço de B que é C pode estar fora de A. Desenhe A dentro de B e uma mancha de C cortando B sem tocar A: as duas premissas valem e a conclusão cai. Recíproca também não segue: “todo urgente é conferido” não autoriza “todo conferido é urgente”. Em prova, a alternativa tentadora é exatamente essa recíproca ou o “algum” indevido. Só conclua o que qualquer desenho compatível com as premissas ainda mostra.',
      ),
      named(
        'Dois conjuntos com números: união, só A, fora',
        'Quando o item dá totais e “ambos”, o desenho vira conta. |A ∪ B| = |A| + |B| − |A ∩ B|: soma os dois grupos e tira a interseção uma vez, porque ela tinha sido contada duas. Fora dos dois: total − |A ∪ B|. Só A: |A| − |A ∩ B|. Só B: |B| − |A ∩ B|. Nunca some |A| + |B| se houver interseção. Nunca subtraia “ambos” do total e chame isso de “ninguém” — isso ignora quem está em apenas um dos conjuntos. Confira: só A + só B + ambos + fora = total.',
      ),
      named(
        'Método de prova: qualitativo ou numérico?',
        'Leia o comando. Se há “todo/algum/nenhum” e “é correto afirmar”, desenhe inclusões e risque recíprocas. Se há um universo (40 servidores, 80, 120 processos) e interseções, aplique inclusão-exclusão e peça o complemento. Os dois tipos cabem no mesmo tópico do edital, mas a ferramenta muda. Não misture: silogismo não se “resolve” somando 22 + 18; união não se resolve com “todo A é B”.',
      ),
    ],
    completo: [
      named(
        'Exceção: “ambos” já está dentro de cada total',
        'Se 22 assinam de manhã e 7 assinam nos dois turnos, os 7 já estão entre os 22. Não some 22 + 7. O 7 se desconta só quando você une manhã com tarde, para não contar a pessoa duas vezes. Quem trata “ambos” como um terceiro grupo separado infla a união e erra o complemento. No desenho, pinte primeiro a interseção e depois complete as luas (só A, só B).',
      ),
      named(
        'Exemplo resolvido — 40 servidores e dois turnos',
        'Reunião com 40; 22 manhã, 18 tarde, 7 ambos. Pedido: quantos não assinam em nenhum turno. União: 22 + 18 − 7 = 33. Fora: 40 − 33 = 7. Regiões: só manhã 15, só tarde 11, ambos 7, fora 7; soma 40. Conferência das luas: 15 + 11 + 7 = 33. Iscas: 15 (só manhã), 11 (só tarde), 18 (tamanho de um conjunto), 4 (22 − 18). O 7 da interseção e o 7 de fora coincidem neste número; não generalize que “ambos = fora”.',
      ),
      named(
        'Exemplo resolvido — 80 servidores, dois idiomas',
        '80 no quadro; 42 inglês, 35 espanhol, 18 os dois. União: 42 + 35 − 18 = 59. Nenhum dos dois: 80 − 59 = 21. Só inglês: 24; só espanhol: 17; ambos: 18; soma 59. Isca clássica: marcar 18 (os que falam os dois) quando se pede os que não falam nenhum. Outra isca: 42 + 35 = 77 e 80 − 77 = 3, esquecendo de devolver a interseção. Sempre escreva a fórmula antes dos números.',
      ),
      named(
        'Exemplo resolvido — silogismo do protocolo urgente',
        'Premissas: todo protocolo urgente é conferido; nenhum documento conferido fica sem carimbo. A segunda frase equivale a “todo conferido tem carimbo”. Encadeie: urgente ⊂ conferido ⊂ com carimbo. Conclusão necessária: nenhum urgente fica sem carimbo. Não segue: todo conferido é urgente (recíproca); algum urgente não é conferido (contradiz a primeira); algum sem carimbo é urgente (quebra a cadeia). O desenho é uma cadeia de inclusões, não uma igualdade de conjuntos.',
      ),
      named(
        'Três conjuntos: por que se devolve o triplo',
        '|A ∪ B ∪ C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|. Cada par já inclui o triplo; ao subtrair os três pares, o triplo foi retirado demais (estava nas três interseções duas a duas). Por isso se soma o triplo de volta uma vez. Região “só A” = |A| − |A∩B| − |A∩C| + |A∩B∩C| (o triplo tinha sido subtraído duas vezes nas parcelas dos pares). Esquecer o +triplo na união é o erro que produz a isca 15 no problema dos 120 processos (120 − 105).',
      ),
      named(
        'Exemplo resolvido — 120 processos e três despachos',
        '70 A, 55 B, 40 C; pares 25, 20, 15; triplo 8. União: 70+55+40 − 25 − 20 − 15 + 8 = 165 − 60 + 8 = 113. Fora: 120 − 113 = 7. Conferência por sete regiões: só A = 70−25−20+8 = 33; só B = 55−25−15+8 = 23; só C = 40−20−15+8 = 13; A∩B sem C = 17; A∩C sem B = 12; B∩C sem A = 7; os três = 8. Soma 33+23+13+17+12+7+8 = 113. Iscas: 8 (o triplo), 15 (esquecer o +8).',
      ),
      named(
        'Como conferir um diagrama numérico em 20 segundos',
        'Some as regiões que você pintou: exclusivos + pares sem o terceiro + triplo + fora = universo. Se a soma não fecha, a união está errada. Outro teste: cada total simples precisa ser a soma das regiões que o compõem. |A| = só A + (A∩B sem C) + (A∩C sem B) + triplo. Esse hábito mata a alternativa que usa a interseção como se fosse o complemento.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Figuras silogísticas com nome escolástico (Barbara, Celarent), quadrado de oposições completo, lógica de predicados com quantificadores aninhados e união de quatro ou mais conjuntos não são o recorte de Agente Administrativo. Euler versus Venn é distinção didática: use o desenho que as premissas forçam (inclusão) para silogismo e o Venn completo para contar regiões. Não monte disciplina de “cálculo proposicional de quantificadores” nesta aula.',
      ),
      named(
        'Existência no “todo” e o limite da prova média',
        'Na lógica moderna, “todo A é B” não garante que exista um A. Bancas de nível médio, quando dão números, tratam os conjuntos como habitados; no silogismo clássico, muitas aceitam “algum A é B” a partir de “todo A é B”. No item qualitativo de Itarema, prefira só o que o desenho força e rejeite recíprocas. Não escreva dissertação sobre importação existencial — a prova pede a conclusão necessária, não a filosofia do quantificador.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Todo = inclusão; nenhum = disjuntos; algum = interseção marcada.',
        'Não empurre “algum B é C” para dentro de A.',
        '|A∪B| = soma − interseção. Três conjuntos: soma − pares + triplo.',
        'Peça do complemento: total − união.',
      ),
    ],
    definitions: [
      { term: 'Diagrama de Venn', definition: 'Representação de conjuntos com todas as interseções possíveis.' },
      { term: 'Inclusão-exclusão', definition: 'Fórmula da união que corrige a contagem dupla da interseção.' },
      { term: 'Silogismo', definition: 'Argumento com duas premissas e uma conclusão sobre categorias (todo/algum/nenhum).' },
      { term: 'Recíproca de uma inclusão', definition: 'Trocar “todo A é B” por “todo B é A”; em geral não segue das premissas.' },
    ],
    comparisons: [
      {
        title: 'Conclusão válida versus recíproca',
        leftLabel: 'Segue das premissas',
        rightLabel: 'Não segue',
        rows: [
          { label: 'A ⊂ B e B ⊂ C', left: 'A ⊂ C', right: 'C ⊂ A' },
          { label: 'A ⊂ B e algum B é C', left: 'algum B é A (se A ≠ ∅, leitura clássica)', right: 'algum A é C' },
          { label: 'A ∩ B = ∅ e A ⊂ C', left: 'nada de A está em B', right: 'C ∩ B = ∅' },
        ],
      },
    ],
    examples: [
      '40; 22; 18; 7 ambos → 7 fora da união.',
      '80; 42 inglês; 35 espanhol; 18 ambos → 21 sem os dois idiomas.',
      '120 processos, inclusão-exclusão de três conjuntos → 7 sem despacho.',
    ],
    publicAdminExamples: [
      'Processos com despachos A, B e C: a interseção dos três não se soma aos pares — os pares já a contêm.',
    ],
    procedures: [
      'Qualitativo: desenhe inclusões e sombreie o que as premissas preenchem.',
      'Numérico de dois conjuntos: calcule união e depois o complemento.',
      'Três conjuntos: aplique a fórmula completa (soma − pares + triplo) e confira a soma das regiões.',
      'Elimine conclusões recíprocas e “algum” indevido.',
      'Confira: exclusivos + interseções + fora = universo.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — ninguém nos dois turnos',
        setup: '40 servidores; 22 manhã, 18 tarde, 7 ambos. Quantos não assinam ponto em nenhum dos turnos?',
        steps: [
          'União: 22 + 18 − 7 = 33 (desconte a interseção uma vez).',
          'Complemento: 40 − 33 = 7.',
          'Regiões: só manhã 15, só tarde 11, ambos 7, fora 7; soma 40.',
          'Não marque 15 nem 11: são os exclusivos, não o “nenhum”.',
        ],
        result: '7 servidores fora da união. O 7 da interseção não é, por si, a resposta — coincidiu o número.',
      },
      {
        title: 'Exemplo resolvido 2 — cadeia urgente ⊂ conferido ⊂ carimbado',
        setup: 'Todo protocolo urgente é conferido. Nenhum conferido fica sem carimbo. O que se segue necessariamente?',
        steps: [
          '“Nenhum conferido fica sem carimbo” = todo conferido tem carimbo.',
          'Desenhe urgente dentro de conferido, conferido dentro de carimbado.',
          'Conclusão forçada: nenhum urgente fica sem carimbo.',
          'Risque a recíproca “todo conferido é urgente” e o “algum urgente não conferido”.',
        ],
        result: 'Nenhum protocolo urgente fica sem carimbo. Inclusão não é igualdade.',
      },
      {
        title: 'Exemplo resolvido 3 — três despachos em 120 processos',
        setup: '70 A, 55 B, 40 C; pares 25, 20, 15; triplo 8. Quantos não têm nenhum desses despachos?',
        steps: [
          'União: 70+55+40 − 25 − 20 − 15 + 8 = 113.',
          'O +8 devolve o triplo retirado demais nos pares.',
          'Fora: 120 − 113 = 7.',
          'Sem o +8 a união viraria 105 e o fora 15 — isca clássica.',
        ],
        result: '7 processos sem A, B nem C.',
      },
    ],
    recallPrompts: [
      'Por que |A| + |B| não é a união quando há “ambos”?',
      'De “todo A é B” e “algum B é C”, por que não segue “algum A é C”?',
      'Na união de três conjuntos, por que se soma o triplo depois de subtrair os pares?',
      'Como se distingue o 7 da interseção do 7 de fora no problema dos 40 servidores?',
    ],
    recallAnswers: [
      'A interseção entra nos dois totais; somar |A|+|B| conta duas vezes quem está em ambos. Desconte |A ∩ B| uma vez.',
      'C pode cortar B fora de A. O desenho das premissas permite essa mancha; logo a conclusão não é necessária.',
      'Cada par já contém o triplo. Subtrair os três pares retira o triplo demais; soma-se |A∩B∩C| para devolvê-lo uma vez.',
      'O primeiro 7 é |manhã ∩ tarde|; o segundo é total − união. Coincidem neste item, mas medem regiões diferentes. Confira pelas luas.',
    ],
    commonErrors: [
      'Somar os dois grupos sem descontar “ambos”.',
      'Concluir que todo A é C só porque algum B é C.',
      'Esquecer o +|A∩B∩C| na união de três conjuntos.',
      'Usar o número da interseção como se fosse o complemento.',
    ],
    traps: [
      'Alternativa igual à interseção quando se pede “nenhum dos dois”.',
      'União sem o termo do triplo (120 − 105 = 15 no exemplo dos 120).',
      'Premissa reescrita na recíproca (“todo B é A”).',
    ],
    synthesis:
      'Diagrama é inclusão, exclusão e honestidade: só conclua o que o desenho obriga. Na conta, desconte a interseção; em três conjuntos, devolva o triplo.',
    glossary: [
      { term: 'União', definition: 'Elementos que estão em pelo menos um dos conjuntos.' },
      { term: 'Interseção', definition: 'Elementos comuns a todos os conjuntos citados.' },
      { term: 'Complementar', definition: 'Elementos do universo que estão fora do conjunto.' },
      { term: 'Região exclusiva', definition: 'Parte de um conjunto que não intersecta os demais do diagrama.' },
    ],
    masteryCriteria: [
      'Desenhar “todo”, “algum” e “nenhum” sem ambiguidade.',
      'Calcular união e complemento de dois conjuntos.',
      'Aplicar inclusão-exclusão de três conjuntos e conferir por regiões.',
      'Rejeitar recíprocas e particularizações indevidas.',
    ],
  }),

  lesson({
    id: 'rlm-calendarios',
    disciplineId: 'rlm',
    chapterId: 'rlm-aritmetica',
    topicId: 'rlm-calendarios',
    title: 'Calendários, numeração e razões especiais',
    objective:
      'Avançar dias da semana com resto da divisão por 7, converter numerais entre bases e aplicar razões clássicas (escala, velocidade, densidade).',
    importance:
      'O edital agrupa calendários, numeração e razões especiais no mesmo item. São três mini-ferramentas: módulo 7, polinômio da base e “1 cm no mapa vale k cm no terreno”.',
    estimatedMinutes: 32,
    prerequisites: ['rlm-numerico'],
    sourceIds: FONTES,
    relatedEditalItems: ['ed-rlm-04', 'Calendários. Numeração. Razões especiais'],
    relatedLessonIds: ['rlm-numerico', 'rlm-proporcao', 'rlm-conjuntos'],
    questionIds: [
      'rlm-calendarios-01',
      'rlm-calendarios-02',
      'rlm-calendarios-03',
      'rlm-calendarios-04',
    ],
    essencial: [
      named(
        'Dias da semana: o resto da divisão por 7',
        'A semana tem 7 dias; avançar n dias é avançar o resto de n ÷ 7. “Daqui a 10 dias” a partir de quarta: 10 = 1×7 + 3, resto 3; quarta + 3 = sábado (quinta, sexta, sábado). Não conte o dia de hoje como “dia 1” do avanço: o texto “daqui a 10 dias” é um deslocamento, não um calendário inclusivo do tipo “em 10 dias de expediente”. De uma data a outra no mesmo mês, o intervalo é a diferença das datas (28 − 5 = 23), e só então se tira o módulo 7. Usar 28 mod 7 = 0 e repetir a quinta-feira é a isca clássica: 28 é o dia do mês, não o número de dias entre as duas datas.',
      ),
      named(
        'Ano comum e bissexto, só o que a prova média usa',
        '365 = 52×7 + 1: o ano comum avança um dia da semana do 1º de janeiro ao 1º do ano seguinte. Bissexto (366 = 52×7 + 2) avança dois, se o intervalo incluir 29 de fevereiro. A regra didática: divisível por 4 é bissexto, salvo século não divisível por 400 (2000 sim, 1900 não). Em item de nível médio, isso serve para saber se fevereiro tem 28 ou 29 e se o salto da semana é +1 ou +2. Não transforme a aula em história do calendário gregoriano.',
      ),
      named(
        'Numeração posicional: o numeral não é o decimal que parece',
        'O valor de d₂d₁d₀ na base b é d₂b² + d₁b¹ + d₀b⁰. 234₅ = 2×5² + 3×5 + 4 = 50 + 15 + 4 = 69. Dígitos válidos vão de 0 a b−1: na base 5 não existe algarismo 5, 6, 7, 8 ou 9. Quem lê “duzentos e trinta e quatro” trata 234₅ como decimal e erra o item. Base 2: só 0 e 1. Base 10: 0 a 9. Conferência: reconverta o 69 para a base 5 por divisões sucessivas e recupere 234.',
      ),
      named(
        'Razões especiais: escala, velocidade, densidade',
        'Razão especial é um quociente com nome. Velocidade = distância/tempo (unidades iguais no tempo: hora ou segundo, não mistos sem converter). Densidade = massa/volume. Escala 1:n significa 1 unidade no papel = n unidades reais, na mesma grandeza. Escala 1:250 000: 1 cm no mapa → 250 000 cm no terreno = 2,5 km; 4 cm → 10 km. O erro de unidade (deixar em cm ou em m quando se pede km) vale item. Sempre converta no fim: 100 cm = 1 m; 100 000 cm = 1 km.',
      ),
    ],
    completo: [
      named(
        'Método de calendário: diferença, depois resto, depois os nomes',
        'Três passos, nesta ordem. (1) Ache o número de dias a avançar: n dado, ou data maior − data menor. (2) Divida por 7 e fique só com o resto r (0 a 6). Resto 0 no avanço a partir de uma data significa o mesmo dia da semana. (3) Avance r nomes a partir do dia dado. Liste se precisar: quarta, quinta, sexta, sábado. Não some o dia de origem duas vezes. Em “daqui a 10 dias”, o 10 já é o deslocamento.',
      ),
      named(
        'Exceção: o 28 do mês não é o intervalo',
        '5 de maio (quinta) até 28 de maio. O 28 é múltiplo de 7, e 28 ÷ 7 = 4 resto 0 — se alguém usar 28 como avanço, conclui “quinta de novo”. O intervalo correto é 28 − 5 = 23 dias. 23 = 3×7 + 2, resto 2. Quinta + 2 = sábado. Outra isca: avançar 24 (contar os dois extremos como se fossem deslocamento). Datas inclusivas (“quantos dias de expediente de 5 a 28”) são outro problema; aqui o pedido é o dia da semana da segunda data.',
      ),
      named(
        'Exemplo resolvido — quarta + 10 dias',
        'Hoje quarta. 10 ÷ 7 = 1 resto 3. Avance três nomes: quinta, sexta, sábado. Conferência: daqui a 7 dias seria quarta de novo; daqui a 3, sábado; 7+3=10. Iscas: sexta (resto 2), quinta (resto 1), domingo (resto 4), segunda (resto 5, típico de quem conta a quarta como dia 1 e ainda avança 10). O módulo 10 não existe neste problema: a semana não tem 10 dias.',
      ),
      named(
        'Exemplo resolvido — 234₅ em decimal',
        'Expanda: 2×25 + 3×5 + 4×1 = 50 + 15 + 4 = 69. Dígitos 2, 3 e 4 são válidos na base 5. Conferência inversa: 69 ÷ 5 = 13 resto 4; 13 ÷ 5 = 2 resto 3; 2 ÷ 5 = 0 resto 2; restos de baixo para cima: 234₅. Iscas: 64 (potências de 2), 49 (mistura com 7²), 74 (3×8 em vez de 3×5), 117 (base 7: 2×49). Nunca leia o desenho 234 como duzentos e trinta e quatro.',
      ),
      named(
        'Exemplo resolvido — 4 cm na escala 1:250 000',
        'Cada 1 cm no papel vale 250 000 cm no terreno. 4 cm → 1 000 000 cm. Como 1 km = 100 000 cm, 1 000 000 / 100 000 = 10 km. Atalho: 250 000 cm = 2 500 m = 2,5 km por centímetro; 4 × 2,5 = 10 km. Iscas: 1 cm = 1 km (esquecer os zeros); resposta em cm (1 000 000) ou em m (10 000) quando o item pede km. A escala já é uma razão; não “some 1 + 250 000”.',
      ),
      named(
        'Exemplo resolvido — velocidade com hora e minuto',
        '2 h 20 min a 90 km/h. Converta o tempo para hora: 20 min = 1/3 h, total 7/3 h. Distância = 90 × 7/3 = 210 km. Quem multiplica 90 × 2,20 = 198 trata minuto como décimo decimal (2,20 h seriam 2 h 12 min, não 2 h 20). Quem faz 90 × 220 mistura unidades. Sempre: minutos / 60 antes de multiplicar pela velocidade em km/h.',
      ),
      named(
        'Conversão decimal → outra base, só para conferir',
        'Divisões sucessivas pela base, restos empilhados de baixo para cima. Serve para conferir o polinômio, não como tópico separado de programação. Se o item já deu 234₅ e pediu decimal, vá pelo polinômio (mais rápido). Se deu 69₁₀ e pediu a escrita na base 5, aí sim as divisões. Algarismo inválido (dígito ≥ b) torna o numeral impossível — alternativa a eliminar.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'História do calendário juliano/gregoriano, cálculo do dia da semana por tabelas de século, aritmética hexadecimal de programador (A–F como rotina), conversão entre bases 2, 8 e 16 encadeadas, e juros compostos como “razão especial” ficam fora. Base 16 só apareceria se o item trouxesse dígito A–F; no nível médio de Itarema o padrão é base 2 a 10 com polinômio. Densidade e vazão só se o enunciado der massa, volume ou fluxo — não estude química.',
      ),
      named(
        'O que deixar para Proporção e para Medidas',
        'Regra de três de peças e prazos é a aula de proporcionalidade, mesmo que a “razão” apareça no nome deste item. Conversão m³ ↔ L e prefixos SI são da aula de medidas. Aqui o trio é: resto 7, polinômio da base, escala/velocidade/densidade com unidade conferida. Estudar calendário perpétuo inteiro para um possível item de “daqui a 10 dias” é custo ruim em prova de 6 questões de RLM.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Dia da semana: resto da divisão por 7; intervalo = data maior − data menor.',
        'Ano comum +1 dia da semana; bissexto +2 se cruzar 29/02.',
        'Base b: some dígito × b^posição (posição 0 à direita).',
        'Escala 1:n — multiplique e converta cm → km (÷ 100 000).',
      ),
    ],
    definitions: [
      { term: 'Módulo 7', definition: 'Resto da divisão por 7; classifica o dia da semana.' },
      { term: 'Base de numeração', definition: 'Quantidade de algarismos distintos do sistema posicional.' },
      { term: 'Escala 1:n', definition: 'Razão entre comprimento no desenho e comprimento real, na mesma unidade.' },
      { term: 'Intervalo de datas', definition: 'Diferença entre os dias do mês (data maior − data menor), não o número estampado na segunda data.' },
    ],
    comparisons: [
      {
        title: 'Calendário versus numeração',
        leftLabel: 'Calendário',
        rightLabel: 'Numeração',
        rows: [
          { label: 'Operação-chave', left: 'n mod 7', right: 'polinômio na base b' },
          { label: 'Erro clássico', left: 'Contar o dia de origem duas vezes', right: 'Ler o numeral como decimal' },
          { label: 'Conferência', left: 'Listar os restos 0 a 6', right: 'Reconverter à base 10' },
        ],
      },
    ],
    examples: [
      'Quarta + 10 dias = sábado.',
      '5/mai quinta → 28/mai sábado (23 ≡ 2 mod 7).',
      '234₅ = 69₁₀.',
      '4 cm em 1:250 000 = 10 km.',
    ],
    publicAdminExamples: [
      'Planta de um prédio público na escala 1:100: 1 cm na planta = 1 m real. Prazo em dias corridos: use módulo 7, não “dias úteis”, salvo se o texto pedir.',
    ],
    procedures: [
      'Calendário: calcule o resto; avance os nomes dos dias.',
      'Datas no mês: subtraia (intervalo), depois mod 7 — não use o dia do mês como avanço.',
      'Base: expanda em potências; confira dígitos < b; reconverta para conferir.',
      'Escala: multiplique pelo n e converta a unidade pedida (cm → km: ÷ 100 000).',
      'Tempo misto: minutos/60 antes de multiplicar km/h.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — daqui a 10 dias',
        setup: 'Hoje é quarta-feira. Que dia da semana será daqui a 10 dias?',
        steps: [
          '10 = 1×7 + 3; resto 3.',
          'Avance três nomes a partir de quarta: quinta, sexta, sábado.',
          'Não conte a quarta como dia 1 do deslocamento.',
          'Conferência: +7 volta a quarta; +3 a partir daí é sábado.',
        ],
        result: 'Sábado. Sexta seria resto 2; quinta, resto 1.',
      },
      {
        title: 'Exemplo resolvido 2 — 5 de maio (quinta) até 28 de maio',
        setup: 'O dia 5 de maio caiu numa quinta-feira. Em que dia da semana caiu 28 de maio do mesmo ano?',
        steps: [
          'Intervalo: 28 − 5 = 23 dias, não 28.',
          '23 = 3×7 + 2; resto 2.',
          'Quinta + 2 = sábado.',
          '28 é múltiplo de 7, mas 28 não é o avanço. Isca: repetir quinta.',
        ],
        result: 'Sábado.',
      },
      {
        title: 'Exemplo resolvido 3 — 234₅ e a escala 1:250 000',
        setup: '(a) Converter 234₅ para decimal. (b) 4 cm em mapa 1:250 000, em km.',
        steps: [
          '234₅ = 2×25 + 3×5 + 4 = 69. Não leia 234 decimal.',
          '4 × 250 000 = 1 000 000 cm.',
          '1 km = 100 000 cm → 10 km. Atalho: 2,5 km/cm × 4 = 10 km.',
          'Conferência da base: 69 em divisões por 5 devolve 234.',
        ],
        result: '69 em decimal; 10 km no terreno.',
      },
    ],
    recallPrompts: [
      'Por que 28 de maio não cai no mesmo dia da semana que 5 de maio só porque 28 é múltiplo de 7?',
      'Como se lê o numeral 234₅, passo a passo?',
      'Quantos km correspondem a 1 cm na escala 1:250 000?',
      'O que é o resto 0, num avanço de dias a partir de uma quarta-feira?',
    ],
    recallAnswers: [
      'O avanço é 28 − 5 = 23, resto 2. O 28 é o dia do mês, não o número de dias entre as datas.',
      '2×5² + 3×5¹ + 4×5⁰ = 50 + 15 + 4 = 69. Dígitos devem ser menores que 5.',
      '250 000 cm = 2,5 km. Logo 1 cm no mapa vale 2,5 km no terreno; 4 cm valem 10 km.',
      'Resto 0 significa um número inteiro de semanas: cai de novo na quarta. “Daqui a 7 dias” é o caso típico.',
    ],
    commonErrors: [
      'Usar 28 mod 7 = 0 e repetir o dia da semana da primeira data.',
      'Interpretar 234₅ como 234 decimal.',
      'Deixar a resposta da escala em cm ou em m quando se pede km.',
      'Esquecer que fevereiro tem 29 dias no bissexto.',
    ],
    traps: [
      'Alternativa “quinta” no problema 5 → 28 de maio.',
      'Potências de 2 no item de base 5.',
      '1 cm = 1 km na escala 1:250 000.',
    ],
    synthesis:
      'Três rotinas independentes no mesmo tópico do edital: resto 7, polinômio da base e fator da escala. Cada uma cabe em menos de dois minutos se a unidade for convertida no fim.',
    glossary: [
      { term: 'Ano bissexto', definition: 'Ano com 366 dias; divisível por 4, salvo séculos não divisíveis por 400.' },
      { term: 'Algarismo', definition: 'Símbolo de um dígito na base em uso.' },
      { term: 'Razão especial', definition: 'Quociente nomeado (escala, velocidade, densidade, vazão).' },
    ],
    masteryCriteria: [
      'Achar o dia da semana após n dias ou entre duas datas do mês.',
      'Converter um numeral de base b (2 ≤ b ≤ 10) para decimal.',
      'Calcular distância real a partir da escala 1:n.',
      'Distinguir ano comum e bissexto na regra dos séculos.',
    ],
  }),

  lesson({
    id: 'rlm-proporcao',
    disciplineId: 'rlm',
    chapterId: 'rlm-aritmetica',
    topicId: 'rlm-proporcao',
    title: 'Proporcionalidade e porcentagem',
    objective:
      'Classificar grandezas diretas e inversas, aplicar regra de três simples e composta, ratear em partes proporcionais e calcular porcentagens, inclusive sucessivas.',
    importance:
      'Item longo do edital (grandezas, divisão proporcional, porcentagem) e o mais “contábil” da disciplina — alinhado ao cotidiano de protocolo, folha e almoxarifado.',
    estimatedMinutes: 34,
    prerequisites: ['rlm-numerico'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-05',
      'Grandezas diretamente e inversamente proporcionais. Divisão proporcional. Porcentagem',
    ],
    relatedLessonIds: ['rlm-numerico', 'rlm-calendarios', 'rlm-equacoes'],
    questionIds: ['rlm-proporcao-01', 'rlm-proporcao-02', 'rlm-proporcao-03', 'rlm-proporcao-04'],
    essencial: [
      named(
        'Direta e inversa — a pergunta que escolhe a seta',
        'Duas grandezas são diretamente proporcionais quando uma cresce e a outra cresce na mesma razão: o quociente permanece constante (preço × quantidade de itens iguais; ofícios × tempo se o ritmo for constante). São inversamente proporcionais quando uma cresce e a outra diminui de modo que o produto permanece constante: pessoas × dias para o mesmo serviço; velocidade × tempo para a mesma distância. A pergunta de prova é sempre: “se esta grandeza aumentar, a incógnita sobe ou desce?”. Sobe: direta. Desce: inversa. Menos gente para menos dias, no mesmo lote, é absurdo — se o prazo encurta, a equipe precisa crescer.',
      ),
      named(
        'Regra de três simples: alinhar e, se for inversa, virar uma razão',
        'Monte duas razões alinhadas à grandeza pedida. Direta: a/b = c/x (quanto maior a, maior x). Inversa: a/b = x/c, ou, mais limpo, produto constante: pessoas₁ × dias₁ = pessoas₂ × dias₂. Não comece pelos números: classifique a seta. O erro que mais pontua contra o candidato de nível médio é tratar equipe e prazo como direta: 6/10 = x/4 dá 2,4 servidores, ridículo para fazer em 4 dias o trabalho que 6 faziam em 10.',
      ),
      named(
        'Porcentagem é fator sobre uma base',
        'p% = p/100. “p% de N” = (p/100)×N. 20% de 450 = 90. Aumento: multiplique por (1 + i). Desconto: por (1 − i). A base é o valor sobre o qual o texto aplica o “de”: 20% de 450 não é 20% de 90. Percentuais sucessivos não se somam: +15% e −10% é ×1,15×0,90, não +5%. “Quantos por cento a mais” usa a diferença sobre a base antiga, não sobre a nova.',
      ),
      named(
        'Divisão proporcional: some as partes, depois multiplique',
        'Razão 2:3:5 tem 2+3+5 = 10 partes. Cada parte = total / 10. A fatia do “3” vale 3 partes, não a maior fatia. Em 480: parte = 48; fatias 96, 144 e 240. O item costuma pedir a do meio (144) e oferecer 96 e 240 como iscas. Divisão inversamente proporcional: as partes acompanham os inversos (1/a : 1/b : 1/c). Só use inversa se o texto disser “inversamente proporcionais” ou “quanto maior o número, menor a quota”.',
      ),
    ],
    completo: [
      named(
        'Método: classificar cada grandeza em relação à incógnita',
        'Na composta, não decore um desenho de setas sem sentido. Fixe o trabalho (o “serviço”) como constante. Trabalho ≈ pessoas × dias × horas/dia (quando o ritmo de cada pessoa for o mesmo). Mais pessoas → menos dias (inversa à incógnita dias). Mais horas por dia → menos dias (também inversa). Mais serviço → mais dias (direta). Escreva o produto igual nos dois cenários e isole o que falta. Esse método substitui a “regrinha das setas” e reduz erro de inversão.',
      ),
      named(
        'Exceção: percentual de percentual e pontos percentuais',
        'Subir de 20% para 25% é +5 pontos percentuais, mas o aumento relativo é 5/20 = 25%. São grandezas diferentes. “A é 20% maior que B” usa B como base; “B é menor que A” usa A como base e não dá o mesmo percentual. Se A = 120 e B = 100, A é 20% maior que B, mas B é 16,6…% menor que A. Leia a base. Não estude juros compostos de n meses nesta aula: duas ou três etapas de fator já cobrem o edital.',
      ),
      named(
        'Exemplo resolvido — 6 servidores em 10 dias, prazo 4 dias',
        'Mesmo lote de arquivo. 6 × 10 = 60 servidores-dia. Em 4 dias: n × 4 = 60 → n = 15. Conferência: 15 × 4 = 60. Sentido: prazo menor, equipe maior. Isca da regra direta: 6/10 = x/4 → x = 2,4 (menos gente para menos tempo). Outra isca: repetir 6 ou 10. Se o ritmo não for constante, o enunciado avisaria; no silêncio, trate o trabalho como produto pessoas × dias.',
      ),
      named(
        'Exemplo resolvido — rateio 480 em 2:3:5',
        'Some as partes: 10. Valor da parte: 480 / 10 = 48. Fatias: 2×48 = 96, 3×48 = 144, 5×48 = 240. Conferência: 96+144+240 = 480. Se o item pede a parte correspondente a 3, a resposta é 144, não 240 (a maior) nem 96. Erro: dividir 480 por 3 pessoas e dar 160 a cada uma — isso é divisão em partes iguais, não proporcional. Outro erro: usar 2+3+5 = 10 como resposta.',
      ),
      named(
        'Exemplo resolvido — composta pessoas, dias e horas',
        '15 pessoas, 10 dias, 6 h/dia fazem o serviço. Com 12 pessoas e 5 h/dia, quantos dias? Trabalho = 15×10×6 = 900. 12×d×5 = 900 → d = 900/60 = 15. Pelas setas, ambas as mudanças são inversas aos dias: x = 10 × (15/12) × (6/5) = 15. Conferência: 12×15×5 = 900. Isca: repetir 10 dias. Isca: inverter só uma grandeza. Isca: 15×10×6 / 12 / 6, esquecendo que as horas também mudaram.',
      ),
      named(
        'Exemplo resolvido — 20% de 450 e sucessivos em 800',
        '20% de 450 = 90. Conferência: 90 é a quinta parte de 450. Sucessivos: +15% e −10% sobre 800 → 800 × 1,15 = 920; 920 × 0,90 = 828. Quem soma +15 − 10 = +5% obtém 840, isca. Fatores se multiplicam; a ordem neste caso comuta (1,15×0,90 = 1,035; 800×1,035 = 828), mas a base de cada etapa é o valor já alterado, não o 800 nas duas.',
      ),
      named(
        'Divisão inversamente proporcional, quando o texto mandar',
        'Ratear 840 em partes inversamente proporcionais a 2, 3 e 7: razões 1/2 : 1/3 : 1/7. MMC 42 → 21 : 14 : 6, soma 41. Só faça isso se o enunciado disser “inversamente”. O padrão de Itarema, no recorte de nível médio, é a divisão direta em a:b:c e a regra de três inversa de equipe e prazo. Não invente inversa no rateio de verba entre seções “porque uma seção é maior”.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Juros compostos com tabela Price, regra de sociedade com perdas, regra de três com quatro ou cinco grandezas, estatística além da porcentagem e média (que tem aula própria) e “pontos percentuais” como disciplina autônoma não estão no programa deste cargo. Duas etapas de fator e uma composta com três grandezas (pessoas, dias, horas) já cobrem o que a prova média costuma caber em 6 itens de RLM. Não leve Matemática Financeira de concurso bancário para Agente Administrativo.',
      ),
      named(
        'O que deixa para Numérico, Equações e Medidas',
        'Fração de soma e média reversa são da aula de raciocínio numérico. Sistema x+y e retângulo com perímetro/área são de equações. Conversão de unidades (m³, L, ha) é de medidas. Esta aula é seta (direta/inversa), partes (rateio) e fator (porcentagem). Misturar as quatro aulas no mesmo resumo é o que faz o candidato “saber a fórmula” e errar a classificação da grandeza.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Mesmo trabalho: pessoas × tempo constante (inversa).',
        'p% de N = p×N/100. Sucessivos: multiplique fatores.',
        'Razão a:b:c → some partes, total/soma = valor da parte.',
        'Composta: trabalho = pessoas × dias × horas/dia.',
      ),
    ],
    definitions: [
      { term: 'Grandeza diretamente proporcional', definition: 'O quociente das duas medidas é constante.' },
      { term: 'Grandeza inversamente proporcional', definition: 'O produto das duas medidas é constante.' },
      { term: 'Regra de três', definition: 'Método para achar um quarto (ou mais) valor em proporção.' },
      { term: 'Parte (no rateio)', definition: 'Unidade da razão: o total dividido pela soma dos números da razão.' },
    ],
    comparisons: [
      {
        title: 'Direta versus inversa',
        leftLabel: 'Direta',
        rightLabel: 'Inversa',
        rows: [
          { label: 'Exemplo', left: 'preço × quantidade de itens iguais', right: 'equipe × prazo do mesmo lote' },
          { label: 'Constante', left: 'quociente', right: 'produto' },
          { label: 'Mais de A', left: 'mais de B', right: 'menos de B' },
        ],
      },
    ],
    examples: [
      '20% de 450 = 90.',
      '6×10 = 60 = n×4 → n = 15 servidores.',
      '480 em 2:3:5 → 96, 144, 240.',
      '15×10×6 = 900 = 12×d×5 → d = 15 dias.',
    ],
    publicAdminExamples: [
      'Rateio de verba entre seções na razão dos efetivos. Mutirão de arquivo: dobrar a equipe (ritmo constante) corta o prazo pela metade.',
    ],
    procedures: [
      'Identifique se a incógnita cresce ou diminui com cada dado.',
      'Simples: monte a proporção ou use produto constante (pessoas × dias).',
      'Composta: iguale o trabalho em pessoas × dias × horas/dia.',
      'Porcentagem: transforme em fator e multiplique; sucessivos não se somam.',
      'Rateio: some as partes, divida o total, multiplique pela fatia pedida — não marque a maior por reflexo.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — equipe e prazo (inversa)',
        setup: '6 servidores arquivam um lote em 10 dias, no mesmo ritmo. Quantos servidores são precisos para terminar em 4 dias?',
        steps: [
          'Prazo menor → equipe maior: inversa. Produto constante.',
          '6 × 10 = 60 servidores-dia. n × 4 = 60 → n = 15.',
          'Conferência: 15 × 4 = 60. Sentido: mais gente, menos dias.',
          'Regra direta 6/10 = x/4 daria 2,4: absurdo, riscar.',
        ],
        result: '15 servidores.',
      },
      {
        title: 'Exemplo resolvido 2 — 480 em 2:3:5',
        setup: 'Ratear R$ 480,00 entre três seções na razão 2:3:5. Qual é a fatia correspondente a 3?',
        steps: [
          'Partes: 2+3+5 = 10. Cada parte = 480/10 = 48.',
          'Fatia 3: 3×48 = 144. Fatias completas: 96, 144, 240.',
          'Conferência: 96+144+240 = 480.',
          'Não marque 240 só porque é a maior, nem 160 (partes iguais).',
        ],
        result: 'R$ 144,00 na fatia 3.',
      },
      {
        title: 'Exemplo resolvido 3 — composta e 20% de 450',
        setup: '(a) 15 pessoas, 10 dias, 6 h/dia; depois 12 pessoas e 5 h/dia, achar os dias. (b) 20% de 450.',
        steps: [
          'Trabalho = 15×10×6 = 900 = 12×d×5 → d = 15.',
          'As duas mudanças (pessoas e horas) são inversas aos dias.',
          '20% de 450 = 90. Não some 15% e −10% em outro item: multiplique fatores.',
          'Conferência da composta: 12×15×5 = 900.',
        ],
        result: '15 dias no segundo cenário; 90 na porcentagem simples.',
      },
    ],
    recallPrompts: [
      'Se o prazo do mesmo lote cai de 10 para 4 dias, a equipe cresce ou diminui? Qual produto permanece constante?',
      'No rateio 2:3:5 de 480, por que a resposta da fatia 3 não é 240?',
      'Por que +15% e −10% não equivalem a +5%?',
      'Na composta, o que significa igualar pessoas × dias × horas nos dois cenários?',
    ],
    recallAnswers: [
      'Cresce. O produto pessoas × dias (servidores-dia) permanece 60; n = 60/4 = 15.',
      '240 é a fatia 5. A razão 3 corresponde a 3/10 de 480 = 144.',
      'Os fatores 1,15 e 0,90 se multiplicam (1,035), não se somam. Sobre 800 o final é 828, não 840.',
      'Que o trabalho (o serviço) é o mesmo. Isola-se a grandeza que faltou. Mais pessoas ou mais horas/dia reduzem os dias.',
    ],
    commonErrors: [
      'Regra de três direta em problema de trabalhadores e dias.',
      'Dividir o total pelo número de pessoas em vez de pela soma das partes.',
      'Somar percentuais sucessivos.',
      'Esquecer uma das grandezas na composta (horas/dia).',
    ],
    traps: [
      'Alternativa igual a uma das outras fatias do rateio (96 ou 240).',
      'Repetir o prazo original (10 dias) na composta.',
      '10% de 450 no item que pede 20%.',
    ],
    synthesis:
      'Pergunte sempre: se esta grandeza aumenta, a outra sobe ou desce? Essa resposta escolhe a seta da regra de três. Porcentagem é fator; rateio é partes.',
    glossary: [
      { term: 'Fator de aumento', definition: '1 + i, com i decimal.' },
      { term: 'Servidor-dia', definition: 'Unidade de trabalho: um servidor durante um dia.' },
      { term: 'Rateio', definition: 'Divisão de um total em partes proporcionais a números dados.' },
    ],
    masteryCriteria: [
      'Distinguir grandeza direta e inversa em um enunciado de serviço.',
      'Resolver regra de três composta com três grandezas.',
      'Ratear um total em a:b:c e identificar a fatia pedida.',
      'Calcular p% e percentuais sucessivos com fatores.',
    ],
  }),

  lesson({
    id: 'rlm-conjuntos',
    disciplineId: 'rlm',
    chapterId: 'rlm-aritmetica',
    topicId: 'rlm-conjuntos',
    title: 'Conjuntos, MDC e MMC',
    objective:
      'Operar com conjuntos (união, interseção, diferença), aplicar critérios de divisibilidade e calcular MDC e MMC por fatoração ou Euclides.',
    importance:
      'O edital junta teoria de conjuntos com múltiplos, divisores, MDC e MMC. Na prática: cardinalidade (como nos diagramas) e ciclos que se encontram (avisos, escalas, filas).',
    estimatedMinutes: 32,
    prerequisites: ['rlm-numerico', 'rlm-diagramas'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-06',
      'Conjuntos. Múltiplos e divisores. Regras de divisibilidade. MDC e MMC',
    ],
    relatedLessonIds: ['rlm-diagramas', 'rlm-calendarios', 'rlm-contagem'],
    questionIds: ['rlm-conjuntos-01', 'rlm-conjuntos-02', 'rlm-conjuntos-03', 'rlm-conjuntos-04'],
    essencial: [
      named(
        'Conjuntos: união sem duplicar, diferença sem “os dois”',
        'A ∪ B reúne quem está em A ou em B (ou nos dois). A ∩ B, só os que estão nos dois. A − B, os que estão em A e não em B. n(A ∪ B) = n(A)+n(B)−n(A ∩ B): a interseção entra nos dois totais e precisa ser descontada uma vez. Conjunto vazio ∅ não tem elemento. Símbolos: ∈ (é elemento), ⊆ (está contido). Esta conta é a mesma da aula de diagramas; aqui o edital a junta com múltiplos e MDC/MMC. Não some n(A)+n(B)+n(A∩B): isso conta a interseção três vezes.',
      ),
      named(
        'Múltiplos e divisores — quem cabe em quem',
        'b divide a (b|a) quando a = bq com q inteiro, resto 0. Divisores de 12: 1, 2, 3, 4, 6, 12 (lista finita). Múltiplos de 12: 0, ±12, ±24, … (lista infinita); em prova, em geral os positivos. O MDC é o maior que divide os dois (o maior “tijolo” que cabe). O MMC é o menor positivo que é múltiplo dos dois (o primeiro encontro das duas listas de múltiplos). Confundir as duas listas é o erro de marcar 144 quando se pede 12, ou 8h06 quando o encontro é 8h36.',
      ),
      named(
        'Critérios de divisibilidade: ler algarismos, não dividir na marra',
        'Por 2: unidade par. Por 4: os dois últimos algarismos formam múltiplo de 4. Por 5: unidade 0 ou 5. Por 10: unidade 0. Por 3: soma dos algarismos divisível por 3. Por 9: soma divisível por 9 — passar no critério do 3 não basta para o 9 (2222 soma 8, não; 2475 soma 18, sim). Por 11: diferença entre a soma das posições ímpares e a das pares (da direita) divisível por 11, inclusive 0. Use o critério para eliminar alternativa; a divisão longa fica para conferir se sobrar tempo.',
      ),
      named(
        'MDC e MMC pela fatoração — mínimos comuns, máximos de todos',
        'Fatore em primos. MDC: menores expoentes apenas dos primos que aparecem nos dois (ou em todos). MMC: maiores expoentes de todos os primos que aparecem em algum. 48 = 2⁴×3, 36 = 2²×3² → MDC = 2²×3 = 12, MMC = 2⁴×3² = 144. Trava de conferência para dois números: MDC × MMC = |a × b| (12×144 = 1728 = 48×36). Euclides: MDC(a,b) = MDC(b, a mod b) até resto 0. Não use “maiores expoentes” no MDC.',
      ),
    ],
    completo: [
      named(
        'Método de prova: conjunto, critério ou ciclo?',
        'Três famílias no mesmo item do edital. (1) Cardinalidade: escreva n(A∪B)=n(A)+n(B)−n(A∩B) antes dos números. (2) Divisibilidade: aplique o critério do 2, 3, 4, 5, 9 ou 10 no algarismo, não “chute a divisão”. (3) Encontro de ciclos (avisos, escalas, sirenes): MMC. Maior grupo que cabe nos dois totais: MDC. A pergunta “o que se pede?” vale mais do que decorar as duas fórmulas juntas. Se o texto fala “daqui a quanto tempo coincidem”, é MMC; se fala “maior medida que cabe”, é MDC.',
      ),
      named(
        'Exceção: resto igual e MMC de três',
        '“Maior número que divide 48 e 36” com resto 0 é o MDC. Se o resto r for o mesmo e não nulo, o caminho didático é MDC(a−r, b−r). Só use isso se o enunciado falar em resto comum; não invente. MMC de três números: tome os máximos expoentes de uma vez só. MMC(12,18,30): 12=2²×3, 18=2×3², 30=2×3×5 → 2²×3²×5=180. Encadear MMC(MMC(12,18),30) funciona se a fatoração estiver certa; o risco é errar no meio.',
      ),
      named(
        'Exemplo resolvido — 2475 e o critério do 9',
        'Soma: 2+4+7+5=18. 18 é múltiplo de 9 (1+8=9), logo 2475 também é. Conferência: 2475 ÷ 9 = 275. 2222 soma 8: não é divisível por 3 nem por 9. Isca: passar no 3 e marcar “divisível por 9”. 18 é divisível por 3 e por 9; 12 (soma de 39, por exemplo) é divisível por 3 e não por 9. Por 4: olhe só os dois últimos — em 2476, 76 = 19×4, logo 2476 é divisível por 4, independentemente do 24 da frente.',
      ),
      named(
        'Exemplo resolvido — MDC(48,36) e a trava do produto',
        'Fatoração: 48=2⁴×3, 36=2²×3². MDC: 2²×3=12. MMC: 2⁴×3²=144. Euclides: 48 = 1×36 + 12; 36 = 3×12 + 0; MDC=12. Conferência: 12×144=1728 e 48×36=1728. Isca: entregar 144 quando se pede MDC, ou 6 (mínimo dos primos sem olhar expoentes direito). O MDC nunca passa do menor dos dois números (aqui 36); 144 já denuncia que você calculou MMC.',
      ),
      named(
        'Exemplo resolvido — avisos a cada 12 e 18 minutos',
        'Dois carimbos ou dois avisos sonoros, um a cada 12 min e outro a cada 18, coincidem agora às 8h00. Próximo encontro = MMC(12,18). 12=2²×3, 18=2×3² → MMC=2²×3²=36. 8h00 + 36 min = 8h36. O MDC=6 seria o maior “tijolo” comum (6 cabe em 12 e em 18), não o instante do encontro. Isca 8h06. Isca 8h18 (um dos períodos). Isca 8h30 (média). Ciclos coincidem no MMC.',
      ),
      named(
        'Exemplo resolvido — n(A∪B) com 20, 15 e 8',
        'n(A)=20, n(B)=15, n(A∩B)=8. União: 20+15−8=27. Só A: 12; só B: 7; ambos: 8; soma 27. Isca 35 (somar sem descontar). Isca 43 (somar também a interseção). Isca 8 (responder a interseção quando se pede a união). A mesma conta da aula de diagramas; aqui o edital a coloca ao lado de MDC/MMC para você não achar que “conjuntos” é só círculo.',
      ),
      named(
        'Como escolher MDC ou MMC em uma frase de expediente',
        '“De quanto em quanto tempo os dois avisos soam juntos?” → MMC. “Qual o maior número de pastas iguais em que se podem empilhar 48 de um tipo e 36 de outro, sem sobra?” → MDC=12 (quatro pilhas de 12 e três de 12). “Menor quantidade de folhas que dá para separar em grupos de 12 e de 18 sem resto” → MMC=36. Traduza a frase antes de fatorar. Fatorar certo e escolher a operação errada ainda zera o item.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Conjuntos infinitos, cardinalidade ℵ, álgebra de Boole, congruências (módulo n) como teoria, números primos entre si além da definição, e o crivo de Eratóstenes como tópico autônomo não estão no Anexo IV deste cargo. Critério do 7 e do 13, se aparecerem, resolva por divisão; não decore regra rara. MMC/MDC de quatro números é a mesma fatoração — não vire tabela. Teoria dos conjuntos com leis de De Morgan em conjuntos (complementar de união) só se o item trouxer; o padrão é cardinalidade de dois conjuntos e fatoração.',
      ),
      named(
        'O que deixa para Diagramas e para Contagem',
        'Silogismo todo/algum/nenhum e união de três conjuntos com sete regiões são da aula de diagramas. Arranjo e combinação são da aula de contagem: conjunto não pede “ordem importa”. Aqui: operações e n(A∪B), critérios de divisibilidade, fatoração, Euclides, escolher MDC ou MMC pelo sentido da frase. Estudar anel de inteiros para acertar MMC(12,18) é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'n(A∪B)=n(A)+n(B)−n(A∩B).',
        'Por 3 e por 9: some algarismos. Por 2/5/10: olhe a unidade.',
        'MDC: menores expoentes comuns. MMC: maiores expoentes de todos.',
        'Encontro de ciclos: MMC. “Maior que cabe nos dois”: MDC.',
      ),
    ],
    definitions: [
      { term: 'MDC', definition: 'Maior inteiro positivo que divide dois ou mais números.' },
      { term: 'MMC', definition: 'Menor inteiro positivo que é múltiplo de dois ou mais números.' },
      { term: 'Divisibilidade', definition: 'Existência de quociente inteiro sem resto.' },
      { term: 'Diferença de conjuntos', definition: 'A − B: elementos que estão em A e não estão em B.' },
    ],
    comparisons: [
      {
        title: 'MDC versus MMC',
        leftLabel: 'MDC',
        rightLabel: 'MMC',
        rows: [
          { label: 'Tamanho', left: '≤ cada um dos números', right: '≥ cada um dos números' },
          { label: 'Expoentes', left: 'mínimos dos comuns', right: 'máximos de todos' },
          { label: 'Uso típico', left: 'maior grupo que cabe', right: 'próximo encontro de ciclos' },
          { label: '48 e 36', left: '12', right: '144' },
        ],
      },
    ],
    examples: [
      '2475 divisível por 9 porque a soma 18 o é.',
      'MDC(48,36)=12; MMC(48,36)=144.',
      'MMC(12,18)=36 min após 8h00 → 8h36.',
      '20+15−8=27 elementos na união.',
    ],
    publicAdminExamples: [
      'Dois carimbos automáticos (12 min e 18 min) coincidem no MMC. Pastas classificadas em A e B: a interseção não se soma duas vezes no total de pastas tratadas.',
    ],
    procedures: [
      'Cardinalidade: escreva a fórmula antes dos números.',
      'Divisibilidade: aplique o critério, não divida na marra se o número for grande.',
      'Fatore em primos; MDC = mínimos comuns; MMC = máximos de todos.',
      'Problema de relógio/aviso: MMC; problema de “maior medida que cabe”: MDC.',
      'Conferência de dois números: MDC × MMC = produto. MDC ≤ menor dos dois.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — 2475 é divisível por 9?',
        setup: 'Aplicar o critério da soma dos algarismos e conferir a divisão.',
        steps: [
          'Soma: 2+4+7+5 = 18, múltiplo de 9.',
          'Logo 2475 é divisível por 9.',
          'Conferência: 2475 ÷ 9 = 275.',
          '2222 soma 8: não passa nem no 3. Passar no 3 não implica passar no 9.',
        ],
        result: '2475 é divisível por 9. 18 como soma é o teste, não a resposta do item se pedirem o quociente.',
      },
      {
        title: 'Exemplo resolvido 2 — MDC e MMC de 48 e 36',
        setup: 'Calcular MDC(48,36) e MMC(48,36) e travar pelo produto.',
        steps: [
          '48 = 2⁴×3; 36 = 2²×3².',
          'MDC = 2²×3 = 12 (mínimos). MMC = 2⁴×3² = 144 (máximos).',
          'Euclides: 48 = 36+12; 36 = 3×12+0 → 12.',
          'Trava: 12×144 = 1728 = 48×36. 144 não pode ser MDC (passa de 36).',
        ],
        result: 'MDC 12; MMC 144.',
      },
      {
        title: 'Exemplo resolvido 3 — avisos às 8h00, períodos 12 e 18 min',
        setup: 'Dois avisos coincidem às 8h00. De quanto em quanto coincidem de novo?',
        steps: [
          'Encontro de ciclos: MMC(12,18) = 36 min.',
          '8h00 + 36 min = 8h36.',
          'MDC = 6 não é o encontro (isca 8h06).',
          'Conferência: 36/12 = 3 e 36/18 = 2, inteiros; 24 não é múltiplo de 18.',
        ],
        result: '8h36. Ciclo comum mínimo, não o maior divisor.',
      },
    ],
    recallPrompts: [
      'Na fatoração, o MDC usa os expoentes mínimos ou máximos?',
      'Por que 8h06 é isca no problema dos avisos de 12 e 18 minutos?',
      'Qual a diferença entre o critério do 3 e o do 9?',
      'Como n(A∪B) corrige a soma n(A)+n(B)?',
    ],
    recallAnswers: [
      'Mínimos dos primos comuns. Máximos de todos os primos vão para o MMC.',
      '6 é o MDC, o maior tijolo comum, não o instante em que os ciclos coincidem. O encontro é o MMC=36 min → 8h36.',
      'Ambos usam a soma dos algarismos, mas o 9 exige que essa soma seja múltiplo de 9, não só de 3.',
      'Subtraindo n(A∩B) uma vez, porque a interseção já estava nos dois totais.',
    ],
    commonErrors: [
      'Entregar o MMC quando se pede MDC (144 no lugar de 12).',
      'Usar MDC como intervalo do próximo encontro.',
      'Somar n(A)+n(B)+n(A∩B).',
      'Aplicar o critério de 3 e concluir divisibilidade por 9.',
    ],
    traps: [
      '8h06 (MDC=6) no problema dos avisos.',
      '35 = 20+15 na união.',
      'Número divisível por 3 ofertado como se fosse por 9.',
    ],
    synthesis:
      'Conjunto conta sem duplicar; divisibilidade lê algarismos; MDC é o maior que cabe, MMC é o primeiro que cobre os ciclos. A relação MDC×MMC=produto trava a conferência de dois números.',
    glossary: [
      { term: 'Primo', definition: 'Inteiro > 1 com exatamente dois divisores positivos: 1 e ele mesmo.' },
      { term: 'Fatoração', definition: 'Escrita como produto de primos com expoentes.' },
      { term: 'Algoritmo de Euclides', definition: 'MDC pelo resto da divisão sucessiva.' },
    ],
    masteryCriteria: [
      'Calcular n(A∪B) a partir de n(A), n(B) e n(A∩B).',
      'Aplicar critérios de 2, 3, 4, 5, 9 e 10.',
      'Obter MDC e MMC por fatoração e conferir com o produto.',
      'Escolher MMC em problema de coincidência periódica.',
    ],
  }),

  lesson({
    id: 'rlm-sequencias',
    disciplineId: 'rlm',
    chapterId: 'rlm-sequencias',
    topicId: 'rlm-padroes',
    title: 'Sequências, padrões, PA e PG',
    objective:
      'Identificar o padrão (numérico, de letras ou de figuras), usar as fórmulas de PA e de PG e somar os n primeiros termos.',
    importance:
      'O edital pede sequências com números, figuras, letras ou palavras, além de PA e PG. Em 6 questões, um item de “próximo termo” é barato se as diferenças forem escritas na margem.',
    estimatedMinutes: 30,
    prerequisites: ['rlm-numerico', 'rlm-equacoes'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-07',
      'Sequências e padrões (com números, figuras, letras ou palavras). Progressões aritméticas e geométricas',
    ],
    relatedLessonIds: ['rlm-numerico', 'rlm-equacoes', 'rlm-calendarios'],
    questionIds: ['rlm-sequencias-01', 'rlm-sequencias-02', 'rlm-sequencias-03', 'rlm-sequencias-04'],
    essencial: [
      named(
        'Primeiro teste na margem: diferenças, depois razões',
        'Não chute o “próximo número”. Subtraia vizinhos: 7−3=4, 11−7=4 → diferença constante, PA. Se as diferenças não forem constantes, divida vizinhos: 6/3=2, 12/6=2 → razão constante, PG. Se as diferenças formarem elas mesmas uma PA (4, 6, 8, 10…), o padrão é de segunda ordem: some a próxima diferença ao último termo visível. Esse teste de trinta segundos classifica quase todo item de sequência de nível médio. Forçar PG (dobrar o último) em sequência triangular é a isca.',
      ),
      named(
        'PA: o (n − 1) é o número de pulos, não de termos',
        'Termo geral: a_n = a_1 + (n − 1)r. Do primeiro ao oitavo há sete pulos, não oito. Soma dos n primeiros: S_n = n/2 × (a_1 + a_n) = n/2 × [2a_1 + (n − 1)r] — é média dos extremos vezes n. Erro clássico: usar n no lugar de n−1 e marcar 35 no 8º termo da PA 3, 7, 11… (3+8×4). Outro erro: responder o último termo quando o item pede a soma. Conferência: escreva os termos visíveis e veja se a fórmula os reproduz.',
      ),
      named(
        'PG: multiplica q, expoente ainda é (n − 1)',
        'a_n = a_1 × q^(n−1). Soma (q ≠ 1): S_n = a_1 (q^n − 1)/(q − 1). Na PG 3, 6, 12, 24, q=2 e a_6 = 3×2^5 = 96. 3×2^6 = 192 é o sétimo termo (expoente n, não n−1) — isca simétrica à da PA. PG de razão 1 é constante; q = −1 alterna sinal. Soma infinita |q|<1 é aprofundamento raro no nível médio: não decore S=a_1/(1−q) como rotina desta prova.',
      ),
      named(
        'Letras, figuras e palavras: conte antes de filosofar',
        'Alfabeto: A=1 … Z=26. A, C, F, J, O avança +2, +3, +4, +5 → próximo +6 = U. Figuras: lados, pontas, palitos, pontos pretos ou giro de 90°. Palavras: número de letras, inicial em ordem, ou uma letra que “anda” dentro da palavra. O edital cita expressamente números, figuras, letras ou palavras: o padrão visual é tão cobrável quanto a PA. Não invente história; meça o que muda de um termo ao seguinte.',
      ),
    ],
    completo: [
      named(
        'Método: classificar, aplicar (n−1), conferir nos termos dados',
        'Passos: (1) três diferenças e, se preciso, duas razões; (2) PA, PG, segunda ordem ou duas sequências intercaladas; (3) fórmula com (n−1); (4) plugue n=1 e n=2 para ver se recupera a_1 e a_2; (5) leia se o pedido é o termo, a soma ou o próximo da figura. Quem acerta a_10=32 e marca 32 no item da soma S_10 erra por leitura, não por fórmula.',
      ),
      named(
        'Exceção: PA intercalada e segunda ordem',
        '3, 10, 5, 20, 7, 30… são duas PAs em paralelo: posições ímpares 3, 5, 7 (r=2) e pares 10, 20, 30 (r=10). Separe as posições antes de forçar uma única razão. Sequência 2, 6, 12, 20, 30: diferenças 4, 6, 8, 10 — segunda ordem; próxima diferença 12; 30+12=42. Equivale a n(n+1): 1×2, 2×3, …, 6×7=42. Não é PG (razões 3, 2, 5/3… distintas).',
      ),
      named(
        'Exemplo resolvido — 8º termo da PA 3, 7, 11, 15',
        'r=4. a_8 = 3 + 7×4 = 31. Conferência: termos 3, 7, 11, 15, 19, 23, 27, 31. Isca 35 = 3+8×4 (usou n pulos). Isca 15 (repetir o último dado). Isca 4 (a razão). Escreva “7 pulos de 4” na margem se o (n−1) ainda vacilar.',
      ),
      named(
        'Exemplo resolvido — soma de 10 termos, a_1=5, r=3',
        'a_10 = 5 + 9×3 = 32. S_10 = 10/2 × (5+32) = 5×37 = 185. Pela outra forma: 10/2 × [10 + 9×3] = 5×(10+27)=185. Conferência: média dos extremos (5+32)/2=18,5; 10×18,5=185. Isca 32 (o último termo no lugar da soma). Isca 50 (5×10, esquecer a razão). Não some como se fosse PG.',
      ),
      named(
        'Exemplo resolvido — 6º termo da PG 3, 6, 12, 24',
        'q=2. a_6 = 3 × 2^5 = 3×32 = 96. Lista: 3, 6, 12, 24, 48, 96. Isca 192 = 3×2^6 (7º termo). Isca 48 (5º). Isca 36 (tratar como PA de razão 9 a partir de 24). Conferência do expoente: n=1 deve devolver a_1; 2^0=1, 3×1=3. Se o expoente fosse n, n=1 já quebraria o primeiro termo.',
      ),
      named(
        'Exemplo resolvido — 2, 6, 12, 20, 30, ?',
        'Diferenças: 4, 6, 8, 10. Próxima diferença 12 (as diferenças avançam de 2 em 2). 30+12=42. Leitura alternativa: 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42. Isca 60 (dobrar 30, forçar PG). Isca 40 (somar 10 de novo, ignorar que as diferenças crescem). Isca 32 (misturar com a PA a_10=32 de outro problema).',
      ),
      named(
        'Letras: A, C, F, J, O, ?',
        'Posições 1, 3, 6, 10, 15 — diferenças +2, +3, +4, +5. Próximo +6: 15+6=21 → U. Conferência: A(+2)C(+3)F(+4)J(+5)O(+6)U. Isca S (+4 de novo). Isca T (+5 de novo). O mesmo mecanismo da sequência numérica de segunda ordem, só que no alfabeto. Se a figura girar 90°, o quarto termo volta à posição inicial: conte os giros, não “a beleza” do desenho.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'PA de ordem superior com fórmula de diferenças finitas, PG infinita como rotina (S=a_1/(1−q)), interpolação de n meios, matrizes, recorrências (Fibonacci como teoria) e logaritmo para “achar n” em PG não estão no núcleo deste cargo. Soma de PG com q inteiro pequeno (2, 3) pode aparecer; a série infinita, quase nunca. Não leve o capítulo inteiro de progressões do ensino médio avançado para uma prova de 6 itens de RLM.',
      ),
      named(
        'O que deixa para Equações e para Contagem',
        'Se a sequência virar “o termo é raiz de uma quadrática”, isso é equações, não padrão. Permutação de letras de uma palavra é contagem (anagrama), não “sequência de palavras”. Aqui: classificar PA/PG/segunda ordem, usar (n−1), somar PA pela média, completar letra/figura. Estudar análise combinatória para achar o 8º termo da PA 3, 7, 11 é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'PA: +r. a_n=a_1+(n−1)r. S_n=n/2×(primeiro+último).',
        'PG: ×q. a_n=a_1 q^(n−1). Não use expoente n.',
        'Diferenças não constantes? Olhe as diferenças das diferenças.',
        'Letras: converta para posição no alfabeto.',
      ),
    ],
    definitions: [
      { term: 'Progressão aritmética', definition: 'Sequência de razão aditiva constante r.' },
      { term: 'Progressão geométrica', definition: 'Sequência de razão multiplicativa constante q.' },
      { term: 'Termo geral', definition: 'Fórmula do n-ésimo termo em função de n.' },
      { term: 'Soma dos n primeiros', definition: 'S_n: total acumulado até a_n, não confundir com o próprio a_n.' },
    ],
    comparisons: [
      {
        title: 'PA versus PG',
        leftLabel: 'PA',
        rightLabel: 'PG',
        rows: [
          { label: 'Passo', left: 'soma r', right: 'multiplica q' },
          { label: 'Termo geral', left: 'a_1+(n−1)r', right: 'a_1 q^(n−1)' },
          { label: 'Soma', left: 'média × n', right: 'a_1(q^n−1)/(q−1)' },
          { label: '3, 7, 11, 15', left: 'r=4', right: 'não é PG' },
          { label: '3, 6, 12, 24', left: 'não é PA', right: 'q=2' },
        ],
      },
    ],
    examples: [
      'PA 3,7,11,… a_8=31.',
      'PA a_1=5, r=3, S_10=185.',
      'PG 3,6,12,… a_6=96.',
      '2,6,12,20,30 → 42.',
    ],
    publicAdminExamples: [
      'Protocolos numerados de 3 em 3 (PA). Dobra de atendimento a cada mês (PG de razão 2) — raro na vida real, comum na prova.',
    ],
    procedures: [
      'Calcule 3 diferenças e, se preciso, 2 razões.',
      'Classifique PA, PG, segunda ordem ou duas sequências intercaladas.',
      'Aplique a fórmula com (n−1) — pulos, não termos.',
      'Confira com os termos visíveis da lista (n=1 deve devolver a_1).',
      'Leia se o pedido é o termo, a soma ou o próximo da figura/letra.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — 8º termo da PA 3, 7, 11, 15',
        setup: 'PA de razão 4. Pedem a_8.',
        steps: [
          'r = 7−3 = 4. Há 7 pulos até o 8º termo.',
          'a_8 = 3 + 7×4 = 31.',
          'Lista de conferência: 3, 7, 11, 15, 19, 23, 27, 31.',
          '35 = 3+8×4 usa n razões: isca.',
        ],
        result: '31.',
      },
      {
        title: 'Exemplo resolvido 2 — S_10 com a_1=5 e r=3',
        setup: 'Soma dos dez primeiros termos da PA.',
        steps: [
          'a_10 = 5 + 9×3 = 32.',
          'S_10 = 10/2 × (5+32) = 185.',
          'Média dos extremos 18,5 × 10 = 185.',
          'Não marque 32 (último termo) no lugar da soma.',
        ],
        result: '185.',
      },
      {
        title: 'Exemplo resolvido 3 — PG a_6 e a sequência 2, 6, 12, 20, 30',
        setup: '(a) PG 3, 6, 12, 24: 6º termo. (b) Próximo de 2, 6, 12, 20, 30.',
        steps: [
          'q=2; a_6 = 3×2^5 = 96. 192 seria o 7º (expoente 6).',
          'Diferenças 4, 6, 8, 10 → próxima 12; 30+12=42.',
          'Leitura n(n+1): 6×7=42. Não dobre 30 (não é PG).',
          'Conferência PG: 3, 6, 12, 24, 48, 96.',
        ],
        result: '96 na PG; 42 na sequência triangular.',
      },
    ],
    recallPrompts: [
      'Por que a_8 da PA 3, 7, 11… é 31 e não 35?',
      'Qual a diferença entre a_n e S_n?',
      'Na PG, por que o expoente é n−1 e não n?',
      'Como se reconhece a sequência 2, 6, 12, 20, 30 sem forçar PG?',
    ],
    recallAnswers: [
      'Do 1º ao 8º há 7 pulos de 4: 3+28=31. O 35 usa 8 pulos (n no lugar de n−1).',
      'a_n é o termo da posição n; S_n é a soma dos n primeiros. A média dos extremos vezes n dá S_n na PA.',
      'Para n=1, q^0=1 devolve a_1. Expoente n faria a_1 = a_1×q, contradizendo a lista.',
      'As diferenças 4, 6, 8, 10 crescem de 2 em 2 (segunda ordem). Próxima 12; 30+12=42. Razões 3, 2, 5/3 não são constantes, logo não é PG.',
    ],
    commonErrors: [
      'Usar n no lugar de n−1.',
      'Somar a PA como se fosse PG (ou o contrário).',
      'Responder o último termo quando se pede a soma.',
      'Forçar PG (dobrar o último) em sequência triangular.',
    ],
    traps: [
      '35 = 3+8×4 no 8º termo da PA.',
      '192 = 3×2^6 no 6º termo da PG.',
      '32 (o a_10) no lugar da soma 185.',
    ],
    synthesis:
      'Escreva as diferenças. Constante: PA. Quociente constante: PG. Diferenças em PA: some a próxima. Fórmulas com (n−1) evitam o erro mais comum da disciplina.',
    glossary: [
      { term: 'Razão da PA', definition: 'Diferença a_{k+1} − a_k.' },
      { term: 'Razão da PG', definition: 'Quociente a_{k+1} / a_k (a_k ≠ 0).' },
      { term: 'Padrão de segunda ordem', definition: 'Diferenças de primeira ordem em progressão regular.' },
    ],
    masteryCriteria: [
      'Obter a_n e S_n de uma PA.',
      'Obter a_n de uma PG com q inteiro.',
      'Completar sequência cujas diferenças crescem de 2 em 2.',
      'Não confundir último termo com soma.',
    ],
  }),

  lesson({
    id: 'rlm-equacoes',
    disciplineId: 'rlm',
    chapterId: 'rlm-algebra',
    topicId: 'rlm-equacoes',
    title: 'Equações e sistemas',
    objective:
      'Resolver equações e sistemas do 1º e 2º graus modelando problemas (idades, retângulo, duas condições simultâneas).',
    importance:
      'O programa de nível médio inclui 1º e 2º graus. A banca raramente pede Bhaskara “nu”; pede um problema que vira x² − 20x + 96 = 0 ou um sistema x+y=15, x−y=3.',
    estimatedMinutes: 32,
    prerequisites: ['rlm-numerico'],
    sourceIds: FONTES,
    relatedEditalItems: ['ed-rlm-08', 'Equações e sistemas do 1º e 2º graus'],
    relatedLessonIds: ['rlm-numerico', 'rlm-proporcao', 'rlm-medidas'],
    questionIds: ['rlm-equacoes-01', 'rlm-equacoes-02', 'rlm-equacoes-03', 'rlm-equacoes-04'],
    essencial: [
      named(
        '1º grau: isolar x e conferir na original',
        'ax + b = c vira ax = c − b e x = (c − b)/a, com a ≠ 0. O que passa de membro muda de sinal. Isso não é “macete”: é manter a igualdade. Depois da conta, substitua x na equação original — a conferência mata a isca 15 no lugar de x=5 em 3x+5=20. O item de nível médio quase nunca pede só “resolva”; pede o valor que a história nomeou (o número de ofícios, o lado maior, o produto xy). Marcar 3x quando se pedia x é o erro que o título desta disciplina descreve: acertou a conta e errou a pergunta.',
      ),
      named(
        'Sistema 2×2: duas condições, duas letras, um caminho curto',
        'Adição: some ou subtraia as equações para matar uma letra. Substituição: isole uma e plugue na outra. x+y=15 e x−y=3 → some: 2x=18, x=9, y=6. O par (9,6) precisa satisfazer as duas ao mesmo tempo. Se o item pede o produto, 54; se pede o maior, 9; se pede a diferença, já estava no enunciado (isca). Dois lotes de ofícios, duas idades, dois lados de retângulo: a história muda, o sistema não. Escreva em uma linha o que cada letra representa (“x = caixas do lote maior”).',
      ),
      named(
        '2º grau: delta, Girard e o que o item realmente pede',
        'ax² + bx + c = 0, a ≠ 0. Δ = b² − 4ac. Raízes x = (−b ± √Δ) / (2a). Δ>0 duas reais; Δ=0 uma (dupla); Δ<0 sem raiz real (em prova média, Δ costuma ser quadrado perfeito). Soma das raízes = −b/a; produto = c/a (Girard). Se só pedem a soma em x² − 5x + 6 = 0, a resposta é 5: não precisa Bhaskara. Isca: marcar o produto 6. Fatoração quando a=1: dois números de produto c e soma −b — (x−2)(x−3).',
      ),
      named(
        'Do perímetro e da área nasce uma quadrática',
        'Retângulo: perímetro 2(ℓ+w), área ℓw. Perímetro 40 m → ℓ+w=20 (não 40: o 2 do perímetro). Área 96 → ℓw=96. Então ℓ e w são raízes de t² − 20t + 96 = 0. Δ=400−384=16, t= (20±4)/2 = 12 ou 8. Maior lado 12. Quadrado de perímetro 40 teria lado 10 e área 100 — isca clássica de quem ignora a área 96. Comprimento negativo se descarta pelo contexto; as duas raízes positivas aqui são os dois lados.',
      ),
    ],
    completo: [
      named(
        'Método: nomear, escrever tantas equações quantas letras, conferir',
        'Passos de prova: (1) uma frase para cada letra; (2) tantas equações quantas incógnitas; (3) caminho curto — adição no 2×2, Girard se só pedem soma/produto, Bhaskara se pedem as raízes; (4) descartar raiz que o contexto rejeita (lado negativo, idade negativa); (5) reler o pedido (x, 3x, xy, maior lado, soma das raízes). A conferência é substituir nas equações originais, não repetir Bhaskara.',
      ),
      named(
        'Exceção: sistema impossível e o 2 do perímetro',
        'Se os coeficientes de x e y são proporcionais e os termos independentes não, as retas são paralelas: sem solução. Se uma equação é múltiplo da outra, infinitas soluções. Em objetiva de nível médio quase sempre há solução única — mas reconhecer “0=3” evita tempo perdido. No retângulo, esquecer o 2 (usar ℓ+w=40 quando o perímetro é 40) dobra os lados e gera área impossível. Sempre: perímetro ÷ 2 = soma dos lados.',
      ),
      named(
        'Exemplo resolvido — 3x+5=20',
        '3x = 15, x = 5. Conferência: 3×5+5=20. Isca 15 (o 3x, não o x). Isca 20 (o segundo membro). Isca 25 (3×5+10). Se o texto disser “o triplo de um número mais 5 é 20, qual é o número?”, a resposta é 5, não 15. Sublinhe “o número”, não “o triplo”.',
      ),
      named(
        'Exemplo resolvido — x+y=15, x−y=3, produto',
        'Some: 2x=18, x=9. Subtraia ou volte: y=6. Produto 54. Conferência: 9+6=15, 9−6=3. Isca 9 (só o x). Isca 6. Isca 15 (a soma, já dada). Isca 45 (9×5). O item pode pedir xy, x, y ou o maior; leia o final do enunciado. Dois lotes de 15 caixas com diferença 3 são exatamente este sistema.',
      ),
      named(
        'Exemplo resolvido — soma das raízes de x²−5x+6=0',
        'a=1, b=−5, c=6. Soma = −b/a = 5. Produto = 6. Fatoração: (x−2)(x−3)=0; raízes 2 e 3; 2+3=5. Bhaskara: Δ=25−24=1, x=(5±1)/2 = 3 ou 2. Se o item pede a soma, Girard em cinco segundos. Isca 6 (produto). Isca 2 ou 3 (uma raiz). Isca −5 (copiar b).',
      ),
      named(
        'Exemplo resolvido — retângulo de perímetro 40 m e área 96 m²',
        'ℓ+w=20, ℓw=96. t² − 20t + 96 = 0. Δ=16, t=12 ou 8. Maior lado 12 m. Conferência: 12+8=20, 2×20=40 (perímetro); 12×8=96 (área). Isca 10 (quadrado). Isca 8 (menor lado quando pedem o maior). Isca 20 (a soma, não o lado). Isca 96 (a área). Unidades: lados em metros, área em m² — não some 12 m com 96 m².',
      ),
      named(
        'Idades: o “daqui a 12 anos” soma 12 nos dois',
        'Pai = 3 × filho hoje. Daqui a 12 anos, pai = 2 × (filho+12). Equações: p=3f e 3f+12 = 2(f+12). 3f+12=2f+24 → f=12, p=36. Conferência: hoje 36 e 12 (triplo); em 12 anos, 48 e 24 (dobro). Erro: somar 12 só no filho. Erro: 3(f+12)=2(f+12), que forçaria 3=2. A idade futura altera as duas pessoas.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Sistemas 3×3, regra de Cramer, inequações como tópico autônomo, raízes complexas, completamento de quadrados como teoria, funções (domínio, gráfico da parábola além do discriminante) e equações irracionais/exponenciais não estão no programa deste cargo. O 2º grau entra como ferramenta de problema (retângulo, produto e soma). Δ<0, em prova média, quase não aparece; se aparecer, a resposta é “não há raiz real”, não um complexo.',
      ),
      named(
        'O que deixa para Medidas e para Proporção',
        'Perímetro e área como fórmulas prontas (sem achar o lado) são da aula de medidas. Regra de três e porcentagem não viram sistema só porque há duas grandezas. Aqui o recorte é modelar a história em 1º grau, 2×2 ou 2º grau e não marcar 3x no lugar de x. Estudar matrizes para resolver x+y=15 é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        '1º grau: isole x; confira.',
        'Sistema: some para matar y (ou x); volte para o outro.',
        '2º grau: Δ; soma −b/a, produto c/a.',
        'Perímetro 2(ℓ+w), área ℓw: dois dados, duas equações.',
      ),
    ],
    definitions: [
      { term: 'Equação do 1º grau', definition: 'Incógnita apenas na potência 1; reta.' },
      { term: 'Equação do 2º grau', definition: 'Maior expoente 2; parábola; até duas raízes reais.' },
      { term: 'Sistema', definition: 'Conjunto de equações que devem valer ao mesmo tempo.' },
      { term: 'Relações de Girard', definition: 'Soma das raízes = −b/a e produto = c/a, lidas nos coeficientes.' },
    ],
    comparisons: [
      {
        title: 'O que o item costuma pedir',
        leftLabel: 'Dado',
        rightLabel: 'Pedido frequente',
        rows: [
          { label: '3x+5=20', left: 'equação', right: 'x, não 3x' },
          { label: 'x+y e x−y', left: 'sistema', right: 'x, y ou o produto' },
          { label: 'x²−5x+6=0', left: '2º grau', right: 'soma, produto ou as raízes' },
          { label: 'perímetro e área', left: 'retângulo', right: 'o maior lado' },
        ],
      },
    ],
    examples: [
      '3x+5=20 → x=5.',
      'x+y=15, x−y=3 → x=9, y=6, xy=54.',
      'x²−5x+6=0 → raízes 2 e 3, soma 5.',
      'ℓ+w=20, ℓw=96 → lados 8 e 12.',
    ],
    publicAdminExamples: [
      'Dois lotes de ofícios: juntos 15 caixas, a diferença 3 → 9 e 6. Sala retangular com perímetro e área dados para compra de piso (área) e rodapé (perímetro).',
    ],
    procedures: [
      'Nomeie as incógnitas em uma frase (“ℓ = maior lado”).',
      'Escreva tantas equações quantas incógnitas.',
      'Resolva pelo caminho mais curto (adição no 2×2, Girard se só pedem soma/produto).',
      'Descarte raiz negativa se o contexto for comprimento ou idade.',
      'Reler o pedido: x, 3x, xy, maior lado, soma das raízes — e substituir na original.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — 3x+5=20 (não marque 3x)',
        setup: 'O triplo de um número, aumentado de 5, vale 20. Qual é o número?',
        steps: [
          '3x + 5 = 20 → 3x = 15 → x = 5.',
          'Conferência: 3×5+5=20.',
          '15 é o triplo, não o número. O comando pede x.',
          'Se pedissem o triplo, aí sim 15 — mas não pediram.',
        ],
        result: 'x = 5. Isca 15 = 3x.',
      },
      {
        title: 'Exemplo resolvido 2 — sistema e produto',
        setup: 'x+y=15, x−y=3. Pedem xy.',
        steps: [
          'Some: 2x=18, x=9, y=6.',
          'Produto 9×6=54.',
          'Conferência: 9+6=15 e 9−6=3.',
          'Não responda 9 se o item pede o produto.',
        ],
        result: '54.',
      },
      {
        title: 'Exemplo resolvido 3 — retângulo 40 m e 96 m²',
        setup: 'Perímetro 40 m, área 96 m². Qual é o maior lado?',
        steps: [
          'ℓ+w = 40/2 = 20 (não esqueça o 2). ℓw=96.',
          't² − 20t + 96 = 0. Δ=16; t=12 ou 8.',
          'Maior lado 12. Conferência: 12+8=20, 12×8=96.',
          'Lado 10 seria o quadrado (área 100), isca.',
        ],
        result: '12 m. 8 m é o menor; 10 m ignora a área dada.',
      },
    ],
    recallPrompts: [
      'Em 3x+5=20, por que 15 não é a resposta do número?',
      'Como Girard dá a soma das raízes de x²−5x+6=0 sem Bhaskara?',
      'Por que ℓ+w vale 20, e não 40, quando o perímetro é 40 m?',
      'No sistema x+y=15 e x−y=3, o que conferir antes de marcar xy?',
    ],
    recallAnswers: [
      '15 é o valor de 3x. Isolando, x=5. A pergunta pede o número, não o triplo.',
      'Soma = −b/a = 5. Produto = c/a = 6. As raízes 2 e 3 só são necessárias se o item as pedir.',
      'Perímetro = 2(ℓ+w)=40, logo ℓ+w=20. Esquecer o 2 dobra os lados.',
      'Que o par (9,6) satisfaz as duas equações. Só então 9×6=54. Marcar 9 é responder x no lugar do produto.',
    ],
    commonErrors: [
      'Responder 3x em vez de x.',
      'Esquecer o 2 no perímetro (usar ℓ+w=40).',
      'Trocar soma e produto das raízes (responder 6 no lugar de 5).',
      'Assumir quadrado quando o texto diz retângulo.',
    ],
    traps: [
      'Lado 10 (quadrado) no problema de área 96.',
      'Produto 6 quando se pede a soma 5.',
      'Menor lado 8 quando se pede o maior.',
    ],
    synthesis:
      'Toda história vira equação. 1º grau isola; sistema elimina; 2º grau usa Δ ou Girard. No retângulo, perímetro dá a soma dos lados e área dá o produto — é uma quadrática disfarçada.',
    glossary: [
      { term: 'Discriminante', definition: 'Δ = b² − 4ac, controla o número de raízes reais.' },
      { term: 'Relações de Girard', definition: 'Soma e produto das raízes a partir dos coeficientes.' },
      { term: 'Raiz', definition: 'Valor da incógnita que torna a equação verdadeira.' },
    ],
    masteryCriteria: [
      'Resolver ax+b=c com conferência.',
      'Resolver sistema 2×2 por adição.',
      'Ler soma e produto das raízes sem Bhaskara quando a=1.',
      'Modelar retângulo com perímetro e área.',
    ],
  }),

  lesson({
    id: 'rlm-contagem',
    disciplineId: 'rlm',
    chapterId: 'rlm-contagem',
    topicId: 'rlm-contagem',
    title: 'Contagem',
    objective:
      'Usar os princípios aditivo e multiplicativo e decidir entre permutação, arranjo e combinação, inclusive com repetição de letras.',
    importance:
      'O edital cita expressamente os dois princípios, arranjos, combinações e permutações. A decisão “ordem importa?” vale mais do que decorar n! isolado.',
    estimatedMinutes: 33,
    prerequisites: ['rlm-numerico', 'rlm-conjuntos'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-09',
      'Problemas de contagem: princípio aditivo e multiplicativo, arranjos, combinações e permutações',
    ],
    relatedLessonIds: ['rlm-probabilidade', 'rlm-conjuntos', 'rlm-sequencias'],
    questionIds: ['rlm-contagem-01', 'rlm-contagem-02', 'rlm-contagem-03', 'rlm-contagem-04'],
    essencial: [
      named(
        'Aditivo versus multiplicativo — “ou” que exclui, “e” que encadeia',
        'Princípio aditivo: opções que se excluem, some. Ir de ônibus (4 linhas) ou de van (3 linhas), sem usar os dois no mesmo percurso: 4+3=7. Palavra-chave típica: “ou”. Princípio multiplicativo: etapas sucessivas independentes, multiplique. 3 modelos de crachá e 4 cores de cordão: cada crachá se combina com cada cordão, 3×4=12. Palavra-chave típica: “e”. Somar 3+4=7 no problema do crachá é tratar etapas como alternativas exclusivas — o par (crachá A, cordão azul) deixaria de existir. A primeira decisão da prova não é a fórmula de arranjo: é se as escolhas se somam ou se multiplicam.',
      ),
      named(
        'A pergunta que decide: a ordem muda o resultado?',
        'Permutação: entram todos, a ordem importa. Fila de 5 pessoas: 5! = 120. Arranjo A(n,p)= n!/(n−p)!: entram só p de n, a ordem importa (presidente e relator; pódio; senha). Combinação C(n,p)= n!/(p!(n−p)!): entram p de n, a ordem NÃO importa (comissão, grupo, lote, conjunto de pastas). Relação: A(n,p) = C(n,p) × p! — o arranjo conta cada grupo p! vezes, uma para cada ordem interna. Comissão de sindicância sem cargos no enunciado é combinação; mesa com presidente e relator é arranjo. Errar essa classificação transforma 56 em 336.',
      ),
      named(
        'Como calcular sem se perder no fatorial',
        'A(n,p) = n × (n−1) × … × (n−p+1): p fatores decrescentes. C(n,p) = esse produto dividido por p!. C(8,3) = (8×7×6)/(3×2×1) = 336/6 = 56. 5! = 5×4×3×2×1 = 120; 0! = 1 por definição (útil em C(n,n) e C(n,0)). Não calcule 5² = 25 no lugar de 5!. Não escreva 8! inteiro se só precisa de três fatores: cancele (n−p)! mentalmente.',
      ),
      named(
        'Letras repetidas: divida pelo fatorial das frequências',
        'Permutação com repetição: n! / (k₁! k₂! …). AGENTE tem 6 letras e a letra E aparece duas vezes: 6!/2! = 720/2 = 360. Sem dividir, o E da esquerda e o da direita seriam tratados como pessoas diferentes, e cada anagrama real seria contado duas vezes. LIVRO (todas distintas): 5! = 120. Se duas letras se repetem (MISSISSIPI é exagero para esta prova), divida por cada fatorial de frequência. O edital cita permutações: a com repetição é o caso que mais cai em palavra do expediente (AGENTE, SETOR, PRAÇA com Ç distinto de C, etc.).',
      ),
    ],
    completo: [
      named(
        'Método de prova: quatro perguntas na margem',
        '(1) As escolhas se excluem (some) ou se encadeiam (multiplique)? (2) Entram todos ou só p? (3) A ordem muda o que foi formado? Fila, pódio, senha, cargos distintos → sim. Comissão, grupo, lote, conjunto → não. (4) Há objeto repetido? Divida pelo fatorial da repetição. Só então escreva n!, A(n,p) ou C(n,p). Conferência da combinação: C(n,p)=C(n,n−p). Se o número saiu maior que n! com p<n no arranjo, você provavelmente esqueceu de parar em p fatores.',
      ),
      named(
        'Exceção: cargos na comissão e mesa redonda',
        '“Comissão de 3 entre 8” sem cargos: C(8,3)=56. “Presidente, secretário e vogal” entre os mesmos 8: A(8,3)=336, porque a ordem (quem ocupa qual cadeira) muda o resultado. Permutação circular (mesa redonda): (n−1)!, porque as rotações da mesma fila são a mesma mesa. Reflexos (colar, pulseira) ainda dividem por 2. Só use circular se o texto falar em círculo ou mesa redonda; não “circularize” a fila do protocolo.',
      ),
      named(
        'Exemplo resolvido — 3 crachás e 4 cordões',
        'Etapas: escolher crachá e escolher cordão. Multiplicativo: 3×4=12 pares. Conferência: para cada um dos 3 crachás há 4 cordões. Isca 7 = 3+4 (aditivo). Isca 81 (3^4) ou 64 (4^3), que seriam senhas com repetição em outra história. O “e” do enunciado é o produto. Se o servidor pudesse sair só com crachá ou só com cordão, aí sim se somaria — mas o texto de uniforme pede o conjunto das duas peças.',
      ),
      named(
        'Exemplo resolvido — fila de 5 servidores',
        'Entram todos; a ordem na fila importa: 5! = 120. Conferência: 5 escolhas para a 1ª posição, 4 para a 2ª, 3, 2, 1 → 120. Iscas: A(5,2)=20 e A(5,3)=60 (não preenchem a fila). Isca 25=5². Isca 32=2^5. Se duas pessoas precisarem ficar juntas, trate o par como um bloco (4!×2), mas só se o enunciado disser isso — não invente restrição.',
      ),
      named(
        'Exemplo resolvido — comissão de 3 entre 8',
        'Ordem não importa: {Ana, Bia, Caio} é a mesma comissão que {Caio, Ana, Bia}. C(8,3)=(8×7×6)/6=56. Conferência: C(8,5)=56 (deixar 5 de fora). A(8,3)=8×7×6=336 conta cada comissão 6 vezes (3!). Isca 336 no item sem cargos. Isca 24=4!. Isca 8×3=24 (somar ou multiplicar mal). Se o texto criar cargos, mude para arranjo; se não criar, fique em 56.',
      ),
      named(
        'Exemplo resolvido — anagramas de AGENTE',
        '6 letras, E duas vezes. 6!/2! = 360. Conferência: 720 anagramas se os dois E fossem distintos (E₁GENTE ≠ E₂GENTE na contagem crua); como são iguais, cada palavra real foi contada 2! vezes. Isca 720. Isca 120 (5!, como se fossem 5 letras). Isca 6×5=30. Palavra sem repetição (LIVRO): 5!=120, sem dividir. Conte as letras e as frequências antes do fatorial.',
      ),
      named(
        'Arranjo versus combinação na linguagem do edital',
        'O Anexo IV nomeia os dois. A banca não precisa dizer “calcule C(8,3)”: ela conta uma história. Palavras de combinação: comissão, equipe, conjunto, grupo, lote de pastas, escolher 3 processos. Palavras de arranjo: fila, ordem de atendimento, senha, pódio, presidente e relator, 1º, 2º e 3º. Se vacilar, calcule os dois e pergunte: “Ana-Bia-Caio é o mesmo resultado que Caio-Bia-Ana?”. Sim → combinação; não → arranjo.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Princípio da inclusão-exclusão avançado (já está em diagramas), binômio de Newton, funções geradoras, permutação caótica (derangement), combinação com repetição C(n+p−1, p) e gráfico de árvores com 5 andares não são o recorte deste cargo. Circular e reflexo só se o texto falar em mesa ou colar. n ≤ 10 cobre o fatorial que cabe em prova objetiva de nível médio. Não leve combinatória olímpica para 6 itens de RLM.',
      ),
      named(
        'O que deixa para Probabilidade e para Sequências',
        'P = favoráveis/possíveis usa a contagem, mas a aula de probabilidade é que ensina união, condicional e reposição. Anagrama como “próxima palavra da sequência” é padrão de letras, não 6!/2!. Aqui: classificar aditivo/multiplicativo e ordem sim/não, calcular n!, A e C, dividir repetição. Estudar Bayes para contar filas de 5 é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Ou exclusivo de caminhos: some. Etapas “e”: multiplique.',
        'Fila / anagrama sem repetição: n!. Comissão: C(n,p). Cargos distintos: A(n,p).',
        'A(n,p)=n×(n−1)×…×(n−p+1). C = A / p!.',
        'Letra repetida: divida pelo fatorial das frequências.',
      ),
    ],
    definitions: [
      { term: 'Arranjo', definition: 'Escolha ordenada de p elementos distintos entre n.' },
      { term: 'Combinação', definition: 'Escolha não ordenada de p elementos entre n.' },
      { term: 'Permutação', definition: 'Arranjo de n entre n; n! se todos distintos.' },
      { term: 'Princípio aditivo', definition: 'Soma do número de opções mutuamente exclusivas.' },
    ],
    comparisons: [
      {
        title: 'Ordem importa?',
        leftLabel: 'Sim (arranjo / permutação)',
        rightLabel: 'Não (combinação)',
        rows: [
          { label: 'Enunciado', left: 'fila, pódio, senha, cargos', right: 'comissão, grupo, lote, conjunto' },
          { label: '8 escolhe 3', left: 'A(8,3)=336', right: 'C(8,3)=56' },
          { label: 'Fórmula extra', left: 'não divide por p!', right: 'divide o arranjo por p!' },
        ],
      },
    ],
    examples: [
      '3×4=12 pares crachá–cordão.',
      '5!=120 filas.',
      'C(8,3)=56 comissões.',
      'AGENTE: 360 anagramas.',
    ],
    publicAdminExamples: [
      'Comissão de sindicância (sem cargos no item) é combinação. Mesa com presidente e relator é arranjo. Crachá e cordão: multiplicativo.',
    ],
    procedures: [
      'As escolhas se excluem ou se combinam? (aditivo vs multiplicativo).',
      'Entram todos ou só p? Ordem importa? (fila/cargos × comissão/grupo).',
      'Há objeto repetido? Divida pelo fatorial da repetição.',
      'Calcule A como p fatores decrescentes; C = A / p!.',
      'Confira combinação com C(n,p)=C(n,n−p). Risque 336 no item de comissão sem cargos.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — crachá e cordão',
        setup: '3 modelos de crachá e 4 cores de cordão. Quantos pares distintos?',
        steps: [
          'Etapas encadeadas (“e”): multiplicativo.',
          '3 × 4 = 12.',
          'Para cada crachá há 4 cordões; liste mentalmente se vacilar.',
          '3+4=7 seria aditivo, como se o servidor escolhesse só uma das peças.',
        ],
        result: '12 pares. 7 é a isca do princípio errado.',
      },
      {
        title: 'Exemplo resolvido 2 — comissão de 3 entre 8, não arranjo',
        setup: 'Escolher 3 servidores entre 8 para uma comissão, sem cargos no enunciado.',
        steps: [
          'Ordem não importa: combinação.',
          'C(8,3) = (8×7×6)/(3×2×1) = 56.',
          'Conferência: C(8,5)=56.',
          'A(8,3)=336 contaria cada grupo 3! vezes — só valeria com presidente, secretário e vogal.',
        ],
        result: '56 comissões. 336 é a isca de ordem.',
      },
      {
        title: 'Exemplo resolvido 3 — fila de 5 e anagrama de AGENTE',
        setup: '(a) 5 servidores em fila. (b) anagramas da palavra AGENTE.',
        steps: [
          'Fila: entram todos, ordem importa → 5! = 120.',
          'AGENTE: 6 letras, E duas vezes → 6!/2! = 360.',
          'Sem dividir o 2!, cada palavra real seria contada duas vezes (720).',
          'A(5,2)=20 não preenche a fila.',
        ],
        result: '120 filas; 360 anagramas.',
      },
    ],
    recallPrompts: [
      'Qual pergunta distingue arranjo de combinação?',
      'Por que C(8,3) vale 56 e A(8,3) vale 336?',
      'Por que se divide 6! por 2! nos anagramas de AGENTE?',
      'Quando se soma e quando se multiplica no princípio fundamental?',
    ],
    recallAnswers: [
      'A ordem muda o resultado? Sim: arranjo (ou permutação se entram todos). Não: combinação.',
      'O arranjo conta cada trio 3!=6 vezes, uma para cada ordem interna. 336/6=56. Sem cargos, as 6 ordens são a mesma comissão.',
      'A letra E se repete duas vezes; as trocas dos dois E não geram palavra nova. 720/2=360.',
      'Soma: alternativas que se excluem (“ou”). Produto: etapas que se encadeiam (“e”). Crachá e cordão multiplicam; ônibus ou van somam.',
    ],
    commonErrors: [
      'Somar quando deveria multiplicar.',
      'Usar arranjo em comissão sem cargos.',
      'Esquecer de dividir o anagrama pela letra repetida.',
      'Calcular 5² no lugar de 5!.',
    ],
    traps: [
      '336 no item de comissão (A no lugar de C).',
      '720 no anagrama de AGENTE.',
      '7 = 3+4 no problema das etapas.',
    ],
    synthesis:
      'Contagem é classificar a situação. Multiplique etapas; some alternativas exclusivas; pergunte se a ordem muda o resultado. Combinação = arranjo sem a ordem.',
    glossary: [
      { term: 'Fatorial', definition: 'n! = n×(n−1)×…×1, com 0! = 1.' },
      { term: 'Princípio multiplicativo', definition: 'Produto do número de opções de cada etapa.' },
      { term: 'Anagrama', definition: 'Permutação das letras de uma palavra.' },
    ],
    masteryCriteria: [
      'Escolher aditivo ou multiplicativo com uma frase de justificativa.',
      'Calcular n!, A(n,p) e C(n,p) para valores de prova (n ≤ 10).',
      'Distinguir comissão de fila no enunciado.',
      'Ajustar permutação quando há letra repetida.',
    ],
  }),

  lesson({
    id: 'rlm-probabilidade',
    disciplineId: 'rlm',
    chapterId: 'rlm-contagem',
    topicId: 'rlm-probabilidade',
    title: 'Probabilidade',
    objective:
      'Calcular probabilidade clássica, união de dois eventos, eventos independentes e probabilidade condicional, inclusive em retiradas sem reposição.',
    importance:
      'O edital pede união, condicional e independência. Com 6 itens na disciplina, um problema de urna ou de união é o formato mais frequente de “noções de probabilidade”.',
    estimatedMinutes: 32,
    prerequisites: ['rlm-contagem', 'rlm-diagramas'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-10',
      'Noções de probabilidade: união, condicional e eventos independentes',
    ],
    relatedLessonIds: ['rlm-contagem', 'rlm-diagramas', 'rlm-proporcao'],
    questionIds: [
      'rlm-probabilidade-01',
      'rlm-probabilidade-02',
      'rlm-probabilidade-03',
      'rlm-probabilidade-04',
    ],
    essencial: [
      named(
        'Definição clássica: favoráveis sobre possíveis, entre 0 e 1',
        'Se os resultados elementares são igualmente possíveis, P(A) = n(A)/n(Ω). O resultado vive em [0, 1]: nunca 5/3, nunca 80% somado a 50% sem descontar interseção. Dado honesto: P(face ≥ 5) = 2/6 = 1/3 (faces 5 e 6). “Maior que 5” seria só a 6, 1/6 — leia o “ou igual”. Urna com 5 vermelhas e 3 azuis: P(vermelha)=5/8, não 5/3 (razão entre cores). Primeiro descreva Ω (6 faces, 8 pastas, 36 pares de dados); depois conte o evento. Fração irredutível no fim.',
      ),
      named(
        'União: some e desconte a interseção — independência não é disjunção',
        'P(A ∪ B) = P(A)+P(B)−P(A ∩ B). É a mesma inclusão-exclusão dos diagramas, em linguagem de probabilidade. Se A e B são mutuamente exclusivos (não podem ocorrer juntos), a interseção é 0 e as probabilidades se somam. Independência é outra relação: A não altera a chance de B, e P(A ∩ B)=P(A)P(B). Eventos disjuntos com P>0 NÃO são independentes (a interseção é 0, o produto não). Confundir as duas palavras é item perdido. 0,30+0,50−0,10=0,70; marcar 0,80 é esquecer o desconto.',
      ),
      named(
        'Independência e reposição: o produto só vale se a urna não muda',
        'A e B independentes ⇔ P(A ∩ B) = P(A)P(B). Dois dados: P(ambos pares)=(1/2)×(1/2)=1/4. Com reposição (a pasta volta), a segunda retirada tem o mesmo denominador: independentes. Sem reposição, o total cai 1 e a segunda fração muda: não são independentes. O enunciado “retira duas pastas” no arquivo da prefeitura, em silêncio sobre devolver, costuma ser sem reposição — mas leia. Isca clássica: usar (4/10)² = 4/25 no item sem reposição, cuja conta certa é (4/10)×(3/9)=2/15.',
      ),
      named(
        'Condicional: o universo encolheu para B',
        'P(A|B) = P(A ∩ B)/P(B), com P(B)>0. Em português: “sabendo que B já ocorreu, qual a chance de A?”. O denominador deixa de ser todo Ω e passa a ser só B. Sem reposição é condicional disfarçada: saiu uma branca entre 10, restam 3 brancas em 9. Não divida P(A) por P(B) se A∩B não foi montado. Complementar: P(Aᶜ)=1−P(A), atalho de “pelo menos um” = 1 − P(nenhum).',
      ),
    ],
    completo: [
      named(
        'Método de prova: Ω, reposição, união ou produto',
        'Passos: (1) descreva Ω e n(Ω); (2) o evento é uma face, uma cor, uma união, duas retiradas? (3) duas retiradas: com ou sem reposição? (4) união: escreva P(A)+P(B)−P(A∩B) antes dos números; (5) reduz a fração e confira 0 ≤ P ≤ 1. Não misture: independência é produto; disjunção é interseção vazia; condicional é “restringiu o universo”. Se o item já deu P(A∩B) numérico, use esse número — não substitua por P(A)P(B) “porque independente soa bonito”.',
      ),
      named(
        'Exceção: “pelo menos um” e união de independentes',
        'P(pelo menos um) = 1 − P(nenhum) evita contar casos duplos. Se A e B são independentes e o item pede a união, P(A∪B)=P(A)+P(B)−P(A)P(B). Não use o produto no lugar da interseção se o enunciado já trouxe 0,10. “Maior ou igual” não é “maior”. Razão 5 vermelhas : 3 azuis não é probabilidade 5/3. Essas três leituras erradas geram alternativas prontas.',
      ),
      named(
        'Exemplo resolvido — dado, face ≥ 5',
        'Ω = {1,2,3,4,5,6}, n=6. Favoráveis: 5 e 6, n=2. P=2/6=1/3. Conferência: 1−P(≤4)=1−4/6=1/3. Isca 1/6 (“maior que 5”). Isca 5/6 (face ≤5). Isca 1/2 (pares). Circule no enunciado o símbolo ≥. O mesmo cuidado vale para “pelo menos 5” versus “mais de 5”.',
      ),
      named(
        'Exemplo resolvido — união 0,30 / 0,50 / 0,10',
        'P(A)=0,30, P(B)=0,50, P(A∩B)=0,10. União: 0,30+0,50−0,10=0,70. Conferência: P(só A)=0,20, só B=0,40, ambos=0,10; soma 0,70. Isca 0,80 (somar sem descontar). Isca 0,90 (somar também a interseção). Isca 0,10 (responder a interseção). Isca 0,15 (produto 0,30×0,50, tratar como independentes contra o 0,10 dado: 0,15 ≠ 0,10, logo neste item eles não são independentes).',
      ),
      named(
        'Exemplo resolvido — duas pastas brancas sem reposição',
        '10 pastas, 4 brancas. Duas retiradas sem devolver. P(ambas brancas)=(4/10)×(3/9)=12/90=2/15. Por combinação: C(4,2)/C(10,2)=6/45=2/15 (mesma fração). Conferência: 6/45 simplifica por 3. Com reposição seria (4/10)×(4/10)=4/25 — isca. Isca 4/10 (só a primeira). Isca 3/9 (só a segunda). A ordem das brancas no produto já está na sequência “primeira e segunda”; C(4,2) trata o par sem ordem e divide pelo total de pares.',
      ),
      named(
        'Exemplo resolvido — urna 5 vermelhas e 3 azuis',
        'n(Ω)=8. P(vermelha)=5/8. P(azul)=3/8. P(vermelha ou azul)=1 (partição). Isca 5/3 (razão entre cores, maior que 1: impossível). Isca 5/5=1. Se retirar uma vermelha sem reposição, P(segunda vermelha | primeira vermelha)=4/7. Condicional explícita: o denominador virou 7, o numerador 4. Não mantenha 5/8 na segunda retirada.',
      ),
      named(
        'Dois dados e o complementar',
        '36 pares igualmente possíveis. Soma 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6/36=1/6. Soma 8: 5 pares, 5/36. P(pelo menos um 6)= 1 − P(nenhum 6)= 1 − (5/6)×(5/6)= 1 − 25/36 = 11/36. Contar “primeiro 6 ou segundo 6” sem descontar (6,6) inflaria para 12/36. União de novo.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Teorema de Bayes como fórmula nomeada, distribuição binomial, normal, esperança, variância, árvore com três andares e probabilidade geométrica (área) não estão no núcleo deste cargo. O edital pede união, condicional e independentes. Condicional P(A|B)=P(A∩B)/P(B) e o produto com/sem reposição cobrem o item. Não leve Estatística de concurso de analista para Agente Administrativo. Bayes só se o enunciado der exatamente os três números da definição — e ainda assim é a própria condicional.',
      ),
      named(
        'O que deixa para Contagem e para Diagramas',
        'C(n,p) no numerador e no denominador é ferramenta de contagem; a interpretação “com/sem reposição” é desta aula. Inclusão-exclusão de três conjuntos com 120 processos é diagrama, não probabilidade, a menos que o item peça P. Aqui: razão clássica, união com desconto, produto se independentes, frações que se atualizam se não há reposição. Estudar densidade de probabilidade contínua para uma urna de 8 pastas é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'P = favoráveis / possíveis (equiprováveis).',
        'União: some e desconte a interseção.',
        'Independentes: produto. Sem reposição: atualize o total.',
        'P(A|B)=P(A∩B)/P(B). Complementar: 1 − P.',
      ),
    ],
    definitions: [
      { term: 'Espaço amostral', definition: 'Conjunto Ω de resultados possíveis do experimento.' },
      { term: 'Eventos independentes', definition: 'A ocorrência de um não altera a probabilidade do outro.' },
      { term: 'Probabilidade condicional', definition: 'Probabilidade de A restrita ao universo em que B já ocorreu.' },
      { term: 'Eventos mutuamente exclusivos', definition: 'Não podem ocorrer juntos; A ∩ B = ∅. Não confundir com independência.' },
    ],
    comparisons: [
      {
        title: 'Com reposição versus sem reposição',
        leftLabel: 'Com reposição',
        rightLabel: 'Sem reposição',
        rows: [
          { label: '2ª retirada', left: 'mesmo denominador', right: 'denominador cai 1' },
          { label: 'Independência', left: 'sim (se a urna não muda)', right: 'não' },
          { label: '2 brancas em 4/6', left: '(4/10)×(4/10)=4/25', right: '(4/10)×(3/9)=2/15' },
        ],
      },
    ],
    examples: [
      'Dado, P(≥5)=1/3.',
      'Urna 5+3, P(vermelha)=5/8.',
      'P(A∪B)=0,70 com interseção 0,10.',
      'Duas brancas sem reposição: 2/15.',
    ],
    publicAdminExamples: [
      'Sorteio de duas pastas em um arquivo sem devolver a primeira: o total de pastas cai. Dois setores “A ou B” com servidores em ambos: use a união com interseção.',
    ],
    procedures: [
      'Descreva Ω e conte n(Ω).',
      'União: escreva P(A)+P(B)−P(A∩B) antes de substituir.',
      'Duas retiradas: decida reposição. Sem reposição, multiplique frações atualizadas.',
      'Condicional: o denominador passa a ser n(B) ou P(B), não n(Ω).',
      'Confira 0 ≤ P ≤ 1 e reduza a fração. Risque 4/25 no item sem reposição.',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — dado, face ≥ 5',
        setup: 'Dado honesto. Qual P(face ≥ 5)?',
        steps: [
          'Ω tem 6 faces. Favoráveis: 5 e 6.',
          'P = 2/6 = 1/3.',
          '“Maior que 5” seria só a 6 (1/6): leia o ≥.',
          'Conferência: 1 − 4/6 = 1/3.',
        ],
        result: '1/3.',
      },
      {
        title: 'Exemplo resolvido 2 — união com interseção 0,10',
        setup: 'P(A)=0,30, P(B)=0,50, P(A∩B)=0,10. Pedem P(A∪B).',
        steps: [
          'Fórmula: 0,30+0,50−0,10=0,70.',
          'Não some 0,80. Não use o produto 0,15 no lugar de 0,10.',
          '0,15 ≠ 0,10: neste item A e B não são independentes.',
          'Só A + só B + ambos = 0,20+0,40+0,10=0,70.',
        ],
        result: '0,70.',
      },
      {
        title: 'Exemplo resolvido 3 — duas brancas sem reposição',
        setup: '10 pastas, 4 brancas. Retiram-se duas sem devolver. P(ambas brancas)?',
        steps: [
          '(4/10)×(3/9)=12/90=2/15.',
          'Por combinação: C(4,2)/C(10,2)=6/45=2/15.',
          'Com reposição seria 4/25 — isca, denominador não cairia.',
          'Fração entre 0 e 1, já irredutível.',
        ],
        result: '2/15.',
      },
    ],
    recallPrompts: [
      'Por que P(A)+P(B) não é a união quando há interseção?',
      'O que muda no produto (4/10)×(?) se a pasta não volta?',
      'Independência e disjunção são a mesma coisa?',
      'Como se lê P(A|B) em uma frase de expediente?',
    ],
    recallAnswers: [
      'A interseção entra nas duas parcelas. Desconta-se P(A∩B) uma vez: inclusão-exclusão.',
      'O denominador cai para 9 e, se a primeira foi branca, o numerador cai para 3. Sem reposição: (4/10)×(3/9)=2/15, não 4/25.',
      'Não. Disjuntos não ocorrem juntos (interseção vazia). Independentes não se alteram (produto). Disjuntos com P>0 não são independentes.',
      '“Sabendo que B já ocorreu, a chance de A”. O universo deixa de ser Ω e passa a ser B. Numerador: A e B juntos.',
    ],
    commonErrors: [
      'Somar P(A)+P(B) com interseção não nula.',
      'Tratar sem reposição como produto P×P.',
      'Obter fração > 1 (5/3) ao usar razão entre cores.',
      'Ler “maior ou igual” como “maior”.',
    ],
    traps: [
      '4/25 (com reposição) no item sem reposição.',
      '0,80 = 0,3+0,5 na união.',
      '3/8 (azul) quando se pede vermelha.',
    ],
    synthesis:
      'Probabilidade de nível médio é razão, união com desconto e produto com ou sem atualização do denominador. Independência é produto; condicional é “restringiu o universo”.',
    glossary: [
      { term: 'Eventos mutuamente exclusivos', definition: 'Não podem ocorrer juntos; A ∩ B = ∅.' },
      { term: 'Reposição', definition: 'O objeto sorteado volta ao conjunto antes do próximo sorteio.' },
      { term: 'Equiprovável', definition: 'Cada resultado elementar tem a mesma probabilidade.' },
    ],
    masteryCriteria: [
      'Calcular P clássica em dado e urna.',
      'Aplicar P(A∪B) com interseção dada.',
      'Distinguir independência e disjunção.',
      'Resolver duas retiradas sem reposição e reduzir a fração.',
    ],
  }),

  lesson({
    id: 'rlm-medidas',
    disciplineId: 'rlm',
    chapterId: 'rlm-geometria',
    topicId: 'rlm-media-geometria',
    title: 'Médias, geometria plana e medidas',
    objective:
      'Calcular média simples e ponderada, perímetro e área de figuras planas e converter unidades do Sistema Legal de Unidades (comprimento, área, volume, massa, capacidade e tempo).',
    importance:
      'Último bloco do programa de RLM no Anexo IV, p. 67. Junta estatística elementar, geometria do ensino fundamental e o SI — conversão m³ ↔ litro é item clássico.',
    estimatedMinutes: 34,
    prerequisites: ['rlm-numerico', 'rlm-equacoes'],
    sourceIds: FONTES,
    relatedEditalItems: [
      'ed-rlm-11',
      'Média aritmética simples e ponderada. Perímetro e área de figuras planas. Sistema Legal de Medidas',
    ],
    relatedLessonIds: ['rlm-numerico', 'rlm-equacoes', 'rlm-proporcao'],
    questionIds: ['rlm-medidas-01', 'rlm-medidas-02', 'rlm-medidas-03', 'rlm-medidas-04'],
    essencial: [
      named(
        'Média simples e ponderada — o denominador é a soma dos pesos',
        'Simples: some os valores e divida pela quantidade. Ponderada: multiplique cada valor pelo seu peso e divida pela soma dos pesos, não pelo número de notas. Notas 7, 8, 9 com pesos 2, 3, 5: numerador 14+24+45=83; denominador 2+3+5=10; média 8,3. A simples seria (7+8+9)/3=8,0 — isca de quem ignora os pesos — ou (7+8+9)/10=2,4, ainda pior. O peso aqui é fator de importância (carga horária, número de avaliações), não peso em newtons. Se todos os pesos forem 1, a ponderada coincide com a simples.',
      ),
      named(
        'Perímetro é contorno (m); área é superfície (m²)',
        'Retângulo: P=2(ℓ+w), A=ℓw. Quadrado: P=4ℓ, A=ℓ². Triângulo: P=soma dos lados, A=(base×altura)/2. Trapézio: A=(B+b)h/2. Círculo: comprimento C=2πr, área A=πr². O edital pede perímetro e área de figuras planas: não misture as unidades e não puxe volume de prisma. Retângulo 8 m × 5 m: área 40 m², perímetro 26 m. A isca 26 no item de área é o erro de unidade mais cobrado da disciplina. Rodapé usa perímetro; piso usa área.',
      ),
      named(
        'Sistema Legal: comprimento, área e o hectare',
        'O Brasil adota o SI. Comprimento: km, m, cm, mm (fatores 10³, 10², 10). Área: 1 m² = 10 000 cm² = 1 000 000 mm². 1 hectare = 10 000 m². 1 km² = 1 000 000 m² = 100 ha. Volume: 1 m³ = 1 000 dm³ = 1 000 000 cm³. Ao converter área, o expoente 2 duplica os zeros: 1 m = 100 cm ⇒ 1 m² = 100² cm² = 10 000 cm². Quem converte 1 m² como 100 cm² trata área como comprimento.',
      ),
      named(
        'Massa, litro e tempo — o atalho 1 m³ = 1 000 L',
        'Massa: kg (unidade SI), g, t (1 t = 1 000 kg). Capacidade: litro, extra-SI aceito; 1 L = 1 dm³, portanto 1 m³ = 1 000 L. Tempo: segundo (SI), 1 min = 60 s, 1 h = 3 600 s. 2,4 m³ = 2 400 L (três zeros). Iscas 240 L (dois zeros, como cm) e 24 000 L (quatro zeros, como hectare ou cm²). Reservatório da prefeitura em m³ vira litros na planilha de abastecimento por esse fator 1 000, não 100 nem 10 000.',
      ),
    ],
    completo: [
      named(
        'Método: nomear a grandeza, copiar a fórmula, converter no fim',
        'Pergunte: o pedido é média (simples ou ponderada?), linear (m), de área (m²), de volume/capacidade (m³/L) ou de massa? Copie a fórmula da figura; substitua; mantenha π se o item não der 3,14 nem 22/7. Conversão: conte zeros (m³→L: três). Conferência de unidade: área não pode sair em metros; perímetro não pode sair em m²; média ponderada precisa ter os pesos no denominador. Esse roteiro evita marcar 26 no lugar de 40 e 8,0 no lugar de 8,3.',
      ),
      named(
        'Exceção: π=22/7 com r=7, e o trapézio que não é retângulo',
        'Quando π=22/7 e r=7, a área πr² = (22/7)×49 = 22×7 = 154: o 7 cancela. Circunferência 2πr = 2×(22/7)×7 = 44 — isca se o pedido for área. Diâmetro 14 não entra na área senão como 2r. Trapézio de bases 8 e 12 e altura 5: A=(8+12)×5/2=50. Usar 12×5=60 trata como retângulo de uma base só. O edital não pede volume de cilindro; se aparecer “caixa”, ainda assim confirme se a figura é plana.',
      ),
      named(
        'Exemplo resolvido — retângulo 8 m × 5 m',
        'Área: 8×5=40 m². Perímetro: 2(8+5)=26 m. Conferência: dois comprimentos 8 e dois 5 somam 26. Isca 26 no item de piso (área). Isca 40 m no item de rodapé (perímetro). Isca 13 (sem o 2). Isca 80 (8×10). Unidade no gabarito: se a alternativa diz 40 m, está dimensionalmente errada para área. Piso da sala da seção: 40 m² de cerâmica; rodapé: 26 m de acabamento.',
      ),
      named(
        'Exemplo resolvido — média ponderada 7, 8, 9 com pesos 2, 3, 5',
        'Numerador: 7×2 + 8×3 + 9×5 = 14+24+45=83. Denominador: 10. Média 8,3. Conferência: 8,3×10=83. Isca 8,0 (simples). Isca 8,3 com denomidador 3 (usou os pesos só em cima). Isca 24 (um dos produtos). Se o estágio na prefeitura tem pesos diferentes nas avaliações, a média da ficha é esta, não a simples. Escreva os produtos em coluna para não perder o 9×5=45.',
      ),
      named(
        'Exemplo resolvido — 2,4 m³ em litros',
        '1 m³ = 1 000 L, logo 2,4 × 1 000 = 2 400 L. Conferência: 2,4 m³ = 2 400 dm³ e 1 dm³=1 L. Isca 240 (×100). Isca 24 000 (×10 000, hectare/cm²). Isca 2,4 (esquecer a conversão). Isca 2400 m³ (unidade errada). O reservatório de 2,4 m³ abastece 2 400 litros, não 240. Três zeros: memorize o atalho; não invente 1 m³=100 L.',
      ),
      named(
        'Exemplo resolvido — círculo r=7 com π=22/7',
        'Área: (22/7)×7² = (22/7)×49 = 22×7 = 154 (cm² se r=7 cm). Circunferência: 2×(22/7)×7=44. Isca 44 no item de área. Isca 49 (r² sem π). Isca 22 (cancelou demais). Isca 14 (diâmetro). Se π=3,14 e r=10, área 314 — outra conta; não misture 22/7 com 3,14 no mesmo item a menos que o texto autorize aproximação.',
      ),
      named(
        'Hectare, lote e prefixos que realmente caem',
        'Terreno 80 m × 50 m = 4 000 m² = 0,40 ha (divida m² por 10 000). 3,6 km/h = 1 m/s (divida por 3,6) — só se o item misturar velocidade; não é o núcleo. Prefixos: quilo 10³, centi 10⁻², mili 10⁻³. Mega 10⁶ é raro no nível médio. Não estude candela nem ampere: o edital pede o Sistema Legal no recorte de comprimento, área, volume/capacidade, massa e tempo ligados a figuras planas e a médias.',
      ),
    ],
    aprofundamento: [
      named(
        'O que não superestudar além do Anexo IV',
        'Volume e área de figuras espaciais (prisma, cilindro, cone, esfera) não estão no recorte “figuras planas”. Mediana, moda, desvio padrão e histograma não estão em “média aritmética simples e ponderada”. Trigonometria (seno, cosseno, lei dos senos) e coordenadas no plano não são deste item. SI completo com 7 unidades de base (ampere, kelvin, mol, candela) é cultura geral; a prova pede m, kg, s e derivados (m², m³, L). Não leve Geometria Espacial de ensino médio para 6 itens de RLM.',
      ),
      named(
        'O que deixa para Equações e para Numérico',
        'Achar os lados a partir de perímetro e área juntos é equação do 2º grau (aula de equações). Média reversa “média de cinco é 18, um é 10” é raciocínio numérico. Aqui: ponderar pesos, aplicar P e A da figura plana, converter m³↔L e m²↔ha sem trocar a unidade do gabarito. Estudar integral para a área do círculo com π=22/7 e r=7 é custo ruim.',
      ),
    ],
    revisaoRapida: [
      ...blocks(
        'Ponderada: soma (valor×peso) / soma dos pesos.',
        'Área do retângulo ℓw; perímetro 2(ℓ+w). Círculo: πr², não 2πr.',
        '1 m³ = 1 000 L. 1 ha = 10 000 m². 1 h = 3 600 s.',
        'π=22/7 com r=7 cancela o 7 e deixa 22×7=154.',
      ),
    ],
    definitions: [
      { term: 'Média ponderada', definition: 'Média em que cada valor é multiplicado por um peso de importância.' },
      { term: 'Perímetro', definition: 'Comprimento do contorno da figura (unidade linear).' },
      { term: 'Sistema Legal de Unidades', definition: 'SI adotado no Brasil: m, kg, s, e derivados (m², m³, L como extra-SI aceito).' },
      { term: 'Área', definition: 'Medida da superfície da figura plana; unidade quadrada (m², ha, cm²).' },
    ],
    comparisons: [
      {
        title: 'Grandeza e unidade',
        leftLabel: 'O que se mede',
        rightLabel: 'Unidade típica na prova',
        rows: [
          { label: 'Comprimento / perímetro', left: 'metro', right: 'm, km, cm' },
          { label: 'Área', left: 'metro quadrado', right: 'm², ha, cm²' },
          { label: 'Volume', left: 'metro cúbico', right: 'm³' },
          { label: 'Capacidade', left: 'litro', right: 'L (1 L = 1 dm³)' },
          { label: 'Massa', left: 'quilograma', right: 'kg, g, t' },
          { label: 'Tempo', left: 'segundo', right: 's, min, h' },
        ],
      },
    ],
    examples: [
      'Retângulo 8×5: área 40 m², perímetro 26 m.',
      'Notas 7,8,9 pesos 2,3,5: média 8,3.',
      '2,4 m³ = 2 400 L.',
      'Círculo r=7, π=22/7: área 154 cm².',
    ],
    publicAdminExamples: [
      'Piso de uma sala retangular (área) versus rodapé (perímetro). Reservatório da prefeitura em m³ convertido para litros na planilha de abastecimento. Média ponderada de avaliações de estágio com pesos diferentes.',
    ],
    procedures: [
      'Identifique se o pedido é linear (m), de área (m²) ou de volume/capacidade (m³/L).',
      'Média: simples ou ponderada? Some os pesos no denominador, não o número de notas.',
      'Figura: copie a fórmula; substitua; com π=22/7 e r=7, área 154 (não 44).',
      'Conversão: conte os zeros (m³→L: três; m²→cm²: quatro).',
      'Conferência de unidade: área não sai em metros; perímetro não sai em m².',
    ],
    workedExamples: [
      {
        title: 'Exemplo resolvido 1 — área 40 m², não perímetro 26 m',
        setup: 'Sala retangular 8 m × 5 m. Pedem a área do piso.',
        steps: [
          'Área = 8×5 = 40 m².',
          'Perímetro = 2(8+5)=26 m — é o rodapé, não o piso.',
          'Unidade: m², não m.',
          'Isca 26 se o item pede área; isca 13 se esquecer o 2 do perímetro.',
        ],
        result: '40 m². 26 m é o contorno.',
      },
      {
        title: 'Exemplo resolvido 2 — média ponderada 8,3',
        setup: 'Notas 7, 8 e 9 com pesos 2, 3 e 5.',
        steps: [
          'Produtos: 14, 24 e 45. Soma 83.',
          'Pesos: 2+3+5=10. Média 83/10=8,3.',
          'Não divida por 3 (simples 8,0) nem some 7+8+9 no numerador com denom. 10.',
          'Conferência: 8,3×10=83.',
        ],
        result: '8,3. A simples 8,0 ignora os pesos.',
      },
      {
        title: 'Exemplo resolvido 3 — 2,4 m³ e círculo de área 154',
        setup: '(a) Converter 2,4 m³ em litros. (b) Área do círculo r=7, π=22/7.',
        steps: [
          '1 m³ = 1 000 L → 2,4×1000 = 2 400 L. Não ×100 nem ×10 000.',
          'Área: (22/7)×49 = 154. O 7 cancela.',
          'Circunferência 44 é isca do item de área.',
          'Conferência do litro: 2,4 m³ = 2 400 dm³ = 2 400 L.',
        ],
        result: '2 400 L; área 154 (na unidade de r²).',
      },
    ],
    recallPrompts: [
      'Na média ponderada, o que vai no denominador?',
      'Por que 26 não é a área do retângulo 8×5?',
      'Quantos litros há em 1 m³, e por que 240 e 24 000 são iscas de 2,4 m³?',
      'Com π=22/7 e r=7, por que a área é 154 e não 44?',
    ],
    recallAnswers: [
      'A soma dos pesos, não a quantidade de notas. (7×2+8×3+9×5)/(2+3+5)=83/10=8,3.',
      '26 m é o perímetro 2(8+5). Área é 40 m². Contorno ≠ superfície; m ≠ m².',
      '1 m³ = 1 000 L, logo 2,4 m³ = 2 400 L. 240 usa fator 100; 24 000 usa 10 000 (hectare/cm²).',
      'Área πr² = (22/7)×49 = 22×7 = 154. 44 é a circunferência 2πr. Fórmula diferente, unidade do contorno.',
    ],
    commonErrors: [
      'Entregar perímetro no item de área (26 no lugar de 40).',
      'Média simples quando há pesos.',
      '1 m³ = 100 L ou 10 000 L.',
      'Usar 2πr quando o item pede πr².',
    ],
    traps: [
      '44 (circunferência) no item da área 154.',
      '8,0 (média simples) no item ponderado.',
      '240 L ou 24 000 L no lugar de 2 400 L.',
    ],
    synthesis:
      'Média ponderada multiplica pesos. Área e perímetro não se substituem. No SI, o atalho que mais cai: 1 m³ = 1 000 L e, no círculo com π=22/7 e r=7, a área é 154.',
    glossary: [
      { term: 'Hectare', definition: '10 000 m²; usado em terrenos.' },
      { term: 'Litro', definition: 'Unidade de capacidade igual a 1 dm³; 1 000 L enchem 1 m³.' },
      { term: 'Raio', definition: 'Segmento do centro à circunferência; metade do diâmetro.' },
      { term: 'Peso (na média)', definition: 'Fator de importância, não peso físico em newtons.' },
    ],
    masteryCriteria: [
      'Calcular média ponderada com pesos inteiros.',
      'Obter área e perímetro de retângulo e área de círculo com π=22/7.',
      'Converter m³ ↔ L e m² ↔ ha.',
      'Nomear a unidade SI de comprimento, massa, tempo, área e volume.',
    ],
  }),
]
