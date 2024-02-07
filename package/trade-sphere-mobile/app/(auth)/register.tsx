import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Formik } from "formik";
import { registerSchema } from "@/lib/validtion-schemas";

const Register = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        { paddingTop: top + 20, paddingBottom: bottom + 20 },
        styles.container,
      ]}
    >
      <Text style={styles.mainTitle}>Create account</Text>
      <Formik
        validationSchema={registerSchema}
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          password: "",
        }}
        onSubmit={(data) => console.log(data)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <TextInput
              style={styles.inputs}
              placeholder="First Name"
              onBlur={handleBlur("first_name")}
              onChangeText={handleChange("first_name")}
              value={values.first_name}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Last Name"
              onBlur={handleBlur("last_name")}
              onChangeText={handleChange("last_name")}
              value={values.last_name}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Phone Number"
              onBlur={handleBlur("phone_number")}
              onChangeText={handleChange("phone_number")}
              value={values.phone_number}
              inputMode="numeric"
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              onBlur={handleBlur("password")}
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry
            />

            <Pressable onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>Sign up</Text>
            </Pressable>
          </>
        )}
      </Formik>
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
export default Register;
