# AUDITORIA AQUARELLA PARK — REFERÊNCIA VISUAL PARA V3 DA LP CARRETINHA KIDS ALEGRIA

**URL auditada:** https://www.aquarellapark.com.br/
**Plataforma identificada:** Wix (Editor X / Wix Studio) — confirmado por classes `comp-*`, `wixui-*`, `data-motion-enter`, e domínio `video.wixstatic.com`.
**Altura total da página:** ~11.454px (página longa, scroll vertical contínuo).
**Data da auditoria:** 14/05/2026
**Auditor:** Claude for Chrome (sessão Eduardo)

---

## PALETA DE CORES (extraída via DOM)

| Cor | Hex | Onde aparece | Frequência |
|---|---|---|---|
| Vermelho-rosa (CTA / fundo seções) | **#EE5151** | botões, fundo Trampolim/Brinquedos/Neon/Social | alta |
| Amarelo "tinta escorrendo" | **#FFDC13** | header gota/splash, separador "drip" | média |
| Amarelo headline | **#E2E44C** (limão) | título "GASTRONOMIA EXCLUSIVA" | baixa |
| Laranja vibrante | **#FF9633** | títulos "Transforme a festinha…", "Decoração & Ambientação" | média |
| Amarelo dourado (CTA texto / footer headlines) | **#FFCB4D** | botão "Enviar", título "Fácil acesso…", contato | média |
| Cinza escuro (body / títulos neutros) | **#2F2E2E** | títulos "SÓ NO BUFFET INFANTIL…", "QUEM VEIO AMOU!" | alta |
| Cinza médio (body text) | **#605E5E** | parágrafos descritivos | dominante no body |
| Roxo profundo (footer) | **#220C32** | fundo do footer inteiro | alta (footer) |
| Roxo médio | **#3C0B61** | acentos no footer | baixa |
| Marrom-laranja | **#993500** | acento isolado | mínima |
| Branco | **#FFFFFF** | textos sobre fundo vermelho, hero | alta |

**Importante:** O **vermelho-rosa #EE5151** não é vermelho-tomate puro — tem leve tom rosado/coral. O laranja **#FF9633** é mais usado em headlines secundários que o amarelo. O amarelo #FFDC13 aparece quase só na "tinta escorrendo".

---

## TIPOGRAFIA (confirmação ao vivo)

- **Headline principal:** `futura-lt-w01-light, sans-serif` — Futura LT Light · geométrica, formas circulares puras, terminais retos.
- **Body:** `madefor-text` / `madefor-display-bold` / `madefor-display-extrabold` — família **Madefor** (Microsoft) parente próxima de Inter/Helvetica Neue.
- **Tracking:** títulos em caixa-alta com letter-spacing **alto** (~0.15–0.25em) — ex.: `S Ó   N O   B U F F E T   I N F A N T I L`.
- Pesos: títulos em **Light (300)** — cria a "leveza" geométrica característica. Body em peso regular.

---

## ELEMENTOS DECORATIVOS RECORRENTES (catálogo global)

1. **"Drip" / tinta-escorrendo amarela #FFDC13** sobre fundo vermelho — assinatura visual mais forte. Aparece no header (topo absoluto) e como SEPARADOR ENTRE SEÇÕES.
2. **Bordas "rasgadas" / paper-tear branca** — separa hero da seção seguinte. Beirada irregular tipo papel rasgado.
3. **Círculos abertos (rings/donuts) amarelos e laranjas** — bolinhas vazadas espalhadas em torno das fotos. Tamanhos variados, arranjo orgânico.
4. **Linhas finas onduladas brancas/laranjas (squiggles)** — contornos curvilíneos atrás das fotos. Funcionam como "moldura solta".
5. **Ondas SVG / waves de fundo** — padrão ondulações horizontais finas no header e no separador drip.
6. **Estrelas amarelas cheias** — apenas nos cards de depoimentos.
7. **Emojis nativos** — espalhados pelo body text (🎉🎈🎂✨🚀💧🤩🎨). Emojis do sistema operacional.
8. **Ícones lineares vermelhos/rosa** dos 6 diferenciais — linha fina, cor coral-rosa #EE5151, estilo "rascunho a mão".
9. **Balões físicos nas fotos** (não decoração vetorial).

**Não há:** confetes vetoriais animados, formas geométricas duras, gradientes ousados (só sólidos), partículas em movimento.

---

## MICROANIMAÇÕES (mecanismo)

**Sistema:** todas via `data-motion-enter` do Wix Studio (40 elementos com motionEnter rastreados). Mecânica padrão:
- **Trigger:** elemento entra na viewport (~80–90% do topo · meio-superior)
- **Efeito:** `fade-in` + leve `translate-y` (slide-up curto, ~20–40px) · Wix chama de "Fade In + Reveal"
- **Velocidade:** média (~600–900ms)
- **Easing:** ease-out suave · zero bounce · zero spring
- **Stagger:** SIM — ícones dos 6 diferenciais entram com delay sequencial esquerda→direita. Galerias também
- **Não há:** parallax forte, scroll-jacking, scrub animations, rotações 3D, scale-in dramático

---

## SEÇÃO POR SEÇÃO

### 1. HERO (0 → ~700px)
- Header sticky vermelho #EE5151 + tinta amarela escorrendo nas laterais · logo central · hambúrguer + pílula branca "Peça o seu orçamento" + WhatsApp circular
- **Vídeo MP4 autoplay/loop/muted de fundo** (festa Toy Story, ~40 adultos sorrindo)
- Headline branca light Futura, centralizada, 3 exclamações "!!!"
- Sem CTA dentro do hero, sem subtítulo
- Separador inferior: **borda branca paper-tear irregular**
- Microanimação: vídeo já roda no load · headline já visível no first paint

### 2. INTRO (~700 → 1.500px)
- Duas colunas · fundo branco
- Esquerda: título laranja #FF9633 Futura light + 4 parágrafos cinza com emojis
- Direita: foto trampoline com cantos arredondados e bordas rasgadas
- CTA pílula laranja-vermelho gradiente "Peça um orçamento" + WhatsApp
- Microanimação: fade-up com stagger texto→imagem (~200ms diff)

### 3. SEIS DIFERENCIAIS (~1.500 → 2.300px)
- Título centralizado caixa-alta cinza #2F2E2E letter-spacing alto: "S Ó   N O   B U F F E T   I N F A N T I L   A Q U A R E L L A   P A R K   V O C Ê   T E M"
- Grade 3×2 = 6 boxes:
  1. Espaço Amplo · ícone globo · título cinza
  2. Diversão Todas Idades · ícone megafone · título AMARELO #FFCB4D
  3. Ambiente Seguro · ícone coração-origami · título VERMELHO #EE5151
  4. Gastronomia · ícone planta/cardápio · título AMARELO LIMÃO #E2E44C
  5. Decorações · ícone 3 balões · título cinza
  6. Localização · ícone mapa+pin · título cinza
- **Ambiguidade:** cores dos títulos NÃO seguem padrão consistente
- Microanimação: stagger nítido · 6 boxes em sequência · ~100–150ms delay cada

### 4-8. SEÇÕES VERMELHAS COLORIDAS (~2.300 → 6.100px)
- **Fundo vermelho-rosa #EE5151 sólido contínuo** em 5 seções sequenciais (Trampolim, Brinquedos, Ambientes, Neon, Social)
- Alternam layout esquerda/direita: foto | texto OU texto | foto
- **Foto:** cantos arredondados grandes + molduras decorativas:
  - Círculos amarelos/laranja vazados ao redor (3-7 unidades)
  - Linha branca ondulada serpenteando (squiggle "doodle")
- **Texto:** título branco peso bold + parágrafos brancos com emojis + bullet list (algumas) + CTA pílula branca + WhatsApp vermelho
- Microanimação: fade-up com stagger ~200-300ms entre colunas

### 9. SEPARADOR DRIP AMARELO (~6.100 → 6.500px)
- **Transição visual mais marcante do site**
- Fundo vermelho termina · tinta amarela #FFDC13 escorre de cima pra baixo · formato orgânico com pingos
- Textura sutil de ondas/zigzag atrás
- Bolinhas amarelas vazadas como respingos
- Estático · sem animação

### 10. GALERIAS DE FOTOS (~6.500 → 9.000px)
- Volta fundo branco
- Título centralizado caixa-alta cinza Futura light letter-spacing alto: "A   M E L H O R   C A S A   D E   F E S T A   I N F A N T I L   …"
- 3-4 galerias temáticas sequenciais · cada uma com:
  - Sub-título laranja #FF9633 Futura light (não caixa-alta)
  - Bolinhas laranjas vazadas decorativas
  - Grade 4 fotos por linha · **cantos retos** (inconsistência com resto do site)
- Stagger entre tiles

### 11. DEPOIMENTOS (~9.000 → 9.700px)
- Fundo branco
- Título caixa-alta cinza "Q U E M   V E I O   A M O U !"
- 3×2 = 6 cards depoimento
- Cada card: **5 estrelas amarelas #FFCB4D** + nome caixa-alta sublinhado + parágrafo cinza
- Sem fotos dos autores · cards flat sem borda

### 12. CONTATO/FORMULÁRIO (~9.700 → 10.400px)
- **Fundo roxo profundo #220C32**
- Esquerda: título "C O N T A T O" branco + telefone, WhatsApp link, endereço
- Texto amarelo dourado #FFCB4D destacando WhatsApp
- Direita: form com fundo transparente · bordas brancas · cantos arredondados · inputs branco arredondados
- Botão "Enviar" pílula branca · texto amarelo dourado

### 13. MAPA (~10.400 → 11.200px)
- Continua fundo roxo
- Headline amarelo dourado #FFCB4D bold: "Fácil acesso e excelente localização…"
- Google Maps embed

### 14. FOOTER (~11.200 → 11.454px)
- Continua fundo roxo
- Instagram + texto amarelo dourado "Seja um seguidor pra ganhar bônus"
- Copyright branco
- **Ambiguidade:** copyright "© 2024" em site auditado em 2026

---

## DNA DO SITE (decisões a importar)

1. Fundo VERMELHO-ROSA #EE5151 sólido em seções "feature" + fotos com bordas arredondadas + molduras decorativas (círculos vazados + squiggles)
2. Headlines em **Futura Light**, caixa-alta, letter-spacing alto, centralizadas
3. Body em Madefor (≈ Inter/Plus Jakarta Sans), cinza médio sobre branco, branco sobre vermelho
4. CTAs em pílula totalmente arredondada · branco sobre vermelho OU gradiente laranja-vermelho sobre branco · ícone WhatsApp circular à direita
5. **Drip de tinta amarela escorrendo** como assinatura · separa header e blocos · marca visual mais memorável
6. Microanimações Wix `motion-enter` — fade + translate-y curto · ease-out · ~600–900ms · stagger em grids
7. Footer roxo profundo #220C32 com headlines amarelas #FFCB4D — contraste forte de fechamento

## O QUE NÃO IMPORTAR

- Inconsistência de cores dos títulos dos 6 diferenciais
- Cantos retos das galerias (vs arredondados do resto)
- Falta de hover states perceptíveis
- Copyright desatualizado
- **Emojis nativos no body text** (conflita com regra global Impulso "sempre SVG nunca emoji")
- "!!!" no hero · resto do site é mais comedido
- Logo sobreposto a respingo amarelo · legibilidade marginal

## AMBIGUIDADES OBSERVADAS

- Cantos retos × arredondados nas fotos
- Cor de título variando sem regra clara nos 6 diferenciais
- "Neon Moment" no nome mas sem efeito neon visual adicional
- Tom inconsistente (!!! no hero × comedido no resto)
