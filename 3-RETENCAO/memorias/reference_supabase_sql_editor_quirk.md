---
name: supabase-sql-editor-quirk
description: Supabase SQL Editor não limpa buffer corretamente entre runs · sempre abrir aba nova ao trocar de bloco SQL
metadata: 
  node_type: memory
  type: reference
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

O editor SQL do Supabase tem comportamento esquisito: quando você cola um bloco SQL novo POR CIMA de um antigo (mesmo usando Ctrl+A + Delete), pedaços do SQL antigo PODEM ficar no buffer. Resultado: tentar rodar dá `syntax error` em linhas que parecem do bloco anterior.

**Sintoma:** print mostra editor com linhas duplicadas, SQL parcial misturado com novo, ou erro tipo `syntax error at or near "CREATE"` quando o SQL colado parece correto.

**Solução cravada (14/05/2026 com Eduardo):**

1. Sempre que for rodar bloco SQL NOVO em prod, abrir **aba nova de SQL** (botão `+` no topo das tabs do Supabase SQL Editor).
2. Aba nova garante editor limpo · zero risco de mistura.
3. Migrations grandes: quebrar em **blocos menores numa aba cada** (ex: v44 saiu em 4 blocos · v45+v46 em 6 blocos).

**Por que não confiar em Ctrl+A+Delete:**
- Aparentemente o foco do cursor não é interceptado direito em alguns estados
- Buffer mantém referência ao bloco anterior em alguns casos
- Reproduzido 3x na mesma sessão (Eduardo tentou e falhou)

**Custo da prática:** abrir 1 aba a mais a cada bloco · ~2s por aba · evita 10-30min de debug.

Como aplicar: ao escrever instruções de migration pro Eduardo aplicar em prod, sempre incluir explicitamente "**abre aba SQL nova**" antes de cada bloco. Não confiar em "limpa o editor e cola".
