# Studio Isis Melo — escopo do projeto

**Documento vivo.** Tudo que sair das conversas com a Isis entra aqui. Quando a produção começar, é isto que eu leio pra saber o que fazer. Mesmo padrão do [[../caf-fisioterapia/ESCOPO-CAF]].

- Cliente: **Isis Melo** (dona) · Studio Isis Melo · (27) 99747-8850 · Espírito Santo
- Conta criada por: **Josiane Ponath (Joyce)** · `josianeponath20@gmail.com` — é ela quem consta como titular hoje
- Tenant AgendaPRO: `studio-isis-melo` · id `192ff88d-d435-4897-92d4-a19a007d4804`
- Plano: **Equipe R$97/mês** (subiu de Solo em 20/08, a pedido dela) · trial cortesia até **27/08 14h06** · **nunca pagou nada**
- Setup: **R$640** · PIX à vista ou cartão via link de cobrança do Asaas (pode parcelar em 2× R$340) · bônus: **1 mês de assinatura incluso (R$97)** · mesma condição do CAF (cravado por Eduardo em 21/08)
- Reunião de abertura: 20/08/2026, 18h

---

## Regra que vale pra tudo

**Isolamento.** Toda mudança que sair daqui vale SÓ pro Studio Isis Melo, atrás de chave em `businesses` com default `false`. Os outros negócios seguem como estão e negócio novo nasce desligado. Mesma regra cravada no CAF em 19/08/2026.

---

## Os pedidos (reunião de 20/08/2026)

> Lista digitada pelo Eduardo em 21/08. **Os áudios da Isis ainda vão entrar** e podem revisar qualquer item — principalmente o 6.

### 1. Horário quem decide é Adm e recepção
Tirar a edição de horário da tela das profissionais.

**Achado:** são DUAS camadas, esconder a tela não basta.
- Tela `src/app/profissional/(protected)/horarios/page.tsx`
- RLS **v19** dá INSERT/UPDATE/DELETE de `working_hours` ao próprio `professional_id`

**Caminho:** chave no `businesses` (default: como é hoje) + esconder a tela + a policy passar a consultar a chave. Mexer só na UI deixa a permissão viva no banco.

### 2. Profissional não cria agendamento do zero
Só Adm e recepção criam. A profissional pode **adicionar serviço extra** dentro de um agendamento existente, mas **não pode excluir**.

**Achado — metade já existe, é configuração:**
- `businesses.professionals_can_book_self` (v98a) e `professionals_can_book_others` (v98b). No tenant dela o `book_self` está **true** — desligar as duas resolve "não cria do zero" **sem uma linha de código**.
- A área profissional hoje só tem as ações `confirmed`, `completed`, `cancelled` (`api/profissional/action/route.ts`). **Não existe** adicionar serviço → isso é desenvolvimento novo.
- "Não pode excluir": hoje ela consegue cancelar por essa mesma rota. Bloquear sob chave.

### 3. Bônus no pagamento de remunerações
Isis quer lançar bônus pra profissional, como no System Palace.

**Achado:** existe no Palace — `src/components/admin/remuneracoes/DarBonusModal.tsx` (+ `RegistrarPagamentoModal`). No AgendaPRO não há nada equivalente. É **backport**, não invenção: portar o modal e a migration que sustenta o lançamento.

### 4. Comissão líquida (desconto abatido) — ✅ JÁ FUNCIONA ASSIM
**Achado:** `src/lib/commission-discount.ts` (`getApptDiscountMap`, regra Luana · 01/06/2026). A comissão já incide sobre o valor final pago pela cliente: o desconto da comanda é rateado proporcionalmente por item e abatido do `total_price` antes de calcular. Vale em **todas** as telas de remuneração.

**Zero desenvolvimento.** É demonstração, não entrega. Não vender como item.

⚠️ `professionals.discount_rule` existe na tabela mas **nenhum código lê** — campo morto herdado. Não usar como prova de nada.

### 5. Sinal decidido no ato do agendamento
Sinal ligado, mas ao finalizar o agendamento o sistema pergunta: cobra sinal desse ou não?

**Achado:** o motor do sinal está pronto (v112–v118). A isenção que existe hoje é **por cliente** — `customers.sinal_isento` (v118, "dispensar o sinal de quem a dona confia"), não por agendamento.

**Caminho:** campo de decisão no próprio agendamento + a pergunta no fim do fluxo de marcação. Novo, mas encosta em motor pronto — não é sinal do zero.

### 6. Comissão diferente por serviço (categoria é secundária)
**Revisado 21/08 pelos áudios dela — ver [[audios/2026-08-21-isis-comissao-por-servico]].**

O driver **não é categoria**: é **quem fornece o material**. O percentual é atributo do SERVIÇO, e a mesma profissional recebe diferente em cada um.

| serviço | profissional | material |
|---|---|---|
| Manicure e pedicure | **50%** | do studio |
| Podologia | **70%** | da profissional |
| Unha de gel no pé | **70%** | da profissional |

**Achado:** é o item mais pesado dos seis.
- Comissão hoje é **por pessoa** — `professionals.commission_percentage`. Não existe percentual por serviço no AgendaPRO **nem no Palace**.
- Por isso a Tassiane está cadastrada com 30%, número que não corresponde a nenhuma regra real dela. O cadastro atual já está errado.
- Mexe na **origem do número da comissão**, hoje gravado em valor na linha da comanda (`invoice_items.commission_amount`). A favor: histórico fechado não se reescreve quando ela mudar um percentual.
- Telas de dinheiro dos outros 26 negócios (Remunerações, comandas, histórico) entram em risco de regressão. Chave de isolamento obrigatória + regressão antes de subir.

**Categoria de serviço** (o que ela pediu com essas palavras na reunião) não existe hoje — `services` tem name, price, duration_minutes, active, points, public_visible. Se entrar, é organização de vitrine, escopo separado deste.

**Confirmado por ela em 21/08 ("Isso aí"):** padrão da casa é **70% profissional / 30% studio**; manicure e pedicure é a única exceção, **50%**. Sem outras exceções. Trava de escopo guardada no md do áudio.
---

## Isolamento — o que precisa de chave

Itens **1, 2, 5 e 6** mudam comportamento que os outros 26 negócios usam hoje. Cada um atrás de chave em `businesses`, nascendo com o comportamento ATUAL como default. Item 3 é aditivo (não tira nada de ninguém). Item 4 não mexe em nada.

## Estado do tenant hoje (lido no banco em 21/08/2026)

**Equipe — 4 de 5 profissionais + 1 recepção**

| pessoa | papel no sistema | acesso |
|---|---|---|
| Isis Melo | `owner` · atende | **nenhum** — sem e-mail cadastrado |
| Josiane Ponath | `owner` · atende · comissão 25% | login próprio (é a titular atual) |
| Tassiane Regina Pontes | `professional` · comissão 30% | nenhum |
| Studio Isis Melo | recepção (`is_receptionist`) | nenhum |
| ~~Eduardo~~ | `professional` | conta de teste nossa — **remover antes da entrega** |

**Configuração**
- Serviços: **1** — Manicure e pedicure · R$60 · 90min
- Horários: 12 faixas, segunda a sábado
- Clientes: 1 (teste) · Agendamentos: 1 (teste) · nenhum atendimento real ainda
- Marca: sem logo, sem capa, sem endereço · cores no padrão de fábrica
- Link público: https://www.agendapro.net.br/studio-isis-melo

---

## Pendências já levantadas (não são pedido dela — são coisa nossa)

1. ~~Troca de titularidade~~ — **RESOLVIDA 21/08.** `businesses.owner_id` aponta pro login da Isis (`isismelo.im@gmail.com` · user `963ade9f`), cadastro "Isis Melo" vinculado como `owner`. Josiane virou `professional` mantendo login e senha. Falta só a Isis criar a senha dela pelo "Esqueci a senha".
2. **Tassiane e a recepção seguem sem login.** Só Isis e Josiane têm acesso. Precisa do e-mail de cada uma — foi o motivo declarado do upgrade pro Equipe.
3. **A recepção está com `role: owner` e `is_owner: true`** — poder de dona numa conta de balcão. Limpar.
4. **Só 1 serviço cadastrado.** Salão de manicure com um item só; a agenda pública não recebe pedido de mais nada.

---

## Transcrições de áudio

Ficam em `audios/` nesta pasta, uma por conversa, no formato `AAAA-MM-DD-assunto.md`. Cada uma termina com **"o que isso muda no escopo"** — e o que mudar sobe pra este documento.

---

## Aberto / a confirmar

- ~~Os pedidos da reunião~~ — **6 itens registrados 21/08** (digitados pelo Eduardo + áudios dela sobre o item 6).
- ~~Valor do setup~~ — **FECHADO 21/08: R$640 + 1 mês de assinatura de bônus.** PIX à vista ou link Asaas. 🔴 **Produção só começa com o pagamento na conta** — regra fixa do Eduardo, cumprida no CAF (pagou em 20/08 e só aí começou).
- **Trial vence 27/08 14h06.** Com o bônus de 1 mês, a 1ª mensalidade dela cai só ~30 dias depois de fechar. **Pagamento integral antes de começar a produção** — mesma regra do CAF.
- Trava de escopo: quando a lista estiver fechada, mandar pra ela conferir e **guardar a resposta**. Pedido novo depois disso é orçamento novo.
