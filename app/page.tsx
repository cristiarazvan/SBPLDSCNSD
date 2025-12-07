"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <Methodology />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
