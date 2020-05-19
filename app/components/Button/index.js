import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const Button = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Button;
