# AgendaPRO — Diferenciais Competitivos & Argumentos de Venda

**Última atualização:** 2026-05-01 (tarde)
**Por que esse arquivo existe:** referência única pra produzir copy, oferta, disparo, anúncio, comparativo e quebra de objeção do AgendaPRO. Sempre que precisar fundamentar venda, vir aqui antes.

**Contexto:** o produto cresceu MUITO em 72h de tour pré-lançamento (de uma agenda básica pra ferramenta operacional completa de gestão de pequeno negócio de serviço). 37 commits SÓ em 01/05/2026. Preço congelado em R$67/mês (Solo) e R$97/mês (Equipe). Outras opções via PIX semestral/anual com desconto.

---

## A nova tese de venda (atualizada 01/05)

**AgendaPRO não é mais "sistema de agendamento".** É **ferramenta operacional completa do dono de pequeno negócio** com 6 dimensões integradas:

1. **Agendamento** — cliente agenda 24h sem você responder DM/WhatsApp
2. **Gestão financeira** — receita, comissão, despesas, lucro REAL (não só receita) e análises com forecast
3. **Organização** — profissionais, horários, serviços, fidelidade, reviews, lista de espera
4. **Fidelização** — pontos por agendamento, indicação, pontualidade e Google review (4 fontes)
5. **Aquisição & Reativação** — Cupom de retorno automático que ressuscita cliente sumido
6. **Marketing & Posicionamento** — QR Code branded, Google review integrado, página pública SEO-friendly

Concorrente brasileiro entrega só 1 dessas (agendamento). AgendaPRO entrega as 6 por **R$67**.

Esse é o pitch principal pra Olímpio, Clube Fundador, Meta Ads, Instagram, página de vendas. Quando alguém perguntar "o que faz?", responda nessa ordem — é uma escada de valor.

---

## Princípio que muda o jogo

A maioria dos donos de barbearia/salão/estética/nail no Brasil NÃO usa software de gestão por 2 motivos:

1. **Concorrentes cobram caro** (Trinks R$200-300, Booksy R$150-300, Avec R$240+, ZenPlace R$180+) — fora da realidade do dono que fatura R$5-15k/mês
2. **Software dedicado é complicado** — feito pra rede de salões grandes, não pra dono que atende ele mesmo

**AgendaPRO ataca os 2:** preço de R$67 (3-5x mais barato) + UX feita pra dono que não tem tempo de aprender (mobile-first, PWA instalável em 2 toques, tudo em 1 tela quando faz sentido, subpáginas quando precisa expandir).

---

## O que o produto faz hoje (lista completa)

### Para o DONO (admin)

#### 📅 Agenda
- Dashboard com KPIs em tempo real (faturamento, agendamentos, pendências, claims)
- Lista de hoje + próximos 7 dias
- Ações rápidas (confirmar, cancelar, remarcar)
- Cron auto-complete (marca como concluído depois do horário, sem dono precisar mexer)
- Splash interno estilo Facebook (PRO animada por 600ms)
- Performance: tempo de abertura caiu de 3s pra ~700ms via cache + Suspense

#### 👥 Profissionais
- Cadastro com foto (compressão WebP 250KB client-side)
- 2 tipos: comissionado (recebe % sobre realizado) ou contratado (salário fixo, não rateia)
- Limite por plano (Solo=2, Equipe=5) blindado em UI + trigger SQL
- Convite por email com link mágico de acesso
- Cada profissional vê só os agendamentos dele

#### ⏰ Horários
- Pausa de almoço com múltiplos períodos por dia
- Atalhos: aplicar Seg-Sáb / Seg-Sex / todos os dias
- Atalho "Pausa 12-13h em todos os dias úteis" (1 toque)
- Copiar horários de um profissional pra outro
- Intervalo configurável (10, 15, 20, 30, 60 min)
- RPC atômico (delete+insert na mesma TX) pra concorrência admin/profissional
- Auditoria: registra quem editou e quando

#### 🛍 Serviços
- Sugestões dinâmicas de nomes por categoria (Barbearia: corte/barba/relaxamento; Salão: escova/coloração; Estética: limpeza/peeling)
- Preço obrigatório > 0 (validação UI + nullable no banco)
- Pontos de fidelidade configuráveis por serviço
- Duração customizável

#### 🎁 Fidelidade
- Sistema de pontos por serviço (cliente acumula automaticamente)
- Pontos por **indicação** (quem chega via /slug?ref=X gera pontos pro padrinho)
- Pontos por **pontualidade** (cliente chega no horário → bônus)
- Pontos por **review do Google** (cliente faz review → recebe pontos)
- Recompensas customizáveis (cliente troca pontos por brindes)
- Cliente decide quando trocar pontos (não automático, tem controle)
- 2 modos: pontos compartilhados pelo business OU isolados por profissional

#### 🎟 Cupom de Retorno (reativação automática) — **EXCLUSIVO**
- Sistema detecta automaticamente clientes **sumidos há 40+ dias**
- Card laranja na tela de Clientes: "Reativar X sumidos"
- Tela com 3 etapas guiadas pra leigo (estilo wizard):
  1. **Quanto de desconto vai dar?** (R$ fixo ou %)
  2. **Como vai chamar o cliente de volta?** (templates por nicho com placeholders)
  3. **Veja como vai chegar pro cliente** (preview antes de gerar)
- 9 nichos com **2-3 templates cada**: barbearia / salão / estética / nail / manicure / tatuagem / psicólogo / personal / genérico
- Tom **profissional autêntico** (sem gírias, sem gênero presumido, sem "off" americanizado)
- Nome de exemplo varia por nicho (barbearia=Lucas, salão=Camila, nail=Bianca, psicólogo=Marina)
- Ao gerar: cria **1 cupom único por cliente** (código `PRO` + 5 chars), com expiração configurável (1-365 dias)
- Lista pronta com botão **"Enviar via WhatsApp"** (deep link) — sem API oficial, sem ban
- Cliente clica no link `/{slug}?cupom=PROXX99`:
  - Banner verde "🎁 Cupom PROXX99 aplicado · R$10,00 de desconto"
  - CTA muda pra "Agendar e usar cupom"
  - Cupom propaga pro fluxo de booking
  - Sticky bar mostra subtotal riscado + total verde + "−R$10"
  - Tela "Agendamento confirmado" mostra "Cupom PROXX99 −R$10,00 / Total R$40"
- **1 cupom por cliente vivo** (defense-in-depth: UI + API filtram quem já tem cupom ativo)
- Cupom vinculado ao agendamento que usou (auditoria completa)
- Card "Reativar X sumidos" some quando todos têm cupom ativo (não polui)

**Por que isso é arma de venda absurda:**
- **Recuperar 1 cliente = R$67 do mês pago** (ROI imediato)
- Concorrente NÃO tem isso (Trinks, Booksy, Avec, Zen — verificado)
- Resolve dor real: "tenho 50 clientes que sumiram, não sei o que fazer"
- AgendaPRO faz dono vender de novo, sem dono precisar pensar em copy

#### 🎨 Aparência (white-label leve)
- 16 presets de cor (Azul, Marinho, Bordô, Petróleo, Grafite, Lavanda, etc)
- Badge "★ Indicada" automaticamente nos presets que combinam com o nicho do negócio
- Cor primária + secundária + modo claro/escuro (preview ao vivo na hora)
- Logo do negócio em fundo branco (legível em qualquer tema)
- **Banner/capa da página pública** (uploader com compressão WebP 400KB, max 1600px)
- Cartão "Voltar pro padrão" com confirmação

#### 📷 QR Code (substituiu a antiga aba "WhatsApp")
- QR Code com cor da brand do negócio (não preto genérico)
- Logo do negócio no centro do QR (level H pra resistir à cobertura central)
- Link visível em texto pra colar em bio do Instagram, status do WhatsApp, perfil do Google
- **3 templates de impressão** que cobrem TODOS os casos:
  - **Cartões balcão** (4 por folha A4) — recomendado, qualquer impressora caseira
  - **Cartaz parede** (A5, com moldura branded e selo "Powered by AgendaPRO")
  - **Display acrílico** (A6 + bleed 3mm + crop marks pra gráfica fazer base de vidro/acrílico)
- Imprimir simples (sem co-branding) pra quem quer
- Compartilhar link via Web Share API (Photos, Insta, WhatsApp)
- Baixar PNG via Web Share (sem passar pela tela "data:" do iOS)

#### 👤 Clientes
- Lista com busca por nome/telefone/email
- 5 filtros: Todos / Recentes / Top / Novos / Sumidos
- Tier badges automáticos: VIP (gastou +R$200), Novo (≤30 dias), Sumido (≥60 dias)
- KPIs: total / novos no mês / sumidos
- **Adicionar cliente manualmente** (cliente que ligou, dono digita)
- **Detalhe do cliente** (modal com histórico de até 20 agendamentos, edição de nome/email, adicionar/remover pontos manualmente)
- Pill de pontos roxa nos cards (mostra saldo de fidelidade)

#### 💰 Financeiro
- KPIs grandes: Realizado / Em aberto / Faturado / Ticket médio (com **sparkline SVG inline** mostrando tendência)
- **Recebido por método** (PIX / Dinheiro / Cartão / Cortesia) — NÃO existe em concorrente brasileiro. Métodos com R$0 ficam em collapse (não polui).
- Comissão por profissional automática (% configurável, exclui contratados de salário fixo). Header com **total agregado** ("3 prof · R$ 580 em comissão"). Labels claros: Faturou / Atendimentos / Comissão.
- **Confirmar pagamento** com seleção de método (PIX/Dinheiro/Cartão/Cortesia) — bottom sheet UX nativa. Comissão SOMENTE sobre PAGOS.
- Lista de agendamentos **paginada** (8 + "Ver mais N") + **agrupada por data** ("HOJE / ONTEM / 5 DE MAIO") estilo WhatsApp. Pill "Confirmado" só aparece quando faz sentido (deduplica info).
- **Lucro real** (Receita − Despesas) — verde se positivo, vermelho se negativo. Aparece SÓ na aba "Mês" (despesas mensais distorceriam em "Hoje"/"7 dias").
- KPI urgência: "**X esta semana**" laranja+bold quando há atendimentos confirmados próximos sem pagamento ainda.
- FAB flutuante "+ Despesa" pra registrar gasto na hora.

#### 💸 Despesas (subpágina)
- Cadastro com 7 categorias: Aluguel, Produtos, Salários, Energia/Água/Internet, Marketing, Impostos, Outros
- Despesa recorrente (acontece todo mês — flag visual)
- Notas livres
- Breakdown por categoria com %
- Total + lista clicável (edita/remove)

#### ❌ Cancelados (subpágina)
- Lista de cancelados + no-shows do período
- KPI "Perdido R$X" + "Recuperado R$Y"
- Botão **"Cobrar via WhatsApp"** ou **"Remarcar via WhatsApp"** (mensagem pré-formatada via deep link)
- Botão "Marcar pago" (pra cliente que cancelou mas pagou multa)

#### 📊 Análises (subpágina)
- Comparativo mês atual vs anterior (% variação, verde/vermelho)
- **Forecast do mês** (projeção fim do mês baseada no ritmo)
- **Receita por dia + acumulada** (bar + linha sobreposta)
- **Por dia da semana** (descobre qual é seu melhor dia)
- **Por hora** (descobre seu pico de movimento)
- **Taxa de cancelamento** vs **taxa de execução**
- **Novos vs recorrentes** (qual % vem de cliente fiel vs novo)
- **Métodos atual vs anterior** (PIX cresceu/caiu X%)
- Top 5 serviços + Top 5 profissionais com bar de %
- **Insights automáticos** em linguagem natural:
  - "Sábado é seu melhor dia (35%)"
  - "Pico de movimento às 14h"
  - "70% da receita vem de clientes fiéis. Boa retenção!"
  - "Taxa de cancelamento alta (25%). Considere cobrar tarifa de no-show."
- **Filtros por profissional ou serviço** (zoom em qualquer dimensão)

### Para o PROFISSIONAL (acesso separado)
- Dashboard com agendamentos de hoje + próximos 7 dias
- Marcar como confirmado/cancelado/no-show diretamente
- Bonificação de pontualidade (clica no botão quando cliente chega no horário)
- Foto do perfil (pode editar a própria)
- **Meu Financeiro**: comissão real-time, faturamento gerado, pagamentos pendentes do dono
- Indicador "+ R$X pendente" mostrando comissão futura quando dono confirmar pagamento
- Read-only no status de pagamento (dono que confirma)
- Trocar senha

### Para o CLIENTE FINAL (página pública /slug)
- PWA instalável (não precisa baixar app na loja, fica na tela inicial em 2 toques)
- Identidade visual customizada por negócio (logo, capa, cores)
- Profissionais com fotos (cliente escolhe atendente)
- Serviços com preço, duração, pontos
- Calendário de horários disponíveis em real-time (sem conflito)
- Cadastro super rápido (nome, telefone, email opcional)
- Reconhece cliente que volta (auto-preenche pelo telefone)
- Acumula pontos automaticamente
- Tela "Meus pontos" com histórico
- Indicação automática (link com `?ref=código` gera pontos pra quem indicou)
- Lembrete 1 dia antes + 1h antes (cron automático)
- Confirmar/cancelar pelo link do lembrete (sem precisar entrar no app)
- Lista de espera (entra na fila, sistema avisa quando vagar)
- Review do Google integrada (faz review → ganha pontos)

### Pagamento e Garantia (Impulso Digital, dono do AgendaPRO)
- 4 modalidades: cartão automático / PIX mensal / PIX semestral / PIX anual (com desconto progressivo)
- 7 dias de garantia incondicional pós-pagamento
- Splash + ícone PWA em iOS/Android
- Webhook MP atualiza status em <1s (after() do Next 16)

---

## Comparativo com concorrentes (mercado BR)

| Recurso | AgendaPRO | Trinks | Booksy | Avec | ZenPlace |
|---|---|---|---|---|---|
| **Preço solo** | **R$67** | R$200+ | R$150+ | R$240+ | R$180+ |
| **PWA instalável** | ✅ | ❌ | ❌ | ❌ | ❌ |
| Site público com link curto | ✅ | ✅ | ✅ | ✅ | ✅ |
| Aparência customizável (cor + capa + logo) | ✅ | Parcial | ❌ | ❌ | ❌ |
| QR Code com logo + brand color | ✅ | ❌ | ❌ | ❌ | ❌ |
| 3 templates de impressão profissional | ✅ | ❌ | ❌ | ❌ | ❌ |
| Sistema de fidelidade nativo | ✅ | Add-on | ❌ | ❌ | ❌ |
| Pontos por indicação automatica | ✅ | ❌ | ❌ | ❌ | ❌ |
| Bonus por pontualidade | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Cupom de Retorno automatizado** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Templates por nicho (9 nichos)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Confirmar pagamento + método** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Despesas + Lucro real** | ✅ | ❌ | ❌ | Parcial | ❌ |
| Análises com forecast e insights | ✅ | Parcial | ❌ | ❌ | Parcial |
| **Insights automáticos em texto** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Sparkline de tendência nos KPIs** | ✅ | ❌ | ❌ | ❌ | ❌ |
| Cobrar tarifa de cancelamento via WhatsApp | ✅ | ❌ | ❌ | ❌ | ❌ |
| Acesso separado pro profissional | ✅ | Add-on | ❌ | ✅ | Parcial |
| Comissão automática por profissional | ✅ | Add-on | ❌ | ✅ | Add-on |
| Lembretes automáticos (1d e 1h) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Lista de espera | ✅ | ❌ | ✅ | ❌ | ❌ |
| Cliente integra review do Google | ✅ | ❌ | ❌ | ❌ | ❌ |

**Conclusão:** AgendaPRO custa 3x menos e entrega features que NÃO EXISTEM nos concorrentes (despesas/lucro real, QR branded, pontos por pontualidade/indicação, integração Google review).

---

## Argumentos de venda (separados por persona)

### Barbearia (R$ ticket médio R$30-50, 80-200 atendimentos/mês)

**Headline:** *"Sua agenda vaza R$ 1.200 todo mês. Sem você nem perceber."*

**Argumentos:**
- "Você ainda anota no caderno e gasta 1h/dia respondendo WhatsApp pra confirmar horário."
- "Cliente esquece, falta, e você não cobra porque não tem como provar que combinaram."
- "Cliente novo agenda às 23h pelo Insta. Você só vê de manhã. Já reservou outro horário."
- AgendaPRO resolve **TUDO** isso por R$67/mês — cliente agenda 24h sozinho, sistema cobra cliente que faltou via WhatsApp com 1 toque, lembrete automático 1 dia antes elimina 80% das faltas.

### Salão pequeno (R$ ticket R$60-150, 100-300 atendimentos/mês)

**Headline:** *"Seu salão deixa R$ 1.800 na mesa todo mês."*

**Argumentos:**
- "Você tem 3 cabeleireiras, cada uma faz a própria agenda no celular dela. Conflito de horário acontece toda semana."
- "Comissão você calcula no fim do mês na calculadora, gasta 2h, sempre dá errado."
- AgendaPRO: cada cabeleireira tem login próprio, você vê tudo no dashboard, comissão calcula sozinha, **cliente agenda direto com a profissional preferida** sem você intermediar.

### Salão grande / Plano Equipe (R$ ticket R$80-300, 300+/mês)

**Headline:** *"Quanto você ganhou DE VERDADE este mês? (Receita - Aluguel - Comissões)"*

**Argumentos:**
- "Trinks cobra R$300 e não te diz seu lucro real. Só receita."
- AgendaPRO Equipe (R$97): **gestão completa de profissionais** + **despesas** (aluguel, produtos, marketing) + **lucro real** = você decide se contrata mais 1 profissional com base em **dado**, não em achismo.
- **Análises**: descobre que sábado é 40% do faturamento e segunda gera 5%. Pode fechar segunda OU oferecer 20% off pra encher.

### Estética (R$ ticket alto R$150-500)

**Headline:** *"Microagulhamento de R$ 350. Cliente sumiu sem avisar."*

**Argumentos:**
- "Você não tem caixa pra absorver no-show de R$ 350."
- AgendaPRO: lembrete automático 1d e 1h antes (reduz no-show em 80%) + tela de cancelados que você cobra a tarifa de cancelamento via WhatsApp em 1 toque + confirmação de pagamento por PIX no sistema.

### Nail Designer (R$ ticket R$80-200, agenda lotada)

**Headline:** *"Sua DM lotou e R$ 900 sumiram do seu mês."*

**Argumentos:**
- "Você responde DM o dia inteiro confirmando horário, e na pressa esquece de uma cliente. Cliente fica brava, vai pra concorrente."
- AgendaPRO: cliente agenda direto pelo link da bio do Instagram, sem você responder DM. Lembrete automático 1d antes elimina o "esqueci". Você ganha 2h/dia que perdia em DM.

### Reativação de sumidos (todos os nichos) — argumento universal

**Headline:** *"Você tem 50 clientes que sumiram. Recupera 5 e o sistema se paga 8x."*

**Argumentos:**
- "Cliente que vinha toda 3ª quinzena sumiu há 40 dias. Você nem percebeu. AgendaPRO marca em laranja e oferece um botão: 'Reativar X sumidos'."
- "Em 3 toques: define desconto, escolhe template profissional do seu nicho, sistema gera 1 cupom único pra cada cliente. Você só envia o WhatsApp."
- "Cliente clica no link, sistema mostra 'Cupom aplicado · R$10 de desconto', cliente agenda, cupom é marcado como usado. Auditoria total."
- "Recupera 5 clientes a R$50 cada = R$250. Custo do AgendaPRO no mês: R$67. **Sobra R$183.**"
- **NENHUM concorrente faz isso.** Trinks, Booksy, Avec, Zen — nenhum.

### Dono que quer "saber se tá ganhando dinheiro de verdade"

**Headline:** *"Receita não é lucro. Você sabe quanto sobra no fim do mês?"*

**Argumentos:**
- "Concorrente te mostra 'faturou R$15.000'. AgendaPRO te mostra: faturou R$15.000 − despesas R$5.300 = **lucrou R$9.700**."
- "Cadastra aluguel, produtos, salário, marketing — sistema calcula seu lucro real."
- "Forecast: 'No ritmo atual, você vai fechar o mês com R$18.500.' Saber isso na 2ª semana muda decisão (contrata, baixa preço, reforça marketing)."
- Insights automáticos: "Sábado é seu melhor dia (35% do faturamento). Considere abrir 1h mais cedo."
- **Trinks cobra R$300 e não te conta nada disso.**

---

## Quebradores de objeção

### "É muito barato, deve ter pegadinha"
**Resposta:** "AgendaPRO é Impulso Digital — agência que faz LP, Shopify e Next.js pra empresas. AgendaPRO foi pensado pra atender 1000 negócios pequenos no Brasil que hoje não conseguem pagar R$300/mês. Em volume, R$67 paga. E em vez de cobrar caro pra atender 100 salões grandes (mercado saturado), atendemos 10.000 salões pequenos (mercado abandonado). É estratégia, não pegadinha."

### "Já tenho papel/agenda no WhatsApp"
**Resposta:** "Quanto cliente já te falou 'não vi sua mensagem' ou 'achei que era outro horário'? Quanto cliente novo já agendou no concorrente porque você só viu o WhatsApp dele às 11h da manhã? Papel não dorme, não confirma sozinho, não cobra cancelamento. AgendaPRO faz tudo isso enquanto você corta cabelo."

### "Cliente não vai usar"
**Resposta:** "Cliente JÁ usa Uber, iFood, agendamento de médico online. Sua barbearia/salão é a ÚNICA coisa que ele ainda agenda por WhatsApp. Estatística: 70% dos clientes preferem agendar SEM falar com humano (não querem incomodar, têm vergonha de mudar horário). Você dá esse caminho pra eles, lota a agenda."

### "Não sei mexer com tecnologia"
**Resposta:** "AgendaPRO é app que você instala em 2 toques no iPhone (PWA). Você abre, ele tá lá, igual Instagram. Cadastro inicial leva 5 min. Depois disso você só vê seu nome, agenda do dia, e WhatsApp dos clientes. Toda decoração do app sai do seu celular pro link do cliente — nada precisa ser configurado."

### "Vou esperar mais 1 mês"
**Resposta:** "Os 10 primeiros pagam R$67 fundadores. A partir do 11º vai R$97 (Solo) ou R$147 (Equipe). Você economiza R$360/ano travando agora + ganha 7 dias de garantia incondicional. Se em 1 semana você não usar, devolvo o dinheiro."

### "Eu já uso planilha pra controlar isso"
**Resposta:** "Planilha não te avisa quando um cliente some há 40 dias. Não calcula seu lucro real. Não gera cupom de retorno. Não envia lembrete pro cliente. Não registra qual método o cliente pagou. Planilha é foto, AgendaPRO é vídeo do seu negócio. E o vídeo se mexe sozinho — você só decide o que fazer com a informação."

### "Não confio em sistema gringo / online / na nuvem"
**Resposta:** "AgendaPRO é brasileiro, feito por agência brasileira (Impulso Digital), pra negócio brasileiro. Roda no celular, mas tudo fica seguro nos nossos servidores. Se acabar a internet do salão, dono abre o celular 4G e continua. Se trocar de celular, abre o link e tudo tá lá igual. Mais seguro que caderno (que pode pegar fogo) ou planilha do PC (que pode dar pau)."

---

## Pra usar nas LPs e anúncios

### Headline curta (Meta Ads / hero LP)
- "Sua agenda vaza R$ 1.200/mês. Resolve em R$67."
- "1000 barbearias no Brasil já trocaram WhatsApp por AgendaPRO."
- "Trinks cobra R$300 e não te conta seu lucro real."
- **"Tem cliente que sumiu há 40 dias? AgendaPRO traz de volta."**
- **"Não é só agendamento. É gestão financeira, fidelização e reativação. R$67."**
- **"Receita ≠ Lucro. Sabe a diferença? AgendaPRO sabe."**

### Subhead (LP)
- "Cliente agenda 24h sozinho · Lembrete automático · Comissão calculada · Lucro real visível · Tudo no celular."
- "Agendamento + Gestão financeira + Fidelização + Reativação de sumidos. Tudo em um só lugar, no celular, por R$67/mês."

### Pill / badge ("urgência sem mentir")
- "10 vagas no Clube Fundador" (cap real, não fake)

### Garantia
- "7 dias pra testar tudo. Devolvo o dinheiro sem perguntas."

### Mecanismo (o "como funciona em 1 frase")
- "Cliente escaneia QR → escolhe horário → agenda sozinho → você é avisado → ele recebe lembrete → vem → você confirma o PIX → ganha pontos pra próxima."

### Mecanismo do Cupom de Retorno (1 frase)
- "Sistema marca quem sumiu há 40 dias → você define desconto e escolhe template do seu nicho → cliente recebe link com cupom único → agenda → cupom é usado uma única vez → você recuperou um cliente sem ter que pensar."

---

## Mensuração de valor (pro próprio Eduardo se lembrar do que vendeu)

Custo do AgendaPRO Solo: **R$67/mês = R$2,23/dia**

Em 1 mês qualquer dono de barbearia/salão recupera o investimento se:
- **Recuperar 1 cliente sumido** (R$30-150) com 1 cobrança via WhatsApp → ROI 0,4-2x já no primeiro uso
- **Reduzir 2 no-shows** (cliente que não comparece) com lembretes auto → ROI 1-5x
- **Ganhar 2 horas/dia** que ele gastava no WhatsApp confirmando → 60h/mês × R$25/h hipotético = R$1.500 de tempo recuperado
- **Aumentar 5% nas vendas** com agenda sempre cheia (sem horários "vagos esquecidos") = facilmente R$200-500 a mais

**Em qualquer cenário realista, AgendaPRO paga 5-30x o custo todo mês.**

Esse é o argumento que NÃO PODE FALTAR no fechamento. Quando dono enrolar com preço, lembrar: "Você economiza isso aqui em 1 cliente recuperado. O sistema **se paga sozinho** já no primeiro mês de uso."

---

## Atualização & manutenção desse arquivo

Este arquivo deve ser atualizado a cada release maior do AgendaPRO. Sempre que adicionar feature nova:

1. Lista de features → seção apropriada (Dono / Profissional / Cliente)
2. Atualizar tabela comparativa (validar status do concorrente)
3. Pensar se a feature vira **headline nova** ou **quebra de objeção nova**

Última iteração: tour pré-lançamento Barbearia Olímpio (29/04 → 01/05). **72 commits em 72h** (37 só em 01/05). Sistema saiu de "agenda básica" pra "ferramenta operacional completa de 6 dimensões" (agendamento + gestão financeira + organização + fidelização + reativação + marketing).

Marcos da iteração 01/05:
- ✅ Sistema de Cupom de Retorno end-to-end (9 nichos × 3 templates = 27 templates)
- ✅ Despesas + Lucro Real (educação financeira embutida)
- ✅ Análises com forecast + 6+ insights automáticos
- ✅ Cancelados com cobrança via WhatsApp
- ✅ Pagamento + 4 métodos (PIX/Dinheiro/Cartão/Cortesia)
- ✅ 3 templates de impressão de QR (cartões, cartaz, display acrílico)
- ✅ Sparkline SVG inline + UX polimentos extensivos
- ✅ Lógica de nicho aplicada em TUDO (cores, copy, exemplos, sample names)

---

## Reflexão honesta (Eduardo perguntou se concordo com a tese de "muito custo-benefício, valor inestimável")

**Concordo com a tese:** o produto entrega 5-30x mais valor que cobra. Em qualquer cenário real, dono recupera o R$67 em 1 cliente sumido recuperado. Operacionalmente é absurdo.

**MAS** — e é aqui que precisamos cuidar — **preço muito baixo pode SABOTAR a venda** se não comunicado certo:

1. **Ancoragem invertida**: cliente vê R$67 ao lado de Trinks R$300 e pensa "deve ter pegadinha" ou "deve ser fraco". A primeira reação do cérebro a "barato demais" é desconfiança, não alívio.
2. **Valor percebido cai**: cada feature listada vale "menos" se o pacote inteiro custa R$67. Cliente desvaloriza.
3. **Atrai público errado**: dono que escolhe pelo preço (e não pelo valor) tende a não usar, não treinar a equipe, e cancelar no 2º mês.

### Como contornar:

**A) Preço lá embaixo, não em cima.** Na LP/anúncio, mostrar VALOR primeiro (quanto resolve, comparativo, depoimento). Preço só aparece depois da pessoa estar convencida do valor. Aí R$67 vira "não acredito que é só isso".

**B) Justificar o preço com missão, não com escassez.** "AgendaPRO custa R$67 porque queremos atender 1000 negócios pequenos do Brasil que hoje não pagam R$300" é venda emocional + ética + posicionamento. Não é "promoção".

**C) Limitar o Clube Fundador (10 vagas) é genial.** Cria escassez REAL sem perder credibilidade. E faz o R$67 fundadores parecer "vantagem que tive sorte de pegar", não "preço da promoção que sempre rola".

**D) Criar tier acima.** Quando tiver 1000 clientes ativos: lançar "AgendaPRO Pro" R$197 com +features. Isso REPOSICIONA o R$67 como "entrada". Quem entra agora "ganhou".

**E) Mostrar comparativo.** A tabela de concorrentes acima é o argumento mais forte. Cliente vê AgendaPRO ✅ em coisas que outros têm ❌, e faz a conta sozinho.

**Resumindo:** custo-benefício é absurdo, e isso é arma. Mas tem que ser mostrada com framing de **valor entregue** (o que vou ganhar), não de **preço baixo** (quanto vou pagar). A venda vira fácil se a história começa com a dor e termina no preço.
