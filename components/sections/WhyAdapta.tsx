"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TrendingUp, Zap, Users, Rocket, Code } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

export default function WhyAdapta() {
  return (
    <section
      id="why-adapta"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background/50 to-background"
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
            Por Que Adapta?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text/70 text-center mb-16 max-w-2xl mx-auto"
          >
            Mesma energia. Mesma obsessão. Mesmo resultado.
          </motion.p>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Adapta Side */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text">Adapta</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <CountUp end={50} suffix="k" />
                    <span className="text-text/70">clientes</span>
                  </div>
                  <p className="text-text/60 text-sm">em 12 meses</p>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Crescimento mais rápido do Brasil</span>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Bootstrap (sem investimento)</span>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Maior evento de IA da LATAM</span>
                </div>
              </div>
            </motion.div>

            {/* My Side */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text">Eu</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <CountUp end={24} suffix=" meses" />
                  </div>
                  <p className="text-text/60 text-sm">Medicina → Dev</p>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>Autodidata intensivo</span>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <Zap className="w-5 h-5 text-accent" />
                  <span>Sistemas em produção em meses</span>
                </div>

                <div className="flex items-center gap-2 text-text/70">
                  <Rocket className="w-5 h-5 text-accent" />
                  <span>Obsessão por construir</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div
            variants={fadeInUp}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
          >
            <p className="text-2xl sm:text-3xl font-bold text-text mb-4">
              Mesma energia. Mesma obsessão. Mesmo resultado.
            </p>
            <p className="text-lg text-text/70">
              Vamos construir o futuro juntos?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

