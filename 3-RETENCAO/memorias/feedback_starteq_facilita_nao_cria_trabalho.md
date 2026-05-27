---
name: starteq-sistema-facilita-n-o-cria-trabalho
description: "λ.menos-cliques · princípio cravado pelo Júnior · todo módulo do painel é julgado por \"remove fricção\" vs \"adiciona tarefa\" · auditável feature por feature"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 0792c7fd-7671-4d19-bfd2-291c5e04c76d
---

λ.menos-cliques · todo módulo do painel Starteq tem que **remover trabalho do Júnior**, não criar mais. Princípio cravado por ele direto: "sistema tem que facilitar a vida, não gerar mais trabalho".

**Why:** O GestãoClick atual virou inimigo dele · tem que abrir 3 telas pra apurar comissão · fechamento de caixa pede dado que já está em outro lugar · OS pede info redundante. Cada vez que o Júnior abre o sistema pra fazer alguma coisa, sente que está trabalhando PRA o sistema, não com ele. Esse é o ponto de virada da venda — se o painel novo cair na mesma armadilha, vira churn no mês 2.

**How to apply:** Cada decisão de UX/UI no painel admin é julgada por 3 perguntas:
1. **Reduz cliques?** Ação principal do módulo (criar OS, marcar entregue, fechar caixa) deve estar em 1-2 cliques do dashboard. Modal não é shortcut · é fricção a mais.
2. **Pré-preenche o que dá?** Cliente que já tem OS aberta · técnico padrão · valor sugerido baseado em histórico · comissão calculada do `commission_default`. Júnior não digita o que o sistema já sabe.
3. **Mostra o próximo passo sem ele perguntar?** "Foco do Dia" no dashboard, badge de "OS pronta avisar cliente", alerta de comissão a pagar antes do fim do mês. Sistema empurra, não espera ser consultado.

**Anti-padrão (não fazer):** formulário com 8 campos quando 3 resolvem · botão "Salvar" depois de "Confirmar" depois de "OK" · tela de listagem sem ação contextual (ter que entrar no detalhe pra mudar status) · 2 fontes da verdade pro mesmo dado (que foi exatamente o bug de comissão que estamos consertando).

**Onde checar:** [[Starteq · modelo caixa + comissão cravado]] documenta o caso concreto de aplicação desse princípio (3 fontes da verdade desencontradas → 1 fonte + eventos). Toda nova feature deve passar pelo mesmo crivo antes de ir pro código.

Aplica também a outros clientes Impulso · operadores de loja física valorizam "menos cliques" muito mais do que "mais features".
