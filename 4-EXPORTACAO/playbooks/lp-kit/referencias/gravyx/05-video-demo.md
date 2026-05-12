# 05 — Video Demo (Panda Video)

## HTML

```html
<section class="section-video">
  <div class="container">
    <div class="video-wrapper">
      <iframe id="panda-..." src="https://player-vz-94f8d548-9de.tv.pandavideo.com.br/embed/?v=..."
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowfullscreen></iframe>
    </div>
  </div>
</section>
```

## Observações rápidas

- **Player Panda Video** (BR) — sub-domínio dedicado `player-vz-94f8d548-9de.tv.pandavideo.com.br`, cada conta tem o seu.
- **Iframe único, simples.** Zero wrapper de loading, zero fallback — só o embed. Carrega via `api.v2.js` já identificado no bloco 00 (opcional).
- **Allow attrs:** conjunto padrão Panda (autoplay + PiP + fullscreen + encrypted-media pra DRM).
- **Classe `.video-wrapper`:** aspect-ratio 16:9 via CSS (padding-top: 56.25% ou `aspect-ratio: 16/9`).

### Por que Panda e não YouTube?
- Panda não sugere vídeos concorrentes no final (YouTube sugere até do concorrente)
- Sem marca d'água "Assistir no YouTube" que tira autoridade
- Métricas detalhadas (heatmap de retenção, drop-off)
- **Estratégia Gravyx:** manter o lead no site inteiro, zero escape
- Custo: Panda R$59/mês plano básico

### Posição na página
- Entre Stats Bar e primeira seção de conteúdo — "viu os números, agora vê o produto funcionando"
- VSL ou demo curta (provavelmente 2-5 min)

## Adaptação pra LP Impulso Digital

### Decisão crítica: vale ter vídeo?
- **Prós:** aumenta conversão em LPs de serviço (rosto do Eduardo + demonstração ao vivo)
- **Contras:** Panda R$59/mês = R$708/ano. Eduardo está em pressão financeira (memória `project_eduardo_pressao_financeira.md`)

### Opções por ordem de custo

**1. Sem vídeo (R$0)** — substituir por grid com 3-4 prints de projetos reais + depoimento escrito embaixo. Funciona se SobreEduardo já cobrir autoridade.

**2. Vídeo no YouTube unlisted (R$0)** — embed normal. Perde o polimento Panda mas zera custo. Configurar `rel=0` pra reduzir sugestões.

**3. Self-hosted MP4 via Vercel Blob ou R2 (~R$10-30/mês)** — iframe custom com `<video>` tag. Controle total, custo menor que Panda.

**4. Panda (R$59/mês)** — só quando faturamento passar R$3k/mês recorrente.

### Recomendação
- **Fase 1 (agora):** opção 1 (sem vídeo) — grid de prints + depoimento escrito. Eduardo já tem autoridade no SobreEduardo.js + MPN-On como case visual.
- **Fase 2 (quando fechar 3+ clientes):** opção 2 (YouTube) — gravar demo de 2-3 min mostrando projeto real entregue.
- **Fase 3 (faturamento consolidado):** opção 4 (Panda) — quando o custo virar ruído.

### Conteúdo do vídeo (quando tiver)
- 0-15s: "Oi, eu sou o Eduardo" + problema específico (dor na cabeça do cliente)
- 15-90s: demo de projeto real (tela gravada + voz)
- 90-150s: processo (3 passos simples)
- 150-180s: CTA pra call grátis

## Conclusão prática

Não portar agora. Deixar o espaço reservado com classe `.section-video` no CSS pra facilitar adicionar depois. Hoje → substituir por seção de **mini-prints de projetos reais** (pattern "mini-UI do produto" já validado na memória `feedback_lp_visual_proof.md`).

**Arquivo salvo. Manda o próximo bloco.**

---

**Ver também:** [[INDICE]] · [[LP-DESIGN-PLAYBOOK]] · [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[STATUS-IMPULSO]]
