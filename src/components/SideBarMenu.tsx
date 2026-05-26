"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Cpu, MessageSquare, Mail } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Sobre", icon: User },
  { name: "Experiência", icon: Briefcase },
  { name: "Projetos", icon: Code2 },
  { name: "Skills", icon: Cpu },
  { name: "Serviços", icon: MessageSquare },
  { name: "Contato", icon: Mail },
];

export default function SidebarMenu() {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden md:flex w-72 flex-col border-r border-[#111111] bg-[#0B0B0B] p-8 h-screen sticky top-0"
    >
      {/* Perfil do Dev */}
      <div className="mb-12">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#8A248C] to-[#248C7B] p-[2px] mb-6">
          <div className="w-full h-full rounded-2xl bg-[#0B0B0B]" /> 
          {/* Insira a foto do Ícaro aqui */}
        </div>
        <h1 className="text-xl font-bold tracking-tight text-[#F5F5F5]">Ícaro Carneiro</h1>
        <p className="text-[#248C7B] text-sm font-medium mt-1">Full Stack Engineer</p>
      </div>

      {/* Navegação */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            className="group flex items-center gap-4 px-4 py-3 text-[#F5F5F5]/60 hover:text-[#C2FFF5] transition-all duration-300 rounded-xl hover:bg-[#111111]"
          >
            <item.icon size={20} className="group-hover:stroke-[#8A248C]" />
            <span className="font-medium tracking-wide text-sm">{item.name}</span>
            <motion.div 
              className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8A248C] opacity-0 group-hover:opacity-100" 
            />
          </a>
        ))}
      </nav>

      {/* Status Footer */}
      <div className="pt-8 border-t border-[#111111]">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F5F5F5]/30">
          <span className="w-2 h-2 bg-[#248C7B] rounded-full animate-pulse" />
          Disponível para Projetos
        </div>
      </div>
    </motion.aside>
  );
}