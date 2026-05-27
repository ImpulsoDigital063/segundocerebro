---
name: feedback-pontos-nao-misturam-com-pagamento
description: Regra cravada Eduardo 25/05 · pontos NUNCA viram desconto em R$ nem dividem split de pagamento · resgate é troca POR serviço/produto inteiro quando atinge o cadastrado
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Sistema de fidelidade do AgendaPRO (Olímpio mobile, padrão Salão99): pontos
NUNCA se misturam com pagamento em R$. NÃO existe "abater pontos como desconto",
"dividir parcial pontos + dinheiro" ou "trocar pontos por crédito".

Como funciona de verdade:
- Serviço/produto cadastrado tem campo `points` (quantos pontos vale o atendimento)
- Cliente acumula pontos automaticamente por: atendimento, indicação, avaliação Google, pontualidade
- Dono cadastra recompensa: "Manicure · 1000 pts" (em `rewards.points_required`)
- Cliente só troca QUANDO atinge os pontos cadastrados (ex: 1000 pts)
- Troca = serviço/produto INTEIRO grátis · NÃO entra como receita, NÃO vira desconto

**Why:** em 25/05/2026 inventei um botão "Trocar pontos" na ComandaDetalhe que
aplicava desconto em R$ = item mais caro da comanda · Eduardo cortou: "o que
voce fez foi sem minha autorização". Pontos = saldo conceitual de fidelização,
não moeda paralela. Misturar com pagamento descaracteriza a mecânica de cliente
voltar pra acumular.

**How to apply:**
- NUNCA criar UI/API que aplique pontos como desconto em R$
- NUNCA adicionar Pontos em SplitPaymentModal (mantém só Pix/Dinheiro/Cartão/Crédito)
- Resgate de recompensa = caminho separado: cliente pede → admin marca atendimento como
  "trocado por X pts" → decrementa saldo · NÃO entra como receita
- Saldo de pontos pode aparecer como VISUALIZAÇÃO (chip no card do cliente) sem ação
- Exibir saldo OK · botão "Trocar X pts por Y" só faz sentido em telas dedicadas
  (perfil do cliente, agendamento novo), NÃO dentro de comanda em fechamento
- Antes de implementar qualquer fluxo de pontos no desktop, validar com Eduardo
  como funciona no mobile/Olímpio · não inventar
