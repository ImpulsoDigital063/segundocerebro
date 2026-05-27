---
name: agendapro-estado-20-05
description: "Estado AgendaPRO pós-sessão 19-20/05/2026 · lista do Olímpio fechada + Portal em 26 modais + regra mobile/desktop cravada · pendente: avisar Olímpio e Palace fica na outra instância (Cowork)"
metadata: 
  node_type: memory
  type: project
  originSessionId: ff88481a-3d64-46bf-a2f5-3c8517f839c1
---

Sessão Eduardo + Verbo em 19/05 (entrou madrugada do dia 20). Fechou totalmente a lista do Olímpio que veio dos áudios de 16/05.

**Migrations novas aplicadas em prod (Supabase):**
- v60 · `manual_overlap_accepted` em appointments + constraint condicional · permite override manual do bloqueio de overlap quando profissional confirma "Salvar mesmo assim"
- v61 · trigger `credit_points_on_confirm` exige `paid_at IS NOT NULL` · pontos só creditam após pagamento confirmado · escuta UPDATE OF status, paid_at (cobre marcar pago depois via /payment endpoint)
- v62 · policy public SELECT em `business_blocks` pro BookingFlow público respeitar bloqueios (cliente leigo agora vê slots de almoço/folga/feriado como indisponíveis)

**Crons desativados:**
- `/api/cron/auto-complete` removido do `vercel.json` · marcava status='completed' sem paid_at · agora violaria regra v61 (geraria atendidos sem pontos)

**Features novas/refinos cravados:**
1. EditServicesModal vira Portal (escapa backdrop-filter do admin-card)
2. Truncate nome em mobile + botão lápis 40×40 mobile · 24×24 desktop
3. Warning amarelo + "Salvar mesmo assim" em conflito de horário (commit 54302da)
4. PaymentMethodModal vira Portal
5. NovoClienteModal vira Portal
6. Card mostra TODOS os serviços do agendamento em pílulas separadas (join `appointment_services(service_name)` em admin-data.ts, profissional/page.tsx, recepcao/page.tsx)
7. Menu "..." vira drawer inline (Eduardo escolheu B sobre Portal-com-posicionamento)
8. Botão "Atendi" branco removido (admin + profissional) · só fica "Atendi e recebi"
9. Opção "Atendido — pagar depois" removida do PaymentMethodModal
10. 11 modais portados em batch (Grupo A varredura · ConfirmAction, WelcomeModal, etc)
11. 12 modais portados em batch (Grupo B · sub-componentes + condicionais · inclui HorariosTab×4)
12. Regra mobile/desktop cravada em `agendapro/AGENTS.md` · isolar via Tailwind `sm:`
13. CSS `.admin-input` ganhou seletor standalone (sem `.admin-shell` ancestor) · resolve regressão do Portal em inputs
14. Botão lápis no `FinanceAppointmentList` · reusa EditServicesModal · honra promessa de áudio 12:45:34
15. BookingFlow público respeita business_blocks (v62)
16. Aba "Avulso" renomeada "Promoção" · card descoberta "Promoções e campanhas" em /admin/clientes
17. CupomAvulsoView refino V1+V2 · Como funciona + Preview WhatsApp em tempo real + radio Para Quem

**Total: 26 modais com Portal · ~18 commits · 3 migrations**

**Pendente:**
- Eduardo precisa **avisar o Olímpio** que tudo dele tá pronto pra testar
- Multi-profissional em cupom Promoção (selecionar 2+ profs) só vira quando plano Equipe pedir explicitamente
- Polir desktop Palace fica na outra instância (Verbo Cowork em `agenda-pro-seven.vercel.app`)

**Why:** snapshot pós-sessão enorme · próximas sessões consultam pra entender o que está em prod sem reler todos os diários · usado pra evitar trabalho duplicado quando voltar ao Palace na outra instância.

**How to apply:**
- Quando Eduardo perguntar "o que tem hoje no AgendaPRO?" pode listar daqui
- Quando codar algo novo, verificar se conflita com features ativas acima
- [[agendapro-mobile-desktop-isolado]] vale: qualquer ajuste de componente compartilhado precisa respeitar a regra cravada
- [[agendapro-estado-15-05]] é o snapshot anterior · este o substitui pra v60-v62
