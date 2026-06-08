"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code2, Cpu, MessageSquare, Mail, Languages, Menu, X } from "lucide-react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";
import picSidebar from "../assets/pic.jpg";
import type { AnalyticsEvents } from "@/utils/analyticsContracts";
import { trackAppEvent } from "@/utils/analytics";

interface NavigationProps {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  navigation_click: Omit<AnalyticsEvents["navigation_click"], "target_section">;
}


const navItems = [
  { icon: Home, id: "home" },
  { icon: User, id: "about" },
  { icon: Briefcase, id: "experience" },
  { icon: Code2, id: "projects" },
  { icon: Cpu, id: "skills" },
  { icon: MessageSquare, id: "services" },
  { icon: Mail, id: "contacts" },
];

export default function SidebarMenu({ onNavigate, navigation_click }: NavigationProps) {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].sidebar;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    trackAppEvent('navigation_click', {
      ...navigation_click,
      context: "navigation_sideBar",
      target_section: id
    })

    if (onNavigate) {
      onNavigate(e, `#${id}`);
    }

    const elem = document.getElementById(id);
    if (elem) {
      const offset = window.innerWidth >= 768 ? 0 : 96;

      window.scrollTo({
        top: elem.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };



  const NavigationLinks = () => (
    <nav className="flex-1 space-y-2 overflow-y-auto pr-2 scrollbar-none">
      {navItems.map((item, index) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => scrollToSection(e, item.id)}
          className="group flex items-center gap-4 px-4 py-3 text-[#F5F5F5]/60 hover:text-[#C2FFF5] transition-all duration-300 rounded-xl hover:bg-[#111111]"
        >
          <item.icon size={20} className="group-hover:stroke-[#8A248C] transition-colors" />
          <span className="font-medium tracking-wide text-sm">{t.nav[index]}</span>
          <motion.div
            className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8A248C] opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-20 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#111111]/80 px-6 flex items-center justify-between z-[100] md:hidden w-full">
        <button
          onClick={toggleLang}
          className="p-2.5 rounded-lg bg-[#111111] border border-[#161616] cursor-pointer text-[#F5F5F5]/50 hover:text-[#C2FFF5] transition-colors z-[110]"
          title="Toggle Language"
        >
          <Languages size={18} />
        </button>

        <span className="text-[#F5F5F5] font-bold tracking-widest text-xs uppercase">Ícaro.Dev</span>

        <button
          onClick={toggleMenu}
          className="p-2.5 rounded-lg bg-[#111111] border border-[#161616] text-[#F5F5F5] hover:text-[#248C7B] transition-colors flex items-center justify-center cursor-pointer z-[110]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex w-72 flex-col border-r border-[#111111] bg-[#0B0B0B] p-8 h-screen sticky top-0 flex-shrink-0 z-40"
      >
        <div className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#8A248C] to-[#248C7B] p-[2px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0B0B0B]">
                <img
                  src={picSidebar.src}
                  alt="Ícaro Carneiro"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg bg-[#111111] cursor-pointer text-[#F5F5F5]/50 hover:text-[#C2FFF5] transition-colors"
              title="Toggle Language"
            >
              <Languages size={18} />
            </button>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[#F5F5F5]">Ícaro Carneiro</h1>
          <p className="text-[#248C7B] text-sm font-medium mt-1">{t.role}</p>
        </div>

        <NavigationLinks />

        <div className="pt-8 border-t border-[#111111] mt-auto">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5]/30">
            <span className="w-2 h-2 bg-[#248C7B] rounded-full animate-pulse" />
            {t.status}
          </div>
        </div>
      </motion.aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] md:hidden w-full h-screen"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-[#0B0B0B] border-r border-[#111111] p-8 pt-28 flex flex-col h-full z-[90] md:hidden shadow-2xl"
            >
              <NavigationLinks />

              <div className="pt-8 border-t border-[#111111] mt-auto">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5]/30">
                  <span className="w-2 h-2 bg-[#248C7B] rounded-full animate-pulse" />
                  {t.status}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}