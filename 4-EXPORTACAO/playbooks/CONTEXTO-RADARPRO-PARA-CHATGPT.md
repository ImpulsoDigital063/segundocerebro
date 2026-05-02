# 🎯 Contexto RadarPRO — pra ChatGPT entender o sistema antes de gerar copy

> **Cole este doc inteiro no ChatGPT em uma sessão.** Depois cole o prompt de pedido (separado). Cole também antes o doc `IDENTIDADE-IMPULSO-DIGITAL.md` se ainda não tiver feito.

**Última atualização:** 2026-04-27

---

## O QUE É O RADARPRO

Sistema de prospecção 1-a-1 construído por Eduardo Barros (agência Impulso Digital) pra **gerar fechamento de cliente em Palmas-TO** pros 3 produtos da Impulso: **Landing Page (R$499)**, **Loja Online Shopify (R$599)** e **SmartAgenda/AgendaPRO (Solo R$67/mês ou Equipe R$97/mês; setup R$197 isento pros 10 primeiros via Clube Fundador)**.

**NÃO é SaaS público ainda.** É máquina interna do Eduardo pra prospecção. Status: rodando em produção em `radarpro-inky.vercel.app`, uso 100% interno.

---

## STACK TÉCNICO

- **Frontend:** Next.js 16, deploy no Vercel (Hobby plan)
- **Banco:** Turso (SQLite serverless)
- **IA:** Gemini 2.5 Flash (gera análises customizadas), Claude (revisão), OpenAI GPT-4o-mini (planos de negócio pós-venda)
- **Scraping:** Playwright local (Vercel não suporta Playwright em runtime — busca acontece local, sobe pro Turso)
- **Integração WhatsApp:** Baileys (envio direto WhatsApp Web local) + links wa.me como fallback
- **Tally:** formulários de pré-venda (diagnóstico) e pós-venda (briefing) integrados via webhook

---

## FUNCIONALIDADES ATUAIS

### 1. Busca de leads
- Google Maps via Playwright local (busca por serviço, não profissão — "soroterapia em Palmas" achou Erlane que "enfermeira" não acharia)
- Google IA Overview por registro profissional (CRM-TO/RQE/CREF/CRO/OAB/CRP/CRN) — método de prospecção que rendeu 100% leads pré-validados
- Vetor `/following/` de case ativo (Insta de Erlane/GB Nutrition tem 2x mais densidade de leads parecidos que Maps)

### 2. Análise + qualificação por lead
- Score 0-10 baseado em 4-7 critérios (Maps rating, número avaliações, presença Insta, bio amador, sem site)
- Tier S/A/B/C automático (pra priorizar disparo)
- Termômetro: quente / morno / frio
- Categoria: lp-solo / shopify-solo / agendapro-solo / combo

### 3. Playbook customizado por lead
Pra cada lead dos 53 priorizados, o RadarPRO armazena (em `lib/disparo-analises.ts`):
- **Dor real** específica do lead (não genérica)
- **Gancho de oferta** sob medida pro nicho
- **Mensagem 1 abertura** cirúrgica
- **Follow-up D+3** (pivot diferente, não insistência)
- **Follow-up D+7** (última cartada)
- **Pré-engajamento Insta** (interação antes de WhatsApp pra "esquentar")
- **Diagnóstico** com 3 variantes A/B/C (rotação por hash)
- **Pitch se só Insta** vs **Pitch se já tem site** (2 ramos)
- **Fechamento** com escassez real
- **Razão do ranking** (interno — não vai pro lead)

### 4. Painel de Operação
- **Aba Leads** (lista geral, filtros por tipo/status, todas as 53+ análises com score+termômetro)
- **Aba "📚 Em estudo"** (curadoria manual — Eduardo marca ⭐ leads selecionados pra disparo, abre cards expandidos com bio Insta + site + telefone + mensagem antes de disparar)
- **Aba "🔥 Em prospecção ativa"** (leads já disparados, ordenados por follow-up vencido primeiro, com tempo desde disparo, alerta vermelho >5d sem resposta)
- **Aba Hoje** (IA decide os 5 leads mais prioritários do dia com motivo específico)
- **Aba Disparo** (playbook pronto, mensagens copiáveis com 1 clique)
- **Aba Tally** (leads que vieram dos formulários LP — gera Plano de Negócio + Script de Venda pós-venda)

### 5. Status do lead (funnel oficial)
- `novo` — ainda não disparado
- `abordado` — mensagem 1 enviada (timestamp `disparado_em` automático)
- `respondeu` — lead respondeu (timestamp `respondeu_em` + cálculo `tempo_resposta_horas`)
- `consultoria_marcada` — call agendada
- `consultoria_feita` — call aconteceu
- `proposta_enviada` — preço fechado, aguardando decisão
- `fechado` ✅ — pagou
- `sem_interesse` ❌ — perdido (com `objecao_tipo` e `fase_travou` registrados)

### 6. Botões rápidos por status (zero digitação)
Pra cada lead em prospecção, Eduardo marca em 1 clique:
- "Respondeu" / "Caro" (objeção preço) / "Depois" (objeção tempo) / "Sem resposta"
- "Marcou call" / "No-show" / "Proposta" / "Fechou ✅" / "Perdido 💀"

Cada clique registra automaticamente `objecao_tipo`, `fase_travou`, `motivo_perdido` no banco — pra futura análise comparativa de variantes.

---

## ESTADO ATUAL DA PROSPECÇÃO

### Volume
- **53 leads com playbook customizado** (analisados em 12 batches CIC ao longo de 1 semana)
- **7 LPs Tier A selecionados na aba Em Estudo** (curados manualmente hoje 27/04 pra disparo essa semana):
  1. Dra. Monnaliza Cabral (dentista CRO 1727, faceta+harmonização)
  2. Dr. Ricardo Linares (dentista, "Site" do Maps é literal `api.whatsapp.com/send`)
  3. Verônica (enfermeira esteta, case-clone Erlane)
  4. Dra. Christiana Zeve (endocrino RQE, canetas emagrecedoras)
  5. Pedro Maciel (nutri esportivo CRN, lipedema nicho raro)
  6. Guilherme Morais (advogado, 5★/120 aval)
  7. Gilson Afonso (psicólogo, 4.9★/135 aval)
- **6 leads Shopify Tier A** prontos pra próximo batch (Mary Fashion, Lorenn, Dborah Closet, Mara Camargo, One Suplementos, Mobiliare)

### Métricas reais hoje
- **Taxa de resposta histórica: desconhecida** — campo `disparado_em` automático foi adicionado HOJE (27/04). Antes disso, sem rastreio.
- **Tempo até resposta: desconhecido** (mesma razão).
- **Onde mais empaca: desconhecido** (`fase_travou` recém adicionado).
- **Variantes A/B/C de diagnóstico: existem no código, mas comparativo precisa de 30+ disparos pra estatística válida.**

### Dados disponíveis por lead (em cada cartão "Em estudo")
- Nome / categoria / telefone / Instagram (handle + URL + seguidores + bio)
- Site (se tiver) / endereço / Maps rating / número de avaliações
- Score / tier / termômetro
- Mensagem 1 (abertura) já gerada e pronta
- Notas livres do Eduardo

---

## VOZ E IDENTIDADE

**Voz Eduardo** (validada em 60+ peças):
- "tamo junto", "fechado?", "olha", "pensa comigo", "tu manda?"
- Frases curtas + uma longa pra ritmo
- Pergunta direta no fim
- Pontuação solta de chat
- Direto, sem corporativês, "tu" não "você"

**Palavras PROIBIDAS** (queimam cara de IA):
- exatamente, absolutamente, potencializar, alavancar, democratizar, excelência, "Espero que esteja bem", "Em suma", saudação corporativa

**Cases reais** (apenas estes 4):
- EV Suplementos Injetáveis (Erlane, saúde estética/injetáveis Palmas)
- GB Nutrition (Gabriel, Shopify fitness Palmas)
- UrbanFeet (loja própria do Eduardo, 1.600+ pares vendidos pela internet em 3 anos)
- Criativos do Céu (membership/infoproduto cristão)

**NUNCA usar como case** (não fecharam ou não autorizaram): Dra. Janaína Feitosa, Dra. Irsnayra Mildred, LocaJV.

---

## OBJEÇÕES MAIS COMUNS QUE LEAD MANDA

1. **"Posso fazer no Wix de graça"** (LP)
2. **"Vendo bem só por Insta"** (Shopify)
3. **"Já tenho Linktr.ee/contate.me"** (LP)
4. **"Tá caro"** (todos)
5. **"Vou pensar"** (todos — mais comum)
6. **"Manda mais info"** (curioso mas não comprometido)
7. **"Passa pra meu sócio"** (não é decisor)
8. **"Manda WhatsApp depois"** (escapa)
9. **"Que diferencial vocês têm vs DIVIA/MOBI/Webgui?"** (sofisticado)
10. **Silêncio total** (ignorou)

---

## O QUE TÁ FALHANDO HOJE (HONESTO)

1. **Copy gerada por Gemini soa "feita por IA"** em alguns casos. Eduardo descobriu hoje 27/04 que mensagens com cara de "AMPLIA/ACELERA/REMOVE ESFORÇO" exposto + estrutura Hormozi explícita queimam.
2. **Promessas inventadas** que apareciam em algumas análises: "lista de fornecedores que mapeei" (que Eduardo não tem pronto) — corrigido em massa hoje.
3. **Voz Eduardo NÃO está totalmente capturada** — IA ainda força "Olha Maria!" inventando nome (lead se chama "Mary Fashion" loja, não "Maria"). Eduardo prefere abertura sem nome se não souber.
4. **Cases falsos** apareciam (Janaína/Irsnayra/LocaJV) — corrigido em massa hoje.
5. **Eduardo não tem voz de "expert"** — vendas anteriores que tentou não fecharam. Ele se posiciona melhor como "agência nova de Palmas com 4 cases entregues, pricing publicado, sem fingir que sou de SP" — verdade é mais forte que pose de guru.

---

## MÉTODOS DE PROSPECÇÃO VALIDADOS

Eduardo testou múltiplos métodos ao longo de 12 batches CIC (21-26/04/2026). 2 viraram **método-ouro** com 100% de leads pré-validados:

### Método-ouro #1 — Google IA Overview por REGISTRO PROFISSIONAL
**Query padrão:** `"[REGISTRO]" "[REGIONAL]" [profissão] [cidade] instagram`

Exemplos validados:
- `"CRM-TO" "RQE" endocrinologista Palmas instagram` → achou Dra. Christiana, Dra. Thais (canetas emagrecedoras)
- `"CREF" educador físico Palmas instagram` → achou personal trainers ativos
- `"CRO-TO" dentista Palmas instagram facetas` → achou Dra. Monnaliza, Dr. Ricardo Linares
- `"OAB-TO" advogado Palmas instagram trabalhista` → achou Guilherme Morais
- `"CRP-TO" psicólogo Palmas instagram TCC` → achou Gilson Afonso

**Por que funciona:** Google IA Overview retorna leads com REGISTRO VÁLIDO + presença Insta + cidade — 3 critérios mínimos pra Tier A já vêm no resultado. Em 90 segundos tu tem 5-10 leads pré-validados.

### Método-ouro #2 — Vetor /following/ de case ativo Impulso
**Lógica:** quem o case (Erlane/Gabriel) segue no Insta tem 2x mais densidade de "leads parecidos" que o Google Maps. Porque Erlane segue **competidoras dela em saúde estética Palmas**. Gabriel segue **outros personals em Palmas**.

Eduardo abriu `instagram.com/erlanesoroterapia/following/` → extraiu lista → CIC analisou cada perfil → Tier S/A automático por critérios de qualificação.

**Resultado:** densidade de leads relevantes = 2x maior que Maps.

### Método-ouro #3 — Persona-clone (técnica derivada)
**Fase 1:** análise da persona-mãe (case ativo)
- Quem é? Bio Insta + serviços + ticket + autoridade visível
- Que conteúdo posta? Que tipo de cliente atrai?
- Qual o nicho EXATO (não "estética" — "drip vitamínico Palmas")

**Fase 2:** prospectar clones
- Vetor /following/ + lookalike de hashtags + Google IA Overview pelo nicho exato
- Cada clone é qualificado automaticamente pelos critérios da persona-mãe
- 90%+ dos clones identificados viram Tier S ou A

**Cases-âncora hoje:**
- **Erlane (EV Suplementos Injetáveis)** = case-mãe pra **saúde estética / injetáveis / soroterapia** (farmacêutica esteta, biomédica esteta, enfermeira esteta autônoma)
- **Gabriel (GB Nutrition)** = case-mãe pra **Shopify fitness** (suplementos, personal trainer com loja, atleta com produto físico)

---

## INTELIGÊNCIA DE MERCADO INTEGRADA

### Hierarquia ICP Palmas (7 nichos validados, ordem de conversão)

| Posição | Nicho | Por que converte | Sub-nichos quentes |
|---|---|---|---|
| 1 | Saúde estética / injetáveis | Decisão individual rápida, ticket alto, dor visível (clientes pesquisam protocolos antes de marcar) | Soroterapia, drip vitamínico, NAD+, ozonioterapia, B12, Coenzima Q10 |
| 2 | Dentista solo estética avançada | Ticket altíssimo (faceta R$1k+, harmonização R$3k+), 100% paga particular | Facetas, harmonização facial, lentes contato, alinhador invisível |
| 3 | Médico especialista solo (RQE) | Autoridade técnica visível, paciente pesquisa muito | Endocrino (canetas emagrecedoras: Mounjaro, Wegovy, Ozempic, Tirzepatida), gineco, dermato, cardio, urolog, masto |
| 4 | Psicólogo solo (nicho TCC/ansiedade/casal) | Sigilo e seriedade SEM site = perde lead frio | TCC, terapia de casal, ansiedade adulta, infantil, online |
| 5 | Advogado solo de nicho | Cliente pesquisa "advogado [especialidade] Palmas" antes de ligar | Trabalhista, família, INSS, previdenciário |
| 6 | Fisioterapeuta domiciliar especialista | Cobertura geográfica + nicho específico | RPG, Pilates, neuro, esportiva, lipedema |
| 7 | Nutricionista esportivo/clínico | Online + presencial, modelo recorrente | Esportivo, clínico, lipedema, renal |

### Critérios de qualificação automática (Tier S = todos os 4)
1. **Registro profissional visível** na bio (CRM/CRO/CRP/CRBM/CRN/CREF/OAB/RQE)
2. **Maps 4.8★+** com **30+ avaliações**
3. **ZERO domínio .com.br próprio**
4. **Bio com link amador** (Linktr.ee, contate.me, bio.site, sandwiche.me, eksy.me, msha.ke, clique.ink, Vizzoone, Canva site, abre.ai)

### Soluções amadoras = SINAL DE COMPRA
Lead que tá no Linktr.ee mostra que **JÁ ENTENDEU** que precisa de canal além do Insta. Só não achou o caminho certo. Ele tá AQUECIDO pra Impulso entregar a solução madura.

### Benchmarks de mercado nacional (ancoragem)
- **LP:** R$2.000-15.000 (DIVIA, Odonto Pages, Webgui Marketing Médico) → Impulso R$499 (a partir)
- **Shopify:** R$1.500-4.000 + mensalidade (DIVIA, Yampi parceira, agência local) → Impulso R$599
- **AgendaPRO:** R$200-500/mês com fidelidade (ZenPlace, Trinks, Booksy) → Impulso Solo R$67/mês ou Equipe R$97/mês sem fidelidade. Setup R$197 isento pros 10 primeiros (Clube Fundador) — frase pesada: "depois que fechar os 10, o setup de R$197 volta normal"

### Concorrentes mapeados (17 em Palmas — vantagem local real)
DIVIA, MOBI, Alex Sacchi, Webgui Marketing Médico, Odonto Pages, Palmasite, DevFlow, e mais 10. **Maioria atende remoto de outras cidades.** Eduardo é fisicamente em Palmas.

---

## VACINA DE PITCH (inteligência 2ª ordem)

Sistema aprende em camadas:
1. Lead recusa com objeção X
2. Sistema registra `objecao_tipo` + `fase_travou` automaticamente
3. Pra leads ANÁLOGOS (mesmo nicho/perfil), o playbook gera **anti-pitch preventivo** — antecipa a objeção antes do lead falar
4. Cada nova recusa adiciona 1 anti-pitch ao arsenal
5. Em 30+ disparos, sistema tem mapa estatístico das objeções por nicho

**Estado atual:** infraestrutura recém criada (27/04). Coletando dados a partir dos próximos disparos.

---

## FUNIL TALLY PÓS-CAPTAÇÃO (lead que veio da LP Impulso)

### Tally #1 — Diagnóstico pré-venda (8 perguntas)
- Embedado na LP `impulsodigital063.com`
- Lead preenche → webhook Tally → cria lead no RadarPRO com flag `lead_tally`
- 8 perguntas: tipo de negócio, nicho, faturamento, dor principal, urgência, tentativas anteriores, faixa de investimento, melhor horário pra falar

### Geração automática pós-diagnóstico
- **Script de Venda 8 seções** gerado por IA (Claude/Gemini/OpenAI selecionável) baseado nas respostas — preparação pra call de Eduardo
- 8 seções: contexto, dor mapeada, oferta sob medida, ancoragem, bônus, garantia, escassez, fechamento

### Tally #2 — Briefing pós-venda (19 perguntas)
- Enviado manualmente via WhatsApp DEPOIS que cliente paga 50% entrada
- 19 perguntas técnicas pra produção da LP/Shopify (cores, fotos, copy de seções, integrações, prazo etc)
- Webhook salva no banco

### Geração automática pós-briefing
- **Plano de Negócio 14 seções** gerado por GPT-4o-mini (~$0.15/plano) — entregue como PDF assinado pela Impulso pós-venda
- 14 seções (qualidade-referência: plano da GB Nutrition aceito como consultoria profissional): diagnóstico, posicionamento, ICP detalhado, oferta, funis, KPIs, cronograma, conteúdo, anúncios, parcerias, OKRs, riscos, plano financeiro, próximos 90 dias

---

## ENDPOINTS API DO RADARPRO (12+ rotas)

| Rota | Função |
|---|---|
| `GET/PATCH /api/leads` | CRUD de leads + filtros |
| `GET /api/disparo` | Playbook customizado dos 53 leads (mensagens prontas) |
| `POST /api/scrape` | Busca Google Maps via Playwright local |
| `POST /api/enrich` | Scraping de bio Insta via Playwright |
| `POST /api/analyze` | Análise de site via Claude |
| `POST /api/ai` | Geração de análises customizadas (Gemini/Claude) |
| `POST /api/ai-budget` | Cost tracker pra cap orçamentário |
| `GET/POST /api/licoes` | CRUD de lições aprendidas |
| `POST /api/tally/gerar-plano` | Gera Plano de Negócio 14 seções (GPT-4o-mini) |
| `POST /api/tally/gerar-script-venda` | Gera Script de Venda 8 seções |
| `POST /api/tally/marcar-pagamento` | Marca pagamento 50/100 entrada |
| `POST /api/webhooks/tally` | Webhook do formulário Tally |
| `GET /api/whatsapp/qr` | QR code do WhatsApp Web (Baileys) |
| `POST /api/whatsapp/send` | Envia mensagem via Baileys (sem wa.me link) |
| `POST /api/whatsapp/logout` | Logout do WhatsApp Web |

---

## TABELA DE LIÇÕES APRENDIDAS (`licoes`)

Tabela no banco que aprende de cada conversa:
- `lead_id`, `tipo_oferta`, `fase` (abertura/diagnóstico/pitch/objeção/fechamento/call_alinhamento)
- `titulo` (resumo curto da lição)
- `observacao` (explicação completa)
- `evidencia` (trecho da conversa que provou)
- `proposta` (mudança sugerida — copy nova, regra nova, exemplo a anexar)
- `tipo` (aprendizado / objecao_nova / voice_match / few_shot_candidato)
- `resultado` (ganho / perdido / neutro)
- `status` (pendente / aprovada / rejeitada / aplicada — workflow de revisão pelo Eduardo)

**Página `/licoes`:** Eduardo revisa lições semanalmente, aprova as boas, rejeita as ruidosas. Aprovadas viram input pra próxima geração de copy.

---

## DM INSTA AUTOMÁTICO (alternativa quando lead não tem telefone)

Função `gerarLinkDmInsta(handle)` → `https://ig.me/m/[handle]`
Função `adaptarMensagemDm(msgWhatsapp)` → simplifica abertura (remove "Eduardo aqui, Impulso Digital, falo de Palmas" — DM já mostra perfil dele).

Resultado: pra cada lead, 2 caminhos disponíveis:
- WhatsApp (se tem telefone)
- DM Insta (se só tem @ — botão "📱 DM Insta (copia msg)" copia mensagem adaptada e abre conversa)

---

## INVESTIMENTO E EVOLUÇÃO HISTÓRICA

### Semana 21-26/04/2026
- 12 batches CIC rodados com Claude in Chrome (cada batch = 5-10 leads novos analisados)
- Total: 53 leads com playbook customizado
- 17 concorrentes Palmas mapeados
- 7 nichos prioritários validados
- 2 métodos-ouro descobertos (IA Overview por registro + /following/)
- Bug fixes críticos: telefone null, botão WhatsApp, DM Insta
- Limpeza massiva de cases falsos (Janaína/Irsnayra/LocaJV removidos)

### 27/04/2026 (hoje)
- Sistema de status com auto-timestamps (disparado_em, respondeu_em, tempo_resposta_horas) — agora mede taxa de resposta real
- Aba "📚 Em estudo" — curadoria manual de leads pra disparo
- Aba "🔥 Em prospecção ativa" — visualização do funil pós-disparo
- Botões rápidos por status (zero digitação) que registram objecao_tipo + fase_travou + motivo_perdido
- 7 LPs Tier A selecionados pra disparo essa semana

### Próximos 30 dias (objetivo declarado)
- Fechar 2-4 LPs (R$499 cada = R$1.000-2.000)
- Fechar 1-2 Shopify (R$599 cada)
- 1-2 SmartAgenda (R$67/mês Solo ou R$97/mês Equipe; setup R$197 isento via Clube Fundador 10 primeiros)
- Validar variantes A/B/C de diagnóstico com 30+ disparos
- Adicionar 30 leads novos por batches CIC

---

## CAPACIDADES OPERACIONAIS DO EDUARDO (PESSOA)

- **Entrega:** 2-3 LPs/semana ou 1-2 Shopify/semana (limite operacional físico — não financeiro)
- **Stack que domina:** Next.js, Tailwind, Shopify (10+ projetos próprios), Vercel, Turso, Mercado Pago, Meta Ads
- **Tempo de aprendizagem rápido:** entrega protótipo Next.js em 20 min de call
- **Cases entregues (4):** EV Suplementos Injetáveis, GB Nutrition, UrbanFeet (própria), Criativos do Céu
- **Caixa atual:** apertado (vendeu carro essa semana). Cada R$ recorrente passa pelo filtro "quantos dias até R$ real"
- **Posicionamento honesto:** "agência nova de Palmas, 4 cases entregues, pricing publicado" — não pose de guru
- **Voz validada:** 60+ peças produzidas, vocabulário extraído, palavras proibidas mapeadas

---

## OBJETIVO DESTE DOC NO CHATGPT

Tu vai receber agora um pedido do Eduardo pra criar **copy + fluxo de prospecção WhatsApp** focado em **gerar resposta + puxar conversa + fechar em 7 dias**. Use TODO o contexto deste doc + do doc IDENTIDADE-IMPULSO-DIGITAL pra produzir copy real, sem inventar nada que não tá aqui.

Pontos críticos que tu DEVE respeitar:
1. **Voz Eduardo** — sem palavras proibidas (lista no IDENTIDADE)
2. **Pricing REAL** (LP R$499, Shopify R$599, Combo R$1.099, AgendaPRO Solo R$67/mês ou Equipe R$97/mês; setup oficial R$197 isento pros 10 primeiros via Clube Fundador)
3. **Cases SOMENTE estes 4** — nunca inventar +60 clientes ou números fictícios
4. **Métodos-ouro existentes** — usar IA Overview + /following/ + persona-clone como infraestrutura, não pedir ao Eduardo pra "criar"
5. **Hierarquia ICP** — atacar primeiro saúde estética e dentista solo (top 1-2)
6. **Objeções reais** — referenciar as 10 objeções listadas, não inventar novas
7. **Vacina de pitch** — sugerir como adicionar anti-pitch preventivo no playbook
8. **Concorrência mapeada** — 17 concorrentes em Palmas, ancoragem nacional R$2-15k

**Fim do doc.**
