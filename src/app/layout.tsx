import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoinfinitoia.com"),
  title: "GrupoInfinitoIA | Humanizar la Tecnología en la Región",
  description: "Ecosistema B2B líder en LATAM, exento de impuestos hasta 2040. Estrategia de crecimiento y digitalización empresarial con respaldo de Equidam.",
  openGraph: {
    title: "GrupoInfinitoIA | Inversión B2B Exenta de Impuestos",
    description: "Únete al ecosistema empresarial con mayor proyección de LATAM. Valuación certificada de $347M.",
    url: "https://grupoinfinitoia.com",
    siteName: "GrupoInfinitoIA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrupoInfinitoIA Investment Opportunity",
      },
    ],
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrupoInfinitoIA | Futurismo y Finanzas",
    description: "Invierte en el ecosistema B2B que está digitalizando la región.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "GrupoInfinitoIA",
      "url": "https://grupoinfinitoia.com",
      "logo": "https://grupoinfinitoia.com/logo.png",
      "description": "Ecosistema B2B líder en LATAM, exento de impuestos hasta 2040.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Salvador",
        "addressCountry": "SV"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Investor Relations",
        "name": "Antonio Arrué"
      }
    },
    {
      "@type": "InvestmentProduct",
      "name": "GrupoInfinitoIA Seed Round 2025",
      "description": "Oportunidad de inversión en el ecosistema B2B de mayor crecimiento en LATAM. Valuación pre-money de $347M.",
      "offers": {
        "@type": "Offer",
        "price": "1050000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "category": "Equity / Participation"
      },
      "issuer": {
        "@type": "Organization",
        "name": "GrupoInfinitoIA"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-space-dark text-white selection:bg-electric-cyan/30">
        <div className="gradient-arc" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
