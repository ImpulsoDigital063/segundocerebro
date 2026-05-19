# STATUS · STARTEQ TOCANTINS · lead-5 quente

**Status:** lead morno-quente · primeira conversa 11/05 · próximo contato presencial 12/05 (retirada do PC do Eduardo)
**Atualizado:** 12/05/2026 (madrugada · pós-CIC 1)
**Valor potencial:** R$ 5.500 setup + R$ 497/mês recorrente (3 frentes)
**Dono:** Júnior · @starteq_to · (63) 99252-8619 · starteqpalmas@gmail.com

---

## 🎯 Quem é

- **Negócio:** Starteq Tocantins · loja física de PC gamer + assistência técnica especializada · Palmas-TO
- **Endereço:** 104 Sul, SE 05, Lt. 19, Sala 07 · Plano Diretor Sul · CEP 77020018
- **Insta:** @starteq_to · 9.002 seguidores · 157 posts · ativo
- **Operação histórica:** assistência técnica de PC + celular (~6 anos · nome antigo "Starteq Informática e Celulares") · pivotou pra gamer
- **Audiência viral local:** 2 posts fixados somam 57.600 curtidas (memes). Posts de venda real: 66 curtidas. **Diferença 870x.**
- **Site existente:** `starteqpalmas.com` · abandonado · NÃO linkado na bio do Insta · catálogo com promo "PromoJULHO" exibida em maio/26
- **Logo/paleta:** Phoenix ave estilizada amarelo dourado sobre preto · forte consistência visual
- **Tom comunidade:** humor relacional + setup porn + ironia com PCs ruins ("Casas Bahia mental")

---

## 🔥 Dores declaradas pelo próprio Júnior (na conversa com Eduardo)

1. **Sistema de ordem de serviço sem volta** · OS envia pro técnico · cliente cancela · não consegue reverter no painel
2. **Avisar cliente quando serviço estiver pronto via WhatsApp API** (automático)
3. **Controle de estoque integrado**
4. **IA própria já existe** · atende no WhatsApp · acessa página dele · indica produtos · MANDA PRO KABUM quando não tem estoque (perda de venda)
5. **Site novo estilo Pichau** · com montador de PC interativo (não carrinho · montagem real com compatibilidade)

---

## 🔥 Achados-bomba do CIC 1 (Instagram)

1. **Site EXISTE mas tá invisível** · `starteqpalmas.com` não está linkado na bio · 100% do tráfego viral do Insta vai pra WhatsApp manual
2. **Funil rachado:** 57.600 curtidas em 2 posts virais vs 66 curtidas no único post de venda · audiência gigante, conversão zero
3. **Júnior NÃO é só comerciante · é figura pública local** (chamado "Pr Júnior" em comentários) · base de fãs com camada cristã forte ("Show de Glória", "Que Deus vos abençoe")
4. **Concorrente porta-com-porta:** Global Informática · mesma quadra (104 Sul SE 05) · (63) 3224-1020
5. **Líder local:** BR Info · @lojabrinformatica · 11k seg · 15 anos · site funcional · vulnerabilidade dele é não ter viralidade
6. **Toca Info** se posiciona idêntico ("montamos seu PC Gamer com suas peças ou as nossas") · disputa o mesmo terreno
7. **Cliente NÃO compara com Pichau · compara com Casas Bahia** · referência mental é varejo tradicional, não e-commerce nacional
8. **Stories destaques desatualizados** · 149-337 semanas (~3-6 anos) · ativo joga reels novos sem âncora institucional
9. **Comentários-lead ignorados publicamente** · "Tem PC de R$ 1.000?", "Qual valor?", "Tem como pedir de outra cidade?" · respostas SÓ no DM · perda massiva
10. **Demanda fora de Palmas existe** · "Tem como pedir de outra cidade?" comentado mas sem resposta · site velho não calcula frete

---

## 📐 Estratégia · 3 frentes (replica padrão Aura R$ 1.497)

| Frente | O que entrega | Prazo | Pricing-âncora |
|---|---|---|---|
| **F1 · Site novo + montador interativo** | E-commerce padrão Pichau (referência) · montador de PC com validação de compatibilidade · paleta preto+amarelo · mobile-first · checkout PIX/cartão · cálculo de frete | 45-90d | R$ 3.500-5.000 setup |
| **F2 · Painel ERP** | OS com volta · WhatsApp automático "serviço pronto" · controle de estoque integrado · sincronia com site · **padrão Salão99/AgendaPRO cravado em [[05-PAINEL-ADMIN-PADRAO]]** | 30-60d | R$ 1.997-2.497 setup |
| **F3 · API pra IA dele + manutenção** | Endpoint público de catálogo + estoque + preço pra IA consumir · IA deixa de mandar pro Kabum · manutenção mensal | 60-90d (junto com F1) | R$ 497/mês |

**Total potencial:** R$ 5.500-7.500 setup + R$ 497/mês recorrente.

**Porta de entrada provável:** F1 (mais empolgante visualmente · gancho λ.case-1).

---

## 🎯 Posicionamento da Pichau no projeto

**Pichau NÃO é concorrente** · é **referência de UX** que o Júnior quer replicar. Cravado pelo Eduardo: *"a questão não é a Pichau ser concorrente, é que ele quer que o site dele venda igual a Pichau"*.

Aplicação:
- Montador de PC com validação de compatibilidade (lógica Pichau)
- Filtros de busca robustos
- Reviews públicos
- Mobile-first
- Velocidade de carregamento

Concorrentes reais (varejo local · disputa territorial):
- **BR Info** (líder Palmas)
- **Global Informática** (porta com porta)
- **Toca Info** (mesmo posicionamento gamer)
- **Casas Bahia** (mental do consumidor)

---

## 🤖 Requisito crítico · API consumível pela IA do Júnior

A IA dele JÁ atende no WhatsApp e acessa o site dele. Hoje quando não tem produto, manda pro Kabum (Eduardo descobriu na conversa). O site novo da Impulso precisa:

- Expor **catálogo público estruturado** (JSON · provavelmente JSON-LD + endpoint `/api/products`)
- Expor **estoque em tempo real** por SKU (`/api/stock/:sku`)
- Expor **preços + parcelamento** atualizados
- Documentar tudo pra IA dele consumir sem fricção (OpenAPI schema · ou MCP)
- Possibilidade: **endpoint de recomendação** (`/api/recommend?budget=2500&use=jogos`) que retorne PCs compatíveis

Isso é diferenciador absoluto: a IA dele PARA de mandar pro Kabum porque agora ela sabe estoque real do Júnior em tempo real.

---

## 🎬 Plano para hoje (12/05)

### Sequência cravada

1. ✅ **CIC 1 · Instagram @starteq_to** · feito · dossiê em `00-CIC-INSTAGRAM-12-MAI.md`
2. ✅ **CIC 2 · Site existente + Google** · feito · GestãoClick descoberto · `01-CIC-SITE-EXISTENTE-12-MAI.md`
3. ✅ **CIC 3 · Pichau dissecada** · feito · 9 passos do montador documentados · `02-CIC-PICHAU-12-MAI.md`
4. ✅ **Build inicial Next.js 16** · 19 arquivos · 43 páginas · build verde · localhost:3000
5. ✅ **Refinamento pós-Pichau** · 8 steps · Status do Build · alertas individuais · Badge "Potência Insuficiente" · Modal iGPU · verde PIX #009E2A · selos institucionais home · social proof
6. ✅ **GitHub `ImpulsoDigital063/Starteq`** · plugado · main pushado
7. ⏳ **Eduardo busca PC + mostra ao vivo** (replica λ.case-1)
8. ⏳ **Deploy Vercel** · plugar GitHub no Vercel · URL `starteq.vercel.app` (ou similar)
9. ⏳ **Marca reunião formal** · apresenta proposta 3 frentes
10. ⏳ **Fase 2** · Supabase real + Asaas PIX + admin com auth + upload imagens

### Stack cravada (replica padrão Impulso)

| Camada | Tech |
|---|---|
| Framework | Next.js 16.2.6 + App Router + TypeScript |
| Estilo | Tailwind v4 |
| Banco (fase 2) | Supabase |
| Pagamento (fase 2) | Asaas PIX nativo |
| Deploy | Vercel |
| Repo | `github.com/ImpulsoDigital063/Starteq` |

### Catálogo mock atual · 35 SKUs

CPU 6 · Cooler 4 · Mobo 6 · RAM 4 · GPU 5 · SSD 4 · Gabinete 4 · Fonte 4

### Páginas implementadas

- `/` home Pichau-style + social proof + 3 selos institucionais
- `/montador` · 8 passos · validação híbrida · modal iGPU · status do build
- `/produtos` · catálogo + `/produtos/[slug]` PDP + `/produtos/categoria/[c]`
- `/admin` · dashboard + `/admin/produtos` CRUD mock + `/admin/api-ia` docs
- `/api/products` · GET catálogo público (paginado · CORS aberto)
- `/api/products/[sku]` · GET produto único
- `/api/quote` · POST monta build · valida · retorna link WhatsApp

### Gancho de venda calibrado (usar com o Júnior)

> "Júnior, seus 2 posts fixados somaram 57.600 curtidas. No mesmo período, seu post com PC e preço fechou 66. Você tem audiência viral, falta máquina pra capturar. Antes do BR Info acordar pra isso, eu coloco no ar um site no estilo Pichau · com sua IA respondendo via API direto do seu estoque · em 30 dias."

Esse gancho usa NÚMERO REAL verificável na hora · peso 10x maior que pitch genérico.

---

## ⚠️ Cuidados (calibragens cravadas)

- **λ.real:** chamar de **Júnior** · não Pr Júnior · Eduardo não tinha essa info, descobri via CIC
- **λ.amplificar:** zero vocabulário negativo · ele já tem sistema "bom" e site existente · usar "amplificar · próximo nível · complementar"
- **Pichau = referência · não concorrente** · cliente quer IGUAL · não disputa
- **Esposa cristã da base de fãs** · vibração da comunidade local importa · tom limpo (sem zoeira pesada)
- **Cliente compara com Casas Bahia · não com Pichau no preço** · copy do site novo precisa posicionar "loja gamer DE Palmas" · não "competidor nacional"

---

## ❓ 3 perguntas pendentes (decidem o desenho)

1. **Volume real do WhatsApp** · quantos chats/dia? Ticket médio? % de PC pronto vs peça avulsa vs assistência?
2. **O que a IA do WhatsApp faz hoje** e o que ele quer que ela faça? Já qualifica orçamento? Tem acesso a estoque atual?
3. **Regra quando falta estoque** · ele compra sob encomenda? Manda pra concorrente (Kabum)? Cria fila de espera?

---

## 📁 Arquivos do cluster

- [[STATUS-STARTEQ]] (este · canônico)
- [[00-CIC-INSTAGRAM-12-MAI]] · output cru CIC 1
- [[BRIEFING-MASTER-STARTEQ]] · síntese executiva (próximo)
- [[01-CIC-SITE-EXISTENTE-12-MAI]] · output do CIC 2 (próximo · após Eduardo rodar)
- [[02-CIC-PICHAU-12-MAI]] · output do CIC 3 (próximo)
- [[03-ARQUITETURA-SITE-STARTEQ]] · planejamento técnico (após CICs)

---

**Ver também:**
- Hubs: [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]]
- Status correlatos: [[STATUS-IMPULSO]] · [[STATUS-AURA-ENERGY]] (mesmo padrão 3 frentes) · [[STATUS-ANDRESSA]] (mesmo padrão deep-research pré-pitch)
- Playbooks: [[PROTOCOLO-DEEP-RESEARCH-CLIENTE]] · [[PADRAO-PLANO-NEGOCIO-IMPULSO]] · [[CHECKLIST-PESQUISA-CLIENTE-PLANO]] · [[PLAYBOOK-IMPULSO-DIGITAL-VENDA]]
- Padrões: [[lp-design-system-dark]] · [[lp-funil-estrutura]] · [[lp-product-ui-showcase]]
