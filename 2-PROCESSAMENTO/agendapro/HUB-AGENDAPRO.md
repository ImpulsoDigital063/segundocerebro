# 🟢 HUB · AgendaPRO (universal SaaS)

> **O que é:** entry point pra tudo relacionado ao AgendaPRO produto universal.
> Distingue do fork dedicado [[STATUS-PALACE]] (palace-system · R$ 2.997).

---

## 📦 O que é o AgendaPRO

SaaS multi-tenant de agendamento + gestão pra negócios de serviço (salão · barbearia · clínica · estética).

- **Repo:** `github.com/ImpulsoDigital063/agendapro`
- **Domínio:** `agendapro.net.br/<slug>`
- **Stack:** Next.js 16 · React 19 · Supabase · Vercel · Asaas
- **Pricing:** Solo R$ 67/mês · Equipe R$ 97/mês · Equipe Anual R$ 970

Ver [[STATUS-AGENDAPRO]] pra status canônico.

---

## 👥 Clientes pagantes/trial

| Cliente | Plano | Status |
|---|---|---|
| Olímpio (barbearia) | Solo R$ 67/mês | ✅ Pagando · uso diário |
| Letícia (Viva Cacheada · esposa Gabriel) | Trial 90d Equipe | 🟡 Em uso |
| Erlane (EV Suplementos) | trial | 🟡 |
| Studio Mood (Izanara) | Trial 7d → Equipe R$ 97 | 🟡 Conversão 05/06 |
| Marko/Luana (Palace) | Migrou pra fork [[STATUS-PALACE]] | ✅ Saiu pra R$ 2.997 |

---

## 🎯 Dailies operacionais

| Data | Marco |
|---|---|
| [[2026-05-08]] | [[DIARIO-2026-05-08]] · billing completo validado + Olímpio entregue |
| [[2026-05-11]] | Olímpio entregue ao vivo · 1º pagante 100% online |
| [[2026-05-14]] | Maratona migrations v42-v46 · 6 features novas |
| [[2026-05-19]] | Maratona AgendaPRO · 11 features Palace · padrão Salão99 |
| [[2026-05-20]] | Lista Olímpio fechada · 26 modais Portal |
| [[2026-05-26]] | 🚨 P0 Olímpio booking quebrado · v77 hotfix |

Ver [[project_agendapro_estado_15_05]] · [[project_agendapro_estado_20_05]] pra snapshots.

---

## 🏗️ Arquitetura

### Migrations principais (v1-v89)
- v15 trigger pontos
- v40 race condition cleanup (EXCLUSION CONSTRAINT)
- v42-v46 maratona Olímpio
- v47 receptionist-role · trigger has_business_id
- v49 merchant-fees (taxas maquininha)
- v50 brand-colors
- v51 cash-closings
- v52 installments-pix-fee
- v54 invoices V1
- v56 customer-extended (18 campos)
- v59 expenses-import-id (idempotência)
- v60 override overlap warning
- v61 pontos só após paid_at
- v62 business_blocks RLS public
- v64 brands + categories + stock
- v65 product-photos bucket
- v66 suppliers + entries + sales
- v67 acquisition_channel + primary_need
- v68 service_product_consumption
- v69 sales.invoice_id (comanda)
- v70 trigger auto-invoice
- v71 trigger só pra pending/confirmed
- v72 loyalty_enabled
- v74 manual_discount
- v75 commission breakdown
- v76 packages V1
- v77 hotfix booking público (SECURITY DEFINER)
- v78 extra_professional_slots
- v79 campos Salão99 em professionals

### Triggers críticos
- `auto_create_invoice_for_appointment` (v70/v71) · cria invoice no INSERT
- `credit_points_on_confirm` (v61) · pontos só após paid_at
- `check_appointment_overlap` · EXCLUSION CONSTRAINT antifolds
- `apply_no_show_penalty` · trigger no-show

### Regras de negócio cravadas
- [[feedback_pontos_nao_misturam_com_pagamento]] · pontos = troca por item
- [[feedback_agendapro_autonomia_operacional]] · sistema opera sem depender do Adm
- [[feedback_agendapro_mobile_desktop_isolado]] · Tailwind responsive
- [[feedback_feature_nova_em_mobile_e_desktop]] · frontend nos 2

---

## 🔥 Gaps vs Salão99 (referência)

[[project_agendapro_gap_salao99]] · Marko cravou "Salão99 acabou rodando ele" em 22/05.

Drilldown CIC em `2-PROCESSAMENTO/salao99-drilldown/`:
- [[reference_salao99_padroes_arquiteturais]] · padrões UX + regras de negócio + schema canônico
- [[reference_salao99_caixa_drilldown]] · caixa avançado é opt-in
- [[reference_salao99_pacotes]] · catálogo + form documentado
- [[reference_salao99_pdf_recibo_layout]] · padrão fatura monocromático
- [[reference_salao99_export_24h]] · export 24h · janela download 3 dias
- [[reference_agendapro_e_ferramenta_de_gestao_multi_segmento]] · gestão > agendamento

Salão99 **desliga 31/05/2026** · janela curta · ver [[project_salao99_fecha_31_05]].

---

## 🎨 UX e padrões

| Padrão | O quê |
|---|---|
| [[06-PAINEL-SAAS-PADRAO]] | Template canônico painel SaaS |
| [[reference_painel_saas_padrao]] | Padrão canônico |
| [[reference_cortesia_removida_ui_desktop]] | Cortesia removida desktop |
| [[reference_vantagem_pdf_whatsapp_vs_salao99]] | PDF via WhatsApp diferencial |
| [[feedback_modal_x_nao_dispara_acao_destrutiva]] | Pegadinha Salão99 |

---

## 📈 Insights estratégicos

- [[reference_canal_aquisicao_chatgpt_aeo]] · ChatGPT manda lead (Studio Mood)
- [[reference_insight_studio_mood_agenda_secundaria]] · agenda é secundária · loja é core
- [[feedback_produtos_diferencial_equipe]] · catálogo produtos exclusivo Equipe R$ 97
- Avaliar SKU "Loja" sem agenda (R$ 47-57) · backlog estratégico

---

## 🔗 Conexões

| Doc | O quê |
|---|---|
| [[STATUS-AGENDAPRO]] | Status canônico |
| [[STATUS-PALACE]] | Fork dedicado · R$ 2.997 |
| [[STATUS-STUDIO-MOOD]] | Próximo trial |
| [[MODELO-SAAS-PREMIUM]] | Template replicável (AgendaPRO + Palace consolidados) |
| [[PALACE-PENDENCIAS]] | Histórico pré-fork (obsoleto · ver STATUS-PALACE) |
| [[AUDITORIA-UX-DOPAMINA]] | Auditoria UX |
| [[RODADA-VISUAL-LP-CASHBARBER]] | Rodada visual |
| [[AGENDAPRO-DIFERENCIAIS-VENDAS]] | Diferenciais vs concorrência |
| [[AGENDAPRO-STORIES-INSTAGRAM]] | Stories Insta |

---

**Cravado:** 29/05/2026
