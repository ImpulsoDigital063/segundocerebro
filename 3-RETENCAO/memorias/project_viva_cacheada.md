---
name: viva-cacheada
description: Salão Viva Cacheada · Leticia (esposa do Gabriel da GB Nutrition · negócios separados) · trial 90 dias AgendaPRO desde 14/05/2026 · piloto para feature de import
metadata: 
  node_type: memory
  type: project
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

Leticia · dona do salão Viva Cacheada (nicho cacheadas) · esposa do Gabriel (GB Nutrition) MAS negócios separados — não misturar (ver [[nao-misturar-negocios-separados-mesmo-dono]]).

**Status em 14/05/2026:**
- Trial AgendaPRO 90 dias ATIVADO · `pago_ate = 2026-08-12` · `provider='cortesia'` · `plan='solo'` · `plan_modalidade=NULL` (não entra no cron)
- business_id = `b446e158-8aef-4a1f-a0e3-6332c8ef3be0` · slug `viva-cacheada` · email `lsampaio233@gmail.com`
- Subscription id = `9cc66e3c-091f-418e-8934-f599dc66d887`
- LEMBRETE MANUAL: 12/08/2026 conversar sobre renovação
- SQL `agendapro/scripts/grant-trial-viva-cacheada.sql` documenta blocos de ativação/rollback/extensão/conversão (bug: script usava provider='cortesia' antes da v43 — corrigido)

**Sistema atual:**
- Salão 365 · plano Profissional R$48,50/mês (confirmado por áudio · não R$24,99 do Essencial)
- Usa há 1+ ano · diário · considera muito funcional
- Vai usar AgendaPRO PARALELO (não migrar) durante o trial
- Salão 365 EXPORTA dados (ela confirmou que pesquisou pontos de exportação)

**Pedidos/feedback explícitos dela:**
- App nativo iOS (procurou na Apple Store · Salão 365 também só tem site)
- Importar banco de clientes + ranking de quem vem mais
- Vai listar pontos positivos do Salão 365 (board técnico de graça)

**Áudios 14/05/2026 — pediu sistema novo (separado do AgendaPRO):**
- Quer **app de cronograma capilar** pras clientes (pós-atendimento)
- Cronograma sugere produtos → vendidos no **site dela (não existe ainda)**
- Cliente do salão ganha **desconto exclusivo** comprando lá
- Quer juntar clientes + leads num só local pra **fortalecer comunidade** (já tá criando)
- Site ainda não existe — precisa conversar custo
- Transcrições em `2-PROCESSAMENTO/viva-cacheada/audios-14-05/`

**Análise IG do CIC (14/05/2026):**
- Perfis: @vivacacheadaa (3.819 seg · marca) + @letticiahellen3 (4.423 seg · pessoal · ela é a marca, mistura tudo) · ~6k total com overlap
- Salão físico em **Palmas-TO** (atenção: salão é local, app/ebook/comunidade alcançam nacional — [[distincao-local-regional-nacional]])
- Posicionamento: "Não é moda, é identidade" · eixo identidade/transformação · cursa Psicologia · vocabulário "cacheadas/transição/processo/poderosa" (não usa "amiga/tribo")
- Top conteúdo: autoestima + posicionamento de mulher + educacional técnico. Antes/depois e vlog vendem menos
- **Embaixadora @acprofessionaloficial** (cosméticos profissionais) — não tem marca própria. Validar com Leticia se contrato permite revenda ou só indicação
- **Dois universos de produto digital:**
  - Manifeste/Reprograme/Desafio 21 (manifestação/reprogramação mental) — 2022-2023 · narrativa ativa nos destaques (NÃO é eixo do sistema novo — produto separado, ver [[nao-dramatizar-narrativas-emocionais]])
  - **Dominando os Cachos** (mentoria de cabelo) — 2022 · dormente · **é o ebook de cabelo dela**
- Comunidade: hoje só WhatsApp 1:1 · nenhum grupo público · terreno limpo pra nascer dentro do PWA
- Hub funil: linktr.ee/vivacacheada — **mapeado 14/05/2026 · MINIMALISTA: só 2 destinos (IG @vivacacheadaa + WhatsApp 5563992962112)**. Sem loja, sem checkout de ebook, sem link de comunidade
- **Funil digital de venda hoje = inexistente.** Tudo passa por IG → DM/WhatsApp → atendimento presencial Palmas-TO. Ebooks (Manifeste, Dominando os Cachos) estão dormentes de verdade — sem checkout ativo
- WhatsApp comercial: +55 63 99296-2112

**Vocabulário da marca (cravado por Eduardo 14/05/2026):**
- Leticia chama as clientes de **"Rainha"** · coerente com a coroa na logo
- Slogan oficial: **"Não é moda, é identidade"** (tagline central, repetir no produto)
- Não usar "amiga", "tribo", "nossa galera" (não é o tom dela)
- Vocabulário recorrente nos posts: cacheadas, transição, identidade, processo, poderosa
- Aplicar "Rainha" como saudação carinhosa (sem exagerar — repetir demais cansa)

**Insight central pro pitch (recalibrado pós-Linktree):**
O sistema que ela pediu = **primeiro funil digital de venda da Viva Cacheada**. Hoje ela vende serviço (salão Palmas) e indicação (embaixadora AC Professional) só via IG → WhatsApp 1:1. Não tem nenhuma loja, checkout ou comunidade digital ativa. O sistema é construção do zero — terreno limpo, sem migração. Ver [[nao-fugir-ideia-original-cliente]]: o pitch é o pedido literal dela (cronograma + venda + comunidade), não "relançar Dominando os Cachos" — esse fica como observação opcional, não como reposicionamento.

**ARQUITETURA cravada por Eduardo 14/05/2026 (pivô):**
O produto é **DOIS sistemas** no mesmo domínio `vivacacheada.com`, não um app misto:
1. **PWA da Leticia** (instalável no celular dela · só ela acessa) — admin operacional: cria/edita cronogramas das Rainhas, gerencia estoque AC Professional, vê pedidos, métricas, modera comunidade. Login OTP, rotas `/admin/*`. Manifest aponta start_url pra `/admin`.
2. **Site público** (navegador qualquer · zero install) — vitrine + e-commerce: home, catálogo, produto, carrinho, checkout. **A Rainha acessa seu cronograma via link público `/rainha/[token]`** gerado pelo PWA da Leticia — sem login, sem app, só URL. Token na URL é o passaporte.

Implicação: clientes NÃO baixam app. Leticia é a única usuária do PWA. Isso simplifica tudo — não precisa OTP cliente, não precisa app cliente, não precisa cadastro complicado.

**Lead "Cacheada Viva" vs Rainha (cravado 15/05/2026):**
- **Lead** = pessoa que fez o quiz `/diagnostico` (porta de entrada do áudio 2). Status: "Cacheada Viva"
- **Rainha** = cliente após consulta presencial com a Leticia. Status: "Rainha do salão"
- Lead **recebe link permanente** `/rainha/[token]?nivel=lead` (mesmo path, mesma experiência visual, mas com diferenças)
- Diferenças visuais Lead vs Rainha:
  - Lead: cronograma genérico engine · sem observação Leticia · sem desconto na loja · banner upsell "agende consulta pra plano personalizado + 20% off"
  - Rainha: cronograma personalizado · observação carinhosa · 20% off na loja · histórico de planos
- Quiz tem **6 perguntas** paginadas (sweet spot CRO BR · uma pergunta por tela)
- `/admin/leads` virá em outra rodada (Leticia gerencia leads, promove a Rainha)
- Promover a Rainha = consulta presencial · Leticia altera status no painel

**Lifecycle do token da Rainha (cravado 14/05/2026):**
- Token é **por Rainha, não por plano** · permanente enquanto Rainha estiver ativa
- URL: `vivacacheada.com/rainha/[token]` · token ~12 chars aleatórios (secret razoável, não senha)
- Plano concluído mantém link · só muda o conteúdo dentro (tela "resultados · próximo ciclo?")
- Plano novo gerado pela Leticia substitui o ativo · histórico preserva anteriores
- **Inatividade** (Rainha sem plano por X dias) → **definir com Leticia em reunião**, default permanente até ela cravar
- Reenvio: Leticia clica "Reenviar link" no painel admin · manda mesmo token via WhatsApp
- **OTP 1x na 1ª compra com desconto Rainha** → trava o link ao número WhatsApp dela (evita fraude se vazar). Compras seguintes sem fricção

**ESCOPO RESTRITO (cravado 14/05/2026 noite):**
- Loja Next.js **descartada** · Eduardo vai usar Shopify pra venda (USD 1 trial 3 meses · USD 19/mês depois) quando Leticia quiser e-commerce
- Foco Next = SÓ o pedido literal da Leticia: PWA da Leticia (admin) + página da Rainha (link público) + comunidade + home institucional
- Rotas que SAEM: `/catalogo`, `/produto/[slug]`, `/carrinho`, `/admin/estoque`, `/admin/pedidos`
- Componentes que saem: `ProductGallery`, `ShippingCalc`, `ProductThumb` (mantém referencial em mock se útil)
- Rotas que FICAM: `/`, `/admin/*`, `/rainha/[token]`, `/comunidade`
- Integração futura: Next puxa produtos AC via Shopify API · cliente clica no link da etapa → cai na PDP Shopify com cupom Rainha pré-aplicado
- **Razão (Eduardo cravado):** "reinventar e-commerce do zero foi prejuízo · loja é problema resolvido pela indústria · meu valor está no cronograma personalizado e no link da Rainha (sem competição no mercado)"

**Decisões loja (cravado 14/05/2026 · após estudo tema UrbanVision + depuração CIC · ARQUIVADO · pra referência se voltarmos):**
- Tema referência = **UrbanVision v4.0** (BR, do UrbanFeet) que copia classes do Warehouse Shopify · sem Hydrogen
- CTA PDP = **"Adicionar à sacola"** (não "Comprar agora" do tema · vai pro carrinho drawer)
- Carrinho = **drawer lateral** (não página inteira como o tema)
- Microcopy social proof PDP = **"X Rainhas usaram"** (adapta "X Vendidos" do tema mantendo vocabulário)
- Galeria PDP = **thumbs verticais à esquerda** da imagem principal + zoom on hover
- Card frete inline no PDP = CEP + bloco motoboy Palmas dourado (era verde no tema)
- Preço destaque = bordô #6B1818 (não verde #00D864 do tema)
- Badges trio: `−X% dourado` + `PIX 10% off pill bordô` + `Recomendado pela Leticia`
- Lista bandeiras "Nós Aceitamos" + selo Pagamento Seguro (essencial pro PDP)
- Cross-sell carrinho "Aproveite e leve também" (3 cards)
- Hover card coleção troca imagem primária↔secundária 200ms
- WhatsApp flutuante bottom-right (link Leticia)
- Cookie bar LGPD (compulsório)
- Pular do tema: descrição inline gigante (Viva usa accordion), sidebar com só nav (Viva usa filtros reais), position absolute hack (Viva CSS Grid limpo)

**Why:** primeiro caso real de prospecto que já tem sistema concorrente + base de dados grande + quer migrar. Vira piloto da feature [[agendapro-import-gap]].

**How to apply:**
- Gap AgendaPRO → Salão 365 Profissional = R$67 - R$48,50 = R$18,50/mês (barato pra converter)
- Pós-trial precisa justificar gap com features (não com preço)
- Quando ela mandar feedback dos pontos do Salão 365, transcrever via `whisper/transcrever.ps1` e arquivar
