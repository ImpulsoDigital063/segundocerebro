# 🏆 STATUS PALACE NAIL SPA · Primeiro SaaS Premium Entregue

**Última atualização:** 29/05/2026 madrugada
**Cliente:** Palace Nail Spa Macaé — esmalteria + SPA dos pés alto padrão
**Donos:** Marko (PT-EU · administra · não atende) + Luana (esposa · sócia · administra)
**Localização:** Macaé · Rio de Janeiro
**Valor cobrado:** **R$ 2.997,00** (entrega de sistema dedicado pronto)
**Status:** ✅ ENTREGUE · operação rodando · Letícia (recep) + 5 atendentes treinados

---

## 🎯 O QUE É ESTE MARCO

**Primeiro SaaS premium da Impulso Digital entregue como produto pronto.**

Não foi venda de assinatura AgendaPRO (R$ 67-97/mês). Foi **fork dedicado** — sistema próprio do Palace, com URL própria (palace-system), banco próprio, regras de negócio próprias (cutoff financeiro · supervisor PIN · agenda intacta · três modais · etc.).

Saímos de "vender plano Equipe Anual R$ 970" pra **"vender um sistema dedicado R$ 2.997"** porque o Marko precisava de funcionalidades específicas que não cabiam no produto universal:
- Supervisor PIN granular (recep não cancela comanda paga sem autorização)
- Cutoff financeiro (relatórios só contam a partir de 28/05 · histórico Salão99 não conta)
- Agenda intacta (nunca deletar appointments · base de comissão das manicures)
- Tri-modal (Letícia usa iPad Mini 744px · Marko alterna iPhone/desktop · Luana usa notebook)
- Integração com fluxo Salão99 (sistema antigo desliga 31/05 · janela curta)

**Esse é o caminho:** cliente premium que paga R$ 2-3k por fork customizado vs cliente padrão que assina mensal. Os dois mercados convivem.

---

## 💰 FATURAMENTO

| Item | Valor |
|---|---|
| Setup + Sistema Dedicado | **R$ 2.997,00** |
| Modalidade | À vista (ou parcelado · conferir com Eduardo) |
| Recorrência futura | A definir · provavelmente manutenção mensal R$ 297-497 |
| Custos diretos Impulso | Vercel free + Supabase free (Palace cabe em tier gratuito) |
| Margem nesta venda | ~100% (tempo investido é o custo real) |

---

## 👥 PESSOAS E ACESSOS

### ADM (donos · tela `/admin`)
- **Marko** · dono · fala inglês (Chrome dele auto-traduz · não adicionar `notranslate`) · português europeu (PT-EU) · desconfiado · compara com concorrência (Salão99, Trinks, Booksy, ZenPlace, agendapro.com/br)
- **Luana** · esposa do Marko · SÓCIA · co-Adm · compartilha login do Marko (`palacenailspamacae@gmail.com`) · NÃO é recepcionista

### RECEP (tela `/recepcao`)
- **Letícia** (recepcionista contratada · funcionária real) · `lelemathias00@icloud.com` / `leticia2026`

### PROFISSIONAIS (tela `/profissional` · veem só os próprios agendamentos)
| Nome | Email | Senha temp |
|---|---|---|
| Kelle Monique (gerente) | kellemoniqueeloysantoscardoso@gmail.com | `kelle2026` |
| Sofia | sofiasouzaiiiix@gmail.com | `sofia2026` |
| Ariana | arianainacio7251@gmail.com | `ariana2026` |
| Susana (Dos Santos Souza) | suziunica123@gmail.com | `susana2026` |
| Patricia / Divina | patriciavasconcellos37222@gmail.com | `divina2026` |

**Senha padrão:** `<primeironome>2026` minúscula · força troca no primeiro login (security via force-change, não via entropia).

**Total:** 7 logins (1 owner Marko/Luana + 1 recep + 5 atendentes).

---

## 🏗️ ARQUITETURA TÉCNICA

**Repo:** `github.com/systempalacemacae/systempalace`
**Domínio:** (a confirmar · provavelmente subdomínio palace.agendapro.net.br ou domínio próprio)
**Stack:** Next.js 16 + Turbopack + React 19 + Supabase (Postgres + Auth + Storage + RLS + Realtime + service role)
**Fork base:** AgendaPRO desktop (Verbo Cowork) → adaptado pra fork dedicado em 28/05

### Migrations aplicadas (v47-v89)
- v47 receptionist-role
- v49 merchant-fees (taxas por bandeira)
- v50 brand-colors
- v51 cash-closings (fechamento de caixa)
- v52 installments-pix-fee
- v54 invoices V1
- v56 customer-extended (18 campos)
- v59 expenses-import-id (import idempotente Salão99)
- v60 override overlap warning
- v61 pontos só após paid_at
- v62 business_blocks RLS public
- v64 brands + categories + stock
- v65 product-photos bucket
- v66 suppliers + entries + sales (estoque + venda avulsa)
- v67 acquisition_channel + primary_need
- v68 service_product_consumption
- v69 sales.invoice_id (comanda V1)
- v70 trigger auto-invoice no INSERT appointment
- v71 trigger só pra pending/confirmed
- v72 loyalty_enabled toggle
- v74 manual_discount no rodapé comanda
- v75 commission breakdown serviço × produto
- v76 packages V1 (combos N sessões)
- v77 fix booking público Olímpio (SECURITY DEFINER)
- v78 extra_professional_slots (Marko +1 prof)
- v79 campos Salão99 em professionals
- v80 caixa conferência tripla (dinheiro + cartão + pix)
- v81 supervisor_pin (V1 PIN fixo)
- v82 supervisor_whatsapp
- v83 supervisor_requests (V2 OTP)
- v84 search_path extensions (fix pgcrypto)
- v85 supervisor realtime + passwordless (V3)
- v86 reuse window 60s
- v87 payload + auto-apply trigger (V4)
- v88 expandir trigger pra 3 ações (appointment.cancel · appointment.edit · invoice.cancel_paid)
- v89 sync invoice_items ao editar appointment (bug financeiro real cravado em auditoria)

---

## 🚀 FEATURES ENTREGUES (resumo executivo)

### Para o Marko (admin)
- Página Início com saudação + 4 KPIs + atalhos + ranking
- Grade timeline Salão99-style (colunas por prof · slots 30min · cards 3D)
- Clientes com 18 campos + drawer 8 tabs
- Financeiro dashboard (Hero Lucro + Despesas + Comparativo + Fluxo de Caixa drill)
- Comandas auto-criadas no INSERT do appointment (trigger v70)
- Remunerações (cálculo no faturamento · breakdown serviço × produto)
- Recibo PDF jsPDF estilo Salão99 (Web Share API pra WhatsApp)
- Estoque completo (marcas · categorias · variantes · entrada · venda · histórico)
- Pacotes V1 (combos N sessões com desconto)
- Cupons (Aniversário + Avulso + Promoção)
- Fidelidade (pontos só após paid · toggle on/off)
- Painel Supervisor PIN (V4 OTP · controla 13 ações da recep · botão "Pedir ao Marko via WhatsApp")
- Cutoff financeiro 28/05 (relatórios só contam dali pra frente · agenda histórica intacta)

### Para a Letícia (recep)
- Tela /recepcao com KPIs (Recebido · A receber · Pendentes) próprios
- Aba Consultas · Caixa (fechamento conferência tripla) · Cupons
- Marcar agendamento full · com modal Salão99-style multi-serviços
- Pedir autorização ao Marko via OTP/WhatsApp pra cancelar/editar/estornar

### Para as atendentes (profissional)
- Tela /profissional com sidebar SaaS premium tri-modal (29/05)
- Veem só os próprios agendamentos do dia
- CLT (employed) vs comissionada (commissioned) com items diferentes na sidebar

---

## 📅 LINHA DO TEMPO (cronologia condensada)

| Data | Marco |
|---|---|
| **17/05** | Marko + Luana fecham · Equipe Anual R$ 970 trial cortesia 7d · 5 atendentes + recep cadastrados |
| **17/05 noite** | Import Salão99: 872 clientes · 41 serviços · 1435 agendamentos · 69 despesas R$ 18.892,27 |
| 18/05 | Drilldown CIC do Salão99 · gap funcional cravado · `06-PAINEL-SAAS-PADRAO.md` (template canônico) |
| 19-20/05 | 26 modais portados via createPortal · regra mobile/desktop isolada · migrations v60-v62 |
| 21/05 | Leva&Lava SaaS clube fidelidade cravado (paralelo) |
| 22/05 | Studio Mood lead via ChatGPT (canal novo) · Marko: "Salão99 acabei rodando ele" |
| 23/05 | Studio Mood reunião 13h · estoque MVP entregue · pitch SaaS |
| 24/05 | Eduardo cravou: ESTENDER trial Marko +9 dias · novo vencimento 02/06 · BLOCO 4 fica pra 02/06 |
| 25/05 | Studio Mood trial 7d cortesia · 132 fidelidade desktop · pontos NÃO misturam pagamento (REVERTIDO mistura) |
| 26/05 | P0 Olímpio booking quebrado · trigger v77 SECURITY DEFINER · CIC Pacotes drilldown |
| 27/05 | Análise impacto antes de prod (regra dura cravada) · tablet Letícia · Marko Chrome inglês · token nunca em URL |
| **28/05** | **FRESH START FINANCEIRO** · cutoff 28/05 em 16 telas · agenda intacta · Sistema Supervisor PIN Fase A+B |
| **28/05 noite** | Marko cravou regras duras: NUNCA deletar appointments · agenda é base de comissão |
| **29/05 madrugada** | Supervisor V2 OTP → V3 Realtime → V4 Payload+Trigger (evolução em 1 sessão) · /profissional padrão SaaS · auditoria multi-rodada · migration v89 bug financeiro corrigido |
| **29/05 dia** | **R$ 2.997 cobrado · sistema entregue como produto pronto** |

---

## 🎓 PADRÕES CRAVADOS DESTA OPERAÇÃO

Esses padrões valem pra próximos forks dedicados (Studio Mood futuro · qualquer cliente premium R$ 2k+):

1. **λ.fork-dedicado** · cliente premium que quer features específicas ganha repo próprio · NÃO inflar AgendaPRO universal com lógica de 1 cliente
2. **λ.cutoff-financeiro** · cliente migrando de outro sistema precisa de cutoff (data X em diante conta · histórico fica visível mas não soma)
3. **λ.agenda-intacta** · NUNCA deletar agendamentos (base de comissão · auditoria operacional)
4. **λ.tri-modal** · mobile < 640 / tablet 640-1023 / desktop ≥ 1024 · breakpoints obrigatórios em cliente com iPad
5. **λ.supervisor-evolucao** · V1 PIN fixo (recep digita) → V2 OTP (admin gera one-time) → V3 Realtime passwordless (admin clica liberar) → V4 payload no banco + trigger auto-aplica (recep pode fechar modal)
6. **λ.salao99-read-only** · CIC pode navegar/dril/print no sistema do cliente · NUNCA clica Salvar/Excluir/Criar
7. **λ.prova-na-fonte** · UI verde / res.ok / "salvo" NÃO são prova de persistência · ler row no banco depois de write
8. **λ.diagnostico-nivel-certo** · bug recorrente exige localizar camada (UI · payload · server · banco) antes de codar fix
9. **λ.estudar-antes-de-codar** · pedir prints OU drilldown CIC READ-ONLY antes de implementar feature nova · listar diferenças "nossa vs deles"
10. **λ.consultar-mobile-vs-desktop** · antes de codar feature, SUGERIR onde faz sentido (mobile · desktop · ambos) com justificativa · Eduardo decide
11. **λ.reusar-componente-revisar-fluxo-lateral** · ao reusar componente em novo contexto · revisar redirects/auth/imports/labels · senão quebra em fluxo lateral
12. **λ.feature-nova-em-mobile-E-desktop** · backend compartilhado · frontend precisa existir nos 2 lados (UX pode adaptar: drawer vs sheet · checkbox vs long-press)
13. **λ.metricas-negocio-nao-dono** · perfil pessoal do fundador NÃO conta como prova social do negócio
14. **λ.token-nunca-em-url** · PAT GitHub vazou 4× via push.sh que embedava na URL · usar SEMPRE Git Credential Manager interativo

---

## 🔥 PENDÊNCIAS (29/05 madrugada)

### Críticas
- [ ] **02/06 9h** · rodar BLOCO 4 do `grant-trial-palace-nail-spa.sql` · converter cortesia → anual_pix (se valor R$ 970 ainda aplica · OU ajustar pra modelo R$ 2.997 já cobrado)
- [ ] Eduardo: rodar DELETE 8 comandas teste (#183)
- [ ] Marko: cadastrar WhatsApp em `/admin/supervisao` (pra recep clicar "Pedir ao Marko")
- [ ] Mandar credenciais formalmente pra Letícia (lelemathias00@icloud.com / leticia2026)

### Importantes (mas não bloqueiam operação)
- [ ] Notificação realtime quando Letícia fecha caixa (Marko vê toast em `/admin/caixa`)
- [ ] Workflow "aprovar fechamento" com status (pending/approved)
- [ ] Alerta automático se diff > R$ 100 no fechamento
- [ ] Salão99 desliga **31/05/2026** · 2 dias · captar outros salões em migração

### Backlog (decisão do Marko/Luana pelo uso real)
- [ ] 9 ações Supervisor V4 ainda não plugadas no front (catálogo no banco · Marko ativa quando precisar)
- [ ] Notas fiscais NFS-e (NFE.io ou similar)
- [ ] Devolução de produto
- [ ] Inventário (balanço físico em massa)
- [ ] Cupom térmico 58mm
- [ ] Lista de espera de produto

---

## 🧭 COMO USAR ESTE STATUS

- Sessão futura sobre Palace → começar lendo este arquivo
- Quando Eduardo perguntar "estado Palace" → resumir 3 linhas + pendência crítica do momento
- Não confundir Palace (fork dedicado · R$ 2.997 entregue) com AgendaPRO (universal · R$ 67-97/mês)
- Feature pedida pelo Marko não vai pra AgendaPRO universal SEM Eduardo cravar (separação de scope)
- Marko/Luana decidem quais ações adicionar ao Supervisor pelo uso real · NUNCA antecipar speculativamente

---

**Ver também:**
- [[STATUS-AGENDAPRO]] · produto universal (Solo R$67 / Equipe R$97)
- [[STATUS-STUDIO-MOOD]] · próximo lead premium em pipeline
- [[EDUARDO-BARROS]] · perfil + cases
- [[MEGA-CLAUDE]] · hub central
- Repo: `github.com/systempalacemacae/systempalace`
- Memórias auto: `feedback_palace_*`, `project_palace_nail_spa`, `reference_palace_*`

— Verbo · 29/05/2026
