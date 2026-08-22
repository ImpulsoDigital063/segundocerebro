# Estrutura da campanha — LocaJV
**Montada:** 31/07/2026 · pronta pra configurar assim que o Meta liberar a conta
**Verba:** R$50/dia · **Destino:** WhatsApp · **Objetivo comercial:** lead qualificado, não volume (só 15 motos)

---

## Nomenclatura (usar sempre, em todo cliente)

```
Campanha:  LOCAJV | LEADS-WPP | AGO26
Conjunto:  Goiania-10km | Amplo 18-45
Anúncio:   V1-Caixinha-Quebrar | Video
           V2-KmLivre | Video
           V3-Beneficios | Video
           V4-Frota | Imagem
```

Sem padrão de nome, o relatório do fim do mês vira adivinhação. Com padrão, você bate o olho e sabe o que é.

---

## NÍVEL CAMPANHA

| Campo | Valor | Por quê |
|---|---|---|
| Nome | `LOCAJV \| LEADS-WPP \| AGO26` | |
| Objetivo | **Cadastros (Leads)** | otimiza por quem responde, não por quem só abre o chat |
| Destino da conversão | **WhatsApp** | |
| Orçamento | **CBO — R$50/dia** | (aparece como "Orçamento da campanha Advantage+") |
| Categoria especial | **Nenhuma** | locação de veículo não é crédito, emprego nem moradia |
| Teste A/B | desligado | verba não comporta |

⚠️ **Plano B:** se em 48h não gerar nenhuma conversa, trocar o objetivo pra **Engajamento → mensagens no WhatsApp**. É mais fácil gerar sinal com verba baixa. Perde qualidade, ganha volume — e volume é o que tira do aprendizado.

---

## NÍVEL CONJUNTO — um só

| Campo | Valor |
|---|---|
| Nome | `Goiania-10km \| Amplo 18-45` |
| Otimização | **Conversas iniciadas** |
| Local | **Goiânia-GO — raio de 10km a partir do Jardim Ipanema** |
| Tipo de local | **Pessoas que moram neste lugar** (não "visitando") |
| Idade | **18 a 35** |
| Gênero | **Homens** |
| Idioma | em branco |
| Público detalhado | deixar **Advantage+** decidir |
| Posicionamentos | **Advantage+ (automáticos)** |
| Programação | 24h por dia |

**Idade e gênero vêm do CLIENTE (31/07):** a base real de quem aluga na LocaJV é **homem, de 18 a 35 anos**. Isso substitui o palpite anterior (18-45, todos os gêneros) — dado de quem tem a base vale mais que inferência de mercado.

**Efeito prático:** público mais estreito concentra os R$50/dia em menos gente, o que **ajuda** com verba baixa — menos dispersão, mais frequência sobre quem interessa.

⚠️ **Conferir o tamanho estimado na tela ao montar.** Goiânia + 10km + homens 18-35 deve dar público suficiente, mas se o Meta indicar público muito restrito, a saída é **abrir o raio** (15km), nunca alargar idade ou gênero — o dado do cliente é o que menos deve ceder.

⚠️ Lembrar que em 2026 a segmentação detalhada virou **sugestão**: o Advantage+ pode entregar fora da faixa se achar performance. Idade e gênero continuam sendo respeitados como limite rígido, mas interesses não.

**Sobre interesses:** ⚠️ não foi confirmado que existem interesses tipo "iFood", "motoboy" ou "entregador" no Meta. **Conferir na tela** na hora de montar. Se existirem, testar — mas lembrar que em 2026 interesse virou sugestão, não filtro: o Advantage+ expande além mesmo assim.

**Sobre o raio:** 10km é ponto de partida (prática de mercado, não regra oficial do Meta). Se o volume vier baixo demais, abre pra 15km. Se vier lead de longe demais pra retirar a moto, fecha pra 7km.

---

## NÍVEL ANÚNCIO — 3 a 4 no mesmo conjunto

**Nunca criar um conjunto por criativo.** Todos juntos, o Meta distribui entre eles.

| # | Criativo | Formato | Status |
|---|---|---|---|
| V1 | Caixinha — "e se a moto quebrar no meio do corre?" | vídeo vertical | roteiro pronto |
| V2 | Caixinha — km livre | vídeo vertical | roteiro pronto |
| V3 | Caixinha — o que está incluso | vídeo vertical | roteiro pronto |
| V4 | Frota / oferta com preço | imagem (arte existente) | 🔴 falta valor do caução |

**Configuração de cada anúncio:**
- Identidade: **Página LocaJV** + **Instagram @locajv_**
- Formato: vídeo único, vertical 9:16
- **CTA: Enviar mensagem**
- Destino: **WhatsApp** — número oficial
- 🔴 **Advantage+ Creative: DESLIGAR os toggles.** Vem tudo ligado por padrão desde fev/2026 e reativa sozinho ao duplicar. Ele recorta vídeo, muda cor e reescreve texto — e a gente tem cerca de política a respeitar

---

## WhatsApp — antes de ligar a campanha

**Saudação automática:**
```
Fala! Aqui é a LocaJV, locação de motos em Goiânia.

Pra te responder rápido, me diz:
1) Você já tem CNH categoria A?
2) Qual modelo te interessa — Start, Fan ou Titan?
3) Pretende pegar por quanto tempo?

Nosso pátio fica no Jardim Ipanema.
Atendo de [HORÁRIO].
```

**Respostas rápidas cadastradas:** preço · caução · documentos exigidos · disponibilidade · contrato.

---

## Proteções antes de subir

- [ ] **Limite de gasto da conta** configurado (sugestão: R$400)
- [ ] Cartão do cliente cadastrado (não o da Impulso)
- [ ] Fuso **Brasília** e moeda **BRL** conferidos
- [ ] Planilha de lead criada
- [ ] Um único telefone definido e conectado

---

## Os 7 primeiros dias

| Dia | O que fazer |
|---|---|
| 0 | Subir. Conferir se todos os anúncios foram aprovados |
| 1-3 | **Não tocar em nada.** Só observar custo por conversa e qualidade das conversas |
| 4 | Primeira leitura: qual criativo puxa conversa melhor |
| 5-6 | Pausar o pior criativo, se houver diferença clara. Não mexer em público nem orçamento |
| 7 | Fechar a semana. CPL real pela planilha, não pelo número do Gerenciador |

**"Learning limited" vai aparecer.** Com R$50/dia é esperado — não é erro, e não é motivo pra mexer em nada.

**Nunca subir orçamento mais de 20% de uma vez.** Acima disso reseta o aprendizado.

---

## Semana 2 ou 3 — remarketing

Campanha **separada**, não conjunto novo dentro dessa (adicionar conjunto em CBO redistribui verba e reseta o aprendizado de todos).

```
Campanha:  LOCAJV | REMARKETING | AGO26  — CBO R$15/dia
Conjunto:  Engajamento IG 365d | Goiania
Público:   Personalizado → Conta do Instagram → seguidores +
           quem interagiu + quem mandou mensagem, janela 365 dias
```

E reduzir a campanha 1 pra R$35/dia — mantendo os R$50 totais.

⚠️ Conferir o tamanho do público antes: 10,8 mil seguidores cruzados com Goiânia + 10km pode sobrar pouca gente. Se ficar pequeno demais, não vale abrir.
