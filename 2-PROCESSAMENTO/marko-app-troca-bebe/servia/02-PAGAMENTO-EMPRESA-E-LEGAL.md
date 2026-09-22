# Baby Loop na Sérvia — Pagamentos, Empresa e Regras Legais

**Data:** 17/09/2026
**Escopo:** o que substitui o PIX, como abrir empresa, impostos e nota, e o risco regulatório dos créditos comprados com dinheiro.
**Regra usada:** cada afirmação tem fonte (número entre colchetes, lista no fim). Quando não achei, está escrito "não encontrado". Este documento é pesquisa, não parecer jurídico.

---

## Resumo em 8 pontos

1. **O "PIX sérvio" existe: IPS NBS** (pagamento instantâneo do Banco Central, com QR "IPS skeniraj"). Foram 50,7 milhões de pagamentos no 1º semestre de 2025, alta de 24,8% sobre o ano anterior [1]. Loja online já aceita, por exemplo o Ananas.rs [1].
2. **Pagamento na entrega (pouzećem) ainda domina** o e-commerce da região. O dado de 72,5% dos lojistas é dos **Bálcãs Ocidentais**, não só da Sérvia [4][5]. Para troca com créditos, isso é um problema (ver seção 1).
3. **Stripe NÃO opera na Sérvia**: a Sérvia não aparece na lista oficial de países [6].
4. **O gateway tem que ser local**: bancos (Intesa, Raiffeisen, UniCredit, OTP, ProCredit, AIK) ou processadoras (AllSecure, Monri, ChipCard/Payten). As taxas públicas vão de 0,5% a 5% por transação [9].
5. **Os preços têm que aparecer em dinar (RSD)** para quem acessa da Sérvia [13]. Câmbio em 17/09/2026: **1 EUR = 117,3615 RSD** (mercado) [14].
6. **Abrir DOO:** capital mínimo de 100 RSD, taxa do APR de 5.900 RSD online, 3 a 5 dias úteis para o registro e custo realista de €500 a €1.500. Estrangeiro pode ter 100% [15][16].
7. **Toda venda para pessoa física exige cupom fiscal eletrônico (eFiskalizacija)**, inclusive online e em pagamento antecipado [18][19]. Isso atinge a venda de pacote de crédito.
8. **O ponto crítico são os créditos comprados com dinheiro.** Pode cair na lei de serviços de pagamento / dinheiro eletrônico, que exige licença do NBS. A saída provável é a exceção de "rede limitada", que ao passar de **EUR 1 milhão em 12 meses** exige aviso ao NBS, e o NBS decide [21]. **Precisa de advogado local antes de lançar.**

---

## 1. Como os sérvios pagam online

| Meio | O que é | Dado de uso encontrado | Fonte |
|---|---|---|---|
| **IPS NBS** (instantâneo) | Sistema do Banco Nacional da Sérvia: conta a conta, "Prenesi" pelo número do celular, QR em loja física e online, QR em boleto | 50,7 mi de pagamentos no 1º sem. de 2025 (+24,8%); RSD 628,7 bi (+37,1%); ticket médio no 2º tri de RSD 12.673; recorde diário de 484.175 em 15/05/2025 | [1][2] |
| **IPS QR ("IPS skeniraj")** | O cliente escaneia o QR NBS IPS no app do banco | Participação isolada do QR: **não encontrado** | [1][3] |
| **DinaCard** | Cartão nacional da Sérvia | Participação de mercado: **não encontrado** | [4][7] |
| **Visa / Mastercard** | Cartões internacionais | Dominam o pagamento com cartão nos Bálcãs Ocidentais (sem % para a Sérvia) | [5] |
| **Pouzećem** (pagamento na entrega) | O cliente paga ao entregador | "Método dominante para 72,5% dos lojistas" (dado dos **Bálcãs Ocidentais**); descrito como "ainda o mais usado" na Sérvia | [4][5][8] |
| Mobile banking | Canal principal do IPS | "Mais de 80% dos correntistas urbanos pagam pelo celular" (fonte secundária, sem dado primário) | [4] |

**Leitura para o Baby Loop:**
- **O IPS QR é o equivalente mais próximo do PIX.** A Monri já documenta integração com o IPS [10].
- **O pouzećem não serve para vender crédito**, porque crédito não tem entrega física. Serve no máximo para frete. Isso é inferência nossa, não fonte.

---

## 2. Gateways (o que substitui o PIX)

### Internacionais

| Gateway | Empresa sérvia pode usar? | Observação | Fonte |
|---|---|---|---|
| **Stripe** | **Não.** A Sérvia não está na lista de países suportados | O contorno citado é operar por empresa em país suportado (ex.: LLC nos EUA). Isso muda imposto, cupom fiscal e dados (ver seções 4 e 6) | [6][6b] |
| **PayPal** | Recebimento **liberado oficialmente** para a Sérvia | Comissão de ~3,5%, US$ 4 por saque para cartão Visa, até 7 dias; conversões podem custar até ~10% (fonte de consultoria) | [11][12] |

**Empresa estrangeira vendendo para sérvios via Stripe:** a regra do gateway não impede. Mesmo assim, o preço tem que aparecer em RSD [13], há IVA de 20% desde a 1ª venda para estrangeiro [17] e há a questão do cupom fiscal. Não achei se a Stripe aceita IPS ou DinaCard: **não encontrado**.

### Locais (tabela do portal ecommerce4all.rs, projeto oficial sérvio de e-commerce) [9]

| Provedor | Gateway | Adesão | Mensalidade | Taxa por transação |
|---|---|---|---|---|
| Banca Intesa | NestPay | Grátis | RSD 1.300 se o giro for < RSD 100.000 | 1,10% a 2,80% |
| Raiffeisen | UPC | não informado | €10 (em dinar); isenta acima de RSD 50.000/mês; 6 meses grátis | 0,5% a 3,00% |
| UniCredit | AllSecure, SIA | Custo único de integração | Não tem | 0,8% a 3,5% |
| ProCredit | Quipu GmbH | Programador do lojista | não informado | 0,7% a 3% |
| AIK Banka | NestPay, AllSecure | Programador do lojista | A combinar | Até 5% |
| OTP Banka | Vpos Cubo | não informado | Não tem | "Segredo comercial" |
| **AllSecure** | AllSecure Payment Gateway | Taxa única de setup | Opcional | **Valor fixo de €0,10 a €0,30** por transação (a taxa do banco adquirente é à parte) |
| **Monri** | Monri Payments | Grátis | Grátis | **0,5% do volume, mínimo de €30** |
| ChipCard | Payten | A combinar | A combinar | A combinar (outra fonte: 1,8% a 3,5%, menor em DinaCard) [10b] |

**WSPay:** aparece ligado à AllSecure numa fonte secundária [8]. Taxa própria na Sérvia: **não encontrado**.
**NestPay:** é a plataforma usada por Intesa e AIK, não um contrato à parte [9].

**Leitura:** o desenho provável é **banco adquirente + gateway** (ex.: Intesa/NestPay ou Monri) para cartão, somado ao **IPS QR** para o pagamento instantâneo.

---

## 3. Moeda e câmbio

| Item | Regra / dado | Fonte |
|---|---|---|
| Moeda | Dinar sérvio (RSD) | [13] |
| Preço em dinar | Quem acessa da Sérvia tem que ver o preço **primeiro em dinar**. Pode oferecer outra moeda como opção quando o site mira Sérvia e exterior | [13] |
| Contrato em moeda estrangeira | Permitido entre residentes, mas **o pagamento e o recebimento são em dinar** | [13b] |
| Regime cambial | Taxa média oficial calculada pelo NBS com base no mercado interbancário | [14b] |
| **Câmbio em 17/09/2026** | **1 EUR = 117,3615 RSD**; 1 USD = 102,403 RSD (cotação de mercado, não a taxa média oficial do NBS) | [14] |

Conta útil: um pacote de €10 sai por ~RSD 1.174.

---

## 4. Abrir empresa (DOO) e impostos

| Item | Dado | Fonte |
|---|---|---|
| Tipo recomendado | DOO (equivalente à Ltda.) | [8][15] |
| Capital mínimo | **RSD 100** (~€1); €250 recomendados se o sócio quiser residência | [15] |
| Taxa do APR (registro) | **RSD 5.900** online / **RSD 6.500** presencial | [15] |
| Prazo | **3 a 5 dias úteis** para o registro; **10 a 15 dias úteis** com conta bancária | [15][16] |
| Custo realista total | **€500 a €1.500** (advogado, notário, taxas) | [15][16] |
| Sócio estrangeiro | Pode ter **100%**. O diretor pode ser estrangeiro não residente; se trabalhar na Sérvia, precisa de residência e permissão de trabalho | [15] |
| Documentos do estrangeiro | Apostilados ou legalizados | [15] |
| Imposto de renda PJ | **15%** | [15] |
| **IVA (PDV)** | **20%** padrão; 10% reduzido (alimentos, remédios etc.) | [17] |
| Limite para registrar no IVA (empresa local) | **RSD 8.000.000** em 12 meses móveis (~€68.000). A obrigação nasce ao cruzar o limite | [17] |
| Empresa estrangeira vendendo para consumidor | Pode ter que registrar **antes de começar, sem limite**. Serviço digital de não residente: IVA desde a 1ª venda. Precisa de **representante fiscal** sérvio | [17][17b] |
| Multa por registro atrasado | A partir de RSD 400.000 | [17] |

### Nota fiscal / cupom (fiskalizacija)

| Regra | Fonte |
|---|---|
| Desde **01/05/2022**, venda pela internet exige **cupom fiscal para cada venda** a pessoa física | [18][19] |
| Vale **para qualquer meio de pagamento** (cartão, transferência, PayPal) e qualquer entrega (inclusive courier/pouzećem) | [18][19] |
| Vale **mesmo sem registro no IVA** | [18] |
| **Todo pagamento antecipado** (antes da venda) tem que passar pelo dispositivo fiscal | [18] |
| O cupom é registrado **em tempo real** na Receita, com software certificado | [19][8] |
| Pode ser emitido e enviado em formato eletrônico, sem impressão | [18] |
| Nova regra de 2026: e-fatura obrigatória também na venda de varejo a portador de **cartão corporativo** | [20] |

**Impacto no Baby Loop:** a venda de pacote de crédito provavelmente gera cupom fiscal, porque funciona como pagamento antecipado. Se a troca entre mães gera cupom, e sobre qual base (valor do crédito ou só a taxa da plataforma), **não encontrado**. Fica para o advogado/contador.

---

## 5. Créditos comprados com dinheiro × licença do NBS (CRÍTICO)

| Ponto | O que achei | Fonte |
|---|---|---|
| Quem pode prestar serviço de pagamento / emitir dinheiro eletrônico | **Só entidades licenciadas pelo NBS**: bancos, instituições de pagamento e instituições de dinheiro eletrônico | [22][23] |
| Lei aplicável | Lei de Serviços de Pagamento (Zakon o platnim uslugama), alterada em 31/07/2024, **aplicada desde 06/05/2025**, alinhada à PSD2 | [21][24] |
| **Exceção de "rede limitada"** | Não se aplica a instrumentos usados (i) só no estabelecimento do emissor ou numa rede limitada de vendedores com contrato direto, (ii) para uma gama muito limitada de bens ou serviços, ou (iii) para fins sociais/fiscais | [21][24] |
| **Gatilho de aviso** | Nos casos (i) e (ii), acima de **EUR 1 milhão em 12 meses** é preciso notificar o NBS. **"Com base na notificação, o NBS decide se os serviços ficam isentos"** | [21] |
| Sandbox | O NBS pode dar isenção temporária para serviço de pagamento inovador, caso a caso | [23] |
| Ativos digitais | Emitir não exige licença; prestar serviço com ativo digital exige (Lei de Ativos Digitais) | [23] |
| Regra específica sobre pontos/vales de fidelidade | **Não encontrado** | — |
| Definição legal de "dinheiro eletrônico" (texto sérvio) | **Não encontrado** nas fontes lidas | — |

**Leitura (inferência, não fonte):**
- **O que ajuda:** o crédito do Baby Loop **não vira dinheiro** e só vale dentro da plataforma. Isso se aproxima da exceção de rede limitada ou de gama limitada de bens.
- **O que pesa contra:**
  - **as peças vêm de outras mães**, não do emissor, e isso pode ser lido como pagamento entre terceiros intermediado pela plataforma;
  - **o crédito é comprado com dinheiro**, o que o aproxima de dinheiro eletrônico.
- **Desenho que tende a reduzir risco (validar com advogado):**
  - o crédito comprado é "pré-pagamento de serviço da plataforma", sem transferência de dinheiro entre usuárias;
  - sem saque e sem transferência entre contas;
  - com validade;
  - com monitoramento do volume contra o teto de EUR 1 milhão.

---

## 6. Consumidor, dados e segurança infantil

### Proteção do consumidor

| Item | Dado | Fonte |
|---|---|---|
| Lei base até 2026 | Zakon o zaštiti potrošača, "Sl. glasnik RS" 88/2021 | [25] |
| **Nova lei** | Nova Lei de Proteção do Consumidor **adotada em abril/2026**, com aplicação geral a partir de **01 ou 02/08/2026** (as fontes divergem no dia) | [26][27] |
| **Arrependimento em compra à distância** | **14 dias**, sem justificativa (art. 27 da lei de 2021). Reembolso em até 14 dias do aviso; o consumidor devolve o bem em até 14 dias | [25][28] |
| Arrependimento na lei nova de 2026 | Prazo mantido ou alterado: **não encontrado**. Novidade: com defeito, rescisão e reembolso direto em até 30 dias da entrega | [26] |
| Marketplaces (lei 2026) | Novas obrigações: transparência de ranking, **identificação de quem é lojista** e aviso de anúncio pago / resultado patrocinado | [26][27] |
| Preço personalizado | Tem que avisar se o preço foi personalizado por decisão automatizada | [26] |
| Promoção | Informar o menor preço dos 30 dias anteriores; lista de preços digital atualizada em tempo real (alteração da Lei de Comércio) | [27] |
| **Venda entre pessoas físicas (C2C)** | A lei cobre lojista × consumidor. Pessoa física que vende online pode ser vista como "lojista" conforme o caso. Regra específica de C2C em plataforma: **não encontrado** | [29] |

**Impacto:** o Baby Loop tem duas relações de consumo possíveis. Uma é **plataforma × mãe** (venda de pacote de crédito): aqui entram o arrependimento de 14 dias e a regra sobre crédito não usado. A outra é **mãe × mãe**: o enquadramento é incerto, e a lei nova exige deixar claro quem é lojista e quem não é.

### Proteção de dados (ZZPL)

| Item | Dado | Fonte |
|---|---|---|
| Lei | Zakon o zaštiti podataka o ličnosti, em aplicação plena desde **21/08/2019**, "em grande parte harmonizada com o GDPR" | [30] |
| Alcance | Extraterritorial: vale para empresa de fora que oferece bens ou serviços a pessoas na Sérvia | [30][31] |
| Empresa estrangeira | Pode ter que nomear **representante na Sérvia** | [31][32] |
| Autoridade | Poverenik (Comissário de Informação e Proteção de Dados), com poder de inspeção e de ordem | [30] |

### Segurança de artigos infantis (o "Inmetro" de lá)

| Item | Dado | Fonte |
|---|---|---|
| Lei geral | Zakon o opštoj bezbednosti proizvoda ("Sl. glasnik RS" 41/2009 e 77/2019), baseada na Diretiva UE 2001/95 | [33] |
| **Usados** | A lei **vale também para produto usado**: todo produto posto no mercado tem que ser seguro | [33] |
| **Cadeirinha de carro** | O regulamento de veículos exige padrão **ECE R44**. Criança até 12 anos ou abaixo de 135 cm vai em cadeirinha | [34][35] |
| R129 (i-Size) | Na **UE**, desde 01/09/2024 só se vende cadeirinha nova R129. Na Sérvia, as fontes falam em "fase de transição" com R44 e R129 no mercado | [34][35] |
| Berço e carrinho | Norma sérvia específica (equivalente à EN 716 / EN 1888): **não encontrado** | — |

**Recomendação:**
- Cadeirinha **só com etiqueta ECE R44/R129 visível na foto**.
- Cadeirinha **sem histórico de acidente** e **dentro da validade do fabricante**.
- Cadeirinha é a categoria de maior risco; avaliar deixar de fora no lançamento.

---

## 7. Sérvia × União Europeia

| Item | Dado | Fonte |
|---|---|---|
| Status | **Candidata** desde 2012 (pedido em 2009). **Não é membro** | [36] |
| Negociação | 22 de 35 capítulos abertos, 2 fechados provisoriamente | [36] |
| Travamento | Em 07/2026, embaixadores da UE não tiveram unanimidade para abrir o Cluster 3; 8 Estados-membros se opuseram | [37][36] |
| Capítulos pendentes relevantes | 10 (Sociedade da Informação), 16 (Tributação), 29 (União Aduaneira) | [36] |

**O que isso significa (inferência):**
- **Empresa sérvia não tem passaporte da UE.** Licença do NBS não vale na UE, e o GDPR se aplica em separado ao vender para europeus.
- **Envio físico Sérvia → UE passa por alfândega.** Para troca de roupa entre países, isso pesa.
- **As leis sérvias copiam muito da UE** (PSD2, GDPR, consumidor, segurança de produto) [24][30][33]. O produto montado para a Sérvia chega perto do padrão europeu, mas a expansão pede **nova empresa ou licença dentro da UE**.
- **Stripe funciona na Croácia, Eslovênia, Hungria, Romênia e Bulgária**, vizinhos da UE [6]. Uma entidade num desses países é rota comum, mas não resolve o cupom fiscal sérvio.

---

## Pontos que precisam de advogado local

1. **Créditos pagos em dinheiro:** confirmar se é dinheiro eletrônico ou serviço de pagamento, se cabe na exceção de rede limitada e se precisa notificar o NBS antes de EUR 1 milhão. **É o ponto que decide o projeto.**
2. **Base do cupom fiscal:** venda de crédito, troca entre mães e taxa retida pela plataforma. O que gera cupom, e de qual valor?
3. **IVA sobre o crédito:** incide na compra do pacote (como adiantamento) ou só na taxa da plataforma?
4. **Estrutura:** DOO sérvia × empresa estrangeira com representante fiscal. Qual custa menos com IVA, cupom e ZZPL?
5. **Mãe que troca muito:** quando vira "lojista" pela lei de consumidor de 2026? Que avisos a plataforma tem que exibir?
6. **Arrependimento de 14 dias** aplicado a pacote de crédito já usado em parte, e crédito que vence.
7. **Responsabilidade da plataforma** por produto usado inseguro (Lei de Segurança Geral de Produtos), com foco em cadeirinha, berço e carrinho.
8. **Preço em RSD** quando o crédito é "moeda interna". Exibir equivalência em dinar basta?
9. **ZZPL:** base legal, DPO/representante e transferência de dados para servidores fora da Sérvia (Supabase/Vercel nos EUA/UE).
10. **Diretor estrangeiro (Marko):** permissão de residência e trabalho, se ele operar da Sérvia.

---

## Fontes

1. NBS — Crescimento estável dos pagamentos instantâneos no 1º sem. 2025: https://www.nbs.rs/sr/scripts/showcontent/index.html?id=20921&konverzija=no
2. NBS — Instant Payments Serbia (IPS NBS): https://nbs.rs/en/ciljevi-i-funkcije/platni-sistem/nbs-operator/ips-nbs/
3. IPS NBS — Estatísticas: https://ips.nbs.rs/en/ips-placanja-statistika
4. Transfi — Serbia's Payment Rails (DinaCard, IPS): https://www.transfi.com/blog/serbias-payment-rails-how-they-work---dinacard-ips-real-time-payments
5. NORBr — Payment methods in Western Balkans: https://norbr.com/library/payworldtour/payment-methods-in-western-balkans/ (a página deu 404 na leitura direta; dado visto no resumo da busca)
6. Stripe — Global availability: https://stripe.com/global
6b. Devanta — Stripe for non-US residents: https://devanta.us/stripe-for-non-us-residents/
7. AboutPayments — DinaCard: https://www.aboutpayments.com/en/knowledge-base/method/dinacard-payment-method
8. Welcome to Serbia — Serbia E-commerce Explained: https://welcometoserbia.org/en/serbia-e-commerce-explained-legal-forms-payments-and-sales-channels/
9. ecommerce4all.rs — Offers & Possibilities (e-payment): https://ecommerce4all.rs/en/module/e-payment/offers-and-possibilities/
10. Monri Docs — IPS Serbia: https://docs.monri.com/docs/instant-payments-serbia-ips-rs
10b. AskMe — Acquiring in Serbia: https://www.askme.rs/en/post/acquiring-in-serbian-history-reality-solutions
11. eKapija — Recebimento via PayPal oficialmente disponível na Sérvia: https://www.ekapija.com/en/news/1153451/money-reception-through-paypal-officially-available-in-serbia
12. TM Consulting — PayPal na Sérvia: https://tmconsulting.co.rs/english/news/article/what-is-paypal-and-how-to-use-it-in-serbia/
13. Paragraf — Condições para comércio eletrônico (preço em dinar): https://www.paragraf.rs/baza-znanja/elektronsko-poslovanje/uslovi-za-obavljanje-elektronske-trgovine.html
13b. Stojković Attorneys — Foreign exchange regulations: https://statt.rs/comprehensive-guide-to-serbias-foreign-exchange-regulations-for-residents-and-non-residents/
14. Trading Economics — Serbian Dinar (cotação de 17/09/2026): https://tradingeconomics.com/serbia/currency
14b. NBS — Formação da taxa média oficial RSD/EUR: https://www.nbs.rs/en/scripts/showcontent/index.html?id=1776&konverzija=no
15. Zunic Law — Company Formation in Serbia 2026: https://zuniclaw.com/en/company-formation-in-serbia/
16. Jarnias Cyril — Custo para abrir empresa na Sérvia: https://www.jarniascyril.com/company-formation-abroad/creation-company-serbia-guide-procedures-taxation-benefits/cost-company-formation-serbia-budget-fees-tax-benefits/
17. Transatlantic Law — Serbia VAT Registration Rules 2026: https://www.transatlanticlaw.com/content/serbia-vat-registration-rules-2026-thresholds-fiscal-representatives-and-compliance-risks-for-foreign-companies/
17b. VATCalc — Serbia VAT on non-resident digital services: https://www.vatcalc.com/serbia/serbia-vat-on-non-resident-digital-services/
18. Creative Finance — E-commerce in Serbia: Fiscalization: https://creativefinance.rs/en/e-commerce-in-serbia-fiscalization/
19. Polako Finance — eFiskalizacija para loja online: https://polako-finance.com/en/blog/efiskalizacija-serbia-guide-2026-08-01
20. Comarch — Serbia amendments e-invoicing/VAT 2026: https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/serbia-adopts-key-amendments-to-electronic-invoicing-and-vat-laws-in-2026/
21. Karanovic & Partners — Harmonização da Lei de Serviços de Pagamento com a PSD2: https://www.karanovicpartners.com/news/harmonisation-of-serbian-law-on-payment-services-with-psd2/
22. NBS — Instituições de pagamento e de dinheiro eletrônico: https://www.nbs.rs/en/finansijske-institucije/pi-ien/
23. Chambers — Fintech 2026 Serbia: https://practiceguides.chambers.com/practice-guides/fintech-2026/serbia
24. Lexology — Harmonisation of Serbian Law on Payment Services with PSD2: https://www.lexology.com/library/detail.aspx?g=791d4eb9-415c-4786-9b38-17bef7c907f3
25. Kancelarija Minić / resultado de busca — direito de devolução (art. 27, lei 88/2021): https://kancelarijaminic.rs/en/returning-product-is-a-consuker-right/ e D2P: https://d2plaw.com/en/d2p-headlines/serbia-new-consumer-protection-law/
26. Karanovic & Partners — Reforma das leis de consumidor e comércio (2026): https://www.karanovicpartners.com/news/serbia-adopts-major-reform-of-consumer-protection-and-trade-laws/
27. PSG — New Consumer Protection Law and Trade Law amendments: https://psg.rs/newsroom/serbia-adopts-new-consumer-protection-law-and-amendments-to-the-trade-law-what-businesses-need-to-know
28. ecommerce4all.rs — Direitos do consumidor na Sérvia: https://ecommerce4all.rs/en/prava-potrosaca-u-srbiji/
29. DOAJ — Who is an online trader from the consumer law perspective: https://doaj.org/article/f5b6f35e25604c56bae62ca1251659f1
30. Secure Privacy — Serbia data protection law: https://secureprivacy.ai/blog/serbia-data-protection-law-compliance-guide
31. PR Legal — Representante de controlador estrangeiro: https://www.prlegal.rs/obligation-of-foreign-controller-and-processor-of-data-to-appoint-representative-in-the-republic-of-serbia/
32. Zunic Law — Data Protection Representative Serbia: https://zuniclaw.com/en/data-protection-representative-serbia/
33. Paragraf / ecommerce4all — Zakon o opštoj bezbednosti proizvoda: https://www.paragraf.rs/propisi/zakon_o_opstoj_bezbednosti_proizvoda.html e https://ecommerce4all.rs/en/zakon-o-opstoj-bezbednosti-proizvoda/
34. Paragraf Lex — Regulamento de veículos / cadeirinhas ECE R44: https://paragraflex.rs/dnevne-vesti/070524/070524-vest9.html
35. Axkid Srbija — ECE R44 ou R129: https://axkidsrbija.rs/vazece-regulative-za-decija-auto-sedista-ece-r44-ili-r129/
36. European Western Balkans — Brussels and Belgrade push to unlock talks (07/2026): https://europeanwesternbalkans.com/2026/07/08/brussels-and-belgrade-make-push-to-unlock-serbias-accession-talks/ e Wikipedia: https://en.wikipedia.org/wiki/Accession_of_Serbia_to_the_European_Union
37. Euronews — Oito Estados-membros contra abrir o próximo cluster (08/07/2026): https://www.euronews.com/my-europe/2026/07/08/eight-member-states-oppose-the-opening-of-serbias-next-eu-accession-cluster
