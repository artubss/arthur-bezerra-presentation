"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Workflow,
  Database,
  MessageSquare,
  Bot,
  X,
} from "lucide-react";

// Mapeamento de tecnologias para imagens
const techImages: Record<string, string> = {
  n8n: "/images/OIP (4).jpg",
  Supabase: "/images/image.png",
  PostgreSQL: "/images/png-transparent-postgresql-plain-wordmark-logo-icon.png",
  WhatsApp: "/images/pngtree-whatsapp-icon-png-image_9015283.png",
  "Node.js": "/images/image2.png",
  Docker: "/images/image3.png",
  Redis: "/images/download (1).png",
  BullMQ: "/images/image4.png",
  "Next.js": "/images/image_processing20210620-5261-1izw9zf.png",
  React:
    "/images/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png",
  Firebase: "/images/firebase-logo-png-firebase-google-icon-512x512.png",
  LangChain: "/images/langchain-white-logo-png_seeklogo-611657.png",
  AWS: "/images/aw7519fe58-aws-logo-file-amazon-web-services-logo-svg-wikimedia-commons.png",
  GitHub: "/images/OIP (3).jpg",
  "Google Tag Manager": "/images/google-tag-manager.png",
  "Looker Studio": "/images/looker-studio-logo-png_seeklogo-617989.png",
};

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
      staggerChildren: 0.2,
    },
  },
};

const projects = [
  {
    title: "Sistema de Automação para Clínica",
    description:
      "n8n + Supabase + WhatsApp API. Agendamentos automatizados, agentes de IA para triagem. Sistema 24/7 atendendo centenas de pacientes.",
    tags: ["n8n", "Supabase", "WhatsApp", "PostgreSQL"],
    icon: Workflow,
    gradient: "from-blue-500 to-cyan-500",
    stats: "24/7 | 100+ pacientes/dia",
    image: "/images/image11.png",
  },
  {
    title: "Automação de Conteúdo com IA",
    description:
      "RSS → Blog → LinkedIn automatizado. Gemini AI + n8n + PostgreSQL. Publicação multi-canal sincronizada.",
    tags: ["n8n", "PostgreSQL", "LangChain"],
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
    stats: "Multi-canal | Auto-publish",
    image: "/images/image8.png",
  },
  {
    title: "E-commerce WhatsApp - Loja Completa",
    description:
      "Next.js + Node.js + Uazapi. Loja completa que migrou do WhatsApp para web. Gemini AI para suporte, emissão de notas fiscais, autenticação, interfaces cliente/admin, Supabase e GitHub Storage.",
    tags: ["Next.js", "Node.js", "Uazapi", "Gemini AI", "Supabase", "GitHub"],
    icon: MessageSquare,
    gradient: "from-orange-500 to-red-500",
    stats: "E-commerce completo | Multi-interface",
    image: "/images/image9.png",
    images: ["/images/image9.png", "/images/image10.png"],
  },
  {
    title: "Integrações WhatsApp em Escala",
    description:
      "Evolution API + n8n. Múltiplas instâncias, webhooks, filas com BullMQ, retry logic. Uptime 99.9%.",
    tags: ["n8n", "Docker", "Redis", "BullMQ"],
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-500",
    stats: "99.9% uptime | Escalável",
    image: null,
  },
];

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4"
          >
            Sistemas em Produção
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text/70 text-center mb-16 max-w-2xl mx-auto"
          >
            Projetos reais, clientes reais, resultados reais
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all overflow-hidden">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Project Image */}
                    {project.image && (
                      <div className="relative z-10 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 cursor-pointer group/image"
                          onClick={() => {
                            setExpandedImage(project.image!);
                            if ((project as any).images) {
                              setCurrentImageIndex(
                                (project as any).images.indexOf(project.image)
                              );
                            }
                          }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/image:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors flex items-center justify-center">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium border border-white/20"
                            >
                              {(project as any).images &&
                              (project as any).images.length > 1
                                ? `Clique para expandir (${
                                    (project as any).images.length
                                  } imagens)`
                                : "Clique para expandir"}
                            </motion.div>
                          </div>
                          {(project as any).images &&
                            (project as any).images.length > 1 && (
                              <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                                {(project as any).images.length} imagens
                              </div>
                            )}
                        </motion.div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-text mb-3">
                        {project.title}
                      </h3>
                      <p className="text-text/70 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-primary">
                          {project.stats}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => {
                          const techImage = techImages[tag];
                          return (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-text/70 border border-white/10 flex items-center gap-2"
                            >
                              {techImage && (
                                <Image
                                  src={techImage}
                                  alt={tag}
                                  width={16}
                                  height={16}
                                  className="object-contain"
                                />
                              )}
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-4 py-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all`}
                      >
                        <span>Ver Detalhes</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {expandedImage &&
          (() => {
            const currentProject = projects.find(
              (p) =>
                p.image === expandedImage ||
                (p as any).images?.includes(expandedImage)
            );
            const images = (currentProject as any)?.images || [expandedImage];
            const currentIndex = images.indexOf(expandedImage);

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={() => setExpandedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative max-w-7xl max-h-[90vh] w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setExpandedImage(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                    aria-label="Fechar"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Navigation buttons for multiple images */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const prevIndex =
                            (currentIndex - 1 + images.length) % images.length;
                          setExpandedImage(images[prevIndex]);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                        aria-label="Imagem anterior"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const nextIndex = (currentIndex + 1) % images.length;
                          setExpandedImage(images[nextIndex]);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                        aria-label="Próxima imagem"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                        {images.map((img: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedImage(img);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentIndex
                                ? "bg-white w-8"
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                            aria-label={`Imagem ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={expandedImage}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={expandedImage}
                          alt="Imagem expandida do projeto"
                          fill
                          className="object-contain"
                          sizes="100vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
      </AnimatePresence>
    </section>
  );
}
