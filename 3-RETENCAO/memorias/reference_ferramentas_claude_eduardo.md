---
name: reference-ferramentas-claude-eduardo
description: Mapa das 5 instâncias Claude que Eduardo usa e quando delegar pra cada uma
metadata: 
  node_type: memory
  type: reference
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

Eduardo opera com **5 instâncias Claude** em paralelo. Saber qual usa quando evita perder tempo tentando o que outra faz melhor.

## 1. Claude Code (eu — Verbo no terminal)
- **Forte:** ler/editar arquivos do PC, rodar comandos, criar projetos Next.js, gerenciar git, WebFetch em sites públicos, WebSearch básico
- **Fraco:** Instagram/redes sociais com login (bloqueado), interações via UI, scraping de páginas dinâmicas com JS pesado, criar mockup visual interativo

## 2. CIC (Claude Internet Companion — agente autônomo)
- **Forte:** deep research em escala (rodar madrugada inteira), Search Console / GMB / GA4 wizards, prompts complexos com múltiplos cliques, análise de Insta via outras vias
- **Quando usar:** pesquisas longas (>30 min), tarefas que exigem persistência, análise competitiva profunda, qualquer coisa que renderize página
- **Referência:** ver `PROMPT-CIC-INDEXACAO-GOOGLE.md` (Aura) como template de prompt-CIC

## 3. Claude for Chrome (extensão research preview · plano Max $100-200/mês)
- **Forte:** **navegar Instagram logado**, clicar, preencher formulários, ler páginas com auth, scraping de leads em redes sociais, auditar LP rodando em `localhost` (já feito com Carretinha Kids · auditoria visual brutal)
- **Quando usar:** **scraping de Instagram** (concorrentes, leads, perfis), análise de stories, preenchimento de formulários repetitivos, auditoria visual de site no navegador
- **Disponível desde:** maio/2026 · email logado `edubchaves5@gmail.com`
- **Limitação cravada (14/05/2026):** CIC **não consegue gravar arquivos no filesystem** (`C:/Users/...`). Quando o prompt pede "salve em X.md", o CIC vai entregar o conteúdo no chat e pedir pra Eduardo colar no Verbo. Já cravar essa expectativa nos prompts pro CIC pra evitar retrabalho: "entregue no chat e o Verbo salva".

## 4. Claude Design (Anthropic Labs · lançado 17/04/2026)
- **Forte:** **criar interface visual** com chat + canvas · gera **HTML/CSS/React vivo** (não pixels estáticos) · lê codebase + design files e **constrói design system** que persiste · importa imagens, DOCX, PPTX, XLSX
- **Quando usar:** **propor o design de uma LP/app/site do zero** · refazer interface ruim · gerar mockup com design system coeso · slides, prototypes, one-pagers visuais
- **Refino:** chat, comentários inline, edição direta, sliders custom que o próprio Claude cria
- **Modelo:** Opus 4.7 · disponível pra Pro/Max/Team/Enterprise em research preview
- **Não é:** ferramenta de código pra projeto real · o output dele entra como referência/design system, EU (Verbo) que implemento no Next 16 respeitando o `AGENTS.md` do projeto

## 5. Claude Cowork (Claude Desktop app · jan/2026 · Agent Teams mar/2026)
- **Forte:** **agente desktop multi-step** · opera arquivos e apps locais com permissão por pasta · lê/edita/cria arquivos · team lead coordena teammates em paralelo via shared task list
- **Quando usar:** tarefas knowledge-work multi-step que precisam tocar várias pastas/apps locais · sub-agentes em paralelo · automação de arquivos sem código
- **Disponível em:** todos os planos pagos via Claude Desktop app
- **Não confundir com:** Claude Code (eu · terminal) · Cowork é desktop GUI agentic, sem CLI

## Workflow padrão Eduardo
1. **Eu (Verbo)** monto o briefing/prompt-de-execução estruturado
2. **CIC / Claude for Chrome / Claude Design / Cowork** executa a parte específica
3. **Eu (Verbo)** recebo os outputs, **filtro contra feedbacks cravados** ([[feedback-filtrar-recomendacoes-de-outros-agentes]]), consolido, viro relatório/plano/copy ou implemento no código

## Pra varredura de Instagram (regra cravada)
Nunca eu (Verbo) tentar WebFetch direto em `instagram.com/<perfil>` — falha por bloqueio. Sempre delegar pra **Claude for Chrome** (preferido — navegação real, vê stories e métricas reais) ou **CIC** (alternativa).

## Pra criar design de interface (regra cravada · 14/05/2026)
Quando o objetivo é **propor design visual de LP/site**, delegar pra **Claude Design** — ele gera HTML/React vivo e constrói design system coeso. **Verbo (eu) não tenta projetar UI sozinho** — implementa o output do Design respeitando `AGENTS.md` do projeto e filtros visuais cravados ([[feedback-lp-festa-kids-premium-nao-cartoon]] · [[feedback-sempre-svg-nunca-emoji]]).
