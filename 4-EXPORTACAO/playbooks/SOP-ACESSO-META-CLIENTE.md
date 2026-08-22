# SOP — como pegar acesso ao Meta de um cliente (sem pedir senha)
**Validado na tela em 30/07/2026** · primeiro uso: LocaJV
**Business ID da Impulso Digital: `1866084920737015`** (portfólio "BM Impulso Digital")

> Vocabulário: o Meta renomeou "Business Manager" para **"portfólio empresarial / portfólio de negócios"**. Tutorial que fala "BM" é a mesma coisa.
> ⚠️ Se a interface aparecer em português de Portugal ("Definições", "Utilizadores", "Portefólio"), trocar pra PT-BR — os nomes não batem com nenhum tutorial brasileiro.

---

## O que pedir ao cliente ANTES de começar

1. **Identificação do portfólio empresarial dele** (número longo)
2. **E-mail do contato dele** no Gerenciador de Negócios

Sem os dois, o fluxo trava na primeira etapa.

## Caminho na conta da Impulso

`business.facebook.com` → **Configurações** (engrenagem) → **Usuários** → **Parceiros** → botão azul **Adicionar** → clicar na **setinha ▼** (não no botão)

Aparecem duas opções:

| Opção | O que faz | Usar? |
|---|---|---|
| Conceder a um parceiro acesso aos seus recursos | **dá** os ativos da Impulso pra outro | ❌ não |
| **Peça para um parceiro atribuir os ativos dele a você** | **pede** acesso aos ativos do cliente | ✅ **esta** |

**Por que essa e não a outra:** nessa via o gestor faz o trabalho e o cliente só recebe o pedido e aprova. A alternativa obriga o cliente a navegar sozinho dentro do Business Manager — e isso não é óbvio nem pra quem trabalha com internet.

A tela de abertura confirma os requisitos:
- "Seu parceiro precisa ter um portfólio empresarial"
- "Você precisará da identificação do portfólio empresarial dele"
- "Você precisará do nome e email do seu contato"
- ✅ **"Você não será adicionado ao portfólio empresarial dele"** — é o correto: acesso aos ativos, sem entrar na estrutura interna do cliente

## As 4 etapas do fluxo

### 1. Selecionar parceiro
- **E-mail do contato** — do cliente
- **Identificação do portfólio empresarial** — o Business ID do cliente
- *Suas informações compartilhadas:* aparece automático (nome + BM Impulso Digital + ID)
- **Sua função comercial: `Agência`** ← a Impulso é a agência
- **A função do parceiro: `Marca ou empresa`** ← o cliente é o anunciante

⚠️ O padrão vem "Marca ou empresa" nos **dois** campos. Corrigir o primeiro pra **Agência**.

### 2. Permissões
Marcar os ativos a solicitar, com o **mínimo necessário**:

| Ativo | Nível |
|---|---|
| Página do Facebook | Criar anúncios (ou acesso total se precisar responder) |
| Conta de anúncios | **Gerenciar campanhas** — não precisa de admin |
| Pixel / conjunto de dados | Ver e editar |
| Conta do Instagram | Criar anúncios |
| Conta do WhatsApp | vincular se a campanha for Click-to-WhatsApp |

### 3. Linha de crédito
🔴 **PULAR. Não solicitar.**
Linha de crédito é pra agência que paga a mídia e repassa depois. **A verba tem que sair do cartão do cliente, na conta dele.** Pedir linha de crédito é assumir a dívida da mídia — não é o modelo da Impulso.

### 4. Analisar
Conferir e enviar. O cliente recebe a solicitação e aprova.

---

## 🔴 O erro que custou a campanha da LocaJV (30-31/07/2026) — ler antes de tocar em conta de cliente

**O que aconteceu:** ao configurar do zero, o Meta restringiu o portfólio com o motivo **"conta criada ou usada com uma automação que não segue nossas regras"** — política de **integridade da conta**, não de conteúdo. Resultado: não pode criar nem veicular anúncio, nem usar públicos.

**O que provavelmente disparou (em ordem de peso estimado):**
1. 🔴 **Criar um segundo portfólio, com outro perfil pessoal, na mesma máquina, em 24h** — feito justamente pra escapar do bloqueio do primeiro. É o desenho clássico de evasão
2. **Ações administrativas em rajada** — criar, convidar, cancelar, reenviar em poucos minutos
3. **Acesso remoto (AnyDesk)** — dispositivo e rede diferentes do habitual daquela conta
4. **Convite repetido pro mesmo e-mail** depois de falhar
5. **Conta nova, sem histórico** que compensasse os sinais acima

### Como fazer diferente na próxima

- **Ritmo humano.** Espalhar as ações: cria o portfólio, respira, adiciona a página depois, convida no dia seguinte se der. Nada de fazer tudo em 10 minutos
- **Nunca criar um segundo portfólio pra contornar problema no primeiro.** Se travou, é análise e espera — criar outro piora
- **Não repetir a ação que falhou.** Falhou, para e diagnostica. Reenviar convite três vezes é sinal de bot
- **Prefira o cliente clicando**, com você orientando por chamada de vídeo, a você operando por acesso remoto. Mais lento, muito mais seguro
- **Antes de qualquer coisa:** conferir `business.facebook.com/business-support-home` → "Ver minhas contas" **nos dois lados** (gestor e cliente). Descobrir restrição preexistente **antes** de começar, não no meio
- Se for usar acesso remoto assim mesmo, fazer **uma coisa por sessão**, sem sequência de tentativas

### Se restringir mesmo assim
`business.facebook.com/business-support-home` → **Pedir análise** (prazo de 180 dias). Texto que descreve uso real, sem jargão: proprietário, negócio local, atividade manual, auxílio de profissional, sem automação nem robô. E **parar de mexer** enquanto a análise corre.

## Regras que não se quebram

1. **Nunca aceitar login e senha do cliente.** Login de outro dispositivo/cidade dispara checkpoint de segurança e derruba a conta dele. Fora que viola os Termos do Meta e não deixa rastro de quem fez o quê.
   *Como falar com o cliente:* "não quero ter sua senha, é ruim pra você e ruim pra mim. Tem um jeito oficial onde eu trabalho na sua conta sem nunca ver sua senha, e no dia que você quiser, você me remove com dois cliques."

2. **A conta de anúncios nasce no portfólio do CLIENTE, nunca no da Impulso.** Se criar no da agência, o pixel, o histórico e o aprendizado do algoritmo ficam presos com a Impulso — e no dia que o cliente sair, ele perde tudo. Briga garantida.

3. **Meio de pagamento é cartão do cliente**, cadastrado no portfólio dele.

4. **Configurar limite de gasto da conta** como freio automático contra estouro.

5. **No fim do contrato:** remover a parceria. Não excluir ativo nenhum — o cliente fica com tudo rodando.

---

## Se o cliente não tiver portfólio empresarial

É o caso mais comum — dono de negócio local costuma ter só a página e o Instagram. Ordem:

1. **Ele** cria em `business.facebook.com` → Criar conta (nome da empresa, e-mail dele)
2. **Ele** adiciona a Página e o Instagram como ativos
3. **Ele** cria a conta de anúncios ali dentro, com o cartão dele
4. **Ele** pega a Identificação do portfólio e manda pro gestor
5. Gestor roda o fluxo acima

⚠️ Confirmar antes que **ele é admin da Página**. Se a página foi criada por um parente ou por uma agência antiga, trava aqui.

---

## Mensagem pronta pra mandar ao cliente

```
Fala! Pra eu configurar a campanha na tua conta sem precisar da tua senha,
preciso de duas coisas:

1) O número de identificação do teu Meta Business
2) O e-mail que você usa nele

Como pegar o número:
- Entra em business.facebook.com pelo computador
- Clica na engrenagem (Configurações)
- No menu da esquerda: "Informações da empresa"
- Vai aparecer "Identificação do portfólio de negócios" — um número longo
- Me manda esse número

Se não abrir nada ou disser que você não tem, me avisa que eu te mando o
passo a passo pra criar. Leva 3 minutos.

Esse número não é senha, pode mandar tranquilo. Depois que eu enviar a
solicitação, vai chegar um aviso pra você aprovar — e é só isso que você
precisa fazer.
```
