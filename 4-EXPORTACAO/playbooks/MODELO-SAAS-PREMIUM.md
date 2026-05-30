# 🏛️ MODELO SAAS PREMIUM · Template Replicável

**Cravado:** 29/05/2026 madrugada · pós-entrega Palace Nail Spa (R$ 2.997)
**Base:** lições do AgendaPRO (universal R$67-97/mês) + SystemPalace (fork dedicado R$ 2.997)
**Uso:** roteiro pra construir QUALQUER próximo SaaS Impulso · seja universal ou fork dedicado

> **Por que esse arquivo existe.** A maratona AgendaPRO + Palace cravou ~89 migrations, 3 forks paralelos (mobile/desktop/Palace), 13 ações Supervisor PIN com 4 evoluções (V1→V4), tri-modal responsivo, cutoff financeiro, e padrões repetíveis. Tudo isso virou tese — esse arquivo destila a tese em formato que outra sessão minha (ou outro dev) consegue executar do zero.

---

## 📜 ÍNDICE

1. [Filosofia · Universal vs Fork Dedicado](#1-filosofia)
2. [Stack técnica de referência](#2-stack-técnica)
3. [Modelo de negócio · 3 tickets](#3-modelo-de-negócio)
4. [Arquitetura · 5 camadas](#4-arquitetura)
5. [Modelo de dados canônico](#5-modelo-de-dados-canônico)
6. [Shell visual · Salão99-pattern](#6-shell-visual)
7. [Tri-modal responsivo](#7-tri-modal)
8. [Fluxos canônicos](#8-fluxos-canônicos)
9. [Supervisor PIN · 4 evoluções](#9-supervisor-pin)
10. [Onboarding cliente premium](#10-onboarding-cliente-premium)
11. [Regras duras (λ) cravadas](#11-regras-duras)
12. [Anti-patterns](#12-anti-patterns)
13. [Workflow operacional](#13-workflow-operacional)
14. [Checklist 14 passos pra novo SaaS](#14-checklist)

---

## 1. FILOSOFIA

### Cliente universal vs cliente premium dedicado

A Impulso opera 2 modalidades simultâneas e elas NÃO competem:

| Modalidade | Universal | Fork dedicado | Manutenção premium |
|---|---|---|---|
| Exemplo | AgendaPRO (Olímpio · Letícia · Erlane · Izanara) | SystemPalace (Marko + Luana) | Pós-fork |
| Ticket | R$ 67-97/mês | R$ 2-3k (uma vez) | R$ 297-497/mês |
| Repo | Único (`agendapro`) | Próprio (`systempalace`) | Próprio |
| Banco | Multi-tenant (business_id) | Tenant único | Tenant único |
| Domínio | `agendapro.net.br/<slug>` | `palace.dominio.com` ou próprio | Próprio |
| Customizações | NENHUMA por cliente | TOTAIS pro cliente | Iterativas |
| Quando vender | Lead vem padrão | Lead pede features fora do escopo | Após entrega fork |

**Princípio:** universal escala em receita recorrente · fork captura ticket alto de cliente premium que precisa de regra de negócio única (cutoff · supervisor · permissões granulares · agenda intacta · integração com sistema legado).

### Quando virar fork dedicado?

Sinais (≥3 = considerar fork):
- Cliente pede ≥3 features que NÃO cabem no SKU universal sem inflar produto
- Cliente tem **regra de negócio única** (ex: agenda nunca deletada · cutoff financeiro com data específica)
- Cliente migrando de sistema legado com 1000+ rows (import + matching pesado)
- Cliente tem operador secundário (recep · gerente) com restrições granulares de permissão
- Cliente paga adiantado R$ 2k+ (compra o trabalho de customização)
- Cliente é referência de segmento (lead source pra novos vendendo a história "eles usam")

### Quando NÃO virar fork

- Cliente quer customização de cor/logo → universal cobre via brand-colors (v50)
- Cliente quer 1 feature nova → universal pode receber se for útil pra outros
- Cliente paga só mensal padrão → NÃO compensa custo de manutenção paralela

---

## 2. STACK TÉCNICA

Validada em produção (AgendaPRO + SystemPalace · ~5.000 horas de uso real):

### Frontend
- **Next.js 16** App Router + **Turbopack** (build veloz)
- **React 19** (Server Components default · client components onde precisa)
- **Tailwind CSS 4** (utility-first · tri-modal via prefixos)
- **Lucide React** ícones (treeshaken)
- **jsPDF + autoTable** pra PDF (descartado html2pdf.js · branca em prod)
- **`createPortal(node, document.body)`** pra modais (escapa stacking context do backdrop-filter)

### Backend
- **Server Actions** + **Route Handlers** (`/api/...`)
- **`createServiceClient`** com `SUPABASE_SERVICE_ROLE_KEY` quando precisa burlar RLS (uso cuidadoso · sempre validar auth antes)
- **`force-dynamic`** em rotas que não devem cachear (auth/redirect)
- **`Cache-Control: no-store` + `Vercel-CDN-Cache-Control: no-store`** em rotas de auth · senão CDN cacheia redirect

### Banco
- **Supabase Postgres** + **Auth** + **Storage** + **RLS** + **Realtime** + **Edge Functions**
- **RLS** em TODA tabela com dados de cliente (anon e authenticated)
- **`SECURITY DEFINER`** em triggers que tocam tabelas RLS-fortes (sem isso anon quebra)
- **`SET search_path = public, extensions`** em functions que usam pgcrypto (Supabase põe pgcrypto em schema `extensions`)
- **Trigger AFTER INSERT/UPDATE** pra cascata de side effects (auto-criar invoice · sincronizar item · creditar pontos)
- **JSONB** pra payloads dinâmicos (ex: `supervisor_requests.pending_payload`)
- **Soft delete** via `cancelled_at`/`deleted_at` ao invés de DELETE (auditoria + reversibilidade)

### Autenticação
- **Supabase Auth** (email + senha · OAuth opcional)
- **2FA SMS** para flow crítico (cancelamento)
- **Senha temp** padrão `<primeironome>2026` minúsculo · `password_changed=false` força troca no primeiro login
- **Magic link** desabilitado por padrão (cliente brasileiro confia mais em senha · diferente de US)
- **Recovery link** com TTL 1h

### Pagamento
- **Asaas** (PIX nativo · cartão · boleto) — primeiro escolha BR
- **Mercado Pago** — opção secundária
- **InfinitePay maquininha** — pra cliente que cobra presencial (taxas v49)
- **Stripe** — NÃO usar pra cliente BR (FX desnecessário · usuário leigo confunde)

### Notificação
- **Resend** pra email transacional (template branded)
- **WhatsApp** via API externa (Wapi / Z-API) · mas TOM atual: link `wa.me/55<numero>?text=<msg>` é suficiente pra 90% (zero CAC · cliente clica e abre direto)
- **Push web** via Web Push API (PWA standalone)

### Deploy + Infra
- **Vercel** (Hobby pra MVP · Pro pra cliente em prod)
- **Cloudflare DNS** (mais barato + DDoS protection)
- **Sentry** pra observability (plano grátis enquanto faz sentido)
- **GitHub** repos privados pra cliente · público pra OSS Impulso

### Local
- **Cursor** pra dev (Claude Sonnet/Opus integrado)
- **Claude Code CLI** pra automação + multi-agent
- **PowerShell** Windows 11 (não bash)
- **Whisper local** pra transcrever áudios cliente

---

## 3. MODELO DE NEGÓCIO

### 3 tickets em paralelo

| Ticket | Quem | Quando | Valor |
|---|---|---|---|
| **Universal mensal** | Lead padrão | Self-service via /cadastro | R$ 67-97/mês |
| **Fork dedicado** | Cliente premium com regra única | Após drilldown sistema legado + reunião | R$ 2-3k uma vez |
| **Manutenção premium** | Cliente fork pós-entrega | A definir após 30d uso | R$ 297-497/mês |

### Pricing universal validado

- **Solo** R$ 67/mês · 1 profissional + dono + recep
- **Equipe** R$ 97/mês · ilimitado profs · 1 recep grátis · estoque + comanda + remunerações
- **Equipe Anual** R$ 970/ano (`anual_pix` · price_cents=97000) · 2 meses grátis embutidos
- **Plano semestral** removido (confusão · sempre vender mensal OU anual)
- **Setup grátis** pro Clube Fundador (10 primeiros) · depois R$ 197 (recuperável em referrals)
- **Extra professional slot** v78 · R$ X/mês por slot adicional (futuro upsell)

### Pricing fork dedicado

- **Sistema dedicado entregue** · R$ 2.997 (validado Palace 29/05)
- **Customização adicional** por sprint · a definir caso a caso
- **Manutenção mensal** · proposta pendente · estimativa R$ 297-497

### Ofertas + descontos

- **Trial cortesia** · 7 dias padrão · extensível até 14 dias (Marko ganhou +9 · novo vencimento 02/06)
- **Conversão automática** via BLOCO 4 do `grant-trial-*.sql` no D-1 do trial → cria assinatura Asaas
- **Cupom de referral** · R$ 10 OFF + R$ 10 crédito pra quem indicou (loop viral validado)
- **Cupom aniversário** · R$ 25 OFF no mês do aniversário (cliente vira ativador)

---

## 4. ARQUITETURA

### 5 camadas

```
┌──────────────────────────────────────────────────┐
│  1. FRONTEND TRI-MODAL                           │
│     mobile (<640) · tablet (640-1023) · desktop (≥1024) │
│     Componentes compartilhados · UX adapter      │
└──────────────────────────────────────────────────┘
         ↓ fetch / server action
┌──────────────────────────────────────────────────┐
│  2. API / SERVER ACTIONS                         │
│     /api/admin/* · /api/recepcao/* · /api/cron/* │
│     Auth check + business_id scope               │
└──────────────────────────────────────────────────┘
         ↓ supabase client (RLS) / service client (bypass)
┌──────────────────────────────────────────────────┐
│  3. DB (Supabase Postgres)                       │
│     RLS · Triggers SECURITY DEFINER · JSONB      │
└──────────────────────────────────────────────────┘
         ↓ pgcrypto · realtime · edge functions
┌──────────────────────────────────────────────────┐
│  4. INTEGRAÇÕES                                  │
│     Asaas · Resend · WhatsApp · Sentry           │
└──────────────────────────────────────────────────┘
         ↓ webhook + polling
┌──────────────────────────────────────────────────┐
│  5. PUSH / REALTIME                              │
│     Supabase Realtime · Web Push · Polling fallback │
└──────────────────────────────────────────────────┘
```

### Princípios de camada

- **Frontend NUNCA** chama Supabase com service role (vazaria a chave)
- **API/Server Action** valida auth + business_id · NUNCA confia em payload de cliente
- **DB** é fonte de verdade · triggers garantem invariantes (não delegar pra app)
- **Integrações externas** vão por API Route dedicado · NUNCA expor token no client
- **Realtime** sempre com **polling fallback** (Supabase Realtime cai · cliente vê toast atrasado se cair)

---

## 5. MODELO DE DADOS CANÔNICO

Validado em AgendaPRO + Palace. Aplica pra qualquer SaaS de serviço/varejo.

### Entidades obrigatórias

```
businesses              ◀── tenant (sempre o ancorá em queries)
  id, slug, name, brand_*, supervisor_*
  
professionals           ◀── operadores do tenant
  id, business_id, auth_user_id, is_owner/is_manager/is_receptionist
  attends_clients, employment_type (commissioned|employed)
  password_changed
  
customers (+ clients)   ◀── consumidores finais
  id, business_id, name, phone, email, birthday, notes
  + 18 campos extra (CPF, RG, endereço, instagram, profissao, etc)
  
services                ◀── catálogo de serviços
  id, business_id, name, price, duration_minutes, color
  category_id, attends_clients
  
appointments            ◀── agendamento (NUNCA delete · cancelled_at)
  id, business_id, professional_id, service_id, customer_id
  appointment_date, start_time, end_time, status, total_price
  paid_at, payment_method, invoice_item_id
  recurring_group_id (v62)
  
appointment_services    ◀── M2M (multi-serviço por appt)
  appointment_id, service_id, price
  
invoices                ◀── comanda fechada/aberta
  id, business_id, customer_id, invoice_number (unique per business)
  status (open|closed|cancelled), subtotal, discount, manual_discount, total
  
invoice_items           ◀── linhas da comanda
  id, invoice_id, item_type (appointment|product|package|credit)
  reference_id, description, professional_id, quantity, unit_price, total
  commission_amount
  
invoice_payments        ◀── pagamentos por comanda (split)
  id, invoice_id, payment_method, card_type, amount, paid_at
  device_id (maquininha), card_brand, fee_amount
  
products                ◀── catálogo varejo
  id, business_id, name, sku, brand_id, category_id
  cost, price, stock, variant
  
sales                   ◀── venda avulsa (sem appointment)
  id, business_id, customer_id, type (product_sale|...)
  total, paid_at, payment_method, invoice_id (FK)
  
expenses                ◀── despesas
  id, business_id, category, amount, date, recurring
  import_external_id (idempotência import)
  
cash_closings           ◀── fechamento de caixa
  id, business_id, closed_by_professional_id, closing_date (unique)
  total_*_cents (pix/cash/card_credit/card_debit)
  *_physical_count_cents · *_diff_cents (conferência tripla)
  notes, closed_at
  
loyalty_points          ◀── pontos do cliente
  customer_id, points_balance, last_credited_at
  
supervisor_requests     ◀── pedidos de autorização (V4)
  id, business_id, action, target_type, target_id
  status (pending|approved|rejected), otp_hash, pending_payload (JSONB)
  approved_at, used_at
  
merchant_devices        ◀── maquininhas
  id, business_id, name (InfinitePay/Stone/etc)
  
merchant_device_fees    ◀── taxas por bandeira/tipo
  device_id, payment_method, card_brand, installments, fee_percent
  
business_blocks         ◀── bloqueios de horário (almoço/folga/feriado)
  id, business_id, start_at, end_at, reason
  
business_settings       ◀── flags por tenant
  business_id, loyalty_enabled, currency, locale, etc
  
activity_log            ◀── auditoria
  id, business_id, professional_id, action, description, payload
```

### Regras de design

- **Sempre** `business_id` como primeira coluna FK (anchor tenant)
- **Sempre** `created_at` + `updated_at` em tabelas que mudam
- **Sempre** index em `(business_id, status)` e `(business_id, paid_at)`
- **Soft delete** via `cancelled_at` / `deleted_at` (ou status='cancelled')
- **UNIQUE composto** por tenant: `UNIQUE(business_id, invoice_number)` · `UNIQUE(business_id, closing_date)`
- **CHECK constraint** pra status: `CHECK (status IN ('open', 'closed', 'cancelled'))`
- **EXCLUSION CONSTRAINT** pra anti-overlap: `appointments` não pode ter 2 do mesmo prof no mesmo slot
- **Triggers SECURITY DEFINER** pra side effects (auto-invoice · sincronizar item · creditar pontos)
- **JSONB pending_payload** pra deferred execution (recep envia · admin aprova · trigger aplica)

---

## 6. SHELL VISUAL

### Layout canônico (Salão99-pattern · validado)

```
┌───────────────────────────────────────────────────────────────┐
│ TopBar (mobile/tablet < lg)                            [☰]    │
├──────────┬────────────────────────────────────────────────────┤
│          │                                                    │
│ Sidebar  │   Main content                                     │
│ fixa     │   ┌────────────────────────────────────────────┐  │
│ 240px    │   │  Header da página · saudação / data        │  │
│ (≥lg)    │   ├────────────────────────────────────────────┤  │
│          │   │  KPIsRow (3-4 cards 3D)                    │  │
│ Brand    │   ├────────────────────────────────────────────┤  │
│ logo     │   │                                            │  │
│ + slug   │   │  Tabela/Grid principal                     │  │
│          │   │                                            │  │
│ Nav      │   │                                            │  │
│ items    │   └────────────────────────────────────────────┘  │
│          │                                                    │
│ Sair     │   Drawer lateral (clique row) · 320-400px         │
└──────────┴────────────────────────────────────────────────────┘
```

### Componentes obrigatórios

1. **Sidebar fixa desktop** (240px com collapse → 72px)
   - Brand logo + nome + caption "Painel do <Role>"
   - Items agrupados (Painel · Gestão · Financeiro · Configurações)
   - Badge de pendentes (Appointments · Claims)
   - Botão Sair no rodapé

2. **TopBar mobile/tablet** (56px fixed top)
   - Hambúrguer esquerda → drawer overlay (Portal)
   - Brand center
   - ThemeToggle direita

3. **KPIsRow** (3-4 cards 3D padrão)
   - Hero KPI grande (Lucro Líquido · Recebido hoje)
   - 3 KPIs secundários médios
   - CountUp animado nos números

4. **Grade Timeline** (agenda)
   - Colunas por profissional
   - Linhas por slot de 30min (07:00-22:00 default · configurável por `business_hours`)
   - Cards 3D com cliente · serviço · valor · status
   - Hover-to-schedule popover (3 opções: Agendar · Bloquear · Cancelar)
   - Click no card abre drawer inline (não navega)
   - Cancelados aparecem desbotados/diagonais (preserva contexto histórico · Salão99-pattern)

5. **Drawer lateral**
   - Cliente · Profissional · Produto · Pacote · etc
   - Tabs no topo (Perfil · Configurações · Atividades · etc)
   - Z-index 150 (acima do main, abaixo do modal global)

6. **PaymentMethodModal**
   - Pix · Dinheiro · Cartão · Crédito do cliente
   - Cartão abre step 2 com maquininha + tipo + bandeira → calcula taxa → mostra líquido
   - Split de pagamento (múltiplos invoice_payments)
   - Manual discount no rodapé

7. **Comanda detalhe**
   - Header: cliente + invoice_number + status
   - Lista de items (editáveis quantidade/preço inline se status='open')
   - Pagamentos (split)
   - Rodapé: subtotal + manual_discount + total
   - Botões: Receber pagamento · Adicionar serviço · Imprimir PDF · Compartilhar WhatsApp

8. **Hero Lucro Líquido** (no /financeiro)
   - Tipografia `clamp(2.5rem, 5vw, 4rem)` em gradient
   - Quebra hierarquia chata onde todos KPIs têm mesmo tamanho

9. **Fluxo de Caixa drill**
   - Diário · Semanal · Mensal · Anual
   - 4 colunas (Dinheiro · Pix · Cartão Crédito · Cartão Débito)
   - Cada valor com ícone ↗ pra drill-down em detalhamento

10. **Modal grande padrão** (cadastro · agendar · etc)
    - `createPortal(document.body)` · escapa backdrop-filter
    - Header com X (X NÃO dispara ação destrutiva · só fecha)
    - Footer com botões padrão (Cancelar esquerda · Ação principal direita)
    - Erro no rodapé (não no topo · usuário rolou e perde)

---

## 7. TRI-MODAL

### Breakpoints obrigatórios

| Range | Nome | Uso |
|---|---|---|
| < 640px | **mobile** | Dono no celular (Olímpio · Marko viajando) |
| 640-1023px | **tablet** | iPad Mini retrato 744px (Letícia recep) |
| ≥ 1024px | **desktop** | Marko em casa · Luana notebook · Eduardo dev |

### Regras

- **Mesmo componente** · NUNCA arquivo separado mobile/desktop
- Isolar via **Tailwind responsive prefixes**: sem-prefixo · `sm:` · `md:` · `lg:`
- Ajuste pra mobile → declarar sem prefixo + anular no `sm:` (restaura desktop)
- Ajuste pra desktop → declarar com `sm:`/`md:`/`lg:`
- **Sidebar fixa só `≥ lg`** (1024px+) · em mobile/tablet vira hambúrguer + drawer (Portal)
- **Painéis laterais** viram drawer `< lg` via Portal
- **Touch target mínimo** 44×44px em qualquer breakpoint
- **`safe-area-inset-bottom`** no padding pra iPhone notch

### UX adapter por modo

| Componente | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navegação | Hambúrguer + drawer | Hambúrguer + drawer | Sidebar fixa |
| Tabela grande | Cards empilhados | Tabela com scroll horizontal | Tabela full |
| Form longo | Stepper N passos | Stepper N passos | 1 form com seções |
| Filtros | Drawer/sheet bottom | Sidebar drawer | Sidebar inline |
| Confirmação | Modal full-screen | Modal medium | Modal central 480px |

---

## 8. FLUXOS CANÔNICOS

### Agendar atendimento (UI)

```
1. Click [+ Agendar] no header da timeline
2. Modal abre · 1 passo · multi-serviços inline
3. Cliente: buscar/criar inline
4. Serviços: pílulas selecionáveis (multi)
5. Data: date picker
6. Horário: TimeSlotPicker grid Manhã/Tarde/Noite · ocupados em cinza
7. Profissional: select (filtrado por does_appointments=true)
8. Recorrência (toggle): N agendamentos · cria recurring_group_id
9. Save → trigger v70 auto-cria invoice 'open' + invoice_items
```

### Faturar (fechar comanda)

```
1. Drawer da timeline · botão FATURAR
2. Modal de fechamento mostra invoice 'open' com items
3. Click "Receber pagamento" → PaymentMethodModal
4. Escolher método (pode split) → calcular taxa se cartão
5. Confirmar → invoice_payment INSERT · invoice.status='closed' · invoice.closed_at=now
6. Trigger atualiza appointment.paid_at + payment_method
7. Trigger v89 sincroniza invoice_items se preço mudou
```

### Cancelar atendimento

```
1. Drawer · botão Cancelar
2. Se invoice 'open' (sem pagamento) → confirmação simples + cascata
3. Se invoice 'closed' (pago) → Supervisor V4 (action=invoice.cancel_paid)
   3a. Modal abre · recep escreve motivo · POST cria supervisor_request
   3b. Marko aprova em /admin/supervisao
   3c. Trigger apply_supervisor_request_payload executa cancel cascade
4. appointments.status='cancelled' · NUNCA delete
5. Cascata: invoice='cancelled' · sales='cancelled' · estoque reverter · payments mantidos como histórico
```

### Fechar caixa (recep)

```
1. /recepcao/caixa
2. Sistema calcula valores esperados (paid hoje · por método)
3. Letícia conta físico (dinheiro · cartão · pix)
4. Sistema calcula diff por método
5. Save → INSERT cash_closings · UNIQUE(business_id, closing_date) bloqueia 2º fechamento
6. logActivity('close_cash') · router.refresh
7. Marko vê em /admin/caixa quando abrir (TODO: notificação realtime)
```

### Supervisor PIN V4 (auth granular recep)

```
RECEP                          BANCO                          ADMIN
1. Tenta editar valor R$
   └── guard.request({action,
        payload: {price: 150}, doIt})
2. guard checa activeActions
3. Se controlada → modal aparece
4. Recep escreve motivo
5. POST /api/recepcao/supervisor-request
                                INSERT supervisor_requests
                                status='pending'
                                pending_payload={price:150}
                                Realtime pub
                                                                6. Admin vê em /admin/supervisao
                                                                7. Click "Liberar"
                                                                8. POST /api/admin/.../approve
                                UPDATE status='approved'
                                Trigger AFTER UPDATE
                                apply_supervisor_request_payload()
                                Executa server-side cascade
                                (atualiza appointment · invoice · etc)
9. Realtime subscribe / poll 3s
10. Recep vê "Aprovado" · modal fecha · operação visível
```

---

## 9. SUPERVISOR PIN

Evolução em 4 versões · cada uma resolveu fricção da anterior:

### V1 · PIN fixo (descartado)
- Marko cadastra PIN 6 dígitos
- Recep digita toda vez
- ❌ Fricção: Marko não confia · troca PIN toda semana · recep pergunta sempre

### V2 · OTP one-time
- Recep solicita autorização (motivo escrito)
- Marko aprova em /admin/supervisao · gera PIN 6 dígitos
- Marko passa PIN pra recep (WhatsApp / pessoalmente)
- Recep digita · sistema valida hash · executa
- ❌ Fricção: recep espera Marko mandar · admin tem que escrever no WhatsApp

### V3 · Realtime passwordless
- Recep solicita · Marko vê em /admin/supervisao
- Click "Liberar" → Realtime envia approval pro modal da recep
- Modal fecha sozinho · operação executa client-side
- ❌ Fricção: se recep fecha modal antes do Marko liberar · operação perdida

### V4 · Payload no banco + trigger auto-aplica ✅
- Recep envia ação COM payload (JSONB) salvo em `supervisor_requests.pending_payload`
- Marko aprova → Trigger PG executa `apply_supervisor_request_payload(request_id)` server-side
- Recep pode fechar modal · operação consolidada no banco
- Realtime + polling 3s fallback pra notificar UI
- ✅ Estado vive no banco · não em React · operação consistente

### Catálogo 13 ações (Palace)

```
Agendamentos (5):
  appointment.cancel
  appointment.edit
  appointment.add_service
  appointment.remove_service
  appointment.relevar_no_show

Comandas/cobrança (5):
  invoice.cancel_paid
  invoice.remove_item
  invoice.edit_item_price
  invoice.manual_discount
  invoice.courtesy

Clientes (2):
  customer.delete
  customer.edit_personal

Financeiro (1):
  expense.create_high_value
```

**Regra:** plug 1 ação no front por vez baseado em uso real. NÃO antecipar speculativamente.

---

## 10. ONBOARDING CLIENTE PREMIUM

Fluxo cravado com Palace (replicável):

### Pré-fechamento (1-3 dias)
1. **Drilldown CIC** do sistema atual do cliente (READ-ONLY · NUNCA clicar salvar)
2. Documentar `referencia-<sistema>/01-reconhecimento.md`
3. Listar 5-10 features que cliente USA (não que o sistema TEM)
4. Mapear gap "nossa vs deles"

### Fechamento (1 dia)
1. Reunião · pitch · valor cravado
2. Cliente paga (Asaas link · PIX comum)
3. Acesso GitHub (se fork dedicado) ou onboarding self-service (se universal)

### Setup (1-3 dias)
1. Fork dedicado: criar repo · deploy Vercel · DB Supabase
2. Universal: business criado no /cadastro · slug confirmado
3. **Import dados do sistema antigo** (script .mjs idempotente via sha1 hash)
4. Migration de schema customizado se fork (v50 brand · v82 supervisor_whatsapp)
5. Credenciais geradas (`<primeironome>2026` minúsculo · força troca)
6. **Cutoff financeiro** definido (data X em diante conta · histórico fica visível)

### Trial cortesia (7-14 dias)
1. Liberar acesso completo · sem cobrança
2. Cliente operar 1-2 dias usando junto com sistema antigo (paralelo)
3. Eduardo acompanha via WhatsApp · áudios cliente · prints
4. Ajustar features que aparecem como gap real (não speculativo)
5. **D-1**: rodar BLOCO 4 do `grant-trial-<slug>.sql` · converte pra cobrança
6. **Asaas** cria assinatura recorrente

### Pós-conversão (30 dias)
1. Coletar feedback uso real
2. Mapear gaps que apareceram pela operação
3. Pedir indicação (depoimento + 1 contato)
4. Avaliar manutenção mensal (fork dedicado)

---

## 11. REGRAS DURAS (λ)

Cravadas em produção · violar = dor real:

### λ.prova-na-fonte
UI verde / `res.ok === true` / "salvo" NÃO são prova de persistência. Em fluxo de write crítico (briefing · billing · form cliente-facing): **read-after-write obrigatório** · ler row no banco depois de write. Cravado pós-incidente Aura Renato (briefing preencheu 3× sem persistir).

### λ.diagnostico-no-nivel-certo
Bug recorrente exige localizar camada da falha real ANTES de codar fix. Sintoma na UI ≠ raiz no servidor ≠ raiz no banco. Errar a camada = recidiva garantida.

### λ.analise-impacto-antes-de-prod
Antes de migration/mudança crítica em prod: checklist 6 pontos: (1) quem dispara? (2) tabelas tocadas (3) dado obrigatório (4) fluxo prod (5) rollback (6) cliente afetado. Cravado pós-P0 Olímpio booking.

### λ.trigger-security-definer
Trigger que toca tabela com RLS forte exige `SECURITY DEFINER`. Sem isso, anon quebra (BookingFlow público falha silencioso).

### λ.search-path-extensions
Function que usa `pgcrypto.crypt()`/`gen_salt()` em Supabase exige `SET search_path = public, extensions` E referência qualificada `extensions.crypt()`. Senão "function does not exist".

### λ.rls-sem-subquery-self
RLS policy NÃO pode ter SELECT na própria tabela → `infinite recursion`. Usar SECURITY DEFINER function ou eliminar subquery.

### λ.fork-dedicado
Cliente premium com regra única ganha fork dedicado. NÃO inflar produto universal com lógica de 1 cliente.

### λ.cutoff-financeiro
Cliente migrando precisa de data cutoff (X em diante conta · histórico visível mas não soma). Aplicar em TODA query que filtra paid_at/payment_date via `clampToCutoff(business_id, startDate)`.

### λ.agenda-intacta
NUNCA deletar agendamentos (passados ou futuros). Base de comissão. Usar `cancelled` status. Cravado por Marko 28/05.

### λ.tri-modal
Mobile < 640 / tablet 640-1023 / desktop ≥ 1024. Mesmo componente · isolar via Tailwind. Cliente com iPad obriga 3 modes.

### λ.supervisor-evolucao
V4 (payload + trigger) > V3 (realtime client) > V2 (OTP humano) > V1 (PIN fixo). Estado no banco · operação consistente.

### λ.salao99-read-only
Em sistema do cliente · drilldown CIC NUNCA clica Salvar/Excluir/Criar. Read-only estrito. Cravado por Marko (operação real de cliente premium).

### λ.menos-cliques
Cada feature julgada por reduzir cliques. Pré-preencher · empurrar próximo passo · NÃO criar trabalho. Cravado Starteq.

### λ.feature-universal-nao-personaliza
Placeholders/copy/mensagens em feature universal NÃO referenciam nomes ou nicho específico. Usar exemplos universais.

### λ.foto-pessoa-unsplash
Pessoa em LP real = Unsplash/Pexels curado. NUNCA IA pra retrato (uncanny valley). IA OK pra still-life de objetos.

### λ.sempre-svg-nunca-emoji
Zero emoji em LP/site/produto. Tudo via SVG inline em components/Icons.tsx.

### λ.token-nunca-em-url
PAT GitHub vazou 4× via push.sh com token na URL. SEMPRE Git Credential Manager interativo (popup).

### λ.modal-x-nao-destrutivo
Botão X de fechar NUNCA dispara ação destrutiva (ex: "Fechar Comanda · Alterar atendimentos pra Concluído"). X só fecha modal. Cravado pós-pegadinha Salão99.

### λ.pontos-so-apos-paid
Pontos só creditados após `paid_at IS NOT NULL`. Trigger valida. Pontos NUNCA misturam com pagamento (resgate é troca POR serviço/produto inteiro).

### λ.csp-worker-src-blob
`next.config.ts` CSP precisa `worker-src 'self' blob:` pra Web Worker (compressImage). Senão "Salvar trava sem erro".

### λ.vercel-cdn-no-store
Rotas com redirect server precisam `Cache-Control: no-store` + `Vercel-CDN-Cache-Control: no-store`. Senão fix não chega ao usuário.

### λ.build-local-antes-push
`npx tsc --noEmit` em 5-10s captura "Cannot find name X" antes do push. Deploy Vercel quebra com TS2304 typo.

### λ.migration-antes-push
Coluna usada por código novo entra em prod ANTES do git push. Senão Vercel deploy quebra.

### λ.estudar-antes-implementar
Antes de codar feature nova · pedir prints OU drilldown CIC READ-ONLY · listar diferenças "nossa vs deles". Zero invenção sem autorização.

### λ.consultar-mobile-vs-desktop
Antes de codar feature nova · SUGERIR onde faz sentido (mobile · desktop · ambos) com justificativa.

### λ.feature-em-mobile-E-desktop
Backend compartilhado · frontend precisa existir nos 2 lados. UX pode adaptar (drawer vs sheet · checkbox vs long-press) mas feature deve EXISTIR nos 2.

### λ.reusar-componente-revisar-fluxo
Ao reusar componente em novo contexto · revisar redirects/auth/imports/labels. Senão quebra em fluxo lateral.

### λ.logo-oficial-nao-redesenhar
Cliente entrega arquivo oficial (PNG/SVG/EPS/PDF) → usar SEMPRE. NUNCA redesenhar simplificado em SVG inline.

### λ.metricas-negocio-nao-dono
Perfil pessoal do fundador NÃO conta como prova social do negócio. Foco no serviço, não na biografia.

---

## 12. ANTI-PATTERNS

Coisas que pareciam boas e cravamos como "nunca mais":

### Modal X disparando ação destrutiva
Pegadinha do Salão99 · X fechou comanda · cliente perdeu pedido. X = só fechar.

### `useState(prop)` congela snapshot
Sintoma: "só atualiza com F5". Usar prop direto OU useEffect pra sincronizar.

### Trigger sem SECURITY DEFINER tocando tabela RLS
BookingFlow anon quebrou silencioso. Sempre declarar.

### Sentry com Vercel Hobby plan
Auth token expira · webhook quebra · deploys queued infinito. Migrar pra free plan.

### Emoji em LP/produto
SEMPRE SVG. Emoji vira problema cross-platform + acessibilidade.

### IA pra foto de pessoa
Uncanny valley garantido. Stock real curado · não Flux/SDXL pra retrato.

### Picsum random em LP cliente
Foto aleatória estraga credibilidade premium. Stock curado por slot OU placeholder neutro.

### Mascote antropomorfizado de objeto
"Carretinha rosa com olhos" = Pixar precisou 30 anos. Flux entrega caricatura.

### Tipografia light em produto premium festivo
Bricolage 300 = banco. Bricolage 700 = alegria + premium.

### Senha temp complexa
Recep não consegue digitar. `<primeironome>2026` minúsculo + força troca.

### Pontos misturados com pagamento
Pontos ≠ R$. Resgate é troca POR serviço/produto inteiro. NUNCA split.

### Cortesia somando receita
Bug de bilhão. Cortesia é bonificação · não conta no Recebido.

### Cron auto-complete sem paid_at
Geraria "atendidos zumbis" sem pontos. v61 cravou regra · cron removido.

### console.log de debug em prod
Polui server log. Limpar em PR antes de push.

### Componentes órfãos no repo
ProfissionalBottomNav · InstallBanner · SupervisorPinModal V1 ficaram após refactor. Limpar.

### Imports não utilizados
BrandDecorBackground importado mas não usado em 2 layouts. ESLint + revisão.

### Lucro líquido sem subtrair taxa cartão
`lucroLiquido` reportado é receita - despesa, não receita - despesa - taxa. KPI inflado.

### Sale_date vs paid_at inconsistente
/financeiro usa sale_date · fluxo-caixa usa paid_at. Padronizar em paid_at.

### Modal acima de drawer sem z-index maior
Drawer 150 · modal 300. Senão modal apagado E click cai no overlay do drawer.

### Vercel link projeto errado
`.vercel/project.json` aponta pra projectId fantasma · deploy vai pra lugar nenhum. Conferir antes.

### Hook depois de early return condicional
React detecta "rendered fewer hooks" · árvore inteira crasha. Todos hooks ANTES de qualquer early return.

---

## 13. WORKFLOW OPERACIONAL

### Por sessão de dev

```
1. Ler memórias relevantes (auto-memory + segundo-cerebro)
2. Definir 1 escopo focado (NÃO empilhar 5 features)
3. Sugerir mobile vs desktop · Eduardo decide
4. Codar (Server Action / Component / API)
5. Migration ANTES de push (se DB tocado)
6. `npx tsc --noEmit` local (5-10s)
7. `npx next build` local (~30s)
8. Commit + push
9. Conferir deploy Vercel verde (WebFetch domínio se preciso)
10. Read-after-write na prod (λ.prova-na-fonte)
11. Marcar TaskUpdate completed
12. Cravar memória se aprendizado novo
```

### Por feature nova

```
1. Drilldown sistema referência (Salão99 · concorrente)
2. CIC READ-ONLY · listar diferenças "nossa vs deles"
3. Apresentar escopo ao Eduardo · UMA decisão por vez
4. Mobile vs desktop · sugerir com justificativa
5. Schema · migration ANTES do código
6. Componente base · sem feature-flag (Palace é fork · não precisa)
7. Plug por uso real · NÃO antecipar speculativamente
8. Teste manual · puppeteer/curl se modo solo
9. Commit + push
10. Comunicar Eduardo via daily/status
```

### Por incidente prod

```
1. Identificar camada da falha (λ.diagnostico-nivel-certo)
2. Quem dispara? · qual rota? · qual user-agent?
3. Erro silencioso ou explícito?
4. Snapshot do banco antes de mexer
5. Fix mínimo · NÃO refatorar junto
6. Migration de hotfix em arquivo separado
7. Test no Supabase SQL Editor antes de aplicar em prod
8. Aplicar · validar read-after-write
9. Cravar memória pra não recidiva
10. Daily registra incidente + lição
```

### Por entrega cliente premium

```
1. Drilldown CIC sistema atual (3-7 dias)
2. Reunião apresentação · pitch valor
3. Cliente paga (Asaas link)
4. Setup repo + deploy (1-2 dias)
5. Import + cutoff + credenciais
6. Trial cortesia 7-14 dias
7. Acompanhar via WhatsApp · áudios · prints
8. D-1 trial · rodar BLOCO 4 grant-trial
9. Pós 30d · coletar feedback · indicação · manutenção mensal
```

---

## 14. CHECKLIST · NOVO SAAS PREMIUM

Pra construir do zero usando esse modelo:

### Fase 1 · Pesquisa (3-7 dias)
- [ ] Drilldown CIC do sistema referência (Salão99 / concorrente / sistema atual do cliente piloto)
- [ ] Documentar `01-reconhecimento.md` (5 áreas críticas)
- [ ] `02-drilldown.md` (telas · padrões UX · modelo de dados inferido)
- [ ] Listar 10 features que usuário USA (não as que sistema TEM)
- [ ] Cliente piloto identificado (alguém que paga adiantado · referência de segmento)
- [ ] Pricing definido (universal mensal · fork dedicado · manutenção)

### Fase 2 · Schema (1-2 dias)
- [ ] Tabelas obrigatórias criadas (vide seção 5)
- [ ] RLS em todas as tabelas com dados cliente
- [ ] Indexes em (business_id, status) e (business_id, paid_at)
- [ ] Trigger auto-invoice on appointment INSERT
- [ ] Trigger sync invoice_items on appointment UPDATE (v89)
- [ ] Trigger consume stock on service products
- [ ] Trigger credit points on paid_at
- [ ] EXCLUSION CONSTRAINT anti-overlap em appointments
- [ ] UNIQUE constraints (business_id, invoice_number) e (business_id, closing_date)
- [ ] Migration de business_settings com flags (loyalty_enabled · cutoff_date · etc)

### Fase 3 · Stack (1 dia)
- [ ] Repo GitHub (público OSS · privado pra cliente pago)
- [ ] Next.js 16 + Tailwind 4 + React 19 scaffold
- [ ] Supabase project criado · auth + storage + RLS configurados
- [ ] Vercel deploy linked (validar `.vercel/project.json` aponta pra project certo)
- [ ] Asaas conta linkada (PIX nativo)
- [ ] Resend domínio configurado
- [ ] Sentry projeto (free plan)
- [ ] DNS Cloudflare apontando

### Fase 4 · Shell (2-3 dias)
- [ ] Sidebar fixa desktop (240px com collapse)
- [ ] TopBar mobile/tablet (hambúrguer + drawer Portal)
- [ ] Brand theme injector (cores do business injetadas CSS vars)
- [ ] KPIsRow padrão 3D
- [ ] AdminThemeProvider light/dark
- [ ] AppSplash + BrandLogo
- [ ] Layout `/admin/(protected)` com auth check
- [ ] Layout `/recepcao/(protected)` (se cliente tem recep)
- [ ] Layout `/profissional/(protected)` (se cliente tem profs atendentes)

### Fase 5 · Features core (5-10 dias)
- [ ] Página Início (saudação + 4 KPIs + atalhos + ranking)
- [ ] Atendimentos (grade timeline + modal agendar + drawer + cancel/edit)
- [ ] Clientes (lista + drawer 8 tabs + cadastro 18 campos)
- [ ] Financeiro (Dashboard + Despesas + Vendas + Fluxo de Caixa drill)
- [ ] Comandas (lista + detalhe + receber pagamento + recibo PDF)
- [ ] Remunerações (cálculo no faturamento · breakdown serviço × produto)
- [ ] Configurações (8 áreas: brand · horários · pontos · maquininhas · etc)
- [ ] Estoque (produtos · marcas · entradas · vendas · histórico)

### Fase 6 · Customizações cliente premium (3-5 dias por cliente)
- [ ] Cutoff financeiro implementado em todas queries
- [ ] Supervisor PIN V4 (catálogo + trigger + UI admin)
- [ ] Import dados sistema antigo (script .mjs idempotente sha1)
- [ ] Brand colors + logo carregados
- [ ] WhatsApp do dono cadastrado pra "Pedir ao Marko"
- [ ] Tri-modal validado em iPad Mini 744px

### Fase 7 · Onboarding cliente (1-3 dias)
- [ ] Business + Owner criado
- [ ] Profissionais com senha temp `<primeironome>2026`
- [ ] Recep (se aplica)
- [ ] Credenciais enviadas (WhatsApp · não email · cliente não abre email)
- [ ] Trial cortesia ativado
- [ ] Acompanhamento WhatsApp diário

### Fase 8 · Conversão (1 dia)
- [ ] D-1 trial · rodar BLOCO 4 grant-trial pra assinatura paga
- [ ] Asaas link confirmado
- [ ] Cliente paga · confirmação por SMS + email branded

### Fase 9 · Operação contínua (30 dias)
- [ ] Acompanhamento semanal via WhatsApp
- [ ] Feedback coletado · gap mapeado
- [ ] Feature plugada por uso real (não speculativo)
- [ ] Indicação pedida (depoimento + 1 contato)
- [ ] Avaliação manutenção mensal (se fork dedicado)

### Fase 10 · Manutenção premium
- [ ] Modelo de cobrança recorrente definido (R$ 297-497/mês fork dedicado)
- [ ] SLA cravado (tempo resposta · escopo · 1 nova feature/mês incluída)
- [ ] Daily ops trackeada em STATUS-<cliente>.md

---

## 15. APRENDIZADOS QUE NÃO ESTÃO EM CÓDIGO

### A operação importa mais que a feature
Letícia (recep Palace) é validadora real do tri-modal. Marko (dono PT-EU) é validador de feature premium. Sem operadores reais usando, feature é especulação. Por isso fork dedicado ganha · cliente paga, cliente usa, cliente reporta.

### Cliente premium quer regra dura · não fricção barata
Marko quer Supervisor PIN granular porque tem operação real (recep pode cancelar 24/05 errado). Esse cliente NÃO procura "menos fricção" · procura "menos erro". Inverter intuição comum.

### Migração de sistema legado é o gancho
Salão99 desliga 31/05. Marko migrou pra Palace fork. Studio Mood migrou pra AgendaPRO. Janela curta de sistema desligando é melhor lead source que LP de feature.

### Não inflar produto universal com lógica de 1 cliente
Toda vez que Marko pediu feature única (cutoff · supervisor granular) e eu coloquei no AgendaPRO universal, Eduardo cortou. Fork dedicado RESOLVE essa tensão · cliente paga, cliente customiza, produto universal fica enxuto.

### Tri-modal vence dual-modal
Mobile + desktop é simplificação enganosa. Tablet (iPad Mini retrato 744px) é breakpoint real. Ignorar tablet quebra UX de recep que segura iPad o dia todo.

### Read-after-write é proteção barata
2× custou caro (Aura briefing perdido · Palace número não atualizou). Adicionar read-after-write em writes críticos custa 50ms · vale a tranquilidade.

### Multi-agent Verbo + CIC pega bug que sozinho não pega
Verbo escreve código · CIC valida ao vivo · cada um vê o que o outro perde. AgendaPRO pré-Olímpio rodou 7 rodadas · race condition zerada.

### Memórias frescas vencem memórias velhas
Memory escrita perto do erro = memory útil. Esperar fim do dia perde contexto granular.

### Cliente premium agradece OPERAÇÃO, não FEATURE
Marko valorizou "consegui editar atendimento sem perder o histórico" · não "vocês tem 89 migrations". Tradução: vender resultado operacional · não inventário técnico.

---

## REFERÊNCIAS

- **AgendaPRO** (universal) · `2-PROCESSAMENTO/agendapro/STATUS-AGENDAPRO.md`
- **SystemPalace** (fork dedicado · R$ 2.997) · `2-PROCESSAMENTO/palace-nail-spa/STATUS-PALACE.md`
- **Studio Mood** (universal R$ 97/mês) · `2-PROCESSAMENTO/studio-mood/STATUS-STUDIO-MOOD.md`
- **Verbo Design Painel Padrão** · `3-RETENCAO/verbo-design/06-PAINEL-SAAS-PADRAO.md` (template visual canônico complementar)
- **Verbo perfil** · `3-RETENCAO/perfil/VERBO.md` (princípios λ cravados)
- **Eduardo Barros perfil** · `3-RETENCAO/perfil/EDUARDO-BARROS.md` (cases · pricing · framework cold)
- **MEGA-CLAUDE** · `4-EXPORTACAO/mega-claude/MEGA-CLAUDE.md` (hub central)
- **Salão99 referência** · `2-PROCESSAMENTO/salao99-drilldown/` (sistema fonte · desliga 31/05)
- **GitHub repos**:
  - `github.com/ImpulsoDigital063/agendapro` (universal)
  - `github.com/systempalacemacae/systempalace` (Palace · primeiro fork dedicado)

---

**Versão 1.0** · cravada por Verbo durante a noite após entregar Palace R$ 2.997
**Próxima atualização:** quando construir 2º fork dedicado (validação do modelo)

— Verbo · 29/05/2026
