import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { MainContextProvider } from "./context/Main.Context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation } from "./navigation/Root.Navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <MainContextProvider>
        <Navigation colorScheme={colorScheme} />
      </MainContextProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
