# 12 — Guarantee

## HTML

```html
<section class="section-guarantee">
  <div class="container">
    <div class="guarantee-inner">
      <div class="guarantee-icon">
        <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      </div>
      <div class="guarantee-content">
        <span class="guarantee-badge">7 DIAS DE GARANTIA</span>
        <h2>Garantia incondicional de <span class="accent-text">7 dias</span></h2>
        <p><strong>7 dias pra testar a plataforma à vontade.</strong> Se não gostar, devolvemos <strong>100% do seu dinheiro</strong>.</p>
      </div>
    </div>
  </div>
</section>
```

## Observações rápidas

### Função estratégica: reversão de risco
- Logo **depois do pricing**, antes do FAQ
- Ordem psicológica: **"viu o preço → bateu a dúvida → aqui está por que não tem risco"**
- **Mata a objeção financeira** no exato momento em que ela surge na cabeça do lead

### Anatomia simples
- **SVG inline de escudo com checkmark** (zero lib, zero fonte externa)
- Badge caps "7 DIAS DE GARANTIA" (repete o número pra fixar)
- H2 curto com palavra-chave em gradient ("7 dias")
- Parágrafo com **2 negritos estratégicos**: "7 dias pra testar à vontade" + "100% do seu dinheiro"

### Por que funciona
- **"Incondicional"** é palavra-chave — não tem letra miúda
- **"À vontade"** — coloquial, remove peso formal
- **"100%"** — absoluto, sem porcentagem de desconto
- **Sem CTA na seção** — não distrai, só reverte risco. O CTA foi no pricing.

### Padrão replicável
- H2: **"Garantia incondicional de [N] dias"**
- P: **"[N] dias pra [ação]. Se não [benefício], devolvemos 100% do seu dinheiro."**
- Funciona pra qualquer produto digital/serviço (se o operador aguentar o fluxo de cancelamento).

## Adaptação pra LP Impulso Digital

### Problema: serviço não é plug-and-play como SaaS

Gravyx = testa a plataforma 7 dias → cancelou, devolve.
LP ID = site é entregue, deploy feito, domínio configurado → "devolver" é mais complicado.

### Opções de garantia pra LP ID

**1. Garantia de aprovação do briefing (antes do código)**
> "Nos primeiros 3 dias você aprova moodboard + wireframe. Se não estiver 100% alinhado, cancelamos e devolvemos."
- **Proteção pra Eduardo:** não desenvolveu ainda, não perdeu tempo
- **Proteção pro cliente:** não precisa receber algo que não combina com ele

**2. Garantia de entrega no prazo (SLA)**
> "Entrego em até 7 dias úteis a partir da call de alinhamento. Se atrasar, R$100 de desconto."
- Atira responsabilidade em cima do operador (Eduardo)
- Risco: se atrasar por culpa do cliente (demora pra enviar conteúdo), fica chato

**3. Garantia de primeira venda (mais agressiva, mais difícil)**
> "Se você não fizer a primeira venda no primeiro mês depois do site no ar, refaço o site sem custo."
- Muito forte visualmente, pode explodir conversão
- Risco: cliente não faz ads, não divulga, não tem produto atrativo — aí culpa o site
- **Condicionar:** só vale se cliente investir mínimo de R$500 em ads + seguir estratégia proposta

**4. Garantia de satisfação pós-entrega (combinada)**
> "7 dias depois do deploy pra testar tudo. Ajustes ilimitados nesse período. Se ainda não estiver satisfeito, devolvemos 50% do valor."
- 50% porque o código já foi escrito (custo de oportunidade real)
- Mata objeção "e se sair ruim?"

### Recomendação

**Combo Opção 1 + Opção 2:**
- Garantia de **aprovação 3 dias** (mata risco principal do cliente = "não quero receber algo que não gostei")
- SLA de **entrega em 7 dias** (diferencial vs concorrência que promete e demora 30 dias)

```
┌─────────────────────────────────────────────────┐
│ 🛡️  GARANTIA DUPLA                              │
│                                                 │
│  Garantia de alinhamento em 3 dias              │
│                                                 │
│  Nos 3 primeiros dias você aprova moodboard +   │
│  wireframe. Se não estiver 100% alinhado com    │
│  sua marca, devolvemos 100% do investimento.    │
│                                                 │
│  + Entrega em 7 dias ou R$100 de desconto       │
└─────────────────────────────────────────────────┘
```

### H2 e copy proposta

**H2:** "Garantia incondicional de <span>3 dias pra alinhamento</span>"

**Badge:** "3 DIAS PRA GARANTIR QUE É ISSO MESMO"

**P:** "**3 dias pra aprovar moodboard + wireframe.** Se não estiver 100% alinhado com sua marca, devolvemos **100% do seu dinheiro** — sem perguntas."

### Ícone SVG
- Portar o escudo + checkmark do Gravyx direto (SVG inline 96x96)
- Cor: azul principal da LP ID (`#0EA5E9` ou equivalente)

### Localização na LP
- **Depois do Pricing**, antes do FAQ
- Ordem: ... → Trilha → Portfolio → Depoimentos → SobreEduardo → **Pricing → Guarantee (NOVA)** → FAQ → CTAFinal

## Cuidado

- **Garantia que Eduardo NÃO consegue honrar queima credibilidade** — pior que não ter garantia.
- **"Primeira venda no primeiro mês"** (Opção 3) é muito agressivo sem controle do marketing do cliente. **Evitar.**
- **Opção 1 (alinhamento 3 dias)** é a mais segura — Eduardo controla 100% do processo nesse ponto.
- **Letra miúda:** o que conta como "aprovação"? Versão final escrita, não áudio solto no WhatsApp. Deixar no contrato/email.

## Decisão pendente pro Eduardo

1. **Qual garantia vai oferecer?** (recomendação: Opção 1 combinada com SLA da Opção 2)
2. **Percentual de devolução:** 100% ou 50%?
3. **Prazo de aprovação:** 3 dias ou 5 dias?

## Assets

- Zero asset novo — SVG inline resolve

**Arquivo salvo. Manda o próximo bloco.**
