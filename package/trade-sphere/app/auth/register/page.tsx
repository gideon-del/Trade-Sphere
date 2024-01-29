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
  const submitHandler = (data: RegisterUser) => {
    console.log(data);
  };
  return (
    <main className="">
      <section className="">
        <h1>Create Account</h1>
        <form
          className="grid grid-cols-2 max-w-4xl gap-4"
          onSubmit={handleSubmit(submitHandler, (err) => console.error(err))}
        >
          <input
            placeholder="Name"
            className="px-3 py-2 rounded border border-gray-600"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="email"
            className="px-3 py-2 rounded border border-gray-600"
            {...register("email")}
          />
          <input
            placeholder="Bussiness Name"
            className="px-3 py-2 rounded border border-gray-600"
            {...register("bussiness_name")}
          />
          <input
            type="password"
            placeholder="password"
            className="px-3 py-2 rounded border border-gray-600"
            {...register("password")}
          />
          <button
            type="submit"
            className="bg-red-500 col-span-2 py-2 rounded text-white font-medium"
          >
            Submit
          </button>
        </form>
      </section>
      <section></section>
    </main>
  );
};

export default Register;
