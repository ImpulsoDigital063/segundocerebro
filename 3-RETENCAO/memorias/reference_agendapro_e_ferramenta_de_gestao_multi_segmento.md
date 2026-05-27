---
name: reference-agendapro-e-ferramenta-de-gestao-multi-segmento
description: Cravado Eduardo 26/05 · AgendaPRO NÃO é só agendamento nem só pra salão/barbearia · está se tornando ferramenta de gestão pra qualquer negócio
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Visão de produto cravada por Eduardo 26/05/2026:**

> "depois do nosso sistema começar a rodar ele não vai ser só pra barbearia
> e os outros 3, vai ser pra qualquer negócio. afinal esse é um sistema não
> só de Agendamento, hoje está se tornando uma ferramenta de gestão"

## O que isso muda nas decisões

**Cliente atual NÃO é o público final.** Olímpio (barbearia), Palace (nail
spa), Studio Mood (tranças), Viva Cacheada (salão) são os 3-4 primeiros, mas
o produto se posiciona como **ferramenta de gestão multi-segmento**.

**Implicações concretas:**

1. **Features "não-essenciais pra salão" não devem ser cortadas só porque
   nenhum cliente atual pediu.** Exemplos: NFS-e, Devolução de produto,
   Pacotes/Combos, Inventário em massa, Cupom térmico → tudo isso é
   essencial pra muitos segmentos (loja, clínica, estúdio, etc).

2. **Modelo de dados generaliza.** Quando criar entidade nova, pensar:
   "isso só faz sentido em salão? OU pode servir pra clínica · pet shop ·
   loja física · academia · curso?" — se a resposta for "só salão",
   provavelmente está errado.

3. **Copy/UI não exclui.** Evitar texto que diga "seu salão" "seu barbeiro"
   onde puder dizer "seu negócio". Termos universais > nicho.

4. **Roadmap pensa segmentos futuros.** Toda decisão de produto deve
   considerar: "esse caminho fecha portas pra outros nichos OU abre?".

5. **Devolução de produto (#120), NFS-e (#126), Inventário massa (#121)
   são features importantes mesmo sem demanda dos 3-4 atuais.** Pular agora
   por priorização OK · descartar não.

## Memórias relacionadas

- [[feedback_distincao_local_regional_nacional]] — pensar local vs regional
- [[feedback_universal_nao_personaliza_cliente]] — feature universal sem nome de cliente
- [[reference_salao99_padroes_arquiteturais]] — Salão99 é genérico, virou padrão de fato
