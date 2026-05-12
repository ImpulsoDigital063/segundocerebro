# AgendaPRO Brand Kit

Identidade visual oficial do AgendaPRO. Uso restrito a Impulso Digital e materiais oficiais do produto.

## Estrutura

```
agendapro-brandkit/
├── BRAND-GUIDELINES.md       Regras de uso, paleta, tipografia, dont's
├── exemplos.html             Logo aplicada em 8 contextos reais
├── logo/
│   ├── agendapro-color.svg            Primária (fundo claro)
│   ├── agendapro-color-signed.svg     + "by Impulso Digital"
│   ├── agendapro-dark.svg             Fundo escuro
│   ├── agendapro-dark-signed.svg      + "by Impulso Digital"
│   ├── agendapro-mono-black.svg       Monocromática preto (impressão)
│   ├── agendapro-mono-white.svg       Monocromática branco (sobre foto)
│   └── agendapro-icon.svg             Só PRO (favicon/PWA)
└── png/
    ├── icon-192.png                   Android, manifest
    ├── icon-512.png                   PWA, splash
    └── icon-1024.png                  App Store, criativos grandes
```

## Como usar

1. **Antes de tudo:** lê o `BRAND-GUIDELINES.md`. Define qual variante usar, espaço mínimo, paleta.
2. **Web/UI:** preferir SVG (escala infinita).
3. **PNG:** só pra favicon, app icon, ou contextos onde SVG não roda.
4. **Editar a logo:** *não edite*. Se precisa de variação nova, abre uma issue ou fala comigo.

## Onde está aplicado

- **Projeto AgendaPRO** (`C:/Users/DELL/agendapro/public/`) — favicon, header admin, BookingFlow, login.
- **LPs** (`/`, `/barbearia`, `/salao`, `/estetica`, `/nail`) — header.
- **Manifest PWA** (`agendapro/public/manifest.json`).

## Convenções de naming

Todos os arquivos seguem `agendapro-{variante}.{ext}`. Sem prefix de versão (sempre a última). Histórico fica no git.

---

**Ver também:** [[STATUS-AGENDAPRO]] · [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[IDENTIDADE-IMPULSO-DIGITAL]]
