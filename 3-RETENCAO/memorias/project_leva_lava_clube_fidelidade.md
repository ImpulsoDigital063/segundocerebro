---
name: project-leva-lava-clube-fidelidade
description: "Possível cliente cravado 21/05/2026 · rede Leva&Lava Lavanderia Express (130+ unidades, 26 estados) opera fidelidade manualmente via WhatsApp · oportunidade de plataforma SaaS de fidelidade · sistema operacional Cicclo (cicclo.com) é o gatekeeper técnico"
metadata: 
  node_type: memory
  type: project
  originSessionId: 07d8759c-47da-4c91-9b57-bbf02c983731
  aliases: ["leva e lava", "lavaeleva", "leva&lava", "lavanderia leva", "clube fidelidade", "projeto Beatriz", "projeto lavanderia", "apostila lavanderia"]
  pasta_projeto: "C:/Users/Usuario/segundo-cerebro/2-PROCESSAMENTO/leva-lava/"
  arquivos_chave:
    - "INDEX.md (ponto de entrada)"
    - "PROJETO-CLUBE-FIDELIDADE.md (doc-mãe 14 seções)"
    - "Apostila-Clube-Fidelidade-LevaLava.pdf (versão impressa visual)"
    - "apostila.html (fonte do PDF, editável)"
  comando_abrir: "Quando Eduardo pedir pra abrir o projeto (qualquer alias listado), ler INDEX.md + PROJETO-CLUBE-FIDELIDADE.md na íntegra ANTES de responder. Depois confirmar status e perguntar qual frente atacar (mensagem 1, contato Cicclo, visita Posto Tucunaré, MVP)."
---

Eduardo visitou a unidade TQ02 Palmas Brasil Sul (Leva&Lava) em 20/05/2026 à noite, conversou com a franqueada Beatriz, identificou fricção no programa "Clube leva&lava" (10 ciclos = 1 grátis operado por comprovante via WhatsApp manual). Beatriz autorizou ele a citar o nome dela ao falar com o contato corporativo da rede.

**Rede:**
- Leva&Lava Lavanderia Express — 130+ unidades em 26 estados
- Sede grupo: interior SP (DDD 17)
- Contato corporativo: (17) 99227-6766 · contato@levaelava.com.br · site levaelava.com.br
- 2 unidades em Palmas (a TQ02 + Posto Tucunaré)
- CNPJ franqueado visitado: 61.708.378/0001-39 (GB Leva e Lava Ltda)
- WhatsApp do cartaz TQ02: (63) 99810-36871

**Sistema operacional (gatekeeper técnico):**
- Cicclo / Laundway (cicclo.com) — plataforma líder de self-service laundry no Brasil
- Contato Cicclo: (11) 3230-2076 · contato@cicclo.com
- Cicclo TEM fidelidade nativa com cashback, mas Leva&Lava NÃO usa (gap a investigar)
- Cicclo declara "possibilidade de integração com outras APIs" mas sem documentação pública

**Decisão fundadora cravada (Bloco 2 do projeto):**
- Hipótese A: integração nativa Cicclo (ideal, sem fricção, depende de acordo)
- Hipótese B: cliente identifica telefone no totem (depende do Cicclo permitir custom field)
- Hipótese C: app próprio + janela temporal (depende de leitura de eventos Cicclo)
- Hipótese D: OCR de comprovante via bot WhatsApp (fallback garantido, não depende de Cicclo)
- Recomendação: pitch com A como ideal, D como fallback garantido

**Monetização cravada:**
- Plano por unidade: setup R$ 1.500 + R$ 89/mês (Essencial) ou R$ 149/mês (Pro com mensageria)
- Plano nacional: setup R$ 15.000 + R$ 8.900/mês (até 200 unidades)
- Oportunidade realista (50% adesão Leva&Lava): MRR R$ 5.785, anual R$ 69.420

**Stack:** Next 15 + Supabase + Vercel + Twilio/Zenvia (mesma base do AgendaPRO/Impulso)

**Doc completo:** segundo-cerebro/2-PROCESSAMENTO/leva-lava/PROJETO-CLUBE-FIDELIDADE.md (estrutura 14 seções: diagnóstico, 8 blocos do produto, arquitetura, modelagem, fluxos UX, stack, monetização, roadmap MVP/V1/V2, estratégia comercial, riscos, próximos passos)

**Primeira mensagem WhatsApp cravada** (cliente que viu fricção, cita Beatriz, pede transferência pro decisor — não vende solução).

**Próximos passos imediatos pra Eduardo:**
1. Mandar mensagem 1 pro (63) 99810-36871 (rascunho pronto no doc seção 11)
2. Ligar pro Cicclo anônimo pra descobrir política de API
3. Visitar a outra unidade Palmas (Posto Tucunaré) pra comparar
4. Reunião com decisor da rede com deck 1 página + mockups

**Riscos relevantes:**
- Cicclo pode não topar abrir API
- Pode haver contrato de exclusividade Cicclo x Leva&Lava (improvável, validar)
- Matriz pode ter projeto interno paralelo
- LGPD: opt-in claro obrigatório

Cravado em paralelo aos negócios ativos do Eduardo (Impulso/AgendaPRO/Starteq). Não compete com AgendaPRO porque é nicho diferente (lavanderia vs. salão/barbearia). Stack reutilizável.

Relacionado: [[project_agendapro_estado_20_05]], [[reference_painel_saas_padrao]], [[feedback_starteq_facilita_nao_cria_trabalho]] (λ.menos-cliques aplicado), [[feedback_prova_na_fonte_persistencia]] (read-after-write em writes críticos do produto).
