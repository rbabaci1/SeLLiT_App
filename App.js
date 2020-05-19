import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppText>I love React Native!</AppText> */}
      <AppButton title='Login' onPress={() => console.log("pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
