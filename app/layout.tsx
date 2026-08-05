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
        {/*
          Google Tag Manager — carrega em todas as páginas via este layout raiz.
          Script inline (não `next/script`) de propósito: assim o snippet vai no HTML
          renderizado no servidor e roda sem depender da hidratação do React.
          O GA4 é disparado por dentro do container, não precisa de tag separada.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`,
          }}
        />

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
