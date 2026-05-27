---
name: rls-no-subquery-self
description: Supabase RLS · NUNCA fazer SELECT na própria tabela dentro de USING/WITH CHECK · vira infinite recursion · usar function SECURITY DEFINER ou eliminar a subquery
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Postgres RLS em Supabase NÃO pode ter SELECT na MESMA tabela dentro de USING/WITH CHECK — dispara `infinite recursion detected in policy for relation "X"`.

**Why:** quebrado em 17/05/2026 (Palace Nail Spa). v47 cravou `CREATE POLICY "recepcao ve profissionais" ON professionals FOR SELECT USING (EXISTS (SELECT 1 FROM professionals me WHERE me.auth_user_id = auth.uid() AND me.is_receptionist = true))`. Toda query em professionals disparou erro, login do profissional caía em fallback `/admin → /cadastro`. v48 dropou a policy (cobertura redundante com "publico ver profissionais" using active=true).

**How to apply:**
- Ao escrever policy em tabela T: USING/WITH CHECK NÃO pode conter `SELECT ... FROM T` (mesma tabela)
- Se precisar consultar T pra autorizar T: criar FUNCTION com `SECURITY DEFINER` que bypassa RLS, USING chama a function. Exemplo: `CREATE FUNCTION is_user_recep_of(biz uuid) RETURNS boolean LANGUAGE sql SECURITY DEFINER AS $$ SELECT EXISTS(SELECT 1 FROM professionals WHERE business_id = biz AND auth_user_id = auth.uid() AND is_receptionist = true) $$`
- Subquery em tabela DIFERENTE (T1 fazendo SELECT em T2) é OK — mas se T2 tiver policy que faz subquery em T1, aí volta o loop transitivo
- Testar policy nova ANTES de cravar em prod: simular login via supabase-js com anon key e fazer SELECT que dispare a policy — se der erro, refator antes de aplicar
