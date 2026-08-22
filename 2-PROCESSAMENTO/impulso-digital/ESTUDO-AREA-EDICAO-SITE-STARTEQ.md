# 🛠️ ESTUDO — Área de edição do site Starteq (cliente configura o site)

> 09/07/2026. Como o cliente (Junior) vai editar o site: produtos, conteúdo, config. Base: o site é headless e lê do ComandaPRO; o ComandaPRO já é o ERP + admin do tenant. Ver `STARTEQ-DEV-STATUS.md`, [[reference_starteq_tenant_comandapro]], [[project_comandapro_saas_multivertical]].

## 0. A pergunta real (reenquadrada)

Não é "criar um admin do zero" — **metade já existe**. O ComandaPRO já é o admin do tenant Starteq, com login por papel (owner/recepção/técnico). Hoje o cliente já edita:
- **Produtos/estoque** (`/admin/estoque`, AT-aware): nome, preço, PIX, estoque, specs por categoria, marca, badge, destaque, **foto real** (upload→Storage→site). *(Pendência conhecida: EditModal AT-aware — o Add já grava specs; falta editar specs de existente.)*
- **Config da loja** (`/admin/configuracoes`): `pixDiscountPercent`, máquina/taxas, cor da marca (`app_settings.data.store.primaryColor`).

**Decisão histórica já tomada:** o site TINHA um ERP-protótipo (`admin-mock.ts` + 38 telas `/admin`) e foi **removido de propósito** — virou real no ComandaPRO. Não re-fragmentar.

**O GAP real:** o **conteúdo do SITE** está hardcoded no `page.tsx` — hero (título/sub/CTA), esteira, tiles "Qual PC você procura", quais produtos/prateleiras aparecem e em que ordem, barra de confiança (endereço/horário/textos), banner de campanha, SEO, tema. **Nada disso o cliente edita hoje.** É isso que a "área de edição do site" precisa resolver.

## 1. Onde o dado de site deve morar — 3 opções

| Opção | O que é | Prós | Contras |
|---|---|---|---|
| **A. Estender o ComandaPRO** (RECOMENDADA) | Uma fatia "site" no `app_settings.data` do tenant, editada num módulo **"Meu Site"** no admin do ComandaPRO; o site lê headless (novo `/api/loja/[slug]/site-config`) | 1 login (o que ele já usa), 1 fonte de verdade, 0 custo novo, reusa auth/papéis, coerente com a plataforma; mesmo padrão do catálogo | Precisa construir o módulo + endpoint |
| B. CMS à parte (Sanity/Payload/Builder) | Headless CMS externo pro conteúdo | Editor visual pronto | +1 sistema, +1 login pro cliente, +custo/mensalidade, contradiz "ComandaPRO é a plataforma", 2 fontes de verdade |
| C. Admin no próprio site | Rebuildar `/admin` no `starteq-palmas` | Perto do site | Foi REMOVIDO de propósito; fragmenta auth/dado; duplica o que o ComandaPRO já faz |

**Recomendação: Opção A.** É a única coerente com a arquitetura que já existe (o site é vitrine burra; o ComandaPRO é a plataforma que o cliente já opera). Zero custo novo, um login só.

## 2. O que o cliente edita (escopo em camadas)

**Já editável no ComandaPRO (produtos/loja)** — só terminar:
- Produtos: tudo (terminar o EditModal AT-aware). Config: PIX%, cor da marca.

**Novo — fatia `app_settings.data.site` (o gap a construir), módulo "Meu Site":**
- **Hero**: eyebrow, título, subtítulo, textos dos 2 CTAs (+ destinos).
- **Esteira**: lista de selos (texto).
- **Tiles "Qual PC você procura"**: título/desc/destino de cada objetivo.
- **Destaques**: quais prateleiras aparecem, ordem, e o título de cada (ou marcar produtos como "destaque" — já existe `highlight`).
- **Barra de confiança**: endereço, horário, telefone, textos.
- **Banner de campanha** (opcional): título, imagem, link, ligar/desligar.
- **Contato/redes/WhatsApp** e **SEO** (title/description por página).
- **Tema**: cor primária (já existe) + acento.

**Fica DEV-managed (bespoke premium — cliente NÃO mexe):**
- Os FX 3D/gamer (cursor de mira, parallax, warp, shaders), as bandas cinematográficas, a ESTRUTURA/layout. Isso é **design**, não conteúdo — o cliente não pode quebrar o build premium. (É o que justifica o preço; não é um Wix.)

## 3. Como edita (UX)

**Formulários estruturados por seção + preview ao vivo** — NÃO um construtor visual drag-drop no v1.
- Por quê: o layout premium não deve ser rearranjável livremente (quebra a qualidade); form casa com o admin que o ComandaPRO já tem (forms); é confiável e barato. Visual builder é caro, arriscado e fora de escopo.
- **Preview**: um iframe do site lendo o rascunho da config (`?draft=`), lado a lado com o form. Botão **"Publicar"** → grava no `app_settings` → o site lê.

## 4. Caminho de leitura (headless, com fallback)

- Novo endpoint público `/api/loja/[slug]/site-config` (igual ao `/produtos`).
- O site busca no SSR e renderiza o conteúdo a partir dele, com os **valores hardcoded de hoje como fallback/default** — mesmo padrão de resiliência do catálogo (`getProducts` cai no estático). Config vazia = site igual está hoje. Nunca quebra.
- `cache: "no-store"` (ou ISR revalidate) pra publicar refletir rápido.

## 5. Auth / papéis
Reusa o login do ComandaPRO (papel **owner** = o Junior). Nav "Meu Site" gated a owner. Recepção/técnico não veem. Guard server-side (`requireNavAccess`) igual às outras telas.

## 6. Plano faseado
- **Fase 0** — terminar o **EditModal AT-aware** de produto no ComandaPRO (o cliente já edita produto por completo). *(pendência já mapeada no handoff.)*
- **Fase 1** — módulo **"Meu Site"**: hero + barra de confiança + contato + SEO editáveis; endpoint + leitura no site com fallback. (A copy que mais muda.)
- **Fase 2** — destaques/prateleiras (quais produtos, ordem, títulos) + esteira + tiles de objetivo.
- **Fase 3** — banner de campanha + acentos de tema + polir o preview ao vivo.

## 7. Guarda-corpos
- **Food pagante no mesmo deploy** do ComandaPRO (Cantinho/Medellín): a fatia `site` é do vertical service/tenant Starteq — **gate por family/tenant**, não tocar food. Análise de impacto + branch + read-after-deploy (regra dura do handoff).
- λ.prova-na-fonte: publicar = ler a row depois; UI verde não é prova.
- Não expor no endpoint público nada sensível (só conteúdo de vitrine).

## 8. Decisões abertas (Eduardo)
1. Confirma **Opção A** (editar no ComandaPRO, módulo "Meu Site") vs CMS à parte?
2. Escopo: **curado** (produtos + conteúdo-chave editável, resto bespoke) — recomendado — vs "tudo editável"?
3. Preview ao vivo já na Fase 1, ou forms primeiro e preview depois?

Relacionado: `COMANDAPRO-INTEGRACAO-SITE.md` · [[reference_comandapro_cor_marca_campo]] · [[reference_estudo_lojas_gamer_ux_copy]].
