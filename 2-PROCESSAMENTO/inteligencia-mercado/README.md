# Inteligência de Mercado — Achados Claude in Chrome

**Criado:** 25/04/2026
**Função:** consolidar pesquisas feitas via Claude in Chrome (extensão oficial Anthropic) sobre concorrência, mercado, copy, leads IG-only.

---

## Princípio operacional

Claude in Chrome é o **agente de inteligência externa** do RadarPRO. Enquanto o RadarPRO opera dados que tu controla (banco Turso), o Claude in Chrome bisbilhota a web pública (sites concorrentes, Insta, Google, LinkedIn) e traz dados crus.

**Aqui é onde os achados ficam.** Cada arquivo .md é resultado de 1 pesquisa específica.

---

## Estrutura de pastas

```
inteligencia-mercado/
├── README.md                    ← este arquivo
├── concorrencia/                ← pesquisas de concorrentes (agências, freelancers Palmas)
│   ├── 25-04-agencias-palmas.md
│   └── ...
├── leads-ig/                    ← leads IG-only descobertos via hashtag
│   ├── 25-04-moda-feminina-palmas.md
│   ├── 25-04-saude-estetica-palmas.md
│   └── ...
├── mercado-bra/                 ← inteligência de copy/mercado BR
│   ├── top-lps-psicologia-2025.md
│   └── ...
└── due-diligence/               ← validação de leads antes de disparar
    └── lead-XX-due-diligence.md
```

---

## Cadência operacional sugerida

| Frequência | O que rodar |
|---|---|
| **1x essa semana** | 3 prompts piloto (concorrência + leads IG moda + leads IG saúde estética) |
| **Toda 2ª e 5ª** | 1 pesquisa de leads IG-only (rotacionar nichos) |
| **1x/mês** | Re-mapear concorrência Palmas |
| **Antes de mexer em copy** | Buscar 3-5 LPs de referência do nicho |
| **Pré-disparo de cada lead Tier A** | Due diligence rápida (10 min) |

> **Quota MAX é cara.** 3-5 prompts/semana é sweet spot. Rodar 20 prompts num dia gasta cota inutilmente.

---

## Workflow padrão

1. **Eduardo abre Claude in Chrome** (extensão oficial, plano MAX)
2. Cola um prompt (do `CLAUDE-IN-CHROME-PLAYBOOK.md` quando o playbook estiver pronto, ou improvisa)
3. Espera resposta (~5-15 min dependendo do escopo)
4. Cola o output bruto em arquivo dedicado nesta pasta
5. Avisa Claude (eu) — eu destrincho com tu, separo o que vale, integro com RadarPRO

---

## Conexão com RadarPRO

- **Leads IG-only descobertos** → cadastro manual no banco via script (a criar: `scripts/insert-lead-manual.ts`) com `fonte='instagram-cic'`
- **Concorrência mapeada** → munição pra SYSTEM_PROMPT (saber com quem brigar) + ajuste de pricing
- **Copy de mercado** → calibração do `SYSTEM_PROMPT` e da LP da Impulso Digital
- **Due diligence** → atualiza coluna `notas` do lead no banco antes de disparar

---

## Regras éticas (obrigatórias)

- ✅ **Pesquisa fair use:** dados públicos, posicionamento declarado, info pra estudo de mercado
- ❌ **NÃO scraping agressivo:** mensagens privadas, email pessoal, dados de gente que não declarou ser empresa
- ❌ **NÃO copiar conteúdo protegido por copyright** integralmente — só extrair dados estruturados (preço, posicionamento, stack)
- ✅ **Respeitar o robots.txt e rate limits** dos sites
- ✅ **Anonymizar quando necessário** — se pesquisa de concorrente revelar info sensível de cliente final dele, descartar
