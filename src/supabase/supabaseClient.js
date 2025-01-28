import { createClient } from "@supabase/supabase-js";

const supabaseurl = import.meta.env.VITE_SUPABSE_URL;
const supabasekey = import.meta.env.VITE_SUPABSE_KEY;

export const supabase = createClient(supabaseurl,supabasekey);