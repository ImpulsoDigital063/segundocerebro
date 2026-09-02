# STATUS — Campanha LocaJV · Rodada 3 (setembro/2026)

**Última atualização:** 02/09/2026 15:04 (lido da API do Meta, não de UI)
**Estado:** NO AR desde 01/09/2026 21:40

---

## IDs

| O quê | ID |
|---|---|
| Conta de anúncios | `2229418324525147` ("Loca JV Motos") |
| Portfólio / Business | `1288325061024024` |
| Página Facebook | `1288318884357975` |
| Business ID Impulso (parceiro) | `1866084920737015` |
| Campanha | `120252656295610577` — LOCAJV \| LEADS-WPP \| AGO26 |
| Conjunto | `120252657136910577` — Goiania e mult região-Homens 18-45 - Whatsapp |
| Ad 01-se-quebrar | `120252657136900577` |
| Ad 02-plano-semanal | `120252659453140577` |
| Ad 03-plano-aquisicao | `120252660053990577` |
| Ad 04-frota | `120252673809520577` |

WhatsApp da campanha: (62) 99659-9081

---

## Configuração atual (conferida na API)

- Campanha ACTIVE / effective ACTIVE · objetivo `OUTCOME_LEADS` · CBO **R$50/dia** · lance "Highest volume"
- Conjunto ACTIVE / effective ACTIVE · `optimization_goal: CONVERSATIONS`
- Idade **18-45** (`age_min:18`, `age_max:45`) — alterado 24/08
- Gênero: homens (`genders:[1]`)
- **Expansão Advantage DESLIGADA** — `targeting_automation.individual_setting: {age:0, gender:0, geo:0}`.
  Sem isso o 18-45 não segura, o Meta entrega fora da faixa.
- Geo intacto: Goiânia key `254063` raio 17km + 4 custom_locations (Goianira, Nerópolis, Senador Canedo, Trindade) · `location_types: frequently_in, home, recent`
- Posicionamento: **automático, não mexido**. Instagram Reels (R$3,94, o pior) AINDA ESTÁ LIGADO.

### Status dos anúncios
| Anúncio | status | Observação |
|---|---|---|
| 04-frota | ACTIVE | único que comprovadamente gerou locação |
| 03-plano-aquisicao | ACTIVE | está comendo toda a verba (ver alerta) |
| 01-se-quebrar | ACTIVE | 3 conversas no histórico inteiro, nunca testado |
| 02-plano-semanal | **PAUSED** | pausado 24/08 — era 71,4% da verba a R$3,26 |

---

## 🔴 ALERTA ABERTO — o CBO repetiu o erro da rodada 2

Gasto de hoje (02/09, até 15:04):

| Anúncio | Gasto | Conversas | Custo |
|---|---|---|---|
| 03-plano-aquisicao | **R$47,02** | 22 | R$2,14 |
| 04-frota | **R$0,00** | 0 | — |
| 01-se-quebrar | R$0,00 | 0 | — |

O CBO jogou 100% da verba no **03-plano-aquisicao** e deixou o 04-frota com ZERO
outra vez. É o mesmo padrão da rodada 2, só que trocando o vilão: antes era o
02-plano-semanal levando 71%, agora é o 03.

O 03-plano-aquisicao é justamente o que o Eduardo suspeitou no briefing de atrair
quem quer COMPRAR moto sem ter dinheiro — o pior lead possível para locação semanal.

**Decisão pendente:** pausar o 03-plano-aquisicao para forçar a verba no 04-frota.

---

## Financeiro

- **Limite de gasto da conta: R$350** · redefinido manualmente em 24/08 · **renova sozinho todo dia 1º**
- Próxima renovação automática: **01/10/2026**
- Já consumido de setembro: R$5,96 (01/09) + R$47,02 (02/09) = **R$52,98**
- Restam ~R$297 dos R$350
- Sem `stop_time` na campanha (decisão consciente: o limite da conta já é o teto)
- ⚠️ **Cartão cadastrado ainda é o Nubank pessoal do Eduardo (final 3473).**
  O retroativo de R$342,17 foi pago em 24/08 por ele. Trocar para o cartão do cliente.

---

## Histórico

| Rodada | Período | Mídia | Conversas | Custo | Locações |
|---|---|---|---|---|---|
| 1 | 10/08 | R$55,90 | 45 | R$1,24 | **6** |
| 2 | 19–22/08 | R$286,27 | 91 | R$3,15 | **0** |
| 3 | 01/09– | em curso | — | — | a medir |

Por anúncio, período 10–24/08 (total 136 conversas / R$342,17):

| Anúncio | Conversas | Custo | Gasto | % verba |
|---|---|---|---|---|
| 02-plano-semanal | 75 | R$3,26 | R$244,24 | 71,4% |
| 04-frota | 38 | **R$1,35** | R$51,24 | 15,0% |
| 03-plano-aquisicao | 20 | R$1,98 | R$39,58 | 11,6% |
| 01-se-quebrar | 3 | R$2,37 | R$7,11 | 2,1% |

Paradas: 11–18/08 (verba), 23–24/08 (**cartão recusado**, conta UNSETTLED),
25–31/08 (pausada de propósito).

Por horário (19–21/08): 00h-07h R$2,10 · 19h-23h R$2,71 · 08h-18h R$3,51 (10h-15h R$4,17)
Por posicionamento: IG Stories R$2,66 · FB Reels R$2,77 · Feed R$3,15 · **IG Reels R$3,94**
Por plataforma: Facebook R$2,69 (CTR 4,74%) · Instagram R$3,31 (CTR 2,09%)

---

## Criativo novo pronto, NÃO subido — "05-frota-caucao"

Reaproveita a arte do 04-frota. Caução vai no TEXTO, não na arte.
Falta puxar o `image_hash` do criativo do 04-frota, criar creative novo (creatives
são imutáveis, não dá pra editar) e criar o ad.

**Texto principal:**

Moto pronta pra retirar hoje, em Goiânia.

Plano semanal a partir de R$295, com seguro e manutenção inclusos. Km livre.

Caução a partir de R$500. É ele que garante a moto na sua mão — quem tem o caução, sai rodando hoje.

Frota de 49 motos. Honda START 160, FAN 160 e TITAN 160.

Chama no WhatsApp. Quem responde sou eu mesmo.

**Título:** Alugue sua moto hoje em Goiânia
**Descrição:** Caução a partir de R$500

**Risco: BAIXO** (tabela meta-ads-risco). Sem linguagem de ganho, sem Pix, sem
promessa de resultado. Valores são preço de produto, não promessa de renda.
Único ponto de atenção: público frio.

⚠️ Confirmar com o cliente se **IPVA/documentação** está mesmo incluso antes de
citar — os dados do negócio só confirmam seguro, manutenção e km livre.

---

## Dados do negócio (para criativo)

- Semana: R$295 anunciado (contratos reais R$260–R$370, mediana R$295)
- Caução plano semanal: R$500–R$600 · Caução plano aquisição: R$900–R$1.000
- Entrada real do plano semanal: ~R$795 (caução + 1ª semana)
- Incluso: seguro, manutenção, km livre
- Promo: contrato 4+ meses → 1ª semana R$199,99
- Frota: 49 motos · Honda START 160, FAN 160, TITAN 160

## Política Meta (já verificada)
NÃO usar: "ganhe R$X por dia" · "sem consulta ao SPC/Serasa" · "vaga" ou "trabalhe
com a gente" · prêmio condicionado a seguir o Instagram.
PODE usar: "Não compre moto. Alugue e rode tranquilo" · "Motos prontas para
trabalhar" · mencionar valor de caução.

---

## Pendências

1. 🔴 **Pausar o 03-plano-aquisicao?** — está levando 100% da verba, 04-frota com zero
2. 🔴 **Quantas motos estão livres?** — perguntado 5x, nunca respondido. Briefing veio
   corrompido ("47 das 49 motos sponíveis" — disponíveis ou indisponíveis?).
   Regra do próprio Eduardo: frota cheia = NÃO subir campanha.
3. Subir o criativo 05-frota-caucao
4. Tirar Instagram Reels do posicionamento
5. Trocar o cartão para o do cliente
6. **Botão do Jay** (marcar se o lead converteu) — conta tem ZERO datasets e ZERO
   custom conversions, nada montado. Bloqueio: saber se o Jay atende no app do
   WhatsApp Business (não dá pra fazer) ou Cloud API (dá tudo, tem `ctwa_clid`).
   ⚠️ Matemática que mata a versão ingênua: Meta precisa de ~50 eventos/semana para
   sair do aprendizado. Com R$350/semana saem ~12 locações. Otimizar direto por
   "locação" NÃO funciona. Otimizar por evento intermediário ("tem o caução") sim.

## Como medir a rodada 3
NÃO é custo por conversa — é **quantas conversas viram locação**. O custo por conversa
vai subir com criativo qualificado e isso é o objetivo. Pedir ao Jay para anotar
quantos dos que chamarem essa semana fecham.
