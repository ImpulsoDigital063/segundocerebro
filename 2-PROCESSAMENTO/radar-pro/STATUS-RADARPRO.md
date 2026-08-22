# STATUS-RADARPRO.md

**Produto:** RadarPRO — plataforma de prospecção B2B local
**Fase:** ATIVO (disparos em curso) · interno Impulso → productização planejada
**Data:** 16/07/2026
**Responsável:** Eduardo Barros
**Repo:** `C:/Users/Usuario/radar-pro` · GitHub `ImpulsoDigital063/radarpro` · Vercel `radarpro-inky.vercel.app`

> **Mapa técnico completo (todas as ferramentas):** [[MAPA-FERRAMENTAS-RADARPRO]]

---

## O que é

Pipeline de prospecção que **coleta negócios no Google Maps → enriquece → gera a mensagem de venda por nicho → dispara pelo WhatsApp com guard → acompanha resposta/follow-up.** Roda local, custo ~zero (gerador de copy é local, não usa API paga por lead). Hoje vende o **AgendaPRO** pra negócios de beleza de Palmas.

---

## Estado atual (16/07/2026)

- **Base:** 533 leads agendapro (pós-limpeza).
- **Disparos hoje:** 27 enviados (13h–15h), modo **wa.me manual** (um toque por lead).
- **Resposta real:** 1 humana ("bom dia", estética/Sabrina) — o resto foram **auto-respostas de robô** dos negócios que já usam WhatsApp Business.
- **Vendas via RadarPRO:** 0 (primeiro dia de disparo de verdade com a copy nova).
- **Fila re-curada:** ordenação invertida → **quem NÃO usa sistema primeiro** (o robô não come a msg; humano lê). Abas por nicho no `/disparo`.

---

## APRENDIZADOS DE CAMPO (16/07 — os que valem ouro)

1. **A maioria das "respostas" é ROBÔ.** Negócio que já usa sistema roda WhatsApp Business com auto-resposta que come a mensagem antes de um humano ler. → priorizar quem está no **manual/caderno/DM**.
2. **Mensagem que só afirma trava em "bom dia".** A arma de venda é **fazer o lead FALAR** (pergunta > afirmação). A copy atual conta tudo e fecha fraco ("aqui ou aí?"); próximo teste é fechar com **pergunta do nicho** (A/B).
3. **VIRADA ESTRATÉGICA:** os clientes que a Impulso JÁ tem chegaram **BUSCANDO** sistema (intenção ativa). Outbound (RadarPRO) bate em quem não procura → baixo rendimento. O canal de maior qualidade é **INBOUND / intenção**: estar onde o dono BUSCA.
   - Prioridade (por caixa): **AEO/ChatGPT** (dono pergunta pra IA "melhor sistema pra salão") → **SEO/LP por nicho** → **grupos de donos** → **app store (ASO)** → **Google Ads** (só quando tiver caixa).
4. **ICP:** negócios pequenos/independentes tipo Olímpio (barbearia), Rosy Borges Beauty Studio (lash), Izanara/Studio MOOD (salão de cachos, 160+ produtos). Nichos-alvo: **barbearia, salão, nail, lash, tranças**.
5. **Cobertura da base:** estética domina (44) e é FORA do alvo; **lash (1) e nail (1) quase vazios**. Precisa **raspar Palmas** pra esses nichos. Depois dos testes, **soltar pro Brasil** (a maioria dos clientes está em outros estados; produto é digital).

---

## Sessão 15–16/07/2026 (o que foi feito)

- **Copy reescrita** (`playbook-local.ts`): opener agora vende **crescimento** (fidelidade/indicação/Google) + gestão, **self-service honesto** — cortada a mentira "eu monto tudo" dos 18 pontos. Fila de 533 regenerada, deployada.
- **Link do demo por nicho** injetado no `curioso`/`d3` (nunca na msg fria). Enquadramento "montei um exemplo" (honesto — agenda/avaliações dos demos são fabricadas).
- **4 demos montados no AgendaPRO** (Império/barbearia, Studio Bella Lash, Studio Marcela Hair/salão, Studio Larissa Nails) — ver [[project_agendapro_demos_prospeccao]].
- **Tranças:** copy reforçada com venda de produto/estoque + prova dos 160 produtos (Studio MOOD).
- **`/disparo`:** abas por nicho (filtro + contagem). Envio forçado pro **wa.me** (Baileys instável no Next dev).
- **Fila re-curada:** não-usa-sistema primeiro.

---

## Próximos passos

1. **Outbound:** continuar disparos nos 5 nichos via abas (manual-first). Testar fechamento-com-pergunta (A/B).
2. **Coleta:** raspar Palmas pra **lash + nail** (ICP vazio). Depois soltar pro Brasil.
3. **Inbound (o que converte):** começar por **AEO** + 1 LP por nicho + grupos de donos.
4. **Productização:** ver seção no [[MAPA-FERRAMENTAS-RADARPRO]] — multi-tenant, coleta self-service, copy configurável, deploy que segure WhatsApp. Modelo R$97-197/mês.

---

## Ambição — RadarPRO como produto

Eduardo quer **disponibilizar o RadarPRO pronto pra outros prospectarem** (não só ensinar a construir). Público: vendedores de serviço local, infoprodutores. Diferencial: não é lista de contato, é **playbook real (pitch + objeções + follow-up) + disparo com guard**. Requisito pra abrir: cases próprios (Impulso fechou X com o RadarPRO). Detalhe técnico do que falta: [[MAPA-FERRAMENTAS-RADARPRO]].

---

**Ver também:**
- [[MAPA-FERRAMENTAS-RADARPRO]] (inventário técnico completo) · [[project_agendapro_demos_prospeccao]] (os demos)
- Hubs: [[MEGA-CLAUDE]] · [[EDUARDO-BARROS]] · [[VERBO]]
- Correlatos: [[STATUS-IMPULSO]] · [[STATUS-AGENDAPRO]]
- Histórico: [[ATUALIZACAO-24-04-2026]] · [[AUDITORIA-25-04-2026]] · [[ROADMAP-9-NIVEIS]] · [[IDEIA-FORMULARIO-DIAGNOSTICO-ADDON]] · [[CONTEXTO-RADARPRO-PARA-CHATGPT]]
