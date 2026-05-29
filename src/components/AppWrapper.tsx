"use client";

import React, { useEffect, useState, useRef } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import SidebarMenu from "./SideBarMenu";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contacts";
import Footer from "./Footer";

export default function AppWrapper() {
  const [mounted, setMounted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    const mainContainer = mainRef.current;

    if (targetElement && mainContainer) {
      // Como o contêiner <main> tem overflow-y-auto e h-screen, calculamos a posição 
      // baseada no scroll atual mais o topo relativo do elemento, descontando a barra mobile se necessário
      const offset = window.innerWidth >= 768 ? 0 : 80;
      const targetPosition = targetElement.offsetTop - offset;

      mainContainer.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) {
    return <div className="bg-[#0B0B0B] min-h-screen invisible" />;
  }

  return (
    <LanguageProvider>
      {/* Container principal flexível que se adapta de coluna (mobile) para linha (desktop) */}
      <div className="flex flex-col md:flex-row min-h-screen bg-[#0B0B0B] w-full overflow-x-hidden relative">
        
        {/* REMOVIDO O <aside> EXTERNO SUPERFLUO: 
          Agora o componente gerencia internamente sua casca Desktop e Mobile sem ser destruído pelo pai.
        */}
        <SidebarMenu onNavigate={handleScrollToSection} />

        {/* AJUSTE DE RESPONSIVIDADE NO <main>:
          - No mobile: h-auto (deixa o documento ditar a altura) e pt-20 (espaço para a Top Bar fixa).
          - No desktop (md): h-screen e overflow-y-auto para manter o comportamento de scroll independente atual.
        */}
        <main 
          ref={mainRef} 
          className="flex-1 w-full min-h-screen pt-20 md:pt-0 h-auto md:h-screen md:overflow-y-auto transition-all duration-300"
        >
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contacts">
            <Contact />
          </div>
          <div id="footer">
            <Footer onNavigate={handleScrollToSection} />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}