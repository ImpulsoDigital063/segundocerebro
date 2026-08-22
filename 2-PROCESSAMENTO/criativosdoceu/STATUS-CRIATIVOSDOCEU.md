# STATUS-CRIATIVOSDOCEU

> Revisado no update geral de 04/07/2026 — dormente desde 13/05: LP + Kiwify no ar, briefing v1 enviado ao Matheus, sem resposta registrada nem novos PSDs desde então (~7 semanas parado).

**Última atualização:** 2026-05-13 (final da tarde · briefing v1 deployado + link enviado pro Matheus)
**Status do projeto:** 🟢 **Briefing no ar · aguardando respostas do Matheus**
**Tipo:** Projeto próprio Impulso · parceria por permuta com **Matheus Reis** (Ressil Design)
**Domínio:** https://criativosdoceu.com

---

## 📌 RESUMO EXECUTIVO

Criativos do Céu é um produto de assinatura de PSDs/templates pra igrejas — parceria Eduardo × Matheus Reis. Matheus é **Creative Director · Singer · Preacher da Base Church (Palmas-TO)**, designer profissional com 75% do portfolio Behance em gospel. Eduardo entrou com estratégia, LP, plano de negócio, Kiwify, Drive como entrega; Matheus entrou com criação dos PSDs (entregou 6 posts × 7 slides na permuta).

Estado em 13/05: LP no ar (`criativosdoceu.com`), Kiwify configurado (R$ 37,90/mês · R$ 197/ano), mas a produção de novos PSDs travou — Matheus parado **especificamente neste projeto** (nos outros — Ressil + Base Church — ele está produzindo 8-9 posts/semana, voando normal · ver [[feedback-nao-dramatizar-narrativas-emocionais]]).

Hoje 13/05 entregamos: **3 pesquisas profundas** (mercado BR + mercado Palmas + IG + Behance), **briefing consultivo v1** deployado em `criativosdoceu.com/briefing` com 10 blocos pedindo direção do Matheus pra fechar a finalização. Aguardando ele responder.

---

## 🎯 MODELO COMERCIAL CRAVADO

| Plano | Preço | Link Kiwify ativo |
|---|---|---|
| Mensal | R$ 37,90 | `pay.kiwify.com.br/VJItdsy` |
| Anual ★ | R$ 197 (econ 57%) | `pay.kiwify.com.br/JleoMKc` |

- **Entrega:** Google Drive (Matheus sobe PSDs novos toda semana) + área Kiwify + grupo VIP WhatsApp
- **Garantia:** 7 dias · Pix/Cartão/Boleto via Kiwify
- **Pesquisa nacional recomendou subir pra R$ 47/mês · R$ 297/ano** (R$ 197/ano coincide com KDG vitalício do líder · cria confusão). **Decisão final aguarda Matheus** (Bloco 6 do briefing).

---

## 🏗 INFRAESTRUTURA TÉCNICA

### Repo
- **GitHub:** `ImpulsoDigital063/criativosdoceu` · branch `main`
- **Local:** `C:/Users/Usuario/criativosdoceu/`
- **Stack:** Next.js 16.2.2 + React 19.2.4 + Tailwind v4 + Turbopack
- **AGENTS.md alerta:** *"This is NOT the Next.js you know"* — ler `node_modules/next/dist/docs/` antes de mexer em estrutura

### Vercel
- **Projeto:** `criativosdoceu` (scope `impulsodigitals-projects`, conta `edubchaves5-3060`)
- **Último deploy:** `criativosdoceu-ihucxpt6a` (13/05 final tarde · Production · Ready)
- **Auto-deploy:** push em `main` dispara build automático

### Supabase
- **Projeto compartilhado:** `thdsmldmswrjycaqxbnm.supabase.co` (mesmo da Aura · org `ImpulsoDigital063` · Free tier)
- **Tabela:** `briefings` (slug PK + jsonb data + status + progress + RLS + Realtime publication)
- **Slug deste briefing:** `ressil-matheus`
- **Migration:** `criativosdoceu/supabase/migrations/0001_briefings.sql`

### Env vars setadas (Vercel · production)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `BRIEFING_VIEWER_TOKEN=criativosdoceu-painel-2026-matheus`
- (Resend não configurado · submit final salva no Supabase mas não dispara email · painel realtime cobre)

---

## 📋 BRIEFING CONSULTIVO V1 (cravado 13/05)

### URLs ativas
- **Matheus responde:** https://criativosdoceu.com/briefing
- **Eduardo monitora:** https://criativosdoceu.com/painel-briefing?token=criativosdoceu-painel-2026-matheus
- **Detalhe Realtime:** https://criativosdoceu.com/painel-briefing/ressil-matheus?token=criativosdoceu-painel-2026-matheus
- **Pós-envio:** https://criativosdoceu.com/briefing/obrigado

### Estrutura (10 blocos · pegada consultiva)
0. Boas-vindas (nome, WhatsApp, canal, tempo)
1. Identidade + Hero (3 opções pré-pesquisadas + outro · subtítulo + CTA)
2. Posicionamento estético (cult-modern × tradicional + visual LP dark/white + logo)
3. Estilos (8 da LP atual) + Categorias (26 pré-listadas · substitui "+30")
4. Portfolio (histórico das 15 peças nomeadas + decisão galeria)
5. Modelo de entrega (volume semanal · 5/sem mencionado · Drive · VIP)
6. Preço (R$ 37,90 × R$ 47 × outro · trial R$ 1 · vitalício)
7. Prova social + Lançamento Palmas (depoimentos fake · vídeo Pr. Robson · 10 igrejas-alvo · Capital da Fé · correções bios)
8. Tamanho da oportunidade (dados puros · TAM/SAM/SOM · concorrência · Palmas · 1 textarea de reação)
9. Co-criação (sonho · falta · ideia ORIGINAL · remuneração)

### Tom
**Consultivo · não terapêutico.** Cada bloco mostra o que está pronto + opções A/B/C + campo livre. NÃO pergunta "por que parou", "o que te desmotivou" — apenas escolhas táticas + dados.

### Visual
**Cream-warm Aesop-style.** Background `#fafaf6` · texto preto/grafite · dourado sutil `#b08a3a` (desaturado, menos vibrante que o `#c8a44a` da LP atual). Inter pros títulos de pergunta · Bebas só pros hero/marca · Playfair italic em destaques. Sem caixa-alta densa.

---

## 🔬 PESQUISAS REALIZADAS (output em arquivos do segundo-cérebro)

| Pesquisa | Arquivo | Output principal |
|---|---|---|
| **Mercado BR** | `PESQUISA-MERCADO-PSD-IGREJA-BR-2026.md` | 12 concorrentes mapeados · TAM R$ 10,8M/ano · gap cult-modern · preço sugerido R$ 47/297 · TAM/SAM/SOM completo |
| **Mercado Palmas** | `PESQUISA-MERCADO-PALMAS-PSD-IGREJA.md` | 17 igrejas Palmas com Insta · 7 Tier A/B cult-modern · 10 igrejas-alvo · zero concorrente local · Capital da Fé 45.200 pessoas · plano ataque 4 fases |
| **IG (varredura via Claude for Chrome)** | `RELATORIO-IG-MATHEUS-VARREDURA.md` | @ressildesign 475 seg · @matheusreis.co 2.452 seg · @basechurchpalmas 13.297 seg (8-9 posts/sem) · top 5 da Base · viral "Sobre sua família" 14.742 plays · concorrentes IG (maior @_igrejapost 3.901 seg) |
| **Behance** | `RELATORIO-BEHANCE-MATHEUS.md` | 12 projetos · 75% gospel · top 2: "Domingo na Igreja" 1.616 e 1.313 views · handle IG do Behance está desatualizado |

### Achados cravados (cruzando os 3 níveis)
1. **Gap cult-modern não atendido no BR** — 100% dos concorrentes em estética gospel tradicional
2. **Matheus é insider real** — Creative Director Base Church · pode dizer o que ninguém pode
3. **Reativar = empacotar entregas Base (não produzir do zero)** — ele já entrega 8-9/sem pra Base
4. **Lançamento Palmas-first** — 10 igrejas mapeadas · 0 concorrente local · Capital da Fé como flagship
5. **Hero proposto cruzando tudo:** *"PSDs prontos pro culto. Feitos pelo Creative Director da Base Church."*

---

## 👤 SOBRE O MATHEUS (cravado · sem inflar)

| Campo | Valor |
|---|---|
| Nome | Matheus Reis |
| Cidade | Palmas-TO |
| Empresa | Ressil Design (estúdio próprio) |
| Papel formal Base Church | **Creative Director · Singer · Preacher** (membro ativo) |
| IG estúdio | @ressildesign · 475 seg · 0,7 post/sem · 19 dias parado no projeto |
| IG pessoal | @matheusreis.co · 2.452 seg · 1,4 post/sem |
| IG igreja | @basechurchpalmas · 13.297 seg · 8-9 posts/sem |
| Behance | behance.net/mtwproducoes · 12 projetos · 75% gospel |
| ⚠️ Atenção | Behance lista IG `@matheusreis.design` mas esse handle NÃO existe · ativo é `@matheusreis.co` |

---

## 🏛 SOBRE A BASE CHURCH (case principal)

- **Igreja:** Base Church Palmas (`baseccc.com.br`) · Comunhão Cristã
- **Tagline:** "UMA FAMÍLIA PARA SEMPRE"
- **Tema 2026:** "A Partir de Jesus"
- **Pastor titular:** Robson Correa (@robsoncorreaoficial)
- **Copastora:** Fabiana Correa (@mrsfabianacorrea)
- **Cultos:** Domingo 10h, 12h, 18h, 20h · Quarta 20h (4 cultos/domingo = porte médio-grande)
- **Sub-marcas internas:** Base Store + Base Sports + New Level (jovens)
- **YouTube:** youtube.com/c/BaseChurchPalmas (ativo)
- **Caso viral 26/abr:** "Sobre sua família" · 14.742 plays · 887 likes · 40 coments — **será mockup principal da home pós-Matheus**

---

## ⏳ PRÓXIMOS PASSOS

### Aguardando agora
- 🟡 **Matheus responder o briefing** (sem prazo cravado · ele responde quando puder)
- Quando ele clicar "Enviar briefing" no fim · Supabase marca como `completed` · status muda no painel

### Pós-resposta do Matheus (sequência cravada)
1. **Reescrever Plano de Negócio Criativos do Céu** (task #9 pendente · modelo `PADRAO-PLANO-NEGOCIO-IMPULSO`) com as decisões dele + dados das 3 pesquisas
2. **Atualizar LP** com hero/CTA/preço/posicionamento cravado · galeria com top 5 Base Church · remover depoimentos fake
3. **Cronograma de lançamento Palmas** com as 10 igrejas-alvo confirmadas + datas (Capital da Fé fev/27 é o flagship)
4. **Cold outreach via Matheus** pras 7 Tier A/B (mensagem "Você conhece meu trabalho na Base · criei um pack assinatura · quer 30 dias grátis pra testar?")
5. **Vídeo Pr. Robson** endossando (se Matheus confirmar)
6. **Atualizar bios** @ressildesign + @matheusreis.co + Behance pra apontar criativosdoceu.com (decisões do Bloco 7 do briefing)

### Decisões pendentes (precisam de input Matheus)
- Hero da home · Apresentação · Frase-síntese · Posicionamento estético · Visual LP (dark × white) · Logo (manter × criar) · Estilos confirmados · Categorias reais · Histórico dos 15 PSDs · Galeria · Volume/Drive/VIP · Preço final · Depoimentos · Igrejas-alvo confirmadas

---

## 📂 ARQUIVOS PRODUZIDOS HOJE (13/05)

### Em `segundo-cerebro/2-PROCESSAMENTO/criativosdoceu/`
- `STATUS-CRIATIVOSDOCEU.md` (este arquivo)
- `PESQUISA-MERCADO-PSD-IGREJA-BR-2026.md`
- `PESQUISA-MERCADO-PALMAS-PSD-IGREJA.md`
- `RELATORIO-IG-MATHEUS-VARREDURA.md`
- `RELATORIO-BEHANCE-MATHEUS.md`

### Em `criativosdoceu/` (repo do código)
- `lib/supabase.ts` · `lib/briefing-schema.ts`
- `app/api/briefing/draft/route.ts` · `app/api/briefing/submit/route.ts`
- `components/BriefingForm.tsx`
- `app/briefing/page.tsx` · `app/briefing/obrigado/page.tsx`
- `app/painel-briefing/page.tsx` · `app/painel-briefing/[slug]/page.tsx` · `app/painel-briefing/[slug]/BriefingViewer.tsx`
- `supabase/migrations/0001_briefings.sql`
- `.env.local.example`

### Commits relevantes (criativosdoceu)
- `1d1f34a` · feat: adiciona briefing consultivo do Matheus + painel admin Realtime
- `0ce24fd` · feat: visual cream-warm Aesop-style + 2 perguntas (visual LP, logo)

---

## 🔁 ATUALIZAR ESTE ARQUIVO QUANDO

- ✅ Matheus iniciar o preenchimento (status muda no painel)
- ✅ Matheus enviar o briefing final (status = completed)
- ✅ Plano de negócio reescrito
- ✅ LP atualizada com decisões dele
- ✅ Primeira igreja-alvo (não-Base) fechada · primeiro pagamento
- ✅ Houver mudança de preço/posicionamento

---

**Tag:** `#projeto-impulso` `#produto-proprio` `#parceria` `#gospel` `#palmas` `#briefing-ativo`

**Ver também:**
- Memory: [[project-criativosdoceu]] · [[feedback-nao-dramatizar-narrativas-emocionais]] · [[reference-ferramentas-claude-eduardo]]
- Pesquisas: ↑ acima
- Hubs: [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]]
- Status correlatos: [[STATUS-AURA-ENERGY]] (mesma infra Supabase de briefings)
