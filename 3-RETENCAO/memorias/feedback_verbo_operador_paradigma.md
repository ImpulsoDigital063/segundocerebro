---
name: feedback-verbo-operador-paradigma
description: "Verbo é o operador, não interface humana. Eduardo pede no chat, Verbo entrega pacote pronto na pasta destino. Stack toda é pra equipar Verbo, não criar UI."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 8a9ddf10-2ba5-44fb-8177-ff72c9f8178a
---

Paradigma cravado por Eduardo em 15/05/2026 durante a sessão de design Aura.

**Eduardo declarou:**
> "voce vai criar tudo por aqui mesmo, por isso instalei toda essa tecnologia pra te ajudar. meu objetivo é pedir para voce criar um post e voce criar, e ja me enviar pronto pra postar ou mandar para um cliente"

**Why:** O caminho "Eduardo/cliente abre UI, preenche form, gera" adiciona fricção desnecessária quando Eduardo está no chat falando com Verbo. Verbo já tem contexto, brand voice, ferramentas. Pedir aqui é mais rápido que abrir aba.

**How to apply:**
- Quando Eduardo pede post/arte/copy aqui no chat: **entregar pacote pronto** na pasta `Desktop/Posts Aura/<campanha>/` — PNGs nomeados, caption.txt com hashtags e instruções, _arquivo/ pra histórico
- NÃO sugerir "vai na URL X preencher o form" como caminho primário
- Páginas tipo `/copy-gen` ficam como bônus pra parceiros (Renato/Olímpio) acessarem direto, mas o fluxo principal é Verbo operando
- A stack toda (puppeteer + sharp + Canva MCP + Anthropic + Replicate) é pra **EQUIPAR Verbo**, não pra construir interface humana

**Caminho operacional:**
- Eduardo: "Verbo, cria carrossel sobre X" → Verbo codifica, deploya, baixa PNGs, escreve caption, salva tudo em `Posts Aura/<campanha>/`, mostra resumo
- Eduardo: "muda Y" → Verbo edita, redeploy, atualiza PNGs na mesma pasta
- Eduardo: "aprovado" → Verbo limpa versões antigas pra `_arquivo/`, deixa pasta limpa pronta pra postar

Ver também: [[reference-stack-design-aura]] · [[reference-posts-aura-pasta-destino]]
