---
name: modal-acima-drawer-zindex
description: Modal aberto a partir de um drawer/overlay precisa ter z-index MAIOR que o drawer; senão fica visualmente apagado E captura cliques no overlay do drawer
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Modal disparado de dentro de um drawer/overlay (ex: ConfirmActionModal aberto dentro de AppointmentDrawer) precisa de `z-index` MAIOR que o drawer, não menor. Padrão sugerido: drawer 150, modal 300.

**Why:** AgendaPRO 21/05/2026 · drawer com z-150 + modal com z-100 quebrou em 2 níveis no mesmo bug:
1. Visual — o overlay escuro (rgba 0.5) do drawer cobria o modal, fazia parecer "apagado".
2. Funcional — o click no botão de confirmar atravessava o modal (z menor) e batia no overlay do drawer (z maior, com `onClick={onClose}`), fechando o drawer sem nunca disparar a action. Sintoma reportado: "cliquei em cancelar mas o agendamento continua lá".

Cravado depois de eu ter atacado as camadas erradas: primeiro RLS (rota server-side com read-after-write), depois cache (force-dynamic na page). Nenhuma das duas era a raiz. λ.diagnostico-no-nivel-certo cravado em [[feedback_diagnostico_nivel_certo]] — antes de codar segundo fix, conferir se o fetch ESTÁ saindo. Se "sem erro vermelho na tela" + "ação não aconteceu", primeira hipótese é click sendo capturado por overlay acima.

**How to apply:** ao abrir modal de dentro de drawer/overlay, conferir o z-index do container do drawer e cravar o modal pelo menos 2x acima (ex: drawer 150 → modal 300). Vale pra qualquer combo overlay-em-overlay: bottom-sheet, popover dentro de drawer, drawer dentro de modal. Quando bug "click sem efeito" sai sem erro no console, abrir devtools no botão e ver qual element responde ao click.
