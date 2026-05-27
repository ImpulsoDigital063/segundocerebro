---
name: reusar-componente-revisar-fluxo-lateral
description: ao reusar componente existente pra novo contexto · revisar TODO o fluxo lateral (redirects · auth · imports · labels) · não só input/output · senão quebra no novo contexto
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Cravado por Eduardo em 21/05/2026 após bug: ao confirmar agendamento via `/admin/marcar` recém-criada (reusando `MarcarAgendamentoForm` da recepção), o sistema redirecionou Marko pra `/profissional/login`.

**Bug raiz:** form tinha `router.push('/recepcao')` hardcoded · `/recepcao` tem auth guard que rejeita Adm → fallback `/profissional/login` disparou.

**Why:** componente bem testado pode ter código auxiliar (redirects, labels, links) que assume um contexto específico. Reusar sem revisar deixa esse código original ativo no novo contexto · resultado: funciona pra input/output principal mas quebra em fluxo lateral.

**How to apply** quando reusar componente pra novo contexto:

1. **Antes de reusar · 1 minuto de revisão**:
   - `router.push` / `router.replace` · pra onde leva?
   - `<Link href>` · link aceita o novo contexto?
   - `useRouter` actions · todas válidas no novo contexto?
   - Labels/textos hardcoded · refletem o novo contexto?
   - `redirect()` em server components · destino correto?
   - Imports de `/lib/auth` ou similar · permitem o novo role?

2. **Padrão pra resolver**: adicionar prop opcional `context` / `area` / `mode` que controla os pontos divergentes:
   ```tsx
   type Props = {
     ...existing,
     area?: 'recepcao' | 'admin' // novo
   }
   // Redirect condicional:
   if (area === 'admin') window.location.href = '/admin'
   else router.push('/recepcao')
   ```

3. **Quando redirect cruza auth boundary** (ex: admin tentando ir pra rota de recep ou vice-versa) usar `window.location.href` em vez de `router.push`:
   - Full navigation força re-render fresh do server component
   - Evita race condition de session/auth context entre client-side route e server-side guard
   - Mais lento mas mais robusto

4. **Casos típicos de bug latente** na reusa de componente:
   - Form que faz redirect pós-save (ex: `MarcarAgendamentoForm`)
   - Modal que tem link "Voltar" hardcoded
   - Card com label de role ("Recepção · Marcar")
   - API endpoint chamado dentro que valida role específico

**Anti-pattern:**
- ❌ "Reusei o componente · funciona igual" sem revisar
- ❌ Mudar só os imports e parâmetros · sem checar router.push/Link/redirect
- ❌ Confiar que SPA route vai funcionar quando atravessa auth boundary

**Pro-pattern:**
- ✅ Antes de reusar · grep no componente por `router\.` `redirect\(` `href=` `Recep` ou similar
- ✅ Adicionar prop `area`/`context` que diferencia os pontos divergentes
- ✅ Usar `window.location.href` em redirects que cruzam auth boundary
- ✅ Testar fluxo end-to-end no novo contexto (criar + confirmar · não só abrir)

Linka com [[agendapro-autonomia-operacional]] · [[universal-nao-personaliza-cliente]].
