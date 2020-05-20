import React from "react";
import { View, StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        image={require("./app/assets/jacket.jpg")}
        title='Red jacket for sale'
        subTitle='$100'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
