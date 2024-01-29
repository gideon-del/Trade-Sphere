import { createClient } from "@supabase/supabase-js";

const superbase = createClient(
  process.env.NEXT_PUBLIC_SUPERBASE_URL as string,
  process.env.NEXT_PUBLIC_SUPERBASE_KEY as string
);

export default superbase;
