# CAF · plano de execução

Levantado em 20/08/2026, com o pagamento aceito pelo Gustavo. Escopo fechado em `ESCOPO-CAF.md`; conversa que gerou os itens em `audios/2026-08-20-whatsapp-gustavo.md`.

**Princípio que vale linha por linha:** nada do que está aqui pode mudar o comportamento dos outros 26 negócios. Toda mudança nasce atrás de uma chave, e a chave só é ligada no CAF.

---

## FASE 0 · Isolamento (é o que entra primeiro, sempre)

Migration `v124_caf_isolamento.sql`.

### Chaves em `businesses`

| coluna | default | por quê esse default |
|---|---|---|
| `agendamento_simultaneo` | `false` | recurso novo · ninguém mais ganha sem pedir |
| `convenios_enabled` | `false` | idem |
| `comissao_valor_fixo` | `false` | idem |
| `prof_registra_pagamento` | **`true`** | ⚠️ **INVERTIDA.** Aqui eu REMOVO capacidade que já existe. Se nascer `false`, tiro a baixa de pagamento da profissional de 26 negócios que usam isso todo dia. |

No CAF: as três primeiras `true`, a última `false`.

### Colunas de dados (nascem nulas, ninguém sente)

```
services.commission_amount              numeric   -- comissão fixa no preço público
services.convenio_price                 numeric   -- preço praticado no convênio
services.convenio_commission_amount     numeric   -- comissão fixa no atendimento de convênio
customers.company_id                    uuid null -- funcionário vinculado à empresa
appointments.company_id                 uuid null -- atendimento feito pela empresa
```

### Tabelas novas

```
companies              id · business_id · name · cnpj · contato_nome · contato_telefone
                       contato_email · ativo · created_at
company_professionals  company_id · professional_id        (quem pode atender pela empresa)
```

RLS igual ao padrão da casa: dono e equipe do próprio `business_id`, nada de subquery em self ([[feedback_rls_no_subquery_self]]).

**Decisão de v1:** não crio tabela de fatura fechada. O extrato da empresa é uma consulta por período, e "dar baixa" marca os atendimentos daquele período como recebidos. Menos peça, menos risco, e reversível. O custo dessa escolha: não fica um retrato imutável do que foi faturado — se ele lançar atendimento com data retroativa depois de fechar o mês, o extrato antigo muda. É aceitável agora e vira tabela própria quando doer.

---

## FASE 1 · Quinta (itens 1, 2, 5, 6, 7)

### Item 1 · dois no mesmo horário
Duas travas, as duas precisam ceder — e só pra quem tem a chave:
1. `check_appointment_overlap()` passa a sair na hora se o negócio tem `agendamento_simultaneo`
2. constraint `no_overlap_appointments` ganha `WHERE (manual_overlap_accepted IS NOT TRUE)`
3. servidor marca `manual_overlap_accepted = true` ao criar agendamento em negócio com a chave

**Risco visual:** a grade da agenda precisa desenhar dois cards no mesmo slot. Se a grade posiciona por horário absoluto, dois cards empilham e um esconde o outro. É o ponto que mais pode consumir tempo nessa fase.

**Teste obrigatório:** criar dois às 16h no CAF (passa) e tentar o mesmo no Olímpio (tem que continuar bloqueado, com a mensagem de sempre).

### Item 2 · atendimento já feito, em aberto
A data no modal **já aceita dia passado** (o input não tem `min`), e "já atendi" já existe. O que falta: hoje "já atendi" leva direto pra "como foi pago". Entra a opção **"ainda não recebi"** → atendimento concluído, comanda aberta, aparece no "a receber" que o financeiro já calcula.

### Item 5 · profissional vê só o ganho
`ProfFinanceiroView` hoje faz `total × percentual` e mostra o valor cheio junto. Com `comissao_valor_fixo`, mostra só a comissão.

### Item 6 · recorrência no mobile
Portar o `RecurringBlock` do modal do desktop pro modal do mobile. A lógica (`buildRecurringDates`, `recurring_group_id`) já existe e não muda. Semanal, quinzenal, mensal — repete o mesmo dia da semana. "Quarta e sexta" continua sendo duas séries; **não prometer uma tacada só.**

### Item 7 · profissional não registra pagamento
`api/profissional/action/route.ts` passa a recusar `paymentMethod` quando `prof_registra_pagamento = false`, e o `ProfAppointmentCard` esconde a escolha de forma de pagamento. A profissional marca "atendi" e acabou.

---

## FASE 2 · Sexta e sábado (item 3 · convênio)

- CRUD de empresa (nome, CNPJ, contato)
- Vincular **funcionários** (viram `customers` com `company_id`) e **profissionais** (`company_professionals`)
- Agendamento pela empresa: escolhe a empresa → **a lista de profissionais filtra** pra quem está cadastrado nela. Quem não está, não aparece e não pode atender por ela.
- Card do atendimento na grade mostra a empresa do convênio, o funcionário e o serviço
- Atendimento de convênio **não entra no caixa do dia** — vai pro acumulado da empresa

## FASE 3 · Domingo e segunda (itens 3 e 4)

- Aba da empresa: extrato do período com data, horário, funcionário, profissional e valor
- Exportar **Excel e PDF** (`xlsx` e `jspdf` + `jspdf-autotable` já estão no projeto)
- Dar baixa do recebimento do período
- Serviço ganha os 4 campos: preço público, comissão do público, preço convênio, comissão do convênio
- Motor de comissão: com a chave ligada, comissão = **valor fixo do serviço** (o do convênio quando o atendimento é de convênio), no lugar da porcentagem

⚠️ **Achado de 20/08 que aumenta essa fase:** a tela de Remunerações **recalcula** `base × percentual` na hora de exibir — ela não lê um valor gravado. Então não basta gravar a comissão certa: a tela de Remunerações, o histórico por profissional e a tela da profissional precisam ler a nova origem quando a chave estiver ligada. São telas de dinheiro dos outros 26 negócios; cada uma precisa provar que continua idêntica com a chave desligada.

---

## Protocolo de teste (não negociável)

1. **Read-after-write** em toda escrita: reler a row depois de gravar ([[feedback_prova_na_fonte_persistencia]])
2. **Prova em produção pelo caminho do cliente**: entrar como o dono via magic link e conferir a tela renderizada ([[feedback_deploy_prova_por_comportamento]])
3. **Regressão em tenant que NÃO é o CAF** a cada fase — Olímpio (barbearia, PIX, uso pesado) e um demo. Se qualquer comportamento mudar lá, o deploy volta.
4. `npm run build` local antes de cada push · `sw.js` bumpado a cada mudança de UI
5. Migration aplicada e conferida antes do push do código que depende dela

---

## Fora do escopo (registrado pra não virar discussão)

- Travar profissional numa empresa por período — **o Gustavo tirou** (áudio 09:57)
- Recorrência em dias diferentes na mesma série ("quarta e sexta" numa tacada)
- Casos de borda de faturamento: lançamento após o fechamento, funcionário desligado no meio do mês, pagamento parcial da empresa, valor contestado
- Remarcar — **já existe**, não é entrega nova
- 6º profissional: depende de `extra_professional_slots` e de preço que o Eduardo ainda não definiu
