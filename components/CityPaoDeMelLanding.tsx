import Image from "next/image";
import Link from "next/link";
import { site, salesWa } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { lpCidade, type Cidade } from "@/content/lp-cidades";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqPage } from "@/lib/jsonld";
import { Whatsapp, Truck, Store } from "@/components/icons";

/**
 * Template das LPs regionais de Pão de Mel (/assis, /marilia).
 * B2B puro: fala com o dono do mercadinho, não com o consumidor.
 * Sem menu, sem catálogo geral, sem outras páginas — só WhatsApp.
 */

const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow";

function WaButton({ href, label, size = "md", className = "" }: { href: string; label: string; size?: "md" | "lg"; className?: string }) {
  const sizeClass = size === "lg" ? "px-6 py-4 text-base sm:px-10 sm:py-5" : "px-8 py-4 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-full bg-whatsapp text-center font-heading font-semibold uppercase tracking-wider text-ink shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-whatsapp-hover hover:shadow-xl sm:w-auto ${FOCUS} ${sizeClass} ${className}`}
    >
      <Whatsapp aria-hidden width={20} height={20} className="shrink-0" />
      {label}
    </a>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function MotivoIcon({ icon, className = "h-7 w-7" }: { icon: string; className?: string }) {
  const s = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className, "aria-hidden": true };
  switch (icon) {
    case "price": return <svg {...s}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
    case "clock": return <svg {...s}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "shield": return <svg {...s}><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "box": return <svg {...s}><path d="M3 7l9-4 9 4v10l-9 4-9-4V7Z" /><path d="M3 7l9 4 9-4M12 11v10" /></svg>;
    case "truck": return <Truck className={className} aria-hidden />;
    case "support": return <Whatsapp className={className} aria-hidden />;
    default: return <Store className={className} aria-hidden />;
  }
}

export default function CityPaoDeMelLanding({ cidade }: { cidade: Cidade }) {
  const lp = lpCidade(cidade);
  const wa = {
    hero: salesWa(lp.wa.hero),
    tabela: salesWa(lp.wa.tabela),
    comecar: salesWa(lp.wa.comecar),
    duvida: salesWa(lp.wa.duvida),
  };
  const reviews = lp.depoimentos.indices.map((i) => testimonials.reviews[i]);

  return (
    <>
      <JsonLd data={faqPage(lp.faq.items.map((it) => ({ question: it.q, answer: it.a })))} />

      {/* MINI HEADER — marca + WhatsApp sempre à mão */}
      <header className="sticky top-0 z-40 bg-chocolate-texture/95 py-3 backdrop-blur">
        <div className="container-x flex items-center justify-between">
          <Link href={`/${cidade.slug}`} aria-label={site.name}>
            <Image src={site.logo} alt={site.name} width={96} height={48} priority className="h-10 w-auto object-contain" />
          </Link>
          <a
            href={wa.hero}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-full bg-whatsapp px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-ink hover:bg-whatsapp-hover ${FOCUS}`}
          >
            <Whatsapp aria-hidden width={16} height={16} />
            <span className="hidden sm:inline">Falar com vendedor</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO — fundo claro, produto grande, números que o lojista entende */}
      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-yellow/30 blur-3xl" />
        <div className="container-x relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-chocolate px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                  <Truck aria-hidden width={14} height={14} />
                  {lp.hero.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.07}>
                <h1 className="mt-5 font-heading text-4xl font-bold leading-[0.95] text-chocolate sm:text-5xl lg:text-6xl">
                  {lp.hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.13}>
                <p className="mt-5 max-w-lg font-body text-lg normal-case leading-relaxed tracking-normal text-ink/75">
                  {lp.hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8">
                  <WaButton href={wa.hero} label={lp.hero.cta} size="lg" />
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-chocolate/15 pt-6">
                  {lp.hero.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="font-body text-[11px] normal-case tracking-normal text-ink/60">{s.label}</dt>
                      <dd className="font-heading text-2xl font-bold text-chocolate sm:text-3xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.1} y={32}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-chocolate/10">
                  <Image src={lp.hero.image} alt={lp.hero.imageAlt} fill priority sizes="(max-width:1024px) 80vw, 45vw" className="object-contain p-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-chocolate px-5 py-3 shadow-xl">
                  <p className="font-script text-2xl leading-none text-brand-yellow">Compra por impulso</p>
                  <p className="mt-1 font-body text-xs normal-case tracking-normal text-cream/80">ticket baixo, giro alto</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ONDE VENDE NA LOJA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{lp.pontos.eyebrow}</p>
              <h2 className="section-title mt-1">{lp.pontos.title}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {lp.pontos.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border-2 border-brand-yellow bg-cream p-7">
                  <span className="font-heading text-5xl font-bold leading-none text-brand-yellow">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-chocolate">{p.title}</h3>
                  <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT DO PRODUTO */}
      <section className="bg-chocolate-texture py-16 sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal y={28}>
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl lg:max-w-none">
                <Image src={lp.spotlight.image} alt={lp.spotlight.imageAlt} fill sizes="(max-width:1024px) 80vw, 45vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="font-script text-3xl text-gold">{lp.spotlight.eyebrow}</p>
                <h2 className="mt-1 font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-4xl">{lp.spotlight.title}</h2>
                <p className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-cream/75">{lp.spotlight.text}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="mt-7 space-y-3">
                  {lp.spotlight.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-chocolate">
                        <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span className="font-body text-sm normal-case leading-relaxed tracking-normal text-cream/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <WaButton href={wa.tabela} label={lp.spotlight.cta} size="lg" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MOTIVOS */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{lp.motivos.eyebrow}</p>
              <h2 className="section-title mt-1">{lp.motivos.title}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lp.motivos.items.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-chocolate/10 text-chocolate transition-colors group-hover:bg-chocolate group-hover:text-brand-yellow">
                    <MotivoIcon icon={m.icon} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-chocolate">{m.title}</h3>
                    <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PASSOS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{lp.passos.eyebrow}</p>
              <h2 className="section-title mt-1">{lp.passos.title}</h2>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {lp.passos.items.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <li className="flex h-full flex-col gap-3 rounded-2xl bg-cream p-8">
                  <span className="font-heading text-5xl font-bold text-chocolate/20">{p.n}</span>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-chocolate">{p.title}</h3>
                  <p className="font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <WaButton href={wa.comecar} label={lp.passos.cta} size="lg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-cream-200 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{lp.depoimentos.eyebrow}</p>
              <h2 className="section-title mt-1">{lp.depoimentos.title}</h2>
              <p className="mx-auto mt-3 max-w-lg font-body text-sm normal-case leading-relaxed tracking-normal text-ink/65">{lp.depoimentos.subtitle}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5">
                <Stars />
                <span className="font-heading text-sm font-bold text-chocolate">
                  {testimonials.summary.rating.toFixed(1).replace(".", ",")} —{" "}
                  <span className="font-body normal-case tracking-normal text-muted">{testimonials.summary.count} avaliações no Google</span>
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.07}>
                <figure className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6">
                  <Stars count={r.rating} />
                  <blockquote className="flex-1 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/80">“{r.text}”</blockquote>
                  <figcaption className="font-heading text-xs font-semibold uppercase tracking-wider text-chocolate">{r.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-3xl text-cocoa">{lp.faq.eyebrow}</p>
              <h2 className="section-title mt-1">{lp.faq.title}</h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {lp.faq.items.map((it, i) => (
              <Reveal key={it.q} delay={i * 0.05}>
                <details className="group rounded-2xl bg-cream p-6 shadow-sm open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-lg font-heading text-sm font-semibold uppercase tracking-wide text-chocolate marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chocolate [&::-webkit-details-marker]:hidden">
                    {it.q}
                    <span className="mt-0.5 shrink-0 text-cocoa transition-transform group-open:rotate-45">
                      <svg aria-hidden viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" /></svg>
                    </span>
                  </summary>
                  <p className="mt-4 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/75">{it.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 text-center">
              <WaButton href={wa.duvida} label="Tirar dúvida com o vendedor" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-chocolate-texture py-20 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-script text-3xl text-gold">{lp.final.eyebrow}</p>
              <h2 className="mt-1 font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-4xl lg:text-5xl">{lp.final.title}</h2>
              <p className="mx-auto mt-4 max-w-md font-body text-base normal-case leading-relaxed tracking-normal text-cream/75">{lp.final.text}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex justify-center">
                <WaButton href={wa.comecar} label={lp.final.cta} size="lg" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {lp.final.trust.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 font-body text-xs normal-case tracking-normal text-cream/70">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="bg-chocolate-texture pb-24 pt-8 text-center sm:pb-8">
        <p className="font-body text-xs normal-case tracking-normal text-cream/70">
          © {site.year} {site.name} — Fábrica própria em Guararema‑SP. Todos os direitos reservados.
        </p>
      </footer>

      {/* BARRA FIXA MOBILE — o CTA nunca sai da tela no celular */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-chocolate/10 bg-white/95 p-3 backdrop-blur sm:hidden">
        <WaButton href={wa.hero} label={lp.hero.cta} />
      </div>
    </>
  );
}
