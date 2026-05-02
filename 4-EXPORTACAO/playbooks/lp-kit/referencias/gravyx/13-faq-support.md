# 13 — FAQ + Support (#faq)

## HTML

```html
<section id="faq" class="section-faq-support">
  <div class="container">
    <div class="faq-support-grid">
      <div class="faq-column">
        <div class="faq-card">
          <h2>Perguntas mais Frequentes</h2>
          <div class="faq-item">
            <div class="faq-question">
              <span>Como funciona o Gravyx?</span>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer"><p>...</p></div>
          </div>
          <!-- +FAQ items -->
        </div>
      </div>
      <div id="contato" class="support-column">
        <div class="support-card">
          <h3>Ainda tenho dúvidas sobre a ferramenta!</h3>
          <p>...</p>
          <a class="btn-neon-wrap" href="mailto:...">Falar com suporte</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Observações rápidas

### Layout 2 colunas
- **Esquerda (maior):** FAQ em accordion puro (CSS `:target` ou JS inline toggle)
- **Direita (menor):** card sticky de suporte com CTA alternativo
- **Sticky:** à medida que o lead rola o FAQ, o card de suporte "anda junto" pra sempre estar visível
- Padrão **"pergunta frequente + escape pra humano se não achou resposta"** — reduz abandono

### FAQ accordion
- `faq-toggle` com `+` / `-` (ou `▾`)
- Provavelmente toggle via classe `.open` + CSS transitions (altura + opacity)
- **Zero lib de accordion** — JS inline com `.toggle()` em ~5 linhas

### FAQ como ferramenta preventiva de objeção
Padrão já mapeado na memória `reference_playbook_gravyx.md`:
> "FAQ preventivo — antecipa objeções reais"

Função: cada pergunta existe pra **matar uma objeção específica** ANTES do lead desistir por dúvida não respondida. Não é "perguntas aleatórias", é **objection handling list**.

### Perguntas típicas do Gravyx (dedução por contexto)
- "Como funciona o Gravyx?" (primeira dúvida prática)
- "Preciso saber desenhar/usar IA?" (objeção de skill)
- "Qual a diferença pro Midjourney/Canva?" (objeção de "já uso outra coisa")
- "Funciona no celular?" (objeção técnica)
- "Posso cancelar quando quiser?" (objeção financeira)
- "Recebo atualizações/novos recursos?" (objeção de obsolescência)
- "Em quanto tempo vejo resultado?" (objeção de expectativa)
- "Posso usar pra clientes?" (objeção de licenciamento)

### Support card (direita)
- **Alternativa ao accordion** pra quem não encontrou a dúvida
- H3 coloquial ("Ainda tenho dúvidas") — reduz fricção de "é bobo perguntar"
- CTA neon (mesmo componente do hero/pricing) — mantém consistência visual
- Link `mailto:` — simples, zero integração de form, zero anti-spam

## Adaptação pra LP Impulso Digital

### FAQ ID já existe (`FAQ.js`)
- Componente já no repo (identificado na auditoria)
- Precisa reescrever as perguntas no molde Gravyx (objection handling, não "dúvidas aleatórias")

### 8 perguntas pra LP ID (proposta)

```
1. Em quantos dias o site fica pronto?
   Até 7 dias úteis a partir da call de alinhamento. Se atrasar, R$100
   de desconto.

2. Preciso pagar mensalidade de plataforma?
   Não. Sites Next.js você hospeda na Vercel grátis. Shopify é plano
   próprio com a Shopify (R$29/mês), sem nosso repasse.

3. E depois que o site estiver no ar, tenho suporte?
   Sim. 30 dias de ajustes inclusos + suporte em até 24h pra bugs e
   dúvidas. Depois disso, ajustes novos são avulsos.

4. O código fica comigo ou fica preso com vocês?
   Você recebe o repositório completo no GitHub. Pode trocar de
   desenvolvedor a qualquer momento — não somos o dono do código.

5. Integra com WhatsApp, Google e redes sociais?
   Sim. Todo site sai com botão de WhatsApp, Google Tag Manager,
   Pixel Meta, Schema pro Google e SEO técnico nativo.

6. Fazem site pra qualquer nicho?
   Atendemos serviços locais, e-commerce e infoprodutos. Se você
   atende um nicho muito específico (ex.: indústria B2B), me chama
   antes pra eu avaliar se faz sentido.

7. E se eu não gostar do resultado?
   Nos 3 primeiros dias você aprova moodboard + wireframe antes do
   código. Se não aprovar, devolvemos 100% sem pergunta.

8. Como funciona o pagamento?
   50% pra começar (trava a vaga) + 50% na entrega do site no seu
   domínio. Aceito Pix, boleto ou cartão em até 12x.
```

### Cada pergunta ataca 1 objeção
| Pergunta | Objeção que mata |
|---|---|
| 1. Prazo | "vai demorar meses" |
| 2. Mensalidade | "fico pagando Wix pra sempre" |
| 3. Suporte pós | "depois some e fica caro" |
| 4. Código | "fico refém do fornecedor" |
| 5. Integrações | "não aparece no Google" |
| 6. Nicho | "não serve pro meu caso" |
| 7. Não gostei | "e se sair ruim?" |
| 8. Pagamento | "caro pagar tudo de uma vez" |

### Support card — adaptação

```
┌──────────────────────────────────────┐
│ Ainda ficou com dúvida?              │
│                                      │
│ Me chama no WhatsApp. Respondo       │
│ pessoalmente em até 24h.             │
│                                      │
│ [  FALAR COM O EDUARDO  ↗  ]        │
└──────────────────────────────────────┘
```

- **"Me chama no WhatsApp"** (não "contato") — tom direto Eduardo
- **"Respondo pessoalmente"** — diferencial autoridade humana vs chatbot
- Link: `wa.me/5599992065961?text=Oi%20Eduardo...` (com mensagem pré-preenchida, já é padrão da LP ID atual)

### Accordion script

Portar direto, vanilla puro em `useEffect`:
```js
// 10 linhas de JS
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
  });
});
```
CSS: altura 0 → auto via `max-height: 0 / 500px` + `transition`.

### Localização na LP
- LP ID atual já tem FAQ em posição — manter
- **Trocar o componente inteiro** pelo layout 2 colunas (FAQ + support card sticky)

### Sticky na coluna direita
- CSS: `position: sticky; top: 80px` no card de suporte
- Evitar que saia da tela enquanto usuário rola FAQ extenso

## Cuidado

- **Perguntas não podem ser genéricas** ("Qual o valor?") — já tá no pricing. FAQ é pra **dúvidas que sobram depois do pricing**.
- **Respostas curtas** (2-3 linhas max) — FAQ cheio de texto longo vira documento, ninguém lê.
- **Pagamento (pergunta 8):** confirmar com Eduardo se o "50% começar + 50% entrega" é padrão real ou se é à vista. Mudar conforme a operação.
- **"Em até 24h" no support:** só prometer se Eduardo aguentar. SLA não cumprido mata credibilidade.

## Assets

- Zero asset novo
- Ícones `+` / `−` unicode ou SVG simples

**Arquivo salvo. Manda o próximo bloco.**
