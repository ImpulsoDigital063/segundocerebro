# Painel SaaS · Padrão Cravado

**Cravado em:** 18/05/2026
**Origem:** sessão Palace Nail Spa Macaé · AgendaPRO replicando padrões do Salão99 (sistema que desliga 31/05/2026)
**Aplicável em:** AgendaPRO · Starteq · qualquer painel SaaS multi-tenant futuro

---

## Filosofia

Painel de gestão SaaS pra qualquer empresa de qualquer porte segue um conjunto cravado de padrões UX + arquiteturais. O segredo é tratar o painel como **ferramenta operacional** (não app marketing), com layout consistente em todas as telas, navegação primária via sidebar, e cada feature focada em UMA responsabilidade.

Esse documento cristaliza os padrões que descobrimos auditando o Salão99 e construindo o AgendaPRO. Daqui em diante, qualquer painel novo (Starteq · outros) começa a partir desse template mental.

---

## Layout Shell (estrutura base)

### Sidebar fixa esquerda
- Largura: 256px (expandida) · 72px (colapsada)
- Posição: `fixed`, top-bottom
- Background: `var(--admin-surface)`
- Borda direita 1px
- Breakpoint mínimo: **lg (≥1024px)** — abaixo disso, BottomNav mobile

### Agrupamento de itens
Sidebar **agrupada por função** com header de seção em uppercase pequeno:
- ATENDIMENTOS · FINANCEIRO · CATÁLOGO · EQUIPE · CONFIGURAÇÕES · OUTROS

Cada grupo tem 2-8 itens. Itens "Em breve" ficam visíveis (não escondidos) com badge cinza — mostra roadmap pro cliente.

### Header de view
Cada página tem header sticky com:
- Título grande à esquerda (h2)
- Sub-título com nome do negócio (h3 cinza)
- Ações à direita (botões pequenos · refresh · theme toggle · logout)

### Conteúdo principal
- `max-w-7xl` em desktop · `max-w-lg` em mobile (mantém UX mobile intocada)
- Padding generoso (`px-8 py-6` em lg)
- Background gradient sutil + vignette nos cantos (atmosfera premium)

### BottomNav
- Só aparece em < lg (mobile/tablet)
- 4-5 itens com ícone + label
- Posicionado fixed bottom com safe-area-inset

---

## Cards-link (índice de sub-páginas)

Quando uma seção tem múltiplas views/relatórios, vira **índice de cards-link**. Nunca página monolítica com 10 widgets — sempre **um índice com cards**, cada card abre sub-página focada.

### Anatomia do card-link
```
┌─────────────────────────────────────────────┐
│  [ícone outline]  TÍTULO BOLD               │
│  cinza claro      Descrição cinza 12-13px   │  →
│                   (1-2 linhas)              │
└─────────────────────────────────────────────┘
```

- Card branco/surface · borda thin · padding generoso (~20px)
- Ícone outline (não preenchido) topo-esquerda em accent color
- Título h3 bold
- Descrição cinza · 1-2 linhas
- Chevron `>` à direita centralizado vertical
- Badge "Novo" em pill colorida canto sup-esq (opcional)
- Badge "Em breve" em pill cinza pra features inativas
- Grid 2 cols em desktop · 1 col em mobile
- Cards "Em breve" com `opacity: 0.5` e `cursor: not-allowed`

### Exemplos cravados
- `/admin/relatorios` (AgendaPRO · 10 cards-link)
- `/admin/financeiro` (futuro · 6 cards-link com mini-gráficos)
- Aplicável em Starteq pra Relatórios · Configurações · Análises

---

## Tabela operacional

Pra listas densas (Clientes · Vendas · Colaboradores):

### Header
- **Busca borderless** com ícone lupa azul · placeholder contextual · debounce 300ms on-type
- **Filtros dropdown-chip** horizontal · 1-3 dropdowns inline (Tipo · Situação · Período)
- **Ações topo-direita**: refresh ↻ · novo + · export ⤓ · ajustes ≡

### Tabela
- Densidade média · linhas ~50px
- **Sem zebra striping** · só divisor horizontal sutil
- **Avatar circular placeholder cinza** mesmo quando sem foto (importante: cliente vazio também tem placeholder forte)
- Checkbox bulk-select à esquerda quando há ações em massa
- Kebab `⋮` no fim da linha pra ações por row
- Header cinza claro com colunas labeled em uppercase pequeno
- Tipografia tabular-nums em valores monetários e datas
- Status na última coluna com cor por estado (verde · cinza · amarelo · vermelho)

### Paginação
- **Virtual scroll** ou **"Ver mais N de Y"** (não números de página)
- Para listas datadas: navegação por mês (chevrons + label clicável)

### URL params
- Filtros + busca + offset salvos na URL (`?status=paid&q=joao&offset=100`)
- Link compartilhável + back/forward do browser funciona

---

## Drawer/Popover lateral

Pra ações rápidas em items de uma tabela (sem sair da lista):

- Fixed `right-0 top-0 bottom-0`
- Largura: ~420px desktop · 100vw em mobile
- Background `var(--admin-surface)` · borda esquerda
- Box-shadow forte pra destacar
- Overlay escuro atrás (`rgba(0,0,0,0.4)`)
- Clica fora = fecha · Esc = fecha · ✕ canto sup-dir = fecha

### Estrutura interna
```
┌─ Header (5 ícones de ação + ✕) ─┐
│ [✈ Enviar] [✏ Editar] [🗑 Excluir] [👤 Cliente] ··· [✕]
├──────────────────────────────────┤
│
│  Título (h2 bold)
│  Sub-info (cliente, prof)
│  Data por extenso · janela horária
│
│  R$ VALOR (texto grande)
│
│  [Status dropdown]
│
│  [Linha de status secundário · cor por estado]
│
│  [BOTÃO CTA AZUL GRANDE]
│
└──────────────────────────────────┘
```

---

## Modal grande (entidade importante)

Pra Comanda · Fatura · Detalhe de Pagamento · etc:

- Centered overlay
- Largura: ~600px
- Background branco/surface
- Padding 24px
- Header com título + ícone de impressora + ✕
- Sem sidebar atrás (foco total na entidade)
- Botão CTA principal canto sup-dir em ALL CAPS

---

## Wizard 2 steps

Pra ações que precisam confirmação + ajuste:

**Step 1: Seleção**
- Tabela com checkboxes (pré-marcados)
- Sumário rodapé (Subtotal · Total)
- Botão CONTINUAR no canto sup-dir

**Step 2: Confirmação + ajuste**
- Card centralizado (~400px)
- Resumo do que foi selecionado
- Form com campos editáveis (Data · Valor · Observações)
- Botões: Voltar (text) · Salvar (azul preenchido)

Exemplos: Faturar Comanda · Pagar Remuneração · Importar Dados

---

## Drill via página overlay

Quando precisa ver detalhe de uma célula sem perder contexto:

- Página `/detalhe-X` full-screen
- **SEM sidebar** (foco total no detalhe)
- Header: seta voltar + título + ação principal sup-dir (EXPORTAR)
- Sub-título: "Origem / Período / Lista detalhada"
- Tabela com colunas focadas no que importa
- Painel lateral direito com resumo agregado (~280px)

---

## Empty states

Sempre minimalistas:

```
        Nenhum X foi encontrado
       [+ Cadastrar X]  (outline)
```

- Texto centralizado · cinza médio
- Sem ilustração na maioria (exceção: features ativadas com CTA chamativo · ex: "Ativar agendamento online")
- CTA outline button (não preenchido) — convida sem ser invasivo

---

## Loading state

Padrão Salão99 cravado: **tela branca + logo centralizado**. Sem skeleton, sem spinner, sem progress bar.

Pra AgendaPRO usamos splash component próprio. Pra Starteq podemos espelhar.

---

## Cor de marca

Cada cliente premium tem paleta customizada (multi-tenant):
- `--admin-accent` (cor primária CTA · botões · links)
- `--admin-bg` / `--admin-surface` / `--admin-surface-hi` (camadas)
- `--admin-text` / `--admin-text-mute` / `--admin-text-faded` (tipografia)
- `--admin-border` / `--admin-divider` (bordas)

Em **estados** sempre usar cores semânticas (não accent):
- Verde `#10B981` = sucesso · pago · confirmado
- Cinza = pendente · neutral
- Vermelho `#EF4444` = erro · cancelado · alerta crítico
- Amarelo `#F59E0B` = alerta médio · pendente de ação

---

## Convenções de gráfico

- **Donut com legenda lateral** (lista barras horizontais coloridas + valor R$ à direita)
- **Comparativo**: barra sólida (atual) vs barra dashed-outline (anterior/projetado)
- **Sparkline** inline (path SVG simples · sem libs)
- Cores fortes saturadas (azul royal · laranja · rosa · verde lime · ciano)
- Sem animação no carregamento

Stack recomendado: SVG inline pra sparklines · Recharts ou ApexCharts pra gráficos complexos.

---

## Multi-business / Multi-tenant

Quando 1 conta gerencia várias empresas (Salão99 padrão):

- Página `/negocios` com tabela leve
- Badge "Selecionado" no negócio ativo
- Ação "SELECIONAR" outline pros outros
- Status visual de problema (plano vencido em vermelho)
- Modelo limpo de troca de contexto

AgendaPRO ainda não tem · gap funcional cravado pra próxima fase.

---

## Padrões de regras de negócio (modelo de dados)

### Comanda/Fatura/Invoice
- Numeração **sequencial global por business** (sem reset anual)
- Status: `open` · `closed` · `cancelled`
- 3 tabelas: `invoices` · `invoice_items` (FK polimórfica via `item_type` + `reference_id`) · `invoice_payments` (multi-pagamento por comanda)
- Comissão calculada NO FATURAMENTO (não no agendamento)
- Edição retroativa permitida → recalcula remunerações

### Comissão / Remuneração
- Config por colaborador: tipo (Simples · Avançada) · % default · override por serviço · regra de taxa · regra de desconto · regra de gorjeta
- Vales = adiantamentos (tabela separada `professional_vouchers`)
- Salários = entidade separada (tabela `professional_salaries`)
- Pagamento de comissão: tabela `commission_payments` com period_start/end + paid_amount

### Fluxo de Caixa
- **Não tem tabela própria** · é view derivada
- Receitas = `invoice_payments.paid_at`
- Despesas Gerais = `expenses`
- Despesa automática "Taxa de Forma de Pagamento" = calculada por venda paga com taxa
- Saldo Inicial = derivado do Saldo Final do período anterior (sem campo manual)

### Templates configuráveis
- Fichas de Cliente · Comissões Avançadas · Formas de Pagamento
- Cliente recebe ficha aplicando template → preenche campos do template
- Schema: `*_templates` (definição) + `*_responses` (preenchimento)

---

## Stack técnico recomendado

- **Next.js 16** com App Router
- **Supabase** (Auth + Postgres + RLS + Storage)
- **TypeScript** estrito
- **Server Components** pesados · **Client islands** só onde precisa state (filtros, popover, wizard)
- **Tailwind CSS** + CSS variables customizáveis por tenant
- **URL params** pra estado de UI (filtros, paginação)
- **`@supabase/ssr`** pra cookies httpOnly
- **Vercel** pra deploy · cuidado com Hobby plan (fila trava)
- **Migrations em SQL** versionadas (v1, v2, ..., vN)

### Patterns críticos
- RLS policies que SUPORTEM múltiplos perfis (owner + recep + colaborador)
- Sem subquery na mesma tabela em RLS (infinite recursion)
- Validar colunas antes de SELECT (Supabase falha silenciosamente)
- Magic link via `auth.admin.generateLink` + endpoint `/auth/confirm` com `verifyOtp`
- Migration ANTES de push (não depois)

---

## Checklist pra novo painel SaaS

Quando começar Starteq (ou outro painel):

- [ ] Identificar entidades base (Customer · Service · Professional · Invoice · Payment)
- [ ] Definir multi-tenant model (1 user = 1 ou N businesses?)
- [ ] Cravar paleta de marca + CSS variables customizáveis
- [ ] Layout shell (sidebar + breakpoint mobile)
- [ ] Agrupar features em 5-6 grupos de sidebar
- [ ] Identificar quais seções viram índice de cards-link (Relatórios · Configurações)
- [ ] Definir quais entidades têm modal grande (Comanda · Pedido · OS)
- [ ] Modelar URL params pra cada filtro
- [ ] Cravar padrão de loading + empty state
- [ ] Documentar regras de negócio críticas (numeração · cálculo de comissão · etc)

---

## Documentos relacionados

- `01-STACK-FERRAMENTAS.md` — stack de ferramentas Verbo
- `02-PRINCIPIOS.md` — princípios de design
- `03-WORKFLOW.md` — workflow operacional
- `04-DIARIO-APRENDIZADOS.md` — log de aprendizados por sessão
- `05-PROJETOS-ENTREGUES.md` — registro de entregas
- `agendapro/referencia-salao99/01-reconhecimento-cic.md` — superfície Salão99
- `agendapro/referencia-salao99/02-drilldown-cic-parcial.md` — drilldown 5 áreas
- Memória Claude: `reference_salao99_padroes_arquiteturais.md` — schema + regras

---

## Anti-patterns descobertos

### ❌ Botão "fantasma" sem aparência de botão
Texto azul solto num canto, sem background, sem border, sem ícone — usuário não percebe que é clicável.
**Aprendizado (18/05/2026 · Eduardo):** todo botão de ação precisa ter:
- Background (mesmo que sutil · `color-mix accent 14%`)
- Border 1px discreto
- Padding generoso (8px+ vertical · 12px+ horizontal)
- Ícone à esquerda quando faz sentido (lápis pra editar · lixeira pra remover · raio pra ação rápida)
- Texto em UPPERCASE pequeno (text-xs · font-bold · tracking-wider)

### ❌ Ícone clicável sem área alvo grande
Ícone externo `↗` discreto ao lado de um label não-clicável — usuário não sabe que aquilo abre algo, e mesmo se souber, área de toque é pequena demais.
**Aprendizado:** quando uma linha inteira de info É um link, **a linha INTEIRA vira `<button>`**, não só o ícone. Adicionar:
- Background sutil (`color-mix accent 14%`)
- Border 1px (`color-mix accent 30%`)
- Hint pequeno embaixo: "Clique pra ver detalhes"
- Ícone alinhado à direita pra indicar destino

### ❌ Empty state confuso (CTA disabled sem explicação)
Botão visível mas disabled, sem dizer ao usuário POR QUE não tá clicável.
**Solução:** ou esconder até ativar, ou mostrar com badge "Em breve" claro.

### ❌ Replicar feature do sistema-referência só porque existe lá
Tentei replicar "Recalcular Remunerações" do Salão99 — mas no AgendaPRO o cálculo é stateless (deriva on-the-fly), sem cache nem override manual. Botão virou inútil (só `window.location.reload()`).
**Aprendizado (18/05/2026 · Eduardo):** ao replicar UX/feature do sistema-referência (Salão99 · concorrente · etc), validar PRIMEIRO se faz sentido no nosso modelo de dados/estado. Se não tem o problema que a feature resolve, NÃO replicar. Menos opções = menos confusão.

---

## Próximas iterações deste doc

À medida que construímos AgendaPRO, Starteq e outros, **incrementar este doc**:
- Novos padrões cravados (ex: dashboard de KPIs · onboarding · etc)
- Anti-patterns descobertos (o que NÃO fazer)
- Variantes por nicho (esmalteria · oficina · clínica · agência)
- Templates de migration · component library
