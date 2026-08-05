"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations"
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";
import type { AnalyticsEvents } from "@/utils/analyticsContracts";
import { trackAppEvent } from "@/utils/analytics";

interface NavigationProps {
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  navigation_click: Omit<AnalyticsEvents['navigation_click'],"target_section">;
}

interface SocialLinkHero {
  icon: React.ReactNode;
  href: string;
  platform: AnalyticsEvents['social_click']['platform'];
}

const SOCIAL_LINKS_HERO: SocialLinkHero[] = [
  {
    icon: <VscGithub size={16} />,
    href: "https://github.com/DevzIcaro",
    platform: "github",
  },
  {
    icon: <ImLinkedin2 size={16} />,
    href: "https://www.linkedin.com/in/icarocarneiro/",
    platform: "linkedin"
  },
  {
    icon: <MessageSquare size={16} />,
    href: "https://wa.me/5517992641230?text=Olá%20Ícaro",
    platform: "whatsapp"
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:contatodevicaro333@gmail.com",
    platform: "e-mail"
  }
];


export default function Hero({ onNavigate, navigation_click }: NavigationProps) {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [lang]);

  useEffect(() => {
    const rolesCount = t.roles.length;
    if (rolesCount <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rolesCount);
    }, 3000);

    return () => clearInterval(timer);
  }, [lang, t.roles.length]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    trackAppEvent('navigation_click', {
      ...navigation_click,
      context: "navigation_projects_hero",
      target_section: href
    });

    if (onNavigate) {
      onNavigate(e, `#${href}`);
    }

    const elem = document.getElementById(href);
    
    if (elem) {
      const offset = window.innerWidth >= 768 ? 0 : 96;

      window.scrollTo({
        top: elem.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

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
                {lang === 'pt' ? 'Eu sou um' : "I'm a"}{' '}
                <span className="text-[#C2FFF5] font-semibold">{t.roles[index]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-[#F5F5F5]/50 max-w-xl mb-10 leading-relaxed">
            {t.intro}
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <a href="projects" onClick={(e) => scrollToSection(e, "projects") } className="w-full md:w-auto bg-[#8A248C] hover:bg-[#8A248C]/90 text-[#F5F5F5] px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
              {t.cta} <ArrowRight size={18} />
            </a>
            <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 text-[#F5F5F5]/40 md:ml-4">
              {SOCIAL_LINKS_HERO.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackAppEvent("social_click", {
                      platform: social.platform,
                      context: "contact_social_section_hero"
                    });
                  }}
                  className="w-10 h-10 rounded-xl bg-[#070707] border border-[#1A1A1A] text-[#F5F5F5]/60 flex items-center justify-center hover:text-[#248C7B] hover:border-[#248C7B]/40 transition-all duration-300 shrink-0"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}