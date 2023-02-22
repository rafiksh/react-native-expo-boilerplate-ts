import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OptionsScreen } from "./screens/Options.Screen";
import { PricingScreen } from "./screens/Pricing.Screen";

export type SettingsStackParamList = {
  Options: undefined;
  Pricing: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Options"
        component={OptionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Pricing" component={PricingScreen} />
    </Stack.Navigator>
  );
};

export { SettingsNavigator };
