import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import { darkTheme } from "./styles/darkTheme";

export function App () {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}
