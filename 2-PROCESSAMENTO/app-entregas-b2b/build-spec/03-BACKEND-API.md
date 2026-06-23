# Backend — Server Actions / API + Integrações (APPDELYVERY)

> O que o servidor precisa fazer. Em Next.js: Server Actions (mutações) + Route Handlers (`/api/...` para webhooks e chamadas com token secreto). Tokens secretos NUNCA no client.

---

## 1. Server Actions / endpoints (contrato)

| Ação | Entrada | O que faz | Saída |
|---|---|---|---|
| `criarPedido` | coleta, entrega, cliente_final, descrição, valor, veículo | Geocoding (se vier texto) → Directions (rota+ETA, token secreto) → calcula preço → grava `pedidos` (status `buscando`) → dispara matching | pedido criado |
| `calcularPreco` | distância_km, veículo | Aplica tabela (base+km, mínimo, split) | total, entregador, plataforma |
| `buscarEntregadores` | pedido_id | RPC `find_entregadores_proximos` (PostGIS) | lista ordenada |
| `ofertarCorrida` | pedido_id, entregador_id | Cria `oferta` + push ao entregador + timeout (30s) | — |
| `aceitarCorrida` | oferta_id | Marca oferta `aceita`, pedido `aceito`, seta `entregador_id`, notifica negócio | — |
| `recusarCorrida` | oferta_id | Marca `recusada` → oferta ao próximo | — |
| `atualizarPosicao` | entregador_id, lat, lng | Atualiza `entregadores.posicao` + **Broadcast** no canal `pedido:{id}` (+ amostra em `rastreios` a cada ~20s) | — |
| `registrarColeta` | pedido_id, foto | Grava `comprovantes` (coleta) + status `coletado` → **dispara SMS/link ao cliente final** | — |
| `registrarEntrega` | pedido_id, foto, assinatura | Grava `comprovantes` (entrega) + status `entregue` → dispara cobrança/split | — |
| `iniciarVerificacao` | entregador_id | Chama FlagCheck (antecedentes) + Infosimples (CNH/CRLV) com tokens secretos → grava `verificacoes` | resultados |
| `aprovarEntregador` | entregador_id, pin | Valida PIN supervisor (pgcrypto) → status `aprovado` | — |
| `criarCobranca` | pedido_id | Asaas: cobrança + split (subconta do entregador) | link/QR pix |
| `enviarLinkRastreio` | pedido_id | SMS/WhatsApp ao cliente final com `/rastreio/{token}` | — |
| `getRastreioPublico` | tracking_token | (SECURITY DEFINER) devolve status + posição p/ a página pública | dados mínimos |

## 2. Route Handlers (`/api`)
- `POST /api/webhooks/asaas` — recebe confirmação de pagamento/repasse → atualiza `pagamentos`/`pedidos`.
- `POST /api/rota` — Directions (token secreto) → geometria + ETA (se preferir não usar server action).
- `GET  /api/rastreio/[token]` — alternativa pública ao server action.

## 3. Integrações (onde cada uma entra)

| Serviço | Uso | Token | Onde |
|---|---|---|---|
| **Mapbox Directions/Geocoding** | rota, ETA, endereço→coord | secreto | servidor (`criarPedido`, `/api/rota`) |
| **Mapbox GL JS** | mapa + marcadores | público (restrito por URL) | client |
| **Supabase Realtime** | posição ao vivo (Broadcast), status (Changes) | anon/rls | client + server |
| **Asaas** | cobrança + split + subconta entregador | secreto | servidor + webhook |
| **FlagCheck** | antecedentes por CPF (~R$3,33) | secreto | servidor (`iniciarVerificacao`) |
| **Infosimples** | CNH (Senatran) + CRLV | secreto | servidor (`iniciarVerificacao`) |
| **Push** | nova corrida, status | VAPID/FCM | client (subscribe) + server (send) |
| **SMS/WhatsApp** | link de rastreio ao cliente final | secreto | servidor (`enviarLinkRastreio`) |
| **Número mascarado** (fase 2) | ligação entregador↔cliente | secreto | servidor (Twilio/Zenvia) |

## 4. Máquina de estados do pedido (a "regra de ouro")
```
rascunho → buscando → aceito → a_caminho_coleta
        → coletado        (EXIGE foto na coleta)
        → a_caminho_entrega
        → entregue         (EXIGE foto + assinatura)
        → [pagamento liquida + split]
cancelado: pode ocorrer até 'coletado' (regras de cobrança a definir)
```
> Status só avança com **evidência** (foto/assinatura), nunca com clique solto. Read-after-write em todo write crítico.

## 5. Variáveis de ambiente (.env)
```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=          # server only
# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk....     # público, restrito por URL
MAPBOX_SECRET_TOKEN=sk....          # server (directions/geocoding)
# Asaas
ASAAS_API_KEY=                      # server
ASAAS_WEBHOOK_TOKEN=
# Verificação
FLAGCHECK_API_KEY=
INFOSIMPLES_TOKEN=
# Notificação
SMS_PROVIDER_KEY=                   # Zenvia/Twilio
VAPID_PUBLIC_KEY= / VAPID_PRIVATE_KEY=
```
