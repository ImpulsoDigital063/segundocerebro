# Benchmark · 5 lojas brasileiras de cabelo/cosmético

Análise visual completa via CIC (navegador real) · 14/05/2026. Norte pra customização do **tema Shopify** da Viva Cacheada quando a Leticia for ativar a loja.

> Eduardo cravou: loja Next foi descartada · loja vai pra Shopify ($19/mês depois do trial). Este doc é referência pra customização do tema, não pra dev.

---

## 1. Posicionamento no espectro Aesop ↔ Natura

```
AESOP ───────────────────────────────────────── NATURA
│
│ Granado → Truss → Sallve → Salon Line → Beleza na Web
│
editorial    clínico-      boutique         mass            marketplace
heritage     técnico       científico       lifestyle       denso
zero badge   tags estr.    reviews          % OFF rosa      PIX-diamante
silêncio     glam celebrity educativo       crochê pop      múltiplos sellers
```

## 2. Detalhamento por marca

### Granado (Aesop puro · não usar)

- **Paleta:** verde botânico `#1F4A3A` + dourado `#C4A557` + rosa pálido `#F4D5D0` + creme + preto
- **Tipografia:** serif clássica (Garamond/Cormorant) + tagline heritage
- **Mood:** editorial premium centenário · farmácia-boutique vintage
- **PDP:** preço cheio sem riscado · "Seja o primeiro a avaliar" · zero badge · galeria editorial flat-lay
- **CTA:** "ADICIONAR" preto sólido com sacola
- **Não copiar:** ticket R$300+ permite ausência de gatilhos · Viva R$50-90 não aguenta

### Truss Professional (gêmeo estrutural AC · referência principal)

- **Paleta:** bege/nude `#D6CDBE` + preto + cinza grafite + roxo vinho `#5B1F3A` (Color Shield) + branco
- **Tipografia:** sans moderna (logo TRUSS bold + "PROFESSIONAL" condensed) + cursiva "dias de Beleza" co-brand Boticário
- **Mood:** clínico-técnico premium com embaixadora celebrity (Marina Ruy Barbosa)
- **PDP destaques:**
  - Galeria à esquerda · info estruturada à direita
  - Bloco preço em card cinza: original riscado + badge `-X%` preto + preço atual gigante + parcelamento "10x R$ X,XX"
  - CTA "Comprar" azul-grafite `#3D4456` com ícone sacola
  - **Cupom destacado primeira compra** "Ganhe 10% OFF · NEW10 · Copiar cupom"
  - Tags estruturadas: Condição dos Fios · Cronograma Capilar (Nutrição/Reconstrução) · Tamanho · Linha · Propriedades
  - Card "Itens desse Kit" com mini-cards de cada produto com preço individual
- **Sinais a importar:** embaixadora celebrity hero · tags estruturadas técnicas · cupom destacado minimalista · paleta sóbria · ausência de PIX-bolão

### Sallve (ajuste de comportamento pra ticket médio · referência complementar)

- **Paleta:** branco + turquesa `#20B2AA` + rosa pastel + cinza claro + preto
- **Tipografia:** sans-serif moderna semi-bold
- **Mood:** boutique científico-educativo · "evidência dermatológica" + comunidade
- **PDP destaques:**
  - Reviews proeminentes "1253 reviews" com estrelas + cards de depoimento
  - Preço original riscado + promocional preto bold + parcelamento "3x R$ 46,63" + desconto explícito "-R$ 20"
  - Frete grátis banner fixo "acima de R$139 🚚"
  - Quiz interativo da pele como entry-point comunitário
  - Ícones de benefícios (vegano, frete, atendimento, pagamento seguro)
- **Sinais a importar:** reviews proeminentes · preço com riscado+atual+parcelamento explícito · frete grátis banner · quiz como porta de entrada

### Salon Line (mass pop · referência negativa)

- Crochê amarelo + rosa choque · % OFF rosa em todo card · ícones de stories · kits + outlet
- **Não copiar:** energia pop tira o ticket premium · não combina com posicionamento Viva

### Beleza na Web (marketplace · referência negativa)

- Roxo `#7E2BB8` + dourado · PIX com ícone diamante super destacado · múltiplos sellers no SKU · QR code app
- **Não copiar:** marketplace denso · Viva é marca única boutique

---

## 3. Norte visual pra Shopify Viva Cacheada (síntese)

**Receita = Truss (estrutura) × Sallve (gatilhos de ticket médio):**

| Dimensão | Decisão |
|---|---|
| **Paleta** | Sóbria 2-3 cores: neutra base (nude/off-white) + acento de marca (bordô da identidade Viva) + preto/grafite pra texto |
| **Tipografia** | Sans editorial (não serif heritage Granado) · pesos 400/600/700 |
| **Hero** | Modelo cacheada real (não stock) · co-branding AC Professional como Truss faz com Boticário |
| **CTA** | Cor sólida única e consistente · "Adicionar à sacola" ou "Comprar" |
| **Preço** | Original riscado pequeno + atual bold grande + badge `-X%` discreto + parcelamento explícito |
| **PIX/Frete** | Sinalizados mas com tratamento de tag/badge minimalista (não bolão dourado · não diamante estridente) |
| **Reviews** | Visíveis no card + proeminentes no PDP (modelo Sallve com depoimentos) |
| **Cupom primeira compra** | Destacado modelo Truss NEW10 (card cinza + botão "Copiar") |
| **Tags PDP** | Estruturadas modelo Truss: tipo de cabelo · etapa cronograma · condição · marca · linha |
| **Cross-sell** | "Aproveite e leve também" estilo Truss/Salon Line minimal |
| **Anti-padrões** | Zero crochê · zero stories · zero múltiplos sellers · zero PIX-diamante · zero serif heritage Granado |

---

## 4. Inacessível

**By Maju** (`bymaju.com.br`) retornou `DNS_PROBE_FINISHED_NXDOMAIN`. Pode estar descontinuado/migrado. Se relevante depois, checar Instagram dela pra domínio atual.

---

## 5. Quando ativar a loja Shopify

1. Eduardo escolhe tema base (UrbanVision já é uma boa base, é o que ele usou no GB Nutrition)
2. Customizar paleta pra Viva Cacheada (bordô da identidade institucional + neutro Truss)
3. Tipografia editorial sans (DM Sans ou similar)
4. Cupom Rainha automático na primeira compra
5. Tags estruturadas modelo Truss
6. Reviews app (AReviews ou similar) com depoimentos no PDP
7. Integração com PWA Next (via Shopify Storefront API · link da etapa → PDP com cupom Rainha pré-aplicado)
