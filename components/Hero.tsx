"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { hero } from "@/content/home";
import { salesWa } from "@/content/site";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Hero() {
  const slides = hero.slides;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback(
    (n: number) => setI((p) => (n + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(i + 1), hero.autoplayMs);
    return () => clearInterval(t);
  }, [i, go, paused, reduce]);

  const link = salesWa();
  const trackWidthPct = slides.length * 100;
  const stepPct = 100 / slides.length;

  return (
    <section className="relative bg-cream-200">
      <div
        className="relative mx-auto aspect-[1391/442] w-full max-w-[1600px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Banners promocionais"
      >
        <div
          className={`flex h-full ${reduce ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{
            width: `${trackWidthPct}%`,
            transform: `translateX(-${i * stepPct}%)`,
          }}
        >
          {slides.map((s, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-full shrink-0"
              style={{ width: `${stepPct}%` }}
              aria-label={`${s.alt} — abrir WhatsApp`}
              aria-roledescription="slide"
              aria-hidden={idx !== i}
              tabIndex={idx === i ? 0 : -1}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
            </a>
          ))}
        </div>

        {/* Arrows — 44px hitbox at all viewports */}
        <button
          onClick={() => go(i - 1)}
          aria-label="Slide anterior"
          className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:left-4"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Próximo slide"
          className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/30 text-white backdrop-blur transition hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow sm:right-4"
        >
          <ArrowRight />
        </button>

        {/* Dots — visual 8px, hitbox 44px via padding */}
        <div className="absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2 gap-0">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              aria-current={idx === i}
              className="grid h-11 w-11 place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
            >
              <span
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-6 bg-brand-yellow" : "w-2 bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
