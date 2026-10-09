import type { Metadata } from "next";
import { site } from "@/content/site";
import { cidades, lpCidade } from "@/content/lp-cidades";
import CityPaoDeMelLanding from "@/components/CityPaoDeMelLanding";

const cidade = cidades.assis;
const { seo } = lpCidade(cidade);

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `/${cidade.slug}` },
  openGraph: {
    title: `${seo.title} | ${site.name}`,
    description: seo.description,
    url: `${site.url}/${cidade.slug}`,
    images: [{ url: `${site.url}/images/products/paodemel.webp`, width: 705, height: 471, alt: "Pão de Mel Siareg — caixa com unidades embaladas" }],
  },
};

export default function AssisPage() {
  return <CityPaoDeMelLanding cidade={cidade} />;
}
