"use client";

import { motion } from "framer-motion";
import { Search, Rocket, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepIcons = [Search, Rocket, TrendingUp];
const stepColors = [
  "text-accent",
  "text-purple-500",
  "text-teal-500"
];
const stepNumbers = ["01", "02", "03"];

export default function Methodology() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-[#111111] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-foreground via-purple-400 to-teal-400 bg-clip-text text-transparent">
            {t.methodology.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent via-purple-500 to-teal-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.methodology.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`font-mono text-6xl mb-4 bg-gradient-to-br ${
                  index === 0 ? "from-accent/20 to-transparent" :
                  index === 1 ? "from-purple-500/20 to-transparent" :
                  "from-teal-500/20 to-transparent"
                } bg-clip-text text-transparent`}>
                  {stepNumbers[index]}
                </div>
                <Icon className={`w-10 h-10 mb-6 ${stepColors[index]}`} />
                <h3 className="text-2xl font-normal mb-3">{step.title}</h3>
                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
                {index < t.methodology.steps.length - 1 && (
                  <div className={`hidden md:block absolute top-16 -right-6 w-12 h-px bg-gradient-to-r ${
                    index === 0 ? "from-accent/50 to-purple-500/50" : "from-purple-500/50 to-teal-500/50"
                  }`} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
