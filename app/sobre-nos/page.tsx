import type { Metadata } from "next";
import Image from "next/image";
import { sobre } from "@/content/pages";
import { site } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/jsonld";
import Partners from "@/components/Partners";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre a Siareg | Fábrica de Chocolates em Guararema SP desde 2004",
  description:
    "Conheça a história da Siareg Chocolates, fábrica fundada em 2004 em Guararema SP. Receitas artesanais de Pão de Mel, Trufas e Bombons. Missão, visão e valores de uma marca de tradição.",
  alternates: { canonical: "/sobre-nos" },
  openGraph: {
    title: "Sobre a Siareg Chocolates | Fábrica em Guararema SP desde 2004",
    description:
      "Conheça a história da Siareg Chocolates, fábrica fundada em 2004 em Guararema SP. Receitas artesanais de Pão de Mel, Trufas e Bombons.",
    url: `${site.url}/sobre-nos`,
  },
};

export default function SobreNosPage() {
  return (
    <>
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Sobre Nós", path: "/sobre-nos" }])} />
      <PageHeader title={sobre.hero.title} subtitle={sobre.hero.subtitle} />

      {/* Origin story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-4xl text-cocoa">{sobre.origin.eyebrow}</p>
            <h2 className="mt-1 section-title">{sobre.origin.title}</h2>
            {sobre.origin.body.map((p, i) => (
              <p key={i} className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl">
              <Image src={sobre.origin.image} alt="Fábrica Siareg" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recipe */}
      <section className="bg-cream py-16 text-center sm:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <p className="font-script text-4xl text-cocoa">{sobre.recipe.eyebrow}</p>
            <h2 className="mt-1 section-title">{sobre.recipe.title}</h2>
            <p className="mt-4 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">{sobre.recipe.body}</p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-chocolate-texture py-16 text-cream sm:py-20">
        <div className="container-x text-center">
          <Reveal>
            <p className="font-script text-4xl text-brand-yellow">{sobre.values.eyebrow}</p>
            <h2 className="mx-auto mt-1 max-w-3xl text-3xl font-bold sm:text-4xl">{sobre.values.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sobre.values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-cream/5 p-8 ring-1 ring-cream/10">
                  <h3 className="text-2xl font-bold text-brand-yellow">{v.title}</h3>
                  <p className="mt-3 font-body text-sm normal-case leading-relaxed tracking-normal text-cream/85">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </>
  );
}
