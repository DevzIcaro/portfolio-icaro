"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  
  // Estado para gerenciar o filtro de categorias ativo
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: t.categories.all },
    { id: "fullstack", label: t.categories.fullstack },
    { id: "frontend", label: t.categories.frontend },
    { id: "marketing", label: t.categories.marketing },
  ];

  // Filtra dinamicamente a lista de projetos do currículo
  const filteredProjects = activeTab === "all" 
    ? t.items 
    : t.items.filter(item => item.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }  as const
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        
        {/* TÍTULO E SUBTÍTULO */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight mb-2">{t.title}</h2>
          <p className="text-sm text-[#F5F5F5]/40 max-w-md">{t.sub}</p>
        </div>

        {/* NAVEGAÇÃO DE FILTROS (Fidelidade ao design superior da image_cb5cc2.jpg) */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-[#111111] pb-6 mb-12">
          {categories.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative text-sm font-medium transition-colors duration-300 pb-2 outline-none ${
                  isSelected ? "text-[#248C7B]" : "text-[#F5F5F5]/40 hover:text-[#F5F5F5]/80"
                }`}
              >
                {tab.label}
                {/* Indicador animado fluido abaixo da tab ativa via layoutId */}
                {isSelected && (
                  <motion.div
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#248C7B]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* GRID DE PROJETOS COM ANIMATE PRESENCE (Evita quebras nas trocas de estado) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout // Faz o card deslizar elegantemente se o vizinho sumir
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group flex flex-col"
              >
                {/* CONTAINER DA IMAGEM E HOVER EFFECTS */}
                <div className="relative aspect-[16/10] bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden mb-6 group-hover:border-[#248C7B]/30 transition-all duration-300">
                  
                  {/* Mock alternativo escuro/abstrato imitando o layout premium */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#090909] flex items-center justify-center p-8 opacity-75 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                      {project.techs.map((tech, i) => (
                        <span key={i} className="text-[10px] text-[#F5F5F5]/30 border border-[#1a1a1a] bg-[#070707]/60 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Máscara de Overlap Escura ao dar Hover */}
                  <div className="absolute inset-0 bg-[#0B0B0B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <a 
                      href={project.demo}
                      className="p-3 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#F5F5F5] hover:bg-[#248C7B] hover:border-[#248C7B] transition-all duration-200"
                      title="Visualizar Projeto"
                    >
                      <Eye size={18} />
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#F5F5F5] hover:bg-[#8A248C] hover:border-[#8A248C] transition-all duration-200"
                      title="Ver Repositório"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* METADADOS DO CARD (Idêntico à estrutura inferior da image_cb5cc2.jpg) */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#248C7B] tracking-wide uppercase">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-[#F5F5F5]/30 font-medium">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight group-hover:text-[#248C7B] transition-colors duration-200 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[#F5F5F5]/50 leading-relaxed font-light text-balance">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}