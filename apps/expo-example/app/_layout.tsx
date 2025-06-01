import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { DripsyProvider } from "dripsy";
import { theme } from "@/libs/theme";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
      <SafeAreaProvider>
        <DripsyProvider theme={theme}>
          <Slot />
        </DripsyProvider>
      </SafeAreaProvider>
      <StatusBar style="dark" />
    </>
  );
}
