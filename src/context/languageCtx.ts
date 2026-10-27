import { createContext } from "react";
import { type Language, type Translations, translations } from "../i18n/translations";

export interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

export const LanguageCtx = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggleLang: () => {},
});
