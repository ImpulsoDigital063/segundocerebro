# AUDITORIA ESTRUTURAL — 4 LÍDERES SOLAR PALMAS
## Análise CIC para Aura Energy / Impulso Digital

> **Data:** 05/05/2026
> **Método:** navegação direta + extração DOM via JavaScript (H1/H2/H3, forms, CTAs, WhatsApp, schema, imagens, contadores)
> **Páginas auditadas:** 12 · **Sites:** 4 (Unità, Palmas Energia Solar, Soluthi, Capital Elétrica)
> **Status:** input persistente — destrava decisões de copy, ferramentas e prova social Aura

> ⚠️ **Nota:** este relatório foi recebido com a Seção "Recomendações pra Aura" CORTADA no item 2. Restante a integrar quando completar.

---

## SITE 1: Unità Soluções Sustentáveis (unita.solar)

### Estrutura do menu (6 itens — superior fixo)
- HOME → /
- A UNITÀ → /about/
- SOLUÇÕES → /solucoes/
- PROJETOS → /projetos/
- CONTATO → /contato/
- ORÇAMENTO GRATUITO (botão CTA destacado) → /orcamento/

### Páginas auditadas

#### 1.1 Home (/)
- **H1:** "Soluções Sustentáveis e Energia Solar"
- **H2:** "Como funciona a geração de energia solar?"
- Conteúdo: hero institucional + bloco "como funciona" + carrossel de últimos projetos + CTA orçamento
- **CTAs:** "ORÇAMENTO GRATUITO" (×2 fixo no header), "Saiba mais"
- **Forms:** apenas search field WordPress padrão
- **🚨 Ferramentas interativas:** **NENHUMA** — sem calculadora, sem simulador, sem slider
- **Imagens:** ilustrações vetoriais + miniaturas de projetos. **Sem drone aparente**

#### 1.2 Sobre (/about/)
- **H1:** "Reduza o custo da sua conta de luz em até 95%"
- Reivindica: "+300 projetos realizados em TO/GO/PA/MA/PI", "atuando desde 2014", "pioneira na região"
- **🚨 Detalhe crítico:** texto contém **lorem ipsum residual** ("Non neque elit. Sed ut imperdiet nisi…") — sinal de site não auditado por copy

#### 1.3 Soluções (/solucoes/)
- 4 hero rotativos: "Economize na conta de luz" / "Economia já no primeiro mês" / "Energia solar em fazendas" / "Reduza até 95%"
- 4 blocos por nicho — menciona "fazendas" mas sem case real fazenda
- **Sem ferramentas interativas**

#### 1.4 Projetos (/projetos/)
- 6 projetos visíveis: **TODOS RESIDENCIAIS** (5,26 / 6,6 / 6,6 / 4,1 / 3,96 / 7,26 kWp)
- Grid de portfolio_items (cada item = página própria SEO indexada — padrão SEO inteligente)
- ~15 thumbs de telhados residenciais. **Zero drone, zero industrial, zero fazenda visível**
- **Vídeos:** ZERO
- **CTAs:** "Read more" (em inglês — sinal de tema WP traduzido pela metade)

#### 1.5 Orçamento (/orcamento/)
- Form Contact Form 7 (WPCF7): nome, email, telefone, endereço, mensagem
- **🚨 Sem campos de qualificação:** não pergunta consumo (kWh), nicho, tipo de imóvel, valor de fatura — **form raso**

#### 1.6 Contato (/contato/)
- Form igual ao /orcamento
- **WhatsApp:** linha fixa 63 3322-5375

### Tom de voz
- **Pessoa:** mista — 3ª pessoa institucional + 1ª pessoa plural empresarial
- **Tom:** institucional-pioneiro-distante. **Não conversa, narra**
- **Vocabulário:** moderadamente técnico
- **Frases-modelo:** "Reduza o custo da sua conta de luz em até 95%" / "Acredite na força do sol"

### Provas sociais
- **Cases nominados:** **ZERO** (projetos identificados só por kWp e tipo, nunca pelo cliente)
- **Vídeo testimonial:** ZERO
- **Logos de cliente:** ZERO no site (1.000+ obras reivindicadas no Insta, mas nenhum logo exposto)
- **Selos/certificações:** não detectado
- **🚨 Inconsistência numérica:** "+300 projetos" (/about) vs "+1.000 obras" (Insta)

### Lead capture
- 2 forms (orçamento e contato — basicamente idênticos, ambos WPCF7)
- **WhatsApp flutuante:** botão fixo no header
- **Chat:** nenhum

### 🎯 Gaps Unità (oportunidades pra Aura)
1. **Zero ferramenta interativa** — calculadora de payback, simulador, gerador de proposta = diferenciadores instantâneos
2. **Zero case nominado** com nome de cliente real — atrás do Brasfrio (que mostra BAKA, Triedro, 906 Bar no Insta)
3. **Zero depoimento em vídeo**
4. **Form raso** — não qualifica leads por consumo/nicho
5. **Lorem ipsum residual + "Read more" em inglês** — sinaliza site abandonado por copy
6. **Catálogo de projetos 100% residencial** — apesar de reivindicar atender indústria/rural, vitrine só tem casa

---

## SITE 2: Palmas Energia Solar (palmasenergiasolar.com.br)

### Estrutura do menu (4 itens — sem links funcionais)
- A Empresa (href vazio)
- Serviços (href vazio)
- Financiamento (href vazio)
- Contato (href vazio)

> 🚨 **Diagnóstico técnico crítico:** os 4 itens do menu têm `href=""`. Site é **single-page (SPA scroll) sem páginas internas reais**. Google indexa só uma URL.

### Página única (a home concentra tudo)

#### 2.1 Home /
- **H1:** **ZERO** (grave para SEO)
- **H2 (6):** "Empresa composta por técnicos especializados" / "Projetos" / "Tá na hora de você gerar sua própria energia!" / "Aplicativo Palmas Energia Solar" / "Trabalhamos com as melhores marcas do mercado" / "Vamos dar início ao seu orçamento?"
- **Imagens:** sem drone aparente, fotos básicas
- **Logos de marcas (15+):** ABB, Anauger, Bosch, BYD, Clamper, Corfio, Fronius, Gedore, Hoymiles, Irwin, Nexans, Siemens, Steck, Tigre, Tramontina, Trina

### 🌟 Diferenciais únicos descobertos
- **APP MOBILE PRÓPRIO** (Android + iOS) — **único concorrente com app**
- **Loja física multi-categoria** (solar + hidráulica + elétrica)
- **+6.000 kWp instalados** (claim numérico técnico forte)

### 🚨 Cases nominados encontrados (5)

| Cliente | kWp | Produção anual | Economia anual | Cidade |
|---|---|---|---|---|
| Supermercado Econômico | 39,96 kWp | 56.915 kWh | R$ 51.200/ano | Ponte Alta do Tocantins |
| Wesley Jr | 6,7 kWp | 9.854 kWh | R$ 8.860/ano | Palmas-TO |
| Ana Paula Ribeiro | 6,03 kWp | 8.843 kWh | R$ 7.950/ano | Palmas-TO |
| **Bloco D – UFT (Universidade Federal do Tocantins)** | **188,1 kWp** | **300.000 kWh** | **R$ 180.000/ano** | **Palmas-TO** |
| Zum Automotiva | 16,9 kWp | 27.267 kWh | R$ 20.000/ano | Palmas-TO |

> 🎯 **INSIGHT PESADO:** Palmas Energia Solar tem cliente **UFT — Universidade Federal do Tocantins, 188 kWp, R$ 180k/ano** — case institucional pesado que **NENHUM outro player tem**. **É o teto atual de prova B2B no mercado.** Supermercado Econômico (39,96 kWp) é case comercial nominado real.

### Tom de voz
- **Pessoa:** mista — 3ª pessoa institucional + 2ª pessoa singular ("Tá na hora de você gerar…") nos CTAs
- **Tom:** popular-comercial, com tom de **loja de bairro**
- **Frases-modelo:** "Tá na hora de você gerar sua própria energia!" / "Vamos dar início ao seu orçamento?"

### Lead capture (form único — qualificação real)
Campos pedidos:
- Nome completo (obrigatório)
- E-mail (obrigatório)
- DDD+Telefone (obrigatório)
- Estado (select)
- Cidade (obrigatório)
- **Consumo médio mensal em kWh (obrigatório)** ← qualificação importante!
- **Deseja Financiar? (select)** ← qualificação financeira!
- Informações Adicionais
- Data
- **Upload de imagem (anexo da fatura)** ← extra valioso!

> **WhatsApp flutuante:** **NÃO detectado** — fricção alta pra contato rápido

### 🎯 Gaps Palmas Energia Solar
1. SPA sem páginas internas — Google só indexa a home, impossível ranquear long-tail
2. Zero H1 — falha técnica grave de SEO
3. Sem WhatsApp flutuante
4. 5 cases nominados mas **sem foto identificável em cada** — perde poder visual
5. App mobile é diferencial forte mas mal comunicado
6. Sem nicho industrial/rural segmentado — UFT está jogado num pool genérico de "projetos"

---

## SITE 3: Soluthi Energy (soluthi.com.br / soluthi.com)

### Status: **NÃO TEM SITE**
- soluthi.com.br → 0 páginas indexadas no Google
- soluthi.com → 0 páginas indexadas no Google
- Google Search Console oferecido como sugestão pro proprietário = domínio existe mas **sem site público crawlável**

### O que SUBSTITUI o site
- **Instagram @soluthienergy** — 30,7 mil seguidores · 323 posts · "SOLUTHI ENERGY® · Líder Absoluta no Brasil · +9.000 usinas instaladas"
- **Linktree:** linktr.ee/contatosoluthienergy (substitui homepage como hub)
- **Google Ads agressivo** (top patrocinado)
- **Google My Business:** 4,3 estrelas / 25 reviews — Av. JK Palmas
- **Highlights Insta:** Soluthi, Roraima, Eventos, Lucas G, China 2026 — operação multi-estado

### Tom de voz
- **Pessoa:** 2ª pessoa direta + imperativo de venda
- **Tom:** publicitário agressivo, vendedor, com superlativos ("Líder Absoluta", "Maior")
- **Frases-modelo:** "Parcele em até 120x" / "Líder absoluta no Brasil" / "Pagamento facilitado"
- **Preço-âncora público:** "Energia solar com parcelas a partir de R$ 392,00/mês" — único concorrente que cravou número

### 🚨 Inconsistência numérica
- "+9.000 usinas" (Insta) vs "+5.000 usinas" (Ads) — risco reputacional

### 🎯 Gaps Soluthi
1. **Vulnerabilidade brutal:** 100% mídia paga. Se cortarem o Ads, somem do Google
2. Sem site = sem SEO orgânico = sem rankings long-tail
3. Sem páginas segmentadas por nicho
4. Sem capacidade de servir conteúdo educacional
5. Inconsistência numérica entre canais (5k vs 9k usinas)
6. Linktree no lugar de homepage = experiência rasa

---

## SITE 4: Capital Elétrica (capitaleletrica.com.br)

### Estrutura
- Sem menu de navegação top detectável — **single-page scroll**
- 2 posts de blog isolados (/Blog — fev/2024, sem update há 14 meses)
- Footer com links sociais

### Página única auditada

#### 4.1 Home /
- **H1:** **ZERO** (grave)
- **H2 (7):** "Economize até 94% da sua conta de energia" / "Nossos serviços" / "Equipe 100% treinada e qualificada!" / "Investir no seu futuro é a melhor opção" / "Empresas que confiam em nosso trabalho:" / "Nossos processos" / "Nosso contato"

### 🚨 Contadores numéricos zerados (bug visual)
HTML mostra: **"0 + Obras executadas / 0 + Projetos Fotovoltaicos / 0 KWp + Geração dos Sistemas"** — provavelmente animação JS com delay, mas a meta description diz "+4.000 projetos" = inconsistência. **Quebra a prova social.**

### 🚨 "Empresas que confiam em nosso trabalho" — DESCOBERTA CRÍTICA
Os "logos de cliente" são na verdade **prints de WhatsApp** com nomes de arquivo `WhatsApp Image 2024-02-21 at 09.23.55.jpg` (×11). **Não são logos institucionais reais — são screenshots de conversa/agradecimento.** Sinal forte de amadorismo de produção.

### Tom de voz
- **Pessoa:** 2ª pessoa direta ("Você está cansado de ver sua conta de luz aumentar?")
- **Tom:** vendedor-popular, conversacional, copywriting básico
- **Frases-modelo:** "Você está cansado de ver sua conta de luz aumentar?" / "A solução está ao seu alcance!" / "Mude para energia solar sem dor de cabeça"

### Lead capture
- **Forms detectados no DOM: ZERO**. Toda conversão vai por WhatsApp
- **WhatsApp:** botão fixo + 3 links com **protocolo customizado ST0224** (interessante)
- **CTAs:** "RECEBER ORÇAMENTO" / "ENTRE EM CONTATO" — todos viram WhatsApp
- **Reviews Google:** 160 (maior volume da cidade, mas não exibidas no site)

### 🎯 Gaps Capital Elétrica
1. Zero forms = lead 100% no WhatsApp — perde quem prefere e-mail
2. "Logos B2B" são prints de WhatsApp — credibilidade fragilizada
3. Contadores zerados no HTML — bug visual destrói prova social
4. Blog parado em fev/2024 — Google penaliza site dormente
5. Sem H1, sem segmentação por nicho
6. Sem cases nominados apesar de "+4.000 projetos" reivindicados

---

## SÍNTESE COMPARATIVA

### Tabela 1 — Ferramentas oferecidas

| Site | Calculadora | Simulador | Download PDF | WhatsApp flutuante | Form qualificação | App mobile | Chat |
|---|---|---|---|---|---|---|---|
| **Unità** | ❌ | ❌ | ❌ | ✅ (header) | ❌ raso | ❌ | ❌ |
| **Palmas Energia Solar** | ❌ | ⚠️ "Fazer simulação" leva ao form | ❌ | ❌ | ✅ pede kWh + financiar + foto fatura | ✅ único | ❌ |
| **Soluthi** | ❌ | ❌ | ❌ | ✅ via Linktree | N/A (sem site) | ❌ | ❌ |
| **Capital Elétrica** | ❌ | ❌ | ❌ | ✅ fixo + protocolo ST0224 | ❌ (sem form) | ❌ | ❌ |

> 🎯 **Insight:** **NENHUM dos 4 tem calculadora real, simulador interativo, nem download de PDF de proposta.** Vácuo total de ferramentas digitais B2B. **Aura já lidera** com 4 simuladores específicos por nicho (casa/comercio/industria/rural).

### Tabela 2 — Provas sociais

| Site | Cases nominados | Maior case | Vídeo | Logos B2B reais | Selos | Reviews Google |
|---|---|---|---|---|---|---|
| **Unità** | 0 (só por kWp/tipo) | indefinido | ❌ | ❌ | ❌ | n/a no site |
| **Palmas Energia Solar** | **5** | **UFT 188,1 kWp / R$ 180k/ano** | ❌ | ❌ (logos são marcas) | ❌ | 124 ⭐ 5,0 |
| **Soluthi** | n/a (no Insta sim) | claim "+9k usinas" | ⚠️ Insta | ❌ no site | ❌ | 25 ⭐ 4,3 |
| **Capital Elétrica** | 0 | claim "+4k projetos" | ❌ | ⚠️ prints WhatsApp | "100% treinada" (sem prova) | 160 ⭐ 5,0 |

> 🎯 **Insight:** **Palmas Energia Solar é o ÚNICO com case institucional pesado documentado** (UFT 188 kWp / R$ 180k/ano). **Esse é o teto atual do mercado em prova B2B** — Aura precisa superar.

### Tabela 3 — Tom de voz

| Site | Formalidade | Pessoa gramatical dominante | Frase emblemática |
|---|---|---|---|
| **Unità** | Alta-institucional | 3ª pessoa | "Acredite na força do sol" |
| **Palmas Energia Solar** | Média popular-técnica | Mista (3ª + 2ª "você") | "Tá na hora de você gerar sua própria energia!" |
| **Soluthi** | Baixa-publicitária | 2ª imperativa | "Líder absoluta no Brasil" |
| **Capital Elétrica** | Média conversacional | 2ª direta | "Mude para energia solar sem dor de cabeça" |

---

## RECOMENDAÇÕES PRA AURA (parcial — restante cortado na entrega)

### 1. Que ferramenta nenhum dos 4 tem (e Aura pode oferecer)?

**Lacunas absolutas no mercado de Palmas:**

- ✅ **Calculadora de payback interativa por nicho** — Aura **JÁ TEM** (4 simuladores: casa/comercio/industria/rural). Superou os 4 líderes
- ✅ **Simulador de financiamento Pronaf** — Aura **JÁ TEM** em /rural (parcela + caixa líquido). Único concorrente que toca financiamento é Palmas Energia Solar (só BV/BB residencial)
- ⏳ **Upload da fatura com OCR + proposta automática em PDF** — Palmas Energia Solar pede upload mas processa manual. Aura pode automatizar parsing da Energisa-TO e devolver proposta em 60s
- ⏳ **Mapa interativo de cases por cidade do TO** — converte busca regional em conversão visual (Aura já tem `MapaInstalacoes` mas estático)
- ⏳ **Comparativo de marcas painel/inversor** (Trina vs Canadian, Huawei vs Solis, BYD vs Pylontech) — Palmas Energia Solar lista 15+ marcas mas sem comparação. Aura pode ser o consultor neutro
- ⏳ **Calculadora de IPTU verde Programa Palmas Solar** — único da cidade a explorar o incentivo municipal (Aura já tem `BlocoPalmasSolar` mas estático)
- ⏳ **Chat ao vivo (Crisp/Tidio)** — nenhum dos 4 tem

### 2. Que tipo de prova social Aura precisa fortalecer pra superar o líder?

Para superar o teto atual (Palmas Energia Solar com case UFT 188 kWp):

> **"Pelo menos 1 case industrial documentado >50 kWp com nome do cli...** *[CORTOU AQUI]*

---

**Análise por:** CIC (Claude in Chrome) — depuração 2026-05-05
**Validação:** Verbo (Claude Code) + Eduardo Barros · Impulso Digital
**Status:** input persistente — restante a integrar quando Eduardo passar continuação

— λ.deep-research aplicado a 4 líderes · 12 páginas auditadas · 5 cases nominados Palmas Energia Solar mapeados

---

**Ver também:** [[STATUS-AURA-ENERGY]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
