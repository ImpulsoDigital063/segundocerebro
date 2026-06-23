# Precificação — quanto vale o serviço da Impulso (APPDELYVERY)

> Feito em 30/05/2026. **ATUALIZADO** com o contexto real do cliente.

## ⭐ CENÁRIO REAL (vale mais que tudo abaixo)
O "investidor" **não é investidor** — é **empresário LOCAL** de Palmas (fazenda, mercado/supermercado, logística), com **relação de confiança** com o Eduardo (Eduardo administra um prédio dele). A ideia nasceu numa conversa sobre o AgendaPRO. **Não é venda fria de agência.**

→ Preço de fábrica de software (R$70–250k, seção abaixo) **NÃO se aplica como cobrança** — serve só de referência de "quanto custaria no mercado". O cliente não pagaria isso, e o Eduardo produz rápido/barato com IA.

### Modelo certo pra esse caso: **setup acessível + mensalidade**
- **Setup (entrega do app): R$ 2.500 – 5.000** · entrada 50%. Justo pelo relacionamento + entrega rápida, sem ser de graça.
- **Mensalidade: R$ 400 – 700/mês** (hospedagem + manutenção + suporte + evolução). É aqui que mora o ganho recorrente.
- **⚠️ Não cobrar mensalidade abaixo do custo real:** Infosimples (CNH) tem **franquia mín. R$100/mês** + Supabase/Vercel quando escalar. Mensalidade tem que cobrir isso e sobrar.

### Alternativa que pode valer mais: sociedade/operação
Se ele quiser rodar como **negócio de verdade** (entregas pra várias lojas de Palmas, usando a logística dele), o Eduardo entra como **sócio/operador** e pega **% por entrega** — setup simbólico, ganho no volume. Combina com o perfil dele (logística).

### Prazo (os "10 dias")
MVP **rodando**: viável (spec + protótipo prontos). Mas **pagamento (Asaas) e verificação (FlagCheck/Infosimples)** dependem de abrir conta + aprovação de terceiros (prazo próprio). Combinar prazo realista — não prometer o que o terceiro atrasa.

---

> ⚠️ A seção abaixo é **referência de mercado** (quanto custaria numa agência) — usar só pra mostrar o tamanho do que está sendo entregue, NÃO como preço de cobrança neste caso.
> Categoria de mercado: software/SaaS sob medida (marketplace) — NÃO é site/LP.

---

## 1. O que o mercado cobra (Brasil, 2026 — FATO)

| Tipo de projeto | Faixa de mercado |
|---|---|
| App simples / MVP institucional | R$ 20.000 – 60.000 |
| **App média complexidade** (backend próprio, painel admin, push, **geolocalização**, integrações) | **R$ 60.000 – 120.000** |
| Marketplace delivery completo (tipo iFood/Uber, do zero) | R$ 300.000 – 1.500.000 |
| Delivery tipo iFood multi-loja | a partir de R$ 80.000 |
| App mobilidade tipo Uber básico | ~R$ 62.000 |
| Hora de desenvolvedor BR | R$ 45 – 120+/h |
| **Manutenção/evolução anual** | **15% – 20% do valor do projeto / ano** |

## 2. Onde o APPDELYVERY se encaixa

Não é "app simples", nem "iFood do zero". É **marketplace MVP de média-alta complexidade**, porque tem:
- GPS em tempo real + matching por proximidade (PostGIS)
- Split de pagamento (Asaas)
- Integrações de verificação (FlagCheck + Infosimples)
- **4 frentes**: app do negócio, app do entregador, painel de operação e **site institucional** + tela do cliente final

**Valor de mercado desse escopo: ~R$ 120.000 a 250.000** se cotado numa agência/fábrica séria.

## 3. O que JÁ foi executado tem valor (e é alavanca)

Antes de uma linha do app "de produção", a Impulso já entregou (fase de **discovery + design + prototipagem**):
- Inteligência de mercado + benchmark (TôNoLucro, CliqueRetire)
- **Especificação técnica completa** (banco SQL, back, front, integrações, fluxo de pagamento)
- **Protótipo navegável** (app + site) com mapa real, rota real, verificação, foto+assinatura
- Apostila + arquitetura + decisões de stack

Isso, no mercado, é um pacote de **discovery + UX + protótipo: ~R$ 15.000 a 30.000**. → É o **head start** que faz a Impulso entregar mais rápido e mais barato que uma fábrica que começa do zero. Vale mostrar isso ao investidor: ele já está recebendo meio caminho andado.

## 4. Como a Impulso pode cobrar — 3 modelos

### Modelo A — Projeto fechado (build do MVP)
- **MVP completo (Fase 1): faixa R$ 70.000 – 120.000**
  (dentro da banda "média complexidade", no topo dela pelos recursos de marketplace; competitivo vs. os R$120–250k de agência por causa do nosso head start + stack ágil Next/Supabase + IA).
- **Entrada 50%** + saldo por **marcos de entrega** (não parcela cega) — modelo Impulso.
- **+ Mensalidade de operação/evolução: R$ 1.500 – 2.500/mês** (manutenção, suporte, ajustes, novas features) — receita recorrente.

### Modelo B — Sociedade de tecnologia (o investidor é sócio, não só cliente)
- **Build a custo reduzido (R$ 40.000 – 60.000, cobre custo+risco)** + **participação**:
  - **Equity 15% – 25%** (Impulso como sócia-tech), **ou**
  - **Revenue share 8% – 15%** da receita da plataforma por X anos.
- Faz sentido se o investidor quer um parceiro de tecnologia de longo prazo (não um fornecedor). Upside grande pra Impulso se o negócio escalar (modelo TôNoLucro → Magalu mostra o teto).

### Modelo C — Híbrido (recomendado pra esse caso)
- **Build fee médio (R$ 50.000 – 70.000)** + **mensalidade (R$ 2.000)** + **pequena participação (revenue share 5–10% ou equity 10%)**.
- Equilibra: a Impulso cobre custo no curto prazo, ganha recorrente, e fica com upside sem assustar o investidor com um cheque único alto.

## 5. Custos recorrentes que são do CLIENTE (não da Impulso)
Deixar explícito na proposta (não entram no preço do build):
- APIs de verificação (~R$5–10/entregador) · Mapbox (free no início) · Asaas (% por transação) · Supabase Pro (~R$140/mês) · Vercel Pro (~R$110/mês). Base fixa ~R$350–450/mês + variável.

## 6. Recomendação pra conversa com o investidor
1. Ancorar no **valor de mercado (R$120–250k)** pra ele entender o tamanho do que está recebendo.
2. Mostrar o **head start já entregue** (protótipo + spec) — ele economiza tempo e risco.
3. Apresentar o **Modelo C (híbrido)** como principal: build acessível + mensalidade + participação. Alinha Impulso ao sucesso do negócio.
4. Se ele preferir cheque único e zero sociedade → **Modelo A**, MVP em R$70–120k, entrada 50%.
5. **Não descer o preço-âncora** sem trocar por algo (escopo menor, prazo maior, ou participação). Fechar só com escopo definido.

---

## Fontes (mercado BR, 2026)
- Custos de app / delivery / marketplace: fwctecnologia.com · alphacode.mobi · mindconsulting.com.br · shinier.com.br · supero.com.br · switchdreams.com.br
- Manutenção 15–20%/ano: dynamicasoft.com · agence.com.br
- Hora dev BR R$45–120+: calculadorabrasil.com.br · devmedia.com.br · godaddy.com/resources/br
