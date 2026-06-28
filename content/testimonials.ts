/**
 * DEPOIMENTOS — avaliações reais do Google (capturadas do widget TrustIndex do site original).
 *
 * COMO ATUALIZAR (mensal, simples):
 *  1. Acesse o perfil do Google da Siareg (summary.googleUrl abaixo).
 *  2. Copie as avaliações novas que quiser destacar para a lista `reviews`.
 *  3. Atualize `summary.count` (total de avaliações) e `summary.rating` se mudar.
 * Tudo é estático — nenhuma chamada externa, carrega instantâneo e funciona offline.
 */

export const testimonials = {
  eyebrow: "Depoimentos",
  title: "Veja o que nossos clientes dizem",

  summary: {
    rating: 5.0,
    count: 52,
    source: "Google",
    googleUrl: "https://maps.app.goo.gl/dzbkktXqdiuCMJrY7", // perfil/avaliações no Google
  },

  /** Avaliações reais do Google (Siareg Chocolates). Edite/adicione livremente. */
  reviews: [
    { name: "Beth Clemente", rating: 5, date: "10/02/2023", text: "O pão de mel é sensacional, derrete na boca, tem sabor de quero mais e gosto de doce caseiro." },
    { name: "Mirtes Martorano Benedetti", rating: 5, date: "23/08/2023", text: "Comprei um pão de mel. Adorei!!!" },
    { name: "Alif - Revista de Variedades", rating: 5, date: "24/02/2023", text: "O melhor pão de mel!" },
    { name: "Alex Israel Simantob", rating: 5, date: "25/07/2023", text: "Muito bom - super recomendo." },
    { name: "Tauana Hipólito", rating: 5, date: "28/02/2023", text: "Delicioso!" },
    { name: "Laine Moura IP", rating: 5, date: "07/11/2023", text: "Ótimos doces." },
  ],
} as const;
