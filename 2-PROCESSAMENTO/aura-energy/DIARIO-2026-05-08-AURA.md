# 08/05 Aura · Briefing v3.1 deploy + Bloco BESS + Bloco 10 Co-criação

**Tema da madrugada:** entrega semana 1 do setup R$1.497 — atacando o que não depende do Renato em paralelo + preparando o que depende dele de forma organizada.

**Marco da sessão:** Briefing-V2 monstro pronto pra mandar pro Renato + sitemap/SEO/Pixel/GA4 plumbado no código + prompt CIC pra automatizar Search Console + GMB.

---

## ⚡ TL;DR (3 frases)

(1) Construí `BRIEFING-AURA-V2-RENATO.md` com 9 blocos + pesquisa de mercado densa (Greener 2026, bancos solares, Pronaf 2,75% a.a., Fio B 60% em 2026, preços R$/kWp, Programa Palmas Solar 40% IPTU) + ordem de envio em 8 pacotes WhatsApp pra Renato mandar foto/dado/áudio sem confusão. (2) Plumbei SEO + Analytics + Pixel no `auraenergy/src/app/layout.tsx` (3 env vars no-op se ausentes) + criei sitemap dinâmico Next.js 16 com 9 URLs + robots.txt bloqueando rotas internas. (3) Preparei prompt CIC pra rodar Search Console + GA4 + GMB + Meta Pixel (45min UI work) — Eduardo cola e CIC executa enquanto Eduardo conversa com Renato no WhatsApp pra entregar pacotes.

---

## 🏗 Conquistas

### 1. `BRIEFING-AURA-V2-RENATO.md` (~900 linhas)

**9 Blocos perguntáveis:**
1. Operação real Brasfrio→Aura (kWp/12m, equipe, CREA, ART, prazos)
2. Cliente ideal e jornada (mix nichos %, origem leads, dor, objeção, ticket)
3. Posicionamento e marca (vibe, concorrentes Palmas, marcas admiradas)
4. Catálogo, marcas, kits (Canadian, Trina, JA, Risen, BYD · Growatt, Deye, Sungrow, WEG, Fronius · faixas R$ por nicho)
5. Financiamento (Solfácil, BV, Sicredi, Sicoob, BNDES, Pronaf Bioeconomia, FNE Sol)
6. Heros das 5 LPs (`/`, `/casa`, `/comercio`, `/industria`, `/rural`) — headline + caso real + foto
7. Estratégia 90 dias (capacidade Renato, ads, canal, meta vendas)
8. Bônus, garantias, diferenciais (performance, monitoramento, limpeza, treinamento)
9. **DECISÕES ESTRATÉGICAS** — virou bloco separado depois de Eduardo cravar que decisões são DELE, não recomendações minhas (preço público, marca dominante, Pronaf, Palmas Solar grátis, baterias, garantia performance, etc)

**Apêndice de pesquisa:** marcas top 2026 com preços, taxas reais bancos, preço médio R$/kWp por nicho, Lei 14.300 cronograma, Programa Palmas Solar 40%, Pronaf 2,75% a.a. com 5 anos carência.

**Seção operacional grupo WhatsApp:** 8 pacotes organizados (institucional → casos por nicho → depoimentos áudio → mapa bairros → bancos) com formato de mensagem padrão pra Renato seguir + template pra Renato pedir áudio aos clientes.

### 2. `PAUTA-STORIES-AURA.md` (15 stories)

15 stories sequenciais cobrindo 10-12 dias com:
- Apresentação Renato → Fio B → antes/depois → bastidores Aura → 4 nichos → Pronaf → caso comercial → Lei 14.300 simples → CTA "manda conta" → selos técnicos → mapa instalações → matemática Fio B 2026/2028 → equipe na obra → reunião grátis → convite próximo carrossel
- Cada story: formato + copy + CTA + sticker + encaminha-pra (carrossel/LP)
- Diretrizes visuais (logo, cores, fonte, stickers)
- Métricas semana 1 (visualizações, cliques, DMs, encaminhamentos, leads)
- Backlog stories semana 2+ (10 ideias)

### 3. SEO + Analytics + Pixel no auraenergy (commit `076394b`)

**Arquivos criados:**
- `public/robots.txt`: User-agent: * Allow: / + Disallow rotas internas (/painel-renato, /direcao-curso, /briefing, /economia-resultado, /api) + Sitemap aponta pro endpoint
- `src/app/sitemap.ts`: sitemap dinâmico Next.js 16, 9 URLs, prioridade 1.0 LP mãe, 0.9 LPs segmentadas, 0.6 funil

**Arquivo modificado:**
- `src/app/layout.tsx`: 3 envs no-op
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` → metadata.verification.google
  - `NEXT_PUBLIC_GA4_ID` → script gtag.js + config (afterInteractive)
  - `NEXT_PUBLIC_META_PIXEL_ID` → fbq init + PageView
- `metadataBase` + `openGraph.url` adicionados

**Build verde + deploy Vercel Ready.**

### 4. `PROMPT-CIC-INDEXACAO-GOOGLE.md`

Prompt completo pra rodar em chat novo do CIC:
- Etapa 1: Search Console (15min) — adiciona propriedade + tag HTML + verifica + submete sitemap
- Etapa 2: GA4 (10min) — cria conta + propriedade + Web stream + copia ID + DebugView
- Etapa 3: GMB (15min) — adiciona empresa + categorias + service area + verificação (vídeo ou postcard)
- Etapa 4: Meta Pixel (10min, opcional) — cria pixel + ID + Pixel Helper

Cada etapa com:
- URLs exatas
- Campos a preencher
- Onde setar env var no Vercel
- Quando redeploy
- Validação (DebugView, screenshot)
- Regras de parada (CAPTCHA, 2FA, dúvida)

**Decisão de conta:** rodar tudo em `edubchaves5@gmail.com` pra agilizar; transferir/compartilhar ownership pro Renato depois (Search Console + GA4 + GMB todos suportam).

### 5. STATUS-AURA-ENERGY atualizado

Cabeçalho atualizado pra 08/05 + ponteiros pros 3 docs novos + checklist semana 1 com `[x]` no que entregamos.

---

## 🚦 O que falta pra completar entrega R$1.497

| Tarefa | Quem | Quando |
|---|---|---|
| Cria grupo WhatsApp + manda Mensagem 1 do briefing | Eduardo | hoje |
| Cola prompt CIC + roda Search Console + GA4 + GMB | Eduardo via CIC | hoje |
| Comprar domínio auraenergy.com.br | Eduardo | hoje (15min) |
| Exportar PDF Direção info-produto | Eduardo | 5min Ctrl+P em /direcao-curso |
| Cartão visita digital + QR Code | Eduardo Canva | 1-2h |
| 6 artes Instagram | Eduardo Canva | 3-5h |
| Renato manda 8 pacotes WhatsApp | Renato | 5-7 dias (1-2 pacotes/dia) |
| Calibragem LP com dados reais | Eduardo + Verbo | qui-sex 08-09/05 |
| Insta @auraenergy criado | Eduardo | sáb-dom 10-11/05 |
| Verificar GMB (postcard) | Renato (recebe correios) | 5-14 dias |
| Apontar domínio Vercel | Eduardo | seg 12/05 |

---

## 📊 Métricas

- **Tempo de sessão Aura (08/05 madrugada):** ~2h
- **Linhas escritas:** ~1.500 (briefing + pauta stories + prompt CIC + status)
- **Arquivos criados:** 4 docs + 2 código
- **Commits no auraenergy:** 1 (076394b)
- **Tasks fechadas:** 3 (#153 sitemap, #154 stories, #161 setup digital prompt pronto)

---

## 🔁 Backlog técnico (próximas rodadas)

- Calibragem LP — quando dados Renato chegarem
- Repo GitHub auraenergy (#133) — `gh` não instalado, fica 3 comandos pra Eduardo
- Cartão visita digital — opção: criar página `/cartao` com vCard download em vez de Canva
- Auditoria SEO completa após indexação Google (1-2 semanas pós Search Console)
- Comprar domínio + apontar DNS Vercel

---

**Ver também:** [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-AURA-ENERGY]] · [[CASE-AURA-LOG]]
