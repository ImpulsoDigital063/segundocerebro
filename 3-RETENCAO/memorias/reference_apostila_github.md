---
name: reference-apostila-github
description: "Apostila completa de GitHub pra Eduardo (nível mediano), formato PDF azul-marinho pronto pra impressão sem tinta preta"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 82c7f237-15c1-4262-8c4e-80d7727b824d
---

**Localização:**
- Fonte: `C:\Users\Usuario\segundo-cerebro\4-EXPORTACAO\playbooks\APOSTILA-GITHUB.md`
- PDF impressão: `C:\Users\Usuario\segundo-cerebro\4-EXPORTACAO\playbooks\APOSTILA-GITHUB.pdf` (~19 páginas, A4)
- CSS de impressão (paleta azul sem preto): `apostila-github-print.css`
- HTML standalone: `apostila-github-full.html`

**Conteúdo (14 seções):**
1. Git × GitHub · 2. Anatomia repo · 3. Anatomia perfil · 4. Fluxo Cursor/Code · 5. .gitignore
6. Branches · 7. Profissionalizar perfil · 8. Profissionalizar repos · 9. Colaboração (fork+PR)
10. Segurança · 11. Erros comuns · 12. Cheatsheet · 13. Glossário PT-EN · 14. Checklist 3h

**Detalhe técnico (caso precise re-renderizar):**
- Toda cor de fonte forçada via `* { color: var(--ink-primary) !important }` em #1a365d
- Conversão: `marked` (MD→HTML) + Chrome headless (`--print-to-pdf`)
- Comando base: `chrome.exe --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="<out>.pdf" "file:///<input>.html"`

**Quando consultar:** Eduardo precisa polir perfil GitHub · subir projeto novo · entender PR/fork · receber colaborador (ex: Lucas Passos) · resolver erro Git · profissionalizar README de repo
