---
name: painel-saas-padrao
description: "padrão canônico de painel SaaS multi-tenant cravado em 18/05/2026 · vale pra AgendaPRO, Starteq e qualquer painel admin futuro · doc completo em segundo-cerebro/3-RETENCAO/verbo-design/06-PAINEL-SAAS-PADRAO.md"
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Eduardo cravou em 18/05/2026 que o que estamos construindo no AgendaPRO **não é específico** — é template de painel SaaS pra qualquer empresa, qualquer porte. Vai aplicar no Starteq ([[starteq-caixa-comissao-modelo]] · [[starteq-auditoria-painel]]) e em futuros painéis.

Padrão completo cravado em `segundo-cerebro/3-RETENCAO/verbo-design/06-PAINEL-SAAS-PADRAO.md` com 13 seções:
- Layout shell (sidebar fixa lg+, BottomNav mobile)
- Sidebar agrupada por função (Atendimentos · Financeiro · Catálogo · Equipe · Configurações · Outros)
- Cards-link estilo Salão99 (ícone outline + chevron + badge)
- Tabela operacional (busca borderless · filtros chip · paginação Ver mais · URL params)
- Drawer/popover lateral 420px
- Modal grande 600px
- Wizard 2 steps (selecionar → confirmar)
- Drill via página overlay sem sidebar
- Empty states minimalistas
- Loading state (tela branca + logo)
- Cores semânticas (verde/cinza/vermelho/amarelo) vs accent customizável
- Convenções de gráfico (donut + legenda · barras sólido vs dashed)
- Multi-tenant model
- Regras de negócio canônicas (numeração sequencial · comissão no faturamento · fluxo caixa derivado · templates configuráveis)
- Stack técnico (Next 16 + Supabase + TS + Tailwind + URL params)

**How to apply:**
- Quando começar novo painel (Starteq ou outro): abrir o doc + checklist final
- Quando construir nova feature no AgendaPRO: validar contra os padrões
- Quando divergir: cravar o porquê no doc (anti-pattern ou variante)
- Linkar com [[salao99-padroes-arquiteturais]] (schema de dados) e [[verbo-design-hub]] (hub principal)

Doc é vivo — atualizar conforme aparecem novos padrões ou anti-patterns.
