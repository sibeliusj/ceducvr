-- Tabela de envios de formulário do site (contato, contrate-aprendiz, seja-aprendiz).
-- Ganho sobre o site PHP: histórico/auditoria das submissões (hoje só ia por e-mail).
-- Aplicar no Supabase (SQL Editor ou `supabase db push`) ao provisionar o projeto.

create table if not exists public.form_submissions (
  id          bigint generated always as identity primary key,
  form_type   text not null check (form_type in ('contato','contrate-aprendiz','seja-aprendiz')),
  nome        text not null,
  email       text not null,
  telefone    text,
  assunto     text,
  mensagem    text,
  extra       jsonb,                       -- campos específicos (cnpj, idade, etc.)
  ip_address  text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists idx_form_submissions_type    on public.form_submissions (form_type);
create index if not exists idx_form_submissions_created on public.form_submissions (created_at desc);

-- RLS: ninguém lê/escreve com a chave anônima. As gravações vêm das Route
-- Handlers usando a SERVICE ROLE (que ignora RLS). A leitura no admin futuro
-- será liberada por policy específica para usuários autenticados/admin.
alter table public.form_submissions enable row level security;

-- (Sem policies de SELECT/INSERT para anon/authenticated por ora — acesso só
--  via service role. Adicionar policy de leitura para o painel admin na Fase 5.)
