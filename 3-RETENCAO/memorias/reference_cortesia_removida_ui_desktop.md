---
name: reference-cortesia-removida-ui-desktop
description: Cravado Eduardo 25/05 · Cortesia removida da UI desktop da comanda · Salão99 não tem · API mantida pra histórico
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Cravado por Eduardo 25/05/2026:**

Eduardo conferiu o Salão99 e cravou que NÃO tem opção "Cortesia" na comanda
deles. Decidimos remover a opção do AgendaPRO porque ninguém pediu, e se
algum cliente premium (Marko, Izanara) demandar, adiciona depois.

**O que foi removido (UI desktop):**
- Botão `♥ Cortesia` (rosa) do topo da comanda
- Função `marcarCortesia` e `doMarcarCortesia` em ComandaDetalhe.tsx
- State `courtesyLoading`

**O que foi MANTIDO (pra histórico):**
- Rota `POST /api/admin/invoices/[id]/courtesy` (caso comandas históricas)
- `METHOD_LABEL.courtesy = 'Cortesia'` em todos os lugares (exibição)
- Mobile/PaymentMethodModal NÃO mexido (regra: mobile e desktop isolados)
- payment_method='courtesy' em comandas antigas continua funcionando

**Why:** Salão99 não tem · ninguém pediu · UI fica mais limpa. Eduardo
cravou que prefere adicionar features quando cliente real pede do que
manter por hipótese.

**How to apply:**
- Se Marko (Palace) ou outro pedir "cortesia/brinde" depois: voltar o botão
  e o fluxo facilmente (código preservado em git history · API ainda existe)
- NÃO adicionar de volta sem pedido específico de cliente real
- Mobile (Olímpio) NÃO mexido · se Olímpio usar Cortesia em comandas, segue
  funcionando pelo PaymentMethodModal antigo
