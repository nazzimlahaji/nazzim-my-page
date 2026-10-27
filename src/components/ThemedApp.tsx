import { useMemo } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "../App.tsx";
import { useColorMode } from "../hooks/useColorMode";

export default function ThemedApp() {
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
