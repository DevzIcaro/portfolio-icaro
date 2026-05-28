"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  // Estados locais estruturados para o formulário
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação de pipeline de envio (ex: integração com API Routes / Resend)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.1 } as const
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    // relative e overflow-hidden para conter os efeitos de blur de fundo
    <section id="contact" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] flex items-center overflow-hidden">
      
      {/* 1. GRADIENTE DE BAIXO PARA O TOPO (Igual ao do Services) */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#248C7B]/15 via-[#248C7B]/04 to-transparent pointer-events-none z-0" />
      
      {/* 2. GLOW ADICIONAL DE BACKDROP (Aura centralizada inferior igual ao do Services) */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#248C7B]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Container principal com z-10 garante que o conteúdo fique visível acima dos efeitos visuais */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* COLUNA ESQUERDA: CARD VISUAL & METADADOS */}
          <div className="lg:col-span-5 bg-[#0F0F0F] border border-[#161616] rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Efeito sutil de gradiente ao fundo do card */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#248C7B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#248C7B] uppercase block mb-6">
                {t.tag}
              </span>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F5F5F5] tracking-tight leading-tight mb-6">
                {t.title} <br />
                <span className="text-[#248C7B]">{t.titleEmphasis}</span>
              </h2>
              
              <p className="text-sm text-[#F5F5F5]/50 leading-relaxed font-light mb-12 text-balance">
                {t.desc}
              </p>
            </div>

            <div className="relative z-10 mt-auto space-y-8">
              {/* BLOCO DE MÉTRICAS */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#161616] pt-8">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-bold text-[#248C7B] tracking-tight">{stat.value}</span>
                    <span className="text-[10px] text-[#F5F5F5]/30 uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* FILA DE REDES SOCIAIS */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <VscGithub size={16} />, href: "https://github.com" },
                  { icon: <ImLinkedin2 size={16} />, href: "https://linkedin.com" },
                  { icon: <MessageSquare size={16} />, href: "https://wa.me" },
                  { icon: <Mail size={16} />, href: "mailto:seu@email.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#070707] border border-[#1A1A1A] text-[#F5F5F5]/60 flex items-center justify-center hover:text-[#248C7B] hover:border-[#248C7B]/40 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO DE E-MAIL DINÂMICO */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#F5F5F5]/40 uppercase tracking-wider">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.form.placeholderName}
                  className="w-full bg-[#0F0F0F] border border-[#161616] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/20 focus:border-[#248C7B]/50 focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#F5F5F5]/40 uppercase tracking-wider">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.form.placeholderEmail}
                  className="w-full bg-[#0F0F0F] border border-[#161616] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/20 focus:border-[#248C7B]/50 focus:outline-none transition-colors duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#F5F5F5]/40 uppercase tracking-wider">
                  {t.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.form.placeholderMsg}
                  className="w-full bg-[#0F0F0F] border border-[#161616] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#F5F5F5]/20 focus:border-[#248C7B]/50 focus:outline-none transition-colors duration-300 resize-none"
                />
              </motion.div>

              {/* BOTÃO DE SUBMIT ANIMADO */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#248C7B] text-[#0B0B0B] text-xs font-bold uppercase tracking-wider hover:bg-[#248C7B]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-[#0B0B0B] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {t.form.submit}
                    <Send size={12} />
                  </>
                )}
              </motion.button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}