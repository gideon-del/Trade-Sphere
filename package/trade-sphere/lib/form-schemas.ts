import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string().min(1, "This filed is required"),
  email: z.string().email("This is required").min(1, "This filed is required"),
  bussiness_name: z.string().min(1, "This filed is required"),
  bussiness_logo: z.string().optional(),
  password: z.string().min(8, "Min. of 8 characters"),
});

export const loginUserSchema = z.object({
  email: z.string().email("This is required").min(1, "This filed is required"),
  password: z.string().min(8, "Min. of 8 characters"),
});
