import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import { type Language, type Translations, translations } from "../i18n/translations";

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageCtx = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggleLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageCtx);
}

function getInitialLang(): Language {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "ms") return stored;
  } catch {
    // ignore
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((l) => (l === "en" ? "ms" : "en")),
    }),
    [lang],
  );

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}
