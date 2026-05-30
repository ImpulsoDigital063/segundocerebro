# Estudo de Construção — O que precisamos fazer × O que nossa estrutura permite

> Análise técnica e estratégica feita em 29/05/2026. Carta branca do Eduardo.
> Objetivo: mapear, componente a componente, o que esse app exige e o quanto a stack/experiência da Impulso já cobre — pra saber onde estamos fortes, onde é território novo, e quanto trabalho real existe.

---

## 1. Tese central

A maior parte desse app **não é território novo pra Impulso**. A stack (Next.js + Supabase + Vercel) e os padrões já dominados (multi-tenant, painel SaaS, papéis/permissões, financeiro/caixa, mobile-first tri-modal, fluxo de aprovação) cobrem **~70%** do produto.

Os **~30% novos** estão concentrados em quatro peças, e é nelas que mora o risco e o esforço de verdade:
1. **Geolocalização em tempo real** (entregador no mapa).
2. **Matching/dispatch** (achar e oferecer corrida ao entregador certo).
3. **Pagamento com split** (repasse automático descontando comissão).
4. **Integrações de verificação** (antecedentes + CNH + veículo).

O resto é "o que a gente já faz", só com roupa de delivery.

---

## 2. Matriz de capacidade — componente × stack Impulso

Legenda: 🟢 já dominamos / 🟡 temos a base, precisa adaptar / 🔴 território novo (P&D ou integração nova)

| # | Componente | Status | O que já temos | O que falta |
|---|---|---|---|---|
| 1 | **Auth + multi-tenant + papéis** | 🟢 | Palace/AgendaPRO: login, RLS, papéis (gerente/recep/atendente), permissões em `permissions.ts` | Só desenhar os papéis novos: Negócio, Entregador, Admin/Operação |
| 2 | **Painel admin SaaS** | 🟢 | Padrão canônico documentado (PAINEL-PROFISSIONAL.md), Starteq/Palace | Adaptar telas ao domínio entrega |
| 3 | **Cadastro com aprovação + PIN/supervisor** | 🟢 | Palace Supervisor V4 (aprovação, PIN, bloqueio por tentativa) | Reusar pro fluxo "aprovar entregador" |
| 4 | **Financeiro / caixa / comissão** | 🟢 | Starteq (caixa+comissão), Palace (invoices/sales/comissão manicure) | Adaptar pra "ganho do entregador" + take rate |
| 5 | **Mobile-first tri-modal** | 🟢 | Regra cravada mobile<640/tablet/desktop, mesmo componente | Entregador é 100% mobile — aplicar com rigor |
| 6 | **Upload de documento + foto** | 🟢 | Supabase Storage, compressImage com web worker (CSP worker-src já resolvido) | Reusar pra CNH/CRLV/selfie/foto-de-entrega |
| 7 | **PDF + compartilhar WhatsApp** | 🟢 | Web Share API (vantagem documentada vs Salão99) | Reusar pra comprovante de entrega |
| 8 | **Geolocalização em tempo real** | 🔴 | Supabase Realtime existe na stack (usado em outros pontos) | Capturar GPS do entregador em background + transmitir + plotar no mapa. **Peça nova.** |
| 9 | **Mapa + rotas + ETA** | 🔴 | — | Integrar Mapbox **ou** Google Maps (Directions/Distance Matrix). Decisão de custo. |
| 10 | **Matching / dispatch** | 🔴 | — | Algoritmo: achar entregadores online perto da coleta, oferecer, timeout, reofertar. Lógica nova (PostGIS no Supabase ajuda). |
| 11 | **Precificação por fórmula** | 🟡 | Lógica de cálculo financeiro já fazemos | Fórmula km+paradas+espera+retorno (modelo TôNoLucro) — regra de negócio nova mas simples |
| 12 | **Pagamento online + split** | 🔴/🟡 | Já lidamos com invoices/billing, mas não com gateway de split automático | Integrar **Asaas / Pagar.me / Stripe Connect**: cobrar negócio, reter comissão, repassar entregador (precisa conta/subconta por entregador) |
| 13 | **Push notification mobile** | 🟡 | Web push é viável; nunca foi peça central | Implementar push confiável (corrida nova, status) — crítico pro entregador |
| 14 | **Verificação antecedentes** | 🔴 | — | Integrar **FlagCheck** (~R$3,33/CPF) no fluxo de aprovação |
| 15 | **Validação CNH/CRLV** | 🔴 | — | Integrar **Infosimples/Senatran** (CNH no RENACH, situação, categoria) |
| 16 | **Prova de vida / selfie match** | 🔴/🟡 | Upload temos; match facial não | idwall ou similar (anti-laranja). Pode ficar pra fase 2. |
| 17 | **Trilha de auditoria (foto+GPS+assinatura)** | 🟡 | Upload + storage temos; assinatura digital é nova mas simples (canvas) | Montar o registro coleta→trajeto→entrega como prova |
| 18 | **App nativo (loja)** | 🟡 | Fazemos PWA mobile-first | GPS em background pesado pode exigir nativo (React Native/Expo) na fase 2. MVP = PWA. |

**Placar:** 7 verdes, 5 amarelos, 6 vermelhos. Os vermelhos são quase todos **integração de terceiro** (não invenção do zero) — exceto geolocalização realtime + dispatch, que é a engenharia de verdade.

---

## 3. Os 4 pontos de risco técnico (onde o projeto se ganha ou se perde)

### 3.1 GPS em tempo real + dispatch (o coração)
É a peça que, se falhar, mata o produto. Não é "mais uma tela".
- **Captura:** app do entregador manda posição a cada X segundos. Em PWA, GPS em background é limitado (navegador suspende) — funciona com tela ligada/app aberto, mas pra rastreio contínuo de verdade pode pedir nativo.
- **Transporte:** Supabase Realtime (websocket) pra empurrar posição pro negócio e pro admin.
- **Geoespacial:** PostGIS no Postgres do Supabase resolve "entregadores num raio de N km da coleta" com query nativa. Isso é a base do matching.
- **Dispatch:** oferecer ao mais próximo, timeout (ex: 30s), reofertar ao próximo. Estado da corrida bem modelado (pendente→ofertada→aceita→coletada→entregue→fechada).
- **λ.prova-na-fonte aplicada:** "entregue" no app tem que bater com a realidade. Status só muda com evidência (foto/assinatura), não com clique solto.

### 3.2 Pagamento com split
- Cobrar o negócio (Pix/cartão) e repassar ao entregador descontando a comissão **automaticamente** exige gateway que faça split: **Asaas** (mais simples no Brasil, subconta por entregador), Pagar.me, ou Stripe Connect.
- Cada entregador vira uma subconta/recebedor. KYC do gateway some com parte do trabalho de verificação financeira.
- **MVP pode começar mais simples:** cobrar pela plataforma e fazer repasse em lote (semanal), automatizar split depois. Reduz complexidade inicial sem travar o lançamento.

### 3.3 Integrações de verificação (o diferencial pedido)
- **Antecedentes:** FlagCheck por CPF (~R$3,33, ~30s). API REST simples.
- **CNH/veículo:** Infosimples (Senatran/RENACH) — CNH válida, categoria A, não suspensa; CRLV regular.
- Rodadas no **fluxo de aprovação** do entregador (componente 🟢 que já temos do Palace Supervisor).
- **LGPD:** antecedente é dado sensível → consentimento explícito, guardar no admin, nunca expor ao negócio, nunca em URL/print (λ.token-nunca-em-url).

### 3.4 Liquidez dos dois lados (risco de negócio, não técnico)
- Marketplace só funciona com negócios E entregadores ao mesmo tempo (galinha-e-ovo).
- O TôNoLucro resolveu isso com anos + franquia. O cliente precisa de um plano: começar com carteira fechada de negócios conhecidos + um punhado de entregadores fixos, e abrir depois.
- **Isso é pergunta pro cliente (DOSSIE seção 10, item 7), não código.**

---

## 4. Escopo MVP — o mínimo pra rodar em Palmas e provar

Princípio: **não construir a fase 2 antes do MVP rodar com gente real** (λ.não-expandir-speculativo, lição do Palace).

**MVP (o que entra):**
1. Cadastro de Negócio + cadastro de Entregador.
2. **Fluxo de aprovação do entregador com antecedentes + CNH** (o diferencial — não corta).
3. Pedido de entrega: origem, destino(s), descrição, valor declarado.
4. Precificação por fórmula (km + paradas + espera + retorno).
5. Matching simples (ofertar ao entregador online mais próximo) + aceite.
6. Rastreio em tempo real no mapa + status.
7. Trilha: foto na coleta + foto/assinatura na entrega.
8. Pagamento: começar Pix + repasse em lote (split automático na fase 1.5).
9. Painel admin: aprovar cadastro, ver antecedente, acompanhar entregas ao vivo, caixa/comissão.

**Fase 2+ (só se o uso pedir):**
- Split automático em tempo real, app nativo (GPS background), prova de vida facial, multi-parada avançada, agendamento, assinatura B2B, seguro por faixa de valor, intermunicipal pesado, maquininha, expansão de cidade (modelo franquia tipo TôNoLucro).

---

## 5. Stack recomendada (consolidando o que já usamos + o novo)

| Camada | Escolha | Por quê |
|---|---|---|
| Front | **Next.js + TypeScript + Tailwind** | Já é o padrão da casa, tri-modal cravado |
| App entregador | **PWA mobile-first** no MVP | Mais rápido/barato; nativo (Expo) só na fase 2 se GPS background exigir |
| Banco/Auth/Realtime | **Supabase (Postgres + RLS + Realtime + Storage)** | Já dominamos; Realtime cobre rastreio; **PostGIS** cobre geoespacial |
| Mapa/rotas | **Mapbox** (avaliar vs Google Maps) | Mapbox costuma sair mais barato em volume; decidir por custo/precisão |
| Pagamento | **Asaas** (split + subconta + Pix) | Mais simples no Brasil pra marketplace; alternativa Pagar.me/Stripe Connect |
| Antecedentes | **FlagCheck** | Feito pra motoboy, ~R$3,33, pay-per-use |
| CNH/veículo | **Infosimples (Senatran)** | Validação oficial RENACH |
| Push | **Web Push** (MVP) / FCM (nativo fase 2) | — |
| Hospedagem | **Vercel + Supabase** | Padrão da casa |

**Custos recorrentes que são do cliente, não da Impulso** (deixar explícito na proposta): APIs de verificação (~R$5-10/entregador aprovado), mapas (por uso), gateway (% por transação), Supabase/Vercel (planos pagos quando escalar).

---

## 6. Onde estamos FORTES vs FRACOS (resumo honesto)

**Fortes (vantagem real da Impulso):**
- Painel multi-tenant, papéis, permissões, aprovação com PIN — feitos e testados em produção (Palace).
- Financeiro/caixa/comissão — feito (Starteq/Palace).
- Mobile-first tri-modal — regra cravada, não vamos errar mobile.
- Upload/foto/storage/PDF/WhatsApp — feitos.
- Disciplina de migration antes de push, build local antes de deploy, prova-na-fonte — processo maduro que evita quebrar prod.

**Fracos (território novo — exige aprender/integrar/testar de verdade):**
- GPS em tempo real e dispatch — **nunca fizemos**. É o maior risco. Provar isso primeiro num protótipo antes de prometer prazo.
- Split de pagamento automático — integração nova.
- Verificação de antecedentes/CNH — integração nova (mas direta).
- App nativo, se precisar — fora da zona de conforto (hoje PWA).

**Recomendação técnica:** antes de cravar prazo/preço fechado, fazer um **spike de 1 semana** só pra validar GPS realtime + matching com PostGIS + Supabase Realtime. Se isso funcionar liso, o resto é trabalho conhecido. Esse é o "de-risk" do projeto.

---

## 7. Roadmap macro (fases, sem datas até cravar escopo)

- **Fase 0 — Spike técnico (de-risk):** protótipo de rastreio + matching. Decisão Mapbox vs Google. Validar PWA GPS.
- **Fase 1 — MVP:** os 9 itens da seção 4. Rodar com carteira fechada em Palmas.
- **Fase 1.5 — Pagamento maduro:** split automático Asaas.
- **Fase 2 — Escala:** app nativo, prova de vida, multi-parada, push robusto.
- **Fase 3 — Expansão:** novas cidades da região (modelo tipo franquia TôNoLucro), seguro, assinatura B2B.

---

## 8. Precificação do projeto (framework — número só depois do escopo)

- Categoria: **software/SaaS sob medida premium**, não site. Tem GPS realtime, dispatch, split, integrações.
- Modelo Impulso: **entrada 50% + saldo flexível + 1 bônus recorrente**, sem descer o preço-âncora (λ.pricing-5050).
- Formato que faz mais sentido: **MVP fechado + mensalidade de operação/evolução** (produto vivo, não one-shot).
- O spike da Fase 0 pode ser vendido como etapa paga de validação — protege a Impulso de cravar prazo no escuro e o cliente de pagar por algo que não foi de-riscado.

---

## 9. Próximos passos sugeridos (quando o Eduardo acordar)

1. Ler este estudo + ESTUDO-TONOLUCRO + DOSSIE.
2. Levar as 10 perguntas do DOSSIE (seção 10) pro cliente — sem elas, escopo é chute.
3. Vender o recorte: **B2B + entregador verificado + regional** (a brecha que nem o TôNoLucro cobre).
4. Propor a **Fase 0 (spike)** como etapa paga antes do orçamento fechado.
5. Só então cravar escopo, prazo e preço.
