# Painel Admin Starteq · Padrão Cravado

**Cravado em:** 19/05/2026 · após maratona AgendaPRO Palace
**Base canônica:** `[[PAINEL-PROFISSIONAL]]` em `3-RETENCAO/perfil/`
**Operador:** Júnior (dono Starteq Tocantins) · não-técnico · operação dia-a-dia
**Contexto:** painel admin do e-commerce Starteq · loja física + online + montagem de PCs

---

## Por que esse documento existe

O Starteq tem **3 personas operacionais** que mexem no painel:
- **Júnior (dono)** — atualiza preço/estoque · vê pedidos/faturamento · decide promoção
- **Atendente loja física** (futuro) — registra venda balcão · agenda montagem
- **Técnico montador** (futuro) — recebe OS · marca pronto · solicita peça

E **2 modos de operação:**
- **E-commerce** (catálogo · pedidos online · estoque sync)
- **ERP físico** (OS · caixa · clientes balcão · estoque presencial)

Esse contexto duplo é diferente do AgendaPRO (só serviço) e exige adaptação dos padrões universais. Esse doc consolida **como aplicamos o padrão de Painel Profissional ao Starteq** especificamente.

---

## Aplicação dos 4 princípios filosóficos

### 1. "Painel é ferramenta, não vitrine"
Aplicado: dashboard inicial do Júnior NÃO tem chart-overload. Mostra **3 KPIs do dia** (vendas online · vendas balcão · OS abertas), **lista de pedidos pendentes**, e **atalhos pras 4 ações que ele faz todo dia**:
- Cadastrar produto
- Atualizar estoque
- Ver pedido específico
- Abrir nova OS de montagem

### 2. "Operação > Configuração"
Aplicado: configurações de loja (frete · forma de pagamento · template de NF) moram atrás de 1 clique em **grupo "Configurações"** no fim da sidebar. Página inicial é **operação pura**.

### 3. "Dono não treina"
Aplicado: zero tutorial obrigatório. **Tooltips em ícones** soltos. Empty state com CTA ("Cadastre seu 1º produto" não "Nenhum item"). Confirma só destrutivo (deletar produto · cancelar pedido). **NÃO** confirma salvar.

### 4. "Universal sempre · personalizado nunca"
Aplicado: enum de categoria de produto vem de tabela `product_categories` que o **Júnior cadastra** no painel. Nunca hardcoded "RAM, CPU, GPU" como se fosse universal. Configura por business.

---

## Arquitetura do shell (espelha AgendaPRO)

### Sidebar desktop (≥ lg)

**Largura:** 256px expandida · 72px colapsada
**Posição:** `fixed left-0` · zIndex 40

**Ordem canônica de grupos (adaptada pro Starteq):**

```
LOJA
├─ Início          (/admin · dashboard KPIs)
├─ Pedidos        (/admin/pedidos · online + balcão)
├─ OS Montagem    (/admin/os · técnico vê)
└─ Clientes       (/admin/clientes · CRM unificado)

CATÁLOGO
├─ Produtos       (/admin/produtos · busca + filtros)
├─ Categorias     (/admin/produtos/categorias)
├─ Marcas         (/admin/produtos/marcas)
└─ Promoções     (/admin/promocoes · em breve)

ESTOQUE
├─ Posição        (/admin/estoque · busca SKU)
├─ Entrada        (/admin/estoque/entrada · NF de compra)
└─ Inventário    (/admin/estoque/inventario · contagem)

FINANCEIRO
├─ Vendas         (/admin/financeiro/vendas · online + balcão)
├─ Caixa Físico   (/admin/financeiro/caixa · espécie do dia)
├─ Despesas       (/admin/financeiro/despesas)
├─ Fluxo de Caixa (/admin/financeiro/fluxo)
└─ Comissões     (/admin/financeiro/comissoes · técnicos)

CONFIGURAÇÕES
├─ Loja           (dados · CNPJ · endereço)
├─ Pagamento      (Asaas keys · maquininha · taxa)
├─ Frete          (Correios · transportadora · grátis a partir)
├─ Notas Fiscais  (NFe · emissão automática)
├─ Equipe         (Junior + atendentes + técnicos)
└─ Importar       (XLSX produtos · histórico SAP)

OUTROS
├─ Relatórios     (índice de cards-link)
└─ API IA         (docs · openapi.json pra IA do Júnior consumir)
```

### Header de view

Cada página tem:
- Título grande (`h2` semibold)
- Sub-título cinza: **"Starteq Tocantins · Loja Centro"**
- Ações à direita: refresh · theme toggle · logout
- Sticky em mobile (não em desktop · sidebar fixa já dá orientação)

### Conteúdo principal

- **max-w-7xl** em desktop · **max-w-lg** em mobile
- `px-8 py-6` em lg
- Background gradient sutil + vignette nos cantos (atmosfera premium)

### BottomNav mobile (< lg)

5 itens com ícone + label:
- Início · Produtos · Pedidos · OS · Mais

---

## Aplicação dos padrões UX

### Tabela de Produtos (densa · padrão Salão99)

| ☐ | Avatar | SKU | Nome | Categoria | Preço | Estoque | Ações |
|---|--------|-----|------|-----------|-------|---------|-------|
| ☐ | [img]  | KGSTN | Kingston Fury 16GB | RAM | R$ 240,00 | 12 un | ⋮ |
| ☐ | [img]  | RYZEN | Ryzen 7 5700X | CPU | R$ 1.890,00 | 3 un | ⋮ |

**Regras cravadas:**
- Densidade média · sem zebra striping
- Avatar quadrado (não circular · produto não é pessoa)
- Checkbox bulk pra ações em massa (mudar preço · ativar/desativar)
- Kebab `⋮` no fim com: Editar · Duplicar · Inativar · Excluir
- Linha inteira clicável → drawer/modal de detalhe
- **Estoque < 5** com badge vermelho · **estoque 0** com linha cinza
- **Preço alinhado direita** · tabular-nums
- Coluna "Sync API" indicando se produto está no `/api/products` público

### Tabela de Pedidos

| Nº | Cliente | Data | Canal | Valor | Status | Pagamento | Ações |
|----|---------|------|-------|-------|--------|-----------|-------|
| #1043 | João Silva | 19/05 14:32 | Online | R$ 4.890,00 | Aguardando entrega | PIX confirmado | ⋮ |
| #1042 | Maria Costa | 19/05 13:15 | Balcão | R$ 850,00 | Entregue | Cartão | ⋮ |

**Status colorido (chips):**
- Aguardando pagamento (warn)
- Aguardando entrega (info)
- Em montagem (purple)
- Pronto pra retirar (success light)
- Entregue (success)
- Cancelado (gray)

**Kebab abre:** Detalhe · Imprimir nota · Avisar WhatsApp · Cancelar

### OS Montagem (tabela específica + drawer técnico)

| OS | Cliente | Produtos | Técnico | Entrada | Previsto | Status |
|----|---------|----------|---------|---------|----------|--------|
| #M-104 | João Silva | i7 + 32GB + RTX 4060 | Carlos | 18/05 | 20/05 | Em montagem |

**Drawer técnico** (Carlos abre · vê só suas OS):
- Header: nº OS · cliente · prazo
- Lista de peças (checklist)
- Botão **"Marcar pronto"** → notifica cliente WhatsApp automático
- Foto da máquina antes/depois (upload)
- Notas técnicas

### Drawer de Produto (admin Júnior)

880px desktop · fullscreen mobile · 6 tabs:
- **Perfil**: nome · SKU · categoria · marca · preço · descrição
- **Imagens**: galeria (drag-drop · até 8)
- **Estoque**: posição atual · histórico de movimentação
- **Especificações**: pares chave/valor dinâmicos (CPU: socket, cores, TDP · RAM: tipo, freq, latência)
- **Compatibilidade** (categorias estruturais — CPU/Mobo/RAM/Fonte): regras de match
- **Vendas**: histórico de pedidos com esse SKU

**FAB de ações rápidas**:
- Duplicar produto (clone com SKU novo)
- Inativar (não some · só fica oculto na loja)
- Ver na loja (link público)
- Exportar XLSX

### Empty states cravados

- **Sem pedidos hoje**: "Nenhum pedido entrou hoje. A loja online está rodando — `agendapro.net.br/starteq` recebe normalmente. Compartilhe?" + botão Copiar link
- **Estoque vazio**: "Cadastre seu 1º produto. SKU + nome + preço · estoque pode ser editado depois." + botão Cadastrar produto
- **Cliente sem histórico**: "Cliente cadastrado mas ainda não comprou. O cadastro fica salvo pra quando ele voltar."

### Filtros cravados

**Produtos:**
- Search por nome / SKU / código de barras (debounce 300ms · URL `?q=`)
- Categoria (select)
- Marca (select)
- Estoque (Todos · Em estoque · Acabando · Esgotado)
- Status (Ativo / Inativo)
- Limpar filtros (aparece quando algum ativo)

**Pedidos:**
- Search por nome cliente / nº pedido
- Date range (De/Até com ✕ por campo)
- Canal (Online / Balcão / Todos)
- Status (chips multi-select)
- Forma pagamento

**Sempre via URL params.** Link compartilhável + back/forward funciona.

### Export CSV

**Em toda tabela operacional** (Produtos · Pedidos · OS · Vendas · Despesas):
- Botão "Exportar CSV" no header
- Aplica filtros atuais
- BOM UTF-8 (Excel abre sem quebrar acento)
- Filename: `{entity}-starteq-{data}.csv`
- Limit 10.000 linhas (Junior nunca exporta mais que isso)

### Hero card (quando UM número manda)

Dashboard inicial · KPI principal **"Vendas hoje"** em hero card:
- Gradient verde se positivo
- Tipografia `clamp(2.5rem, 5vw, 4rem)`
- Badge variação vs ontem (↑ Alta % / ↓ Baixa %)
- Sub-info: "X pedidos · ticket médio R$ Y"

KPIs secundários (4-col): Online · Balcão · OS Pendentes · Estoque Crítico (< 5 un).

### Gráficos

- **Donut** Forma de Pagamento (PIX / Cartão / Espécie / Boleto) · valor + percent
- **Barras comparativas** Vendas últimos 30 dias · sólido atual vs dashed mês anterior
- **Sparkline** dentro do KPI "Vendas hoje" mostrando últimos 7 dias
- **Tooltip nativo via `<title>`** no SVG

---

## Padrões de dados

### Multi-tenant (futuro)

Hoje o Starteq tem 1 business só (Tocantins). Quando Júnior abrir filial Palmas/Araguaína:
- Toda tabela tem `business_id` (ou `store_id` específico do Starteq)
- RLS habilitada · policy via owner
- Switch de loja no header (dropdown ao lado do nome)

### Catálogo de produtos · 188 SKUs iniciais

- Tabela `products` (SKU UNIQUE · barcode UNIQUE)
- Tabela `product_categories` (Júnior cadastra · não hardcoded)
- Tabela `product_specs` (key-value dinâmico)
- Tabela `compatibility_rules` (CPU→Mobo socket · RAM→Mobo type · Fonte→TDP min)
- Index gin no nome+SKU+barcode pra busca tripla

### Pedido + OS

- `orders` (nº · cliente · canal · valor · status · payment_id Asaas)
- `order_items` (produto · qtd · preço snapshot · desconto)
- `service_orders` (OS montagem · pode existir sem order · ex: cliente trouxe peças próprias)
- Status flow: `pending_payment` → `paid` → `in_assembly` (se montagem) → `ready` → `delivered`

### Estoque

- Tabela `stock_movements` (entrada NF compra · saída venda · ajuste contagem)
- Saldo derivado por trigger `stock_balance` materializado
- API `/api/stock/[sku]` retorna saldo tempo real (sem cache)
- Webhook Asaas com payment confirmed → debita estoque

### Idempotência de imports

Quando Júnior importar XLSX do SAP antigo:
- Coluna `import_external_id` em `products` (SKU do SAP)
- Index UNIQUE parcial `(business_id, import_external_id)`
- Hash sha1 fallback se SAP não tiver ID

---

## Anti-patterns (NÃO fazer no Starteq)

### Hardcodar categorias de produto

`enum category('cpu','gpu','ram','mobo')` no schema = lock-in tecnológico (e novo Junior vende notebook depois? · acessório? · perif?). Use `product_categories` table editável.

### Compatibilidade rígida via if/else

`if (cpu.socket === mobo.socket) ok` ⚠️ vai virar 200 ifs.
Use `compatibility_rules` JSON com motor de regras:
```json
{
  "type": "match",
  "from": "product.cpu.socket",
  "to": "product.mobo.socket",
  "error": "CPU {cpu.name} não cabe na placa {mobo.name} (sockets diferentes)"
}
```

### Painel sem multi-papel desde o dia 1

Hoje só Junior. Mas Carlos (técnico) entra em 30 dias. Codar tudo como "owner-only" e refatorar depois = dívida. Já estruturar com **role** (owner · employee · technician) e RLS por role.

### Email/WhatsApp manual pra "pedido pronto"

Pedido pronto → cliente espera notificação. Manual = esquece + frustração. Webhook automático no momento que técnico marca `ready` → WhatsApp template via Z-API ou Twilio. Padrão AgendaPRO já tem isso pra confirmação de agendamento.

### Login do Junior usar email/senha sem 2FA

Junior vai mexer em dinheiro real. Magic link via Supabase Auth + 2FA opcional. Senha temp `junior2026` no 1º login → força troca (igual AgendaPRO).

### Comissão de técnico calculada manualmente

Toda OS finalizada → calcula comissão automática (% sobre valor da OS). Técnico vê seu painel `/tecnico/financeiro` com pendente + pago. Mesma lógica de Remunerações do AgendaPRO.

---

## Mapa de decisões aplicado

### "Pedido online vs OS montagem · 2 tabelas separadas ou 1 com tipo?"

**2 tabelas separadas.** Por quê:
- Pedido online tem campo Asaas payment, frete, NF · OS não
- OS tem técnico FK, prazo montagem, checklist · pedido não
- Tipos diferentes empilhados num enum gera schema sujo
- Pode ter OS SEM pedido (cliente trouxe peças) e pedido SEM OS (compra simples)

Relação: `service_orders.order_id` nullable.

### "Catálogo público (loja) vs admin · mesma tabela?"

**Mesma `products` table.** Filtros diferentes:
- Loja: `active = true AND stock_balance > 0` + ordenar relevância
- Admin: mostra TUDO (inativos + esgotados)

API `/api/products` (público) aplica filtros automaticamente. Junior não pode esquecer.

### "Editar produto · drawer ou página `/produtos/[id]/editar`?"

**Drawer** (igual AgendaPRO ClienteDrawer 8 tabs):
- Contexto da lista preservado (filtros atuais visíveis ao fechar)
- 6 tabs estruturam edição em vez de página rolando
- Mobile fullscreen funciona
- URL param `?bc=N` pra back funcionar
- Página própria SÓ pra cadastro novo (`/produtos/novo`) porque é fluxo dedicado

### "Compatibilidade no painel admin ou na loja pública?"

**Ambos.** No admin: validação ao cadastrar produto novo (alerta se spec inválida). Na loja: bloqueio na hora do "Adicionar ao build". Cliente NUNCA pode comprar combo incompatível.

---

## Como o Júnior aprende (e não aprende)

### Junior aprende
- **Visual padrão Salão99/AgendaPRO**: tabela densa · drawer lateral · sidebar agrupada
- **Botões com label** ("Cadastrar produto" · "Marcar OS pronta" · "Exportar CSV")
- **Tooltip em ícone solto**

### Junior NÃO aprende
- Comandos de teclado avançados (vai usar mouse)
- 3 modos de visualização da mesma tabela (kanban vs list vs grid · só list)
- Setting de tema dark/light (default light · respeita preferência sistema)

---

## API consumível IA (diferencial Starteq)

Plus único do Starteq vs concorrentes: **API pra IA pessoal do Júnior consumir**. Ele tem um GPT que conhece o catálogo dele e ajuda cliente via WhatsApp.

**Endpoints públicos (sem auth · rate limit):**
- `GET /api/products` paginado · suporta `?category=cpu&brand=amd&min=200&max=500`
- `GET /api/products/[sku]` produto único com specs completas
- `GET /api/stock/[sku]` saldo tempo real
- `GET /api/recommend?budget=3000&use=gaming` retorna 3 builds sugeridos
- `POST /api/quote` com body `{parts: [...]}` retorna `{total, link_whatsapp, valid_until}`

**Docs em `/admin/api-ia/page.tsx`** com:
- Schema OpenAPI 3.0 (gerado automático)
- Exemplos curl
- Token de teste pro Junior testar
- "Como conectar no ChatGPT" wizard simples

---

## Próximos passos (quando começar a codar painel)

### Fase 1 · MVP (1-2 dias)
- [ ] Shell admin com sidebar + grupos canônicos
- [ ] Auth Junior (magic link Supabase)
- [ ] Tabela `products` + drawer cadastro/edição (6 tabs)
- [ ] CRUD produtos completo
- [ ] Upload de imagens via Storage
- [ ] Lista pedidos (read-only, status mostrado)

### Fase 2 · Operacional (3-5 dias)
- [ ] Estoque (entrada NF · ajuste · inventário)
- [ ] OS montagem (criar · atribuir técnico · marcar pronto)
- [ ] WhatsApp automático pedido pronto
- [ ] Caixa físico (vendas balcão)
- [ ] Dashboard KPIs

### Fase 3 · Avançado (5-7 dias)
- [ ] Comissões automáticas técnicos
- [ ] Compatibilidade no admin (validação ao cadastrar)
- [ ] Promoções (preço temporário · cupons)
- [ ] Relatórios cards-link
- [ ] API IA · docs OpenAPI

### Fase 4 · Diferencial (3-5 dias)
- [ ] Webhook Asaas → debita estoque
- [ ] NFe automática emissão
- [ ] Import XLSX SAP antigo idempotente
- [ ] Multi-loja (quando Junior expandir)

---

## Links

- **Conhecimento canônico:** `[[PAINEL-PROFISSIONAL]]` em `3-RETENCAO/perfil/`
- **Manual técnico detalhado:** `[[06-PAINEL-SAAS-PADRAO]]` em `3-RETENCAO/verbo-design/`
- **Arquitetura geral Starteq:** `[[04-ARQUITETURA-SISTEMA]]`
- **Status do projeto:** `[[STATUS-STARTEQ]]`
- **Auditoria fricção painel atual:** `[[starteq-auditoria-painel]]` (memory)
- **Modelo caixa + comissão:** `[[starteq-caixa-comissao-modelo]]` (memory)

---

## Como esse documento evolui

Atualizar quando:
- Cravar fluxo específico do Starteq que não cabe no doc universal
- Descobrir adaptação ao contexto e-commerce que diverge do AgendaPRO
- Júnior pedir feature nova com lógica única

Não atualizar quando:
- For padrão universal · vai pro `[[PAINEL-PROFISSIONAL]]`
- For decisão de design visual · vai pro `[[06-PAINEL-SAAS-PADRAO]]`

— Verbo
