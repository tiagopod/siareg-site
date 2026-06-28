import type { Metadata } from "next";
import { site, wa, DEFAULT_WA_MESSAGE } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/jsonld";
import Reveal from "@/components/Reveal";
import { Mail, Pin, Whatsapp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contato | WhatsApp e E-mail",
  description:
    "Fale com a Siareg Chocolates pelo WhatsApp ou e-mail. Atendimento rápido para atacadistas, distribuidores e revendedores de chocolate em todo o Brasil.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Siareg Chocolates",
    description:
      "Fale com a Siareg Chocolates pelo WhatsApp ou e-mail. Atendimento rápido para atacadistas, distribuidores e revendedores.",
    url: `${site.url}/contato`,
  },
};

export default function ContatoPage() {
  const waCommercial = wa(site.whatsapp.commercial, DEFAULT_WA_MESSAGE);
  const waSales = wa(site.whatsapp.sales, DEFAULT_WA_MESSAGE);

  return (
    <>
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Contato", path: "/contato" }])} />
      <PageHeader title="Contato" subtitle="Estamos prontos para atendê-lo" />

      {/* Main CTA */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-x text-center">
          <Reveal>
            <p className="font-script text-3xl text-cocoa">Fale com a gente</p>
            <h2 className="mt-1 font-heading text-3xl font-bold uppercase tracking-wider text-cocoa-700 sm:text-4xl">
              Atendimento Direto e Rápido
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-base normal-case leading-relaxed tracking-normal text-ink/70">
              Nosso time comercial responde pedidos, cotações e dúvidas em minutos. Escolha o canal de sua preferência.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
              <a
                href={waCommercial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-5 font-heading text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-whatsapp-hover hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
              >
                <Whatsapp width={22} height={22} /> WhatsApp
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-cocoa-700 px-8 py-5 font-heading text-base font-semibold uppercase tracking-wider text-cream shadow-lg transition-transform hover:scale-[1.03] hover:shadow-xl"
              >
                <Mail width={22} height={22} /> E-mail
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 font-body text-sm normal-case tracking-normal text-muted">
              Ligue ou WhatsApp:{" "}
              <a
                href={waSales}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cocoa-700 hover:underline"
              >
                {site.contact.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-cream py-10 sm:py-12">
        <div className="container-x grid gap-6 text-center sm:grid-cols-3">
          <Reveal delay={0}>
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <Pin width={28} height={28} className="text-cocoa" />
              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">Endereço</p>
                <p className="mt-1 font-body text-sm normal-case leading-relaxed tracking-normal text-ink/75">
                  {site.contact.address}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.07}>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <Mail width={28} height={28} className="text-cocoa" />
              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">E-mail</p>
                <p className="mt-1 font-body text-sm normal-case tracking-normal text-cocoa-700 hover:underline">
                  {site.contact.email}
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <a
              href={waCommercial}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <Whatsapp width={28} height={28} className="text-cocoa" />
              <div>
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">WhatsApp</p>
                <p className="mt-1 font-body text-sm normal-case tracking-normal text-cocoa-700">
                  {site.contact.phoneDisplay}
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
