---
name: feedback-gh-active-account-check
description: gh CLI tem 2 contas logadas (systempalacemacae do Palace + ImpulsoDigital063 do dono). Conferir active antes de push.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 14cfa5f6-e628-4892-aea7-f6b13be5cf41
---

`gh auth status` tem dois usuários logados no github.com — `systempalacemacae` (conta de serviço do Palace) e `ImpulsoDigital063` (conta do Eduardo, dona dos repos). Quando active troca pro Palace, todo push pra `ImpulsoDigital063/*` falha com 403 / "Repository not found".

**Why:** já caiu nessa pegadinha 2× em 27/05 e 29/05. Setup gh é compartilhado entre tudo na máquina, então outra sessão Claude (CIC Palace, agent sub-spawn) pode ter trocado pro systempalacemacae sem avisar.

**How to apply:** antes de qualquer push pra ImpulsoDigital063/* (auraenergy, verbo-design, segundo-cerebro, impulsodesign, impulso-digital-nextjs):

```bash
gh auth status 2>&1 | head -4
# se "Active account: true" estiver no systempalacemacae:
gh auth switch --user ImpulsoDigital063
```

Não confundir com bug de Windows Credential Manager — esse cenário é diferente. Aqui `gh` está como credential helper mas seleciona o token errado.

Sintomas no log:
- `remote: Permission to ImpulsoDigital063/<repo>.git denied to systempalacemacae`
- `remote: Repository not found.`

Ver também: [[feedback-vercel-link-projeto-certo]] (mesma lógica de "conferir credencial antes de deploy")
