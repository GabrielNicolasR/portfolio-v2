import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const TRANSITION_MS = 250;

/**
 * Inline script injected in <head> that applies the theme *before first paint*,
 * preventing a flash of the wrong theme. Also flags JS availability so that
 * scroll-reveal styles only apply when they can actually be revealed.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}if(t==='dark')d.classList.add('dark');d.style.colorScheme=t;}catch(e){}})();`;

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Enable color transitions only during the switch, so regular interactions stay crisp.
  if (!reduceMotion) {
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), TRANSITION_MS);
  }
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
