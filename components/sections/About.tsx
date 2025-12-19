"use client";

import { motion } from "framer-motion";
import { Stethoscope, Zap, Code } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const timelineItems = [
  {
    icon: Stethoscope,
    title: "Medicina",
    description: "Caminho seguro, mas não era minha paixão",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Zap,
    title: "Momento de Decisão",
    description: "Insight: construir soluções > curar sintomas",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Code,
    title: "Tech",
    description: "Criar produtos que impactam milhares",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-4"
          >
            Por Que Larguei Medicina?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-text/70 text-center mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Aos 22 anos, estava no caminho seguro. Mas percebi: não queria
            curar sintomas, queria construir soluções escaláveis. Larguei tudo
            para criar produtos que impactam milhares simultaneamente.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 via-yellow-400 to-primary hidden md:block" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className={`flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col gap-6`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : ""}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, x: isEven ? -10 : 10 }}
                        className={`inline-block p-6 rounded-2xl ${item.bgColor} border border-white/10 backdrop-blur-sm`}
                      >
                        <div
                          className={`flex items-center gap-4 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          } justify-center`}
                        >
                          {!isEven && (
                            <Icon className={`w-8 h-8 ${item.color}`} />
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-text mb-2">
                              {item.title}
                            </h3>
                            <p className="text-text/70">{item.description}</p>
                          </div>
                          {isEven && (
                            <Icon className={`w-8 h-8 ${item.color}`} />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`w-12 h-12 ${item.bgColor} rounded-full border-4 border-background flex items-center justify-center`}
                      >
                        <Icon className={`w-6 h-6 ${item.color}`} />
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


