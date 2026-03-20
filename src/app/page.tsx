import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import MarketSection from "@/components/sections/MarketSection";
import FinanceSection from "@/components/sections/FinanceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TrustSection from "@/components/sections/TrustSection";
import PartnersSection from "@/components/sections/PartnersSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

// React Server Component (RSC) por defecto. No "use client" en la raíz.
// Esto minimiza masivamente el JavaScript inicial enviado al navegador para el FCP/LCP.
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <FinanceSection />
      <TestimonialSection />
      <TrustSection />
      <PartnersSection />
      <InvestmentSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
