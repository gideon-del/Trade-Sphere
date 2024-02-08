import { View, Text, Pressable } from "react-native";
import React from "react";
import withOutAuth from "@/lib/withOutAuth";

const Verification = () => {
  return (
    <View>
      <Text>Account Created</Text>
      <Text>Visit your email to verify your account</Text>
      <Pressable></Pressable>
    </View>
  );
};

export default withOutAuth(Verification);
