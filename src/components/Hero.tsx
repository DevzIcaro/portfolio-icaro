"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { useLanguage } from "src/context/LanguageContext"; // Importa o hook


const translations = {
  pt: {
    status: "Disponível para novos desafios",
    title: "Ícaro\nCarneiro",
    roles: ["Desenvolvedor Full Stack", "Analista de Sistemas", "Engenheiro de Software", "Entusiasta de Tech"],
    intro: "Especialista em criar experiências digitais escaláveis, unindo arquitetura robusta a interfaces refinadas. Transformando ideias complexas em código de alta performance.",
    cta: "Ver Projetos"
  },
  en: {
    status: "Available for new challenges",
    title: "Ícaro\nCarneiro",
    roles: ["Full Stack Developer", "System Analyst", "Software Engineer", "Tech Enthusiast"],
    intro: "Specializing in creating scalable digital experiences, combining robust architecture with refined interfaces. Transforming complex ideas into high-performance code.",
    cta: "View Projects"
  }
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <section className="relative min-h-screen flex items-center px-8 lg:px-20 bg-[#0B0B0B]">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#8A248C]/20 rounded-full blur-[120px]" />

      <div className="max-w-4xl z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-[#248C7B] font-medium tracking-[0.2em] uppercase text-sm mb-6">
            {t.status}
          </h2>

          <h1 className="text-6xl md:text-8xl font-bold text-[#F5F5F5] tracking-tighter mb-6 whitespace-pre-line">
            {t.title}
          </h1>

          <div className="h-20 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${lang}-${index}`} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl md:text-3xl text-[#F5F5F5]/70 font-light"
              >
                I'm a <span className="text-[#C2FFF5] font-semibold">{t.roles[index]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-[#F5F5F5]/50 max-w-xl mb-10 leading-relaxed">
            {t.intro}
          </p>

          <div className="flex gap-4">
            <button className="bg-[#8A248C] hover:bg-[#8A248C]/90 text-[#F5F5F5] px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-2">
              {t.cta} <ArrowRight size={18} />
            </button>
            {/* Ícones mantêm-se iguais */}
            <div className="flex items-center gap-4 text-[#F5F5F5]/40 ml-4">
               <FaGithub className="hover:text-[#248C7B] cursor-pointer transition-colors" />
               <FaLinkedinIn className="hover:text-[#248C7B] cursor-pointer transition-colors" />
               <Mail className="hover:text-[#248C7B] cursor-pointer transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}