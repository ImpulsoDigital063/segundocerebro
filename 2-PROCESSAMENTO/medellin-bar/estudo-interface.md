# Estudo de Interface — PDV Medellín (base: padrão Salão99 cravado)

> Método Impulso: usar o que já funciona. Fonte = nosso padrão canônico `verbo-design/06-PAINEL-SAAS-PADRAO.md` + memória `salao99-padroes-arquiteturais` (auditado via CIC 18/05). Não reinventar.
> Foco: telas operacionais (Caixa · Mesas · Comanda · KDS). Aplicar no dark neon do Medellín.

## Princípio-mãe (Salão99)
Painel = **ferramenta operacional**, não app de marketing. Layout consistente, navegação primária na sidebar, cada tela com UMA responsabilidade. Densidade média, leitura rápida, toque grande.

---

## 1. SHELL (layout base)
**Padrão Salão99:** sidebar fixa esquerda 256px (colapsa 72px), agrupada por função com header de seção em CAPS; header de view sticky (título grande + subtítulo + ações à direita); BottomNav < lg; conteúdo com gradient sutil + vignette.

| Já temos | Ajustar |
|---|---|
| ✓ Sidebar fixa 256, agrupada (Operação/Financeiro/Ajustes/Demo), drawer mobile | + **Colapsar pra 72px** (ícones só) — falta. Útil no balcão pra dar espaço à registradora |
| ✓ Header de view (TopBar) | OK |
| ✓ Gradient/vignette (neon) | OK |

---

## 2. CAIXA / REGISTRADORA
**Padrão Salão99:** **Modal grande (~600px)** pra entidade importante (Comanda); **Wizard 2 steps** pra pagamento (1: selecionar itens → 2: confirmar valor/forma); ícone de impressora no header do modal; valores em `tabular-nums`; cores semânticas (verde=pago).

| Já temos | Ajustar |
|---|---|
| ✓ Registradora (grade + carrinho fixo), taxa 10%, troco, cupom | OK — está aderente |
| ✓ Modal de receber comanda | **Alargar pra ~600px** (hoje é max-w-sm) — é a "entidade importante" do Salão99 |
| — | Avaliar **wizard 2 steps** no receber (itens → confirmar) — Salão99 faz; pro nosso fluxo rápido talvez 1 step baste. Decidir com Eduardo |
| — | **Multi-pagamento** (parte dinheiro + parte cartão) — Salão99 tem `invoice_payments` N por comanda. Hoje pagamos em 1 forma. Fase 2 |

---

## 3. MAPA DE MESAS
**Padrão Salão99:** não tem mesas (é salão), mas vale a convenção: grid de cards, **status por cor semântica**, placeholder forte mesmo vazio, valor em tabular-nums, empty state minimalista ("Nenhum X" + CTA outline).

| Já temos | Ajustar |
|---|---|
| ✓ Grid de mesas, ocupada (accent + valor + hora) vs livre, agrupado salão/balcão | OK |
| — | **Comanda vazia R$0,00** = ruído (criar comanda só no 1º item). Já mapeado pra corrigir |
| — | Mostrar **número sequencial da comanda** (Salão99: numeração sequencial global por business) |

---

## 4. COMANDA / PAGAMENTO
**Padrão Salão99:** Modal grande 600px · numeração **sequencial global** · status `open/closed/cancelled` · comissão calculada **no faturamento** (não antes) · multi-pagamento · edição retroativa recalcula.

| Já temos | Ajustar |
|---|---|
| ✓ Comanda com itens, taxa 10%, receber+fechar+cupom | OK |
| — | Número de comanda sequencial visível |
| — | Botão **cancelar comanda** (status cancelled) — Salão99 tem; falta |

---

## 5. KDS (cozinha)
**Padrão Salão99:** não tem KDS. Usar convenção geral: card + **cor por status** (verde/amarelo/cinza/vermelho), tempo visível, sem animação pesada.

| Já temos | Ajustar |
|---|---|
| ✓ Kanban Pendente→Preparando→Pronto, tint por status, tempo, auto-print | OK — aderente |

---

## Cores semânticas (cravado Salão99) — padronizar
Estados NUNCA usam o accent; usam cor semântica:
- **Verde** `#10B981` = pago / pronto / confirmado
- **Cinza** = pendente / neutro
- **Vermelho** `#EF4444` = cancelado / erro / alerta
- **Amarelo** `#F59E0B` = alerta médio / aguardando

→ Revisar nossas telas pra usar verde/amarelo/vermelho nos ESTADOS, e o neon/gold só pra marca e CTA.

---

## ANTI-PATTERNS (cravados pelo Eduardo — NÃO repetir)
1. **Botão fantasma** (texto solto sem fundo/borda) → todo botão tem bg + border 1px + padding + ícone + label. ✓ já seguimos.
2. **Linha clicável só no ícone** → a linha INTEIRA vira `<button>`. ✓ nossos cards são button.
3. **Empty state com CTA disabled sem explicação** → esconder ou badge "Em breve".
4. **Replicar feature do concorrente sem ter o problema dela** → validar no nosso modelo antes. (ex: não copiar "recalcular" se nosso cálculo é on-the-fly).

---

## Regras de negócio (modelo de dados) a alinhar
- Numeração de comanda **sequencial global por business** (sem reset).
- Fluxo de caixa **derivado** (sem tabela própria): receitas = payments.paid_at, despesas = expenses. ✓ já fazemos.
- "Taxa de forma de pagamento" = **despesa automática** por venda paga com taxa (ex: cartão 3%). Fase 2 — relevante pro lucro real.
- Saldo inicial do período = saldo final do anterior (derivado).

---

## PRIORIDADE DE APLICAÇÃO (o que mexer no build)
1. **Comandas vazias R$0,00** — criar comanda só no 1º item + cancelar comanda. (limpa o caixa)
2. **Modal de comanda → grande (~600px)** com número sequencial e ícone impressora no header.
3. **Cores semânticas nos estados** (verde pago / amarelo aguardando / vermelho cancelado).
4. **Sidebar colapsável (72px)** pra dar espaço à registradora no balcão.
5. (Fase 2) multi-pagamento, taxa de cartão como despesa automática, wizard 2 steps.

Quando o CIC trouxer telas reais de PDV (Square/Toast/Saipos), cruzo com este estudo e incremento.
