import * as yup from "yup";
export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_number: yup.number().min(10, "Enter valid phone number"),
  password: yup.string().min(8, "Minimum of 8 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().min(8, "Minimum of 8 characters"),
});
