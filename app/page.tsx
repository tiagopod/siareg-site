import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Products from "@/components/Products";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import MobileHome from "@/components/MobileHome";

export const metadata: Metadata = {
  title: "Chocolates para Atacado e Revenda desde 2004",
  description:
    "Fábrica de chocolates em Guararema SP. Distribuição de Pão de Mel artesanal, Trufas, Bombons, Copinhos e Ovos de Páscoa para atacadistas, distribuidores e mercados.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siareg Chocolates | Chocolates para Atacado e Revenda desde 2004",
    description:
      "Fábrica de chocolates em Guararema SP. Distribuição de Pão de Mel artesanal, Trufas, Bombons, Copinhos e Ovos de Páscoa para atacadistas, distribuidores e mercados.",
    url: "https://siaregchocolates.com.br",
    images: [
      {
        url: "/images/hero/siareg-tradicao-2004.png",
        width: 1391,
        height: 442,
        alt: "Siareg Chocolates — Tradição em chocolate desde 2004",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": "https://siaregchocolates.com.br/#business",
  name: "Siareg Chocolates",
  description:
    "Fábrica de chocolates com tradição desde 2004. Pão de mel, trufas, bombons e muito mais para atacadistas, distribuidores e mercados.",
  url: "https://siaregchocolates.com.br",
  logo: "https://siaregchocolates.com.br/images/brand/logo.png",
  image: "https://siaregchocolates.com.br/images/hero/siareg-tradicao-2004.png",
  telephone: "+55 11 93337-6425",
  email: "comercial@siaregchocolates.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Peixoto, 308",
    addressLocality: "Guararema",
    addressRegion: "SP",
    postalCode: "08900-000",
    addressCountry: "BR",
  },
  servesCuisine: "Chocolates artesanais",
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/p/Chocolates-Siareg-100063760877266/",
    "https://www.instagram.com/chocolatessiareg/",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* h1 para SEO/acessibilidade — o hero é um carrossel de banners (sem texto) */}
      <h1 className="sr-only">
        Siareg Chocolates — Fábrica de Pão de Mel, Trufas e Chocolates para Atacado e Revenda desde 2004
      </h1>
      {/* Mobile: home no formato de app (estilo Mercado Livre) */}
      <MobileHome />

      {/* Desktop: layout original em seções */}
      <div className="hidden lg:block">
        <Hero />
        <Channels />
        <Products />
        <About />
        <Partners />
        <Testimonials />
      </div>
    </>
  );
}
