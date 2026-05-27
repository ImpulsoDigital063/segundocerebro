---
name: logo-oficial-nao-redesenhar
description: cliente entrega arquivos oficiais da logo (PNG/SVG/EPS/PDF) · NUNCA redesenhar versão simplificada em SVG inline · usar SEMPRE o arquivo original
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Cravado por Eduardo em 20/05/2026 após eu fazer besteira com a logo Palace.

**Erro cometido:** Marko entregou 5 PNGs oficiais + EPS + PDF + CDR da logo Palace Nail Spa. Eu copiei pro `/public/brand/palace/` mas depois **desenhei um símbolo simplificado em SVG inline** pra usar na sidebar (ogiva genérica com P traçado a régua). Perdeu o P caligráfico elaborado do arquivo oficial. Eduardo viu o painel e cravou: *"voce fez besteria, mudou a LOGO sendo que voce recebeu varios arquivos com as Logos originais"*.

**Why:** identidade visual é contrato com o cliente. Marko e Luana focam muito em branding (cravado em [[palace-nail-spa]]). Logo redesenhada em SVG simplificado = caricatura da marca = quebra de confiança imediata. Sub-agent IA que acha que "sabe desenhar a ogiva" nunca chega no nível de fidelidade do designer original.

**How to apply:**

1. **Quando cliente entregar arquivo oficial**, esse arquivo é a fonte. Copiar pro projeto e usar via `<img>` / `<Image>` / SVG vetorial original.
2. **NUNCA redesenhar** símbolo em SVG inline "pra ficar escalável" ou "pra ter cor flexível". Mesmo que o SVG fique parecido, vai trair detalhes (espessura de traço, curvas suaves, proporções caligráficas).
3. **Se precisa de versão com fundo transparente** e só tem PNG com fundo:
   - Pedir versão sem fundo pro cliente
   - OU processar via ImageMagick / Sharp (remove fundo automaticamente)
   - OU usar CSS blend mode (`mix-blend-mode: multiply` em fundo claro)
   - OU embeber a logo num card cuja cor é o próprio fundo da logo (faz parecer intencional)
4. **Se precisa de tamanho colapsado** (sidebar minimizada · favicon), usar **crop CSS** da PNG original (`object-fit: cover; object-position: center top`) pra mostrar só o símbolo. Não desenhar versão mini "manualmente".
5. **Quando tiver EPS/PDF/CDR**, esses são vetoriais. Converter pra SVG via Inkscape / Illustrator antes de usar (mantém fidelidade, dá escalabilidade real).

**Anti-pattern cravado:**
```tsx
// ❌ Errado · desenhei a ogiva
function PalaceSymbolMini() {
  return <svg viewBox="0 0 200 280">
    <path d="M 100 10 C 60 30, ...desenho meu" />
  </svg>
}

// ✅ Correto · uso o arquivo oficial
<Image src="/brand/palace/logo-on-cream.png" width={48} height={48}
  style={{ objectFit: 'cover', objectPosition: 'center top' }} />
```

**Verificação antes de cravar SVG inline:** "existe arquivo oficial? Se sim, NÃO redesenho." Sub-agentes (Claude Design, CIC) que sugerem "vou desenhar a logo pra ti em SVG" → recusar e usar o arquivo original.

Linka com [[lp-festa-kids-premium-nao-cartoon]] · [[visual-validar-referencia-antes]] · [[nunca-mascote-objeto-antropomorfizado-ia]] · [[filtrar-recomendacoes-de-outros-agentes]].
