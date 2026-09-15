-- RCCG Retreat: Post-retreat / 3-month training registration
-- Run once in Supabase SQL Editor.

create table if not exists public.post_retreat_registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  instrument_training boolean not null default false,
  instrument text,
  training_duration_months integer not null default 0,
  continue_bootcamp boolean not null default false,
  certificate_fee integer not null default 3000,
  certificate_fee_acknowledged boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint valid_training_duration check (training_duration_months in (0, 3)),
  constraint valid_instrument check (instrument is null or instrument in ('Keyboard','Drums','Lead Guitar','Bass Guitar','Saxophone')),
  constraint training_requires_instrument check (
    (instrument_training = false and instrument is null and training_duration_months = 0)
    or
    (instrument_training = true and instrument is not null and training_duration_months = 3)
  )
);

alter table public.post_retreat_registrations enable row level security;

-- Safe for re-running during setup: only create these policies if they do not exist.
do $$ begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='post_retreat_registrations' and policyname='Users can insert their own post-retreat registration') then
    create policy "Users can insert their own post-retreat registration"
      on public.post_retreat_registrations for insert with check (auth.uid() = user_id);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='post_retreat_registrations' and policyname='Users can view their own post-retreat registration') then
    create policy "Users can view their own post-retreat registration"
      on public.post_retreat_registrations for select using (auth.uid() = user_id);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='post_retreat_registrations' and policyname='Users can update their own post-retreat registration') then
    create policy "Users can update their own post-retreat registration"
      on public.post_retreat_registrations for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='post_retreat_registrations' and policyname='Admins can view all post-retreat registrations') then
    create policy "Admins can view all post-retreat registrations"
      on public.post_retreat_registrations for select using (exists (select 1 from public.admins a where a.user_id = auth.uid()));
  end if;
end $$;
