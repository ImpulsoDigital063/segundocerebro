---
name: feedback-tablet-recepcao-otimizar
description: Cravado Eduardo 26/05 · Recepção usa TABLET · sistema tri-modal (mobile · tablet · desktop) · não esquecer breakpoint md
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Cravado Eduardo 26/05/2026:**

Recepção do salão usa **tablet** (não só mobile). Sistema agora precisa ser
otimizado pra 3 contextos:

| Contexto | Quem usa | Breakpoint Tailwind | Largura típica |
|---|---|---|---|
| **Mobile** | Dono no celular (Olímpio) | sem prefixo | 360-414px |
| **Tablet** | **Recepção (Letícia · Palace)** | `md:` (≥768px) | 768-1024px |
| **Desktop** | Dono/recep em PC (Palace/Studio Mood) | `lg:` (≥1024px) | 1280px+ |

## Como aplicar

Antes de qualquer mudança de UI:
1. Mobile (sem prefixo) — layout vertical · botões cheios · stack
2. Tablet (`md:`) — grid 2 colunas onde fizer sentido · modal médio
3. Desktop (`lg:`) — grid wide · sidebar lateral · modal grande

**Cuidados específicos pra tablet:**
- Modais NÃO ficam gigantes em tablet (limitar `md:max-w-2xl`)
- Touch targets ≥ 44px (mesmo no tablet · dedo grande)
- Não confiar em hover (recep clica · não passa mouse)
- Forms com 1-2 colunas no máximo em `md:` (3+ vira tela cheia chata)
- Tabelas com scroll horizontal SE necessário (igual fizemos comanda)

**Why:** Eduardo cravou 26/05/2026: "outro detalhe que surgiu, a recepção
usa tablet, então alem de otimizar para desktop e mobile, tem que ser
otimizado para tablet, usa o mesmo sistema de detecção de aparelho"

**How to apply:**
- Toda feature nova: pensar nos 3 contextos
- Auditoria mobile que já fizemos (#139): pensar se vale auditar tablet também
- Letícia (recep Palace · usa tablet) é o caso de uso real pra validar
- **No `/recepcao` especificamente: breakpoint é `md:` (não `lg:`)** porque Letícia opera em iPad retrato (810px). Sidebar fixa, GradeTimeline e layouts wide disparam em `md:`. Mobile (<768px) preserva dashboard antigo.

**Histórico:**
- 26/05 14:30 · Eduardo cravou: "Letícia opera por tablet na verdade" depois eu ter colocado breakpoint em `lg:` por engano · corrigi pra `md:` em sidebar + page + layout

**Memórias relacionadas:**
- [[feedback_agendapro_mobile_desktop_isolado]] — regra antiga 2-modal · agora estende pra 3
- [[feedback_feature_nova_em_mobile_e_desktop]] — feature em ambos lados
- [[feedback_consultar_escopo_mobile_vs_desktop]] — perguntar antes
