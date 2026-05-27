# Referência técnica · Tema UrbanVision (Warehouse modificado por Eduardo)

Estudo do zip `UrbanVision- Exclusivo MPN-On.zip` · descompactado em `vivacacheada/.tema-ref/`. Mapeamento de padrões que vão ser traduzidos em componentes Next.js mantendo a identidade Viva Cacheada (bordô/creme/dourado · Cormorant + Allura + DM Sans · "Rainha" · "Não é moda, é identidade").

> O tema é Liquid puro (Shopify). Não vai rodar como-é. Extraio **UX/UI/organização**, não código.

---

## 1. Estrutura geral do tema

| Pasta | O que tem |
|---|---|
| `assets/` | theme.css · theme.js (~9000 linhas) · custom.js · shipping-calculator.js |
| `layout/` | theme.liquid (esqueleto base) |
| `sections/` | 35+ seções (header, footer, product-template, collection-template, cart-template, slideshow, mosaic, featured-collection, newsletter, etc.) |
| `snippets/` | 20 snippets (product-info, product-gallery, mini-cart, mega-menu, mobile-menu, salesbox-common, whatsapp-button, etc.) |
| `templates/` | 25 templates incluindo product.quick-view, product.pre-order, product.contact |
| `config/` | settings_schema.json (estrutura de config) + settings_data.json (valores) |

---

## 2. Schema de configurações (24+ cores customizáveis)

### Cores · grupos
- **Geral:** títulos, body, acento, links, bordas, BG, BG secundário, erro, sucesso
- **Botão primário** e **secundário** (BG + texto cada)
- **Rodapé** (BG + texto)
- **Cabeçalho** (BG + texto + texto secundário + acento)
- **Produtos (10 específicas):**
  - Barra economize · Cor do preço · Cor do preço riscado
  - Títulos das informações · Em estoque · Baixo estoque · Sold out
  - Custom label 1 BG · Custom label 2 BG · Review star

### Mapeamento pra Viva Cacheada

| Campo do tema | Valor pro Viva |
|---|---|
| `heading_color` | `#2A1A14` (ink) |
| `text_color` | `#5A3F35` (ink-soft) |
| `accent_color` | `#B8893A` (gold) |
| `link_color` | `#6B1818` (bordo) |
| `border_color` | `#E0D2BC` (line) |
| `background` | `#F0E4D3` (cream) |
| `secondary_background` | `#FFFFFF` (paper) |
| `primary_button_background` | `#6B1818` (bordo) |
| `secondary_button_background` | `#B8893A` (gold) |
| `header_background` | `#FAF3E6` (cream-soft) ou `#6B1818` (bordô) |
| `footer_background` | `#6B1818` (bordo) |
| `product_on_sale_accent` | `#B85C3F` (terracota) |
| `product_cor_do_preco` | `#6B1818` (bordo) |
| `product_in_stock_color` | `#8E6520` (gold-deep) |
| `product_low_stock_color` | `#B85C3F` (terracota) |
| `product_star_color` | `#B8893A` (gold) |

### Tipografia
Tema usa Helvetica default. **Viva mantém Cormorant Garamond (display) + Allura (script) + DM Sans (body)** — não substituir.

---

## 3. Página de produto · estrutura Eduardo customizou

### 3.1 Meta superior (acima do título)
- `<span>Novo | {{ random }} Vendidos</span>` · número aleatório derivado do `product.id`
- `<span>Cód. Item {{ product.id / 220022 }}</span>` · código fake
- `<span>Disponível em estoque.</span>` · em azul claro

### 3.2 Título e reviews
- `<h1>{{ product.title }}</h1>` Cormorant grande (no Viva)
- Stars de review (app Aliexpress Reviews integrado)
- Labels customizados via tag `__label1:Texto` e `__label2:Texto` → pills coloridas

### 3.3 Preço
- Preço riscado em cima (compare_at_price)
- Preço de venda destacado (highlight color verde no original · bordô no Viva)
- Badge `-X%` ao lado · ou `R$ X de desconto` pill amarela
- **"Em até 12x de R$ X"** com cálculo `price * 1.2161 / 12`
  - Multiplicador `1.2161` é a taxa do cartão configurada
  - Pra Viva: avaliar manter ou trocar pra "PIX 10% off"

### 3.4 Variantes (4 modos)
| Modo | Visual | Uso |
|---|---|---|
| `color` | Color swatches circulares | Cor/Cores |
| `variant` | Image swatches (mini-thumb) | Cor com imagem distinta |
| `block` | Botões retangulares | Tamanho, dias de tratamento |
| `select` | Dropdown nativo | Fallback |

Eduardo expandiu o label-detection pra incluir: `cor,cores,opção,quantidade,dias,uso,dias de tratamento`. **Pro Viva**, adicionar: `tipo de cabelo,tamanho,volume`.

### 3.5 Estoque (3 estados visuais)
- Em estoque: verde (Viva: dourado-deep)
- Estoque baixo: vermelho (Viva: terracota) · "Restam X unidades"
- Sold out: cinza
- **Inventory bar** (barra de progresso) com `__stock:N` tag

### 3.6 Quantidade
- Input `-` `1` `+` (já replicado no carrinho do Viva)

### 3.7 Calculadora de Frete (customização do Eduardo · CORE)
- Input CEP + botão "Calcular" verde
- Bloco "Entrega Local (Motoboy)" com SVG do caminhão + texto + valor verde
- Rates regionais (Sul/Sudeste/Centro-Oeste/Nordeste/Norte) configuráveis
- JS em `assets/shipping-calculator.js`
- **Pra Viva:** trazer integral, trocar verde → bordô, manter motoboy Palmas

### 3.8 Badges trust (abaixo do CTA)
```
{SVG} Devolução grátis. Você tem 7 dias a partir da data de recebimento.
{SVG} Mais vendido entre os produtos da coleção.
```
Dois badges com SVG ícone à esquerda + texto bold "highlight-text" + complemento.

### 3.9 CTA principal
- Botão "ADICIONAR AO CARRINHO" full-width, fonte 19px, `button--primary`
- Estado disabled "Esgotado" quando `selected_variant.available == false`
- AddToCart hook JS dispara mini-cart drawer

### 3.10 Compartilhamento social (opcional)
- Facebook · Pinterest · Twitter · Email · ícones SVG

---

## 4. Página de coleção

### 4.1 Configurações de grade (settings)
- Mostrar frete grátis (banner cor configurável)
- Mostrar vendor (marca)
- **Mostrar imagem secundária ao passar o mouse** ← gesto importante
- Mostrar desconto (porcentagem ou "salvo")
- Position do preço (antes/depois título)
- Image size (natural · short 4:3 · square 1:1 · tall 2:3)
- Show color swatch
- Show inventory + low inventory threshold
- Show reviews badge

### 4.2 Filtros laterais (Shopify nativos + customizações)
- Coleção · vendor · tipo · preço · disponibilidade
- Checkbox + "Filtros (X)" contador + "Limpar"

### 4.3 Ordenação
- Dropdown topo: A-Z · Preço asc/desc · Mais vendidos · Mais recentes
- Itens por página (24/36/48)

### 4.4 Paginação
- Numerada (não infinite scroll por padrão)
- Snippet `snippets/pagination.liquid`

---

## 5. Carrinho

### 5.1 Tipo configurável: `drawer` (padrão) ou `page`
- **Pro Viva: usar drawer** (modal lateral) — mais moderno, mantém contexto

### 5.2 Free shipping threshold
- Barra de progresso "Faltam R$ X pra frete grátis"
- Configurável via `cart_free_shipping_threshold`

### 5.3 Estrutura do item no drawer
- Thumb + título + variantes + qtd ± + preço + remover
- Subtotal + CTA "Finalizar compra"

---

## 6. Outras seções relevantes pra Viva

### 6.1 announcement-bar
- Banner topo · texto + link configurável
- **Gradiente customizável** (`background1` → `background2`)
- Texto position (left/center)
- Pro Viva: "Frete motoboy expresso em Palmas · entrega no mesmo dia" em bordô gradiente

### 6.2 mosaic
- Grid de 4 imagens hero com texto sobre cada
- Bom pra home

### 6.3 slideshow
- Carousel hero com slides
- Pode substituir o hero atual da home

### 6.4 featured-collection
- Carrossel ou grid de uma coleção em destaque
- Bom pra "Selecionados pela Leticia"

### 6.5 product-recommendations
- "Você também pode gostar" abaixo da página de produto
- Shopify recommendations engine — pro Viva, mockar manual

### 6.6 recently-viewed-products
- "Você viu recentemente"
- localStorage based · pode ser replicado em Next

### 6.7 areviews-section
- App externo Aliexpress Reviews
- Pro Viva: mock de reviews ou integração com Trustpilot futuro

### 6.8 whatsapp-button (snippet)
- Botão flutuante bottom-right · número + mensagem padrão + tooltip
- **TRAZER** pra Viva (link direto da Leticia, sempre visível)

---

## 7. JS / interações

| Arquivo | Função |
|---|---|
| `theme.js` (9000+ linhas) | Drawer, swatches, image zoom, sticky, AJAX cart, mini-cart open/close, search overlay, mega-menu, mobile-menu |
| `custom.js` | Customizações do Eduardo |
| `shipping-calculator.js` | Calculadora de frete (Yampi/Correios + rates regionais) |

**Animações nativas do tema:**
- Image zoom on hover (configurável)
- Card hover sutil
- Drawer slide-in
- Smooth scroll
- Sticky header opcional

---

## 8. Plano de adaptação pro Viva Cacheada

### Fase A · página de produto (prioridade Eduardo)
- [ ] Galeria com thumbnails + zoom on hover
- [ ] Microcopy "Novo | X Vendidos" + "Cód. Item" + "Em estoque"
- [ ] Preço com riscado + parcelamento 12x (ou PIX desconto)
- [ ] Variantes (color/variant/block/select) — Viva começa com block (tipo cabelo, tamanho)
- [ ] Estoque visual (3 estados) + inventory bar opcional
- [ ] Quantidade ± (já tem)
- [ ] **Calculadora de frete** integral (CEP + bloco motoboy Palmas)
- [ ] Badges trust (Devolução grátis · Recomendado pela Leticia)
- [ ] CTA "Adicionar ao carrinho" full-width
- [ ] Descrição expandida
- [ ] Reviews mock
- [ ] Produtos relacionados

### Fase B · coleção
- [ ] Filtros laterais (etapa, sintoma, marca)
- [ ] Ordenação topo (A-Z, preço, mais vendidos)
- [ ] Imagem secundária no hover dos cards
- [ ] Badges custom (Recomendado / Mais vendido das Rainhas)
- [ ] Paginação numerada

### Fase C · carrinho drawer
- [ ] Drawer lateral em vez de página
- [ ] Free shipping threshold com barra de progresso
- [ ] Cross-sell "Combina com"

### Fase D · features globais
- [ ] Announcement bar com gradiente bordô
- [ ] WhatsApp flutuante bottom-right
- [ ] Recently viewed (localStorage)
- [ ] Mega-menu desktop (se nav crescer)
- [ ] Mobile menu drawer

---

## 9. Aguardando complemento

CIC vai depurar **https://gbnutrition.online** (loja em produção feita com esse tema) com DOM tree + classes + animações reais em uso. Quando voltar, cruzo:
- Tema decodificado (estrutura/intenção) +
- Loja em produção (execução visual concreta) +
- Identidade Viva Cacheada (bordô/creme/dourado/Cormorant)

= componentes Next.js definitivos.
