import { FormEvent, useState } from 'react'
import { useStore } from '../state/store'

export function LoginPage() {
  const { enter, profiles } = useStore()
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    try {
      await enter(name)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Não foi possível entrar.')
    }
  }

  return (
    <div className="login">
      <h1>Seleção de perfil local</h1>
      <p>
        Esta tela escolhe um perfil gravado neste navegador. Não há senha, e-mail nem autenticação segura:
        quem usar este computador pode abrir o mesmo perfil se souber ou escolher o nome.
      </p>
      <form onSubmit={(e) => void onSubmit(e)}>
        <div className="field">
          <label htmlFor="username">Nome de usuário</label>
          <input id="username" autoComplete="username" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        {error ? <p className="notice danger">{error}</p> : null}
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
      {profiles.length ? (
        <div>
          <h2>Perfis neste navegador</h2>
          {profiles.map((item) => (
            <button key={item.id} className="btn secondary" type="button" onClick={() => void enter(item.username)}>
              {item.displayName}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
