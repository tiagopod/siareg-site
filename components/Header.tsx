"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { getRootLpProducts } from "@/content/products";
import { Menu, Close } from "./icons";

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const desktopProductsRef = useRef<HTMLDivElement>(null);
  const nav = site.nav;
  const productMenu = getRootLpProducts();
  const mid = Math.ceil(nav.length / 2);
  const left = nav.slice(0, mid);
  const right = nav.slice(mid);

  // Close desktop products dropdown on outside click / Escape
  useEffect(() => {
    if (!desktopProductsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!desktopProductsRef.current?.contains(e.target as Node)) {
        setDesktopProductsOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopProductsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [desktopProductsOpen]);

  const NavLink = ({ item }: { item: (typeof nav)[number] }) => (
    <Link
      href={item.href}
      target={"external" in item && item.external ? "_blank" : undefined}
      className="font-heading text-sm font-medium uppercase tracking-wider text-cream/90 transition-colors hover:text-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  );

  // Desktop "Produtos" — Link goes to /produtos; chevron button toggles a dropdown with the 9 LPs.
  // Opens on hover (mouse), focus-within (keyboard), and chevron click (touch). Closes on outside click / Esc.
  const ProductsDropdown = ({ item }: { item: (typeof nav)[number] }) => (
    <div
      ref={desktopProductsRef}
      className="group relative flex h-full items-center gap-1"
      onMouseEnter={() => setDesktopProductsOpen(true)}
      onMouseLeave={() => setDesktopProductsOpen(false)}
    >
      <Link
        href={item.href}
        className="font-heading text-sm font-medium uppercase tracking-wider text-cream/90 transition-colors hover:text-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
      >
        {item.label}
      </Link>
      <button
        type="button"
        onClick={() => setDesktopProductsOpen((v) => !v)}
        aria-expanded={desktopProductsOpen}
        aria-controls="produtos-submenu-desktop"
        aria-label={desktopProductsOpen ? "Fechar submenu de produtos" : "Abrir submenu de produtos"}
        className="grid h-11 w-8 place-items-center text-cream/90 hover:text-brand-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
      >
        <Chevron className={desktopProductsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>

      <div
        id="produtos-submenu-desktop"
        className={`absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
          desktopProductsOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl">
          <div className="border-b border-black/5 bg-cream/50 px-5 py-3">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold">
              Nossos Produtos
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-4">
            {productMenu.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                onClick={() => setDesktopProductsOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 font-body text-sm normal-case tracking-normal text-cocoa-700 transition hover:bg-cream hover:text-cocoa focus-visible:bg-cream focus-visible:outline-none"
              >
                <span>{p.name}</span>
                {p.code && <span className="text-xs text-muted">Cód. {p.code}</span>}
              </Link>
            ))}
          </div>
          <Link
            href="/produtos"
            onClick={() => setDesktopProductsOpen(false)}
            className="flex items-center justify-center gap-2 border-t border-black/5 bg-cocoa-700 px-5 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-cream transition hover:bg-cocoa focus-visible:bg-cocoa focus-visible:outline-none"
          >
            Ver catálogo completo →
          </Link>
        </div>
      </div>
    </div>
  );

  const renderDesktop = (item: (typeof nav)[number]) =>
    item.href === "/produtos" ? (
      <ProductsDropdown key={item.label} item={item} />
    ) : (
      <NavLink key={item.label} item={item} />
    );

  return (
    <header className="sticky top-0 z-50 bg-chocolate-texture/95 backdrop-blur supports-[backdrop-filter]:bg-[#2a160c]/90">
      <div className="container-x">
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left nav (desktop) */}
          <nav className="hidden items-center gap-7 lg:flex">{left.map(renderDesktop)}</nav>

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center" aria-label={site.name}>
            <Image src={site.logo} alt={site.name} width={120} height={60} priority className="h-12 w-auto object-contain" />
          </Link>

          {/* Right nav (desktop) */}
          <nav className="hidden items-center justify-end gap-7 lg:flex">{right.map(renderDesktop)}</nav>

          {/* Mobile toggle — 44x44 hitbox via -m-3 p-3 trick */}
          <button
            className="-m-3 grid h-11 w-11 place-items-center p-3 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-cream/10 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map((item) =>
                item.href === "/produtos" ? (
                  <div key={item.label} className="py-2">
                    <div className="flex items-center justify-between">
                      <NavLink item={item} />
                      <button
                        type="button"
                        aria-label={productsOpen ? "Fechar submenu de produtos" : "Abrir submenu de produtos"}
                        aria-expanded={productsOpen}
                        aria-controls="mobile-products-submenu"
                        onClick={() => setProductsOpen((v) => !v)}
                        className="-m-3 grid h-11 w-11 place-items-center p-3 text-cream/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
                      >
                        <Chevron className={productsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                    </div>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          id="mobile-products-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 flex flex-col gap-1 border-l border-cream/15 pl-4">
                            {productMenu.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/${p.slug}`}
                                onClick={() => setOpen(false)}
                                className="block min-h-[44px] py-2.5 font-body text-sm normal-case tracking-normal text-cream/75 transition-colors hover:text-brand-yellow focus-visible:text-brand-yellow"
                              >
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div key={item.label} className="flex min-h-[44px] items-center py-1">
                    <NavLink item={item} />
                  </div>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
