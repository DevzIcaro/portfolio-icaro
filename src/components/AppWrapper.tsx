"use client";

import React, { useEffect, useState } from "react";
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
            <Footer />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}