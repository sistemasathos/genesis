# Construção das questões — amostra IDIB local

Documento vivo. Atualize as frações quando novas provas **com identificação** forem importadas. Não use este texto para afirmar o que a prova de Itarema “sempre” fará.

## 1. Corpus

- 8 PDFs em `docs/fontes/prova1.pdf` … `prova8.pdf`.
- Extração em `docs/extracoes/` e `public/questoes-extraidas.json`.
- **7 cadernos distintos, 280 itens.** `prova2` é duplicata de `prova1` (mesmo órgão, cargo, Tipo A e mesmos enunciados; muda o carimbo PCI Concursos) e foi omitida da contagem.
- 40 questões por caderno, alternativas **A–D em 280/280**. Zero alternativa E no texto extraído.
- Gabarito **ausente** nos PDFs. Status: `extracted_pending_key`. Não entram em treino pontuado.

Cadernos:

| Arquivo | Órgão (capa) | Cargo | Itens |
| --- | --- | --- | --- |
| prova1 | Autarquia Educacional de Salgueiro/PE | Agente Administrativo | 40 |
| prova2 | duplicata de prova1 | — | 0 |
| prova3 | Palmácia/CE | Agente Administrativo | 40 |
| prova4 | Câmara de Mamanguape/PB | Agente Administrativo | 40 |
| prova5 | Câmara de Ouricuri/PE | Agente Administrativo | 40 |
| prova6 | Jaguaribe/CE | Agente Administrativo | 40 |
| prova7 | CRF-RJ | Agente Administrativo | 40 (farmácia: fora do programa de Itarema) |
| prova8 | Limoeiro do Norte/CE | Agente Administrativo | 40 |

Itarema (edital 01/2026): 50 questões, A–E, 4 horas, distribuição 14 / 6 / 6 / 24. Formato diferente da amostra.

## 2. Fontes e procedência

**Usadas de fato nesta análise**

- PDFs e TXT locais listados acima.
- Edital de Itarema (`docs/fontes/edital.pdf`), itens 13.4, 13.5, 13.7, 13.9 e Anexo IV.
- Relatório de extração `docs/extracoes/relatorio-provas.md`.

**Consultadas na internet nesta revisão, sem download do caderno**

- Site IDIB: concurso Machado/MG 01/2024 inclui cargo de Agente Administrativo e aponta gabarito oficial definitivo (15/01/2025) em `idib.org.br` / `concursando.idib.org.br`. O PDF do gabarito e o caderno **não foram recuperados neste ambiente**; portanto **não** entram no corpus nem nas frações.
- Câmara de Mamanguape/PB no portal `concurso.idib.org.br` (ID 186) confirma a existência do certame cuja prova local é a prova4. Gabarito definitivo existe no portal; **não** foi baixado aqui, então prova4 permanece sem chave neste banco.
- Maxaranguape/RN no mesmo portal refere-se a **Guarda Municipal**, não a Agente Administrativo — não misturar na amostra deste cargo.

Pontos de partida (`pciconcursos.com.br/provas/idib`, `gabarite.com.br`) não foram varridos arquivo a arquivo nesta sessão. Nada daqueles repositórios foi tratado como gabarito oficial.

## 3. Método

Cada item extraído foi classificado no JSON por disciplina de bloco, presença de romanos, comando negativo, rótulo TEXTO, latinismo-objeto e citação de 8.666. Não se atribuiu gabarito. Não se inferiu letra.

Taxonomia reutilizada em `src/data/questionStructures.ts` (campos: nome, disciplinas, evidência, nível, n, como reconhecer, como resolver, erros previsíveis, aula).

Níveis de evidência:

| Nível | Uso |
| --- | --- |
| Observado | contagem direta sobre as 280 |
| Tendência provisória | recorrência qualitativa em amostra heterogênea |
| Hipótese | interpretação plausível da intenção do elaborador |
| Não demonstrado | afirmação que a amostra não sustenta |

Marcadores múltiplos são permitidos (um item pode ser romano **e** EXCETO).

## 4. Critérios

- Conta-se **item**, não página de PDF.
- Caderno duplicado não entra duas vezes.
- Órgão específico (CRF-RJ, legislação de Jaguaribe) não vira programa de Itarema.
- Extraídas sem chave podem treinar **leitura do enunciado** depois de importadas, nunca acerto oficial.

## 5. Perfil dos enunciados por disciplina (blocos dos cadernos de 40)

Não é a distribuição de Itarema.

- Português: abertura por texto em vários cadernos; 18 stems citam TEXTO I/II/III (prova1 concentra 9).
- RLM: blocos curtos (ex.: prova1 Q16–20; prova3 Q16–20). prova7 e prova8 sem RLM.
- Informática: presente em prova1, 4, 7 e 8; ausente em prova3, 5 e 6.
- Específicos: em todos, tipicamente Q21–40.
- “Outras”: conhecimentos gerais / município (prova5, prova6) — **fora** do Anexo IV de Itarema.

## 6. Formas de introduzir o problema

**Observado**

- Texto-base + itens (rótulo TEXTO ou texto longo sem rótulo, como prova3).
- Definição ou lista de afirmativas I/II/III.
- Situação de expediente (servidor, protocolo, reunião) nos blocos de específicos — tendência, sem contagem fechada de “situação prática”.
- Problema numérico com dados no stem (RLM).
- Vocábulo latino como objeto (8 itens).

O contexto às vezes é indispensável (texto de português; “no Writer”). Em outros casos é enredo (dia da semana no protocolo).

## 7. Tipos de comando

**Observado (280)**

| Forma | n | Nível |
| --- | --- | --- |
| Romanos + combinação | 39 | observado |
| “Assinale se apenas a afirmativa…” | 15 | observado |
| “É correto o que se afirma” | 12 | observado |
| EXCETO / incorreta / NÃO | 24 | observado |
| V/F ou colunas | 5 | observado |

O verbo do comando nem sempre coincide com a operação real: “assinale” pode esconder um julgamento de três proposições.

## 8. Operações cognitivas

- Lembrar definição ou latinismo.
- Julgar proposições e combinar (duas operações).
- Inferir a partir do texto.
- Calcular e conferir unidade.
- Aplicar instituto a um fato de expediente.
- Identificar o intruso (comando negativo).

Não se mediu tempo cognitivo: não há gabarito nem cronometragem de prova.

## 9. Contextualização

Tendência: específicos narram o balcão. Português ancora no texto. Informática nomeia o sistema. Hipótese (não fato): o elaborador testa se o candidato separa dado de enredo.

## 10. Literal versus aplicada

Observado qualitativamente nos inéditos da plataforma e nos stems extraídos de específicos. Não há fração “X% literais” porque isso exigiria classificação manual de 280 itens com chave — e não há chave.

## 11. Mecanismos de complexidade

Documentados: combinação de romanos; comando negativo; texto longo; lei revogada no stem (8.666 em 13); latinismo; órgão específico (CRF). **Não** chamar todo item difícil de pegadinha.

OCR prejudica alguns itens (figuras ausentes, alternativas duplicadas em prova3 Q18 e prova5 Q27). Esses não foram “corrigidos” por invenção.

## 12. Distratores (dimensão complementar)

Sem gabarito oficial, **não** se aponta qual alternativa é a certa nos 280. Distratores ensinados no curso são os das **inéditas** da plataforma e os mecanismos *visíveis no stem*:

- conceito vizinho (COIFI × PATI; licença × autorização);
- excesso (“sempre”, “todo ato”);
- norma revogada (8.666);
- responder a outra pergunta que o comando negativo;
- atalho de outro sistema.

Não se ensina que a mais longa é a certa, nem que absoluto é automaticamente falso, nem letra mais frequente.

## 13. Limitações e vieses

- Amostra pequena, órgãos e anos distintos, cadernos de 40.
- Sem gabarito → sem estatística de acerto, de letra ou de tema “que mais cai”.
- Extração OCR: imagens perdidas.
- Viés de repositório: cadernos que chegaram a `docs/fontes/`, não amostra aleatória da IDIB.
- Machado/MG tem gabarito no site da banca e **não** está neste corpus.

## 14. Exemplos documentados (paráfrase, não reprodução integral)

- Romanos: 39/280; prova1 sozinha tem 10.
- Negativa: prova8 concentra 8 das 24.
- Latinismo-objeto: prova3 Q26 *stricto sensu*, Q34 *sine qua non*; prova6 *bis in idem*, *ad hoc*.
- 8.666: 13 stems; lei revogada; fora do Anexo IV de Itarema.

Itens inéditos de treino: `est-rec-01` … `est-rec-08`, `est-anat-01/02`.

## 15. Hipóteses ainda não confirmadas

- Itarema repetirá a densidade de romanos dos cadernos de 40.
- Itarema repetirá 14 itens de português com o mesmo peso de texto da prova1.
- O elaborador “gasta mais tempo no distrator” — hipótese pedagógica, não medida.
- Qualquer padrão de letras.

## 16. Recomendações de treinamento

1. Treinar em **cinco** alternativas (A–E), mesmo a amostra antiga sendo A–D.
2. Anatomia em sete etapas antes de olhar o “feeling”.
3. Banco de reconhecimento separado do banco de conteúdo.
4. Não estudar 8.666 como ementa; reconhecer o distrator histórico.
5. CRF-RJ e legislação de Jaguaribe: estilo, não programa.
6. Importar gabarito oficial só com PDF da banca; até lá, manter `extracted_pending_key`.

## 17. Como atualizar

1. Importar JSON com `stem`, `choices`, `sourceId`, `origin`.
2. Deduplicar por texto normalizado.
3. Recalcular as frações em `questionStructures.ts` e neste arquivo.
4. Só promover `extracted_pending_key` → `validada` com chave conferida na fonte original.
5. Recolocar n e nível de evidência; se o denominador mudar, a tendência pode cair para hipótese.

Catálogo operacional: `src/data/questionStructures.ts`. Relatório de extração: `docs/extracoes/relatorio-provas.md`.
