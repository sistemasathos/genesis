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
        'O que a banca cobra',
        'Não é “fazer conta solta”: é ler o problema, escolher a operação certa e conferir se o número encontrado responde à pergunta. Números reais incluem naturais, inteiros, racionais (frações e decimais) e irracionais (quando aparecem, em geral via √ ou π já dados).',
      ),
      named(
        'Operações e ordem',
        'Parênteses, depois potências e raízes, depois multiplicação e divisão (na ordem em que aparecem), depois soma e subtração. Fração é divisão: 3/4 de 80 = (3 × 80) / 4 = 60. “De” quase sempre indica produto.',
      ),
      named(
        'Traduzir o enunciado',
        '“A mais que B” → A = B + k. “A a menos que B” → A = B − k. “O dobro de” → × 2. “A terça parte” → ÷ 3. “Ficou com 2/5 depois de retirar 120” é uma equação: (fração inicial)×C − 120 = (fração final)×C.',
      ),
      named(
        'Conferência obrigatória',
        'Substitua o resultado no texto. Se a quarta-feira é 1/4 da soma 84, o valor 21 deve satisfazer 21 × 4 = 84. Se um aumento de 20% seguido de desconto de 20% termina em 192, o original 200 deve gerar 240 e depois 192.',
      ),
    ],
    completo: [
      named(
        'Inteiros, frações e decimais',
        'Prefira fração exata a decimal periódico: 1/3 vale 0,333… mas 1/3 de 84 é 28, sem arredondar. MMC no denominador para somar frações: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Número misto: 2 1/4 = 9/4.',
      ),
      named(
        'Exemplo 1 — fração de uma soma',
        '48 ofícios na segunda e 36 na terça; a quarta é 1/4 do total das duas. Passo 1: 48 + 36 = 84. Passo 2: 84 / 4 = 21. Erro típico: 36/4 = 9 (tomar só um dos dias).',
      ),
      named(
        'Exemplo 2 — percentuais sucessivos',
        'Aumentar 20% é × 1,20; reduzir 20% é × 0,80. Em sequência: × 0,96. Se o final é 192, original = 192 / 0,96 = 200. +20% e −20% não se anulam: resta uma perda de 4%.',
      ),
      named(
        'Exemplo 3 — média e um termo conhecido',
        'Média de 5 números = 18 → soma 90. Um deles é 10 → restam 80. Média dos 4 = 20. A média não se “subtrai termo a termo” (18 − 10 = 8 é absurdo).',
      ),
      named(
        'Exemplo 4 — tanque e frações da capacidade',
        '(3/5)C − 120 = (2/5)C → (1/5)C = 120 → C = 600. Conferência: 3/5 de 600 = 360; 360 − 120 = 240 = 2/5 de 600.',
      ),
      named(
        'Sinais e valor absoluto em problemas',
        'Dívida, falta e “abaixo de” podem gerar negativos, mas o pedido costuma ser a quantidade positiva (“quantos litros faltam”). Módulo |x| é a distância à origem: |−7| = 7. Em concursos de nível médio, o foco é o sentido da quantidade, não a teoria de ℝ.',
      ),
    ],
    aprofundamento: [
      named(
        'Razão, taxa e “quantos por cento a mais”',
        'Se A = 120 e B = 100, A é 20% maior que B (20/100), mas B é 16,6…% menor que A (20/120). A base da porcentagem importa. “A está para B assim como 3 está para 5” → A/B = 3/5.',
      ),
      named(
        'Aproximações',
        'Só arredonde se o enunciado pedir. 22/7 ≈ 3,14; 355/113 é melhor, mas a prova de nível médio ou dá π = 3,14, ou π = 22/7, ou deixa a resposta em múltiplo de π.',
      ),
      named(
        'Problema inverso',
        '“Depois de gastar 1/3 restaram 80” → restaram 2/3, logo o total é 80 × 3/2 = 120. Sempre pergunte: o 80 é fração de quê?',
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
        'O que é proposição',
        'Oração declarativa com valor verdadeiro (V) ou falso (F), nunca os dois. Não são proposições: perguntas, ordens, exclamações, frases sem sujeito definido (“x > 3” isolado, sem domínio) e paradoxos. Simples: sem conectivo. Composta: usa ~, ∧, ∨, →, ↔ (e “ou… ou…” exclusivo, raro).',
      ),
      named(
        'Conectivos',
        'Negação ~p (não p): inverte o valor. Conjunção p ∧ q (“e”): V só se ambos V. Disjunção inclusiva p ∨ q (“ou”): F só se ambos F. Condicional p → q (“se p, então q”): F somente na linha VF (p V e q F). Bicondicional p ↔ q (“se e somente se”): V quando p e q têm o mesmo valor.',
      ),
      named(
        'Tabela-verdade da condicional',
        'Linhas para (p, q): VV → V; VF → F; FV → V; FF → V. A condicional não exige que p tenha “causado” q; só proíbe antecedente verdadeiro com consequente falso. “Se 2+2=5, então Itarema é capital” é verdadeira porque o antecedente é falso (detalhe de aprofundamento).',
      ),
      named(
        'Equivalência canônica',
        'p → q ≡ ~p ∨ q ≡ ~q → ~p (contrapositiva). A recíproca q → p e a inversa ~p → ~q NÃO são equivalentes a p → q.',
      ),
    ],
    completo: [
      named(
        'Como montar a tabela',
        'n proposições simples geram 2ⁿ linhas. Para duas, quatro linhas na ordem VV, VF, FV, FF. Calcule colunas auxiliares (~p, ~q) antes da fórmula final. Tautologia: coluna toda V. Contradição: toda F. Contingência: mistura.',
      ),
      named(
        'De Morgan',
        '~(p ∧ q) ≡ ~p ∨ ~q. ~(p ∨ q) ≡ ~p ∧ ~q. Na língua: a negação de “protocola e arquiva” é “não protocola ou não arquiva”. A negação de “protocola ou arquiva” é “não protocola e não arquiva”. Troca o conectivo e nega as duas partes.',
      ),
      named(
        'Negação da condicional',
        '~(p → q) ≡ ~( ~p ∨ q) ≡ p ∧ ~q. “Não é verdade que: se o empenho é regular, então o pagamento é autorizado” ≡ “o empenho é regular e o pagamento não é autorizado”. Nunca negue “se p então q” por “se p então não q”.',
      ),
      named(
        'Exemplo — identificar proposição simples',
        '“Itarema fica no litoral do Ceará” é proposição simples. “O ofício saiu e o processo foi arquivado” é composta. “Feche a janela” não é proposição.',
      ),
      named(
        'Exemplo — equivalência',
        'p → q falsa só em VF. ~p ∨ q também é falsa só quando ~p é F e q é F, isto é, p V e q F. Mesma coluna: equivalentes.',
      ),
      named(
        'Implicação lógica versus condicional',
        'A fórmula p → q é uma proposição (pode ser V ou F conforme a linha). Dizer que p implica q (p ⇒ q) é uma meta-afirmação: p → q é tautologia, ou q se segue de p em todos os casos. Em prova de nível médio, trate “implicação” como a condicional e suas equivalências, salvo se o item falar em argumento válido.',
      ),
    ],
    aprofundamento: [
      named(
        '“Ou” exclusivo',
        'p ⊻ q ≡ (p ∨ q) ∧ ~(p ∧ q): V quando os valores diferem. Só use se o texto disser “ou… ou…, mas não ambos”. O “ou” isolado é inclusivo.',
      ),
      named(
        'Condicional com antecedente falso',
        'FV e FF são V. Por isso “se o protocolo está incompleto, o processo segue” não é a negação de “se está completo, segue”; a negação exige o antecedente verdadeiro e o consequente falso ao mesmo tempo.',
      ),
      named(
        'Dupla negação e equivalências úteis',
        '~~p ≡ p. p ∧ V ≡ p; p ∨ F ≡ p. p → F ≡ ~p. F → p é tautologia. p ↔ q ≡ (p → q) ∧ (q → p) ≡ (p ∧ q) ∨ (~p ∧ ~q).',
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
    prerequisites: ['rlm-proposicoes'],
    sourceIds: FONTES,
    relatedEditalItems: ['ed-rlm-03', 'Diagramas lógicos'],
    relatedLessonIds: ['rlm-proposicoes', 'rlm-conjuntos', 'rlm-probabilidade'],
    questionIds: ['rlm-diagramas-01', 'rlm-diagramas-02', 'rlm-diagramas-03', 'rlm-diagramas-04'],
    essencial: [
      named(
        'Quantificadores no diagrama',
        '“Todo A é B”: círculo A inteiro dentro de B. “Nenhum A é B”: círculos disjuntos. “Algum A é B”: interseção não vazia (pelo menos um ponto na sobreposição). “Algum A não é B”: pelo menos um ponto de A fora de B.',
      ),
      named(
        'O que não se pode concluir',
        'De “todo A é B” e “algum B é C” NÃO segue “algum A é C”: o pedaço de B que é C pode estar fora de A. Desenhe A dentro de B e a mancha de C cortando B sem tocar A — as premissas valem e a conclusão cai.',
      ),
      named(
        'Dois conjuntos numéricos',
        '|A ∪ B| = |A| + |B| − |A ∩ B|. Fora dos dois: total − |A ∪ B|. Só A: |A| − |A ∩ B|. Nunca some |A| + |B| se houver interseção.',
      ),
    ],
    completo: [
      named(
        'Exemplo — dois turnos',
        '40 pessoas, 22 manhã, 18 tarde, 7 ambos. União 22+18−7=33. Nenhum turno: 40−33=7. Só manhã 15; só tarde 11; ambos 7.',
      ),
      named(
        'Exemplo — silogismo encadeado',
        'Todo urgente é conferido. Nenhum conferido fica sem carimbo (= todo conferido tem carimbo). Logo urgente ⊂ conferido ⊂ carimbado, e nenhum urgente fica sem carimbo. A recíproca “todo conferido é urgente” não vale.',
      ),
      named(
        'Três conjuntos',
        '|A ∪ B ∪ C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|. Os pares já incluem o triplo; por isso se subtrai os pares e se devolve o triplo uma vez. Região “só A” = |A| − |A∩B| − |A∩C| + |A∩B∩C|.',
      ),
      named(
        'Exemplo — 120 processos',
        '70, 55, 40; pares 25, 20, 15; triplo 8. União 70+55+40−25−20−15+8 = 113. Fora: 120−113=7. Conferência pelas sete regiões + triplo deve somar 113.',
      ),
    ],
    aprofundamento: [
      named(
        'Euler versus Venn',
        'Euler desenha só as relações que as premissas forçam (A dentro de B, sem forçar C). Venn desenha todas as interseções possíveis e marca vazio/não vazio. Em concurso, o desenho de Euler costuma ser mais rápido para silogismo; Venn, para contagem.',
      ),
      named(
        'Existencial no “todo”',
        'Na lógica moderna, “todo A é B” não garante que exista A. Bancas de nível médio em geral tratam os conjuntos como habitados quando dão números, e no silogismo clássico aceitam “algum A é B” a partir de “todo A é B”. Se o item for qualitativo, prefira só o que o desenho força.',
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
      'Três conjuntos: aplique a fórmula completa e confira a soma das regiões.',
      'Elimine conclusões recíprocas e “algum” indevido.',
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
        'Dias da semana',
        'A semana tem 7 dias. Daqui a n dias: avance n mod 7 a partir de hoje. 10 = 7+3, quarta + 3 = sábado. De uma data a outra no mesmo mês: subtraia os dias do mês (28 − 5 = 23), depois tire o módulo 7.',
      ),
      named(
        'Ano comum e bissexto',
        '365 = 52×7 + 1: o ano comum avança um dia da semana do 1º de janeiro ao 1º do ano seguinte. Bissexto (366 = 52×7 + 2) avança dois, se o intervalo incluir 29 de fevereiro. Século é bissexto se divisível por 400 (2000 sim, 1900 não).',
      ),
      named(
        'Numeração posicional',
        'O numeral d₂d₁d₀ na base b vale d₂b² + d₁b¹ + d₀b⁰. 234₅ = 2×25 + 3×5 + 4 = 69. Dígitos válidos vão de 0 a b−1. Base 2: só 0 e 1; base 10: 0 a 9; base 16: 0–9 e A–F.',
      ),
      named(
        'Razões especiais',
        'Velocidade = distância/tempo. Densidade = massa/volume. Escala 1:n significa 1 unidade no papel = n unidades reais. Escala 1:250 000: 1 cm → 2,5 km; 4 cm → 10 km.',
      ),
    ],
    completo: [
      named(
        'Exemplo — 10 dias',
        'Hoje quarta. Resto 10÷7 = 3. Quarta, quinta, sexta, sábado. Não conte o dia de hoje como “dia 1” do avanço se o texto diz “daqui a 10 dias”.',
      ),
      named(
        'Exemplo — 5 de maio (quinta) até 28 de maio',
        'Avanço de 23 dias. 23÷7 = 3 resto 2. Quinta + 2 = sábado. Armadilha: 28 é múltiplo de 7, mas o intervalo não é 28.',
      ),
      named(
        'Exemplo — base 5',
        '234₅ = 50+15+4 = 69₁₀. Quem lê “duzentos e trinta e quatro” cai na alternativa 234, se ela existir; aqui as iscas são 64 (potências de 2) e 117 (base 7).',
      ),
      named(
        'Exemplo — escala',
        '4 × 250 000 = 1 000 000 cm. 1 km = 100 000 cm, logo 10 km. Atalho: 250 000 cm = 2 500 m = 2,5 km por cm no mapa.',
      ),
    ],
    aprofundamento: [
      named(
        'Do 1º de janeiro ao 31 de dezembro',
        'Em ano não bissexto, 31/12 cai no mesmo dia da semana que 1º/01, porque o avanço é de 364 dias = 52 semanas. O 1º do ano seguinte cai um dia depois.',
      ),
      named(
        'Conversão decimal → outra base',
        'Divisões sucessivas pela base, restos de baixo para cima. 69 ÷ 5 = 13 resto 4; 13 ÷ 5 = 2 resto 3; 2 ÷ 5 = 0 resto 2 → 234₅. Confere a expansão polinomial.',
      ),
      named(
        'Velocidade com tempo misto',
        '2 h 20 min = 7/3 h. A 90 km/h, distância 90 × 7/3 = 210 km. Converta minutos em fração de hora antes de multiplicar.',
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
      'Datas no mês: subtraia, depois mod 7.',
      'Base: expanda em potências; confira dígitos < b.',
      'Escala: multiplique pelo n e converta a unidade pedida.',
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
        'Direta e inversa',
        'Direta: uma cresce, a outra cresce na mesma razão (valor × quantidade). Inversa: uma cresce, a outra diminui, e o produto permanece constante (pessoas × dias para o mesmo serviço; velocidade × tempo para a mesma distância).',
      ),
      named(
        'Regra de três simples',
        'Monte a proporção alinhando a grandeza pedida. Direta: a/b = c/x. Inversa: a/b = x/c (inverta uma razão). Atalho inversa: pessoas₁ × dias₁ = pessoas₂ × dias₂.',
      ),
      named(
        'Porcentagem',
        'p% = p/100. “p% de N” = (p/100)×N. 20% de 450 = 90. Aumento: × (1 + i). Desconto: × (1 − i). Base da porcentagem é o valor sobre o qual se aplica o “de”.',
      ),
      named(
        'Divisão proporcional',
        'Razão 2:3:5 tem 10 partes. Cada parte = total/10. A fatia 3 vale 3 partes. Divisão inversamente proporcional: as partes são proporcionais aos inversos (1/a : 1/b : 1/c).',
      ),
    ],
    completo: [
      named(
        'Exemplo — inversa',
        '6 servidores, 10 dias → 60 servidores-dia. Em 4 dias: n = 60/4 = 15. Se alguém fizer 6/10 = x/4 (direta), obtém 2,4 — absurdo (menos gente para menos dias).',
      ),
      named(
        'Exemplo — rateio 480 em 2:3:5',
        'Partes 10; 48 cada. Fatias 96, 144 e 240. A pergunta “parte 3” vale 144, não 240.',
      ),
      named(
        'Regra de três composta',
        'Mesmo serviço com pessoas, dias e horas/dia. Trabalho = pessoas × dias × horas. 15×10×6 = 900. Com 12 pessoas e 5 h/dia: 12×d×5 = 900 → d = 15. Classifique: mais pessoas → menos dias (inversa); mais horas/dia → menos dias (inversa).',
      ),
      named(
        'Porcentagens sucessivas',
        'Fatores se multiplicam. +15% e −10% sobre 800: 800 × 1,15 × 0,90 = 828. Não some +15 − 10 = +5%.',
      ),
    ],
    aprofundamento: [
      named(
        'Grandeza composta no papel',
        'Regra prática: para achar x (dias), escreva as colunas e inverta as setas das grandezas inversas à incógnita. pessoas 15→12 (inversa, multiplica 15/12); horas 6→5 (inversa, 6/5); dias 10→x. x = 10 × (15/12) × (6/5) = 15.',
      ),
      named(
        'Porcentagem “a mais” versus pontos percentuais',
        'Subir de 20% para 25% é aumento de 5 pontos percentuais, mas aumento relativo de 5/20 = 25%. Leia se o item fala em pontos ou em variação relativa.',
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
      'Simples: monte a proporção ou use produto constante.',
      'Composta: iguale o trabalho em unidades compostas.',
      'Porcentagem: transforme em fator e multiplique; sucessivos não se somam.',
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
        'Operações com conjuntos',
        'A ∪ B: em A ou em B. A ∩ B: em ambos. A − B: em A e não em B. n(A ∪ B) = n(A)+n(B)−n(A ∩ B). Conjunto vazio ∅. Elemento ∈; subconjunto ⊆.',
      ),
      named(
        'Múltiplos e divisores',
        'b divide a (b|a) se a = bq com q inteiro. Divisores de 12: 1, 2, 3, 4, 6, 12. Múltiplos de 12: 0, ±12, ±24, … Em prova, em geral os positivos.',
      ),
      named(
        'Critérios de divisibilidade',
        'Por 2: algarismo das unidades par. Por 4: dois últimos algarismos formam múltiplo de 4. Por 5: unidade 0 ou 5. Por 10: unidade 0. Por 3: soma dos algarismos divisível por 3. Por 9: soma divisível por 9. Por 11: diferença entre soma das posições ímpares e pares (da direita) divisível por 11.',
      ),
      named(
        'MDC e MMC',
        'MDC: maiores expoentes? Não — menores expoentes dos primos comuns. MMC: maiores expoentes de todos os primos que aparecem. Para dois números, MDC(a,b) × MMC(a,b) = |a×b|. Euclides: MDC(a,b) = MDC(b, a mod b).',
      ),
    ],
    completo: [
      named(
        'Exemplo — divisível por 9',
        '2475: 2+4+7+5=18, 18 é múltiplo de 9, logo 2475 também (2475÷9=275). 2222 soma 8: não.',
      ),
      named(
        'Exemplo — MDC(48, 36)',
        '48=2⁴×3, 36=2²×3² → MDC=2²×3=12. Euclides: 48=1×36+12; 36=3×12+0 → 12. MMC(48,36)=2⁴×3²=144. 12×144=1728=48×36.',
      ),
      named(
        'Exemplo — avisos a cada 12 e 18 min',
        'Próximo encontro = MMC(12,18)=36 min. 8h00 + 36 min = 8h36. MDC=6 seria o maior “tijolo” comum, não o encontro.',
      ),
      named(
        'Exemplo — cardinalidade',
        'n(A)=20, n(B)=15, n(A∩B)=8 → n(A∪B)=27. Somar 20+15=35 conta os 8 duas vezes.',
      ),
    ],
    aprofundamento: [
      named(
        'MMC de três números',
        'MMC(12,18,30): 12=2²×3, 18=2×3², 30=2×3×5 → MMC=2²×3²×5=180. Não calcule MMC(MMC(12,18),30) errando a fatoração: o método dos máximos expoentes já cobre os três.',
      ),
      named(
        'Problema de restantes iguais',
        '“O maior número que divide 48 e 36 deixando o mesmo resto” (resto 0 aqui é o MDC). Se o resto r ≠ 0, MDC(a−r, b−r).',
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
      'Fatore em primos; escolha mín/máx de expoentes.',
      'Problema de relógio/aviso: MMC; problema de “maior medida que cabe”: MDC.',
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
        'Primeiro teste: diferenças e razões',
        'Subtraia termos vizinhos. Diferença constante → PA. Divida vizinhos. Razão constante → PG. Se as diferenças formam uma PA (4, 6, 8, 10…), o padrão está na segunda ordem: some a próxima diferença.',
      ),
      named(
        'PA',
        'a_n = a_1 + (n − 1)r. S_n = n/2 × (a_1 + a_n) = n/2 × [2a_1 + (n − 1)r]. O “n − 1” é o número de pulos, não de termos.',
      ),
      named(
        'PG',
        'a_n = a_1 × q^(n−1). Soma (q ≠ 1): S_n = a_1 (q^n − 1)/(q − 1). Se |q| < 1 e n → ∞, S = a_1/(1 − q) (aprofundamento; raro no nível médio).',
      ),
      named(
        'Letras e figuras',
        'Alfabeto: A=1 … Z=26. A, C, F, J, O avança +2, +3, +4, +5 → próximo +6 = U. Figuras: conte lados, pontas, palitos ou giros de 90°.',
      ),
    ],
    completo: [
      named(
        'Exemplo — 8º termo da PA 3, 7, 11, 15',
        'r=4. a_8=3+7×4=31. Quem faz 3+8×4=35 usa n razões.',
      ),
      named(
        'Exemplo — soma de 10 termos, a_1=5, r=3',
        'S_10=5×[10 + 27]=5×37=185. a_10=32; média (5+32)/2=18,5; 10×18,5=185.',
      ),
      named(
        'Exemplo — 6º termo da PG 3, 6, 12, 24',
        'q=2. a_6=3×2^5=96. 3×2^6=192 é o 7º (expoente n, não n−1).',
      ),
      named(
        'Exemplo — 2, 6, 12, 20, 30, ?',
        'Diferenças 4, 6, 8, 10; próxima 12; 30+12=42. Fórmula n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42.',
      ),
    ],
    aprofundamento: [
      named(
        'PA intercalada e dupla',
        '3, 10, 5, 20, 7, 30… são duas PAs em paralelo (ímpares 3,5,7 e pares 10,20,30). Separe as posições.',
      ),
      named(
        'Soma de PG',
        'a_1=2, q=3, n=5: S=2(3^5−1)/(3−1)=2×242/2=242. Termos: 2, 6, 18, 54, 162; soma 242.',
      ),
      named(
        'Palavras',
        'Padrão pode ser número de letras, ordem alfabética da inicial ou anagrama parcial. Conte antes de filosofar.',
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
      'Classifique PA, PG ou segunda ordem.',
      'Aplique a fórmula com (n−1).',
      'Confira com os termos visíveis da lista.',
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
    prerequisites: ['rlm-numerico'],
    sourceIds: FONTES,
    relatedEditalItems: ['ed-rlm-08', 'Equações e sistemas do 1º e 2º graus'],
    relatedLessonIds: ['rlm-numerico', 'rlm-proporcao', 'rlm-medidas'],
    questionIds: ['rlm-equacoes-01', 'rlm-equacoes-02', 'rlm-equacoes-03', 'rlm-equacoes-04'],
    essencial: [
      named(
        '1º grau',
        'ax + b = c → ax = c − b → x = (c − b)/a, a ≠ 0. O que passa de membro muda de sinal. Conferência: substitua x na equação original.',
      ),
      named(
        'Sistema 2×2',
        'Adição: some ou subtraia para eliminar uma incógnita. Substituição: isole uma e plugue na outra. x+y=15 e x−y=3 → 2x=18, x=9, y=6.',
      ),
      named(
        '2º grau',
        'ax² + bx + c = 0, a ≠ 0. Delta Δ = b² − 4ac. x = (−b ± √Δ) / (2a). Se Δ>0, duas raízes reais; Δ=0, uma (dupla); Δ<0, sem raiz real. Soma = −b/a; produto = c/a (Girard).',
      ),
      named(
        'Fatoração rápida',
        'x² − 5x + 6 = (x−2)(x−3). Procure dois números de produto c e soma −b (quando a=1).',
      ),
    ],
    completo: [
      named(
        'Exemplo — 3x+5=20',
        '3x=15, x=5. 3×5+5=20. Alternativa 15 é o 3x, não o x.',
      ),
      named(
        'Exemplo — produto x·y',
        'x=9, y=6, produto 54. Não responda só o x se o item pede o produto.',
      ),
      named(
        'Exemplo — soma das raízes',
        'x² − 5x + 6 = 0: soma 5, produto 6. Resolver é opcional se só pedem a soma.',
      ),
      named(
        'Exemplo — retângulo 40 m de perímetro e 96 m²',
        'ℓ+w=20, ℓw=96. ℓ(20−ℓ)=96 → ℓ²−20ℓ+96=0. Δ=16, ℓ=12 ou 8. Maior lado 12. Quadrado de perímetro 40 teria lado 10 e área 100, isca clássica.',
      ),
    ],
    aprofundamento: [
      named(
        'Idades',
        'Pai = 3 × filho. Em 12 anos, pai = 2 × (filho+12): 3f+12=2f+24 → f=12, pai=36. O “em 12 anos” soma 12 nos dois, não só em um.',
      ),
      named(
        'Sistema impossível ou indeterminado',
        'Retas paralelas (mesmos coeficientes de x,y, termos independentes diferentes): sem solução. Múltiplo exato das duas equações: infinitas. Em prova objetiva, quase sempre há solução única.',
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
      'Resolva pelo caminho mais curto (adição ou Girard).',
      'Descarte raiz negativa se o contexto for comprimento.',
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
        'Princípio aditivo',
        'Opções que se excluem: some. Ir de ônibus (4 linhas) ou de van (3 linhas), sem usar os dois: 4+3=7. Palavra-chave: “ou”.',
      ),
      named(
        'Princípio multiplicativo',
        'Etapas sucessivas independentes: multiplique. 3 crachás e 4 cordões: 3×4=12. Palavra-chave: “e”.',
      ),
      named(
        'Permutação, arranjo, combinação',
        'Permutação P_n = n!: todos entram, ordem importa (fila de 5 → 120). Arranjo A(n,p) = n!/(n−p)!: entram p de n, ordem importa (presidente e relator). Combinação C(n,p) = n!/(p!(n−p)!): entram p de n, ordem NÃO importa (comissão). A(n,p) = C(n,p) × p!.',
      ),
      named(
        'Permutação com repetição',
        'n objetos com grupos repetidos: n! / (k₁! k₂! …). AGENTE: 6 letras, E duas vezes → 6!/2! = 360. Sem dividir, o E da esquerda e o da direita seriam tratados como diferentes.',
      ),
    ],
    completo: [
      named(
        'Exemplo — crachá e cordão',
        '3×4=12. Somar 7 é o aditivo, errado porque cada par é uma combinação de etapas, não uma alternativa exclusiva.',
      ),
      named(
        'Exemplo — fila de 5',
        '5!=120. A(5,2)=20 e A(5,3)=60 são iscas (não preenchem a fila).',
      ),
      named(
        'Exemplo — comissão de 3 entre 8',
        'C(8,3)=(8×7×6)/6=56. A(8,3)=336 conta comissões diferentes por ordem de escolha. Se houvesse presidente, secretário e vogal, aí sim 336.',
      ),
      named(
        'Exemplo — anagrama de AGENTE',
        '6!/2!=360. 720 ignora o E duplicado. Palavra com todas distintas (LIVRO): 5!=120.',
      ),
    ],
    aprofundamento: [
      named(
        'Permutação circular',
        'n pessoas em volta de uma mesa, rotações iguais: (n−1)!. Se reflexos também coincidem (colar, pulseira), (n−1)!/2. Item avançado; só use se o texto falar em círculo ou mesa redonda.',
      ),
      named(
        'C(n,p) = C(n,n−p)',
        'Escolher 3 entre 8 é o mesmo que deixar 5 de fora. C(8,3)=C(8,5)=56. Útil para conferência.',
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
      'Entram todos ou só p? Ordem importa?',
      'Há objeto repetido? Divida pelo fatorial da repetição.',
      'Calcule e, se for combinação, confira C(n,p)=C(n,n−p).',
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
        'Definição clássica',
        'Se os casos são igualmente possíveis, P(A) = n(A)/n(Ω), com 0 ≤ P ≤ 1. Dado: P(face ≥ 5) = 2/6 = 1/3. Urna 5 vermelhas e 3 azuis: P(vermelha)=5/8.',
      ),
      named(
        'União',
        'P(A ∪ B) = P(A)+P(B)−P(A ∩ B). Se A e B são mutuamente exclusivos (disjuntos), a interseção é 0 e as probabilidades se somam. Independência NÃO é a mesma coisa que disjunção.',
      ),
      named(
        'Independência',
        'A e B independentes ⇔ P(A ∩ B) = P(A)P(B). Dois dados: P(ambos pares)= (1/2)×(1/2)=1/4. Com reposição, as retiradas são independentes; sem reposição, não.',
      ),
      named(
        'Condicional',
        'P(A|B) = P(A ∩ B)/P(B), P(B)>0. “Sabendo que B ocorreu, a chance de A”. Sem reposição é condicional disfarçada: depois de sair uma branca, restam 3 em 9.',
      ),
    ],
    completo: [
      named(
        'Exemplo — dado',
        '≥ 5: faces 5 e 6. 2/6=1/3. “Maior que 5” seria só a 6 (1/6). Leia o “ou igual”.',
      ),
      named(
        'Exemplo — união 0,30 / 0,50 / 0,10',
        '0,30+0,50−0,10=0,70. Somar 0,80 ignora a sobreposição. Somar 0,90 adiciona a interseção em vez de tirá-la.',
      ),
      named(
        'Exemplo — duas pastas brancas sem reposição',
        '(4/10)×(3/9)=12/90=2/15. Por combinação: C(4,2)/C(10,2)=6/45=2/15. Com reposição seria (4/10)²=4/25, isca.',
      ),
      named(
        'Complementar',
        'P(Aᶜ)=1−P(A). Útil para “pelo menos um”: 1 − P(nenhum).',
      ),
    ],
    aprofundamento: [
      named(
        'União e independência juntas',
        'Se independentes, P(A ∪ B)= P(A)+P(B)−P(A)P(B). Não use isso se o enunciado já deu P(A ∩ B) numérico — use o número dado.',
      ),
      named(
        'Dois dados, soma 7',
        '6 pares em 36: (1,6)…(6,1). P=6/36=1/6. Soma 8: 5 pares, 5/36. Não são independentes os eventos “soma 7” e “primeiro dado é 3” (condicional = 1/6, coincidência numérica, mas o raciocínio é condicional).',
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
      'União: escreva a fórmula antes de substituir.',
      'Duas retiradas: decida reposição. Sem reposição, multiplique frações atualizadas.',
      'Confira se o resultado está entre 0 e 1 e se a fração está irredutível.',
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
        'Média simples e ponderada',
        'Simples: (x₁+…+x_n)/n. Ponderada: (x₁w₁+…+x_n w_n)/(w₁+…+w_n). Notas 7, 8, 9 com pesos 2, 3, 5: (14+24+45)/10=8,3. A simples seria 8,0 e ignora os pesos.',
      ),
      named(
        'Perímetro e área',
        'Retângulo: P=2(ℓ+w), A=ℓw. Quadrado: P=4ℓ, A=ℓ². Triângulo: P=soma dos lados, A=(base×altura)/2. Trapézio: A=(B+b)h/2. Círculo: C=2πr, A=πr². Não troque área (m²) por perímetro (m).',
      ),
      named(
        'SI — comprimento, área, volume',
        'Comprimento: km, m, cm, mm (×10³, ×10², ×10). Área: 1 m² = 10 000 cm² = 1 000 000 mm²; 1 ha = 10 000 m². Volume: 1 m³ = 1 000 dm³ = 1 000 000 cm³.',
      ),
      named(
        'Massa, capacidade e tempo',
        'Massa: kg (unidade SI), g, t (1 t = 1 000 kg). Capacidade: litro; 1 L = 1 dm³, logo 1 m³ = 1 000 L. Tempo: s (SI), min, h (1 h = 60 min = 3 600 s). 2,4 m³ = 2 400 L.',
      ),
    ],
    completo: [
      named(
        'Exemplo — retângulo 8 m × 5 m',
        'Área 40 m². Perímetro 26 m. A isca 26 aparece se o item pede área.',
      ),
      named(
        'Exemplo — média ponderada 8,3',
        'Multiplique cada nota pelo peso, some, divida pela soma dos pesos. Não some 7+8+9 e divida por 10.',
      ),
      named(
        'Exemplo — 2,4 m³ em litros',
        '× 1 000 = 2 400 L. ×100 = 240 (erro de casa). ×10 000 = 24 000 (confusão com cm² ou hectare).',
      ),
      named(
        'Exemplo — círculo r=7, π=22/7',
        'Área (22/7)×49=154. Circunferência 2×(22/7)×7=44, isca se o pedido for área. Diâmetro 14 não entra na área senão como 2r.',
      ),
    ],
    aprofundamento: [
      named(
        'Hectare e lote',
        'Terreno 80 m × 50 m = 4 000 m² = 0,40 ha. 1 km² = 100 ha = 1 000 000 m².',
      ),
      named(
        'Trapézio',
        'Bases 8 e 12, altura 5: A=(8+12)×5/2=50. Não use base×altura de retângulo numa base só.',
      ),
      named(
        'Prefixos SI úteis',
        'quilo (10³), mega (10⁶), centi (10⁻²), mili (10⁻³). 3,6 km/h = 1 m/s (divida por 3,6).',
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
      'Média: simples ou ponderada? Some pesos no denominador.',
      'Figura: copie a fórmula; substitua; mantenha π se não for dado numérico.',
      'Conversão: conte os zeros (m³→L: três zeros).',
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
