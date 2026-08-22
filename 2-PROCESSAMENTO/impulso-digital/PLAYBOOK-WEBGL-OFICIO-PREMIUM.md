# 🛠️ PLAYBOOK — WebGL Premium: o OFÍCIO (como chegar no nível estúdio)

> 08/07/2026. Acopla no `ESTUDO-WEBGL-SITE-REFERENCIA.md` (que já tem referências de mercado, stack R3F, guarda-corpo AEO e performance). **Este documento é a camada que faltava: como de fato produzir o look Lusion/Active Theory — técnica, biblioteca e caminho de estudo.** Nasceu de uma tentativa real no Starteq que entregou boneco low-poly em vez de premium — a lição virou método.

---

## 0. O diagnóstico honesto — o que separa amador de estúdio (em ordem de impacto)

Não é "mais three.js". É isto, nessa ordem:

1. **Shader customizado, não material de prateleira.** Amador usa `MeshStandardMaterial` + geometria pronta. Estúdio escreve GLSL (fresnel, dispersão, noise, raymarch). **É o maior delta visual isolado.**
2. **Luz real = HDRI + baking + post.** Luz padrão do three parece plástico. HDRI (ambiente real refletindo) + AO bakeado + stack de post (bloom/DoF/grain/vignette) bem dosado = 70% do "caro". Barato de adicionar, difícil de *dosar* (amador estoura o bloom).
3. **Asset art-directed.** GLB grátis low-poly grita "amador" na hora. Precisa modelo próprio (Blender) ou comprado, com UV, mapas PBR e material transmission/cromo ajustado à mão. **← foi exatamente onde o Starteq quebrou.**
4. **Motion com ofício.** Tudo com easing (spring/`damp`, nunca linear), scroll coreografado, inércia. "Cinematográfico" mora no timing.
5. **Performance como feature.** Instancing, GPGPU (não loop de partícula na CPU), Draco/KTX2, budget de bytes, 60fps em aparelho médio. Demo linda travando não ganha nada.

---

## 1. As técnicas (o que cada uma faz + com que biblioteca)

### Shaders GLSL customizados (o coração)
- **Fresnel** — `pow(1.0 - dot(normal, viewDir), power)`. Brilho de borda/rim. Base do look "energia/holográfico" e borda de vidro. Quase todo objeto-herói usa.
- **Dispersão cromática** — amostra o ambiente 3× com IOR por canal (R/G/B refratam diferente). O prisma/diamante/bolha nas bordas de cromo e vidro. No R3F vem de graça no `MeshTransmissionMaterial` (`chromaticAberration`), ou à mão pra arte mais forte.
- **Noise / FBM** (simplex/curl, oitavas somadas) — deslocamento orgânico de vértice (esfera que ondula), velocidade de partícula em flow-field, névoa volumétrica. `curlNoise` = movimento giratório sem divergência (partícula bonita).
- **Raymarching / SDF** — um fragment shader de tela cheia marchando distância assinada: nuvem/névoa volumétrica, metaballs, túnel infinito, gyroid — **sem geometria**. Maior impacto-por-esforço isolado ("um shader de tela cheia atrás de tipografia limpa").
- **Iridescência / thin-film** — matiz que muda com o ângulo. Já vem no `MeshPhysicalMaterial` (`iridescence`, `iridescenceIOR`). O brilho oil-slick/holográfico.

### GPGPU / FBO — partículas aos milhares/milhões
Estado da partícula (posição, velocidade) vive **em textura** (RGBA float = xyz+dado), não em array JS. Um shader de simulação lê a textura de estado, calcula o próximo (aplica flow-field/curl/atrator) e escreve num **FBO ping-pong** (dois render targets trocando por frame). Um vertex shader lê a textura de posição e coloca `Points`/instâncias. A GPU nunca volta pra CPU → 100k–1M partículas a 60fps. É a tipografia que se dispersa em partícula do Lusion. Via `THREE.GPUComputationRenderer` (examples/jsm) ou `useFBO` do drei.

### Instancing vs Points
- **`InstancedMesh` / drei `<Instances>`** — 1 draw call pra N cópias de uma **malha real** (geometria, luz, sombra). Mesmo objeto repetido.
- **`Points`** — sprite de ponto por vértice, o mais barato pra campo de partícula/estrela/poeira. GPGPU sempre casa com Points.
- Regra: mesma malha muitas vezes → Instances. Milhões de pontos → Points.

### Materiais que parecem caros
- **HDRI Environment** — `<Environment>` (drei) com `.hdr`/`.exr`: luz por imagem + reflexo real. **A escolha que mais puxa realismo de material.** Presets: `studio`, `city`, `sunset`.
- **`MeshTransmissionMaterial`** (drei) — o vidro/líquido/cristal: transmission, thickness, IOR, `chromaticAberration`, backside. *O* componente por trás dos blobs de cromo-vidro.
- **Matcaps** — luz bakeada numa textura de esfera; metal/clay estilizado a custo zero de luz. Premium barato em aparelho fraco.

### Post-processing (`@react-three/postprocessing` — funde efeitos num passe só, barato)
- **Bloom** (`mipmapBlur`, `luminanceThreshold`) — o glow em emissivo/HDR. Essencial pro futurista.
- **Depth of Field** — foco cinematográfico, cara de product-shot.
- **Chromatic Aberration** — split RGB sutil na borda, "realismo de lente".
- **Noise (grain) + Vignette + SMAA** — grão+vinheta = coesão "filmado em câmera".
- ⚠️ Gotcha vivido: `EffectComposer` quebrou (`reading 'alpha'`) em combinação Next16/Turbopack/React19 — travar versões e testar isolado antes.

---

## 2. A stack canônica (pmndrs/Poimandres) — essencial (E) / opcional (O)

| Pacote | Pra quê | |
|---|---|---|
| `three` | Engine WebGL/WebGPU. Base de tudo. | E |
| `@react-three/fiber` | Renderer React do three (`useFrame`, scene graph declarativo). | E |
| `@react-three/drei` | Helpers: `Environment`, `Instances`, `MeshTransmissionMaterial`, `shaderMaterial`, `useFBO`, `ScrollControls`, `Float`, `useGLTF`. | E |
| `@react-three/postprocessing` | Bloom/DoF/CA/grain num composer fundido. | E |
| `leva` | Sliders pra tunar shader/material ao vivo. | E (dev) |
| `maath` | Matemática (easing, distribuição aleatória em esfera/caixa) — colocação de partícula. | E |
| `zustand` | Estado compartilhado entre R3F e DOM. | E |
| `lenis` | Scroll suave/inercial. Espinha dorsal de site scroll. | E (scroll) |
| `gsap` + `ScrollTrigger` | Timeline + scrub por scroll. Padrão de estúdio. | E (scroll) |
| `r3f-perf` | HUD de GPU/draw-call/memória na tela. | E (dev) |
| `troika`/drei `<Text>` | Texto 3D nítido (SDF) sem geometria. | O→E |
| `@react-three/rapier` | Física (corpo rígido). ⚠️ quebrou o render loop no stack atual — usar com cautela/testar. | O |
| `react-spring/@react-spring/three` | Animação por mola de props 3D. | O |
| `theatre.js` (`@theatre/r3f`) | Editor visual de keyframe → sequência de câmera/objeto em JSON. Power tool. | O |
| `@react-three/gltfjsx` (CLI) | GLB → componente JSX tipado + versão comprimida. | O (workflow) |
| `framer-motion-3d` | ❌ **abandonado / não serve React 19. Não usar.** | — |

**Gotchas do momento:**
- **React 19 → R3F v9** (v8 é React 18). drei no major compatível. Travar no `package.json`.
- **Next 15/16 + Turbopack**: Canvas é client-only → wrapper `'use client'` + `dynamic(ssr:false)`. **GLSL:** loader de `.glsl` no Turbopack ainda é ruim → **usar shader como template string inline** (mais seguro).
- **Fronteira 2026 = WebGPU + TSL** (escreve shader em node-graph uma vez, compila WebGL2 fallback + WebGPU). Bruno Simon já migrou. Requer entrypoint `three/webgpu`. Ainda manter fallback WebGL pra Safari.

---

## 3. Pipeline de asset (o que quebrou o Starteq)

- **Modelar**: Blender (grátis, padrão de estúdio) — modela, faz UV, **bakeia luz/AO em textura** (é assim que se tem "luz cara" a custo zero de runtime), exporta **glTF/GLB**.
- **Comprar/pegar pronto**: **Poly Haven (CC0** — modelos + HDRIs + texturas PBR, a fonte grátis premium), Sketchfab (⚠️ conferir licença: CC-BY exige crédito; "Editorial" ≠ comercial; pra cliente, comprar Royalty-Free), Kitbash3D, Quixel/Fab, Turbosquid, CGTrader. **Nunca subir GLB grátis aleatório em job de cliente sem checar licença** — nem confiar que "grátis" = "bom" (a maioria é low-poly de jogo).
- **Comprimir**: **Draco** (geometria, ganho enorme) e/ou **meshopt** (decode rápido, bom p/ animado) + **KTX2/Basis** (textura na GPU). Ferramenta: `gltf-transform optimize in.glb out.glb --compress draco` ou `gltfpack`. **Budget de bytes é o que separa premiado de demo travado.**
- **Carregar no R3F**: `npx gltfjsx model.glb --transform` → componente JSX tipado + `.glb` comprimido. `useGLTF.preload`. Lazy-load do 3D depois do primeiro paint de HTML.
- **HDRI**: Poly Haven (CC0). Baixar pra 1–2k pra web. `<Environment files=... />` ou `preset`.

---

## 4. Scroll & motion — duas arquiteturas

- **A) Lenis + GSAP ScrollTrigger (padrão de estúdio).** Lenis suaviza/inércia; GSAP timeline com `ScrollTrigger` scrubbado anima posição/rotação de câmera, props e **uniforms de shader** contra o progresso do scroll. Sincroniza o RAF do Lenis no loop do R3F. É o modelo do Lusion (cada seção = um momento encenado). Melhor quando DOM + 3D se intercalam.
- **B) drei `<ScrollControls>` + `useScroll`.** Scroll self-contained no R3F: `useScroll().offset/range()` dentro do `useFrame`. Mais simples, tudo no canvas. Melhor pra experiência 100% 3D.
- **Câmera no scroll**: lerp ao longo de um `CatmullRomCurve3` pelo offset; ou keyframe no Theatre.js.

---

## 5. O CAMINHO DE ESTUDO (currículo, em ordem)

**Three.js Journey — Bruno Simon. É A referência. US$95 vitalício, ~66 aulas / 93h.** threejs-journey.com
1. **Basics** (13) — scene/câmera/renderer, geometria, material, textura, transform.
2. **Classic** (6) — luz, sombra, baking, partícula, gerador de galáxia, scroll.
3. **Advanced** (7) — física, glTF importado, raycaster, environment map, render realista.
4. **⭐ Shaders** (18 aulas, 26h — a joia) — GLSL, padrões, raging sea, galáxia animada, **Hologram, Coffee Smoke, Fireworks, Earth (fresnel/atmosfera), Particles Cursor/Morphing, GPGPU Flow Field, Wobbly Sphere, Sliced Model, Procedural Terrain.** É o núcleo fresnel/dispersão/noise/GPGPU.
5. **Extra** — Post-processing, Performance, HTML+WebGL.
6. **Portal Scene** — pipeline Blender→bake→export→R3F completo.
7. **React Three Fiber** (14 aulas, 24h) — porta tudo pro R3F + drei + física + projeto de portfólio.

**Complementos:**
- **The Book of Shaders** (thebookofshaders.com) — fundamento GLSL, noise, shaping functions. Grátis. Fazer junto com o cap.4.
- **Codrops** (tympanus.net/codrops) — tutoriais dos efeitos exatos de estúdio (distorção, dispersão de tipografia, transição). "Como fizeram aquele efeito específico".
- **Maxime Heckel** (blog.maximeheckel.com) — o mais fundo em shader com R3F (dispersão, refração, raymarching, TSL/WebGPU). Essencial depois do Journey.
- **Wawa Sensei** (curso R3F, inclui TSL/WebGPU GPGPU). **SimonDev** (YouTube, matemática/otimização). **Inigo Quilez** (iquilezles.org — bíblia de SDF/raymarch).

**Plano mínimo pra fechar o gap (o chão, não o teto):**
1. GLSL até escrever fresnel + deslocamento por noise + um raymarch simples do zero.
2. Um sistema de partícula GPGPU (FBO).
3. HDRI + `MeshTransmissionMaterial` + stack de post contido.
4. Lenis+GSAP (ou ScrollControls) com câmera linkada ao scroll e easing decente.
5. Pipeline Blender→bake→Draco/gltfjsx→R3F.
→ Concretamente: **terminar o Three.js Journey (cap.4 Shaders + cap.7 R3F) e refazer 2–3 efeitos do Codrops/Heckel do zero.** Acima disso é gosto, iteração e tempo.

---

## 6. Aplicação no STARTEQ (o hero do astronauta, feito certo)

O que o hero precisa pra sair do "boneco" e virar Lusion:
- **Astronauta**: modelo **realista** — comprado (Sketchfab/Fab royalty-free) ou modelado/bakeado no Blender. **Nunca o CC-BY low-poly grátis** (foi o erro). OU caminho **2.5D**: dar profundidade/parallax na foto cinematográfica dourada que já existe (premium e on-brand) + objetos flutuando em volta. ← decisão de asset ainda aberta (A: 2.5D · B: modelo pago · C: parar 3D).
- **Material**: rim-light **fresnel dourado** no capacete/traje + **HDRI** refletindo (casa com o capacete dourado da identidade).
- **Ambiente**: asteroides com **noise displacement** (não icosaedro liso), poeira em **Points/GPGPU**, nebulosa por **shader FBM** (não plano com textura).
- **Post**: Bloom dosado + DoF sutil (foca o astronauta) + grain/vignette pra coesão de filme.
- **Motion**: `<Float>` + scroll com Lenis (astronauta deriva conforme rola).
- **Regras que continuam valendo** (do `ESTUDO-WEBGL-SITE-REFERENCIA.md`): 3D é camada **decorativa sobre HTML/SSR real** (bot de LLM não roda JS → AEO); fallback poster WebP no mobile/`reduced-motion`; budget <100 draw calls, ≤3 luzes, dpr cap.

---

## 7. Regra-mãe do ofício

**Nível estúdio não se improvisa — se estuda.** A tentativa de tapar buraco com asset grátis + material de prateleira sempre entrega amador. O caminho é: estudar o cap.4 do Journey (shaders), dominar HDRI+post+transmission, e investir em asset de verdade. Sem isso, não oferecer "nível Lusion" pra cliente — oferecer o que se consegue entregar bem (ex.: 2.5D cinematográfico sobre arte premium, que já é forte e realista).

Relacionado: [[reference_biblioteca_webgl_3d_sites_premium]] · [[project_site_impulso_conceito_grafo_cerebro]] · estudo-base `ESTUDO-WEBGL-SITE-REFERENCIA.md`.
