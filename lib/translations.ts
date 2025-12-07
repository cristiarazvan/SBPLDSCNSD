export const translations = {
  en: {
    nav: {
      partner: "Partner with us"
    },
    hero: {
      title1: "Integrated Systems for",
      title2: "Public & Private Architecture",
      subtitle: "End-to-end technical infrastructure. From hardware procurement to complex software ecosystems.",
      cta1: "Request Consultation",
      cta2: "Explore Capabilities"
    },
    services: {
      title: "Capabilities",
      items: [
        {
          title: "Public Sector Infrastructure",
          description: "Hardware acquisition strategy and implementation for institutional environments."
        },
        {
          title: "Custom Software Development",
          description: "Tailored digital solutions for high-complexity requirements."
        },
        {
          title: "System Integration",
          description: "Bridging the gap between physical hardware and digital control layers."
        },
        {
          title: "Technical Auditing",
          description: "Assessment and optimization of existing tech stacks."
        }
      ]
    },
    methodology: {
      title: "Methodology",
      steps: [
        {
          title: "Analyze",
          description: "Data-driven assessment of requirements."
        },
        {
          title: "Deploy",
          description: "Rapid implementation of hardware and software assets."
        },
        {
          title: "Scale",
          description: "Future-proof architectures designed for growth."
        }
      ]
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      publicKeys: "Public Keys",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      dataProcessing: "Data Processing",
      secureConsultations: "Secure consultations only",
      pgpKey: "PGP Key",
      gpgFingerprint: "GPG Fingerprint",
      copyright: "© 2024 SBPLDSCNSD. All rights reserved."
    }
  },
  ro: {
    nav: {
      partner: "Parteneriat cu noi"
    },
    hero: {
      title1: "Sisteme Integrate pentru",
      title2: "Arhitectură Publică & Privată",
      subtitle: "Infrastructură tehnică end-to-end. De la achiziții hardware la ecosisteme software complexe.",
      cta1: "Solicită Consultanță",
      cta2: "Explorează Capabilitățile"
    },
    services: {
      title: "Capabilități",
      items: [
        {
          title: "Infrastructură Sector Public",
          description: "Strategie de achiziție hardware și implementare pentru medii instituționale."
        },
        {
          title: "Dezvoltare Software Personalizat",
          description: "Soluții digitale adaptate pentru cerințe de complexitate ridicată."
        },
        {
          title: "Integrare Sisteme",
          description: "Conectarea hardware-ului fizic cu straturile de control digital."
        },
        {
          title: "Audit Tehnic",
          description: "Evaluare și optimizare a stivelor tehnologice existente."
        }
      ]
    },
    methodology: {
      title: "Metodologie",
      steps: [
        {
          title: "Analizăm",
          description: "Evaluare bazată pe date a cerințelor."
        },
        {
          title: "Implementăm",
          description: "Implementare rapidă a activelor hardware și software."
        },
        {
          title: "Scalăm",
          description: "Arhitecturi rezistente în timp, proiectate pentru creștere."
        }
      ]
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      publicKeys: "Chei Publice",
      privacy: "Politica de Confidențialitate",
      terms: "Termeni și Condiții",
      dataProcessing: "Procesare Date",
      secureConsultations: "Doar consultări securizate",
      pgpKey: "Cheie PGP",
      gpgFingerprint: "Amprenta GPG",
      copyright: "© 2024 SBPLDSCNSD. Toate drepturile rezervate."
    }
  }
};

export type Language = keyof typeof translations;
