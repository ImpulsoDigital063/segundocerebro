---
name: feedback-composicao-visual-exige-operacoes-granulares
description: "Entidade que compõe múltiplos itens (comanda, pacote, kit, carrinho) precisa de operações POR ITEM desde V1 · não basta só operações no agregado · Eduardo apontou após eu entregar Cancelar comanda inteira sem ter Cancelar item"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Quando entregar uma entidade que **agrega itens** (comanda com serviço+produto, pacote com N sessões, kit com N produtos, carrinho com N linhas), as **operações por item** (adicionar, remover, editar quantidade, alterar preço) são requisito de V1, não V2.

**Operações no agregado SEM operações no item gera:**
- Reversão grosseira (cancela tudo quando o usuário só quer mexer em 1 item)
- Bug silencioso quando o cenário real exige granularidade
- Frustração de quem usa: "como eu tiro só esse produto sem cancelar a comanda inteira?"

**Conjunto mínimo de operações pra qualquer agregado:**
1. Criar item dentro do agregado (já tinha · "Adicionar produto" no FaturarComandaModal)
2. **Remover item** (botão lixeira em cada linha)
3. Editar quantidade/preço do item (modal inline)
4. Operação no agregado inteiro (cancelar/reabrir) — só depois das individuais

**Why:** cravado 24/05/2026 após eu entregar Comanda V1 com só "Cancelar comanda inteira" (cascateia tudo). Eduardo cancelou pra testar e viu que o serviço também foi estornado quando ele só queria estornar o produto. Frase: "na verdade voce deveria ter feito isso. outro vacilo".

A reversão em cascata da comanda inteira É necessária, mas é a operação de exceção (estorno total). A regra é granularidade item-a-item.

**How to apply:**
- Antes de entregar UI de agregado, listar mentalmente: "se o usuário quiser mexer em 1 item específico, ele consegue?". Se NÃO → implementar operação por item ANTES de declarar V1 pronta
- Tabela de itens dentro de um agregado SEMPRE tem coluna de ação (mínimo: remover)
- Vale pra: invoice_items, package_sessions, sale_items, recurring_appointments, customer_credits agrupados

Linka com [[entidade-financeira-nova-varrer-agregadores]] (ambos são casos de "deixei passar coisa óbvia" · padrão: faltou pensar em cenário real do usuário) e [[diagnostico-nivel-certo]] (cancelar comanda inteira era a camada errada · a camada certa era item individual).
