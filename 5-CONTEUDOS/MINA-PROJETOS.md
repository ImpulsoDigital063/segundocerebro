# Mineração de conteúdo · por projeto (varredura multi-agente 09/06/2026)

6 agentes leram os docs de cada projeto no segundo cérebro e extraíram ~56 ângulos. Tudo baseado em doc real (não inventado). Use junto com o `PLANO-CONTEUDO-MASTER.md`.

> ⚠️ CURADORIA ANTES DE POSTAR:
> - **Anonimizar cliente:** trocar nome real (Marko, Renato, Leandro, Erlane, Olímpio) e valores que identifiquem por "um cliente [segmento]". Caso queira citar com nome, pedir autorização do cliente.
> - **Verificar números marcados como placeholder** (ex: Zilanda "97% satisfação" = placeholder, NÃO postar como fato). Confirmar stat antes de virar slide.
> - Zero emoji nos slides. Tom direto, história real.

---

## ⭐ TOP 10 (os ganchos mais fortes — prioridade de produção)
1. **"Construí um SaaS inteiro conversando com uma IA no terminal, em português."** — 14 migrations em produção num dia, sem time, sem boilerplate. (Claude Code · pilar 5)
2. **"Eu opero 5 instâncias de IA em paralelo. Cada uma vê o que a outra não pega."** — Verbo escreve código, CIC audita no browser, Chrome faz scraping, Design propõe UI, Cowork automatiza. (pilar 5)
3. **"Mostrei um painel funcionando ao vivo e o cliente fechou. 20 páginas de PDF não venderam."** — produto vivo > falar de produto. (pilar 1)
4. **"Meu cliente recebeu R$4.210. O sistema mostrava R$2.500. Cadê os R$1.710?"** — bug dos 40% (arquivo dedicado). (pilar 2)
5. **"Um bot criou 5 contas no meu SaaS em 6 segundos."** — carrossel PRONTO. (pilar 3)
6. **"De operador de anúncio confuso a fundador, em 2 meses."** — abril investigava cobrança de R$11 sem entender o Meta Ads; junho montando SaaS B2B. (pilar 1)
7. **"Cliente não compra produto. Compra dor resolvida."** — R$1.200 virou R$1.497 e o cliente achou barato. (pilar 6)
8. **"Minha recepcionista não cancela uma comanda sem o dono autorizar pelo celular."** — supervisor com PIN/OTP, 13 ações. (pilar 5)
9. **"Tela verde não é prova. Só ler a row no banco é."** — o briefing sumiu 3x com a API retornando 200. (pilar 2)
10. **"Constrói em público, vende depois — e eu sou meu próprio case."** — UrbanFeet: R$37.705 em 90 dias rodando 30min/dia. (pilar 1)

---

## System Palace (fork dedicado premium)
- Vender **fork dedicado (R$2.997, pagamento único)** em vez de plano mensal — cliente premium não cabe em SaaS universal. (P1)
- **Supervisor PIN V4** — recep digita ação → OTP → dono autoriza pelo cel → trigger aplica. 13 ações. Evoluiu PIN→OTP→realtime→payload numa noite. (P5) ⭐
- **"Nunca deletei um agendamento"** — agenda é base de comissão; deletar quebra auditoria. (P2)
- **Tri-modal** (iPad recep / iPhone dono / desktop) — mobile-only quebra quando o dono troca de aparelho no dia. (P4)
- **Cutoff financeiro** — migrei 872 clientes + 1435 agendamentos; histórico visível, mas relatório conta só a partir do dia X. (P6)
- **UI verde ≠ salvou** — comanda mostrava paga, invoice_items não sincronizava. (P2)
- **Falar com o dono antes de codar** — agenda é contrato de comissão; nunca especular feature. (P1)
- **Recibo PDF pelo WhatsApp direto do iPad** (Web Share API). (P4)
- Trial cortesia 7d → fork dedicado entregue em 12 dias, repo próprio, 7 logins. (P1)

## Aura (design + estratégia)
- **Painel ao vivo fechou a 1ª venda** (R$1.497) — não foi o PDF. (P1) ⭐
- **Pipeline de carrossel em ~2min** — Next/og + Flux + Sharp + Canva MCP + copy engine; Flux ~R$0,003/imagem. (P5) ⭐
- **"Cliente compra dor resolvida"** — entendeu a dor (conta parada 3 meses), preço deixou de ser discussão. (P6) ⭐
- **4 mitos sobre energia solar** que todo prospect acredita — cada mito é um post. (P4)
- **Calculadora de economia** que já preenche a proposta no WhatsApp. (P5)
- **Lei do Fio B** — janela de ouro que fecha todo ano (urgência real, sem hype). (P4)
- **11 versões de carrossel até cravar** — design é iteração, não insight único. (P2)
- Competidor 3 meses parado = 92% de oportunidade aberta (presença consistente ganha). (P2)

## Vida em Equilíbrio (marca pessoal → marca-negócio)
- **Vendemos a transição que o cliente já anunciou publicamente** (figura regional, 11.6k seg) — não marca genérica. (P1) ⭐
- Site **esconde preço de propósito** — força quem quer comprar a ir pro WhatsApp (funil: site educa → IA filtra → humano fecha). (P4)
- **Pivot marca-pessoal → marca-negócio** recapitalizando audiência existente (não criar perfil do zero). (P4)
- **39 concorrentes mapeados, achamos o quadrante vazio** (premium + rosto + design vencedor). (P1)
- Cada técnica vira uma **seção com foto** (densidade como educação de cliente). (P4)
- Follow-up pós-reunião (D0/D3/D7) sem desconto — cliente pagou 6 dias depois. (P6)

## Zilanda / EV Suplementos (clone local)
- **Farmacêutica clonou a LP da maior concorrente** e quase fecha assim — modelo "clone local". (P1)
- **"Não é estética. É ciência farmacêutica."** — copy vende autoridade técnica (CRF, resoluções), não glamour. (P3)
- Farmacêutica que **aplica o que prescreve** (não terceiriza médico) — diferencial. (P6)
- **Avaliação grátis no WhatsApp** como gancho de conversão. (P6)
- Eixo **Palmas → regional → nacional** (servir local antes de escalar). (P1)
- ⚠️ Stats da LP (97%/93%/...) = **placeholder, não postar como fato**.

## AgendaPRO (extra dos docs)
- **Ciclo de billing validado em produção** — pagou PIX, email branded, cancelou, refund via 2FA. (P1)
- **Mercado Pago bloqueia "esposa pagando pelo marido"** (cruza email×cartão) → migramos pro Asaas (taxa 5x menor). (P2) ⭐
- **PIX nativo dentro do app** matou ~70% do atrito (não sai pro site externo). (P5)
- **Salão99 desliga 31/05** — viramos referência no mesmo espaço (importamos padrões + despesas reais). (P1)
- "Cliente não sente dopamina = não volta" — faltava feedback celebratório (toast/confetti/comparação vs ontem). (P4)
- Backlog técnico com **gatilho de crescimento** (2FA antes do 5º cliente, backup com 5+, pen test com 50+). (P6)

## Meta · Claude Code + a trilha do Eduardo
- **14 migrations em produção num dia, sozinho** — CLAUDE.md curta + Plan Mode + uma decisão por vez. (P5) ⭐
- **5 instâncias de IA em paralelo** — cada uma pega o que a outra não vê (Verbo/CIC/Chrome/Design/Cowork). (P5) ⭐
- **Custos reais:** ~R$450/mês em tudo (código+pesquisa+imagem+vídeo); 1 cliente premium cobre 1 ano de infra. (P6)
- **"Minha mente vai à raiz"** — não conserto bug isolado, escrevo a regra (λ) que governa a classe. (P1)
- **De operador confuso a fundador em 2 meses** (Meta Ads → SaaS B2B). (P1) ⭐
- **Multi-agente pega o que 1 agente perde** — 7 rodadas Verbo↔CIC = 30 commits, sem isso mandaria 17 features achando que tava certo. (P5)
- **Você é seu próprio case** — UrbanFeet R$37.705/90d provou o modelo antes da Impulso existir. (P1) ⭐
