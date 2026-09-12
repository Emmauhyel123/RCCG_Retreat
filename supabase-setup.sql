/* ============================================================
   RCCG Retreat & Concert 2026 — Supabase Setup
   
   This script creates the registrations and admins tables
   with Row Level Security (RLS) policies to enforce access control.
   
   IMPORTANT: After running this script:
   1. Grant admin access to specific users by running:
      INSERT INTO public.admins (user_id) VALUES ('<user_uuid>');
   2. Replace '<user_uuid>' with the actual UUID from auth.users
   ============================================================ */

-- Create the registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  parish_unit TEXT,
  arrival_day TEXT NOT NULL CHECK (arrival_day IN ('friday', 'saturday', 'both')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create the admins table (committee access control)
CREATE TABLE IF NOT EXISTS public.admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on registrations
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Enable RLS on admins
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Policy: Users can INSERT their own registration
CREATE POLICY "users_can_insert_own_registration" ON public.registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can SELECT their own registration
CREATE POLICY "users_can_select_own_registration" ON public.registrations
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can UPDATE their own registration
CREATE POLICY "users_can_update_own_registration" ON public.registrations
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Policy: Admins can SELECT all registrations
CREATE POLICY "admins_can_select_all_registrations" ON public.registrations
  FOR SELECT USING (EXISTS (SELECT 1 FROM public.admins WHERE admins.user_id = auth.uid()));

-- Policy: Only admins can access the admins table (read-only)
CREATE POLICY "admins_table_read_only" ON public.admins
  FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.admins));

-- Create an index on user_id for faster queries
CREATE INDEX IF NOT EXISTS idx_registrations_user_id ON public.registrations(user_id);
CREATE INDEX IF NOT EXISTS idx_admins_user_id ON public.admins(user_id);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_registration_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER registrations_update_timestamp
  BEFORE UPDATE ON public.registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_registration_timestamp();

/* 
   TO GRANT ADMIN ACCESS:
   
   In the Supabase dashboard, go to SQL Editor and run:
   
   INSERT INTO public.admins (user_id) VALUES ('<user_uuid>');
   
   Replace '<user_uuid>' with the user's UUID from auth.users.
   You can find this in Auth → Users in your Supabase dashboard.
*/
