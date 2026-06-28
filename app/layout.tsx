import type { Metadata } from "next";
import { Oswald, Poppins, Italianno } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { website } from "@/lib/jsonld";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Popup from "@/components/Popup";
import { popup } from "@/content/home";

const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-oswald", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const italianno = Italianno({ subsets: ["latin"], weight: ["400"], variable: "--font-italianno", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Chocolates para Atacado e Revenda desde 2004`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: site.favicon },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    images: [
      {
        url: "/images/hero/siareg-tradicao-2004.png",
        width: 1391,
        height: 442,
        alt: "Siareg Chocolates — Tradição em chocolate desde 2004",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero/siareg-tradicao-2004.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${poppins.variable} ${italianno.variable}`}>
      <head>
        {/* No-JS fallback: keep Reveal-wrapped sections visible when scripts don't execute (crawlers, headless, JS error) */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1!important;transform:none!important;}",
            }}
          />
        </noscript>
      </head>
      <body>
        <JsonLd data={website()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {popup.enabled && <Popup />}
      </body>
    </html>
  );
}
