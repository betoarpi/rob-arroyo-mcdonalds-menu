import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useCallback, useEffect, useState } from "react";

import MainContainer from "./src/components/MainContainer";
import { View } from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Inter_400Regular, Inter_700Bold });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <MainContainer />
    </View>
  );
}
