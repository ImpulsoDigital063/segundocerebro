---
name: vercel-link-projeto-certo
description: "Vercel · ao rodar `vercel --prod` num repo, conferir .vercel/project.json aponta pro projectId que serve o DOMÍNIO de produção; se não, deploy vai pra projeto fantasma sem domínio e nada chega ao usuário"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Antes de qualquer `npx vercel --prod` num repo, **conferir `.vercel/project.json` aponta pro projectId que tem o domínio de produção** atrelado. Se não, o CLI deploya pra um projeto fantasma novo (criado automaticamente) e o domínio fica intocado, fazendo parecer que o deploy "não funcionou".

**Why:** 17-18/05/2026, sessão Palace Nail Spa. Após desbloquear o webhook quebrado via deploy CLI, fiz vários `vercel --prod` sem perceber que o `.vercel/project.json` tava apontando pra `prj_tn3rqVOaSuiEOpDhqUjIn7ozWuQm` (projeto fantasma criado pelo CLI no primeiro `vercel link`), enquanto o domínio `www.agendapro.net.br` apontava pra `prj_cFBr4eIqDdYe7YqgKYilbURDsaGE` (projeto histórico). Nada do que deployei chegou ao usuário · Eduardo viu loop infinito por horas porque o servidor continuava no commit `2ede6b4` de 3 dias atrás. Diagnóstico só veio quando comparei `vercel logs https://www.agendapro.net.br` (projectId X) vs `vercel logs https://<novo-deploy>.vercel.app` (projectId Y).

**How to apply:**
- Antes de `vercel --prod`: `cat .vercel/project.json` e validar que `projectId` casa com o projeto que tem o domínio
- Pra descobrir o projectId do domínio: `npx vercel logs https://<dominio>` → mostra `Fetching project "prj_..."`
- Se mismatch: editar `.vercel/project.json` manualmente com o projectId certo (não precisa rodar `vercel link` de novo, basta editar JSON)
- Validar deploy real com `curl -sI https://<dominio>/<rota-nova>` — se a rota nova retorna esperado (não 404), deploy chegou
- Se múltiplos projetos no mesmo team com nomes parecidos (ex: "agendapro" e "agenda-pro"), atenção dobrada
