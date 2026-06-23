# Handoff — Auditoria visual do APPDELYVERY (instância OLHOS)

> A MÃO (Verbo/terminal) construiu o build Next.js das 4 personas. Você (OLHOS, Claude in Chrome)
> sobe o dev server, navega, tira screenshot e **audita a fidelidade visual** contra o protótipo.
> Você NÃO escreve código. Devolve achados em `FINDINGS-OLHOS.md` (mesma pasta) pra MÃO corrigir.

## Como subir
```
cd C:/Users/Usuario/appdelyvery
npm run dev
```
Abre **http://localhost:3000**. O token Mapbox já está no `.env.local` → o mapa deve renderizar de verdade.

## Referência (o alvo de fidelidade)
- Protótipo HTML: `2-PROCESSAMENTO/app-entregas-b2b/prototipo/index.html` (abre no navegador lado a lado).
- Screenshots do protótipo: `prototipo/login.png`, `prototipo/preview.png`, `prototipo/shell.png`.
- Design system: Inter · índigo `#4f46e5` · verde `#059669` · navy `#0d1424` · **zero emoji (tudo SVG)** · cards raio 16px, sombra suave.

## Roteiro (navegar e screenshotar cada um)
1. **Entrada `/`** — card de login central, 3 cards de papel (Negócio/Entregador/Operação), hover muda borda/fundo.
2. **Negócio `/negocio/novo-pedido`** — shell (sidebar com logo, nav, switcher "Demo · ver como"). No form, alternar **Moto/Carro** muda o preço ao vivo. "Solicitar entrega" → **radar** de matching → **tracking** (card do entregador, ETA, timeline). Clicar "Simular entrega ao vivo": o **motoboy anda no mapa** colado na rua, ETA/km caem, timeline avança → "Ver comprovante" → tela de comprovante.
3. **Entregador `/entregador`** — abre na **oferta** (+R$ valor, rota coleta→entrega). Aceitar → **coleta** (mapa) → "registrar coleta" → "iniciar entrega" → **rota** (mapa anda, ganho) → "finalizar" → **pad de assinatura** (desenhar com mouse funciona) → concluído. Testar também nav **Verificação** → cadastro (3 uploads) → "enviar" → **animação de checagem** (3 linhas viram verde) → aprovado.
4. **Admin `/admin`** — 3 KPIs, tabela de entregadores com **pílulas de status** coloridas (azul "em rota", verde "verificado", âmbar "antecedentes"), fila de aprovação.
5. **Cliente final `/rastreio/teste123`** — layout público (sem sidebar), mapa **auto-inicia** a simulação, card do entregador verificado + ETA + timeline.

## Checar transversal
- **Zero emoji** em qualquer lugar (todo ícone é SVG).
- Fonte Inter, cores batendo com o protótipo, espaçamentos/sombras dos cards.
- **Responsivo:** encolher a janela < 900px → sidebar some, painel ocupa tudo. Ver se nada quebra.
- Mapa: linha da rota azul, pino azul (coleta) + pino verde (entrega), marcador do motoboy redondo.

## Como reportar (pra MÃO ler e corrigir)
Escreva em `2-PROCESSAMENTO/app-entregas-b2b/FINDINGS-OLHOS.md`:
- Por tela: o que está **fiel** e o que **divergiu** do protótipo (com screenshot e descrição do delta).
- Qualquer erro de console, tela branca, ou fluxo que travou.
- Prioridade (quebra / cosmético).
