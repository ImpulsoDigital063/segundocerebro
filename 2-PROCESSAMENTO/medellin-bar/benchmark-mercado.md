# Benchmark de mercado — sistemas bar/restaurante (via CIC, 14/06/2026)

> Método Impulso: estudar a fundo → copiar o que funciona → inovar no gap. [[feedback_impulso_metodo_copiar_melhorar]]
> Fonte: sites oficiais, centrais de ajuda, planos, reviews/Reclame Aqui. Onde a fonte não confirmou (ex: dose×garrafa), marcado "n.d." em vez de inventar.

## 3 famílias (não jogam no mesmo campo)
1. **Front-end de pedido/cardápio** (Goomer, Abrahão) — fortes em QR/totem, mas dependem de PDV terceiro.
2. **Gestão tudo-em-um** (Saipos, Consumer, SisFood, Yooga, GrandChef, Linx Menew) — PDV+comanda+estoque+fiscal+financeiro.
3. **Origem delivery/WhatsApp → gestão** (Anota AI) — robô WhatsApp + PDV, salão é módulo novo.
- Colibri = à parte, ecossistema premium (alta gastronomia).

## COPIAR (padrão de mercado — se faltar, "parece quebrado")
- **Auto-pedido QR sem fricção**: sem cadastro e-mail/senha (máx nome+tel); QR abre a comanda da mesa; atualiza em tempo real; botões fixos "chamar garçom" e "fechar conta".
- **Comanda flexível**: mesa+balcão; **dividir conta (por pessoa e item); transferir item/mesa; juntar mesas; reabrir comanda**. Saipos é a referência de UX.
- **Impressão por setor + KDS**: item roteado por categoria (bebida→bar, petisco→cozinha) configurado 1x.
- **Baixa auto de estoque + ficha técnica + CMV + alerta de baixa**.
- **Caixa**: abertura/fechamento, sangria, suprimento, fechamento "1 clique" (Consumer vende isso), relatório do dia.
- **App garçom na maquininha** (anota e cobra na mesa).
- **BI pronto**: top itens, ticket médio, horário de pico, curva ABC.
- **Operação offline com sync** (requisito, não luxo).
- **Cardápio que vende**: foto grande, esgotado em 1 toque, combo sugerido no checkout.

## INOVAR (gaps reais das reclamações de donos)
1. **Sistema cai no pico** = pedido perdido (dor nº1). → offline-first de verdade + "modo lotação".
2. **Suporte lento / some pós-venda**; bar opera 19h–3h e suporte é 9h–18h. → suporte janela noturna.
3. **Dependência de vários sistemas** (front-end + PDV + fiscal separados, integração falha). → tudo nativo.
4. **Estoque de bar mal resolvido**: ninguém trata bem dose×garrafa×fração nem rendimento de coquetelaria nem perda/quebra. → **GAP GIGANTE pro Medellín**.
5. Cancelamento/fidelidade com fricção. → cobrança transparente.
6. Config inicial pesada (a empresa cadastra o cardápio pelo cliente). → onboarding que importa de cardápio digital existente (ex: o Cardapiando que o Medellín já usa).

## 5 features que NINGUÉM tem (pensadas pra music bar)
1. **Estoque por dose com rendimento de garrafa + alerta de quebra** (garrafa = N doses; debita por dose; mostra doses restantes; custo por drink; sinaliza divergência).
2. **Modo Balada/Couvert + Música ao Vivo** (couvert artístico auto por pessoa; consumação mínima; lista/aniversariante).
3. **Auto-pedido com "trilha do drink" + venda-junto inteligente + tempo estimado** ("seu drink sai em ~6 min").
4. **Painel "ritmo da casa" ao vivo** (heat map de mesas paradas, bar congestionado, faturamento/hora vs banda tocando — pra promoção relâmpago).
5. **Comanda por pulseira/QR pré-paga pra pista** (carrega crédito, consome sem abrir conta, devolve e recebe troco).

## Preço (referência)
Modelo dominante = assinatura mensal por módulos. GrandChef Lite R$89,90 / Pro R$129,90 + add-ons; Yooga ~R$269/mês; Consumer free até 200 pedidos/mês; Saipos/Goomer/Colibri/Linx sob consulta. **Faixa de entrada ~R$90–270/mês, sobe com módulos. Hardware à parte.**
→ Reforça: nosso R$2.997 **único e dele** se paga em <1 ano vs aluguel mensal eterno de sistema genérico.
