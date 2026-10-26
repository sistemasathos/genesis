import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DashboardPage } from './pages/DashboardPage'
import { FlashcardsPage } from './pages/FlashcardsPage'
import { ImportPage } from './pages/ImportPage'
import { LessonPage } from './pages/LessonPage'
import { LoginPage } from './pages/LoginPage'
import { QuestionsPage } from './pages/QuestionsPage'
import { SearchPage } from './pages/SearchPage'
import { SettingsPage } from './pages/SettingsPage'
import { SimuladoRunPage } from './pages/SimuladoRunPage'
import { SimuladosPage } from './pages/SimuladosPage'
import { SourcesPage } from './pages/SourcesPage'
import { StatsPage } from './pages/StatsPage'
import { StrategiesPage } from './pages/StrategiesPage'
import { JourneyPage } from './pages/JourneyPage'
import { PlanPage } from './pages/PlanPage'
import { TrailPage } from './pages/TrailPage'
import { StoreProvider, useStore } from './state/store'

function Gate() {
  const { ready, profile } = useStore()
  if (!ready) return <p style={{ padding: '2rem' }}>Carregando plataforma…</p>
  if (!profile) return <LoginPage />
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/plano" element={<PlanPage />} />
        <Route path="/jornada" element={<JourneyPage />} />
        <Route path="/trilha" element={<TrailPage />} />
        <Route path="/edital" element={<TrailPage />} />
        <Route path="/disciplinas" element={<TrailPage />} />
        <Route path="/biblioteca" element={<TrailPage />} />
        <Route path="/licoes/:id" element={<LessonPage />} />
        <Route path="/questoes" element={<QuestionsPage />} />
        <Route path="/revisoes" element={<QuestionsPage />} />
        <Route path="/simulados" element={<SimuladosPage />} />
        <Route path="/simulados/:id" element={<SimuladoRunPage />} />
        <Route path="/estrategias" element={<StrategiesPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/estatisticas" element={<StatsPage />} />
        <Route path="/fontes" element={<SourcesPage />} />
        <Route path="/importar" element={<ImportPage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />
        <Route path="/busca" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
        <Gate />
      </BrowserRouter>
    </StoreProvider>
  )
}
