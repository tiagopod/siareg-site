# Documentação do Projeto — Siareg Chocolates (Site)

Recriação editável de **siaregchocolates.com.br** em **Next.js 14 + Tailwind CSS + Framer Motion**.
Construída pela **Many Marketing** a partir do site original (WordPress/Elementor) como referência visual e de conteúdo.

> Este documento é o **manual de referência** do projeto: como rodar, onde editar, como está organizado, como publicar e o que manter. Para um resumo rápido de uso, veja também o `README.md`.

---

## 1. Visão geral

| Item | Valor |
| --- | --- |
| **Stack** | Next.js 14.2.23 (App Router, TypeScript) · React 18.3 · Tailwind CSS 3.4 · Framer Motion 11 |
| **Renderização** | 100% estática (41 páginas pré-renderizadas no build) |
| **Porta de dev** | `4400` (http://localhost:4400) |
| **Idioma** | Português (pt-BR) |
| **Conteúdo** | Todo editável em arquivos `content/*.ts` — sem CMS, sem banco de dados |
| **Imagens** | `public/images/` (52 arquivos reais do catálogo) |
| **Status** | Concluído e validado — pronto para deploy |

**Filosofia do projeto:** todo texto, link, número e imagem fica em arquivos de conteúdo simples (`content/`). Para mudar o site, edita-se uma string — não é preciso mexer em código de componente.

---

## 2. Como rodar

```bash
npm install      # primeira vez
npm run dev      # desenvolvimento → http://localhost:4400
npm run build    # build de produção (estático, 41 páginas)
npm start        # servir o build de produção
```

### ⚠️ Cuidado importante (dev + build)
**Nunca rode `npm run build` enquanto o `npm run dev` está rodando** na mesma pasta — os dois compartilham o diretório `.next` e o build corrompe o cache do dev (erro `Cannot find module './XXX.js'`, tela preta).
Se acontecer:

```bash
# pare o dev, limpe e reinicie
rm -rf .next
npm run dev
```

Para validar tipos **sem** buildar (seguro com o dev rodando):

```bash
npx tsc --noEmit
```

---

## 3. Mapa de rotas (41 páginas)

```
/                          Home (hero, canais, produtos, sobre, parceiros, depoimentos)
/sobre-nos                 História, missão/visão/valores, parceiros
/produtos                  Catálogo por categoria
  /produtos/[slug]         Detalhe dos 5 produtos sem página raiz (estojo, páscoa, rosquinha)
/contato                   Mapa NÃO — só botões WhatsApp + e-mail
/blog                      Listagem
  /blog/[slug]             14 posts com corpo real

PÁGINAS DE PRODUTO EM URL RAIZ (9 — espelham as URLs do site original, p/ SEO):
/paodemel        /paodemel-mini      /trufa-pote        /trufas-sortidas
/blister-coracao-trufa   /palitinhos-chocolate   /display-trufa
/copinhos-chocolate      /miniovinhos-chocolate

CAMPANHAS (fora do menu — acesso por link direto + sitemap):
/campanha-chocolates-siareg    Campanha de Dia das Mães (sazonal, reutilizável)
/siareg-comercial-m            Landing Page para tráfego pago (Google Ads)

INSTITUCIONAL:
/politica-de-privacidade       Política de Privacidade (LGPD) — linkada no rodapé

TÉCNICAS (geradas automaticamente):
/sitemap.xml   /robots.txt   404 personalizado (app/not-found.tsx)
```

**Catálogo de produtos:** 14 produtos no total → **9 têm página premium em URL raiz**, **5 ficam em `/produtos/[slug]`**. Cada produto tem **uma única URL canônica** (sem conteúdo duplicado).

---

## 4. Onde editar o conteúdo (sem mexer em código)

Tudo em **`content/`**:

| Arquivo | O que controla |
| --- | --- |
| `content/site.ts` | Marca, navegação, contato, redes sociais, **3 números de WhatsApp**, rodapé (regiões de atendimento) |
| `content/home.ts` | Home: slides do hero, cards de canal, CTAs, produtos em destaque, sobre, parceiros, popup |
| `content/products.ts` | **Catálogo** — 14 produtos (nome, código, descrição, imagens, categoria) + lógica de roteamento |
| `content/produtos-lp.ts` | Conteúdo de **conversão** das 9 páginas de produto (benefícios, motivos p/ revender, FAQ) |
| `content/blog.ts` | **14 posts** com corpo completo (blocos h2/h3/p/ul) |
| `content/testimonials.ts` | **Depoimentos reais do Google** (5,0 · 52 avaliações) + instruções de atualização |
| `content/pages.ts` | Textos de Sobre Nós e Produtos (intro) |
| `content/campanha-maes.ts` | Toda a campanha de Dia das Mães (headline, kits, datas, oferta) |
| `content/lp-comercial.ts` | Toda a LP do Google Ads (hero, benefícios, passos, FAQ, depoimentos) |
| `content/privacidade.ts` | Texto da Política de Privacidade + data da última atualização |

**Trocar imagem:** substitua o arquivo em `public/images/...` (mesmo nome) ou aponte um novo caminho no `content/`.
**Trocar texto/preço/código:** edite a string no arquivo de `content/`.

---

## 5. Arquitetura de produtos (importante)

A lógica vive em `content/products.ts`:

- **`products`** — array com os 14 produtos.
- **`ROOT_LP_SLUGS`** — os 9 slugs que têm página em URL raiz (ex.: `paodemel`). **A ordem aqui é a ordem do submenu "Produtos".**
- **`productHref(slug)`** — devolve a URL canônica: `/paodemel` para os 9, `/produtos/<slug>` para os outros 5. **Sempre use essa função para linkar um produto.**
- **`getRootLpProducts()`** — os 9 produtos do submenu, em ordem.
- **`getProduct(slug)`** / **`productsByCategory()`** — utilitários de leitura.

### Como adicionar um produto novo
1. Adicione o objeto em `products` (`content/products.ts`) com `slug`, `name`, `code`, `tagline`, `description[]`, `image`, `category`.
2. Coloque a(s) imagem(ns) em `public/images/products/`.
3. **Se for um produto "destaque" com página própria em URL raiz:**
   - Adicione o `slug` em `ROOT_LP_SLUGS`.
   - Crie `app/<slug>/page.tsx` (copie de `app/paodemel/page.tsx` e ajuste o `slug` e o `metadata`).
   - Adicione o conteúdo de conversão em `content/produtos-lp.ts` (benefícios, FAQ).
4. **Se for um produto comum:** nada mais a fazer — aparece em `/produtos` e ganha `/produtos/<slug>` automaticamente.
5. O **menu**, o **sitemap** e os **links do catálogo** se atualizam sozinhos (são data-driven).

### Páginas de produto (template `components/ProductLanding.tsx`)
As 9 páginas raiz usam um template único e premium, com: hero + galeria, badge 5,0★ Google, descrição, benefícios, seção "por que revender", **FAQ**, **produtos relacionados** (links internos "Veja também") e CTA WhatsApp contextual. Cada arquivo de rota (`app/<slug>/page.tsx`) é só um wrapper enxuto com o `metadata` e `<ProductLanding slug="..." />`.

---

## 6. Componentes (`components/`)

| Componente | Função |
| --- | --- |
| `Header.tsx` | Cabeçalho fixo + **dropdown "Produtos"** (desktop hover / mobile accordion) com os 9 produtos |
| `Footer.tsx` | Rodapé: regiões de atendimento, contato, redes, link de privacidade, crédito Many Marketing |
| `Hero.tsx` | Carrossel de banners da home (autoplay, setas, dots) |
| `Channels.tsx` | Cards de canais (Atacadistas / Distribuidores / Mercados) + CTAs |
| `Products.tsx` | Grade de produtos em destaque na home |
| `About.tsx` | Faixa "sobre" da home |
| `Partners.tsx` | Esteira (marquee) contínua de logos de parceiros |
| `Testimonials.tsx` | Bloco de avaliações reais do Google |
| `ProductCard.tsx` | Card de produto do catálogo (linka via `productHref`) |
| `ProductLanding.tsx` | **Template das 9 páginas de produto** (conversão + SEO) |
| `PageHeader.tsx` | Faixa escura com breadcrumb + `<h1>` (páginas internas) |
| `Reveal.tsx` | Animação de entrada no scroll (Framer Motion) |
| `FloatingWhatsApp.tsx` | Botão flutuante de WhatsApp |
| `Popup.tsx` | Modal promocional (1x por sessão) |
| `JsonLd.tsx` | Renderiza dados estruturados Schema.org |
| `icons.tsx` / `icons-landing.tsx` | Ícones SVG |

---

## 7. SEO (implementado)

### Metadata
- **Template de título** no `app/layout.tsx`: cada página exporta um título curto → vira `"<título> | Siareg Chocolates"`.
- **`canonical`** + **OpenGraph** em todas as páginas.
- **`<h1>` único** em todas as páginas (na home é um `<h1 class="sr-only">` porque o hero é imagem).

### Sitemap e robots
- **`app/sitemap.ts`** → `/sitemap.xml` (36 URLs, data-driven via `productHref` — cada produto uma vez só).
- **`app/robots.ts`** → `/robots.txt` (permite tudo + aponta o sitemap).

### Dados estruturados (Schema.org) — `lib/jsonld.ts` + `components/JsonLd.tsx`
| Página | Schemas |
| --- | --- |
| Todas (layout) | `WebSite` |
| Home | `WebSite` + `FoodEstablishment` (endereço, telefone, redes) |
| 9 produtos (raiz) | `Product` + `BreadcrumbList` + `FAQPage` |
| 5 produtos `/produtos/[slug]` | `Product` + `BreadcrumbList` |
| Posts do blog | `BlogPosting` + `BreadcrumbList` |
| Sobre / Produtos / Contato / Blog / Privacidade | `BreadcrumbList` |
| LP do Google | `FAQPage` |

Para adicionar schema numa página nova: `import JsonLd from "@/components/JsonLd"` + um builder de `@/lib/jsonld`, e renderize `<JsonLd data={...} />`.

> **Nota:** o Next 14.2.23 **não** suporta imagens no sitemap (só o Next 15). As imagens já são descobertas pelo Google via `Product.image` / `BlogPosting.image` (JSON-LD) e OpenGraph.

---

## 8. Marca (design tokens)

Definidos em `tailwind.config.ts` e `app/globals.css`.

**Cores:** `cocoa #7E5A4E` · `chocolate #55250A` · `gold #C99B44` · `brand-yellow #FBE703` · `cream #FEF7E9`
**Fontes:** Oswald (títulos) · Poppins (corpo) · Italianno (script) — carregadas via `next/font`.
**Utilitários CSS:** `.container-x` (largura máx. 1140px), `.btn-yellow`, `.btn-outline`, `.section-title`, `.bg-chocolate-texture`.

> Atenção: `globals.css` força `h1–h6` para MAIÚSCULAS. Para um título em script (Italianno), use `<p className="font-script">` ou adicione `normal-case` ao heading.

---

## 9. Contato e WhatsApp

Em `content/site.ts` → `whatsapp` (somente dígitos, formato internacional):

| Chave | Número | Uso |
| --- | --- | --- |
| `commercial` | `5511933376425` | CTAs principais (hero, produtos, campanhas) |
| `sales` | `5511973880254` | Telefone do rodapé — (11) 97388-0254 |
| `promo` | `5511933528905` | Botão do popup promocional |

E-mail: `comercial@siaregchocolates.com.br` · Endereço: R. Peixoto, 308 - Centro, Guararema - SP.

---

## 10. Manutenção periódica

| Quando | O quê | Onde |
| --- | --- | --- |
| **Mensal** | Atualizar avaliações do Google (copiar novas + ajustar `count`/`rating`) | `content/testimonials.ts` |
| **Anual (abril)** | Reativar/ajustar a campanha de Dia das Mães (datas, prazo, kits) | `content/campanha-maes.ts` |
| **Conforme estoque** | Adicionar/remover produtos, ajustar códigos | `content/products.ts` |
| **Conforme necessidade** | Novos posts de blog | `content/blog.ts` |
| **Se mudar a operação** | Revisar a Política de Privacidade + data | `content/privacidade.ts` |

---

## 11. Publicar (deploy)

- **Vercel (recomendado):** importe o repositório → deploy automático, zero config.
- **Netlify / Cloudflare Pages:** comando de build `npm run build`.
- **Host estático qualquer:** descomente `output: "export"` em `next.config.mjs`, rode `npm run build`, publique a pasta `out/`.

### Checklist pós-deploy
- [ ] Conferir os **3 números de WhatsApp** em produção.
- [ ] Enviar o `sitemap.xml` no **Google Search Console**.
- [ ] Validar as páginas no **[Rich Results Test](https://search.google.com/test/rich-results)** (produto, FAQ, breadcrumb, artigo).
- [ ] Conferir o preview de compartilhamento (OpenGraph) no WhatsApp/Facebook.
- [ ] (Opcional) Criar uma imagem OG dedicada **1200×630px** e apontar em `app/layout.tsx`.
- [ ] (Opcional) Tornar a LP `/siareg-comercial-m` `noindex` se quiser separar tráfego pago do orgânico (comentário no topo do arquivo explica como).

---

## 12. Histórico do que foi feito

1. **Espelho estático** do site original (`../mirror/`) — captura e validação offline para servir de referência fiel.
2. **Recriação editável** em Next.js, seção por seção (navegação → hero → seções → rodapé), com todo o conteúdo em `content/`.
3. **Depoimentos reais do Google** extraídos do widget do site (estáticos, editáveis mensalmente).
4. **Contato sem formulário** → só WhatsApp + e-mail.
5. **Catálogo completo** (14 produtos, 7 categorias) + **blog** (14 posts) com conteúdo real.
6. **Páginas de campanha** (Dia das Mães + LP Google Ads) e **9 páginas de produto em URL raiz** (espelhando as URLs originais), construídas em paralelo.
7. **Política de Privacidade** (LGPD) + **dropdown de Produtos** no menu.
8. **Pente fino**: 0 links quebrados, 0 imagens faltando; correções de `<h1>`, formato da nota ("5,0"), **404 personalizado** e bug de layout mobile.
9. **Camada de SEO técnico**: dados estruturados Schema.org (Product, FAQ, BlogPosting, Breadcrumb, WebSite), **produtos relacionados** (links internos), sitemap e robots.

---

## 13. Ajustes finos / pendências conhecidas

- Alguns **códigos (SKUs) de produto** foram inferidos do grid do site original (ex.: `display-trufa` 118) — confira em `content/products.ts`.
- O post `pao-de-mel-para-revenda-2` estava **vazio no site original** — renderiza com um lead-in honesto + CTA; adicione o texto real ou remova.
- O blog usa **uma imagem de capa compartilhada** (igual ao original) — troque por imagens próprias por post se quiser (`public/images/blog/`).
- A campanha de Dia das Mães é **sazonal**: hoje fica acessível por link direto e no sitemap. Datas/prazos são editáveis em `content/campanha-maes.ts`.
- Existem mais posts/páginas no site original; trouxemos os 14 produtos do catálogo e os 14 posts principais.

---

## 14. Estrutura de pastas (resumo)

```
siareg-next/
├── app/                       # Rotas (App Router) + layout, sitemap, robots, 404
│   ├── layout.tsx             # Layout raiz (Header/Footer/metadata/WebSite JSON-LD)
│   ├── page.tsx               # Home
│   ├── <produto>/page.tsx     # 9 páginas de produto em URL raiz
│   ├── produtos/[slug]/       # 5 produtos restantes
│   ├── blog/[slug]/           # Posts
│   ├── campanha-chocolates-siareg/ · siareg-comercial-m/ · politica-de-privacidade/
│   ├── sitemap.ts · robots.ts · not-found.tsx
├── components/                # Componentes de UI (ver seção 6)
├── content/                   # ★ TODO o conteúdo editável (ver seção 4)
├── lib/jsonld.ts              # Construtores de dados estruturados
├── public/images/             # 52 imagens reais
├── tailwind.config.ts         # Cores, fontes, tokens da marca
├── README.md                  # Resumo de uso
└── DOCUMENTACAO.md            # Este documento
```

---

*Produzido por Many Marketing. Última atualização desta documentação: junho de 2026.*
