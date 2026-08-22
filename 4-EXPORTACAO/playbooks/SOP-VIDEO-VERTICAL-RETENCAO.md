# Vídeo vertical — retenção e estilo (pesquisa 08/08/2026)
**Pra quê:** padrão de edição do verbo-design pra Reels/anúncio vertical. O que tem lastro e o que é folclore.

---

## 🔴 O que a pesquisa derrubou

**Quase tudo que circula sobre retenção em vídeo curto é blog de agência se copiando** — números redondos ("+35% com rosto", "3.3x mais retenção") sem estudo, amostra ou metodologia. Não usar como argumento com cliente.

**Não existe dado com metodologia** sobre: frequência ideal de corte, ganho de pattern interrupt, ou qual estilo de legenda retém mais. São heurísticas de editor, não ciência.

## ✅ O que tem fonte

**Instagram tem Skip Rate desde ago/2025** — % que sai nos 3 primeiros segundos, no Reels Insights. Mas o Instagram **não publicou benchmark**: só diz que "quanto mais reta a curva, mais engajada a audiência". ([Social Media Today](https://www.socialmediatoday.com/news/instagram-adds-retention-insights-reels/758464/))

**ThruPlay do Meta = 15s ou fim do vídeo.** É a métrica que a plataforma usa pra julgar engajamento significativo — ou seja, **os primeiros 15s são a zona que a própria Meta mede**.

**Os 3 sinais que mais pesam (Mosseri, chefe do Instagram, 2025-2026):**
1. **Watch time** (inclui replay)
2. 🔥 **Sends per reach** — compartilhamento por DM. Passou a pesar **3-5x mais que like**
3. Likes per reach

Conteúdo original recebe mais distribuição que repost.

**85% do consumo de feed é sem som** — número antigo mas nunca contestado. Legenda não é opcional.

---

## Padrão visual 2026 (com fonte)

### Legenda — estilo "Hormozi", o mais copiado em conteúdo de negócio
| Item | Valor |
|---|---|
| Fonte | **Anton**, Montserrat Black ou Bebas Neue — CAPS |
| Tamanho | **80-120px** em canvas 1080×1920 (10-15% da altura) |
| Cor | branco `#FFFFFF` + **1 palavra-âncora** por frase em `#FFD93D` |
| Contorno | preto, **8-12px** |
| Ritmo | 1-3 palavras por vez, **200-500ms** cada |
| Animação | snap instantâneo ou scale ≤105%. **Sem bounce, sem fade** |
| Posição | **Y 1150-1350** de 1920 (60-70% da altura) |

([Ascynd](https://ascynd.io/en/blog/hormozi-captions) · [SendShort](https://sendshort.ai/guides/tiktok-font/))

### Fontes dominantes (todas Google Fonts, OFL)
Anton · Montserrat Black · Bebas Neue · Archivo Black · Oswald
**Sempre pesada e condensada, sempre com contorno ou caixa.** Nunca peso regular.

### Zonas seguras — 1080×1920
- **Topo:** reservar 108-120px
- **Rodapé:** reservar **280-350px** (ícones à direita + handle/legenda do app à esquerda)
- **Lateral direita:** 90-120px sempre livre
- Elemento crítico dentro de **Y 190-1550**

([Kreatli](https://kreatli.com/guides/instagram-reels-safe-zone))

### Cortes pra talking head
**Jump cut** (remover pausas e hesitação) + **zoom punch-in** ocasional (scale 1.0→1.08 em ~150ms) só em pico de frase, **nunca mais de 1 a cada 5-7s**.
Whip pan é pra transição entre cenas, não dentro de talking head.

**Tendência 2026: "raw-premium hybrid"** — filmagem crua (mão, luz natural) + corte cirúrgico e legenda cronometrada. Excesso de transição chamativa cheira a tutorial de edição.

### Grading (ffmpeg)
`eq=contrast=1.05:saturation=1.15` + LUT a 40-70% de mix + vinheta leve (`vignette=PI/6`)

### Áudio
Voz a **-14 LUFS**. Música **-18dB abaixo da voz**, com ducking/sidechain. SFX a ~50% do volume padrão.

### 🔴 Datado — não usar
bounce/spin em legenda · moldura tipo brackets de câmera · barra de progresso decorativa · sticker/confete solto · glitch e swipe repetidos · edição "over-polished" que grita anúncio

---

## O que muda no que já fizemos (LocaJV)

| Item | Estava | Vira |
|---|---|---|
| Fonte | Inter → **Anton** ✅ já corrigido | manter |
| Contorno | 9px ✅ | dentro do padrão |
| Posição da legenda | `bottom: 460` (Y≈1400) | subir pra **Y 1150-1350** — está na borda da zona de UI |
| Palavra-âncora | vermelho da marca | manter (marca > padrão genérico) |
| Cortes | **zero** — plano contínuo de 25s | jump cut nas pausas + zoom punch a cada 5-7s |
| Grading | nenhum | contraste 1.05 / saturação 1.15 / vinheta leve |
| Áudio | -16 LUFS | -14 LUFS |
| Fecho | acaba falando | testar loop (replay soma watch time) |

## 🔥 O que muda no ROTEIRO, não na edição

**Sends per reach pesa 3-5x mais que like.** Isso quer dizer que o vídeo tem que dar motivo pra alguém **mandar pro amigo no direct** — não só assistir.

Pro público da LocaJV: "manda pro parceiro que tá procurando moto" é mais valioso que "curte aí". O roteiro devia pedir compartilhamento, não engajamento genérico.

⚠️ Cuidado: pedir compartilhamento **em troca de prêmio** é engagement bait e viola a política de Spam. Pedir sem contrapartida é permitido.
