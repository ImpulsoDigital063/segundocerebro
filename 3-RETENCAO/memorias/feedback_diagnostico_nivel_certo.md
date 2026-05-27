---
name: diagnostico-no-nivel-certo
description: "quando volta a mexer em bug recorrente, localizar a camada da falha real antes de codar fix; sintoma ≠ raiz"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: dec639ce-3f96-4f92-ab41-88c15a50f7f0
---

Voltar a mexer em bug recorrente sem antes confirmar a camada da falha = fix decorativo. Recidiva garantida.

**Why:** Mesmo incidente briefing Aura · Renato 20/05/2026. Bug real: API `/api/briefing/draft` retornava 200 com payload `data:{}` (falha silenciosa). Diagnóstico errado em 19/05: "usuário não percebe quando save falha". Fix codado: UX (mensagem de erro persistente, bloqueio de avanço se catch dispara). Mas o catch NUNCA disparava — o save não estava falhando no sentido de quebrar, estava falhando em silêncio. Fix não pegou nada. Renato preencheu de novo e perdeu de novo. O lugar do bug não era a UI — era o servidor não validando payload + o client mandando data vazio. Mirei na camada visível, não na camada de verdade.

**How to apply:** Antes de codar SEGUNDO fix em bug recorrente, perguntar explicitamente: a falha tá na UI, no payload do client, na rota do server, ou no banco? Cada uma exige fix diferente. Ler logs reais (Vercel logs, Supabase logs), payload real (Network tab DevTools), row real (SELECT no banco). Não confiar no diagnóstico anterior só porque "fizemos fix lá". Errar a camada de novo = recidiva garantida.

Relacionado: [[prova-na-fonte-persistencia]] · [[verificar-deploy-antes-de-afirmar]]
