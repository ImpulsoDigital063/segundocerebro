# Painel Admin (Operação) — APPDELYVERY · a central de comando do dono

> Objetivo: o dono opera TUDO sem depender da Impulso — aprovar, suspender, ajustar preço, ver o
> dinheiro, resolver disputa, e ler a inteligência do negócio. Segue o padrão canônico de painel
> SaaS (sidebar agrupada, tabela operacional, drawer, cores semânticas) — ver `06-PAINEL-SAAS-PADRAO.md`.
> Status: ✅ pronto · 🔨 construir (dado existe) · 🔌 depende de integração/dado acumulado.

## Sidebar (grupos)

### VISÃO GERAL
- **Dashboard** 🔨 — KPIs do período: entregas (hoje/semana/mês), **faturamento da plataforma** (take rate 20%), entregadores online, ticket médio, **tempo médio de entrega**, taxa de conclusão, cancelamentos. Sparklines. Bloco "ao vivo" (corridas em andamento agora). *(hoje só tem 3 KPIs simples)*

### OPERAÇÃO
- **Corridas / Entregas** 🔨 — lista de TODAS as corridas com filtros (status · data · entregador · negócio · veículo) + busca. Detalhe em drawer: timeline de status, **comprovante (foto+assinatura)**, mapa da rota, valores (frete/entregador/plataforma), quem atribuiu. Filtro "ao vivo" = em andamento. *(o "corridas feitas" que você pediu)*
- **Mapa ao vivo (despacho)** 🔌 — todos os entregadores online + corridas em curso num mapa só (visão de operação em tempo real).

### CADASTROS
- **Entregadores** ✅🔨 — lista + **fila de aprovação** (✅ pronto). Perfil de cada: verificação/antecedentes (LGPD, só admin), rating, nº de entregas, ganhos, online/offline, documentos. Ações: aprovar · recusar · **suspender** · reverificar.
- **Negócios** ✅🔨 — lista (✅ pronto). Perfil: pedidos, gasto total, saldo da carteira, status. Ações: ativar · suspender · ver histórico.

### FINANCEIRO 🔌 (depende do Asaas)
- **Faturamento** — receita da plataforma (take rate) por período + gráfico.
- **Repasses** — quanto cada entregador recebeu / a receber (split Asaas).
- **Carteiras** — saldo pré-pago de cada lojista + extrato de transações.
- **Custos** — verificação (FlagCheck/Infosimples), infra — pra ver a margem real.

### INTELIGÊNCIA / RANKINGS 🔌 (popula com o uso)
- **Melhores entregadores** — ranking por entregas concluídas, **rating**, menor tempo médio, menos cancelamento, maior ganho.
- **Melhores empresas** — ranking por nº de pedidos e gasto (faturamento gerado).
- **Melhores áreas / zonas** — onde tem mais demanda (origem/destino por quadra/região de Palmas) + **horários de pico** + mapa de calor.
- **Tendências** — volume por dia/semana, crescimento, sazonalidade.

### SEGURANÇA / VERIFICAÇÃO (LGPD restrito)
- **Aprovações** ✅ — fila (pronto).
- **Log de verificações** 🔌 — histórico FlagCheck/Infosimples/biometria por entregador. Acesso só admin, nunca exposto.

### SUPORTE
- **Disputas / ocorrências** 🔨 — extravio, atraso, reclamação; status e resolução. Liga com a blindagem jurídica (CDC).

### CONFIGURAÇÕES (o que dá AUTONOMIA TOTAL)
- **Tabela de preço** 🔨 — bandeirada (moto/carro/van), R$/km, mínimo, **take rate %** — tudo editável pelo dono.
- **Regras de operação** 🔨 — raio de matching, timeout da oferta, re-verificação periódica (Lei 13.640).
- **Operadores** 🔨 — adicionar gente da operação (role `operador`) + permissões (ele não fica sozinho).
- **PIN do supervisor** 🔨 — gerenciar o PIN das ações sensíveis.
- **Comunicação** 🔌 — broadcast (push/SMS) pra entregadores e lojistas.

## O que "autonomia total" significa na prática
O dono consegue, sozinho: aprovar/suspender entregador · ativar/suspender negócio · **mudar o preço e o take rate** · ver e controlar o dinheiro (repasses, carteiras) · resolver disputa · adicionar operadores · ler quem são os melhores entregadores/empresas/áreas pra tomar decisão. **Nada disso passa pela Impulso.**

## Ordem de construção sugerida (1 seção por rodada, valida e segue)
1. **Dashboard real** (KPIs + ao vivo) — a cara da operação.
2. **Corridas/Entregas** (lista + detalhe + comprovante) — o "corridas feitas".
3. **Perfil do entregador** (suspender + ver verificação) e **perfil do negócio**.
4. **Rankings** (melhores entregadores/empresas/áreas) — depois que tiver corridas concluídas pra rankear.
5. **Configurações** (preço/take rate/operadores/PIN) — autonomia.
6. **Financeiro** — quando o Asaas entrar.

## Dados — o schema já suporta quase tudo
`pedidos` (corridas, status, valores, rota, datas), `entregadores` (rating, total_entregas, status, posição), `estabelecimentos` (gasto via pedidos), `comprovantes` (foto/assinatura), `avaliacoes` (rating), `rastreios` (áreas/zonas), `verificacoes` (log). Faltam dados só onde depende de USO (rankings) ou de integração (Asaas → financeiro).
