import type { ReactNode } from 'react'

const KIND: Record<string, string> = {
  concept: 'Conceito fundamental',
  example: 'Exemplo',
  worked: 'Exemplo resolvido',
  practice: 'Aplicação prática',
  warn: 'Atenção à prova',
  mistake: 'Erro frequente',
  trap: 'Pegadinha',
  law: 'Fonte normativa',
  review: 'Síntese para revisão',
  recall: 'Recuperação de memória',
  feedback: 'Feedback',
}

export function PedBlock({
  kind,
  title,
  children,
}: {
  kind: keyof typeof KIND
  title?: string
  children: ReactNode
}) {
  return (
    <aside className={`ped-block ${kind}`}>
      <p className="ped-kicker">{title ?? KIND[kind]}</p>
      {children}
    </aside>
  )
}
