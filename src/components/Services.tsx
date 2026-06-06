"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Server } from "lucide-react";
import { LuMonitorSmartphone } from "react-icons/lu";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { trackAppEvent } from "@/utils/analytics";

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] as const }
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "lp":
        return <Sparkles size={24} className="text-[#248C7B]" />;
      case "mp":
        return <LuMonitorSmartphone size={24} className="text-[#248C7B]" />;
      case "frontend":
        return <Code2 size={24} className="text-[#248C7B]" />;
      case "backend":
        return <Server size={24} className="text-[#248C7B]" />;
      default:
        return <Code2 size={24} className="text-[#248C7B]" />;
    }
  };

  return (
    <section id="services" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] flex items-center overflow-hidden">

      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-[#248C7B]/15 via-[#248C7B]/04 to-transparent pointer-events-none z-0" />

      <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#248C7B]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight relative pb-4 inline-block">
            {t.title}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#248C7B]" />
          </h2>
          <p className="text-sm text-[#F5F5F5]/40 max-w-xl leading-relaxed mt-4">
            {t.sub}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.items.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-full bg-[#248C7B]/10 border border-[#248C7B]/20 flex items-center justify-center mb-6 group-hover:bg-[#248C7B]/20 group-hover:scale-105 transition-all duration-300 ease-out">
                {getIcon(service.id)}
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F5] tracking-tight mb-3 group-hover:text-[#248C7B] transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-sm text-[#F5F5F5]/50 leading-relaxed font-light mb-4 text-balance">
                {service.desc}
              </p>

              <a
                href="https://wa.me/5517992641230?text=Olá%20Ícaro,%20vi%20seu%20trabalho%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20desenvolvimento%20de%20um%20site."
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();

                  trackAppEvent("social_click", {
                    platform: 'whatsapp',
                    context: "redirect_click_whatsapp"
                  });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#248C7B] hover:text-[#248C7B]/80 transition-colors duration-200 group/link"
              >
                {t.cta}
                <motion.span
                  className="inline-block"
                  variants={{
                    initial: { x: 0 },
                    hover: { x: 4 }
                  }}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                </motion.span>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}