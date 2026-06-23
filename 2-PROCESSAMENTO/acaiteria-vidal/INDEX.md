# Açaiteria do Vidal — Sistema Próprio (fork do PalaceSystem)

> Cliente novo. Indicação do Lucas Teixeira. Açaiteria pequena, DDD 99 (Maranhão).
> Quer: fidelidade por pontos + controle financeiro + delivery/cardápio via WhatsApp.
> Decisão: **fork dedicado do palace-system**, banco próprio, sistema próprio (não mensalidade de terceiro).
> **Evolução (23/06):** `acai-system` virou o **ComandaPRO** (SaaS food-service multi-tenant) — Vidal é o **1º cliente da fila**. Ver [[MODELO-NUCLEO-FORK-COMANDAPRO]].

## Arquivos

| Arquivo | O que é |
|---|---|
| `ESTUDO-ACAITERIA.md` | **Doc-mãe.** Estudo profundo: cliente, mercado, modelagem do açaí, mapa de adaptação Palace→Açaí, escopo faseado, pricing, plano de execução, pendências pra call. |
| `ESTUDO-CONCORRENTES.md` | **Estudo de mercado completo:** 3 camadas, tabela de players (Saipos/Goomer/Anota AÍ/Zuper/Alloy...) com preços e fontes, features esperadas, como os concorrentes modelam cardápio/delivery/fidelidade. |
| `MANUAL-OPERACAO.md` | **Manual do dia a dia** pro Vidal: abrir caixa, vender, fechar, estoque, fidelidade, clientes, financeiro, impressora. |
| `BRIEFING-AUDIOS.md` | Transcrição literal dos 4 áudios do Vidal (10/06) + leitura do print do WhatsApp. |

## Status (11/06/2026)

- [x] 4 áudios transcritos
- [x] Arquitetura do palace-system mapeada (clone-ready)
- [x] Estudo de mercado de sistemas de açaiteria (concorrentes, features, modelagem, fidelidade, delivery WhatsApp)
- [x] Plano de adaptação Palace→Açaí desenhado
- [x] **FRONT criado** em `C:/Users/Usuario/acai-system` (Next 16 + Tailwind 4, identidade roxo/fúcsia própria). Cardápio de montagem do cliente + finaliza no WhatsApp; painel admin (início/pedidos/cardápio/financeiro/fidelidade/clientes). Typecheck limpo, 8 rotas 200, audit mobile+desktop OK. Ainda sem back (mock data).
- [ ] **Call com Vidal hoje (11/06)** — Eduardo definir horário e responder
- [ ] Validar pricing final com Eduardo
- [ ] Confirmar nome da loja / marca (placeholder "Açaí do Vidal" + WhatsApp placeholder em `src/lib/menu.ts`)
- [ ] Plugar back (Supabase + RLS herdado do palace-system) — só após validação na call
