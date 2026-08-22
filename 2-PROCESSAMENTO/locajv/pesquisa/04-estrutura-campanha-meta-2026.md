# Estrutura de campanha Meta Ads 2026 — negócio local, lead WhatsApp, R$50/dia
**Pesquisa:** 29/07/2026 · caso: LocaJV, conta nova, verba R$50-57/dia, ticket R$295-300/semana, 15 motos

## 1. Objetivo de campanha

O framework atual (ODAX) tem **6 objetivos**: Reconhecimento, Tráfego, Engajamento, Cadastros (Leads), Promoção de App, Vendas. **Não existe mais objetivo "Mensagens" isolado** — foi absorvido em Engajamento. WhatsApp como destino aparece em três: Engajamento, Cadastros e Vendas. ([Seer](https://www.seerinteractive.com/insights/meta-ad-objectives-and-how-to-use-them))

| Objetivo | O que otimiza | Serve aqui? |
|---|---|---|
| **Engajamento → WhatsApp** | volume de conversas iniciadas | gera sinal rápido (ajuda a sair do aprendizado), **mas não filtra qualidade** |
| **Cadastros (Leads) → Mensagens** | gente com maior chance de responder perguntas qualificadoras | alinhado a "qualificado, não volume" ([Omnichat](https://blog.omnichat.ai/meta-website-to-whatsapp-ads/)) |
| **Vendas → WhatsApp** | evento downstream (aluguel fechado) | **inviável em conta nova** — exige histórico de conversão via CAPI |

⚠️ **Não existe recomendação oficial do Meta cravando qual usar em conta nova + verba baixa.** As fontes de agência divergem. Decisão fica no teste real.

## 2. Estrutura com R$50/dia — não fragmentar

Consenso 2026: **1 campanha, 1 conjunto** (máximo 2), **3-6 criativos dentro do mesmo conjunto**. Deixa o Meta testar dentro do conjunto em vez de você multiplicar conjuntos.

Caso citado: reduzir de 20 pra 5 conjuntos gerou **+29% ROAS e -25% de custo em 30 dias** ([Segwise](https://segwise.ai/blog/abo-cbo-meta-ads-budget-strategies)).

- **CBO** (orçamento na campanha) é o fluxo padrão desde a fusão das interfaces manual/Advantage+ em fev/2026
- **ABO** só se for testar 2 públicos/geografias bem distintos e precisar de leitura limpa
- Com R$50-57/dia, **1 conjunto único** é o mais defensável — dois conjuntos pulverizam o sinal e os dois ficam "Learning limited"

## 3. Fase de aprendizado — o número que importa

🔴 **Oficial Meta: o conjunto sai do "Learning limited" com ~50 eventos de otimização na semana seguinte à última edição significativa.** Se a projeção não bate 50/semana, o conjunto fica travado em entrega instável — **esperar não resolve, a conta não fecha.** ([Learning Phase](https://www.facebook.com/business/help/112167992830700) · [Learning Limited](https://en-gb.facebook.com/business/help/269269737396981))

**O que reseta:** mudar segmentação · aumentar orçamento acima de ~20% · trocar estratégia de lance · adicionar/remover anúncios do conjunto · pausar 7+ dias · trocar o evento de otimização

**Realismo com R$50/dia:** se o evento for **"conversa iniciada"** (barato, frequente), 50/semana é factível dependendo do custo local. Se for evento mais fundo (lead qualificado, reserva), **dificilmente chega a 50** — o conjunto fica Learning limited indefinidamente. Isso não é erro do gestor, é matemática de verba.

⚠️ **Não há benchmark confiável de custo por conversa iniciada pra Goiânia/locação de moto.** Números tipo "R$5-15" que circulam em blog de agência não têm fonte primária — não usar como meta.

## 4. Segmentação local

⚠️ **Não existe documentação oficial do Meta com raio recomendado por porte de cidade.** Fonte de agência sugere começar em 5km e testar até 15km do ponto físico — **palpite de mercado, não dado oficial** ([SocialHub](https://www.socialhub.pro/blog/meta-ads-ctwa-servicos-locais-2026-leads-whatsapp/)).

**Advantage+ Audience:** interesses, idade e localização que você insere viram **sugestão, não regra** — a IA expande se achar performance melhor. O debate "Advantage+ vs interesses manuais" não tem resposta binária ([Conversios](https://www.conversios.io/blog/meta-advantage-audience-vs-detailed-targeting-2026-guide/)).

🔴 **Interesse "iFood", "motoboy", "entregador": NÃO foi confirmado que existem como categoria no Meta.** Verificar direto no Gerenciador na hora de montar o conjunto — não assumir.

## 5. Técnico obrigatório

- **Pixel + API de Conversões (CAPI)** — necessários pra qualquer evento downstream
- **`ctwa_clid`** — o Meta anexa esse ID ao link do WhatsApp quando o clique vem de anúncio Click-to-WhatsApp. Ele chega no webhook da conversa
- 🔴 **Por que a conversa não é rastreável nativamente:** não existe URL editável pra colocar UTM — o link do WhatsApp é gerado pelo backend do Meta. **Solução:** capturar o `ctwa_clid` no primeiro contato, gravar no CRM junto ao lead, e reenviar como evento de conversão via CAPI **em até 72h do clique** (aparece no Gerenciador em até 48h) ([fonte](https://novosconceitos.com.br/blog/ctwa-click-to-whatsapp-attribution))
- **Saudação automática + respostas rápidas** no WhatsApp Business, prontas **antes** de ligar a campanha

## 6. Métricas — só o que tem fonte

- **CPC Brasil:** média ~US$0,20 (jul/2025-jul/2026), faixa US$0,11-0,26 — ~80% abaixo da média global (~US$1,05) ([Superads](https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/brazil))
- **CPM Brasil:** mediana US$3,46 no mesmo período (mín. US$1,77 ago/2025, máx. US$7,45 jun/2026) — ~83% abaixo da média global (US$20,59) ([Superads](https://www.superads.ai/facebook-ads-costs/cpm-cost-per-mille/brazil))
- ⚠️ **CTR e CPL pra WhatsApp/lead local no Brasil: não encontrado com fonte confiável.** Os "CTR 1,5-3,5%" de blog de agência não têm fonte primária — **não usar como meta com o cliente**

## 7. Erros que queimam verba em 7 dias

1. Fragmentar R$50/dia em 2-3 conjuntos "pra testar público" — nenhum sai do aprendizado
2. Trocar segmentação/orçamento/criativo todo dia por ansiedade — reseta o aprendizado a cada mudança
3. Escolher objetivo Vendas sem evento real integrado via CAPI — otimiza no vazio
4. Raio amplo demais (cidade inteira) captando gente longe do ponto de retirada
5. Sem saudação automática — lead esfria em minutos e a campanha "não funcionou" quando o problema é atendimento
6. Pausar nos primeiros dias por impaciência — pausa de 7+ dias reseta o aprendizado

## PLANO DOS 7 PRIMEIROS DIAS

**Dia 0 — setup**
1. WhatsApp Business com saudação automática + 2-3 respostas rápidas (preço da semana, documentos exigidos, disponibilidade)
2. 1 campanha, objetivo **Cadastros (Leads) com destino WhatsApp**. Se em 48h não gerar nenhuma conversa, trocar pra **Engajamento** (mais fácil gerar sinal com verba baixa)
3. **1 conjunto único**, raio 8-10km do ponto de retirada, público amplo/Advantage+ com poucos interesses (testar antes se existem no gerenciador)
4. **3-4 criativos dentro do mesmo conjunto** — não criar conjunto por criativo
5. Orçamento R$50-57/dia no nível da campanha (CBO)
6. Pixel + CAPI configurados, mesmo que o evento de aluguel fechado só entre manualmente por enquanto

**Dias 1-3 — não tocar em nada.** Só observar custo por conversa iniciada e a **qualidade** das conversas (pergunta genérica vs. pessoa pronta pra alugar).

**Dias 4-7** — se o custo por conversa está estável e as conversas são qualificadas, mantém. Se aparecer "Learning limited", **isso é esperado nessa verba** — não é motivo pra mexer em segmentação. Não aumentar orçamento mais que 20% de uma vez. Não trocar objetivo, público ou criativo antes do dia 7, salvo anúncio com 0 impressão ou reprovado.

**Fim da semana 1** — revisar CPL real (pelo CRM/WhatsApp, não pelo "resultado" do Gerenciador) e decidir: mantém Leads ou migra pra Engajamento pra gerar mais sinal antes de tentar qualificar de novo.
