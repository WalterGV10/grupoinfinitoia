"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

const NAV_ITEMS = [
  "El Problema",
  "Solución",
  "Mercado",
  "Finanzas",
  "Testimonios",
  "Propuesta"
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-white/10 bg-space-dark/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-gradient-to-b from-space-dark/80 to-transparent border-b border-transparent"
      }`}
    >
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative">
            <div className="absolute -inset-1 bg-electric-cyan/20 rounded-full blur-md group-hover:bg-electric-cyan/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <Logo className="w-10 h-10 relative transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white leading-none">
              GrupoInfinito<span className="text-electric-cyan">IA</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium group-hover:text-electric-cyan/70 transition-colors duration-300">
              Future of B2B
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 rounded-full transition-transform duration-300 ease-out"></div>
            </Link>
          ))}
        </nav>

        {/* CTA Desktop & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden sm:block">
            <Link href="#invertir">
              <Button variant="primary" size="sm" glow className="shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                Invertir Ahora
              </Button>
            </Link>
          </div>
          
          <button 
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-electric-cyan/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-300 transform ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute transition-all duration-300 transform ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
                <X className="w-6 h-6" />
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-space-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out origin-top shadow-2xl ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 flex items-center justify-between group"
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : '0ms'
              }}
            >
              <span className={`transform transition-all duration-500 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: isMobileMenuOpen ? `${i * 50 + 100}ms` : '0ms' }}>
                {item}
              </span>
              <ChevronRight className={`w-4 h-4 text-electric-cyan transform transition-all duration-500 ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`} style={{ transitionDelay: isMobileMenuOpen ? `${i * 50 + 200}ms` : '0ms' }} />
            </Link>
          ))}
          <div 
            className={`pt-6 mt-4 border-t border-white/10 sm:hidden transform transition-all duration-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: isMobileMenuOpen ? `${NAV_ITEMS.length * 50 + 100}ms` : '0ms' }}
          >
            <Link href="#invertir" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center text-lg py-4 shadow-[0_0_15px_rgba(0,255,255,0.2)]" glow>
                Invertir Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
