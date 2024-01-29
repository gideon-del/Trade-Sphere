"use client";
import { registerUserSchema } from "@/lib/form-schemas";
import { RegisterUser } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterUser>({
    resolver: zodResolver(registerUserSchema),
    mode: "onBlur",
  });

  return (
    <main>
      <section className="">
        <h1>Create Account</h1>
        <form className="">
          <input placeholder="Name" />
          <input type="email" placeholder="email" />
          <input placeholder="Bussiness Name" />
          <input type="password" placeholder="password" />
        </form>
      </section>
      <section></section>
    </main>
  );
};

export default Register;
