"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  // Variantes para animações em cascata (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] as const}
    }
  };

  return (
    <section id="about" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] overflow-hidden">
      {/* Grafismo decorativo fluido em SVG imitando a linha tênue da imagem de referência */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M-10,50 Q25,100 50,50 T110,50"
            fill="none"
            stroke="#24b59d"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Bloco Esquerdo: Header & Título Principal */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <motion.span 
            variants={itemVariants}
            className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#248C7B] mb-6 block"
          >
            {t.subtitle}
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight leading-[1.15] text-balance"
          >
            {t.title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-2">
                {/* Destaca palavras chaves com gradiente/roxo de acordo com a sua paleta */}
                {["escaláveis.", "robustas", "robust", "scalable"].includes(word.toLowerCase().replace(/[^a-zA-Záéíóúç]/g, "")) ? (
                  <span className="text-[#8A248C]">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Bloco Direito: Caixa Destaque de Sentimento */}
        <div className="lg:col-span-5 flex items-start lg:pt-12">
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#F5F5F5]/80 font-light leading-relaxed border-l-2 border-[#8A248C] pl-6"
          >
            {t.highlightBox}
          </motion.p>
        </div>

        {/* Linha Divisória */}
        <div className="lg:col-span-12 my-4 border-t border-[#111111]" />

        {/* Bloco Inferior: Grid de 3 Colunas Assimétricas de Valores (Igual à imagem) */}
        <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 gap-10">
          
          {/* Item 1: Compromisso */}
          <motion.div variants={itemVariants} className="group">
            <h3 className="text-sm font-medium text-[#F5F5F5]/40 group-hover:text-[#248C7B] transition-colors duration-300 mb-2">
              {t.commitmentTitle}
            </h3>
            <p className="text-[#F5F5F5]/70 text-base leading-relaxed font-light">
              {t.commitmentDesc}
            </p>
          </motion.div>

          {/* Item 2: Pessoas */}
          <motion.div variants={itemVariants} className="group">
            <h3 className="text-sm font-medium text-[#F5F5F5]/40 group-hover:text-[#248C7B] transition-colors duration-300 mb-2">
              {t.peopleTitle}
            </h3>
            <p className="text-[#F5F5F5]/70 text-base leading-relaxed font-light">
              {t.peopleDesc}
            </p>
          </motion.div>

          {/* Item 3: Impacto */}
          <motion.div variants={itemVariants} className="group">
            <h3 className="text-sm font-medium text-[#F5F5F5]/40 group-hover:text-[#248C7B] transition-colors duration-300 mb-2">
              {t.impactTitle}
            </h3>
            <p className="text-[#F5F5F5]/70 text-base leading-relaxed font-light">
              {t.impactDesc}
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}