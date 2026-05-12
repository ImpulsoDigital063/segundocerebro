# 11 — Pricing (#precos)

## HTML

```html
<section id="precos" class="section-pricing">
  <div class="container">
    <div class="pricing-header">
      <h2 class="sf sf-out-top">
        Assine agora o Gravyx e tenha <span class="accent-text">gerações ilimitadas</span>
      </h2>
      <p class="sf sf-out-top">Acesse a melhor ferramenta de geração de artes com IA...</p>
    </div>

    <!-- Toggle mensal/anual -->
    <div class="pricing-toggle-wrap">
      <span class="toggle-label active">Mensal</span>
      <div class="toggle-box"><div class="toggle-dot"></div></div>
      <span class="toggle-label">Anual</span>
      <span class="economy-badge">-30%</span>
    </div>

    <!-- Selector API / Padrão -->
    <div class="pricing-mode-selector">
      <div class="pricing-mode-bg"></div>
      <button class="pricing-mode-btn active"><span class="pricing-mode-icon">⚡</span>PADRÃO</button>
      <button class="pricing-mode-btn">API</button>
    </div>

    <div class="pricing-grid">
      <div class="pricing-card popular sf sf-out-top">
        <div class="custom-pricing-grid">
          <div class="custom-pricing-left">
            <h3>⚡ Plano Creator</h3>
            <p>Conecte sua chave API. Crie sem limites...</p>
            <div class="price">R$ ...</div>
          </div>
          <div class="custom-pricing-right">
            <ul><li>Gerações ilimitadas</li>...</ul>
            <div class="btn-neon-wrap"><!-- botão idêntico ao hero --></div>
          </div>
        </div>
      </div>
      <!-- +2 cards -->
    </div>
  </div>
</section>
```

## Observações rápidas

### Complexidade do pricing Gravyx
Tem **3 eixos de decisão simultâneos** (muito denso):
1. **Toggle Mensal/Anual** (com badge -30% no anual)
2. **Selector PADRÃO vs API** (BYOK — Bring Your Own Key)
3. **Grid de 3+ cards** com preços variáveis

### Padrão BYOK (Bring Your Own Key) — memória Gravyx
- Já identificado na memória `reference_playbook_gravyx.md` como 1 dos 7 padrões
- **Estratégia:** lead conecta a própria chave API (OpenAI/Replicate/etc) e paga a Gravyx só a plataforma
- **Margem maior pro Gravyx** (não repassa custo de geração) + **transparência pro lead** ("você vê exatamente quanto gasta")
- **Padrão replicável em SaaS de IA** — **não se aplica a LP de serviço** (Impulso Digital)

### H2 de pricing
- **Padrão:** "Assine agora [produto] e tenha [benefício principal]"
- Verbo no imperativo + benefício em gradient
- Copy fecha o loop do hero ("criar arte com IA") → aqui "gerações ilimitadas"

### Layout de card diferenciado (`custom-pricing-grid`)
- **2 colunas dentro do card:** nome/preço à esquerda + features/CTA à direita
- **Diferente do pricing SaaS padrão** (que é vertical com tudo empilhado)
- Visual: parece mais "pacote de serviço" do que "plano de assinatura genérico"
- **Replicável direto pra LP de serviço** — funciona melhor quando cada card tem muita feature

### Badge `popular` no card do meio
- Padrão clássico: cliente ancora no plano marcado, maximiza conversão pro tier médio
- **Destaque visual:** borda ou glow diferenciado (provavelmente azul neon #00A1FF)

### CTA repetido (btn-neon-wrap)
- Mesmo componente do hero → **consistência visual, repetição aumenta familiaridade**
- Cada card tem seu botão próprio
- Em LP de serviço: cada card leva a uma URL específica (/fechar-lp, /fechar-shopify, etc)

## Adaptação pra LP Impulso Digital

### Diferença fundamental: serviço one-shot vs SaaS recorrente
- Gravyx = R$X/mês recorrente → faz sentido Mensal/Anual + BYOK
- LP ID = R$X one-shot por projeto → **não precisa toggle**, preço é único por pacote

### LP ID já tem 4 cards (CardServico.js)
- LP R$499 (landing page)
- Shopify R$599 (destaque)
- Next.js R$799
- Consultoria R$299 (era R$799)

### Proposta de reestruturação

#### Remover do Gravyx (não se aplica)
- ❌ Toggle Mensal/Anual (serviço é one-shot)
- ❌ Selector PADRÃO/API (não tem BYOK, é entrega completa)

#### Manter do Gravyx
- ✅ H2 padrão: "Escolha o pacote certo pro seu momento e <span>comece a vender em 7 dias</span>"
- ✅ Layout `custom-pricing-grid` (2 colunas internas no card) — fica mais premium que vertical simples
- ✅ Badge `popular` no Shopify R$599 (já é o destaque atual)
- ✅ Botão neon repetido do hero
- ✅ Reveal `.sf .sf-out-top` nos cards com delay escalonado

#### Adicionar que não tem hoje
- **"AgendaPRO R$197 + R$47/mês"** — produto recorrente, precisa de tratamento separado
  - **Opção A:** Card separado fora do grid de 4 cards (seção própria "tem um negócio de serviço com agendamento? conhece o AgendaPRO" — já decidido na auditoria)
  - **Opção B:** Quinta tab/toggle ("Quer automatizar agendamento?") linkando pro AgendaPRO
  - **Recomendação:** Opção A — não inflar o grid principal, AgendaPRO vai em seção própria

### Anatomia do card proposto (por pacote)

```
┌──────────────────────────────────────────────────────┐
│  POPULAR (badge)                                     │
├──────────────────┬───────────────────────────────────┤
│                  │                                   │
│  ⚡ Loja Shopify │  ✓ Instalação + setup completo   │
│                  │  ✓ Domínio + hospedagem guiada   │
│  Loja completa,  │  ✓ Integração WhatsApp + pixel   │
│  pronta pra      │  ✓ 5 produtos cadastrados        │
│  vender.         │  ✓ Gateway de pagamento          │
│                  │  ✓ Suporte 30 dias + ajustes     │
│                  │                                   │
│  R$ 599          │  [  QUERO MINHA LOJA  ↗  ]      │
│  pagamento único │                                   │
│                  │                                   │
└──────────────────┴───────────────────────────────────┘
```

### H2 proposto
- **"Escolha o pacote certo e <span>comece a vender em até 7 dias</span>."**
- Ou: **"Um preço claro por projeto. Zero mensalidade, zero surpresa."** (ataca dor principal — regra memória `feedback_lp_oferta_agressiva.md`)

### Subtítulo
- "Todos os pacotes incluem call de alinhamento, código-fonte aberto e 30 dias de ajustes inclusos."

### 4 cards (revisão dos atuais)

| Pacote | Preço | Badge |
|---|---|---|
| Landing Page | R$499 | — |
| Loja Shopify | R$599 | **POPULAR** |
| Loja Next.js | R$799 | — |
| Consultoria Estratégica | R$299 (era R$799) | OFERTA |

### Scripts a portar
- **Zero JS obrigatório** — sem toggle, sem tabs
- Reveal via IntersectionObserver já centralizado (vem do core)

### Assets
- Zero imagem nova — cards são texto + ícone
- Ícones: lucide-react (`Zap`, `ShoppingBag`, `Code`, `HeadphonesIcon`)

### Localização na LP
- LP ID já tem CardServico.js posicionado — manter localização
- **Trocar visual** pelo padrão Gravyx (`custom-pricing-grid` horizontal)

## Cuidado

- **Preços em R$ devem vir com "pagamento único"** ou "à vista" embaixo — tira dúvida de "é R$499 por mês?"
- **Badge "POPULAR" só em 1 card** — se marcar 2, perde o efeito âncora
- **"Consultoria R$299 (era R$799)"** é âncora de preço. Válido. **Manter o riscado do preço antigo** — regra `feedback_lp_oferta_agressiva.md`
- **Não criar toggle anual** — serviço one-shot não cabe
- **AgendaPRO em seção própria fora do grid** — já decidido, não misturar modelo recorrente com one-shot

## Decisão pendente pro Eduardo

1. **Consultoria fica R$299 ou sobe?** Se o volume de pedido de consultoria for alto e tomar tempo, pode ser "R$499 inicial" ou virar só "R$199 a hora" avulsa.
2. **CTA dos botões:** "Quero esse pacote" vs "Falar no WhatsApp" vs "Agendar call grátis"
   - **Recomendação (memória `feedback_call_alinhamento_processo.md`):** Todos levam pra "Agendar call grátis" — a call é parte do processo, não bônus.

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
