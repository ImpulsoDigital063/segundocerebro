---
name: prova-na-fonte-persistencia
description: "validar persistência = ler row no banco depois de escrever; UI verde / res.ok / \"salvo\" NÃO são prova"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: dec639ce-3f96-4f92-ab41-88c15a50f7f0
---

Em fluxo de persistência, a única prova válida é ler a row no banco depois de escrever. UI mudando de estado não é evidência. `res.ok === true` não é evidência. "Salvo!" verde não é evidência.

**Why:** Incidente briefing Aura · Renato 20/05/2026. Cliente preencheu o briefing 3 vezes (08-20/05) e nenhuma chegou. Eu testei com Eduardo em 19/05, vi UI marcar "salvo verde", dei por encerrado sem abrir o Supabase pra confirmar a row. A API retornava 200 com `data: {}` — falha silenciosa. O catch nunca disparou porque o "erro" estava embutido no sucesso. Renato preencheu de novo e perdeu de novo. Cliente premium repetiu trabalho 3x. Loop de fix mirado no lugar errado.

**How to apply:** Em qualquer rota que faz write (briefing, billing, form cliente-facing, qualquer upsert): depois do PUT/POST, fazer SELECT na row e confirmar que `data` NÃO está vazio nem inválido. Se estiver, retornar 500 — não 200. Em teste manual: nunca dar "OK, funcionou" em fluxo de persistência sem antes ler a row diretamente no banco (curl pro Supabase REST, query no SQL Editor, ou rota debug). UI é teatro; banco é verdade.

Relacionado: [[diagnostico-no-nivel-certo]] · [[verificar-deploy-antes-de-afirmar]]
