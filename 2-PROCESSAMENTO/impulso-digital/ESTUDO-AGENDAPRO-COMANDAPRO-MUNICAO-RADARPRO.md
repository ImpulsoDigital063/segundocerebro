# ESTUDO — AgendaPRO + ComandaPRO: munição de venda pro RadarPRO

> **13/07/2026.** Todos os números de uso vieram do **banco de produção** (Supabase, service-role), não de documento. λ.prova-na-fonte.
> Eixo: quem paga, **o que segurou cada um**, o que vende, e o que NÃO pode ser prometido.

---

## 1. QUEM PAGA (row do banco, tabela `subscriptions`)

| Negócio | Plano | Status | Paga até |
|---|---|---|---|
| Olímpio Barbearia | Solo R$67 | active · asaas | 15/07 |
| Studio MOOD (Izanara) | Equipe R$97 | active · asaas | 13/08 |
| Rosy Borges Beauty Studio | Solo R$67 | active · asaas | 20/07 |
| Barbearia Guia Lopes | Solo R$67 | active · asaas | 07/08 |
| K'F BEAUTY | Solo R$67 | active · asaas | 07/08 |
| **Cantinho do Açaí (Vidal)** | ComandaPRO | pagante | — |

**MRR HOJE = R$584/mês** (AgendaPRO R$365 + ComandaPRO R$219). Medellín entrando: **R$803**.

**Usuária real em TRIAL (não paga):** Viva Cacheada (Letícia) — cortesia até 12/08.
**Contas demo (NÃO são clientes):** Império Barbershop · Studio Bella Lash.
**Base morta:** 11 dos 19 negócios cadastrados têm **uso zero**.

⚠️ **Dado sujo:** o Palace está com `price_cents = 97000` (R$970 em vez de R$97). Qualquer relatório que some isso mente o MRR.
⚠️ **O único churn da base:** Camila Delfino pagou em 12/05 e **estornou 9 minutos depois**. Motivo nunca registrado. Vale ligar e perguntar — é a informação mais barata que existe.

---

## 2. O QUE SEGUROU CADA UM (uso medido no banco)

### Olímpio Barbearia — o cliente que mais usa (R$67, desde 11/05)
- **348 agendamentos**: 104 em maio · **176 em junho** · 68 nos 13 primeiros dias de julho. Uso diário, estável.
- 178 clientes · 340 comandas · 12 cupons de retorno.
- **Fidelidade a fundo:** 161 pontos por serviço · **9 avaliações no Google creditadas** (15 pedidas) · 23 lançamentos manuais.
- **Zero produtos, zero despesas.**
→ **O que o segura: agenda + comanda + fidelidade + Google review.** Ele não toca em estoque.

### Studio MOOD / Izanara — a maior mensalidade (R$97, desde 22/05)
- **Só 11 agendamentos.** E **164 produtos cadastrados**, 9 vendas, 7 despesas.
→ **O que a segura é o ESTOQUE.** A agenda é decorativa. Isso confirma com dado o que estava cravado no status: *agenda é secundária, loja é core*. Ela paga a maior mensalidade da casa **por um módulo que não é agenda**.

### Rosy Borges Beauty Studio (R$67, desde 17/06)
- 39 agendamentos (19 em junho, 20 em julho) · 34 clientes · 20 pontos por serviço.
- **1 ficha de cílios preenchida** (26/06). Cadastrou 3 recompensas ("Uma Extensão de Cílios", "Limpeza de Pele", "Design Personalizado").
→ **O que a segura: agenda + comanda.** A ficha ela experimentou uma vez.

### Viva Cacheada (TRIAL, usuária real)
- 36 agendamentos — **34 deles em julho**. Está **acelerando**. 25 pontos por serviço.
→ **É a conversão mais provável da base.** Está usando de verdade e não paga.

### K'F BEAUTY e Barbearia Guia Lopes (R$67 cada, entraram em julho)
- 6 e 8 agendamentos. Começando. Ainda não deu pra saber o que segura.

---

## 3. A DESCOBERTA MAIS IMPORTANTE: o motor de aquisição não gira

O produto tem um motor de crescimento embutido. **Ele está montado, funciona, e está parado.**

| Mecanismo | Estado no código | **Uso real no banco** |
|---|---|---|
| **Link de convite** (rastreado, ponto só quando o afilhado PAGA, anti-fraude) | Completo | **ZERO indicações. Na base inteira. Nunca ninguém usou.** |
| **Resgate de recompensa** | Completo | **ZERO resgates.** 12 recompensas cadastradas, nenhuma trocada. |
| **Avaliação no Google** | Funciona (dono aprova na mão) | **Só o Olímpio.** 15 pedidos, 9 creditados. |
| **Ficha de anamnese** (cílios/capilar/facial) | Completa (mapping, termo, assinatura, PDF) | **3 fichas no mundo.** Rosy 1, Studio MOOD 1, demo 1. |

**Por que não gira — a causa está no código:** **ninguém avisa o cliente.** Não há e-mail, não há WhatsApp, não há cron de fidelidade. O cliente só descobre que tem saldo se entrar em `/{slug}/meus-pontos` e digitar o telefone por conta própria. **O ponto entra e morre num número que só o dono vê.**

**Consequência pra venda:** o link de convite e o resgate **não são prova, são promessa**. Não vender como "traz cliente novo" — **nenhum cliente novo veio por ele até hoje.** O que dá pra vender com prova é a **avaliação no Google** (o Olímpio faz, funciona) — e mesmo essa é honra-system, o dono aprova na mão.

**Consequência pra produto (mais valiosa que qualquer lead):** ligar a notificação de pontos é provavelmente o maior salto de valor do AgendaPRO hoje, e é barato. O motor está pronto — falta a ignição.

---

## 4. A TESE DE VENDA, corrigida pelos dados

> ## "Tira o negócio do papel."
> A comanda, o caixa, a comissão, o estoque.

**O que segura cliente hoje, medido:** **agenda + comanda** (todos usam) e **estoque** (o que segura quem paga mais).
**O que é diferencial de venda mas ainda não é prova:** ficha de anamnese, link de convite, resgate de pontos.
**O que é prova mas só num cliente:** avaliação no Google.

**Não inflar.** O que fecha venda é a dor real do balcão; o resto é bônus honesto ("já vem pronto pra quando você quiser usar").

---

## 5. Munição por trilho

### Trilho 1 — BALCÃO DE BELEZA (barbearia, salão, nail) — R$67-97
**Prova:** Olímpio (348 atendimentos, uso diário, paga desde maio), Guia Lopes, K'F Beauty.
**Dor:** *"você paga comissão sobre o valor cheio ou sobre o que entrou de verdade?"*
**Case matador:** o sistema **descobriu que o Olímpio pagava comissão a mais** (calculava sobre o bruto em comanda com cupom). → *"O AgendaPRO acha o dinheiro que vaza."*
**Bônus com prova:** avaliação no Google (o Olímpio já tirou 9).

### Trilho 2 — QUEM VENDE PRODUTO NO BALCÃO — R$97 (o trilho do upgrade)

**O AgendaPRO deixou de ser só agendamento: virou também sistema de VENDAS.** Isso nasceu do Studio MOOD — a Izanara precisava vender produto, e o produto cresceu pra atender. Hoje entrega:
- **Cadastro de estoque** (marca, fornecedor, categoria, custo, movimentação, variantes de cor/tamanho/sabor).
- **Venda dentro do atendimento** (produto entra na mesma comanda do serviço).
- **Venda avulsa / balcão** (PDV, sem precisar de agendamento).
- Entrada de estoque **vira despesa automática**; saída baixa sozinha.
- **Comissão de produto opt-in** (produto sem regra = 0% — não vaza dinheiro por engano).

**É o módulo do plano EQUIPE (R$97).** Na prática, **é o único motivo real de alguém sair do Solo (R$67) pro Equipe.**

**Quem é o alvo:** todo negócio de serviço que **também vende produto no balcão** —
barbearia (pomada, óleo, shampoo) · salão (finalizador, máscara, coloração) · studio de cílios (selante, escovinha, shampoo de cílios) · estética (dermocosmético) · nail (esmalte, kit).

**Dor:** *"você vende produto no balcão e anota onde? Sabe quanto sobrou depois do custo — e quanto ainda tem em estoque?"*
**Prova:** **Studio MOOD — 164 produtos cadastrados, paga R$97, e a agenda dela é decorativa (11 agendamentos).** Ela paga a maior mensalidade da casa **pelo módulo de vendas**, não pela agenda.
**Aprendizado duro:** parar de pitchar agenda pra quem vende produto. Pitchar **loja + financeiro** — e usar isso como caminho natural de upgrade nos clientes Solo que já vendem produto (o Olímpio, por exemplo, tem **zero produtos cadastrados** e vende pomada no balcão — é upgrade parado em cima da mesa).

### Trilho 3 — BELEZA TÉCNICA (lash, estética, química) — R$67-97
**Arma:** ficha de anamnese com **mapping desenhável** (ela risca com o dedo), curvatura/espessura, **lote da cola**, **termo assinado**, PDF por WhatsApp. Nenhum concorrente de R$67 tem.
**Prova:** a Rosy paga — e a ficha de cílios do sistema **é a ficha de papel dela**. A capilar é a da Izanara.
⚠️ **Honestidade:** só 1 ficha foi preenchida de verdade. A ficha entrou no ar em julho. **É arma nova, não é hábito.** Vender como diferencial ("já vem pronta"), não como "todo mundo usa".
**Fechar antes:** categoria "Lash designer" no cadastro · **manutenção por prazo** (o "volta em 21 dias" — hoje só existe "sumido há 40 dias") · link pra cliente preencher a ficha antes de chegar.

### Trilho 4 — FOOD SERVICE (ComandaPRO) — R$219
**A venda mais fácil que existe: o iFood leva ~27%. O ComandaPRO custa R$219 fixos.**
- Link de delivery **com a marca da loja**, preço recalculado no servidor, taxa por bairro, **troco validado**.
- **O pedido chega apitando e imprime sozinho** com nome, telefone, **bairro em negrito**, endereço e um bloco **"RECEBER DO CLIENTE — R$ X,XX"**. O cliente acompanha por código.
- **QR numerado por mesa**: petisco sai na **cozinha**, cerveja sai no **bar** — 2 comandas de preparo, 1 conta só. Cerveja tem flag "pronto pra servir" e some da fila.
- **CMV com custo congelado na venda** + dose × garrafa no bar: *"quanto do seu açaí é lucro depois do copo, do leite em pó e da colher?"*
- **Caixa sério**: sangria com PIN validado no servidor, Leitura X que não zera, fechamento com conferência tripla (dinheiro, maquininha, PIX).
- **Couvert só se tem show hoje** · taxa de serviço 10% **fora da base do couvert** (CDC) · acerto de gorjeta por garçom.
**Prova:** Cantinho do Açaí (Vidal, paga R$219) · Medellín (109 produtos, 50 mesas).

---

## 6. ❌ NUNCA PROMETER

**AgendaPRO:** WhatsApp automático (Z-API desligado — tudo é deep link manual) · Google Calendar · nota fiscal · multi-unidade · "o sistema confirma sua avaliação no Google" (**o dono aprova na mão**) · qualquer "-50% de faltas" (é copy, não métrica).

**ComandaPRO:** nota fiscal (zero código) · **funcionar offline** (a fila offline só existe no vertical de assistência técnica — **net caiu, não vende**; e a dor nº1 do mercado é "trava no pico") · aviso automático ao cliente · auto-86 (estoque zerado não some do cardápio) · **balança automática** (o parser Toledo é sólido mas **nunca foi provado em hardware** — hoje o Vidal digita as gramas).

### 🔴 As 4 LPs estão vendendo o que não existe
`/barbearia`, `/salao`, `/nail`, `/estetica` prometem que **"o sistema detecta e dispara cupom via WhatsApp"**. **Não dispara.** Além disso: o lembrete "1h antes" está agendado **1× por dia** no `vercel.json` (quase ninguém recebe), e as LPs chamam o produto de **"SmartAgenda"** em 12+ lugares, incluindo os CTAs. **Corrigir antes de prospectar** — isso é reembolso esperando acontecer.

---

## 7. RadarPRO — 561 leads, 0 venda

Existe e funciona (Next 16 + Turso + Baileys + Playwright + IA). Dormente desde 01/05.
**O que fechou de verdade:** indicação (Aura → Andressa; Gabriel → Viva Cacheada) e **ChatGPT/AEO** (a Izanara perguntou ao ChatGPT qual sistema de salão usar, o AgendaPRO apareceu, ela chegou sozinha e assinou R$97 — **a maior mensalidade da casa, por um canal gratuito nunca cultivado**).

**Por que o cold deu zero:** a lista nunca acompanhou a oferta. Raspava dono genérico do Maps pra vender **LP a R$499**. Hoje o produto é gestão recorrente. Outro ICP, outra dor.

⚠️ `TALLY_WEBHOOK_SECRET` não configurado no Vercel de produção.
⚠️ **Decidir:** o STATUS quer vender RadarPRO como SaaS; o λ.radarpro diz que **o cliente não compra** — é arma proprietária, cobra % sobre venda fechada.

---

## 8. Ordem de operação

**Bloco 0 — Caixa parado na mesa**
1. Cobrar o **Medellín** (R$219, disse sim em 04/07). → MRR R$803.
2. **Propor a manutenção do Palace** (R$297-497/mês). Ele consome dev desde 29/05 e não paga recorrência — está documentado como "proposta pendente" há um mês e meio. **É a maior mensalidade possível da carteira.** → MRR passaria de R$1.100.
3. **Converter a Viva Cacheada** — está usando mais que pagante (34 agendamentos em julho) e não paga.
4. **Ligar pra Camila Delfino** e perguntar por que estornou em 9 minutos. É o único churn e ninguém sabe o motivo.
5. **Pitchar o Equipe pro Olímpio** — ele vende pomada e tem zero produtos cadastrados. R$30/mês parado.

**Bloco 1 — Parar de mentir**
4. Corrigir as **4 LPs** (WhatsApp automático, "SmartAgenda", lembrete de 1h).
5. **Bug: "pagar com pontos" gera pontos** no fluxo mobile do Olímpio.
6. **Bug: troco some** no cupom auto-impresso do delivery (açaí).
7. **Bug: couvert de 1 pessoa** quando a mesa pede só pelo QR.
8. Corrigir `price_cents` do Palace (97000 → 9700).

**Bloco 2 — Dar ignição ao motor (maior salto de valor)**
9. **Notificar o cliente que ele tem pontos.** Hoje ninguém avisa — por isso há 0 resgates e 0 indicações.
10. **Expiração de ponto** no AgendaPRO (o ComandaPRO já tem).
11. Categoria **"Lash designer"** + **manutenção por prazo (21 dias)** + link público de ficha.
12. **Depoimento em vídeo do Olímpio, da Izanara e da Rosy.**

**Bloco 3 — RadarPRO**
13. Nova lista, novo ICP (§5), Msg 1 no λ.cold, cadência D-1 IG → D+0 WhatsApp → D+3 → D+7.
14. **Cultivar AEO de propósito** — trouxe a maior mensalidade de graça.

---

## 5b. A ESCADA: R$67 → R$97 → R$2.997 (o SystemPalace)

**O SystemPalace é o AgendaPRO.** Mesmo commit-raiz, mesmo schema. O Palace **rodou como tenant do AgendaPRO multi-tenant (plano Equipe) até 19/05** e só virou fork dedicado em 29/05.

**Prova de porte, pra matar a objeção do salão grande:** o Palace opera com **8 profissionais, 875 clientes, 828 agendamentos, 822 comandas**, recepção (Letícia, no celular), supervisora (Kelle) e dois donos. Caixa auditado: maquininha R$13.840,58 contra sistema R$13.860,80 — **fecha, sem dinheiro sumido**.
> *"Esse sistema aguenta meu salão?"* → **Aguentou um nail spa em Macaé com 8 profissionais e quase 900 clientes.**

### O que o fork entrega A MAIS (é isso que vale R$2.997)
- **31 autorizações por profissional** (agendamentos, comandas, caixa, clientes, financeiro, gestão, relatórios) — permissão granular de verdade.
- **Supervisor com aprovação de ação**: quem não tem permissão **pede**, o dono aprova no celular e a ação executa sozinha.
- **Cutoff financeiro**: histórico do sistema antigo fica visível mas **não soma** no financeiro. Essencial pra quem migra de legado.
- **Caixa muito mais robusto** (1.476 linhas contra 873 no SaaS): sangria/suprimento, trava se o dia anterior não foi fechado, reabertura só pelo dono.
- **Bônus na comissão** + log anti-fraude (tentativa bloqueada fica registrada).
- Repo, Supabase, domínio e marca **próprios** do cliente.

### Critério documentado (MODELO-SAAS-PREMIUM.md) — quando é fork
≥3 sinais: pede 3+ features fora do SKU universal · tem **regra de negócio única** · migra de legado com **1000+ registros** · tem **operador secundário com permissão restrita** · paga **R$2k+ adiantado** · é **referência do segmento**.
**Quando NÃO é fork:** quer só cor e logo · quer 1 feature que serviria pra todos · **paga só mensalidade padrão** (não cobre o custo de manter um repo paralelo).

### 🔴 As duas contas que o fork está cobrando de você
1. **O Palace não paga recorrência.** Pagou R$2.997 à vista e desde 29/05 consome desenvolvimento contínuo **de graça**. A manutenção premium (R$297-497/mês) está como *"proposta pendente"* desde então. **Está na hora de propor.**
2. **Os repos divergiram: 252 de 334 arquivos compartilhados já são diferentes**, e o `upstream` do Palace nunca foi atualizado. Você já pagou por isso — a correção de "valor líquido" de 04/07 e o PDV foram feitos **duas vezes, em separado**, num repo e no outro. Isso é o custo oculto do modelo fork.

**E o mercado já sinalizou:** o **Medellín recusou o fork de R$2.997** e escolheu R$219/mês. O trilho fork não replicou na segunda tentativa.

### O que trazer do Palace pro AgendaPRO (maior ROI de engenharia que existe hoje)
As **31 autorizações** e o **supervisor por pedido** são 100% genéricos — atacam a dor universal *"não confio na minha recepcionista com o financeiro"*. Idem o caixa robusto, o bônus de comissão e o cutoff (que já está documentado como devendo virar coluna no banco).
**Não portar:** a marca, o `CATEGORY_ORDER` do Palace, os scripts de import do Salão99 e o PIN do supervisor (o próprio Marko abandonou; a versão boa é a sem PIN).

---

## 8b. O PADRÃO: o produto cresce por cliente pagante

Os dois maiores diferenciais do AgendaPRO **não vieram de roadmap — vieram de cliente que paga**:

| Cliente | O que ela trouxe | O que virou |
|---|---|---|
| **Studio MOOD (Izanara)** | precisava vender produto no salão | **módulo de VENDAS + ESTOQUE** — hoje é o que sustenta o plano Equipe (R$97) |
| **Rosy Borges** | tinha ficha de cílios no papel | **ficha de anamnese** com mapping desenhável, termo, assinatura e PDF |
| **Olímpio** | pagava comissão sobre o bruto | **comissão sobre o líquido** — e o case *"o sistema acha o dinheiro que vaza"* |
| **Marko (Palace)** | "o Salão99 tem coisas que vocês não têm" | comandas, pacotes, despesas, fluxo de caixa, remunerações |
| **Vidal / Medellín** | açaí por peso · bar com cozinha e balcão | **ComandaPRO**: CMV, dose×garrafa, roteamento por estação |

**Consequência estratégica:** cada cliente novo de um nicho novo **paga E constrói**. Isso é argumento de venda (*"o sistema é feito com o dono do negócio, não pra ele"*) e é a razão pra escolher os próximos clientes **por nicho que a gente quer dominar**, não por quem aparecer.

**Consequência pro upgrade:** o caminho R$67 → R$97 tem nome: **vender produto**. Todo cliente Solo que vende algo no balcão é um Equipe esperando ser pitchado.

---

## 9. As cinco verdades (todas checadas no banco)

1. **MRR real: R$584/mês.** 5 pagantes no AgendaPRO + Vidal.
2. **Quem paga mais não usa agenda.** A Izanara paga R$97 e tem 11 agendamentos e 164 produtos. **É loja, não agenda.**
3. **O motor de aquisição está parado.** Zero indicações e zero resgates na base inteira — porque **ninguém avisa o cliente que ele tem pontos**. Ligar isso vale mais que 100 leads.
4. **A ficha ainda não é hábito.** 3 preenchidas no mundo. É arma nova, não é prova. Vender como diferencial, não como caso.
5. **O maior usuário do sistema é uma conta demo.** O que mais fala do produto (879 agendamentos do Império) não é cliente — cuidado ao ler qualquer métrica agregada sem filtrar demo.
