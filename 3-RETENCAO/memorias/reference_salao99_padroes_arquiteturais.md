---
name: salao99-padroes-arquiteturais
description: padrões arquiteturais e regras de negócio cravados via CIC em 18/05/2026 reconhecendo Salão99 · referência canônica pra replicar features no AgendaPRO
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Drilldown CIC mapeou padrões cravados do Salão99 que valem como referência canônica pra replicação no AgendaPRO. Salão99 desliga 31/05/2026 ([[salao99-fecha-31-05]]) — esses padrões valem ouro pra cobrir gap funcional ([[agendapro-gap-salao99]]).

**Padrões UX cravados (replicáveis):**
- Drill em célula → página overlay full sem sidebar (`/Detalhamento`)
- Dropdown EXPORTAR com 2-3 opções (PDF · Excel · CSV)
- Navegação por mês com chevrons + label clicável (date picker)
- Painel resumo flutuante canto inferior-direito (~280px largura)
- Duplo-click na linha = context menu (5 opções) ou abre detalhe (Clientes)
- Popover lateral à direita pra ações rápidas (~360px largura)
- Modal grande sem sidebar pra entidades importantes (Comanda ~600px)
- FAB azul com múltiplas ações expandidas (cliente · 4 ações)
- Tabs ALL CAPS na ficha do cliente
- Wizard 2 steps pra pagamento (selecionar itens → confirmar valor)
- Convenção visual: sólido = atual / tracejado = anterior em gráficos comparativos
- Drawer/overlay sem mudar URL (só `?bc=N` breadcrumb level · empilha vírgula `?bc=1,2,3`)
- Empty state minimalista: "Nenhum X foi encontrado" + CTA "+ ADICIONAR" (sem ilustração)
- Loading state oficial: tela branca + logo centralizado (sem spinner/skeleton/progress)

**Regras de negócio cravadas (críticas pro modelo de dados):**
- **Comissão é calculada NO FATURAMENTO**, não no agendamento — antes do "Faturar", comanda é transitória, só vira consumo do cliente + comissão do prof após fatura fechada
- Pacote (e toda venda) só conta na conta do cliente APÓS fatura fechada
- Crédito (saldo do cliente) tem **Profissional vinculado** → vai pra comissão dele
- Numeração de comanda é **sequencial global por business** (sem reset anual)
- "Taxa de Forma de Pagamento" é categoria de despesa AUTOMÁTICA gerada por venda paga com taxa configurada
- Saldo Inicial do Fluxo de Caixa é derivado AUTOMÁTICO do Saldo Final do período anterior (sem campo manual)
- Edição retroativa de atendimento FATURADO é permitida → dispara Recalcular Remunerações
- Salário e Comissão são entidades SEPARADAS (tabs distintas na ficha do colaborador · Salários vs Vales)
- Vales são adiantamentos cadastrados na ficha do colaborador (descontam de futuro pagamento — hipótese a confirmar)
- Fichas de Cliente são **TEMPLATES configuráveis** (Configurações → cadastra template → aplica no cliente), NÃO texto livre

**Schema de entidades novas necessárias no AgendaPRO:**
- `invoices` (Comanda/Fatura · id, business_id, customer_id, invoice_number, status, subtotal, discount, total, closed_at, cancelled_at)
- `invoice_items` (id, invoice_id, type appointment/product/package/credit, reference_id, description, quantity, unit_price, discount, total)
- `invoice_payments` (id, invoice_id, payment_method, amount, paid_at)
- `professional_vouchers` (Vales · id, professional_id, description, date, amount)
- `professional_salaries` (id, professional_id, date, amount, paid, paid_at)
- `commission_payments` (id, professional_id, period_start, period_end, total_amount, paid_amount, notes)
- `customer_credits` (Saldo · id, customer_id, professional_id, date, amount, origin · "Pagamento Adiantado"/"Outros", payment_method)
- `client_form_templates` (Fichas · id, business_id, name, fields JSON)
- `client_form_responses` (id, customer_id, template_id, data JSON, created_at)

**Campos novos em tabelas existentes:**
- `appointments` → `invoice_item_id` (FK · liga a comanda)
- `professionals` → `commission_type`, `default_commission_percent`, `payment_fee_rule`, `discount_rule`, `tip_rule`
- `customers` → `instagram`, `nickname`, `important_note`, `referral_source` (Como Conheceu), `customer_type` (PF/PJ), `birthday_day`, `birthday_month`, `birthday_year` (separados pra suportar dia/mês sem ano)
- `clients` (índice) → fulltext em nome + telefone + CPF (busca tripla indexada)

**Aplicar como?**
Sempre que for construir feature nova no AgendaPRO que tenha equivalente no Salão99, abrir [[salao99-padroes-arquiteturais]] e seguir padrão. Se for divergir, cravar o porquê.
