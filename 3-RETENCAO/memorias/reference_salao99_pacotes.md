---
name: reference-salao99-pacotes
description: Drilldown CIC completo do módulo Pacotes do Salão99 (Palace Marko) · 26/05 · referência pra blocos D/E/F do AgendaPRO + 30 oportunidades de melhoria
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Drilldown CIC · Salão99 · módulo Pacotes · 26/05/2026 · COMPLETO**
URL base: `/enterprise/sistema/painel/c249807n142368/p/pacotes`
Estado: 0 pacotes cadastrados · read-only · Comanda #10758 preservada

## 1-3. CADASTRO · LISTAGEM · VENDA (já documentado · resumo)

**Cadastro:** Sidebar → Pacotes · drawer lateral · campos: Nome / Preço / Validade (6 presets: sem · 30 · 60 · 90 · 180 · 365 dias) / Itens (Serviço + Valor Unit + Qtd) · FAB "+" laranja.

**Sem:** imagem · categoria · descrição · desconto explícito · toggle ativo/inativo · validade custom · regra comissão · vínculo produto.

**Venda · 4 caminhos:**
1. Ficha cliente → FAB "+" → menu (Novo Atendimento / Venda de Produto / **Venda de Pacote** / Adicionar Crédito)
2. Comanda → GERENCIAR ITENS → aba Fatura → "+" → Nova Venda de Pacote
3. Sidebar Vendas → filtro "Tipo" tem "Venda de Pacote" (só lista, não inicia)
4. Sem botão "vender" na própria tela /pacotes

**Form de venda:** Cliente · Pacote · Profissional (quem vende · pra comissão) · Forma de pgto (Dinheiro/Cartão/Pix/Transferência/Depósito · pacote NÃO é forma de pgto, é produto vendável).

**Comissão sobre venda de pacote:**
- Colaborador → PERFIL → flag "Vende Pacotes" (controla quem pode)
- CONFIGURAÇÕES → Comissões → só Serviço e Produto · pacote sem config específica
- Provavelmente herda de serviço OU é zero · **gap crítico**

## 4. CONSUMIR SESSÃO (sinais indiretos)

- Atendimento NÃO tem campo "vincular a pacote ativo"
- Comanda → adicionar serviço NÃO tem opção "consumir de pacote"
- Forma de pagamento NÃO tem opção "Pacote"
- **Hipótese:** consumo automático ao adicionar serviço de cliente que tem pacote ativo cobrindo aquele serviço · item vira R$0 na fatura
- **NÃO confirmado visualmente** (0 pacotes vendidos no ambiente)
- Indicador "restam X de Y sessões" provavelmente na ficha cliente · não confirmado

## 5. FICHA CLIENTE · ABA PACOTES

Abas: GERAL · CONSUMO · ATIVIDADES · GALERIA · FICHAS · **PACOTES** · SALDO

Aba PACOTES existe · conteúdo não observável sem dados.

**Expectativa pelo padrão:**
- Seção Ativos com cards (sessões restantes · validade · progress bar)
- Seção Consumidos/Expirados (histórico)

## 6. RENOVAÇÃO / EXPIRAÇÃO

**Salão99 não tem:**
- ❌ Template "Pacote expirando em N dias" no Envio de Mensagens
- ❌ Template "Pacote expirado · renove"
- ❌ Botão "Renovar 1-click"
- ❌ Widget "Pacotes a expirar"
- ❌ Política de expiração configurável

**Conclusão:** pacote expira silenciosamente após N dias. **Gap crítico** — receita recorrente que Salão99 deixa na mesa.

## 7. DASHBOARDS / RELATÓRIOS

- `/p/relatorios?bc=1` Pacotes: gráfico Vendidos · cards Realizados/Não Realizados · ranking Mais Lucrativos
- **Fluxo de Caixa NÃO quebra por origem** (Serviço/Produto/Pacote) · só por forma de pgto
- Remunerações NÃO mostra linha específica de venda de pacote
- `enterprise.salao99.com.br/relatorios/produtos-servicos` é o ÚNICO lugar onde Pacote tem destaque equivalente a Serviço/Produto

**Debt técnico do Salão99:** relatórios fragmentados em 2 subdomínios (legado `/relatorios` + novo `enterprise.../relatorios`).

## OPORTUNIDADES (resumo das 30 mapeadas)

### Onde o AgendaPRO PODE SUPERAR:
1. **Renovação automatizada** (maior gap · Salão99 não tem nada)
   - Templates WhatsApp/SMS em 30/15/7/1 dias antes
   - Renovação 1-click (herda nome/itens/preço)
   - Widget "Pacotes a expirar" no dashboard
2. **Visibilidade financeira** (pacote some no fluxo de caixa Salão99)
   - Quebrar receita por Serviço/Produto/**Pacote** sempre
3. **Comissão de pacote dedicada** (Salão99 sem config)
   - Split venda/execução (% pra quem vendeu + % pra quem executou)
4. **Pré-visualização da economia** ("De R$X por R$Y · economia R$Z (W%)")
5. **Toggle ativo/inativo** (Salão99 força excluir pra ocultar)
6. **Categoria/imagem/descrição** (marketing visual)
7. **Validade custom** (não só presets)
8. **Pacote misto serviço+produto** (multi-segmento)
9. **Sessões: indicador claro "restam X de Y"** (badge ficha + comanda + agendamento)
10. **Confirmação visual ao consumir** (toast + undo 30s)
11. **Reverter consumo se cancela atendimento** (auto)
12. **Pacote como forma de pgto da comanda** (parcial ou total)
13. **Bloqueio de consumo inválido** (alerta serviço fora escopo · sessões esgotadas · expirado)
14. **Template "Pacote expirando" + "Pacote expirado renove com X% off"**
15. **Política expiração configurável** (zera / saldo permanece / carência / congela em feriados)
16. **3 seções na aba Pacotes do cliente** (Ativos com progress · Consumidos · Expirados)
17. **Timeline de uso por pacote** (data · prof · serviço · comanda)
18. **Transferência de sessão entre clientes** (pacote familiar · opt-in)
19. **Funil de venda por profissional** (quem oferece mais · quem fecha mais)
20. **LTV por pacote** (qual retém mais · gera maior ticket downstream)
21. **Coorte de renovação** (% que renova após expirar)
22. **Empty state educativo** (3 exemplos por nicho · onboarding inline)

### Anti-trap (lição do Salão99):
- ❌ NUNCA replicar "Fechar Comanda · checkbox pré-marcado destrutivo no X"
- Modais de saída só com botões claros · sem checkbox de side-effect

## LACUNAS NÃO COBERTAS (0 pacotes no ambiente · read-only impediu testar)

- Colunas reais da listagem com dados
- Layout interno da aba PACOTES do cliente
- Comportamento ao adicionar serviço com pacote ativo
- Cálculo real da comissão sobre venda
- Comportamento de expiração (silencioso vs avisado)
- Vínculo reverso "pacotes que usam este serviço"

Cobrir no futuro: ambiente teste com dados sintéticos OU print de outro cliente premium.
