import { createBrowserClient } from "@supabase/ssr";
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPERBASE_URL as string,
    process.env.NEXT_PUBLIC_SUPERBASE_KEY as string
  );
}
