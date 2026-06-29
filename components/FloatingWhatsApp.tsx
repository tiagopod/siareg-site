"use client";

import { usePathname } from "next/navigation";
import { salesWa } from "@/content/site";
import { Whatsapp } from "./icons";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <a
      href={salesWa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      // Na home mobile, a barra inferior já tem o WhatsApp — escondemos o flutuante (mostra só no desktop)
      className={`${isHome ? "hidden lg:grid" : "grid"} fixed bottom-5 right-5 z-50 h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow`}
    >
      <Whatsapp width={30} height={30} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
    </a>
  );
}
