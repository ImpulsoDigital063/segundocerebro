# 06 — Creations / Resultados (#resultados) — 4 carrosséis auto-scroll

## HTML

```html
<section id="resultados" class="section-creations">
  <div class="container">
    <div class="section-header center">
      <h2 class="section-title sf sf-out-top">O que o Gravyx cria por você em <span>segundos</span></h2>
      <p class="section-desc sf sf-out-top">De criativos publicitários a identidades visuais completas...</p>
    </div>
  </div>

  <!-- 4 linhas: Criativos (→), Fotos Publicitárias (←), Social Media (→), ID Visual (←) -->
  <div class="carr-row">
    <div class="creation-type-label">Criativos</div>
    <div class="carr-track" style="display:flex;gap:20px;width:max-content;padding:10px 0;animation:carr-left 30s linear infinite">
      <img class="carr-img sf sf-out-top"
           src="/ASSETS/CRIACOES/TIPOS/Criativos/imagem-carrossel-criativo-01.webp"
           style="width:280px;height:380px;object-fit:cover;border-radius:12px;flex-shrink:0">
      <!-- ...14+ imagens, duplicadas p/ loop infinito... -->
    </div>
  </div>
  <!-- demais linhas idem, alternando carr-left / carr-right -->
</section>
```

## Observações rápidas

### Estrutura
- **4 faixas horizontais** com labels à esquerda: `Criativos` → `Fotos Publicitárias` ← `Social Media` → `ID Visual` ←
- **Direções alternadas** (→ ← → ←) — efeito visual rico, sensação de "tudo se movendo", evita monotonia.
- **Pattern "infinite scroll wall":** técnica clássica de portfólio SaaS (Linear, Framer, Vercel usam variações).

### Animação CSS pura (30s loop)
- `animation: carr-left 30s linear infinite` — keyframes CSS fazem o track mover.
- **Track duplicado:** as imagens aparecem 2x lado a lado, animação move `translateX(-50%)` do total. Resultado: loop seamless.
- **30s pra 14+ imagens** = ritmo lento, olhos têm tempo pra registrar cada criativo.
- **Zero JS nos carrosséis de resultado** (diferente do orb que é 3500ms setInterval).

### Dimensões das imagens
- `280px × 380px` (proporção vertical 9:16 aprox, tipo stories/reels/poster)
- `object-fit: cover` — recorta pra caber
- `border-radius: 12px` — canto arredondado consistente
- `flex-shrink: 0` — impede compressão quando track encolhe

### Copy da seção
- H2: "O que o Gravyx cria por você em **segundos**" — palavra-chave em gradient (velocidade = benefício)
- Subtítulo: lista variedade ("de criativos publicitários a identidades visuais completas")
- **Padrão:** H2 promete transformação + subtítulo prova amplitude

### Labels das 4 faixas
1. **Criativos** — criativos publicitários (Meta Ads, Google Ads)
2. **Fotos Publicitárias** — mockups, produtos, lifestyle
3. **Social Media** — posts orgânicos (IG, TikTok)
4. **ID Visual** — logos, paletas, tipografia (identidade completa)

**Narrativa:** cobre o espectro completo de necessidades visuais de um negócio pequeno. Lead vê sua própria categoria passando → "serve pra mim".

## Adaptação pra LP Impulso Digital

### Problema: Impulso Digital não é SaaS de criativos, é **serviço de site**
- Os carrosséis do Gravyx mostram **output do produto** (imagens geradas)
- LP ID precisa mostrar **projetos entregues** (sites reais, prints, mockups)

### Versão 1 — 3 faixas com mockups de projetos reais
```
Faixa 1 →  LANDING PAGES   (5 prints de LPs entregues)
Faixa 2 ←  LOJAS SHOPIFY   (5 prints de lojas entregues, MPN-On + UrbanFeet + Gabriel)
Faixa 3 →  SITES NEXT.JS   (5 prints de sites full-stack)
```

### Versão 2 — Se não tem projetos suficientes ainda
```
Faixa 1 →  LANDING PAGES    (2-3 prints reais + 4-5 mockups gerados no Claude Design)
Faixa 2 ←  LOJAS           (MPN + UrbanFeet + Gabriel + 3-5 mockups)
```

### Assets a gerar no Claude Design (se faltar projeto real)
Prompt base:
> "Mockup realistic desktop + mobile screen showing a modern Brazilian e-commerce landing page for [nicho X], clean design, navy + cyan accent, conversion-focused hero, shot angle 30 degrees, studio lighting, high detail. 9:16 vertical format for carousel display."

Gerar ~15 mockups variando nicho (nutrição, moda, estética, infoproduto, delivery) pra preencher as faixas.

### Copy adaptada
- H2: **"O que a Impulso Digital entrega em até 7 dias"** (velocidade + entrega concreta)
  - Ou: **"Sites que trabalham por você — prontos em até 7 dias"**
- Subtítulo: "De landing pages que convertem a lojas completas no Shopify ou Next.js, com SEO e integração WhatsApp."

### Animação
- Portar direto: CSS keyframes + track duplicado + `animation: 30s linear infinite`
- Zero JS, zero dependência — cabe em `globals.css` sem esforço

### Localização na LP
- Entrar **antes** do `CardServico.js` — "aqui está o que a gente faz (visual) → aqui está como contratar (preço)"
- Ordem: Hero → Stats → Problema → **Creations carousel (NOVO)** → CardServico → ComoFunciona → ...

## Conclusão prática

**Portar direto.** É a seção de maior impacto visual do Gravyx e serve 100% pra LP de serviço também. Único custo: gerar 10-15 mockups no Claude Design se o portfolio real não bastar.

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
