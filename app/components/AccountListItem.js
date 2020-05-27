import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

const AccountListItem = ({ iconName, text, bg }) => {
  return (
    <View style={styles.listContainer}>
      <View style={[styles.accountList, { backgroundColor: colors[bg] || bg }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={colors.white}
        />
      </View>
      <AppText>{text}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  accountList: {
    backgroundColor: colors.danger,
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  listContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AccountListItem;
