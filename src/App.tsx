import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { KanbanContextProvider } from "./hooks/useKanban";
import { darkTheme } from "./styles/darkTheme";
import './styles/global.module.css'

export function App () {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <KanbanContextProvider>
        <Header />
        <Main />
      </KanbanContextProvider>
    </ThemeProvider>
  )
}
