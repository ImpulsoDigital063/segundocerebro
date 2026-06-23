# Auditoria do sistema Medellín PDV — checklist "vira produto"

> Auditoria de 3 frentes (segurança/produção · UX/visual/white-label · lógica/bugs), 18/06/2026.
> Veredito: protótipo sólido e funcional (passou no teste real do Medellín), mas é "feito pra UM bar em modo demo". Pra rodar com dinheiro de verdade e virar produto vendável → 3 camadas de ajuste abaixo.

## 🔴 P0 — antes de rodar com dinheiro de verdade

1. **Painel admin SEM login.** `src/app/(painel)/layout.tsx` não tem gate; sem middleware. Qualquer um com a URL acessa /financeiro, /dono, /caixa. PIN só trava cozinha/bar. → middleware + auth real (Supabase Auth ou PIN admin server-side via RPC).
2. **RLS `using(true) with check(true)` em TODAS as tabelas** (schema.sql + migrations). Anon key (exposta no browser) faz CRUD + DELETE total em payments/cash_sessions/cash_movements/expenses/staff via REST. → policies reais; mover escrita financeira/destrutiva pra RPC security-definer ou Route Handler com service-role.
3. **Trigger de estoque conflitante** — RESOLVIDO 18/06. `migration-stock-trigger.sql` (antiga, só match por nome) e `migration-ficha-tecnica.sql` (completa, com product_recipes) definiam o mesmo `trg_consume_stock`. Banco do Medellín tinha a CERTA ativa (verificado: usa ficha técnica). Arquivo antigo neutralizado (vira ponteiro) pra fork novo ser determinístico.
4. **Falhas silenciosas em toda a camada de dados.** addPayment/closeTab/advanceOrder/serveDose/registerStaffPayment/claimDelivery ignoram `error` do Supabase → "Salvo!" sem prova. getFinance/getCaixaSummary fazem `data ?? []` sem checar error → relatório mostra R$0 calado se a query falhar. Viola λ.prova-na-fonte. → checar `error` nos writes/leituras críticos.

## 🟡 P1 — antes de vender como produto / multi-cliente

5. **Tabelas staff/settings/stock_items/stock_movements NÃO versionadas** (só no banco vivo) → não dá pra provar que staff.pin está protegido pelo repo. → versionar + auditar `pg_policies`/grants no banco (`\dp staff`).
6. **White-label: marca "Medellín" hardcoded em ~12 arquivos** sem fonte única (ticket.ts já tem `BIZ` mas isolado; AppSidebar, page.tsx splash, MenuClient, GarcomScreen, StationScreen, qr/page.tsx, layout.tsx, manifest, PrintTicket). → `src/lib/brand.ts` (name/tagline/city) + componente `<Wordmark/>`; title/manifest via env no build.
7. **Token `--gold*` mente** (globals.css:18-21: nome diz dourado, valor é vermelho #c8102e). Dezenas de usos (bg-gold/text-gold/btn-gold). Confunde cada cliente novo. → renomear `--brand/--accent` (replace global, 1x).
8. **`payments` sem `session_id`** → conferência de caixa pode atribuir venda à sessão errada (getCaixaSummary filtra só por paid_at >= opened_at). → adicionar session_id no addPayment.
9. **Estoque com race condition** — serveDose/abrirGarrafa/baixaUnidade/ajusteEstoque fazem read-modify-write no client, refazendo o que o trigger já faz atômico no banco. 2 garçons = dose perdida. → usar RPC `consume_stock_item` (já existe).
10. **Relatório de Noites recalcula `pessoas×cover`** (getFinance/getCoverByEvent) em vez do cover efetivamente cobrado → cover fantasma se houver isenção manual. → persistir `cover_charged` no closeTab e usar esse campo.
11. **`claimDelivery` não lê resultado** do update (`.is delivering_by null`) → 2 garçons "assumem" a mesma entrega, ambos veem sucesso. → `.select()` + checar se afetou linha.
12. **Fotos de categoria por ID fixo** (MenuPicker CAT_IMG[17]/[5]…) → outro bar com outros IDs fica sem foto. → coluna `image_url` na categoria.

## 🟢 P2 — polimento

- Alvos de toque <44px (split +/− h-7, imprimir cupom, toggles switch w-9 h-5).
- `alert()`/`confirm()` nativos na tela do cliente (MenuClient) e EstoqueManager → toast/modal do padrão.
- `viewport.userScalable:false` bloqueia zoom (acessibilidade no app do cliente).
- `themeColor:#0b0a09` global (preto) mas admin é claro → barra de status destoa.
- **QR impresso com cor dourada errada** (`qr/page.tsx` #9c732f, resquício do tema dourado antigo) — material físico com cor de marca errada.
- `.theme-dark --border` bege/dourado → hairlines amareladas no cliente vermelho-neon.
- `/mesa/5` fixo no menu "Ver como cliente" (comanda fantasma se não tem mesa 5).
- Toggles mostram "Salvo!" sem read-after-write (CardFeesEditor, StationPins) — λ.prova-na-fonte.

## ✅ O que está BOM (não mexer)

- Chave do QZ segura (só env QZ_PRIVATE_KEY, qz-cert.ts só expõe cert público), zero secret hardcoded, .env.local gitignored.
- PIN de estação bem protegido (revoke SELECT + RPC verify_station_pin security-definer).
- Visual coeso e premium (design system maduro, dark-cliente/claro-admin, **zero emoji** confirmado, só SVG).
- Mobile bem coberto (sm:/lg: corretos, drawers, sem quebra em 390px).
- Matemática financeira conceitualmente correta (taxa 10% só sobre consumo, cover separado, fee de cartão Bruto−Taxa=Líquido).

## STATUS (atualizado 18-19/06)
**Feitos:** #3 trigger ✅ · #4 robustez (read-after-write) ✅ · #6 white-label brand.ts ✅ · #8 session_id ✅ · #10 cover_charged ✅ · #11 claimDelivery atômico ✅ · #12 foto por categoria no banco ✅ · maioria dos P2 ✅ (zoom liberado, QR cor de marca, alert→toast no cliente, borda tema escuro, /mesa/1, feedback de erro nas taxas).

**Adiados (com motivo):**
- #1 auth + #2 RLS + #5 versionar tabelas → **go-live hardening**: Eduardo decidiu que só entram **quando o cliente contratar de fato** (protótipo em validação não precisa de login/RLS endurecido ainda). É a fila do "vira produção".
- #7 renomear `--gold`→`--accent` → **dívida cosmética** (mass-replace arriscado, valor só de clareza-dev; trocar a cor de cliente novo já basta mudar 1 valor no globals.css).
- #9 race condition do estoque manual → baixa probabilidade (UI manual de admin, não o garçom; o trigger de venda já é atômico). Fica pra depois.
- P2 restante: alvos de toque <44px (alguns), `confirm()`→modal no EstoqueManager.
