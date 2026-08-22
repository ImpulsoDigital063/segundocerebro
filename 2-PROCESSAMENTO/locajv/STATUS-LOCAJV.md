# STATUS — LocaJV · Gestão de Tráfego Meta Ads
**Aberto:** 29/07/2026 · **Cliente:** LocaJV, locação de motos, Goiânia-GO
**Serviço:** gestão de tráfego — 1 mês · **Honorário:** R$900 (Impulso) · **Verba de anúncio:** R$350-400 na semana 1, **paga pelo cliente**

> Primeira venda de gestão de tráfego da Impulso Digital. Frente nova, fora do escopo de software house.
> Até 26/04/2026 o segundo-cérebro registrava "LocaJV NÃO é cliente — ainda não pronto" (junto de Janaína e Irsnayra, no fix de cases falsos, commit `79449b1`). **Isso mudou: virou pagante em 29/07/2026.** As outras duas continuam fora.

🔥 **09/08/2026 — segunda frente com o mesmo cliente:** o Jay pediu um sistema que atende lead no WhatsApp e cobra os locatários sozinho. Proposta entregue. Detalhe em [[PROJETO-SISTEMA-WHATSAPP]].

---

## 1. O negócio

| Item | Dado |
|---|---|
| Local | Jardim Ipanema, Goiânia-GO |
| Instagram | @locajv |
| Frota | "+ de 50 motos" · **15 disponíveis** pra locação |
| Modelos | Honda **START 160** · **FAN 160** · **TITAN 160** |
| Preço semanal | Start **R$295** · Fan **R$300** · Titan **R$300** ("a partir de") |
| Incluso | seguro · manutenção · IPVA/licenciamento · guincho 24h · km livre — *"tudo por conta da empresa"* |
| Promo | contrato de **4 meses ou mais** → **1ª semana R$199,99** |
| Plano Aquisição | IPVA por conta da empresa; 1ª semana paga só o caução + R$199,99 |
| Indicação | indicou amigo que fechou → **R$100 no Pix** ou R$100 de desconto na semana seguinte (exigem seguir o Instagram) |

**O ativo mais forte que eles têm e quase não usam:** seguro + manutenção + IPVA + guincho 24h + km livre. Pro entregador, o medo não é o preço da semana — é a moto quebrar na terça e ele parar de faturar.

---

## 2. Posição competitiva (detalhe em `pesquisa/01`)

**Ganha:** disponibilidade real (15 motos vs. Líder Locadora com **zero em Goiânia**) · preço igual ou melhor que Loca10 (R$314-384/sem) e que o mensal da MotoClick (R$349) · contrato mais curto que Loca10/062/Motoflix · **reputação limpa** contra o histórico ruim da Mottu no Reclame Aqui (moto malcuidada, atendimento fraco, sem selo de confiança).

**Perde:** reconhecimento de marca frente à Mottu, que domina a busca e tem parceria com o iFood (desconto na caução).

**Padrão de mercado:** caução R$600-800 e "sem consulta ao SPC" em quase todos.

---

## 3. 🔴 Bloqueadores antes de subir campanha

**1. ✅ RESOLVIDO em 09/08/2026 — o número é (62) 99659-9081.** Circulavam três: 99659-9081, 99999-3777 e o 9829-7805 que a Página do Facebook cadastrou. O painel do sistema de gestão do Jay (Velo) mostra **62996599081** no campo "Whatsapp da Locadora" — é o número oficial da operação. Usar esse no anúncio.

**2. A arte "Indique um amigo, ganhe R$100 no Pix" NÃO pode ir pra mídia paga.** Único veredicto categórico da pesquisa: dinheiro em troca de engajamento ("siga o Instagram pra participar") viola a política de Spam do Meta, e ela **não distingue orgânico impulsionado de anúncio pago**. Serve pro orgânico e pro grupo de clientes atuais. ([detalhe](pesquisa/05-politica-meta-veredicto-por-frase.md))

**3. Três logos e duas taglines circulando** — "Sua jornada, nossa responsa." / "Sua mobilidade é aqui!" / "Locação de motos", com símbolo diferente em cada arte. **O dono aponta qual é o oficial. Não redesenhar nada.**

**4. "15 DISPONÍVEIS" cravado na imagem** envelhece em dias. Escassez vai na legenda, onde se edita sem refazer arte.

---

## 4. Regras de copy pra essa campanha

| Não escrever | Por quê | Escrever no lugar |
|---|---|---|
| "ganhe R$X por dia rodando" | promessa de valor específico → Unacceptable Business Practices | o que ele deixa de gastar (manutenção, IPVA, seguro) |
| "TRABALHE E GANHE MAIS" como headline | risco de leitura como oferta de renda/emprego | "a moto não para, e se parar o guincho é nosso" |
| "sem consulta ao SPC" | pode puxar pra Financial Products and Services | "documentação simples" |
| "vaga", "trabalhe com a gente" | categoria especial emprego → perde segmentação | "moto pronta pra retirar" |
| exigir seguir o Instagram por prêmio | 🔴 Spam / engagement bait | promoção sem condicionar engajamento |

**Pode usar:** "Não compre moto. Alugue e rode tranquilo" · "Motos prontas para trabalhar" — ambos aprovados na leitura de política.

---

## 5. Estrutura definida (detalhe em `pesquisa/04`)

- **1 campanha, 1 conjunto único, 3-4 criativos dentro dele.** Com R$50/dia, dividir em dois conjuntos pulveriza o sinal e os dois ficam "Learning limited"
- **Objetivo:** Cadastros (Leads) com destino WhatsApp. Se em 48h não gerar conversa, trocar pra Engajamento
- **Verba:** começar em **R$20-30/dia nos primeiros 3-5 dias** (conta nova), subir depois — nunca mais de 20% de uma vez
- **Raio:** 8-10km do ponto de retirada (palpite de mercado, não regra oficial)
- **Aprendizado:** o Meta exige **~50 eventos/semana** pra sair do "Learning limited". Com R$50/dia e evento "conversa iniciada" é factível; com evento mais fundo, não. Ficar Learning limited nessa verba **é esperado, não é erro**
- **Antes de ligar:** saudação automática + respostas rápidas no WhatsApp Business (preço da semana, documentos, disponibilidade)

---

## 6. Acesso e dinheiro (detalhe em `pesquisa/03`)

✅ **Caminho certo:** BM do **cliente** → Configurações do negócio → Parceiros → "Conceder a um parceiro acesso aos seus recursos" → inserir o **Business ID da Impulso**. Nunca login e senha.

- Página, conta de anúncio, pixel e Instagram **ficam no BM do cliente**. No fim do contrato, remove o parceiro — o cliente mantém tudo
- Meio de pagamento: **cartão do cliente**, cadastrado no BM dele
- 🔒 **Configurar limite de gasto da conta** como proteção contra estouro
- ⚠️ **Tributação Brasil 2026: o Meta destaca ~12-12,5% de imposto separado do valor de mídia.** R$400 de verba **não** são R$400 de mídia. Ajustar a projeção de CPL e avisar o cliente

---

## 🔴 BLOQUEADOR Nº1 — CONTA RESTRINGIDA DE ANUNCIAR (descoberto 30/07/2026)

Na sessão de AnyDesk com a Valéria, ao tentar criar a Página do Facebook, o Meta retornou:

> **"Unable to add Facebook Page — Conta comercial proibida de anunciar: Esta conta comercial não estava em conformidade com nossas Políticas de Publicidade ou outros padrões."**

**Isso explica também** o erro anterior *"O usuário não pode ser adicionado à empresa"* ao convidar `edubchaves5@gmail.com` — não era fila do Meta, era a restrição.

**Sem resolver isso não existe campanha.** Nem página, nem conta de anúncios, nem anúncio.

### Estado da conta em 30/07

| Item | Situação |
|---|---|
| Portfólio empresarial | ✅ criado — nome **"Locajv."** · ID provável **1752294909487939** |
| Perfil que criou | **Valéria**, esposa do **Jayadson** (dono da LocaJV) |
| Página do Facebook | ❌ não existe — **criação bloqueada pela restrição** |
| Instagram @locajv_ vinculado | ❌ não |
| Conta de anúncios | ❌ não existe |
| Cartão | ❌ não cadastrado (o dono saiu antes) |
| Acesso da Impulso | ❌ convite falhou · parceria impossível (exige ativo, e não há nenhum) |

### Próximo passo
1. Abrir **`business.facebook.com/accountquality`** na conta da Valéria → ver **o que** foi restringido e **por quê** → **solicitar revisão**
2. Descobrir o escopo: a restrição é do **portfólio novo** ou da **conta pessoal da Valéria**?
3. **Se for da conta pessoal dela** → o **Jayadson** cria o portfólio pelo perfil dele. Não é burlar: é usar uma conta que não está restringida
4. Se for do portfólio → recurso e esperar

### 🔴 O que NÃO fazer
**Não criar outro portfólio, perfil ou conta pra contornar.** O Meta trata como evasão de restrição e derruba tudo que estiver associado — inclusive o **Instagram @locajv_ com 10,8 mil seguidores**, que é o ativo mais valioso que eles têm.

### Impacto no contrato
O relógio do mês contratado **não deveria começar** enquanto a conta não puder anunciar. Alinhar isso com o Jayadson agora, por escrito — senão a Impulso queima dias de contrato num bloqueio que não é dela.

## 7. Pendências com o cliente

- [ ] **Qual telefone é o oficial** do WhatsApp da campanha
- [ ] **Qual logo e tagline** são os oficiais
- [ ] **Valor do caução** — aparece em "paga só o caução" mas o número não está em lugar nenhum, e é a maior objeção do público (mercado cobra R$600-800)
- [ ] **Exige CNH A?** Tempo mínimo de habilitação? Consulta SPC?
- [ ] **Aceita semana solta**, sem contrato de 4 meses? (se sim, é argumento forte contra Loca10/062/Motoflix)
- [ ] **Quem responde o WhatsApp e em que horário**
- [ ] BM criado? Cartão em nome dele pra cadastrar?
- [ ] 5 fotos boas com celular: motos lavadas, alinhadas, sol da manhã, uma com bag de delivery e pessoa de capacete

## 7b. 🎯 O POSICIONAMENTO (definido em 29/07 após ver os anúncios ativos — detalhe em `pesquisa/06`)

**Mercado de anúncio em Goiânia é raso:** só ~15 anúncios ativos pra "locação de moto goiania" no Brasil inteiro. Cinco anunciantes reais: Loca10, Stark (subiu ontem), Conectta, Code Locação, Rdx.

**Os três principais brigam no MESMO ângulo: "a moto fica sua no final"** — Loca10 ("Plano Minha moto"), Stark ("de fato e de direito"), Conectta ("100% SUA").

🎯 **Nenhum dos cinco menciona guincho 24h, manutenção inclusa ou km livre.** A LocaJV tem os três.

**Ângulo da campanha:** não "seja dono da moto" — e sim **"a moto não te deixa na mão; e se deixar, o guincho é nosso"**. É o medo real do entregador (parar de faturar amanhã), é espaço vazio em Goiânia, e ataca o ponto fraco da Mottu (histórico de moto malcuidada no Reclame Aqui).

⚠️ **Onde a JV perde:** Conectta vende **0km (Honda Fan 160)**. A frota da JV é usada. Não entrar na briga de "moto nova".

### 🔑 O DONO É O ATIVO (confirmado 30/07)

**O dono grava os vídeos E responde o WhatsApp.** Atendimento humanizado, uma pessoa só, sem intermediário.

Isso vira o 2º eixo da campanha, e é um contraste verdadeiro contra o líder:
- **Mottu é app-first** — os anúncios dela mandam pro Google Play ("baixe o app", "insira seu CPF", "cadastre o cartão") e ela tem **menos de 50% das reclamações respondidas** no Reclame Aqui
- **A JV manda pro WhatsApp do dono.** O cara que aparece no vídeo é o mesmo que responde a mensagem

**Fecho obrigatório em todo vídeo:** *"quando você chamar no WhatsApp, quem responde sou eu mesmo."*

⚠️ **O gargalo que isso cria:** uma pessoa só, que também opera o pátio. Com 15 motos o objetivo já era lead qualificado e não volume — isso reforça. Combinar com ele: **horário de atendimento declarado** na saudação automática, pro lead não achar que foi ignorado quando ele estiver entregando uma moto. Se o volume passar da capacidade dele, **reduzir verba é a decisão certa** — não aumentar.

## 8. Pendências minhas

- [x] ~~Ver anúncios ativos dos concorrentes na Biblioteca de Anúncios~~ — **FEITO 29/07** pelo Chrome logado → `pesquisa/06`
- [ ] Confirmar no Gerenciador se os interesses "iFood", "motoboy", "entregador" **existem** — não foi possível confirmar por fonte
- [ ] Escrever os 3 primeiros criativos dentro da cerca de política
- [ ] Montar o combinado escrito (escopo, quem paga verba, quem responde lead, o que não está incluso)

---

## 9. Combinado que protege o contrato

🔴 **A maior ameaça não é a campanha — é o tempo de resposta do WhatsApp da JV.** Lead local não respondido em minutos esfria, e a causa nº1 de campanha "que não funcionou" é essa. Tem que estar escrito: **quem responde o lead é o cliente, em até 1h no horário comercial.**

**Nunca prometer número de locações fechadas.** O entregável é volume e custo de lead qualificado. Fechamento depende de preço, atendimento e estoque — e com R$350-400 de verba isso é **piloto**, não amostra estatística.

**Registrar print com horário de cada lead entregue.** É a prova se depois vier "não deu resultado".

---

## Arquivos

- `artes/` — 7 artes + print dos planos que o cliente mandou no WhatsApp
- `pesquisa/01-concorrencia-goiania.md` — players, preços, caução, reputação, demanda
- `pesquisa/02-manhas-e-atalhos-meta-ads.md` — validado vs. prática vs. folclore
- `pesquisa/03-operacao-gestor-acesso-bm.md` — acesso, pagamento, relatório, contrato
- `pesquisa/04-estrutura-campanha-meta-2026.md` — objetivo, estrutura, aprendizado, plano dos 7 dias
- `pesquisa/05-politica-meta-veredicto-por-frase.md` — veredicto frase por frase das artes
- `relatorios/` — relatórios semanais pro cliente (a preencher)
