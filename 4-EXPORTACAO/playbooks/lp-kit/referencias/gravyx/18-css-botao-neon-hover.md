# 18 — CSS: Smooth scroll + Botão neon com borda animada (parte 1 — truncado)

## Smooth scroll

```css
html {
  scroll-behavior: smooth;
}
```

- **Zero biblioteca** (sem Lenis, sem Locomotive)
- Native do browser em todos os modernos
- Eduardo colar direto no `globals.css`

## Botão neon (hero, pricing, footer — tudo usa `.btn-neon-wrap`)

### Keyframes

```css
@keyframes borderTurn {
  0%   { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

@keyframes borderTurnWithTranslate {
  0%   { transform: translate(-50%, -50%) rotate(0); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

### Wrapper principal

```css
.btn-neon-wrap {
  isolation: isolate;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: fit-content;
  --animation-speed: 1.5s;
  box-shadow: 0 0 15px rgba(0,161,255,0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: perspective(600px) rotateX(0deg);
  text-decoration: none;
  display: inline-block;
}

.btn-neon-wrap:hover {
  box-shadow: 0 0 30px rgba(0,161,255,0.6), 0 0 10px rgba(0,64,255,0.4);
  transform: perspective(600px) scale(1.03);
  border-radius: 6px;
}
```

### Camadas internas (brilho girando)

```css
.btn-neon-wrap .mask-layer-1,
.btn-neon-wrap .animated-border-v3 {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1;
}

.btn-neon-wrap .mask-layer-1:before,
.btn-neon-wrap .animated-border-v3:before {
  content:'';
  float: left;
  padding-top: 100%;
}

.btn-neon-wrap .mask-layer-1:after,
.btn-neon-wrap .animated-border-v3:after {
  clear: both;
  content:'';
  display: block;
}

/* [TRUNCADO — continua .btn-neon-wr...] */
```

## Observações rápidas (parciais — parte 2 vem no próximo bloco)

### Smooth scroll nativo
- **Resolve tudo** — zero Lenis, zero Locomotive, zero bundle
- Adicionar ao `globals.css` do Next.js LP ID em 1 linha
- Única limitação: não tem easing customizável. Se um dia quiser easing de luxo, aí sim Lenis.

### Botão neon — anatomia

#### Container externo (`.btn-neon-wrap`)
- **`isolation: isolate`** → cria novo stacking context (necessário pra z-index interno não vazar)
- **`overflow: hidden`** → recorta a borda girando (se não, vaza pra fora)
- **`border-radius: 4px`** → canto arredondado leve
- **`--animation-speed: 1.5s`** → variável CSS local (reusada no `animation-duration` das camadas internas)
- **`box-shadow` com azul elétrico em 20% opacity** → glow ambiente constante (sem hover)
- **`perspective(600px)`** → abre espaço 3D pro `rotateX` caso queira inclinar no hover

#### Hover
- `box-shadow` dobra (30px range + azul + blur) — **glow dramático**
- `scale(1.03)` com perspective — **sensação de "pular" um pouco pra frente**
- `border-radius: 6px` — aumenta sutilmente (micro-detalhe que dá vida)
- Tudo em `0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)` — **easeOutQuad** (suave, natural)

#### Camadas internas (`.mask-layer-1` e `.animated-border-v3`)
- 2 pseudo-elementos `:before` e `:after` pra truque de **aspect ratio quadrado**
  - `float: left` + `padding-top: 100%` → força altura = largura (quadrado)
  - `clear: both` no `:after` pra garantir layout
- Posicionadas no centro do botão (`left: 50%; top: 50%; translate(-50%, -50%)`)
- **Função:** conter o gradient girando que forma a borda neon animada
- **Girando:** provavelmente `animation: borderTurnWithTranslate var(--animation-speed) linear infinite`
- **Recorte:** `overflow: hidden` do wrapper faz só a borda aparecer (o centro é tapado pelo `mask-layer-2` + `btn-neon-inner`)

### Técnica: "conic-gradient girando + mask"

O padrão clássico é:
1. Gradient conic em um pseudo-elemento quadrado gigante (dentro do botão)
2. `animation: rotate()` nele girando infinito
3. `overflow: hidden` no wrapper esconde tudo menos o que passa pela borda
4. Camada interna opaca (`mask-layer-2`) esconde o centro, deixa só a borda visível
5. Efeito: borda brilhante girando em loop, centro limpo

**Ainda falta o CSS desses pseudos** — vem no próximo bloco (truncou em `btn-neon-wr`).

### Easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Nome:** easeOutQuad
- Suave no início, decelera pro final
- Padrão de interface "macio, natural"
- Diferente do `cubic-bezier(0.22, 1, 0.36, 1)` do reveal (que tem saída rápida)
- **Uso coerente:** easings diferentes pra contextos diferentes (hover ≠ reveal)

## Adaptação pra LP Impulso Digital

### Decisão: portar o botão neon ou versão simplificada?

**Opção A — Portar direto**
- Efeito visual ALTO impacto
- ~100 linhas de CSS + 0 JS
- Custo: complexidade maior pra manter

**Opção B — Versão simplificada (só glow + scale)**
- Só a parte do hover (sem borda girando)
- ~20 linhas de CSS
- Visual mais limpo, menos "gamer"

**Recomendação:** **Opção A no CTA principal do hero + pricing** (onde precisa gritar "clica aqui"), **Opção B nos CTAs secundários** (FAQ, support, footer).

Isso mantém hierarquia visual: botão principal se destaca dos secundários.

### Adaptar paleta

Trocar `rgba(0,161,255, ...)` e `rgba(0,64,255, ...)` pelas cores Impulso:
- `rgba(14,165,233, ...)` → `#0EA5E9` (sky-500, azul Impulso)
- `rgba(34,211,238, ...)` → `#22D3EE` (cyan-400, accent secundário)

```css
/* Box-shadow do Impulso */
.btn-neon-wrap {
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
}
.btn-neon-wrap:hover {
  box-shadow:
    0 0 30px rgba(14, 165, 233, 0.6),
    0 0 10px rgba(34, 211, 238, 0.4);
}
```

### Aplicar em JSX (Next.js)

```jsx
export function BtnNeon({ children, href, onClick }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className="btn-neon-wrap">
      <span className="mask-layer-1">
        <span className="animated-border-v3"></span>
        <span className="blur-layer"></span>
      </span>
      <span className="mask-layer-2"></span>
      <span className="btn-neon-inner">
        <span className="btn-neon-text">{children}</span>
        <span className="btn-neon-arrow">↗</span>
      </span>
    </Tag>
  );
}
```

Uso:
```jsx
<BtnNeon href="#pacotes">QUERO MEU PROJETO ↗</BtnNeon>
```

## Próximo bloco

O CSS truncou em `.btn-neon-wr...`. Preciso da continuação pra ter:
- `.btn-neon-wrap .animated-border-v3` (o gradient conic girando)
- `.btn-neon-wrap .blur-layer` (blur atrás da borda)
- `.btn-neon-wrap .mask-layer-2` (o centro opaco)
- `.btn-neon-wrap .btn-neon-inner` (texto + arrow)
- `@media (hover: hover)` provavelmente pra desabilitar em touch

**Arquivo salvo. Manda o próximo bloco (continuação do botão neon).**
