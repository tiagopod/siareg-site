"use client";

import Image from "next/image";
import { channels, ctaCards } from "@/content/home";
import { site, wa, DEFAULT_WA_MESSAGE } from "@/content/site";
import { channelIcons } from "./icons";
import Reveal from "./Reveal";

export default function Channels() {
  const link = wa(site.whatsapp.commercial, DEFAULT_WA_MESSAGE);

  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="container-x">
        {/* Icon cards */}
        <div className="grid gap-8 sm:grid-cols-3">
          {channels.map((c, idx) => {
            const Icon = channelIcons[c.icon as keyof typeof channelIcons];
            return (
              <Reveal key={c.title} delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-cocoa text-cream shadow-md">
                    <Icon width={30} height={30} />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-cocoa-700">{c.title}</h2>
                  <p className="mt-1 max-w-xs font-body text-sm normal-case tracking-normal text-muted">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Image CTA cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {ctaCards.map((c, idx) => (
            <Reveal key={c.alt} delay={idx * 0.08}>
              <a href={link} target="_blank" rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Image src={c.image} alt={c.alt} width={351} height={216} className="h-auto w-full object-cover" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
