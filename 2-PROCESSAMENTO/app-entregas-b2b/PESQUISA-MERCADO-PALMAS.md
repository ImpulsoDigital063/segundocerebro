# Pesquisa de mercado — Palmas-TO (entrega B2B + integração com PDV)

> Pesquisa de campo (web) feita em 04/06/2026 pra entender o terreno antes de
> vender a integração via API/conector. **Honestidade > otimismo** — o objetivo é
> não prometer pro investidor/cliente o que não se sustenta na due diligence.

---

## 1. Concorrência em Palmas (mais dura do que parecia)

### Bee Delivery — o player dominante
- Nacional: **25 estados, 90 cidades, 70k empresas, 300k entregadores**. Em Palmas desde **18/09/2020**.
- Multi-segmento: alimentação, **farmácias**, petshop, material de construção, óticas, laboratórios, gráficas.
- Empresa: cadastro **grátis, sem mensalidade**, preço por distância. Tem **"Painel das Empresas"**.
- **TEM API** (documentada em `beedeliveryapi.docs.apiary.io`) e **já integra com PDV/ERP** (via Max/LETS/CCM). Pedido recebido cai no PDV/ERP do lojista automaticamente.
- **ANTECEDENTES (o ponto sensível):** os Termos da Bee **exigem "não possuir antecedentes criminais"** e a Bee **"se reserva o direito de checar antecedentes criminais"**. Ou seja: NÃO é verdade que "a Bee não verifica". É cláusula de termo + verificação **discricionária** (ela *pode* checar, não necessariamente checa todo mundo de forma ativa/sistemática).

### TôNoLucro — o local forte
- **De Palmas**, 7 anos, **comprado pela Magazine Luíza (2021)**, +10 milhões de pedidos. Comida + **encomenda**. Expandindo no TO (região Sul, Taquaralto, Aureny). Marca local forte, ganhou na Justiça pra entregar aos domingos.

### Loggi — referência nacional B2B
- API completa (GraphQL), **integra nativo com Bling/Tiny**, motoboy express (Loggi Expresso, coleta imediata). É o modelo de "logística plugável" no ERP.

---

## 2. A verdade incômoda sobre os nossos "diferenciais"

- **API / integração NÃO é diferencial** — é **paridade**. Bee e Loggi já têm. Construímos a nossa porque é **table stakes** (sem ela nem entra no jogo), não porque é único.
- **Antecedentes NÃO é "eles não fazem"** — a Bee exige por contrato e pode checar. O diferencial real só existe se a gente fizer a verificação **sistemática, obrigatória pra TODO entregador, e VISÍVEL como promessa central** (vs cláusula escondida no termo). É posicionamento + operação, não "eles não têm".
- **λ.unicidade:** NUNCA cravar "único que verifica antecedentes" — a varredura mostrou que não se sustenta.

## 3. Onde está a brecha REAL (wedges defensáveis)
1. **Verificação ativa + transparente como produto** — não "checar se quiser", mas "todo entregador tem ficha checada, e a gente mostra isso pro lojista no acompanhamento" (já fazemos no app: selos de verificação). Tem que SER verdade e ser o eixo.
2. **Hiper-local Palmas** — relacionamento, atendimento, velocidade de resposta e preço pra quem é daqui, vs nacional que trata Palmas como 1 das 90 cidades.
3. **Economia/termos melhores** pro lojista local (a definir com números reais).

---

## 4. Sistemas de PDV/balcão (pra estratégia de conector)

### Farmácia/drogaria
Trier, **Linx** (forte, integra PBM), **UltraPDV/Ultramax** (integra iFood, Bling, etc.), Titan, HOS, Sync, Sismega.

### Supermercado/mercado
**TOTVS Consinco**, **Linx Microvix** (nuvem, PDV+e-commerce), SysPDV, SG Sistemas, GestãoClick, MarketUP.

### Insight de conector
- Os ERPs modernos (**Bling, Tiny**) já têm **"Integração Logística Personalizada"** — dá pra a gente virar uma **opção de logística dentro do Bling/Tiny**, igual a Loggi é. Aí a loja "ativa o APPDELYVERY" sem dev.
- Pra cliente grande tipo Drogasil/RaiaDrogasil: provável Linx/SAP enterprise — integração via a nossa API direta.
- **Pendente de campo:** descobrir qual PDV as farmácias/mercados independentes de Palmas mais usam (conhecimento local do Eduardo + esposa na Drogasil).

---

## 5. Próximos passos de campo
1. Eduardo levantar **qual PDV** os alvos locais usam (perguntar pra 3-4 lojistas conhecidos).
2. Decidir o **conector ponta-de-lança** (provável Bling/Tiny por serem populares e abertos).
3. Refinar a **mensagem de venda** ancorada no que é verdade (verificação ativa + local), não no que é paridade (API).
4. Levantar **preço da Bee/TôNoLucro** pra empresa em Palmas (benchmark real de tarifa).

---

## Fontes
- Bee empresas/API: beedelivery.com.br/empresas · beedeliveryapi.docs.apiary.io · lets.delivery/integracoes/bee-delivery
- Bee termos entregador (antecedentes): beedelivery.com.br/termos-entregador · blog.bee.com.br/faq-entregadores
- TôNoLucro: tonolucro.com/palmas · afnoticias.com.br (expansão) · LinkedIn Tonolucro
- Loggi API/Bling: docs.api.loggi.com · ajuda.bling.com.br (integração Loggi)
- PDV farmácia/mercado: sults.com.br · ultramax.com.br · gsoft.com.br · idinheiro.com.br
