"use client";

// 1. IMPORTANTE: Adicionado o 'useRef' nos imports do React
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

  // 2. CORREÇÃO: Criando a referência que o TypeScript não encontrava
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
      const targetPosition = targetElement.offsetTop;

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
      <div className="flex min-h-screen bg-[#0B0B0B]">
        {/* Sidebar nativa */}
        <aside className="hidden md:block w-72 h-screen sticky top-0 border-r border-[#111111]">
          <SidebarMenu onNavigate={handleScrollToSection} />
        </aside>

        {/* 3. CORREÇÃO: Atribuindo a referência (ref={mainRef}) à tag <main> */}
        <main ref={mainRef} className="flex-1 h-screen overflow-y-auto">
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