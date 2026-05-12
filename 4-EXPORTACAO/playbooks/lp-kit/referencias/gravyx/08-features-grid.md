# 08 — Features (#criacao) — grid 3 colunas

## HTML

```html
<section id="criacao" class="section-features">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title sf sf-out-top">
        O Poder de Criação que Você Só Encontra no <span>Gravyx</span>
      </h2>
      <p class="section-desc sf sf-out-top">Recursos pensados para quem cria com volume...</p>
    </div>
    <div class="features-grid">
      <div class="feature-card sf sf-out-top">
        <div class="feature-icon"><svg>...</svg></div>
        <h3 class="sf sf-out-top">Geração em até 4K</h3>
        <p class="sf sf-out-top">Crie imagens em altíssima resolução...</p>
      </div>
      <!-- +5 cards: Criação em Escala, Controle Total, IA Treinada, Velocidade, Consistência -->
    </div>
  </div>
</section>
```

## Observações rápidas

### Estrutura
- Grid 3 colunas × 2 linhas = **6 features** (padrão SaaS clássico)
- Cada card: ícone SVG + H3 + parágrafo curto
- Section header centralizado com H2 em 2 partes (palavra final em gradient "Gravyx")

### Copy das 6 features
1. **Geração em até 4K** — qualidade técnica
2. **Criação em Escala** — volume/produtividade
3. **Controle Total** — customização (reforça "não sou black box")
4. **IA Treinada** — diferenciação vs concorrentes (treino próprio = moat)
5. **Velocidade** — tempo
6. **Consistência** — reprodutibilidade (eco do subtítulo do hero: "consistente, escalável, replicável")

### Padrão de copy Gravyx aqui
- **Título de 2-3 palavras**, ação clara
- **Descrição 1-2 linhas**, começa sempre com verbo no imperativo ("Crie...", "Escale...", "Tenha...")
- **Benefício concreto**, zero adjetivo vazio

### Ícones SVG inline
- Zero Font Awesome, zero lib de ícones
- SVG inline no próprio HTML → controle total de cor (CSS `currentColor`), zero requisição extra
- Ícones seguem paleta: stroke azul elétrico (#00A1FF) em alguns, branco em outros

### H2 pattern
- Estrutura: **"O [substantivo] de [algo] que [benefício] no <span>Marca</span>"**
- Função: cria categoria própria ("Poder de Criação") + ancora na marca
- Replicável direto pra qualquer nicho

## Adaptação pra LP Impulso Digital

### 6 features da Impulso Digital (proposta)

```
┌─────────────────────────────────────────────────────────┐
│ 1. Entrega em 7 dias                                    │
│    Da call ao ar no seu domínio em uma semana.          │
│                                                         │
│ 2. Sem Mensalidade                                      │
│    Site seu, hospedagem sua. Sem plataforma te prendendo.│
│                                                         │
│ 3. SEO Técnico Nativo                                   │
│    Schema, sitemap, Core Web Vitals verdes desde o dia 1.│
│                                                         │
│ 4. WhatsApp Integrado                                   │
│    Botão flutuante + link direto com mensagem pronta.   │
│                                                         │
│ 5. Código Aberto                                        │
│    Você leva o repositório. Troca de dev a qualquer hora.│
│                                                         │
│ 6. Suporte em até 24h                                   │
│    Bug, ajuste, dúvida — resposta no mesmo dia útil.    │
└─────────────────────────────────────────────────────────┘
```

### Por que essas 6?
- **Atacam objeções reais** do mercado BR de "fiz site com freelancer":
  1. "Demora muito" → Entrega em 7 dias
  2. "Depois o cara some e fico pagando Wix pra sempre" → Sem Mensalidade + Código Aberto
  3. "Não aparece no Google" → SEO Técnico
  4. "Cliente não me acha" → WhatsApp Integrado
  5. "Fico refém do fornecedor" → Código Aberto
  6. "Se der problema ninguém atende" → Suporte 24h

### H2 adaptado (padrão Gravyx)
- **"O Padrão de Entrega que Você Só Encontra na <span>Impulso Digital</span>"**
- Ou: **"Os 6 Pilares que a <span>Impulso Digital</span> Entrega em Todo Projeto"**
- Ou: **"Tudo Que Você Precisa pra Seu Negócio Vender no Digital — em um único projeto."**

### Ícones SVG
- Gerar 6 SVGs no Claude Design ou usar lucide-react (já é padrão no Next.js da LP ID?)
- Prompt Claude Design (se for gerar do zero):
  > "6 minimalist line icons for SaaS features: clock (7 days), wallet with X (no fee), magnifying glass with arrow (SEO), chat bubble (whatsapp), open code brackets (open source), headset (support 24h). Style: stroke only, 2px, blue #0EA5E9, 48x48px, flat, consistent line weight. SVG format."
- **Mais barato/rápido:** usar `lucide-react` — já tem todos esses ícones prontos, zero geração.

### Localização na LP
- Seção nova ou substituir/mesclar com `ComoFunciona.js` atual
- Posição ideal: entre **CardServico** (preço) e **ComoFunciona** (processo) — "vi o preço → vi os diferenciais → agora vi o processo"
- Ou: logo depois do Hero como "resumo do diferencial" (antes da prova social)

### Reveal
- Classes `.sf .sf-out-top` nos 6 cards com delay escalonado (`animation-delay: 0.1s, 0.2s, ...`)
- Zero JS extra, puro CSS + IntersectionObserver do core

## Cuidado

- **Não virar lista de "6 features genéricas de qualquer agência"**. Cada uma tem que atacar uma objeção real do mercado brasileiro de micro-empresário.
- **SEO Técnico Nativo** pode assustar não-técnico → considerar "Encontrável no Google" ou "Pronto pra aparecer no Google"
- **Número "7 dias" é hard claim** — precisa cumprir. Se o padrão real é 10 dias, usar "até 10 dias".

## Assets a gerar

1. **6 ícones SVG** (lucide-react ou Claude Design)
2. Zero imagem — cards são texto + ícone

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
