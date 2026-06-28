import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "paodemel-mini";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Mini Pão de Mel para Atacado, Eventos e Revenda",
  description:
    "Mini Pão de Mel Siareg — porção individual perfeita para eventos, festas e presentes. Compre no atacado direto da fábrica em Guararema SP. Cód. 124.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Mini Pão de Mel | Siareg Chocolates",
    description:
      "Mini Pão de Mel individual, ideal para lembranças e eventos. Atacado direto da fábrica Siareg SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/paodemel-mini.webp", alt: product.name }],
  },
};

export default function PaodemelMiniPage() {
  return <ProductLanding slug={slug} />;
}
