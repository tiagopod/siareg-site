/**
 * INNER PAGES CONTENT — edit freely.
 * Sobre Nós, Produtos intro, Blog posts. Contato uses content/site.ts.
 */

export const sobre = {
  hero: { title: "Sobre Nós", subtitle: "Tradição em chocolates desde 2004" },
  origin: {
    eyebrow: "Onde tudo começou",
    title: "A História da Siareg",
    body: [
      "Impulsionados pela paixão por criar doces, expandimos para uma diversificada linha de produtos de chocolate. Ao longo dos anos, firmamos nossa presença no universo do chocolate, culminando na mudança estratégica para Guararema, SP, onde está nossa fábrica.",
      "Desde o Pão de Mel clássico até as irresistíveis Trufas e encantadores Ovos de Páscoa, nossos produtos são reflexos da nossa busca pela excelência. Em cada doce, estamos dedicados a enriquecer os momentos especiais da vida.",
    ],
    image: "/images/about/fabrica.jpg",
  },
  recipe: {
    eyebrow: "A mesma receita",
    title: "Desde 2004",
    body:
      "Sim, é verdade! Preservamos as receitas autênticas que nos acompanham desde 2004. Do nosso blend especial à fórmula única do Pão de Mel, cada aspecto é meticulosamente preparado com carinho e tradição.",
  },
  values: {
    eyebrow: "Além do chocolate",
    title: "Guiados pela Excelência: Missão, Visão e Valores que Transformam",
    items: [
      { title: "Missão", text: "Transformar momentos do cotidiano em experiências prazerosas, proporcionando produtos de qualidade a preços justos e construindo laços duradouros para todos." },
      { title: "Visão", text: "Ser uma marca reconhecida nacionalmente pela qualidade de seus produtos e desejada pelos seus clientes e consumidores." },
      { title: "Valores", text: "Simplicidade, sinceridade, ética, respeito, empreendedorismo, trabalho em equipe." },
    ],
  },
};

export const produtosPage = {
  hero: { title: "Produtos", subtitle: "Nossa coleção de chocolates e doces" },
  intro:
    "Conheça nossa linha completa: Pão de Mel, Trufas, Bombons, Blisters, Estojos, Copinhos e produtos sazonais de Páscoa. Fale com nosso time comercial e faça seu pedido.",
};

/** O conteúdo do Blog agora vive em content/blog.ts (posts reais com corpo completo). */

/** Sample product-detail page (the source has /copinhos-chocolate/). */
export const copinhos = {
  hero: { title: "Copinhos de Chocolate", subtitle: "Copinhos para licor e recheio" },
  body:
    "Nossos copinhos de chocolate são perfeitos para licores, recheios e sobremesas especiais. Produzidos com chocolate de qualidade, garantem sabor e praticidade para o seu negócio.",
  images: ["/images/products/copinho-licor.png", "/images/products/estojo-tradicional.png"],
  code: "131",
};
