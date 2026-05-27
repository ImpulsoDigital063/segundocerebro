---
name: feedback-metodo-pagamento-tem-regra-de-negocio
description: "Cada método de pagamento (Pontos, Cortesia, Crédito, Cartão) carrega regra de negócio embutida · não basta inserir invoice_payment · precisa validar/abater/marcar conforme a regra · Eduardo apontou após eu deixar \"Pontos\" passar sem saldo"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Quando UI oferece N métodos de pagamento, **cada método tem semântica diferente** e precisa de tratamento específico no backend. Não basta INSERT em `invoice_payments` com o método escolhido.

**Regras por método (cravar antes de implementar):**

| Método | Validar | Abater | Conta como receita? | Comissão? |
|---|---|---|---|---|
| **Pix** | nada | nada | sim | sim |
| **Dinheiro** | nada | nada | sim | sim |
| **Cartão** | tipo (crédito/débito), bandeira, maquininha, taxa | nada | sim (líquido = bruto − taxa) | sim (sobre bruto) |
| **Pontos** | saldo do cliente >= valor | UPDATE customers.total_points | NÃO (resgate de fidelidade) | depende da regra |
| **Cortesia** | autorização do operador | nada | NÃO (bonificação) | NÃO |
| **Crédito do cliente** | sum(customer_credits.amount disponível) >= valor | UPDATE customer_credits.used_in_invoice_id | NÃO (já contou na criação do crédito) | depende |

**Why:** cravado 25/05/2026 após eu entregar SplitPaymentModal aceitando "Pontos R$160" sem checar que o cliente Edu tinha total_points=0. Comanda fechou normalmente, dinheiro fantasma no caixa. Frase do Eduardo: "Verbo quando criar essas features novas, vc tem que pensar em toda logica, não é so sair criando codigo atoa não".

**How to apply:**
- Antes de qualquer feature de pagamento, listar os N métodos disponíveis no sistema e a regra de cada UM
- Pra cada método: 3 perguntas a) precisa validar? b) precisa abater de algum saldo? c) entra como receita real ou não?
- Se a resposta for "ainda não sei", parar e perguntar ANTES de entregar
- Implementar a validação **no backend** (UI pode ajudar com chip desabilitado se saldo=0, mas a barreira real é server-side)
- Mexer em agregadores: receita exclui pontos+cortesia+crédito (vide [[entidade-financeira-nova-varrer-agregadores]])

Linka com [[entidade-financeira-nova-varrer-agregadores]] (cada método novo afeta dashboard de receita) e [[prova-na-fonte-persistencia]] (read-after-write da validação · não confiar só no front).
