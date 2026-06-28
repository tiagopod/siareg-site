/**
 * CAMPANHA DIA DAS MÃES — Siareg Chocolates
 *
 * Edite este arquivo para atualizar a campanha a cada ano.
 * Datas, textos de oferta e produtos são todos editáveis aqui.
 * Não há nenhuma data ou texto fixo no código da página.
 *
 * Dia das Mães no Brasil = 2º domingo de maio de cada ano.
 */

export const campanhaData = {
  /** Ano vigente da campanha (apenas para exibição) */
  ano: "2025",

  /** Data-limite editorial para pedidos chegarem a tempo */
  prazoFechamentoPedido: "9 de maio", // ex.: "9 de maio" (sexta antes do Dia das Mães)

  /** Data do Dia das Mães desse ano */
  dataDiadasMaes: "11 de maio", // ex.: "11 de maio" (2º domingo de maio)

  // ─── Hero ───────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Dia das Mães",
    headline: "Presenteie quem te deu o mundo",
    subheadline:
      "Chocolates artesanais feitos com carinho para tornar esse dia inesquecível. Trufas, Pão de Mel e muito mais — direto da nossa fábrica em Guararema‑SP.",
    ctaLabel: "Pedir no WhatsApp",
    ctaSecondaryLabel: "Ver todos os produtos",
    ctaSecondaryHref: "/produtos",
    /** Imagem principal do hero (produto mais representativo) */
    image: "/images/products/estojo-trufas.webp",
    imageAlt: "Estojo de Trufas Siareg — presente perfeito para o Dia das Mães",
  },

  // ─── Faixa de prazo/oferta ───────────────────────────────────────────────
  urgency: {
    text: "Garanta o presente a tempo — pedidos até",
    highlightDate: true, // exibe a data em destaque
    suffix: "para entrega antes do Dia das Mães.",
    icon: "⏰", // Apenas para referência; o componente usa SVG inline
  },

  // ─── Produtos / kits para presentear ────────────────────────────────────
  kits: [
    {
      slug: "estojo-trufas",
      code: "137",
      name: "Estojo de Trufas",
      tagline: "O presente clássico que sempre encanta.",
      description:
        "Trufas premium em embalagem elegante — perfeitas para presentear com sofisticação e carinho.",
      image: "/images/products/estojo-trufas.webp",
      badge: "Mais presenteado",
      badgeColor: "gold" as const,
      waMessage:
        "Olá! Tenho interesse no Estojo de Trufas (Cód. 137) para presentear no Dia das Mães. Podem me passar condições?",
    },
    {
      slug: "trufas-sortidas",
      code: "1901",
      name: "Trufas Sortidas",
      tagline: "Variedade de sabores para agradar a todos os gostos.",
      description:
        "Caixa sortida com trufas em diferentes sabores — cada mordida é uma surpresa deliciosa.",
      image: "/images/products/trufas-sortidas.webp",
      badge: "Favorito das mães",
      badgeColor: "rose" as const,
      waMessage:
        "Olá! Quero saber mais sobre as Trufas Sortidas (Cód. 1901) para o Dia das Mães. Podem me ajudar?",
    },
    {
      slug: "blister-coracao-trufa",
      code: "128",
      name: "Blister Coração Trufa",
      tagline: "A forma mais doce de dizer 'eu te amo'.",
      description:
        "Trufas irresistíveis em embalagem coração — o mimo ideal para quem você ama.",
      image: "/images/products/blister-coracao-trufa.webp",
      badge: "Edição especial",
      badgeColor: "rose" as const,
      waMessage:
        "Olá! Tenho interesse no Blister Coração Trufa (Cód. 128) para o Dia das Mães. Podem me informar condições?",
    },
    {
      slug: "paodemel",
      code: "100",
      name: "Pão de Mel",
      tagline: "Receita artesanal que derrete na boca e no coração.",
      description:
        "Tradicional Pão de Mel Siareg — especiarias, chocolate e afeto em cada mordida desde 2004.",
      image: "/images/products/paodemel.webp",
      badge: "Artesanal",
      badgeColor: "cocoa" as const,
      waMessage:
        "Olá! Gostaria de informações sobre o Pão de Mel (Cód. 100) para presentear no Dia das Mães.",
    },
  ],

  // ─── Bloco "Por que Siareg" ──────────────────────────────────────────────
  reasons: {
    eyebrow: "Por que escolher a Siareg?",
    headline: "Tradição e qualidade desde 2004",
    items: [
      {
        icon: "factory",
        title: "Fábrica própria",
        text: "Produção 100% própria em Guararema‑SP. Controlamos cada etapa para garantir sabor e qualidade.",
      },
      {
        icon: "star",
        title: "5,0 ★ no Google",
        text: "Mais de 52 avaliações — clientes reais que aprovam o sabor e o atendimento da Siareg.",
      },
      {
        icon: "heart",
        title: "Receitas artesanais",
        text: "Ingredientes selecionados e receitas passadas de geração em geração. Sabor que não se esquece.",
      },
      {
        icon: "delivery",
        title: "Entrega rápida",
        text: "Atendemos São Paulo, Grande SP e interior. Pedidos ágeis para você presentear a tempo.",
      },
    ],
  },

  // ─── Depoimento em destaque (featured) ───────────────────────────────────
  featuredReview: {
    name: "Beth Clemente",
    rating: 5,
    text: "O pão de mel é sensacional, derrete na boca, tem sabor de quero mais e gosto de doce caseiro.",
    date: "10/02/2023",
  },

  // ─── CTA final / rodapé da campanha ─────────────────────────────────────
  finalCta: {
    headline: "Não deixe para última hora",
    subheadline:
      "Pedidos fecham antes do Dia das Mães. Fale com nosso time agora e garanta o presente que ela merece.",
    ctaLabel: "Pedir agora no WhatsApp",
    catalogLabel: "Baixar catálogo completo",
    catalogMessage: "Clique aqui para baixar nosso catálogo completo e conhecer toda a linha Siareg.",
  },

  // ─── SEO ─────────────────────────────────────────────────────────────────
  seo: {
    title: "Presentes de Dia das Mães | Chocolates Artesanais Siareg",
    description:
      "Presentes de Dia das Mães com chocolates artesanais Siareg: Trufas, Pão de Mel e mais. Fábrica em Guararema‑SP, entrega rápida. Consulte condições no WhatsApp.",
    ogImage: "/images/products/estojo-trufas.webp",
  },
} as const;

export type Kit = (typeof campanhaData.kits)[number];
export type BadgeColor = Kit["badgeColor"];
