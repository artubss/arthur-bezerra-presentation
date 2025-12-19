"use client";

import { motion } from "framer-motion";
import { Calendar, Code, Rocket, Target } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const journeySteps = [
  {
    year: "2022",
    title: "Decisão de Largar Medicina",
    description: "Momento de coragem: trocar o seguro pelo que amo",
    icon: Target,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    year: "2022-2023",
    title: "Imersão Total em Tech",
    description: "Estudos intensivos, projetos pessoais, primeiras automações",
    icon: Code,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    year: "2023",
    title: "Primeiros Projetos em Produção",
    description: "Sistemas reais, clientes reais, aprendizado acelerado",
    icon: Rocket,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    year: "2024",
    title: "Sistemas Escaláveis e Agentes de IA",
    description: "Integrações complexas, LangChain, vector search, filas robustas",
    icon: Code,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    year: "2025",
    title: "Pronto para Adapta",
    description: "2 anos de experiência intensiva. Pronto para o próximo nível",
    icon: Rocket,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
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
              transition: { staggerChildren: 0.2 },
            },
            hidden: { opacity: 0 },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4"
          >
            Minha Jornada em 2 Anos
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text/70 text-center mb-16 max-w-2xl mx-auto"
          >
            De médico a builder tech em 24 meses intensivos
          </motion.p>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-yellow-400 via-primary via-green-400 to-accent hidden md:block" />

            <div className="space-y-12">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.year}
                    variants={fadeInUp}
                    className={`flex items-start gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 ${
                        isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                      } text-left`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, x: isEven ? -10 : 10 }}
                        className={`inline-block p-6 rounded-2xl ${step.bgColor} border border-white/10 backdrop-blur-sm w-full md:w-auto`}
                      >
                        <div className="flex items-center gap-4 md:justify-start">
                          <Icon className={`w-6 h-6 ${step.color} flex-shrink-0`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-primary">
                                {step.year}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-text mb-2">
                              {step.title}
                            </h3>
                            <p className="text-text/70 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`w-16 h-16 ${step.bgColor} rounded-full border-4 border-background flex items-center justify-center`}
                      >
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


