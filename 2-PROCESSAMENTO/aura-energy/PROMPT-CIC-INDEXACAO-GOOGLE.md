# Prompt CIC — Indexar Aura Energy no Google

> **Quem executa:** Claude In Cursor (CIC) — agente de navegador
> **Pré-requisito Eduardo:** decidir email Google da Aura (sugestão: criar `aura.energy.tocantins@gmail.com` novo) e passar credencial pro CIC
> **Tempo estimado:** 30-45 min total
> **Output:** Search Console verificado + sitemap submetido + GMB criado + Pixel + GA4 IDs prontos pra setar no Vercel

---

## 📋 PROMPT (cola num chat novo do CIC)

```
Tarefa: configurar indexação Google + analytics da Aura Energy.
LP em produção: https://auraenergy.vercel.app
Conta Google a usar: edubchaves5@gmail.com (Eduardo Barros · dono Impulso Digital)
Estratégia: rodar tudo nessa conta pra agilizar; transferir/compartilhar
ownership pro Renato depois quando ele tiver conta Google ativa
(Search Console + GA4 + GMB suportam transferência sem retrabalho).
Senha: já estou logado nessa conta no navegador.

CONTEXTO RÁPIDO
- Aura Energy é empresa de energia solar de Renato Edson em Palmas-TO.
- LP já online (auraenergy.vercel.app), feita pelo Eduardo + Verbo (Claude Code).
- Verbo já configurou no código:
  - public/robots.txt (aponta sitemap)
  - src/app/sitemap.ts (sitemap dinâmico Next.js 16)
  - layout.tsx com metadata.verification.google + GA4 + Meta Pixel
    todos lendo de env vars (NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_META_PIXEL_ID)
- Falta só você fazer o lado UI (criar contas, copiar IDs, setar no Vercel)

EXECUTAR EM ORDEM:

═══════════════════════════════════════════════════════════════
ETAPA 1 · GOOGLE SEARCH CONSOLE (15min)
═══════════════════════════════════════════════════════════════

1.1. Login em search.google.com/search-console com a conta da Aura.

1.2. Adicionar Propriedade → escolher tipo "Prefixo do URL"
     URL: https://auraenergy.vercel.app
     (NÃO usar tipo "Domínio" porque ainda não tem auraenergy.com.br)

1.3. Verificar propriedade — escolher método "Tag HTML":
     Google vai mostrar uma string tipo:
     <meta name="google-site-verification" content="ABC123xyz..." />

     COPIA APENAS o valor de content (ex: "ABC123xyz...")

1.4. Setar essa string como env var no Vercel:
     - Acessa vercel.com/impulsodigitals-projects/auraenergy/settings/environment-variables
     - Adiciona variável: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
       Value: [string copiada]
       Environment: Production
     - Salva

1.5. Redeploy a Vercel (Deployments → Redeploy → use existing build cache: NO)

1.6. Volta no Search Console → clica VERIFICAR
     Se passar: ✅ propriedade verificada.

1.7. Em Sitemaps (menu lateral esquerdo) → adiciona sitemap:
     URL: https://auraenergy.vercel.app/sitemap.xml
     Submete.

1.8. Aguarda 24-48h pra Google indexar — esperado: 9 URLs aparecerem
     no Search Console como "Descoberto" → "Indexado".

═══════════════════════════════════════════════════════════════
ETAPA 2 · GOOGLE ANALYTICS 4 (10min)
═══════════════════════════════════════════════════════════════

2.1. Login analytics.google.com com a mesma conta Google.

2.2. Criar nova conta:
     Nome da conta: Aura Energy
     País: Brasil
     Moeda: Real (BRL)

2.3. Criar propriedade:
     Nome: Aura Energy LP
     Fuso horário: Brasília (UTC-3)
     Setor: Energia / Outros

2.4. Configurar fluxo de dados Web:
     URL: https://auraenergy.vercel.app
     Nome do fluxo: LP Principal

2.5. Copiar o ID de medição (formato G-XXXXXXXXXX).

2.6. Setar no Vercel:
     Variável: NEXT_PUBLIC_GA4_ID
     Value: G-XXXXXXXXXX
     Environment: Production

2.7. Redeploy.

2.8. Voltar no GA4 → DebugView → confirmar evento PageView aparecendo
     ao acessar a LP.

═══════════════════════════════════════════════════════════════
ETAPA 3 · GOOGLE MEU NEGÓCIO / GOOGLE BUSINESS PROFILE (15min)
═══════════════════════════════════════════════════════════════

3.1. Acessar business.google.com com a mesma conta Google.

3.2. Adicionar empresa:
     Nome: Aura Energy
     Categoria principal: "Empresa de instalação de painéis solares"
     (Categorias secundárias: "Engenheiro elétrico", "Empresa de energia
     solar", "Empresa de manutenção elétrica")

3.3. Adicionar local físico:
     Endereço: [Eduardo confirma com Renato — provavelmente endereço
     da Brasfrio em Palmas]
     OU se a Aura é só online sem atendimento físico: "Não, atendo
     clientes em locais externos"
     Área de atendimento: Palmas-TO + região metropolitana + Tocantins

3.4. Adicionar telefone WhatsApp Business:
     (63) 99268-8852
     ✅ marcar "este é meu WhatsApp"

3.5. Adicionar website: https://auraenergy.vercel.app

3.6. Verificação:
     - Se aparecer "Vídeo" → escolher (instantâneo se aprovado em 5 dias)
     - Se aparecer "Postcard pelo correio" → solicitar (chega em
       5-14 dias úteis pra Palmas-TO)
     - PARAR aqui e REPORTAR ao Eduardo qual método foi oferecido

3.7. APÓS verificação aprovada (futuro):
     - Adicionar fotos: logo + capa + 3-5 fotos de instalações reais
     - Horário: Seg-Sex 8h-18h · Sáb 8h-12h
     - Descrição (200 chars): "Energia solar fotovoltaica em Palmas-TO.
       Engenheiro CREA-TO, projetos sob ART, financiamento Solfácil/BV/
       Sicredi, garantia 25 anos. Simulação grátis em 1 minuto."

═══════════════════════════════════════════════════════════════
ETAPA 4 · META PIXEL (Facebook/Instagram Ads) — OPCIONAL
═══════════════════════════════════════════════════════════════

(SE Eduardo já confirmou que vai rodar Meta Ads. Se não, pula.)

4.1. business.facebook.com → Eventos Manager → Conectar fonte de dados → Web

4.2. Criar Pixel:
     Nome: Aura Energy LP

4.3. Copiar ID (formato 1234567890123456).

4.4. Setar no Vercel:
     Variável: NEXT_PUBLIC_META_PIXEL_ID
     Value: [ID copiado]
     Environment: Production

4.5. Redeploy.

4.6. Verificar funcionamento:
     - Instalar extensão Chrome "Meta Pixel Helper"
     - Acessar https://auraenergy.vercel.app
     - Confirmar que extensão acende verde + mostra "PageView" disparou

═══════════════════════════════════════════════════════════════
DELIVERABLES FINAIS (me reporta)
═══════════════════════════════════════════════════════════════

[ ] Search Console verificado · sitemap submetido · screenshot
[ ] GA4 ID setado · DebugView mostrando PageView · screenshot
[ ] GMB criado · método de verificação solicitado · screenshot
[ ] Meta Pixel (se aplicável) · ID setado · helper acende verde
[ ] Lista de URLs do Vercel onde adicionou env vars
[ ] Avisos/erros encontrados no caminho

REGRAS:
- Não faz nenhum passo se travar em CAPTCHA / 2FA — para e me chama.
- Se Google pedir verificação adicional (telefone, recovery email),
  para e me chama — eu te passo o número.
- Não ativa nada que custe dinheiro (Ads pago) sem confirmar com Eduardo.
- Em caso de dúvida: PARA, reporta, espera retorno.
```

---

## 🎯 Quando Rodar Esse Prompt

**Pré-requisitos antes de mandar pro CIC:**

1. ✅ Eduardo decidiu o email Google (qual conta vai ser dona da Aura)
2. ✅ Vercel deploy do código rodou (envs `NEXT_PUBLIC_*` já criadas no `layout.tsx`)
3. ✅ Senha do Google em formato seguro pra passar pro CIC
4. ⏳ Endereço físico da empresa (Brasfrio Palmas — confirmar com Renato se vai usar)
5. ⏳ Logo Aura em PNG/JPG (CIC vai precisar pra GMB)

**Quem executa cada etapa:**

| Etapa | CIC faz | Eduardo precisa |
|---|---|---|
| 1 — Search Console | Tudo automático | Só passar credencial Google |
| 2 — GA4 | Tudo automático | Só passar credencial |
| 3 — GMB | Tudo até verificação | Confirmar endereço físico antes |
| 4 — Meta Pixel (opcional) | Tudo automático | Decidir se vai rodar Meta Ads (se não, pula) |

**Tempo total CIC:** ~45 min se tudo correr bem · até 2h se houver CAPTCHA / 2FA / verificação extra.

---

## 🚦 Decisão tomada (08/05/2026)

✅ Usar conta `edubchaves5@gmail.com` pra agilizar lançamento.
⏳ Transferir/compartilhar ownership pro Renato depois — sem retrabalho.

## Como transferir depois (resumo)

| Serviço | Caminho |
|---|---|
| **Search Console** | Settings → Users and permissions → Add user → email Renato → permission "Owner" |
| **GA4** | Admin → Account access management → Add user → email Renato → role "Administrator" |
| **GMB** | Configurações → Gerenciadores → Convidar → Renato como "Proprietário principal" (Eduardo vira "Manager") |

**Recomendação:** rodar tudo agora, adicionar Renato como co-owner assim que ele tiver Gmail ativo. Em 30 dias provavelmente já vamos transferir.

---

**Ver também:** [[STATUS-AURA-ENERGY]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]] · [[STATUS-IMPULSO]]
