---
name: feedback-analise-impacto-antes-de-prod
description: 26/05 · regra dura · toda mudança que toca prod exige análise de impacto ANTES de propor · não posso quebrar cliente em produção
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Toda mudança que pode afetar sistema em produção (Olímpio, Letícia,
Erlane, Marko futuro) exige **análise de impacto explícita ANTES** de
codar/propor. Não é "rodar e ver".

**Why:** P0 de 26/05/2026 — trigger v70 (auto-comanda em
appointments) foi criado e rodado em prod sem analisar fluxo público
anon. Por ~36 horas (24/05 noite → 26/05 9h34) o BookingFlow do
Olímpio engasgou em todo cliente novo. Clientes que viram "Erro ao
agendar" simplesmente desistem · não retornam · perda real de receita
pro Olímpio que paga R$67/mês exatamente pra isso funcionar.

Eduardo cravou: "Verbo, isso não pode se repetir, sempre que for fazer
algo analisa se vai quebrar, não podemos dar o luxo de perder cliente
nesse inicio".

**How to apply — checklist obrigatório antes de propor migration ou
mudança de comportamento que entra em prod:**

1. **Quem dispara esse código?** Listar TODOS os atores:
   - Adm autenticado (`auth.uid()` válido, dono do business)
   - Recep (`auth.uid()` válido, `is_receptionist=true`)
   - Profissional comum (`auth.uid()` válido, sem flag)
   - **Cliente público anônimo** (sem `auth.uid()`)
   - Cron / webhook (service_role, bypass RLS)
   - Se algum ator anon dispara, **RLS é problema real**.

2. **Que tabelas o código toca?** Pra cada uma, qual a RLS?
   - Se a RLS exige `auth.uid()` e o ator é anon, **vai quebrar**.
   - Fix tipo: `SECURITY DEFINER` em trigger/função, ou rota server
     usando service-role client em vez de cliente browser.

3. **Que dado obrigatório o código assume?**
   - Coluna NOT NULL existe e está preenchida? (ex: `customer_id` em
     `invoices` vs `client_id` que BookingFlow passa)
   - Constraint CHECK aceita o valor? (ex: `commission_type` na v75)
   - FK aponta pra registro existente? (ex: `customer_id` em insert
     anon — cliente pode nem existir ainda)

4. **O caminho feliz hoje quebra?** Listar 3 fluxos que ESTÃO funcionando:
   - Olímpio (Palmas, mobile, fluxo público de agendamento)
   - Adm cadastra atendimento via /admin
   - Pagamento direto via PaymentMethodModal
   Se algum desses passa pelo código que vou mudar, simular passo-a-passo.

5. **O que muda no schema?** Migration adiciona/altera tabela ou trigger?
   - Trigger AFTER INSERT em tabela com fluxo público = sempre
     SECURITY DEFINER (vide [[feedback_trigger_security_definer]])
   - Backfill bate em row legada com dado faltando?
   - DEFAULT novo afeta SELECTs antigos?

6. **Se quebrar, como o usuário vê?** Erro genérico tipo "Erro ao
   agendar" / "Erro ao salvar" é PIOR que crash visível. Cliente
   desiste em silêncio. Sempre prever telemetria ou pelo menos
   `console.error` claro.

**Quando aplicar — toda mudança que entre em prod:**
- Migration SQL (qualquer ALTER/CREATE/DROP)
- Trigger novo ou função SQL
- Mudança em rota `/api/**` que afeta fluxo crítico
- Mudança em componente compartilhado mobile+desktop (BookingFlow,
  AppointmentCard, PaymentMethodModal, etc.)
- Qualquer push pra master quando há cliente em prod usando

**Não aplica (mudanças sem risco prod):**
- UI puramente em /admin (não usado pelo Olímpio mobile)
- Componente novo isolado, ainda não exposto em rota
- Refator interno sem mudança de contrato

**Como vou comunicar:**
- Antes de propor migration crítica, vou listar **explicitamente** os
  6 pontos acima na resposta · Eduardo lê e bate o martelo, OU pede
  ajuste antes.
- Se eu pular o checklist em mudança crítica, é falha minha — Eduardo
  pode (e deve) interromper e exigir antes do commit.

Linkado em: [[feedback_diagnostico_nivel_certo]] (diagnóstico do bug
real exige descer da UI até a camada SQL · esse feedback é a versão
preventiva da mesma regra), [[feedback_trigger_security_definer]]
(caso concreto que motivou esse feedback), [[feedback_prova_na_fonte_persistencia]]
(prima · validar depois; este é validar antes).
