"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { popup } from "@/content/home";
import { salesWa } from "@/content/site";
import { Close } from "./icons";

export default function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show once per session, shortly after load (mirrors Popup Maker behavior).
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("siareg_popup_seen")) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem("siareg_popup_seen", "1"); } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-chocolate-texture p-8 text-center text-cream shadow-2xl"
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} aria-label="Fechar" className="absolute right-3 top-3 text-cream/70 hover:text-cream"><Close /></button>
            <p className="font-script text-3xl text-brand-yellow">{popup.eyebrow}</p>
            <p className="mx-auto mt-3 max-w-xs font-body text-sm normal-case leading-relaxed tracking-normal text-cream/90">
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
