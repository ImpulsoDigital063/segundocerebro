# 🎨 Playbook Claude Design pra Carrossel Insta — V1 (26/04/2026)

**Pesquisa realizada:** WebSearch + WebFetch em 8 fontes (Anthropic Help Center, TechCrunch, VentureBeat, MacStories, MindStudio, GitHub Open Carrusel, Spicy Advisory, ALM Corp)

**Objetivo:** descobrir a melhor forma de produzir carrosséis Insta 1080×1080 da Impulso Digital usando Claude Design (ou alternativa)

---

## 🚨 DESCOBERTA CRÍTICA — Claude Design NÃO tem template Insta nativo

Pesquisa revelou que **Claude Design (claude.ai/design) é uma ferramenta de PROTOTIPAGEM e DECKS corporativos**, não de carrossel social media. Em específico:

✅ **O que Claude Design FAZ bem:**
- Decks de apresentação (PPTX/PDF) com slides corporativos
- Protótipos de LP, app, mockup HTML
- Sistema de design da empresa (lê brand kit + replica em todos os criativos)
- Export pra Canva (ponte com ferramenta visual nativa)
- Handoff de código pra Claude Code

❌ **O que Claude Design NÃO TEM:**
- Template específico Instagram 1080×1080
- Export direto pra PNG no formato Insta
- Carrossel Instagram nativo
- Aurora gradient animado em CSS exportável pra Insta

**Conclusão:** ferramenta **errada** pra esse trabalho específico. Tem 3 caminhos melhores.

---

## 🛣️ 3 CAMINHOS POSSÍVEIS — análise comparada

### **Caminho A — Claude Design + ajuste no Canva** (HÍBRIDO)

**Como funciona:**
1. Claude Design modo "Apresentação de slides" pra montar os 8 slides com textos + estrutura
2. Exporta pra Canva (botão "Export to Canva")
3. No Canva: ajusta dimensões pra Insta 1080×1080
4. Exporta cada slide como PNG individual

**Prós:**
- Aproveita a inteligência de prompt do Claude Design
- Canva resolve a parte visual fina + dimensão Insta

**Contras:**
- Trabalho duplicado (gera no CD + ajusta no Canva)
- Pode perder Aurora gradient na conversão
- Tempo: 60-90 min pros 4 carrosséis

**Quando usar:** se quiser experimentar Claude Design ao mesmo tempo que produz carrossel.

---

### **Caminho B — Canva direto com Magic Design IA** (RECOMENDADO PRA HOJE) ⭐

**Como funciona:**
1. Canva → Templates → "Carrossel Instagram"
2. Escolhe template base (ou "Magic Design")
3. Cola o briefing do Carrossel 1 (do nosso doc `CARROSSEIS-IMPULSO-INSTA-V1.md`) na IA
4. Magic Design gera primeira versão
5. Refina manualmente (Aurora gradient, voz Eduardo, fotos cases reais)
6. Exporta PNG 1080×1080

**Prós:**
- **Mais rápido** — Canva é nativo pra Insta
- Aurora gradient mais fácil de aplicar manualmente
- Pode usar fotos reais dos cases (EV Suplementos, GB Nutrition, etc) drag-and-drop
- Plano grátis cobre o que precisa

**Contras:**
- Precisa de conta Canva (provavelmente já tem)
- Curva de Magic Design tem 5-10 min de aprendizado

**Quando usar:** **HOJE.** É o caminho de menor fricção.

**Tempo estimado:** 30-45 min pros 4 carrosséis (depois que pegar a manha do primeiro).

---

### **Caminho C — Open Carrusel (Claude Code + script)** (TÉCNICO)

**Como funciona:**
1. Clone repo `github.com/Hainrixz/open-carrusel`
2. Setup local com Claude Code
3. Comando `/start` → conversa Claude monta cada slide HTML/CSS
4. Puppeteer screenshota em 1080×1080 exato
5. Exporta ZIP com PNGs prontos pra Insta

**Prós:**
- 100% automático
- Resolução pixel-perfect Instagram
- Aurora gradient CSS animado preservado (até o screenshot)
- Reproduzível (rodar pros próximos 10 carrosséis vai ser rápido)

**Contras:**
- Setup técnico (Node, Puppeteer, Claude Code config)
- Tempo de configuração: 30-60 min só pra subir
- Eduardo não conhece Claude Code workflow ainda

**Quando usar:** se for produzir 20+ carrosséis no mês — aí o setup paga.

---

## 🎯 RECOMENDAÇÃO TÁTICA pra HOJE

**Use o Caminho B (Canva direto).** Razões:

1. **Menor fricção pra começar.** Tu já abriu Canva antes (provavelmente). Sem setup técnico.
2. **Perfeito pro objetivo de hoje:** lançar perfil Insta com 4 carrosséis. Não precisa de pipeline industrial.
3. **Aprendizado é progressivo.** Domina Canva primeiro, depois (semana que vem) podemos investir 1h pra montar Open Carrusel se for produzir muito.
4. **Aurora gradient + voz Eduardo = controle visual fino.** Canva permite ajuste manual de cada elemento, melhor que Claude Design beta.

### Workflow Canva detalhado

**Passo 1 (5 min) — Setup do projeto Canva:**
- Acessa canva.com (ou já tá logado)
- "Criar um design" → digita "Carrossel Instagram"
- Escolhe formato 1080×1080 (não 1080×1350 que é vertical)
- Adiciona 8 páginas (ou 6 pros carrosséis menores)

**Passo 2 (10 min) — Brand kit:**
- Configurações → Brand → Cores
- Adiciona: #1E40AF (azul) + #06B6D4 (ciano) + #7C3AED (violeta) + #F8FAFC (branco) + #10B981 (verde) + #F59E0B (amarelo)
- Fontes: Geist (display) + Inter (body) — se Canva não tiver Geist, usar **Bebas Neue** (substituto próximo) ou **Inter Bold** mesmo

**Passo 3 (5 min) — Aurora gradient de fundo:**
- Adiciona fundo → Gradiente
- Modo "Linear" ou "Radial"
- Usa as 3 cores da paleta: ângulo 135°, 3 stops com transparência
- Aplica em TODAS as páginas (botão "Aplicar a todas as páginas")

**Passo 4 (15 min × 4 = 60 min) — Produzir os 4 carrosséis:**
Pra cada carrossel:
- Abre o doc `CARROSSEIS-IMPULSO-INSTA-V1.md` (tá no segundo cérebro)
- Slide a slide: copia o **texto principal** + **subtexto** do briefing
- Cola no Canva, ajusta tipografia + cor
- Adiciona o visual descrito (mockup, ícones, etc) — Canva tem biblioteca de elementos
- Pra fotos de case: download dos sites reais + drag-and-drop
  - evsuplementosinjetaveis.com → screenshot da home
  - gbnutrition.online → screenshot da home

**Passo 5 (5 min) — Export:**
- Compartilhar → Baixar → PNG ou JPEG
- Selecionar "Páginas individuais" (8 PNGs separados)
- Marcar "Tamanho 2×" pra qualidade alta no Insta

---

## ⚡ Atalhos Magic Design (Canva IA)

Magic Design gera carrossel inteiro a partir de prompt. Como usar:

1. No Canva, clica no botão **"Magic Design"** (geralmente sidebar esquerda)
2. Cola um prompt resumido do briefing:
   ```
   Carrossel Instagram 1080x1080, 8 slides, sobre Landing Page profissional
   da Impulso Digital (agência Palmas-TO). Hook: "Tua reputação tá no Maps.
   Mas o cliente novo busca no Google." Estrutura: capa + dor + solução +
   bônus + ancoragem mercado + prova social + garantia + CTA WhatsApp.
   Paleta: azul #1E40AF + ciano #06B6D4 + violeta #7C3AED. Tipografia:
   Inter Bold + Inter Regular. Tom: direto, sem corporativês.
   ```
3. Magic Design gera 3-5 variações
4. Escolhe a que tem ossos mais próximos do que tu quer
5. Refina manualmente os textos exatos do nosso briefing

**Vantagem:** economiza 30 min de layout inicial. Tu ajusta só os detalhes.

---

## 🤖 SE TU QUISER EXPERIMENTAR CLAUDE DESIGN MESMO ASSIM

Voltando à tela que tu abriu (claude.ai/design):

### Como usar (caminho que descobri na pesquisa):

**Modo recomendado:** "Apresentação de slides" (segunda aba na sidebar esquerda)

1. Clica em **"Apresentação de slides"**
2. Aparece formulário com:
   - Nome do projeto (ex: "Carrossel LP Impulso")
   - Toggle "Use speaker notes" (DEIXAR DESLIGADO — speaker notes não vai pro Insta)
   - Sistema de design (deixa "Padrão" se não configurou brand kit ainda)
3. Clica "Criar"
4. Abre tela com chat à esquerda + canvas à direita

**Cola esse prompt na chat:**
```
Crie um deck de 8 slides pra carrossel Instagram. Tema: Landing Page profissional da Impulso Digital, agência de Palmas-TO.

Identidade visual:
- Aurora gradient de fundo: 3 cores misturadas (azul #1E40AF, ciano #06B6D4, violeta #7C3AED)
- Tipografia display: Inter Bold ou Geist Bold
- Tipografia body: Inter Regular
- Cores secundárias: branco #F8FAFC pra texto principal, verde #10B981 pra CTA WhatsApp

Slides:
1. CAPA: "Tua reputação tá no Maps. Mas o cliente novo busca no Google." + "Landing Page Impulso · a partir de R$499"
2. DOR: "5 estrelas no Maps. 0 site profissional." + mockup busca Google
3. SOLUÇÃO: "Não é template engessado." + mockup mobile+desktop LP
4. BÔNUS STACK: "Total de mercado: R$2.400. Tu paga R$499." + 4 cards (AMPLIA/ACELERA/REMOVE ESFORÇO/REMOVE RISCO)
5. ANCORAGEM: "Agência de SP cobra R$2.000-15.000." + barra comparativa
6. PROVA SOCIAL: "evsuplementosinjetaveis.com" + Erlane case
7. GARANTIA: "7 dias entrega. 7 dias garantia."
8. CTA: "WhatsApp (63) 99292-0080"

Tom: direto, sem corporativês. Voz de Eduardo Barros (agência local Palmas).
```

5. Claude Design gera os slides no canvas
6. Refina via:
   - Chat ("muda o slide 4 pra grid 2x2")
   - Comentário inline (clica no slide, deixa nota)
   - Sliders (Claude gera sliders contextuais pra spacing/cor)
7. Quando ficar bom: Export → PPTX ou Canva
8. Abre PPTX/Canva e ajusta pra 1080×1080

**Limitação principal:** Claude Design beta tem bugs reportados:
- Comentários inline às vezes somem (workaround: cola no chat)
- Lag em projetos grandes
- Erros de sessão (workaround: nova aba)

---

## 📊 Tabela comparativa final

| Critério | Caminho A: CD+Canva | Caminho B: Canva direto | Caminho C: Open Carrusel |
|---|---|---|---|
| Tempo setup | Médio (5min) | Baixo (5min) | Alto (60min) |
| Tempo produção 4 carrosséis | 60-90 min | **30-45 min** ⭐ | 20 min (após setup) |
| Aurora gradient Animado | Difícil (CD beta) | Médio (manual Canva) | Fácil (CSS preservado) |
| Voz Eduardo controlada | Boa | **Boa** ⭐ | Excelente |
| Curva aprendizado | Alta | **Baixa** ⭐ | Muito alta |
| Recomendado pra HOJE | Não | **SIM** ⭐ | Não |
| Recomendado pra escala (>20/mês) | Não | Médio | **SIM** |

---

## ✅ Decisão recomendada

**HOJE: Caminho B (Canva direto)** — produzir os 4 carrosséis em ~45 min.

**SEMANA QUE VEM (se a leva 2 de carrosséis vier rápido):** investir 1h em Open Carrusel pra automatizar.

**Claude Design ficaria reservado pra:** quando tu for criar **LP/protótipo mockup** (que é onde a ferramenta brilha de verdade), não carrossel Insta.

---

## 🎬 Próximo passo prático

Vou te orientar no **Caminho B** — Canva direto.

**Tu faz:**
1. Abre canva.com em outra aba
2. Cria conta grátis se ainda não tem (ou loga)
3. Manda screenshot da tela inicial pra eu te orientar passo a passo

**Eu faço:**
1. Te guio na criação do Brand Kit (paleta + fontes)
2. Te oriento na produção do Carrossel 1 (LP) slide a slide
3. Reviso resultado antes de tu publicar
4. Quando o primeiro tá bem, os outros 3 são CTRL+D + ajustes

---

## 📚 Sources

- [Get started with Claude Design — Claude Help Center](https://support.claude.com/en/articles/14604416-get-started-with-claude-design)
- [Anthropic launches Claude Design — TechCrunch](https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/)
- [Claude Design challenges Figma — VentureBeat](https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma)
- [Hands-On Claude Design Preview — MacStories](https://www.macstories.net/stories/hands-on-with-anthropic-labs-claude-design-preview/)
- [Claude Design Animated Prototypes & Slides — MindStudio](https://www.mindstudio.ai/blog/claude-design-animated-prototypes-slide-decks)
- [Open Carrusel — GitHub Hainrixz](https://github.com/Hainrixz/open-carrusel)
- [Threads Carousel Claude Skill — GitHub itchernetski](https://github.com/itchernetski/threads-carousel-claude-skill)
- [Claude Design Workflows — Spicy Advisory](https://www.spicyadvisory.com/blog/claude-design-anthropic-labs-guide-workflows-2026)
- [Claude Design Features & Pricing — ALM Corp](https://almcorp.com/blog/claude-design-anthropic-labs/)
