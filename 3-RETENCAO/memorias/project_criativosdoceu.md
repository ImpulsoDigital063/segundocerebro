---
name: project-criativosdoceu
description: "Projeto Criativos do Céu pausado em 19/05/2026 · parceria por permuta com Matheus Ressil encerrada unilateralmente · home no ar como \"Em manutenção\" · retomada exige acordo pago"
metadata: 
  node_type: memory
  type: project
  originSessionId: 4ac6c6d1-dc43-4b98-9ab7-1e240d1f8482
---

**Criativos do Céu** era um projeto da Impulso Digital em **parceria por permuta** com **Matheus Ressil** (Ressil Design · Base Church · Palmas-TO):
- Matheus entrou com 6 posts (~7 slides cada) pra Impulso/MPN — não produziu mais nada nos meses seguintes
- Eduardo entrou com estratégia + LP + plano de negócio + setup Kiwify + estrutura do produto + briefing consultivo

## Status em 2026-05-19

**Eduardo encerrou a parceria unilateralmente.** Razão prática: Matheus parou de executar tarefas do Criativos do Céu há meses; último teste foi o briefing consultivo enviado em 13/05 — Matheus nunca respondeu (slug `ressil-matheus` não existe no Supabase). Eduardo enviou áudio explicando que tirou do ar por custos + Matheus estar ocupado. Narrativa cortês pra preservar a relação pessoal.

## Estado técnico cravado (pra retomar depois)

- **No ar:** `criativosdoceu.com` mostra página minimal "Em manutenção · Voltamos em breve" (Playfair italic + fundo creme `#F5EFE6`)
- **Rotas escondidas:** `/briefing`, `/painel-briefing`, `/portfolio`, `/blog` viraram pastas `_briefing/`, `_painel-briefing/`, `_portfolio/`, `_blog/` (Next ignora pastas com `_` prefix). Código preservado, só não aparece como rota.
- **Backup ZIP:** `C:/Users/Usuario/Desktop/criativosdoceu-backup-19-05-2026.zip` (git archive HEAD pré-pausa)
- **Commit da pausa:** `52d454e` no branch `main` do repo `ImpulsoDigital063/criativosdoceu`
- **Supabase:** tabela `briefings` é compartilhada com Aura. Slug `ressil-matheus` nunca foi escrito. Nada a mexer.
- **Vercel:** projeto `criativosdoceu` no team `impulsodigitals-projects`, projectId `prj_4hz4q578Or4oeptCcNnMN3AsotyI`
- **Domínio criativosdoceu.com:** comprado e administrado pelo Matheus. DNS continua apontando pro Vercel da Eduardo (por isso a página de manutenção responde sem quebra).
- **Conta Kiwify:** do Matheus. Eduardo nunca administrou.

## Como retomar (≈ 5 min)

```bash
cd C:/Users/Usuario/criativosdoceu
git revert 52d454e
git push
vercel --prod
```

Reverte o pause, restaura rotas + home antiga, redeploya. Reversível em qualquer momento.

## Política comercial futura

**Eduardo cravou em 19/05:** retomada do Criativos do Céu fica condicionada a **acordo comercial pago** — não fazer mais de graça. Aplica também a próximos pedidos de permuta com Matheus em outros projetos.

Ver [[feedback-permuta-desbalanco-estrutural]] pro aprendizado generalizado.

## How to apply

- Não tratar como projeto ativo da Impulso até Eduardo cravar retomada
- Em conversas com Eduardo sobre Matheus em outros contextos (Ressil Design, Base Church), tratar como pessoa-conhecida-mas-fora-do-pipeline — não como sócio/parceiro ativo
- Se Eduardo voltar a falar em retomar Criativos, ancorar em "vamos fechar o acordo pago primeiro" antes de qualquer trabalho técnico
