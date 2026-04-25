# RadarPRO — Roadmap de 9 níveis pra deixar o sistema MATADOR

**Criado:** 24/04/2026
**Status:** estado atual = arsenal psicológico aplicado (15 frameworks dos 5 livros). Próximo grande salto = enrichment automático na chegada do lead.

---

## 🥇 MAIOR IMPACTO, MENOR ESFORÇO (atacar primeiro — 1-2 sessões)

### 1. Enrichment automático na chegada
**O que é:** quando lead cai no `/tally`, bot lê automaticamente:
- 5 últimos posts do Instagram (texto + tipo: reels/foto/carrossel + engajamento médio)
- Último review Google (se tiver) — cumprimento ou dor latente
- Site atual (se tiver) — análise visual + velocidade
- Bio + descrição

IA usa esses dados pra abrir conversa com gancho FRESQUÍSSIMO ("vi teu story de ontem sobre X") em vez de mensagem genérica.

**Resultado esperado:** taxa de resposta sobe 30-50%. Cada lead chega com dossiê de 1 página antes da primeira mensagem.

**Implementação:**
- Job assíncrono dispara quando webhook Tally cria lead
- Playwright (já tem no RadarPRO) faz scraping leve do IG
- Gemini analisa os 5 posts e gera "gancho fresco"
- Salva em coluna nova `lead_dossie` (TEXT JSON)
- IA do Script de Venda usa esse JSON na geração

**Esforço:** 4-6h de código.

---

### 2. Detecção de arquétipo do lead
**O que é:** IA classifica lead em 5-6 perfis baseado nas respostas do Diagnóstico + dossiê:
- **Sufocado** — operando 100% manual, perdendo dinheiro pelo caos (ex: barbeiro respondendo WhatsApp de madrugada)
- **Curioso-Passivo** — lê tudo, demora pra decidir, precisa de prova
- **Cético** — "já tentei isso antes", precisa de quebra de objeção forte
- **Decidido** — quer fechar rápido, não quer pitch longo
- **Perdido** — não sabe o que precisa, precisa de orientação primeiro
- **Negociador** — quer desconto, precisa de frame Award

Cada arquétipo recebe **playbook próprio** — frame setting diferente, abertura diferente, ritmo diferente.

**Resultado esperado:** pitch deixa de ser genérico. Lead se sente entendido = baixa guarda = compra.

**Implementação:**
- IA classifica arquétipo na primeira passagem (1 chamada)
- Salva em coluna `arquetipo` (enum)
- Geradores Script de Venda + Plano Negócio recebem arquetipo como input
- SYSTEM_PROMPT ganha 6 sub-roteiros por arquétipo

**Esforço:** 3-4h de código + ajustes nos system prompts.

---

### 3. Aplicar $100M Offers no SYSTEM_PROMPT
**Status:** ✅ FEITO em 24/04/2026 (junto com os outros 4 livros).

Equação de Valor + Grand Slam Offer + Bônus stack categorizado + Naming + Garantias estão integrados como módulo "Arsenal Psicológico" no SYSTEM_PROMPT.

**Próxima iteração:** quando tiver 3-5 clientes fechados, recalibrar com base em "qual ângulo do Grand Slam mais converteu" (Sonho? Probabilidade? Garantia?).

---

## 🥈 MÉDIO IMPACTO, MÉDIO ESFORÇO (próximas semanas)

### 4. Loop de feedback 1-clique
**O que é:** botão no card do lead no `/tally`:
- 🟢 "Essa msg fechou"
- 🔴 "Essa msg morreu"
- 🟡 "Sem resposta"

Sistema acumula 50-100 dados → IA retreina prompt baseado em padrões dos vencedores vs perdedores.

**Resultado esperado:** SYSTEM_PROMPT auto-evolui sem Eduardo precisar editar manualmente.

**Implementação:**
- Schema: tabela `mensagens_resultado` com `lead_id`, `mensagem`, `resultado` (fechou/morreu/sem_resposta)
- UI: 3 botões no card
- Análise: action de IA `analisarPadroesResultado` agrupa mensagens por categoria de lead e ranqueia

**Esforço:** 5-6h de código.

---

### 5. A/B test com tracking real
**O que é:** as 3 variantes de diagnóstico (A/B/C) que já existem ganham métrica:
- "Variante A: 23% de resposta, 8% de fechamento"
- "Variante B: 31% de resposta, 14% de fechamento"
- "Variante C: 18% de resposta, 6% de fechamento"

Após 30 disparos por variante, sistema **pesa as variantes** automaticamente — mais respostas usam B (vencedora).

**Resultado esperado:** taxa de fechamento sobe gradualmente sem intervenção manual.

**Implementação:**
- Schema: já tem `variante_diagnostico` no banco
- Action: `relatorioVariantes` agrupa leads por variante e calcula CR
- UI: dashboard simples no `/tally` mostrando ranking
- Algoritmo: rotação ponderada (mais peso pra variante vencedora, mas mantém amostra das outras)

**Esforço:** 4-5h.

---

### 6. Aplicar Never Split the Difference (módulos Voss)
**Status:** ✅ FEITO em 24/04/2026 (junto com $100M Offers).

Tactical Empathy + Mirroring + Labeling + Calibrated Questions + Accusation Audit + Black Swan estão no SYSTEM_PROMPT.

**Próxima iteração:** quando primeiro lead disser "vou pensar" e Eduardo testar a resposta gerada, ajustar tom se necessário.

---

## 🥉 ALTO IMPACTO, ALTO ESFORÇO (longo prazo — quando tiver 5+ clientes)

### 7. Áudio personalizado por IA com voz clonada do Eduardo
**O que é:** ElevenLabs clona voz do Eduardo (10 min de áudio dele falando = perfil pronto). IA gera mensagem de áudio personalizada por lead — chega no WhatsApp do lead um áudio de 30s "Oi Maria, gravei rapidinho aqui...", som de Eduardo.

**Resultado esperado:** taxa de resposta dispara. Áudio mata IA escrita com facilidade — humanização brutal.

**Por que esperar:** custo (ElevenLabs ~$22/mês), risco ético (lead pode descobrir que é áudio gerado), e precisa primeiro VALIDAR que sistema atual fecha.

**Implementação:**
- Conta ElevenLabs Pro
- Treinar voz de Eduardo (gravar 10 min limpo)
- Endpoint que gera áudio: `POST /api/tally/gerar-audio` (recebe texto, retorna .mp3)
- Integração WhatsApp Business (Baileys) pra envio de áudio
- Marca d'água ética: SEMPRE mencionar que é IA quando lead perguntar

**Esforço:** 1-2 semanas. Considerar quando tiver 5+ clientes pagantes.

---

### 8. Análise de conversas inteiras (não mensagem isolada)
**O que é:** IA lê toda a conversa do lead (10-30 mensagens trocadas) e detecta:
- Em qual mensagem o lead "esquentou" mais (curtiu)
- Onde a conversa "esfriou" (lead começou a responder seco)
- Padrões em conversas que fecharam vs morreram

Sugere ajustes no SYSTEM_PROMPT baseado em dados reais.

**Implementação:**
- Logs de WhatsApp já existem em `mensagens_whatsapp`
- Action `analisarConversaInteira` agrupa mensagens por lead, analisa fluxo
- Output: relatório semanal "Top 3 padrões em conversas que fecharam"

**Esforço:** 1 semana.

---

### 9. Predição de fechamento em tempo real
**O que é:** score 0-100 por lead baseado em sinais:
- Velocidade de resposta (rápida = quente)
- Tamanho das mensagens (curtas = morno, médias = engajado)
- Uso de emojis/reações (engajado)
- Perguntas específicas sobre preço/prazo (decidido)
- Silêncio prolongado (esfriando)

Eduardo abre o painel e vê: "Maria 85% — fechar hoje. João 32% — não vale o tempo agora."

**Resultado esperado:** Eduardo prioriza tempo onde dá mais resultado.

**Implementação:**
- Modelo de scoring com regras + IA híbrida
- Schema: `score_fechamento` atualizado em cada interação
- UI: badge no card do lead com score visual

**Esforço:** 1-2 semanas. Faz sentido quando tiver 50+ leads ativos no funil.

---

# Status atual (24/04/2026)

| Nível | Item | Status |
|---|---|---|
| 1 | Enrichment automático | ⏳ Pendente |
| 2 | Detecção de arquétipo | ⏳ Pendente |
| 3 | $100M Offers no SYSTEM_PROMPT | ✅ Feito |
| 4 | Loop de feedback 1-clique | ⏳ Pendente |
| 5 | A/B test com tracking | ⏳ Pendente |
| 6 | Never Split the Difference | ✅ Feito |
| 7 | Áudio com voz clonada | ⏳ Aguardar 5+ clientes |
| 8 | Análise de conversas inteiras | ⏳ Aguardar volume |
| 9 | Predição de fechamento | ⏳ Aguardar 50+ leads ativos |

**Bônus aplicados em 24/04 (não estavam no roadmap original):**
- ✅ Influence (Cialdini) — 6 gatilhos integrados
- ✅ Pitch Anything (Klaff) — Frame Setting + 6 frames
- ✅ Pense e Enriqueça (Hill) — mentalidade de desejo ardente

---

# Próxima ação recomendada

Quando Eduardo voltar pra atacar o sistema:

1. **PRIMEIRO:** abrir prospecção real e pegar 5-10 leads (com sistema atual já matador)
2. **DEPOIS:** atacar Nível 1 (enrichment) — maior ROI imediato
3. **EM PARALELO:** atacar Nível 2 (detecção de arquétipo)
4. **DEPOIS DE 3 CLIENTES:** atacar Nível 4 (loop de feedback) — tem dado real pra retroalimentar
5. **DEPOIS DE 5 CLIENTES:** Nível 7 (áudio voz clonada) — feature de matar quando tiver tração

**Filtro pra cada decisão:** "isso aqui ataca receita real nos próximos 15 dias?"
