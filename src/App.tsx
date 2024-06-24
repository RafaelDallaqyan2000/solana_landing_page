import "./App.css";
import { Home } from "./pages";
import { ThemeProvider } from "@mui/material";
import theme from "./providers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
