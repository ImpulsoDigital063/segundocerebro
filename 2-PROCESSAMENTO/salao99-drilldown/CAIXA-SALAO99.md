# Drilldown: Módulo Caixa — Salão99

> Conta investigada: Palace Nail Spa Macaé (Marko) — produção
> Data: 26/05/2026
> Modo: read-only estrito (zero escrita)
> Status crítico: **Caixa Avançado DESABILITADO** nessa conta

## ⚠️ Heads up de captura

Sub-agente CIC entregou o conteúdo abaixo mas só conseguiu listar os IDs
dos screenshots (browser tool). Os PNGs em `prints/caixa/` precisam ser
puxados manualmente do buffer da sessão CIC quando houver oportunidade.

IDs: ss_5996o0mcs · ss_6535bl8pb · ss_4729279eg · ss_5547r26fh · ss_63554omsh · ss_49901qpem

## TL;DR

Salão99 tem DOIS caixas conceitualmente distintos:

1. **Fluxo de Caixa (default, sempre ligado)** — relatório agregado read-only
   que soma receitas das comandas fechadas + despesas + taxas de cartão.
   Sem abertura/fechamento. Sem sangria/suprimento. Sem contagem física.

2. **Caixa Avançado (opt-in via chat com suporte)** — controle formal com
   abrir/fechar/sangria/suprimento, NÃO TESTÁVEL nessa conta porque está
   desabilitado. Existência confirmada via:
   - Página `/p/caixas` que oferece habilitar
   - Schema de permissões granulares já exposto em Colaboradores

Sangria e Suprimento **não existem como conceito de primeira-classe** no
Fluxo de Caixa default — a única "saída de dinheiro" registrável é via
tela **Despesas** (lançamento contábil, não saída física de cofre).

## DESCOBERTA-CHAVE #1
A tela `/p/caixas` exibe literalmente:

> "A função de controle avançado de caixa torna o sistema mais complexo e
> exige ações adicionais para controlar as contas, como abrir e fechar
> manualmente os caixas todos os dias. Na maioria dos casos, o controle
> avançado de caixa não é necessário. Para habilitá-lo, basta entrar em
> contato conosco através do chat"

Ou seja: o Salão99 trata abertura/fechamento de caixa como feature opt-in
via chat com suporte. Por default, o salão opera sem caixa formal — usa
só o Fluxo de Caixa automático.

## DESCOBERTA-CHAVE #2
Mesmo com Caixa Avançado desligado, o schema de permissões granulares de
Caixa já está exposto em Colaboradores → Configurações → Permissões. Tem
13 checkboxes específicos de Controle de Caixa (próprio + de outros).
Schema do backend já suporta tudo — só precisa flag de ativação.

---

## 1. Abertura do Caixa  ⚠️ PARCIAL (Caixa Avançado desligado)

### O que faz
No fluxo default (sem Caixa Avançado), **não existe abertura formal**. O
dia começa "aberto" automaticamente — qualquer pagamento de comanda já
cai no Fluxo de Caixa do dia.

### Schema indicativo (Caixa Avançado, inferido das permissões)
A existência de "Pode abrir o próprio caixa" e "Pode abrir caixas gerais
ou de outros colaboradores" confirma que o Caixa Avançado:
- Tem botão "Abrir caixa" explícito
- Distingue **caixa próprio** (por profissional/recep) de **caixa geral**
  (do salão)
- Permite múltiplos caixas em paralelo por colaborador

### Sem abertura formal, o que acontece se ninguém abriu e tenta receber pagamento?
No fluxo default: nada bloqueia. Cria-se comanda, marca-se pagamento
(PIX/Cartão/Dinheiro), entra no Fluxo de Caixa automaticamente. Caixa não
é pré-condição.

### Print
`prints/caixa/01-caixa-avancado-desabilitado.png` (ss_5996o0mcs)

### 🆕 GAP AGENDAPRO
AgendaPRO precisa decidir: caixa formal opcional como o Salão99 (opt-in)?
Ou sempre obrigatório? Recomendo **opcional + flag por estabelecimento**
(igual Salão99).

---

## 2. Movimentação durante o dia  ✅ DOCUMENTADO

### Onde aparece o caixa "em aberto"
Sidebar → **Fluxo de Caixa** (`/p/fluxocaixa`). Não é caixa, é o ledger
agregado.

### Visões disponíveis
Dropdown "Visão Mensal" (default) permuta entre:
- **Visão Diária** — colunas dia a dia
- **Visão Semanal**
- **Visão Mensal**
- **Visão Anual**

### Estrutura da tabela (matriz)
| Linha | Conteúdo |
|---|---|
| Saldo Inicial | Saldo final do período anterior |
| Receitas ▼ | Soma de receitas (clicável) |
| → Pix | Receita por método |
| → Cartão de Crédito | |
| → Cartão de Débito | |
| → Dinheiro | |
| → Transferência Bancária | |
| Despesas ▼ | Soma de despesas (clicável) |
| → Taxa de Forma de Pagamento | Auto: fee de cartão |
| → [outras categorias se houver] | |
| Resultado Líquido | Receitas − Despesas |
| Saldo Final | Saldo Inicial + Resultado Líquido |

### Click em valor → Detalhamento
Cada célula com `↗` abre uma tela de **Detalhamento** listando transações
cronológicas:
- Data, Descrição ("Pagamento registrado para a fatura #10751" + link
  "Visualizar Fatura"), Valor
- Inclui as linhas automáticas "Despesa - Taxa Cartão de Crédito -
  Fatura #X" (-R$5,04 etc)
- Rodapé: "Total Receitas: R$ X / Total Despesas: R$ Y"
- Botão **EXPORTAR** (não testado — provável CSV/PDF)
- ❌ Sem filtro por profissional
- ❌ Sem filtro por método de pagamento (mas Receitas já vem quebrada)
- ❌ Sem filtro por categoria de despesa
- ❌ Sem botão sangria/suprimento

### Vendas avulsas de produto?
Sim, entram no mesmo Fluxo (via comanda) — confirmado pelo filtro Tipo
em Vendas: Atendimento / Venda de Produto / Venda de Pacote / Crédito
Avulso. Todos viram fatura → pagamento → Fluxo de Caixa.

### Pacotes vendidos hoje vs consumidos hoje?
- **Vendido hoje** → entra no Fluxo do dia da venda (receita)
- **Consumido hoje (sessão usada)** → não gera nova receita (já foi pago
  na venda)
- (Inferência da arquitetura comandas+pacotes — não pude confirmar no
  edit do pacote por ser destrutivo)

### Prints
- `prints/caixa/02-fluxo-caixa-mensal.png` (ss_6535bl8pb)
- `prints/caixa/03-fluxo-caixa-diaria.png` (ss_4729279eg)
- `prints/caixa/04-fluxo-caixa-detalhamento.png` (ss_5547r26fh, ss_63554omsh)
- `prints/caixa/05-despesas-expandido.png` (ss_49901qpem)

### Regras de negócio inferidas
- Fluxo de Caixa é **derivado** (não persistido como linha independente)
  — recalcula on-read de Faturas + Despesas + Salários + Taxas
- Taxa de cartão é **automática**: configurada em Formas de Pagamento →
  cada bandeira tem `Taxa para vendas à vista` + `Configuração de vendas
  parcelado`
- Saldo "negativo" é tolerado (ex: Mar/2026 mostra -R$3.344,22)

### 🆕 GAP AGENDAPRO
- View Diária/Semanal/Mensal/Anual em **uma tela só com dropdown** (não
  4 telas separadas)
- Click em valor → detalhamento de transações
- Quebra automática de receita por forma de pagamento na própria tabela
- Linha automática de "Taxa de Forma de Pagamento" como despesa

---

## 3. Sangria (saída de dinheiro do caixa)  ❌ NÃO ACESSÍVEL

### O que faz (no Caixa Avançado, inferido)
Permissão exposta: **"Pode gerenciar sangrias no próprio caixa"** e
**"Pode gerenciar sangrias no caixas gerais ou de outros colaboradores"**.

Sem Caixa Avançado ativo, sangria **não existe como botão**. O equivalente
operacional é lançar uma **Despesa** com categoria apropriada.

### Workaround: Despesas
- Sidebar → **Despesas** (`/p/despesas`)
- Botão **CADASTRAR DESPESA** (ou + no canto)
- Modal "Criar":
  - **Nome** (text, obrigatório — label fica azul)
  - **Categoria** (picker, opcional — abre modal com busca + categorias
    do salão + botão "+" para criar nova)
  - **Despesa paga** (checkbox, default off)
  - **Valor para pagamento (R$)** (numérico)
  - **Data para pagamento** (date, default = hoje)
  - **Observações** (text)
  - **Repetir Despesa** (toggle):
    - Repetir a cada: [N] × [Dia(s) / Semana(s) / Mês(es)]
    - Próxima repetição: [auto-calculado]
    - Repetir até a data: [date]
  - Botões: Cancelar / Salvar

### Categorias existentes (custom desse salão)
BANK, Bills, Cleaning, Consumables, Equipment, Luana, Maintenance,
Manicure Probation, Marketing, Recognition, Salao99, Salon Cosmetics,
Sharpening, UNIFORMS, Venda

---

## ⚠️ Restante do drilldown (não recebido nesta entrega)

Áreas pendentes (4-8):
- 4. Suprimento
- 5. Fechamento do caixa
- 6. Pós-fechamento
- 7. Permissões (parcial · 13 checkboxes mapeados)
- 8. Relação com outras áreas

Se conseguir Caixa Avançado ligado (chat com Salão99), pedir CIC pra
voltar e drilldown essas 5 áreas. Por enquanto, o que temos resolve a
decisão estratégica (manter optional como o Salão99).
