# Estudo do Sistema de Referência — TôNoLucro (Tonolucro Express)

> Teardown do app que o cliente citou como exemplo. Feito em 29/05/2026.
> Conclusão de abertura: **o melhor benchmark possível nasceu na porta do cliente.** TôNoLucro é de **Palmas-TO**, virou case nacional e foi comprado pela Magalu. O cliente não citou um app aleatório — citou o player que dominou o território que ele quer entrar.

---

## 1. O que é o TôNoLucro (e por que importa pra esse projeto)

- **Fundado em Palmas-TO** em 2015 por **Darley Passarin e Fábio Varanda**, donos da agência digital ArtemSite (de Palmas). Começou como site de compras coletivas, virou delivery.
- **2017:** vira modelo de **franquia** pra escalar geograficamente.
- **+4,3 milhões de entregas**, **~5.000 estabelecimentos**, **~2.000 entregadores credenciados**, **+40 cidades** (TO, GO, PA e depois SP/PR/MG/BA).
- **30/03/2021:** comprado pela **Magazine Luiza (Magalu)** — colocou a Magalu como 4ª maior do delivery no Brasil. Valor não divulgado.
- Hoje tem duas frentes: **TôNoLucro Delivery** (marketplace de comida/farmácia/pet/mercado, estilo iFood) e **Tonolucro Express** (entrega sob demanda pra qualquer negócio — *este é o gêmeo do que o cliente quer*).

**Por que isso é ouro pro projeto:** dá pra copiar o que funcionou de um case validado no MESMO mercado, e atacar exatamente o que eles não fazem bem (ver seção 6).

---

## 2. Tonolucro Express — o modelo que o cliente quer replicar

O Express se vende como **"agência de logística sob demanda"**: o pequeno negócio oferece delivery sem manter frota própria.

| Dimensão | Como o TôNoLucro faz |
|---|---|
| **Fluxo** | Negócio pede coleta/entrega → entregadores próximos são notificados → um aceita → coleta → entrega → baixa. |
| **Veículos** | Moto ou carro. (Delivery clássico também tem bike.) |
| **Equipamento** | TôNoLucro **cede grátis** bag, baú e carretinha pra uso/devolução diária. Moto/veículo é responsabilidade do entregador. |
| **Rastreio** | Geolocalização em tempo real pro solicitante + **SMS opcional a cada mudança de status**. |
| **Precificação** | Por variáveis: **km rodado + ponto de coleta + nº de pontos de entrega + retorno ao coleta + tempo de espera**. (Não é tabela fixa — é fórmula.) |
| **Horário** | Todos os dias, **08h às 00h**. |
| **App do entregador** | Existe nativo (Google Play: `com.tonolucro.express.driver`). Recebe pedidos por **app ou e-mail**, por **região escolhida**. |

**Insight de produto:** a precificação por fórmula (km + paradas + espera + retorno) é mais sofisticada que "preço fixo por entrega" e é o que dá conta de B2B de verdade (negócio quer pagar pelo que usou). Vale replicar essa lógica.

---

## 3. Modelo de remuneração e comissão

- **Marketplace (Delivery):** comissão de **25% em comida** e **15% em industrializados**. A comissão maior em comida cobre perda/avaria/chargeback/acidente.
- **Express (sob demanda):** entrega mínima de **R$ 4,99**, e o **entregador fica com 75%** (plataforma retém ~25%).
- Discurso comercial: **"recebe por produtividade"**, sem taxa de adesão pra entrar. Atrai os dois lados.
- Pós-Magalu: adicionou **maquininha de cartão** pro entregador (meio de pagamento na ponta).

**Leitura:** 25% de take rate é o padrão da casa, espelha Lalamove (~16-20%). Pro cliente, ~20-25% é defensável.

---

## 4. Cadastro e requisitos do entregador (o que eles exigem)

- **Tem que ser MEI** (microempreendedor individual). — Isso resolve o vínculo trabalhista e joga a responsabilidade fiscal pro entregador.
- **Moto:** CNH categoria **A** + **CRLV** + **RENAVAM**.
- **Bike:** RG + CPF + maioridade.
- Cadastro por formulário web (`/seja-um-entregador`), escolhe região e período de trabalho.

⚠️ **Achado mais importante do estudo:** em nenhuma página pública (FAQ, cadastro, ajuda) o TôNoLucro destaca **verificação de antecedentes criminais**. Eles exigem documento e MEI, mas **não vendem "entregador com antecedente auditado" como diferencial.** 

→ **Isso é exatamente a brecha do cliente.** Se o pedido dele é "sistema de análise de antecedentes", ele pode posicionar como **"o delivery B2B com entregador verificado"** — algo que nem o líder de mercado local oferece de forma explícita. Para encomenda de **valor/empresa** (não comida), confiança no entregador vale mais que em pedir um lanche. É um recorte real e defensável.

---

## 5. Modelo de expansão por franquia (como eles entraram em cada cidade)

- Investimento **customizado por cidade** (estudo de viabilidade caso a caso).
- Faixa ideal de cidade: **20 mil a 300 mil habitantes**. (Palmas tem ~300 mil → encaixe perfeito; foi onde nasceram.)
- O franqueado recebe **pacote completo**: vendas, tecnologia, logística, cardápio, comunicação de varejo, meios de pagamento, suporte.
- Posicionamento: **"super fornecedor"**, não "só um app".

**Leitura estratégica:** o TôNoLucro provou que **cidade média do interior tem demanda e dá lucro** — derruba o medo de "Palmas é pequena demais". E o modelo de franquia mostra um caminho de monetização futuro pro cliente (licenciar a operação pra outras cidades da região: Porto Nacional, Paraíso, Gurupi, Araguaína).

---

## 6. Responsabilidade — como o líder lida com o risco que levantei no dossiê

Ponto que conecta com a seção 4 do DOSSIE (responsabilidade civil):
- O TôNoLucro **assume a responsabilidade financeira** por problemas na entrega (fraude, acidente, endereço inexistente). A comissão maior em comida (25%) **embute esse custo de perda**.

→ Confirma o que levantei: a plataforma **vai** ser cobrada por extravio (CDC, responsabilidade solidária). O líder de mercado **não foge disso — ele precifica.** O cliente precisa fazer igual: take rate tem que cobrir o risco, OU seguro de carga, OU teto de valor declarado. **Não dá pra montar o app fingindo que esse risco não existe.**

---

## 7. O que copiar, o que evitar, onde superar

**COPIAR (validado pelo líder):**
- Precificação por fórmula (km + paradas + espera + retorno) em vez de preço fixo.
- Exigir MEI do entregador (blinda vínculo trabalhista).
- Requisitos por tipo de veículo (CNH A + CRLV + RENAVAM pra moto).
- Rastreio em tempo real + status por SMS/notificação.
- Take rate ~20-25% que embute o risco de perda.
- Foco em cidade média — Palmas já provou que funciona.

**EVITAR:**
- Misturar comida no MVP. TôNoLucro/iFood/aiqfome dominam comida. O cliente disse explicitamente: **NÃO é comida.** Brigar nesse terreno é suicídio. Manter o recorte B2B/encomenda.
- Prometer cobertura de +40 cidades de cara. Eles levaram anos + franquia + compra da Magalu. Começar Palmas e provar.

**SUPERAR (a brecha real):**
- **Entregador verificado por antecedentes** como bandeira de frente — o líder não faz isso de forma explícita.
- Foco **100% B2B de encomenda de valor** (documento, peça, produto de empresa) — o Express deles é genérico e secundário ao marketplace de comida.
- **Trilha de auditoria forte** (foto coleta + GPS + foto/assinatura entrega) como prova jurídica e argumento de confiança pra empresa.

---

## 8. Risco competitivo a não ignorar

O TôNoLucro **já está em Palmas, é nascido lá, tem marca, tem os 2 lados (negócios + entregadores) e tem Magalu atrás.** Entrar de frente contra eles em "delivery genérico" perde. 

A única entrada viável é o **recorte estreito e defensável**: B2B de encomenda + entregador verificado + confiança auditada. Nicho que o gigante não prioriza. É o playbook clássico de entrar por baixo do radar do líder, no segmento que ele trata como secundário.

---

## Fontes
- Origem/história/Magalu: [AF Notícias](https://afnoticias.com.br/estado/magazine-luiza-compra-famoso-aplicativo-tocantinense-tonolucro-apos-sucesso-do-app)
- Tonolucro Express (modelo, veículo, rastreio, preço): [tonolucro.express](https://tonolucro.express/) · [para-seu-negocio](https://tonolucro.express/para-seu-negocio/) · [FAQ](https://tonolucro.express/faq/)
- Plataforma/comissão/responsabilidade: [saipos.com/tonolucro](https://saipos.com/tonolucro)
- Requisitos entregador (MEI, CNH A, 75%, R$4,99): [tonolucro.com/entregador](https://tonolucro.com/entregador) · [ajuda/entregador](https://tonolucro.com/ajuda/entregador)
- Franquia: [tonolucro.com/franqueado](https://tonolucro.com/franqueado) · [seja-um-franqueado](https://tonolucro.express/seja-um-franqueado/)
- App entregador: [Google Play](https://play.google.com/store/apps/details?id=com.tonolucro.express.driver)
