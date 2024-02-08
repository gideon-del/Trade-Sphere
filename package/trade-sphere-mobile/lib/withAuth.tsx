import { SplashScreen, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { supabase } from "./superbase";

export default function withAuth(WrappedComponent: () => React.JSX.Element) {
  const Wrapper = () => {
    SplashScreen.preventAutoHideAsync();
    const { replace } = useRouter();
    useEffect(() => {
      const checkIfSessionExits = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error || !data.session) {
          replace("/(auth)/login");
          SplashScreen.hideAsync();
          return;
        }
        if (data.session) {
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
