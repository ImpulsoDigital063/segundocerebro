# 17 — JS: IntersectionObserver canônico do reveal bidirecional

> **Este é o JS canônico do Gravyx** — substitui a versão tentativa que escrevi no bloco 16. Detecta direção via `scrollY` histórico + aplica stagger escalonado por ordem no DOM.

## JavaScript vanilla (client-side)

```js
// Rode no useEffect / client-side
const lastScrollYRef = { current: 0 };
const elements = Array.from(document.querySelectorAll('.sf'));

// Atraso escalonado por ordem no DOM (stagger de 4-em-4, máx 0.21s)
elements.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min((i % 4) * 0.07, 0.21)}s`;
});

const observer = new IntersectionObserver((entries) => {
  const scrollingDown = window.scrollY >= lastScrollYRef.current;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('sf-out-top');
      entry.target.classList.add('sf-in');
    } else {
      entry.target.classList.remove('sf-in');
      if (scrollingDown) entry.target.classList.add('sf-out-top');
      else entry.target.classList.remove('sf-out-top');
    }
  });
  lastScrollYRef.current = window.scrollY;
}, { threshold: [0, 0.12], rootMargin: '0px 0px -40px 0px' });

elements.forEach(el => observer.observe(el));
window.addEventListener('scroll', () => {
  lastScrollYRef.current = window.scrollY;
});
```

## Observações rápidas

### Detalhes que importam

#### 1. Detecção de direção via `scrollY` histórico
- **Padrão meu anterior (bloco 16):** usar `entry.boundingClientRect.top < 0`
- **Padrão Gravyx real:** guardar `lastScrollYRef` + comparar com `window.scrollY` atual
- **Por que Gravyx é melhor:** funciona mesmo quando o elemento sai por scroll rápido (onde o boundingClientRect pode não refletir direção real em todos os frames)
- **Resultado:** bidirecionalidade 100% confiável em qualquer velocidade de scroll

#### 2. Stagger escalonado `(i % 4) * 0.07`
- `i % 4` → cicla 0, 1, 2, 3, 0, 1, 2, 3...
- `* 0.07` → delays de 0s, 70ms, 140ms, 210ms
- `Math.min(..., 0.21)` → garante teto em 210ms
- **Efeito:** elementos em grid (4 cards por linha) aparecem em cascata dentro de cada linha, mas nova linha reinicia o cascata
- **Sensação:** "ondas" de reveal em vez de tudo aparecer junto

#### 3. Threshold duplo `[0, 0.12]`
- `0` → dispara quando elemento entra/sai minimamente
- `0.12` → dispara quando 12% visível
- **Motivo:** 2 triggers garantem que a transição reage tanto a "saiu da tela" quanto a "começou a aparecer"

#### 4. rootMargin `'0px 0px -40px 0px'`
- Margin negativa no bottom (−40px)
- **Efeito:** o elemento "entra" só quando já passou 40px pra dentro da viewport — evita trigger precoce quando ainda tá na dobra
- **Padrão tuned:** elemento aparece quando você realmente ESTÁ nele, não quando está "quase lá"

#### 5. `scroll` listener adicional
- Mesmo com o IntersectionObserver, o listener paralelo mantém `lastScrollYRef` sempre atualizado
- **Por que não depender só do IO:** IO dispara apenas em mudança de intersecção; scroll listener captura **qualquer** movimento de scroll
- **Resultado:** direção sempre correta, mesmo quando scroll rola pouquinho sem trigger de IO

### Trade-offs do stagger por `i % 4`
- Funciona bem se o layout for predominantemente de 4 colunas
- Se o layout for 3 colunas (features) ou 2 colunas (testimonials), o stagger fica "quebrado" (primeira linha OK, segunda desalinha)
- **Adaptação:** pode trocar `% 4` por `% 3` em páginas majoritariamente 3-col

## Adaptação pra LP Impulso Digital

### Hook React final (substitui o rascunho do bloco 16)

```js
// src/hooks/useScrollReveal.js
'use client';
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.sf'));
    if (elements.length === 0) return;

    // Stagger escalonado por ordem no DOM
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 0.07, 0.21)}s`;
    });

    const observer = new IntersectionObserver((entries) => {
      const scrollingDown = window.scrollY >= lastScrollYRef.current;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('sf-out-top');
          entry.target.classList.add('sf-in');
        } else {
          entry.target.classList.remove('sf-in');
          if (scrollingDown) {
            entry.target.classList.add('sf-out-top');
          } else {
            entry.target.classList.remove('sf-out-top');
          }
        }
      });
      lastScrollYRef.current = window.scrollY;
    }, { threshold: [0, 0.12], rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));

    const onScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
```

### Uso

```jsx
'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Page() {
  useScrollReveal();
  return (
    <main>
      <h1 className="sf">Headline</h1>
      <p className="sf">Subtítulo</p>
      <div className="sf">Card 1</div>
      <div className="sf">Card 2</div>
      {/* ... */}
    </main>
  );
}
```

### Diferenças vs. bloco 16 (corrige)

| Item | Bloco 16 (tentativa) | Bloco 17 (canônico) |
|---|---|---|
| Detecção direção | `boundingClientRect.top < 0` | `window.scrollY >= lastScrollYRef` |
| Threshold | `0.1` | `[0, 0.12]` |
| rootMargin | (não tinha) | `0px 0px -40px 0px` |
| Stagger | (não tinha) | `(i % 4) * 0.07, max 0.21s` |
| Scroll listener paralelo | Não | Sim (redundância de segurança) |

**Usar o canônico (bloco 17).**

### Adicionar `passive: true` no scroll listener
- Ganho de performance (~10% em scroll)
- Diz ao browser "não vou chamar preventDefault" → otimização do main thread
- Gravyx original não tem explicitamente, mas **incluir no port pra Next.js**

### Cleanup obrigatório
- `observer.disconnect()` + `removeEventListener` no retorno do useEffect
- **Sem cleanup = memory leak** em SPA (cada navegação acumula observers)

## Cuidado

- **Elementos adicionados dinamicamente depois do mount** (ex: lista que carrega via API) **não são observados** por este hook. Se a LP ID tiver conteúdo dinâmico, re-rodar `observer.observe(el)` quando novos elementos aparecem.
- **Imagens lazy-loaded** podem disparar `.sf-in` antes de carregar → placeholders antes de tudo.
- **SSR no Next.js:** o hook precisa ser `'use client'`. Componentes Server não aguentam.

## Conclusão

Este é o JS final — usar esse em vez do que escrevi no bloco 16. Substituir o hook no `useScrollReveal.js` pelo canônico.

**Arquivo salvo. Manda o próximo bloco.**
