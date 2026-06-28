import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "copinhos-chocolate";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Copinhos de Chocolate para Atacado — Licor e Recheio",
  description:
    "Copinhos de Chocolate Siareg para licores, recheios e sobremesas. Ideais para eventos e festas. Cód. 131. Compre no atacado direto da fábrica em Guararema SP.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Copinhos de Chocolate | Siareg Chocolates",
    description:
      "Copinhos de chocolate premium para licores e recheios. Perfeitos para eventos. Atacado Siareg SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/copinhos-chocolate.webp", alt: product.name }],
  },
};

export default function CopinhosPage() {
  return <ProductLanding slug={slug} />;
}
