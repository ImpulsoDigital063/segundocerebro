# 04 — Stats Bar (barra horizontal colada abaixo do hero)

## HTML

```html
<div class="stats-bar-wrapper">
  <div class="hero-stats">
    <div class="stat-item sf sf-out-top">
      <div class="stat-value hacker-num" data-target="600" data-prefix="+">+600</div>
      <div class="stat-label">Pessoas Já Testaram</div>
    </div>
    <div class="stat-item sf sf-out-top">
      <div class="stat-value hacker-num" data-target="700" data-prefix="+">+700</div>
      <div class="stat-label">Projetos Criados</div>
    </div>
    <div class="stat-item sf sf-out-top">
      <div class="stat-value hacker-num" data-target="4000" data-prefix="+">+4000</div>
      <div class="stat-label">Imagens Geradas</div>
    </div>
    <div class="stat-item sf sf-out-top">
      <div class="stat-value hacker-num" data-target="200" data-prefix="+">+200</div>
      <div class="stat-label">Vídeos Gerados</div>
    </div>
  </div>
</div>
```

## Observações rápidas

- **Posição:** barra horizontal colada logo abaixo do hero (separador visual entre "promessa" e "prova").
- **4 stats alinhadas horizontalmente** — padrão clássico de social proof numérico.
- **Atributos `data-target` + `data-prefix`:** indicam animação "hacker-num" (número conta de 0 até o target quando entra na viewport). Provavelmente script vanilla no JS inline.
- **Classe `hacker-num`:** efeito tipo contador com blur/glitch rodando (combina com paleta azul elétrico).
- **Reveal:** classes `.sf .sf-out-top` em cada item → cada stat aparece com IntersectionObserver, provavelmente com delay escalonado via CSS.
- **Tom das labels:** curtas, sem adjetivo ("Pessoas Já Testaram", "Projetos Criados") — resultado quantificável, não retórica.

### Por que "Já Testaram" e não "Clientes"?
- Gravyx é SaaS em pré-lançamento/early adoption — "testaram" é honesto e remove objeção de "ninguém ainda pagou". Estratégia: prova de **uso**, não necessariamente de **faturamento**.

## Adaptação pra LP Impulso Digital

### Opção A — Stats reais da Impulso Digital hoje
```
+3    Anos de E-commerce
+80   Projetos Entregues     (ou número real)
R$0   Sem Manutenção Mensal   (diferencial vs concorrência)
+24h  Suporte em até 24h      (SLA real)
```

### Opção B — Mix de autoridade + produto
```
+3    Anos de E-commerce
+80   Lojas Otimizadas
+60   Leads Mensais Gerados (MPN-On como case)
R$0   Sem Mensalidade
```

### Qual usar?
- Opção A é mais honesta pro estágio atual
- Opção B empurra o case MPN-On ("gera +60 leads/mês") como prova viva — Eduardo já validou esse número
- **Recomendação:** Opção B — puxa o case MPN que é real, mensurável e diferencia da concorrência que só vende "site pronto"

### Copy das labels
- **Evitar "democratizar"** e frases retóricas (regra CLAUDE.md)
- Usar números exatos (regra CLAUDE.md)
- Labels curtas tipo Gravyx: 2-3 palavras

### Efeito hacker-num
- Portar direto — vanilla JS com IntersectionObserver + `requestAnimationFrame` contando de 0 até target
- ~30 linhas de JS, zero dependência

## Localização na LP

- Hoje o LP ID tem `Numeros.js` em algum lugar do meio — **mover pra logo depois do Hero** (barra colada) pra seguir o padrão Gravyx de "promessa → prova imediata".

**Arquivo salvo. Manda o próximo bloco.**
