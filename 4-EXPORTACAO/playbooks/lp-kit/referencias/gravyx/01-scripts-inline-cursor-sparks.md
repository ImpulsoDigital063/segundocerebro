# 01 — Scripts inline + Cursor + Sparks

## Scripts inline próprios (≈ 25 KB totais)

5 funcionalidades JS caseiras:

1. **Rotator de palavras no hero-tag** — cicla entre: Criativos → Flyers → Vídeos Animados → Carrosséis → Thumbnails → Fotografias
2. **Carrossel do orb central** (`#new-fluxo-root`) — troca slides a cada **3500 ms**
3. **IntersectionObserver** — adiciona/remove `.sf-in` e `.sf-out-top` com base na direção do scroll
4. **Testimonials em 2 tracks** — `requestAnimationFrame` com velocidades **0.7** e **0.55 px/frame**
5. **Cursor personalizado** — 3 divs fixos: `#cursor-glow`, `#cursor-ring`, `#cursor-dot`

---

## 1.1 HTML — Cursor + Sparks (fixed overlay, z-index alto)

```html
<!-- CURSOR PERSONALIZADO (3 camadas sobrepostas) -->
<div id="cursor-glow" style="pointer-events:none;position:fixed;top:0;left:0;z-index:9997;width:600px;height:600px;background:radial-gradient(circle,rgba(0,161,255,.18) 0%,rgba(0,161,255,.05) 30%,transparent 70%);border-radius:50%;transform:translate(-50%,-50%);transition:transform .1s ease-out,background .3s;opacity:0"></div>

<div id="cursor-ring" style="pointer-events:none;position:fixed;top:0;left:0;z-index:9998;width:28px;height:28px;border:1.5px solid rgba(0,161,255,.85);border-radius:9999px;box-shadow:0 0 15px rgba(0,161,255,.6),inset 0 0 10px rgba(0,161,255,.4);backdrop-filter:blur(2px)"></div>

<div id="cursor-dot" style="pointer-events:none;position:fixed;top:0;left:0;z-index:9998;width:6px;height:6px;background:#D3E3FF;border-radius:9999px;box-shadow:0 0 15px rgba(255,255,255,.8)"></div>

<!-- SPARKS: container fixo + 5 linhas verticais subindo -->
<div style="position:fixed;inset:0;pointer-events:none;overflow:hidden;mix-blend-mode:screen;opacity:.45;z-index:3">
  <div class="animate-spark-rise" style="position:absolute;width:1px;height:15vh;background:linear-gradient(to top,transparent,#00A1FF,#fff);bottom:-25%;left:7%;animation-delay:0s;animation-duration:4s;box-shadow:0 0 10px #00A1FF"></div>
  <div class="animate-spark-rise" style="width:2px;height:10vh;background:linear-gradient(to top,transparent,#D3E3FF,#fff);left:25%;opacity:.7;animation-delay:2s;animation-duration:5s;box-shadow:0 0 15px #D3E3FF;position:absolute;bottom:-25%"></div>
  <div class="animate-spark-rise" style="width:2px;height:12vh;left:46%;animation-delay:.5s;animation-duration:4.5s;/*...*/"></div>
  <div class="animate-spark-rise" style="width:1px;height:18vh;left:65%;opacity:.8;animation-delay:3s;animation-duration:6s;/*...*/"></div>
  <div class="animate-spark-rise" style="width:2px;height:8vh;left:85%;opacity:.6;animation-delay:1.8s;animation-duration:4.2s;/*...*/"></div>
</div>
```

## Observações rápidas (análise depois)

- **Cursor:** 3 camadas sobrepostas — glow (blur grande azul), ring (borda com glow), dot (ponto central). Z-index 9997-9998. Decidir se vale portar (pode distrair em mobile, só desktop faz sentido).
- **Sparks:** 5 linhas verticais subindo com gradient transparente→azul→branco, `mix-blend-mode:screen`, delays distintos (0s, 2s, 0.5s, 3s, 1.8s), durations 4-6s. Efeito sutil de fagulhas no fundo — combina com fundo escuro da LP ID.
- **Paleta Gravyx** já vazando: `#00A1FF` (azul elétrico), `#D3E3FF` (azul claro), `#fff` (branco).

**Arquivo salvo. Manda o próximo bloco.**
