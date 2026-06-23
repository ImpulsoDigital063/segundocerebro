# Medellín Music Bar — Sistema de Gestão · Plano de Produto/Negócio

> Consolidado em 15/06/2026. Sistema construído e no ar: https://medellin-bar-six.vercel.app
> Código: `C:/Users/Usuario/medellin-bar` (Next 16 + Supabase + TS + Tailwind). Infra na conta Impulso (migra pro cliente pós-fechamento).
> Docs irmãos: ESTUDO-E-PLANO · benchmark-mercado · auditoria-financeiro-palace · estudo-interface · cardapio-medellin-seed · minispec-estoque-dose-garrafa.

## 1. O que é
PDV completo de bar/petiscaria com **auto-pedido por QR**, operação (caixa, cozinha, bar, garçom), financeiro completo e estoque inteligente. Substitui o cardápio morto (Cardapiando) e ainda **opera o bar inteiro**. Tema: painel branco premium (padrão de mercado) + app do cliente dark neon (marca "Medellín").

## 2. Telas / funcionalidades (tudo construído e no ar)
- **Cliente (QR na mesa)** `/mesa/[n]`: cardápio por categoria, pedido pelo celular sem cadastro, chamar garçom / pedir a conta.
- **Caixa (hub principal)**: grade de 50 mesas (verde livre / vermelho ocupada / âmbar pediu-conta) · venda avulsa (walk-in) · gaveta (abertura/fundo, sangria, suprimento) · **fechamento com conferência tripla** (dinheiro + cartão + pix) · alertas (chamado de garçom, estoque baixo).
- **Comanda**: lançar item (categorias→modal) · **pré-conta/conferência** (cupom sem pagamento) · **multi-pagamento + dividir por pessoa** · taxa de serviço 10% · cupom final.
- **Cozinha / Bar** (KDS): pedidos ao vivo, kanban, **cor por tempo** (verde→âmbar→vermelho atrasado), auto-impressão.
- **Garçom**: acesso por **PIN 4 dígitos**, lança comandas (nome vai na comanda → gorjeta), só operação.
- **Cardápio (admin)**: CRUD de categorias/produtos, preço, ativar/desativar, **upload de foto**, **ficha técnica** (drink → ingredientes do estoque).
- **Estoque**: área completa por categoria (sanfona) · cadastro de bebidas · **dose × garrafa** (1 garrafa = N doses, garrafa aberta) · seção "garrafas abertas · doses" · entrada/baixa/perda/ajuste · **baixa automática na venda** (gatilho, todas as telas conversam) · alerta de mínimo · valor em estoque · export.
- **Financeiro**: fluxo de caixa (dia/sem/mês/ano) com donut + **drill-down** por transação · **taxa de cartão automática** (Bruto/Líquido) · despesas (categorias fixas, recorrência, notas, export) · relatórios (faturamento, lucro, ticket médio, mais vendidos).
- **Garçons (financeiro)**: cadastro com **remuneração configurável** (gorjeta 10% / comissão % por venda / salário fixo) · vales (adiantamento) · pagamentos · histórico · export.
- **Faturamento (dono)**: faturamento do dia + **variação vs ontem** + donut.
- **Ajustes**: QR das mesas (imprimir), Impressoras (QZ Tray, roteamento cozinha/bar).

## 3. Diferenciais (validados no benchmark + auditoria Palace)
1. **Estoque dose/garrafa + ficha técnica** — nenhum concorrente (Goomer/Saipos/Consumer/Yooga) resolve bem; é a dor nº1 de bar de destilado. Vender dose/drink baixa o estoque certinho.
2. **Auto-pedido QR sem cadastro** — mata o Cardapiando (cardápio morto).
3. **Conferência tripla de caixa** + **taxa de cartão automática** (lucro líquido real).
4. **Gorjeta/comissão configurável por garçom** com PIN.
5. **Tudo nativo e conversando** (caixa/garçom/bar/QR/estoque) — sem juntar 5 sistemas.
6. **Pré-conta + multi-pagamento + dividir conta**.
Trazidos do Palace (produção real Marko/Luana): conferência tripla, sangria/suprimento, export, remuneração, modal anti-engano.

## 4. Mercado (resumo do benchmark)
Concorrentes são SaaS mensal R$90–270+/mês (sobe com módulos), hardware à parte. 3 famílias: front-end de pedido (Goomer/Abrahão), gestão tudo-em-um (Saipos/Consumer/SisFood/Yooga), delivery→gestão (Anota AI). Nenhum trata bem dose/garrafa nem é feito sob medida.

## 5. Precificação
Fork dedicado premium **~R$2.997** (ref Palace Nail Spa). Justificativa: pagamento ÚNICO e DELE vs R$300+/mês eterno de sistema genérico (se paga em <1 ano), + sistema sob medida com diferencial de estoque que ninguém tem. Modelo entrada 50% + saldo flex + bônus. Hospedagem/suporte ~R$99/mês opcional.

## 6. Estado
Construído, no ar e provado na fonte (read-after-write em todos os writes críticos). Infra Impulso (Supabase wzsjsfmndwsobwivsrmv + Vercel impulsodigitals-projects/medellin-bar). Cliente: **Medellín Music Bar** (em negociação, call presencial).

## 7. Pendências (do cliente / dados reais)
- Confirmar nº de mesas, se tem música ao vivo/couvert, quem opera (garçom vs caixa).
- Cliente preenche: estoque (entrada/custo/mínimo), fichas dos drinks da casa, % comissão/salário dos garçons, taxas de cartão reais.
- Logo oficial (hoje recriação CSS do letreiro neon).
- Roadmap técnico aberto: supervisor PIN do dono, página de detalhamento extra, baixa de combo via ficha.
