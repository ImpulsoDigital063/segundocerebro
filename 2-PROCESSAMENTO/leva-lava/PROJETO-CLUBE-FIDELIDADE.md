# Projeto Clube Fidelidade · Leva&Lava Lavanderia Express

**Cravado em:** 2026-05-21 (madrugada)
**Origem:** Eduardo visitou a unidade TQ02 Palmas Brasil Sul, conversou com a franqueada Beatriz, identificou fricção no programa de fidelidade atual (comprovantes por WhatsApp manual)
**Status:** Idealização cravada · pendente validação técnica (API Cicclo) e abertura comercial com matriz Leva&Lava

---

## 1. Resumo executivo

A Leva&Lava (rede com 130+ unidades em 26 estados) opera o "Clube leva&lava" — programa de fidelidade onde, a cada 10 ciclos de lavagem, o cliente ganha 1 grátis. O cliente envia comprovante por WhatsApp para um número de cada unidade. Contagem manual.

O sistema operacional da lavanderia é a **Cicclo (cicclo.com / Laundway)**, plataforma SaaS líder no Brasil para lavanderias self-service. Cicclo já tem programa de fidelidade nativo com cashback — mas a Leva&Lava não usa (ou desativou). Isso significa que existe um gap funcional ou de configuração entre o que o Cicclo entrega e o que a rede quer rodar.

**Proposta:** plataforma SaaS de fidelidade multi-tenant que substitui o WhatsApp manual por um fluxo digital integrado. Cliente cadastra telefone uma vez (QR no totem ou cartaz), pagamento confirmado pelo Cicclo dispara ponto automático, painel da franqueada e da matriz consolidam tudo. Zero foto, zero contagem.

**Oportunidade financeira (estimativa):**
- 130 unidades × R$ 89/mês = **R$ 11.570/mês** de MRR potencial só com Leva&Lava
- Setup único: R$ 1.500–3.000 por unidade (white-label, branding, treinamento)
- Expansão: qualquer rede de lavanderia self-service no Brasil (Lavô, OMO, redes regionais) é cliente potencial

---

## 2. Diagnóstico (evidência da visita)

### Cliente identificado
- **Rede:** Leva&Lava — Lavanderia Express
- **CNPJ franqueado visitado:** Gb Leva e Lava Ltda · 61.708.378/0001-39
- **Unidade:** TQ02 Palmas Brasil Sul (Av. LO 15, Lote 7, Sala 01)
- **Franqueada:** Beatriz (aliada interna, indicou contato pra matriz)
- **Outra unidade Palmas:** Palmas Posto Tucunaré (Av. NS 8)

### Sistema operacional (totem)
- **Plataforma:** Cicclo (marca também conhecida como Laundway, app no iOS/Android com 1499442397)
- **Sede Cicclo:** SP · tel (11) 3230-2076 · contato@cicclo.com
- **Versão observada no totem:** v3000.05.260520
- **Funções nativas do totem:** aceita crédito/débito/PIX, libera máquina, mostra disponibilidade (lavadora/secadora), botão "Consultar voucher"
- **App Cicclo cliente:** desbloqueio de máquina, notificação de ciclo, fila virtual, agendamento, multi-usuário

### Programa de fidelidade atual (Leva&Lava Palmas)
- **Regra:** 10 ciclos = 1 grátis
- **Operação:** cliente fotografa o comprovante e envia para WhatsApp (63) 99810-36871
- **Marca interna:** "Clube leva&lava — lave mais, pague menos"
- **Restrições no cartaz:** "cupons não cumulativos, não convertidos em dinheiro/crédito, sujeito a cancelamento" — texto de quem já se queimou com contagem manual e quer se proteger

### Outras promoções observadas
- **Promoção da Madrugada:** R$ 10,90 por ciclo das 00h às 06h (atrai usuários de horário ocioso)

### Contatos
- **WhatsApp da unidade Palmas (do cartaz):** (63) 99810-36871
- **WhatsApp corporativo da rede:** (17) 99227-6766
- **E-mail corporativo:** contato@levaelava.com.br
- **Site:** levaelava.com.br

---

## 3. Pesquisa de mercado (fontes web, 21/05/2026)

### Cicclo / Laundway
- Plataforma líder de self-service laundry no Brasil
- **Possui programa de fidelidade nativo com cashback, descontos e benefícios** — confirmado em conteúdo institucional
- Declara em material institucional: "possibilidade de integração e comunicação de todas as funcionalidades do sistema com outras APIs"
- **NÃO há documentação pública de API/webhook** — integração precisa ser negociada com Cicclo diretamente
- Tem WhatsApp AI assistant pra desbloquear máquina (eles já operam stack de WhatsApp)
- Portal admin: portal.cicclo.app

### Leva&Lava
- **130+ unidades** em 26 estados (rede em rápida expansão)
- Sede do grupo: interior SP (DDD 17)
- Site institucional não documenta o programa de fidelidade nacional — "Clube leva&lava" pode ser iniciativa local ou padrão recente da rede sem documentação online

### Concorrentes / referências
- **Lavô! (maior rede self-service do Brasil):** tem fidelidade nativa
- **Minha Lavanderia (João Pessoa):** "Ponto a Ponto"
- **Setor cresceu 44% entre 2019 e 2024** (Abralav)
- **Outras plataformas de gestão:** Sislav, VendPago (Payblu), PagLave, Nayax, VM Tecnologia, lavanderiaself.com.br
- **Brecha confirmada:** não existe SaaS de fidelidade DEDICADO multi-tenant pra self-service no Brasil. Quem tem fidelidade tem dentro do sistema operacional (acoplado, sem flexibilidade)

---

## 4. Produto · os 8 blocos

### Bloco 1 · Cadastro do cliente
- **Onde:** QR code no cartaz da lavanderia + tela do totem
- **Dado mínimo:** telefone (chave única) + nome
- **Dado opcional:** e-mail (canal de marketing futuro)
- **Confirmação:** SMS com link mágico (one-tap login) — sem senha
- **Fricção alvo:** ≤ 30 segundos da primeira vez à conta criada

### Bloco 2 · Captura do evento de lavagem (DECISÃO FUNDADORA)

**Hipótese A — Integração nativa com Cicclo (alvo prioritário)**
- Cicclo envia webhook ou expõe API de "transação confirmada"
- Cliente vincula telefone à conta Cicclo (uma vez, no app ou no totem)
- Cada pagamento confirmado = +1 ponto automático
- **Fricção:** ZERO clique extra
- **Bloqueio:** depende de acordo comercial com Cicclo

**Hipótese B — Cliente identifica-se no totem antes de pagar**
- Cliente digita telefone na tela do totem antes da seleção de pagamento
- Cicclo dispara webhook do pagamento e amarra ao telefone
- **Fricção:** 1 clique extra, mas 100% no fluxo já existente
- **Bloqueio:** depende do Cicclo permitir custom field na tela ou expor SDK

**Hipótese C — App nosso + janela temporal (fallback se A e B falharem)**
- Cliente cadastra telefone no nosso app/web
- Antes de pagar, clica "tô pagando agora" → sistema "arma" janela de 3min
- Sistema lê eventos do Cicclo (via integração mínima — leitura de transações da unidade) e amarra ao cliente que armou a janela
- **Fricção:** 1 clique extra fora do totem
- **Bloqueio:** ainda precisa de leitura de eventos do Cicclo

**Hipótese D — OCR de comprovante (último recurso, MVP independente)**
- Cliente sobe foto do comprovante via nosso bot WhatsApp (em vez do humano)
- OCR extrai data + valor + hora → cria evento e bate ponto
- Antifraude: dedupe por hash de imagem + janela de tempo + cruzamento com transações da unidade (se conseguir acessar)
- **Fricção:** mantém a foto, mas tira o humano contabilizando
- **Bloqueio:** zero — funciona sem nenhum acordo com Cicclo

**Decisão recomendada:** ir pra reunião com Leva&Lava propondo **Hipótese A**, mas com **Hipótese D como fallback técnico garantido**. Isso protege o pitch: você consegue entregar valor mesmo se Cicclo não topar abrir.

### Bloco 3 · Contagem de pontos
- Regra padrão Leva&Lava: 10 ciclos = 1 grátis (configurável por unidade ou nacional)
- Cada unidade pode ter regra customizada (matriz define padrão, franqueado pode customizar dentro de limites)
- Sistema multi-regra: rede pode rodar promoções concorrentes (ex: "no aniversário ganha 1 ciclo")
- **Validade dos pontos:** cravar 12 meses default (alinha com regra do cartaz "promoção por tempo limitado")

### Bloco 4 · Resgate do bônus
- Cliente recebe notificação automática quando atinge meta (SMS + WhatsApp)
- No próximo uso, digita telefone no totem → totem mostra "Você tem 1 ciclo grátis disponível, deseja usar agora?"
- Se sim → totem libera máquina sem cobrar
- **Auditoria:** voucher tem código único, log de uso, vinculação à transação Cicclo (ou marca de "ciclo grátis" no log próprio)
- **Antifraude:** voucher só pode ser resgatado na unidade ou em qualquer unidade da rede (decisão do franqueador, ver Bloco 5)

### Bloco 5 · Painel da franqueada (unidade)
- **Métricas:**
  - Clientes únicos da unidade
  - Clientes recorrentes (≥ 2 visitas nos últimos 30/60/90 dias)
  - Clientes próximos do bônus (8 ou 9 ciclos acumulados)
  - Vouchers ativos / resgatados / expirados
  - Faturamento por cliente (ranking)
- **Ações:**
  - Buscar cliente por telefone
  - Ajustar ponto manualmente (com log auditável e justificativa obrigatória)
  - Enviar mensagem em massa para base própria (ex: "Promoção da madrugada hoje, R$ 10,90")
- **Princípio:** painel REDUZ cliques do franqueado. Cada feature aprovada precisa responder "isso economiza tempo dele em quanto?". Se não responde, não entra.

### Bloco 6 · Painel da matriz (franqueador)
- **Métricas consolidadas:**
  - Base total da rede (clientes únicos no Brasil)
  - Ranking de unidades por base / por engajamento / por faturamento
  - Penetração geográfica (mapa por estado/cidade)
  - Taxa de retenção (cliente que voltou em 30/60/90 dias)
  - Coorte de clientes por unidade de origem
- **Configurações nacionais:**
  - Regras default do programa (10 ciclos = 1)
  - Promoções nacionais (ex: "Dia das Mães — todos ganham 2 pontos")
  - Política de uso de voucher (só na unidade ou em qualquer da rede)
- **Power feature: marketing centralizado**
  - Matriz pode mandar SMS/WhatsApp em massa pra base nacional (segmentado por cidade, estado, recorrência, etc)
  - LGPD: opt-in registrado no momento do cadastro

### Bloco 7 · Comunicação automática com cliente
- **Eventos disparadores:**
  - Ganhou ponto → SMS "Você acabou de somar 1 ciclo no Clube leva&lava. Total: X/10. Faltam Y."
  - Próximo do bônus (em 8 e 9) → "Faltam 2 ciclos pra você ganhar 1 grátis"
  - Ganhou bônus → "Parabéns, você ganhou 1 ciclo grátis. Válido até DD/MM."
  - Aniversário (opcional) → "Hoje é seu dia, ganhe X pontos extras"
  - Inativo (60 dias sem visitar) → "Sentimos sua falta. Volte e ganhe ponto em dobro nesta semana"
- **Canais:**
  - **MVP:** SMS (Twilio, Zenvia, AWS SNS) — funciona pra todo telefone
  - **V1:** WhatsApp Business API (Twilio, Meta) — engaja mais mas custa mais
- **Custo estimado:** R$ 0,08–0,15 por SMS; R$ 0,05–0,30 por mensagem WhatsApp (depende do volume e tipo)

### Bloco 8 · Antifraude
- **Dedupe de transação:** mesmo telefone + mesma unidade + mesma janela de 5min = bloqueia segundo evento
- **Mesmo telefone em 2 unidades distantes em ≤ 30min:** alerta de fraude (sinal de cadastro coletivo)
- **Voucher uso único:** marca como consumido antes de liberar máquina
- **Limite de ajuste manual da franqueada:** máx 3 ajustes/mês por unidade sem aprovação da matriz
- **Log auditável:** todo evento (criação, ajuste, resgate, expiração) tem timestamp, ator, IP

---

## 5. Arquitetura técnica

```
┌─────────────────────────────────────────────────────────────┐
│                       FRONT-END                              │
├─────────────────────────────────────────────────────────────┤
│  Web cliente (PWA)    Painel franqueada     Painel matriz   │
│  (cadastro/extrato)   (Next.js)            (Next.js)        │
└──────────┬───────────────────┬──────────────────┬───────────┘
           │                   │                  │
           └───────────────────┼──────────────────┘
                               │
                  ┌────────────▼────────────┐
                  │      API REST/RPC       │
                  │   (Next.js API routes)  │
                  └────────────┬────────────┘
                               │
            ┌──────────────────┼─────────────────┐
            │                  │                 │
   ┌────────▼────────┐ ┌──────▼───────┐ ┌──────▼───────┐
   │   Supabase      │ │  Integração   │ │  Mensageria  │
   │  (Postgres +    │ │    Cicclo     │ │  SMS/WhatsApp│
   │   Auth + RLS)   │ │  (webhook ou  │ │  (Twilio ou  │
   │                 │ │   polling API)│ │   Zenvia)    │
   └─────────────────┘ └───────┬───────┘ └──────────────┘
                               │
                  ┌────────────▼────────────┐
                  │     CICCLO PLATFORM     │
                  │   (não controlamos —    │
                  │   integramos via API)   │
                  └─────────────────────────┘
```

### Componentes
1. **Web cliente (PWA)** — cadastro, login mágico, extrato de pontos, vouchers, histórico
2. **Painel franqueada** — métricas da unidade, busca cliente, ajuste manual, mensageria local
3. **Painel matriz** — métricas consolidadas, configuração nacional, marketing centralizado
4. **API** — orquestra tudo, multi-tenant, RLS no Postgres
5. **Worker de integração Cicclo** — escuta webhook ou faz polling, normaliza evento, dispara ponto
6. **Worker de mensageria** — fila de SMS/WhatsApp com retry e rate-limit
7. **Banco** — Supabase (Postgres + RLS + Auth + Storage)

### Princípios de arquitetura cravados
- **Multi-tenant by design:** unidade é a chave de partição. Toda query tem `unidade_id` ou `rede_id`. RLS no Supabase garante isolamento.
- **Read-after-write em writes críticos** (regra cravada do operador): toda criação de evento de ponto / voucher / resgate é validada lendo o registro de volta antes de confirmar pra UI. UI verde sem prova de banco não conta.
- **Integração externa é falível** — Cicclo pode cair, webhook pode atrasar. Eventos têm idempotency key, retry com backoff, e fila de dead-letter pra investigação manual.

---

## 6. Modelagem de dados

```
rede (Leva&Lava, futuras redes)
  id, nome, cnpj_franqueador, contato_corporativo, criada_em

unidade (cada loja franqueada)
  id, rede_id, nome (ex: "Palmas 02"), endereco, cnpj_franqueado,
  responsavel_nome, responsavel_telefone, cicclo_unit_id, criada_em

cliente (base universal, atravessa unidades)
  id, telefone (UNIQUE), nome, email_opcional, lgpd_opt_in_em,
  primeira_unidade_id, criado_em

cliente_unidade (cliente x unidade onde já passou)
  cliente_id, unidade_id, primeiro_evento_em, ultimo_evento_em,
  total_eventos

regra_fidelidade (configurável por rede ou unidade)
  id, rede_id (nullable), unidade_id (nullable),
  ciclos_para_bonus (default 10), validade_pontos_meses (default 12),
  voucher_aplicavel ('unidade' | 'rede'), ativa, criada_em

evento_lavagem (cada vez que cliente lava)
  id, cliente_id, unidade_id, valor_pago, forma_pagamento,
  cicclo_transaction_id (UNIQUE quando integrado), origem ('cicclo_api' | 'cicclo_webhook' | 'ocr' | 'manual'),
  ocorreu_em, registrado_em

ponto (saldo de pontos do cliente por regra ativa)
  id, cliente_id, regra_id, saldo, ultima_atualizacao

voucher (bônus emitido)
  id, cliente_id, regra_id, codigo (UNIQUE), gerado_em, validade_ate,
  status ('ativo' | 'resgatado' | 'expirado'), resgatado_em, resgatado_unidade_id, resgatado_evento_id

ajuste_manual (qualquer alteração manual no saldo)
  id, ponto_id, delta, justificativa, autor_id, autorizado_por_id (nullable), criado_em

mensagem (log de todo SMS/WhatsApp disparado)
  id, cliente_id, canal, template, payload, status, custo_estimado, enviada_em

audit_log (tudo que muda)
  id, tabela, registro_id, acao, payload_antes, payload_depois, ator_id, ip, criado_em
```

### Decisões de modelagem
- **Cliente é universal:** mesmo telefone na rede toda. Permite "cliente da Leva&Lava" como conceito, não "cliente de uma unidade isolada".
- **cliente_unidade é a tabela ponte:** rastreia em quais unidades o cliente é ativo, sem duplicar identidade.
- **regra_fidelidade flexível:** uma rede pode ter regra nacional + unidades específicas com regra própria.
- **evento_lavagem com origem rastreável:** sabemos se o evento veio de integração Cicclo ou de OCR/manual — crítico pra auditoria e antifraude.
- **voucher tem código único:** apresentável no totem (ex: 6 dígitos), validável independente da nossa API caso o totem caia.

---

## 7. Fluxos UX

### Fluxo cliente · primeiro uso
1. Vê QR no cartaz da unidade → escaneia
2. Web abre: "Clube leva&lava — Lave mais, pague menos"
3. Digita telefone (PT/BR, máscara automática) e nome
4. SMS chega com link mágico, clica
5. Tela: "Pronto! Toda lavagem que você fizer aqui vai virar ponto. A cada 10, ganha 1 ciclo grátis."
6. Pronto. Próximas vezes: nem precisa abrir. Sistema captura sozinho via Cicclo.

### Fluxo cliente · ganhar ponto (Hipótese A · integração Cicclo)
1. Cliente paga no totem (cartão/PIX) como sempre
2. Cicclo confirma pagamento → webhook pra nosso sistema
3. Nosso sistema identifica cliente pelo cicclo_user_id (vinculado ao telefone no cadastro)
4. Cria evento_lavagem, soma ponto, dispara SMS: "Ganhou 1 ciclo. Total 3/10."
5. Read-after-write: query confirma ponto registrado antes de marcar evento como "processado"

### Fluxo cliente · ganhar ponto (Hipótese D · fallback OCR)
1. Cliente lava como sempre, paga, totem imprime comprovante
2. Cartaz orienta: "Fotografe e envie pro nosso bot: link wa.me/55XXX..."
3. Cliente envia foto → bot responde "Recebi, validando..."
4. OCR extrai dados (data, valor, hora) → cruza com dedupe → cria evento
5. Bot responde "Ponto adicionado! Total 3/10."
6. Foto fica arquivada por 30 dias pra auditoria

### Fluxo cliente · resgatar bônus
1. Cliente atinge 10 pontos → SMS "Ganhou 1 ciclo grátis! Código: 4729. Válido até 21/06/2026."
2. Vai à unidade, no totem digita telefone (ou escaneia QR)
3. Totem mostra: "Voucher 4729 disponível. Usar agora?"
4. Confirma → totem libera máquina sem cobrança
5. Sistema marca voucher como resgatado, vincula ao evento

### Fluxo franqueada · dia-a-dia
1. Abre painel pelo celular (PWA) ou desktop
2. Dashboard: "Hoje: 14 ciclos, 11 clientes únicos, 2 estão a 1 ponto do bônus"
3. Quer mandar promoção: clica "Comunicação" → "Promoção da Madrugada" → seleciona segmento "Clientes que já lavaram à noite" → envia
4. Cliente reclama de ponto que não caiu: busca por telefone → vê histórico → ajusta com justificativa
5. **Princípio cravado:** se alguma ação acima exigir mais de 3 cliques, o fluxo tá errado.

### Fluxo matriz · operação
1. Acesso ao painel nacional (web)
2. Dashboard: base total, crescimento mensal, ranking de unidades
3. Configura promoção nacional: "Dia das Mães — ganhe ponto em dobro de 8 a 12/05"
4. Aprova ou veta ajustes manuais grandes feitos por franqueadas
5. Exporta base segmentada pra marketing externo (CSV ou integração HubSpot/RD futuro)

---

## 8. Stack tecnológica

### Frontend
- **Framework:** Next.js 15 (App Router) + TypeScript
- **UI:** Tailwind + shadcn/ui (mesma base que Eduardo já opera no Impulso/AgendaPRO)
- **PWA:** install prompt + offline básico no painel da franqueada
- **Ícones:** SVG inline (regra cravada: zero emoji em LP/site)

### Backend
- **API:** Next.js API routes + Server Actions
- **Banco:** Supabase Postgres + RLS (multi-tenant nativo, mesma stack do AgendaPRO)
- **Auth:** Supabase Auth (magic link via SMS pro cliente; email/senha pro franqueado/matriz)
- **Storage:** Supabase Storage (fotos de comprovante quando rota D ativa, com TTL 30 dias)

### Integrações
- **Cicclo:** webhook + REST API (a definir após contato comercial)
- **Mensageria SMS:** Zenvia ou Twilio (Brasil)
- **Mensageria WhatsApp:** Twilio Business API ou direto via Meta Cloud API
- **OCR (fallback):** GPT-4o-mini com vision OU Google Cloud Vision (custo R$ 0,01–0,03 por foto)

### Infra
- **Hosting:** Vercel (mesma stack Eduardo usa) — plano Pro R$ 110/mês
- **Banco:** Supabase Pro R$ 130/mês (suporta 50–100k usuários tranquilo)
- **Domínio sugerido:** clube.levaelava.com.br (subdomínio da rede, white-label) OU clubeleva.app (independente)
- **Total infra mensal estimado:** R$ 240–400 dependendo do volume de mensagens

---

## 9. Modelo de monetização

### Modelo SaaS por unidade (recomendado)
- **Setup único:** R$ 1.500 por unidade (treinamento, branding, integração)
- **Mensalidade por unidade:** R$ 89/mês (plano Essencial) ou R$ 149/mês (plano Pro com mensageria incluída)
- **Override por mensagem:** R$ 0,15 SMS / R$ 0,30 WhatsApp transacional (custo + 50% margem)

### Modelo alternativo (rede paga centralizado)
- **Setup nacional:** R$ 15.000 (one-shot)
- **Mensalidade nacional:** R$ 8.900/mês (até 200 unidades)
- **Vantagem:** mais fácil de fechar com matriz, sem precisar de cada franqueado aprovar
- **Risco:** matriz pode renegociar agressivamente

### Cálculo de oportunidade (Leva&Lava)
| Cenário | Unidades | MRR | Anual |
|---|---|---|---|
| Pessimista (20% adesão) | 26 | R$ 2.314 | R$ 27.768 |
| Realista (50% adesão) | 65 | R$ 5.785 | R$ 69.420 |
| Otimista (100% rede)  | 130 | R$ 11.570 | R$ 138.840 |
| Plano nacional (matriz fecha) | 130 | R$ 8.900 | R$ 106.800 |

### Custos operacionais por unidade (estimativa)
- Infra rateada: ~R$ 5/mês
- Mensagens (média 50 SMS/mês por unidade): ~R$ 7,50
- Suporte (1h/mês por unidade): R$ 30 (terceirizado)
- **Custo total por unidade/mês:** ~R$ 42,50
- **Margem bruta no plano Essencial (R$ 89):** ~52%

---

## 10. Roadmap

### MVP · 4 semanas (piloto Palmas)
- Web cliente cadastro + extrato
- Painel franqueada básico (1 unidade)
- Hipótese D operacional (OCR via bot WhatsApp)
- SMS de confirmação de ponto
- Voucher digital (código alfanumérico, sem integração totem ainda)
- **Objetivo:** rodar piloto em uma unidade Palmas com Beatriz, validar fluxo, gerar case

### V1 · 12 semanas (rede)
- Painel matriz consolidado
- Multi-unidade com isolamento RLS
- Integração Cicclo (Hipótese A ou B, conforme acordo)
- WhatsApp Business API (substitui SMS)
- Promoções nacionais agendáveis
- Onboarding self-service de novas unidades
- **Objetivo:** entregar pra matriz Leva&Lava ativada na rede toda

### V2 · 6 meses (plataforma)
- Multi-rede (Leva&Lava, Lavô, outras)
- Marketplace de templates de campanha
- Integração com ERP do franqueador (faturamento por unidade automatizado)
- Mobile nativo (iOS/Android) caso PWA não dê conta
- API pública pra fidelidades parceiras
- **Objetivo:** virar produto SaaS independente, ticket R$ 50–100k/ano por rede

---

## 11. Estratégia comercial

### Primeira mensagem (WhatsApp do cartaz · 63 99810-36871)

**Versão recomendada (curta, peço encaminhamento, ainda não vendo):**

> Olá, bom dia. Sou Eduardo Barros, da Impulso Digital aqui de Palmas. Sou cliente da unidade Palmas Brasil Sul há um tempo e gosto bastante do serviço.
>
> Estive hoje na unidade, conversei com a Beatriz e comentei sobre uma proposta de melhoria pro Clube leva&lava — uma forma de automatizar o controle dos ciclos que hoje é feito por foto no WhatsApp.
>
> Ela me orientou a falar com a equipe por aqui. Poderia me direcionar pra pessoa responsável pelo programa de fidelidade ou pela área de marketing/operações da rede? Tenho um material estruturado pra apresentar.
>
> Obrigado.

**O que essa mensagem faz:**
- Posicionamento de cliente (não vendedor frio)
- Ancora na Beatriz (confiança)
- Cita problema sem entregar solução (curiosidade)
- Pede transferência específica (não pede reunião direta — atendente não tem autoridade)
- Encerra com gratidão (não com CTA agressivo)

### Segunda mensagem (quando chegar no decisor)
- Apresentação curta da Impulso Digital + cidade + por que isso te interessa
- Resumo do problema observado (3 frases)
- Resumo da solução proposta (3 frases, sem detalhe técnico)
- 1 mockup de tela (cliente vendo o progresso 7/10)
- Pedido: 30min de reunião por vídeo

### Materiais a produzir antes da reunião
1. **Deck 1 página (PDF):** problema → solução → benefício pra rede → próximo passo
2. **Mockup web cliente:** tela de extrato com pontos (gera identificação imediata)
3. **Mockup painel franqueada:** dashboard simples (mostra ganho operacional)
4. **One-pager financeiro:** "Custo R$ 89/un/mês vs. economia de tempo de equipe + retenção de cliente"

### Argumentos centrais pra usar com a matriz
1. **Dado centralizado:** hoje você não sabe quantos clientes únicos a rede tem. Com sistema, sabe.
2. **Diferencial competitivo:** "lave em qualquer unidade Leva&Lava e acumule" — concorrente avulsa não tem.
3. **Liberação operacional:** cada franqueado economiza X horas/mês não contando comprovante.
4. **Marketing direto:** base própria de telefones opt-in, sem depender de Instagram.
5. **Proteção legal:** o cartaz atual tem texto defensivo ("cupons não cumulativos, não convertidos em dinheiro") — sintoma de erro operacional histórico. Sistema elimina a causa.

### Possíveis objeções e respostas
| Objeção | Resposta |
|---|---|
| "Já temos Cicclo, eles têm fidelidade" | "Sim, e por que vocês operam por WhatsApp manual então? Sinal de que a fidelidade do Cicclo não atende à regra de vocês. Nosso sistema é customizável e branded como Clube leva&lava." |
| "Vamos esperar a Cicclo desenvolver" | "Justo. Mas a Cicclo é fornecedora de N redes, não vai customizar pra Leva&Lava. Vocês querem dado próprio ou dependente de fornecedor?" |
| "Quanto custa?" | "R$ 89/unidade/mês ou R$ 8.900 nacional. Piloto gratuito em 1 unidade por 60 dias pra provar ROI." |
| "Quem é você?" | "Impulso Digital, Palmas. Já operamos AgendaPRO em produção com salões. Stack provada." |

---

## 12. Riscos e hipóteses não validadas

### Hipóteses críticas a validar ANTES de codar V1
1. **Cicclo aceita integração?** — contato: (11) 3230-2076 / contato@cicclo.com. Pode ser que peçam parceria comercial ou cobrem caro pela API.
2. **Leva&Lava centraliza fidelidade ou cada franqueado faz do seu jeito?** — descobrir na primeira reunião. Muda monetização (rede paga vs franqueado paga).
3. **Existe contrato de exclusividade Cicclo x Leva&Lava?** — se Cicclo tem cláusula de exclusividade de fidelidade, projeto morre. Improvável, mas verificar.
4. **LGPD:** base de telefones com opt-in claro, política de privacidade explícita, possibilidade de excluir cadastro a qualquer momento.

### Riscos técnicos
- Cicclo pode ter rate-limit ou política restritiva na API
- OCR (fallback) pode dar erro em comprovantes amassados/manchados — precisa fluxo de revisão manual
- WhatsApp Business API exige aprovação da Meta (template + caso de uso)
- SMS pode ter alta taxa de não-entrega em alguns operadores (estatística histórica Brasil: 80–92%)

### Riscos comerciais
- Matriz pode ter projeto interno paralelo (in-house) — pivot rápido pra "vamos integrar com o que vocês têm"
- Matriz pode demorar 60–90 dias pra responder — manter pipeline com outros clientes Cicclo enquanto isso
- Franqueados podem resistir a custo extra mensal — vender benefício de retenção (cada cliente recorrente vale R$ X em LTV)

---

## 13. Próximos passos cravados pra Eduardo

### Esta semana (21–28/05)
1. **Mandar mensagem 1 pro WhatsApp do cartaz** (texto cravado na seção 11)
2. **Tirar print/foto do verso do cartaz e do totem completo** — pode ter info que perdemos
3. **Ligar pro Cicclo (11 3230-2076) anônimo, fingir ser cliente potencial de lavanderia novo** — descobrir se vendem API ou se fidelidade é só nativa
4. **Visitar a outra unidade Palmas (Posto Tucunaré)** — confirmar se opera igual ou diferente, conversa com franqueado

### Semana seguinte (após resposta da rede)
5. **Reunião com decisor da Leva&Lava** — usar deck de 1 página
6. **Validar 4 hipóteses críticas** (seção 12)
7. **Cravar Hipótese A/B/C/D do bloco 2** com base na resposta da rede + Cicclo
8. **Definir modelo de monetização final** (unidade x nacional) com base no que matriz pedir

### Em 30 dias
9. **Começar MVP** com Beatriz e a unidade Palmas Brasil Sul como piloto pago (R$ 89/mês desde o dia 1, contrato de 60 dias)
10. **Gravar case** do piloto pra apresentar pra matriz fechar nacional

---

## 14. Anexos · Referências web (21/05/2026)

- Cicclo: cicclo.com / Laundway (app)
- Leva&Lava: levaelava.com.br · contato@levaelava.com.br · (17) 99227-6766
- Lista de unidades Leva&Lava: levaelava.com.br/unidades/
- Setor: Abralav (Associação Brasileira de Lavanderias) · crescimento 44% 2019-2024
- Referência fidelidade lavanderia: Lavô (lavobrasil.com.br), Minha Lavanderia João Pessoa
- Concorrentes plataforma de gestão: Sislav, VendPago, PagLave, Nayax, VM Tecnologia

---

**Próxima sessão:** Eduardo decide qual ângulo prioritário (mensagem 1 já cravada, hipóteses críticas a validar) e a gente afia mockup + deck.
