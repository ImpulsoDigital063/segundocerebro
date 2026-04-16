# Auditoria de Segurança — Padrão para SaaS

> Validado no AgendaPRO (16/04/2026). 15+ vulnerabilidades encontradas e corrigidas em uma sessão.

---

## Quando usar

Antes de qualquer deploy de produção de um SaaS que lida com dados de usuários. Também depois de adicionar funcionalidades novas que envolvam autenticação, pagamentos, ou dados sensíveis.

---

## Estrutura: 3 frentes em paralelo

Rodar as 3 ao mesmo tempo. Cada uma cobre um ângulo diferente.

### Frente 1 — API Routes (o servidor)

Ler TODA rota em `src/app/api/` e verificar:

- [ ] **Auth obrigatória** — toda rota POST/PATCH/DELETE exige `getUser()` antes de processar
- [ ] **Ownership check** — não basta estar logado, precisa ser DONO do recurso (`owner_id === user.id`)
- [ ] **IDOR** — trocar o ID na URL dá acesso a dados de outro usuário?
- [ ] **Input validation** — body do request é validado (tipo, formato, tamanho)?
- [ ] **Status/action validation** — parâmetros de ação validados contra whitelist (`['confirmed', 'cancelled']`)
- [ ] **Rate limiting** — endpoints públicos e de auth têm limite por IP
- [ ] **Error messages** — erros do banco nunca vazam pro client (logar no server, mensagem genérica pro front)
- [ ] **Cron routes** — protegidas por `CRON_SECRET` + secret validado como existente
- [ ] **Service role vs anon** — crons e admin operations usam service role, nunca anon key

### Frente 2 — Client-side (o navegador)

Ler todo componente e página:

- [ ] **XSS** — `dangerouslySetInnerHTML` ou interpolação de user input em HTML (emails, templates)
- [ ] **Secrets expostos** — chaves de API em componentes `'use client'`
- [ ] **select('*')** — páginas públicas não devem expor campos internos (email, commission, auth_user_id)
- [ ] **Senhas fracas** — mínimo 8 chars + maiúscula + número
- [ ] **localStorage** — dados sensíveis não devem ficar em localStorage
- [ ] **Formulários** — inputs de phone, email, nome têm validação antes de enviar

### Frente 3 — Auth & Data Flow (o fluxo)

Ler middleware, tokens, e fluxo de dados:

- [ ] **Tokens HMAC** — hash completo (não truncado), secret obrigatório (sem fallback), `timingSafeEqual`
- [ ] **Timing attack** — comparação de tokens usa `timingSafeEqual`, nunca `===`
- [ ] **Middleware** — todas as rotas protegidas passam pelo middleware, sem bypass por path
- [ ] **Price tampering** — preço calculado client-side é revalidado server-side
- [ ] **Race conditions** — operações concorrentes (booking, pontos) têm lock ou constraint no banco
- [ ] **Credentials** — senhas temporárias geradas com `crypto.randomBytes`, nunca `Math.random`
- [ ] **Credential exposure** — senhas nunca retornam em responses de API (enviar por email)

---

## Fixes mais comuns (copy-paste)

### escapeHtml para templates de email
```typescript
function esc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
```

### timingSafeEqual para tokens
```typescript
import { timingSafeEqual } from 'crypto'

function verifyToken(expected: string, received: string): boolean {
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(received))
  } catch {
    return false
  }
}
```

### Rate limiter in-memory (sem Redis)
```typescript
const store = new Map<string, { count: number; resetAt: number }>()

function rateLimit(key: string, limit: number, windowSeconds: number): boolean {
  const now = Date.now()
  const entry = store.get(key)
  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowSeconds * 1000 })
    return true
  }
  entry.count++
  return entry.count <= limit
}
```

### Ownership check pattern
```typescript
// Depois do auth.getUser()
if (resource.owner_id !== user.id) {
  return NextResponse.json({ error: 'Sem permissão' }, { status: 403 })
}
```

### Security headers (Next.js)
```typescript
// next.config.ts
headers: [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'" },
]
```

### Trigger anti-overbooking (PostgreSQL)
```sql
CREATE OR REPLACE FUNCTION check_appointment_overlap()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM appointments
    WHERE professional_id = NEW.professional_id
      AND appointment_date = NEW.appointment_date
      AND status IN ('pending', 'confirmed')
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000')
      AND (
        (NEW.start_time >= start_time AND NEW.start_time < end_time)
        OR (NEW.end_time > start_time AND NEW.end_time <= end_time)
        OR (NEW.start_time <= start_time AND NEW.end_time >= end_time)
      )
  ) THEN
    RAISE EXCEPTION 'Horário já ocupado';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

## Armadilhas que peguei na prática

1. **Supabase anon key em cron** — cron não tem sessão, RLS bloqueia tudo. Usar service role.
2. **`select('*')` em página pública** — expõe commission_percentage, email, auth_user_id do profissional.
3. **`Math.random()` pra senha** — previsível. Usar `crypto.randomBytes()`.
4. **Token truncado (`.slice(0, 16)`)** — reduz entropia de 256 bits pra 64 bits. Usar hash completo.
5. **Assumir schema do banco** — migration falhou porque assumi que `clients` tinha `business_id`. Sempre verificar antes.
6. **CSP com Next.js** — precisa de `'unsafe-inline'` pra styles e scripts, senão quebra tudo.

---

## Resultado esperado

Depois de rodar esse padrão, o sistema deve ter:
- Zero endpoints públicos sem rate limiting
- Zero inputs de usuário sem escape em HTML
- Zero tokens com comparação insegura
- Zero senhas/secrets em responses de API
- Zero `select('*')` em páginas públicas
- Constraint no banco pra race conditions críticas (overbooking, pontos duplicados)
