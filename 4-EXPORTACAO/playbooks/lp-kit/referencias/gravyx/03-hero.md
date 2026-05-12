# 03 — Hero (#inicio): vídeo bg + orb central

## HTML

```html
<section id="inicio" class="hero">
  <div class="video-bg-container">
    <video id="bg-video" autoplay loop muted playsinline preload="metadata" poster="/primeiro-frame.webp">
      <source src="/ASSETS/video-background.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero-grid"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-tag">
        <div class="dot"></div>
        <span>Você pode criar</span>
        <span id="hero-tag-rotate" class="fade-in">Carrosséis</span>
      </div>
      <h1 class="sf sf-out-top">A maneira inteligente de criar <span>arte com IA.</span></h1>
      <p class="hero-sub sf sf-out-top">O Gravyx é a plataforma que transforma geração de imagens com IA em um processo consistente, escalável e replicável.</p>
      <div class="hero-actions">
        <a href="#precos"><div class="btn-neon-wrap">
          <span class="mask-layer-1"><span class="animated-border-v3"></span><span class="blur-layer"></span></span>
          <span class="mask-layer-2"></span>
          <div class="btn-neon-inner">
            <span class="btn-neon-text">QUERO ASSINAR AGORA</span>
            <span class="btn-neon-arrow">↗</span>
          </div>
        </div></a>
      </div>
    </div>
    <div class="fluxo-responsive-wrapper">
      <div id="new-fluxo-root" class="new-fluxo-container">
        <svg viewBox="0 0 1268 819"><!-- linhas conectoras brancas 0.15 opacity --></svg>
        <div class="orb-ring-outer"></div>
        <div class="orb-inner"><img class="orb-logo" src="/ASSETS/LOGO.svg"></div>
        <!-- cards flutuantes: "Sua Copy", "Sua Logo", "Sua Foto" e o carrossel de resultados -->
      </div>
    </div>
  </div>
</section>
```

## Observações rápidas

### Camadas do hero (fundo → frente)
1. **Vídeo de fundo** (`.video-bg-container`): `autoplay loop muted playsinline`, `preload="metadata"` (economia de banda), poster `/primeiro-frame.webp` (fallback + primeira pintura rápida).
2. **Grid overlay** (`.hero-grid`): provavelmente `background-image` com linhas sutis (CSS) sobre o vídeo — efeito tech.
3. **Conteúdo**: tag rotativa + H1 + subtítulo + CTA neon + fluxo do orb.

### Hero-tag (rotativa)
- Dot estático + "Você pode criar" + **palavra rotativa** (`#hero-tag-rotate`, classe `.fade-in`)
- Ciclo: Criativos → Flyers → Vídeos → Carrosséis → Thumbnails → Fotografias (do bloco 01)
- **Psicologia:** cobre todas as objeções de "mas serve pro meu caso?" — lead vê o próprio formato passando.

### H1 + classes de reveal
- Classes `sf sf-out-top` no H1 e no subtítulo → **IntersectionObserver reveal** (bloco 00)
- H1 tem `<span>` no final ("arte com IA") — provavelmente com gradient CSS próprio
- Copy padrão Gravyx: **"A maneira inteligente de X"** — palavra que carrega promessa (inteligente, consistente, escalável, replicável)

### CTA neon (btn-neon-wrap)
- 5 camadas empilhadas: `mask-layer-1` (border animada + blur) + `mask-layer-2` + `btn-neon-inner` (texto + arrow)
- Efeito: borda que pulsa/anima em volta do botão (gradient conic girando)
- Texto em caps: "QUERO ASSINAR AGORA"
- Arrow `↗` (unicode, não SVG) — economia

### Orb central (`#new-fluxo-root`)
- SVG viewBox 1268x819 com linhas conectoras brancas em opacity 0.15
- Orb outer ring + orb inner com logo no centro
- **Cards flutuantes ao redor:** "Sua Copy", "Sua Logo", "Sua Foto" → vão entrando na orb
- Carrossel de resultados trocando a cada 3500ms (bloco 01)
- **Narrativa visual:** "você joga seus inputs → Gravyx cospe o resultado"

## Adaptação pra LP Impulso Digital

### Vídeo de fundo
- **Gerar no Claude Design:** vídeo curto (10-15s em loop) com aurora gradiente animada + pontos de luz lentos. Prompt sugerido:
  > "15-second looping background video for SaaS hero, dark navy background with animated aurora gradients in #0EA5E9, #8B5CF6, #22D3EE, slow moving light particles, cinematic, subtle depth, 1920x1080, seamless loop, low motion (not distracting)"

### Hero-tag rotativa — reaproveitar direto
- "Você pode ter" + [Landing Page / Loja Shopify / Site Next.js / Consultoria Estratégica]
- Alinha perfeitamente com os 4 cards de serviço da LP ID

### H1 — padrão Gravyx aplicado
- Atual: "Seu negócio merece ser encontrado"
- Proposta Gravyx-style: **"A maneira inteligente de colocar seu negócio pra vender."** (gradient no "vender")
- Ou: **"A forma certa de estruturar seu negócio pra aparecer no Google e converter."**

### CTA neon
- Portar o efeito 5-layer (ou versão simplificada 3-layer pra economizar CSS)
- Texto: **"QUERO MINHA CALL GRÁTIS"** (já decidido como CTA principal)

### Orb central
- Fica no lado direito do hero com:
  - Orb inner = logo Impulso Digital
  - Cards flutuantes ao redor: **"Seu Negócio"**, **"Seu Domínio"**, **"Seu Público"**
  - Carrossel central trocando os 4 produtos (LP R$499 / Shopify R$599 / Next.js R$799 / Consultoria R$299)
- **Alternativa mais simples se o SVG ficar pesado:** substituir por mockup estático do produto entregue

## Assets a gerar no Claude Design

1. Vídeo aurora bg loop 10-15s (prompt acima)
2. Logo Impulso Digital SVG se ainda não tem formato limpo
3. Primeiro frame WebP do vídeo (poster) — pode extrair do vídeo gerado

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
