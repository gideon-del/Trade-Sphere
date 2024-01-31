import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPERBASE_URL as string,
    process.env.NEXT_PUBLIC_SUPERBASE_KEY as string,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}
