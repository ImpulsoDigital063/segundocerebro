# Medellín Bar — Estudo + Plano do Sistema

> Aberto 2026-06-14 · Cliente em negociação · Fork dedicado (padrão Palace) · Mesa + balcão
> Cardápio real estudado: `cardapio-medellin-seed.md`

---

## 1. Contexto do cliente

**Medellín Bar** — bar/petiscaria. Cardápio robusto: ~110 itens em 21 categorias, com peso de bebida (whisky garrafa R$250–300, combos R$360–400, drinks R$20–35, petiscos R$25–120). Ticket alto, muita venda de destilado e combo — onde erro de comanda vira prejuízo de verdade.

**Hoje eles usam:** Cardapiando (`cardapiando.com/medellin-bar`) — **cardápio digital só de visualização**. Sem foto, sem descrição, sem pedido online, sem estoque, sem comanda, sem caixa. É um menu morto: bonito de mostrar, mas não opera nada. A gestão do bar (o que cada mesa consumiu, quanto entrou no caixa, o que tá acabando) é tudo na mão/papel.

**A brecha:** eles já provaram que aceitam ferramenta digital (pagam o Cardapiando). A gente entrega o que o Cardapiando **não faz** — operação de verdade — e ainda engloba o cardápio que eles já têm.

---

## 2. Pitch (ângulo de venda)

O Cardapiando mostra o cardápio. **O nosso sistema faz o bar funcionar.**

- Garrafa de whisky a R$300 e combo a R$400 lançados errado na comanda = dinheiro escorrendo toda noite.
- Dose de destilado sem controle de estoque = não dá pra saber quanto sobrou na garrafa nem quando repor.
- Fim da noite sem fechamento de caixa = não dá pra saber se bateu.

Resolve as 3 e o dono enxerga o ROI na primeira sexta cheia.

---

## 3. As 4 frentes (eixo travado com Eduardo)

### 3.1 Comanda mesa + balcão `[CORE — MVP pra fechar]`
- Abre comanda numa **mesa** (nº) ou no **balcão** (walk-in, sem mesa amarrada).
- Lança item do cardápio (busca rápida + agrupado por categoria, igual seções do Cardapiando).
- Variações (petisco 500g/1kg, dose/garrafa) e composto (combo).
- Fecha conta: total, divisão por pessoa, forma de pagamento.
- Reaproveita a **comanda do Palace/Starteq** — troca "serviço" por "item de cardápio".

### 3.2 Caixa / financeiro `[CORE — MVP pra fechar]`
- Abertura de caixa, sangria, suprimento, fechamento.
- Receita por `paid_at` (regra λ.recebido-por-data-de-pagamento).
- Faturamento do dia, por forma de pagamento.
- Reaproveita modelo **Starteq (caixa+sangria+suprimento)** + financeiro Palace. Quase pronto.

### 3.3 Estoque de bebida/insumo `[Fase 2]`
- Baixa automática na venda (vendeu Heineken longneck → −1 no estoque).
- **Nó crítico:** dose vs garrafa. 1 garrafa = N doses; combo baixa garrafa + mixers (ficha técnica). Sem isso, estoque de destilado nunca bate.
- Alerta de "acabando".
- Reaproveita módulo **Produtos do AgendaPRO**, adaptado pra dose/ficha técnica.

### 3.4 KDS — cozinha/copa `[Fase 2]`
- Pedido de petisco cai numa tela da cozinha: pendente → preparando → pronto.
- Único realmente novo, mas simples (lista + status). Só faz sentido se tiverem cozinha separada — **confirmar na call**.

---

## 4. Modelo de dados (rascunho)

Multi-tenant por `tenant_id` (padrão SaaS canônico). Tabelas centrais:

- `categories` — 21 categorias do cardápio (seed pronto).
- `products` — item do cardápio. Campos: nome, categoria, preço, tipo (`simples` | `dose` | `garrafa` | `composto`), ativo.
- `product_variants` — tamanhos (500g/1kg) e dose/garrafa do mesmo produto.
- `product_recipe` — ficha técnica do composto (combo = garrafa + 4 Red Bull + 3 água de coco) e do "garrafa→dose".
- `tables` — mesas do bar (nº, área). Balcão = comanda sem mesa.
- `tabs` (comandas) — mesa_id nullable, status (aberta/fechada), garçom_id nullable.
- `tab_items` — linhas da comanda (product_variant, qtd, preço no momento, status p/ KDS).
- `payments` — formas, valor, `paid_at`, divisão.
- `cash_sessions` — abertura/fechamento, sangria, suprimento.
- `stock` / `stock_moves` — saldo e movimentos (baixa na venda, entrada na compra).

> Estoque e KDS entram no schema desde já (campos no `tab_items`) mas só ligam na Fase 2.

---

## 5. Os dois fluxos de operação `[PENDENTE confirmar com cliente]`

Eduardo não sabe ainda quem opera. Modelo os dois e ligo o certo depois da call:

- **Garçom multiusuário:** cada garçom tem login, abre/lança a comanda da mesa dele. Precisa controle por garçom (e abre porta pra comissão/gorjeta depois).
- **Caixa central:** uma pessoa no balcão lança tudo. Single-user, mais simples.

O schema cobre os dois (`garcom_id` nullable na comanda). Decisão muda só a UI e o login, não a base.

---

## 6. Fases & corte de entrega

| Fase | Escopo | Objetivo |
|---|---|---|
| **MVP — pra fechar** | Comanda mesa+balcão + Caixa, mobile-first, cardápio real seedado | Demo que faz o dono assinar. O "uau" em 30s. |
| **Fase 2** | Estoque (dose/garrafa/ficha técnica) + KDS | Entregar a gestão completa pós-assinatura. |
| **Fase 3** | Cardápio digital público (substitui o Cardapiando) + pedido na mesa por QR | Tira a mensalidade do Cardapiando e centraliza tudo. |

**Recomendação:** vender a demo com Fase 1 rodando + Fase 2/3 desenhadas e precificadas no plano. Não empilhar os 4 antes de assinar (cliente em negociação = construir o suficiente pra fechar).

---

## 7. Stack

Idêntica ao resto do ecossistema: **Next 16 + Supabase + TS + Tailwind**, fork dedicado novo (igual o Palace nasceu). Mobile-first (garçom/balcão opera no celular). Padrão de painel: `verbo-design/06-PAINEL-SAAS-PADRAO.md`.

---

## 8. Preço (rascunho — não cravar em msg de venda)

Faixa de **fork dedicado premium ~R$3k** (ref. Palace Nail Spa R$2.997). Robustez aqui é maior que o Palace (PDV completo), então R$3k é piso justificável. Modelo entrada 50% + saldo flexível + 1 bônus (λ.pricing 50/50). Recorrência possível (hospedagem/suporte ~R$99/mês) — definir na call.

---

## 9. Pendências pro cliente (call)

1. Garçom multiusuário **ou** caixa central?
2. Quantas mesas? Área de balcão separada?
3. Tem cozinha/copa pra KDS ou sai tudo do mesmo ponto?
4. Como controlam estoque de bebida hoje? (dose de garrafa é o crítico)
5. Formas de pagamento + divide conta por pessoa?
6. Querem manter o Cardapiando ou substituir pelo nosso cardápio digital (Fase 3)?
