---
name: painel-starteq-padrao
description: padrão específico do Painel Admin Starteq · aplicação do PAINEL-PROFISSIONAL ao contexto e-commerce + ERP físico Tocantins · 3 personas (Júnior dono + atendente + técnico montador)
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Documento cravado em `C:/Users/Usuario/segundo-cerebro/2-PROCESSAMENTO/starteq/05-PAINEL-ADMIN-PADRAO.md`. Aplica o padrão canônico de painel SaaS ([[painel-profissional-conhecimento]]) ao contexto único do Starteq (loja física + e-commerce + montagem de PCs).

**Diferenças do AgendaPRO (que é só serviço):**
- 3 personas operacionais (Júnior dono · atendente loja · técnico montador) — não 2 (Adm + recepção)
- 2 modos: e-commerce (pedido online · Asaas · frete) + ERP físico (caixa balcão · OS · estoque presencial)
- Sidebar agrupada diferente: LOJA · CATÁLOGO · ESTOQUE · FINANCEIRO · CONFIG · OUTROS
- API consumível IA é diferencial central (Júnior tem GPT pessoal que consulta catálogo)
- Categorias de produto NÃO hardcoded (CPU/RAM/GPU) — Junior cadastra dinamicamente
- OS montagem é tabela separada de pedido online (relação opcional)

**Padrões cravados específicos Starteq:**
- Tabela produtos com avatar QUADRADO (não circular · produto não é pessoa)
- Estoque < 5 badge vermelho · estoque 0 linha cinza
- Status pedido com chips coloridos (6 estados: aguardando_pag → pago → montagem → pronto → entregue → cancelado)
- WhatsApp automático ao marcar OS "pronto" (Z-API ou Twilio)
- Comissão técnico % sobre OS finalizada (padrão Remunerações AgendaPRO replicado)
- Compatibilidade CPU↔Mobo↔RAM↔Fonte via JSON rules engine (não if/else hardcoded)

**Anti-patterns cravados:**
- Hardcodar enum de categoria · usar tabela editável
- Painel sem multi-papel desde dia 1 · estrutura com role desde init
- Email manual "pedido pronto" · automatizar via webhook
- Login sem 2FA mexendo em dinheiro · magic link + 2FA opt

**Fases de implementação:**
1. MVP shell + CRUD produtos (1-2d)
2. Operacional · OS + WhatsApp + estoque + caixa (3-5d)
3. Avançado · comissões + compatibilidade + API IA (5-7d)
4. Diferencial · Asaas webhook + NFe + import SAP (3-5d)

**Quando usar:** sempre que codar feature do painel Starteq, consultar esse doc + o canônico antes. Aplicar princípios do canônico, adaptar conforme as adaptações específicas Starteq.
