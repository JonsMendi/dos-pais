"use client";

import * as React from "react";
import type { Locale, Translations } from "./types";
import { en } from "./translations/en";
import { pt } from "./translations/pt";
import { de } from "./translations/de";

const STORAGE_KEY = "dos-pais-locale";

const translations: Record<Locale, Translations> = { en, pt, de };

export type LocaleContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = React.createContext<LocaleContextValue>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && saved in translations) {
      React.startTransition(() => setLocaleState(saved));
    }
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
