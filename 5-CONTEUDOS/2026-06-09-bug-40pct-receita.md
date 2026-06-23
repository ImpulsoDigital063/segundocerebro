# Conteúdo · "O bug que escondia 40% da receita de um cliente"

**Tema:** build-in-public · financeiro de SaaS · 09/06/2026
**Gancho:** "Meu cliente recebeu R$4.210 no mês. O sistema mostrava R$2.500. Cadê os R$1.710?"
**Formato:** carrossel (terminal/dev) · público dev + dono de negócio
**Status:** matéria-prima pronta (falta produzir os slides)

## A história (real)
Cliente (barbearia, 1 mês de uso, 149 atendimentos) tava com o "Recebido" do painel mostrando bem menos do que ele recebeu de verdade. Fui auditar.

- **Recebido de verdade:** R$4.210 (95 atendimentos pagos)
- **O painel mostrava:** R$2.500
- **Sumido:** R$1.710 — 40% da receita dele, invisível.

## A causa (a parte que ensina)
Todo atendimento dele virava uma comanda. Ele pagava o atendimento **direto** (marcava "pago" na hora), o que marcava o atendimento como pago — **mas não fechava a comanda**.

Aí o cálculo do "Recebido" tinha uma regra: *"ignora atendimentos que já estão numa comanda, porque esses contam pelo pagamento da comanda"*. Lógica correta — pra evitar contar o dinheiro duas vezes. MAS: se a comanda ficou **aberta** (sem pagamento registrado nela), o atendimento era ignorado pela régua **e** não tinha pagamento na comanda → o dinheiro caía no limbo. **Não contava em lugar nenhum.**

38 comandas nessa situação. R$1.710.

## A lição / dica
- Quando você tem **dois caminhos** pra mesma ação (pagar direto OU fechar a comanda), eles **têm que se reconciliar** — senão o estado fica inconsistente e some número.
- Regra de deduplicação ("não conta 2x") é faca de dois gumes: a condição de exclusão (`tem comanda`) tava certa pro caso feliz e **errada** pro caso de borda (comanda aberta). A condição certa era `tem comanda FECHADA`.
- **O dado nunca esteve errado** — todos os atendimentos/pagamentos estavam lá. Era o **relatório** que somava errado. (Ótimo gancho: "seus dados podem estar certos e seu painel mentindo".)

## O conserto
1. Reconciliei os dados (fechei as 38, registrei o pagamento) → Recebido foi pra R$4.220.
2. Consertei o fluxo: pagar direto agora **fecha a comanda aberta** do atendimento.
3. Botei um **monitor automático** (semanal, alerta no Telegram) que detecta esse limbo em qualquer cliente — pra nunca mais depender de auditoria manual.

## Esqueleto de slides (rascunho)
1. Capa: "Meu cliente recebeu R$4.210. O sistema mostrava R$2.500."
2. "Cadê os R$1.710? (40% sumido)"
3. A causa: 2 caminhos de pagamento que não se conversavam.
4. A regra de dedup que virou contra mim (`tem comanda` vs `tem comanda fechada`).
5. "O dado tava certo. O relatório é que mentia."
6. O conserto (reconciliar + fechar no fluxo + monitor automático).
7. Lição: cuidado com regra de "não contar 2x" — teste a borda.
8. CTA: build-in-public, segue.

## Notas
- Ligado ao conteúdo #1 (ataque de bot) — mesma série "bastidor de quem tá subindo um SaaS".
- Não citar o nome do cliente no post (privacidade) — "um cliente barbearia".
