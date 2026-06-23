# Financeiro — recolher do negócio e repassar ao entregador (APPDELYVERY)

> Como o dinheiro circula: rails do banco + caminho no nosso schema + políticas a cravar.
> Gateway: **Asaas** (conta no CNPJ do DONO — a plataforma não é intermediária, é o dono).

## 1. O caminho do banco (rails) — modelo recomendado: CARTEIRA PRÉ-PAGA
```
LOJISTA recarrega a carteira (Pix/cartão/boleto via Asaas)
        │  (1 taxa por recarga — não por entrega)
        ▼
   Conta Asaas da PLATAFORMA (CNPJ do dono)  ← dinheiro entra ANTES da entrega
        │
   a cada entrega: debita o frete do saldo do lojista (sem nova cobrança)
        │
   na CONCLUSÃO (entregue, com foto+assinatura) → split:
        ├──► subconta Asaas do ENTREGADOR: 80%  (transferência interna)
        └──► conta da PLATAFORMA: 20% (take rate)
        │
   ENTREGADOR saca da subconta → conta bancária dele (Pix)
   PLATAFORMA (dono) saca o 20% acumulado → conta bancária dele
```
Por que pré-paga: dinheiro entra antes (zero calote), **1 taxa de gateway por recarga** (não por entrega), e o repasse vira transferência interna Asaas (barato). Cada entregador = **subconta Asaas** → repasse automático, sem o dono pagar um a um.

## 2. O caminho no nosso schema (tabelas que já existem)
- **Recarga:** `carteira_transacoes` (tipo `credito`) + `estabelecimentos.saldo_carteira += valor`.
- **Pedido criado:** nada financeiro ainda (só `preco_total` calculado).
- **Entrega concluída** (status `entregue`):
  1. debita: `carteira_transacoes` (tipo `debito`, valor=`preco_total`, `pedido_id`) → `saldo_carteira -= preco_total`.
  2. cria `pagamentos` (valor, taxa, `metodo='carteira'`, status `pago`→`repassado`, `asaas_payment_id`, `split_payload`).
  3. repasse Asaas 80% → subconta entregador → `pagamentos.repassado_at`.
- **Bloqueio:** se `saldo_carteira < preco_total` ao criar pedido → barra com "recarregue a carteira".

## 3. POLÍTICAS A CRAVAR (recomendação marcada → confirma ou ajusta)
1. **Como o lojista paga:** ✅ **carteira pré-paga** pra começar (alt: fatura mensal / avulso por entrega).
2. **Quando o repasse acontece:** ✅ **na conclusão** (status entregue, com evidência) — nunca paga entrega não feita.
3. **Take rate:** ✅ **20% plataforma / 80% entregador** (editável pelo dono no painel).
4. **Taxa do Asaas (Pix/cartão):** quem absorve? ✅ recomendo **descontar do frete antes do split** (lojista/entregador rateiam) — alt: plataforma absorve (come da margem).
5. **Saque do entregador:** ✅ **D+1, sob demanda, mínimo R$ 20** (alt: imediato / outro mínimo).
6. **Cancelamento:**
   - antes da coleta → ✅ estorna 100% pra carteira do lojista.
   - depois da coleta (entregador já se deslocou) → ✅ cobra a **bandeirada** (remunera o deslocamento), estorna o resto. *(validar valor)*
7. **Recarga:** ✅ mínimo **R$ 50**, alerta de saldo baixo, bloqueio de pedido sem saldo.
8. **COD (cliente final paga na entrega):** ✅ **fase 2** (exige Pix/maquininha no app do entregador).

## 4. O que isso adiciona ao PAINEL ADMIN (seção FINANCEIRO)
- **Faturamento** — soma do take rate (20%) por período.
- **Repasses** — por entregador: pago / a repassar / sacado.
- **Carteiras** — saldo de cada lojista + extrato (`carteira_transacoes`).
- **Recargas** — entradas via Asaas.
- **Custos** — taxas Asaas + verificação (pra ver a margem real).
- **Config:** take rate %, mínimo de recarga, mínimo de saque, regra de cancelamento — tudo editável.

## 5. Pré-requisitos (do dono)
Conta **Asaas no CNPJ** + ativar **subcontas + split** (KYC dos entregadores: CPF + dados bancários, o Asaas valida). A tomada eu deixo pronta (`lib/asaas.ts`, no-op sem chave) como fiz com a verificação; pluga quando a conta existir.
