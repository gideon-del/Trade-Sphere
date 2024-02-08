import { View, Text, Pressable } from "react-native";
import React from "react";
import { supabase } from "@/lib/superbase";
import { useRouter } from "expo-router";

const Profile = () => {
  const { replace } = useRouter();
  const logout = async () => {
    await supabase.auth.signOut();
    replace("/(auth)/login");
  };
  return (
    <View>
      <Text>Profile</Text>
      <Pressable>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
