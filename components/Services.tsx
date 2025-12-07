"use client";

import { motion } from "framer-motion";
import { Building2, Code2, Network, FileSearch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Building2, Code2, Network, FileSearch];
const serviceColors = [
  "group-hover:text-accent group-hover:border-accent/50",
  "group-hover:text-purple-500 group-hover:border-purple-500/50",
  "group-hover:text-pink-500 group-hover:border-pink-500/50",
  "group-hover:text-teal-500 group-hover:border-teal-500/50"
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-foreground via-accent to-purple-400 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`md:col-span-2 border border-border/50 p-8 transition-all duration-300 group ${serviceColors[index]}`}
              >
                <Icon className="w-8 h-8 mb-6 text-foreground/60 transition-colors duration-300" />
                <h3 className="text-xl font-normal mb-3">{service.title}</h3>
                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
