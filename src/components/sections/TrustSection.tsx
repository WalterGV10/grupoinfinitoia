"use client";

import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck, ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true }
};

export default function TrustSection() {
  return (
    <motion.section 
      className="py-24 relative overflow-hidden bg-white/[0.01] [content-visibility:auto]"
      {...fadeIn}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Universo Infinito</h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Legado de confianza y resultados en la región</p>
        </div>
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { label: "Experiencia Acumulada", val: "+20 Años", icon: Zap, desc: "Liderando la formalización y el crecimiento empresarial en la región." },
            { label: "Especialistas Infinitos", val: "+50", icon: Users, desc: "Un equipo multidisciplinario de expertos en finanzas, tecnología y talento." },
            { label: "Proyectos Exitosos", val: "+500", icon: ShieldCheck, desc: "Empresas transformadas, bancarizadas y escaladas con éxito." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className="text-center p-10 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-electric-cyan/20 transition-all group"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-electric-cyan" />
              </div>
              <div className="text-4xl font-black text-white mb-2">{item.val}</div>
              <div className="text-sm font-bold text-electric-cyan uppercase tracking-[0.2em] mb-4">{item.label}</div>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="p-8 rounded-[32px] bg-electric-cyan/5 border border-electric-cyan/20 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-electric-cyan/20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <ShieldAlert className="w-8 h-8 text-electric-cyan" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Seguridad & Protección de Datos</h4>
              <p className="text-xs text-gray-400 max-w-md">Trabajamos bajo los protocolos de seguridad más estrictos para garantizar la integridad total de su información patrimonial y corporativa.</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan hover:text-white transition-all">
            Ver Protocolos
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
