"use client";
import { trackAppEvent } from '@/utils/analytics';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  toggleLang: () => {}
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language;
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('lang', next);
      
      trackAppEvent("language_change", {
        current_lang: next,
        previous_lang: prev,
        context: "sidebar_language_toggle"
      })
      
      return next;
    });


  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context || context.toggleLang.toString() === '() => {}') {
    throw new Error("useLanguage deve ser usado obrigatoriamente dentro de um LanguageProvider real.");
  }
  return context;
};