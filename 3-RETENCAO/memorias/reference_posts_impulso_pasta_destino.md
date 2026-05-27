---
name: reference-posts-impulso-pasta-destino
description: Posts da Impulso Digital (anúncios de projetos pro IG) ficam em Desktop/Posts Impulso/<campanha>/ — padrão paralelo ao de Aura
metadata: 
  node_type: memory
  type: reference
  originSessionId: dafbfd4e-5d22-4c22-bd66-accca01f82af
---

Cravado 18/05/2026 com o post de anúncio do Azeitona do Forró.

**Pasta destino:** `C:/Users/Usuario/Desktop/Posts Impulso/<nome-campanha>/`

**Conteúdo típico por campanha:**
- `<projeto>-post-impulso.png` — versão pro feed da Impulso (com selo "por Impulso Digital" + URL + handle)
- `<projeto>-post-perfil.png` — versão pro perfil do cliente (mesma identidade, sem menção à Impulso)
- `caption.txt` — legenda pronta pra copiar/colar, sem emoji ([[feedback-sempre-svg-nunca-emoji]])
- Variações opcionais: `-cartaz`, `-quote`, etc.

**Pipeline cravado pra gerar:**
- Rota dinâmica `next/og` ImageResponse dentro do projeto Next do cliente (ex.: `azeitona-do-forro/src/app/api/og/[variant]/route.tsx`)
- Fontes Google via jsdelivr CDN (`cdn.jsdelivr.net/fontsource/fonts/<font>@latest/<file>.ttf`)
- Foto via URL absoluta `new URL(req.url).origin + /path.png` (data URL falha silenciosamente pra PNG grande)
- Pra cenas novas (cliente sem foto adequada): pipeline [[reference-hero-face-swap-workflow]] em formato 1:1 (variant square, custo ~$0.08)
- Dev server em `localhost:3001` (ou porta disponível) · curl pro endpoint salva o PNG

**Why:** posts de anúncio amplificam o trabalho da Impulso e dão tráfego cruzado pro perfil dela + perfil do cliente. Padronizar pasta destino + estrutura facilita reuso e mantém histórico.

**How to apply:**
- Cada novo cliente Impulso que precise post de anúncio → criar `Desktop/Posts Impulso/<cliente>-<motivo>/` + 2 variações (impulso + perfil) + caption
- Variações visuais extras (cartaz, quote, etc.) entram com sufixo no nome
- Sempre 1080×1080 pra feed default ([[feedback-destrinchar-decisao-por-decisao]] — confirmar formato com Eduardo)

Relacionado: [[reference-posts-aura-pasta-destino]], [[reference-stack-design-aura]], [[reference-hero-face-swap-workflow]], [[feedback-verbo-operador-paradigma]].
