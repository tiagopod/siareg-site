/**
 * LPs REGIONAIS DE PÃO DE MEL — /assis e /marilia
 *
 * Página B2B de conversão única: Pão de Mel Siareg para mercadinhos, lojas de
 * conveniência e mercados da cidade. Todo CTA vai para o WhatsApp comercial
 * (rodízio de vendedores) com a cidade já na mensagem.
 *
 * Para abrir uma cidade nova: adicione uma entrada em `cidades`, crie
 * `app/<slug>/page.tsx` copiando de app/assis/page.tsx e inclua a rota no sitemap.
 */

export type Cidade = {
  slug: string;
  nome: string;
  /** "em Assis", "em Marília" — usado no meio das frases */
  em: string;
  /** Cidades vizinhas atendidas na mesma rota de entrega */
  regiao: string[];
  /** Tipos de ponto de venda típicos da cidade, para a copy soar local */
  pdvs: string;
};

export const cidades: Record<string, Cidade> = {
  assis: {
    slug: "assis",
    nome: "Assis",
    em: "em Assis",
    regiao: ["Cândido Mota", "Paraguaçu Paulista", "Palmital", "Maracaí", "Tarumã"],
    pdvs: "mercadinhos de bairro, conveniências de posto e mercados",
  },
  marilia: {
    slug: "marilia",
    nome: "Marília",
    em: "em Marília",
    regiao: ["Garça", "Vera Cruz", "Pompeia", "Oriente", "Tupã"],
    pdvs: "mercadinhos de bairro, conveniências, padarias e mercados",
  },
};

// ─────────────────────────────────────────────────────────────
// COPY COMPARTILHADA — recebe a cidade e devolve os textos prontos
// ─────────────────────────────────────────────────────────────
export function lpCidade(c: Cidade) {
  return {
    seo: {
      title: `Pão de Mel para Revenda ${c.em} — Direto da Fábrica`,
      description: `Pão de Mel Siareg para mercadinhos, conveniências e mercados ${c.em} e região. Produto validado no varejo desde 2004, preço de fábrica e entrega na sua loja. Peça no WhatsApp.`,
    },

    hero: {
      eyebrow: `Entrega ${c.em} e região`,
      headline: `O Pão de Mel que gira na gôndola ${c.em}`,
      subheadline: `Para ${c.pdvs}: um doce de compra por impulso, validado em mais de 20 anos de varejo, com preço de fábrica e reposição direta na sua loja.`,
      cta: "Quero vender na minha loja",
      stats: [
        { value: "2004", label: "fábrica própria desde" },
        { value: "5,0", label: "estrelas no Google" },
        { value: "Cód. 100", label: "o mais pedido da linha" },
      ],
      image: "/images/products/paodemel.webp",
      imageAlt: "Caixa de Pão de Mel Siareg com unidades embaladas e uma aberta mostrando o recheio",
    },

    // Onde o produto vende dentro da loja — argumento de PDV, não de sabor
    pontos: {
      eyebrow: "Onde ele vende na sua loja",
      title: "Três lugares, três vendas diferentes",
      items: [
        {
          title: "No caixa",
          text: "Embalado individualmente, entra na fila do troco. É o clássico “leva um pra mim” enquanto o cliente espera.",
        },
        {
          title: "Na gôndola de doces",
          text: "Display pronto, sem montar nada. Fica de pé, mostra o produto e ocupa pouco espaço de prateleira.",
        },
        {
          title: "No balcão do café",
          text: "Acompanha o cafezinho da manhã e o lanche da tarde. Produto que vira hábito e traz o cliente de volta.",
        },
      ],
    },

    // Por que o dono do mercadinho escolhe — o que ele pergunta antes de comprar
    motivos: {
      eyebrow: "Por que o lojista escolhe",
      title: "O que você ganha colocando Siareg na prateleira",
      items: [
        { icon: "price", title: "Margem de fábrica", text: "Sem distribuidor no meio. Você compra de quem produz e a diferença fica na sua loja." },
        { icon: "clock", title: "Giro, não estoque parado", text: "Compra por impulso com ticket baixo: sai todo dia, repõe toda semana. Dinheiro que não dorme na prateleira." },
        { icon: "shield", title: "Produto validado", text: "Mais de 20 anos no varejo paulista e nota 5,0 no Google. Você não testa — você repõe." },
        { icon: "box", title: "Pronto para expor", text: "Embalagem individual e caixa display. Abriu, colocou, vendeu. Sem precificar unidade por unidade." },
        { icon: "truck", title: `Entrega ${c.em}`, text: `Rota própria atendendo ${c.nome} e região (${c.regiao.slice(0, 3).join(", ")}…). Combinamos a reposição com você.` },
        { icon: "support", title: "Um vendedor, um WhatsApp", text: "Orçamento, pedido e reposição no mesmo canal. Sem central, sem fila, sem robô." },
      ],
    },

    spotlight: {
      eyebrow: "O produto",
      title: "Pão de Mel Siareg — Cód. 100",
      text: "Massa macia com especiarias, recheio de doce de leite e cobertura de chocolate. Receita artesanal mantida desde 2004, produzida em fábrica própria em Guararema‑SP.",
      bullets: [
        "Unidades embaladas individualmente, prontas para o caixa",
        "Caixa display para gôndola e balcão",
        "Validade impressa, conforme ANVISA — planeja a reposição com folga",
        "Linha completa disponível no mesmo pedido: mini pão de mel, trufas, copinhos",
      ],
      cta: "Pedir tabela de preços",
      image: "/images/products/paodemel-2.webp",
      imageAlt: "Pão de Mel Siareg aberto mostrando a massa e o recheio",
    },

    passos: {
      eyebrow: "Simples assim",
      title: "Do WhatsApp à sua gôndola",
      items: [
        { n: "01", title: "Chame no WhatsApp", text: `Diga que tem loja ${c.em}. Nosso vendedor responde com tabela e pedido mínimo.` },
        { n: "02", title: "Monte o primeiro pedido", text: "Começa com o Pão de Mel e, se quiser, completa com o mix. Sem compromisso de volume absurdo." },
        { n: "03", title: "Receba e reponha", text: "Entregamos na sua loja. Depois é só avisar quando a caixa estiver acabando." },
      ],
      cta: "Começar agora",
    },

    depoimentos: {
      eyebrow: "Quem já vende",
      title: "O cliente final aprova. É isso que faz girar.",
      subtitle: "Avaliações reais no Google. Produto que o consumidor elogia é produto que o lojista repõe.",
      indices: [0, 2, 1, 3],
    },

    faq: {
      eyebrow: "Dúvidas de quem tem loja",
      title: "Antes de pedir",
      items: [
        { q: `Vocês entregam mesmo ${c.em}?`, a: `Sim. ${c.nome} e cidades da região (${c.regiao.join(", ")}) estão na nossa rota. Informe o endereço da loja e confirmamos o dia de entrega.` },
        { q: "Qual é o pedido mínimo?", a: "Trabalhamos com caixa fechada e um mínimo por pedido que cabe em mercadinho de bairro. Diga o tamanho da sua loja e enviamos as condições exatas." },
        { q: "Posso começar só com o Pão de Mel?", a: "Pode. Muitos lojistas começam com uma caixa display de Pão de Mel e depois adicionam mini pão de mel, trufas e copinhos quando veem o giro." },
        { q: "E se não vender?", a: "O Pão de Mel é o produto mais pedido da nossa linha há mais de 20 anos. Ainda assim, começamos com um pedido pequeno para você testar na sua loja antes de aumentar." },
        { q: "Como funciona a reposição?", a: "Pelo mesmo WhatsApp do primeiro pedido. Você avisa, a gente entrega na próxima rota pela sua cidade." },
        { q: "Quais formas de pagamento?", a: "As principais formas de pagamento comercial. As condições para o seu perfil vão junto com a tabela de preços." },
      ],
    },

    final: {
      eyebrow: "Pronto para a próxima rota",
      title: `Coloque Pão de Mel Siareg na sua loja ${c.em}`,
      text: "Chame agora e receba tabela, pedido mínimo e dia de entrega na sua cidade.",
      cta: "Chamar no WhatsApp",
      trust: ["Fábrica própria desde 2004", "Nota 5,0 no Google", `Entrega ${c.em} e região`],
    },

    wa: {
      hero: `Olá! Tenho uma loja ${c.em} e quero vender Pão de Mel Siareg. Podem me passar tabela e pedido mínimo?`,
      tabela: `Olá! Sou lojista ${c.em}. Podem me enviar a tabela de preços do Pão de Mel (Cód. 100)?`,
      comecar: `Olá! Vi a página de ${c.nome} e quero começar a revender Pão de Mel Siareg. Como funciona?`,
      duvida: `Olá! Tenho loja ${c.em} e uma dúvida antes de pedir o Pão de Mel Siareg.`,
    },
  };
}
