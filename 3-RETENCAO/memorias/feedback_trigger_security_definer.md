---
name: feedback-trigger-security-definer
description: 26/05 · trigger que modifica tabela com RLS forte precisa SECURITY DEFINER · senão quebra fluxo público (anon) silenciosamente
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Todo trigger que faz INSERT/UPDATE em tabela com RLS forte
(`invoices`, `customers`, `cash_closings`, `coupon_redemptions` etc.)
precisa ser declarado com `SECURITY DEFINER` + `SET search_path = public`.

**Why:** P0 de 26/05/2026 — trigger v70 `auto_create_invoice_for_appointment`
foi criado sem SECURITY DEFINER. Funcionou pra Adm/recep (auth.uid()
bate em RLS), mas quebrou silenciosamente o BookingFlow público:
cliente anon insere appointment → trigger dispara como anon → RLS de
`invoices` bloqueia → INSERT do appointment cancelado → "Erro ao
agendar" sem log claro. Olímpio só descobriu pela reclamação do cliente
(Donis). Bug latente do dia 24/05 até 26/05.

Fix foi v77: ALTER FUNCTION adicionando SECURITY DEFINER.

**How to apply:**
- Toda função PL/pgSQL que será chamada por trigger AFTER INSERT/UPDATE
  e que toca em outra tabela com RLS por business_id/owner_id, **declarar
  `SECURITY DEFINER` desde a primeira versão**.
- Sempre incluir `SET search_path = public` pra mitigar hijack via schema
  (recomendação Supabase oficial).
- Pra cada trigger novo, mentalmente perguntar: "fluxo público (anon)
  vai disparar isso?" — se sim, SECURITY DEFINER obrigatório.
- Funções `SECURITY INVOKER` (default) só servem quando você QUER que
  o caller tenha permissão própria (raro).

**Sintoma que volta:** UI mostra erro genérico tipo "Erro ao salvar /
agendar / criar" mas o `console.log` do erro só fala "row-level
security policy" ou retorna `null` data + null error em alguns casos.
Sempre que ver isso num fluxo anon, primeira hipótese é trigger sem
SECURITY DEFINER.

Linkado em: [[feedback_diagnostico_nivel_certo]] (é exatamente o caso
de "diagnóstico no nível certo" — sintoma era UI, mas raiz era trigger
SQL, dois níveis abaixo).
