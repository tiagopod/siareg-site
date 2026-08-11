/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: false },
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
};
export default nextConfig;
