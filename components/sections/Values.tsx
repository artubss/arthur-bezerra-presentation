"use client";

import { motion } from "framer-motion";
import {
  Search,
  RefreshCw,
  Shield,
  Zap,
  Target,
  Trophy,
} from "lucide-react";

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

const values = [
  {
    icon: Search,
    name: "Curiosidade",
    tagline: "Aprender é meu entretenimento",
    hover: "Testo ferramentas novas todo fim de semana",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: RefreshCw,
    name: "Adaptabilidade",
    tagline: "Larguei Medicina = Adaptabilidade máxima",
    hover: "Cliente pediu integração impossível? Eu crio",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    name: "Responsabilidade",
    tagline: "Workflows em produção, clientes reais",
    hover: "Assumo problemas de ponta a ponta",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    name: "Velocidade",
    tagline: "Deploy no mesmo dia é padrão",
    hover: "Já madrugava estudando pra largar Medicina",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    name: "Iniciativa",
    tagline: "Resolvo antes de pedirem",
    hover: "Antecipo problemas e crio soluções preventivas",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Trophy,
    name: "Excelência",
    tagline: "Não quero ser bom. Quero ser referência",
    hover: "Refatoro código que funciona porque pode ser melhor",
    color: "from-rose-500 to-red-500",
  },
];

export default function Values() {
  return (
    <section
      id="values"
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
            Por Que Sou{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CARVIE
            </span>
            ?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text/70 text-center mb-16 max-w-2xl mx-auto"
          >
            Seis valores que guiam cada decisão e cada linha de código
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-text mb-2">
                        {value.name}
                      </h3>
                      <p className="text-text/70 mb-2">{value.tagline}</p>
                      <p className="text-sm text-text/50 group-hover:text-text/70 transition-colors">
                        {value.hover}
                      </p>
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


