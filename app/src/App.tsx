import { theme } from "./styles/theme";
import { ResetCss } from "./styles/Reset";
import { ThemeProvider } from "styled-components";
import { RoutesMain } from "./routes/routesMain";
import { GlobalProvider } from "./providers/GlobalContext";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthContext";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ResetCss />
          <RoutesMain />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
