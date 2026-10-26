import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../state/store'
import { daysUntil, formatDateBR } from '../lib/id'
import { searchAll } from '../lib/search'
import { LESSONS, QUESTIONS } from '../content/catalog'
import { SYLLABUS } from '../data/syllabus'
import { SOURCES } from '../data/sources'
import { db } from '../lib/db'
import { Icon } from '../ui/icons'

const RAIL: { to: string; label: string; icon: string; end?: boolean }[] = [
  { to: '/', label: 'Início', icon: 'home', end: true },
  { to: '/plano', label: 'Plano até a prova', icon: 'flag' },
  { to: '/trilha', label: 'Trilha', icon: 'trail' },
  { to: '/jornada', label: 'Jornada', icon: 'chart' },
  { to: '/questoes', label: 'Questões', icon: 'questions' },
  { to: '/simulados', label: 'Simulados', icon: 'simulado' },
  { to: '/estrategias', label: 'Padrão IDIB', icon: 'idib' },
]

const MORE: [string, string, string][] = [
  ['/flashcards', 'Flashcards', 'cards'],
  ['/estatisticas', 'Estatísticas', 'chart'],
  ['/fontes', 'Fontes', 'sources'],
  ['/importar', 'Importar', 'import'],
  ['/configuracoes', 'Configurações', 'settings'],
]

const TRAIL = ['/trilha', '/edital', '/disciplinas', '/biblioteca', '/licoes', '/jornada']
const PRACTICE = ['/questoes', '/revisoes']

function hitHref(type: string, id: string, query: string): string {
  if (type === 'licao' || type === 'edital') return `/licoes/${id}`
  if (type === 'fonte') return '/fontes'
  return `/busca?q=${encodeURIComponent(query)}`
}

export function Layout() {
  const { profile, settings, leave, reload } = useStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [more, setMore] = useState(false)
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const days = daysUntil(settings.examDate)
  const hits = useMemo(() => searchAll(query, LESSONS, QUESTIONS, SYLLABUS, SOURCES).slice(0, 8), [query])
  const skin = settings.theme === 'escuro' ? 'escuro' : 'claro'
  const trailActive = TRAIL.some((p) => location.pathname.startsWith(p))
  const practiceActive = PRACTICE.some((p) => location.pathname.startsWith(p))

  useEffect(() => {
    document.documentElement.dataset.skin = skin
  }, [skin])

  useEffect(() => {
    setOpen(false)
    setMore(false)
  }, [location.pathname])

  useEffect(() => {
    function onDoc(ev: MouseEvent) {
      if (!searchRef.current?.contains(ev.target as Node)) setFocused(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  async function toggleTheme() {
    const theme = settings.theme === 'escuro' ? 'claro' : 'escuro'
    await db.saveSettings({ ...settings, theme })
    await reload()
  }

  return (
    <div className={open ? 'app menu-open' : 'app'} data-skin={skin} data-contrast={settings.highContrast ? 'high' : 'normal'} style={{ ['--user-scale' as string]: String(settings.fontScale) }}>
      {open ? <button className="nav-backdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} /> : null}
      <aside className="nav" id="navegacao-principal">
        <div className="nav-head">
          <div className="brand" title="Genesis Itarema">G</div>
          <button className="icon-btn drawer-close" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <Icon name="close" size={16} />
          </button>
        </div>
        <div className="nav-links">
          {RAIL.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              aria-label={item.label}
              title={item.label}
              className={({ isActive }) =>
                isActive
                || (item.to === '/trilha' && trailActive && !location.pathname.startsWith('/jornada'))
                || (item.to === '/questoes' && practiceActive)
                  ? 'active'
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              <Icon name={item.icon} />
              <span className="drawer-label">{item.label}</span>
            </NavLink>
          ))}
          <div className="drawer-extra">
            {MORE.filter(([to]) => to !== '/configuracoes').map(([to, label, icon]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                <Icon name={icon} />
                <span className="drawer-label">{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="nav-foot">
          <button className="nav-link more-btn" type="button" aria-label="Mais" title="Mais" onClick={() => setMore((v) => !v)}>
            <Icon name="more" />
          </button>
          {more ? (
            <div className="more-pop">
              {MORE.map(([to, label, icon]) => (
                <NavLink key={to} to={to} onClick={() => { setMore(false); setOpen(false) }}>
                  <Icon name={icon} size={16} /> {label}
                </NavLink>
              ))}
            </div>
          ) : null}
          <NavLink className="settings-link" to="/configuracoes" aria-label="Configurações" title="Configurações" onClick={() => setOpen(false)}>
            <Icon name="settings" />
            <span className="drawer-label">Configurações</span>
          </NavLink>
        </div>
      </aside>
      <div className="workspace">
      <header className="topbar">
        <button className="btn secondary mobile-toggle" type="button" onClick={() => setOpen((v) => !v)}>{open ? 'Fechar' : 'Menu'}</button>
        <div className="search-wrap" ref={searchRef}>
          <input
            type="search"
            placeholder="Buscar lição, questão, edital…"
            aria-label="Busca global"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setFocused(true) }}
            onFocus={() => setFocused(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim().length >= 2) {
                navigate(`/busca?q=${encodeURIComponent(query.trim())}`)
                setFocused(false)
              }
            }}
          />
          {focused && query.trim().length >= 2 ? (
            <div className="search-drop">
              {hits.length === 0 ? <p className="muted" style={{ padding: '0.7rem 0.9rem' }}>Nada encontrado para “{query}”.</p> : null}
              {hits.map((hit) => (
                <a key={`${hit.type}-${hit.id}`} href={hitHref(hit.type, hit.id, query)} onClick={(e) => { e.preventDefault(); navigate(hitHref(hit.type, hit.id, query)); setFocused(false); setQuery('') }}>
                  <span className="meta">{hit.type}</span>
                  <div>{hit.title}</div>
                </a>
              ))}
              <a href={`/busca?q=${encodeURIComponent(query)}`} onClick={(e) => { e.preventDefault(); navigate(`/busca?q=${encodeURIComponent(query)}`); setFocused(false) }}>Ver todos os resultados</a>
            </div>
          ) : null}
        </div>
        <div className="topbar-meta">
          <span className="exam-pill"><span>{days} dias</span><span className="exam-date"> · {formatDateBR(settings.examDate)}</span></span>
          <button className="icon-btn" type="button" aria-label="Alternar tema" onClick={() => void toggleTheme()}>
            <Icon name={skin === 'escuro' ? 'sun' : 'moon'} size={16} />
          </button>
          <button className="icon-btn" type="button" aria-label="Perfil" title={profile?.displayName} onClick={() => { if (window.confirm('Trocar de perfil?')) { leave(); navigate('/') } }}>
            <Icon name="user" size={16} />
          </button>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      </div>
    </div>
  )
}
