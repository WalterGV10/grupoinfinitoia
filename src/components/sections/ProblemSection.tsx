"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

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

export default function ProblemSection() {
  return (
    <motion.section 
      id="el-problema" 
      className="py-24 bg-white/5 relative"
      {...fadeIn}
    >
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="El Mercado Desatendido"
          subtitle="La brecha digital y la informalidad en Centroamérica representan una oportunidad masiva para el primer ecosistema B2B totalmente integrado."
        />

        <motion.div 
          className="grid md:grid-rows-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { label: "Informalidad (GT)", value: "71.1%", detail: "Operan fuera del sistema formal" },
            { label: "Falta de Crédito", value: "87%", detail: "MIPYMES sin acceso bancario" },
            { label: "Brecha Digital", value: "50%", detail: "Desconexión tecnológica total" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeIn}>
              <GlassCard className="p-10 hover:border-electric-cyan/50 h-full group">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-electric-cyan to-blue-400 mb-4 tracking-tighter group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">{stat.value}</div>
                <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 font-light text-sm tracking-wide">{stat.detail}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-electric-cyan/10 via-electric-cyan/5 to-transparent border border-electric-cyan/20 text-center shadow-[0_0_50px_rgba(6,182,212,0.05)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-3xl font-light text-gray-200">
            &quot;El mercado cautivo informal es hasta <span className="text-electric-cyan font-bold block md:inline mt-2 md:mt-0">3 veces más grande</span> que el mercado formal ponderado.&quot;
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
