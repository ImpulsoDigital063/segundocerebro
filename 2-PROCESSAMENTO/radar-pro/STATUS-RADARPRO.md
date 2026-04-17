# STATUS-RADARPRO.md

**Produto:** RadarPRO — Plataforma de prospecção
**Fase:** Interno (Impulso Digital) → potencial SaaS público
**Data:** 17/04/2026 (sexta)
**Responsável:** Eduardo Barros

---

## O que é

Sistema de prospecção com IA que gera playbook completo por lead e integra envio direto via WhatsApp. Hoje é ferramenta interna da Impulso Digital pra fechar os primeiros clientes. Amanhã vira SaaS pra vendedores e infoprodutores.

**Stack:** Next.js 16 · Turso (libSQL) · Gemini 2.5-flash · Baileys (WhatsApp QR) · Playwright (Gmaps) · axios+cheerio (sites/Instagram)

**Repositório:** `C:/Users/DELL/radar-pro` · GitHub: `ImpulsoDigital063/radar-pro`

---

## Estado atual (números reais)

| Métrica | Valor |
|---|---|
| Leads totais | 561 |
| Leads quentes (termômetro) | 144 |
| Leads mornos | — (verificar no painel) |
| Mensagens WhatsApp enviadas | — (desde 15/04) |
| Vendas fechadas via RadarPRO | 0 (aquecimento do chip em curso) |
| Tempo de dev até plataforma completa | 1 dia (15/04) |

---

## Capacidades (o que o sistema faz hoje)

### Banco (`lib/db.ts`)
- `leads` com 25+ campos, incluindo `script_json` (cache do playbook), `termometro`, `status`
- `buscas` (histórico Gmaps)
- `mensagens_whatsapp` (registro in/out)

### IA (`/api/ai/route.ts` — 11 ações)
1. `gerarAbordagem`
2. `diagnosticarNegocio`
3. `analisarConteudoSite`
4. `calcularScoreIA`
5. `gerarFollowup`
6. `gerarPlanoHoje`
7. `gerarScriptCompleto` (playbook 11 seções — cached)
8. `classificarTermometro`
9. `chat`
10. Cache estratégico
11. SYSTEM_PROMPT global (3 produtos · 4-msg script · 4 objeções)

### Playbook por lead (11 seções)
Abordagem · Diagnóstico · Pitch 3 versões · Dor · Resolução · Arma de vendas por segmento · Ancoragem · Prova social · 4 objeções · Fechamento com 3 horários · Follow-up (D+3/5/7/30)

### Melhor horário por segmento (`lib/horarios.ts` — 8 categorias)
Beleza · Saúde · Odonto · Barbearia · Academia · Vet · Pet shop · Default

### Arma de vendas por segmento
- Loja física → Shopify+motoboy
- Nutri → LP+blog SEO
- Barbearia → AgendaPRO+Google Reviews
- Salão → AgendaPRO+fidelidade
- Clínica → AgendaPRO+lembrete D-1
- Restaurante → site+cardápio digital

### WhatsApp (`lib/whatsapp.ts` — Baileys)
- QR Code no painel
- Sessão persistida (auto-reconnect)
- Envio direto com histórico
- Status polling
- Lead vira `respondeu` + termômetro `quente/morno` automaticamente ao receber in

### Scraping
- Playwright Gmaps
- axios+cheerio sites e Instagram

---

## Pendências (próximos 7 dias)

- [ ] **Aquecimento do chip WhatsApp Business 63 99292-0080** (ativado 16/04) — evitar ban
- [ ] Abordar 10-15 leads quentes selecionados manualmente
- [ ] Fechar 2-3 vendas (meta: 1ª venda via RadarPRO até 24/04)
- [ ] Registrar cada interação no painel (testar trigger automático de status)
- [ ] Validar `gerarPlanoHoje` como rotina matinal
- [ ] Anotar objeções que aparecem na prática pra alimentar o SYSTEM_PROMPT

---

## Pendências técnicas (backlog)

- [ ] Dashboard agregador (hoje painel mostra lead-a-lead)
- [ ] Métricas de conversão por segmento
- [ ] Importador CSV pra leads externos (hoje tudo vem do scraping)
- [ ] Multi-conta WhatsApp (hoje singleton)
- [ ] Exportar playbook como PDF (cliente pedir copy pra usar)

---

## Ambição (quando abrir como SaaS)

- Preço projetado: R$97-197/mês pra vendedores/infoprodutores
- Público-alvo 1: vendedores de serviço local (Shopify, marketing, consultoria)
- Público-alvo 2: infoprodutores que vendem 1-a-1 antes de escalar funil
- Diferencial: playbook real com pitch+objeções+follow-up, não só lista de contatos
- Requisito pra abrir: 3 cases próprios documentados (Impulso fechou X clientes com Y% de conversão usando o RadarPRO)

---

## Próxima atualização

Quando: 1ª venda fechada via RadarPRO, ou 25/04 (o que vier primeiro).
Atualizar: vendas fechadas, conversão por segmento, ajustes no SYSTEM_PROMPT baseados em campo real.
