# CAF · Centro Avançado de Fisioterapia — escopo do projeto

**Documento vivo.** Tudo que sair das conversas com o Gustavo entra aqui. Quando a produção começar, é isto que eu leio pra saber o que fazer.

- Cliente: Gustavo Mendonça Pieruccetti · `gpieruccetti@gmail.com` · (16) 98166-7616
- Tenant AgendaPRO: `caf-centro-avancado-de-fisioterapia` · id `3b6246cb-8ab9-41bd-ad05-ac687440d27d`
- Plano: **Equipe R$97/mês** (trocado de Solo em 19/08 — 5 profissionais na clínica, 1 cadastrada até agora)
- Setup: **R$640 à vista ou 2× R$340** · entrega prometida **até segunda-feira**
- Trial estendido até 21/08 · **ainda não pagou nada**

---

## Regra que vale pra tudo

**Isolamento.** Toda mudança abaixo vale SÓ pro CAF. Os outros 26 negócios seguem exatamente como estão, e negócio novo nasce desligado — só liga quem pedir igual o Gustavo pediu. Cravado por Eduardo em 19/08/2026.

Três chaves em `businesses`, todas default `false`:

| chave | libera |
|---|---|
| `agendamento_simultaneo` | item 1 |
| `convenios_enabled` | itens 2 e 3 |
| `comissao_valor_fixo` | itens 4 e 5 |

---

## Os 5 pedidos (reunião de 19/08/2026)

### 1. Dois pacientes no mesmo horário
Marcar mais de um paciente às 16h com o mesmo profissional. **Limite livre**, sem teto. Só agendamento manual — ele **não usa link público**, então a disponibilidade que a paciente vê não muda.

**Achado técnico:** existem DUAS travas independentes, testadas isoladamente no banco em 19/08.
- Trigger `check_appointment_overlap` (v9) — só age em `pending`/`confirmed`, erro P0001
- Constraint de exclusão `no_overlap_appointments` (v40) — age até em `completed`, erro 23P01

A coluna `manual_overlap_accepted` já existe mas a trigger **ignora ela**.

**Caminho:** constraint passa a ignorar linhas com `manual_overlap_accepted`; servidor marca automático nos agendamentos do CAF; trigger consulta a chave do negócio. Nos outros 26 o campo segue falso e as duas travas continuam valendo.

### 2. Atendimento já feito, em aberto
Lançar atendimento com data passada sem baixa de pagamento. Fica visível como pendente. Dois casos: paciente que saiu devendo, e atendimento de convênio (atende hoje, recebe depois).

O hub financeiro já tem o conceito de "a receber" via comanda aberta. Falta permitir data passada sem pagamento e o atendimento de convênio não cair no caixa do dia.

### 3. Convênio PJ
**⚠️ Revisado em 20/08 pelo Gustavo — ver [[audios/2026-08-20-whatsapp-gustavo]].**

- Cadastro de **empresa** e dos **funcionários** dela
- Atendimentos dos funcionários **acumulam no nome da empresa**
- **Quem paga é a empresa** (confirmado por Eduardo), nem sempre no dia
- **Cada empresa tem VÁRIOS profissionais cadastrados** (3, 4, quantos ele precisar) — não é mais "um dedicado". O mesmo profissional pode estar em várias empresas, basta cadastrá-lo em cada uma.
- **Quem não está cadastrado na empresa não pode atender por ela.** Ao agendar pela empresa, o sistema só oferece os profissionais daquela empresa (5 na clínica, 2 cadastrados na Prefeitura → aparecem 2).
- O **card do atendimento na grade mostra a empresa**: serviço, empresa do convênio, funcionário atendido, horário (prometido por Eduardo às 10:04)
- ❌ **FORA do escopo por decisão do próprio Gustavo (09:57):** travar o profissional numa empresa durante um período ("se está na agenda da Prefeitura não atende mais ninguém"). Palavras dele: *"não é tão importante, não tem necessidade de mexer mais que isso, tem muitas coisas pra você fazer e obviamente aumenta um pouco o valor"*.
- No financeiro o atendimento aparece **identificado como convênio**, separado do caixa do dia
- **Aba própria da empresa** com botão de **exportar Excel ou PDF**: data, horário, funcionário, profissional que atendeu, valor

**A favor:** `jspdf`, `jspdf-autotable` e `xlsx` já estão instalados no projeto — exportação é layout, não infra.

**Risco assumido:** o caminho principal (acumular → fechar período → exportar → dar baixa) entra na entrega. Casos de borda de faturamento (lançamento após fechamento, funcionário desligado no meio do mês, pagamento parcial, valor contestado) aparecem no uso e viram ajuste. Não estão prometidos.

### 4. Preço de convênio + comissão em valor fixo
Quatro campos no cadastro do serviço:
1. preço público
2. valor da comissão do profissional nesse preço
3. preço de convênio
4. valor da comissão no atendimento de convênio

O dono **absorve o desconto**: profissional recebe cheio mesmo quando o convênio pagou menos.

**A comissão fixa SUBSTITUI a porcentagem** no CAF (cravado por Eduardo). Hoje o sistema usa `professionals.commission_percentage`, padrão 40%.

**A favor:** a comissão já é gravada **em valor** na linha da comanda (`invoice_items.commission_amount`), não recalculada. Trocar a origem desse número é contido, e histórico não se reescreve quando ele mudar o valor de um serviço.

**Atenção:** são telas de dinheiro dos outros 26 negócios (Remunerações, comandas, histórico). Regressão obrigatória.

### 5. Tela do profissional mostra só o ganho líquido
Hoje `ProfFinanceiroView` calcula `total × percentual` e mostra o valor cheio junto. Com a chave ligada, mostra só a comissão. Depende do item 4 existir.

### 6. Recorrência de agendamento (NOVO · 20/08)
Pedido do Gustavo às 09:45: sessão de fisioterapia é 2 ou 3 vezes por semana e remarcar paciente por paciente come o tempo dele. Quer agendar uma vez e já deixar as próximas marcadas — ex: quarta e sexta às 16h, por 10 sessões.

**Já existe, mas com dois limites:**
- Está **só no desktop** (`components/admin/desktop/atendimentos/AgendarModal.tsx`, bloco "Repetir atendimento": semanal / quinzenal / mensal, até 52, agrupa em `recurring_group_id`). **O modal do mobile não tem.**
- Repete **sempre no mesmo dia da semana**. "Quarta e sexta" sai como duas séries separadas, não uma.

**Eduardo prometeu incluir sem alterar o valor** (áudio das 09:51, dele). Portar pro mobile é barato; fazer "quarta e sexta numa tacada" é desenvolvimento novo — se ele cobrar isso, é conversa nova.

---

## Ordem de produção acordada

| quando | o quê |
|---|---|
| quinta 21/08 | chaves de isolamento + itens 1, 2 e 5 · testado e no ar |
| sexta/sábado | estrutura de convênio (empresa, funcionários, dedicado, marcação no financeiro) |
| domingo/segunda | preço convênio, comissão fixa, exportação PDF/Excel |

---

## Transcrições de áudio

Ficam em `audios/` nesta pasta, uma por conversa, no formato `AAAA-MM-DD-assunto.md`. Cada uma termina com **"o que isso muda no escopo"** — e o que mudar sobe pra este documento.

---

## Aberto / a confirmar

- ✅ **RESOLVIDO — resposta do GUSTAVO (20/08): profissional marca só o atendimento. Pagamento fica com Adm e recepção.** (Confirmado por Eduardo: foi ele quem respondeu, não decisão nossa.)
  Vira o **item 7**. Atenção: hoje o sistema faz o CONTRÁRIO — `api/profissional/action/route.ts` aceita `paymentMethod` junto com `action=completed` e grava `paid_at` + `payment_method`, e o `ProfAppointmentCard` mostra a escolha da forma de pagamento. Ou seja, **é remover capacidade que já existe**, e por isso a chave tem que nascer LIGADA pros outros 26 (`prof_registra_pagamento` default `true`, `false` só no CAF) — senão eu quebro o fluxo de quem já usa. Combina com o item 5: a profissional vê o ganho dela e não encosta em dinheiro.
- ❓ **Preço do profissional adicional.** Gustavo perguntou por texto às 09:26 quanto custa cada profissional novo e um sexto. **Ele está no teto:** plano Equipe permite 5 (`PLAN_LIMITS` em `ProfissionaisTab`), ele tem 5. Existe `subscriptions.extra_professional_slots` que soma ao limite, sem preço definido em lugar nenhum — é decisão comercial do Eduardo.
- ✅ **Remarcar já existe** (rota `remarcar` + `RemarcarModal` + arrastar na grade do desktop). Não entra no escopo pago.

- Ele nunca pagou. Entrada do setup + 1ª mensalidade antes de começar a produção.
- 4 das 5 profissionais ainda não estão cadastradas no sistema.
- A lista dos 5 itens foi enviada pra ele conferir (ele mesmo esqueceu o que pediu) — **guardar a resposta dele: é a trava de escopo.** Pedido novo depois disso é orçamento novo, não "já que está mexendo".
