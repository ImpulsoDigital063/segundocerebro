# Reconhecimento Salão99 · Frente 1 (CIC)

**Data:** 2026-05-18
**Acesso via:** Marko (Palace Nail Spa Macaé) · sessão CIC
**Status fonte:** Salão99 deixará de funcionar a partir de **31/05/2026** (banner faixa preta exibido em várias páginas).

---

## Bloco A · Sidebar (23 itens em 5 grupos)

Header: avatar/perfil do negócio (clique = seletor de negócios)

**Grupo 1**
1. Página principal (home dashboard)
2. Exportar dados (landing standalone fora da shell)

**Grupo 2**
3. PALACE NAIL SPA MACAE (storefront → seletor `/negocios`)
4. Plano e Pagamento

**Grupo 3 · Operação financeira**
5. Atendimentos
6. WhatsApp (sub-tabs: Lembretes / Chatbot · Chatbot é feature paga)
7. Vendas
8. Comandas (no plano atual redireciona pra Atendimentos)
9. Fluxo de Caixa
10. Controle de Caixa (upsell · feature paga separada)
11. Remunerações
12. Despesas
13. Notas Fiscais (upsell · NFS-e R$ 39,90/mês)

**Grupo 4 · Catálogo + Pessoas**
14. Serviços
15. Produtos
16. Pacotes
17. Clientes
18. Colaboradores

**Grupo 5 · Análise + Config**
19. Relatórios
20. Agenda Online (upsell · não ativada)
21. Configurações
22. Termos e privacidade (footer)

**Header global:** hamburger · logo · busca global ("Busque itens do menu") · avatar com menu (Minha conta / Sair)

---

## Bloco B · Mapa de rotas (resumo)

| URL | Título | Tipo | Detalhe |
|---|---|---|---|
| `/` | Olá, LUANA! | Dashboard híbrido | Atalhos topo + mini-agenda + carrossel + KPIs + donut |
| `/.../atendimentos` | Atendimentos | Timeline | Filtro Dia/Sem/Mês · painel lateral config · agrupamento por prof · botão Agendar |
| `/.../whatsapp/lembretes` | WhatsApp | Landing + pricing | Sub-tabs · 3 cards Vantagens · 3 cards Pacotes (50/100/300 · Recomendado) |
| `/.../vendas` | Vendas | Tabela densa | Filtros chip Tipo+Situação · busca · status Sem Fatura/Fechada · ícone detalhes |
| `/.../fluxocaixa` | Fluxo de Caixa | Tabela horizontal por dia | Toggle Diária · linhas Saldo Inicial/Receitas/Despesas/Líquido/Final |
| `/.../remuneracoes` | Remunerações | Tabela + resumo flutuante | Nav por mês · Profissional/Total/Pago/Pendente/Vales · painel resumo canto inferior-direito |
| `/.../despesas` | Despesas | Tabela mensal | Nav por mês · busca · empty state com CTA |
| `/.../servicos` | Serviços | Tabela bulk | Filtro categoria · checkbox bulk · colunas Cat/Serv/Dur/Preço |
| `/.../clientes` | Clientes | Tabela densa | **Busca tripla (nome/tel/CPF) numa única caixa** · checkbox bulk · kebab por row |
| `/.../colaboradores` | Colaboradores | Tabela | Filtro Ativos · busca · kebab por row · resumo flutuante "Cadastrados: 9" |
| `/.../relatorios` | Relatórios | **Índice de cards 2-col** | 11 cards categóricos · badge Novo · ícone+título+desc+chevron |
| `/relatorios?...` | Relatório Financeiro | Dashboard standalone | Sem sidebar · 4 KPI cards com badge Alta/Baixa · donut + barras · comparativo barras sólido vs dashed |
| `/.../configuracoes` | Configurações | Lista vertical | 10 itens com ícone+título+descrição longa |
| `/.../negocios` | Negócios | Tabela multi-business | Badge "Selecionado" · ação "SELECIONAR" · status visual de plano vencido |

**Lacunas (não cliquei):**
- Forms de criação (modal vs página própria?)
- WhatsApp Chatbot (TypeError em produção)
- Tema do Sistema (só vi "Azul" no dropdown)
- Loading states (cache rápido)

---

## Bloco C · Padrões UX cravados

**Search bar.** Borderless · ícone lupa azul à esquerda · placeholder contextual · on-type (sem submit). Sempre no topo do conteúdo, à esquerda dos filtros.

**Filtros.** Dropdown-chip horizontal · 1-2 dropdowns inline ("Tipo", "Situação", "Todos os Clientes") · sem modal de filtro avançado. Exceção: Atendimentos tem painel lateral persistente (largura/intervalo/cores/lista de profs com checkbox).

**Paginação.** Virtual scroll (sem números, sem "Ver mais"). Listas datadas: navegação por mês (chevrons + label).

**Cards-link** (estilo Relatórios). Card branco · borda fina · padding generoso · ícone outline topo · título bold · descrição cinza 12-13px · chevron `>` direita centralizado. Badge "Novo" em pill azul canto sup-esq.

**Tabelas.** Densidade média · sem zebra striping · **avatar circular cinza placeholder forte mesmo sem foto** · checkbox bulk esquerda quando há ação em massa · kebab `⋮` no fim da linha · header cinza claro · sem column-resize aparente.

**Forms.** Não detectado modal na superfície. Padrão "Cadastrar X" em outline button no empty state + botão "+" no header. Suspeita: forms em página própria.

**Gráficos.** Donut com legenda em barras horizontais + valor R$ à direita. Barras comparativas: sólido vs dashed-outline (recebido vs programado) — escolha inteligente. Cores fortes saturadas: azul royal, laranja, rosa magenta, verde lime, ciano.

**Estados vazios.** "Nenhum X foi encontrado" + outline button "Cadastrar X". Sem ilustração na maioria. Exceção: Agenda Online com ilustração 3D + bullets + CTA azul.

**Banners.** Faixa preta topo: "Programe-se: exporte seus dados — Salão99 deixará de funcionar a partir de 31/05" + CTA "Acesse aqui". Carrossel de 2 banners no canto direito da home. Cross-sell de e-commerce parceiro embedded ("Produtos para você" · cards Outlet · botão Comprar externo).

**Cor de marca.** Azul royal #2563-ish · CTAs primários · headers · links. Vermelho Baixa / azul Alta em badges de tendência.

**Layout.** Sidebar fixa colapsável (collapse = só ícones) · header sticky · max-width relaxado · footer flutuante canto inferior-direito em algumas páginas (resumos).

---

## Bloco D · Configurações de conta

- **Dark mode:** não tem. "Tema do Sistema" troca cor accent (Azul → outras) por EMPRESA, não por usuário.
- **Multi-usuário:** Colaboradores tem email cadastrado → suposto login próprio (não testado).
- **Multi-business:** ✅ confirmado. Página `/negocios` com lista, badge "Selecionado", ação "SELECIONAR", status visual de plano vencido.
- **Exportação:** rota dedicada `/exportar-dados` (landing roxa standalone) + ícone download em várias tabelas. Em destaque agora pelo desligamento 31/05.
- **Logs/auditoria:** não encontrado.
- **Conta:** "Minha conta" + "Sair". Sem 2FA, sem gerenciamento de sessões.

---

## Bloco E · Áreas prioritárias pra drilldown (frente 2)

1. **Atendimentos** (agenda timeline) — coração da operação
2. **Relatório Financeiro** (dashboard standalone) — componente UX mais sofisticado
3. **Relatórios** (índice de cards) — já replicamos no AgendaPRO ✅
4. **Fluxo de Caixa** — tabela horizontal contábil
5. **Remunerações** — tabela + painel resumo flutuante
6. **Vendas** — tabela operacional densa
7. **Clientes** — busca tripla (nome/tel/CPF) numa caixa só
8. **Configurações** — lista vertical de seções com descrições longas
9. **Multi-business** (`/negocios`) — padrão troca de tenant
10. **Empty states vs upsells** — hierarquia visual de features pagas

---

## Achados estratégicos

1. **Salão99 desliga 31/05/2026** — Marko precisa migrar antes. AgendaPRO tem **13 dias** de janela crítica (18/05 → 31/05).
2. **Multi-business** = feature funcional que falta no AgendaPRO. Bloqueador pra clientes com várias empresas.
3. **Exportação de dados em destaque** = padrão de confiança. AgendaPRO deve responder com **importação fluida** (já temos script · falta UI).
4. **Cross-sell embedded** (produtos parceiros na home) = vetor de receita extra que AgendaPRO pode considerar futuro.

---

## Gap functional Salão99 → AgendaPRO

Features que Salão99 tem e AgendaPRO não tem (ainda):

- Comandas (em planos superiores · ficha aberta com itens)
- Notas Fiscais (NFS-e integrada)
- Fluxo de Caixa visão tabela contábil
- Controle de Caixa avançado (upsell pago)
- Remunerações (cálculo automático de comissão pronto pra fechar)
- Pacotes (combo de serviços)
- Produtos (estoque + venda)
- Múltiplos negócios por conta
- Cross-sell de produtos parceiros
- Exportação completa de dados em landing dedicada
- WhatsApp Chatbot (feature paga)
- Comissões e Gorjetas (config)
- Fichas de Clientes (config)
- Controle de Recursos (config)
