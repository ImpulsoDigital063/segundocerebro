# Sistema Próprio para a Açaiteria do Vidal — Estudo Profundo

> Documento de projeto. Base pra call de amanhã (11/06) e pra execução do fork.
> Decisões tomadas em carta branca (Eduardo no cinema 10/06). O que depende dele está marcado **[VALIDAR]**.

---

## 1. Quem é o cliente

- **Vidal** — dono de açaiteria **pequena**, recém-montada. DDD 99 (Maranhão).
- Chegou por **indicação do Lucas Teixeira** ("você trabalha com sistema").
- Perfil: dono operador, fala direto, quer resolver 3 dores e saber preço. Não é tecnófilo — quer ferramenta que funcione.
- Já reagiu bem ("gostei, gostei") ao saber que existe um **modelo pré-pronto** (o Palace serviu de prova de capacidade).

## 2. As 3 dores (o que ele comprou na cabeça dele)

1. **Fidelidade por pontos** — "promoção de soma pontos". Cliente compra → acumula → resgata. É o que ele citou primeiro e repetiu.
2. **Controle financeiro** — "controle de tudo: despesas, o que entra, o que não entra". Caixa do dia a dia.
3. **Delivery via WhatsApp** — número com mensagem automática + cardápio (copo 300/500/700 com acompanhamentos e valores). Dúvida dele: "no sistema ou paralelo?". **Resposta nossa: no mesmo sistema.**

Mais: ele quer saber **preço e modelo de cobrança** (mensal/semestral) já na call.

---

## 3. Decisão de produto: FORK DEDICADO do palace-system

O palace-system já é **"fork dedicado do AgendaPRO"** com banco Supabase próprio. A açaiteria do Vidal segue o mesmo padrão que já cravamos: **cada cliente premium ganha um fork com banco próprio** (ver memória `feedback_palace_sem_limite_de_plano` — "bancos separados").

**Não** vamos meter o Vidal como uma `business` nova dentro do banco do Palace (misturaria a operação do Marko/Luana com a do Vidal). Vamos:

1. Clonar o repo `palace-system` → novo repo (ex: `acai-system` ou nome da marca do Vidal).
2. Supabase novo (projeto próprio) + Vercel novo (domínio próprio).
3. Adaptar o domínio: **salão → açaiteria** (serviços → cardápio de açaí, agendamento → pedido/balcão, recepção → operador de caixa).

Por que fork e não SaaS multi-conta agora: o codebase **já é multi-tenant por `business_id`** (RLS isola tudo), então tecnicamente caberia multi-conta — mas o modelo de negócio que o Eduardo já validou é **1 cliente = 1 sistema próprio dele**, e é exatamente o que vende o Vidal ("o senhor tem esse sistema?" → "sim, e é SEU"). Multi-conta SaaS de açaí fica como evolução futura se aparecer o 2º, 3º cliente do segmento (aí a base de fork vira template).

**Vantagem de venda:** os concorrentes (Goomer, Anota AÍ, Saipos) cobram **R$140–R$300/mês recorrente pra sempre**. Nós entregamos **o sistema dele**, sem refém de mensalidade de terceiro. Esse é o pitch.

---

## 4. Estudo de mercado (síntese acionável)

Mercado de sistema pra açaiteria tem 3 camadas:
- **A — ERP/PDV completo** (Saipos R$220–240/mês, Consumer, Yooga, STi3, ControleNaMão): gestão fiscal + estoque + financeiro. Pesado demais pra açaiteria pequena.
- **B — Cardápio digital + delivery próprio, zero comissão** (Goomer R$140+/mês, Anota AÍ R$220–300/mês, **Zuper e Alloy — específicos de açaí**, Pedizap, Cardapi.us): mensalidade fixa, pedido via WhatsApp/link. **É exatamente o vão onde nosso sistema entra.**
- **C — Marketplace com comissão** (iFood/Rappi): 12–27% por pedido. Canal opcional, nunca o núcleo.

**O vão de mercado:** todos cobram recorrência. Player específico de açaí (Zuper, Alloy) confirma que o fluxo certo é **WhatsApp-first + montagem de açaí por tamanho/complemento + fidelidade (cashback/cupom)**. Nós replicamos esse fluxo dentro de um sistema que é do Vidal.

**Features que açaiteria pequena realmente precisa (por prioridade):**
- P0: PDV balcão · cardápio com montagem de açaí · financeiro de caixa
- P1 (o que o Vidal pediu): delivery WhatsApp · fidelidade por pontos
- P2: relatórios · estoque por insumo (modelar já, ativar baixa automática só com uso real — `feedback_nao_expandir_speculativo_palace`)
- **Anti-feature (não fazer no V1):** NFC-e/fiscal, roteirização de entregador, multi-loja, totem, API oficial paga do WhatsApp.

---

## 5. Modelagem do domínio "açaí" (a parte técnica que mais importa)

Isto é o que diferencia "sistema de açaí" de "sistema de lanche genérico". Modelagem **canônica** do mercado (Goomer/Alloy/Zuper expõem assim):

```
Produto "Açaí"
 └─ Variação de TAMANHO (300 / 500 / 700 ml ...) → carrega o PREÇO-BASE
     ├─ Grupo "Acompanhamentos grátis"  (max N, grátis_até N, preço 0)
     ├─ Grupo "Frutas"                  (max N)
     ├─ Grupo "Coberturas / caldas"     (max N)
     └─ Grupo "Adicionais PAGOS"        (cada item com preço próprio; Ninho, Nutella, ovomaltine, paçoca...)
Combos = produto composto com seleções pré-fixadas (eleva ticket médio).
TOTAL = preço-base(tamanho) + Σ(adicionais pagos selecionados)
```

**Como mapeia no schema do Palace:**
- A tabela `products` (já existe, com preço/custo/estoque/categoria) vira a base do **item de cardápio**.
- Tamanho = variação de produto (precisa **adicionar `product_variants`** OU usar produtos-irmãos por tamanho — decisão técnica na execução). Recomendo `product_variants(product_id, name, price_delta|price)`.
- Grupos de complemento = **nova estrutura** `modifier_groups` + `modifiers` (min/max/grátis_até/preço). É o principal trabalho novo de schema.
- `service-categories.ts` (hoje hardcoded "Spa dos Pés" etc.) vira categorias de açaí: Açaí, Combos, Bebidas, Sorvete, etc. — **fonte única**, igual o Palace faz (`project_palace_categorias_servico`).

Faixa de preço de referência do mercado (pra desenhar o cardápio demo): 300ml ~R$9,50 · 400ml ~R$12,50 · 500ml ~R$16 · 700ml ~R$20. O Vidal define os dele na call.

---

## 6. Mapa de adaptação Palace → Açaí (módulo por módulo)

| Módulo Palace | Existe? | Açaí: o que vira | Esforço |
|---|---|---|---|
| **Financeiro / Caixa** (abrir/fechar, sangria, suprimento, despesas, fluxo de caixa, `palace-financial-cutoff`) | ✅ pronto | **Reusa quase 100%.** É exatamente "despesas, o que entra, o que não entra" do Vidal. Só renomear contexto. | Baixo |
| **Fidelidade / Pontos** (`points_transactions`, `rewards`, `customers.total_points`, `/[slug]/meus-pontos`, toggle `loyalty_enabled`) | ✅ pronto | **Reusa o motor.** Adaptar regra: pontuar por **venda paga** (não por agendamento). Modelo recomendado: "compre 10, leve 1" por telefone (ver §7). | Médio |
| **Produtos / Catálogo** (`products`, categorias, estoque, `stock_movements`) | ✅ pronto | Vira o **cardápio**. Precisa **+variações de tamanho +grupos de modificadores** (§5). | Alto (núcleo novo) |
| **Comanda / Venda** (`invoices`, `invoice_items`, `sales`, pagamento, desconto, cupom) | ✅ pronto | Vira o **pedido/PDV balcão**. Adicionar item com tamanho+modificadores ao invés de serviço. | Médio-alto |
| **Clientes** (`customers`, telefone, pontos, aniversário) | ✅ pronto | Reusa. Telefone é a chave da fidelidade. | Baixo |
| **Link público / Cardápio** (`/[slug]`, branding, QR via qrserver, `react-qr-code` instalado) | ✅ pronto | Vira o **cardápio digital web** (o que o Eduardo já prometeu no print). Trocar "Serviços" → "Cardápio", "Agendar" → "Fazer pedido". | Médio |
| **Agendamento** (`appointments`, `working_hours`, slots) | ✅ existe | **Açaiteria é balcão-first** (`feedback_modelo_balcao_first`). Agendamento de horário **não se aplica**. Reaproveitar a tabela como "pedido" (data, sem slot) ou criar `orders`. Working_hours vira só horário de funcionamento da loja. | — (desativar/simplificar) |
| **Delivery** | ❌ não existe | **Módulo novo:** taxa de entrega por bairro, retirada vs entrega, painel de pedidos (recebido→preparo→saiu→entregue), deep link `wa.me`. (§8) | Alto (novo) |
| **Permissões / Supervisor / PIN** (`permissions.ts`, recepção bloqueada, PIN) | ✅ pronto | Reusa: dono (Vidal) = poder total; operador de caixa = recepção com restrições. `feedback_palace_adm_poder_maior_que_sistema`. | Baixo |
| **Comissão por profissional** | ✅ existe | Açaiteria pequena provavelmente não tem comissão por atendente. **Desligar/ocultar** até ter uso real. | — |

**Resumo do esforço:** ~70% do sistema é **reuso direto** (financeiro, fidelidade, clientes, comanda, link público, permissões). O trabalho novo concentra em: **(a) modelagem de cardápio de açaí (variações+modificadores)** e **(b) módulo de delivery WhatsApp**.

---

## 7. Fidelidade — como vamos fazer  ✅ IMPLEMENTADO (11/06)

**Modelo escolhido pelo Eduardo: pontos por valor gasto** (R$1 gasto = 1 ponto). Combina com o "vai comprando e vai somando os pontos" do Vidal e premia ticket alto. (O "compre 10 leve 1" foi descartado em favor deste.)

Tabela de resgate (aprovada): **100 pts → Açaí 300ml · 180 pts → 500ml · 260 pts → 700ml**.

Regras (já implementadas e testadas no `acai-system`):
- **Acúmulo:** R$1 dos PRODUTOS = 1 ponto. A taxa de entrega **não** pontua.
- **Pontua só em venda PAGA** — credita quando o pedido é marcado **"entregue"** no painel (entregue = pago). Crédito único por pedido (`pointsAwarded` evita duplicar).
- **Resgate = item inteiro**, nunca vira R$ nem desconto (`feedback_pontos_nao_misturam_com_pagamento`).
- **Identificação por telefone** (chave = só dígitos; bloqueia duplicata).
- **Validade dos pontos** 60 dias (config em `loyalty.ts`).
- **Resgate confirmado pelo operador** no balcão (admin `/admin/fidelidade` → botão Resgatar → escolhe o prêmio disponível). API valida saldo (recusa se insuficiente).
- Cliente vê saldo em **`/meus-pontos`** (busca por telefone, sem login): saldo + barra de progresso pro próximo prêmio + tabela de troca + histórico.

Arquivos: `src/lib/loyalty.ts` (regra+tabela), `src/lib/customers-store.ts` (clientes+pontos), `src/app/api/pontos/` (GET saldo/lista + POST resgate), crédito no `PATCH /api/pedidos/[id]` ao entregar. Testado ponta a ponta (ganhar/consultar/resgatar/recusar).

---

## 8. Delivery via WhatsApp — como vamos fazer

O Vidal pediu: cliente manda mensagem → recebe cardápio automático → vê copos 300/500/700 com valores. Sem pagar API oficial cara do WhatsApp, a solução de mercado (Zuper/Pedizap/Cardapi.us) é:

**Fluxo entregável:**
1. **Cardápio web próprio** (do nosso sistema, em `/[slug]`) com montagem de açaí (tamanho + complementos + adicionais pagos).
2. **Saudação automática do WhatsApp Business** (config nativa grátis: Ferramentas comerciais → Mensagem de saudação) apontando pro link do cardápio. Cobre o "mensagem eletrônica automática" que ele descreveu. *Limite real: a saudação dispara 1x por cliente e só de novo após 14 dias — serve pro 1º contato, não pra todo pedido.*
3. **Botão "Finalizar pedido"** no cardápio gera um **deep link `wa.me`** com o pedido já formatado em texto, abrindo a conversa no WhatsApp da loja com a mensagem pronta. O dono recebe pedido estruturado **sem API paga**.
4. **Painel de pedidos** no admin (status: recebido → preparo → saiu → entregue) pra não depender só do chat.
5. **Taxa de entrega por bairro** + opção **retirada vs delivery**.

Isso entrega exatamente o que ele pediu, sem custo de API e sem mensalidade de terceiro. Evolução futura (V2): bot real no WhatsApp se o volume justificar.

---

## 9. Financeiro — como vamos fazer

Reuso quase total do Palace (é o pedido "controle de tudo, despesas, o que entra/sai"):
- Caixa: abrir / fechar / sangria / suprimento (já existe; sangria/suprimento estava em finalização no Palace — herda).
- Despesas por categoria (aluguel, insumos, salário, utilidades…).
- Fluxo de caixa do dia + relatório de vendas.
- **Receita por data de pagamento** (`paid_at`), pendentes por data do pedido — regra `feedback_recebido_por_data_de_pagamento` já cravada no código.
- `palace-financial-cutoff` (corte do dia configurável) herda direto.

---

## 10. Arquitetura técnica

- **Stack** (herdada do Palace, zero risco): Next.js 16 (App Router) · React 19 · Supabase (Postgres + Auth + RLS) · Tailwind 4 · jsPDF (recibos) · react-qr-code · Resend (email).
- **Banco novo** Supabase dedicado. Schema = `palace-schema-init.sql` adaptado (remove agendamento/working_hours pesados, adiciona `product_variants` + `modifier_groups` + `modifiers` + `delivery_zones` + `orders` se necessário).
- **Multi-tenant ready** mas usado single-business (1 conta = Vidal). RLS por `business_id` já isola.
- **Light-only** (sem dark mode) — `feedback_agendapro_light_only_sem_dark`.
- **Tri-modal responsivo** (mobile/tablet/desktop) — `feedback_estrategia_tri_modal_breakpoints`. **Mobile é o principal** (`feedback_mobile_e_o_principal_verificar`): o Vidal vai operar no celular. CTA visível sem rolar.
- **Zero emoji, SVG inline** (`feedback_sempre_svg_nunca_emoji`).
- **Adm (Vidal) sempre sobrepõe o sistema**; operador de caixa tem trava com PIN (`feedback_palace_adm_poder_maior_que_sistema`).

---

## 11. Escopo faseado

**V1 — MVP que opera e cobre o pedido (4 dores → fluxo vivo):**
- Cardápio de açaí: tamanhos (300/500/700ml) + grupos de complemento (grátis-até-N) + adicionais pagos.
- PDV balcão: monta pedido, soma total, registra pagamento (dinheiro/Pix/cartão).
- Financeiro de caixa: entradas, despesas, fechamento.
- Cardápio web público + QR + deep link `wa.me` + saudação automática WhatsApp.
- Painel de pedidos (delivery/retirada) com status.
- Taxa de entrega por bairro.

**V1.1:**
- Fidelidade "compre 10, leve 1" por telefone (pontua só em venda paga).
- Relatórios: vendas/dia, mais vendidos, ticket médio.

**V2 (só com uso real):**
- Estoque por insumo com baixa automática (modelar receita já no V1).
- Pontos por valor gasto (Modelo B).
- iFood como canal opcional. Bot WhatsApp real se o volume pedir.

---

## 11.1 Backlog — fila de ideias (Eduardo, 11/06)

Ideias cravadas pra entrar depois do MVP (não fazer agora, é fila):

- ~~**Caixa de balcão (PDV)**~~ ✅ **FEITO (11/06)** — aba "Balcão" no admin: catálogo (açaí: tamanhos + adicionais pagos · produtos de revenda do estoque) → comanda → cobrar (dinheiro c/ troco, Pix, cartão) → finaliza. Ao finalizar: registra venda (order mode=balcao, status=entregue, paga) + baixa estoque dos produtos + credita pontos (se telefone). Falta só: baixa automática de insumos do açaí por ficha técnica (evolução).
- ~~**Controle de estoque com validade**~~ ✅ **FEITO (11/06)** — aba Estoque no admin: insumos/produtos (qtd, unidade, categoria), validade com alerta de vencimento (≤7 dias/vencido), estoque mínimo com alerta de baixa, entrada/saída com histórico. Falta só a **baixa automática por ficha técnica** (vincular insumos a cada item e abater na venda) — evolução, ativar com uso real.
- ~~**Estoque de outros produtos**~~ ✅ coberto pela aba Estoque (categorias: insumo/fruta/cobertura/embalagem/bebida/outro — bebidas e avulsos entram aqui).

Esses três casam com a §6 (módulos herdados do Palace: comanda, produtos, stock_movements) — o trabalho é adaptar, não criar do zero.

## 12. Pricing — proposta pra apresentar **[VALIDAR com Eduardo]**

O Vidal perguntou "mensal ou semestral?". Recomendação, ancorada no padrão já cravado (`feedback_pricing_5050_bonus_destrava` — premium R$1–3k, entrada 50% + saldo flex + 1 bônus) e na realidade de açaiteria pequena no interior do MA:

**Estrutura recomendada — Setup único + manutenção mensal enxuta:**
- **Implantação (one-time):** o sistema é dele. Faixa **R$1.000–R$1.800** (açaiteria pequena, capacidade menor que cliente urbano). Entrada 50% + saldo na entrega. 1 bônus destravador (ex: cardápio digital montado + QR impresso de brinde).
- **Manutenção mensal:** **R$X/mês** cobrindo hospedagem (Supabase/Vercel), suporte e ajustes. Faixa sugerida **R$80–R$150/mês** — ainda **abaixo** do Goomer/Anota AÍ (R$140–300), e é o sistema DELE, não aluguel.
- **Argumento-chave:** "Os outros cobram R$200+/mês pra sempre e o sistema nunca é seu. Aqui você paga a montagem uma vez, o sistema é seu, e a mensalidade é só pra manter no ar e dar suporte — menos que metade do iFood/Goomer."

**Por que não puro-mensal estilo SaaS:** não temos infra de cobrança recorrente automatizada por cliente ainda, e o diferencial de venda é "sistema próprio". Setup + manutenção comunica isso melhor.

> Eduardo decide os números finais. Acima é a recomendação fundamentada. **Não descer a âncora** na primeira objeção (`feedback_pricing_5050_bonus_destrava`).

---

## 13. Plano de execução (ordem técnica, pós-validação)

1. Fork `palace-system` → `acai-system` (repo + Supabase + Vercel novos). Conferir conta `gh` ativa antes do push (`feedback_gh_active_account_check`).
2. Schema: rodar `palace-schema-init` adaptado; criar `product_variants`, `modifier_groups`, `modifiers`. **Migration antes de push** (`feedback_migration_antes_de_push`); dump de policies antes de mexer em RLS (`feedback_rls_dump_pgpolicy_antes`).
3. Reskin: `service-categories.ts` → categorias de açaí; copy "Serviço"→"Item", "Agendar"→"Pedir".
4. Cardápio: UI de montagem (tamanho + grupos de modificador) no admin e no público.
5. PDV balcão: pedido com modificadores → comanda → pagamento → pontos.
6. Delivery: zonas/taxa, painel de pedidos, deep link `wa.me`.
7. Financeiro: validar caixa herdado (read-after-write, `λ.prova-na-fonte`).
8. Fidelidade: configurar "compre 10 leve 1".
9. **Audit solo obrigatório** antes de entregar (`feedback_modo_solo_audit_obrigatorio`): curl + puppeteer no mobile 390–414px.
10. Demo ao vivo pro Vidal (ele dá ideias, a gente ajusta — foi o que o Eduardo prometeu no áudio 2).

---

## 14. Pendências pra call de amanhã (perguntar ao Vidal)

1. **Nome da loja / marca** (logo? cores?) — pra branding do sistema e do cardápio.
2. **Tamanhos e preços** dos copos (300/500/700? outros?) e a tabela de adicionais.
3. **Acompanhamentos:** quais são grátis (e até quantos) e quais são pagos (e quanto).
4. **Delivery:** já entrega? quais bairros e taxas? ou só retirada por enquanto?
5. **Fidelidade:** confirma "compre 10 leve 1" ou prefere pontos por valor? Qual o prêmio?
6. **WhatsApp:** número que vai usar (WhatsApp Business já configurado?).
7. **Operação:** trabalha sozinho ou tem atendente? (define se precisa login de operador + PIN).
8. **Volume:** quantos pedidos/dia mais ou menos? (dimensiona delivery).

## 15. Antes da call — ação do Eduardo
- **Responder o horário** que o Vidal pode ligar amanhã (ele perguntou "a partir de que horas?").
- Validar pricing (§12).
- Confirmar se quero abrir o fork já ou só depois da call.

---

## Princípios cravados aplicados neste projeto
`feedback_modelo_balcao_first` · `feedback_pontos_nao_misturam_com_pagamento` · `feedback_pricing_5050_bonus_destrava` · `feedback_palace_sem_limite_de_plano` (bancos separados) · `feedback_palace_adm_poder_maior_que_sistema` · `feedback_agendapro_light_only_sem_dark` · `feedback_mobile_e_o_principal_verificar` · `feedback_estrategia_tri_modal_breakpoints` · `feedback_sempre_svg_nunca_emoji` · `feedback_recebido_por_data_de_pagamento` · `λ.prova-na-fonte` · `feedback_modo_solo_audit_obrigatorio` · `feedback_nao_expandir_speculativo_palace` · `feedback_nao_clonar_projeto_anterior` (stack OK, identidade do zero).
