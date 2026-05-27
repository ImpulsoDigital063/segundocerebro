---
name: feedback-nao-clonar-projeto-anterior
description: "Cliente novo NUNCA recebe clone de identidade/layout/copy de outro cliente · referência só pra stack técnico, nunca pra design"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2d25a2dc-eb93-4396-88ab-448d26fd80d8
---

# Cliente novo ≠ template de cliente anterior

**Regra:** Quando o cliente cita "quero igual ao do fulano" ou quando você identifica um projeto interno similar, **isso vale APENAS pra stack técnico** (Next.js versão, Tailwind, configs, padrão de pastas). NUNCA pra identidade visual, layout, copy, hero, componentes específicos ou estrutura de seções.

**Why:** Eduardo cravou 23/05/2026 durante o briefing do Vida em Equilíbrio:
> "não precisa ser perfeitamente igual o do Renato, ele usou isso porque não viu outros, para para o Vida em Equilíbrio, quero trazer algo único"

Cliente que pede "igual o do fulano" está pedindo qualidade comparável, não cópia. Ele não viu outras opções. Repassar template é entregar genérico — exatamente o oposto do que Impulso vende.

**How to apply:**
- Stack técnico (package.json, next.config, postcss, tsconfig, .gitignore, AGENTS.md, CLAUDE.md): pode espelhar projeto interno consolidado — é infra, não identidade
- Layout (hero, ordem de seções, tipo de componentes): pensar do zero a partir do briefing do cliente novo
- Copy: do zero, baseado na voz do cliente novo (escutar áudios, entender tom)
- Visual (paleta, fonte, mood): do zero, baseado no posicionamento e público do cliente novo
- Componentes específicos (`Hero`, `Manifesto`, `Sobre[Nome]`): NÃO importar de projeto anterior · criar específico
- Ao iniciar projeto, criar `page.tsx` placeholder neutro até cravar identidade — não cair na tentação de já pôr 15 seções clonadas do projeto-referência

Conecta com [[feedback_lp_festa_kids_premium_nao_cartoon]] (cada nicho merece tratamento próprio) e [[feedback_visual_validar_referencia_antes]] (sem ref específica, qualquer edit é chute).
