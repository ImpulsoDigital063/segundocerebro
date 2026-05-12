# PROTOCOLO DEEP RESEARCH CLIENTE — Diferencial Impulso

> **Por que existe:** depois da apresentação ao Renato (Aura Energy, 01/05/2026), Eduardo cravou o diferencial competitivo da Impulso: "cliente percebeu que de fato se tratava de um sistema inteligente que sabia exatamente o que estava apresentando." Esse playbook torna isso reproduzível pra qualquer cliente futuro.

**Status:** 🟢 v1 cravado · validado em campo (Aura Energy)
**Última atualização:** 02/05/2026

---

## ⚡ Princípio fundamental

**Nenhum cliente Impulso recebe LP/site/proposta com mockup genérico, lorem ipsum ou número aspiracional.** Todo entregável vem com **conhecimento técnico real do nicho do cliente embutido**, com fonte verificável.

**Resultado psicológico:** cliente lê e pensa *"essa empresa entende meu mundo melhor que muita gente do setor."* Entra em modo **"valido proposta"** em vez de **"tenho que explicar o nicho."**

**Diferencial absoluto vs concorrência:** quase 100% das agências entrega wireframe genérico e pede pro cliente preencher dados técnicos. Impulso entrega **preenchido**.

---

## 🔄 Protocolo em 3 etapas

### Etapa 1 — Pré-reunião (60-90 min)

**Disparar agente de pesquisa web em paralelo** com prompt focado nas categorias obrigatórias.

#### Categorias obrigatórias (adaptar por nicho)

1. **Regulação vigente** — leis, normas, agências reguladoras
2. **Números atuais do mercado** — crescimento, valuation, volume, ranking BR/mundial
3. **Tarifa / preço / ticket médio** do setor
4. **Marcas / equipamentos / fornecedores top**
5. **Financiamento / parcelamento típico** (linhas atuais com taxa/prazo real)
6. **Sazonalidade** do consumo/procura
7. **Concorrência local específica** da cidade/região do cliente
8. **Tendências últimos 12 meses** (notícias, mudanças regulatórias)

#### Regra dura

**Cada dado tem que vir com fonte verificável.** Sem fonte, vira inferência — vetada.

Fontes confiáveis por área:
- **Regulação:** ANEEL, ANATEL, ANVISA, Banco Central (BCB), CRECI, conselhos profissionais
- **Mercado:** ABSOLAR (energia), ABF (franchising), ABComm (e-commerce), ABEMD (marketing direto)
- **Financeiro:** Banco Central, B3, BTG/XP research
- **Setoriais:** Canal Solar, Portal Solar, pv magazine (energia); Canaltech, Mobile Time (tech)
- **Notícias atualizadas:** Valor, Estadão Economia, InfoMoney

#### Output

Arquivo `RESEARCH-{cliente}.md` no repo da LP com:
- 6-10 seções de dados estruturados
- Cada estatística com URL da fonte
- 5 artigos curtos prontos pra blog (200-300 palavras cada)
- Marcado o que é dado FACTUAL vs HIPÓTESE com `(verificar)`

---

### Etapa 2 — Aplicação na LP/proposta

**Cada dado de research vai pra UM lugar específico na LP.** Não é "incluir num blog" — é **arquitetura de informação**:

| Tipo de dado | Onde aparece na LP |
|---|---|
| **Regulação** (lei, norma) | FAQ + seção de urgência ("janela do Fio B" no caso Aura) |
| **Números mercado** (crescimento, ranking) | Stats bar abaixo do hero (ex: *"3,9 milhões de brasileiros"*) |
| **Tarifa/preço médio** | Simulador/calculadora (com fórmula real, não chute) |
| **Marcas top** | Marquee horizontal de marcas (Trina, Canadian, Jinko, Growatt) |
| **Financiamento** | Catálogo de kits (com parcela calculada) + FAQ |
| **Concorrência local** | Não direto, mas calibra copy ("outras agências cobram R$X, nós Y") |
| **Tendências** | Recursos/blog (5 artigos com fontes) |
| **Sazonalidade** | Calendário editorial pós-fechamento (não na LP em si) |

#### Implementação técnica

**Simulador/calculadora real (quando aplicável):**
- Fórmula com constantes verificáveis (ex: tarifa Energisa-TO `R$ 0,95/kWh`, HSP Palmas `5,9 kWh/m²/dia`)
- Input do cliente final calcula em tempo real
- Disclaimer ético: *"Estimativa baseada em [fonte]. Orçamento exato depende de visita técnica."*

**FAQ específico (mínimo 8-12 perguntas):**
- 1-3 perguntas regulatórias
- 2-3 perguntas técnicas
- 2-3 perguntas financeiras
- 1-2 perguntas operacionais
- Resposta com dado factual + linguagem natural

**Blog/Recursos (5 artigos, 200-300 palavras):**
- Cada um com categoria (Economia/Regulação/Equipamentos/Financiamento/Como funciona)
- Tempo de leitura estimado
- CTA final que volta pro simulador/orçamento
- Fonte explícita ou implícita

---

### Etapa 3 — Apresentação ao cliente

**O cliente NÃO precisa saber que houve research.** Ele só sente.

**Sinais que confirmam que o efeito está funcionando:**

✅ Cliente passa a usar termos técnicos do próprio nicho durante a apresentação ("Fio B", "homologação Energisa")
✅ Cliente para de fazer perguntas básicas ("vocês entendem do meu setor?")
✅ Cliente faz perguntas de **detalhe específico** ("vocês trabalham com Trina ou Canadian?") — sinal que tá no modo "valido proposta"
✅ Cliente pergunta **preço/prazo** (sinal de fechamento) em vez de **competência**
✅ Cliente fala "isso aqui é diferente" ou "nunca vi LP assim"

**Sinais de alerta (research não entrou bem):**

❌ Cliente faz perguntas básicas sobre o setor que ele opera
❌ Cliente fala que falta algo "específico do mercado dele" (research não cobriu profundidade certa)
❌ Cliente sugere informações técnicas (deveria ser o contrário)

---

## 📋 Casos de aplicação validados

| Cliente | Data | Nicho | Output research | Resultado |
|---|---|---|---|---|
| **Aura Energy / Renato Edson** | 01/05/2026 | Energia solar Palmas-TO | Lei 14.300 (Fio B 60%), tarifa Energisa-TO, Palmas HSP 5,9h, Solfácil 0,79%, equipamentos Tier 1, 5 artigos com fonte ABSOLAR/ANEEL/Canal Solar | ✅ Renato gostou na apresentação · cravou diferencial Impulso |
| (próximos clientes) | — | — | aplicar protocolo | — |

---

## ⚙️ Adaptação por tipo de cliente

### Solar / Energia (caso Aura)
**Categorias específicas:** Lei 14.300, Fio B cronograma, ANEEL REN, tarifa concessionária local, HSP da cidade, equipamentos Tier 1, financiamento Solfácil/BV/Caixa CDC.
**Fontes:** ABSOLAR, ANEEL, Canal Solar, pv magazine, Solfácil, Energisa/Equatorial/EDP local.

### Saúde / Estética / Médico
**Categorias específicas:** Conselho profissional (CRM/CRO/CRP/CRBM), regulação ANVISA, materiais/produtos top, ticket médio do procedimento, sazonalidade (verão/inverno), tendências de procedimento.
**Fontes:** Conselho regional, ANVISA, IBGE, Sociedade Brasileira de [especialidade], revistas setoriais (Veja Saúde, etc).

### E-commerce / Moda / Beleza
**Categorias específicas:** Plataforma e-commerce (Shopify/VTEX/Nuvemshop), ticket médio nicho, margem típica, frete (Melhor Envio, Yampi, JadLog), tendências B2C, sazonalidade (Black Friday, Dia das Mães, Natal).
**Fontes:** ABComm, Ebit/Nielsen, NeoTrust, plataformas próprias.

### Profissional Autônomo / Autoridade Pessoal
**Categorias específicas:** Audiência (Insta/YouTube/Podcast tamanho), monetização (cursos/consultoria/afiliação), tendências de criadores BR, ticket médio do nicho.
**Fontes:** Hotmart, Eduzz, plataformas de criadores, mídia setorial.

### Infoproduto / Curso
**Categorias específicas:** Mercado de educação online BR, ticket médio do nicho, plataformas (Hotmart, Kiwify, Eduzz), regulação MEC (se aplicável).
**Fontes:** ABED, Hotmart Insights, Sebrae.

### Restaurante / Comida fit
**Categorias específicas:** Sebrae food service, regulação ANVISA cardápio, plataformas delivery (iFood, Rappi), ticket médio refeição.
**Fontes:** Sebrae, ABRASEL, Mercado & Consumo.

### Pet / Veterinário
**Categorias específicas:** ABINPET (mercado pet), CRMV (regulação), produtos top.
**Fontes:** ABINPET, CRMV, Plataformas pet.

---

## 🎯 Argumento de venda derivado

Esse protocolo vira **arma de fechamento** quando contado pra cliente em prospect:

> *"Outras agências te entregam wireframe e pedem que você preencha tudo de técnico. A gente já preenche — pesquisa o seu mercado primeiro, depois desenha. Você lê a LP, valida o que é seu, ajusta detalhe e fecha. Em 1 reunião em vez de 5."*

Aplicação:
- Pitch CIC (Claude in Chrome) prospecção: incluir como diferencial
- LP institucional Impulso: seção "Como trabalhamos" detalhar protocolo
- Email follow-up cold outreach: anexar 1 print de LP com dado técnico real do nicho do prospect

---

## 🔁 Atualizar este playbook quando

- ✅ Aplicar em cliente novo de nicho ainda não documentado (adicionar linha em "Casos validados" + categorias específicas)
- ✅ Descobrir fonte BR de pesquisa setorial nova (adicionar em "Fontes confiáveis")
- ✅ Identificar sinal de "research não entrou bem" novo (adicionar em "Sinais de alerta")
- ✅ Cliente recusar e research não foi causa — registrar como exceção pra calibrar

---

— λ.deep-research

---

**Ver também:** [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]] · [[CHECKLIST-PESQUISA-CLIENTE-PLANO]] · [[PADRAO-PLANO-NEGOCIO-IMPULSO]] · [[MANUAL-FIT-CLIENTES-IMPULSO]]
