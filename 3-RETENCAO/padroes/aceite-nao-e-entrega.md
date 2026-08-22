# λ.aceite-nao-e-entrega — quando o "enviado" mente

**Cravado em 21/08/2026**, depois de um dia inteiro perdido caçando um bug que não existia no nosso código.

## O padrão

**Aceite do provedor NUNCA é prova de entrega.** Vale para WhatsApp, e-mail, SMS, push, gateway de pagamento — qualquer coisa que atravesse fronteira de sistema.

| o que a gente vê | o que significa de verdade |
|---|---|
| `HTTP 200` + `messageId` | o provedor **enfileirou** |
| `status: enviado` no nosso banco | **nós** decidimos gravar isso |
| dois tiques no WhatsApp | **entregue** — essa é a prova |
| webhook `delivered` / `DELIVERY_ACK` / `RECEIVED` | **entregue** — essa é a prova |

É o mesmo λ.prova-na-fonte, aplicado a mensageria: `res.ok` é o "UI verde" do provedor.

## O caso que criou a regra

Canal de WhatsApp do AgendaPRO. Cinco mensagens saíram com `HTTP 200`, `messageId` e `provider_id` gravado. O `message_log` dizia **enviado** nas cinco. **Nenhuma chegou** em quem nunca tinha mandado mensagem para o número da instância antes.

O motivo real só apareceu quando Eduardo abriu a tela "Saúde do Chip" no painel do provedor: **TIMELOCKED — número restrito pela Meta**. Nada disso vazava pela API de envio.

## Os dois erros de método (mais caros que o bug)

**1. Concluir por ausência de confirmação.** Uma mensagem "não chegou" no celular do Eduardo e eu tratei como falha comprovada. Ela tinha chegado — ele só não tinha visto (o print mostrou "Mensagens não lidas: 4"). Em cima dessa conclusão errada eu **desconectei uma sessão que estava funcionando**. Ausência de confirmação não é prova de falha; a prova é positiva, e vem do aparelho do destinatário.

**2. Generalizar de um caso não representativo.** Testei com o número do próprio Eduardo, que já tinha conversa com o remetente, e concluí que "o formato do número não importa". Importava — e o caso real (cliente que nunca conversou) era justamente o que não estava no teste. **Testar com quem já conversou é testar o caminho fácil.**

## Como aplicar

- **Guardar o id do provedor** (`messageId`, `wamid`) junto do registro, sempre.
- **Só marcar como entregue com webhook de status.** Sem webhook, o status honesto é "aceito", não "enviado".
- **Ausência de `delivered` não gera evento** — precisa de varredura do que ficou parado em "aceito" por mais de X minutos.
- **Consultar a saúde do canal antes de disparar**, quando o provedor expõe (`GET /v1/instance/health` na W-API; quality rating na Cloud API). Se estiver restrito, segurar a fila e avisar, em vez de gravar "enviado" em mensagem que não sai.
- **Testar com destinatário virgem**, que nunca falou com o remetente. É o único teste que reproduz o cliente real.

## Onde isso morde

Qualquer produto que avise cliente final: AgendaPRO, ComandaPRO, AppDelyvery, SystemPalace. O sintoma é sempre o mesmo — o painel diz que avisou, o cliente jura que não recebeu, e não há como saber quem está certo.

Liga com `λ.prova-na-fonte` e `λ.diagnostico-no-nivel-certo`.
