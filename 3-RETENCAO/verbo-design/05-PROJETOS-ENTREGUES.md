# 05 · PROJETOS ENTREGUES · Verbo Design

> Lista cravada de tudo que Verbo Design já produziu · com lições por projeto. Cresce a cada entrega.

---

## 🚀 Aura Energy (Solar · Palmas-TO · cliente Renato Edson)

### Carrossel #1 · Fio B (Lei 14.300)
- **Pasta:** `Desktop/Posts Aura/carrossel-fio-b/` (esta nomeada com "Posts" maiúsculo · próxima usar `post aura/`)
- **Status:** ✅ V11 cravado · pronto pra postar (aguardando Renato responder briefing pra V12 com foto real dele)
- **Tema:** Lei 14.300 + Fio B · educação + urgência regulatória
- **Arco AIDA:**
  1. Capa hook "Por que solar em 2026 vai pagar mais que em 2027" (Blue Aura Deep + foto painel Unsplash)
  2. "O que é o Fio B?" (light cream + analogia "pensa assim... empréstimo valia 100%")
  3. Cronograma 7 barras 2023→2029 (Blue Aura)
  4. Caso real Brasfrio · R$1.573 → R$390/mês · 11,21 kWp Palmas (light cream)
  5. CTA "Quer ver quanto economiza no SEU caso?" · voz primeira pessoa Renato · 2 CTAs (Link bio + WhatsApp)
- **Versões:** 11 iterações (V1 vetorial → V11 com identidade Blue Aura + camadas)
- **Lições principais:**
  - Dark zone genérica `#0a0d18` não passa identidade · Blue Aura `#0E2152` do logo é o correto
  - Logo blur de fundo invasivo · watermark tipográfico funciona melhor
  - Caso real Brasfrio (R$1.573→R$390) = ponto mais alto de credibilidade do arco
  - Copy conversacional "pensa assim..." resolve leigo+expert simultaneamente
- **Pendência V12:** foto real do Renato pro slide 5 (humanização) + foto real instalação Palmas pro slide 1

### Pendentes Aura (briefing Renato ainda não respondido)
- ⏳ Arte #1 Apresentação Renato · precisa foto profissional
- ⏳ Arte #2 Mitos vs Verdades · carrossel educacional viral
- ⏳ Arte #3 Calculadora · post vertical com mockup LP
- ⏳ Arte #4 Antes/Depois · precisa caso fotografado pelo Renato
- ⏳ Arte #6 CTA Orçamento Personalizado

---

## 💪 GB Nutrition (Suplementos · Palmas-TO · cliente Gabriel Barros)

### Carrossel #1 · Lançamento gbnutrition.online
- **Pasta:** `Desktop/post gb nutrition/carrossel-1-autoridade/`
- **Status:** ✅ V5 cravado · pronto pra lançamento (segunda 18/05/2026 originalmente · validar com Eduardo)
- **Tema:** Anúncio do lançamento + curadoria + frete grátis Palmas
- **Arco AIDA:**
  1. Capa "A LOJA DO PERSONAL TÁ NO AR" · selo "● LANÇAMENTO OFICIAL" · foto loja suplementos cyan + Hórus Max Titanium em primeiro plano com sombra/glow
  2. Catálogo cravado · grid 6 produtos REAIS em cards (Pré-treino MT, Whey 100% MT, Whey Zero Nutrata, Creatina NM, Beta-Alanine Athlhetica, Night Train MT)
  3. 5 marcas Tier 1 em pills + selo curadoria com avatar Gabriel + foto academia
  4. "Comprou, chegou" · foto caixa + Whey Max saindo + 2 zonas Palmas (frete grátis 1ª semana)/Brasil (+4 transportadoras)
  5. "A prateleira do personal tá no ar" · foto mockup celular + Creatina New Millen no canto · 2 CTAs (loja + Instagram)
- **Versões:** 5 iterações (V1 vetorial → V5 com produtos reais + remove.bg + camadas Photoshop edit)
- **Lições principais:**
  - Paleta REAL puxada do logo (ciano elétrico `#19D9E0`), não inventei laranja do site (mais antigo)
  - Produtos reais do catálogo + lojas oficiais das marcas = credibilidade
  - remove.bg em 4 produtos chave criou cutouts integráveis com drop-shadow + glow
  - Stencil tipográfico decorativo ("PERSONAL", "TIER 1", "FAST", "BORA", "ONLINE") por slide criou profundidade
  - Foto Gabriel real cropada (sem o box dark do post anterior) virou ativo reusável

### Pendentes GB
- ⏳ Carrossel #2 · Autoridade Gabriel (hook "80% não venderia pro meu aluno") · aguardando lançamento
- ⏳ Roteiros aprovados de 3 reels (curadoria + motoboy + educativo) já existem · gravação pelo Gabriel pendente

---

## 🧩 Stack reusável cravada (compartilhada entre clientes)

### Helpers em `src/app/artes/<cliente>/[slide]/route.tsx`
- `LogoBlock` — componente logo + nome + tagline padronizado
- `DotGrid` — textura de fundo
- `SlideIndicator` — bolinha 1-5 footer

### Brand voices em `src/lib/brand-voice/`
- `aura.ts` (Aura Energy)
- `gb-nutrition.ts` (GB Nutrition)

### Scripts cravados
- `render-arte.mjs` (puppeteer screenshot)
- `gen-image.mjs` (Replicate Flux)
- `remove-bg.mjs` (remove.bg API)
- `gen-logo-blur.mjs` (sharp blur)
- `gen-logo-dark.mjs` (sharp tint dourado)

---

## 📊 Métricas cravadas

| Cliente | Carrosséis | Versões | Tempo total | Custo IA aproximado |
|---|---|---|---|---|
| Aura | 1 · Fio B | 11 | ~6h | $0 (sem Flux/RemoveBg na V11) |
| GB | 1 · Lançamento | 5 | ~3h | ~$0.35 (4 Flux Dev + 4 remove.bg) |

---

## 🎯 Próximos clientes pra cravar brand voice

- **Carretinha Kids Alegria** (festa kids · Palmas · operador Olímpio) — projeto na v3 reescrita · paleta Aquarella cravada mas não aprovada
- **Starteq** (ERP B2B) — diferentes tom (consultivo SaaS)
- **Viva Cacheada** (salão Leticia · trial AgendaPRO)
- **Zilanda Suplementos** (farmacêutica Palmas) — outro nicho fitness/saúde

---

**Ver também:** [[VERBO-DESIGN]] · [[04-DIARIO-APRENDIZADOS]] · [[03-WORKFLOW]]
