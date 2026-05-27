---
name: agendapro-estado-15-05
description: "Estado do AgendaPRO após sessão 14-15/05/2026 — migrations v42-v46 em prod, 6 features novas (import, cupom aniversário, cupom avulso, editar serviços, no-show punição, modal cliente expandido)"
metadata: 
  node_type: memory
  type: project
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

Estado do AgendaPRO após sessão 14-15/05/2026 (Eduardo + Verbo).

**Migrations aplicadas em prod (Supabase):**
- v42 · import de clientes (customers.birthday/notes/import_source · appointments.customer_id)
- v43 · permitir `provider='cortesia'` em subscriptions
- v44 · cupom avulso (coupons.is_standalone/professional_id + tabela coupon_redemptions)
- v45 · punição no-show (businesses.no_show_punishment_enabled/mode/fixed_points + appointments.reminded_3h)
- v46 · trigger apply_no_show_penalty AFTER UPDATE de status

**Features ativas (todas opt-in ou aditivas · zero quebra retrocompat):**
1. Import de clientes universal (CSV + XLSX · `/admin/configuracoes?tab=importar`)
2. Modal cliente com birthday/notes/import_source visíveis + editáveis
3. Booking público com campo aniversário opcional
4. Cupom de aniversário do mês (aba em `/admin/clientes/campanhas`)
5. Cupom avulso pra divulgação (aba na mesma página · 1 uso por telefone · profissional opcional)
6. Editar serviços do agendamento (botão lápis no AppointmentCard · pending/confirmed/completed/no_show)
7. Punição automática por no-show + lembrete email 3h antes (toggle em FidelidadeTab)

**Contas em prod (snapshot 17/05/2026):**
- Império Barbershop · `demo-imperio@agendapro.net.br` · slug `imperio-barbershop` · Equipe ativo · CONTA DEMO INTERNA do Eduardo (não cliente real · usada pra testar features)
- Erlane · teste antigo · ativo
- Viva Cacheada (Leticia) · `luanadsbispo`-ish · trial cortesia 90 dias até 2026-08-12 · usa Salão 365 paralelo · planilha 209 clientes esperando upload
- Palace Nail Spa Macaé (Luana da Silva Bispo) · `palacenailspamacae@gmail.com` · slug `palace-nail-spa` · Equipe Anual R$970 · cortesia 7d até 24/05/2026 · converte pra anual_pix no 8º dia

**Atribuição das 3 IDEIAS (editar serviços + no-show + cupom avulso):** memo anterior dizia "Olímpio (Império Barbershop)" — ERRADO. Olímpio é operador da Carretinha Kids (outro projeto). Quem pediu de fato precisa ser reconfirmado quando aparecer no chat.

**Pendências não bloqueantes:**
- Leticia (Viva Cacheada) subir CSV/XLSX dos 209 clientes
- Backlog técnico: UNIQUE constraint blindando relevar dupla · N+1 em getFocoDoDia · token cancelamento sem expiração (pré-existente)

**Why:** snapshot da entrega massiva da sessão (15 commits · ~6000 linhas · 5 migrations). Próximas sessões consultam pra saber o que tá ativo sem rever todo o histórico.

**How to apply:**
- Quando Eduardo perguntar "o que tem hoje no AgendaPRO?" · pode listar daqui sem ter que reler diários
- Quando codar algo novo · verificar se conflita com features ativas acima
- Diário detalhado da sessão fica em `agendapro/DIARIO-2026-05-14.md` · este é só o resumo de estado
- Linkar com [[agendapro-import-gap]] e [[viva-cacheada]] pra contexto adicional
