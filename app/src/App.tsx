import { theme } from "./styles/theme";
import { ResetCss } from "./styles/Reset";
import { ThemeProvider } from "styled-components";
import { RoutesMain } from "./routes/routesMain";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <RoutesMain />
    </ThemeProvider>
  );
}

export default App;
