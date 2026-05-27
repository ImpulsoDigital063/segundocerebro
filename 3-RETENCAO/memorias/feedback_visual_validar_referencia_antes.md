---
name: visual-validar-referencia-antes
description: "antes de codar/iterar visual, cravar referência exata (URL + print + qual elemento copiar pixel a pixel) — sem norte, qualquer ajuste é chute"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f82496cc-2dd7-4a6a-854c-cdc88da27db8
---

Antes de codar ou iterar qualquer ajuste visual significativo, **cravar referência exata** com Eduardo: URL específica + print + qual elemento copiar pixel a pixel. Sem norte cravado, qualquer edição é chute e vai virar loop de refinamento sem fim.

**Why:** 14/05/2026 · projeto Viva Cacheada · iterei 12 versões do PDP em 3 horas porque tratei "GB Nutrition" como referência genérica em vez de abrir lado a lado e comparar pixel a pixel. Cada iteração puxou um detalhe diferente sem cravar o "norte" antes. Eduardo cravou que pagou R$550 na Anthropic e não tem tempo pra eu pedalar refinamento.

**How to apply:**
- **Antes** de tocar em CSS/layout, pedir referência **concreta**: "qual URL específica, qual screenshot, qual elemento dessa página deve ser replicado fielmente?"
- Se Eduardo cita uma referência (ex: "GB Nutrition", "EV Suplementos"), **abrir lado a lado** com meu protótipo via WebFetch ou print comparativo · listar diferenças por bloco antes de qualquer edit
- Em rejeições do tipo "tá feio" / "não ficou bom" / "não bate", **não inferir** o que mudar — ver [[rejeicao-visual-perguntar-antes]]
- Wireframe textual ou ASCII mockup antes de codar layout novo, validar esqueleto, só depois HTML/CSS
- Vale pra qualquer projeto visual (LPs, lojas, PDPs, dashboards) onde Eduardo busca padrão premium específico

Relacionado: [[uma-secao-por-rodada]] · [[rejeicao-visual-perguntar-antes]] · [[filtrar-recomendacoes-de-outros-agentes]]
