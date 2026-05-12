# 14 — Footer

## HTML

```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-logo-col">
        <div class="footer-logo"><img src="/ASSETS/LOGO.svg"></div>
        <p class="footer-copy">Copyright 2026 Gravyx. Todos os direitos reservados.</p>
      </div>
      <div class="footer-links-col">
        <h4>Legal</h4>
        <ul class="footer-links"><li>Políticas de Privacidade</li><li>Termos de Uso</li></ul>
      </div>
      <div class="footer-links-col">
        <h4>Conteúdo</h4>
        <ul class="footer-links"><li>Treinamentos</li><li>Planos</li></ul>
      </div>
      <div class="footer-links-col">
        <h4>Institucional</h4>
        <ul class="footer-links"><li>Depoimentos</li><li>Sobre</li></ul>
      </div>
    </div>
  </div>
</footer>
```

## Observações rápidas

### Layout 4 colunas
- **Col 1:** logo + copyright
- **Col 2:** Legal (Privacidade, Termos)
- **Col 3:** Conteúdo (Treinamentos, Planos)
- **Col 4:** Institucional (Depoimentos, Sobre)

### Simplicidade Gravyx
- Zero social icons (Instagram/Twitter/LinkedIn) — **aposta na LP única** como produto, não em multi-canal
- Zero newsletter signup — **não distrai do CTA principal** (pricing)
- Zero "made with love" ou texto adicional — limpo e direto
- **Mobile:** colunas empilham (grid colapsa pra 1 coluna)

### H4 por coluna
- Agrupamento semântico simples
- Padrão SaaS modesto (não tem 20 links bagunçados)
- Só as 3 categorias realmente necessárias: **Legal + Produto + Empresa**

## Adaptação pra LP Impulso Digital

### Estrutura proposta (4 colunas)

```
┌────────────────┬─────────────┬─────────────────┬─────────────────┐
│ LOGO ID        │ SERVIÇOS    │ INSTITUCIONAL   │ CONTATO         │
│                │             │                 │                 │
│ Impulso        │ Landing     │ Sobre o Eduardo │ WhatsApp        │
│ Digital        │ Page        │                 │ (5599992065961) │
│                │             │ Depoimentos     │                 │
│ CNPJ: XX...    │ Loja Shopify│                 │ Email           │
│                │             │ Portfolio       │ contato@...     │
│ © 2026 Impulso │ Loja Next.js│                 │                 │
│ Digital        │             │ FAQ             │ Instagram       │
│                │ Consultoria │                 │ @...            │
│                │             │                 │                 │
│                │ AgendaPRO   │                 │                 │
└────────────────┴─────────────┴─────────────────┴─────────────────┘
```

### Col 1 — Logo + institucional básico
- **Logo Impulso Digital** em SVG
- **CNPJ** (se tem MEI ou empresa formalizada) — **aumenta credibilidade pra lead maior**
- **Copyright 2026 Impulso Digital** — manter formato Gravyx

### Col 2 — Serviços (links internos)
- Landing Page → `#pacotes` (âncora)
- Loja Shopify → `#pacotes`
- Loja Next.js → `#pacotes`
- Consultoria → `#pacotes`
- **AgendaPRO** → link externo pra LP do AgendaPRO (quando existir)

### Col 3 — Institucional
- Sobre o Eduardo → `#sobre`
- Depoimentos → `#depoimentos`
- Portfolio → `#portfolio`
- FAQ → `#faq`

### Col 4 — Contato (diferente do Gravyx)
- **WhatsApp** — link direto `wa.me/5599992065961` (já identificado como padrão no Hero)
- **Email** — `contato@impulsodigital063.com` (pendente setup DNS via memória `project_email_profissional.md`)
- **Instagram** — handle da Impulso Digital se tiver ativo

### Diferença proposital do Gravyx
- **Adicionar Col de Contato** — LP de serviço precisa canal direto visível. SaaS como Gravyx leva todo mundo pro pricing. LP de serviço tem canais paralelos (WhatsApp é o principal).
- **Manter social icons discretos ou omitir se a conta ainda for fraca** — perfil vazio no footer queima credibilidade.

### Copyright + aviso
```
© 2026 Impulso Digital. Todos os direitos reservados.
CNPJ XX.XXX.XXX/0001-XX
Palmas, TO, Brasil
```
- **Localização geográfica** é diferencial pra SMB brasileira — "é de Palmas" cria identificação regional

### Assets
- Logo SVG Impulso Digital (pode gerar no Claude Design se ainda não tem versão limpa)
- Zero imagem adicional

### Scripts
- Zero JS no footer
- Zero reveal — footer não precisa de animação

### Localização na LP
- Footer já existe no LP ID (`Footer.js`) — **trocar o conteúdo** pelo layout 4 colunas proposto
- Posição: última seção da página

## Cuidado

- **Política de Privacidade + Termos de Uso:** se não tiver páginas reais, os links `<li>` quebram. **Antes de colocar link, ter a página pronta** — mesmo que simples, MVP funciona (Termos da LGPD genérico + LP-local de privacidade).
- **CNPJ só se tiver formalização.** Se ainda é CPF + MEI, decidir se coloca "MEI XX..." ou omite. Omitir é melhor que deixar "CPF exposto".
- **WhatsApp principal está exposto 3x na LP** (Navbar CTA + Hero + Footer) — coerente, não é exagero.

## Observação meta

Esse é o bloco 14. A extração parece estar caminhando pra fim do HTML. **Próximos blocos provavelmente serão:**
- **CSS (globals, keyframes, classes .sf/.sf-in)** — crítico pra portar os efeitos
- **JS inline completo** (já tivemos fragmentos nos blocos 00, 01 e menções em 04/06/07)
- **Paleta + tipografia** completa

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
