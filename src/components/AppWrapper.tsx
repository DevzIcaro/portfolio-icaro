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
  const [menuType, setMenuType] = useState<"desktop" | "mobile">("desktop");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuType("desktop");
      } else {
        setMenuType("mobile");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    const mainContainer = mainRef.current;

    if (targetElement && mainContainer) {
      const offset = menuType === "desktop" ? 0 : 80;
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
      <div className="flex flex-col md:flex-row min-h-screen bg-[#0B0B0B] w-full overflow-x-hidden relative">

        <SidebarMenu onNavigate={handleScrollToSection} navigation_click={{
          context: "sidebar_section",
          menu_type: menuType
        }} />

        <main
          ref={mainRef}
          className="flex-1 w-full min-h-screen pt-20 md:pt-0 h-auto md:h-screen md:overflow-y-auto transition-all duration-300"
        >
          <div id="home">
            <Hero
              onNavigate={handleScrollToSection}
              navigation_click={{
                context: "hero_section",
                menu_type: menuType
              }}
            />
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
            <Footer
              onNavigate={handleScrollToSection}
              navigation_click={{
                context: "footer_section",
                menu_type: menuType
              }}
            />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
}