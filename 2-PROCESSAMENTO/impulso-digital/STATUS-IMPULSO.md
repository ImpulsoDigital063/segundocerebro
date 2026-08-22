# STATUS-IMPULSO.md

**Produto:** Impulso Digital — Agência de criação digital (marca-mãe do ecossistema)
**Fase:** Operacional · 2 cases fechados (Aura R$1.497 · AgendaPRO Asaas R$67/mês) · 3 leads warm em pipeline (Andressa · Viva · Starteq)
**Data:** 12/05/2026 (segunda · madrugada · sessão Starteq)
**Responsável:** Eduardo Barros

> ⚠️ Doc abaixo é de 12/05 (parcialmente desatualizado). Para a direção atual ver o modelo cravado abaixo.

---

## Evolução 2026 — Software House (cravado 23/06)

A Impulso virou **software house AI-first** (tese: [[softwarehouse]]). Modelo operacional em dois trilhos: **forks dedicados** (`medellin-bar` = núcleo · cada cliente clona pra contas próprias · R$2.997/50% · **caixa**) financiando o **ComandaPRO** (`acai-system` · SaaS food-service multi-tenant · **recorrência**). **Medellín NÃO fechou o fork R$2.997** — se interessou em **R$219/mês**. Decisão: colocá-lo **dentro do ComandaPRO** como tenant e oferecer por mensalidade (recorrência). **Serviço pro começo da semana.** · **Vidal = 1º ComandaPRO**. Plano completo: [[MODELO-NUCLEO-FORK-COMANDAPRO]].

---

## 🔵 ATUALIZAÇÃO 21/08/2026 — AgendaPRO virou o produto mais previsível da casa

**MRR do AgendaPRO: R$693/mês, 9 pagantes** (lido do banco, contagem exata). Em 29/07 eram 7 pagantes e R$499; em maio eram 5 e R$365. **Quase dobrou em 3 semanas, sem prospecção nenhuma** — todo cadastro entrou orgânico.

Isso muda o peso relativo dos negócios: o SaaS recorrente já é a receita mais estável do ecossistema, à frente de qualquer projeto pontual de agência.

🔴 **Dois riscos de caixa abertos, e valem mais que qualquer feature:**
- **Realli Studio Nails** — R$97 vencidos desde 05/08, carência estendida uma vez e expirada. Usa o sistema (37 agendamentos/30d) mas só tem 1 agendamento futuro. Entrou como cortesia e nunca pagou pelo Asaas
- **Studio MOOD** — paga R$97 e teve **zero** agendamento em 30 dias, com a página pública sem horário desde maio. Perfil clássico de cancelamento na próxima cobrança (20/09)

**CAF Fisioterapia:** pagou R$680 de setup em 2x (quitado, por fora do sistema) e ganhou 1 mês de mensalidade de bônus — cortesia até 22/09.

**Lição de método:** o registro não estava acompanhando a execução. O status anterior dizia 7 pagantes/R$499 e a memória de trabalho dizia 5/R$365 — decisão de dinheiro dependendo de lembrança, não de leitura. Toda conversa sobre preço deve começar lendo o banco, não a anotação.

**WhatsApp automático:** motor completo em produção e **desligado** — a entrega esbarra em restrição da Meta no número da plataforma. Detalhe e caminho em [[STATUS-AGENDAPRO]] e no padrão `aceite-nao-e-entrega.md`.

---


## 🔵 ATUALIZAÇÃO 04/07/2026 — dia de integridade financeira nos 3 sistemas

Dia inteiro focado em **valor líquido + fuso** cross-produto:
- **Palace:** líquido em TODAS as telas + reconciliação Marko (provar INTEGRIDADE do nosso lado, não reconciliar cego com a maquininha) + import de **555 clientes** da parceria com clínica (Magrass) tag `import_source='CLÍNICA'` + filtro/badge. Verificado ao vivo. Ver [[STATUS-PALACE]].
- **AgendaPRO:** sweep líquido + fuso **portado do Palace e executado** (6 commits). Achado caro: comissão pagava sobre o BRUTO (Olímpio pagava a mais) → corrigido pro líquido. Fluxo-caixa (motor de data) migrado pra BR. Verificado ao vivo no Olímpio. Ver [[STATUS-AGENDAPRO]].
- **ComandaPRO (acai-system):** estudado — NÃO tem esses bugs (total já nasce líquido; relatório client-side = browser BR). Não se replica.

**λ reforçados:** `λ.valor-liquido` (receita E comissão sempre líquido) · `λ.fuso-vercel-utc` (server Vercel UTC bucketiza dia/hora errado; reporting client-side não sofre) · reconciliação-maquininha (é subconjunto — não vê dinheiro, relógio D+1). Playbook reutilizável: **`PLAYBOOK-FINANCEIRO-FUSO-E-LIQUIDO.md`** (no repo AgendaPRO).

---

## O que é

Agência de criação digital. Landing pages, lojas Shopify, sites Next.js, consultoria. Núcleo do ecossistema — tudo orbita aqui. Usada como porta de entrada pros outros produtos (AgendaPRO, MPN-On, RadarPRO quando abrir).

**Site:** impulsodigital063.com
**CNPJ:** 64.585.949/0001-83
**Repositório:** `C:/Users/DELL/impulso-digital-nextjs` · GitHub: `ImpulsoDigital063/impulso-digital-nextjs`

---

## 4 ofertas na prateleira

| Oferta | Ticket | Prazo | Entregáveis principais |
|---|---|---|---|
| **Landing page** | R$499-699 | 5-7 dias | LP Next.js, hospedagem vitalícia, blog SEO (3 posts), WhatsApp integrado |
| **Loja Shopify** | R$599-899 | 7-10 dias | Loja Shopify, Melhor Envio + motoboy, Yampi checkout, 20 produtos, tema MPN |
| **Site Next.js** | R$1.200-1.500 | 10-15 dias | Site multi-página, CMS leve, blog, SEO on-page, analytics |
| **Consultoria** | R$300-500 | 1-2 sessões | 1-2 sessões estruturadas pra destravar lançamento/conversão |

---

## Site próprio (prova viva — 16 componentes)

Hero · Sobre · 4 Serviços · Cases · Processo (4 passos) · Depoimentos · FAQ · Blog SEO · CTA WhatsApp · Footer · Planos · Garantia · Diferenciais · Time · Contato

**3 posts SEO no blog:**
1. Como escolher entre LP, loja e site pra seu negócio
2. Por que loja física precisa ter Shopify (caso UrbanFeet)
3. O erro que quebra a conversão da sua LP (e como corrigir)

---

## Infraestrutura de venda (ferramentas internas)

| Ferramenta | Função |
|---|---|
| **RadarPRO** | Prospecta + gera playbook + envia WhatsApp |
| **ImpulsoDesign** | Gera criativos no padrão Impulso (orgânico + tráfego) |
| **Custom GPT "Agente Eduardo - Marketing"** | Tira dúvida de copy e estratégia em tempo real |
| **WhatsApp Business 63 99292-0080** | Número oficial de suporte (ativado 16/04) |
| **MEGA-CLAUDE.md** | Memória do ecossistema em cada atendimento |

---

## Playbook de venda (4 passos)

Arquivo completo: `4-EXPORTACAO/playbooks/PLAYBOOK-IMPULSO-DIGITAL-VENDA.md`

1. **Prospecção via RadarPRO** — lead quente + playbook 11 seções pronto
2. **Abordagem WhatsApp** — copy do playbook personalizado, contato no melhor horário
3. **Consultoria grátis** (8 perguntas estruturadas) + proposta enxuta
4. **Fechamento** com urgência real (3 vagas no mês) + follow-up D+3/5/7

---

## Cases (prova real)

| Cliente | Valor | Observação |
|---|---|---|
| **UrbanFeet** | R$37.705,24 (90d) / +1.600 pares (3 anos) | Prova máxima — dropshipping nacional |
| **Gabriel / GB Nutrition** | R$300 (consultoria 15/04) | 1ª venda da semana — vira case gravado |
| **evsuplementos** | — | Loja Shopify completa |
| **criativosdoceu** | — | Ver `project_criativosdoceu.md` (memória) |
| **Impulso Digital 60+ clientes histórico** | — | Base total desde início |

---

## Leads em andamento (status 12/05)

| Nome | Contato | Nicho | Status | Próximo passo |
|---|---|---|---|---|
| **Aura Energy** (Renato Edson) | (63) 9 9268-8852 · Palmas-TO | Energia solar fotovoltaica | 🟢 **CASE-1 FECHADO** R$ 1.497 (06/05/2026) · em operação | Próxima frente: Insta+tráfego R$ 1.997/mês. Status: `STATUS-AURA-ENERGY.md` |
| **Andressa Kupferman** (Daniel · marido) | via network Renato (08/05) | Podologia + escola Raras Clinic Academy · Palmas | 🟡 **Lead-3 warm** · estudo profundo feito · plataforma Kupferman backend v0.1 deployada · sem pitch ainda | Aguardar entrada formal · Status: `STATUS-ANDRESSA.md` |
| **Viva Cacheada** (esposa do Gabriel/GB) | via network Gabriel | Salão cabelos cacheados Palmas | 🟡 **Lead-4 quente** · oferta 3 meses grátis AgendaPRO em troca de divulgação · reunião 12/05 com SQL trial pronto | Ativar trial 90d ao vivo · `scripts/grant-trial-viva-cacheada.sql` |
| **Starteq Tocantins** (Júnior) | (63) 99252-8619 · 104 Sul Palmas-TO | Loja PC gamer + assistência técnica · @starteq_to · 9k seg | 🟢 **Lead-5 quente · SISTEMA EM BUILD** · 3 CICs feitos · Next.js 16 deployando · 8-step montador funcional · API consumível IA · `github.com/ImpulsoDigital063/Starteq` | Eduardo busca PC + mostra ao vivo · plugar Vercel · marcar reunião formal. Status: `STATUS-STARTEQ.md` |

**Status canônico Aura:** [`2-PROCESSAMENTO/aura-energy/STATUS-AURA-ENERGY.md`](../aura-energy/STATUS-AURA-ENERGY.md)

**LP entregue:** https://auraenergy.vercel.app
**Stack:** Next.js 16 + React 19 + Tailwind v4
**Modalidades propostas:** 7 opções (LP R$799 / Tráfego R$497+R$597 / Conteúdo R$697 / Site R$1.297 / RadarPRO B2B R$997 / **Combo Decolagem R$1.997/mês** / **Parceria comissão 5%**)

---

## Padrões validados (do ecossistema)

### Padrões de venda
- Consultoria grátis + urgência real = 95% conversão com lead quente
- Prototype funcional > mockup estático (Next.js rodando fecha mais)
- Valor empilhado antes do preço (mostrar concorrente primeiro)
- Indicação + brevidade (8 perguntas > 25)
- Duas camadas de preço sempre funciona
- Influenciador local relevante > grande genérico

### Padrões de LP cravados em 01/05/2026 (memory feedbacks)
1. **SVG sempre, NUNCA emojis** em LPs/criativos premium
2. **Imagens reais, nunca vetor genérico** estilo unDraw/clipart
3. **Movimento e modernidade obrigatório em LP tech** — mesh animado, pulsos circuito, fade scroll, glow, marquee. Estática = amador.
4. **Light premium é alternativa válida** ao dark tech default — pra empresa solar/luz/sol o off-white quente faz sentido temático
5. **Carta branca em projetos do segundo cérebro** — não pedir autorização entre etapas em LPs/criativos, decidir e entregar

Todos registrados em `3-RETENCAO/padroes/` ou auto-memory feedback.

---

## Pendências (próximos 7 dias — atualizado 01/05)

- [ ] **Aura Energy follow-up D+1 a D+7** — mensagem casual amanhã (02/05), ajustes na LP D+2, material útil D+4-5, pergunta direta D+7
- [ ] **Aplicar correções no Hero das LPs Impulso** (lista do Eduardo, pendência da semana anterior)
- [ ] Iniciar gravação do case Gabriel (estúdio na sala)
- [ ] Abordar 10-15 leads quentes do RadarPRO
- [ ] Fechar 2-3 projetos via RadarPRO + playbook
- [ ] Publicar case Gabriel no Instagram + LP (prova social)
- [x] **1º cliente AgendaPRO pagante: Olímpio Barbearia** (Solo R$67 PIX/Asaas) · ciclo de cobrança validado na prática (venceu 11/06 → carência → bloqueio → pagou 15/06). 2º pagante: Studio MOOD/Izanara (Equipe R$97). Ver [[STATUS-AGENDAPRO]].

---

## Projeção 2026 (pipeline mensal)

- 7 lojas Shopify/mês × R$599-899 = R$4k-6k/mês
- 3 LPs/mês × R$499-699 = R$1,5k-2k/mês
- 1 site Next.js/mês × R$1.200-1.500 = R$1,2k-1,5k/mês

**Total projetado Impulso Digital 2026: R$50k-126k**

---

## Ambição no ecossistema

Impulso Digital é a porta de entrada. Cliente chega por LP/loja/site, vira:
- Cliente AgendaPRO (se é negócio com agendamento)
- Aluno MPN-On (se quer aprender a replicar)
- Lead de depoimento pro ImpulsoDesign quando virar SaaS

**Meta:** cada cliente Impulso toca pelo menos 1 outro produto do ecossistema.

---

## Próxima atualização

Quando: Aura Energy fechar (qualquer modalidade) OU final do follow-up D+7 OU 3 clientes fechados via RadarPRO.
Atualizar: status do Aura, leads ativos, cases, conversão por canal, ajustes no playbook.

---

**Ver também:** [[EDUARDO-BARROS]] | [[MEGA-CLAUDE]] | [[STATUS-RADARPRO]] | [[STATUS-AGENDAPRO]] | [[STATUS-AURA-ENERGY]]
**Playbook completo:** [[PLAYBOOK-IMPULSO-DIGITAL-VENDA]]
**Diferenciais venda AgendaPRO:** [[AGENDAPRO-DIFERENCIAIS-VENDAS]]

**Cases ativos:** [[STATUS-AURA-ENERGY]] (case-1 fechado · 06/05) · [[STATUS-ANDRESSA]] (lead-3 warm) · [[STATUS-STARTEQ]] (lead-5 quente · janela 12/05)
**Hubs:** [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]]
**Conhecimento:** [[IMPULSO_CORE_SYSTEM_V2]] · [[IDENTIDADE-IMPULSO-DIGITAL]] · [[MANUAL-FIT-CLIENTES-IMPULSO]] · [[MANUAL-VENDAS-5-LIVROS]]
**Templates:** [[PADRAO-PLANO-NEGOCIO-IMPULSO]] · [[TEMPLATE-PLANO-NEGOCIO-MARKETING]] · [[CHECKLIST-PESQUISA-CLIENTE-PLANO]]
