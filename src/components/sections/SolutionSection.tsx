"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Zap, ShieldCheck, TrendingUp, Globe, Fingerprint, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function SolutionSection() {
  return (
    <section id="solución" className="py-24 [content-visibility:auto]">
      <div className="container mx-auto px-6">
        <motion.div {...fadeIn}>
          <SectionHeader 
            title="Ecosistema Infinito"
            subtitle="Soluciones SaaS escalables para cada etapa del negocio."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Digitalización */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="flex flex-col h-full [contain:content]">
              <div className="mb-6"><Zap className="w-10 h-10 text-electric-cyan" /></div>
              <h3 className="text-3xl font-black tracking-tight mb-2">Digitalización</h3>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tighter">$19.99<span className="text-lg font-medium text-gray-500">/mes</span></div>
              <ul className="mb-8 space-y-4 flex-grow">
                {["Facturación Electrónica", "Gestión de Inventarios", "POS & ERP", "Ventanilla Única"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ShieldCheck className="w-4 h-4 text-electric-cyan" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan hover:text-white">
                Saber más
              </Button>
            </GlassCard>
          </motion.div>

          {/* Evolución */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-electric-cyan/10 border-2 border-electric-cyan flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(6,182,212,0.2)] [contain:content]"
          >
            <div className="mb-6 text-electric-cyan font-bold tracking-[0.2em] uppercase text-xs animate-pulse">Más Popular</div>
            <div className="mb-6"><TrendingUp className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" /></div>
            <h3 className="text-3xl font-black tracking-tight mb-2 text-white">Evolución</h3>
            <div className="text-6xl font-black text-white mb-4 tracking-tighter">$49.99+ <span className="text-lg font-medium text-white/60">/mes</span></div>
            <ul className="mb-8 space-y-4 flex-grow">
              {["Gestión Contable", "Gestión Fiscal", "Bancarización", "Créditos MIPYME"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                  <ShieldCheck className="w-4 h-4 text-white" /> {item}
                </li>
              ))}
            </ul>
            <Button variant="white" className="w-full">
              Ver Planes
            </Button>
          </motion.div>

          {/* Revolución */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="flex flex-col h-full [contain:content]">
              <div className="mb-6"><Globe className="w-10 h-10 text-cyan-400" /></div>
              <h3 className="text-3xl font-black tracking-tight mb-2">Revolución</h3>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-4 tracking-tighter">$699.99<span className="text-lg font-medium text-gray-500">/mes</span></div>
              <ul className="mb-8 space-y-4 flex-grow">
                {["Inteligencia Artificial", "Auditorías Externas", "Gobierno Corporativo", "Consultores Elite"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Contactar Ventas
              </Button>
            </GlassCard>
          </motion.div>
        </div>

        {/* Specialized Consulting Row (Legacy Sync) */}
        <motion.div 
          className="mt-16 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-electric-cyan uppercase tracking-[0.3em]">Capa de Consultoría Especializada</h3>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-electric-cyan/30 transition-all group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-electric-cyan/10 text-electric-cyan group-hover:bg-electric-cyan group-hover:text-white transition-colors">
                <Fingerprint className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Avalúos de Negocios y Marcas</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Determinamos el valor real de su empresa bajo estándares **IPEV**. Esencial para procesos de M&A, levantamiento de capital o blindaje patrimonial.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Valoración Técnica", "Análisis de Intangibles", "Certificación IPEV"].map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-electric-cyan/30 transition-all group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-electric-cyan/10 text-electric-cyan group-hover:bg-electric-cyan group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Gestión del Talento & Estrategia</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Diseñamos la estructura organizacional para el escalamiento hiper-acelerado. Transformamos el capital humano en una ventaja competitiva medible.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Headhunting Elite", "Diseño de OKRs", "Cultura de Alto Desempeño"].map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
