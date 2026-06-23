# 🧠 MEGA-CLAUDE-CORE — boot enxuto

> **Este é o arquivo de boot.** Carrega o essencial sobre Eduardo em ~2K tokens em vez dos ~26K do MEGA-CLAUDE.md completo.
> Detalhe profundo (8 padrões validados, prioridades, stack, playbooks, links) está em `MEGA-CLAUDE.md` — ler **só a seção que a tarefa exigir**, via Grep/Read por número de linha. Mapa no fim deste arquivo.

---

## 🎯 IDENTIDADE & MISSÃO

**Eduardo Barros Chaves** · 📍 Palmas, Tocantins · 📱 (99) 99206-5961 · @edubarrosch · WhatsApp suporte 63 99292-0080.

- **Identidade:** Estrategista Digital — Criador de Negócios Online (**NÃO** guru).
- **Fundador:** Impulso Digital — ecossistema de produtos digitais (cria sites, sistemas, lojas e tráfego pra pequenos negócios).
- **Como pensa:** velocidade de ação (ideia hoje, protótipo amanhã, deploy depois) · aprende fazendo, não estudando · autêntico, sem frescura · fé como fundamento · constrói em público e vira o primeiro case.
- **Meta 2026:** **R$ 1.000.000 em faturamento até o fim de 2026** — diversificando risco entre AgendaPRO (SaaS recorrente), MPN-On (curso/plataforma), Impulso (agência), RadarPRO e ImpulsoDesign.

**Estilo de trabalho:** decisão rápida (crava escopo e vai) · mão na massa (quer ver funcionando, não slide) · aprende fazendo (vendas, inglês, gestão — reconhecer avanço sem inflar) · brutalmente honesto (prefere "não vai funcionar" a elogio vazio) · foca em caixa ("isso me dá dinheiro?").

---

## 💼 OS 3 NEGÓCIOS

**Marca-mãe: IMPULSO DIGITAL** (agência de criação digital). Tudo orbita ela. Sub-produtos ativos: **AgendaPRO** (SaaS agendamento universal), **SystemPalace** (fork dedicado premium — 1º produto próprio), **RadarPRO** (prospecção, interno), **ImpulsoDesign**/Verbo Design (conteúdo, interno), **MPN-On** (curso→plataforma).
*(UrbanFeet = passado operacional. Não é frente ativa — serve só como case/prova de conceito pro MPN-On.)*

**Evolução 2026:** subiu de agência low-ticket pra **3 frentes premium** — SaaS fork ~R$3k · LP/site ~R$2k · **plataforma própria APPDELYVERY** (entregas B2B Palmas · em construção · maior build atual · de prestador a fundador).

**Modelo cravado (23/06):** **núcleo-fork** (`medellin-bar` = template → cada cliente clona pra github/vercel/supabase próprios · R$2.997/50% · caixa agora) **financia** o **ComandaPRO** (`acai-system` = SaaS food-service multi-tenant · recorrência). **Medellín FECHADO** (case-zero) · **Vidal = 1º ComandaPRO**. Detalhe: `2-PROCESSAMENTO/impulso-digital/MODELO-NUCLEO-FORK-COMANDAPRO.md`.

**Ofertas oficiais (política "a partir de" — NUNCA cravar valor fixo em msg de venda):**
- **Entrada:** LP a partir de **R$499** + R$99/mês · Shopify a partir de **R$599** + R$99/mês · Combo **R$1.099** · Site Next.js a partir de **R$799**
- **Premium (real hoje):** LP/site premium **~R$2k** · SaaS fork dedicado **~R$3k** (entrada + saldo; ver λ.fork-dedicado)
- **Recorrente:** AgendaPRO **Solo R$67/mês** (1+1) · **Equipe R$97/mês** (até 5) · Setup **R$197** (isento pros 10 primeiros — Clube Fundador)
- Ancoragem: "LP no Brasil custa R$2k-15k; cobro a partir de R$499 porque sou local de Palmas, sem overhead de SP."

**Cases reais (usar SÓ estes):** 🏆 **Palace Nail Spa R$2.997** (1º SaaS premium fork) · **Vida em Equilíbrio R$1.900** (LP+site, pago 30/05) · **Aura Energy R$1.497** (1ª venda contratual) · **AgendaPRO** (2 pagantes reais: Olímpio Barbearia R$67 + Studio MOOD/Izanara R$97 · ciclo de cobrança Asaas validado na prática) · EV Suplementos (Erlane). UrbanFeet (R$37.705 em 90d · +1.600 pares — prova pro **MPN-On**, não negócio ativo). Pausado: Criativos do Céu (permuta encerrada). GB Nutrition = trabalho de graça pra aprender (o R$1.000 era âncora, NÃO venda — não usar como case de R$1k). NÃO usar: Janaína, Irsnayra, LocaJV.

**Meta 2026:** R$1M em faturamento — não precisa tudo dar certo, precisa 2-3 acertarem.

---

## 🎙️ TOM DE VOZ

**Como Eduardo fala:** direto, frase curta · "fechou", "sacado", "boa", "cravado", "no fio do bigode" · fala com o dono como amigo que entende, não como consultor · número real + exemplo concreto + caso de cliente.

**NUNCA usar:** "democratizar", "exatamente", "potencializar", "solução robusta", "ecossistema" · frases paralelas ("Primeira... Segunda...") · emoji em LP/site (SVG sempre) · promessa numérica inventada · palavrão como ênfase.

**Regra de copy:** toda copy de Meta Ads classifica risco antes de apresentar · LP fala da dor/solução do cliente, não da ambição da empresa · foto de pessoa = real (Unsplash/Pexels), nunca IA.

---

## 🔒 REGRAS DURAS (λ)

- **λ.prova-na-fonte** — read-after-write obrigatório em write crítico. UI verde / `res.ok` / "salvo!" NÃO são prova. → `feedback_prova_na_fonte_persistencia.md`
- **λ.diagnostico-no-nivel-certo** — bug recorrente: localizar a camada da falha real (UI / payload client / rota server / banco) antes de codar o 2º fix. → `feedback_diagnostico_nivel_certo.md`
- **λ.token-economia** — contexto é caro (plano MAX, sem subir pra MAX 20). Não re-disparar tool por resultado vazio/atrasado · Glob/Grep escopado · ler com limit/offset · não re-ler o que já está no contexto. → skill `/token-economia`
- Mais regras finas (mobile vs desktop, segundo-cérebro antes de inventar, etc.) vivem nas memórias — ver `MEMORY.md`.

---

## 🗺️ ONDE ACHAR O RESTO (no MEGA-CLAUDE.md, por linha)

Ler **só** a seção que a tarefa pedir — não o arquivo inteiro:

| Seção | Linha no MEGA-CLAUDE.md |
|---|---|
| Padrões validados (8 casos reais) | ~236 |
| Prioridades próximos 30 dias | ~447 |
| Stack técnica padrão | ~516 |
| Playbooks & roteiros (índice) | ~585 |
| Links rápidos | ~642 |

**Arquivos críticos de consulta** (caminhos completos no `CLAUDE.md`): META ADS - PLAYBOOK, meta-ads-copy-topo, meta-ads-risco, STATUS-MPN, STATUS-IMPULSO, APOSTILA-V2-OPERACAO.

**Perfil & operação** (em `3-RETENCAO/perfil/` — ler só quando a tarefa pedir): `VERBO.md` (quem eu sou + capacidades) · `FERRAMENTAS-DA-OPERACAO.md` (mapa de toda a stack + gotchas) · `EDUARDO-BARROS.md` · `COMO-MINHA-MENTE-FUNCIONA.md` · `A-TRILHA.md`.
