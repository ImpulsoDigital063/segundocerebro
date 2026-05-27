---
name: modo-solo-audit-obrigatorio
description: "Quando Eduardo crava \"tô ocupado, conto com vc, segue\", é modo solo · audit funcional + visual OBRIGATÓRIO antes de declarar pronto · jamais terceirizar verificação pra ele"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: dec639ce-3f96-4f92-ab41-88c15a50f7f0
---

Quando Eduardo crava algo como "tô muito ocupado em outro projeto · pode tocar sozinho · confio em vc", o trabalho é solo MAS a régua sobe.

**Modo solo cravado significa:**

1. Pode avançar features sem confirmar a cada passo (autonomia ampla)
2. Mas **auditoria funcional + visual** é PRÉ-REQUISITO antes de declarar pronto
3. Validar via curl + puppeteer-core (screenshot) sempre que possível
4. λ.prova-na-fonte cravada · UI verde / deploy READY / build OK NÃO são evidência suficiente
5. Cravar relatório explícito do que foi auditado e o veredito (OK · WARNING · CRITICAL)

**Why:** Eduardo está depositando confiança porque não tem banda pra auditar. Se eu declarar pronto sem validar e tiver bug visual ou regressão, ele só descobre depois de cliente reclamar · pior cenário pra confiança. Audit cravado é o seguro da relação.

**How to apply:**
- Toda entrega solo termina com audit cravado (funcional + visual)
- Funcional: curl HTTP status + grep estrutural + validar JSON-LD + checar links internos
- Visual: puppeteer-core screenshot mobile (375x812) + desktop (1280x800) das LPs principais + 1 artigo amostral · Read da PNG pra cravar visual com meus próprios olhos
- Reportar findings em tabela com 🟢 OK · 🟡 WARNING · 🔴 CRITICAL
- Se encontrar CRITICAL, fix antes de declarar entrega pronta · não terceirizar pro Eduardo
- Vincula com [[feedback_prova_na_fonte_persistencia]] e [[feedback_visual_validar_referencia_antes]]
