# Auditoria RadarPRO — 25/04/2026

**Escopo:** sistema técnico completo — estrutura, banco, APIs, UI, segurança, deploy.
**Tempo de auditoria:** ~40 min minuciosos.
**Build:** ✅ passa limpo nesse momento.
**Repos:** `radar-pro` (master), Vercel `radarpro-inky.vercel.app`.

---

## 🔴 CRÍTICOS — corrigir ANTES de disparar segunda

### C1. `/api/debug` é PÚBLICO e vaza credenciais Turso

**Arquivo:** `app/api/debug/route.ts`
**Severidade:** ALTÍSSIMA — expõe URL completa do banco + 30 chars do auth token.

Qualquer um que descobrir `radarpro-inky.vercel.app/api/debug` vê:
- `TURSO_URL` completo
- Prefix (20 chars) + suffix (10 chars) do `TURSO_TOKEN`
- Estrutura do token

**Correção (5 min):** ou deletar a rota, ou proteger com header secreto:
```ts
if (req.headers.get('x-debug-key') !== process.env.DEBUG_KEY) {
  return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
}
```

### C2. Webhook Tally aceita request sem assinatura quando secret ausente

**Arquivo:** `app/api/webhooks/tally/route.ts:37`
```ts
if (!secret) return true // dev mode: aceita sem assinatura
```

**Problema:** se `TALLY_WEBHOOK_SECRET` não tá no Vercel, qualquer um pode mandar POST e injetar leads.

**Correção (5 min):** confirmar no painel Vercel que `TALLY_WEBHOOK_SECRET` está setado. Se não estiver, gerar uma string aleatória, setar no Tally + Vercel, e mudar fallback pra `return false` (rejeitar request sem secret em produção).

### C3. Endpoints AI sem auth podem ser abusados financeiramente

**Arquivos:** `/api/ai`, `/api/analyze`, `/api/enrich`, `/api/tally/gerar-plano`, `/api/tally/gerar-script-venda`

Sem autenticação. Atacante pode:
- Disparar geração de Plano (3-5k tokens Claude × R$ por chamada) em loop = abuso financeiro
- Gerar scripts em escala = consumir cota Gemini/OpenAI
- Disparar análises de site = gastar Claude

**Correção (15 min):** adicionar middleware Next.js (`middleware.ts` na raiz) ou header check nos endpoints sensíveis:
```ts
// middleware.ts
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/ai') ||
      req.nextUrl.pathname.startsWith('/api/tally/gerar-')) {
    if (req.headers.get('x-api-key') !== process.env.INTERNAL_API_KEY) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }
  }
}
export const config = { matcher: '/api/:path*' }
```

Páginas internas (que sabem o key) chamam com header. Bots externos batem 401.

### C4. `data/radar.db` versionado no git

**Arquivo:** `data/radar.db` (127 KB)
**Severidade:** ALTA — pode conter dados sensíveis (telefones, emails de leads antigos).

Foi commitado em 14/04 antes do `.gitignore` cobrir. Hoje o sistema usa Turso, esse DB é legacy.

**Correção (3 min):**
```bash
git rm --cached data/radar.db
echo "data/radar.db*" >> .gitignore
git commit -m "remove legacy radar.db do tracking"
```

Histórico continua tendo o arquivo (toda commit antes do remove). Pra apagar do histórico total, precisa `git filter-repo` (mais agressivo, reescreve commits).

### C5. 5 vulnerabilidades npm (3 críticas)

**Saída de `npm audit`:**
- protobufjs <7.5.5: arbitrary code execution (vem de @whiskeysockets/baileys)
- 3 críticas + 2 moderadas

**Correção (1 min):** `npm audit fix` (sem `--force`). Roda sem breaking change. Fazer agora, push.

---

## 🟡 IMPORTANTES — resolver nas próximas 2 semanas

### I1. `initDb()` chamado em CADA request

**Arquivos:** `app/api/tally/gerar-plano/route.ts`, `gerar-script-venda`, `marcar-pagamento`, `webhooks/tally`.

Cada request → 30+ ALTER TABLE no Turso → ~500ms-1s de latência extra.

**Correção:** flag `_initDone` no `lib/db.ts`:
```ts
let _initDone = false
export async function initDb() {
  if (_initDone) return
  await db.batch([...])
  _initDone = true
}
```

### I2. Telefones FIXOS em 5 dos 14 leads priorizados

| Lead | Telefone | Tipo |
|---|---|---|
| id=17 Tatiane Souza | (63)3233-6380 | Fixo |
| id=30 Palmas Bucal | (63)3213-3091 | Fixo |
| id=32 Odonto Fama | (63)3224-3954 | Fixo |
| id=111 San Remo | (63)3028-0065 | Fixo |
| id=153 Racco | (63)3216-1401 | Fixo |

**Risco:** telefones fixos podem não ter WhatsApp. Mensagem cai no vazio.

**Correção:** antes de disparar 2ª-feira, validar manualmente cada um (link wa.me com mensagem mínima, ver se entrega ou erro).

### I3. Telefones em sequência pode ser erro de scraping

- id=108 Cia do Verão: `(63)98419-9311`
- id=55 Gilson Afonso: `(63)98418-9311`

Diferença de 1 dígito. Pode ser legítimo OU erro do scraper pegando overlap. Validar manualmente antes de disparar.

### I4. Rate limiting ausente em todos os endpoints

Combinado com falta de auth = se URLs vazarem, abuso financeiro garantido (Claude/Gemini calls).

**Correção (paliativa):** Vercel tem rate limiting nativo no plano Pro. No Hobby, considerar libs como `@upstash/ratelimit` (10 min de setup).

### I5. Páginas gigantes sem componentização

- `app/page.tsx` — **1428 linhas**
- `app/tally/page.tsx` — **1092 linhas**

Custo: re-renders pesados, dificulta manutenção, edge errors no Vercel (timeouts em dev), dificulta testes.

**Correção:** quebrar em componentes menores (`<LeadCard>`, `<FiltrosFunil>`, `<PlanoModal>`). 2-3h cada.

### I6. Inconsistência visual entre páginas

- `/integracao/whatsapp` usa **Tailwind** (className)
- `/Painel`, `/disparo`, `/tally`, `/licoes` usam **inline styles** (style={{ }})

**Correção:** decidir 1 padrão e migrar. Se mantém inline (já tá maioria), refatorar /integracao/whatsapp pra inline.

### I7. `TALLY_WEBHOOK_SECRET` provavelmente não setado no Vercel

(Verificar manualmente no painel Vercel — env vars de produção)

Se não setado: cada push do Tally cai sem validação = qualquer um pode injetar lead.

---

## 🟢 MELHORIAS — backlog

### M1. Arquivos órfãos na raiz
- `GANCHOS-OFERTAS.md` — rascunho velho (14/04), nunca referenciado. Mover pro segundo-cérebro ou deletar.
- `README.md` — boilerplate `create-next-app`, sem doc real do projeto.

### M2. Scripts sem header documentado

- `check-categorias.ts`, `cleanup-junk.ts`, `export-barbearia-urls.ts`, `stats-final.ts`, `test-enrich.ts`, `test-gemini.ts`, `testar-site.ts` — sem comentário explicando uso.
- 3 scripts `test-*` provavelmente são leftovers de desenvolvimento.

**Correção:** auditar 1 por 1, deletar os obsoletos, adicionar header nos que ficam.

### M3. Comandos npm faltando no package.json

Scripts úteis sem alias npm: `top-14-disparo`, `top-20-perfeitos`, `calc-analise-nuvemshop`, `check-disparo-ids`. Eduardo precisa lembrar `npx tsx scripts/X.ts` toda vez.

**Correção (3 min):** adicionar em `package.json`:
```json
"disparo:14": "tsx scripts/top-14-disparo.ts",
"disparo:20-perfeitos": "tsx scripts/top-20-perfeitos.ts",
"calc:nuvemshop": "tsx scripts/calc-analise-nuvemshop.ts",
"check:ids": "tsx scripts/check-disparo-ids.ts"
```

### M4. Dependências pesadas em produção

- `playwright` (~300MB) — usado SÓ em scripts/scrape-*. Está em `dependencies`, vai pro deploy Vercel mesmo sem ser usado lá. Mover pra `devDependencies` reduz bundle.
- `@whiskeysockets/baileys` — não roda em Vercel (limitação serverless), mas tá em `dependencies`. Mesmo problema.

### M5. Sem testes automatizados

Zero arquivos `*.test.ts`. Pra um sistema que processa leads + cobra cliente, zero testes é dívida pesada.

**Correção (longo prazo):** adicionar `vitest` + 5-10 testes essenciais (formatarTelefone, detectarTipoOferta, pickDiagnostico, gerarLinkWhatsApp).

---

## 🟢 PONTOS POSITIVOS

Pra não soar só negativo:

- ✅ Build limpo, TypeScript strict, sem warnings críticos
- ✅ Schema DB bem estruturado com índices nos campos certos (status, tipo, fonte)
- ✅ Migrations idempotentes (try/catch), pode rodar várias vezes
- ✅ Queries parametrizadas — sem SQL injection
- ✅ Arquitetura linear de libs (sem dependências circulares)
- ✅ HMAC-SHA256 implementado corretamente no webhook (com `timingSafeEqual`)
- ✅ Multi-modelo IA (Claude/Gemini/OpenAI) com fallback gracioso
- ✅ HeaderRadarPRO compartilhado entre 3 páginas (consistência parcial)
- ✅ `.gitignore` cobre `.env*`, `.ig-session.json`, `top-14-raw.json`
- ✅ Stack moderna (Next.js 16, React 19, Turso libSQL)

---

## 🎯 Plano de ação priorizado (caminho crítico antes de 2ª)

**HOJE (~25 min total):**

1. ✅ `npm audit fix` (1 min) — remove vulnerabilidades npm
2. ✅ Confirmar `TALLY_WEBHOOK_SECRET` no Vercel (3 min — abrir painel, setar se não tiver)
3. ✅ Proteger `/api/debug` com header secret OU deletar (5 min)
4. ✅ `git rm --cached data/radar.db` + atualizar .gitignore (3 min)
5. ✅ Adicionar middleware de auth pros endpoints sensíveis (15 min)
6. ✅ Validar manualmente os 5 telefones FIXOS dos 14 leads (5 min — abrir wa.me/55XXXXX e ver se carrega)

**DOMINGO (relax + qualidade de vida — 30 min):**

7. ✅ `initDb()` com flag de cache (5 min)
8. ✅ Adicionar npm scripts pros utilitários (3 min)
9. ✅ Limpar scripts órfãos (10 min)
10. ✅ Mover playwright/baileys pra devDependencies (5 min)
11. ✅ Deletar/arquivar GANCHOS-OFERTAS.md e atualizar README (10 min)

**Pode ficar pra depois:**

- I5: componentização das páginas grandes
- I6: padrão único Tailwind ou inline
- M5: testes automatizados

---

## Escopo desta auditoria

✅ Estrutura + arquitetura (lib, app, scripts, components)
✅ Database + scripts (schema, migrations, queries, 14 leads)
✅ APIs + rotas (15 endpoints inspecionados)
✅ UI/UX (consistência entre 6 páginas)
✅ Segurança + env + deploy (npm audit, env vars, prompt injection, HMAC)

**Não cobriu** (fica pra próxima):
- Performance em load (queries timeout?)
- Acessibilidade (a11y)
- SEO da própria UI (meta tags)
- Testes de integração
- Análise de logs em produção (precisa de Vercel logs)
