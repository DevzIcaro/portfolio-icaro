"use client";
import React, { createContext, useContext, useState } from 'react';

export type Language = 'pt' | 'en';

const LanguageContext = createContext({
  lang: 'pt' as Language,
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('pt');
  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');
  
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);