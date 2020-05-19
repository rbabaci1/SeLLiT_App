import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./app/components/AppText";
import Button from "./app/components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppText>I love React Native!</AppText> */}
      <Button>LOGIN</Button>
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
