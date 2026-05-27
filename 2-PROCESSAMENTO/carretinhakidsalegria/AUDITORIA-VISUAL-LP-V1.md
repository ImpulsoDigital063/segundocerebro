# Auditoria visual brutal — Carretinha Kids Alegria LP v1

**Auditor:** Claude for Chrome
**Data:** 2026-05-13
**Alvo:** http://localhost:3000 (LP v1 · commit `81dd2dc`)
**Solicitante:** Eduardo Barros (Impulso Digital)

**Aviso operacional:** o ambiente do Chrome não permitiu forçar viewport para 390px de verdade (janela trava em ~1456). Mobile foi inferido por estrutura DOM e classes Tailwind (`sm:`). Comparação com o Instagram real `@carretinhakidsalegriaeventos` ficou de fora (precisaria auth + sair do localhost).

---

## 1. Primeira impressão · 3 segundos

**Print mental:** Pop-up de "Festa em casa · Palmas-TO" piscando truncado no topo (aparece e some entre animações de entrada). Headline gigante chunky rosa "A festa pronta vai até você." à esquerda. À direita, carretinha rosa estilizada chapada no chão, com balão, presente, sol e unicórnio espalhados sem hierarquia. Barra amarela fluo embaixo com 4 ícones miniatura. Fundo creme com fadinhas brilhando.

**Veredito:**
- **Parece amador-tentando-ser-profissional.** Não é o pior do mercado — tem grid, fonte boa, espaçamento — mas grita "template Canva 2019 de festa infantil" misturado com "app de berçário". Nada faz o pai/mãe pensar "uau, isso é caro/sério".
- **Não parece confiável.** SVGs flat + zero foto real + zero logo real + zero depoimento + zero prova social = cheira a site fake/dropshipping. Pior: o próprio site admite isso nos cards da galeria ("foto real em breve") = tiro no pé exposto.
- **Parece "festa kids"?** Sim, mas festinha de 3 anos com tema genérico. Não parece festa de 7-10 anos (onde aluguel de carretinha é decisão de R$1k-3k). Público vai achar infantilizado demais pro ticket.

**Comparação com referências:**

| Referência | Em que a LP imita mal |
|---|---|
| Beto Carrero / Hopi Hari | Parques BR usam foto real, ângulos baixos heróicos, gente sorrindo de verdade. A LP substitui tudo por SVG flat. Falha completa de "promessa visual do produto". |
| Cocomelon / Bluey | Cocomelon tem 3D rendering charmoso e personagens com personalidade. Bluey tem traço handmade coerente. Aqui, clipart vetor sem personagem, sem mascote, sem alma. |
| LEGO.com | LEGO usa hero fotográfico com produto + criança real + iluminação de estúdio. A LP usa SVG da carretinha em escala mínima no canto, em vez de tratar o produto como herói. |
| Toca Boca | Toca Boca tem paleta saturada porém curada, traço consistente, micromovimento sutil. Aqui o traço muda de SVG pra SVG (flat 100%, com gradiente, com outline) = patchwork. |

A LP imita pior Toca Boca/Cocomelon (cartoon kids cult-modern) e fracassa por falta de coesão. Pra imitar parque precisaria de foto. Como não tem, escolheu cartoon — e nesse caminho, perdeu.

---

## 2. SVGs cartoon · qualidade visual

**106 SVGs inline** na página (contado via DOM). Insano e sem curadoria.

- **Carretinha do hero:** peça central, fraca. Vagão rosa retangular com 5 cabeças sorrindo em janelas circulares (estilo Cocomelon vagão), bandeirinhas em cima, bolo flutuando sem âncora. Rodas pretas chapadas coladas sem eixo. Bandeirinha do topo atravessa o vagão desalinhada. Parece estagiário em 40min seguindo tutorial.
- **Pula-pula:** castelinho rosa flat com listras. OK, mas é o ícone que aparece em qualquer banco flat.
- **Túnel divertido:** arco azul + arco rosa atrás. Vazio. Pictograma de "entrada de metrô".
- **Escorregador duplo:** dois "L" coloridos. Não parece escorregador, parece gráfico de barras.
- **Tobogã:** "Ω" verde minúsculo. Genérico.
- **Piscina de bolinhas:** dos melhores.
- **LED + caixa de som:** lâmpada + nota musical. Lazy, clichês batidos.
- **Unicórnio do hero:** estilo completamente diferente (gradient roxo→rosa enquanto atrações são flat sólidos). Patchwork.
- **Sol do hero:** anos 90 / Clip Art.
- **Bolo:** reaparece em 4 lugares (hero, CTA final, galeria, footer). Cansativo.
- **15 crianças (Capacidade):** o pior. Bonequinhos cabeçudos com sorriso `:)` simétrico, corpo trapezoide colorido, sem braços, sem pernas. Parece emoji gerado por IA mal calibrada. Cada um com cor diferente = arco-íris caótico sobre gradient pink→purple. Comunica "infográfico de matrículas por turma", não "15 crianças se divertindo".
- **Anfitrião (Olímpio):** rosto redondo, bochechas rosa, camisa pink fluo. Mascote de gerente de loja Renner kids, não dono de carretinha em Palmas. Copy promete "é o Olímpio que responde" e foto é cartoon genérico. Mãe/pai pensa "cadê o cara?".

**Coesão:** zero. 4 estilos coexistindo:
1. Flat sólido sem outline (carretinha, pula-pula, túnel)
2. Flat com gradient (unicórnio, sol)
3. Flat com mini-detalhes (Olímpio, crianças com bochecha)
4. Pictogramas tipo material design (TrustBar)

Comparado a Storyset, Open Doodles ou IconPark: perde feio. Parece 4 packs diferentes do Freepik juntos.

---

## 3. Tipografia

3 fontes: Fredoka (display chunky), Caveat (script), Inter (corpo). Confirmado via `document.fonts`.

- **Hierarquia** funciona até a 3ª camada. Fredoka em H1/H2, Inter no body, ok. Mas a **Caveat aparece 8+ vezes** como eyebrow rosa script ("cabe muita coisa aqui dentro", "simples assim", "sem fila · sem briga · sem espera", "é assim que a festa fica", "dúvidas que a gente recebe", "pronto pra fazer a festa?", "quem te atende", "segurança que se vê"). Cansa. Vira tique. Em LP profissional, script é tempero — aqui virou prato principal junto com Fredoka. Caveat + Fredoka = sobrecarga chunky+chunky.
- **H1 do hero:** o "A" inicial tem mesmo tamanho do "festa". Sem entrada visual, falta respiração tipográfica.
- **"Até 15 crianças brincando juntas."** (Capacidade): branco sobre gradient pink→purple com "15" em amarelo fluo. Amarelo fluo + branco + magenta + roxo na mesma faixa = satura demais. Olho não sabe onde focar.
- **"Você diz"** (card Festa Sob Medida) tem 56px — mesma altura do "3h" e "5h" dos outros cards. Mas "3h" é número curto e "Você diz" tem 8 caracteres = explode o card. Hierarquia inconsistente.
- **Mistura** Fredoka rounded + Caveat handwritten + Inter geometric: brigam. Ideal seria 2 fontes (display + corpo) ou 3 com Caveat muito menor e muito menos frequente.

---

## 4. Cores · paleta

Paleta: pink `#ff5da2`, blue `#3da9fc`, yellow `#ffd23f`, green `#5fd068`, purple `#a06cd5`, orange `#ff8b3d`, cream `#fffaf2`.

**Cacofonia. Provas:**
- TrustBar amarelo fluo logo abaixo do hero creme: pulo de saturação brutal. Sai de creme suave para amarelo táxi de NY em 1px.
- Seção "Como funciona" em `#3da9fc` azul saturado puro: parece CTA do Habib's.
- Seção Capacidade em gradient pink→purple full bleed: Barbie + Twitch misturados.
- Seção Olímpio em amarelo fluo full bleed: terceiro choque na mesma página.
- 3 seções consecutivas: azul Habib's → pink/purple Barbie/Twitch → amarelo táxi. Cansa em 30s.
- 6 cards de pacotes em pastel próprio + galeria com mais 6 cards = 12 retângulos coloridos em sequência. Tinta acrílica de papelaria.
- Saturação pra mãe/pai 28-45 está agressiva demais. Adulto comprador de festa caro quer paleta confiante — pastel sofisticado ou cores fortes mas curadas. Aqui é saturação de "festa de creche pública".
- **Acentos anos 90:** sol amarelo de raios irregulares lembra Office 97. Gradient pink→purple da Capacidade lembra MySpace 2006. Verde fluo do "✓ Vídeo da limpeza" é o verde do MSN.

Regra 60/30/10 não respeitada. Aqui é 25/20/15/15/15/10, todas em saturação alta.

---

## 5. Espaçamento · respiração · ritmo

- **Padding seções desktop:** `py-20 sm:py-28` (80-112px) → razoável. Não é o problema.
- **🚨 BUG GRAVE:** inspeção DOM mostra `section#como-funciona` com height = 222px e `section.atracoes` com height = 366px. Anormalmente curto. A headline "Como funciona a sua festa" está **sobreposta** com a borda do card "Tobogã" e aparece **cortada** ("Como ƒunciona" com letras comidas). **Não é estilo — é bug de layout.** Provável: `overflow-hidden` num container + altura insuficiente, OU shape decorativo com z-index errado tampando o texto.
- **Hero quadro direito:** bagunçadíssimo. Carretinha no chão, bolo flutuando, balão solto, presente no alto, sol no canto, unicórnio entre presente e carretinha. Adesivos colados em mesa de bar. Zero composição.
- **Galeria:** 6 cards "foto real em breve" com ícone minúsculo centralizado em 400x500px = muito espaço vazio, comunica "site em construção".
- **Mobile (inferido):** pacotes empilhados = 1500+px de scroll só pra ler 3 preços. Hero com carretinha = 600px de ilustração antes do form. Morte de conversão mobile. Form de 4 inputs no hero vai parecer questionário do INSS.
- **TrustBar:** 40px de altura, amassada. Ícones (16-20px) ilegíveis. Eyebrow Caveat sem margem acima.

---

## 6. Microanimações · Framer Motion

| Animação | Veredito |
|---|---|
| Sol rotacionando | **DISTRAI** — remover (MySpace puro) |
| Personagens flutuando hero | **DISTRAI** — remover ou reduzir a 1 elemento |
| Balões subindo | **DISTRAI** — opacidade ≤ 20% ou remover |
| Wobble nos cards | **DISTRAI** — substituir por elevation suave (decisão de R$1k+ não quer card que treme) |
| Spring nas crianças | **NEUTRO** — só salva se trocar os bonequinhos |
| Confete CTA final | **NEUTRO** — manter mas sutil |

Pop-up "Festa em casa · Palmas-TO" aparece e some na primeira renderização. Parece glitch, não decisão.

Confete CTA é a 4ª onda de partículas da página (já teve estrelinhas no hero, balões, confete na Capacidade). Cansativo.

---

## 7. Hero específico

**Quadro direito bagunçado:** carretinha no centro-baixo, bolo flutuando à esquerda, presente solto em cima, sol no canto superior direito, unicórnio entre presente e carretinha, balão vermelho à esquerda alta, mais balões coloridos atrás. **7 elementos não-relacionados em diagonal aleatória.** Coleção de stickers de bebê em geladeira. Zero figura/fundo, zero ponto focal.

Hopi Hari ou Airbnb Experiences = 1 imagem dominante. Aqui = 7 ilustrações de tamanhos similares competindo.

**Headline "A festa pronta vai até você.":** copy bom (curto, claro, benefício). Visual: "festa" em pink Fredoka 600 funciona, "você." em azul também. Mas ponto final tem mesmo tamanho da letra → brutalista, parece grito. Faltaria sombra suave, sublinhado script, alguma camada respiratória.

**Form 4 inputs + botão:**
- Label "Pega seu orçamento em 1 minuto 👆" (Caveat + emoji): simpático, ok.
- 4 inputs (Nome, Data, Bairro/cidade, Quantas crianças) em grid 2x2: ok.
- Inputs sem ícone, sem indicação de obrigatório, placeholders cinza claro: profissional minimalista, ok.
- Botão "💬 Quero meu orçamento agora" pink full width: pink na headline + pink no botão + pink na borda do form + pink no card "+ MAIS PEDIDO" + pink em quase todos H2 = **excesso de pink**.
- Área branca do form parece solta sobre o creme, sem afinidade com a carretinha à direita. Quadros esquerdo e direito não conversam.

---

## 8. Comparação com Carretinha real (@carretinhakidsalegriaeventos)

Não foi possível abrir o IG (precisaria login fora do localhost). Crítica baseada em premissas:

- Se o IG real tem 13 posts/vídeos curtos, provavelmente mostra: **carretinha rosa de verdade andando**, **crianças reais brincando**, **som ambiente**, **Olímpio aparecendo**.
- **Risco da LP:** ela vende versão cartoon-idealizada que pode ser mais "bonita" que o IG real MAS dissocia do produto físico. Pai abre WhatsApp, pede vídeo, recebe o real → sente descompasso entre expectativa e realidade.
- **LP mais profissional que o IG?** Provavelmente sim em formato. Mas mais distante do produto — pior pra conversão a médio prazo.
- **Recomendação:** assim que tiver 3-5 fotos reais, substituir os 6 cards da Galeria. Os cards "foto real em breve" estão **destruindo credibilidade**.

---

## 9. Top 5 motivos pra abandonar a página em 5 segundos

1. **Galeria com 6 cards "foto real em breve":** negócio incipiente. Pai com R$2k não confia em quem não tem foto da própria operação.
2. **Bug visual da "Como funciona":** título cortado/sobreposto. Sinal de site quebrado. Pai fecha aba.
3. **Excesso de cores e animações simultâneas:** azul Habib's → pink/purple Barbie → amarelo táxi em 3 seções. Fadiga visual.
4. **Olímpio em SVG cartoon em vez de foto:** copy promete "é o Olímpio que responde", visual entrega avatar genérico. Quebra de promessa imediata, mata o ângulo "atendimento humano".
5. **Carretinha hero também em SVG (sem foto do veículo real):** o produto é a carretinha. Não mostrar foto = loja de carro sem foto do carro. "Isso existe mesmo?".

**Bônus #6:** WhatsApp flutuante verde no canto = mesmo botão verde do header. Redundância. Em mobile cobre o CTA do form.

---

## 10. Veredito final

**Nota visual: 5/10**

Fundação OK (grid, fontes boas, copy direto, CTAs claros) mas execução visual entrega amador. Não é 3 (não tá Comic Sans em fundo cinza) nem 7 (longe). Mediano com pretensão de premium kids que falha.

### O que refazer do zero

1. Substituir **TODOS os SVGs de produto** por fotos reais. Hero = foto da carretinha rosa real em Palmas, com crianças (mesmo desfocadas) brincando.
2. **Foto real do Olímpio** na seção "Quem te atende". Sem cartoon.
3. **Galeria refeita.** Se ainda não tem foto, remove a seção em vez de mostrar 6 placeholders.
4. **Reduzir paleta full-bleed:** das 4 seções coloridas inteiras, trocar 2 por fundo cream com acento (faixa lateral, ribbon, número grande). Só 1 seção full-color-bleed.
5. **Cortar Caveat para 2 usos no máximo** (hero eyebrow + CTA final). Não 8.
6. **Hero com 1 ilustração só** se manter ilustração — ou foto. Tirar bolo, sol, unicórnio, presente, balão solto. Carretinha + confete sutil atrás. Fim.

### O que dá pra salvar

- **Copy.** "A festa pronta vai até você", "Sou eu que recebo seu pedido", "Cabem até 15 crianças ao mesmo tempo". Não mexer.
- **Estrutura de seções.** Hero → TrustBar → Atrações → Como funciona → Capacidade → Higienização → Pacotes → Anfitrião → Galeria → FAQ → CTA → Footer = textbook correto.
- **Form do hero.** 4 campos, botão único, WhatsApp direto. Conceitualmente bem desenhado.
- **Pacotes** com 3 cards e "+ MAIS PEDIDO" no Mega Festa. Pricing OK.
- **Fontes (Fredoka + Inter).** Combinação base boa — demitir a Caveat de 80% dos lugares.

### Top 5 mudanças de maior ROI

1. **Foto real da carretinha rosa no hero** (substituir SVG). Sozinha sobe nota de 5 pra 6.5.
2. **Foto real do Olímpio** (mesmo selfie no celular). Sobe credibilidade em 30s.
3. **Remover a Galeria inteira** até ter fotos OU substituir os 6 cards por 1 vídeo curto do IG (15s, áudio). "Foto real em breve" é **veneno de marca**.
4. **Reduzir paleta full-bleed:** das 4 seções coloridas, deixar só 1. Saturação cai pela metade sem perder energia.
5. **Corrigir bug de layout** da seção "Como funciona". É bug, não estilo. Investigar `overflow-hidden` + altura mínima + z-index das decorações.

---

### Diagnóstico em uma frase

A LP é uma boa wireframe colorida demais com SVGs amadores que falsificam o produto. Tirando ilustração e colocando foto real, passa de "site bonitinho de festa de creche" para "operação séria de festa em Palmas". Hoje, do jeito que está, o pai paga mais barato em concorrente que mostra foto da festa real no IG do que nessa LP — mesmo a LP sendo melhor estruturada.
