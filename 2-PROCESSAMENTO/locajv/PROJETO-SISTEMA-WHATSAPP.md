# PROJETO — Sistema de atendimento e cobrança no WhatsApp · LocaJV

**Aberto:** 09/08/2026 · **Cliente:** Jayandson Cirqueira da Silva — LocaJV, Goiânia-GO
**Origem:** o cliente procurou a Impulso. Frente **nova**, separada da gestão de tráfego ([[STATUS-LOCAJV]]).
**Valor planejado:** R$1.997 pelo projeto · cliente paga só a conexão do WhatsApp por fora.

> ⚠️ R$1.997 está abaixo da régua oficial ("sistema sob medida a partir de R$2.997"). Decisão de Eduardo, registrada com o alerta dado.

---

## 1. Como surgiu

O Jay mandou um reel da **@acelerashark** (18/07/2026, 605 curtidas) vendendo "IA integrada" pra loja de motos: responde em menos de 1 minuto 24h, pré-qualifica o lead, **simula crédito pelo CPF**, manda fotos e condições, e o vendedor só entra quando o financiamento está pré-aprovado no Kanban.

Perguntou: *"Mano, dá pra fazer um trampo desse?"* Eduardo respondeu que sim.

**O vídeo não serve inteiro:** aquilo é pra loja que **vende** moto. A LocaJV **aluga** — ciclo semanal recorrente. Metade do encanto (simulação de crédito por CPF) não tem função aqui.

**O escopo real apareceu quando o Jay abriu o jogo:**

> "Atender o povo **e cobrar o povo**. Os atrasados e tals. Cobrar troca de óleo. Lavagem."

E cravou uma condição de produto:

> "Liga e desliga quando quiser? Pq quando tiver tudo alugada eu parar."

Frota é finita (49 veículos). Diferente de salão, onde a demanda é infinita.

---

## 2. O sistema que o Jay usa hoje — VELO (`velo.global`)

Painel: `velo.global/painel_locador/dashboard` · **Plano Pro** (R$63,99/mês no anual) · **49 veículos** · equipe: jayandson e Linhares, ambos Admin · WhatsApp cadastrado: **62 99659-9081**.

**Isso resolve a dúvida dos três telefones** que travava a campanha de tráfego: o número oficial da locadora é o 99659-9081.

**Módulos nativos:** Locações · Motos · Carros · Velo BOT · Checklist · Finanças · Manutenções · Radar de Multas · Multas · Troca de óleo · Revisões · Relatórios · Estoque · Rastreamento · Antecedentes · Blacklist · Velo Bank · Criar Site · Calculadora · Indicações.

### 🔴 O Velo já vende o bot

Item **"Velo BOT"** no menu dele, marcado Novo:

> *"Seu melhor vendedor, agora com chatbot — Fechando locações 24h por dia no WhatsApp. Configure um bot de autoatendimento em menos de 5 minutos."* · Teste grátis 5 dias + 100 créditos.

**Por baixo é white-label do ChatGo** (`atendimento.chatgo.plus`) — não é tecnologia da Velo.

**Consequência de posicionamento:** vender "bot que atende e qualifica lead" é vender o que o Jay liga num clique dentro do sistema que já paga. No dia que ele clicar naquele menu, a proposta fica cara.

**Onde a Velo NÃO está:** cobrança recorrente de cliente ativo. O Velo BOT é lead-facing ("fechando locações"); o Velo Bank é rail financeiro, não régua de cobrança por WhatsApp. **É esse o espaço.**

### 🔴 Velo não expõe API

Nada de Integrações/API no menu — "Mais" abre só Criar Site, Calculadora, Indicações, Suporte e Velo Bank. Nada nas 30+ funcionalidades do site público. Não prova que não exista. **Pendente: perguntar ao suporte deles.**

---

## 3. Decisão de arquitetura — não depender do Velo

| Fica na Velo | Fica com a gente |
|---|---|
| frota, contrato, checklist, rastreamento, multa, manutenção | conversa com o cliente e cobrança |

O dado que a cobrança precisa é curto e não muda todo dia: locatário, telefone, moto, valor da semana, dia do vencimento, km da última troca. **Cadastro é uma vez por contrato, não por dia.** Carga inicial das 49 motos por planilha, não na mão.

🔴 **Não raspar o painel da Velo.** Frágil, quebra quando mudam o HTML, e provavelmente fere os termos deles.

---

## 4. ✅ W-API recebe mensagem — confirmado 09/08/2026

Seção **Webhooks** na Referência API deles, **8 endpoints**. O que destrava o bot:

```
PUT https://api.w-api.app/v1/webhook/update-webhook-received?instanceId=<id>
Authorization: Bearer <token>
{ "value": "https://<nossa-rota>" }
```

> *"Esse webhook é responsável por receber as mensagens enviadas para a sua instância."* — marcado **LITE/PRO**, HTTPS obrigatório.

Também existem: Ao conectar · Ao desconectar · Ao enviar · Atualização no status de mensagens · Atualização no status do chat · busca de webhook logs (só PRO).

**Preço:** LITE **R$19,90** já inclui o "Ao receber". Eduardo citou R$29 pro Jay (é o PRO, que ele usa). Confirmar o LITE antes de baixar o número.

⚠️ O **payload de entrada** não está documentado nessa página — descobre apontando o webhook e logando o corpo cru na primeira mensagem.

---

## 🔒 DECISÃO CRAVADA (09/08/2026) — sem IA, só W-API

Eduardo decidiu **não usar API de IA** no projeto. Fica **só a W-API** (entrega e recebe mensagem) e o **motor de mensagens**, que a gente melhora.

**O que motivou:** a dúvida era se a IA substituiria a W-API. Não substitui — são camadas diferentes:

| Camada | Papel | Obrigatória? |
|---|---|---|
| Nosso sistema | decide **o quê** e **quando** mandar (cron, regras, templates) | sim — é o cérebro |
| W-API | **entrega e recebe** no WhatsApp | sim — é a única que fala com o WhatsApp |
| IA (Claude API) | traduz texto livre que a árvore não entende | **não** — cortada |

A API da Claude não tem número nem sessão de WhatsApp: recebe texto e devolve texto. Pedir pra ela mandar mensagem é pedir pro tradutor entregar a carta.

**Preços levantados na fonte (09/08/2026), caso a decisão mude:** Claude Haiku 4.5 US$1,00/US$5,00 por milhão de tokens (entrada/saída) · Sonnet 5 US$3/US$15 (promo US$2/US$10 até 31/08/2026) · Opus 5 US$5/US$25. Estimativa de ~30 conversas/mês no Haiku: **menos de US$1/mês** — custo não foi o motivo do corte.

⚠️ **Consequência que não pode ser esquecida:** sem IA, o bot não entende pergunta fora do roteiro. A árvore de menu precisa ser bem escrita, e o **handoff pro humano vira obrigatório** — duas tentativas sem entender, o bot chama o Jay e marca o lead no painel. Bot que não sabe sair de cena frustra mais do que ajuda.

**Único substituto possível da W-API:** a API oficial do WhatsApp (Meta) — cobra por conversa e exige aprovação prévia dos modelos de mensagem. Caminho de upgrade se o volume justificar, não decisão de agora.

## 5. Reuso — o motor do AgendaPRO (v119), sem IA

Eduardo cravou: **sem custo de IA**. Não precisa.

O motor v119 (em produção desde 07/08) monta por **template com variáveis** e dispara na varredura horária. Custo marginal zero. Vem junto:

- `message_rules` — regra por tipo com `enabled` por negócio. **É o liga-e-desliga que o Jay pediu.**
- `message_log` — chave UNIQUE: ninguém recebe a mesma cobrança duas vezes, e a trava é do Postgres.
- `message_optout` — quem pede pra parar, para.
- `src/lib/mensagens/canal-whatsapp.ts` — W-API já disparando.

Tipos novos a criar: `vencimento_hoje`, `atraso_1/3/7`, `troca_de_oleo`, `revisao`, `lavagem`, `fim_de_contrato`.

**Atendimento de lead sem IA:** bot de menu (opções numeradas + perguntas fechadas: CNH categoria A, trabalho ou uso pessoal, modelo, quando retira). O "IA" do vídeo da concorrência é funil roteirizado na maior parte.

**Blindagem do número:** responde só quem falou primeiro, cobra só cliente ativo. Nunca disparo pra lista fria — número cai por denúncia, não por volume.

---

## 6. Entrega em duas etapas

| Etapa | O que entra |
|---|---|
| **1** | Cadastro de motos/locatários/contratos · cobrança no vencimento · régua de atraso · troca de óleo e revisão |
| **2** | Atendimento automático do lead novo · funil na tela |

Etapa 1 primeiro de propósito: resolve o gargalo real (49 motos, mensagem na mão) e o cliente sente antes da etapa 2 ficar pronta.

---

## ✅ NÚMERO DEFINIDO (09/08/2026) — (62) 99659-9081

Eduardo cravou: o bot conecta na W-API com o **número principal da locadora, (62) 99659-9081**. É o mesmo que está nas artes, no link do Instagram, no campo "Whatsapp da Locadora" da Velo (`62996599081`) e que vai no anúncio. Formato pra W-API (DDI + DDD + número, só dígitos): **5562996599081** — é o que `normalizarTelefone()` já produz.

**Consequência: é caixa compartilhada.** Jay e Linhares continuam atendendo do celular normalmente; o bot entra como aparelho conectado a mais (igual WhatsApp Web). Duas coisas que isso exige:

1. **Pausa automática quando humano responde.** A W-API tem webhook **"Ao enviar"**, que dispara também quando a mensagem sai do celular na mão. É por aí que o sistema detecta que um humano assumiu — e cala o bot naquela conversa por algumas horas. Sem isso, cliente recebe resposta do Jay e do robô ao mesmo tempo.
2. **Aquecimento e blindagem.** É a linha principal do negócio, não um chip reserva — se cair por denúncia, ele perde o número que está em toda a comunicação. Regras inegociáveis: só responde quem falou primeiro, só cobra cliente ativo, nunca disparo pra lista fria, opt-out respeitado, e volume subindo aos poucos nos primeiros dias.

## 🎯 MODELO DE VENDA E UPSELL (cravado 10/08/2026)

**Venda 1 (agora):** o sistema é do Jay, R$1.997. Contas novas e isoladas — GitHub, Supabase, Vercel e **W-API**, todas em conta separada.

**Upsell (a oferecer):** se ele quiser, a gente transforma o sistema em **multi-tenant e ele vira o operador** — cadastra outras locadoras e cobra mensalidade delas. Se o Jay não quiser, a Impulso fica com a base multi-tenant e o produto é nosso.

Ou seja: o mesmo código serve aos dois caminhos, e quem opera o painel de cima é a única variável.

**O que preparar AGORA (barato hoje, caro depois):**
1. `business_id` em toda tabela + RLS por tenant desde a primeira migration.
2. Papel de **operador** separado de **dono da locadora**. Hoje só o Jay entra; amanhã ele entra como operador de N locadoras.
3. Credencial da W-API **por negócio, no banco** (`wapp_instance_id`/`wapp_token`) — já decidido, e é o que permite cada locadora ter o próprio número sem tocar em código.

**O que NÃO construir agora** (λ.nao-expandir-especulativo): painel do operador, cobrança das locadoras-clientes, fluxo de cadastro público, tela de planos. São o upgrade — viram escopo quando ele comprar.

⚠️ **Duas cautelas na hora de vender o upsell:**
- **Não prometer receita.** A capacidade é real ("você pode cadastrar e cobrar"); quanto ele vai faturar com isso não é promessa nossa.
- **O mercado dele já tem dono.** A Velo cobra R$33,99–104,99/mês e diz ter 3.500 locadoras cadastradas. Se o Jay revender, o ângulo dele não é gestão de frota — é a **cobrança automática por WhatsApp**, que é justamente o que a Velo não faz. Vender como "concorra com a Velo" é vender briga perdida; vender como "o pedaço que falta na Velo" é vender o que a gente tem.

## 🧭 HORIZONTE — absorver as funções da Velo (direção cravada 10/08/2026)

Eduardo: trazer, com o tempo, todas as funções da Velo pra dentro do sistema e posicionar como **"feito por/com quem vive de locação"**. Direção aceita — é o mesmo método que fez o AgendaPRO (agendamento → financeiro do Olímpio → fichas → contas a pagar da Letícia) e o Palace.

**Os módulos da Velo se dividem em dois custos MUITO diferentes:**

| Só software (a gente absorve) | Depende de terceiro (é sociedade, não sprint) |
|---|---|
| gerador de contrato · checklist de entrega/devolução · financeiro · manutenção, troca de óleo, revisão · relatórios · estoque · blacklist · site da locadora | **rastreamento** (hardware GPS + telemetria — a Velo cobra R$25/veículo, claramente revende) · **multas / radar de multas** (dado de órgão de trânsito) · **antecedentes** (API paga por consulta) · **Velo Bank** (rail financeiro — contrata ou vira instituição de pagamento) |

**Ordem proposta:** (1) cobrança + atendimento — o que a Velo não faz · (2) contrato + checklist — puro software, dor diária, é o que amarra o locador · (3) financeiro + frota — aí ele pode largar a Velo · (4) integrações, só com cliente pagante pedindo.

🔴 **O erro a evitar: construir a Velo inteira antes de vender.** O caminho validado nos dois produtos que deram certo é o inverso — vende o pedaço que dói, deixa o cliente pagante puxar o resto.

⚠️ **Sobre o posicionamento:** só se sustenta se as funções vierem mesmo da operação do Jay; virando slogan sem substância, locador percebe. E cuidado com a autoria — quem desenvolve é o Eduardo, o locador é o Jay. "Feito com quem vive disso" (ou o nome dele assinando) é honesto e vende igual; "desenvolvido por locador" sugere que o Jay coda.

## 7. Pendências
2. Conta **Asaas** do Jay — PIX + webhook de pagamento fecha o ciclo "pagou, para de cobrar".
3. Perguntar à Velo se existe API.
4. Ligar o teste grátis de 5 dias do Velo BOT pra medir o que ele cobre. **Conta do cliente — ele autoriza antes.**
5. Confirmar se o LITE da W-API cobre tudo.

---

## 8. Entregue em 09/08/2026

Proposta cliente-facing, **sem preço no documento** (o número vai à parte no WhatsApp, depois do valor construído):

- **PDF:** `Desktop\Proposta LocaJV - Sistema de Atendimento e Cobranca.pdf` — 8 páginas A4, logo da LocaJV recortada da arte original sobre placa preta (não redesenhada)
- **Web:** https://claude.ai/code/artifact/7e5c939b-d1ad-46b9-a909-ab87b352ae47

**Protótipo navegável do painel** (pra reunião com o Jay e a esposa): https://claude.ai/code/artifact/55b2a30c-ab10-44f7-9c77-debcbd8cc828

🎯 **Decisão de design cravada por Eduardo (09/08):** o painel copia a linguagem visual da **Velo** — barra lateral branca com pílula cinza no ativo, cartões de canto redondo com degradê pastel e selo circular colorido, botão primário roxo, saudação "Olá, {nome}!" em roxo, logo da locadora no canto superior direito. **Motivo:** *"quando usam um sistema é mais difícil se acostumar com outro; se for tudo igual a resistência é menor."* Tela **só clara**, sem modo escuro.

⚠️ **Roxo é a cor de interface, vermelho fica reservado pra atraso.** Se o vermelho da marca fosse pro botão, brigaria com o vermelho que significa "está devendo" e o dono não saberia o que é alerta. A identidade da LocaJV entra pela logo, no mesmo lugar onde o Velo mostra a logo da locadora.

**Telas do protótipo:** Painel (4 indicadores + "Precisa de você" + o que o sistema fez hoje) · Cobranças (8 linhas com filtro) · Clientes novos (funil de 4 colunas + a conversa do bot rodando na tela com o que ele extraiu) · Frota (barra de km até a troca de óleo) · Avisos (7 chaves liga/desliga com o texto de cada mensagem à mostra).

Conteúdo: o que trava hoje · os três trabalhos que o sistema assume · uma semana com ele ligado, hora a hora · exemplo da tela · o liga-e-desliga · o que o sistema **não** faz · cinco itens da parte dele · custo mensal · duas etapas.

**Deixado de fora de propósito:** o faturamento que aparece no painel da Velo (R$308.335 de entradas em 12 meses). Prova dever de casa, mas avisa que fuçamos o financeiro dele. Eduardo decide se entra.

⚠️ O Jay passou login e senha do Velo pelo Instagram. **Senha não entra em arquivo nenhum.**
