import type { ReactNode } from 'react'

export function PageHeader({
  title,
  lede,
  actions,
}: {
  title: string
  lede?: string
  actions?: ReactNode
}) {
  return (
    <header className="page-header">
      <div>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
      {actions}
    </header>
  )
}
