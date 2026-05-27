---
name: migration-antes-de-push
description: Migration que adiciona coluna usada por código novo precisa entrar em prod ANTES do git push · senão Vercel sobe e quebra
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

Quando código novo lê uma coluna criada por migration, a migration tem que ser aplicada em prod **antes** do git push. Senão Vercel pega o commit, deploya, e os SELECTs novos quebram com `column "X" does not exist`.

**Why:** aconteceu como risco real em 14/05/2026 com v44 (cupom avulso) e v45/v46 (no-show). Pausamos antes de pushar e Eduardo aplicou no Supabase. Se tivesse pushado direto, Olímpio/Erlane/Leticia teriam visto erro 500 em todas as páginas que consultavam `coupons` ou `businesses`.

**How to apply:**
- Antes de `git push` de qualquer commit que tem SELECT de coluna nova: **pausar** e pedir pro Eduardo aplicar migration primeiro
- Apresentar SQL pronto pra copy/colar (ver [[supabase-sql-editor-quirk]] pra como evitar bug do editor)
- Esperar Eduardo confirmar "Success" antes de pushar
- Se for vários blocos, esperar confirmação de TODOS antes de pushar (caso contrário deploy parcial)
- Migration `IF NOT EXISTS` + `DEFAULT` em colunas novas torna o caso safe se a ordem inverter por acidente · usar sempre que possível
- Trigger SQL novo é SEGURO de aplicar antes ou depois do código (não interfere se não disparar)

**Exceções:**
- Migration puramente ADDITIVE (ADD COLUMN com default) pode ser aplicada depois SE o código novo for tolerante (usar `?? default` no client)
- Migration que NÃO é lida pelo código (ex: index novo · CHECK constraint) é safe pushar antes

**Linkar com:** [[supabase-sql-editor-quirk]] (sempre aba nova) e [[verificar-deploy-antes-de-afirmar]] (testar URL após push).
