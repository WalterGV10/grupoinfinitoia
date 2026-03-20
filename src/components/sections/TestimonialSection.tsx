"use client";

import { motion } from "framer-motion";
import { Fingerprint, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function TestimonialSection() {
  return (
    <motion.section 
      id="testimonios" 
      className="py-24 bg-gradient-to-b from-space-dark to-electric-cyan/5 [content-visibility:auto]"
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
                    &quot;{testimonial.msg}&quot;
                  </p>

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
  );
}
