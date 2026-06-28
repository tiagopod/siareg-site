import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "display-trufa";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Display Trufa para PDV — Atacado Direto da Fábrica",
  description:
    "Display Trufa Siareg — expositor com trufas prontas para o ponto de venda. Solução completa para padarias, mercados e lojas. Compre no atacado em Guararema SP.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Display Trufa | Siareg Chocolates",
    description:
      "Expositor com trufas prontas para o PDV. Solução completa para revenda. Atacado direto da Siareg SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/display-trufa.webp", alt: product.name }],
  },
};

export default function DisplayTrufaPage() {
  return <ProductLanding slug={slug} />;
}
