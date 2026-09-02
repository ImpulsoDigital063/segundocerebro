# Studio Isis Melo · plano de execução

Levantado em 21/08/2026. Escopo em `ESCOPO-ISIS.md`; a fala dela sobre comissão em `audios/2026-08-21-isis-comissao-por-servico.md`.

**Princípio que vale linha por linha:** nada aqui pode mudar o comportamento dos outros negócios. Toda mudança nasce atrás de chave, e a chave só é ligada no `192ff88d` (Studio Isis Melo).

**Tenant:** `studio-isis-melo` · `192ff88d-d435-4897-92d4-a19a007d4804`

---

## ⚠️ Coordenação com a frente do CAF (ler antes de tocar no repo)

O CAF está sendo produzido **no mesmo repositório, ao vivo, por outra instância**. Em 21/08 já entraram os commits `eb73f10`, `fdc1cc1`, `ed32591`, `6613ea5`, `0869cab` — convênio, extrato com exportação e comissão em valor fixo.

| o que | estado |
|---|---|
| migrations ocupadas | até **v128** (`supabase/migrations/`) — a Isis começa em **v129** |
| arquivos que as duas frentes tocam | `ServicosTab`, telas de `financeiro/remuneracoes/*`, `api/profissional/action`, trigger `snapshot_commission_amount` |

**Regra:** `git pull` antes de começar qualquer item, e todo teste roda em **dois tenants** — Isis (comportamento novo) e um de controle (Olímpio ou a demo Studio Marcela, que têm que continuar idênticos).

---

## FASE 0 · Isolamento

Migration `v129_isis_isolamento.sql`.

### Chaves em `businesses`

| coluna | default | por quê esse default |
|---|---|---|
| `prof_edita_horario` | **`true`** | ⚠️ **INVERTIDA.** A RLS **v19** dá escrita de `working_hours` à própria profissional em todos os negócios. Nascer `false` tiraria isso de 27 tenants. Isis: `false` |
| `prof_cancela_agendamento` | **`true`** | ⚠️ **INVERTIDA.** Hoje a profissional cancela pela `api/profissional/action`. Isis: `false` |
| `prof_adiciona_servico` | `false` | capacidade nova, ninguém ganha sem pedir. Isis: `true` |
| `sinal_por_agendamento` | `false` | idem. Isis: `true` |
| `comissao_por_servico` | `false` | idem. Isis: `true` |

### Colunas de dados (nascem nulas, ninguém sente)

```
services.commission_percent   numeric null  -- % da profissional NESSE serviço
appointments.sinal_cobrar     boolean null  -- decisão tomada no ato do agendamento
```

### O que NÃO vou criar (reuso da infra do CAF)

`appointments.commission_amount` + trigger `snapshot_commission_amount` (v127, do CAF) já resolvem o miolo do item 6:
- a comissão é **fotografada quando o atendimento nasce** — reajuste vale daqui pra frente e não reescreve histórico
- as telas de remuneração **já sabem ler**: valor gravado manda; `null` = cai na porcentagem do profissional

Então o item 6 da Isis não é infra nova: é **uma segunda origem no mesmo trigger**. Se `comissao_por_servico`, grava `total_price × services.commission_percent / 100`. Nenhuma tela de remuneração precisa mudar.

**Consequência no esforço:** o item 6 caiu de ~10h para ~4h. Não repassar isso como desconto — vira margem e velocidade de entrega.

---

## FASE 1 · Sem código (faz hoje)

- `professionals_can_book_self = false` e `professionals_can_book_others = false` no tenant dela → resolve "profissional não cria agendamento do zero" (item 2, primeira metade). São chaves v98a/v98b que **já existem**.
- Item 4 (comissão líquida): **já funciona desde 01/06** (`getApptDiscountMap`, regra Luana). Demonstrar na tela dela, não desenvolver.
- Limpezas do tenant: remover o profissional de teste "Eduardo"; tirar `role: owner`/`is_owner` da recepção "Studio Isis Melo".

---

## FASE 2 · Itens 1, 2 e 5

### Item 1 · horário só Adm e recepção
Duas camadas, as duas precisam ceder:
1. esconder `src/app/profissional/(protected)/horarios/page.tsx` quando a chave estiver desligada
2. a policy da **v19** passa a consultar `prof_edita_horario` — sem isso a permissão continua viva no banco e a tela some só de fachada

**Teste:** profissional da Isis não edita (nem pela tela, nem por chamada direta); profissional do tenant de controle continua editando.

### Item 2 · serviço extra sim, exclusão não
- `api/profissional/action/route.ts` hoje aceita `confirmed`, `completed`, `cancelled`. Passa a recusar `cancelled` quando `prof_cancela_agendamento = false`.
- **Adicionar serviço extra é o que não existe:** a área profissional não tem rota pra isso. Entra ação nova, gated por `prof_adiciona_servico`, escrevendo na comanda do atendimento. Sem poder remover item.

**Atenção:** serviço extra adicionado pela profissional entra na comanda e portanto **entra na comissão dela**. Com o item 6 no ar, o percentual sai do serviço adicionado, não do dela. Confirmar com a Isis se é isso mesmo que ela espera.

### Item 5 · sinal decidido no ato
- `appointments.sinal_cobrar` guarda a decisão
- a pergunta entra no fim do fluxo de marcação, **mobile e desktop** (os dois fronts são separados — [[feedback_feature_nova_em_mobile_e_desktop]])
- o motor do sinal (v112–v118) não muda; a isenção por cliente (`customers.sinal_isento`) continua valendo e é independente

---

## FASE 3 · Item 3 · bônus em remunerações

Backport do Palace: `src/components/admin/remuneracoes/DarBonusModal.tsx` (+ integração no `RegistrarPagamentoModal`). Portar o modal e a estrutura que sustenta o lançamento. Aditivo — não precisa de chave, não tira nada de ninguém.

---

## FASE 4 · Item 6 · comissão por serviço

**Desbloqueado 21/08** — ela confirmou o quadro ("Isso aí"): padrão **70% profissional / 30% studio**, com manicure e pedicure como única exceção (**50%**).

1. `services.commission_percent` + os campos no `ServicosTab` (mesma tela que o CAF acabou de mexer — pull antes)
2. `snapshot_commission_amount` ganha o segundo caminho, gated por `comissao_por_servico`
3. Precedência no trigger, explícita: `comissao_valor_fixo` (CAF) → `comissao_por_servico` (Isis) → porcentagem do profissional (todo mundo)
4. **Configuração enxuta, aproveitando o fallback:** como `services.commission_percent` nulo cai na porcentagem da pessoa, o padrão 70/30 vira `professionals.commission_percentage = 70` em todas, e **só manicure e pedicure recebe `commission_percent = 50`** no serviço. Uma linha configurada em vez de uma por serviço — e serviço novo que ela cadastrar já nasce em 70% sem ninguém lembrar de nada.
5. Corrigir o cadastro da Tassiane, hoje em 30% — número que não corresponde a nenhuma regra real dela

**Regressão obrigatória:** Remunerações, detalhe do cálculo, histórico, painel da profissional e `api/admin/commission-payments` — nos dois tenants, Isis e controle.

---

## Ordem sugerida

| quando | o quê |
|---|---|
| assim que o pagamento cair | Fase 0 + Fase 1 (isolamento + configuração + limpezas) |
| dia seguinte | Fase 2 (itens 1, 2 e 5) |
| depois | Fase 3 (bônus) |
| na sequência | Fase 4 (comissão por serviço) — escopo já fechado com ela |

Prazo só é prometido **depois do pagamento na conta** — PIX à vista ou link de cobrança do Asaas. Regra fixa: nada de produção antes. Foi o que aconteceu no CAF, que pagou em 20/08.

---

# Levantamento técnico · 24/08/2026

Escopo aceito por ela; pagamento em 2× no cartão (link Asaas). Produção começa com o pagamento confirmado.
Arquivos e rotas conferidos no repo nesta data.

## Item 1 · horário só Adm e recepção

| onde | o que fazer |
|---|---|
| `src/app/profissional/(protected)/horarios/page.tsx` | esconder quando `prof_edita_horario = false` |
| RLS **v19** (`working_hours`, escrita pelo próprio `professional_id`) | policy passa a consultar a chave |

Só esconder a tela deixa a permissão viva no banco — as duas camadas ou nada.

## Item 2 · agendamento

**Não cria do zero → é configuração, zero código.** `professionals_can_book_self` e `professionals_can_book_others` (v98a/v98b) para `false` no tenant.

**Adicionar serviço extra → REUSO, não construção.** Já existe no admin: `components/admin/comandas/AdicionarServicoComandaModal.tsx` → `POST /api/admin/invoices/{invoiceId}/items`. O que falta é expor na área profissional, com auth de profissional e gate em `prof_adiciona_servico`. A rota precisa aceitar o ator "profissional" só para INSERT.

**Não excluir:** `api/profissional/action/route.ts` recusa `cancelled` quando `prof_cancela_agendamento = false`; e a rota de items nunca aceita remoção vinda de profissional.

## Item 5 · sinal decidido no ato

**Achado que muda o tamanho:** o agendamento **não nasce numa rota de API** — é INSERT do client via RLS, em **dois** componentes:

| componente | usado por |
|---|---|
| `components/admin/desktop/atendimentos/AgendarModal.tsx` | desktop |
| `components/recepcao/MarcarAgendamentoForm.tsx` | **mobile (`/admin/marcar`) E recepção** |

O mobile reaproveita o form da recepção — então são 2 pontos, não 3. A pergunta entra no fim dos dois fluxos, gravando `appointments.sinal_cobrar`. Motor do sinal (v112–v118) não muda; `customers.sinal_isento` continua independente.

## Item 6 · comissão por serviço

Como na Fase 4: `services.commission_percent`, segundo caminho no trigger `snapshot_commission_amount` (v127, do CAF), precedência explícita, e a configuração enxuta (70% na pessoa, 50% só no serviço de manicure e pedicure).

## Bônus · cartão presente (portar do Palace)

| peça | origem |
|---|---|
| tabela `gift_cards` | Palace — **levantar o DDL no banco dele** (contas Supabase são separadas) |
| `CartaoPresenteView.tsx` · `CartaoPresenteVisual.tsx` | `palace-system/src/components/admin/cartao-presente/` |
| rota `/admin/cartao-presente` | idem |

Entra atrás de chave própria (`cartao_presente_enabled`, default `false`) — vira produto pra base inteira depois, mas nasce só no tenant dela.

## Implantação assistida (prometida na proposta)

Ela manda nome, e-mail e comissão de cada profissional + lista de serviços com preço e duração. Nós criamos:
- acessos via `api/admin/invite-professional` (cria o login e devolve a senha temporária; a profissional troca no primeiro acesso — esse fluxo **existe e funciona** no painel do profissional)
- serviços cadastrados com `commission_percent` já preenchido onde for exceção
- correção da Tassiane: 30% → 70%

## Ordem de produção

| # | o quê | depende de |
|---|---|---|
| 0 | migration `v129_isis_isolamento` + chaves ligadas no tenant | pagamento |
| 1 | configuração (v98a/b off) + limpezas (conta "Eduardo", role owner da recepção) | — |
| 2 | itens 1 e 2 | fase 0 |
| 3 | item 5 (2 fronts) | fase 0 |
| 4 | item 3 (bônus, backport) | — |
| 5 | item 6 (comissão por serviço) | fase 0 · `git pull` antes: o CAF mexe nos mesmos arquivos |
| 6 | cartão presente | DDL do `gift_cards` levantado |
| 7 | implantação assistida (acessos + serviços) | dados dela |

Teste de cada item em **dois tenants**: Isis (comportamento novo) e um de controle (Olímpio ou a demo Studio Marcela) que precisa continuar idêntico.

---

# O que portar do Palace · levantado no código em 24/08/2026

## 1. Bônus na remuneração (item 3 do escopo)

**No Palace:**

| peça | onde |
|---|---|
| modal | `src/components/admin/remuneracoes/DarBonusModal.tsx` |
| rota | `POST /api/admin/commission-payments` — payload `{professionalId, appointmentIds: [], periodStart, periodEnd, bonusAmount, bonusReason, paidAt}` |
| dados | `commission_payments.bonus_amount` + `bonus_reason` · quando não há comissão, grava `paid_amount = 0` |

Comentário do próprio arquivo: *"Bônus avulso (Marko 16/06) · premiar a profissional sem precisar de comissão pendente."* — é exatamente o caso da Isis.

**No AgendaPRO:** `bonus_amount` **não existe** em nenhum lugar (código nem migration). A rota `api/admin/commission-payments` já existe e é o mesmo desenho — recebe o bônus junto.

**Portar:**
1. migration: `commission_payments.bonus_amount numeric NOT NULL DEFAULT 0` + `bonus_reason text NULL`
2. rota ganha o caminho "pagamento só de bônus" (`appointmentIds` vazio → `paid_amount = 0`)
3. `DarBonusModal` + botão na tela de remunerações
4. ⚠️ **exibição em 6 lugares** — no Palace o bônus aparece em `remuneracoes`, `remuneracoes/[id]/historico`, `financeiro`, **`financeiro/fluxo-caixa`** e nos dois modais. Bônus é saída de dinheiro: portar sem o fluxo de caixa faz o número divergir entre telas ([[feedback_entidade_financeira_nova_varrer_agregadores]]).

Aditivo — não precisa de chave, não tira nada de ninguém.

## 2. Cartão presente (bônus da proposta)

**No Palace:**

| peça | onde |
|---|---|
| schema | `migration-v104-gift-cards.sql` (base) · `v106` (RLS de package/gift manager) · `v107` (`sold_by`) |
| rotas | `api/admin/gift-cards/issue` · `redeem` · `schedule` |
| telas | `components/admin/cartao-presente/CartaoPresenteView.tsx` · `CartaoPresenteVisual.tsx` · rota `/admin/cartao-presente` |

**Duas tabelas:**
```
gift_cards           code · mode ('services' | 'value') · buyer_name/phone
                     recipient_customer_id · recipient_name · price_paid
                     value_total / value_used  (modo valor)
                     purchased_at · expires_at · status (active|expired|used_up|cancelled)
                     invoice_item_id  → a venda entra na comanda
gift_card_services   service_id · service_name (snapshot) · sessions_total · sessions_used
```

**Dois modos de venda**, os dois úteis pra ela:
- **por serviço** — "3 manicures de presente"
- **por valor** — crédito em R$ que a presenteada gasta como quiser

**No AgendaPRO:** nada de cartão presente existe. Porte limpo.

**Atenção:** `invoice_item_id` amarra a venda do cartão na comanda — então isso encosta no financeiro dela. A venda entra no caixa no dia da compra; o resgate não pode entrar de novo, senão fatura dobrado.

Chave própria `cartao_presente_enabled` (default `false`), ligada só no tenant dela.

## 3. O que fica no Palace (decisão de produto, não de engenharia)

**Supervisão por PIN** (`/admin/supervisao` · `supervisor_pin_hash`, `supervisor_actions`, `supervisor_whatsapp` + fila de pedidos pendentes) **não desce pro SaaS**. É governança, que é o que sustenta o fork de R$2.997 — ver [[project_systempalace_fork_vs_saas]] e [[project_agendapro_backport_features_palace]].

**Pacotes ativos** (`/admin/pacotes-ativos` + `api/packages/schedule`) fica de fora deste setup. O AgendaPRO já vende e resgata pacote (`packages/sell`, `consume`, `ResgatarPacoteModal`); falta a visão de saldo e o agendamento da sessão com débito. É um bom próximo produto, mas não foi vendido aqui.
