---
name: feedback-verificar-deploy-antes-de-afirmar
description: "Antes de afirmar que um projeto da Impulso \"não tem deploy\" ou \"não está no ar\", verificar o domínio via WebFetch"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

Antes de afirmar que um projeto **não tem deploy / não está no ar**, fazer WebFetch no domínio provável (`<projeto>.com` / `<projeto>.com.br`) ou checar se há permissão WebFetch já cravada em `.claude/settings.local.json` (sinal de que o domínio existe).

**Why:** No dia 2026-05-13 afirmei ao Eduardo que `criativosdoceu.com` "não tinha deploy" baseado apenas em não achar `vercel.json` / `.env` no repo local. O domínio estava no ar, polido e funcional. Eduardo corrigiu: "voce falou sem deploy ? sendo que o projeta tá e online já". A ausência de config local não prova ausência de deploy — Vercel funciona sem `vercel.json` e env vars podem estar setadas só no dashboard.

**How to apply:**
- Diagnóstico de projeto web: **sempre** rodar WebFetch no domínio antes de concluir status de deploy
- Checar `.claude/settings.local.json` para permissões WebFetch já cravadas (cada uma é um sinal de domínio real)
- Quando o repo não tem `.env` mas tem links externos (Kiwify, GA), assumir que envs estão no host (Vercel/Netlify), não que não existem
- Em frase ao Eduardo: nunca dizer "não tem X" sem ter verificado X diretamente
