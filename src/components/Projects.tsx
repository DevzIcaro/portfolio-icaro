"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Wrench } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import type { AnalyticsEvents } from "@/utils/analyticsContracts";
import { trackAppEvent } from "@/utils/analytics";

interface ProjectItem {
  id: number;
  title: string;
  category: string[];
  categoryLabel: string;
  year: string;
  image: string | {src: string};
  desc: string;
  techs: string[];
  github: string;
  demo: string;
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: t.categories.all },
    { id: "fullstack", label: t.categories.fullstack },
    { id: "frontend", label: t.categories.frontend },
    { id: "marketing", label: t.categories.marketing },
  ];

  const filteredProjects = useMemo(() => {
    const items = t.items as unknown as ProjectItem[];
    
    if (activeTab === "all") return items;
    
    return items.filter((item) => {
      if (Array.isArray(item.category)) {
        return item.category.includes(activeTab);
      }
      return item.category === activeTab;
    });
  }, [activeTab, t.items]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    const selectionMap: Record<string, AnalyticsEvents['project_selection']['selection']> = {
      all: "todos",
      fullstack: "fullstack",
      frontend: "frontend",
      marketing: "marketing"
    };

    const selectionValue = selectionMap[tabId] || "todos";

    trackAppEvent("project_selection", {
      selection: selectionValue,
      context: "portfolio_projects_section"
    });
  };

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
      transition: { duration: 0.4, ease: "easeOut" } as const
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[450px] bg-gradient-to-t from-[#8A248C]/25 via-[#8A248C]/02 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[500px] bg-[#8A248C]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight mb-2">{t.title}</h2>
          <p className="text-sm text-[#F5F5F5]/40 max-w-md">{t.sub}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-[#111111] pb-6 mb-12">
          {categories.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative text-sm font-medium transition-colors duration-300 pb-2 outline-none ${
                  isSelected ? "text-[#248C7B]" : "text-[#F5F5F5]/40 hover:text-[#F5F5F5]/80"
                }`}
              >
                {tab.label}
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

        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div 
              key="grid-projects"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              exit="exit"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout 
                  key={project.id}
                  variants={cardVariants}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-[#111111] border border-[#1a1a1a] rounded-2xl overflow-hidden mb-6 group-hover:border-[#248C7B]/30 transition-all duration-300">
                    {project.image ? (
                      <img
                        src={typeof project.image === 'object' && 'src' in project.image ? project.image.src : project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#090909] opacity-75" />
                    )}

                    {/* Indicador de card clicável — visível só no mobile, já que lá não existe hover para revelar o overlay abaixo */}
                    <span className="absolute top-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#0B0B0B]/80 border border-[#248C7B]/40 text-[#248C7B] backdrop-blur-sm sm:hidden pointer-events-none">
                      <Eye size={16} />
                    </span>

                    <div className="absolute inset-0 bg-[#0B0B0B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#F5F5F5] hover:bg-[#248C7B] hover:border-[#248C7B] transition-all duration-200"
                        title="Visualizar Projeto"
                      >
                        <Eye size={18} />
                      </a>
                      {/* Link do repositório removido: no mobile o clique enviava direto ao GitHub, quebrando a imersão da navegação. Deixamos apenas o link do site. */}
                      {/* <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#F5F5F5] hover:bg-[#8A248C] hover:border-[#8A248C] transition-all duration-200"
                        title="Ver Repositório"
                      >
                        <ExternalLink size={18} />
                      </a> */}
                    </div>
                  </div>

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

                  <p className="text-sm text-[#F5F5F5]/50 leading-relaxed font-light text-balance mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-medium text-[#F5F5F5]/50 border border-[#1a1a1a] bg-[#111111]/40 px-2.5 py-1 rounded-md tracking-wide hover:border-[#248C7B]/20 hover:text-[#F5F5F5]/80 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full min-h-[350px] border border-dashed border-[#1a1a1a] rounded-2xl bg-[#111111]/20 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto"
            >
              <div className="p-4 rounded-full bg-[#111111] border border-[#1a1a1a] text-[#8A248C] mb-6 relative">
                <Wrench size={24} className="animate-pulse" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#248C7B] rounded-full animate-ping" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#248C7B] rounded-full" />
              </div>
              
              <span className="text-[10px] font-semibold text-[#8A248C] tracking-widest uppercase border border-[#8A248C]/20 bg-[#8A248C]/5 px-3 py-1 rounded-full mb-3">
                {t.emptyState?.badge || "Development"}
              </span>

              <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight mb-3">
                {t.emptyState?.title}
              </h3>

              <p className="text-sm text-[#F5F5F5]/40 leading-relaxed font-light max-w-md text-balance">
                {t.emptyState?.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}