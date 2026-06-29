"use client";

import Image from "next/image";
import Link from "next/link";
import { productsSection, homeCtas } from "@/content/home";
import { salesWa } from "@/content/site";
import Reveal from "./Reveal";
import { Download, Pin } from "./icons";

export default function Products() {
  const waLink = salesWa();

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-x">
        <Reveal>
          <h2 className="section-title text-center">{productsSection.title}</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {productsSection.items.map((p, idx) => {
            const href = "href" in p && p.href ? p.href : waLink;
            const external = !("href" in p && p.href);
            return (
              <Reveal key={p.code} delay={(idx % 4) * 0.07}>
                <Link href={href} target={external ? "_blank" : undefined}
                  className="group flex h-full flex-col items-center rounded-2xl border border-black/5 bg-cream/40 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square w-full">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 45vw, 22vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 font-heading text-sm font-semibold leading-tight text-cocoa-700">
                    {p.name}
                  </p>
                  <span className="mt-1 font-body text-xs font-medium normal-case tracking-normal text-muted">
                    Cód. {p.code}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href={productsSection.ctaHref} className="btn-yellow">{productsSection.ctaLabel}</Link>
        </div>

        {/* Catalog + store CTAs */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <a href={homeCtas.catalog.href} target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-cocoa-700 p-6 text-cream shadow-md transition hover:shadow-xl">
            <Download width={34} height={34} className="shrink-0 text-brand-yellow" />
            <div>
              <p className="font-heading text-lg font-semibold">Baixe nosso catálogo 2026</p>
              <p className="font-body text-sm normal-case tracking-normal text-cream/80">Todos os produtos em um clique.</p>
            </div>
          </a>
          <a href={homeCtas.store.href} target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-gold p-6 text-espresso shadow-md transition hover:shadow-xl">
            <Pin width={34} height={34} className="shrink-0" />
            <div>
              <p className="font-heading text-lg font-semibold">Visite nossa loja física</p>
              <p className="font-body text-sm normal-case tracking-normal text-espresso/80">Guararema - SP. Venha nos conhecer.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
