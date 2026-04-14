# MPN-On — Tracker de Campanhas

**Atualizado por:** Claude (a partir de relatórios colados pelo Eduardo)
**Pixel ID:** 1457330212732267
**Conta Meta ID:** 719281154512950
**CNPJ:** 64.585.949/0001-83
**Produto:** MPN-On | R$297 à vista / 3x R$105
**Checkout:** https://pay.kiwify.com.br/JNVhxLE
**Cartão de cobrança:** MasterCard ···· 8013 (vence 04/34)

---

## Como usar

Eduardo cola o relatório bruto (Meta Ads, Kiwify, Claude) → Claude extrai os dados → adiciona linha na tabela abaixo + análise do dia.

---

## Dados por Período

| Período | Campanha | Gasto (R$) | Impressões | Alcance | CPM (R$) | Frequência | Purchase | Obs |
|---------|----------|-----------|------------|---------|---------|------------|---------|-----|
| 05/04–10/04/2026 | Tráfego Teste 1 | 55,45 | 359 | 279 | 15,40 | 1,3x | 0 | Público esgotado. Parou de gastar 10/04. 385 eventos brutos no pixel. |

---

## Conjuntos de Anúncios

| Conjunto | Gasto (R$) | Ações | Alcance | CPR (R$) | Status |
|----------|-----------|-------|---------|---------|--------|
| Interesse | 22,78 | 200 | 167 | 22,78 | ✅ Melhor desempenho |
| Broad | 32,67 | 159 | 133 | 32,67 | 🔴 Pior — confirma que segmentação bate Broad |

---

## Criativos

| Criativo | Gasto (R$) | Impressões | Status | Decisão |
|----------|-----------|------------|--------|---------|
| Criativo 3 - Prova (v1) | 2,43 | 12 | ⭐ Melhor CPR | Base para novos testes |
| Criativo 1 - Gancho (v2) | 8,35 | 72 | ✅ 2º melhor | Manter |
| Criativo 2 - Mecanismo | 2,82 | 33 | ⚠️ Monitorar | Aguardar mais dados |
| Criativo 3 - Prova (v2) | 11,61 | 95 | ⚠️ Monitorar | Aguardar mais dados |
| Criativo 1 - Gancho (v1) | 13,12 | 35 | 🔴 Alto CPR | Pausar na segunda |

**Criativos ativos em 12/04:** Criativo 3 - Prova (v1 e v2) + Criativo 2 - Mecanismo (2 versões) = 4 ativos
**Em rascunho:** 3 anúncios

---

## Histórico de Cobranças Meta Ads

**Início das cobranças registradas:** 09/04/2026 às 23:14
**Orçamento diário:** R$40/dia → R$50/dia (Meta recomendou +25% em 12/04 — Score de Oportunidade 85/100)
**Projeção mensal com R$50/dia:** R$1.500/mês
**Saldo em dívida em 12/04:** R$6,97 (pagamento automático 13/04)

| Data | Cobranças do dia | Subtotal (R$) |
|------|-----------------|--------------|
| 09/04/2026 | R$11,51 | **11,51** |
| 10/04/2026 | R$8,53 + R$12,76 + R$16,56 | **37,85** |
| 11/04/2026 | R$28,12 + R$21,85 | **49,97** |
| 12/04/2026 | R$20,74 + R$20,65 | **41,39** |
| **TOTAL** | | **R$140,72** |

---

## Status do Pixel

| Evento | Local | Status | Observação |
|--------|-------|--------|------------|
| PageView | Landing (Next.js/Vercel) | ✅ Ativo | Dispara ao entrar na página |
| ViewContent | Landing | ✅ Ativo | 30s, 60s, 120s + 25/50/75/100% scroll |
| InitiateCheckout | Landing (CTA) | ✅ Ativo | Ao clicar qualquer botão CTA |
| AddToCart | Landing (CTA) | ✅ Ativo | Ao clicar qualquer botão CTA |
| Purchase | Kiwify | ⚠️ Parcial | Dispara ao GERAR Pix, não ao confirmar — corrigir com Utmify |

**Total de eventos:** 385 (últimos 28 dias)

---

## Campanhas

| Campanha | Objetivo | Status | Orçamento/dia | Conjuntos | Período |
|----------|----------|--------|--------------|-----------|---------|
| MPN-On - Tráfego de Vendas - Teste 1 | Tráfego | ✅ Ativa | R$50 | Broad (ativo) + Interesse (ativo) + Lookalike 1-3% (rascunho) | 09/04/2026→ |
| MPN-On - Conversões - Lookalike 1-3% | Conversões | 📝 Rascunho | — | — | Ativar 14/04/2026 |

---

## Análise — 09/04 – 12/04/2026 (análise Claude in Chrome)

**Investimento:** R$140,72 em 4 dias
**Orçamento:** R$40/dia → R$50/dia (Meta recomendou — Oportunidade 85/100)
**Total de anúncios:** 7 (4 ativos + 3 em preparação)
**Fase:** Aprendizado — dados confiáveis esperados após 5-7 dias (em torno de 14-16/04)

**Estrutura atual:**
- Campanha Tráfego ativa: conjuntos Broad + Interesse rodando, Lookalike 1-3% em rascunho
- Campanha Conversões: em rascunho, pronta para ativar em 14/04

**Pontos de atenção:**
- Sem dados de conversão ainda (fase de aprendizado)
- R$50/dia = R$1.500/mês — monitorar retorno antes de aumentar mais
- Lookalike 1-3% rascunho pode ser ativado como conjunto na campanha de Conversões

**ROAS estimado necessário para break-even:**
- Gasto atual: R$140,72
- Produto: R$297
- Break-even: 1 venda a cada R$297 gasto → meta é descer para menos de R$150 por venda

---

## Análise — Semana 05/04 – 10/04/2026

**O que funcionou:**
- Conjunto Interesse (CPR R$22,78) bateu Broad (CPR R$32,67) — segmentação é mais eficiente que público aberto
- Criativo 3 - Prova tem o melhor CPR — formato de prova social funciona melhor que gancho ou mecanismo
- Pixel capturando corretamente até InitiateCheckout

**O que não funcionou:**
- Público esgotado em 1 semana (279 pessoas) — orçamento parou
- Criativo 1 - Gancho (v1) com CPR alto — pausar
- Purchase não rastreando venda real (só geração de Pix)

**Decisões tomadas:**
- Não criar campanha nova hoje (sábado) — aguardar segunda com dados completos
- Integrar Utmify no fim de semana para Purchase confirmado
- Nova campanha segunda: Conversões + InitiateCheckout + públicos de interesse amplos

---

## Próximas Ações

| Data | Ação | Status |
|------|------|--------|
| 12-13/04/2026 | Integrar Utmify na landing + postback Kiwify | 🔵 Pendente |
| 14/04/2026 | Ativar campanha Conversões - Lookalike 1-3% (já existe em rascunho) | 🔵 Pendente |
| 14/04/2026 | Pausar Criativo 1 - Gancho (v1) — CPR alto | 🔵 Pendente |
| 14-16/04/2026 | Analisar primeiros dados confiáveis (fim da fase de aprendizado) | 🔵 Aguardando |
| 14/04/2026 | Configurar remarketing visitantes sem compra | 🔵 Pendente |
| Após 10 purchases | Trocar evento de conversão: InitiateCheckout → Purchase | 🔵 Aguardando dados |
| Após 100 InitiateCheckout | Escalar Lookalike | 🔵 Aguardando dados |

---

## Histórico de Decisões

| Data | Decisão | Motivo |
|------|---------|--------|
| 11/04/2026 | Ativar Purchase no Kiwify (Pix + boleto) | Pixel só rastreava até InitiateCheckout |
| 11/04/2026 | Não criar campanha nova hoje | Público esgotado, melhor aguardar segunda com estratégia completa |
| 11/04/2026 | Integrar Utmify no fim de semana | Purchase Kiwify dispara ao gerar Pix, não ao confirmar pagamento |
| 11/04/2026 | Descartar Lookalike UrbanFeet | Público comprador de tênis ≠ público de curso digital |
| 11/04/2026 | Usar InitiateCheckout como evento de conversão na nova campanha | Acumula dados mais rápido que Purchase do zero |
| 12/04/2026 | Aceitar aumento de orçamento R$40 → R$50/dia | Score de Oportunidade 85/100 — Meta sinalizou potencial |
| 12/04/2026 | Não aumentar além de R$50/dia por ora | Aguardar dados de ROAS antes de escalar mais |
