# DIÁRIO · Aura Energy · 2026-05-15

**Marco do dia:** stack Verbo-operador completa cravada · 4 frentes ativadas em sequência · carrossel Fio B refinado em 11 versões até a aprovação · paradigma de design+copy direto no chat (sem UI intermediária) instalado.

---

## 🗺️ Mapa do dia

```
Manhã      → Indexação Google destravada (Search Console + sitemap + GA4)
Meio-dia   → Sistema Copy Impulso V1 (brand voice + framework + /copy-gen)
Tarde-1    → Análise CIC Brasfrio (template + Reel) + Brand Kit Aura Canva
Tarde-2    → Carrossel Fio B refeito V2 → V11 (iterativo com Eduardo)
Noite      → Replicate Flux integrado · stack de 5 frentes completa
```

---

## 1. INDEXAÇÃO GOOGLE (manhã)

### Cravado
- Search Console verificado via Arquivo HTML (`public/googlefa4d673ff7a08510.html`)
- Sitemap.xml submetido — status inicial "Não foi possível buscar" (normal nas primeiras horas)
- GA4 confirmado rodando em produção (`G-SGB6JQW3JT`) — env já setada lá atrás pelo CIC
- 2 sitemaps inválidos limpos (`/casa` e `/` que Eduardo submetera por engano)
- Home (`/`) já consta indexada no Search Console

### Descoberta técnica importante
**Projeto Vercel não está conectado ao GitHub auto-deploy.** Todos deploys vêm via `vercel --prod` CLI manual. Push pra master não dispara nada. Crucial pra ter clareza pra próximas sessões.

### Pendente
- [ ] **Amanhã 16/05 após 5h BR** · solicitar indexação manual de 5 URLs (cota Search Console esgotou em 15/05)

---

## 2. SISTEMA COPY IMPULSO V1 (meio-dia)

### Tese
Copy from-scratch toda vez não escala. Sistema cravado = brand voice + framework + LLM = geração consistente que Eduardo / Renato / Olímpio podem operar.

### Camadas cravadas
```
src/lib/brand-voice/
  types.ts        — interface BrandVoice
  aura.ts         — pilares + tom + vocabulário use/avoid/forbidden + patterns + 4 exemplos + 3 anti-exemplos
  registry.ts     — Map de clientes (Aura registrado; futuro: Carretinha, Starteq)

src/lib/copy-framework/
  types.ts        — interface FormatFramework + CopyBeat
  formats.ts      — 7 formatos com beats obrigatórios:
                    post-instagram · carrossel-capa · carrossel-slide ·
                    story · story-sequencial · meta-ads-topo · whatsapp

src/lib/copy-engine/
  prompt-builder.ts — junta brand voice + framework + briefing
  index.ts          — Anthropic SDK + parser JSON + validação palavras proibidas

src/app/api/copy-gen/route.ts  — Node runtime, auth por token
src/app/copy-gen/page.tsx      — UI form (bônus — uso primário é via Verbo)
```

### Acesso
- URL: https://auraenergy.vercel.app/copy-gen
- Token: `impulso-copy-afa5154cbce0a0a30d01fcf3`
- Envs setadas no Vercel: `ANTHROPIC_API_KEY` (CIC) + `COPY_GEN_TOKEN` (Verbo via CLI)

### Smoke test passou
Gerou 3 variações Aura sobre Lei 14.300 · tom dúplice (leigo+expert) · warnings automáticos cravados (detectou falta de caso real) · zero palavras proibidas.

---

## 3. ANÁLISE CIC BRASFRIO + BRAND KIT CANVA (tarde-1)

### CIC entregou specs visuais profundas do @brasfrio_engsolar
- 5 posts "Projeto Finalizado" auditados (Palmas/Colinas/Dianópolis · 6,84-14,64 kWp · R$ antes/depois)
- Reel @ Belenergy 05/jul/2024 — **correção de premissa cravada:** é B-roll observacional, NÃO Renato falando pra câmera
- Specs cravadas em `DIAGNOSTICO-BRASFRIO-SOLAR.md` (atualizado)

### Brand Kit Aura Canva configurado pelo CIC
- ID: `kAHJwcGixiU`
- 2 logos uploaded (com e sem fundo)
- 2 paletas (Primária 4 cores + Acento 3 cores)
- Fonte Inter setada (Heading 700, Medium 500, Body 400)

### MCP Canva reconectado
- Eduardo criou conta Pro + reconectou via claude.ai/connectors
- `list-brand-kits` agora retorna `kAHJwcGixiU` corretamente (era kit antigo "Überfeet" antes)

---

## 4. CARROSSEL FIO B · V2 → V11 (tarde-2)

### Por que 10 iterações?
Eduardo cravou que a V1 (texto + vetorial puro) não era "post premium". Cada iteração adicionou uma camada:

| Versão | Mudança principal |
|---|---|
| V2 | Identidade Aura cravada · paleta + Anton + watermarks tipográficos |
| V3 | Adicionou foto Unsplash painel solar + hook punchy "POR QUE..." |
| V4 | Trocou dark zone genérica `#0a0d18` por Blue Aura Deep `#0E2152` (cor real do logo) |
| V5 | Logo destaque institucional (180px + texto "AURA ENERGY") |
| V6-V8 | Tentativas com logo blur de fundo — **reprovado** (invasiva, parece bug) |
| V9 | Voltou pro watermark tipográfico mas com "AURA" no lugar de "MATEMÁTICA" |
| V10 | LogoBlock padronizado top-left em todos + DotGrid bg + copy slide 2 conversacional ("pensa assim... esse empréstimo valia 100%") + arco AIDA mapeado |
| V11 | Slide 4 caso real Brasfrio R$1573→R$390 + logo sem fundo (light) e perfil_minimal (dark) + tamanho 150px |

### Aprendizados visuais cravados
- **Aprendizado Brasfrio:** número-herói dominante + watermark tipográfico atrás + composição 3 zonas + tipografia condensed pesada → DNA aplicado em Aura mas com paleta própria
- **Logo blur de fundo NÃO funcionou:** mesmo em opacity 20%, parece bug visual · voltou ao watermark tipográfico
- **Dark zone genérica saiu, Blue Aura entrou:** identidade real puxa do logo
- **Logo padrão híbrido:** sem-fundo em light zones (slides 2/4/5), com-fundo em dark (slides 1/3) — evita logo sumir ou virar card estourado
- **Anton font carregada via Replicate raw URL** — Satori suporta TTF custom

### Arco AIDA mapeado nos 5 slides
```
Slide 1 — ATENÇÃO     · hook "Por que solar em 2026 vai pagar mais que 2027" · foto painel
Slide 2 — INTERESSE   · "pensa assim..." explica Fio B pra leigo+expert
Slide 3 — EDUCAÇÃO    · "% da sua geração que vira taxa" + gráfico 7 barras
Slide 4 — DESEJO      · "R$ 1.573 virou R$ 390/mês" — caso real Brasfrio
Slide 5 — AÇÃO        · "Quer ver quanto economiza no SEU caso?" + 2 CTAs (bio/WhatsApp)
```

### Veredito final (Diretor de Qualidade Impulso)
**Aprovado pra postar com 2 ressalvas documentadas:**
- Slide 5 sem foto real do Renato (V11 quando ele responder briefing)
- Slide 1 com foto Unsplash genérica (substituir por Flux ou foto real)

---

## 5. REPLICATE FLUX (noite)

### Quê e por quê
Fechamos o último gap de design: geração de foto fotorrealista sob medida. Eduardo já tinha conta Replicate com crédito.

### Setup
- `npm i replicate` + `npm i --save-dev dotenv`
- `REPLICATE_API_TOKEN` setado no Vercel via CLI (`vercel env add`) + `.env.local` local (gitignored)
- `src/lib/image-engine/replicate-client.ts` — wrapper TS reusável
- `src/lib/image-prompts/aura.ts` — biblioteca de 8 prompts cravados
- `scripts/gen-image.mjs` — helper Node: `npm run img -- <key> [out] [model]`

### 8 prompts cravados pra Aura
| Key | Note | Modelo default |
|---|---|---|
| `engenheiroSolar` | Foto editorial slide 5 V11 (figura fictícia) | dev |
| `tecnicoInstalando` | B-roll stories e bastidores | schnell |
| `casaPalmasComSolar` | Slide 1 V11 (substitui Unsplash) | dev |
| `telhadoSolarCloseUp` | Hero genérico solar | schnell |
| `fazendaSolar` | Audiência rural · Pronaf Bioeconomia | dev |
| `inversorSolar` | Educativo · tech transparente | dev |
| `contaDeLuz` | Impacto financeiro · ancorar dor | dev |
| `sunriseTocantins` | Background atmosférico premium | schnell |

### Modelos
- **Flux Schnell** — `~$0.003/img` · 2-3s · 4 steps · qualidade boa
- **Flux Dev** — `~$0.025/img` · 5-10s · 28 steps · qualidade premium
- **Flux 1.1 Pro** — `~$0.05/img` · top qualidade

### Smoke test passou
```
npm run img -- telhadoSolarCloseUp ./out-artes/smoke-test.png
✓ Gerada em 2.2s
✓ Salvo: 1208 KB
```
Resultado: painéis solares fotorrealistas com células azul-profundo + frame prata + pôr-do-sol Tocantins dourado. **Pronto pra produção.**

---

## 6. PARADIGMA CRAVADO · "Verbo é o operador"

### Mudança de paradigma chave (declarado por Eduardo no chat)
> "voce vai criar tudo por aqui mesmo, por isso instalei toda essa tecnologia pra te ajudar. meu objetivo é pedir para voce criar um post e voce criar, e ja me enviar pronto pra postar ou mandar para um cliente"

### Implicações
- A rota `/copy-gen` deixa de ser caminho primário · vira bonus pra Renato/Olímpio
- Eduardo pede aqui no chat → Verbo entrega **pacote completo** na pasta destino:
  - PNGs prontos pra postar
  - Caption completa com hashtags
  - Instruções de postagem
- Stack inteira (puppeteer + sharp + Canva + Anthropic + Replicate) é pra **EQUIPAR Verbo**, não pra criar interface humana

### Pasta destino padrão
`C:/Users/Usuario/Desktop/Posts Aura/<campanha>/`
- `slide-1.png` ... `slide-N.png`
- `caption.txt`
- `_arquivo/` (versões antigas)

---

## 7. PENDÊNCIAS CRAVADAS

### Amanhã 16/05 (após 5h BR)
- [ ] Indexação manual 5 URLs no Search Console (cota reseta)

### Quando Renato responder briefing (`/briefing` ainda aberto)
- [ ] V11 carrossel Fio B com foto real do Renato + fotos reais instalação
- [ ] Stories de apoio (PAUTA-STORIES-AURA já tem 15 cravados)
- [ ] 5 outras artes do pacote (#1, #2, #3, #4, #6) — mesma stack já cravada

### Próximos pacotes (quando Eduardo cravar)
- [ ] Carrossel Mitos vs Verdades (Arte #2)
- [ ] Post Calculadora (Arte #3)
- [ ] Carrossel Antes/Depois (Arte #4 · precisa caso real fotografado)
- [ ] Post CTA Orçamento Personalizado (Arte #6)

---

## 8. APRENDIZADOS PROCESSUAIS CRAVADOS

- **Logo blur de fundo é armadilha:** parece bom em teoria, mas no render fica invasivo OU parece bug. Watermark tipográfico funciona melhor.
- **Dark zone genérico não é identidade:** sempre puxar background das cores reais do logo do cliente. `#0a0d18` virou `#0E2152` Blue Aura Deep.
- **Anton é a fonte certa pra DNA "engenheiro Palmas":** condensed pesado, peso editorial, sem ser corporativo.
- **Copy conversacional ≠ copy infantilizada:** "pensa assim... esse 'empréstimo' valia 100% — você gerava 1 kWh, abatia 1 kWh" cumpre função pra leigo SEM ofender expert.
- **Arco AIDA em 5 slides funciona:** Atenção (capa hook) · Interesse (explicação) · Educação (gráfico) · Desejo (caso real) · Ação (CTA + voz primeira pessoa).
- **Diretor de Qualidade não puxa saco:** apontar fraqueza factual (sem caso real, sem foto humana) cravou onde ainda dá pra subir.

---

**Ver também:**
- Hubs: [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]]
- Status: [[STATUS-AURA-ENERGY]] · [[STATUS-IMPULSO]]
- Brasfrio: [[DIAGNOSTICO-BRASFRIO-SOLAR]]
- Artes: [[6-ARTES-INSTAGRAM-AURA]] · [[PAUTA-STORIES-AURA]]
- Briefing: [[BRIEFING-AURA-V2-RENATO]] (Renato ainda não respondeu)
