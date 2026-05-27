# 02 · PRINCÍPIOS · Verbo Design

> Regras cravadas que NÃO se quebram. Cada uma veio de erro real validado por Eduardo · Atualizado 16/05/2026.

---

## 🚫 Os 8 invioláveis

### 1. NUNCA emoji decorativo · sempre SVG
**Cravado em:** `[[feedback-sempre-svg-nunca-emoji]]`
**Por quê:** Emoji em peça premium derruba percepção · vira amador.
**Aplicar:** Ícones via SVG inline em `components/Icons.tsx`. Emoji só funcional (📍 pin, ✅ check) e cirúrgico (max 1-2 por peça).

### 2. NUNCA picsum / foto random em LP real
**Cravado em:** `[[feedback-nunca-picsum-random-em-lp-real]]`
**Por quê:** Foto random sem relação com produto destrói credibilidade.
**Aplicar:** Stock curado (Unsplash com busca específica · Flux gerado · foto do cliente). Nunca random.

### 3. NUNCA mascote / objeto antropomorfizado IA
**Cravado em:** `[[feedback-nunca-mascote-objeto-antropomorfizado-ia]]`
**Por quê:** Objeto com rosto humano via Flux/SDXL = uncanny valley garantido.
**Aplicar:** Pessoa fictícia ou animal/produto neutro. Sem rosto humano em coisa que não é gente.

### 4. Validar referência visual antes de codar
**Cravado em:** `[[feedback-validar-referencia-visual-antes]]`
**Por quê:** Sem URL/print/elemento exato pra copiar pixel a pixel, qualquer edit é chute.
**Aplicar:** Antes de mexer em design, abrir referência lado a lado (componente da LP, post inspiração, brand kit do cliente).

### 5. Uma seção por rodada em design
**Cravado em:** `[[feedback-uma-secao-por-rodada]]`
**Por quê:** Empilhar 5+ features visuais simultâneas = perdeu controle do que mudou.
**Aplicar:** Entregar 1 polida → validar → próxima. Nunca refatorar 4 slides ao mesmo tempo sem feedback.

### 6. Rejeição visual = perguntar antes de mover
**Cravado em:** `[[feedback-rejeicao-visual-perguntar-antes]]`
**Por quê:** "Tá longe" / "não ficou bom" sem diagnóstico = chuto cego.
**Aplicar:** Diagnóstico estruturado primeiro. Ofertar 3-4 hipóteses pra Eduardo priorizar. SÓ DEPOIS executar.

### 7. Arco AIDA em todo carrossel
**Cravado em:** `[[feedback-arco-aida-carrosseis]]`
**Por quê:** Sem arco narrativo, slides viram lista de fatos · cliente arrasta até desinteressar.
**Aplicar:** Slide 1 ATENÇÃO (hook) → 2 INTERESSE (analogia leigo+expert) → 3 EDUCAÇÃO (gráfico/dados) → 4 DESEJO (caso real) → 5 AÇÃO (CTA + voz primeira pessoa).

### 8. Elementos só entram se encaixarem com o fundo
**Cravado em:** 16/05/2026 durante Carrossel GB Nutrition V4
**Por quê:** Eduardo: *"esses elementos se forem introduzidos é pra encaixarem com fundo"* — produto recortado colado num cenário = parece bug, não design.
**Aplicar:** Todo cutout/elemento sobreposto precisa de:
- **Drop shadow real** (sombra elipse abaixo · `radial-gradient(ellipse, rgba(0,0,0,0.6))` com blur)
- **Glow cyan/cor da marca** (`drop-shadow(0 0 30px rgba(cor,0.25))`)
- **Escala balanceada** (não invade conteúdo, não some)
- **Rotação leve** (5-12°) pra parecer "natural"
- **Posicionamento contextual** (na "prateleira" da loja · saindo da caixa · ao lado do celular)

### 9. CRIVO VISUAL · elemento só entra se SERVIR a mensagem
**Cravado em:** 16/05/2026 durante Carrossel GB Nutrition V5
**Por quê:** Eduardo cravou: *"qual o sentido disso? o que tá comunicando? nesse caso tá mais atrapalhando do que comunicando"* — produto Hórus Max Titanium ao lado do hook "A LOJA TÁ NO AR" não reforçava nada, só decorava competindo com o texto.
**Antes de adicionar QUALQUER elemento, perguntar:**
1. **Qual a mensagem central deste slide?** (1 frase)
2. **Esse elemento REFORÇA ou COMPETE com a mensagem?**
3. **Sem ele, a comunicação fica mais clara ou mais pobre?**
4. **Tem RAZÃO de estar AQUI especificamente** (não em outro slide)?

Se qualquer resposta comprometer a mensagem central → **NÃO ENTRA**.

**Casos cravados:**
- "A loja tá no ar" → elemento certo seria mockup site / print do catálogo / prateleira virtual sendo "ligada" — algo que comunique **acesso/abertura**. ❌ Produto aleatório.
- "Quanto a TUSD você paga ano a ano" → elemento certo é gráfico de barras. ❌ Cutout de painel solar.
- "Quer ver quanto economiza no seu caso" → elemento certo é mockup celular/calculadora. ❌ Caixa de entrega aleatória.

**Regra mental:** "Menos é mais quando o foto/texto já comunica o essencial."

---

## 🎨 Princípios de composição cravados

### Hierarquia editorial Anton
- Headline em **Anton** (condensed pesado · 70-110px) · cor branca ou cyan
- Subhead em **Inter** 700/800 · 30-40px
- Body em **Inter** 400/500 · 20-26px
- Labels em caps com letter-spacing 2-3 · 13-22px

### Watermark tipográfico atrás
- 1 palavra-chave por slide em Anton gigante (300-540px)
- Opacity ~5-8% da cor de acento
- Posicionada cortando · letterSpacing negativo
- Cria profundidade sem competir com conteúdo

### Multi-camadas (estilo Photoshop edit)
Mínimo de **8 camadas** por slide premium:
1. Foto base (background)
2. Overlay gradient diagonal asymmetric (não linear plano)
3. 2 glows da cor de acento em pontos opostos
4. Cutout produto / foto secundária (com sombra + glow)
5. Stencil tipográfico decorativo
6. Linha diagonal cortando (`linear-gradient` 90deg + transform rotate)
7. Frame angular rotacionado (badge "0X/05")
8. DotGrid textura
9. LogoBlock identidade
10. Conteúdo (texto + indicador 1-5)

### LogoBlock padronizado
- Mesma posição em TODOS os slides do carrossel (top-left default)
- Logo perfil (com fundo cream sutil) em dark zones
- Logo sem fundo em light zones
- Nome em Anton + tagline pequena em caps

### Indicador 1-5 minimalista
- Bolinha alongada da cor de acento (slide atual)
- 4 dots cinza/transparent (outros slides)
- Footer · sempre presente

---

## ✍️ Princípios de copy cravados

### Tom dúplice · leigo + expert
**Cravado:** 15-16/05 durante carrossel Aura Fio B + GB
**Aplicar:** Explicar termo técnico DENTRO da analogia.
- ❌ "A TUSD é a taxa de uso do sistema..."
- ✅ "Pensa assim: você gera energia, joga na rede. Agora a Energisa cobra uma taxa nessa troca. Chama Fio B (TUSD)."

### Voz primeira pessoa do fundador
**Aplicar no slide AÇÃO:** "Eu sou o Renato" · "Personal aqui:" · "O que eu indico pros meus alunos"
**Evitar:** "A empresa", "nossa missão", "somos parceiros"

### Sem corporativês cravado (palavras proibidas globais)
- exatamente · absolutamente · potencializar · alavancar
- democratizar · excelência · sinergia
- "sua melhor versão" · "transformar sua vida" · "nossa missão"

### Sem urgência fabricada
- ❌ "ÚLTIMA CHANCE" · "OFERTA IMPERDÍVEL" · "VAGAS LIMITADAS"
- ✅ Urgência factual com cronograma público ("Fio B 60% em 2026 → 100% em 2029")

---

## 🎯 Princípios de processo cravados

### Verbo é o operador, não UI
**Cravado:** `[[feedback-verbo-operador-paradigma]]`
**Aplicar:** Eduardo pede no chat → entrego pacote pronto em `Desktop/post <cliente>/<campanha>/`. UI tipo `/copy-gen` é bonus pra Renato/Olímpio.

### Destrinchar decisão por decisão
**Cravado:** `[[feedback-destrinchar-decisao-por-decisao]]`
**Aplicar:** UMA decisão isolada por vez. Não bombardear com 10 perguntas. Se preciso múltiplas escolhas, usar `AskUserQuestion` com max 4 opções.

### Filtrar recomendações de outros agentes
**Cravado:** `[[feedback-filtrar-recomendacoes-de-outros-agentes]]`
**Aplicar:** Antes de repassar output de CIC/Chrome/sub-agent, checar contra feedbacks cravados. **Eu assino, não eles.**

### Não inventar fatos sobre pessoas
**Cravado:** `[[feedback-nao-inventar-fatos-sobre-pessoas]]`
**Aplicar:** Papel/relação de pessoas que Eduardo cita = literal. Não inflar verbos, não dramatizar.

### Verificar deploy antes de afirmar
**Cravado:** `[[feedback-verificar-deploy-antes-de-afirmar]]`
**Aplicar:** Antes de dizer "tá no ar", WebFetch no domínio. Vercel pode estar buildando.

---

**Ver também:** [[VERBO-DESIGN]] · [[01-STACK-FERRAMENTAS]] · [[03-WORKFLOW]]
