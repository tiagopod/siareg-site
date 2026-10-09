/**
 * LP COMERCIAL — landing page de tráfego pago para atacadistas e revendedores.
 * Rota: /siareg-comercial-m
 *
 * Edite este arquivo para ajustar headlines, benefícios, passos, FAQ e depoimentos
 * sem precisar mexer no page.tsx.
 */

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Fábrica própria em Guararema · SP — Desde 2004",
  headline: "Chocolates no atacado direto da fábrica",
  subheadline:
    "Margem alta, giro rápido e uma linha completa para você revender o ano inteiro — sem intermediário.",
  ctaPrimary: "Quero ser revendedor",
  ctaSecondary: "Baixar catálogo",
  image: "/images/hero/irresistivel-siareg-1.png",
  imageAlt: "Linha de chocolates artesanais Siareg — pão de mel, trufas e copinhos",
  badges: [
    { label: "Desde 2004", icon: "award" },
    { label: "Fábrica própria", icon: "factory" },
    { label: "Entrega em todo o Brasil", icon: "truck" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// PROVA SOCIAL (barra de logos + rating)
// ─────────────────────────────────────────────────────────────
export const socialProof = {
  rating: 5.0,
  ratingLabel: "5,0 estrelas no Google",
  reviewCount: 52,
  reviewLabel: "avaliações",
  partnerLogos: [
    { name: "Bom Baiano", src: "/images/partners/bom-baiano.png" },
    { name: "Casa e Vida", src: "/images/partners/casa-e-vida.png" },
    { name: "Doces Vaz", src: "/images/partners/doces-vaz.png" },
    { name: "Garoto Express", src: "/images/partners/garoto-express.png" },
    { name: "Lojas Teddy", src: "/images/partners/lojas-teddy.png" },
    { name: "Manos Doces", src: "/images/partners/manos-doces.png" },
    { name: "Marsil", src: "/images/partners/marsil.png" },
    { name: "Super Doce Maringá", src: "/images/partners/super-doce-maringa.png" },
    { name: "Tateno", src: "/images/partners/tateno.png" },
  ],
  partnersLabel: "Parceiros que confiam na Siareg",
} as const;

// ─────────────────────────────────────────────────────────────
// BENEFÍCIOS
// ─────────────────────────────────────────────────────────────
export type BenefitIcon = "price" | "line" | "truck" | "craft" | "support" | "calendar";

export type Benefit = {
  icon: BenefitIcon;
  title: string;
  description: string;
};

export const benefitsSection = {
  eyebrow: "Por que revender Siareg",
  title: "Tudo que você precisa para lucrar com chocolate",
  items: [
    {
      icon: "price" as BenefitIcon,
      title: "Preço de fábrica",
      description:
        "Compra direto de quem fabrica. Sem intermediários, sem markup de atacadista: mais margem no seu bolso desde o primeiro pedido.",
    },
    {
      icon: "line" as BenefitIcon,
      title: "Linha completa",
      description:
        "Pão de Mel, Trufas, Copinhos, Bombons, Blisters, Estojos e a coleção de Páscoa — um fornecedor que atende todas as ocasiões do seu ponto de venda.",
    },
    {
      icon: "truck" as BenefitIcon,
      title: "Entrega para todo o Brasil",
      description:
        "Atendemos SP capital, Grande SP, Litoral, Interior e demais estados. Fale conosco para conferir as condições para sua região.",
    },
    {
      icon: "craft" as BenefitIcon,
      title: "Receitas artesanais desde 2004",
      description:
        "Mais de 20 anos aprimorando sabor, textura e apresentação. Produtos que fidelizam o consumidor final e constroem sua reputação como revendedor.",
    },
    {
      icon: "support" as BenefitIcon,
      title: "Atendimento comercial ágil",
      description:
        "Time comercial no WhatsApp pronto para orçamento, dúvidas e suporte pós-venda. Resposta em minutos, não em dias.",
    },
    {
      icon: "calendar" as BenefitIcon,
      title: "Giro rápido o ano todo",
      description:
        "Linha permanente com boa saída + coleção sazonal de Páscoa. Produto com alta rotatividade que mantém seu caixa em movimento.",
    },
  ] as Benefit[],
} as const;

// ─────────────────────────────────────────────────────────────
// LINHA DE PRODUTOS (destaques)
// ─────────────────────────────────────────────────────────────
export const productsHighlight = {
  eyebrow: "O que você vai revender",
  title: "Linha completa para todo tipo de ponto de venda",
  subtitle:
    "Cada categoria tem embalagem pronta para gôndola, balcão e presente. Consulte disponibilidade e códigos no catálogo.",
  categories: [
    {
      name: "Pão de Mel",
      code: "Cód. 100",
      description: "O queridinho que sai sozinho — receita artesanal, sabor inconfundível.",
      image: "/images/products/paodemel.webp",
    },
    {
      name: "Trufas",
      code: "Cód. 215 · 1901",
      description: "Pote e sortidas com sabores variados. Alta percepção de valor pelo consumidor.",
      image: "/images/products/trufas-sortidas.webp",
    },
    {
      name: "Copinhos de Chocolate",
      code: "Cód. 131",
      description: "Perfeitos para licores, recheios gourmet e eventos. Item diferenciado no mix.",
      image: "/images/products/copinhos-chocolate.webp",
    },
    {
      name: "Coleção de Páscoa",
      code: "Cód. 155 · 151 · 199",
      description: "Ovos de 70g a 250g. Antecipe seu pedido e garanta prioridade de entrega.",
      image: "/images/products/pascoa-2026.png",
    },
  ],
  cta: "Ver catálogo completo",
  ctaWa: "Pedir cotação de produtos",
} as const;

// ─────────────────────────────────────────────────────────────
// COMO FUNCIONA
// ─────────────────────────────────────────────────────────────
export const howItWorks = {
  eyebrow: "Simples e rápido",
  title: "Como se tornar revendedor Siareg",
  steps: [
    {
      number: "01",
      title: "Fale no WhatsApp",
      description:
        "Clique no botão, mande uma mensagem e nosso time comercial retorna em minutos com toda a informação que você precisa.",
    },
    {
      number: "02",
      title: "Monte seu pedido",
      description:
        "Escolha os produtos da linha que mais combinam com seu ponto de venda. Negociamos volume, mix e condições de pagamento.",
    },
    {
      number: "03",
      title: "Receba e lucre",
      description:
        "Produtos com embalagem pronta para venda chegam até você. Coloque na gôndola ou balcão e comece a vender.",
    },
  ],
  cta: "Começar agora",
} as const;

// ─────────────────────────────────────────────────────────────
// DEPOIMENTOS (usados da lista real em testimonials.ts)
// — índices dos reviews a exibir nesta LP
// ─────────────────────────────────────────────────────────────
export const testimonialsSection = {
  eyebrow: "O que dizem nossos clientes",
  title: "Aprovados por quem experimenta",
  subtitle:
    "Avaliações reais no Google. Um produto que o cliente final ama é um produto que você vai vender sem esforço.",
  reviewIndices: [0, 1, 2, 3, 4, 5], // todos os 6 reviews de testimonials.ts
} as const;

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────
export const faq = {
  eyebrow: "Dúvidas frequentes",
  title: "Respostas rápidas para começar",
  items: [
    {
      q: "Existe pedido mínimo para comprar no atacado?",
      a: "Sim, trabalhamos com pedido mínimo para garantir condições de fábrica. O valor exato varia conforme o mix escolhido — diga quais produtos interessam e enviamos uma cotação personalizada.",
    },
    {
      q: "Quais regiões vocês atendem?",
      a: "Atendemos SP capital, Grande SP, Interior e Litoral, além de outros estados. Informe sua cidade para confirmarmos disponibilidade e frete.",
    },
    {
      q: "Quais são os prazos de entrega?",
      a: "Os prazos dependem do seu endereço e do volume do pedido. Nosso time comercial informa o prazo exato antes de você fechar o pedido.",
    },
    {
      q: "Quais formas de pagamento são aceitas?",
      a: "Trabalhamos com as principais formas de pagamento comercial. As condições disponíveis para o seu perfil são enviadas junto com a cotação.",
    },
    {
      q: "Posso comprar uma variedade de produtos no mesmo pedido?",
      a: "Sim! Você pode montar um mix com diferentes linhas — Pão de Mel, Trufas, Copinhos, Páscoa e mais. Ajudamos a montar o pedido ideal para o seu negócio.",
    },
    {
      q: "Vocês têm catálogo para eu avaliar a linha completa?",
      a: "Sim, disponibilizamos um catálogo digital completo com todos os produtos e códigos. Baixe pelo botão “Baixar catálogo” logo abaixo ou peça o PDF ao nosso time.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// CTA FINAL
// ─────────────────────────────────────────────────────────────
export const ctaFinal = {
  eyebrow: "Pronto para começar?",
  title: "Chame agora no WhatsApp",
  subtitle:
    "Nossa equipe comercial está disponível para tirar dúvidas, enviar cotação e fechar seu primeiro pedido.",
  ctaWa: "Chamar no WhatsApp",
  ctaEmail: "Enviar e-mail",
  ctaCatalog: "Baixar catálogo",
  trustLines: [
    "Atendimento rápido e sem enrolação",
    "Mais de 20 anos de tradição",
    "Fábrica própria — preço direto",
  ],
} as const;
