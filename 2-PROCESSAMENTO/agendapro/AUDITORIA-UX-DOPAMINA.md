# AUDITORIA UX + DOPAMINA — AgendaPRO

**Data:** 2026-04-24
**Feita por:** Claude (Opus 4.7) após rodar captura automatizada dos 3 painéis em produção
**Base:** 50+ prints reais de `agendapro.net.br` (admin `testesmoke`, cliente público `/teste-smoke-1`, profissional `contratado`)
**Meta:** cliente que começa a usar o AgendaPRO não quer mais parar. Cada tela precisa devolver dopamina.

---

## Filtro de leitura

Tudo aqui passa por 3 perguntas antes de virar feature:

1. **Gera ação no próximo uso?** (cliente volta amanhã por causa disso)
2. **Custa pouco pra implementar?** (preventivo no código, não treinamento)
3. **Dá pra mostrar em print de venda?** (vira prova pra LP/anúncio)

Itens marcados **P1** = fazer antes do primeiro cliente pagar.
**P2** = até o terceiro cliente.
**P3** = quando passar de 5 clientes e o produto já tiver retenção medida.

---

## PAINEL DO DONO (`/admin`)

### O que já funciona
- Hero "Faturado hoje R$40" é objetivo — dono abre o app e vê número
- Cards pendentes/confirmados com contadores grandes
- Card contextual "2 pedidos de pontos por avaliação" — excelente CTA de ação diária
- Link da loja com 3 formas de compartilhar (WhatsApp, copiar, QR Code)
- Financeiro com 3 janelas (Hoje / 7 dias / Mês) + ticket médio
- Clientes com abas de segmentação (Todos / Recentes / Top / Novos / Sumidos)

### Buracos que matam dopamina

**P1 — Dashboard sem comparação temporal**
Hoje o card mostra só "R$40 — 1 atendimento pago". Falta o delta.
- "+R$15 em relação a ontem" (verde)
- "3 dias seguidos batendo meta diária" (streak)
- Sparkline de 7 dias dentro do card
**Por que:** número absoluto sem referência = flat. Comparação é combustível emocional.
**Custo:** baixo — query de ontem + SVG sparkline inline.

**P1 — Zero feedback celebratório em ações-chave**
Cliente agendou → zero toast/som/confetti. Pagamento confirmou → zero.
- Toast animado com checkmark + som sutil em: agendamento criado, cliente confirmou, pagamento bateu, ponto liberado, primeira avaliação 5★
- Confetti discreto só no primeiro do dia ("Primeiro cliente do dia entrou!")
**Por que:** feedback invisível = app parece morto. Dopamina é física — som + movimento.
**Custo:** baixo — lib `canvas-confetti` (3kb) + `Audio()` nativo.

**P2 — Clientes "Sumidos" existe mas não dispara ação**
Segmentação identifica os sumidos (boa), mas o dono precisa clicar um-a-um. Deveria ter:
- Botão "Chamar todos no WhatsApp" com template pronto ("Fulano, faz 60 dias, olha seu link: ...")
- Filtro "últimos 30/60/90 dias" pra ajustar sensibilidade
**Por que:** ferramenta que identifica problema mas não resolve é só relatório.

**P2 — Financeiro não tem comparação mês anterior**
Abas Hoje/7 dias/Mês mostram só o atual. Precisa de:
- Badge "+32% vs mês passado" (ou "-8%")
- Projeção "no ritmo, você fecha abril em R$1.850"
**Por que:** projeção cria urgência interna (dono puxa pra fechar meta).

**P3 — Nenhum badge/conquista visível**
Zero gamificação do dono. Oportunidades:
- "Barbearia do mês" (mais agendamentos)
- "100 agendamentos no total" (lifetime)
- "1ª semana com agenda lotada"
- Quadro lateral discreto com última conquista desbloqueada
**Por que:** micro-dopamina que puxa dono a abrir app sem motivo operacional.

**P3 — Onboarding do dono não é gamificado**
Quando dono cria conta, não tem barra de progresso:
- Logo adicionado ✓ (20%)
- Serviços cadastrados ✓ (40%)
- Horários definidos ✓ (60%)
- Pontos configurados ✓ (80%)
- Primeiro cliente agendado ✓ (100%) → CONFETTI + "Perfil 100% configurado!"
**Por que:** primeira semana é a mais frágil. Progresso visível retém.

---

## PÁGINA PÚBLICA DO CLIENTE (`/[slug]`)

### O que já funciona
- Hero com logo + nome + endereço + WhatsApp clicável
- CTA grande "Agendar horário" com gradiente azul→ciano
- CTA secundário "Meus pontos e agendamentos"
- Equipe visível com avatares (Adm / Comissionado / Contratado)
- Serviços com preço + duração + pontos ("Barba R$30 · 30min · +50 pts")

### Buracos que afetam conversão E retenção

**P1 — LP fria, sem prova social**
Hoje só tem logo + endereço. Falta:
- Nota média ("★ 4.9 · 127 avaliações")
- 2-3 avaliações em carrossel no topo
- Badge "Responde em 15 min" (usando dado real do WhatsApp)
- "Próximo horário disponível: amanhã às 14:00" (cria urgência)
**Por que:** cliente novo chega frio. Sem prova, rola pra baixo e some. Memória 4 de RP sobre isso (LP-mostrar-mini-UI).

**P1 — "Meus pontos" só aparece depois que cliente lembra que existe**
Hoje o botão "Meus pontos e agendamentos" é neutro, cinza. Deveria:
- Badge pulsante se o cliente tem agendamento ativo ("1 agendamento · 120 pts")
- Detectar cliente pelo WhatsApp do dispositivo (se ele já agendou, já mostra saldo sem digitar)
**Por que:** pontos escondidos = sistema que não retém. Precisa estar NA CARA.

**P2 — Sem foto real do estabelecimento**
Hoje é logo quadrado + fundo azul genérico. Deveria ter:
- Hero com foto real (já temos upload com compressão — é só usar)
- Galeria de 3-4 fotos do interior/cortes
**Por que:** barbearia compra por vibe. Logo não vende.

**P2 — Fluxo de 5 passos sem progresso emocional**
Hoje tem barra no topo ("1 de 5"). Mas cada passo é neutro. Deveria:
- Microcopy que celebra cada passo ("Boa escolha!", "Tá quase lá", "Último passo")
- Preview do resumo crescendo em tempo real (já tem no final, mas o usuário só vê no fim)
**Por que:** cada clique é um mini-investimento. Reforço positivo aumenta taxa de conclusão.

---

## PÁGINA DE PONTOS (`/[slug]/meus-pontos`)

### O que já funciona
- Card "Programa de Fidelidade" com 3 tabs (Saldo / Agendamentos / Indicar amigo)
- Campo WhatsApp pra identificar
- Copy clara: "Cada serviço, indicação e avaliação vira ponto pra trocar por recompensa"

### Buracos

**P1 — Barra de progresso ausente**
Hoje é só número. Deveria mostrar:
```
Você tem 120 pts
[████████░░] 80% pro próximo resgate (faltam 30 pts = 1 corte)
```
**Por que:** barra de progresso é a forma mais barata de dopamina existente. Provado em jogo, Duolingo, Nubank.

**P1 — Zero celebração ao ganhar pontos**
Cliente completou serviço → ponto caiu silenciosamente. Deveria:
- WhatsApp automático: "🎉 Você ganhou +50 pts! Saldo: 120 pts. Faltam 30 pra próximo corte grátis"
- Se abrir a página logo depois: animação de contador subindo + confetti
**Por que:** dopamina é LEMBRAR que ganhou. Sem notificação, cliente esquece que o sistema existe.

**P2 — "Indicar amigo" sem template**
Tab existe mas não vi copy pronta. Deveria ter:
- Link personalizado "...?ref=eduardo"
- Botão "Compartilhar no WhatsApp" com texto pronto ("Cara, corto o cabelo nesse lugar foda — usa meu link e ganha 20pts na primeira")
- Contador "3 amigos já usaram seu link (+60 pts pra você)"
**Por que:** referral que depende do cliente escrever a mensagem não acontece. Preventivo no código.

**P3 — Catálogo de recompensas**
Hoje ponto é abstrato. Deveria ter:
- "50 pts = corte grátis" (com foto do serviço)
- "100 pts = combo barba+cabelo"
- "200 pts = produto premium" (ancora alto, puxa baixo)
**Por que:** escassez visível + variedade faz cliente ter META.

---

## PAINEL DO PROFISSIONAL (`/profissional`)

### O que já funciona
- Header com nome + data atual
- 3 cards (Pendentes / Confirmados / Cancelados) — simples e claro
- Onboarding de 4 passos quando entra pela primeira vez (Instalar na home / Sua agenda / Financeiro / Conta)
- Distinção Comissionado vs Contratado (Contratado não vê financeiro — ok, é regra de negócio)

### Buracos

**P1 — Contratado não tem NENHUMA dopamina**
Ele é contratado (não vê comissão) mas ainda assim deveria ver:
- "Você atendeu X clientes esta semana"
- "Sua média de duração por serviço: 28min (5min abaixo do esperado — boa!)"
- "2 avaliações 5★ essa semana ⭐"
**Por que:** profissional que só vê lista de horários não tem motivo pra abrir o app por vontade própria.

**P1 — Comissionado precisa ver comissão crescendo em tempo real**
Deveria ter na home do profissional:
- Card grande "Comissão este mês: R$420"
- Sparkline dos últimos 7 dias
- "Você está R$50 acima da média do mês passado"
- Próximo pagamento em X dias
**Por que:** profissional comissionado é parceiro — ele olha a grana. Mostrar = engaja.

**P2 — Avaliações não aparecem pro profissional**
Cliente avalia (5★) → ponto vai pro cliente. Mas o PROFISSIONAL não vê nada?
Deveria ter:
- Feed "Últimas avaliações dos seus clientes" com nome + estrelas + comentário
- Notificação "Você ganhou uma avaliação 5★ do João!"
**Por que:** feedback social é a dopamina mais forte que existe. Zero custo — o dado já está lá.

**P3 — Ranking interno (quando >1 profissional)**
- "Você é o #2 do mês em atendimentos"
- "Top 1 em pontualidade"
**Por que:** competição saudável entre profissionais = mais atendimentos = mais receita pro dono.

---

## JORNADA ORQUESTRADA (cross-painel)

**P1 — Primeira semana do dono sem narrativa**
Hoje: dono cadastra → some. Deveria ter pulsos:
- **Dia 1** (ao criar conta): "Bem-vindo! Configure seu primeiro serviço."
- **Dia 2** (se não cadastrou serviço): WhatsApp "Falta só configurar os serviços pra sua agenda ir ao ar"
- **Dia 3** (ao primeiro agendamento): "🎉 Primeiro agendamento! Você já está vendendo sem depender do Instagram."
- **Dia 7** (resumo): "Semana 1 completa: R$X faturado, Y clientes novos"
- **Dia 30**: "Mês 1: comparativo com ritmo inicial"
**Por que:** onboarding orquestrado é o que separa SaaS que retém de SaaS que churna em 60 dias.
**Custo:** médio — precisa de scheduler (cron no Vercel ou similar). Mas usa o canal Resend que já está configurado + Z-API futuro.

**P2 — Eventos WhatsApp automáticos**
Eventos que merecem WhatsApp disparado:
- Cliente marca horário → "Confirmado! Dia X às Y. Cancelar?"
- 24h antes → "Olá, lembrete do seu horário amanhã"
- 2h antes → "Seu horário é em 2h. Chegou algo? Remarca por aqui"
- Pós-serviço → "Como foi? [avalia com 5 estrelas e ganha 20 pts]"
- Aniversário → "Parabéns! Ganhe 50 pts de presente"
**Por que:** WhatsApp é o canal de onde o Brasil vive. Preventivo no código = cliente não precisa lembrar.

---

## PRIORIZAÇÃO (ordem pra executar)

### Semana 1 (antes do primeiro cliente pagar)
1. Toast/confetti em agendamento criado + pagamento confirmado
2. Barra de progresso na página de pontos do cliente
3. WhatsApp automático pós-agendamento com saldo de pontos
4. Comparação "vs ontem" no dashboard do dono
5. Pro-Comissionado: card de comissão acumulada com sparkline

### Semana 2 (com 2-3 clientes usando)
6. Avaliações visíveis pro profissional (feed)
7. Nota média + 3 avaliações na LP pública
8. Onboarding gamificado do dono (barra de perfil 0→100%)
9. Template pronto de referral + link personalizado
10. Cliente "Sumido": botão chamar todos no WhatsApp

### Semana 3+ (quando tiver retenção medida)
11. Badges/conquistas
12. Ranking entre profissionais
13. Catálogo de recompensas visuais
14. Projeção mensal de faturamento
15. Jornada orquestrada dias 1/3/7/30

---

## PONTOS FORTES A NÃO PERDER

Coisas que o AgendaPRO já tem e NÃO podem ser sacrificadas em nenhum redesign:

- **Abas Hoje/7 dias/Mês** no financeiro — simples e completo
- **Segmentação de clientes** (Todos/Recentes/Top/Novos/Sumidos) — isso é ouro
- **Sistema de pontos já funciona end-to-end** — só falta camada de dopamina em cima
- **Card de pedidos de pontos pendentes** no dashboard — CTA diário perfeito
- **Mobile-first já está sólido** — admin no celular funciona
- **Fluxo de 5 passos do cliente** — taxa de conclusão parece alta (formulário bem pensado)
- **Distinção Comissionado/Contratado** — é feature de venda (cada cliente escolhe conforme negócio)

---

## ÂNGULOS PARA COPY DE VENDA (extraídos dessa auditoria)

Material pra LP/anúncio do AgendaPRO quando tiver os P1 implementados:

- "Seu cliente recebe no WhatsApp: '🎉 Você ganhou +50 pts! Faltam 30 pra próximo corte grátis.' Isso é retenção automática."
- "Todo dia 09:00 o dono abre o app e vê: 'Faturado hoje: R$120 (+R$30 vs ontem). 3 dias seguidos batendo meta.' Dopamina vira hábito."
- "Profissional comissionado vê comissão crescer em tempo real. Cliente avalia 5★? Notificação no ato. Sistema que faz ele querer atender mais."
- "Cliente sumiu há 60 dias? Um clique e o dono dispara WhatsApp pra todos de uma vez, com template pronto."

---

## PRÓXIMO PASSO AO RETOMAR

1. Abrir este arquivo no início da próxima sessão AgendaPRO
2. Escolher 1 item P1 pra implementar (começar pelo #1 da priorização — toast/confetti é 2h de trabalho, impacto alto)
3. Atualizar `STATUS-AGENDAPRO.md` com o item feito
4. Rodar captura de volta (`node scripts/capture-agendapro.js --only=cliente`) pra validar visualmente

**Bordão operacional aplicado:** funil é continuidade. Cada tela precisa cumprir, ali mesmo, o que a promessa da LP diz ("cliente vira fã, não só agendamento"). Dopamina não é decoração — é o mecanismo que fecha o loop.

---

**Ver também:** [[STATUS-AGENDAPRO]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
