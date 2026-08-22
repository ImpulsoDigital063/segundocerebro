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
