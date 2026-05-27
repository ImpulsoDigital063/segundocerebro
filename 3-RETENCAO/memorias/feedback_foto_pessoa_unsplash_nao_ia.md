---
name: feedback-foto-pessoa-unsplash-nao-ia
description: "Foto de PESSOA em LP/site real = Unsplash/Pexels (foto real curada) · NUNCA IA generativa (Flux/SDXL) — anatomia ruim, uncanny valley garantido"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2d25a2dc-eb93-4396-88ab-448d26fd80d8
---

# Foto de pessoa: Unsplash > IA generativa

**Regra:** Pra fotos de PESSOA (atleta, cliente, profissional) em LP/site real, sempre buscar primeiro em **Unsplash** ou **Pexels** (gratuitos, comerciais, sem atribuição obrigatória). IA generativa (Flux, SDXL, etc) só pra still-life de objeto, textura ou cena sem pessoa.

**Why:** Eduardo cravou 24/05/2026 vendo a imagem `heroCorredora.png` (Flux 1.1 Pro): *"essa foto ficou muito, mas muito mal feita. não existe acesso a um banco de fotos, na qual tenha cesso a fotos de verdade de mulheres em corridas?"*

Anatomia gerada por IA (perna torta, mão extra, expressão facial estranha) entrega como amador na primeira impressão. Cliente premium percebe na hora.

Conecta com [[feedback_nunca_mascote_objeto_antropomorfizado_ia]] (mesma raiz: pessoa/rosto humano em IA = uncanny valley) e [[feedback_nunca_picsum_random_em_lp_real]] (picsum random também não — curadoria importa).

**How to apply:**

- **Cliente real (Leandro, Marko, Beatriz, etc):** foto profissional dele — sem alternativa. Placeholder neutro até ele entregar.
- **Pessoa genérica (atleta, cliente fictícia, modelo):**
  1. Buscar Unsplash via WebFetch (`unsplash.com/s/photos/<termo>`) ou via Unsplash API
  2. Baixar 3-5 candidatos com `curl -sL -o pasta/nome.jpg "https://images.unsplash.com/photo-XXX?w=1920&q=85&fm=jpg"`
  3. Ler/visualizar candidatos antes de aplicar (Read tool em .jpg)
  4. Aplicar a melhor + manter alternativas em `_*.jpg` (ou pasta `alt/`) caso Eduardo queira trocar
  5. Adicionar `images.unsplash.com` em `remotePatterns` do `next.config.ts` (auraenergy já tem; vidaemequilibrio já tem)
- **Still-life de objetos** (vela, pedras, tecido, food, instrumento): IA Flux Pro tá OK — geralmente fica bom
- **Textura abstrata, background, paisagem sem foco em pessoa:** IA OK

**Crédito:** Unsplash não exige atribuição, mas é boa prática anotar fotógrafo no doc do projeto (ex: identidade-direcao.md) pra cliente saber.
