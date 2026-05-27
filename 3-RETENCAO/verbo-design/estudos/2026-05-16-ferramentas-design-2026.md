# ESTUDO · Ferramentas de Design Social Media 2026

**Pesquisado em:** 16/05/2026
**Fontes:** MarketBetter, Piktochart, Conbersa, LegacyBuilder, Buffer, Postplanner

---

## 🏆 Ranking cravado 2026

### Canva · LIDERANÇA (Magic Studio AI)
**Por que está em #1:**
- "Free tier handles 80% of what most teams need"
- UI intuitiva pra não-designers
- **Magic Studio** = suite IA integrada (Magic Write, Magic Edit)
- Brand Kit + templates premium

**Quando usar:**
- Cliente vai editar depois
- Velocidade vs perfeição pixel
- Templates testados

**Estado nossa stack:** ✅ Canva MCP autenticado · Brand Kit Aura `kAHJwcGixiU`

### Adobe Express · PROFESSIONAL ALT
**Por que vale:**
- Integração profunda Photoshop/Illustrator
- Assets movem entre plataformas
- Workflow pra equipe maior

**Quando usar:**
- Cliente tem identidade visual em Adobe
- Precisa edit avançado (Photoshop level)

### Figma · DESIGN SYSTEMS
**Por que vale:**
- Colaboração em tempo real
- Free tier "overkill" pra social design
- Padrão pra design systems
- Integra produto + marketing

**Quando usar:**
- Construindo brand system reusável
- Equipe de 2+ designers
- Cliente quer arquivo editável

**Gap nossa stack:** ⏳ Figma MCP poderia integrar daqui. Avaliar se cliente pedir.

### CapCut · MOBILE VIDEO
**Por que domina:**
- Mobile-first
- Edit rápido pra Reels
- Trending sounds nativos
- Subtitles auto

**Estado nossa stack:** ⚠️ Eduardo edita reels GB no CapCut (mencionado no chat) · Verbo Design não tem acesso direto · pendente integração

---

## 🧰 Stack multi-tool padrão 2026

**Cravado pela industria:**
> "Most working creators run 3-5 apps in workflow, not one app end-to-end."

**Anatomia padrão:**
1. **Texto:** Claude / ChatGPT (Anthropic / OpenAI)
2. **Design estático:** Canva
3. **Foto/edit pesado:** Photoshop ou Adobe Express
4. **Mobile video:** CapCut
5. **Agendamento/analytics:** Buffer / Later / Metricool

**Nossa stack cravada (vs padrão):**

| Função | Padrão indústria | Nossa stack | Status |
|---|---|---|---|
| Texto | ChatGPT/Claude | Anthropic API (Sonnet 4.6) | ✅ |
| Design estático | Canva | Next/og + Canva MCP | ✅ |
| Foto edit | Photoshop | sharp + Replicate Flux + remove.bg | ✅ |
| Mobile video | CapCut | ❌ | Pendente |
| Agendamento | Buffer | ❌ | Eduardo agenda manual |

---

## 🆕 Tendências de ferramenta 2026

### AI-first é norma
- Magic Write (Canva), Generative Fill (Adobe), Flux/Midjourney → não são "diferenciais", são **padrão**
- Quem não usa fica pra trás em 2026

### Workflow > Tool
- "Right paid tool saves 5+ hours/week" — vale escolher 2-3 boas, não 12 médias
- Verbo Design já consolidou stack: 7 ferramentas integradas

### Especialização > generalismo
- "All-in-one platforms" perdendo espaço pra tools especializadas
- Specialized tools = melhor output

---

## 📈 Ferramentas pra considerar adicionar à nossa stack

### Prioridade ALTA (próximos 30 dias)
1. **Buffer ou Later** · agendamento + analytics — Eduardo agenda manual hoje
2. **Pinterest API** · pesquisa visual sistematizada (inspiração)
3. **CapCut Web API** · se viabilizar, automatizar mobile video também

### Prioridade MÉDIA (próximos 90 dias)
4. **Figma MCP** · cliente que quer editar depois (alternativa ao Canva)
5. **DALL-E 3** · OpenAI complementar ao Flux pra estilos específicos
6. **Midjourney API** · quando viabilizar (atualmente sem API oficial)

### Prioridade BAIXA (study only)
7. **Spline** · 3D mockups (cenários complexos)
8. **Webflow** · landing pages alternativa ao Next.js
9. **Framer** · animações UI

---

## 🎯 Workflow Verbo Design cravado vs benchmark indústria

**Nossa pipeline (cravada em [[03-WORKFLOW]]):**
```
Entendimento → Brand voice → Arco AIDA → Assets (Flux + remove.bg) → Rota Next/og → Deploy Vercel → Export curl → Caption + instruções → Iterar
```

**Pipeline benchmark indústria (típica):**
```
Briefing → Mood board → Wireframe → Design Canva → Revisões → Export → Agendamento Buffer → Analytics → Iterar
```

**Diferenças cravadas:**
- ✅ Nossa stack é **mais técnica** (código TS) → reusabilidade
- ✅ Nossa stack é **mais rápida** (deploy 30s · iteração inline)
- ⚠️ Indústria é **mais editável pelo cliente** (Canva direto)
- ⚠️ Indústria tem **agendamento integrado** (Buffer/Later)

**Conclusão cravada:**
Verbo Design tem vantagem em velocidade + reusabilidade · mas perde em "cliente edita depois". Solução: usar Canva MCP pra clientes que precisam editar, manter Next/og pra produção controlada.

---

## ⚠️ Princípio cravado pra escolher ferramenta

**Pergunta crivo:**
> "Qual problema essa ferramenta resolve que minha stack atual não resolve?"

- Se "resolve igual" → não adicionar (complexidade > valor)
- Se "resolve melhor" → testar 1 projeto piloto antes de adotar
- Se "resolve coisa nova" → adicionar com critério (custo + curva aprendizado)

**Aplicar:**
- Figma MCP? **Resolve "cliente edita depois"** que minha stack não resolve → testar quando cliente pedir
- Buffer? **Resolve agendamento** que faltou → adicionar se Eduardo cravar
- DALL-E? **Mesmo que Flux** → não adicionar (complexidade > valor)

---

**Ver também:** [[01-STACK-FERRAMENTAS]] · [[VERBO-DESIGN]]
