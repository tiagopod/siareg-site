import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "trufas-sortidas";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Trufas Sortidas para Atacado e Revenda",
  description:
    "Caixa de Trufas Sortidas Siareg — mix de sabores premium para revender. Preço de fábrica, entrega para SP e interior. Cód. 1901. Compre no atacado.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Trufas Sortidas | Siareg Chocolates",
    description:
      "Mix de trufas sortidas com sabores variados. Atacado direto da fábrica Siareg em Guararema SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/trufas-sortidas.webp", alt: product.name }],
  },
};

export default function TrufasSortidasPage() {
  return <ProductLanding slug={slug} />;
}
