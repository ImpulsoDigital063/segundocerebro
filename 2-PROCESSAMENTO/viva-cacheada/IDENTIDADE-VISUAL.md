# Identidade Visual · Viva Cacheada

Dossier técnico baseado em leitura visual completa dos perfis (CIC · 14/05/2026) + logo oficial recebida via WhatsApp.

> **Mood em uma frase:** boutique brasileira de cachos com alma editorial · Veuve Clicquot rebranded pra salão · Vogue cacheada.

---

## 1. Logo oficial

- Símbolo: silhueta de mulher cacheada (afro/cacho largo) com coroa pequena no topo, em creme sobre bordô
- Lettering: `VIVA` serif maiúscula colado a `cacheada` script italic manuscrita (concatena em uma palavra estilizada)
- O contraste **serif-maiúscula + script-italic é o coração da identidade gráfica**
- Asset em alta resolução: capturado pelo CIC do banner do Linktree linktr.ee/vivacacheada
- @vivacacheadaa usa logo gráfica · @letticiahellen3 usa retrato fotográfico

---

## 2. Paleta cravada

### Principal

| Token | Hex | Uso |
|---|---|---|
| `bordo` | `#6B1818` | Cor-âncora da marca · botão primário · seções hero · texto-âncora |
| `bordo-deep` | `#4A0F0F` | Hover · sombras profundas |
| `cream` | `#F0E4D3` | Surface neutra quente · papel · texto sobre bordô |
| `cream-warm` | `#E8DDD0` | Card-bg lifestyle (mais saturado) |
| `gold` | `#B8893A` | Acento celebração · scripts decorativos italic |
| `gold-light` | `#C9A24E` | Hover do acento |
| `ink` | `#2A1A14` | Texto sobre cream |
| `ink-deep` | `#1A0F0A` | Texto-âncora forte |
| `paper` | `#FFFFFF` | Branco puro (90% dos textos em capas de Reel) |

### Acentos pontuais (usar com parcimônia)

| Token | Hex | Uso |
|---|---|---|
| `magenta` | `#E62A8E` | Só em CTA quente / badge raro — exemplo: capa "Tá com medo do quê?" |

### Tom geral

**Quente terra editorial.** Não vibrante, não frio sóbrio. Bordô + creme + dourado é praticamente "Veuve Clicquot pra salão". Paleta unificada entre marca e pessoal — pessoal puxa um pouco mais pro dourado-âmbar com fotos lifestyle, marca ancora no bordô-creme.

---

## 3. Tipografia · 4 famílias com hierarquia

### Família A · Serif italic display (dominante · ~70% das capas)

- Cormorant Garamond ou Playfair Display
- Contraste alto traços grosso/fino, terminais afilados, italic com personalidade caligráfica
- Mistura **regular + italic + bold + bold italic** na mesma frase pra ênfase
- Exemplos: "O processo também merece ser celebrado, não só o resultado.", "Pov: você confiou no processo", "mova-se como se tudo fosse dar certo"
- Aplicar com Google Fonts: weights `400`, `400-italic`, `500`, `600`, `600-italic`, `700-italic`

### Família B · Sans condensada CAIXA ALTA (~20% · vlogs operacionais)

- Bebas Neue ou Oswald
- Peso medium/bold, condensada, 100% caps, alinhamento centralizado
- Exemplos: "VLOG: COMO É UM RETOQUE DE RAIZ COMIGO", "ANTES DE CORTAR UM CABELO"
- Aplicar em títulos de vlog / blog / "saiba antes"

### Família C · Script italic caligráfica (~30% · palavra-âncora dourada)

- Allura ou Great Vibes
- Cursiva ligada, swashes nos descendentes
- **Sempre em dourado/âmbar ou creme**, nunca sozinha — sempre acompanhando A
- Exemplos: "Mechas" dourada, "acidificação" creme, "Normalize" dourado
- Aplicar em palavras-celebração isoladas: "identidade", "processo", "exclusivo", "transformação"

### Família D · Body sans (não aparece no IG mas precisamos pro app)

- **DM Sans** ou Hanken Grotesk (não Inter — "DM dá ar editorial brasileiro contemporâneo em vez de neutro SaaS")
- Weights `400`, `500`, `600`, `700`

---

## 4. Estilo fotográfico

- **Retrato fotográfico em ambiente de salão** (não estúdio editorial)
- Iluminação natural quente · **luzinhas de natal amarelas piscantes** como assinatura visual recorrente do salão
- Filtro warm/amber discreto · pele preservada natural · cabelo realçado em brilho
- Black-and-white deliberado em capas "filosóficas" + texto bordô italic
- Composição: centralizada com espaço negativo médio, texto no banner inferior 1/3

**Subtipos por frequência:**
1. Retrato frontal pós-procedimento (~40%)
2. Vlog operacional Leticia atendendo (~25%)
3. Antes/depois implícito sem split-screen (~15%)
4. Editorial dela mesma posando (~15%)
5. Lifestyle pessoal (só perfil dela · ~5%)

---

## 5. Elementos gráficos recorrentes

- **Brilhos como pó-de-fada** espalhados nas capas Família A (no IG são emoji ✨ — no app vira SVG inline)
- Sublinhado decorativo curva debaixo da palavra-chave (estilo Canva)
- Underline italic em palavras isoladas dentro de frases regulares (ex: *também*, *porque vai*)
- Vocabulário emoji que ela usa nas capas: 💋 🌹 ✨ 💎 👑 ❤️‍🔥 → no app vamos pra SVG inline equivalente
- Sem molduras decorativas, sem ornamentos vetoriais elaborados, sem padrões geométricos
- Cards de capa quadrados (1:1 ou 4:5)

---

## 6. O que ela NÃO é (anti-mood)

- Não é lifestyle-creator caótica (influencer-amadora)
- Não é clínica-especialista (dermatologista científico)
- Não é minimalista-escandinavo (tipo Aesop)
- Não é vibrante-tropical (tipo Granado)

**É:** boutique brasileira de cachos com alma editorial · templating Canva premium executado com consistência rara em SMB.

---

## 7. Aplicação no sistema (modos)

| Modo | Onde aplica | Características |
|---|---|---|
| **Brand** | Loja · produto · cronograma · admin | Bordô-creme-script · hierarquia formal serif · sem dourado dominante |
| **Editorial** | Hero · capa de etapa · banner de comunidade · página da Leticia | Mesma paleta + dourado-âmbar acentuado + fotografia editorial dela + script Allura em palavra-âncora |
| **Lifestyle** | Comunidade · feed · stories vinculadas | Mais dourado-quente · foto lifestyle (golden hour) · vocabulário mais pessoal |

---

## 8. Tokens prontos pro Tailwind 4 (globals.css)

```css
@theme {
  --color-bordo: #6B1818;
  --color-bordo-deep: #4A0F0F;
  --color-bordo-soft: #8A2424;

  --color-cream: #F0E4D3;
  --color-cream-warm: #E8DDD0;
  --color-paper: #FFFFFF;

  --color-ink: #2A1A14;
  --color-ink-deep: #1A0F0A;
  --color-ink-soft: #5A3F35;
  --color-ink-mute: #9B7E70;

  --color-gold: #B8893A;
  --color-gold-light: #C9A24E;
  --color-gold-soft: #D9B570;

  --color-line: #E0D2BC;
  --color-line-soft: #ECDFC9;

  --accent-magenta: #E62A8E;

  --font-display: "Cormorant Garamond", "Playfair Display", Georgia, serif;
  --font-condensed: "Bebas Neue", "Oswald", sans-serif;
  --font-script: "Allura", "Great Vibes", cursive;
  --font-body: "DM Sans", system-ui, sans-serif;
}
```

---

Documento vivo. Quando a Leticia mandar o arquivo SVG/PNG da logo oficial, substituir o `IconLogo` inline. Quando tivermos shooting próprio (não placeholders de gradiente), atualizar a seção de estilo fotográfico com referências internas.
