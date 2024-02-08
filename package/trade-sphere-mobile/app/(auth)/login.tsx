import { View, Text, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import { LoginCustomer } from "@/lib/types";
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const handleSubmit = async (userData: LoginCustomer) => {};
  return (
    <View>
      <Text>Sign In</Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, values, handleSubmit }) => (
          <>
            <TextInput />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
