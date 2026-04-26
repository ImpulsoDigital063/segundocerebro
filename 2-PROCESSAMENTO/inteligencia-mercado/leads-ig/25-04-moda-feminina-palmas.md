# Prospecção IG-only — Moda Feminina Palmas-TO (25/04/2026)

**Pesquisa:** Claude in Chrome (Anthropic Extension) — Prompt #2 v2 com Opção 1 (clique em posts pra capturar handle real)
**Hashtags varridas:** #modafemininapalmas, #modafestapalmas, #brechopalmas
**Resultado:** 11 perfis verificados, 1 descartado (loja fechada)

---

## 🏆 Ranking de priorização (TOP 5 de disparo)

| # | Perfil | Fit | Urgência | Por quê |
|---|---|---|---|---|
| 🥇 | **@donadulce.brecho** | **10/10** | ALTA | 13.7k seg + 14% engajamento (anomalia +) + frete Brasil já operando via DM + 5 categorias = catálogo pronto |
| 🥈 | **@carpediempmw** | 9/10 | ALTA | Story "Shop On-line" sinaliza INTENÇÃO de e-commerce + 2.7% engajamento alto + dona ativa visível |
| 🥉 | @maryfashionpalmas | 8/10 | MÉDIA | Já no banco (id=1087). 2.140 posts = catálogo pesado |
| 4º | @lorenn_store_ | 8/10 | MÉDIA | Parcelamento manual no DM ("3x cartão via direct") = dor MUITO clara |
| 5º | @deboraclosetpmw | 8/10 | MÉDIA | "Enviamos para todo Brasil" + preços/parcelas em caption = processo maduro |

## 💡 Insights estratégicos do CIC

### 1. **#modafestapalmas é monopolizada por @rosedias3 (Rose & Anne)**
- Praticamente uma marca dominante única no nicho de festa em Palmas
- **Implicação:** se Eduardo encontrar costureira local subindo nesse nicho, **concorrência praticamente unitária** = LP/Shopify nicho festas é oceano azul

### 2. **@katiapacheco.estilo é lead estratégico (não tático)**
- Influencer 22k seguidores, 50+ inspirando mulheres
- Tá ABRINDO "Renove Boutique" — brechó de luxo
- **Quando inaugurar formal, virar Shopify é o passo natural**
- Eduardo entra no dia 1 com pacote pronto

### 3. **@xanimbrecho fechou — pode ter aberto outro nome**
- Bio explícita: "LOJA FECHADA. OBRIGADA POR TUDO"
- Tinha endereço (106 Norte Alameda 8 Lote 26), 5.289 seg, 585 posts — operação organizada
- **Vale Eduardo bisbilhotar nos comentários da dona** — se reabriu com novo nome, lead quente

---

## ⚠️ Pontos pra validar manualmente

| Lead | Problema |
|---|---|
| @lorenn_store_ | Telefone "(63) 92689-659" = só 8 dígitos (faltando 1). Validar antes de mandar |
| @donadulce.brecho | Telefone "(63) 92112-019" = só 8 dígitos. Validar |
| @_paulanunesoficial | EM HIATO — esperar voltar |
| @katiapacheco.estilo | Esperar inauguração formal do "Renove Boutique" |

---

## 📋 JSON original do Claude in Chrome

(Inteiro preservado pra referência. Inseridos no banco via `insert-lead-manual.ts`.)

[JSON completo inline a seguir — 11 perfis com fórmula, breakdown e ranking]

```json
{
  "fit_shopify_score_formula": "fit_shopify_score (1-10) = ticket_alto (0-3) + vende_pra_fora_palmas (0-2) + foto_importa_no_nicho (0-2) + seguidores_sweetspot_1k_a_30k (0-2) + dor_DM_visivel (0-1)",
  "metodologia": "3 hashtags varridas, 11 posts clicados read-only pra capturar handle real, 11 perfis abertos com 7 filtros duros aplicados",
  "perfis_aprovados_no_filtro": 11,
  "perfis_descartados": ["@xanimbrecho — loja fechada"],
  "insight_estrategico": "Hashtag #modafestapalmas dominada por @rosedias3 — concorrência baixa pra entrante novo nesse nicho"
}
```

---

## 🎯 Próximos passos

1. **Inserir 10 leads novos no banco** (Mary Fashion já tá lá) via `npm run insert:lead`
2. **Rodar `disparo:20-perfeitos`** pra ver se algum entra no top atual
3. **Próximo prompt CIC:** #2.5 v2 (multi-nicho denso) — suplementos + camisa de time + joias + perfumaria + brechó + outros
4. **Bisbilhotar @xanimbrecho** comentários pra ver se a dona abriu outro projeto
5. **Monitorar @katiapacheco.estilo** — quando inaugurar Renove Boutique, atacar
