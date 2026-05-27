---
name: project-zilanda-suplementos
description: cliente potencial Impulso · farmacêutica Zilanda · LP suplementação injetável clone EV Suplementos · protótipo HTML em /zilanda-suplementos
metadata: 
  node_type: memory
  type: project
  originSessionId: 9043dabf-4160-433a-b570-c176e87c565f
---

Cliente potencial Impulso fechado quase certo em 15/05/2026 — **Zilanda**, farmacêutica iniciando em suplementação injetável (mesmo nicho da Erlane / EV Suplementos).

**Why:** Zilanda viu a LP da Erlane (evsuplementosinjetaveis.com) e se interessou em ter uma igual. Eduardo apresentou protótipo HTML ao vivo na conversa de 15/05 e relatou "acredito que vamos fechar". Mesmo padrão "clone-Erlane local" já mapeado no batch CIC #7 de 26/04 (Palmas tem pelo menos 3 farmacêuticas/enfermeiras nesse perfil).

**How to apply:** quando Eduardo pedir "o projeto da Zilanda", "abre a LP da Zilanda", "vamos avançar com a Zilanda" ou similar — trazer:

1. **Protótipo atual:** `C:/Users/Usuario/zilanda-suplementos/index.html` (HTML único standalone, sem build, abre direto no browser)
2. **Stack escolhida:** paleta rosa clínica (rosa-fundo #fdf4f6, rosa-acento #c88a98, rose-gold #c8967a, rosa-deep #8a4a58), Playfair Display + Inter, SVG inline (zero emoji conforme regra global)
3. **Animações implementadas:** custom cursor, scroll progress, reveal on scroll, parallax Hero, gradient mesh animado, borda dourada girando na foto, rotador de palavras, marquee infinito, contadores animados, barras de resultado com shimmer, tilt 3D em cards, FAQ accordion, CTA pulse
4. **Estrutura de seções (14):** Header, Hero, Marquee, Números, Benefícios (6), Como Funciona (4 passos), Protocolos (4: Energia&Foco, Beleza, Imunidade, Detox), Resultados (barras), Sobre, Garantia, Investimento (avaliação grátis), FAQ (6), CTA Final, Footer + WhatsApp float
5. **Base/referência clonada:** `C:/Users/Usuario/ev-suplementos/` (LP da Erlane em Next.js já em prod)

**Placeholders a resolver com a Zilanda antes de produção:**
- Nome completo (atualmente só "Dra. Zilanda")
- Número CRF (4 lugares: Hero badge, Sobre tag, Footer, comentário)
- WhatsApp real (4 lugares: Hero CTA, Como Funciona, CTA Final, Footer, float)
- Foto profissional (Hero + Sobre — atualmente placeholder gradient com SVG)
- Cidade confirmar (assumption: Palmas-TO, pelo paralelo com Erlane)
- Stats reais (120+ clientes / 98% satisfação são genéricos)
- Email contato
- Catálogo de protocolos definitivo (atual = mix dos da Erlane: Energia & Foco / Beleza / Imunidade / Detox)
- Eixo da Hero confirmar com Eduardo: "começando" (vende autoridade/CRF) ou "já tem fila" (vende método/escala) — pergunta levantada e não respondida

**Próximo passo se fechar contrato:**
- Clonar `ev-suplementos/` pra `zilanda-suplementos-next/` (Next.js)
- Trocar dados (paleta, copy, foto, contato)
- Deploy Vercel + domínio próprio
- Modelo de execução já validado em [[project_criativosdoceu]] (mesma arquitetura Next.js Impulso)

Relacionado: a Erlane é case-mãe oficial da Impulso pro nicho — Zilanda fechar reforça o argumento "clone-Erlane local" pro pool de leads que o batch #7 mapeou (Verônica Lima, Amanda Silveira).
