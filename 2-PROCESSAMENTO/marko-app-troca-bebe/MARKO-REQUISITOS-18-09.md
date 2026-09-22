# Marko · retorno ao plano e requisitos do contrato (18/09/2026)

> Mensagens enviadas pelo Marko ao Eduardo depois de ler o plano. Coladas pelo Eduardo em sequência. Texto original preservado abaixo (base para o contrato e o escopo).

## Texto 1
I did, can we negotiate the partial payments of the price, i need more installments. Then

## Texto 2
1. After final payment, do I own 100% of the source code?
2. Will I receive the Git repository and full source code?
3. Can the entire system operate without Impulso Digital?
4. Will Supabase and Vercel accounts ultimately be in Baby Loop's company name?
5. Who owns the database and all user/customer data?
6. Are all features listed in sections 5–21 included in the R$8,997 with no additional development charges?
7. What exactly is covered by the 90-day warranty?
8. What happens if a promised feature is incomplete at public launch?
9. Will I receive full technical documentation and administrator credentials?
10. If Impulso Digital disappears tomorrow, can another developer take over Baby Loop without needing their permission?

## Texto 3
Then i need all this in contract

## Texto 4
Then we need to talk about: international adaptations · future updates/features · monthly maintenance after warranty · advertising management · blog monetization

## Texto 5
And most importantly we need a lawyer to write terms and conditions according to: consumer law · taxation · credit/points structure · refund rules · marketplace liability · LGPD · children's data · terms of use · moderation · prohibited products · disputes · abandoned balances · expiration/non-expiration of points · fraud

## Texto 6
The law part is the fragile one

## Texto 7 (longo)

I like the direction and I'm interested in moving forward. Before we finalize the agreement and first payment, I would like to align on a few changes and requirements.

My priority is not to add unnecessary features. I want the core Baby Loop experience to be extremely simple, reliable and ready for real users.

1. CORE USER FLOW — Child grows → parent lists clothes → earns Loop Credits → finds the next size → requests a bundle → credits are reserved → seller accepts → shipping/local handoff → buyer receives → confirms → credits are released → user repeats the process. Please make sure this entire flow works as a real end-to-end system, not only as a prototype/demo.

2. ONBOARDING — User should understand the concept within ~30 seconds. Suggested message: "Give clothes your child has outgrown. Earn Loop Credits. Use them to get the next size." Registration should preferably include: Google login · Apple login if technically practical · Parent profile · Multiple children under one account · Child birthday/age · Current clothing size. Avoid unnecessary information during initial registration.

3. HOME SCREEN — Child/children · Current size · Next recommended size · Available Loop Credits · Number of user's active listings · Recommended bundles · Quick access to "Find Clothes" · Quick access to "Give Clothes". Next size highly visible. Example: "Teo is likely to need size G soon." "12 G bundles available" [SEE THEM]

4. MARKETPLACE — Filters: child size · age · category · gender (optional) · distance · local pickup vs nationwide shipping · condition · bundle/individual item. Each listing clearly shows 🏠 Local pickup or 🚚 Ships nationwide. Users must not discover only at checkout that an item cannot be shipped.

5. BUNDLES — Main product. Bundle page shows: number of pieces · size · age range · category · condition · photos · individual items · credits required · shipping availability/cost · approximate location · seller Trust Score. Example: SIZE G — 12 pieces · 8 tops · 3 bottoms · 1 jacket · 180 Loop Credits · 🚚 Ships nationwide · [GET THIS BUNDLE]

6. LISTING PROCESS — ~2 minutes. Step 1 photos · Step 2 item/category · Step 3 size · Step 4 condition · Step 5 preview credits earned · Step 6 publish. Clear visual examples for condition grades: A+ like new · A excellent · B good/normal wear · C visible wear. User understands the difference before selecting.

7. LOOP CREDIT SYSTEM — Wallet extremely transparent: Available · Reserved · Total · History (e.g. +144 Listing accepted · -180 Bundle requested · +40 Credit purchase). During a swap: "180 credits reserved" and "Available balance: 4 credits". Users should never wonder where their credits went. Explain the difference between credits earned and credits required.

8. CREDIT PURCHASE — Packages 40/R$29.90 · 90/R$59.90 · 200/R$119.90. Contextual purchase: "You are 36 credits short of this bundle." [BUY 40 CREDITS — R$29.90] instead of a generic page. PIX must work as a real payment flow.

9. SWAP REQUEST FLOW — Clear status tracker: 🟢 Requested · 🟢 Accepted · 🟡 Waiting for shipment · ⚪ In transit · ⚪ Received · ⚪ Confirmed. Clearly display "180 credits reserved". User always knows the stage.

10. DISPUTE / PROBLEM REPORTING — IMPORTANT, essential before launch. Reasons: missing item · wrong size · condition worse than described · damaged · different item · other. Photo uploads. Credits remain protected/reserved until resolved. Admin interface to review and resolve disputes. Included in MVP scope.

11. QR HANDOFF — "SCAN TO COMPLETE SWAP" · QR · "Confirm only after checking the items." · [EVERYTHING OK — COMPLETE SWAP] · [REPORT A PROBLEM]. Report always available before finalizing.

12. SHIPPING — Melhor Envio must be a real working integration, not a simulated screen. Flow: select bundle → calculate shipping → choose carrier → pay shipping → seller receives label/instructions → tracking number generated → tracking status shown in Baby Loop → buyer receives → buyer confirms. Responsibility for shipping payment and label generation clearly defined.

13. CHAT — Simple. Topics: pickup time · shipping · questions about the bundle · handoff. Block phone numbers, external links, PIX keys (anti-fraud). Quick replies: "Today" · "Tomorrow" · "I'll ship tomorrow" · "I'm on my way".

14. TRUST / REPUTATION — Understandable, not like a financial credit score. Example: Trusted Loop Member 96% · 98 swaps completed · 97 successfully confirmed · 1 late handoff. Takes into account: successful swaps · cancellations · late handoffs · disputes · buyer/seller ratings. Define how the score is calculated.

15. NEXT-SIZE RECOMMENDATION — One of the most important retention features. Based on child's age/current size. Prominent on home, potentially notifications.

16. WISHLIST / DEMAND ALERTS — "Alert me when Size G bundles become available." Ideally: "Child likely needs Size G in approximately 3 weeks."

17. DEMAND GAP ADMIN DASHBOARD — Supply vs demand. Example: SIZE G — Rio de Janeiro · 82 parents searching · 19 bundles available · 63 bundle shortage. Filters: size · city/region · age · category · time period. Track zero-result searches. For targeted campaigns.

18. ADMIN DASHBOARD — First screen = needs attention: delayed swaps · open disputes · listings awaiting moderation · failed payments · shipping problems. Then: active users · active listings · swaps · credits issued · credits spent · credit purchases · revenue · shipping activity · supply/demand · disputes · trust/ratings.

19. IMPACT COUNTER — Simple: "You helped reuse 47 pieces." On profile/dashboard. No complicated gamification.

20. ENGLISH VERSION — MVP prioritizes Portuguese and functionality. Bilingual fine only if easy within the quoted price; otherwise Portuguese first.

21. BLOG / SIZE CALCULATOR / SEO — Must not compromise core. Priority: Marketplace → Credits → Swaps → Shipping → Trust → Disputes → Next-size → Admin/supply-demand. Blog, advanced SEO, affiliate can remain secondary.

22. NOT NOW — Native iOS · native Android · advanced AI recommendations · complex gamification · advanced social features · international expansion · complicated subscription.

23. SOURCE CODE / OWNERSHIP — VERY IMPORTANT. Confirm in writing that after full payment he receives ownership/access to: complete source code · Git repository · database · Supabase project · Vercel project · domain · API credentials · payment integration · Melhor Envio integration · admin credentials · design/assets · technical documentation. Prefers production infrastructure and accounts created under Baby Loop's ownership rather than depending on Impulso. If Impulso were no longer available tomorrow, another developer should be able to take over without permission or access from Impulso.

24. 90-DAY WARRANTY — Cover bugs/failures in the agreed MVP scope. Define response/resolution for critical · high-priority · normal bugs. Clarify what happens if an agreed feature is incomplete or not working as specified at launch.

25. FINAL ACCEPTANCE — Final 25% tied to successful delivery/public launch of the agreed MVP. Before acceptance, verify: registration · child profiles · listings · credits · credit purchases · swap requests · credit reservation · seller acceptance · shipping · tracking · QR handoff · confirmation · disputes · chat · trust/reputation · notifications · admin dashboard · demand/supply analytics.

FINAL PRIORITY — Not the largest number of features; a simple, trustworthy, frictionless core loop (outgrows → list → earn → find next size → request bundle → credits reserved → ship/handoff → receive → confirm → credits released → repeat).

He asks: which points are already included in the R$8,997 scope, which require changes to the current prototype, and which would represent additional costs. The final agreement/scope must explicitly include agreed features, ownership, infrastructure access, warranty and acceptance criteria.

## Texto 8
Of course we will talk about everything how the app grows.

## Texto 9
Also, what should we do at the beginning in order to fill up the parents base?

## Texto 10
If we can make it 30-30-40% also works instead of more installments. But lets talk about legal part first

---

## Decisão do Eduardo (18/09/2026)

- Aceitar todas as exigências do Marko.
- Código-fonte 100% do Marko; Git, Vercel e Supabase criados com o e-mail dele; outro desenvolvedor pode continuar.
- R$ 8.997 é o setup Brasil (valor reduzido para não ser barreira).
- Entrada de R$ 4.400 (o início é a fase de maior custo de desenvolvimento). Os R$ 4.597 restantes podem ser parcelados em mais vezes, com a última parcela no aceite final.

---

## Resposta do Marko ao esboço do contrato
Hi, i will be working in next period, let me review everything and i will come back to you.
Good part is that we will do it however i need to discuss details with lawyer, please split 9000 on 30-30-40 as a final payment. 3000 as signature payment. Also we need to make sure that app is not lagging at all please speed is very important. I am telling you this because salon app is lagging a lot and i wanted to discuss this with you but its not an emergency.

## Pergunta pessoal
Where are you from? I will be in Rio on 1st of October

## Revisões do contrato (20 pontos) — resumo fiel
Antes de assinar e pagar, quer na versão final:
1. Sem aceite automático: aceite só com testes concluídos e aprovados por ele (pode ter período de teste, mas silêncio não vale aceite).
2. Rescisão × propriedade: se rescindir por falha da Impulso, todo trabalho já pago (código, banco, documentação, assets) fica com o Baby Loop sem pagamento extra.
3. Definir "entrega": versão de produção disponível e testes de aceite executáveis; protótipo ou versão parcial não conta.
4. Cada parcela ligada a entregável objetivo: M1 R$ 4.400 (início, contas/infra, começo do desenvolvimento) · M2 R$ 1.532,34 (marketplace em produção + testes correspondentes) · M3 R$ 1.532,33 (créditos, reserva, compra e PIX real + testes) · M4 R$ 1.532,33 (restante + sistema de produção + testes finais).
5. Distinguir queda de terceiro (fora) de implementação/integração errada da Impulso (coberta pela garantia), p.ex. Melhor Envio e PIX.
6. Garantia cobre defeitos do software entregue que afetem: integridade de dados, banco, vulnerabilidades causadas pela implementação, autenticação/controle de acesso, pagamento crítico, marketplace crítico (não ataques externos nem quedas de terceiros).
7. Backup: frequência, retenção, se restaura após falha, quem controla.
8. Incidente de segurança/LGPD: Impulso avisa o Baby Loop assim que razoavelmente possível; credenciais e contas de produção sob controle do Baby Loop.
9. Todas as contas do Baby Loop, explícito: GitHub, Vercel, Supabase, domínio, PIX, Melhor Envio, autenticação Google/Apple, qualquer outro serviço essencial. Impulso só colaboradora/admin quando necessário.
10. Entrega completa: código, repo, banco, Supabase, Vercel, domínio, credenciais de API, PIX, Melhor Envio, admin, documentação técnica, configuração de ambiente, design/assets. Nada essencial só com a Impulso.
11. Anexar a fórmula do Trust Score (conclusões, cancelamentos, atrasos, disputas, avaliações, outros).
12. Especificar notificações (próximo tamanho, lista de desejos, status, aceite, envio, entrega, disputas) e o canal: push do navegador/PWA e/ou e-mail.
13. Disputas 100% incluídas: relatar, motivo, foto, créditos protegidos, aviso às partes, painel admin, resolução, liberação/devolução conforme decisão.
14. Melhor Envio real: cotação, escolha, pagamento, etiqueta, rastreio, status no app; deixar claro o que é do Baby Loop e o que depende do Melhor Envio/transportadoras.
15. Anúncio mostra "retirada local" ou "envia para todo o Brasil" antes do checkout.
16. Créditos só liberados depois da confirmação de quem recebe; em disputa legítima ficam protegidos.
17. Preencher todos os campos antes de assinar (Baby Loop, CNPJ, endereço, identificação dele, Impulso, CNPJ, endereço, representante, data, foro, assinaturas, testemunhas).
18. Limite de responsabilidade: exceções para dolo, culpa grave, quebra de confidencialidade, violação de PI, violação de proteção de dados/segurança. Vai revisar a versão final com advogado local.
19. Secundários (inglês, blog, SEO, afiliados) não podem atrasar o MVP; pode simplificar para proteger as 12 semanas.
20. Tudo que está no escopo e nos testes está incluso nos R$ 8.997; não vira adicional por dar mais trabalho; adicional só para funcionalidade nova, com aprovação prévia por escrito.
Final: confortável com R$ 8.997 e com a estrutura de marcos; com os pontos incorporados e os dados preenchidos, pronto para seguir.

## Mensagens finais do Marko
Most of this is just general stuff that we need to cover, more important is can i count on your help and support to make this project work?
As i mentioned you before there is more and i would like that if we succeed in this one, we maybe consider partnership in future

## Resposta do Marko (sexta-feira 19/09/2026, 20:07)
"Ok, i can give you an answer in couple of days i am waiting for the lawyer to respond." (Eduardo reagiu com 👍)
Situação em 22/09: aguardando o advogado do Marko. Nada pendente do nosso lado além de preencher os dados do contrato.
