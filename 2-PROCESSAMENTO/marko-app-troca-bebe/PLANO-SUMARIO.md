# App de troca de roupa de bebê (Marko) · Sumário do plano de negócio e marketing

> **ESTADO EM 22/09/2026 — ler isto primeiro.** Nome: **Baby Loop**. Proposta **R$8.997** (setup Brasil, código vira do Marko após o total; parcelas R$4.498,50 · R$2.249,25 · R$2.249,25). **18/09:** Marko topou a direção e pediu mais parcelas, 10 perguntas de propriedade (código, repo, contas no nome da Baby Loop, dados, garantia de 90 dias, outro dev assumir) **tudo em contrato**, e advogado pros termos (LGPD, dados de criança, pontos, marketplace). Requisitos dele em `MARKO-REQUISITOS-18-09.md`. Minutas PT/EN + regras pro advogado em PDF (18/09). **Nada assinado, nada pago.** Decisões do Eduardo pendentes: quantas parcelas aceita · quem paga o advogado (fora dos R$8.997 pelo plano).

> Montado em 15/09/2026. Status de cada parte do plano que vai ser apresentado ao Marko.
> ✅ pronto · 🟡 parcial · 🔴 falta fazer
> Fontes: `IDEIA-V1.md` (decisões), `ESTUDO-MERCADO-E-MODELO.md` (pesquisa), `FERRAMENTAS-E-PLATAFORMAS.md`, `EVENTOS-DIA-1.md`.

| # | Parte do plano | Status | O que já tem | O que falta |
|---|---|---|---|---|
| 1 | O problema e a oportunidade | ✅ | roupa perde tamanho em meses; troca direta não fecha (anúncio "RN troco por M"); categoria existe lá fora desde 2011 | — |
| 2 | Concorrência e diferenciais | ✅ | Cresci Troquei (nascente, grátis, sem receita); 8 plataformas de crédito estudadas; espaço vazio: ninguém resolve "peça chegou ruim" | — |
| 3 | Como o app funciona | ✅ | crédito com troca casada dentro (decisão 1); modo Tinder com avulsa e kit (decisão 2); nível 1 a 5 (decisão 10) | aprovação do Marko |
| 4 | O que se troca | 🟡 | roupa e acessórios; carrinho, berço e cadeirinha com Inmetro; lista de proibidos | brinquedo (Marko decide); faixa de valor dos itens grandes |
| 5 | Como a peça chega | ✅ | presencial com QR, ponto parceiro, Melhor Envio só pra kit, PDF pra imprimir, prazo, 48 h pra conferir (decisão 4) | teste LoggiPonto sem etiqueta |
| 6 | Qualidade e confiança | ✅ | **decisão 6 registrada (C, escada de confiança)** + todas as regras juntas num bloco | números da escada; quem da equipe do Marko modera |
| 7 | Modelo de receita | 🟡 | **decisão 5 cravada (B)**: taxa + pacote de crédito + AdSense no blog + afiliado; patrocínio, assinatura e Taboola depois; sem margem no frete | preço dos pacotes; tamanho da diferença; forma da taxa (Marko) |
| 8 | Tecnologia e custos | ✅ | **decisão 8 cravada: site + app PWA**, sem loja no início; Supabase Free, Vercel Hobby, Melhor Envio (API grátis), PIX Efí ou Woovi, compressão de imagem, eventos | loja: avaliar depois |
| 9 | Plataforma que aprende sozinha | ✅ | lista de eventos, métricas, regra de arranque | — |
| 10 | Lançamento e primeiras mães | 🟡 | **decisão 7 cravada (B)**: nacional, pré-lançamento só de oferta, incentivos sem custo, anúncio pra gestante só após a meta | meta de kits por tamanho e teto do bônus (Marko) |
| 11 | Plano de marketing | 🟡 | **v2 em `MARKETING-NACIONAL.md` (17/09)**: marca Baby Loop aplicada, fases com metas ligadas aos números, canais, conteúdo (Instagram + 6 posts do blog), roteiro de mães com seguidores, 4 textos com risco, métricas, orçamento | decisões do Marko (meta de kits, bônus, verba, quem posta); "créditos" ou "pontos" no app; @ e domínio |
| 11b | Expansão internacional | 🟡 | Marko quer Europa e perguntou da Sérvia; **estudo da Sérvia feito (17/09, `servia/`)**: fase 2, piloto de 60 dias em Belgrado | Marko decide o momento; perguntar por que a Sérvia |
| 12 | Números | 🟡 | **rascunho em `NUMEROS.md` (17/09)**: receita por troca, custos, 3 cenários no mês 12 (sobra de R$ 1,3 mil / 8,1 mil / 29,2 mil antes de manutenção, anúncio e equipe), equilíbrio em ~110–130 trocas/mês | decisões do Marko (pacote, diferença, bônus, verba); valor da manutenção; contador |
| 13 | Jurídico e regras | 🟡 | **bloco único em `JURIDICO-E-CRONOGRAMA.md` (17/09)**: empresa e impostos, pontos comprados, termos, LGPD, loja virtual, marca, contrato Impulso × Marko | advogado e contador validarem os itens 🟡 |
| 14 | Cronograma e próximos passos | 🟡 | **3 trilhas em `JURIDICO-E-CRONOGRAMA.md`**: plataforma (52 dias, ~11 semanas, marcos de pagamento), Marko em paralelo (CNPJ, PIX, termos), marketing | datas reais depois do contrato |
| 14b | Entrega, garantia e suporte | 🟡 | estrutura proposta em 15/09/2026 (ver seção "Entrega, garantia e suporte") | Eduardo cravar prazo de garantia e valor da manutenção |
| 15 | Decisões pro Marko | ✅ | **lista única em `DECISOES-MARKO.md` (17/09)**: 10 aprovações de desenho, 5 escolhas, 8 números, 5 de operação, 3 de expansão, com recomendação e prazo | respostas do Marko |

## Onde paramos (17/09/2026)

Estudo encerrado. Próximo: **escrever o plano de negócio e marketing**, parte por parte, na ordem:
1. ~~Números (parte 12)~~ rascunho feito em `NUMEROS.md`
2. ~~Marketing nacional (parte 11)~~ v2 feita
3. ~~Jurídico e cronograma (partes 13 e 14)~~ feitos
4. ~~Decisões pro Marko (parte 15)~~ feita
5. **Apresentação pro Marko: rascunho 1 feito (17/09)** em `PLANO-BABY-LOOP-MARKO.html` (bilíngue EN/PT) · artifact https://claude.ai/artifact/VpGg6boJqvsZsSGPCGGebE · aguarda revisão do Eduardo e as respostas do Marko (idade, nacional × local, indicação, A+/A/B/C)

Protótipo público: babyloop-prototipo.vercel.app (app) · /dashboard (painel) · /cores (paleta).

## Histórico: onde paramos em 15/09/2026

Ainda em fase de estudo pro plano. Ordem combinada pra retomar:
1. ~~Cravar decisão 7~~ ✅ (B)
2. ~~Decisões 5, 6 e 8~~ ✅ (B · C escada de confiança · site + PWA) — **desenho do produto fechado**
3. Refazer o marketing nacional (parte 11)
4. Números (parte 12)
5. Jurídico e cronograma (partes 13 e 14)
6. Montar a apresentação pro Marko

Pendências de fora do plano: testar LoggiPonto sem etiqueta · pesar um kit real de 14 peças tamanho M · resposta do Marko ao pitch do crédito (mensagens 1 a 5).

## Preço do projeto — CRAVADO em 17/09/2026

- **Formato: projeto pago.** A Impulso desenvolve o setup, que fica **propriedade do Marko** depois do pagamento total (componentes genéricos da base da Impulso seguem com licença de uso sem prazo pro Marko).
- **Valor: R$ 8.997, só para o setup no Brasil.** Melhorias para levar o sistema para outro país e atualizações passam por análise da Impulso e têm orçamento próprio.
- Parcelas: R$ 4.498,50 na assinatura · R$ 2.249,25 na entrega do núcleo (semana 3) · R$ 2.249,25 na abertura.
- **Condições que protegem o valor:** escopo fechado (o que está no protótipo) · mudança ou funcionalidade nova com orçamento à parte · hospedagem na estrutura da Impulso só no começo, com gatilho claro pra passar pro Marko · recorrentes à parte: manutenção depois da garantia, gestão de tráfego, monetização do tráfego, Sérvia/Europa.

## Histórico da discussão de preço (15/09/2026)

- Marko perguntou quanto o Eduardo cobra pra construir a plataforma.
- **Estimativa v1: 52 dias de trabalho** (base 3 · anúncio 5 · Tinder 5 · crédito 6 · PIX 3 · troca presencial 4 · envio 7 · reputação e moderação 4 · eventos e painel 4 · pré-lançamento 3 · blog e calculadoras 4 · testes e publicação 4). Estimativa, não medição.
- **Régua do fork** (R$2.997 em ~24 dias ≈ R$125/dia) → 52 × 125 = R$6.500 → **R$6.997**.
- **Problema levantado pelo Verbo:** R$6.997 em ~2,5 meses ≈ R$2.800/mês, perto do ponto de equilíbrio da Impulso e abaixo do salário de dev pleno. A régua de dia do fork não serve pra projeto longo.
- **Referências de mercado (agente, fontes abertas):** Clicksoft MVP de marketplace R$60-100 mil, 8-14 semanas · Plathanus MVP simples R$60-120 mil, plataforma web com painel R$80-250 mil (ambas com viés de venda) · Robert Half 2026, full-stack pleno CLT R$9.550-15.900/mês. Número de "R$250-600 mil" do agente foi extrapolação dele e foi descartado.
- **Faixa justa discutida:** entre R$6.997 (régua do fork) e ~R$24 mil (piso de salário pleno × 2,5 meses). Decisão do Eduardo.
- **Pagamento proposto:** 50% entrada · 25% na entrega do núcleo · 25% no lançamento.
- **Fora do valor:** custos da operação (hospedagem quando crescer, etiquetas, PIX, anúncio, advogado, contador, CNPJ), gestão de tráfego mensal, **serviço de monetização do tráfego (implantação + gestão)**, manutenção opcional, Europa.
- **Regra de venda:** não cravar valor fechado por WhatsApp; "a partir de" + ligação mostrando o escopo.
- Plataforma sem usuária nem receita vale, hoje, perto do custo de construir de novo. Cobrar pelo projeto > trocar pagamento por participação.

## Serviço Impulso: monetização do tráfego (cravado pelo Eduardo em 15/09/2026)

A Impulso também vai fazer o serviço de transformar o tráfego do site em receita. Valor a definir, separado do desenvolvimento.

**Parte 1 — Implantação (uma vez):**
- Cadastro assistido nos programas, **na conta do Marko com o CNPJ do negócio**: Amazon Associados, Shopee Afiliados, Mercado Livre e Magalu (conferir exigências no navegador), Google AdSense
- Instalação dos códigos, ads.txt e páginas exigidas (privacidade, sobre, contato)
- Configuração dos bloqueios de categoria (aposta, adulto, álcool)
- Links de afiliado nas ferramentas (lista de enxoval, calculadora de custo) e nos posts
- Definição de onde o anúncio pode aparecer: blog, calculadoras e páginas de conteúdo; nunca no Tinder, pedido, crédito, chat ou página do kit
- Acompanhar a revisão do AdSense e a verificação por PIN

**Parte 2 — Gestão mensal (opcional):**
- Relatório de receita por fonte (AdSense, cada afiliado)
- Ajuste de posição e quantidade de anúncios por página, sem ficar invasivo no celular
- Atualização dos links de afiliado e troca por produtos que vendem mais
- Aplicar no Taboola ou Teads quando o tráfego justificar
- Cruzar com o blog: quais posts trazem visita e receita

**Ordem de ativação:** afiliados assim que o blog tiver as primeiras páginas → AdSense quando tiver conteúdo pra passar na revisão → Taboola/Teads com tráfego alto.

**Dependências do Marko:** CNPJ, conta bancária do negócio, endereço pro PIN do AdSense, contador ciente da receita de publicidade e afiliado.

**Não confirmado (conferir dentro das contas):** mínimo de pagamento do AdSense em reais · pagamento e CNPJ na Amazon Associados · exigências e comissão de Mercado Livre e Magalu · comissão bebê na Shopee.

**Relação com o preço do projeto:** a estimativa de 52 dias inclui construir o blog e as calculadoras (4 dias), não os cadastros, aprovações e gestão. Esse serviço entra à parte, junto com gestão de tráfego e manutenção.

## Entrega, garantia e suporte (proposta de 15/09/2026, não cravada)

**Na entrega:** gateway, Melhor Envio, afiliados e domínio no nome do Marko. **Hospedagem e banco começam na estrutura da Impulso** (custo inicial da Impulso, decisão do Eduardo em 17/09/2026) e passam para contas no nome do Marko quando o uso pedir os planos pagos (US$ 20 + US$ 25) · manual do painel · treinamento por ligação gravada · documentação técnica pra outro dev conseguir continuar.

**Garantia:** 90 dias contra defeito, contando a partir da abertura pública (quando a procura abre, não no pré-lançamento). Cobre o que foi entregue não funcionar como o escopo descreve.

**Suporte na garantia:** WhatsApp da Impulso, em horário comercial. Prazo pra **começar a atuar** (não pra resolver):
- Crítico (app fora do ar, PIX ou crédito errado): no mesmo dia útil
- Alto (troca, envio ou anúncio quebrado): até 1 dia útil
- Baixo (visual, texto, detalhe): até 5 dias úteis

**A garantia não cobre:** funcionalidade nova ou mudança de regra (orçamento à parte) · falha de serviço de terceiro (Melhor Envio, gateway do PIX, Google, Meta, transportadora) · limite ou pausa de plano gratuito (Supabase, Vercel) · alteração feita por outra pessoa no código · conteúdo do blog e operação diária (moderação, atendimento às mães).

**Depois da garantia:** plano de manutenção mensal opcional (monitoramento, correções, atualizações de segurança e um banco de horas de ajustes). Valor a definir pelo Eduardo. Gestão de tráfego é outro serviço mensal.

**Propriedade:** o código específico da plataforma é do Marko depois do pagamento total. **Os componentes da base da Impulso** (login, painel, padrões, compressão de imagem, integrações genéricas) continuam da Impulso, podem ser reutilizados em outros projetos, e o Marko recebe licença de uso sem prazo. Precisa estar escrito no contrato.

**Fora do plano (interno, só Eduardo):** formato do negócio Impulso × Marko (projeto pago ou sociedade) e proposta de preço e prazo. 🔴 Pendente decisão do Eduardo, e precisa vir antes de apresentar.
