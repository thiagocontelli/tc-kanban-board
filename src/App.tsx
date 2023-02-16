import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { KanbanContextProvider } from "./hooks/useKanban";
import { darkTheme } from "./styles/darkTheme";

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
