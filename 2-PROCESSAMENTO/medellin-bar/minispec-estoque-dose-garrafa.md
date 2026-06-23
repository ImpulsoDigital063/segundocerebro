# Mini-spec — Estoque por dose / rendimento de garrafa (o diferencial)

> O que NENHUM concorrente resolve bem (confirmado no benchmark). Cavalo de batalha do pitch.
> Pra você dominar na call. Não é código pronto — é o desenho do que vai ser construído na fase 2.

## A dor (real, das reviews de donos de bar)
Bar de bebida pesada não sabe quanto sobrou na garrafa aberta. Vende dose, vende garrafa, faz drink que usa 50ml — e o estoque "no sistema" nunca bate com a prateleira. Os concorrentes empurram pra "ficha técnica" genérica, trabalhosa, que não trata garrafa aberta nem perda.

## O conceito em 1 frase
Cada garrafa tem um **rendimento** (ex: 750ml ÷ 50ml = 15 doses). O sistema controla o saldo **em doses da garrafa aberta**, baixa automático a cada dose/drink vendido na comanda, e acusa **perda/quebra**.

## Modelo de dados (resumo)
- `products` ganha campos de bebida: `volume_ml` (ex 750), `dose_ml` (ex 50) → `doses_por_garrafa` = volume÷dose.
- `stock_bottles` — garrafa física: produto, status (`lacrada` | `aberta` | `vazia`), `doses_restantes`, aberta_em.
- `recipes` (ficha técnica) — pro drink: liga "Caipiroska" → 50ml de vodka + limão + açúcar. Vender o drink baixa a dose do destilado certo.
- `stock_moves` — todo movimento: venda (−1 dose), abertura de garrafa (lacrada→aberta), entrada (compra), **perda** (quebra/vazou/serviu a mais).

## Os 4 fluxos
1. **Vender dose** → baixa 1 dose da garrafa aberta daquele produto. Se não tem aberta, abre uma lacrada (move estoque).
2. **Vender garrafa inteira** → baixa 1 garrafa lacrada.
3. **Vender drink** → via ficha técnica, baixa os ml de cada insumo (o destilado vira fração de dose).
4. **Registrar perda** → move tipo `perda`, separado da venda (pra relatório de quebra real).

## O que o sistema mostra (a tela que vende — já tem teaser no protótipo)
- Doses restantes na garrafa aberta (ex 9/15) com barra visual.
- Custo por dose e **valor em estoque** (doses × preço).
- Alerta "Acabando" quando ≤ X doses.
- Relatório de **perda/quebra** do dia (o que vazou ou foi servido a mais = dinheiro escorrendo).

## Por que ganha a venda
- É a dor nº1 de quem tem bar de destilado e **ninguém vende como destaque**.
- Mostra que a Impulso entende a operação de bar melhor que Saipos/Goomer.
- Ancora o "fork dedicado": isso é feito pro bar dele, não um módulo genérico.

## Status
Teaser visual interativo já está no protótipo (`/estoque`) — serve dose, vê a garrafa esvaziar, custo e alerta. Lógica completa (baixa automática pela comanda + ficha técnica) = fase 2, pós-fechamento.
