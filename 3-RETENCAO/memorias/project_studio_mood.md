---
name: studio-mood
description: Studio Mood (Mood Hairstyle Store) · Salão + loja de tranças em Alagoinhas/BA · 4-5 atendentes · Izanara é a BOSS · lead AgendaPRO 22/05/2026 · reunião marcada 23/05 às 13h
metadata:
  node_type: memory
  type: project
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Cliente:** **Studio Mood** (header IG: `mood.hairstyle.store` · tagline "MOOD ✦ Salão e Loja de Tranças em Alagoinhas" · logo "STUDIO MOOD").
**Cidade:** **Alagoinhas / BA** (CORREÇÃO 22/05 madrugada — eu tinha cravado errado como Feira de Santana, mas IG mostra Alagoinhas. DDD 75 cobre as duas regiões. Confirmar com Izanara no abre da reunião).
**Contato:** WhatsApp +55 75 9905-1392 · **Izanara** é a BOSS/gestora (cravado por post IG "Hoje é o dia da nossa BOSS").
**Email cadastro AgendaPRO:** `iza-silva05@hotmail.com` (ela passou `gmail` por engano · CORREÇÃO: hotmail).
**ID auth Supabase:** `260809d9-1f86-4aaa-8e73-860d4d0b5a40`
**Status do cadastro (22/05/2026):** Conta criada em 22/05 03:12 madrugada (antes da reunião · curiosidade orgânica) · email confirmado · LOGOU SÓ 1X NA CRIAÇÃO · **SEM business cadastrado ainda** · próximo passo é finalizar `/cadastro` com Eduardo guiando ao vivo.
**Instagram:** `@mood.hairstyle.store` · https://www.instagram.com/mood.hairstyle.store
**Linktree (hub único):** linktr.ee/moodhairstory

⚠️ Correções 22/05: nome NÃO é MJOO (era leitura errada do site/sigla), é **Studio Mood**. Cidade NÃO é Feira de Santana, é **Alagoinhas**.

**Dados do drilldown CIC (22/05 madrugada · vide [[reference_ferramentas_claude_eduardo]]):**
- 3.897 seguidores · 215 posts · 320 seguindo · engajamento sólido (5-20 coment em posts de equipe, 0-6 em posts de serviço)
- Equipe: 4 mulheres uniformizadas (regata azul-marinho + calça preta) + Izanara gestora · estimativa **4-5 profissionais ativas**
- Mix monofocal em tranças afro: knotless (carro-chefe), boho, gypsy (Diamante/Charme), fulani, nagô, lemonade, ghanna, french curl. NÃO TEM manicure/química/corte.
- **Estoque é dor real**: highlights "✦ Disponíveis", "✦ Para cuidar", "✦ Acessórios", "✦ Jumbos", "✦ Parceiros" · bio explícita "Venda e delivery de materiais" · prateleiras com kanekalon/jumbo/cremes em vários reels
- Preço não público em nenhum post (10+ inspecionados) · gap "depende do tamanho/comprimento" · cobra por DM/WhatsApp/Linktree
- Linktree único hub de captação · CTAs genéricos "Vem garantir sua vaga" sem canal explícito
- Salão99 não confirmado nem refutado pelo IG · pergunta pivot pra reunião

**Como chegou:** lead orgânico via WhatsApp 22/05/2026 noite.

**Origem real cravada 22/05 pós-reunião:** ⚡ **ChatGPT recomendou AgendaPRO**. Izanara perguntou ao ChatGPT em 21/05 por sugestões de sistemas pra gerir catálogo + vendas de salão. ChatGPT listou 5 · refinou · AgendaPRO ficou entre os recomendados · ela contatou em 22/05 e fechou. Canal novo de aquisição cravado em [[canal-aquisicao-chatgpt-aeo]].

~~Hipóteses anteriores erradas:~~ Salão99 (CIC já não tinha confirmado) e Google gringo (também não). Lição: **sempre perguntar a origem no onboarding** em vez de assumir.

**Dores que Izanara verbalizou (no WhatsApp ANTES da reunião):**
- Quer mensagens automáticas via WhatsApp pros clientes
- **Pediu controle de estoque** · gap real (loja de materiais) · Task #67 cobre · v63 em construção 22/05 madrugada
- Perguntou se o AgendaPRO funciona como app ou navegador (resposta: ambos — PWA instalável no PC e no celular)

**Status:**
- 22/05 noite: primeiro contato + apresentação inicial + envio do link do Instagram
- **23/05 às 13h: reunião agendada** (Eduardo prometeu enviar lembrete 30min antes)
- Ainda não foi apresentada proposta de preço · ela perguntou "Quanto é o investimento?"

**Pricing oficial (cravado por Eduardo 22/05 · fonte src/config/pricing.ts):**
- **Solo R$ 67/mês** · 1 profissional + 1 colaborador
- **Equipe R$ 97/mês** · até 5 profissionais + 1 recepção inclusa
- 7 dias de garantia (reembolso · não é trial)
- Modalidades: mensal_cartao · mensal_pix · semestral_pix (~13% off) · anual_pix (~17% off)

## ✅ FECHADO 22/05/2026 pós-reunião AnyDesk

**Plano cravado: Equipe Mensal R$ 97**
- **Trial liberado: 25/05/2026 02:19 UTC** (provider=cortesia · plan=equipe · price_cents=9700)
- **Izanara só começa a usar 29/05 (sexta)** · ela avisou no WhatsApp · por isso estendemos pra 11 dias (em vez de 7 default) — dando 7 dias úteis de uso real a partir do dia que ela engaja
- **Fim do trial: 05/06/2026 (sexta)** — converter pra mensal_pix R$ 97 (BLOCO 4 grant-trial)
- Subscription row: plan=equipe · status=active · provider=cortesia · price_cents=9700 · pago_ate=2026-06-05

**Padrão aprendido (cravado 25/05):** trial não deve começar a contar da liberação se o cliente ainda não vai usar · negociar data de início real com o cliente e setar `pago_ate = start_real + 7d`.
- Pitch que ganhou: Catálogo de Produtos = diferencial Equipe ([[feedback_produtos_diferencial_equipe]])
- Reunião conduzida via AnyDesk com Eduardo compartilhando tela do PC dele (logado como Palace · mostrou /admin · /admin/produtos · entrada · venda · clientes)

**Drilldown catálogo Kyte (22/05 madrugada CIC):**
- URL: https://moodstore.kyte.site/pt-BR · plano FREE (banner promocional Kyte aparece)
- **~85 SKUs reais** (69 nomes únicos + variantes de cor · ex JUMBO EVOLUTION em 6 cores, BELEZA G PLUS em 4)
- ZERO categorias estruturadas (lista alfabética única) · ZERO controle de estoque visível · ZERO carrinho · 100% via WhatsApp
- 6 marcas identificadas: **Cherey** (dominante · linhas Evolution/Hiper X/Bio Orgânico), BeYou, Brazilian Idol, Fashion Line, Morden Girl, Ser Mulher
- Faixa de preço: R$ 1,00 (brinde) → R$ 169,90 (Combo Miga Sua Loka) · ticket médio cabelo R$ 119-140
- WhatsApp diferente do briefing: catálogo mostra **75 9991-6043**, IG/briefing **75 9905-1392** · ⚠️ confirmar qual é loja vs pessoal
- Endereço cravado no Kyte: **15 de Novembro - Alagoinhas/BA**

**4 perguntas pivot pra abrir a reunião (em ordem):**
1. "Vocês são em Alagoinhas mesmo? Eu tinha registrado Feira de Santana — só pra ajustar."
2. "O WhatsApp da loja é 9991-6043 ou 9905-1392? Vi os 2 nos seus canais." (cliente percebe atenção a detalhes)
3. "Vocês usam algum sistema hoje pra agenda, ou tá tudo no WhatsApp + planilha?" (mata hipótese Salão99)
4. "E o controle de estoque — vi os ~85 itens no catálogo Kyte, como você controla quanto tem de cada hoje?" (prova que estudei + abre pra demo do estoque)

**Why guardar:** lead ativo · janela curtíssima (decide depois da reunião) · estoque vai ser entregue antes da reunião pra virar munição comercial.

**Demo via AnyDesk (cravado 22/05 14h):** Eduardo entra no PC da Izanara via AnyDesk · loga como Palace e mostra o sistema ao vivo · ponto de entrada usado: `https://agenda-pro-seven.vercel.app/admin/clientes` (domínio preview que serve o mesmo código de produção · sessão Palace ativa).

⚠️ Risco operacional cravado em [[feedback_cic_salao99_marko_read_only]] vale aqui também — não clicar Cancelar/Excluir/Faturar dados reais do Palace durante a demo · trocar senha Palace depois.

## Estado pra demo (cravado 22/05/2026 14h pré-reunião)

Reunião antecipada do 23/05 13h pra agora · vide [[agendapro-modulo-produtos-estado]].

**Roteiro de demo sugerido:**
1. `/admin/produtos` · mostra cadastro com KPIs e filtros · cards 3D com foto · CTAs Entrada/Vender/Novo
2. **Entrada de Estoque** com fornecedor inline + NF + 1 produto · gera despesa automática (gap Salão99)
3. **Vender Produto** com cliente · baixa estoque visual · comissão snapshot
4. **Drawer Histórico** mostra timeline · 3 tabs
5. **Foto de produto** com compressão automática
6. **Widget "Estoque baixo"** na Home se houver

**Cartas pro pitch:**
- "Vocês têm 85 produtos no Kyte? Aqui já cadastram com Marca/Categoria/Variante/Foto/Validade · igual ao Salão99 mas com FOTO comprimida"
- "Quando comprar do fornecedor: registra entrada e a despesa entra automática no Fluxo de Caixa (Salão99 não tem)"
- "Toda venda dá baixa de estoque automática · alerta se vai pra negativo"
- "Equipe Anual R$970 cobre tudo: 4-5 atendentes + agenda + clientes + estoque + caixa"

**Gaps que NÃO estão prontos (se Izanara perguntar):**
- "Onde aparece o histórico geral de vendas de produto?" → ainda não, está na próxima entrega (tela `/admin/financeiro/vendas-produtos` ~45min de trabalho)
- "Hidratação consome creme automático?" → próxima entrega (Service↔Produto · ~2-3h)
- "Comissão entra no fechamento do mês?" → próxima entrega (~3h)

**How to apply:**
- Não inflar nomes/relações · Izanara é BOSS cravada · resto (CPF, idade, histórico) NÃO TEM
- Replicar pegada que fechou Palace: prova social + import + entregar acesso na mesma reunião
- Demo de estoque na reunião (v63 entregue até 13h) · "olha, exatamente o que você pediu"
