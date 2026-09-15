/* ============================================================
   Supabase project configuration
   ------------------------------------------------------------
   Connected to the real project: vqyyhzjwrjyfidqspftb
   (Emmauhyel123's Project, eu-west-1)
   ============================================================ */

const SUPABASE_URL = "https://vqyyhzjwrjyfidqspftb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxeXloemp3cmp5ZmlkcXNwZnRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNTQ1NjQsImV4cCI6MjEwNDczMDU2NH0.-o31etxRA-s58TEjXbQaE7TtqRqrDs4Zp7Cm27yl6js";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
