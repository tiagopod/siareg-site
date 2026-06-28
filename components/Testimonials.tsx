"use client";

import { testimonials } from "@/content/testimonials";
import Reveal from "./Reveal";

function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 text-star-google ${className}`} aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          className={i < n ? "fill-current" : "fill-star-empty"}
        >
          <path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.8 5.8 20.9l1.4-6.9L2 9.3l7-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 1.9-1.6 4.8-4.5 6.7l6.5 5c3.8-3.5 6-8.7 6-15z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.9-12.5-9.2l-7.1 5.5C7.6 41 15.2 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z" />
      <path fill="#EA4335" d="M24 10.5c3.2 0 6 1.1 8.2 3.3l6.1-6.1C34.9 4.1 29.9 2 24 2 15.2 2 7.6 7 4.4 14.1l7.1 5.5C13.3 14.4 18.2 10.5 24 10.5z" />
    </svg>
  );
}

export default function Testimonials() {
  const { summary, reviews } = testimonials;
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <p className="text-center font-script text-4xl text-cocoa">{testimonials.eyebrow}</p>
          <h2 className="mt-1 text-center text-2xl font-semibold text-cocoa-700 sm:text-3xl">{testimonials.title}</h2>
        </Reveal>

        {/* Google rating summary */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-6 flex max-w-md flex-col items-center gap-2 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-2">
              <GoogleG />
              <span className="font-heading text-lg font-semibold normal-case tracking-normal text-ink">Avaliações no {summary.source}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-3xl font-bold text-cocoa-700">{summary.rating.toFixed(1).replace(".", ",")}</span>
              <Stars n={Math.round(summary.rating)} />
            </div>
            <p className="font-body text-xs normal-case tracking-normal text-muted">Com base em {summary.count} avaliações</p>
            <a href={summary.googleUrl} target="_blank" rel="noopener noreferrer"
              className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-gold hover:underline">
              Ver no Google →
            </a>
          </div>
        </Reveal>

        {/* Review cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 6).map((r, idx) => (
            <Reveal key={r.name + idx} delay={(idx % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cocoa font-heading text-sm font-semibold text-cream">
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-sm font-semibold normal-case tracking-normal text-ink">{r.name}</p>
                    <p className="font-body text-xs normal-case tracking-normal text-muted">{r.date}</p>
                  </div>
                  <GoogleG size={18} />
                </div>
                <Stars n={r.rating} className="mt-3" />
                <blockquote className="mt-2 grow font-body text-sm normal-case leading-relaxed tracking-normal text-ink/80">
                  {r.text}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
