# STATUS-LOCAPRO.md

**Atualizado:** 22/09/2026 · **Produto:** SaaS de gestão + cobrança por WhatsApp oficial pra locadora de moto (e carro, decisão D01 de 22/09)
**Repo:** `C:/Users/Usuario/locapro` · Vercel na conta `per1gos-projects`
**Retomar código:** `RETOMAR.md` do repo · **Estudo de uso:** `ESTUDO-DE-USO.md` do repo · **Plano:** `PLANO-DE-NEGOCIO.md` / `SOCIEDADE.md` do repo
**Histórico LocaJV (tráfego, decisão visual antiga copiando a Velo — REVOGADA 12/09):** `../locajv/`

---

## Sociedade (o ponto fraco)

- **60% Jay (LocaJV, Goiânia) · 40% Eduardo** — mas quem banca desenvolvimento, token e infra é o Eduardo.
- Aporte acordado do Jay R$2.497 · pago **R$2.000** (R$500 até 10/09 + **R$1.500 informado em 22/09**) · **a receber R$497**.
- 🔴 Em aberto: dono do código, remuneração da Impulso na Fase 1, régua de valor por entrega (a tabela P/M/G do rascunho de 25/08 **nunca foi combinada**).
- Saídas discutidas: Eduardo para de bancar custo · Impulso cobra a Fase 1 · virar 50/50.

## Produto no ar

- Mensalidade **R$79,99**, 7 dias grátis sem cartão. Cobrança pelo Asaas da Impulso ativa e provada contra produção (16/09).
- Motor de WhatsApp **envia de verdade** desde 14/09 (8/8 entregues). Só dispara com credencial **e** `businesses.envio_automatico` ligado (liga na mão, no banco).
- 🔴 **LocaJV com envio TRAVADO**: telefones dos locatários são reais. Teste só na "Locadora Teste". Contratos/cobranças no banco são dados de teste — não citar como operação do Jay.
- Marca vermelha (`#EF3B2D→#B3120F`); no painel vermelho = atraso, ação = grafite. Redesign fechado em 12/09.

## Meta / WhatsApp oficial

- Empresa verificada · app publicado · 10 templates enviados · **App Review enviado 11/09** (até 20 dias → ~01/10).
- 🔴 **30/09:** sem meio de pagamento na Meta, mensagem de serviço bloqueia a partir de 01/10.
- Passo a passo e armadilhas: memória `project_locapro_whatsapp_meta_app_review`.

## Estudo de uso (Jay e Valéria operando, 15–22/09)

11 achados. Os que mais pesam:
- **CRLV-e não preenche o cadastro sozinho** — os dois bateram nisso (na Velo, o documento preenche).
- **Cobrança é semanal**, e o sistema pensa em mês ("valor por mês", "juros ao mês", "vence todo dia").
- Valéria: o **checklist de pagamento da semana** é "o mais importante".
- Trocar "moto" por "veículo"; multa cobrada toda semana até marcar paga.
- **D01 (22/09):** duas abas, Motos e Carros.

## Rastreamento

Oferecer aparelho + software que a locadora opera, **sem central** (fica fora do regime da Lei 14.967). LocaJV não usa rastreador. Fornecedores na lista: Jimi IoT, SmartGPS, Fulltrack, Softruck; Selsyn em conversa. CNAE ficou pra depois. Detalhe: `RASTREAMENTO.md` do repo.

## A tese de dinheiro

Software sozinho é margem fina (10 locadoras = R$800/mês). O que escala é receita **por moto** (rastreamento ~R$15/moto). Só abre pra outras locadoras depois de **60 dias rodando 100% da cobrança da LocaJV sem falha**.

---
**Ver também:** [[STATUS-IMPULSO]] · [[STATUS-LOCAJV]]
