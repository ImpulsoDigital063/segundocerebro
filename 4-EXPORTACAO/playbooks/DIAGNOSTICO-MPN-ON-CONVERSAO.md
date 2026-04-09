# 🔍 DIAGNÓSTICO — MPN-ON CONVERSÃO

**Status:** Campanhas ativas mas conversão abaixo do esperado  
**Data:** 09 de Abril de 2026  
**Objetivo:** Identificar problema + propor testes A/B

---

## 📊 DADOS ATUAIS NECESSÁRIOS

Para diagnóstico completo, você precisa me trazer:

```
Meta Ads (Campanhas ativas):
- [ ] CTR atual (qual % clica no anúncio?)
- [ ] CPC (quanto sai por clique? R$)
- [ ] Impressões (quantas vezes mostrou?)
- [ ] Cliques (quantas pessoas clicaram?)
- [ ] CPM (quanto por 1000 impressões?)

Landing Page:
- [ ] Visitantes/dia (quantas pessoas entram?)
- [ ] Taxa de entrada (% de quem vê anúncio → entra na página)
- [ ] Taxa de scroll VSL (% que começa ver vídeo)
- [ ] Taxa de conclusão VSL (% que vê até o final)
- [ ] Taxa de clique CTA (% que clica "quero entrar")
- [ ] Taxa de conversão final (visitantes → vendas %)

Conversão esperada vs atual:
- Taxa esperada: 3-5% (visitante → venda)
- Taxa atual: ? (você precisa checar)
```

**Como coletar:**
- Meta Ads: Painel de campanhas → relatórios
- Landing Page: Google Analytics ou Vercel Analytics
- Conversão: Kiwify mostra quantas vendas

---

## 🎯 ANÁLISE HYPOTHÉTICA (sem dados reais ainda)

**Se conversão está baixa, as causas prováveis são:**

### **Possibilidade 1: VSL está matando a conversão (PROBABILIDADE: 40%)**

**Sintoma:**
- Muita gente entra na landing
- Poucas pessoas COMEÇAM a ver a VSL
- Ainda menos concluem

**Por quê pode estar acontecendo:**
- VSL tem 23-24 minutos (muito longa pra scroll frio)
- Pessoa entra, vê "23 min de vídeo" e sai na hora
- Título/headline antes da VSL não criou suficiente curiosidade

**Teste A/B proposto:**
```
VERSÃO A (Atual): VSL 23-24 min no hero
VERSÃO B (Teste): VSL 10-12 min (editado, remover partes chatas)
VERSÃO C (Teste): Resumo 2-3 min + link "ver VSL completa"

Resultado esperado: Versão C ou B aumenta conclusão em 30-50%
```

---

### **Possibilidade 2: Copy não mata a objeção CERTA (PROBABILIDADE: 35%)**

**Sintoma:**
- Gente vê headline, VSL, mas não clica no CTA
- Abandona na seção de preço ou garantia

**Por quê pode estar acontecendo:**
A objeção #1 do seu público pode ser:
- "Preciso de programação?" (você mata bem)
- "Vou conseguir clientes?" (talvez não mate bem)
- "Vale o investimento?" (talvez não mata bem)
- "É pra mim?" (talvez não mata bem)

**Teste A/B proposto:**

Primeira coisa: **Qual é a objeção #1?**

Se for "Vou conseguir clientes?":
```
VERSÃO A: Case Gabriel mostra resultado
VERSÃO B: Lista de 10 negócios locais prontos pra vender
VERSÃO C: "Módulo 4 inteiro ensina prospecção estruturada"

Teste qual mata mais objeção
```

Se for "Vale o investimento?":
```
VERSÃO A: "Uma loja = R$600+ recupera o investimento"
VERSÃO B: "Seu primeiro cliente paga o curso + lucro"
VERSÃO C: ROI calculator (colocar N clientes = ganhar R$X)

Teste qual convence mais
```

---

### **Possibilidade 3: Preço está confuso ou alto demais (PROBABILIDADE: 15%)**

**Sintoma:**
- Gente vê VSL completa, clica CTA
- Entra na página de checkout e SAI

**Por quê:**
- R$297 não está claro o bastante no hero
- Pessoa só descobre o preço no final
- Alternativa de parcelamento (3x R$99) não está visível
- Garantia 7 dias não está clara

**Teste A/B proposto:**
```
VERSÃO A (Atual): Preço no final (no CTA)
VERSÃO B: Preço visível na sticky bar durante scroll
VERSÃO C: Preço + parcelamento 3x no hero "R$297 ou 3x R$99"

Teste qual converte mais cliques
```

---

### **Possibilidade 4: Público errado (PROBABILIDADE: 10%)**

**Sintoma:**
- Muita gente entra, mas tipo "curiosa" não "compradora"
- Ratio de homem vs mulher muito desbalanceado
- Faixa etária errada (muito jovem ou muito velho)
- Região errada

**Solução:**
Revisar segmentação Meta Ads:
- Está rodando para "empreendedorismo"? Bom.
- Está rodando para "curiosos de e-commerce"? Pode filtrar melhor.
- Está rodando Brasil inteiro? Talvez focar Palmas + cidades próximas.
- Idade 22-45? Ou muito mais genérico?

**Teste A/B proposto:**
```
VERSÃO A (Atual): Público atual
VERSÃO B: Segmentar por "dono de negócio local" (mais específico)
VERSÃO C: Segmentar geograficamente (Palmas + Goiás + NTO)

Teste qual baixa CPC + aumenta qualidade dos leads
```

---

## 🚀 PLANO DE TESTE (Próximos 14 dias)

### **Semana 1: Diagnóstico**

**Dia 1-2:**
- [ ] Coletar dados reais de Meta Ads
- [ ] Coletar dados de GA / Vercel
- [ ] Coletar dados de Kiwify (quantas vendas até agora?)

**Dia 3-4:**
- [ ] Identificar qual é a VERDADEIRA objeção #1
- [ ] Confirmar se VSL conclusão é baixa (provável culprit)

**Dia 5-7:**
- [ ] Preparar Teste A/B #1 (VSL 10 min vs 23 min)
- [ ] Preparar Teste A/B #2 (Copy de objeção principal)

### **Semana 2: Testes**

**Dia 8-10:**
- [ ] Ativar Teste A/B #1 (VSL curta)
- [ ] Dividir tráfego 50% versão A, 50% versão B

**Dia 11-14:**
- [ ] Monitorar resultados
- [ ] Qual versão converte mais?
- [ ] Escalar a vencedora
- [ ] Preparar Teste A/B #2 pra próxima semana

---

## 📋 MATRIZ DE OBJEÇÕES

Identifique qual é a objeção #1 do seu público:

| Objeção | Onde está na landing | Copy atual | Copy proposta |
|---------|---------------------|-----------|--------------|
| "Preciso programação?" | Seção Módulo 2 | "Cada clique é mostrado" | Melhorar (não mata) |
| "Vou conseguir clientes?" | Módulo 4 teaser | "Módulo inteiro sobre isso" | Adicionar case específico |
| "Vale o investimento?" | Seção preço | "Uma loja = R$600+" | Talvez não está claro |
| "É pra mim?" | Hero / Abertura | "Quem está travado" | Talvez muito genérico |
| "Tenho tempo pra isso?" | Não está | [não existe] | Adicionar "Leva X horas" |

---

## 📊 MÉTRICAS PARA RASTREAR

**Defina baseline AGORA:**

```
BASELINE (Semana atual):
- Visitantes/dia: ___
- Taxa de entrada (Ad cliques → landing): ___%
- Pessoas que clicam VSL play: ___%
- Pessoas que veem VSL até o fim: ___%
- Pessoas que clicam CTA: ___%
- Taxa de conversão final: ___%
- CPM: R$ ___
- CPC: R$ ___
- Vendas/dia: ___

APÓS TESTE A/B #1 (Semana 2):
- Mesmas métricas
- Qual versão ganhou?
```

---

## 🎯 PRÓXIMO PASSO

**IMEDIATAMENTE:**
1. Coletar dados reais (Meta Ads + Analytics + Kiwify)
2. Identificar qual é a objeção #1
3. Responder: VSL conclusão é baixa? (Provavelmente sim)

**DEPOIS:**
Aplicar testes A/B em ordem de impacto:
1. **ALTA PRIORIDADE:** VSL reedição (10 min vs 23 min)
2. **ALTA PRIORIDADE:** Copy de objeção principal
3. **MÉDIA PRIORIDADE:** Preço visibilidade
4. **BAIXA PRIORIDADE:** Segmentação Meta (só depois)

---

*Diagnóstico criado: 09/04/2026*  
*Pronto pra testes e otimização*  
*Objetivo: Aumentar conversão MPN-On em 50%+ em 14 dias*
