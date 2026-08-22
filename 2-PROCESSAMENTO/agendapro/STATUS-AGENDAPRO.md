# STATUS-AGENDAPRO.md

**Produto:** AgendaPRO — SaaS de agendamento + gestão financeira + fidelização + reativação
**Fase:** 🟢 **EM PRODUÇÃO COM CLIENTES PAGANTES** · Asaas validado · **9 pagantes, R$693/mês** · cadastro orgânico entrando sozinho, sem prospecção
**Data:** 21/08/2026 (motor de WhatsApp pronto e travado pelo canal · antes 30/07)
**Responsável:** Eduardo Barros

---

## 🔴 ATUALIZAÇÃO 21/08/2026 — o motor de mensagens ficou pronto, e o canal não entrega

**O que foi construído e está em produção, DESLIGADO:** confirmação de agendamento disparada **na hora** que marca (não mais na varredura horária), lembrete 3h antes, botões "Confirmo"/"Preciso remarcar" com o webhook confirmando o agendamento sozinho, aba **WhatsApp** no Painel com preview da mensagem em bolha e edição de texto por aviso, alarme de canal morto no Telegram, e validação de número sem WhatsApp (v126). Tudo provado com print chegando no celular.

**🔴 O que trava:** o WhatsApp **só entrega para quem já mandou mensagem para o número da instância antes.** Reproduzido com 5 envios: chegou nos números com conversa prévia, não chegou no número que nunca tinha falado — nos dois formatos (com e sem o nono dígito). A pessoa mandou um "oi" e o reenvio chegou na hora. **Os 5 foram aceitos com HTTP 200 e messageId, e o `message_log` gravou "enviado" nos 5.**

Causa confirmada no painel da W-API (tela **Saúde do Chip**, e por API em `GET /v1/instance/health`): status **TIMELOCKED**, *"Número restrito pela Meta"*, `temperature: 2`, `daysOfLife: 13`, 16 enviadas contra 8 recebidas. Chip comprado há 3 meses mas **parado esse tempo todo** — primeiro movimento dele foi disparar pra desconhecido. Some a isso a política da Meta de out/2025, que limita mensagem para quem não é contato e não respondeu.

**Isso derruba a premissa:** lembrete de salão vai justamente pra cliente que nunca falou com o número da plataforma. Ligar hoje faria a dona ver "enviado" no painel e a cliente não receber nada — falha silenciosa com cara de sucesso.

**Decisões de Eduardo (21/08):**
- **Nada vai pra negócio real sem teste e aprovação dele.** As 7 regras que estavam ligadas (Rosy, Isis, CAF) foram desligadas; hoje há **zero regra ligada no sistema inteiro**.
- **Aba WhatsApp fora do menu** — nem "em breve", que já é promessa. Acessível só por URL (`/admin/whatsapp`), com aviso de "em ajustes finais".
- **Escopo enxuto:** só confirmação + lembrete 3h. Sem véspera, sem aniversário.
- **Não cobrar dos clientes.** Olímpio e Rosy já tinham recusado pagar por isso. Custo fica absorvido: **~R$24/mês, 3,5% da receita**.

**Cloud API oficial — a conta, com dado do banco:** 361 agendamentos com telefone em 30 dias × 2 avisos = 722 mensagens. Utility no Brasil ≈ US$0,0074/mensagem entregue + IOF 3,5% = **R$30/mês**. Sem mensalidade (Cloud API direto da Meta; BSP come 27–100% da receita). Verificação de empresa **não** é exigida pra começar: 250 destinatários únicos/24h, e hoje se usa 12/dia. Utility dentro de janela de 24h aberta é grátis.

**O que o mercado faz** (pesquisado): Trinks, AppBarber e AgendaPro LatAm mandam de **número único da plataforma com canal oficial e cobram à parte**. Simples Agenda, Avec e Belle usam **QR no número do salão** — grátis, entrega bem, mas queima o número do cliente e **nenhuma delas avisa disso**. O AgendaPRO está no meio: número único **sem** canal oficial — concentra risco e não entrega.

**Política, ponto que decide a arquitetura:** o opt-in é para **quem envia**. Mandar "AgendaPRO: seu horário no Studio X" é permitido, mas o consentimento tem que **nomear o AgendaPRO** — e o remetente aparece como AgendaPRO, nunca como o salão (nome do salão exigiria número + verificação por salão). Para o balcão, a Meta aceita nominalmente opt-in **em papel assinado**. Guardar a prova não é exigência da Meta: é da LGPD (art. 8º §2º, ônus do controlador). ⚠️ O campo `customers.marketing_consent` existe mas está `true` em **721 de 721** — é default, não consentimento; não serve de prova.

**Migrations:** **v126** (`customers.whatsapp_valido` + `whatsapp_checado_em`, com revalidação em 30 dias) e **v127** (`message_rules.com_botao` — cada negócio escolhe se o lembrete leva botão). As duas aplicadas no banco.

**Achado de passagem:** a CSP do `next.config.ts` não liberava `challenges.cloudflare.com`, então o **Turnstile nunca desenharia** — o cadastro travaria pedindo verificação que não tem como aparecer, para todo cliente novo, no dia em que a chave fosse ligada em produção. Corrigido.

**Formato de botão da W-API, que a doc pública não documenta** (descoberto testando): `POST /v1/message/send-button-actions` (não `send-button-list`), `buttonActions: [{ type: 'REPLAY', buttonId, buttonText }]` — `REPLAY` escrito assim por eles, e `buttonText` é string, não objeto.

---

## 🔵 ATUALIZAÇÃO 30/07/2026 — autonomia da equipe (v98a→v98i) · a Realli virou o caso que criou a feature

**Pedido do dono da Realli** (WhatsApp 29/07 19:20-19:27, print no histórico): as profissionais precisavam **marcar as clientes delas sem depender da dona** — e ver a agenda das colegas, porque *"atendem em dupla e precisam saber se a amiga tem horário livre"*. Prazo: manhã de 30/07. A dona era o gargalo: só ela marcava.

**3 flags novas em `businesses`, todas `DEFAULT false`** — os outros 25 negócios não mudaram de comportamento:

| coluna | o que libera |
|---|---|
| `professionals_can_book_self` | profissional marca na própria agenda (v98a) |
| `professionals_can_book_others` | marca também na agenda das colegas (v98b · o dono reconfirmou em 30/07) |
| `professionals_see_team_agenda` | vê a agenda das colegas em leitura |

Migrations: `v98a-professional-self-booking.sql` + `v98b-professional-books-colleagues.sql`. **Ligadas só na Realli e no demo Studio Larissa** (leitura confirmada no banco). ⚠️ A v98a foi entregue rotulada "v92" por engano (v92 já era da niche-fichas) — arquivo renomeado, mas os `COMMENT` no banco ainda dizem v92.

**Achado que mudou o tamanho da obra:** a permissão **já estava aberta no banco**. A v81 criou `appointments_business_access` como `FOR ALL TO authenticated`, e o `USING` cobre qualquer profissional ativo do business (no INSERT o Postgres reusa esse `USING` como `WITH CHECK`). A trava sempre foi de **UI**. Nenhuma policy nova foi escrita.

**O painel da profissional virou a grade.** Antes era lista mobile; `/admin` da dona já é `GradeTimeline` em todos os breakpoints desde sempre. Agora as duas superfícies seguem o mesmo padrão. Junto: saiu o menu do corpo (duplicava o `ProfissionalBottomNav`), saíram os 4 KPIs e a lista "Hoje" (a grade mostra o dia), e sobrou **um único** caminho pra marcar — o `+ Agendar` da própria grade. A dona **não aparece** nas telas de equipe da profissional (`role != owner`, cravado por Eduardo: "ela é só adm"). A coluna de quem está logado vem **primeiro**, com selo "(você)".

**3 props aditivos** em componentes que o admin, a recepção e o Palace compartilham — todos com default que preserva o comportamento atual: `excludeProfessionalIds`, `hideCaixaActions`, `firstProfessionalId`. `GradeTimelineHeader` ganhou `areaBasePath()`, que agora conhece `/profissional` (antes a navegação de dia empurrava pra `/admin?date=` e chutaria a profissional pro painel da dona).

**Dois bugs financeiros achados na tela `/profissional/financeiro`** — os mesmos do `PLAYBOOK-FINANCEIRO-FUSO-E-LIQUIDO.md`. O sweep de 04/07 varreu as telas da dona e **essa passou batido**:
- somava `total_price` BRUTO × % de comissão, ignorando `invoices.discount`. Como a remuneração no `/admin` paga sobre o LÍQUIDO desde 04/07, no primeiro cupom a profissional veria um número **maior** do que a dona paga — e descobriríamos pela funcionária reclamando. Corrigido com `getApptDiscountMap`.
- montava as janelas com `toISOString()` cru. Corrigido com `todayBR`/`addDaysBR`.

**⚠️ O fuso NÃO estava corrigido em todo o sistema** — Eduardo acreditava que estava. O sweep de 04/07 foi escopado nas telas de dinheiro da dona. Corrigido agora só o escopo Realli (4 pontos: lista "Hoje", janela de 7 dias, o texto da data no header, e o badge de pendentes no `layout.tsx`). **Ponto cego de método:** o badge montava a data com `getFullYear/getMonth/getDate`, forma que **não aparece no grep de `toISOString`** — que foi como o sweep de julho caçou os casos. A varredura geral tem que procurar as duas formas. Fila ranqueada nas pendências.

**Outros achados registrados:**
- **Realli estourou o Equipe no 1º dia** (5 atendentes, sendo a dona uma delas) → `extra_professional_slots: 0 → 1`, limite virou 6.
- **Limite de plano está travado no BANCO** (trigger v30/v47/v78), não só na UI. Provado na prática em 30/07: INSERT direto com service-role numa conta Solo com 2 profissionais foi recusado pelo Postgres — *"Plano solo permite no máximo 2 profissionais"*. ⚠️ Numa análise anterior da mesma sessão eu havia concluído o contrário ("validação só no client, furo de receita") por ter grepado apenas as rotas de API — **não existe furo**.
- **`working_hours` não nascia com o cadastro** → v99 criou trigger de horário padrão (seg-sáb 08:30-18:00, slot 30min · recepcionista fora). Detalhe em `supabase-migration-v99-default-working-hours.sql`. Backfill da Realli feito; a dona ficou de fora de propósito.

**Commits da madrugada:** `4833e6c` (v98a) · `fe81ba0` · `47df599` (v98b) · `41f46b6` (dona fora) · `2f9a48f` (grade = home) · `adaec85` (coluna dela primeiro) · `23cf95c` (topo enxuto) · `f0ad7fb` (um caminho de marcar) · `9c4bff2` (financeiro líquido+fuso) · `5689f49` (fuso da área).

---

### 🔴 A TARDE DE 30/07 — a equipe operando de verdade, e a causa-raiz dos bugs

Eduardo testou com uma profissional de teste dentro da Realli. **Cada poder novo dado à profissional esbarrou numa premissa antiga** — e essa é a lição da sessão:

> O app foi escrito para **2 papéis** (dono e, depois, recepção remendada). A área da profissional existia mas era **somente leitura**. Ao ganhar poder de operação, ela passou a andar por caminhos escritos assumindo que ela não existia. Os erros vieram **em sequência**, um por capacidade nova.

**As 3 peças que desarmaram a categoria (não o bug individual):**
| peça | o que resolve |
|---|---|
| `src/lib/api-business-access.ts` · `resolveBusinessIdOperacao()` | uma regra de permissão em vez de 24 cópias do gate "dono OU recep" |
| `src/lib/area-prefix.ts` · +`/profissional` e `areaSemTelasInternas()` | 3 áreas em vez de 2 · o prefixo antes mandava tudo pra `/admin` |
| `src/lib/destino-sem-negocio.ts` | **32 páginas** mandavam quem não é dono pra `/cadastro` ("cadastre seu negócio em 2 minutos") no meio do atendimento. Agora volta pro painel certo |

**Poderes da profissional (Realli) ao fim do dia:** cadastrar cliente · marcar (dela e da colega) · confirmar · atendido · **receber** (PIX/dinheiro/cartão com maquininha e parcela) · desconto · cortesia · **remarcar** · **bloquear a própria agenda** · ficha, ficha de nicho e foto da cliente · WhatsApp. **Cancelar: só o dela e só antes de pago** — depois de pago é da adm.

**Features novas do dia:** `/profissional/bloqueios` (padrão da aba da dona: presets Almoço/Folga/Dia inteiro/Férias, recorrente × data, badges HOJE/AMANHÃ) via `/api/profissional/bloqueio` · **REMARCAR** (`/api/admin/appointments/[id]/remarcar`) — **não existia no produto, nem pra dona**: mudar horário era cancelar+recriar, o que apagava histórico, matava a comanda e contaminava a taxa de cancelamento das Análises.

**⚡ PERFORMANCE — achado grande:** Vercel rodava em **`iad1` (Washington)** e o Supabase está em **`us-west-2` (Oregon)**. Cada ida ao banco custava ~60-70ms costa-a-costa, com ~6 rodadas por tela. `vercel.json` ganhou `"regions": ["pdx1"]` (Portland, mesma região do banco) → **TTFB caiu de ~1,05s para ~0,52s, medido**. ⚠️ Ler o header direito: `x-vercel-id: gru1::pdx1` = borda em SP → função em Portland; página estática mostra só a borda e engana. Mover o Supabase pra `sa-east-1` segue sendo o melhor final, mas é obra com janela e backup.

**Commits da tarde:** `25f805f` (customers) · `dc4d477` (ficha/foto) · `30f9dbe` (ciclo: receber/cancelar) · `7831334` (comanda) · `106ee3e` (desconto+cortesia) · `b133c8e` (area-prefix) · `a0f20ae` (prof nova invisível na grade) · `9ae39c2` (banner atrás da topbar) · `f85108a` (grade até o fim + modal solto) · `0363a8e` + `44275e6` (regras de cancelar) · `2307c84` (perf) · `782bacd` (região) · `60a7147` (dona atende) · `58710a0` (popover) · `0da0193` (destinoSemNegocio) · `1029f74` (fichas) · `1585127` + `b6139f2` (bloqueios) · `8632f23` (WhatsApp) · `76deb3d` (remarcar).

**Acesso de teste criado:** `demo.bianca@impulso.app` / `DemoAgenda2026` — profissional do demo Studio Larissa, `password_changed: true` (não cai na tela de troca de senha no meio de uma gravação). Serve pro vídeo de instalação do app e pra qualquer teste futuro sem tocar em conta de cliente real.

---

## 🔵 ATUALIZAÇÃO 29/07/2026 — 2 trials novos em uma noite, um deles fora do ICP

Os dois entraram **sozinhos**, sem prospecção, com uma hora de diferença.

**DN Diogo Nogueira** (`/dn-diogo-nogueira`) · 28/07 19:40 · **instalador de papel de parede, Porto Alegre e região**. Primeiro negócio **fora do nicho beleza**. Entrou confuso: já era cliente do **TuaAgenda** (concorrente) e achou que mexia no outro sistema. A dor que pode fazer ele trocar, dita por ele em áudio: no TuaAgenda **todo cliente é obrigado a logar com Google ou Apple pra agendar** — no AgendaPRO o `/api/booking/submit` não tem checagem de sessão nenhuma, o cliente marca com nome e telefone. Conta configurada à mão (horário seg-sex 8:30-12:00 e 13:30-17:00, foto, serviço "Instalação de papel de parede" R$150 por rolo/2h, capa da marca dele, modo claro). Trial vence **04/08**. Detalhe em [[project_dn_diogo_nogueira]].

**Realli Studio Nails** (`/realli-studio-nails`) · 28/07 21:48 · Renata Tertuliano, Paraná. **Pediu upgrade pro Equipe com uma hora de uso** — bateu no teto de profissionais do Solo e o próprio app mandou ela pro WhatsApp. Equipe liberado dentro do trial (sem cobrança até 05/08, depois R$97). Já subiu **14 serviços** no mesmo dia.

**O que os dois revelaram do produto (tudo corrigido ou mapeado no dia):**
- **Alerta de cadastro novo não chegava no Telegram** — `void sendAlert(...)` em `/api/cadastro` disparava o fetch sem esperar, e a Vercel congelava a invocação no `return` duas linhas abaixo. Mesmo `void` estava no alerta de **pagamento** (webhook Asaas). Corrigido pra `await` nos dois (commit `97266f6`). Cadastros perdidos desde 21/07.
- **Favicon e prévia de link mostravam a logo do Vercel** — `src/app/favicon.ico` era o do scaffold do create-next-app, nunca trocado desde o commit `init` de 10/04; e `openGraph` não declarava `images` nem `metadataBase`. Corrigido com favicon da marca + `opengraph-image.tsx` via next/og (commit `9fc856f`).
- **CTA duplicada na página pública** em negócio com poucos serviços — agora só aparece acima de 3 serviços (commit `c22a6d5`). Medido antes: dos 16 ativos, só a página do Diogo muda.
- **Magic link é queimado pelo robô de prévia do WhatsApp** — testado: requisição com User-Agent do WhatsApp consome o token e o clique seguinte cai em `login?error=Email link is invalid or has expired`. **Ainda não corrigido.** Vale pra qualquer link mandado por e-mail também (scanner de provedor faz a mesma varredura).
- **Upgrade Solo→Equipe é 100% manual** — `BillingPlanSelector` recebe `plan={sub.plan}`, o cliente só escolhe modalidade. Todo cliente que crescer cai no WhatsApp do Eduardo.
- **No mobile a duração do atendimento vem travada do serviço** (`MarcarAgendamentoForm.tsx:225`), enquanto no desktop dá pra ajustar por linha (`AgendarModal.tsx:1085`). Pega qualquer serviço de duração variável.
- Serviço com duração maior que o bloco de trabalho **não gera horário nenhum** na agenda pública, silenciosamente.

---

## 🔵 ATUALIZAÇÃO 04/07/2026 — sweep financeiro líquido + fuso (portado do Palace)

- **Líquido (λ.valor-liquido) COMPLETO em prod:** telas somavam `total_price` BRUTO ignorando `invoices.discount`. Pior achado: a **remuneração pagava comissão sobre o bruto** (nem buscava `invoice_item_id`) → Olímpio pagava comissão a mais em comanda com cupom. Corrigido → comissão sobre o LÍQUIDO (decisão Eduardo). Via `getApptDiscountMap` (já existia, só 2 caixas usavam). Telas: remuneração (lista+detalhe), hub, vendas, análises, gasto/cliente, cards TopProfs/Services/Cliente/Trend, início, eu.
- **Fuso (λ.fuso-vercel-utc) COMPLETO:** clientes, hub (dateRange+hora), vendas, remuneração (janela mês BR), os 4 cards, e o **motor de data do fluxo-caixa** (colunas + limites de query + bucketing → BR juntos, senão pagamento cai na coluna errada). `date-br.ts` já existia.
- **Verificado AO VIVO no painel do Olímpio:** fluxo-caixa batendo ao centavo (pagamento das 21h no dia certo), sem crash. Líquido é no-op pra ele (0 cupons na base). Total mês R$1.020 bate com a fonte.
- 6 commits (`528571c`→`40c8cf2`, conta `ImpulsoDigital063`). Playbook no repo: **`PLAYBOOK-FINANCEIRO-FUSO-E-LIQUIDO.md`** (+ ponteiro no AGENTS.md).
- **ComandaPRO estudado:** NÃO tem esses 2 bugs (total já nasce = subtotal−desconto; relatório roda client-side = browser BR). Não se replica lá.

---

## O que é

SaaS multi-tenant que **NÃO é só agendamento** — é a **ferramenta operacional completa do dono de pequeno negócio de serviço** (barbearia, salão, nail, tranças, estética, clínica, personal). 8 dimensões: agendamento + gestão financeira (Lucro Real) + reativação (Cupom de Retorno) + análises com forecast + fidelização (4 fontes de pontos) + organização + marketing (QR branded) + lógica de nicho.

**Proposta:** "Não é só agenda. É a operação completa do seu negócio." R$67/mês Solo · R$97/mês Equipe · concorrente cobra R$200-300/mês.

**Dois fluxos de operação atendidos:** agenda-first (marca e atende) **E balcão/walk-in** (atende e registra depois, sem agendar online — caso Izanara/MOOD e Palace). Priorizar fluxo de balcão; auto-agendamento online é secundário.

---

## Stack

- Next.js 16 (App Router) · ⚠️ versão com breaking changes — ler `node_modules/next/dist/docs/` antes de codar
- Supabase: Auth (SSR cookie) · Postgres · RLS estrito · service-role no server
- Resend (email transacional) · Z-API (WhatsApp)
- **Asaas** (cobrança — PIX nativo + cartão). MP é legado/descontinuado.
- Vercel (deploy + cron) — plano Hobby (cron limitado; cuidado com fila travada em pushes em sequência)

**Repositório:** `C:/Users/Usuario/agendapro` · GitHub: `ImpulsoDigital063/AgendaPRO` (checar `gh auth switch --user ImpulsoDigital063` antes do push)
**Vercel project:** `agenda-pro` · **Produção:** agendapro.net.br
**Disciplina de deploy:** `npx tsc --noEmit` antes do push · migration entra no banco ANTES do push · read-after-write em todo write crítico (λ.prova-na-fonte).

---

## Mobile × Desktop (regra cravada)

Mesmo codebase, dois fronts. **Mobile** (agendapro.net.br) = dono opera no celular, clientes em produção (Olímpio etc.) — é O principal, verificar responsividade real. **Desktop** = negócios maiores. Ajuste de um lado NÃO pode alterar o outro — isolar via breakpoint Tailwind (`sm:`). Feature nova deve existir nos dois fronts (UX pode adaptar).

**LIGHT-ONLY** (tema dark removido 03/06, cravado). `AdminThemeProvider` é pass-through; layouts `initialTheme='light'` fixo. Não tratar dark como feature.

---

## Billing (Asaas · em produção, validado)

**Modalidades:** mensal/semestral/anual em PIX (cobrança manual recorrente) · cartão (Asaas Subscription auto-renova via webhook).

**Máquina de estados:**
`active` → (vence) `past_due` + `grace_ends_at` (3 dias) → (carência vence) bloqueio no gate → `pending_payment` (paywall).

- **Webhook Asaas** (`PAYMENT_OVERDUE`) é a trava real: seta `past_due` + `grace_ends_at = hoje+3`. `PAYMENT_CONFIRMED`/`RECEIVED` reativa (`active`, limpa carência).
- **Gate** (`admin/(protected)/layout.tsx`): bloqueia se `pending_payment` | `cancelled` | `refunded` | (`past_due` E `grace_ends_at` vencido). NÃO usa `public_blocked_at`.
- **Cron `billing-check`** (diário, `0 11 * * *`): D-3 cria cobrança PIX + email; D-2/D-1/D0/D+3 lembretes; **fallback** — se o webhook falhar, garante `past_due` + grace 3 dias (mesmo modelo do webhook). Passo 2: expira trial/cortesia não-permanente (`permanent_courtesy` isenta Palace legado).
- **Asaas é PRODUÇÃO** (cobrança real). Quirk: `pix_link_atual` é o link válido; `asaas_payment_id_atual` pode ficar defasado (cron atualiza só o link no D-3).
- **Signup público travado** (07/06, após bot criar contas) — conta nasce só via admin server-side; não reabrir "Allow new users to sign up".

---

## Migrations (em produção · base V1–V11, recentes relevantes)

| # | Descrição |
|---|---|
| V9 | Trigger + exclusion constraint anti-overbooking (`appointment_range` tstzrange) |
| V40a/b · V60 | Overlap via EXCLUDE gist + override manual |
| V49 / V52 | Taxas de maquininha (merchant_devices/fees) + colunas cartão em appointments |
| V63 / V66 | Estoque (stock_movements · trigger AFTER INSERT soma quantity) + baixa por sale_items |
| V77 | Trigger auto-cria comanda (invoice) aberta quando appointment entra |
| v84 | package_items aceita produto (combo serviço+produto) |
| v85 | `subscriptions.permanent_courtesy` (expiração trial/cortesia) |
| v86 | `signup_attempts` (rate-limit cadastro) |
| v87 | colunas de cartão em `sales` (taxa flui pro líquido na venda direta) |
| **v88** | `products.variant_group_id` (variantes de produto · Caminho A) |

---

## O que evoluiu desde maio (estado atual das frentes)

- **Balcão "Registrar venda"** — atende+vende numa comanda só (serviço + produto na mesma conta, via rotas canônicas /items + /pay). Registro é ponto no tempo (duração não estoura range). Opção "Manter comanda aberta" (verde) pra pagar depois.
- **Vender Produto** — venda avulsa: pagar na hora (pix/dinheiro/cartão) ou depois, cliente avulso, taxa de cartão grava e flui pro líquido (v87).
- **Comandas** — adicionar serviço E produto por dentro; faturar; cancelar reverte estoque + remove comissão + apaga pagamento; "Receber pagamento" fecha. Pelo Vendas, botão verde "Pagar comanda #N" abre a comanda completa.
- **Variantes de produto** (v88, Caminho A) — cor/tamanho/sabor com preço+estoque por variante; lista agrupa num card; criar/adicionar/editar variante; pickers de venda agrupam (produto→variante). Multi-eixo Shopify (Tamanho×Cor) descartado por ora. Detalhe em memória `project_agendapro_variantes_produto`.
- **Comissão de produto = opt-in** — produto sem regra (`commission_type` null) = ZERO comissão (é do estúdio, não cai na % do serviço). No balcão, produto NÃO fica atribuído à profissional. Só comissiona com percent/fixed explícito.
- **Recebido por data de pagamento** (`paid_at`, não `appointment_date`); "A receber" inclui produtos pendentes da comanda aberta.
- **Recepção tri-modal** (sidebar desktop + drawer/bottom-nav mobile) · área profissional read-only · papel supervisor.
- **Monitoramento**: cron monitor + bot Telegram (4x/dia) + auditoria financeira semanal.
- **Google review fix** — link de avaliação extrai a URL de valor sujo (dono cola nome+URL juntos) — `lib/google-review.ts`.

---

## 8 dimensões do produto (evergreen)

1. **Agendamento** — cliente agenda 24h sem conta; lembrete D-1/H-1; lista de espera; auto-complete.
2. **Gestão financeira** — KPIs (Recebido/A receber/Faturado/Ticket); métodos pix/dinheiro/cartão/cortesia/pontos; comissão por profissional sobre PAGOS; despesas (7 categorias); Lucro Real (só mês).
3. **Análises** — forecast, comparativo mês, dia/hora pico, cancelamento, novos×recorrentes, top serviços/profs, insights em texto.
4. **Reativação** — Cupom de Retorno (sumidos 40+ dias, wizard 3 etapas, 9 nichos × 3 templates).
5. **Fidelização** — 4 fontes de pontos (agendamento, indicação, pontualidade, review Google) + recompensas. Pontos NUNCA viram R$ nem entram em pagamento.
6. **Organização** — abas; profissional comissionado/contratado; limite por plano (Solo/Equipe); horários com pausa/atalhos.
7. **Marketing** — QR branded + 3 templates de impressão.
8. **Lógica de nicho** — sample names, templates, sugestões e presets por nicho.

---

## Princípios cravados

1. AgendaPRO é educacional, NÃO ERP de cobrança ("A receber", não cobra sozinho).
2. Lucro Real só em escala mensal.
3. Pensar em uso em massa.
4. Lógica de nicho em tudo · UX faz o dono se sentir inteligente.
5. Facilita, não cria trabalho (feature julgada por reduzir cliques).
6. Estudar como JÁ funciona antes de codar (zero invenção sem ok).
7. Segurança: HMAC/timingSafe em tokens, RLS restritivo, trigger anti-overbooking, rotas service-role.

---

## Clientes (estado real)

Lido do banco em **21/08/2026** (contagem exata por negócio — consulta única trunca em 1.000 linhas e distorce).

**Pagando, assinatura em dia — 9 negócios, R$693/mês:**

| Cliente | Plano | Agend. 30d | Clientes | Pago até |
|---|---|---|---|---|
| **Olímpio Barbearia** | Solo R$67 | **141** | 188 | 20/09 |
| **Rosy Borges Beauty Studio** | Solo R$67 | 40 | 61 | 21/09 |
| **Gessica Batista Nails** | Solo R$67 | 33 | 21 | 28/08 |
| **Wanessa Silva Estética** | Solo R$67 | 26 | 153 | 31/08 |
| **Viva Cacheada** | Solo R$67 | 21 | 53 | 16/09 |
| **DN Diogo Nogueira** | Solo R$67 | 13 | 23 | 06/09 |
| **CAF - Centro Avançado de Fisioterapia** | Equipe R$97 | 12 | 11 | 22/08 → **cortesia até 22/09** |
| **Studio Isis Melo** | Equipe R$97 | 2 | 2 | 27/08 |
| **Studio MOOD (Izanara)** | Equipe R$97 | **0** | 16 | 20/09 |

**CAF:** pagou **R$680 de setup em 2x, quitado** — correu por fora do sistema, então `setup_cents` está 0 no banco. Ganhou **1 mês de bônus**: `grace_ends_at = 23/09 03:00 UTC`, com `pago_ate` intacto em 22/08. Bloqueia sozinho no dia 23/09.

**🔴 Em atraso — 8, sendo um preocupante:**

| Cliente | Situação |
|---|---|
| **Realli Studio Nails** | **R$97, vencido desde 05/08**, carência estendida até 15/08 e expirada. **37 agendamentos em 30 dias** — usa o sistema. Só **1 agendamento futuro**, ritmo caiu junto com o bloqueio. Entrou como cortesia e **nunca pagou pelo Asaas**. É o cliente a recuperar. |
| K'F BEAUTY · Studio Amanda Freitas · Serenity · Lopes · Guia Lopes · Espaço Essence | past_due, uso baixo ou zero |
| Camila Delfino | cancelled |

**Demos internos (não são receita) — 4:** Studio Larissa Nails (39 agendamentos/30d, usa bastante), Studio Bella Lash, Serenity (CÓPIA TESTE) e **Studio Marcela Hair**. ⚠️ O Marcela está **sem** `permanent_courtesy` **de propósito** desde 21/08 — foi tirado pra testar o canal de WhatsApp numa conta comum, e Eduardo decidiu manter assim. **Por isso ele aparece como pagante de R$97 em qualquer listagem; não é receita.**

**Nunca converteram — 7** em `pending_payment`, todos com zero movimento: Cibely, Samuel, Vitoria, Anaelisa, Camila Prazeres, Espaço da Cura, Fernanda Souza.

---

## Números

Lido do banco em **21/08/2026**.

| Métrica | Valor |
|---|---|
| Negócios cadastrados | 28 |
| **Pagantes com assinatura em dia** | **9** |
| **MRR real** | **R$ 693/mês** (6×67 + 3×97) |
| Em atraso (past_due/cancelled) | 8 — **R$97 recuperáveis no Realli** |
| Demos internos | 4 |
| Nunca converteram | 7 |
| Negócios com movimento em 30d | 16 |
| **Agendamentos ativos / 30 dias** | **387** (361 com telefone válido) |
| Clientes cadastrados na base | 721 |
| Clientes com aniversário preenchido | 300 |
| Migrations | base + até **v127** |
| Preço Solo / Equipe | R$67 / R$97 mês |

⚠️ **A versão anterior deste arquivo dizia 7 pagantes e R$499** (29/07). O MRR quase dobrou em 3 semanas, sem prospecção. E a memória de trabalho dizia "5 pagantes, R$365" — mais desatualizada ainda. **O registro não vem acompanhando a execução, e decisão de dinheiro estava dependendo de lembrança.**

**Custo do WhatsApp, se ligado hoje na Cloud API oficial:** ~R$24–30/mês, 3,5% da receita — absorvido, sem cobrar do cliente.

---


## Pendências / próximos

### 🔴 Dinheiro (21/08 — vale mais que qualquer feature na fila)
- [ ] **Realli Studio Nails — R$97 vencidos desde 05/08.** Usa o sistema (37 agendamentos/30d) mas só tem 1 agendamento futuro. Carência já foi estendida uma vez, até 15/08, e expirou. Entrou como cortesia e **nunca pagou pelo Asaas**. Chamar antes de virar churn silencioso
- [ ] **Vencimentos dos próximos 10 dias:** CAF 22/08 (coberto pela cortesia até 22/09) · Isis 27/08 · Gessica 28/08 · Wanessa 31/08 — **R$231 em renovação**
- [ ] **Studio MOOD paga R$97 e tem ZERO agendamento em 30 dias.** Segue com a página pública sem horário configurado desde 22/05. É o perfil clássico de quem cancela na próxima cobrança (20/09). Virar conversa, não fix silencioso

### 🔴 Canal de WhatsApp (o motor está pronto; falta entregar)
- [ ] **Decidir o canal.** Cloud API oficial direto da Meta é o caminho que fecha: ~R$30/mês para o volume atual, sem mensalidade, e template entrega para quem nunca conversou. Alternativas: aquecer o chip atual (grátis, sem garantia — a literatura séria diz que aquecimento reduz risco de ban, não cura não-entrega) ou Evolution self-host com número do próprio salão (custo fixo, mas o risco de ban passa a ser do número do cliente)
- [ ] **Testar a criação da WABA com o CNPJ MEI — custa R$0** e responde as duas dúvidas que travam o caminho oficial: se a conta abre em BRL ou USD, e se o CCMEI passa na verificação. A Meta nomeia "contrato social" e "alvará", que MEI não tem; não existe página oficial citando CCMEI
- [ ] **Consentimento de verdade.** `customers.marketing_consent` está `true` em 721/721 — é default, não opt-in. Precisa de campo com data e origem (agendou online / assinou ficha no balcão), e a frase precisa **nomear o AgendaPRO** como remetente. Serve aos dois canais, então dá pra fazer antes da decisão
- [ ] **Status de entrega no `message_log`.** Hoje grava "enviado" quando o provedor aceita — foi o que custou o dia 21/08. Na Cloud API existe webhook `delivered`/`read`/`failed`; na W-API é preciso confirmar com o suporte
- [ ] **`instance/health` antes de enviar** (enquanto for W-API): se vier `TIMELOCKED`, segurar a fila e avisar, em vez de gravar "enviado" em mensagem que não sai
- [ ] **Devolver a cortesia do Studio Marcela** quando os testes acabarem — `update subscriptions set permanent_courtesy = true where business_id = 'cd3c7f5a-e657-4ddb-96c7-0a4ff45b63eb'`
- [ ] **Tirar a allowlist de teste** das envs da Vercel: `MENSAGENS_TESTE_BUSINESS_ID` e `MENSAGENS_TESTE_TELEFONE`
- [ ] **Botões da W-API:** funcionam com `send-button-actions` + `type: REPLAY`. Se ficar nesse canal, o webhook já reconhece o clique pelo texto do rótulo

### Fila anterior (30/07, ainda aberta)

- [x] ~~**Varredura de fuso no sistema inteiro**~~ **FEITA em 30/07** (commit `8c995f1`). Corrigidos: `getFocoDoDia` (o pior — todo cliente na home, toda noite), `financeiro/despesas`, `financeiro/cancelados`, `financeiro/analises`, `clientes/reativar`, `clientes/campanhas`, `api/admin/expenses`, `api/admin/coupons/campaign`, `asaas.getNextDueDate` (cobrança vencia 1 dia depois do que o e-mail dizia) e `coupon-templates.formatValidity` (data de validade errada na mensagem que vai PRA CLIENTE). Novo helper **`monthBoundsBR(ym)`** em `date-br.ts` mata o padrão `new Date(y, m, 0).toISOString()` que estava repetido em cada tela financeira — testado em fevereiro bissexto e virada de ano. **Verificados e deixados como estão** (seguros por construção): admin/caixa, recepcao/caixa, recepcao/page (ancoram em `todayBR()` + `T12:00:00`), financeiro/page + fluxo-caixa + remuneracoes (sweep de 04/07), os 5 crons (`nowBRT`), webhook Asaas (instantes, não dia) e todos os componentes client (rodam no navegador, que já é BR)
- [ ] **`api/admin/packages/sell` calcula `expires_at` com `new Date()` cru** — único caso de fuso deixado de fora na varredura de 30/07. Pacote é gated por `PACOTE_ENABLED`, uso baixo, e o desvio de 1 dia favorece a cliente. Fechar quando mexer em pacote
- [ ] **Perguntar pra Renata (Realli):** os 5 atendimentos confirmados de 29/07 na coluna dela (Kelly Winkler, Leila Martins, Grazi Sturion, Isabela Possato, Bruna Galafassi · todos "Mão em gel") foram ela ou foram as meninas? Se foram as meninas, estão na profissional errada → contamina comissão e histórico, e agora ficaram invisíveis pra equipe (coluna da dona sai das telas delas). Reatribuir no banco com prova antes/depois. Perguntar também se a % de comissão de cada uma está preenchida — sem isso o Financeiro delas mostra R$ 0,00 mesmo atendendo
- [ ] **Fila de melhorias da área da profissional** (levantadas 30/07, por ordem de dor): **1)** histórico da cliente no drawer — hoje ela vê ficha e foto, mas não vê quando a cliente veio, o que fez e quanto pagou (Eduardo: "não é urgente") · **2)** aviso de agendamento novo (push já existe no projeto, falta ligar pra profissional quando marcarem na agenda dela) · **3)** lista de espera — tabela `waitlist` já existe e a página pública alimenta, ninguém consome
- [ ] **Limpar a conta de teste `Teste Impulso`** da base da Realli quando Eduardo terminar os testes — script pronto em `scripts/_teste-realli-limpar.mjs` (apaga na ordem: comandas → agendamentos → clientes com "teste" no nome → profissional → login, com leitura depois provando que não sobrou nada)
- [ ] **Modal por baixo da topbar no mobile — `admin/layout.tsx:216` e `recepcao/layout.tsx:90`** (o da profissional já foi, commit `605ba20`). Causa NÃO é z-index baixo: o wrapper do conteúdo é `relative z-10`, e elemento posicionado com z-index cria **contexto de empilhamento** — o `z-[300]` do AgendarModal passa a valer só dentro daquela caixa, que inteira vale 10 e fica atrás da topbar (z-30). Fix = tirar o `z-10`, deixar `relative` sozinho (z-auto não cria contexto; conteúdo segue acima do decor `z-0` por ordem de DOM). **A dona e a recepção convivem com isso hoje no celular.** Subir o z do modal nunca resolveria
- [ ] **Studio MOOD e Lopes Studio de Beleza estão com ZERO horário em todos os profissionais** → página pública não oferece slot nenhum (silencioso). O MOOD paga R$97 desde maio e a página está morta desde 22/05 — a Izanara opera balcão, então talvez nunca tenha sentido, mas cliente que tentou agendar online não conseguiu. Virar conversa de atendimento ("quer que eu configure?"), não fix silencioso. A v99 resolve só cadastro NOVO; negócio existente precisa de backfill manual
- [ ] **Magic link queimado por robô de prévia** (WhatsApp, scanner de e-mail) — `/auth/confirm` consome o token no GET. Virar página com botão que confirma no POST. Testado e confirmado em 29/07, ainda aberto
- [ ] **Upgrade Solo→Equipe self-service** — hoje 100% manual, todo cliente que cresce cai no WhatsApp do Eduardo (caso Realli 28/07)
- [ ] **Ajuste de duração do atendimento no mobile** — existe no desktop, falta no mobile. Pega serviço de duração variável (papel de parede, tattoo, mecha)
- [ ] **Avisar quando serviço não cabe no horário** — serviço mais longo que o bloco de trabalho zera a agenda pública em silêncio
- [ ] Converter os 2 trials de 28/07: Diogo (04/08) e Realli (05/08)
- [ ] Lopes Studio de Beleza em carência desde 28/07 — cobrar antes do bloqueio
- [ ] Studio MOOD: rodar a régua premium nas telas internas da recepção se ativar login da recepcionista (Marlia, hoje sem login)
- [ ] CAPTCHA Turnstile no cadastro (confirmar chave não-sensitive live)
- [ ] 4 fixes de performance documentados pra quando chegar ~80 clientes ativos
- [ ] Multi-eixo de variantes (Tamanho×Cor) só se cliente pedir

**Próxima atualização:** quando entrar novo cliente pagante, mudança grande de billing, ou nova leva de features. Substituir (não duplicar).

---

**Ver também:**
- Hubs: [[MEGA-CLAUDE]] · [[HUB-AGENDAPRO]] · [[EDUARDO-BARROS]]
- Status correlatos: [[STATUS-IMPULSO]] · [[STATUS-STUDIO-MOOD]] · [[STATUS-PALACE]]
- Conhecimento: [[AGENDAPRO-ROADMAP]] · [[AGENDAPRO-ANALISE-COMPETITIVA]] · [[AGENDAPRO-SEGMENTOS]]
