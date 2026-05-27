---
name: reference-olimpio-usa-fidelidade
description: Olímpio Barbearia (Palmas/TO) é cliente ativo em prod e USA o sistema de pontuação · cuidado pra não quebrar fluxo legado de Pontos ao implementar opt-in de fidelidade
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Estado em 25/05/2026:** Olímpio Barbearia (business_id legado · 650 appointments com invoice retroativo) usa o sistema de pontos do AgendaPRO no fluxo mobile/recepcao via PaymentMethodModal antigo.

**Implicação:**
- Quando implementar `loyalty_enabled` opt-in (P1+) em `businesses`, BACKFILL precisa marcar Olímpio (e outros clientes ativos) como `loyalty_enabled=true`
- NÃO mexer no PaymentMethodModal antigo (que tem Pontos como opção) · só no SplitPaymentModal novo (Comanda V1 desktop)
- Pra detectar quem já usa pontos no backfill: `WHERE EXISTS (SELECT 1 FROM appointments WHERE business_id=b.id AND payment_method='points')`

**How to apply:** antes de fazer migration que muda comportamento de pontos, conferir lista de businesses com uso real e definir defaults conservadores (preservar comportamento atual pros legados, opt-out só pra novos).

Linka com [[metodo-pagamento-tem-regra-de-negocio]] e [[entidade-financeira-nova-varrer-agregadores]].
