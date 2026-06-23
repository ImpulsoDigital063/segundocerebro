# Modelo de Operação e Dinheiro — APPDELYVERY (consolidado 02/06/2026)

> Junta num lugar só: **como as chamadas acontecem**, **como o dinheiro toca cada bolso** e
> **o checklist de tudo que um app de delivery precisa** (feito × falta). Fonte: FLUXO-COMUNICACAO,
> PRECIFICACAO-IMPULSO, DOSSIE, build-spec/02-03. Nada inventado — consolidação + a conta de unidade.

---

## 1. AS CHAMADAS (como um pedido nasce, roda e fecha)

**Quem abre:** o **estabelecimento** (lojista) cria o pedido no app/web — coleta, entrega, dados do
cliente final, descrição, valor declarado. Vê o preço na hora. (No início é balcão/uso direto do
lojista; auto-agendamento do cliente final fica pra depois.)

**Dispatch (achar o entregador):**
1. `find_entregadores_proximos` (PostGIS) lista os **verificados + online** mais perto da coleta.
2. Sistema **oferta por push** ao mais próximo → ele tem segundos pra aceitar (timeout ~30s).
3. Recusou/estourou o tempo → **reoferta** ao próximo. (histórico em `ofertas`)

**Máquina de estados (a regra de ouro — status só avança com EVIDÊNCIA):**
```
rascunho → buscando → aceito → a_caminho_coleta
        → coletado            (EXIGE foto da coleta)
        → a_caminho_entrega
        → entregue            (EXIGE foto + assinatura)
        → [Asaas liquida + split]
cancelado: possível até 'coletado' (regra de cobrança a definir)
```

**Gatilhos automáticos da chamada:**
- Na **coleta** → dispara SMS/WhatsApp ao cliente final com o link `/rastreio/{token}`.
- Posição do entregador → **Supabase Realtime Broadcast** alimenta o mapa de todos (não grava cada ping).
- Mudança de status → atualiza tela do lojista e do admin (Realtime).

**Canais:** push (nova corrida/status) · Realtime (mapa/status) · SMS-WhatsApp (cliente final) ·
número mascarado (ligação entregador↔cliente, fase 2) · foto+assinatura (Storage, trilha de auditoria).

**O que governa o VOLUME de chamadas:** nº de lojas ativas × entregas/dia por loja. É a alavanca
do negócio inteiro (ver seção 3).

---

## 2. OS TRÊS BOLSOS (quem paga o quê)

### Bolso A — o LOJISTA (estabelecimento, o "parceiro" que usa o app)
Paga o **frete** pra mandar a encomenda ao cliente dele. O cliente final em geral **não paga nada
no app** (já pagou a mercadoria por fora). Formas:
- **Carteira pré-paga** — põe saldo, cada entrega debita. *Recomendado pra começar* (dinheiro entra antes, zero inadimplência).
- **Fatura mensal (pós-pago)** — pra recorrente; fecha no fim do mês (risco de calote).
- **Pix/cartão avulso** — por entrega.

**Preço do frete (tabela atual, validar):** bandeirada moto R$8 / carro R$13 · R$1,50/km · mínimo R$10.
Ex.: 6,3 km moto = **R$17,51**.

### Bolso B — o ENTREGADOR (MEI verificado)
- Recebe **80% do frete** → R$14,01 no exemplo. **Repasse automático** (cada entregador é subconta Asaas).
- **Custo de entrada:** verificação (antecedentes FlagCheck ~R$3,33/CPF + CNH/CRLV Infosimples). Hoje
  **a plataforma absorve** — decidir se recupera (taxa de cadastro? amortiza no volume?).

### Bolso C — o DONO da plataforma (o empresário-parceiro + Impulso)
- **Receita:** **20% do frete** (take rate) × volume → R$3,50 no exemplo. (+ mensalidade SaaS dos lojistas, se cobrar.)
- **Custos fixos/mês:** Infosimples franquia **R$100** + Supabase Pro **~R$140** + Vercel Pro **~R$110**
  + SMS/WhatsApp e número mascarado (variável). → **base ~R$350–450/mês**.
- **Custos variáveis/entrega:** taxa Asaas (Pix ~R$1 fixo / cartão ~%) + SMS ~R$0,08–0,16 + Mapbox (free no início).
- **Custo de construção:** Impulso (setup + mensalidade) OU sociedade — ver seção 5, decisão nº1.
- **Risco embutido no take rate:** extravio/perda (responsabilidade civil CDC) sai daqui — igual TôNoLucro.

---

## 3. A CONTA FECHA? (unit economics — números com ressalva)

> **DECIDIDO 02/06: a Impulso VENDE o app; o app é do parceiro (encomenda dele).** Logo, esta
> conta de unidade (take rate 20% × volume − custos de operação) é o **P&L do DONO**, não da Impulso.
> A Impulso ganha **setup + mensalidade** (seção 5, decisão 1). O dono opera e fica com os 20%.

Por entrega de **R$17,51** (exemplo real do protótipo):

| | Valor |
|---|---|
| Frete pago pelo lojista | R$ 17,51 |
| → Entregador (80%) | R$ 14,01 |
| → Plataforma bruto (20%) | R$ 3,50 |
| − taxa Asaas (~R$1) + SMS (~R$0,16) | ~ −R$ 1,1 |
| **= Plataforma líquido/entrega** | **~ R$ 2,4 – 3,3** |

> ⚠️ A taxa do Asaas é estimada — **confirmar a tarifa real** (Pix fixo vs cartão %) muda essa linha.

**Break-even da infraestrutura:** ~R$400/mês ÷ ~R$3/entrega ≈ **~130 entregas/mês só pra pagar a
infra** (antes de qualquer lucro ou do custo da Impulso). Acima disso, cada entrega é margem.

**Leitura honesta:** a margem **por entrega é fina**. O negócio vive de **volume** (muitas lojas ×
muitas entregas) e/ou de **subir o take rate** e/ou **cobrar mensalidade do lojista** pelo uso do app.
Com 5 lojas fazendo 10 entregas/dia (~1.500/mês) → bruto ~R$5.250/mês, líquido ~R$4.500, menos infra
~R$400 = **~R$4.100/mês** de margem operacional. É aí que o negócio fica de pé.

---

## 4. TUDO QUE UM APP DE DELIVERY PRECISA (checklist × status)

| Subsistema | Pra quê | Status hoje |
|---|---|---|
| Cadastro + auth + papéis | entrar como lojista/entregador/admin | UI demo · falta Supabase Auth |
| **Verificação antecedentes/CNH/CRLV** | o diferencial | UI demo · falta FlagCheck + Infosimples |
| Criar pedido + preço + rota/ETA | abrir a chamada | UI feita · falta Directions server + gravar `pedidos` |
| Matching/dispatch (PostGIS) | achar entregador | função SQL pronta · falta wire + push |
| GPS ao vivo (Realtime) | mapa em tempo real | simulado · falta Realtime Broadcast real |
| Máquina de estados + evidência | foto coleta / foto+assinatura | UI feita · falta Storage + gravar `comprovantes` |
| **Pagamento + split (Asaas)** | o dinheiro | nada · precisa conta Asaas + subcontas |
| Carteira pré-paga | bolso do lojista | nada · falta schema já existe (`carteira_transacoes`) |
| Notificação push | nova corrida/status | nada · MVP web push |
| SMS/WhatsApp ao cliente final | link de rastreio | nada · precisa Zenvia/Twilio |
| Número mascarado | privacidade ligação | fase 2 |
| Painel admin (aprovação PIN, financeiro) | operar | UI parcial · falta PIN + financeiro real |
| Avaliações | reputação | schema pronto · UI falta |
| Site institucional | aquisição/SEO | protótipo separado (peça 2) |

---

## 5. DECISÕES ABERTAS (bater o martelo — mudam build E bolso)

1. ~~**Modelo Impulso ↔ parceiro**~~ → **DECIDIDO 02/06: VENDER.** App é do parceiro. Impulso = fornecedora:
   **setup R$2,5–5k (entrada 50% + marcos) + mensalidade R$400–700/mês** (hospedagem+manutenção+suporte+
   evolução; tem que cobrir o custo fixo real e sobrar). Sem sociedade, sem take rate pra Impulso.
2. **Quem paga o frete:** → recomendado **estabelecimento paga** (B2B padrão). Dono confirma.
3. **Forma de cobrança do lojista:** → recomendado **carteira pré-paga** no MVP (zero calote). Fatura/avulso depois.
4. **COD (pagar na entrega):** → **fora do MVP**, fase 2.
5. **Cliente final:** → **SMS no MVP** (rápido, ~R$0,08); WhatsApp depois (precisa aprovação Meta).
6. **Contato entregador↔cliente:** → **chat/ligação simples no MVP**; número mascarado fase 2.
7. **Take rate 20%:** → é **botão do DONO** (configurável no painel); 20% como default.
8. **Custo de verificação do entregador:** → **operação absorve no início**; revisita c/ taxa de cadastro se pesar.

### Consequências de "vender" que viram dever de casa (precisam do parceiro)
- **Asaas no CNPJ do DONO** — o dinheiro e a responsabilidade civil (extravio, CDC) passam por ele, não pela Impulso. A Impulso não é intermediária financeira.
- **FlagCheck + Infosimples em nome do DONO** — antecedentes é dado sensível (LGPD); o controlador do dado é ele.
- **Contas criadas 02/06 (GitHub/Vercel/Supabase/Mapbox dedicadas AppDelyvery):** ok pro build; planejar **titularidade/transferência pro dono** OU Impulso hospeda e cobra na mensalidade (decidir).
- **Escopo do MVP fechado** = o que entra no setup (define entrada 50% + marcos). Evolução = mensalidade/novos projetos.
- **Prazo:** Asaas/FlagCheck/Infosimples dependem de aprovação de terceiro — não prometer "10 dias" pra essas peças.

> Resumo: **lojista pede e paga o frete → sistema acha o entregador verificado → entrega com
> foto+assinatura → Asaas divide 80/20 automático.** O dono ganha no volume × take rate, menos
> infra fixa (~R$400/mês) e o custo da Impulso. A margem por entrega é fina; o jogo é volume.
