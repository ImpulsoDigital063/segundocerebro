---
name: starteq-auditoria-painel-admin-plano-de-fric-o
description: 13/05/2026 · auditoria λ.menos-cliques cravada · 12 bottlenecks com file:line · plano A-I priorizado · feito até aqui = caixa + comissões; falta venda balcão + baixa estoque auto
metadata: 
  node_type: memory
  type: project
  originSessionId: 0792c7fd-7671-4d19-bfd2-291c5e04c76d
---

## Status

**Feito (13/05) · plano A-I 100%:**
- ✅ Modelo de dados: `Payment`, `CashSession`, `CashMovement`, `Commission`, `OrderItem`, `OSPart` em `src/lib/admin-mock.ts`
- ✅ `/admin/caixa` MVP (abertura → movimentos → fechamento com diff bloqueante)
- ✅ `/admin/comissoes` (agrega por técnico, botão "Pagar X" cria AccountEntry)
- ✅ `/admin/tecnico` refatorado pra ler `COMMISSIONS` (separa apurada/paga/potencial)
- ✅ A · `/admin/relatorios` usa `COMMISSIONS` table (não mais campo stale)
- ✅ B · `/admin/financeiro` subtítulo limpo + comissões manuais removidas do mock
- ✅ C · Venda balcão no `/admin/caixa` (modal com busca produto + cliente + método pgto + simula Order+Payment+StockMov+CashMov)
- ✅ D · Baixa estoque automática em OS quitada (campo `parts_used` + helper `buildStockMovementsForOS` + render no OS detail)
- ✅ E · `/admin/pedidos/[id]` com ações inline (registrar pgto, marcar enviado/entregue, estornar)
- ✅ F · `/admin/produtos/[sku]` edit + `/admin/produtos/novo` + botões plugados
- ✅ G · Menu lateral em 3 grupos (Diário/Gestão/Configuração) + Caixa+Comissões no bottom nav mobile
- ✅ H · Autocomplete cliente em Nova OS modal (busca CUSTOMERS + toggle "cliente novo")
- ✅ I · NFe em lote (`NFeBatchActions` no topo da seção pendentes)

**Princípio cravado pelo Júnior:** sistema FACILITA · não cria trabalho. Ver [[Starteq · sistema facilita, não cria trabalho]].

**Pronto pra testes manuais.** Build verde, 25 rotas admin dinâmicas. Persistência fica pra fase 2 (Supabase).

## 12 bottlenecks identificados (com file:line)

### Críticos (geram retrabalho diário)

1. **`relatorios/page.tsx:94-98`** · usa `t.total_commission_month` (campo solto) em vez de `COMMISSIONS` table → mostra número diferente do `/admin/comissoes`. Mesmo bug que o Júnior reclamou.
2. **`produtos/page.tsx:35,74`** · botões "Novo produto" e "Editar" sem destino. Não existe `/admin/produtos/[id]`.
3. **Não existe `/admin/pedidos/[id]`** · `admin/page.tsx:133` linka pra rota que não existe. Status de pedido só vê na lista, não muda.
4. **`estoque/page.tsx:31`** · botão "Nova entrada" sem ação + **baixa não-automática quando OS quita**. `parts_value` não gera `StockMovement`. Repete o bug do GestãoClick.
5. **Não existe venda balcão** · `/admin/caixa` aceita `type=venda` mas sem fluxo. Cliente entra, compra pasta térmica em dinheiro, Júnior não tem onde registrar (estoque some).
6. **`financeiro/page.tsx:25`** · subtítulo mente ("DRE · comissões · fluxo de caixa" — comissão e caixa saíram). Comissões manuais em `admin-mock.ts:282-283` duplicam o botão de pagar.

### Secundários (atrito, não bloqueia)

7. **`layout.tsx:16-32`** · menu lateral com 16 itens sem hierarquia. 80% do uso está nos 5-6 primeiros.
8. **`layout.tsx:34-40`** · bottom nav mobile (5 itens) não inclui Caixa nem Comissões. Júnior abre/fecha caixa do celular.
9. **`OSListClient.tsx:327`** · Nova OS digita nome livre → cria duplicidade no CRM. Devia autocomplete cliente existente.
10. **`os/[id]/page.tsx:103-128`** · histórico WhatsApp só leitura, não dá pra responder dali.
11. **`nfe/page.tsx:62-101`** · pendentes sem "Emitir todas". 7 cliques em vez de 1.
12. **`OSListClient.tsx:386-389`** · atribuir técnico abre WhatsApp em nova aba forçado. Devia ser toggle.

## Plano priorizado (impacto/esforço)

| # | Trabalho | Esforço | Impacto |
|---|---|---|---|
| **A** | Fix `relatorios:94` usar `COMMISSIONS` | 10min | Alto |
| **B** | Limpar subtítulo + remover comissões manuais do mock financeiro | 20min | Médio |
| **C** | Fluxo venda balcão no `/admin/caixa` | 2-3h | **Muito alto** |
| **D** | Baixa automática estoque quando OS quita | 1-2h | Alto |
| **E** | `/admin/pedidos/[id]` com ações inline | 2h | Alto |
| **F** | `/admin/produtos/[id]` + plugar botões | 2h | Alto |
| **G** | Reordenar menu + bottom nav mobile com Caixa/Comissões | 30min | Médio |
| **H** | Autocomplete cliente no Nova OS modal | 1h | Médio |
| **I** | Emitir NFe em lote | 1h | Médio |

## Recomendação cravada

Sequência ideal pra Júnior sentir "isso me ajuda" no dia 1: **A + B (30min) → C + D (3-4h) → E + F (4h) → G + H + I (2.5h)**. A+B fecham gaps da refatoração que já fizemos. C+D são o salto qualitativo · sem eles, Júnior duplica trabalho que ele já duplicava no GestãoClick.

## Ver também

- [[Starteq · modelo caixa + comissão cravado]] · regras do modelo
- [[Starteq · sistema facilita, não cria trabalho]] · princípio λ.menos-cliques
- `C:\Users\Usuario\starteq-palmas\src\app\admin\` · onde aplicar
