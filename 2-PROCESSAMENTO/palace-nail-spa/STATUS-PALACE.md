# 🏆 STATUS PALACE NAIL SPA · Primeiro SaaS Premium Entregue

**Última atualização:** 16/06/2026 · Sessão grande de melhorias (Marko + Luana) — autorizações por profissional, bônus, auditoria fiscal InfinityPay, export/import de clientes, correções financeiras
**Cliente:** Palace Nail Spa Macaé — esmalteria + SPA dos pés alto padrão
**Donos:** Marko (PT-EU · administra · não atende) + Luana (esposa · sócia · administra)
**Localização:** Macaé · Rio de Janeiro
**Valor cobrado:** **R$ 2.997,00** (sistema dedicado entregue · à vista)
**Status:** ✅ ENTREGUE e em **operação diária real** · evoluindo por demanda do Marko/Luana
**Domínio:** **agendapalacemacae.com.br** (produção · Vercel)
**Repo:** `github.com/systempalacemacae/systempalace` (conta gh `systempalacemacae` · checar Active antes de push)

---

## 🎯 O QUE É ESTE MARCO

**Primeiro SaaS premium da Impulso Digital entregue como produto pronto.**

Não foi venda de assinatura AgendaPRO (R$ 67-97/mês). Foi **fork dedicado** — sistema próprio do Palace, com URL própria, banco próprio, regras de negócio próprias (cutoff financeiro · autorizações por profissional · agenda intacta · tri-modal · etc.).

**Esse é o caminho:** cliente premium que paga R$ 2-3k por fork customizado vs cliente padrão que assina mensal. Os dois mercados convivem. O Palace virou produto independente (o desktop do AgendaPRO virou o próprio Palace).

---

## 💰 FATURAMENTO

| Item | Valor |
|---|---|
| Setup + Sistema Dedicado | **R$ 2.997,00** (cobrado · à vista) |
| Recorrência futura | A definir · provavelmente manutenção mensal R$ 297-497 |
| Custos diretos Impulso | Vercel + Supabase (tier baixo) |
| Margem | ~100% (tempo investido é o custo real) |
| Billing no sistema | Palace tem `permanent_courtesy` (isento do gate de trial · cron v85 não expira) |

---

## 👥 PESSOAS E ACESSOS

### ADM (donos · tela `/admin`)
- **Marko** · dono · PT-EU · **entende inglês melhor** (Chrome auto-traduz · NÃO adicionar `notranslate`) · desconfiado · compara com concorrência (Salão99, Trinks, Booksy)
- **Luana** · esposa · SÓCIA · co-Adm · usa o login do Marko (`palacenailspamacae@gmail.com`) · NÃO é recepcionista

### RECEP (tela `/recepcao`)
- **Letícia** · recepcionista contratada (funcionária real) · `lelemathias00@icloud.com` · `is_receptionist=true` · opera muito no **celular** (mobile é o principal)

### SUPERVISOR (papel novo · v93)
- **Kelle** · `is_supervisor=true` · **deixou de ser gerente** · papel read-only: aba **Supervisão** vê a grade de todas (não edita gestão). Também atende (comissionada).

### PROFISSIONAIS (tela `/profissional` · veem só os próprios · read-only)
Equipe cresceu desde a entrega. Ativas (16/06): **Ariana, Bea, Bianca dos Santos Vicente, Kelle, Monique, Rosangela, Sofia, Susana** + **Freelance** (genérica). Lista viva e senhas: `scripts/list-palace-users.mjs`.

**Senha:** padrão inicial `<primeironome>2026` · **força troca no 1º login**. Signup público OFF (bot criou contas em 6s em 07/06) — conta nova nasce só via admin server-side.

---

## 🏗️ ARQUITETURA TÉCNICA

**Stack:** Next.js 16 + Turbopack + React 19 + Supabase (Postgres + Auth + Storage + RLS + Realtime + service role). Supabase project: **`systempalacemacae` (PRODUCTION)** — ⚠️ NÃO confundir com o AgendaPRO ao rodar migration.

### Migrations (v47 → v97) · principais desde a entrega
- v80-v89 · caixa conferência tripla · Supervisor V1→V4 (PIN→OTP→Realtime→payload+trigger) · sync invoice ao editar appointment
- **v90** supervisor unmark_payment · **v91** edit notes · **v92** cancel reason
- **v93** `is_supervisor` (papel Supervisor · Kelle) · **v94** remove plan limits
- **v95** `professionals.authorizations` JSONB (cria + backfill 19) · **v96** amplia p/ 31 ações
- **v97** `commission_payments.bonus_amount` + `bonus_reason` (bônus)

### Cutoff financeiro
- **Corte = 2026-06-01** (`PALACE_FINANCIAL_CUTOFF_DATE_STR`). Valores contam **desde 01/06**; histórico Salão99 visível mas não soma. `clampToCutoff` nas querys por `paid_at`. (Antes era 28/05 · movido pra 01/06.)
- **λ.agenda-intacta:** NUNCA deletar `appointments` (base de comissão).
- **Recebido por `paid_at`** (não `appointment_date`); A receber/Pendentes por data do atendimento.

---

## 🚀 FEATURES (estado atual)

**Base (entrega):** Início + KPIs · Grade timeline Salão99-style · Clientes 18 campos + drawer · Financeiro (Lucro + Despesas + Fluxo de Caixa drill) · Comandas auto via trigger · Remunerações · Recibo PDF (WhatsApp) · Estoque completo · Pacotes · Cupons · Fidelidade (pontos só após paid) · Caixa conferência tripla.

**Autorizações & papéis (16/06):**
- **Lista de autorizações por profissional** (estilo Salão99) no cadastro — 31 ações em 7 grupos, **reage ao cargo**; nasce com o que cada papel já fazia (ninguém perde acesso). `src/lib/authorizations.ts`.
- **"Gerente" → "Supervisor"** na tela (is_manager virou legado; is_supervisor agora marcável no cadastro).
- **Enforcement "lista por profissional manda"** — editar valor em comanda (desconto, preço de item, remover item), editar cliente, cancelar comanda paga: sem autorização → **dispara pedido** → Adm aprova → aplica automático (reusa supervisor V4, **sem PIN**). `src/lib/authorizations-server.ts`.
- **Papel Supervisor (Kelle):** aba Supervisão read-only.

**Financeiro & comissão (16/06):**
- Comissão entra no **Fluxo de Caixa** como despesa (calculada).
- **Editar/excluir pagamento de comissão** (controle total do adm).
- **Bônus** nos pagamentos: junto OU avulso ("Bônus" no menu). Sempre rotulado (Remunerações · Histórico · linha própria no Fluxo · Excel). Bônus é extra (não reduz pendente).
- **Anti-fraude:** edição/tentativa de serviço/valor por recep/supervisor fica **vermelho** na agenda E em Atividades (inclui tentativas bloqueadas).
- Fixes: detalhamento do fluxo mostrava R$0 (coluna `description`→`name`) · painel financeiro ignorava despesas (`paid_at` inexistente) · categoria "Salários" removida (Sofia → Outros).

**Clientes (16/06 · Luana):**
- **Exportar lista de clientes** (Excel/CSV) — só cadastro: Nome, Telefone, Email, Data de Nascimento (sem financeiro). Só `/admin`.
- **Importar lista de clientes** — já existia, **validado E2E**: CSV/Excel, auto-detecta colunas, dedup por telefone, preview antes de gravar. Troca de listas com parceria funciona nos 2 sentidos.

---

## 🧾 AUDITORIA FISCAL INFINITYPAY (16/06)
Marko mandou relatório da maquininha (CNPJ Luana). **Conclusão: o caixa fecha.** Maquininha 1–15/jun = R$ 13.840,58 (inclui crédito + débito + **Pix na maquininha** R$ 3.232) vs sistema R$ 13.860,80. Diferença ~1–4% = rótulo Pix↔Cartão + taxa (~2%) + corte de dia. **Sem dinheiro sumido.**
- Batimento exato venda-a-venda só com **NSU** (valor repete, horário não alinha, pix direto misturado). Pra 100% no futuro: capturar o NSU no pagamento → conciliação 1-clique. (Só se o Marko pedir.)

---

## 📅 LINHA DO TEMPO (condensada)

| Data | Marco |
|---|---|
| 17/05 | Fecham · import Salão99 (872 clientes · 1435 agendamentos) |
| 28/05 | Fresh start financeiro · cutoff · Supervisor PIN |
| **29/05** | **R$ 2.997 cobrado · sistema entregue** · Supervisor V1→V4 numa sessão |
| 30/05 | Re-import oficial Salão99 concluído |
| 01/06 | Cutoff movido pra 01/06 · 6 bugs da Luana (data US, tel intl, etc.) |
| 05-09/06 | Auditoria comissão (fonte única `commission_percentage`) · Recebido por paid_at · billing/Asaas produção |
| 07/06 | Signup público OFF (bot) |
| 09-14/06 | Landscape/SaaS premium mobile (container fix em 31 telas) · área profissional read-only · bug bloqueios |
| **16/06** | **Sessão grande:** autorizações por profissional (Fase 1+2) · Gerente→Supervisor · bônus · anti-fraude vermelho · comissão no fluxo · editar pag. comissão · fixes financeiros · export/import clientes · auditoria InfinityPay |

---

## 🎓 PADRÕES CRAVADOS (valem pra próximos forks premium)

1. **λ.fork-dedicado** · cliente premium ganha repo próprio · não inflar AgendaPRO universal com lógica de 1 cliente
2. **λ.cutoff-financeiro** · cliente migrando precisa de cutoff (conta de data X · histórico visível não soma)
3. **λ.agenda-intacta** · NUNCA deletar agendamentos (base de comissão)
4. **λ.tri-modal** · mobile<640 / tablet 640-1023 / desktop≥1024 · mobile é O principal (verificar de verdade)
5. **λ.lista-por-profissional-manda** · autorização por PESSOA tem prioridade sobre nível-salão; nasce com o que já faz; novas vêm travadas, dono destrava
6. **λ.enforcement-via-pedido** · ação sem autorização não bloqueia seco: dispara pedido → Adm aprova → aplica automático (sem PIN · Marko prefere aprovar)
7. **λ.bonus-sempre-rotulado** · bônus separado da comissão, visível como "Bônus" em todo o financeiro · é extra (não mexe no pendente)
8. **λ.conciliacao-por-nsu** · maquininha × sistema só casa exato por NSU; por valor/horário é ruidoso
9. **λ.coluna-inexistente-data-null** · `select` de coluna que não existe = Supabase retorna erro + `data null` SILENCIOSO → tela zera; sempre logar o error
10. **λ.prova-na-fonte** · UI verde/res.ok não é prova · ler row no banco depois do write
11. **λ.diagnostico-nivel-certo** · achar a camada (UI/payload/server/banco) antes de codar o fix
12. **λ.varrer-antes-de-excluir** · grep onde é usado em OUTRAS áreas antes de excluir/esconder; reportar a varredura
13. **λ.migration-antes-de-push** · coluna nova em prod ANTES do git push (senão a tela que lê a coluna quebra)
14. **λ.salao99-read-only** · CIC navega/print no sistema do cliente · nunca Salvar/Excluir/Criar
15. **λ.token-nunca-em-url** · PAT via Git Credential Manager · nunca embedar na URL

---

## 🔥 PENDÊNCIAS (16/06)

Operação rodando **sem pendência crítica**. Em aberto (nenhum urgente):
- [ ] **Conciliação automática** da maquininha (importar CSV InfinitePay × comandas) — só se o Marko pedir; auditoria manual já fecha
- [ ] **Bônus pra Sofia** · se o R$ 169 (hoje em "Outros") tiver sido bônus, converter pra Bônus (1 comando)
- [ ] Backlog por uso real (Marko decide): NFS-e · devolução de produto · inventário em massa · cupom térmico

---

## 🧭 COMO USAR ESTE STATUS
- Sessão futura sobre Palace → começar lendo este arquivo
- "Estado Palace" → resumir 3 linhas + pendência do momento
- Não confundir Palace (fork dedicado · R$ 2.997 · domínio agendapalacemacae.com.br · Supabase systempalacemacae) com AgendaPRO universal
- Feature do Marko NÃO vai pro AgendaPRO universal sem Eduardo cravar
- Marko/Luana decidem o que ativar pelo uso real · não antecipar speculativamente

**Ver também:** [[HUB-AGENDAPRO]] · [[STATUS-STUDIO-MOOD]] · [[EDUARDO-BARROS]] · [[MEGA-CLAUDE]] · memórias auto `feedback_palace_*`, `project_palace_*`, `reference_palace_*`

— Atualizado por Verbo Code · 16/06/2026
