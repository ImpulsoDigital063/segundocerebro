---
name: consultar-escopo-mobile-vs-desktop
description: "antes de implementar feature nova no AgendaPRO, analisar e SUGERIR proativamente onde ela faz sentido (só desktop · só mobile · ambos) com justificativa · Eduardo decide com base na minha leitura · juntos somos mais fortes"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Cravado por Eduardo em 21/05/2026 após eu sugerir replicar a Tab Atividades complexa em mobile e ele cravar "essas áreas mais detalhadas vamos deixar no desktop mesmo".

**Regra:** sou consultor, não só executor. Antes de codar feature nova, analiso onde ela faz sentido morar (desktop · mobile · ambos) e apresento RECOMENDAÇÃO com motivo. Eduardo decide. Padrão de comunicação: *"Eduardo, essa funcionalidade seria uma boa só no desktop mesmo, por isso e por isso. Tu concorda?"* (ou inverso).

**Why:** sou IA · tenho leitura técnica de quão usável a feature fica em cada lado. Eduardo tem leitura de negócio · sabe quem usa o quê. Os 2 inputs juntos = decisão melhor que qualquer um sozinho. Antes eu silenciosamente assumia "isso vai em todos os lados" e gerava overhead (ou ele tinha que cravar a regra depois). Agora consulto.

**Framework de análise** (aplicar antes de cada feature):

### Sinais de "SÓ DESKTOP"
- Densidade alta de informação (tabela com 8+ colunas, gráficos complexos)
- Manipulação fina (drag-drop, hover, multi-select, kebab com menu longo)
- Operação administrativa profunda (relatórios cruzados, configurações avançadas)
- Usuário-alvo senta no PC (Adm, sócio, contador)
- Em mobile ficaria espremido, ilegível ou inusável
- Frequência baixa de uso (1x mês? OK só desktop)

### Sinais de "SÓ MOBILE"
- Operação de campo/balcão (recepcionista marcando cliente em segundos)
- Cliente final usando (sempre mobile · ex: agendamento público)
- Quick action que tem que rodar em 1-2 toques
- Notificação push / badge / vibração
- Feature posicional (câmera, geolocalização, scanner QR)

### Sinais de "AMBOS"
- Operação CORE do dia-a-dia (agendar, marcar pago, ver agenda do dia)
- Visualização básica (lista de clientes, KPIs do dia, faturamento)
- Feature que afeta cliente final (cadastro, mensagem, recibo)
- Feature já existente em um lado · adicionar a outro fecha paridade

### Template de consulta
> "Eduardo, antes de codar [feature X]: analisei e acho que faz mais sentido [só desktop / só mobile / ambos] porque [motivo técnico-UX 1] e [motivo de uso 2]. [Se ambos] · UX pode divergir: desktop fica [Y], mobile fica [Z]. Concorda?"

**Quando NÃO consultar:**
- Bugfix · escopo é o lugar onde o bug aparece
- Mudança visual pequena (cor, padding) · respeitando isolation
- Continuação de tarefa já com escopo cravado por ele

**Combinação com regras anteriores:**
- [[feature-nova-em-mobile-e-desktop]] · cobertura default = ambos
- [[agendapro-mobile-desktop-isolado]] · ajuste em um lado não vaza pro outro
- Essa regra adiciona: **consultar antes** pra cravar exceção quando faz sentido

**Casos cravados pra consulta:**
- Tab Atividades detalhada com kebab/chips · só desktop (Eduardo cravou 21/05)
- Edit drawer lateral (versus modal bottom sheet) · pode divergir UX por lado mantendo feature presente

Linka com [[destrinchar-decisao-por-decisao]] (uma consulta por vez · não bombardear).
