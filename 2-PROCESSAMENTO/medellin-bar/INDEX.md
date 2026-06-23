# Medellín Bar — Sistema de Gestão (PDV de bar/petiscaria)

> **FECHADO (23/06): R$2.997, 50% entrada** (padrão Palace). Mesa + balcão. Aberto em 2026-06-14.
> **Agora é o NÚCLEO do modelo fork** → cada cliente novo clona daqui. Plano: [[MODELO-NUCLEO-FORK-COMANDAPRO]].

## Estado 23/06 — GO-LIVE (sistema no ar, zerado)
Prod: **medellin-bar-six.vercel.app** · Supabase ref `wzsjsfmndwsobwivsrmv` · GitHub `ImpulsoDigital063/medellin-bar` · deploy `vercel --prod --yes` (git NÃO auto-deploya).

**Auth (modelo A — fechado):** link ÚNICO de staff `/entrar`.
- **Dono:** aba Dono, email/senha (Supabase Auth). Adm de teste = `edubchaves5@gmail.com` / `medellin2026`. Gateia o painel via `getUser` no **layout** (painel) + /balcao layout.
- **Garçom:** aba Garçom, escolhe o nome + **PIN** (criado em painel → Garçons; `verifyStaffPin` + localStorage). 1 garçom de teste: "Eduardo Teste".
- **Cliente:** público — `/mesa/N` e `/balcao` (sem login).
- ⚠️ Next 16: "middleware" virou **Proxy**, e **NÃO** usar `@supabase/ssr` no proxy (erro `adapterFn is not a function`) — auth real vai no **layout server-side** (`getUser`). cookies() é async.

**Reset 23/06:** todo o transacional zerado (pedidos/comandas/pagamentos/caixa/gorjetas/movimentos/eventos — eram do stress-test). Mantido: cardápio 109, 13 categorias, **50 mesas (1-50, salão)**, estoque 52 itens, config, adm.

**Estoque:** bebidas (dose/garrafa + auto-86) + categoria **Frutas** (frutas dos drinks via ficha técnica → auto-86 do drink se faltar limão). **SEM cozinha/carnes** (decisão: pesaria).

**Pricing (negociação 23/06):** dono quer assinatura no 1º mês, compra depois. Oferta = compra **R$2.997 (50% entrada)** OU **implantação R$500 + R$219/mês** (preço de FUNDADOR — o 219 foi falado ontem, **NÃO subir**; vira arma: < R$300 que ele paga pro concorrente pior, sem cardápio integrado) + mensalidades abatem da compra. Medellín = **1º MRR food service** (vale mais que tiro único pro investidor).

**Instalação física (no bar):** `/qr` (imprimir QRs das 50 mesas + balcão, logado como adm) · QZ Tray no PC do balcão (porta TMUSB001, aceitar certificado, aba `/balcao` aberta dispara auto-print — ver [[reference_impressao_termica_qz_tray]]) · treino 5 min.

## Arquivos desta pasta

| Arquivo | O que é |
|---|---|
| `ESTUDO-E-PLANO.md` | Doc-mãe: contexto, o que eles usam hoje, modelagem das 4 frentes, modelo de dados, fases, preço, pendências |
| `cardapio-medellin-seed.md` | Cardápio real extraído do Cardapiando (110 itens, 21 categorias) — seed do banco |

## PROTÓTIPO NO AR (pra call presencial de 15/06)

- **URL:** https://medellin-bar-six.vercel.app
- **Código:** `C:/Users/Usuario/medellin-bar` (Next 16 + Supabase + TS + Tailwind)
- **Infra:** Supabase `medellin-bar` (proj wzsjsfmndwsobwivsrmv) + Vercel `impulsodigitals-projects/medellin-bar` — TUDO na conta Impulso. **Entrega:** clonar pra github/vercel/supabase do fork + blindar RLS — params em [[MODELO-NUCLEO-FORK-COMANDAPRO]]
- **Banco:** 19 categorias, 109 produtos (cardápio real seedado), 14 mesas, caixa aberto

### Identidade visual (cravada 14/06)
- **Shell SaaS premium**: sidebar/drawer à ESQUERDA (desktop fixa + drawer mobile, clica e abre) — padrão do palace-system. NÃO usar card-grid. Grupos: Operação · Financeiro · Ajustes · Demonstração.
- **Marca neon**: logo é "Medellín" em neon VERMELHO cursivo sobre tijolo. Wordmark = fonte script (Kaushan) com glow vermelho (`.neon-script`). Âmbar/dourado só nos botões de ação. Logo oficial em arquivo limpo ainda pendente (usei recriação CSS).

### Telas prontas (todas mobile-first, premium escuro neon)
- `/` — splash com wordmark neon + "Entrar no painel"
- `/caixa` — **PDV completo**: abre caixa (fundo) · registradora (grade de produtos → soma → taxa serviço 10% → recebe c/ troco → imprime cupom) · sangria/suprimento · fechar com conferência (esperado×contado)
- `/financeiro` — abas **Fluxo de Caixa** (dia/semana/mês/ano, gráfico) · **Despesas** (CRUD) · **Relatórios** (faturamento/lucro/ticket médio/mais vendidos/despesas por categoria)
- `/mesa/[n]` — **app do cliente** (QR): cardápio + carrinho + envia pedido + **Chamar garçom / Pedir a conta**
- `/balcao` — cérebro: aba Mesas (mapa do salão) · Bar (KDS bebidas) · Caixa · **alerta ao vivo quando cliente chama**
- `/cozinha` — KDS dos petiscos ao vivo
- `/garcom` — mapa de mesas, abre/lança comanda manual
- `/dono` — faturamento do dia (por método, mais vendidos)
- `/estoque` — **diferencial**: estoque dose/garrafa interativo (serve dose, vê esvaziar, custo, alerta de quebra)
- `/qr` — QR codes das mesas pra imprimir
- `/config` — **impressoras**: roteamento cozinha/balcão via QZ Tray (fallback navegador)

### Impressão (funciona)
- KDS tem botão Imprimir por pedido + Auto-imprimir. Cupom térmico 80mm.
- **QZ Tray** integrado: 1 PC no balcão manda petisco→impressora cozinha (rede) e bebida→impressora balcão (USB), automático/silencioso. Config em `/config`. Sem QZ = imprime pelo navegador (padrão).
- Mini-spec do estoque dose/garrafa em `minispec-estoque-dose-garrafa.md`. Benchmark em `benchmark-mercado.md`.

### Roteiro da demo (presencial)
1. Abrir `/qr` no domínio, imprimir/mostrar QR da Mesa 5.
2. Escanear no celular → cai em `/mesa/5` → montar pedido (1 petisco + 1 bebida) → Enviar.
3. No notebook/tablet: `/cozinha` mostra o petisco caindo · `/balcao` aba Bar mostra a bebida.
4. `/balcao` aba Mesas → clicar Mesa 5 → ver comanda → Receber e fechar.
5. `/dono` → faturamento já contou a venda.

### Pitch da impressora (honesto)
Na demo o pedido cai em TELA ao vivo (KDS). Falar: "quando instalo aqui, essa mesma tela dispara a impressora na cozinha e no balcão automático." Impressora física = config de instalação, não dá pra demonstrar sem hardware.

## Status

- [x] Cardápio atual estudado (Cardapiando — menu morto)
- [x] Eixo travado: mesa+balcão, 4 dores
- [x] **Protótipo construído e deployado** (14/06)
- [ ] **Confirmar na call:** quem opera (garçom multiusuário vs caixa central — schema cobre os dois)
- [ ] Call presencial 15/06 + pricing
- [ ] **PESQUISA (CIC):** benchmark de plataformas de mercado pra bar/restaurante+drinks (ver abaixo)

## Ponto aberto — benchmark de mercado (CIC)

Eduardo pediu pôr o CIC pra estudar plataformas concorrentes (PDV bar/restaurante com auto-pedido QR). Candidatas BR: Goomer, Anota AI, Saipos, Consumer, Yooga, Abrahão, Menew, Cardápio Web, Colibri. Objetivo: mapear features que viram diferencial nosso e gaps a cobrir. Prompt do CIC entregue no chat 14/06.

## Pendências pro cliente (perguntar na call)

1. Garçom lança pedido pela mesa (multiusuário) **ou** caixa central lança tudo?
2. Quantas mesas? Tem área de balcão separada?
3. Tem cozinha/copa que precisaria ver pedido cair (KDS) ou sai tudo do mesmo balcão?
4. Como controlam estoque de bebida hoje? (dose de garrafa é o ponto crítico)
5. Formas de pagamento aceitas + se rola dividir conta por pessoa.
