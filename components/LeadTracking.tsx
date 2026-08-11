"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackLead } from "@/lib/analytics";

/**
 * Ouve os cliques de lead em um único lugar, por delegação no document.
 *
 * Preferido a marcar cada CTA individualmente por dois motivos: os links de
 * WhatsApp estão espalhados por Header, Footer, FloatingWhatsApp, MobileHome,
 * ProductLanding, blog e LPs; e todo CTA novo passa a ser medido sem que alguém
 * lembre de instrumentar. O `data-cta` de um link, quando existe, vira a origem;
 * senão usamos a rota atual, que já diz de qual página o lead saiu.
 */
export default function LeadTracking() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const alvo = (e.target as HTMLElement | null)?.closest?.("a");
      if (!alvo) return;

      const href = alvo.getAttribute("href") || "";
      const origem = alvo.dataset.cta || pathname || "desconhecida";

      if (href.startsWith("/api/whatsapp") || href.includes("wa.me")) {
        trackLead({ event: "whatsapp_click", origem });
        return;
      }
      if (href.startsWith("tel:")) {
        trackLead({ event: "phone_click", origem });
        return;
      }
      if (href.endsWith(".pdf")) {
        trackLead({ event: "catalog_download", origem });
      }
    }

    // `capture` garante o registro mesmo quando o handler do link chama stopPropagation.
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  return null;
}
