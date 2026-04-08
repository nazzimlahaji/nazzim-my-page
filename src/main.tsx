import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { ColorModeProvider, useColorMode } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";

function ThemedApp() {
  const { mode } = useColorMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#7c4dff" : "#1565c0",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ColorModeProvider>
          <LanguageProvider>
            <ThemedApp />
          </LanguageProvider>
        </ColorModeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

