"use client";

import { motion } from "framer-motion";
import { Mail, Key } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-16 px-6 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          <div>
            <h3 className="font-mono text-sm mb-4 text-accent">{t.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-purple-400 transition-colors">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-teal-400 transition-colors">
                  {t.footer.dataProcessing}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm mb-4 text-purple-400 flex items-center gap-2">
              <Mail size={14} /> {t.footer.contact}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@sbpldscnsd.com" className="text-foreground/60 hover:text-purple-400 transition-colors font-mono">
                  contact@sbpldscnsd.com
                </a>
              </li>
              <li className="text-foreground/60">
                {t.footer.secureConsultations}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm mb-4 text-teal-400 flex items-center gap-2">
              <Key size={14} /> {t.footer.publicKeys}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-teal-400 transition-colors font-mono">
                  {t.footer.pgpKey}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-teal-400 transition-colors font-mono">
                  {t.footer.gpgFingerprint}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="font-mono text-lg tracking-wider bg-gradient-to-r from-accent via-purple-400 to-teal-400 bg-clip-text text-transparent">
            SBPLDSCNSD
          </div>
          <div className="text-sm text-foreground/40">
            {t.footer.copyright}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
