"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { ImLinkedin2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import type { AnalyticsEvents } from "@/utils/analyticsContracts";
import { trackAppEvent } from "@/utils/analytics";
import { fetchAddressByCep } from "@/utils/cep";

const WHATSAPP_NUMBER = "5517992641230";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  platform: AnalyticsEvents['social_click']['platform'];
}

interface ContactFormState {
  nome: string;
  celular: string;
  email: string;
  cep: string;
  cidade: string;
  mensagem: string;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;
type CepStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM_STATE: ContactFormState = {
  nome: "",
  celular: "",
  email: "",
  cep: "",
  cidade: "",
  mensagem: "",
};

const onlyDigits = (value: string) => value.replace(/\D/g, "");

const formatCep = (digits: string) =>
  digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [cepStatus, setCepStatus] = useState<CepStatus>("idle");

  const SOCIAL_LINKS: SocialLinkItem[] = [
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

  const handleChange = (field: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = onlyDigits(e.target.value).slice(0, 11);
    setForm((prev) => ({ ...prev, celular: digits }));
    setErrors((prev) => ({ ...prev, celular: undefined }));
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = onlyDigits(e.target.value).slice(0, 8);
    setForm((prev) => ({ ...prev, cep: formatCep(digits) }));
    setErrors((prev) => ({ ...prev, cep: undefined }));

    if (digits.length < 8) {
      setCepStatus("idle");
      return;
    }

    setCepStatus("loading");

    try {
      const address = await fetchAddressByCep(digits);
      setForm((prev) => ({ ...prev, cidade: `${address.city} - ${address.state}` }));
      setCepStatus("success");
    } catch {
      setCepStatus("error");
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.nome.trim()) newErrors.nome = t.form.errors.required;

    if (!form.celular) newErrors.celular = t.form.errors.required;
    else if (form.celular.length < 10 || form.celular.length > 11) newErrors.celular = t.form.errors.invalidPhone;

    if (!form.email.trim()) newErrors.email = t.form.errors.required;
    else if (form.email.length > 200) newErrors.email = t.form.errors.maxLength;
    else if (!EMAIL_REGEX.test(form.email)) newErrors.email = t.form.errors.invalidEmail;

    if (form.cep && onlyDigits(form.cep).length !== 8) newErrors.cep = t.form.errors.invalidCep;

    if (!form.mensagem.trim()) newErrors.mensagem = t.form.errors.required;

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      trackAppEvent("contact_form_submit", {
        status: "error",
        form_id: "contact_form",
        context: "contact_form_section",
      });
      return;
    }

    const lines = [
      `${t.form.name}: ${form.nome}`,
      `${t.form.phone}: ${form.celular}`,
      `${t.form.email}: ${form.email}`,
    ];

    if (form.cep) lines.push(`${t.form.cep}: ${form.cep}`);
    if (form.cidade) lines.push(`${t.form.city}: ${form.cidade}`);

    lines.push("", `${t.form.message}:`, form.mensagem);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;

    trackAppEvent("contact_form_submit", {
      status: "success",
      form_id: "contact_form",
      context: "contact_form_section",
    });

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setForm(INITIAL_FORM_STATE);
    setCepStatus("idle");
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-[#0F0F0F] border rounded-xl px-4 py-3 text-sm text-[#248C7B] placeholder-[#F5F5F5]/20 focus:outline-none transition-colors duration-300 ${
      hasError ? "border-red-500/60 focus:border-red-500/60" : "border-[#161616] focus:border-[#248C7B]/50"
    }`;

  return (
    <section id="contact" className="relative min-h-screen py-24 px-8 lg:px-20 bg-[#0B0B0B] flex items-center overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#248C7B]/15 via-[#248C7B]/04 to-transparent pointer-events-none z-0" />

      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#248C7B]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        <motion.div
          className="flex flex-col gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              noValidate
              data-cy="contact-form"
              className="relative overflow-hidden bg-[#0F0F0F] border border-[#248C7B]/25 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_80px_-25px_rgba(36,140,123,0.45)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#248C7B] via-[#4ECDC0] to-[#8A248C]" />
              <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#248C7B]/15 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-[#8A248C]/10 rounded-full blur-[110px] pointer-events-none" />

              <div className="relative z-10 space-y-6">

              <motion.div variants={itemVariants} className="text-center sm:text-left">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#248C7B] uppercase block mb-3">
                  {t.form.sectionTag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight leading-tight">
                  {t.form.sectionTitle} <span className="text-[#248C7B]">{t.form.sectionTitleEmphasis}</span>
                </h3>
                <p className="text-sm text-[#F5F5F5]/50 font-light mt-3 max-w-md mx-auto sm:mx-0">
                  {t.form.sectionDesc}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  required
                  data-cy="contact-form-nome"
                  value={form.nome}
                  onChange={handleChange("nome")}
                  placeholder={t.form.placeholderName}
                  className={inputClass(errors.nome)}
                />
                {errors.nome && <span className="text-xs text-red-400">{errors.nome}</span>}
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    data-cy="contact-form-celular"
                    value={form.celular}
                    onChange={handleCelularChange}
                    placeholder={t.form.placeholderPhone}
                    maxLength={11}
                    className={inputClass(errors.celular)}
                  />
                  {errors.celular && <span className="text-xs text-red-400">{errors.celular}</span>}
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    data-cy="contact-form-email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder={t.form.placeholderEmail}
                    maxLength={200}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                    {t.form.cep} <span className="normal-case text-[#F5F5F5]/20">({t.form.optional})</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      data-cy="contact-form-cep"
                      value={form.cep}
                      onChange={handleCepChange}
                      placeholder={t.form.placeholderCep}
                      maxLength={9}
                      className={inputClass(errors.cep)}
                    />
                    {cepStatus === "loading" && (
                      <Loader2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F5F5F5]/40 animate-spin" />
                    )}
                    {cepStatus === "success" && (
                      <CheckCircle2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#248C7B]" />
                    )}
                    {cepStatus === "error" && (
                      <AlertCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400" />
                    )}
                  </div>
                  {errors.cep && <span className="text-xs text-red-400">{errors.cep}</span>}
                  {!errors.cep && cepStatus === "error" && (
                    <span className="text-xs text-[#F5F5F5]/30">{t.form.cepError}</span>
                  )}
                  {!errors.cep && cepStatus === "loading" && (
                    <span className="text-xs text-[#F5F5F5]/30">{t.form.cepLoading}</span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                    {t.form.city} <span className="normal-case text-[#F5F5F5]/20">({t.form.optional})</span>
                  </label>
                  <input
                    type="text"
                    data-cy="contact-form-cidade"
                    value={form.cidade}
                    onChange={handleChange("cidade")}
                    placeholder={t.form.placeholderCity}
                    maxLength={100}
                    className={inputClass(errors.cidade)}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#248C7B]/80 uppercase tracking-wider">
                    {t.form.message}
                  </label>
                  <span className="text-[10px] text-[#F5F5F5]/20">{form.mensagem.length}/300</span>
                </div>
                <textarea
                  required
                  rows={5}
                  data-cy="contact-form-mensagem"
                  value={form.mensagem}
                  onChange={handleChange("mensagem")}
                  placeholder={t.form.placeholderMsg}
                  maxLength={300}
                  className={`${inputClass(errors.mensagem)} resize-none`}
                />
                {errors.mensagem && <span className="text-xs text-red-400">{errors.mensagem}</span>}
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  data-cy="contact-form-submit"
                  className="w-full sm:w-auto inline-flex items-center cursor-pointer justify-center gap-2 px-6 py-3 rounded-xl bg-[#248C7B] text-[#0B0B0B] text-xs font-bold uppercase tracking-wider hover:bg-[#248C7B]/90 transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  {t.form.submit}
                  <FaWhatsapp size={16} />
                </motion.button>
              </motion.div>

              </div>
            </form>
          </div>

          <div className="w-full bg-[#0F0F0F] border border-[#161616] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#248C7B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#248C7B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#248C7B] uppercase block mb-6">
                {t.tag}
              </span>

              <h2 className="flex flex-col items-center text-3xl lg:text-4xl font-bold text-[#F5F5F5] tracking-tight leading-tight mb-6">
                {t.title} <br />
                <span className="text-[#248C7B]">{t.titleEmphasis}</span>
              </h2>

              <p className="text-smtext-[#F5F5F5]/50 leading-relaxed font-light mb-12 text-balance mx-auto max-w-xl">
                {t.desc}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pb-10">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  data-cy={`social-link-${social.platform}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackAppEvent("social_click", {
                      platform: social.platform,
                      context: "contact_social_section"
                    });
                  }}
                  className="w-10 h-10 rounded-xl bg-[#070707] border border-[#1A1A1A] text-[#F5F5F5]/60 flex items-center justify-center hover:text-[#248C7B] hover:border-[#248C7B]/40 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="relative z-10 mt-auto space-y-8">
              <div className="flex flex-wrap justify-evenly gap-4 border-t border-[#161616] pt-8">
                {t.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl font-bold text-[#248C7B] tracking-tight">{stat.value}</span>
                    <span className="text-[10px] text-[#F5F5F5]/30 uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
