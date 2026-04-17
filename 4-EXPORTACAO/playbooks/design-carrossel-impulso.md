# Playbook — Design de Carrossel Impulso Digital

Sistema visual e narrativo extraído dos carrosséis MPN-on e UrbanFeet. Base para todo post em slides da Impulso e dos clientes (GB Nutrition em diante).

---

## Princípio central

Um carrossel é uma narrativa. 8 slides = arco dramático, não lista. Cada slide tem função específica no arco.

---

## Sistema de design

### Paleta

**MPN-on (referência principal)**
- Fundo preto: `#0F0F0F`
- Fundo verde escuro: `#0E2A1D` (overlay ou gradiente)
- Acento (neon): `#C8E82E` (amarelo-lima)
- Texto: `#FFFFFF`
- Texto micro: branco com opacidade 60%

**GB Nutrition (adaptação)**
- Fundo preto + verde-petróleo (já é identidade existente)
- Acento: verde-limão da marca OU branco puro
- Texto: branco
- Mantém tudo mais igual — só troca a cor de acento

**Regra universal:** UMA cor acento só. Nunca duas neons competindo.

### Tipografia

- Família: sans-serif bold pesada (Archivo Black, Inter Black, ou similar)
- Uma família só, sem mistura

**Hierarquia:**
- Headline XXL — peso 800-900, cor acento
- Sub-headline L — peso 700, branco
- Corpo M — peso 400-500, branco
- Micro — peso 400, branco 60% opacidade
- Itálico em cor acento pra sub-ênfase dentro de frase branca

### Grid / Margens

- Formato: 1080 x 1350 (carrossel vertical IG)
- Margens laterais: 80-100px
- Margens topo/fundo: 100-140px
- Respiro generoso. Não encher.

### Elementos-âncora (marca)

- **Logo top-left** dentro de caixa arredondada com fundo escuro e borda fina
- **Footer:** `🌐 site.com` à esquerda + `Deslize ▷` à direita
- **Linha fina acento** horizontal como divisor contextual
- Estes 3 elementos se repetem em TODOS os slides

---

## Biblioteca de Layouts

### 1. Foto-hero
**Uso:** slide 1 (hook) e último (fechamento pessoal)
- Retrato em primeiro plano, ocupando 60-70% do vertical
- Fundo escuro (estúdio) ou gradiente
- Headline sobreposta embaixo ou à direita
- Linha fina acento acima da headline
- Headline em 2-3 linhas, 4-6 palavras por linha

### 2. Texto-dominante
**Uso:** argumentação central, pergunta forte
- Fundo escuro puro ou textura sutil
- Headline XXL em acento (pode ocupar 50% do slide)
- Corpo médio branco abaixo
- Sem imagem (ou imagem decorativa com overlay pesado)

### 3. Bento-blocks (objeção)
**Uso:** quebrar resistência / desmontar crença
- 3 quadrados em cor acento com texto em preto bold dentro (as objeções)
- Uma frase solta grande em acento do lado: "Não é verdade", "Não é o caso"
- Fundo escuro puro

### 4. Stats-destaque
**Uso:** prova social, dados de mercado
- Imagem de fundo com overlay verde/preto pesado
- Número gigante em acento (o dado)
- Sub-texto branco contextualizando
- Fonte do dado em micro (asterisco + citação)

### 5. Produto-mockup
**Uso:** apresentar ferramenta/solução
- Render 3D isométrico de logo ou integração (Shopify, Melhor Envio, Yampi, Mercado Pago)
- Glow/sombra colorida embaixo
- Headline XXL do lado ou abaixo
- Fundo escuro

### 6. Screenshot-prova
**Uso:** prova visual de resultado
- Print real de site/perfil ocupando 40-60% do slide
- Headline em cima explicando o que é
- Opcional: seta manuscrita apontando pro detalhe importante
- Rodapé com o link

---

## Ritmo narrativo — arco de 8 slides

| Slide | Função | Layout recomendado |
|---|---|---|
| 1 | HOOK | Foto-hero |
| 2 | PERGUNTA (prender pensamento) | Texto-dominante |
| 3 | CONTEXTO / MACRO | Stats ou Texto-dominante |
| 4 | OBJEÇÃO (quebrar resistência) | Bento-blocks |
| 5 | SOLUÇÃO (como funciona) | Produto-mockup ou Texto |
| 6 | PROVA (funciona) | Screenshot ou Stats |
| 7 | DIFERENCIAL (o que ninguém tem) | Texto-dominante |
| 8 | EXPANSÃO + CTA | Foto-hero |

Ajustar pra 7 ou 9 slides conforme arco. Nunca misturar layouts aleatoriamente — cada um tem função narrativa.

---

## Regras de copy dentro do design

- Headline: 4-6 palavras por linha, máx 3 linhas
- Grifo: 1-2 palavras em acento dentro de frases brancas (verbo de ação ou número)
- Negrito: verbo de ação e números sempre
- Sem emoji no headline. Emoji só no corpo, CTA ou legenda
- Footer idêntico em todos os slides do carrossel
- Linha fina acento como respiro, não como decoração

---

## Anti-padrões (NÃO fazer)

- Usar 2 cores neon/acento no mesmo carrossel
- Encher slide de texto (se não cabe, vira 2 slides)
- Fonte serif no corpo
- Headline em um tamanho só (perde hierarquia)
- Logo centralizado (âncora é top-left)
- Fundo branco puro (perde identidade visual)
- Mais de um CTA por carrossel
- Misturar layouts sem plano narrativo

---

## Variações por marca

| Marca | Acento | Fundo | Logo |
|---|---|---|---|
| MPN-on | #C8E82E (lima) | preto + verde escuro | MPN-on |
| UrbanFeet | idem MPN-on | preto | MPN-on (é do ecossistema) |
| GB Nutrition | verde-limão GB ou branco | preto + verde-petróleo | GB Nutrition |
| Impulso Digital | lima ou azul (definir) | preto | Impulso Digital |

---

## Referências visuais

Prints salvos em `C:/Users/DELL/Downloads/`:
- `EB_01 (5).png` — capa foto-hero MPN-on (Eduardo)
- `edu-3-s_01.png` até `edu-3-s_08.png` — carrossel MPN-on completo
- `carrosel-4_01.png` até `carrosel-4_08.png` — carrossel UrbanFeet (case)
- `carrosel-5_07.png` — fechamento pessoal MPN-on

---

## Implementação técnica

Projeto: `C:/Users/DELL/impulsodesign` (Next.js + `@vercel/og`)

Cada layout é um componente React. Rota `/api/og?c=<carrossel>&s=<slide>` renderiza PNG 1080x1350. Input via arquivos em `data/`: paleta, textos, imagens. Output: PNG pronto pro IG.

Vantagem: versionado, replicável, sem redesenhar do zero. Cada cliente da Impulso tem seu config.

---

# Biblioteca de Estilos

Cada entrada abaixo é um **estilo nomeado**. Antes de gerar um carrossel, escolher o estilo que casa com o negócio/momento — não misturar, não assumir.

O estilo 01 (MPN-on/UrbanFeet) é o que está descrito nas seções acima. Os demais abaixo foram absorvidos depois como referências adicionais.

---

## Estilo 01 — Verde Neon MPN-on

Definido nas seções anteriores deste playbook (paleta verde-lima #C8E82E sobre fundo preto/verde-petróleo, tipografia sans black, 6 layouts, arco de 8 slides).

**Casa com:** Impulso Digital, MPN-on, UrbanFeet (tech/negócios/mindset).

---

## Estilo 02 — Editorial Magazine Cover

**Referências (16/04/2026):** `C:/Users/DELL/Pictures/Screenshots/` arquivos `Captura de tela 2026-04-16 200119.png`, `200124.png`, `200128.png`, `200133.png`, `200139.png`. Cinco slides de um mesmo criador sobre IA/prompts/fotografia profissional.

**Paleta:**
- Fundo colorido SÓLIDO cobrindo o slide inteiro, uma cor dominante por slide: roxo vívido (#7B3AAD-ish), laranja queimado (#D06B2A), azul cobalto (#2E74B8), verde quase-cinematográfico (#1B3A2A com feixes), preto com overlay de cena
- Tipografia sempre BRANCA (ou off-white)
- Zero segundo acento. A cor do fundo É a identidade do slide.
- Fotografia ocupa 50-70% do frame, luz cinematográfica dramática

**Tipografia:**
- Headline: sans ultra-condensed super bold (estilo Druk Wide / Tungsten Black / Bebas Neue Black) em tamanho gigante — palavra única ocupando 70% da largura
- Efeito: palavra gigante fica ATRÁS da pessoa (z-index: pessoa na frente, texto atrás, overlap proposital)
- Sub-linha fina ALL CAPS espaçada acima da palavra gigante ("POR QUE", "A MAIOR", "COM A LUZ CERTA")
- Corpo: sans regular/medium tamanho pequeno, lead-in discreto abaixo

**Composição:**
- Figura humana (modelo/pose de estúdio) recortada em PNG, primeiro plano
- Palavra gigante atrás da figura (sobreposição parcial = profundidade)
- Micro-texto de caption em bloco pequeno
- Logo/watermark discreto no canto (ou ausente)
- Ano "2026" em vertical tiny no canto, como edição de revista

**Tom:**
- Editorial de revista de moda / capa de álbum
- Contra-intuitivo: afirma algo forte com uma palavra ("PLÁSTICO", "99%", "MENTIRA")
- Cada slide sustenta-se sozinho como pôster

**Casa com:**
- Marcas premium com rosto humano (você, Gabriel, influencer)
- Lançamentos, manifestos, tomadas de posição
- NÃO casa com: conteúdo educativo passo-a-passo, comparativos técnicos

**Arco narrativo típico (inferido):**
Cada slide = uma tese forte com uma palavra. A sequência empilha afirmações até um fechamento-convite. Menos storytelling linear, mais manifesto fragmentado.

---

## Estilo 03 — Card Roxo Cinematográfico

**Referências (16/04/2026):** `C:/Users/DELL/Pictures/Screenshots/` arquivos `Captura de tela 2026-04-16 200201.png`, `200206.png`, `200213.png`, `200218.png`, `200224.png`, `200232.png`, `200326.png`. Stories/reels em formato 9:16 sobre lançamentos de IA (Seedance, Nano Banana Pro).

**Paleta:**
- Fundo: IMAGEM cinematográfica cobrindo o slide inteiro (cyberpunk, IA gerada, cena dramática, neon)
- Card destaque: roxo vibrante `#6B2FFF` a `#8B5CF6` (Discord purple / Figma-ish)
- Texto dentro do card: branco puro bold
- Texto fora do card (parágrafos sobre fundo escuro): branco com **highlights roxos** em palavras-chave
- Assinatura: ícone ▶ play roxo centralizado no bottom (indicador de reel)

**Tipografia:**
- Headline no card roxo: sans bold (Inter Bold/Archivo Bold), tamanho médio, leitura confortável — não é headline gigante como estilo 02
- Corpo: sans regular tamanho leitura (~14-16pt equivalente), muito texto em bloco corrido
- **Bold + cor roxa** como único mecanismo de destaque dentro do corpo
- Bullets: card roxo arredondado com texto bold dentro, empilhados

**Composição:**
- Slide = bloco de texto longo sobre imagem cinematográfica
- Card roxo arredondado (radius ~16px) flutuando sobre o fundo pra hospedar headline ou bullet
- Hierarquia: imagem (fundo) → card roxo (headline) → parágrafo branco → bullet cards roxos aninhados → CTA card roxo no bottom
- Formato 9:16 stories, não 4:5 feed

**Tom:**
- Autoridade tech + reveal de novidade
- Educativo mas cinematográfico (não é slide de texto puro, a imagem faz 50% do trabalho)
- Muito texto mas legível: o card roxo ancora a ideia central, o corpo desenvolve

**Casa com:**
- Lançamentos de produto tech / drops / avisos (AgendaPRO, MPN-on drops, Impulso Digital tutoriais AI)
- Conteúdo em formato reel/story (não feed 4:5)
- Educativo "como fazer X" com tom cinematográfico

**Arco narrativo típico (inferido):**
Slide 1 = hook cinematográfico com headline impactante ("A INTERNET PAROU") → slides 2-N = explicação estruturada dividida em blocos (Controle de Referência, Storyboard, VFX, Anota aí) → CTA final.

**Variação "meme/reação":** Estilo 03 mas com imagem cinematográfica trocada por meme/reação (Nicolas Cage). Mantém card roxo + highlight roxo + CTA. Usa quando o tema é reação a novidade viral.

---

## Estilo 04 — Editorial Serif Cream (LD Logotipos / Aula de Vendas)

**Referências (16/04/2026):** 26 prints de `@ld.logotipos` em `C:/Users/DELL/Pictures/Screenshots/` (arquivos `Captura de tela 2026-04-16 201006.png` até `201344.png`). Agência de identidade visual premium feminina. Mistura carrosséis de venda ("aula de vendas"), identidade de marca (Bem Me Quer, Grano Aroma), tips em formato tweet e showcases de paleta.

### Paleta (sempre a mesma família)

- Fundo creme quente: `#E8DFCF` / `#EFE6D4` (papel kraft / areia)
- Fundo escuro contrastante: **marrom café** `#3E2818` / `#2B1D14`
- Acento creme-dourado: `#D4B87A` / `#E8D7A6` (selo de lacre, fita)
- Texto escuro: marrom profundo (nunca preto puro — preto #000 quebra a paleta)
- Texto claro: creme off-white `#F0E8D4` (quando fundo é marrom)
- **Regra:** zero neons, zero saturação máxima. Tudo é quente, terroso, orgânico.

### Tipografia (mistura calculada)

- Headline serif elegante (Playfair Display, Cormorant Garamond, DM Serif Display, Canela)
- Itálico serif pra ênfase (troca de weight/style DENTRO do headline — ex: "Use a técnica do **espelhamento**" onde "espelhamento" vira itálico serif)
- Corpo: sans-serif neutro (Inter, Manrope) pra respiro
- Sublinhado em palavras-chave (sem bold) — truque de livro antigo
- ALL CAPS micro-label espaçado pra labels ("NOVO PROJETO", "SLOGAN", "LOGOTIPOS & VARIAÇÕES")

### Elementos-âncora (marca única desse estilo)

- **Frame de janela desktop** no topo: barra `— □ ×` com nome do arquivo tipo `auladevendas.exe` / `identidadevisual.exe` — como se o carrossel fosse um app aberto (meta-design criativo, não é apenas screenshot)
- **Card de "tweet"**: avatar + nome + @handle + checkmark azul, como se fosse um post do Twitter/X, pra dar autoridade
- **Selo de lacre dourado** (wax seal) em slides de "oferta" ou "presente"
- Barra de busca no rodapé: `🔍 @ld.logotipos / design de marcas de alto nível`
- Crachá/fita lateral com nome do projeto (brand identity showcases)

### Sub-formatos por PROPÓSITO (a peça central do estilo)

Este estilo é uma família de sub-formatos. Cada um serve pra um objetivo específico de comunicação:

---

#### 5A — Tweet Quote Card (`pra que serve: tip rápido, opinião forte, claim autoral`)
- Fundo sólido (creme OU marrom)
- No topo: card "tweet" com avatar + @ + check azul
- 1 parágrafo curto, bold + sublinhado em palavras-chave
- Nenhum outro elemento
- **Quando usar:** slide 1 de carrossel didático (hook), ou post single de tip
- **Quando NÃO usar:** reveal de produto, oferta, caso-de-uso visual
- **Gatilhos de briefing:** "dica rápida", "opinião", "pílula de conteúdo"

#### 5B — Pull-Quote Framed Card (`pra que serve: ensinar passo, entregar lição`)
- Card marrom arredondado centralizado sobre fundo creme (ou invertido)
- Texto serif em destaque ("Use a técnica do *espelhamento*")
- Seta ↓ embaixo pra indicar "continua"
- Logo da marca + @handle no rodapé como card de autor
- **Quando usar:** slides 2-N de um carrossel ensino, onde cada lição vira um card
- **Quando NÃO usar:** lançamentos agressivos, cases, ofertas com preço
- **Gatilhos:** "passo", "técnica", "regra", "princípio"

#### 5C — Bullet Rules Stack (`pra que serve: entregar checklist de comportamento`)
- Fundo creme, zero frame visual
- Header: tweet card compacto
- Lista com setinha → e bold em ação ("Cliente manda áudio, **responda com áudio**")
- 5 a 7 itens empilhados
- **Quando usar:** slide do meio onde você lista regras/hábitos/passos
- **Quando NÃO usar:** quando o conteúdo é emocional ou narrativo (listas frias = sabotam storytelling)
- **Gatilhos:** "se X, faça Y", "comportamentos", "hábitos", "regras simples"

#### 5D — Gift Reveal (`pra que serve: anunciar brinde/bônus/lead magnet`)
- Imagem fotográfica de caixa embrulhada com fita dourada (metade do slide)
- Card marrom com headline serif "Por isso que vou te *presentear*..."
- Corpo explicando o que a pessoa recebe
- **Quando usar:** slide 6-7 de um carrossel de oferta, onde você apresenta o bônus
- **Quando NÃO usar:** conteúdo sem oferta, posts informativos
- **Gatilhos:** "presente", "bônus", "lead magnet", "material gratuito"

#### 5E — Outcome Box Stack (`pra que serve: listar resultados/benefícios`)
- Fundo marrom
- Headline serif "Com esses stories, *você vai*:"
- 3 cards creme finos empilhados, cada um com 1 frase + palavra-chave bold
- **Quando usar:** slide de benefícios no carrossel (normalmente posição 5-6)
- **Quando NÃO usar:** slide de problema/dor (esse formato é otimista demais pra isso)
- **Gatilhos:** "você vai conseguir", "benefícios", "resultado final"

#### 5F — CTA Final com Palavra-Gatilho (`pra que serve: fechamento com comando`)
- Fundo creme
- Headline serif "Quer que eu te envie a sequência no direct para *você vender muito*?"
- Card marrom escuro com CTA: "Comenta com o que você trabalha / que irei te enviar tudo no direct"
- Mecânica de engajamento (comentário = DM)
- **Quando usar:** último slide de carrossel de oferta
- **Quando NÃO usar:** carrossel puramente informativo
- **Gatilhos:** "CTA comentário", "captura no direct", "gatilho de DM"

#### 5G — Color Palette Showcase (`pra que serve: educar sobre cores, inspirar briefing`)
- Grid 2x2 de fotos (flores, tecidos, frutas, cristais — cada quadrante num tom das cores em destaque)
- Card central com duas faixas:
  - Faixa 1: nome romântico da cor ("Vermelho cereja / Roxo ameixa / Verde esmeralda") + hex code
  - Faixa 2: segunda cor + hex code
- Mini-card creme embaixo: "Para marcas que querem [adjetivo], é [característica]"
- **Quando usar:** conteúdo educativo de branding/design, inspiração de paleta
- **Quando NÃO usar:** conteúdo que não é sobre design
- **Gatilhos:** "paleta", "combinação de cores", "inspiração cromática"

#### 5H — Brand Identity Case Study (`pra que serve: portfólio de projeto entregue`)
- Sequência ritualística de slides:
  1. Capa com "NOVO PROJETO" + logo final + cadeira/produto em foto
  2. Slogan em itálico serif sobre foto do produto
  3. Equação visual: "Letra G + ☕ = Ĝ" (conceito criativo destrinchado)
  4. Logotipos & variações (grid de variações do logo)
  5. Mockups em contexto real (caneca, crachá, loja)
- **Quando usar:** depois de entregar projeto pro cliente, publicar como case
- **Quando NÃO usar:** quando o cliente não autorizou (óbvio) ou quando é lançamento, não case
- **Gatilhos:** "case", "projeto entregue", "identidade visual finalizada", "logo novo"

#### 5I — Photo Metaphor Compare (`pra que serve: contraste "um/outro" visual`)
- Fundo creme minimalista
- Card tweet no topo
- 1 frase curta ("Um, você chama de *iPhone*")
- 1 foto grande de objeto
- Rodapé com domínio + tagline
- Slide seguinte vira a metáfora: "O outro promete *funcionalidades*" + foto oposta
- **Quando usar:** carrossel de 2-4 slides fazendo comparação qualitativa (marca líder vs commodity)
- **Quando NÃO usar:** quando precisa de texto denso ou explicação
- **Gatilhos:** "um vs outro", "commodity vs marca", "preço vs valor"

#### 5J — Book Cover Intro (`pra que serve: capa temática com peso editorial`)
- Foto de objeto-metáfora ocupando o slide inteiro (livro marrom, caderno, etc.)
- Headline serif gigante sobre o objeto ("Combinação de cores / *Em alta esse ano*")
- Abas laterais com categorias ("@ld.logotipos / Identidade Visual / Marketing") — como marcadores de livro
- **Quando usar:** slide 1 de carrossel que precisa peso editorial/temático
- **Quando NÃO usar:** hooks urgentes/diretos
- **Gatilhos:** "tema do ano", "tendência", "edição especial"

### Arco narrativo completo (carrossel "Aula de Vendas" reconstruído)

Juntando os sub-formatos numa sequência típica de 8 slides:
1. **5J ou 5B** — Hook editorial (book cover OU card serif com promessa)
2. **5A** — Tweet com claim forte ("Se você não consegue vender, essa técnica salva")
3. **5B** — Pull-quote explicando o conceito ("A técnica do espelhamento")
4. **5C** — Lista de regras (5-7 comportamentos práticos)
5. **5A ou 5B** — Reforço com exemplo/explicação
6. **5E** — Outcome box: o que você ganha aplicando isso
7. **5D** — Gift reveal: "Vou te presentear com a sequência"
8. **5F** — CTA final: "Comenta X que te envio Y no direct"

### Casa com

- **Marcas premium feminina/wellness** (coach, nutri, terapeuta, designer, consultora)
- **Conteúdo educativo de alto ticket** (mentoria, curso R$2000+)
- **Agências de identidade visual / branding** (o target original)
- **Posicionamento "marca de alto nível"** (o claim literal da @ld.logotipos)

### NÃO casa com

- Tech/SaaS masculino agressivo (ex: MPN-on, Impulso Digital padrão — conflita)
- Nutrição esportiva/suplementos performance (GB Nutrition precisaria de variação pesada)
- Conteúdo popular/viral (é "lento" demais pra scroll rápido)
- Anúncios de performance com urgência (o tom contemplativo não converte em frio)

### Gatilhos de ativação automática (quando escolher esse estilo)

Um briefing ou conteúdo que mencione qualquer um destes = disparar Estilo 05:
- "público feminino consciente / wellness / autocuidado"
- "marca artesanal / boutique / atelier"
- "alto ticket / mentoria / consultoria premium"
- "tom contemplativo / editorial / revista"
- "paleta terrosa / orgânica / bege / marrom"
- "case de identidade visual / branding"
- "conteúdo lento que convida leitura"

### Insight meta (por que esse estilo funciona)

O frame de janela desktop (`auladevendas.exe`) é um truque brilhante: transforma cada carrossel em um "arquivo" / "produto consumível". Dá sensação de que o conteúdo é uma ferramenta entregue, não apenas um post. Esse device é replicável pra qualquer nicho — poderia ser `playbook.pdf`, `receita.docx`, `aula-01.mp4` — e aumenta valor percebido sem mudar nada mais.

O Twitter card com checkmark azul dá autoridade artificial (mesmo que o conteúdo não venha do Twitter). Funciona porque o leitor reconhece o padrão visual de "autoridade verificada" vindo de outra rede.

---

## Estilo 05 — Comparativo Didático Popular

**Referência:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 200315.png`. Carrossel "Instagram 2026 — Mudança no Algoritmo".

**Paleta:**
- Fundo claro (cinza-claro / branco)
- Cores vivas puras: vermelho (erro), verde (acerto), rosa-magenta (título), gradiente colorido do Instagram
- Emojis usados como elementos gráficos (X vermelhos, checks verdes)

**Tipografia:**
- Sans bold padrão (Poppins Bold / Montserrat Bold)
- Tamanhos médios, legibilidade acima de impacto
- Título em badge colorido com borda arredondada

**Composição:**
- Split em 2 colunas: "Antigo X" vs "Novo ✓"
- Gráfico/ilustração central (logo Instagram, terra rachada, etc.)
- Lista com bullets gráficos (X ou check)
- Badge "LEIA A LEGENDA" como CTA

**Tom:**
- Popular, didático, infográfico de WhatsApp
- Fácil de salvar/compartilhar
- Quebra identidade premium — vai pro conteúdo de massa

**Casa com:**
- Conteúdo educativo básico pra tráfego frio
- Posts de "5 erros que...", "antes vs depois", "o que mudou"
- NÃO casa com marca premium (é o oposto do estilo 02)

**Status:** absorvido como referência, mas **provavelmente não será aplicado** nas marcas Impulso/MPN-on/GB. Guardado caso surja produto/canal com posicionamento massivo.

---

## Estilo 06 — Ad B2B Nicho Especializado (landing ad)

**Referência:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 201634.png` — "Tráfego Pago Para Médicos" (@321med).

**Paleta:**
- Fundo: azul-meia-noite/grafite (`#0F1E2E` a `#17293C`)
- Cor dominante: branco puro pro texto
- Acento único: azul vívido (`#3D7DC8`) em badges e CTA
- Foto: plano médio da pessoa, cortada no ombro, iluminação dramática lateral
- Zero segundo acento — disciplina monocromática

**Tipografia:**
- Headline: sans black ALL CAPS, grande, contraste altíssimo sobre azul escuro ("TRÁFEGO PAGO / PARA MÉDICOS")
- Corpo: sans regular/medium tamanho leitura, alinhado à esquerda
- Badge CTA: sans bold ALL CAPS dentro de retângulo azul-vívido arredondado

**Composição:**
- Formato 1:1 (quadrado, pensado como anúncio de feed)
- Headline no topo-esquerdo
- Badge abaixo do headline: "MÉTODO VALIDADO EM + DE 160 CONSULTÓRIOS" (prova social numérica)
- Lista de 4-6 bullets curtos em uma linha cada ("Sem te vender cursos / Sem promessas mirabolantes / Respeitando as normas do CFM")
- Foto da pessoa do lado direito, respeitando 40-50% do frame
- CTA final em badge no rodapé: "TOQUE NO LINK ABAIXO E CONHEÇA"
- Logo da marca em canto (pequeno)

**Tom:**
- Institucional-B2B, "somos especialistas em X"
- Conservador, confiável, distante de hype
- Prova social > promessa de resultado

**Pra que serve:**
- Anúncio pago (Meta/Google) pra captação de nicho regulado (médico, dentista, advogado, engenheiro)
- Primeiro contato com público B2B onde credibilidade > copy agressivo
- Complemento de landing page — o ad replica o visual da LP

**Quando NÃO usar:**
- Conteúdo orgânico de feed (formato anúncio fica deslocado no scroll natural)
- Nichos emocionais (fitness feminino, coaching pessoal) — tom frio demais
- Posts educativos longos (formato é pontual, não ensina nada)

**Gatilhos de ativação:**
- "nicho regulado / profissional liberal"
- "anúncio pago / campanha paga"
- "prova por número / método validado"
- "B2B / serviço especializado"
- "conservador / institucional"

**Insight meta:** esse formato NEGA o que a maioria dos anúncios faz (urgência, hype, desconto). O anti-hype VIRA o diferencial. Quando o mercado grita, quem sussurra é ouvido. Aplicável a qualquer nicho onde o cliente está saturado de promessas.

---

## Estilo 07 — Color Combo Minimal Split (Brutalist Educational)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 201653.png` até `201712.png` — 5 slides de `@design.deb` série "LEARN DESIGN / COMBO 01-05" (Wattle + Bottle Green, Khaki Orange + Dark Slate Gray, Murrey + Alabaster, Ice Latte + The Mint, Raisin + Caramel).

**Paleta:**
- Cada slide usa 2 cores plenas, uma em cada metade horizontal do slide (split 50/50)
- As 2 cores contrastam: clara + escura, saturada + neutra
- Círculo preto sólido (#0A0A0A) no centro quebra o split
- Hex codes visíveis em pílulas arredondadas

**Tipografia:**
- Font única: sans retangular moderna (Neue Machina, Space Grotesk Bold, PP Mondwest)
- Nome da cor: ALL CAPS grande, peso 700-900
- Hex code em pílula com borda fina
- Header paginado: "LEARN DESIGN" + "PAGE 01 / 02 / 03..."

**Composição:**
- Formato 4:5 vertical
- Divisão horizontal em 2 partes iguais — cada metade é uma cor
- Metade superior: nome da cor 1 + hex em pílula
- Círculo preto central com "COMBO 01" (indexação sequencial)
- Metade inferior: nome da cor 2 + hex em pílula
- Header ALL CAPS espaçado ("LEARN DESIGN")
- Footer: @handle do autor à esquerda + setinhas de navegação à direita

**Tom:**
- Educativo minimalista, brutalist design school
- Frio, técnico, sem decoração
- Oposto do estilo 5G (que é premium feminino com fotos) — aqui é pura cor + tipografia

**Pra que serve:**
- Conteúdo educativo de design/branding pra feed de designer/agência
- Biblioteca visual de paletas (salvável, compartilhável entre designers)
- Demonstração de autoridade técnica sem storytelling
- Série numerada que gera expectativa ("PAGE 05/10")

**Quando NÃO usar:**
- Público não-designer (é muito seco, sem narrativa)
- Posts emocionais ou narrativos
- Qualquer conteúdo que não seja sobre cor

**Gatilhos de ativação:**
- "paleta / combinação de cores / cor da marca"
- "série numerada / PAGE X / COMBO X"
- "brutalist / minimalist / técnico"
- "público designer ou cliente de agência"

**Insight meta:** a paginação explícita ("PAGE 01/05") funciona como MICRO-SÉRIE dentro da mesma conta. Vira conteúdo collection-based: o seguidor precisa ver todos pra completar. Aplicável a qualquer série (ex: "LEARN META ADS / LESSON 01", "ROTINA DO EDU / DIA 01").

---

## Estilo 08 — Brand Guidelines Manual (Identity Book)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 201740.png` até `201809.png` — 7 slides do projeto VAQTRI (brand identity manual completo apresentado como carrossel).

**Paleta:**
- Duas cores dominantes que se alternam por slide:
  - Marrom profundo (`#3E2F1F` / `#2A1F14`) com texto creme
  - Creme-peach claro (`#FFE4C4` / `#F5DEC0`) com texto marrom
- Branco puro em slides de logo construction
- Acento: cinza médio para grids e eixos
- Paleta rigidamente MONOCROMÁTICA — a marca ocupa todo o espaço visual

**Tipografia:**
- Headline: sans ultra-heavy moderna (Neue Machina Ultra, PP Neue Machina) — sensação editorial/industrial
- Corpo: sans regular limpa (Satoshi, Inter)
- Labels: ALL CAPS espaçadas (LOGO CONSTRUCTION, TYPOGRAPHY, LOGO DESIGN OVERVIEW)
- Paginação visível no canto superior direito (01, 02, 03...)

**Composição (estrutura ritual de manual):**
1. **Capa:** `BRAND GUIDELINES` em tipografia black gigante, grid visível ao fundo, label "Identity Manual" no rodapé, índice sequencial no canto
2. **Logo principal:** logo completo centralizado sobre fundo claro, "01/02" no canto
3. **Logo construction:** logo + grid geométrico mostrando construção matemática (círculos, linhas âncora)
4. **Logo overview:** 2 parágrafos explicando o conceito da marca (o significado de cada letra, valores)
5. **Typography:** pares Aa com nomes das fontes + amostras de frase da marca ("Vision in Every Stitch") em cada fonte e peso
6. **Brand in context:** mockup do modelo usando a roupa (ou produto) com tipografia gigante sobrepondo parte da imagem — palavras-pilares da marca em badges (Reliable, Simple, Strong, Fabric, Fit, Finish)
7. **Cover variações:** palavra-título gigante com logo inserido dentro da letra ("PROP[v]ERLY")

**Tom:**
- Editorial de manual de marca (tipo brand book de agência)
- Luxo técnico — equilibra rigor sistemático com beleza editorial
- Autoridade: "entregamos um sistema, não um logo"

**Pra que serve:**
- Apresentar um projeto de identidade visual finalizado como case portfolio
- Documentar a própria marca da Impulso Digital / Impulso Design como manual público
- Criar conteúdo de agência que eleva percepção de valor (projeto de R$500 vira apresentação de R$10k)
- Posts de "bastidor do projeto" / "processo criativo" com rigor de brand book

**Quando NÃO usar:**
- Marca do cliente que não tem identidade sistemática (se não tem grid, paleta, tipografia e conceito, o manual fica vazio)
- Conteúdo de venda direta (é apresentação, não oferta)
- Posts curtos — esse formato precisa de 6-10 slides pra respirar

**Gatilhos de ativação:**
- "brand book / manual de marca / identity manual"
- "case de identidade visual / projeto entregue"
- "apresentar a marca do Impulso ao mercado"
- "portfolio / showcase"
- "sistema de marca / rigor / processo"

**Insight meta:** o formato funciona porque replica o DELIVERABLE físico (PDF de brand book) no Instagram. O seguidor sente que está recebendo um fragmento de um documento premium, não um post. Aumenta percepção de valor da agência. Aplicável também pra apresentar playbooks internos ("PLAYBOOK META ADS / PAGE 01"), manuais de operação, SOP de equipe.

**Diferença vs Estilo 5H (Brand Identity Case Study):**
- 5H é lúdico, fragmentado, storytelling (Letra G + café = Ĝ) → vende emoção do conceito
- 08 é sistemático, ritualístico, editorial → vende método e rigor
- 5H cabe pra marcas artesanais/boutique; 08 cabe pra marcas que querem posicionamento de luxo/corporativo

---

## Estilo 09 — Dark Educational Teach (@design.deb typography series)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202112.png` até `202142.png` — 8 slides de `@design.deb` série "LEARN DESIGN / Master Typography like a pro". Mesmo autor do Estilo 07, mesmo header `LEARN DESIGN`, mas SKIN TOTALMENTE DIFERENTE pro tema "typography" (vs color combos).

**Paleta:**
- Fundo: preto puro `#000` ou quase (`#0A0A0A`)
- Acento: amarelo-ouro `#FFC72C` / `#FFB700` — usado em headlines, palavras-chave dentro de parágrafos, bullets coloridos
- Texto principal: branco puro `#FFFFFF`
- Texto secundário: branco 70% opacidade
- Tabelas/grids: bordas finas amarelas sobre fundo preto
- Capa do carrossel: imagem surreal/cinematográfica (astronauta lendo livro num monte de flores, céu roxo com lua) — SÓ a capa quebra o preto

**Tipografia:**
- Headline: sans bold/black ALL CAPS, amarelo (ex: "WHAT TYPOGRAPHY", "TYPEFACE VS. FONT", "COMMON MISTAKES")
- Sub-headline: sans regular, branco, tamanho menor ("Actually Does:", "Know the difference")
- Corpo: sans regular branco, mistura com **trechos amarelos** pra destaque
- Dentro de tabelas: cada célula pode usar tipografia TEMÁTICA ao conteúdo (ex: slide "Types of Typefaces" mostra a palavra "Serif" em serif, "San Serif" em sans, "Script" em script, "Monospace" em monospace — auto-exemplo)

**Composição:**
- Formato 4:5 vertical
- Header fixo "LEARN DESIGN" (ALL CAPS espaçado, topo-esquerdo)
- Footer fixo: @handle à esquerda + setinhas de navegação à direita
- Conteúdo central: sempre uma estrutura organizada
  - Tabela 2x2 ou 4x2 com bordas amarelas
  - Coluna dupla comparativa
  - Lista de 4-5 itens com frase metade-branca / metade-amarela
  - Diagrama visual (anatomy of type com labels coloridos)
- Tagline fechadora em UMA frase com branco + amarelo ("Tiny details, **huge difference.**", "Less mess, **more clarity.**", "Every font **tells a story.**")

**Tom:**
- Aula de faculdade de design adaptada pra feed
- Denso mas respirado — muita informação técnica mas com hierarquia clara
- Confiança de professor, não de influencer
- Capas cinematográficas dão peso (astronauta lendo = virada poética)

**Pra que serve:**
- Conteúdo educativo técnico com 8+ slides (impossível simplificar em 3)
- Ensinar um tópico em profundidade (typography, grid, hierarchy, copywriting, Meta Ads, SaaS, etc.)
- Posts "salváveis" — leitor guarda pra consultar depois
- Mostrar autoridade sem vender nada (construir audiência qualificada)
- Substituível: qualquer tópico técnico de Eduardo (Meta Ads, copywriting, funis, Next.js) cabe aqui trocando só os textos

**Quando NÃO usar:**
- Conteúdo de venda direta (o tom é de professor, não vendedor — não converte)
- Temas emocionais/narrativos
- Públicos não-técnicos que não consomem carrossel longo

**Gatilhos de ativação:**
- "ensinar X em profundidade / aula completa sobre Y"
- "tabela comparativa / regras / anatomia / fundamentos"
- "8+ slides de conteúdo denso"
- "público quer aprender o ofício"
- "carrossel salvável"

**Insight meta:** o MESMO autor (`@design.deb`) usa header idêntico (`LEARN DESIGN`) mas SKIN diferente pra temas diferentes — Estilo 07 (color split brutalista) pra cor, Estilo 09 (dark yellow teaching) pra tipografia. Lição: uma marca pode ter múltiplos skins visuais dentro de UMA série unificada, desde que a assinatura (header + footer + @handle + ritmo) se mantenha. Isso abre liberdade enorme — a Impulso pode ter uma série "PLAYBOOK" que muda de visual por módulo (Meta Ads = verde neon, Copy = serif creme, SaaS = dark+amarelo) mas sempre traz o header `PLAYBOOK IMPULSO / MÓDULO XX`.

---

## Estilo 10 — SaaS Product Demo Minimalist (Luma / Apple / Stripe-ish)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202403.png` até `202419.png` — 5 slides da Luma apresentando "Luma Agents". Estética Apple marketing / Stripe landing.

**Paleta:**
- Fundo: branco-gelo `#F7F7F5` com grid de pontinhos sutis (dot grid como papel de caderno)
- Texto: preto profundo `#0A0A0A` (nunca preto puro, nunca off-black)
- Acentos coloridos: APENAS vindos dos próprios screenshots do produto (roxo, azul, verde das UIs)
- Zero outro acento na moldura — a UI é o único lugar de cor

**Tipografia:**
- Headline principal: sans bold neutra (Söhne, Inter, General Sans), tamanho médio-grande, preto
- Palavras-chave em ênfase: serif italic elegante ("*Here's how:*", "*in a board.*") — quebra do sans
- Corpo: sans regular espaçada
- Todo o texto alinhado centralizado

**Composição:**
- Formato 4:5 vertical
- Topo: logo do produto pequeno (ícone + wordmark em lockup) centralizado — tamanho mini, apenas assinando
- Meio: headline + sub-frase em serif italic
- Miolo: screenshot(s) do produto flutuando, com sombra sutil, ligeiramente inclinados (3-5°) — efeito de mockup
- Alternativa: cartão de "prompt input" realista (input de texto + botão preto redondo com seta) imitando o próprio produto
- Rodapé: CTA black pill ("Try Luma Agents") centralizado em slides de fechamento

**Tom:**
- SaaS confiante, calmo, premium
- Não grita — sussurra a promessa
- Produto > copy (o screenshot faz 70% do trabalho)
- Apple Keynote na vibe: muito espaço em branco, poucas palavras, objeto central

**Pra que serve:**
- Lançar feature/produto SaaS (AgendaPRO, RadarPRO, Impulso Digital como software)
- Posts de "o que o produto faz" com UI real
- Conteúdo B2B pra decisores (marketing mostrando valor sem hype)
- Feed de investor update / product changelog
- Material de post-launch (momento do lançamento + replays explicativos)

**Quando NÃO usar:**
- Produto físico/serviço (não tem UI pra mostrar, fica vazio)
- Conteúdo agressivo de venda com desconto/urgência
- Público B2C massivo (é premium demais, vai parecer "frio")
- Quando você ainda não tem produto com UI polida (vai expor o que não tá pronto)

**Gatilhos de ativação:**
- "SaaS / software / feature / ferramenta"
- "lançamento de produto digital"
- "UI do produto é o hero"
- "tom Apple / Stripe / Linear / Notion"
- "público de decisor B2B / fundador / head of"

**Insight meta:** o truque é "a moldura não compete com o produto". Fundo branco, dot grid sutil, tipografia neutra, único acento é a cor vinda da UI. Isso força o olho a ir direto ao screenshot. Muito aplicável pra AgendaPRO (mostrar dashboard), RadarPRO (mostrar lista de leads), Impulso Digital (mostrar LP rodando). **Contraste com estilo 08:** 08 é um BRAND BOOK editorial (apresenta o sistema de marca), 10 é PRODUCT DEMO funcional (apresenta a ferramenta em ação). Use 08 pra "olha como minha marca é linda", 10 pra "olha o que meu produto resolve".

---

## Estilo 11 — Inspiração Diária Typographic Photomanipulation (@thiagor.designer)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202652.png` (PROFUNDIDADE — astronauta + águias + texto atrás), `202737.png` (Ritmo visual — atleta + texto 3D no fundo). Série "Inspiração Diária" com uma palavra-conceito por post.

**Paleta:**
- Fundo: preto profundo `#0A0A0A` ou gradiente escuro com atmosfera (nuvens, fumaça, luz lateral)
- Tipografia 3D dimensional: branco creme `#F4EBD9` ou marrom rústico `#8A5A3B` (caverna)
- Pele/figura humana: tons naturais mantidos, com aumento de contraste dramático
- Acento: nenhum neon — tudo é ambiente/claroscuro

**Tipografia:**
- Palavra-conceito GIGANTE em serif condensed ou sans display condensed, 3D extrudada, posicionada ATRÁS do personagem (o corpo tapa parcialmente as letras)
- Legenda secundária pequena no topo ("INSPIRAÇÃO DIÁRIA" ou assinatura @)
- Máximo 2 elementos de texto por slide — a palavra é o hero
- Efeito de profundidade: sombra longa, texto ocupa 70% da altura do slide

**Composição:**
- Formato 4:5 ou 1:1
- Personagem/objeto central recortado com photoshop skill alto, iluminado dramaticamente
- Texto 3D atrás como "cenário tipográfico"
- Camadas visuais: (1) fundo atmosférico, (2) tipografia 3D, (3) figura recortada na frente
- Pequenos elementos voadores (águias, partículas, poeira) pra dar profundidade

**Tom:**
- Grandioso, épico, cinematográfico
- "Frase motivacional com peso de pôster de filme"
- Pausa pra pensar — uma palavra por slide, carrossel é contemplativo
- Zero hype comercial — é quase arte

**Pra que serve:**
- Autoridade visual (designer/criativo mostrando skill técnico)
- Série de "palavra do dia / conceito da semana" (formato serial que fideliza)
- Quebra dentro de feed comercial (slide contemplativo entre ofertas)
- Reforço de marca criativa (UrbanFeet em momento conceitual, Impulso Digital flex de skill)

**Quando NÃO usar:**
- Oferta/conversão direta (não tem CTA, não vende nada)
- Quem não tem skill de photoshop/retouching (sai amador na hora)
- Marca que precisa de urgência ou call-to-action claro
- GB Nutrition, AgendaPRO, MPN-on em modo venda

**Gatilhos de ativação:**
- "série de conceitos / palavras do dia"
- "autoridade criativa / flex de skill visual"
- "posts entre ofertas pra respirar feed"
- "conteúdo de marca pessoal de designer"

**Insight meta:** o truque é tipografia como cenário, não como mensagem. A palavra vira arquitetura. A pessoa existe dentro da palavra. Requer habilidade real de composição e recorte — não é template, é photomanipulation. Não tentar reproduzir isso em escala rápida; usar pra momentos pontuais de flex.

---

## Estilo 12 — Movie Poster Analysis Carousel (@thiagor.designer)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202618.png` (capa "Os 10 melhores pôsteres"), `202622.png` (Pulp Fiction), `202626.png` (Superman), `202630.png` (Fury), `202634.png` (Green Knight), `202640.png` (Alien), `202726.png` (Little Miss Sunshine). Série didática analisando composição de pôsteres de cinema.

**Paleta:**
- Fundo: preto puro `#000000` (cinema dark)
- Grade sobreposta vermelho tomate `#FF3B30` ou amarelo solar `#FFC72C` como "linha-guia" analítica
- Pôster de referência centralizado mantém cores originais
- Texto: branco `#FFFFFF` ou creme quente `#FFF4D6`

**Tipografia:**
- Título do filme em serif ou sans bold condensed, tamanho médio
- Nome da técnica analisada em serif itálico pequeno ("Regra dos terços", "Simetria", "Triângulo")
- Parágrafo analítico embaixo em sans regular, 3-5 linhas, justificado
- Numeração discreta do slide (01/10, 02/10) no canto

**Composição:**
- Formato 4:5
- Pôster ocupa 60-70% da altura, centralizado
- Grid/overlay vermelho marcando a técnica de composição por cima do pôster
- Embaixo: bloco analítico explicando a técnica
- Rodapé: "Siga @thiagor.designer" discreto
- Capa tem título grande em serif + numeração "10 pôsteres"

**Tom:**
- Didático-cinéfilo
- Análise técnica sem jargão pretensioso
- "Deixa eu te mostrar por que isso funciona"
- Ritmo de estudo, não de venda

**Pra que serve:**
- Carrossel educativo de nicho criativo (cinema, design, fotografia, arquitetura)
- Autoridade via análise de obras canônicas
- Formato "análise de X casos" — versátil: análise de LPs, análise de logos, análise de anúncios
- Educativo pra Impulso Digital: "10 landing pages que converteram e por quê"

**Quando NÃO usar:**
- Audiência não-nichada (precisa de vocabulário específico pra funcionar)
- Venda direta
- Quando você não tem skill de curadoria (selecionar só 10 que valem o post)

**Gatilhos de ativação:**
- "análise de referências / desconstrução"
- "top 10 / top 5 com explicação técnica"
- "educativo denso pra audiência nichada"
- "autoridade via curadoria"

**Insight meta:** a fórmula é OBRA CANÔNICA + GRID ANALÍTICO + PARÁGRAFO CURTO. Replicável pra qualquer nicho criativo/técnico. Impulso Digital pode fazer "10 landing pages que convertem muito" com o mesmo esqueleto: screenshot da LP + overlay vermelho marcando o que funciona + parágrafo. Thiago Rodrigues é mina de ouro de formato replicável.

**Sub-formato 12A — Infográfico de Técnicas em Grid (`202709.png`):** grid 2×N com logos/cases + nome da técnica + 1 frase explicando. "Técnicas usadas nos logos dos últimos 30 anos" — variação compacta.

**Sub-formato 12B — Collage Poster Grid (`202658.png`, `202703.png`):** mosaico 2×2 ou 3×3 de pôsteres dentro de um slide — usado como fechamento/teaser do carrossel analítico.

**Sub-formato 12C — Capa Ilustrada (`202721.png`):** fundo amarelo solar `#FFC72C` + ilustração pop + título "Os 10 mais incríveis pôsteres" — alternativa de capa que quebra o preto cinema pra chamar atenção no feed.

---

## Estilo 13 — Paid Educational Ad (Pós-graduação / Curso / UNIFAST)

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202559.png` — anúncio Thiago Rodrigues pós-graduação Design UNIFAST.

**Paleta:**
- Fundo: preto `#0A0A0A` com textura sutil
- Acento: dourado `#C9A227` ou `#E8C15B` (linhas finas, selos, CTAs pequenos)
- Pele/foto do especialista mantida natural
- Detalhes técnicos: branco puro `#FFFFFF`

**Tipografia:**
- Headline em sans bold grande, branco, tom de autoridade
- Subheadline em itálico ou sans regular dourado
- Informação institucional (logo UNIFAST, MEC, carga horária) em sans regular pequeno
- CTA "Clique no link da bio" em pill preto com borda dourada

**Composição:**
- Formato 4:5 feed ou 1:1
- Foto do especialista ocupando 45-55% do slide (lado esquerdo ou direito), recorte limpo
- Texto lado oposto hierarquizado: selo institucional no topo, headline no meio, bullets de bônus, CTA embaixo
- Selo do curso/instituição (logo pequeno + MEC) como prova institucional
- Elementos de prova: "+500 alunos", "12 meses", "certificado"

**Tom:**
- Autoridade institucional
- Equilíbrio entre professor/especialista e instituição chancela
- "Venha aprender com quem faz"
- Sem gritaria — elegante, seguro

**Pra que serve:**
- Anúncio pago de curso, consultoria, mentoria
- Qualquer produto que dependa de prova institucional ou de autoridade
- Pós-venda: "estamos juntos há X tempo" institucional
- Impulso Digital vendendo pacote de "curso/mentoria"

**Quando NÃO usar:**
- Produto massivo B2C sem figura de autoridade
- Quando não tem foto boa do especialista
- Oferta relâmpago / urgência extrema (o tom é calmo, não bate com urgência)

**Gatilhos de ativação:**
- "curso / pós / mentoria / especialização"
- "anúncio pago com foto do especialista"
- "autoridade institucional + pessoal"
- "MEC / certificação / prova formal"

**Insight meta:** é o "ad de professor renomado" clássico — funciona porque mistura cara + selo. A cara vende o método ("eu quero aprender com ESSE cara"), o selo vende a chancela ("é oficial, vale diploma"). Impulso Digital pode replicar colocando Eduardo + logo de parceiros/certificações reais.

---

## Estilo 14 — Luxury Motivational Chrome 3D

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202846.png` ("COM DEUS O IMPOSSÍVEL VIRA DETALHE" — Lambo + mansão), `202851.png` ("POUCOS ENTENDEM, POUCOS CHEGAM" — Ferrari + casa grande), `202836.png` (astronauta guerreiro + tipografia gigante, @brunobastos.dg).

**Paleta:**
- Fundo: foto de carro de luxo (Ferrari vermelha, Lambo amarelo/branco) + mansão atrás + céu dramático
- Tipografia: cromada `#C0C4C8` com reflexos metálicos OU branca `#FFFFFF` pura com outline preto
- Acento: dourado em detalhes (relógio, selo, linha fina)
- Zero paleta minimalista — é saturação controlada, contraste alto

**Tipografia:**
- Frase motivacional em sans display ultra condensed OU serif condensed, 3D extrudada cromada
- Palavras colocadas em camadas: algumas atrás do carro, outras na frente (composição em profundidade)
- Quebras de linha dramáticas ("COM DEUS / O IMPOSSÍVEL / VIRA DETALHE")
- Tamanho gigante — a frase toma 60-70% do slide

**Composição:**
- Formato 1:1 ou 4:5
- Foto de luxo hero (carro + casa + céu), geralmente renderização meio fake-lifestyle
- Texto cromado sobreposto em diferentes camadas de profundidade
- Zero CTA — é aspiracional puro
- Assinatura (@conta) no canto, pequena

**Tom:**
- Hustle/mentalidade agressiva
- Audiência: homens 18-35 em fase "vou vencer na vida"
- Cristianismo + empreendedorismo + luxo — mix brasileiro clássico
- Tom de outdoor gospel-empreendedor

**Pra que serve:**
- Conteúdo de audiência hustle/discípulo empreendedor
- Nichos: coach de high ticket, infoproduto de enriquecimento, fé + dinheiro
- Marcas que querem associar "quem compra aqui chega lá"

**Quando NÃO usar:**
- Marca sofisticada de verdade (Ferrari real não posta Ferrari — quem posta é quem quer parecer)
- B2B sério
- Audiência feminina premium
- Qualquer coisa que precise de credibilidade técnica/institucional
- **UrbanFeet, MPN-on, AgendaPRO, Impulso Digital nas posturas atuais** — quebra o tom de seriedade

**Gatilhos de ativação:**
- "conteúdo de mentalidade / hustle"
- "audiência discípulo / empreendedor iniciante"
- "frase de impacto com carro de luxo"

**Insight meta:** saber **reconhecer** esse estilo é mais importante que **usar**. É estilo-armadilha: parece que vende sonho, mas dilui marca de verdade. Catalogado aqui como referência de "o que NÃO fazer pros meus negócios atuais". Única aplicação aceitável: paródia consciente ou nicho explicitamente hustle.

---

## Estilo 15 — Blueprint Iceberg Technical Infographic

**Referências:** `C:/Users/DELL/Pictures/Screenshots/Captura de tela 2026-04-16 202859.png` — "O que as pessoas veem da sua marca / O que realmente sustenta ela" em estilo caderno/blueprint com iceberg.

**Paleta:**
- Fundo: papel craft bege `#E8DCC4` ou azul blueprint `#0D2B4B` com grid técnico
- Traços: preto caneta `#111111` ou branco linha (se fundo blueprint)
- Acento: vermelho anotação `#D63A2C` pra marcar o ponto-chave
- Tom "caderno de arquiteto / diário de bordo"

**Tipografia:**
- Título em serif ou sans bold, como manuscrito
- Labels das áreas em sans regular, pequenas, com setas apontando
- Mistura: algumas partes datilografadas (sans mono), outras manuscritas (hand-drawn)
- Numeração dos pontos (01, 02, 03) em círculos ou quadrados desenhados à mão

**Composição:**
- Formato 4:5
- Diagrama central: iceberg, pirâmide, funil, engrenagem — um elemento visual metafórico
- Linha d'água (no caso do iceberg) dividindo "visível / invisível"
- Labels espalhados ao redor com setas diagonais apontando pra cada parte
- Canto: "nota de margem" como se fosse caderno real (rabisco, anotação)

**Tom:**
- Educativo-analítico, estilo estudo de caso
- "Deixa eu te explicar como isso funciona"
- Desmonta conceitos complexos visualmente
- Vibe Duarte / Gestalt / Nassim Taleb ilustrado

**Pra que serve:**
- Explicar conceito abstrato (marca, estratégia, posicionamento, funil)
- Conteúdo de autoridade técnica que precisa ensinar antes de vender
- Impulso Digital: "O iceberg de uma LP que converte" / "O que o cliente vê vs o que trabalha no bastidor"
- AgendaPRO: "O que o barbeiro vê vs o que o sistema faz por ele"

**Quando NÃO usar:**
- Conteúdo de emoção/storytelling (é analítico demais)
- Venda direta
- Audiência que não tem paciência pra ler diagrama (TikTok-ish)
- Quando você não tem o conceito bem destrinchado (vai sair confuso)

**Gatilhos de ativação:**
- "explicar conceito / desmontar ideia"
- "o que se vê vs o que está por trás"
- "metáfora visual (iceberg, pirâmide, funil)"
- "educativo técnico de autoridade"

**Insight meta:** o iceberg é o diagrama mais poderoso do marketing B2B brasileiro — funciona porque ativa curiosidade ("o que tem embaixo?") e entrega autoridade ("eu sei o que tem embaixo"). Template mental replicável: escolha um conceito, identifique o visível e o invisível, desenhe metáfora, legende cada parte. Serve MUITO pra Impulso Digital vender "não é só LP bonita, é estratégia" — a LP é a ponta do iceberg.

---

# Como escolher o estilo antes de gerar

Antes de montar um carrossel, responder:

1. **Negócio/marca:** qual identidade visual já existe? (verde neon, premium, tech, popular)
2. **Formato:** feed (4:5) ou reel/story (9:16)?
3. **Intenção:** manifesto, educativo, lançamento, reação?
4. **Tem foto de pessoa recortada?** (habilita estilo 02)
5. **Tem muito texto por slide?** (habilita estilo 03)

Matriz rápida:

| Marca / Intenção          | Estilo sugerido                |
|---------------------------|--------------------------------|
| MPN-on / Impulso (padrão)       | 01 — Verde Neon                  |
| Lançamento com rosto            | 02 — Editorial Magazine          |
| Drop/aviso tech (reel)          | 03 — Card Roxo Cinematográfico   |
| Premium feminino / alto ticket  | 04 — Editorial Serif Cream       |
| Comparativo viral massivo       | 05 — Comparativo Didático        |
| Anúncio B2B nicho regulado      | 06 — Ad B2B Nicho Especializado  |
| Série educativa de design       | 07 — Color Combo Minimal Split   |
| Case/brand book de identidade   | 08 — Brand Guidelines Manual     |
| Aula técnica densa (8+ slides)  | 09 — Dark Educational Teach      |
| Lançamento SaaS / UI hero       | 10 — SaaS Product Demo Minimalist|
| Flex criativo / palavra do dia  | 11 — Inspiração Diária Photomanip|
| Análise de referências (top 10) | 12 — Movie Poster Analysis       |
| Anúncio de curso/pós com rosto  | 13 — Paid Educational Ad         |
| Mentalidade hustle (referência) | 14 — Luxury Motivational Chrome  |
| Explicar conceito abstrato      | 15 — Blueprint Iceberg           |
| GB Nutrition                    | (em definição — absorvendo)      |

