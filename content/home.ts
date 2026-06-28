/**
 * HOMEPAGE CONTENT — edit freely.
 * Images live in /public/images. Replace files or paths to swap visuals.
 */

export const hero = {
  /** Carousel slides (wide banners, 1391×442). Each links to WhatsApp. */
  autoplayMs: 5000,
  slides: [
    { image: "/images/hero/irresistivel-siareg-1.png", alt: "Pão de mel irresistível Siareg" },
    { image: "/images/hero/siareg-tradicao-2004.png", alt: "Siareg — tradição desde 2004" },
    { image: "/images/hero/queridinhos-siareg.png", alt: "Os queridinhos da Siareg" },
  ],
};

/** “Atacadistas / Distribuidores / Mercados” cards */
export const channels = [
  { icon: "store", title: "Atacadistas", text: "Qualidade e giro rápido para o seu portfólio" },
  { icon: "truck", title: "Distribuidores", text: "Distribua uma marca que fideliza clientes" },
  { icon: "cart", title: "Mercados", text: "Mais vendas, mais sabor, mais retorno" },
];

/** Three image CTA cards below the channels (link to WhatsApp). */
export const ctaCards = [
  { image: "/images/hero/OFERTA-PALITINHO.png", alt: "Oferta palitinho de chocolate" },
  { image: "/images/hero/pedidos-siareg.png", alt: "Faça seu pedido Siareg" },
  { image: "/images/cta/lista-vip.png", alt: "Entrar na lista VIP" },
];

export const productsSection = {
  title: "Principais Produtos",
  ctaLabel: "Ver Todos",
  ctaHref: "/produtos",
  items: [
    { name: "PÃO DE MEL DISPLAY", code: "100", image: "/images/products/pao-de-mel-display.png" },
    { name: "AMENDOIM E AVELÃ", code: "202", image: "/images/products/amendoim-avela.png" },
    { name: "TRUFA POTE MARACUJÁ", code: "213", image: "/images/products/trufa-maracuja.png" },
    { name: "BLISTER CORAÇÃO CEREJA", code: "127", image: "/images/products/blister-cereja.png" },
    { name: "TRUFA POTE BRIGADEIRO", code: "214", image: "/images/products/trufa-brigadeiro.png" },
    { name: "ESTOJO TRADICIONAL", code: "137", image: "/images/products/estojo-tradicional.png", href: "/copinhos-chocolate" },
    { name: "TRUFA MORANGO", code: "1901", image: "/images/products/trufa-morango.png" },
    { name: "COPINHO PARA LICOR", code: "131", image: "/images/products/copinho-licor.png", href: "/copinhos-chocolate" },
  ],
};

/** The two image CTAs below the products grid */
export const homeCtas = {
  catalog: { image: "/images/cta/catalogo.png", alt: "Baixar catálogo Siareg 2026", href: "/CATALOGO-SIAREG-ANO-2026.pdf" },
  store: { image: "/images/cta/loja-fisica.png", alt: "Visite nossa loja física", href: "https://maps.app.goo.gl/dzbkktXqdiuCMJrY7" },
};

export const tagline = "Sabor que conecta pessoas, momentos e sentimentos.";

export const about = {
  eyebrow: "Sobre nós",
  title: "Tradição em Chocolates desde 2004",
  body:
    "Na essência da nossa fábrica de chocolates, dedicamos tempo, energia e talento para criar produtos que superam expectativas. Com mais de uma década de tradição, cada doce conta a história de um compromisso com a qualidade excepcional. Descubra a excelência que se reflete em cada detalhe.",
  image: "/images/about/fabrica.jpg",
  ctaLabel: "Saber mais",
  ctaHref: "/sobre-nos",
};

export const partners = {
  title: "Nossos Parceiros",
  logos: [
    { name: "Bom Baiano", image: "/images/partners/bom-baiano.png" },
    { name: "Casa e Vida", image: "/images/partners/casa-e-vida.png" },
    { name: "Garoto Express", image: "/images/partners/garoto-express.png" },
    { name: "Lojas Teddy", image: "/images/partners/lojas-teddy.png" },
    { name: "Manos Doces", image: "/images/partners/manos-doces.png" },
    { name: "Marsil", image: "/images/partners/marsil.png" },
    { name: "Super Doce Maringá", image: "/images/partners/super-doce-maringa.png" },
    { name: "Tateno", image: "/images/partners/tateno.png" },
    { name: "Doces Vaz", image: "/images/partners/doces-vaz.png" },
  ],
};

/** Depoimentos agora vivem em content/testimonials.ts (avaliações reais do Google). */

/** Promo popup “LANÇAMENTOS IMPERDÍVEIS” */
export const popup = {
  enabled: true,
  eyebrow: "LANÇAMENTOS IMPERDÍVEIS",
  text:
    "CONHEÇA TODOS OS PRODUTOS DA SIAREG! FALE AGORA COM NOSSO TIME COMERCIAL E FAÇA SEU PEDIDO.",
  ctaLabel: "Clique Aqui",
  image: "/images/cta/lista-vip.png",
};
