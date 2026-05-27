---
name: react-usestate-initial-prop-snapshot
description: useState(prop) só usa a prop na PRIMEIRA renderização · não atualiza quando o pai passa nova prop · usar a prop direto ou useEffect pra sincronizar
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

`useState(prop)` em React **só usa o valor inicial na primeira renderização**. Quando o componente pai re-renderiza e passa nova prop (ex via `router.refresh()`), o state local CONGELA no snapshot original e ignora a prop nova.

Regra: pra dados read-only que vêm do pai, **usar a prop diretamente** sem `useState`. Pra state derivado, usar `useEffect([prop])` que sincroniza explicitamente.

**Why:** AgendaPRO 22/05/2026 madrugada · `/admin/produtos` ficou com bug "só atualiza com F5". `ProdutosView` declarava `const [products] = useState<Product[]>(initialProducts)`. Após movimentar estoque ou editar produto, o `router.refresh()` rodava no client, o server re-fetchava, passava nova `initialProducts` MAS o state ignorava. Eduardo gastou tempo procurando bug no fluxo de save/banco quando o problema era no client.

Fix: `const products = initialProducts` direto · re-render natural quando prop muda. E pro `selectedProduct` (objeto único derivado da lista), `useEffect([initialProducts])` que acha pelo id e atualiza · ou fecha drawer se soft-delete sumiu.

**How to apply:**
- Em componente Client que recebe lista do Server: NUNCA `useState(initialList)` se a lista é puramente read-only.
- Pra produto "selecionado" / "aberto no drawer" derivado da lista: useEffect sincronizando pelo id quando a lista mudar.
- Sintoma típico do bug: feature funciona no banco, log no servidor mostra OK, mas UI fica congelada · só atualiza com F5.
- Linkar com [[feedback_prova_na_fonte_persistencia]] (read-after-write) — esse aqui é o equivalente client-side: read-after-prop-change.
