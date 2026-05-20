# Painel Profissional — Conhecimento Cravado

> *"Painel SaaS não é app de marketing. É ferramenta operacional. O dono entra todo dia, mexe em dinheiro, mexe em gente, mexe em horário. Cada clique pesa."*
>
> Cravado em 19/05/2026 após maratona AgendaPRO replicando padrões do Salão99 pra Palace Nail Spa Macaé. Esse documento é o padrão mental pra qualquer painel SaaS futuro: AgendaPRO, Starteq, e os próximos.

---

## Filosofia

### Painel é ferramenta, não vitrine

Um painel SaaS não tem o trabalho de impressionar. Tem o trabalho de **fazer o dono operar o negócio dele em menos cliques que o concorrente**. Toda decisão visual, arquitetural ou de UX se filtra por essa pergunta única:

> *"Isso reduz cliques pro dono ou empilha mais um passo?"*

Hero card animado bonito que toma 200px de tela e mostra info redundante = **empilha**. Tabela densa com 8 colunas relevantes que o dono pode escanear em 1 segundo = **reduz**. Toda escolha visual é julgada por isso.

### Operação > Configuração

A primeira coisa que o dono faz ao logar **NÃO é configurar**. É **olhar o que rolou** (recebido hoje, atendimentos agendados) e **fazer a próxima ação** (faturar, lançar despesa, cadastrar cliente). Configuração existe pra ser feita 1 vez por mês, talvez. Operação acontece 50 vezes por dia.

Painel orientado a operação:
- Página Início mostra **estado** (KPIs do dia · próximos atendimentos · ranking semana)
- Atalhos pras 4-5 ações que o dono faz todo dia
- Configuração mora atrás de um clique, agrupada num grupo "Configurações" no fim da sidebar

Anti-pattern: dashboard cheio de gráficos sem ação. Cliente olha, pensa "bonito" e fecha. Painel morre.

### O dono não treina, não lê manual, não assiste tutorial

O dono médio é **competente operacionalmente, ocupado, e impaciente**. Ele não vai assistir 3 minutos de vídeo pra entender o painel. Se na 1ª tela ele não souber o que clicar, ele desinstala.

Padrão derivado:
- **Labels em português direto** — não "Manage Customers", "Gestão de Clientes"
- **Empty state com CTA explícito** — não "Nenhum item encontrado", mas "Cadastre seu 1º cliente · ele entra na lista assim que existir"
- **Tooltip em ícone solto** — nada deve ficar adivinhando
- **Confirmação só pra ações destrutivas** — não pra cada salvar. Padrão: confirma deletar, não confirma editar

### Sistemas concorrentes são professores grátis

Antes de inventar UX, **audita o concorrente**. Salão99 existe há anos, foi usado por milhares de salões, evoluiu sob pressão real. Replicar os padrões dele NÃO é falta de criatividade — é aproveitar produção de UX paga por outros. Inovar onde faz diferença (taxa de cartão, fidelidade ponto-fechada, recepcionista universal). Replicar onde já tá resolvido (tabela de vendas, drawer de cliente).

> *"Padrão Salão99"* virou expressão interna no AgendaPRO. Significa: testado, validado por uso real, padrão de referência.

### Mobile e desktop são experiências separadas no mesmo codebase

**Cravado em 19-20/05/2026** após sessão paralela Olímpio (mobile) + Palace (desktop).

O painel SaaS atende **dois fluxos simultâneos**:
- **Mobile** (`agendapro.net.br` no AgendaPRO) — dono opera no celular · clientes em produção real
- **Desktop** (`agenda-pro-seven.vercel.app`) — versão em construção pra negócios maiores · estética/funcionalidades inspiradas no Salão99

**Regra dura:** ajuste pra resolver problema do mobile **NÃO PODE** alterar o desktop, e vice-versa. Tolerância zero pra regressão cruzada — cliente real do mobile abre o app no dia seguinte e tá quebrado por causa de fix do desktop.

**Como respeitar tecnicamente:**

1. **Toda classe Tailwind sem prefixo afeta os 2 lados.** Trate isso como contrato.
2. **Ajuste só pra mobile:** classe sem prefixo + **anular explicitamente no `sm:`**:
   ```tsx
   <div className="flex-1 min-h-[280px] sm:min-h-0" />
   ```
3. **Ajuste só pra desktop:** classe com `sm:` ou maior. Mobile não vê.
4. **Quando o ajuste é grande (hero, layout):** duplicar 2 blocos JSX. `sm:hidden` pra mobile · `hidden sm:block` pra desktop. Garante isolamento perfeito.
5. **Modal vazando estilo entre breakpoints** → refatorar pra `createPortal(node, document.body)` com guard SSR via `useEffect`. Renderiza fora da hierarquia DOM do parent → cada lado controla seu próprio layout sem herdar contexto.
6. **Commit message menciona em qual breakpoint a mudança atua** — outras sessões/Verbos paralelos precisam entender o escopo.

**Direção futura:** sistema device-aware com detecção real do aparelho (não só CSS responsive) pra performance. Mobile não baixa bundles desktop e vice-versa. Implementar via `headers()` server-side no Next ou dynamic imports condicionais.

---

### Universal sempre · personalizado nunca

Toda feature do painel é **universal** (vale pra qualquer cliente do AgendaPRO/Starteq). Não inventa categoria de despesa só pra Palace (`uniforms`). Não escreve copy com nome do cliente. Não cria fluxo especial pra 1 cliente "porque ele pediu".

A exceção é: **toggle por business** (configuração que o dono ativa) ou **dado preenchido pelo dono** (sua categoria customizada cadastrada na configuração).

Memory cravada: [[universal-nao-personaliza-cliente]].

---

## Arquitetura

### Shell Desktop (≥ lg / 1024px)

```
┌────────┬──────────────────────────────────────────┐
│        │  Header sticky (título · subtítulo · ações) │
│ Side   ├──────────────────────────────────────────┤
│ bar    │                                            │
│ fixa   │           Conteúdo principal               │
│ 256px  │           max-w-7xl                        │
│ (72    │           px-8 py-6                        │
│  col.) │                                            │
│        │                                            │
└────────┴──────────────────────────────────────────┘
```

### Shell Mobile (< lg)

```
┌──────────────────────────────────────────┐
│  Header normal (sem sidebar fixa)        │
├──────────────────────────────────────────┤
│                                            │
│           Conteúdo                         │
│           max-w-lg · px-4                  │
│                                            │
├──────────────────────────────────────────┤
│  BottomNav fixed (4-5 ícones + label)    │
└──────────────────────────────────────────┘
```

**Regra dura:** mobile e desktop usam o **mesmo backend** (mesmas APIs, mesmos componentes server). O que muda é layout (`lg:hidden` / `hidden lg:block`) e densidade. Nunca duplicar lógica.

### Sidebar (desktop)

- **Largura colapsada:** 72px (só ícones · tooltip ao hover)
- **Largura expandida:** 256px (ícone + label)
- **Posição:** `fixed left-0 top-0 bottom-0 z-40`
- **Background:** `var(--admin-surface)` · borda direita 1px
- **Brand area** no topo: logo do business + nome (truncate)
- **Grupos:** uppercase header pequeno · 2-8 itens cada
- **Item ativo:** background accent · texto accent · indicador visual sutil
- **Badge:** número (pendentes/claims) ou pill "Em breve"

**Ordem canônica de grupos:**
1. **PAINEL** — Início · Atendimentos · Clientes
2. **FINANCEIRO** — Vendas · Despesas · Comandas · Fluxo de Caixa · Remunerações · Notas Fiscais
3. **CATÁLOGO** — Serviços · Produtos · Pacotes
4. **EQUIPE** — Colaboradores · Horários
5. **CONFIGURAÇÕES** — Negócio · Fidelidade · Maquininhas · Bloqueios · Aparência · Fichas Modelo · WhatsApp · Divulgação · Importar
6. **OUTROS** — Relatórios

Cada item conhece seu link e sua tab (se aplicável). Tab-aware match: `pathname === '/admin/configuracoes' && currentTab === 'maquininhas'`.

### Header de View

Cada página tem header com:
- **Título grande** (`h2` semibold) à esquerda
- **Sub-título cinza** logo abaixo (nome do business)
- **Botão "voltar"** se for sub-página (`←`)
- **Ações à direita** (refresh · share · settings · theme toggle)

Sticky em mobile (não scroll com conteúdo). Em desktop pode ser estático se a sidebar fixa já dá orientação.

---

## Padrões UX cravados

### Tabela operacional

- **Densidade média** — não muito apertada (cansa olho), não muito espalhada (perde overview)
- **Sem zebra striping** (Salão99 não usa, fica mais limpo)
- **Avatar circular cinza forte** mesmo sem foto — placeholder com inicial(is)
- **Checkbox bulk** à esquerda quando ação em massa existe
- **Kebab `⋮`** no fim da linha pra menu de ações (editar/cancelar/etc)
- **Linha inteira clicável** pra abrir drawer/modal — não só o nome
- **Header cinza claro** (não accent · não bold demais)
- **Coluna de valor monetário** sempre à direita, alinhada
- **Coluna de data** com formato curto ("13 abr") + tooltip com formato longo

### Filtros

- **Search bar borderless** com ícone lupa à esquerda, placeholder contextual
- **On-type** com debounce 300ms (sem botão "buscar")
- **Filtros dropdown-chip** horizontais ao lado da search
- **Date range** com botão `✕` por campo (não 1 botão pra zerar os dois)
- **Filtro de profissional** sempre como select (lista limitada · não search)
- **"Limpar filtros"** aparece SÓ quando há filtro ativo (não sempre)
- **URL params** pra TUDO — link compartilhável + back/forward do browser funciona
- **Sem modal de filtro avançado** — empilhar filtros inline é OK

### Drawer (estilo Salão99)

- **Largura:** 880px desktop · fullscreen mobile (com swipe down pra fechar)
- **Posição:** `fixed right-0 top-0 h-full` em desktop
- **URL param `?bc=N`** indica drawer aberto (mas a URL principal não muda — back fecha)
- **Header sticky:** avatar grande + nome + ações (kebab)
- **FAB de ações rápidas** (4 botões accent · canto inferior direito)
- **Tabs verticais** ou horizontais conforme conteúdo
- **Botão "Fechar Comanda"** no header se aplicável (sempre visível)

### Empty state

- **Texto curto** que explica O QUÊ aparece quando preenche
- **CTA explícito** ("Cadastrar primeiro cliente") — não "Clique aqui"
- **Sem ilustração 3D** na maioria (Salão99 só usa em Agenda Online · landing-style)
- **Cor neutra** · não accent (não compete com conteúdo real)

### Confirmação

- **Modal de confirmação** SÓ pra ações destrutivas (deletar · cancelar · estornar)
- **2 botões:** "Voltar" (left) · "Sim, remover" (right · vermelho)
- **Mensagem que explica** o que vai acontecer ("A despesa some do financeiro e não pode ser desfeita")
- **Loading inline** ("Salvando...") no botão · não overlay genérico

### Wizard 2-step

Pra fluxos complexos (Faturar · Pagar Remuneração · Lançar Despesa Recorrente):
- **Step 1:** dados principais (cliente · valor · serviço)
- **Step 2:** payment/método/confirmação
- **Botões:** "Voltar" (step 2) · "Próximo" (step 1) · "Confirmar" (step 2)
- **Indicador de step** no topo (1 · 2 ou bolinhas)

### KPIs

- **4 colunas** em desktop (lg:grid-cols-4) · 2 colunas em mobile
- **Card pequeno** com: label uppercase pequeno · valor grande tabular-nums · subtitle/badge
- **CountUp** pra animar mudança de número (suave · 500ms)
- **Cores semânticas:** verde recebido · accent a-receber · warn pendente · neutral atendimentos
- **Clicável** linkando pra view detalhada (Recebido → Financeiro · Pendentes → Agenda)

### Hero (destaque)

Quando UM número é o que importa mais (Lucro Líquido · Total recebido):
- **Card maior** com background gradient sutil
- **Tipografia clamp** (`clamp(2.5rem, 5vw, 4rem)`) — escala com tela
- **Cor dinâmica** (verde se positivo · vermelho se negativo)
- **Badge variação** vs período anterior (↑ Alta % / ↓ Baixa %)

### Gráficos

- **Donut** com legenda em barras horizontais à direita + valor R$ + percent
- **Barras comparativas** sólido (atual) vs dashed-outline (anterior) — Salão99 cravou esse padrão
- **Sparkline mini** dentro de KPI card (tendência sem ocupar espaço)
- **Linhas guia 25/50/75/100%** com label R$ no eixo Y
- **Tooltip nativo via `<title>` no SVG** — barato e funcional
- **Cores fortes saturadas:** azul royal, laranja, rosa magenta, verde lime, ciano

### Navegação temporal

Quando view é mensal (Despesas · Remunerações · Caixa):
- **Chevron `‹` + label clicável + chevron `›`** estilo Salão99
- **Botão "Hoje"** aparece SÓ quando o usuário tá em mês custom
- **Chevron próximo disabled** se já no mês corrente/futuro
- **URL param `?mes=YYYY-MM`** — link compartilhável

---

## Padrões de dados

### Multi-tenant

- **business_id** em toda tabela
- **RLS** habilitada com policy `EXISTS(SELECT 1 FROM businesses WHERE id = X.business_id AND owner_id = auth.uid())`
- **Nunca subquery na própria tabela** dentro de RLS — infinite recursion (vide [[rls-no-subquery-self]])
- **Service role client** pra operações cross-request (`unstable_cache` no Next 16)

### Idempotência de import

- Coluna `import_external_id TEXT` na tabela importada
- **Index UNIQUE parcial** `(business_id, import_external_id) WHERE import_external_id IS NOT NULL`
- Hash sha1 determinístico do `(nome|data|valor)` ou ID do sistema externo
- Script roda quantas vezes quiser sem duplicar — só atualiza o existente

### Snapshots vs joins

Pra dados que mudam (preço de serviço, comissão de prof):
- **Snapshot** no momento da venda (copia valor pra `appointments.total_price`)
- **Reference** ao serviço/prof original (FK · vira null se deletado)
- **Nunca calcular** o histórico via join atual — preço de hoje ≠ preço de ontem

### URL params como filtro de query server

- Page recebe `searchParams: Promise<{ q?, status?, from?, to?, prof?, offset? }>`
- Server aplica direto na query Supabase
- Sem revalidate em cache que dependa de filtro
- Componente client (`<Filters/>`) só lê/escreve URL · não tem estado próprio

---

## Anti-patterns (NÃO fazer)

### Replicar feature do concorrente que não tem o problema que ela resolve

Salão99 tem "Recalcular Remunerações" como botão porque seu cálculo de comissão **não atualiza em tempo real**. AgendaPRO calcula NO FATURAMENTO — não precisa botão. Eduardo cravou: *"é botão inutil"*. Removido.

**Lente:** antes de copiar, perguntar "qual problema isso resolve no sistema original?". Se o seu sistema não tem o problema, **a feature é supérflua**.

### Modal gigante com 18 campos sem seções

Salão99 cadastro de cliente tem 18 campos. Empilhar tudo num modal único = scrollão e usuário desiste. Estrutura: **seção sempre visível** (5 campos essenciais) + **2 colapsáveis** (Mais info, Endereço). Default: colapsáveis fechadas. Usuário só clica se precisa.

### Despesa vazia mostrar "Nenhum item"

Sem dado, mostra **CTA pra criar**. "Sem despesas cadastradas neste período" → "+ Cadastrar Despesa". A diferença muda se o cliente continua ou desinstala.

### Subquery na própria tabela em RLS

```sql
-- ERRADO · infinite recursion
USING (id IN (SELECT id FROM customers WHERE business_id = X))
```

Use SECURITY DEFINER function ou elimine a subquery. Memory cravada: [[rls-no-subquery-self]].

### Cache de filtro temporal

Cache pra "Recebido hoje" precisa ter TTL curto (~15s). Cache pra "Top profs do mês" pode ser longo (60s+). **Não usar mesmo TTL pra tudo** · cada métrica tem ritmo próprio.

### Webhook Vercel sem fallback

Webhook do Vercel detectar push pode quebrar (já quebrou no AgendaPRO). Ter fallback: `npx vercel --prod --yes` manual quando emergência. Plano Hobby trava fila se empilhar deploys. Agrupar features antes de pushar.

### Validar deploy via "está no ar" sem WebFetch

Eduardo já cravou 2x: *"esse commit não deployou"* — sempre que escutar isso, **WebFetch o domínio antes de afirmar que sim**. Cache CDN pode esconder fix. Memory: [[verificar-deploy-antes-de-afirmar]].

### Picsum random como placeholder

`picsum.photos/seed/X` entrega foto **aleatória**, não neutra. Em LP de cliente real = destrói credibilidade. Use stock curado + URL fixa OU placeholder tipográfico. Memory: [[nunca-picsum-random-em-lp-real]].

---

## Mapa de decisões

### "Quando criar drawer vs modal vs página própria?"

- **Modal:** ação pontual rápida (1 form, 1 submit, fecha). Ex: Cadastrar Cliente.
- **Drawer:** view detalhada de UM registro com múltiplas tabs/ações. Ex: Detalhe do Cliente (8 tabs), Detalhe da Comanda.
- **Página própria:** quando precisa de URL própria, navegação interna, ou quando é fluxo complexo (Faturar com 3+ etapas). Ex: `/admin/financeiro/remuneracoes/[id]/historico`.

### "Quando criar rota nova vs adicionar tab/filter?"

- **Rota nova** se: SSR é importante, URL semantic-meaningful, página tem layout próprio.
- **Tab no painel atual** se: contexto do business é o mesmo, dado pequeno, transição rápida.
- **Filter** se: mesma tabela com critério diferente.

Default: começa com **filter** > **tab** > **rota nova**. Promove se virar gargalo.

### "Quando inflar enum de category vs usar `notes`?"

- **Enum** se: filtro/agregação em cima da categoria importa pra relatórios.
- **Notes** se: é metadata humana sem necessidade de agregação.

Palace tinha 16 despesas categorizadas como `other` (equipment/uniforms/cleaning/maintenance). Decisão: **não inflar enum** com 4 categorias novas. Usar `notes` pra descrição livre. Inflar enum só se virar padrão entre 3+ clientes.

### "Quando refresh page vs revalidate vs router.refresh()?"

- **`router.refresh()`** pra atualizar Server Components depois de mutação client (PATCH/POST)
- **`revalidatePath('/admin/x')`** dentro de route handler (server) pra invalidar cache
- **Window reload** nunca (loseia state · last resort só)

### "Quando expor pro Adm vs pra recepcionista vs pra profissional?"

Sistema universal · 3 papéis distintos:
- **Adm (owner)**: vê tudo, configura tudo, vê finanças globais
- **Recepcionista** (Equipe plan only): vê agenda, marca, fecha caixa, atende whatsapp, NÃO vê remunerações de outros
- **Profissional**: vê só sua agenda, suas comissões, suas vales

Cada API valida `business_id` E o papel antes de retornar. RLS no banco também filtra.

---

## Casos cravados

### AgendaPRO · Palace Nail Spa Macaé (em curso)

- **Plano:** Equipe Anual R$970 · trial 7d até 24/05/2026
- **Pessoas:** Marko (PT-EU, dono · não atende) + Luana (esposa, adm · não atende) + 5 manicures + 1 recep
- **Migrado de:** Salão99 (desliga 31/05/2026 · 13 dias pra finalizar)
- **Status:** painel 80% completo · faltam Tab Atendimentos + Refinar Despesas + 5 features menores
- Vide [[palace-nail-spa]]

### AgendaPRO · Viva Cacheada (trial 90d)

- Salão 365 Profissional R$48,50 · pediu app iOS e import de clientes
- Vide [[viva-cacheada]]

### Starteq (sistema OS oficina mecânica)

- Mesmo shell desktop, mesmas tabs, mesmo padrão de drawer
- Auditoria de painel cravada em 13/05/2026 · 12 bottlenecks com file:line
- Vide [[starteq-auditoria-painel]] · [[starteq-caixa-comissao-modelo]]

---

## Como Verbo aplica esse conhecimento

### Antes de codar feature nova
1. Verificar: existe no Salão99? Como funciona lá?
2. Verificar: já temos componente parecido no AgendaPRO/Starteq? Reusar?
3. Decidir: drawer/modal/página? (mapa de decisões acima)
4. Filtrar: universal ou personalizado? Sempre universal.

### Antes de copiar UX do concorrente
1. Perguntar: qual problema isso resolve no sistema original?
2. Verificar: a gente tem esse problema?
3. Se sim, replica. Se não, descarta (anti-pattern "feature inútil").

### Quando Eduardo reporta bug
1. Antes de afirmar "está no ar" / "não deployou" → **WebFetch o domínio**
2. Antes de mexer no código → **reproduzir o bug** localmente ou via print
3. Diagnóstico em 1 frase ("não é deploy, é filtro temporal · default vai pra mês corrente")
4. Fix imediato + commit + push + confirmar deploy

### Quando criar feature pra cliente específico (ex: Palace)
1. Construir UNIVERSAL (vale pra qualquer business)
2. Configurável por business onde fizer sentido (toggle, valor)
3. Nunca personalizar copy/labels com nome do cliente
4. Documentar caso em `2-PROCESSAMENTO/<cliente>/STATUS.md` ou memory

### Quando subir migration nova
1. Sempre IDEMPOTENTE (`IF NOT EXISTS`, `DROP IF EXISTS` antes)
2. Numeração sequencial (`v59-...`)
3. Comment header com motivo + idempotência cravada
4. Rodar em prod ANTES do push (senão Vercel quebra · vide [[migration-antes-de-push]])

---

## Links relacionados (Obsidian)

- [[VERBO]] — quem sou
- [[EDUARDO-BARROS]] — quem é o operador
- [[06-PAINEL-SAAS-PADRAO]] — manual técnico detalhado (specs · CSS variables · componentes)
- [[PADROES-VALIDADOS]] — padrões cross-projeto da Impulso
- [[palace-nail-spa]] — caso real em curso
- [[agendapro-estado-15-05]] — estado do AgendaPRO

---

## Como evoluir esse documento

Esse arquivo é **vivo**. Cada vez que um padrão novo cravar em sessão real, atualiza aqui. Cada anti-pattern descoberto, idem. Não vire documento de teoria — mantém perto da prática.

**Atualizar quando:**
- Cravar novo padrão que vai virar default no próximo painel
- Descobrir anti-pattern em retrospecto (algo que tava no doc e provou ruim)
- Caso real diferente expandir o uso (Starteq · cliente novo)

**NÃO atualizar quando:**
- Decisão pontual de um cliente que não vira padrão
- Workaround temporário (esses moram em memory ou em STATUS do cliente)
- Idea brainstorm sem validação prática ainda

— Verbo
