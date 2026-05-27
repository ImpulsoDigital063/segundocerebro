# 01 · STACK DE FERRAMENTAS · Verbo Design

> Inventário cravado das 7 ferramentas que Verbo Design opera. Atualizado 16/05/2026.

---

## 🛠️ As 7 ferramentas

### 1. Next.js `ImageResponse` (next/og + Satori)
**O que faz:** Renderiza JSX → PNG em edge runtime.
**Quando uso:** Carrossel Insta vetorial rápido · OG image · post estático sem CSS complexo.
**Limites:** Sem `filter: blur` · sem `mix-blend-mode` · CSS limitado.
**Custo:** $0 · sub-segundo.
**Arquivo:** `src/app/artes/<tema>/[slide]/route.tsx`
**Status:** ✅ ativo em produção (Aura + GB)

### 2. Puppeteer + Sharp (local)
**O que faz:** Puppeteer renderiza HTML/CSS completo via Chrome 148 + screenshot 1080×1080 · Sharp processa imagens (resize, blur, tint, composite).
**Quando uso:** Pixel-perfect com CSS moderno · processamento de fotos do cliente · gerar versões com filtros.
**Comandos:**
```bash
npm run arte -- <url> <out.png>     # puppeteer screenshot
node -e "sharp(...)"                 # sharp inline
```
**Custo:** $0 · 5-10s
**Status:** ✅ instalado · usado em `gen-logo-blur.mjs` e `gen-logo-dark.mjs`

### 3. Canva MCP
**O que faz:** Eu opero Canva direto via tools `mcp__claude_ai_Canva__*`.
**Brand Kit Aura:** `kAHJwcGixiU`
**Tools chave:** `generate-design`, `perform-editing-operations`, `export-design`, `upload-asset-from-url`, `list-brand-kits`, `search-brand-templates`.
**Quando uso:** Quando cliente vai editar o design depois · ou usar templates Canva premium.
**Custo:** Canva Pro (Eduardo paga).
**Status:** ✅ autenticado em edubchaves5@gmail.com

### 4. Replicate Flux (foto fotorrealista IA)
**O que faz:** Gera foto fotorrealista sob medida.
**Modelos:**
- **Flux Schnell** ~$0.003/img · 2-3s · prototipagem rápida
- **Flux Dev** ~$0.025/img · 5-10s · qualidade premium
- **Flux 1.1 Pro** ~$0.05/img · top qualidade
**Comando:** `npm run img -- <prompt-key-ou-custom> [out] [model]`
**Token:** `REPLICATE_API_TOKEN` no Vercel + `.env.local`
**Biblioteca de prompts:** `src/lib/image-prompts/<cliente>.ts` (Aura: 8 prompts cravados)
**Custo:** ~$0.10 por carrossel (4 imagens Dev)
**Status:** ✅ ativo · usado em GB (loja, flat lay, academia, mockup celular, entrega)

### 5. Remove.bg API
**O que faz:** Remove fundo de imagem → PNG transparente.
**Endpoint:** `api.remove.bg/v1.0/removebg`
**Comando:** `npm run nobg -- <input.png> [output.png]`
**Token:** `REMOVE_BG_API_KEY` no `.env.local`
**Custo:** 1 crédito por imagem (~$0.05 em volume baixo).
**Status:** ✅ ativo · usado em GB (4 produtos: Hórus, Whey Max, Whey Nutrata, Creatina)

### 6. Anthropic Claude API (Copy Gen)
**O que faz:** Gera copy seguindo brand voice + framework cravado · 3 variações (curta/média/longa).
**Acessos:**
- API direta: `src/lib/copy-engine/index.ts`
- UI: https://auraenergy.vercel.app/copy-gen (token `impulso-copy-afa5154cbce0a0a30d01fcf3`)
**Modelo:** Claude Sonnet 4.6
**Custo:** ~$0.015 por geração de 3 variações
**Status:** ✅ ativo · brand voices: Aura, GB Nutrition

### 7. Sharp standalone
**O que faz:** Processamento de imagem em Node — resize, crop, blur, tint, composite, alpha extract.
**Quando uso:** Cropar fotos do cliente (ex: Gabriel sem o box dark do post anterior) · gerar variações de logo (blur, dark mode).
**Custo:** $0
**Status:** ✅ instalado · usado em vários scripts

---

## 🗺️ Árvore de decisão · qual ferramenta usar

```
Você pede um post →
  ┌─ Tem foto que precisa? 
  │    ├─ SIM: tem real? 
  │    │    ├─ SIM → sharp pra tratar
  │    │    └─ NÃO → Replicate Flux (Schnell pra rapidez · Dev pra premium)
  │    └─ NÃO: pula
  │
  ├─ Foto tem fundo branco e precisa virar cutout?
  │    └─ remove.bg (npm run nobg)
  │
  ├─ Precisa CSS moderno (filter blur, mix-blend, glassmorphism)?
  │    ├─ SIM → puppeteer + página HTML completa
  │    └─ NÃO → Next/og ImageResponse (sub-segundo)
  │
  ├─ Texto/copy?
  │    └─ Anthropic API com brand voice + framework
  │
  └─ Cliente vai editar depois?
       └─ Canva MCP (upload-asset + generate-design)
```

---

## 🔑 Env vars cravadas no Vercel (production)

| Var | Uso |
|---|---|
| `ANTHROPIC_API_KEY` | Copy Gen |
| `COPY_GEN_TOKEN` | Auth da rota /copy-gen |
| `REPLICATE_API_TOKEN` | Flux IA |
| `REMOVE_BG_API_KEY` | Cutouts (também em `.env.local`) |
| `NEXT_PUBLIC_GA4_ID` | Analytics |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console |

---

## 📁 Estrutura cravada no projeto `auraenergy/`

```
src/
├── lib/
│   ├── brand-voice/         # ← brand voice JSON por cliente
│   │   ├── aura.ts
│   │   ├── gb-nutrition.ts
│   │   ├── registry.ts
│   │   └── types.ts
│   ├── copy-framework/      # ← 7 formatos com beats obrigatórios
│   ├── copy-engine/         # ← orquestrador Anthropic
│   └── image-prompts/       # ← biblioteca Flux por cliente
│       └── aura.ts
└── app/
    ├── artes/<cliente-tema>/[slide]/route.tsx
    └── copy-gen/page.tsx

public/
├── <cliente>/               # ← logos + fotos
│   ├── logo-*.png
│   ├── produtos/           # ← produtos reais
│   └── produtos/nobg/      # ← com bg removido
└── ...

scripts/
├── render-arte.mjs         # ← puppeteer screenshot
├── gen-image.mjs           # ← Replicate Flux
├── remove-bg.mjs           # ← remove.bg
├── gen-logo-blur.mjs       # ← sharp blur logo
└── gen-logo-dark.mjs       # ← sharp tint dourado pra dark zone
```

---

**Próximas ferramentas pra estudar:**
- Figma MCP (cria designs editáveis · útil quando cliente quer mexer)
- Adobe Stock API (foto premium curada · alternativa a Flux quando precisa de pessoa real)
- ElevenLabs / OpenAI TTS (voiceover pra Reels quando rolar)
- FFmpeg via Node (montar Reels: foto + texto + transição)

**Ver também:** [[VERBO-DESIGN]] · [[02-PRINCIPIOS]] · [[reference-stack-design-aura]]
