---
name: universal-nao-personaliza-cliente
description: Feature universal (toda a base do AgendaPRO/Impulso) não pode ter copy/placeholder com nomes ou termos específicos de 1 cliente real
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

Quando feature é universal (vai pra TODOS os clientes do AgendaPRO/Impulso/etc), copy de UI · placeholders · mensagens automáticas NÃO podem referenciar:
- Nomes de clientes/operadores reais (ex: "o rapaz do Olímpio")
- Termos específicos de 1 nicho (ex: "cortar comigo" só serve pra barbearia · "fazer cabelo" só pra salão)
- Estrutura organizacional de 1 negócio específico

**Why:** Eduardo crava forte essa regra · "é uma configuração universal, todos os clientes do AgendaPRO vão usar". Personalizar com nome específico = imediatamente quebrado pra 99% da base. Em 14/05/2026: cupom avulso saiu com placeholder "Promo do rapaz" (do contexto Olímpio) e texto "Cupom pra cortar comigo" (só barbearia). Eduardo pegou na hora.

**How to apply:**
- Placeholders de input: usar 2-3 exemplos universais separados por · (ex: "Ex: Inauguração · Indicação de cliente · Black Friday")
- Mensagens automáticas: usar `{businessName}` em vez de fazer suposição de nicho
- Quando precisa variar por nicho (ex: templates Oi Sumido), criar Map `Record<CategoryKey, string[]>` em [[coupon-templates]] e usar `detectCategory()` pra escolher
- Antes de hardcoder qualquer copy: pergunta "isso vai fazer sentido pra salão? estética? psicólogo? personal? barbearia?" · se a resposta for "não" pra qualquer, é específico demais
- Comentários de código podem citar caso real (Olímpio, etc) como **contexto histórico**, mas UI nunca
