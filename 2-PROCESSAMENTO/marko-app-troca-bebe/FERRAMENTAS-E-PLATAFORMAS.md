# App de troca de roupa de bebê (Marko) · Ferramentas e plataformas

> Estudo de 13/09/2026. Base: stack que a Impulso já roda (AgendaPRO, LocaPRO, ComandaPRO) + modelo núcleo-fork (conta do cliente).
> Valores em dólar lidos em 10/09/2026. Conferir antes de colocar em proposta.

## Princípio: conta no nome do Marko

Repositório, hospedagem, banco, gateway e Business Manager ficam **na conta dele**, com o Eduardo como colaborador. É o modelo núcleo-fork, o mesmo do Palace. Isso resolve propriedade, cobrança e saída sem discussão depois.

## Mapa por necessidade

| Necessidade | Ferramenta | Por quê | Custo | Quem paga |
|---|---|---|---|---|
| App | Next.js como PWA instalável | mesma stack de AgendaPRO e LocaPRO; ícone na tela e login salvo | — | — |
| Hospedagem | **Vercel Pro** | Hobby proíbe uso comercial, e isso inclui ser pago pra construir | US$20/mês por dev | Marko |
| Banco, login e fotos | **Supabase Pro** | Postgres + Auth + Storage; o Free pausa com 1 semana parado e dá 500 MB, que foto de roupa estoura | US$25/mês | Marko |
| Pagamento (venda de crédito, taxa) | **Asaas** | PIX e cartão, já usado e validado no AgendaPRO | taxa por transação | Marko |
| Aviso no celular | Web Push do PWA | grátis; no iPhone só funciona com o app instalado na tela (conferir versão) | — | — |
| Aviso importante (próximo tamanho) | WhatsApp Cloud API | canal que a mãe abre; custo por conversa | por conversa | Marko |
| Domínio | Registro.br (.com.br) | marca própria | anual, baixo | Marko |
| E-mail de conta | Resend ou SMTP do Supabase | confirmação e recuperação de senha | free no começo | — |
| Medição | Meta Pixel + painel próprio no Supabase | Pixel pra campanha; o painel mede sacola entregue e troca confirmada | — | — |
| Campanha | Meta Ads no Business Manager do Marko | Eduardo entra como parceiro, sem misturar com a conta da Impulso | verba de anúncio | Marko |
| Perfil | Instagram do app | onde a mãe confere antes de baixar | — | — |
| Suporte | WhatsApp Business | — | — | Marko |
| Código | GitHub na conta do Marko | Eduardo como colaborador | free | — |
| Erro em produção | Sentry (free) | ver quebra antes da mãe reclamar | free no começo | — |

**Fase 1 fica em torno de US$45/mês** (Vercel Pro + Supabase Pro), mais domínio anual e as taxas por transação do Asaas.

## Preços conferidos em páginas oficiais (13/09/2026)

| Item | Valor | Fonte |
|---|---|---|
| Asaas PIX | R$0,99 nos 3 primeiros meses, R$1,99 depois, por transação recebida | asaas.com/precos-e-taxas |
| Asaas boleto | igual ao PIX, só cobra se compensar | idem |
| Asaas cartão à vista | R$0,49 + percentual (o agente leu 2,99% promocional e 1,99% padrão, o que está invertido — **conferir na página**) | idem |
| Google Play, cadastro | US$25, taxa única | support.google.com/googleplay |
| Google Play, compra dentro do app | 15% até US$1 milhão/ano de receita, 30% acima | support.google.com/googleplay |
| Apple Developer | US$99/ano | developer.apple.com/programs |
| Apple, programa de pequeno negócio | 15% se a receita for até US$1 milhão/ano | developer.apple.com/app-store/small-business-program |
| Apple no Brasil (acordo com o CADE, jun/2026) | 10% ou 21% conforme o caso, +5% usando o pagamento da Apple, 15% ou 10% em link externo, 5% de taxa de tecnologia fora da loja | apple.com/newsroom |
| Resend free | 100 e-mails/dia, 3.000/mês | resend.com/pricing |
| Sentry free | 1 usuário, 5 mil erros | sentry.io/pricing |
| Registro.br | não confirmado (página não abriu no fetch) | — |
| WhatsApp Cloud API | cobrança por mensagem entregue desde jul/2025; valor por categoria não confirmado (calculadora dinâmica) | developers.facebook.com |

## Fase 2, só se o app de loja for decidido

- Google Play: US$25 de cadastro, taxa única. Apple: US$99 por ano.
- **O que muda o modelo:** moeda ou crédito virtual vendido dentro do app precisa passar pelo pagamento da loja. No Google Play são 15% até US$1 milhão de receita por ano e 30% acima disso. Na Apple são 15% pelo programa de pequeno negócio, e no Brasil, depois do acordo com o CADE em junho de 2026, **até venda por link externo passou a ter comissão**.
- Ou seja: cada R$100 de crédito vendido dentro de app de loja deixa pelo menos R$15 na loja. No app web instalável isso não existe.

## Cuidados vindos de projeto nosso

- **Egress de imagem no Supabase** foi problema no ComandaPRO. Comprimir a foto no celular antes de subir e servir em tamanho reduzido na listagem.
- **Vercel Hobby não serve.** Doc oficial: "receber pagamento para criar, atualizar ou hospedar o site" já é uso comercial.
- **Supabase Free pausa** depois de 1 semana sem uso, o que mataria um app em fase de mutirão.

## Decisão 8 (em aberto)

App web instalável agora, com loja depois × app de loja desde o início.
