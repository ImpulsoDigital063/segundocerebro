# Carrossel Aura · Taxação do Sol · 28/05/2026

**Cliente:** Renato — Aura Energy / Brasfrio Solar (Palmas-TO)
**Origem:** roteiro WhatsApp Renato · inspiração visual `Downloads/WhatsApp Image 2026-05-28 at 11.06.53.jpeg`
**Pipeline:** auraenergy Next.js · rota `/artes/taxacao-sol/[1-9]` · ImageResponse Edge

## Slides

| # | Modo | Hook principal | Watermark | Tema |
|---|---|---|---|---|
| 1 | Dark navy + foto painel | TAXAÇÃO DO SOL acabou com solar? | TAXAÇÃO | Capa · mito |
| 2 | Light cream | NÃO EXISTE "taxa do sol" | MITO | Desmonta o mito |
| 3 | Dark navy | Mas o que é "Fio B"? | FIO B | Educa tarifa |
| 4 | Light cream | Com Lei 14.300 isso mudou | LEI 14.300 | Importante: economia continua |
| 5 | Dark navy | Solar perdeu vantagem? | VALE | Antes 95% / Agora 70-90% |
| 6 | Light cream | Na prática, o que muda? | EXEMPLO | R$ 1.000 → R$ 80-220 |
| 7 | Dark navy | Energia sobe todos os anos | TRAVA | Refém vs Trava |
| 8 | Light cream | A Lei 14.300 não acabou | VERDADE | 3 verdades simples |
| 9 | Light yellow gradient | Quanto VOCÊ ainda economiza? | SIMULAÇÃO | CTA WhatsApp + casa |

## Identidade aplicada

- Paleta cravada Aura: navy `#0E2152` + amarelo `#F5BC2C` + laranja `#FF8B3D` + verde `#10B981` + cream `#fffef2`
- Tipografia Anton (heros) + Inter (body)
- LogoBlock padronizado top-left (perfil em dark / sem fundo em light)
- **Logo Aura como watermark** em todos os 9 slides (centro, opacity 0.04-0.05, atrás do conteúdo)
- Watermark tipográfico Anton temático por slide (palavra-chave gigante atrás)
- DotGrid sutil de fundo (textura premium)
- Número grande no canto superior direito (círculo amarelo em dark / círculo navy em light)
- Indicador de slide 1/9 (pílulas)
- Footer com seta "Próximo card →"

## Substituições de emoji do roteiro

| Emoji original | Substituído por |
|---|---|
| ☀️ | SunIcon SVG amarelo |
| 🔌 | PoleIcon / CableIcon / WrenchIcon |
| ⚠️ | Card "IMPORTANTE" com borda amarela |
| ✅ | CheckIcon verde (SVG) |
| ❌ | XIcon vermelho (SVG) |
| 💸 | ContaRow com cor vermelha/verde |
| ⚡ | ComparePanel REFÉM vs TRAVA |
| 📲 | WhatsIcon SVG + box verde gradiente |

## Saída

- **9 PNGs** 1080x1080 H.264-ready (range 129KB-624KB)
- **caption.txt** — copy pronta do Renato (com emoji pq é texto Instagram, não imagem)
- **_RECEITA.md** — este arquivo

## Pendências pra rev2

- Confirma se watermark logo tá no tamanho/opacity certo (atual 720x720 opacity 0.04-0.05)
- Slide 1: foto Unsplash genérica — pode trocar por foto real Palmas se Renato tiver
- Slide 9: foto/avatar do Renato pra humanizar CTA (cravado como pendência V11 — viralizou 5,4× no Brasfrio)
- Caption: ajustar com o tom Renato real antes de postar
- Hashtags: 10 atuais. Pode subir pra 15-20 (Instagram aceita até 30)

## Stack

- `auraenergy/src/app/artes/taxacao-sol/[slide]/route.tsx`
- Next.js 16.2 + ImageResponse Edge runtime
- Anton TTF baixada de Google Fonts (cache em memória)
- Dev server local porta 3030 · `curl http://localhost:3030/artes/taxacao-sol/N`
