# Banco de Dados — Esquema Supabase/Postgres (APPDELYVERY)

> Backbone do backend. Quando criar o projeto Supabase, rodar este esquema (em migrations versionadas v1, v2...).
> Postgres + extensão **PostGIS** (geoespacial) + RLS (Row Level Security).

---

## 0. Extensões
```sql
create extension if not exists postgis;      -- geoespacial (matching por proximidade)
create extension if not exists pgcrypto;      -- uuid + PIN supervisor
```

## 1. Enums (tipos)
```sql
create type user_role        as enum ('estabelecimento','entregador','admin','operador');
create type vehicle_type      as enum ('moto','carro','bike');
create type entregador_status as enum ('cadastro','em_verificacao','aprovado','recusado','suspenso');
create type pedido_status     as enum ('rascunho','buscando','aceito','a_caminho_coleta','coletado','a_caminho_entrega','entregue','cancelado');
create type oferta_status     as enum ('ofertada','aceita','recusada','expirada');
create type verif_tipo        as enum ('antecedentes','cnh','crlv','identidade');
create type verif_resultado   as enum ('pendente','aprovado','reprovado');
create type pag_metodo        as enum ('pix','cartao','carteira','fatura');
create type pag_status        as enum ('pendente','pago','repassado','estornado');
```

## 2. Tabelas

### profiles (estende auth.users)
```sql
create table profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  role        user_role not null,
  nome        text not null,
  telefone    text,
  created_at  timestamptz default now()
);
```

### estabelecimentos
```sql
create table estabelecimentos (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references profiles(id) on delete cascade,
  razao_social  text not null,
  cnpj          text,
  endereco      text,
  lat           double precision,
  lng           double precision,
  telefone      text,
  saldo_carteira numeric(10,2) default 0,
  plano         text default 'prepago',   -- prepago | pospago
  created_at    timestamptz default now()
);
```

### entregadores
```sql
create table entregadores (
  id              uuid primary key default gen_random_uuid(),
  profile_id      uuid not null references profiles(id) on delete cascade,
  nome            text not null,
  cpf             text not null,
  vehicle_type    vehicle_type not null,
  placa           text,
  cnh_categoria   text,
  status          entregador_status default 'cadastro',
  is_online       boolean default false,
  posicao         geography(Point,4326),       -- PostGIS: lat/lng atual
  ultima_posicao_at timestamptz,
  asaas_subconta_id text,                       -- p/ repasse automático
  rating          numeric(2,1) default 5.0,
  total_entregas  int default 0,
  created_at      timestamptz default now()
);
create index entregadores_posicao_gix on entregadores using gist (posicao);  -- matching rápido
create index entregadores_online_ix on entregadores (is_online) where is_online = true;
```

### entregador_documentos
```sql
create table entregador_documentos (
  id            uuid primary key default gen_random_uuid(),
  entregador_id uuid not null references entregadores(id) on delete cascade,
  tipo          text not null,            -- cnh | crlv | selfie
  url           text not null,            -- Supabase Storage
  enviado_at    timestamptz default now()
);
```

### verificacoes
```sql
create table verificacoes (
  id            uuid primary key default gen_random_uuid(),
  entregador_id uuid not null references entregadores(id) on delete cascade,
  tipo          verif_tipo not null,
  resultado     verif_resultado default 'pendente',
  provedor      text,                     -- flagcheck | infosimples | idwall
  payload       jsonb,                    -- resposta crua (LGPD: acesso só admin)
  criado_at     timestamptz default now(),
  aprovado_por  uuid references profiles(id)
);
```

### pedidos
```sql
create table pedidos (
  id                 uuid primary key default gen_random_uuid(),
  estabelecimento_id uuid not null references estabelecimentos(id),
  entregador_id      uuid references entregadores(id),
  -- coleta
  coleta_endereco    text not null,
  coleta_lat         double precision not null,
  coleta_lng         double precision not null,
  -- entrega
  entrega_endereco   text not null,
  entrega_lat        double precision not null,
  entrega_lng        double precision not null,
  -- cliente final (recebe o link de rastreio)
  cliente_final_nome     text,
  cliente_final_telefone text,
  -- conteúdo
  descricao          text,
  valor_declarado    numeric(10,2),
  vehicle_type       vehicle_type not null default 'moto',
  -- cálculo
  distancia_km       numeric(6,2),
  duracao_min        int,
  preco_total        numeric(10,2),
  preco_entregador   numeric(10,2),
  preco_plataforma   numeric(10,2),
  rota_geojson       jsonb,                       -- geometria Mapbox Directions
  -- estado
  status             pedido_status default 'rascunho',
  tracking_token     uuid default gen_random_uuid() unique,  -- link público do cliente final
  created_at         timestamptz default now(),
  aceito_at          timestamptz,
  coletado_at        timestamptz,
  entregue_at        timestamptz
);
create index pedidos_estab_ix on pedidos (estabelecimento_id);
create index pedidos_entregador_ix on pedidos (entregador_id);
create index pedidos_status_ix on pedidos (status);
```

### ofertas (histórico do dispatch)
```sql
create table ofertas (
  id            uuid primary key default gen_random_uuid(),
  pedido_id     uuid not null references pedidos(id) on delete cascade,
  entregador_id uuid not null references entregadores(id),
  status        oferta_status default 'ofertada',
  ofertada_at   timestamptz default now(),
  respondida_at timestamptz
);
```

### rastreios (amostra p/ auditoria — posição AO VIVO vai por Realtime Broadcast, não aqui)
```sql
create table rastreios (
  id            uuid primary key default gen_random_uuid(),
  pedido_id     uuid not null references pedidos(id) on delete cascade,
  lat           double precision not null,
  lng           double precision not null,
  created_at    timestamptz default now()
);
```

### comprovantes (trilha de auditoria)
```sql
create table comprovantes (
  id          uuid primary key default gen_random_uuid(),
  pedido_id   uuid not null references pedidos(id) on delete cascade,
  tipo        text not null,              -- coleta | entrega
  foto_url    text,
  assinatura_url text,
  lat         double precision,
  lng         double precision,
  created_at  timestamptz default now()
);
```

### pagamentos
```sql
create table pagamentos (
  id              uuid primary key default gen_random_uuid(),
  pedido_id       uuid not null references pedidos(id),
  metodo          pag_metodo not null,
  valor           numeric(10,2) not null,
  taxa            numeric(10,2) default 0,
  status          pag_status default 'pendente',
  asaas_payment_id text,
  split_payload   jsonb,
  pago_at         timestamptz,
  repassado_at    timestamptz
);
```

### avaliacoes + carteira_transacoes
```sql
create table avaliacoes (
  id          uuid primary key default gen_random_uuid(),
  pedido_id   uuid not null references pedidos(id),
  nota        int check (nota between 1 and 5),
  comentario  text,
  created_at  timestamptz default now()
);

create table carteira_transacoes (
  id                 uuid primary key default gen_random_uuid(),
  estabelecimento_id uuid not null references estabelecimentos(id),
  tipo               text not null,        -- credito | debito
  valor              numeric(10,2) not null,
  pedido_id          uuid references pedidos(id),
  created_at         timestamptz default now()
);
```

## 3. Função de matching (PostGIS) — SECURITY DEFINER
> Acha entregadores online verificados num raio, ordenados por distância. SECURITY DEFINER pra não esbarrar em RLS (regra: nada de subquery na própria tabela em policy).
```sql
create or replace function find_entregadores_proximos(p_lng float8, p_lat float8, p_raio_m int default 5000)
returns table(id uuid, nome text, metros float8)
language sql security definer as $$
  select e.id, e.nome,
         st_distance(e.posicao, st_setsrid(st_makepoint(p_lng,p_lat),4326)::geography) as metros
  from entregadores e
  where e.is_online = true
    and e.status = 'aprovado'
    and e.posicao is not null
    and st_dwithin(e.posicao, st_setsrid(st_makepoint(p_lng,p_lat),4326)::geography, p_raio_m)
  order by metros asc;
$$;
```

## 4. RLS (resumo das políticas)
> Ativar RLS em todas as tabelas. Padrão:
- **estabelecimentos/pedidos:** o estabelecimento só vê os próprios (`profile_id = auth.uid()` via join).
- **entregadores:** o entregador vê o próprio cadastro; vê pedidos onde `entregador_id` é o dele ou que lhe foram ofertados.
- **admin/operador:** vê tudo (policy por `role`).
- **verificacoes.payload (dado sensível LGPD):** acesso só admin.
- **tracking público:** o cliente final acessa `/rastreio/[token]` via uma **função SECURITY DEFINER** que recebe o `tracking_token` e devolve só o necessário (status + posição) — sem login, sem expor o resto.
> Evitar recursão: políticas que precisam checar papel usam função `auth_role()` SECURITY DEFINER, nunca `select` na própria tabela.

## 5. Realtime
- Canal **Broadcast** `pedido:{id}` → posição do entregador ao vivo (efêmero, NÃO grava cada ping).
- `rastreios` recebe só amostras periódicas (ex.: a cada 20s) p/ auditoria.
- Postgres Changes em `pedidos` (status) → atualiza as telas do negócio/admin.
