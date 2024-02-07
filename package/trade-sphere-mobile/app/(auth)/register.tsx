import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Register = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        { paddingTop: top + 20, paddingBottom: bottom + 20 },
        styles.container,
      ]}
    >
      <TextInput style={styles.inputs} placeholder="First Name" />
      <TextInput style={styles.inputs} placeholder="Last Name" />
      <TextInput style={styles.inputs} placeholder="Email" />
      <TextInput style={styles.inputs} placeholder="Phone Number" />
      <TextInput style={styles.inputs} placeholder="Password" />
      <TextInput style={styles.inputs} placeholder="Confirm Password" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "solid",
  },
});
export default Register;
