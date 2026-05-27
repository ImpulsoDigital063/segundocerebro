---
name: reference-workflow-face-swap-retrato-cliente
description: Workflow Flux 1.1 Pro + codeplugtech/face-swap pra gerar retrato editorial cinematográfico de cliente preservando rosto fidedigno · ~$0.16/par
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2d25a2dc-eb93-4396-88ab-448d26fd80d8
---

Quando cliente quer retrato editorial profissional mas só tem selfie/print, usar workflow de 2 etapas no Replicate:

**Etapa 1 · Cena base (Flux 1.1 Pro)**
- Modelo: `black-forest-labs/flux-1.1-pro`
- Input: prompt cinematográfico denso (warm tungsten · linho · luz lateral 45° · Aman/Bamford editorial · 4:5 vertical · low-key)
- Output: imagem com PESSOA GENÉRICA na composição certa
- Custo: ~$0.04
- **Importante:** prompt deve incluir características que ajudem o face-swap (idade aproximada, cabelo curto/longo, etnia, gênero · pra modelo gerar pessoa compatível)

**Etapa 2 · Face-swap (codeplugtech)**
- Modelo: `codeplugtech/face-swap:278a81e7ebb22db98bcba54de985d22cc1abeead2754eb1f2af717247be69b34`
- Inputs:
  - `swap_image`: foto SOURCE do cliente em base64 data URI · `data:image/jpeg;base64,...`
  - `input_image`: URL ou base64 da cena gerada na Etapa 1
- Output: cena com rosto do cliente preservado
- Custo: ~$0.12

**Custo total:** ~$0.16 por tentativa (R$ ~0,90)

**Script template:** `C:/Users/Usuario/vidaemequilibrio/scripts/gen-leandro.mjs`
- Tem flag `--skip-cena` pra reusar cena local se já gerada (economia se face-swap falhar)
- Tem tratamento de rate limit
- Salva intermediário em `public/img/{nome}-cena-base.jpg` e final em `public/img/{nome}-manifesto.jpg`

**Casos de uso:**
- Retrato editorial de proprietário/profissional pra seção "Quem cuida"
- Foto de equipe em ambiente premium (varia composição · mesmo rosto)
- Substituir foto stock de prospect demo · personalização Canva-level

**Quando NÃO usar:**
- Pessoa que tem foto profissional decente · usar a real (autenticidade > 100%)
- Cliente que vetou IA · respeitar
- Foto onde rosto será FRAMING principal (close extremo) · qualidade do swap cai em closes muito grandes

**Princípio com [[feedback-foto-pessoa-unsplash-nao-ia]]:**
- Regra geral: foto de pessoa em LP = Unsplash real (NUNCA IA generativa)
- **Exceção:** quando é o PRÓPRIO cliente · face-swap PRESERVA rosto real (não inventa pessoa) · permitido se cliente cravou
- Cliente sempre aprova antes de aplicar

Validado em: Vida em Equilíbrio (24/05/2026 · retrato editorial Leandro Timóteo · Manifesto).
