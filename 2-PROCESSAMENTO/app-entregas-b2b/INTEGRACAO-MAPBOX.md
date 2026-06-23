# Integração com Mapbox — guia prático (APPDELYVERY)

> Decisão cravada em 30/05/2026: usar **Mapbox no início**. Trocar por MapLibre+OSRM só se a escala apertar (a API é compatível, troca sem reescrever).
> Este guia: o que criar, o que integrar, e o código.

---

## 1. O que é a integração (3 serviços, não 1)

| Serviço Mapbox | Pra quê no app | Free/mês |
|---|---|---|
| **Mapbox GL JS** | Desenhar o mapa + o motoboy andando | 50.000 carregamentos |
| **Directions API** | Traçar a rota real pelas ruas + calcular o ETA | 100.000 requisições |
| **Geocoding API** | Endereço digitado → coordenada (lat/lng) | 100.000 requisições |

> Matrix API (distância de vários entregadores até a coleta) é opcional — no nosso caso o **PostGIS** já resolve o matching por proximidade dentro do banco. Mapbox entra só pra rota/mapa/geocoding.

**No volume de Palmas/MVP, isso tudo cabe no free tier — custo ≈ R$ 0.**

---

## 2. O ÚNICO passo que depende de você: conta + token

Eu não consigo criar a conta (precisa do seu e-mail e confirmação). É rápido:

1. Acesse **mapbox.com** → **Sign up** (grátis). Pode pedir cartão só pra validar a conta — **não cobra dentro do free tier**.
2. No painel (**Account → Tokens**) você verá o **Default public token** (começa com `pk.`).
3. Crie **dois tokens** (boa prática de segurança):
   - **Público (`pk.`)** — vai no app do cliente/entregador (mapa). **Restrinja por URL** (só o domínio do app) em "URL restrictions".
   - **Secreto (`sk.`)** — fica só no servidor (chamadas de Directions/Geocoding). Nunca vai pro navegador.
4. **Não cole o token aqui no chat.** Salve num arquivo `.env` local (te mostro abaixo) e eu referencio pelo nome da variável.

```
# .env.local  (NUNCA versionar — entra no .gitignore)
NEXT_PUBLIC_MAPBOX_TOKEN=pk.seu_token_publico_aqui
MAPBOX_SECRET_TOKEN=MAPBOX_SECRET_REDACTED
```

---

## 3. Código — como entra na stack (Next.js + Supabase)

### 3.1 Mapa (client) — trocar MapLibre por Mapbox GL
```html
<!-- CDN -->
<link href="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.7.0/mapbox-gl.js"></script>
```
```js
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // pk.
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',  // ou navigation-day-v1
  center: [-48.3336, -10.1844],                  // Palmas
  zoom: 13.2
});
```
> A API do mapbox-gl é quase idêntica à do maplibre-gl que o protótipo já usa (`new Map`, `Marker`, `addSource`, `addLayer`). A migração é trocar o import e setar o token.

### 3.2 Rota + ETA reais (server — token secreto)
Em vez da linha reta do protótipo, a Directions API devolve o caminho pelas ruas + tempo:
```js
// app/api/rota/route.ts  (Next.js Route Handler — roda no servidor)
export async function POST(req) {
  const { coleta, entrega } = await req.json(); // [lng,lat] cada
  const coords = `${coleta[0]},${coleta[1]};${entrega[0]},${entrega[1]}`;
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coords}`
    + `?geometries=geojson&overview=full&access_token=${process.env.MAPBOX_SECRET_TOKEN}`;
  const r = await fetch(url);
  const d = await r.json();
  const rota = d.routes[0];
  return Response.json({
    geometry: rota.geometry,              // LineString p/ desenhar no mapa
    duracaoMin: Math.round(rota.duration/60),
    distanciaKm: +(rota.distance/1000).toFixed(1)
  });
}
```
> Mapbox não tem perfil "moto" — usa-se `driving` (ou `driving-traffic` p/ ETA com trânsito). Para moto em cidade, `driving` é uma boa aproximação.

### 3.3 Endereço → coordenada (Geocoding)
```js
// quando o negócio digita o endereço de coleta/entrega
const q = encodeURIComponent("Quadra 104 Norte, Palmas TO");
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${q}.json`
  + `?country=BR&proximity=-48.3336,-10.1844&limit=1`
  + `&access_token=${process.env.MAPBOX_SECRET_TOKEN}`;
const { features } = await (await fetch(url)).json();
const [lng, lat] = features[0].center;   // coordenada do endereço
```

### 3.4 Posição do entregador ao vivo (Mapbox só RENDERIZA)
**Importante:** o Mapbox **não** transmite a posição do entregador. Quem faz isso é o **Supabase Realtime**. O fluxo:
```
GPS do celular (navigator.geolocation)
   → entregador publica [lng,lat] no canal Supabase Realtime (Broadcast)
   → app do negócio recebe a coordenada
   → marker.setLngLat([lng,lat])  ← Mapbox só move o pino
```
Ou seja: **Mapbox = mapa + rota + geocoding. Supabase = transporte da posição ao vivo. PostGIS = matching.** Cada um no seu papel.

---

## 4. Segurança e custo (guardrails)

- **Token público (`pk.`)**: restringir por URL no painel Mapbox. Mesmo público, sem restrição alguém pode usar e estourar sua cota.
- **Token secreto (`sk.`)**: só no servidor, em `.env`, fora do Git.
- **Alerta de uso**: no painel Mapbox dá pra configurar limite/alerta de uso pra não tomar susto na fatura quando crescer.
- **Free tier**: 50k mapa + 100k rotas + 100k geocoding por mês. Em Palmas no início, sobra.

---

## 5. Recomendação sobre o PROTÓTIPO da reunião

O protótipo hoje usa tiles Carto **sem chave** — e isso é proposital: **não depende de token, não falha na frente do investidor.** Duas opções:

- **(A) Manter o protótipo como está** pra reunião (bulletproof) e configurar o Mapbox no **build real**. ← recomendado.
- **(B) Migrar o protótipo pra Mapbox agora** (com rota real pelas ruas e mapa Mapbox). Aí eu preciso do seu token público no `.env` e troco o código — leva pouco. Bom se você quer mostrar a rota seguindo as ruas de verdade na demo.

Qualquer uma das duas, a migração é pequena porque o protótipo já usa MapLibre (mesma API do Mapbox).

---

## Resumo em uma linha
**Você cria a conta Mapbox e gera 2 tokens (público restrito + secreto).** Eu ligo: mapa (GL JS), rota+ETA (Directions, no servidor), endereço→coordenada (Geocoding). A posição ao vivo continua pelo Supabase Realtime; o matching pelo PostGIS. Custo ≈ R$ 0 no MVP.
