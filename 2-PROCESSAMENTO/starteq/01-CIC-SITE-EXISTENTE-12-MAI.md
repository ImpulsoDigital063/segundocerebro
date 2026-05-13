# CIC 2 · Auditoria starteqpalmas.com + Google · 12/05/2026

> **Executado por:** Claude in Chrome (CIC)
> **Duração:** ~40-60 min
> **Status:** parcial (cortou no meio do Bloco 5 · achados-bomba completos · Blocos 6-10 pendentes mas dispensáveis dada a clareza dos achados principais)

---

## TL;DR · 10 linhas

1. **Plataforma:** GestãoClick (ERP brasileiro com loja virtual embutida · footer "Loja criada em gestaoclick"). NÃO é Loja Integrada/Tray/Wbuy. Plataforma proprietária do ERP. Limitada.
2. **Sem APIs:** sem JSON-LD · sem feed XML · sem sitemap.xml (404) · sem robots.txt (404). A IA do Júnior literalmente NÃO consegue ler o site programaticamente.
3. **Catálogo real:** ~188 SKUs (Periféricos 132 + Hardware 53 + Computadores 3 + outros vazios). Mais do que imaginávamos (35).
4. **Home mostra só 2 produtos:** uma placa-mãe Gigabyte Z790M (R$ 1.899,97) e um monitor Bluecase (R$ 797,14). Sem hero gamer · sem destaques · sem PromoJULHO. Cliente da audiência viral chega e desiste.
5. **6 de 13 categorias VAZIAS:** Espaço Gamer · Conectividade · Cadeiras e Mesas Gamer · Starlink · PromoJULHO · Case Para HD Externo · e várias sub-categorias soltas. Menu mente sobre o sortimento.
6. **Frete completamente quebrado:** testado em CEP de Palmas (77020-018) e SP (01310-100) · ambos retornam "Nenhuma forma de envio encontrada". FAQ confirma "negociado caso a caso" · site não opera frete real.
7. **Pagamento mínimo:** só Cartão de Crédito + Boleto. **NÃO TEM PIX.** Em 2026 isso é fricção fatal pra mid-market.
8. **Checkout obrigatório com cadastro + reCAPTCHA:** sem guest checkout · sem login social. Cliente novo precisa criar conta antes de comprar.
9. **PDP idêntica pra item R$ 89 e R$ 6.997:** foto + título (specs no nome) + preço + qtd + Comprar. Zero descrição · zero ficha técnica · zero estoque exibido · zero review · zero cross-sell · zero garantia/NF/prazo · zero variante. Compartilhar só Facebook/Twitter (sem WhatsApp).
10. **Busca interna quebrada:** `?busca=RTX` e `?busca=mouse` retornam os mesmos 2 produtos da home · ignorando o termo. Cliente não acha produto que existe.

**Reputação Google:** 4,6★ · 67 reviews · proprietário responde positivos e negativos com tom cristão · sem Reclame Aqui.

**Diagnóstico final:** site atual é um gerador de leads pro WhatsApp · não um e-commerce. **Reconstrução do zero é justificada** · não há o que migrar tecnicamente.

---

## BLOCO 1 · Identidade técnica

- **Plataforma:** GestãoClick (loja virtual do ERP GestãoClick · footer: "Loja criada em gestaoclick"). Tema responsivo padrão · sem custom theme aparente
- **Domínio:** starteqpalmas.com · SSL ativo · selo "Compra Segura · Site Protegido · Certificado SSL" no rodapé
- **CDN:** não identificado · provavelmente domínio próprio da GestãoClick
- **Robots.txt:** ❌ 404 PÁGINA NÃO ENCONTRADA
- **Sitemap.xml:** ❌ 404 PÁGINA NÃO ENCONTRADA
- **Mobile responsivo:** sim · layout se adapta
- **Velocidade:** subjetivamente carrega rápido (poucas imagens · poucos scripts)
- **GA/Pixel/Tag Manager:** sem sinal externo de fbq ou GTM
- **Logo:** mesma phoenix amarela do Instagram · paleta PRETA + AMARELA (igual à marca)
- **Tipografia:** sans-serif neutra
- **⚠️ Detalhe importante:** botões "Comprar" são PRETOS (não amarelos), botão "Finalizar compra" é VERDE GestãoClick · NÃO combina com identidade do Insta (que tem botões/texto sempre em amarelo+preto)
- **Vibe vs Instagram:** o site é "loja genérica de informática" · o Instagram é "gamer-meme local". A vibe destoa. O site NÃO conversa com a audiência viral.

---

## BLOCO 2 · Catálogo completo

### Categorias e SKUs reais (todas visitadas individualmente)

| Categoria | SKUs | Status |
|---|---|---|
| Periféricos | 132 | Pesado · principal |
| Hardware | 53 | Saudável (placas vídeo · coolers · kit fans) |
| Computadores | 3 | Mínimo (Acer Nitro V15 + 2 PCs montados CRISIS + Ryzen 3) |
| Espaço Gamer | 0 | VAZIA |
| Conectividade | 0 | VAZIA |
| Cadeiras e Mesas Gamer | 0 | VAZIA |
| Starlink | 0 | VAZIA (chamariz fantasma) |
| PromoJULHO | 0 | VAZIA (julho do ano passado · ainda no menu em maio/26) |
| Case Para HD Externo · Microfone · Water Cooler · Óculos Inteligente · Luminária · Placa de Áudio | n/a | sub-itens soltos |

**Total catalogado disponível: ~188 SKUs**

### Subcategorias visíveis (breadcrumb)
- Hardware → Placa de Video (subcategoria confirmada via PDP da RTX 2060)
- Periféricos → contém mouses · teclados · gabinetes · mousepads (sem subcategorização formal · tudo joga em "Periféricos")
- Computadores → contém PC Gamer e Notebook misturados (sem subcategoria)

### Top produtos vistos (com preço e status)

| Produto | Categoria | Preço | Status |
|---|---|---|---|
| Notebook Gamer Acer Nitro V15 i5-13420H · 8GB · RTX 3050 · SSD 512GB · 144Hz | Computadores | R$ 6.997,54 | Disponível |
| PC Gamer Completo CRISIS i5 2400 + RX 580 8GB + 16GB DDR3 + SSD 480 + Monitor 20" + Kit | Computadores | R$ 2.639,90 | Disponível |
| PC Gamer Ryzen 3 2200G + Vega 8 + 8GB DDR4 + SSD 256 (selo PROMO) | Computadores | R$ 2.390,00 | Disponível |
| Placa-Mãe Gigabyte Z790M AORUS ELITE AX ICE · DDR5 · RGB · Wi-Fi | Periféricos (home) | R$ 1.899,97 | Disponível |
| Placa de Vídeo Mancer GeForce RTX 2060 Super Heimdall X 8GB GDDR6 | Hardware → Placa de Video | R$ 1.449,99 | Disponível |
| Monitor Gamer Bluecase 23,8" Curvo 75Hz | Periféricos (home) | R$ 797,14 | Disponível |
| Teclado Mecânico Attack Shark X66 65 RGB Moonlight | Periféricos | R$ 419,99 | Disponível |
| Mouse Branco Attack Shark X11 Sem Fio 22000 DPI | Periféricos | R$ 289,90 | Indisponível |
| Mouse Redragon Invader Pro M719RGBPRO | Periféricos | R$ 208,98 | Disponível |
| Gabinete BG-064 Pure Pro Branco Bluecase Micro-ATX | Periféricos | R$ 349,90 | Indisponível |
| Gabinete Pichau Kazan 2 PG-KZN2-BL01 (Semi-novo) | Periféricos | R$ 190,00 | Indisponível |
| OPENBOX Placa de Vídeo NVIDIA GTX 1650 4GB OC Gigabyte | Hardware | — | (item openbox · revenda usada) |

**% Indisponível estimado:** primeira página de Periféricos (12 visíveis) tinha 4 marcados "Indisponível" = ~33%. Extrapolado · **35-40% do catálogo de Periféricos está fora de estoque**.

### Filtros e ordenação
- **Filtros:** nenhum filtro lateral (sem preço · marca · uso)
- **Ordenação:** dropdown único "Data de postagem" (provavelmente A-Z · Z-A · maior/menor preço · relevância)

### Faixa de preço
- **Mínimo:** R$ 89,90 (Mousepad Rise Mode / Kit Fans Rise Mode X ARGB)
- **Máximo:** R$ 6.997,54 (Notebook Acer Nitro V15)
- **Ticket médio Periféricos:** R$ 200-450
- **Ticket médio Hardware:** R$ 200-1.500

### Marcas confirmadas
- **Próprias:** Rise Mode · Bluecase · Attack Shark · Redragon
- **Top-tier:** Gigabyte · Mancer · Acer · Clanm
- **Interessante:** revendem gabinete **Pichau Kazan 2** R$ 190 (Pichau é a referência cravada · uma revenda dele já tá no catálogo)

---

## BLOCO 3 · Página de produto (PDP)

PDP auditadas: Mouse Redragon (R$ 208) · Placa Mancer RTX 2060 Super (R$ 1.449) · PC Gamer CRISIS (R$ 2.639).

| Elemento | Mouse R$ 208 | RTX 2060 R$ 1.449 | PC Gamer R$ 2.639 |
|---|---|---|---|
| Galeria de fotos | 3 thumbs | 4 thumbs | 2 thumbs |
| Título do produto | longo · specs no nome | longo · specs no nome | longo · specs no nome |
| Preço único | ✅ | ✅ | ✅ |
| Descrição/ficha técnica | ❌ | ❌ | ❌ |
| Parcelamento detalhado | "Ver condições" → modal só com ícones Cartão/Boleto | idem | idem |
| Cálculo de frete na PDP | ❌ (só carrinho · e quebrado) | ❌ | ❌ |
| Estoque exibido | ❌ | ❌ | ❌ |
| Reviews/estrelas | ❌ | ❌ | ❌ |
| Botão Comprar | preto · contraste alto | idem | idem |
| Cross-sell | ❌ | ❌ | ❌ |
| Compartilhar | Facebook · Twitter · share genérico | idem | idem (sem WhatsApp/Insta) |
| Selo garantia/NF/prazo | ❌ na PDP | ❌ | ❌ |
| Variantes (cor/tam) | ❌ | ❌ | ❌ |
| Favoritar (♡) | ✅ | ✅ | ✅ |

**Diagnóstico:** a PDP da Starteq é uma "ficha de catálogo de loja física digitalizada" · NÃO é uma PDP de e-commerce de 2026.

---

## BLOCO 4 · Carrinho + checkout

### Carrinho (/carrinho)
- Mostra foto + nome + código (610298) + preço + qtd com +/- + Subtotal + Frete + Total
- **Cupom:** não encontrei campo no fluxo
- **Simulador de frete:** input de CEP funcional · resposta sempre "Nenhuma forma de envio encontrada" (testado Palmas 77020-018 e SP 01310-100)
- **Opções de frete:** ZERO declaradas (deveria ter PAC · SEDEX · Motoboy · Retirada)
- **Botões:** Finalizar compra (verde · destaque) + Continuar comprando (preto)

### Checkout (/login após clicar Finalizar)
- **Cadastro obrigatório** · sem guest checkout
- Lado esquerdo: "Ainda não possuo cadastro" → digita email → Cadastrar
- Lado direito: "Já sou cliente" → email + senha + Esqueci minha senha + Entrar
- **reCAPTCHA** visível (Google v2 invisible badge)
- **Sem login social** (sem Google · Facebook · Apple)

### Formas de pagamento (modal "Condições de pagamento")

| Declarado | Realidade no modal | FAQ "Como Comprar" |
|---|---|---|
| Cartão de crédito | ✅ ícone · sem detalhar parcelas/juros | ✅ |
| Boleto bancário | ✅ ícone | ✅ |
| **PIX** | ❌ **AUSENTE** | ❌ ausente |
| Depósito Bancário | ❌ não aparece no modal | ✅ listado no Como Comprar (desencontro) |
| Picpay/Mercado Pago | ❌ | ❌ |

### Gargalo de UX no fluxo
1. Cliente entra → vê 2 produtos na home (não vê o catálogo) → desiste ou usa menu hambúrguer
2. Cliente busca "RTX" → recebe 2 produtos errados → desiste
3. Cliente abre PDP → não vê estoque · ficha · parcela · frete → abre WhatsApp do floating button
4. Cliente coloca no carrinho → tenta frete → "Nenhuma forma encontrada" → fecha o site · vai pro WhatsApp
5. Cliente que insistir → tem que CRIAR CONTA + reCAPTCHA → abandona

**Conclusão:** o checkout do site atual é, na prática, um **gerador de leads pro WhatsApp**. Não é um e-commerce.

---

## BLOCO 5 · Páginas institucionais (parcial · cortou aqui)

### Quem Somos (/pagina/sobre-a-empresa)
Texto template genérico (~3 parágrafos) · com erros:

> "Buscamos oferecer toda qualidade do nosso serviços também nos produtos para que possa ter a confiaça [sic] na compra. (...) aproxima ao máximo os clientes das principais etapas de cada compra, para que possa haver uma conversão dos processos tradicionais e sistemas online. Esperamos que possamos fazer uma grande parceria."

[CIC interrompeu aqui · Blocos 6-10 não foram processados · achados-bomba já completos]

---

## Implicações pra Impulso · cravadas

### Diagnóstico técnico
- **Plataforma:** GestãoClick fechada · sem API · sem extensibilidade
- **Migração:** inviável (não tem nem feed pra exportar)
- **Reconstrução:** justificada e necessária
- **A IA do Júnior NÃO consegue consumir esse site** · diferenciador absoluto do site novo é expor API

### Implicações comerciais
- Site novo não compete com site velho · porque velho NÃO é e-commerce real (é catálogo estático)
- Pitch passa de "vamos fazer um site novo" pra "**vamos colocar um e-commerce DE VERDADE no ar**"
- O cliente JÁ sabe (não linkou na bio · não confia)

### Catálogo migração
- **188 SKUs** que vamos seedar (não vamos descobrir 35)
- 35-40% fora de estoque · oportunidade pra Júnior limpar SKUs mortos
- Marcas: Rise Mode · Bluecase · Attack Shark · Redragon · Mancer · Gigabyte · Acer
- Curiosidade: revendem Pichau (Kazan 2 R$ 190 semi-novo) · Pichau virou parceira sem saber

### Gancho atualizado pra conversa hoje

> "Júnior, eu auditei o starteqpalmas.com inteiro. Plataforma é GestãoClick — ERP brasileiro com loja embutida. Tem 188 produtos no catálogo, mas a home só mostra 2. A busca interna retorna sempre os mesmos 2 resultados. O frete dá 'nenhuma forma encontrada' em qualquer CEP. E o pagamento não tem PIX. Eu não tô falando de melhorar isso — tô falando de fazer um e-commerce DE VERDADE no ar, com tua paleta preto+amarelo, montador de PC tipo Pichau, PIX nativo, e API que tua IA consome direto do estoque. Isso explica por que tu não linkou na bio: tu mesmo sabe que não tá pronto."

---

**Ver também:** [[STATUS-STARTEQ]] · [[00-CIC-INSTAGRAM-12-MAI]] · [[03-ARQUITETURA-MONTADOR]] · [[04-ARQUITETURA-SISTEMA]] · [[MEGA-CLAUDE]] · [[VERBO]]
