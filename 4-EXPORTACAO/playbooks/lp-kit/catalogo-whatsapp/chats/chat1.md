# Landing Page R$499

_Started 2026-04-27 02:07 UTC_

---

## User

Crie um carrossel Instagram de 8 slides 1080×1350 (formato 4:5) pra Impulso Digital — agência de Eduardo Barros em Palmas-TO. Tema: oferta de Landing Page de alta conversão a partir de R$499.

REFERÊNCIA DE ESTILO no slide 5: "mockup-hero bento" — celular centralizado com pílulas verde neon nos cantos. Demais slides usam variações coerentes com a paleta.

PALETA OFICIAL IMPULSO (USE EXATO, NÃO INVENTE):
- Fundo base: #0F0F0F (preto profundo)
- Profundidade: radial gradient sutil de #0F0F0F pra #0E2A1D (verde escuro) no canto superior direito
- Accent: #C8E82E (verde neon) — pílulas, CTAs, números, highlights
- Texto sobre verde neon: #0F0F0F (preto)
- Texto principal: #FFFFFF
- Texto secundário: rgba(255,255,255,0.6)

PROIBIDO: violeta, azul, cyan, Aurora gradient.

TIPOGRAFIA: Inter Black 800-900 (display, caps), Inter Medium 500 (body), Inter Bold 700 (números/destaques).

ARCO NARRATIVO E CONTEÚDO POR SLIDE:

SLIDE 1 — CAPA HERO (texto-dominante)
Topo: badge verde neon "IMPULSO DIGITAL · PALMAS-TO"
Headline GIGANTE branco caps: "5 ESTRELAS NO MAPS.\n0 SITE PROFISSIONAL."
Sub: "Tua reputação tá no Google. Mas o cliente novo busca no site."
Rodapé: "Arrasta →"

SLIDE 2 — A DOR (texto + stat)
Pergunta: "Quando alguém pesquisa 'TUA ESPECIALIDADE em Palmas' no Google…"
Stat HUGE em verde neon: "78%"
Sub: "dos cliques vão pros 3 primeiros resultados.\nSe tu não tá lá, tu não existe pro cliente novo."

SLIDE 3 — O CUSTO ESCONDIDO (lista de 4 sintomas)
Headline: "TÁ PERDENDO CLIENTE NOVO SE…"
4 itens com ✗ vermelho discreto:
✗ Tua bio do Insta vai pra Linktr.ee/Bio.site
✗ Tu não aparece no Google quando alguém te pesquisa
✗ Tu manda foto da agenda no WhatsApp pra fechar
✗ Concorrente com 4.5★ tá na frente porque tem site

SLIDE 4 — A SOLUÇÃO (apresentação do produto)
Headline: "LANDING PAGE\nQUE CONVERTE."
Sub: "Página única, otimizada pra Google, com WhatsApp integrado.\nFeita pra teu nicho. Em até 7 dias."
Badge verde inferior: "A PARTIR DE R$499"

SLIDE 5 — MOSTRA O PRODUTO (MOCKUP-HERO BENTO — ref Foxappy)
Headline topo: "TUA LP RODANDO ASSIM"
iPhone 15 Pro centralizado com mockup da LP da EV Suplementos Injetáveis (case real).
4 pílulas verde neon nos cantos (fundo #C8E82E, texto preto):
- Topo esq: "Aparece no Google"
- Topo dir: "Hospedagem vitalícia"
- Meio esq: "Domínio no TEU nome"
- Meio dir: "WhatsApp + Pixel integrados"

SLIDE 6 — O QUE VEM JUNTO (stack Hormozi)
Headline: "NO PACOTE DE R$499:"
Lista com ✓ verde neon (8 itens, peso 600):
✓ LP 8-10 seções otimizada
✓ Hospedagem VITALÍCIA (sem mensalidade)
✓ Domínio próprio no teu nome
✓ 3 artigos SEO no blog
✓ WhatsApp Business integrado
✓ Google Analytics + Meta Pixel
✓ Mobile-first (90% do tráfego)
✓ Suporte 30 dias + 7 dias garantia

SLIDE 7 — PROVA SOCIAL (4 cases)
Headline: "AGÊNCIA QUE VENDE DE VERDADE"
Grid 2×2 com 4 cards (cada um com mini-mockup ou logo):
- EV Suplementos Injetáveis (saúde estética)
- GB Nutrition (Shopify fitness)
- UrbanFeet (1.600+ vendas próprias)
- Criativos do Céu (infoproduto)
Badge inferior: "Cases reais. Sem inventar."

SLIDE 8 — CTA FINAL
Headline TOP caps: "VAMOS MONTAR\nA TUA?"
Card branco grande no centro com:
"📱 (63) 99292-0080
🌐 impulsodigital063.com"
Sub verde neon: "20 min de call eu te mostro o protótipo da TUA LP rodando"
Logo "Impulso · Digital" no rodapé.

REGRAS GERAIS:
- Mesmo padrão de fundo (preto + radial verde escuro) em todos os slides — coerência de marca
- Verde neon SEMPRE no destaque (números, badges, CTAs, ícones)
- Headlines sempre Inter Black 800-900 caps
- Muito respiro vertical, não lotar
- Mobile-first: testa legibilidade no preview pequeno

## Assistant

I'll create the 8-slide carousel. Let me explore the design system first and then build.

_[tool: list_files]_

_[tool: view_image]_

Design system is empty, so I'll work from the spec directly. The user gave very precise requirements (palette, typography, content per slide, layout reference). I have everything I need — building now.

_[tool: copy_starter_component]_

Now I'll build the carousel. The deck is 1080×1350 (4:5 Instagram). Let me write it.

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

Real issues to fix: S1 "PROFISSIONAL." overflows right; S7 cases bottom stat + foot-band overflow; S5 title overlaps top corner pills.

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

The remaining "0 SITE / PROFISSIONAL." overlap is a false positive — they're stacked vertically (different lines via `<br>`). The S5 sub-title overlapping corner pills is real — let me push the pills down further. The small font findings on chrome are intentional micro-type.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Remaining findings are false positives (chrome micro-type is intentional, "0 SITE / PROFISSIONAL." stacks via `<br>`).

_[tool: fork_verifier_agent]_

_[tool: snip]_

Carrossel pronto — 8 slides 1080×1350 com a paleta Impulso (preto + radial verde escuro, neon #C8E82E nos destaques), tipografia Inter Black/Bold, mockup-hero bento no slide 5 com pílulas neon nos 4 cantos, e arco narrativo Capa → Dor (78%) → Sintomas → Solução → Mockup → Stack → Cases → CTA.

## User

Send this design to Canva: Carrossel Impulso LP.html

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: tool_search_tool_bm25]_

Canva is connected. Let me prepare the bundle.I need to add the bundler thumbnail template to the copy.

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: super_inline_html]_

_[tool: snip]_

_[tool: get_public_file_url]_

_[tool: canva__import-design-from-url]_

_[tool: snip]_

Pronto — carrossel importado pro Canva.

**Abrir no Canva:** https://www.canva.com/d/3-O62aYleOjAQIH

