# PLANO DE CONTEÚDO — MASTER (Impulso Digital / @edubarrosch)

Varredura de tudo que a gente construiu pra virar conteúdo. Iniciado 09/06/2026.

## Posicionamento (o fio condutor)
**"Subi um SaaS de verdade — com clientes pagantes — construído inteiro no Claude Code, sozinho, do meu jeito."** Não é tutorial de teoria. É bastidor de quem FAZ: o código, os bugs, as vendas, os perrengues, as decisões de produto. Público: dev indie / quem quer subir SaaS + dono de negócio (salão/barbearia). O diferencial que ninguém tem: eu mostro os DOIS lados (quem constrói E quem usa).

## O ativo (matéria-prima)
- **AgendaPRO** — SaaS de gestão pra salão/barbearia. ~1 mês em produção, clientes reais pagando (barbearia, salão de tranças, nail). Agenda, comandas, fidelidade, produtos/estoque, comissão, financeiro, billing (Asaas), multi-tenant, mobile + desktop. **Tudo via Claude Code.**
- **System Palace / Palace Nail Spa** — supervisor, migração de dados, comissão, financeiro.
- **Aura** — design/carrosséis, pipeline próprio (Flux + sharp/SVG + Remotion).
- **Vida em Equilíbrio (Leandro)** — landing page, pivot de marca.
- **Zilanda / EV Suplementos** — LP farmacêutica.
- **Meta:** o operador (Eduardo) + as ferramentas (Claude Code, Verbo, CIC, Chrome, Design).

---

## PILARES + ideias de conteúdo (cada uma = gancho)

### Pilar 1 · Bastidor de um SaaS real (build-in-public)
- "Tenho um SaaS com clientes pagantes. Construí sozinho. Esse é o bastidor."
- "1 mês no ar: 149 atendimentos, 119 clientes num único cliente meu." (sem citar nome)
- "Como é manter um sistema que clientes REAIS usam todo dia (e quebra de verdade)."
- "O dia que o sistema de um cliente travou e ele parou de receber agendamento — e eu nem sabia." (o caso do modal ilegível)

### Pilar 2 · Bug & fix (lições que valem dinheiro)
- ⭐ "Meu cliente recebeu R$4.210. O sistema mostrava R$2.500. Cadê os R$1.710?" (bug dos 40% · arquivo dedicado)
- ⭐ "Os dados estavam 100% certos. O relatório é que mentia." (coluna fantasma → query vazia silenciosa)
- "Uma comanda de R$195 com R$754 registrados: o bug de pagar e reabrir."
- "Rate-limit em memória no serverless é ilusão — reseta a cada cold start."
- "Bug de fuso horário: depois das 21h, a agenda pulava pro dia seguinte."
- Lição transversal: "Tela verde NÃO é prova. Só ler a row no banco é." (prova-na-fonte)

### Pilar 3 · Segurança (a série que já tem carrossel)
- ⭐ "Um bot criou 5 contas no nosso SaaS em 6 segundos." (carrossel PRONTO)
- "Sua anon key é pública. O endpoint de signup do Supabase vem aberto por padrão."
- "Achei o furo de segurança olhando taxa de conversão, não log de firewall."
- "CAPTCHA de graça existe (Cloudflare Turnstile) — e é invisível."

### Pilar 4 · Decisão de produto / UX
- ⭐ "Meu cliente não tava errado. Meu sistema é que só entendia UM jeito de operar." (agenda vs balcão)
- "Quando um cliente novo entra, ele te ensina um modelo de negócio que você não tinha pensado."
- "Receita conta por data de PAGAMENTO, não de atendimento — e por que isso quebrou um número."
- "Botão azul vs verde: por que a cor de um botão virou decisão de produto."

### Pilar 5 · IA construindo de verdade (Claude Code) — o meta-ângulo
- "Construí um SaaS inteiro conversando com uma IA no terminal. Em português."
- "Não decorei programação. Fui montando peça por peça com a IA — e hoje roda na raça."
- "Como eu uso o Claude Code pra achar bug, consertar e fazer deploy — ao vivo."
- "A IA não substitui o operador. Ela é o par de criação da madrugada."

### Pilar 6 · Operação / vendas (o lado dono de negócio)
- "Auditei 1 mês de uso real de um cliente. Achei 6 bugs — e R$1.710 que ele nem sabia que tava recebendo."
- "Como converti um lead frio: liberei 7 dias grátis em vez de empurrar pagamento."
- "Salão99 fecha 31/05 — e o que isso abre pra quem tá migrando." (oportunidade)
- "PDF da comanda por WhatsApp: o detalhe que o concorrente não tem."

### Pilar 7 · Design / criação (Aura + pipeline)
- "Como eu faço carrossel que não parece feito por IA (texto nítido via SVG, fundo cinematográfico via Flux)."
- "Foto de pessoa = real. IA só pra still-life. Por quê." (regra cravada)
- "Meu pipeline de carrossel: Flux pra imagem + sharp/SVG pro texto + zero emoji."

---

## Como esse doc evolui
- Cada conteúdo que sair daqui vira 1 arquivo em `5-CONTEUDOS/` + linha na tabela do INDEX.
- Os ⭐ são os mais fortes (gancho que prende) — prioridade de produção.
- Produção dos posts: pipeline verbo-design → `Desktop/Posts Impulso/<campanha>/`.
- Próximo passo possível: mineração EXAUSTIVA projeto por projeto (Palace, Aura, VE, Zilanda) pra puxar histórias específicas — dá pra rodar como varredura multi-agente se quiser profundidade.

## Regras (valem nos posts)
- Zero emoji nos slides (SVG). Tom direto, história real, sem teoria.
- Não expor dado sensível de cliente (nome, valores que identifiquem) — "um cliente barbearia", etc.
- Mostrar os dois lados: quem constrói + quem usa.
