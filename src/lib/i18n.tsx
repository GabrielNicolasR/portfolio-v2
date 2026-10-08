import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionary, type UIKey } from "@/i18n/dictionary";
import type { Language, Localized } from "@/content/profile";

export type { Language };

const STORAGE_KEY = "lang";
const DEFAULT_LANGUAGE: Language = "pt";
const HTML_LANG: Record<Language, string> = { pt: "pt-BR", en: "en" };

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Translate a UI label. */
  t: (key: UIKey) => string;
  /** Resolve a localized content value. */
  l: <T>(value: Localized<T>) => T;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Server and first client render always use the default language to keep
  // hydration deterministic; the persisted preference is applied right after mount.
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => dictionary[language][key],
      l: (v) => v[language],
    }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}
