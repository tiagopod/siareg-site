/**
 * CONTEÚDO EXTRA DE CONVERSÃO POR PRODUTO
 *
 * Chaveado por slug. Alimenta o template ProductLanding com:
 *  - benefits     → lista de benefícios/diferenciais
 *  - sellingPoints → motivos específicos para revender esse produto
 *  - faq          → perguntas e respostas para revendedores
 *  - badges       → selos/destaques (ex.: "Sem conservantes", "Receita de 2004")
 *
 * O template funciona com ou sem esse extra (degradação graciosa).
 */

export type Benefit = {
  icon: "star" | "truck" | "box" | "leaf" | "heart" | "clock" | "tag" | "shield" | "users" | "gift";
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductLp = {
  benefits: Benefit[];
  sellingPoints: string[];
  faq: FaqItem[];
  badges: string[];
};

const WA_NOTE =
  "Fale com nosso time comercial no WhatsApp para detalhes e condições atualizadas.";

const produtos: Record<string, ProductLp> = {
  "trufa-pote": {
    badges: ["Lançamento", "Receita Artesanal", "Chocolate Premium", "Variedade de Sabores"],
    benefits: [
      { icon: "star",   text: "Embalagem moderna em pote — visual premium que atrai no PDV" },
      { icon: "heart",  text: "Múltiplos sabores irresistíveis em uma única apresentação" },
      { icon: "shield", text: "Produzido na fábrica Siareg com controle de qualidade rigoroso" },
      { icon: "tag",    text: "Preço de fábrica no atacado — margem atrativa para revendedores" },
      { icon: "truck",  text: "Entrega para toda a Grande SP, interior e litoral paulista" },
      { icon: "box",    text: "Embalagem prática e versátil — adapta-se a vitrines e prateleiras" },
    ],
    sellingPoints: [
      "Novidade que chama atenção: produto de lançamento desperta curiosidade e aumenta o ticket médio",
      "Formato pote é tendência no mercado de chocolates finos — diferencia sua loja dos concorrentes",
      "Alta percepção de valor pelo consumidor final, permitindo preços mais competitivos na revenda",
      "Variedade de sabores em um único SKU reduz a complexidade do estoque",
      "Ideal para datas comemorativas e vendas de impulso no caixa",
    ],
    faq: [
      {
        question: "Qual é o pedido mínimo para atacado de Trufa Pote?",
        answer: `O pedido mínimo varia conforme a quantidade e o mix escolhido. ${WA_NOTE}`,
      },
      {
        question: "Quais sabores estão disponíveis?",
        answer: `A linha de Trufas no Pote conta com diversos sabores. ${WA_NOTE} para ver a grade completa disponível.`,
      },
      {
        question: "Qual é a validade do produto?",
        answer: `A validade está indicada na embalagem e segue as normas ANVISA. Para informações específicas de cada lote, entre em contato conosco.`,
      },
      {
        question: "É possível personalizar a embalagem com a minha marca?",
        answer: `Trabalhamos com pedidos de personalização para volumes maiores. ${WA_NOTE} para avaliar seu projeto.`,
      },
      {
        question: "Fazem entrega fora de São Paulo?",
        answer: `Atendemos toda a Grande SP, interior e litoral paulista. Para outras regiões, consulte disponibilidade e frete pelo WhatsApp.`,
      },
    ],
  },

  "trufas-sortidas": {
    badges: ["Surtido de Sabores", "Chocolate Premium", "Cód. 1901", "Atacado Direto da Fábrica"],
    benefits: [
      { icon: "gift",   text: "Mix de sabores em caixa — presente versátil para qualquer ocasião" },
      { icon: "star",   text: "Trufas cuidadosamente elaboradas com ingredientes selecionados" },
      { icon: "users",  text: "Alta aceitação por consumidores de todas as faixas etárias" },
      { icon: "tag",    text: "Condições especiais de preço para pedidos em grande volume" },
      { icon: "shield", text: "Produção controlada na fábrica própria em Guararema SP" },
      { icon: "clock",  text: "Giro rápido no PDV — item de demanda constante o ano todo" },
    ],
    sellingPoints: [
      "Produto com apelo imediato: caixas de trufas sortidas vendem em qualquer estação",
      "Surtido amplia o leque de sabores sem multiplicar SKUs no estoque",
      "Embalagem atrativa que serve tanto para consumo próprio quanto para presentear",
      "Margem de revenda atraente com preço de fábrica direto no atacado",
      "Linha reconhecida Siareg — marca com tradição desde 2004 gera confiança no PDV",
    ],
    faq: [
      {
        question: "Quais sabores compõem as Trufas Sortidas?",
        answer: `O mix inclui sabores como brigadeiro, morango, maracujá e outros. A composição pode variar por lote. ${WA_NOTE} para confirmar a grade atual.`,
      },
      {
        question: "Como funciona o preço de atacado?",
        answer: `Trabalhamos com faixas de preço por volume. Quanto maior o pedido, melhores as condições. ${WA_NOTE}`,
      },
      {
        question: "Qual é a validade das Trufas Sortidas?",
        answer: `A validade segue as normas ANVISA e está indicada na embalagem. Para detalhes específicos, entre em contato com nossa equipe.`,
      },
      {
        question: "Posso misturar produtos no mesmo pedido?",
        answer: `Sim, é possível montar um mix de produtos para compor o pedido mínimo. ${WA_NOTE} para estruturar seu pedido.`,
      },
      {
        question: "Qual o prazo de entrega?",
        answer: `O prazo depende da localização e volume do pedido. ${WA_NOTE} para confirmar disponibilidade e logística.`,
      },
    ],
  },

  "paodemel": {
    badges: ["Receita Tradicional desde 2004", "Especiarias Selecionadas", "Cód. 100", "Sem Conservantes Artificiais"],
    benefits: [
      { icon: "heart",  text: "Receita original de Minas Gerais, preservada desde a fundação da Siareg" },
      { icon: "star",   text: "Massa macia com especiarias aromáticas e cobertura de chocolate fino" },
      { icon: "users",  text: "Produto queridinho do consumidor — um dos mais pedidos da linha Siareg" },
      { icon: "tag",    text: "Preço de fábrica competitivo para revenda em mercados e doceiras" },
      { icon: "truck",  text: "Disponível para atacado em toda a Grande SP e interior paulista" },
      { icon: "clock",  text: "Alta rotatividade — ideal para vitrine e giro rápido de estoque" },
    ],
    sellingPoints: [
      "O Pão de Mel é um dos produtos com maior procura no segmento de confeitaria — vende sem esforço",
      "Receita de tradição cria fidelidade: cliente que prova, volta a comprar",
      "Produto versátil — funciona bem em padarias, mercados, lojas de doces e eventos corporativos",
      "Alta percepção de artesanalidade justifica preço de revenda competitivo com boa margem",
      "Embalagem adequada à exposição em vitrine e gôndola — facilita a venda visual",
    ],
    faq: [
      {
        question: "O Pão de Mel contém glúten?",
        answer: `Sim, o Pão de Mel contém farinha de trigo em sua composição. Para mais detalhes sobre alérgenos, consulte o rótulo ou ${WA_NOTE.toLowerCase()}`,
      },
      {
        question: "Qual é a validade do Pão de Mel Siareg?",
        answer: `A validade está impressa na embalagem e obedece às normas ANVISA. ${WA_NOTE} para informações de lote específico.`,
      },
      {
        question: "Qual o pedido mínimo para atacado?",
        answer: `Trabalhamos com caixas fechadas e volumes mínimos por pedido. ${WA_NOTE} para verificar as condições atuais.`,
      },
      {
        question: "Posso personalizar a embalagem para minha loja?",
        answer: `Personalizações são possíveis para pedidos em volume. Entre em contato via WhatsApp para avaliarmos juntos o seu projeto.`,
      },
      {
        question: "Fazem entrega para o interior de São Paulo?",
        answer: `Sim, atendemos diversas cidades do interior paulista além da Grande SP. ${WA_NOTE} para confirmar a cobertura da sua região.`,
      },
    ],
  },

  "palitinhos-chocolate": {
    badges: ["Crocância Irresistível", "Chocolate Premium", "Cód. 118", "Giro Rápido"],
    benefits: [
      { icon: "star",   text: "Combinação única de crocância e chocolate — difícil parar de comer" },
      { icon: "clock",  text: "Snack de consumo rápido — perfeito para posicionar no caixa" },
      { icon: "users",  text: "Agrada adultos e crianças — público amplo garante bom giro" },
      { icon: "tag",    text: "Preço unitário acessível — facilita decisão de compra por impulso" },
      { icon: "box",    text: "Embalagem compacta e prática — ocupa pouco espaço no PDV" },
      { icon: "shield", text: "Produzido com ingredientes de alta qualidade na fábrica Siareg" },
    ],
    sellingPoints: [
      "Produto de impulso por excelência — posicione no caixa e veja o giro aumentar",
      "Embalagem individual de fácil manuseio — consumidor não resiste na hora da compra",
      "Baixo ticket por unidade amplia a base de compradores sem reduzir margem",
      "Ideal para complementar mix de chocolates — agrega variedade sem custo alto de estoque",
      "Produto estável — boa durabilidade facilita planejamento de compra no atacado",
    ],
    faq: [
      {
        question: "Qual o pedido mínimo para Palitinhos de Chocolate?",
        answer: `O mínimo é por caixa fechada. ${WA_NOTE} para saber a quantidade por caixa e os preços atualizados.`,
      },
      {
        question: "Os Palitinhos contêm algum alérgeno?",
        answer: `O produto contém chocolate e pode conter traços de outros ingredientes. Verifique o rótulo para informações completas de alérgenos.`,
      },
      {
        question: "Qual a validade dos Palitinhos de Chocolate?",
        answer: `A validade está na embalagem conforme normas ANVISA. ${WA_NOTE} para informações de lote específico.`,
      },
      {
        question: "É possível comprar em mix com outros produtos?",
        answer: `Sim, é possível compor pedidos com diferentes produtos da linha Siareg. ${WA_NOTE}`,
      },
    ],
  },

  "paodemel-mini": {
    badges: ["Formato Mini", "Receita Original", "Cód. 124", "Perfeito para Eventos"],
    benefits: [
      { icon: "heart",  text: "Mesmo sabor do Pão de Mel tradicional em formato menor e adorável" },
      { icon: "gift",   text: "Ideal para eventos, festas, lembranças e kits personalizados" },
      { icon: "users",  text: "Porção individual perfeita — cada convidado leva o seu" },
      { icon: "tag",    text: "Preço por unidade acessível — fácil venda avulsa e em kit" },
      { icon: "clock",  text: "Giro rápido: mini formatos têm alta rotatividade em confeitarias" },
      { icon: "box",    text: "Embalagem prática e versátil para personalizar e presentear" },
    ],
    sellingPoints: [
      "Mini formatos são tendência no mercado de eventos e festas — alta demanda todo o ano",
      "Produto perfeito para lembrancinhas de casamento, batizado e aniversário",
      "Permite montar kits e cestas com outros produtos Siareg — ticket médio maior",
      "Confeitarias e doceiras podem oferecer como opção de lembrança personalizada com boa margem",
      "Consumo rápido e sem desperdício — cliente satisfeito repete a compra com frequência",
    ],
    faq: [
      {
        question: "Qual o pedido mínimo para Mini Pão de Mel?",
        answer: `O mínimo é por caixa fechada com determinado número de unidades. ${WA_NOTE} para detalhes atualizados.`,
      },
      {
        question: "É possível personalizar a embalagem para eventos?",
        answer: `Personalizações podem ser viabilizadas para volumes maiores. ${WA_NOTE} para avaliar seu projeto.`,
      },
      {
        question: "Qual a validade do Mini Pão de Mel?",
        answer: `A validade está na embalagem e segue padrões ANVISA. ${WA_NOTE} para confirmar por lote.`,
      },
      {
        question: "Podem ser usados como lembrança de casamento?",
        answer: `Sim! Os Mini Pães de Mel são muito procurados para lembranças de casamento, batizado e aniversário. ${WA_NOTE} para montar um kit especial.`,
      },
    ],
  },

  "miniovinhos-chocolate": {
    badges: ["Páscoa e Ano Todo", "Formato Encantador", "Pote Prático", "Chocolate de Qualidade"],
    benefits: [
      { icon: "gift",   text: "Pote de mini ovinhos — presente perfeito para a Páscoa e datas especiais" },
      { icon: "star",   text: "Formato adorável que encanta crianças e adultos igualmente" },
      { icon: "heart",  text: "Sabor de chocolate com qualidade Siareg — experiência memorável" },
      { icon: "clock",  text: "Produto com demanda crescente na Páscoa — pede antecipação de estoque" },
      { icon: "tag",    text: "Preço competitivo no atacado para maximizar margem de revenda" },
      { icon: "truck",  text: "Entrega ágil para aproveitar o pico sazonal de vendas" },
    ],
    sellingPoints: [
      "Páscoa é a época mais lucrativa para chocolates — Mini Ovinhos são item indispensável no mix",
      "Formato pote tem alto apelo visual — compra por impulso frequente no PDV",
      "Produto que funciona fora da Páscoa: serve como mimo, brinde e presente o ano todo",
      "Alta demanda de doceiras e confeiteiras para rechear kits e cestas temáticas",
      "Pedido antecipado garante prioridade de entrega e melhores condições no atacado",
    ],
    faq: [
      {
        question: "Os Mini Ovinhos estão disponíveis fora da temporada de Páscoa?",
        answer: `A disponibilidade varia. ${WA_NOTE} para confirmar o período de produção e estoque atual.`,
      },
      {
        question: "Qual o pedido mínimo para atacado?",
        answer: `O mínimo é por caixa fechada. ${WA_NOTE} para preços e quantidades atualizadas.`,
      },
      {
        question: "Qual a validade dos Mini Ovinhos de Chocolate?",
        answer: `A validade está na embalagem conforme ANVISA. Para volumes e datas específicas, entre em contato.`,
      },
      {
        question: "Posso encomendar com antecedência para a Páscoa?",
        answer: `Sim e recomendamos! Pedidos antecipados têm prioridade de entrega e condições especiais. ${WA_NOTE}`,
      },
    ],
  },

  "display-trufa": {
    badges: ["Expositor Exclusivo", "Cód. 118", "Venda por Impulso", "Ideal para PDV"],
    benefits: [
      { icon: "star",   text: "Expositor completo com trufas — solução pronta para aumentar vendas no PDV" },
      { icon: "box",    text: "Display atrai olhar do consumidor e potencializa a venda por impulso" },
      { icon: "users",  text: "Solução completa: produto + exposição em um único item" },
      { icon: "shield", text: "Trufas produzidas com qualidade Siareg — confiança da marca desde 2004" },
      { icon: "tag",    text: "Preço de fábrica com display incluso — ótima relação custo-benefício" },
      { icon: "clock",  text: "Repõe rapidamente — produto de giro constante em padarias e mercados" },
    ],
    sellingPoints: [
      "Display monta-se rapidamente no balcão — sem trabalho extra de exposição para o lojista",
      "Visual atraente que vende por si só — clientes escolhem na hora sem precisar de indicação",
      "Solução ideal para padarias, cafeterias e mercados que não têm vitrine dedicada a chocolates",
      "Pedido de reposição simples: quando o display esvazia, basta chamar a Siareg",
      "Aumenta o ticket médio com upsell natural — consumidor leva mais de uma trufa",
    ],
    faq: [
      {
        question: "O display já vem montado ou precisa de montagem?",
        answer: `O display é de fácil montagem no ponto de venda. ${WA_NOTE} para ver as opções disponíveis e instruções.`,
      },
      {
        question: "Quantas trufas vêm no display?",
        answer: `A quantidade varia por modelo. ${WA_NOTE} para ver as opções de capacidade disponíveis.`,
      },
      {
        question: "É possível personalizar o display com a marca da minha loja?",
        answer: `Personalizações podem ser viabilizadas para pedidos maiores. ${WA_NOTE}`,
      },
      {
        question: "Qual o prazo de entrega do Display Trufa?",
        answer: `O prazo depende do volume e localização. ${WA_NOTE} para confirmar disponibilidade.`,
      },
    ],
  },

  "blister-coracao-trufa": {
    badges: ["Presenteável", "Cód. 128", "Formato Coração", "Alta Percepção de Valor"],
    benefits: [
      { icon: "heart",  text: "Formato coração — embalagem que já é um presente por si só" },
      { icon: "gift",   text: "Perfeito para Dia dos Namorados, aniversários e datas especiais" },
      { icon: "star",   text: "Trufa recheada com qualidade Siareg — sabor que impressiona" },
      { icon: "tag",    text: "Alta percepção de valor pelo consumidor — facilita revenda com margem" },
      { icon: "users",  text: "Produto com apelo emocional — vende em datas comemorativas sem esforço" },
      { icon: "shield", text: "Embalagem elegante que protege o produto e valoriza a marca" },
    ],
    sellingPoints: [
      "Embalagem coração é imbatível em datas comemorativas — Dia dos Namorados, Dia das Mães, Natal",
      "Alta percepção de valor justifica preço de revenda acima do chocolatinho comum",
      "Produto que os consumidores buscam ativamente para presentear — gera tráfego na sua loja",
      "Mix com Blister Cereja e outras variantes amplia sortimento sem pesar no estoque",
      "Ideal para expor na entrada da loja ou no balcão de caixa — venda por impulso garantida",
    ],
    faq: [
      {
        question: "O Blister Coração vem em quantas unidades por caixa?",
        answer: `A quantidade por caixa pode variar por modelo. ${WA_NOTE} para ver as opções disponíveis.`,
      },
      {
        question: "Quais sabores de trufa estão disponíveis no blister coração?",
        answer: `Contamos com diferentes sabores de recheio. ${WA_NOTE} para ver a grade atual.`,
      },
      {
        question: "Qual a validade do Blister Coração Trufa?",
        answer: `A validade está na embalagem conforme ANVISA. ${WA_NOTE} para informações por lote.`,
      },
      {
        question: "Trabalham com pedido de datas comemorativas com antecedência?",
        answer: `Sim, recomendamos pedidos antecipados para garantir estoque em datas de pico. ${WA_NOTE}`,
      },
    ],
  },

  "copinhos-chocolate": {
    badges: ["Cód. 131", "Ideal para Licores", "Chocolate Premium", "Versátil"],
    benefits: [
      { icon: "star",   text: "Chocolate premium que serve de copo — produto sofisticado e saboroso" },
      { icon: "gift",   text: "Perfeito para festas, eventos corporativos e barras de chocolate gourmet" },
      { icon: "heart",  text: "Pode ser servido com licores, recheios gourmet ou como sobremesa" },
      { icon: "users",  text: "Alta percepção de sofisticação — eleva o padrão do seu cardápio" },
      { icon: "tag",    text: "Preço de fábrica direto — ótima margem para confeiteiros e restaurantes" },
      { icon: "box",    text: "Embalagem prática para estoque e transporte sem quebras" },
    ],
    sellingPoints: [
      "Copinhos de chocolate são tendência em eventos e casamentos — demanda crescente",
      "Produto diferenciado que agrega valor ao menu de festas e casamentos",
      "Ideal para confeiteiros, baristas e restaurantes que buscam apresentação sofisticada",
      "Fácil de personalizar o recheio — o revendedor cria sua própria versão premium",
      "Produto pouco comum no varejo — sua loja se destaca ao oferecer o Copinho Siareg",
    ],
    faq: [
      {
        question: "Os Copinhos vêm recheados ou sem recheio?",
        answer: `Os Copinhos de Chocolate vêm sem recheio — prontos para você adicionar licor, ganache ou o recheio de sua preferência. ${WA_NOTE}`,
      },
      {
        question: "Qual o pedido mínimo para Copinhos de Chocolate?",
        answer: `O mínimo é por caixa fechada. ${WA_NOTE} para valores e quantidades atualizadas.`,
      },
      {
        question: "Qual a validade dos Copinhos de Chocolate?",
        answer: `A validade está na embalagem conforme ANVISA. ${WA_NOTE} para confirmar por lote específico.`,
      },
      {
        question: "Os Copinhos aguentam recheio líquido como licor?",
        answer: `Sim, são desenvolvidos para suportar recheios líquidos quando servidos na hora. Para eventos, recomendamos rechear próximo ao momento do consumo.`,
      },
      {
        question: "Posso usar para eventos corporativos e casamentos?",
        answer: `Com certeza! Os Copinhos de Chocolate são muito solicitados para eventos como esse. ${WA_NOTE} para montar uma proposta especial.`,
      },
    ],
  },
};

export function getProductLp(slug: string): ProductLp | undefined {
  return produtos[slug];
}
