-- ============================================================
-- Run this once in Supabase → SQL Editor → New query → Run
-- ============================================================

-- 1. Table to hold retreat registration details.
--    Auth (email/password, sessions) is handled by Supabase's
--    built-in auth.users table — this table just adds the
--    retreat-specific fields, linked to that user.
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  full_name text not null,
  email text,
  phone text not null,
  parish_unit text,
  arrival_day text,        -- 'friday', 'saturday', or 'both'
  created_at timestamptz default now()
);

-- 2. Turn on Row Level Security so people can only see/edit
--    their own registration row — required, off by default.
alter table public.registrations enable row level security;

-- 3. Policy: a logged-in user can insert their own row.
create policy "Users can insert their own registration"
  on public.registrations for insert
  with check (auth.uid() = user_id);

-- 4. Policy: a logged-in user can view their own row.
create policy "Users can view their own registration"
  on public.registrations for select
  using (auth.uid() = user_id);

-- 5. Policy: a logged-in user can update their own row
--    (e.g. if they need to fix a typo after registering).
create policy "Users can update their own registration"
  on public.registrations for update
  using (auth.uid() = user_id);

-- Optional, for the committee: create a separate admin role or
-- use the Supabase dashboard's Table Editor (with the
-- service_role key, never exposed to the browser) to view all
-- registrations at once.

-- ============================================================
-- Admin portal support
-- ============================================================

-- 6. A table listing which accounts are allowed to see everyone's
--    registration (rather than just their own). There is no
--    "make me admin" button anywhere on the site on purpose —
--    you add committee members here yourself, from the SQL Editor.
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.admins enable row level security;

-- Only an existing admin can see who else is an admin.
create policy "Admins can view the admins list"
  on public.admins for select
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()));

-- 7. Extend the registrations policy so admins can see every row,
--    not just their own (the earlier "view their own" policy from
--    step 4 still applies for everyone else).
create policy "Admins can view all registrations"
  on public.registrations for select
  using (exists (select 1 from public.admins a where a.user_id = auth.uid()));

-- ------------------------------------------------------------
-- To make someone an admin:
-- 1. Have them register normally on the site first (so they
--    exist in auth.users), then run:
--
--    insert into public.admins (user_id)
--    select id from auth.users where email = 'their-email@example.com';
--
-- 2. They can then log in and open admin.html.
-- ------------------------------------------------------------

-- ============================================================
-- Registration form v2: focus areas + province/zone/area/parish
-- Run this once to extend the existing registrations table.
-- (The old parish_unit column is left in place, just unused by
-- the new form — safe to drop later once you've migrated any
-- existing rows.)
-- ============================================================

alter table public.registrations
  add column if not exists focus_areas text[],
  add column if not exists province text,
  add column if not exists zone text,
  add column if not exists area text,
  add column if not exists parish text;
