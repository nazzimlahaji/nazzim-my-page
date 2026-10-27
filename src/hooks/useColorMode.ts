import { useContext } from "react";
import { ThemeCtx } from "../context/themeCtx";

export function useColorMode() {
  return useContext(ThemeCtx);
}
