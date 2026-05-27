---
name: feedback-cards-escolha-intuitivo
description: Cards de escolha (6+ produtos/serviços) ficam flat se forem visualmente idênticos · hierarquia + pílulas de info pré-decisão + CTA duplo resolve
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2d25a2dc-eb93-4396-88ab-448d26fd80d8
---

Quando há 6+ cards de escolha (ex: 6 tipos de massagem, 6 planos, 6 serviços), tratar todos igual gera "lista de itens" em vez de "menu intuitivo". Cliente precisa ler 6 vezes pra decidir, e não tem âncora visual pra qual escolher se está indeciso.

**Why:** Cards do `GridObjetivos` (Vida em Equilíbrio · 24/05/2026) começaram como 6 caixas cream idênticas. Sem hierarquia, sem info essencial visível (duração/categoria/recomendação), sem ação rápida. Cliente ficava paralisado.

**How to apply:**

1. **Hierarquia visual** · o item mais completo/caro vira BANNER destaque (background diferente, layout maior, 2 GlowOrbs decorativas) · NÃO mais um na fila
2. **Pílulas de info pré-decisão** sob o título (duração + indicação principal · sem precisar clicar pra saber)
3. **Badges contextuais** em itens-chave (3 cards no máximo · "Mais procurada", "Pra começar", "Ritual completo") · ajuda decisão · NÃO badge em todos (dilui)
4. **Brinde/diferencial em bloco border-left** quando aplicável (ex: "Esfoliante de brinde no 1º atendimento")
5. **CTA duplo no rodapé**: link "Ver detalhes →" (página da massagem) + botão circular WhatsApp (pre-formatted message específica por produto)
6. **Ícone em círculo** (terracota/10 com border) em vez de SVG line-art solto · presença visual real
7. **Mensagem de apoio embaixo da seção**: "Em dúvida sobre qual escolher? Conta o que está sentindo no WhatsApp" · captura indecisas

Padrão validado em: GridObjetivos.tsx (Vida em Equilíbrio). Pode replicar em Starteq, AgendaPRO planos, Carretinha pacotes etc.

Relacionado: [[feedback_starteq_facilita_nao_cria_trabalho]] (cada feature deve reduzir cliques · não adicionar)
