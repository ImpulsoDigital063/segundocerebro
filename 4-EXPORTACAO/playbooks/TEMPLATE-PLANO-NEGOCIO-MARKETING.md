# Template — Plano de Negócio & Marketing

**Uso:** Base estrutural pra gerar PDF de plano personalizado por cliente Impulso Digital.
**Baseado em:** GB Nutrition (Gabriel Barros — validado 15/04/2026).
**Tempo estimado de preenchimento:** 3-4h por cliente (briefing + pesquisa + escrita + revisão).

---

## Como usar este template

1. **Duplica** este arquivo com o nome do cliente: `PLANO-{{CLIENTE}}-{{DATA}}.md`
2. **Preenche** os blocos `{{placeholder}}` com base em:
   - **Briefing Tally** (19 perguntas que o cliente respondeu)
   - **Pesquisa de campo** (ver `CHECKLIST-PESQUISA-CLIENTE-PLANO.md`)
   - **Análise estratégica** (seu ponto de vista sobre o posicionamento único)
3. **Remove** blocos condicionais que não se aplicam (ex: catálogo de produtos pra cliente de serviço)
4. **Exporta** pra PDF usando Pandoc, Google Docs, ou HTML renderizado
5. **Entrega** em até 24-48h após o briefing

---

## Princípios de escrita

Observações do que fez o GB Nutrition funcionar (e o que o template herda):

- **Box destaque** (azul escuro com texto branco) pra decisões-chave — usar `> **TÍTULO:**` em blockquote
- **Tabelas** em vez de prosa — rápido de ler, fácil de escanear
- **Números específicos** sempre (ticket R$ 150-180, habitantes 310k, custo US$1/3 meses)
- **Ação enumerada** no checklist — executável, não teoria
- **Slogan recomendado** em bloco isolado (box destaque grande)
- **Tom direto, sem frescura** — sem "democratizar", "exatamente", frases paralelas

---

## Cabeçalho padrão (todas as páginas)

```
{{NOME_NEGOCIO}}
Plano de Negócio & Marketing — Fase {{FASE}}: {{LOCAL}}
{{NOME_NEGOCIO}} — CNPJ: {{CNPJ}} | {{SITE}} | {{WHATSAPP}}
Versão 1.0 — {{ANO}} | Documento Confidencial
```

---

## Capa

```
{{LOGO}}

{{NOME_NEGOCIO}}
Plano de Negócio & Marketing

FASE {{FASE}} — {{LOCAL}}

{{SUBTITULO_FASE}}
(ex: "Lançamento Local com Entrega Expressa no Mesmo Dia")

Produto: {{PRODUTO_OU_SERVICO}}
Fundador: {{FUNDADOR}} — {{PROFISSAO_OU_PAPEL}}
Plataforma: {{STACK_TECNICO}}
Fase atual: Fase {{FASE}} — {{MERCADO_ALVO}}
Entrega: {{MODELO_DE_ENTREGA}}
Versão: 1.0 — {{ANO}}
```

---

## Sumário

```
1. Visão Geral do Negócio
2. Diagnóstico — Situação Atual
3. O Problema que Estamos Resolvendo
4. Proposta de Valor e Diferenciais
5. Público-Alvo em {{LOCAL}}
6. Análise de Mercado Local
7. Estrutura Operacional [SE APLICÁVEL — remover se for digital puro]
8. Plano de Marketing — Estratégia Completa
9. Cronograma de Lançamento
10. Catálogo de Produtos e Projeções de Receita [SE APLICÁVEL]
11. Sugestões de Promoções
12. Ferramentas e Custos
13. Metas e Indicadores de Sucesso
14. Checklist de Ação
```

---

## 1. Visão Geral do Negócio

**Fonte:** Briefing perguntas 1-6, 13, 15-17 + pesquisa do Instagram do negócio.

**Parágrafo de abertura** (1 parágrafo, ~4-6 linhas):
Contexto do negócio hoje — o que existe, o que já funciona, o que falta. Abre com o "porquê" da existência do negócio (ativo único do dono + oportunidade de mercado).

Exemplo GB Nutrition (pra guiar):
> A GB Nutrition nasceu da união de dois ativos poderosos: a autoridade do Gabriel Barros como personal trainer em Palmas-TO e a conveniência de uma loja online com entrega expressa no mesmo dia. O negócio já existe na prática...

**Tabela de dados operacionais:**

| ITEM | DETALHE |
|---|---|
| **Produto** | {{DESCRICAO_DO_PRODUTO_OU_SERVICO}} |
| **Fundador** | {{NOME_FUNDADOR}} — {{PAPEL}} |
| **Site** | {{URL_DO_SITE}} (estado: no ar / em construção / não existe) |
| **Checkout / Pagamento** | {{PLATAFORMA_CHECKOUT}} + {{GATEWAY_PAGAMENTO}} |
| **Frete nacional** | {{SOLUCAO_FRETE}} (se aplicável) |
| **Entrega local** | {{MODELO_ENTREGA_LOCAL}} (se aplicável) |
| **Canais de venda** | {{CANAIS_ATIVOS}} |
| **CNPJ** | {{CNPJ_OU_CPF}} |

---

## 2. Diagnóstico — Situação Atual

**Fonte:** Briefing + pesquisa do Instagram/site + análise da operação atual.

### O que já existe e funciona
_Bullets — cada um um ativo real que o cliente já tem._

- {{ATIVO_1}} (ex: Site X no ar, categorias prontas)
- {{ATIVO_2}} (ex: Instagram com X seguidores ativos)
- {{ATIVO_3}} (ex: Estoque próprio ou fornecedor alinhado)
- {{ATIVO_4}}

### O que precisa ser ativado
_Bullets — cada um uma lacuna operacional que trava a escala._

- {{LACUNA_1}} (ex: Site nunca foi lançado oficialmente)
- {{LACUNA_2}} (ex: WhatsApp Business sem configuração estratégica)
- {{LACUNA_3}}
- {{LACUNA_4}}

### Custos e Plataformas

| PLATAFORMA | CUSTO |
|---|---|
| {{PLATAFORMA_1}} | {{CUSTO_1}} |
| {{PLATAFORMA_2}} | {{CUSTO_2}} |
| {{PLATAFORMA_3}} | {{CUSTO_3}} |
| **Total custo fixo inicial** | {{CUSTO_TOTAL_MES}} |

> **Oportunidade única:**
> {{FRASE_URGENCIA_LANÇAMENTO}} — ex: "O custo fixo nos primeiros 3 meses é de apenas US$1 no Yampi. Nunca houve momento melhor para lançar."

---

## 3. O Problema que Estamos Resolvendo

**Fonte:** Briefing 7, 8, 9 + análise do ponto de vista do cliente final.

### O problema do cliente {{PERFIL_DO_CLIENTE_FINAL}}

- {{DOR_1}}
- {{DOR_2}}
- {{DOR_3}}
- {{DOR_4}}

### O problema do {{NOME_FUNDADOR}}

- {{PROBLEMA_OPERACIONAL_1}} (ex: já vende mas informalmente — cada venda depende 100% dele)
- {{PROBLEMA_OPERACIONAL_2}}
- {{PROBLEMA_OPERACIONAL_3}}
- {{PROBLEMA_OPERACIONAL_4}}

> **A solução do {{NOME_NEGOCIO}}:**
> {{SINTESE_DA_SOLUCAO}} — 2-3 frases explicando COMO os ativos do dono + estratégia proposta resolvem os 2 problemas acima. Termina com o **diferencial real** que amarra tudo.

---

## 4. Proposta de Valor e Diferenciais

**Fonte:** Briefing 10 + análise estratégica (seu ponto de vista).

### Slogan recomendado

> **"{{SLOGAN}}"**
> {{SUBTEXTO_DO_SLOGAN}} — uma frase curta que explica ou reforça o slogan.

### Diferenciais

| DIFERENCIAL | POR QUE IMPORTA |
|---|---|
| {{DIFERENCIAL_1}} | {{EXPLICACAO_1}} |
| {{DIFERENCIAL_2}} | {{EXPLICACAO_2}} |
| {{DIFERENCIAL_3}} | {{EXPLICACAO_3}} |
| {{DIFERENCIAL_4}} | {{EXPLICACAO_4}} |
| {{DIFERENCIAL_5}} | {{EXPLICACAO_5}} |
| {{DIFERENCIAL_6}} | {{EXPLICACAO_6}} |

---

## 5. Público-Alvo em {{LOCAL}} — Fase {{FASE}}

**Fonte:** Briefing 7 + pesquisa de audiência no Instagram.

| PERFIL | QUEM É | COMO CHEGAR |
|---|---|---|
| {{PERFIL_1}} | {{DESCRICAO_1}} | {{CANAL_DE_CAPTACAO_1}} |
| {{PERFIL_2}} | {{DESCRICAO_2}} | {{CANAL_DE_CAPTACAO_2}} |
| {{PERFIL_3}} | {{DESCRICAO_3}} | {{CANAL_DE_CAPTACAO_3}} |
| {{PERFIL_4}} | {{DESCRICAO_4}} | {{CANAL_DE_CAPTACAO_4}} |
| {{PERFIL_5}} | {{DESCRICAO_5}} | {{CANAL_DE_CAPTACAO_5}} |

> **Prioridade absoluta:**
> {{PUBLICO_QUENTE_JUSTIFICATIVA}} — qual perfil começar a atacar primeiro e por quê. Geralmente é o público que já conhece o dono (alunos, seguidores, indicação).

---

## 6. Análise de Mercado Local — {{LOCAL}}

**Fonte:** Pesquisa IBGE + análise de concorrentes.

### A Oportunidade

- {{DADO_DEMOGRAFICO}} (ex: Palmas tem mais de 310 mil habitantes, cidade jovem em crescimento)
- {{TENDENCIA_DO_NICHO}} (ex: Cultura fitness crescente no Tocantins)
- {{GAP_DO_MERCADO}} (ex: Grandes e-commerces entregam em 5-10 dias — gap de conveniência)
- {{LIMITACAO_DOS_CONCORRENTES}} (ex: Lojas físicas têm variedade limitada e preço alto)

### Análise da Concorrência Local

| CONCORRENTE | PONTO FRACO QUE {{NOME_NEGOCIO}} EXPLORA |
|---|---|
| {{CONCORRENTE_1}} | {{PONTO_FRACO_1}} |
| {{CONCORRENTE_2}} | {{PONTO_FRACO_2}} |
| {{CONCORRENTE_3}} | {{PONTO_FRACO_3}} |
| {{CONCORRENTE_4}} | {{PONTO_FRACO_4}} |

> **Posicionamento estratégico:**
> {{POSICIONAMENTO}} — 2-3 frases. NÃO precisa ser o mais barato nem o mais conhecido. Precisa ser o mais {{ADJETIVO_UNICO}}. Não é necessário afirmar ser o único — basta ser o mais {{ATRIBUTO_CHAVE}}.

---

## 7. Estrutura Operacional — {{TITULO_OPERACIONAL}}

**[SE APLICÁVEL — remover se for produto digital puro]**

**Fonte:** Briefing + análise da operação atual.

### Como Funciona o Processo de Pedido e Entrega

| ETAPA | COMO FUNCIONA |
|---|---|
| **1. {{ETAPA_1}}** | {{DESCRICAO_1}} |
| **2. {{ETAPA_2}}** | {{DESCRICAO_2}} |
| **3. {{ETAPA_3}}** | {{DESCRICAO_3}} |
| **4. {{ETAPA_4}}** | {{DESCRICAO_4}} |
| **5. {{ETAPA_5}}** | {{DESCRICAO_5}} |

{{PARAGRAFO_OBSERVACAO_OPERACIONAL}}

### Estratégia de {{OPERACAO_NOME}} (ex: Rotas do Motoboy)

> **Proposta:**
> {{PROPOSTA_OPERACIONAL}} — explicar o modelo em 2-3 frases.

### Tabela de {{FRETE_OU_CUSTO_LOGISTICO}}

| REGIÃO / MODALIDADE | VALOR |
|---|---|
| {{REGIAO_1}} | {{VALOR_1}} |
| {{REGIAO_2}} | {{VALOR_2}} |
| {{REGIAO_3}} | {{VALOR_3}} |
| {{OUTRA_MODALIDADE}} | {{VALOR}} |

---

## 8. Plano de Marketing — Estratégia Completa

**Fonte:** Briefing 5, 10, 11, 13, 14 + análise do Instagram atual + visão estratégica.

### Posicionamento

{{PARAGRAFO_POSICIONAMENTO}} — 1 parágrafo explicando o posicionamento estratégico em uma linha + elaborando em 3-4 frases. Combina 2-3 gatilhos poderosos (ex: confiança + conveniência).

### Canal 1 — Instagram {{HANDLE_DO_NEGOCIO}}

**Bio sugerida:** '{{BIO_SUGERIDA}}'

| FORMATO | CONTEÚDO | FREQUÊNCIA |
|---|---|---|
| Reels 30-60s | {{CONTEUDO_REELS_VENDA}} | {{FREQUENCIA_REELS}} |
| Stories | {{CONTEUDO_STORIES}} | {{FREQUENCIA_STORIES}} |
| Carrossel | {{CONTEUDO_CARROSSEL}} | {{FREQUENCIA_CARROSSEL}} |
| Prova social | {{CONTEUDO_PROVA_SOCIAL}} | Quando houver |
| Reels autoridade | {{CONTEUDO_REELS_AUTORIDADE}} | {{FREQUENCIA_AUTORIDADE}} |

### Canal 2 — Instagram Pessoal {{HANDLE_PESSOAL}} [SE APLICÁVEL]

{{PARAGRAFO_INSTAGRAM_PESSOAL}} — por que o Instagram pessoal do dono é o ativo mais valioso e como aproveitar sem demandar mais tempo dele.

- {{ACAO_IG_PESSOAL_1}}
- {{ACAO_IG_PESSOAL_2}}
- {{ACAO_IG_PESSOAL_3}}
- {{ACAO_IG_PESSOAL_4}}

### Canal 3 — WhatsApp (Uso Simplificado)

{{JUSTIFICATIVA_WA_SIMPLES}} — por que o WA deve ser mínimo e funcional no início.

| AÇÃO | COMO FAZER |
|---|---|
| Configurar mensagem automática | '{{MSG_SAUDACAO_AUTOMATICA}}' |
| Mensagem de ausência | '{{MSG_AUSENCIA}}' |
| Catálogo básico | {{CONFIGURACAO_CATALOGO_WA}} |
| Atendimento | {{PADRAO_ATENDIMENTO}} |

### Estratégia de Lançamento — 3 Fases

#### Fase 1 — Preparação ({{DIAS_PREPARACAO}} antes)
- {{PREPARACAO_1}}
- {{PREPARACAO_2}}
- {{PREPARACAO_3}}
- {{PREPARACAO_4}}

#### Fase 2 — Semana de Lançamento (7 dias)

| DIA | FOCO | AÇÃO PRINCIPAL | CANAL |
|---|---|---|---|
| Dia 1 | Abertura | {{ACAO_DIA1}} | {{CANAL_DIA1}} |
| Dia 2 | Produto | {{ACAO_DIA2}} | {{CANAL_DIA2}} |
| Dia 3 | Autoridade | {{ACAO_DIA3}} | {{CANAL_DIA3}} |
| Dia 4 | Prova social | {{ACAO_DIA4}} | {{CANAL_DIA4}} |
| Dia 5 | Promoção | {{ACAO_DIA5}} | {{CANAL_DIA5}} |
| Dia 6 | Objeções | {{ACAO_DIA6}} | {{CANAL_DIA6}} |
| Dia 7 | Encerramento | {{ACAO_DIA7}} | {{CANAL_DIA7}} |

#### Fase 3 — Consolidação (semanas seguintes)
- {{CONSOLIDACAO_1}}
- {{CONSOLIDACAO_2}}
- {{CONSOLIDACAO_3}}
- Hashtags: {{LISTA_HASHTAGS_LOCAIS}}

---

## 9. Cronograma de Lançamento — Enxuto e Executável

**Fonte:** Síntese da seção 8 + avaliação realista de capacidade do cliente.

{{PARAGRAFO_JUSTIFICATIVA_CRONOGRAMA}} — explicar por que NÃO precisa de 60 dias de preparação. Ritmo Impulso é de 2 semanas máximo.

| PERÍODO | FASE | AÇÕES PRINCIPAIS | META |
|---|---|---|---|
| Dias 1-3 | Preparação | {{PREPARACAO_ACOES}} | {{PREPARACAO_META}} |
| Dias 4-5 | Aquecimento | {{AQUECIMENTO_ACOES}} | {{AQUECIMENTO_META}} |
| Dias 6-12 | Lançamento | {{LANCAMENTO_ACOES}} | {{LANCAMENTO_META}} |
| Semanas 3-4 | Consolidação | {{CONSOLIDACAO_ACOES}} | {{CONSOLIDACAO_META}} |
| Mês 2+ | Crescimento | {{CRESCIMENTO_ACOES}} | {{CRESCIMENTO_META}} |

> **Regra de ouro:**
> Feito é melhor que perfeito. {{SINTESE_ATIVOS_CLIENTE}}. O único passo que falta é {{ACAO_MINIMA}}. Isso começa hoje.

---

## 10. Catálogo de Produtos e Projeções de Receita

**[SE APLICÁVEL — remover pra cliente de serviço/infoproduto ou substituir por "Oferta e Projeções"]**

### Catálogo Completo — {{NUMERO_PRODUTOS}} Produtos

| PRODUTO | PREÇO | OBSERVAÇÃO |
|---|---|---|
| {{PRODUTO}} | R$ {{PRECO}} | {{OBSERVACAO}} |
| ... | ... | ... |

### Ticket Médio e Projeções de Receita

| CATEGORIA | TICKET MÉDIO ESTIMADO |
|---|---|
| {{CATEGORIA_1}} | {{TICKET_1}} |
| {{CATEGORIA_2}} | {{TICKET_2}} |
| Combo sugerido (ex: {{COMBO}}) | {{TICKET_COMBO}} |
| **Ticket médio geral estimado** | **{{TICKET_MEDIO_GERAL}}** |

| CENÁRIO | PEDIDOS/MÊS | FATURAMENTO BRUTO | PRAZO ESTIMADO |
|---|---|---|---|
| Conservador | {{PEDIDOS_CONSERVADOR}} | {{FATURAMENTO_CONSERVADOR}} | Mês 1 |
| Realista | {{PEDIDOS_REALISTA}} | {{FATURAMENTO_REALISTA}} | Mês 2-3 |
| Otimista | {{PEDIDOS_OTIMISTA}} | {{FATURAMENTO_OTIMISTA}} | Mês 4-6 |

> **Sobre recorrência:**
> {{NOTA_RECORRENCIA}} — se o produto é de recompra, explicar o ciclo (ex: creatina dura 60 dias, whey 30 dias) e o valor dos primeiros clientes (custo de aquisição zero em público quente).

---

## 11. Sugestões de Promoções — Sem Pesar na Margem

**Fonte:** Cruzar catálogo/oferta + análise do comportamento de compra do público.

{{PARAGRAFO_INTRODUCAO_PROMOS}} — frase sobre como foram pensadas pra gerar volume e fidelização sem comprometer a margem.

### {{NOME_PROMO_1}} — Duração: {{DURACAO_1}}
**Oferta:** {{OFERTA_1}}
**Por que funciona:** {{JUSTIFICATIVA_1}}

### {{NOME_PROMO_2}} — Duração: {{DURACAO_2}}
**Oferta:** {{OFERTA_2}}
**Por que funciona:** {{JUSTIFICATIVA_2}}

_(repetir pra cada promo — normalmente 5-8)_

---

## 12. Ferramentas e Custos

**Fonte:** Stack escolhida pela Impulso Digital + custos reais do momento.

| FERRAMENTA | PARA QUE SERVE | CUSTO |
|---|---|---|
| {{FERRAMENTA_1}} | {{FINALIDADE_1}} | {{CUSTO_1}} |
| {{FERRAMENTA_2}} | {{FINALIDADE_2}} | {{CUSTO_2}} |
| ... | ... | ... |

> **Custo fixo real para começar:**
> {{RESUMO_CUSTO_MINIMO}} — síntese do custo pra cliente começar. Geralmente muito baixo porque a Impulso entrega stack barata e BYOK.

---

## 13. Metas e Indicadores de Sucesso

**Fonte:** Briefing 11 (cases), 13 (oferta) + benchmarks do nicho.

| INDICADOR | META |
|---|---|
| Lançamento (primeiros 7 dias) | {{META_LANCAMENTO}} |
| Mês 1 completo | {{META_MES_1}} |
| Mês 3 | {{META_MES_3}} |
| Mês 6 | {{META_MES_6}} |
| {{INDICADOR_ESPECIFICO_1}} | {{META_ESPECIFICA_1}} |
| {{INDICADOR_ESPECIFICO_2}} | {{META_ESPECIFICA_2}} |

> **KPI principal:**
> {{KPI_PRINCIPAL}}. Seguidores, curtidas e alcance são vaidades — {{METRICA_REAL}} é receita real. {{EXEMPLO_NUMERICO}} (ex: 50 pedidos × R$160 ticket = R$8.000/mês).

---

## 14. Checklist de Ação — Do Zero ao Lançamento

**Fonte:** Síntese de tudo. Converte estratégia em tarefas enumeradas por área.

### A — {{AREA_1}} ({{QUANDO_1}})
1. {{ACAO_A1}}
2. {{ACAO_A2}}
3. {{ACAO_A3}}
4. {{ACAO_A4}}
5. {{ACAO_A5}}

### B — {{AREA_2}} ({{QUANDO_2}})
1. {{ACAO_B1}}
2. {{ACAO_B2}}
3. {{ACAO_B3}}
4. {{ACAO_B4}}

### C — {{AREA_3}} ({{QUANDO_3}})
1. {{ACAO_C1}}
2. {{ACAO_C2}}
3. {{ACAO_C3}}
4. {{ACAO_C4}}

### D — Lançamento ({{DIAS_LANCAMENTO}})
1. Definir data exata de abertura — sugestão: {{DATA_SUGERIDA}}
2. Seguir roteiro de 7 dias (Dia 1 ao Dia 7) no Instagram
3. {{ACAO_LANCAMENTO_3}}
4. Responder 100% dos DMs e WhatsApp durante os 7 dias
5. {{ACAO_LANCAMENTO_5}}

### E — Pós-Lançamento (Semanas 3 e 4)
1. Pedir feedback pra cada cliente após a entrega
2. Publicar depoimentos e fotos no Instagram
3. Ativar programa de indicação
4. Avaliar impulsionamento dos reels de maior alcance
5. {{ACAO_PROXIMA_FASE}}

---

## Rodapé padrão (todas as páginas)

```
Documento preparado como parte da estratégia de lançamento do {{NOME_NEGOCIO}} em {{LOCAL}}.
Versão 1.0 — {{ANO}} | Fase {{FASE}}: {{MERCADO_ALVO}}
```

---

## Changelog

- **v1.0 (24/04/2026):** Template criado a partir da estrutura validada do GB Nutrition (Gabriel Barros). 14 seções + condicionais pra remover (seção 7 operacional, seção 10 catálogo).
