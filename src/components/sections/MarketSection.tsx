"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function MarketSection() {
  return (
    <motion.section 
      id="mercado" 
      className="py-24 bg-gradient-to-b from-space-dark to-deep-blue/20 [content-visibility:auto]"
      {...fadeIn}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Oportunidad de Mercado LATAM (2025-2040)</h2>
            <div className="space-y-6">
              {[
                { label: "TAM (Mercado Total)", value: "$46,258M", width: "100%", bg: "bg-electric-cyan" },
                { label: "SAM (Mercado Accesible)", value: "$17,792M", width: "70%", bg: "bg-electric-cyan/60" },
                { label: "SOM (Mercado Objetivo)", value: "$7,117M", width: "40%", bg: "bg-electric-cyan/40" },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-medium text-gray-400 tracking-wide">{item.label}</span>
                    <span className="text-2xl font-black text-white tracking-tighter">{item.value}</span>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden [contain:paint]">
                    <motion.div 
                      className={`h-full ${item.bg} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: item.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <div className="p-6 rounded-2xl bg-electric-cyan/5 border border-electric-cyan/20">
              <h3 className="text-xl font-bold mb-4">Metodología de Valoración</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Basado en directrices **IPEV**. Valuación superior al 98% de empresas comparables en Crunchbase.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  { m: "DCF (Múltiplos)", p: "40%", v: "$305.6M" },
                  { m: "DCF (Largo Plazo)", p: "40%", v: "$330.0M" },
                  { m: "Venture Capital Method", p: "20%", v: "$465.1M" }
                ].map((item) => (
                  <div key={item.m} className="flex justify-between text-xs border-b border-white/5 pb-2">
                    <span className="text-gray-500">{item.m} ({item.p})</span>
                    <span className="text-electric-cyan font-bold">{item.v}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4">Uso de los Fondos ($1.05M)</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Operaciones", p: "33%" },
                  { l: "Ventas & Mkt", p: "27%" },
                  { l: "I+D (R&D)", p: "18%" },
                  { l: "Otros", p: "8%" },
                  { l: "CapEx", p: "7%" },
                  { l: "Inventario", p: "6%" }
                ].map((fund) => (
                  <motion.div 
                    key={fund.l} 
                    className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-electric-cyan/30 transition-colors"
                    variants={fadeIn}
                  >
                    <div className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1">{fund.l}</div>
                    <div className="text-xl font-black text-white">{fund.p}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-16">
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-electric-cyan mb-1">14</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Países</div>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="text-3xl font-bold text-electric-cyan mb-1">3</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Continentes</div>
            </GlassCard>
            <GlassCard className="col-span-2 p-6 border-electric-cyan/20 flex items-center justify-between">
              <span className="text-sm font-semibold">Expansión Proyectada 2034</span>
              <ChevronRight className="w-5 h-5 text-electric-cyan" />
            </GlassCard>
        </div>
      </div>
    </motion.section>
  );
}
