import { useContext, useState } from "react";
import { Button, StyleSheet } from "react-native";

import { View, Text, TextInput } from "../../../components/Themed";
import { MainContext } from "../../../context/Main.Context";

const PricingScreen = () => {
  const [newExchangeRate, setNewExchangeRate] = useState("50000");

  const { exchangeRate, setExchangeRate } = useContext(MainContext);

  const onSaveExchangeRateHandler = () => {
    setExchangeRate(Number(newExchangeRate));

    alert("Exchange rate saved successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Current exchange rate: {exchangeRate} LBP</Text>
      </View>

      <View style={styles.section}>
        <Text>New exchange rate:</Text>
        <TextInput value={newExchangeRate} onChangeText={setNewExchangeRate} />
      </View>

      <View style={styles.section}>
        <Button
          title="Save Exchange Rate"
          onPress={onSaveExchangeRateHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    marginBottom: 20,
  },
});

export { PricingScreen };
