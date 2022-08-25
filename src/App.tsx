import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import { UserContextProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <CartContextProvider>
            <Router />
            <ToastContainer autoClose={1500} />
          </CartContextProvider>
        </UserContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
