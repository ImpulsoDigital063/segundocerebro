---
name: feedback-estudar-salao99-antes-de-implementar
description: "Cravado Eduardo 26/05 · antes de implementar QUALQUER feature nova no AgendaPRO, estudar como Salão99 faz · Salão99 é a referência de padrão arquitetural"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Antes de implementar feature nova, estudar 2 lados:
1. **Como funciona hoje no nosso código** (não inventar do zero)
2. **Como o Salão99 faz** (referência de padrão arquitetural cravada)

**Why:** Eduardo cravou 26/05/2026: "além de estudar a nossa seção tem que
estudar como o salão99 faz viu". Salão99 desliga 31/05/2026 e estamos
absorvendo padrões/clientes em migração. Replicar o que funciona evita
inventar UI/fluxo do zero e dá conforto pra clientes vindos de lá.

**How to apply:**
- Antes de propor plano de qualquer feature P1/P2: pedir pro Eduardo enviar
  prints do fluxo no Salão99 OU fazer drilldown CIC READ-ONLY (regra
  cravada [[feedback_cic_salao99_marko_read_only]]).
- Listar diferenças "como Salão99 faz" vs "como nossa atual" ANTES de codar.
- Se Salão99 NÃO tem a feature, registrar isso e considerar se faz sentido
  ter (memória `reference_cortesia_removida_ui_desktop.md` é exemplo: tirei
  porque Salão99 não tem).
- Se Salão99 tem MAS é fluxo ruim, propor melhoria explícita (não copiar
  cego).

**Memórias relacionadas:**
- [[reference_salao99_padroes_arquiteturais]] — padrões cravados via CIC
- [[feedback_usar_segundo_cerebro_antes_de_inventar]] — geral: estudar antes
- [[feedback_cic_salao99_marko_read_only]] — CIC autorizado SÓ pra leitura
- [[reference_salao99_pdf_recibo_layout]] — exemplo de estudo + replicação
- [[reference_vantagem_pdf_whatsapp_vs_salao99]] — onde superamos o padrão
