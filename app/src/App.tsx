import { theme } from "./styles/theme";
import { ResetCss } from "./styles/Reset";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
