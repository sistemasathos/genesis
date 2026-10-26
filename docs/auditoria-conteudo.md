# Auditoria de conteúdo — Genesis Itarema

Data: 2026-10-26. Corpus de lições e questões lido no repositório (`src/content/`), não em totais de conversa anterior.

## Totais após esta revisão

| Tipo | Quantidade | Notas |
| --- | --- | --- |
| Lições | 58 | 20 Português, 11 RLM, 11 Informática, 8 Específicos, 8 Estratégias |
| Questões inéditas com gabarito | 217 | 60 PT, 44 RLM, 40 Inf, 47 Esp, 26 Est |
| Extraídas de PDFs locais | 280 | 7 cadernos; prova2 omitida (duplicata); **sem gabarito** |
| Itens obrigatórios do Anexo IV | ≥ 39 | todos com `lessonId` existente |

Critério: qualidade pedagógica, não só número de palavras. Textos de uma ou duas frases em assunto complexo foram classificados como superficiais.

## Legenda

- **Adequada:** explica, distingue, exemplifica e aponta prática suficiente para o objetivo.
- **Adequada com complementações:** cobre o edital, mas ainda ganha com mais casos ou exercícios.
- **Superficial:** definição/resumo curto para assunto que exige aplicação.
- **Incompleta:** falta bloco relevante do programa.
- **Tecnicamente incorreta:** erro de conteúdo.
- **Dependente de fonte externa:** a lição avisa o limite e não inventa a norma local.

Nenhuma lição foi classificada como tecnicamente incorreta nesta passagem. Nenhuma lição obrigatória ficou sem arquivo.

## Português (20) — em geral adequadas com complementações

Lições em `src/content/lessons/portugues.ts`, alinhadas ao Anexo IV (leitura, estruturação, articulação, semântica, figuras, tipologia, funções da linguagem, variação, denotação, coesão, concordância, regência, crase, pontuação, classes, estrutura de palavras, ortografia, acentuação).

Cada uma traz objetivo, essencial/completo/aprofundamento, exemplos e critérios de domínio. Aprofundamento já havia sido expandido em passagem anterior (interpretação, crase, concordância, etc.).

**Pendente opcional:** mais itens de reescritura com texto-base próprio, no formato dos 18 stems com “TEXTO I” do corpus local, sem copiar os textos oficiais.

## Raciocínio lógico-matemático (11) — adequadas com complementações

Lógica, conjuntos, porcentagem, regra de três, sequências, equações, contagem, probabilidade, geometria e medidas. Há exemplos resolvidos com conta visível (ex.: círculo com π = 22/7).

**Pendente opcional:** um segundo exemplo com ajuda reduzida em probabilidade e em sistemas, para completar a sequência “resolvido → guiado → independente” em todos os tópicos, não só nos centrais.

## Informática (11) — adequadas com complementações

Hardware, Windows 11 e Ubuntu lado a lado, Word/Writer, Excel/Calc, PowerPoint/Impress, internet, e-mail, nuvem, segurança. O material insiste em não trocar atalho de um sistema pelo outro.

**Pendente opcional:** capturas ou esquemas dos ícones que o OCR dos PDFs locais perdeu (não reproduzidos aqui para não inventar interface).

## Conhecimentos específicos (8)

| Lição | Classificação | Lacuna restante |
| --- | --- | --- |
| `esp-atos` | **Adequada com complementações** (aprofundada nesta revisão) | Lei 9.784 só didática; rito municipal de Itarema não foi localizado no edital deste cargo |
| `esp-redacao` | Adequada com complementações | MRPR é referência didática, não nomeada no edital |
| `esp-contabilidade` | Adequada com complementações | “Básica” do edital; PCASP/Lei 4.320 ficam no aprofundamento facultativo |
| `esp-arquivo` | Adequada com complementações | Lei 8.159 só contexto |
| `esp-secretaria` | Adequada com complementações | Ainda mais curta que atos; ata e pauta estão cobertas |
| `esp-eventos` | Adequada com complementações | Diárias dependem de norma interna não anexa |
| `esp-qualidade` | Adequada com complementações | Postura e canais; sem checklist local do órgão |
| `esp-publico` | Adequada com complementações | Lei 10.048 citada como contexto de atendimento, não como linha numerada do Anexo IV |

Antes desta revisão, `esp-atos` era o caso típico de resumo (COIFI/PATI em poucos parágrafos). Passou a ter conceito, requisitos, atributos, classificações, extinção, três comparações, três exemplos resolvidos, perguntas de recuperação e limites normativos explícitos.

As demais específicas **não** voltaram ao estado de uma frase, mas continuam mais compactas que Português/RLM. Prioridade cumprida: atos. Próxima prioridade editorial, se houver nova passagem: arquivo + redação oficial com mais modelos.

## Estratégias de prova (8, todas complementares)

Quatro aulas originais (comando, eliminação, chute consciente, tempo) + quatro novas (anatomia, estruturas do corpus, literal vs aplicada, método por disciplina).

Classificação: **adequadas com complementações**. O módulo deixou de ser só lista de dicas: cada estrutura do catálogo tem numerador/denominador e nível de evidência.

## Questões inéditas

Revisão pontual: o banco de estratégias ganhou 10 itens de reconhecimento (`est-anat-*`, `est-rec-*`). Não se misturam com extraídas pendentes.

Itens extraídos (`extracted_pending_key`) **não** entram em treino pontuado nem nas estatísticas de acerto.

## Fontes normativas usadas nas lições

- Edital 01/2026 Itarema (Anexo IV) — limite curricular.
- CF/88 art. 37 — princípios, como contexto.
- Lei 9.784/1999 — só didática, com aviso de que **não** está numerada neste cargo.
- Lei 14.133/2021 — vigência; 8.666 revogada.
- Súmula 473/STF — referência clássica de autotutela, apresentada como jurisprudência de prova, não como item do edital.
- Manual de Redação da Presidência — didático, não nomeado no edital.

Não foi afirmada frequência de cobrança de atos em Itarema: o assunto está no programa; a amostra local de outros órgãos não gera probabilidade da prova de 06/12/2026.
