# Auditoria do Financeiro do SystemPalace → o que trazer pro Medellín

> Read-only, Palace em produção real (`C:/Users/Usuario/palace-system`). 5 frentes auditadas: fechamento de caixa, fluxo de caixa, despesas, comissões, visual. Método Impulso: copiar o que funciona. [[feedback_impulso_metodo_copiar_melhorar]]
> Data: 14/06/2026.

## 1. FECHAMENTO DE CAIXA (o que o Palace faz melhor)
- **Abertura separada do fechamento**: `cash_openings` (fundo de troco). Nosso já tem (cash_sessions.opening_amount). ✓
- **Conferência TRIPLA** (v80): confere **dinheiro + cartão + pix**, cada um com contagem física vs esperado e diferença salva (`cash_physical_count_cents/cash_diff`, `card_physical_count/card_diff`, `pix_physical_count/pix_diff`). Nosso só confere dinheiro. → **TRAZER**.
- Fórmula esperado dinheiro = `fundo + recebido_dinheiro + suprimentos − sangrias`. Idêntico ao nosso. ✓
- **Contagem cega** + mostra o cálculo do esperado explícito + alerta se falta/sobra > R$100.
- **Imutável**: 1 fechamento por dia (UNIQUE business+date), só INSERT. Activity log de quem abriu/fechou.
- **Bruto vs Líquido**: guarda taxas de cartão separadas (total_gross vs total_net). → **TRAZER** (ver taxa de cartão).
- Arquivos: `CaixaView.tsx`, `migration-v80-caixa-conferencia-tripla.sql`, `migration-v89-cash-movements.sql`.

## 2. FLUXO DE CAIXA
- **É VIEW DERIVADA** (sem tabela própria): receitas = pagamentos (paid_at no período), despesas = expenses. Igual nosso conceito. ✓
- **Saldo inicial derivado do saldo final do período anterior** (acumulado). Nosso não faz saldo acumulado. → **TRAZER** (saldo inicial/final por período).
- **Tabela hierárquica expansível**: linha Receitas → expande por método; linha Despesas → expande por categoria; **clica na célula → drill pra detalhamento** (lista transação a transação + export CSV). Nosso é gráfico de barras simples. → **TRAZER** (alto valor).
- **Taxa de maquininha automática**: fee% guardado em cada pagamento, deduzido como despesa `payment_fee` em tempo real. → **TRAZER**.
- **Descontos informativos** (já abatidos da receita, mostrados à parte pra não contar 2x).
- 4 visões dia/semana/mês/ano mostrando sempre as 4 últimas unidades. Nosso já tem seletor. ✓
- Arquivos: `financeiro/fluxo-caixa/page.tsx`, `FluxoCaixaTable.tsx`, `fluxo-caixa/detalhamento/page.tsx`.

## 3. DESPESAS (ganho fácil e claro)
- **Categorias FIXAS (enum)** com cor+letra: rent/products/salary/utilities/marketing/taxes/other. Nosso é texto livre. → **TRAZER**.
- **`recurring` boolean** (despesa fixa mensal, badge "recorrente"). → **TRAZER**.
- **`notes`** (contexto: "pago via pix dia 5, fornecedor X"). → **TRAZER**.
- `updated_at` + trigger (auditoria de edição). → **TRAZER**.
- Validação server-side (nome obrigatório, valor>0 e ≤1M, warning data futura).
- Breakdown por categoria com % + cores; modal de cadastro; export CSV.
- Arquivos: `DespesasView.tsx`, `expenses` (palace-schema-init.sql:2907).

## 4. COMISSÕES / REMUNERAÇÕES
- Comissão **calculada no FATURAMENTO** (comanda fechada), sobre valor LÍQUIDO (total − desconto rateado). Fonte única `commission_percentage`.
- 3 entidades separadas: `commission_payments` (período, total/parcial), `professional_vouchers` (vale/adiantamento, desconta do pagamento), `professional_salaries` (contratado fixo).
- Comissão de produto com **snapshot** (`sale_items.commission_type/value` = percent/fixed/none/null-fallback) — resiste a mudança de % depois.
- **NÃO tem gorjeta/tip distribuída** (gap do Palace).
- **Pro Medellín:** a "comissão" do bar = **taxa de serviço 10% rateada entre garçons** (gorjeta), que o Palace NÃO resolve. Modelo a criar: por comanda fechada, atribuir o garçom (origin/garcom_id) e ratear os 10%. Reusar estrutura `commission_payments` + `vouchers` pra pagar. Salário fixo só pra cozinha/gerente.
- Arquivos: `remuneracoes/page.tsx:217-222`, `lib/commission-discount.ts`, `commission_payments/route.ts`.

## 5. VISUAL (UI/UX a implantar)
- **KPI cards com variação contextual**: número grande + badge ↑/↓ % + cor (verde/vermelho). Hero do lucro com gradiente.
- **Donut SVG inline** (sem lib) com legenda lateral (formas de pagamento / top despesas).
- **Barras comparativas** atual (sólida) vs anterior (tracejada).
- **RankCard** com top 3 (ouro/prata/bronze) + barra de progresso (mais vendidos/garçons).
- **Tabela hierárquica expansível** (receita verde 8% / despesa vermelha 8%, drill por célula).
- **Modal padrão**: bottom-sheet no mobile / centered no desktop (já fazemos isso ✓).
- **Badges de categoria** com letra+cor.
- Tudo SVG inline / CSS vars — transferível direto.
- Arquivos: `DashboardFinanceiro.tsx`, `FluxoCaixaTable.tsx`, `DespesasView.tsx`.

---

## ROADMAP PRO MEDELLÍN (priorizado)

### Aplicar agora (seguro, alto valor, self-contained)
1. **Despesas upgrade**: categorias fixas (enum+cor+letra) + `recurring` + `notes` + breakdown por categoria com %. ← FEITO nesta sessão.
2. **Conferência por método no fechamento** (dinheiro + cartão + pix com esperado/contado/diferença).

### Fase 2 (médio, greenlight do Eduardo)
3. **Taxa de cartão automática**: `payment_fee_percent` por pagamento → Bruto/Taxa/Líquido no fluxo e no fechamento (cartão come 2-4% — muda o lucro real).
4. **Fluxo de caixa hierárquico + drill**: tabela expansível (receita→método, despesa→categoria) + detalhamento por célula + CSV + saldo inicial/final acumulado.
5. **Dashboard executivo visual**: KPI cards com variação + donut (formas de pagamento) + barras comparativas + rank de mais vendidos.

### Fase 3 (novo conceito, decidir modelo)
6. **Comissão/gorjeta de garçom**: ratear a taxa de serviço 10% por garçom (a partir das comandas que ele fechou) + tela de remuneração (reusar commission_payments + vouchers do Palace). É o que o Palace NÃO tem e o bar precisa.

---

## 6. IDEIAS ESTRUTURAIS — pedidos reais Marko/Luana (diferenciais validados em produção)

Cada uma nasceu de problema real e está em uso. São diferenciais de produto pro Medellín:

1. **Supervisor PIN/OTP + whitelist de ações** (Marko 28/05, evoluiu v81→v87). Recep tenta ação crítica (cancelar comanda, cortesia, zerar) → pede autorização → dono aprova remoto (WhatsApp/realtime) → OTP 6 díg (30min) libera. Dono escolhe quais das ~13 ações exigem PIN. **Pro bar: ouro** quando tiver mais de 1 operador — recep/garçom não estraga sem o dono saber, tudo auditável. `supervisor-actions.ts`, `migration-v83`.
2. **Conferência tripla de caixa** (Luana 28/05): fecha conferindo dinheiro + cartão (relatório maquininha) + pix (extrato), cada um com contado vs esperado + diferença. Mata "não vi que o débito não passou". `migration-v80`.
3. **Export Excel + CSV** (Marko 11/06): botão exporta .xlsx (valores somáveis, moeda R$, linha TOTAL) e .csv (UTF-8 BOM). Contador/fisco trabalham em Excel. Componente genérico `ExportButton.tsx` + rota `/api/.../export` com os mesmos filtros da tela.
4. **Activity log / auditoria** (`activity-log.ts`): cada ação (quem/quando/o quê), fire-and-forget, tela `/atividades`. Resolve "quem cancelou?".
5. **Cutoff financeiro** (Marko 01/06): `clampToCutoff` — financeiro conta a partir de data X (saldo inicial zero), mas histórico de pagamento intacto (base de comissão). Pro bar que abre com dados bagunçados nos 1ºs dias. `palace-financial-cutoff.ts`.
6. **Sync comanda↔item em edição retroativa** (bug real Marko 29/05): editar o pedido atualiza a linha da comanda aberta automático (trigger), preservando desconto. `migration-v89-sync`.
7. **Analytics na home** (TrendReceitaCard / TopClienteCard / Análises): receita hoje vs ontem vs média 7d + sparkline; top 3 clientes por gasto; comparativo mês vs anterior. Decisão por dado.
8. **Modal anti-engano** (Marko v91): "não pode fechar caixa por engano" — confirmação com aviso se há pendências/falta alta.

**Aplicar no Medellín (prioridade como diferencial):** Export Excel/CSV (rápido, alto valor pro contador) → Conferência tripla → Supervisor PIN (quando tiver equipe) → Activity log → Analytics → Cutoff → Sync (já temos via getTabFull).
