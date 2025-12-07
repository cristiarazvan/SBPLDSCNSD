"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Colorful Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)"
          }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)"
          }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, transparent 70%)"
          }}
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.95, 1.15, 1]
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Corner Crosshairs with Color */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent/40" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-purple-500/40" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-pink-500/40" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-teal-500/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light tracking-tight mb-6"
        >
          {t.hero.title1}
          <br />
          <span className="font-normal bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-sm md:text-base text-foreground/70 mb-12 max-w-3xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => window.location.href = 'mailto:contact@sbpldscnsd.com?subject=Consultation Request'}
            className="px-8 py-3 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-muted hover:to-purple-700 text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
          >
            {t.hero.cta1}
            <ArrowRight size={18} />
          </button>
          <a
            href="#capabilities"
            className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            {t.hero.cta2}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
