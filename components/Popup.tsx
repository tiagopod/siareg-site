"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { popup } from "@/content/home";
import { salesWa } from "@/content/site";
import { Close } from "./icons";

export default function Popup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  // Elemento focado antes do popup abrir — o foco volta para ele ao fechar (WCAG 2.4.3).
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Show once per session, shortly after load (mirrors Popup Maker behavior).
    if (typeof window === "undefined") return;
    if (pathname === "/vanessa") return; // LP exclusiva — sem popup de rodízio
    if (sessionStorage.getItem("siareg_popup_seen")) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, [pathname]);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem("siareg_popup_seen", "1"); } catch {}
    openerRef.current?.focus();
  };

  // Diálogo modal: foco entra ao abrir, Escape fecha, Tab fica preso dentro (WCAG 2.1.2).
  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            aria-describedby="popup-text"
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-chocolate-texture p-8 text-center text-cream shadow-2xl"
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hitbox 44px (ícone fica no mesmo sítio: right-3/top-3 do centro do grid) */}
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-0 top-0 grid h-11 w-11 place-items-center text-cream/70 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
            >
              <Close />
            </button>
            <p id="popup-title" className="font-script text-3xl text-brand-yellow">{popup.eyebrow}</p>
            <p id="popup-text" className="mx-auto mt-3 max-w-xs font-body text-sm normal-case leading-relaxed tracking-normal text-cream/90">
              {popup.text}
            </p>
            <a href={salesWa()} target="_blank" rel="noopener noreferrer" className="btn-yellow mt-6" onClick={close}>
              {popup.ctaLabel}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
