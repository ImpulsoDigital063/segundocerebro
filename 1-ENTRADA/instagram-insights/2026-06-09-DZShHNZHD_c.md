---
fonte: https://www.instagram.com/p/DZShHNZHD_c/
autor: "@chase.h.ai (verificada)"
data_post: 2026-06-08
capturado_em: 2026-06-09
tipo: carrossel
slides: 9
status: cru
destino_sugerido: "reference Claude Code / amarrar à skill /token-economia"
extraido_por: CIC (Chrome logado) — yt-dlp barrado no login do Instagram
---

# Captura Instagram — @chase.h.ai

## INSIGHT destilado
**`/graphify` — repo open-source que vira grafo de conhecimento pro Claude consultar em vez de grep.**

Ataca direto a λ.token-economia: no benchmark do autor, a mesma pergunta custou ~200k tokens com grep vs ~80k via grafo (**40% do custo**). Relevante porque opero repos grandes (Palace 31 arq admin, AgendaPRO) no MAX sem MAX 20 — grep é onde mais queimo contexto.

Como funciona: 3 passadas (1-código via tree-sitter, local/sem IA; 2-áudio/vídeo via faster-whisper; 3-docs/PDF via IA, sem embeddings). Gancho post-commit reconstrói o grafo sozinho a cada commit. Saída = nós/edges/comunidades/"god nodes" (hubs mais conectados). Não é GraphRAG: anda pelas conexões reais do código, não por similaridade vetorial.

**Ressalvas (honestidade):** conta de isca de engajamento (caption = só "comment 'agent'"); benchmark é do próprio autor, não independente; ferramenta nova (post 1 dia). NÃO adotar de cara.

**Próximo passo proposto:** testar em repo pequeno (verbo-design), medir token antes/depois numa pergunta real, só então decidir plugar em Palace/AgendaPRO.

## DESTINO sugerido
Vira referência de ferramenta de operação Claude Code, amarrada à skill `/token-economia`. NÃO entra no canônico até teste real confirmar o ganho de token (gate de destilação = aprovar antes).

---

## Transcrição fiel dos slides (extraída pelo CIC)

**Slide 1** — `/graphify` [logo Anthropic] · "the open source repo solving Claude's memory problem"

**Slide 2 — 01 THE FIX** — `/graphify` turns any repo into a knowledge graph. Code, docs, PDFs, even video — mapped into a graph Claude can query instead of grep.

**Slide 3 — 02 WHY IT WORKS** — It hands Claude a map, not a search bar. Grep has no clue how A connects to B. The graph already knows — and the why behind every link.

**Slide 4 — 03 HOW IT BUILDS** — Three passes:
- Pass 1 · Code: tree-sitter parses classes, functions, imports, call graphs. Local. No LLM. Free.
- Pass 2 · A/V: audio+video transcribed with faster-whisper, injected as nodes.
- Pass 3 · Docs: PDFs, papers + images get LLM semantic analysis. RAG-lite, no embeddings.

**Slide 5 — 04 WHAT YOU GET** — Nodes (function/doc/idea), Edges (how two connect), Communities (clusters), God nodes (most-connected hubs).

**Slide 6 — 05 THE RECEIPTS** — Same question, 40% the cost. Open-design repo (203 files → 197 nodes, 3.447 edges, 109 communities): ~200k tokens grepping vs ~80k via graphify.

**Slide 7 — 06 VS GRAPH RAG** — Not RAG, no embeddings. Graphify walks real connections (código: "what breaks if I change this?"); GraphRAG infere com LLM e usa vetores (docs/prosa: "what does the policy say?"). Graphify = resposta exata ("A calls B"); RAG = fuzzy.

**Slide 8 — 07 IT STAYS FRESH** — `graphify hook install` → post-commit hook reconstrói o grafo a cada commit. Determinístico, $0 de API, team-safe.

**Slide 9** — CTA: that's /graphify. Save / send to a dev / follow. @chase.ai

## Caption original (isca)
> Comment "agent" to get my Claude code guides
