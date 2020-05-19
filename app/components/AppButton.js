import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    borderRadius: 25,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default AppButton;
