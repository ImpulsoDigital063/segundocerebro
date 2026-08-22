# Projeto APPDELYVERY — App de Entregas B2B (Palmas-TO)

> Revisado no update geral de 04/07/2026 (sem STATUS-*.md dedicado; status vive aqui no INDEX) — ativo: protótipo validado + build-spec completo prontos pra construir. Última atividade nos docs 23/06 (INTEGRACAO-MAPBOX) e captação/copy 05-08/06. Ainda aguardando o "sim" pra iniciar o build Next.js.

> **ABRIR PROJETO = ler este INDEX primeiro.**
> **Nome oficial: APPDELYVERY** (batizado pelo Eduardo em 29/05/2026).
> App de entrega de **encomendas de negócios** (NÃO comida, foco em empresas): estabelecimento pede, entregador verificado entrega, cliente final acompanha por link. **Análise de antecedentes = o diferencial.** Mercado: **Palmas-TO e região**.
> Aliases: [APPDELYVERY, appdelivery, app delyvery, app entregas, app de entrega, encomendas, motoboy app, delivery b2b, entregas palmas, tonolucro]

## Estado (atualizado 30/05/2026)
- Protótipo navegável **pronto e validado** (Mapbox + rota real + preço real + 3 telas + cadastro/verificação + foto/assinatura).
- **Especificação técnica completa registrada** (banco, back, front, integrações) em `build-spec/` — pronto pra construir o Next.js quando der o "sim".
- Decisão 30/05: **não usar contas logadas (systempalace/Impulso)**; manter tudo no protótipo agora; criar contas próprias no início do build.
- Pendente: tela do cliente final no protótipo · planos de negócio/marketing · reunião com investidor.

## Os 3 fatos que mudam tudo
1. **TôNoLucro é de Palmas** e domina o território (Magalu atrás). Entrar de frente = perder. Único caminho = recorte estreito.
2. **O recorte vencedor:** B2B de encomenda de valor + **entregador verificado por antecedentes** + regional. Brecha que nem o líder cobre.
3. **~70% do app a Impulso já sabe fazer.** Os ~30% novos (GPS realtime, dispatch, split, verificação) são quase todos integração de terceiro.

---

## 📁 MAPA DOS DOCUMENTOS

### Estratégia / negócio
- **DOSSIE-RECONHECIMENTO.md** — briefing, concorrência, antecedentes, jurídico, modelo de negócio, MVP, **10 perguntas pro cliente**.
- **ESTUDO-TONOLUCRO.md** — benchmark do concorrente (de Palmas, comprado pela Magalu). Copiar/evitar/superar.
- **RECON-CLIQUERETIRE.md** — tech do CliqueRetire (não tem GPS ao vivo, só status). ⚠️ **DESATUALIZADO como diferencial:** a **Bee Delivery** (tb em Palmas) TEM GPS ao vivo → mapa ao vivo é **paridade, não vantagem**. Único diferencial real = **verificação de antecedentes**. Ver **RECON-BEEDELIVERY.md**.
- **RECON-BEEDELIVERY.md** — 3º concorrente em Palmas (franquia nacional, Mossoró-RN, desde 2020). Tem GPS ao vivo + 2 apps nativos. Nunca cravar "único/primeiro app de Palmas".
- **APOSTILA-APP-ENTREGAS.pdf** — apostila completa (18 seções) azul-marinho pronta pra imprimir.

### Técnica / decisões
- **ESTUDO-CONSTRUCAO.md** — matriz de capacidade (18 componentes), riscos, MVP, roadmap.
- **SISTEMA-GPS.md** — as 5 camadas do GPS. Stack: Geolocation + Supabase Realtime + Mapbox + PostGIS.
- **INTEGRACAO-MAPBOX.md** — integração Mapbox (3 serviços, tokens, código).
- **FLUXO-COMUNICACAO.md** — comunicação dos 4 atores (estabelecimento/entregador/cliente final/admin) + pagamento e split.

### 🔧 build-spec/ — PRONTO PRA CONSTRUIR (ler na ordem)
- **build-spec/01-BLUEPRINT-NEXTJS.md** — documento-mestre: stack, estrutura de pastas, contas, ordem de construção, regras duras. **Começar por aqui no build.**
- **build-spec/02-BANCO-DADOS.md** — schema Supabase/Postgres completo (SQL: tabelas, enums, PostGIS, matching, RLS).
- **build-spec/03-BACKEND-API.md** — server actions, integrações, env vars, máquina de estados.
- **build-spec/04-FRONTEND.md** — rotas, telas, componentes (mapeados do protótipo).

### Protótipo
- **prototipo/index.html** — app navegável (Mapbox, rota real, 3 telas, cadastro/verificação, foto/assinatura). Abre no navegador, sem instalar.
- **prototipo/mapbox-token.txt.txt** — token público Mapbox (conta `appdelivery`).
- Para mostrar no PC do cliente: subir em **Netlify Drop** (arrastar a pasta) → link público.

---

## Tabela de preço real (no protótipo, fácil de ajustar)
Bandeirada moto R$8 / carro R$13 · R$1,50/km · mínimo R$10 · **entregador 80% / plataforma 20%**. Ex.: 6,34km moto = R$17,51 (entregador R$14,01). **Validar com o investidor.**

## Pendências
- [ ] Tela do **cliente final** (`/rastreio/[token]`) no protótipo
- [ ] Login/cadastro, histórico, carteira, avaliação, mobile (completar front)
- [ ] PLANO-NEGOCIO.md + PLANO-MARKETING.md
- [ ] Reunião investidor → "sim" → criar contas → iniciar Fase 1 (build-spec/01)
- [ ] Decisões pro investidor: quem paga frete · forma de pagamento · COD no MVP? · SMS/WhatsApp · nome/marca final
