---
name: feedback-entidade-financeira-nova-varrer-agregadores
description: "Ao introduzir entidade financeira nova (ex: sales pra produtos), varrer PROATIVAMENTE todos os agregadores existentes que somam receita antes de entregar · senão Eduardo aponta um por um e perde tempo"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Quando introduzir uma entidade financeira nova (sales, payments, refunds, credits, package_sales, etc) ao codebase, fazer varredura ANTES de afirmar entrega:

**12 lugares-padrão que somam receita no AgendaPRO (varredura completa cravada 25/05):**
- `/admin/financeiro/page.tsx` (dashboard · Receita Bruta, Lucro, Ticket Médio)
- `/admin/financeiro/vendas/page.tsx` (lista de vendas · NÃO filtra cortesia · mostra histórico)
- `/admin/financeiro/remuneracoes/page.tsx` (comissão por profissional)
- `/admin/financeiro/fluxo-caixa/page.tsx` (entradas/saídas mensais)
- `/admin/financeiro/analises/page.tsx` (gráficos comparativos mês a mês · ATENÇÃO: passou batido na 1ª varredura)
- `/admin/caixa/page.tsx` (caixa do dia · fechamento)
- `/admin/inicio/page.tsx` (KPIs home)
- `/admin/page.tsx` (timeline · header com Recebido/A receber)
- `/admin/clientes/page.tsx` (totalSpent por cliente · NÃO filtra cortesia/credit · histórico)
- `src/components/admin/desktop/GradeTimeline.tsx` (KPI header da timeline desktop)
- `src/components/admin/TopProfsCard.tsx`, `TopServicesCard.tsx`, `TopClienteCard.tsx`, `TrendReceitaCard.tsx`

**Regra de filtro pra agregar receita REAL (que conta como faturamento novo):**
- `.not('payment_method', 'in', '(courtesy,credit)')` em queries de appointments E sales
- Cortesia = bonificação · Crédito = abate de saldo já contabilizado · NENHUM dos 2 é receita nova

**Padrão de busca obrigatório antes de entregar:**
```
grep -r "from('appointments')" src/app/admin
grep -r "total_price.*reduce\|valorRecebido\|receita" src/app/admin
```

E pra cada hit, perguntar: essa receita também precisa contar a nova entidade?

**Why:** cravado 24/05/2026 após eu entregar Comanda V1 (que criava sales pra produto) sem atualizar nenhum agregador. Eduardo descobriu que a venda não aparecia em Vendas, em Receita do dashboard, e provavelmente em mais 6 lugares. Cada descoberta gerou um round de correção em vez de uma entrega única. Frase do Eduardo: "tem que prestar atenção nessas situações. ta deixando passar coisa obvias".

**How to apply:**
- Ao entregar feature financeira, NUNCA fechar a task sem rodar a varredura nos 8 lugares acima
- Listar pra Eduardo o universo dos agregadores afetados ANTES de codar correção fragmentada
- Quando possível, criar helper compartilhado (ex: `lib/finance-aggregates.ts`) pra centralizar leitura "receita do período" — `appointments.paid + sales.paid` no mesmo lugar — evitar a divergência reincidir
- Vale também pra outras entidades novas com efeito lateral em telas existentes (ex: nova categoria de despesa, novo tipo de comissão, novo método de pagamento)

Linka com [[diagnostico-nivel-certo]] (causa raiz não é "consertar Vendas", é "varrer todos agregadores") e [[prova-na-fonte-persistencia]] (read-after-write não basta · também precisa ler-em-todos-os-lugares-derivados).
