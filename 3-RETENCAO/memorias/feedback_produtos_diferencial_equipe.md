---
name: produtos-diferencial-equipe
description: Catálogo de Produtos · Estoque · Venda de Produto · TODOS exclusivos do plano Equipe (R$97/mês) · usar como argumento de venda pra fazer cliente subir de Solo
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Módulo de Produtos (cadastro · estoque · entrada · venda · drawer · histórico · widget de baixa) é **exclusivo do plano Equipe (R$ 97/mês)**, NÃO está disponível no Solo (R$ 67/mês). Vai pra `src/config/pricing.ts` no feature-comparison.

**Why:** decisão estratégica de Eduardo em 22/05/2026 antes da reunião com Izanara (Studio Mood). Ela quer Solo, mas pra justificar o salto pra Equipe usamos o módulo Produtos como diferencial — ela tem 85 SKUs no Kyte FREE, precisa de controle de estoque, ofereceu acima do "barato" porque entrega mais valor real pra ela.

**How to apply:**
- Pitch comercial: "Solo cobre só agendamento + clientes + financeiro · Catálogo de Produtos com estoque e venda é exclusivo Equipe"
- Quando cliente que tem catálogo (loja, salão com revenda) demonstrar interesse no Solo, sempre puxar pro Equipe usando esse argumento
- Gate técnico no `/admin/produtos`, `/admin/produtos/entrada`, `/admin/produtos/vender` checando plano do business · se Solo, redirect ou paywall card "Recurso exclusivo Equipe"
- Cuidado: Olímpio (cliente ativo) provavelmente está no Solo · verificar antes de aplicar gate retroativo · pode precisar grandfathering ou aviso prévio
- Palace (Marko · Equipe) já usa produtos · sem impacto pra ele
