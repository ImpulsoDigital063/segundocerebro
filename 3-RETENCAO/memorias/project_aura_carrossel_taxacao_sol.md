---
name: project-aura-carrossel-taxacao-sol
description: "Carrossel Aura 9 slides \"Taxação do Sol\" sobre Lei 14.300. Iteração 28/05 padrão V11 (com watermark texto · descartado); iteração 29/05 padrão inspiração (numero top-left · foto direita · seta circular)."
metadata: 
  node_type: memory
  type: project
  originSessionId: 14cfa5f6-e628-4892-aea7-f6b13be5cf41
---

Carrossel 9 slides Aura Energy / Renato sobre "Taxação do Sol · Lei 14.300 · Fio B".

## Direção visual cravada 29/05/2026

Eduardo rejeitou v1 (padrão V11 do Fio B): watermark texto gigante atrás + DotGrid + número canto direito = visual cheio demais, distante da inspiração.

Padrão aprovado (v2 · do JPEG referência `Downloads/WhatsApp Image 2026-05-28 at 11.06.53.jpeg`):
- Número grande em **quadrado top-left** (amarelo em dark / navy em light)
- Logo Aura **top-right** compacta
- Imagem/foto temática **ocupando metade direita** com mask gradiente fade-out
- **Seta circular** bottom-right (única, não pílulas)
- Watermark logo Aura sutil bottom-left (não texto gigante)
- **Sem DotGrid · sem watermark tipográfico**
- Layout 2 colunas: copy esquerda · visual direita
- Só capa fundo navy · slides 2-8 cream

## CTA cravado (slide 9)

- Foto Renato (`Downloads/IMG_9326.jpg (1).jpeg` · ele com troféu Huawei Parceiro Destaque · copiada pra `auraenergy/public/renato.jpg`)
- URL **auraenergypalmas.com/orcamento** — descoberta lendo arquivos do auraenergy: page title "Calculadora de Economia Solar · Aura Energy"
- Outras rotas confundem: /diagnostico é form pré-reunião (noindex) · /economia-resultado é resultado do form · só **/orcamento** é a calculadora pública

## Pipeline técnico

- Rota Edge `auraenergy/src/app/artes/taxacao-sol/[slide]/route.tsx`
- ImageResponse Next 16 + Anton TTF Google Fonts
- Dev server `PORT=3031 npm run dev` no auraenergy (porta 3030 travou — usar 3031 a partir de agora)
- Render: `curl http://localhost:3031/artes/taxacao-sol/N`
- Saída: `Desktop/Posts Aura/carrossel-taxacao-sol-28-05/slide-N.png` (1080x1080 PNG)
- Cópia versionada: `segundo-cerebro/2-PROCESSAMENTO/aura-energy/carrosseis/taxacao-sol-28-05/`

## Substituições emoji → SVG cravadas (regra `feedback_sempre_svg_nunca_emoji`)

- ☀️ → SunRayIcon SVG
- ✅ → CheckIcon SVG verde
- ❌ → XCircle SVG vermelho
- ⚠️ → WarningIcon SVG triângulo
- 📲 → WhatsIcon SVG verde WhatsApp
- 🏠 → HouseIcon SVG
- 🔌 → PoleIcon · CableIcon · WrenchIcon SVGs
- (Caption do post mantém emoji original do Renato — é texto, não imagem)

## Estado em 29/05/2026

- ✅ Slide 1 v2 renderizado e aprovado por Eduardo
- ⏳ Slides 2-9 pendentes (mesma rotina · placeholders na rota atual)
- ⏳ Slide 9 precisa: foto Renato + texto "manda foto da conta na calculadora" + URL auraenergypalmas.com/orcamento

Ver também: [[reference-stack-design-aura]] · [[reference-posts-aura-pasta-destino]] · [[feedback-arco-aida-carrosseis]] · [[feedback-sempre-svg-nunca-emoji]] · [[reference-verbo-design-codebase]]
