# Projeto — App de Entregas B2B (Palmas-TO)

> **ABRIR PROJETO = ler este INDEX primeiro.**
> Cliente quer contratar a Impulso pra criar um app de entrega de **encomendas de negócios** (NÃO comida): negócio se cadastra, entregador/motorista se cadastra, com **análise de antecedentes**. Mercado: **Palmas-TO e região**.
> Aliases: [app entregas, app de entrega, encomendas, motoboy app, delivery b2b, entregas palmas, tonolucro]

## Estado
- **29/05/2026** — Missão de reconhecimento noturna do Eduardo. Levantamento feito. **Escopo ainda NÃO cravado** — depende das 10 perguntas pro cliente (DOSSIE §10).
- Sem nome de marca, sem cliente nomeado ainda, sem orçamento definido.

## Documentos (ler nesta ordem)
1. **DOSSIE-RECONHECIMENTO.md** — visão estratégica: briefing, concorrência, antecedentes, jurídico, modelo de negócio, MVP, perguntas pro cliente.
2. **ESTUDO-TONOLUCRO.md** — teardown do app de referência (nascido em Palmas, comprado pela Magalu). O que copiar, evitar e superar. **A brecha: TôNoLucro não destaca antecedentes.**
3. **ESTUDO-CONSTRUCAO.md** — o que precisamos fazer × o que a stack Impulso permite. Matriz de capacidade (18 componentes), 4 riscos técnicos, MVP, stack, roadmap.

## Os 3 fatos que mudam tudo
1. **TôNoLucro é de Palmas** e domina o território (Magalu atrás). Entrar de frente = perder. Único caminho = recorte estreito.
2. **O recorte vencedor:** B2B de encomenda de valor + **entregador verificado por antecedentes** + regional. É a brecha que o líder não cobre.
3. **~70% do app a Impulso já sabe fazer.** Os ~30% novos (GPS realtime, dispatch, split de pagamento, integrações de verificação) são quase todos integração de terceiro — exceto GPS+dispatch, que exige um **spike de validação** antes de cravar prazo/preço.

## Pendências
- [ ] Levar as 10 perguntas do DOSSIE §10 pro cliente
- [ ] Confirmar nome/marca, orçamento, prazo
- [ ] Propor Fase 0 (spike técnico pago) antes do orçamento fechado
- [ ] Decidir Mapbox vs Google Maps; gateway (Asaas vs Pagar.me)
