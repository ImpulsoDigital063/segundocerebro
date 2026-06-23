# Sistema GPS do APPDELYVERY — qual usar (decisão técnica)

> Pesquisa de 29/05/2026. Decisão-grade: qual stack de geolocalização usar na operação.
> Regra de ouro: **"sistema GPS" não é UMA ferramenta — são 5 camadas que conversam.** Errar a divisão = pagar caro ou travar. Abaixo, cada camada, as opções e a escolha.

---

## As 5 camadas do "sistema GPS"

| # | Camada | O que faz | Escolha recomendada (MVP) |
|---|---|---|---|
| 1 | **Captura** | Lê a posição do celular do entregador | Geolocation API (PWA) → Expo Location (nativo, fase 2) |
| 2 | **Transporte real-time** | Leva a coordenada do entregador pro negócio/admin ao vivo | **Supabase Realtime (Broadcast)** |
| 3 | **Mapa / visualização** | Desenha o mapa e o ponto andando | **Mapbox GL JS** (escape: MapLibre) |
| 4 | **Rotas / ETA** | Traça a rota e calcula tempo de chegada | **Mapbox Directions** (escape: OSRM) |
| 5 | **Matching geoespacial** | Acha o entregador mais perto da coleta | **PostGIS** (dentro do Supabase) |

**Custo dessa stack em escala de Palmas/MVP: ≈ R$ 0** (cabe nos free tiers + o Supabase que já pagaríamos). Detalhe por camada abaixo.

---

## Camada 1 — Captura da posição (no celular do entregador)
| Opção | Quando | Limite |
|---|---|---|
| **Geolocation API** (`navigator.geolocation.watchPosition`) | MVP, app/PWA aberto durante a corrida | Navegador **suspende o GPS quando a tela apaga** — não rastreia com o celular no bolso |
| **Expo Location + expo-task-manager** (React Native) | Fase 2, app nativo | Rastreia em background COM **foreground service** (notificação fixa no Android) e permissão "Sempre" no iOS. iOS é restritivo; exige development build |

<div>

**Veredito:** no MVP, Geolocation API resolve (o entregador fica com o app aberto na corrida). Para rastreio contínuo com o celular guardado, é **app nativo (Expo)** na fase 2. Modo `CONTINUOUS` dá update de alta frequência (gasta mais bateria — normal pra delivery sob demanda).
</div>

## Camada 2 — Transporte em tempo real (a peça que parece "mágica")
A coordenada precisa sair do celular do entregador e aparecer ao vivo na tela do negócio/admin. Comparação:

| Plataforma | Latência | Nota |
|---|---|---|
| **Supabase Realtime** | **<50ms** (LISTEN/NOTIFY via WebSocket) | **Já é da nossa stack.** Tem Broadcast (pub/sub) e Presence (quem está online). Zero infra nova |
| Firebase Realtime DB | ~80ms | NoSQL — exigiria redesenhar nosso banco relacional. Não compensa |
| Ably / Pusher | baixíssima, enterprise | Pago, "Pusher turbinado". Só faz sentido em escala nacional |

<div>

**Veredito:** **Supabase Realtime** — e usar o **canal Broadcast** pra posição ao vivo (mensagem efêmera pub/sub), **NÃO** gravar cada ping de GPS no Postgres (isso estoura a cota de escrita e não serve pra nada vivo). Persistir no banco só uma amostra periódica + o trajeto final, pra trilha de auditoria. Esse é o pulo do gato que separa quem sabe de quem não sabe.
</div>

## Camada 3 — Mapa / visualização
| Opção | Custo | Nota |
|---|---|---|
| **Mapbox GL JS** | **50.000 carregamentos/mês grátis**, depois US$5/1k | Pronto pra usar, bonito, rápido. 1ª escolha |
| **MapLibre GL** (fork open-source do Mapbox) | **Grátis, sem licença** | Você traz os "tiles" (OpenStreetMap/PMTiles). Mais trabalho de setup, custo zero. **Escape de escala** |
| Google Maps JS | Free tier por SKU (acabou crédito US$200) | Mais caro; entra só se precisar de precisão específica |
| Leaflet + OSM | Grátis | Mais simples/antigo, sem vetor/WebGL |

<div>

**Veredito:** **Mapbox GL JS** no MVP (grátis no nosso volume, menos trabalho). Se a conta Mapbox crescer com a escala, a saída é **MapLibre + tiles próprios** — mesma API (MapLibre é fork do Mapbox), custo zero. Temos a rota de fuga garantida.
</div>

## Camada 4 — Rotas e ETA
| Opção | Custo | Nota |
|---|---|---|
| **Mapbox Directions** | **100.000 req/mês grátis**, depois US$2/1k | 1ª escolha; combina com a camada 3 |
| Google Routes | US$5/1k (e matriz US$5/1k) | Mais caro |
| **OSRM** (self-hosted) | **Grátis, ilimitado** (~US$50/mês de servidor) | Open-source, resposta <1ms. **Escape de escala**: quando o volume explode, hospedar OSRM dá rotas ilimitadas por custo fixo |

<div>

**Veredito:** **Mapbox Directions** no MVP. Se virar volume nacional, **OSRM próprio** trava o custo num servidor fixo em vez de pagar por requisição.
</div>

## Camada 5 — Matching geoespacial (achar quem está perto)
- **PostGIS** — extensão geoespacial do Postgres, **já incluída no Supabase**. Responde "entregadores online num raio de X km da coleta, ordenados por distância" dentro do banco, em milissegundos. Não é serviço externo, não custa à parte.
- Função `ST_DWithin` + `ST_Distance` resolvem o matching (exemplo no ESTUDO-CONSTRUCAO.md §6.3).

<div>

**Veredito:** **PostGIS no Supabase.** Zero ferramenta nova, zero custo extra.
</div>

## Bônus — Geocoding (endereço → coordenada)
Quando o negócio digita um endereço, vira lat/lng. **Mapbox Geocoding** (no mesmo free tier) resolve. Alternativa grátis: **Nominatim (OSM)**.

---

## A stack final recomendada (MVP)

```
CAPTURA      Geolocation API (PWA)            → Expo Location (nativo, fase 2)
TRANSPORTE   Supabase Realtime (Broadcast)    ← já é nossa stack
MAPA         Mapbox GL JS                     → MapLibre (escape de custo)
ROTAS/ETA    Mapbox Directions                → OSRM self-hosted (escape de custo)
MATCHING     PostGIS (no Supabase)            ← já é nossa stack
GEOCODING    Mapbox Geocoding
```

**Por que essa combinação:**
1. **Custo ≈ R$ 0 no MVP** — tudo cabe em free tier ou no que já pagamos (Supabase).
2. **Reaproveita o que dominamos** — Supabase Realtime e PostGIS já são da casa; só somamos o Mapbox.
3. **Tem rota de fuga** — se a escala fizer a conta Mapbox subir, troca-se por MapLibre + OSRM (open-source) sem reescrever, porque a API é compatível. **Margem protegida em qualquer cenário.**
4. **Já nasce à frente do mercado local** — CliqueRetire/TôNoLucro/transportadoras de Palmas param no status; essa stack entrega o ponto andando no mapa.

## O alerta honesto (de novo)
A camada 1 (captura em background) é o único ponto que pode exigir **app nativo** antes do previsto. No MVP em PWA, o GPS funciona com o app aberto durante a corrida — que é o uso real. Se o teste mostrar que precisa rastrear com o celular no bolso, o Expo entra. **É exatamente isso que o spike da Fase 0 valida antes de cravar prazo.**

---

## Fontes
- MapLibre / OpenStreetMap: github.com/maplibre · pkgpulse.com (Mapbox vs Leaflet vs MapLibre 2026) · openfreemap.org
- Real-time: ably.com/compare (Supabase vs Firebase) · github.com/supabase/realtime
- Expo Location background: docs.expo.dev/versions/latest/sdk/location · chafikgharbi.com/expo-location-tracking
- OSRM / rotas: project-osrm.org · zeorouteplanner.com (OSM routing free) · openrouteservice.org
- Mapbox/Google pricing: mapbox.com/pricing · developers.google.com/maps/billing-and-pricing
