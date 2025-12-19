"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, X } from "lucide-react";

export default function EasterEgg() {
  const [showMessage, setShowMessage] = useState(false);
  const [konamiCode, setKonamiCode] = useState<string[]>([]);

  useEffect(() => {
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];

    const handleKeyPress = (e: KeyboardEvent) => {
      setKonamiCode((prev) => {
        const newCode = [...prev, e.code];
        const last10 = newCode.slice(-10);

        if (last10.join(",") === konamiSequence.join(",")) {
          setShowMessage(true);
          return [];
        }

        // Keep only last 10 keys
        return last10;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowMessage(false)}
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/50 backdrop-blur-md max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-4 right-4 text-text/50 hover:text-text transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="flex justify-center"
              >
                <Rocket className="w-16 h-16 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-text">
                Você encontrou! 🚀
              </h3>
              <p className="text-text/70">
                Essa é a iniciativa que a Adapta procura!
              </p>
              <p className="text-sm text-text/50">
                Detalhes como este mostram atenção e dedicação. Exatamente o que
                você precisa para construir o futuro.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


