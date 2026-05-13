# CIC 3 · Pichau dissecada · 12/05/2026

> **Executado por:** Claude in Chrome
> **Auditado:** pichau.com.br (home + /monte-seu-pc + PDP PC pronto + carrinho + frete) + Reclame Aqui
> **Status:** completo
> **Posicionamento:** Pichau é REFERÊNCIA UX · NÃO concorrente. Replicar lógica de vendas e UX do montador.

---

## TL;DR · 10 linhas

1. **Stack:** Magento custom + Material UI (React) · fonte Roboto · paleta cinza-escuro `#303030` + vermelho `#FF0000` + verde PIX `#009E2A`
2. **Montador em `/monte-seu-pc/{uuid}/edit`** · wizard de **9 passos** · cria sessão UUID compartilhável
3. **Resumo lateral sticky permanente** · total PIX verde gigante + cartão vermelho menor + "Status do Build · X de 8 obrigatórios" + barra de progresso + "Consumo de Energia"
4. **PIX com 15% de desconto** destacado em verde gritante em TODO produto (home, listagem, PDP, carrinho)
5. **PDP mistura** cards explicativos coloridos (CPU laranja, GPU verde) + simulador 3DMark de FPS por jogo + 3 selos institucionais gigantes (Montagem · Entrega · Garantia)
6. **Frete calculado antes de login** · multi-transportadora transparente (Braspress R$68,46 / FAVORITA R$104,31 / Ícaro R$376,44 pra Palmas em 1-9 dias)
7. **Pagamentos:** PIX · Visa · Master · AmEx · Boleto · NuPay (destaque pro Nubank)
8. **6 pendências críticas** viram cards vermelhos individuais no Resumo · UX comunica "o que falta", não "o que sobra"
9. **Reputação Reclame Aqui:** 6.8/10 REGULAR · 9.175 reclamações 6 meses · 23 dias tempo médio · ABERTURA pra Starteq local diferenciar (4.6★ · 67 reviews · atendimento humano em Palmas)
10. **5 elementos prioritários pra clonar:** Montador ★★★★★ · Resumo sticky PIX-destaque ★★ · PDP com selos ★★★ · Frete sem login ★★ · Social proof na home ★

---

## Paleta cravada (CSS computado real)

```css
/* palco neutro */
--pichau-bg:        #303030  /* body · cinza-escuro */
--pichau-bg-deep:   #1F2023  /* footer · preto-azulado */

/* texto */
--pichau-text:      #FFFFFF

/* semântica */
--pichau-action:    #FF0000  /* vermelho · CTAs · departamentos · alertas */
--pichau-pix:       #009E2A  /* verde · preço PIX · botão Comprar · sucesso */
```

**Lógica semântica em 3 camadas:**
- Cinza-escuro = palco neutro
- Vermelho = ação/alerta/identidade
- Verde = conversão/dinheiro/PIX

Adaptação Starteq: **manter preto + amarelo como identidade da marca**, mas adotar o verde PIX `#009E2A` como sinalizador exclusivo de preço PIX. O amarelo Starteq substitui o vermelho Pichau como cor de ação.

---

## BLOCO 1 · Estrutura geral

- **Fonte:** Roboto (com fallback Times New Roman) · sem font custom · pesos 400/500/700
- **Logo:** wordmark "PICHAU" branco · display sans com cantos arredondados · estética "anos 90 gamer"
- **Header:** topo cinza-escuro fino · header principal NÃO é sticky · "smart header" vermelho aparece após scroll
- **Departamentos faixa vermelha** com hambúrguer + 6 links: DEPARTAMENTOS · MONTE SEU PC · PCS GAMERS · BLASTER PRUMO · OPENBOX · EMPRESAS
- **Side-drawer** full-height · 30% tela · abre da esquerda · CTA gigante VERMELHO "MONTE SEU PC" no topo antes das categorias
- **15 subcategorias de Hardware:** Processadores · Placa Mãe · Memórias · Placa de Vídeo · HD interno · SSD · Gabinete · Fonte · Cabos Extensores Sleeved · Coolers e Watercoolers · Ventoinhas · Pasta Térmica · Placas de Som · Drive Óptico · Acessórios + Ver Todos
- **Footer:** 4-5 colunas · contato Joinville · loja física · pagamentos · ajuda
- **Mascote astronauta-pássaro vermelho 3D** ("Blaster Prumo") · investimento em identidade visual narrativa
- **Loja física Joinville-SC** · atendimento (47) 3305-5150

---

## BLOCO 2 · Montador (FOCO MÁXIMO)

### URL e sessão
```
/monte-seu-pc → redireciona pra /monte-seu-pc/{uuid}/edit
```
Cria UUID temporário · salva estado do build · URL compartilhável.

### Layout
- **Coluna esquerda (60%):** configuração + alerta vermelho no topo *"ATENÇÃO! QUALQUER CONFIGURAÇÃO PERSONALIZADA NÃO SERÁ ENVIADA MONTADA!"*
- **Coluna direita (40% STICKY):** Resumo permanente com botão share + Reiniciar (vermelho) + preço PIX verde gigante + Status do Build + Consumo de Energia

### 9 passos do wizard

| # | Componente | Filtros laterais | Badge no card |
|---|---|---|---|
| 1 | **Processador** (11 pgs) | Fabricante · Plataforma · VGA Integrado · Faz Overclock | "VGA Integrado" / "Sem VGA" / "⚡ 125W" / "Cooler Incluído" |
| 2 | **Cooler Processador** (15 pgs) | Fabricante (search-within) | preço PIX |
| 3 | **Placa Mãe** (5 pgs · pré-filtrada) | Fabricante · Tipo de Memória | "SATA: 4" · "RAM: 4" (slots) |
| 4 | **Memória RAM** (20 pgs) | Fabricante (search-within) | "8GB DDR5" · "5600MHz" |
| 5 | **Placa de Vídeo** (skippable se iGPU) | — | preço + clock |
| 6 | **HD & SSD** (38 pgs) | Fabricante | "8 TB" · "7200W" RPM |
| 7 | **Gabinete** (51 pgs) | Fabricante | "Full Tower" · "8x120mm" |
| 8 | **Fonte de Alimentação** (23 pgs) | Fabricante | "⚡ 750W" + badge laranja "Potência Insuficiente" |
| 9 | **Periféricos** (opcional) | chips Monitor · Teclado · Mouse · Headset · Webcam · Cadeira | varia |

### Wizard tab-bar superior
- Linha horizontal com nomes numerados ("1 - Processador · 2 - Cooler · 3 - Placa Mãe...")
- **Ativo:** pill VERMELHO
- **Completos:** "✓ X - Nome" (check vermelho)
- **Pendentes:** cinza
- Após passo 8, botão "PRÓXIMO →" verde vira **"CONCLUIR E REVISAR →"**

### Comportamento

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tela ao clicar Selecionar | Modal full-page ~95% viewport "Selecionar Componente" |
| 2 | Componente indicado | Pill vermelho ativo no wizard |
| 3 | Produtos visíveis | 2 cards acima da dobra + scroll |
| 4 | Filtros | Sempre Fabricante (search-within) + específicos da categoria |
| 5 | Microcopy botão | apenas "+" verde · sem texto · após seleção vira "-" + stepper qty + 🗑 |
| 6 | Ao selecionar | Card destacado azul + total atualiza instantâneo + botão "PRÓXIMO →" sempre disponível |
| 7 | Validação | **Híbrida:** silenciosa pra socket/DDR (some o que não bate) · EXPLÍCITA pra wattagem (badge laranja) · EXPLÍCITA pra cooler obrigatório · EXPLÍCITA pra iGPU (modal) |
| 8 | Sugestões | Ordenação default "Relevância" · sem "recomendado pra esse build" explícito |
| 9 | Resumo | Side-bar permanente sticky · total instantâneo |
| 10 | Total ao vivo | DUAS LINHAS: PIX (verde grande) + Cartão 12x (vermelho menor) |
| 11 | Parcelamento no resumo | "Em até 12x de R$ 1.160,68 sem juros no cartão" sempre visível |
| 12 | Botão limpar | "↻ Reiniciar" vermelho no topo do Resumo |
| 13 | Voltar/trocar peça | Cada componente tem botão lápis verde (editar) + X (remover) |
| 14 | TDP estimado total | Card "Consumo de Energia" no Resumo · ativa quando fonte selecionada |
| 15 | Alerta fonte fraca | Badge laranja "Potência Insuficiente" + card cinza desabilitado + botão "+" inativo |
| 16 | Salvar/compartilhar | Ícone share azul no Resumo · URL com UUID = compartilhável por link · Salvar pra depois exige login |
| 17 | Final do montador | Passo 9 (Periféricos opcional) · botão "PRÓXIMO →" vira "CONCLUIR E REVISAR →" · vai pra tela de revisão antes do carrinho |

---

## BLOCO 3 · Regras de compatibilidade

| Regra | Como trata | Visibilidade |
|---|---|---|
| CPU AMD em Mobo Intel | Lista de placas filtra pra só compatíveis | Silencioso |
| DDR4 vs DDR5 com mobo | Após mobo DDR5, todas as RAMs mostradas são DDR5 | Silencioso |
| Fonte (wattagem) | Calcula TDP estimado · marca fontes abaixo com badge laranja + desabilita | **EXPLÍCITO** |
| Cooler obrigatório (CPU sem box) | Alerta vermelho: *"Cooler é obrigatório para este processador. Produto afetado: 100-100001978WOF"* | **EXPLÍCITO** + obriga |
| Cooler incluído (CPU com box) | Badge "Cooler Incluído" no card | **EXPLÍCITO** informativo |
| iGPU (CPU com VGA integrada) | Modal: *"Processador com VGA Integrado · Você pode continuar para a próxima seleção ou escolher uma placa de vídeo dedicada"* + 2 CTAs | **EXPLÍCITO** modal |
| Slots RAM da mobo | Badge sticky "RAM: X/4" no modal + Resumo | **EXPLÍCITO** contador |
| Slots SATA da mobo | Badge sticky "SATA: X/4" no modal + Resumo | **EXPLÍCITO** contador |
| Form factor mobo vs gabinete | Não confirmado · provavelmente silencioso | — |
| TDP cooler vs CPU | Não confirmado · provavelmente filtra | — |

**Margem de fonte hipotética:** sistema parece exigir mínimo de ~150% do TDP estimado pra garantir headroom.

**Status do build = "barra de uso" indireta:**
- NÃO mostra "build excelente!" / "% gabinete"
- MOSTRA "X de 8 obrigatórios" + cards de alerta vermelho com pendências
- UX prefere comunicar PROBLEMAS em vez de elogiar

---

## BLOCO 4 · PDP padrão (PC Gamer Ryzen 5 4500 + GTX 1060)

### Estrutura

1. **Breadcrumb:** Home / Computadores / PC Gamer / [nome longo]
2. **Galeria esquerda (50%):** foto grande + setas + zoom + 4 thumbnails carrossel
3. **Bloco título central:**
   - Badge azul **"Montado e Certificado"**
   - Título em CAIXA-ALTA
   - Ícone heart + share
   - Marca · ⭐⭐⭐⭐⭐ 0.0 (0 avaliações)
   - Badge verde **"PRODUTO DISPONÍVEL"**
   - SKU visível
4. **Lista de componentes** com ícones de tipo:
   - 1x Processador · 1x Cooler · 1x Placa Mãe · 2x Memória · 1x SSD
   - Link "👁 Existem mais 8 itens nessa configuração · clique para ver"
5. **Botão azul gigante:** *"🔧 ALTERAR CONFIGURAÇÕES E ADICIONAR ITENS"* → leva pro montador com build pré-carregado
6. **Seção 🎯 PERFORMANCE NOS JOGOS:** badge 3DMark + selector "Game" + 2 cards grandes "85 fps · 1080P" e "65 fps · 1440P"
7. **Box preço lateral STICKY (25%):**
   - "de R$ 5.823,19 por" (riscado)
   - "a partir de"
   - **R$ 3.315,31 (verde gigante)** "no PIX com 15% de desconto"
   - "Ou" R$ 3.900,36 (vermelho) "12x sem juros"
   - Botão verde gigante **"🛒 COMPRAR · COLOCAR NO CARRINHO"**
   - Botão outline "💳 FORMAS DE PAGAMENTO"
8. **Banner roxo cross-sell criativo:** *"Na compra deste computador leve junto um energético Pichau!"* (energético da marca)
9. **CTA vermelho gigante:** "SAIBA + SOBRE ESSE PC GAMER ↓"
10. **2 selos visuais lado-a-lado:**
    - "ESTE GABINETE ACOMPANHA VENTOINHA"
    - "ESTE COMPUTADOR SERÁ ENVIADO MONTADO" (vermelho destaque)
11. **3 cards institucionais grandes** com ícones SVG circulares:
    - **MONTAGEM** · "Acompanham BIOS e Drivers atualizados · cabos posicionados pela parte traseira"
    - **ENTREGA** · "Caixa de papelão de ondas duplas exclusiva + fitas de segurança"
    - **GARANTIA** · "Por peça · prazo na NF · sem lacre · pode abrir e modificar"
12. **2 cards explicativos coloridos:** card laranja sobre CPU + card verde sobre GPU
13. **6 cards verticais grandes** com fotos individuais dos componentes principais
14. **OBS:** "Computadores acompanham cabo de alimentação + cabo HDMI · versão Trial do Windows 10"
15. **Seção ⭐ Avaliações:** filtros Ordenar · Filtrar · Buscar · Toggle "Só com fotos/vídeos"

---

## BLOCO 5 · Carrinho + checkout

- **Calcula frete antes de login** · 3 transportadoras (Braspress R$68,46 · FAVORITA R$104,31 · Ícaro Express R$376,44 pra Palmas-TO em 1-9 dias úteis)
- **Multi-transportadora transparente**
- **Pagamentos:** PIX · Visa · Master · AmEx · Boleto · **NuPay (Nubank · destaque)**

---

## BLOCO 6 · Reputação Pichau (Reclame Aqui)

| Métrica | Pichau | Starteq | Diferença |
|---|---|---|---|
| Reclame Aqui | 6.8/10 REGULAR | sem registro | — |
| Reclamações 6 meses | 9.175 | — | — |
| % respondidas | 96% | — | — |
| % resolvidas | 82,2% | — | — |
| Tempo médio resposta | 23 dias | minutos (WhatsApp humano) | **23 dias vs minutos** |
| Google Reviews | — | **4.6★ · 67 reviews** | — |

**Oportunidade clara de diferenciação:** Starteq pode posicionar como *"Atendimento de gente, em Palmas. Não somos call center, somos seu vizinho."*

---

## BLOCO 10 · 5 elementos prioritários pra clonar

| # | Elemento | Como Pichau faz | Complexidade | Adaptação Starteq |
|---|---|---|---|---|
| 1 | **Montador completo** ★★★★★ | 9 passos · UUID · resumo sticky · validação híbrida | 5 estrelas | Já tem 5 passos · expandir pra 8 · adicionar Status do Build + alertas individuais |
| 2 | **Resumo sticky com PIX destaque** ★★ | Verde gritante gigante · cartão menor · barra progresso | 2 estrelas | Já tem · só calibrar verde pra #009E2A + adicionar barra |
| 3 | **PDP com selos institucionais** ★★★ | 3 cards grandes Montagem · Entrega · Garantia | 3 estrelas | Adicionar em PDP de PC pronto + na home |
| 4 | **Calcula frete sem login** ★★ | Multi-transportadora transparente | 2 estrelas | Fase 2 · precisa Asaas + Melhor Envio |
| 5 | **Reputação ATIVA na home** ★ | (Pichau não destaca · oportunidade Starteq) | 1 estrela | Bloco social proof Google 4.6★ · 67 reviews |

---

## Refinamentos pro `/montador` Starteq · cravados após CIC

### P0 (atacar agora · 12/05 madrugada)
1. **Expandir catálogo** · adicionar Cooler · SSD · Gabinete (mínimo 3 SKUs cada)
2. **8 passos no wizard** (CPU · Cooler · Mobo · RAM · GPU · SSD · Gabinete · Fonte)
3. **Card "Status do Build"** no resumo · "X de 8 obrigatórios" + barra de progresso
4. **Cards individuais de alerta** em vermelho com pendências
5. **Badge "Potência Insuficiente"** desabilitando fontes inadequadas
6. **Verde PIX gritante** `#009E2A` no preço PIX

### P1 (depois do build base)
- Modal iGPU quando CPU tem video integrado
- Wizard tab-bar superior numerada
- Modal "Selecionar Componente" full-page
- Filtros laterais Fabricante (search-within)
- Contadores slots RAM/SATA
- Botões lápis (editar) + X (remover) por componente
- URL UUID compartilhável

### P2 (fase 2 · pós Supabase)
- Salvar build no localStorage e/ou conta
- "Alterar configurações" no PC pronto (build pré-carregado)
- Performance 3DMark FPS por jogo
- Cross-sell criativo no PDP

---

**Ver também:** [[STATUS-STARTEQ]] · [[00-CIC-INSTAGRAM-12-MAI]] · [[01-CIC-SITE-EXISTENTE-12-MAI]] · [[03-ARQUITETURA-MONTADOR]] · [[04-ARQUITETURA-SISTEMA]] · [[MEGA-CLAUDE]] · [[VERBO]]
