# INDICE — Extração Gravyx (24/04/2026)

**Origem:** Claude in Chrome rodando em gravyx.com.br, 18 blocos sequenciais.
**Destino final:** porting seletivo pra LP Impulso Digital (`C:\Users\DELL\impulso-digital-nextjs\`).
**Decisão central:** Gravyx é HTML + CSS + JS vanilla puros. Zero biblioteca pesada. **Portabilidade máxima.**

---

## Mapa dos 18 blocos

### HTML / Estrutura (seções)

| # | Arquivo | Conteúdo | Ação recomendada |
|---|---|---|---|
| 00 | `00-visao-geral-bibliotecas.md` | Zero GSAP/Framer/Lenis. Só vanilla | ✅ Ler antes de qualquer port |
| 01 | `01-scripts-inline-cursor-sparks.md` | 5 funcionalidades JS + cursor + sparks HTML | ⚠️ Cursor desktop-only. Sparks: porta |
| 02 | `02-topnav.md` | Topnav fixed + blur + CTA final | ✅ Porta adaptando CTA |
| 03 | `03-hero.md` | Vídeo bg + orb central + CTA neon | 🎨 Vídeo no Claude Design + port parcial |
| 04 | `04-stats-bar.md` | 4 stats com counter animado | ✅ Porta com números reais ID |
| 05 | `05-video-demo.md` | Panda Video iframe | ❌ Não agora (custo R$59/mês) |
| 06 | `06-creations-carrosseis.md` | 4 faixas infinitas auto-scroll | ✅ Porta — gerar mockups no Claude Design |
| 07 | `07-testimonials.md` | 2 tracks requestAnimationFrame | ✅ Porta com depoimentos reais |
| 08 | `08-features-grid.md` | Grid 3col × 2 com ícones SVG | ✅ Porta com 6 pilares ID |
| 09 | `09-sobre-fundador.md` | Foto + autoridade + bullets | ✅ Substituir SobreEduardo.js |
| 10 | `10-trilha-nao-sozinho.md` | Mockup + timeline pós-entrega | ✅ Substituir ComoFunciona.js |
| 11 | `11-pricing.md` | Toggle + selector + cards horizontais | ⚠️ Remover toggle (serviço one-shot) |
| 12 | `12-guarantee.md` | Escudo SVG + badge + copy curta | ✅ Porta adaptando pra "aprovação 3 dias" |
| 13 | `13-faq-support.md` | FAQ accordion + support card sticky | ✅ Porta com 8 objeções ID |
| 14 | `14-footer.md` | 4 colunas simples | ✅ Porta com coluna Contato extra |

### CSS / Visual

| # | Arquivo | Conteúdo | Ação recomendada |
|---|---|---|---|
| 15 | `15-css-fundo-pagina.md` | Paleta root + scanlines + grid + sparks | ✅ Porta adaptando paleta pra ID |
| 16 | `16-css-reveal-scroll-bidirecional.md` | `.sf`, `.sf-in`, `.sf-out-top` | ✅ **Porta direto, maior impacto visual** |
| 18 | `18-css-botao-neon-hover.md` | `.btn-neon-wrap` (truncado parcialmente) | ✅ Porta adaptando paleta |

### JS / Comportamento

| # | Arquivo | Conteúdo | Ação recomendada |
|---|---|---|---|
| 17 | `17-js-scroll-reveal-observer.md` | IntersectionObserver canônico (stagger + direção) | ✅ **Porta direto como hook React** |

---

## Classificação por porte (priorização)

### 🟢 PORTAR DIRETO (copy-paste + Next.js wrapper)
Maior ROI, zero ou baixa adaptação:

1. **Reveal bidirecional `.sf`** (blocos 16 + 17) → transforma LP inteira
2. **Scanlines globais** (bloco 15) → 1 linha CSS, efeito tech sutil
3. **Grid radial no hero** (bloco 15) → 6 linhas CSS
4. **Sparks verticais** (blocos 01 + 15) → 5 divs + keyframes
5. **Smooth scroll nativo** (bloco 18) → 1 linha CSS
6. **FAQ accordion + support sticky** (bloco 13) → substitui FAQ.js
7. **Footer 4 colunas** (bloco 14) → substitui Footer.js
8. **Guarantee section** (bloco 12) → nova seção
9. **Topnav blur** (bloco 02) → atualiza Navbar.js

### 🟡 PORTAR ADAPTANDO (conteúdo muda, estrutura mesma)
Ajuste de copy/paleta/layout, estrutura reaproveitável:

1. **Paleta** (bloco 15) → trocar Gravyx (#00A1FF) por Impulso (#0EA5E9)
2. **Botão neon** (bloco 18) → adaptar cores + aplicar só no CTA principal
3. **Hero H1 + tag rotativa** (bloco 03) → reescrever copy, manter estrutura
4. **Stats bar** (bloco 04) → reescrever com números ID (3 anos / 80 projetos / R$0 mensalidade / 24h suporte)
5. **Features grid 6 pilares** (bloco 08) → novo copy, manter layout
6. **Pricing horizontal** (bloco 11) → sem toggle mensal, aplicar `custom-pricing-grid`
7. **SobreEduardo** (bloco 09) → copy nova, foto existe

### 🎨 PRECISA ASSET NO CLAUDE DESIGN
Gerar antes de começar a codar:

1. **Vídeo aurora loop 10-15s** (bloco 03) — opcional
2. **10-15 mockups de projetos** (bloco 06) — se portfolio real não bastar
3. **Mockup MacBook com LP aberta** (bloco 10) — para seção Trilha
4. **Ícones SVG das 6 features** (bloco 08) — ou lucide-react resolve
5. **Logo Impulso Digital SVG limpo** (bloco 02/14)
6. **Poster WebP do vídeo** (bloco 03)

### 🔴 NÃO PORTAR AGORA
Fora de escopo ou custo não justifica:

1. **Panda Video** (bloco 05) — R$59/mês, validar caixa antes
2. **Toggle Mensal/Anual** (bloco 11) — serviço one-shot, não cabe
3. **Selector PADRÃO/API** (bloco 11) — BYOK não se aplica a serviço
4. **Cursor personalizado** (bloco 01) — distrai em mobile, desktop-only marginal
5. **Orb central carrossel 3500ms** (bloco 03) — complexo; alternativa: mockup estático

---

## Paleta final Impulso Digital (decisão)

Adaptando estrutura Gravyx, mantendo DNA Impulso:

```css
:root {
  --color-bg: #0A0F1A;
  --color-surface: #0F1624;
  --color-surface-2: #131C2E;
  --color-surface-3: #1A2540;
  --color-border: rgba(255,255,255,0.08);

  --color-text: #E0ECFF;
  --color-text-muted: #8AA3C6;
  --color-text-dark: #556B8A;

  --color-accent: #0EA5E9;         /* sky-500 */
  --color-accent-hover: #38BDF8;
  --color-accent-dark: #0284C7;
  --color-accent-cyan: #22D3EE;

  --color-accent-gradient: linear-gradient(135deg,
    #0284C7 0%,
    #0EA5E9 47%,
    #22D3EE 100%
  );

  --color-success: #22C55E;
  --font: 'Inter', -apple-system, sans-serif;
}
```

---

## Ordem de ataque recomendada (LP ID)

### Fase 1 — Fundação visual (sexta 24/04 noite)
1. `globals.css`: paleta + scanlines + `.sf` / `.sf-in` / `.sf-out-top` + keyframes sparks
2. `hooks/useScrollReveal.js`: hook canônico do bloco 17
3. Aplicar classes `.sf` em H1, H2, H3 dos componentes existentes
4. **Teste:** rolar a LP, tudo deve aparecer/sumir com blur

### Fase 2 — Hero (sexta noite → sábado manhã)
5. Atualizar `Hero.js`: H1 padrão Gravyx + tag rotativa + grid radial + sparks
6. CTA principal troca pra `<BtnNeon>` adaptado (bloco 18)
7. Decidir: vídeo bg (Claude Design) ou só grid + sparks
8. Ativar `StarField.js` no `page.js` (pendência da auditoria)

### Fase 3 — Seções novas/refatoradas (sábado)
9. Stats Bar com counter animado (logo depois do hero)
10. Creations carrossel 3 faixas (gerar mockups no Claude Design se faltar)
11. Features grid 6 pilares
12. Trilha (substitui ComoFunciona.js)
13. Pricing horizontal `custom-pricing-grid`
14. Guarantee section
15. Testimonials 2 filas
16. FAQ accordion + support sticky
17. SobreEduardo reescrita
18. Footer 4 colunas

### Fase 4 — Polish e deploy (sábado noite)
19. Responsive mobile (breakpoints + sparks off + blur menor)
20. Performance: lazy-load imagens, preload poster, WebP
21. SEO: schema, OG, sitemap
22. Deploy produção Vercel
23. Checklist Core Web Vitals

### Fase 5 — Pré-disparo (domingo 26/04)
24. Aquecer chip WhatsApp Business
25. Sanity check ponta-a-ponta (formulário, links, CTAs)
26. Review final do texto

### Fase 6 — Disparo (segunda 27/04 meio-dia)
27. 14 leads via wa.me manual (playbook RadarPRO)
28. Aviso visual `/integracao/whatsapp` RadarPRO em produção (10 min residual)

---

## Bloco 18 truncado

O último bloco (CSS do botão neon) truncou em `.btn-neon-wr...`. Faltam:
- `.animated-border-v3` (conic gradient girando)
- `.blur-layer`
- `.mask-layer-2`
- `.btn-neon-inner` + `.btn-neon-text` + `.btn-neon-arrow`
- Possíveis media queries

**Plano:** se precisar do botão neon exato, Eduardo re-extrai via Claude in Chrome com foco só nesse CSS. Senão, implementar versão aproximada com `conic-gradient` + `@keyframes rotate` (~30 linhas) — fica 95% do visual, 5% menos fidelidade.

---

## Próximo passo

Migrar pra `C:\Users\DELL\impulso-digital-nextjs\` e começar Fase 1 (fundação visual). Estimativa: 2-3h pra ter `.sf` rolando na LP inteira + paleta atualizada + scanlines.

Decisões pendentes Eduardo antes de começar:
1. **Vídeo bg no hero:** gerar no Claude Design agora ou pular essa pra Fase 2?
2. **Mockups de projetos:** usar os reais (MPN-On, UrbanFeet, Gabriel) ou gerar 10 no Claude Design pra carrosséis?
3. **Consultoria R$299:** preço fica ou sobe pra R$499?
4. **CTA principal:** "Quero minha call grátis" confirmado?
5. **Garantia:** aprovação 3 dias + 100% devolução confirmado?
