# Estudo dos Concorrentes — Sistemas para Açaiteria (Brasil, 2025–2026)

> Levantamento de mercado pra definir o escopo do sistema próprio do Vidal.
> Preços marcados "não encontrado" = a empresa não publica valor (exige demo/contato).

## As 3 camadas do mercado

O mercado se divide em 3 camadas. O escopo do nosso sistema depende de qual a gente substitui:

- **Camada A — ERP/PDV completo** (balcão, fiscal, estoque, financeiro): Saipos, Consumer, Yooga, STi3, Food Sistemas, ControleNaMão. *Pesado demais pra açaiteria pequena.*
- **Camada B — Cardápio digital + delivery próprio, zero comissão** (pedido cai no painel/WhatsApp): Goomer, Anota AÍ, Cardápio Web, Neemo, Zuper, Alloy, Pedizap, Cardapi.us. **É o vão onde nosso sistema entra.**
- **Camada C — Marketplace com comissão** (cobra % por pedido): iFood, Rappi, Delivery Much. *Canal opcional, nunca o núcleo.*

## Tabela de players

| Player | Camada | O que faz | Foco | Preço (fonte) |
|---|---|---|---|---|
| **Saipos** | A | PDV, fiscal (NFC-e), estoque por ingrediente, financeiro, delivery próprio, "super integradora" com iFood. Tem página dedicada a açaiteria. | PDV+gestão completa | **A partir de R$219,90–R$240,79/mês**, sem taxa de instalação, sem cobrança por usuário |
| **Consumer** | A | Restaurante: mesas e delivery. Cardápio digital MenuDino. | PDV+delivery, plano grátis de entrada | **Grátis até 200 pedidos/mês**; pago acima (valor não encontrado) |
| **Yooga** | A | PDV, delivery próprio, financeiro, gestão de clientes. | PDV completo PME | Não encontrado |
| **STi3 (Fomer)** | A | PDV, cupom fiscal na maquininha, estoque por receita, combos, fidelização. Posicionado p/ sorveteria/açaiteria. | Gestão sorveteria/açaí | Não encontrado |
| **Food Sistemas** | A | Sistema p/ açaí: tigelas/toppings, iFood, fidelidade digital. | Açaí/sorvete | Não encontrado |
| **ControleNaMão** | A | PDV balcão+delivery, estoque em tempo real (baixa toppings ao vender), custo por copo/tigela, integração iFood/Mercado Pago/Goomer, chatbot WhatsApp, fiscal. | Gestão açaí | Não encontrado (teste grátis 1 dia) |
| **Goomer** | B | Cardápio digital (QR mesa, totem, delivery), combos, +80 integrações de PDV. | Cardápio digital + garçom eletrônico | **Grátis até 30 pedidos/mês** (+R$1,39/pedido excedente); **Automatizar a partir de R$140/mês**; **Integrar a partir de R$224,93/mês no anual** |
| **Anota AÍ** | B | Robô IA no WhatsApp/Instagram, cardápio digital, PDV balcão, QR mesa, **plano fidelidade nativo**, sem comissão. | Atendimento+delivery via WhatsApp | **Start R$299,99/mês** (ou **R$219,99/mês no anual**). *Reclame Aqui registra queixa de aumento + corte de recursos — atenção.* |
| **Cardápio Web** | B | Cardápio digital, delivery, programa de pontos/fidelidade configurável. | Delivery PME | Não encontrado |
| **Neemo (Linx)** | B | Delivery próprio + app branded por loja, sem comissão; +5.000 restaurantes. | Delivery próprio | Não encontrado |
| **Zuper** | B | **Específico p/ açaiteria**: bot WhatsApp envia cardápio e recebe pedido automático; montagem por tamanho + complementos; fidelidade (cashback+cupom); app de entregador + rastreio; painel tempo real. | Açaiteria WhatsApp-first | "Menos que uma pizza por dia", sem taxa por pedido — valor exato não encontrado |
| **Alloy** | B | Cardápio digital açaí: tamanhos, complementos obrigatórios/opcionais, extras pagos, limite de itens grátis; pedidos de site/WhatsApp/Instagram/iFood num painel; Pix+cartão. | Cardápio açaí multicanal | Não encontrado (promo "25% off 3 meses") |
| **Pedizap / Cardapi.us / Cardapiofast** | B | Cardápio digital → pedido chega via WhatsApp; impressão térmica; **sem comissão, mensalidade fixa baixa**. | WhatsApp delivery barato | Não encontrado |
| **iFood / Rappi / Delivery Much** | C | Marketplace: tráfego pronto, mas **cobram comissão por pedido** (iFood tipicamente 12–27% + taxas; não confirmado em fonte direta). | Aquisição de clientes | Comissão por pedido |

## Leitura estratégica

Os players de Camada B mais relevantes pro caso do Vidal (Zuper, Alloy, Pedizap, Anota AÍ) convergem num modelo: **mensalidade fixa, zero comissão, pedido via WhatsApp/link**. É exatamente onde o sistema próprio cabe — a gente **elimina a mensalidade recorrente** do cliente e entrega o mesmo fluxo (WhatsApp + cardápio + fidelidade).

**O argumento de venda:** os concorrentes cobram **R$140–R$300/mês pra sempre** e o sistema **nunca é do cliente**. Aqui o Vidal paga a montagem uma vez, o sistema é dele, e a mensalidade é só pra manter no ar.

## Features que açaiteria pequena realmente precisa (por prioridade)

- **P0 (núcleo):** PDV/caixa balcão · cardápio com montagem de açaí · financeiro básico (entradas/saídas/fechamento)
- **P1 (o que o Vidal pediu):** delivery via WhatsApp · fidelidade por pontos
- **P2 (depois):** relatórios · estoque por insumo (modelar já, baixa automática só com uso real)
- **Anti-feature (não fazer no V1):** NFC-e/fiscal, roteirização de entregador, multi-loja, totem self-service, API oficial paga do WhatsApp

## Como os concorrentes modelam o cardápio de açaí

Modelagem canônica (Goomer/Alloy/Zuper expõem assim — não inventar outra):
- **Tamanho** (300/400/500/700ml) = SKU-base, carrega o preço-base. Faixa observada: 300ml ~R$9,50 · 500ml ~R$16 · 700ml ~R$20.
- **Acompanhamentos grátis** com limite ("até 3 grátis no mesmo copo"). Grupos: cereais, frutas, coberturas/caldas.
- **Adicionais pagos** com preço próprio: Ninho, Nutella, ovomaltine, paçoca, KitKat, chantilly...
- **Combos** pré-montados elevam ticket médio.

> Já implementado no nosso sistema exatamente assim (`src/lib/menu.ts`).

## Como os concorrentes fazem delivery via WhatsApp

Dois modelos. O Vidal pediu o mínimo (Forma 1) e a experiência completa é a Forma 2:
- **Forma 1 — saudação automática nativa do WhatsApp Business + link do cardápio.** Grátis. Limite: a saudação dispara 1x por cliente e só de novo após 14 dias (serve pro 1º contato).
- **Forma 2 — cardápio web próprio + pedido estruturado** (Zuper/Pedizap/Cardapi.us): cliente monta, finaliza, pedido cai no painel em tempo real. Mensalidade fixa, zero comissão.

> Nossa solução: cardápio web próprio + pedido cai no painel (já feito) + QR pras mesas + saudação automática do WhatsApp Business apontando pro link. Tudo sem API paga.

## Como os concorrentes tratam o controle de estoque

Pesquisa específica (Consumer, Saipos, Sischef, OPDV, ControleNaMão). Os sistemas de açaí/food sérios tratam estoque em 3 pilares:

1. **Ficha técnica + baixa automática** — cada item do cardápio tem uma "receita" (granola, leite condensado, fruta, calda × quantidade). Ao vender, o sistema **abate os insumos automaticamente** do estoque. É o que diferencia de um estoque genérico. (Saipos, Sischef, ControleNaMão: "baixa toppings ao vender", "custo por copo/tigela".)
2. **Validade + FIFO** — controle de data de vencimento por lote; o método **FIFO** (primeiro que vence, primeiro que sai) prioriza usar o que está mais perto do vencimento; **alerta automático** de itens vencendo pra evitar perda.
3. **Estoque mínimo + alerta de reposição** — quando um insumo chega no mínimo, o sistema avisa na hora ("está acabando"), evitando ruptura no balcão.
Extras de mercado: cobrança por **peso** (balança) e visibilidade em **tempo real** (não inventário periódico).

**O que aplicamos no sistema do Vidal (V1):** cadastro de insumos/produtos (qtd, unidade, categoria), **validade com alerta de vencimento** (≤7 dias / vencido), **estoque mínimo com alerta de baixa**, e **entrada/saída** (compra/uso) com histórico. A **baixa automática por ficha técnica** (pilar 1) fica como evolução — é o item mais caro e o estudo recomenda ativar só com uso real, pra não inflar o V1.

## Como os concorrentes fazem fidelidade

Três modelos coexistem (detalhe e recomendação no doc do sistema de pontos):
- **A — Cartão "compre 10, leve 1"** (carimbo digital). Mais simples; aderente a açaiteria de balcão.
- **B — Pontos por valor gasto** (ex: R$1 = 1 ponto; resgate por tabela).
- **C — Cashback** (% volta como crédito). Usado por Zuper/Anota AÍ. *É "dinheiro" — difere de pontos.*

Regras de mercado: identificação por telefone · pontua só após pagamento confirmado · validade dos pontos (ex: 60 dias) · resgate confirmado pelo operador (anti-fraude).

---

## Fontes
- Saipos — [açaiteria](https://saipos.com/sistema/acaiteria) · [cardápio açaí](https://saipos.com/cardapio/cardapio-acai) · [planos](https://saipos.com/planos-e-precos)
- Goomer — [Goomer Go 2025](https://goomer.com.br/blog/goomer-go-em-2025) · [cardápio delivery](https://goomer.com.br/cardapio-digital-delivery)
- Anota AÍ — [planos](https://anota.ai/blog/planos-principal/) · [plano fidelidade](https://anota.ai/home/funcionalidade/plano-fidelidade/) · [Reclame Aqui](https://www.reclameaqui.com.br/anota-ai/mensalidade-mais-cara-e-recursos-do-app-diminuidos_kFtADQRB6xC4lgc_/)
- Consumer — [site](https://www.consumer.com.br/) · Neemo/Linx — [site](https://www.linx.com.br/neemo/)
- ControleNaMão — [melhor sistema açaiteria](https://controlenamao.com.br/blog/melhor-sistema-de-gestao-para-acaiteria/) · STi3 — [açaiteria](https://www.sti3.com.br/blog/sistema-para-sorveteria-ou-acaiteria/) · Food Sistemas — [açaí](https://foodsistemas.com.br/segmentos/sistema-para-acai/)
- Zuper — [zuper.delivery](https://zuper.delivery/) · Alloy — [cardápio açaí](https://www.alloy.al/cardapio-digital/acaiteria) · Pedizap — [automatizar açaí WhatsApp](https://pedizap.com.br/automatizar-pedidos-via-whatsapp-loja-de-acai) · Cardapi.us — [auto-resposta WhatsApp](https://blog.cardapi.us/resposta-automatica-no-whatsapp-business/)
- Modelagem cardápio — [Easy Delivery](https://blog.easydelivery.com.br/cardapio-acai/) · [Mixers Brasil adicionais](https://www.mixersbrasil.com.br/adicionais-acai/)
- Fidelidade — [Food Sistemas](https://foodsistemas.com.br/funcionalidades/programa-fidelidade-para-restaurantes/) · [Saipos fidelidade](https://saipos.com/sistema/restaurante/programa-de-fidelidade-para-restaurante) · [Cardápio Web fidelidade](https://ajuda.cardapioweb.com/aumento-de-vendas/fidelidade)

**Limitações:** preços de Consumer, Yooga, STi3, Food Sistemas, ControleNaMão, Cardápio Web, Neemo, Zuper, Alloy, Cardapi.us e Pedizap **não publicados** (exigem demo). Comissões de iFood/Rappi/Delivery Much **não confirmadas** em fonte direta — não cravado pra não inventar.
