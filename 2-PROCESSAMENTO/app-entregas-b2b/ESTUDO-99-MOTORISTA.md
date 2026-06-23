# Estudo do app 99 Motorista — referência de UX/fluxo (entregador)

> **Objetivo:** mapear telas, botões e funcionalidades do 99 Motorista (app real rodando)
> pra calibrar a tela do ENTREGADOR do APPDELYVERY. **Não é pra clonar** — o 99 é
> transporte de passageiro; o nosso é entrega de encomenda B2B. Filtrar o que serve.
>
> **Método (combinado com Eduardo, 04/06):** 1) CATALOGAR tudo (esta fase) → 2) ESTUDAR
> tudo → 3) BRAINSTORM do que entra no nosso. Eduardo manda os prints em lotes; cada lote
> é transcrito aqui em TEXTO (assim não preciso segurar as imagens no contexto).
>
> Status: **FASE 1 — CATÁLOGO (recebendo prints)**.

---

## Como cada tela é catalogada

Pra cada print, registro:
- **Tela** — nome/função (ex.: "Home offline", "Corrida disponível", "Em rota")
- **Elementos** — o que aparece (mapa, card, valores, status, timer…)
- **Botões/ações** — todo botão e o que faz
- **Padrão de UX** — a solução de design que vale notar
- **Serve pro nosso? (hipótese)** — anotação inicial, refinada só no brainstorm

---

## Catálogo de telas (preenchido conforme os lotes chegam)

<!-- LOTE 1 (6 telas) -->

### T01 — Splash / abertura
- **Elementos:** logo 99 num círculo branco, "99 Motorista", fundo amarelo com mapa fantasma em marca-d'água; versão "V7.10.26" no rodapé.
- **UX:** amarelo é a cor-assinatura total; abertura limpa.
- **Serve?** Padrão de splash com marca — nós já temos identidade índigo. Nada novo.

### T02 — Home OFFLINE (desconectado) + permissão de localização
- **Elementos:** topo com **hambúrguer** (canto sup. esq., badge vermelho de aviso) + pílula central **"R$0,00 ▼"** (ganhos do dia, clicável). Coluna de **botões flutuantes** à direita do mapa: combustível (99Abastece), alerta/reportar incidente, **camadas do mapa**. **Escudo azul** (segurança) no canto inf. esq.
- **Bottom sheet** "Pendências (1)" (checklist de coisas a resolver, ex.: ativar "Sempre Permitir" localização) — arrastável.
- **Barra inferior fixa:** ícone de **ajustes/filtros** (badge) · botão gigante amarelo **"Conectar"** · ícone de **checklist/agenda**.
- **UX:** estado offline já mostra o mapa e a demanda; CTA único e enorme ("Conectar"). Pendências empurram o motorista a se regularizar.
- **Serve?** SIM — o conceito "ficar online/offline" (Conectar) + pendências de cadastro é diretamente aplicável ao nosso entregador.

### T03 — Home OFFLINE com heatmap de demanda
- **Elementos:** mapa com **pílulas de tarifa dinâmica** "⚡1,9X–2,3X", "⚡1,4X–1,8X" sobre regiões; **ícones de pessoas/clusters** marcando concentração de pedidos ("1104 S", "1404 S" = quadras de Palmas!); botão **recenter** (seta azul). Mesma barra "Conectar".
- **UX:** mostra ONDE tem demanda e onde paga mais ANTES de conectar — incentiva o motorista a se posicionar. Tarifa dinâmica por zona.
- **Serve?** Heatmap/surge é avançado (fase futura). Mas "mostrar onde tem pedido" é uma ideia forte pro nosso B2B (ex.: regiões com lojas ativas).

### T04 — Menu lateral (drawer) — topo
- **Elementos:** foto + **"Eduardo • 4,81★"**, tooltip "Veja o perfil aqui ×". Dois KPIs: **"0% Taxa de Aceitação"** | **"0% Taxa de Finalização"** (em vermelho quando ruim). Itens: Ganhos · Recompensas · Saque a qualquer hora · Indique um amigo · 99Abastece · Central de Ajuda · Notificações (1 não lida) · Central de Educação (•) · Loja 99 · Veículo…
- **UX:** o drawer abre com **rating + duas métricas de performance** no topo — o motorista vê sua reputação primeiro. Badges de "não lida"/novidade nos itens.
- **Serve?** SIM — drawer com rating + taxa de aceitação/finalização é ótimo pro entregador. Notificações com badge idem.

### T05 — Menu lateral (drawer) — scroll
- **Elementos (continuação):** Saque a qualquer hora · Indique um amigo · 99Abastece · Central de Ajuda · Notificações · Central de Educação · Loja 99 · **Veículo** · **Horas dirigindo** · **Preferências (•)**.
- **UX:** menu longo, agrupa ganhar/sacar, ajuda/educação, conta/veículo.
- **Serve?** "Veículo", "Preferências" e "Horas dirigindo" (jornada/descanso) são relevantes; "Loja 99/99Abastece/Recompensas" são programa de fidelidade do 99 (não copiar).

### T06 — Central de Ganhos
- **Elementos:** card amarelo **"Ganhos do dia (jun.04) R$0,00"** com breakdown **"Corridas R$0,00 | Entregas R$0,00"** (→ o 99 JÁ separa corrida de **entrega**!). "99Abastece — Economizado até agora $0". **"Meus recursos":** Saldo · Método de resgate (Conta bancária) · **Conta99** (saque quando quiser; aceita boleto). "Melhore seus ganhos": Recompensa por indicação. Header com **"Histórico"**.
- **UX:** ganhos do dia em destaque, breakdown por tipo, acesso a saque/conta, link de histórico.
- **Serve?** SIM, muito — nossa tela `/entregador/ganhos` já existe; dá pra melhorar com: ganho do dia em destaque, breakdown, e o conceito de saldo/saque (liga com Asaas).

<!-- LOTE 2 (5 telas) -->

### T07 — Central de Ganhos (scroll)
- **Elementos:** Método de resgate (Conta bancária) · Conta99. "Melhore seus ganhos": Recompensa por indicação · Recompensas. **"Eventos futuros":** **Defina objetivos** (metas semanais) · **Planeje corridas** (horários de pico recomendados pra rodar). "Outros serviços": Loja 99.
- **UX:** seção que ajuda o motorista a **planejar** (metas + horários de pico) — gamificação/coaching.
- **Serve?** "Planeje corridas / horários de pico" é insight de dados (futuro). Metas semanais = engajamento, dá pra considerar.

### T08 — Saldo / extrato
- **Elementos:** "R$0,00" grande · **"Regras (i) · Ver regras"** · botão **"Resgatar"** (desabilitado sem saldo). Lista de **transferências por data** (04-06, 03-06… "Transferência R$0,00"). Header com "Configurações".
- **UX:** extrato cronológico simples + CTA Resgatar no topo + regras acessíveis.
- **Serve?** SIM — é exatamente o **extrato da carteira** que adiei no nosso (pendia Asaas). Modelo claro: saldo + lista de transações + botão sacar.

### T09 — Regras para resgate (saque)
- **Elementos:** abas **"Depósito bancário direto" | "Resgatar na Conta99"**. Regras: resgate após cadastrar conta; cai em 1–2 dias úteis. **Resgate manual:** taxa **R$1,00**/resgate, mínimo **R$5,00**. **Resgate automático:** toda **quarta ~00:00**, mínimo R$5,00.
- **UX:** transparência total de taxa, prazo e mínimo; opção de saque automático recorrente.
- **Serve?** SIM — quando ligar Asaas, copiar o padrão: taxa clara + mínimo + saque manual/automático. Define política de repasse ao entregador.

### T10 — Convidar (indicação de motoristas)
- **Elementos:** ilustração, seletor **"Palmas ▼"**, "Não há campanhas de indicação na sua localização". **"Histórico de convites":** Fernando R$500 (Pop) — **Expirado** ("nº de corridas exigido não finalizado no prazo"). "Ver tudo".
- **UX:** programa de indicação com recompensa condicionada a meta de corridas.
- **Serve?** Indicação é growth do 99 (programa próprio). Pro nosso, indicação de entregador/lojista é ideia de fase futura, não prioridade.

### T11 — Definir meta de ganhos
- **Elementos:** "Objetivo semanal [✎ Editar]" · barra de progresso **"0,00 / R$1.000,00"** · "Continue aumentando seus ganhos" · "Acompanhe o progresso" · "Receba sugestões de como aumentar".
- **UX:** meta auto-definida pelo motorista, barra de progresso, coaching.
- **Serve?** Gamificação leve; opcional. Não é core do B2B de encomenda.

<!-- LOTE 3 (parcial) -->

### T12 / T13 — Central de Ajuda (suporte)
- **Elementos:** "Como podemos ajudar?" + abas por vertical **"Corridas | Entrega | Food | Energia"** (o 99 tem várias linhas). **"Andamento"**: chamado aberto "Solicitar valor não pago — Pagamento antecipado recebido" (8/12/2025). Bloco **"Cancelada — Selecione a corrida"**: mostra uma corrida cancelada **"Pop Expresso 22 de dez 18:17"** com origem (• verde **Supermercado Duda, Plano Diretor Sul, Palmas**) e destino (• laranja **Q.Sul Avenida NS Plano Diretor Sul, Palmas-TO**) — dá pra abrir suporte sobre uma corrida específica. **"Todos os tópicos"**: busca de artigos + Revisar minha tarifa de pagamento · Suporte com minhas corridas · Registro · Informações sobre regras e tarifas · Minha conta · **Segurança e Emergências**.
- **UX:** suporte **contextual por corrida** (escolhe a corrida → abre chamado sobre ela), abas por tipo de serviço, busca de artigos (self-service antes de falar com humano), trilha de "Andamento" dos chamados abertos.
- **Serve?** SIM, forte — nosso suporte (Chamados/Disputas) pode ficar **contextual ao pedido** (entregador escolhe a entrega → abre chamado). "Segurança e Emergências" é categoria importante (botão de pânico/emergência na entrega). Self-service por artigo é fase futura.
- **Nota B2B:** repara que o 99 já tem aba **"Entrega"** separada de "Corridas" — eles operam logística de encomenda também; vale ver como tratam.

### T14 — Central de Ajuda → aba "Entrega"
- **Elementos:** tópicos da vertical Entrega: **Tipos de viagens · Cadastre-se · Dirigir · Ajuda com uma corrida · Ganhos · Conta · Segurança e Emergência · Histórico de mensagens**.
- **UX:** mesma estrutura de ajuda, só que filtrada pra Entrega; "Histórico de mensagens" = thread de conversas de suporte.
- **Serve?** Confirma o padrão: suporte por categoria + histórico de mensagens (igual ao nosso chat, mas pro suporte).

### T15 / T16 — Taxa de Aceitação (TA) — detalhe
- **Elementos:** **velocímetro/gauge** "0%", período "Últimos 30 dias (06 maio–04 junho)". **Corridas aceitas: 0 · Corridas recusadas: 0**. **"Dados diários"**: gráfico de linha por dia (05/30→06/04) com faixa 0–100%. **"Mais informações"** (FAQ expansível): *"O que é a TA? % de corridas aceitas nos últimos 30 dias…"* e *"Quando a TA não é afetada?"* (corridas negociáveis, etc).
- **UX:** métrica de performance explicada com gauge + série temporal + FAQ inline. Transparência de como o número é calculado.
- **Serve?** Conceito de **score do entregador** (aceitação) é aplicável — mede confiabilidade. Mas no B2B de encomenda a régua importa menos que no táxi; usar com parcimônia (não punir entregador bom que recusa por distância).

### T17 — Taxa de Finalização — detalhe
- **Elementos:** gauge "0%" com **zonas coloridas** (vermelho/amarelo/verde) e marcador **"Mínimo 70%"**. Aviso: *"Aumente para 70% para não afetar a disponibilidade de corridas e ganhos."* **Corridas finalizadas: 0 · Corridas canceladas: 0**. "Dados diários" com linha de meta 70% pontilhada.
- **UX:** gauge com **limiar visual** (verde = saudável, vermelho = risco) + consequência clara (abaixo de 70% perde corridas/ganhos). Penaliza cancelamento DEPOIS de aceitar.
- **Serve?** SIM, com adaptação — pro nosso entregador, "taxa de finalização" (não largar a encomenda no meio) é MAIS relevante que aceitação. Gauge com zona de risco é boa comunicação. Liga com a confiança do diferencial (entregador que conclui).

### T18 — Taxa de Finalização → "Como a TF afeta você"
- **Elementos:** *"Afeta sua capacidade de receber chamadas — você pode perder a capacidade de aceitar solicitações por 5/10/15 dias se a TF ficar abaixo de 70%…"*. FAQ: *"A TF é a % de corridas finalizadas do total de aceitas. Quando é afetada?"* (cancelar após aceitar afeta; cancelamento do passageiro não afeta, exceto se você não foi ao local / saiu antes do prazo).
- **UX:** consequência dura e explícita (suspensão escalonada) por largar corrida. Regras de exceção bem detalhadas.
- **Serve?** A lógica "aceitou → tem que concluir, senão penaliza" é exatamente o comportamento que o nosso diferencial (confiança) exige. Mas suspensão automática é decisão do Adm no nosso modelo ([[feedback_palace_adm_poder_maior_que_sistema]]).

### T19 — Painel rápido na Home (widget de ganhos expandido)
- **Elementos:** ao tocar na pílula "R$0,00 ▲" abre um **painel sobreposto**: "Painel [✎ Editar] · Mais ›". 4 métricas: **Valor da última corrida** · **Taxa99 (esta semana) %** · **Ganhos desta semana** · **nº de solicitações/semana**. Botão **"Ver Central de ganhos"**. Card **"Meta de ganhos escolhida — Objetivo semanal 0 / R$1.000"** com barra. Ícone de **olho** (ocultar valores).
- **UX:** resumo financeiro acessível direto da home (1 toque), customizável ("Editar" escolhe quais widgets ver), com privacidade (olho esconde R$).
- **Serve?** SIM — atalho de ganhos na home do entregador (1 toque) é ótimo. O ícone de **ocultar valores** é um detalhe fino de privacidade que vale copiar.

### T20 — "Ver informações" (camadas do mapa)
- **Elementos:** bottom sheet com toggles: **Mapa de Chamadas** ✓ · **Mapa de Tarifas** ✓ · **Trânsito** ☐ · **Relatório de trânsito** ☐. Botão **"Confirmar"**.
- **UX:** o motorista escolhe quais camadas ver sobre o mapa (demanda, surge, trânsito). Botão de camadas é aquele ícone flutuante.
- **Serve?** Camadas são feature avançada de mapa (fase futura). Conceito de toggle de overlays guardado.

### T21 — Heatmap de demanda renderizado + permissão de câmera
- **Elementos:** mapa com **mancha de calor colorida** (vermelho/laranja/amarelo/verde) sobre regiões = intensidade de demanda. Popup iOS "99 Motorista deseja acesso à câmera (nova foto de perfil)". Quadras de Palmas marcadas (704S, 712S, 901S, 912S, 1104S, 1404S, 1501S), Hospital Santa Thereza.
- **UX:** heatmap visual forte — motorista vê na hora onde tem mais corrida.
- **Serve?** Heatmap = fase futura (precisa volume de dados). Mas para o B2B, uma versão simples "regiões com mais pedidos agora" tem valor.

### T22 — Preferências de solicitações (config de aceitação)
- **Elementos:** "Ferramentas de aceitação": **Definir meu destino** (recebe só corridas no rumo de casa) · **Preferências de serviços** (escolhe quais tipos aceitar). "Status da solicitação": Teste de status · Eventos futuros. Botão **"Desconectar"** no rodapé.
- **UX:** o motorista filtra que tipo de corrida quer receber e pode "definir destino" pra só pegar no caminho.
- **Serve?** "Definir destino" e "tipos de serviço" são refinamentos. Pro nosso, equivalente seria o entregador escolher raio/região ou tipo de carga. Fase 2.

### ⭐ T23 — CARD DE ACEITE (corrida disponível) — A TELA MAIS IMPORTANTE
- **Elementos:** badge topo **"× Não afeta a TA"** (recusar não pune). Mapa mostra a rota com **2 pins**: verde ↑ (embarque) e laranja ↓ (destino) ligados pela linha. Faixa amarela **"Toque abaixo para aceitar"**. Card escuro grande:
  - **"Pgto. no app"** · **"R$5,60"** (valor gigante) · badges **"⚡ Preço x1,2"** (tarifa dinâmica) + **"↑ R$1,05"** (bônus).
  - **Barra amarela** = timer regressivo pra aceitar.
  - Passageiro: **"4,96★ · 112 corridas · 🛡 Cartão verif."**
  - Dois trechos com tempo+distância: **"↑ 8min (3,8km) — Quadra 804 Sul… (ir buscar)"** e **"↓ 3min (2,1km) — Q.604 Sul… (destino)"**.
- **UX:** TUDO que o motorista precisa pra decidir em 1 tela e em segundos: **quanto ganha** (destaque absoluto), **quão longe pra buscar**, **quão longe a entrega**, **reputação do passageiro**, e que **recusar não penaliza**. O valor é o herói. Aceitar = tocar o card; timer pressiona.
- **Serve?** SIM — é o template do nosso card de oferta pro entregador. Adaptar pro B2B: trocar passageiro por **negócio (loja)**, mostrar **frete (R$)** em destaque, **distância até a coleta** + **distância da entrega**, tipo de veículo exigido, e — nosso diferencial — talvez selo de que o negócio é verificado. Manter: valor gigante, 2 trechos, timer, "recusar não pune".

### T24 — Pós-aceite: a caminho do embarque (coleta)
- **Elementos:** endereço de embarque fixo no topo. Tooltip "A navegação no app começará automaticamente". **Rotas alternativas** balão ("1 min mais lento, distância semelhante"). Velocímetro. Tooltip "O cartão será exibido quando você estiver perto…". Linha do passageiro Gabriel + **botão de ligar/mensagem**. **Botão verde de DESLIZAR "Cheguei no embarque"**. "OK, entendi".
- **UX:** navegação embutida + ação principal por **slide-to-confirm** (evita toque acidental). Contato com o cliente a 1 toque.
- **Serve?** SIM — nosso entregador "a caminho da coleta": navegação + slide "Cheguei na coleta" + contato com a loja. O slide-to-confirm é melhor que botão simples pra ação de estado.

### T25 — Navegação turn-by-turn até a coleta
- **Elementos:** **"6 min • 3,9 km · Chegada prevista 17:03"**. Coluna de botões à direita: recenter, **som** (badge), config, **alerta/reportar** (badge), **rotas alternativas**. Velocímetro. Escudo de segurança. Slide "Cheguei no embarque".
- **UX:** GPS completo com ETA, controle de áudio, reportar problema, alternativas de rota — tudo sem sair da tela.
- **Serve?** Navegação real é o que nosso protótipo simula. ETA + "chegada prevista" são importantes. Botão de segurança sempre visível.

### ⭐ T26 — Anti-fraude de chegada (geofence)
- **Elementos:** modal **"Você está no local de embarque?"** — *"Nosso sistema detectou que você NÃO está no local de embarque. Se confirmar sua chegada e o pedido for cancelado, pode não receber taxa de cancelamento."* Botões **"Confirmar chegada"** / **"Cancelar"**.
- **UX:** o app **valida por GPS** se o motorista realmente chegou antes de deixar marcar "cheguei" — anti-fraude de quem marca chegada longe pra forçar taxa/cancelamento.
- **Serve?** SIM, MUITO — é prova-na-fonte de geolocalização. Nosso "registrar coleta/entrega" pode checar se o entregador está dentro de um raio do ponto antes de liberar a confirmação. Reforça a confiança (diferencial).

### T27 — Aguardando o cliente (na coleta)
- **Elementos:** banner laranja **"Passaremos a cobrar taxa de espera ao final da contagem regressiva"**. **Timer "1:57"** regressivo. "Por favor, aguarde — Se precisar, contate o passageiro." Passageiro + contato. **Slide azul "Iniciar corrida"**.
- **UX:** tempo de tolerância de espera com timer visível + aviso de taxa de espera; ação de iniciar por slide.
- **Serve?** No B2B, "tempo de espera na loja" + eventual taxa é relevante (loja que demora a entregar a encomenda). Slide "Iniciar entrega" depois de coletar.

### T28 — "Mais" durante a corrida (ações da corrida em andamento)
- **Elementos:** tag "Pop". Card do passageiro **Gabriel 4,96★ · 112 corridas · "Pago no voucher"** + botão contato. Origem (• verde) e destino (• laranja) com **endereço completo + CEP**. Dois botões: **"Cancelar Corrida"** · **"Central de Ajuda"**. Abaixo, botão **"Recusar novas corridas"** (para de receber ofertas enquanto faz essa).
- **UX:** durante a corrida, acesso rápido a cancelar, pedir ajuda, ver endereços completos e pausar novas ofertas.
- **Serve?** SIM — nosso entregador em rota precisa de: ver endereço completo, contato, cancelar (com motivo) e "não receber nova oferta agora". 

### ⭐ T29 — Motivo do cancelamento (lista estruturada)
- **Elementos:** "Por favor, nos conte o motivo do cancelamento" + lista: Passageiro não veio · Endereço errado · Restrição para estacionar · Passageiro chamou para terceiro · Passageiro pediu para cancelar · Poucos assentos · Muita bagagem · Menor de idade · Desembarque longe · Área de risco · Passageiro recusou cinto · Local de embarque errado · **Outro**.
- **UX:** cancelamento **sempre com motivo categorizado** (alimenta antifraude/qualidade e define se penaliza a TF). Nunca cancela "no escuro".
- **Serve?** SIM — nosso cancelamento de entrega deve ter **motivo obrigatório** (loja não tinha a encomenda, endereço errado, área de risco, cliente não atende…). Vira dado pro admin/disputa. Adaptar a lista pro contexto de encomenda.

### T30 — Corrida cancelada pelo cliente (notificação + consequência)
- **Elementos:** **push no topo "99 · Corrida cancelada — O(a) passageiro(a) cancelou a solicitação · agora"**. Tela: "Se a TF ficar abaixo de 70%, seu acesso às solicitações será afetado." Banner ilustrado **"TF mínima 70%"** (moto+carro). Links: **Política de cancelamento** · Ajuda. Botões **"Continuar conectado"** (amarelo) / **"Desconectar"**.
- **UX:** quando o cliente cancela, o app avisa por push, esclarece o impacto na TF (e que cancelamento do cliente normalmente não pune) e oferece seguir online com 1 toque. Não deixa o motorista "no limbo".
- **Serve?** SIM — quando uma entrega é cancelada (pela loja/cliente), o entregador recebe **push claro**, entende que não foi culpa dele, e volta a ficar disponível com 1 toque. Fecha o ciclo aceito→cancelado de forma justa.

### T31 — "O passageiro cancelou a corrida" (tela base, sem o push)
- Mesma de T30 sem a notificação por cima. Confirma: pós-cancelamento → explica TF → "Continuar conectado / Desconectar".

### T32 / T33 — Configurações de navegação
- **Elementos:** **"Selecionar mapa padrão":** Navegação pelo aplicativo (Recomendado) · **Waze** · Google Maps (não instalado). Toggle "Navegar com o mapa padrão". **"Exibição do mapa":** Tema **Automático/Dia/Noite** · Barra de trânsito (toggle) · Limite de velocidade (só carros). T33 = modal "Tem certeza de que deseja mudar a navegação? …precisará alternar entre apps enquanto dirige" (Usar navegação no app / Usar o Waze).
- **UX:** navegação nativa no app é o padrão, mas deixa escolher Waze/Google. Tema dia/noite pra dirigir à noite.
- **Serve?** SIM — deixar o entregador escolher **abrir no Waze/Google Maps** é prático (muitos preferem). Tema noturno do mapa é conforto real. Fácil de plugar com link `geo:`/deep-link.

### T34 / T35 — Permissões de sistema
- **Elementos:** lista com estado de cada permissão e **o que se perde se negar**: **Localização** Ativado (*"sem ela não conecta nem aceita corridas"*) · **Câmera** Ativado (*"foto de perfil + verificar identidade com reconhecimento facial"*) · Álbum Desativado · Contatos Desativado · Microfone Desativado (*"não grava áudio nas corridas"*). T34 = popup iOS de acesso à fototeca (Limitar/Total/Não permitir).
- **UX:** central de permissões própria explicando a consequência de cada uma em linguagem clara — reduz suporte.
- **Serve?** SIM — confirma que **câmera + faceID** são esperados pelo motorista (liga com nosso diferencial de verificação). Uma tela própria de permissões com explicação é boa prática mobile.

### T36 — Heatmap fullscreen (modo escuro)
- **Elementos:** mapa noturno coberto por **hexágonos de calor** (verde→amarelo→laranja→vermelho) + dezenas de pílulas de surge ("1,6X–2,0X", "1,8X–2,2X"…) por zona de Palmas (409N, 604N, 207N, AV 308S, 704S…). Botão "Conectar".
- **UX:** visão de "onde está pegando fogo" antes de conectar; surge por hexágono.
- **Serve?** Avançado/fase futura (precisa volume). Guardar a ideia de "mapa de calor de pedidos".

### T37 — Deletar perfil (LGPD)
- **Elementos:** "Antes de deletar seu perfil, leia…": efeito imediato e irreversível; deleta histórico/dados pessoais/pagamento; **a 99 retém certos dados (registro de violações) conforme LGPD**; após deletar **aguardar 3 dias** pra recriar. Checkbox "Li e concordo" + "Próximo".
- **UX:** fluxo de exclusão de conta transparente e com fricção proposital (anti-arrependimento) — exigência LGPD.
- **Serve?** SIM — precisamos de exclusão de conta (LGPD) tanto pro entregador quanto pro lojista. Modelo de texto + retenção de registro de violações é útil pro nosso (que lida com antecedentes).

### T38 — Eventos futuros / Curva de demanda
- **Elementos:** seletor de dias (Qui 4 … Qua 10). **"Curva de demanda — Palmas-TO"**: gráfico de barras por hora (5AM→11PM), **pico às 17h destacado em amarelo**. Notas: "organize seu horário pela curva", "mostra demanda, não ganhos reais". **"Assistente de ganhos — Ganhe mais durante horários de pico 16:00–18:00 [Programar lembrete]"**.
- **UX:** coaching de quando rodar (curva histórica + lembrete agendável pro horário de pico).
- **Serve?** Inteligência de dados (fase futura). "Horário de pico de pedidos" tem valor pro entregador B2B, mas precisa volume.

---

> **FASE 1 (CATÁLOGO) CONCLUÍDA — 38 prints, 38 telas (T01–T38).** Abaixo, Fase 2.

---

## Inventário consolidado (preenchido no fim da Fase 1)

### Funcionalidades observadas (o que o 99 Motorista faz)
1. **Conectar/Desconectar** (ficar online/offline) — CTA único e gigante.
2. **Home com mapa** + heatmap de demanda + surge por zona + botões flutuantes (combustível, reportar, camadas, recenter, segurança).
3. **Pendências** (checklist de regularização do cadastro).
4. **Menu lateral** com foto, rating, taxa de aceitação e finalização.
5. **Central de ganhos**: ganho do dia, breakdown corridas×entregas, saldo, método de resgate, saque (manual/automático, taxa, mínimo), histórico/extrato.
6. **Metas de ganho** semanais + barra de progresso + coaching.
7. **Card de aceite** da corrida: valor em destaque, surge, bônus, 2 trechos (buscar+entrega), rating do cliente, timer, "não afeta TA".
8. **Fluxo da corrida**: a caminho → navegação turn-by-turn → "cheguei" (slide) → validação de geofence → espera com timer → "iniciar" (slide) → em rota → finalizar.
9. **Cancelamento com motivo categorizado** + impacto na TF + push quando o cliente cancela.
10. **Taxa de Aceitação (TA)** e **Taxa de Finalização (TF)** com gauge, série diária, FAQ e consequências (suspensão escalonada).
11. **Suporte/Central de Ajuda** por vertical, contextual à corrida, com busca de artigos + histórico de mensagens + Segurança/Emergências.
12. **Config de navegação** (app/Waze/Google, tema dia/noite, trânsito).
13. **Permissões de sistema** explicadas (localização/câmera-faceID/álbum/contatos/microfone).
14. **Deletar perfil** (LGPD, retém violações, espera de 3 dias).
15. **Curva de demanda** por hora + assistente de horário de pico.
16. Programa de **indicação** e **recompensas** (growth próprio do 99).

### Padrões de UX que valem estudar
- **Valor do frete como herói** do card de aceite (fonte gigante) + decisão em segundos.
- **Slide-to-confirm** pras transições de estado (cheguei/iniciar) — evita toque acidental.
- **Geofence anti-fraude** antes de permitir "cheguei".
- **Timer de aceite** e **timer de espera** com aviso de taxa.
- **Score visível** (rating + TA + TF com gauge colorido e limiar de risco).
- **Push claro** em cada mudança de estado (corrida cancelada, etc.) + volta ao online em 1 toque.
- **Cancelamento sempre com motivo** estruturado.
- **Ocultar valores** (ícone de olho) por privacidade.
- **Permissões com consequência explicada** (reduz suporte).
- **Cor-assinatura forte** (amarelo) consistente em CTAs.

### Primeira separação — o que entra no APPDELYVERY (refinar no brainstorm)
**JÁ TEMOS (melhorar à luz do 99):**
- Ganhos do entregador (`/entregador/ganhos`) → add: ganho do dia em destaque, breakdown, ocultar valor.
- Fluxo coleta→entrega (EntregadorFlow) → add: slide-to-confirm, ETA, contato 1-toque.
- Suporte/Chamados → tornar contextual ao pedido.

**VALE COPIAR AGORA (alto valor, baixo/médio custo):**
- **Conectar/Desconectar** (online/offline) no entregador — hoje não temos estado explícito de disponibilidade clara.
- **Card de aceite** redesenhado no padrão 99 (valor herói, 2 trechos, timer, recusar-não-pune).
- **Geofence** no "registrar coleta/entrega" (prova-na-fonte de GPS).
- **Cancelamento com motivo** obrigatório.
- **Push de mudança de estado** + voltar online em 1 toque.
- **Saldo + extrato + saque** (quando Asaas) no padrão claro (taxa/mínimo/manual-automático).
- **Escolher Waze/Google Maps** pra navegar (deep-link).
- **Tela de permissões** explicada + **deletar conta (LGPD)**.

**FASE 2 / FUTURO (precisa volume de dados ou é growth do 99):**
- Heatmap/surge por zona, curva de demanda, metas/assistente de ganhos, indicação/recompensas, "definir destino".

**NÃO COPIAR (é do mundo passageiro ou programa próprio do 99):**
- Tarifa dinâmica de passageiro, 99Abastece, Loja 99, Conta99, cinto/assentos/bagagem nos motivos.

---

## Fase 3 — Brainstorm (o que entra no APPDELYVERY)
<!-- preenchido junto com Eduardo, decisão por decisão -->
