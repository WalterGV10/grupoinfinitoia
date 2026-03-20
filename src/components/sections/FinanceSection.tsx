"use client";

import { motion } from "framer-motion";
import { BarChart3, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
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

export default function FinanceSection() {
  return (
    <motion.section id="finanzas" className="py-24 [content-visibility:auto]" {...fadeIn}>
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Crecimiento y Rentabilidad"
          subtitle="Proyecciones financieras certificadas y tracción real."
        />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { label: "Valoración Pre-Money", value: "$347.3M", sub: "Equidam Certified" },
            { label: "Revenue Proy. 2027", value: "$157M", sub: "Hiper-crecimiento" },
            { label: "Margen EBITDA 2027", value: "86%", sub: "Año 3 Optimizado" },
            { label: "Revenue 2024", value: "$592K", sub: "Tracción Real" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeIn}>
              <GlassCard className="p-6 border-l-4 border-l-electric-cyan h-full">
                <div className="text-xs text-gray-400 uppercase font-bold mb-2">{stat.label}</div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-electric-cyan font-medium">{stat.sub}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="p-1 rounded-3xl bg-gradient-to-r from-electric-cyan via-deep-blue to-electric-cyan">
          <div className="bg-space-dark rounded-[22px] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Tracción Hiper-acelerada</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  GrupoInfinitoIA ha validado su modelo con un **Margen EBITDA del 65%** en 2024. Proyectamos un escalamiento a **$50.3M EBITDA** en 2026 y **$135M** para finales de 2027.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8">
                  <div>
                    <div className="text-gray-500 text-xs uppercase mb-1">Ingresos 2025</div>
                    <div className="text-xl font-bold text-white">$6.78M</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase mb-1">Ingresos 2026</div>
                    <div className="text-xl font-bold text-white">$65.2M</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" className="text-electric-cyan gap-2 px-0 hover:bg-transparent hover:text-cyan-glow">
                    Ver Reporte Equidam 2025 <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
              <div className="flex items-center justify-center p-8 bg-white/5 rounded-2xl">
                 <motion.div
                   animate={{ 
                     scale: [1, 1.05, 1],
                     rotate: [0, 5, 0]
                   }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <BarChart3 className="w-48 h-48 text-electric-cyan/20" />
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
