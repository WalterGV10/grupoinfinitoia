"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

/**
 * Atomic Button Component from the Architecture Council.
 * - Variants for neon glow, glassmorphism and ghost states.
 * - Fully responsive and accessible.
 */
export default function Button({
  variant = "primary",
  size = "md",
  glow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-electric-cyan text-white hover:bg-electric-cyan/90",
    outline: "border border-white/20 hover:border-white/40 bg-white/5 text-white backdrop-blur-sm",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
    white: "bg-white text-electric-cyan hover:bg-white/90 shadow-xl",
  };

  const glows = {
    primary: "hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    outline: "hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    ghost: "",
    white: "hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        glow && glows[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
