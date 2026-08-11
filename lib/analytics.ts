/**
 * Camada de eventos para o GTM (container em content/site.ts → gtmId).
 *
 * Por que isto existe: o container estava instalado mas o repositório não tinha
 * um único `dataLayer.push` — o GTM só registrava pageview e o Google Ads media
 * zero conversão. Além disso, os CTAs de WhatsApp apontam para a rota interna
 * /api/whatsapp, que faz o redirect 302 para o wa.me no servidor: um gatilho de
 * GTM do tipo "Click URL contém wa.me" nunca dispara neste site. O evento
 * precisa ser empurrado explicitamente daqui.
 *
 * No GTM, criar gatilhos de Evento Personalizado com estes nomes.
 */

export type LeadEvent = {
  event: "whatsapp_click" | "form_submit" | "phone_click" | "catalog_download";
  /** Onde no site o lead partiu — ex.: "home-hero", "contato-form", "lp-paodemel". */
  origem: string;
  /** Índice do vendedor do rodízio, quando conhecido (cookie siareg_seller). */
  vendedor?: string;
  /** Campos extras de qualificação (tipo de negócio, cidade…). */
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Lê o vendedor atribuído a este visitante pela rota /api/whatsapp. */
export function currentSeller(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const hit = document.cookie.split("; ").find((c) => c.startsWith("siareg_seller="));
  return hit?.split("=")[1];
}

/** Empurra um evento de lead para o dataLayer. Silencioso se o GTM não carregou. */
export function trackLead({ event, origem, ...rest }: LeadEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    origem,
    vendedor: currentSeller(),
    ...rest,
  });
}
