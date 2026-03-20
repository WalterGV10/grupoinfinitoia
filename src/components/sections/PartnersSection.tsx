"use client";

import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02] [content-visibility:auto]">
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
  );
}
