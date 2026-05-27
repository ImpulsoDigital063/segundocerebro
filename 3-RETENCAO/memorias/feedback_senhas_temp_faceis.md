---
name: senhas-temp-faceis
description: "AgendaPRO · senhas temporárias pra profissional/recep devem ser fáceis de digitar no celular (minúsculo · sem símbolos · curto) · sistema força troca no 1º login então segurança vem do force-change, não da entropia"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Senhas temporárias geradas em lote pra profissional/recepcionista devem ser FÁCEIS de digitar no celular.

**Why:** Eduardo cravou 17/05/2026 (Palace Nail Spa). Padrão antigo `AgPro-1vy_M-a1` (random base64) é técnico-correto mas inviável de ditar no Whatsapp ou digitar em iPhone — vira fricção no onboarding. Profissional desiste / chama dono / sistema parece complicado. Sistema FORÇA troca de senha no 1º login (password_changed=false) → senha temp existe por minutos, segurança vem do force-change, não da entropia da temp.

**How to apply:**
- Padrão default: `<primeironome>2026` (kelle2026, sofia2026, ariana2026, divina2026, leticia2026). Tudo minúsculo, ano atual, sem símbolos.
- Alternativas válidas se Eduardo preferir: `palace1` · `palace2` · `palaceN` sequencial, ou `<biz>2026` único pra todos do mesmo cadastro em lote.
- NUNCA repetir mesma senha pra 2 pessoas no mesmo business sem ciente (cada uma loga na conta da outra antes do force-change).
- Vale pra cadastrar-equipe.mjs e scripts similares · vale pra API invite-professional também (que hoje gera AgPro-randombytes).
- Linkar com [[agendapro-autonomia-operacional]] — dono não pode virar gargalo no onboarding por causa de senha difícil.
