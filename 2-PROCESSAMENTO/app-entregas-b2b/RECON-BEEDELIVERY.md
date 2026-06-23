# Recon — Bee Delivery (concorrente em Palmas)

> Drilldown feito em 02/06/2026 sobre https://www.beedelivery.com.br (apontado pelo Eduardo como concorrente atuando em Palmas).
> Método: WebSearch (origem, modelo, franquia, app), curl com user-agent de browser (headers + stack da home — o site bloqueia bots via Cloudflare), Google Play. Complementa ESTUDO-TONOLUCRO.md e RECON-CLIQUERETIRE.md.

---

## TL;DR (o que muda na tese do APPDELYVERY)
1. **Bee Delivery NÃO é de Palmas** — nasceu em **Mossoró-RN (2018)** e opera por **franquia** (igual ao TôNoLucro). Em Palmas é uma **franquia local desde set/2020**.
2. **Eles TÊM rastreamento GPS ao vivo** (carrinho no mapa em tempo real). Isso **neutraliza** o que o RECON-CLIQUERETIRE tratava como nosso diferencial ("ninguém na região faz mapa ao vivo"). O CliqueRetire não faz; **a Bee faz.**
3. **Eles NÃO checam antecedentes** (mesma brecha do TôNoLucro). → **O único diferencial defensável que sobra é a verificação de antecedentes + foco B2B de encomenda de valor.** Mapa ao vivo virou commodity local; confiança auditada, não.
4. Palmas agora tem **dois players de entrega sob demanda por franquia** (TôNoLucro nascido lá + Bee franqueada). Entrar de frente em "delivery genérico" é pior ainda do que o dossiê assumia.

---

## 1. O que é a empresa
- **Bee Delivery** — startup de logística de entregas sob demanda para **empresas** (restaurantes, comércio, qualquer negócio que precise mandar entrega). Não é só comida.
- **Origem:** Mossoró-RN, fundada em **2018** por Thales Patreze, Luan Rodrigues e André Ramón. 1ª entrega 17/02 em Mossoró; 1ª franquia em Parnaíba-PI 2 meses depois.
- **Escala:** **+128 franquias em +25 estados** (todos os estados, segundo material deles). Modelo de expansão = **franquia** (idêntico à lógica do TôNoLucro).
- **Em Palmas:** chegou em **setembro/2020** como franquia local.
- Case de venda da franquia: "franqueado faturando **R$ 35 mil/mês** em cidade de 50 mil habitantes" — mesma tese do interior que o TôNoLucro provou.

## 2. Como funciona (operação)
- Fluxo sob demanda: **empresa abre o chamado** no sistema (app ou web) → **entregadores próximos são notificados** → um aceita → coleta → entrega → cliente recebe.
- **Veículos:** bike, moto, carro, pickup e van (leque maior que o TôNoLucro).
- Discurso pro entregador: **liberdade de horário, sem metas**; recebe **treinamento próprio** da Bee antes de rodar.
- **Rastreamento em tempo real via GPS** para a empresa contratante — acompanha a posição do entregador no mapa (confirmado em descrições/reviews do produto; ver §6).

## 3. Modelo de cobrança / dinheiro
- **Empresa/lojista:** taxa calculada por **distância** da entrega (modelo por km, não tabela fixa — parecido com nossa fórmula).
- **Franqueado:** ganha **comissão sobre todas as chamadas** dos entregadores cadastrados na praça dele. Mais entregas = mais renda.
- **Entregador:** remunerado por entrega realizada (não há percentual público confirmado; precisa de drilldown logado).
- (Não foi possível confirmar publicamente o take rate exato — fica como pergunta aberta.)

## 4. Cadastro e requisitos do entregador
- Cadastro pelo **app "Bee Delivery para Entregadores"** ou pelo **site**.
- **Requisitos:** veículo próprio **ou em nome de terceiro** + **CNH** (moto/carro). **Bike:** só documento de identidade (RG).
- ⚠️ **Nenhuma menção pública a verificação de antecedentes criminais** (nem no fluxo de cadastro nem nas FAQs encontradas). Exigem documento e veículo — **não vendem "entregador auditado".**
- → **Confirma a brecha:** assim como o TôNoLucro, a Bee credencia por documento/veículo, não por ficha limpa checada. É exatamente o espaço do APPDELYVERY.

## 5. Apps (lojas)
- **Bee Delivery para Entregadores** — `br.com.beedelivery` (Google Play).
- **Bee Delivery - Para empresas** — `br.com.beedelivery.beecentral` (Google Play) → tem **app dedicado pro lojista**, não só web.
- Ou seja: arquitetura de **dois apps** (entregador + empresa) + painel/franqueado. Já operam mobile de verdade — não é só web.

## 6. Sistema técnico (recon da home — FATO via curl)
- **Server:** `cloudflare` (CDN + WAF na frente; é o que devolve 403 a bots — WebFetch barrado, curl com user-agent de browser passou).
- **Backend:** **Laravel / PHP** — inferência forte pelos cookies `XSRF-TOKEN` e `bee_session` no formato `{"iv","value","mac","tag"}` base64, que é a assinatura de cookie criptografado padrão do Laravel. (`Cache-Control: no-cache, private`, `cf-cache-status: DYNAMIC`.)
- **Front da home:** Google Fonts (`fonts.googleapis`), **Google Tag Manager** (marketing/analytics), libs via **`cdn.jsdelivr.net`**. A **home NÃO carrega Google Maps** — é página de marketing.
- **Mapa/GPS:** o rastreio ao vivo está na **área logada** (app do lojista / página de acompanhamento), não exposto na home, então a tech do mapa não foi capturada por fora. Mas as descrições do produto confirmam que **existe rastreio GPS em tempo real**.

## 6.1 Recon do app do entregador (Google Play — 02/06/2026)
- **1 milhão+ downloads · 150 mil avaliações · nota 4,4.** Atualizado em **28/05/2026** (app vivo, mantido). **Não é player pequeno** — é app nacional consolidado.
- Política de privacidade hospedada em **`api.beedelivery.com.br`** → confirma arquitetura **app → API dedicada** (consistente com backend Laravel).
- **Segurança dos dados (Play):** coleta **Localização** + informações pessoais (+2 tipos); criptografado em trânsito; não compartilha com terceiros. Confirma uso de **GPS**.
- Telas promovidas: ganhos/faturamento, moto/carro/bike, **mapa com zonas de demanda (heatmap tipo Uber)**, painel de desempenho. Mobile maduro.
- **Dores dos entregadores (reviews recentes) — onde a Bee falha e o APPDELYVERY pode ganhar o LADO DA OFERTA:**
  - **Split opaco:** *"pega entrega de R$10 e no comprovante vê que o app ficou com R$6 a mais"* — o entregador não enxerga a divisão. → nosso **split transparente 80/20 visível** ataca direto.
  - **Geofence rígido trava a baixa:** *"o local não bate com o GPS e o app não deixa dar baixa ('você não está no local')"* — entregador tem que se deslocar só pra registrar. → nosso registro de coleta/entrega precisa de **tolerância de raio + override manual**, senão repete a dor.
  - **SLA punitivo:** *"punição se não chegar em 10 min — pouco no trânsito"*. → SLA humano, sem punir por trânsito.
  - **Não escutam o entregador:** *"a empresa não analisa os comentários dos motoboys"*.
  - Ponto forte deles a respeitar: **liquidez** (*"sempre surge pedido"*) — o lado da oferta está abastecido. Tirar entregador da Bee exige oferecer algo melhor, não igual.

## 7. FATO × INFERÊNCIA
- **FATO:** origem Mossoró-RN 2018; modelo franquia (+128 franquias); em Palmas desde 09/2020; sob demanda multi-veículo; 2 apps na Play (entregador + empresas); cobra por distância; Cloudflare na frente; cookies de sessão Laravel; home com GTM + Google Fonts + jsDelivr, sem Google Maps; nenhuma menção pública a antecedentes.
- **INFERÊNCIA:** backend Laravel/PHP (forte, pelos cookies); mapa ao vivo provavelmente Google Maps ou Leaflet na área logada (não confirmado); take rate do entregador (não confirmado).

## 8. O que isso ensina pro APPDELYVERY
1. **O "mapa ao vivo" deixou de ser diferencial em Palmas.** A Bee já entrega GPS em tempo real. Não vender isso como exclusividade (revisar o discurso do RECON-CLIQUERETIRE). O mapa agora é **paridade**, não vantagem.
2. **O diferencial real e único que sobra: verificação de antecedentes + B2B de encomenda de valor.** Nem Bee nem TôNoLucro auditam o entregador. Para empresa que manda documento/peça/produto de valor, "quem carrega minha encomenda tem ficha checada" é a única bandeira que nenhum dos dois levanta. **É o posicionamento, não acessório.**
3. **λ.unicidade:** o dossiê não tinha a Bee mapeada. Agora são **3 players** estudados em Palmas (TôNoLucro líder local, Bee franquia nacional, CliqueRetire logística/locker). Nunca cravar "primeiro/único app de entrega em Palmas" — é falso. O recorte defensável é "**B2B + entregador verificado por antecedentes + regional**".
4. **Franquia validada 2x em Palmas** (TôNoLucro e Bee) → reforça que cidade média dá lucro e que **franquia é caminho de monetização** futuro pro parceiro (alinha com o modelo sócio/operador do MODELO-OPERACAO-E-DINHEIRO).
5. **Mobile-first não é aposta — é o piso.** Os dois concorrentes já têm app de entregador E de empresa nas lojas. Confirma a decisão de cravar o **app nativo (Expo)** — chegar com PWA seria chegar atrás.
6. **A brecha não é só antecedentes — é tratar o entregador melhor.** As reviews da Bee (1M+ downloads, mas reclamações reais) expõem split opaco, geofence que trava a baixa e SLA de 10 min punitivo. Captar bons entregadores é metade do marketplace (galinha-e-ovo). O APPDELYVERY pode ganhar o lado da oferta com **split transparente, baixa por raio com override e SLA humano** — custo zero, é só não repetir o erro deles. Mas respeitar que a liquidez deles já é forte: atrair exige oferecer melhor, não igual.

## Fontes
- Chegada a Palmas (set/2020): [Surgiu](https://surgiu.com.br/2020/09/14/palmas-tocantins-ganha-novo-servico-de-entregas-com-a-bee-delivery/) · [Sou de Palmas](https://soudepalmas.com.br/geral/cotidiano-em-destaque/palmas-ganha-novo-servico-de-entregas-com-a-bee-delivery-saiba-mais) · [STG News](https://stgnews.com.br/empresa-bee-delivery-chega-a-palmas/)
- Origem/fundação/franquia: [Bee 5 anos](https://blog.bee.com.br/bee-delivery-ha-5-anos-revolucionando-a-forma-de-fazer-delivery-no-brasil/) · [55content](https://55content.com.br/negocios/bee-delivery) · [Central do Franqueado](https://centraldofranqueado.com.br/franquias/bee-delivery/)
- Cadastro/requisitos entregador: [FAQ Entregadores](https://blog.bee.com.br/faq-entregadores-duvidas-frequentes/) · [Como se cadastrar](https://blog.bee.com.br/como-se-cadastrar-na-bee-delivery/)
- Apps: [Entregadores (br.com.beedelivery)](https://play.google.com/store/apps/details?id=br.com.beedelivery) · [Para empresas (beecentral)](https://play.google.com/store/apps/details?id=br.com.beedelivery.beecentral)
- Rastreio em tempo real / cidades: [Empresa Motoboy SP review](https://empresamotoboysp.com.br/aplicativos/reviews-de-apps/bee-delivery-quais-cidades-atendem/)
- Stack: recon próprio via curl (headers Cloudflare + cookies Laravel) em 02/06/2026.
</content>
</invoke>
