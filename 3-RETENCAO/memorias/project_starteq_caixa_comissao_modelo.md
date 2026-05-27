---
name: starteq-modelo-caixa-comiss-o-cravado
description: 13/05/2026 · regras de fechamento de caixa e apuração de comissão no painel Starteq · 4 entidades novas + 5 regras anti-erro · dor declarada pelo Júnior pós-12/05
metadata: 
  node_type: memory
  type: project
  originSessionId: 0792c7fd-7671-4d19-bfd2-291c5e04c76d
---

## Contexto

Pós-apresentação 12/05, o Júnior cravou uma 6ª dor (além das 5 originais documentadas em [[Starteq Tocantins · lead-5 quente · site Pichau-style + ERP + IA]]): **fechamento de caixa do GestãoClick atual sempre dá erro em comissão**. Lógica confusa, 3 fontes da verdade desencontradas.

## Decisões cravadas com Eduardo (13/05)

1. **Comissão técnico só nasce quando OS é quitada (cliente pagou).** Não no fechamento da OS, não na entrega. Só com pagamento confirmado.
2. **Sem comissão de vendedor.** Venda de produto (balcão ou site) não gera comissão. Só técnico em OS, sobre `service_value` (não sobre peças).
3. **Caixa físico só vê dinheiro.** PIX vai direto pra conta Starteq (concilia com extrato). Cartão entra D+30 (venda hoje ≠ recebimento). Sem carnê próprio / fiado.

## Modelo de dados proposto

4 entidades novas no `admin-mock.ts` (e depois no schema Supabase):

- `Payment` · cada recebimento (pix/dinheiro/cartao), com `forecast_at` pra cartão D+30
- `CashSession` · sessão de caixa diária (abertura, fechamento, conferência)
- `CashMovement` · entrada/sangria/suprimento dentro da sessão
- `Commission` · 1 por OS quitada, status apurada → paga

Ajuste no `ServiceOrder`: adicionar `payment_method`, `payment_status`, `paid_at`.

## 5 regras anti-erro

1. Comissão só nasce em OS com `payment_status = quitada`
2. Pagamento ≠ Recebimento (cartão tem `forecast_at`)
3. CashSession só concilia espécie (PIX e cartão fora)
4. Fechamento com diff ≠ 0 trava com nota obrigatória (sobra/falta), nunca ajusta sozinho
5. Comissão `apurada` no evento de quitação · `paga` só via AccountEntry, com `paid_entry_id` amarrando os dois lados

## Por que isso resolve a dor do Júnior

A confusão atual (no GestãoClick e replicada no nosso `/admin/tecnico` atual em `tecnico/page.tsx:25-26`) é calcular comissão sobre TODAS as OS do técnico, sem filtrar por status de pagamento. Cancela OS, a comissão "A receber" some — sem rastro. O modelo novo amarra cada comissão ao evento real de pagamento, com `paid_entry_id` quando vira despesa paga. Auditável dos dois lados.

## Próximo passo (não cravado ainda)

Implementar no `admin-mock.ts` antes de tocar no Supabase. Eduardo escolhe se prioriza: (a) modelo de dados + página `/admin/caixa` MVP, (b) refatorar `/admin/tecnico` pra usar `Commission`, (c) outra ordem.

## Ver também

- [[Starteq Tocantins · lead-5 quente · site Pichau-style + ERP + IA]] · 5 dores originais
- [[Starteq · entrega white label real (contas próprias)]] · padrão de entrega
- `C:\Users\Usuario\starteq-palmas\src\lib\admin-mock.ts` · onde vai o modelo
- `C:\Users\Usuario\segundo-cerebro\2-PROCESSAMENTO\starteq\04-ARQUITETURA-SISTEMA.md` · arquitetura original (não cobre caixa)
