/** Tarefa do comando, lida do enunciado. Não revela a letra. */
export function commandTask(stem: string): string | null {
  const text = stem.toLowerCase()
  const negative = /incorreta|incorreto|falsa|falso/.test(text)
  const except = /exceto/.test(text)
  if (negative && except) return 'As duas negações se cancelam: marque a afirmação verdadeira.'
  if (negative || except) return 'Procurar a falsa. A frase que você reconhece como certa é distrator.'
  if (/\bI\b/.test(stem) && /\bII\b/.test(stem)) return 'Julgar I, II e III uma a uma, e só então combinar.'
  if (/de acordo com o texto|segundo o texto|no texto|o trecho/.test(text)) return 'De acordo com o texto: só vale o que o trecho sustenta.'
  if (/respectivamente/.test(text)) return 'Na ordem pedida: o primeiro termo e, depois, o segundo.'
  if (/classifique|tipo de ato|trata-se de|é correto afirmar que o ato/.test(text)) return 'Classificar o caso: separe o fato do conceito que a pergunta cobra.'
  return null
}
