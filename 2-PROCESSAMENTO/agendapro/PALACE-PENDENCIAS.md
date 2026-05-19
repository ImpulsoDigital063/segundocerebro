# Palace Nail Spa Macaé · Pendências pra Padrão Salão99

**Última atualização:** 2026-05-19 (madrugada)
**Conversão trial → R$970 anual:** 24/05/2026 (5 dias)
**Salão99 desliga:** 31/05/2026 (12 dias)
**business_id:** `ee6f0b22-5a46-406a-a3d4-b901551c4261`

---

## Status atual

**Painel ~80% completo.** Em 24h subimos 5 commits, 11 features novas. Falta 1 da fila cravada + refinamentos de Despesas + ~7 ajustes finos pra dar paridade total com Salão99.

### ✅ O que JÁ tá no ar (e Marko pode usar)
- Página Início `/admin/inicio` (saudação, KPIs do dia, atalhos, ranking)
- Atendimentos (grade timeline Salão99-style) em `/admin`
- Clientes com cadastro de 18 campos + drawer 8 tabs (Perfil/Config/Atividades/Galeria/Fichas/Pacotes/Saldo/Fidelidade)
- Financeiro Dashboard com 8 KPIs · Hero Lucro · donuts Pagamento/Despesas · comparativo barras
- Vendas com filtros (data range, profissional, status, tipo) + Export CSV
- Despesas com navegador mês-a-mês (69 despesas Salão99 importadas · R$ 18.892,27)
- Fluxo de Caixa
- Remunerações (cálculo no faturamento, sem botão "Recalcular" inútil)
- Comandas (modelo híbrido appointment.paid_at direto OU invoice opcional)
- Recepcionista funcional (Leticia loga em /profissional/login → /recepcao)
- Taxas de Maquininha por bandeira (cartão crédito/débito · pix · parcelamento)
- Fidelidade (pontos + recompensas)

---

## 🔥 URGENTE · próxima sessão (~6h trabalho)

### 1. Tab Atendimentos no Cliente Drawer (Salão99-style)
**Por quê:** Marko abre cliente, espera ver histórico de atendimentos com kebab (editar/cancelar/reagendar). Hoje a tab existe mas é a versão antiga (ClienteAtividadesTab).

**O que fazer:**
- Refazer `src/components/admin/clientes/ClienteAtividadesTab.tsx` em formato tabela densa
- Cada linha: data · serviço · prof · valor · status · kebab
- Kebab abre: Editar · Cancelar · Marcar como pago · Reagendar
- Filtros: por status (todos/concluídos/pendentes/cancelados) · por ano

**Estimativa:** 2-3h

### 2. Refinar `/admin/financeiro/despesas` (agora com 69 dados reais)
**Por quê:** Hoje a página mostra lista chapada. Com 69 despesas, Marko vai querer filtrar e editar em massa.

**O que fazer:**
- **Filtro por categoria** (chips horizontais: Todas · Produtos · Aluguel · Salários · ...)
- **Filtro por recorrência** (toggle "Só recorrentes")
- **Edit drawer lateral** (substitui modal · mais info na mesma tela)
- **Bulk action**: selecionar várias → mudar categoria em massa (útil pras 16 que viraram `other`)
- **Search** por nome ("Meta" → todas as Meta Ads)
- **Sort:** por data DESC · valor ASC/DESC · categoria

**Estimativa:** 2h

### 3. Avisar Marko que despesas foram importadas
**Mensagem pronta** (copia/cola pro WhatsApp):

> Bom dia Marko! Boa notícia 🎉
>
> Importei pra ti as 69 despesas que você tinha cadastrado no Salão99 (Março e Abril). Total R$ 18.892,27.
>
> Já tá tudo no painel em **Financeiro → Despesas**. Lá em cima tem um navegador `‹ Mês › ` — clica nos chevrons pra ver Março/26 e Abril/26.
>
> Algumas observações:
> - O "Rent R$ 3.500" tava cadastrado como "Venda" no Salão99 (provavelmente confusão de cadastro). Corrigi pra "Aluguel · recorrente".
> - 8 pagamentos pras manicures em probation (Hellena, Joana, Rosangela, Alessandra, Marla) vieram como "Salário". Se preferir reclassificar pra "Outros" ou apagar, é só editar.
> - 16 despesas viraram "Outros" porque o Salão99 tinha categorias específicas (Sharpening, Cleaning, Equipment, Uniforms) que o nosso painel não tem ainda. Tá tudo lá com o nome original — só categorizei como Outros.
>
> Dá uma olhada quando puder e me avisa se algo tá errado.

**Estimativa:** 30s pra mandar quando ele acordar

---

## 🎯 IMPORTANTE · esta semana (~10h trabalho)

### 4. Drilldown CIC Blocos 4 e 5 do Salão99
**Por quê:** A auditoria CIC parou no meio do Bloco 3 ("Comissão é calcul..."). Faltam 2 áreas críticas pra ter o mapa completo do concorrente.

**O que fazer:**
- Gerar Prompt 2 pro CIC com foco em: Vendas (modal de criação · status flow) · Configurações de Negócio (campos, integrações)
- Salvar em `3-RETENCAO/agendapro/referencia-salao99/03-drilldown-cic-blocos-4-5.md`

**Estimativa:** 1h gerar prompt + 2h CIC + 1h consolidar = 4h

### 5. Notas Fiscais (NFS-e)
**Status:** Sidebar marca como "Em breve". Marko pode pedir.

**O que fazer:**
- Integrar com NFE.io ou serviço similar (R$ 0,30 por nota emitida)
- Painel pra cadastrar empresa fiscal (CNPJ + IE + regime)
- Botão "Emitir nota" em cada Comanda fechada
- Histórico de notas + download de PDF/XML

**Estimativa:** 6-8h (depende da integração escolhida)

### 6. Botão "Agendar" inline na Página Atendimentos
**Por quê:** Salão99 tem botão azul "Agendar" no topo da timeline. AgendaPRO hoje só tem o card "Próximos do dia" com link. Marko espera quick action.

**O que fazer:**
- Adicionar botão accent no header da `/admin` (timeline)
- Abre o modal `MarcarAgendamentoForm` direto (sem ir pra /recepcao/marcar)

**Estimativa:** 1h

---

## ✨ NICE-TO-HAVE · próximas 2 semanas (~15h)

### 7. Produtos (catálogo de venda avulsa)
- Tabela `products` com nome, preço, estoque, código
- Adicionar no Faturar modal junto com serviço
- Sidebar deixa de marcar "Em breve"
- **Estimativa:** 4h

### 8. Pacotes (combo serviços com desconto)
- Tabela `service_packages` com itens + preço promo
- Cliente compra pacote, vai pro Saldo dele (já tem `customer_credits`)
- Conforme usa serviço do pacote, abate
- **Estimativa:** 5h

### 9. Bloqueios de Agenda (já tem skeleton)
- Refinar BloqueiosTab existente
- Bloquear horário específico ou dia inteiro (motivo: feriado, viagem, manutenção)
- Aparece riscado na timeline

### 10. Negócio (multi-business switcher)
- Marko só tem 1 business agora · mas Salão99 tem multi
- Implementar quando 2º cliente pedir
- **Estimativa:** 6h (vale fazer só quando demand existir)

### 11. Pesquisa global no header (Salão99 tem)
- "Buscar item do menu" no header
- Fuzzy search em rotas + clientes + serviços
- **Estimativa:** 3h

---

## 🛠 OPERACIONAL crítico

### Vercel webhook quebrado (#13 nas tasks)
**Status:** push manual via `npx vercel --prod --yes` funciona mas o webhook automático tá morto.

**O que investigar:**
- Logs do GitHub webhook no Vercel dashboard
- Verificar se token de integração não expirou
- Verificar se branch `master` ainda é a default-deploy
- Talvez seja só re-conectar a integração GitHub

**Estimativa:** 1h debug + 1h fix · prioridade média (workaround funciona)

### Migration v59 (já aplicada)
- `import_external_id` em expenses ✅
- Próxima migration sequencial: v60

### Backlog técnico identificado em 14-15/05
- Tipos do Supabase desatualizados (`@/lib/types` não inclui campos v54-v58)
- Falta seed pra environment de teste local
- ConfirmActionModal poderia ter variant `info` (hoje só danger)

---

## 📋 Checklist 24/05/2026 (conversão trial)

- [ ] Rodar BLOCO 4 do script `scripts/grant-trial-palace-nail-spa.sql` no Supabase (converte cortesia → `anual_pix` R$970)
- [ ] Verificar Asaas: cobrança gerada · enviada pro email da Luana
- [ ] Validar que features de Equipe continuam (não cai pra Solo)
- [ ] Mandar WhatsApp pro Marko avisando "conversão feita · obrigado"

---

## 📋 Checklist 31/05/2026 (Salão99 desliga)

- [ ] Confirmar que NADA do Salão99 é mais necessário (todos os dados migrados)
- [ ] Marko deletou conta no Salão99 (não fica cobrando)
- [ ] Backup do export Salão99 guardado em `data-imports/palace-salao99/` (já tá)
- [ ] Oferta pra OUTROS salões em migração (oportunidade comercial · 13 dias antes do desligamento atrai órfãos)

---

## Como esse arquivo evolui

Quando uma pendência for resolvida, **marca `~~strikethrough~~` ao invés de deletar** — preserva histórico do que foi feito. Quando subir nova pendência (Marko reclamar de algo, novo bug), adiciona com data.

Doc vivo. Atualiza por sessão.

— Verbo
