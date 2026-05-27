# Pesquisa de mercado · Viva Cacheada (14/05/2026)

Dossier técnico pra fundamentar a Fase 1 do sistema da Leticia.

> **Eixo cravado:** o pedido literal dela nos áudios é cronograma capilar + venda de produtos (site dela) com desconto pra cliente + comunidade. Esta pesquisa enriquece esse eixo, não substitui (ver `feedback_nao_fugir_ideia_original_cliente`).

---

## 1. Cronograma capilar — base técnica

**3 etapas (consenso de mercado):**

| Etapa | O que repõe | Quando indicar |
|---|---|---|
| **Hidratação** | Água nos fios | Ressecamento, fios duros, sem elasticidade |
| **Nutrição** | Lipídios/óleos | Frizz, falta de brilho, fios opacos |
| **Reconstrução** | Proteína/queratina/aminoácidos | Quebra, fios elásticos, danos químicos |

**Especificidade pra cacheadas/crespas:**
- Curva em espiral → óleo do couro não desce → cacheada precisa de **mais nutrição** que liso
- Cronograma típico de 30 dias para cacheada: 6 hidratações + 3 nutrições + 2 umectações + 1 reconstrução
- Frequência: 3x semana, mínimo 48h entre etapas

**Variação por sintoma (input do diagnóstico):**
- Cabelo ressecado → 2 hidratação + 1 nutrição por semana
- Frizz e sem brilho → 1 hidratação + 2 nutrições por semana
- Quebrando → adicionar reconstrução

**Implicação pro modelo de dados do app:**
- `TipoCabelo` (cacheado 2A-3C, crespo 4A-4C) + `Sintomas[]` (ressecado, frizz, quebra, sem brilho, oleoso) → gera `PlanoSemanal` com `Etapas[]`
- Cada `Etapa` tem: tipo (H/N/R/Umect) + dia + produto sugerido + tutorial curto (vídeo ou texto)

Fontes: [Eudora](https://www.eudora.com.br/guia-da-beleza/cronograma-capilar-o-que-e-ordem-como-fazer/), [Boticário](https://www.boticario.com.br/dicas-de-beleza/guia-completo-sobre-cronograma-capilar/), [L'Oréal](https://www.loreal-paris.com.br/cronograma-capilar-para-cabelo-cacheado), [Salon Line](https://www.salonline.com.br/cronograma-capilar-para-cabelo-cacheado-sos-hidratacao-salon-line).

---

## 2. Apps concorrentes no Brasil

Mapeamento dos 6 apps mais citados ([TechTudo, jan/2024](https://www.techtudo.com.br/listas/2024/01/como-fazer-cronograma-capilar-confira-6-aplicativos-que-podem-ajudar-edapps.ghtml)):

| App | Plataforma | Diagnóstico | Sugere produto | **Vende produto** | **Comunidade** | Lembretes |
|---|---|---|---|---|---|---|
| Hair Routine | Android | Sim (quiz) | Sim | Não | Não | — |
| Minha Transição Capilar | iOS+Android | Sim | — | Não | Aberta (Big Chop) | — |
| Save My Hair | iOS | Sim | — | Não | Não | — |
| Empoderamento Capilar | iOS+Android | Sim (elast/poro/oleo) | — | Não | Não | Sim |
| Meu Diário Capilar | iOS+Android | Sim | — | Não | Não | Sim |
| Meu Cronograma Capilar | iOS+Android | Sim (elast/poro) | — | Não | Aberta (receitas) | Sim (assist. virtual) |

**Insight central:**

- **Diagnóstico via quiz é commodity.** Todos os 6 fazem.
- **Sugerir produto** = só 1 (Hair Routine) — e mesmo assim sem checkout.
- **Vender produto integrado ao cronograma** = **zero apps**.
- **Comunidade fechada de cliente de salão específico** = **zero apps**.

O que a Leticia quer não existe no mercado brasileiro de apps de cronograma. Os concorrentes são apps **horizontais e grátis** (cronograma puro, qualquer cabelo, qualquer produto). O pedido dela é **vertical e monetizado** (cronograma + produtos AC Professional + clientes Viva Cacheada com desconto + comunidade fechada).

---

## 3. Como isso muda o pitch da Fase 1

| Concorrente faz | O que a Leticia faz diferente |
|---|---|
| Cronograma genérico via quiz | **Cronograma personalizado pela Leticia** (especialista cacheadas, cursa Psicologia) — pode usar quiz como primeira camada e refinar manualmente na consulta presencial em Palmas |
| Sugere produto sem checkout | **Catálogo curado AC Professional → checkout integrado** (WhatsApp/site) com **desconto exclusivo cliente Viva Cacheada** |
| Sem comunidade ou comunidade aberta | **Comunidade fechada** Viva Cacheada (clientes do salão + alunas) — terreno limpo (hoje ela só usa WhatsApp 1:1) |
| Lembretes automáticos | **Pós-atendimento de qualidade** (palavras dela) — lembrete vinculado ao serviço presencial e ao produto comprado |

---

## 4. Posicionamento (cruzando com análise IG do CIC)

Tom dela: identidade > moda · "Não é moda, é identidade" · vocabulário "cacheadas/transição/processo/poderosa".

**Pro app/comunidade significa:**
- Não chamar "tribo das cacheadas" ou "amiga" — não é o tom dela
- Eixo: **identidade, transformação, processo** (consultivo)
- Conteúdo da comunidade: educacional técnico + autoestima (top engajamento do IG dela vem disso, não de antes/depois)

---

## 5. Audiência × tipo de app

| Indicador | Número |
|---|---|
| @vivacacheadaa | 3.819 seguidores |
| @letticiahellen3 | 4.423 seguidores |
| Total c/ overlap | ~6.000 |

**Decisão tecnológica cravada:** PWA, não app nativo.
- App nativo iOS+Android pra Brasil: R$15-30k inicial + R$2-5k/mês de manutenção + 30% Apple/15% Google em compras in-app
- PWA: instala como ícone na home, push notification (Android nativo, iOS 16.4+), funciona offline, custa fração
- Releitura em 12 meses se ela passar de 10-15k seguidores

---

## 6. Mapeamento Linktree (CIC · 14/05/2026)

**Resultado: minimalista.** linktr.ee/vivacacheada tem só 2 destinos finais (mapeados em 4 elementos clicáveis):

| Destino | URL | O que é |
|---|---|---|
| Instagram | https://www.instagram.com/vivacacheadaa | Perfil da marca |
| WhatsApp | https://wa.me/5563992962112 | Atendimento direto |

**Não tem:**
- Loja online (Hotmart/Shopify/Yampi/Loja Integrada — nada)
- Checkout dos ebooks Manifeste/Reprograme/Dominando os Cachos → **estão dormentes de verdade**
- Link de comunidade fechada (grupo Telegram/WhatsApp/Close Friends) → **não existe ainda**
- Captura de lead, lead magnet, página de produto

**Implicação:**
- Funil digital de venda da Viva Cacheada **hoje = zero**
- Tudo passa por IG → DM/WhatsApp → atendimento presencial Palmas-TO
- O sistema que ela pediu é o **primeiro investimento de venda digital** — terreno totalmente limpo, sem migração de plataforma anterior

## 7. Pendências antes de cravar escopo final

1. **AC Professional · política de embaixador** — pesquisa web não retornou info pública. **Caminho mais rápido: Eduardo pergunta direto pra Leticia** — "o contrato com AC Professional permite revenda direta no seu site/app ou é só indicação com cupom?"
2. **Comunidade** — onde ela tá "criando" (palavra dela no áudio 2)? Já tem grupo embrionário ou só intenção? Perguntar
3. **Logística produto físico** — se ela puder revender, vai ter estoque próprio em Palmas ou compra na AC sob demanda? Frete sai de Palmas-TO ou direto da AC?
4. **Cliente do salão vs cliente nacional** — desconto exclusivo cliente do salão (palavras dela no áudio 1) precisa de regra: como o app sabe quem é cliente do salão? CPF? Telefone que tá no Salão 365/AgendaPRO? Só Palmas-TO?

---

## 7. Próximos passos sequenciais

1. CIC volta com mapeamento Linktree → atualiza pendência 1, 3
2. Eduardo conversa com Leticia → atualiza pendências 2, 4, 5
3. Fecho `BRIEFING-V1.md` consolidando áudios + IG + Linktree + respostas dela
4. Cravo `FASE-1-PWA.md` com escopo, prazo, custo, dependências externas
