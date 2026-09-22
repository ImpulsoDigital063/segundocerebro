# Baby Loop · Números (parte 12 do plano)

> 17/09/2026. Rascunho da Impulso para o Marko.
> **Legenda:** ✅ número conferido em fonte · 🟡 premissa nossa, precisa ser validada ou decidida · 🔷 decisão do Marko.
> Tudo em reais por mês, no **mês 12 depois da abertura**. Não é promessa: é o mapa de quanto cada alavanca pesa.

---

## 1. De onde vem o dinheiro

O app tem três fontes. A principal é a venda de pacotes de crédito; as outras duas vêm do blog.

### 1.1 Pacote de crédito (a receita principal)

A taxa do modelo B não é cobrada em dinheiro: quem entrega ganha 4 e quem pega gasta 5. **1 de cada 5 créditos gastos sai de circulação.** Quem troca com frequência acaba ficando sem saldo e compra pacote. Gestante que ainda não tem o que dar também compra.

| Premissa | Valor | Tipo |
|---|---|---|
| Crédito retido por troca | 20% do que foi gasto (ganha 4, gasta 5) | 🔷 (modelo B) |
| Pacotes | 40 por R$ 29,90 · 90 por R$ 59,90 · 200 por R$ 119,90 | 🔷 |
| Preço médio do crédito vendido | R$ 0,68 (mistura de 66% pacote pequeno, 27% médio, 7% grande) | 🟡 |
| Crédito médio gasto por troca | 57 (60% peça avulsa de 15, 40% kit de 120) | 🟡 |
| Crédito retido por troca | 11,4 créditos | cálculo |
| Quanto do crédito retido volta como compra | 50% · 70% · 90% (por cenário) | 🟡 |

**Conta de uma troca:** 11,4 créditos retidos × R$ 0,68 = **R$ 7,75** se tudo voltar como compra. Tirando PIX e imposto, sobram de **R$ 3,60 a R$ 6,48 por troca**, conforme o cenário.

### 1.2 Afiliado no blog

| Premissa | Valor | Tipo |
|---|---|---|
| Comissão Amazon, categoria Bebê | 13% | ✅ associados.amazon.com.br |
| Visitas que clicam no link | 5% | 🟡 |
| Cliques que viram compra | 5% | 🟡 |
| Compra média (fralda, enxoval) | R$ 150 | 🟡 |

### 1.3 AdSense no blog

| Premissa | Valor | Tipo |
|---|---|---|
| Páginas por visita | 1,8 | 🟡 |
| Receita por mil páginas | R$ 4 · R$ 8 · R$ 12 | 🟡 (o Google não publica; só medindo) |

**No começo, o blog vale mais por trazer mães pelo Google do que pelo dinheiro que gera.**

---

## 2. Quanto custa manter

### 2.1 A plataforma no ar: no começo, por conta da Impulso

**No começo, o Baby Loop fica no ar dentro da estrutura da Impulso Digital, sem custo para o Marko.** A hospedagem e o banco de dados rodam na estrutura que a Impulso já usa para os sistemas que tem no ar. Esse custo inicial fica com a Impulso.

| Momento | Onde roda | Custo para o Marko |
|---|---|---|
| **Começo** (pré-lançamento e primeiras trocas) | estrutura da Impulso Digital | **R$ 0** |
| **Quando o uso crescer** | contas próprias do Baby Loop: hospedagem (Vercel, US$ 20) + banco, login e fotos (Supabase, US$ 25) | **US$ 45 por mês** (≈ R$ 231,75 com o dólar a R$ 5,15 em 17/09) |

A passagem para as contas próprias acontece quando os números do painel mostrarem que chegou a hora, combinada com antecedência, sem troca de sistema e sem parar o app.

**Por que dá para começar sem custo (resultado do estudo da Impulso):**
- **Foto comprimida no próprio celular** antes de subir: é o que mais consome espaço num app de roupa, e fica bem abaixo do limite grátis.
- **Site + app instalável (PWA), sem loja de aplicativos:** sem taxa de publicação e sem os 15% que Google e Apple cobram sobre venda de pontos dentro do app.
- **Frete pelo Melhor Envio**, com integração grátis e pago por quem recebe.
- **PIX sem mensalidade**, com taxa só quando o pagamento entra (opções na seção 2.4).
- **Painel e aprendizado próprios**, sem ferramenta paga de análise nem inteligência artificial com custo por uso.

### 2.2 Custos que dependem do uso

| Custo | Valor | Tipo |
|---|---|---|
| Taxa do PIX | 1,19% de cada pacote vendido (a maior taxa percentual entre as opções; **banco a definir**) | ✅ ver 2.4 |
| Frete | R$ 0 para a plataforma: quem recebe paga | ✅ decisão 5 |
| Imposto | 6% da receita | 🟡 o contador confirma |

### 2.4 Banco do PIX: opções (conferido em 17/09/2026)

| Banco | Taxa | R$ 29,90 | R$ 59,90 | R$ 119,90 | Média por pacote |
|---|---|---|---|---|---|
| **InfinitePay** (checkout integrado por API + webhook) | **PIX 0%** (infinitepay.io/taxas; cartão com taxa por faixa) | R$ 0,00 | R$ 0,00 | R$ 0,00 | R$ 0,00 |
| Mercado Pago | 0,99% (🟡 fonte secundária, confirmar na conta) | R$ 0,30 | R$ 0,59 | R$ 1,19 | R$ 0,44 |
| Woovi, plano percentual | 0,80%, mín. R$ 0,50, máx. R$ 5,00 (woovi.com/planos-e-precos) | R$ 0,50 | R$ 0,50 | R$ 0,96 | R$ 0,53 |
| Efí Bank | 1,19% via API (sejaefi.com.br) | R$ 0,36 | R$ 0,71 | R$ 1,43 | R$ 0,53 |
| Woovi, plano fixo | R$ 0,85 por PIX | R$ 0,85 | R$ 0,85 | R$ 0,85 | R$ 0,85 |
| Asaas | R$ 1,99 por PIX (R$ 0,99 nos 3 primeiros meses) | R$ 1,99 | R$ 1,99 | R$ 1,99 | R$ 1,99 |

Média ponderada pela mistura 66/27/7 (pacote médio R$ 44,30). Recomendação: **InfinitePay** (já usada no negócio do Marko), numa conta no CNPJ do Baby Loop, confirmando o PIX grátis nessa conta. Alternativas: Mercado Pago (se 0,99% confirmar), Woovi percentual ou Efí. Decisão do Eduardo e do Marko.

### 2.3 Custos do negócio (fora da plataforma)

| Custo | Valor | Tipo |
|---|---|---|
| Domínio .com.br | ~R$ 40 por ano | 🟡 conferir no Registro.br |
| Contador | R$ 400 por mês | 🟡 cotar |
| Anúncio (Meta Ads) | fases 0 e 1 rodam **sem verba** | 🔷 |
| Moderação e atendimento | tempo da equipe do Marko | 🔷 |
| Manutenção e suporte técnico (Impulso), depois da garantia | opcional | 🔷 proposta à parte |

Quando o aviso do próximo tamanho pelo WhatsApp for ligado, cada mensagem entregue tem custo; até lá, o aviso vai por e-mail e notificação, sem custo.

---

## 3. Três cenários no mês 12

| | Conservador | Médio | Bom |
|---|---|---|---|
| Trocas no mês | 400 | 1.500 | 4.000 |
| Mães ativas (≈ 2 trocas por mãe) | ~200 | ~750 | ~2.000 |
| Crédito retido que volta como compra | 50% | 70% | 90% |
| Visitas no blog | 5.000 | 20.000 | 60.000 |
| **Pacotes de crédito** | R$ 1.550,40 | R$ 8.139,60 | R$ 27.907,20 |
| Afiliado | R$ 243,75 | R$ 975,00 | R$ 2.925,00 |
| AdSense | R$ 36,00 | R$ 288,00 | R$ 1.296,00 |
| **Receita bruta** | **R$ 1.830,15** | **R$ 9.402,60** | **R$ 32.128,20** |
| Taxa do PIX | − R$ 18,45 | − R$ 96,86 | − R$ 332,10 |
| Imposto (6%) | − R$ 109,81 | − R$ 564,16 | − R$ 1.927,69 |
| Plataforma no ar (Vercel + Supabase) | R$ 0 (estrutura da Impulso) | − R$ 231,75 | − R$ 231,75 |
| Domínio e contador | − R$ 403,33 | − R$ 403,33 | − R$ 403,33 |
| **Sobra antes de manutenção, anúncio e equipe** | **R$ 1.298,56** | **R$ 8.106,50** | **R$ 29.233,33** |

**Ponto de equilíbrio dos custos fixos:** cerca de **110 a 130 trocas por mês**. A partir daí, cada troca paga manutenção, anúncio e equipe.

---

## 4. O que mais mexe no resultado

1. **Quanto do crédito retido volta como compra.** De 50% para 90%, a receita de pacote quase dobra por troca. É a métrica número 1 do painel ("ficou sem saldo → comprou").
2. **Kit versus peça avulsa.** Kit gasta 120 créditos e peça avulsa gasta 15. Mais kit significa mais crédito retido por troca.
3. **Tamanho da diferença.** Ganhar 4 e gastar 5 retém 20%. Ganhar 4 e gastar 6 reteria 33%, mas a troca fica mais cara para a mãe. É decisão do Marko.
4. **Sem crédito grátis.** A mãe começa com 0 e ganha entregando ou compra pacote. Assim cada ponto em circulação veio de uma peça entregue ou de um PIX. Promoção com ponto grátis só por decisão do Marko, com prazo e limite.

---

## 5. Investimento inicial (uma vez)

| Item | Valor | Tipo |
|---|---|---|
| Desenvolvimento da plataforma (Impulso) | conforme proposta | 🔷 |
| Abertura de CNPJ (necessário para o gateway e para os afiliados) | a cotar com o contador | 🟡 |
| Termos de uso e privacidade (advogado; LGPD com dado de criança) | a cotar | 🟡 |
| Registro da marca no INPI | taxa oficial a conferir | 🟡 |
| Domínio | ~R$ 40 por ano | 🟡 |

---

## 6. Pendências para fechar esta parte

- **Marko:** preço dos pacotes, tamanho da diferença, verba de anúncio, quem modera, e se algum dia liga promoção com ponto grátis.
- **Eduardo:** valor da manutenção mensal e da proposta de desenvolvimento.
- **Contador:** enquadramento, alíquota e tratamento do crédito vendido e não usado.
- **Depois de abrir:** trocar as premissas 🟡 pelos números reais do painel no mês 1.

> Observação: os números do Painel do Marko no protótipo são ilustrativos e não batem com estes cenários. Na próxima rodada do protótipo, vale alinhar o painel ao cenário médio.
