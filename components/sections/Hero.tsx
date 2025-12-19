"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";

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

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "De Médico a Builder Tech";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 bg-[length:200%_200%]"
      />

      {/* Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 50) % 100}%`],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Automation Developer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-tight">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-text/80 font-semibold"
            >
              Arthur Bezerra
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-text/60 max-w-2xl"
            >
              Construo sistemas que resolvem problemas reais, não apenas
              workflows
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Ver Minha História
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-text font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Baixar Currículo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 flex justify-center lg:justify-end relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-20"
            >
              {/* Blur effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl z-10">
                <Image
                  src="/images/image7.png"
                  alt="Arthur Bezerra - Automation Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-text/50 hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}

