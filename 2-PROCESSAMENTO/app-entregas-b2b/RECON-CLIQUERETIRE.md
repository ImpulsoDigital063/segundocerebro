# Recon Técnico — CliqueRetire / Grupo Clique (backend & GPS)

> Drilldown técnico feito em 29/05/2026 sobre https://www.cliqueretire.com.br/ e o app de rastreio `rastreio.cliqueretire.com.br`.
> Objetivo: engenharia reversa do BACKEND e do SISTEMA DE GPS de um player logístico brasileiro, pra calibrar o APPDELYVERY.
> Método: HTML cru (curl), headers HTTP, config.json e JS do app de rastreio, WebSearch.

---

## TL;DR (a descoberta que importa)
**O CliqueRetire NÃO tem GPS nem mapa. O "rastreamento em tempo real" deles é uma barra de status por checkpoint — igual Correios.** Quem faz carrinho-no-mapa (estilo iFood/Uber) já sai na frente deles. A arquitetura de backend é AWS séria (API Gateway + Lambda + microsserviços), mas a parte de rastreio é evento-de-status, não geolocalização.

---

## 1. O que é a empresa
**Grupo Clique** — rede de **smart lockers** (marca "eBox"), +1.000 pontos no Brasil (metrôs RJ/SP, shoppings, postos, condomínios). Modelo **PUDO** (pickup/dropoff: cliente retira no locker com código) + braço de transporte rodoviário "SEND". **Não é entrega porta-a-porta com frota rastreada.** Produtos: Clique Retire (retirada) e Clique Receba (caixa postal fora de casa).

→ **Importante:** modelo de negócio DIFERENTE do APPDELYVERY. Eles são ponto-de-coleta; nós somos motoboy sob demanda. Mas a arquitetura de software ensina.

## 2. Front-end (FATO — visto no HTML)
- **Site institucional:** WordPress 6.8.5 + tema The7 + Elementor + plugin AI Engine Pro. É só marketing/blog.
- **App de rastreio:** **AngularJS 1.7.8** (SPA legada), jQuery, Bootstrap, DataTables, moment.js, `jwt-decode` (auth JWT), reCAPTCHA v2 protegendo a consulta.

## 3. Backend / infra (FATO — headers + config.json)
Tudo em **AWS** (região `sa-east-1` São Paulo):
- Site WP: Apache atrás de **CloudFront** (CDN).
- App de rastreio: **arquivos estáticos no Amazon S3** (bucket `cliqueretire-tracking`) servidos por CloudFront.
- Dados: **microsserviço versionado** `services.cliqueretire.com.br/orders/api/v1/` (nome "orders" → arquitetura de microsserviços).
- **AWS API Gateway + Lambda** na frente do backend (confirmado: `403 MissingAuthenticationTokenException` + header `x-amz-apigw-id`). Exige autorização.
- Linguagem do backend não exposta (atrás do API Gateway). Padrão Lambda+microsserviço sugere **Node.js ou Java/Spring** — isso é **inferência**, não fato.

## 4. Sistema de GPS / MAPA — a parte central (FATO)
**Não existe GPS. Não existe mapa. Não há rastreio de localização em tempo real.**
- Busca em todo HTML/JS por `googleapis maps`, `mapbox`, `leaflet`, `openstreetmap`, `here`, `tomtom`, `lat/lng`, `gps` → **zero ocorrências**.
- O rastreio é uma **máquina de estados por eventos** (`trackingController.js`): o app chama `GET {proxy}/volume/{codigo}/{recaptchaToken}` e recebe um array `tracking[]` de eventos discretos. Renderiza **ícones PNG** (`created.png`, `inbound.png`, `intransit.png`, `closed.png`) — não pontos num mapa.
- Dicionário de eventos é textual/logístico, não geográfico. Ex.: `ORIGIN_COLLECTED`="Coletado no CD", `STORED`="Armazenado no eBox", `FOR_MERCHANT_IN_TRANSIT_TO_DESTINATION`="Saiu para entrega", `CUSTOMER_COLLECTED`="Entregue".
- Dois fluxos: **lockers** (IN_BOUND → IN_TRANSIT_TO_EBOX → STORED → CUSTOMER_COLLECTED) e **transporte "SEND"** (eventos tipo "ESTRADA INTERDITADA", "ROUBO DE CARGA", "GREVE" — vocabulário de transportadora/CT-e).
- Geografia = dicionário fixo de hubs (`metro_rj`→"Rio", `metro_sp`→"São Paulo").

**Veredito:** o marketing fala "tempo real", mas tecnicamente é **near-real-time por atualização de status de checkpoint**, não o carrinho-no-mapa.

## 5. Vagas de emprego
Não encontradas vagas com pista de stack. Sem confirmação extra de linguagem.

## 6. FATO × INFERÊNCIA
- **FATO:** WordPress no site; AngularJS estático no S3; AWS API Gateway + Lambda + microsserviço "orders/api/v1"; auth JWT + reCAPTCHA; rastreio 100% por evento de status, **sem mapa/GPS**.
- **INFERÊNCIA:** linguagem backend (Node/Java provável); pode haver painel interno mais novo não exposto; integração com transportadora terceirizada na linha "SEND".

---

## O que isso ensina pro APPDELYVERY

**1. Onde já saímos na frente.** O APPDELYVERY com motoboy-no-mapa em tempo real é tecnicamente SUPERIOR ao rastreio do CliqueRetire. Eles não fazem isso. É um diferencial real, não marketing.

**2. O que vale copiar deles — a máquina de estados de eventos.** O `eventDict` deles é limpo, versionado e cobre exceções logísticas (roubo de carga, endereço não encontrado, etc.). Vale espelhar essa ideia na nossa máquina de estados da entrega — mas SOMANDO a camada de GPS que eles não têm.

**3. Padrão de arquitetura validado.** AWS API Gateway + Lambda + microsserviços + JWT + front estático em CDN é o esqueleto "enterprise" deles. O nosso (Next + Supabase + Vercel) entrega o mesmo resultado com MUITO menos peça pra gerenciar — pra Palmas e escala inicial, a stack Impulso é mais enxuta e mais barata. Não precisamos de microsserviços AWS pra começar.

**4. A peça que NINGUÉM da região faz e nós faríamos.** GPS real = `navigator.geolocation` no celular do entregador → coordenadas via WebSocket (Supabase Realtime) → ponto no mapa (Mapbox) + PostGIS pro matching por proximidade. CliqueRetire, TôNoLucro (status+SMS) e transportadoras locais param no status. O mapa ao vivo é o nosso terreno.

## Fontes
HTML/headers de cliqueretire.com.br e rastreio.cliqueretire.com.br; arquivos app.js, config.json, trackingController.js, trackingView.html do app de rastreio; páginas institucionais do Grupo Clique.
