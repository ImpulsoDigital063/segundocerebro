# 09 — Sobre (#sobre, .section-why) — bloco claro sobre fundo escuro

## HTML

```html
<section id="sobre" class="section-why">
  <div class="container">
    <div class="why-layout">
      <div class="why-left-photo">
        <img class="why-photo sf sf-out-top" src="/ASSETS/foto-de-perfil.webp" alt="Fundador do Gravyx">
        <div class="why-photo-overlay">+6 Anos de experiência real de um Designer embutidos</div>
      </div>
      <div class="why-right-content">
        <span class="why-index">SOBRE</span>
        <h2 class="why-title sf sf-out-top">Por que o Gravyx é diferente?</h2>
        <p class="why-subtitle sf sf-out-top">Eu sou designer há mais de 6 anos...</p>
        <div class="why-divider"></div>
        <div class="why-diff-list">
          <div>IA treinada com repertório real de um designer</div>
          <!-- +outros bullets -->
        </div>
      </div>
    </div>
  </div>
</section>
```

## Observações rápidas

### Layout
- **2 colunas:** foto à esquerda + conteúdo à direita (desktop)
- **Inversão de paleta:** aqui é **bloco claro sobre fundo escuro** → quebra visual no meio da página, descansa o olho e chama atenção pro conteúdo.
- Padrão Gravyx = 1 seção clara no meio de tudo escuro (igual ao hero com vídeo escuro → aqui fundo claro com foto).

### Foto com overlay
- Foto do fundador em WebP (otimizado)
- **Overlay textual embaixo** (`.why-photo-overlay`): "+6 Anos de experiência real de um Designer embutidos"
- Função do overlay: **injeta autoridade junto com o rosto** — olho não precisa procurar a credencial, ela vem colada.

### Estrutura do texto à direita
1. **Index label** (`SOBRE` em caixa alta, pequeno) — ancora seção
2. **H2** — pergunta retórica ("Por que o Gravyx é diferente?")
3. **Parágrafo abertura em primeira pessoa** — "Eu sou designer há mais de 6 anos..."
4. **Divisor visual** (`.why-divider`)
5. **Lista de diferenciais** — bullets curtos, sem ícones (texto puro)

### Padrão "autoridade do fundador" Gravyx (memória `reference_playbook_gravyx.md`)
- **Foto + rosto** (não logo genérico) → humaniza SaaS
- **Primeira pessoa** ("Eu sou...") → conversa, não pitch corporativo
- **Credencial específica** ("designer há mais de 6 anos") → número exato + profissão clara
- **Transforma história pessoal em diferencial do produto** ("IA treinada com MEU repertório")
- **H2 = pergunta** ("Por que é diferente?") → quebra passividade, força lead a pensar

### Por que funciona
- SaaS brasileiro tem praga de "somos um time apaixonado" sem rosto → foto + nome + história de vida corta isso
- Cria ponte emocional: "tem um humano real atrás disso, posso reclamar com alguém"
- Transforma objeção "é só mais uma ferramenta" em "é a ferramenta DO designer X"

## Adaptação pra LP Impulso Digital

### LP ID já tem `SobreEduardo.js`
- Componente já existe (identificado na auditoria)
- Autoridade hoje: "3 anos de e-commerce + MPN-On + 'faço como se fosse pra mim'"
- **Precisa reescrever** no molde Gravyx — hoje está bom, com Gravyx fica cirúrgico.

### Proposta de reestruturação completa

#### Layout (portar direto do Gravyx)
- 2 colunas: foto Eduardo à esquerda + texto à direita
- **Inversão de paleta** — bloco claro no meio da LP escura (destaque visual)
- Overlay embaixo da foto: **"+3 anos no e-commerce + operando 3 negócios próprios"**

#### Copy adaptada

**Index label:** `SOBRE`

**H2:** `Por que a Impulso Digital entrega diferente?`

**Parágrafo abertura (1ª pessoa):**
> "Eu sou Eduardo Barros. Trabalho com e-commerce há mais de 3 anos, opero 3 negócios próprios no digital (Impulso Design, MPN-On, AgendaPRO) e construí esses sites usando exatamente o mesmo processo que vou aplicar no seu. Faço como se fosse pra mim — porque é."

**Divisor**

**Lista de diferenciais (bullets curtos):**
- Cada site entregue passou pelo teste dos meus próprios negócios primeiro
- Não vendo 'site bonito', vendo estrutura que conversa com anúncio, Google e WhatsApp
- Fico no projeto até a primeira venda do cliente acontecer, não até o deploy
- Entrego o código aberto — você leva, troca de dev a qualquer hora

### Foto do Eduardo
- **Já tem foto?** Pelo que a auditoria mostrou, sim (foto no Hero.js atual)
- Se a foto do Hero é boa, reaproveitar
- Se for queimada (muita exposição), gerar variação profissional — **Claude Design não gera foto real de pessoa** (só mockup/ilustração). Teria que ser foto real nova.
- **Alternativa:** foto atual com tratamento leve (lighting + crop) — usar qualquer editor

### Localização na LP
- LP ID atual já tem `SobreEduardo.js` posicionado depois dos depoimentos (ordem boa)
- Manter localização, só trocar o conteúdo pelo padrão Gravyx

### Decisão de paleta
- LP ID hoje é fundo escuro (confirmar via `globals.css`)
- **Fazer essa seção com fundo claro** (branco ou off-white) → contraste forte vs resto da LP
- Texto em cinza escuro + accent em azul Impulso

## Cuidado

- **Não inventar credencial.** "+6 anos" do Gravyx é dele. Do Eduardo é "+3 anos". Usar o número real.
- **"Faço como se fosse pra mim" é padrão Eduardo** (já está no SobreEduardo.js atual) — **manter, funciona**.
- **Evitar frases paralelas tipo "Primeiro... Segundo..."** (regra CLAUDE.md) → usar bullets diretos
- **Primeira pessoa é obrigatória aqui** — rosto + "eu" = autoridade humana

## Assets

1. **Foto Eduardo** em WebP otimizado (já deve existir no `public/` da LP)
2. Zero asset Claude Design pra essa seção — foto real manda

**Arquivo salvo. Manda o próximo bloco.**
