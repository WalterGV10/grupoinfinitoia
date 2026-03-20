"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function InvestmentSection() {
  return (
    <motion.section id="propuesta" className="py-24 [content-visibility:auto]" {...fadeIn}>
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Ronda de Inversión Actual"
          subtitle="Oportunidades exclusivas de participación en el capital."
        />

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Seed Round */}
          <motion.div 
            className="p-8 rounded-3xl border-2 border-electric-cyan bg-electric-cyan/5 col-span-1 lg:col-span-1 flex flex-col justify-between [contain:content]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-300">Ronda Semilla</h3>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan mb-3 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">$1,050,000<span className="text-lg font-bold text-gray-400"> USD</span></div>
              <div className="text-xs text-electric-cyan/80 font-medium mb-6 uppercase tracking-widest">Valuación Post-Money: $348.3M</div>
              <div className="p-4 rounded-xl bg-electric-cyan/20 mb-6 text-center">
                <div className="text-xs font-bold text-electric-cyan uppercase mb-1">Equity</div>
                <div className="text-2xl font-bold text-white">0.30%</div>
              </div>
            </div>
            <Button variant="primary" glow className="w-full py-4 text-base">
               Solicitar Términos
            </Button>
          </motion.div>

          {/* Expansion GT - 3 options */}
          {[
            { type: "Certificado Corto Plazo", val: "$20,000", roi: "12% - 20%", term: "24 meses" },
            { type: "Certificado Mediano Plazo", val: "$150,000", roi: "15% - 25%", term: "36 meses" },
            { type: "Certificado Largo Plazo", val: "$300,000", roi: "18% - 30%", term: "48 meses" }
          ].map((opt, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 h-full [contain:content]">
                <h3 className="text-lg font-bold mb-3 text-electric-cyan">{opt.type}</h3>
                <div className="text-3xl font-black text-white mb-6 tracking-tight drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)]">{opt.val}<span className="text-sm font-normal text-gray-400"> USD</span></div>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">ROI Proyectado</span>
                      <span className="text-electric-cyan font-bold">{opt.roi}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Opción de Compra</span>
                      <span className="text-white">{opt.term}</span>
                    </div>
                </div>
                <Button variant="outline" className="w-full mt-auto">
                    Me Interesa
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 p-12 rounded-[40px] bg-gradient-to-br from-space-dark to-electric-cyan/20 border border-white/5 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
           <h3 className="text-2xl font-bold mb-6">Estrategia de Salida (Exit)</h3>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "M&A", desc: "Venta a gigantes del Fintech o Tech Global" },
                { title: "Buyback", desc: "Programa de recompra institucional" },
                { title: "Dividendos", desc: "Retornos proyectados x4 a x6 (5-7 años)" }
              ].map((exit) => (
                <div key={exit.title}>
                  <div className="text-electric-cyan font-black text-3xl mb-2">{exit.title}</div>
                  <p className="text-sm text-gray-400">{exit.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
