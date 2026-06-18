import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

/**
 * Cliente Supabase com SERVICE ROLE — ignora RLS.
 * USAR APENAS server-side (Route Handlers / scripts de migração).
 * NUNCA importar em Client Components: a service_role key é secreta.
 */
export function createAdminClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
