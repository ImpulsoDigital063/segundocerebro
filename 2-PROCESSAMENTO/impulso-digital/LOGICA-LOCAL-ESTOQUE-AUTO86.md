# Lógica do servidor local — Estoque / Auto-86 / PINs (port-ready)

> Extraído do Postgres do Medellín (25/06). É a regra densa que sai do banco-na-nuvem e vai pro **servidor local (Node) do LAN-hub**. Companheiro do [[SPEC-COMANDAPRO-LOCAL-FIRST]].
> ⚠️ No SQLite/Node, as TRIGGERS do Postgres viram **chamadas explícitas no service layer** (SQLite não tem o mesmo modelo de trigger). Mesma lógica, só muda onde roda.

## Modelo de estoque (`stock_items`)
- `type`: `'dose'` | `'unidade'`
- `qty`: garrafas (se dose) ou unidades
- `open_doses`: doses já abertas de uma garrafa
- `doses_per_bottle`: doses por garrafa

## consume(id, qty, kind) — BAIXA (roda ao entrar `order_item`)
- `garrafa`|`unidade` → `qty = max(0, qty - p_qty)`
- `dose` → enquanto restar: tira de `open_doses`; se zerou, **abre garrafa** (`qty--`, `open_doses = doses_per_bottle - 1`)
- registra `stock_movement('venda')`

## restore(id, qty, kind) — ESTORNO (roda no cancel)
- `garrafa`|`unidade` → `qty += p_qty`
- `dose` → `open_doses += p_qty` (doses voltam pra garrafa aberta)
- registra `stock_movement('estorno')`

## product_can_make(name) → bool — CORAÇÃO DO AUTO-86
- pra cada ingrediente da ficha (`product_recipes`): `avail = (kind=='dose' ? qty*doses_per_bottle + open_doses : qty)`; se `avail < need` → **false**
- sem ficha técnica OU todos suficientes → **true**

## recompute_availability(name)
- `available = (NOT manual_unavailable) AND product_can_make(name)`

## set_product_manual(id, manual, by)
- `manual_unavailable = manual`; `unavailable_at/by = manual ? now/by : null`; `available = (NOT manual) AND product_can_make(name)`

## Gatilhos (viram chamadas explícitas no service local)
1. **Ao inserir `order_item`** (baixa automática): acha `stock_item` por nome (lower). Se achou → `consume` (dose: `garrafa` se `size_label='garrafa'`, senão `dose`; senão `unidade`). Se NÃO achou direto → pra cada item da ficha técnica: `consume(stock_item, recipe.qty * order.qty, recipe.kind)`.
2. **Ao mudar `qty`/`open_doses` de um `stock_item`**: `recompute_availability` de TODO produto cuja ficha usa esse `stock_item` (distinct `product_name` em `product_recipes`).

## cancel_order(id)
- só se `status='pendente'` (cozinha não começou — senão não estorna). Pra cada item: `restore` (mesmo match nome/ficha do consume). Deleta `order_items` + `order`. Retorna se cancelou.

## PINs (simples)
- `verify_staff_pin(id, pin)` = existe `staff` com id, pin, `active`
- `verify_station_pin(station, pin)` = `settings.{cozinha_pin|bar_pin} == pin`
- `station_pin_set(station)` = `settings.{cozinha_pin|bar_pin}` não-nulo/vazio

## No port pro local — notas
- As 2 triggers viram chamadas no service do servidor local, nos caminhos: **criar pedido** (consume), **cancelar** (restore), **ajustar estoque/servir dose/abrir garrafa** (recompute).
- **PIN hoje é texto plano** no banco → oportunidade de **hashear** no port (melhoria de segurança de graça).
- Tudo isso é lógica pura (sem dependência de Postgres) → traduz direto pra JS sobre SQLite.

## Estado
- 25/06: 6 RPCs + 3 helpers (consume/restore/product_can_make) + 2 triggers extraídos e documentados port-ready. **A parte mais difícil do `data.ts` já está mapeada pra o servidor local.**
