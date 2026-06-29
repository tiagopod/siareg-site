import type { Metadata } from "next";
import { productsIntro, productsByCategory } from "@/content/products";
import { produtosPage } from "@/content/pages";
import { site, salesWa } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/jsonld";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Catálogo de Chocolates para Atacado e Revenda",
  description:
    "Linha completa Siareg para revenda: Pão de Mel artesanal, Trufas, Bombons, Blisters, Copinhos e Ovos de Páscoa. Pedidos no atacado direto da fábrica em Guararema SP.",
  alternates: { canonical: "/produtos" },
  openGraph: {
    title: "Catálogo de Chocolates para Atacado | Siareg Chocolates",
    description:
      "Linha completa Siareg para revenda: Pão de Mel artesanal, Trufas, Bombons, Blisters, Copinhos e Ovos de Páscoa. Pedidos no atacado direto da fábrica em Guararema SP.",
    url: `${site.url}/produtos`,
  },
};

export default function ProdutosPage() {
  const waLink = salesWa();
  const groups = productsByCategory();

  return (
    <>
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Produtos", path: "/produtos" }])} />
      <PageHeader title={produtosPage.hero.title} subtitle={produtosPage.hero.subtitle} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-body text-base normal-case leading-relaxed tracking-normal text-ink/70">
              {productsIntro}
            </p>
          </Reveal>

          <div className="mt-14 space-y-16">
            {groups.map((group) => (
              <div key={group.category}>
                <Reveal>
                  <div className="mb-8 text-center">
                    <h2 className="section-title">{group.category}</h2>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                  {group.items.map((product, idx) => (
                    <Reveal key={product.slug} delay={(idx % 4) * 0.06}>
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <a href={site.catalogPdf} target="_blank" rel="noopener noreferrer" className="btn-yellow">
              Baixar catálogo completo
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
            >
              Fazer pedido
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
