---
fonte: https://www.instagram.com/p/DYxrxk8iQeC/
autor: "@falabondioli (Rodrigo Bondioli)"
data_post: 2026-05-25
capturado_em: 2026-06-09
tipo: carrossel
slides: 7
status: cru
destino_sugerido: "hub Verbo Design / stack de LP — skills de design pro Claude Code"
extraido_por: CIC (Chrome logado, comandos com zoom) — yt-dlp barrado no login
---

# Captura Instagram — @falabondioli · "Claude Skills para Designers"

## INSIGHT destilado
**A "ferramenta de design pra LP" que a gente precisa NÃO é app novo — são skills de design plugadas no Claude Code que já uso pra fazer LP (Verbo).** Upgrade do fluxo atual, não troca de ferramenta.

Mecanismo verificado real: `npx skills add` = CLI oficial `vercel-labs/skills`, instala skill no Claude Code. `anthropics/skills` existe e tem skills de Design.

**5 skills citadas (ordem por fonte confiável, não pelos números do post que são inflados):**
1. **frontend-design** (Vercel oficial) — mata o "visual cara de IA"; força direção estética antes de codar. TOP p/ LP.
2. **web-design-guidelines** (Vercel oficial) — audita UI nos padrões Vercel, aponta arquivo+linha. Revisor automático.
3. **design-critique** (Anthropic, knowledge-work-plugins) — crítica de hierarquia/usabilidade.
4. **landing-page-design** (repo inference-sh — NÃO verificado) — nome bate com a dor, mas fonte suspeita.
5. **emil-design-eng** (indie — NÃO verificado) — microinterações/animação premium; nicho.

**Ressalvas (CIC + verificação Verbo):** números de installs/stars do carrossel são falsos/ilustrativos (ex: "442k stars" landing-page); slide 2 cita repo provavelmente errado (frontend-design real está em `vercel-labs/agent-skills`, não `anthropics/skills`); slide 7 é isca ("comenta… SÓ QUE NÃO"). NÃO rodar npx do carrossel cego — validar repo na fonte.

**Próximo passo proposto:** instalar `frontend-design` + `web-design-guidelines` (fonte Vercel) no Claude Code e testar numa LP real do Eduardo, medindo antes/depois.

## DESTINO sugerido
Hub Verbo Design (`3-RETENCAO/verbo-design/`) como parte da stack de LP. Entra no canônico SÓ depois de testar numa LP real e confirmar ganho (gate = aprovar antes).

---

## Transcrição fiel dos slides (CIC, comandos com zoom)

**Slide 1** — Rodrigo Bondioli · CLAUDE SKILLS PARA DESIGNERS

**Slide 2 — 01/ FRONTEND-DESIGN** (Installs 420.8k · Stars 135.8k)
`npx skills add https://github.com/anthropics/skills --skill frontend-design`
> Cria interfaces frontend com mais personalidade e acabamento profissional, fugindo do visual genérico "cara de IA". Força direção estética (tipografia, movimento, composição, temas) antes de codar.

**Slide 3 — 02/ WEB-DESIGN-GUIDELINES** (Installs 324.0k · Stars 26.7k)
`npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`
> Analisa a UI nos padrões de design da Vercel, aponta onde melhorar (visual, UX, acessibilidade), ligado a arquivos e linhas do código.

**Slide 4 — 03/ EMIL-DESIGN-ENG** (Installs 48.2k · Stars 1.4k)
`npx skills add https://github.com/emilkowalski/skill --skill emil-design-eng`
> Interfaces com sensação premium; melhora transições, easing, microinterações, feedback visual.

**Slide 5 — 04/ DESIGN-CRITIQUE** (Installs 1.6k · Stars 12.2k)
`npx skills add https://github.com/anthropics/knowledge-work-plugins --skill design-critique`
> Análise crítica da interface: decisões de design, usabilidade, hierarquia, clareza, qualidade das interações.

**Slide 6 — 05/ LANDING-PAGE-DESIGN** (Installs 12.5k · Stars 442k [número falso])
`npx skills add https://github.com/inference-sh-skills/skills --skill landing-page-design`
> Cria landing pages com mais conversão: estrutura, mensagem, hierarquia, CTAs, layout. Equilibra estética e estratégia.

**Slide 7** — Isca: "COMENTA PRO ARTS que eu te envio os comandos no direct. SÓ QUE NÃO!" (comandos já estão nos slides)

## Caption original
> Separei algumas skills do Claudião pra você deixar seus layouts menos bosta 😵 #claudecode #uidesign
