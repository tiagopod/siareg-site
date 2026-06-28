# Siareg Chocolates — Site (Editable Recreation)

Recriação editável de **siaregchocolates.com.br** em **Next.js 14 + Tailwind CSS + Framer Motion**.
Construída a partir do mirror estático como referência visual e de conteúdo. Pronta para editar, otimizar e publicar.

## Rodar localmente

```bash
npm install      # primeira vez
npm run dev      # http://localhost:4400
npm run build    # build de produção (estático, 37 páginas) ✓
npm start        # servir o build
```

## Onde editar o conteúdo (sem mexer em código)

Todo o conteúdo fica em **`content/`** — texto, links, imagens, números de WhatsApp:

| Arquivo | O que controla |
| --- | --- |
| `content/site.ts` | Marca, navegação, contato, redes sociais, **3 números de WhatsApp**, rodapé (regiões) |
| `content/home.ts` | Home: slides do hero, cards de canal, CTAs, produtos em destaque, sobre, parceiros, popup |
| `content/products.ts` | **Catálogo completo** — 14 produtos em 7 categorias (nome, código, descrição, imagens) |
| `content/blog.ts` | **14 posts** do blog com corpo completo (blocos h2/p/ul) |
| `content/testimonials.ts` | **Depoimentos reais do Google** (5,0 · 52 avaliações) + como atualizar mensalmente |
| `content/pages.ts` | Textos de Sobre Nós, Produtos (intro), página Copinhos |

**Trocar imagem:** substitua o arquivo em `public/images/...` ou aponte um novo caminho no `content/`.
**Trocar texto/preço/código:** edite a string no arquivo de `content/`.
**Adicionar produto/post:** copie um item em `content/products.ts` / `content/blog.ts` e ajuste.

## Páginas (37 no build)

```
/                       Home (hero, produtos, sobre, parceiros, depoimentos reais)
/sobre-nos              História, missão/visão/valores, parceiros
/produtos               Catálogo por categoria  →  /produtos/[slug] (14 páginas de produto)
/contato                Mapa + botões WhatsApp/E-mail (sem formulário)
/blog                   Listagem  →  /blog/[slug] (14 posts com conteúdo real)
/copinhos-chocolate     Página de produto (mantida do original)
```

### Cores da marca (Tailwind)

`cocoa #7E5A4E` · `chocolate #55250A` · `gold #C99B44` · `brand-yellow #FBE703` · `cream #FEF7E9`
Fontes: Oswald (títulos) · Poppins (corpo) · Italianno (script). Tudo em `tailwind.config.ts`.

## Publicar online

- **Vercel (recomendado):** importe o repositório → deploy automático. Zero config.
- **Netlify / Cloudflare Pages:** build `npm run build`.
- **Host estático qualquer:** descomente `output: "export"` em `next.config.mjs`, rode `npm run build`, publique a pasta `out/`.

## Status

- [x] **Depoimentos** — avaliações **reais do Google** (5,0 · 52), estáticas e editáveis (`content/testimonials.ts`). Atualize mensalmente copiando novas avaliações.
- [x] **Contato** — sem formulário; botões de **WhatsApp + E-mail** + telefone.
- [x] **Produtos** — 14 produtos reais em 7 categorias, com páginas de detalhe e imagens reais.
- [x] **Blog** — 14 posts com título, corpo e data reais.
- [x] **Build de produção** passa (37 páginas estáticas, sem erros).

### Ajustes finos opcionais (antes de ir ao ar)

- Conferir os **3 números de WhatsApp** e textos em `content/site.ts`.
- Alguns **SKUs/códigos de produto** foram inferidos do grid de SKUs do site (ex.: `display-trufa` 118, `trufa-pote` 215) — confira em `content/products.ts`.
- O post `pao-de-mel-para-revenda-2` está **vazio no site original** — renderiza com um lead-in honesto + CTA. Adicione o texto real ou remova.
- O blog usa **uma imagem de capa compartilhada** (igual ao site original). Troque por imagens próprias por post se quiser (`public/images/blog/`).
- Existem ~43 posts e mais páginas no site original; trouxemos os 14 posts principais e os 14 produtos do catálogo.
