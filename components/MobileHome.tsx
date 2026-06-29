"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { hero, homeCtas } from "@/content/home";
import { getRootLpProducts, productHref } from "@/content/products";
import { site, wa, DEFAULT_WA_MESSAGE } from "@/content/site";
import {
  ChevronRight,
  Download,
  Pin,
  Whatsapp,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Home,
  Grid,
} from "./icons";

const waLink = wa(site.whatsapp.commercial, DEFAULT_WA_MESSAGE);

/** Atalhos circulares (estilo app) — usam a foto do produto como ícone. */
const shortcuts: { label: string; href: string; image?: string; icon?: "catalog" | "all" }[] = [
  { label: "Pão de Mel", href: "/paodemel", image: "/images/products/paodemel.webp" },
  { label: "Trufas", href: "/trufa-pote", image: "/images/products/trufa-pote.png" },
  { label: "Copinhos", href: "/copinhos-chocolate", image: "/images/products/copinhos-chocolate.webp" },
  { label: "Bombons", href: "/blister-coracao-trufa", image: "/images/products/blister-coracao-trufa.webp" },
  { label: "Páscoa", href: "/produtos/pascoa-2026", image: "/images/products/pascoa-2026.png" },
  { label: "Catálogo", href: site.catalogPdf, icon: "catalog" },
  { label: "Ver tudo", href: "/produtos", icon: "all" },
];

/** Mobile-only home redesenhada no formato de um app (estilo Mercado Livre). */
export default function MobileHome() {
  const products = getRootLpProducts();

  return (
    <div className="bg-cream-200 pb-24 lg:hidden">
      {/* Hero carrossel */}
      <div className="px-4 pt-4">
        <HeroCarousel />
      </div>

      {/* Atalhos de categorias */}
      <section className="mt-5">
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-1">
          {shortcuts.map((s) => {
            const external = s.icon === "catalog";
            return (
              <Link
                key={s.label}
                href={s.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex w-[68px] shrink-0 flex-col items-center gap-2 text-center"
              >
                <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={s.label}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : s.icon === "catalog" ? (
                    <Download width={26} height={26} className="text-cocoa-700" />
                  ) : (
                    <Grid width={26} height={26} className="text-cocoa-700" />
                  )}
                </span>
                <span className="font-body text-[11px] font-medium leading-tight normal-case tracking-normal text-cocoa-700">
                  {s.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Produtos */}
      <section className="mt-6 px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-cocoa-700">
            Nossos Produtos
          </h2>
          <Link
            href="/produtos"
            className="flex items-center gap-0.5 font-body text-xs font-semibold normal-case tracking-normal text-gold"
          >
            Ver todos <ChevronRight width={14} height={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={productHref(p.slug)}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition active:scale-[0.98]"
            >
              <div className="relative aspect-square w-full bg-cream/50">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="45vw"
                    className="object-contain p-3"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="line-clamp-2 font-heading text-sm font-semibold leading-tight text-cocoa-700">
                  {p.name}
                </p>
                {p.code && (
                  <span className="mt-1 font-body text-[11px] font-medium normal-case tracking-normal text-muted">
                    Cód. {p.code}
                  </span>
                )}
                <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-brand-yellow/90 px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-wider text-chocolate">
                  Ver produto
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTAs: catálogo + loja física */}
      <section className="mt-6 grid gap-3 px-4">
        <a
          href={homeCtas.catalog.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl bg-cocoa-700 p-4 text-cream shadow-sm transition active:scale-[0.99]"
        >
          <Download width={28} height={28} className="shrink-0 text-brand-yellow" />
          <div className="min-w-0">
            <p className="font-heading text-sm font-semibold">Baixe o catálogo 2026</p>
            <p className="truncate font-body text-xs normal-case tracking-normal text-cream/80">
              Todos os produtos em um clique
            </p>
          </div>
          <ChevronRight width={18} height={18} className="ml-auto shrink-0 text-cream/70" />
        </a>
        <a
          href={homeCtas.store.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl bg-gold p-4 text-espresso shadow-sm transition active:scale-[0.99]"
        >
          <Pin width={28} height={28} className="shrink-0" />
          <div className="min-w-0">
            <p className="font-heading text-sm font-semibold">Visite nossa loja física</p>
            <p className="truncate font-body text-xs normal-case tracking-normal text-espresso/80">
              Guararema - SP. Venha nos conhecer
            </p>
          </div>
          <ChevronRight width={18} height={18} className="ml-auto shrink-0 text-espresso/70" />
        </a>
      </section>

      {/* Contato */}
      <section className="mt-6 px-4">
        <h2 className="mb-3 font-heading text-lg font-bold uppercase tracking-wide text-cocoa-700">
          Fale com a gente
        </h2>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp px-4 py-3.5 text-white transition active:opacity-95"
          >
            <Whatsapp width={24} height={24} />
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide">WhatsApp comercial</p>
              <p className="font-body text-xs normal-case tracking-normal text-white/90">Faça seu pedido agora</p>
            </div>
            <ChevronRight width={18} height={18} className="ml-auto text-white/80" />
          </a>

          <a
            href={`tel:${site.whatsapp.sales}`}
            className="flex items-center gap-3 border-t border-black/5 px-4 py-3.5 active:bg-cream/40"
          >
            <Phone width={20} height={20} className="text-cocoa" />
            <span className="font-body text-sm normal-case tracking-normal text-cocoa-700">
              {site.contact.phoneDisplay}
            </span>
          </a>

          <a
            href={site.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 border-t border-black/5 px-4 py-3.5 active:bg-cream/40"
          >
            <Pin width={20} height={20} className="mt-0.5 shrink-0 text-cocoa" />
            <span className="font-body text-sm normal-case leading-snug tracking-normal text-cocoa-700">
              {site.contact.address}
            </span>
          </a>

          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-3 border-t border-black/5 px-4 py-3.5 active:bg-cream/40"
          >
            <Mail width={20} height={20} className="text-cocoa" />
            <span className="break-all font-body text-sm normal-case tracking-normal text-cocoa-700">
              {site.contact.email}
            </span>
          </a>

          <div className="flex gap-3 border-t border-black/5 px-4 py-3.5">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa-700"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa-700"
            >
              <Facebook width={20} height={20} />
            </a>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}

/** Carrossel do hero adaptado para mobile (card arredondado + autoplay + dots). */
function HeroCarousel() {
  const slides = hero.slides;
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  const go = useCallback(
    (n: number) => setI((p) => (n + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => go(i + 1), hero.autoplayMs);
    return () => clearInterval(t);
  }, [i, go, reduce]);

  const trackWidthPct = slides.length * 100;
  const stepPct = 100 / slides.length;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
      <div
        className="relative aspect-[1391/442] w-full"
        aria-roledescription="carousel"
        aria-label="Banners promocionais"
      >
        <div
          className={`flex h-full ${reduce ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ width: `${trackWidthPct}%`, transform: `translateX(-${i * stepPct}%)` }}
        >
          {slides.map((s, idx) => (
            <a
              key={idx}
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-full shrink-0"
              style={{ width: `${stepPct}%` }}
              aria-label={`${s.alt} — abrir WhatsApp`}
              aria-hidden={idx !== i}
              tabIndex={idx === i ? 0 : -1}
            >
              <Image src={s.image} alt={s.alt} fill priority={idx === 0} sizes="92vw" className="object-cover" />
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            aria-current={idx === i}
            className="p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all ${
                idx === i ? "w-5 bg-brand-yellow" : "w-1.5 bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/** Barra de navegação inferior fixa (estilo app). */
function BottomNav() {
  const tabs = [
    { label: "Início", href: "/", icon: Home, active: true, external: false },
    { label: "Produtos", href: "/produtos", icon: Grid, external: false },
    { label: "Catálogo", href: site.catalogPdf, icon: Download, external: true },
    { label: "Contato", href: "/contato", icon: Mail, external: false },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-stretch">
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.label}
              href={t.href}
              target={t.external ? "_blank" : undefined}
              rel={t.external ? "noopener noreferrer" : undefined}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 ${
                t.active ? "text-cocoa-700" : "text-muted"
              }`}
            >
              <Icon width={22} height={22} />
              <span className="font-body text-[10px] font-medium normal-case tracking-normal">{t.label}</span>
            </Link>
          );
        })}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-2.5 text-whatsapp"
        >
          <Whatsapp width={22} height={22} />
          <span className="font-body text-[10px] font-semibold normal-case tracking-normal">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
