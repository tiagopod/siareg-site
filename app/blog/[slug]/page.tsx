import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, type BlogBlock } from "@/content/blog";
import { site, salesWa } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { blogPosting, breadcrumbList } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date ? `${post.date}T00:00:00` : undefined,
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

function formatDate(iso?: string) {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-8 font-heading text-2xl text-cocoa-700">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-6 font-heading text-xl text-cocoa-700">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-1 pl-5 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "p":
    default:
      return (
        <p className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">
          {block.text}
        </p>
      );
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const published = formatDate(post.date);

  const schemas = [
    blogPosting({
      title: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      url: `/blog/${params.slug}`,
    }),
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${params.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHeader title={post.title} subtitle="Blog Siareg Chocolates" />
      <article className="bg-white py-14 sm:py-20">
        <div className="container-x mx-auto max-w-3xl">
          {published && (
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">
              {published}
            </p>
          )}

          <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-8 font-body text-lg normal-case leading-relaxed tracking-normal text-ink/80">
            {post.excerpt}
          </p>

          <div className="mt-2">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={salesWa()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow"
            >
              Fazer pedido
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border-2 border-cocoa px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
            >
              ← Voltar ao blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
