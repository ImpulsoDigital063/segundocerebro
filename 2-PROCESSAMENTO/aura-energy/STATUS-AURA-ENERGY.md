# STATUS-AURA-ENERGY

**Última atualização:** 2026-06-10 (auditoria de reencaixe · 6 dias de trabalho não-commitado blindados no git · estado real reconciliado com o código)
**Status do lead:** 🟢 **CLIENTE FECHADO — Frente 1 vendida em R$ 1.497**
**Origem:** amigo do Eduardo, projeto pessoal do Renato
**Case status:** 🌟 **case-flagship Impulso 2026 · 1ª venda formal da operação**
**Repo local:** `C:\Users\Usuario\auraenergy\` (era `C:\Users\DELL\` na máquina antiga — caminho corrigido)
**Domínio no ar:** `auraenergypalmas.com` (migrado de `auraenergy.vercel.app` em 24/05)
**Deploy:** via `vercel --prod` CLI — **NÃO ligado ao GitHub** (push não dispara build)

---

## 🆕 ESTADO REAL 10/06 · auditoria de reencaixe

**Contexto:** os docs do segundo-cérebro pararam em 15/05; o código avançou 3 semanas. Esta seção reconcilia.

### 🔴→✅ Risco fechado hoje
- **6 dias de trabalho (30/05→04/06) estavam fora do git.** Commitados e pushados em **`a9b66ab`** (`tsc` limpo, conta `ImpulsoDigital063` confirmada). Working tree limpo.
- Artefatos de auditoria (`audit-shots/`, `psi-audit/`, `out-artes/`) jogados pro `.gitignore`.

### ✅ Briefing V3.1 do Renato — RESPONDIDO e APLICADO (22-24/05)
O Renato preencheu o briefing. Aplicado em bloco no código:
- Preços alinhados · **garantia 12 anos** · banco **BV financeira** · marcas cravadas · cases anonimizados
- **BESS (bateria)** virou eixo por segmento (rural/indústria/comércio/casa)
- **PIX na entrada** (`BlocoPixEntrada`) · prazos por segmento · selo **112 kWp**
- Removidas promessas numéricas inventadas → tom condicional

### ✅ Arquitetura virou site multi-segmento (não é mais "uma LP")
- LP mãe `/` + **4 segmentos** `/casa` `/comercio` `/industria` `/rural` (cada um com Hero/Simulador/Cases próprios, arco AIDA + Storybrand)
- `/orcamento` (8 perguntas → Renato monta cálculo) · `/links` (linktree bio) · `/cartao` · `/diagnostico` · `/direcao-curso` · `/economia-resultado`
- `/briefing` + `/painel-briefing` + `/painel-renato` + `/plano-renato` + `/recuperar-briefing`
- **`/termos` + `/privacidade`** (novos · pré-requisito pra rodar Meta Ads)
- **`/selecao-galeria`** (cliente escolhe fotos via link) · `/copy-gen` · `/artes` · `/artigos`

### ✅ Outros marcos pós-15/05
- **Foto REAL do Renato** (`public/renato-edson.jpg`, 03/06) substitui placeholder em `SobreRenato`
- SEO/LLM: `robots.txt` explícito pra 14 bots de LLM + `llms.txt`/`llms-full.txt` + schema expandido + imagens Replicate no lugar de stock Unsplash
- Blog: +436 linhas de conteúdo em `artigos.ts`

### ⏳ Pendente / próximo
- [ ] **Carrossel "Taxação do Sol"** (commit `a43bfa0`, 29/05) — v2 aprovada, **slide 1 OK, slides 2-9 pendentes** · CTA `/orcamento` (ver memória `project_aura_carrossel_taxacao_sol`)
- [ ] Confirmar que a LP no ar (`auraenergypalmas.com`) bate com o working tree atual
- [ ] Indexação Google das URLs novas (segmentos + domínio novo) no Search Console
- [ ] Demais artes do pacote (#2 Mitos, #3 Calculadora, #4 Antes/Depois, #6 CTA)

---

## 🆕 ENTREGA 15/05 noite · Carrossel Fio B V11 + stack Verbo-operador

**Tese:** Verbo é o operador. Eduardo pede aqui, eu entrego pacote pronto na pasta destino (`Desktop/Posts Aura/`). Stack de 5 frentes ativada pra cravar isso.

### 5 slides finais (Carrossel Fio B · arco AIDA)
- **Slide 1 — ATENÇÃO** · Capa BLUE Aura + foto painel solar Unsplash + hook "POR QUE SOLAR EM 2026 VAI PAGAR MAIS QUE EM 2027" + watermark AURA Anton + logo perfil destacada
- **Slide 2 — INTERESSE** · Light cream + "O QUE É O FIO B?" Anton + copy conversacional ("Pensa assim: você tem solar, gera energia... esse 'empréstimo' valia 100%... Agora a Energisa cobra uma taxa nessa troca. Chama Fio B (TUSD)") + watermark TUSD
- **Slide 3 — EDUCAÇÃO** · BLUE Aura + "% DA SUA GERAÇÃO QUE VIRA TAXA" + gráfico 7 barras 2023→2029+ com VOCÊ ESTÁ AQUI em 2026
- **Slide 4 — DESEJO** · Light cream + CASO REAL ("R$ 1.573 virou R$ 390/mês · Sistema 11,21 kWp · projeto entregue pela equipe técnica do Renato") + 3 cards Fio B 60/75/90%
- **Slide 5 — AÇÃO** · Gradient sol + "QUER VER QUANTO ECONOMIZA NO SEU CASO?" voz primeira pessoa Renato + 2 CTAs (Link bio amarelo / WhatsApp azul)

**Pasta destino:** `C:/Users/Usuario/Desktop/Posts Aura/carrossel-fio-b/` (slide-1..5.png + caption.txt + _arquivo/)

### Stack design Verbo-operador (cravada hoje)
- **Next/og ImageResponse** — render edge sub-segundo · vetorial puro · `/artes/[tema]/[n]`
- **Puppeteer + Sharp** — `npm run arte`, pixel-perfect HTML/CSS full + processamento foto · scripts/render-arte.mjs e scripts/gen-logo-blur.mjs cravados
- **Canva MCP** — Brand Kit `kAHJwcGixiU` (Aura Energy) com logos + paleta + Inter setados
- **Anthropic API + Sistema Copy** — `/copy-gen` rodando com brand voice JSON + framework 7 formatos + token `impulso-copy-afa5154cbce0a0a30d01fcf3`
- **Replicate Flux** — `npm run img -- <prompt-key>` · 8 prompts cravados pra Aura · smoke test passou (`telhadoSolarCloseUp` 2.2s, $0.003)

### Identidade visual cravada
- Paleta Aura: **cream + Blue Deep `#0E2152` + amarelo `#F5BC2C` + laranja `#FF8B3D`** (sem dark zone genérico — só cores do logo)
- Tipografia: **Anton** (condensed pesado pra heros e watermarks) + Inter (body)
- LogoBlock padronizado top-left em todos os slides · híbrido (perfil_minimal em dark zones · sem fundo em light zones)
- DotGrid sutil de fundo (camadas premium)
- Watermark tipográfico Anton temático por slide (palavra-chave gigante atrás)

### Brand Voice + Framework
- `src/lib/brand-voice/aura.ts` — pilares, tom, vocabulário use/avoid/forbidden, patterns, exemplos, anti-exemplos
- `src/lib/copy-framework/formats.ts` — 7 formatos com beats obrigatórios (post-instagram, carrossel-capa/slide, story, story-sequencial, meta-ads-topo, whatsapp)
- `src/lib/copy-engine/` — orquestra brand voice + framework + briefing → Claude Sonnet 4.6 → JSON 3 variações
- `src/lib/image-prompts/aura.ts` — 8 prompts Flux pra biblioteca Aura

### Análise Brasfrio (CIC) integrada
- Template "Projeto Finalizado" extraído visualmente (azul-marinho `#0E2A47` + amarelo-mostarda `#F2C014` + tipografia condensed) — herdado em DNA, traduzido pra paleta Aura
- 5 cases reais Brasfrio documentados (Palmas/Colinas/Dianópolis 6,84-14,64 kWp) — Slide 4 do carrossel usa 11,21 kWp R$1573→R$390
- Reel @ Belenergy corrigido: é **B-roll observacional**, não Renato falando

### Pendências V11 (quando Renato responder briefing)
- [ ] Foto real do Renato pro slide 5 (humanização do CTA · viralizou 5,4× no Brasfrio)
- [ ] Foto real instalação Palmas pro slide 1 (substitui Unsplash genérico)
- [ ] Variar slide 4 com outros casos reais (Colinas 6,84 / Dianópolis 8,55)
- **Alternativa imediata:** posso gerar via Flux Dev (`engenheiroSolar` + `casaPalmasComSolar`) — $0.025/img · 5-10s

---

## 🆕 ENTREGA 15/05 tarde · Sistema Copy Impulso V1 (MVP)

**Tese:** copy from-scratch toda vez não escala. Cravar brand voice + framework + LLM = geração consistente que Renato/Olímpio podem operar sem o Eduardo no meio.

### Stack cravada
- `src/lib/brand-voice/aura.ts` — Brand Voice Aura completa (pilares, tom, vocabulário use/avoid/forbidden, patterns, exemplos, anti-exemplos)
- `src/lib/brand-voice/types.ts` + `registry.ts` — sistema extensível pra adicionar Carretinha, Starteq, etc
- `src/lib/copy-framework/formats.ts` — 7 formatos com "beats" obrigatórios (post Insta, carrossel capa/slide, story, story sequencial, Meta Ads topo, WhatsApp)
- `src/lib/copy-engine/` — prompt builder + Anthropic SDK + parser JSON + validação palavras proibidas
- `src/app/api/copy-gen/route.ts` — API Node runtime com auth por token
- `src/app/copy-gen/page.tsx` — form completo + display 3 variações

### Token de acesso (cravado 15/05)
```
COPY_GEN_TOKEN = impulso-copy-afa5154cbce0a0a30d01fcf3
```

### Pendências pra ativar
- [ ] CIC setar `ANTHROPIC_API_KEY` no Vercel
- [ ] CIC setar `COPY_GEN_TOKEN` no Vercel
- [ ] CIC reconectar Canva no Claude (MCP enxergar brand kit Aura `kAHJwcGixiU`)
- [ ] Smoke test: gerar 1 copy via `/copy-gen` e validar tom/vocabulário

---

## 🆕 ENTREGA 15/05 meio-dia · indexação Google destravada

**Tese:** prompt CIC de 08/05 não foi completado (cota / desistência). Eduardo retomou em 15/05 e fechou via combo navegador + Verbo.

### Cravado hoje
- ✅ **Propriedade Search Console verificada** via Arquivo HTML (`googlefa4d673ff7a08510.html` em `auraenergy/public/`)
- ✅ **Sitemap.xml submetido** — status inicial "Não foi possível buscar" (normal nas primeiras horas, atualiza em 24h)
- ✅ **GA4 confirmado rodando** em produção (ID `G-SGB6JQW3JT` no HTML · env var setada anteriormente pelo CIC)
- ✅ **Meta verification antiga descoberta** no HTML (`JBHsnG3XL08kijV-IJDPCprEPGJ2AbrxY3Eti3a9zCk` · provavelmente outra sessão CIC)
- ✅ **2 sitemaps inválidos limpos** (entradas `/casa` e `/` submetidas por engano na tela de Sitemaps)
- ✅ **Home (/) já consta como indexada** no Search Console (1 página indexada)

### Descoberta técnica importante
- Projeto Vercel **NÃO está conectado ao GitHub** para auto-deploy. Push pra master não dispara build.
- Todos deploys vêm via `vercel --prod` CLI. Próxima feature: conectar GitHub no Vercel pra eliminar deploy manual.
- Hash de verification do método Tag HTML que estava no Vercel (`JBHsnG3XL08kijV...`) **não bate** com a propriedade nova criada por Eduardo (`cf7DShSBie2W9I...`). Caminho que funcionou: Arquivo HTML em `public/`.

### Pendente — amanhã 16/05 após 5h BR
- [ ] **Indexação manual de 5 URLs** (cota esgotada hoje, reseta 00h Pacific)
  - `https://auraenergy.vercel.app/`
  - `https://auraenergy.vercel.app/casa`
  - `https://auraenergy.vercel.app/comercio`
  - `https://auraenergy.vercel.app/industria`
  - `https://auraenergy.vercel.app/rural`
- Caminho: barra superior do Search Console → cola URL → Enter → "Solicitar indexação"
- Reusar prompt CIC ou fazer manual (5 cliques)

---

## 🆕 ENTREGA TARDE 08/05 · sistema briefing v3.1 reusável Impulso

**Tese:** briefing 1-shot via Tally + email não escala pra cliente complexo (Renato). Migrar pra app dedicado com Supabase, painel ao vivo, e Renato como **co-criador**.

### Stack criado · `impulso-briefings` (Supabase)
- Projeto Supabase dedicado · `thdsmldmswrjycaqxbnm.supabase.co` · org `ImpulsoDigital063` · Free tier
- Tabela `briefings`: slug PK + jsonb data + status (draft/completed) + progress + RLS + Realtime publication
- Reusável pra qualquer cliente Impulso futuro (mudar `BRIEFING_SLUG` no form)
- Migration: `auraenergy/supabase/migrations/0001_briefings.sql`

### Briefing V3 · 12 blocos (era 9 V2)
- **Bloco 6 BESS novo** · 15 perguntas · Lei 15.269/2025, peak shaving, marcas, modelo comercial, Fio B 60%, retrofit
- **Bloco 10 Co-criação NOVO** · 4 perguntas abertas pra Renato propor (ferramenta nova, seção que falta, o que mudaria, ideia ORIGINAL) · tom "você é sócio, não cliente respondendo"
- **Bloco 7 Heros refatorado**: mostra hero ATUAL no ar como referência fixa, sugestão fica opcional (vazio = curtiu atual)
- Botão "💾 Salvar progresso" + "Salvar e próximo →" no fim de cada bloco · toast verde "✅ Salvo no servidor"
- Cross-device: Renato pode começar no celular e continuar no PC com mesmo link · puxa rascunho do servidor
- 11 etapas no progress bar (0=identificação + 11 blocos)

### Painel ao vivo · `/painel-briefing/[slug]?token=`
- Auth via env var `BRIEFING_VIEWER_TOKEN`
- Realtime via Supabase channel: Eduardo vê respostas Renato em tempo real, sem esperar email
- Lista todos clientes em `/painel-briefing` + detalhe `/painel-briefing/<slug>`
- Card "💎 Ideia ORIGINAL" destaca proposta criativa do Renato

### URLs ativas
- Renato responde: https://auraenergy.vercel.app/briefing
- Eduardo monitora: https://auraenergy.vercel.app/painel-briefing/renato-aura?token=impulso-briefing-2026-renato-aura
- Lista geral: https://auraenergy.vercel.app/painel-briefing?token=impulso-briefing-2026-renato-aura

### Bug fix encontrado e cravado
- Env var `BRIEFING_VIEWER_TOKEN` setada via `echo "..."` veio com `\n` no fim → painel rejeitava token correto
- Fix: env var resetada via `printf '%s'` + adicionado `.trim()` defensivo nos dois lados da comparação

---

> **📋 LEIA TAMBÉM (entregas 08/05 madrugada):**
> - [`BRIEFING-AURA-V2-RENATO.md`](./BRIEFING-AURA-V2-RENATO.md) — briefing super-profundo 9 blocos + pesquisa Greener 2026 + bancos + Pronaf + Fio B + ordem de envio pacotes WhatsApp + texto inicial pro grupo
> - [`PAUTA-STORIES-AURA.md`](./PAUTA-STORIES-AURA.md) — 15 stories sequenciais com copy + CTA + diretrizes visuais
> - [`PROMPT-CIC-INDEXACAO-GOOGLE.md`](./PROMPT-CIC-INDEXACAO-GOOGLE.md) — prompt pronto pra CIC executar Search Console + GA4 + GMB + Meta Pixel
> - [`DIARIO-2026-05-08-AURA.md`](./DIARIO-2026-05-08-AURA.md) — daily de hoje

---

## ⏰ AÇÕES AGENDADAS

### Amanhã 16/05 · após 5h BR (cota Search Console reseta às 00h Pacific Time)
- [ ] Solicitar indexação manual de 5 URLs (cota diária esgotou em 15/05)
  - `https://auraenergy.vercel.app/`
  - `https://auraenergy.vercel.app/casa`
  - `https://auraenergy.vercel.app/comercio`
  - `https://auraenergy.vercel.app/industria`
  - `https://auraenergy.vercel.app/rural`
- 5 cliques · 5min · conta `edubchaves5@gmail.com`

### Quando comprar `auraenergy.com.br` (recomendado: HOJE)
- [ ] Apontar DNS pra Vercel (~5min seguindo wizard)
- [ ] Confirmar 301 redirect `vercel.app` → `.com.br`
- [ ] Adicionar nova propriedade `auraenergy.com.br` no Search Console (DNS TXT)
- [ ] Submeter novo sitemap
- [ ] Atualizar `NEXT_PUBLIC_BASE_URL` no Vercel pra `https://auraenergy.com.br`
- [ ] Atualizar `URL_BASE` no `SchemaOrgAura.tsx` (procurar string)
- Janela mínima de impacto: ANTES de circular link em Insta/WhatsApp em massa

---

## 🏆 VITÓRIA CRAVADA — 06/05/2026

- **Cliente:** Renato Edson · Aura Energy · Palmas-TO
- **Valor fechado:** R$ 1.497 (preço subiu de R$ 1.200 pra R$ 1.497 minutos antes da reunião — fechou sem piscar)
- **Modalidade:** Setup completo Aura (Frente 1)
- **Status:** **PRIMEIRO CLIENTE FORMAL DA IMPULSO DIGITAL**
- **O que vendeu:** plano de negócio de 20 páginas + análise jurídica Programa Palmas Solar + estratégia 90 dias + bônus info-produto + painel-renato apresentado ao vivo

---

## 🎯 PLANO DE EXECUÇÃO — SEMANA 1 (06-13/05/2026)

**Hora de separar os homens dos meninos.** Tudo que prometemos no setup R$ 1.497, entregue até 13/05.

### ⚡ ATACAR HOJE (06/05) — não depende do Renato
- [x] **Cadastrar Google Search Console** + sitemap.xml das 5 LPs · **08/05** · sitemap.ts + robots.txt + tag verification + GA4 + Pixel envs no layout.tsx · prompt CIC pronto pra rodar UI
- [x] **Pauta de 12-20 stories** · **08/05** · `PAUTA-STORIES-AURA.md` (15 stories detalhados)
- [ ] **Cartão de visita digital + QR Code** pra LP mãe (Eduardo Canva, 1-2h)
- [ ] **Comprar domínio** `auraenergy.com.br` no Registro.br (Eduardo, 15min)
- [ ] **Exportar PDF da Direção info-produto** (Ctrl+P em `/direcao-curso`, 5min)

### 📞 AMANHÃ (07/05) — cobrar Renato — REORGANIZADO 08/05
- [x] **Briefing-V2 ULTRA-PROFUNDO criado** · 08/05 madrugada · `BRIEFING-AURA-V2-RENATO.md` com 9 blocos + 8 pacotes WhatsApp organizados pra Renato mandar fotos/dados em ordem
- [ ] **Eduardo cria grupo WhatsApp "Aura · Eduardo · Renato"** + cola texto inicial do briefing (mensagem 1 + 2 já redigidas)
- [ ] **Form Tally** com Blocos 1-9 (Eduardo monta no painel Tally, ~30min)

### 🛠 QUI-SEX (08-09/05) — depende dos dados do Renato
- [ ] **Calibragem da LP** com fotos e dados reais (Eduardo + Verbo, 2-3h)
  - Componentes a atualizar: `MapaInstalacoes.tsx` (bairros reais) · `Depoimentos.tsx` (3-5 áudios reais) · `CatalogoKits.tsx` (preços reais) · `Credenciais.tsx` (CREA + ART reais + bancos parceiros) · `SobreRenato.tsx` (foto Renato real) · `EquipeAcao.tsx` (foto equipe Aura)
- [ ] **6 artes Instagram em produção** no Canva (Eduardo, 3-5h)

### 🚀 SAB-DOM (10-11/05) — finalização
- [ ] **6 artes finalizadas** prontas pra postar
- [ ] **Insta @auraenergy criado** (perfil + bio + capa + destaques)

### ✅ SEG-TER (12-13/05) — entrega completa
- [ ] **WhatsApp Business** da Aura configurado
- [x] **Google Meu Negócio** — prompt CIC pronto · `PROMPT-CIC-INDEXACAO-GOOGLE.md` etapa 3
- [x] **Pixel Meta + GA4** — código no layout.tsx pronto · CIC seta IDs no Vercel · etapas 2 e 4 do prompt
- [ ] **Domínio `auraenergy.com.br`** apontado pra Vercel
- [ ] ✅ **SETUP R$ 1.497 100% ENTREGUE**

---

---

## 📌 RESUMO EXECUTIVO (leia primeiro)

A Aura Energy é uma empresa de energia solar fotovoltaica de **Renato Edson** em **Palmas-TO**, fundada como nova frente sobre a infraestrutura técnica da **Brasfrio** (refrigeração + energia, anos em Palmas — Renato é sócio). A dor real do Renato é **captação de leads novos** (network social esgotando, conta @brasfrio_engsolar parou de postar há 3 meses). Aura é a **camada digital/comercial/educativa** sobre a operação física Brasfrio.

**Estado atual (06/05 madrugada — pré-reunião):**
- ✅ LP v6 em produção (`auraenergy.vercel.app`) — auditoria CIC factual aplicada
- ✅ Briefing privado em `/briefing` — Renato pode preencher
- ✅ Diagnóstico competitivo Brasfrio Solar (CIC) cravado
- ✅ Estrutura comercial 3 frentes definida
- ✅ **Reunião 06/05 com 4 docs prontos:**
  - `ROTEIRO-VENDA-RENATO-06MAIO.md` — script completo (abertura → fechamento + 6 objeções)
  - `PESQUISA-NICHO-INFO-PRODUTO-SOLAR.md` — base do bônus "direção"
  - `6-ARTES-INSTAGRAM-AURA.md` — copy + briefing visual das 6 artes do pacote
  - `DIRECAO-INFO-PRODUTO-RENATO.md` — 1 página A4 pra exportar PDF e levar
- ⏳ Output do CIC sobre curso Tenda Solar — análise estrutural aula-a-aula (rodando madrugada)
- ⏳ Visuais das 6 artes — Eduardo produz pós-fechamento (Canva ou HTML/CSS render)

**Embalagem da venda (Frente 1 R$ 1.200) — DECISÃO 05/05:**
- ✅ LP completa (já entregue)
- ➕ **6 artes Instagram** prontas (copy + briefing visual) — 30 dias de presença sem Renato pensar
- 🎁 **BÔNUS: direção info-produto** (1 página A4) — mapa estratégico pro curso próprio dele

**Frente 2 (NÃO oferecer amanhã, plantar semente):**
- Pacote mensal Insta + Tráfego R$ 1.497-1.997
- Apresentar SE Renato pedir continuidade após começar a postar

**Frente 3 (estudar):**
- RadarPRO Solar Palmas — atacar via comissão (5-7% sobre venda fechada)
- Renda menor no início, escala quando decolar

**Princípios cravados pra reunião (Verbo lembrar):**
- λ.contrato — não inventar cláusula/exclusividade na hora
- λ.dor — Renato compra captação, não LP
- **Preço é o preço** — se descontar, queima a relação
- Plantar Frente 2/3 sem cravar nada formal

**Próximas ações Eduardo (D+1 — quarta 06/05):**
1. Manhã: ler 4 docs prontos (`ROTEIRO`, `DIRECAO`, `PESQUISA`, `6-ARTES`)
2. Exportar `DIRECAO-INFO-PRODUTO-RENATO.md` em PDF (1 página)
3. Cruzar análise CIC do curso Tenda com a estrutura de aulas (seção 5 do `DIRECAO`) — pela manhã, antes da reunião
4. Reunião com Renato — fechar R$ 1.200
5. Pós-fechamento: produzir 6 visuais (Canva 3-5h)
6. Atualizar este STATUS com resultado da reunião

---

## 👤 SOBRE O CLIENTE

| Campo | Valor |
|---|---|
| **Nome do dono** | Renato Edson |
| **Empresa** | Aura Energy — Energia Elétrica Especializada |
| **WhatsApp** | (63) 9 9268-8852 |
| **Cidade** | Palmas-TO (atende toda região metropolitana e rural) |
| **Nicho** | Energia solar fotovoltaica residencial / comercial / rural / sistemas com bateria |
| **Logo** | `C:/Users/DELL/segundo-cerebro/4-EXPORTACAO/agendapro-brandkit/png/Logo Aura Enerrgy sem fundo.png` (e `aura_energy_perfil_minimal.png`) — **observação:** logo está fisicamente em `Downloads/` original; cópias dentro do projeto da LP em `auraenergy/public/` |
| **Identidade visual** | Azul marinho profundo (#1B3A87) + amarelo dourado (#F5BC2C). Logo: sol estilizado + torre de transmissão + circuitos digitais + ondas em curva azul/amarelo |
| **Estado do negócio** | Em fase de lançamento. Já fez criativos próprios pro Instagram (Eduardo viu 5). N° de clientes reais: ainda não confirmado (criativo dele dizia "+100" — Eduardo desconfia que é aspiracional, precisa confirmar) |
| **Material que tem** | 5 criativos Instagram (mostrados ao Eduardo dia 01/05) — mas não tem LP, site, blog, tráfego pago, CRM |

---

## 🎯 O QUE FOI ENTREGUE

### LP Aura Energy v4 (em produção)

**🔗 URL:** https://auraenergy.vercel.app
**📁 Repo local:** `C:\Users\DELL\auraenergy\`
**🚀 Deploy:** Vercel (conta `edubchaves5-3060`, projeto `auraenergy` no scope `impulsodigitals-projects`)
**📦 Stack:** Next.js 16.2.4 + React 19.2.4 + Tailwind v4 + Inter font

### 20 seções entregues

1. **Hero** — headline + simulador de economia interativo
2. **Banner Visual** cinematográfico (foto telhado solar + headline "Sua casa não é consumidora. É geradora.")
3. **Marquee** das marcas Tier 1 (Trina, Canadian, Jinko, Growatt, Sungrow, Huawei, Fronius, GoodWe…)
4. **Manifesto Aura** — branding forte, fundo azul-deep, logo gigante 140px, 3 pilares (Transparência / Excelência técnica / Compromisso 25 anos)
5. **Verticais** com tabs interativas (Residencial / Comercial / Rural / Sistema com bateria) — cada um com headline + 3 bullets + CTA WhatsApp específico
6. **Como Funciona** — 4 cards com fotos por etapa (visita técnica → projeto → instalação → ativação)
7. **Catálogo de Kits** — 4 cards pricing (3kWp / 5kWp ⭐ / 8kWp / 12+kWp) com painéis, inversor, geração, área, preço a partir de + 10 itens inclusos
8. **Diferenciais** — 6 motivos
9. **Equipe Aura em ação** — galeria magazine asymmetric com 5 fotos de técnicos trabalhando + selos NR-10/EPI/Seguro
10. **Sobre Renato** — humanização com foto + bio + 4 valores + CTA "conversar direto comigo"
11. **Compromisso 25 anos** — timeline antes/durante/depois com 4 promessas em cada etapa + selo "compromisso assinado em contrato"
12. **Credenciais** — faixa azul-deep com 5 selos (Energisa-TO, CREA-TO, INMETRO, ANEEL, Solfácil)
13. **Investimento** — comparativo R$ 22k em 25 anos (Poupança R$ 38k / CDI R$ 65k / Ibov R$ 95k / **Solar R$ 230k**) com barras animadas
14. **Janela do Fio B** — timeline 2023→2029+ com badge "Você está aqui" piscando em 2026 + impacto financeiro de adiar
15. **Galeria de instalações** — 6 fotos
16. **Mapa de instalações** — SVG estilizado de Palmas com 9 bairros e 36 instalações pulsando
17. **Depoimentos** — 3 cards (placeholders)
18. **Recursos / Blog** — 5 artigos com fonte real (ABSOLAR, ANEEL, Energisa, Canal Solar, Solfácil)
19. **FAQ** — 9 perguntas
20. **CTA Final** — formulário (nome + WhatsApp + bairro + conta) que abre WhatsApp com tudo preenchido

### Componentes técnicos especiais

- **Simulador de economia interativo** com cálculo real (tarifa Energisa-TO R$ 0,95/kWh, HSP Palmas 5,9, Lei 14.300 com Fio B 60% em 2026, painel 575W). 4 cards animados (counter): economia/mês, em 25 anos, sistema kWp, payback. CTA WhatsApp já preenche mensagem com simulação completa.
- **Botão flutuante WhatsApp** que aparece após scroll de 400px. Verde com glow + halo pulsante. Texto "Falar com especialista" expande nos primeiros 5s e no hover.
- **Movimento em toda LP**: mesh gradient solar animado, pulsos em circuitos SVG, counter animado, fade-up no scroll (IntersectionObserver), glow rotativo, marquee horizontal, parallax em fotos, glass cards com brilho passando.

### Conteúdo educativo / artigos

5 artigos prontos no blog com dados reais:
1. *Quanto custa instalar energia solar em Palmas-TO em 2026?* (R$ 12-38k por faixa de conta)
2. *Lei 14.300 explicada: ainda vale a pena instalar solar em 2026?* (Fio B 60%, economia 74-87%)
3. *Em quanto tempo o sistema solar se paga? Cálculo real pra Palmas* (4-6 anos com R$ 800/mês)
4. *Painéis de 550W ou 600W? Qual escolher pra residência*
5. *Solar à vista ou financiado: qual sai mais barato em 2026?* (Solfácil 0,79% a.m., 120 meses)

---

## 📐 DADOS TÉCNICOS DE MERCADO (verificados via pesquisa web 01/05/2026)

### Tarifa e mercado
- **Tarifa Energisa-TO B1 residencial:** ~R$ 0,92-0,98/kWh com tributos (REH ANEEL 3.479/2025, vigente jul/25 a jul/26). Reajuste de jul/25 foi +12,31%.
- **Bandeira tarifária maio/2026:** AMARELA (+R$ 1,885 a cada 100 kWh).
- **Próximo reajuste:** julho/2026 (verificar).
- **HSP Palmas-TO:** 5,9 kWh/m²/dia (entre as maiores do BR).

### Lei 14.300 — Fio B
- 2025: 45% · **2026 (HOJE): 60%** · 2027: 75% · 2028: 90% · 2029+: 100%.
- Direito adquirido até 2045 pra quem instalou ANTES de 7/jan/2023.

### Equipamentos top BR 2026
- **Painéis Tier 1:** Trina (15 anos garantia produto, mais lembrada), Canadian (suporte BR desde 2012), Jinko (130-150 GW/ano N-type TOPCon), JA Solar, LONGi.
- **Inversores:** Growatt (mais vendido residencial BR, custo-benefício), Sungrow (top 2 mundial premium), Huawei (melhor app FusionSolar), Fronius (durabilidade premium), GoodWe (híbridos com bateria), Deye (off-grid).

### Financiamento
- **Solfácil:** a partir de 0,79% a.m., até 120 meses.
- BV: 1,17% a.m., 96 meses. Santander: 1,11%. Caixa CDC Solar: 1,18%.
- Para residência R$ 18-25k em Palmas → Solfácil ou BV. Parcela quase sempre menor que conta atual.

### Crescimento setor
- **3,9 milhões+** brasileiros já têm GD solar (ABSOLAR set/2025).
- 10,6 GW adicionados em 2025, R$ 32,9 bi investidos.
- Brasil é **6º no ranking mundial** de capacidade instalada.

**Fontes citadas:** ABSOLAR, ANEEL (REH 3.479, REN 1.000/2021, REN 1.059/2023), Canal Solar, pv magazine BR, Solfácil, Portal Solar, Energisa.

---

## 📅 LINHA DO TEMPO

### 2026-05-02 (madrugada · Verbo s04 ~12h contínuas)

**Aura v5 → v6 com auditoria CIC factual:**
- Background `#FAFAF6` frio → `#fffef2` cream warm Aesop-derived
- Bar Sistema Solar amarela → verde neon `#10F19F` (ancorando "ativo financeiro")
- Footer-CTA gigante full-bleed cravado (padrão Tesla/Whoop/Allurium)
- Dark zone Investimento + Janela Fio B (modelo Huberman)
- Tap feedback `scale(0.98)` em :active mobile
- Header mobile compactado (89px → 56-64px)
- H1 hero `font-extrabold` → `font-bold` (princípio Aesop pesos máx 500)
- Foto real do Renato integrada em SobreRenato com tratamento premium

**Briefing privado `/briefing` no ar:**
- 10 cards mobile-first com 15 perguntas
- Submit via API + Resend → email pro Eduardo
- Estimativa 30 min preenchimento Renato
- Vira playbook reutilizável pra próximos clientes Impulso

**Diagnóstico CIC competitivo Brasfrio Solar:**
- @brasfrio_engsolar parado há 3 meses, engagement 0,48%, 1.887 followers
- 92% dos buracos estratégicos abertos pra Aura ocupar
- Reel com Renato em câmera = 5,4× mais engajamento (única vez testado)
- Doc: `DIAGNOSTICO-BRASFRIO-SOLAR.md`

**Estrutura comercial 3 frentes definida:**
- Frente 1 · LP setup R$ 1.200 (já feita)
- Frente 2 · Insta + Tráfego R$ 1.497-1.997/mês
- Frente 3 · RadarPRO Solar Palmas — comissão 5-7% sobre venda fechada

**Princípios cravados (8 novos memory feedback):**
- Mobile-first lei Impulso (`λ.mobile`)
- BR-first em referências de design (`λ.br`)
- Deep research = diferencial Impulso (`λ.deep-research`)
- Vender pra DOR real (`λ.dor`)
- RadarPRO arma própria (`λ.radarpro`)
- Cliente entregue = ICP categoria validado (`λ.icp`)
- Não inventar contrato sem mandato (`λ.contrato`)
- Idioma denso pra auto-memory (`λ.idioma`)

**Status pessoal Eduardo:** Renato é amigo + sócio Brasfrio. Brasfrio funciona pelo network mas tá esgotando. Aura é resposta à dor de aquisição.

### 2026-05-01 — Sessão de criação intensiva

**Tarde:** Eduardo me mostrou os 5 criativos do Instagram que ele já tinha feito pro Renato. Discutimos o nicho. Decidiu construir LP protótipo pra apresentar.

**Construção da LP** (~5h):
- v1: estrutura básica (Hero + Simulador + Como Funciona + FAQ + CTA)
- v2: mudança total de DNA — saiu do dark tech pra **light premium** (Stripe + Linear v2 + Tesla)
- v2.5: adição das 6 seções estratégicas (Verticais, Catálogo Kits, Investimento, Janela Fio B, Mapa, Credenciais)
- v3: humanização com fotos reais (Banner Visual, Equipe em ação, Sobre Renato, fotos no Como Funciona)
- v4: branding Aura Energy (Manifesto, Compromisso 25 anos, Header com logo grande, logo como elemento visual em 5 momentos)

**Diretrizes que Eduardo cravou durante a construção:**
1. SVG sempre, NUNCA emojis
2. Imagens reais, nunca vetor genérico tipo unDraw
3. Movimento e modernidade (empresa de tecnologia)
4. Sair do background escuro (não fazer o que sempre fizeram)
5. Pesquisar mercado real e trazer artigos úteis
6. Carta branca em projetos (não pedir autorização entre etapas)

**Reunião informal noturna com Renato:**
- Eduardo apresentou a LP (auraenergy.vercel.app)
- Renato gostou — não houve recuo no preço, não houve crítica destrutiva
- Não fecharam negócio porque o cenário era informal (estavam bebendo)
- Status: lead morno-quente, próximo passo = follow-up estruturado

---

## 💰 MODALIDADES PROPOSTAS PRA RENATO

(do cardápio Impulso Digital pro nicho solar)

| # | Modalidade | Investimento | Pra quem |
|---|---|---|---|
| 1 | LP Solar c/ simulador | R$ 799 + R$ 99/mês | Quer testar com baixo custo |
| 2 | Tráfego pago Meta Ads | R$ 497 setup + R$ 597/mês + Meta R$ 1.500-3.000 | Quer leads agora |
| 3 | Conteúdo orgânico (Insta + Reels) | R$ 697/mês | Quer construir audiência |
| 4 | Site institucional | R$ 1.297 + R$ 99/mês | Quer presença SEO |
| 5 | RadarPRO B2B (custom) | R$ 997/mês | Quer fechar contas comerciais grandes |
| 6 | **Combo Decolagem** (LP + Tráfego + Conteúdo + Insta + Google) | **R$ 1.997/mês** + Meta | Cliente que quer escalar com tudo organizado |
| 7 | **Parceria por comissão** (5% sobre venda fechada via funil) | **R$ 0** + Meta R$ 1.500-3.000 (Renato cobre) | Win-win amigo, atrelado a resultado |

**Modalidade preferida pelo Eduardo (a oferecer primeiro):** Cenário a definir conforme o que Renato apontar como dor principal — ainda não temos essa informação clara.

**Cardápio detalhado:** ver mensagem do dia 01/05 ou playbook futuro.

---

## ⏳ FOLLOW-UP — PLANO 7 DIAS (proposto pra Eduardo executar)

| Dia | Ação | Tom | O que envia |
|---|---|---|---|
| **D+0 (01/05 noite)** | Nada — não vende durante festa | — | — |
| **D+1 (02/05 manhã)** | Mensagem casual no zap, mantém calor | Amigo, sem cobrança | "Acordei com a LP na cabeça. Vou ajustar uns detalhes que você comentou e te mando o link de novo amanhã." |
| **D+2 (03/05)** | LP ajustada com 2-3 personalizações reais | Concreto | Link da LP atualizada com fotos/dados que ele apontou |
| **D+4-5 (05-06/05)** | Material útil reforçando o que ele gostou mais | Generoso | Print da seção favorita + mockup proposta comercial em 1 página |
| **D+7 (08/05)** | Pergunta direta de fechamento | Reto | "O que tá faltando pra começar? Modalidade, prazo, dúvida técnica? Pode falar reto que eu encaixo." |

---

## ❓ INFORMAÇÕES PENDENTES (Eduardo precisa coletar)

1. **O que Renato MAIS elogiou** na LP? (simulador / kits / manifesto / sobre Renato / equipe / outro?)
2. **Algum dado técnico que ele corrigiu?** (marca de painel/inversor preferida, n° real de instalações dele, tarifa exata)
3. **Ele falou sobre orçamento ou modalidade de fechamento?**
4. **Próxima conversa marcada ou em aberto?**
5. **Tem foto real do Renato e da equipe?** (Eduardo deve puxar do WhatsApp dele)
6. **Quem é o engenheiro responsável Aura?** (CREA-TO — pra colocar no selo de credenciais)

---

## 🔄 ITENS NA LP QUE PRECISAM TROCAR POR DADOS REAIS

Marcado no código com comentário `// Eduardo: trocar por foto/dado REAL...`:

| Item | Localização no código | Status atual |
|---|---|---|
| Foto do Renato | `src/components/SobreRenato.tsx` | Stock Unsplash de profissional na elétrica |
| 5 fotos da equipe | `src/components/EquipeAcao.tsx` | Stock Unsplash de instalações solares |
| 4 fotos dos passos | `src/components/ComoFunciona.tsx` | Stock Unsplash contextual |
| 6 fotos da galeria | `src/components/Galeria.tsx` | Stock Unsplash |
| Foto banner cinematográfico | `src/components/BannerVisual.tsx` | Stock Unsplash |
| 3 depoimentos | `src/components/Depoimentos.tsx` | Placeholders ilustrativos (Marcus / Cláudia / José Antônio) |
| Mapa — bairros e n° de instalações | `src/components/MapaInstalacoes.tsx` | Bairros reais de Palmas, n° fictício (3-7 por bairro, total 36) |
| N° "+100 clientes atendidos" | NÃO está na LP — precisa confirmar com Renato se é real |

**Tarefa pós-fechamento:** quando Renato fornecer 10-15 fotos reais (mesmo do celular), a LP fica completa em ~10 min de troca de URLs.

---

## 🛠 OUTRAS PENDÊNCIAS / IDEIAS

- **Comprar domínio `auraenergy.com.br`** e apontar pra Vercel (R$ 60-80/ano no Registro.br)
- **Pixel Meta + GA4** (não está plugado — protótipo só)
- **CRM simples** pros leads (Notion / Airtable / Sheets via webhook)
- **Vídeo timelapse** de instalação (placeholder pra integrar quando Renato gravar)
- **Antes/depois conta de luz** (mockup interativo de uma conta real virando antes/depois)
- **Selo "Empresa parceira Energisa-TO"** com brasão (precisa autorização)
- **Programa Aura Premier** (indicação que ganha R$ na próxima conta) — pra v5

---

## 📎 LINKS E REFERÊNCIAS

- **LP em produção:** https://auraenergy.vercel.app
- **Repo local:** `C:\Users\DELL\auraenergy\`
- **Vercel project:** `auraenergy` (scope `impulsodigitals-projects`, conta `edubchaves5-3060`)
- **Inspector:** https://vercel.com/impulsodigitals-projects/auraenergy
- **Logo files:** `C:\Users\DELL\Downloads\Logo Aura Enerrgy sem fundo.png` e `aura_energy_perfil_minimal.png`
- **5 criativos do Instagram (originais do Eduardo):** `C:\Users\DELL\Downloads\IMG_6395.PNG`, `IMG_6402.PNG`, `IMG_6406.PNG`, `IMG_6410.PNG`, `IMG_6414.PNG`
- **Doc de pesquisa de mercado completo:** ver tool result do agente em 01/05/2026 (transcrito em parte aqui na seção "Dados técnicos de mercado")
- **Cardápio de modalidades Impulso pra solar:** ver conversa do dia 01/05 (mensagem grande com 7 modalidades e tabela comparativa)

---

## 🔁 ATUALIZAR ESTE ARQUIVO QUANDO

- ✅ Renato responder a mensagem D+1 (atualizar status)
- ✅ Eduardo coletar respostas das 6 informações pendentes
- ✅ Houver mudança de modalidade considerada
- ✅ Renato fornecer fotos/dados reais
- ✅ A LP for atualizada com qualquer mudança significativa
- ✅ Houver fechamento (mover pra `clientes-ativos/`) ou recusa (arquivar com nota de aprendizado)

---

**Tag:** `#cliente-pipeline` `#solar` `#palmas` `#impulso-digital` `#lead-morno-quente`

---

**Ver também:**
- Hubs: [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]]
- Status correlatos: [[STATUS-IMPULSO]] · [[STATUS-ANDRESSA]] (network do Renato)
- Documentos Aura: [[PLANO-NEGOCIO-MARKETING-AURA]] · [[BRIEFING-AURA-V2-RENATO]] · [[DIAGNOSTICO-BRASFRIO-SOLAR]] · [[METRICAS-AURA]] · [[CASE-AURA-LOG]] · [[ESTRATEGIA-LP-SEGMENTADA-AURA]] · [[DIRECAO-INFO-PRODUTO-RENATO]] · [[PAUTA-STORIES-AURA]] · [[6-ARTES-INSTAGRAM-AURA]]
- Pesquisas: [[PESQUISA-MERCADO-SOLAR-PALMAS]] · [[PESQUISA-NICHO-INFO-PRODUTO-SOLAR]] · [[RELATORIO-PROGRAMA-PALMAS-SOLAR-CIC]] · [[RELATORIO-MERCADO-PALMAS-CIC]]
- Playbooks: [[PADRAO-PLANO-NEGOCIO-IMPULSO]] · [[PROTOCOLO-DEEP-RESEARCH-CLIENTE]]
