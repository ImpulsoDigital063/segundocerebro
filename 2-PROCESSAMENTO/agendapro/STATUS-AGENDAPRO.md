# STATUS-AGENDAPRO.md

**Produto:** AgendaPRO — SaaS de agendamento + gestão financeira + fidelização + reativação
**Fase:** 🟢 **EM PRODUÇÃO COM CLIENTES PAGANTES** · Asaas validado · 14 negócios ativos, 7 pagando em PIX recorrente · cadastro orgânico entrando sozinho, sem prospecção
**Data:** 30/07/2026 (autonomia da equipe entregue pra Realli · antes 29/07)
**Responsável:** Eduardo Barros

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

**Commits:** `4833e6c` (v98a) · `fe81ba0` · `47df599` (v98b) · `41f46b6` (dona fora) · `2f9a48f` (grade = home) · `adaec85` (coluna dela primeiro) · `23cf95c` (topo enxuto) · `f0ad7fb` (um caminho de marcar) · `9c4bff2` (financeiro líquido+fuso) · `5689f49` (fuso da área).

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

Lido do banco em 29/07/2026.

**Pagando em PIX recorrente (Asaas):**

| Cliente | Plano | Vence |
|---|---|---|
| **Olímpio Barbearia** | Solo | 18/08 |
| **Studio MOOD (Izanara)** | Equipe | 13/08 |
| **Rosy Borges Beauty Studio** | Solo | 20/08 |
| **Barbearia Guia Lopes** | Solo | 07/08 |
| **K'F BEAUTY** | Solo | 07/08 |
| **Gessica Batista Nails Designer** | Solo | 28/08 |
| **Wanessa Silva Estética** | Solo | 31/08 |

**Em trial / cortesia ativa:** DN Diogo Nogueira (vence 04/08) · Realli Studio Nails (05/08, já no Equipe) · Studio Amanda Freitas (02/08) · Viva Cacheada (12/08, cortesia de divulgação).

**Atenção:** Lopes Studio de Beleza entrou em `past_due` (venceu 28/07, 3 dias de carência). Império Barbershop está em `mercado_pago`, legado, sem data de vencimento no banco — conferir se ainda paga.

| Outros | Situação |
|---|---|
| **Palace Nail Spa** | ⚠️ Virou produto PRÓPRIO independente (fork) — não é mais o AgendaPRO multi-tenant. Ver STATUS-PALACE. |
| 7 em `pending_payment` | trial vencido sem conversão (Cibely, Samuel, Vitoria, Anaelisa, Camila Prazeres, Espaço da Cura, Fernanda Souza) |
| 3 demos internos | Studio Marcela Hair, Studio Larissa Nails, Studio Bella Lash — cortesia até 2030, usados pra gravação e teste |

---

## Números

Lido do banco em 29/07/2026.

| Métrica | Valor |
|---|---|
| Negócios cadastrados | 26 |
| Ativos (`active` + `past_due`) | 14 |
| **Pagando em PIX recorrente (Asaas)** | **7** — 6 Solo + 1 Equipe |
| **MRR contratado em Asaas** | **R$ 499/mês** (6×67 + 1×97) |
| Em trial / cortesia | 4 |
| Trial vencido sem converter | 7 |
| Migrations | base + até **v88** |
| Preço Solo / Equipe | R$67 / R$97 mês (sem setup pro Clube Fundador 10) |
| Setup (cliente 11+) | R$197 |

O MRR acima **não inclui** Império Barbershop (Mercado Pago legado, sem data de vencimento no banco) nem o "Negócio Tutorial V8POG6" (conta de teste com Asaas até 2027).

---

## Pendências / próximos

- [ ] **Varredura de fuso no sistema inteiro** (o de 04/07 foi só telas da dona · escopo Realli já fechado em 30/07). Ordem por quem sente: **1)** `lib/admin-data.ts` `getFocoDoDia` — todo cliente vê na home, toda noite · **2)** `financeiro/despesas` e `financeiro/cancelados` (filtro "Hoje") · **3)** `financeiro/analises` (janela 30d desloca 1 dia) · **4)** `clientes/reativar` e `clientes/campanhas` (corte sumido 40/90d) · **5)** `api/admin/expenses` e `api/admin/coupons/campaign`. **Procurar as DUAS formas**: `toISOString()` e `getFullYear/getMonth/getDate` no servidor. Conferir com print antes de fechar — mexe em número que Olímpio e Izanara veem
- [ ] **Perguntar pra Renata (Realli):** os 5 atendimentos confirmados de 29/07 na coluna dela (Kelly Winkler, Leila Martins, Grazi Sturion, Isabela Possato, Bruna Galafassi · todos "Mão em gel") foram ela ou foram as meninas? Se foram as meninas, estão na profissional errada → contamina comissão e histórico, e agora ficaram invisíveis pra equipe (coluna da dona sai das telas delas). Reatribuir no banco com prova antes/depois. Perguntar também se a % de comissão de cada uma está preenchida — sem isso o Financeiro delas mostra R$ 0,00 mesmo atendendo
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
