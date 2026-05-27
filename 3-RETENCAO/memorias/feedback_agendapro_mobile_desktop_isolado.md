---
name: agendapro-mobile-desktop-isolado
description: AgendaPRO mobile (agendapro.net.br) e desktop (agenda-pro-seven · piloto Palace) compartilham o codebase — ajuste de um lado não pode mexer no outro · usar Tailwind responsive (sm:/md:/lg:) pra isolar
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ff88481a-3d64-46bf-a2f5-3c8517f839c1
---

Cravado em 2026-05-19 por Eduardo enquanto trabalhávamos no fix B1 do Olímpio (modal editar serviços não rola no celular dele).

**Regra:** ajustes feitos pra resolver problema no MOBILE não podem alterar o comportamento do DESKTOP, e vice-versa.

**Why:** o AgendaPRO opera dois fluxos paralelos no MESMO codebase Next.js:
- Mobile · `agendapro.net.br` · clientes em produção (Olímpio R$67 desde 04/05 · Leticia trial Viva Cacheada · Erlane)
- Desktop · `agenda-pro-seven.vercel.app` · piloto Palace Nail Spa (Marko + Luana) · em construção paralela, estética Salão99
- Outra instância (Verbo Cowork) tá codando o Desktop ao mesmo tempo · risco real de atropelo se eu mexer em componente compartilhado sem isolamento

**How to apply:**
- Toda mudança de classe Tailwind em componente compartilhado precisa de breakpoint:
  - Só mobile → `min-h-[280px] sm:min-h-0` (anula explicitamente no desktop)
  - Só desktop → `sm:rounded-3xl` (mobile não vê)
- Nunca mudar classe sem prefixo achando que afeta só um lado · afeta os dois
- Commit message deve mencionar em qual breakpoint a mudança atua (ex: `fix(modal): scroll funciona em mobile · sm: intacto`)
- Antes de mexer em componente compartilhado, considerar: existe outra instância codando o Desktop agora? Coordenar com Eduardo
- Documentação cravada em `agendapro/AGENTS.md` na seção "Mobile e Desktop são experiências separadas no mesmo codebase"

**Solução técnica · modal via createPortal:** quando modal compartilhado vaza estilo entre breakpoints (modal do mobile herda `overflow-hidden` do parent desktop, ou vice-versa), refatorar pra `createPortal(node, document.body)` com guard SSR. Padrão cravado em 19-20/05 nos componentes `DespesasView.tsx`, `NovoClienteModal.tsx`, `ClientesView.tsx`:
```tsx
const [portalReady, setPortalReady] = useState(false)
useEffect(() => { setPortalReady(true) }, [])
if (!portalReady) return null
return createPortal(<div className="fixed inset-0...">...</div>, document.body)
```
Portal renderiza fora da hierarquia DOM do parent → cada lado (mobile/desktop) controla seu próprio layout sem herdar do contexto.

**Direção futura cravada por Eduardo (20/05):** sistema device-aware com detecção real do aparelho (não só CSS responsive) pra performance. Mobile não baixa bundles desktop e vice-versa. Implementar via `headers()` server-side no Next ou dynamic imports condicionais quando virar prioridade.

**Linkar com:** [[agendapro-estado-15-05]] (clientes ativos em produção · tolerância zero a regressão) · [[palace-nail-spa]] (cliente do desktop)
