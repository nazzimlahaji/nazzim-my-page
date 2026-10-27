import { useContext } from "react";
import { LanguageCtx } from "../context/languageCtx";

export function useLanguage() {
  return useContext(LanguageCtx);
}
