import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import Rotas from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Rotas />
    </ThemeProvider>
  )
}
