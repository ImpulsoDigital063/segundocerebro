# STATUS-AGENDAPRO.md

**Produto:** AgendaPRO — SaaS de agendamento
**Fase:** Produção técnica · pré-cobrança (billing MP pendente)
**Data:** 17/04/2026 (sexta)
**Responsável:** Eduardo Barros

---

## O que é

SaaS multi-tenant de agendamento pra serviços com horário (barbearia, salão, nail, clínica, personal, estética). Público chega pelo domínio do negócio, agenda sem criar conta, recebe confirmação por WhatsApp+email. Admin configura tudo no painel.

**Proposta no mercado:** "Chega de perder hora no WhatsApp." R$67/mês Solo · R$107/mês Equipe · concorrente cobra R$256/mês.

---

## Stack

- Next.js 16 (App Router + Server Actions)
- Supabase: Auth · Postgres · Realtime · RLS estrito
- Resend (email transacional)
- Z-API (WhatsApp transacional — **não Baileys**, env vars `ZAPI_*`)
- Mercado Pago via `preapproval` (assinatura recorrente)
- Vercel (deploy + cron)

**Repositório:** `C:/Users/DELL/agendapro` · GitHub: `ImpulsoDigital063/AgendaPRO`
**Produção:** agenda-pro-seven.vercel.app + agendapro.net.br

---

## Migrations aplicadas

| # | Descrição | Status |
|---|---|---|
| V1-V5 | Schema base (profiles, services, appointments, availability, clients) | Aplicadas |
| V6 | Multi-negócio via `business_id` | Aplicada |
| V7 | Fidelidade (points, rewards, redemptions) | Aplicada |
| V8 | Lista de espera (`waitlist` + RLS) | Aplicada |
| V9 | **Trigger anti-overbooking** (`check_appointment_overlap`) | Aplicada |
| V10 | Cascade delete profissional → appointments | Aplicada |
| V11 | **subscriptions** (trial/grace/public_blocked/data_delete_at) | **PENDENTE** |

---

## Capacidades hoje

### Perfis
- `admin` (dono do negócio): vê tudo
- `profissional`: vê só os próprios agendamentos

### 7 abas do painel admin
Dashboard · Agenda · Serviços · Profissionais · Clientes · Fidelidade · Aparência

### Features de retenção
- Programa de fidelidade (pontos + ranking + recompensas)
- Lista de espera automática (cancelamento → próximo da fila)
- Link de indicação (URL única, pontos pro indicador e indicado)
- Google Reviews (badge + pontos por avaliar)
- Cadastro multi-negócio (`/cadastro` sem tocar SQL)

### 4 landings segmentadas
Barbearia · Salão · Clínica · Personal — hero + copy + prova social adaptados.

### WhatsApp (`src/lib/whatsapp.ts` — Z-API)
- `notifyBarber` — novo agendamento pro profissional
- `notifyClient` — confirmação pro cliente
- `sendReminderWhatsApp` — lembrete D-1 (24h) e H-1 (1h)

### Cron Vercel
- D-1: varre agendamentos de amanhã → WhatsApp+email
- H-1: varre próxima hora → WhatsApp
- (planejado) Billing: valida status MP diariamente

---

## Segurança (auditoria 16/04)

Auditoria completa com 3 agentes em paralelo (API · client · auth). 15+ vulns corrigidas:

- HMAC + `timingSafeEqual` em tokens (anti timing attack)
- XSS em templates Resend (escape rigoroso)
- IDOR em endpoints de appointment/cliente
- Rate limiting in-memory por IP nas rotas públicas
- CSP headers estritos
- RLS restritivo em `clients` e `waitlist`
- Trigger SQL `check_appointment_overlap` — impossível overbooking mesmo bypassando front

Padrão salvo em `3-RETENCAO/padroes/auditoria-seguranca-saas.md`.

---

## Billing (16/04 — estruturado, falta ligar)

### Fluxo de estados
`trialing` (14d sem cartão) → `active` → `past_due` (grace 5d) → `public_blocked` (bloqueio público dia 12) → `data_delete_pending` (dados preservados 90d)

### 4 API routes
- `POST /api/billing/checkout` — cria preapproval MP, retorna URL
- `GET /api/billing/status` — consulta estado atual
- `POST /api/billing/cancel` — cancela preapproval
- `POST /api/webhooks/mercadopago` — recebe eventos (payment.created, subscription.updated)

### Pendências pra começar a cobrar
- [ ] Aplicar migration V11 (`subscriptions`) no Supabase
- [ ] Configurar credenciais MP de produção (access_token + public_key) nas env vars
- [ ] Criar tela `/admin/bloqueado` (quando `public_blocked = true`)
- [ ] Cron diário de verificação de status (move entre estados)
- [ ] Teste end-to-end: criar trial → expirar → entrar em grace → bloquear → restaurar ao pagar

---

## Pendências UX/UI

- [ ] Redesign editor de aparência (estilo wizard)
- [ ] Onboarding do profissional (tour guiado nas 7 abas)
- [ ] Página pública do agendamento com preview da marca do negócio
- [ ] Mobile: hero redesenhado já (FoxAppy style, 16/04) — validar em produção

---

## Números reais

| Métrica | Valor |
|---|---|
| Migrations rodadas | 10 de 11 |
| Features principais | 5 (fidelidade, waitlist, indicação, reviews, multi-negócio) |
| Vulns corrigidas na auditoria 16/04 | 15+ |
| API routes de billing | 4 |
| Primeiro cliente pagante | 0 (onboarding barbeiro em curso) |
| Preço Solo | R$67/mês |
| Preço Equipe | R$107/mês |
| Setup | R$800 (à parte) |

---

## Ambição 30 dias

- 1º cliente pagante (barbeiro em onboarding)
- 3-5 clientes em operação (via RadarPRO + Impulso Digital)
- Fluxo de cobrança rodando ponta-a-ponta (MP liga → alunos do MPN-On e clientes Impulso virar leads)
- DNS agendapro.net.br propagado e canônico

---

## Meta 2026 (caminho pro R$1M)

100 clientes pagantes × R$97-147/mês × 12 meses = R$116k-176k MRR anual
+ setups R$800 × 100 = R$80k
**Total projetado AgendaPRO 2026: R$200k+**

---

## Próxima atualização

Quando: V11 aplicada + 1º pagamento MP rodando, ou 25/04 (o que vier primeiro).
Atualizar: estado billing, número de clientes, ajustes UX baseados em feedback real.
