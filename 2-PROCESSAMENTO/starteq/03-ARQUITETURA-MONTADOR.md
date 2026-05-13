# Arquitetura · Montador de PC Starteq

> **Status:** rascunho pré-CIC 2 + 3 · refinar após Eduardo entregar CICs
> **Data:** 12/05/2026 (madrugada)
> **Decisão pendente:** HTML standalone (opção A · disco no limite) vs Next.js (opção B · após limpar disco)

---

## Função do montador

Permitir que cliente do Júnior (ou IA dele) monte um PC custom escolhendo componentes COM VALIDAÇÃO DE COMPATIBILIDADE em tempo real, gerando um orçamento final que vai pro WhatsApp do Júnior ou pro carrinho.

Replica a experiência **PICHAU** (referência cravada).

---

## Fluxo do usuário (5 passos)

```
Passo 1 · Processador (CPU)
   ↓ define plataforma (AMD AM4/AM5 ou Intel LGA1700/1851)
Passo 2 · Placa-mãe (Mobo)
   ↓ filtra por socket compatível + tipo RAM (DDR4/DDR5)
Passo 3 · Memória RAM
   ↓ filtra por tipo (DDR4/DDR5) + slots disponíveis
Passo 4 · Placa de vídeo (GPU)
   ↓ define TDP estimado total
Passo 5 · Fonte
   ↓ filtra por wattage >= TDP total + 30% margem
   ↓ filtra por certificação (80 Plus Bronze · Gold · Platinum)

[Resumo] · total + parcelamento + CTA WhatsApp Júnior
```

Opcionais (fase 2):
- SSD/HD · Gabinete · Cooler · Monitor · Periféricos

---

## Regras de compatibilidade (MVP)

### CPU ↔ Mobo
- AMD Ryzen 5000 series → socket AM4
- AMD Ryzen 7000/8000/9000 series → socket AM5
- Intel 12ª/13ª/14ª gen → socket LGA 1700
- Intel Core Ultra (Arrow Lake) → socket LGA 1851

### Mobo ↔ RAM
- AM4 + Intel 12ª-13ª → DDR4 (algumas LGA1700 aceitam DDR5)
- AM5 + Intel 14ª/15ª → DDR5

### TDP ↔ Fonte (regra simplificada)
- TDP total = TDP_CPU + TDP_GPU + 100W (resto)
- Fonte mínima = TDP total × 1.3 (margem 30%)
- Sugerir 80 Plus Gold pra builds > R$ 5.000

### Gabinete (fase 2)
- ATX vs micro-ATX vs mini-ITX → form factor da mobo
- Comprimento da GPU
- Cooler height máxima

---

## Mock data (catálogo inicial · 25 SKUs)

Pra fase 1 (mostrar amanhã ao Júnior), 25 SKUs cobrem ~80% dos cenários:

### CPUs (6 unidades)
- AMD Ryzen 5 5600 · AM4 · R$ 690
- AMD Ryzen 5 7600 · AM5 · R$ 1.290
- AMD Ryzen 7 5700X · AM4 · R$ 1.150
- AMD Ryzen 7 7700 · AM5 · R$ 2.190
- Intel Core i5-12400F · LGA1700 · R$ 890
- Intel Core i5-14400F · LGA1700 · R$ 1.190

### Placas-mãe (6)
- ASRock A520M HVS · AM4 · DDR4 · R$ 449
- ASUS B550M-K · AM4 · DDR4 · R$ 690
- ASRock B650M-HDV/M.2 · AM5 · DDR5 · R$ 1.290
- ASRock H610M-HDV · LGA1700 · DDR4 · R$ 549
- ASUS Prime B760M-A · LGA1700 · DDR5 · R$ 990
- Gigabyte B650M Aorus Elite · AM5 · DDR5 · R$ 1.490

### RAM (4)
- Kingston Fury Beast 16GB DDR4 3200 · R$ 290
- Corsair Vengeance 16GB DDR4 3600 · R$ 350
- Kingston Fury Beast 16GB DDR5 5200 · R$ 390
- Corsair Vengeance 32GB DDR5 6000 · R$ 890

### GPUs (5)
- RTX 4060 Galax · TDP 115W · R$ 2.290
- RTX 4060 Ti Asus Dual · TDP 165W · R$ 3.190
- RTX 4070 Super MSI · TDP 220W · R$ 4.690
- RTX 5060 Ti Galax · TDP 180W · R$ 3.890
- RTX 5070 Palit GameRock · TDP 250W · R$ 5.890

### Fontes (4)
- Corsair CV550 · 550W · 80+ White · R$ 290
- Corsair CV650 · 650W · 80+ Bronze · R$ 390
- Corsair RM750e · 750W · 80+ Gold · R$ 790
- Corsair RM850x · 850W · 80+ Gold · R$ 1.090

---

## Stack técnica · 2 opções

### Opção A · HTML standalone (recomendada pra hoje)
- 1 arquivo `montador-starteq.html`
- Tailwind via CDN
- JavaScript vanilla com mock data inline
- LocalStorage pra salvar progresso
- WhatsApp link pre-filled com resumo
- Deploy: Vercel (drag and drop · 30 segundos)
- Sem build · sem node_modules · sem dependências
- **Footprint:** ~80KB

### Opção B · Next.js 16 (pós PC novo)
- App Router · React 19 · TypeScript
- Tailwind v4
- Mock data em `lib/catalog.ts` (futuramente · Supabase)
- API routes: `/api/products`, `/api/stock`, `/api/recommend`
- Deploy: Vercel
- **Footprint:** ~500MB com node_modules · build ~5MB

**Decisão atual:** A · disco com 3.5GB livre não comporta B com segurança. Migra pra B amanhã quando PC novo chegar (480GB SSD novo).

---

## Paleta visual (cravada do CIC 1)

```css
--starteq-black: #0A0A0A    /* fundo principal · logo */
--starteq-gold:  #F5C518    /* Phoenix amarelo dourado · CTAs · destaques */
--starteq-bone:  #FAFAFA    /* texto sobre preto · cards */
--starteq-coal:  #1A1A1A    /* cards sobre fundo · seções */
--starteq-line:  #2A2A2A    /* bordas · divisores */
--starteq-muted: #9A9A9A    /* texto secundário */
```

**Tipografia:**
- Headings: Inter Bold/Black ou similar gamer (testar Rajdhani · Orbitron)
- Body: Inter Regular/Medium
- Mono: JetBrains Mono (preços em destaque)

**Vibe:** dark · gamer · agressivo MAS profissional (referência Pichau · não MercadoLivre)

---

## API consumível pela IA do Júnior (cravado)

Endpoints documentados (fase 2 · Next.js):

```
GET /api/products
  → catálogo completo paginado

GET /api/products/:sku
  → produto único

GET /api/stock/:sku
  → estoque em tempo real

GET /api/recommend?budget=2500&use=jogos&prefer=amd
  → recomendação de build compatível

POST /api/quote
  → recebe lista de SKUs · retorna build validado + total + link WhatsApp
```

JSON estruturado pra IA dele consumir direto · documentado em OpenAPI schema.

---

## Pendências antes do build

1. Output do CIC 2 (site existente) · pra validar se preserva alguma estrutura
2. Output do CIC 3 (Pichau dissecada) · UX detalhado do montador
3. Decisão final Eduardo: HTML standalone OU limpar disco pra Next.js
4. Logo Starteq real (extrair do Insta ou pedir ao Júnior)
5. Lista de marcas reais que o Júnior vende (parte do CIC 2)

---

**Ver também:** [[STATUS-STARTEQ]] · [[00-CIC-INSTAGRAM-12-MAI]] · [[MEGA-CLAUDE]] · [[VERBO]] · [[lp-design-system-dark]]
