import superbase from "@/lib/superbase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();
  const { data, error } = await superbase.auth.signUp({
    email,
    password,
  });
  if (error) {
    return Response.json({ error });
  }
  return Response.json({ user: data });
}
