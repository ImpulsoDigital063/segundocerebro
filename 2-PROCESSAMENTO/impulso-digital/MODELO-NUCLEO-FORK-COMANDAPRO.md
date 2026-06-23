# MODELO — Núcleo-Fork + ComandaPRO (caixa agora + recorrência depois)

> Cravado 23/06/2026 com Verbo, a partir da venda do Medellín + conversa de campo com o dono.
> É o **"como" operacional** da tese [[softwarehouse]]: como a Fase 1 (caixa) financia a Fase 2 (recorrência).

## A jogada em uma linha
Dois trilhos rodando juntos, **de propósito**:
- **Trilho 1 — Forks (caixa AGORA):** `medellin-bar` é o **núcleo/template**. Cliente novo = **clone pra github + vercel + supabase próprios**, fork dedicado, **R$2.997 (50% entrada)**. Um de cada vez, caixa entrando.
- **Trilho 2 — ComandaPRO (recorrência DEPOIS):** `acai-system` é o **SaaS multi-tenant** de food service (6 segmentos × 3 templates de cardápio), construído em paralelo. É o ativo que vale múltiplo e que o investidor compra.
- **A ponte:** os forks **bancam o runway** enquanto o ComandaPRO amadurece. Fork = tiro único que paga hoje; SaaS = MRR que paga sempre.

## Por que os dois, e não um
- Só fork = vicia no caixa de projeto (lumpy: fecha um, seca). É o "furo da Fase 2" da tese.
- Só ComandaPRO = morre de fome esperando o produto ficar pronto.
- Os dois = fork dá fôlego E prova o produto no cliente real; cada fork melhora o núcleo que vira o ComandaPRO.

## Estado (23/06/2026)
- **Medellín — FECHADO. R$2.997, 50% entrada (igual Palace).** **Case-zero do modelo**: valida que bar de Palmas paga premium por sistema próprio. Código: `C:/Users/Usuario/medellin-bar` (= o núcleo). Prod: medellin-bar-six.vercel.app.
- **Vidal (Cantinho do Açaí) — 1º da fila do ComandaPRO.** `acai-system` (multi-tenant). Ver [[INDEX]] (acaiteria-vidal).

## Eixo de venda — food service (validado em campo no Medellín)
A pesquisa dos 8 nichos + a conversa com o dono dizem o mesmo. O que vende NÃO é feature de nicho:
1. **"Não trava no pico"** — confiabilidade (offline-first, fechar conta rápido). Dor #1 transversal.
2. **"Tudo num produto só"** — cardápio integrado + PDV + KDS num sistema. Mata PDV+Goomer+AnotaAI (3 mensalidades).
3. **"Contrato limpo"** — sem fidelidade abusiva.
4. **"Suporte que aparece"** — *eixo novo trazido do campo:* o concorrente "só manda vídeo, não vai lá". Vender **presença**, não locality (o concorrente também é de Palmas — local não diferencia sozinho).

**Âncora de preço (concorrente de Palmas):** R$300/mês = R$3.600/ano, suporte fraco, **sem cardápio integrado**. O mercado já paga mensalidade — isso valida o Trilho 2.

## Params de execução — A DEFINIR (antes de clonar o fork do Medellín)
1. **Conta de quem?** github/vercel/supabase do fork na conta do Eduardo (controle, igual Palace) vs do cliente.
2. **Dado: migra ou limpo?** o clone leva os dados atuais do Medellín ou nasce zerado.
3. **Blindagem RLS no clone.** Hoje todo o banco é `demo_all` (chave anon pública lê/escreve tudo: faturamento, salário). Instância de cliente pagante exige login de staff + RLS real. Recomendado: parte do "clone limpo".

## Cuidado da fábrica (da tese)
**Walk before fleet:** provar 1 agente clonando 1 fork ponta-a-ponta COM prova-na-fonte antes de multiplicar. Núcleo + guardrails > operários.

**Ver também:** [[softwarehouse]] (a tese) · [[STATUS-IMPULSO]] · [[MODELO-SAAS-PREMIUM]] · [[pdv-foodservice-produto]]
