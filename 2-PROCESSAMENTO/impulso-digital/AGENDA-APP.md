# AgendaPRO — Produto Impulso Digital

**Criado:** 10 de Abril de 2026
**Atualizado:** 11 de Abril de 2026 (segundo turno)
**Status:** ✅ V2 em produção — produto competitivo no ar
**URL de produção:** https://agenda-pro-seven.vercel.app
**Repositório:** https://github.com/ImpulsoDigital063/AgendaPRO
**Pasta local:** C:/Users/DELL/agendapro

---

## O que é

Sistema SaaS de agendamento online para negócios de serviço. Cliente acessa o link do negócio, escolhe serviço, profissional e horário — sem baixar app, sem cadastro. Profissional gerencia tudo pelo painel no celular.

Produto da Impulso Digital — não é entrega única, é recorrência mensal.

---

## Origem da ideia

Eduardo mandou mensagem pro barbeiro no WhatsApp perguntando se tinha vaga. Não foi respondido. A dor: negócios de serviço perdem clientes por demora na resposta. Solução: agenda que trabalha sozinha 24h.

---

## Planos e Preços (atualizados 11/04)

| Plano | Para quem | Preço | Trial |
|---|---|---|---|
| Solo | 1 profissional | R$97/mês | 14 dias grátis, sem cartão |
| Equipe | Até 5 profissionais | R$147/mês | 14 dias grátis, sem cartão |

> Setup fee de R$800 removido em 11/04 — barreira de entrada alta demais.

---

## Segmentos atendidos

**Tier 1 (foco agora):**
- Barbearia → `/barbearia`
- Salão de beleza → `/salao`
- Nail designer → `/nail`
- Clínica estética → `/estetica`

**Tier 2 (médio prazo):** Psicólogo, personal trainer, tatuador, manicure

Ver detalhes: [[AGENDAPRO-SEGMENTOS]]

---

## Stack técnica

| Parte | Tecnologia |
|---|---|
| Frontend + Backend | Next.js 16 (App Router, Turbopack) |
| Banco de dados + auth | Supabase (PostgreSQL + RLS) |
| Email transacional | Resend |
| Deploy | Vercel |
| Repositório | GitHub (ImpulsoDigital063/AgendaPRO) |
| Cron jobs | Vercel Cron (vercel.json) |
| QR Code | react-qr-code (wa.me, sem API) |

---

## O que está construído (11/04/2026)

### Produto
- [x] Cadastro de negócio via `/cadastro`
- [x] Página pública de agendamento por slug `/[slug]`
- [x] Fluxo: serviço → profissional → data → horário → dados do cliente
- [x] Slots dinâmicos por duração do serviço
- [x] Travamento de slot em tempo real
- [x] Cancelamento pelo cliente (link no email → página `/cancelar`)
- [x] Auth completo (login, sessão protegida, logout)
- [x] Trial 14 dias com bloqueio automático ao expirar
- [x] Página `/admin/bloqueado` com planos e CTA WhatsApp

### Comunicação
- [x] Email de confirmação ao cliente (com link de cancelamento)
- [x] Email de notificação ao profissional (botões confirmar/cancelar)
- [x] Email de status ao cliente (confirmado/cancelado)
- [x] Lembrete D-1 automático por email (Vercel Cron, 12h UTC)
- [x] QR Code WhatsApp (aba Configurações → impressão para o estabelecimento)

### Admin
- [x] Agenda do dia e próximos 7 dias
- [x] Confirmar / cancelar pelo painel e pelo email
- [x] Configurações: negócio, profissionais, serviços, horários
- [x] Comissão por profissional (% configurável)
- [x] Relatório financeiro: hoje / semana / mês
- [x] Clientes: histórico, total gasto, WhatsApp
- [x] Card de divulgação + guia Instagram / Google / WhatsApp
- [x] Bottom nav mobile-first (4 abas)
- [x] PWA instalável (iOS e Android)
- [x] Banner de trial com dias restantes

### Marketing
- [x] Landing principal reformulada (hero, FAQ, cards de segmento, Impulso Digital)
- [x] FAQ com 10 perguntas focadas em conversão
- [x] 4 cards de segmento logo após o hero
- [x] 4 landings segmentadas por nicho
- [x] Seção Impulso Digital com cross-sell
- [x] Footer com links por segmento em todas as páginas

---

## Estratégia de posicionamento

**Produto genérico + marketing nichado.**

Um sistema serve todos os segmentos. Cada segmento tem landing específica com copy voltado para as dores daquele profissional. Barbeiro que acessa `/barbearia` sente que foi feito para ele.

Diferencial vs concorrentes:
- Suporte local (Eduardo atende pessoalmente em Palmas)
- Trial real sem cartão (maioria dos concorrentes não tem)
- Landings segmentadas (nenhum concorrente faz)
- Produto Impulso Digital — credibilidade da agência

Ver análise completa: [[AGENDAPRO-ANALISE-COMPETITIVA]]

---

## Roadmap

Ver: [[AGENDAPRO-ROADMAP]]

**Próximas features (60 dias):**
- Fila de espera automática
- Instrução pré-atendimento por serviço
- Histórico completo do cliente (CRM básico)
- Área do profissional (ver próprios números)

---

## Projeção de receita

| Clientes | Plano | MRR |
|---|---|---|
| 5 | Solo R$97 | R$485/mês |
| 10 | Solo R$97 | R$970/mês |
| 10 | Misto | R$1.100/mês |
| 20 | Misto | R$2.200/mês |
| 50 | Misto | R$5.500/mês |

---

## Próximos passos

- [ ] Testar fluxo completo em produção (confirmação, cancelamento, lembrete)
- [ ] Configurar domínio agendapro.com.br na Vercel
- [ ] Prospectar primeiro cliente em Palmas (barbearia)
- [ ] Montar pitch com demo gravado no celular
- [ ] Documentar primeiro case com resultado real
