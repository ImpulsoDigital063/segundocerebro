# ESTUDO — Site institucional ComandaPRO (blueprint)

> Objetivo: construir o site do **ComandaPRO** (food service) espelhando o que já provou funcionar em dois concorrentes/referências: **AgendaPRO** (nosso, bem posicionado em Google+LLM) e **Expresso Delivery** (concorrente veterano, 11 anos, mestre em apresentar funcionalidade). Recorte desta rodada: **só food service**. AT/Starteq = site próprio, rodada futura.
> Fontes: leitura do código do AgendaPRO (`C:\Users\Usuario\agendapro`) + leitura do site no ar do Expresso (expressodelivery.com.br) + screenshots reais. Data: 13/07/2026.

---

## 1. Como o AgendaPRO rankeia (a máquina de AEO/SEO — surpresa)

O AgendaPRO **NÃO tem SEO técnico**: sem sitemap, robots, llms.txt, **sem nenhum JSON-LD/schema**, sem OG image, sem keywords. O posicionamento (Google + citação por LLM) vem de **3 alavancas de conteúdo**:

- **(a) Uma landing por [nicho + intenção de busca]**, com `<title>` casando a busca: *"AgendaPRO para Barbearias — Agenda Online com Lembrete Automático"*. Cada segmento tem metadata próprio keyword-rich.
- **(b) FAQ densa em linguagem natural** ("Meu cliente precisa baixar app?", "Já uso Trinks, por que trocar?") — é o texto que o LLM extrai e cita. ~15 FAQs por página.
- **(c) Seções de comparação nomeando concorrentes** (AgendaPRO x Trinks/Booksy) — rankeia em busca comparativa que LLM adora citar.

**Estratégia ComandaPRO:** copiar (a)+(b)+(c) **e adicionar o que o AgendaPRO não fez** → `sitemap.ts`, `robots.ts`, `llms.txt`, JSON-LD (`SoftwareApplication` + `Organization` + `FAQPage`), OG images via `next/og`. Nascemos acima do próprio AgendaPRO em SEO técnico.

## 2. Estrutura do site (mãe + segmentadas)

**AgendaPRO:** site-mãe (`page.tsx` ~1120 linhas) + 4 LPs segmentadas (barbearia/estética/nail/salão), cada uma **bespoke copy-colada de ~1000 linhas** → dívida técnica (arquivos divergem).

**Expresso:** 3 camadas — home (vende o todo) + **página dedicada por funcionalidade** (`/funcionalidades/cardapio-digital`, `/sistema-pdv`, `/marketing-e-fidelizacao`…) + **página por segmento** (`/segmentos/pizzaria`, `/hamburgueria`, `/restaurantes`, `/adegas`). Cada recurso forte é vendável sozinho.

**Decisão ComandaPRO:** **1 template + config por nicho** (`{ dores, motores, timeline, faqs, foto, concorrentes, exemplos }`) em vez de copiar 5 arquivos gigantes. Escala açaiteria/bar/lanchonete/restaurante/hamburgueria sem manter arquivos divergentes.

### Segmentadas food (proposta)
Açaiteria · Bar/Petiscaria · Restaurante · Lanchonete/Hamburgueria · Pizzaria. (AT/Starteq fora — site próprio depois.)

## 3. Anatomia do site-mãe (ordem das seções — base AgendaPRO)

1. Announcement bar (preço/promo) · 2. Nav sticky + CTA · 3. **Hero** (benefício, mobile-first, mockup) · 4. **Dor real** (cards de dor) · 5. **Gente real** (fotos dos nichos) · 6. **Solução + links pras segmentadas** · 7. **Seu dia reescrito** (timeline operacional) · 8. **Motores/funcionalidades** · 9. **Financeiro inteligente** · 10. **Comparação direta** (mini-UIs) · 11. **Comparativo nomeando concorrentes** · 12. **Como começar** (3 passos) · 13. **Valor empilhado** (Hormozi) · 14. **Risk reversal** (garantia/sem fidelidade) · 15. **Preço** · 16. **Prova social** · 17. **FAQ** · 18. **CTA final** · 19. Footer.

## 4. ⭐ Como apresentar as FUNCIONALIDADES (aprendido do Expresso — o ouro)

O método de maior ROI, comprovado nos screenshots deles:

1. **Headline = benefício de dono; ficha técnica embaixo.** "O caixa fecha sozinho no fim da noite" > "fechamento automático". "A comanda certa, na impressora certa, do jeito que a cozinha lê".
2. **Print REAL do sistema dentro de mockup**, com dado plausível na tela (pizza R$ 59,00, "MESA 12 | R$ 92,00") — nada de tela fake. ComandaPRO tem as telas reais (comanda, PDV, cardápio) → usar.
3. **Ancorar software em hardware real** (impressora térmica com cupom saindo, pinpad) — "funciona no meu balcão de verdade". Já temos QZ Tray/térmica → mesma jogada.
4. **Dor antes da solução** — "Você se reconhece nessas situações?" com 5 dores; cada funcionalidade responde a uma.
5. **Batizar recurso com nome-produto** memorável ("Comanda Fidelizadora", "Montador de pizzas"), não "Módulo 3".
6. **Agrupar features pela JORNADA OPERACIONAL do dono** (pedido → comanda → mesa → caixa → relatório), não por menu técnico. Cada grupo com headline-benefício.
7. **Layout:** seções alternadas texto+mockup; eyebrow em caixa-alta com ícone; headline com 1 palavra destacada; CTA "Conhecer módulo".
8. **Grade de PILLS** (ícone + label curto, 2 colunas) pra a lista longa de sub-recursos — storytelling em cima, scan rápido embaixo.
9. **Números com count-up no scroll** (anos, clientes, pedidos).

## 5. Copy e prova social

- **Tríade de resultado** (Expresso): ágil · organizado · lucrativo. Nosso equivalente a definir.
- **Âncora de autoridade:** Expresso usa "feito por donos de delivery / sócio opera 3 deliveries". ComandaPRO precisa da **sua própria âncora** (ex: nascemos operando bar/açaiteria reais — Medellín, Cantinho). NÃO copiar o selo literal deles.
- **Posicionamento anti-comissão** (Expresso): "deixe de ser refém do marketplace", "cliente do iFood vira seu". Forte pra food — avaliar pro ComandaPRO.
- **Prova social:** depoimento em **vídeo com legenda-resultado** ("Reduzimos de 4 atendentes pra 2") + case com métrica + cidade. Números-âncora animados.
- **Preço transparente "a partir de"** + garantia + "sem fidelidade" (reduz atrito) — Expresso mostra, muitos escondem.

## 6. Design

- **Marca ComandaPRO nasce P&B** (memória `feedback_comandapro_marca_preto_branco` — cor+logo por negócio). O site NÃO deve copiar o azul/violeta do site AgendaPRO nem forçar verde/teal. Base **P&B/neutra premium**, acento a definir. (Isso também evita o erro do Expresso: excesso de painéis full-bleed coloridos empilhados = "datado promocional".)
- **Referências de nível** (do moodboard AgendaPRO): Linear, Stripe, Cal.com, Arc — dark premium, tipografia grande, glass cards, gradiente sutil, SVG (nada de emoji), mobile-first.
- **Stack:** Next.js App Router + Tailwind + `next/font` + `next/image`. Conteúdo em config/arrays. Preço em **fonte única** (`config/pricing.ts`) — nunca hardcodar preço na copy.

## 7. ⚠️ Armadilhas a NÃO herdar

- **AgendaPRO:** as LPs prometem **disparo automático de cupom no WhatsApp que o produto não faz** (a própria FAQ se desmente — é e-mail). Regra: **só prometer canal/automação que existe de verdade** no ComandaPRO (`λ.não-inventar`).
- **Expresso:** CTA só "falar com especialista" (dar demo navegável + trial); parede de features assusta dono pequeno (priorizar hierarquia); foco só em pizzaria (variar cases, somos multi-vertical).

## 8. Decisões abertas (pro plano)
1. Site vive em **repo novo** ou dentro do `acai-system`?
2. Direção de acento visual sobre a base P&B.
3. Lista final de segmentadas food.
4. Quais **telas reais** do ComandaPRO temos pra usar nos mockups (comanda, PDV, cardápio, financeiro, fidelidade).
5. CTA/funil: só "falar" (Expresso) vs demo navegável + trial (nossa vantagem).
