import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "miniovinhos-chocolate";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Mini Ovinhos de Chocolate para Atacado e Revenda",
  description:
    "Mini Ovinhos de Chocolate Siareg em pote — perfeitos para a Páscoa e datas especiais. Compre no atacado direto da fábrica em Guararema SP com preço de fábrica.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Mini Ovinhos de Chocolate | Siareg Chocolates",
    description:
      "Mini Ovinhos de Chocolate em pote para revenda na Páscoa. Atacado direto da fábrica Siareg SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/miniovinhos-chocolate.png", alt: product.name }],
  },
};

export default function MiniovinhoPage() {
  return <ProductLanding slug={slug} />;
}
