# BRIEFING-AURA-V2-RENATO

**Data:** 2026-05-08
**Autor:** Eduardo (Impulso Digital · Verbo)
**Cliente:** Renato Edson · Aura Energy · Palmas-TO
**Status do briefing anterior (V1):** enviado pós-reunião 06/05, **sem retorno** até agora.
**Hipótese da V1 falhar:** form muito genérico, perguntas abertas, sem contexto do "porquê", esforço alto pra responder.
**Estratégia da V2:** denso + perguntas com **opções pré-pesquisadas** + organizado em blocos de 5-7min cada → Renato responde em 3-4 sessões curtas em vez de 1 hora travada.

---

## 🎯 O que esse briefing vai gerar

| Output | Vira |
|---|---|
| Bloco 1 + 2 | **Calibragem da LP** (#159) com dados/fotos reais |
| Bloco 3 | **Posicionamento de marca** (qual a vibe Aura — premium / acessível / técnica) |
| Bloco 4 | **Catálogo público** das LPs (kits 5kWp, 10kWp, 20kWp, 50kWp+ com preços e marcas reais) |
| Bloco 5 | **Selo "Financiamento facilitado"** com bancos parceiros (peso pesado pra conversão) |
| Bloco 6 | **Heros das 5 LPs segmentadas** (headline + subheadline + caso real + foto pra cada nicho) |
| Bloco 7 | **Plano 90 dias** ajustado ao ritmo dele |
| Bloco 8 | **Diferencial em copy real** (garantia performance, SAC, limpeza preventiva, monitoramento) |

**Sem essas respostas, as LPs ficam genéricas e vão ser 50% piores em conversão.**

---

## 🗺 MAPEAMENTO — LP atual × cada bloco

(LPs hospedadas em `auraenergy.vercel.app` · 5 rotas: `/` · `/casa` · `/comercio` · `/industria` · `/rural`)

| Bloco | Onde os dados entram (componente.tsx) | Estado atual |
|---|---|---|
| **1.3** Instalações 12m + **1.4** kWp total | `Hero.tsx` · `MapaInstalacoes.tsx` (TOTAL) | Placeholder com 9 bairros fictícios e n° fictício |
| **1.5** Maior projeto | `Galeria.tsx` (case-flagship) | Genérico |
| **1.7** CREA + **1.8** ART | `Credenciais.tsx` | Texto fixo "Engenheiro CREA-TO" sem número real |
| **2.1** Mix de clientes (% por nicho) | `HeroSegmentos.tsx` (ordem dos cards prioriza maior %) | Ordem alfabética genérica |
| **2.7** Tickets médios | `CatalogoKits.tsx` · `Investimento.tsx` (calculadora ROI) | Valores genéricos não-Aura |
| **3.3** Vibe da marca | Tema CSS (`globals.css`) — paleta de cores | Já definido (azul deep + amarelo) — pode mudar se Renato escolher outra vibe |
| **4.1** Marca preferida módulo | `MarcasMarquee.tsx` (ordem dos logos) | Marquee com 6+ marcas iguais (sem hierarquia) |
| **4.2** Marca preferida inversor | idem `MarcasMarquee.tsx` | idem |
| **4.4** Tabela de preços | `CatalogoKits.tsx` | **Placeholder com preços fictícios** — alta prioridade trocar |
| **5.1** Bancos parceiros | `Credenciais.tsx` (selo "Parceria Solfácil") | Apenas Solfácil hardcoded — assumiu sem confirmar |
| **5.5** Pronaf Bioeconomia (rural) | `/rural` page (hero + selo dedicado) | NÃO mencionado — gap competitivo gigante |
| **6.A-E** Heros + casos | `Hero.tsx` · `Depoimentos.tsx` · cada `/{nicho}/page.tsx` | Depoimentos fictícios (3) — flagados no código pra trocar |
| **8.1** Garantias e diferenciais | `Compromisso.tsx` · `Diferenciais.tsx` · `Recursos.tsx` | Lista genérica — quer-se transformar em selos com **dado real Aura** |
| Foto Renato + equipe | `SobreRenato.tsx` · `EquipeAcao.tsx` | Placeholders / sem fotos reais |
| Mapa de instalações | `MapaInstalacoes.tsx` | 9 bairros com n° fictício — flagado no código pra trocar |

**Prioridade de calibragem (ordem de impacto na conversão):**
1. **Casos reais com fotos** (`Depoimentos.tsx` + Galeria) → maior peso de prova social
2. **Tabela de kits com preços reais** (`CatalogoKits.tsx`) → para o "perdi tempo só pra pedir orçamento"
3. **Mapa de instalações reais** (`MapaInstalacoes.tsx`) → autoridade local Palmas
4. **CREA + ART reais** (`Credenciais.tsx`) → quebra desconfiança técnica
5. **Bancos reais** (`Credenciais.tsx` + LP /rural com Pronaf) → reduz objeção financiamento

---

## 📦 Como vamos entregar pro Renato

3 caminhos, escolhe um (ou combinação):

### Opção A — Form Tally único (preferido)
Eu monto o form com 1 pergunta por bloco (~40 perguntas total, mix de múltipla escolha + texto curto + upload). Renato preenche em 30-40min. Webhook → email pro Eduardo. Salva pro Renato voltar e continuar onde parou.

### Opção B — WhatsApp em 3 mensagens
Quebra em 3 partes (Bloco 1-3 / 4-5 / 6-8), envia a cada 2-3 dias. Mais leve, mas Renato pode dar respostas curtas demais.

### Opção C — Reunião gravada de 60min
Eduardo faz call no Meet/Zoom, grava, eu transcrevo + estruturo. Mais profundo, mais demorado, exige Renato disponível.

**Recomendação:** A (form Tally) com **WhatsApp curto urgente** logo depois ("Renato, 2min — preciso confirmar 3 coisas pra começar a calibrar a LP"). Se ele engasgar no form em 24h → ofertar reunião gravada como backup.

---

## 🟦 BLOCO 1 — Operação real Brasfrio→Aura

> **Por que perguntamos:** preciso de **números duros** pra comprovar competência nas LPs ("X anos · Y instalações · Z kWp instalados") e calcular custo da operação. Sem isso, copy fica vazia ("somos referência em Palmas") e cliente desconfia.

| # | Pergunta | Como responder |
|---|---|---|
| 1.1 | Quantos anos a Brasfrio existe? | Número (ex: 8 anos) |
| 1.2 | Em que ano você começou a fazer fotovoltaico (não só refrigeração)? | Ano (ex: 2019) |
| 1.3 | **Quantas instalações fotovoltaicas a Brasfrio entregou nos últimos 12 meses?** | Número exato (ex: 47) — esse é OURO pra LP |
| 1.4 | Qual o **total de kWp instalados** nesses 12 meses? | Número (ex: 380 kWp) — usado em "X MW gerando hoje em Palmas" |
| 1.5 | Maior projeto único entregue (até hoje): **kWp + cliente + cidade + valor R$** | Texto + foto se possível — vira "case-flagship" |
| 1.6 | Quantos colaboradores hoje? | Quebra: técnicos / vendas / admin |
| 1.7 | **CREA-TO** — número da inscrição PJ + sua RT individual | Texto — vai virar selo de credibilidade |
| 1.8 | **ART pública** ativa (link/número) | Link Conselho ou foto da ART |
| 1.9 | Prazo médio entre contrato assinado e energia ligada na rede | Quebra: residencial / comercial / industrial / rural |
| 1.10 | Tem frota própria (vans, carros)? Quantos? | Texto + foto se possível |
| 1.11 | Tem ferramental completo próprio (escada, cinto, multímetro, alicate-amperímetro, calandra)? | Sim/não/parcial — peso de credibilidade |
| 1.12 | Você cuida do **projeto técnico** internamente ou terceiriza? | Interno / Terceiro — mexe na narrativa "controle total" |
| 1.13 | Aceita **distância máxima** de instalação a partir de Palmas? | km (ex: 200km, 500km, todo TO) |

**Anexos pedidos no bloco 1:**
- [ ] Foto frente do galpão/oficina Brasfrio
- [ ] Foto da equipe completa (ou time fotovoltaico)
- [ ] Foto do Renato (perfil, sorridente, aspecto profissional — pra LP "Quem somos")
- [ ] 1 foto de cada uma das 4 categorias: instalação **residencial** / **comercial** / **industrial** / **rural** (mesmo que residencial × comercial seja redundante visualmente)
- [ ] Cópia do CREA-TO PJ (documento)
- [ ] ART pública atual (número ou print)

---

## 🟦 BLOCO 2 — Cliente ideal e jornada

> **Por que perguntamos:** vamos posicionar 5 LPs (mãe + 4 segmentadas) cada uma falando exatamente com **um perfil**. Sem entender quem realmente compra, o copy vai mirar errado.

### 2.1 — Mix atual de clientes (últimos 12 meses)

Distribuir 100% entre os 4 nichos (estimativa):

- [ ] Residencial (casa) — ___%
- [ ] Comercial (loja, escritório, clínica) — ___%
- [ ] Industrial (fábrica, galpão grande) — ___%
- [ ] Rural/agro (fazenda, sítio, rancho) — ___%

### 2.2 — De onde vêm os clientes hoje?

Distribuir 100%:
- [ ] Indicação cliente Brasfrio antigo — ___%
- [ ] Indicação amigo/família — ___%
- [ ] Instagram/Facebook — ___%
- [ ] Google (busca orgânica) — ___%
- [ ] Anúncios Meta/Google Ads — ___%
- [ ] Visita presencial / passou na rua — ___%
- [ ] Outro (qual?) — ___%

### 2.3 — Pergunta direta: "qual cliente que mais te dá lucro?"

(o nicho com **maior margem %**, não maior volume)

Resposta: ___________________

### 2.4 — Cliente que NÃO devemos atender (perfil tóxico)

Tipo de cliente que dá prejuízo / dor de cabeça / não recomenda. Marque tudo que se aplica:

- [ ] Cliente que pechinchou demais e ainda reclama
- [ ] Cliente sem documentação regular do imóvel
- [ ] Cliente sem score pra financiamento e quer parcelar fora do banco
- [ ] Cliente com expectativa irreal de "zerar conta de luz"
- [ ] Cliente que mora em região sem rede Energisa adequada (transformador velho)
- [ ] Outro: _______________

### 2.5 — Maior **objeção de fechamento** (a frase que cliente fala antes de sumir)

- [ ] "Vou pensar / vou pesquisar mais"
- [ ] "Concorrente fez por menos"
- [ ] "Não tenho certeza se vale a pena com Fio B"
- [ ] "Tô esperando bater grana / esperar o reajuste do salário"
- [ ] "Minha esposa/marido não topou ainda"
- [ ] "Tô com medo do financiamento, juros tão altos"
- [ ] "Não confio em fotovoltaico, vizinho disse que rendeu menos"
- [ ] Outro: _______________

### 2.6 — Maior **dor inicial** que cliente traz (a primeira mensagem)

- [ ] "Conta de luz tá insuportável, não aguento mais"
- [ ] "Quero saber se compensa pra mim"
- [ ] "Tô vendo todo mundo botando, queria entender"
- [ ] "Preciso de orçamento urgente, recebi outra cotação"
- [ ] "Quero financiar, qual banco vocês trabalham?"
- [ ] Outro: _______________

### 2.7 — Ticket médio por nicho (R$ contrato fechado)

- Residencial: R$ ___________
- Comercial: R$ ___________
- Industrial: R$ ___________
- Rural: R$ ___________

### 2.8 — Ticket **mínimo** que aceita atender (abaixo disso não vale o esforço)

R$ ___________

---

## 🟦 BLOCO 3 — Posicionamento e marca

> **Por que perguntamos:** a vibe da Aura define se a LP vai ser preto/dourado premium ou verde/branco acessível. Define se copy fala "vamos transformar sua casa" ou "ROI de 18% a.a. no maior cap-rate do agro". Define o filtro de cliente que vamos atrair.

### 3.1 — Em 1 frase, quem é a Aura Energy pra você?

Resposta: ___________________

### 3.2 — **Onde você quer estar em 12 meses?** Escolha uma:

- [ ] **Maior empresa de fotovoltaico de Palmas** em volume de instalações
- [ ] **Marca premium** que cobra mais caro mas entrega projeto perfeito
- [ ] **Especialista em agro/rural** (nicho que ninguém domina em TO)
- [ ] **Especialista em B2B/comercial** (lojas, clínicas, escritórios)
- [ ] **Empresa institucional** que vende pra prefeitura/órgãos públicos
- [ ] Outro: _______________

### 3.3 — Vibe da marca Aura — escolha **2** que mais batem:

| Opção | O que vira na LP |
|---|---|
| **Técnica e confiável** | Cores: azul-marinho + cinza · copy: dados, números, gráficos |
| **Premium e exclusiva** | Cores: preto + dourado · copy: "investimento", "patrimônio", "sofisticação" |
| **Familiar e acolhedora** | Cores: verde + amarelo · copy: "sua família", "seu lar", "bem-estar" |
| **Inovadora e tech** | Cores: gradient azul→verde · copy: "futuro", "tecnologia", "smart" |
| **Robusta e do agro** | Cores: terra + verde campo · copy: "produtor rural", "fazenda", "produtividade" |
| **Sustentável e verde** | Cores: verde + branco · copy: "planeta", "futuro limpo", "ESG" |

### 3.4 — Quem é o **concorrente** que mais te tira o sono em Palmas?

(o nome real, sem medo)

Resposta: ___________________

### 3.5 — O que ele faz **bem** que você quer copiar/superar?

- [ ] Preço baixo / pacote barato
- [ ] Marketing forte / Insta ativo
- [ ] Vendedor agressivo / SDR
- [ ] Cases de prefeitura/clientes grandes
- [ ] Catálogo organizado de kits
- [ ] Atendimento rápido (responde em minutos)
- [ ] Outro: _______________

### 3.6 — O que ele faz **mal** que você quer ser o oposto?

- [ ] Demora pra entregar projeto
- [ ] Pós-venda inexistente
- [ ] Marca chinesa duvidosa nos kits
- [ ] Não dá garantia performance
- [ ] Vendedor sem conhecimento técnico
- [ ] Não tem CREA / ART
- [ ] Outro: _______________

### 3.7 — 3 marcas (NÃO solar) que você admira

(pode ser Apple, Nubank, Hospital Albert Einstein, Café Nespresso, Honda, Tesla, etc — qualquer mercado)

1. ___________
2. ___________
3. ___________

> Por que pergunto isso: marca que você admira reflete o **padrão de excelência** que você quer ter. Se você admira Nubank, sua marca vai ser limpa/digital/atendimento. Se admira Apple, vai ser premium/minimalista/produto-foco.

---

## 🟦 BLOCO 4 — Catálogo, marcas e kits

> **Por que perguntamos:** as LPs vão ter **kits públicos com preço de tabela** (igual fizemos no PIX da AgendaPRO — converte 30%+ a mais que "pedir orçamento por WhatsApp"). Pra isso, preciso saber **quais marcas você usa** e **quanto cobra por cada kit**.

### 4.1 — Marcas de **MÓDULOS** que você usa hoje

Marque todas que você instala:

- [ ] **Canadian Solar** (líder Greener 2025, mais segura)
- [ ] **Trina Solar** (Vertex S+, 21,9% eficiência, garantia 15 anos)
- [ ] **JA Solar** (preço agressivo R$830-1050 módulo 550W)
- [ ] **Risen Energy** (Hyper-Ion HJT, 22,5% eficiência — top mercado)
- [ ] **BYD** (única com fábrica BR + financiamento direto BNDES)
- [ ] **DAH Solar** (chinesa low-cost)
- [ ] **Longi**
- [ ] Outro: _______________

### 4.1.1 — **Sua marca preferida** de módulo (a que você indicaria pra família)

Resposta: ___________________

> Por que pergunto: vai ser a "padrão" mostrada na LP. Cliente vê "instalamos Canadian Solar de fábrica" e bate confiança imediata.

### 4.2 — Marcas de **INVERSORES** que você usa hoje

- [ ] **Growatt** (líder volume — orçamento apertado)
- [ ] **Deye** (referência híbrido + baterias — explodindo em 2026 por causa Fio B 60%)
- [ ] **Sungrow** (top global, suporte BR forte)
- [ ] **WEG** (nacional brasileira — escapa câmbio)
- [ ] **Solis**
- [ ] **Fronius** (premium europeu — máxima durabilidade)
- [ ] **SMA** (premium alemão)
- [ ] **Huawei** (premium chinês)
- [ ] Outro: _______________

### 4.2.1 — Sua marca preferida de inversor

Resposta: ___________________

### 4.3 — Você instala **sistemas com bateria** (off-grid ou híbrido)?

- [ ] Sim, com frequência (>20% das vendas)
- [ ] Sim, ocasional (5-20%)
- [ ] Raramente (<5%)
- [ ] Nunca, só on-grid puro

### 4.3.1 — SE SIM: marcas de bateria que usa

- [ ] **BYD** (premium, parceria com inversor BYD)
- [ ] **Pylontech**
- [ ] **Freedom**
- [ ] **Growatt**
- [ ] **Deye** (linha SUN compatível com várias marcas)
- [ ] Outro: _______________

### 4.4 — **Tabela de preços que vamos publicar nas LPs**

Pra cada faixa, me passa o preço REAL que você cobraria hoje (instalado + projeto + homologação Energisa, sem financiamento):

#### Residencial (kits fechados)
| Kit | Faixa kWp | Conta de luz alvo | Preço de venda |
|---|---|---|---|
| Mini | 3 kWp | até R$ 350/mês | R$ ___________ |
| Padrão | 5 kWp | R$ 350-600/mês | R$ ___________ |
| Plus | 8 kWp | R$ 600-900/mês | R$ ___________ |
| Premium | 10 kWp | R$ 900-1.200/mês | R$ ___________ |
| Premium+ | 15 kWp | R$ 1.200-1.800/mês | R$ ___________ |

#### Comercial (kits sob consulta com faixas)
| Faixa | kWp | Conta alvo | Preço médio |
|---|---|---|---|
| Pequeno | 15-30 kWp | R$ 1.500-3k/mês | R$ ___________ |
| Médio | 30-75 kWp | R$ 3-7k/mês | R$ ___________ |
| Grande | 75-150 kWp | R$ 7-15k/mês | R$ ___________ |

#### Industrial (sob projeto)
| Faixa | kWp | Estratégia preço |
|---|---|---|
| Médio | 150-500 kWp | "Sob projeto, ROI 4-5 anos" |
| Grande | 500 kWp+ | "Sob projeto, ROI 3-4 anos com BNDES" |

#### Rural/agro (com Pronaf Bioeconomia)
| Faixa | kWp | Preço médio |
|---|---|---|
| Sítio/pequena propriedade | 10-30 kWp | R$ ___________ |
| Fazenda média | 30-100 kWp | R$ ___________ |
| Fazenda grande | 100 kWp+ | "Sob projeto + BNDES" |

> **Observação:** se ele preferir não publicar preço fixo (estratégia de "pedir orçamento"), pelo menos **faixa de R$/kWp** funciona. Padrão BR 2026 é **R$ 3.800-5.500/kWp** (fonte: Greener 2026). Aura quer ficar onde nessa faixa? **Dele depende a estratégia de posicionamento de preço.**

### 4.5 — Garantias que você oferece

- Garantia do **módulo**: ___ anos (padrão mercado: 25 anos linear)
- Garantia do **inversor**: ___ anos (padrão: 10 anos)
- Garantia da **instalação/serviço**: ___ anos (Aura: 1 ano? 2? 5?)
- Garantia de **performance** (% mínimo de geração contratada): ___ % por ___ anos

> Garantia performance é diferencial RARO. Se Aura oferece, vira selo gigante na LP.

### 4.6 — Margem média % por kWp instalado

(sincero — fica entre nós, vai pro nosso BI interno, não sai na LP)

- Residencial: ___ %
- Comercial: ___ %
- Industrial: ___ %
- Rural: ___ %

---

## 🟦 BLOCO 5 — Financiamento

> **Por que perguntamos:** **70% das vendas residenciais BR são financiadas**. LPs com selo "Aprovação em 30s · Solfácil/BV/Sicredi" convertem 2-3× mais que LPs sem nada. Precisamos listar bancos parceiros REAIS.

### 5.1 — Quais bancos você tem **convênio ativo** hoje?

- [ ] **Solfácil** (taxa 18% a.a., aprovação 30s, prazo 120m, 100% digital)
- [ ] **BV Financeira** (taxa 15% a.a., biometria 30s, carência 6 meses, CET 1,17-1,4%/mês)
- [ ] **Sicredi** (taxa 1-3%/mês, BNDES via cooperativa, spreads <2%)
- [ ] **Sicoob** (BNDES via cooperativa, spreads baixos)
- [ ] **BNDES Finame** (direto — só pra grandes via agente)
- [ ] **Banco do Brasil — Programa Agro Energia** (rural)
- [ ] **Banco do Nordeste — FNE Sol** (rural/comercial NE — pode aplicar TO?)
- [ ] **Pronaf Bioeconomia** (rural — 2,75% a.a., 10 anos, carência 5 anos, R$165k pessoa física)
- [ ] **Galpa** (financeira solar)
- [ ] **Meu Financiamento Solar (MFS)**
- [ ] **Santander**
- [ ] **Itaú**
- [ ] Outro: _______________

### 5.1.1 — **Banco preferido** (que mais aprova / melhor experiência cliente)

Resposta: ___________________

### 5.2 — Taxa de aprovação média dos seus clientes

- ___ % aprovados na primeira tentativa
- ___ % precisam mudar de banco até aprovar
- ___ % desistem por não aprovação

### 5.3 — Aceita PIX como **entrada parcial** + financiamento do resto?

- [ ] Sim, recomendo (entrada baixa = melhor aprovação)
- [ ] Sim, mas não incentivo
- [ ] Não, financia 100% direto

### 5.4 — Tempo médio entre cliente fechar e dinheiro cair na conta da Brasfrio

- Solfácil: ___ dias
- BV: ___ dias
- Sicredi/cooperativa: ___ dias

> Por que pergunto: cliente quer saber se vai ter aprovação rápida. "Aprovação em 24h, instalação em 30 dias" é selo na LP.

### 5.5 — **Pronaf Bioeconomia** (taxa 2,75% a.a. — uma das menores do Brasil)

Você já fez venda **rural** financiada por Pronaf?
- [ ] Sim, várias
- [ ] Sim, alguma
- [ ] Não, mas quero aprender
- [ ] Não conhecia essa linha

> Se "sim" ou "quero aprender": vamos colocar como **diferencial gigante** na LP /fazenda — quase ninguém em Palmas oferece Pronaf direto. R$165k a 2,75% a.a. com 5 anos carência = fechamento garantido pra produtor rural.

---

## 🟦 BLOCO 6 — Heros das 5 LPs (CRÍTICO)

> **Por que perguntamos:** o **hero** (primeira tela da LP) responde 3 perguntas em 5 segundos: "isso é pra mim? · qual o benefício? · posso confiar?". Sem caso real + foto real + headline real, não tem hero — tem placeholder genérico.

### Pra cada uma das 5 LPs:

#### 6.A — LP **/casa** (residencial)

**A.1 — Headline (1 frase de até 12 palavras) que você falaria pra um cliente residencial novo agora.**

Exemplos pra inspirar:
- "Sua casa em Palmas pode ter conta de luz de R$ 50/mês"
- "Energia solar no seu telhado, garantia de 25 anos, financiamento aprovado em 30s"
- "Pare de pagar Energisa. Comece a pagar a sua própria energia."

Sua versão: ___________________

**A.2 — Caso real residencial Brasfrio**
- Nome do cliente (com autorização LGPD): ___________
- Bairro de Palmas: ___________
- Tamanho do sistema: ___ kWp
- Conta de luz **antes**: R$ ___ /mês
- Conta de luz **depois**: R$ ___ /mês
- Tempo de instalação: ___ dias
- **Foto da casa com placas instaladas** (anexar)

**A.3 — Maior **dúvida residencial** que cliente faz?**
___________________

---

#### 6.B — LP **/comercio** (loja, escritório, clínica)

**B.1 — Headline pra cliente comercial:**
___________________

**B.2 — Caso real comercial Brasfrio**
- Nome do estabelecimento: ___________
- Tipo (loja, clínica, escritório, restaurante, etc): ___________
- Bairro Palmas: ___________
- Tamanho: ___ kWp
- Conta antes/depois: R$ ___ → R$ ___
- Foto: anexar

**B.3 — Argumento que faz lojista fechar mais rápido**
- [ ] ROI / payback em meses
- [ ] Reduz folha de R$X/ano
- [ ] Marketing verde / atrai cliente
- [ ] Valoriza ponto comercial
- [ ] Outro: _______________

---

#### 6.C — LP **/industria** (galpão, fábrica)

**C.1 — Headline industrial:**
___________________

**C.2 — Caso industrial real**
- Nome: ___________
- Setor (alimentos, metalurgia, plástico, gráfica, etc): ___________
- kWp: ___
- Investimento total: R$ ___
- Economia mensal: R$ ___
- ROI estimado: ___ anos
- Foto: anexar

**C.3 — Argumento decisivo industrial**
- [ ] BNDES Finame Baixo Carbono (taxa 10-14% a.a.)
- [ ] Crédito de carbono / ESG
- [ ] Estabilidade de custo energético frente a reajustes Energisa
- [ ] Outro: _______________

---

#### 6.D — LP **/fazenda** (rural/agro)

**D.1 — Headline agro:**
___________________

(Sugestão: "Energia solar pro produtor rural com Pronaf Bioeconomia: 2,75% a.a. e 5 anos de carência")

**D.2 — Caso rural real**
- Tipo de propriedade (sítio / fazenda gado / fazenda grãos / piscicultura / outros): ___________
- Cidade/região: ___________
- kWp: ___
- Para quê serve a energia (irrigação? ordenha? climatização? geral?): ___________
- Foto: anexar (se possível com Renato no local)

**D.3 — Maior bloqueio do produtor rural**
- [ ] Não conhece Pronaf Bioeconomia
- [ ] Tem medo de financiar (geração caipira "minha conta vai pro banco")
- [ ] Energia sobrando na propriedade não compensa
- [ ] Outro: _______________

---

#### 6.E — LP **mãe** (`/`) — segmenta pros 4 nichos

**E.1 — Frase de impacto que vai no topo (acima da segmentação):**

Exemplos:
- "Energia solar profissional em Palmas-TO. Há 8 anos, mais de 500 instalações entregues."
- "A maior taxa de aprovação de financiamento solar do Tocantins."
- "De casa a fazenda: cada metro do seu telhado virando dinheiro de volta no bolso."

Sua versão: ___________________

---

## 🟦 BLOCO 7 — Estratégia 90 dias

> **Por que perguntamos:** prometer 6 artes Insta + setup + LPs sem entender capacidade real do Renato é receita pra ele não postar nada e a Aura morrer no berço.

### 7.1 — Quanto tempo por dia você consegue dedicar à Aura (à parte da Brasfrio)?

- [ ] Menos de 30min — preciso de tudo automatizado
- [ ] 30-60min — consigo postar diariamente se ficar pronto
- [ ] 1-2 horas — consigo gravar vídeo, escrever resposta, etc
- [ ] 2-4 horas — modo guerra
- [ ] Outro: ___________

### 7.2 — Quem responde **WhatsApp Business** da Aura?

- [ ] Eu mesmo (Renato)
- [ ] Vendedor/SDR já existente da Brasfrio
- [ ] Vou contratar SDR
- [ ] Bot/automação primeiro filtro + eu depois
- [ ] Outro: ___________

### 7.3 — Investimento mensal em ads (Meta Ads + Google Ads)

- [ ] R$ 0 (só orgânico)
- [ ] R$ 200-500/mês
- [ ] R$ 500-1.500/mês
- [ ] R$ 1.500-3.000/mês
- [ ] R$ 3.000+ /mês
- [ ] Não decidi ainda

### 7.4 — Canal preferido pra captação primária

- [ ] Instagram orgânico (posts + stories + reels)
- [ ] Google Ads (busca "energia solar Palmas")
- [ ] Meta Ads (Insta/Facebook)
- [ ] Indicação cliente Brasfrio antigo (campanha "Indique e ganhe")
- [ ] WhatsApp em massa (lista de clientes Brasfrio fria)
- [ ] Parceria com lojas de material de construção
- [ ] Outro: ___________

### 7.5 — Meta de vendas mensal Aura nos próximos 90 dias

- Mês 1 (mai/26): ___ instalações fechadas
- Mês 2 (jun/26): ___
- Mês 3 (jul/26): ___

> Realismo > otimismo. Meta baixa cumprida > meta alta perdida.

---

## 🟦 BLOCO 8 — Bônus, garantias e diferenciais

> **Por que perguntamos:** cada selo aqui vira **redução de objeção** na LP. Cliente que vê "garantia performance 90% por 25 anos · monitoramento app · limpeza grátis ano 1" tem 2-3× menos objeções.

### 8.1 — Quais desses você oferece HOJE? Marque tudo:

- [ ] **Garantia de performance** (% mínimo de geração contratada por X anos)
- [ ] **Monitoramento por app** (cliente vê geração em tempo real no celular)
- [ ] **Limpeza preventiva** (visita anual incluída ou paga separada)
- [ ] **Visita técnica anual** (checagem de conexões, fixação, etc)
- [ ] **Suporte WhatsApp 24h**
- [ ] **Suporte em horário comercial**
- [ ] **Reposição grátis** se módulo falhar dentro da garantia
- [ ] **Treinamento do cliente** (como usar app, como ler conta com créditos)
- [ ] **Mudança de titularidade** se cliente vender imóvel
- [ ] **Curso/conteúdo educativo** (vídeos, ebook explicando como funciona)

### 8.2 — Quais desses você QUER passar a oferecer (proposta de upgrade no portfolio)?

(mesma lista acima, marca os que ainda não tem mas quer)

### 8.3 — Selos / certificações que tem

- [ ] CREA-TO PJ
- [ ] CREA pessoa física do RT
- [ ] ISO 9001
- [ ] Selo Inmetro nas instalações
- [ ] Membro ABSOLAR
- [ ] Cooperativa solar
- [ ] Outro: ___________

### 8.4 — **Brigada de proteção do investimento** (proposta nova)

Pra subir o ticket e travar cliente:

- [ ] Seguro de equipamento contra raio/granizo (parceria com seguradora)
- [ ] Seguro de responsabilidade civil (caso instalação cause dano)
- [ ] Garantia estendida de inversor (5 anos extra além dos 10 padrão)
- [ ] Plano "tudo incluso" mensalidade R$X com manutenção contínua

Quer adicionar algum desses no portfolio? Quais?

___________________

---

## 🟦 BLOCO 9 — DECISÕES ESTRATÉGICAS (são SUAS, não nossas)

> **Por que esse bloco existe:** durante a pesquisa, encontrei várias coisas que **PODERIAM ser diferencial da Aura**. Mas cada uma tem trade-off (custa seu tempo, te trava num posicionamento, etc). Eu não decido por você. Você marca o que faz sentido pro seu jeito de trabalhar.

### 9.1 — Estratégia de PREÇO nas LPs

Como você prefere mostrar preço de kit residencial (5-15 kWp)?

- [ ] **Preço fixo público** ("Kit 5 kWp · R$ 21.500 · instalado") — converte +30% mas trava margem na negociação
- [ ] **Faixa de preço** ("Kit 5 kWp · a partir de R$ 19.000") — meio-termo, deixa espaço de barganha
- [ ] **Apenas "pedir orçamento"** — controle total na negociação mas perde lead que quer transparência rápida
- [ ] Outro: _______________

### 9.2 — Marca de módulo dominante (estratégia de identidade técnica)

Você prefere posicionar Aura como:

- [ ] **"A Aura instala Canadian Solar de fábrica"** (ou outra marca única) — vira selo de credibilidade, mas você fica preso a uma fornecedora
- [ ] **"A Aura trabalha com várias marcas, escolhe a melhor pra cada projeto"** — flexibilidade total mas perde força de identidade
- [ ] Depende — qual sua escolha pra residencial / comercial / industrial separadamente: _______________

### 9.3 — Pronaf Bioeconomia como diferencial RURAL

A linha tem juros de 2,75% a.a. com 5 anos de carência (uma das menores do Brasil). Poucos integradores em Palmas oferecem como serviço completo (montagem do dossiê).

Você quer posicionar Aura como **"especialista em Pronaf"** na LP /rural?

- [ ] **Sim, vou estudar e dominar** — diferencial gigante, mas exige aprendizado e relacionamento com Sicredi/Sicoob/BB local
- [ ] **Sim, mas só ofereço o caminho** — falo do Pronaf na LP, mas indico cooperativa/banco pro cliente fazer
- [ ] **Não nesse primeiro momento** — muita carga inicial, prefiro outras prioridades
- [ ] Outro: _______________

### 9.4 — Bônus Programa Palmas Solar (40% IPTU)

A prefeitura oferece desconto de até 40% no IPTU pra quem instala fotovoltaico em Palmas (vigente 2026-2030). Tem um dossiê chato pra montar (parecer técnico ART, certidão negativa, NF, Habite-se, etc).

Você quer oferecer **"a Aura monta o dossiê do Palmas Solar pra você grátis"** como bônus de compra?

- [ ] **Sim, ofereço grátis** — diferencial puro vs concorrência, custa ~1h sua/cliente, cliente economiza R$500-1.500/ano
- [ ] **Sim, mas cobrando R$X separado** — quanto você cobraria? R$ ___
- [ ] **Não ofereço** — só explico na LP que existe o programa e o cliente se vira
- [ ] Outro: _______________

### 9.5 — Sistema com bateria (híbrido / off-grid)

Com Fio B em 60% em 2026, baterias viraram economicamente atraentes. Marcas como Deye lideram o segmento.

Você quer posicionar Aura como **referência em sistema híbrido** (com bateria)?

- [ ] **Sim, é meu foco principal** — onda do mercado em 2026, vou liderar em Palmas
- [ ] **Sim, mas como upsell** — vendo on-grid padrão e ofereço bateria como upgrade
- [ ] **Não nesse momento** — mais complexo, prefiro dominar on-grid puro primeiro
- [ ] Outro: _______________

### 9.6 — Garantia de performance

Padrão mercado: **NÃO** se oferece garantia de % mínimo de geração. Quem oferece tem diferencial RARO.

Você está disposto a contratualizar garantia de performance (ex: "geração mínima de 90% do projetado nos primeiros 5 anos")?

- [ ] **Sim, vou oferecer** — vira selo gigante na LP, mas tenho que assumir custo se não bater
- [ ] **Sim, mas com condições** — quais condições? _______________
- [ ] **Não ofereço** — risco alto, prefiro outras formas de proteção
- [ ] Outro: _______________

### 9.7 — Cliente que NÃO quero atender (filtro de qualidade)

Você quer comunicar abertamente na LP **quem você NÃO atende** (ex: "Não atendemos cliente sem documentação regular do imóvel")?

- [ ] **Sim, ser claro filtra mal-cliente cedo** — perde alguns leads mas qualifica os bons
- [ ] **Não, prefiro receber todos e filtrar internamente** — mais leads = mais oportunidades
- [ ] Outro: _______________

### 9.8 — Visita técnica pré-orçamento (custo logístico)

Você quer oferecer **visita técnica grátis antes do orçamento**?

- [ ] **Sim, sempre grátis** — converte mais mas custa diesel/tempo da equipe
- [ ] **Sim, grátis até X km de Palmas** — quanto km: ___
- [ ] **Cobro visita técnica** se não fechar — quanto? R$ ___
- [ ] **Não faço visita pré-orçamento** — projeto só com Google Earth + conta de luz
- [ ] Outro: _______________

### 9.9 — Pacote "tudo incluso" mensal (assinatura)

Você quer testar um modelo de assinatura mensal **R$X/mês com manutenção contínua + monitoramento + limpeza preventiva + reposição de equipamento se falhar**?

- [ ] **Sim, top de gama da Aura** — receita recorrente, ticket alto
- [ ] **Talvez no futuro** — primeiro consolido vendas avulsas
- [ ] **Não faz sentido pro mercado de Palmas** — cliente quer economizar, não pagar mais mensalidade

### 9.10 — Treinamento/curso pro cliente

Você quer oferecer **mini-curso de "como usar seu sistema solar"** (1h, online) como bônus pós-venda?

- [ ] **Sim, ajuda cliente entender + reduz suporte futuro** — pode virar bônus na compra
- [ ] **Não, cliente médio não quer aprender, quer só economia**
- [ ] Outro: _______________

---

## 🟦 ENCERRAMENTO — última pergunta

### "Se a Aura virasse a maior empresa de fotovoltaico de Palmas em 12 meses, o que seria diferente da sua vida hoje?"

(resposta livre — vai pro nosso entendimento de motivação real do Renato e calibrar tom da comunicação)

___________________

---

# 📦 APÊNDICE — Pesquisa de mercado pra Eduardo

(material de referência interno · não vai pro Renato — só pra Eduardo entender o terreno antes de calibrar respostas)

## Marcas de módulo — ranking Greener 2026 (Brasil)

| Marca | Posição | Diferencial | Preço estimado 550W |
|---|---|---|---|
| **Canadian Solar** | #1 brand recall | "Mais segura" — escolha de quem instala 1ª vez | R$ 950-1.150 |
| **Trina Solar** | top 3 | Vertex S+ N-type 21,9% · 15 anos garantia (único) | R$ 1.000-1.250 |
| **JA Solar** | volume | Preço agressivo · alta eficiência | R$ 830-1.050 |
| **Risen Energy** | premium | Hyper-Ion HJT 22,5% · melhor coef. temperatura | R$ 1.100-1.350 |
| **BYD** | nacional | **Única com fábrica BR + financiamento direto BNDES** | R$ 950-1.200 |

**Observação técnica (não-decisão):** o Greener 2025 mostra que ter **1 marca dominante** (~90% das vendas) gera mais força de identidade que pulverizar entre 5+ marcas. Decisão fica com Renato no Bloco 9.2.

## Marcas de inversor — ranking 2026

| Marca | Quando indicar |
|---|---|
| **Growatt** | Orçamento apertado, residencial simples |
| **Deye** | **Quando vai com bateria** (Fio B 60% em 2026 fez explodir híbridos) |
| **Sungrow** | Médio/grande porte, suporte BR forte |
| **WEG** | Cliente quer "marca nacional" (escapa do dólar) |
| **Fronius** | Premium absoluto, máxima durabilidade (R$ 2-3× mais caro) |

## Bancos solares Brasil 2026 — taxas atuais

| Banco | Taxa a.a. | Prazo | Aprovação | Especialidade |
|---|---|---|---|---|
| **BV Financeira** | 15% | até 120m | biometria 30s | Residencial — taxa mais baixa |
| **Solfácil** | 18% | até 120m | 100% digital | Residencial — mais rápida |
| **Sicredi** | 12-36% (1-3%/mês) | até 120m | exige agência | Cooperativa — taxa BNDES |
| **Sicoob** | similar Sicredi | até 120m | exige agência | Cooperativa — spread baixo |
| **BNDES Finame Baixo Carbono** | 10-14% | até 120m | via cooperativa | Industrial/comercial grande |
| **Pronaf Bioeconomia** | **2,75%** | até 10 anos · **5 anos carência** | via Sicredi/Sicoob/BB | **Rural — diferencial gigante, R$165k/PF** |
| **FNE Sol (Banco Nordeste)** | menores | longo | via banco | Rural/comercial NE — checar se TO se aplica |

**Observação:** Pronaf Bioeconomia tem juros de **2,75% a.a. com 5 anos de carência** (uma das menores do BR). Poucos integradores oferecem como serviço completo. Decisão de posicionamento fica com Renato no Bloco 9.3.

## Preços de mercado kits BR 2026

- **R$/kWp instalado**: R$ 3.800 - R$ 5.500
- **Composição típica**: módulos 35-45% · inversor 15-25% · estrutura 5-10% · projeto+instalação 20-30%
- **Tarifa importação:** sobe pra 35% em julho/2026 (China) → projeção alta de 13% nos kits residenciais (Greener)
- **Padrão mercado:** kits residenciais (até 15 kWp) com preço fechado + "sob projeto" pra comercial+. Decisão fica com Renato no Bloco 9.1.

## Lei 14.300 / Fio B — situação 2026

- 2026: cliente paga **60% do Fio B** (compensação cai pra 40% — era 55% em 2025)
- 2027: 75% · 2028: 90% · 2029+: indefinido (ANEEL ainda regulamentando)
- **Impacto direto na conversão:** cliente que ouviu falar de Fio B fica inseguro — Aura precisa **explicar de forma simples** + mostrar que o ROI ainda compensa
- **Boom de baterias/híbridos:** virou sweet spot pro Deye + BYD em 2026

## Programa Palmas Solar (TO) — atualização 2026

- **Desconto IPTU:** **até 40%** (caiu de 50%/60% dos anos anteriores)
- Vigente 2026-2030 (5 anos)
- Aplica também ITBI + ISSQN
- Solicitação até 30/out pra ano seguinte
- **Documentos necessários:** parecer técnico ART · Energisa contrato · NF emitida em Palmas · Habite-se · RG/CPF · Certidão Negativa Débitos
- **Observação:** o dossiê pro Palmas Solar é trabalhoso (parecer técnico ART, certidão negativa, NF, Habite-se, etc). Cliente economiza ~R$ 500-1.500/ano em IPTU. Decisão de virar bônus de compra Aura fica com Renato no Bloco 9.4.

---

# 🎬 GRUPO WHATSAPP — "Aura · Eduardo · Renato"

**Combinado:** Eduardo cria grupo dia D. Todos os envios de mídia/dado vão por ali. Vantagem: rastreabilidade, quem perguntou o quê, quem enviou o quê. Sem perder no chat 1-a-1.

**Regra clara pro Renato:**
> "Manda em pacotes na ordem abaixo. Cada pacote em uma mensagem só (com texto + imagens junto). Marca o checkbox de qual pacote acabou de mandar. Não precisa pressa — manda 1-2 pacotes/dia."

---

## 📦 ORDEM DOS PACOTES (Renato manda no grupo na ordem)

### Pacote 1 · Institucional Aura (5 itens)

> Renato, manda numa mensagem só:

- [ ] Foto sua **profissional** (escritório, sorrindo, com camisa Brasfrio ou Aura — 1 foto, fundo limpo)
- [ ] Foto **da equipe completa** (técnicos + vendedores + você no galpão — 1 foto)
- [ ] Foto **da fachada do galpão** Brasfrio (com placa visível — 1 foto)
- [ ] Foto de **1 ferramenta grande** (calandra, andaime, van — 1 foto pra mostrar estrutura)
- [ ] **CREA-TO PJ** (foto do certificado ou print do site do conselho)
- [ ] **ART pública** (link do conselho ou print)

> **Regra de qualidade:** todas as fotos no formato **paisagem/vertical livre, mas iluminadas e com foco**. Tira o lixo do fundo. Se duvidar, manda 2 versões diferentes da mesma foto que eu escolho.

---

### Pacote 2 · Caso residencial (4-5 cases)

> Pra **cada cliente residencial** (mínimo 3, ideal 5):

Mensagem padrão:
```
🏠 RESIDENCIAL · {número 1, 2, 3...}
Cliente: [Nome completo do cliente]
Bairro: [Bairro/cidade]
Tamanho: [X kWp · Y placas]
Conta antes: R$ [valor]
Conta depois: R$ [valor]
Mês/ano da instalação: [MM/YYYY]
Autorizou usar nome? [Sim/Não]

[anexo: foto da casa com placas no telhado — 1 ou 2 fotos]
[anexo: foto do inversor instalado — opcional]
```

> **Se cliente NÃO autorizou nome:** manda como "Cliente do bairro Plano Diretor Sul" — a gente usa anônimo na LP.

---

### Pacote 3 · Caso comercial (2-3 cases)

> Pra cada **comércio** (loja, escritório, clínica, restaurante):

```
🏬 COMERCIAL · {número 1, 2, 3...}
Estabelecimento: [Nome se autorizado, ou tipo "Clínica Odontológica"]
Tipo: [loja/clínica/restaurante/escritório/etc]
Bairro Palmas: [bairro]
Tamanho: [X kWp]
Conta antes: R$ [valor]
Conta depois: R$ [valor]
ROI estimado: [X anos]
Autorizou usar nome? [Sim/Não]

[anexo: foto da fachada ou cobertura com placas — 1-2 fotos]
```

---

### Pacote 4 · Caso industrial (1-2 cases — se tiver)

```
🏭 INDUSTRIAL · {número 1...}
Empresa: [nome se autorizado]
Setor: [alimentos/metalurgia/plástico/gráfica/...]
Cidade: [cidade]
Tamanho: [X kWp]
Investimento total: R$ [valor]
Economia mensal: R$ [valor]
Financiamento: [BNDES Finame? Sicredi? Solfácil? própria?]
ROI estimado: [X anos]

[anexo: foto da cobertura industrial com placas — preferência drone/aéreo]
```

> **Se ainda não tem industrial:** marca como "ainda em pipeline" e a LP `/industria` usa pesquisa de mercado em vez de case real.

---

### Pacote 5 · Caso rural/agro (1-2 cases — se tiver)

```
🌾 RURAL · {número 1...}
Tipo: [sítio/fazenda gado/fazenda grãos/piscicultura/horta/...]
Cidade/região: [cidade-TO]
Tamanho: [X kWp]
Pra quê serve a energia? [irrigação? ordenha? climatização? geral?]
Financiamento: [Pronaf? recurso próprio? outro banco?]
Você foi até a propriedade? [Sim/Não]
Autorizou usar nome? [Sim/Não]

[anexo: foto da instalação no campo/fazenda — preferência paisagem ampla]
[anexo: foto do Renato no local se possível]
```

> **Se Renato ainda não fez nenhuma instalação rural pelo nome Aura:** marca como "primeira fazenda em pipeline" e atacamos juntos. LP `/rural` ainda funciona com ângulo "vai ser nosso primeiro case rural" + Pronaf como gancho.

---

### Pacote 6 · Depoimentos áudio (3-5 clientes)

> **Como pedir pro cliente** (texto pronto, Renato copia e cola num WhatsApp pra cada cliente):

```
Oi [NOME], aqui é o Renato da Aura/Brasfrio Solar 🌞

Tô atualizando o site da empresa e queria sua ajuda. Pode gravar
um áudio rapidinho de uns 30 segundos respondendo essas perguntas?

1. Seu nome e onde mora (bairro/cidade)
2. Quanto era sua conta antes e quanto é hoje
3. Se indicaria a Aura pra um amigo

É curtinho e me ajuda muito. Eu uso só com sua autorização — se
não topar, sem problema. 🙏
```

> **Renato manda no grupo:**
- O áudio do cliente (encaminha)
- Print da autorização ("Sim pode usar")
- Nome do cliente

> **Quantos a gente precisa:** mínimo 3 áudios. Ideal 5 (pra rotacionar nas LPs e stories).

---

### Pacote 7 · Mapa de instalações reais (lista bairros)

> Mensagem única no grupo, formato livre:

```
📍 MAPA INSTALAÇÕES (últimos 12 meses)

Plano Diretor Sul: 8 instalações
Plano Diretor Norte: 4
Aureny III: 3
Aureny IV: 2
Lago Norte: 5
Lago Sul: 2
Taquaralto: 6
ARSE 122: 1
Capim Dourado: 2
Total Palmas: ~33

Fora Palmas:
Porto Nacional: 3
Paraíso TO: 2
Gurupi: 1
```

> **Não precisa ser exato** — estimativa redonda já serve. Eduardo vai gerar o mapa visual real depois.

---

### Pacote 8 · Bancos + Pronaf

> Mensagem única no grupo:

```
🏦 BANCOS QUE EU TRABALHO

Solfácil: [tenho convênio? sim/não]
BV Financeira: [sim/não]
Sicredi: [sim/não]
Sicoob: [sim/não]
BNDES via cooperativa: [sim/não]
Banco do Brasil Agro Energia: [sim/não]
Pronaf Bioeconomia: [já fiz? quantas? quero aprender?]
Outros: [quais?]

Banco preferido (que mais aprova): _____
Tempo médio entre fechar e dinheiro cair: ___ dias
```

---

## ✅ Checklist Renato (visual no grupo)

```
[ ] Pacote 1 — Institucional (foto + equipe + galpão + CREA + ART)
[ ] Pacote 2 — Residencial (3-5 casos)
[ ] Pacote 3 — Comercial (2-3 casos)
[ ] Pacote 4 — Industrial (1-2 casos)
[ ] Pacote 5 — Rural (1-2 casos)
[ ] Pacote 6 — 3-5 depoimentos áudio
[ ] Pacote 7 — Mapa de bairros
[ ] Pacote 8 — Bancos + Pronaf
[ ] Form Tally respondido (Blocos 1-8 do briefing detalhado)
```

> **Tempo estimado total** (Renato): 2-3h espalhadas em 5-7 dias.

---

# 📱 TEXTO INICIAL DO GRUPO WHATSAPP

(Eduardo cria grupo, adiciona Renato, manda essa primeira mensagem)

---

**MENSAGEM 1** (cria grupo + apresenta)

> Eu, Renato 👋
>
> Criei esse grupo "Aura · Eduardo · Renato" pra centralizar tudo do projeto. Ano que vem a gente vai querer rastrear o que decidiu/quando — então tudo vai por aqui em vez de chat 1-a-1.
>
> **Próxima rodada:** preciso de fotos e dados reais pra calibrar a LP da Aura. Senão fica genérica e converte mal.
>
> Montei um doc com **8 pacotes de envio** (fotos, casos, depoimentos, dados de bancos, etc). Manda em pacotes — 1-2/dia, no seu ritmo. Vou te passar o checklist.

---

**MENSAGEM 2** (envia o doc / link)

> Aqui o doc completo: [link Notion/Google Doc OU PDF anexado]
>
> Resumo do que precisa:
>
> 📦 Pacote 1 — Institucional (foto sua + equipe + galpão + CREA + ART)
> 📦 Pacote 2 — Residencial (3-5 casos com fotos e dados)
> 📦 Pacote 3 — Comercial (2-3 casos)
> 📦 Pacote 4 — Industrial (1-2 casos)
> 📦 Pacote 5 — Rural (1-2 casos)
> 📦 Pacote 6 — 3-5 depoimentos em áudio (template pra pedir ao cliente tá no doc)
> 📦 Pacote 7 — Mapa: quais bairros já tem instalação
> 📦 Pacote 8 — Bancos parceiros + Pronaf
>
> **Pode começar pelo mais fácil — qual pacote vc tem mais material agora?**

---

**MENSAGEM 3** (depois de receber pacote 1)

> Boa! Recebi o pacote 1. Vou processar e te dou retorno do que ficou bom + do que precisa de complemento até amanhã.
>
> Próximo: **Pacote 2 (residencial)**. Manda 1 caso por mensagem. Sem pressa.

---

# 📋 LINK PRO BRIEFING DETALHADO (form Tally — separado)

Os Blocos 1-8 com perguntas estruturadas (operação, posicionamento, marcas, kits, financiamento, heros, estratégia 90d, garantias) Renato responde **em paralelo** ao envio dos pacotes. Form Tally pode ser enviado como segunda mensagem no grupo:

> Ah, e tem esse form aqui também — perguntas mais estruturadas pra eu calibrar a estratégia (preço dos kits, posicionamento da marca, etc). 30-40min pra responder.
>
> [link do form Tally]

---

# ✅ CHECKLIST DE EXECUÇÃO PRO EDUARDO

- [ ] Decidir formato: form Tally · WhatsApp parcial · reunião gravada
- [ ] **Se Tally:** copiar cada bloco pra perguntas separadas + configurar webhook → email Eduardo
- [ ] Mandar **Mensagem 1** WhatsApp Renato
- [ ] Aguardar resposta · mandar **Mensagem 2** com link/call
- [ ] **Após Renato responder Bloco 6 (heros + casos):** atacar calibragem LP (#159) com fotos e dados reais
- [ ] **Após Renato responder Blocos 4 + 5:** publicar tabela de kits + selo de bancos nas LPs
- [ ] **Após Renato responder Bloco 8:** adicionar selos de garantia/diferenciais nas LPs

---

**Ver também:** [[STATUS-AURA-ENERGY]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
