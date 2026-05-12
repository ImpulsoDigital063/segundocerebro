# AgendaPRO — Brand Guidelines

**Versão:** 1.0 · 2026-04-28
**Por:** Impulso Digital

---

## O que é AgendaPRO

Ferramenta de operação silenciosa pra pequeno serviço (barbeiro, estética, salão, nail, soroterapia). Usado no celular, entre clientes, sem pensar. Diferencial: cliente avalia → ganha pontos → estabelecimento sobe no Google sem pagar SEO.

A logo precisa transmitir: **moderno, simples, inteligente, confiável**. Não fofo. Não ornamentado. Não premium-banco. Linear pra dono de salão.

---

## Paleta oficial

| Token | Hex | Uso |
|---|---|---|
| Brand primary | `#3B82F6` | Pill PRO (topo do gradient), CTAs, accents |
| Brand deep | `#1E40AF` | Pill PRO (base do gradient) |
| Brand shadow | `#1E3A8A` | Sombra da pill, glow no dark |
| Ink | `#0F172A` | Texto "Agenda" no fundo claro, dark surface |
| Surface light | `#F8FAFC` | "Agenda" no fundo escuro |
| Slate 500 | `#64748B` | Assinatura "by" no fundo claro |
| Slate 600 | `#475569` | Assinatura "Impulso Digital" no fundo claro |
| Slate 300 | `#CBD5E1` | Assinatura "Impulso Digital" no fundo escuro |
| White | `#FFFFFF` | "PRO" dentro da pill (sempre branco puro) |

**Regra absoluta:** "PRO" é sempre branco puro `#FFFFFF`. Nunca gradient, nunca cromado, nunca metálico.

---

## Tipografia

- **Logo (Agenda + PRO):** Inter Black 900, letter-spacing -3 (Agenda) / -2 (PRO)
- **Assinatura "by Impulso Digital":** Inter Medium 500 ("by") + Inter Bold 700 ("Impulso Digital"), letter-spacing 1.5
- **Body/UI:** Inter Regular 400 / Medium 500

Inter é a fonte padrão. Já vem instalada no projeto via Next.js font loader.

---

## Variantes da logo (quando usar)

| Variante | Quando usar |
|---|---|
| `agendapro-color.svg` | Padrão. Header de LP, dashboards claros, criativos sobre fundo branco. |
| `agendapro-color-signed.svg` | Quando precisa creditar a Impulso Digital. Footer, sobre, materiais de venda, contratos. |
| `agendapro-dark.svg` | Dashboards/admin com fundo escuro, hero de LP escuro. |
| `agendapro-dark-signed.svg` | Footer de LP escura, splash de app. |
| `agendapro-mono-black.svg` | Materiais de impressão preto-e-branco (boletos, faturas, contratos sem cor). |
| `agendapro-mono-white.svg` | Sobre fotos, sobre fundos coloridos diferentes do brand, watermarks. |
| `agendapro-icon.svg` | Favicon, ícone PWA, perfil Instagram, foto de WhatsApp Business. **Nunca** use a logo completa em contextos quadrados pequenos. |

---

## Espaço mínimo (clear space)

A logo precisa de respiro de pelo menos a **altura do "A" de Agenda** em todas as direções. Nada deve invadir esse espaço — nem texto, nem imagem, nem outro elemento.

## Tamanho mínimo

- Logo completa: **120px de largura** (digital). Abaixo disso, troca pra ícone.
- Ícone: **16px** (favicon). Abaixo disso, vira ilegível.

---

## Don'ts (nunca faça isso)

- ❌ Não estique, esmague ou rotacione a logo.
- ❌ Não troque as cores fora do que está nesse documento.
- ❌ Não aplique sombra ou efeito 3D no "PRO" (só na pill, e ainda assim só a sombra externa especificada).
- ❌ Não use a logo color sobre fundos coloridos (use a `mono-white` ou `dark`).
- ❌ Não use gradient no "PRO" (sempre branco puro).
- ❌ Não escreva "AgendaPRO" como texto puro no body — use a logo SVG.
- ❌ Não separe "Agenda" de "PRO" (eles formam um único símbolo).

---

## Aplicação técnica

**Web (Next.js):**
```tsx
import Image from 'next/image';
import logo from '@/public/logo-agendapro.svg';

<Image src={logo} alt="AgendaPRO" width={240} height={50} priority />
```

**Favicon (manifest.json):**
```json
{
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

**CSS variables (já no globals.css):**
```css
:root {
  --brand-primary: #3B82F6;
  --brand-deep: #1E40AF;
  --ink: #0F172A;
}
```

---

## Histórico

- **v1.0 — 2026-04-28** — Logo definitiva: pill azul gradient + PRO branco puro chapado, plana, moderna. Feito após iterar por 4 direções (V1 iridescente → cromado B2 → embossed B3 → final plana). Escolha racional: AgendaPRO é tech company moderna (Linear/Stripe), não premium-banco.

---

**Ver também:** [[STATUS-AGENDAPRO]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[IDENTIDADE-IMPULSO-DIGITAL]]
