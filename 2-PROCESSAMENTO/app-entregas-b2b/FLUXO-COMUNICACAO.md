# Fluxo de Comunicação e Pagamento — APPDELYVERY

> Como acontece toda a comunicação entre Estabelecimento ↔ Motoboy/Carro ↔ Cliente final, e como o dinheiro circula. Base de 30/05/2026.

---

## 1. Os 4 atores

| Ator | Quem é | Tem app? |
|---|---|---|
| **Estabelecimento** | O negócio que contrata a entrega (loja, escritório, distribuidora) | Sim — app/web do negócio |
| **Entregador** (moto/carro) | Quem coleta e entrega (MEI verificado) | Sim — app do entregador (mobile) |
| **Cliente final** | Quem RECEBE a encomenda (cliente do estabelecimento) | **Não precisa** — recebe link |
| **Operação/Admin** | A APPDELYVERY (você) | Painel web |

**Decisão-chave de UX:** o cliente final **não baixa app**. Ele recebe um **link de rastreio por SMS/WhatsApp** e acompanha tudo pelo navegador. Isso remove a maior fricção (ninguém vai instalar app pra receber uma encomenda).

---

## 2. Quem fala com quem (topologia)

```
                    ┌───────────────────────┐
                    │   APPDELYVERY (núcleo) │
                    │  Supabase + Mapbox     │
                    └───────────┬───────────┘
        push/realtime           │           push/realtime
   ┌────────────────────────────┼────────────────────────────┐
   ▼                            ▼                              ▼
┌───────────────┐      ┌─────────────────┐          ┌──────────────────┐
│ ESTABELECIMENTO│◄────►│   ENTREGADOR    │◄────────►│   CLIENTE FINAL   │
│  (app/web)     │ chat │ (app mobile)    │  ligação │  (link SMS/Whats) │
└───────────────┘ masc.└─────────────────┘  mascarada└──────────────────┘
        │  paga o frete         │ recebe repasse              │ acompanha entrega
        ▼                       ▼                             ▼
   ┌──────────────────────── ASAAS (pagamento + split) ──────────────────┐
   └─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Os canais de comunicação (e a tecnologia de cada um)

| Comunicação | Como | Tecnologia |
|---|---|---|
| Sistema → Entregador (nova corrida) | Notificação push com som | Push (Web Push no MVP / FCM no app nativo) |
| Posição do entregador → todos | Mapa ao vivo, em tempo real | GPS do celular → **Supabase Realtime** → Mapbox |
| Sistema → Estabelecimento (status) | Push + tela atualizando | Supabase Realtime |
| Sistema → Cliente final (status) | **SMS/WhatsApp com link de rastreio** | SMS (Zenvia ~R$0,08) / WhatsApp; link abre página web |
| Entregador ↔ Estabelecimento | Combinar a coleta | Chat no app **ou** ligação com número mascarado |
| Entregador ↔ Cliente final | Combinar a entrega ("estou chegando") | Ligação com **número mascarado** (privacidade) |
| Comprovação | Foto na coleta + foto/assinatura na entrega | Câmera + canvas → Supabase Storage |

> **Número mascarado:** nem o entregador vê o telefone real do cliente, nem o contrário. A ligação passa por um número da plataforma (serviço tipo Twilio/Zenvia/Vonage). Protege a privacidade dos dois — padrão iFood/Uber.

---

## 4. O fluxo completo, passo a passo (ciclo de uma entrega)

1. **Estabelecimento cria o pedido** — coleta, entrega, **dados do cliente final** (nome + telefone), descrição, valor declarado. Vê o preço na hora.
2. **Sistema calcula e acha o entregador** — PostGIS lista os verificados online mais próximos; oferta push ao mais perto (timeout, reoferta).
3. **Entregador aceita** — Estabelecimento recebe "Lucas aceitou, a caminho da coleta". Mapa ao vivo liga.
4. **Entregador vai à coleta** — pode chamar o estabelecimento (chat/ligação mascarada) se precisar.
5. **Coleta** — entregador tira **foto da encomenda** e confirma. Neste momento: **Cliente final recebe SMS/WhatsApp**: *"Sua encomenda saiu para entrega. Acompanhe em tempo real: [link]"*.
6. **A caminho do cliente final** — cliente acompanha o entregador no mapa pelo link (sem app). Pode ligar pro entregador (número mascarado).
7. **Entrega** — entregador tira **foto + colhe a assinatura** do cliente final. Todos recebem "Entregue ✓".
8. **Pagamento liquida e o split acontece** (seção 5). Estabelecimento e entregador recebem o comprovante.

---

## 5. O fluxo do dinheiro (pagamento + split)

### Quem paga: o **Estabelecimento** (modelo principal B2B)
O negócio paga o **frete** pra mandar a encomenda ao cliente dele. O cliente final, em geral, **não paga nada no app** (ele já pagou a mercadoria direto com o estabelecimento, por fora).

**Formas de pagamento do estabelecimento:**
- **Carteira pré-paga** — põe saldo e cada entrega debita (mais simples, dinheiro entra antes).
- **Pós-pago / fatura mensal** — pra clientes recorrentes (fecha a conta no fim do mês).
- **Pix/cartão por entrega** — avulso.

### Como o dinheiro se divide (via Asaas)
```
Estabelecimento paga R$ 17,51
        │
        ▼
   ASAAS processa (desconta a taxa do meio de pagamento)
        │
        ├──► Entregador (subconta):  80%  →  R$ 14,01   (repasse automático)
        └──► APPDELYVERY (plataforma): 20% →  R$ 3,50    (sua comissão)
```
- Cada entregador é uma **subconta Asaas** → o repasse é **automático**, sem você ter que pagar um por um.
- A taxa do meio de pagamento (Pix/cartão) é descontada **antes** do split.
- A comissão da plataforma **embute o custo de perda/risco** (extravio) — igual o TôNoLucro faz.

### Variante avançada (fase 2): cobrança na entrega
Se o modelo for **o cliente final paga na hora** (contra-entrega): o entregador recebe na mão (Pix/maquininha), e o valor é acertado com o estabelecimento. Exige Pix/maquininha no app do entregador (o TôNoLucro adicionou maquininha pós-Magalu). **Fica pra fase 2** — o MVP começa com o estabelecimento pagando o frete.

---

## 6. Decisões pra confirmar com o investidor (afetam o build)
1. **Quem paga o frete:** estabelecimento (padrão) ou repassa pro cliente final?
2. **Forma preferida:** carteira pré-paga, fatura mensal, ou avulso? (pré-paga é a mais segura pra começar)
3. **Cobrança na entrega (COD)** entra no MVP ou fica pra depois?
4. **Comunicação com o cliente final:** SMS, WhatsApp, ou os dois?
5. **Contato entregador↔cliente:** número mascarado (mais caro, mais profissional) ou chat no app (mais barato)?

---

## Resumo em uma linha
**Estabelecimento pede e paga → sistema acha o entregador verificado → entregador coleta (foto) → cliente final recebe link e acompanha ao vivo → entregador entrega (foto+assinatura) → Asaas divide automático: 80% entregador, 20% plataforma.** Tudo conectado por Supabase Realtime (posição), push (avisos), SMS/WhatsApp (cliente final) e número mascarado (ligações).
