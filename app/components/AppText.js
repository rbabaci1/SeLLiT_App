import React from "react";
import { Text, Platform } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontSize: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
