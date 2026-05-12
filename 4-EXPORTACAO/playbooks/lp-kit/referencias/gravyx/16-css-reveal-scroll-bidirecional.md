# 16 — CSS: Reveal on scroll bidirecional (fade + blur)

> **Essa é a "magia" do site.** Não é parallax, não é slide, é **fade + blur direcional**. Cada elemento com `.sf` fica invisível e borrado até entrar em viewport. Ao sair pelo topo (scroll pra baixo), vai pra `.sf-out-top`. Se sair pelo fundo (scroll pra cima), volta ao estado inicial `.sf`.

## CSS completo

```css
.sf {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(16px);
  transition:
    opacity   1.2s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
    filter    1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, filter;
}

/* Entrando na viewport */
.sf.sf-in {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Saindo pelo topo (usuário rolando pra baixo) */
.sf.sf-out-top {
  opacity: 0;
  transform: translateY(-30px);
  filter: blur(12px);
}
```

## Observações rápidas

### Por que funciona tão bem

1. **3 propriedades animadas em sincronia:** `opacity` + `transform` + `filter(blur)`
2. **Cubic-bezier(0.22, 1, 0.36, 1)** — easing "outExpo" customizado, tem aceleração rápida no início e desacelera suavemente no fim (sensação premium, não "mecânica")
3. **1.2s** — lento o suficiente pra ser percebido como premium, rápido o suficiente pra não irritar
4. **Blur de 16px** — forte, mas o olho não "lê" blur como distração, lê como "foco/desfoco cinematográfico"
5. **`will-change: opacity, transform, filter`** — avisa o browser pra otimizar GPU

### Bidirecionalidade (a parte inteligente)

| Estado | Classe | O que acontece |
|---|---|---|
| Inicial (não viu ainda) | `.sf` | Invisível, deslocado 40px pra baixo, borrado 16px |
| Entrou na viewport | `.sf .sf-in` | Aparece (opacity 1, translateY 0, blur 0) |
| Saiu pelo TOPO (scroll ↓) | `.sf .sf-out-top` | Some deslocando 30px pra cima, blur 12px |
| Saiu pelo fundo (scroll ↑) | `.sf` (volta ao estado inicial) | Some com slide pra baixo + blur |

**Resultado:** a página parece **respirar** enquanto o usuário rola. Tudo que não está em foco está literalmente **desfocado** (blur), como filme cinematográfico.

### Diferença vs. AOS / Framer Motion / GSAP

- **AOS:** só anima entrada, não anima saída (unidirecional)
- **Framer Motion:** funciona, mas precisa bundle ~50KB + React overhead por componente
- **GSAP + ScrollTrigger:** mais controle, mas bundle ~30-50KB + lock-in
- **Gravyx approach:** **CSS transitions + IntersectionObserver vanilla** → zero KB extra, 100% GPU, controle total

### Easing decodificado: `cubic-bezier(0.22, 1, 0.36, 1)`

- Ponto 1 (0.22, 1): começo com **muita aceleração** (sai rápido do estado inicial)
- Ponto 2 (0.36, 1): final com **desaceleração suave** (assenta delicadamente no estado final)
- **Nome comum:** easeOutQuart ou easeOutExpo (variação)
- **Sensação:** "saída suave, chegada precisa" — padrão de interface Apple/Linear/Arc

### Por que aplica em TUDO que é `.sf`
- Padrão DRY: **uma classe-base + modificadores** — evita repetir transição em cada elemento
- Combinado com classes extras como `.sf-out-top` pra comportamentos específicos
- **Composable:** dá pra adicionar `.sf-delay-100`, `.sf-no-blur` etc. sem refatorar

## JavaScript que orquestra (recuperado do bloco 00)

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('sf-in');
      el.classList.remove('sf-out-top');
    } else {
      // Detecta direção
      if (entry.boundingClientRect.top < 0) {
        // saiu pelo topo
        el.classList.add('sf-out-top');
        el.classList.remove('sf-in');
      } else {
        // saiu pelo fundo (ainda não entrou)
        el.classList.remove('sf-in', 'sf-out-top');
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.sf').forEach(el => observer.observe(el));
```

- **threshold: 0.1** — dispara quando 10% do elemento está visível
- **Detecção de direção** via `boundingClientRect.top` — chave pra bidirecionalidade

## Adaptação pra LP Impulso Digital

### Implementação em Next.js (App Router)

**1. Adicionar ao `globals.css`:**

```css
/* Reveal on scroll bidirecional */
.sf {
  opacity: 0;
  transform: translateY(40px);
  filter: blur(16px);
  transition:
    opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, filter;
}
.sf.sf-in {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.sf.sf-out-top {
  opacity: 0;
  transform: translateY(-30px);
  filter: blur(12px);
}

/* Respeita prefers-reduced-motion (acessibilidade) */
@media (prefers-reduced-motion: reduce) {
  .sf,
  .sf.sf-in,
  .sf.sf-out-top {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
```

**2. Criar hook `useScrollReveal.js`:**

```js
'use client';
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('sf-in');
          el.classList.remove('sf-out-top');
        } else if (entry.boundingClientRect.top < 0) {
          el.classList.add('sf-out-top');
          el.classList.remove('sf-in');
        } else {
          el.classList.remove('sf-in', 'sf-out-top');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.sf').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
```

**3. Usar no layout ou em cada página:**

```jsx
// app/layout.js (client component wrapper) ou page.js
'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Page() {
  useScrollReveal();
  return (
    <>
      <h1 className="sf">A maneira inteligente de...</h1>
      <p className="sf">Subtítulo com blur...</p>
      {/* ... */}
    </>
  );
}
```

**4. Aplicar `.sf` em:**
- H1, H2, H3 de cada seção
- Parágrafos de destaque
- Cards individuais (pricing, features, testimonials)
- Imagens importantes

### Ordem de aplicação na LP ID

1. Adicionar CSS no `globals.css`
2. Criar hook em `src/hooks/useScrollReveal.js`
3. Converter cada componente pra usar classes `.sf` nos elementos-chave
4. Testar primeiro em **Hero + Stats** — se funcionar, replicar no resto

### Ajustes finos opcionais

- **Blur menor em mobile** (performance em devices mais fracos):
  ```css
  @media (max-width: 768px) {
    .sf { filter: blur(8px); }
    .sf.sf-out-top { filter: blur(6px); }
  }
  ```
- **Delay escalonado** pra grids de cards:
  ```css
  .sf-delay-1 { transition-delay: 0.1s; }
  .sf-delay-2 { transition-delay: 0.2s; }
  .sf-delay-3 { transition-delay: 0.3s; }
  ```

### Impacto no bundle

- Zero biblioteca adicionada
- ~30 linhas de CSS + ~25 linhas de JS
- **Performance:** todas as props animadas são **GPU-accelerated** (opacity, transform, filter) — sem repaint/reflow

## Cuidado

- **`filter: blur()` em mobile pode esquentar o device** — por isso reduzir pra 8px em `max-width: 768px`
- **`will-change` em MUITOS elementos** pode estourar VRAM. Aplicar só onde o reveal é visível e importante, não em cada `<div>` da LP.
- **`prefers-reduced-motion`** é obrigatório pra acessibilidade. Usuários com vestibular issues DESLIGAM motion no OS. Respeitar.
- **Not all elements need `.sf`** — excesso cansa. Aplicar em 30-40% dos elementos (os que importam), não 100%.

## Conclusão

Esse é o **bloco mais replicável e de maior impacto visual** de toda a análise Gravyx. **Porta direto, sem modificação**, muda a LP inteira de patamar.

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
