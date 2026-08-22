# FlagCheck — verificação de locatário (LocaJV)

Levantado em **11/08/2026**, direto no site deles. Substitui e corrige o que
estava no dossiê do AppDelyvery (`app-entregas-b2b/DOSSIE-RECONHECIMENTO.md`).

Fontes: [flagcheck.com.br](https://www.flagcheck.com.br/) ·
[api-parceiros](https://flagcheck.com.br/api-parceiros/) ·
[app.flagcheck.com.br](https://app.flagcheck.com.br/login)

---

## ⛔ Decisão: SÓ ANTECEDENTES (11/08/2026)

Eduardo cortou a consulta de CNH do escopo. O módulo pergunta uma coisa
só e registra uma coisa só: antecedentes. **Categoria e validade da CNH
continuam anotadas à mão** no cadastro do locatário, que é onde já
estavam — o Jay confere o documento na entrega.

Consequência prática: **a Infosimples sai do projeto** de vez, e o
combo de fornecedores fica em um só. O achado abaixo fica registrado
porque muda de figura se ele voltar atrás.

---

## A correção que motivou a dúvida: eles TÊM consulta de CNH

O dossiê do AppDelyvery dizia "**NÃO inclui CNH** (separado)" e por isso a
Infosimples entrava no combo. **Está desatualizado.** A API tem endpoint
próprio de CNH, e a documentação deles descreve exatamente o nosso caso:

> consulta de CNH via CPF, retornando categoria, validade e situação da
> permissão para dirigir — ideal para motoboys e entregadores

**Fora do escopo por decisão de 11/08/2026.** Fica anotado porque, se um dia
a locadora quiser automatizar a conferência da habilitação, não precisa de
fornecedor novo — é o mesmo contrato.

⚠️ O preço da consulta de CNH não está publicado; o R$3,33 é do background
check. Só importa se voltar ao escopo.

---

## Como a API funciona

| | |
|---|---|
| Tipo | REST, resposta em JSON |
| Autenticação | header `X-API-Key: flc_...` |
| Antecedentes por CPF | `POST /api/redflag/search/cpf` — corpo `{"cpf": "111.444.777-35"}` |
| Por nome | `POST /api/redflag/search/name` |
| Por telefone | `POST /api/redflag/search/phone` — busca reversa |
| CNH | `POST /api/cnh/verify` |
| Maioridade (Lei FELCA) | `POST /api/felca/age-check` e `/api/felca/liveness` |
| Tempo de resposta | até 30s |
| SLA | 99,9% |
| Extras | sandbox, Postman Collection, OpenAPI, SDKs, webhooks, rate limiting |

**O que a consulta devolve:** dados da pessoa, processos judiciais com linha do
tempo oficial, situação PEP, sanções, execuções de dívida, e um **score de
risco em três faixas — verde / amarelo / vermelho**.

Eles afirmam mostrar o que a certidão de antecedentes não mostra: processo em
andamento e ação trabalhista.

---

## Dinheiro

Duas tabelas diferentes, e isso importa:

**Pela API de parceiros:** R$ 3,33 por consulta, **sem mensalidade e sem volume
mínimo**. Cobra só em resultado bom — erro de validação e indisponibilidade não
consomem crédito. Lista de homônimos ou sem resultado é grátis. Acima de
20 mil/mês, −15%.

**Pelo site, em pacote de créditos** (crédito não expira):

| Pacote | Créditos | Valor | Por consulta |
|---|---|---|---|
| Básico | 2 | R$ 10,00 | R$ 5,00 |
| Essencial | 5 | R$ 25,00 | R$ 5,00 |
| Avançado | 12 | R$ 50,04 | R$ 4,17 |
| Corporativo | 30 | R$ 99,90 | **R$ 3,33** |

Ou seja: **R$3,33 só no pacote de 30**. Quem compra de 2 em 2 paga R$5,00.
Como a API diz "sem mínimo" a R$3,33, é isso que precisa ser confirmado por
escrito antes de virar número em proposta.

**Conta da LocaJV:** o painel do Velo mostra 45 locações ativas e 71
encerradas. Se a rotatividade se mantiver, dá algo perto de 8 a 10 locatários
novos por mês → **R$ 27 a R$ 33/mês** no preço cheio de R$3,33. Um pacote
Corporativo de R$99,90 cobre uns três meses.

---

## Onboarding

- E-mail: **api@flagcheck.com.br**
- Prazo informado: **2 a 3 dias úteis**
- Inclui sandbox pra testar antes de gastar crédito

Não testei o cadastro. **Não sei** se aceitam empresa pequena sem volume, e
essa é a primeira pergunta a fazer.

---

## LGPD

Eles alegam conformidade com dado criptografado, log auditável e anonimização
automática. Isso resolve o lado **deles** — não resolve o nosso.

No momento em que a LocaJV consulta, **o Jay vira controlador do dado** e a
Impulso vira operadora. Continua exigindo:

1. Consentimento explícito do locatário, coletado no fluxo do WhatsApp
2. Contrato de operador entre Impulso e LocaJV
3. Finalidade e prazo de retenção declarados

**É advogado, não é decisão nossa.** O módulo não liga em produção antes disso.
Ver `PERGUNTAS-PRO-JAY.md`.

---

## O que ainda não sei

- Preço da consulta de CNH
- Se aceitam cadastro de locadora pequena
- Formato exato do JSON de resposta (só vendo o sandbox)
- Se o "sem volume mínimo" da API vale mesmo, dado que o site cobra R$5,00 em
  pacote pequeno
- **Quanto o módulo Antecedentes do próprio Velo entrega e custa** — antes de
  vender consulta paga por fora, saber se ele já paga por isso

---

## Decisão de arquitetura

O sistema foi construído com a consulta **desacoplada do fornecedor**: a ficha
de verificação, o registro do resultado e o alerta interno funcionam sem API
nenhuma. A FlagCheck entra trocando uma camada só, quando a conta e o termo
existirem. Nada no produto depende dela para funcionar hoje.
