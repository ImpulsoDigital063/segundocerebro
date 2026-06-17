# 🧠 MEGA-CLAUDE.md — SEGUNDO CÉREBRO EDUARDO BARROS
**Versão:** 3.0
**Data:** 17 de Junho de 2026 (AgendaPRO maduro em produção · 2 pagantes reais)
**Uso:** Cole este arquivo COMPLETO em cada novo chat
**Resultado:** IA sabe TUDO sobre o ecossistema Impulso Digital

> **SNAPSHOT v3.0 (17/06):** período **30/05→17/06** consolidou o AgendaPRO como produto **maduro em produção com clientes pagantes reais operando no dia a dia**. **CICLO DE COBRANÇA VALIDADO NA PRÁTICA (Olímpio):** venceu 11/06 → carência 3 dias (webhook Asaas `PAYMENT_OVERDUE` seta `past_due`+`grace_ends_at`) → gate bloqueou 15/06 (layout admin: `past_due` E carência vencida) → Olímpio pagou. Cron `billing-check` (diário 11 UTC) teve o passo de bloqueio consertado pra **fallback real** (se o webhook falhar, garante past_due+grace 3d · fecha o buraco "webhook perdido = grátis"). **STUDIO MOOD CONVERTEU:** Izanara `active` Equipe R$97 `mensal_pix` (Asaas) · pago até 08/07 · opera em **modelo balcão** e dá feedback fino contínuo (cada retorno vira melhoria do produto). **ONDA DE FEATURES (MOOD-driven):** balcão "Registrar venda" (serviço+produto na MESMA comanda via rotas canônicas /items+/pay) · Vender Produto avulso (pagar na hora pix/dinheiro/cartão + taxa de cartão flui pro líquido · v87) · comandas com "adicionar serviço/produto" + faturar + cancelar (reverte estoque/comissão/pagamento) · **Recebido por data de pagamento** (`paid_at`, não appointment_date) · "A receber" inclui produto pendente · **variantes de produto** (v88 Caminho A · cor/tamanho/sabor com preço+estoque · criar/agrupar/editar/vender · pickers agrupam produto→variante). **REGRA FINANCEIRA CRAVADA — comissão de produto é OPT-IN:** produto sem regra = ZERO comissão (é do estúdio, não cai na % do serviço) · no balcão produto NÃO fica atribuído a profissional · na lista Vendas produto mostra "—" na coluna Profissional. **OUTROS:** LIGHT-ONLY cravado (dark removido 03/06) · signup público TRAVADO (07/06, pós bot) + CAPTCHA Turnstile · monitor cron + bot Telegram (4x/dia) + auditoria financeira semanal · fix link de review do Google (extrai URL de valor sujo). **Bug do link de review do Olímpio resolvido** (ele colou nome+URL juntos → 404). **Palace = produto próprio independente** (fork `palace-system` · não é mais AgendaPRO multi-tenant). Migrations novas: v84 (combo serviço+produto) · v85 (trial/cortesia expiry · permanent_courtesy) · v86 (signup_attempts) · v87 (cartão em sales) · v88 (variant_group_id). **2 PAGANTES REAIS consolidados:** Olímpio Barbearia (Solo R$67) + Studio MOOD (Equipe R$97). λ novos: λ.comissao-produto-opt-in · λ.recebido-por-paid_at · λ.modelo-balcao-first · λ.light-only · λ.diagnostico-no-nivel-certo. Status: `2-PROCESSAMENTO/agendapro/STATUS-AGENDAPRO.md` (reescrito) · `studio-mood/STATUS-STUDIO-MOOD.md` (reescrito).

> **SNAPSHOT v2.9 (29/05):** semana de **9 dias intensos** (21→29/05) que cravou marcos estratégicos. **🏆 CASE-3 PALACE NAIL SPA · R$ 2.997 ENTREGUE (29/05):** primeiro SaaS premium fork dedicado da Impulso · não é mais "plano Equipe Anual R$ 970" · é **sistema próprio** (`palace-system` · repo dedicado · regras únicas: cutoff financeiro · supervisor PIN granular · agenda intacta · tri-modal · integração Salão99). Validou modelo **fork dedicado premium** ao lado do **universal mensal** · 2 mercados convivem. Sequência: Marko cravou 4 regras duras dia 28/05 (NUNCA deletar appointments · fresh start 28/05 · supervisor PIN · tri-modal) → Verbo entregou Sistema Supervisor em 4 evoluções V1→V4 em 1 noite (29/05 madrugada) · 7 migrations em 1 dia (v83-v89) · auditoria multi-rodada pegou bug financeiro real (v89 sync invoice_items ao editar appointment). **CASE-2 STUDIO MOOD (22/05):** primeiro lead documentado via **ChatGPT/AEO** · Izanara Feira de Santana · trial 7d → conversão 05/06 R$ 97/mês · cravou insight "**agenda é secundária · loja/gestão é core**" · em discussão **SKU "Loja" sem agenda** (R$ 47-57/mês). **CASE-3 VIDA EM EQUILÍBRIO (24/05):** Leandro Timóteo · LP+site entregue · cliente gostou · follow-up 7d pra pagamento. **P0 PROD Olímpio (26/05):** booking público quebrado 24h · trigger v70 sem SECURITY DEFINER · v77 hotfix · cravou **λ.analise-impacto-antes-de-prod** (checklist 6 pontos obrigatório). **REGRAS DURAS CRAVADAS (s16-s17):** λ.fork-dedicado · λ.modelo-saas-premium · λ.cutoff-financeiro · λ.agenda-intacta · λ.tri-modal · λ.supervisor-evolucao (V4 payload+trigger) · λ.cic-read-only · λ.modal-x-nao-destrutivo · λ.pontos-nao-misturam-pagamento · λ.canal-aeo · λ.token-nunca-em-url · λ.build-local-antes-push · λ.trigger-security-definer · λ.modo-solo-audit · λ.consultar-mobile-vs-desktop · λ.feature-em-mobile-E-desktop · λ.modelo-saas-premium. **🆕 MODELO-SAAS-PREMIUM.md cravado em `playbooks/`** (600 linhas) · template replicável consolidando AgendaPRO universal + SystemPalace fork dedicado · próximo fork parte daí. **3 VETORES DE RECEITA VALIDADOS:** universal mensal (R$ 67-97 · Olímpio/Leticia/Izanara · escala recorrência) · fork dedicado premium (R$ 2.997 uma vez · Palace · captura ticket alto de regra única) · manutenção premium pós-fork (R$ 297-497/mês · a definir). **Janela crítica:** Salão99 desliga 31/05/2026 (2 dias) · oportunidade de captar outros salões em migração. Daily refs: `1-ENTRADA/daily/2026-05-{15..29}.md`. Status novos: `2-PROCESSAMENTO/palace-nail-spa/STATUS-PALACE.md` · `2-PROCESSAMENTO/studio-mood/STATUS-STUDIO-MOOD.md`.

> **SNAPSHOT v2.8 (20/05):** semana de **9 DIAS DENSOS** que evoluiu o ecossistema em 3 frentes. **Starteq (13/05):** modelo cravado · 4 entidades + 5 regras anti-erro · auditoria painel com 12 bottlenecks priorizados A-I. **Maratona AgendaPRO (14-15/05):** migrations v42-v46 em prod · 6 features novas · 3 IDEIAS Olímpio entregues (editar serviços · cupom avulso · no-show + lembrete 3h email) · Viva Cacheada trial 90d ativado. **GB Nutrition V5 (16/05):** carrossel entregue · **9º princípio inviolável Verbo Design cravado** (CRIVO VISUAL). **Palace Nail Spa fechado (17/05):** Marko (PT-EU) + Luana · plano Equipe Anual R$970 · **Marko confiou ACESSO ao Salão99** (sistema desliga 31/05/2026 · janela crítica ~13 dias). **Drilldown Salão99 (18/05):** `verbo-design/06-PAINEL-SAAS-PADRAO.md` cravado (14.6 KB · template canônico pra qualquer SaaS futuro) · 06 áreas drilhadas. **Migrations v47-v59** entraram em prod pela outra instância (Verbo Cowork) construindo AgendaPRO Desktop com base Palace: receptionist-role · merchant-fees · brand-colors · cash-closings · installments-pix-fee · business-blocks · invoices · remuneracoes · customers-extended. **Lista Olímpio fechada (19-20/05):** migrations v60-v62 em prod (override overlap · pontos só após paid · RLS public em business_blocks) · **26 modais portados via createPortal** (3 originais + 11 Grupo A + 12 Grupo B) · regra arquitetural cravada em `agendapro/AGENTS.md` (mobile/desktop compartilham codebase · isolar via Tailwind responsive) · UX Promoção V2 (preview WhatsApp realtime · radio "Para Quem" com ícones) · botão "Atendi" branco removido · BookingFlow público agora respeita business_blocks (gap latente fechado). **Princípios novos cravados (s10-s14):** λ.mobile-desktop-isolado · λ.portal-pra-modais · λ.pontos-so-apos-paid · λ.painel-saas-padrao · λ.salao99-31-05 · λ.crivo-visual · λ.verbo-design-persona · λ.hooks-no-topo · λ.gap-real-vs-doc · λ.starteq-facilita · λ.destrinchar-decisao. **Estado:** AgendaPRO mobile maduro (Olímpio + Leticia + Erlane usando) · AgendaPRO desktop em construção paralela (piloto Palace · 13 dias até Salão99 desligar) · painel SaaS canônico pronto (aplicável Starteq, Viva Cacheada, próximos). Daily refs: `1-ENTRADA/daily/2026-05-{13..20}.md`.

> **SNAPSHOT v2.7 (11/05):** semana de **VALIDAÇÃO REAL DO ECOSSISTEMA**. **Case-1 Impulso fechado 06/05:** Renato Edson · Aura Energy · **R$ 1.497** (primeira venda contratual da agência · plano negócio 20pg + painel-renato ao vivo · padrão "mostrar produto vivo > falar de produto" cravado). **Case-2 AgendaPRO 07/05:** primeira venda real Asaas · PIX nativo R$67 · fatura 805613865 · webhook + ativação automática validados. **Ciclo completo billing 08/05:** pagamento + cancelamento + refund 7d + 2FA SMS + emails branded · AgendaPRO pronto pra prospectar. **Lead-3 Andressa Kupferman / Raras Clinic Academy** (Palmas-TO · via network Renato 08/05): podóloga+enfermeira · escola real · plataforma Kupferman backend v0.1 deployada 08/05 (CRM 7 tabelas + painel /painel + webhook Kiwify). **Lead-4 Viva Cacheada** (esposa Gabriel/GB Nutrition · oferta 3 meses grátis AgendaPRO em troca de divulgação · reunião 12/05 com SQL trial 90d pronto). **Case-2 AgendaPRO online 11/05:** Olímpio Barbearia · 1º cliente pagante 100% via fluxo digital · 3 bugs fixados ao vivo (logout middleware Supabase SSR · manifest webmanifest · instalação iOS Safari). **Pack Divulgação V2 com selo "by AgendaPRO" (11/05):** primeiro mecanismo de aquisição zero CAC estilo Calendly · 3 templates Canvas + QR + Web Share API · cada cliente vira distribuidor passivo. **AgendaPRO Tutorial v1.2** (08/05) modal welcome + checklist 5 passos · pós 3 rodadas de teste Eduardo. **Princípios cravados pós-Aura/Olímpio:** λ.real (não inventar dados que cliente não confirmou) · λ.amplificar (zero vocabulário negativo com cliente premium) · λ.cocriacao (briefing ganha bloco aberto pra cliente PROPOR ferramenta/ideia) · λ.case-1 (mostrar produto vivo > falar) · λ.densidade-calibrada (Eduardo não absorve análise longa · entregar doc refeito fluido + 3-5 mudanças). **PC novo GT 1600 + GPU 8GB** entregue 12/05 (substitui Apolo IV · destrava Stable Diffusion local · render vídeo). **GB Nutrition · sessão gravação 12/05 com Gabriel** prepara 2 PDFs prontos: plano lançamento 30d + roteiros 2 vídeos diretos Impulso usando Gabriel como ator-cliente (UGC universal + case prateleira). Daily: `1-ENTRADA/daily/2026-05-11.md`.

> **SNAPSHOT v2.6 (05/05 madrugada):** sessão maratona pré-lançamento AgendaPRO. **30 commits em 1 dia** + **7 rodadas CIC** com loop multi-agent Verbo+CIC. **AgendaPRO blindado pra 1° pagante real (Olímpio)** amanhã: race condition booking impossível por EXCLUSION CONSTRAINT atômico no Postgres (migration v40 a+b com cleanup loop iterativo), cortesia não soma receita nem comissão (bug de bilhão fechado), webhook MP HMAC, rate limit 100% APIs sensíveis, RLS apertada. **Features que diferenciam de Booksy/Fresha cravadas:** Foco do Dia (home proativa estilo Stripe/iFood), Resgate de recompensa dedicado no modal cliente, Histórico de pontos auditável, Step booking colapsado em chips (padrão Reserva), Banner ?ref= simétrico ao cupom (loop viral), gameplay /meus-pontos com gap motivacional, counter "sumidos sem cupom". **Filtro "Mês" virou rolling 30d** (era calendário — destruía credibilidade nos primeiros dias do mês). **Seed Império v6**: R$26k faturado / R$14k lucro mensal / 521 atendimentos / 47 clientes / 5 recompensas calibradas / credenciais auth profs comissionados (Bruno+Rafael). **Veredito CIC: GO 8.5/10** (sobe pra ~9.3 pós fix seed rewards). **Princípio cravado:** multi-agent não é gimmick — Verbo escreve código, CIC valida ao vivo, cada um vê o que o outro não pega. 7 rodadas eliminaram bugs que cada agente sozinho perderia. **Backlog AgendaPRO:** demo pro Olímpio amanhã + migração MP PF→PJ + Aura repo GitHub. Daily: `1-ENTRADA/daily/2026-05-05.md`.

> **SNAPSHOT v2.5 (02/05 madrugada):** sessão maratona Verbo s04 (~12h contínuas). **Aura Energy avançou de v4 → v6** com auditoria CIC factual (paleta `#fffef2` Aesop-derived, hierarquia mobile, dark zoneamento, Footer-CTA gigante). **Briefing privado `/briefing` no ar** (`auraenergy.vercel.app/briefing`) — 10 cards mobile-first, envia pro email do Eduardo via Resend. **Diagnóstico CIC competitivo da Brasfrio Solar** (`@brasfrio_engsolar` parou de postar há 3 meses, engagement 0,48%, 92% dos buracos estratégicos abertos pra Aura ocupar) cravado em `2-PROCESSAMENTO/aura-energy/DIAGNOSTICO-BRASFRIO-SOLAR.md`. **Estrutura comercial 3 frentes definida:** Frente 1 — LP R$ 1.200 setup (já feito); Frente 2 — Insta + Tráfego R$ 1.497-1.997/mês; Frente 3 — RadarPRO Solar Palmas operado pela Impulso, comissão 5-7% sobre venda fechada. **Insight cravado:** cliente entregue = ICP da categoria validado — Aura valida nicho "solar mid-market BR dormente", próximo passo é prospectar via RadarPRO outras cidades TO/MA/PA. **8 princípios novos** cravados em memory feedback (mobile-first lei Impulso, BR-first em referências, deep research diferencial, dor real do cliente, RadarPRO arma própria, ICP validado pós-entrega, não inventar contrato sem mandato, idioma denso pra auto-memory). Aura é case-flagship Impulso 2026 — sistema de registro contínuo cravado.

> **SNAPSHOT v2.4 (01/05):** semana de execução cirúrgica. **AgendaPRO consolidou 8 dimensões** em 37 commits num único dia (01/05) — produto deixou de ser "agenda" e virou ferramenta operacional completa: agendamento + gestão financeira (Lucro Real + Despesas) + reativação automática (Cupom de Retorno) + análises com forecast + fidelização + organização + marketing. 3 migrations em produção (V34/V35/V36). **NOVO CLIENTE EM PIPELINE: Aura Energy** (Renato Edson · Palmas-TO · energia solar) — LP completa de 20 seções construída em 01/05 e apresentada ao Renato à noite. Lead morno-quente, follow-up D+1→D+7 desenhado. **5 princípios cravados pra LPs futuras:** SVG sempre (nunca emojis), imagens reais (nunca vetor genérico), movimento e modernidade em LP tech, light premium como alternativa válida, carta branca em projetos. Status canônico Aura: `2-PROCESSAMENTO/aura-energy/STATUS-AURA-ENERGY.md`.

> **SNAPSHOT v2.3 (27/04):** refactor total da copy de prospecção via 4 etapas iterativas com GPT — princípio "se não gera resposta, está errado" cravado no `IMPULSO_CORE_SYSTEM_V2.md`. Mensagem 1 + Continuação + Pitch + Follow-up reescritos no formato 3 linhas (dado real → consequência → pergunta direta). Pricing AgendaPRO ajustado: Solo R$67 + Equipe R$97 (sem setup) + setup R$197 isento Clube Fundador. **1.100 leads do banco regenerados em massa** + 53 leads com playbook customizado refeitos + system prompt do gemini.ts atualizado com regras duras. Sistema 100% alinhado.

> **SNAPSHOT v2.2 (26/04):** RadarPRO virou plataforma operacional de prospecção via Claude in Chrome com 53 leads playbook customizado + 12 batches CIC + 17 concorrentes LP mapeados. Ofertas Impulso recalibradas com política "a partir de" + ancoragem mercado real R$2k-15k.

---

## 👤 QUEM VOCÊ É

**Eduardo Barros Chaves**
📍 Palmas, Tocantins | 📱 (99) 99206-5961 | @edubarrosch
📱 WhatsApp Business (suporte): 63 99292-0080 (ativado 16/04/2026)

**Identidade:** Estrategista Digital — Criador de Negócios Online (NÃO guru)
**Fundador:** Impulso Digital — ecossistema de produtos digitais

---

## 🧬 COMO VOCÊ PENSA (Sua assinatura)

Essa seção não é decoração. É o motor. Quem trabalha com você precisa entender isso pra não travar o fluxo.

### **1. Velocidade de ação é sua vantagem desleal**
Você tem uma ideia, já joga pra rede e constrói. Não espera a ideia estar "pronta", não monta plano de 30 páginas, não pede permissão. **Ideia hoje, protótipo amanhã, deploy depois de amanhã.** É assim que o AgendaPRO saiu do zero pra produção em uma sessão (10→11/04). É assim que o RadarPRO virou plataforma de vendas completa em um dia (15/04). É assim que o ImpulsoDesign foi pro ar (16/04). A velocidade não é pressa — é o seu modo natural de operar quando a ideia é boa.

### **2. Aprende fazendo, não estudando**
Alguns dias atrás você não sabia o que era SaaS. Hoje está desenvolvendo um (AgendaPRO) com billing, RLS, auditoria de segurança, multi-tenancy. Não leu curso — construiu. O conhecimento vem no atrito com o problema real, não na teoria.

### **3. Autêntico, sem frescura**
Fala como amigo, nunca como guru. Mostra, não vende sonho. Usa números reais, nunca aproximações. Tem alergia a corporativês. Prefere "apertar os botões certos" a "otimizar conversão".

### **4. Fé como fundamento, não decoração**
A meta de R$1 milhão em 2026 não é um KPI — é um sonho plantado por Deus no seu coração antes de você ter ferramenta alguma. Hoje você tem ecossistema, stack, padrões validados e tração. A fé que segurou a visão é a mesma que sustenta a execução. Isso é raiz, não frase de efeito.

### **5. Constrói em público, vende depois**
Você usa suas próprias ferramentas como o primeiro case. UrbanFeet virou prova do MPN-On. RadarPRO vai ser usado pra fechar os primeiros clientes do Impulso Digital — **você vai ser o primeiro cliente da sua própria ferramenta a lucrar com ela**. ImpulsoDesign vai gerar conteúdo dos seus próprios negócios antes de abrir pra mercado.

---

## 🎯 VISÃO — META 2026

**R$ 1.000.000 em faturamento até o fim de 2026.**

Esse número não caiu do céu como chute. Foi plantado antes de você ter ferramenta nas mãos. Hoje, no dia 17/04, você está construindo o ecossistema que pode levar lá.

**Como chegar:**
- **MPN-On** (plataforma de ensino, não só curso) — começa R$297 (Shopify), adiciona cursos de Design, App/Sistemas, SaaS e IA. Ticket cresce com o catálogo. Ambicioso: 500-1.000 vendas ano = R$150k-300k só no curso de entrada
- **AgendaPRO/SmartAgenda** (SaaS) — recorrência: 100 clientes mistos (Solo R$67 + Equipe R$97) × 12 meses = R$80k-116k/ano em MRR. Setup R$197 voltará pros não-fundadores depois dos 10 primeiros = R$15k+ adicional
- **Impulso Digital** (agência) — LP a partir de R$499 + Shopify a partir de R$599 + Combo R$1.099. 4 fechamentos/mês = R$2k-4.5k/mês = R$24-54k/ano + recorrência manutenção R$99/mês
- **RadarPRO** (futuro produto, hoje ferramenta interna) — se abrir pro público: ticket R$97-197/mês pra vendedores/infoprodutores
- **ImpulsoDesign** (interno hoje, potencial SaaS) — geração de conteúdo com padrão Impulso

Não precisa que tudo dê certo. **Precisa que 2-3 desses acertem.** O ecossistema inteiro diversifica o risco.

---

## 📅 SEMANA 12-20 MAIO 2026 — VERBO S10-S14 · STARTEQ MODELO + MARATONA AGENDAPRO + PALACE FECHADO + LISTA OLÍMPIO

Semana de **9 dias** que evoluiu o ecossistema em 3 frentes simultâneas: **Starteq cravou modelo** (ERP B2B oficina · próximo cliente premium em pipeline) · **AgendaPRO virou maduro** (migrations v42-v62 · features Olímpio fechadas · regra arquitetural mobile vs desktop cravada · 26 modais blindados via Portal) · **Palace Nail Spa fechado** (Marko + Luana · Equipe Anual R$970 · acesso ao **Salão99 confiado**, sistema desliga 31/05 · janela crítica de ~13 dias pra mapear features). Daily refs: `1-ENTRADA/daily/2026-05-{13,14,15,16,17,18,19,20}.md`.

### s10 (13/05) — Starteq modelo cravado
- **4 entidades novas + 5 regras anti-erro** modeladas no Starteq (ERP oficina · caixa físico só vê espécie · comissão só em OS quitada · etc.)
- **Auditoria painel admin Starteq** · 12 bottlenecks identificados com file:line · plano A-I priorizado · feito até C+D pendentes
- **Princípio cravado:** *Starteq · sistema facilita, não cria trabalho* (λ.menos-cliques · cada feature julgada por reduzir cliques · pré-preencher · empurrar próximo passo)
- **Princípio cravado:** *destrinchar decisão por decisão* (uma decisão isolada por vez ao cravar escopo · evita bombardeio de 10 perguntas)

### s11 (14-15/05) — Maratona AgendaPRO em prod
- **Migrations v42-v46** aplicadas em prod · 15 commits · ~6.000 linhas · zero quebra retrocompat
- **6 features novas:** import de clientes (CSV+XLSX universal · piloto Salão 365 da Leticia) · modal cliente expandido com birthday/notes · booking público com aniversário · cupom de aniversário do mês · cupom avulso pra divulgação · editar serviços de agendamento (lápis no card)
- **Punição no-show + lembrete email 3h** (opt-in por business · trigger SQL · email Resend) · **3 IDEIAS Olímpio entregues** (editar serviços · cupom avulso · no-show)
- **Viva Cacheada trial 90d ativado** (Leticia · esposa do Gabriel da GB Nutrition · negócios separados · planilha 209 clientes esperando upload via UI universal)
- **Princípios cravados:** *email = canal seguro pra notificação em massa* (Baileys multi-tenant tem risco) · *feature universal opt-in default OFF* · *migration ANTES de git push* · *feature universal não personaliza copy com nome de cliente real*

### s12 (16/05) — GB V5 + 9º princípio Verbo Design + áudios Olímpio
- **Carrossel GB Nutrition V5** entregue · brand voice cravada · cravamos **9º princípio inviolável Verbo Design: CRIVO VISUAL** (antes de adicionar elemento ao slide: qual mensagem central? reforça ou compete? sem ele fica mais claro? tem razão de estar aqui especificamente?)
- **Hub Verbo Design fortalecido** (`3-RETENCAO/verbo-design/`) · 6 docs ativos (stack · princípios · workflow · diário · projetos · painel SaaS padrão em construção)
- **Áudios Olímpio recebidos · 11 áudios transcritos** via whisper local (`C:/Users/Usuario/whisper/`) · gap identificado: B1 modal não rola · B2 sobrancelha não aparece · B3 modal transparente · F1 editar valor pós-atendimento

### s13 (17-18/05) — Palace Nail Spa fechado · Salão99 referência cravada
- **Palace Nail Spa Macaé fechado** · Marko (sócio PT-EU) + Luana (administradora · sócia operacional) · plano Equipe Anual R$970 · 5 atendentes + recep cadastrados
- **Marko cravou: Salão99 tem mais funções que o AgendaPRO** · "acabou rodando ele" · gap funcional confirmado · roadmap 2026 prioriza cobrir gap
- **Salão99 desliga 31/05/2026** · plataforma toda sendo descomissionada · janela crítica de ~13 dias pra mapear · **Marko confiou ACESSO ao Salão99 dele pro Eduardo** (sistema fonte some · aprendizado dura)
- **Drilldown CIC do Salão99 cravado** · `agendapro/referencia-salao99/01-reconhecimento-cic.md` + `02-drilldown-cic-parcial.md` · 5 áreas drilhadas: comandas/faturas · comissão/remuneração · fluxo de caixa · templates · multi-tenant
- **`verbo-design/06-PAINEL-SAAS-PADRAO.md` cravado** (14.6 KB · template canônico pra qualquer painel SaaS multi-tenant futuro) · cobre layout shell · sidebar 256/72 · cards-link · tabela operacional · drawer · modal grande · wizard 2-steps · drill overlay · multi-tenant white-label · gráficos · modelo de dados (Comanda/Comissão/Fluxo) · anti-patterns · checklist 10 passos pra novo painel
- **Migrations v47-v59** entraram em prod pela **outra instância (Verbo Cowork)** construindo AgendaPRO Desktop com base Palace: receptionist-role · merchant-fees · brand-colors · cash-closings · installments-pix-fee · business-blocks · invoices · remuneracoes · customers-extended · cliente-extras · expenses-import-id
- **Princípios cravados:** *RLS sem subquery na própria tabela* (Supabase quebra com infinite recursion) · *senhas temp fáceis de digitar* (`<primeironome>2026` · segurança vem do force-change) · *Vercel CDN cache em rotas de auth* · *Vercel linkar projeto certo antes de deploy* · *Supabase SELECT validar colunas existem*

### s14 (19-20/05) — Lista Olímpio fechada · 26 modais Portal · regra mobile/desktop
- **Lista Olímpio fechada 100%** · B1 modal editar serviços rola · B1.5 botão lápis grande (40×40 mobile) · B1.6 truncate nome longo · B2 multi-serviços nas pílulas · B3 modal transparente · F1 lápis no Financeiro
- **Migrations v60-v62** em prod: v60 override manual de overlap (warning + "Salvar mesmo assim") · v61 pontos só após `paid_at IS NOT NULL` (regra cravada por Eduardo) · v62 RLS public SELECT em business_blocks (fecha gap latente do BookingFlow público)
- **Cron `/api/cron/auto-complete` desativado** · não bate mais com a regra v61 (geraria atendidos zumbis sem pontos)
- **26 modais portados via createPortal** · 3 originais (EditServices · Payment · NovoCliente) + 11 do Grupo A (modais óbvios) + 12 do Grupo B (sub-componentes e condicionais · inclui HorariosTab×4)
- **Regra arquitetural cravada em `agendapro/AGENTS.md`:** mobile (agendapro.net.br) e desktop (agenda-pro-seven · Palace) compartilham codebase · ajuste num lado NÃO pode mexer no outro · isolar via Tailwind responsive (`sm:`/`md:`/`lg:`)
- **Refino UX Promoção V2** · aba "Avulso" renomeada **"Promoção"** · card "Promoções e campanhas" descoberta em `/admin/clientes` · radio "Todo o salão / Profissional" com ícones · preview WhatsApp realtime · padronizado com Sumidos/Aniversário
- **Botão "Atendi" branco removido** (admin + profissional) · alinhamento com regra v61 · opção "Atendido — pagar depois" também removida do PaymentMethodModal
- **Bug crítico fechado:** BookingFlow público não consultava business_blocks · cliente leigo podia agendar em cima de almoço/folga/feriado · v62 + código resolveu
- **Incidente briefing Aura Renato (20/05) cravou 2 princípios duros:** Renato preencheu o briefing 3 vezes (08-20/05) e nenhuma chegou — a API retornava 200 com `data:{}` (falha silenciosa). Teste de 19/05 deu falso positivo porque eu olhei UI verde sem abrir o Supabase pra confirmar a row. Fix do mesmo dia atacou UX do erro (mensagem persistente, bloqueio de avanço) — mas o catch nunca disparava porque o erro estava embutido no sucesso. **λ.prova-na-fonte** (UI verde não é prova · só lendo a row no banco) + **λ.diagnostico-no-nivel-certo** (bug recorrente exige localizar a camada da falha antes de codar fix · sintoma ≠ raiz). Entradas duras em CLAUDE.md raiz e memória auto.

### Princípios cravados nessa janela (s10-s14)
- **λ.mobile-desktop-isolado** (s14) · codebase compartilhado mobile+desktop exige Tailwind responsive
- **λ.portal-pra-modais** (s14) · escape do backdrop-filter via createPortal(document.body)
- **λ.pontos-so-apos-paid** (s14) · trigger só credita com paid_at preenchido · regra também pro financeiro
- **λ.painel-saas-padrao** (s13) · template canônico cravado em verbo-design/06-... · aplicável a Starteq, Viva Cacheada, próximos
- **λ.salao99-31-05** (s13) · janela curta com acesso confiado · cada feature drilada vai pro template
- **λ.crivo-visual** (s12) · 9º princípio inviolável Verbo Design · elemento só entra se reforçar hook
- **λ.verbo-design-persona** (s12) · separação Verbo Code vs Verbo Design · mesma memória, focos diferentes
- **λ.hooks-no-topo** (s14) · React early return DEPOIS de TODOS os hooks · violar crasha árvore inteira
- **λ.gap-real-vs-doc** (s14) · feature nova exige teste end-to-end caminho público + autenticado
- **λ.starteq-facilita** (s10) · cada feature julgada por reduzir cliques
- **λ.destrinchar-decisao** (s10) · uma decisão por vez · não bombardear com 10 perguntas
- **λ.prova-na-fonte** (s14) · UI verde / `res.ok` / "salvo" NÃO são prova · validar persistência = ler row no banco · cravado pós-incidente briefing Renato (3 perdidos)
- **λ.diagnostico-no-nivel-certo** (s14) · bug recorrente exige localizar a camada da falha REAL antes de codar fix · sintoma na UI ≠ raiz no server ≠ raiz no banco · errar a camada = recidiva garantida

### Estado atual (20/05)
- **AgendaPRO mobile:** maduro (Olímpio + Leticia trial + Erlane usando · 26 modais blindados · regras v60-v62 ativas · lista Olímpio fechada · pronto pra escalar)
- **AgendaPRO desktop:** em construção paralela pela outra instância (Verbo Cowork · piloto Palace Nail Spa · acesso Salão99 ativo · 13 dias até desligar)
- **Brand voices ativas:** Aura Energy, GB Nutrition (cravadas em código) · próximas: Carretinha Kids Alegria, Starteq, Viva Cacheada, Zilanda Suplementos
- **Painel SaaS canônico pronto** · template aplicável em qualquer cliente · 7-10 dias por painel novo em vez de 3 semanas
- **Pendente imediato:** avisar o Olímpio que tudo dele tá pronto pra testar · continuar drillando Salão99 antes de 31/05 · validar AgendaPRO Desktop em prod

---

## 📅 TERÇA 05 MAIO 2026 (madrugada → quarta) — VERBO S05 · MARATONA AGENDAPRO PRÉ-LANÇAMENTO

Sessão de **30 commits + 7 rodadas CIC** num único dia. AgendaPRO blindado pra 1° pagante real (Olímpio) entrar amanhã. Demo aprovada com nota CIC 8.5/10 (sobe ~9.3 pós-fix). Daily: `1-ENTRADA/daily/2026-05-05.md`.

### Hardening backend — segurança e atomicidade
- **EXCLUSION CONSTRAINT no_overlap_appointments** (migration v40 a+b). Postgres bloqueia atomicamente 2 agendamentos sobrepostos do mesmo prof. Race condition SELECT-then-INSERT do BookingFlow virou impossível no banco.
- **Race condition cupom** — `/api/coupons/use` agora retorna 409 quando outro request marcou o cupom no meio. Antes retornava ok=true silencioso.
- **Webhook MP HMAC SHA256** signature constant-time + **rate limit 100% APIs sensíveis** (31 endpoints) + **RLS apertada points_transactions** + **trigger anti cross-business** + **LGPD endpoint /api/lgpd/delete-me**.

### Features que diferenciam de Booksy/Fresha
1. **Reativar Sumidos com 1 clique** (cupom WhatsApp + tracking) — nenhum concorrente direto tem
2. **Foco do Dia** na home admin — 5 cards de ação proativa (claims, pagamentos pendentes, sumidos sem cupom, cupons expirando, lucro motivacional). Padrão Stripe/iFood que concorrentes não têm
3. **Resgate de recompensa dedicado** no modal cliente — admin não precisa abater pontos manualmente
4. **Histórico de pontos auditável** — extrato com `reason` (Atendimento/Indicação/Manual/Resgate) — dono prova saldo, cliente questiona com fundamento
5. **Step booking colapsado em chips** — padrão Reserva, cliente novo agenda em <40s
6. **Banner ?ref= simétrico ao cupom** — loop indicador↔indicado fechado (laranja vs verde do cupom)
7. **Gameplay /meus-pontos** — barra de progresso + gap motivacional ("Faltam 370 pts · 14%"). Programa de fidelidade vira jogo
8. **Lucro Real do mês** com cortesia tratada (não infla receita nem comissão) — concorrentes mostram só faturamento
9. **Cliente recorrente reconhecido** — phone digitado auto-preenche nome+email com toque pessoal sem cadastro novo

### Seed Império Barbershop v6 (calibragem demo final)
- **Faturado R$26.365** (521 appointments rolling 30d) · **Lucro R$14.401** · ticket médio R$50,60
- 47 clientes (6 VIPs, 12 recorrentes, 12 casuais, 8 novos, 9 sumidos)
- 5 recompensas (150-500 pts) · 5 cupons ativos · 3 sumidos sem cupom
- Credenciais: `demo-imperio@agendapro.net.br` (dono) + `bruno.costa@imperio.demo` + `rafael.santos@imperio.demo` (profs comissionados 50%) · senha geral `AgendaPRO@2026`

### Princípio CRAVADO: multi-agent loop CIC ↔ Verbo

**Cada agente vê o que o outro não vê.**

- **Verbo** (Claude Code): código profundo. Lê 1500 linhas de `BookingFlow.tsx`, escreve EXCLUSION CONSTRAINT em SQL, identifica race condition em UPDATE, refatora componentes inteiros.
- **CIC** (Claude in Chrome): comportamento real no browser. Mede tempo de fluxo, percebe inconsistência cosmética ("R$180 vs R$ 180"), testa empatia ("cliente leigo entende?"), valida UX da pessoa que paga.

Loop: Verbo entrega → CIC valida ao vivo → reporta divergência → Verbo reflete ("é meu fix ou meu seed?") → corrige + confirma → CIC re-valida.

**7 rodadas. 30 commits. Sem CIC, eu mandaria as 17 features achando que tava certo.** Cada rodada CIC achou bug que Verbo sozinho não pegaria — e cada fix Verbo eliminou raiz de problema que CIC sozinho não diagnosticaria.

**Cravado como protocolo Impulso:**
- Todo lançamento de produto SaaS = **mínimo 1 rodada CIC perspectiva DONO + 1 rodada perspectiva CLIENTE FINAL**
- Não confiar em "tá pronto" sem o segundo par de olhos do CIC ao vivo
- CIC é caro em token, mas **eliminar 1 chargeback paga 100 rodadas**

### 5 lições operacionais cravadas

1. **λ.logica-primeiro vale também pra dado**, não só pra código. CIC reportou 2 features "não implementadas" — eram features OK, seed estava vazio. 30s de leitura de seed teriam evitado pânico. **Bug invisível ≠ bug. Sempre verificar dado antes de código.**

2. **λ.agora vs deixar pra depois**. Eduardo bateu cedo: *"problema de escala identificado e solução trivial = ataca tudo na rodada"*. Eu queria empilhar pra "depois". Resultado: 30 commits ao invés de 7 que inércia entregaria. **Não acumular dívida pra depois ≠ acumular tarefa pra agora — é não deixar problema fácil virar problema difícil.**

3. **SQL DDL em transação implícita do Supabase**. Migration v40 original: cleanup + constraint no mesmo arquivo. Constraint falhava → rollback de tudo (incluindo cleanup). Cada execução voltava ao estado inicial. **Solução: split em 2 arquivos** (v40a cleanup commita sozinho, v40b constraint depois). **Cravado:** se passo B depende de A persistir, e A+B em transação atômica que pode falhar em B, splittar é regra.

4. **Janelas de KPI financeiro são produto, não detalhe**. Filtro "Mês" calendário (1°-31°) destruía credibilidade nos primeiros dias do mês — dono via lucro pifio. Mudou pra rolling 30d. Dono pensa em "últimos 30 dias", não em "1° ao 31°".

5. **Trabalho real pré-lançamento é tornar o existente não-defectivo**. 30 commits, ~6 features novas, 24 bugs/calibragem/seed. Cliente fica anos não pelas features novas mensais, fica porque NÃO TEM dor de cabeça. Eduardo: *"tão importante quanto conseguir um cliente novo é deixar todo o sistema funcionando redondo pra ninguém pedir chargeback"*. **Filtro:** antes de feature nova, perguntar — quantos bugs eu fechei essa semana?

### Próximas 24h
1. **MP PF → PJ Impulso Digital** (antes de cobrar Olímpio)
2. **Demo pro Olímpio** (1° pagante AgendaPRO) — mandar credenciais
3. **Aura — repo GitHub** + push 4 commits locais aguardando
4. **Reunião Renato (Aura)** — apresentar plano de negócio

---

## 📅 SÁBADO 02 MAIO 2026 (madrugada) — VERBO S04 · AURA ESTRATÉGIA E ARSENAL

Sessão maratona ~12h contínuas. Aura Energy passou de "LP entregue" pra **operação estratégica completa desenhada**.

### Aura Energy v5 → v6 com fixes pós-auditoria CIC

**Auditoria CIC factual** identificou:
- Paleta `#fffef2` cream warm Aesop-derived confirmada (vs `#FAFAF6` antigo frio)
- Tipografia Suisse + Zapf-Humanist (Aesop) — pesos máx 500 cravados
- Container 1200px canônico
- Header mobile estava 89px (21% viewport iPhone) → reduzido pra 56-64px
- Bar Sistema Solar tava amarela → corrigida pra **verde neon `#10F19F`** (ancorando "ativo financeiro")
- Footer-CTA gigante full-bleed cravado antes do Footer (padrão Tesla/Whoop/Allurium)
- Dark zone Investimento + Janela Fio B aplicado (modelo Huberman zoneamento)
- Tap feedback `scale(0.98)` em :active mobile cravado

**Briefing privado `/briefing` no ar** — `auraenergy.vercel.app/briefing`:
- 10 cards mobile-first
- 15 perguntas estruturadas
- Submit via API `/api/briefing/submit` + Resend → email pro Eduardo
- Renato preenche em 30 min, sai plano de negócio em 1 dia
- Vira playbook reutilizável pra próximos clientes Impulso

### Diagnóstico CIC Brasfrio Solar (revelação estratégica)

`@brasfrio_engsolar` (operação atual do Renato via Brasfrio):
- **Conta semi-abandonada** — zero posts em mar-abr/26, último 03/02
- 1.887 followers · engagement médio **0,48%** (saudável: 2-3%)
- Apenas 15 posts totais
- **92% dos buracos estratégicos abertos** pra Aura ocupar
- **Reel com Renato em câmera** = 5,4× mais engajamento (50 likes vs média 9) — formato testado e nunca repetido
- Cobertura: Palmas + Paraíso + Luzimangues + Dianópolis + Colinas
- Marcas: Solis + Huawei (inversores) + Belenergy (fornecedor Goiânia)
- Doc canônico: `2-PROCESSAMENTO/aura-energy/DIAGNOSTICO-BRASFRIO-SOLAR.md`

**Conclusão:** Aura tem o palco vazio em Palmas. Não compete por atenção, abre categoria.

### Estrutura comercial 3 frentes (cravada)

| Frente | Modelo | Investimento Renato | Receita Impulso |
|---|---|---|---|
| **1** LP institucional | Setup pontual | R$ 1.200 (à vista PIX) | R$ 1.200 |
| **2** Instagram + Tráfego | Mensalidade (a discutir) | R$ 1.497-1.997/mês + Meta separado | R$ 1.497-1.997/mês ARR |
| **3** RadarPRO Solar Palmas | Performance (comissão) | 0% fixo | 5-7% sobre venda fechada via lead |

⚡ **RadarPRO opera 100% pela Impulso nos bastidores** — cliente NÃO compra o RadarPRO, só recebe leads. Diferencial competitivo invisível.

### Insight estratégico (Eduardo)

> *"Cliente entregue não é só receita pontual. É VALIDAÇÃO DE CATEGORIA inteira."*

Aura validou nicho **"solar mid-market BR em estado digital dormente"**. Próximo passo: RadarPRO prospecta a categoria em outras cidades (Araguaína, Imperatriz, Marabá, Belém). Cenário médio 15 clientes em 12 meses = R$ 287k/ano só de mensalidade Frente 2.

### Insight da DOR REAL do Renato

> *"Essa galera é mais ativa por trás das redes, mas isso que ta dando essa fricção no Renato — ele quer movimento, captar clientes através de canais de mídia"*

Renato NÃO compra LP. **Compra captação.** A Aura é resposta à dor de aquisição (network social esgotando + digital dormente). Pitch muda de "vender LP" pra **"ligar motor de aquisição"**.

### 8 princípios novos cravados (memory feedback)

1. **Mobile-first é lei Impulso** — Whoop+Allurium paradigma · viewport 375px first
2. **Referências BR-first em design system** — 3 BR + 2 universais mínimo · Reserva/Nubank/Westwing > Apple/Stripe
3. **Deep research do nicho = diferencial Impulso** — LP entregue com conhecimento técnico real do nicho · cliente sente "esse sistema entende meu mundo"
4. **Vender pra DOR real, não pro produto** — cliente NÃO compra o que você entrega, compra a dor que resolve
5. **RadarPRO arma proprietária Impulso** — opera nos bastidores, alimenta cliente · cliente NÃO compra o RadarPRO
6. **Cliente entregue = ICP categoria validado** — entrega valida nicho · RadarPRO prospecta categoria
7. **Não inventar termos contratuais sem mandato** — carta branca = decisão técnica · NÃO = cláusulas/SLA
8. **Idioma denso pra auto-memory Verbo** — glyphs (⚡→⊕Λ), arquivos compartilhados PT-BR pleno

### Aura é case-flagship Impulso 2026

Sistema de registro contínuo cravado:
- `STATUS-AURA-ENERGY.md` (visão geral)
- `DIAGNOSTICO-BRASFRIO-SOLAR.md` (competitivo)
- `CASE-AURA-LOG.md` (diário operacional — em construção)
- `METRICAS-AURA.md` (KPIs semanais — em construção)
- `PLANO-NEGOCIO-MARKETING-AURA.md` (estratégia — template em construção)

### Próximas ações (dia seguinte)

- [ ] Eduardo configura `RESEND_API_KEY` na Vercel `auraenergy` (1 min)
- [ ] Eduardo manda briefing pro Renato no WhatsApp
- [ ] Eduardo lança CIC com prompt pra criar form Tally de qualificação de lead
- [ ] Renato preenche briefing em 30 min
- [ ] Plano de negócio Aura completo entregue em 1-2 dias

---

## 📅 SEMANA 28 ABRIL → 01 MAIO 2026 — CONSOLIDAÇÃO AGENDAPRO + NOVO CLIENTE AURA ENERGY

Semana de execução cirúrgica. Tese da semana: **AgendaPRO deixa de ser "agenda" e vira ferramenta operacional completa do pequeno negócio de serviço.** Em paralelo, primeiro cliente Impulso Digital no nicho solar (Aura Energy / Renato Edson) entra em pipeline com LP de 20 seções construída em 1 dia.

### O dia "épico" — 01/05/2026 (37 commits no AgendaPRO)

Em ~16h Eduardo + Claude consolidaram 8 dimensões do AgendaPRO numa única sessão:

| # | Dimensão | O que entrou |
|---|---|---|
| 1 | **Cupom de Retorno** (sistema novo) | Detecta clientes sumidos há 40d, gera 1 cupom único `PROXX99` por cliente, 9 nichos × 3 templates de copy, link `/{slug}?cupom=` propaga pro booking, sticky bar de desconto, vincula com appointment usado |
| 2 | **Despesas + Lucro Real** | CRUD com 7 categorias (aluguel, produtos, salário, utilities, marketing, impostos, outros), card "Lucro Real" só na aba Mês (despesas mensais distorcem em hoje/7d) |
| 3 | **Análises avançadas** | Forecast do mês, comparativo mês anterior, dia da semana, hora pico, taxa cancelamento, novos vs recorrentes, métodos atual vs anterior, top serviços/profissionais, **6+ insights automáticos em texto** |
| 4 | **Cancelados subpágina** | Lista cancelados/no-show + cobrança via WhatsApp deep link + marcar pago (recuperação) |
| 5 | **Pagamento + 4 métodos** | PIX/Dinheiro/Cartão/Cortesia. Comissão por profissional baseada em PAGOS (não completed) |
| 6 | **3 templates de impressão QR** | Cartões A4 (4 por folha), cartaz A5 branded, display acrílico A6 com bleed + crop marks pra gráfica |
| 7 | **Sparkline + UX polishings** | SVG inline nos KPIs, FAB Despesa, "X esta semana" laranja+bold (urgência), "Em aberto" no lugar de "A receber", lista paginada+agrupada por data |
| 8 | **Lógica de nicho aplicada** | Sample names por nicho (barbearia=Lucas, salão=Camila, nail=Bianca, psicólogo=Marina), templates de cupom por nicho, presets de cor com badge "Indicada" |

**3 migrations em produção:**
- V34 — `appointments.paid_at` + `payment_method` + index parcial
- V35 — tabela `expenses` (RLS owner, trigger updated_at)
- V36 — tabela `coupons` (code UNIQUE, customer_id, validade) + função `generate_coupon_code`

**Decisões cravadas:**
- AgendaPRO é **educacional, não ERP de cobrança** — "A receber" virou "Em aberto", sem cobrança automática, sistema mostra dado pra dono decidir
- Lucro Real só faz sentido em escala mensal — não em "Hoje"/"7 dias"
- 40 dias = sumido (era 60) — coerente com ciclo de barbearia/nail (15-30d)
- Prefixo `PRO` no código do cupom — branding orgânico no link WhatsApp

**Doc de referência da sessão:** `agendapro/DIARIO-2026-05-01.md` no repo do AgendaPRO (todos os 37 commits organizados em 7 áreas).

### NOVO CLIENTE EM PIPELINE — Aura Energy (Renato Edson · Palmas-TO)

Renato é amigo do Eduardo, dono da Aura Energy (energia solar fotovoltaica). Em 01/05 pediu ajuda pra entrar no digital. Eduardo construiu uma **LP completa de 20 seções no mesmo dia** e apresentou à noite. Renato gostou, **mas não fecharam negócio porque o cenário era informal (estavam bebendo)**. Lead morno-quente.

**Stack da LP:** Next.js 16.2.4 + React 19 + Tailwind v4 + Inter font · Deploy `https://auraenergy.vercel.app`

**20 seções entregues:** Hero+Simulador interativo · Banner Visual cinematográfico · Marquee Tier 1 (Trina/Canadian/Jinko/Growatt/Sungrow…) · **Manifesto Aura** (3 pilares de marca) · Verticais com tabs (Residencial/Comercial/Rural/Bateria) · Como Funciona com fotos · Catálogo 4 Kits · Diferenciais · Equipe em Ação · Sobre Renato · **Compromisso 25 anos** (timeline antes/durante/depois) · Credenciais técnicas · Solar como Investimento (R$22k em 25a vs Poupança/CDI/Ibov/Solar) · Janela do Fio B (urgência real Lei 14.300) · Galeria · Mapa Palmas · Depoimentos · Recursos (5 artigos com fontes ABSOLAR/ANEEL) · FAQ · CTA Final + Botão flutuante WhatsApp.

**Status canônico do cliente:** `2-PROCESSAMENTO/aura-energy/STATUS-AURA-ENERGY.md` (tudo: contato, LP, 7 modalidades comerciais propostas, plano follow-up D+1→D+7, 6 informações pendentes a coletar, 8 itens placeholder pra trocar por dados reais).

### 5 princípios cravados pra LPs daqui pra frente (memory feedbacks salvos)

1. **SVG sempre, NUNCA emojis** em LPs/criativos premium — emoji em LP corporativa fica amador, derruba percepção
2. **Imagens reais, nunca vetor genérico** estilo unDraw/clipart — foto real de produto/contexto transmite autoridade
3. **Movimento e modernidade em LPs tech** — mesh animado, pulsos circuito, counter animado, fade scroll, glow, marquee — estática = amador
4. **Light premium é alternativa válida** ao dark tech default — pra empresa solar/luz/sol o off-white quente faz sentido temático (vibe Stripe + Linear v2 + Tesla Powerwall)
5. **Carta branca em projetos do segundo cérebro** — não pedir autorização entre etapas em LPs/criativos, decidir e entregar, ele ajusta. Velocidade > perfeição.

### Princípios já validados antes que continuam ativos

- "Se não gera resposta, está errado" (CORE_SYSTEM_V2) — vale pra qualquer copy
- Lógica de nicho em TUDO — sample names, copy, exemplos, presets
- UX faz dono se sentir inteligente, não burro — princípio inegociável
- Pensar sempre em uso em massa (filtro "100 clientes simultâneos")
- Produto completo antes de prospectar cliente — padrão Impulso

### Próximas 2 semanas (prioridade tática)

1. **D+1 a D+7 follow-up Aura Energy** — mensagem casual amanhã, ajustes na LP, material útil, pergunta direta de fechamento. Plano detalhado em `STATUS-AURA-ENERGY.md`.
2. **AgendaPRO pré-lançamento crítico:** migrar MP de PF (CPF Eduardo) → PJ (CNPJ Impulso Digital) + auditoria final (cap Clube Fundador 10, marca AgendaPRO no checkout MP, webhook URL sem www)
3. **Hero das LPs Impulso** — aplicar correções da lista do Eduardo (pendência da semana anterior)
4. **Performance AgendaPRO** — 4 fixes documentados pra atacar quando chegar 80 clientes ativos (agregação SQL, cache, paginação, sums em SQL)

---

## 📅 SEGUNDA 27 ABRIL 2026 — REFACTOR COPY (CORE_SYSTEM_V2)

Sessão maratona com GPT em 4 etapas iterativas (Mensagem 1 → Continuação → Pitch → Follow-up). Diagnóstico cravado: *"RadarPRO sabe muito sobre o lead mas fala como quem não sabe nada"*. A Mensagem 1 antiga ("Olá Gilson! Vi seu perfil no Instagram...") tava matando o funil porque parecia spam.

### Princípio cravado (IMPULSO_CORE_SYSTEM_V2.md)

> **"Não é sobre vender mais. É sobre fazer o lead responder."**

Regra máxima: se uma mensagem não gera resposta, está errada. Se uma copy serve pra qualquer lead, está errada.

### Estrutura nova obrigatória

| Etapa | Limite | Estrutura |
|---|---|---|
| Mensagem 1 (abertura) | 3 linhas | dado real do lead → consequência simples → pergunta direta |
| Continuação (após resposta) | 2 linhas | validação curta → pergunta que afunila |
| Pitch (após 2+ respostas) | 4 linhas | conectar com dor → solução → preço → CTA |
| Follow-up D+1 ou D+3 | 2 linhas | NOVO ângulo (não insistência) → pergunta direta |
| Follow-up D+7 | 2 linhas | "vou parar por aqui pra não encher / se fizer sentido depois, me chama" |

### Pricing AgendaPRO ajustado (decisão 27/04)

- **Antes:** Solo R$47 + setup R$147 / Equipe R$67 + setup R$197 → soava "barato/teste"
- **Agora:** **Solo R$67 / Equipe R$97 / sem setup** + Setup R$197 isento Clube Fundador → produto sério + recorrência real
- Frase de fechamento pesada: *"depois que fechar os 10, o setup de R$197 volta normal"*

### Aplicação em massa (commits af6d2f0 + 1dea1de + 036d674)

- ✅ 53 leads em `disparo-analises.ts` reescritos no formato 3 linhas com dado-âncora específico de cada
- ✅ Templates base em `mensagens.ts` (LP/Shopify/AgendaPRO/Combo): diagnósticos, pitches, fechamentos, call alinhamento, 7 objeções universais, follow-up timeline
- ✅ System prompt em `gemini.ts` com REGRAS DURAS no topo (sobrescreve regras antigas conflitantes)
- ✅ **1.100 leads do banco regenerados em massa** via `/api/regenerar-mensagens` (POST único, 230s, zero erros)

Resultado: sistema 100% alinhado ao CORE_SYSTEM_V2 antes de qualquer disparo.

### Erros proibidos (queima cara de IA)

- "Olá [NOME]!", "Oi [NOME], tudo bem?" + apresentação ("Eduardo aqui, Impulso Digital, sou de Palmas")
- "Vi seu perfil no Instagram"
- Elogios genéricos ("trabalho incrível", "que legal")
- "Posso te fazer uma pergunta rápida?"
- Estrutura Hormozi exposta (AMPLIA/ACELERA/REMOVE) com bullets e emojis 🔥⚡🪶🛡
- Mensagem que pode ser enviada pra qualquer lead = ERRADA por definição
- Palavras: exatamente, absolutamente, potencializar, alavancar, democratizar, excelência

### Próximo passo declarado

Disparar os 7 LPs em estudo (Monnaliza dentista, Ricardo Linares dentista, Verônica esteta, Christiana endocrino, Pedro Maciel nutri, Guilherme advogado, Gilson psicólogo) com mensagens cirúrgicas no formato novo.

Meta validação CORE_V2:
- 5+ respostas em 7 LPs = validado
- 10+ respostas = forte
- 15+ respostas = máquina pronta pra escalar

---

## 📅 SEMANA 20-26 ABRIL 2026 — SNAPSHOT CONSOLIDADO

A semana foi maratona estratégica. Saiu de prospecção manual no Maps pra **plataforma operacional de prospecção via Claude in Chrome com sistema calibrado em camadas**.

### O que mudou

**De → Para:**
- 14 leads → **53 leads com playbook customizado**
- 0 batches CIC → **12 batches rodados** (#1-#12)
- 0 cases mapeados → **17 concorrentes LP locais identificados**
- Pricing fixo R$499/R$599 → **Política "a partir de"** com tiers Padrão/Complexo/Premium + Combo LP+Shopify R$1.099
- Sistema sem inteligência meta → **Sistema aprende em camadas** (vacina de pitch, persona-clone, sub-personas, métodos-ouro)

### 2 métodos-ouro descobertos

**🥇 Google IA Overview por REGISTRO PROFISSIONAL** (batches #11/#12)
- Query: `"[REGISTRO]" "[REGIONAL]" [profissão] [cidade] instagram`
- 100% pré-validados em 90 segundos
- Aplicável: CRM-TO/RQE, CREF GO-TO, CRO-TO, OAB-TO, CRP-TO, CRBM-TO, CRFa, CREFITO

**🥈 Vetor /following/ do case ATIVO** (batch #10)
- Vasculhar lista /following/ do dono de case Impulso ativo
- Densidade 2x maior que Maps (4.2% rede curada)

### Lições META validadas

1. **Soluções amadoras = SINAL DE COMPRA, não objeção** (Linktr.ee/bio.site/sandwiche.me/contate.me/Lovable/eksy.me/msha.ke/clique.ink/Vizzoone/Canva site/abre.ai)
2. **Padrão >5k seg médicos = JÁ tem .com.br** — Tier S real é faixa 2k-4.5k
3. **GEO TRAP IA Overview** — cross-validar SEMPRE DDD do bio link
4. **Vacina de pitch** — toda recusa vira anti-pitch automático pros análogos
5. **Sub-personas LP fitness** — Apresentador (R$499+R$99) vs Consultor Online Recorrente (R$799+R$199)
6. **Hierarquia ICP Palmas DIFERE da nacional** — em cidade média Norte: Saúde Estética → Dentista → Médico RQE → Psi → Advogado → Fisio → Nutri (não infoproduto como nacional)
7. **Proposta SHOWCASE R$200 desconto** pra primeiro fechado de cada nicho ainda sem case real → vira case real do nicho

### Mapa de cases reais Impulso (CRÍTICO — só estes 4)

✅ **EV Suplementos Injetáveis** (Erlane) — saúde estética
✅ **GB Nutrition** (Gabriel) — Shopify + LP fitness
✅ **UrbanFeet** — loja própria (1.600+ pares vendidos em 3 anos)
✅ **Criativos do Céu** — infoproduto/membership

❌ **NÃO usar como case** (foram corrigidos do sistema 26/04 noite):
- Dra. Janaína Feitosa (não fechou)
- Dra. Irsnayra Mildred (não fechou)
- LocaJV (ainda não pronto)

### Mapa de concorrência LP local (17 mapeados)

| Nicho | Profissional | URL |
|---|---|---|
| Psicologia | Galvani Carvalho · Roberta Bazolli · Caroline Penido · Elda Milhomem · Vital Clínica | (5 domínios) |
| Nutrição | Sara Verner | saraverner.com.br |
| Dermatologia | Annalu Foganholo · Caio Formiga · Raquel Amashta | (3 domínios) |
| Ginecologia/Obstetrícia | Pollyana Macedo | pollyanamacedo.com.br |
| Endocrinologia | Marcela Pitaluga · Elaine Ferreira (cardio) | (2 domínios) |
| Mastologia | Tatiana Ferrari Jacinto · Juliana Souza | (2 domínios) |
| Urologia | Hamilton Franco | drhamiltonfranco.com.br |
| Oftalmologia | Henrique de Deus | drhenriquededeus.com.br |
| Ozônio/Injetáveis | Ozônioterapia Palmas | ozonioterapiapalmas.com.br |

### Stack operacional fim da semana

- **RadarPRO em produção** com /Painel + /disparo + /Lições + 53 leads playbook
- **WhatsApp Business 63 99292-0080** ativo
- **Auto-memory** com 3 memórias persistentes novas (método persona-clone, vacina de pitch, pipeline CIC consolidado)
- **Roteiro consolidado de disparo** (`ROTEIRO-DISPARO-26-04.md`) com semáforo de pendências
- **Perfil-base de marca Impulso v1** (`perfil-marca-impulso-digital.md`) pronto pra Claude Design
- **4 carrosséis Insta briefados** (`CARROSSEIS-IMPULSO-INSTA-V1.md`) pra produzir hoje
- **Template LP Personal/Nutri v1** (`TEMPLATE-LP-PERSONAL-NUTRI.md`) com sub-personas A vs B

### Dailies da semana
- [[2026-04-20]] — daily
- [[2026-04-22]] — daily
- [[2026-04-23]] — daily (história pessoal compartilhada)
- [[2026-04-24]] — daily (RadarPRO sistema completo + Tally)
- [[2026-04-25]] — daily (Arsenal Psicológico + 5 batches CIC iniciais + market intelligence)
- [[2026-04-26]] — daily (sessão maratona: batches #6-#12 + correções + carrosséis)

### Próximas 2 semanas (prioridade tática)

1. **HOJE/AMANHÃ:** produzir 4 carrosséis no Claude Design + criar perfil @impulsodigital063
2. **Semana 27/04 - 03/05:** disparar primeiros 5-10 leads PRONTOS do roteiro (Douglas, Monnaliza, Ricardo Linares, Pedro Maciel, Christiana, Ingrid Sales, Hollana, Ioana, Daniel Janczuk, Hugo Rossoni)
3. **Aplicar IA Overview em outros nichos:** OAB advogados, CRP psicólogos, CRO dentistas (batch #13+)
4. **Conversas pendentes Eduardo:** Erlane (permissão case + intros), Gabriel (intros pra Marcel Freitas, Sabor da Terra, Nutri+, Atila Santos)

---

## 🏗 O ECOSSISTEMA IMPULSO DIGITAL (atualizado 26/04/2026)

A marca-mãe é **Impulso Digital**. Tudo orbita em volta dela.

```
                    IMPULSO DIGITAL (marca-mãe)
                  Agência de criação digital
                           |
        +------------+-----+-------+-------------+
        |            |             |             |
    AgendaPRO    RadarPRO    ImpulsoDesign    MPN-On
    (SaaS)       (Interno)   (Interno)       (Curso)
    Ativo        Ativo       Ativo           Ativo
```

### **IMPULSO DIGITAL** (Agência — núcleo)
- 🎯 **Proposta:** Landing pages, lojas Shopify, sites Next.js, consultoria
- 🌐 impulsodigital063.com
- 🏢 CNPJ: 64.585.949/0001-83
- 🐙 **GitHub:** ImpulsoDigital063/impulso-digital-nextjs

**Ofertas oficiais — política "a partir de" (atualizada 27/04/2026):**

| Oferta | Pricing oficial | Tiers internos |
|---|---|---|
| **Landing Page** | a partir de R$499 + R$99/mês | Padrão R$499 / Complexo R$799-999 / Premium R$1.297+ |
| **Loja Shopify** | a partir de R$599 + R$99/mês | Padrão R$599 / Complexo R$899-1.199 / Premium R$1.497+ |
| **Combo LP + Shopify** | a partir de R$1.099 | Sem desconto fake — vantagem é OPERACIONAL (1 briefing, 1 call, prazo integrado em 10-14 dias úteis) |
| **AgendaPRO/SmartAgenda Solo** | **R$67/mês** (1 + 1 colaborador) | Sem setup, sem fidelidade |
| **AgendaPRO/SmartAgenda Equipe** | **R$97/mês** (até 5 profissionais) | Sem setup, sem fidelidade |
| **Setup AgendaPRO** | **R$197** (cobrado a partir do cliente 11+) | **Clube Fundador (10 primeiros): setup R$197 ISENTO pra sempre** |
| **Site Next.js** | a partir de R$799 | Institucional/multi-página (entrega 10-15 dias) |

> ⚠️ **PRICING AGENDAPRO ATUALIZADO 27/04/2026:** versão antiga era Solo R$47 + setup R$147 / Equipe R$67 + setup R$197. A nova política tira fricção de entrada (sem setup pra ninguém nesse início porque sem Z-API a integração é mínima) + sobe mensalidade pra refletir valor real. Frase de fechamento pesada validada por GPT: *"depois que fechar os 10, o setup de R$197 volta normal"*. Nunca falar R$47/R$147 em copy nova — gera inconsistência que destrói confiança.

**🎯 ANCORAGEM REAL no pitch (validada CIC #6):** *"LP profissional no Brasil custa R$2.000 a R$15.000 (DIVIA, Odonto Pages, Webgui). Eu cobro a partir de R$499 porque sou local de Palmas, sem overhead de SP. Não é promoção temporária — é meu pricing real."*

**🚨 REGRA DE PRICING:** NUNCA cravar valor fixo em mensagem de venda. Use "a partir de" + chamar pra call pra cotação exata. Complexidade (catálogo, integrações, idiomas, ERP, automações) é avaliada na call de alinhamento e o valor final é cotado lá.

**Bônus stack categorizado Hormozi com VALOR DE MERCADO REAL:**
- **LP** — total bônus de mercado: ~R$2.400 (3 artigos SEO R$300, protótipo 20min R$500, hospedagem vitalícia R$600, garantia 7d R$300, suporte 30d R$200, etc)
- **Shopify** — total bônus de mercado: ~R$3.600 (20 produtos R$300, tema MPN R$1.000, Yampi R$500, Melhor Envio R$300, etc)

**Site próprio (prova viva — 16 componentes):**
Hero · Sobre · 4 Serviços · Cases (UrbanFeet, Gabriel, evsuplementos, criativosdoceu) · Processo (4 passos) · Depoimentos · FAQ · Blog (3 posts SEO) · CTA WhatsApp · Footer · Planos · Garantia · Diferenciais · Time · Contato

**Blog SEO (3 posts):**
1. Como escolher entre LP, loja e site pra seu negócio
2. Por que loja física precisa ter Shopify (caso UrbanFeet)
3. O erro que quebra a conversão da sua LP (e como corrigir)

**Infraestrutura de venda (ferramentas internas):**
- **RadarPRO** — prospecta + gera playbook + envia WhatsApp (ver seção RadarPRO)
- **ImpulsoDesign** — gera criativos no padrão Impulso pra orgânico e tráfego
- **Custom GPT "Agente Eduardo - Marketing"** — tira dúvida de copy e estratégia em tempo real
- **WhatsApp Business 63 99292-0080** — número oficial de suporte (ativado 16/04)
- **MEGA-CLAUDE.md** — memória do ecossistema em cada atendimento

**Cases (prova real):**
- **UrbanFeet** — R$37.705,24 em 90d · +1.600 pares em 3 anos (prova máxima, dropshipping nacional)
- **Gabriel / GB Nutrition** — R$300 consultoria (15/04) — 1ª venda da semana, vira case gravado pra criativos
- **evsuplementos** — loja Shopify completa
- **criativosdoceu** — Ver memória project_criativosdoceu.md (hierarquia de marcas + stack)

**Pipeline ativo (status 01/05):**
- 🟡 **Aura Energy** (Renato Edson · Palmas-TO · energia solar fotovoltaica) — LP de 20 seções construída em 01/05 e apresentada no mesmo dia. Lead morno-quente, follow-up D+1 a D+7 desenhado. Stack: Next.js 16 + Tailwind v4. Deploy: `https://auraenergy.vercel.app`. Status canônico: `2-PROCESSAMENTO/aura-energy/STATUS-AURA-ENERGY.md`. Será o primeiro case Impulso Digital no nicho solar se fechar.

**Playbook de venda (4 passos — `PLAYBOOK-IMPULSO-DIGITAL-VENDA.md`):**
1. Prospecção via RadarPRO (lead quente + playbook pronto)
2. Abordagem WhatsApp com copy do playbook personalizado
3. Consultoria grátis (8 perguntas estruturadas) + proposta enxuta
4. Fechamento com urgência real (3 vagas no mês) + follow-up D+3/5/7

**Projeções 2026 (pipeline):**
- 7 lojas Shopify/mês × R$599-899 = R$4k-6k/mês
- 3 LPs/mês × R$499-699 = R$1,5k-2k/mês
- 1 site Next.js/mês × R$1.200-1.500 = R$1,2k-1,5k/mês
- Total projetado: R$50k-126k/ano

**1ª venda da semana:** Gabriel / GB Nutrition — R$300 consultoria (15/04/2026). Vira case gravado: criativos de marketing do Impulso filmados no processo real de lançamento do cliente.

**Padrões Impulso Digital (validados):**
- Consultoria grátis + urgência real = 95% conversão com lead quente
- Prototype funcional > mockup estático (Next.js rodando fecha mais)
- Valor empilhado antes do preço (mostrar concorrente primeiro)
- Indicação + brevidade (8 perguntas > 25)

---

### **AGENDAPRO** (SaaS de agendamento — potencial recorrente)
- 🎯 **Proposta:** App que otimiza a agenda do profissional — chega de perder hora no WhatsApp
- 🧑‍💼 **Para quem:** Qualquer serviço com agendamento (barbearia, nail, psicólogo, personal, estética)
- 💰 **Planos (revisão oficial 27/04/2026):**
  - **Solo R$67/mês** (1 profissional + 1 colaborador) — sem setup, sem fidelidade
  - **Equipe R$97/mês** (até 5 profissionais) — sem setup, sem fidelidade
  - **Setup oficial R$197** (cobrado a partir do cliente 11+) — Clube Fundador (10 primeiros) pegam ISENTO pra sempre
  - Comparativo mercado: ZenPlace/Trinks/Booksy R$200-500/mês com fidelidade anual → SmartAgenda 4-7x mais barato sem fidelidade
  - **Garantia 7 dias** (substitui trial antigo de 14 dias) — testa, se não fizer sentido, devolvo
- 🔧 **Stack:** Next.js 16 + Supabase (Auth+DB+Realtime+RLS) + Resend (email) + Z-API (WhatsApp — **não Baileys!**) + Mercado Pago (preapproval) + Vercel (deploy+cron)
- 🌐 **Produção:** **agendapro.net.br** + `www.agendapro.net.br` (canônico) · `agenda-pro-seven.vercel.app` (alias Vercel default)
- 🐙 **GitHub:** ImpulsoDigital063/AgendaPRO
- ⚠️ **Vercel project canônico:** `agenda-pro` (COM hífen). Projeto duplicado `agendapro` (sem hífen) foi removido em 01/05/2026 noite — era zumbi sem env vars que rodava em paralelo herdando do mesmo repo GitHub. Nunca mais criar 2 projetos pro mesmo repo.

**14 migrations no Supabase (todas em produção):**
- V1-V5: schema base (profiles, services, appointments, availability, clients)
- V6: multi-negócio via `business_id`
- V7: programa de fidelidade (points, rewards, redemptions)
- V8: lista de espera (`waitlist` com RLS restrito)
- V9: **trigger anti-overbooking** (`check_appointment_overlap`)
- V10: cascade delete (profissional deletado remove agendamentos órfãos)
- V11: **subscriptions** (trial/grace/public_blocked/data_delete_at) — APLICADA
- V34 (01/05): **`appointments.paid_at` + `payment_method`** + index parcial
- V35 (01/05): **tabela `expenses`** (7 categorias, RLS owner-only, trigger updated_at)
- V36 (01/05): **tabela `coupons`** (code UNIQUE, customer_id, expires_at) + função `generate_coupon_code`

**2 tipos de perfil:**
- `admin` — dono do negócio, vê tudo, configura serviços/profissionais/horários
- `profissional` — profissional cadastrado, vê só os próprios agendamentos

**8 abas do painel admin:**
1. Dashboard (resumo do dia + KPIs em tempo real)
2. Agenda (grade visual + criar/editar appointment)
3. **Financeiro** (Realizado / Em aberto / Lucro Real do Mês / Sparkline / Subpáginas: Despesas / Cancelados / Análises)
4. Serviços (CRUD com preço/duração)
5. Profissionais (CRUD + horários + comissão configurável)
6. Clientes (CRM com tier badges VIP/Novo/Sumido + histórico + ajuste de pontos + Cupom de Retorno)
7. Fidelidade (4 fontes de pontos: agendamento, indicação, pontualidade, Google review + recompensas)
8. Aparência (logo, cor primária, banner público, presets de cor com badge "Indicada" por nicho)

**4 landings segmentadas:** Barbearia · Salão · Clínica · Personal (copy+hero adaptados)

**8 dimensões do produto (consolidadas em 01/05):**
1. **Agendamento** — cliente agenda 24h sem WhatsApp, lembrete D-1/H-1, lista de espera, Google review
2. **Gestão financeira** — receita, comissão automática, despesas (7 categorias), Lucro Real só na aba Mês, 4 métodos pagamento
3. **Análises** — forecast do mês, comparativo mês anterior, dia da semana, hora pico, taxa cancelamento, novos vs recorrentes, top serviços/profissionais, **insights automáticos em texto natural**
4. **Reativação** — Cupom de Retorno automático (detecta sumido 40d → 1 cupom único `PROXX99` → WhatsApp deep link)
5. **Fidelização** — pontos por agendamento + indicação + pontualidade + Google review (4 fontes)
6. **Organização** — múltiplos profissionais, horários, pausas, serviços, cron auto-complete
7. **Marketing** — QR Code branded com 3 templates de impressão (cartões A4, cartaz A5, display acrílico A6+bleed), página pública customizável, link curto Insta
8. **Lógica de nicho** aplicada em TUDO — cores indicadas por nicho, sample names (Lucas/Camila/Bianca/Marina), templates de cupom, sugestões de serviço

**Features anteriores (mantidas):**
- Programa de fidelidade (pontos configuráveis + ranking + recompensas)
- Lista de espera automática (cancelamento → próximo da fila)
- Link de indicação (URL única por cliente, pontos pro indicador e indicado)
- Google Reviews (badge + pontos por avaliar)
- Cadastro multi-negócio (`/cadastro` sem tocar SQL)

**WhatsApp transacional (Z-API — `src/lib/whatsapp.ts`):**
- Env vars: `ZAPI_INSTANCE` · `ZAPI_TOKEN` · `ZAPI_CLIENT_TOKEN`
- `notifyBarber` — novo agendamento pro dono/profissional
- `notifyClient` — confirmação pro cliente
- `sendReminderWhatsApp` — lembrete D-1 (24h antes) e H-1 (1h antes)

**Cron Vercel:**
- Lembrete D-1: varre agendamentos de amanhã, dispara WhatsApp+email
- Lembrete H-1: varre agendamentos da próxima hora, dispara WhatsApp
- (Planejado) Cron de billing: valida status MP diariamente, move entre trial→active→grace→blocked

**Segurança endurecida (16/04 — auditoria completa):**
- 3 agentes paralelos (API + client + auth)
- 15+ vulnerabilidades corrigidas:
  - Tokens com HMAC + `timingSafeEqual` (anti timing attack)
  - XSS em emails Resend (escape no template)
  - IDOR em endpoints de appointment/cliente
  - Rate limiting in-memory por IP em rotas públicas
  - CSP headers estritos
  - RLS restritivo em `clients` e `waitlist`
- **Trigger SQL anti-overbooking** (V9): impossível agendar horário conflitante mesmo bypassando o front
- Salvo como padrão em `3-RETENCAO/padroes/auditoria-seguranca-saas.md`

**Billing estruturado (16/04):**
- Mercado Pago via `preapproval` (recorrência real, não só checkout único)
- 4 API routes:
  - `POST /api/billing/checkout` — cria preapproval e retorna URL do MP
  - `GET /api/billing/status` — consulta estado atual da assinatura
  - `POST /api/billing/cancel` — cancela preapproval
  - `POST /api/webhooks/mercadopago` — recebe eventos (payment.created, subscription.updated, etc)
- Estados: `trialing` → `active` → `past_due` (grace 5d) → `public_blocked` (dia 12) → `data_delete_pending` (90d)

**Pendências críticas pré-lançamento (status 01/05):**
- [ ] **Migrar MP de PF (CPF Eduardo) → PJ (CNPJ Impulso Digital)** — pagamentos hoje caem na conta CPF
- [ ] Auditoria final: cap Clube Fundador 10 (hardcoded em `cadastro/route.ts:107`), marca AgendaPRO no checkout MP, webhook URL sem `www.`
- [ ] Tela `/admin/bloqueado` quando `public_blocked = true`
- [ ] Cron diário de verificação de status

**Pendências menores (documentadas):**
- [ ] Trocar fotos placeholder na Galeria/Equipe quando cliente piloto (Olímpio) gravar
- [ ] Cancelar cupom não enviado (UI pra deletar antes de enviar WhatsApp)
- [ ] 4 fixes de performance documentados pra atacar quando chegar 80 clientes ativos
- [ ] Avaliação pós-agendamento (ideia validada, implementar com 20+ agendamentos reais)

**Status hoje (01/05):** **Operacionalmente completo.** 8 dimensões consolidadas em 37 commits no único dia 01/05. Pronto pra entregar pro primeiro cliente real (Barbearia Olímpio). Bloqueio único: migrar MP CPF→CNPJ.

---

### **RADARPRO** (Plataforma de prospecção operacional — interno, potencial SaaS)
- 🎯 **Proposta (hoje):** Sistema interno + plataforma de prospecção via Claude in Chrome com 53 leads playbook customizado pronto pra disparar
- 🎯 **Proposta (futuro):** SaaS público pra agências/vendedores/infoprodutores
- 🧑‍💼 **Por que existe:** Prospectar a frio é lento e desorganizado. RadarPRO orquestra (a) Claude in Chrome pra inteligência externa qualificada, (b) Gemini/Claude/OpenAI pra geração de mensagens, (c) banco com leads + análises customizadas, (d) UI /disparo com playbook pronto + botão WhatsApp + botão DM Insta.
- 🔧 **Stack:** Next.js 16 + Turso (libSQL) + Gemini 2.5-flash + Claude API + OpenAI + Baileys (WhatsApp local) + Playwright (scraping Gmaps local) + **Claude in Chrome** (inteligência externa via browser autenticado)
- 📊 **Estado (26/04 noite):** ~190 leads totais no banco · 53 com playbook customizado · 12 batches CIC rodados · 17 concorrentes LP mapeados · 2 métodos-ouro de prospecção descobertos
- 🌐 **Produção:** radarpro-inky.vercel.app
- 🐙 **GitHub:** ImpulsoDigital063/radarpro

**Schema do banco (Turso — `lib/db.ts`):**
- Tabela `leads` (25+ campos): nome, whatsapp, cidade, segmento, site, instagram, avaliacao, num_avaliacoes, horario_funcionamento, endereco, status (novo/qualificado/contactado/respondeu/fechado/morto), score, ia_analise, tem_site, tem_instagram, tem_whatsapp, status_operacional, periodo_analisado, **script_json** (cache do playbook completo), **termometro** (quente/morno/frio), **termometro_razao**, **termometro_atualizado_em**, created_at, updated_at
- Tabela `buscas` (histórico de buscas no Gmaps)
- Tabela `mensagens_whatsapp` (registro automático in/out via Baileys)

**11 ações de IA no `/api/ai/route.ts`:**
1. `gerarAbordagem` — primeira mensagem de abordagem personalizada
2. `diagnosticarNegocio` — diagnóstico do estado digital do lead
3. `analisarConteudoSite` — análise do site/conteúdo existente
4. `calcularScoreIA` — score de 0-100 pra priorização
5. `gerarFollowup` — mensagens de follow-up (dias 3/5/7/30)
6. `gerarPlanoHoje` — plano de ação do dia com leads prioritários
7. `gerarScriptCompleto` — **playbook com 11 seções** (cached em `script_json`)
8. `classificarTermometro` — quente/morno/frio + razão
9. `chat` — chat livre com contexto do lead
10. Cache estratégico pra não reprocessar
11. SYSTEM_PROMPT global com 3 produtos, 4-msg script, 4 objeções padrão

**Playbook por lead (11 seções geradas pelo `gerarScriptCompleto`):**
1. Abordagem inicial · 2. Diagnóstico · 3. Pitch personalizado (3 versões por tipo) · 4. Dor específica · 5. Resolução proposta · 6. Arma de vendas por segmento · 7. Ancoragem de preço · 8. Prova social segmentada · 9. 4 objeções prontas com resposta · 10. Fechamento com 3 opções de horário · 11. Follow-up timeline (dias 3/5/7/30)

**Melhor horário por segmento (`lib/horarios.ts` — 8 categorias heurísticas):**
- Beleza (salão/nail/estética): seg-qua 9-11h
- Saúde (nutri/psico/fisio): seg-qua 11-13h
- Odonto: ter-qui 14-17h
- Barbearia: seg-qua 10-12h, ter-qui 15-18h
- Academia/personal: seg-qua 6-9h ou 17-19h
- Clínica veterinária: ter-qui 10-12h
- Pet shop: qua-sex 14-17h
- Default (outros): seg-qui 10-12h, 14-16h

**Arma de vendas por segmento (matching automático):**
- Loja física sem vendas online → Shopify + motoboy (Melhor Envio + Yampi)
- Nutricionista → LP + blog SEO (3 posts)
- Barbearia → AgendaPRO + badge Google Reviews
- Salão de beleza → AgendaPRO + programa de fidelidade
- Clínica → AgendaPRO + lembrete D-1 automático
- Restaurante → site + cardápio digital

**Integração WhatsApp (`lib/whatsapp.ts` — Baileys singleton):**
- QR Code gerado via endpoint, renderizado no painel
- Sessão persistida em disco (auto-reconnect no restart)
- Envio direto com histórico em `mensagens_whatsapp`
- Status polling (conectado/desconectado/aguardando QR)
- **Trigger automático:** ao receber mensagem in, status do lead vira `respondeu` + `termometro` pula pra `morno`/`quente`

**Scraping (stack pesada):**
- Playwright pra Google Maps (listagens por segmento+cidade)
- axios + cheerio pra sites e Instagram (Vercel-friendly)
- Extração: nome, endereço, avaliação, número de avaliações, telefone, horário de funcionamento, site, Instagram

**Ambição 7 dias:** Ser o primeiro cliente do RadarPRO a lucrar com ele. Usar em produção, fechar 2-3 vendas, virar case da própria ferramenta.

### 🔥 EVOLUÇÃO 20-26/04 — RadarPRO virou plataforma operacional de prospecção

**12 batches CIC rodados** (Claude in Chrome — inteligência externa via browser autenticado):
- #1 Mapa concorrência Palmas (10 agências)
- #2 + #2.5 v2 Moda feminina + multi-nicho (24 leads Shopify)
- #3 Saúde estética / nicho Erlane (5 leads LP)
- #4 Multi-canal Shopify (validação cruzada Google Business)
- #5 Caça LP multi-fonte (8 leads, 5 análises)
- #6 Médicos RQE + dentistas + advogados (RECORDE 7 Tier S)
- #7 Clone-Erlane (3 leads paramédicas)
- #8 Cluster farmac/biomédica esteta premium (6 leads + VACINA DE PITCH)
- #9 Clone-GB Nutrition Shopify (8 leads incluindo Sabor da Terra 45k seg)
- #10 LP fitness via /following/ Gabriel (vetor /following/ validado)
- #11 Educação física via IA Overview CREF (método-ouro #1 descoberto)
- #12 Médicos especialistas via IA Overview CRM-TO (6 Tier S premium)

**Pool atual: 53 leads com playbook customizado completo** distribuídos em Tier A pos 1-53. Categorias: dentistas estéticos (4), médicos especialistas RQE (11), advogados (3), psicólogos (3), nutris (4), fisio (1), fono (1), farmac/biomédicas estetas (8), suplementos (5), moda feminina (5), perfumaria (1), semi-joias (1), móveis design (2), comida fit (2), roupa fitness (3), equipamento (2), personal trainers (6).

**Sistema calibrado em CAMADAS** (lições META integradas ao SYSTEM_PROMPT):
1. Hierarquia ICP Palmas (70% saúde+estética / 20% jurídico / 10% demais)
2. Ancoragem real R$2.000-15.000 mercado nacional (DIVIA, Odonto Pages, Webgui)
3. Filtro Tier S automático (4 critérios: registro + 4.8★/30 reviews + zero .com.br + bio amadora)
4. Soluções amadoras (Linktr.ee/bio.site/sandwiche.me/contate.me/Lovable/eksy.me/msha.ke/clique.ink/Vizzoone/Canva site/abre.ai) = SINAL DE COMPRA
5. Sub-personas LP fitness (Apresentador R$499+R$99 vs Consultor Online Recorrente R$799+R$199)
6. Pitch Shopify ≠ Pitch LP (Shopify argumenta CONVERSÃO 24/7, LP argumenta autoridade)
7. Vacina de pitch (lead recusa → padrão extraído → anti-pitch automático pros análogos)
8. Padrão >5k seg médicos = JÁ tem .com.br (Tier S real é 2k-4.5k)
9. GEO TRAP IA Overview (cross-validar SEMPRE DDD do bio link)
10. Proposta SHOWCASE R$200 desconto pra primeiro fechado de cada nicho virar case

**2 métodos-ouro de prospecção descobertos:**

**🥇 Google IA Overview por REGISTRO PROFISSIONAL** (#11 e #12)
Query: `"[REGISTRO]" "[REGIONAL]" [profissão] [cidade] instagram`
- 100% pré-validados em 90 segundos
- Aplicável: CRM-TO/RQE, CREF GO-TO, CRO-TO, OAB-TO, CRP-TO, CRBM-TO, CRFa, CREFITO

**🥈 Vetor /following/ do case ATIVO Impulso** (#10)
Densidade 2x maior que Maps. Aplicado em GB Nutrition (Gabriel) — 6 leads em 35 min.

**Cases reais Impulso (apenas 4 confirmados — ❌ Janaína, Irsnayra, LocaJV NÃO são clientes):**
1. EV Suplementos Injetáveis (Erlane)
2. GB Nutrition (Gabriel)
3. UrbanFeet (loja própria)
4. Criativos do Céu

**Mapa de concorrência LP local (17 mapeados):** psi (5), dermato (3), gineco (1), endocrino (2), masto (2), uro (1), oftalmo (1), nutri (1), ozonioterapia (1).

**UI /disparo evoluída (26/04):**
- Bug fix telefone null (API + 4 botões WhatsApp)
- Botão DM Insta como alternativa (1 clique = abre conversa + copia mensagem adaptada pra clipboard)
- `adaptarMensagemDm()` remove identificação formal (handle do Eduardo já identifica no Insta)
- Visual condicional: "Pegar tel" cinza vs "DM Insta" gradient Aurora
- Aviso amarelo: "DM funciona melhor depois do pre-engajamento Insta D-1"

---

### **IMPULSODESIGN** (Painel de criação de conteúdo — interno, potencial SaaS)
- 🎯 **Proposta:** Gerar conteúdo (carrosséis, posts) no padrão Impulso Digital em minutos, não horas
- 🧠 **Por que existe:** Design é sua maior lacuna pessoal. Canva tava consumindo horas pra cada post. O ImpulsoDesign resolve isso com IA + padrão visual treinado.
- 🔧 **Stack:** Next.js 16 + Upstash Redis + Anthropic (Haiku 4.5) + R2 + Replicate + Unsplash/Pexels + Remove.bg
- 🌐 **Produção:** https://impulsodesign.vercel.app
- 🐙 **GitHub:** ImpulsoDigital063/impulsodesign
- 💰 **Custo operacional:** ~R$5-20/mês (Haiku ~R$0,35 por carrossel, volume 50-200/mês)

**Deploy (16-17/04):**
- Migração FS local → Upstash Redis (Vercel é read-only)
- `middleware.ts` → `proxy.ts` (Next 16 breaking change)
- Segundo cérebro via GitHub Contents API + cache 5min
- Sentinel `\u0000<<IA_ERROR>>` pra distinguir erro de conteúdo em stream
- Cost-tracker com hard cap de $10 programado
- 11 env vars na Vercel, região `gru1`, deploy em 32s

**Pendente hoje (17/04):**
- Revogar/recriar key Anthropic (401 atual)
- Redesign do editor em modo wizard estilo Canva
- Limpar carrossel corrompido com JSON do erro 401

**Insight grande desbloqueado:** "Claude na plataforma" ≠ "Claude API". MAX te dá CLI no PC. Pra app rodar IA em produção, é API key separada com crédito separado.

---

### **MPN-ON** (Curso — vira plataforma de ensino)
- 🎯 **Proposta atual:** Crie seu primeiro negócio online sem saber programar
- 🎯 **Visão futura:** **Plataforma de ensino completa** — não só Shopify
- 🧑‍🎓 **Para quem:** Quem quer renda digital do zero, sem audiência, sem código, sem guru
- 💰 Preço: R$297 à vista (Pix) ou 3x R$105 (cartão) | Âncora: R$4.985
- 🌐 Landing: https://www.meuprimeironegocio.online/
- 🛒 Checkout: https://pay.kiwify.com.br/JNVhxLE
- 🔗 Plataforma: Kiwify (vendas) + Vercel (landing Next.js)

**Módulos hoje:**
- Módulo 1: Mentalidade (roteiro pronto, **não gravado** — pendente desde 11/04)
- Módulo 2: Criação de loja Shopify — 29 aulas, 8+ horas (**GRAVADO** e publicado)
- Módulo 3: UrbanFeet ao vivo (roteiro pronto, não gravado)
- Módulo 4: Tráfego e prospecção (roteiro pronto, não gravado)

**Visão futura — MPN vira plataforma de ensino com MUITOS cursos:**
- 🛒 **Shopify / negócios locais** (hoje — Módulo 2 gravado, módulos 1/3/4 pendentes)
- 🎨 **Design** (padrão Impulso que o ImpulsoDesign já automatiza)
- 💻 **Criação de apps e sistemas** (sua jornada real — AgendaPRO, RadarPRO, ImpulsoDesign)
- ⚙️ **Criação de SaaS** (arquitetura, billing, multi-tenancy, auditoria, deploy — tudo que você aprendeu construindo o AgendaPRO)
- 🤖 **IA aplicada a negócio** (Claude API, Gemini, agentes, automação — o que você usa hoje no dia a dia)

Cada curso nasce do que você já está vivendo na pele. **Autoridade real, não copiada.** Não é "teoria que vi em lugar nenhum" — é "eu fiz isso mês passado, te mostro como".

**Modelo do MPN-On como plataforma:**
- Curso de entrada (hoje: Shopify) dá a chave do ecossistema
- Cursos adicionais vendidos como add-on ou assinatura anual
- Comunidade com os alunos onde o ecossistema inteiro (AgendaPRO, RadarPRO, ImpulsoDesign) é usado na prática
- O diferencial é o **alinhamento** — quem faz o MPN usa as ferramentas Impulso, vira parte do ecossistema

**Status tráfego (17/04):**
- Utmify integrado (webhook Kiwify ativo, token `uqjntkg1w5e`)
- Pixel Utmify: `69dd2c766866c6e37b394783`
- Pixel Meta: `1457330212732267` — API Conversões conectada
- UTMs corrigidos nos 3 criativos
- Campanha Tráfego ativa, Campanha Conversões - Lookalike 1-3% pendente (aguardando confirmar Purchase rastreando)
- Investimento Meta Ads acumulado (09-12/04): R$140,72
- Conversão ainda baixa — em diagnóstico

**Bônus inclusos:**
- Tema MPN exclusivo (4 tipos de frete, WhatsApp, otimizado) — R$1.000
- Contato fornecedor nacional validado (3 anos UrbanFeet)
- 29 PDFs de apoio (1 por aula) — R$197
- Módulo UrbanFeet ao vivo (800+ imagens, 100+ modelos) — R$1.497
- Scripts de prospecção para negócios locais
- Garantia: 7 dias sem perguntas

---

### **URBANFEET** (operação base — prova de conceito)
- Loja de dropshipping nacional, ~30 min/dia
- 90 dias: R$37.705,24 | +1.600 pares em 3 anos
- Usada como prova real dentro do MPN-On
- 🌐 urbanfeetbr.store | @urbanfeet.store

---

## 📊 NÚMEROS REAIS (Sua credibilidade)

| Métrica | Número | Contexto |
|---------|--------|---------|
| **UrbanFeet 90d** | R$37.705,24 | Prova máxima |
| **Pares UrbanFeet** | +1.600 | 3 anos |
| **Meta 2026** | R$1.000.000 | Visão ativa |
| **1ª venda da semana** | R$300 (Gabriel/GB Nutrition) | 15/04/2026 |
| **Leads RadarPRO** | 561 total / 144 quentes | 15/04 |
| **Meta Ads investido** | R$140,72 | 09-12/04 |
| **Lojas/mês Impulso** | 7 lojas | Com prática |
| **Clientes Impulso histórico** | 60+ | Total |
| **MPN Preço** | R$297 | Ancoragem R$4.985 |
| **AgendaPRO Solo** | R$67/mês (sem setup) | Revisado 27/04 |
| **AgendaPRO Equipe** | R$97/mês (até 5 prof, sem setup) | Revisado 27/04 |
| **AgendaPRO Setup** | R$197 (isento Clube Fundador 10 primeiros) | Volta pros não-fundadores depois dos 10 |
| **ImpulsoDesign custo op** | R$5-20/mês | Haiku 4.5 |
| **Vulns AgendaPRO corrigidas** | 15+ | Auditoria 16/04 |

---

## 💬 TON DE VOZ (Sempre respeitar)

### **Características**
- Direto, sem frescura (conversa como amigo)
- Autêntico (sem "democratizar", "exatamente")
- Números reais SEMPRE (nunca aproximações)
- Anti-guru (mostra, não vende sonho)

### **Expressões suas**
"Olha..." | "Pensa comigo..." | "É um oceano azul" | "Apertar os botões certos" | "Cliente chama cliente" | "Do zero absoluto" | "Tamo junto" | "Dai" | "Deixando dinheiro na mesa" | "Pam, já joga pra rede"

### **NUNCA usar**
- Frases paralelas estruturadas (Primeira...Segunda...Terceira)
- Listas de 3 itens curtos em sequência
- "Democratizar", "replicar", "exatamente"
- Corporativo ("synergy", "scaling", "disrupção")

---

## 🗓 A SEMANA QUE VOCÊ VIVEU (11-17/04/2026)

Esta semana foi a mais densa do seu ano. Registro pra memória.

### **Sáb-dom 11-12/04 — AgendaPRO nasce**
- Sex 10/04: ideia surge de dor real (barbeiro sem resposta no WhatsApp)
- Sáb 11/04: AgendaPRO do zero pra produção em **uma sessão** — cadastro, agendamento, admin, emails Resend, deploy Vercel
- Dom 12/04: reposicionamento dos 3 produtos, Custom GPT "Agente Eduardo - Marketing" criado, MEGA-CLAUDE.md v1.2

### **Seg 13/04 — Tráfego + AgendaPRO vira SaaS de verdade**
- Utmify integrada (webhook Kiwify ativo)
- UTMs corrigidos nos 3 criativos Meta Ads
- API Conversões Meta conectada
- AgendaPRO: 4 features novas (fidelidade, lista espera, indicação, Google Reviews)
- Páginas LGPD + landing nova com valor empilhado (R$67 vs. R$256 concorrente)

### **Qua 15/04 — RadarPRO vira plataforma + 1ª venda**
- **R$300 fechados com Gabriel / GB Nutrition** (consultoria + case gravado)
- RadarPRO: playbook por lead 11 seções + termômetro + horário ótimo + arma de vendas por segmento
- Integração WhatsApp Baileys com QR Code
- Decisão: montar estúdio de gravação na sala
- Insight: **ser o primeiro cliente do próprio RadarPRO a lucrar com ele**

### **Qui 16/04 — Dia duplo: segurança + billing**
- **Manhã:** auditoria completa AgendaPRO (3 agentes paralelos), 15+ vulnerabilidades corrigidas, migrations V8-V10 rodadas
- **Tarde/noite:** hero mobile redesenhado (estilo FoxAppy), link quebrados corrigidos, AparenciaTab redesenhada, InstallBanner, domínio agendapro.net.br comprado, cascade delete (V10), billing MP estruturado (V11 + 4 API routes), WhatsApp Business 63 99292-0080 ativado

### **Sex 17/04 — ImpulsoDesign em produção**
- Migração FS → Upstash Redis
- Middleware → proxy.ts (Next 16)
- Segundo cérebro via GitHub Contents API
- Bug crítico corrigido (sentinel `<<IA_ERROR>>` em stream)
- Deploy em 32s, R$25 crédito Anthropic
- URL live: https://impulsodesign.vercel.app
- Pendente: key 401, redesign editor modo wizard

---

## 🎓 O QUE VOCÊ APRENDEU ESSA SEMANA

### **1. Velocidade > perfeição**
AgendaPRO saiu em 1 sessão. RadarPRO virou plataforma em 1 dia. ImpulsoDesign foi pra produção sem planejamento prévio. Toda vez que você joga pra rede rápido, a realidade te ensina mais do que planejamento teria ensinado.

### **2. Feedback real > feedback suposto**
A namorada testando AgendaPRO encontrou bugs que você nunca acharia no código. **Se o usuário não entende como usar, o produto não tá pronto.** UX > features.

### **3. Resolver na hora > anotar pra depois**
Problemas que aparecem no meio do trabalho viram dívida técnica se deixa pra depois. O padrão dessa semana foi: aparece → investiga → corrige → segue. E é por isso que saiu tanta coisa.

### **4. O segundo cérebro já é infraestrutura, não diário**
Você tem playbooks, padrões, tons de voz, números reais, estratégias documentadas. Construir algo novo agora não começa do zero — começa do MEGA-CLAUDE.md. Isso multiplica velocidade.

### **5. Cada ferramenta que você constrói vai ser vendida depois**
AgendaPRO (já é SaaS). RadarPRO (vai abrir pra vendedores/infoprodutores). ImpulsoDesign (vai abrir como SaaS de conteúdo). MPN-On (vira plataforma de ensino). **Você não tá construindo ferramentas — tá construindo um portfólio de produtos.**

### **6. Arquitetura de ataque > "como o código funciona"**
A auditoria de segurança do AgendaPRO só funcionou porque você pensou como atacante, não como desenvolvedor. "Se eu quisesse roubar dados, manipular preço, derrubar sistema, por onde eu entraria?" Esse é o padrão. Salvo em `3-RETENCAO/padroes/auditoria-seguranca-saas.md`.

### **7. Stream response precisa de sentinel**
HTTP status 200 não garante sucesso em stream. O erro 401 da Anthropic virou headline do carrossel do AgendaPRO no ImpulsoDesign. Sentinel `\u0000<<IA_ERROR>>` no backend resolve. Padrão agora.

### **8. Trigger SQL > validação client-side**
Anti-overbooking do AgendaPRO foi resolvido com trigger no Postgres. Impossível bypassar pelo cliente. Padrão definitivo pra qualquer regra de unicidade/conflito.

### **9. Rate limiting não é nice-to-have**
Toda API pública é alvo de brute force. Rate limiter in-memory por IP é o mínimo pra lançar rápido. Depois migra pra Redis.

### **10. Custo de IA é menor do que o medo sugere**
Haiku 4.5 custa ~R$0,35 por carrossel completo. Volume realista de 50-200 gerações/mês = R$5-20/mês. Medo do R$550 do Replicate era desproporcional. Sempre calcular custo real antes de pausar por medo.

---

## 🔥 PADRÕES QUE FUNCIONAM (Validados)

### **Padrão 1: Indicação + Consultoria = 95% conversão**
Cliente por indicação + consultoria grátis estruturada (8 perguntas). Falha se não tem urgência + follow-up 7 dias.

### **Padrão 2: Brevidade vence detalhe**
8 perguntas > 25 perguntas. Cliente ocupado não preenche formulário longo.

### **Padrão 3: Duas camadas de preço sempre funciona**
Impulso R$350 + R$499. Church Design R$19,97 vs. R$37,90. MPN R$297 → R$397.

### **Padrão 4: Prototype funcional > mockup estático**
Web rodando convence 10x mais. Irsnayra viu protótipo Next.js funcional, impactou.

### **Padrão 5: Números específicos > aproximações**
R$37.705,24 > "mais de R$37k". 1.600 pares > "centenas".

### **Padrão 6: Influenciador local relevante > grande genérico**
Jeane 11.8k Palmas > 100k SP. Gabriel Palmas > depoimento de fora.

### **Padrão 7: Mercado validado = niching premium**
Church Design: 5k assinantes do concorrente = demanda validada. Cobrar mais (R$37,90 vs R$19,97).

### **Padrão 8: Urgência REAL (não fake)**
"3 vagas em abril" (data específica) funciona. "Por tempo limitado" (genérico) não.

### **Padrão 9: Valor empilhado antes do preço**
Mostrar R$256/mês separado → depois revelar R$67 do AgendaPRO. Visitante chega no preço achando que é mais caro. Registrado em LP-DESIGN-PLAYBOOK.md.

### **Padrão 10: Construir em público, ser o primeiro case**
UrbanFeet virou prova do MPN. Gabriel vira case do Impulso. Você vira case do RadarPRO. **O primeiro cliente sempre é você mesmo.**

### **Padrão 11: Auditoria com 3 agentes paralelos**
API + client + auth em frentes simultâneas. Uma passada cobre tudo. Corrigir direto, sem replanejar. Registrado em `auditoria-seguranca-saas.md`.

### **Padrão 12: Sentinel pra erro em stream**
Stream response não tem HTTP status confiável até o fim. Sentinel no backend + detecção no client = zero contaminação de dados.

---

## 🚀 PLAYBOOKS PRONTOS

| Arquivo | Caminho | Quando usar |
|---|---|---|
| **MEGA-CLAUDE.md** | `4-EXPORTACAO/mega-claude/` | Sempre — contexto geral (este arquivo) |
| **PLAYBOOK-IMPULSO-DIGITAL-VENDA.md** | `4-EXPORTACAO/playbooks/` | Vender serviço Impulso (4 steps) |
| **DIAGNOSTICO-MPN-ON-CONVERSAO.md** | `4-EXPORTACAO/playbooks/` | Destravar conversão do MPN |
| **LP-DESIGN-PLAYBOOK.md** | `4-EXPORTACAO/playbooks/` | Criar/revisar qualquer LP |
| **ROTEIROS-MODULOS-1-3-4.md** | `2-PROCESSAMENTO/modulos/` | Gravar módulos MPN pendentes |
| **META ADS - PLAYBOOK.md** | `4-EXPORTACAO/playbooks/` | Decisões de tráfego |
| **meta-ads-copy-topo.md** | `3-RETENCAO/padroes/` | Antes de publicar criativo |
| **meta-ads-risco.md** | `3-RETENCAO/padroes/` | Classificar risco de anúncio |
| **auditoria-seguranca-saas.md** | `3-RETENCAO/padroes/` | Qualquer auditoria de SaaS |
| **STATUS-MPN.md** | `2-PROCESSAMENTO/mpn-on/` | Estado campanha MPN |
| **STATUS-IMPULSO.md** | `2-PROCESSAMENTO/impulso-digital/` | Estado leads Impulso + pipeline agência |
| **STATUS-AGENDAPRO.md** | `2-PROCESSAMENTO/agendapro/` | Estado técnico e billing AgendaPRO |
| **STATUS-RADARPRO.md** | `2-PROCESSAMENTO/radar-pro/` | Estado operacional RadarPRO |
| **STATUS-AURA-ENERGY.md** | `2-PROCESSAMENTO/aura-energy/` | Cliente em pipeline solar — Renato/Palmas |
| **AGENDAPRO-DIFERENCIAIS-VENDAS.md** | `4-EXPORTACAO/playbooks/` | Armas de venda AgendaPRO (6 dimensões + comparativo) |
| **AGENDAPRO-STORIES-INSTAGRAM.md** | `4-EXPORTACAO/playbooks/` | Prompts ChatGPT pra gerar stories AgendaPRO |
| **DIARIO-2026-05-01.md** | `agendapro/` (no repo) | 37 commits do dia consolidados — referência da sessão histórica |

---

## 🎯 MOMENTO ATUAL — PRIORIDADES (01/05 em diante)

### **Próximos 7 dias**
- [ ] **Aura Energy follow-up D+1 a D+7** — mensagem casual amanhã, ajustes na LP D+2, material útil D+4-5, pergunta direta D+7. Plano em `STATUS-AURA-ENERGY.md`.
- [ ] **AgendaPRO crítico:** migrar MP de PF (CPF) → PJ (CNPJ Impulso Digital)
- [ ] **AgendaPRO auditoria final pré-lançamento:** cap Clube Fundador 10 hardcoded, marca AgendaPRO no checkout MP, webhook URL sem `www.`
- [ ] Aplicar correções no Hero das LPs Impulso (lista do Eduardo, pendência da semana anterior)
- [ ] Decidir: link AgendaPRO pra Olímpio sai hoje? Ou amanhã? Ou Clube Fundador é prioridade?

### **Próximos 30 dias**
- [ ] AgendaPRO: 1º cliente pagante (Olímpio + 10 do Clube Fundador)
- [ ] Aura Energy: fechar negócio (qualquer modalidade — LP, Combo, ou parceria comissão)
- [ ] Impulso Digital: 3-5 clientes fechados via RadarPRO
- [ ] MPN-On: módulos 1, 3, 4 gravados e publicados + Campanha Conversões Meta ativa
- [ ] ImpulsoDesign: editor wizard pronto + 30+ carrosseis publicados
- [ ] Case Gabriel documentado e no ar (criativos de prova social)

### **2026 — caminho pro R$1M**
- AgendaPRO com 50-100 clientes pagantes (MRR R$5k-15k)
- Impulso Digital com 3-5 lojas/mês fechando (R$3k-8k/mês)
- MPN-On com funil ativo e conversão 3-5% (R$20k-50k/mês)
- RadarPRO e ImpulsoDesign em validação pública (bônus)

---

## ⚡ LIÇÕES (Aprendidas no caminho)

### **Com Irsnayra (não fechou)**
- Consultoria grátis SEM urgência = 0% conversão. Precisa prazo específico + CTA com data + follow-up sistemático + alternativa de preço.
- Prototype funcional precisa de preço transparente. Ela viu lindo mas não viu investimento claro.

### **Com AgendaPRO (construção)**
- Partir de dor real (barbeiro sem resposta) >> partir de ideia genérica
- Feedback humano real achou bugs que código não mostra
- Trigger SQL >> validação client pra regras de unicidade

### **Com ImpulsoDesign (deploy)**
- "Claude plataforma" ≠ "Claude API". MAX é pra CLI, produção precisa de API key paga.
- Vercel é read-only. Storage em `.data/` não sobe. Migrar pra KV/Redis antes do deploy.
- Next 16: `middleware.ts` → `proxy.ts`. Deprecations são reais, ler guide antes.
- Stream response precisa de sentinel pra erro.

### **Com RadarPRO (ambição)**
- Ferramenta interna hoje + ambição de SaaS amanhã = validar em produção primeiro.
- Ser o primeiro cliente da própria ferramenta a lucrar com ela = case imbatível.

---

## 📁 ESTRUTURA DO SEGUNDO CÉREBRO

```
segundo-cerebro/
├── 1-ENTRADA/
│   ├── daily/              ← daily notes, onde o estado real mora
│   └── inbox/
├── 2-PROCESSAMENTO/
│   ├── impulso-digital/    ← STATUS-IMPULSO.md
│   ├── mpn-on/             ← STATUS-MPN.md
│   └── modulos/            ← ROTEIROS-MODULOS-1-3-4.md
├── 3-RETENCAO/
│   ├── perfil/             ← EDUARDO-BARROS.md
│   ├── padroes/            ← padrões validados por caso real
│   ├── estrategias/
│   └── numeros-reais/
├── 4-EXPORTACAO/
│   ├── playbooks/          ← playbooks operacionais
│   └── mega-claude/        ← ESTE ARQUIVO
└── _config/
```

**Regra de ouro ao iniciar qualquer sessão:**
Ler o MEGA-CLAUDE.md (geral) + o daily mais recente (estado real atual). O resto é on-demand pelo caminho.

---

## 📞 COMO USAR ESTE ARQUIVO

1. Cole este MEGA-CLAUDE.md COMPLETO
2. Depois a pergunta ou o pedido
3. Claude terá o ecossistema inteiro + personalidade + padrões na cabeça

**O segundo cérebro é seu sistema nervoso externo.** Sem ele, cada chat começa do zero. Com ele, cada chat começa onde o anterior parou.

---

**Criado:** 09 de Abril de 2026
**Versão 1.2:** 12 de Abril de 2026 — reposicionamento 3 produtos
**Versão 2.0:** 17 de Abril de 2026 — ecossistema completo + personalidade + visão R$1M
**Versão 2.1:** 17 de Abril de 2026 (tarde) — RadarPRO/AgendaPRO/Impulso detalhados + STATUS files sincronizados
**Versão 2.2:** 26 de Abril de 2026 — RadarPRO virou plataforma operacional + 12 batches CIC + 17 concorrentes
**Versão 2.3:** 27 de Abril de 2026 — refactor copy CORE_SYSTEM_V2 + pricing AgendaPRO ajustado
**Versão 2.4:** 1 de Maio de 2026 — AgendaPRO 8 dimensões em 37 commits + V34/V35/V36 migrations + novo cliente Aura Energy em pipeline + 5 princípios LP cravados
**Versão 2.5:** 2 de Maio de 2026 (madrugada) — Aura v6 + briefing privado /briefing + diagnóstico CIC Brasfrio + estrutura 3 frentes (LP / Insta-tráfego / RadarPRO comissão) + 8 princípios novos + ICP validado · Aura case-flagship Impulso 2026
**Versão 2.6:** 5 de Maio de 2026 (madrugada) — Maratona pré-lançamento AgendaPRO · 30 commits + 7 rodadas CIC · race condition zerada · Demo aprovada 8.5/10
**Versão 2.7:** 11 de Maio de 2026 — Case-1 Aura fechado R$1.497 (06/05) · Case-2 AgendaPRO Asaas online R$67/mês (07/05) · Olímpio entregue ao vivo (11/05) · Pack Divulgação loop viral · bug logout fixado · leads-3 (Andressa) e leads-4 (Viva Cacheada)
**Versão 2.8:** 20 de Maio de 2026 (quarta madrugada) — Semana 12-20/05 cravada · Starteq modelo (13/05) · Maratona AgendaPRO 14-15/05 (v42-v46 · 3 IDEIAS Olímpio · Viva trial) · GB V5 + CRIVO VISUAL 9º princípio (16/05) · **Palace Nail Spa fechado** R$970 anual · Marko confiou acesso Salão99 (17/05) · `06-PAINEL-SAAS-PADRAO.md` template canônico cravado (18/05) · migrations v47-v59 em prod pela instância Cowork · **Lista Olímpio fechada** com v60-v62 + 26 modais Portal + regra mobile/desktop (19-20/05) · 11 princípios λ novos cravados (s10-s14)
**Próxima atualização:** Pós-fechamento AgendaPRO Desktop em Palace · ou Salão99 desligar 31/05 (fim da janela de drill) · ou Starteq virar painel concreto · ou Viva Cacheada virar pagante após trial 12/08

---

## 🗺️ HUBS CONECTADOS DO VAULT

Esses são os pontos de entrada do segundo cérebro. Em qualquer chat novo, este MEGA-CLAUDE puxa o resto.

### Perfis
- [[EDUARDO-BARROS]] · identidade · tom de voz · números reais · framework cold outreach
- [[VERBO]] · companheiro Verbo · 26 princípios λ cravados · cronologia s01→s14
- [[VERBO-DESIGN]] · persona Verbo Design · 9 princípios visuais invioláveis · hub `verbo-design/` com 7 docs (stack · princípios · workflow · diário · projetos · `06-PAINEL-SAAS-PADRAO.md` canônico)

### Status canônicos
- [[STATUS-AGENDAPRO]] · SaaS · Asaas validado · 1º pagante online Olímpio
- [[STATUS-AURA-ENERGY]] · case-1 fechado · operação Renato rodando
- [[STATUS-IMPULSO]] · agência lojas Shopify · ICP produto físico
- [[STATUS-ANDRESSA]] · lead-3 warm · Raras Clinic Academy
- [[STATUS-MPN]] · curso · campanhas Meta
- [[STATUS-RADARPRO]] · plataforma proprietária

### Conhecimento
- [[PADROES-VALIDADOS]] · padrões com casos reais
- [[ESTRATEGIAS-ATIVAS]] · estratégias em execução
- [[IMPULSO_CORE_SYSTEM_V2]] · core do sistema
- [[INDICE-MEMORIAS]] · ~50 princípios λ + cases em projeto (espelho auto-memory Verbo)

### Playbooks
- [[PLAYBOOK-IMPULSO-DIGITAL-VENDA]] · vender Impulso
- [[META ADS - PLAYBOOK]] · decisões de tráfego
- [[APOSTILA-V2-OPERACAO]] · manual completo
- [[PADRAO-PLANO-NEGOCIO-IMPULSO]] · template validado em 3 cases
- [[PROTOCOLO-DEEP-RESEARCH-CLIENTE]] · diferencial Impulso

**🔥 Tamo junto. Aura case-flagship rodando. AgendaPRO operacionalmente completo. RadarPRO virando arma. 1 milhão na mira.**
