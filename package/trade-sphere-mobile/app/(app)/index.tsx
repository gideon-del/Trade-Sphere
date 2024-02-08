import { View, Text } from "react-native";
import React from "react";
import withAuth from "@/lib/withAuth";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default withAuth(HomeScreen);
