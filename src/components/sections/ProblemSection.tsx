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
            { label: "Falta de Crédito (GT)", value: "87%", detail: "MIPYMES sin financiamiento" },
            { label: "Brecha Digital (ES)", value: "50%", detail: "Desconexión tecnológica total" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeIn}>
              <GlassCard className="p-8 hover:border-electric-cyan/50 h-full">
                <div className="text-4xl font-bold text-electric-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.detail}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-electric-cyan/20 to-deep-blue/20 border border-white/10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl font-semibold">
            &quot;El mercado cautivo informal es hasta <span className="text-electric-cyan">3 veces más grande</span> que el mercado formal.&quot;
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
