# Rodada Visual LP AgendaPRO — Inspirada em CashBarber

**Data:** 2026-04-28 (pausada à noite — Eduardo desligou PC)
**Status:** discussão estratégica fechada, decisões pendentes, código não plotado

---

## Contexto

Eduardo encontrou `sistemacashbarber.com.br` e quer adaptar o **design** (não copy/estratégia) pra deixar a LP do AgendaPRO mais premium. Justificativa do dele: "AgendaPRO vai ser tão grande quanto. Falta calor humano, é app que resolve a vida humana, tem que aparecer."

**O que NÃO copiar:** estratégia de venda por demo (somos auto-serviço com preço público), headline rotativa fraca semanticamente, ausência de pricing.

**O que copiar:** densidade visual, mockups realistas, tabs autoplay, notificações flutuantes, glow no CTA, footer com letras gigantes, fade-in on scroll, fotografia editorial profissional.

---

## Análise CashBarber (mapeamento do CIC + WebFetch)

### Stack deles
WordPress + Elementor Pro. Performance OK (WebP/AVIF, lazy load).

### Paleta
- bg-deep: `#050B2E` (azul marinho profundo)
- bg-secondary: `#0A1240`
- brand-primary: `#2B3FFF` (azul royal)
- brand-accent: `#3E5BFF`
- glow CTA: `#FF8A3D → #FFD085` (laranja)
- success: `#22C55E` / danger: `#EF4444`

### Estrutura — 15 seções
1. Hero (logo + headline rotativa + CTA glow)
2. Mockup dashboard de agenda (Ocupação + lista profissionais com fotos)
3. Card "Feito por um Barbeiro" (foto realista jaqueta azul)
4. Prova social (counter +417 / R$34M)
5. Selo CashBarber com pulse/ripple (ondas concêntricas)
6. Tabs autoplay "Ganhe velocidade" (Agendamento/Dashboard/Preço/Gestão)
7. Logo combinada Cash + Pump
8. Tabs autoplay "Enxergue o que ninguém vê" (Performance/Acompanhamento/Sucesso)
9. Casos reais — 3 vídeos Reels 9:16 com legenda overlay
10. Tabela comparativa Outros Apps VS Cash Barber (6 features × 2 colunas)
11. App do barbeiro com notificações flutuantes (foto editorial barbeiro com celular + cards iOS empilhando)
12. Metas + transparência (2 mockups celular sobrepostos + cards com valores R$5.400 / R$640,40)
13. Mockup "Personalize a Jornada" (dashboard com clientes + estoque)
14. CTA final (foto barbeiro com tablet sorrindo, recortado em curva)
15. Footer com letras gigantes outline "CASH BARBER"

### Animações
1. Glow CTA seguindo mouse (`.brilho1/.brilho2` JS custom — CSS custom properties)
2. Headline rotativa hero (3 textos alternando — typewriter ou fade)
3. Tabs autoplay 3s + pausa hover
4. Counter animado (count-up on viewport)
5. Pulse/ripple no selo central (CSS keyframes)
6. Fade-in on scroll (IntersectionObserver, offset 70%)
7. Hover nos cards (elevação + brilho azul)
8. Notificações flutuantes (fade/empilhamento)

---

## Confrontos críticos antes de plotar

### 1. NÃO é projeto novo, é evolução
Prompt do CIC era pra criar projeto Next.js do zero. AgendaPRO já está em produção (Next 16 + TS + Tailwind + Inter). Estratégia: extrair os 5 elementos visuais novos e plotar in-place.

### 2. Paleta colide com brand kit v1
CashBarber: marinho `#050B2E` + royal `#2B3FFF` + laranja CTA. AgendaPRO: aurora dark `#050713` + brand `#3B82F6` + ciano/violeta. Trocar paleta inteira joga brand kit no lixo. **Sugestão:** manter nossa paleta + absorver SÓ o conceito de glow no CTA (em azul/ciano nosso, não laranja).

### 3. Performance — bug delay 2s aberto
LP atual tem delay ~2s pra imagens aparecerem (`SectionReveal` IntersectionObserver + next/image lazy + animações aurora). Adicionar 8 animações novas SEM resolver = LP que carrega 5s em mobile 4G. **Bloqueio:** resolver delay antes da rodada visual. (Memória `project_agendapro_lp_performance.md`)

### 4. Mobile-first é OBRIGATÓRIO
Público-alvo entra via anúncio Meta no celular. Cf. memória `feedback_agendapro_mobile_first.md`. Implicações:
- Headline rotativa: container altura fixa pra evitar CLS, fade > typewriter, `clamp()` na tipografia
- Glow CTA: mobile não tem mouse — fallback pulse animado
- Tabs autoplay vertical → mobile vira scroll-snap horizontal, autoplay pausa em touch
- Notificações flutuantes: max 2 visíveis em mobile
- Tabela comparativa: empilha em mobile (1 coluna por feature, NUNCA scroll horizontal)
- Letras gigantes "AGENDAPRO" footer: `clamp()` pra preservar efeito em 360px

### 5. Componentes
**Já existem no AgendaPRO** (não recriar): HeroSection, ComparisonTable, Pricing, Footer (com signed), SectionReveal, 4 LPs segmentadas.

**Novos — apenas 5 (não 9 como prompt CIC)**:
- `<GlowButton />` — CTA com mouse-tracking + fallback pulse mobile
- `<TabsAutoplay />` — tabs autoplay 3s + pausa hover/touch
- `<RippleLogo />` — selo com ondas concêntricas CSS
- `<FloatingNotifications />` — cards iOS empilhando
- `<MarqueeFooter />` — letras gigantes outline com `clamp()`

---

## Headline rotativa — primeira sacada que Eduardo curtiu

3 versões propostas:

**V1 — Direta CashBarber-style:**
> O sistema oficial da [**barbearia** / **estética** / **nail design** / **salão** / **soroterapia**]

**V2 — Promessa central + nicho (sugerida pelo Claude):**
> Agenda inteligente pra [**barbeiros** / **esteticistas** / **nail designers** / **donos de salão** / **soroterapeutas**]

**V3 — Mantém poesia atual + sub rotativa:**
> H1: "Sua agenda virou o turno da noite do seu negócio"
> Sub: "Pra **barbearia / estética / nail / salão / soroterapia** crescer enquanto você atende"

**Decisão pendente:** V1 / V2 / V3?

Profissões pra rotacionar (todas tiradas do `/cadastro` — coerência de funil): barbearia · salão · estética · nail · tatuagem · psicologia · personal · soroterapia.

---

## Imagens Replicate — discutidas, decisões pendentes

### Split confirmado
- **AI gera:** fotos editoriais de pessoas (barbeiro/esteticista/nail designer/etc) com iluminação cinema + bokeh azul
- **ls graphic gera (Eduardo):** mockups gráficos de celular com UI do produto + cards informativos flutuantes

### 3 prints de referência analisados
1. Barbeiro segurando celular + cards "Novo agendamento" (composição AI + cards Photoshop)
2. Mockup 2 iPhones sobrepostos com UI do app + cards azuis com totais R$5.400 / R$640,40 (gráfico puro, sem AI)
3. Barbeiro com tablet sorrindo, iluminação cinema azul/laranja (foto AI direta)

### 5 decisões críticas antes de gerar prompt
**A) Cobertura de profissões:**
- (a) 4 fotos rotativas (barbeiro homem + esteticista mulher + nail designer mulher + soroterapeuta jaleco) — sugerida
- (b) Só 1 (igual Cash, só barbeiro)
- (c) 2 (barbeiro + esteticista)

**B) Mão segurando dispositivo (armadilha AI — erra dedos + tela em ~30%):**
- (a) Tela "out of focus" no celular
- (b) Pessoa em ação na profissão (cortando cabelo, fazendo unha) — sugerida (b)+(c) mistura
- (c) Framing peito pra cima (sem mãos)

**C) Diversidade gênero/etnia:**
- Mista brasileira (2 mulheres + 2 homens, etnias variadas) — sugerida
- Padronizada

**D) Fundo:**
- (a) Cenário real da profissão desfocado (barbearia com cadeira atrás, salão com secador) — sugerida
- (b) Dark genérico com bokeh azul (estilo Cash, agnóstico)

**E) Modelo Replicate:**
- Flux 1.1 Pro Ultra (~R$0,30/img, melhor pra fotorrealismo editorial)
- Nano Banana / Gemini Image (Eduardo mencionou; checar custo atual)

### Estimativa
5-6 imagens AI × R$0,30 = **~R$2** (dentro hard cap R$50, ok).

### Coerência com brand
Iluminação azul `#3B82F6` + ciano `#06B6D4` (nossas cores) — não royal `#2B3FFF` deles. Sutil mas importa.

---

## Decisões consolidadas pendentes pra retomar

| ID | Pergunta | Sugestão Claude |
|---|---|---|
| Headline | V1 / V2 / V3 | V2 |
| A | Cobertura profissões | 4 nichos rotativos |
| B | Mão+dispositivo | Mistura (b)+(c) |
| C | Diversidade pessoas | Mista brasileira |
| D | Fundo | (a) Cenário real desfocado |
| E | Modelo Replicate | Flux 1.1 Pro Ultra |
| Paleta | Manter brand atual ou trocar | Manter |
| Performance | Resolver delay 2s antes? | Sim, antes |
| Fonte | Manter Inter ou trocar Jakarta | Manter Inter |
| Mockups dashboard | Screenshot real prod ou fake | Screenshot real |
| Fotos Fundador #1 | Setup sala (15/04) ou IA + foto depois | A definir |

---

## Próximos passos quando retomar

1. **Eduardo decide as 11 perguntas acima**
2. **Resolver delay 2s na LP atual** (priority)
3. **Eduardo gera fotos no Replicate** (com prompt em inglês que vou escrever)
4. **Eduardo gera mockups no ls graphic** (UI real do AgendaPRO + cards)
5. **Eu plota in-place no AgendaPRO:** GlowButton + TabsAutoplay + RippleLogo + FloatingNotifications + MarqueeFooter + headline rotativa + footer letras gigantes
6. **Mobile QA** em 360px / 414px / 768px / 1280px / 1920px
7. **Lighthouse mobile** ≥ 85 (perf) antes de commitar
8. **Replicar nas LPs segmentadas** (barbearia/salão/estética/nail) — escopo separado

---

## Memórias relacionadas

- `reference_agendapro_brandkit.md` — paleta oficial + regra PRO branco puro
- `project_agendapro_lp_performance.md` — bug delay 2s
- `feedback_agendapro_mobile_first.md` — mobile-first regra
- `project_estudio_sala.md` — Eduardo decidiu 15/04 montar setup fixo (serve pra fotografar Fundador #1)
- `project_impulsodesign_orcamento.md` — hard cap R$50 Replicate

---

**Quando voltar nesse arquivo:** ler do topo até "Decisões consolidadas pendentes", responder as 11 perguntas, aí o Claude da próxima sessão tem tudo pra avançar sem perder 1h reconstruindo contexto.

---

**Ver também:** [[STATUS-AGENDAPRO]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
