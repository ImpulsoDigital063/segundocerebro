---
name: reference-salao99-caixa-drilldown
description: 26/05 · Salão99 trata Caixa Avançado como opt-in via chat · default só Fluxo de Caixa agregado · sem sangria/suprimento/fechamento na conta do Marko · doc completo no segundo-cerebro
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Drilldown CIC do Caixa no Salão99 (Palace) entregue 26/05/2026.

**Doc-mãe:** `C:/Users/Usuario/segundo-cerebro/2-PROCESSAMENTO/salao99-drilldown/CAIXA-SALAO99.md`

## Descobertas-chave

1. **Caixa Avançado é opt-in via chat com suporte do Salão99** — desligado
   por padrão. Conta do Marko opera sem caixa formal.
2. **Fluxo de Caixa default cobre 80% dos salões** — agregado read-only
   derivado de Faturas + Despesas + Taxas. Sem abrir/fechar/sangria.
3. **Schema de permissões granulares já existe** mesmo sem Caixa ligado
   (13 checkboxes em Colaboradores → Permissões), prova que o backend
   suporta tudo · só falta flag de ativação por estabelecimento.
4. **Sangria/Suprimento NÃO existem no fluxo default** — workaround é
   lançar **Despesa** com categoria apropriada.
5. **Visões Diária/Semanal/Mensal/Anual via dropdown na mesma tela** (não
   4 telas separadas como o nosso `view=` query param atual).

## Implicação no roadmap AgendaPRO

Já tínhamos planejado adicionar sangria/suprimento/saldo inicial como
prioridade alta no Caixa. Esse drilldown muda a leitura: a maioria dos
salões NÃO usa caixa formal · o que importa é o **Fluxo de Caixa
agregado funcionar bem** (que é o que mais usamos hoje).

Recomendação revisada (a confirmar com Eduardo):
- Caixa formal vira **flag opcional por business** (igual Salão99)
- Foco curto-prazo: cobrir os GAPs do Fluxo de Caixa atual
- Sangria/Suprimento só ligam quando flag de Caixa Avançado tiver ligada
- Decisão de produto: ligamos automaticamente pra premium ou pedimos pelo
  chat/WhatsApp como Salão99?

## Áreas ainda pendentes no drilldown

CIC entregou só 1-3 (parcial). Faltam 4-8 (Suprimento / Fechamento /
Pós-fechamento / Permissões completas / Relação com outras áreas) ·
exigem Caixa Avançado ligado pra mapear de verdade.

Linkado em: [[reference_salao99_padroes_arquiteturais]]
