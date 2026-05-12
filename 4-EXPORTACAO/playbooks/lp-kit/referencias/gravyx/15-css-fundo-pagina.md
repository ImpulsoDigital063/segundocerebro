# 15 — CSS: Fundo da página (gradiente, scanlines, sparks, grid, vídeo)

## CSS completo

### Paleta + variáveis raiz

```css
:root {
  --color-bg: #000000;
  --color-surface: #05070A;
  --color-surface-2: #0A0E16;
  --color-surface-3: #161C2C;
  --color-border: rgba(255,255,255,0.08);
  --color-text: #D3E3FF;
  --color-text-muted: #8AA3C6;
  --color-text-dark: #556B8A;
  --color-accent: #00A1FF;
  --color-accent-hover: #D3E3FF;
  --color-accent-dark: #0040FF;
  --color-accent-gradient: linear-gradient(135deg,#0040FF 0%,#00A1FF 47%,#D3E3FF 100%);
  --color-border-warm: rgba(0,161,255,0.25);
  --color-success: #28C840;
  --font: 'Inter', -apple-system, sans-serif;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font);
}
```

### Scanlines (em toda a página)

```css
body::before {
  content:''; position: fixed; inset: 0; pointer-events: none; z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px,
    transparent 1px, transparent 2px
  );
}
```

### Grid radial no hero

```css
.hero-grid {
  position: absolute; inset: 0; z-index: 1; opacity: 0.05;
  background-image:
    linear-gradient(var(--color-text) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-text) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  pointer-events: none;
}
```

### Vídeo de fundo do hero

```css
#bg-video {
  position: absolute; top: 50%; left: 50%;
  width: 100%; height: 100%; object-fit: cover;
  transform: translate(-50%, -50%);
  opacity: 0.55;
}
```

### Gradient fade do hero pro preto (fusão suave)

```css
.hero::after {
  content:''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 300px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  pointer-events: none; z-index: 2;
}
```

### Seção FAQ com imagem de fundo

```css
.section-faq-support {
  background-image: url('/ASSETS/BACKGROUND GRADIENT.webp');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-top: 1px solid var(--color-border);
}
```

### Sparks subindo (linhas verticais luminosas)

```css
@keyframes sparkRise {
  0%   { transform: translateY(0);       opacity: 0; }
  10%  {                                  opacity: 1; }
  90%  {                                  opacity: 1; }
  100% { transform: translateY(-140vh);  opacity: 0; }
}
.animate-spark-rise {
  animation-name: sparkRise;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
```

### Section creations — gradiente suave

```css
.section-creations {
  background: linear-gradient(to bottom, transparent, var(--color-surface), transparent);
}
```

## Observações rápidas

### Paleta — leitura estratégica
| Token | Valor | Função |
|---|---|---|
| `--color-bg` | `#000000` | Preto absoluto — fundo base |
| `--color-surface` | `#05070A` | Quase preto, levemente azulado |
| `--color-surface-2` | `#0A0E16` | Superfície card escuro |
| `--color-surface-3` | `#161C2C` | Superfície card elevado |
| `--color-text` | `#D3E3FF` | **Texto principal: azul claro quase branco** (não branco puro!) |
| `--color-text-muted` | `#8AA3C6` | Texto secundário |
| `--color-text-dark` | `#556B8A` | Hint / low emphasis |
| `--color-accent` | `#00A1FF` | Azul elétrico (CTA, destaque) |
| `--color-accent-hover` | `#D3E3FF` | Hover = mesma cor do texto principal |
| `--color-accent-dark` | `#0040FF` | Azul profundo (parte do gradient) |
| `--color-accent-gradient` | `linear-gradient 135deg 3-stop` | **Assinatura visual** |

**Sacada:** texto principal NÃO é `#FFFFFF`. É azul claro `#D3E3FF` — integra com a paleta sem "brilhar" no meio da página. Detalhe que separa SaaS amador de profissional.

### Gradient oficial (3-stop 135deg)
- `#0040FF` (0%) → `#00A1FF` (47%) → `#D3E3FF` (100%)
- Uso: texto destacado no H1, botões neon, badges populares, accents
- **47% e não 50%** — ponto médio ajustado manualmente pra dar peso maior ao azul claro final
- Replicável em qualquer LP dark (substituir as 3 cores pela paleta do negócio)

### Scanlines globais (body::before)
- Linhas horizontais 1px a cada 2px em preto 3% opacity
- **Efeito CRT sutil** — dá textura tech sem distrair
- **z-index: 9999** + `pointer-events: none` — fica em cima de tudo sem bloquear cliques
- **Peso:** 1 linha CSS, zero JS, zero imagem — porta direto

### Grid radial no hero
- 2 linear-gradients cruzados (50x50px) formam malha
- `mask-image: radial-gradient(black, transparent 80%)` → **a malha só aparece no centro e some pras bordas**
- Opacity 5% — extremamente sutil, sensação "tech" sem poluição

### Vídeo de fundo em opacity 0.55
- Não é vídeo em 100% — é 55% opacity sobre fundo preto
- **Resulta:** vídeo não compete com texto, vira ambiente
- `object-fit: cover` + `translate(-50%, -50%)` → centralização perfeita responsiva

### Gradient fade do hero
- 300px de `transparent → #000` no fundo do hero
- **Fusão suave** entre hero e próxima seção — nenhum corte seco visual
- **Técnica replicável em TODA transição de seção** com imagem/vídeo

### Keyframe sparks
- 140vh de viagem (sobe bem além da tela pra garantir seamless)
- Opacity 0 → 1 nos 10% primeiros + fica em 1 até 90% + fade out nos últimos 10%
- Linear easing — constante, como fagulha real subindo
- Combinado com `mix-blend-mode: screen` do container (identificado bloco 01) = **efeito luminoso sobreposto**

## Adaptação pra LP Impulso Digital

### Paleta Impulso Digital (proposta)

Decisão crítica: **usar paleta própria ID ou copiar paleta Gravyx?**

**Recomendação:** **adaptar**, não copiar. Manter DNA Impulso (azul corporativo + accent próprio), portar a **estrutura** da paleta Gravyx (6 tokens de cor + gradient 3-stop + texto levemente tingido).

```css
:root {
  /* Backgrounds (dark mode) */
  --color-bg: #0A0F1A;              /* azul-navy muito escuro, não preto puro */
  --color-surface: #0F1624;
  --color-surface-2: #131C2E;
  --color-surface-3: #1A2540;
  --color-border: rgba(255,255,255,0.08);

  /* Texto (azul muito claro, estilo Gravyx) */
  --color-text: #E0ECFF;             /* texto principal ligeiramente azulado */
  --color-text-muted: #8AA3C6;
  --color-text-dark: #556B8A;

  /* Accent Impulso (azul + cyan) */
  --color-accent: #0EA5E9;           /* sky-500 Tailwind — azul Impulso */
  --color-accent-hover: #38BDF8;
  --color-accent-dark: #0284C7;
  --color-accent-cyan: #22D3EE;      /* cyan de suporte */

  /* Gradient assinatura Impulso (3-stop) */
  --color-accent-gradient: linear-gradient(135deg,
    #0284C7 0%,
    #0EA5E9 47%,
    #22D3EE 100%
  );

  --color-success: #22C55E;          /* verde esmeralda, alinhar com StarField existente */
  --font: 'Inter', -apple-system, sans-serif;
}
```

### Scanlines — portar direto
- Funciona em qualquer LP dark — 1 linha de CSS, zero custo
- Incluir em `globals.css` do Next.js

### Grid radial do hero — portar direto
- Efeito sutil, funciona bem com a paleta ID
- Ajustar opacity pra 0.05-0.08 conforme fica

### Vídeo de fundo
- **Se Eduardo gerar vídeo no Claude Design:** portar a regra CSS direto
- **Se não gerar vídeo:** manter só o grid radial + sparks + fundo aurora do memory `feedback_lp_fundo_aurora_animado.md`

### Sparks — portar direto
- Mudar cores das linhas de `#00A1FF` (Gravyx) pra `#0EA5E9` (ID) no HTML do bloco 01
- Keyframes ficam iguais

### Gradient fade entre seções
- **Técnica de ouro** — aplicar em TODA transição de seção com imagem/vídeo
- Reduz sensação de "bloco empilhado" → sensação de "página fluida"

### Fundo aurora animado existente
- **Já temos memory `feedback_lp_fundo_aurora_animado.md`** — padrão aprovado
- **Combinar os dois:** aurora gradient animado como base + scanlines sobrepostas + grid radial no hero + sparks
- Resultado: camadas visuais ricas, zero peso extra (tudo CSS)

## Ordem de aplicação no Next.js

1. **`globals.css`:** variáveis `:root` + scanlines globais + reset + font
2. **`Hero.js`:** adicionar div `.hero-grid` absoluto + `<video>` se tiver + `::after` fade
3. **Componente `<Sparks />`:** 5 divs com classes/inline style (portar HTML do bloco 01 pra JSX)
4. **Transições de seção:** aplicar `linear-gradient` fade em seções específicas

## Assets

1. **Vídeo aurora loop** (opcional) — Claude Design
2. **`/ASSETS/BACKGROUND GRADIENT.webp`** se quiser fundo específico pro FAQ — **alternativa:** gerar como CSS pure (radial-gradient conic), zero asset
3. Zero imagem obrigatória — toda paleta CSS

## Cuidado

- **Texto em `#D3E3FF` funciona bem em fundo preto puro.** No ID (fundo `#0A0F1A` azul-navy), testar se contraste ainda passa WCAG AA. Se não passar, ajustar para `#E8F0FF` ou `#F1F5FF`.
- **Scanlines em 3% opacity é o limite.** Mais que isso vira distração. Menos, some.
- **Sparks podem irritar em mobile** — considerar `@media (max-width: 640px) { .animate-spark-rise { display: none; } }`

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
