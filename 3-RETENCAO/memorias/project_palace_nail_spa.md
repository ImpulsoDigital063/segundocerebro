---
name: palace-nail-spa
description: Palace Nail Spa Macaé · esmalteria/SPA dos pés premium · casal Marko (dono · PT-EU · desconfiado · sabe mercado) + Luana (esposa · adm) · 17/05/2026 fechou Equipe Anual R$970 trial 7d cortesia
metadata: 
  node_type: memory
  type: project
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

**Cliente:** Palace Nail Spa Macaé · esmalteria que também é SPA dos pés · alto padrão.
**Fechamento:** 17/05/2026.
**Plano CONFIRMADO 24/05:** **Equipe Anual R$ 970** (modalidade `anual_pix` · `price_cents = 97000`). 1 pagamento anual cobre 12 meses. Não é R$97/mês.

**Trial cortesia:** começou 17/05 com 7 dias · ESTENDIDO +9 dias em 24/05 a pedido do Marko · **novo vencimento 02/06/2026** · rodar BLOCO 4 (converter pra pagante anual_pix R$970) em 02/06 às 9h.
**business_id Supabase:** `ee6f0b22-5a46-406a-a3d4-b901551c4261`
**slug:** `palace-nail-spa` · URL pública `agendapro.net.br/palace-nail-spa`
**email Adm:** `palacenailspamacae@gmail.com` · senha temp `Palace2026!` (Luana troca depois)

**Pessoas (3 perfis distintos · não confundir):**

**ADM (donos · usam tela `/admin`):**
- **Marko** (dono · fala inglês · português europeu · PT-EU) · administra mas não atende · contato principal no Whatsapp · desconfiado · compara com concorrência (Trinks, Booksy, ZenPlace, AgendaPro.com).
- **Luana** (ESPOSA DO MARKO · SÓCIA · co-dona · co-Adm) · administra mas não atende · USA `/admin` junto com Marko. NÃO É RECEPCIONISTA — erro recorrente, evitar.

**RECEP (usa tela `/recepcao`):**
- **Leticia** (RECEPCIONISTA real · lelemathias00@icloud.com · senha `leticia2026`) · funcionária contratada.

**Profissionais atendentes (usam tela `/profissional`, veem só os próprios agendamentos):**
- Kelle Monique, Sofia, Ariana, Dos Santos Souza (Susana), Divina (Patricia).
- **6ª atendente extra prometida por Eduardo ("incluirei mais 2 profissionais sem cobrança extra") · ainda não definido nome · trigger v30 trava em 5 · precisa override por business pra liberar 6.**

**Promessas REAIS feitas no Whatsapp que ainda não entregamos:**
1. **+2 atendentes além do limite Equipe** (Eduardo: "Pra você vou adicionar mais 2 profissionais. Já que o Adm não atende") · trigger v30 trava em 5 · precisa override por business pra liberar 7
2. **Entregar acesso hoje à noite** (login da Luana + login dos profissionais + dados Salão 99 importados)
3. Import dos arquivos do Salão 99 (clientes + serviços + agendamentos)

**O que NÃO foi prometido (Marko pediu mas Eduardo só sinalizou "depois"):**
- **Taxas de cartão por bandeira** · Marko mandou print InfinitePay (Amex 4.91% / Master 3.15% / Visa 3.15% / Elo 2.58%) — esse print é do **agendapro.com/br (concorrente)**, não do Salão 99 dele. Marko tava pesquisando alternativas antes de fechar e confundiu Impulso com concorrente. Eduardo cravou "Vou lhe entrar o acesso · Aí depois ataco essa funcionalidade" e Marko aceitou.

**ATENÇÃO sobre os prints da conversa (imagens 12+ que mostram 30+ permissões, notas fiscais, remunerações etc):** TODOS esses prints são de **agendapro.com/br** (concorrente estrangeiro), NÃO do Salão 99 (sistema antigo do Marko). Marko mandou enquanto comparava alternativas. Marko NÃO espera essas features no nosso sistema — já entendeu que somos empresa brasileira diferente. Não tratar como gap a cobrir.

**Sistema antigo real dele = Salão 99** (mais simples que AgendaPRO; vide arquivos CSV que importamos).

**Única feature pendente que Marko pediu concretamente:** taxas de cartão por bandeira (pra fechamento de caixa correto) · Eduardo cravou "depois" e Marko aceitou.

---

## ESTADO PÓS-SESSÃO 17/05/2026 NOITE

**Em prod (já funcionando):**
- 872 clientes importados do Salão 99
- 41 serviços importados (com preço + duração normalizados)
- 1435 agendamentos importados (606 Concluído + 394 Marcado + outros legacy)
- 69 despesas importadas via export CSV Salão99 (R$ 18.892,27 · 02/03-13/04/2026 · v59 add coluna import_external_id pra idempotência)
- 6 logins prontos · Adm (Luana) + 5 profs + 1 recep (Leticia)
- Recepcionista funcional em /recepcao (Leticia loga via /profissional/login → redireciona)
- Bug do loop de login pós-trocar-senha resolvido (auth.updateUser em vez de admin.updateUserById)
- Vercel webhook ainda quebrado · deploys via CLI (`npx vercel --prod --yes`)

**Feature TAXAS DE MAQUININHA implementada (universal · aguarda v49 rodar):**
- Migration v49 escrita: `supabase-migration-v49-merchant-fees.sql`
- Adiciona tables merchant_devices + merchant_device_fees
- Adiciona 4 cols snapshot em appointments
- UI: aba 'Maquininhas' em /admin/configuracoes
- Sub-modal de cartão no PaymentMethodModal: ao escolher Cartão, abre step 2 com maquininha + tipo + bandeira + calcula taxa + mostra valor líquido
- APIs aceitam cardDetails (payment + profissional/action)

**Pendências quando Eduardo voltar (em ordem de prioridade):**

1. **Rodar migration v49** no Supabase SQL Editor (sem isso, aba Maquininhas quebra)
2. **Validar Leticia em /recepcao** (senha resetada pra `leticia2026`, password_changed=false · loga em agendapro.net.br/profissional/login → cria senha → deve cair em /recepcao com abas Agenda + Clientes)
3. **Eduardo cadastra maquininhas/taxas** em /admin/configuracoes (aba Maquininhas) pra Palace começar a usar
4. **Mandar credenciais pra Luana** (palacenailspamacae@gmail.com · senha `Palace2026!`) e pros 5 profs + Leticia (senhas em [[palace-nail-spa]] anexo)
5. **Resolver webhook Vercel** (sessão futura · Task #13 cobre · vide [[vercel-cdn-cache-auth]])
6. Em 24/05/2026 rodar BLOCO 4 do script `grant-trial-palace-nail-spa.sql` pra converter cortesia → anual_pix R$970

**Credenciais (resetar quando Eduardo entregar pro cliente):**
- Luana (Adm): palacenailspamacae@gmail.com · `Palace2026!`
- Kelle Monique: kellemoniqueeloysantoscardoso@gmail.com · `kelle2026`
- Sofia: sofiasouzaiiiix@gmail.com · `sofia2026`
- Ariana: arianainacio7251@gmail.com · `ariana2026`
- Dos Santos Souza: suziunica123@gmail.com · `susana2026`
- Divina: patriciavasconcellos37222@gmail.com · `divina2026`
- Leticia (RECEP): lelemathias00@icloud.com · `leticia2026`

**Why guardar:** cliente premium R$970 anuais · 1ª venda Equipe Anual da Impulso · Marko é referência alta no padrão de feature · qualquer sessão futura de AgendaPRO precisa lembrar dos compromissos pendentes pra Palace.

**How to apply:**
- Quando Eduardo perguntar do "estado da Palace" · começar pelo que tá pendente das promessas, depois gaps
- Features novas que Marko pediu (taxas, permissões) · construir UNIVERSAL no AgendaPRO, não exclusivo Palace (vide [[universal-nao-personaliza-cliente]])
- Lembrar do trial: dia 24/05/2026 BLOCO 4 do script `grant-trial-palace-nail-spa.sql` converte pra anual_pix R$970 e ativa cobrança Asaas
- Linkar com [[agendapro-estado-15-05]] e [[viva-cacheada]] (outro trial cortesia ativo)
