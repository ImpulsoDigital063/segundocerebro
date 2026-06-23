# Frontend — Rotas, Telas e Componentes (APPDELYVERY)

> O front-end já está desenhado e validado no **protótipo** (`prototipo/index.html`). Aqui está como ele vira o app Next.js: rotas, telas e os componentes a extrair do protótipo.

---

## 1. Rotas (Next.js App Router)

| Rota | Persona | Auth | Origem no protótipo |
|---|---|---|---|
| `/` | pública | — | landing + login |
| `/login` · `/cadastro` | todos | — | (novo) |
| `/negocio` | estabelecimento | sim | aba Negócio |
| `/negocio/novo-pedido` | estabelecimento | sim | form "Solicitar entrega" |
| `/negocio/pedido/[id]` | estabelecimento | sim | tela de rastreio (matching→tracking→done) |
| `/negocio/historico` | estabelecimento | sim | (novo) |
| `/negocio/carteira` | estabelecimento | sim | (novo) |
| `/entregador` | entregador | sim | aba Entregador (ofertas) |
| `/entregador/cadastro` | entregador | sim | cadastro + upload docs |
| `/entregador/verificacao` | entregador | sim | checklist de verificação |
| `/entregador/corrida/[id]` | entregador | sim | coleta → rota → finalizar(assinatura) |
| `/admin` | admin/operador | sim | aba Operação (KPIs) |
| `/admin/entregadores` · `/admin/aprovacoes` | admin | sim | tabela + fila de aprovação |
| `/admin/entregas` · `/admin/financeiro` | admin | sim | (parcial) |
| **`/rastreio/[token]`** | **cliente final** | **pública** | (a fazer — tela do link) |

## 2. Componentes a extrair do protótipo (reaproveitáveis)
| Componente | Função | Status |
|---|---|---|
| `MapaAoVivo` | Mapbox + rota + marcador do motoboy (posAt) | ✅ pronto no protótipo |
| `CalculadoraPreco` | tabela PRICE → total/entregador/plataforma | ✅ |
| `CardEntregadorVerificado` | avatar + selos (antecedentes/CNH/identidade) | ✅ |
| `TimelineStatus` | os 5 passos da entrega | ✅ |
| `OfertaCorrida` | card de oferta + aceitar/recusar | ✅ |
| `UploadDocumento` | upload CNH/CRLV/selfie | ✅ |
| `ChecklistVerificacao` | animação validando CNH/antecedentes/identidade | ✅ |
| `FotoComprovante` | foto geolocalizada (coleta/entrega) | ✅ |
| `AssinaturaCanvas` | assinatura do cliente final no canvas | ✅ |
| `PainelAdmin` (KPIs + tabelas + fila) | operação | ✅ |
| `IconsSVG` | biblioteca de ícones (objeto I) — zero emoji | ✅ |
| `RastreioPublico` | tela do cliente final (link, sem app) | ⬜ a fazer |

## 3. Design system (já definido no protótipo)
- **Fonte:** Inter. **Paleta:** índigo `#4f46e5` (marca), verde `#059669` (confiança/go), navy `#0d1424` (texto).
- **Regra dura: ZERO emoji — tudo SVG inline** (objeto `I` no protótipo).
- Cards arredondados (16px), sombras suaves, segmented tabs, callouts coloridos.
- **Mobile-first** no app do entregador (ele vive no celular); tri-modal (mobile/tablet/desktop) com o mesmo componente.

## 4. Telas que ainda faltam desenhar (para "todo o front criado")
1. **`/rastreio/[token]`** — cliente final acompanha o motoboy ao vivo pelo link (sem app). PRIORIDADE (fecha o fluxo).
2. **Login / cadastro** do estabelecimento.
3. **Histórico de entregas** + **carteira/saldo** (estabelecimento).
4. **Avaliação** do entregador (pós-entrega) + **notificações**.
5. **Ajuste mobile** do app do entregador.

## 5. Como o front conversa com o back (resumo)
- Mapa/posição: assina o canal Realtime `pedido:{id}` → move o marcador (não consulta banco a cada ping).
- Ações (pedir, aceitar, coletar, entregar): Server Actions.
- Preço/rota: calculados no servidor (Directions) e devolvidos.
- Cliente final: a página `/rastreio/[token]` chama `getRastreioPublico(token)` (sem login).
