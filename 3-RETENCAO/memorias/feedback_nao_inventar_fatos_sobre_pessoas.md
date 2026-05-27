---
name: feedback-nao-inventar-fatos-sobre-pessoas
description: "Nunca inventar/inflar relação entre o Eduardo e pessoas (clientes, parceiros, parentes) — só repetir o que ele disse, literal"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

**Nunca inventar (ou inferir além do dito) detalhes sobre a relação entre o Eduardo e pessoas que ele menciona** — clientes, parceiros, sócios, parentes. Repetir literal o que ele falou. Se faltar contexto, perguntar; nunca preencher com hipótese.

**Why:** No dia 2026-05-13 Eduardo disse que Matheus *"é membro e design ativo da Base Church de Palmas"*. Eu, escrevendo o prompt pra Claude for Chrome, **inflei pra "Matheus criou a Base Church"**. Eduardo cortou: *"que horas eu falei que Mateus criou a Base church ? cara eu falei que ele é mebro de lá e é o design ativo da igreja. Pelo amor de Deus não delira"*. Esse tipo de invenção é **gravíssima** porque (1) corre risco de virar copy de plano de negócio ou LP com fato errado, (2) Eduardo confia no que cravo na memória pra futuras sessões, (3) prompts que disparo pra outros agentes (CIC, Chrome) propagam a alucinação.

**How to apply:**
- Se Eduardo disse "X é membro de Y", **eu escrevo só "X é membro de Y"**. Não "X faz parte de Y", "X tem ligação com Y", "X faz a comunicação de Y" (mesmo que pareça óbvio), e principalmente nada como "X fundou Y", "X é dono de Y", "X criou Y"
- Distinguir os verbos com cuidado: *frequenta* ≠ *é membro de* ≠ *trabalha em* ≠ *é voluntário em* ≠ *é responsável por* ≠ *fundou* ≠ *é dono de*
- Antes de mandar prompt pra outro agente, **reler procurando verbos de relação** que não estão na fala do Eduardo
- Se preciso de algum dado de relação que ele não cravou explicitamente, **perguntar** antes de seguir
- Em projetos com parceria/sociedade: papel exato do parceiro precisa estar cravado em memória antes de qualquer entregável ir pra fora
