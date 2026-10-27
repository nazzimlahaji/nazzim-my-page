import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemedApp from "./components/ThemedApp.tsx";
import { ColorModeProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";

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

