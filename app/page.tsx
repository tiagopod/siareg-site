import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Products from "@/components/Products";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import MobileHome from "@/components/MobileHome";
import { site, salesWa } from "@/content/site";

export const metadata: Metadata = {
  // Curto de propósito: o template do layout acrescenta " | Siareg Chocolates" (20 chars).
  title: "Chocolates para Atacado e Revenda",
  description:
    "Fábrica de chocolates em Guararema SP. Distribuição de Pão de Mel artesanal, Trufas, Bombons, Copinhos e Ovos de Páscoa para atacadistas, distribuidores e mercados.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siareg Chocolates | Chocolates para Atacado e Revenda desde 2004",
    description:
      "Fábrica de chocolates em Guararema SP. Distribuição de Pão de Mel artesanal, Trufas, Bombons, Copinhos e Ovos de Páscoa para atacadistas, distribuidores e mercados.",
    url: site.url,
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
  "@id": `${site.url}/#business`,
  name: "Siareg Chocolates",
  description:
    "Fábrica de chocolates com tradição desde 2004. Pão de mel, trufas, bombons e muito mais para atacadistas, distribuidores e mercados.",
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/images/hero/siareg-tradicao-2004.png`,
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
      {/*
        Proposta de valor textual. Antes o único h1 da home era sr-only porque o
        hero é um carrossel de banners — o visitante chegava (69% da mídia paga cai
        aqui) sem ler em nenhum lugar que a Siareg vende atacado.
      */}
      <section className="border-b border-cocoa/10 bg-cream">
        <div className="container-x mx-auto max-w-container py-8 sm:py-12 lg:py-14">
          <h1 className="max-w-[20ch] font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight text-chocolate sm:text-4xl lg:text-5xl">
            Chocolates no atacado direto da fábrica
          </h1>
          <p className="mt-4 max-w-[60ch] font-body text-base normal-case leading-relaxed tracking-normal text-muted sm:text-lg">
            Pão de mel, trufas, bombons e copinhos para atacadistas, distribuidores e
            mercados. Fabricação própria em Guararema&nbsp;–&nbsp;SP desde 2004.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={salesWa()} className="btn-yellow" data-cta="home-hero">
              Falar com um vendedor
            </a>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center rounded-full border-2 border-cocoa px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

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
