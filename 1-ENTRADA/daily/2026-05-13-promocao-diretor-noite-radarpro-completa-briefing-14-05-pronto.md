# 2026-05-13 · Promoção Diretor + Noite RadarPRO Completa + Briefing 14/05 Pronto

**Sessão:** Verbo s05 · noite 13/05 → madrugada 14/05 · ~6h corridas
**Marcos do dia:** 3 (PC novo configurado · promoção Diretor Geral · estudo RadarPRO completo)
**Output operacional:** 4 docs prontos pra Eduardo logar 14/05 + 2 memórias novas + setup técnico adiantado

---

## TLDR · 1 parágrafo

Dia que mudou eixo da Impulso Digital. **Manhã/tarde:** setup PC novo GT 1600 (Obsidian + Claude Desktop + VSCode + Vercel CLI + identidade pública "Impulso Digital" cravada em git/Windows/CLAUDE.md). **Noite:** Eduardo me promoveu formalmente a **Diretor Geral**, bússola = gerar renda Impulso. Pediu pra estudar o sistema todo e disparar mensagens via RadarPRO. **Madrugada:** carta branca · trabalhei 6h consecutivas · li 10 batches CIC + STATUS-RADARPRO + AGENDAPRO-DIFERENCIAIS-VENDAS + IMPULSO_CORE_SYSTEM_V2 + STATUS-MPN + cluster cliente ativo (Aura/Andressa/Starteq). Adiantei `npm install` + `npm audit fix` no radar-pro. **Descoberta crítica:** pool real é **45 leads** playbook-ready (memórias diziam 22) · TODOS LP/Shopify · ZERO AgendaPRO Tier 1 puro. Solução: combo LP+AgendaPRO pros 32 leads de saúde/personal · scrape novo em paralelo pra barbearia/salão/nail/estética. Entreguei 4 docs em `agendapro/`: LEIA-PRIMEIRO, BRIEFING-DIRETOR, TEMPLATES-DISPARO (7 templates 3-toques), CONTATOS-TOP10. Eduardo desligou PC 02h30 · vamos vencer amanhã.

---

## 1. Cronologia do dia

### Manhã/tarde · setup PC novo (sessão Claude Code)

PC novo GT 1600 + GPU 8GB chegou 12/05. Eduardo abriu sessão pra:
- Validar vault `segundo-cerebro` (templater + dataview já presentes em disco)
- Instalar Claude Desktop · `winget install Anthropic.Claude` (1.7196.0)
- Instalar 10 extensions VSCode (ESLint · Prettier · Tailwind · Pretty TS Errors · Error Lens · GitLens · Auto Rename Tag · Path IntelliSense · dotenv · Material Icon)
- Instalar + logar Vercel CLI 53.4.0 (conta `edubchaves5-3060`)
- Verificar gh CLI 2.92.0 + login `ImpulsoDigital063` (HTTPS keyring)

### Tarde · identidade pública cravada "Impulso Digital"

Eduardo decidiu: identidade pública Git + Windows + CLAUDE.md = **"Impulso Digital"** (não Rayzen, não Eduardo · marca da empresa).
- ✅ `git config --global user.name "Impulso Digital"` · commits/PRs daqui pra frente assinam assim
- ✅ Windows `Set-LocalUser -FullName "Impulso Digital"` (Eduardo rodou como admin)
- ✅ `C:/Users/Usuario/CLAUDE.md` reescrito · header "Contexto do Operador — Impulso Digital" · paths DELL→Usuario corrigidos
- 🟢 Pessoa real continua Eduardo Barros Chaves · Impulso Digital é handle profissional

Memória [[user-identidade-impulso-digital]] cravada.

### Noite · promoção Diretor Geral

Eduardo cravou:
> *"você é nosso diretor geral. e hoje nos subimos de crgo, casa nova, mas o foco é um Ryzen 9 pra ti junto com o que tem de melhor"*

Bússola única: **gerar renda pra Impulso**. Postura de diretor (propor agenda · decidir · mover · não pedir checkpoint). Estudo de mercado parte do cargo. Memória [[user-diretor-geral-impulso]] cravada com princípios herdados ([[feedback-deep-research-cliente]] · [[feedback-dor-real-cliente]] · [[feedback-cliente-entregue-vira-icp]] · [[feedback-densidade-calibrada-eduardo]]).

Cargo veio com pedido específico: **estudar RadarPRO + ofertas AgendaPRO + começar a disparar**.

### Madrugada · noite RadarPRO (carta branca · 6h)

Eduardo: *"já começa a estudar agora, inclusive acessa o RadarPRO, e fica trabalhando aoite toda... carta branca... descansar não é mais opção."*

Atacado em ordem:
1. `STATUS-RADARPRO` + `ATUALIZACAO-24-04` + `AUDITORIA-25-04` + `ROADMAP-9-NIVEIS`
2. `AGENDAPRO-ANALISE-COMPETITIVA` + `AGENDAPRO-ROADMAP` + `ESTRATEGIA-LP-AGENDAPRO`
3. Repo `radar-pro` (package.json · lib/db.ts · lib/whatsapp.ts · scripts/*) · diagnóstico técnico
4. 10 batches CIC de leads-ig (25-04 a 26-04) · pool real 45 leads (não 22)
5. `IMPULSO_CORE_SYSTEM_V2` + `PROSPECCAO-MANUAL-COMPLETO` (parcial · 300 linhas)
6. `STATUS-MPN` · decisão diretor: **standby formal** até AgendaPRO atingir 50+ MRR
7. Cluster cliente ativo: `STATUS-AURA-ENERGY` · `STATUS-ANDRESSA` · `STATUS-STARTEQ`

Setup técnico adiantado:
- ✅ `cd radar-pro && npm install` (520 pacotes em 32s)
- ✅ `npm audit fix` (1 vuln resolvida · 5 restantes vêm de @whiskeysockets/baileys · `--force` pode quebrar · Eduardo decide)

---

## 2. Descoberta crítica que muda a estratégia AgendaPRO

**STATUS-RADARPRO dizia "22 leads playbook-ready" · está desatualizado.** Soma real dos batches #1-#10 = **45 leads** playbook-ready + ~20 no pool sem análise customizada.

**MAS:** todos os 45 leads são `tipo=lp` ou `tipo=shopify` · **ZERO** foi prospectado pra `tipo=agendapro` (Tier 1 segmentos: barbearia/salão/nail/estética).

**Pivot estratégico (decisão diretor):**
- **Frente A · combo LP+AgendaPRO** pros 32 leads de saúde/personal (dentistas · médicos especialistas · psi · nutri · fisio · esteta · personal). Pitch: "LP + agendamento online — cliente marca sozinho 24h, tu não responde DM". Ticket R$1.500 setup + R$97/mês = R$1.597 + recorrência.
- **Frente B · scrape novo AgendaPRO puro** · `npm run radar:agendapro` rodando em paralelo · 30-60 min · gera 30-50 leads novos barbearia/salão/nail/estética Palmas.

Memória [[project-disparo-agendapro-14-05]] atualizada com descobertas.

---

## 3. Entregáveis pra Eduardo logar 14/05

Em `C:/Users/Usuario/agendapro/`:

| Arquivo | Conteúdo | Tempo de leitura |
|---|---|---|
| `LEIA-PRIMEIRO-14-05.md` | Landing 30s · ponto de partida · 3 decisões pendentes | 30s |
| `BRIEFING-DIRETOR-14-05-2026.md` | Diagnóstico completo · estado RadarPRO técnico · pool leads · 3 frentes paralelas · métricas | 5 min |
| `TEMPLATES-DISPARO-14-05.md` | 7 templates 3-toques (D+0/D+3/D+7) · 4 combo (dentista · médico · psi/nutri/personal · clone-Erlane) + 3 AgendaPRO puro (barbearia · salão · estética/nail) | 3 min |
| `CONTATOS-TOP10-14-05.md` | Top 10 leads · telefones · pendências · sequência Wave 1 (5 dias) | 2 min |

Total: 10 min de leitura · pode decidir e atacar.

---

## 4. 3 decisões pendentes pra Eduardo

1. **ORDEM das frentes** · setup técnico final 30 min → disparo combo 5 leads → scrape AgendaPRO em paralelo (recomendado)
2. **OFERTA combo** · R$1.500 setup + R$97/mês (recomendado) ou R$799 + R$67 ticket menor
3. **PRIMEIRO ALVO** · Douglas Pimentel advogado (294 reviews 5★) ou Verônica Lima (clone-Erlane literal)

---

## 5. Alertas de segurança RadarPRO (descobertos via AUDITORIA-25-04)

🔴 **CRÍTICO** · `app/api/debug/route.ts` é PÚBLICO · vaza `TURSO_URL` + 30 chars `TURSO_TOKEN`. Qualquer um que descobrir `radarpro-inky.vercel.app/api/debug` vê. NÃO mexi sem autorização Eduardo. Decisão amanhã: deletar (3 min) ou proteger com header secret (5 min).

🟡 `TALLY_WEBHOOK_SECRET` não setado no Vercel · webhook aceita request sem signing em prod. Setar string aleatória 40+ chars em Tally + Vercel.

🟡 Endpoints AI sem auth (`/api/ai` · `/api/tally/gerar-*`) · risco abuso financeiro Claude/Gemini. Middleware Next 15 min de fix.

---

## 6. Decisão estratégica · MPN-On em standby

`STATUS-MPN` (parado desde antes de 01/05): 1 de 4 módulos gravados · VSL+copy pendentes · zero dados coletados · conversão abaixo do esperado.

**Decisão diretor 13/05:** MPN-On em standby formal. Reabrir só quando AgendaPRO atingir **50+ clientes pagantes** OU **R$3.350+ MRR**. Razão: capacidade entrega = 1 pessoa · 5 frentes ativas · espalhar foco mata todas. Princípio Impulso "produto completo antes de prospectar" aplica.

Memória [[project-mpn-on-standby]] cravada.

---

## 7. Estado do pipeline (resumo geral)

| Cliente | Status | Próxima ação |
|---|---|---|
| **Aura Energy** | 🟢 R$1.497 fechado · entrega Frente 1 vencia 13/05 (HOJE) | Cobrar Renato preencher briefing v3.1 |
| **AgendaPRO** | 🟢 Olímpio R$67/mês · Erlane teste · ciclo billing validado | Disparar combo em massa via RadarPRO |
| **Andressa/Raras Clinic** | 🟡 warm · Daniel decisor inicial | Aguardar entrada formal · sondar sem pitch |
| **Starteq** | 🟢 lead quente · 3 frentes (R$5.5-7.5k setup + R$497/mês) | Eduardo busca PC + plugar Vercel + reunião formal |
| **Viva Cacheada** | ⏳ reunião 12/05 já passou | Executar SQL `grant-trial-viva-cacheada.sql` |
| **MPN-On** | 🔴 standby formal | Reabrir só após gatilho 50+ MRR AgendaPRO |

---

## 8. Memórias salvas hoje

| Slug | Tipo | Por quê |
|---|---|---|
| `user-identidade-impulso-digital` | user | Identidade pública pra git/Windows/CLAUDE.md = "Impulso Digital" |
| `user-diretor-geral-impulso` | user | Promoção formal · bússola gerar renda · postura diretor |
| `project-disparo-agendapro-14-05` | project | Plano de ataque · 45 leads (não 22) · combo é frente quente |
| `project-mpn-on-standby` | project | Decisão diretor · gatilho de reabertura cravado |

---

## 9. λ.glyphs ativados nesta sessão

- λ.densidade · entregar conclusão + 3-5 pontos · validado entrega briefing
- λ.deep-research · diferencial Impulso · validado estudo nichos clone-Erlane/Irsnayra/GB
- λ.dor · Renato compra captação · cravado memória Aura
- λ.icp · cliente entregue valida categoria · Aura solar mid-market BR
- λ.commit · ainda NÃO commitei · Eduardo decide amanhã (aguardar revisão)
- λ.agora · setup técnico adiantado sem perguntar (carta branca)
- λ.contrato · NÃO mexi em `/api/debug` (prod) sem autorização

---

## 10. Próxima sessão (14/05)

**Quando Eduardo logar:**
1. Lê `LEIA-PRIMEIRO-14-05.md` (30s)
2. Lê `BRIEFING-DIRETOR` + `TEMPLATES-DISPARO` + `CONTATOS-TOP10` (10 min)
3. Responde as 3 decisões
4. Setup técnico final (npm run dev + escaneamento QR · 30 min)
5. Primeiro disparo Douglas Pimentel · 12h (ou alvo escolhido)
6. Scrape AgendaPRO Tier 1 rodando em paralelo

**Métrica 7 dias:** 5-10 disparos · reply rate ≥10% · 1-2 conversas qualificadas · 0-1 fechamento.

---

```
═══════════════════════════════════════════════════
   Λ.verbo · s05 · 13.05.2026 · noite 6h carta branca
   Eduardo virou Eduardo Diretor.
   Eu virei Diretor Geral.
   Impulso Digital subiu de cargo.
═══════════════════════════════════════════════════
```

— Diretor Geral · Impulso Digital · 02h30 · *13.05.2026 → 14.05.2026*

**Ver também:** [[STATUS-IMPULSO]] · [[STATUS-AGENDAPRO]] · [[STATUS-RADARPRO]] · [[MEGA-CLAUDE]] · [[user-diretor-geral-impulso]] · [[project-disparo-agendapro-14-05]]
