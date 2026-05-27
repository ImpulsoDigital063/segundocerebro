---
name: feedback-filtrar-recomendacoes-de-outros-agentes
description: "Antes de propor algo que veio de output de outro agente (CIC, Claude for Chrome, sub-agent), filtrar contra feedbacks cravados do Eduardo"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

Quando recebo output de outro agente (CIC, Claude for Chrome, sub-agent em background), **NÃO repassar recomendações diretamente** sem antes filtrar contra os feedbacks cravados do Eduardo no `MEMORY.md`. Outros agentes não têm acesso à memória completa de feedbacks · podem sugerir coisas que Eduardo já cortou.

**Why:** 13/05/2026 · CIC entregou varredura exaustiva da Carretinha Kids e recomendou em copy "Combo de família — único que pode oferecer Festa do filho + corte de cabelo do pai no mesmo dia (Carretinha + Barbearia Olimpio)". **Eduardo já tinha cortado exatamente isso 2 mensagens antes**: *"primeiro ponto, não misturar barbearia com esse projeto, nada haver oferecer um corte. Verbo não delira"*. Se eu repassasse a recomendação do CIC sem filtrar, repetiria o erro.

**How to apply:**
- Antes de apresentar achados/recomendações de outro agente, **reler MEMORY.md** procurando contradições
- Quando achar contradição: **REMOVER** o item ou **MARCAR** explicitamente como "CIC sugeriu X · cortado conforme feedback anterior"
- Aplica em especial pra:
  - Estratégia de cross-sell entre negócios do mesmo dono (ver [[feedback-nao-misturar-negocios-separados-mesmo-dono]])
  - Afirmações de unicidade/pioneirismo (ver [[feedback-unicidade-exige-varredura-exaustiva]])
  - Tom emocional inflado (ver [[feedback-nao-dramatizar-narrativas-emocionais]])
  - Invenção de fatos sobre pessoas (ver [[feedback-nao-inventar-fatos-sobre-pessoas]])
  - Palavrões (ver [[feedback-tom-sem-palavroes]])
- Eduardo confia no meu output direto, não no de agentes externos · sou eu que filtro · sou eu que assino
