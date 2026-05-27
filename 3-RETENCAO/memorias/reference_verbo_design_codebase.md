---
name: reference-verbo-design-codebase
description: "Codebase verbo-design (toolkit CLI imagem+vídeo) criado 27/05/2026 substituindo impulsodesign. Repo GitHub privado, núcleo migrado do painel antigo, módulo vídeo novo."
metadata: 
  node_type: memory
  type: reference
  originSessionId: 14cfa5f6-e628-4892-aea7-f6b13be5cf41
---

Codebase operacional do Verbo Design — criado em 27/05/2026 substituindo o `impulsodesign` (painel Next.js aposentado).

**Path local:** `C:/Users/Usuario/verbo-design/`
**Repo GitHub:** `https://github.com/ImpulsoDigital063/verbo-design` (privado)
**Paradigma:** CLI-first, sem UI humana. Operado por agente Claude direto do terminal. Deliverables vão pra `Desktop/Posts <cliente>/<campanha>/`.

## Estrutura

```
src/
  image/      Stack imagem migrada (lib/ai/* + slides.tsx + og-render.ts)
  video/      Stack vídeo nova (Remotion + providers Replicate + Whisper)
  shared/     Marcas, KV (Upstash), storage (BrandBrain, carrosseis, presets)
scripts/      CLIs npm run img:* e vid:*
docs/         MIGRACAO-IMPULSODESIGN.md (mapeamento detalhado)
```

## Stack

- TS ESM + tsx (Node 20+)
- Anthropic SDK (haiku/sonnet/opus, com modo Claude Code local opcional)
- Replicate (Flux Schnell/Pro, Ideogram, Kontext, Kling 2.1, Wan 2.2)
- @vercel/og (Satori) — renderiza slide standalone sem Next
- Sharp, Unsplash + Pexels, Remove.bg
- Remotion 4 (componentes React = composição de vídeo)
- OpenAI Whisper (gpt-4o-transcribe) pra legenda
- Upstash Redis (KV pra BrandBrain, carrosseis, cost-log)

## Marcas registradas

Impulso Digital · MPN-On · AgendaPRO · RadarPRO · GB Nutrition · UrbanFeet (todas em `src/shared/brands.ts`).

## Comandos chave

| Comando | Faz |
|---|---|
| `npm run img:generate -- "<prompt>"` | Replicate Flux pra PNG |
| `npm run img:slide -- <id>` | Renderiza slide de carrossel via Next/og standalone |
| `npm run img:stock -- "<query>"` | Busca Unsplash/Pexels |
| `npm run vid:animate -- "<prompt>" --image=<url>` | Anima PNG via Kling/Wan |
| `npm run vid:caption -- audio.mp3` | SRT via Whisper |
| `npm run remotion:studio` | Preview composição Remotion |
| `npm run remotion:render` | Exporta MP4 |
| `npm run typecheck` | tsc --noEmit |

## Custos cravados (Replicate, 27/05/2026)

- Kling 2.1: ~$0.10/seg (padrão de batalha image-to-video)
- Wan 2.2: ~$0.04/seg (rascunho A/B)
- Veo 3.1 / Runway Gen-4.5: ~$0.15/seg (cliente premium)
- Reels Impulso médio: ~$0.65-0.70

Cap padrão cost-tracker: $10 USD/job.

## Regra: rascunho em Wan, final em Kling

Iteração explode custo (5 prompts Kling = $2.50). Sempre rascunhar em Wan e fechar em Kling.

## Pré-requisitos pra rodar

- `npm install` no path
- `.env.local` com chaves (ver `.env.example`): ANTHROPIC, REPLICATE, OPENAI, UNSPLASH, PEXELS, KV (Upstash)
- FFmpeg no PATH (`winget install Gyan.FFmpeg`) pra Remotion render

## Próximos passos cravados

1. `winget install Gyan.FFmpeg` (pré-requisito Remotion)
2. Primeiro experimento real: animar 1 slide do último Aura, exportar 9:16 pra `Desktop/Posts Aura/teste-video-01/` — define piso de qualidade Impulso em vídeo
3. Pipeline `vid:reels` completo (brief JSON → Kling/Wan + Whisper + Remotion → MP4)

Ver também: [[reference-verbo-design-hub]] · [[feedback-verbo-operador-paradigma]] · [[reference-stack-design-aura]] · [[reference-posts-aura-pasta-destino]] · [[reference-posts-impulso-pasta-destino]]
