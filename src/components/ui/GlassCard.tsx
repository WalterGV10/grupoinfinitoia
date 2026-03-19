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
        "p-8 rounded-3xl bg-white/5 border border-white/10 transition-all backdrop-blur-sm",
        hoverGlow && "hover:bg-white/[0.07] hover:border-electric-cyan/30",
        className
      )}
    >
      {children}
    </div>
  );
}
