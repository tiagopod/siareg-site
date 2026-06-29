import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, ROOT_LP_SLUGS } from "@/content/products";
import { site, salesWa } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, productSchema } from "@/lib/jsonld";

export const dynamicParams = false;

// Os 9 produtos com página própria em URL raiz (ex.: /paodemel) são excluídos
// daqui para não duplicar conteúdo. Só os demais produtos usam /produtos/<slug>.
export function generateStaticParams() {
  const rootSlugs = ROOT_LP_SLUGS as readonly string[];
  return products.filter((p) => !rootSlugs.includes(p.slug)).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Produto" };
  const desc = product.tagline ?? product.description[0];
  return {
    title: `${product.name} | Chocolate para Atacado e Revenda`,
    description: desc,
    alternates: { canonical: `/produtos/${params.slug}` },
    openGraph: {
      title: `${product.name} | Siareg Chocolates`,
      description: desc,
      url: `${site.url}/produtos/${params.slug}`,
      images: product.image
        ? [{ url: product.image, alt: product.name }]
        : [{ url: "/images/hero/siareg-tradicao-2004.png", alt: "Siareg Chocolates" }],
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const waMessage = `Olá, gostaria de mais informações sobre o produto ${product.name}${
    product.code ? ` (Cód. ${product.code})` : ""
  }.`;
  const waLink = salesWa(waMessage);
  const images = [product.image, ...(product.gallery ?? [])].filter(Boolean) as string[];

  const schemas = [
    productSchema({
      name: product.name,
      description: product.tagline ?? product.description[0],
      image: product.image,
      gallery: product.gallery,
      code: product.code,
      path: `/produtos/${params.slug}`,
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Produtos", path: "/produtos" },
      { name: product.name, path: `/produtos/${params.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHeader title={product.name} subtitle={product.tagline} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          {/* Images */}
          <Reveal>
            <div className="space-y-4">
              {images.length > 0 ? (
                <>
                  <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-black/5 bg-cream/40 shadow-xl">
                    <Image
                      src={images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width:1024px) 90vw, 45vw"
                      className="object-contain p-6"
                      priority
                    />
                  </div>
                  {images.length > 1 && (
                    <div className="grid grid-cols-3 gap-3">
                      {images.slice(1).map((src) => (
                        <div
                          key={src}
                          className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-cream/40"
                        >
                          <Image
                            src={src}
                            alt={product.name}
                            fill
                            sizes="(max-width:1024px) 30vw, 15vw"
                            className="object-contain p-2"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-black/5 bg-cream/40 shadow-xl">
                  <span className="font-script text-5xl text-cocoa/40">Siareg</span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.15}>
            <div>
              <p className="font-script text-4xl text-cocoa">A deliciosa receita Siareg</p>
              <h2 className="section-title mt-1">{product.name}</h2>

              {product.code && (
                <span className="mt-4 inline-block rounded-full bg-brand-yellow px-4 py-1 font-heading text-sm font-semibold uppercase tracking-wider text-chocolate">
                  Cód. {product.code}
                </span>
              )}

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

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-yellow">
                  Fazer pedido no WhatsApp
                </a>
                <a
                  href={site.catalogPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
                >
                  Ver catálogo
                </a>
              </div>

              <p className="mt-6 font-body text-sm normal-case tracking-normal text-muted">
                <Link href="/produtos" className="font-semibold text-cocoa-700 hover:text-cocoa">
                  ← Voltar para todos os produtos
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
