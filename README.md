# Genesis Itarema — plataforma de estudos

Plataforma pessoal de preparação para o cargo de **Agente Administrativo** do concurso da Prefeitura Municipal de Itarema/CE, Edital nº 01/2026, banca **IDIB**.

Não promete aprovação. Não inventa probabilidade de classificação. Trabalha com cobertura do edital, acertos reais, pontuação com peso 2,0 e corte de 50% **em cada disciplina**.

## Site publicado

https://sistemasathos.github.io/genesis/

O código está em https://github.com/sistemasathos/genesis. Cada push em `main` publica de novo pelo GitHub Actions. No seu computador, `npm run dev` continua em `http://localhost:5173`.

Os PDFs oficiais e as transcrições integrais em `docs/fontes` e `docs/extracoes/*.txt` ficam só nesta máquina. Não entram no repositório público.

## Como executar

```bash
cd /Users/user/Documents/genesis
npm install
npm run dev
```

Abra o endereço indicado pelo Vite (em geral `http://localhost:5173`). Entre só com um **nome de usuário**: isso escolhe um perfil local neste navegador. Não há senha. Quem usar o mesmo computador pode abrir o mesmo perfil.

Outros comandos:

```bash
npm test          # testes automatizados
npm run build     # compilação de produção
npm run preview   # servir o build
```

## O que o edital confirma (PDF local `docs/fontes/edital.pdf`)

| Item | Valor |
| --- | --- |
| Prova | 06/12/2026, 08h–12h (nível médio/técnico), 4 horas |
| Questões | 50, A–E, uma correta, peso 2,0, total 100 |
| Distribuição | Português 14 (28 pts) · RLM 6 (12) · Informática 6 (12) · Específicos 24 (48) |
| Corte | 50% dos pontos **em cada disciplina** |
| Erro | sem penalização extra (branco/rasura/dupla marca = zero) |
| Vagas do cargo | 2 imediatas (1 ampla + 1 PP) + 1 CR |
| Títulos | não entram na pontuação do nível médio |

A observação de “uma vaga imediata” corresponde à **ampla concorrência**, não ao total de vagas do cargo.

## Conteúdo efetivo

| Tipo | Quantidade | Origem |
| --- | --- | --- |
| Lições | 58 | 20 Português, 11 RLM, 11 Informática, 8 Específicos, 8 Estratégias (módulo complementar) |
| Questões inéditas validadas | 217 | 60 PT, 44 RLM, 40 Informática, 47 Específicos, 26 Estratégias (inclui reconhecimento de estrutura) |
| Questões extraídas de PDFs | 280 em 7 cadernos | `public/questoes-extraidas.json` — **sem gabarito**, não entram no treino pontuado até validação |

As 217 questões de treino são **inéditas da plataforma**, não itens oficiais do IDIB. Extraídas sem gabarito não entram nesse total.

Análise da construção dos enunciados: `docs/analise-idib/construcao-das-questoes.md`. Auditoria pedagógica: `docs/auditoria-conteudo.md`.

## Módulos

- Perfil local (IndexedDB, com cópia de segurança em `localStorage`)
- Biblioteca de lições alinhada ao Anexo IV (nível médio)
- Banco de questões inéditas comentadas (não são itens oficiais do IDIB)
- Treino adaptativo, revisão espaçada, simulados (inclusive o formato 14-6-6-24)
- Estratégias de prova (módulo complementar, fora do edital)
- Estatísticas, planejador, fontes, importação JSON/texto, backup

## Importar novas provas

1. Prefira JSON com `stem`, `choices` A–E e `answerKey`.
2. Texto simples pode ser tentado na tela **Importar**.
3. PDF não é interpretado no navegador (e OCR externo não é acionado daqui).
4. Questão sem gabarito confiável entra como `extracted_pending_key` e **não** vai para treino pontuado até você validar.

Os cadernos em `docs/fontes/prova1.pdf` … `prova8.pdf` são provas anteriores da IDIB (órgãos diversos). **Não há gabarito nesses PDFs.** Por isso não foram lançados como questões oficiais validadas. Na tela **Importar**, use “Carregar extração dos PDFs locais (sem gabarito)” para pré-visualizar as 280 questões extraídas (formato A–D; Itarema usa A–E). `prova2` é duplicata de `prova1`.

## Expandir conteúdo

- Lições: `src/content/lessons/`
- Questões: `src/content/questions/` (use `mcq()` em `factory.ts`)
- Programa: `src/data/syllabus.ts`
- Regras do concurso: `src/data/contest.ts`
- Fontes: `src/data/sources.ts`

IDs de lição devem coincidir com `lessonId` da matriz do edital.

## Segurança e persistência

Login só com nome **não é autenticação**. Os dados ficam neste navegador. Exporte JSON com frequência. Não há nuvem neste projeto.

## Testes executados neste repositório

`npm test`: **22/22 passaram** (Vitest + Testing Library). Cobrem pontuação oficial, revisão espaçada, seletor, backup, importação (JSON e extração sem gabarito), persistência de perfil, login e integridade do catálogo (58 lições, 217 questões inéditas).

`npm run build`: compilação TypeScript + Vite concluída.

Verificação no navegador (fluxo real): perfil `Sistemas` → lição Atos administrativos → treino com gabarito comentado → simulado livre (5 itens, sem gabarito durante a prova, confirmação de brancos, pontuação peso 2,0) → importação da extração local → configurações (IndexedDB, data 06/12/2026).

Não há script de linter no projeto; o `tsc -b` do build é a verificação estática.

## Limitações

- Questões oficiais extraídas dos PDFs locais (280 itens, 7 cadernos distintos; `prova2` duplica `prova1`) aguardam gabarito para validação. Os cadernos usam A–D; Itarema usa A–E.
- Análise de padrão da banca usa essa amostra pequena, sem gabarito: não há distribuição de letras nem “letra mais frequente”.
- Lições de Português, RLM e Informática estão desenvolvidas em profundidade; Conhecimentos Específicos e Estratégias cobrem o programa, mas com texto mais compacto e devem ser ampliadas.
- Lei 9.784/1999 e o Manual de Redação da Presidência são referências didáticas, não linhas nominadas no programa deste cargo.
- Login só com nome não é autenticação. Os dados ficam neste navegador.
- A plataforma não substitui o acompanhamento em [idib.org.br](https://www.idib.org.br) nem o edital.
