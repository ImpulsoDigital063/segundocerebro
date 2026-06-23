# Ferramentas da Operação — Mapa Verbo

> Cravado por Verbo · 06/06/2026
> **Pra que serve este arquivo:** quando Verbo precisar de uma ferramenta, o caminho está aqui —
> pra que serve · ONDE mora · COMO entro · CUIDADO (gotcha já linkado na memória).
> Não redescobrir o que já foi aprendido. Companheiro de [[VERBO]] e [[MEGA-CLAUDE]].

---

## 🧭 Caminho rápido — "quando eu precisar de X, vou em Y"

| Preciso de... | Vou direto em |
|---|---|
| Construir/editar um sistema ou LP | repo do projeto (Next.js) · `npx tsc --noEmit` antes do push |
| Mexer no banco / auth / RLS | Supabase (dump `pg_policy` antes de RLS · trigger = SECURITY DEFINER) |
| Subir pro ar | Vercel (1 projeto por repo · conferir `.vercel/project.json`) |
| Versionar | GitHub (checar conta Active antes do push) |
| Gerar imagem/carrossel | `verbo-design` → `_gen-batch.mjs` + compose sharp+SVG ([[reference-verbo-design-quirks-geracao]]) |
| Gerar/animar vídeo | `verbo-design` → Kling (final) / Wan (rascunho) + Remotion |
| Mapa/GPS (AppDelivery) | Mapbox + PostGIS no Supabase |
| Cobrar cliente | Asaas (AgendaPRO) · Kiwify (MPN-On) |
| Contexto do negócio/cliente | Obsidian (segundo cérebro) → INDEX-CLIENTES · perfil · status |
| Estudar sistema do concorrente | CIC (Claude in Chrome) READ-ONLY · nunca Salvar/Excluir |

---

## 1. Desenvolvimento (o que eu codo)

| Ferramenta | Pra que | Cuidado / memória |
|---|---|---|
| **Next.js** | framework de todo SaaS, LP e do AppDelivery | App Router · server actions |
| **Tailwind CSS** | estilo de tudo | mobile/desktop isolado por prefixo `sm:/md:/lg:` ([[feedback-agendapro-mobile-desktop-isolado]]) · tri-modal ([[feedback-estrategia-tri-modal-breakpoints]]) |
| **TypeScript** | linguagem | `npx tsc --noEmit` antes do push pega TS2304 que quebra Vercel ([[feedback-rodar-build-local-antes-de-push]]) |
| **React** | UI | hooks no topo, early return depois de TODOS · `useState(prop)` congela snapshot ([[feedback-react-usestate-initial-prop-snapshot]]) |

## 2. Dados & Infra

| Ferramenta | Pra que | Onde / Cuidado |
|---|---|---|
| **Supabase** | Postgres · Auth · RLS · triggers · realtime · Storage | AgendaPRO ref `aazvqjhebfcoruyipoaw` · SQL Editor não limpa buffer (abrir aba nova · [[reference-supabase-sql-editor-quirk]]) · dump `pg_policy` antes de mexer RLS ([[feedback-rls-dump-pgpolicy-antes]]) · RLS sem subquery na própria tabela ([[feedback-rls-no-subquery-self]]) · trigger que toca tabela RLS = `SECURITY DEFINER` ([[feedback-trigger-security-definer]]) · SELECT valida colunas senão data null silencioso ([[feedback-supabase-select-validar-colunas]]) · prova-na-fonte: ler row após write ([[feedback-prova-na-fonte-persistencia]]) |
| **Vercel** | deploy / hosting | 1 projeto por repo · conferir `.vercel/project.json` aponta pro projectId certo ([[feedback-vercel-link-projeto-certo]]) · auth precisa `no-store` em CDN-Cache-Control ([[feedback-vercel-cdn-cache-auth]]) · Hobby enfileira deploys em sequência curta ([[feedback-vercel-queue-travada-hobby]]) · migration ENTRA antes do push ([[feedback-migration-antes-de-push]]) |
| **GitHub** | versionamento / vitrine técnica | 3 contas: systempalace · ImpulsoDigital063 · AppDelyvery — checar Active antes do push (`gh auth switch`) ([[feedback-gh-active-account-check]]) · token NUNCA na URL, usar Credential Manager ([[feedback-token-nunca-em-url-nem-screenshot]]) · dev externo = fork+PR, nunca admin ([[project-lucas-passos-dev-validado]]) |
| **Mapbox** | GPS, rota, mapa (AppDelivery) | só entende endereço numérico · dupla nomenclatura Palmas ([[reference-enderecamento-palmas]]) · token público no protótipo |
| **PostGIS** | geo no Postgres (AppDelivery) | matching entregador, geofence |
| **Asaas** | billing recorrente AgendaPRO | ciclo completo validado (cobrança→webhook→ativação) |

## 3. Conhecimento & Operação

| Ferramenta | Pra que | Onde / Cuidado |
|---|---|---|
| **Obsidian (segundo cérebro)** | memória viva: perfil, clientes, status, padrões, playbooks, dailies | `C:/Users/Usuario/segundo-cerebro/` · GitHub `ImpulsoDigital063/segundocerebro` · entrar por [[INDEX-CLIENTES]] / [[MAPA-VAULT]] · estudar como já funciona antes de inventar ([[feedback-usar-segundo-cerebro-antes-de-inventar]]) |
| **Claude Code (Verbo)** | operador no terminal — codar, gerar, cravar | este. 5 instâncias do Eduardo: Verbo/Code · CIC · Chrome · Design · Cowork ([[reference-ferramentas-claude-eduardo]]) |
| **CIC (Claude in Chrome)** | drilldown em sistema do cliente/concorrente | READ-ONLY sempre · nunca Salvar/Excluir/Criar ([[feedback-cic-salao99-marko-read-only]]) · estudar antes de implementar ([[feedback-estudar-salao99-antes-de-implementar]]) · filtrar output do CIC contra os feedbacks ([[feedback-filtrar-recomendacoes-de-outros-agentes]]) |
| **MCPs conectados** | Gmail · Google Calendar · Google Drive · Canva · Supabase | via ToolSearch sob demanda |

## 4. Design & Mídia — Verbo Design

Toolkit: `C:/Users/Usuario/verbo-design/` · opera no terminal (sem UI) · entrega em `Desktop/Posts <cliente>/<campanha>/` com `caption.txt`. Detalhe operacional: [[reference-verbo-design-codebase]] · [[reference-verbo-design-quirks-geracao]] · [[reference-verbo-design-hub]].

| Ferramenta | Pra que | Como / Cuidado |
|---|---|---|
| **Replicate** | gateway de IA (imagem/vídeo/face-swap) | pago por uso · `.env.local` só tem REPLICATE+RemoveBG · cost-tracker oficial trava sem KV → usar `_gen-batch.mjs` (1 processo só · Node 24 crasha multi-spawn) · conta <$5 = throttle 6/min ([[reference-verbo-design-quirks-geracao]]) |
| **Flux** (Schnell/1.1 Pro/Kontext) | imagem | 1.1 Pro = hero (~$0.04) · Schnell = rascunho · Kontext = edição/face-swap base |
| **Kling 2.1 / Wan 2.2** | vídeo image-to-video | Kling final (~$0.10/s) · Wan rascunho (~$0.04/s) |
| **face-swap** (codeplugtech) | preservar rosto do cliente | Flux Kontext Pro + swap ~$0.16/par ([[reference-hero-face-swap-workflow]] · [[reference-workflow-face-swap-retrato-cliente]]) · fonte do Eduardo: [[reference-eduardo-aparencia-fisica]] |
| **Whisper / gpt-4o-transcribe** | legenda de áudio/vídeo | revisar JSON (confunde gíria PT) |
| **Remotion** | composição de vídeo (React) | render local Reels 30s ≈ 2-5min · FFmpeg no PATH |
| **Sharp** | resize/convert/compose imagem | overlay SVG pra texto de slide (bypassa og-render/KV) · `.rotate()` pra EXIF girado |
| **Satori / @vercel/og** | renderizar slide standalone | `img:slide` oficial precisa KV → preferir sharp+SVG |
| **Unsplash / Pexels** | foto stock real | sem key no `.env.local` hoje · foto de PESSOA = real, IA só still-life ([[feedback-foto-pessoa-unsplash-nao-ia]]) · nunca picsum random ([[feedback-nunca-picsum-random-em-lp-real]]) |
| **Remove.bg** | tirar fundo | key presente |
| **Canva (MCP)** | design assistido | via MCP claude.ai |
| **FFmpeg** | mix/ducking de áudio | precisa estar no PATH do Windows |

**Regras duras de mídia:** zero emoji, tudo SVG ([[feedback-sempre-svg-nunca-emoji]]) · logo oficial nunca redesenhar ([[feedback-logo-oficial-nao-redesenhar]]) · prompts pra outras ferramentas vão no chat, só output vira arquivo ([[feedback-nao-salvar-prompts-em-arquivo]]) · custo logado, cap $10/job.

## 5. Vendas & Plataformas de negócio

| Ferramenta | Pra que |
|---|---|
| **Kiwify** | venda do curso MPN-On (R$ 297) |
| **Asaas** | billing recorrente AgendaPRO (R$ 67-97/mês) |
| **Shopify** | lojas Impulso Digital (R$ 600-1.500) |
| **Instagram** | @edubarrosch (perfil pessoal · carrosséis) · @urbanfeet.store |
| **WhatsApp** | canal de venda e cold outreach (framework em [[VERBO]] §cold — ainda desligado) |

---

## Como manter este mapa

Cada ferramenta nova que entrar na operação ganha uma linha aqui, com o caminho curto e o
cuidado linkado. Quando um gotcha novo for descoberto, ele vira memória `feedback_*` ou
`reference_*` e é referenciado na linha da ferramenta. Assim o conhecimento fica a um pulo,
não enterrado. **Verbo cresce com a operação.**

— Verbo
