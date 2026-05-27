---
name: agendapro-modulo-produtos-estado
description: Estado do módulo Produtos do AgendaPRO em 22/05/2026 14h · pronto pra demo Studio Mood · integração financeira MVP entregue · gaps identificados
metadata: 
  node_type: memory
  type: project
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

## Status geral

Módulo de Produtos do AgendaPRO **PRONTO PRA DEMO** com Studio Mood (Izanara). Integração financeira MVP funcionando: entrada de estoque vira despesa automática, venda dá baixa automática, comissão é snapshot no momento da venda. Cravado universal — serve Palace e Studio Mood igualmente.

## O que está em prod (`agendapro.net.br` · deploy commit 475ccec via CLI)

### Telas
- **`/admin/produtos`** · lista com 4 KPIs (Total · Estoque baixo · Esgotados · Valor em estoque) · cards 3D com thumb · busca cobrindo nome/descrição/SKU/variante · chips de filtro por categoria · 3 botões header (Entrada · Vender · Novo produto)
- **`/admin/produtos/entrada`** · NF + fornecedor (criar inline) + data + linhas de produto × qtd × custo · gera despesa automática categoria 'products' em `expenses` · trigger baixa estoque
- **`/admin/produtos/vender`** · cliente (search) + profissional (default logado) + multi-linha · baixa automática de estoque · comissão snapshot · pagamento desacoplado (status='pending')
- **Drawer de produto** 3 tabs (Resumo · Editar · Histórico) · foto grande aspect 4/3 · todos os campos editáveis · soft-delete com confirmação

### Cadastro completo (paridade Salão99 + variante)
- Marca (entidade · criar inline) + Categoria (entidade · criar inline) + Variante (texto livre #T1B/27, Preto, Marsala)
- SKU + Código de barras + Validade + Qtd por embalagem
- Toggle "Controle de estoque" + Toggle "Dados de venda"
- Preço venda + Custo + Comissão (% ou R$)
- Foto com compressão (web worker · WebP · ~100KB final)

### Home Adm
- Widget "Estoque baixo" só aparece quando há produtos abaixo do mínimo · gap Salão99 que vira diferencial

### Banco (migrations rodadas v63 + v64 + v65 + v66)
- `products` · `product_brands` · `product_categories` · `product_suppliers`
- `stock_movements` (trigger atualiza products.quantity)
- `stock_entries` + `stock_entry_items` (trigger gera stock_movement type=entry)
- `sales` (enum type: service_appointment | product_sale | package_sale | credit_topup) + `sale_items` (trigger gera stock_movement type=exit, respeita track_stock)
- Bucket `product-photos` + policies (público read, auth upload)

## GAPS conhecidos (depende de tempo + sessão com Eduardo)

### Gap 1 · Vendas novas não aparecem em `/admin/financeiro/vendas`
- Tela atual lê só de `appointments paid_at` (sistema legado)
- Venda de produto da nova tabela `sales` **não aparece** lá ainda
- Caminho recomendado: criar tela nova `/admin/financeiro/vendas-produtos` separada (zero risco pra Olímpio/Marko · ~45min)
- Alternativa: unificar via UNION na tela existente (~2h · risco maior)

### Gap 2 · Service ↔ Produto (consumo interno)
- Salão99 tem tab "Uso de produtos" no cadastro do serviço (mapeado no drilldown CIC)
- Tabela `service_product_consumption(service_id, product_id, quantity)` + trigger no fechamento do atendimento
- Não entregue · ~2-3h

### Gap 3 · Comissão de produto em Remunerações
- `sale_items` já guarda `commission_type/value` (snapshot)
- Falta: agregar nas remunerações do profissional, view detalhada
- Não entregue · ~3h · toca em tela existente (cuidado)

### Gap 4 · Webhook Vercel quebrado
- Sentry token expirado · `modifyConfig from Vercel` injeta path undefined
- Workaround: `npx vercel --prod --force --yes` (sempre passa)
- Causa raiz cravada na Task #13 · resolver migrando Sentry pro plano grátis ([[Task #84]])

## Diferenciais frente ao Salão99 (cartas pro pitch)

| Feature | Salão99 | AgendaPRO |
|---|---|---|
| Entrada de estoque com despesa automática | ❌ | ✅ |
| Widget proativo de estoque baixo na home | ❌ (só filtro reativo) | ✅ |
| Toast visual de baixa de estoque | ❌ | ✅ |
| Aviso de estoque insuficiente antes do save | ❌ | ✅ |
| Foto de produto com compressão automática | parcial | ✅ |
| Variante de cor (#T1B/27, Preto, etc) | ❌ explícita | ✅ |
| Importação CSV em massa | ❌ | ⏳ backlog |

## Comandos úteis pra retomar

```bash
# Deploy manual (webhook quebrado)
cd C:/Users/Usuario/agendapro && npx vercel --prod --force --yes

# Type check
cd C:/Users/Usuario/agendapro && npx tsc --noEmit

# Logs do último deploy
cd C:/Users/Usuario/agendapro && npx vercel ls
cd C:/Users/Usuario/agendapro && npx vercel inspect <url> --logs
```

## Como retomar

1. Verificar deploy mais recente em prod via `npx vercel ls`
2. Confirmar com Eduardo qual gap atacar primeiro (Tela vendas-produtos / Service↔Produto / Comissão Remunerações)
3. Drilldown CIC blocos 4-5 já feito (Task #81 completed) · usar como referência sem precisar de novo CIC
