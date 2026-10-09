"use client";

import { usePathname } from "next/navigation";
import { site, wa, salesWa } from "@/content/site";
import { cidades, lpCidade } from "@/content/lp-cidades";
import { WA_MSG_PAODEMEL } from "@/content/lp-vanessa";
import { Whatsapp } from "./icons";

/**
 * Destino do botão por rota. Cada LP usa aqui o MESMO destino dos CTAs da
 * própria página — número fixo quando a LP tem vendedor próprio, rodízio
 * (salesWa) quando não tem. Rotas fora desta lista caem no rodízio padrão.
 */
const LP_LINKS: Record<string, { href: string; label: string; aboveMobileBar?: boolean }> = {
  "/vanessa": { href: wa(site.whatsapp.vanessa, WA_MSG_PAODEMEL), label: "Peça pelo WhatsApp" },
  "/siareg-comercial-m": {
    href: salesWa("Olá! Quero me tornar revendedor Siareg. Podem me passar as condições?"),
    label: "Fale com o comercial no WhatsApp",
  },
  "/campanha-chocolates-siareg": {
    href: salesWa("Olá! Vim pela campanha de Dia das Mães e gostaria de saber mais sobre os presentes disponíveis."),
    label: "Peça pelo WhatsApp",
  },
  // LPs regionais: no celular há uma barra fixa de CTA no rodapé — o flutuante sobe para não cobri-la.
  ...Object.fromEntries(
    Object.values(cidades).map((c) => [
      `/${c.slug}`,
      { href: wa(site.whatsapp.vanessa, lpCidade(c).wa.hero), label: "Falar com vendedor no WhatsApp", aboveMobileBar: true },
    ]),
  ),
};

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const lp = LP_LINKS[pathname];
  // Na home mobile, a barra inferior já tem o WhatsApp — escondemos o flutuante (mostra só no desktop)
  const display = pathname === "/" ? "hidden lg:grid" : "grid";
  const bottom = lp?.aboveMobileBar ? "bottom-24 sm:bottom-5" : "bottom-5";

  return (
    <a
      href={lp?.href ?? salesWa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lp?.label ?? "Fale conosco no WhatsApp"}
      className={`${display} ${bottom} fixed right-5 z-50 h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow`}
    >
      <Whatsapp width={30} height={30} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
    </a>
  );
}
