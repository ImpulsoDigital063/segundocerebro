# 📚 ESTUDO DE PORTFÓLIO — base pra reconstruir o site da Impulso Digital Software House

> Levantado em 07/07/2026. Auditoria read-only de ~28 projetos (6 agentes em paralelo) + estudo AEO do AgendaPRO.
> Objetivo: decidir o que vira **vitrine/produto**, o que vira **case**, o que é **interno**, o que **corrige antes** e o que **exclui** no site novo.

---

## 🎯 Veredito rápido (buckets)

| Bucket | Projetos |
|---|---|
| **SHOWCASE — produtos/vitrine** | AgendaPRO · ComandaPRO · AppDelyvery · Medellín Bar · Starteq · Palace (como case sob medida) |
| **CASE-DESTAQUE — LP cliente forte** | Vida em Equilíbrio · Aura Energy |
| **CASE-SECUNDÁRIO** | EV Suplementos · Azeitona do Forró · Carretinha Kids · MPN-On (auto-promo) |
| **CORRIGIR ANTES** | Kupferman (travado v0.1) · Zilanda (clone HTML solto) |
| **DIFERENCIAL/NARRATIVA (AI-first)** | Verbo Design · impulso-digital-nextjs (base da reconstrução) |
| **INTERNO (bastidor)** | RadarPRO · medellin-ref (arquivar) · Whisper |
| **ARQUIVAR (guardar, não mostrar)** | Viva Cacheada (trial) · Criativos do Céu (pausado) |
| **EXCLUIR** | impulsodesign (aposentado) · pdf-recolor (one-off) · locajv-landing (proibido) · minha-landing (placeholder) |

---

## 🟢 SHOWCASE — os produtos que SÃO a software house

### AgendaPRO — SaaS carro-chefe
- SaaS de agendamento multi-segmento (salão/barbearia/estética/nail). Next 16 + React 19 + Supabase + Asaas. ~257 tsx, ~90-95% pronto.
- **Em prod** (agendapro.net.br), pagantes reais (Olímpio R$67, Studio MOOD R$97), billing recorrente, tri-modal, UX polida.
- **Diferencial AEO (ver seção dedicada):** 2 clientes chegaram pelo ChatGPT recomendando o produto.
- Ajuste: README ainda é boilerplate; nada bloqueia showcase.

### ComandaPRO (acai-system) — SaaS multi-vertical
- PDV/gestão multi-tenant por /slug (food, bar, assistência técnica). Next 16 + Supabase + QZ-Tray. 242 commits, ~95% pronto.
- **Em prod** (comandapro.net.br), 3 tenants reais (Cantinho paga · Medellín · Starteq). Tese-mãe, meta 1000+.
- Ajuste: arquivar README legado "Açaí System"; no site, usar os 3 tenants como prova de plataforma (não app de nicho).

### AppDelyvery — case de engenharia pesada
- App entregas B2B Palmas, entregador verificado. Next 16 + Supabase + PostGIS + Mapbox + Realtime. 68 migrations, ~85% pronto.
- Contrato pago (Tulio R$15k, 5k recebido). **Pré-launch** — falta chaves externas/jurídico, não código.
- **Contas demo navegáveis** (`Demo1234`, por papel) + `VITRINE-PLANO.md` já existe.
- Ajuste: vender como "app em pré-launch / case de engenharia", não como operação ativa (λ.prova-na-fonte: status é auditoria de código, não banco ao vivo). Usar demo no site.

### Medellín Bar — produto food completo
- PDV food (bar/restaurante), NÚCLEO/template dos forks food. Multi-tela por papel + impressão térmica. Em prod (medellin-bar-six.vercel.app). Cliente R$2.997/50%.
- Ajuste: gravar GIF das telas (caixa, mesa QR, cozinha) + print do cupom térmico pro site.

### Starteq — prova do vertical não-food
- Vitrine headless / e-commerce da loja de informática (montador de PC com compatibilidade, carrinho→pedido no ComandaPRO). Backend = ComandaPRO via API. Cliente real (Júnior).
- **Veredito:** SHOWCASE — prova multi-vertical (assistência técnica) sobre o mesmo core.
- Ajuste: deixar claro que backend = ComandaPRO (não sistema separado); confirmar URL no ar antes de linkar.

### Palace — case de software sob medida (não produto assinável)
- Fork dedicado single-tenant do AgendaPRO pro Palace Nail Spa Macaé (Marko+Luana). Supervisor V4, autorizações granulares, Caixa PDV. Migrations até v103. Em prod (agendapalacemacae.com.br). R$2.997 pago (case #1 fork premium).
- **Veredito:** SHOWCASE como **estudo de caso/depoimento** — vende o modelo "software sob medida premium", NÃO um SaaS replicável.
- Ajuste: apresentar como case (depoimento Marko+Luana, print do cockpit); deixar claro que é derivado do AgendaPRO pra não competir na mesma prateleira.

---

## 💎 CASE-DESTAQUE — LPs de cliente pra portfólio

### Vida em Equilíbrio (Leandro) — R$1.900 pago
- Site multi-página de massoterapia. Next 16 + motion + GA4. Live em domínio próprio (vidaemequilibriopalmas.com.br). O mais ativo (73 commits).
- **Tem llms.txt + schema.org + sitemap** → prova a camada TÉCNICA de AEO da Impulso.
- Vitrine ideal de "site de serviço local premium".

### Aura Energy (Renato/Edson) — R$1.497, 1ª venda contratual
- Plataforma de LPs de energia solar (multi-segmento) + briefing + diagnóstico + orçamento + geração de artes por IA. Live (auraenergypalmas.com). A mais feature-rich.
- Ajuste: mostrar só as LPs públicas; esconder rotas internas (/painel-renato, /copy-gen).

---

## 🟡 CASE-SECUNDÁRIO

- **EV Suplementos** (Erlane) — LP single-page + blog, live (ev-suplementos.vercel.app). Limpa mas modesta. Complemento, não capa.
- **Azeitona do Forró** — LP press-kit de artista (16 componentes, já deployada no time Impulso). Bom case visual de nicho; confirmar no ar.
- **Carretinha Kids Alegria** (Olímpio) — LP festa kids madura (V6, aprovada pelo Eduardo "melhorou muito"). Confirmar publicação.
- **MPN-On** (meuprimeironegocio) — landing do curso próprio (R$297) com blog + SEO + pixel Utmify. Prova "fazemos LP de lançamento", mas é auto-promo, não cliente.

---

## 🔧 CORRIGIR ANTES

- **Kupferman** (Andressa/Raras Clinic) — arquitetura ambiciosa (site premium + CRM + painel admin + webhook Kiwify) MAS travado em "backend v0.1", 2 commits, sem deploy. Finalizar e publicar antes de virar case.
- **Zilanda Suplementos** — só um index.html de 69KB clonado do EV, sem package.json/build/git. Só vira case se virar projeto próprio publicado.

---

## 🤖 DIFERENCIAL/NARRATIVA — a história AI-first (não são "produtos" que o cliente acessa)

### Verbo Design
- Toolkit CLI de imagem+vídeo operado 100% por agente no terminal (Flux/Kling/Remotion/Whisper + BrandBrain por marca, cost-cap $10/job). Maduro, ativo.
- **Veredito:** NARRATIVA — prova viva do posicionamento AI-first ("produção de criativo operada por IA"). Vira seção de história, não produto.

### impulso-digital-nextjs — O SITE ATUAL (base da reconstrução)
- LP institucional atual. **Next 14, JS puro** (sem TS), Tailwind 3, blog flat-file (gray-matter+marked), forms via Tally embed, Meta Pixel. ~17 seções, 3 artigos SEO. É a cara pública hoje.
- **Reaproveitar no site novo:**
  - Design tokens: verde `#10b981` + cyan `#22D3EE`/`#0284C7`, gradiente accent, dark `#0a0a0a`, fonte DM Sans.
  - Componentes: `Portfolio.js` (carrossel autoplay), Navbar, Footer, FAQ accordion, fundos (StarField/Sparks/grid), botão neon CTA, hooks `useScrollReveal`/`useCounterOnView`.
  - Cases já com prints em /public/cases/: EV, Criativos, GB Nutrition (Shopify), **AgendaPRO (SaaS, 3 painéis)**.
  - Infra de blog SEO + integração Tally/Meta Pixel.
- **Refazer:**
  - **Posicionamento:** de "LP a partir de R$299 / seja encontrado no Google" → **software house** (SaaS próprios + sistemas sob medida + AEO). Elevar AgendaPRO de case a linha de produto.
  - Migrar pra TypeScript se for base de longo prazo.
  - Form próprio com read-after-write (λ.prova-na-fonte) no lugar do iframe Tally.
  - Revisar seções do modelo antigo (MPNPromo, chips "Landing/Shopify/Consultoria").
  - Adicionar vercel.json/domínio versionado + metadata canonical.

---

## ⚙️ INTERNO (bastidor — não vira vitrine)

- **RadarPRO** — prospecção interna (scrape Maps/IG + IA + WhatsApp Baileys + Tally). Maduro (94 commits), hoje estabilizado. Cliente nunca vê.
- **medellin-ref** — cópia defasada do medellin-bar (2 commits, sem node_modules). Já cumpriu função de base do port. **Candidato a arquivar** (mesmo `name` no package.json gera ambiguidade com o bar).
- **Whisper** — CLI de transcrição local (whisper.cpp). Utilitário de produtividade.

---

## 🗄️ ARQUIVAR (guardar, não mostrar)

- **Viva Cacheada** (Letícia) — é trial (não fechado) + app com área logada, não vitrine. Não expor até virar contrato.
- **Criativos do Céu** — permuta encerrada, home virou página de manutenção. Não mostrar "pausado" como case.

---

## ❌ EXCLUIR

- **impulsodesign** — aposentado e auto-declarado morto (substituído 1:1 pelo verbo-design).
- **pdf-recolor** — utilitário one-off (recolorir 1 PDF). Cumprido.
- **locajv-landing** — memória do Eduardo já crava NÃO usar como case.
- **minha-landing** — placeholder de aprendizado ("Meu primeiro site em React 😄"), vazio.

---

## 🔎 AEO — o argumento de venda que o AgendaPRO prova (conteúdo pro site)

**Fato:** 2 clientes confirmados chegaram porque o **ChatGPT recomendou o AgendaPRO** (Studio Mood 22/05 · Rosy Borges 26/06). Canal recorrente, gratuito, orgânico.

**Por que o código causa isso** (não é SEO técnico pesado — é conteúdo escrito na língua da pergunta):
1. Páginas por nicho (/salao, /barbearia, /estetica, /nail) com metadata em linguagem de pergunta ("sistema de agendamento online para salões...").
2. FAQ estruturado (Q&A = formato que answer engine ingere).
3. Comparativo de concorrentes (LLM recomenda comparando).
4. Fatos extraíveis: preço "R$67/mês", garantia "7 dias", features nomeadas.
5. Mede o canal: `acquisition_channel` (migration v67 + /api/cadastro) com opção IA/ChatGPT.

**Achado honesto = oportunidade:** o AgendaPRO faz isso SEM llms.txt/schema.org/sitemap. Mas a Impulso JÁ domina a camada técnica (Vida em Equilíbrio tem llms.txt + schema.org + sitemap). **As duas metades da metodologia existem** → juntar = serviço vendável: "sites e sistemas que o Google encontra e a IA recomenda (AEO)".

---

## 🏗️ Implicação pra estrutura do site novo (rascunho)

1. **Hero:** software house AI-first de Palmas (não freelancer de LP).
2. **Produtos próprios:** AgendaPRO · ComandaPRO (+ verticals Medellín/Starteq) · AppDelyvery.
3. **Software sob medida:** case Palace.
4. **AEO como serviço/diferencial:** prova = AgendaPRO recomendado pelo ChatGPT (depoimento Rosy Borges).
5. **Portfólio de cases:** Vida, Aura (destaque) + EV, Azeitona, Carretinha, MPN (secundário).
6. **Narrativa AI-first:** Verbo Design + o Segundo Cérebro/fábrica como bastidor que garante qualidade.
