"use client";

import Image from "next/image";
import { partners } from "@/content/home";
import Reveal from "./Reveal";

export default function Partners() {
  const loop = [...partners.logos, ...partners.logos];

  return (
    <section className="bg-cream py-8 sm:py-10">
      <div className="container-x mb-6">
        <Reveal>
          <h2 className="section-title text-center">{partners.title}</h2>
        </Reveal>
      </div>

      <div
        className="group relative overflow-hidden"
        tabIndex={-1}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream to-transparent" />
        <div
          className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
          aria-label="Parceiros que distribuem Siareg"
        >
          {loop.map((p, idx) => (
            <div key={idx} className="relative h-16 w-36 shrink-0">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
