---
name: reference-stack-design-aura
description: 5 stacks integradas pro Verbo produzir design+copy direto pro Aura (e replicável). Estado atual de cada e quando usar.
metadata: 
  node_type: memory
  type: reference
  originSessionId: 8a9ddf10-2ba5-44fb-8177-ff72c9f8178a
---

Stack Verbo-operador cravada em 15/05/2026 dentro de `C:/Users/Usuario/auraenergy/`:

| Stack | Como aciono | Quando | Custo |
|---|---|---|---|
| **Next/og ImageResponse** | rota `/artes/[tema]/[n]` no projeto | post vetorial rápido (carrossel Insta, OG image) | $0 · sub-segundo |
| **Puppeteer + Sharp** | `npm run arte -- <url> <out.png>` · `scripts/render-arte.mjs` | pixel-perfect HTML/CSS completo + processamento foto (resize, blur, tint, composite) | $0 · ~5s |
| **Canva MCP** | tools `mcp__claude_ai_Canva__*` · Brand Kit `kAHJwcGixiU` (Aura Energy) | quando cliente vai editar depois ou aproveitar templates Canva | Pro pago (Eduardo) |
| **Anthropic API (Copy Gen)** | rota `/api/copy-gen` (auth `impulso-copy-afa5154cbce0a0a30d01fcf3`) ou direto via Anthropic SDK em `src/lib/copy-engine` | gerar copy seguindo brand voice + framework 7 formatos | Sonnet 4.6 · ~$0.015/copy |
| **Replicate Flux** | `npm run img -- <prompt-key>` · `scripts/gen-image.mjs` · 8 prompts cravados em `src/lib/image-prompts/aura.ts` | foto fotorrealista sob medida (engenheiro fictício, casa solar, conta de luz mockup) | Schnell $0.003 · Dev $0.025 · Pro $0.05 |

**Env vars no Vercel (production):**
- `ANTHROPIC_API_KEY` (Sensitive · setada pelo CIC)
- `COPY_GEN_TOKEN` (setada pelo Verbo via CLI)
- `REPLICATE_API_TOKEN` (setada pelo Verbo via CLI)
- `NEXT_PUBLIC_GA4_ID` · `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

**Pasta destino de TODA arte entregue:** `C:/Users/Usuario/Desktop/Posts Aura/<campanha>/` (slides + caption.txt + `_arquivo/` histórico).

**Árvore de decisão prática:**
1. Precisa foto? SIM real → sharp / NÃO → Unsplash curado OU Flux
2. CSS moderno (blur/filter)? SIM → puppeteer / NÃO → ImageResponse
3. Cliente vai editar? SIM → Canva MCP / NÃO → produção direta
4. Texto? → Anthropic via /copy-gen ou direto Sonnet
5. Foto fotorrealista sob medida? → Replicate Flux

Replicável pra outros clientes: trocar brand voice em `src/lib/brand-voice/`, criar `src/lib/image-prompts/<cliente>.ts`. Engine genérico.

Ver também: [[feedback-verbo-operador-paradigma]] · [[reference-posts-aura-pasta-destino]] · [[feedback-arco-aida-carrosseis]]
