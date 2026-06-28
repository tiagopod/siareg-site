import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { products, productHref, ROOT_LP_SLUGS } from "@/content/products";

const BASE = "https://siaregchocolates.com.br";
const rootSlugs = ROOT_LP_SLUGS as readonly string[];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/produtos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/sobre-nos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Campanhas (fora do menu, mas indexáveis e acessíveis por link direto)
    { url: `${BASE}/campanha-chocolates-siareg`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/siareg-comercial-m`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Cada produto na sua URL canônica (raiz p/ os 9 LPs, /produtos/<slug> p/ os demais).
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}${productHref(p.slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: rootSlugs.includes(p.slug) ? 0.8 : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date ? new Date(`${p.date}T00:00:00`) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
