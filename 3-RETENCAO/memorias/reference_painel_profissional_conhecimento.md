---
name: painel-profissional-conhecimento
description: "conhecimento canônico de Painel SaaS Profissional · filosofia + arquitetura + UX + anti-patterns + mapa de decisões · padrão pra AgendaPRO, Starteq e qualquer painel futuro"
metadata: 
  node_type: memory
  type: reference
  originSessionId: a3e1254c-dd72-4855-a4bb-aa4a2d3d23ca
---

Documento vivo em `C:/Users/Usuario/segundo-cerebro/3-RETENCAO/perfil/PAINEL-PROFISSIONAL.md` consolidando tudo que cravamos em sessões reais (Salão99 audit + AgendaPRO construção + Starteq design).

**O que contém:**
- **Filosofia**: painel é ferramenta operacional (não vitrine) · operação > configuração · dono não treina · sistemas concorrentes são professores grátis · universal sempre, personalizado nunca
- **Arquitetura**: shell desktop (sidebar 256/72px + max-w-7xl) · shell mobile (BottomNav fixa) · header sticky · ordem canônica de grupos (Painel · Financeiro · Catálogo · Equipe · Configurações · Outros)
- **Padrões UX**: tabela operacional (densidade média · sem zebra · avatar forte · kebab) · filtros URL params · drawer 880px · empty state com CTA · wizard 2-step · KPIs 4-col · hero clamp tipo · navegação temporal com chevron
- **Padrões de dados**: multi-tenant business_id + RLS · idempotência import via sha1 · snapshots vs joins · URL params como filtro server
- **Anti-patterns**: replicar feature sem problema · modal 18 campos sem seção · empty sem CTA · subquery RLS na própria tabela · cache uniforme · webhook sem fallback · picsum random
- **Mapa de decisões**: drawer vs modal vs página · rota nova vs tab · enum vs notes · refresh vs revalidate · permissões por papel
- **Casos cravados**: Palace (em curso) · Viva Cacheada · Starteq

**Quando usar:**
- Antes de criar feature nova em painel SaaS (qualquer projeto Impulso)
- Antes de copiar UX do concorrente — filtrar pela lente "problema que ela resolve"
- Quando Eduardo perguntar "como faz X em painel" — consulta esse doc antes de inventar
- Onboarding de novo painel (Starteq evoluindo · cliente novo)

**Link com manuais técnicos:**
- `[[06-PAINEL-SAAS-PADRAO]]` em `verbo-design/` tem specs CSS detalhados, tokens, componentes individuais
- Esse arquivo de perfil é mais conceitual · o 06 é mais hands-on

**Evolução:** atualizar quando padrão novo virar default, ou anti-pattern novo for descoberto em retrospecto. Não atualizar pra decisões pontuais de cliente.
