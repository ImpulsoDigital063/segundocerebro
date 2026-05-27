---
name: feedback-nunca-picsum-random-em-lp-real
description: "Nunca usar picsum.photos com seed aleatória como placeholder em LP real — entrega imagens random (natureza, retratos genéricos) que poluem o design e viram pior que placeholder vazio"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 72d34231-bff8-45c8-acac-5dee56f080a5
---

**Nunca** usar `picsum.photos` (ou qualquer serviço de foto aleatória) como placeholder visual em LP/site real do cliente. Mesmo com seed determinística, o que volta é foto random — paisagem, gente desconhecida, comida, pet — **zero relação com o produto**. Visualmente entrega pior que placeholder vazio: parece anúncio amador de stock genérico, e quebra a credibilidade tanto quanto "foto real em breve".

**Why:** 14/05/2026 · Carretinha Kids Alegria LP v2. Implementei o design do Claude Design substituindo cada `<PhotoPH>` por `picsum.photos/seed/...`. Resultado: hero com foto de paisagem aleatória, Olímpio virou retrato random, atrações ficaram com fotos sem relação com pula-pula/tobogã. Eduardo: *"CARA TA CHEIO DE IMAGEM QUE NÃO TEM ABSOLUTAMENTE NADA A VER COM O PROJETO. PELO AMOR DE DEUS."* Reação justa — picsum é serviço de placeholder técnico (dev tooling), não substituto de stock curado.

**How to apply:**
- **LP/site real:** SEMPRE foto curada do produto/contexto. Se não tem foto do cliente, opções legítimas:
  1. **Stock curado** com query específica (Unsplash: `unsplash.com/s/photos/kids-party`, Pexels idem) · URL fixa por seção · cada uma escolhida e validada visualmente antes de entrar
  2. **Placeholder neutro tipográfico** · gradient + label monospace marcando "FOTO_X · aguardando pack do cliente" · sem foto nenhuma até ter a real
  3. **Pedir o pack do cliente antes** de codar a v2/v3 que depende de imagem
- **Nunca** combinar picsum/random com "design system premium" — destroi tudo que a tipografia/paleta construíram
- **Wireframe técnico interno:** picsum/picsum-photos pode ser usado, é só pra estrutura. Mas LP do cliente nunca.
- Ao receber design bundle (Claude Design, Figma, etc) que usa picsum como "stand-in", **trocar antes** de entregar visualização ao Eduardo
