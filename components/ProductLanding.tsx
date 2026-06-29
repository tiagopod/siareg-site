/**
 * ProductLanding — template premium reutilizável de página de produto.
 * Focado em conversão (atacado/revenda) + SEO (Schema.org Product).
 * Server Component puro — sem "use client".
 */

import Image from "next/image";
import Link from "next/link";
import { getProduct, products } from "@/content/products";
import { getProductLp, type Benefit } from "@/content/produtos-lp";
import { site, salesWa } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import { breadcrumbList, faqPage } from "@/lib/jsonld";
import { Whatsapp, Download, ArrowLeft, Truck, Store, Cart, Star, Shield, Heart, Clock, Tag, Box, Users, Gift, Leaf } from "@/components/icons-landing";

// ── Ícone helper ──────────────────────────────────────────────────────────────
function BenefitIcon({ icon }: { icon: Benefit["icon"] }) {
  const cls = "h-5 w-5 flex-shrink-0 text-gold";
  switch (icon) {
    case "star":    return <Star    className={cls} />;
    case "truck":   return <Truck   className={cls} />;
    case "box":     return <Box     className={cls} />;
    case "leaf":    return <Leaf    className={cls} />;
    case "heart":   return <Heart   className={cls} />;
    case "clock":   return <Clock   className={cls} />;
    case "tag":     return <Tag     className={cls} />;
    case "shield":  return <Shield  className={cls} />;
    case "users":   return <Users   className={cls} />;
    case "gift":    return <Gift    className={cls} />;
    default:        return <Star    className={cls} />;
  }
}

// ── Estrelas decorativas ───────────────────────────────────────────────────────
function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5 text-star-amber" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

// ── Galeria de imagens ─────────────────────────────────────────────────────────
function Gallery({ images, name }: { images: string[]; name: string }) {
  if (!images.length) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-black/5 bg-cream/40 shadow-xl">
        <span className="font-script text-5xl text-cocoa/40">Siareg</span>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/5 bg-cream/40 shadow-xl">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width:1024px) 90vw, 45vw"
          className="object-contain p-6"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className={`grid gap-3 ${images.length === 2 ? "grid-cols-2" : images.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
          {images.slice(1).map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-cream/40"
            >
              <Image
                src={src}
                alt={name}
                fill
                sizes="(max-width:1024px) 30vw, 15vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── CTA Buttons ───────────────────────────────────────────────────────────────
function CTAButtons({
  waLink,
  onDark = false,
}: {
  waLink: string;
  name: string;
  onDark?: boolean;
}) {
  // The outlined "Baixar catálogo" button switches palette by context — cocoa on light bg,
  // brand-yellow on the dark chocolate-texture hero/CTA. Without this the text was ~1:1 contrast.
  const outlineCls = onDark
    ? "border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-chocolate"
    : "border-cocoa text-cocoa-700 hover:bg-cocoa hover:text-cream";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-whatsapp-hover hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
      >
        <Whatsapp className="h-5 w-5" />
        Pedir no WhatsApp
      </a>
      <a
        href={site.catalogPdf}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 font-heading text-sm font-semibold uppercase tracking-wider transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow ${outlineCls}`}
      >
        <Download className="h-5 w-5" />
        Baixar catálogo
      </a>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────────
export default function ProductLanding({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) return null;

  const lp = getProductLp(slug);

  const waMessage = `Olá, gostaria de mais informações sobre ${product.name}${
    product.code ? ` (Cód. ${product.code})` : ""
  }. Tenho interesse em comprar no atacado.`;
  const waLink = salesWa(waMessage);

  const images = [product.image, ...(product.gallery ?? [])].filter(Boolean) as string[];

  // Produtos relacionados (mesma categoria primeiro) — links internos p/ SEO + navegação
  const sameCategory = products.filter((p) => p.slug !== slug && p.category === product.category);
  const otherProducts = products.filter((p) => p.slug !== slug && p.category !== product.category);
  const relatedProducts = [...sameCategory, ...otherProducts].slice(0, 4);

  // JSON-LD Schema.org Product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image ? [`${site.url}${product.image}`] : undefined,
    description: product.tagline ?? product.description[0],
    brand: {
      "@type": "Brand",
      name: "Siareg Chocolates",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${site.url}/${slug}`,
      seller: {
        "@type": "Organization",
        name: "Siareg Chocolates",
      },
    },
    ...(product.code ? { productID: product.code } : {}),
  };

  // Schema.org adicional: trilha de navegação + FAQ (rich results)
  const schemas: object[] = [
    jsonLd,
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Produtos", path: "/produtos" },
      { name: product.name, path: `/${slug}` },
    ]),
  ];
  if (lp?.faq?.length) schemas.push(faqPage(lp.faq));

  return (
    <>
      {/* JSON-LD: Product + BreadcrumbList + FAQPage */}
      <JsonLd data={schemas} />

      {/* ── HERO SECTION ── */}
      <section className="bg-chocolate-texture py-12 text-cream sm:py-16">
        <div className="container-x">
          {/* Breadcrumb */}
          <nav className="mb-4 font-body text-xs normal-case tracking-normal text-cream/60">
            <Link href="/" className="hover:text-brand-yellow">Home</Link>
            <span className="px-1">/</span>
            <Link href="/produtos" className="hover:text-brand-yellow">Produtos</Link>
            <span className="px-1">/</span>
            <span className="text-cream/90">{product.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            {/* Imagem hero — sem Reveal (above fold) */}
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 shadow-2xl lg:max-w-none">
              {images[0] ? (
                <Image
                  src={images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width:1024px) 80vw, 45vw"
                  className="object-contain p-6"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="font-script text-6xl text-cream/20">Siareg</span>
                </div>
              )}
            </div>

            {/* Info hero — sem Reveal (above fold) */}
            <div>
                {/* Prova social */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 ring-1 ring-cream/20">
                  <Stars />
                  <span className="font-body text-xs normal-case tracking-normal text-cream/90">
                    {testimonials.summary.rating.toFixed(1).replace(".", ",")} no Google · {testimonials.summary.count} avaliações
                  </span>
                </div>

                <p className="font-script text-3xl text-brand-yellow">A deliciosa receita Siareg</p>
                <h1 className="mt-1 text-4xl font-bold text-cream sm:text-5xl">{product.name}</h1>

                {product.code && (
                  <span className="mt-3 inline-block rounded-full bg-brand-yellow px-4 py-1 font-heading text-sm font-semibold uppercase tracking-wider text-chocolate">
                    Cód. {product.code}
                  </span>
                )}

                {product.tagline && (
                  <p className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-cream/80">
                    {product.tagline}
                  </p>
                )}

                {/* Badges */}
                {lp?.badges && lp.badges.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {lp.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-cream/20 bg-cream/10 px-3 py-1 font-body text-xs normal-case tracking-normal text-cream/75"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7">
                  <CTAButtons waLink={waLink} name={product.name} onDark />
                </div>

                <p className="mt-5 font-body text-sm normal-case tracking-normal text-cream/70">
                  Atacado direto da fábrica · Guararema, SP · Desde 2004
                </p>
              </div>
            </div>
          </div>
      </section>
      {/* ── GALERIA + DESCRIÇÃO ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Gallery images={images} name={product.name} />
          </div>

          <div>
            <div>
              <h2 className="section-title">{product.name}</h2>

              <div className="mt-5 space-y-4">
                {product.description.map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-base normal-case leading-relaxed tracking-normal text-ink/75"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Benefícios */}
              {lp?.benefits && lp.benefits.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-cocoa-700">
                    Diferenciais
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {lp.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <BenefitIcon icon={b.icon} />
                        <span className="font-body text-sm normal-case leading-relaxed tracking-normal text-ink/80">
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8">
                <CTAButtons waLink={waLink} name={product.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE REVENDER ── */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
              <h2 className="section-title">Por que revender {product.name} Siareg?</h2>
              <p className="mt-3 font-body text-base normal-case leading-relaxed tracking-normal text-ink/70">
                Chocolates Siareg chegam direto da fábrica em Guararema SP — preço de fábrica, qualidade garantida e entrega ágil para toda a Grande SP e interior.
              </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cards fixos de vantagens gerais */}
            {[
              { icon: <Tag className="h-6 w-6 text-gold" />, title: "Preço de Fábrica", text: "Compre direto da fonte e maximize sua margem de lucro na revenda." },
              { icon: <Truck className="h-6 w-6 text-gold" />, title: "Entrega Ágil", text: "Atendemos Grande SP, interior e litoral paulista com logística própria." },
              { icon: <Store className="h-6 w-6 text-gold" />, title: "Giro Rápido", text: "Produtos Siareg têm alta rotatividade — estoque que não para." },
              { icon: <Shield className="h-6 w-6 text-gold" />, title: "Qualidade Garantida", text: "Produção controlada com ingredientes selecionados desde 2004." },
              { icon: <Cart className="h-6 w-6 text-gold" />, title: "Linha Completa", text: "Pão de Mel, Trufas, Bombons, Displays e mais — tudo em um só fornecedor." },
              { icon: <Users className="h-6 w-6 text-gold" />, title: "Suporte Comercial", text: "Time dedicado para ajudá-lo a montar o mix certo para seu negócio." },
            ].map((card, i) => (
              <div key={card.title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream">
                    {card.icon}
                  </div>
                  <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-chocolate">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Selling points específicos do produto */}
          {lp?.sellingPoints && lp.sellingPoints.length > 0 && (
            <div>
              <div className="mt-10 rounded-2xl bg-chocolate p-7 text-cream sm:p-10">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-yellow">
                  {product.name} — por que escolher este produto
                </h3>
                <ul className="mt-5 space-y-3">
                  {lp.sellingPoints.map((sp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-brand-yellow">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-body text-sm normal-case leading-relaxed tracking-normal text-cream/85">
                        {sp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
              <Stars />
              <p className="mt-2 font-body text-base normal-case leading-relaxed tracking-normal text-ink/70">
                <strong className="text-ink">{testimonials.summary.rating.toFixed(1).replace(".", ",")} estrelas no Google</strong> · Avaliado por{" "}
                {testimonials.summary.count} clientes
              </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.reviews.slice(0, 3).map((r, i) => (
              <div key={r.name}>
                <div className="flex h-full flex-col rounded-2xl bg-cream p-6">
                  <Stars n={r.rating} />
                  <p className="mt-3 flex-1 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/80 italic">
                    "{r.text}"
                  </p>
                  <p className="mt-4 font-body text-xs normal-case tracking-normal text-muted">
                    {r.name} · {r.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {lp?.faq && lp.faq.length > 0 && (
        <section className="bg-cream py-14 sm:py-20">
          <div className="container-x mx-auto max-w-3xl">
            <div>
              <h2 className="section-title text-center">Perguntas Frequentes</h2>
            </div>
            <div className="mt-8 space-y-3">
              {lp.faq.map((item, i) => (
                <div key={i}>
                  <details className="group rounded-2xl bg-white ring-1 ring-black/5 transition open:shadow-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-heading text-sm font-semibold uppercase tracking-wide text-cocoa-700 list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cocoa">
                      <span>{item.question}</span>
                      <span className="flex-shrink-0 text-cocoa-700 transition group-open:rotate-45">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="font-body text-sm normal-case leading-relaxed tracking-normal text-ink/75">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRODUTOS RELACIONADOS (links internos) ── */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-14 sm:py-16">
          <div className="container-x">
            <div className="text-center">
              <h2 className="section-title">Outros produtos Siareg</h2>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ── */}
      <section className="bg-chocolate-texture py-14 text-center sm:py-20">
        <div className="container-x mx-auto max-w-2xl">
          <div>
            <p className="font-script text-4xl text-brand-yellow">Pronto para fazer seu pedido?</p>
            <h2 className="mt-1 text-3xl font-bold text-cream sm:text-4xl">
              Fale com nosso time comercial
            </h2>
            <p className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-cream/75">
              Condições especiais de atacado, mix personalizado e entrega ágil. Chame no WhatsApp agora e receba uma proposta.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButtons waLink={waLink} name={product.name} onDark />
            </div>
            <p className="mt-6">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-1.5 font-body text-sm normal-case tracking-normal text-cream/60 hover:text-brand-yellow"
              >
                <ArrowLeft className="h-4 w-4" />
                Ver todos os produtos
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
