/**
 * GLOBAL SITE CONTENT — edit freely.
 * Everything here is plain data consumed by the layout, header and footer.
 * Phone numbers are digits-only (international, no symbols) for WhatsApp links.
 */

export const site = {
  name: "Siareg Chocolates",
  tagline: "Momentos Doces e Delícias de Chocolate desde 2004",
  description:
    "Fábrica de chocolates com tradição desde 2004. Pão de mel, trufas, bombons e muito mais para atacadistas, distribuidores e mercados.",
  url: "https://siaregchocolates.com.br",
  logo: "/images/brand/logo.png",
  favicon: "/images/brand/favicon.png",
  producedBy: "Many Marketing",
  year: 2026,

  /** WhatsApp / phone numbers (digits only) */
  whatsapp: {
    commercial: "5511933376425", // hero, produtos e CTAs principais
    sales: "5511973880254", // telefone do rodapé — (11) 97388-0254
    promo: "5511933528905", // botão do popup "Clique Aqui"
  },

  contact: {
    address: "R. Peixoto, 308 - Centro, Guararema - SP, 08900-000",
    email: "comercial@siaregchocolates.com.br",
    phoneDisplay: "(11) 97388-0254",
    mapsUrl: "https://maps.app.goo.gl/dzbkktXqdiuCMJrY7",
    // Embed da mesma localização (Guararema - SP)
    mapEmbed:
      "https://www.google.com/maps?q=R.%20Peixoto%2C%20308%20-%20Centro%2C%20Guararema%20-%20SP%2C%2008900-000&t=m&z=16&output=embed&iwloc=near",
  },

  social: {
    facebook: "https://www.facebook.com/p/Chocolates-Siareg-100063760877266/",
    instagram: "https://www.instagram.com/chocolatessiareg/",
  },

  catalogPdf: "/CATALOGO-SIAREG-ANO-2026.pdf",

  /** Main navigation. `external: true` opens in a new tab (e.g. the PDF). */
  nav: [
    { label: "Home", href: "/" },
    { label: "Sobre Nós", href: "/sobre-nos" },
    { label: "Produtos", href: "/produtos" },
    { label: "Blog", href: "/blog" },
    { label: "Catálogo", href: "/CATALOGO-SIAREG-ANO-2026.pdf", external: true },
    { label: "Contato", href: "/contato" },
  ],

  /** Footer “regiões de atendimento” tabs */
  footer: {
    about:
      "Na essência da nossa fábrica de chocolates, dedicamos tempo, energia e talento para criar produtos que transcendem expectativas.",
    coverageIntro:
      "Siareg Chocolates atende mercados, ONGS, Atacadistas e Distribuidores nos seguintes locais",
    regions: [
      { label: "Atendimento", text: "Siareg Chocolates atende mercados, ONGS, Atacadistas e Distribuidores nos seguintes locais" },
      { label: "SP - Região Central", text: "Sé, República, Bela Vista, Consolação, Liberdade, Santa Cecília, Bom Retiro, Cambuci e arredores." },
      { label: "SP - Região Norte", text: "Santana, Tucuruvi, Casa Verde, Vila Maria, Tremembé, Mandaqui, Jaçanã e arredores." },
      { label: "SP - Região Oeste", text: "Pinheiros, Lapa, Butantã, Perdizes, Vila Leopoldina, Rio Pequeno e arredores." },
      { label: "SP - Região Sul", text: "Santo Amaro, Campo Limpo, Capão Redondo, M'Boi Mirim, Cidade Ademar e arredores." },
      { label: "SP - Região Leste", text: "Mooca, Tatuapé, Penha, Itaquera, São Mateus, Itaim Paulista e arredores." },
      { label: "Grande São Paulo", text: "Guarulhos, Osasco, Santo André, São Bernardo, Mauá, Mogi das Cruzes e região." },
      { label: "Litoral de São Paulo", text: "Santos, Guarujá, São Vicente, Praia Grande, Bertioga, Caraguatatuba e região." },
      { label: "Interior", text: "Campinas, Jundiaí, Sorocaba, São José dos Campos, Ribeirão Preto e demais cidades." },
    ],
  },
} as const;

/** Build a wa.me link with an optional pre-filled message. */
export function wa(number: string, message?: string) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Olá, gostaria de mais informações dos produtos";
