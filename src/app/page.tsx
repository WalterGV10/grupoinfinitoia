"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import InvestorForm from "@/components/forms/InvestorForm";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  ExternalLink,
  ChevronRight,
  Network,
  Mail,
  Fingerprint,
  Award,
  ShieldAlert
} from "lucide-react";

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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* 2. El Problema */}
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
              "El mercado cautivo informal es hasta <span className="text-electric-cyan">3 veces más grande</span> que el mercado formal."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. La Solución (Product Tiers) */}
      <section id="solución" className="py-24">
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
              <GlassCard className="flex flex-col h-full">
                <div className="mb-6"><Zap className="w-10 h-10 text-electric-cyan" /></div>
                <h3 className="text-2xl font-bold mb-2">Digitalización</h3>
                <div className="text-3xl font-bold text-white mb-4">$19.99<span className="text-sm text-gray-400">/mes</span></div>
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
              className="p-8 rounded-3xl bg-electric-cyan/10 border-2 border-electric-cyan flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
            >
              <div className="mb-6 text-electric-cyan font-bold tracking-widest uppercase text-xs">Más Popular</div>
              <div className="mb-6"><TrendingUp className="w-10 h-10 text-white" /></div>
              <h3 className="text-2xl font-bold mb-2 text-white">Evolución</h3>
              <div className="text-3xl font-bold text-white mb-4">$49.99+ <span className="text-sm text-white/60">/mes</span></div>
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
              <GlassCard className="flex flex-col h-full">
                <div className="mb-6"><Globe className="w-10 h-10 text-cyan-400" /></div>
                <h3 className="text-2xl font-bold mb-2">Revolución</h3>
                <div className="text-3xl font-bold text-white mb-4">$699.99+ <span className="text-sm text-gray-400">/mes</span></div>
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

      {/* 4. Mercado & Tamaño */}
      <motion.section 
        id="mercado" 
        className="py-24 bg-gradient-to-b from-space-dark to-deep-blue/20"
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
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{item.label}</span>
                      <span className="text-sm font-bold text-white">{item.value}</span>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
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
                  ].map((fund, i) => (
                    <motion.div 
                      key={fund.l} 
                      className="p-3 bg-white/5 rounded-xl border border-white/5 hover:border-electric-cyan/30 transition-colors"
                      variants={fadeIn}
                    >
                      <div className="text-[10px] uppercase text-gray-500 font-bold">{fund.l}</div>
                      <div className="text-lg font-bold text-white">{fund.p}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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

      {/* 5. Finanzas & Tracción */}
      <motion.section id="finanzas" className="py-24" {...fadeIn}>
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

      {/* 5.5. Testimonios de Éxito (Audio Section) */}
      <motion.section 
        id="testimonios" 
        className="py-24 bg-gradient-to-b from-space-dark to-electric-cyan/5"
        {...fadeIn}
      >
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Historias de Impacto"
            subtitle="Emprendedoras que han transformado su visión en realidad con el ecosistema de Grupo Infinito."
          />

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                name: "Karla Mendoza", 
                role: "Fundadora de Bloom Tech", 
                msg: "Grupo Infinito no solo nos dio las herramientas tecnológicas, sino el acompañamiento estratégico para escalar nuestra operación en toda la región.",
                audio: "/testimonial_1.mp3"
              },
              { 
                name: "Elena García", 
                role: "CEO de Innova Gourmet", 
                msg: "La digitalización con Infinito fue el punto de inflexión para nuestra empresa. Ahora operamos con eficiencia y transparencia total.",
                audio: "/testimonial_2.mp3"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <GlassCard className="p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
                    <Fingerprint className="w-24 h-24 text-electric-cyan" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-cyan to-deep-blue flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-electric-cyan font-medium">{testimonial.role}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 italic mb-8 leading-relaxed">
                      "{testimonial.msg}"
                    </p>

                    {/* Custom Audio Player Mockup */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-cyan/30 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <button className="w-12 h-12 rounded-full bg-electric-cyan flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                          <Zap className="w-6 h-6 text-space-dark fill-space-dark" />
                        </button>
                        <div className="flex-grow">
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-electric-cyan rounded-full"
                              animate={{ width: ["0%", "45%"] }}
                              transition={{ duration: 1, delay: 1 }}
                            ></motion.div>
                          </div>
                          <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-500">
                             <span>0:14</span>
                             <span>0:32</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-electric-cyan/60 font-medium tracking-widest uppercase">
                         <span className="animate-pulse flex h-2 w-2 rounded-full bg-electric-cyan opacity-75"></span>
                         Audio Testimonio.mp3
                      </div>
                      <audio src={testimonial.audio} className="hidden" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. Universo Infinito - Trust Layer (Legacy Sync) */}
      <motion.section 
        className="py-24 relative overflow-hidden bg-white/[0.01]"
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

      {/* 7. Social Proof (Logos Slider placeholder) */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 overflow-hidden">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] mb-12">Alianzas Estratégicas y Respaldo</p>
          <motion.div 
            className="flex gap-12 md:gap-20 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 md:gap-20 opacity-40 grayscale">
                {["Millicom (Tigo)", "BAC Credomatic", "Davivienda", "CONAMYPE", "BID Lab", "Fedecrédito"].map((name) => (
                  <div key={name} className="text-xl md:text-2xl font-bold text-white tracking-tighter">{name}</div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Oferta de Inversión */}
      <motion.section id="propuesta" className="py-24" {...fadeIn}>
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Ronda de Inversión Actual"
            subtitle="Oportunidades exclusivas de participación en el capital."
          />

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Seed Round */}
            <motion.div 
              className="p-8 rounded-3xl border-2 border-electric-cyan bg-electric-cyan/5 col-span-1 lg:col-span-1 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Ronda Semilla</h3>
                <div className="text-3xl font-bold text-white mb-2">$1,050,000<span className="text-sm font-normal text-gray-400"> USD</span></div>
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
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold mb-2 text-gray-300">{opt.type}</h3>
                  <div className="text-2xl font-bold text-white mb-6">{opt.val}<span className="text-sm font-normal text-gray-400"> USD</span></div>
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

      {/* 9. Contact & Next Steps (Council Addition) */}
      <motion.section id="contacto" className="py-24 relative overflow-hidden" {...fadeIn}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent"></div>
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Inicia tu Participación"
            subtitle="¿Listo para unirte a la revolución tecnológica de la región? Completa el formulario para recibir el dossier detallado de inversión y una llamada de nuestro equipo estratégico."
          />
          <InvestorForm />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Network className="w-6 h-6 text-electric-cyan" />
                <span className="font-bold text-xl tracking-tighter">GrupoInfinito<span className="text-electric-cyan">IA</span></span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                El ecosistema empresarial definitivo para la formalización y digitalización en LATAM.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sede El Salvador</h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  World Trade Center Torre Futura,<br />
                  89 Av. Norte y Calle El Mirador,<br />
                  San Salvador, El Salvador.<br />
                  Tel: +(503) 2254-6506
                </p>
              </div>
              <div>
                <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sede Guatemala</h5>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Diagonal 6, 12-42 Zona 10,<br />
                  Edificio Design Center, Torre I,<br />
                  Ciudad de Guatemala, Guatemala.<br />
                  Tel: +(502) 2314-5600
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-xs text-gray-500">
              <Link href="#" className="hover:text-white">Aviso Legal</Link>
              <Link href="#" className="hover:text-white">Privacidad</Link>
              <Link href="#" className="hover:text-white">Relación con Inversores</Link>
            </div>
            <div className="text-gray-600 text-[10px] italic">
              "Humanizando la tecnología en la región. Fundada en 2020. GrupoInfinitoIA &copy; 2025"
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
