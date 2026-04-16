# LP de Produto — Estrutura de Funil (Padrão Validado)

> Validado na LP /barbearia do AgendaPRO em 16/04/2026.
> Usar como base pra qualquer LP segmentada ou LP de cliente.

## A regra de ouro

**Dor antes de solução.** O cara precisa se reconhecer no problema antes de querer a resposta. Se você mostra features antes da dor, ele não sabe por que deveria se importar.

## Estrutura (10 seções)

### 1. HERO
- Headline que ataca a dor principal (não descreve o produto)
- Subhead com 3-4 diferenciais em linguagem natural (não lista)
- 2-3 stats rápidos com ícone + número forte (mobile mostra só o número)
- CTA primário + CTA secundário (âncora pra seção abaixo)
- Linha de derisking: "14 dias grátis · sem cartão · R$X/mês depois"

### 2. DOR (3 cards)
- Cada card = 1 dor real do público
- Mini-UI realista dentro do card (WhatsApp lotado, agenda bagunçada, financeiro no vermelho)
- Stat badge por card (40+ msg/dia, R$50 perdidos, -32% faturamento)
- Headline da seção que o cara se reconhece
→ CTA inline logo depois

### 3. MOTORES / MECANISMOS (4 cards)
- Cada motor = 1 mecanismo que resolve 1 dor
- Tag + ícone + stat callout + mini-UI de prova em cada card
- Se uma feature é grande (ex: Google Ranking), ela é UM motor — não seção separada

### 4. FEATURE DESTAQUE
- A feature mais visual/diferenciada do produto
- Mini-UI de dashboard/painel com dados realistas
- Copy com 3-4 bullets diretos ao lado

### 5. TIMELINE
- "Como seu dia fica com [produto]"
- 4 momentos do dia (manhã → noite)
- Mini-UI em cada momento
→ CTA inline

### 6. COMPARAÇÃO
- Produto vs concorrentes lado a lado
- Cenário real: "o que acontece quando cancela às 10h"
- Visual > tabela de checkmarks

### 7. PASSOS (onboarding)
- 3 passos simples
- "Hoje você começa. Hoje mesmo."

### 8. PRICING
- Planos com âncora de valor
- "Menos que 2 cortes no mês"

### 9. FAQ
- Ordenado por jornada: risco/preço → funcionalidade → técnico → pós-compra
- CTA de WhatsApp no final

### 10. CTA FINAL MATADOR
- Headline visceral com urgência
- Mini-UI "o que tá acontecendo agora"
- 4 chips anti-objeção (sem cartão, 5 min, R$X/dia, cancela em 1 clique)
- CTA com glow forte

---

## Regras de copy (anti-IA)

- **Frases curtas.** Máximo 2 linhas por parágrafo no subhead.
- **Gíria do público.** Barbeiro: "tesoura", "cadeira vazia", "corte". Salão: "cliente que volta". Usar o vocabulário de quem vai ler.
- **Sem listas paralelas.** "Primeiro... Segundo... Terceiro..." = cara de IA. Misturar comprimentos.
- **Sem adjetivos vazios.** "Revolucionário", "inovador", "transformador" = lixo. Trocar por resultado concreto.
- **Palavras proibidas:** democratizar, exatamente, holístico, sinergia, potencializar.
- **Headline = dor, não descrição.** "Para de perder cliente por WhatsApp" > "A agenda inteligente pra barbeiros"
- **Stats > adjetivos.** "-50% faltas" > "reduz significativamente as faltas"

## Design das mini-UIs

- **Fundo branco (#fff)** dentro de LP escura — contraste = realismo
- **Cores autênticas do produto real:** Google (#4285F4, #EA4335, #FBBC05, #34A853), WhatsApp (#075E54, #ECE5DD, #25D366)
- **Tipografia do produto imitado:** text-[#202124] pro Google, etc.
- **Avatares com iniciais coloridas** em vez de fotos genéricas
- **SVG inline** pra todos os ícones — zero emoji, zero imagem externa
- **Bordas e sombras sutis** — `border: 1px solid #dfe1e5`, `box-shadow: 0 1px 6px rgba(32,33,36,0.28)`

## Seções que NÃO merecem espaço próprio

- Lista de features genéricas (funciona 24h, tudo pelo celular) → viram stat no hero ou bullet nos motores
- Feature que duplica um Motor → absorvida no motor
- "Sobre nós" / "Nossa história" → ninguém lê, não converte
- Depoimentos falsos → prova social toast no canto é mais sutil e crível
