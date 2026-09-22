# STATUS-COMANDAPRO.md

**Produto:** ComandaPRO — SaaS de comanda, PDV e gestão para food service (bar, açaiteria, pizzaria) e assistência técnica
**Fase:** 🟢 **DOIS CLIENTES PAGANTES EM OPERAÇÃO PESADA** · R$438/mês · cobrança no Asaas OK (22/09)
**Data:** 21/08/2026 (primeiro status lido do banco, não de memória)
**Responsável:** Eduardo Barros
**Repo:** `C:/Users/Usuario/acai-system` · projeto Supabase `iuslchqmdjmsmljoqipx`
**Preço:** R$219/mês (`src/config/billing.ts`) · 14 dias de trial · sem setup · 10% off semestral, ~20% off anual

---

## Os dois clientes reais (lido do banco em 21/08/2026)

Os dois usam **fluxos diferentes do produto** — e isso importa pra ler qualquer número: quem olhar só uma tabela conclui que o outro cliente sumiu.

| | **Cantinho do Açaí** | **Medellín Music Bar** |
|---|---|---|
| fluxo | balcão + delivery (`orders`) | comanda de mesa (`tabs`/`tab_orders`) |
| pedidos em 30 dias | **936** | **1.028** |
| pedidos em 7 dias | 137 | 284 |
| faturamento pelo sistema (30d) | **R$ 26.860,67** | **R$ 20.389,40** |
| último pedido | **21/08 às 23h** | **21/08, à noite** |
| assinatura | `active`, paga até **03/09** | 🔴 `past_due`, **venceu 21/08** · carência até **24/08** |
| desde | 19/06/2026 | 04/07/2026 |

**R$47 mil transacionados pelo sistema em 30 dias, entre os dois.** É o argumento de venda mais forte que o produto tem — e nenhum material usa.

🔴 **Medellín vence hoje, com carência até 24/08.** É o cliente de uso mais intenso (284 pedidos em 7 dias, bar rodando à noite) e o que está prestes a bloquear. Cobrar antes do dia 24.

---

## Cobrança

> ✅ **22/09/2026 (Eduardo): os 2 pagantes estão no Asaas, está tudo certo.** Um paga por fora por escolha dele. O texto abaixo (21/08) é histórico — não tratar como pendência.

Confirmado no banco, de novo em 21/08: **1 loja de 14 tem `asaas_customer_id`** — e é a "Pizzaria Teste". A tabela `billing_events` tem **1 evento no total** desde sempre.

Os dois clientes reais pagam **PIX direto na chave do Eduardo**. A infra do Asaas está configurada (a rota responde, o webhook valida token), mas o fluxo nunca fechou fim-a-fim com cliente de verdade. Detalhe do diagnóstico anterior na memória `project_comandapro_cobranca_estado`.

**Consequência prática:** não existe bloqueio automático funcionando por pagamento. `past_due` do Medellín é estado de banco, não corte de serviço — o controle é manual, na cabeça do Eduardo.

---

## As 14 lojas

| Situação | Quantas | Quais |
|---|---|---|
| **Pagantes reais em operação** | **2** | Cantinho do Açaí · Medellín Music Bar |
| Cortesia / demo | 5 | Boteco Demo, Cantina do Chef, Açaí Premium Demo, Sushi Ya, Burger House |
| **Starteq Assistência Técnica** | 1 | 🧊 **CONGELADO** — o dono nunca chegou a olhar a proposta (Eduardo, 21/08). Cortesia, 16 OS no histórico, nada há 30+ dias. A vertical AT existe no produto e está construída; o que falta é o cliente responder |
| Nunca converteram (`pending_payment`) | 6 | Burger do Teste, Sushi Lab, Acai Teste T4, Pizzaria do Forno, Pizzaria Teste, Medellín_musicbar (duplicata) |

⚠️ **`Medellín_musicbar` é loja duplicada**, sem uso nenhum. A real é "Medellín Music Bar". Limpar quando for mexer em tenant.

---

## Como ler o uso deste produto (armadilha real)

O ComandaPRO tem **três fluxos de pedido**, e cada vertical usa o seu:

- **`orders`** — balcão e delivery. Um JSONB por pedido, com `createdAt`, `totalCents`, itens e consumo de estoque dentro. **Não tem coluna de data no SQL**: filtrar por período exige ler o JSON. É o fluxo do Cantinho.
- **`tabs` + `tab_orders` + `tab_order_items`** — comanda de mesa. `tabs` usa **`opened_at`**, não `created_at`. É o fluxo do Medellín.
- **`service_orders`** — ordem de serviço da vertical de assistência técnica (Starteq).

Erro cometido nesta própria leitura: contei `orders` com `created_at` (coluna que não existe) e `tabs` com `created_at` (a coluna é `opened_at`), e concluí que **os dois clientes tinham parado de usar**. Os dois estavam operando naquele minuto. Ver `λ.prova-na-fonte` — e conferir a coluna antes de afirmar que o cliente sumiu.

---

## Pendências / próximos

### 🔴 Dinheiro
- [x] ~~Medellín vencido em 21/08~~ — resolvido (22/09: os 2 no Asaas)
- [x] ~~Fechar a cobrança pelo app~~ — OK em 22/09 (Eduardo)

### Produto
- [ ] **Ficha técnica / CMV do Medellín parado** — sem ficha, não há custo por drink nem CMV (memória `project_medellin_ficha_tecnica_cmv_parado`)
- [ ] **Limpar a loja duplicada `Medellín_musicbar`**
- [ ] **Starteq congelado** — não é churn nem bug: o dono nunca olhou a proposta. Decidir se vira follow-up ou se sai da conta como lead frio. A vertical de assistência técnica segue pronta no produto, sem cliente usando
- [ ] Usar os **R$47 mil/mês transacionados** como prova de venda. Hoje nenhum material cita

---

**Ver também:**
- Status correlatos: [[STATUS-AGENDAPRO]] · [[STATUS-IMPULSO]] · [[STATUS-STARTEQ]]
- Estudos no repo: `COMANDAPRO-SAAS-BLUEPRINT.md` · `SAAS-PLANO.md` · `PDV-PLAN.md` · `OFFLINE-FIRST-PLANO.md`
- Padrões: [[PADROES-VALIDADOS]] (PADRÃO 10 — aceite não é entrega)

---

## Plano 22/09/2026 — ComandaPRO achado pelas IAs + pronto pra vários nichos

Diagnóstico (22/09, código + site no ar): a parte técnica de SEO já está quase igual à do AgendaPRO. **O que falta é o conteúdo que as IAs citam.**

| # | gap | esforço | verificado? |
|---|---|---|---|
| 1 | ✅ **no ar 22/09** (`2713526`): llms.txt virou rota com preço/teste grátis de `billing.ts` e as páginas de nicho. Comparação com concorrente NÃO entrou (sem fonte citável) | P | provado em prod |
| 2 | ✅ **no ar 22/09**: sitemap 7→10 páginas (irmãos incluídos). `/funcionalidades` (404) saiu do `MARKETING_ROUTES`. Cardápios de cliente no sitemap: ainda não | P | provado em prod |
| 3 | sorveteria nasce com cardápio de açaí — **maior do que parecia**: o cardápio público (`AcaiBuilder`) tem "açaí" fixo no texto ("ganhe açaí grátis", "seu açaí") e não há foto de sorvete. Depende de decisão do Eduardo (pote/bola × peso) | M | sim |
| 4 | /respostas com 5–8 perguntas de compra (o que funcionou no AgendaPRO) | M | não (dedução) |
| 5 | montador de pizza + 6 modelos de cardápio **só no disco, sem commit**; antes de subir: "publicar = substituir" e testar cardápio público | M | sim |
| 6 | páginas "alternativa ao iFood/Anota AI/Goomer" + Organization no JSON-LD | M | não (dedução) |
| 7 | marmita por peso não pode ser pedida online (TemplateGrid:268) | M | sim |
| 8 | montador genérico pros outros nichos | G | não bloqueia venda |

**Bug achado e corrigido 22/09:** "Clube Cantinho do Açaí" estava fixo no `AcaiBuilder` e aparecia no cardápio de TODA açaiteria/sorveteria nova. Agora "Clube {nome da loja}"; Cantinho idêntico (provado em prod).

Referência pra copiar: `agendapro/src/app/llms.txt/route.ts`, `src/lib/respostas.ts`, `src/lib/jsonld.tsx`, `src/app/sitemap.ts`.
