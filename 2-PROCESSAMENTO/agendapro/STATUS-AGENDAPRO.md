# STATUS-AGENDAPRO.md

**Produto:** AgendaPRO — SaaS de agendamento + gestão financeira + fidelização + reativação
**Fase:** 🟢 **EM PRODUÇÃO COM CLIENTES PAGANTES** · Asaas validado · Olímpio e Studio MOOD usando em operação real diária · onboarding ativo
**Data:** 16/06/2026 (atualizado — substituição total do status de 08/05)
**Responsável:** Eduardo Barros

---

## O que é

SaaS multi-tenant que **NÃO é só agendamento** — é a **ferramenta operacional completa do dono de pequeno negócio de serviço** (barbearia, salão, nail, tranças, estética, clínica, personal). 8 dimensões: agendamento + gestão financeira (Lucro Real) + reativação (Cupom de Retorno) + análises com forecast + fidelização (4 fontes de pontos) + organização + marketing (QR branded) + lógica de nicho.

**Proposta:** "Não é só agenda. É a operação completa do seu negócio." R$67/mês Solo · R$97/mês Equipe · concorrente cobra R$200-300/mês.

**Dois fluxos de operação atendidos:** agenda-first (marca e atende) **E balcão/walk-in** (atende e registra depois, sem agendar online — caso Izanara/MOOD e Palace). Priorizar fluxo de balcão; auto-agendamento online é secundário.

---

## Stack

- Next.js 16 (App Router) · ⚠️ versão com breaking changes — ler `node_modules/next/dist/docs/` antes de codar
- Supabase: Auth (SSR cookie) · Postgres · RLS estrito · service-role no server
- Resend (email transacional) · Z-API (WhatsApp)
- **Asaas** (cobrança — PIX nativo + cartão). MP é legado/descontinuado.
- Vercel (deploy + cron) — plano Hobby (cron limitado; cuidado com fila travada em pushes em sequência)

**Repositório:** `C:/Users/Usuario/agendapro` · GitHub: `ImpulsoDigital063/AgendaPRO` (checar `gh auth switch --user ImpulsoDigital063` antes do push)
**Vercel project:** `agenda-pro` · **Produção:** agendapro.net.br
**Disciplina de deploy:** `npx tsc --noEmit` antes do push · migration entra no banco ANTES do push · read-after-write em todo write crítico (λ.prova-na-fonte).

---

## Mobile × Desktop (regra cravada)

Mesmo codebase, dois fronts. **Mobile** (agendapro.net.br) = dono opera no celular, clientes em produção (Olímpio etc.) — é O principal, verificar responsividade real. **Desktop** = negócios maiores. Ajuste de um lado NÃO pode alterar o outro — isolar via breakpoint Tailwind (`sm:`). Feature nova deve existir nos dois fronts (UX pode adaptar).

**LIGHT-ONLY** (tema dark removido 03/06, cravado). `AdminThemeProvider` é pass-through; layouts `initialTheme='light'` fixo. Não tratar dark como feature.

---

## Billing (Asaas · em produção, validado)

**Modalidades:** mensal/semestral/anual em PIX (cobrança manual recorrente) · cartão (Asaas Subscription auto-renova via webhook).

**Máquina de estados:**
`active` → (vence) `past_due` + `grace_ends_at` (3 dias) → (carência vence) bloqueio no gate → `pending_payment` (paywall).

- **Webhook Asaas** (`PAYMENT_OVERDUE`) é a trava real: seta `past_due` + `grace_ends_at = hoje+3`. `PAYMENT_CONFIRMED`/`RECEIVED` reativa (`active`, limpa carência).
- **Gate** (`admin/(protected)/layout.tsx`): bloqueia se `pending_payment` | `cancelled` | `refunded` | (`past_due` E `grace_ends_at` vencido). NÃO usa `public_blocked_at`.
- **Cron `billing-check`** (diário, `0 11 * * *`): D-3 cria cobrança PIX + email; D-2/D-1/D0/D+3 lembretes; **fallback** — se o webhook falhar, garante `past_due` + grace 3 dias (mesmo modelo do webhook). Passo 2: expira trial/cortesia não-permanente (`permanent_courtesy` isenta Palace legado).
- **Asaas é PRODUÇÃO** (cobrança real). Quirk: `pix_link_atual` é o link válido; `asaas_payment_id_atual` pode ficar defasado (cron atualiza só o link no D-3).
- **Signup público travado** (07/06, após bot criar contas) — conta nasce só via admin server-side; não reabrir "Allow new users to sign up".

---

## Migrations (em produção · base V1–V11, recentes relevantes)

| # | Descrição |
|---|---|
| V9 | Trigger + exclusion constraint anti-overbooking (`appointment_range` tstzrange) |
| V40a/b · V60 | Overlap via EXCLUDE gist + override manual |
| V49 / V52 | Taxas de maquininha (merchant_devices/fees) + colunas cartão em appointments |
| V63 / V66 | Estoque (stock_movements · trigger AFTER INSERT soma quantity) + baixa por sale_items |
| V77 | Trigger auto-cria comanda (invoice) aberta quando appointment entra |
| v84 | package_items aceita produto (combo serviço+produto) |
| v85 | `subscriptions.permanent_courtesy` (expiração trial/cortesia) |
| v86 | `signup_attempts` (rate-limit cadastro) |
| v87 | colunas de cartão em `sales` (taxa flui pro líquido na venda direta) |
| **v88** | `products.variant_group_id` (variantes de produto · Caminho A) |

---

## O que evoluiu desde maio (estado atual das frentes)

- **Balcão "Registrar venda"** — atende+vende numa comanda só (serviço + produto na mesma conta, via rotas canônicas /items + /pay). Registro é ponto no tempo (duração não estoura range). Opção "Manter comanda aberta" (verde) pra pagar depois.
- **Vender Produto** — venda avulsa: pagar na hora (pix/dinheiro/cartão) ou depois, cliente avulso, taxa de cartão grava e flui pro líquido (v87).
- **Comandas** — adicionar serviço E produto por dentro; faturar; cancelar reverte estoque + remove comissão + apaga pagamento; "Receber pagamento" fecha. Pelo Vendas, botão verde "Pagar comanda #N" abre a comanda completa.
- **Variantes de produto** (v88, Caminho A) — cor/tamanho/sabor com preço+estoque por variante; lista agrupa num card; criar/adicionar/editar variante; pickers de venda agrupam (produto→variante). Multi-eixo Shopify (Tamanho×Cor) descartado por ora. Detalhe em memória `project_agendapro_variantes_produto`.
- **Comissão de produto = opt-in** — produto sem regra (`commission_type` null) = ZERO comissão (é do estúdio, não cai na % do serviço). No balcão, produto NÃO fica atribuído à profissional. Só comissiona com percent/fixed explícito.
- **Recebido por data de pagamento** (`paid_at`, não `appointment_date`); "A receber" inclui produtos pendentes da comanda aberta.
- **Recepção tri-modal** (sidebar desktop + drawer/bottom-nav mobile) · área profissional read-only · papel supervisor.
- **Monitoramento**: cron monitor + bot Telegram (4x/dia) + auditoria financeira semanal.
- **Google review fix** — link de avaliação extrai a URL de valor sujo (dono cola nome+URL juntos) — `lib/google-review.ts`.

---

## 8 dimensões do produto (evergreen)

1. **Agendamento** — cliente agenda 24h sem conta; lembrete D-1/H-1; lista de espera; auto-complete.
2. **Gestão financeira** — KPIs (Recebido/A receber/Faturado/Ticket); métodos pix/dinheiro/cartão/cortesia/pontos; comissão por profissional sobre PAGOS; despesas (7 categorias); Lucro Real (só mês).
3. **Análises** — forecast, comparativo mês, dia/hora pico, cancelamento, novos×recorrentes, top serviços/profs, insights em texto.
4. **Reativação** — Cupom de Retorno (sumidos 40+ dias, wizard 3 etapas, 9 nichos × 3 templates).
5. **Fidelização** — 4 fontes de pontos (agendamento, indicação, pontualidade, review Google) + recompensas. Pontos NUNCA viram R$ nem entram em pagamento.
6. **Organização** — abas; profissional comissionado/contratado; limite por plano (Solo/Equipe); horários com pausa/atalhos.
7. **Marketing** — QR branded + 3 templates de impressão.
8. **Lógica de nicho** — sample names, templates, sugestões e presets por nicho.

---

## Princípios cravados

1. AgendaPRO é educacional, NÃO ERP de cobrança ("A receber", não cobra sozinho).
2. Lucro Real só em escala mensal.
3. Pensar em uso em massa.
4. Lógica de nicho em tudo · UX faz o dono se sentir inteligente.
5. Facilita, não cria trabalho (feature julgada por reduzir cliques).
6. Estudar como JÁ funciona antes de codar (zero invenção sem ok).
7. Segurança: HMAC/timingSafe em tokens, RLS restritivo, trigger anti-overbooking, rotas service-role.

---

## Clientes (estado real)

| Cliente | Situação |
|---|---|
| **Olímpio Barbearia** | 🟢 PAGANTE · Solo R$67/mês PIX (Asaas) · opera no mobile diário · pagou junho (vencia 11/06, ciclo de cobrança+carência+bloqueio validado na prática 15/06) |
| **Studio MOOD (Izanara)** | 🟢 Onboarding ativo · tranças · usa balcão (serviço+produto na comanda) · reportando ajustes finos (comissão produto, variantes, UX) que vão sendo resolvidos |
| **Palace Nail Spa** | ⚠️ Virou produto PRÓPRIO independente (fork) — não é mais o AgendaPRO multi-tenant. Ver STATUS-PALACE. |
| Outros | trials/leads em avaliação (ver STATUS-IMPULSO) |

---

## Números

| Métrica | Valor |
|---|---|
| Clientes pagantes | Olímpio + Studio MOOD (em operação real) |
| Migrations | base + até **v88** |
| Preço Solo / Equipe | R$67 / R$97 mês (sem setup pro Clube Fundador 10) |
| Setup (cliente 11+) | R$197 |

---

## Pendências / próximos

- [ ] Studio MOOD: rodar a régua premium nas telas internas da recepção se ativar login da recepcionista (Marlia, hoje sem login)
- [ ] CAPTCHA Turnstile no cadastro (confirmar chave não-sensitive live)
- [ ] 4 fixes de performance documentados pra quando chegar ~80 clientes ativos
- [ ] Multi-eixo de variantes (Tamanho×Cor) só se cliente pedir

**Próxima atualização:** quando entrar novo cliente pagante, mudança grande de billing, ou nova leva de features. Substituir (não duplicar).

---

**Ver também:**
- Hubs: [[MEGA-CLAUDE]] · [[HUB-AGENDAPRO]] · [[EDUARDO-BARROS]]
- Status correlatos: [[STATUS-IMPULSO]] · [[STATUS-STUDIO-MOOD]] · [[STATUS-PALACE]]
- Conhecimento: [[AGENDAPRO-ROADMAP]] · [[AGENDAPRO-ANALISE-COMPETITIVA]] · [[AGENDAPRO-SEGMENTOS]]
