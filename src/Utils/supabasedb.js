import { createClient } from "@supabase/supabase-js";



export const Supabase = createClient(
    process.env.SupaBaseUrl,
    process.env.supaAnon
)