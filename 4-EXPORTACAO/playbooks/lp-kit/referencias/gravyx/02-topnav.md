# 02 — Topnav (fixed, blur)

## HTML

```html
<nav class="topnav">
  <a class="topnav-logo" href="#"><img src="/ASSETS/LOGO.svg" alt="Gravyx" width="120" height="28"></a>
  <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Abrir menu">
    <span></span><span></span><span></span>
  </button>
  <div id="topnav-links" class="topnav-links">
    <a class="topnav-link" href="#inicio">Início</a>
    <a class="topnav-link" href="#resultados">Resultados</a>
    <a class="topnav-link" href="#precos">Preços</a>
    <a class="topnav-link" href="#sobre">Sobre</a>
    <a class="topnav-cta" href="#precos">Assinar Agora</a>
  </div>
</nav>
```

## Observações rápidas

- **Estrutura enxuta:** logo à esquerda, hamburguer mobile, links à direita com CTA no final (padrão SaaS).
- **4 seções linkadas:** Início, Resultados, Preços, Sobre → ancoragem em IDs na mesma página (SPA feel).
- **CTA "Assinar Agora"** aponta pra `#precos` (não pra checkout direto) — leva o lead ao plano antes do botão final. Pattern de commit progressivo.
- **Mobile menu button** com 3 spans (hamburguer CSS puro, sem SVG) — JS inline abre/fecha provavelmente com toggle de classe.
- **Logo SVG em `/ASSETS/LOGO.svg`** com dimensões explícitas (width/height) — evita layout shift (CLS bom pro Core Web Vitals).

## Adaptação pra LP Impulso Digital

- **Links a adaptar:** Início, Serviços (em vez de Resultados), Preços, Sobre → os 4 já fazem sentido.
- **CTA:** trocar "Assinar Agora" por **"Quero minha call grátis"** (já decidido como CTA principal) apontando pro formulário/WhatsApp.
- **Logo Impulso Digital:** usar SVG se tiver; senão gerar no Claude Design.
- **Blur + fixed:** vem no CSS (provavelmente próximo bloco) — guardar `backdrop-filter: blur()` pra aplicar em `nav` com `position: fixed`.

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
