# 00 — Visão geral das bibliotecas JS do Gravyx

**Origem:** extração da home gravyx.com.br (24/04/2026) via Claude in Chrome, analytics removidos.

## Conclusão central
A LP inteira é **HTML + CSS puros + JS vanilla**. Zero bibliotecas pesadas de animação.

## Tabela de libs

| Lib | Presença | Função |
|---|---|---|
| GSAP / ScrollTrigger | ❌ | — |
| Framer Motion | ❌ | — |
| Lenis / Locomotive Scroll | ❌ | Usam `html { scroll-behavior: smooth }` nativo |
| AOS / ScrollMagic | ❌ | Reveal é `IntersectionObserver` caseiro (classes `.sf` / `.sf-in` / `.sf-out-top`) |
| Microsoft Clarity | ✅ (remover) | `scripts.clarity.ms` — analytics |
| Meta Pixel | ✅ (remover) | `connect.facebook.net` — analytics |
| Cloudflare Insights | ✅ (remover) | `static.cloudflareinsights.com/beacon.min.js` — analytics |
| Panda Video Player | ✅ (opcional) | `player.pandavideo.com.br/api.v2.js` — só se tiver VSL |

## Onde vivem as animações
1. **CSS keyframes** — transições, loops, gradientes animados
2. **IntersectionObserver inline** — reveal on scroll com classes `.sf` / `.sf-in` / `.sf-out-top`
3. **Scripts vanilla (2):**
   - Gallery rotator (provavelmente o carrossel do hero com os 12 resultados)
   - Testimonials infinite scroll

## Impacto pra LP Impulso Digital
✅ **Ótima notícia:** portabilidade máxima, zero peso extra no bundle Next.js. Tudo isso já roda nativo:
- `scroll-behavior: smooth` — 1 linha CSS
- IntersectionObserver — já suportado em todo browser moderno, sem dep
- Keyframes CSS — só copiar e colar no `globals.css` ou componente
- Gallery rotator + infinite scroll — vanilla JS dentro de `useEffect` no componente React

**Não precisamos instalar nada.** Tudo pode ir direto pro código atual.
