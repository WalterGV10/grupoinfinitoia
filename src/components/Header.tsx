"use client";

import Link from "next/link";
import { Network } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-space-dark/60 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-electric-cyan/20 border border-electric-cyan/30 group-hover:border-electric-cyan/60 transition-colors">
            <Network className="w-6 h-6 text-electric-cyan" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            GrupoInfinito<span className="text-electric-cyan">IA</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["El Problema", "Solución", "Mercado", "Finanzas", "Propuesta"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="#invertir">
          <Button variant="primary" size="md" glow>
            Invertir Ahora
          </Button>
        </Link>
      </div>
    </header>
  );
}
