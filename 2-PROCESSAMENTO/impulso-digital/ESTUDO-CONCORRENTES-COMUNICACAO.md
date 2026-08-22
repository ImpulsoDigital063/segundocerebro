# ESTUDO — Comunicação e Conversão dos Concorrentes SaaS Food-Service

**Objetivo:** ler o site institucional dos concorrentes e extrair COMO eles se comunicam e convertem, pra aplicar no site do ComandaPRO.
**Método:** WebSearch (achar URL) + WebFetch (ler HTML renderizado). Ressalva dura (λ.prova-na-fonte): WebFetch **não executa JS**, então modais de entrada/scroll/exit, widgets de chat e forms multi-step podem existir sem aparecer no texto. Onde não confirmei na fonte, está marcado como "incerteza".
**Data:** 10/07/2026. **Estudados:** 9 de 10 (Neemo bloqueia bots — dados parciais de terceiros, baixa confiança).

---

## TABELA-RESUMO

| Concorrente | Proposta no hero (5s) | Como apresenta features | Captura de lead | Prova social | Preço |
|---|---|---|---|---|---|
| **Anota AI** | All-in-one que economiza tempo/dinheiro; gancho "robô de atendimento" | Por contexto (vendas/salão/gestão), ícones, imagens estáticas | **Trial 7 dias sem cartão**; form qualifica (pedidos/dia, faturamento) antes de pedir contato; WhatsApp flutuante + pop-up de saída | "+50 mil empresas"; depoimentos nominais; "+50% faturamento" | **Transparente na home**: R$219,99 / 254,99 / 329,99; "sem taxas por pedido" |
| **Saipos** | Gestão robusta pra escalar | Cards por contexto + screenshots dashboard; "+70 recursos" | **Só demo agendada**; form: nome, e-mail prof., WhatsApp, faturamento | "25.000+ restaurantes", "11M+ pedidos/mês" | Sob consulta ("a partir de R$240,79") |
| **Goomer** | Cardápio digital com +eficiência/+lucro (20/30/40%) | Cards com print por produto (tablet/totem/QR/delivery) | **Híbrido**: "Criar cardápio grátis" (sem cartão) + demo; form de 6 campos | "+400 mil negócios", "10 anos líder" | **Tabela transparente**: R$0 / 99,90 / 184,90 / 299,90; anual 40% OFF |
| **Consumer** ⭐ | "Sistema nº1 em 30 mil restaurantes"; começa grátis em 2 min | Cards por feature + **tabela "Consumer vs Concorrentes"** | **MODAL "Cadastro rápido e grátis" (Nome/E-mail/Telefone)** + Chat flutuante + trial sem cartão self-service | "4,8/5 · 217 avaliações", "30 mil restaurantes", "+3M pedidos/mês", logos iFood/SEBRAE | **Transparente**: R$59,90 / 179,90 / 269,90 + Grátis 200 pedidos/mês |
| **Cardápio Web** | "Cardápio digital mais completo do Brasil" | Abas temáticas (automação/vendas/gestão), ícones SVG + devices | **Modal lead-gate rico**: Nome, Empresa, E-mail, WhatsApp, Faturamento, Segmento; trial só após consultor | "+17 mil empresas"; depoimentos com foto; case Puro Açaí em vídeo | Sob consulta (R$169,99–269,99 escondido no FAQ) |
| **Menew/Linx** | "Menew agora é Linx!" (fala da marca, não da dor) | Por operação, prints + ícones | **Fraco**: só "quero saber mais"/demo; WhatsApp flutuante; sem trial | "2.800 clientes" (fraco) | Nenhum |
| **Yooga** | "Seu restaurante vendendo mais, sem complicação" | Abas de módulo + screenshots, slider antes/depois, dor→solução | **Menor fricção: form só WhatsApp**, "Cadastro rápido e fácil", "contato em poucos minutos" | "+7.000 restaurantes", 40+ logos, 9 cases quantificados | Sob consulta |
| **Abrahão** | Cardápio digital omnicanal (mesa/balcão/delivery), "+40% vendas" | Blocos alternados por produto (tablet/totem/QR) | **Só demo**; form 5 campos + dropdown de produto | 6 depoimentos, 5 cases com nº; sem total de clientes | Sob consulta explícito |
| **Sischef** | "Sistema mais completo do Brasil", integrado iFood | 3 pilares em abas + vídeos YouTube + cards modulares | **Só consultor** ("Falar com consultor (gratuito)" 8x); form via #âncora | "+2.000 ativos", "+30M pedidos/mês", todos estados | Implantação R$499–1.500; mensalidade sob consulta |
| **Neemo** | (bloqueado) delivery/faturamento | não verificável | não verificável | "~5 mil restaurantes" (terceiros) | "a partir de R$189" (terceiros) |

---

## POR CONCORRENTE

### 1. ANOTA AI (anota.ai)
1. **Hero.** H1: *"Economize tempo e dinheiro com uma gestão completa do seu restaurante"*. Sub: *"Robô de atendimento, app para garçom, cardápio digital e muito mais, tudo isso em um só lugar!"*. CTA duplo: *"Contratar agora"* + *"Falar com um especialista"*. Gancho = IA no WhatsApp.
2. **Features.** Agrupadas por contexto operacional (vendas/salão/gestão) com ícones (chat, cartão, QR). Imagens estáticas, sem vídeo.
3. **Captura.** Trial **7 dias sem cartão**: *"Testar grátis por 7 dias"*, *"Não é necessário incluir dados do cartão de crédito"*. O form NÃO pede contato de cara — qualifica: *"Quantidade de pedidos/dia (Menos de 10 / Mais de 10)"*, computador Sim/Não, faixa de faturamento. WhatsApp flutuante + **pop-up de saída "Não vá embora!"** com oferta. (Incerteza: modais JS.)
4. **Prova social.** *"Mais de 50 mil empresas estão usando a Anota AI"*; depoimentos nominais (Pizzaria Igarapé, Maestro, Bah Q Massa); *"Até 50% em média foi o aumento de faturamento"*.
5. **Preço.** Cravado na home: Start R$219,99 · Advanced R$254,99 · Premium R$329,99. Diferencial: *"sem taxas por pedido ou comissões"*.
6. **Segmentação.** Páginas por nicho (ex.: /sistema-para-lanchonete/ com H1 próprio), mas soltas, sem hub. Destino de tráfego pago/SEO.
7. **Tom.** Dono-para-dono: *"Sem a Anota AI, a gente não conseguiria atender com 100% de eficácia."*

### 2. SAIPOS (saipos.com)
1. **Hero.** H1: *"Gestão no ritmo do seu crescimento"*. Sub: *"Um sistema para restaurante que centraliza sua gestão, traz clareza no dia a dia e previsibilidade para crescimento constante"*. CTA: *"Solicitar Demonstração Gratuita"*. Fala com o operador maduro.
2. **Features.** Cards por contexto + screenshots de dashboard; 6 ferramentas; *"mais de 70 recursos"*.
3. **Captura.** Só demo, sem trial. Form: *"Seu nome"*, *"E-mail profissional"*, *"WhatsApp"*+DDD, *"Faturamento mensal"* (dropdown "Estou Abrindo" até "Acima de 120 mil"/"Franquia ou Multi Lojas"). Selo: *"Seus dados estão seguros. Não enviamos spam."*
4. **Prova social.** *"25.000+ Restaurantes"*, *"11M+ Pedidos/mês"*, *"+100 integrações"*; 3 depoimentos com foto.
5. **Preço.** Sob consulta ("a partir de R$240,79"), sem tiers.
6. **Segmentação.** A mais ampla: pizzaria, hamburgueria, cafeteria, churrascaria, sushi, **açaí**, padaria, sorveteria, bar…
7. **Tom.** Técnico/consultivo com dor: *"Trabalhar no escuro custa caro"*.

### 3. GOOMER (goomer.com.br)
1. **Hero.** H1: *"A solução completa em Cardápio Digital"*. Sub em 3 números: *"Até 20% mais rapidez… Redução de até 30% dos custos… Aumento de até 40% no lucro"*. CTA: *"Escolher cardápio ideal"*.
2. **Features.** Cards com print por produto (Tablet, Totem, Delivery, QR), 4 bullets cada.
3. **Captura.** Híbrido: *"Criar cardápio grátis"* (sem cartão) + *"Demonstração gratuita"*. Form longo: *"Nome completo"*, *"Seu melhor e-mail"*, *"Telefone"*, *"Nome do restaurante"*, *"Em qual produto tem interesse?"*, *"Quantidade de pessoas na operação"*. Botão *"Enviar meus dados"*.
4. **Prova social.** *"+400 mil negócios impactados"*, *"+100 milhões em economia de taxas"*, *"+10 anos líder"*; 5 depoimentos + 80 logos.
5. **Preço.** Tabela transparente: Grátis R$0 (30 pedidos + R$1,39/excedente) · Básico R$99,90 · Automatizar R$184,90 · Integrar R$299,90; anual *"40% OFF"*.
6. **Segmentação.** Por **produto/operação** (delivery/mesa/balcão/totem), NÃO por nicho de comida.
7. **Tom.** Benefício numérico: *"Até 20% mais rapidez"*.

### 4. CONSUMER (consumer.com.br) ⭐ — o benchmark de captura
1. **Hero.** H1: *"O sistema nº 1 em 30 mil restaurantes do Brasil"*. Sub: *"PDV, delivery, iFood, estoque e financeiro em uma única plataforma. Comece grátis em 2 minutos, sem cartão de crédito."*. CTAs: *"🚀 Começar Grátis em 2 min"* (selo "Versão grátis que não expira"), *"▶ Ver Demo (2 min)"*, *"Ver Planos →"*, *"Chamar no WhatsApp"*.
2. **Features.** Cards por feature + **tabela comparativa "Consumer vs Concorrentes"** (30+ funcionalidades) — posicionamento por confronto direto.
3. **Captura (ponto forte).** **MODAL de cadastro "Cadastro rápido e grátis"** — campos **Nome, E-mail, Telefone** (com validação "Telefone Inválido") + checkbox de política. **Chat flutuante "Chat Consumer"** (status Online) pedindo Nome/E-mail. WhatsApp persistente no header *"Chame no WhatsApp"*. Modelo self-service, trial sem cartão. (Incerteza: gatilho exato do modal não confirmável no HTML estático.)
4. **Prova social (a mais forte).** *"⭐ 4,8/5 · 217 avaliações · +3 milhões de pedidos/mês"*; "30 mil restaurantes" repetido; depoimentos com foto; logos iFood/Google/SEBRAE.
5. **Preço.** Transparente: Essencial R$59,90 · Profissional R$179,90 · Alta Performance R$269,90 + Grátis (200 pedidos/mês, sem cartão). CTA: *"ESCOLHER ESTE PLANO"* / *"COMEÇAR GRÁTIS"*. Ancoragem em 3 degraus + isca grátis.
6. **Segmentação.** Nichos no footer: Hamburguerias, Pizzarias, Lanchonetes, Docerias, Sorveterias, Marmitarias, **Açaíterias**, Cafeterias.
7. **Tom.** Direto: *"Comece grátis hoje"*, *"Seus dados são sempre seus"*.

### 5. CARDÁPIO WEB (cardapioweb.com)
1. **Hero.** H1: *"O Cardápio Digital mais completo do Brasil"*. Sub: *"Experimente a ferramenta que vai automatizar seus pedidos de WhatsApp, aumentar suas vendas com marketing…"*. CTA: *"TESTE AGORA"* + *"Fale com um consultor"*.
2. **Features.** Abas temáticas (Automação/Vendas/Gestão), ícones SVG + imagens de dispositivos.
3. **Captura.** **Modal de teste grátis lead-gated** com muitos campos: Nome, Empresa, E-mail, WhatsApp, **Faturamento mensal** (dropdown), **Segmento** (pizzaria/hamburgueria/restaurante…), checkbox. Botão *"TESTE AGORA"*. O "teste grátis" (10 dias) só libera **após falar com especialista** — não é self-service.
4. **Prova social.** *"+17 mil empresas"*; logos (Puro Açaí, Açai Beat…); *"100% dos meus pedidos são feitos pelo Cardápio Web"*; case em vídeo.
5. **Preço.** Sob consulta (só no FAQ: Delivery R$209,99 · Mesas/Comandas R$169,99 · Premium R$269,99).
6. **Segmentação.** Segmento vive como campo do form, não como páginas de nicho.
7. **Tom.** Comercial: *"Construa seu canal próprio de vendas, libertando seu delivery da dependência"*.

### 6. MENEW / LINX (menew.com.br)
1. **Hero.** H1: *"Menew agora é Linx!"* Sub: *"Ampliando ainda mais o ecossistema de soluções para o mercado de food service."*. Hero fala da marca, não da dor. CTAs: *"Quero saber mais"*, telefone 3003-3663.
2. **Features.** Por operação (Delivery, Salão, Fast-food, Self-service) com prints + ícones.
3. **Captura (o mais fraco).** Sem modal, sem trial, sem self-service. "Tenho interesse"/"Quero saber mais" aponta pra form comercial (campos não visíveis no HTML — incerteza). WhatsApp flutuante. Modelo "fale com vendas".
4. **Prova social.** *"Mais de 2.800 clientes"* (fraco); 54 logos de integração.
5. **Preço.** Nenhum.
6. **Segmentação (forte).** 13 segmentos com página dedicada: Açaiteria, Bar, Cafeteria, Dark Kitchen, Doceria, Food Truck, Hamburgueria, Padaria, Pizzaria, Restaurante, Sorveteria…
7. **Tom.** Corporativo: *"garantindo assim tomadas de decisão mais embasadas"*, *"Um sistema especialista em bares e restaurantes"*.

### 7. YOOGA (yooga.com.br)
1. **Hero.** H1: *"Seu restaurante vendendo mais, sem complicação."*. Sub: *"Sistema completo para delivery, PDV, mesas e financeiro. Comece em minutos e veja resultados no primeiro mês."*. CTA: *"Começar agora"*.
2. **Features.** Abas de módulo + screenshots, **slider antes/depois**, enquadramento dor→solução ("Não sobra lucro" → "Sabe quanto lucra em cada prato").
3. **Captura (menor fricção do setor).** Form *"Cadastro rápido e fácil"*, sub *"Entraremos em contato em poucos minutos."*, **campo único: WhatsApp**. Botão *"Começar agora"*. Selos: *"Dados protegidos • Resposta rápida"*. É cadastro→contato humano (não é trial). WhatsApp flutuante.
4. **Prova social.** *"+7.000 restaurantes já usam a Yooga"*; 40+ logos; **9 depoimentos quantificados** ("-40% tempo de caixa", "+22% lucro trimestral").
5. **Preço.** Não exibe.
6. **Segmentação.** Forte, padrão /para/[segmento]: Pizzaria, Sushi, Hamburgueria, Cafeteria, **Açaiteria**, Marmitaria… + por operação (/presencial, /autoatendimento).
7. **Tom.** Visceral, dor-primeiro: *"Dinheiro entra, dinheiro sai — e o bolso continua vazio."*, *"Zero papel, zero grito — pedido vai direto pra cozinha."*

### 8. ABRAHÃO (abrahao.com.br)
1. **Hero.** H1: *"Cardápio Digital inteligente para mesa, balcão e delivery"*. Sub: *"Soluções digitais para seu negócio ter melhores resultados em todos os canais"*. Impacto: *"Aumente vendas em até 40%"*. CTA: *"Solicitar demonstração"*.
2. **Features.** Blocos alternados por produto (Tablet, Totem, QR) + 8 benefícios com header/descrição. Posicionamento de cardápio digital, não sistema completo.
3. **Captura.** Só demo. Form em /solicitar-demonstracao: *"Preencha o formulário para um de nossos especialistas entrar em contato e apresentar uma demonstração gratuita"*. Campos: Nome completo, Nome do restaurante, E-mail, Telefone c/ DDD, "Qual produto tem interesse?" (dropdown). Botão *"Solicitar contato"*. WhatsApp flutuante com texto pré-preenchido.
4. **Prova social.** 6 depoimentos nominais; 5 cases com nº (Mundo Animal *"aumento de 12% a 15% na receita"*); 40+ logos. **Não mostra total de clientes** (fraco).
5. **Preço.** Sob consulta explícito: *"Isso depende do seu negócio!… fazer um orçamento sem compromisso."*
6. **Segmentação.** 8 segmentos em cards, mas **mensagem idêntica** em todos (segmentação só visual).
7. **Tom.** Brando, dono: *"As vendas dos seus produtos começam pelo cardápio do seu restaurante!"*

### 9. SISCHEF (sischef.com)
1. **Hero.** H1: *"Sistema (software) para restaurante integrado ao iFood"*. Sub: *"O Sistema para Restaurante e Delivery mais completo do Brasil"*. CTA: *"Falar com um consultor (gratuito)"*. Apoio: *"Reduza em até 70% o seu tempo de atendimento"*, *"Centralize os pedidos de +20 aplicativos… em um só lugar"*.
2. **Features.** 3 pilares em abas (PDV/Gestão/BI) + **vídeos YouTube embutidos** + cards modulares (Estoque, Financeiro, Fiscal, CRM, KDS). O mais "sistema completo/técnico".
3. **Captura.** Só consultor — *"Falar com um consultor (gratuito)"* 8+ vezes. Form via âncora #orcamento (estrutura não veio no HTML — incerteza). Reassurance: *"O contato é gratuito e sem compromisso"*. WhatsApp comercial.
4. **Prova social (a mais forte em nº).** *"+2000 Restaurantes ativos"*, *"+30 Milhões Pedidos por mês"*, todos os estados; 4 depoimentos; 20+ logos.
5. **Preço.** Único que mostra **implantação**: EAD R$499,90 · Básico R$1.000 · Completo R$1.500. Mensalidade sob consulta. Planos: Economy/Enterprise/Premium.
6. **Segmentação (a mais robusta em SEO).** 15+ páginas /sistema-para-[nicho]/.
7. **Tom.** Direto com verniz técnico: *"Seu restaurante organizado, lucrando mais e desperdiçando menos"*, *"Automação levada a outro nível."*

### 10. NEEMO (neemo.com.br) — NÃO CARREGOU
Domínio oficial redireciona pra Linx, que bloqueia bots (desafio PNG). Dados de terceiros (BAIXA confiança): "~5 mil restaurantes", planos beginner/start/pro/franquia "a partir de R$189", cardápio digital + QR na mesa + fidelidade + sem comissão. **Auditar manualmente no navegador se virar prioridade.**

---

## MODAL DE CADASTRO / CAPTURA DE LEAD

### Quem faz e como
- **Consumer** é o que mais se aproxima do que o Eduardo viu: **modal "Cadastro rápido e grátis"** pedindo só **Nome / E-mail / Telefone** + checkbox de política, dentro de um fluxo **self-service (sem cartão, "2 minutos")**. É o modelo mais limpo — pouca fricção, cadastro no próprio site, e o cliente já entra na plataforma. Também tem **Chat flutuante "Chat Consumer"** que captura Nome/E-mail como segunda rede.
- **Cardápio Web** tem modal também, mas **pesado** (Nome, Empresa, E-mail, WhatsApp, Faturamento, Segmento) e **lead-gated** — não entra na plataforma sozinho, cai numa fila de consultor. Bom pra qualificar, ruim pra conversão de topo.
- **Yooga** é o oposto do Cardápio Web: **campo único (WhatsApp)** + "contato em poucos minutos". Fricção mínima, mas não é self-service — vira contato humano.
- **Anota AI** qualifica antes de pedir contato (pedidos/dia, faturamento) e tem **pop-up de saída** ("Não vá embora!").
- **Goomer** tem cadastro self-service do plano grátis sem cartão, via form de 6 campos.

**Regra que emerge:** os que convertem topo de funil (Consumer, Goomer, Anota) pedem **pouco** e deixam **entrar sozinho, sem cartão**. Os que pedem muito (Cardápio Web, Saipos, Abrahão) estão otimizando pra **venda consultiva**, não pra volume de cadastro.

### Design recomendado pro ComandaPRO
O Eduardo quer que o cliente **se cadastre no próprio site**. O modelo Consumer é o alvo. Proposta:

- **Gatilho:** duplo. (1) Botão primário do hero abre o modal na hora ("Começar grátis"). (2) **Exit-intent** (mouse sai pro topo no desktop) OU **scroll 60%** no mobile dispara o modal uma vez por sessão (cookie pra não irritar). Não disparar na entrada imediata — irrita e derruba tempo de página.
- **Título:** *"Crie seu cardápio grátis em 2 minutos"* (rouba a promessa de tempo do Consumer, que funciona).
- **Sub do modal:** *"Sem cartão. Sem instalar nada. Seu link próprio pronto hoje."*
- **Campos mínimos (3):** Nome · WhatsApp · Nome do estabelecimento. (E-mail opcional depois — WhatsApp é o canal real do dono de food no Brasil, e todos os líderes pedem WhatsApp.)
- **Botão:** *"Criar meu cardápio grátis"* (verbo + posse + benefício; nunca "Enviar").
- **Reassurance abaixo do botão:** *"Dados protegidos • Resposta na hora"* (copiado da mecânica Yooga).
- **O que acontece depois:** o ideal é **self-service de verdade** — cria o tenant/slug na hora e joga o cliente pra dentro do painel (read-after-write: confirmar a row antes de dizer "pronto"). Se ainda não dá pra provisionar sozinho, no mínimo: dispara mensagem automática no WhatsApp do dono com o link do painel + notifica o Eduardo. O erro a evitar é o do Cardápio Web (modal cheio que só vira fila de consultor).
- **Rede secundária:** WhatsApp flutuante persistente (todo mundo tem) + um chat/leadbox simples.

---

## O QUE TRAZER PRO COMANDAPRO — recomendações acionáveis

Nosso site hoje: hero colorido, cards de segmento, painéis coloridos de funcionalidade, seção de fidelidade, preço R$219, FAQ. NÃO copiar paleta — copiar ESTRUTURA e MECÂNICA.

**ALTA prioridade (mexe direto na conversão)**

1. **Modal de cadastro self-service (3 campos, sem cartão).** É o pedido do Eduardo e o que o Consumer faz melhor. Gatilho exit-intent/scroll, título "Crie seu cardápio grátis em 2 minutos", campos Nome/WhatsApp/Estabelecimento, botão "Criar meu cardápio grátis". Ver seção acima. **Maior alavanca de todas.**

2. **Promessa de tempo + "sem cartão" no hero.** Consumer e Yooga vendem velocidade ("2 minutos", "resultados no primeiro mês"). Adicionar ao hero do ComandaPRO um selo/linha tipo *"Pronto em minutos. Sem cartão, sem instalar."* logo abaixo do H1. Reduz o medo de compromisso.

3. **Barra de prova social numérica no topo.** Todos os fortes (Consumer 30 mil / 4,8★, Yooga +7.000, Sischef +30M pedidos) batem número cedo. Nós temos poucos clientes — então usar o que é honesto: nº real de pedidos processados, nº de estabelecimentos ativos, ou "nota dos donos". Se o número é pequeno, usar **depoimento com resultado** (Vidal do Cantinho do Açaí) em vez de contagem. Nunca inventar (λ.não-inventar).

4. **WhatsApp flutuante persistente + CTA sticky no mobile.** Padrão universal (Anota, Menew, Yooga, Abrahão, Sischef, Consumer todos têm). Botão fixo "Criar cardápio grátis" no rodapé mobile que reabre o modal. Barato e converte.

**MÉDIA prioridade (estrutura de comunicação)**

5. **Enquadrar features por DOR, não só por feature.** Yooga ("bolso continua vazio", "zero grito") e Saipos ("trabalhar no escuro custa caro") abrem cada bloco com a dor do dono e resolvem embaixo. Nossos painéis coloridos hoje listam função — reescrever o header de cada painel como dor ("Comanda no papel some e some venda" → mostra a comanda digital).

6. **Tabela comparativa "ComandaPRO vs alternativas".** O move mais forte do Consumer. Uma tabela ComandaPRO vs "planilha/caderno" vs "só iFood" vs "concorrente genérico" com 10-15 linhas de check. Ancoragem e diferenciação num bloco só. Foco no que temos e o balcão/PDV genérico não tem (link próprio de delivery, fidelidade, impressão térmica).

7. **Cases com número, não elogio genérico.** Abrahão ("+12 a 15% na receita"), Yooga ("+22% lucro"). Trocar depoimento "adorei o sistema" por resultado mensurável do cliente real. Pegar um número verdadeiro do Cantinho do Açaí/Medellín.

8. **Screenshots reais do produto em cada painel.** Goomer, Saipos, Sischef mostram print/vídeo do produto por feature. Substituir ilustração genérica por print real da comanda/mesa/PDV/cardápio do ComandaPRO. Ver o produto reduz objeção.

9. **Página por nicho ligada aos cards de segmento.** Sischef/Yooga/Menew têm páginas /sistema-para-[nicho]. Nossos cards de segmento hoje são visuais — transformar cada um numa LP real (/comandapro/acaiteria, /pizzaria, /bar) com H1 e copy próprios. Yooga tem página de **Açaiteria** — nosso Cantinho do Açaí pede exatamente isso. Ganho de SEO + tráfego pago segmentado. (Cuidado: nicho ≠ mesma copy repetida, erro do Abrahão.)

**BAIXA prioridade (refino)**

10. **Manter e destacar o preço transparente R$219.** Consumer e Goomer ganham confiança mostrando preço; Saipos/Cardápio Web/Menew escondem e viram fila de vendas. Nossa transparência já é vantagem — deixar o R$219 visível com ancoragem ("sem taxa por pedido, sem comissão" — roubado da Anota, que é verdade forte contra iFood).

11. **Pop-up de saída com oferta.** Anota AI faz ("Não vá embora!"). Baixo esforço: no exit-intent, se o cara não cadastrou, oferecer algo (primeiro mês, migração grátis, setup do cardápio feito por nós). Só depois do modal principal estar no ar.

12. **Reassurance "seus dados são seus / sem comissão".** Consumer ("Seus dados são sempre seus"), Anota ("sem taxas por pedido"). Micro-copy que ataca a dor de quem apanha do iFood. Espalhar perto dos CTAs.

---

*Ressalva final (λ.prova-na-fonte): tudo acima é HTML renderizado sem JS. Gatilhos exatos de modal (entrada/scroll/exit), scripts de CRM (RD/HubSpot) e forms multi-step precisam de navegador real (claude-in-chrome) pra confirmação 100%. Neemo não foi lido na fonte oficial.*
