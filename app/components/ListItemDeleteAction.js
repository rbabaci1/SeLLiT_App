import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const ListItemDeleteAction = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});

export default ListItemDeleteAction;
