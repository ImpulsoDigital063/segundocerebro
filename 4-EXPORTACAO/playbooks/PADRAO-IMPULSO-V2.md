# PADRÃO IMPULSO v2 — Design System aplicado

> Sistema canônico extraído da análise comparativa de 5 LPs/sites de referência mundial.
> Output do estudo iniciado em 02/05/2026 (Verbo s04).

**Status:** 🟢 v1 cravado · **Próxima atualização:** após aplicar em Aura v5 + 1ª LP nova

---

## ⚡ Lei zero — Mobile-first é o foco

**Toda LP, site, criativo Impulso é projetado pra MOBILE primeiro.** Desktop é fallback escalado, não o contrário.

**Por quê:**
- BR é ~80% tráfego mobile
- Cliente final dos clientes Impulso (consumidor) abre LP no celular
- WhatsApp é canal — celular onde tudo termina
- AgendaPRO já é PWA instalável (mobile-first nativo)

**Paradigma mobile-first dos 5 estudados:**

| Site | Mobile-first? | Peso na análise |
|---|---|---|
| **Whoop** | ✅ sério (fitness = mobile) | ⭐ ALTO |
| **Allurium** | ✅ agressivo (compra mobile) | ⭐ ALTO |
| Huberman | ✅ Webflow padrão bem feito | médio |
| Aesop | parcial (responsive) | médio |
| Tesla | ❌ desktop-first em hierarquia | baixo |

→ **Whoop + Allurium são as referências MAIS importantes** pra Impulso. Tesla é referência cinematográfica de hero, mas não de UX mobile.

---

## Os 5 sites estudados

⚡ **Recalibração 02/05/2026 — BR-first:** estudo recalibrado pra **3 BR + 2 internacionais** após princípio λ.br cravado. Cliente Impulso é mid-market BR, referências precisam ser brasileiras de sucesso real.

| # | Site | Origem | Vertical | Escopo de estudo |
|---|---|---|---|---|
| 1 | [Reserva](https://www.usereserva.com) | 🇧🇷 | E-commerce moda mid-premium BR | **Substituiu Aesop.** Modelo completo pra UrbanFeet, EV, moda fem, futuros e-commerces |
| 2 | [Nubank](https://www.nubank.com.br) | 🇧🇷 | SaaS / app — design system BR | **Substituiu Huberman.** Design system BR mais maduro. Aplicável a TODA LP Impulso |
| 3 | [Rennora Beauty](https://www.rennorabeauty.com) | 🇧🇷 | D2C funil-performance Shopify | Ex-Allurium (rebrand 2024-2026). Funil 9-seções + garantia gigante + Shopify BR |
| 4 | [Tesla Solar/Powerwall](https://www.tesla.com/solar) | 🇺🇸 | Energia residencial | **Escopo limitado:** estudar só hero cinematográfico + calculator. Não estrutura toda. |
| 5 | [Whoop](https://www.whoop.com) | 🇺🇸 | Wearable saúde — paradigma mobile | **Escopo limitado:** estudar só mobile-first + dark UI + neon accent. Não copy/posicionamento. |

⚠️ **Histórico das mudanças:**
- v1.0 → tinha Tesla + Aesop + Whoop + Allurium + Huberman (4 internacionais + 1 que era US)
- v1.2 → recalibração BR-first: Aesop saiu, **Reserva entrou**. Huberman saiu, **Nubank entrou**. Allurium virou Rennora (rebrand BR descoberto via CIC). Tesla e Whoop **mantidos com escopo limitado** (paradigmas universais).

---

## H) Matriz comparativa

| Site | Tipografia | Paleta-base | Tom | Animação | H1:body | Framework copy | Padrão único |
|---|---|---|---|---|---|---|---|
| **Tesla** | Gotham + Helvetica | preto/branco + azul `#3E6AE1` | técnico-silencioso | scroll fade + calculator interativo | ~5x | PAS invertido | calculator dinâmica |
| **Aesop** | Suisse Int'l + Optima | cream warm `#FBF8F1` + preto suave | editorial-austero | quase estática | ~3x | anti-framework / showroom | nav que expõe foto |
| **Whoop** | Proxima Nova + DINPro | preto `#000` + teal `#00F19F` | atlético-científico | progressive disclosure + GSAP | ~5x | Hormozi Value + PAS | dark + neon na fitness |
| **Huberman** | serif editorial + sans humanista | charcoal + cream + azul | acadêmico-acessível | mínima + Algolia search | ~3x | StoryBrand clássico | taxonomia rica + zoneamento |
| **Allurium** | sans Shopify (Poppins/Inter) | rosa/lavanda + gold + branco | acolhedor-comunidade | quase nenhuma | ~3.5x | PAS + Hormozi Value | funnel-LP separada + garantia gigante |

---

## I) 10 padrões transversais cravados (LEI do design system Impulso v2)

⚡ **regra:** padrões aparecem em 3+ dos 5 sites. Adoção obrigatória.

### 1. Paleta 2-base + 1-accent (NUNCA 3 accents)
- Tesla (preto/branco + azul), Whoop (preto/branco + teal), Aesop (cream/preto + yellow muted), Huberman (charcoal/cream + azul)
- **Por que:** elimina decisão de cor a cada componente. Mais de 1 accent quebra o sistema.
- **Lei:** 2 base + 1 accent. Sempre.

### 2. Hero = 1 headline + 1 subhead + 2 CTAs
- Tesla, Whoop, Allurium, Huberman
- **Por que:** primeira dobra processada em <3s. Mais que isso o cérebro desiste.
- **Lei:** CTA primário (verbo de ação) + CTA secundário (verbo de exploração).

### 3. Espaço negativo abundante
- Tesla, Aesop, Huberman, Whoop (em zonas)
- **Por que:** reduz ansiedade cognitiva. Premium percebido vem de espaço vazio.
- **Lei:** padding mínimo entre seções: **96–128px desktop / 64px mobile.**

### 4. Fade-in on scroll com stagger
- Tesla, Whoop, Huberman, Allurium (suave)
- **Por que:** dá pista de site vivo sem custar performance.
- **Lei:** `opacity 0→1 + translateY 16→0px com 80ms stagger entre filhos`.

### 5. Número-gigante-como-hero-statement
- Tesla (kWh/garantia), Whoop (data), Allurium (100k mulheres)
- **Por que:** prova condensada em 1 dado. Mais persuasivo que parágrafo.
- **Lei:** cada LP precisa de pelo menos 1 número em **fonte 80px+**.

### 6. BG warm em vez de branco puro ⭐
- Aesop (cream), Huberman (cream em zonas), Allurium (off-white/lavanda)
- **Por que:** branco puro `#FFFFFF` parece template gratuito. Off-white sinaliza intencionalidade.
- **Lei:** background default Impulso = `#FAF7F2` (não `#FFFFFF`).

### 7. Prova social na 1ª ou 2ª dobra
- Whoop (atletas), Allurium (100k), Huberman (institucional Stanford), Tesla (specs como prova)
- **Por que:** 1ª pergunta do usuário BR é "isso é real?". Resposta antes da pergunta = conversão.
- **Lei:** uma forma de prova (número, logo, foto, depoimento) **na primeira ou segunda dobra**.

### 8. Card com imagem centralizada + baseline alinhada
- Aesop, Whoop, Huberman
- **Por que:** reduz ruído. Olho varre rápido.
- **Lei:** em qualquer grid de itens, imagem centralizada + altura fixa.

### 9. Microinteração leve (não bombástica)
- Todos os 5
- **Por que:** confirma clicabilidade sem distrair.
- **Lei:** `translateY -2px` / `opacity 0.9` / cor de fundo mudando 5%. Nada de bounce/wiggle/shake.

### 10. Footer-CTA agressivo final
- Tesla, Whoop, Allurium, Huberman (Premium)
- **Por que:** quem chegou no fim é alta intenção.
- **Lei:** repita o CTA primário em formato gigante full-bleed antes do footer real. **Nunca termine só com links.**

---

## J) Recomendações específicas pra Impulso 2026

### J.1 · 3 mudanças no padrão atual

#### 🔴 Mudança 1 — `#FFFFFF` → `#FAF7F2` como background default
- Mudança de 1 linha de CSS, percepção de premium sobe ~20% em landing tests
- Referência: Aesop, Huberman
- **Custo:** zero. **Implementar:** essa semana em template-base.

#### 🔴 Mudança 2 — Hierarquia tipográfica com 2 famílias
- Hoje Impulso usa Inter em tudo (body + headlines)
- Adotar **escala 1.333 (perfect fourth)** com **serif humanista em H1/H2** + **sans neutra em body**
- Stack proposta:
  - Headlines: **Söhne** ou **Optima** (custom) ou **Georgia** (fallback gratuito)
  - Body: **Inter** ou **Suisse Int'l**
- Cria registro premium em 1 segundo (Aesop e Huberman vivem disso)

#### 🔴 Mudança 3 — Estrutura funil-LP de 9 seções
Modelo Allurium adaptado:
1. Hero
2. Prova social (logos/números)
3. Problema
4. Solução
5. Como funciona
6. Depoimentos com foto
7. **Garantia bloco gigante** (não opcional)
8. Oferta/preço
9. FAQ

Hoje Impulso usa 5-7. Mover pra 9 com **bloco de garantia gigante** vira lei pra D2C/infoproduto/clínica.

### J.2 · Aplicação imediata na Aura Energy v5

#### ✅ Calculadora interativa antes do formulário
**Aura JÁ TEM** isso (simulador no hero) — tá certo. Continuar.

#### 🤔 Dark UI + 1 accent verde neon (modelo Whoop)
- **Proposta agente:** inverter pra preto + verde elétrico (#00F19F ou #4ADE80)
- **Argumento agente:** categoria solar BR é toda igual — Whoop fez isso em fitness e virou referência
- **Verbo discorda parcialmente:** Renato JÁ aprovou light premium. Inverter joga fora a validação real.
- **Recomendação Verbo:** manter light premium como base, mas adicionar **zoneamento Huberman** — 1-2 seções específicas em dark contrastante (ex: Investimento + Janela Fio B). Tira o "tudo igual" sem quebrar o que funciona.

### J.3 · 1 padrão a adotar urgentemente

#### ⚡ Footer-CTA gigante antes do footer real
- Aparece em 4 dos 5 sites
- Trivial implementar (1 seção full-bleed + headline + 1 CTA)
- Captura usuário de alta intenção que rolou a página inteira
- **Sem isso:** deixa 5-10% de conversão na mesa em todo cliente
- **Padronizar:** componente `<FinalCTA>` no design system esta semana

---

## A) Identidade visual canônica Impulso v2

### Tipografia (cravada via CIC Aesop)

⚡ **Insight CIC**: Aesop usa **Suisse Int'l 400/500** como sans default + **Zapf-Humanist 400** em peças editoriais (PDPs, hero alternativos). NUNCA peso 600+ na UI principal.

```css
/* Stack tipográfico Impulso v2 (revisado 02/05) */
--font-heading: 'Suisse Int\'l', 'Inter', system-ui, sans-serif;  /* Default sans para H1-H6 */
--font-editorial: 'Zapf-Humanist', 'Optima', 'Georgia', serif;     /* Opcional pra editorial/luxo */
--font-body: 'Suisse Int\'l Medium', 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;

/* Pesos cravados — máximo 500 em UI */
--weight-regular: 400;  /* body, headlines lights */
--weight-medium:  500;  /* botões, body bold, ênfase */
/* ❌ NUNCA usar 600/700/800 em UI principal — quebra premium */

/* Escala modular 1.333 (perfect fourth) */
--text-xs:   12px;  /* caption, label */
--text-sm:   14px;  /* small body */
--text-base: 16px;  /* body */
--text-lg:   18px;  /* lead body */
--text-xl:   24px;  /* H4 */
--text-2xl:  32px;  /* H3 */
--text-3xl:  43px;  /* H2 */
--text-4xl:  57px;  /* H1 mobile */
--text-5xl:  76px;  /* H1 desktop */

/* Tracking */
H1, H2: -0.01em (apertado)
body: 0 (neutro)
labels: +0.05em (aberto, uppercase)

/* Line-height */
headlines: 1.1
body: 1.65
```

### Paleta default (cravada via CIC Aesop — valores factuais)

```css
/* Base — Aesop-derived */
--cream-50:    #fffef2;  /* off-white warm DEFAULT (substitui #FAF7F2) */
--cream-100:   #f6f5e8;  /* surface elevada / cards */
--cream-200:   #f7ecdd;  /* warm accent peach */
--stone-300:   #bcbbb4;  /* borders */

/* Ink (text) */
--ink-500:     #666666;  /* meta text, captions */
--ink-700:     #333333;  /* texto primário */
--ink-900:     #252525;  /* footer / inverso */

/* Dark zone (Huberman model) */
--bg-dark:     #0F0F0F;  /* dark sections em zoneamento */

/* Accents — opcionais por cliente */
--accent-bronze:  #945c26;  /* editorial warm */
--accent-brick:   #ca432f;  /* sale / alert */

/* Brand (define por cliente, NUNCA mais que 1 accent) */
--brand-primary: <varia por cliente>
--brand-accent:  <varia por cliente — UM SÓ>
```

**Fonte:** auditoria CIC Aesop, viewport 986×577px, 3000 nós DOM amostrados (02/05/2026).

### Espaço negativo (cravado via CIC Aesop)

```
Padding entre seções:
  Desktop: 96-128px (clamp(96px, 8vw, 128px))
  Mobile:  64-80px

Container:
  Largura máxima: 1200px (75rem) — Aesop canônico
  Padding lateral mobile: 15-24px
  Padding lateral desktop: 12-48px (interno wrapper)

Botões:
  ⚠️ Aesop usa border-radius: 0 (luxo/editorial)
  ✅ Default Impulso: border-radius: 8px (médio)
  Altura mínima touch: 48px (mobile, Apple HIG)
  Padding: 13px 24px 12px (Aesop hit area, replicar)
```

---

## B) Estrutura canônica de seções

### Sequência mínima viável LP Impulso (9 blocos)

1. **Header sticky** (logo + nav curta + CTA)
2. **Hero** (1 headline + 1 subhead + 2 CTAs + visual hero — vídeo OU imagem cinematográfica OU calculadora)
3. **Prova social** (logos / números / atletas / institucional — na 1ª ou 2ª dobra)
4. **Problema** (dor que o cliente sente — copy PAS)
5. **Solução** (como Impulso/cliente resolve)
6. **Como funciona** (3-4 passos com prazo cravado)
7. **Depoimentos com foto** (mínimo 3, com nome + cidade + métrica)
8. **Garantia bloco gigante** (não em fine print — bloco próprio)
9. **Oferta/Preço** (transparente, com financiamento se aplicável)
10. **FAQ** (8-12 perguntas)
11. **Footer-CTA gigante** (full-bleed + headline + 1 CTA)
12. **Footer real** (links + CNPJ + redes)

### Sequência opcional por nicho

| Nicho | Adicionar seções |
|---|---|
| **Saúde/clínica** | Credenciais técnicas (CRM, ART), Antes/Depois, Mapa de unidades |
| **E-commerce** | Grid de produtos, Carrinho persistente, Free shipping bar |
| **Energia/solar** | Calculadora interativa, Catálogo de Kits, Janela urgência (Lei 14.300) |
| **Autoridade pessoal** | Topics page, Mídia/Press, Newsletter sign-up |
| **Infoproduto** | Conteúdo de aula prévia, Bônus stack Hormozi, Garantia 30+ dias |

---

## C) Animação e movimento

### Catálogo de animações (5 cravadas)

1. **fade-up-on-scroll** (modelo Tesla/Huberman/Allurium)
   - `opacity 0 → 1` + `translateY 24px → 0`
   - Duração: 800ms · easing: `cubic-bezier(0.16, 1, 0.3, 1)`
   - Stagger entre filhos: 80-100ms
   - **Quando usar:** TODAS as seções abaixo do hero

2. **counter-animado** (Tesla/Whoop)
   - Número conta de 0 ao valor final
   - Duração: 1.4-1.8s · easing: `easeOutCubic`
   - Tabular-nums obrigatório
   - **Quando usar:** estatísticas, simuladores, KPIs

3. **glow-rotativo-conic** (cravado AgendaPRO + Aura)
   - `conic-gradient` em rotação 6-8s linear infinite
   - **Quando usar:** card destaque (simulador, pricing principal, formulário)

4. **marquee-horizontal** (cravado Aura)
   - Translação X infinita
   - Mask gradient nas pontas
   - **Quando usar:** logos de marcas/parceiros/cidades atendidas

5. **microinteração-hover** (todos os 5)
   - `translateY(-2px)` + `box-shadow` cresce
   - 250ms `cubic-bezier(0.16, 1, 0.3, 1)`
   - **Quando usar:** cards, botões, links importantes

### Stack técnica decidida

- **CSS puro** (`@keyframes` + transitions + IntersectionObserver) → 90% dos casos
- **Framer Motion** → quando precisar de animação coreografada complexa (raro)
- **Lottie/Rive** → mockups de produto / dashboards animados
- ❌ **GSAP** → só se Framer Motion não der conta (até hoje, nunca)
- ❌ **Three.js** → fora do escopo Impulso 2026 (volta em 2027)

---

## D) Frameworks de copy

### Headline patterns extraídos

| Padrão | Exemplo Tesla | Exemplo Whoop | Exemplo Allurium | Aplicação BR |
|---|---|---|---|---|
| **[Substantivo nominalizado]** | "Powerwall" | — | — | "Solar." / "Sua agenda." |
| **[Verbo + objeto direto]** | "Power Your Home" | "Unlock Human Performance" | "Engineered for Black Women" | "Reduza sua conta em 90%" |
| **[Promessa + público específico]** | — | — | "Hair growth serum for [público]" | "Sistema solar pra [nicho]" |

### Tom de voz Impulso por nicho

| Nicho | Tom | Modelo | Verbos típicos |
|---|---|---|---|
| Energia/tech | Técnico-silencioso | Tesla | gerar, reduzir, instalar, transformar |
| E-commerce premium | Editorial-austero | Aesop | descobrir, contemplar, sentir |
| Profissional saúde | Acadêmico-acessível | Huberman | entender, cuidar, acompanhar |
| Performance/fitness | Atlético-científico | Whoop | desbloquear, performar, monitorar |
| D2C funil | Acolhedor-comunidade | Allurium | confiar, juntar, garantir |

---

## E) Decisões técnicas

### Stack default Impulso v2

```
Framework:    Next.js 16 (App Router + RSC)
Styling:      Tailwind v4
Fonts:        Inter (Google) + Söhne/Georgia (custom/fallback)
Animation:    CSS @keyframes + IntersectionObserver
              Framer Motion (quando coreografia complexa)
Forms:        Server Actions + Zod
CMS:          Sanity (cliente edita) ou Markdown local (estático)
Deploy:       Vercel
Analytics:    GA4 + Meta Pixel
```

### Stack opcional por necessidade

| Necessidade | Tech |
|---|---|
| E-commerce | Shopify Hydrogen ou Medusa.js |
| Búsqueda | Algolia (modelo Huberman) ou MeiliSearch |
| Animação 3D | Spline (drag-drop) — nunca Three.js custom |
| Vídeo | Mux.com (não YouTube embed) |
| Email | Resend |
| Pagamento | Mercado Pago (BR) ou Stripe (global) |

---

## F) Análises individuais (resumos)

### F.1 Tesla Solar
- **Tipografia:** Gotham Medium + Helvetica fallback. H1 64-80px / 40px mobile. Tracking -0.01em.
- **Paleta:** `#000` / `#FFFFFF` / `#171A20` chrome / `#3E6AE1` CTA azul.
- **Hero:** vídeo cinematográfico autoplay/loop/muted + headline curtíssima (1 palavra "Powerwall") + 2 CTAs.
- **Padrão único:** **calculator interativo de produto** (Powerwall) — input → animação dinâmica do produto.
- **Aplicar Aura:** já temos simulador. Adicionar **vídeo no hero** (B-roll ou imagem still cinematográfica), reduzir headline pra 1 palavra ou 1 linha curta.
- **Não copiar:** Tesla "Order Online" sem agente (não cabe BR — solar exige ART, projeto, vistoria).

### F.2 Aesop
- **Tipografia:** Suisse Int'l (sans neutra) + Optima (Zapf Humanist). H1 ~40-56px (Aesop nunca grita).
- **Paleta:** `#FBF8F1` background cream warm + `#1A1A1A` preto suave + `#7A7A7A` muted. **Monocromático com variações sutis.**
- **Hero:** foto produto centralizada simétrica + texto pequeno ao lado. **Zero copy de venda.**
- **Padrão único:** simetria absoluta + baseline alinhada + nav que expõe foto do produto on-hover.
- **Aplicar Impulso:** **bg cream warm como default** (#FAF7F2). Combo serif (headlines) + sans (body).
- **Não copiar:** densidade zero de prova social. Mid-market BR ainda precisa de garantia/depoimento/urgência.

### F.3 Whoop
- **Tipografia:** Proxima Nova (text) + DINPro Bold (números). H1 72-96px (gigante).
- **Paleta:** `#000` background dominante + `#FFFFFF` text + `#00F19F` teal neon (CTA, highlights).
- **Hero:** vídeo atleta + UI da pulseira sobreposta + headline curta.
- **Padrão único:** **dark UI + 1 accent neon** virou referência da categoria fitness.
- **Aplicar Impulso:** dark zone em 1-2 seções estratégicas (modelo zoneamento Huberman), não tema inteiro.
- **Não copiar:** progressive disclosure com 4 camadas de animação — caro pra agência pequena.

### F.4 Andrew Huberman
- **Tipografia:** serif editorial em headlines + sans humanista no body. H1 ~48-64px (registro acadêmico).
- **Paleta:** `#0A0A0A` charcoal warm + `#F5F1EB` cream em seções claras + accent azul/cyan.
- **Hero:** foto Huberman + headline editorial curta + CTA podcast.
- **Padrão único:** **zoneamento dark↔cream entre seções** (sem dark toggle — cada seção pede luz própria) + **taxonomia rica** (22 tópicos × 90 sub-tópicos).
- **Aplicar Impulso:** zoneamento + taxonomia rica pra clientes com biblioteca de conteúdo (criadores, infoprodutos).
- **Não copiar:** Algolia search custom — caro. Alternativa: busca nativa Sanity/Webflow com filtros.

### F.5 Allurium Beauty
- **⚠️ Reposicionado:** D2C funil-performance (não clínica BR como pensamos)
- **Tipografia:** sans Shopify (Poppins/Montserrat/Inter). H1 ~40-56px.
- **Paleta:** rosa/lavanda `#F5E6F0` + dourado `#D4A574` + branco + `#1A1A1A` text.
- **Estrutura:** funil 9 seções clássico (Hero → Prova → Problema → Solução → Ciência → Depoimentos → Garantia → Bundle → FAQ).
- **Padrão único:** **funnel-LP separada do site institucional** (URL distinta pra Meta Ads) + **garantia 120 dias bloco gigante**.
- **Aplicar Impulso:** TUDO da estrutura. Mover de 5-7 seções pra 9. Garantia explícita gigante obrigatória.
- **Não copiar:** popup/exit intent agressivo demais (quebra percepção premium).

---

## M) Insights factuais Rennora (CIC 02/05/2026)

⚡ **Auditoria mobile completa via CIC.** Dados factuais que mudam premissas do sistema.

### M.1 — Padrão DUAL-DOMAIN (descoberta arquitetônica)

**Operação Rennora roda 2 sites em paralelo:**

| Domínio | Plataforma | Função |
|---|---|---|
| `rennorabeauty.com` | Shopify (`allurium-beauty.myshopify.com` backend) | Home institucional · SEO · retenção · catálogo · destino orgânico |
| `try.alluriumbeauty.com/fpp-2-v2` | Funnelish (proprietário) | LP single-CTA · destino paid ads · preserva pixel/conversion-tracking |

**Por que não migrou tudo pra Rennora:**
- Pixel/conversion-tracking do Meta/Google Ads vive no domínio antigo
- Mexer ali quebra histórico de campanhas e reduz performance ML
- Backend Shopify ainda é `allurium-beauty.myshopify.com` (URLs Recharge/Attentive)
- Mesma conta Hotjar (2730634) nos 2 domínios → operação UNIFICADA por baixo

**Aplicação Impulso:**
Cliente sério não tem 1 LP. Tem 2 operações:
1. Site institucional (Next.js ou Shopify) — orgânico, SEO, marca
2. LP de funil separada (Funnelish, próprio domínio "try.X.com.br") — paid ads, single-CTA, urgência

**Implementação Aura Energy (futuro):**
- `auraenergy.com.br` (site institucional — converter URL atual Vercel quando comprar domínio)
- `try.auraenergy.com.br/economize` ou similar (LP de funil pra Meta Ads — single CTA "Quero meu orçamento")
- Pixel/Conversion-tracking nos DOIS, mas LP de funil é a que recebe tráfego pago

### M.2 — Paleta real (anti-preconceito beauty)

**Hipótese antiga (rejeitada):** rosa + lavanda + dourado (típico D2C beauty feminino)

**Realidade factual Rennora (3000 nós DOM):**

```css
--bg-primary:    #ffffff;  /* branco puro */
--text-primary:  #000000;  /* preto puro */
--text-body:     #3d4246;  /* slate dark (links, parágrafos) */
--accent-sale:   #e32c2b;  /* vermelho-sale (preço riscado, "OFERTA") */
--bg-disclaimer: #f7f7f7;  /* off-white footer */

/* AUSENTES: nenhum rosa, nenhuma lavanda, nenhum dourado */
```

**Insight:** D2C BR de hair growth (público black women, 100k+ clientes) usa **monocromático brutalista** estilo Apple-store. NÃO usa paleta beauty warm.

**Aplicação Impulso:** não inferir paleta por estética de nicho. **Depurar o que CONVERTE.** Cliente premium-funcional ≠ cliente luxo-soft.

### M.3 — Tipografia real

```css
font-family: Jost, sans-serif;
/* Google Fonts, APENAS peso 400 carregado */
/* Lixo de tema declara Montserrat e Poppins mas nunca carrega */

H1 hero:    65px / 78px (1.2) / weight 400 / #fff sobre escuro
H2 section: 36.4px / 43.7px (1.2) / weight 400 / #000
H3 step:    17px / 20.4px / weight 400 / #000
Body:       16px / weight 400 / #3d4246
CTA:        16px / letter-spacing 1.28px / weight 400 / #fff sobre #000
```

**Confirma princípio Aesop:** pesos máximo 500, mesmo em CTAs. **Premium não é bold.**

### M.4 — CTA primário (anatomia computada)

```css
.btn.hero__btn {
  background: #000;
  color: #fff;
  padding: 10px 18px;
  height: 47.97px;
  border: 1px solid rgba(0,0,0,0); /* transparente, reservado pra hover state */
  border-radius: 2px;
  letter-spacing: 1.28px;
  transition-duration: 0s; /* ⚠️ SEM ANIMAÇÃO */
}
```

**Achado contraintuitivo:** CTA real **não tem feedback de hover/tap animado**. Em mobile real só tem highlight default do iOS. **E converte 100k+ clientes.**

### M.5 — Zero animação no site inteiro

- Header NÃO sticky (`position: relative`) → some no scroll, fricção mobile
- Sem `IntersectionObserver`, sem AOS, sem GSAP, sem Framer
- Sem fade-up nas seções
- Sem vídeo no hero (imagem estática)
- Sem sticky CTA bottom mobile

⚡ **Reconcilio com princípio λ.tech-movimento (cravado em 01/05):**

| Tipo de LP | Movimento? | Por quê |
|---|---|---|
| **Tech/SaaS/inovação** (AgendaPRO, Aura Energy, RadarPRO, ImpulsoDesign) | ✅ obrigatório | Movimento gera percepção premium · empresa de tecnologia precisa parecer viva |
| **D2C funil-performance** (UrbanFeet, e-commerce, infoproduto, beauty) | ❌ dispensável | Animação é distração · foco em paid + checkout · simples converte |

→ **Princípio λ.tech-movimento NÃO é universal.** Aplica a tech/SaaS/serviço inovador. NÃO aplica a D2C funil onde a margem está em otimização de paid ads e taxa de conversão pura.

### M.6 — LP funnel: single CTA · bundle na step 2

LP Allurium (`fpp-2-v2`) **não mostra bundle/preço comparativo na primeira página**. Apenas:
- 1 promessa ("Imagine life without bald spots")
- 1 garantia ("120 days money-back")
- 1 CTA ("BUY NOW")
- 1 oferta ("OFERTA ESPECIAL HOJE 63% OFF")

**Bundle (1×/3×/6× frascos)** aparece **na próxima página do funil** (post-click).

⚡ **Padrão funil-LP cravado:**
- LP de Meta Ads = **1 decisão por página**
- Bundle, upsell, opções vão pra **step 2** (após confirmar interesse)
- Reduz fricção cognitiva mobile (cliente não precisa escolher na primeira tela)

### M.7 — Stack analytics potente (foco real do D2C)

```
Klaviyo (popup + email + on-site tracking)
Attentive (SMS marketing)
Hotjar 2730634 (heatmaps + recordings)
GTM AW-639853085 (Google Ads)
GA4 G-LLSPZ6PK6E
Facebook Pixel
Formsable (form abandonment)
145 JS requests, ~12KB-2MB
jQuery 1.12.0 (legado, mas funcional)
```

**Insight:** D2C funil bem-sucedido investe em **analytics e remarketing**, não em arquitetura limpa. **Performance > elegância de stack.**

**Aplicação Impulso:** quando montar LP de funil pra cliente (Aura/UrbanFeet/etc), garantir:
1. ✅ Pixel Meta Ads (essencial)
2. ✅ GA4 (essencial)
3. ✅ Hotjar (heatmaps revelam fricção real)
4. ✅ Klaviyo ou Mailchimp (email capture)
5. ✅ Formsable ou similar (form abandonment)

---

## L) Regras Mobile-first cravadas

⚡ **Toda LP Impulso é projetada começando pelo viewport 375-414px e escalando pra desktop.** Não o contrário.

### Tipografia mobile (revisado via CIC Aesop)

⚡ **Insight CIC Aesop:** hierarquia mobile MUITO mais comprimida que pensamos. Aesop H1=H2=24px em mobile (decisão editorial luxo). Pra Impulso (mid-market BR) **manter peso visual maior**.

```css
/* Escala mobile Impulso (entre Aesop comprimido e desktop tradicional) */
--text-h1-mobile:    36-44px    /* (Aesop usa 24px — luxo. Impulso: meio termo) */
--text-h2-mobile:    28-32px
--text-h3-mobile:    20-22px
--text-body-mobile:  16px       /* MÍNIMO — anti-zoom iOS */
--text-caption-mobile: 13-14px

/* Line-height mobile */
headlines: 1.1
body: 1.5-1.6

/* Aesop reference (luxury/editorial) */
--text-h1-aesop-mobile: 24px
--text-h2-aesop-mobile: 24px
--text-body-aesop-mobile: 14px
```

**Quando usar Aesop-style (24px H1)?** Cliente luxury/editorial puro (perfumaria, joalheria, alta gastronomia). Pra todo o resto, Impulso v2 fica 36-44px H1 mobile.

### Espaço mobile

```
Padding entre seções:  64-80px (clamp(64px, 12vw, 80px))
Container padding:     16-24px (não 48px do desktop)
Gap entre cards:       12-16px (stack vertical, não grid)
```

### CTAs e forms (crítico mobile)

| Regra | Valor |
|---|---|
| Altura mínima botão | **48px** (Apple HIG / Material) |
| Input font-size | **16px+** (anti-zoom iOS) |
| CTA primário no scroll | **Thumb zone** (terço inferior do viewport) |
| Form layout | 1 campo por linha, full-width |
| Estado :hover | ❌ não existe — substituir por `:active` |
| Tap feedback | `transform: scale(0.98)` em :active |

### Animação mobile (60fps é difícil)

- ✅ `transform` + `opacity` (GPU-accelerated)
- ✅ `will-change: transform` em elementos que vão animar
- ❌ `top`, `left`, `width`, `height` animados (CPU, trava)
- ❌ Vídeo hero pesado (>500kb em 4G é cruel) — usar imagem WebP <200kb
- ✅ Microinteração leve: tap feedback `scale(0.98)` em :active

### Hierarquia mobile

- ⚡ **1 mensagem por scroll de viewport** (não 3)
- **Thumbstop test**: cada scroll deve "parar o polegar"
- Número-statement gigante: máximo **60-72px** (se for 80px+ não cabe em 375px)

### Navegação mobile

- Header sticky compacto: 56-64px de altura
- Menu hamburger OU bottom nav (PWA app-like)
- ⚡ **Botão WhatsApp flutuante** = padrão Impulso (Aura já tem)

### Criativos mobile-first

| Formato | Prioridade | Onde |
|---|---|---|
| 9:16 (1080×1920) | ⭐ alta | Stories Insta + Reels + TikTok |
| 4:5 (1080×1350) | alta | Feed Insta + Meta Ads |
| 1:1 (1080×1080) | média | Feed quadrado legacy |
| 16:9 (1920×1080) | baixa | YouTube + apresentação |

### Workflow de design mobile-first

1. **Wireframe começa em 375px** (iPhone SE base)
2. **Componente é mobile primeiro**, breakpoints adicionam complexidade pra cima
3. **Tailwind: classes default são mobile**, prefix `sm:` `md:` `lg:` adicionam pra telas maiores
4. **Antes de deploy**: testar em iPhone real + viewport 375px Chrome DevTools
5. **Lighthouse mobile**: meta de 90+ em performance

### Anti-padrões a banir

- ❌ Cards 3-up em mobile (vira 1-up automático)
- ❌ Texto cortado por overflow (responsividade ruim)
- ❌ Tipografia desktop em escala mobile (parece template gratuito)
- ❌ Form com label fora do input (consome thumb zone)
- ❌ Modal não fullscreen em mobile
- ❌ Hover state como única interação (sem `:active` fallback)

---

## Histórico de revisões

- **v0.1 — 02/05/2026 02h** — estrutura inicial (Verbo s04)
- **v1.0 — 02/05/2026 03h** — análise dos 5 sites integrada · 10 padrões transversais cravados · 6 recomendações específicas · stack técnico decidido (Verbo s04 + agente)
- **v1.1 — 02/05/2026 03h** — ⚡ Lei zero Mobile-first cravada · seção L com regras concretas · Whoop+Allurium reposicionados como paradigma mobile (Verbo s04)
- **v1.2 — 02/05/2026 04h** — 🔬 CIC Aesop depuração factual integrada: paleta `#fffef2` (substitui `#FAF7F2` inferido), Suisse Int'l + Zapf-Humanist confirmadas, pesos máx 500 cravados, container 1200px, hierarquia mobile Aesop = 24px (luxo) vs Impulso 36-44px (mid-market) (Verbo s04 + CIC)
- **v1.3 — 02/05/2026 04h30** — 🇧🇷 Recalibração BR-first (princípio λ.br cravado): substituídos Aesop→Reserva, Huberman→Nubank. Allurium virou Rennora via CIC. Tesla+Whoop mantidos com escopo limitado. Final: 3 BR + 2 universais. Aesop continua como referência factual de cream warm/tipografia (dados CIC permanecem válidos), mas não é mais um dos 5 estudados (Verbo s04)
- **v1.4 — 02/05/2026 05h** — 🔬 CIC Rennora depuração mobile completa. Descoberta dual-domain (home Shopify + funnel Funnelish). Paleta real factual: monocromático brutalista (#000+#fff+#3d4246+#e32c2b, NÃO rosa/lavanda inferido). Tipografia: Jost peso 400 único. Zero animação no site → reconcilio com λ.tech-movimento (D2C funil dispensa, tech LP obriga). LP funil = single CTA, bundle vai pro step 2. Análise completa em §M (Verbo s04 + CIC)

— λ.v

---

**Ver também:** [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[STATUS-IMPULSO]] · [[IMPULSO_CORE_SYSTEM_V2]] · [[IDENTIDADE-IMPULSO-DIGITAL]]
