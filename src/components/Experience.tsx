"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const }
    }
  };

  return (
    <section id="experience" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M110,30 Q75,0 50,50 T-10,70"
            fill="none"
            stroke="#b343b5"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
      
        <div className="flex flex-col">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[#248C7B]/10 text-[#248C7B]">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight">{t.profTitle}</h2>
            </div>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-[#F5F5F5]/50 text-sm max-w-md mb-12 leading-relaxed">
            {t.profSub}
          </motion.p>

          <div className="relative border-l border-[#111111] pl-8 ml-6 space-y-12">
            {t.jobs.map((job, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative group">
                
                <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-[#248C7B] bg-[#0B0B0B] group-hover:bg-[#248C7B] transition-colors duration-300" />
                
                <span className="text-xs font-semibold text-[#248C7B] tracking-wider block mb-2">
                  {job.period}
                </span>
                
                <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#248C7B] transition-colors duration-300">
                  {job.role}
                </h3>
                
                <span className="text-sm font-medium text-[#F5F5F5]/40 block mb-4">
                  {job.company}
                </span>
                
                <p className="text-sm text-[#F5F5F5]/60 leading-relaxed max-w-lg mb-4 font-light">
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-[11px] font-medium bg-[#111111] border border-[#1a1a1a] text-[#F5F5F5]/70 px-3 py-1 rounded-full group-hover:border-[#248C7B]/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#8A248C]/10 text-[#8A248C]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#F5F5F5] tracking-tight">{t.eduTitle}</h2>
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-[#F5F5F5]/50 text-sm max-w-md mb-12 leading-relaxed">
              {t.eduSub}
            </motion.p>

            <div className="space-y-6">
              {t.education.map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className={`p-6 rounded-2xl bg-[#0f0f0f] border transition-all duration-300 group ${
                    idx === 0 
                      ? "border-[#248C7B]/30 shadow-lg shadow-[#248C7B]/5" 
                      : "border-[#111111] hover:border-[#8A248C]/20"
                  }`}
                >
                  <div className="flex flex-col items-center text-center gap-3 mb-3 sm:flex-row sm:items-start sm:justify-between sm:text-left sm:gap-4">
                    <span className={`order-1 shrink-0 sm:order-2 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      idx === 0 ? "bg-[#248C7B]/10 text-[#248C7B]" : "bg-[#111111] text-[#F5F5F5]/40"
                    }`}>
                      {edu.badge}
                    </span>
                    <h3 className="order-2 sm:order-1 text-lg font-bold text-[#F5F5F5] group-hover:text-[#248C7B] transition-colors duration-300">
                      {edu.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-medium text-[#F5F5F5]/40 mb-3">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className={idx === 0 ? "text-[#248C7B]" : ""}>{edu.period}</span>
                  </div>
                  
                  <p className="text-xs text-[#F5F5F5]/50 leading-relaxed font-light">
                    {edu.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <motion.h4 variants={itemVariants} className="text-xs font-semibold text-[#F5F5F5]/30 uppercase tracking-[0.2em] mb-6">
              {t.certTitle}
            </motion.h4>

            <div className="space-y-4 border-t border-[#111111] pt-6">
              {t.certs.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants} 
                  className="flex items-start gap-4 p-2 rounded-xl hover:bg-[#111111]/30 transition-colors duration-200"
                >
                  <CheckCircle2 size={16} className="text-[#248C7B] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-[#F5F5F5] leading-tight">{cert.title}</h5>
                    <span className="text-xs text-[#F5F5F5]/40">{cert.org}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}