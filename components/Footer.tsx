"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, wa, DEFAULT_WA_MESSAGE } from "@/content/site";
import { Facebook, Instagram, Mail, Phone, Pin } from "./icons";

export default function Footer() {
  const [tab, setTab] = useState(0);
  const regions = site.footer.regions;

  return (
    <footer className="bg-chocolate-texture text-cream">
      {/* Coverage tabs */}
      <div className="border-b border-cream/10">
        <div className="container-x py-10">
          <div
            role="tablist"
            aria-label="Regiões de atendimento"
            className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto pb-3"
          >
            {regions.map((r, idx) => (
              <button
                key={r.label}
                role="tab"
                aria-selected={idx === tab}
                aria-controls={`region-panel-${idx}`}
                id={`region-tab-${idx}`}
                onClick={() => setTab(idx)}
                className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-4 py-3 font-heading text-xs font-medium uppercase tracking-wider transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow ${
                  idx === tab ? "bg-brand-yellow text-chocolate" : "bg-cream/5 text-cream/80 hover:bg-cream/10"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
          <p
            id={`region-panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`region-tab-${tab}`}
            className="mt-3 max-w-3xl font-body text-sm normal-case leading-relaxed tracking-normal text-cream/80"
          >
            {regions[tab].text}
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        {/* Contact */}
        <div>
          <h5 className="text-lg font-semibold text-brand-yellow">Contato</h5>
          <ul className="mt-4 space-y-3 font-body text-sm normal-case tracking-normal text-cream/85">
            <li className="flex items-start gap-3">
              <Pin width={18} height={18} className="mt-0.5 shrink-0 text-brand-yellow" />
              <span>{site.contact.address}</span>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-brand-yellow">
                <Mail width={18} height={18} className="shrink-0 text-brand-yellow" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={wa(site.whatsapp.sales, DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-yellow">
                <Phone width={18} height={18} className="shrink-0 text-brand-yellow" />
                {site.contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        {/* Brand */}
        <div className="flex flex-col items-start gap-4 md:items-center md:text-center">
          <Link href="/"><Image src={site.logo} alt={site.name} width={130} height={64} className="h-14 w-auto object-contain" /></Link>
          <h5 className="text-lg font-semibold">{site.name}</h5>
          <p className="max-w-sm font-body text-sm normal-case leading-relaxed tracking-normal text-cream/75">{site.footer.about}</p>
        </div>

        {/* Social + nav */}
        <div className="md:text-right">
          <h5 className="text-lg font-semibold text-brand-yellow">Siga a Siareg</h5>
          <div className="mt-4 flex gap-3 md:justify-end">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition hover:bg-brand-yellow hover:text-chocolate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"><Facebook /></a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition hover:bg-brand-yellow hover:text-chocolate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"><Instagram /></a>
          </div>
          <nav className="mt-6 flex flex-col gap-2 font-body text-sm normal-case tracking-normal text-cream/80 md:items-end">
            {site.nav.map((n) => (
              <Link key={n.label} href={n.href} target={"external" in n && n.external ? "_blank" : undefined} className="hover:text-brand-yellow">{n.label}</Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5">
        <div className="container-x flex flex-col items-center justify-center gap-1 text-center font-body text-xs normal-case tracking-normal text-cream/70 sm:flex-row sm:gap-3">
          <span>
            {site.name} {site.year}. Produzido por {site.producedBy}.
          </span>
          <span className="hidden sm:inline" aria-hidden>·</span>
          <Link href="/politica-de-privacidade" className="hover:text-brand-yellow">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
