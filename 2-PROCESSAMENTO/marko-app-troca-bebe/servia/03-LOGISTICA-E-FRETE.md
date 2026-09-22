# Baby Loop Sérvia — 03. Logística e frete

**Data da pesquisa:** 17/09/2026
**Escopo:** entrega doméstica na Sérvia para kits de roupa de bebê (~1,5 kg), comparando com o modelo Brasil (em mãos com QR, ponto parceiro, Melhor Envio com frete pago por quem recebe).
**Regra:** cada afirmação tem fonte numerada (ver seção "Fontes"). Onde não achei, está escrito "não encontrado".
**Câmbio:** não pesquisado aqui; valores ficam em RSD (dinar sérvio).

---

## 1. Transportadoras — tabela comparativa (pacote de 1 a 2 kg, doméstico)

| Transportadora | Preço 1–2 kg (RSD) | Vigência do preço | Prazo | Pontos de coleta/entrega | Lockers (paketomati) | API |
|---|---|---|---|---|---|---|
| **Post Express** (Pošta Srbije) | **500,00** porta a porta; **400,00** se entregue na agência ou no paketomat (postagem só no guichê). PostexpressBOX: 500,00 envelope padrão até 2 kg. Serviço isento de PDV [1] | 01/01/2026 [1] | "Danas za sutra": entrega até 19h do dia útil seguinte [1] | Rede de agências dos Correios ("stižemo do svakog mesta u Srbiji") [2] | Sim, entrega em paketomat no dia útil seguinte, até 15 kg [1][3] | Sim — integração de lojas virtuais com Post Express documentada por terceiro [4]; app Pošalji-Primi / Web-ekspres para pedir coleta [3] |
| **D Express** | **600,00** com PDV (500,00 sem) [5] | documento de 13/03/2026 [5] | "Danas za sutra": 24h ou no dia seguinte até 14h; mesmo dia: 3h após coleta [6] | Coleta no endereço; "paket shop" citado como serviço [6] | Sim, ~300 endereços em 80 cidades; só RECEBIMENTO (não achei envio pelo locker); prazo de retirada 2 dias úteis; prorrogação 149,99 RSD/dia [7][8] | Não encontrado documentação pública (só rastreio via AfterShip) [9] |
| **D Express via KupujemProdajem** | **340** (preço KP, até 2 kg) vs "padrão" 580 citado pelo KP [10] | sem data no blog do KP [10] | igual D Express | coleta no endereço agendada pelo KP [10] | não mencionado [10] | não (é função dentro do KP) |
| **BEX Express** | **660,00** com PDV (550,00 sem) [11] | 01/09/2026 [11][12] | "Danas za sutra" [11] | Parcel shops listados na API [13] | Sim, e é a **única** que permite **enviar** pelo paketomat, além de receber; guarda 72h; pagamento com cartão no locker; código por SMS/Viber [14] | **Sim**, REST/JSON: criar envio, etiqueta, rastreio, lista de parcel shops. Exige contrato (ponude@bex.rs / api@bex.rs) [13] |
| **AKS** | **600** com PDV [15] | 01/07/2026 [15] | "Danas za sutra" [16] | 20 centros de distribuição, app Android, portal akskurir.com [16] | não encontrado | não encontrado documentação pública |
| **City Express** | **715,00** com PDV (faixa 0,5–2 kg) [17] | sem data na página [17] | não encontrado | Parcel Shop (embalagem grátis) [18] | Sim, "mais de 200" locais (Belgrado, Novi Sad, Niš, Subotica, Kragujevac etc.); foco em RECEBER; PIN por Viber com link para pagar a otkupnina [19] | Software "Expedit" para clientes [20] (detalhe de API não encontrado) |
| **GLS Srbija** | não encontrado preço público atual (lista pública achada é de 06/02/2023) [21] | — | local geralmente em 24h [22] | Paket Shop [22] | Sim, paketomat para receber [22] | não encontrado para Sérvia |
| **DPD Srbija** | não encontrado (resultados só de DPD Croácia/Eslovênia) [23] | — | não encontrado | não encontrado | não encontrado para Sérvia | não encontrado |
| **Daily Express** | não encontrado (a busca só retornou D Express) [24] | — | — | — | — | — |
| **X Express** | tem página de preços, não detalhada aqui [25] | — | — | — | — | — |

**Leitura rápida:** para 1–2 kg o preço de balcão fica entre **400 e 715 RSD**. A opção mais barata de "pessoa física sem contrato" é a Post Express entregue em agência/paketomat (**400 RSD**) [1]. Dentro do KupujemProdajem o D Express sai por **340 RSD** [10]. Existem mais de 150 transportadoras registradas no país [26].

---

## 2. Agregador tipo Melhor Envio / Packlink / Shippo

- **Não encontrado** um agregador doméstico sérvio que compare Post Express, D Express, BEX, AKS etc. e gere etiqueta via uma API só. As buscas por "agregator kurirskih službi" e "uporedite cene kurira" não retornaram nenhum [26][27].
- **Eurosender** vende envio Sérvia→Sérvia "a partir de €2,99", com coleta porta a porta ou em parcel shop, seguro básico até €200, usando DHL, UPS e FedEx [28]. É plataforma europeia, não foca nas transportadoras locais baratas. API: não confirmado na página [28].
- **Packeta**: atua em Tchéquia, Eslováquia, Polônia, Hungria e Romênia (não achei Sérvia) [29]. **Packlink**: nada encontrado para Sérvia [29].
- **Slanjepaketa.rs**: fulfillment/armazenagem para lojas virtuais, não é comparador de frete para pessoa física [27].
- Plataformas de e-commerce sérvias (NB Shop, Sellvio) oferecem **integrações** com D Express, DHL, GLS, DPD, Speedy, AKS e City Express [30][31] — ou seja, o padrão lá é integrar transportadora por transportadora.

**Conclusão:** não há "Melhor Envio sérvio". O Baby Loop teria que integrar direto com 1 ou 2 transportadoras (BEX tem a API mais documentada [13]).

---

## 3. Pagamento na entrega (otkupnina / pouzeće)

- **Uso:** fontes do mercado dizem que mais de 60%–70% das compras online na Sérvia ainda são pagas na entrega [32][33].
- **Como funciona:** o remetente declara o valor da otkupnina; o courier cobra do comprador na entrega e repassa ao remetente [34]. No KP o repasse acontece em 2–3 dias úteis [10].
- **Mudança legal:** a nova Lei de Serviços Postais vale desde **14/03/2025**; a otkupnina só pode ser devolvida ao remetente **por depósito em conta bancária**, não mais em dinheiro [35][36]. O comprador continua podendo pagar em dinheiro ao courier (a Post Express ainda menciona preços "quando o destinatário paga a postagem em dinheiro" [1]).
- **Custos:**
  - Post Express: +67,00 RSD por envio com otkupnina, mais a tarifa do repasse conforme tabela de pagamentos [1].
  - BEX: 1,5% do valor, mínimo 180,00 RSD (com PDV) [11].
  - D Express no KP: 1,5% do valor, mínimo 180 RSD [10][34].
  - City Express: 216,00 RSD até 10.000 RSD; acima disso, 2,16% [17].
  - Lojas grandes cobram taxa extra do comprador: a Ananas cobra 200 RSD a mais para pagamento na entrega (19/06/2026) [37].
- **Para o Baby Loop:** em TROCA não existe valor a cobrar pela peça, então a otkupnina só serviria para cobrar **o frete** ou uma **taxa da plataforma** na entrega. O custo mínimo de 180 RSD torna isso caro para um frete de 340–660 RSD. Melhor cobrar o frete no app (cartão/IPS) ou usar "destinatário paga o frete" direto ao courier, que o KP já oferece [10].

---

## 4. Postar sem impressora

- **Post Express:** a mãe cadastra os dados no app Android e recebe um número de adresnica, que cola no pacote com adesivos que as agências dão de graça [38]. Quem registra os dados no WEB/EPK/app ganha 5 RSD de desconto por envio [1]. Se não tiver nada preenchido, a agência preenche a adresnica por 20,00 RSD [1]. O **PostexpressBOX** exige uso do app [1].
- **BEX:** o envio pelo paketomat funciona com código recebido por SMS/Viber digitado na tela do locker, pagando com cartão [14]. Se o locker imprime a etiqueta ou não: **não encontrado**.
- **D Express / City Express:** o código (PIN) por Viber/SMS é só para **retirar** no locker [7][19]. Se o courier leva a etiqueta na coleta: **não encontrado** no FAQ do D Express [6] nem no blog do KP [10][34].
- **Conclusão:** existe caminho sem impressora (app da Post Express + etiqueta manuscrita/adesivo, ou locker BEX), mas nenhuma transportadora encontrada tem o fluxo "QR no celular, balcão imprime" documentado claramente. Validar com BEX e Post Express antes de prometer.

---

## 5. Como o KupujemProdajem resolve o envio

- KP é o maior site de classificados da Sérvia [39].
- **Não tem transportadora própria.** Tem o serviço "Zakazivanje kurira" (agendar courier) em parceria exclusiva com a **D Express** [10][40].
- Fluxo: agenda pelo chat do KP (endereço do comprador preenche sozinho) ou pelo menu "Moj KP"; o preço aparece no último passo com base no peso; se o peso real for diferente, o preço é ajustado [10][41].
- Quem paga o frete (remetente ou destinatário) é escolhido na hora; o pagamento é feito direto ao courier na coleta ou na entrega [41].
- Preços KP (sem data no blog): até 2 kg = **340 RSD**; 2–5 kg = 600; 5–10 kg = 800; 10–20 kg = 1.100 [10].
- Limites: 60x80x100 cm e 20 kg [41]. Seguro/indenização máxima de 200.000 RSD para envio com valor declarado; reclamação de avaria em até 24h [34].
- Suporte dedicado: kp.care@dexpress.rs / 011 411 21 92 [42].

**Lição para o Baby Loop:** o líder local não construiu logística, fez um acordo de preço com UMA transportadora e embutiu o agendamento no chat. É o modelo a copiar.

---

## 6. Cidades principais e distâncias

População do Censo 2022 (Sérvia total: 6.690.887) [43]:

| Cidade | População (2022) | Distância de Belgrado (estrada) |
|---|---|---|
| Belgrado | 1.685.563 | — |
| Novi Sad | 367.121 | 89 km (A1) [44] |
| Niš | 249.816 | 237 km (E75) [44] |
| Kragujevac | 171.628 | 140 km [45] |
| Subotica | 124.679 | 185 km [44] |

Somente Belgrado, Novi Sad e Novi Pazar ganharam população desde 2011; o país perdeu 6,9% [43].

**Leitura:** Belgrado sozinha concentra ~25% da população (1.685.563 de 6.690.887) [43]. Troca em mãos faz sentido **dentro** de Belgrado e Novi Sad. Entre cidades, envio por courier (Novi Sad fica a 89 km, dá até troca combinada em viagem, mas não escala).

---

## 7. Recomendação — como montar a entrega do Baby Loop na Sérvia

1. **Três portas, igual Brasil, mas com outra ordem de prioridade:**
   - **Em mãos com QR** em Belgrado e Novi Sad (onde está a densidade) [43].
   - **Locker/agência** como "ponto parceiro": não precisa criar rede própria, já existem paketomati da Post Express, D Express (~300), City Express (200+) e BEX [1][7][14][19].
   - **Courier entre cidades** para o resto.
2. **Transportadora principal: BEX ou Post Express, não as duas no começo.**
   - **BEX:** API REST documentada [13] e é a única que deixa **enviar** pelo locker [14] — casa com "mãe sem impressora". Preço de balcão é o mais alto dos que achei (660 RSD) [11], então precisa negociar contrato (a API já exige contrato) [13].
   - **Post Express:** mais barata para pessoa física (400 RSD em agência/locker, 500 porta a porta) [1], rede em todo o país [2], app para gerar adresnica sem impressora [38].
   - **D Express** é a escolha do KP [10]; ter o mesmo preço de 340 RSD exigiria um acordo parecido, e não achei API pública [9].
3. **Frete pago por quem recebe**, cobrado no app (cartão/IPS) ou direto ao courier na entrega, como o KP faz [41]. Evitar otkupnina como padrão: mínimo de 180 RSD de taxa [10][11] e repasse só em conta bancária [35].
4. **Sem agregador disponível** [26][27]: começar com 1 integração direta e só depois adicionar a segunda.
5. **Antes de lançar, validar por telefone/e-mail** (não achei na web):
   - BEX: o locker imprime etiqueta ou basta o código? Preço de contrato para ~1,5 kg?
   - Post Express: a agência aceita só o número do app sem etiqueta impressa?
   - D Express: existe API/contrato para plataforma tipo KP?
   - GLS e DPD Sérvia: preço para pessoa física e API.

---

## Fontes

1. Post Express — Cenovnik Post-ekspres usluge, unutrašnji saobraćaj, stanovništvo (válido desde 01/01/2026; PDF baixado e lido em 17/09/2026): https://www.posta.rs/DocumentViewer.aspx?IdDokument=1002725&Dokument=stanovnistvo-paketske-srbija-post-ekspres-01-01-2026-lat.pdf
2. Pošta Srbije — Slanje paketa u Srbiji, Cene: https://www.posta.rs/lat/stanovnistvo/usluga.aspx?usluga=postanske-usluge%2Fpaketske-usluge-srbija%2Fslanje-paketa-u-srbiji&strana=cene
3. Pošta Srbije — Post-ekspres, Najčešća pitanja: https://www.posta.rs/lat/stanovnistvo/usluga.aspx?usluga=postanske-usluge%2Fekspres-usluge-srbija%2Fpost-ekspres-post-express&strana=najcesca-pitanja
4. Explicit.rs — API integracija internet prodavnice sa Poštom Srbije (PostExpress): https://explicit.rs/article/api-integracija-internet-prodavnice-sa-postom-srbije-postexpress
5. D Express — Standardni cenovnik usluga dostave: https://www.dexpress.rs/rs/cenovnik
6. D Express — Često postavljana pitanja: https://www.dexpress.rs/rs/cesto-postavljana-pitanja
7. D Express — Paketomat: https://www.dexpress.rs/rs/paketomat
8. D Express — Usluge: https://www.dexpress.rs/rs/usluge
9. AfterShip — D Express Tracking: https://carriers.aftership.com/dexpress
10. KupujemProdajem Blog — Zakazivanje kurira: https://blog.kupujemprodajem.com/info/zakazivanje-kurira/
11. BEX Express — Cenovnik poštanskih usluga (PDF): https://bexexpress.rs/assets/cenovnik-novi-BcoiMAeR.pdf
12. BEX Express — Cenovnik ("aktuelan od 01.09.2026"): https://bexexpress.rs/cenovnik/
13. BEX Express — API dokumentacija: https://bexexpress.rs/DevDocumentation/
14. BEX Express — Paketomati: https://bexexpress.rs/usluge/paketomati/
15. AKS — Cenovnik (válido desde 01/07/2026): https://www.aks.rs/cenovnik/
16. AKS — Página inicial: https://www.aks.rs/
17. City Express — Cenovnik usluga u domaćem transportu: https://www.cityexpress.rs/cenovnik-domaci-transport
18. City Express — Parcel Shop: https://www.cityexpress.rs/parcel-shop/
19. City Express — Paketomat: https://www.cityexpress.rs/paketomat
20. City Express — Expedit softver: https://www.cityexpress.rs/expedit
21. GLS Srbija — Price list (PDF, 2023): https://gls-group.eu/RS/media/sr/downloads/Price_list_Serbia-3.pdf
22. GLS Srbija — Primanje paketa / Isporuka: https://gls-group.com/RS/sr/privatni-korisnici/primanje-paketa/ e https://gls-group.com/RS/sr/poslovni-korisnici/redovne-isporuke/
23. DPD Hrvatska (único resultado encontrado; Sérvia não encontrada): https://www.dpd.com/hr/hr/primanje-paketa/
24. Busca "Daily Express Srbija" retornou apenas D Express: https://www.dexpress.rs/
25. X Express — Cenovnik: https://www.x-express.rs/cenovnik
26. Serbiaplaces — Najbolje kurirske službe u Srbiji (150+ transportadoras): https://serbiaplaces.com/najbolje-kurirske-sluzbe-u-srbiji/
27. Slanje Paketa (fulfillment): https://www.slanjepaketa.rs/cenovnik
28. Eurosender — Serbia to Serbia: https://www.eurosender.com/en/dd/serbia-serbia
29. ShipEngine — Packeta: https://help.shipengine.com/hc/en-us/articles/25283040091803-Packeta
30. NB Shop — Kurirske službe (integrações): https://www.nbshop.rs/integracije/kurirske-sluzbe
31. Sellvio — Specijalni tipovi isporuke: https://sellvio.com/sr/uputstvo/clanak/specijalni-tipovi-isporuke/48
32. BetaRS — Online plaćanja bez granica (16/05/2025): https://beta.rs/content/224736-online-placanja-bez-granica-kako-osvojiti-kupce-u-srbiji-cg-bih-i-makedoniji
33. Brendi.rs — WooCommerce plaćanja u Srbiji 2025: https://brendi.rs/en/woocommerce-placanja-u-srbiji-kompletan-vodic-za-2025/
34. KupujemProdajem — Zakazivanje kurira, pravila i uslovi: https://www.kupujemprodajem.com/zakazivanje-kurira-pravila-uslovi
35. D Express — Obaveštenje: Novi Zakon o poštanskim uslugama (14/03/2025): https://www.dexpress.rs/rs/aktuelnosti/228-obavestenje-novi-zakon-o-postanskim-uslugama
36. Paragraf — Zakon o poštanskim uslugama (notícia 16/01/2026): https://www.paragraf.rs/dnevne-vesti/160126/160126-vest5.html
37. N1 — Onlajn kupovina pouzećem: dodatni trošak (19/06/2026): https://n1info.rs/biznis/onlajn-kupovina-za-placanje-pouzecem-dodatni-trosak/
38. Benchmark Forum — Kurirske službe i paketomati (relato de uso do app Post Express): https://forum.benchmark.rs/threads/kurirske-slu%C5%BEbe.181575/page-261
39. Wikipedia — KupujemProdajem: https://en.wikipedia.org/wiki/KupujemProdajem
40. KupujemProdajem — página inicial: https://www.kupujemprodajem.com/
41. KupujemProdajem — Zakazivanje kurira (resumo de busca, mesmo conteúdo de [10] e [34])
42. Contato D Express para usuários KP (kp.care@dexpress.rs), citado a partir de páginas do KP: https://www.kupujemprodajem.com/zakazivanje-kurira-pravila-uslovi
43. RZS / N1 — Popis 2022, primeiros resultados: https://n1info.rs/vesti/popis-stanovnistva-srbija-2022-rezultati/ e https://publikacije.stat.gov.rs/G2022/HtmlL/G20221350.html
44. Daljinar — Beograd (Novi Sad 89 km, Niš 237 km, Subotica 185 km): https://www.daljinar.com/daljinar-beograd/
45. Daljinar — Kragujevac: https://www.daljinar.com/daljinar-kragujevac/

**Observações de confiabilidade:**
- Os preços da Post Express [1] e da BEX [11] vieram dos PDFs oficiais lidos direto. D Express [5], AKS [15] e City Express [17] vieram das páginas oficiais, lidas por ferramenta de extração.
- A tabela do blog do KP [10] não tem data. O "preço padrão" que o KP cita (580 RSD para 1–2 kg) não bate com a tabela atual do D Express (600 com PDV) [5], então provavelmente está desatualizada.
- A fonte [38] é fórum de usuários, não canal oficial.
- A fonte [42] traz o contato vindo de resumo de busca; conferir na página antes de usar.
