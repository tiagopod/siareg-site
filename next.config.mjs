/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    // Sem isto o /_next/image responde `max-age=0, must-revalidate` e cada revisita
    // revalida todas as imagens da página — uma Edge Request por imagem, por pageview.
    // As imagens são locais e só mudam por deploy, então cacheia por um ano
    // (trocar uma imagem exige nome de arquivo novo, igual à regra de headers abaixo).
    minimumCacheTTL: 31536000,
  },
  // Static export option for easy publishing: uncomment to build a static site.
  // output: "export",

  /**
   * Rotas herdadas do site WordPress anterior.
   * Sem estas regras elas retornam 404 e queimam o link equity acumulado —
   * a de Dia das Mães ainda recebia impressões no Google Ads em agosto/2026.
   * O Next normaliza a barra final antes de casar a origem, então basta a forma sem barra.
   */
  async redirects() {
    return [
      {
        source: "/presentes-de-chocolate-para-o-dia-das-maes-surpreenda-com-siareg",
        destination: "/campanha-chocolates-siareg",
        permanent: true,
      },
      // O catálogo era servido como PDF em /wp-content; agora a landing comercial é o destino.
      {
        source: "/wp-content/uploads/:year/:month/CATALOGO-SIAREG-:rest*.pdf",
        destination: "/siareg-comercial-m",
        permanent: true,
      },
      // Resto do /wp-content e as rotas de administração do WordPress.
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      // Taxonomias do WordPress que não têm equivalente no site atual.
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      // Post consolidado: o stub de 2 parágrafos cedeu lugar ao artigo completo.
      { source: "/blog/pao-de-mel-para-revenda-2", destination: "/blog/pao-de-mel-para-revenda", permanent: true },
    ];
  },

  /**
   * Cache longo para os arquivos servidos direto de /public — sem isto eles saem
   * com revalidação a cada visita e cada uma vira uma Edge Request na Vercel.
   * `immutable` exige nome de arquivo novo para publicar uma versão diferente
   * (o catálogo já traz o ano no nome).
   * /_next/static e as fontes do next/font já vêm immutable por padrão.
   */
  async headers() {
    return [
      // Endurecimento básico, válido para todas as rotas: impede sniffing de
      // MIME type e limita o referrer enviado a domínios externos.
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:file*.pdf",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};
export default nextConfig;
