import type { Metadata } from "next";
import Image from "next/image";
import { campanhaData } from "@/content/campanha-maes";
import { testimonials } from "@/content/testimonials";
import { site, salesWa } from "@/content/site";
import Reveal from "@/components/Reveal";
import { Whatsapp, Download, ArrowRight } from "@/components/icons";

// ─── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: campanhaData.seo.title,
  description: campanhaData.seo.description,
  alternates: { canonical: "/campanha-chocolates-siareg" },
  openGraph: {
    title: campanhaData.seo.title,
    description: campanhaData.seo.description,
    url: `${site.url}/campanha-chocolates-siareg`,
    images: [
      {
        url: `${site.url}${campanhaData.seo.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Presentes de Dia das Mães — Chocolates Siareg",
      },
    ],
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const waHero = salesWa(
  "Olá! Vim pela campanha de Dia das Mães e gostaria de saber mais sobre os presentes disponíveis."
);

const waCatalog = salesWa(campanhaData.finalCta.catalogMessage);

const badgeClasses: Record<string, string> = {
  gold: "bg-gold text-white",
  rose: "bg-rose text-white",
  cocoa: "bg-cocoa text-cream",
};

const iconMap: Record<string, React.ReactNode> = {
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M2 20V9l6-4v4l6-4v4l6-4v15H2Z" />
      <path d="M6 20v-5h4v5" />
      <path d="M14 20v-5h4v5" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M1 5h13v11H1z" />
      <path d="M14 8h4l3 3v5h-7z" />
      <circle cx="5.5" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </svg>
  ),
};

// ─── Stars component ─────────────────────────────────────────────────────────

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#C99B44" className="h-4 w-4">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CampanhaPage() {
  const { hero, urgency, kits, reasons, featuredReview, finalCta } = campanhaData;

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf0f0] via-[#fef7e9] to-[#fdf0f0]">
        {/* Decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="container-x relative py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Left: copy */}
            <div className="order-2 lg:order-1">
              <Reveal>
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-2 rounded-full bg-rose/20 px-4 py-1.5 font-body text-sm normal-case tracking-normal text-rose">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                  </svg>
                  {hero.eyebrow}
                </span>

                {/* Headline (h1) — font-script + normal-case para escapar do uppercase forçado */}
                <h1 className="mt-4 font-script text-5xl normal-case leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl">
                  {hero.headline}
                </h1>

                <p className="mt-5 font-body text-base normal-case leading-relaxed tracking-normal text-ink/70 sm:text-lg">
                  {hero.subheadline}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={waHero}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1ebe5d] hover:shadow-[#25D366]/40"
                  >
                    <Whatsapp className="h-5 w-5" />
                    {hero.ctaLabel}
                  </a>
                  <a
                    href={hero.ctaSecondaryHref}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
                  >
                    {hero.ctaSecondaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Social proof mini */}
                <div className="mt-8 flex items-center gap-3">
                  <Stars />
                  <span className="font-body text-sm normal-case tracking-normal text-ink/60">
                    {testimonials.summary.rating.toFixed(1).replace(".", ",")} — {testimonials.summary.count} avaliações no {testimonials.summary.source}
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right: product image */}
            <Reveal delay={0.15} className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-sm lg:max-w-full">
                {/* Halo decorativo */}
                <div
                  aria-hidden
                  className="absolute inset-0 scale-110 rounded-full bg-rose/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-rose/20">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    width={600}
                    height={600}
                    priority
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 90vw, 50vw"
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fdf0f0]/60 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-rose/20">
                  <p className="font-script text-xl text-rose">Com carinho</p>
                  <p className="font-body text-xs normal-case tracking-normal text-ink/60">para ela ❤</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAIXA DE URGÊNCIA / PRAZO ───────────────────────────────────── */}
      <section className="bg-chocolate-texture py-5">
        <div className="container-x flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="font-body text-base normal-case tracking-normal text-cream/85">
            {urgency.text}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-1 font-heading text-sm font-bold uppercase tracking-wide text-chocolate shadow-sm">
            {/* Clock icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 6v6l4 2" />
            </svg>
            {campanhaData.prazoFechamentoPedido}
          </span>
          <span className="font-body text-base normal-case tracking-normal text-cream/85">
            {urgency.suffix}
          </span>
        </div>
      </section>

      {/* ── GRID DE KITS / PRODUTOS ─────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-4xl text-cocoa">Escolha o presente certo</p>
              <h2 className="section-title mt-1">Kits para presentear no Dia das Mães</h2>
              <p className="mx-auto mt-4 max-w-2xl font-body text-base normal-case leading-relaxed tracking-normal text-ink/65">
                Chocolates artesanais direto da fábrica — para que ela sinta que foi feito especialmente pra ela.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {kits.map((kit, i) => {
              const waKitLink = salesWa(kit.waMessage);
              return (
                <Reveal key={kit.slug} delay={i * 0.08}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-rose/10 transition hover:shadow-xl hover:ring-rose/30">
                    {/* Badge */}
                    <span
                      className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 font-body text-xs font-semibold normal-case tracking-normal ${badgeClasses[kit.badgeColor]}`}
                    >
                      {kit.badge}
                    </span>

                    {/* Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-cream-200">
                      <Image
                        src={kit.image}
                        alt={kit.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-body text-xs normal-case tracking-normal text-muted">
                        Cód. {kit.code}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold uppercase tracking-wide text-ink">
                        {kit.name}
                      </h3>
                      <p className="mt-1 font-body text-sm italic normal-case tracking-normal text-cocoa">
                        {kit.tagline}
                      </p>
                      <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/65">
                        {kit.description}
                      </p>
                      <div className="mt-auto pt-5">
                        <a
                          href={waKitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#1ebe5d]"
                        >
                          <Whatsapp className="h-4 w-4" />
                          Consultar no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POR QUE SIAREG ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-4xl text-cocoa">{reasons.eyebrow}</p>
              <h2 className="section-title mt-1">{reasons.headline}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl bg-cream p-7 text-center ring-1 ring-cocoa/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose/15 text-rose">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTO + RATING GOOGLE ───────────────────────────────────── */}
      <section className="bg-cream-200 py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              {/* Google rating badge */}
              <div className="mb-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-md ring-1 ring-cocoa/10">
                  {/* Google G icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335"/>
                  </svg>
                  <Stars count={testimonials.summary.rating} />
                  <span className="font-heading text-sm font-bold text-ink">
                    {testimonials.summary.rating.toFixed(1).replace(".", ",")}
                  </span>
                  <span className="font-body text-sm normal-case tracking-normal text-ink/55">
                    ({testimonials.summary.count} avaliações)
                  </span>
                </div>
              </div>

              {/* Featured review */}
              <div className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-rose/15 sm:p-10">
                {/* Quote icon */}
                <svg
                  aria-hidden
                  viewBox="0 0 40 30"
                  fill="none"
                  className="absolute -left-2 -top-2 h-10 w-10 text-rose/30"
                >
                  <path d="M0 30V18C0 8 6 2 18 0l2 4C12 6 9 10 9 16h8v14H0Zm22 0V18C22 8 28 2 40 0l2 4C34 6 31 10 31 16h8v14H22Z" fill="currentColor"/>
                </svg>

                <p className="font-body text-lg normal-case leading-relaxed tracking-normal text-ink/80 sm:text-xl">
                  &ldquo;{featuredReview.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/15 font-heading text-base font-bold text-rose">
                    {featuredReview.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
                      {featuredReview.name}
                    </p>
                    <Stars count={featuredReview.rating} />
                  </div>
                  <a
                    href={testimonials.summary.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto font-body text-xs normal-case tracking-normal text-cocoa underline underline-offset-2 transition hover:text-cocoa-700"
                  >
                    Ver no Google
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL / URGÊNCIA ─────────────────────────────────────────── */}
      <section className="bg-chocolate-texture py-16 sm:py-24">
        <div className="container-x text-center">
          <Reveal>
            {/* Heart decoration */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose/20 text-rose">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
              </span>
            </div>

            <p className="font-script text-4xl text-brand-yellow sm:text-5xl">
              {finalCta.headline}
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-cream sm:text-3xl">
              {finalCta.subheadline}
            </h2>

            {/* Prazo destacado */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-6 py-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-yellow">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="font-body text-sm normal-case tracking-normal text-cream/80">
                Pedidos até <strong className="text-brand-yellow">{campanhaData.prazoFechamentoPedido}</strong> para entrega antes do Dia das Mães ({campanhaData.dataDiadasMaes})
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={waHero}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-heading text-base font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/20 transition hover:bg-[#1ebe5d]"
              >
                <Whatsapp className="h-5 w-5" />
                {finalCta.ctaLabel}
              </a>
              <a
                href={site.catalogPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 font-heading text-base font-semibold uppercase tracking-wider text-cream transition hover:bg-cream/10"
              >
                <Download className="h-5 w-5" />
                {finalCta.catalogLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
