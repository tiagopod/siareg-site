"use client";

import Image from "next/image";
import Link from "next/link";
import { about, tagline } from "@/content/home";
import Reveal from "./Reveal";

export default function About() {
  return (
    <>
      {/* Tagline band */}
      <section className="bg-brand-yellow py-7">
        <div className="container-x text-center">
          <p className="font-script text-3xl leading-tight text-chocolate sm:text-4xl">{tagline}</p>
        </div>
      </section>

      {/* About */}
      <section className="bg-chocolate-texture py-16 text-cream sm:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-4xl text-brand-yellow">{about.eyebrow}</p>
            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">{about.title}</h2>
            <p className="mt-5 max-w-xl font-body text-base normal-case leading-relaxed tracking-normal text-cream/85">
              {about.body}
            </p>
            <Link href={about.ctaHref} className="btn-yellow mt-7">{about.ctaLabel}</Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-4 ring-cream/10">
              <Image src={about.image} alt="Fábrica de chocolates Siareg" fill sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
