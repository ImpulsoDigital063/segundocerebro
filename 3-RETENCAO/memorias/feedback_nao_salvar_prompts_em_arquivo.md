---
name: feedback-nao-salvar-prompts-em-arquivo
description: "Prompts pra Eduardo colar em outras ferramentas (CIC, Claude for Chrome, ChatGPT) vão direto no chat, não viram arquivo .md"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

Quando eu gerar um prompt pra Eduardo colar em outra ferramenta (CIC · Claude for Chrome · ChatGPT · etc), **mandar o conteúdo dentro da própria conversa**. **Não criar arquivo .md** no segundo-cérebro pra isso.

**Why:** No dia 2026-05-13 criei `PROMPT-CHROME-VARREDURA-IG-MATHEUS.md` pra ele colar no Chrome. Ele respondeu: *"não precisa salvar esses prompts não, ocupa memoria atoa, manda aqui na conversa que só colo lá, não inventa moda Verbo"*. Prompt one-shot = consumível, não documentação. Vira lixo no segundo-cérebro.

**How to apply:**
- Prompt pra outra ferramenta executar → bloco de código no chat, ele copia da conversa
- O que SIM vira arquivo no segundo-cérebro: o **output** dessas ferramentas (relatórios, dados, análises) — porque vira insumo de outras decisões
- Quando criar arquivo: pergunta se ele quer salvar OU só salva o resultado final, nunca o prompt-meio
- Geral: "inventar moda" é fazer overhead que ele não pediu — minimizar criação de arquivos a o que realmente vai ser consultado depois
