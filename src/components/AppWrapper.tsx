"use client";

import React, { useEffect, useState } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import SidebarMenu from "./SideBarMenu";
import Hero from "./Hero";

// 1. REMOVEMOS a interface AppWrapperProps antiga daqui

// 2. O componente agora NÃO recebe parâmetros (Props), ficando limpo
export default function AppWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-[#0B0B0B] min-h-screen invisible" />;
  }

  return (
    <LanguageProvider>
      <div className="flex min-h-screen bg-[#0B0B0B]">
        {/* Sidebar nativa */}
        <aside className="hidden md:block w-72 h-screen sticky top-0 border-r border-[#111111]">
          <SidebarMenu />
        </aside>

        {/* Conteúdo principal unificado no mesmo ecossistema React */}
        <main className="flex-1 h-screen overflow-y-auto">
          <div id="hero">
            <Hero />
          </div>
          {/* Seus futuros componentes de página entrarão aqui de forma nativa e segura: */}
          {/* <About /> */}
          {/* <Projects /> */}
        </main>
      </div>
    </LanguageProvider>
  );
}