# Drilldown Salão99 · Frente 2 (CIC) · PARCIAL

**Data:** 2026-05-18
**Status:** Bloco 1 completo · Bloco 2 completo · Bloco 3 cortado em "Comissão é calcul..." · Blocos 4, 5 e fechamentos faltando.

---

## Bloco 1 · Fluxo de Caixa

### Resumo
Tabela matricial: linhas = categorias contábeis (Saldo Inicial, Receitas expansível, Despesas expansível, Resultado Líquido, Saldo Final), colunas = períodos (dias, semanas, meses ou anos). Cada célula de Receitas/Despesas tem ícone external que abre página "Detalhamento" listando movimentações. Header de coluna também é clicável e drilla pro período inteiro.

### Estrutura

**Toggle "Visão Diária ▼"** (4 opções literais):
- "Visão Diária" (default)
- "Visão Semanal"
- "Visão Mensal"
- "Visão Anual"

**Colunas:** 4 colunas visíveis por viewport, sem scroll horizontal aparente.
- Diária: últimos 4 dias (15/mai, 16/mai, 17/mai, 18/mai)
- Mensal: últimos 4 meses (Fev/26, Mar/26, Abr/26, Mai/26)

**Linhas:**
1. **Saldo Inicial** — só valor, sem ícone, sem expansão. Pode ser negativo ("- R$ 3.344,22").
2. **Receitas** (chevron ▼ expansível) — fundo verde-pálido. Breakdown por forma de pagamento:
   - Pix · Cartão de Crédito · Dinheiro · Cartão de Débito · Transferência Bancária
   - Cada sub-linha tem ícone external por célula.
3. **Despesas** (chevron ▼ expansível) — fundo vermelho-pálido. Breakdown por categoria:
   - "Despesas Gerais" · "Taxa de Forma de Pagamento" (categoria fixa do sistema, gerada automaticamente)
4. **Resultado Líquido** — só valor.
5. **Saldo Final** — só valor. = Saldo Inicial + Resultado Líquido.

### Drills

- **Click em ícone external por célula** → abre página `Detalhamento` full-overlay (sem sidebar):
  - Header: seta voltar + título "Detalhamento" + "EXPORTAR" top-right
  - Subtítulo: "Receitas / 15/05/2026"
  - Tabela: Data · Descrição · Valor
  - Linhas tipo "Pagamento registrado para a fatura #10672" + link "Visualizar Fatura"
- **Click em ícone external no header de coluna** → abre "Detalhamento / Fluxo de Caixa / Março/2026" com lista misturada (receitas + despesas).

### Origens

- **Receitas:** 100% automática, vem de pagamentos em faturas/comandas. Cada linha referencia "fatura #NNNN"
- **Despesas:** misto — módulo Despesas manuais + "Taxa de Forma de Pagamento" calculada automaticamente por venda paga com taxa configurada
- **Saldo Inicial:** derivado automático do saldo final do período anterior
- **Filtros:** sem filtros adicionais além da visão

### Comportamentos

- Click no chevron de Receitas/Despesas → expande/colapsa in-place sem reload
- Click no ícone external por célula → navega pra `/.../detalhamento` (URL muda)
- "EXPORTAR" no header → dropdown 2 opções: PDF · Excel (XLSX)
- "EXPORTAR" no Detalhamento → dropdown 3 opções: PDF · Excel · CSV
- Header da página: 2 ícones (↻ refresh, ⤓ export)

### Visual

- Tabela sem bordas externas, divisores horizontais sutis
- Receitas: fundo verde pálido ~`#F0FFF4`
- Despesas: fundo vermelho pálido ~`#FFF5F5`
- Saldo Inicial / Resultado Líquido / Saldo Final: fundo branco, texto preto bold
- Ícone external link em ciano/azul claro ao lado de valores monetários quando há drill
- Valores monetários alinhados à direita

### Dúvidas
- "Visão Anual" não foi testada (provável 4 anos)
- Scroll horizontal pra mais que 4 colunas?
- Saldo Inicial do primeiro dia da plataforma: zero?

---

## Bloco 2 · Remunerações

### Resumo
Tabela mensal de comissões por profissional com colunas Valor Total / Pago / Pendente / Vales. Ações via duplo-clique na linha: Exibir Detalhes, Registrar Pagamento, Histórico de Pagamentos, Abrir Colaborador, Recalcular Remunerações. Configuração de regras de comissão é por colaborador (no perfil), entidade separada "Vales" cadastrada na ficha do colaborador.

### Estrutura

**Tabela colunas (literal):**
- "Profissional"
- "Valor Total (R$)"
- "Valor Pago (R$)"
- "Pendente Pagamento (R$)"
- "Vales Pendentes (R$)"

**Navegação por mês:** chevron ‹ + label clicável "Maio/2026" (abre date picker) + chevron ›. Sem botão "Mês atual". Sem limite de retroatividade aparente.

**Filtro "Todos ▼":** não abriu na sessão — provável filtra status (todos/pagos/pendentes) ou profissional.

**Painel resumo flutuante** (canto inferior-direito):
- "Total Remunerações: R$ 6.655,44"
- "Total Pago: R$ 0,00"
- "Vales Pendentes: R$ 0,00"
- linha divisória
- "Pendente Pagamento: R$ 6.655,44"

Hipótese: Pendente Pagamento = Valor Total − Pago. Vales Pendentes = vales cadastrados ainda não descontados.

### Configuração de Comissão (página colaborador → tab Configurações → "Comissões e Gorjetas")

- **Tipo de Comissão** (dropdown · default "Comissão Simples" · sugere existir Avançada/Escalonada — dúvida)
- **Comissão Padrão:** número + dropdown "%" (provavelmente também R$)
- Link "Clique aqui para personalizar individualmente os valores das comissões" → override por serviço
- Link "Conferir Comissões"
- **Comissões de Produtos** (bloqueado se prof não pode vender)
- **Regra de cálculo da taxa de forma de pagamento** como profissional principal:
  - default "Regra padrão do sistema"
  - alternativa "Não aplicar taxa de forma de pagamento"
- Mesma regra como assistente (idem)
- **Regra de cálculo de desconto** como principal:
  - default "Aplicar desconto"
- Mesma como assistente (idem)
- **Gorjetas (radio):**
  - "Pode receber gorjetas apenas dos atendimentos realizados"
  - "Pode receber gorjetas independente de realizar o atendimento" (default)

### Tela "Exibir Detalhes" (página overlay)

- Header: "Detalhes" + "EXPORTAR"
- Título: "Ariana / 01/05/2026 - 31/05/2026 / Lista detalhada de remunerações"
- Tabela: Data Venda · Descrição (sub "Comissão: [serviço]") · Valor Base · Valor Remuneração (sub "Cálculo: 40%" + link "Detalhes") · Valor Pago · Pagamento Pendente

### Modal "Detalhes do Cálculo" (popup ao clicar Detalhes)

Linhas:
- Valor da Venda
- Cálculo para Comissão
- Valor Bruto da Comissão
- Valor Total da Comissão
- Botão "OK"

### Tela "Registrar Pagamento"

**Step 1:** Header "Pagamento" + "CONTINUAR". Tabela com checkboxes pré-marcadas. "Selecione as remunerações desejadas para registrar o pagamento:". Permite seleção parcial.

**Step 2:** Card centralizado. Resumo: "Ariana / Período: 01/Mai/26 até 31/Mai/26 / Remunerações selecionadas: 59 / Valor a pagar: R$ 1.652,80". Form: Observações (Opcional), Data do Pagamento (default hoje), Valor do Pagamento (R$) editável (permite parcial). Botões Voltar / Salvar.

**Crítico:** NÃO há campo "Forma de pagamento" no fluxo. NÃO há geração automática de despesa correspondente.

### Outras telas

- **Histórico de Pagamentos:** "Histórico de Pagamentos / [Nome] / Lista de todos os pagamentos de remunerações registrados" + empty state "Nenhum pagamento de comissão foi encontrado"
- **Abrir Colaborador:** ficha com 5 tabs: PERFIL · CONFIGURAÇÕES · ATIVIDADES · SALÁRIOS · VALES
- **Recalcular Remunerações:** ação direta sem confirmação visível (não testado completamente)

### Vales (tab no colaborador)

- Empty: "Nenhum vale foi cadastrado." + botão "+ ADICIONAR"
- Form de criar Vale: "Descrição do Vale" (text required), "Data" (default hoje), "Valor" (numérico). Botões Cancelar / Salvar

### Salários (tab separada)

- Tabela: Data / Descrição (= "Salário") / Valor (R$) / Pagamento (badge "Em Aberto") + menu kebab ⋮ por linha
- Filtro "Até esse mês ▼" + botão "+ ADICIONAR"
- Salário é separado de comissão

### Comportamentos

- Click simples na linha = só destaca
- **Duplo-click na linha = abre context menu** com 5 opções
- Filtro "Todos" não abriu em primeira tentativa
- NÃO há fechamento de mês — sem ação "Fechar mês" detectada

### Fluxos

- **Pagar comissão completa:** linha → duplo-click → "Registrar Pagamento" → step 1 (all checked) → CONTINUAR → step 2 → Salvar
- **Pagar parcial:** desmarca linhas no step 1 OU edita valor no step 2
- **Cadastrar vale:** linha → duplo-click → "Abrir Colaborador" → tab VALES → "+ ADICIONAR" → Salvar
- **Mudar %:** Abrir Colaborador → tab CONFIGURAÇÕES → edita "Comissão Padrão" → SALVAR
- **Override por serviço:** mesma tela → link "Clique aqui para personalizar"

### Texto literal (literais a copiar)

- Menu de contexto: "Exibir Detalhes" / "Registrar Pagamento" / "Histórico de Pagamentos" / "Abrir Colaborador" / "Recalcular Remunerações"
- Step 1: "Selecione as remunerações desejadas para registrar o pagamento:"
- Step 2: "Remunerações selecionadas: 59" / "Valor a pagar: R$ 1.652,80" / "Observações (Opcional)" / "Data do Pagamento" / "Valor do Pagamento (R$)"
- Gorjetas: "Pode receber gorjetas apenas dos atendimentos realizados" / "Pode receber gorjetas independente de realizar o atendimento"

### Dúvidas

- Opções de "Tipo de Comissão" (Simples vs outras?)
- Vales descontam automático do pagamento?
- Opções do filtro "Todos ▼"?
- "Recalcular" tem confirmação? Trava algo?
- Sem fechamento de mês — edição sempre aberta?
- Pagamento de comissão gera despesa automática no Fluxo de Caixa?

---

## Bloco 3 · Vendas (PARCIAL · cortou em "Comissão é calcul...")

### Resumo
Tabela operacional densa onde cada atendimento gera 1 linha de venda automaticamente. Status inicia em "Sem Fatura / Pendente" e vira "Fatura Fechada" após faturamento. Faturar gera uma "Comanda" (= fatura) com número sequencial, agrupando múltiplos itens do mesmo cliente. Criar venda manual passa pelo detalhe do cliente, que tem FAB pra adicionar Atendimento / Produto / Pacote / Crédito.

### Estrutura

**Colunas literais:**
- "Data" (com hora abaixo)
- "Cliente" (com ícone de ficha clicável)
- "Descrição" (= serviço)
- "Profissional"
- "Valor"
- "Situação"

**Status (literal):**
- "Sem Fatura / Pendente*" — venda nova vinda de atendimento, sem comanda. Asterisco. Ícone ampulheta ⏳
- "#10691 / Fatura Fechada" — fatura emitida e fechada. Ícone check ✓
- Outros estados existem (filtro confirma): "Com Fatura Aberta", "Canceladas"

**Numeração:** sequencial por business, sem reset anual (vi #10661 → #10691 em curto intervalo).

### Filtros

**Tipo ▼:**
- "Exibir Todos"
- "Atendimento" (ícone agenda)
- "Venda de Produto" (ícone produto)
- "Venda de Pacote" (ícone sacola)
- "Crédito Avulso" (ícone $)

**Situação ▼:**
- "Todas"
- "Pendentes - Sem Fatura"
- "Com Fatura Aberta"
- "Com Fatura Fechada"
- "Canceladas"

**Busca:** placeholder "Procurar por palavra..." — busca textual livre.

**Header ações (4 ícones top-right):** ↻ refresh, + (criar venda manual), ≡ ajustes/colunas, ⤓ export.

### Criar Venda Manual (botão "+")

1. Modal de seleção de cliente: busca "Selecione um cliente..." + botão "+" novo cliente + X. Lista vertical com chevron por linha.
2. Após selecionar → **modal-página de Detalhe do Cliente** (mesmo componente da página `/clientes/[id]`)
3. Botão "FATURAR" sup-dir
4. Header com KPIs (Atendimentos / Produtos Vendidos / Pacotes Vendidos) + FAB azul "+"
5. Tabs: GERAL · CONSUMO · ATIVIDADES · GALERIA DE FOTOS · FICHAS · PACOTES · SALDO

**FAB "+" no detalhe (4 opções):**
- Novo Atendimento
- Venda de Produto
- Venda de Pacote
- Adicionar Crédito

### Popover de venda "Sem Fatura" (click no ícone status)

Card flutuante à direita:
- Nome cliente
- Data formatada: "Segunda-Feira, 18 de Maio • 18:00 até 18:45"
- Serviço + valor "R$ 39,00"
- Status do atendimento dropdown: "Horário Marcado ▼" (outros estados: Confirmado, Aguardando, Concluído, Faltou — dúvida)
- Linha "✓ Sem Comanda" + ações ícones: enviar (avião), editar, lixeira, cliente
- Botão "FATURAR" azul à direita

### Popover de venda "Fatura Fechada"

Similar mas:
- Status: "Concluído ▼"
- Linha "✓ Comanda Fechada: #10691" com link external pro detalhe
- Badge "Comanda Fechada" sup
- Ícones: enviar, editar, lixeira, cliente, kebab ⋮, X

### Fluxo Faturar

1. Click FATURAR no popover → Tela "Comanda" full-overlay
2. Header "Comanda" + "CONTINUAR" topo
3. Título "Nazaré / Selecione os itens para gerar a fatura"
4. Tabela: checkbox · Data · Descrição · Qtd · Descontos (R$) · Valor Final (R$) + ícone editar (lápis) por linha
5. Sumário rodapé: Subtotal / Descontos / Total
6. Botões Cancelar / Continuar
7. Marcar checkboxes + Continuar → Modal Confirmação:
   - "Você tem certeza que deseja gerar a comanda de 1 item selecionado no valor total de R$ 39,00?"
   - Botões VOLTAR / CONFIRMAR
8. Confirmar → cria comanda com número sequencial e status "Fechada"

### Modal Comanda #NNNN (click no link external)

Overlay grande, sem sidebar:
- Header: "Comanda #10691" + ícone impressora 🖨 + X
- Linha cliente: "Augusta Floriano (Atendimento Demorado, 2h30) / 16/Maio/2026 ✏" + dropdown "Fechada ▼" sup-dir
- Seção Resumo com link "GERENCIAR ITENS" (azul) à direita: Quantidade · Subtotal · Descontos · Valor Total
- Seção Pagamentos: kebab ⋮ + descrição "Pix / Pago em: 16/Mai/2026" + valor à direita
- Linha final "Total Pago: R$ 74,00"

**Status dropdown "Fechada ▼":** 2 opções:
- "Reabrir Comanda"
- "Cancelar Comanda"

### Comportamentos

- Click no ícone de Situação por linha → popover lateral à direita com ações rápidas
- Click no nome do cliente NÃO abre detalhe (só seleciona)
- Click duplo na linha não abre nada
- Modal de Comanda é independente da página, dá pra imprimir direto
- Cancelar Comanda muda status para "Canceladas"

### Visual

- Tabela: sem coluna de avatar
- Status à direita com ícone (ampulheta = pendente / check = fechado / X = cancelado)
- Popover lateral: ~360px largura, alinhado à direita, padding 16px
- Modal Comanda: ~600px largura, padding 24px
- Modal Confirmação: ~400px, texto curto, botões ALL CAPS à direita
- Cor primária azul pra CTAs (FATURAR, Continuar, Confirmar)
- Cor de status: verde (check), cinza (ampulheta), vermelho implícito (X)

### Dúvidas

- Comissão calculada no faturamento ou na criação do item da comanda?
- Cancelar venda devolve estoque ou só zera financeiro?
- Numeração #10691 reseta por ano/mês? (provável global por business · sem reset)
- Filtro "Tipo" aceita multi-seleção?
- **Não tem export na listagem de Vendas** — diferente de Fluxo de Caixa e Relatórios. Path oficial é via Relatório de Valores Financeiros
- "Reabrir" comanda fechada — efeito real não testado

---

## Bloco 4 · Relatório Financeiro (parcial · cortou em item 6 Permissões)

### Resumo
Página `/relatorios?dataInicial=YYYY-MM-DD&dataFinal=YYYY-MM-DD` com header de range + 4 KPI cards + 2 donuts + gráfico comparativo. KPIs clicáveis levam a relatório detalhado standalone (`/relatorios/detalhes-vendas`) com filtros laterais e export. Range picker tem 2 tabs: "Datas" e "Meses". **Sem presets** ("Hoje", "Últimos 7 dias").

### Estrutura

**Header:** título "Relatórios" + seletor de período (modal com 2 tabs: "Datas" e "Meses")

**Linha 1 · 4 KPI cards lado a lado:**
- "Valor recebido" — verde
- "Despesas pagas" — vermelho
- "Lucro líquido" — azul
- "Créditos" — cinza/roxo

Cada card: label · valor R$ · badge variação ("Alta X%" verde / "Baixa X%" vermelho) vs período anterior equivalente. **Card inteiro é clicável → drill**.

**Linha 2 · 2 donuts lado a lado:**
- "Formas de Pagamento" (esq)
- "Principais Despesas" (dir)
- Cada donut tem link inferior "Ver detalhes"

**Linha 3 · Gráfico Comparativo (largura inteira):**
- Barras verticais agrupadas: **sólida azul** (período atual) vs **tracejada laranja** (período anterior)
- Painel lateral direito · 4 linhas com valor + dot colorido:
  - Valor recebido
  - Despesas pagas
  - Valor programado
  - Despesas pendentes

### Texto literal

- Header: "Relatórios"
- KPI cards: "Valor recebido" · "Despesas pagas" · "Lucro líquido" · "Créditos"
- Badges: "Alta XX%" / "Baixa XX%"
- Donuts: "Formas de Pagamento" · "Principais Despesas" · "Ver detalhes"
- Gráfico: "Gráfico Comparativo"
- Painel lateral: "Valor recebido" · "Despesas pagas" · "Valor programado" · "Despesas pendentes"
- Range tabs: "Datas" · "Meses"
- Drill page: "Relatório de Valores Financeiros" (URL `/detalhes-vendas`)
- Filtros laterais (drill): "Data pagamento" · "Data venda" · "Período" · "Status" · "Forma de pagamento"
- Export button: "Exportar"
- Export options: "CSV" · "Excel"

### Comportamentos

- **Range picker:** modal central · sem presets · clica data por data OU alterna pra "Meses"
- **KPI card clique:** abre `/relatorios/detalhes-vendas` filtrado pelo tipo
- **Donut hover:** não mostrou tooltip · dúvida se bug ou design
- **Filtros no drill:** painel lateral direito (toggle), não inline
- **"Status":** multi-checkbox (Pago / Pendente / Cancelado · labels a reconfirmar)
- **"Data pagamento" vs "Data venda":** excludentes (radio · não checkbox)

### Fluxos

**A · Drill de KPI:**
1. Em `/relatorios` clica card "Valor recebido"
2. Navega `/relatorios/detalhes-vendas` com filtros pré-aplicados
3. Tabela detalhada · total no rodapé
4. Painel lateral direito refina filtros
5. Botão "Exportar" → CSV ou Excel → download

**B · Mudar período:**
1. Clica no range no header
2. Modal abre tab "Datas" com 2 calendários (inicial/final)
3. Pode trocar pra "Meses" → grid de meses
4. Confirma → URL atualiza com `dataInicial` e `dataFinal` → tudo recalcula

### Visual

- Cards com cor de borda/ícone correspondente (verde/vermelho/azul/cinza)
- Donuts com legenda lateral (cor + label + valor)
- Gráfico: convenção sólido = atual, tracejado = anterior · **vale replicar**
- Tipografia: valor grande (~28-32px), label menor acima

### Cortou em "6. Permissões" — não recebido daqui pra frente

---

### Lacuna frente 1 fechada: Loading state

**Loading state oficial do Salão99:** tela branca com logo "salão99" centralizado. Sem spinner, sem skeleton, sem progress bar.

---

## Bloco 5 · Detalhe do Cliente · 7 Tabs (drilldown completo)

### Resumo
Detalhe do cliente é **página-overlay/drawer** (URL não muda · só ganha `?bc=N` breadcrumb level) com header (avatar grande, contadores adaptativos, FAB "+", "FECHAR COMANDA") e 7 tabs em CAIXA ALTA. **Abre via duplo-click no nome** (click simples só destaca a linha).

### A · Header (compartilhado por todas as tabs)

- **Linha 1:** ← voltar + Nome (h2) à esquerda · "FECHAR COMANDA" (text caixa alta) à direita (sempre visível)
- **Linha 2:**
  - Avatar circular ~110px com placeholder ícone câmera cinza (**não tem foto de perfil** · Galeria é coleção de trabalho)
  - Contadores adaptativos:
    - **Cliente zero:** 3 linhas — "Atendimentos: 0" · "Produtos Vendidos: 0" · "Pacotes Vendidos: 0"
    - **Cliente com histórico:** só "Atendimentos: N" + subtitle "Último em DD/Mês/AA" (os outros somem se zero)
  - **FAB azul "+"** à direita → 4 ações: "Novo Atendimento" · "Venda de Produto" · "Venda de Pacote" · "Adicionar Crédito"

**"FECHAR COMANDA"** não é disabled mesmo sem comanda — leva pra tela "← Faturamento" filtrada pelo cliente (mesma do Bloco 3). Empty: "Nenhum item pendente para faturamento."

### B · Tab GERAL

- **Seção "Dados Cadastrais"** · subtitle "Data de Cadastro: DD/MM/AAAA"
- Ícone lápis ✏ à direita → form "Alterar"
- **Lista de linhas com ícone-texto, mostra APENAS campos preenchidos:**
  - 👤 Nome
  - 📞 telefone + 🟢 WhatsApp clicável (se for marcado WhatsApp · não Tel)
- Cliente só com nome: 1 linha · cliente com tel WhatsApp: 2 linhas + ícone clicável

**Form "Alterar"** (3 seções fixas):

Bloco superior sem cabeçalho:
- "Nome do cliente" (obrigatório)
- "Apelido"
- "Anotação Importante" (texto curto)
- "Como Conheceu" (dropdown · opções não testadas)
- "Tipo" (dropdown · default "Pessoa Física")

**📞 Contato:**
- "E-mail"
- "Instagram" (campo dedicado · descoberta nova)
- "Telefone 1" com dropdown WhatsApp/Tel + máscara `(00) 0000-0000` + ícone "+" preto pra adicionar Tel 2/3/N

**👤 Informações Pessoais:**
- "Data de Nascimento" com hint: "Utilize dia/mês (ex: 01/06) ou dia/mês/ano (ex: 01/06/1988)" · toggle implícito
- "Sexo" (dropdown)
- "CPF"
- "RG"
- "Profissão"

**📍 Endereço:**
- "Endereço" (rua · width full)
- "Número" + "Complemento" (50/50)
- "Bairro" (full)
- "Cidade" (full)
- "Estado" (dropdown 50%) + "CEP" (50%) · **CEP é o ÚLTIMO** (diferente do padrão BR)

**Disclaimer LGPD inferior:** "Certifique-se de obter a autorização de pais ou responsáveis para cadastrar de menores de 13 anos..."

Botões: "Cancelar" (text) + "Salvar" (azul preenchido)

### C · Tab CONSUMO

**Dados Consolidados** (7-8 linhas texto plano · sem cards):
- "Valor Total Vendas: R$ X,XX"
- "Total Atendimentos: N"
- "Valor Atendimentos: R$ X,XX"
- "Total Produtos Vendidos: N"
- "Valor Venda Produtos: R$ X,XX"
- "Total Pacotes Vendidos: N"
- "Valor Venda Pacotes: R$ X,XX"

**Gráfico Mensal** (linha · 12 meses rolantes terminando no atual):
- 4 séries com dots coloridos:
  - 🔵 "Todos" (azul)
  - 🟣 "Atendimentos" (roxo)
  - 🔴 "Venda de Produtos" (vermelho/coral)
  - 🟡 "Venda de Pacotes" (amarelo)
- Eixo Y: auto-escala baseado no max (cliente zero → 0-4 · cliente R$74 → 0-80)
- Plota VALOR R$ (não contagem)

### D · Tab ATIVIDADES (mais densa · operacional)

**Filtros (2 dropdowns):**
- "Todos" (tipo) · 5 opções: Exibir Todos · Atendimento 📅 · Venda de Produto 🍶 · Venda de Pacote 🛒 · Crédito Avulso 💲
- "Até Hoje" (período) · 2 opções: Até Hoje · Futuros

**Ícone ⬇ export** à direita (export por cliente · formato não testado)

**Tabela:**
| Data | Descrição | Profissional | Valor | Situação |
|---|---|---|---|---|
| DD/Mmm/AA + 🕐 HH:MM | 📅 nome do item | nome | R$ X,XX | #NNNNN + status texto + ✓✓ azul |

**Popover de detalhe (click na linha):**
- Barra ações topo: ✈ enviar · ✏ editar · 🗑 deletar · ⋮ kebab · ✕ fechar
- Título: nome do item (ex "Pedicure EXPRESS")
- 📅 "Segunda-Feira, 04 de Maio · 16:45 até 17:45"
- "Susana Damasceno" (profissional)
- "R$ 37,00"
- ✓✓ **"Concluído" + ▼ dropdown** (status alterável direto daqui)
- ✓✓ "Comanda Fechada: #10521" + 🔗 link externo → modal Comanda

**Modal Enviar Lembrete** (✈):
- Título: nome do cliente + X
- 3 rádios:
  - "Enviar o lembrete apenas deste agendamento" (default)
  - "Enviar o lembrete com todos os agendamentos marcados para este dia"
  - "Enviar o lembrete com todos os agendamentos marcados para este dia e futuros"
- "Enviar para o telefone:" + box clicável com 📞 número + seta >

**Kebab ⋮** · 1 opção: "Consultar Comissões"

### D2 · Tela "Detalhes" (Consultar Comissões)

Página overlay com header "← Detalhes" + "EXPORTAR":

- Título: "{Cliente} - {Item}" (ex "Bruna - Pedicure EXPRESS")
- Subtítulo: "Data do atendimento: DD/MM/AAAA"
- "Lista detalhada de comissões"

**Tabela:** Data Venda · Descrição · Valor Base · Valor Remuneração (com sub "Cálculo: X%" + link "Detalhes") · Valor Pago · Pagamento Pendente

**Painel lateral direito · resumo:**
- "Quantidade: N"
- "Serviços Sem Desconto: R$ X"
- "Serviços Com Desconto: R$ X"
- "Produtos Sem Desconto: R$ X"
- "Produtos Com Desconto: R$ X"
- "Total Comissões: R$ X"
- "Total Remunerações: R$ X" (bold · sugere existir Comissão + Gorjeta + Bônus)
- "Por Forma de Pagamento:" + linha por forma (ex "Pix: R$ 14,80")
- "Total Já Pago: R$ 0,00"
- "Pendente Pagamento: R$ X" (bold)

**Modal "Detalhes do Cálculo"** (idêntico ao do Bloco 2 Remunerações · componente reutilizado):
- Valor da Venda · Cálculo para Comissão · Valor Bruto da Comissão
- separador
- Valor Total da Comissão (bold)
- Botão OK

### E · Tab GALERIA DE FOTOS

Empty: "Nenhuma foto foi adicionada." + CTA "+ ADICIONAR" azul à direita.

### F · Tab FICHAS · ARQUITETURA ESPECIAL

Empty: "Nenhuma ficha foi adicionada." + "+ ADICIONAR"

Click "+ ADICIONAR" → modal central pequeno:
- 🔍 "Selecione uma ficha..."
- Empty: **"Nenhuma ficha pré-cadastrada foi encontrada. Entre nas Configurações do sistema e cadastre uma Ficha de Cliente."**

**Conclusão arquitetural CRÍTICA:**
- Fichas NÃO são livres (não é "texto/notas livre")
- Fichas são **TEMPLATES pré-cadastrados em Configurações** (ex: Anamnese, Ficha de Unhas, Ficha Técnica)
- Cliente recebe ficha aplicando template → preenche campos do template
- Sub-módulo: CRUD de templates em Configurações + fluxo de aplicar template

### G · Tab PACOTES

Empty + texto explicativo:
> "Este cliente não possui nenhum pacote. **Os pacotes são contabilizados na conta do cliente apenas após a geração da fatura da venda.**"

**Confirma:** pacote (e por extensão TODA venda) só conta no cliente APÓS o Faturar. Antes é comanda transitória.

### H · Tab SALDO

Empty: "Este cliente não possui nenhum crédito."

**Form Adicionar Crédito** (via FAB → "Adicionar Crédito"):
- 👤 "Cliente" (pré-preenchido · X pra limpar)
- 📅 "Data" (default hoje · datepicker)
- 👥 "Profissional" (pré-preenchido com user logado · X)
- 💲 "Valor Crédito (R$)"
- 🏷 "Origem" (dropdown · 2 opções: "Pagamento Adiantado" / "Outros")
- 💳 "Forma de Pagamento" (dropdown)
- Botões: Voltar / Salvar (azul)

**Crítico:** crédito tem Profissional vinculado → vai pra comissão dele.

---

## Recomendações específicas pro módulo Cliente (Marko · 872 clientes)

### Fase 1 · Crítico antes da migração
1. Lista + busca tripla indexada (nome/tel/CPF) + contador "Clientes cadastrados: N"
2. Detalhe com header (avatar, contadores adaptativos, FAB +, FECHAR COMANDA) + tabs GERAL + ATIVIDADES
3. GERAL com form 3 seções (Contato/Pessoais/Endereço) + exibição só de campos preenchidos
4. ATIVIDADES com tabela + popover + dropdown de status + ✈ Enviar Lembrete (3 escopos) + 🔗 link cruzado pra comanda
5. FAB com 4 ações (Atendimento/Produto/Pacote/Crédito)

### Fase 2 · Importante
6. CONSUMO (7 KPIs + Gráfico Mensal)
7. Drill Consultar Comissões (kebab do popover)
8. SALDO com form Crédito

### Fase 3 · Polimento
9. GALERIA (stub "em breve" no MVP)
10. FICHAS com templates (sub-módulo · stub no início)
11. PACOTES tab (depois do módulo Pacotes)
12. Filtro Aniversariantes + alerta no detalhe

### Riscos
- Duplicidades visíveis na base (Marko 872 com Adneia/ADRIANA/Adriana duplicados) → fluxo **Unificar Clientes** obrigatório nas primeiras semanas pós-migração. Considerar merge automático no import (nomes idênticos + telefone idêntico).
- Busca tripla é ÚNICA nav eficiente · adicionar coluna "Último Atendimento" + "Total Gasto" pode ajudar a achar por padrão de consumo
- Status dropdown precisa de permissão pra todos colaboradores

---

## Blocos pendentes

- **Bloco 3 · final:** dúvidas remanescentes de Vendas
- **Bloco 4 · Relatório Financeiro** (drilldown completo)
- **Bloco 5 · Clientes** (busca tripla nome/tel/CPF + detalhe + bulk)
- **Lacunas frente 1:** Forms (modal vs página) · Comandas em planos superiores · Tema de Sistema (cores disponíveis) · Loading states
- **Recomendações de ordem de implementação** (dependências entre módulos)
