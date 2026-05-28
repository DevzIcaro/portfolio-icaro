"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, Code2, Layers, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  // Variantes de animação tipadas para evitar falhas de compilação (ts(2322))
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] as const }
    }
  };

  // Mapeamento de metadados para estilizar as categorias
  const skillSections = [
    {
      key: "frontend",
      title: t.categories.frontend,
      icon: <Monitor size={18} className="text-[#248C7B]" />,
      skills: t.items.frontend,
      hoverColor: "group-hover:border-[#248C7B]/30"
    },
    {
      key: "backend",
      title: t.categories.backend,
      icon: <Code2 size={18} className="text-[#8A248C]" />,
      skills: t.items.backend,
      hoverColor: "group-hover:border-[#8A248C]/30"
    },
    {
      key: "foundations",
      title: t.categories.foundations,
      icon: <Layers size={18} className="text-[#248C7B]" />,
      skills: t.items.foundations,
      hoverColor: "group-hover:border-[#248C7B]/30"
    },
    {
      key: "soft",
      title: t.categories.soft,
      icon: <Cpu size={18} className="text-[#8A248C]" />,
      skills: t.items.soft,
      hoverColor: "group-hover:border-[#8A248C]/30"
    }
  ];

  return (
    // Adicionado relative para os absolutos de fundo e o overflow-hidden para travar o blur
    <section id="skills" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] overflow-hidden">
      
      {/* 1. GRADIENTE DO TOPO PARA BAIXO (Roxo sumindo no fundo escuro do app) */}
      <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-[#8A248C]/25 via-[#8A248C]/02 to-transparent pointer-events-none z-0" />
      
      {/* 2. GLOW ADICIONAL DE BACKDROP (Aura desfocada para dar profundidade premium no canto superior direito) */}
      <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] bg-[#8A248C]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Container principal com z-10 para ficar por cima do gradiente de fundo */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight mb-2">{t.title}</h2>
          <p className="text-sm text-[#F5F5F5]/40 max-w-xl leading-relaxed">{t.sub}</p>
        </div>

        {/* CONTAINER MAIS EXTERNO */}
        <div className="space-y-16">
          {skillSections.map((section) => (
            <div key={section.key} className="flex flex-col gap-6">
              
              {/* TÍTULO DA CATEGORIA */}
              <div className="flex items-center gap-3 border-b border-[#111111] pb-3">
                {section.icon}
                <h3 className="text-sm font-semibold text-[#F5F5F5]/60 uppercase tracking-widest">
                  {section.title}
                </h3>
              </div>

              {/* GRID DE SKILLS */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {section.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-[#0F0F0F] border border-[#161616] transition-all duration-300 ${section.hoverColor}`}
                  >
                    {/* Elemento Visual Interno do Card */}
                    <div className="flex-shrink-0 p-2 rounded-lg bg-[#070707] group-hover:scale-105 transition-transform duration-300">
                      {section.icon}
                    </div>
                    
                    <span className="text-sm font-medium text-[#F5F5F5]/80 group-hover:text-[#F5F5F5] transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}