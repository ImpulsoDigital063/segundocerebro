# MAPA DE FERRAMENTAS — RadarPRO

**Atualizado:** 16/07/2026
**Repo:** `C:/Users/Usuario/radar-pro` · GitHub `ImpulsoDigital063/radarpro` · Deploy Vercel (`radarpro-inky.vercel.app`)
**Objetivo do doc:** mapear TUDO que o RadarPRO faz, pra poder disponibilizar como ferramenta pronta pra outros prospectarem (productização).

RadarPRO é um **pipeline de prospecção B2B local**: coleta negócios no Google Maps → enriquece → gera a mensagem de venda por nicho → dispara pelo WhatsApp com guard de segurança → acompanha resposta e follow-up. Tudo roda **local, custo ~zero** (o gerador de copy é local, não usa API paga por lead).

---

## Stack

- **Next.js 16** (Turbopack) — painel + rotas de API
- **Turso (libSQL)** — banco (`lib/db.ts`, singleton `globalThis`)
- **Baileys** (`lib/whatsapp.ts`) — WhatsApp Business via dispositivo vinculado; fallback **wa.me** (abre o app com texto pronto)
- **Playwright** — scraping Google Maps
- **axios + cheerio** — scraping de site e Instagram
- **IA multi-modelo** (Claude / Gemini / OpenAI) — hoje SÓ pra "regerar" sob demanda; o gerador padrão é **local (custo zero)**
- Deploy Vercel (a Vercel NÃO segura sessão de WhatsApp — lá cai no wa.me; o disparo real roda local)

---

## O PIPELINE (fase a fase, com os arquivos reais)

### 1. COLETA (scraping) — enche a base
- `scripts/scrape-gmaps.ts` / `scrape-gmaps-v2.ts` (Playwright, Google Maps) — npm `radar:lp` · `radar:shopify` · `radar:agendapro`
- `scripts/scrape-instagram.ts` + `ig-login.ts` — npm `ig:login` · `radar:ig:*`
- `scripts/insert-lead-manual.ts` — inserir lead na mão
- **Nota:** Instagram sem login devolve página vazia — fonte fraca. O ouro vem do Google Maps (nome, categoria, telefone, nota, nº avaliações, site).

### 2. ENRIQUECIMENTO — dá contexto ao lead
- `scripts/enriquecer.ts` (`lib/enricher.ts`, `site-analyzer.ts`) — visita site, detecta sistema de agendamento, nível de consciência
- `scripts/coletar-reviews.ts` (`lib/reviews-analyzer.ts`) — puxa o TEXTO das avaliações do Google → `reviews_texto`. É a matéria-prima da dor real do cliente
- `lib/porte.ts` — decide **solo vs equipe** pela PROVA nas avaliações (default solo)
- `scripts/migrar-sistema-detectado.ts` · `repair-categorias.ts` · `fix-tipo-by-categoria.ts` — limpeza/normalização

### 3. GERAÇÃO DE COPY — a mensagem por lead
- **`lib/playbook-local.ts`** ← O CÉREBRO ATUAL. Gera o playbook completo (msg1 + objeções + follow-up + fechamento) por **nicho × situação × porte**, custo ZERO. `scripts/gerar-playbooks.ts` grava tudo em `leads.script_json`.
- **`lib/nichos.ts`** — mapa de DOR + ARMA por nicho (barbearia, salão, lash, nail, estética, sobrancelha, tranças) + os DEMOS por nicho + as armas universais (WhatsApp semi-auto, logins, crescimento, agenda, migração, no-show, LGPD)
- **`lib/copy-prompt.ts`** — o ARSENAL (system prompt da IA, destilado de Voss/Klaff/Hormozi/Cialdini/SPIN + reclamações reais contra Trinks/Avec/Booksy). Usado só quando regerar via IA.
- `lib/claude-playbook.ts` · `claude-copy.ts` · `gemini.ts` · `openai.ts` · `claude.ts` — IA multi-modelo com fallback
- `scripts/aplicar-personalizadas.ts` — mensagens escritas lead-a-lead lendo as avaliações (marca `manual:estudado`)
- **Regras duras da copy:** nunca citar nº de avaliações · nunca prometer o que não existe (nota fiscal, disparo 100% automático) · self-service honesto (o cliente monta o negócio dele) · link do demo só no `curioso`/`d3`, nunca na msg fria

### 4. DISPARO — manda a mensagem
- **`/disparo`** (página) — fila de hoje, um lead por vez, **abas por nicho** (Barbearia/Salão/Nail/Lash/…), playbook expansível, botões enviar/copiar/depois/não serve
- **`/api/fila`** — monta a fila: ordena por (lote curado → não-usa-sistema → mais avaliações), aplica guard, separa fila/follow-ups/responderam
- **`/api/fila/marcar`** — grava `disparado`/`pular`(arquiva)/`respondeu`/`fechou`/`perdido` (λ.prova-na-fonte: lê a row depois de escrever)
- **`lib/disparo-guard.ts`** — teto diário (40), **rampa de aquecimento**, janela de horário (9h–19h), anti-duplicata. É o que protege o número de ban.
- **`lib/whatsapp.ts`** (Baileys) + **wa.me fallback** — `/api/whatsapp/qr` (conecta), `/send`, `/logout`, `/integracao/whatsapp` (parear + regras de segurança do chip)
  - ⚠️ No Next **dev**, o socket Baileys não é compartilhado com a rota de envio → auto-send dá "desconectado" espúrio. Modo confiável = **wa.me** (abre o WhatsApp com o texto, você toca enviar). Mais seguro pro número também.

### 5. FOLLOW-UP — reengaja quem não respondeu
- No `/disparo`, aba Follow-up: D+3 e D+7 (breakup), textos vêm do `script_json` (`se_sumir_d3` / `se_sumir_d7`)

### 6. TRACKING / CRM leve
- Campos em `leads`: `disparado_em`, `respondeu_em`, `termometro`, `status`, `fechou`, `tempo_resposta_horas`, `selecionado` (lote curado)
- `lib/disparo-analises.ts` · `scripts/stats-final.ts` · `status-base.ts` · `check-disparo-ids.ts`

### 7. FUNIL PÓS-LEAD (Tally)
- `/tally` (dashboard do funil) · `/api/webhooks/tally` (recebe respostas) · `/api/tally/gerar-script-venda` · `gerar-plano` · `marcar-pagamento`
- 2 formulários Tally: Diagnóstico pré-venda + Briefing pós-venda

### 8. DEMOS (prova pra lead)
- 4 negócios demo montados no **AgendaPRO** (um por nicho) — link entra na copy quando a lead engaja. Ver [[project_agendapro_demos_prospeccao]] (memória) e detalhe no doc dos demos.

### 9. LIÇÕES
- `/licoes` · `/api/licoes` — registro de aprendizados de campo

---

## Banco (Turso · tabela `leads`)

Campos-chave: `nome`, `categoria`, `telefone`, `tipo` (lp/shopify/agendapro), `nota`, `num_avaliacoes`, `site_real`, `instagram`, `sistema_detectado`, `nivel_consciencia`, `reviews_texto`, `script_json` (o playbook pronto), `notas`, `status`, `selecionado`, `disparado_em`, `respondeu_em`, `termometro`, `fechou`. Também: `disparos_log` (teto/anti-duplicata), `mensagens` (in/out).

---

## O que falta pra virar produto (productização)

RadarPRO hoje é ferramenta INTERNA da Impulso. Pra outros usarem pra prospectar:
- **Multi-tenant** (cada usuário sua base, seu WhatsApp) — hoje é single-user
- **Onboarding do WhatsApp** simples (QR) — já existe, mas precisa robustez multi-conta
- **Coleta self-service** (o usuário escolhe nicho + cidade e o sistema raspa) — hoje é script manual
- **Copy configurável** pro produto DELE (hoje a copy é do AgendaPRO/Impulso) — o gerador teria que aceitar o produto/nicho do usuário
- **Guard/rampa por conta** — já existe, revalidar multi-conta
- **Deploy que segure WhatsApp** (Vercel não segura — precisa VPS/worker persistente)

**Modelo pensado:** R$97-197/mês pra vendedores/infoprodutores. Diferencial: não é lista de contato, é **playbook real (pitch + objeções + follow-up) + disparo com guard**.

---

**Ver também:** [[STATUS-RADARPRO]] · [[CONTEXTO-RADARPRO-PARA-CHATGPT]] · [[ROADMAP-9-NIVEIS]] · demos em [[project_agendapro_demos_prospeccao]]
