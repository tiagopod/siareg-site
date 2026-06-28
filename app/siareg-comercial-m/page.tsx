/**
 * LP de tráfego pago — /siareg-comercial-m
 *
 * NOTA PARA O CLIENTE: por ser uma landing page de anúncio (Google Ads),
 * você pode adicionar `robots: { index: false, follow: true }` ao metadata abaixo
 * caso queira mantê-la fora dos resultados de busca orgânica. Por padrão ela
 * está INDEXÁVEL e entra no sitemap, o que é adequado enquanto a URL não aparecer
 * em campanhas ativas que preferem tráfego controlado.
 */

import type { Metadata } from "next";
import Image from "next/image";
import { site, wa } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import {
  hero,
  socialProof,
  benefitsSection,
  productsHighlight,
  howItWorks,
  testimonialsSection,
  faq,
  ctaFinal,
} from "@/content/lp-comercial";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqPage } from "@/lib/jsonld";
import { Whatsapp, Mail, Truck, Store, Cart, Download, ArrowRight, Phone } from "@/components/icons";

// ─── SEO ────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Chocolates no Atacado Direto da Fábrica",
  description:
    "Revenda chocolates Siareg com margem alta — Pão de Mel, Trufas, Copinhos e Páscoa direto da fábrica em Guararema SP. Fale agora no WhatsApp.",
  alternates: { canonical: "/siareg-comercial-m" },
  openGraph: {
    title: "Chocolates no Atacado Direto da Fábrica | Siareg Chocolates",
    description:
      "Revenda chocolates Siareg com margem alta — Pão de Mel, Trufas, Copinhos e Páscoa direto da fábrica em Guararema SP. Fale agora no WhatsApp.",
    url: `${site.url}/siareg-comercial-m`,
    images: [{ url: `${site.url}/images/hero/irresistivel-siareg-1.png`, width: 1200, height: 630, alt: "Siareg Chocolates — atacado direto da fábrica" }],
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const WA_MSG_REVENDEDOR = "Olá! Quero me tornar revendedor Siareg. Podem me passar as condições?";
const WA_MSG_COTACAO = "Olá! Gostaria de uma cotação de produtos para revenda.";
const WA_MSG_COMECAR = "Olá! Vi o site e quero começar a revender chocolates Siareg. Podem me ajudar?";

const waRevendedor = wa(site.whatsapp.commercial, WA_MSG_REVENDEDOR);
const waCotacao = wa(site.whatsapp.commercial, WA_MSG_COTACAO);
const waComecar = wa(site.whatsapp.commercial, WA_MSG_COMECAR);

// ─── Benefit icon map ────────────────────────────────────────────────────────
function BenefitIcon({ icon, className }: { icon: string; className?: string }) {
  const cls = className ?? "h-8 w-8";
  switch (icon) {
    case "price":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "line":
      return <Cart className={cls} />;
    case "truck":
      return <Truck className={cls} />;
    case "craft":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
    case "support":
      return <Whatsapp className={cls} />;
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h2v2H8z" />
          <path d="M14 14h2v2h-2z" />
        </svg>
      );
    default:
      return <Store className={cls} />;
  }
}

// ─── Star rating ─────────────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

// ─── WhatsApp CTA button ──────────────────────────────────────────────────────
function WaButton({
  href,
  label,
  size = "md",
  className = "",
}: {
  href: string;
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "lg"
      ? "px-10 py-5 text-base"
      : size === "sm"
      ? "px-6 py-3 text-xs"
      : "px-8 py-4 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] font-heading font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl ${sizeClass} ${className}`}
    >
      <Whatsapp width={20} height={20} />
      {label}
    </a>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PAGE
// ════════════════════════════════════════════════════════════════════════════
export default function LpComercialPage() {
  const selectedReviews = testimonialsSection.reviewIndices.map(
    (i) => testimonials.reviews[i]
  );

  return (
    <>
      <JsonLd data={faqPage(faq.items.map((it) => ({ question: it.q, answer: it.a })))} />
      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-chocolate-texture">
        {/* subtle grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-x relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text column */}
            <div>
              <Reveal>
                <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-gold">
                  {hero.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={0.07}>
                <h1 className="mt-5 font-heading text-4xl font-bold leading-none text-cream sm:text-5xl lg:text-6xl">
                  {hero.headline}
                </h1>
              </Reveal>

              <Reveal delay={0.13}>
                <p className="mt-5 max-w-lg font-body text-lg normal-case leading-relaxed tracking-normal text-cream/75">
                  {hero.subheadline}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <WaButton href={waRevendedor} label={hero.ctaPrimary} size="lg" />
                  <a
                    href={site.catalogPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-8 py-5 font-heading text-base font-semibold uppercase tracking-wider text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10"
                  >
                    <Download width={18} height={18} />
                    {hero.ctaSecondary}
                  </a>
                </div>
              </Reveal>

              {/* Badges */}
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {hero.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 font-body text-xs normal-case tracking-normal text-cream/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {badge.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Image column */}
            <Reveal delay={0.1} y={32}>
              <div className="relative mx-auto max-w-sm lg:max-w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={600}
                  height={560}
                  className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SOCIAL PROOF — rating + logos de parceiros
      ══════════════════════════════════════════════════════════ */}
      <section className="border-y border-cocoa/10 bg-cream-200 py-8 sm:py-10">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              {/* Google rating */}
              <a
                href={testimonials.summary.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  {/* Google G */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Stars count={5} />
                    <span className="font-heading text-lg font-bold text-cocoa-700">
                      {socialProof.ratingLabel}
                    </span>
                  </div>
                  <p className="font-body text-xs normal-case tracking-normal text-muted">
                    {socialProof.reviewCount} {socialProof.reviewLabel} verificadas
                  </p>
                </div>
              </a>

              {/* Separator */}
              <div className="hidden h-10 w-px bg-cocoa/20 sm:block" />

              {/* Partner logos label */}
              <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted">
                {socialProof.partnersLabel}
              </p>

              {/* Logo strip — marquee (w-full no mobile p/ não estourar a viewport) */}
              <div className="w-full overflow-hidden sm:w-auto sm:flex-1">
                <div className="flex animate-marquee gap-8">
                  {[...socialProof.partnerLogos, ...socialProof.partnerLogos].map((logo, idx) => (
                    <div key={idx} className="flex shrink-0 items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={90}
                        height={36}
                        className="h-9 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BENEFÍCIOS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{benefitsSection.eyebrow}</p>
              <h2 className="section-title mt-1">{benefitsSection.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsSection.items.map((b, idx) => (
              <Reveal key={b.title} delay={idx * 0.07}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-cream-200 bg-cream p-7 transition-shadow hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cocoa/10 text-cocoa transition-colors group-hover:bg-cocoa group-hover:text-cream">
                    <BenefitIcon icon={b.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-cocoa-700">
                      {b.title}
                    </h3>
                    <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/65">
                      {b.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mid-page CTA */}
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <WaButton href={waRevendedor} label="Quero revender — falar agora" size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LINHA DE PRODUTOS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{productsHighlight.eyebrow}</p>
              <h2 className="section-title mt-1">{productsHighlight.title}</h2>
              <p className="mx-auto mt-3 max-w-xl font-body text-base normal-case leading-relaxed tracking-normal text-ink/60">
                {productsHighlight.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productsHighlight.categories.map((cat, idx) => (
              <Reveal key={cat.name} delay={idx * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden bg-cream-200">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-chocolate/80 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-widest text-brand-yellow">
                      {cat.code}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold uppercase tracking-wide text-cocoa-700">
                      {cat.name}
                    </h3>
                    <p className="mt-1.5 font-body text-xs normal-case leading-relaxed tracking-normal text-ink/60">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={site.catalogPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow gap-2"
              >
                <Download width={16} height={16} />
                {productsHighlight.cta}
              </a>
              <WaButton href={waCotacao} label={productsHighlight.ctaWa} size="md" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMO FUNCIONA
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-chocolate-texture py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-gold">{howItWorks.eyebrow}</p>
              <h2 className="mt-1 font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-4xl">
                {howItWorks.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {howItWorks.steps.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 0.1}>
                <div className="relative flex flex-col gap-4 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
                  {/* Step connector (desktop) */}
                  {idx < howItWorks.steps.length - 1 && (
                    <ArrowRight
                      width={24}
                      height={24}
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold/40 sm:block"
                    />
                  )}
                  <span className="font-heading text-5xl font-bold text-gold/30">{step.number}</span>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-cream">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm normal-case leading-relaxed tracking-normal text-cream/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <WaButton href={waComecar} label={howItWorks.cta} size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{testimonialsSection.eyebrow}</p>
              <h2 className="section-title mt-1">{testimonialsSection.title}</h2>
              <p className="mx-auto mt-3 max-w-lg font-body text-sm normal-case leading-relaxed tracking-normal text-ink/60">
                {testimonialsSection.subtitle}
              </p>
              {/* Master rating badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5">
                <Stars count={5} />
                <span className="font-heading text-sm font-bold text-cocoa-700">
                  {testimonials.summary.rating.toFixed(1).replace(".", ",")} —{" "}
                  <span className="font-body normal-case tracking-normal text-muted">
                    {testimonials.summary.count} avaliações no Google
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {selectedReviews.map((review, idx) => (
              <Reveal key={review.name} delay={idx * 0.07}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-cream-200 bg-cream p-7">
                  <Stars count={review.rating} />
                  <p className="flex-1 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/75 before:content-['“'] after:content-['”']">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3 border-t border-cocoa/10 pt-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa/15 font-heading text-sm font-bold text-cocoa">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-cocoa-700">
                        {review.name}
                      </p>
                      <p className="font-body text-[11px] normal-case tracking-normal text-muted">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-cream-200 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{faq.eyebrow}</p>
              <h2 className="section-title mt-1">{faq.title}</h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faq.items.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <details className="group rounded-2xl bg-white p-6 shadow-sm open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-heading text-sm font-semibold uppercase tracking-wide text-cocoa-700 marker:content-none">
                    {item.q}
                    <span className="mt-0.5 shrink-0 text-gold transition-transform group-open:rotate-45">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">
                    {item.a}{" "}
                    <a
                      href={waRevendedor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#25D366] hover:underline"
                    >
                      Fale conosco no WhatsApp.
                    </a>
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <WaButton href={waRevendedor} label="Tirar dúvidas agora" size="md" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-chocolate-texture py-20 sm:py-28">
        {/* decorative blobs */}
        <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cocoa/20 blur-3xl" />

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-script text-3xl text-gold">{ctaFinal.eyebrow}</p>
              <h2 className="mt-1 font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-4xl lg:text-5xl">
                {ctaFinal.title}
              </h2>
              <p className="mx-auto mt-4 max-w-md font-body text-base normal-case leading-relaxed tracking-normal text-cream/70">
                {ctaFinal.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <WaButton href={waComecar} label={ctaFinal.ctaWa} size="lg" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 px-8 py-5 font-heading text-base font-semibold uppercase tracking-wider text-cream transition-colors duration-200 hover:border-cream hover:bg-cream/10"
                >
                  <Mail width={18} height={18} />
                  {ctaFinal.ctaEmail}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex items-center justify-center gap-2 font-body text-sm normal-case tracking-normal text-cream/60">
                <Phone width={15} height={15} />
                <a
                  href={`https://wa.me/${site.whatsapp.sales}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cream/80 hover:text-cream hover:underline"
                >
                  {site.contact.phoneDisplay}
                </a>
                <span className="mx-1">·</span>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-cream/70 hover:text-cream hover:underline"
                >
                  {site.contact.email}
                </a>
              </div>
            </Reveal>

            {/* Trust lines */}
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {ctaFinal.trustLines.map((line) => (
                  <span
                    key={line}
                    className="flex items-center gap-1.5 font-body text-xs normal-case tracking-normal text-cream/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {line}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CATALOG STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-yellow py-10 sm:py-12">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-5">
                <Image
                  src="/images/cta/catalogo.png"
                  alt="Catálogo Siareg 2026"
                  width={72}
                  height={72}
                  className="shrink-0 rounded-xl object-contain"
                />
                <div>
                  <p className="font-heading text-xl font-bold uppercase tracking-wide text-chocolate">
                    Catálogo completo 2026
                  </p>
                  <p className="font-body text-sm normal-case tracking-normal text-chocolate/70">
                    Todos os produtos, códigos e fotos — PDF gratuito.
                  </p>
                </div>
              </div>
              <a
                href={site.catalogPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-chocolate px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-yellow shadow transition-transform hover:scale-[1.03]"
              >
                <Download width={16} height={16} />
                {ctaFinal.ctaCatalog}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
