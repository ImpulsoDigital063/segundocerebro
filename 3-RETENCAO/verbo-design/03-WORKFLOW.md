# 03 · WORKFLOW · Verbo Design

> Passo a passo cravado de uma campanha · do briefing à pasta destino. Atualizado 16/05/2026.

---

## 🚦 Pipeline padrão (1 carrossel)

```
1. ENTENDIMENTO       (Eduardo cravar tema + ângulo)
       ↓
2. BRAND VOICE        (ler aura.ts / gb-nutrition.ts · existe?)
       ↓
3. ARCO AIDA          (mapear 5 slides Atenção→Interesse→Educação→Desejo→Ação)
       ↓
4. ASSETS             (fotos do cliente? Flux? remove.bg?)
       ↓
5. ROTA + COMPOSIÇÃO  (src/app/artes/<tema>/[slide]/route.tsx)
       ↓
6. DEPLOY             (vercel --prod --yes)
       ↓
7. EXPORT             (curl pra Desktop/post <cliente>/<campanha>/)
       ↓
8. CAPTION            (caption.txt com hashtags + instruções)
       ↓
9. ITERAR             (Eduardo aprova ou ajusta · refazer)
```

---

## 📋 Checklist por etapa

### 1 · ENTENDIMENTO
- [ ] Cliente cravado (Aura / GB / outro)
- [ ] Tema do post cravado (lançamento · educação · prova social · CTA)
- [ ] Ângulo cravado (autoridade · oferta · urgência · curadoria)
- [ ] Formato (carrossel 5 slides · post único · story · reel)

### 2 · BRAND VOICE
- [ ] Brand voice existe em `src/lib/brand-voice/`?
  - SIM → carregar como referência mental
  - NÃO → criar (~30min · mapear pilares + tom + vocabulário use/avoid/forbidden + patterns + 3 exemplos + 3 anti-exemplos)
- [ ] Paleta cravada (cores do logo · NÃO inventar dark zone genérica)
- [ ] Tipografia (Anton pra heroes · Inter pra body)

### 3 · ARCO AIDA
Mapear o que vai em cada slide ANTES de codar:
- **Slide 1 ATENÇÃO** · hook punchy (pergunta provocativa OU fato contraintuitivo · geo-específico)
- **Slide 2 INTERESSE** · explicação com analogia (leigo+expert)
- **Slide 3 EDUCAÇÃO** · prova visual (gráfico · cronograma · grid)
- **Slide 4 DESEJO** · caso real ou comparativo (cliente projeta-se)
- **Slide 5 AÇÃO** · CTA + voz primeira pessoa do fundador

### 4 · ASSETS
- [ ] Cliente tem foto/logo real? → usar
- [ ] Foto faltando? → Flux Dev (sob medida) ou Unsplash curado
- [ ] Foto com bg branco precisa virar cutout? → `npm run nobg`
- [ ] Mockup necessário (LP no celular)? → Flux ou screenshot puppeteer

### 5 · ROTA + COMPOSIÇÃO
- [ ] Criar `src/app/artes/<tema>/[slide]/route.tsx`
- [ ] Reusar helpers cravados (`LogoBlock`, `DotGrid`, `SlideIndicator`)
- [ ] Camadas mínimas (8+):
  1. Foto base
  2. Overlay gradient diagonal
  3. 2 glows cor de acento
  4. Cutout produto/elemento com sombra + glow (se aplicável)
  5. Stencil tipográfico decorativo
  6. Linha diagonal
  7. Frame angular "0X/05"
  8. DotGrid
  9. LogoBlock
  10. Conteúdo (texto + indicador)

### 6 · DEPLOY
- [ ] `vercel --prod --yes` (não conta com auto-deploy GitHub · não tá conectado)
- [ ] Aguardar Ready

### 7 · EXPORT
- [ ] `curl /artes/<tema>/<n>` × 5 slides
- [ ] Salvar em `Desktop/post <cliente>/<campanha>/slide-1.png` ... `slide-5.png`
- [ ] Mover versões antigas pra `_arquivo/` se reescrita

### 8 · CAPTION
- [ ] `caption.txt` na pasta com:
  - Caption Instagram (tom variação longa · arco AIDA narrativo)
  - 8-12 hashtags (geo + nichado + amplo)
  - Bloco "INSTRUÇÕES DE POSTAGEM" (ordem · horário · stories de apoio)
  - Bloco "PRÓXIMO POST" (sequência da campanha)

### 9 · ITERAR
- Eduardo aprova → marcar task completed · pasta limpa pra postar
- Eduardo reprova → aplicar `[[feedback-rejeicao-visual-perguntar-antes]]` · diagnóstico estruturado primeiro

---

## ⏱️ Tempos típicos cravados

| Etapa | Tempo |
|---|---|
| Entendimento + arco AIDA | 5-10min |
| Brand voice (NOVA · cliente novo) | 30-45min |
| Brand voice (carregar existente) | 1min |
| Geração de fotos Flux (4-6 imagens Dev) | 5-15min |
| Remove.bg em 4 produtos | 2min |
| Composição slide 1 (template novo) | 20-40min |
| Composição slides 2-5 (propagar) | 15-25min cada |
| Deploy + export + caption | 5-10min |
| **Carrossel completo do zero** | **2-4h** |
| **Carrossel iteração V2/V3** | **30-60min** |

---

## 🔁 Fluxo de iteração quando Eduardo reprova

```
Eduardo: "tá longe / não ficou bom"
     ↓
PARAR · não chutar ajuste
     ↓
Diagnóstico estruturado:
- Identidade visual?
- Composição/hierarquia?
- Copy?
- Realismo (foto + camadas)?
- Cor / dark / paleta?
     ↓
Ofertar 3-4 hipóteses via AskUserQuestion (max 4 opções)
     ↓
Eduardo prioriza UMA
     ↓
Executar a correção · mostrar
     ↓
Se cravou → propagar · se não → repetir diagnóstico
```

---

## 📦 Estrutura cravada da pasta destino

```
Desktop/post <cliente>/<campanha>/
├── slide-1.png        (pronto pra postar)
├── slide-2.png
├── slide-3.png
├── slide-4.png
├── slide-5.png
├── caption.txt        (caption + hashtags + instruções)
└── _arquivo/          (versões antigas · histórico)
```

**Pastas existentes:**
- `Desktop/post gb nutrition/carrossel-1-autoridade/` (GB lançamento V5)
- `Desktop/Posts Aura/carrossel-fio-b/` (Aura V11 · pasta nomeada diferente · próxima vai ser `post aura/`)

---

## 🆕 Quando o cliente é novo

Sequência cravada pra primeiro pacote de um cliente novo:

1. **Ler material existente** (segundo-cerebro/2-PROCESSAMENTO/<cliente>/)
2. **Cravar brand voice JSON** (~30min · pilares + tom + vocabulário + exemplos)
3. **Adicionar no registry** (`src/lib/brand-voice/registry.ts`)
4. **Coletar/gerar assets** (logo · fotos · produtos)
5. **Criar biblioteca Flux prompts** (`src/lib/image-prompts/<cliente>.ts`)
6. **Cravar identidade visual** no route.tsx (paleta · helpers reusáveis)
7. **Produzir Carrossel 1** seguindo pipeline padrão
8. **Documentar** em `04-DIARIO-APRENDIZADOS.md` e `05-PROJETOS-ENTREGUES.md`

---

**Ver também:** [[VERBO-DESIGN]] · [[01-STACK-FERRAMENTAS]] · [[02-PRINCIPIOS]] · [[05-PROJETOS-ENTREGUES]]
