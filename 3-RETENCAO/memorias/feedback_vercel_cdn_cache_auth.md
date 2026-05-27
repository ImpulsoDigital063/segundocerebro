---
name: vercel-cdn-cache-auth
description: "Vercel · rotas de auth/redirect precisam de Cache-Control no-store EXPLÍCITO; default cacheia em edge mesmo com max-age=0, e mudanças no redirect (login/role/permissão) ficam invisíveis até cache purgar"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Vercel CDN cacheia páginas estáticas no edge **mesmo com `Cache-Control: public, max-age=0, must-revalidate`** — pra invalidar de verdade precisa de `no-store` em 3 lugares: `Cache-Control`, `CDN-Cache-Control` e `Vercel-CDN-Cache-Control`.

**Why:** confirmado 17/05/2026 durante teste Palace Nail Spa. Após push de fix de redirect (`is_receptionist → /recepcao`), o JS de `/profissional/login` continuava com versão antiga (sem redirect) porque `Age=60h` no `X-Vercel-Cache: HIT`. Recepcionista logava e caía no painel do profissional. Diagnóstico levou ~30min — usuário só conseguiu validar após cache purgar (próximo deploy + headers no-store).

**How to apply:**
- Rotas que dependem de redirect server-side OU JS client com lógica de auth NUNCA podem ser cacheadas pelo CDN do Vercel
- Em `next.config.ts` cravar bloco de headers só pra essas rotas:
  ```ts
  {
    source: '/:path(login|admin|admin/login|profissional|...)',
    headers: [
      { key: 'Cache-Control', value: 'private, no-cache, no-store, max-age=0, must-revalidate' },
      { key: 'CDN-Cache-Control', value: 'no-store' },
      { key: 'Vercel-CDN-Cache-Control', value: 'no-store' },
    ],
  }
  ```
- Diagnóstico rápido: `curl -sI <url> | grep -iE "age|x-vercel-cache"`. `Age > 0` ou `HIT` em rota de auth = bug latente.
- Pra purgar cache imediatamente: rebuild via push (forçando rebuild) — sem CLI do Vercel não tem outro caminho. Deploy redeploy promote no dashboard também funciona.
