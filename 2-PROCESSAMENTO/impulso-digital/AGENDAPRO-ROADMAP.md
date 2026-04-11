# AgendaPRO — Roadmap de Produto

**Criado:** 11 de Abril de 2026
**Atualizar a cada sprint**

---

## Estado atual do produto (11/04/2026)

### Agendamento
- [x] Página pública por slug (`/[slug]`)
- [x] Fluxo completo: serviço → profissional → data → horário → dados do cliente
- [x] Slots gerados dinamicamente pela duração do serviço
- [x] Travamento de slot em tempo real (sem double booking)
- [x] Cancelamento pelo cliente via link no email

### Comunicação automática
- [x] Email de confirmação ao cliente (com link de cancelamento)
- [x] Email de notificação ao profissional (com botões confirmar/cancelar)
- [x] Email de confirmação/cancelamento ao cliente após ação do profissional
- [x] Lembrete D-1 automático por email (Vercel Cron, 12h UTC)
- [x] QR Code WhatsApp para impressão (sem API, via wa.me)

### Admin (painel do dono)
- [x] Agenda do dia e próximos 7 dias
- [x] Confirmar / cancelar agendamentos pelo painel
- [x] Configurações: negócio, profissionais, serviços, horários por dia
- [x] Comissão por profissional (% configurável)
- [x] Relatório financeiro: hoje / semana / mês com breakdown por profissional
- [x] Clientes: histórico, total gasto, WhatsApp
- [x] Card de divulgação: link + guia Instagram / Google / WhatsApp
- [x] Bottom nav mobile-first com 4 abas
- [x] PWA instalável (iOS e Android)

### Marketing e aquisição
- [x] Landing page principal com FAQ de conversão
- [x] 4 cards de segmento na landing principal
- [x] 4 landings segmentadas: `/barbearia`, `/salao`, `/nail`, `/estetica`
- [x] Seção Impulso Digital com cross-sell de outros serviços
- [x] Trial 14 dias com bloqueio automático ao expirar

### Infraestrutura
- [x] Auth completo (Supabase)
- [x] Multi-negócio (cada slug é isolado)
- [x] Deploy Vercel + Supabase + Resend
- [x] Domínio: agenda-pro-seven.vercel.app (migrar para agendapro.com.br)

---

## Roadmap — próximas fases

### Fase 2 — Próximos 60 dias (alto impacto, viável agora)

| Feature | Segmento | Dor resolvida | Prioridade |
|---|---|---|---|
| Fila de espera automática | Todos | Buraco na agenda quando cancela | ⭐⭐⭐ |
| Instrução pré-atendimento por serviço | Estética / Salão | Cliente chega despreparado | ⭐⭐⭐ |
| Histórico completo do cliente (CRM básico) | Todos | Sem memória do relacionamento | ⭐⭐⭐ |
| Área do profissional (seus próprios números) | Barbearia / Salão | Conflito de comissão, desconfiança | ⭐⭐ |
| Política de no-show configurável | Todos | Cliente falta sem consequência | ⭐⭐ |

**Como funciona fila de espera:**
1. Cliente entra na lista de espera para um horário específico
2. Se horário cancela → sistema notifica o primeiro da fila com link para confirmar
3. Prazo de 30min para responder antes de chamar o próximo
4. Resolve buraco na agenda sem intervenção manual do dono

**Como funciona instrução pré-atendimento:**
1. Admin configura texto de instrução por serviço ("venha sem maquiagem", "cabelo limpo")
2. Email D-1 inclui automaticamente a instrução do serviço agendado
3. Zero esforço do profissional, reduz cliente despreparado

---

### Fase 3 — 90-120 dias (diferenciação real)

| Feature | Segmento | Dor resolvida |
|---|---|---|
| Controle de pacotes de sessões | Estética | Sem controle de saldo de sessões |
| Saldo de pacote self-service para o cliente | Estética | Cliente não sabe quantas sessões tem |
| Portfólio visual no agendamento | Nail | Cliente escolhe estilo por foto |
| Alerta de retorno por tipo de serviço | Todos | Cliente some, sem follow-up automático |
| Reativação automática de cliente sumido | Todos | Cliente não volta, receita cai |

---

### Fase 4 — 6+ meses (liderança de mercado)

| Feature | Complexidade | Impacto |
|---|---|---|
| WhatsApp bot conversacional (agenda dentro do WhatsApp) | Alta | Altíssimo |
| Plano de assinatura recorrente para o cliente final | Alta | Alto |
| Ficha de anamnese digital integrada | Média | Alto (estética) |
| Precificação dinâmica por horário | Média | Alto |
| Controle de equipamentos por agendamento | Alta | Médio (estética) |
| Gestão multi-unidade | Alta | Alto (franquias) |

---

## Decisão estratégica — 11/04/2026

> **"Só vamos atrás de clientes quando o app estiver completo e funcional de verdade. Padrão Impulso Digital."**

Ordem: construir → validar → prospectar. Não vender produto pela metade.
O foco agora é completar o roadmap Fase 2 antes de qualquer prospecção.

---

## Decisões de produto registradas

| Data | Decisão | Motivo |
|---|---|---|
| 10/04 | Sem pagamento na V1 | Reduz fricção no onboarding, prioriza adoção |
| 10/04 | Resend no lugar de WhatsApp API | Zero custo, funciona desde o dia 1 |
| 10/04 | QR Code no lugar de API WhatsApp | EiBarber faz assim — sem custo de API |
| 11/04 | Setup fee R$800 removido | Barreira de entrada alta demais, sem trial |
| 11/04 | Trial 14 dias sem cartão | Padrão do mercado, aumenta conversão |
| 11/04 | Produto genérico + marketing nichado | Escala sem reescrever o produto |
| 11/04 | Barbearia como segmento de entrada | Volume alto, dono tech-friendly, ticket previsível |
| 11/04 | Não competir com EiBarber em barbearia agora | Tem IA e WhatsApp. Atacar salão e estética primeiro. |

---

## Métricas a acompanhar

| Métrica | Meta mês 1 | Meta mês 3 | Meta mês 6 |
|---|---|---|---|
| Clientes ativos | 3 | 10 | 25 |
| MRR | R$300 | R$1.000 | R$2.500 |
| Churn mensal | < 20% | < 15% | < 10% |
| NPS (satisfação) | > 7 | > 8 | > 8.5 |
| Trial → pago | — | > 30% | > 40% |
