/**
 * LP EXCLUSIVA — VANESSA (campanha de Google Ads própria)
 * Rota: /vanessa
 *
 * Página de conversão única: todo o conteúdo aponta para o WhatsApp da Vanessa
 * (site.whatsapp.vanessa), mas o texto da página é focado em produto — Pão de
 * Mel e seu histórico de vendas no varejo — não na vendedora. Sem menu, sem
 * rodapé com links, sem outros vendedores.
 *
 * Edite headlines, benefícios e depoimentos aqui sem tocar no page.tsx.
 */

// ─────────────────────────────────────────────────────────────
// HERO — produto em foco, não banner promocional
// ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "O mais pedido da linha Siareg · Fábrica própria desde 2004",
  headline: "Pão de Mel Siareg: o campeão de vendas no varejo",
  subheadline:
    "Alta rotatividade, compra por impulso e cliente que sempre volta — o produto que vende sozinho na gôndola, no balcão e no caixa. Direto da fábrica, com preço de atacado.",
  ctaPrimary: "Peça agora no WhatsApp",
  image: "/images/products/paodemel.webp",
  imageAlt: "Caixa de Pão de Mel Siareg com unidades embaladas e uma unidade aberta mostrando o recheio",
  badges: [
    { label: "Cód. 100" },
    { label: "Giro rápido" },
    { label: "Entrega em todo o Brasil" },
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// SPOTLIGHT — Pão de Mel e o sucesso de vendas no varejo
// Seção logo após o hero, com os selling points reais usados na LP
// de produto (content/produtos-lp.ts → "paodemel").
// ─────────────────────────────────────────────────────────────
export const paoDeMelSpotlight = {
  eyebrow: "Por que o Pão de Mel vende sozinho",
  title: "Um produto com sucesso comprovado no varejo",
  subtitle:
    "Padarias, mercados, lojas de doces e distribuidores já vendem o Pão de Mel Siareg com alta rotatividade. Veja por que ele funciona em qualquer ponto de venda.",
  image: "/images/products/paodemel-2.webp",
  imageAlt: "Pão de Mel Siareg embalado, com uma unidade aberta mostrando a massa macia",
  badge: "Um dos mais pedidos da linha Siareg",
  points: [
    "Alta aceitação entre diferentes públicos — funciona tanto para consumo quanto para presente",
    "Excelente exposição em balcões e checkouts, estimulando a compra por impulso",
    "Giro rápido e recompra constante: cliente que prova, volta a comprar",
    "Embalagem pronta para vitrine e gôndola — facilita a venda visual sem esforço extra",
    "Vendas constantes o ano todo, com picos em datas sazonais",
  ],
  ctaWa: "Quero vender Pão de Mel",
} as const;

// ─────────────────────────────────────────────────────────────
// PROVA SOCIAL
// ─────────────────────────────────────────────────────────────
export const socialProof = {
  ratingLabel: "5,0 estrelas no Google",
  reviewCount: 52,
  reviewLabel: "avaliações",
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
        "Sem fila, sem robô. Um único canal de WhatsApp, do orçamento ao pós-venda.",
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
  eyebrow: "Também disponível para revenda",
  title: "Linha completa para todo tipo de ponto de venda",
  subtitle: "Cada categoria tem embalagem pronta para gôndola, balcão e presente.",
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
      description: "Ovos de 70g a 250g. Peça no WhatsApp e garanta prioridade de entrega.",
      image: "/images/products/pascoa-2026.png",
    },
  ],
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
      title: "Chame no WhatsApp",
      description: "Clique no botão, mande uma mensagem e nosso time retorna em minutos com toda a informação que você precisa.",
    },
    {
      number: "02",
      title: "Monte seu pedido",
      description: "Escolha os produtos da linha que mais combinam com seu ponto de venda. Negociamos volume, mix e condições de pagamento.",
    },
    {
      number: "03",
      title: "Receba e lucre",
      description: "Produtos com embalagem pronta para venda chegam até você. Coloque na gôndola ou balcão e comece a vender.",
    },
  ],
  cta: "Começar agora",
} as const;

// ─────────────────────────────────────────────────────────────
// DEPOIMENTOS (usados da lista real em testimonials.ts)
// ─────────────────────────────────────────────────────────────
export const testimonialsSection = {
  eyebrow: "O que dizem nossos clientes",
  title: "Aprovados por quem experimenta",
  subtitle:
    "Avaliações reais no Google. Um produto que o cliente final ama é um produto que você vai vender sem esforço.",
  reviewIndices: [0, 1, 2, 3, 4, 5],
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
      a: "Sim, trabalhamos com pedido mínimo para garantir condições de fábrica. O valor exato varia conforme o mix escolhido — pedimos uma cotação personalizada no WhatsApp.",
    },
    {
      q: "Quais regiões vocês atendem?",
      a: "Atendemos SP capital, Grande SP, Interior e Litoral, além de outros estados. Fale conosco para confirmar disponibilidade e frete para sua cidade.",
    },
    {
      q: "Quais são os prazos de entrega?",
      a: "Os prazos dependem do seu endereço e do volume do pedido. Informamos o prazo exato no momento do pedido.",
    },
    {
      q: "Quais formas de pagamento são aceitas?",
      a: "Trabalhamos com as principais formas de pagamento comercial. Consulte as condições disponíveis para o seu perfil diretamente conosco.",
    },
    {
      q: "Posso comprar uma variedade de produtos no mesmo pedido?",
      a: "Sim! Você pode montar um mix com diferentes linhas — Pão de Mel, Trufas, Copinhos, Páscoa e mais. Ajudamos a montar o pedido ideal para o seu negócio.",
    },
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// CTA FINAL
// ─────────────────────────────────────────────────────────────
export const ctaFinal = {
  eyebrow: "Pronto para começar?",
  title: "Fale agora no WhatsApp",
  subtitle: "Atendimento comercial ágil, para tirar dúvidas, enviar cotação e fechar seu primeiro pedido.",
  ctaWa: "Chamar no WhatsApp",
  trustLines: [
    "Atendimento rápido e sem enrolação",
    "Mais de 20 anos de tradição",
    "Fábrica própria — preço direto",
  ],
} as const;

// ─────────────────────────────────────────────────────────────
// MENSAGENS PRÉ-PREENCHIDAS
// A saudação usa o nome da Vanessa só na mensagem (não é texto visível na
// página) — ajuda a identificar que o lead veio da campanha dela.
// ─────────────────────────────────────────────────────────────
export const WA_MSG_REVENDEDOR = "Olá, Vanessa! Quero me tornar revendedor Siareg. Podem me passar as condições?";
export const WA_MSG_COTACAO = "Olá, Vanessa! Gostaria de uma cotação de produtos para revenda.";
export const WA_MSG_COMECAR = "Olá, Vanessa! Vi o anúncio e quero começar a revender chocolates Siareg. Pode me ajudar?";
export const WA_MSG_PAODEMEL = "Olá, Vanessa! Vi o anúncio do Pão de Mel e quero revender. Pode me passar as condições de atacado?";
