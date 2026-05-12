# 07 — Testimonials (duas filas infinitas)

## HTML

```html
<section class="section-testimonials">
  <div id="row-1" class="testimonials-row">
    <div id="track-1" class="testimonials-track">
      <div class="testimonial-pill sf sf-out-top">
        <div class="testimonial-avatar initials-avatar">RA</div>
        <div class="testimonial-content">
          <strong>Renata Alves</strong>
          <span class="stars">★★★★★</span>
          <p>"fiz 8 artes pro meu cliente em 20 min..."</p>
        </div>
      </div>
      <!-- ... pill duplicados p/ seamless loop ... -->
    </div>
  </div>
  <div id="row-2" class="testimonials-row">
    <div id="track-2" class="testimonials-track">...</div>
  </div>
</section>
```

## Observações rápidas

### Estrutura: 2 filas infinitas
- **row-1 + track-1:** velocidade 0.7 px/frame (identificada no bloco 01)
- **row-2 + track-2:** velocidade 0.55 px/frame (mais lenta, direção oposta provavelmente)
- **Técnica diferente do carrossel de creations:** aqui é **requestAnimationFrame** com velocidade controlada (não CSS keyframes 30s). Motivo: pills têm largura variável, animação baseada em pixels é mais fiel.

### Anatomia do pill (testimonial)
1. **Avatar com iniciais** (`initials-avatar` — "RA" = Renata Alves)
   - Zero foto real → **elimina dependência de ter foto autorizada** + consistência visual
   - Padrão SaaS moderno (Linear, Stripe também usam)
2. **Nome em bold** (`<strong>`)
3. **5 estrelas unicode** (`★★★★★`) — zero SVG, zero dep
4. **Depoimento curto** entre aspas — uma linha, máximo duas

### Copy estilo Gravyx
- Aspas minúsculas ("fiz 8 artes...") — tom coloquial, parece real
- **Resultado mensurável** ("8 artes em 20 min") — não é "amei a plataforma", é número
- **Especificidade:** "pro meu cliente" — contexto de uso concreto
- Curto demais pra parecer fabricado, longo suficiente pra ter substância

### Duas filas contrárias
- **Efeito visual:** sensação de "muita gente falando" (volume percebido > volume real)
- **Mesmo com 10 depoimentos reais, 2 filas em loop parecem infinitos**
- **Direções opostas** aumentam a sensação de movimento — olho tem mais estímulo

## Adaptação pra LP Impulso Digital

### Realidade de depoimentos hoje (Eduardo)
- **MPN-On (cliente próprio):** pode gerar depoimento de resultado real
- **UrbanFeet (case/cliente):** ok
- **Gabriel GB Nutrition (fechado 15/04):** vai virar case, mas ainda não gerou depoimento
- **Outros clientes passados de e-commerce (3 anos):** pode pedir depoimento de projeto antigo

### Opção A — Rodar com o que já tem (4-6 depoimentos reais)
- Usar duas filas com os depoimentos reais duplicados (loop seamless)
- Mesmo 4-6 depoimentos bem escritos parecem bastante nas 2 filas rolando
- **Nunca inventar depoimento falso** — queima credibilidade se pego

### Opção B — Puxar prints reais de cliente (WhatsApp, Google, Instagram)
- **Mais forte que pill em texto:** print real de conversa no WhatsApp agradecendo
- Formato: card com screenshot + nome embaixo
- Pega o padrão "provas autênticas > depoimentos editados"

### Opção C — Mix (recomendação)
- **Fila de cima:** pills estilo Gravyx com depoimentos reais (iniciais + estrelas + frase)
- **Fila de baixo:** prints reais do WhatsApp em cards menores
- Alternância aumenta credibilidade — texto limpo + prova visual

### Copy dos depoimentos — padrão a seguir
- **Foco no resultado mensurável:** "subi de 2 pra 15 pedidos/dia em 3 semanas"
- **Contexto concreto:** "minha loja de tênis em Palmas"
- **Tom coloquial:** vírgula errada pode ficar, parece real
- **Curto:** 1-2 linhas

### Exemplo de 6 depoimentos pra LP ID (a validar com Eduardo)
```
MP — "loja saiu do zero pra 60+ leads/mês em 4 semanas, Eduardo manja mesmo"  ★★★★★
UF — "revendi 3 vezes o investimento no primeiro mês"                          ★★★★★
GB — "entregou antes do prazo e me deixou operando no automático"              ★★★★★
AR — "refiz a LP, conversão subiu de 1.8% pra 5.2% em 2 semanas"              ★★★★★
VL — "migração pro Shopify rápida, sem dor de cabeça, sem mensalidade extra" ★★★★★
TC — "consultoria de 1h me economizou 3 meses jogando dinheiro fora no ads"   ★★★★★
```

### Script vanilla pra portar
- Portar direto o requestAnimationFrame dos 2 tracks (velocidades 0.7 e 0.55 px/frame, direções opostas)
- ~25 linhas de JS em `useEffect` no componente React
- Zero dependência

### Localização na LP
- LP ID atual já tem `Depoimentos.js` — **substituir o componente inteiro** pelo novo formato de 2 filas
- Posição boa: entre **Portfolio** e **SobreEduardo** (continua sendo prova social, mas em movimento)

## Assets a gerar/coletar

1. **Eduardo coleta:** prints de WhatsApp de clientes agradecendo (opcional — opção B/C)
2. **Claude Design:** nada necessário (iniciais + estrelas são puro CSS)

## Cuidado ético

- Se usar iniciais, deixar claro que são **clientes reais** no texto "O que meus clientes dizem"
- Se fabricar, viola o tom de voz Eduardo ("direto, sem frescura") e pode pegar mal. **Não faz.**

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
