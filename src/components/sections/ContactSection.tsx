"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import InvestorForm from "@/components/forms/InvestorForm";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function ContactSection() {
  return (
    <motion.section id="contacto" className="py-24 relative overflow-hidden [content-visibility:auto]" {...fadeIn}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent"></div>
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Inicia tu Participación"
          subtitle="¿Listo para unirte a la revolución tecnológica de la región? Completa el formulario para recibir el dossier detallado de inversión y una llamada de nuestro equipo estratégico."
        />
        <InvestorForm />
      </div>
    </motion.section>
  );
}
