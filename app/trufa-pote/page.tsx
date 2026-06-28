import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "trufa-pote";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Trufa Pote para Atacado e Revenda",
  description:
    "Trufas Siareg em pote — lançamento exclusivo com variedade de sabores. Preço de fábrica no atacado. Compre direto da Siareg em Guararema SP. Cód. 215.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Trufa Pote | Siareg Chocolates",
    description:
      "Trufas no pote com variedade de sabores. Atacado direto da fábrica Siareg em Guararema SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/trufa-pote.png", alt: product.name }],
  },
};

export default function TrufaPotePage() {
  return <ProductLanding slug={slug} />;
}
