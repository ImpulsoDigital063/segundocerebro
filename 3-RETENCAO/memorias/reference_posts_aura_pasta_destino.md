---
name: reference-posts-aura-pasta-destino
description: Pasta destino padrão das artes Aura entregues pelo Verbo. Convenção de nomes e estrutura.
metadata: 
  node_type: memory
  type: reference
  originSessionId: 8a9ddf10-2ba5-44fb-8177-ff72c9f8178a
---

**Pasta destino cravada:** `C:/Users/Usuario/Desktop/Posts Aura/<campanha>/`

**Convenção de estrutura por campanha:**
```
<campanha>/
├── slide-1.png        (1080×1080 · pronto pra postar)
├── slide-2.png
├── ...
├── slide-N.png
├── caption.txt        (caption completa Instagram + hashtags + instruções)
└── _arquivo/          (versões antigas/iterações reprovadas · gitignored mental)
```

**Campanhas existentes em 15/05/2026:**
- `carrossel-fio-b/` — 5 slides V11 + caption (pronto pra postar)

**Convenções de nome:**
- Slides numerados sequencialmente (`slide-1.png` ... `slide-5.png`)
- Histórico em `_arquivo/` com sufixo descritivo (`slide-1-v3-com-foto.png`, `slide-1-v9-watermark-aura.png`)
- `caption.txt` sempre inclui: caption Instagram + hashtags 10-15 + bloco "INSTRUÇÕES DE POSTAGEM" (ordem, horário, stories de apoio) + bloco "PENDÊNCIAS V11" (o que pode melhorar quando vier foto real do cliente)

**Convenção URL no projeto auraenergy:**
- Rota dinâmica `/artes/<campanha>/<n>` retorna PNG via ImageResponse
- Ex: `https://auraenergy.vercel.app/artes/fio-b/1` → slide 1 do carrossel Fio B
- Pra puppeteer/HTML completo: criar página em `/artes-canvas/<campanha>/<n>/page.tsx` (não usado ainda)

**Quando criar nova campanha:**
1. Decidir slug curto (`carrossel-mitos`, `story-prova-social`, `post-cta-orcamento`)
2. Criar pasta em `Posts Aura/<slug>/`
3. Implementar route em `src/app/artes/<slug>/[slide]/route.tsx`
4. Reusar `LogoBlock` + `DotGrid` helpers cravados em `fio-b/route.tsx`
5. Salvar slides + caption na pasta
6. Quando Eduardo aprovar: renomear `slide-N-final.png` → `slide-N.png` e mover versões antigas pra `_arquivo/`

Ver também: [[reference-stack-design-aura]] · [[feedback-verbo-operador-paradigma]] · [[feedback-arco-aida-carrosseis]]
