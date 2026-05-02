# STATUS-AURA-ENERGY

**Última atualização:** 2026-05-01 (noite)
**Status do lead:** 🟡 morno-quente (LP apresentada, gostou, sem fechamento formal)
**Origem:** amigo do Eduardo, projeto pessoal do Renato

---

## 📌 RESUMO EXECUTIVO (leia primeiro)

A Aura Energy é uma empresa de energia solar fotovoltaica de **Renato Edson** em **Palmas-TO**. Renato é amigo do Eduardo. Conversaram dia 01/05/2026 enquanto bebiam — Renato apresentou o projeto, pediu ajuda pra entrar no digital. Eduardo construiu uma **LP completa de 20 seções no mesmo dia** (com Claude/Impulso Digital) e apresentou. **Renato gostou muito** mas não fecharam negócio porque o momento era informal. Lead a esquentar via follow-up estruturado.

**Próxima ação prevista (D+1):** mensagem casual no WhatsApp do Renato + ajustes na LP com detalhes específicos que ele comentou na reunião.

---

## 👤 SOBRE O CLIENTE

| Campo | Valor |
|---|---|
| **Nome do dono** | Renato Edson |
| **Empresa** | Aura Energy — Energia Elétrica Especializada |
| **WhatsApp** | (63) 9 9268-8852 |
| **Cidade** | Palmas-TO (atende toda região metropolitana e rural) |
| **Nicho** | Energia solar fotovoltaica residencial / comercial / rural / sistemas com bateria |
| **Logo** | `C:/Users/DELL/segundo-cerebro/4-EXPORTACAO/agendapro-brandkit/png/Logo Aura Enerrgy sem fundo.png` (e `aura_energy_perfil_minimal.png`) — **observação:** logo está fisicamente em `Downloads/` original; cópias dentro do projeto da LP em `auraenergy/public/` |
| **Identidade visual** | Azul marinho profundo (#1B3A87) + amarelo dourado (#F5BC2C). Logo: sol estilizado + torre de transmissão + circuitos digitais + ondas em curva azul/amarelo |
| **Estado do negócio** | Em fase de lançamento. Já fez criativos próprios pro Instagram (Eduardo viu 5). N° de clientes reais: ainda não confirmado (criativo dele dizia "+100" — Eduardo desconfia que é aspiracional, precisa confirmar) |
| **Material que tem** | 5 criativos Instagram (mostrados ao Eduardo dia 01/05) — mas não tem LP, site, blog, tráfego pago, CRM |

---

## 🎯 O QUE FOI ENTREGUE

### LP Aura Energy v4 (em produção)

**🔗 URL:** https://auraenergy.vercel.app
**📁 Repo local:** `C:\Users\DELL\auraenergy\`
**🚀 Deploy:** Vercel (conta `edubchaves5-3060`, projeto `auraenergy` no scope `impulsodigitals-projects`)
**📦 Stack:** Next.js 16.2.4 + React 19.2.4 + Tailwind v4 + Inter font

### 20 seções entregues

1. **Hero** — headline + simulador de economia interativo
2. **Banner Visual** cinematográfico (foto telhado solar + headline "Sua casa não é consumidora. É geradora.")
3. **Marquee** das marcas Tier 1 (Trina, Canadian, Jinko, Growatt, Sungrow, Huawei, Fronius, GoodWe…)
4. **Manifesto Aura** — branding forte, fundo azul-deep, logo gigante 140px, 3 pilares (Transparência / Excelência técnica / Compromisso 25 anos)
5. **Verticais** com tabs interativas (Residencial / Comercial / Rural / Sistema com bateria) — cada um com headline + 3 bullets + CTA WhatsApp específico
6. **Como Funciona** — 4 cards com fotos por etapa (visita técnica → projeto → instalação → ativação)
7. **Catálogo de Kits** — 4 cards pricing (3kWp / 5kWp ⭐ / 8kWp / 12+kWp) com painéis, inversor, geração, área, preço a partir de + 10 itens inclusos
8. **Diferenciais** — 6 motivos
9. **Equipe Aura em ação** — galeria magazine asymmetric com 5 fotos de técnicos trabalhando + selos NR-10/EPI/Seguro
10. **Sobre Renato** — humanização com foto + bio + 4 valores + CTA "conversar direto comigo"
11. **Compromisso 25 anos** — timeline antes/durante/depois com 4 promessas em cada etapa + selo "compromisso assinado em contrato"
12. **Credenciais** — faixa azul-deep com 5 selos (Energisa-TO, CREA-TO, INMETRO, ANEEL, Solfácil)
13. **Investimento** — comparativo R$ 22k em 25 anos (Poupança R$ 38k / CDI R$ 65k / Ibov R$ 95k / **Solar R$ 230k**) com barras animadas
14. **Janela do Fio B** — timeline 2023→2029+ com badge "Você está aqui" piscando em 2026 + impacto financeiro de adiar
15. **Galeria de instalações** — 6 fotos
16. **Mapa de instalações** — SVG estilizado de Palmas com 9 bairros e 36 instalações pulsando
17. **Depoimentos** — 3 cards (placeholders)
18. **Recursos / Blog** — 5 artigos com fonte real (ABSOLAR, ANEEL, Energisa, Canal Solar, Solfácil)
19. **FAQ** — 9 perguntas
20. **CTA Final** — formulário (nome + WhatsApp + bairro + conta) que abre WhatsApp com tudo preenchido

### Componentes técnicos especiais

- **Simulador de economia interativo** com cálculo real (tarifa Energisa-TO R$ 0,95/kWh, HSP Palmas 5,9, Lei 14.300 com Fio B 60% em 2026, painel 575W). 4 cards animados (counter): economia/mês, em 25 anos, sistema kWp, payback. CTA WhatsApp já preenche mensagem com simulação completa.
- **Botão flutuante WhatsApp** que aparece após scroll de 400px. Verde com glow + halo pulsante. Texto "Falar com especialista" expande nos primeiros 5s e no hover.
- **Movimento em toda LP**: mesh gradient solar animado, pulsos em circuitos SVG, counter animado, fade-up no scroll (IntersectionObserver), glow rotativo, marquee horizontal, parallax em fotos, glass cards com brilho passando.

### Conteúdo educativo / artigos

5 artigos prontos no blog com dados reais:
1. *Quanto custa instalar energia solar em Palmas-TO em 2026?* (R$ 12-38k por faixa de conta)
2. *Lei 14.300 explicada: ainda vale a pena instalar solar em 2026?* (Fio B 60%, economia 74-87%)
3. *Em quanto tempo o sistema solar se paga? Cálculo real pra Palmas* (4-6 anos com R$ 800/mês)
4. *Painéis de 550W ou 600W? Qual escolher pra residência*
5. *Solar à vista ou financiado: qual sai mais barato em 2026?* (Solfácil 0,79% a.m., 120 meses)

---

## 📐 DADOS TÉCNICOS DE MERCADO (verificados via pesquisa web 01/05/2026)

### Tarifa e mercado
- **Tarifa Energisa-TO B1 residencial:** ~R$ 0,92-0,98/kWh com tributos (REH ANEEL 3.479/2025, vigente jul/25 a jul/26). Reajuste de jul/25 foi +12,31%.
- **Bandeira tarifária maio/2026:** AMARELA (+R$ 1,885 a cada 100 kWh).
- **Próximo reajuste:** julho/2026 (verificar).
- **HSP Palmas-TO:** 5,9 kWh/m²/dia (entre as maiores do BR).

### Lei 14.300 — Fio B
- 2025: 45% · **2026 (HOJE): 60%** · 2027: 75% · 2028: 90% · 2029+: 100%.
- Direito adquirido até 2045 pra quem instalou ANTES de 7/jan/2023.

### Equipamentos top BR 2026
- **Painéis Tier 1:** Trina (15 anos garantia produto, mais lembrada), Canadian (suporte BR desde 2012), Jinko (130-150 GW/ano N-type TOPCon), JA Solar, LONGi.
- **Inversores:** Growatt (mais vendido residencial BR, custo-benefício), Sungrow (top 2 mundial premium), Huawei (melhor app FusionSolar), Fronius (durabilidade premium), GoodWe (híbridos com bateria), Deye (off-grid).

### Financiamento
- **Solfácil:** a partir de 0,79% a.m., até 120 meses.
- BV: 1,17% a.m., 96 meses. Santander: 1,11%. Caixa CDC Solar: 1,18%.
- Para residência R$ 18-25k em Palmas → Solfácil ou BV. Parcela quase sempre menor que conta atual.

### Crescimento setor
- **3,9 milhões+** brasileiros já têm GD solar (ABSOLAR set/2025).
- 10,6 GW adicionados em 2025, R$ 32,9 bi investidos.
- Brasil é **6º no ranking mundial** de capacidade instalada.

**Fontes citadas:** ABSOLAR, ANEEL (REH 3.479, REN 1.000/2021, REN 1.059/2023), Canal Solar, pv magazine BR, Solfácil, Portal Solar, Energisa.

---

## 📅 LINHA DO TEMPO

### 2026-05-01 — Sessão de criação intensiva

**Tarde:** Eduardo me mostrou os 5 criativos do Instagram que ele já tinha feito pro Renato. Discutimos o nicho. Decidiu construir LP protótipo pra apresentar.

**Construção da LP** (~5h):
- v1: estrutura básica (Hero + Simulador + Como Funciona + FAQ + CTA)
- v2: mudança total de DNA — saiu do dark tech pra **light premium** (Stripe + Linear v2 + Tesla)
- v2.5: adição das 6 seções estratégicas (Verticais, Catálogo Kits, Investimento, Janela Fio B, Mapa, Credenciais)
- v3: humanização com fotos reais (Banner Visual, Equipe em ação, Sobre Renato, fotos no Como Funciona)
- v4: branding Aura Energy (Manifesto, Compromisso 25 anos, Header com logo grande, logo como elemento visual em 5 momentos)

**Diretrizes que Eduardo cravou durante a construção:**
1. SVG sempre, NUNCA emojis
2. Imagens reais, nunca vetor genérico tipo unDraw
3. Movimento e modernidade (empresa de tecnologia)
4. Sair do background escuro (não fazer o que sempre fizeram)
5. Pesquisar mercado real e trazer artigos úteis
6. Carta branca em projetos (não pedir autorização entre etapas)

**Reunião informal noturna com Renato:**
- Eduardo apresentou a LP (auraenergy.vercel.app)
- Renato gostou — não houve recuo no preço, não houve crítica destrutiva
- Não fecharam negócio porque o cenário era informal (estavam bebendo)
- Status: lead morno-quente, próximo passo = follow-up estruturado

---

## 💰 MODALIDADES PROPOSTAS PRA RENATO

(do cardápio Impulso Digital pro nicho solar)

| # | Modalidade | Investimento | Pra quem |
|---|---|---|---|
| 1 | LP Solar c/ simulador | R$ 799 + R$ 99/mês | Quer testar com baixo custo |
| 2 | Tráfego pago Meta Ads | R$ 497 setup + R$ 597/mês + Meta R$ 1.500-3.000 | Quer leads agora |
| 3 | Conteúdo orgânico (Insta + Reels) | R$ 697/mês | Quer construir audiência |
| 4 | Site institucional | R$ 1.297 + R$ 99/mês | Quer presença SEO |
| 5 | RadarPRO B2B (custom) | R$ 997/mês | Quer fechar contas comerciais grandes |
| 6 | **Combo Decolagem** (LP + Tráfego + Conteúdo + Insta + Google) | **R$ 1.997/mês** + Meta | Cliente que quer escalar com tudo organizado |
| 7 | **Parceria por comissão** (5% sobre venda fechada via funil) | **R$ 0** + Meta R$ 1.500-3.000 (Renato cobre) | Win-win amigo, atrelado a resultado |

**Modalidade preferida pelo Eduardo (a oferecer primeiro):** Cenário a definir conforme o que Renato apontar como dor principal — ainda não temos essa informação clara.

**Cardápio detalhado:** ver mensagem do dia 01/05 ou playbook futuro.

---

## ⏳ FOLLOW-UP — PLANO 7 DIAS (proposto pra Eduardo executar)

| Dia | Ação | Tom | O que envia |
|---|---|---|---|
| **D+0 (01/05 noite)** | Nada — não vende durante festa | — | — |
| **D+1 (02/05 manhã)** | Mensagem casual no zap, mantém calor | Amigo, sem cobrança | "Acordei com a LP na cabeça. Vou ajustar uns detalhes que você comentou e te mando o link de novo amanhã." |
| **D+2 (03/05)** | LP ajustada com 2-3 personalizações reais | Concreto | Link da LP atualizada com fotos/dados que ele apontou |
| **D+4-5 (05-06/05)** | Material útil reforçando o que ele gostou mais | Generoso | Print da seção favorita + mockup proposta comercial em 1 página |
| **D+7 (08/05)** | Pergunta direta de fechamento | Reto | "O que tá faltando pra começar? Modalidade, prazo, dúvida técnica? Pode falar reto que eu encaixo." |

---

## ❓ INFORMAÇÕES PENDENTES (Eduardo precisa coletar)

1. **O que Renato MAIS elogiou** na LP? (simulador / kits / manifesto / sobre Renato / equipe / outro?)
2. **Algum dado técnico que ele corrigiu?** (marca de painel/inversor preferida, n° real de instalações dele, tarifa exata)
3. **Ele falou sobre orçamento ou modalidade de fechamento?**
4. **Próxima conversa marcada ou em aberto?**
5. **Tem foto real do Renato e da equipe?** (Eduardo deve puxar do WhatsApp dele)
6. **Quem é o engenheiro responsável Aura?** (CREA-TO — pra colocar no selo de credenciais)

---

## 🔄 ITENS NA LP QUE PRECISAM TROCAR POR DADOS REAIS

Marcado no código com comentário `// Eduardo: trocar por foto/dado REAL...`:

| Item | Localização no código | Status atual |
|---|---|---|
| Foto do Renato | `src/components/SobreRenato.tsx` | Stock Unsplash de profissional na elétrica |
| 5 fotos da equipe | `src/components/EquipeAcao.tsx` | Stock Unsplash de instalações solares |
| 4 fotos dos passos | `src/components/ComoFunciona.tsx` | Stock Unsplash contextual |
| 6 fotos da galeria | `src/components/Galeria.tsx` | Stock Unsplash |
| Foto banner cinematográfico | `src/components/BannerVisual.tsx` | Stock Unsplash |
| 3 depoimentos | `src/components/Depoimentos.tsx` | Placeholders ilustrativos (Marcus / Cláudia / José Antônio) |
| Mapa — bairros e n° de instalações | `src/components/MapaInstalacoes.tsx` | Bairros reais de Palmas, n° fictício (3-7 por bairro, total 36) |
| N° "+100 clientes atendidos" | NÃO está na LP — precisa confirmar com Renato se é real |

**Tarefa pós-fechamento:** quando Renato fornecer 10-15 fotos reais (mesmo do celular), a LP fica completa em ~10 min de troca de URLs.

---

## 🛠 OUTRAS PENDÊNCIAS / IDEIAS

- **Comprar domínio `auraenergy.com.br`** e apontar pra Vercel (R$ 60-80/ano no Registro.br)
- **Pixel Meta + GA4** (não está plugado — protótipo só)
- **CRM simples** pros leads (Notion / Airtable / Sheets via webhook)
- **Vídeo timelapse** de instalação (placeholder pra integrar quando Renato gravar)
- **Antes/depois conta de luz** (mockup interativo de uma conta real virando antes/depois)
- **Selo "Empresa parceira Energisa-TO"** com brasão (precisa autorização)
- **Programa Aura Premier** (indicação que ganha R$ na próxima conta) — pra v5

---

## 📎 LINKS E REFERÊNCIAS

- **LP em produção:** https://auraenergy.vercel.app
- **Repo local:** `C:\Users\DELL\auraenergy\`
- **Vercel project:** `auraenergy` (scope `impulsodigitals-projects`, conta `edubchaves5-3060`)
- **Inspector:** https://vercel.com/impulsodigitals-projects/auraenergy
- **Logo files:** `C:\Users\DELL\Downloads\Logo Aura Enerrgy sem fundo.png` e `aura_energy_perfil_minimal.png`
- **5 criativos do Instagram (originais do Eduardo):** `C:\Users\DELL\Downloads\IMG_6395.PNG`, `IMG_6402.PNG`, `IMG_6406.PNG`, `IMG_6410.PNG`, `IMG_6414.PNG`
- **Doc de pesquisa de mercado completo:** ver tool result do agente em 01/05/2026 (transcrito em parte aqui na seção "Dados técnicos de mercado")
- **Cardápio de modalidades Impulso pra solar:** ver conversa do dia 01/05 (mensagem grande com 7 modalidades e tabela comparativa)

---

## 🔁 ATUALIZAR ESTE ARQUIVO QUANDO

- ✅ Renato responder a mensagem D+1 (atualizar status)
- ✅ Eduardo coletar respostas das 6 informações pendentes
- ✅ Houver mudança de modalidade considerada
- ✅ Renato fornecer fotos/dados reais
- ✅ A LP for atualizada com qualquer mudança significativa
- ✅ Houver fechamento (mover pra `clientes-ativos/`) ou recusa (arquivar com nota de aprendizado)

---

**Tag:** `#cliente-pipeline` `#solar` `#palmas` `#impulso-digital` `#lead-morno-quente`
