# 🌌 ESTUDO — Site WebGL de referência (universo/nebulosa/grafo)

> 07/07/2026. 3 agentes: referências de mercado · stack técnico (R3F) · performance/mobile/AEO. Objetivo: site "referência de mercado" (Awwwards-level) com hero = universo vivo + grafo que cresce no scroll, SEM sabotar mobile nem AEO.

## 1. Referências de mercado (o teto a mirar) — confirmadas no ar

| Site | URL | Por que |
|---|---|---|
| **Cosmic Web** (Kim Albrecht) | cosmicweb.kimalbrecht.com | 🎯 É O CONCEITO: grafo 3D de 24.000 galáxias + 100k conexões, navegável. Cada projeto = nó-galáxia. |
| **Equinox** (Little Workshop) | equinox.space | Nebulosa + estrelas + flythrough de câmera guiado por scroll. Storytelling cósmico exato. |
| **Lusion** | lusion.co | Teto de qualidade: partículas GPU, câmera cinematográfica, bloom. A régua de "referência de mercado". |
| Bruno Simon | bruno-simon.com | Mundo 3D explorável (WebGPU/TSL + fallback WebGL); interatividade como identidade. |
| Active Theory | activetheory.net | Distorções GLSL/ruído no fundo cósmico (nebulosa que ondula). |
| Equinox / Resn | resn.co.nz | Partículas atmosféricas COM disciplina de performance (passa CWV). |
| Unseen Studio | unseen.co | Navegação por arrasto + camada sonora opcional. |
| Shopify Editions '26 | shopify.com/editions/spring2026 | Texto que se dispersa/reagrupa em partículas nas transições (nome Impulso se formando de estrelas). |
| Three Nebula (demos) | three-nebula.org | Engine de partículas GPU — base técnica de nebulosa viva. |

**TOP 3 pra analisar:** Cosmic Web · Equinox · Lusion.

## 2. Stack técnico cravado (Next.js/React)

```
three
@react-three/fiber@9          // React 19 / Next 15 (v8 NÃO serve)
@react-three/drei@10          // Stars, Sparkles, Points, Float, shaderMaterial, ScrollControls
@react-three/postprocessing   // EffectComposer + Bloom
r3f-forcegraph                // grafo DENTRO do Canvas (+ d3-force-3d) — nós brotam via graphData incremental
lenis + gsap                  // scroll-driven premium (ou drei ScrollControls)
```

Montagem: `<Canvas>` client + `dynamic(ssr:false)` via wrapper client → fundo `<Stars>` (profundidade) + `<Points>` em Z-layers (parallax) + `<Sparkles>` (poeira) → nebulosa (planes additive + shaderMaterial FBM, ou textura de noise pré-computada) → `<R3fForceGraph>` com `tickFrame()` no useFrame, nós `emissive`+`toneMapped={false}` crescendo via scroll.offset → `<Bloom mipmapBlur/>` → scroll (Lenis+GSAP ou ScrollControls).

**O achado-chave:** `r3f-forcegraph` (vasturiano) roda o grafo DENTRO do Canvas (integra com nebulosa+bloom) e aceita **dados incrementais** → os nós/projetos **brotam conforme o scroll nativamente**. Sem gambiarra.

Gotchas: casar versões three↔fiber↔drei↔postprocessing (travar no package.json); `dynamic ssr:false` não pode ser chamado em Server Component (usar wrapper client); dispose manual de composer/texturas; `toneMapped={false}` senão bloom não pega; `dpr`/count adaptativos no mobile.

## 3. ⚠️ GUARDA-CORPO AEO — inegociável (o diferencial de venda da Impulso)

**FATO DURO:** os bots de LLM **NÃO rodam JavaScript** (estudo Vercel): **GPTBot, ClaudeBot, PerplexityBot, Meta, ByteDance pegam HTML CRU.** Só Gemini/Applebot/CCBot renderizam JS. Conteúdo em `<canvas>` = pixel puro = **invisível pra IA e crawler.** Se o conteúdo depender de JS, pra o ChatGPT/Claude a página está EM BRANCO — sabotando exatamente o que a Impulso vende.

**Regra-mãe: o 3D é camada DECORATIVA por cima de HTML real (SSR). Nunca o conteúdo em si.**

Regras duras:
1. Todo texto/estrutura indexável (H1, sub, CTA, propostas, prova) em **HTML SSR ANTES do JS**. Canvas por cima, decorativo.
2. Assuma bot sem JS. `<noscript>` com mensagem principal em todo wrapper de canvas.
3. **Prova na fonte (λ):** `curl` sem JS + Search Console URL Inspection TÊM que mostrar H1/copy/CTA/links. Se não mostram, não publica.
4. **JSON-LD** (FAQPage 5-8 Q + Article + Organization) casado com respostas reais no DOM — maior alavanca de visibilidade em IA 2026.

## 4. Performance / mobile (mobile-first é regra dura)

- Bundle 3D (three ~150-170KB gz + libs) carrega **depois do `load`** (dynamic import), nunca no caminho crítico.
- **LCP = imagem WebP (poster)**, não o canvas. Slot do canvas com dimensão reservada (CLS<0,1).
- **OffscreenCanvas + Web Worker** pra compile de shader/decode (mantém INP<200ms). Fallback imagem no Safari<16.4.
- **Mobile recebe imagem estática (WebP de 1 frame do desktop) por padrão** — só manda 3D se provar que não custa >1s. (case AthenaHQ).
- `rAF` pausa fora do viewport; `frameloop="demand"` em cena estática. Budget <100 draw calls, ≤3 luzes, dpr cap 2.0, Draco+KTX2.
- Metas cravadas mobile: **LCP<2,5s · INP<200ms · CLS<0,1** — checadas no CI, não no olho.

## 5. Acessibilidade
- `prefers-reduced-motion: reduce` → desliga loop, serve poster estático (mesmo fallback do mobile).
- Texto NUNCA direto sobre canvas vivo — overlay sólido, contraste AA 4,5:1.

## 6. VEREDITO / plano
Dá pra ter universo WebGL de referência E passar em CWV+AEO — desde que o 3D seja **enhancement descartável sobre base HTML/SSR sólida.** Ordem de build:
1. **Base HTML/SSR indexável** (conteúdo real, JSON-LD, prova-na-fonte) — o que vende e o que o bot lê.
2. **Universo WebGL por cima** (R3F + r3f-forcegraph + bloom + nebulosa), lazy após load.
3. **Fallback mobile/reduced-motion** = poster WebP.

Conceito visual e narrativa em [[project_site_impulso_conceito_grafo_cerebro]]. Referências de estética dark-premium em [[REFERENCIAS-DESIGN-SITE-NOVO]]. Portfólio em [[ESTUDO-PORTFOLIO-NOVO-SITE]].
