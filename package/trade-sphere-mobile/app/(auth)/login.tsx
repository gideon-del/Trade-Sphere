import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { LoginCustomer } from "@/lib/types";
import { loginSchema } from "@/lib/validtion-schemas";
import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { supabase } from "@/lib/superbase";
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();
  const handleSubmit = async (userData: LoginCustomer) => {
    console.log(userData);
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      if (error) {
        console.error(error);
      }
      replace("/(app)/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View
      style={[
        { paddingTop: top + 20, paddingBottom: bottom + 20 },
        styles.container,
      ]}
    >
      <Text style={styles.mainTitle}>Sign In</Text>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, handleSubmit }) => (
          <>
            <TextInput
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Email"
              style={styles.inputs}
            />
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="password"
              style={styles.inputs}
            />
            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
      <Link href={"/(auth)/register"}>Sign Up</Link>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "capitalize",
  },
  inputs: {
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
    paddingHorizontal: 15,
    paddingVertical: 19,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "#00f",
    textAlign: "center",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "500",
  },
});
export default Login;
