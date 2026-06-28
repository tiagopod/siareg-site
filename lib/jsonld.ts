/**
 * Construtores de JSON-LD (Schema.org) — usados para rich results no Google.
 * Renderize o resultado com <JsonLd data={...} /> (components/JsonLd.tsx).
 */
import { site } from "@/content/site";

const BASE = site.url;

/** Converte um caminho relativo em URL absoluta (exige absoluta no Schema.org). */
export const abs = (path: string): string =>
  path.startsWith("http") ? path : `${BASE}${path.startsWith("/") ? "" : "/"}${path}`;

/** Trilha de navegação (aparece como breadcrumb no resultado de busca). */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** Perguntas frequentes (elegível para rich result de FAQ). */
export function faqPage(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Artigo do blog (elegível para rich result de artigo). */
export function blogPosting(opts: {
  title: string;
  description?: string;
  image?: string;
  datePublished?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.image ? { image: [abs(opts.image)] } : {}),
    ...(opts.datePublished
      ? { datePublished: opts.datePublished, dateModified: opts.datePublished }
      : {}),
    author: { "@type": "Organization", name: site.name, url: BASE },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: abs(site.logo) },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.url) },
  };
}

/** Produto (elegível para rich result de produto). */
export function productSchema(opts: {
  name: string;
  description?: string;
  image?: string;
  gallery?: string[];
  code?: string;
  path: string;
}) {
  const imgs = [opts.image, ...(opts.gallery ?? [])].filter(Boolean) as string[];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    ...(imgs.length ? { image: imgs.map(abs) } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    brand: { "@type": "Brand", name: site.name },
    ...(opts.code ? { sku: opts.code, productID: opts.code } : {}),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: abs(opts.path),
      seller: { "@type": "Organization", name: site.name },
    },
  };
}

/** Identidade do site (nome + idioma) — incluído em todas as páginas via layout. */
export function website() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: BASE,
    inLanguage: "pt-BR",
    publisher: { "@type": "Organization", name: site.name, url: BASE },
  };
}
