# ESTRATÉGIA — LP SEGMENTADA AURA ENERGY
## Arquitetura, copy e fluxo operacional

> **Versão:** v1.0 — pré-implementação
> **Data:** 2026-05-06 (madrugada/manhã)
> **Status:** aguardando validação Eduardo antes de codar
> **Inspiração:** padrão AgendaPRO (4 modalidades — barbearia/salão/estética/nail) com hub raiz + páginas segmentadas + cross-links

---

## 1 · VISÃO GERAL — arquitetura completa

```
auraenergy.vercel.app/                  ← HUB (segmentador grande + calculadora)
                    │
                    ├── /casa            ← LP residencial
                    ├── /comercio        ← LP comercial
                    ├── /industria       ← LP industrial
                    ├── /fazenda         ← LP rural
                    │
                    ├── /painel-renato   ← Dashboard INTERNO Renato (privado ?key=)
                    ├── /links           ← Linktree-style (Insta bio)
                    │
                    └── /economia-resultado · /orcamento · /briefing · /plano-renato
                                          ↑ páginas existentes mantidas
```

**Fluxos de entrada possíveis:**

1. **Cliente cai no Google** ("solar Palmas") → vai pro hub → escolhe segmento → LP segmentada → calculadora → orçamento
2. **Cliente cai no Insta bio** → `/links` (linktree) → escolhe segmento → LP segmentada
3. **Renato manda link direto** (WhatsApp) → cliente já cai no segmento certo (sem fricção)
4. **Cliente entra errado** → footer de cross-links → troca segmento em 1 clique

**Filosofia anti-caos:**
- Renato lembra de **1 URL só** (`/painel-renato`) que mostra os outros 4 com botão "copiar"
- Cliente nunca fica preso na LP errada (cross-links no footer)
- Hub raiz funciona como segmentador — quem não sabe escolhe ali

---

## 2 · TABELA-MESTRA — 4 segmentos × 8 dimensões

| Dimensão | 🏠 Casa | 🏪 Comércio | 🏭 Indústria | 🌾 Fazenda |
|---|---|---|---|---|
| **URL** | `/casa` | `/comercio` | `/industria` | `/fazenda` |
| **Persona** | Dono(a) casa, 30-55, família | Dono mercado/clínica/academia/posto/restaurante, 35-60 | CEO/diretor fábrica/frigorífico/agroindústria, 40-65 | Produtor rural, 35-65, soja/arroz/gado |
| **Conta típica** | R$ 300-700 | R$ 500-5k | R$ 5k-50k+ | R$ 2k-20k+ (com irrigação) |
| **Sistema típico** | 3-7 kWp · R$ 13-28k | 8-30 kWp · R$ 30-130k | 50-500 kWp · R$ 200k-2M | 30-500 kWp · R$ 130k-2M |
| **Hook (headline)** | "Sua conta cai 85-95% e você economiza por 25 anos" | "Sua despesa fixa cai 80-90% — sem fechar a loja, sem perder cliente" | "Reduza 70-90% dos custos energéticos. ROI em 3-5 anos." | "Sua fazenda gera energia. O pivô para de pesar na conta." |
| **Calculadora** | R$ conta luz → economia 25 anos | kWh/mês comercial × tarifa B2B → economia mensal/anual | Demanda kW + kWh/mês → ROI multi-ano + depreciação fiscal | Hectares + cultura + irrigação → economia + ROI por safra |
| **CTA primário** | "Calcular minha economia" | "Quero orçamento comercial" | "Solicitar análise de viabilidade" | "Diagnóstico gratuito da fazenda" |
| **Tráfego priorizado** | Insta orgânico + Google ("solar Palmas") + indicação | Google Ads + LinkedIn + Associação Comercial | Google Ads alta intenção + LinkedIn decisor + visita direta | Insta storytelling + Sindicato Rural + Sicredi + Agrotins |

---

## 3 · DETALHAMENTO POR SEGMENTO

### 3.1 🏠 `/casa` — RESIDENCIAL

**Persona-chave:** João, 42 anos, dono de casa em Plano Diretor Sul. Casado, 2 filhos. Conta de luz R$ 580/mês. Telhado próprio em laje de concreto. Pensa em solar há 1 ano mas tem medo de "pegadinha".

**Hero headline:**
> *"Sua conta de luz pode cair 85-95%. Em Palmas, faz sentido agora."*

**Hero sub:**
> *"Sou Renato Edson, engenheiro eletricista de Palmas. Antes de te oferecer painel, te mostro a conta. Se não compensar, eu falo."*

**Sequência de seções:**
1. Hero + calculadora residencial (R$ conta → economia)
2. Manifesto Renato (humanizado)
3. Como funciona (3 passos: cálculo → projeto → instalação 30 dias)
4. **Programa Palmas Solar** (IPTU 60% → DIFERENCIAL forte aqui)
5. Antes/depois cliente real (quando tiver)
6. Diferenciais 6-pack (transparência, garantia, financiamento)
7. Janela Fio B (urgência regulatória)
8. FAQ residencial (5 perguntas: payback, garantia, manutenção, mudança, financiamento)
9. CTA final + footer cross-links

**Calculadora específica:** **input = R$ conta luz mensal**. Output:
- Sistema recomendado (kWp)
- Investimento estimado (R$)
- Economia mensal pós-solar
- Tempo de payback
- Economia acumulada em 25 anos (numerão grande)
- Botão "Quero meu orçamento personalizado" → /orcamento

**Cases típicos pra mostrar:**
- "Família em Plano Diretor Sul: conta R$ 870 → R$ 78/mês após solar"
- "Casa em Aureny III: economia R$ 9.504/ano (sistema 6,6 kWp)"

**Diferenciais cravados (acima dos 6 do mercado):**
1. Programa Palmas Solar full-service (Aura cuida da documentação IPTU)
2. Calculadora pública sem cadastro
3. Engenheiro presente em todas as etapas
4. Garantia padrão Trina (15 anos produto — única Tier 1)
5. Financiamento sem entrada (Solfácil/BV)
6. Suporte WhatsApp por 25 anos

---

### 3.2 🏪 `/comercio` — COMERCIAL (mercado/restaurante/clínica/academia/posto)

**Persona-chave:** Maria, 48 anos, dona de mercado em Setor Sul. Conta de luz R$ 3.200/mês. Tem freezer, ar condicionado, iluminação 24h. Já viu vizinho instalar solar e quer entender. Decisão é dela mas marido pergunta da matemática.

**Hero headline:**
> *"Sua despesa fixa cai 80-90%. Sem fechar a loja. Sem perder cliente."*

**Hero sub:**
> *"Instalação noturna ou fim de semana. Engenheiro com ART. Payback de 3-4 anos pra comércio em Palmas."*

**Sequência de seções:**
1. Hero + calculadora comercial (kWh/mês comercial)
2. **Tipos de comércio que mais economizam** (4 cards: mercado, restaurante, clínica, academia/posto) — cada um com case típico
3. Como funciona instalação SEM fechar o comércio (3 passos: visita técnica fim de semana → projeto → instalação noturna ou domingo)
4. Diferenciais B2B (depreciação fiscal, ICMS isento equipamento, ART)
5. **Caso real Palmas** (mercado/clínica que economizou R$ X/mês)
6. Janela Fio B (mesma urgência)
7. FAQ comercial (5 perguntas: instalação atrapalha?, payback, financiamento PJ, depreciação fiscal, garantia)
8. CTA final + footer cross-links

**Calculadora específica:** **input = kWh/mês ou R$ conta luz mensal**. Output:
- Sistema recomendado (kWp)
- Investimento estimado
- **Economia mensal** (em destaque pra B2B)
- Payback (3-4 anos)
- **ROI em 10 anos** (numerão pra B2B)
- Botão "Solicitar visita técnica gratuita"

**Lead magnet B2B:** "Guia ROI Solar pra Comércio em Palmas" (PDF download) — captura email pra nutrição.

**Diferenciais cravados:**
1. **Instalação noturna ou fim de semana** (loja não fecha) — DIFERENCIAL ÚNICO
2. **Depreciação fiscal acelerada** (Lei 11.196/2005)
3. ICMS isento na compra do equipamento (Convênio 16/15 TO)
4. ART de engenharia
5. Garantia 25 anos compromisso B2B
6. Financiamento Solfácil/BV PJ até 96x

---

### 3.3 🏭 `/industria` — INDUSTRIAL (fábrica/frigorífico/agroindústria)

**Persona-chave:** Carlos, 54 anos, diretor industrial de frigorífico em Palmas. Conta de luz R$ 28.000/mês. Tem câmaras frias 24h, linha de produção. Decisão envolve ele + financeiro + às vezes engenheiro interno. Ciclo de venda longo (4-8 meses).

**Hero headline:**
> *"Reduza 70-90% dos seus custos energéticos. ROI em 3-5 anos."*

**Hero sub:**
> *"Análise de viabilidade técnica completa. Projeto customizado por engenheiro com ART. Sistemas de 50 a 500 kWp."*

**Sequência de seções:**
1. Hero + **CTA principal "Solicitar análise de viabilidade"** (formulário curto, não calculadora — B2B grande não conta luz, conta demanda)
2. **Por que indústria está migrando pra solar AGORA** (3 razões: tarifa industrial sobe + Lei Fio B + competitividade)
3. **Tipos de indústria atendidos** (4 cards: alimentícia, frigorífico, química, metalúrgica) com case típico
4. Como funciona projeto customizado (5 passos: análise demanda → estudo técnico → projeto → instalação faseada → comissionamento)
5. **Lead magnet:** Whitepaper "ROI Solar Industrial Tocantins" (PDF download captura email)
6. Diferenciais pesados B2B (engenheiro dedicado, ART, garantia 25 anos contratual, monitoramento avançado, manutenção preventiva)
7. **Caso real** (quando tiver — frigorífico/agroindústria)
8. Depoimento em vídeo dono empresa (futuro)
9. CTA final: "Solicitar visita técnica + análise" + WhatsApp Renato direto

**Sem calculadora pública** — em vez disso, **formulário curto** (nome, empresa, kWh/mês ou R$ conta, telefone). Renato retorna com proposta personalizada.

**Lead magnet PRINCIPAL:** Whitepaper técnico (10-15 páginas):
- ROI Solar Industrial em Tocantins
- Comparativo: continuar pagando × investir
- Cases visuais
- Checklist viabilidade
- Captura email + telefone → entra em nutrição

**Diferenciais cravados:**
1. **Análise de viabilidade técnica completa** (estudo, não só orçamento)
2. **Engenheiro dedicado** ao projeto (não terceirizado)
3. **ART de engenharia** + cumprimento PRODIST
4. **Monitoramento avançado** (app + alerta de geração abaixo do esperado)
5. **Manutenção preventiva contratual** (anual)
6. **Financiamento BNDES Solar** + linhas industriais

---

### 3.4 🌾 `/fazenda` — RURAL (soja/arroz/gado/irrigação)

**Persona-chave:** José, 56 anos, produtor de soja em Lagoa da Confusão. Tem 800 hectares, 2 pivôs centrais, secador de grãos. Conta de luz R$ 14.000/mês na safra. Já viu vizinho instalar solar pra pivô.

**Hero headline:**
> *"Sua fazenda gera energia. O pivô para de pesar na conta."*

**Hero sub:**
> *"Solar pra agronegócio em Tocantins — pivô de irrigação, secador de grãos, off-grid em área remota. ROI em 3 safras."*

**Sequência de seções:**
1. Hero + **CTA "Diagnóstico gratuito da fazenda"** (visita técnica + projeto)
2. **Aplicações solar no agronegócio** (4 cards: pivô irrigação, secador grãos, off-grid sede, packing house)
3. **Caso real BA: pivô solar dobrou safra de soja** (storytelling forte)
4. Como funciona instalação rural (visita técnica → estudo telhado/área → projeto → instalação fora da safra)
5. Tarifa rural Energisa + ICMS rural + financiamento Pronaf/Pronamp/BNDES
6. Diferenciais rurais (off-grid disponível, sistemas grandes 100+ kWp, parceria Sicredi)
7. **Janela de safra** — instalar fora da janela crítica (CTA temporal)
8. CTA final: WhatsApp + visita técnica + telefone

**Sem calculadora pública** — formulário curto: nome, fazenda, hectares, tem irrigação? (sim/não), conta luz típica, telefone.

**Lead magnet:** "Solar pra Agronegócio TO — Guia do Produtor" (PDF) — captura email.

**Parcerias estratégicas pra Aura cravar nessa LP:**
- Sicredi Tocantins (financiamento Pronaf)
- Sindicato Rural Palmas / Federação Agricultura TO
- Agrotins (feira anual)
- Embrapa (validação técnica)

**Diferenciais cravados:**
1. **Sistemas pra pivô irrigação** (alta demanda, picos de consumo)
2. **Off-grid disponível** pra área sem rede elétrica
3. **Instalação fora da safra** (não atrapalha colheita)
4. **Financiamento Pronaf/Pronamp** (taxas reduzidas pro produtor)
5. **ICMS rural** (Convênio 16/15 + benefícios estaduais)
6. **Parceria Sicredi** (cooperativa local Palmas)

---

## 4 · CROSS-LINKS E NAVEGAÇÃO

### Footer de TODAS as 4 LPs

```
─────────────────────────────────────
Não é o seu caso? Veja outro segmento:

[ 🏠 Casa ]   [ 🏪 Comércio ]
[ 🏭 Indústria ]   [ 🌾 Fazenda ]
─────────────────────────────────────
☀️ Aura Energy · Engenheiro Solar de Palmas-TO
WhatsApp · Instagram · auraenergy.vercel.app
```

### Header de cada LP

Logo Aura · "Engenheiro de Palmas" · botão WhatsApp sticky.

**Sem menu de navegação topo** (mantém foco no segmento). Quem quiser sair vai pelo footer.

---

## 5 · `/painel-renato` — DASHBOARD INTERNO (wireframe)

**URL:** `auraenergy.vercel.app/painel-renato?key=ABC123` (chave hardcoded só Renato sabe — bookmark celular)

**Layout:**

```
┌──────────────────────────────────────────┐
│  🌅 Bom dia, Renato                      │
│  Painel da Aura — só você vê isso         │
├──────────────────────────────────────────┤
│                                           │
│  📞 NOVO CLIENTE NO WHATSAPP?             │
│                                           │
│  Faz essas 3 perguntas (decora):          │
│                                           │
│  1. "É pra casa, comércio, indústria ou   │
│      fazenda?"                            │
│  2. "Qual sua conta de luz mensal?"       │
│  3. "Tem alguma urgência (mudança,        │
│      reforma, expansão)?"                 │
│                                           │
├──────────────────────────────────────────┤
│  AGORA MANDE O LINK CERTO:                │
│                                           │
│  ┌────────────────────────────────────┐  │
│  │ 🏠 É CASA (residencial)            │  │
│  │ Conta R$ 300-700                   │  │
│  │                                     │  │
│  │ /casa            [📋 Copiar link]  │  │
│  │                                     │  │
│  │ Mensagem WhatsApp pronta:          │  │
│  │ ┌────────────────────────────────┐ │  │
│  │ │ "Oi! Mando aqui o link         │ │  │
│  │ │ específico pra residência:     │ │  │
│  │ │ auraenergy.vercel.app/casa     │ │  │
│  │ │ Lá tem calculadora pra você    │ │  │
│  │ │ ver sua economia em 30s.       │ │  │
│  │ │ Qualquer dúvida me chama."     │ │  │
│  │ └────────────────────────────────┘ │  │
│  │ [📋 Copiar mensagem completa]      │  │
│  └────────────────────────────────────┘  │
│                                           │
│  ┌────────────────────────────────────┐  │
│  │ 🏪 É COMÉRCIO                      │  │
│  │ Conta R$ 500-5k                    │  │
│  │ /comercio        [📋 Copiar]       │  │
│  │ [+ Mensagem WhatsApp]              │  │
│  └────────────────────────────────────┘  │
│                                           │
│  ┌────────────────────────────────────┐  │
│  │ 🏭 É INDÚSTRIA                     │  │
│  │ Conta R$ 5k+                       │  │
│  │ /industria       [📋 Copiar]       │  │
│  │ [+ Mensagem WhatsApp]              │  │
│  └────────────────────────────────────┘  │
│                                           │
│  ┌────────────────────────────────────┐  │
│  │ 🌾 É FAZENDA                       │  │
│  │ Hectares + irrigação?              │  │
│  │ /fazenda         [📋 Copiar]       │  │
│  │ [+ Mensagem WhatsApp]              │  │
│  └────────────────────────────────────┘  │
│                                           │
├──────────────────────────────────────────┤
│  ⚡ ATALHOS                                │
│                                           │
│  → Calculadora geral (residencial)        │
│  → Briefing pra cliente que fechou        │
│  → Plano de negócio (privado)             │
│  → Linktree do Insta                      │
│                                           │
└──────────────────────────────────────────┘
```

**Botão "📋 Copiar"** copia URL completa pro clipboard. **"📋 Copiar mensagem"** copia mensagem WhatsApp inteira (URL + texto pronto).

Funciona offline-first (PWA-style). Renato adiciona à tela de início do celular.

---

## 6 · `/links` — LINKTREE (Insta bio)

**URL:** `auraenergy.vercel.app/links` (público)

**Layout:**

```
┌──────────────────────────────────────────┐
│         [logo Aura grande]                │
│                                           │
│         ☀️ AURA ENERGY                     │
│   Engenheiro Solar de Palmas-TO            │
│                                           │
├──────────────────────────────────────────┤
│                                           │
│  Você é...                                 │
│                                           │
│  [ 🏠 Dono de casa     →  /casa ]         │
│                                           │
│  [ 🏪 Dono de comércio →  /comercio ]     │
│                                           │
│  [ 🏭 Indústria        →  /industria ]    │
│                                           │
│  [ 🌾 Fazenda          →  /fazenda ]      │
│                                           │
├──────────────────────────────────────────┤
│  📱 Falar direto comigo                    │
│  [ WhatsApp Aura ]                        │
│                                           │
│  ☀️ Calcular minha economia (30s)          │
│  [ Calculadora geral ]                    │
│                                           │
│  📩 Já decidiu? Pedir orçamento            │
│  [ Briefing técnico ]                     │
│                                           │
└──────────────────────────────────────────┘
```

Visual estilo "linktree" minimalista. Paleta Aura mantida.

**Insta bio:**
```
☀️ Aura Energy
Engenheiro Solar de Palmas-TO
📐 Cálculo honesto, sem pegadinha
👇 Veja qual link bate com você
auraenergy.vercel.app/links
```

---

## 7 · REAPROVEITAMENTO DE COMPONENTES

LP atual tem componentes que viram **reutilizáveis com props**:

| Componente atual | Como vira reutilizável |
|---|---|
| `Hero.tsx` | Recebe prop `segment: 'casa' \| 'comercio' \| 'industria' \| 'fazenda'` — headline/sub trocam dinamicamente |
| `Manifesto.tsx` | Mesmo manifesto Renato (humanizado) — sem mudança |
| `Diferenciais.tsx` | Recebe prop `segment` — mostra os 6 diferenciais customizados por segmento |
| `JanelaFioB.tsx` | Sem mudança (urgência regulatória vale pra todos) |
| `Credenciais.tsx` | Sem mudança (CREA, marcas Tier 1 valem pra todos) |
| `FAQ.tsx` | Recebe prop `segment` — perguntas customizadas por persona |
| `Simulador.tsx` (calculadora) | Versão Casa/Comercio (input direto) · versão Indústria/Fazenda (formulário "Solicitar análise") |
| `Footer.tsx` | Adiciona cross-links pros 4 segmentos |

**Componentes novos a criar:**
- `SegmentadorHero.tsx` — bloco de 4 botões grandes pro hub raiz
- `LinktreeButton.tsx` — botão grande arredondado pro `/links`
- `PainelRenatoCard.tsx` — card com URL + mensagem + botões copiar
- `WhitepaperCTA.tsx` — captura email pra lead magnet (Indústria + Fazenda)

---

## 8 · ORDEM DE IMPLEMENTAÇÃO (4-6h)

### Fase 1 — Estrutura base (1h)
- [ ] Criar layouts `/casa`, `/comercio`, `/industria`, `/fazenda` (esqueleto)
- [ ] Adaptar `Hero.tsx` pra receber prop `segment`
- [ ] Adaptar `Diferenciais.tsx` pra receber prop `segment`
- [ ] Adaptar `FAQ.tsx` pra receber prop `segment`

### Fase 2 — Conteúdo (2h)
- [ ] Headlines/subs/CTAs customizados por segmento (do doc tabela)
- [ ] Cases típicos (mock até ter cases reais)
- [ ] Calculadora Casa (mantém atual)
- [ ] Calculadora Comércio (kWh/mês × tarifa B2B)
- [ ] Formulário Indústria (curto, lead magnet)
- [ ] Formulário Fazenda (curto, lead magnet)

### Fase 3 — Hub + Linktree + Painel (1h)
- [ ] Modificar hub raiz com `SegmentadorHero` grande
- [ ] Criar `/links` (linktree público)
- [ ] Criar `/painel-renato?key=...` (dashboard privado Renato)

### Fase 4 — Cross-links e Footer (30min)
- [ ] Footer com 4 botões cross-link em todas LPs
- [ ] Header sticky WhatsApp em todas LPs
- [ ] Testar fluxos: cliente entra errado → troca segmento

### Fase 5 — Build + Deploy (15min)
- [ ] `npm run build` validação
- [ ] `vercel --prod` deploy
- [ ] Testar todas as 6 URLs no celular

### Fase 6 — Atualizar plano de negócio (1h)
- [ ] Reposicionar Seção 2 (Mercado-alvo): B2B prioridade #1
- [ ] Adicionar Seção 15: Estratégia diferenciada por segmento
- [ ] Adicionar Seção 16: Funil B2B vs B2C separados
- [ ] Cronograma marketing diferenciado

---

## 9 · BACKLOG FUTURO — Tally segmentado (CIC depois)

**Pra rodar depois das LPs prontas:**

CIC cria 4 formulários Tally diferentes (1 por segmento), cada um com perguntas de **qualificação técnica específica**:

### Tally Residencial (5-7 perguntas)
- Conta de luz mensal (R$)
- Tipo de imóvel (casa/apto/sobrado)
- Tem telhado próprio? (sim/não/condomínio)
- Pretende financiar? (à vista/sim/não sei)
- Cidade/bairro
- Telefone + email

### Tally Comercial (7-10 perguntas)
- Tipo de comércio (mercado/restaurante/clínica/posto/academia/outros)
- Conta de luz mensal (R$)
- Horário de operação
- Equipamentos pesados (freezer/AC/iluminação 24h)
- Tem espaço pra painéis (telhado/cobertura/terreno)?
- CNPJ ativo? (Simples/Lucro Real/MEI)
- Telefone + email

### Tally Industrial (10-12 perguntas — mais técnico)
- Tipo de indústria
- Demanda contratada (kW)
- Consumo médio mensal (kWh)
- Conta de luz mensal (R$)
- Horas de operação (turno único/24h)
- Tem engenheiro elétrico próprio?
- Pretende ampliar produção nos próximos 2 anos?
- Tem laudo elétrico atualizado?
- Forma de pagamento preferida (recursos próprios/BNDES/leasing)
- CNPJ + responsável técnico
- Telefone + email

### Tally Rural (10-12 perguntas — agro)
- Tipo de cultura/atividade (soja/arroz/gado/outros)
- Hectares totais
- Tem irrigação? Quantos pivôs?
- Tem secador de grãos?
- Conta de luz mensal (média safra/entressafra)
- Tem rede elétrica trifásica na fazenda?
- Pretende expandir área plantada?
- Forma pagamento (Pronaf/Pronamp/recursos próprios)
- Cidade/município
- Cooperativa que participa
- Telefone + email

**Webhooks Tally:** todos vão pro `/api/lead/qualified` (já existe), com campo `segment` adicional pra diferenciar tratamento.

**Resultado:** Renato recebe email **com lead já qualificado tecnicamente**, pode mandar proposta sem precisar de visita pra entender o que cliente precisa.

---

## 10 · MÉTRICAS DE SUCESSO PÓS-LANÇAMENTO

**1° mês após deploy:**
- Tráfego total: 500-1.000 visitas
- % por segmento: ~50% casa, 30% comércio, 10% indústria, 10% fazenda (esperado inicial)
- Cliques cross-link footer: indica gente entrando errado (alvo: <5%)
- Lead/segmento: pelo menos 1 lead/segmento/semana
- CAC inicial: R$ 30-150 (dependendo segmento e tráfego pago)

**3° mês:**
- Tráfego: 2-5k visitas
- Distribuição muda (B2B sobe à medida que tráfego pago entra)
- Lead qualificado/mês: 30-60
- Conversão lead → reunião: 30-40%
- Conversão reunião → fechamento: 25-35% (B2B mais lento)

---

## 11 · DECISÕES PENDENTES PRA EDUARDO

Antes de começar a codar:

1. ✅ **URLs em PT coloquial** (`/casa`, `/fazenda`) — já validado
2. ✅ **Painel-renato + Linktree** — já validado
3. ⏳ **Whitepapers Indústria + Fazenda** — quem produz? (Verbo escreve, Eduardo finaliza? Ou contratamos?)
4. ⏳ **Cases reais** — Renato tem fotos/dados? Se não, mockup claramente identificado por enquanto
5. ⏳ **Chave do `/painel-renato`** — gerar string aleatória ou Eduardo escolhe? (sugestão: gerar)
6. ⏳ **Domínio próprio `auraenergy.com.br`** — comprar agora ou esperar? (R$ 60/ano)

Manda sinal verde nos 4 últimos pra desbloquear codagem.

---

**Plano feito por:** Verbo (Claude Opus 4.7) + Eduardo Barros · Impulso Digital · 2026-05-06 manhã
**Status:** aguardando validação Eduardo

— λ.v · λ.deep-research · λ.uso-em-massa

---

**Ver também:** [[STATUS-AURA-ENERGY]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
