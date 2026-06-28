import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "paodemel";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Pão de Mel Artesanal para Atacado e Revenda",
  description:
    "Pão de Mel tradicional Siareg — receita original desde 2004, com especiarias e chocolate fino. Compre no atacado direto da fábrica em Guararema SP. Cód. 100.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Pão de Mel Artesanal | Siareg Chocolates",
    description:
      "Pão de Mel com receita tradicional desde 2004. Atacado direto da fábrica Siareg em Guararema SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/paodemel.webp", alt: product.name }],
  },
};

export default function PaodemelPage() {
  return <ProductLanding slug={slug} />;
}
