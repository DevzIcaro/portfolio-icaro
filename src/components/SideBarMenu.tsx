"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Cpu, MessageSquare, Mail, Languages } from "lucide-react";
import { translations } from "../i18n/translations";
import { useLanguage } from "../context/LanguageContext";

interface NavigationProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const navItems = [
  { icon: Home, id: "home" },
  { icon: User, id: "about" },
  { icon: Briefcase, id: "experience" },
  { icon: Code2, id: "projects" },
  { icon: Cpu, id: "skills" },
  { icon: MessageSquare, id: "services" },
  { icon: Mail, id: "contacts" }, // Ajustado para "contacts" para bater com o id do AppWrapper
];

export default function SidebarMenu({ onNavigate }: NavigationProps) {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].sidebar;

  console.log("Idioma atual:", lang);
  console.log("Objeto de tradução carregado:", t);

  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden md:flex w-72 flex-col border-r border-[#111111] bg-[#0B0B0B] p-8 h-screen sticky top-0"
    >
      {/* Perfil & Toggle de Idioma */}
      <div className="mb-12">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#8A248C] to-[#248C7B] p-[2px]">
            <div className="w-full h-full rounded-2xl bg-[#0B0B0B]" />
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

      {/* Navegação Dinâmica */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => onNavigate(e, `#${item.id}`)} // Passando a string correta com o hash '#'
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

      {/* Status Footer */}
      <div className="pt-8 border-t border-[#111111]">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5]/30">
          <span className="w-2 h-2 bg-[#248C7B] rounded-full animate-pulse" />
          {t.status}
        </div>
      </div>
    </motion.aside>
  );
}