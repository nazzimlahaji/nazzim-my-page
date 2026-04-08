import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";

type ColorMode = "light" | "dark";

interface ThemeContextValue {
  mode: ColorMode;
  toggleMode: () => void;
}

const ThemeCtx = createContext<ThemeContextValue>({
  mode: "light",
  toggleMode: () => {},
});

export function useColorMode() {
  return useContext(ThemeCtx);
}

function getInitialMode(): ColorMode {
  try {
    const stored = localStorage.getItem("colorMode");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      toggleMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
