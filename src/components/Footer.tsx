"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink, MessageCircle } from "lucide-react";
import { ImLinkedin2 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.footer 
      className="bg-[#0B0B0B] border-t border-white/5 pt-24 pb-10 overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* GRID PRINCIPAL DE 12 COLUNAS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* COLUNA DA LOGO E FRASE DE EFEITO (5 Colunas) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tighter text-[#F5F5F5]">
                ÍCARO<span className="text-[#248C7B]">.</span>DEV
              </h2>
              <div className="space-y-0.5">
                <p className="text-[#F5F5F5]/90 font-medium text-sm tracking-wide">{t.description}</p>
                <p className="text-[#248C7B] text-[10px] font-bold uppercase tracking-[0.25em]">
                  {t.subtitle}
                </p>
              </div>
            </div>

            {/* FRASE DE EFEITO PERSONALIZADA */}
            <p className="text-lg font-semibold text-[#F5F5F5]/50 leading-relaxed max-w-sm mt-2 text-balance">
              "{t.tagline}{" "}
              <span className="text-[#F5F5F5] border-b border-[#248C7B]/40 pb-0.5 font-bold">
                {t.taglineEmphasis}
              </span>"
            </p>
          </div>

          {/* COLUNA DE NAVEGAÇÃO DO SEU SITE (2 Colunas) */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.navTitle}</h4>
            <nav className="flex flex-col gap-3.5">
              {t.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/60 hover:text-[#248C7B] text-sm transition-colors duration-300 flex items-center gap-2 group w-fit"
                >
                  <span className="h-px w-0 bg-[#248C7B] transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* COLUNA DE SEUS CONTATOS DIRETOS (3 Colunas) */}
          <div className="md:col-span-5 lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.contactTitle}</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-[#248C7B] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  São Paulo, Brasil
                </span>
              </div>
              
              <a 
                href="https://wa.me/5517992641230" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-200"
              >
                <MessageCircle size={16} className="text-[#248C7B] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">(17) 99264-1230</span>
              </a>
              
              <a 
                href="https://github.com/devzicaro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-200"
              >
                <VscGithub size={16} className="text-[#248C7B] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">github.com/devzicaro</span>
              </a>

              <a 
                href="https://linkedin.com/in/icarodepaula" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-200"
              >
                <ImLinkedin2 size={16} className="text-[#248C7B] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">linkedin.com/in/icarodepaula</span>
              </a>
              
              <a 
                href="mailto:carneiro.icaro@outlook.com" 
                className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-200 break-all"
              >
                <Mail size={16} className="text-[#248C7B] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">carneiro.icaro@outlook.com</span>
              </a>
            </div>
          </div>

          {/* COLUNA DE ESPECIALIDADE TÉCNICA (2 Colunas) */}
          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.specialtyTitle}</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-xs leading-relaxed italic font-sans text-balance">
                "Desenvolvimento escalável focado em ecossistemas Next.js, APIs robustas em NestJS e segurança arquitetural de dados."
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#248C7B]/40 to-transparent" />
            </div>
          </div>

        </div>

        {/* CONTAINER INFERIOR DE DIREITOS E AUTORIA */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wide text-white/30">
          <p className="uppercase text-[10px]">
            © {currentYear} Ícaro de Paula Carneiro. {t.rights}
          </p>

          <div className="flex items-center gap-1.5 uppercase text-[10px]">
            <span>{t.developedBy}</span>
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="text-white/60 hover:text-[#248C7B] transition-colors duration-200 flex items-center gap-1 font-bold tracking-wider"
            >
              Ícaro Carneiro <ExternalLink size={10} className="text-[#248C7B]" />
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}