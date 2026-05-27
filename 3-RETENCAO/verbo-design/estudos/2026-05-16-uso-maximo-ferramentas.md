# ESTUDO · Uso Máximo das Ferramentas Verbo Design

**Pesquisado em:** 16/05/2026
**Objetivo:** dominar as 7 ferramentas atuais antes de adicionar novas

---

## 🎨 1. REPLICATE FLUX · Prompt Engineering Avançado

### Princípio cravado #1 · Linguagem natural, NÃO keywords

❌ **Errado:** `woman, red dress, beach, sunset, bokeh`
✅ **Certo:** "A woman in a red silk dress standing barefoot on a sandy beach at sunset, warm golden light behind her, shallow depth of field with soft bokeh across the water."

### Princípio cravado #2 · Estrutura hierárquica · primeiro = mais peso
**Flux pesa tokens iniciais mais que finais.** Colocar PRIMEIRO:
1. Sujeito (o quê)
2. Cenário (onde)
3. Estilo (como)
4. Iluminação
5. Câmera/lente
6. Detalhes secundários

### Framework cravado · 6 partes
```
[Subject] + [Scene/Setting] + [Style] + [Lighting] + [Camera & Lens] + [Detail Keywords]
```

**Exemplo aplicado · GB Nutrition (loja):**
```
[Subject] Modern dark supplement store interior
[Scene] with cyan neon lighting, premium supplement bottles on shelves
[Style] fitness gym aesthetic, photorealistic editorial product photography
[Lighting] blue and cyan light reflections
[Camera] cinematic depth of field
[Detail] no text, no logos
```

### Princípio cravado #3 · Detalhes técnicos de câmera

**Pra foto editorial:**
- "shot on Sony A7R V" / "shot on Hasselblad" / "shot on iPhone 16"
- Abertura: "f/1.8" / "f/2.8" (mais aberto = mais bokeh)
- Lente: "85mm portrait" / "35mm wide" / "100mm macro"
- Tipo de plano: "close-up", "medium shot", "wide angle", "aerial"

### Princípio cravado #4 · Composição espacial explícita

Flux entende **camadas e profundidade** quando você descreve:
- "in the foreground" / "in the middle ground" / "in the background"
- "from above" / "low angle" / "Dutch angle"
- "centered" / "rule of thirds composition"

### Pra evitar problemas comuns

| Problema | Solução |
|---|---|
| Hands deformed | Adicionar negative prompt: "hands deformed, extra fingers" |
| Texto ilegível | "no text, no logos, no labels readable" |
| Pessoa estranha (uncanny) | Não tentar pessoa fotorrealista identificável · usar ambiente/objeto |
| Resultado plano | Adicionar "cinematic depth of field" + "shallow focus" |
| Cor errada | Especificar palette: "cool blue tones" / "warm golden hour" |

### Aplicação cravada · próximas gerações

**Pra produto premium (Hórus level):**
```
Premium fitness supplement bottle, dark matte plastic with bold typography,
isolated on dark slate background with cyan rim lighting from left side,
dramatic studio product photography, shot on Sony A7R V at f/4 macro lens,
sharp focus on label, ultra detailed texture, photorealistic, cinematic,
no readable text, no specific brand logos
```

**Pra cenário fitness ambiente:**
```
Modern premium gym interior at golden hour, weight rack with chrome dumbbells,
cyan blue LED accent lighting, dark walls, polished concrete floor,
photorealistic editorial fitness photography, shot on Canon R5 at 24mm f/2.8,
shallow depth of field with bokeh background, no people, no text overlays
```

---

## 🎨 2. CANVA MAGIC STUDIO · Capabilities cravadas

### Features de elite que ainda não exploramos

**Magic Design** · gera design completo a partir de prompt OU imagem
- Em 2026 tem **contextual awareness** (sabe brand kit do cliente)
- Pode gerar carrossel inteiro a partir de um briefing

**Magic Write** · suporta **brand voice training**
- Carregar brand voice JSON Aura/GB e gerar copy via Canva
- (Mas nossa stack `/copy-gen` Anthropic já faz isso · Canva é alternativa)

**Dream Lab** · imagens IA dentro do Canva
- 500 gerações/mês no Pro
- Comercialmente licenciadas
- Alternativa ao Replicate quando não precisar de controle pixel

**Magic Edit / Magic Eraser / Magic Grab / Magic Expand**
- Magic Eraser = alternativa ao remove.bg (geral, não só fundo)
- Magic Expand = estende foto além do crop original (criar mais espaço pra texto)
- Magic Grab = isolar elemento e mover dentro da foto

**Magic Morph** · transforma texto/shape via prompt
- "make this text look like fire"
- "turn this circle into a 3D sphere"

### Plano cravado · 500 créditos AI/mês Pro

| Uso | Custo aprox |
|---|---|
| 1 design Magic Design | ~5 créditos |
| 1 imagem Dream Lab | ~10 créditos |
| 1 Magic Eraser | ~3 créditos |
| 1 Magic Write | ~1 crédito |
| 1 Magic Expand | ~5 créditos |

→ 500 créditos = ~50 designs/mês OU mix

### Quando usar Canva (vs nossa stack)

**Usar Canva quando:**
- Cliente vai editar depois (não dá pra editar Next/og)
- Templates testados Canva = ponto de partida rápido
- Brand kit cravado no Canva
- Renato/Olímpio precisam acessar/editar sem técnico

**Usar nossa stack quando:**
- Pixel-perfect cravado
- Reuso entre clientes via código
- Iteração em segundos (deploy 30s vs Canva manual)
- Composição multi-camada complexa

---

## 🎨 3. SATORI (Next/og) · Limites + Workarounds

### ❌ O que NÃO suporta

| Feature | Status | Workaround |
|---|---|---|
| `display: grid` | ❌ não suporta | Usar `flex` + `flexDirection` + `flexWrap` |
| `calc()` | ❌ não suporta | Usar pixel/percent literal |
| CSS variables `var(--x)` | ❌ não suporta | Constantes JS no topo do arquivo |
| `filter: blur` | ❌ não suporta | Pre-processar com sharp (gerar PNG blur) |
| `mix-blend-mode` | ❌ não suporta | Sobrepor com opacity calibrada |
| `transform: rotate` em texto | ⚠️ instável | Usar com cuidado, testar |
| Animação | ❌ não suporta | Imagem estática (animação só via FFmpeg) |
| Imagem WebP | ❌ crasha | Converter pra PNG/JPEG com sharp |
| `display: inline-block` | ❌ não funciona | `display: flex` com `alignSelf: flex-start` |

### Limites cravados
- **Bundle máximo: 500KB** (JSX + CSS + fonts + imagens + assets)
- **Fontes:** carregar via fetch + arraybuffer · não funciona system-ui em todo OS

### ✅ O que SUPORTA bem

- Flexbox completo
- Box-shadow (múltipla)
- border-radius
- Linear gradient + radial gradient
- transform (rotate, scale, translate) em divs
- Opacity
- Backdrop-filter blur (com cuidado)
- SVG inline simples
- PNG/JPEG remoto via URL absoluta

### Princípios cravados pra renderizar pesado

1. **Todo container precisa `display: flex` explícito** (default Satori ≠ browser)
2. **Span no meio do texto colorido = BUG** (vimos isso · separar em divs)
3. **Imagens externas via URL absoluta** (carregam edge runtime)
4. **Fontes custom via raw GitHub URL** (TTF preferível a WOFF2)
5. **Width fixo em pixels > percent quando possível** (mais previsível)

### Quando migrar pra Puppeteer (HTML completo)

**Casos que justificam:**
- Precisa `filter: blur` real (não pre-processado)
- Animação capturada em frame
- Glassmorphism com blur dinâmico
- CSS Grid complexo
- Webfonts via @import direto

**Custo da migração:**
- Mais lento (5-10s vs sub-segundo)
- Precisa dev server rodando OU build estático
- Mais código

**Veredito:** ficar em Satori enquanto possível. Migrar caso a caso quando bater limite.

---

## 🔧 4. SHARP · Operações cravadas que uso

### Casos validados na nossa stack
- `.resize(w, h, {fit: 'contain', background})` — redimensionar mantendo proporção
- `.blur(N)` — desfoque gaussiano · gera PNG estático (workaround Satori)
- `.modulate({brightness, saturation, hue, lightness})` — ajuste tonal
- `.tint({r,g,b})` — colorize uniforme
- `.extract({left, top, width, height})` — crop preciso (usei pra Gabriel sem box)
- `.composite([{input, top, left}])` — sobreposição de imagens

### Casos NÃO explorados ainda
- `.threshold(N)` — binarizar (preto/branco)
- `.negate()` — inverter cores
- `.linear(a, b)` — controle linear de cor
- `.normalize()` — esticar range tonal
- `.recomb([[matrix]])` — manipulação canal RGB cravada
- `.convolve({kernel})` — efeitos custom (sharpen, edge detect)
- `.gamma(value)` — gamma correction

**Aplicação futura:**
- `.normalize()` + `.linear()` em fotos do cliente pra padronizar exposição
- `.threshold()` pra criar versões "stencil" de logos
- `.convolve` pra sharpen em fotos de produto

---

## 🤖 5. ANTHROPIC API · Otimizações cravadas

### Já uso bem
- Sonnet 4.6 (melhor relação custo/qualidade)
- System prompt + user prompt separados
- JSON estruturado no output

### Não estou usando ainda · cravar próxima vez

**Prompt Caching (Anthropic feature)**
- Cache do system prompt entre calls
- Reduz custo em 90% nas chamadas subsequentes
- Útil quando brand voice (sistema longo) repete entre gerações
- **Aplicar:** anotar `cache_control: { type: "ephemeral" }` no system prompt

**Structured Output via tools**
- Garante JSON válido 100%
- Schema obrigatório
- **Aplicar:** definir tool com schema do `CopyOutput` em vez de parsing manual

**Multi-turn pra refinar**
- Em vez de gerar tudo de 1×, gerar variações e refinar a melhor
- "Use a variação curta como base · agora escreva versão mais punchy"

---

## 🔪 6. REMOVE.BG · Tips avançadas

### Param úteis NÃO explorados
- `size` (preview / regular / medium / hd / 4k) — qualidade
- `format` (auto / png / jpg / zip) — output
- `roi` (region of interest) — focar área específica
- `crop` (1) — cropar pro contorno
- `crop_margin` — margem após crop
- `add_shadow` (true) — adicionar sombra natural ao output
- `bg_color` (hex) — substituir bg por cor sólida
- `channels` (rgba / alpha) — só retornar alpha mask

### Aplicação futura
- `add_shadow=true` → sombra grátis sem precisar adicionar manualmente
- `crop=1, crop_margin=10` → cutout cropado já pronto

---

## 🎯 7. AUDITORIA NOSSA STACK · O que melhorar

### Curto prazo
1. **Cravar prompt caching no Anthropic** (corte de 90% no custo de Copy Gen)
2. **Testar Canva Magic Design** com Brand Kit Aura · ver se vale comparar
3. **Migrar prompts Flux pra estrutura 6-part cravada** (subject + scene + style + light + camera + detail)
4. **Documentar limites Satori** em comentário nos route.tsx

### Médio prazo
5. **Estudar `recomb` do sharp** pra pós-processamento avançado (color grading consistente)
6. **Testar Canva Dream Lab vs Flux** · qual entrega melhor pra nicho fitness
7. **Construir biblioteca de prompts Flux cravados por categoria** (produtos · ambientes · pessoas fictícias · texturas)

### Longo prazo
8. **Migrar slides que dependem de blur real pra Puppeteer** (filter: blur nativo)
9. **Avaliar Takumi** (alternativa Satori · 2-10x mais rápido · mais CSS suportado)
10. **Pipeline FFmpeg pra mockup de Reel** (capa + frames + áudio)

---

## 💡 Princípio cravado · "Domínio antes de novidade"

Antes de adicionar nova ferramenta na stack, perguntar:
1. **Estou usando 100% da capacidade da ferramenta atual?**
2. **Conheço os limites da ferramenta atual?**
3. **A nova ferramenta resolve gap REAL ou só novidade?**

**Aplicado:**
- Anthropic API: uso ~60% das features (falta caching + structured output)
- Replicate Flux: uso ~70% (faltam prompts estruturados 6-part)
- Canva MCP: uso ~30% (falta explorar Magic Design, Dream Lab, Magic Morph)
- Sharp: uso ~50% (faltam recomb, threshold, convolve)
- Satori: uso ~80% (limites bem mapeados)
- remove.bg: uso ~40% (falta add_shadow, crop params)
- Puppeteer: uso ~30% (só screenshot direto · falta animation capture)

**Próxima sessão prioritária:** dominar features faltantes ANTES de adicionar Buffer/Figma/CapCut.

---

**Ver também:** [[VERBO-DESIGN]] · [[01-STACK-FERRAMENTAS]] · [[2026-05-16-ferramentas-design-2026]]
