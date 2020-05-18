import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/background.jpg")}
        style={styles.bgImage}
      >
        <Image source={require("./images/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell what You Don't Need</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  logo: {
    top: 70,
    alignSelf: "center",
    width: 80,
    height: 80,
  },
  text: {
    top: 70,
    alignSelf: "center",
    fontSize: 12,
  },
});
