import React from "react";
import { View, StyleSheet, Text } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I love React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontStyle: "italic",
    fontSize: 30,
    fontWeight: "500",
    color: "tomato",
    textTransform: "capitalize",
  },
});
