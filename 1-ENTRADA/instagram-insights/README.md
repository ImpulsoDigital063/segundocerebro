# Captura de insights do Instagram → Segundo Cérebro

Pipeline pra transformar post do Instagram (Reel falado, carrossel, caption) em
inteligência arquivada nos arquivos-mãe — sem perder o que vale.

## Como usar (Eduardo)
1. No Instagram: **Compartilhar → Copiar link**.
2. Cola o link aqui no chat (instância Verbo).
3. Claude roda a captura e te devolve o INSIGHT destilado + onde isso deve entrar.

## Estágio 1 — Captura (automático, seguro)
Claude roda:
```
cd C:/Users/Usuario/verbo-design
node --env-file=.env insta-capture.mjs <url>
```
O que acontece:
- `yt-dlp` baixa mídia + caption/autor/data (cookie do Chrome/Edge p/ posts logados)
- Reel → `ffmpeg` extrai áudio → Replicate Whisper transcreve
- Carrossel/imagem → Claude lê os slides com visão (sem OCR)
- Gera card cru em `<data>-<shortcode>.md` (campos INSIGHT e DESTINO em branco)
- Atualiza `INDEX.md`

Depois Claude lê o card (e as imagens) e preenche **INSIGHT** + **DESTINO sugerido**.

## Estágio 2 — Destilação (em lote, com o ok do Eduardo)
Quando juntar ~5-10 capturas, Claude mostra a lista classificada e, **só com
aprovação**, mescla o insight no arquivo canônico certo (padrão Meta Ads, projeto
Palace/AgendaPRO, hub Verbo, playbook, MEGA-CLAUDE, etc) com backlink pra fonte.
Captura crua NUNCA toca arquivo-mãe sozinha (λ.prova-na-fonte).

## Status do card
`cru` → capturado, insight preenchido, ainda não destilado
`destilado` → já entrou no canônico (anotar destino no frontmatter)
`descartado` → avaliado e não vale arquivar

## Dependências
- `bin/yt-dlp.exe` (standalone, no verbo-design/bin)
- `ffmpeg` (no PATH)
- `REPLICATE_API_TOKEN` (no verbo-design/.env)
