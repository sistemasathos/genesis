# Relatório de extração — provas IDIB (Agente Administrativo)

Fonte: textos já extraídos em `docs/extracoes/prova*.txt`. Gabaritos **não** estavam nos PDFs; todas as chaves ficaram `null` (`extracted_pending_key`). Ano do concurso **não** aparece no cabeçalho de nenhum caderno (`year: null`).

Arquivo gerado: `questoes-extraidas.json` (7 exames, **280** questões).

## Identificação e contagem

| Arquivo | Órgão (como no caderno) | Cargo | Tipo | Questões extraídas | Gabarito no PDF |
|---|---|---|---|---|---|
| prova1.txt | Autarquia Educacional de Salgueiro – PE | Agente Administrativo | A | 40/40 (A–D) | Não |
| prova2.txt | *duplicata de prova1* | — | — | 0 (omitida) | — |
| prova3.txt | Governo Municipal de Palmácia - CE | Agente Administrativo | B | 40/40 (A–D) | Não (cita www.idib.org.br) |
| prova4.txt | Câmara Municipal de Mamanguape - PB | Agente Administrativo | não marcado | 40/40 (A–D) | Não |
| prova5.txt | Câmara Municipal de Ouricuri/PE | Agente Administrativo | A | 40/40 (A–D) | Não |
| prova6.txt | Prefeitura Municipal de Jaguaribe/CE | Agente Administrativo | não marcado | 40/40 (A–D) | Não |
| prova7.txt | Conselho Regional de Farmácia do Estado do Rio de Janeiro | Agente Administrativo | não marcado | 40/40 (A–D) | Não (divulgação em 24h no site IDIB) |
| prova8.txt | Prefeitura Municipal de Limoeiro do Norte | Agente Administrativo | não marcado | 40/40 (A–D) | Não (divulgação em 24h no site IDIB) |

`prova2.txt` é o mesmo caderno de `prova1.txt` (mesmo órgão, cargo, Tipo A, mesmos enunciados). Só muda o carimbo PCI Concursos.

A banca **IDIB** está escrita no próprio caderno só em prova3, prova7 e prova8 (`www.idib.org.br`). Nos demais o campo `board` segue a identificação da tarefa, não um carimbo no PDF.

## Disciplinas observadas (blocos do caderno)

- prova1: Português 1–10; Informática 11–15; RLM 16–20; Específicos 21–40
- prova3: Português 1–15; RLM 16–20; Específicos 21–40 (sem Informática)
- prova4: Português 1–10; Informática 11–16; RLM 17–20; Específicos 21–40
- prova5: Português 1–10; Conhecimentos Gerais 11–20 (`outras`); Específicos 21–40
- prova6: Português 1–10; Conhecimentos acerca de Jaguaribe 11–20 (`outras`); Específicos 21–40
- prova7: Português 1–10; Informática 11–20; Específicos 21–40 (sem RLM)
- prova8: Português 1–14; Informática 15–20; Específicos 21–40 (sem RLM)

## Padrões de estilo IDIB efetivamente observados

Contagens sobre as **280** questões extraídas (não generalizações a partir de um item):

1. **Quatro alternativas A–D, nunca E.** 280/280 questões têm exatamente A–D. Zero alternativa E no texto, inclusive no caderno Tipo B (prova3).
2. **Caderno anunciado com 40 questões.** Os 7 cadernos trazem a rubrica “Contém 40 QUESTÕES de múltipla escolha, numeradas de 01 a 40” (ou “1 a 40” em prova3).
3. **Itens romanos (I, II, III…) no enunciado**, depois escolha de combinação: **39** questões (prova1: 10; prova3: 1; prova4: 8; prova5: 6; prova6: 7; prova7: 4; prova8: 3).
4. **Comando “Assinale” + alternativas do tipo “se apenas a afirmativa I estiver correta / I e II / nenhuma”:** **15** questões (prova1: 6; prova5: 2; prova6: 7). Concentrado em Específicos das provas 1, 5 e 6.
5. **Comando “É correto o que se afirma/apresenta”** (variação da combinação de afirmativas): **12** questões (prova1: 3; prova4: 8; prova5: 1). A prova4 usa de forma quase sistemática em Específicos (“apenas em I”, “em nenhuma das afirmativas”).
6. **Questão “EXCETO / incorreta / NÃO”:** **24** questões (prova1: 3; prova3: 2; prova4: 2; prova5: 3; prova6: 2; prova7: 4; prova8: 8). Mais frequente em prova8.
7. **Lei 8.666/93 (ou 8666/93) no enunciado:** **13** questões (prova3: 1; prova4: 2; prova5: 0 no stem; prova6: 3; prova7: 3; prova8: 4).
8. **Latinismos como objeto da questão** (não meras citações incidentais): **8** questões — prova3 Q26 *stricto sensu*, Q34 *sine qua non*, Q36 *ipsis litteris*, Q37 *data venia*; prova4 Q31 *caput*; prova6 Q24 *bis in idem*, Q25 (*ad causam*, *vacatio legis*, *ad hoc*, *in totum*), Q26 *interna corporis*.
9. **V/F ou associação de colunas:** **5** questões (prova5 Q1, Q37, Q38, Q40; prova6 Q18).
10. **Referência a TEXTO I/II/III no stem:** **18** questões (prova1: 9; prova4: 1; prova5: 4; prova6: 3; prova8: 1). prova3 tem texto-base longo, mas os stems em geral não usam o rótulo “TEXTO I”.
11. **Capa IDIB “padrão PCI”:** instruções de cartão-resposta, 3 horas (prova3: 4 horas), últimos 3 candidatos, vedação de levar o caderno. prova3, prova7 e prova8 ainda mandam o gabarito para `www.idib.org.br`.

## O que não saiu limpo

- Imagens ausentes no TXT: charges (prova1 Q6–Q10; prova6 Q7), anúncio (prova1 Q10), tirinha (prova5 Q7), infográfico (prova5 Q18), pintura (prova5 Q20), brasão (prova6 Q13), mapas (prova6 Q17 e Q19), esquema (prova3 Q39), ícone Windows (prova4 Q15), paleta BrOffice (prova8 Q17). Stems e alternativas textuais foram extraídos; a figura em si não.
- OCR com alternativas duplicadas (não corrigidas por invenção): prova3 Q18 B=D `10√2`; prova5 Q27 B=C (mesmo texto de “preço certo e total”).
- prova1 Q17/Q18: tabela-verdade e alfamético vinham depois das alternativas no OCR; foram recolocados no stem.
- prova3 Q20: chaves dos conjuntos A e B não aparecem no OCR.
- Nenhum gabarito oficial foi inventado.
