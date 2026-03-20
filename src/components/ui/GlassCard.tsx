"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

/**
 * Reusable Glassmorphism Card for a premium futuristic feel.
 * Implements subtle translucent backgrounds and glass border.
 */
export default function GlassCard({
  children,
  className,
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 backdrop-blur-md",
        hoverGlow && "hover:bg-white/[0.08] hover:border-electric-cyan/40 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
