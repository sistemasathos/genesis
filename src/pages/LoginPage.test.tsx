import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StoreProvider } from '../state/store'
import { LoginPage } from './LoginPage'

test('pede nome de usuário e não pede senha', async () => {
  localStorage.clear()
  render(
    <StoreProvider>
      <LoginPage />
    </StoreProvider>,
  )
  expect(await screen.findByLabelText(/nome de usuário/i)).toBeInTheDocument()
  expect(screen.queryByLabelText(/senha/i)).not.toBeInTheDocument()
  expect(screen.getByText(/não há senha/i)).toBeInTheDocument()
})

test('não entra com nome vazio', async () => {
  localStorage.clear()
  const user = userEvent.setup()
  render(
    <StoreProvider>
      <LoginPage />
    </StoreProvider>,
  )
  await user.click(await screen.findByRole('button', { name: /entrar/i }))
  expect(await screen.findByText(/informe um nome/i)).toBeInTheDocument()
})
