# Ideia — Formulário de Diagnóstico como Add-on do Impulso Digital

**Data da ideia:** 2026-04-24
**Status:** em espera até ter case real (primeiros leads do formulário próprio)
**Origem:** conversa enquanto criávamos o Tally do Diagnóstico da LP mãe

---

## A ideia em 1 parágrafo

O formulário de diagnóstico que estou colocando na LP do Impulso Digital vira **mais um serviço** oferecido aos clientes. Quando o RadarPRO analisa um lead, ele identifica se aquele negócio se beneficiaria de ter um formulário próprio (captação passiva + qualificação de lead). Se sim, entra como **arma de vendas** no playbook gerado pela IA — upsell ou produto standalone.

**Princípio que puxa:** mesmo padrão do resto do ecossistema — eu sou o primeiro cliente da própria ferramenta. Se o formulário gera lead pra mim, vira produto vendável com case real.

---

## Para QUEM faz sentido (nicho)

Formulário de diagnóstico **só serve pra certos perfis**. Tem que ser:

- **Serviço consultivo** (não produto de impulso)
- **Ticket médio alto** (>R$500 no primeiro atendimento)
- **Venda depende de conhecer o cliente** antes

### ✅ Segmentos-alvo
- Advogado
- Nutricionista
- Psicólogo / terapeuta
- Arquiteto / designer de interiores
- Coach / consultor de negócio
- Dentista / clínica odontológica
- Clínica de estética / dermatologia
- Personal trainer
- Infoprodutor (mentoria premium)

### ❌ Segmentos que NÃO se beneficiam
- Comércio de produto físico (varejo)
- Delivery / serviço rápido
- Restaurante / food service
- Salão de beleza / barbearia (agendamento basta — é AgendaPRO, não formulário)

---

## Posicionamento no mix

**Modelo:** add-on, não produto principal.

### 3 formatos possíveis de ofertar:

1. **Combo com LP**: "Landing Page + Formulário de Diagnóstico" — preço casado
2. **Upsell pós-fechamento**: "e se a gente adicionar um diagnóstico pra filtrar seus leads?" (oferece depois que o cliente já disse sim pra LP)
3. **Standalone**: cliente só quer o formulário — serviço rápido (2-3 dias)

### Preço sugerido
- **R$150-300 standalone**
- **+R$100-150 como add-on** de LP/Shopify/Next.js
- Margem alta — custo é só meu tempo (1-2h de briefing + configuração Tally)

### O que entrega
- Briefing com o cliente pra levantar perguntas certas
- 6-12 perguntas customizadas pro negócio dele (não template genérico)
- Setup no Tally (ou integrado ao site se for LP/Shopify)
- Integração: respostas vão pro WhatsApp dele ou email
- Treinamento rápido de como responder os leads

---

## Integração com RadarPRO

O RadarPRO já tem o sistema **"arma de vendas por segmento"** (matching automático no `lib/horarios.ts` + no SYSTEM_PROMPT).

### Regra a adicionar

```
SE segmento ∈ {advogado, nutricionista, psicólogo, consultor,
              coach, arquiteto, dentista, clínica, estética,
              personal, infoprodutor}
E ticket médio presumido > R$500
→ Arma adicional: "Formulário de Diagnóstico"
```

### O que muda no playbook gerado pela IA

A ação `gerarScriptCompleto` (hoje 11 seções) pode passar a mencionar o formulário como:

- **Seção 6 (Arma de vendas por segmento)**: sugerir "Formulário de Diagnóstico" quando aplicável
- **Seção 3 (Pitch personalizado)**: gerar variação de pitch que inclui o formulário como diferencial
- **Seção 7 (Ancoragem de preço)**: ancorar combo LP+Formulário > LP sozinha

---

## Timing — quando retomar

**Não mexer antes de:**
1. ✅ LP mãe do Impulso Digital no ar com o formulário funcionando
2. ✅ Pelo menos 5 leads vindos do formulário próprio em ~2-3 semanas
3. ✅ Case real: "o próprio Impulso Digital captou X leads em Y dias com esse funil"

**Por que esperar:** sem case real, é promessa. Com case real, é prova. É o mesmo padrão do resto (UrbanFeet virou prova do MPN, Gabriel virou prova da Impulso, etc.).

---

## Próximos passos (futuros)

1. **Depois do primeiro mês com o formulário da LP mãe:**
   - Medir taxa de preenchimento
   - Medir quantos preenchimentos viram conversa no WhatsApp
   - Medir quantos viraram venda fechada

2. **Se os números forem bons:**
   - Escrever script do pitch "formulário de diagnóstico como serviço"
   - Adicionar ao catálogo da Impulso Digital (na LP)
   - Integrar regra no RadarPRO (arma de vendas por segmento)

3. **Criar um template base de formulário** por segmento (advogado, nutri, coach) pra ganhar velocidade na entrega

---

## Notas de sessão

- Ideia surgiu enquanto criávamos o Tally do Diagnóstico da LP mãe com a Claude Chrome Extension
- Eduardo notou que o próprio processo de construção pode virar produto
- Memória `feedback_escopo_caso_real.md` aplicada: não implementar agora, esperar caso real puxar
- Bate com o padrão 10 do MEGA-CLAUDE ("construir em público, ser o primeiro case")

---

**Ver também:** [[STATUS-RADARPRO]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[STATUS-IMPULSO]] · [[CONTEXTO-RADARPRO-PARA-CHATGPT]]
