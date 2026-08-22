# Stack agencia-on — como outra instância usa estas contas

Escrito em **11/08/2026** para uma sessão paralela subir um projeto
temporário nas mesmas contas do LocaJV.

**Nenhuma chave está neste arquivo.** Todos os segredos vivem em
`C:\Users\Usuario\locapro\.env.local`, que está no `.gitignore`. Este
documento diz onde cada coisa mora e onde o caminho tem armadilha.

---

## ⛔ Leia isto primeiro

**A organização tem DOIS projetos. Só um é do cliente.**

| Referência | No painel | |
|---|---|---|
| 🔴 `idflkabztkixmeucxfng` | mostrado como **locapro** | **É o do LocaJV. Não encoste.** 46 locatários, 49 motos, 46 locações, cobranças reais. |
| ✅ `bsbqopmhbrqmbqtwfqnp` | mostrado como **agencia-on** | Livre. É este que o trabalho temporário usa. Saudável, sem repositório conectado, sem branches. |

**Confira pela referência na URL, não pelo nome.** Ao abrir um projeto,
o endereço fica `supabase.com/dashboard/project/<ref>`. Os nomes já
foram trocados uma vez — nome renomeado é onde o engano mora.

⚠️ **"Sem migrações" no painel não significa vazio.** O projeto do
LocaJV mostra a mesma coisa: aqui o SQL é aplicado por conexão direta,
não pelo sistema de migrations do Supabase. Antes de escrever qualquer
coisa no projeto livre, rode no SQL Editor dele:

```sql
select table_name from information_schema.tables
where table_schema = 'public' order by table_name;
```

Vazio = limpo. Se vier tabela do projeto antigo, apague antes.

⚠️ **Não crie um terceiro projeto.** Os dois estão no plano LIVRE, que
limita projetos ativos. Estourar o limite faz o Supabase **pausar** um
— e o pausado pode ser o do Jay, com o sistema no ar e o cliente
usando. Use o que já está livre; se sobrou tabela do projeto antigo
nele, limpe.

---

## GitHub

Esta máquina tem **quatro contas logadas no `gh`**. Empurrar no
repositório errado é fácil e chato de desfazer.

```sh
gh auth switch --user agencia-on
gh api user --jq .login      # tem que responder: agencia-on
```

🔴 **O `gh` volta sozinho para outra conta entre chamadas.** Aconteceu
aqui: o switch deu certo, o push foi para o lugar certo, e a chamada
seguinte de `gh api` respondeu 404 porque a conta ativa tinha voltado
para `ImpulsoDigital063`. **Faça o switch e o comando na MESMA
invocação do shell**, sempre.

O repositório também precisa de identidade local, ou a Vercel recusa o
build com "Git author X must have access to the project":

```sh
git config user.name  "agencia-on"
git config user.email "273199049+agencia-on@users.noreply.github.com"
```

Repo-local (`git config`, sem `--global`) — a máquina tem valor global
de outra conta.

---

## Vercel

- Time/escopo: **per1gos-projects**
- Deploy sai **por push** no repositório conectado; não há CLI ligada
- `VERCEL_TOKEN` está **vazio** no `.env.local`

🔴 **A URL de produção não é adivinhável.** O projeto do LocaJV atende
em `locapro-ruby.vercel.app`. Eu chutei `locapro.vercel.app`, recebi
**200 com página**, e passei um tempo achando que era nosso — **é
projeto de outra pessoa**. Nunca confie em domínio deduzido.

Para descobrir a URL real de um projeto sem abrir o painel:

```sh
gh api repos/agencia-on/<repo>/deployments --jq '.[0].id'
gh api repos/agencia-on/<repo>/deployments/<id>/statuses \
  --jq '.[0] | "\(.state) \(.environment_url)"'
```

A Vercel registra os deployments no GitHub, então dá para acompanhar
build sem token.

### Duas armadilhas de variável de ambiente

1. **Região.** O padrão da Vercel é `iad1` (Washington) e o banco fica
   em São Paulo. Sem `vercel.json` com `"regions": ["gru1"]`, cada
   consulta atravessa o continente. Confira pelo cabeçalho:
   `x-vercel-id: gru1::gru1::...` é o certo. `gru1::iad1::...` significa
   borda em São Paulo e função em Washington — a borda engana, olhe a
   segunda parte.

2. **"Sensitive" quebra `NEXT_PUBLIC_`.** Variável marcada como
   Sensitive só existe em tempo de execução, e `NEXT_PUBLIC_*` precisa
   ser lida no build. Marcar as duas coisas juntas dá **500 em
   produção com o build passando**. A Vercel não deixa desmarcar depois.
   Solução: use variável só de servidor (`SUPABASE_URL`, sem o prefixo).

Variável nova só vale **no próximo build**. Salvar não redeploya.

---

## Supabase

- Conta: a mesma do LocaJV (não confundir com as contas do AgendaPRO,
  do Palace e do AppDelyvery, que também existem nesta máquina)
- Região do projeto do cliente: **sa-east-1**

🔴 **O MCP do Supabase configurado na home aponta para o AppDelyvery**,
não para este projeto. Antes de rodar migration por MCP, confira o
`project_ref`. Aqui não usamos MCP: usamos conexão direta.

### Migrations

O padrão que funcionou: `scripts/aplicar-sql.mjs` aplica o `.sql`
dentro de `begin/commit` com rollback, e **lê de volta** do
`pg_tables` / `pg_indexes` / `pg_policies` / `pg_proc` para provar.
Copiar esse script é mais rápido que reinventar.

Ele precisa de `DATABASE_URL`. Pegue no painel → botão **Connect** →
aba **Session pooler**:

- ✅ **Session pooler, porta 5432**
- ❌ Transaction pooler (6543) não executa DDL direito
- ❌ Conexão direta pode ser só IPv6 e trava em rede doméstica

### Duas coisas que já custaram tempo aqui

- A URL do painel vem com `/rest/v1/` no fim. O cliente JS quebra com
  *"Invalid path specified in request URL"*. Corte tudo depois do
  domínio.
- `select` do PostgREST **valida coluna**: pedir coluna que não existe
  derruba a query inteira, não devolve nulo.

---

## Onde está cada segredo

Tudo em `C:\Users\Usuario\locapro\.env.local`. **Leia de lá, não peça
para o Eduardo colar no chat** — segredo que passa pela tela vira
segredo em transcrição e em print.

| Variável | Onde nasce |
|---|---|
| `SUPABASE_URL` | Supabase → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | idem — ⚠️ ignora RLS, só servidor, nunca `NEXT_PUBLIC_` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | idem |
| `DATABASE_URL` | Supabase → Connect → Session pooler (5432) |
| `MOTOR_TOKEN` | gerado por nós; é segredo compartilhado da rota do motor |
| `VERCEL_TOKEN` | **vazio** — Vercel → Account Settings → Tokens, se precisar |

Para o projeto temporário, pegue as chaves **do projeto livre**, não
deste `.env.local`. Reaproveitar as do LocaJV faria o temporário
escrever no banco do cliente — e, quando ele fosse apagado, deixaria
chave do cliente numa mão a mais.

---

## Ao apagar o temporário

1. Limpe as tabelas do projeto livre, ou apague o projeto inteiro —
   **conferindo a referência antes**. Apagar projeto no Supabase pede o
   nome digitado; leia duas vezes qual está na tela.
2. Apague o **projeto na Vercel**
3. Apague o **repositório** no GitHub, ou deixe privado e arquivado
4. Confira que o LocaJV continua de pé: `locapro-ruby.vercel.app`
   respondendo 200, com o painel mostrando dado real, e o projeto
   `idflkabztkixmeucxfng` **ativo** (não pausado) no Supabase

O passo 4 não é formalidade: mexer em conta compartilhada e não
conferir o que ficou é como cliente descobre que caiu.
