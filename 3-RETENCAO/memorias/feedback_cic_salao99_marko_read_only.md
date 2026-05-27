---
name: cic-salao99-marko-read-only
description: "CIC navegando no Salão99 logado como Marko (Palace) é ESTRITAMENTE READ-ONLY · não clicar em botões de ação, não digitar em forms, não salvar nada"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Quando o CIC (Chrome MCP) navega no Salão99 logado como Marko (Palace Nail Spa Macaé · cliente premium que paga R$970/ano), é **ESTRITAMENTE READ-ONLY**. Pode olhar, ler, tirar print, mapear UX e schema · NÃO PODE clicar em botões de salvar, deletar, criar, editar; NÃO pode digitar em forms reais; NÃO pode rodar nenhuma ação que altere estado.

**Why:** Eduardo cravou em 22/05/2026 madrugada: "Marko deixou isso muito explícito. Não pode alterar nada no Salão99". É a operação real do salão dele · 5+ atendentes · centenas de clientes · 1435 agendamentos importados pra cá vieram do banco real dele. Qualquer alteração acidental durante drilldown (cancelar agendamento, marcar pago, editar produto) seria visível pro Marko no dia seguinte, custaria a confiança que conquistamos pra fechar o R$970. Linkar com [[palace-nail-spa]] e [[salao99-fecha-31-05]].

**How to apply:**
- Antes de gerar prompt CIC pra navegar no Salão99: incluir aviso explícito no prompt "READ-ONLY · não clicar em Salvar/Excluir/Criar/Editar · só observar e descrever".
- Se precisar entender um fluxo de criação (ex venda avulsa), pedir CIC pra **abrir o form** e **descrever os campos sem preencher** · ou pra ver um registro JÁ EXISTENTE em vez de criar.
- Drilldowns escritos (relatórios) sempre · screenshots OK · ação de mudança NUNCA.
- Vale pra qualquer cliente do AgendaPRO logado em outra plataforma · não só Marko.
