"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import Galaxy from "./ui/Galaxy";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-space-dark">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1.2}
          glowIntensity={0.8}
          saturation={1.2}
          hueShift={140}
          twinkleIntensity={0.8}
          rotationSpeed={0.08}
          repulsionStrength={2.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1.2}
        />
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-xs font-semibold mb-8 relative z-20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cyan"></span>
          </span>
          Exento de Impuestos (2025-2040) | Ronda Abierta
        </motion.div>

        {/* H1 Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-electric-cyan to-electric-cyan bg-clip-text text-transparent leading-[1.1] relative z-20"
        >
          Humanizar la Tecnología <br className="hidden md:block" /> en la Región
        </motion.h1>

        {/* Hook */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-electric-cyan/90 font-medium italic mb-8 max-w-3xl mx-auto relative z-20"
        >
          "Todos tenemos un millón de dólares en la cabeza, <br className="hidden sm:block" /> solo debemos descubrir la manera de bajarlos de ahí"
        </motion.p>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed relative z-20"
        >
          El ecosistema definitivo <span className="text-white font-semibold">B2B exento de impuestos</span> con el respaldo estrategico de <span className="text-electric-cyan font-bold">Millicom TIGO</span> y el <span className="text-white font-semibold">Gobierno de El Salvador</span>. La plataforma integral para formalizar, bancarizar y digitalizar el futuro de los negocios en LATAM.
        </motion.p>

        {/* Actions */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
        >
          <Button variant="primary" size="lg" glow className="w-full sm:w-auto group">
            Invierte en el Futuro de LATAM
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Explorar Ecosistema
          </Button>
        </motion.div>
      </motion.div>

      {/* Background Decorative Elements - Softened to complement Galaxy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[600px] pointer-events-none opacity-10 bg-radial-gradient from-electric-cyan/20 to-transparent blur-3xl z-1"></div>
    </section>
  );
}
