# DAILY · Vida em Equilíbrio

> Log datado das sessões de trabalho. Mais recente no topo.
> Ao abrir o projeto: ler esta linha + a entrada mais recente.

**Status atual (24/05/2026 22h):** Pacote entregue e deployado · reunião feita · cliente gostou · NÃO pagou ainda · aguardando follow-up.

---

## 2026-05-24 (sábado) · sessão maratona pré-reunião + reunião

### Manhã/tarde — pacote completo levado pra reunião

**Site `vidaemequilibrio-zeta.vercel.app`** atingiu estado de entrega:

1. **Reestruturação lógica home (12 → 10 seções)** pela jornada AIDA:
   `Hero · Cards · Métricas · Manifesto · Espaço · Vale · Corridas · Blog · FAQ · CTA`
   - Removido **Cardápio** redundante da home (vira link pro `/catalogo`)
   - Fundido **Espaço + Como chegar** em uma só seção (mapa CYOX dentro do card Clínica)
   - **Vale-Presente** moveu pra depois do Espaço (cross-sell saudável)
   - Métricas subiu pra antes do Manifesto (qualidade antes de detalhar)

2. **Cards de escolha redesenhados** (GridObjetivos):
   - Day Premium vira **banner destaque escuro warm** (não mais um na fila)
   - 5 cards secundários com **badges contextuais** (Mais procurada · Pra começar · etc)
   - **Pílulas duração + indicação** sob cada título
   - **CTA duplo**: "Ver detalhes" + botão circular WhatsApp pré-formatado
   - Brinde esfoliante destacado em bloco border-left

3. **5 fixes mobile pré-reunião:**
   - Hero `object-position` puxa foco pras mãos da terapeuta no mobile
   - Tap target WhatsApp 36×36 → 44×44 (regra iOS)
   - Mapa CYOX vira 4:3 no mobile (mais alto · ruas legíveis)
   - Vale Day Premium vira primeiro no mobile (`order-first md:order-none`)
   - **StickyMobileCTA** nova · barra fixa bottom com WhatsApp · aparece após 280px scroll

4. **Foto editorial Leandro** (script `gen-leandro.mjs`):
   - Eduardo mandou print selfie · Flux 1.1 Pro gerou cena editorial warm · `codeplugtech/face-swap` preservou rosto fidedigno
   - Aplicada no Manifesto · sizes responsivo · objectPosition 50%/30%
   - `public/img/leandro-manifesto.jpg` (150 KB · 4:5 vertical)
   - Custo: ~$0.16 Replicate · cravado em [[reference-workflow-face-swap-retrato-cliente]]

5. **Atenuação "só mulheres" no front-stage** (feedback mãe do Eduardo):
   - Hero eyebrow: remove "feminina"
   - Manifesto h2: "dedicado ao cuidado feminino" → "cuidado real, presente, com tempo dedicado a você"
   - Manifesto stat #3: "Exclusivo · Público feminino" → "Dedicado · Escuta antes da manobra"
   - FAQ "Por que atende só mulheres?" → "Quem pode agendar?" (resposta convidativa)
   - Footer descrição enxuta sem "feminina"
   - **Mantido:** metadata SEO + llms.txt + Schema.org (indexação) · cravado em [[feedback-atenuar-excludente-no-front-stage]]

6. **Profundidade visual** (5 camadas cinematográficas):
   - `NoiseOverlay` grão de filme global (CSS · `print:hidden` pra não inflar PDF)
   - `Parallax` Hero foto + Manifesto still
   - `Spotlight` mouse · Manifesto + WhatsAppCTA + ComoChegar
   - `TiltCard` 3D nos 5 cards secundários do GridObjetivos
   - `GlowOrb` em pontos-chave (Day Premium · Vale destaque · cantos do WhatsAppCTA)
   - Mobile: distance 55% · duration 0.6s · Spotlight/Tilt desligam

7. **PDF plano de negócio** (`out-artes/plano-de-negocio.pdf` · 1.5 MB):
   - Capa com **logo oficial completa** (LogoVariacaoA showTagline=true · burgundy deep)
   - **Pricing 50/50:** entrada R$998,50 + saldo flex (à vista entrega OU 3× cartão)
   - **★ Bônus incluso:** 12 meses hospedagem grátis (economia R$600-1000/ano)
   - **Texto cinza escuro neutro #1A1A1A** no corpo em @print (corrigido 2x · imprime sólido em qualquer impressora · warm marrom dependia de tinta colorida)
   - **Burgundy** mantido só em h2 + strong + table headers (acentos de marca)
   - @page margins 18mm → 13mm · font-size 10.5pt → 9.5pt · economia de papel
   - Callouts/quotes em print: fundo transparente · só border-left colorida (economia tinta)

### Noite — reunião

Eduardo levou o pacote pra Leandro. Reportou:
- **Conseguiu explicar bem** · sente que está melhorando como vendedor
- Leandro **gostou do projeto**
- **NÃO fez o pagamento**
- Disse que vai "ver como consegue a grana e retornar"

**Diagnóstico:** lead MORNO. "Vou ver e retorno" pode ser (a) organizar fluxo de caixa, (b) comparar opções, ou (c) saída polida pra não dizer não na hora. Engajamento durante a reunião sugere (a) ou (b).

**Sequência de follow-up sugerida:**
- **Dia 0-1** (hoje à noite / amanhã cedo): WhatsApp curto · link site + PDF · sem cobrança
- **Dia 3**: print do site · "tô finalizando ajustes finais · em 5 dias úteis tá no ar" · urgência sutil
- **Dia 7**: ligação · "tá fazendo sentido seguir? algo travando?"

Cravado em [[feedback-followup-premium-pos-reuniao]].

### Pendentes não-críticos

- Posts draft do blog (10 títulos visíveis · publicar 1/mês)
- Foto Leandro versão extra (se quiser cena B "em ação")
- Compra do domínio vidaemequilibrio.com.br (atualmente só zeta.vercel.app)
- Prova social (aguarda primeiros depoimentos reais · posição reservada entre Espaço e Vale)
- Calendário Corridas com dados reais (atualmente "em planejamento 2027")

### Tasks mestre da sessão (concluídas)

- #51 Audit site live · #54 Como Chegar · #55 PDF preto/seção17 · #56 Vale-Presente · #57 PDF respiro
- #58 Catálogo PDF · #59 Setup R$1997 com valor · #60 Modalidade Clínica×Domicílio
- #61 Catálogo menu + blog estrutura · #62 Blog expandido com fontes · #63 Anti-gravidade
- #64 Hero foto + busca + hambúrguer · #65 Profundidade visual · #66 Lógica home AIDA
- #67 PDF 4 frentes pré-reunião · #68 Retrato Leandro

Pendente futuro: #52 artes Canva · #53 WhatsApp Business artes
