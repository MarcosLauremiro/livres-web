import { theme } from "./styles/theme";
import { ResetCss } from "./styles/Reset";
import { ThemeProvider } from "styled-components";
import { RoutesMain } from "./routes/routesMain";
import { GlobalProvider } from "./providers/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <ResetCss />
        <RoutesMain />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
