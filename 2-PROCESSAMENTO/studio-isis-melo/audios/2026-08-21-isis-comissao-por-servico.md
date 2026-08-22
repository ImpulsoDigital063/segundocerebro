# Isis · áudios de 21/08/2026, 11h19–11h20 (WhatsApp)

Três PTTs, transcritos local (whisper large-v3-turbo). Assunto: **item 6 — comissão por serviço**.

## O que ela disse

> "A mesma profissional, por exemplo a Tassiane, ela atende serviços de manicure e pedicure, mas ela também é podóloga e ela também faz unha de gel no pé. Então há uma diferença de porcentagem para cada serviço. Manicure e pedicure é 50%. Para a podologia eu pago (…) 70%. E para a unha de gel no pé também é 70% para ela."

> "Esses dois serviços, de gel e podologia, ela usa o material dela. Para manicure e pedicure eu que dou todo o material — nesse caso é só a mão de obra. Por isso que é 50%."

> "Só no serviço de manicure e pedicure que eu pago 50%, porque é o espaço e o material meu, e a pessoa só entra com a mão de obra."

> "Tendo qualquer outra dúvida das coisas que você anotou, você vai me perguntando que eu vou respondendo aos poucos. Às vezes demoro um pouquinho porque tô fazendo atendimento o dia todo."

## O que isso muda no escopo

**O driver não é categoria de serviço — é quem fornece o material.** O percentual é atributo **do serviço**, e a mesma profissional recebe percentuais diferentes no mesmo dia:

| serviço | profissional | material |
|---|---|---|
| Manicure e pedicure | **50%** | do studio |
| Podologia | **70%** | da profissional |
| Unha de gel no pé | **70%** | da profissional |

Consequência direta: `professionals.commission_percentage` (percentual por PESSOA, que é como o sistema funciona hoje) **não representa o negócio dela**. A Tassiane está cadastrada com 30% — número que não corresponde a nenhuma das três regras acima.

Categoria de serviço, se entrar, é organização de vitrine. **O que resolve o problema dela é percentual de comissão no cadastro do serviço**, sobrepondo o da pessoa.

## A confirmar com ela

- No áudio ela diz "para outros serviços aqui também normalmente é 30%… e 70% para o espaço e 70% para a profissional" — a frase saiu embolada e não fecha. Provável: **30% espaço / 70% profissional** como padrão da casa, com manicure e pedicure sendo a exceção 50/50. **Perguntar antes de implementar.**
- O primeiro áudio termina cortado em "Só manicure e pedicure que hoje…" — pode haver regra a mais que não foi gravada.
- Existe serviço com material misto (parte dela, parte do studio)? Se sim, o percentual por serviço resolve igual, mas vale saber.
- Quando ela mudar o percentual de um serviço, o histórico já fechado deve permanecer com o valor antigo (é como o sistema já grava hoje: comissão em valor na linha da comanda). Confirmar que é o esperado.

---

## Confirmação dela (21/08, por texto)

Perguntamos, com o porquê de cada linha:

> Manicure e pedicure — 50% pra profissional (material é seu)
> Podologia — 70% pra profissional (material dela)
> Unha de gel no pé — 70% pra profissional (material dela)
> Demais serviços — 70% pra profissional, 30% pro studio
> Tá certo assim? E tem algum outro serviço que fuja dessa regra?

**Resposta dela: "Isso aí."**

Quadro fechado. Ela não citou exceção nenhuma além da manicure e pedicure — e, mesmo que apareça depois, o percentual é campo por serviço, então absorve sem código novo.

**Isso é a trava de escopo do item 6.** Guardar.
