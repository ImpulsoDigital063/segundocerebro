# Blueprint do Build — APPDELYVERY (Next.js)

> Documento-mestre. Quando for criar o sistema de verdade, **comece por aqui**. Tudo que foi decidido está registrado nos docs irmãos. Nada de redescobrir.

---

## 0. Em uma frase
App de **entrega de encomendas B2B sob demanda** em Palmas-TO, com **entregador verificado por antecedentes** (o diferencial), rastreamento ao vivo no mapa, e split de pagamento automático.

## 1. Stack definitiva
| Camada | Tecnologia | Decidido em |
|---|---|---|
| Frontend/Backend | **Next.js (App Router) + TypeScript + Tailwind** | padrão Impulso |
| App entregador | PWA mobile-first → nativo Expo (fase 2, se GPS background exigir) | SISTEMA-GPS.md |
| Banco/Auth/Realtime/Storage | **Supabase (Postgres + PostGIS)** | SISTEMA-GPS.md |
| Mapa | **Mapbox GL JS** (token conta `appdelivery`) | INTEGRACAO-MAPBOX.md |
| Rota/ETA/Geocoding | **Mapbox Directions/Geocoding** | INTEGRACAO-MAPBOX.md |
| Matching | **PostGIS** (`find_entregadores_proximos`) | 02-BANCO-DADOS.md |
| Pagamento/split | **Asaas** (subconta por entregador) | FLUXO-COMUNICACAO.md |
| Antecedentes | **FlagCheck** (~R$3,33/CPF) | DOSSIE §3 |
| CNH/CRLV | **Infosimples** (Senatran) | DOSSIE §3 |
| Notificação | Web Push (MVP) / FCM (nativo) | — |
| Cliente final | SMS/WhatsApp + link `/rastreio/[token]` | FLUXO-COMUNICACAO.md |

## 2. Estrutura de pastas (Next.js)
```
appdelyvery/
├─ app/
│  ├─ (auth)/login, cadastro
│  ├─ negocio/        (dashboard, novo-pedido, pedido/[id], historico, carteira)
│  ├─ entregador/     (cadastro, verificacao, corrida/[id])
│  ├─ admin/          (entregadores, aprovacoes, entregas, financeiro)
│  ├─ rastreio/[token]/   ← público, cliente final (sem auth)
│  └─ api/            (webhooks/asaas, rota)
├─ components/        (MapaAoVivo, CalculadoraPreco, CardEntregadorVerificado,
│                      TimelineStatus, OfertaCorrida, UploadDocumento,
│                      ChecklistVerificacao, FotoComprovante, AssinaturaCanvas, Icons)
├─ lib/               (supabase client, mapbox, asaas, flagcheck, infosimples, precos)
├─ actions/           (server actions: criarPedido, aceitarCorrida, ...)
└─ supabase/migrations/  (v1_schema.sql, v2_rls.sql, ...)
```

## 3. Contas a criar (quando iniciar o build)
| Conta | Para | Custo inicial |
|---|---|---|
| Supabase (projeto NOVO, isolado) | banco/auth/realtime | free → Pro US$25 |
| Vercel (projeto comercial = **Pro**) | hospedagem | US$20/mês |
| Mapbox | mapa/rota | ✅ já criada (`appdelivery`) |
| Asaas | pagamento/split | % por transação |
| FlagCheck | antecedentes | R$3,33/consulta |
| Infosimples | CNH/CRLV | franquia R$100/mês |
| GitHub (repo próprio) | versionamento | free |
> Decisão atual (30/05): **NÃO usar as contas logadas (systempalace/Impulso)** pra não misturar. Criar contas próprias do APPDELYVERY no início do build. Migração de protótipo→produção é limpa porque tudo está especificado aqui.

## 4. Ordem de construção (fases)
- **Fase 0 — Spike (de-risk):** provar GPS ao vivo (Geolocation→Realtime→Mapbox) + matching PostGIS. Já validado no protótipo que a rota/mapa funcionam.
- **Fase 1 — MVP:**
  1. Migrations (02-BANCO-DADOS) + auth + papéis.
  2. Cadastro estabelecimento + cadastro entregador + **verificação (FlagCheck+Infosimples)** + aprovação com PIN.
  3. Criar pedido + preço (Directions) + matching + oferta/aceite.
  4. Rastreio ao vivo + máquina de estados + foto/assinatura.
  5. Tela pública do cliente final (`/rastreio/[token]`) + SMS.
  6. Pagamento: carteira pré-paga + repasse (split Asaas na 1.5).
  7. Painel admin.
- **Fase 2:** app nativo (GPS background), número mascarado, COD/maquininha, multi-parada, avaliações.
- **Fase 3:** expansão regional (modelo franquia), seguro, assinatura B2B.

## 5. Regras duras (cravadas, valem no build)
- **Zero emoji — tudo SVG** (regra global Impulso).
- **Read-after-write** em todo write crítico (pedido, pagamento, aprovação) — UI verde não é prova.
- **Status só avança com evidência** (foto/assinatura).
- **Não gravar cada ping de GPS** no banco — posição ao vivo via Realtime Broadcast; só amostra em `rastreios`.
- **RLS sem subquery na própria tabela** (usar função SECURITY DEFINER) — evita recursão.
- **Dado de antecedente é sensível (LGPD)** — só admin, nunca exposto ao negócio nem em URL/print.
- **Token secreto nunca no client**; token público Mapbox restrito por URL.
- **Mobile e desktop**: mesmo componente, responsivo (tri-modal), nunca arquivo separado.
- **Migration antes do push**; rodar build local (`tsc --noEmit`) antes de deploy.

## 6. Mapa dos documentos (tudo está registrado)
| Doc | O quê |
|---|---|
| `INDEX.md` | porta de entrada do projeto |
| `DOSSIE-RECONHECIMENTO.md` | estratégia, mercado, jurídico, perguntas |
| `ESTUDO-TONOLUCRO.md` | benchmark do concorrente |
| `ESTUDO-CONSTRUCAO.md` | matriz de capacidade, MVP, roadmap |
| `SISTEMA-GPS.md` | as 5 camadas do GPS |
| `INTEGRACAO-MAPBOX.md` | integração Mapbox |
| `FLUXO-COMUNICACAO.md` | comunicação 4 atores + pagamento/split |
| `RECON-CLIQUERETIRE.md` | tech do concorrente (eles não têm GPS ao vivo) |
| `APOSTILA-APP-ENTREGAS.pdf` | apostila completa (impressa) |
| `build-spec/02-BANCO-DADOS.md` | schema SQL completo |
| `build-spec/03-BACKEND-API.md` | server actions + integrações + env |
| `build-spec/04-FRONTEND.md` | rotas, telas, componentes |
| `prototipo/index.html` | front-end navegável (vira a base das telas) |

## 7. Definição de "pronto pra começar o build"
- [x] Estratégia e diferencial cravados
- [x] Stack escolhida e justificada
- [x] Schema do banco escrito (SQL)
- [x] Contrato de back (server actions + integrações + env)
- [x] Front desenhado e validado (protótipo)
- [x] Fluxo de comunicação + pagamento mapeado
- [ ] Tela do cliente final no protótipo (em andamento)
- [ ] "Sim" do investidor + contas criadas → inicia Fase 1
