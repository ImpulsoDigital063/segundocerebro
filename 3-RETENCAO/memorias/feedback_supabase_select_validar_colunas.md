---
name: supabase-select-validar-colunas
description: "Supabase JS · ao escrever SELECT com colunas, validar que TODAS existem no schema; coluna inexistente faz query falhar silenciosamente com data=null + error preenchido, mas se o código só checa `if (!data)` sem ler `error`, vira loop/null silencioso"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Em queries Supabase JS, NUNCA confiar na memória que uma coluna existe — sempre validar contra o schema real. Coluna inexistente NÃO da erro de tipo no TypeScript (porque `select('a, b')` retorna `Record<string, unknown>` genérico), mas em runtime retorna `{ data: null, error: { message: 'column X does not exist' } }`.

**Why:** 17-18/05/2026, sessão Palace Nail Spa. Após 6+ horas debugando "loop infinito de login" da Letícia (recepcionista), o bug era `/recepcao/(protected)/page.tsx` fazendo `select('id, name, business:businesses(id, name, slug, points_per_professional)')` — coluna `points_per_professional` NÃO EXISTE em businesses (eu inventei achando que existia). Query retornava `data=null`, código fazia `if (!recep || !recep.business) redirect('/profissional/login')`, virando loop. Servidor renderizava /recepcao (layout passava), mas page redirecionava antes do JSX. Logs no layout mostravam tudo OK e o renderizing nunca acontecia (porque page erra antes).

**Reincidência 18/05/2026** (1 dia depois): `GradeTimeline.tsx` usou `select('..., customer_name, ...')` em `appointments` — coluna correta é `client_name` (legado da schema original). Grade desktop renderizava vazia ("0 agendamentos") mesmo com 1435 imports do Salão99 no banco. Diagnóstico só descobriu o erro DEPOIS de adicionar `if (error) console.error(...)` em script de debug. Schema real de `appointments`: `client_name, client_phone, client_email, client_id, customer_id` (cuidado: tem `customer_id` mas NÃO `customer_name`).

**Reincidência #2 · 18/05/2026** (mesmo dia, horas depois): `/admin/colaboradores/[id]/page.tsx` usou `select('id, name, email, phone, ...')` em `professionals` — coluna `phone` NÃO existe. Query retornou `data=null + error preenchido`, código caía em `notFound()`, página exibia 404 mesmo prof existindo. Schema real de `professionals`: `id, name, email, photo_url, commission_percentage, employment_type, is_receptionist, active, default_commission_percent, ...` — sem `phone`. **Padrão recorrente: assumir que tabela TEM colunas comuns (phone, customer_name) quando na verdade são `client_*` ou simplesmente não existem.** Solução cravada: SEMPRE adicionar `console.error` em queries críticas server-side ANTES de cair em notFound/redirect.

**How to apply:**
- Antes de escrever `select('a, b, c')` em código novo: validar via `node --env-file=.env.local -e "..."` com SELECT 1 linha pra ver o schema real
- Tools úteis: `\d table_name` no psql, `select column_name from information_schema.columns where table_name='X'` no Supabase
- Em queries com JOIN tipo `business:businesses(a, b)`: validar **as colunas do JOIN também** — falham igual
- Sempre logar o `error` retornado em queries críticas: `if (error) console.log('SELECT failed:', error.message)` — pra debugar rapidamente em runtime
- Em código com redirects baseados em data, considerar logar o motivo: `if (!recep) { console.error('recep null', error); redirect(...) }` — em vez de redirect silencioso
- Pra UI crítica de auth/redirect, sempre adicionar logs server-side TEMP até validar o fluxo completo
- Linkar com [[filtrar-recomendacoes-de-outros-agentes]] (mesma família: validar antes de cravar)
