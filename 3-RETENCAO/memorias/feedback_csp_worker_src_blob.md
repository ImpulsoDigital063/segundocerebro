---
name: csp-worker-src-blob
description: "Web Worker criado via blob: URL (compressImage etc) precisa de `worker-src 'self' blob:` no CSP, senão o navegador bloqueia silencioso e a Promise fica pendurada"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Quando o app cria Web Worker via blob: URL (ex `compressImage` no AgendaPRO, qualquer worker dinâmico de lib), o CSP `Content-Security-Policy` precisa declarar **`worker-src 'self' blob:`** explicitamente. Sem isso o navegador cai no fallback `script-src` que normalmente só permite `'self' 'unsafe-inline' 'unsafe-eval'` — e bloqueia o worker silenciosamente.

**Why:** AgendaPRO 22/05/2026 madrugada · upload de imagem de produto travou sem mensagem clara. Eduardo clicava em Salvar e drawer não fechava nem mostrava erro. Diagnóstico via DevTools achou o erro:

> Creating a worker from 'blob:...' violates the following Content Security Policy directive: "script-src 'self' 'unsafe-inline' 'unsafe-eval'". Note that 'worker-src' was not explicitly set, so 'script-src' is used as a fallback.

A Promise da compressão ficava pendurada porque o worker nem inicia, então o fetch do save nunca disparava. Fix em `next.config.ts` headers CSP: adicionar `worker-src 'self' blob:` + `child-src 'self' blob:` (alias pra browsers antigos).

**How to apply:**
- Toda lib que usa Web Worker via blob (compressImage, comlink, workerize, qualquer lazy worker) precisa do `worker-src 'self' blob:` no CSP.
- Sintoma típico: feature trava sem erro vermelho na UI. Promise fica pendurada. F12 → Console mostra "violates the following Content Security Policy directive".
- Cravado em [[feedback_diagnostico_nivel_certo]] — sempre abrir DevTools antes de chutar UI/API/banco quando o sintoma é "ação não acontece sem feedback".
