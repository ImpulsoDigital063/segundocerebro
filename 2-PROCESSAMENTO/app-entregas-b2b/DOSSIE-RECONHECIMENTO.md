# Dossiê de Reconhecimento — App de Entregas B2B (Palmas-TO)

> Missão de estudo deixada pelo Eduardo na noite de 29/05/2026.
> Cliente quer contratar a Impulso pra criar um app de entrega de **encomendas de negócios** (não comida): dono de negócio se cadastra, motorista/motoboy se cadastra, com **sistema de análise de antecedentes**. Início em **Palmas-TO e região**.
>
> Status: levantamento feito. Faltam decisões do cliente (ver seção 10) antes de cravar escopo e preço.

---

## 1. O que entendi do briefing (e o que falta)

**O pedido em uma frase:** um marketplace de entregas sob demanda, estilo "Uber/Lalamove de encomendas", focado em B2B (negócio manda, motoboy entrega), com filtro de segurança no cadastro do entregador.

**Três lados na plataforma:**
- **Negócio (quem paga)** — pede a coleta/entrega, acompanha em tempo real, paga.
- **Entregador (motoboy/motorista)** — recebe o pedido, aceita, entrega, recebe.
- **Admin (o cliente / a Impulso operando)** — aprova cadastros, roda os antecedentes, resolve disputa, vê o caixa.

**Lacunas que só o cliente responde (detalhadas na seção 10):**
- É marketplace aberto (qualquer negócio pega) ou fechado (carteira fixa de clientes dele)?
- O cliente vai ser o operador/dono da frota ou só dono da plataforma?
- Entrega é só dentro de Palmas ou intermunicipal de verdade (região)?
- Quem assume o prejuízo se a encomenda some/quebra?

---

## 2. Concorrência — quem já joga e onde está o buraco

**Os grandes (sob demanda, B2B incluso):**
- **Lalamove** — moto, carro, van, caminhão. Cobra **15,99% a 19,99% de comissão** do entregador (adesivo na moto vs sem adesivo). Está em ~18 capitais. **NÃO está em Palmas.**
- **Borzo** (ex-Click Entregas, grupo Dostavista, 11 países) — preço por km. Em SP: R$18 até 6km + R$1,70/km extra + R$3,67/parada. **Capitais grandes, não Palmas.**
- **Loggi Expresso** — moto urbano, 24h, região metropolitana.
- **Uber Flash** — envio de pacote dentro do Uber. **Opera em Palmas** (tem página de courier pra Palmas-TO).
- **Aiqfome** — "maior do interior", opera em Palmas, mas é food/varejo.

**Leitura do gap:** os players nacionais de encomenda B2B (Lalamove/Borzo) **não pisaram em Palmas**. Quem cobre lá é Uber Flash (genérico, sem foco B2B nem antecedentes), aiqfome (comida) e **motoboys avulsos** (TeleListas/EncontraPalmas listam empresas locais soltas, sem app, sem padronização, sem rastreio).

**Onde mora a oportunidade:** o diferencial não é "mais um app de entrega" — é o **B2B regional com confiança auditada**. Negócio em Palmas que precisa mandar documento/peça/encomenda de valor quer saber QUEM vai carregar aquilo. Esse é exatamente o pedido do cliente (antecedentes) e é o que Uber Flash/motoboy avulso não entregam. **O antecedente não é feature acessória — é o posicionamento.**

⚠️ Não cravar "primeiro/único em Palmas" sem varredura exaustiva (regra λ.unicidade). Uber Flash já está lá. O recorte defensável é "B2B + entregador verificado + regional", não "primeiro app de entrega".

---

## 3. Sistema de antecedentes — o coração do pedido

Esse é o requisito que o cliente nomeou. Boa notícia: **não se constrói do zero, se integra via API.** Existe mercado maduro no Brasil.

### Fornecedores mapeados

| Fornecedor | O que faz | Preço | Observação |
|---|---|---|---|
| **FlagCheck** | Background check por CPF: processos criminais (foco roubo de carga, furto, receptação, estelionato), listas restritivas, protestos, sócio de empresa irregular | **R$ 3,33/consulta**, sem mensalidade, relatório em ~30s | Pensado pra motoboy/entregador/delivery. **NÃO inclui CNH** (separado). Volume >50 = comercial. |
| **idwall** | Background check de +250 fontes, KYC, verificação de documento (foto da CNH/RG), prova de vida facial | Sob contrato (enterprise) | Mais robusto, mais caro. Bom quando escalar. |
| **Infosimples** | APIs avulsas: validar CNH no RENACH/Senatran, infrações, CRLV | Por consulta | Bom pra montar o "combo" CNH + veículo. |
| **Netrin** | Verificação de veículos e motoristas combinada | Por consulta | Alternativa ao combo Infosimples. |

### O combo de verificação que eu montaria no cadastro do entregador

1. **CPF + antecedentes criminais** (FlagCheck ~R$3,33) — barra quem tem histórico de crime contra patrimônio/carga.
2. **Validação de CNH** (Infosimples/Senatran) — CNH existe, está válida, categoria certa (A pra moto), não suspensa/cassada.
3. **CRLV do veículo** — moto/carro regular, não roubado.
4. **Selfie + prova de vida** (idwall ou similar) — a pessoa do cadastro é o dono do documento (anti-laranja).
5. **Re-verificação periódica** — antecedente não é "uma vez". Lei de mobilidade (13.640/2018) exige atestado validado *e revalidado*. Rodar de novo a cada X meses.

**Custo unitário real:** somando, ~R$ 5 a R$ 10 por entregador aprovado. Isso é custo operacional do cliente, não do app — entra na conta da precificação dele (cobrar taxa de adesão do entregador OU embutir na comissão).

**Ponto jurídico (LGPD):** dado de antecedente é **dado pessoal sensível**. Tem que ter consentimento explícito do entregador, base legal, e não pode vazar nem aparecer em URL/print (λ.token-nunca-em-url vale aqui também). O relatório fica no admin, nunca exposto ao negócio que contrata.

---

## 4. Aspectos legais e de risco (isso protege o cliente E a Impulso)

**Responsabilidade da plataforma é o maior risco do negócio.** Levantamento jurídico:

- Pelo **CDC**, o fornecedor do serviço responde **solidariamente** pelos atos de prepostos e **representantes autônomos** — mesmo sem vínculo empregatício. Ou seja: se o motoboy some com a encomenda, a plataforma **pode** ser responsabilizada. Já há decisão (Diário do Nordeste) responsabilizando app de entrega por encomenda extraviada pelo motorista.
- **Roubo/furto não exime automaticamente.** O tribunal exige provar que a empresa tomou todas as medidas pra evitar (aí o antecedente vira defesa jurídica, não só marketing).
- **Lei 11.442/2007** (transporte rodoviário de cargas) regula transportadora e autônomo.
- **Excludentes:** força maior, fato exclusivo de terceiro, culpa da vítima.

**Implicações de produto (o que o app precisa ter pra blindar):**
- **Seguro de carga** — opcional ou embutido por faixa de valor da encomenda. Define teto de indenização.
- **Termo de responsabilidade** no aceite de cada corrida (entregador declara recebimento, foto da coleta e da entrega, assinatura digital do destinatário).
- **Trilha de auditoria** — foto na coleta, GPS do trajeto, foto/assinatura na entrega. É prova jurídica e reduz disputa.
- **Limite de valor declarado** por categoria de veículo/entregador.

Isso não é over-engineering: é o que separa "app de amador" de "plataforma que aguenta um processo". Vale levar pro cliente como argumento de valor (e pra Impulso não herdar passivo).

---

## 5. Modelo de negócio — como isso fatura

**Referência de mercado:** Lalamove tira **15,99–19,99%** de comissão do entregador. Borzo cobra do negócio por km (R$18 base + R$1,70/km).

**Modelos possíveis pro cliente (não excludentes):**
- **Comissão %** sobre cada entrega (padrão marketplace, 15–20%).
- **Preço por km/zona** cobrado do negócio (mais previsível, bom pro B2B).
- **Assinatura** do negócio (mensalidade pra quem manda muito — pacote de entregas).
- **Taxa de adesão/verificação** do entregador (cobre o custo do antecedente).

Pro recorte B2B regional, eu testaria **preço por zona/km cobrado do negócio + pequena comissão**, porque empresa quer previsibilidade de custo, não leilão de corrida.

---

## 6. Arquitetura técnica — encaixe na stack do Impulso

A stack atual (Next.js + Supabase + Vercel, igual AgendaPRO/Palace/Starteq) **cobre 80% disso**. O que é novo:

**Reaproveita do que já temos:**
- Multi-tenant, auth, painel admin (padrão canônico de painel SaaS já documentado).
- Cadastro de usuários por papel + permissões (igual recepção/gerente do Palace).
- Financeiro/caixa (Starteq/Palace).
- Regra tri-modal mobile/tablet/desktop (o entregador vive no celular — mobile-first de verdade aqui).

**Peças novas a integrar (o trabalho real):**
1. **Geolocalização em tempo real** — posição do motoboy no mapa. Supabase Realtime + Mapbox/Google Maps.
2. **Matching/dispatch** — achar o entregador disponível mais perto e oferecer a corrida.
3. **Rotas e ETA** — Google Directions / Mapbox.
4. **APIs de verificação** — FlagCheck + Infosimples (seção 3), rodadas no fluxo de aprovação do cadastro.
5. **Pagamento split** — Pix/cartão com repasse pro entregador descontando comissão (gateway tipo Asaas/Pagar.me/Stripe Connect).
6. **Push notification** — corrida nova, status, chegou.
7. **App do entregador** — pode ser PWA mobile-first no começo (mais rápido/barato) e depois app nativo na loja se precisar de GPS em background pesado.

**Risco técnico maior:** GPS em tempo real e dispatch confiável. Não é "mais uma tela" — é a parte que, se falhar, mata o produto. Provar isso primeiro (read-after-write / prova-na-fonte vale: rastreio que diz "entregue" tem que bater com a realidade).

---

## 7. Escopo MVP sugerido (pra não inflar — λ.não-expandir-speculativo)

**MVP enxuto pra rodar em Palmas e validar:**
- Cadastro de negócio + cadastro de entregador com **fluxo de antecedentes** (o diferencial).
- Pedido de entrega (origem, destino, descrição, valor declarado).
- Matching simples + aceite do entregador.
- Rastreio em tempo real + foto coleta/entrega + assinatura.
- Pagamento (começar simples: Pix + repasse manual/semi se preciso, automatizar depois).
- Painel admin: aprovar cadastro, ver antecedente, acompanhar entregas, caixa.

**Fica pra fase 2 (só se o uso pedir):** leilão de corrida, multi-parada, agendamento, seguro automatizado por faixa, app nativo, intermunicipal pesado, assinatura B2B.

Não construir fase 2 antes de o MVP rodar com gente real em Palmas. (Mesma lógica do Palace: espera o uso real pedir.)

---

## 8. Precificação do projeto (framework, não número cravado)

Sem o escopo fechado (seção 10) qualquer número é chute. Mas o enquadramento:

- Isso é **muito maior** que uma LP ou um painel CRUD. É produto com GPS em tempo real, matching, pagamento split e integrações de terceiros. Categoria "software premium/SaaS sob medida", não "site".
- Modelo de cobrança alinhado ao padrão Impulso: **entrada 50% + saldo flexível + 1 bônus recorrente**, sem descer o preço-âncora (λ.pricing-5050).
- Considerar **dois formatos:** (a) projeto fechado de MVP, ou (b) MVP + mensalidade de operação/manutenção (faz mais sentido num produto que vai rodar e evoluir).
- Custos recorrentes que NÃO são da Impulso e precisam estar claros pro cliente: APIs de antecedente (~R$5-10/entregador), mapas (Google/Mapbox por uso), gateway de pagamento (% por transação), Supabase/Vercel.

Levar a conversa de preço só depois de cravar escopo. Vender o **antecedente + blindagem jurídica + rastreio** como valor, não o "app".

---

## 9. Por que esse projeto faz sentido pra Impulso

- Gap real: B2B de encomenda verificada não está coberto em Palmas (Lalamove/Borzo não chegaram).
- Reaproveita ~80% da stack e dos padrões já dominados (painel SaaS, multi-tenant, tri-modal, financeiro).
- O diferencial pedido (antecedentes) é integração de API madura, não P&D do zero.
- É o tipo de produto que vira **receita recorrente** (operação contínua), não projeto one-shot.

**Riscos a não subestimar:** responsabilidade civil da plataforma (seção 4), confiabilidade do GPS/dispatch (seção 6), e o fato de que marketplace só funciona com **liquidez dos dois lados** (negócios E entregadores ao mesmo tempo) — galinha-e-ovo clássico. Perguntar ao cliente como ele pretende trazer os dois lados no começo.

---

## 10. Perguntas pra cravar com o cliente (uma decisão por vez — λ.destrinchar)

1. **Quem é você no negócio?** Dono da plataforma só, ou também vai operar a frota / já tem motoboys?
2. **Marketplace aberto ou carteira fechada?** Qualquer negócio de Palmas usa, ou começa só com clientes seus?
3. **Raio de operação:** só Palmas cidade, ou intermunicipal de verdade (Porto Nacional, Paraíso, região)?
4. **Quem assume o prejuízo** se a encomenda some/quebra? (define se entra seguro no MVP)
5. **Quem paga o antecedente** — o entregador (taxa de adesão) ou a operação absorve?
6. **Modelo de receita preferido:** comissão %, preço por km/zona, assinatura, ou misto?
7. **Já tem os dois lados?** Como pretende trazer negócios E entregadores no lançamento (o galinha-e-ovo)?
8. **Marca/nome/identidade** já existe ou a Impulso cria?
9. **Prazo e orçamento** na cabeça dele (pra calibrar MVP vs. completo).
10. **Volume esperado** no primeiro mês (define a infra e o custo de API).

---

## Fontes consultadas
- Lalamove Brasil — comissão e cobertura: [lalamove.com](https://www.lalamove.com/pt-br/) · [perguntas-frequentes](https://www.lalamove.com/pt-br/perguntas-frequentes)
- Borzo / modelo de preço: [remessaonline.com.br/blog/lalamove](https://www.remessaonline.com.br/blog/lalamove/)
- FlagCheck — antecedentes motoboy/entregador (R$3,33): [flagcheck.com.br/blog](https://flagcheck.com.br/blog/verificar-antecedentes-motorista-motoboy-entregador) · [api-parceiros](https://flagcheck.com.br/api-parceiros/)
- idwall — verificação de motoristas: [blog.idwall.co/verificacao-de-motoristas](https://blog.idwall.co/verificacao-de-motoristas/) · [background-check](https://idwall.co/background-check/)
- Infosimples — validar CNH Senatran: [infosimples.com/consultas/senatran-validar-cnh](https://infosimples.com/consultas/senatran-validar-cnh/)
- Responsabilidade civil de plataforma de entrega: [migalhas.com.br](https://www.migalhas.com.br/depeso/351234/o-golpe-do-delivery-e-a-responsabilidade-das-plataformas-de-entrega) · [Diário do Nordeste](https://diariodonordeste.verdesmares.com.br/ultima-hora/seu-direito/servico-de-entrega-por-aplicativo-pode-ser-responsabilizado-por-encomenda-extraviada-por-motorista-1.3027495)
- Mercado Palmas-TO: [Uber courier Palmas](https://www.uber.com/br/pt-br/b/courier-services/palmas-to-br/) · [EncontraPalmas motoboys](https://www.encontrapalmas.com.br/m/motoboys-em-palmas.shtml)
