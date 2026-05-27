---
name: reference-hero-face-swap-workflow
description: Receita técnica pra gerar hero cinematográfico com rosto exato do cliente preservado (Flux Kontext + codeplugtech face swap)
metadata: 
  node_type: memory
  type: reference
  originSessionId: df9db124-9e2a-4d48-932c-0c3ddf905e0a
---

Cravada 16/05/2026 no projeto Azeitona do Forró.

**Problema que resolve:** Flux Kontext Pro gera cena cinematográfica boa, mas amolece o rosto (parece "primo do cliente"). Face swap por cima preserva fisionomia 100%.

**Pipeline em 2 passos:**

1. **Cena via Flux Kontext Pro** (`black-forest-labs/flux-kontext-pro` no Replicate · ~$0.04/img)
   - Input: foto de referência do cliente (estúdio, qualquer ângulo) + prompt cinematográfico
   - Preserva roupas/acessórios/identidade VISUAL (chapéu, jaqueta, óculos)
   - Aspect ratio: 16:9 pra desktop · 9:16 pra mobile (gerar AMBOS)
   - Prompt template: "Same young brazilian man as in the reference photo, preserving his exact facial features, [cenário cinematográfico], [iluminação], [ambiente], [paleta], cinematic documentary photography, photorealistic editorial quality, no text, no logo"

2. **Face swap via codeplugtech/face-swap** (Replicate · ~$0.04/img)
   - Versão (16/05/26): `278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34` (sempre rebuscar via `GET /v1/models/codeplugtech/face-swap` antes de rodar)
   - Inputs: `swap_image` (foto original do cliente · source face) + `input_image` (hero gerada · target)
   - Output: hero cinematográfica com fisionomia exata

**Custo total:** ~$0.16 por par desktop+mobile.

**Rate limit Replicate:** com saldo < $5, limita 6 req/min com burst de 1. **Não rodar em paralelo** — sempre sequencial.

**Scripts cravados (em auraenergy/scripts/):**
- `gen-azeitona-hero.mjs` — passo 1 (Flux Kontext)
- `gen-azeitona-faceswap.mjs` — passo 2 (face swap)
- `get-replicate-version.mjs` — utilitário pra pegar hash de qualquer modelo Replicate

**Why:** Eduardo cravou "fora da curva" pra hero. Foto de estúdio cinza = press photo morta. Cenário cinematográfico gerado dá impacto, mas só funciona se o rosto for IDÊNTICO ao cliente. Sem face swap, Eduardo reprova ("mudou a fisionomia").

**How to apply:**
- Qualquer cliente novo que precisa de hero impactante e tem 1 foto profissional de referência → este pipeline
- Generalizar os scripts pra outros clientes: copiar `gen-azeitona-*.mjs` → renomear pasta `assets/` e prompts
- Antes de gerar, validar prompt do passo 1 com Eduardo (cenário, paleta, ambiente)
- Sempre rodar desktop + mobile separados (aspect 16:9 e 9:16) pra hero responsivo via `<picture>`

Relacionado: [[project-azeitona-do-forro]], [[reference-stack-design-aura]].
