# 10 — Trilha (#trilha) — Você não está sozinho

## HTML

```html
<section id="trilha" class="section-trilha">
  <div class="container">
    <div class="trilha-header">
      <h2 class="sf sf-out-top">
        Aqui você não está <span>sozinho</span>. Nós te ensinamos a extrair o <span>melhor da ferramenta</span>
      </h2>
    </div>
    <div class="trilha-grid">
      <div class="trilha-left">
        <div class="trilha-plataforma-img"><img src="/ASSETS/Notebook.webp"></div>
        <div class="trilha-cards-small">
          <div class="trilha-card-small"><h4>Dicas Exclusivas</h4><p>Truques e atalhos...</p></div>
          <!-- outros -->
        </div>
      </div>
      <div class="trilha-right">
        <div class="trilha-timeline">
          <div class="trilha-step">
            <div class="trilha-step-number">1</div>
            <div class="trilha-step-content">
              <div class="trilha-step-icon">...</div>
              <h4>Passo 1</h4>
              <p>...</p>
            </div>
          </div>
          <!-- +steps -->
        </div>
      </div>
    </div>
  </div>
</section>
```

## Observações rápidas

### Função estratégica: matar objeção "não vou saber usar"
- Principal freio em SaaS de IA: "a ferramenta é boa, mas e se eu não conseguir extrair dela?"
- Gravyx responde com seção inteira dedicada a **suporte/trilha/onboarding**
- **H2 em 1ª pessoa do plural ("Nós te ensinamos")** — rompe a sensação de "compra o produto e se vira"

### Layout: 2 colunas desbalanceadas
- **Coluna esquerda:** mockup de notebook com a plataforma + cards pequenos de benefícios paralelos
- **Coluna direita:** timeline com passos numerados (1, 2, 3, 4...) — guia o lead pelo processo
- **Visual comunica:** "tem a ferramenta real (notebook) + tem caminho claro (timeline)"

### Elementos dos cards pequenos (esquerda)
- "Dicas Exclusivas" + "Truques e atalhos..."
- Padrão: H4 curto + descrição 1 linha
- Função: **bônus percebido** — cliente sente que está comprando + do que só produto

### Timeline (direita)
- Steps numerados com ícone + H4 + parágrafo curto
- **Tira ansiedade** — lead vê exatamente o que vai acontecer do dia 1 ao dia N
- Padrão de LP infoproduto transplantado pra SaaS (mostra "o que você recebe", não só "o que o produto faz")

### H2 com destaque em 2 partes
- `<span>sozinho</span>` + `<span>melhor da ferramenta</span>` em gradient
- Copy ataca objeção + promete resultado específico
- Pattern replicável: **"Aqui você não [medo]. Nós [ação] o [benefício]"**

### Mockup do notebook
- Asset visual do produto dentro da seção
- **Reforça: "o produto existe, está pronto, tá aqui"**
- Combina com `orb` do hero (lá era abstrato, aqui é concreto)

## Adaptação pra LP Impulso Digital

### A seção "Trilha" tem equivalente direto na LP ID?
- Tem o `ComoFunciona.js` atual (identificado na auditoria)
- **Mas a FUNÇÃO é diferente:**
  - ComoFunciona = "como vou construir seu site" (processo de produção)
  - Trilha Gravyx = "como vou te segurar depois que comprou" (onboarding/suporte)
- **Na LP ID precisa das DUAS:** uma mostra o processo da produção, outra mostra o acompanhamento pós-entrega

### Proposta de adaptação

Transformar seção "Trilha" em **"Você não fica sozinho depois do site pronto"** — mata a objeção "e depois que me entregar, some?"

#### Layout (portar do Gravyx)
- 2 colunas: mockup à esquerda + timeline à direita

#### Coluna esquerda
- **Mockup do site real entregue** (ex: print do MPN-On em notebook)
- **Cards pequenos de bônus pós-entrega:**
  1. **Call de alinhamento** — "1h antes de começar, alinho briefing completo"
  2. **Suporte 24h** — "Resposta de bug/ajuste no mesmo dia útil"
  3. **Tutorial em vídeo** — "Você recebe vídeo explicando como atualizar conteúdo"
  4. **Grupo exclusivo WhatsApp** — "Clientes ativos compartilham ajustes"

#### Coluna direita — Timeline de entrega
```
1. CALL DE ALINHAMENTO
   Agendamos 1h pra entender seu negócio e briefing completo.

2. MOODBOARD + WIREFRAME
   Em 2 dias você aprova a direção visual e estrutura.

3. DESENVOLVIMENTO
   Construo o site com SEO, performance e integração WhatsApp.

4. ENTREGA EM ATÉ 7 DIAS
   Deploy no seu domínio + tutorial em vídeo + código-fonte.

5. ACOMPANHAMENTO 30 DIAS
   Ajustes livres no primeiro mês pra garantir primeira venda.
```

#### H2 adaptado (padrão Gravyx)
- **"Aqui você não é <span>deixado sozinho</span> depois do deploy. Eu fico até a <span>primeira venda acontecer</span>."**

### Alinhamento com memória

Isso conecta com a feedback memory `feedback_call_alinhamento_processo.md`:
> "Call de alinhamento é parte do produto, não bônus — etapa OBRIGATÓRIA pré-produção"

Essa seção é o **lugar estratégico** pra comunicar isso. O cliente vê que a call não é "brinde", é **passo 1 do processo**.

### Decisão: manter OU substituir ComoFunciona.js atual?

**Opção A — Manter ComoFunciona + adicionar Trilha:**
- 2 seções separadas
- ComoFunciona = processo de produção
- Trilha = acompanhamento pós-entrega
- Risco: redundância, LP fica longa

**Opção B (recomendação) — Substituir ComoFunciona pela Trilha:**
- Uma seção só combina produção + acompanhamento
- Timeline de 5 passos cobre call → entrega → acompanhamento 30 dias
- Mais enxuto, padrão Gravyx fiel

### Assets a gerar

1. **Mockup notebook com LP do MPN-On (ou UrbanFeet) aberta** — Claude Design
   > Prompt: "Realistic mockup of modern MacBook Pro 14 inches showing a Brazilian e-commerce landing page in dark mode with navy + cyan accents, angled view 20 degrees, soft studio lighting, glossy screen reflection, high detail, 4K. Foreground isolated on transparent background."
2. **5 ícones pra timeline** (chat, moodboard, code, rocket, headset) — lucide-react resolve

### Localização na LP

- Substituir `ComoFunciona.js` atual pela nova seção `Trilha.js`
- Posição: entre **Features (6 pilares)** e **Portfolio**
- Ordem: Hero → Stats → Problema → Creations → CardServico → **Features** → **Trilha (NOVA)** → Portfolio → Depoimentos → SobreEduardo → FAQ → CTAFinal

## Cuidado

- **Não prometer o que não vai entregar.** "Acompanhamento 30 dias com ajustes livres" é contrato — se virar inflação de pedido do cliente, vira prejuízo.
- **Definir escopo do "ajuste livre":** texto, imagem, botão. Não é "refazer o site inteiro".
- Essa seção é **arma de fechamento pesada** — ela mata "e se depois me abandonar?" que é a objeção nº 1 de quem já foi queimado por freelancer.

**Arquivo salvo. Manda o próximo bloco.**
