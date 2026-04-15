# Playbook — Design de LP que converte (Impulso Digital)

**Origem:** redesign do AgendaPRO v2 (15/04/2026), branch `v2-design`.
**Aplicação:** qualquer landing page nossa (AgendaPRO, MPN-On, Impulso Digital) ou de cliente (Gabriel/GB Nutrition em diante).
**Por que existe:** consolidar o padrão validado pelo Eduardo pra não reinventar a roda em cada projeto e nunca mais entregar landing com cara de "site genérico de IA".

---

## 1. Filosofia central: SHOW, DON'T TELL

A LP funciona como **demo visual** do produto. O lead deve enxergar o que vai ter acesso **antes** de clicar no CTA. Reduz fricção, encurta o ciclo de decisão.

**Regra de ouro:** sempre que um card explica uma feature, mostre um **fragmento real da UI do produto** ali dentro — não use ícone genérico + texto.

> "Dessa forma o cliente já consegue visualizar o que vai ter acesso, é isso que nossa LP tem que passar." — Eduardo, 15/04

### Termos técnicos do mercado pra esse padrão

| Termo | Descreve |
|-------|----------|
| **Product UI showcase** / **In-context product preview** | Mostrar fragmento real da interface dentro de cards de feature |
| **Bento grid** | Cards arranjados em grid assimétrico (popularizado por Apple iOS 17 + Vercel) |
| **Glassmorphism** | Vidro fosco com blur + borda translúcida |
| **Linear-style hero** / **Vercel-style hero** | Landing dark com cards flutuantes em 3D + glow |
| **Floating UI cards** / **3D mockups** | Cards inclinados em perspectiva (`rotateY`/`rotateX`) |

### Referências de mercado pra estudar

| Site | O que estudar |
|------|---------------|
| **linear.app** | Pioneiros do padrão — cards de feature mostram a UI real do app |
| **vercel.com** | Bento grid + dashboard mockups com glow |
| **stripe.com** | Sóbrio, mas usa product previews em quase toda página |
| **arc.net** | Extremos de glass + floating cards |
| **raycast.com** | Cards com print da extensão real |
| **resend.com** | Bento grid de features com mini-emails reais |
| **clerk.com** | Modal/login UI flutuando ao lado da copy |

---

## 2. Estrutura de funil (13 blocos validada)

Ordem de seções que o lead percorre. Cada uma com objetivo psicológico claro.

| # | Seção | Estado mental do lead | Objetivo |
|---|-------|----------------------|----------|
| 1 | **Announcement bar** | Curioso | Promessa de ganho imediato (14 dias grátis, frete, etc) |
| 2 | **Hero** (com mockup ao lado) | "Será que serve pra mim?" | Frame de transformação + 1 CTA + 1 prova visual |
| 3 | **Dor real** (3 cards) | "É exatamente assim que tô" | Identificação — anti-screenshots da realidade dele |
| 4 | **Solução em 1 frase + segmentos** | "Tem jeito" | Hook + transição |
| 5 | **Seu dia, reescrito** (timeline) | "Imagino isso pra mim" | Visualização — 4 momentos do dia c/ mini-UI |
| 6 | **Mecanismos de retenção** (4 cards UI) | "Como funciona?" | Mecanismo — UI real de cada feature |
| 7 | **Comparação direta** | "Por que não a alternativa?" | Quebra de objeção |
| 8 | **Como começar** (3 passos) | "É fácil mesmo?" | Reduzir fricção — mini-screenshot de cada passo |
| 9 | **Valor empilhado** (R$X → R$Y) | "Quanto custa?" | Âncora de preço |
| 10 | **Pricing + bônus** | "Vou comprar qual?" | Decisão |
| 11 | **Prova social** | "Outros usam?" | Reduzir risco (se não tem cliente, posicionar como "primeiros parceiros") |
| 12 | **FAQ** | "E se...?" | Quebra de objeções finais |
| 13 | **CTA final agressivo** | Pronto | Empurrão |

### Combina com a estrutura de oferta agressiva (já validada)

Padrão Eduardo: **badge de ganho → hero transformação → valor empilhado → preço com âncora → bônus → CTA agressivo**.
Os 13 blocos acima já incorporam isso — preserve a ordem.

---

## 3. Paleta + design system v2

### Cores base (dark moderno)

```
--bg-base:        #050713  (quase preto-azul, fundo principal)
--brand-primary:  #3B82F6  (azul AgendaPRO — pode ser sobrescrito por cliente)
--accent-cyan:    #06B6D4  (gradient + brilho)
--accent-violet:  #8B5CF6  (gradient + retenção)
--accent-pink:    #EC4899  (alerta sutil + indicação)
--accent-amber:   #F59E0B  (fidelidade + valor)
--accent-emerald: #10B981  (success + reviews)
--glass-bg:       rgba(255,255,255,0.06)
--glass-border:   rgba(255,255,255,0.08)
```

### Tipografia
- **Display fluida** com `clamp(3rem, 7vw, 6.5rem)` no hero (Inter 800)
- **Body** Inter 400-700
- **Mono** JetBrains Mono pra números, KPIs e timestamps

### Animações essenciais
- `gradient-flow` (10s linear infinite) na announcement bar
- `pulse-glow` em CTAs principais
- Mesh radial 3 gradientes animados no hero (loop 20s)
- `IntersectionObserver` + stagger pra reveal das seções
- `prefers-reduced-motion: reduce` SEMPRE respeitado

### Utility classes do v2
```css
.glass         /* glassmorphism padrão */
.glow-border   /* borda luminosa rotativa via conic-gradient */
.text-gradient /* gradient azul→ciano em texto */
.btn-primary-v2 .btn-ghost
.pill .pill-glow
.display-xl .display-lg
.section .section-lg
```

---

## 4. Componentes-chave (pasta `src/components/`)

### Mockups
- **`AgendaDashboardMockup.tsx`** — dashboard dark flutuante estilo Linear/Vercel, com window controls macOS, badge LIVE, KPIs, lista de items, perspective 3D (`rotateY -8deg`), 3 cards flutuantes ao redor (notificação, fidelidade, reviews). **NUNCA usar iPhone realista — fica datado.**

### Cards de feature com UI real
- **`MechanismCard.tsx`** — switch por kind, cada variante com layout próprio. Estrutura: visual UI top + texto bottom. No AgendaPRO: fidelidade (progresso de stamps), fila (lista com nome destacado + timer), indicação (link copiável + KPIs), reviews (widget Google + review da Ana).

### Mini-UIs reutilizáveis em outras seções
- **`LandingMicroUI.tsx`** — exporta `TimelineMicroUI`, `DorMicroUI`, `PassoMicroUI`. Cada uma é um fragmento de notificação/screenshot do produto.

### UI primitives
- **`ui/AnimatedGradient.tsx`** — mesh background animado
- **`ui/SectionReveal.tsx`** — IntersectionObserver + stagger
- **`ui/SegmentCard.tsx`** — cards de segmento com tilt 3D
- **`ui/MechanismIcon.tsx`** — SVGs gradient+glow (8 tipos) — fallback quando não vale fazer mini-UI completa

---

## 5. Anti-patterns ("design feito por IA")

Sintomas que matam credibilidade — **NUNCA fazer**:

1. ❌ **Mesma estrutura de card repetida 4x** (ícone + título + 2 linhas) — vira template óbvio.
2. ❌ **Pill badge em toda seção** com cor diferente — diz "fui gerado por wizard".
3. ❌ **Dados placeholder** ("Lorem", "Cliente 1", "R$XX") — sempre nomes próprios, valores reais, horas exatas.
4. ❌ **Gradient text em tudo** — usar apenas em 1-2 palavras-chave por viewport.
5. ❌ **iPhone realista com bezel/dynamic island** em hero — datado.
6. ❌ **Sparkle/star emoji** em headlines — "✨ AI ✨" mata o tom.
7. ❌ **Glassmorphism em 100% dos elementos** — perde hierarquia.
8. ❌ **Microcopy genérica** ("Aumente seu negócio", "Resultados garantidos") — usar verbos específicos do mecanismo ("Marcos confirmou", "+50 pts creditados").

### Sinais de que tá no caminho certo

- ✅ Cards com **layouts diferentes entre si** (assimétrico)
- ✅ Cada card tem **dado específico** (nome + hora + valor)
- ✅ Microcopy parece **escrita por humano** ("já agendei o próximo")
- ✅ Mini-UIs parecem **screenshot** do produto, não ilustração
- ✅ Hierarquia clara — só 1-2 elementos com `glow-border`/`pulse-glow` por seção

---

## 6. Stack técnica padrão

- **Next.js 16 App Router + Turbopack**
- **Tailwind CSS v4** (`@import "tailwindcss"`)
- **Componentes 100% server por default** — `'use client'` só quando precisa de hook/handler
- **CSS custom properties** como design tokens (`--brand-primary`, `--glass-border`)
- **White-label opcional** — hero e CTAs lêem `var(--brand-primary)` pra cliente customizar
- **Inter** (variable 400-800) + **JetBrains Mono** via `next/font`
- **SVG inline** preferido sobre `<img>` pra ícones (anima e colore)
- Build: `npm run build` deve passar verde + 0 erros TS antes de cada commit

---

## 7. Workflow de criação de uma LP nova

### Fase 1 — Discovery (antes de codar)
1. Perguntar ao cliente: oferta, ângulo, preço, prova social, ângulo emocional
2. Listar **mecanismos** do produto que merecem mini-UI (geralmente 3-5 melhores)
3. Definir paleta primária do cliente (ou usar padrão azul)

### Fase 2 — Estrutura
1. Copiar `src/app/page.tsx` do AgendaPRO como ponto de partida
2. Adaptar os 13 blocos do funil pra o produto novo
3. Substituir os mockups (`AgendaDashboardMockup`, `MechanismCard`, `LandingMicroUI`) pelos do produto

### Fase 3 — UI fragments
1. Pra cada feature principal, desenhar mini-UI com:
   - 1 título + status badge no topo
   - Conteúdo central específico (lista, gráfico, form, link)
   - Microcopy humana no rodapé ("última: ...", "preenchido em X min")
2. Variar layout entre cards — não repetir estrutura

### Fase 4 — QA antes de deploy
- [ ] `npx tsc --noEmit` zerado
- [ ] `npm run build` verde
- [ ] Smoke test em mobile real (375px) e desktop (1440px)
- [ ] `prefers-reduced-motion` testado
- [ ] Lighthouse: Performance ≥ 85, Acessibilidade ≥ 95
- [ ] Open Graph image + meta description
- [ ] Pixel Meta + Utmify configurados se a LP recebe tráfego pago

### Fase 5 — Iteração
- Push em branch separada → preview Vercel
- Eduardo aprova visual antes de virar default
- A/B test de hero/CTA via Meta Ads

---

## 8. Casos de uso por produto

| Produto | Onde usar esse playbook |
|---------|-------------------------|
| **AgendaPRO** | LP principal `/` + 4 LPs segmentadas (`/barbearia`, `/salao`, `/estetica`, `/nail`) |
| **MPN-On** | LP de venda do curso — substituir mecanismos por módulos do curso (Mindset, Produto, Tráfego, Funil) |
| **Impulso Digital** | LP de captação de cliente pra consultoria — mostrar mini-UI dos serviços (LP, Shopify, Next, Meta Ads) |
| **RadarPRO** | LP do produto de scraping — mini-UI mostrando dashboard de leads encontrados, filtros, exports |
| **Cliente Gabriel (GB Nutrition)** | Adaptar paleta + substituir mecanismos por features específicas do site dele |
| **Clientes futuros** | Mesmo workflow — discovery → estrutura → mini-UI → QA → deploy |

---

## 9. Ângulo "IA / Inteligência" (frame validado pra produtos automatizados)

Pra produtos que automatizam algo (AgendaPRO, RadarPRO, qualquer SaaS), o frame **"IA toma conta de X"** funciona bem:

- "Sua agenda agora tem **inteligência** própria"
- "Você atende — ele cuida do resto"
- "O sistema trabalha por você"

**Cuidado:** não prometer LLM/predição se o produto faz só automação determinística. O frame correto é "**automação inteligente**" / "**sistema autônomo**" — verdadeiro e ainda assim moderno.

---

## 10. Checklist rápido pra revisar uma LP

Antes de aprovar/publicar:

- [ ] Hero passa a transformação em 1 linha?
- [ ] Tem mockup ou mini-UI no hero?
- [ ] Cards de feature mostram UI real (não ícone genérico)?
- [ ] Cada card tem dado específico (nome, hora, valor)?
- [ ] Layouts dos cards são diferentes entre si?
- [ ] Microcopy parece humana?
- [ ] Tem 13 blocos do funil? (ou justificativa pra cortar algum)
- [ ] CTA principal aparece pelo menos 4x na página?
- [ ] Mobile testado em 375px?
- [ ] Build verde + tsc zerado?
- [ ] Pixel Meta e Utmify (se for LP de tráfego pago)?

---

**Última atualização:** 15/04/2026 (redesign AgendaPRO v2)
**Validado por:** Eduardo Barros — após preview rodando em `agendapro-git-v2-design.vercel.app`
