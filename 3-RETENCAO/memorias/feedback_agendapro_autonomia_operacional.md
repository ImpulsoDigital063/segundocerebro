---
name: agendapro-autonomia-operacional
description: "AgendaPRO · regra global de design — sistema opera dia-a-dia sem depender do Adm; Adm define políticas, operação acontece sem ele"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

AgendaPRO precisa operar **sem depender do Adm/dono** pra coisas do dia-a-dia.

**Why:** Eduardo cravou em 17/05/2026 (sessão Palace Nail Spa): "o sistema não pode depender do adm pra funcionar, isso vai dar liberdade e fazer o adm gostar mais ainda do agendaPRO". Operação que exige Adm pra cada decisão vira gargalo, desvaloriza o produto, e faz o dono fugir do sistema. Adm liberado = Adm que recomenda.

**How to apply:**
- Toda feature de profissional/recepcionista deve ser desenhada pra operar **autônoma**.
- Adm define **políticas** (regras de alto nível · ex: "desconto de pontos é geral ou por profissional?") — execução do dia-a-dia (resgatar pontos, marcar agendamento, registrar pagamento, editar cliente) acontece sem precisar pingar Adm.
- Default cravados na config inicial · não deixar campos em branco esperando Adm preencher pra recep/prof poder operar.
- Quando aparecer permissão duvidosa pra recep/prof: pergunta "isso vira gargalo se Adm tiver que ser chamado?" — se sim, libera com regra clara.
- Distinguir 3 níveis: **política** (Adm), **operação rotineira** (recep/prof autônomos), **exceção** (escala pra Adm).

Linkar com [[viva-cacheada]] · [[agendapro-estado-15-05]] · [[palace-nail-spa]] quando vier.
