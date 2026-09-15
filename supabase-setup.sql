-- RCCG Retreat 2026 — complete Supabase setup
-- Run this in Supabase SQL Editor before using registration/login/admin features.

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  full_name text not null,
  email text,
  phone text not null,
  parish_unit text,
  arrival_day text check (arrival_day in ('friday','saturday','both')),
  focus_areas text[] default '{}',
  province text,
  zone text,
  area text,
  parish text,
  created_at timestamptz not null default now()
);

alter table public.registrations add column if not exists focus_areas text[] default '{}';
alter table public.registrations add column if not exists province text;
alter table public.registrations add column if not exists zone text;
alter table public.registrations add column if not exists area text;
alter table public.registrations add column if not exists parish text;

-- Required by main.js upsert(..., { onConflict: "user_id" }).
create unique index if not exists registrations_user_id_unique
on public.registrations(user_id);

alter table public.registrations enable row level security;

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.admins enable row level security;

-- Security-definer admin check avoids recursive RLS checks on public.admins.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.admins where user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Users can insert their own registration" on public.registrations;
drop policy if exists "Users can view their own registration" on public.registrations;
drop policy if exists "Users can update their own registration" on public.registrations;
drop policy if exists "Admins can view all registrations" on public.registrations;
drop policy if exists "Admins can view the admins list" on public.admins;

create policy "Users can insert their own registration"
on public.registrations for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can view their own registration"
on public.registrations for select
to authenticated
using (auth.uid() = user_id or public.is_admin());

create policy "Users can update their own registration"
on public.registrations for update
to authenticated
using (auth.uid() = user_id or public.is_admin())
with check (auth.uid() = user_id or public.is_admin());

create policy "Admins can view the admins list"
on public.admins for select
to authenticated
using (public.is_admin());

-- After the target person has registered, make them an admin:
-- insert into public.admins (user_id)
-- select id from auth.users
-- where email = 'YOUR_ADMIN_EMAIL@example.com'
-- on conflict (user_id) do nothing;

-- Optional post-retreat table.
-- If you want this feature, also run post-retreat-sql.sql.
