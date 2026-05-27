---
name: feature-nova-em-mobile-e-desktop
description: "toda feature nova no AgendaPRO precisa estar implementada NOS DOIS lados (mobile + desktop) · backend funciona pra ambos por padrão, mas o frontend tem que ter UX em mobile E desktop · não entregar só desktop e esquecer mobile"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Cravado por Eduardo em 21/05/2026 antes de começar a refatorar `/admin/financeiro/despesas`.

**Regra:** quando implementar feature nova no AgendaPRO, ELA TEM QUE ESTAR EM AMBOS lados (mobile `agendapro.net.br` + desktop `agenda-pro-seven.vercel.app`). Backend já é compartilhado por natureza. O **frontend** é onde costuma ficar buraco: cravo a versão desktop bonita e esqueço de adaptar pra mobile, deixando Olímpio/Erlane/Leticia sem a feature.

**Why:** os clientes pagantes em produção real (Olímpio R$67/mês, Erlane, Leticia trial) operam no celular. Se feature nova só existe em desktop, é exclusiva pro Palace · injusta com a base que paga. Painel é ferramenta operacional pra todos, não vitrine pro cliente premium.

**How to apply:**

1. **Antes de codar feature nova**, listar onde ela aparece em mobile E em desktop.
2. **UX pode ser diferente** entre os 2 (drawer lateral desktop vs bottom sheet mobile · checkbox bulk desktop vs long-press mobile) — desde que **a funcionalidade exista nos 2 lados**.
3. **Quando UX precisa divergir**, duplicar JSX com `sm:hidden` (mobile) + `hidden sm:block` (desktop) — respeitando [[agendapro-mobile-desktop-isolado]]. Cada lado controla seu próprio render.
4. **Quando UX pode ser a mesma** (chips de filtro, search, sort, dropdowns), implementar UM componente que se adapta naturalmente via responsive.
5. **Backend (API)** já é compartilhado · sem trabalho extra.
6. **Tabela de planejamento** antes de cada feature nova:
   ```
   | Feature | Mobile UX | Desktop UX | Isolamento? |
   |---------|-----------|------------|-------------|
   | Filtro categoria | Chips horizontais scroll | Chips inline | Mesmo componente |
   | Edit linha | Bottom sheet | Drawer lateral 480px | sm:hidden + hidden sm:block |
   | Bulk action | Long-press → bar fixed bottom | Checkbox + bar topo | sm:hidden + hidden sm:block |
   ```

**Anti-pattern (corrigido por essa regra):**
- ❌ "Vou cravar essa feature só pra Palace porque é exclusiva deles"
- ❌ "Bulk action é coisa de desktop, mobile não precisa"
- ❌ "Drawer fica melhor no desktop, em mobile não faz sentido"
→ Tudo isso é justificativa pra economizar trabalho. A feature precisa **existir** em mobile, mesmo que a UX seja simplificada.

**Combinação com regra anterior:** [[agendapro-mobile-desktop-isolado]] cuida do **ISOLAMENTO** (ajustes em um lado não vazam pro outro). Essa regra cuida da **COBERTURA** (feature nova existe nos 2). Juntas: cada lado tem todas as features, com UX adaptada, sem regressão cruzada.

Linka com [[palace-nail-spa]] (cliente desktop) · [[agendapro-estado-20-05]] (sessão Olímpio mobile rodou em paralelo).
