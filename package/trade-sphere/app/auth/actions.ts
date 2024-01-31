"use server";

import { createClient } from "@/lib/superbase-ssr/actions";
import { LoginUser, RegisterUser } from "@/lib/types";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const loginUser = async (userDetails: LoginUser) => {
  const superbase = await createClient(cookies());
  const { error } = await superbase.auth.signInWithPassword({
    ...userDetails,
  });
  if (error) {
    redirect("/error");
  }
  redirect("/");
};

export const registerUser = async (userDetail: RegisterUser) => {
  const { email, password, ...rest } = userDetail;
  const superbase = await createClient(cookies());
  const { error } = await superbase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...rest,
        is_vendor: true,
      },
    },
  });
  if (error) {
    redirect("/error");
  }
  redirect("/");
};
