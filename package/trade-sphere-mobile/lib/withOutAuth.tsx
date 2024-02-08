import { SplashScreen, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { supabase } from "./superbase";
import { View } from "react-native";

export default function withOutAuth(WrappedComponent: () => React.JSX.Element) {
  const Wrapper: () => React.JSX.Element = () => {
    SplashScreen.preventAutoHideAsync();
    const { replace } = useRouter();
    const component = WrappedComponent;
    useEffect(() => {
      const checkIfSessionExits = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (data.session) {
          replace("/(app)/");
          SplashScreen.hideAsync();
          return;
        }
        if (!data.session) {
          SplashScreen.hideAsync();
          return;
        }
      };
      checkIfSessionExits();
    }, []);
    return <WrappedComponent />;
  };

  return Wrapper;
}
