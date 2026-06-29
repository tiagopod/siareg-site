import type { Metadata } from "next";
import { privacidade } from "@/content/privacidade";
import { site, salesWa } from "@/content/site";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/jsonld";
import { Mail, Whatsapp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Siareg Chocolates coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidade | Siareg Chocolates",
    description:
      "Como a Siareg Chocolates coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
    url: `${site.url}/politica-de-privacidade`,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <JsonLd data={breadcrumbList([{ name: "Home", path: "/" }, { name: "Política de Privacidade", path: "/politica-de-privacidade" }])} />
      <PageHeader title="Política de Privacidade" subtitle="Como tratamos e protegemos os seus dados" />

      <article className="bg-white py-14 sm:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">
            Última atualização: {privacidade.lastUpdated}
          </p>

          <div className="mt-4 space-y-4">
            {privacidade.intro.map((p, i) => (
              <p key={i} className="font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {privacidade.sections.map((sec) => (
              <section key={sec.title}>
                <h2 className="font-heading text-xl text-cocoa-700">{sec.title}</h2>
                {sec.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">
                    {p}
                  </p>
                ))}
                {sec.items && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 font-body text-base normal-case leading-relaxed tracking-normal text-ink/75">
                    {sec.items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Contact CTAs */}
          <div className="mt-12 flex flex-wrap gap-4 border-t border-black/5 pt-8">
            <a
              href={salesWa()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-[1.03]"
            >
              <Whatsapp width={20} height={20} /> Falar no WhatsApp
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa px-7 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-cocoa-700 transition hover:bg-cocoa hover:text-cream"
            >
              <Mail width={20} height={20} /> Enviar e-mail
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
