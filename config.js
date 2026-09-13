/* ============================================================
   Supabase project configuration
   ------------------------------------------------------------
   Fill these in from your Supabase project:
   Project Settings → API → Project URL / anon public key.
   The anon key is safe to expose in front-end code — it only
   works within the permissions your Row Level Security (RLS)
   policies allow. Never put your service_role key here.
   ============================================================ */

const SUPABASE_URL =
  'https://vqyyhzjwrjyfidqspftb.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_e08VQGAP_ErOMPTHakYeiw_GbDAX9bP';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
