"use client";
import { loginUserSchema, registerUserSchema } from "@/lib/form-schemas";
import superbase from "@/lib/superbase";
import { LoginUser } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginUserSchema),
    mode: "onBlur",
  });
  const submitHandler = async (loginDetail: LoginUser) => {
    try {
      const { data, error } = await superbase.auth.signInWithPassword({
        email: loginDetail.email,
        password: loginDetail.password,
      });
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="">
      <section className="">
        <h1>Login</h1>
        <form
          className="grid grid-cols-2 max-w-4xl gap-4"
          onSubmit={handleSubmit(submitHandler, (err) => console.error(err))}
        >
          <input
            type="email"
            placeholder="email"
            className="px-3 py-2 rounded border border-gray-600"
            {...register("email")}
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

export default Login;
