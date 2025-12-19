"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Server,
  Code,
  Cloud,
  Database,
  Bot,
  MessageSquare,
  Workflow,
  Globe,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const categories = [
  {
    id: "backend",
    name: "Backend & Automação",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "frontend",
    name: "Frontend & No-Code",
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "devops",
    name: "DevOps & IA",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
  },
];

type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  description: string;
};

const skills: Record<string, Skill[]> = {
  backend: [
    {
      name: "n8n",
      level: 95,
      icon: Workflow,
      image: "/images/OIP (4).jpg",
      description: "Workflows em produção",
    },
    {
      name: "PostgreSQL",
      level: 90,
      icon: Database,
      image: "/images/png-transparent-postgresql-plain-wordmark-logo-icon.png",
      description: "Banco de dados relacional",
    },
    {
      name: "Supabase",
      level: 90,
      icon: Database,
      image: "/images/image.png",
      description: "Backend as a service",
    },
    {
      name: "Node.js/TypeScript",
      level: 90,
      icon: Code,
      image: "/images/image2.png",
      description: "Backend robusto",
    },
    {
      name: "Redis",
      level: 70,
      icon: Database,
      image: "/images/download (1).png",
      description: "Cache e filas",
    },
    {
      name: "Docker",
      level: 75,
      icon: Server,
      image: "/images/image3.png",
      description: "Containerização",
    },
    {
      name: "BullMQ",
      level: 80,
      icon: Workflow,
      image: "/images/image4.png",
      description: "Filas robustas com Redis",
    },
  ],
  frontend: [
    {
      name: "Next.js",
      level: 90,
      icon: Globe,
      image: "/images/image_processing20210620-5261-1izw9zf.png",
      description: "Framework React",
    },
    {
      name: "React",
      level: 90,
      icon: Code,
      image:
        "/images/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png",
      description: "UI moderna",
    },
    {
      name: "Lovable",
      level: 85,
      icon: Code,
      image: "/images/OIP.jpg",
      description: "No-code builder",
    },
    {
      name: "Vercel",
      level: 95,
      icon: Cloud,
      image: "/images/OIP (1).jpg",
      description: "Deploy e hosting",
    },
    {
      name: "Firebase",
      level: 70,
      icon: Cloud,
      image: "/images/firebase-logo-png-firebase-google-icon-512x512.png",
      description: "Backend as a service",
    },
    {
      name: "Figma",
      level: 40,
      icon: Code,
      image: "/images/OIP (2).jpg",
      description: "Design (iniciante)",
    },
  ],
  devops: [
    {
      name: "WhatsApp APIs",
      level: 95,
      icon: MessageSquare,
      image: "/images/pngtree-whatsapp-icon-png-image_9015283.png",
      description: "Oficial e Evolution",
    },
    {
      name: "AI Coding (Cursor/Windsurf)",
      level: 90,
      icon: Bot,
      image: "/images/cursor-app-icon.png",
      description: "Desenvolvimento assistido",
    },
    {
      name: "LangChain/LangGraph",
      level: 85,
      icon: Bot,
      image: "/images/langchain-white-logo-png_seeklogo-611657.png",
      description: "Agentes de IA complexos",
    },
    {
      name: "pgvector",
      level: 80,
      icon: Database,
      description: "Vector search",
    },
    {
      name: "AWS (EC2, S3, Lambda)",
      level: 70,
      icon: Cloud,
      image:
        "/images/aw7519fe58-aws-logo-file-amazon-web-services-logo-svg-wikimedia-commons.png",
      description: "Cloud infrastructure",
    },
    {
      name: "Git/GitHub",
      level: 80,
      icon: Code,
      image: "/images/OIP (3).jpg",
      description: "Versionamento",
    },
    {
      name: "Google Tag Manager",
      level: 75,
      icon: Globe,
      image: "/images/google-tag-manager.png",
      description: "Analytics",
    },
    {
      name: "Looker Studio",
      level: 65,
      icon: Globe,
      image: "/images/looker-studio-logo-png_seeklogo-617989.png",
      description: "Data visualization",
    },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend");

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
            hidden: { opacity: 0 },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4"
          >
            Arsenal Técnico
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text/70 text-center mb-12 max-w-2xl mx-auto"
          >
            Stack organizada por nível de proficiência
          </motion.p>

          {/* Category Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-white/5 text-text/70 hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory as keyof typeof skills].map((skill) => {
                const Icon = skill.icon;
                const levelLabel =
                  skill.level >= 85
                    ? "Pro"
                    : skill.level >= 60
                    ? "Intermediário"
                    : "Iniciante";
                const levelColor =
                  skill.level >= 85
                    ? "from-green-500 to-emerald-500"
                    : skill.level >= 60
                    ? "from-yellow-500 to-orange-500"
                    : "from-blue-500 to-cyan-500";

                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {/* MODIFICAÇÃO AQUI: Adicionado bg-white e ajustado padding */}
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden relative 
                          ${skill.image ? "p-1 bg-white" : `bg-gradient-to-br ${levelColor}`} 
                          ${skill.image && "border border-gray-200"}`} // Adiciona uma borda sutil para destacar o fundo branco
                        >
                          {skill.image ? (
                            <Image
                              src={skill.image}
                              alt={skill.name}
                              fill
                              className="object-contain" // Mantém a imagem dentro do container
                              sizes="40px"
                            />
                          ) : (
                            <Icon className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-text">{skill.name}</h3>
                          <p className="text-xs text-text/50">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${
                          skill.level >= 85
                            ? "bg-green-500/20 text-green-400"
                            : skill.level >= 60
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {levelLabel}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${levelColor} rounded-full`}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-text/50">
                      <span>{skill.level}%</span>
                      <span>{levelLabel}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
