# Checklist — Pesquisa de Campo do Cliente (pré-PDF)

**Uso:** antes de começar a escrever o **Plano de Negócio & Marketing** de um cliente novo.
**Tempo estimado:** 1-1,5h por cliente.
**Entregável:** dossiê de 1-2 páginas que alimenta o template.

---

## Por que esta fase existe

O briefing Tally (19 perguntas) dá a **base estruturada** — o cliente te conta o que ele acha que é. A pesquisa de campo mostra o que realmente é:

- Como ele se comunica (tom, vocabulário, frequência)
- Como a audiência reage (o que engaja, o que passa)
- Onde está o gap real de mercado
- O que o cliente não percebeu mas está na cara pra quem olha de fora

**Foi essa profundidade que fez o plano do GB Nutrition ser aceito na hora.** Sem ela, o PDF vira template bonito com conteúdo raso.

---

## A. Instagram do negócio ({{HANDLE_NEGOCIO}})

_30 minutos._

- [ ] **Bio atual** (texto completo) — o que promete, o que tem de CTA, tem link?
- [ ] **Número de seguidores** + taxa de crescimento (dá pra ver no perfil público)
- [ ] **Últimos 20 posts:** tipos (reels, carrossel, foto), temas, qual teve mais engajamento
- [ ] **Stories em destaque:** o que foi escolhido pra ficar fixo? (indica o que o dono valoriza)
- [ ] **3 posts de melhor engajamento** — salva os prints, anota o que funcionou
- [ ] **3 posts de pior engajamento** — anota o padrão do que NÃO funciona
- [ ] **Frequência de postagem** — diário? 2x/semana? sumido?
- [ ] **Tom** — formal, descolado, técnico, educativo, autoridade, amigo?
- [ ] **Presença de humanização** — aparece o rosto do dono? ou só produto?

---

## B. Instagram pessoal do dono ({{HANDLE_PESSOAL}}) — [SE APLICÁVEL]

_15 minutos._

Só faz sentido se o **dono é rosto do negócio** (personal, nutri, advogado, coach, consultor, etc.).

- [ ] **Número de seguidores** (geralmente maior que o do negócio — é o ativo quente)
- [ ] **Conteúdo que ele posta no pessoal** — dá pra extrair autoridade/história
- [ ] **Ele já menciona o negócio no pessoal?** (se não, é oportunidade óbvia)
- [ ] **Tom pessoal vs tom do negócio** — tem gap? qual preserva?
- [ ] **Frase/filosofia recorrente** — algo que ele repete que pode virar slogan

---

## C. Site / checkout atual ({{URL}})

_15 minutos._

- [ ] **Site existe e está no ar?**
- [ ] **Plataforma** — Shopify, Wix, Yampi, próprio, etc.
- [ ] **Checkout funciona?** Testa colocando item no carrinho
- [ ] **Quantos produtos** tem cadastrados (se for e-commerce)
- [ ] **Preços estão atualizados?** (compara com Instagram/stories)
- [ ] **Tem SEO básico?** (title, meta description na home)
- [ ] **Velocidade de carregamento** — testa no PageSpeed Insights (gratuito)
- [ ] **Mobile friendly** — abre no celular, o layout quebra?
- [ ] **Pixel Meta / Google Analytics instalado?** — F12 → Network → filtra por "facebook" ou "google-analytics"

---

## D. Concorrência local (3-5 players)

_20 minutos._

Google Maps + Instagram. Procura quem atua no mesmo nicho na mesma cidade.

Por concorrente, anota:

- [ ] **Nome** + Instagram + site (se tiver)
- [ ] **Faturamento estimado** — quantos posts de venda, quanto engajamento, quantos followers
- [ ] **Ponto forte principal** — por que cliente escolheria eles
- [ ] **Ponto fraco principal** — o gap que a Impulso pode explorar
- [ ] **Preço médio / ticket** (se der pra estimar)
- [ ] **Diferencial do cliente em relação a eles**

---

## E. Cidade / mercado local

_10 minutos._

- [ ] **População da cidade** (IBGE rápido — Google "população [cidade] IBGE")
- [ ] **Classe social dominante** — A/B/C? (procura no IBGE ou SEBRAE)
- [ ] **Índice de renda média** — ajuda a calibrar ticket
- [ ] **Nicho tem demanda local?** — procurar grupos de Facebook, subreddits, academias/clínicas/escolas locais que consomem
- [ ] **Existe alguma particularidade cultural/sazonal?** (ex: cidade praiana = verão, cidade universitária = ciclo semestral)

---

## F. Conversa com o cliente (opcional mas ótimo)

_30 minutos — call de alinhamento._

Se o cliente topar a call:

- [ ] **Como ele descreve o negócio em 1 frase?** (anota a frase EXATA — vira slogan)
- [ ] **Qual foi a última venda dele?** (história real = case)
- [ ] **Qual cliente dele ele mais gosta?** (define persona real, não teórica)
- [ ] **Qual é o medo dele sobre o lançamento?** (objeção que vira seção "Diagnóstico")
- [ ] **O que ele queria fazer mas não sabe como?** (abre pra upsell futuro)

---

## G. Dossiê — resumo pra alimentar o template

Depois de coletar A-F, sintetiza em 1-2 páginas:

1. **Pontos fortes** (3 ativos reais que o cliente tem)
2. **Pontos fracos** (3 lacunas operacionais)
3. **Oportunidade única** (a combinação que NINGUÉM mais oferece)
4. **Público quente** (quem começar atacar primeiro + por quê)
5. **Tom de voz** (baseado no Instagram — curto, direto, autoridade, divertido, etc.)
6. **Slogan embrião** (uma frase que captura a essência)
7. **3 concorrentes principais** + ponto fraco de cada

Este dossiê é o que você cola junto com as 19 respostas do briefing quando pedir pra Claude gerar o rascunho do PDF.

---

## Ferramenta futura

**Quando chegar em 6+ clientes/mês:** automatizar parte dessa pesquisa com o RadarPRO (ele já faz scraping de Instagram e Google Maps). Criar action nova `analisarNegocioPreFormalização(leadId)` que retorna A-E estruturado. Salvar como referência.

Por enquanto é tudo manual — mas **é a fase mais valiosa do processo inteiro.** Não terceiriza.

---

## Changelog

- **v1.0 (24/04/2026):** Checklist inicial baseado na pesquisa que Eduardo fez pra GB Nutrition.
