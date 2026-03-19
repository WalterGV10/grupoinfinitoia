"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import { Send } from "lucide-react";

/**
 * Investor Contact Form - Data Steward approved.
 * Implements client-side validation and prepared for Server Actions integration.
 */
export default function InvestorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <GlassCard className="max-w-xl mx-auto text-center p-12 border-electric-cyan/50">
        <div className="w-16 h-16 bg-electric-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-electric-cyan" />
        </div>
        <h3 className="text-2xl font-bold mb-4">¡Solicitud Enviada!</h3>
        <p className="text-gray-400">
          Un asesor de inversión de GrupoInfinitoIA se pondrá en contacto contigo en las próximas 24 horas.
        </p>
        <Button 
          variant="outline" 
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Enviar otra consulta
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="max-w-2xl mx-auto p-10 md:p-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 blur-3xl group-hover:bg-electric-cyan/20 transition-all"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Nombre Completo</label>
            <input 
              required
              type="text" 
              placeholder="Ej. Juan Pérez"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-cyan/50 focus:outline-none transition-all text-white placeholder:text-gray-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Correo Corporativo</label>
            <input 
              required
              type="email" 
              placeholder="juan@empresa.com"
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-cyan/50 focus:outline-none transition-all text-white placeholder:text-gray-600"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Interés de Inversión</label>
          <select className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-cyan/50 focus:outline-none transition-all text-white appearance-none">
            <option className="bg-space-dark">Ronda Semilla ($1.05M)</option>
            <option className="bg-space-dark">Certificado Largo Plazo ($300k)</option>
            <option className="bg-space-dark">Certificado Mediano Plazo ($150k)</option>
            <option className="bg-space-dark">Certificado Corto Plazo ($20k)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Mensaje / Preguntas</label>
          <textarea 
            rows={4}
            placeholder="¿Cómo puedo ayudarle?"
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-electric-cyan/50 focus:outline-none transition-all text-white placeholder:text-gray-600 resize-none"
          ></textarea>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          glow 
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Procesando..." : "Solicitar Dossier de Inversión"}
        </Button>
      </form>
    </GlassCard>
  );
}
