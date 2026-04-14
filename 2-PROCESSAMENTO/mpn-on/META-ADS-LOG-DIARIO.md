# MPN-On — Log Diário Meta Ads
**Como usar:** Todo dia Eduardo cola os dados do gerenciador → Claude preenche a linha do dia + atualiza análise.
**Objetivo:** 7 dias de registro = base para decisões de escala, pausa e otimização.

---

## Dados fixos da conta

| Campo | Valor |
|-------|-------|
| Conta Meta ID | 719281154512950 |
| Pixel ID | 1457330212732267 |
| Produto | MPN-On — R$297 / 3x R$105 |
| Cartão | MasterCard ···· 8013 |
| Orçamento diário atual | R$50/dia |
| Projeção mensal | R$1.500/mês |

---

## Tabela de Gasto Diário

| Data | Gasto (R$) | Orçamento/dia | Saldo dívida | Obs |
|------|-----------|--------------|-------------|-----|
| 09/04/2026 | 11,51 | 40,00 | — | Primeiro dia de cobrança |
| 10/04/2026 | 37,85 | 40,00 | — | 3 cobranças no dia |
| 11/04/2026 | 49,97 | 40,00 | — | 2 cobranças, próximo do limite |
| 12/04/2026 | 41,39 | 50,00 | 6,97 | Meta aumentou orçamento +25% |
| 13/04/2026 | — | 50,00 | — | — |
| 14/04/2026 | — | 50,00 | — | Ativar campanha Conversões |
| 15/04/2026 | — | 50,00 | — | — |
| 16/04/2026 | — | 50,00 | — | Fim da fase de aprendizado |
| **TOTAL** | **140,72** | | | |

---

## Tabela de Performance por Dia

| Data | Impressões | Alcance | Cliques | CTR (%) | CPC (R$) | CPM (R$) | InitiateCheckout | Purchase | CPA (R$) |
|------|-----------|---------|---------|---------|---------|---------|-----------------|---------|---------|
| 05–10/04 | 359 (período) | 279 | — | — | — | 15,40 | — | 0 | — |
| 09/04 | — | — | — | — | — | — | — | — | — |
| 10/04 | — | — | — | — | — | — | — | — | — |
| 11/04 | — | — | — | — | — | — | — | — | — |
| 12/04 | — | — | — | — | — | — | — | — | — |
| 13/04 | — | — | — | — | — | — | — | — | — |
| 14/04 | — | — | — | — | — | — | — | — | — |
| 15/04 | — | — | — | — | — | — | — | — | — |
| 16/04 | — | — | — | — | — | — | — | — | — |

> Dados diários individuais a coletar a partir de segunda (14/04) — gerenciador → relatórios → período personalizado (últimas 24h).
> Dado agregado 05–10/04 já registrado acima. 385 eventos no pixel nesse período, 0 purchases confirmados.

---

## Tabela de Criativos (acumulado)

| Criativo | Gasto (R$) | Impressões | Cliques | CTR (%) | CPC (R$) | Status | Decisão |
|----------|-----------|---------|---------|---------|---------|--------|---------|
| Criativo 3 - Prova (v1) | 2,43 | 12 | — | — | — | ⭐ Melhor CPR | Base para novos testes |
| Criativo 3 - Prova (v2) | 11,61 | 95 | — | — | — | ⚠️ Monitorar | Aguardar dados |
| Criativo 2 - Mecanismo (v1) | 2,82 | 33 | — | — | — | ⚠️ Monitorar | Aguardar dados |
| Criativo 2 - Mecanismo (v2) | — | — | — | — | — | ✅ Ativo | Coletar dados |
| Criativo 1 - Gancho (v1) | 13,12 | 35 | — | — | — | 🔴 Alto CPR | Pausar 14/04 |
| Criativo 1 - Gancho (v2) | 8,35 | 72 | — | — | — | ✅ 2º melhor | Manter |

---

## Tabela de Conjuntos de Anúncios (acumulado)

| Conjunto | Gasto (R$) | Alcance | Ações | CPR (R$) | Status | Decisão |
|----------|-----------|---------|-------|---------|--------|---------|
| Interesse | 22,78 | 167 | 200 | 22,78 | ✅ Melhor | Manter |
| Broad | 32,67 | 133 | 159 | 32,67 | 🔴 Pior | Monitorar — pausar se CPR não cair |
| Lookalike 1-3% | — | — | — | — | 📝 Rascunho | Ativar 14/04 na campanha Conversões |

---

## O que está funcionando

| Data | Observação |
|------|-----------|
| 05–10/04 | Criativo 3 - Prova tem melhor CPR — prova social > gancho ou mecanismo |
| 05–10/04 | Conjunto Interesse (R$22,78 CPR) bate Broad (R$32,67 CPR) — segmentação > público aberto |
| 12/04 | Score de Oportunidade 85/100 — Meta sinalizou potencial nas campanhas |

---

## O que não está funcionando

| Data | Observação |
|------|-----------|
| 05–10/04 | Criativo 1 - Gancho (v1): CPR alto, pausar |
| 05–10/04 | Broad com CPR 43% pior que Interesse |
| 12/04 | Purchase no pixel ainda parcial (dispara ao gerar Pix, não ao confirmar) — Utmify pendente |
| 12/04 | Fase de aprendizado: sem dados de conversão real ainda |

---

## Decisões tomadas

| Data | Decisão | Motivo |
|------|---------|--------|
| 11/04 | Ativar Purchase no Kiwify (Pix + boleto) | Pixel só rastreava até InitiateCheckout |
| 11/04 | Usar InitiateCheckout como evento de conversão | Acumula dados mais rápido que Purchase do zero |
| 11/04 | Descartar Lookalike UrbanFeet | Público de calçados ≠ público de curso digital |
| 12/04 | Aceitar aumento R$40 → R$50/dia | Score de Oportunidade 85/100 |
| 12/04 | Não aumentar além de R$50/dia por ora | Aguardar ROAS positivo confirmado |
| 14/04 | Pausar Criativo 1 - Gancho (v1) | CPR alto, sem melhora |
| 14/04 | Ativar campanha Conversões - Lookalike 1-3% | Rascunho pronto |

---

## Metas de performance

| Métrica | Meta | Status |
|---------|------|--------|
| CPA (custo por venda) | < R$150 | Aguardando dados |
| ROAS | ≥ 2x (R$2 de receita por R$1 gasto) | Aguardando dados |
| CTR | > 1,5% | Aguardando dados |
| Taxa de conclusão VSL | > 40% | Aguardando dados |
| Conversão visitante → venda | 3–5% | Aguardando dados |

---

## Como preencher o log diário

Eduardo cola no chat:
1. Gasto do dia (do extrato ou gerenciador)
2. Impressões, cliques, CTR, CPC (Gerenciador → últimas 24h)
3. Número de InitiateCheckout e Purchase do dia (Eventos do Pixel)
4. Qualquer criativo pausado ou ativado

Claude preenche as tabelas e atualiza as seções "O que está funcionando / O que não está funcionando".

Após 7 dias de dados: exportar tabelas para Google Sheets para análise visual.
