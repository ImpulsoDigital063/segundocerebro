# RadarPRO — Atualização 24/04/2026 (sexta noite)

**Resumo executivo:** o RadarPRO ganhou hoje (a) um funil completo Tally pro Impulso Digital (Diagnóstico pré-venda + Briefing pós-venda), (b) gerador de Plano de Negócio & Marketing por IA (14 seções), (c) gerador de Script de Venda por IA (8 seções), (d) seletor multi-modelo (Claude/Gemini/OpenAI), (e) dashboard `/tally` separado pro funil Impulso, e (f) reescrita cirúrgica do SYSTEM_PROMPT global com tudo que foi refinado.

---

## 1. Funil Tally — completo no /tally

### Formulários publicados
- **Diagnóstico** (pré-venda, público): https://tally.so/r/A76J90 — 8 perguntas, embedado na LP Impulso
- **Briefing** (pós-venda, privado): https://tally.so/r/yP0Dyp — 19 perguntas, enviado manual após pagamento

### Webhook integrado
- `POST /api/webhooks/tally` recebe submissões automaticamente
- Cria/atualiza lead na base do RadarPRO
- Match por telefone (normalização BR)
- Status atualizado automaticamente: `respondeu` (diagnóstico) → `fechado` + `fechou=1` (briefing)
- Scoring automático: `termometro = quente`, `servico_recomendado` inferido pelo problema declarado

### Painel /tally — dashboard completo
URL: **https://radarpro-inky.vercel.app/tally**

4 abas no funil:
1. 📥 **Novos do diagnóstico** — leads que preencheram, ainda não fecharam
2. 📋 **Briefing pendente** — fecharam, aguardando preencher briefing pós-venda
3. ✅ **Briefing respondido** — preencheram briefing, aguardando pagamento
4. 🚀 **Em projeto** — pagamento confirmado, em construção

Cada lead tem botões pra:
- Ver respostas completas (modal)
- Abrir WhatsApp direto
- Copiar mensagem pronta (primeiro contato / envio briefing)
- Marcar fechou / pagamento
- **Gerar Script de Venda IA** (na aba "Novos do diagnóstico")
- **Gerar Plano de Negócio IA** (nas abas "Briefing respondido" e "Em projeto")

---

## 2. Geradores de IA cirúrgicos

### Script de Venda (pré-venda) — 8 seções
- POST `/api/tally/gerar-script-venda`
- Para leads que preencheram Diagnóstico mas ainda não fecharam
- 8 seções: análise do lead, primeira mensagem WhatsApp, diagnóstico verbal, pitch, ancoragem de preço, 3 objeções com resposta, fechamento, follow-up D+1/3/7
- ~5-7k tokens output, 30-45s de geração

### Plano de Negócio & Marketing (pós-venda) — 14 seções
- POST `/api/tally/gerar-plano`
- Para clientes que pagaram 50% e preencheram Briefing
- 14 seções (estrutura validada com GB Nutrition): Visão Geral, Diagnóstico, Problema, Proposta, Público, Mercado, Operacional, Marketing, Cronograma, Catálogo/Oferta, Promoções, Ferramentas, Metas, Checklist
- ~15-20k tokens output, 60-90s de geração

### Multi-modelo
Dropdown na UI escolhe qual IA usar — só aparece o modelo que tem API key setada:
- **Claude Sonnet 4.6** (`ANTHROPIC_API_KEY`) — melhor qualidade, R$0,80/plano. Usa streaming + prompt caching.
- **Gemini Flash** (`GEMINI_API_KEY`) — grátis até 1k req/dia, qualidade OK. Plano usa chunking 2x (limite 8k output).
- **GPT-4o-mini** (`OPENAI_API_KEY`) — opcional, ~R$0,80/plano. Só aparece se tiver crédito OpenAI.

Eduardo pode trocar a qualquer momento sem mexer no código — só adiciona/remove env var no Vercel.

---

## 3. SYSTEM_PROMPT enriquecido (commit 3e192b4)

### Adições
1. **Seção "Autoridade do Eduardo"** (logo no início) — UrbanFeet 1.600+ pares, 60+ negócios, AgendaPRO próprio, MPN-On, IA todo dia, Palmas 6+ anos. Mapeamento "quando usar qual prova".
2. **Seção "Funil Tally"** — pipeline completo de 10 passos, regras de uso, "lead que já preencheu Diagnóstico, IA usa o que ele declarou".
3. **Seção "Pagamento"** — Mercado Pago link único, 50/50 padrão, 5 opções (Pix/Cartão/Boleto/Caixa).
4. **"FAQ matador" — 7 objeções de fechamento com resposta exata** (banco pra IA puxar quando lead quente trava).

### Correções importantes
- **Hospedagem LP**: era "vitalícia inclusa" → agora "PROMO vitalícia GRÁTIS pra quem entra hoje, R$49,90/mês pra quem entrar depois — gancho de urgência REAL"
- **Shopify**: era "R$150/mês plano Basic" (errado) → agora "**US$19/mês** Shopify Starter, Yampi/Melhor Envio sem mensalidade"
- **AgendaPRO**: restaurada distinção Solo (R$147+R$47) vs Equipe (R$197+R$67) conforme política oficial 20/04
- **UrbanFeet**: número principal mudou de "R$37.705,24 em 90d" → "1.600+ pares vendidos pela internet em 3 anos" (alinha com nova narrativa LP)
- **Combo**: setup grátis é do AgendaPRO **Solo (R$147)**, não Equipe
- **Domínio**: explicitado que fica no nome do cliente (R$40-100/ano), não é bônus da Impulso

### Tom novo (alinhado com a copy refinada da LP)
Bordões que entraram como ferramenta da IA:
- *"Construo seu site do jeito que construo o meu — porque é o que eu uso todo dia."*
- *"Não vendo o que vi em curso. Vendo o que eu construo."*
- *"60+ negócios já passaram por isso. O próximo é o seu."*
- *"Quem te responde é quem digita o código."*

---

## 4. Schema do banco — leads (colunas novas)

```
diagnostico_respondido_em   TEXT
diagnostico_respostas       TEXT (JSON 8 respostas)
briefing_enviado_em         TEXT
briefing_respondido_em      TEXT
briefing_respostas          TEXT (JSON 19 respostas)
servico_recomendado         TEXT (lp/shopify/nextjs/agendapro/consultoria)
faixa_investimento          TEXT (ate-500/500-1000/1000-2000/acima-2000)
pagamento_50_em             TEXT
pagamento_final_em          TEXT
plano_negocio_md            TEXT
plano_gerado_em             TEXT
plano_modelo_ia             TEXT
plano_revisado_em           TEXT
script_venda_md             TEXT
script_venda_gerado_em      TEXT
script_venda_modelo_ia      TEXT
script_venda_revisado_em    TEXT
```

Migrations idempotentes via `ALTER TABLE ADD COLUMN` no `initDb()` — rodam automaticamente no primeiro request.

---

## 5. O que ficou pendente (próximos passos)

### Configuração no Vercel
- [ ] **TALLY_WEBHOOK_SECRET** — endurecer webhooks Tally com HMAC-SHA256 (hoje aceita sem signing — funciona mas é dev mode)
- [x] **ANTHROPIC_API_KEY** — Eduardo configurou hoje
- [ ] **OPENAI_API_KEY** — Eduardo decidiu não adicionar agora (sem crédito)
- [x] **GEMINI_API_KEY** — já estava configurada (do /api/ai do RadarPRO)

### Code-related
- [ ] Notificação push quando lead novo cair no /tally (hoje precisa abrir o painel pra ver)
- [ ] Integração com Mercado Pago automatizada (webhook → muda status pra "pagamento confirmado" sem clique manual)
- [ ] LPs filhas segmentadas (LP / Shopify / Next.js / Consultoria) — quando volume justificar
- [ ] Cal.com pra agendamento de call de alinhamento opcional

### Operacional (Eduardo)
- [ ] Testar geração de Plano com Claude Sonnet 4.6 no João Teste (lead de teste no banco)
- [ ] Testar geração de Script de Venda com lead de teste
- [ ] Decidir qual modelo usar como padrão pros primeiros clientes reais (recomendação: Gemini grátis pros 3 primeiros, Claude pra clientes premium)
- [ ] Aquecimento do chip WhatsApp Business 63 99292-0080 continua

---

## 6. Custos projetados

### Geração de IA (estimativa por lead)
- **Script de Venda** (Claude): ~$0,08-0,12 por lead (~R$0,50)
- **Plano de Negócio** (Claude): ~$0,15-0,25 por cliente (~R$0,80-1,30)
- **Script + Plano com Claude**: ~R$1,30-1,80 por cliente fechado
- **Tudo grátis com Gemini Flash** (1k req/dia free)

### Crédito Claude atual: R$25
- Suporta ~14-19 ciclos completos (Script + Plano) ou ~30+ planos isolados
- Cobre primeiros clientes confortavelmente

### Quando aumentar crédito Claude
- Após 3-5 clientes pagantes reais com qualidade Claude validada
- Recarga de R$50-100 cobre 2-3 meses de operação

---

## 7. Como retomar quando voltar

1. **Abre /tally e testa Claude no João Teste** — gera script + plano, vê qualidade
2. **Compara com Gemini** — gera mesmo plano nos 2 modelos, lê os dois
3. **Decide modelo padrão** pra primeira semana de prospecção
4. Se quiser refinar tom/seções específicas, eu ajusto o SYSTEM_PROMPT pontualmente
5. **Próximo passo natural:** prospecção real — segunda-feira já tem tudo pronto pra começar

Tamo junto. 🚀
