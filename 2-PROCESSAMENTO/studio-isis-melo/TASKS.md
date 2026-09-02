# Studio Isis Melo · tasks

Pago em 25/08 (setup R$640, cartão 2×). Bônus de 30 dias aplicado — `pago_ate` 26/09/2026.
Detalhe técnico de cada item em `PLANO-EXECUCAO.md`. Tenant `192ff88d-d435-4897-92d4-a19a007d4804`.

**Regra de ouro:** `git pull` antes de cada bloco — a frente do CAF trabalha no mesmo repo. Todo teste roda em **dois tenants**: Isis (muda) e controle (Olímpio ou demo Studio Marcela — tem que ficar idêntico).

---

## T0 · ISOLAMENTO — migration `v131_isis_isolamento.sql` ✅ FEITO 25/08

> Foi **v131**, não v129: o CAF tomou v129 e v130 no mesmo dia. Aplicada via Management API com conferência do project ref (aazvqjhebfcoruyipoaw) antes de rodar. HTTP 201.

- [x] **T0.1** escrever a migration com as 6 chaves em `businesses`

| coluna | default | atenção |
|---|---|---|
| `prof_edita_horario` | **`true`** | ⚠️ INVERTIDA — hoje toda profissional edita (RLS v19). Default `false` tiraria de 27 tenants |
| `prof_cancela_agendamento` | **`true`** | ⚠️ INVERTIDA — hoje ela cancela pela `api/profissional/action` |
| `prof_adiciona_servico` | `false` | capacidade nova |
| `sinal_por_agendamento` | `false` | capacidade nova |
| `comissao_por_servico` | `false` | capacidade nova |
| `cartao_presente_enabled` | `false` | capacidade nova |

- [x] **T0.2** colunas de dados na mesma migration (nascem nulas, ninguém sente)
  - `services.commission_percent numeric NULL`
  - `appointments.sinal_cobrar boolean NULL`
- [x] **T0.3** aplicar no banco (project `aazvqjhebfcoruyipoaw` — conferir o ref antes, [[feedback_migracao_autorizada_mas_mcp_aponta_appdelyvery]])
- [x] **T0.4** ligar as chaves só no tenant dela: `prof_edita_horario=false`, `prof_cancela_agendamento=false`, os outros 4 `true`
- [x] **T0.5** **prova:** ler `businesses` da Isis e de um tenant de controle lado a lado; o controle tem que sair com os defaults intactos

---

## T1 · CONFIGURAÇÃO E LIMPEZA (sem código, sai no mesmo dia)

- [x] **T1.1** `professionals_can_book_self = false` e `professionals_can_book_others = false` no tenant → resolve metade do item 2, zero código
- [x] **T1.2** remover a conta de teste "Eduardo" (`4295c7c0`) — ⚠️ ela tem **1 atendimento concluído e pago** no nome dele; apagar o atendimento e a comanda junto, senão fica sujando o financeiro dela
- [x] **T1.3** recepção "Studio Isis Melo" (`c39d1d43`): tirar `role: owner` e `is_owner` → papel de recepção, sem poder de dona
- [x] **T1.4** cliente de teste "Maria teste" — perguntar a ela antes de apagar

---

## T2 · ITEM 1 — horário só Adm e recepção  ✅ CÓDIGO PRONTO (falta testar logado)

> **v133 aplicada 25/08** · chave `recep_edita_horario` (default `false`) + 3 policies de escrita pra recepção. Ligada no tenant dela; Olímpio segue `false`. Provado em `pg_policies`.
>
> **Telas:** `/recepcao/horarios` criada reusando `HorariosTab` (com `isAdmin`, então a recepção define o horário de todas as profissionais). Item entra no dock e na sidebar da recepção **só** com a chave ligada.

> **Migration `v132_isis_horario_gate.sql` aplicada 25/08** (via SQL Editor, 3 blocos em abas separadas — o buffer sujo do editor derrubou a primeira tentativa). Provado em `pg_policies`: as 3 policies de escrita da profissional têm o gate; as de leitura, a do dono e a da recepção ficaram intactas.
>
> **Código:** tela `/profissional/horarios` redireciona quando a chave está off, e a aba some do BottomNav, da TopBar e do atalho da home. `tsc --noEmit` limpo.
>
> 🔴 **ACHADO — a recepção nunca pôde editar horário.** `pg_policies` mostra só `recepcao ve horarios` (SELECT), e o painel `/recepcao` não tem tela de horários. Tirei da profissional, mas quem ficou podendo é só a dona. O escopo confirmado por ela diz "você **e a recepção**" — falta T2.4 e T2.5.

- [x] **T2.1** esconder `app/profissional/(protected)/horarios/page.tsx` quando `prof_edita_horario = false`
- [x] **T2.2** policy da **v19** (`working_hours`) passa a consultar a chave — sem isso a permissão continua viva no banco
- [ ] **T2.3** ⏸ teste (precisa de login de profissional/recepção — cai junto com a T8): profissional da Isis não grava nem por chamada direta; profissional do controle continua gravando
- [x] **T2.4** policy de INSERT/UPDATE/DELETE de `working_hours` pra recepção do mesmo negócio (migration nova)
- [x] **T2.5** tela de horários no painel `/recepcao` (reusar `HorariosTab`, como `/profissional/horarios` faz)

---

## T3 · ITEM 2 — serviço extra sim, exclusão não  ✅ CÓDIGO PRONTO (falta testar logado)

> **Cancelamento:** `api/profissional/action` recusa `cancelled` com `prof_cancela_agendamento = false` (403), e os dois botões "Cancelar" somem do card. Servidor manda; tela escondida é sugestão.
>
> **Serviço extra — achado que exigiu desenho novo:** a rota `invoices/[id]/items` já aceitava profissional, mas só via `professionals_can_book_others` — a MESMA chave que eu desliguei pra ela não marcar agendamento. Uma chave governava duas coisas diferentes. Agora `resolveBusinessIdOperacao` recebe `permitirAdicionaServico`, e só as rotas de item de comanda pedem isso. Resultado: a profissional da Isis acrescenta serviço sem poder marcar pra ninguém.
>
> **Remover continua barrado sozinho:** o DELETE vive em `items/[itemId]/route.ts`, que chama a função SEM o parâmetro novo (default false). Não precisou de guarda extra.
>
> **UI:** botão "+ Acrescentar serviço" no card do atendimento confirmado (só com a chave), reusando o `AdicionarServicoComandaModal` do admin. O invoice_id não vem na listagem, então é resolvido no clique pelo `invoice_item_id` do atendimento; comanda já fechada avisa em vez de abrir.

- [x] **T3.1** `api/profissional/action` recusa `cancelled` quando `prof_cancela_agendamento = false`
- [x] **T3.2** expor "adicionar serviço" na área profissional reusando `POST /api/admin/invoices/{id}/items` (auth de profissional + gate `prof_adiciona_servico`)
- [x] **T3.3** garantir que profissional **nunca** remove item da comanda
- [ ] **T3.4** ⏸ teste (precisa de login de profissional — cai junto com a T8)

---

## T4 · ITEM 5 — sinal decidido no ato  ⚠️ CÓDIGO PRONTO · NÃO TESTADO E2E

> **Achado que virou trabalho a mais:** o form do mobile (`/admin/marcar`) e da recepção **não tinha sinal nenhum** — todo agendamento nascia `confirmed`, sem `sinal_valor`. Sinal só existia no desktop e no link público. Quem marcasse pelo celular nunca cobrava sinal e achava que o recurso não funcionava.
>
> Eduardo cravou em 26/08: **tudo que tem no desktop tem que ter no mobile**. Então o sinal inteiro foi portado pro `MarcarAgendamentoForm` (config, isenção da cliente v118, cálculo, status `pending`), mais a pergunta.
>
> 🔴 **IMPACTO FORA DA ISIS — comunicar antes/depois do deploy.** 3 pagantes usam sinal e vão passar a cobrar também pelo celular e pela recepção, onde hoje não cobram: **Viva Cacheada (30%), Wanessa Silva Estética (30%), Gessica Batista Nails (20%)**. O agendamento delas passa a nascer `pending` com sinal a receber. É correção de buraco, mas muda o dia a dia — não pode chegar de surpresa.
>
> ⏸ **Falta rodar o app e testar as duas telas** antes de qualquer anúncio ([[feedback_nao_anunciar_update_antes_de_testar]]).

- [x] **T4.1** pergunta no fim do fluxo em `admin/desktop/atendimentos/AgendarModal.tsx`
- [x] **T4.2** pergunta em `recepcao/MarcarAgendamentoForm.tsx` (serve mobile `/admin/marcar` **e** recepção)
- [x] **T4.3** gravar em `appointments.sinal_cobrar` e o motor do sinal respeitar a decisão
- [ ] **T4.4** teste: com a chave off, nada muda em lugar nenhum

---

## T5 · ITEM 3 — bônus na remuneração  ✅ CÓDIGO PRONTO (falta ver na tela)

> **v135 aplicada 27/08** — `commission_payments.bonus_amount` (default 0, CHECK >= 0) + `bonus_reason`. Aditivo: negócio que nunca lançar bônus não vê diferença.
>
> Rota `api/admin/commission-payments` aceita **bônus avulso** (`appointmentIds: []` → `paid_amount 0`), mantendo o caminho de comissão intacto. `DarBonusModal` portado do Palace, botão "Bônus" no menu da tabela de remunerações.
>
> **Exibição:** tabela de remunerações ("inclui bônus R$X" abaixo do pago) e histórico de pagamentos (com o motivo). ⚠️ O Palace mostra também no fluxo de caixa — **aqui não**, porque o fluxo de caixa do AgendaPRO não conta comissão nenhuma; mostrar só o bônus deixaria o número inconsistente.
>
> **Prova no banco:** bônus avulso gravou `paid 0 / bonus 50 / motivo` e o CHECK recusou valor negativo (HTTP 400).
>
> ⏸ Falta abrir a tela e lançar um bônus de verdade pelo modal.

- [x] **T5.1** migration `v130_bonus_remuneracao.sql`: `commission_payments.bonus_amount numeric NOT NULL DEFAULT 0` + `bonus_reason text NULL`
- [x] **T5.2** `api/admin/commission-payments` aceita bônus avulso (`appointmentIds: []` → `paid_amount = 0`)
- [x] **T5.3** portar `DarBonusModal.tsx` + botão na tela de remunerações
- [x] **T5.4** ⚠️ exibir nos **6 pontos** que o Palace exibe — remunerações, histórico, financeiro, **fluxo de caixa** e os 2 modais. Bônus é saída de dinheiro: faltar num lugar = número divergente
- [ ] **T5.5** teste: negócio sem bônus lançado segue idêntico

---

## T6 · ITEM 6 — comissão por serviço  ✅ NO AR (falta regressão visual)

> **v134 aplicada 25/08.** Decisão que define o resto: congelo a **PORCENTAGEM** (`appointments.commission_percent`), não o valor. O CAF congela R$ e por isso lá o desconto não abate — aqui isso mataria o item 4 dela (comissão sobre valor com desconto). Assim os dois convivem: base líquida × porcentagem do serviço.
>
> **Precedência no trigger:** `comissao_valor_fixo` (CAF, R$) → `comissao_por_servico` (Isis, %) → porcentagem da pessoa (os outros 26).
>
> **Telas ajustadas:** lista de remunerações, detalhe do profissional, `api/admin/commission-payments`, painel financeiro da profissional e o cadastro de serviço (campo "Comissão (%)"). Hub financeiro e histórico não calculam comissão — não precisaram mexer.
>
> **Prova comportamental (teste nos 2 tenants, 25/08):**
> ```
> Isis     · serviço "Manicure e pedicure" (50%) · profissional em 70%
>          → atendimento gravou commission_percent = 50   ✔
> Marcela  · serviço sem % · profissional em 40%
>          → atendimento gravou commission_percent = null ✔ (cai na % da pessoa)
> ```
>
> **Configuração aplicada:** 70% em todas as profissionais (Isis estava em 0%, Josiane em 25%, Tassiane em 30% — nenhuma batia com a regra real) e 50% no serviço de manicure e pedicure.

- [x] **T6.1** campos no `ServicosTab` pra `commission_percent` (⚠️ mesma tela que o CAF mexeu — pull antes)
- [x] **T6.2** segundo caminho no trigger `snapshot_commission_amount` (v127): se `comissao_por_servico`, grava `total_price × commission_percent / 100`
- [x] **T6.3** precedência explícita: `comissao_valor_fixo` (CAF) → `comissao_por_servico` (Isis) → `professionals.commission_percentage` (todo mundo)
- [x] **T6.4** configurar: **70%** em todas as profissionais (padrão da casa) e `commission_percent = 50` **só** em manicure e pedicure
- [x] **T6.5** corrigir Tassiane: 30% → 70%
- [ ] **T6.6** ⏸ **regressão visual** (precisa do app rodando e login das meninas — cai junto com a T8) nos dois tenants: Remunerações, detalhe do cálculo, histórico, painel da profissional, `api/admin/commission-payments`

---

## T7 · CARTÃO PRESENTE  ✅ ESTRUTURA PRONTA (falta logo dela + teste)

> **v137 aplicada 27/08** — 3 tabelas (`gift_cards`, `gift_card_services`, `gift_card_sessions`), RLS igual à de pacotes, e `invoice_items.item_type` passou a aceitar `gift_card`. DDL veio do arquivo v104 do Palace, não precisou tocar no banco dele.
>
> **Portados:** rotas `issue`, `redeem`, `schedule` (trocando `operator-business` pelo `api-business-access` daqui) e as telas `CartaoPresenteView` + `CartaoPresenteVisual` + `/admin/cartao-presente`. Dependência nova: `html-to-image` (o cartão é exportado como imagem).
>
> 🔑 **Decisão que evita dívida:** o cartão do Palace é pintado na marca DELE — logo em `/brand/palace`, cores teal/dourado fixas no código e até o rótulo "Nail Spa". Portei em versão **genérica**: logo e cores saem do próprio negócio, com fallback neutro pra quem não configurou. Cliente novo ganha o cartão dele sem código novo.
>
> **Menu:** entra no desktop E no mobile, só com `cartao_presente_enabled` (ligada só na Isis).
>
> **Financeiro auditado (27/08):**
> - ✅ **Receita não duplica.** Venda entra na comanda como `invoice_item` tipo `gift_card`; o resgate cria atendimento `total_price = 0` e só marca a sessão. A cliente paga uma vez, o salão conta uma vez.
> - 🔴 **Furo achado e corrigido — comissão zerada no resgate.** Como o atendimento sai R$0, a profissional atenderia de graça. Criada `getGiftCardSessionCommission` (irmã da de pacote): modo serviços = valor pago ÷ sessões; modo valor = o que foi abatido. Entra na lista de remunerações, no detalhe do profissional e no total do pagamento.
> - 🔴 **Furo irmão nos PACOTES, que já existia:** `api/admin/commission-payments` calculava `total_amount` só dos atendimentos, ignorando resgate de pacote. A tela mostrava um valor e o pagamento gravava outro, menor — e o histórico marcava "parcial" à toa. Corrigido junto.
>
> ⏸ Falta a logo dela (pedida em 27/08) e o teste ponta a ponta.

- [x] **T7.1** levantar o DDL no banco do **Palace** (`gift_cards`, `gift_card_services`) — contas Supabase separadas, migrations v104/v106/v107
- [x] **T7.2** migration `v131_cartao_presente.sql` no AgendaPRO, atrás de `cartao_presente_enabled`
- [x] **T7.3** portar rotas `gift-cards/issue · redeem · schedule`
- [x] **T7.4** portar `CartaoPresenteView` + `CartaoPresenteVisual` + rota `/admin/cartao-presente`
- [x] **T7.5** ✅ receita conta **na venda** (via `invoice_item_id`); o resgate **não pode** entrar de novo no caixa, senão fatura dobrado
- [ ] **T7.6** teste ponta a ponta: vende → resgata → confere caixa

---

## T8 · IMPLANTAÇÃO ASSISTIDA (depende dos dados dela)

> ⚠️ **A configuração de comissão feita em 25/08 é PROVISÓRIA** — vale a regra geral que ela confirmou por áudio (70% em todas, 50% em manicure e pedicure). Quando a lista dela chegar, refazer com os números reais.
>
> 🔴 **Conferir ao receber os dados:** se aparecer percentual diferente **por pessoa dentro do mesmo serviço** (ex: podologia 70% pra Tassiane e 60% pra outra), o desenho atual NÃO cobre — hoje o serviço sobrepõe todas por igual. Isso exigiria tabela de exceções (profissional × serviço), que é trabalho novo e não está na lista confirmada. Avisar o Eduardo com o tamanho ANTES de implementar.

- [x] **T8.1** criar acessos das profissionais via `api/admin/invite-professional` (senha temporária + troca no 1º acesso)
- [x] **T8.2** criar acesso da recepção (mesma rota, `is_receptionist`)
- [x] **T8.3** cadastrar todos os serviços com preço, duração e `commission_percent` onde for exceção
- [ ] **T8.4** ⏸ capa, endereço e Instagram — **fora de pauta**: elas não vão usar link público agora (Eduardo, 29/08). Logo já subiu.
- [ ] **T8.5** ⏸ confirmar horários (24 faixas seg–sáb já cadastradas) e sinal (50% · 24h)

---

## Auditoria de 29/08 · estado do tenant

**Pronto:** plano Equipe até 26/09 · marca aplicada (logo + vinho/dourado) · 5 profissionais com login e papéis definidos · 38 serviços com preço, duração e comissão · 7 adicionais ocultos do link público · zero dados de teste (uma comanda órfã de R$60 foi encontrada e removida).

**Comissão final confirmada por ela:** só manicure e pedicure a 50% (mais cutilagem e francesinha, que são do mesmo grupo). **Todo o resto a 70%** — inclusive unha em gel, que usa material do studio. A regra "material do studio = 50%" era coincidência da manicure, não regra.

**Papéis:** Isis (dona) e Tassi veem a grade de todas e marcam · Josi opera o balcão · Madu e Fernanda só o financeiro delas · ninguém cancela, além de Isis e Josi.

### 🔴 Pendente pra amanhã (30/08)
- **Sinal está DESLIGADO** (`sinal_enabled = false`) e **não há chave PIX cadastrada**. Ela pagou pelo item 5 e ele não funciona sem os dois. PIX primeiro, sinal depois. A chave precisa vir dela — se for celular, com +55.

### 🟡 Guardado pra quando abrirem o link público
- capa, endereço, Instagram e fotos das profissionais (só a Josi tem)
- horários: todas em 08:30–18:00 seg–sáb, que é o padrão do sistema e não o horário real de cada uma. ⚠️ O alisamento leva 4h: cabe 2x por dia, nenhuma começando depois das 14h.

## Lembretes de calendário

- **~24/09** — avisar a Isis 2 dias antes do fim do bônus, pra conversão não virar bloqueio surpresa

---

## Auditoria de 31/08 · testada NA TELA, logada como a Josi

Primeira rodada feita pelo caminho da cliente: login real da Josi (recepção que
também atende), sistema rodando local contra o banco de produção, e leitura no
banco depois de cada passo. Dados de teste criados e removidos — tenant zerado.

### Passou

| O quê | Prova |
|---|---|
| Criar agendamento pela grade | Manicure e Pedicure R$60 com Fernanda · comissão 50% congelada no nascimento · comanda aberta sozinha |
| Serviço extra na comanda | Francesinha 3 unhas = R$15 (linha, não unitário) · 50% |
| Extra de OUTRA profissional na mesma comanda | Onicomicose 3 unhas = R$225 com a Tassi · 70% · sem contaminar a da Fernanda |
| Desconto geral | R$300 → R$270 |
| Pagamento dividido | Pix R$170 + dinheiro R$100 · duas linhas em `invoice_payments` · comanda fechada |
| Cancelamento | status `cancelled` E a comanda auto-gerada foi junto · sem comanda órfã · sai da grade |
| **Comissão líquida com rateio** | desconto de R$30 rateado por linha: Fernanda R$33,75 · Tassi R$141,75 · bate na tela Remunerações da Isis. **Itens 4 e 6 do setup provados.** |
| Menu único (fix de 31/08) | "Meus ganhos" e "Minha conta" mantêm o menu do balcão |
| Meus atendimentos | só a coluna dela |

### 🔴 Bug 1 · Caixa joga pagamento dividido inteiro num método só

Tela do caixa dela mostrou **PIX R$270 · Dinheiro R$0** quando entraram 170 + 100.

Camada: **não é o write.** `api/admin/invoices/[id]/pay/route.ts:178` propaga de
propósito o método do MAIOR pagamento e o comentário diz que o breakdown fica em
`invoice_payments`. A falha é a LEITURA: `recepcao/caixa/page.tsx:57` e
`admin/caixa/page.tsx:63` agregam por `appointments.payment_method`.

Já foi resolvido antes em outro lugar: `financeiro/fluxo-caixa/page.tsx:15` tem o
comentário *"Antes a query usava só appointments.payment_method, que perdia o
cartão em split"* e lê `invoice_payments`. As duas telas de Caixa ficaram de fora.

Consequência: a "Conferência por método" do fechamento nunca fecha em dia com
pagamento dividido. **Afeta todos os negócios, não só a Isis.**

### 🔴 Bug 2 · KPI "Recebido" da grade mostra bruto

Mostrou R$300 com R$270 recebidos. `GradeTimeline.tsx:204-206` soma `total_price`
cru, sem `getApptDiscountMap`. O caixa aplica, a grade não — e a grade é a
primeira tela que ela abre. É o que o PLAYBOOK-FINANCEIRO já avisa. Afeta /admin
e /recepcao de todos.

### 🟡 Menores

- **Extra nasce sem profissional** — o select "Profissional (comissão)" vem em
  branco. Se ela não escolher, o extra não comissiona ninguém, calado. Devia já
  vir com a profissional do atendimento.
- **Produtos aparece pra quem não vende** — `vendas_balcao_enabled = false`. O
  celular esconde, o desktop não (`RecepcaoDesktopSidebar` tem Produtos fixo) e o
  botão "+ Produto" da comanda não é gateado.
- **Seletor ofereceu 19:00–21:30** com o salão fechando 18:00 — foi assim que
  marquei 19:00 e 20:00. O "horários não são os reais" virou risco concreto.
- **Nome do cliente avulso some** — digitei "ZZ TESTE JOSI"; a comanda diz "Sem
  cliente vinculado" e os extras aparecem como "Cliente" na grade.
- **Logo quebrada** no cabeçalho da sidebar em /profissional/conta.

### Não testado

- **Mobile** — o harness não estreita a janela do Chrome. É onde ela trabalha.
- Cartão presente ponta a ponta pela tela (a tela abre; a matemática do resgate
  já estava provada no banco em 29/08)
- Sinal (desligado, sem PIX)
- Telas da Tassi, Fernanda e Madu — as três nem trocaram a senha ainda

---

# PARADA DE 01/09/2026 · onde retomar

## ✅ Os 6 itens do setup pago estão ENTREGUES

O sinal era o último e fechou hoje. Configuração lida no banco:
`sinal_enabled true` · `sinal_percent 30` · `sinal_expira_minutos 240` (4h) ·
`sinal_cancel_horas 24` · `sinal_por_agendamento true` ·
`sinal_balcao_padrao false` · `pix_key isismelo.im@gmail.com` (ela disse que
depois muda) · `pix_receiver_name Studio Isis Melo` · `pix_city` vazio (cai no
fallback "BRASIL", cosmético).

## No ar (produção em v93, conferido pelo sw.js publicado)

- menu único da Josi (balcão em toda rota, + "Minha conta")
- caixa: pagamento dividido deixou de cair inteiro num método só
- KPI "Recebido" da grade passou a mostrar líquido
- Bloqueios trancado pela chave de horário (menu + página + rota)
- cabeçalho duplicado no celular do profissional
- card de boas-vindas adaptado a quem marca
- redefinir senha falha fechado (o bug da Wanessa)
- sinal: a pergunta parou de abrir com "Cobrar" marcado

## 🔴 Primeiro item ao retomar

**Extra da comanda nasce sem profissional.** O campo "Profissional (comissão)"
vem em branco no modal de serviço extra. Se a recepção não escolher, o serviço é
cobrado da cliente e **não comissiona ninguém**, calado. Deve vir preenchido com
quem está atendendo. É o que mais custa dinheiro delas.

## Está com a Isis / Eduardo

- **Pedido de comprovante no texto da cobrança do sinal.** O PIX cai na conta da
  Isis, então a Josi não tem como saber que entrou. `montarMensagemCobranca` em
  `src/lib/sinal-cobranca.ts` termina com "assim que cair eu confirmo aqui" e
  não pede comprovante. **NÃO editar sem falar com a outra instância** — ela está
  no disparo automático de WhatsApp, mesmo arquivo.
- Confirmar se **24h** é o prazo certo de cancelamento com crédito (veio do
  padrão do sistema, ninguém perguntou a ela).
- Confirmar se Madu e Fernanda deviam mesmo ficar **sem ver a própria agenda**.
- Mandar os acessos das 3 (senhas testadas e funcionando 01/09):
  Tassi `Tassi@2026` · Fernanda `Fernanda@2026` · Madu `Madu@2026`
  em www.agendapro.net.br/profissional/login
- Sem lista de clientes — ela vai levantar. Nada a importar por ora.

## Pontas menores, nenhuma bloqueia uso

Produtos aparece no desktop da recepção com venda desligada (e o botão
"+ Produto" da comanda também) · seletor de horário oferece até 21h30 com o
salão fechando 18h · texto do vazio no financeiro diz que atendimento só aparece
depois de feito, mas os agendados aparecem · rótulos cortados em 375px · nome de
cliente avulso some da comanda.

## Nunca testado ponta a ponta

Cartão presente pela tela (vender → resgatar → conferir caixa) · pacote · as
telas das 3 depois que criarem senha.

## Lembrete

**~24/09** avisar a Isis 2 dias antes do bônus de 30 dias acabar.
