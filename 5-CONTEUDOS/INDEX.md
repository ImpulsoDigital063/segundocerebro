# 5-CONTEUDOS — banco de conteúdo (build-in-public / dicas)

**Propósito:** registrar TUDO de diferenciado que a gente faz no AgendaPRO (e nos outros projetos) enquanto fazemos. Cada perrengue resolvido, bug achado, sacada de produto = matéria-prima de conteúdo. Depois isso vira post no Instagram (dica), atrai seguidores (devs + donos de negócio), e mais na frente vira material de ensino.

> Tudo que a gente faz aqui vale ouro. Esse arquivo é onde o ouro fica guardado antes de virar post. — Eduardo, 09/06/2026

## Fluxo
1. **Aconteceu algo bom** (bug achado, fix esperto, sacada) → registra aqui na hora, cru.
2. Cada item = 1 arquivo com: **história** (o que rolou) + **gancho** (hook que prende) + **lição** (a dica que o outro leva) + **formato** sugerido + **status**.
3. Quando for postar → vira carrossel/reel pelo pipeline do verbo-design (estética terminal/dev, texto nítido via sharp+SVG, zero emoji nos slides).
4. Pasta de produção dos posts fica em `Desktop/Posts Impulso/<campanha>/`.

## Plano master + mineração
- **`PLANO-CONTEUDO-MASTER.md`** — pilares + ideias (visão geral).
- **`MINA-PROJETOS.md`** — ~56 ângulos minerados dos docs de cada projeto (varredura multi-agente 09/06) + TOP 10. ⚠️ tem nota de curadoria (anonimizar cliente, verificar placeholders).

A tabela abaixo é a fila de produção dos itens já fechados.

## Público
Devs indie / quem tá subindo SaaS + donos de salão/barbearia (os dois lados que a gente vive). Tom: direto, história real, sem teoria, mostra o bastidor de quem FAZ.

## Conteúdos registrados

| # | Tema | Gancho | Formato | Status |
|---|---|---|---|---|
| 1 | Bot atacou nosso SaaS | "Um bot criou 5 contas no nosso SaaS em 6 segundos" | Carrossel 9 slides | **Carrossel PRONTO** (`Desktop/Posts Impulso/ataque-bot-saas/`) |
| 2 | Bug escondia 40% da receita de um cliente | "Meu cliente recebeu R$4.210. O sistema mostrava R$2.500. Cadê os R$1.710?" | Carrossel | Matéria-prima pronta (`2026-06-09-bug-40pct-receita.md`) |
| 3 | O sistema mentia: dado certo, relatório errado | "Os dados estavam 100% certos. O relatório mentia." (coluna fantasma) | Carrossel/Reel | Ideia (ver arquivo flagship) |
| 4 | 2 modelos de negócio: agenda vs balcão | "Meu cliente não tava errado. Meu sistema é que só entendia um jeito de operar." | Carrossel | Ideia |
| 5 | Como auditei 1 mês de uso real de um cliente | "Passei um pente-fino em 1 mês de dados reais. Achei 6 bugs." | Carrossel/Reel | Ideia |
| 6 | Achar bug pela métrica, não pelo log | "Achei um furo de segurança olhando taxa de conversão, não log de firewall." | Reel curto | Ideia |

> Quando registrar um novo, adiciona uma linha aqui + cria o arquivo do item.
