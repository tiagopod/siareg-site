import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogHero, blogPosts } from "@/content/blog";
import { site } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/jsonld";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog | Receitas e Dicas de Chocolate",
  description:
    "Artigos sobre chocolates artesanais, receitas, dicas para revendedores e novidades da Siareg Chocolates. Fábrica em Guararema SP desde 2004.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Siareg Chocolates | Receitas e Dicas",
    description:
      "Artigos sobre chocolates artesanais, receitas, dicas para revendedores e novidades da Siareg Chocolates.",
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHeader title={blogHero.title} subtitle={blogHero.subtitle} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <Reveal key={post.slug} delay={(idx % 3) * 0.07}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex grow flex-col p-6">
                  <span className="font-script text-2xl text-cocoa">Siareg</span>
                  <h2 className="mt-1 font-heading text-lg font-semibold leading-snug text-cocoa-700 group-hover:text-cocoa">
                    {post.title}
                  </h2>
                  <p className="mt-2 grow font-body text-sm normal-case leading-relaxed tracking-normal text-ink/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-gold">
                    Ler mais →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
