"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Download, Languages } from "lucide-react";
import { useState } from "react";
import { downloadResumePDF } from "@/components/Resume";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contacts = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:arthurbezerra.dev@gmail.com",
    color: "from-blue-500 to-cyan-500",
    label: "arthurbezerra.dev@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/arthur-n8n-dev",
    color: "from-blue-600 to-blue-700",
    label: "linkedin.com/in/arthur-n8n-dev",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/artubss",
    color: "from-gray-700 to-gray-900",
    label: "github.com/artubss",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5584994198787",
    color: "from-green-500 to-emerald-500",
    label: "+55 84 99419-8787",
  },
];

export default function Contact() {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"pt" | "en">("pt");

  const handleDownload = (lang: "pt" | "en") => {
    setSelectedLang(lang);
    setShowLangMenu(false);
    // Chamar função global exposta pelo componente Resume
    if ((window as any).downloadResumePDFWithLang) {
      (window as any).downloadResumePDFWithLang(lang);
    } else {
      // Fallback para função antiga
      downloadResumePDF(lang);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4"
          >
            Vamos Construir Juntos?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-text/70 text-center mb-8 max-w-2xl mx-auto"
          >
            Enquanto outros consideram, eu já estou pensando em como automatizar
            o onboarding da Adapta.
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group p-6 rounded-2xl bg-gradient-to-r ${contact.color} text-white font-semibold flex items-center justify-between hover:shadow-lg hover:shadow-primary/50 transition-all`}
                >
                  <div className="flex items-center space-x-4">
                    <Icon className="w-6 h-6" />
                    <div>
                      <div className="font-bold">{contact.name}</div>
                      <div className="text-sm text-white/80">
                        {contact.label}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Download CV with Language Selector */}
          <motion.div
            variants={fadeInUp}
            className="text-center relative"
          >
            <div className="inline-flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownload(selectedLang)}
                className="px-8 py-4 bg-white/5 border-2 border-primary/50 rounded-lg text-text font-semibold text-lg hover:bg-primary/10 hover:border-primary transition-all flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Baixar Currículo (PDF)</span>
              </motion.button>
              
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="px-4 py-4 bg-white/5 border-2 border-primary/50 rounded-lg text-text font-semibold hover:bg-primary/10 hover:border-primary transition-all"
                >
                  <Languages className="w-5 h-5" />
                </motion.button>
                
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-background border border-primary/30 rounded-lg shadow-lg z-50 overflow-hidden"
                  >
                    <button
                      onClick={() => handleDownload("pt")}
                      className="w-full px-4 py-3 text-left text-text hover:bg-primary/10 transition-colors flex items-center gap-2"
                    >
                      <span>🇧🇷</span>
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => handleDownload("en")}
                      className="w-full px-4 py-3 text-left text-text hover:bg-primary/10 transition-colors flex items-center gap-2 border-t border-primary/10"
                    >
                      <span>🇺🇸</span>
                      <span>English</span>
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-white/10 text-center"
          >
            <p className="text-text/50 text-sm">
              Feito com Next.js, TypeScript, Framer Motion e muita obsessão por
              excelência
            </p>
            <p className="text-text/30 text-xs mt-2">
              © 2025 Arthur Bezerra - Automation Developer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


