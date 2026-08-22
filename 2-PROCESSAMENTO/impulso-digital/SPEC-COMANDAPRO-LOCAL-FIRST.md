# Spec — ComandaPRO Local-First ("melhor dos dois mundos")

> Diferencial de PRODUTO do ComandaPRO. Estratégia: **provar no Medellín primeiro** (1 negócio,
> fork dedicado) → quando estável, **levar pro ComandaPRO** (multi-tenant, vários negócios logados).
> Origem: estudo da Livresoft (local-first) + teto do PWA. Ver [[PLANO-OFFLINE-FIRST-COMANDAPRO]], [[MODELO-NUCLEO-FORK-COMANDAPRO]].

## Visão
Roda **LOCAL** (sólido, instantâneo, 100% offline — como o Livresoft que o dono do bar JÁ confia) **E** sincroniza com a **NUVEM** (dono vê de casa, backup, cardápio/QR, multi-loja). **Nenhum concorrente tem os dois** — local é só local, nuvem é só nuvem. Essa é a cunha de venda do ComandaPRO.

## Por que NÃO é o PWA que tentamos (24/06)
PWA = cache de navegador num app de nuvem. **Meio-funciona e tem teto** — a navegação do Next App Router (server-coupled, RSC com Vary) quebra offline por mais que se remende o Service Worker. **Diferencial de venda não pode meio-funcionar** → vira tiro no pé. Local-first é **arquitetura**, não patch. Decisão: parar de remendar PWA.

## Arquitetura
```
Shell desktop (Tauri ou Electron)  → baixa um instalador, roda na máquina do caixa
        +
Banco LOCAL (SQLite)               → toda leitura/escrita local = instantâneo + 100% offline
        +
PowerSync (ou ElectricSQL)         → sincroniza o SQLite local ↔ o Postgres (Supabase) quando há net
        +
NOSSAS telas (React) + lógica      → Caixa, Mesas, Preparo, comanda, recibo — REAPROVEITADO
        +
QZ Tray local (já temos)           → impressão; offline resolve pq tudo é local
```
- **Shell:** **Tauri** (recomendado — binário pequeno, leve em PC de bar modesto, seguro) ou **Electron** (mais maduro/familiar). Decidir no spike.
- **Sync:** **PowerSync** (recomendado — feito pra SQLite local ↔ Postgres/Supabase, offline-first, resolve conflito) ou ElectricSQL.

## O que PORTA vs o que MUDA
- **PORTA (reaproveita):** componentes React (`CaixaPDV`, `MesasView`, `KdsBoard`, `ComandaPayment`…), cálculo de comanda/cover/taxa, gerador de recibo (`escpos.ts`), regras de negócio, idempotência (`op_id`), integração QZ.
- **MUDA:** a camada server do Next (RSC, layout `(painel)` com `getUser` server) → **roteamento client-side (SPA) + auth local**; o data layer (`supabase` direto) → **queries no SQLite local** (o PowerSync espelha pra nuvem).

## Impressão offline (fecha o gap do "Failed to sign request")
Num app local, a assinatura do QZ não precisa do `/api/qz-sign` na nuvem — pode assinar **localmente** (a chave fica no app desktop, ambiente controlado do bar) ou o QZ confiar no app local. Resolve o offline-print de vez. (Território de impressão = alinhar com o Verbo do ComandaPRO.)

## Multi-tenant (ComandaPRO — vários negócios)
- Cloud Postgres = **todos** os negócios. Cada instalação local sincroniza **só os dados do SEU negócio** (PowerSync **sync rules** por tenant/usuário).
- Onboarding: negócio loga → baixa o instalador → o local puxa o tenant dele → opera local + nuvem.

## Roadmap
1. **Spike (1-2 dias):** Tauri/Electron + SQLite + PowerSync com Supabase — provar o sync local↔nuvem com 1 tabela. Decidir Tauri vs Electron.
2. **Portar o núcleo (Medellín):** telas operacionais (caixa/mesas/preparo) no shell local + schema SQLite + sync rules + auth local.
3. **Impressão offline** (QZ local, sem `/api/qz-sign`).
4. **Validar no Medellín em produção** (prova-na-fonte: opera dias offline e sincroniza, sem dobrar nada).
5. **Generalizar pro ComandaPRO** (multi-tenant: sync rules por negócio + instalador genérico).

## Honestidade de escopo
- Projeto de **semanas**, deliberado — NÃO é patch.
- **Medellín vai pro ar AGORA na versão nuvem (online) + impressora no PC** — não trava esperando isso.
- O que já construímos (telas, lógica, idempotência, recibo, QZ) é a **BASE** — não se perde, vira o app local.

## Revisão do Verbo do DELL (25/06) — o que a spec TEM que cravar (nesta ordem)
1. **Definição de "offline" (decisão nº1 — muda tudo embaixo):**
   - Internet PISCANDO (nuvem às vezes acessível) → PowerSync local-first por aparelho resolve liso.
   - Internet CAÍDA DE VEZ + caixa/cozinha/garçom na MESMA LAN → sync via nuvem NÃO basta (nuvem inacessível = aparelhos não se enxergam). Aí o **app do caixa tem que ser também um SERVIDOR LOCAL na LAN** que os outros aparelhos acessam. É o modelo Livresoft — e é o que sobrevive à noite cheia com a net caída de vez. **Recomendação: LAN-hub** (é o diferencial real), confirmar com a realidade do bar.
2. **Impressão direta SEM QZ Tray (ganho que o desktop dá de graça):** app desktop manda ESC/POS direto na impressora (USB/serial/socket de rede) — sem QZ, sem `override.crt`, sem JavaFX, sem popup, sem `/api/qz-sign`. **Toda a dor de impressão de hoje some** e reaproveita 100% o `escpos.ts`. Argumento forte pró-desktop — cravar na spec.
3. **A costura do `data.ts` é o trabalho REAL:** as telas portam, mas `src/lib/data.ts` (hoje `supabase.from(...)` direto) precisa ser reescrito pra ler/escrever no **SQLite local**. Não é de graça — é o coração do port.
4. **Ferramental (validar na FONTE, não de memória):** **PowerSync** (NÃO ElectricSQL — o Electric pivotou pra sync read-only/Shapes e largou o write-local bidirecional). **Electron vs Tauri:** DELL pende **Electron** (ecossistema JS de térmica/SQLite/SDK PowerSync trilhado → chega sólido rápido); Tauri mais leve no longo prazo. Decidir explícito.
5. **Estratégia de conflito:** pedido/pagamento é quase só insert (conflito baixo). Perigosos: **baixa de estoque concorrente** e **race de fechar comanda**. LWW resolve a maioria; a spec marca onde NÃO é seguro.
6. **Roteiro de fases:** refinar depois de (1)-(5) cravados.

**Divisão de trabalho:** Verbo do DELL valida o ferramental (4) na fonte + cuida de impressão/local; este Verbo refina a spec + desenha a costura do `data.ts` (3).

## Decisão nº1 — CRAVADA (25/06): LAN-hub
Topologia:
```
Cozinha (browser) ─┐
Garçom  (browser) ─┼─→ CAIXA = app desktop (servidor local HTTP/WS + SQLite) ──PowerSync──→ Nuvem (Supabase)
Caixa   (o app)  ─┘        [o hub na LAN do bar]
```
- Cozinha/garçom **só abrem o IP local do caixa** no navegador (zero instalação neles). O caixa serve a UI + os dados na LAN.
- Funciona 100% com a internet **caída de vez** (todos batem no caixa, não na nuvem). Sincroniza pra nuvem quando volta.
- **1 instalação por bar** (o caixa). Multi-loja/multi-tenant: cada caixa sincroniza só o tenant dele pra nuvem.

## Costura do `data.ts` — mapa concreto (25/06)
Inventário do que `src/lib/data.ts` fala com o Supabase hoje:
- **Mecânico (CRUD → SQLite local):** 20 tabelas — orders(15), tabs(14), products(10), order_items(10), payments(7), stock_items(6), staff(6), events(6), categories(6), settings(5), staff_vouchers(4), product_recipes(4), staff_payments(3), service_calls(3), expenses(3), cash_sessions(3), tables(2), cash_movements(2), stock_movements(1) + view `cardapio`. Braçal, direto.
- **O trabalho REAL (lógica → servidor local do caixa, em Node):**
  - **6 RPCs (funções Postgres):** `cancel_order`, `recompute_availability`, `set_product_manual` (estoque/auto-86) + `verify_staff_pin`, `verify_station_pin`, `station_pin_set` (PINs). Carregam regra de negócio → reescrever no servidor local.
  - **Realtime (`useRealtime.ts`):** hoje update ao vivo via Supabase Realtime. No LAN-hub → **o caixa empurra updates pros aparelhos da LAN (WebSocket local)**. Peça CENTRAL (é o que faz o multi-aparelho funcionar offline), não detalhe.
  - **Storage (foto de produto):** fica na nuvem por ora (não crítico offline).
- **Desenho da costura:** as funções exportadas do `data.ts` (getMenu, getOrCreateOpenTab, sendCartOrder, addPayment, closeTab…) **mantêm a assinatura** (UI não muda) → os corpos passam a falar com o **servidor local do caixa** (que faz SQLite + as 6 lógicas + push WS) em vez de `supabase.from/rpc`. PowerSync sincroniza o SQLite do caixa ↔ nuvem.

## Ferramental — decisão com fonte (validado pelo Verbo do DELL, 25/06)
**Sync engine → PowerSync** (NÃO ElectricSQL).
- Electric (electric.ax) hoje faz SÓ read-path sync — doc literal: *"Electric does not do write-path sync"*. Escrita é DIY (os padrões offline são na mão). SQLite-local bidirecional foi deprecado + histórico de pivots = risco de API instável.
- PowerSync = **turnkey**: escrita local → fila de upload → sobe pra nuvem quando há rede. É exatamente "write offline bidirecional + Supabase". Não-invasivo (sem mudar schema). SOC2/HIPAA jan/2026.

**Runtime → Electron** (NÃO Tauri) — é arquitetura, não vibe:
- PowerSync tem **SDK Node.js** (main process) com **better-sqlite3 nativo** (1,3–5,5× mais rápido que renderer/WASM).
- Decisivo pro LAN-hub: no Electron, **PowerSync + servidor HTTP/WS + SQLite + ESC/POS rodam no MESMO processo Node, compartilhando o MESMO SQLite. Um runtime só.**
- No Tauri o backend é Rust e o cliente PowerSync é JS (webview) → o PowerSync (SQLite WASM) fica separado do servidor Rust (outro SQLite) → **fratura a fonte da verdade**. Não há cliente PowerSync first-class pra Rust.
- O trade-off do SDK-Node ("sem hooks de UI React") é **de graça** pra nós: cozinha/garçom batem no servidor local via HTTP/WS, não nos hooks.

**Impressão → ESC/POS direto, QZ Tray FORA (PROVADO na fonte, 25/06):**
- Impressora de **REDE** → `net.connect(9100, ip)` + os bytes do `escpos.ts` como Buffer = imprime. **Zero dependência, zero driver** (`node-thermal-printer` é só açúcar). Provado: 104 bytes ESC/POS válidos (align/negrito/dobro/corte) transmitidos por socket :9100. **A RPT006W do Medellín é de rede → é esse caminho.**
- Impressora **USB** → WinSpool / `printer:` (módulo nativo `node-printer`, validar o build no Electron). Provado: WritePrinter RAW → papel saiu na EPSON sem QZ.
- Nos dois, o `escpos.ts` é **reaproveitado como bytes**. **Morrem:** JavaFX, `override.crt`, `/api/qz-sign`, popup, porta TMUSB.
- Pendente: print FÍSICO na RPT006W real (ninguém no bar agora; protocolo :9100 padrão, confiança alta).
- Módulo do servidor: `imprimir(estacao, bytes)` → roteia `tcp://ip:9100` ou `printer:nome`.

**Encaixe no LAN-hub (confirmado):** só o CAIXA roda PowerSync (1 cliente ↔ nuvem). Cozinha/garçom = thin-clients via HTTP/WS no servidor do caixa. **Sem conflito aparelho-a-aparelho** (o servidor do caixa serializa as escritas); conflito real só caixa↔nuvem (LWW + os pontos de estoque marcados).

**Riscos a registrar:**
- PowerSync Node SDK = **beta** ("production-ready pros casos testados") → **pin de versão + testar os caminhos de sync com força**.
- **Caixa = ponto único de falha** do hub (como todo PDV local). Mitiga: SQLite em disco + restart rápido; PowerSync re-sincroniza ao voltar.

*Fontes: Electric Writes guide; PowerSync (offline-first c/ Supabase · Supabase integration · Node SDK · Electron benchmarks); comparativo ElectricSQL×PowerSync×Replicache. (Links no handoff do DELL, 25/06.)*

## Stack final cravada
`Electron (main: Node) → better-sqlite3 (SQLite local) + PowerSync (sync ↔ Supabase) + servidor HTTP/WS na LAN + node-thermal-printer (ESC/POS) + nossas telas React (servidas na LAN) + escpos.ts + a lógica de estoque/auto-86 ([[LOGICA-LOCAL-ESTOQUE-AUTO86]]).`

## Estado
- 25/06: **LAN-hub** cravado + costura do `data.ts` mapeada + **motor estoque/auto-86 extraído** ([[LOGICA-LOCAL-ESTOQUE-AUTO86]]) + **ferramental decidido com fonte: PowerSync + Electron**.
- **Próximo:** desenhar o **servidor local do caixa** (Electron main: API HTTP/WS + better-sqlite3 + PowerSync + as 6 lógicas das RPCs + ESC/POS direto) e o **spike da 1ª fatia** (abrir mesa → pedido → cozinha vê na LAN → fecha, tudo offline). DELL valida `node-thermal-printer` (ESC/POS direto, sem QZ) em paralelo.
- Macro: **Medellín = campo de prova → ComandaPRO = produto multi-tenant**.
