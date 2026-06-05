"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, MessageCircle } from "lucide-react";
import { ImLinkedin2 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import type { AnalyticsEvents } from "@/utils/analyticsContracts";
import { trackAppEvent } from "@/utils/analytics";

interface NavigationProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  navigation_click: Omit<AnalyticsEvents["navigation_click"], "target_section">;
}

interface FooterContactItem {
  icon: React.ReactNode;
  href: string;
  labelText: string;
  platform: AnalyticsEvents['social_click']['platform'];
}

const FOOTER_CONTACT_LINKS: FooterContactItem[] = [
  {
    icon: <MessageCircle size={16} />,
    href: "https://wa.me/5517992641230?text=Olá%20Ícaro,%20vi%20seu%20trabalho%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20um%20site.",
    labelText: "(17) 99264-1230",
    platform: "whatsapp"
  },
  {
    icon: <VscGithub size={16} />,
    href: "https://github.com/DevzIcaro",
    labelText: "github.com/DevzIcaro",
    platform: "github"
  },
  {
    icon: <ImLinkedin2 size={16} />,
    href: "https://www.linkedin.com/in/icarocarneiro/",
    labelText: "linkedin.com/in/icarocarneiro/",
    platform: "linkedin"
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:contatodevicaro333@gmail.com",
    labelText: "contatodevicaro333@gmail.com",
    platform: "e-mail"
  }
];

export default function Footer({ onNavigate, navigation_click}: NavigationProps) {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-[#0B0B0B] border-t border-white/5 pt-24 pb-10 overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

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

            <p className="text-lg font-semibold text-[#F5F5F5]/50 leading-relaxed max-w-sm mt-2 text-balance">
              "{t.tagline}{" "}
              <span className="text-[#F5F5F5] border-b border-[#248C7B]/40 pb-0.5 font-bold">
                {t.taglineEmphasis}
              </span>"
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.navTitle}</h4>
            <nav className="flex flex-col gap-3.5">
              {t.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    // 1. Executa o scroll/navegação suave original
                    onNavigate(e, link.href);

                    // 2. Dispara o evento de tracking unificando as propriedades fixas e a rota dinâmica
                    trackAppEvent("navigation_click", {
                      ...navigation_click,
                      target_section: link.href // Ex: "#projects", "#about"
                    });
                  }}
                  className="text-white/60 hover:text-[#248C7B] text-sm transition-colors duration-300 flex items-center gap-2 group w-fit"
                >
                  <span className="h-px w-0 bg-[#248C7B] transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-5 lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.contactTitle}</h4>
            <div className="flex flex-col gap-4">
              {FOOTER_CONTACT_LINKS.map((item, index) => {
                const isEmail = item.platform === "e-mail";

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    onClick={() => {
                      trackAppEvent("social_click", {
                        platform: item.platform,
                        context: "footer_contact_column"
                      });
                    }}
                    className="flex items-center gap-3 group text-white/60 hover:text-white transition-colors duration-200 break-all"
                  >
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                      className: "text-[#248C7B] shrink-0 group-hover:scale-110 transition-transform duration-200"
                    })}
                    
                    <span className={`text-sm ${item.platform === 'whatsapp' ? 'font-medium' : ''}`}>
                      {item.labelText}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white/40 font-semibold text-xs uppercase tracking-widest">{t.specialtyTitle}</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-xs leading-relaxed italic font-sans text-balance">
                "Desenvolvimento escalável focado em ecossistemas Web"
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#248C7B]/40 to-transparent" />
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wide text-white/30">
          <p className="uppercase text-[10px]">
            © {currentYear} Ícaro de Paula Carneiro. {t.rights}
          </p>

          <div className="flex items-center gap-1.5 uppercase text-[10px]">
            <span>{t.developedBy}</span>
            <a
              href="#home"
              onClick={(e) => onNavigate(e, "#home")}
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