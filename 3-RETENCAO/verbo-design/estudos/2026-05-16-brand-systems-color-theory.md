# ESTUDO · Brand Systems + Color Theory pra Verbo Design

**Pesquisado em:** 16/05/2026
**Aplicação direta:** validar paletas cravadas (Aura, GB) + criar nova pra próximos clientes

---

## 🏗️ As 3 camadas de um Brand System cravadas

| Camada | O que contém | Onde fica na nossa stack |
|---|---|---|
| **Visual** | Cores, tipografias, ícones, espaçamento, grid | `src/lib/brand-voice/<cliente>.ts` (campo `visual`) |
| **Componentes** | Logo block, dot grid, badges, indicadores | `route.tsx` helpers (LogoBlock, DotGrid, SlideIndicator) |
| **Governança** | Regras de uso · "como aplicar" | `02-PRINCIPIOS.md` + `03-WORKFLOW.md` |

**Cravado pela indústria 2026:**
> "Visual consistency ensures your business feels recognizable at every brand touchpoint."

---

## 🎨 Color Theory aplicada a fitness/supplements/saúde

### Significados cravados das cores
| Cor | Emoção | Posicionamento ideal |
|---|---|---|
| **Preto** | Sofisticação · força · autoridade · exclusividade | Premium · sport luxury (Gymshark) |
| **Branco** | Limpeza · pureza · clareza | Wellness · clinical |
| **Roxo** | Realeza · sabedoria · luxo · sofisticação | Premium ultra · "high society" |
| **Vermelho** | Paixão · urgência · energia física | High-intensity · pré-treino · gain |
| **Amarelo/Laranja** | Energia · performance · vitalidade | Athletic · ganho · workout |
| **Verde** | Saúde · natureza · renovação · vitalidade | Wellness · natural · plant-based |
| **Azul** | Confiança · profissional · técnico · calmaria | Tech · profissional · clínico |
| **Ciano/Turquesa** | Tecnológico · refrescante · moderno · ativo | Fitness moderno · gaming-fitness |
| **Rosa pastel** | Feminino-wellness · gentle | Feminino · maternal · spa |
| **Marrom/Terra** | Natural · orgânico · earthy | Plant-based · orgânico · raiz |

---

## 🎯 Validando paletas cravadas

### Aura Energy
**Paleta cravada:** Cream `#fffef2` + Blue Deep `#0E2152` + Amarelo `#F5BC2C` + Laranja `#FF8B3D` + Neon Green `#10F19F`

**Análise color theory:**
- **Cream** = limpeza, clareza, premium leve · ✅ certo pra cliente que valoriza confiança
- **Blue Deep** = profissional, técnico, autoridade · ✅ engenheiro CREA-TO
- **Amarelo + Laranja** = energia, sol (literal · solar fotovoltaico) · ✅ duplo sentido perfeito
- **Neon Green** = ativo financeiro (ROI) · ⚠️ uso pontual · não dominante

**Veredito:** paleta cravada está **alinhada** com posicionamento ("engenheiro consultivo + energia solar").

### GB Nutrition
**Paleta cravada:** Dark `#0a0a0a` + Ciano elétrico `#19D9E0` + acentos (red urgência, green sucesso)

**Análise color theory:**
- **Dark** = sofisticação, força, premium sport (Gymshark like) · ✅ certo
- **Ciano elétrico** = tecnológico, moderno, ativo, gaming-fitness · ✅ diferencia do "amarelo Max Titanium" genérico
- **Combinação dark+ciano** = "gaming fitness premium" · ✅ posicionamento "prateleira do personal" alinhado

**Veredito:** paleta cravada está **fortemente alinhada** com posicionamento. Não trocar.

---

## 📚 Princípios de Brand System cravados

### 1. Narrow down: 3-5 cores totais
**Cravado indústria:**
> "Narrow down to 3-5 colors that reflect your niche and target audience."

**Aplicação:**
- Aura: 5 cores (limite máximo) · funcionou
- GB: 4 cores (dark + ciano + red + green) · ótimo
- ⚠️ **Não adicionar 6ª cor** sem motivo cravado

### 2. Tipografia como assinatura
**Cravado:**
- Heading: peso, contraste, personalidade
- Body: legibilidade · sempre

**Nossa stack:**
- Anton (condensed pesado) → headings · cravado
- Inter (geometric sans) → body · cravado
- Mono opcional (JetBrains Mono) → dados tabulares

### 3. Iconography style consistente
- Linear (stroke 1.5-2px) OU
- Filled (solid)
- NUNCA misturar 2 estilos no mesmo material

**Nossa stack:** Lucide icons style (linear stroke 1.75) cravado em `components/Icons.tsx`.

### 4. Spacing token cravado
**Padrão indústria:**
- 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Múltiplos sempre

**Nossa stack:** Tailwind tokens (spacing default) · ✅ alinhado

### 5. Layout grid identificável
- 12-column desktop
- 6-column tablet
- 4-column mobile

**Nossa stack:** carrosseis usam 1080×1080 (próximo: testar 1080×1350) · grid interno por slide

### 6. Components reusáveis
- Helper functions repetíveis entre slides
- Não recodificar mesmo elemento 5×

**Nossa stack:** `LogoBlock`, `DotGrid`, `SlideIndicator`, `ImpactRow` · ✅ cravado

---

## 🆕 Aplicação prática · próximos clientes

### Carretinha Kids Alegria (festa kids · Palmas · Olímpio)
**Posicionamento sugerido:** Festa premium pra criança
**Paleta sugerida cravada do estudo:**
- **Off-white quente** (#FFF9F0) — pureza, alegria gentil
- **Verde claro vivo** (#A0D979) — natureza, vitalidade
- **Rosa coral** (#FFB088) — feminino-wellness, alegria
- **Marrom suave** (#8B6F47) — terra, orgânico, ambiente fora

**Anti-paleta:** vermelho saturado · azul gaming · preto puro (são adultos, mas comunica medo/agressão pra contexto kids)

### Starteq (ERP B2B)
**Posicionamento sugerido:** Tech profissional · direct B2B
**Paleta sugerida:**
- **Azul deep** (#0F2942) — confiança, técnico
- **Cinza claro** (#F4F6F8) — limpo, profissional
- **Verde técnico** (#00B894) — sucesso, conversão
- **Off-white** (#FAFBFC) — clareza
**Anti-paleta:** ciano gaming (errado pro B2B sério) · roxo (errado pra ERP)

### Zilanda Suplementos (farmacêutica Palmas)
**Posicionamento sugerido:** Saúde clínica + performance fitness
**Paleta sugerida:**
- **Verde escuro** (#1B5E3F) — saúde clínica + natureza
- **Branco puro** (#FFFFFF) — clinical
- **Cobre/amarelo dourado** (#D4A574) — premium, mas warm
- **Cinza grafite** (#3A3D40) — autoridade técnica
**Posicionamento dual:** "farmacêutica que entende fitness" · não puro fitness, não puro clínico.

---

## 💡 Lições cravadas

1. **Cor é posicionamento, não decoração.** Cada cor implica um nicho (premium · wellness · athletic · clinical).
2. **Combinação valida posicionamento.** Dark+ciano = gaming fitness. Cream+blue = profissional consultivo. Não basta UMA cor.
3. **3-5 cores é limite.** Mais que isso vira ruído visual.
4. **Anti-paleta importa tanto quanto paleta.** O que NÃO usar evita confusão de posicionamento.
5. **Brand system precisa de governança escrita.** Documentado em `02-PRINCIPIOS.md` e brand voice JSON. Não pode ficar "na cabeça do Verbo Design".

---

## 🎯 Pendência cravada

**Pra cada cliente novo, antes de codar route.tsx:**
1. Validar paleta proposta contra color theory (este doc)
2. Cravar 3-5 cores + 1 fonte + 1 estilo de ícone
3. Documentar como **anti-paleta** também (o que NÃO usar)
4. Salvar em `src/lib/brand-voice/<cliente>.ts`

---

**Ver também:** [[VERBO-DESIGN]] · [[02-PRINCIPIOS]] · [[2026-05-16-marcas-referencia-fitness]]
