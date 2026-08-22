# PLANO DE PRODUTO — RadarPRO (vender a ferramenta)

**Data:** 16/07/2026 · **Fase:** desenho do produto (kit) iniciado
**Objetivo:** levantar caixa vendendo o RadarPRO pronto — o comprador baixa, roda local, paga uma vez. **Não é SaaS.**

> Docs irmãos: [[STATUS-RADARPRO]] (estado) · [[MAPA-FERRAMENTAS-RADARPRO]] (técnico) · [[PESQUISA-MERCADO-RADARPRO]] (mercado)
> **Mockup do painel:** https://claude.ai/code/artifact/e0839bfe-ec93-4eae-a7d6-287a4d60aafe

---

## A visão

Vender o RadarPRO como **produto pronto: download → roda local na máquina do comprador → pagamento único.** Referência que provou o modelo: **Kit Segundo Cérebro** (useinfuser, R$67 único, baixa e roda no Claude Code do comprador).

**Distinção que o Eduardo cravou:** o RadarPRO não fechou venda ainda porque estamos validando o AgendaPRO (produto cru). Na mão de quem **já tem produto validado**, ele vira arma de vendas. A ferramenta faz o ALCANCE/conversa; fechar é do produto do comprador.

## Decisões de arquitetura (cravadas)

1. **Modelo A — local.** Roda na máquina do comprador (o WhatsApp/Baileys precisa de processo ligado; nuvem não segura).
2. **Kit via Claude Code, NÃO Electron.** O Claude Code do comprador é o **motor** (gera copy, estuda leads) E o **mecânico** (auto-cura o scraper/Baileys quando quebram). Um Electron seria binário congelado que não se conserta; o kit é projeto vivo. Esse é um diferencial de venda: "a única que se conserta sozinha".
3. **IA = Claude Code na assinatura do comprador, NÃO API paga.** A IA pensa pesado no SETUP (gera a copy do produto dele, uma vez); depois roda local por lead (custo R$0). O comprador usa o Claude dele — Eduardo não paga API por cliente.
4. **Banco = SQLite LOCAL, NÃO Turso nuvem.** Cada comprador tem o banco na máquina dele.
5. **Ferramentas se auto-instalam.** Node vem com o Claude Code (pré-requisito). Baileys/Playwright/Chromium vêm no `npm install`. O pacote só carrega o **código + método** (o valor).

## Moat (o que impede "qualquer um fazer um RadarPRO")

NÃO são as ferramentas (Node/Playwright/Baileys são grátis e públicas). É: **(a) personalização da abordagem pelo TEXTO das avaliações do Google — ninguém no mercado faz; (b) o gerador de copy + playbook + Mapa do Negócio; (c) o Claude-mecânico; (d) ser o primeiro + marca + updates.**

## ICP (quem compra)

Quem vende PARA negócio local B2B (aparece no Google Maps): **agência de tráfego/social/sites, SaaS pra negócio local, freela de site, prestador/consultor.** Dor nº1 revelada na pesquisa: **"sei fazer, mas travo na hora de vender."** Precisa ser **semi-técnico** (tem/instala Claude Code).

## Posicionamento & preço (da pesquisa)

- Gancho: **SOBERANIA** ("fonte de leads que é sua, ninguém desliga"), NÃO "mata o tráfego pago" (soa amador; mercado é híbrido). Honesto: não é mágica (resposta 1–10%), tira o trabalho pesado.
- Concorrência BR roda **R$20–300/mês**; ninguém personaliza por review.
- **Preço:** único baixo em R$ (régua AgendaPRO, R$67–197 a definir) + **opcional mensal de atualizações/suporte/novos nichos** (cobre a manutenção do scraper/Baileys). Free capado por VOLUME como aquisição. NÃO crédito que expira.

## O pacote (esqueleto já montado)

Pasta **`C:/Users/Usuario/radarpro-kit/`**:
- `LEIA-PRIMEIRO.md` · `CLAUDE.md` (o cérebro + regras duras de copy)
- `.claude/commands/`: `/instalar` `/mapa-do-negocio` `/conectar-whatsapp` `/coletar` `/suporte`
- `config/`: `mapa-do-negocio.md` (9 perguntas) · `guard.json`
- Falta: copiar `app/lib/scripts` do RadarPRO + refatorar (Turso→SQLite local, API→Claude Code) + tornar a copy guiada pelo Mapa.

## Fluxo do comprador

Instala Claude Code (traz Node) → baixa o ZIP → abre no Claude Code → `/instalar` → `/mapa-do-negocio` (gera a copy dele) → `/conectar-whatsapp` (QR, chip dedicado) → `/coletar` (raspa o Maps) → abre `localhost:3000` e dispara. Quebrou? `/suporte`.

---

**Próxima fase:** ver a lista de tarefas do build (copiar código, refatorar amarras, copy guiada pelo Mapa, validar Claude headless, testar limpo, página de venda).
