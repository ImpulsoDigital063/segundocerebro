---
name: vercel-queue-travada-hobby
description: "Vercel Hobby plan · fila de builds trava quando dispara múltiplos deploys em sequência curta · ficam Queued sem iniciar build, podem ficar 30min+ parados"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Vercel Hobby plan tem limite de builds concorrentes (1 por vez) E quota mensal (~100 builds/mês). Quando disparo `vercel deploy --prod --yes` várias vezes em sequência curta (sub-5min), os deploys ficam **Queued** indefinidamente sem build iniciar. Não destravam sozinhos — fica horas parados.

**Why:** 18/05/2026, sessão Palace. Fiz ~6 deploys em ~30min (cada feature/fix). Os primeiros 2 rodaram. Os próximos 4 ficaram Queued, depois cancelei via `vercel remove`, disparei novo, esse TAMBÉM ficou Queued 24min+. Eduardo viu tela antiga e perguntou "deployou no lugar certo?" — não era projeto errado, era fila travada. `vercel remove` em deploys queued funciona pra LIMPAR a fila, mas o próximo deploy entra na mesma fila travada.

**How to apply:**
- Antes de disparar novo deploy: rodar `vercel ls` e ver se já tem Queued. Se tiver, NÃO criar outro — espera.
- Limite de prática: 1 deploy a cada 5-10 min. Agrupar várias features num único commit/deploy.
- Quando fila trava, alternativas:
  - Aguardar 15-30min (às vezes destrava)
  - Usuário cancelar manualmente no dashboard (https://vercel.com/<org>/<project>/deployments) e clicar Redeploy
  - Build prebuilt local: `vercel pull --yes --environment production && vercel build --prod --yes && vercel deploy --prebuilt --prod --yes` (cuidado: erro "Unable to find lambda for route" pode aparecer e bloquear)
- Memória relacionada: [[vercel-link-projeto-certo]] e tarefa pendente "Resolver causa raiz do webhook Vercel"
- Considerar: upgrade pra Pro plan resolveria (concurrent builds + quota maior)
