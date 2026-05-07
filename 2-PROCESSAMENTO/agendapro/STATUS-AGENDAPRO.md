# STATUS-AGENDAPRO.md

**Produto:** AgendaPRO — SaaS de agendamento + gestão financeira + fidelização + reativação
**Fase:** ✅ **PRONTO PRA VENDER** · MP migrado pra PJ Impulso Digital em 07/05/2026
**Data:** 07/05/2026 (atualizado)
**Responsável:** Eduardo Barros

---

## ✅ MIGRAÇÃO MP PF → PJ CONCLUÍDA (07/05/2026)

- **Conta MP PJ:** Agenda-PRO (User ID 3202117739 · App 668403200532189)
- **Integração:** Assinaturas (preapproval)
- **Env vars Vercel (production):**
  - `MP_ACCESS_TOKEN` — credencial PJ
  - `NEXT_PUBLIC_MP_PUBLIC_KEY` — credencial PJ
  - `MP_WEBHOOK_SECRET` — HMAC ativo (gap de segurança que existia antes, agora cravado)
- **Webhook URL:** `https://www.agendapro.net.br/api/webhooks/mercadopago` (com www — sem causa redirect 307)
- **Eventos:** Pagamentos + Planos e assinaturas
- **Validação:** notificação teste do MP retornou **200 OK**

Próxima venda já cai na PJ.

> **📋 LEIA PRIMEIRO AO RETOMAR:** [`agendapro/DIARIO-2026-05-01.md`](C:/Users/DELL/agendapro/DIARIO-2026-05-01.md) no repo do AgendaPRO — daily com **37 commits** organizados em 7 áreas temáticas que consolidaram o produto em 8 dimensões. Esse foi o dia épico.

---

## O que é

SaaS multi-tenant que **NÃO é só agendamento** — é **ferramenta operacional completa do dono de pequeno negócio de serviço** (barbearia, salão, nail, clínica, personal, estética). Em 01/05/2026 consolidaram-se 8 dimensões: agendamento + gestão financeira (com Lucro Real) + reativação automática (Cupom de Retorno) + análises com forecast + fidelização (4 fontes de pontos) + organização + marketing (QR branded) + lógica de nicho.

**Proposta no mercado:** "Não é só agenda. É a operação completa do seu negócio." R$67/mês Solo · R$97/mês Equipe · concorrente cobra R$200-300/mês.

---

## Stack

- Next.js 16 (App Router + Server Actions)
- Supabase: Auth · Postgres · Realtime · RLS estrito
- Resend (email transacional)
- Z-API (WhatsApp transacional — **não Baileys**, env vars `ZAPI_*`)
- Mercado Pago via `preapproval` (assinatura recorrente)
- Vercel (deploy + cron)

**Repositório:** `C:/Users/DELL/agendapro` · GitHub: `ImpulsoDigital063/AgendaPRO`
**Vercel project canônico:** `agenda-pro` (com hífen) — projeto duplicado `agendapro` (sem hífen) foi excluído em 01/05/2026 noite (zumbi sem env vars)
**Produção:** **agendapro.net.br** + `www.agendapro.net.br` + `agenda-pro-seven.vercel.app` (alias Vercel default)

---

## Migrations aplicadas (todas em produção)

| # | Descrição | Status |
|---|---|---|
| V1-V5 | Schema base (profiles, services, appointments, availability, clients) | ✅ Aplicadas |
| V6 | Multi-negócio via `business_id` | ✅ Aplicada |
| V7 | Fidelidade (points, rewards, redemptions) | ✅ Aplicada |
| V8 | Lista de espera (`waitlist` + RLS) | ✅ Aplicada |
| V9 | **Trigger anti-overbooking** (`check_appointment_overlap`) | ✅ Aplicada |
| V10 | Cascade delete profissional → appointments | ✅ Aplicada |
| V11 | **subscriptions** (trial/grace/public_blocked/data_delete_at) | ✅ Aplicada |
| **V34** | **`appointments.paid_at` + `payment_method`** + index parcial (01/05) | ✅ Aplicada |
| **V35** | **Tabela `expenses`** (7 categorias, RLS owner-only, trigger updated_at) (01/05) | ✅ Aplicada |
| **V36** | **Tabela `coupons`** (code UNIQUE, customer_id, expires_at) + função `generate_coupon_code` (01/05) | ✅ Aplicada |

---

## 8 dimensões do produto (consolidadas em 01/05/2026 — 37 commits)

### 1. Agendamento
- Cliente agenda 24h sem WhatsApp/criar conta
- Lembrete automático D-1 e H-1 (Z-API)
- Lista de espera automática (cancelamento → próximo da fila)
- Cron auto-complete (marca como concluído depois do horário)
- Splash interno estilo Facebook (PRO animada)

### 2. Gestão financeira
- KPIs: Realizado / Em aberto (era "A receber") / Faturado / Ticket médio com **Sparkline SVG inline**
- 4 métodos de pagamento: PIX / Dinheiro / Cartão / Cortesia
- Comissão por profissional baseada em **PAGOS** (não completed)
- **Despesas** subpágina: CRUD com 7 categorias (aluguel, produtos, salário, utilities, marketing, impostos, outros)
- **Lucro Real** (Receita − Despesas) — só na aba Mês (despesas mensais distorcem em hoje/7d)

### 3. Análises avançadas
- Forecast do mês (projeção fim do mês)
- Comparativo mês atual vs anterior (% variação)
- Por dia da semana / por hora pico
- Taxa cancelamento + execução
- Novos vs recorrentes
- Métodos atual vs anterior
- Top serviços / top profissionais
- **6+ insights automáticos em texto natural** ("Sábado é seu melhor dia (35%)", "Pico de movimento às 14h", etc)

### 4. Reativação — Cupom de Retorno (sistema novo)
- Detecta clientes sumidos há 40+ dias
- Card laranja "Reativar X sumidos" (some quando todos têm cupom ativo)
- Wizard 3 etapas: desconto → template do nicho → preview
- 9 nichos × 3 templates cada (barbearia, salão, estética, nail, manicure, tatuagem, psicólogo, personal, genérico)
- Sample names por nicho (Lucas/Camila/Bianca/Letícia/Lucas/Marina/Rafael)
- 1 cupom único por cliente, código `PRO` + 5 chars
- Cliente clica em `/{slug}?cupom=PROXX99` → banner verde + sticky bar de desconto + tela final mostra "−R$X / Total R$Y"
- API server-side `/api/coupons/use` (service-role) com 3 validações
- Defense-in-depth: UI + API filtram quem já tem cupom ativo

### 5. Fidelização (4 fontes de pontos)
- Por agendamento (configurável por serviço)
- Por indicação (link `/slug?ref=X` automático)
- Por pontualidade (cliente chega no horário → bônus)
- Por review do Google
- Recompensas customizáveis (cliente troca pontos por brindes)

### 6. Organização
- 8 abas: Dashboard · Agenda · **Financeiro** · Serviços · Profissionais · Clientes · Fidelidade · Aparência
- Profissionais: comissionado (% sobre realizado) ou contratado (salário fixo)
- Limite por plano (Solo=2, Equipe=5) — UI + trigger SQL
- Horários: pausa de almoço múltipla, atalhos Seg-Sáb/Seg-Sex, copiar entre profs, RPC atômico
- Cancelados subpágina: lista + botão "Cobrar via WhatsApp" + "Marcar pago"

### 7. Marketing — QR Code branded + 3 templates de impressão
- QR com logo do negócio + cor da brand (não preto genérico)
- 3 templates de impressão pra casos reais:
  - **Cartões balcão** (4 por folha A4) — qualquer impressora caseira
  - **Cartaz parede** (A5 com selo Aura)
  - **Display acrílico** (A6 + bleed 3mm + crop marks pra gráfica)
- Web Share API pra PNG (sem tela "data:" iOS)
- Iframe isolado pra impressão (resolve quirks iOS Safari)

### 8. Lógica de nicho aplicada em TUDO
- Sample names por nicho (barbearia=Lucas, salão=Camila, nail=Bianca, psicólogo=Marina, etc)
- Templates de cupom autênticos por nicho (sem gírias problemáticas, sem gênero presumido)
- Sugestões de serviço dinâmicas
- Presets de cor com badge "★ Indicada" automático no card

---

## Princípios de produto cravados em 01/05

1. **AgendaPRO é educacional, NÃO ERP de cobrança** — "A receber" virou "Em aberto", sem cobrança automática, sistema mostra dado pra dono decidir
2. **Lucro Real só em escala mensal** — em hoje/7d as despesas mensais distorcem
3. **Pensar sempre em uso em massa** (filtro "100 clientes simultâneos")
4. **Lógica de nicho em tudo** — princípio inegociável
5. **UX faz dono se sentir inteligente, não burro** — princípio inegociável
6. **40 dias = sumido** (era 60) — coerente com ciclo barbearia/nail
7. **Lista paginada + agrupada por data** ("HOJE/ONTEM/5 DE MAIO") estilo WhatsApp
8. **Pill "Confirmado" deduplicada** — só aparece quando "Pagamento pendente" não cobre

---

## 4 landings segmentadas
Barbearia · Salão · Estética · Nail Designer — hero + copy + prova social adaptados (4 modalidades PIX no pricing).

---

## Segurança (auditoria 16/04 mantida)

Auditoria completa com 3 agentes em paralelo (API · client · auth). 15+ vulns corrigidas:

- HMAC + `timingSafeEqual` em tokens (anti timing attack)
- XSS em templates Resend (escape rigoroso)
- IDOR em endpoints de appointment/cliente
- Rate limiting in-memory por IP nas rotas públicas
- CSP headers estritos
- RLS restritivo em `clients` e `waitlist`
- Trigger SQL `check_appointment_overlap` — impossível overbooking
- API server-side `/api/coupons/use` (service-role) — RLS bloqueava UPDATE público

Padrão salvo em `3-RETENCAO/padroes/auditoria-seguranca-saas.md`.

---

## Billing — estruturado e aplicado

### Fluxo de estados
`trialing` (14d sem cartão) → `active` → `past_due` (grace 5d) → `public_blocked` (dia 12) → `data_delete_pending` (90d preservação)

### 4 API routes
- `POST /api/billing/checkout` — cria preapproval MP, retorna URL
- `GET /api/billing/status` — consulta estado atual
- `POST /api/billing/cancel` — cancela preapproval
- `POST /api/webhooks/mercadopago` — recebe eventos

### 🔴 Pendências críticas pré-lançamento

- [ ] **Migrar MP de PF (CPF Eduardo) → PJ (CNPJ Impulso Digital)** — pagamentos hoje caem na conta CPF, é o último bloqueio
- [ ] Auditoria final: cap Clube Fundador 10 hardcoded em `cadastro/route.ts:107`, marca AgendaPRO no checkout MP, webhook URL sem `www.`
- [ ] Tela `/admin/bloqueado` quando `public_blocked = true`
- [ ] Cron diário de verificação de status

---

## Pendências menores (documentadas, não-bloqueantes)

- [ ] Aparência: melhorias futuras da capa (Eduardo deixou em standby)
- [ ] Cupom de retorno: filtro manual ("não pra esse cliente")
- [ ] Cancelar cupom não enviado (UI pra deletar antes do WhatsApp)
- [ ] Auditoria pp_owner_* (v5) — bug de ambiguidade do `name` (mesmo do v33)
- [ ] **4 fixes de performance** documentados pra atacar quando chegar 80 clientes ativos (agregação SQL, cache, paginação, sums em SQL)
- [ ] Avaliação pós-agendamento (ideia validada, implementar com 20+ agendamentos reais)
- [ ] Migrar import de leads do RadarPRO → AgendaPRO (futuro)

---

## Números reais

| Métrica | Valor |
|---|---|
| Commits aplicados em 01/05 | **37 commits em ~16h** |
| Migrations rodadas | **13 de 13** (V34/V35/V36 incluídas) |
| Dimensões do produto | **8** (era "agendamento", virou "ferramenta operacional completa") |
| Vulns corrigidas na auditoria 16/04 | 15+ |
| API routes de billing | 4 |
| Primeiro cliente pagante | 0 (Olímpio em onboarding) |
| Preço Solo | R$67/mês (sem setup) |
| Preço Equipe | R$97/mês (sem setup) |
| Setup oficial | **R$197** (cobrado a partir do cliente 11+, isento Clube Fundador 10 primeiros) |

---

## Ambição 30 dias

- 1º cliente pagante (Olímpio)
- 10 do Clube Fundador (R$67 fundadores travado pra sempre)
- Fluxo de cobrança rodando ponta-a-ponta após CPF→CNPJ
- DNS agendapro.net.br propagado e canônico
- Avaliações pós-agendamento (ideia ativada quando tiver 20+ agendamentos reais)

---

## Meta 2026 (caminho pro R$1M)

100 clientes pagantes × R$67-97/mês × 12 meses = R$80k-116k MRR anual
+ setups R$197 × 90 (após Clube Fundador) = R$17.7k
**Total projetado AgendaPRO 2026: R$95k-130k**

---

## Próxima atualização

**Quando:**
- Após migração MP CPF→CNPJ + auditoria final pré-lançamento
- Ou após primeiro cliente AgendaPRO pagar
- Ou ao atingir 80 clientes ativos (trigger pra atacar fixes de performance)

**O que atualizar:** estado billing, número de clientes ativos, métricas reais de uso, ajustes UX baseados em feedback real, novas migrations se houver.
