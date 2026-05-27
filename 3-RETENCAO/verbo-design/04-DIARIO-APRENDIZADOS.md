# 04 · DIÁRIO DE APRENDIZADOS · Verbo Design

> Cada erro/acerto vira aprendizado retido. Cravado a partir de 15/05/2026.

---

## 📅 16/05/2026 · GB Nutrition · Carrossel V5 · CRIVO VISUAL cravado (9º princípio)

### 🔴 Erro factual identificado por Eduardo
**No Slide 1 V5** (capa "A LOJA TÁ NO AR"): coloquei Hórus Max Titanium em primeiro plano com sombra + glow cyan. **Eduardo cravou:** *"nada haver esse produto ao lado do hook · qual o sentido disso? o que tá comunicando? nesse caso tá mais atrapalhando do que comunicando."*

**Diagnóstico cravado:**
- Mensagem central do slide: "A LOJA TÁ NO AR" (anúncio de abertura)
- Hórus Max Titanium NÃO reforça nem "loja" nem "no ar"
- Decora, mas COMPETE com o hook
- Sem ele, a comunicação ficaria mais clara

### 🟢 Princípio cravado · CRIVO VISUAL
**Adicionado como 9º inviolável em [[02-PRINCIPIOS]].**

Antes de adicionar qualquer elemento ao slide, perguntar 4 coisas:
1. Qual a mensagem central?
2. Reforça ou compete?
3. Sem ele, fica mais clara ou mais pobre?
4. Tem razão de estar AQUI especificamente?

**Caso de uso correto:** "A loja tá no ar" pediria mockup site / catálogo aberto / prateleira virtual sendo "ligada" — algo que comunique ACESSO/ABERTURA. Não produto aleatório.

### 🎯 Aplicação imediata
- Remover Hórus do slide 1 GB (volta a versão limpa: foto loja + texto + watermark)
- Re-validar TODOS os elementos visuais dos outros slides aplicando o crivo:
  - Slide 2 (catálogo): grid de 6 produtos ✓ FAZ SENTIDO ("tudo que o aluno usa" → produtos reais)
  - Slide 3 (marcas + Gabriel): foto Gabriel ✓ FAZ SENTIDO ("quem cravou esse catálogo")
  - Slide 4 (entrega): Whey saindo da caixa ✓ FAZ SENTIDO ("comprou, chegou" + box + produto saindo)
  - Slide 5 (CTA): Creatina ao lado do celular ⚠️ borderline — comunica "produto do catálogo no celular", mas pode ser melhor um print da home do site

---

## 📅 16/05/2026 · GB Nutrition · Carrossel Lançamento V1→V5

### 🟢 O que cravou
- **Produtos reais > Flux genérico** — usar fotos do catálogo do cliente (gbnutrition.online) ou das lojas oficiais das marcas (lojamaxtitanium, loja.nutrata) gera muito mais credibilidade que cutout Flux genérico
- **remove.bg API resolveu o "produto colado"** — bg branco virou transparente · cutouts integram com cenário dark
- **Multi-camadas dão peso editorial** — 8-10 layers (foto + overlay + glow + cutout + stencil + linha + frame + texto) viraram o salto premium pedido por Eduardo
- **Drop shadow + glow cor da marca = encaixe visual** — sombra elipse no chão + drop-shadow no produto + glow cyan ao redor → produto parece estar NO cenário, não colado

### 🔴 O que não cravou (e aprendi)
- **Cutout sem integração = bug visual** — Hórus Max Titanium colado no slide 1 sem sombra/glow ficou "deslocado" (Eduardo cravou: "esses elementos se forem introduzidos é pra encaixarem com fundo")
- **`calc(33.333% - 8px)` não funciona no Satori** — grid 3x2 virou coluna única · solução: usar width fixo em pixels
- **Tint dourado uniforme via sharp ficou oliva** — pra dark logo da Aura, tentar `.modulate({saturation, lightness}) + .tint()` deu cor oliva sem brilho · solução foi usar logo-aura-perfil.png direto (com fundo cream sutil) nos slides dark
- **Logo blur de fundo gigante = invasivo** — testei 20-55% opacity de logo desfocada como bg · em todos os níveis competia com texto OU parecia bug · descartei a favor de watermark tipográfico Anton

### 🔧 Novo padrão cravado: 8º princípio
**Elementos só entram se encaixarem com o fundo** (sombras + perspectiva + escala) — adicionado em [[02-PRINCIPIOS]]

---

## 📅 15/05/2026 · Aura Energy · Carrossel Fio B V1→V11

### 🟢 O que cravou
- **Identidade visual puxa do logo do cliente, não dark zone genérica** — Aura blue deep `#0E2152` cravou onde meu `#0a0d18` warm-blue falhava
- **Arco AIDA em 5 slides funciona** — Atenção (hook) → Interesse (analogia) → Educação (cronograma) → Desejo (caso real) → Ação (CTA voz primeira pessoa)
- **Caso real Brasfrio no slide 4** virou ponto mais alto de credibilidade (R$1.573 → R$390/mês com kWp + bairro)
- **Copy conversacional leigo+expert** funcionou — "pensa assim... esse empréstimo valia 100% — chama Fio B (TUSD)"
- **LogoBlock padronizado top-left** em todos os slides via componente reusável
- **Anton font carregada via Replicate raw URL** — Satori suporta TTF custom fora do system-ui
- **Watermark tipográfico atrás dá profundidade** sem competir com conteúdo (palavra-chave em Anton 300-540px @ 5-8% opacity)

### 🔴 O que não cravou (e aprendi)
- **V1 vetorial puro reprovado** — Eduardo: "longe de post premium" · sem foto, sem camadas, sem peso editorial
- **Logo blur de fundo testado e reprovado** 3 vezes (V6, V7, V8) — não funcionou em nenhuma combinação de opacity/blur
- **Inverter logo via sharp pra "dark mode"** ficou oliva · descartei
- **"Brasfrio Engenharia" no slide 4 confundia identidade** — Aura é marca nova, atribuição deve ser "equipe técnica do Renato" sem citar Brasfrio na peça pública

### 🔧 Padrões cravados (foram pra [[02-PRINCIPIOS]])
- Arco AIDA cravado como obrigatório em carrossel
- Verbo é operador, não UI
- Pasta destino `Desktop/post <cliente>/<campanha>/`
- Logo padronizada top-left
- Camadas mínimas obrigatórias (foto + overlay + watermark + LogoBlock + indicador)

---

## 📅 15/05/2026 · Stack design completa habilitada

### 🟢 O que cravou
- **5 ferramentas integradas end-to-end** em uma sessão:
  - puppeteer + sharp (instalação local)
  - Canva MCP (autenticado com brand kit Aura `kAHJwcGixiU`)
  - Replicate Flux (Schnell + Dev + Pro)
  - remove.bg (cutout transparente)
  - Anthropic Copy (brand voice + framework + 3 variações)
- **Brand voice JSON estruturado** (`src/lib/brand-voice/<cliente>.ts`) com pilares + tom + vocabulário use/avoid/forbidden + patterns + 3 exemplos + 3 anti-exemplos
- **Framework de copy com 7 formatos** + beats obrigatórios

### 🔴 O que aprendi
- **Vercel não tá conectado ao GitHub auto-deploy** — todos os deploys vão via `vercel --prod --yes` CLI manual
- **Token de ferramenta = `.env.local` (gitignored) + Vercel env var production**
- **`/copy-gen` UI ficou bonus** — paradigma cravado é Verbo operador (Eduardo pede no chat)

---

## 🎓 Lições gerais cravadas

### Sobre processo
1. **Eduardo é direto · entrega pacote pronto · não pede pra ele preencher form** (`[[feedback-verbo-operador-paradigma]]`)
2. **Filtrar output de outros agentes** (CIC/Chrome) antes de repassar como verdade (`[[feedback-filtrar-recomendacoes-de-outros-agentes]]`)
3. **Uma decisão por vez** quando preciso input dele (`[[feedback-destrinchar-decisao-por-decisao]]`)
4. **Verificar antes de afirmar** ("tá no ar", "deploy ready") via curl/WebFetch (`[[feedback-verificar-deploy-antes-de-afirmar]]`)

### Sobre design visual
1. **Foto > vetorial** em pelo menos 1 camada do slide
2. **Cores do logo > paleta cravada por mim** — sempre puxar a paleta do cliente real
3. **Cutout precisa encaixar** (sombra + glow + escala + posição contextual)
4. **Mais camadas ≠ mais visual** — só vale se cada camada tiver função (foto, overlay, glow, cutout, stencil, frame, texto)

### Sobre copy
1. **Tom dúplice** (leigo + expert dentro da mesma frase)
2. **Voz primeira pessoa do fundador** no slide AÇÃO
3. **Sem corporativês** ("nossa missão", "sua melhor versão", "democratizar")
4. **Sem urgência fabricada** — só factual com cronograma público

---

## 📌 Pra próxima sessão

Quando voltar a trabalhar com Verbo Design, antes de qualquer coisa:
1. Reler [[VERBO-DESIGN]] (hub)
2. Reler [[02-PRINCIPIOS]] (os 8 invioláveis)
3. Checar [[05-PROJETOS-ENTREGUES]] (o que já foi feito)
4. Atualizar este diário no fim do dia com novos aprendizados

---

**Ver também:** [[VERBO-DESIGN]] · [[02-PRINCIPIOS]] · [[05-PROJETOS-ENTREGUES]]
