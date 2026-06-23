# Gap de funcionalidades — APPDELYVERY × grandes (Lalamove, Loggi, Uber Direct, Borzo, Bee)

> Pesquisa de campo 04/06/2026. Objetivo: **igualar o mercado primeiro**, depois diferenciar.
> Lista o que os grandes têm que a gente ainda NÃO tem, priorizado pro nosso B2B de encomenda.

## O que JÁ temos (paridade conquistada)
3 veículos com preço · oferta dirigida (dispatch) · rastreio ao vivo (GPS) · **comprovante forte
(foto + assinatura + PIN/código)** · chat 3-pontas · cancelamento com motivo · carteira pré-paga ·
**API de integração + webhook** · verificação de antecedentes (tomadas) · suporte/disputas ·
selos de verificação visíveis (nosso wedge).

---

## BEE — o concorrente local de Palmas (detalhado)
"Painel das Empresas" (web + app "Bee Central"). Ao criar a entrega: origem, destino,
**se o entregador deve RETORNAR (return)**, veículo, **compartimento (bag/baú)**, observações.
- **Proteção de Carga (seguro):** ressarcimento **até R$300** (furto, roubo, estelionato, avaria, apropriação indébita). **A Bee TEM seguro — a gente não.**
- **Pagamento:** **Pix + Cartão + Boleto** (Pix/cartão na hora, boleto 3 dias úteis). A gente só tem carteira.
- **Modelo:** **pré-pago** (recarga, saldo expira em 3 meses), sem mensalidade. → *Logo, nosso pré-pago é PARIDADE com a Bee; faturado/pós-pago é pra bater Borzo/enterprise, não pra igualar a Bee.*
- **Relatórios:** total de entregas/roteirizações, desempenho 6 meses, filtros, relatório de saldo.
- **"Colmeia":** pré-reserva de N entregadores num intervalo (data/hora/duração/valor-hora) — pra pico de demanda. Agendamento avançado.
- **Modelo de negócio:** franquia (franqueados faturam alto) + parceria **Modal** (seguros + crédito). E os Termos exigem entregador **sem antecedentes** (já anotado — moat é fazer ATIVO/visível).

## GAPS — o que falta (priorizado)

### P0 — PARIDADE COM A BEE (pra disputar Palmas, esse é o bar real)
1. **Seguro / Proteção de Carga** — a **Bee oferece (até R$300)**; a gente não. Pra um lojista de Palmas escolher a gente em vez da Bee, precisa ter pelo menos cobertura equivalente. Decisão de negócio (parceiro de seguro) + código. *Crítico local.*
2. **Pix + Cartão (além da carteira)** — a Bee aceita **Pix, cartão e boleto**; a gente só carteira pré-paga. Recarga/pagamento por Pix é o mínimo. *(Asaas resolve os dois — Pix + futura cobrança.)*
3. **Opção de RETORNO** ao criar o pedido — a Bee tem ("entregador deve retornar?"). Hoje não tratamos.
4. **Relatórios pro lojista** — a Bee mostra total/desempenho/saldo. Temos no admin, falta no lojista.

### P0b — pra bater Borzo / fechar CONTA GRANDE (enterprise)
5. **Pagamento FATURADO / pós-pago CNPJ** — Borzo: usa 30 dias, paga em 10 (boleto). A Bee é **pré-pago** (igual a gente), então isso NÃO é paridade com a Bee — é um **trunfo pra cliente grande** que não quer pré-pagar. Importante, mas não é o que iguala o jogo local.
6. **Cotação de preço (quote)** — preço ANTES de criar (Uber Direct). Já temos o cálculo; é expor. Necessário pra integração limpa.
7. **Agendamento** — entrega futura/recorrente (todos, e a Bee via "Colmeia"). Hoje só imediato.

### P1 — valor forte, diferencia o serviço
4. **Múltiplas paradas** — 1 coleta → várias entregas (Lalamove até 19-20 paradas; Uber Direct; Borzo). Eficiência grande pra quem manda muito.
5. **Devolução / return trip** — se o cliente final não está, o entregador devolve a encomenda (Uber Direct "return"). Hoje não tratamos a entrega falha.
6. **Verificação estruturada na COLETA + dados do recebedor** — Uber Direct faz pickup verification (foto/código) e no dropoff captura **ID/CPF do recebedor**. A gente tem foto na coleta + PIN na entrega; falta capturar **quem recebeu (nome/doc)** — e isso CASA com nosso eixo de confiança/comprovação.
7. **Instruções de entrega** (campo livre pro entregador: "deixar na portaria", "ligar antes") — Lalamove. Hoje só temos descrição da carga.

### P2 — bom ter, não bloqueia
8. **Seguro da carga** — Borzo/Lalamove citam. Temos valor_declarado; falta apólice/cobertura (decisão de negócio + parceiro).
9. **Tipos de entrega** (Regular / Prioridade-express / Agrupada) — Lalamove. Hoje modo único.
10. **Endereços favoritos/salvos** — não redigitar coleta toda vez.
11. **Relatórios/analytics pro lojista** (exportar, gráficos) — temos no admin, não no lojista.
12. **Conta corporativa multi-usuário com permissões** — Lalamove. Temos a base (negocio_operadores).
13. **Múltiplos métodos de pagamento** (Pix, cartão além da carteira) — Borzo.

---

## Ordem de construção sugerida (igualar a Bee primeiro)
1. **Pix/Asaas + cotação de preço** — recarga por Pix (Asaas) já casa com o financeiro pendente; quote é rápido (expor o cálculo). Destrava pagamento + integração.
2. **Proteção de carga (seguro)** — pelo menos igualar os R$300 da Bee (modelo + cobertura).
3. **Retorno + relatórios pro lojista** — paridade direta com o painel da Bee.
4. **Agendamento** → demanda comum.
5. **Faturado/pós-pago CNPJ** → trunfo pra conta grande.
6. **Múltiplas paradas / devolução / recebedor (nome-doc)** → eficiência + reforço de confiança.
7. Resto (P2) conforme pedido real.

## Fontes
- Lalamove: lalamove.com/pt-br/multiplas-paradas · blog tipos de entrega · entrega agendada
- Loggi: loggi.com (coleta agendada/recorrente, comprovante digital, rastreio)
- Uber Direct: developer.uber.com/docs/deliveries (proof of delivery foto/assinatura/PIN/barcode, returns, multi-stop, white-label)
- Borzo: borzodelivery.com/br/empresa (faturado boleto CNPJ 30d, carteira, seguro, 3 veículos, agendado)
