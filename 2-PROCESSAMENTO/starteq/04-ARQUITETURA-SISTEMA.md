# Arquitetura · Sistema Starteq Tocantins (e-commerce completo)

> **Direção cravada por Eduardo (12/05 madrugada):** "vai terminando de criar o sistema que vai comportar tudo isso, o sistema vai ter que integrar checkout, ter um painel onde o Junior vai poder atualizar os produtos, entre outras coisas que um site desse porte precisa"
>
> Ou seja: NÃO é protótipo. É e-commerce real desde o dia 1.

---

## Stack escolhida (replica padrão Impulso validado)

| Camada | Tecnologia | Validado em |
|---|---|---|
| Framework | **Next.js 16** App Router + TypeScript | AgendaPRO · Aura · Kupferman |
| Estilo | **Tailwind v4** | AgendaPRO · Aura · Kupferman |
| Banco + Auth | **Supabase** (Postgres + Row Level Security + Auth + Storage) | AgendaPRO · Kupferman |
| Pagamento | **Asaas** · PIX nativo + Cartão | AgendaPRO (1ª venda real 07/05) |
| Deploy | **Vercel** | Todos projetos |
| Repo | GitHub `ImpulsoDigital063/starteq-palmas` | Padrão Impulso |
| API consumível IA | Route Handlers Next.js · JSON estruturado + OpenAPI schema | Novo · 1ª implementação |

**Por que essa stack:**
- Zero curva de aprendizado (já dominamos)
- Asaas validado em produção
- Supabase resolve auth + RLS + storage + realtime de uma vez
- Vercel deploy instantâneo
- Mesmo padrão de outros 4 sistemas em produção

---

## Estrutura inicial do projeto

```
starteq-palmas/
├── src/
│   ├── app/
│   │   ├── page.tsx                        ← home (Pichau-style adaptado)
│   │   ├── layout.tsx                      ← shell padrão preto + amarelo Phoenix
│   │   ├── globals.css                     ← Tailwind + tokens Starteq
│   │   │
│   │   ├── (loja)/                         ← grupo de rotas público
│   │   │   ├── produtos/
│   │   │   │   ├── page.tsx                ← catálogo geral
│   │   │   │   ├── [slug]/page.tsx         ← PDP individual
│   │   │   │   └── categoria/
│   │   │   │       └── [c]/page.tsx        ← listagem por categoria
│   │   │   ├── montador/page.tsx           ← MONTE SEU PC (foco da venda)
│   │   │   ├── carrinho/page.tsx
│   │   │   └── checkout/
│   │   │       ├── page.tsx                ← dados + endereço
│   │   │       └── pagamento/page.tsx      ← PIX Asaas
│   │   │
│   │   ├── (admin)/                        ← grupo painel Júnior
│   │   │   │                                  📖 PADRÃO COMPLETO: [[05-PAINEL-ADMIN-PADRAO]]
│   │   │   │                                  Base canônica: [[PAINEL-PROFISSIONAL]] (3-RETENCAO/perfil/)
│   │   │   └── admin/
│   │   │       ├── page.tsx                ← dashboard KPIs (hero Vendas Hoje + 4 KPIs + atalhos)
│   │   │       ├── login/page.tsx          ← Supabase Auth (magic link · senha temp junior2026)
│   │   │       ├── produtos/
│   │   │       │   ├── page.tsx            ← tabela densa · drawer edição 6 tabs · bulk action
│   │   │       │   ├── novo/page.tsx       ← criar SKU (página própria · fluxo dedicado)
│   │   │       │   ├── [id]/page.tsx       ← (opcional · default vai pro drawer)
│   │   │       │   ├── categorias/page.tsx ← CRUD categorias editáveis
│   │   │       │   └── marcas/page.tsx     ← CRUD marcas editáveis
│   │   │       ├── pedidos/
│   │   │       │   ├── page.tsx            ← tabela com status chips + filtros
│   │   │       │   └── [id]/page.tsx       ← detalhe (drawer ou página · timeline status)
│   │   │       ├── os/                     ← OS montagem (tabela separada de pedidos)
│   │   │       │   ├── page.tsx            ← lista admin
│   │   │       │   └── [id]/page.tsx       ← drawer técnico (Carlos vê só dele)
│   │   │       ├── estoque/
│   │   │       │   ├── page.tsx            ← posição + busca SKU
│   │   │       │   ├── entrada/page.tsx    ← NF compra · bulk
│   │   │       │   └── inventario/page.tsx ← contagem física
│   │   │       ├── financeiro/
│   │   │       │   ├── vendas/page.tsx     ← online + balcão · filtros + export CSV
│   │   │       │   ├── caixa/page.tsx      ← caixa físico (espécie do dia)
│   │   │       │   ├── despesas/page.tsx   ← com navegador mês-a-mês
│   │   │       │   ├── fluxo/page.tsx      ← receitas - despesas
│   │   │       │   └── comissoes/page.tsx  ← técnicos · pagamento via wizard 2-step
│   │   │       ├── clientes/page.tsx       ← CRM unificado · busca tripla nome/tel/CPF
│   │   │       ├── relatorios/page.tsx     ← índice de cards-link (padrão Salão99)
│   │   │       └── api-ia/page.tsx         ← docs API + OpenAPI + token teste
│   │   │
│   │   └── api/
│   │       ├── products/
│   │       │   ├── route.ts                ← GET catálogo público (paginado)
│   │       │   └── [sku]/route.ts          ← GET produto único
│   │       ├── stock/
│   │       │   └── [sku]/route.ts          ← GET estoque tempo real
│   │       ├── recommend/route.ts          ← GET ?budget=X&use=Y
│   │       ├── quote/route.ts              ← POST build → orçamento + WhatsApp link
│   │       ├── checkout/
│   │       │   ├── route.ts                ← cria order + Asaas PIX
│   │       │   └── status/[id]/route.ts    ← polling status pagamento
│   │       ├── webhooks/asaas/route.ts     ← HMAC + atualiza order
│   │       ├── admin/                      ← protegido por auth
│   │       │   ├── products/route.ts       ← CRUD produtos
│   │       │   ├── orders/route.ts         ← CRUD pedidos
│   │       │   └── stock/route.ts          ← bulk update
│   │       └── openapi.json                ← schema pra IA do Júnior
│   │
│   ├── components/
│   │   ├── ui/                             ← botões · inputs · cards (Tailwind)
│   │   ├── layout/
│   │   │   ├── Header.tsx                  ← logo + nav + busca + carrinho
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── montador/
│   │   │   ├── StepIndicator.tsx
│   │   │   ├── ComponentPicker.tsx         ← lista CPU/Mobo/etc com filtros
│   │   │   ├── BuildSummary.tsx            ← sidebar com peças escolhidas
│   │   │   ├── CompatibilityAlert.tsx      ← warnings
│   │   │   └── FinalQuote.tsx              ← total + parcelamento + CTA
│   │   ├── produto/
│   │   │   ├── ProductCard.tsx             ← card listagem
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductSpec.tsx
│   │   │   ├── PriceTag.tsx                ← preço + parcelamento
│   │   │   └── AddToCart.tsx
│   │   ├── carrinho/
│   │   ├── checkout/
│   │   └── admin/
│   │       ├── DashCard.tsx
│   │       ├── ProductForm.tsx
│   │       └── OrderTimeline.tsx
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── server.ts                   ← createServerClient
│   │   │   ├── client.ts                   ← createBrowserClient
│   │   │   └── middleware.ts               ← session refresh
│   │   ├── asaas/
│   │   │   ├── client.ts                   ← wrapper API
│   │   │   ├── pix.ts                      ← cria charge PIX
│   │   │   └── webhook.ts                  ← verifica HMAC
│   │   ├── compatibility/
│   │   │   ├── rules.ts                    ← regras CPU↔Mobo↔RAM↔Fonte
│   │   │   ├── tdp.ts                      ← cálculo wattagem total
│   │   │   └── validator.ts                ← validateBuild(parts) → errors[]
│   │   ├── catalog/
│   │   │   ├── seed.ts                     ← 188 SKUs iniciais (do CIC 2)
│   │   │   └── types.ts
│   │   ├── pricing.ts                      ← parcelamento · à vista · PIX
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── build.ts
│   │
│   └── middleware.ts                       ← Supabase SSR + admin guard
│
├── public/
│   ├── logo-starteq.svg                    ← Phoenix amarela
│   ├── favicon.ico
│   └── og-image.png
│
├── supabase/
│   └── migrations/
│       ├── 001_init.sql                    ← tables + RLS
│       ├── 002_seed_products.sql           ← 188 SKUs do Júnior
│       └── 003_admin_role.sql              ← role admin Júnior
│
├── .env.local.example
├── package.json
├── tailwind.config.ts                      ← paleta Starteq
├── next.config.js
└── tsconfig.json
```

---

## Schema do banco (Supabase)

```sql
-- products · catálogo
CREATE TABLE products (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sku          text UNIQUE NOT NULL,
  slug         text UNIQUE NOT NULL,
  name         text NOT NULL,
  category     text NOT NULL,              -- 'cpu', 'mobo', 'ram', 'gpu', 'fonte', 'periferico'
  subcategory  text,
  brand        text,
  price        numeric(10,2) NOT NULL,
  pix_price    numeric(10,2),              -- com desconto à vista
  cost         numeric(10,2),              -- só admin vê
  stock        int DEFAULT 0,
  active       boolean DEFAULT true,
  images       text[] DEFAULT '{}',
  description  text,
  specs        jsonb DEFAULT '{}',         -- socket · ddr · tdp · etc
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- specs jsonb examples
-- CPU: { "socket": "AM5", "tdp": 105, "cores": 6 }
-- Mobo: { "socket": "AM5", "ram_type": "DDR5", "form": "ATX" }
-- GPU: { "tdp": 250, "vram": "8GB", "length_mm": 280 }
-- Fonte: { "watts": 850, "certification": "80+ Gold" }

-- orders · pedidos
CREATE TABLE orders (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,        -- ST-2026-0001
  customer_id  uuid REFERENCES customers(id),
  status       text NOT NULL DEFAULT 'pending',
                                            -- pending · paid · processing · shipped · delivered · cancelled
  total        numeric(10,2) NOT NULL,
  payment_method text,                      -- pix · card · boleto
  asaas_id     text,                        -- charge id Asaas
  asaas_status text,
  paid_at      timestamptz,
  notes        text,
  shipping     jsonb,                       -- endereço · método · prazo
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- order_items
CREATE TABLE order_items (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id     uuid REFERENCES orders(id) ON DELETE CASCADE,
  product_id   uuid REFERENCES products(id),
  sku          text NOT NULL,
  name         text NOT NULL,
  qty          int NOT NULL DEFAULT 1,
  unit_price   numeric(10,2) NOT NULL,
  build_id     uuid REFERENCES builds(id)   -- se veio do montador
);

-- builds · PCs montados pelo cliente
CREATE TABLE builds (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id  uuid REFERENCES customers(id),
  total        numeric(10,2) NOT NULL,
  parts        jsonb NOT NULL,              -- array de product_ids
  compatible   boolean DEFAULT true,
  share_token  text UNIQUE,                 -- pra compartilhar build
  created_at   timestamptz DEFAULT now()
);

-- customers
CREATE TABLE customers (
  id           uuid PRIMARY KEY DEFAULT auth.uid(),
  email        text UNIQUE NOT NULL,
  name         text,
  phone        text,
  cpf          text,
  address      jsonb,
  created_at   timestamptz DEFAULT now()
);

-- categories · pra navegação
CREATE TABLE categories (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         text UNIQUE NOT NULL,
  name         text NOT NULL,
  parent_id    uuid REFERENCES categories(id),
  position     int DEFAULT 0,
  icon         text
);

-- admin_users · só Júnior por enquanto
CREATE TABLE admin_users (
  user_id      uuid PRIMARY KEY REFERENCES auth.users(id),
  role         text NOT NULL DEFAULT 'admin',
  created_at   timestamptz DEFAULT now()
);
```

**RLS:**
- `products` · SELECT público (somente active=true) · INSERT/UPDATE/DELETE só admin
- `orders` · SELECT só dono OU admin · INSERT por API checkout · UPDATE só admin
- `builds` · SELECT público com share_token OU dono OU admin
- `customers` · SELECT/UPDATE só próprio user · admin vê todos

---

## API consumível pela IA do Júnior (cravado)

### Endpoints públicos (sem auth)
```
GET  /api/products?category=cpu&page=1&limit=50
GET  /api/products/:sku
GET  /api/stock/:sku
GET  /api/recommend?budget=2500&use=jogos&prefer=amd
POST /api/quote
       body: { parts: ["sku1","sku2",...] }
       resp: { compatible: true, total: 5990, parts_detail: [...], whatsapp_link: "..." }
```

### Endpoint OpenAPI schema
```
GET /api/openapi.json
       → spec completa pra IA dele consumir sem fricção
```

A IA do Júnior aponta pra esse JSON · sabe exatamente que rotas chamar · documentação viva.

---

## Paleta cravada (do CIC 1)

```css
/* tailwind.config tokens */
--starteq-black:  #0A0A0A   /* fundo principal */
--starteq-coal:   #1A1A1A   /* cards · seções */
--starteq-line:   #2A2A2A   /* bordas */
--starteq-muted:  #6B6B6B   /* texto secundário */
--starteq-bone:   #FAFAFA   /* texto sobre preto */
--starteq-gold:   #F5C518   /* CTAs · destaques · Phoenix */
--starteq-gold-dk: #C49A12  /* hover · ativo */
--starteq-red:    #DC2626   /* alertas · indisponível */
--starteq-green:  #10B981   /* sucesso · em estoque */
```

**Tipografia:**
- Headings: `font-display` (Rajdhani Bold ou Orbitron · gamer-tech)
- Body: `font-sans` (Inter Regular/Medium)
- Mono: `font-mono` (JetBrains Mono · preços em destaque)

---

## Roteiro de execução (12/05 madrugada → manhã)

1. ✅ Setup Next.js (rodando em background)
2. Configurar Tailwind v4 + tokens Starteq
3. Setup Supabase (criar projeto + migrations + envs)
4. Setup Asaas (chaves dev)
5. Layout base (Header + Footer · paleta preto+amarelo + Phoenix)
6. Página home (Pichau-style adaptada · 188 SKUs reais do CIC 2)
7. Página montador (5 steps · mock catalog · validação compatibilidade)
8. Página catálogo + PDP
9. Carrinho + checkout (Asaas PIX)
10. Painel admin login + CRUD produtos básico
11. API `/api/products` + `/api/quote` + OpenAPI schema
12. Seed do banco com 188 SKUs (do CIC 2 quando tiver lista completa)
13. Deploy Vercel
14. Domínio · `starteq-palmas.vercel.app` (depois `palmas.starteq.com.br` ou similar)

---

## Pra mostrar pro Júnior amanhã (mínimo viável)

- Home com paleta correta + 6 produtos hero
- Montador funcional com 25 SKUs mock (CPU/Mobo/RAM/GPU/Fonte) e validação
- `/admin/login` + `/admin/produtos` (CRUD básico)
- `/api/products` retornando JSON estruturado (mostrar isso impressiona porque a IA dele PRECISA disso)
- Deploy Vercel ao vivo

Não é o ecossistema final · é PROVA VIVA do que vamos entregar. λ.case-1.

---

**Ver também:** [[STATUS-STARTEQ]] · [[00-CIC-INSTAGRAM-12-MAI]] · [[01-CIC-SITE-EXISTENTE-12-MAI]] · [[03-ARQUITETURA-MONTADOR]] · [[MEGA-CLAUDE]] · [[VERBO]]
