/**
 * PRODUCTS CATALOG — edit freely.
 *
 * Real content and images captured from the live site
 * (siaregchocolates.com.br). Each product maps to a detail page at
 * /produtos/[slug]. Images live in /public/images/products — replace the
 * files or the paths to swap visuals.
 *
 * Each product:
 *   slug        URL segment (/produtos/<slug>)
 *   name        display name
 *   code        catalog code shown as "Cód. <code>" (optional)
 *   tagline     short one-line hook (optional)
 *   description array of body paragraphs
 *   image       primary image path (optional — omit if none)
 *   gallery     extra image paths (optional)
 *   category    grouping key (see CATEGORY_ORDER below)
 */

export type Product = {
  slug: string;
  name: string;
  code?: string;
  tagline?: string;
  description: string[];
  image?: string;
  gallery?: string[];
  category: string;
};

/** Editable intro shown on the catalog page. */
export const productsIntro =
  "Explore a nossa linha completa de chocolates e doces, cuidadosamente elaborados em nossa fábrica desde 2004. De Pão de Mel a Trufas, Bombons, Estojos, Copinhos e produtos sazonais de Páscoa, cada item é uma experiência deliciosa à sua espera. Fale com o nosso time comercial e garanta condições especiais no atacado.";

/** Order in which categories are rendered on the catalog page. */
export const CATEGORY_ORDER = [
  "Pão de Mel",
  "Trufas",
  "Bombons & Blister",
  "Estojos & Displays",
  "Copinhos",
  "Páscoa",
  "Outros",
] as const;

export const products: Product[] = [
  // ───────────────────────────── Pão de Mel ─────────────────────────────
  {
    slug: "paodemel",
    name: "Pão de Mel",
    code: "100",
    tagline:
      "O Pão de Mel Siareg é mais do que um doce; é uma experiência que celebra a tradição e o sabor.",
    description: [
      "O Pão de Mel Siareg é muito mais do que um simples doce; é uma celebração de sabor e tradição. Desde sua origem, cuidadosamente elaborada em Minas Gerais, até o presente, cada mordida é uma viagem sensorial através de uma harmoniosa combinação de especiarias e chocolate. Nossa receita tradicional, passada de geração em geração, é um testemunho do nosso compromisso inabalável com a qualidade. Cada Pão de Mel é cuidadosamente preparado para garantir uma textura macia e um equilíbrio perfeito entre o doce e especiarias.",
      "Nosso maravilhoso pão de mel reside na combinação perfeita de ingredientes premium e técnicas de produção. Cada etapa do processo é realizada com dedicação e atenção aos detalhes, resultando em um produto que não apenas satisfaz os sentidos, mas também nutre a alma. Seja como um presente, um lanche reconfortante ou um agrado para o paladar, o Pão de Mel Siareg sempre traz consigo uma aura de afeto e carinho.",
    ],
    image: "/images/products/paodemel.webp",
    gallery: ["/images/products/paodemel-2.webp"],
    category: "Pão de Mel",
  },
  {
    slug: "paodemel-mini",
    name: "Mini Pão de Mel",
    code: "124",
    tagline:
      "Descubra a perfeita combinação de sabor e textura com os Mini Pães de Mel Siareg.",
    description: [
      "Desfrute da delicadeza dos Mini Pães de Mel Siareg. Cada mordida oferece uma experiência única, combinando a textura macia e o sabor irresistível. Perfeitos para diversas ocasiões, esses mini pães de mel são uma verdadeira tentação. Seja como um mimo pessoal, um agrado para seus entes queridos ou uma adição encantadora em eventos especiais, os Mini Pães de Mel são uma escolha versátil e encantadora.",
      "Para revendedores e estabelecimentos comerciais, oferecemos os Mini Pães de Mel no atacado. Nossa linha de produtos proporciona uma adição irresistível ao seu estoque, garantindo qualidade e variedade para seus clientes. Com preços competitivos e opções de embalagem personalizadas, facilitamos o fornecimento dos Mini Pães de Mel para o seu negócio.",
    ],
    image: "/images/products/paodemel-mini.webp",
    gallery: ["/images/products/paodemel-mini-2.webp"],
    category: "Pão de Mel",
  },

  // ────────────────────────────── Trufas ──────────────────────────────
  {
    slug: "trufa-pote",
    name: "Trufa Pote",
    code: "215",
    tagline: "Delicie-se com uma variedade de sabores com as nossas Trufas no Pote.",
    description: [
      "Conheça o mais novo lançamento da Siareg: Trufas no Pote. Cada trufa é cuidadosamente elaborada para proporcionar uma experiência incomparável de sabor e textura, agora em uma apresentação prática e irresistível. Perfeitas para compartilhar ou simplesmente saborear a qualquer momento, as Trufas no Pote oferecem a diversidade de sabores que você já ama, em uma embalagem moderna e versátil.",
      "Para revendedores e estabelecimentos comerciais, as Trufas no Pote são uma excelente oportunidade de atrair clientes com uma novidade irresistível. Com variedade de sabores, qualidade reconhecida e condições especiais para pedidos em grande volume, elas se tornam um diferencial em seu mix de produtos, agregando valor e elevando o padrão da sua oferta de chocolates.",
    ],
    image: "/images/products/trufa-pote.png",
    category: "Trufas",
  },
  {
    slug: "trufas-sortidas",
    name: "Trufas Sortidas",
    code: "1901",
    tagline: "Delicie-se com uma variedade de sabores com as nossas Trufas Sortidas.",
    description: [
      "Explore a diversidade de sabores com as Trufas Sortidas Siareg. Cada trufa é cuidadosamente elaborada para oferecer uma experiência única de sabor e textura. Seja para desfrutar pessoalmente ou compartilhar com amigos e familiares, as Trufas Sortidas são uma escolha versátil. Com uma variedade de sabores deliciosos em cada caixa, nossas trufas são ideais para qualquer ocasião.",
      "Para revendedores e estabelecimentos comerciais, oferecemos as Trufas Sortidas no atacado. Nossa coleção diversificada é uma adição irresistível ao seu inventário, garantindo qualidade e variedade para seus clientes. Com preços competitivos e condições especiais para pedidos em grande volume, é fácil elevar o padrão da sua oferta de chocolates.",
    ],
    image: "/images/products/trufas-sortidas.webp",
    gallery: ["/images/products/trufas-sortidas-2.webp"],
    category: "Trufas",
  },

  // ──────────────────────── Bombons & Blister ────────────────────────
  {
    slug: "blister-coracao-trufa",
    name: "Blister Coração Trufa",
    code: "128",
    tagline: "Deixe-se encantar pela irresistível combinação de chocolate e sabor.",
    description: [
      "Encontre uma maneira encantadora de aumentar suas vendas com o Blister Trufa Coração Siareg. Cada trufa é uma pequena obra de arte, cuidadosamente elaborada para encantar e deliciar os amantes de chocolate. Feitas com os melhores ingredientes e uma atenção meticulosa aos detalhes, nossas trufas em blister de coração são uma verdadeira doçura para o paladar. Cada mordida é uma explosão de sabor, combinando a suavidade do chocolate com recheios irresistíveis.",
      "Seja você um revendedor, supermercado ou loja de presentes, nossos Blister Trufa Coração no atacado são uma adição irresistível ao seu portfólio de produtos. Embalados com charme e elegância, eles são um presente perfeito para qualquer ocasião. Oferecemos condições especiais para pedidos em grande volume, garantindo que você atenda às demandas dos seus clientes enquanto aumenta seus lucros.",
    ],
    image: "/images/products/blister-coracao-trufa.webp",
    category: "Bombons & Blister",
  },
  {
    slug: "palitinhos-chocolate",
    name: "Palitinho de Chocolate",
    code: "118",
    tagline:
      "Uma combinação irresistível de textura crocante e chocolate macio que vai encantar o seu paladar.",
    description: [
      "Desfrute de momentos de sabor com os Palitinhos de Chocolate Siareg. Cada palitinho é uma mistura perfeita de crocância e sabor, garantindo uma experiência de chocolate memorável. Feitos com ingredientes da mais alta qualidade, nossos Palitinhos de Chocolate são uma indulgência irresistível para todos os amantes de chocolate.",
      "Para revendedores e estabelecimentos comerciais, oferecemos os Palitinhos de Chocolate no atacado. Nossos palitos são uma adição irresistível ao seu estoque, garantindo qualidade e sabor excepcionais para seus clientes. Com preços competitivos e condições especiais para pedidos em grande volume, é fácil elevar o padrão da sua oferta de chocolates.",
    ],
    image: "/images/products/palitinhos-chocolate.webp",
    category: "Bombons & Blister",
  },

  // ───────────────────── Estojos & Displays ─────────────────────
  {
    slug: "estojo-trufas",
    name: "Estojo de Trufas",
    code: "137",
    tagline: "Descubra uma experiência única de sabor com os nossos Estojos de Trufas.",
    description: [
      "Delicie-se com a perfeição em cada trufa do Estojo de Trufas Siareg. Feitas com os melhores ingredientes, nossas trufas derretem na boca, revelando camadas de sabor e indulgência em cada mordida. Com uma variedade de sabores, desde o clássico chocolate ao leite até combinações surpreendentes, o Estojo de Trufas Siareg é perfeito para presentear e saborear momentos especiais.",
      "Descubra uma maneira deliciosa de aumentar suas vendas durante todo o ano com os Estojos de Trufas Siareg no atacado. Se você é um revendedor, supermercado, loja de conveniência ou estabelecimento comercial, nossos Estojos de Trufas no atacado são uma excelente adição ao seu portfólio de produtos. Com embalagens atrativas e preços competitivos, nossas trufas são garantia de satisfação para seus clientes.",
    ],
    image: "/images/products/estojo-trufas.webp",
    category: "Estojos & Displays",
  },
  {
    slug: "display-trufa",
    name: "Display Trufa",
    code: "118",
    tagline: "Apresente suas deliciosas trufas com os nossos displays exclusivos.",
    description: [
      "Apresente suas trufas de forma impecável com nossos elegantes displays. Nossos Displays com Trufas não só destacam as delícias, mas também facilitam a escolha e compra para os clientes. Seja em padarias, confeitarias ou lojas de chocolate, ofereça uma apresentação irresistível que encante os olhos e o paladar.",
      "Para revendedores e estabelecimentos comerciais, oferecemos o Display Trufa no atacado. Garanta a apresentação impecável das suas trufas em grande escala, mantendo a qualidade e sofisticação. Com preços competitivos e opções de personalização, facilite a exposição e venda das Trufas Siareg.",
    ],
    image: "/images/products/display-trufa.webp",
    gallery: ["/images/products/display-trufa-2.webp"],
    category: "Estojos & Displays",
  },

  // ───────────────────────────── Copinhos ─────────────────────────────
  {
    slug: "copinhos-chocolate",
    name: "Copinhos de Chocolate",
    code: "131",
    tagline:
      "Perfeitos para ocasiões especiais, ideais para servir com uma variedade de licores e recheios.",
    description: [
      "Desfrute da experiência única proporcionada pelos Copinhos de Chocolate Siareg. Feitos com chocolate de alta qualidade, cada copinho oferece um sabor delicioso e uma textura irresistível. Perfeitos para servir com licores, recheios gourmet ou para saborear como uma sobremesa requintada. Seja em eventos especiais, festas ou momentos íntimos, nossos Copinhos de Chocolate são uma escolha versátil e sofisticada.",
      "Para revendedores e estabelecimentos comerciais, oferecemos os Copinhos de Chocolate no atacado. Nossa linha de produtos é uma adição deliciosa ao seu estoque, garantindo qualidade e sabor excepcionais. Com preços competitivos e opções de embalagem personalizadas, tornamos fácil atender à demanda dos seus clientes enquanto aumenta seus lucros.",
    ],
    image: "/images/products/copinhos-chocolate.webp",
    gallery: ["/images/products/copinhos-chocolate-2.webp"],
    category: "Copinhos",
  },

  // ───────────────────────────── Páscoa ─────────────────────────────
  {
    slug: "pascoa-2026",
    name: "Páscoa 2026",
    code: "155",
    tagline:
      "Na essência da Páscoa Siareg, investimos tempo, energia e talento para moldar ovos finos que superam expectativas sempre.",
    description: [
      "Prepare-se para a Páscoa 2026 e aumente suas margens. Pedidos confirmados antecipadamente recebem condições especiais e prioridade de entrega. Encante seus clientes com uma variedade irresistível de ovos de Páscoa, feitos com os melhores ingredientes e todo o cuidado que apenas a Siareg pode oferecer.",
      "Linha completa: Ovos de Páscoa 250G (Cód. 155 — caixa com 12 unidades), Ovos de Páscoa 120G (Cód. 151 — caixa com 15 unidades), Ovos de Páscoa 70G (Cód. 199 — caixa com 24 unidades) e Ovinhos de Páscoa 25G (Cód. 150 — 6 embalagens por caixa, 30 unidades por embalagem).",
      "Com descontos especiais para compras em grande quantidade, você terá tudo o que precisa para impulsionar suas vendas e superar suas metas. Aproveite a época mais doce e lucrativa do ano com a Siareg.",
    ],
    image: "/images/products/pascoa-2026.png",
    gallery: [
      "/images/products/pascoa-ovo-250g.png",
      "/images/products/pascoa-ovo-120g.png",
      "/images/products/pascoa-ovo-70g.png",
    ],
    category: "Páscoa",
  },
  {
    slug: "fabrica-de-ovos-de-pascoa",
    name: "Fábrica de Ovos de Páscoa",
    tagline:
      "Na essência da nossa fábrica de chocolates, dedicamos tempo, energia e talento para criar produtos que superam expectativas.",
    description: [
      "Na Siareg Chocolates, estamos prontos para tornar sua Páscoa memorável e altamente lucrativa. Com nossos produtos de qualidade excepcional e preços competitivos, estamos aqui para ajudá-lo a alcançar novos patamares de sucesso em seu negócio. Imagine encantar seus clientes com uma variedade irresistível de ovos de Páscoa, feitos com os melhores ingredientes e todo o cuidado que apenas a Siareg pode oferecer.",
      "Além da qualidade de nossos produtos, oferecemos preços que permitem a você maximizar seus lucros nesta temporada. Com descontos especiais para compras em grande quantidade e negociação flexível para grandes volumes, nossa equipe está pronta para atendê-lo com eficiência e profissionalismo. Faça seu pedido agora e garanta ovos de Páscoa de alta qualidade para a sua clientela.",
    ],
    image: "/images/products/ovosdepascoa.png",
    gallery: [
      "/images/products/pascoa-ovo-250g.png",
      "/images/products/pascoa-ovo-70g.png",
    ],
    category: "Páscoa",
  },
  {
    slug: "ovosdepascoa-2",
    name: "Ovos de Páscoa",
    tagline: "Explore a magia da Páscoa com os ovos de Páscoa Siareg.",
    description: [
      "Cada ovo de Páscoa Siareg é elaborado com os melhores ingredientes, garantindo uma experiência deliciosa em cada mordida. Oferecemos uma variedade de tamanhos para todos os gostos e preferências. Delicie-se com nossas criações únicas, feitas com amor e cuidado para encantar seus momentos especiais.",
      "Descubra a oportunidade de oferecer uma variedade irresistível de ovos de Páscoa aos seus clientes com a Siareg Chocolates. Como uma das principais fornecedoras de chocolates no atacado, temos uma ampla seleção de ovos de Páscoa de alta qualidade, perfeitos para atender às demandas da sua empresa durante a temporada mais doce do ano.",
    ],
    image: "/images/products/ovosdepascoa-2.png",
    category: "Páscoa",
  },
  {
    slug: "miniovinhos-chocolate",
    name: "Mini Ovinhos de Chocolate",
    tagline:
      "Desfrute de uma explosão de sabor com os Mini Ovinhos de Chocolate Siareg.",
    description: [
      "Experimente a doçura concentrada do Pote de Mini Ovinhos de Chocolate Siareg. Cada mordida é uma explosão de sabor em miniatura. O Pote de Mini Ovinhos de Chocolate é uma opção encantadora para presentes de Páscoa: sua embalagem elegante e o sabor excepcional tornam-no um mimo ideal para compartilhar momentos especiais com familiares e amigos.",
      "Para comerciantes e revendedores, oferecemos o Pote de Mini Ovinhos de Chocolate no atacado. Enriqueça seu estoque com uma seleção irresistível que encantará seus clientes. Com preços competitivos e embalagens prontas para a Páscoa, facilite a oferta dessas delícias em seu estabelecimento.",
    ],
    image: "/images/products/miniovinhos-chocolate.png",
    category: "Páscoa",
  },

  // ────────────────────────────── Outros ──────────────────────────────
  {
    slug: "rosquinha-nata",
    name: "Rosquinha de Nata",
    tagline: "Desfrute da suavidade e do sabor único das Rosquinhas de Nata Siareg.",
    description: [
      "Feitas com ingredientes selecionados, nossas rosquinhas são uma verdadeira tentação para os amantes de doces. Seja para um lanche rápido ou para compartilhar com amigos e família, cada mordida é uma experiência deliciosamente cremosa. Com sua textura macia e sabor delicado, as Rosquinhas de Nata são ideais para acompanhar uma xícara de café ou chá, para servir em eventos especiais ou simplesmente para desfrutar como um agrado pessoal.",
      "Para revendedores e estabelecimentos comerciais, oferecemos as Rosquinhas de Nata no atacado. Nossa linha de produtos é uma adição deliciosa ao seu estoque, garantindo qualidade e sabor excepcionais. Com preços competitivos e opções de embalagem personalizadas, tornamos fácil atender à demanda dos seus clientes enquanto aumenta seus lucros.",
    ],
    image: "/images/products/rosquinha-nata.webp",
    gallery: ["/images/products/rosquinha-nata-2.webp"],
    category: "Outros",
  },
];

/**
 * Produtos com PÁGINA PRÓPRIA em URL raiz (ex.: /paodemel) — espelham as URLs
 * do site original para melhor SEO e ficam no submenu "Produtos".
 * Os demais produtos usam /produtos/<slug>.
 * A ordem aqui também é a ordem do submenu do cabeçalho.
 */
export const ROOT_LP_SLUGS = [
  "paodemel",
  "paodemel-mini",
  "trufa-pote",
  "trufas-sortidas",
  "blister-coracao-trufa",
  "palitinhos-chocolate",
  "display-trufa",
  "copinhos-chocolate",
  "miniovinhos-chocolate",
] as const;

/** Caminho canônico de um produto: raiz para os 9 LPs, /produtos/<slug> para o resto. */
export function productHref(slug: string): string {
  return (ROOT_LP_SLUGS as readonly string[]).includes(slug)
    ? `/${slug}`
    : `/produtos/${slug}`;
}

/** Produtos que têm página própria em URL raiz, na ordem de ROOT_LP_SLUGS (para o menu). */
export function getRootLpProducts(): Product[] {
  return ROOT_LP_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    (p): p is Product => Boolean(p),
  );
}

/** Look up a single product by slug. */
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Products grouped by category, in CATEGORY_ORDER. */
export function productsByCategory(): { category: string; items: Product[] }[] {
  return CATEGORY_ORDER.map((category) => ({
    category,
    items: products.filter((p) => p.category === category),
  })).filter((group) => group.items.length > 0);
}
