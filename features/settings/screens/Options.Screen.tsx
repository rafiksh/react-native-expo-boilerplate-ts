import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import { View, Text } from "../../../components/Themed";

const OptionsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Options</Text>

      <Text
        onPress={() =>
          navigation.navigate("Root", {
            screen: "Settings",
            params: { screen: "Pricing" },
          })
        }
      >
        Navigate to Pricing
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { OptionsScreen };
