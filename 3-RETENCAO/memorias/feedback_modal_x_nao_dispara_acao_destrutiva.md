---
name: feedback-modal-x-nao-dispara-acao-destrutiva
description: "Cravado CIC 26/05 · pegadinha do Salão99 · botão X de fechar modal disparou diálogo \"Fechar Comanda · Alterar atendimentos para Concluído\" · NÃO replicar"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Pegadinha observada no Salão99 (NÃO replicar):**

Quando CIC clicou no "X" de fechar do modal de Comanda Aberta no Salão99,
o sistema abriu OUTRO diálogo: "Fechar Comanda" com checkbox pré-marcado
"Alterar atendimentos para Concluído" e botões IGNORAR / CONFIRMAR.

**Por que é ruim:**
- "X" é universal pra "fechar sem ação" · usuário espera cancelar e cair fora
- Disparar ação destrutiva (alterar status de atendimentos pra concluído)
  quando o usuário só queria fechar é violação de princípio de menor surpresa
- Checkbox pré-marcado piora · usuário pode confirmar por reflexo
- Risco alto de operação acidental

**Regra cravada pro AgendaPRO:**
- `X` (ou ESC) sempre fecha sem persistir
- Ações destrutivas têm botão próprio explícito (verde/vermelho/laranja)
- Confirmações de ação destrutiva: checkbox SEMPRE desmarcado por padrão
- Nunca usar `X` como gatilho de fluxo paralelo

**Memórias relacionadas:**
- [[feedback_cic_salao99_marko_read_only]] — CIC só leu por isso, não persistiu
- [[reference_salao99_padroes_arquiteturais]] — Salão99 referência mas não cópia cega
