---
name: rejeicao-visual-perguntar-antes
description: "quando Eduardo rejeita visual (\"não ficou bom\" / \"tá poluído\" / \"ta longe\") — PERGUNTAR onde exatamente está errado antes de mover, não inferir"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f82496cc-2dd7-4a6a-854c-cdc88da27db8
---

Quando Eduardo rejeita um resultado visual com termos amplos ("não ficou bom", "tá poluído", "ta longe ainda", "não bate"), **parar de codar e perguntar onde exatamente está o erro** antes de qualquer ajuste. Inferir o que ele quis dizer = loop ruim de iterações superficiais.

**Why:** 14/05/2026 · PDP do Viva Cacheada · Eduardo disse "ta longe ainda viu" depois de uma refatoração · eu inferi (mais espaçamento, fontes maiores, paleta) e fui codando. Ele rejeitou de novo. Repeti o ciclo. Resultado: várias iterações sem destravar nada porque eu nunca cravei **qual o ponto exato** que tava errado. Ele pagou R$550 na Anthropic e não tem tempo pra esse loop.

**How to apply:**
- Ao receber rejeição visual sem detalhamento, **não codar imediatamente** · responder com pergunta diagnóstica
- Perguntar de forma estruturada · ex: "Aponta qual ponto: (a) paleta · (b) tipografia · (c) hierarquia/respiro · (d) sensação geral de amador · (e) outro" — ou pedir print marcado/anotado
- Se ele já mandou print, abrir o print e antes de codar, **listar 3-5 diferenças concretas** que eu vejo e pedir confirmação: "é isso que tá te incomodando, ou tem outro ponto?"
- Resistir o impulso de "deixa eu ajustar espaçamento e fonte" — sem direção exata, é chute
- Vale especialmente quando rejeição vem com referência genérica ("não ficou padrão premium", "não parece loja brasileira") — pedir referência **concreta** [[visual-validar-referencia-antes]]

Relacionado: [[visual-validar-referencia-antes]] · [[uma-secao-por-rodada]]
