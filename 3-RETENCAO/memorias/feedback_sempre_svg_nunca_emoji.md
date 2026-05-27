---
name: feedback-sempre-svg-nunca-emoji
description: "Regra global para TODAS as LPs/sites Impulso — SVG sempre, NUNCA emojis em interface visual. Vale pra ícones, mascotes, decoração, ilustrações."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebc6e654-0c8c-4307-a888-734857d09fa9
---

**Regra global Impulso:** em qualquer LP/site/produto digital — **SVG sempre, NUNCA emojis** como ícone, mascote, decoração ou ilustração visual.

**Why:** Esse princípio já estava cravado pra Aura desde 02/05/2026 (1ª diretriz da construção: *"SVG sempre, NUNCA emojis"*). Em 13/05 codei a LP da Carretinha Kids usando emojis em vários componentes (🎈🎁🦄🎂🛝🎢🟣💡👧👦🧒 etc). Eduardo cortou: *"opa. lembra da refra né. nada de emojis, sómente SVGs"*. A regra é universal — não específica de Aura.

**How to apply:**
- Toda LP/site novo da Impulso: zero emoji visual desde o primeiro componente
- Pra cada decoração/ícone/mascote, **criar SVG inline** em componente reusável (`components/Icons.tsx` é padrão sugerido)
- Vantagens: escala perfeita, cor configurável, sem dependência de fonte do sistema, identidade visual única, sem "look genérico de emoji do iPhone"
- Para personagens/mascotes mais elaborados: SVG cartoon (formas geométricas + traços simples · estilo Cocomelon/Bluey)
- Emojis podem aparecer apenas em: (a) campo de input do usuário · (b) cópia textual onde o usuário escreve · (c) mensagens WhatsApp pré-preenchidas (essas vão pro WhatsApp e lá emoji funciona)
- **Não** usar emoji em: hero · botão · ícone de seção · trust bar · features · galeria · qualquer elemento de design

**Quando me pegar tentando usar emoji:** parar e criar SVG. Se for componente novo, adicionar em `components/Icons.tsx` e reutilizar.
