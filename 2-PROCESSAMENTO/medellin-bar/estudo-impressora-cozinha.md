# Estudo da impressora — Medellín Music Bar

> Fecha o hardware de impressão da cozinha/balcão. A parte de software já está pronta no sistema
> (QZ Tray + roteamento por estação em Ajustes → Impressoras + fallback pelo navegador).
> Método Impulso: estudar o que o mercado usa, copiar o que funciona, recomendar o caminho mais barato que não dá dor de cabeça.

---

## 1. O problema real do bar

Hoje o pedido nasce em 3 lugares:
- **QR da mesa** (cliente pede sozinho)
- **Garçom** (tela do garçom no celular)
- **Caixa/Balcão** (venda avulsa)

Cada pedido tem uma **estação de destino** (campo `station`):
- `cozinha` → petiscos, porções, pratos
- `bar` → bebidas, doses, drinks

O que o dono quer: o pedido **cai sozinho impresso na cozinha** (e/ou no balcão) sem ninguém digitar de novo. É o "comanda na espeto" eletrônico. Sem isso, a cozinha depende da tela — e tela some quando cai a luz/internet, papel não.

**Decisão de arquitetura:** a tela (KDS) é a fonte da verdade ao vivo; o papel é o **backup operacional** da cozinha. Os dois rodam juntos. Quem decide se imprime é o dono, por estação, em Ajustes.

---

## 2. Como o sistema imprime hoje (já construído)

| Camada | O que faz | Arquivo |
|---|---|---|
| Roteamento | Dono escolhe qual impressora é a da Cozinha e qual é a do Bar | `/config` (Ajustes → Impressoras) |
| Ponte de impressão | QZ Tray manda o cupom direto pra impressora certa, sem popup do navegador | `src/lib/qz.ts` |
| Cupom | Monta o HTML do ticket (mesa, itens, qtd, hora, obs) | `src/lib/ticket.ts` |
| Disparo | Quando entra pedido novo `pendente` na estação, dispara o cupom 1x | `KdsBoard` (`printed.current` evita imprimir 2x) |
| Fallback | Sem QZ Tray, imprime pelo navegador na impressora padrão (Ctrl+P automático) | navegador |

**Resumo:** o software está pronto. Falta o dono **plugar a impressora e apontar ela no Ajustes**. É isso que esse estudo resolve.

---

## 3. As duas formas de ligar a impressora

### Opção A — USB (mais simples, 1 aparelho)
A impressora liga por cabo USB no **mesmo computador/tablet que roda o sistema no balcão**.
- Funciona com QZ Tray rodando nessa máquina.
- Limite: só imprime onde a máquina está. Se a cozinha é longe do balcão, o papel sai no balcão e alguém leva. Ruim.

### Opção B — Ethernet/rede (o certo pra bar) ✅
A impressora tem **IP próprio na rede** (cabo de rede no roteador). Aí ela pode ficar **fisicamente dentro da cozinha**, e o sistema (de qualquer máquina) manda o cupom pra ela pelo IP.
- É assim que iFood, restaurante e bar sério faz.
- QZ Tray fala com ela por IP (`Raw socket`, porta 9100, protocolo ESC/POS).
- Permite ter **2 impressoras**: uma na cozinha (petiscos) e uma no balcão (bebidas) — cada uma com seu IP, cada uma roteada na sua estação.

**Recomendação:** Ethernet. É o que destrava o "cai sozinho na cozinha". Wi-Fi também existe mas cai mais; cabo de rede até a cozinha é mais confiável.

---

## 4. Qual impressora comprar (mercado BR, não fiscal, ESC/POS)

Bar não precisa de impressora **fiscal** (isso é nota fiscal/SAT — outro produto, mais caro). Pra comanda de cozinha o que serve é **térmica não fiscal**, bobina 80mm, com **Ethernet** e guilhotina.

| Modelo | Interfaces | Por que | Faixa de preço* |
|---|---|---|---|
| **Elgin i9** ✅ recomendada | USB + Ethernet + Serial | Padrão de mercado, guilhotina, ESC/POS, suporte fácil em qualquer assistência | ~R$ 600–800 |
| Bematech MP-4200 HS | USB + Ethernet + Serial | Robusta, 300mm/s, muito usada em PDV | ~R$ 700–900 |
| Elgin i8 | USB + Ethernet | Mais barata, boa pra começar com 1 estação | ~R$ 500–650 |
| Epson TM-T20 | USB (rede em alguns modelos) | Confiável, mas modelo de rede é mais caro | ~R$ 700+ |

\* *Faixa de referência — confirmar valor do dia no fornecedor. Não cravar número na proposta sem cotar.*

**Recomendação pro Medellín:** começar com **1 Elgin i9 Ethernet na cozinha**. Bebida o balcão entrega na hora pela tela (KDS do bar), não precisa de papel no dia 1. Se o movimento de drinks crescer, adiciona a 2ª (i8 no balcão). O sistema já suporta as duas — é só plugar e apontar no Ajustes.

Fornecedores: [Crystal Informática](https://www.crystalinformatica.com.br/impressora-nao-fiscal), [Automatizando](https://www.automatizando.com.br/impressoras/impressora-de-cupom/impressora-termica-de-cupom-nao-fiscal-elgin-i8-usbethernet), [Elgin](https://www.elgin.com.br/impressora-termica-nao-fiscal-elgin-mp-4200-hs/p). Comparativo de modelos: [mybest](https://br.my-best.com/19994).

**Custo recorrente:** bobina térmica 80mm é barata (rolo ~R$ 5–8, dá centenas de comandas). Sem cartucho, sem tinta.

---

## 5. Montagem (passo a passo pro dia da instalação)

1. **Liga a impressora na rede** — cabo de rede da impressora no roteador. Imprime o auto-teste (segura o botão de avanço ao ligar) pra ver o **IP** dela.
2. **Instala o QZ Tray** na máquina do balcão — grátis, [qz.io/download](https://qz.io/download/). Abre o app (fica na bandeja).
3. **No sistema → Ajustes → Impressoras** — clica em "Conectar". O QZ lista as impressoras (USB e rede).
   - Pra impressora de rede, adiciona pelo IP (`Raw / porta 9100`).
4. **Aponta**: Cozinha → impressora da cozinha. Balcão → (se tiver) a do balcão.
5. **Clica em "Testar"** em cada estação — sai um cupom de teste com mesa fictícia. ✅ Esse é o "prova na fonte" da impressão: só confia quando o papel sai.
6. Pronto. A partir daí todo pedido novo da estação imprime sozinho.

---

## 6. Plano B (sem comprar nada no dia da call)

Se na demo não tiver impressora térmica, o sistema **imprime pelo navegador** na impressora comum (até numa multifuncional). O cupom sai formatado igual. Serve pra mostrar o fluxo funcionando — depois troca pela térmica de rede sem mexer em nada do software.

---

## 7. O que isso vale na venda (pro plano de negócio)

- **Diferencial concreto:** "o pedido do cliente cai impresso na sua cozinha sem ninguém digitar". O Cardapiando deles (morto) não fazia isso integrado.
- **Custo de entrada baixo pro cliente:** 1 impressora (~R$ 600) + QZ Tray grátis. Não trava a venda do sistema.
- **Escala sem retrabalho:** 1 ou 2 impressoras, mesma config. Cresceu, pluga mais uma.
- **Argumento de confiabilidade:** tela + papel. Caiu a internet no meio do rush, a comanda já impressa continua na mão da cozinha.

---

## 7b. VALIDADO 15/06 — impressão funcionando ponta a ponta ✅

Testado com uma **Epson TM-T20X (M352A)** que o Eduardo tinha em casa. Fluxo inteiro provado:
**sistema (/config → Testar) → QZ Tray → Epson USB → cupom impresso**. Papel saiu.

### Config exata que funcionou (Windows, USB)
1. Driver: **EPSON Advanced Printer Driver (APD) v6.07R1** (`APD_607R1_T20X_WM.zip` → extrair → `APD_607R1_T20X.exe`). Instala como fila **"EPSON TM-T20X Receipt"**.
2. **Pegadinha resolvida:** o APD registrou a impressora na porta **COM1 (serial)** porque na hora da instalação o USB não tinha porta criada → **nada imprimia, jobs travavam na fila**. Fix: instalar o **TMUSB v800d** (`TMUSB800d.exe`, o "EPSON TM Port Monitor") → **tirar e botar o cabo USB** (re-enumera) → nasce a porta **TMUSB001** → apontar a impressora pra ela: `Set-Printer -Name "EPSON TM-T20X Receipt" -PortName "TMUSB001"`. Aí imprime.
3. **QZ Tray 2.2.6** (x86_64 — conferir arquitetura, tem build arm64 que NÃO serve em PC AMD/Intel). Roda na bandeja, porta 8181.
4. No sistema → Ajustes → Impressoras → **Conectar** → QZ pede permissão ("anonymous/untrusted", modo sem assinatura) → marcar **"Remember this decision"** + **Allow** → escolher a impressora na estação → **Testar**.

### Dívida de produção (não bloqueia, mas resolver antes de entregar)
- QZ em **modo sem assinatura** pede "Allow" no popup. Com "Remember" para de pedir na mesma máquina, mas o ideal é **assinar com certificado** (override.crt + chave no QZ) pra nunca perguntar. Fazer quando instalar definitivo na máquina do cliente.

### Checklist pra reproduzir na máquina do Medellín
- [ ] Levar a Epson TM-T20X + cabo USB.
- [ ] Instalar driver APD v6 (pen drive ou baixar do site Epson).
- [ ] Instalar TMUSB v800d → plugar USB → confirmar porta TMUSB001 (senão tirar/botar cabo).
- [ ] Conferir arquitetura do PC do bar (x64 ou arm) → instalar QZ Tray certo.
- [ ] /config → Conectar → Allow+Remember → apontar Cozinha → Testar.
- [ ] Se o bar já tiver impressora própria: mesma receita, só troca o driver pelo da marca deles (sistema é agnóstico — qualquer térmica 80mm ESC/POS).

## 8. Pendências

- [ ] Cotar preço do dia da Elgin i9 Ethernet (não cravar na proposta sem cotar — λ números reais).
- [ ] Confirmar com o dono se a cozinha tem ponto de rede / roteador alcança (senão: cabo de rede ou repetidor).
- [ ] Na call: rodar o "Testar" ao vivo (mesmo que pelo navegador) pra ele ver o papel sair.
