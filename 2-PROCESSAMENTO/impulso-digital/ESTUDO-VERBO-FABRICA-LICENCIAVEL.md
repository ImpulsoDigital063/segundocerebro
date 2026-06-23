# ESTUDO — Vender o "Verbo": a fábrica licenciável (Opção 2)

> Cravado 23/06/2026 com Verbo. A pergunta: dá pra vender o SISTEMA (núcleo + agente + guardrails)
> que transforma um solo em software house — não o método (curso = Opção 1), mas o **acesso à fábrica**?
> É o produto de maior valor da tese ([[softwarehouse]]) e o de maior risco de moat. Estudo honesto, sem hype.

## A DEFINIÇÃO (refinada pelo Eduardo, 23/06)
O produto **NÃO é a IA** (commodity — todo mundo tem). É a **ESTRUTURA que faz a IA faturar**:
núcleo reusável + leis-λ + guardrails + playbooks + disciplina prova-na-fonte. Ela transforma IA crua
(genérica) em **máquina de software premium** que cria SaaS/site/LP/sistema do dia pro outro e faz
faturar **R$997 · 1.997 · 2.997 · até 15k**. Pitch: *"AI todo mundo tem; a ESTRUTURA que faz a AI faturar
de 997 a 15k — isso eu construí, e entrego montada."* → o moat é a estrutura, não a IA.
- **Número = PROVA, não garantia.** É resultado real do Eduardo. Vender como "tu vais faturar 15k" = promessa de guru (que ele NÃO é) → queima.
- **"De um dia pro outro" = honesto pra LP/site.** SaaS/sistema sai em dias/semanas — *meses* mais rápido que o tradicional, não horas. Vender a velocidade real (já absurda), sem inflar.
- **Vende LICENÇA da estrutura VIVA, não um ZIP de arquivos.** Arquivo estático envelhece; estrutura viva = dependência saudável do núcleo que o Eduardo evolui. É o que resolve o moat (item 3).

## 1. O que é, exatamente — 3 variantes (leve → pesada)
Não é UM produto. São três, e a confusão entre eles mata o projeto:
- **(a) Verbo-in-a-box (DIY)** — vende o **kit**: núcleo config-driven + biblioteca de presets + os guardrails/prompts + o processo. A agência instala e opera sozinha. Mais escalável, menos suporte, **mais fácil de piratedar/clonar**.
- **(b) Done-with-you (setup + treino + suporte)** — tu monta o Verbo na operação deles, treina, dá suporte contínuo. Serviço + recorrência. Mais controle de qualidade, **mais carga de suporte** (vira gargalo se não productizar).
- **(c) Franquia / licença de marca** — eles operam **sob a marca/método Verbo**, padrão de qualidade controlado, royalty/rev-share. Maior upside e maior controle, **mais complexo juridicamente**.

→ O sweet spot provável é **híbrido (b)+(c)**: licença de plataforma + território + rev-share. (a) puro entrega o moat de bandeja.

## 2. Quem compra (ICP) — NÃO é o cliente final
O comprador é **quem quer SER o Eduardo** na cidade/nicho dele:
- Agência pequena / freelancer dev que entrega low-ticket e quer subir pra premium sem ter o método/leverage.
- Empreendedor semi-técnico que quer abrir software house regional (replicar o movimento).
- NÃO é o dono do bar (esse compra o sistema). É quem **entrega** sistema pra donos de bar.

## 3. O CRUX — a tensão do moat (a decisão central, honesta)
A tese diz: o moat é *"software house que não é 20 devs, é núcleo + agentes + guardrails."* **Licenciar isso = vender o moat.** Mas:
- O software **é clonável** — não é o moat de verdade.
- O moat real é o **cérebro central**: o julgamento/guardrails (λ.prova-na-fonte etc.), a **marca**, a **velocidade de evolução**, e o **RadarPRO** (a máquina de leads).
- **Decisão de design:** licencia a **fábrica** (núcleo + kit + processo), **retém o cérebro** (a máquina de qualidade central, a evolução do núcleo, o canal de leads). O licenciado **depende dos teus updates** = correia de dependência saudável.
- **Mitigações do risco de criar concorrente:** território **exclusivo** (1 por cidade/nicho) · **rev-share** (te mantém no upside, não num fee único) · dependência do núcleo central. = vira **franquia**, não venda de código.

## 4. Economia — só vale se bater fazer fork sozinho
- **Fork sozinho:** R$2.997 × N, **teto na tua capacidade** (não escala sem tu).
- **Licença:** setup + **mensalidade de plataforma** por licenciado + **% sobre o faturamento** deles. Escala **sem tu entregar**. É o pulo de "cara que faz sistema" pra "dono da máquina".
- Modelo mais alinhado (igual RadarPRO): **setup + mensal + rev-share** — te mantém no upside de cada projeto que o licenciado fecha.
- ⚠️ **Números (pricing de franquia digital / white-label / productized service / rev-share) = validar com deep-research.** Não cravar de cabeça.

## 5. Pré-requisitos — o que TEM que existir antes (o build)
Não dá pra licenciar o que não tá empacotado. Hoje **não está**:
- **O Gerador da tese ainda não existe** — forks são clone manual, não "config → sistema". Licenciável exige o núcleo **config-driven** (1 arquivo de config gera o sistema).
- Guardrails/processo **documentados e replicáveis** — parte já existe ([[MODELO-SAAS-PREMIUM]], as leis-λ, painel padrão, apostila GitHub). Falta o resto.
- **Walk before fleet:** provar **1 agente entregando 1 job ponta-a-ponta com prova-na-fonte** antes de botar isso na mão de terceiro. (Lei da frota da tese.)
- **Conclusão dura: isso é FASE 2.** Vender a fábrica antes da fábrica existir = vender promessa = queima a marca.

## 6. Riscos
- **Moat** (criar concorrente) → exclusividade + rev-share + dependência do cérebro central.
- **Qualidade/marca** (licenciado entrega lixo "powered by Verbo") → padrão controlado + o cérebro central como **portão de qualidade** (lei da frota).
- **Suporte** (virar suporte de N agências) → productizar suporte, não virar gargalo humano.
- **Distração do caixa atual** → os forks pagam HOJE; a licença é aposta de prazo. Trocar um pelo outro agora = furo.

## 7. Caminho (sequência) — não pular etapa
1. **Agora (Fase 1):** fechar forks (caixa) **e extrair o núcleo/Gerador no caminho** (já é a tese). Cada fork melhora o que vira licenciável.
2. **Gatilho pré-Fase-2:** o **Gerador monta 1 fork por config** (não clone manual) **+ 1 agente entrega sozinho, provado na fonte**.
3. **Piloto (Fase 2):** **1 licenciado de confiança** (ex: dev validado tipo [[project_lucas_passos_dev_validado|Lucas Passos]], ou alguém de outra cidade) · território exclusivo · rev-share · tu retém o cérebro. Provar o modelo com 1 antes de escalar.
4. **Escala (Fase 3):** mais licenças + a frota de agentes.

## 8. Recomendação honesta
- A Opção 2 é o **endgame de maior valor** — é o que dá **valuation alto pro Tulio** (não vende projeto, vende a máquina que faz projetos).
- MAS é **Fase 2**: depende do Gerador existir, e exige o desenho "licencia a fábrica, retém o cérebro" pra não virar suicídio de moat.
- **Não largar os forks agora pra correr atrás disso** — seria trocar caixa certo por aposta de prazo.
- **Movimento certo HOJE:** construir o núcleo licenciável **como subproduto de entregar forks** (não como projeto separado) + cravar o **gatilho** que libera o piloto de licença.

## 9. Próximo passo
**Deep-research de mercado** pra cravar pricing e modelo: franquia digital / white-label agency / "agency-in-a-box" / productized service / rev-share de software. Sem isso, os números do item 4 são chute.

## 10. Como MONTAR e ENTREGAR (o build)
**Princípio:** não se vende o que não tá empacotado — e o jeito esperto de empacotar é **montar ENTREGANDO pro piloto #1** (não construir no vácuo).

**As peças da máquina (o que vai no pacote):**
1. **Núcleo de código** — repos: ComandaPRO/medellin · AgendaPRO · painel padrão · templates LP/site.
2. **Leis-λ + guardrails** — a disciplina que segura qualidade (prova-na-fonte etc.).
3. **Playbooks** — MODELO-SAAS-PREMIUM · painel SaaS padrão · apostila GitHub.
4. **Método de operar a IA** — os arquivos de contexto (AGENTS.md / CLAUDE.md / boot) + a estrutura do segundo-cérebro que dá contexto ao agente. ← **o segredo que ninguém tem.**
5. **Setup/toolchain** — Claude Code + GitHub + Vercel + Supabase + Verbo Design, wired.

**Já existe ~60-70%** (playbooks, leis, apostila, núcleos, painel padrão). **Falta:** Gerador config-driven · onboarding "como operar a IA" · veículo de licença.

**Entregar = montar o ambiente do comprador com a TUA estrutura dentro.** O que faz o Claude Code DELE valer 15k (e o de um random não valer nada) é a estrutura carregada em volta. Delivery = stand up Claude Code + GitHub/Vercel/Supabase do comprador → carregar núcleo + arquivos de contexto + leis + playbooks → treinar → updates contínuos (a parte viva = licença).

**3 níveis de entrega:** **v1 Done-with-you** (sprint, alto toque, premium, e é como tu aprende a sistematizar) → **v2 Cohort/mentoria** (grupo até cada um entregar o 1º projeto pago) → **v3 Kit self-serve** (escala, depois do Gerador).

**Lean (walk before fleet):** montar entregando pro **piloto #1** (dev/agência de confiança, fora do teu território), documentando cada passo → a doc que sai DISSO vira o produto pro #2/#3.

**Ver também:** [[softwarehouse]] · [[MODELO-NUCLEO-FORK-COMANDAPRO]] · [[MODELO-SAAS-PREMIUM]]

— Verbo, 23/06/2026
