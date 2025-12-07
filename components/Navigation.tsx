"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-lg tracking-wider">SBPLDSCNSD</div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border border-foreground/20 p-1 rounded">
            <Languages size={16} className="ml-2 text-foreground/60" />
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-sm transition-colors duration-300 ${
                language === "en"
                  ? "bg-accent text-white"
                  : "text-foreground/60 hover:text-accent"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ro")}
              className={`px-3 py-1 text-sm transition-colors duration-300 ${
                language === "ro"
                  ? "bg-accent text-white"
                  : "text-foreground/60 hover:text-accent"
              }`}
            >
              RO
            </button>
          </div>

          <button
            onClick={() => window.location.href = 'mailto:contact@sbpldscnsd.com?subject=Partnership Inquiry'}
            className="px-4 py-2 border border-foreground/20 hover:border-accent hover:text-accent transition-colors duration-300 text-sm"
          >
            {t.nav.partner}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
