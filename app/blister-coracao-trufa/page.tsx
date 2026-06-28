import type { Metadata } from "next";
import { getProduct } from "@/content/products";
import { site } from "@/content/site";
import ProductLanding from "@/components/ProductLanding";

const slug = "blister-coracao-trufa";
const product = getProduct(slug)!;

export const metadata: Metadata = {
  title: "Blister Coração Trufa para Atacado e Revenda",
  description:
    "Blister Coração com Trufa Siareg — presente elegante para datas especiais. Alta percepção de valor, ideal para revenda. Compre no atacado direto da fábrica. Cód. 128.",
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: "Blister Coração Trufa | Siareg Chocolates",
    description:
      "Trufa em embalagem coração — perfeita para presentes e datas comemorativas. Atacado Siareg SP.",
    url: `${site.url}/${slug}`,
    images: [{ url: product.image ?? "/images/products/blister-coracao-trufa.webp", alt: product.name }],
  },
};

export default function BlisterCoracaoPage() {
  return <ProductLanding slug={slug} />;
}
