# STATUS-RADARPRO.md

**Atualizado:** 22/09/2026 · **Responsável:** Eduardo Barros
**O que é:** coleta negócios no Google Maps → detecta nicho → gera mensagem por nicho → dispara no WhatsApp com guard → acompanha resposta.

**Três repos (não confundir):**
- `C:/Users/Usuario/radarpro-produto` — **motor em uso** (campanhas, perfis, banco de aprendizado). É o que importa hoje.
- `C:/Users/Usuario/kit-radarpro` — site de venda do kit (HTML estático) + zip pra download.
- `C:/Users/Usuario/radar-pro` — painel antigo da Impulso (Vercel `radarpro-inky`), sem commit desde 15/07.

> Versão de 16/07 (disparo manual wa.me, 533 leads) está no histórico do git. Mapa técnico: [[MAPA-FERRAMENTAS-RADARPRO]].

---

## Estado 22/09 — PARADO desde 04/09

**Campanha ativa: AgendaPRO no RS** (Canoas, Gravataí, Cachoeirinha — tem pagante lá: DN Diogo). 6 nichos. Copy ancorada no uso real dos clientes (Olímpio/fidelidade, Viva/comissão, Rosy/lembrete, Wanessa e Gessica/sinal, Isis e Realli/equipe).

**Experimento P1 (desde 03/09):** critério escrito antes — 40 envios, sucesso ≥10% de resposta humana, troca se <4%.
**Placar: 5 de 40 enviados · 0 resposta humana.** Não dá pra concluir nada. Não mexer na copy antes dos 40 (joga a amostra fora).

🔴 **Risco de entrega:** dispara por Baileys (número não-oficial do Eduardo). Número não-oficial tende a não entregar pra quem nunca falou com ele.

**Outro perfil guardado:** `impulso-solar` (site pra empresa de energia solar, Goiânia/Brasília, 268 leads). Trocar com `npm run perfil <nome>`.

**Ver o placar e os aprendizados:** `npx tsx scripts/aprendizado.ts` no `radarpro-produto`.

## Produto (kit)

Kit local que roda no Claude Code do comprador, **pagamento único, não SaaS** (decisão 31/07). Publicado em 31/07. No site: R$197 / R$497. Comprador = quem já usa Claude Code. Vendas do kit: sem registro.

## Aprendizados que valem (campo + banco de aprendizado)

1. **Resposta de robô não é resposta.** No 1º lote, 2 de 5 "responderam" — os dois eram atendimento automático. Contar isso dava 40% falso.
2. Negócio com IA no WhatsApp engole a mensagem fria. Marcar e testar outro canal (DM, ligação).
3. Priorizar quem opera no manual/caderno (humano lê), não quem já tem sistema com bot.
4. Mensagem que só afirma trava em "bom dia". Pergunta do nicho > afirmação.
5. Nome que o dono escolheu vale mais que a categoria do Maps (peso 3 × 1).
6. Regra de segurança que não é checada no caminho de execução não existe (guard do intervalo, rampa travada no dia 1 por um catch que engolia erro — corrigidos 04/09).
7. **Virada estratégica (16/07):** os clientes que a Impulso já tem chegaram BUSCANDO sistema. Outbound rende pouco; inbound/intenção (AEO, SEO por nicho, grupos de donos) converte mais.

## Próximo passo (se retomar)

Completar os 35 envios do P1 — de preferência resolvendo antes a entrega (número não-oficial). Sem isso, o experimento mede entrega, não copy.

---
**Ver também:** [[STATUS-IMPULSO]] · [[STATUS-AGENDAPRO]] · [[MAPA-FERRAMENTAS-RADARPRO]] · [[PLANO-PRODUTO-RADARPRO]]
