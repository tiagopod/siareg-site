import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "palitinhos-chocolate";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Palitinhos de Chocolate para Atacado e Revenda",
  description:
    "Palitinhos de Chocolate crocantes da Siareg — snack irresistível para revender. Preço de fábrica, entrega em SP. Cód. 118. Ideal para caixa e impulso de compra.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Palitinhos de Chocolate | Siareg Chocolates",
    description:
      "Palitinhos crocantes de chocolate premium. Atacado direto da fábrica Siareg em Guararema SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/palitinhos-chocolate.webp", alt: product.name }],
  },
};

export default function PalitinhosPage() {
  return <ProductLanding slug={slug} />;
}
