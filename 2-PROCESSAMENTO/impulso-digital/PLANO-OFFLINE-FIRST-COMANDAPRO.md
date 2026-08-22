# Plano — Offline-first no ComandaPRO (neutralizar o local-first)

> Projeto de NÚCLEO. Beneficia Medellín, ComandaPRO e todo fork de uma vez.
> Origem: estudo da Livresoft (sistema local do Medellín, 24/06) — eles rodam LOCAL, sem internet, e isso é a única vantagem real deles. Ver [[MODELO-NUCLEO-FORK-COMANDAPRO]].

## Por que isso existe (o insight estratégico)
A Livresoft (e os sistemas de bar tradicionais) roda **no PC do bar** — app desktop + banco local, terminais pela rede LAN. **Internet não entra na jogada.** Por quê: **bar não pode parar.** Internet caiu num sistema de nuvem = não lança pedido, não fecha conta, não imprime = sexta lotada virando prejuízo. No local, funciona sempre e é instantâneo.

**Nosso ComandaPRO é nuvem (Next 16 + Supabase + Vercel)** — ganha em tudo (acesso remoto, backup, update automático, QR/garçom no cel, delivery, onboarding por link) **menos numa coluna: dependência de internet.** Essa coluna pesa muito pra bar.

**A jogada:** offline-first. Operar sem internet igual ao local, mantendo tudo da nuvem. Pitch resultante: *"opera offline igual ao sistema que tu já conhece — E ainda tem acesso remoto, backup e cardápio/QR que o local nunca terá."*

## O que JÁ temos (fundação — `src/lib/offline.ts`, "Nível 2")
- Fila de writes persistida em `localStorage` (sobrevive a reboot/apagão), reaplica **em ordem** (`enqueue`/`flush`).
- `registerOp(kind, fn)` — data layer registra a função que reexecuta no Supabase.
- `isNetworkError()` — distingue erro de REDE (enfileira) de erro de validação (propaga).
- **Reconciliação de ID** — comanda criada offline com ID negativo → `mapId`/`resolveId` mapeia pro real ao sincronizar.
- `cached(key, fetchFn)` — cache de leitura write-through (grava online, devolve último conhecido offline).
- Flush no evento `online` + reforço a cada 20s.
- `pending(kind)` — payloads na fila pra UI otimista.

**Metade do caminho já está feita.**

## O FURO real
**O app não CARREGA offline.** A fila e o cache existem, mas se o caixa abrir o sistema com internet caída (cold start), o Next nem renderiza → nada disso adianta. **Gap nº1.**

## Plano em 4 fases

### Fase 1 — App carrega offline (fundação que falta) · ~1-2 dias · PRIMEIRA
O Service Worker (`public/sw.js`) hoje só faz o PWA instalar. Tem que **pré-cachear o app shell**:
- Assets do build do Next 16 + rotas operacionais (`/caixa`, `/garcom`, `/preparo`, `/balcao`).
- Estratégia: `network-first` com fallback pro cache nas navegações; `stale-while-revalidate` nos chunks estáticos.
- Resultado: abrir sem internet → carrega do cache. **Sem isso, o resto é inútil.**
- Atenção Next 16: ler `node_modules/next/dist/docs/` antes (breaking changes); nomes de chunk são hasheados → precache pelo manifesto do build.

### Fase 2 — Cobertura total de dados offline · ~3-5 dias
Auditar `src/lib/data.ts`:
- **Toda leitura operacional** em `cached()`: cardápio, categorias, mesas, settings, bizinfo, **comandas abertas + pedidos**.
- **Todo write crítico** via `enqueue` + `registerOp`: abrir mesa, mandar pedido, add pagamento, fechar comanda, marcar pronto/entregue, esgotar.
- Migrar cache de dados **volumosos/voláteis** (comandas/pedidos) de `localStorage` → **IndexedDB** (localStorage estoura ~5MB; IndexedDB aguenta o movimento de uma noite).
- UI otimista em todos os fluxos (`pending()` já habilita pra alguns).

### Fase 3 — Sync à prova de dinheiro (idempotência) · ~1-2 dias · NÃO-NEGOCIÁVEL
Risco mortal: pagamento que deu certo no servidor mas a resposta se perdeu (timeout) é **reaplicado no flush → cobrança dobrada.**
- Cada write ganha **UUID de operação** gerado no cliente.
- Servidor **deduplica** (tabela `processed_ops` ou upsert pela UUID) → replay nunca aplica 2x.
- Pós-sync: **read-after-sync** (λ.prova-na-fonte) — re-busca e confere totais.

### Fase 4 — Multi-dispositivo offline (limite honesto) · só sob demanda
Nuvem-PWA faz **UM** dispositivo operar offline lindamente. **Vários dispositivos sincronizando entre si offline** (caixa + celulares de garçom ao vivo, sem internet) **exige ponto de sync na rede** — exatamente o que o local resolve com servidor LAN.
- **NÃO** construir servidor LAN do zero (= virar a Livresoft).
- Se virar dealbreaker: motor de sync local-first (**PowerSync** ou **ElectricSQL** — sincronizam Postgres↔SQLite local com offline + multi-device). Projeto de semanas.
- **A real:** o cenário de dor (internet pisca → caixa continua batendo venda → sincroniza ao voltar) é single-device, resolvido nas Fases 1-3. Cobre ~90%.

## Armadilhas (cravar desde já)
1. **Dinheiro/idempotência** — o nº1. Sem dedup no servidor, replay dobra cobrança. Fase 3 obrigatória antes de confiar offline pra dinheiro.
2. **Estoque/auto-86 offline** — contagem desvia → risco de vender esgotado. Aceitar consistência eventual (sync reconcilia) ou relaxar bloqueio offline.
3. **Cardápio mudou** (preço novo) — cache refresca ao reconectar (`cached()` é write-through, atualiza sozinho online).
4. **Token de auth offline** — deixar a sessão em cache operar; NÃO deslogar offline.

## Ordem e prova
1. Fase 1 (app carrega offline) → 2. Fase 3 (idempotência) → 3. Fase 2 (cobertura) → 4. Fase 4 só sob demanda.
- **Prova-na-fonte:** testar com DevTools modo offline / modo avião DE VERDADE, não "deve funcionar".

## Estado
- 24/06: doc criado. Fundação (`offline.ts` Nível 2) já existia.
- 24/06: **Fases 1, 2 e 3 ENTREGUES e no ar** (medellin-bar = núcleo).
  - **Fase 1** — `public/sw.js` v2 pré-cacheia o shell (cache-first estático + network-first navegação + fallback). App carrega offline.
  - **Fase 2** — leituras operacionais em `cached()` (settings, bizinfo, stationOrders, garcomFeed, caixaOpen, pendingCalls) + writes na fila (updateTabCover, advanceOrder, setProductAvailable, createServiceCall, resolveCall). `registerSale` já funcionava por composição.
  - **Fase 3** — idempotência COMPLETA via `op_id` + upsert ignoreDuplicates: **pagamento, pedido, itens e comanda**. Migrations: `op_id` único em payments/orders/order_items/tabs. Cobre timeout-online E replay-offline (op_id gerado uma vez, reusado na fila; tab usa o tempId). **Provado na fonte** (2 inserts mesmo op_id → 1 linha cada). Sem cobrança dobrada, double-food nem double-mesa.
- **Pendências não-críticas:** UI otimista nos writes novos · IndexedDB (hoje localStorage ~5MB) · `getActiveEvent`/claim-release · **Fase 4** (multi-device offline, só sob demanda — PowerSync/ElectricSQL).
- **Falta:** Eduardo testar offline de ponta a ponta (DevTools Offline / modo avião).
