---
name: agendapro-import-gap
description: AgendaPRO precisa de funcionalidade de importação de dados de sistemas concorrentes — gap confirmado em 2 frentes em 14/05/2026
metadata: 
  node_type: memory
  type: project
  originSessionId: 7c9e19c8-378f-40cd-8050-3fbbb7dfe5ce
---

Gap real do AgendaPRO confirmado em 14/05/2026: clientes potenciais já têm dados em outros sistemas (Salão 365, Trinks, Booksy, etc.) e o "não dá pra migrar" é barreira de adoção. Eduardo decidiu estruturar bem antes de implementar.

**Why:** validado em 2 frentes simultâneas no mesmo dia:
1. Leticia (Viva Cacheada · Palmas) — usa Salão 365 Profissional R$48,50 há 1+ ano · não vai abandonar · quer importar banco de clientes (já confirmou que Salão 365 exporta)
2. Ex-barbeiro de Goiânia (futuro representante autorizado) — perguntou diretamente sobre migração de dados de barbeiros existentes

**How to apply:**
- Antes de implementar import: ter tabela `clients` no AgendaPRO (hoje não existe — `appointments` denormaliza `client_name` + `client_phone`)
- Arquitetura tem que ser modular: 1 connector por sistema fonte, formato canônico no meio, importer único no destino
- LGPD: Viva Cacheada continua sendo controladora · AgendaPRO opera · termo entre as duas + política de privacidade cobrem
- Linkar com [[starteq-facilita-nao-cria-trabalho]]: UX de import = poucos cliques · upload CSV · preview · confirma · pronto
- Fase 1 (escopo Leticia · Salão 365) serve como piloto antes de generalizar

**Status 14/05/2026 (fim do dia):**
- F1 ATIVA em prod: migration v42 + v43 + 12 arquivos de código (commits ded6b4c · d838f6c · e5543eb · f8842e1) + suporte CSV + Excel (.xlsx via SheetJS)
- UI universal `/admin/configuracoes?tab=importar`: tela única (sem step de escolha de sistema) · usa connector csv-manual com header detection tolerante
- Teste end-to-end VALIDADO no Império Barbershop com CSV de 15 linhas: 12 lidos · 12 inseridos · 3 skips corretos (sem nome, sem fone, telefone sem DDD) · 10 avisos coerentes · preview 158ms · commit 418ms
- Pendente: calibrar com CSV real do Salão 365 da Leticia quando chegar · UI de detalhes/edição do cliente ainda não mostra birthday/notes
